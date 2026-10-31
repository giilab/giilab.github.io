import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid } from "@/components/ui";
import { RippleVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { INDUSTRIES, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/industries/",
  "AI & Software Engineering for Industry",
  "Explore Giilab's software engineering, AI automation, data integration and intelligent solutions for education, manufacturing, energy and other industries.",
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        visual={<RippleVisual />}
        eyebrow="Industries"
        title={<>Engineering solutions <span className="serif accent">across industries.</span></>}
        lead="Different industries have different operational challenges, data requirements and technology environments. Giilab applies AI engineering, software development, automation and data infrastructure to industry-specific problems. We focus on understanding the domain before recommending a solution."
      />

      <Section>
        <Container>
          <p className="mb-8 max-w-[62ch] text-[0.98rem] text-muted">
            Every sector below is one where we have delivered production systems. Areas of
            application show the kinds of work we take on there.
          </p>
          <Grid className="lg:grid-cols-2">
            {INDUSTRIES.map((i) => (
              <Card key={i.name} className="gap-3">
                <h2 className="text-[1.2rem] font-semibold">{i.title}</h2>
                <p className="text-[0.95rem] text-muted">{i.note}</p>
                <h3 className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint">
                  Areas of application
                </h3>
                <ul className="grid list-disc gap-1 pl-5 text-[0.95rem] text-muted">
                  {i.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
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
        title={<>Have a challenge specific to <span className="serif accent">your industry?</span></>}
        body="Tell us about your business environment and the problem you want to solve. We'll help evaluate the right technical approach."
        cta="Discuss Your Industry Challenge"
      />
    </>
  );
}
