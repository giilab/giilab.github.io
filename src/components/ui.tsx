import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative z-[2] py-[clamp(56px,7vw,88px)] ${className}`}>
      {children}
    </section>
  );
}

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative z-[2] mx-auto w-full max-w-[1240px] px-[clamp(20px,4vw,48px)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-muted">
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  wide = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-[46rem] ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`t-h2 mt-[22px] ${wide ? "t-h2-wide" : ""}`}>{title}</h2>
      {lead && <p className="t-lead mt-5">{lead}</p>}
    </div>
  );
}

const BTN =
  "group inline-flex items-center gap-2.5 rounded-full px-[30px] py-[15px] text-[0.95rem] font-semibold tracking-[0.01em] transition-[transform,background-color,color,border-color] duration-[350ms] ease-[var(--ease-brand)]";

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "ghost" | "invert";
  children: ReactNode;
  className?: string;
}) {
  const styles = {
    primary: "bg-accent text-on-accent hover:-translate-y-0.5 hover:scale-[1.02]",
    ghost:
      "border border-line-strong text-text hover:-translate-y-0.5 hover:border-accent-ink hover:text-accent-ink",
    invert: "bg-white text-[#1d4ed8] hover:-translate-y-0.5 hover:scale-[1.02]",
  }[variant];
  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-[350ms] ease-[var(--ease-brand)] group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </>
  );
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={`${BTN} ${styles} ${className}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`${BTN} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}

/** Hairline card. No shadow — depth comes from the border and the lift on hover. */
export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-[var(--radius-brand)] border border-line bg-surface px-7 py-[26px] transition-[transform,border-color] duration-500 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:border-line-strong ${className}`}
    >
      {children}
    </div>
  );
}

/** Numbered feature panel with the subtle top-down fade. */
export function Pillar({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-[var(--radius-brand)] border border-line bg-[linear-gradient(180deg,var(--bg-card),transparent)] p-[clamp(26px,3vw,38px)] transition-[transform,border-color] duration-500 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:border-line-strong">
      <span className="text-[0.85rem] tracking-[0.01em] text-accent-ink">{index}</span>
      <h3 className="t-h3">{title}</h3>
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line px-[11px] py-[5px] text-[0.76rem] text-muted">
      {children}
    </span>
  );
}

export function Grid({
  cols = 3,
  className = "",
  children,
}: {
  cols?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  return <div className={`grid grid-cols-1 gap-5 ${map} ${className}`}>{children}</div>;
}

/** Positions decorative hero art at the top right of a Container, wide screens only. */
export function HeroVisual({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[clamp(20px,4vw,48px)] top-[40px] hidden w-[clamp(240px,22vw,360px)] xl:block"
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  visual,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Decorative art beside the heading on wide screens. */
  visual?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative z-[2] pt-[clamp(118px,11vw,152px)] pb-[clamp(40px,5vw,64px)]">
      <Container>
        {visual && <HeroVisual>{visual}</HeroVisual>}
        <div className={visual ? "xl:pr-[clamp(260px,24vw,380px)]" : undefined}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="t-hero mt-[26px]">{title}</h1>
          {lead && <p className="t-lead mt-5">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

/** Body of a legal page (terms, privacy): a heading and prose per section. */
export function LegalSections({
  updated,
  sections,
}: {
  updated: string;
  sections: { h: string; body: ReactNode }[];
}) {
  return (
    <Section>
      <Container>
        <div className="max-w-[68ch]">
          <p className="text-[0.85rem] text-faint">Last updated: {updated}</p>
          {sections.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="text-[1.2rem] font-semibold">{s.h}</h2>
              <div className="mt-3 grid gap-3 text-[0.98rem] text-muted [&_a]:text-accent-ink [&_a]:underline [&_a]:underline-offset-4">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
