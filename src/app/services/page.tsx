import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid } from "@/components/ui";
import { ServicesVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { SERVICES, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/services/",
  "AI Development & Software Engineering Services",
  "Giilab services: custom AI applications, AI agents, AI automation, AI integrations, process automation and AI consulting.",
);

const GROUPS = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    blurb: "Build intelligent software applications that work with your data, systems and processes.",
    slugs: ["ai-automation", "ai-agents", "ai-applications"],
  },
  {
    id: "automation",
    title: "Business Automation & Integration",
    blurb: "Connect your applications, eliminate repetitive work and improve how information moves across your organisation.",
    slugs: ["ai-integrations", "process-automation"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering & AI Consulting",
    blurb: "Get the architecture, engineering expertise and technical direction needed to build reliable software systems.",
    slugs: ["ai-consulting"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        visual={<ServicesVisual />}
        eyebrow="Services"
        title={<>Engineering services <span className="serif accent">built around your business.</span></>}
        lead="From intelligent applications to automated workflows and backend platforms, we design and build technology that addresses real operational challenges. Every engagement starts with understanding the problem, evaluating feasibility and choosing the right engineering approach. Not every problem needs AI. We recommend the simplest solution that delivers the required outcome."
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

      {GROUPS.map((g) => (
        <Section key={g.id} id={g.id} className="scroll-mt-20">
          <Container>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold">{g.title}</h2>
            <p className="mt-3 max-w-[60ch] text-[1.02rem] text-muted">{g.blurb}</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {SERVICES.filter((s) => g.slugs.includes(s.slug)).map((s) => (
                <Card key={s.slug} className="gap-4">
                  <div id={s.slug} className="scroll-mt-28" />
                  <h3 className="text-[1.3rem] font-semibold">{s.title}</h3>
                  <p className="text-[0.98rem] text-muted">{s.summary}</p>
                  <p className="text-[0.93rem] text-muted">{s.detail}</p>
                  <div className="mt-1">
                    <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint">
                      What we deliver
                    </h4>
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
      ))}

      <Section>
        <Container>
          <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold">
            How engagements <span className="serif accent">usually run.</span>
          </h2>
          <Grid cols={4} className="mt-8 gap-4">
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
        </Container>
      </Section>

      <CTABand
        title={<>Not sure which service <span className="serif accent">you need?</span></>}
        body="Start with the problem you want to solve. We'll help identify whether AI, automation, software engineering or a combination of these is the right approach."
        cta="Discuss Your Project"
      />
    </>
  );
}
