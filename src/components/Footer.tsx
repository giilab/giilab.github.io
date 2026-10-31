import Link from "next/link";
import { LockupStacked } from "./Logo";
import { Container, SocialIcon } from "./ui";
import { SITE, SERVICES, NAV } from "@/lib/site";

const HEADING = "f-heading";

const COMPANY = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
  { href: "/editorial-policy/", label: "Editorial policy" },
];

function LinkColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className={HEADING}>{title}</h2>
      <ul className="grid gap-[11px]">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="f-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-[2] mt-[clamp(56px,7vw,88px)] border-t border-line bg-elevated pt-[clamp(56px,7vw,88px)]">
      <Container>
        <div className="grid grid-cols-1 gap-[clamp(28px,3.5vw,48px)] pb-[clamp(48px,6vw,72px)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_auto_auto_auto_auto_auto] lg:gap-x-[clamp(40px,4vw,64px)]">
          <div>
            <Link href="/">
              <LockupStacked markHeight={54} />
            </Link>
            <p className="mt-[18px] max-w-[19rem] text-[0.9rem] font-semibold text-text">
              {SITE.positioning}
            </p>
            <p className="mt-2 max-w-[19rem] text-[0.9rem] text-muted">
              We combine AI engineering, business automation and software development to
              build reliable systems that fit the way you work.
            </p>
            <address className="mt-[18px] flex items-center gap-2 text-[0.9rem] not-italic text-text">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-accent-ink">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              {SITE.location}
            </address>
          </div>

          <LinkColumn title="Explore" links={NAV.filter((item) => item.href !== "/about/")} />
          <LinkColumn title="Company" links={COMPANY} />

          <nav aria-label="Services" className="max-w-[11rem]">
            <h2 className={HEADING}>Services</h2>
            <ul className="grid gap-[11px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/#${s.slug}`} className="f-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LinkColumn title="Legal" links={LEGAL} />

          <nav aria-label="Connect">
            <h2 className={HEADING}>Connect</h2>
            <ul className="grid gap-[11px]">
              <li><a href={`mailto:${SITE.email}`} className="f-link">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="f-link">{SITE.phone}</a></li>
              <li className="flex gap-4 pt-1">
                {[
                  { href: SITE.linkedin, icon: "linkedin" as const, label: "LinkedIn" },
                  { href: SITE.whatsapp, icon: "whatsapp" as const, label: "WhatsApp" },
                  { href: SITE.github, icon: "github" as const, label: "GitHub" },
                ]
                  .filter((s) => s.href)
                  .map((s) => (
                    <a
                      key={s.icon}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SITE.name} on ${s.label}`}
                      title={s.label}
                      className="f-link"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  ))}
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line py-[26px] text-[0.84rem] text-faint">
          <span>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span>Working with businesses worldwide.</span>
        </div>
      </Container>
    </footer>
  );
}
