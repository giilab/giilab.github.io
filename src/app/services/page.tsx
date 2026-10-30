import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid, ButtonLink } from "@/components/ui";
import { ServicesVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { SERVICES, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/services/",
  "AI Automation, Agents & Consulting Services",
  "AI automation, agent development, custom AI apps, integrations, process automation and AI consulting, measured on your real data.",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        visual={<ServicesVisual />}
        eyebrow="Services"
        title={<>Six ways to put AI <span className="serif accent">to work.</span></>}
        lead="Engagements are scoped to a problem, not a technology. If a simpler fix would do the job, that is what we will recommend."
      >
        <nav aria-label="Services on this page" className="mt-9 flex flex-wrap gap-2.5">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-line-strong px-4 py-2 text-[0.85rem] text-muted transition-colors hover:border-accent hover:text-accent-ink"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {SERVICES.map((s) => (
              <Card key={s.slug} className="scroll-mt-28 gap-4" >
                <div id={s.slug} className="scroll-mt-28" />
                <h2 className="text-[1.3rem] font-semibold">{s.title}</h2>
                <p className="text-[0.98rem] text-muted">{s.summary}</p>
                <p className="text-[0.93rem] text-muted">{s.detail}</p>
                <div className="mt-1">
                  <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint">
                    What you get
                  </h3>
                  <ul className="mt-2.5 grid gap-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-[0.92rem] text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold">
                Not sure which one <span className="serif accent">you need?</span>
              </h2>
              <p className="mt-4 max-w-[48ch] text-[1.02rem] text-muted">
                Most people arrive with a problem rather than a service in mind. A
                30-minute call is usually enough to work out whether it is an AI problem,
                an integration problem or a process problem.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact/">Book a call</ButtonLink>
              </div>
            </div>
            <Grid cols={2} className="gap-4">
              {[
                ["Start here", "A scoped proof against your real cases"],
                ["Then", "A production build with tests and monitoring"],
                ["Or", "An architecture review, if you have a team already"],
                ["Always", "A measurable success criterion agreed up front"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-[var(--radius-brand)] border border-line bg-surface p-5">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint">
                    {k}
                  </span>
                  <p className="mt-2 text-[0.95rem]">{v}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
