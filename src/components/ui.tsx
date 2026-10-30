import Link from "next/link";
import type { ReactNode } from "react";
import { AfterMount } from "@/components/HeroVisualsClient";

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
      <AfterMount>{children}</AfterMount>
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

// Brand glyphs (Simple Icons paths, 24x24), drawn in currentColor.
const SOCIAL_PATHS = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
} as const;

export function SocialIcon({ name, size = 20 }: { name: keyof typeof SOCIAL_PATHS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  );
}
