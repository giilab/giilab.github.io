import {
  MARK_VIEWBOX,
  MARK_ASPECT,
  MARK_PATH,
  WORD_VIEWBOX,
  WORD_ASPECT,
  WORD_PATH,
  GRADIENT,
  LOCKUP,
} from "@/lib/logo";
import { useId } from "react";

/** The Giilab ribbon mark. Gradient by default, or a single colour via `mono`. */
export function Mark({
  height = 36,
  mono = false,
  title,
  className,
}: {
  height?: number;
  mono?: boolean;
  title?: string;
  className?: string;
}) {
  // Each instance needs its own gradient id so multiple marks can coexist;
  // useId keeps it identical between server render and hydration.
  const id = `giilab-grad-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      width={Math.round(height * MARK_ASPECT * 100) / 100}
      height={height}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {!mono && (
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
      )}
      <path d={MARK_PATH} fill={mono ? "currentColor" : `url(#${id})`} />
    </svg>
  );
}

/** The "Giilab" wordmark, outlined — no font dependency. */
export function Wordmark({ height = 19, className }: { height?: number; className?: string }) {
  return (
    <svg
      viewBox={WORD_VIEWBOX}
      width={Math.round(height * WORD_ASPECT * 100) / 100}
      height={height}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={WORD_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

/**
 * Mark + wordmark at the proportions measured from the brand board.
 * `markHeight` drives everything else so the lockup never drifts.
 */
export function Lockup({
  markHeight = 36,
  className,
}: {
  markHeight?: number;
  className?: string;
}) {
  const wordHeight = markHeight / LOCKUP.markToWord;
  const gap = wordHeight * LOCKUP.gapToWord;
  return (
    <span
      className={`inline-flex items-center ${className ?? ""}`}
      style={{ gap: `${gap}px` }}
    >
      <Mark height={markHeight} title="Giilab" />
      <Wordmark height={wordHeight * 1.28} />
    </span>
  );
}

/**
 * Mark + wordmark + the "AI Engineering Studio" descriptor stacked underneath,
 * as on the brand identity board.
 *
 * One documented deviation: the board sets the descriptor at 0.141x the
 * wordmark height, which only becomes legible at a ~140px mark — far larger
 * than a site header allows. Here the descriptor is floored at 8px and may run
 * slightly wider than the wordmark. The exported SVG logo files keep the
 * board's exact proportions for large-format use.
 */
export function LockupStacked({
  markHeight = 44,
  className,
}: {
  markHeight?: number;
  className?: string;
}) {
  const wordHeight = markHeight / LOCKUP.markToWord;
  const gap = wordHeight * LOCKUP.gapToWord;
  const descriptorSize = Math.max(8, wordHeight * 0.42);
  return (
    <span className={`inline-flex items-center ${className ?? ""}`} style={{ gap: `${gap}px` }}>
      <Mark height={markHeight} title="Giilab" />
      <span className="flex flex-col" style={{ gap: `${descriptorSize * 0.9}px` }}>
        <Wordmark height={wordHeight * 1.28} />
        <span
          className="whitespace-nowrap font-medium uppercase leading-none text-muted"
          style={{ fontSize: `${descriptorSize}px`, letterSpacing: "0.17em" }}
        >
          AI Engineering Studio
        </span>
      </span>
    </span>
  );
}
