import type { Metadata } from "next";
import { Container, Section, PageHero, Card, Grid, SectionHead, SocialIcon } from "@/components/ui";
import { ParticleVisual } from "@/components/HeroVisualsClient";
import CTABand from "@/components/CTABand";
import { SITE, PROCESS, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/about/",
  "About Our AI Engineering Studio in Pune, India",
  "Meet Giilab, an engineering studio building practical AI applications, intelligent automation and reliable software systems for businesses worldwide.",
);

const PRINCIPLES = [
  {
    t: "Engineering before technology trends",
    d: "We select technology based on the problem, not because it is popular.",
  },
  {
    t: "A model is a component, not an architecture",
    d: "Reliable AI systems need strong data pipelines, integrations, testing and infrastructure.",
  },
  {
    t: "Measure before scaling",
    d: "We define evaluation criteria using real business scenarios before production deployment.",
  },
  {
    t: "Automate with appropriate oversight",
    d: "Systems should know their boundaries and involve people when decisions require judgment.",
  },
  {
    t: "Build for long-term maintainability",
    d: "Testing, monitoring, documentation and reliable infrastructure are part of the engineering work.",
  },
  {
    t: "Respect business data",
    d: "We design access controls and data handling around the client's requirements and agreements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        visual={<ParticleVisual />}
        eyebrow="About"
        title={<>An engineering studio that <span className="serif accent">happens to do AI.</span></>}
        lead={`${SITE.name} is an independent engineering studio working with startups and growing businesses. We combine software engineering, AI development and automation to build systems that are practical, measurable and maintainable. Our approach is simple: understand the problem, choose the right technology and prove the solution before scaling it. Based in Pune, India. Working with teams worldwide.`}
      />

      <Section>
        <Container>
          <SectionHead
            eyebrow="Our philosophy"
            title={<>What guides <span className="serif accent">our engineering.</span></>}
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

      <Section id="process" className="scroll-mt-20">
        <Container>
          <SectionHead
            eyebrow="How we work"
            title={<>From discovery <span className="serif accent">to production.</span></>}
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
                <h3 className="text-[1.25rem] font-semibold">{SITE.founder.name}</h3>
                <p className="text-[0.9rem] font-medium text-accent-ink">{SITE.founder.role}</p>
                <div className="grid gap-2.5 text-[0.95rem] text-muted">
                  <p>
                    Pratik brings more than 12 years of experience in software engineering,
                    backend platforms, SaaS applications and cloud-native systems.
                  </p>
                  <p>
                    His engineering experience includes Python, AWS, distributed systems, data
                    platforms and production application architecture.
                  </p>
                  <p>
                    Through {SITE.name}, he brings this experience into practical AI engineering,
                    helping businesses move from ideas and prototypes to reliable software
                    systems.
                  </p>
                  <p>
                    The goal is not to introduce AI everywhere. It is to build technology that
                    solves the right problem.
                  </p>
                </div>
                <a
                  href={SITE.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${SITE.founder.name} on LinkedIn`}
                  className="w-fit text-accent-ink hover:opacity-80"
                >
                  <SocialIcon name="linkedin" size={22} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title={<>Let&rsquo;s solve something <span className="serif accent">meaningful.</span></>}
        body="Have an idea, a technical challenge or a business process worth improving? Let's start with a conversation."
      />
    </>
  );
}
