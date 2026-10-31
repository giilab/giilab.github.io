import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHead, ButtonLink, Card, Grid, Pillar, Eyebrow, HeroVisual } from "@/components/ui";
import HeroMark from "@/components/HeroMark";
import CTABand from "@/components/CTABand";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta(
    "/",
    "AI Engineering, Automation & Software Solutions",
    "Giilab builds practical AI applications, intelligent automation and custom software systems for businesses. Explore your next technology solution.",
  ),
  title: { absolute: "Giilab | AI Engineering, Automation & Software Solutions" },
};

const OFFERINGS = [
  {
    title: "AI Engineering",
    body: "Build intelligent applications, AI agents and knowledge systems around your business data.",
    href: "/services/#ai-engineering",
    link: "Explore AI Engineering",
  },
  {
    title: "Business Automation",
    body: "Connect workflows, automate repetitive tasks and reduce manual operational effort.",
    href: "/services/#automation",
    link: "Explore Automation",
  },
  {
    title: "Software Engineering",
    body: "Build reliable backend platforms, APIs, integrations and data infrastructure.",
    href: "/services/#software-engineering",
    link: "Explore Software Engineering",
  },
];

const PROBLEMS = [
  ["Customer Support", "Help customers find answers and resolve routine requests faster."],
  ["Document Processing", "Extract, validate and process information from business documents."],
  ["Knowledge Management", "Make internal information easier to search, access and use."],
  ["Operational Intelligence", "Connect business data and build systems that support better decisions."],
];

// Short form of PROCESS; the About page carries the detailed version.
const STEPS = [
  ["01", "Discover", "Understand your business process, data and requirements."],
  ["02", "Prove", "Validate the approach against real business scenarios."],
  ["03", "Build", "Develop a reliable solution with integrations, testing and monitoring."],
  ["04", "Run", "Deploy, monitor and improve the system with a clear handover or ongoing support."],
];

const TRUST = [
  ["Senior Engineering", "Work directly with experienced engineering leadership from discovery through delivery."],
  ["Measurable Outcomes", "Define success criteria before development and evaluate results against real business scenarios."],
  ["Responsible Implementation", "Build with appropriate access controls, data protection, testing and human oversight."],
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="relative z-[2] pt-[clamp(118px,11vw,152px)] pb-[clamp(40px,5vw,64px)]">
        <Container>
          <HeroVisual><HeroMark /></HeroVisual>
          <Eyebrow>AI engineering studio</Eyebrow>
          <h1 className="t-hero mt-[26px]">
            Make <span className="ghost">AI</span> work
            <br />
            for <span className="serif accent">your business.</span>
          </h1>
          <p className="t-lead mt-6">
            Most AI projects stall between the demo and the real system. Giilab builds what
            sits underneath: the integrations, the guardrails and the testing. We validate
            solutions against your business data before scaling what works.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <ButtonLink href="/contact/">Discuss Your Project</ButtonLink>
            <ButtonLink href="/solutions/" variant="ghost">Explore Our Solutions</ButtonLink>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {["AI Engineering", "Business Automation", "Software Engineering"].map((c) => (
              <li key={c} className="rounded-full bg-accent-soft px-4 py-1.5 text-[0.88rem] font-medium text-accent-ink">
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- what we do ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="What we do"
            title={<>Engineering first. <span className="serif accent">Business outcomes always.</span></>}
            lead="We combine AI, automation and software engineering to solve practical business challenges."
            wide
          />
          <Grid className="mt-[clamp(40px,6vw,72px)]">
            {OFFERINGS.map((o, n) => (
              <Pillar key={o.title} index={String(n + 1).padStart(2, "0")} title={o.title}>
                <p className="text-[0.95rem] text-muted">{o.body}</p>
                <Link href={o.href} className="mt-auto pt-2 text-[0.9rem] text-accent-ink">
                  {o.link} &rarr;
                </Link>
              </Pillar>
            ))}
          </Grid>
          <div className="mt-9">
            <ButtonLink href="/services/" variant="ghost">Explore All Services</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- problems we solve ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Problems we solve"
            title={<>Solve the problems <span className="serif accent">slowing your business down.</span></>}
            wide
          />
          <Grid cols={4} className="mt-[clamp(40px,6vw,72px)]">
            {PROBLEMS.map(([t, d]) => (
              <Card key={t} className="gap-2">
                <h3 className="text-[1.1rem] font-semibold">{t}</h3>
                <p className="text-[0.93rem] text-muted">{d}</p>
              </Card>
            ))}
          </Grid>
          <div className="mt-9">
            <ButtonLink href="/solutions/" variant="ghost">Explore Business Solutions</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- how we work ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="How we work"
            title={<>Small proof first. <span className="serif accent">Then scale.</span></>}
            lead="We take a measured approach to building technology solutions."
            wide
          />
          <Grid cols={4} className="mt-[clamp(40px,6vw,72px)]">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="border-t-2 border-line-strong pt-[22px]">
                <span className="block font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent-ink">
                  {n}
                </span>
                <h3 className="t-h3 mt-3">{t}</h3>
                <p className="mt-2 text-[0.93rem] text-muted">{d}</p>
              </div>
            ))}
          </Grid>
          <div className="mt-9">
            <ButtonLink href="/about/#process" variant="ghost">Our Engineering Approach</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- why giilab ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Why Giilab"
            title={<>Engineering you can evaluate. <span className="serif accent">Solutions you can trust.</span></>}
            wide
          />
          <Grid className="mt-12">
            {TRUST.map(([t, d], i) => (
              <Card key={t} className="gap-0">
                <span className="block font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold">{t}</h3>
                <p className="mt-2 text-[0.93rem] text-muted">{d}</p>
              </Card>
            ))}
          </Grid>
          <div className="mt-9">
            <ButtonLink href="/about/" variant="ghost">About Giilab</ButtonLink>
          </div>
        </Container>
      </Section>

      <CTABand
        body="You don't need a technical specification to start. Tell us about the challenge, and we'll help you understand the right approach. Start with a free 30-minute discovery conversation."
        cta="Discuss Your Project"
      />
    </>
  );
}
