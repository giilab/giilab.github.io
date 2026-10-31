"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LockupStacked } from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV } from "@/lib/site";
import { Container } from "./ui";

/** Nav label that rolls up to a duplicate of itself on hover. */
function RollLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group roll-link ${
        active ? "font-medium text-text" : "text-muted"
      }`}
    >
      <span className="roll-track">
        <span className="h-[1.5em]">{label}</span>
        <span className="h-[1.5em] text-text" aria-hidden="true">
          {label}
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-[400ms] ${
        scrolled
          ? "border-line bg-[var(--glass)] backdrop-blur-[14px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <LockupStacked markHeight={42} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[30px] lg:flex">
          {NAV.map((item) => (
            <RollLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-accent px-[18px] py-[9px] text-[0.84rem] font-semibold text-on-accent transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Discuss your project
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-text transition-colors hover:border-accent-ink hover:text-accent-ink lg:hidden"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-[var(--glass)] backdrop-blur-[14px] lg:hidden">
          <Container className="flex flex-col py-2">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-line py-3.5 text-[0.95rem] text-muted last:border-b-0">
                {item.label}
              </Link>
            ))}
            <Link href="/contact/" className="py-3.5 text-[0.95rem] font-semibold text-accent-ink">
              Discuss your project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
