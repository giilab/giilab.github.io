import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid } from "@/components/ui";
import { RippleVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { INDUSTRIES, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/industries/",
  "AI & Software for Manufacturing, Energy, IIoT",
  "Where Giilab has shipped production software: education, food, healthcare, manufacturing, industrial, energy, IIoT, open source.",
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        visual={<RippleVisual />}
        eyebrow="Industries"
        title={<>Where we have <span className="serif accent">actually shipped.</span></>}
        lead="This is a short list on purpose. These are the sectors where we have built production systems. We have not listed every industry an AI studio could claim."
      />

      <Section>
        <Container>
          <Grid className="lg:grid-cols-2">
            {INDUSTRIES.map((i) => (
              <Card key={i.name} className="gap-3">
                <h2 className="text-[1.2rem] font-semibold">{i.name}</h2>
                <p className="text-[0.95rem] text-muted">{i.note}</p>
              </Card>
            ))}
          </Grid>

          <div className="mt-12 rounded-[var(--radius-brand)] border border-line bg-surface p-7">
            <h2 className="text-[1.1rem] font-semibold">Not on the list?</h2>
            <p className="mt-2 max-w-[62ch] text-[0.95rem] text-muted">
              The engineering under these systems carries over from one sector to the
              next: search, extraction, integration, data pipelines and review queues.
              Domain knowledge does not. If your field is not here, we will tell you what
              we would need to learn, and how long that takes, before we quote anything.
            </p>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] text-muted">
              Whatever the sector, the work starts the same way. We look at one process as
              it runs today and agree a number that defines success. Then we test the idea
              on your own data before building anything bigger.
            </p>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Tell us about your sector."
        body="A short call is usually enough to work out whether the problem is one we can help with."
      />
    </>
  );
}
