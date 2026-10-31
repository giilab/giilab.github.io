import { useId } from "react";
import { Mark } from "@/components/Logo";
import { SERVICES } from "@/lib/site";
import { MARK_PATH, MARK_ASPECT, GRADIENT } from "@/lib/logo";

// Review candidates for the hero visual, one per page. Keep the winner, delete the rest.

/** Brand gradient in mark coordinates; reference it from paths drawn in mark space. */
export function MarkGradient({ id }: { id: string }) {
  return (
    <linearGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      x1={GRADIENT.x1}
      y1={GRADIENT.y1}
      x2={GRADIENT.x2}
      y2={GRADIENT.y2}
    >
      {GRADIENT.stops.map(([offset, color]) => (
        <stop key={offset} offset={offset} stopColor={color} />
      ))}
    </linearGradient>
  );
}

/** The ribbon mark centred at (cx, cy), `size` tall, inside a 400-unit scene. */
function MarkAt({ cx, cy, size, gradId }: { cx: number; cy: number; size: number; gradId: string }) {
  const s = size / 512;
  return (
    <g transform={`translate(${cx - (size * MARK_ASPECT) / 2} ${cy - size / 2}) scale(${s})`}>
      <path d={MARK_PATH} fill={`url(#${gradId})`} />
    </g>
  );
}

// Bold "AI" letterforms in a 400-unit scene: A (with its triangular counter
// cut out, evenodd) and I.
const AI_PATH =
  "M130 50H190L300 350H240L229 320H91L80 350H20Z M160 132L107.5 275H212.5Z M330 50H385V350H330Z";

/**
 * Contact hero, built like the homepage HeroMark: on an 8s loop the "AI"
 * outline draws itself, fills with the brand gradient, holds, then unwinds,
 * floating throughout.
 * Reduced motion shows it filled and still.
 */
export function AiVisual() {
  const g = `ai-${useId().replace(/:/g, "")}`;
  return (
    <div className="relative">
      <div className="hero-mark-glow" />
      <svg viewBox="0 0 400 400" className="hero-mark-float relative w-full" focusable="false">
        <defs>
          <linearGradient id={`${g}-s`} gradientUnits="userSpaceOnUse" x1={20} y1={50} x2={385} y2={350}>
            {GRADIENT.stops.map(([offset, color]) => (
              <stop key={offset} offset={offset} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
        <path d={AI_PATH} fillRule="evenodd" fill={`url(#${g}-s)`} className="hero-mark-fill" />
        <path
          d={AI_PATH}
          fill="none"
          stroke={`url(#${g}-s)`}
          strokeWidth={3}
          pathLength={1}
          className="hero-mark-draw"
        />
      </svg>
    </div>
  );
}

/**
 * Option 2: the six services orbit the mark, each lit in turn. HTML rather than
 * SVG so labels stay at a readable pixel size; cqw keeps the ring proportional.
 */
export function ServicesVisual() {
  const step = 360 / SERVICES.length;
  return (
    <div className="relative aspect-square w-full" style={{ containerType: "inline-size" }}>
      <div className="absolute inset-[15%] rounded-full border border-dashed border-line-strong" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-mark-glow" />
        <Mark height={80} className="relative" />
      </div>
      <ul className="hv-orbit hv-loop absolute inset-0">
        {SERVICES.map((s, i) => (
          <li
            key={s.slug}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${i * step}deg) translateX(35cqw) rotate(${-i * step}deg)` }}
          >
            <div className="hv-orbit hv-orbit-counter hv-loop -translate-x-1/2 -translate-y-1/2">
              <span
                className="hv-svc hv-loop block w-[30cqw] rounded-2xl border border-line bg-surface px-2.5 py-1.5 text-center text-[0.72rem] font-medium leading-tight text-muted"
                style={{ animationDelay: `${i}s` }}
              >
                {s.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Option 6: a dot grid that ripples outward from the mark. */
export function RippleVisual() {
  const g = `rv-${useId().replace(/:/g, "")}`;
  const dots: { x: number; y: number; d: number }[] = [];
  for (let x = 20; x <= 380; x += 30) {
    for (let y = 20; y <= 380; y += 30) {
      const d = Math.hypot(x - 200, y - 200);
      if (d > 70 && d < 205) dots.push({ x, y, d });
    }
  }
  return (
    <svg viewBox="0 0 400 400" className="w-full" focusable="false">
      <defs><MarkGradient id={g} /></defs>
      {dots.map(({ x, y, d }) => (
        <circle
          key={`${x},${y}`}
          cx={x}
          cy={y}
          r={2.4}
          fill="var(--accent)"
          className="hv-ripple hv-loop"
          style={{ animationDelay: `${(d / 160).toFixed(2)}s` }}
        />
      ))}
      <circle cx={200} cy={200} r={66} fill="var(--accent-soft)" />
      <MarkAt cx={200} cy={200} size={100} gradId={g} />
    </svg>
  );
}

/** Projects hero: what we build drifts into the mark, a live system comes out. */
export function TokenStreamVisual() {
  const g = `tv-${useId().replace(/:/g, "")}`;
  const tokens = ["AI Engineering", "SaaS", "Data & Cloud Engineering", "Software Engineering"];
  return (
    <svg viewBox="0 0 400 400" className="w-full" focusable="false">
      <defs><MarkGradient id={g} /></defs>
      {tokens.map((t, i) => (
        <text
          key={t}
          x={0}
          y={152 + i * 36}
          fontSize={17}
          fontWeight={500}
          className="hv-token hv-loop"
          style={{ fill: "var(--muted)", animationDelay: `${i * 1.125}s` }}
        >
          {t}
        </text>
      ))}
      <circle cx={340} cy={200} r={46} fill="var(--accent-soft)" className="hv-node hv-loop" />
      <MarkAt cx={340} cy={200} size={66} gradId={g} />
      <text
        x={340}
        y={276}
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={14}
        className="hv-json hv-loop"
        style={{ fill: "var(--accent-text)" }}
      >
        status: live
      </text>
    </svg>
  );
}
