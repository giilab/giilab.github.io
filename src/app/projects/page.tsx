import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid, Pill, ButtonLink } from "@/components/ui";
import { TokenStreamVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { CASE_STUDIES, INDUSTRIES, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/projects/",
  "AI Engineering Projects & Technical Portfolio",
  "The Giilab engineering portfolio: software projects, technical demonstrations and how we build AI applications in practice.",
);

// Stroke icons drawn on a 24px grid, paths inlined to avoid an icon dependency.
const CATEGORIES = [
  {
    name: "Software Engineering",
    body: "Frontend applications, backend platforms, APIs, cloud applications and integrations.",
    icon: "m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16",
  },
  {
    name: "AI Engineering",
    body: "RAG, intelligent applications, AI agents and automation demonstrations.",
    icon: "M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM9.5 15l1.75-6h1.5L14.5 15M10.1 13h3.8M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3",
  },
  {
    name: "Data & Cloud Engineering",
    body: "Data pipelines, infrastructure and operational systems.",
    icon: "M7 13.5H6.5a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 16.6 5a4 4 0 0 1 2.9 5.5M10 14.5c0-1.1 2.24-2 5-2s5 .9 5 2-2.24 2-5 2-5-.9-5-2ZM10 14.5v5c0 1.1 2.24 2 5 2s5-.9 5-2v-5M10 17c0 1.1 2.24 2 5 2s5-.9 5-2",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        visual={<TokenStreamVisual />}
        eyebrow="Projects"
        title={<>Engineering ideas into <span className="serif accent">working systems.</span></>}
        lead="Our work spans frontend applications, backend platforms, cloud-native applications, data engineering, software integrations and intelligent automation. Some client engagements are confidential. We share the technical work we can make public and discuss relevant delivery experience directly."
      />

      {CASE_STUDIES.length > 0 && (
        <Section>
          <Container>
            <Grid className="lg:grid-cols-2">
              {CASE_STUDIES.map((c) => (
                <Card key={c.slug} className="gap-3.5">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint">
                    {c.industry}
                  </span>
                  <h2 className="text-[1.25rem] font-semibold">{c.client}</h2>
                  <p className="text-[0.95rem] text-muted">{c.problem}</p>
                  <p className="text-[0.95rem] text-muted">{c.work}</p>
                  {c.outcome && (
                    <p className="text-[0.95rem] font-medium text-accent-ink">{c.outcome}</p>
                  )}
                  <div className="mt-1 flex flex-wrap gap-2">
                    {c.stack.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">Engineering Portfolio</h2>
              <p className="text-[0.95rem] text-muted">
                Explore selected software projects, open-source contributions and technical
                implementations.
              </p>
            </Card>
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">Technical Demonstrations</h2>
              <p className="text-[0.95rem] text-muted">
                See how we approach practical engineering challenges through working
                demonstrations and prototypes.
              </p>
              <p className="text-[0.95rem] text-muted">
                Each demonstration explains the problem, architecture, implementation and
                technical decisions.
              </p>
            </Card>
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">Client Engagements</h2>
              <p className="text-[0.95rem] text-muted">
                Client work is shared according to confidentiality and disclosure agreements.
              </p>
              <p className="text-[0.95rem] text-muted">
                Where permitted, we can discuss relevant experience, architecture decisions
                and delivery approaches during an initial conversation.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold">What we build</h2>
            <Grid className="mt-6 lg:grid-cols-3">
              {CATEGORIES.map((c) => (
                <Card key={c.name} className="gap-2">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={c.icon} />
                      </svg>
                    </span>
                    <h3 className="text-[1.05rem] font-semibold">{c.name}</h3>
                  </div>
                  <p className="text-[0.95rem] text-muted">{c.body}</p>
                </Card>
              ))}
            </Grid>
          </div>

          <div className="mt-12 max-w-[62ch]">
            <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold">How we demonstrate value</h2>
            <p className="mt-3 text-[0.98rem] text-muted">
              Rather than relying on generic performance claims, we prefer evidence from real
              implementations. Where a project allows publication, we document:
            </p>
            <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-[0.98rem] text-muted">
              <li>The business or technical challenge.</li>
              <li>The solution and architecture.</li>
              <li>The implementation approach.</li>
              <li>The evaluation criteria and measured outcomes.</li>
              <li>The technology stack.</li>
            </ul>
            <p className="mt-3 text-[0.98rem] text-muted">
              If we cannot back an outcome with evidence, we leave it out rather than estimate
              it. Until a client agrees to publish, we are happy to walk you through comparable
              work on a call.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold">
              Sectors the team has delivered in
            </h2>
            <p className="mt-3 max-w-[60ch] text-[0.98rem] text-muted">
              Production systems, built and run. Specific clients and outcomes are
              available on request rather than published here.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {INDUSTRIES.map((i) => (
                <Pill key={i.name}>{i.name}</Pill>
              ))}
            </div>
            <div className="mt-9">
              <ButtonLink href="/contact/" variant="ghost">
                Ask for references
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title={<>Start with your own <span className="serif accent">challenge.</span></>}
        body="A focused proof of concept can help evaluate feasibility before committing to a larger implementation."
        cta="Discuss a Proof of Concept"
      />
    </>
  );
}
