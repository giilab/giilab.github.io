import type { Metadata } from "next";
import { Container, Section, PageHero, Card, SectionHead } from "@/components/ui";
import { AgentLogVisual } from "@/components/HeroVisualsClient";
import CTABand from "@/components/CTABand";
import RoutingVisual from "@/components/RoutingVisual";
import { SOLUTIONS, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/solutions/",
  "Business AI Solutions & Intelligent Automation",
  "Explore AI-powered customer support, document processing, enterprise knowledge search and operational data solutions built around your business.",
);

const LABEL = "text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-ink";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        visual={<AgentLogVisual />}
        eyebrow="Solutions"
        title={<>Technology solutions for <span className="serif accent">real business challenges.</span></>}
        lead="Every business has processes that consume time, information that is difficult to access and systems that don't work well together. Giilab builds practical AI and software solutions to address these challenges. We start with your workflow, understand your data and validate the approach before scaling."
      />

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <Card key={s.title} className="gap-4">
                <div>
                  <h2 className="text-[1.25rem] font-semibold">{s.title}</h2>
                  <p className="mt-1.5 text-[1rem] font-medium">{s.tagline}</p>
                  <p className="mt-2 text-[0.95rem] text-muted">{s.problem}</p>
                </div>
                <div>
                  <h3 className={LABEL}>Our solution</h3>
                  <p className="mt-1 text-[0.95rem] text-muted">{s.approach}</p>
                </div>
                <div>
                  <h3 className={LABEL}>Capabilities</h3>
                  <ul className="mt-1.5 grid list-disc gap-1 pl-5 text-[0.95rem] text-muted">
                    {s.capabilities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <h3 className={LABEL}>How success is measured</h3>
                  <p className="mt-1 text-[0.95rem] text-muted">{s.outcome}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="Automation architecture"
            title={<>Automation with <span className="serif accent">human oversight.</span></>}
            lead="Our systems automate tasks when they meet defined business rules and quality requirements. Exceptions and sensitive decisions are routed to people. Every action is designed around permissions, traceability and measurable quality."
          />
          <div className="mt-12">
            <RoutingVisual full />
          </div>
        </Container>
      </Section>

      <CTABand
        title={<>Which business challenge should we <span className="serif accent">solve first?</span></>}
        body="Tell us about the workflow, information or operational problem affecting your business."
        cta="Discuss Your Project"
      />
    </>
  );
}
