import Link from "next/link";
import { LockupStacked } from "./Logo";
import { Container } from "./ui";
import { SITE, SERVICES, NAV, BUILT } from "@/lib/site";

const COMPANY = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
  { href: "/about/#editorial-policy", label: "Editorial policy" },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] mt-[clamp(56px,7vw,88px)] border-t border-line bg-elevated pt-[clamp(56px,7vw,88px)]">
      <Container>
        <div className="grid grid-cols-1 gap-[clamp(28px,3.5vw,48px)] pb-[clamp(48px,6vw,72px)] sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto_auto] lg:gap-x-[clamp(40px,4vw,64px)]">
          <div>
            <Link href="/">
              <LockupStacked markHeight={54} />
            </Link>
            <p className="mt-[18px] max-w-[19rem] text-[0.9rem] font-semibold text-text">
              {SITE.positioning}
            </p>
            <p className="mt-2 max-w-[19rem] text-[0.9rem] text-muted">
              We engineer AI systems around your business needs, validate them using your
              data, and scale what works.
            </p>
            <address className="mt-[18px] text-[0.9rem] not-italic text-muted">
              <span className="mb-1 block font-semibold text-text">Office</span>
              {SITE.location}
            </address>
          </div>

          <nav aria-label="Services">
            <h2 className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-faint">Services</h2>
            <ul className="grid gap-[11px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/#${s.slug}`} className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {[
            { title: "Explore", links: NAV.filter((item) => item.href !== "/about/") },
            { title: "Company", links: COMPANY },
          ].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-faint">{col.title}</h2>
              <ul className="grid gap-[11px]">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect">
            <h2 className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-faint">Connect</h2>
            <ul className="grid gap-[11px]">
              <li><a href={`mailto:${SITE.email}`} className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">{SITE.phone}</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">LinkedIn</a></li>
              {SITE.whatsapp && (
                <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">WhatsApp</a></li>
              )}
              <li><a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-muted transition-colors hover:text-accent-ink">GitHub</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line py-[26px] text-[0.84rem] text-faint">
          <span>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span>
            Site updated{" "}
            <time dateTime={BUILT}>
              {new Date(BUILT).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </time>
          </span>
        </div>
      </Container>
    </footer>
  );
}
