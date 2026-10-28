import { useId } from "react";
import { MARK_VIEWBOX, MARK_PATH, GRADIENT } from "@/lib/logo";

/**
 * Decorative hero mark: on an 8s loop the ribbon outline draws itself, fills with
 * the brand gradient, holds, then unwinds; it floats throughout. Pure CSS; reduced
 * motion shows it filled and still.
 */
export default function HeroMark({ className = "" }: { className?: string }) {
  const id = `hero-grad-${useId().replace(/:/g, "")}`;
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div className="hero-mark-glow" />
      <svg viewBox={MARK_VIEWBOX} className="hero-mark-float relative w-full" focusable="false">
        <defs>
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
        </defs>
        <path d={MARK_PATH} fill={`url(#${id})`} className="hero-mark-fill" />
        <path
          d={MARK_PATH}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={3}
          pathLength={1}
          className="hero-mark-draw"
        />
      </svg>
    </div>
  );
}
