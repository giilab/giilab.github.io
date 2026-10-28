"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Lenis smooth scrolling plus a back-to-top button. Skipped entirely for
 * visitors who prefer reduced motion — native scrolling stays in place.
 */
export default function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) lenis.current = new Lenis({ autoRaf: true, anchors: true });

    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  function toTop() {
    if (lenis.current) lenis.current.scrollTo(0);
    else window.scrollTo({ top: 0 });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-surface text-text shadow-lg transition-all duration-300 hover:border-accent-ink hover:text-accent-ink ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
