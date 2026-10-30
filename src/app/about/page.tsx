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
    d: "The real work is around the model: retrieval, integration, error handling. Keep the model swappable and the system outlives the vendor.",
  },
  {
    t: "If you cannot measure it, you cannot ship it",
    d: "We build a test set from your real cases first, so every release is checked, not guessed.",
  },
  {
    t: "Automate the confident part, route the rest",
    d: "Automate what the system handles well. Send the rest to a person, with the context attached.",
  },
  {
    t: "Boring infrastructure, carefully chosen",
    d: "Tests, monitoring and queues are not glamorous. They are why a system still works in month nine.",
  },
  {
    t: "Say when AI is the wrong tool",
    d: "Many costly problems are really data or process problems. We say so early, before you spend.",
  },
  {
    t: "Your data stays yours",
    d: "Data stays in your accounts where possible, with minimal access and an audit trail. We never reuse it without your agreement.",
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
          <SectionHead
            eyebrow="Our approach"
            title={<>What we believe about <span className="serif accent">building this stuff.</span></>}
            lead="Six beliefs that shape every project, and a quick way to tell if we fit."
          />
          {/* Numbered like the engagement stages below, but as cards. */}
          <Grid className="mt-12">
            {PRINCIPLES.map((p, i) => (
              <Card key={p.t} className="gap-0">
                <span className="block font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold">{p.t}</h3>
                <p className="mt-2 text-[0.93rem] text-muted">{p.d}</p>
              </Card>
            ))}
          </Grid>
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

      <Section id="founder">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="Who you work with"
              title={<>The person who scopes it <span className="serif accent">builds it.</span></>}
            />
            {/* Photo, then name + LinkedIn, role and a bio of verifiable facts. */}
            <div className="grid gap-6 rounded-[var(--radius-brand)] border border-line bg-surface p-6 sm:grid-cols-[160px_1fr] sm:p-7">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimiser */}
              <img
                src="/team/pratik.jpg"
                alt={`${SITE.founder.name}, ${SITE.founder.role}`}
                width={160}
                height={160}
                loading="lazy"
                className="aspect-square w-[160px] rounded-[var(--radius-brand)] object-cover"
              />
              <div className="grid content-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-[1.25rem] font-semibold">{SITE.founder.name}</h3>
                  <a
                    href={SITE.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`${SITE.founder.name} on LinkedIn`}
                    className="text-accent-ink hover:opacity-80"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
                <p className="text-[0.9rem] font-medium text-accent-ink">{SITE.founder.role}</p>
                <p className="text-[0.95rem] text-muted">
                  Pratik has more than twelve years of experience building backend platforms,
                  SaaS products and cloud-native applications with Python and AWS. He has led
                  engineering teams through planning, delivery and code review, and built
                  platforms for healthcare, SaaS, IoT and open-source education and analytics.
                  He founded {SITE.name} to bring that engineering discipline to AI work. He
                  scopes and builds every engagement himself, so the person who estimates the
                  work is the person who does it.
                </p>
                <a href={SITE.portfolio} target="_blank" rel="noopener noreferrer me" className="text-[0.9rem] font-medium text-accent-ink">
                  Portfolio &rarr;
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="editorial-policy">
        <Container>
          <div className="max-w-[68ch]">
            <SectionHead eyebrow="Editorial policy" title={<>How we write <span className="serif accent">about our work.</span></>} />
            <ul className="mt-8 grid list-disc gap-2.5 pl-5 text-[0.98rem] text-muted">
              <li>We publish client work only with the client&rsquo;s permission.</li>
              <li>We state an outcome only if we can back it with evidence. If we cannot, we leave it out rather than estimate it.</li>
              <li>We do not show logos, testimonials, numbers or certifications we cannot verify.</li>
              <li>Pages are written by {SITE.founder.name}. Legal pages show the date they were last updated.</li>
              <li>
                Spotted something wrong? Email{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent-ink underline underline-offset-4">{SITE.email}</a>{" "}
                and we will correct it.
              </li>
            </ul>
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
