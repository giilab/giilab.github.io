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

/**
 * Contact hero: dots joined into the letters "AI", pulses running along the
 * strokes, and the mark sitting in the A's triangle (centred on its incircle).
 */
export function AiVisual() {
  const g = `ai-${useId().replace(/:/g, "")}`;
  // Each stroke: x1, y1, x2, y2, segment count. Joints land on shared nodes.
  const strokes = [
    [70, 330, 150, 70, 4], [150, 70, 230, 330, 4], [90, 265, 210, 265, 2], // A
    [270, 70, 330, 70, 2], [300, 70, 300, 330, 4], [270, 330, 330, 330, 2], // I
  ];
  const links: string[] = [];
  const nodes = new Map<string, number[]>();
  for (const [x1, y1, x2, y2, n] of strokes) {
    const pts = Array.from({ length: n + 1 }, (_, i) => [x1 + ((x2 - x1) * i) / n, y1 + ((y2 - y1) * i) / n]);
    pts.forEach((p, i) => {
      nodes.set(p.join(","), p);
      if (i) links.push(`M${pts[i - 1].join(" ")}L${p.join(" ")}`);
    });
  }
  return (
    <svg viewBox="0 0 400 400" className="w-full" focusable="false">
      <defs><MarkGradient id={g} /></defs>
      {links.map((d) => (
        <path key={d} d={d} stroke="var(--line-strong)" strokeWidth={1} />
      ))}
      {links.map((d, i) => (
        <path
          key={`p${d}`}
          d={d}
          pathLength={1}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2.5}
          strokeLinecap="round"
          className="hv-pulse hv-loop"
          style={{ animationDelay: `${(i * 0.2) % 2.4}s` }}
        />
      ))}
      {[...nodes.values()].map(([x, y], i) => (
        <circle
          key={`${x},${y}`}
          cx={x}
          cy={y}
          r={5.5}
          fill="var(--bg-card)"
          stroke="var(--accent)"
          strokeWidth={2}
          className="hv-node hv-loop"
          style={{ animationDelay: `${(i * 0.3) % 2.4}s` }}
        />
      ))}
      <circle cx={150} cy={221} r={36} fill="var(--accent-soft)" className="hv-node hv-loop" />
      <MarkAt cx={150} cy={221} size={54} gradId={g} />
    </svg>
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

/** Option 5: raw tokens flow into the mark, structured fields come out. */
export function TokenStreamVisual() {
  const g = `tv-${useId().replace(/:/g, "")}`;
  const tokens = ["Invoice #4471", "Giilab LLP", "due in 30 days", "₹48,200", "GST 18%"];
  const json = ["{", '  "vendor": "Giilab LLP",', '  "total": 48200,', '  "due": "30d",', '  "tax": 0.18', "}"];
  return (
    <svg viewBox="0 0 400 400" className="w-full" focusable="false">
      <defs><MarkGradient id={g} /></defs>
      {tokens.map((t, i) => (
        <text
          key={t}
          x={0}
          y={130 + i * 34}
          fontSize={12}
          className="hv-token hv-loop"
          style={{ fill: "var(--muted)", animationDelay: `${i * 0.9}s` }}
        >
          {t}
        </text>
      ))}
      <circle cx={190} cy={200} r={50} fill="var(--accent-soft)" className="hv-node hv-loop" />
      <MarkAt cx={190} cy={200} size={72} gradId={g} />
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize={11.5}>
        {json.map((line, i) => (
          <text
            key={line}
            x={252}
            y={150 + i * 21}
            xmlSpace="preserve"
            className="hv-json hv-loop"
            style={{ fill: i === 0 || i === json.length - 1 ? "var(--muted)" : "var(--accent-text)", animationDelay: `${i * 0.35}s` }}
          >
            {line}
          </text>
        ))}
      </g>
    </svg>
  );
}
