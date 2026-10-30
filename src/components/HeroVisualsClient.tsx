"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { MARK_PATH, MARK_VIEWBOX } from "@/lib/logo";
import { MarkGradient } from "@/components/HeroVisuals";

// Review candidates that need the browser: particle sampling and a timed log.

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Option 3: scattered particles gather into the ribbon mark, then breathe. */
export function ParticleVisual() {
  const g = `pv-${useId().replace(/:/g, "")}`;
  const probe = useRef<SVGPathElement>(null);
  const [dots, setDots] = useState<{ x: number; y: number; dx: number; dy: number; t: number }[]>([]);

  useEffect(() => {
    const path = probe.current;
    if (!path) return;
    const pts = [];
    for (let x = 6; x < 479; x += 15) {
      for (let y = 6; y < 512; y += 15) {
        if (path.isPointInFill(new DOMPoint(x, y))) {
          const a = Math.random() * Math.PI * 2;
          const r = 220 + Math.random() * 200;
          pts.push({ x, y, dx: Math.cos(a) * r, dy: Math.sin(a) * r, t: Math.random() * 0.9 });
        }
      }
    }
    setDots(pts);
  }, []);

  return (
    <svg viewBox={MARK_VIEWBOX} className="w-full overflow-visible" focusable="false">
      <defs><MarkGradient id={g} /></defs>
      <path ref={probe} d={MARK_PATH} fill="none" />
      <g className="hv-breathe hv-loop">
        {dots.map((p) => (
          <circle
            key={`${p.x},${p.y}`}
            cx={p.x}
            cy={p.y}
            r={5}
            fill={`url(#${g})`}
            className="hv-gather"
            style={{ "--dx": `${p.dx}px`, "--dy": `${p.dy}px`, animationDelay: `${p.t}s` } as CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}

const LOG: [string, string][] = [
  ["✓", "LLM Agents"],
  ["✓", "Policy RAG"],
  ["✓", "Agentic RAG"],
  ["✓", "AI Governance"],
  ["✓", "LLM-as-a-Judge"],
  ["✓", "Multi-Agent Systems"],
  ["✓", "LLM Gateway"],
  ["✓", "AI-powered Chatbots"],
];

/** Option 4: an agent log that types out one step at a time, then loops. */
export function AgentLogVisual() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reducedMotion()) {
      setShown(LOG.length);
      return;
    }
    let n = 0;
    const id = window.setInterval(() => {
      // Hold the full log for a few ticks before starting over.
      n = n >= LOG.length + 4 ? 0 : n + 1;
      setShown(Math.min(n, LOG.length));
    }, 750);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-surface shadow-[0_20px_60px_-30px_rgb(11_18_32/0.35)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        {[0, 1, 2].map((i) => (
          <i key={i} className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        ))}
        <span className="ml-2 text-[0.75rem] text-faint">giilab — solutions</span>
      </div>
      <div className="min-h-[260px] px-4 py-4 font-mono text-[0.8rem] leading-[1.9]">
        {LOG.slice(0, shown).map(([mark, text]) => (
          <div key={text} className="hv-in flex gap-2.5">
            <span className={mark === "✓" ? "text-accent-ink" : mark === "?" ? "text-accent-2" : "text-faint"}>
              {mark}
            </span>
            <span className="text-muted">{text}</span>
          </div>
        ))}
        <span className="hv-blink hv-loop inline-block h-[1em] w-[0.55em] translate-y-[3px] bg-accent" />
      </div>
    </div>
  );
}

/**
 * Renders decorative hero art only after hydration, keeping its SVG markup out
 * of the page HTML. Safe because HeroVisual is absolutely positioned and
 * aria-hidden: nothing reflows and nothing is lost for crawlers or screen readers.
 */
export function AfterMount({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : null;
}
