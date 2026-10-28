import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid, Pill, ButtonLink } from "@/components/ui";
import { TokenStreamVisual } from "@/components/HeroVisuals";
import CTABand from "@/components/CTABand";
import { CASE_STUDIES, INDUSTRIES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Work Giilab has delivered, and an honest account of what we can and cannot publish yet.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  const hasPublished = CASE_STUDIES.length > 0;

  return (
    <>
      <PageHero
        visual={<TokenStreamVisual />}
        eyebrow="Projects"
        title={
          hasPublished ? (
            <>Work we can <span className="serif accent">show you.</span></>
          ) : (
            <>No case studies <span className="serif accent">yet.</span></>
          )
        }
        lead={
          hasPublished
            ? "Each entry below is work we delivered, described with the client's permission."
            : "Giilab is a young studio and the work we have delivered sits under client confidentiality. Rather than fill this page with logos and numbers we cannot evidence, here is what we can actually offer."
        }
      />

      {hasPublished ? (
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
      ) : (
        <Section>
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              <Card className="gap-3">
                <h2 className="text-[1.1rem] font-semibold">References on a call</h2>
                <p className="text-[0.95rem] text-muted">
                  We can talk through delivered work in detail, and where a client agrees,
                  put you in touch with them directly. That is more useful than a
                  paragraph on a website.
                </p>
              </Card>
              <Card className="gap-3">
                <h2 className="text-[1.1rem] font-semibold">Code you can read</h2>
                <p className="text-[0.95rem] text-muted">
                  Public repositories and a technical portfolio are linked below. They show
                  how the work is actually built rather than how it is described.
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] font-medium text-accent-ink">
                    GitHub &rarr;
                  </a>
                  <a href={SITE.portfolio} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] font-medium text-accent-ink">
                    Portfolio &rarr;
                  </a>
                </div>
              </Card>
              <Card className="gap-3">
                <h2 className="text-[1.1rem] font-semibold">A paid proof instead</h2>
                <p className="text-[0.95rem] text-muted">
                  The most honest evidence is a short, scoped build on your own cases. You
                  judge the result against a number agreed up front, then decide whether it
                  goes further.
                </p>
              </Card>
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
      )}

      <CTABand
        title="Want the detail?"
        body="We will walk you through comparable work on a call, under NDA if that helps."
      />
    </>
  );
}
