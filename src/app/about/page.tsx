import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid, SectionHead } from "@/components/ui";
import { ParticleVisual } from "@/components/HeroVisualsClient";
import CTABand from "@/components/CTABand";
import { SITE, PROCESS, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/about/",
  "About Our AI Engineering Studio in Pune",
  "Giilab is an AI engineering studio in Pune, India. How we work, what we believe about building AI, and what we will not claim.",
);

const PRINCIPLES = [
  {
    t: "A model is a component, not an architecture",
    d: "The interesting engineering is everywhere else: the retrieval, the integration, the error handling, the place a human steps in. Treat the model as swappable and the system outlives the vendor.",
  },
  {
    t: "If you cannot measure it, you cannot ship it",
    d: "An evaluation set built from your real cases is the first thing we build and the last thing we hand over. Without it, every release is a guess and every regression is a surprise.",
  },
  {
    t: "Automate the confident part, route the rest",
    d: "Full automation is rarely the cheapest answer. Automating the eighty per cent a system handles well, and routing the rest to a person with context attached, usually is.",
  },
  {
    t: "Boring infrastructure, carefully chosen",
    d: "Observability, tests, migrations and queues are not glamorous, but they are why a system still works in month nine. We would rather be unfashionable than paged at night.",
  },
  {
    t: "Say when AI is the wrong tool",
    d: "A good share of expensive manual work is a data or process problem wearing an AI costume. Naming that early is worth more to you than a project we should not have sold.",
  },
  {
    t: "Your data stays yours",
    d: "Systems are designed to keep data in your accounts where possible, with least-privilege access and an audit trail. We do not retain or reuse client knowledge without explicit agreement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        visual={<ParticleVisual />}
        eyebrow="About"
        title={<>An engineering studio that <span className="serif accent">happens to do AI.</span></>}
        lead={`${SITE.name} is a small studio working with startups and growing companies worldwide. We build AI systems the way we would build any production software: measurable, observable and possible to maintain after we leave.`}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="Our approach"
              title={<>What we believe about <span className="serif accent">building this stuff.</span></>}
              lead="Six positions that shape every engagement. They are also the quickest way to tell whether we are a good fit for you."
            />
            <ul className="grid gap-4">
              {PRINCIPLES.map((p) => (
                <li key={p.t} className="rounded-[var(--radius-brand)] border border-line bg-surface p-6">
                  <h3 className="text-[1.05rem] font-semibold">{p.t}</h3>
                  <p className="mt-2 text-[0.94rem] text-muted">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="How an engagement runs"
            title={<>Four stages, and a <span className="serif accent">decision point at each.</span></>}
            lead="You are never more than one stage away from stopping, and every stage produces something you can evaluate."
          />
          <Grid cols={4} className="mt-12">
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-line-strong pt-6">
                <span className="block font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent-ink">
                  {p.n}
                </span>
                <h3 className="mt-3 text-[1.1rem]">{p.title}</h3>
                <p className="mt-2 text-[0.93rem] text-muted">{p.body}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">Where we are</h2>
              <p className="text-[0.95rem] text-muted">
                {SITE.location}. We work with teams across time zones, with a few hours of
                deliberate overlap each day and written updates that do not depend on
                being in the same meeting.
              </p>
            </Card>
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">How we are set up</h2>
              <p className="text-[0.95rem] text-muted">
                A small senior team rather than a pyramid. The person who scopes your work
                is the person who builds it, which is the main reason the estimates mean
                anything.
              </p>
            </Card>
            <Card className="gap-3">
              <h2 className="text-[1.1rem] font-semibold">What we will not claim</h2>
              <p className="text-[0.95rem] text-muted">
                No invented client list, no borrowed metrics, no certifications we do not
                hold. If something on this site is not yet evidenced, it is because we
                have not evidenced it.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Think we might fit?"
        body="Bring a problem rather than a brief. Thirty minutes is usually enough to tell."
      />
    </>
  );
}
