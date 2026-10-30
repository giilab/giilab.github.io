import type { Metadata } from "next";
import { Container, Section, PageHero, Card, SectionHead } from "@/components/ui";
import { AgentLogVisual } from "@/components/HeroVisualsClient";
import CTABand from "@/components/CTABand";
import RoutingVisual from "@/components/RoutingVisual";
import { SOLUTIONS, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/solutions/",
  "AI Solutions for Support, Documents & Search",
  "Practical AI use cases: support automation, document processing, knowledge search and data pipelines, measured on your data.",
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        visual={<AgentLogVisual />}
        eyebrow="Solutions"
        title={<>Use cases that <span className="serif accent">pay for themselves.</span></>}
        lead="Four problems we see most often, what we build for each, and the measure that decides whether it worked."
      />

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <Card key={s.title} className="gap-4">
                <h2 className="text-[1.25rem] font-semibold">{s.title}</h2>
                <dl className="grid gap-3.5">
                  {[
                    ["The problem", s.problem],
                    ["What we build", s.approach],
                    ["How it is judged", s.outcome],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                        {k}
                      </dt>
                      <dd className="mt-1 text-[0.95rem] text-muted">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="The operating model"
            title={<>Automation where it is confident. <span className="serif accent">People where it is not.</span></>}
            lead="Every solution above runs on the same pattern. The threshold between the two paths is yours to set, and it moves on evidence."
          />
          <div className="mt-12">
            <RoutingVisual full />
          </div>
        </Container>
      </Section>

      <CTABand
        title="Which of these is costing you most?"
        body="Bring the workflow and we will tell you, honestly, whether AI is the right tool for it."
      />
    </>
  );
}
