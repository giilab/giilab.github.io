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
    "Giilab builds practical AI applications, intelligent automation and custom software systems that hold up in everyday use.",
  ),
  title: { absolute: "Giilab | AI Engineering, Automation & Software Solutions" },
};

const OFFERINGS = [
  {
    title: "AI Engineering",
    body: "Build intelligent applications, AI agents and knowledge systems that use your own data.",
    href: "/services/#ai-engineering",
    link: "Explore AI Engineering",
  },
  {
    title: "Business Automation",
    body: "Connect your tools, automate repetitive tasks and cut down on manual work.",
    href: "/services/#automation",
    link: "Explore Automation",
  },
  {
    title: "Software Engineering",
    body: "Build reliable backend systems, APIs, integrations and data pipelines.",
    href: "/services/#software-engineering",
    link: "Explore Software Engineering",
  },
];

const PROBLEMS = [
  ["Customer Support", "Help customers find answers and solve simple requests faster. Your team keeps the hard cases."],
  ["Document Processing", "Pull the details out of invoices, forms and contracts, and check them. Unclear fields go to a person."],
  ["Knowledge Management", "Make it easy for your team to find what they need. Every answer shows where it came from."],
  ["Operational Intelligence", "Bring your data together so you can make better decisions. Spot problems early, not at month end."],
];

// Short form of PROCESS; the About page carries the detailed version.
const STEPS = [
  ["01", "Discover", "Learn how your process works today, and what you need."],
  ["02", "Prove", "Test the idea on your real cases before you spend more."],
  ["03", "Build", "Build a solid system with tests, monitoring and the right connections."],
  ["04", "Run", "Launch it, watch it and improve it. Then we hand it over, or keep supporting it."],
];

const TRUST = [
  ["Senior Engineering", "Work directly with senior engineers, from the first call to the final launch."],
  ["Measurable Outcomes", "We agree how to measure success before we build. Then we test the results on your real cases."],
  ["Responsible Implementation", "We protect your data, limit who can access it, test every change and keep people in charge of key decisions."],
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
            sits underneath: the integrations, the guardrails and the testing. We test each
            solution on your real data before we scale it.
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
            title={<>Engineering first. <span className="serif accent">Real outcomes always.</span></>}
            lead="We use AI, automation and software engineering to solve practical problems. We pick the simplest tool that does the job."
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
            title={<>Solve the problems <span className="serif accent">slowing your team down.</span></>}
            lead="Most teams lose hours each week to the same few problems. These are the four we see most often, and the ones we know how to fix."
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
            <ButtonLink href="/solutions/" variant="ghost">Explore Our Solutions</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- how we work ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="How we work"
            title={<>Small proof first. <span className="serif accent">Then scale.</span></>}
            lead="We take a measured approach. Every stage ends with something you can check, and you can stop after any of them. Nothing grows until the last step has proved it works."
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
            lead="We are a small, senior team. You talk to the people who build your system, and you see the results before you commit to more."
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
