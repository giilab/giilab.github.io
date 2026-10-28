import Link from "next/link";
import { Container, Section, SectionHead, ButtonLink, Card, Grid, Pillar, Eyebrow, Pill, HeroVisual } from "@/components/ui";
import RoutingVisual from "@/components/RoutingVisual";
import HeroMark from "@/components/HeroMark";
import CTABand from "@/components/CTABand";
import { SERVICES, SOLUTIONS, PROCESS, INDUSTRIES } from "@/lib/site";

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
            Most AI projects stall between the demo and the real system. Giilab builds the
            engineering underneath &mdash; the integrations, the guardrails, the evaluation
            &mdash; and proves it on your own data before you scale it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <ButtonLink href="/contact/">Discuss your project</ButtonLink>
            <ButtonLink href="/solutions/" variant="ghost">Explore our solutions</ButtonLink>
          </div>
          <div className="mt-[clamp(44px,6vw,72px)] flex flex-wrap items-center gap-x-[14px] gap-y-2.5 text-[0.88rem] text-muted">
            <span className="text-faint">Shipped in</span>
            {INDUSTRIES.map((i, n) => (
              <span key={i.name} className="flex items-center gap-[14px]">
                {i.name}
                {n < INDUSTRIES.length - 1 && (
                  <i aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
                )}
              </span>
            ))}
          </div>
          <div className="mt-[clamp(44px,6vw,64px)]">
            <RoutingVisual />
          </div>
        </Container>
      </section>

      {/* ---------------- services ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="What we do"
            title={<>Engineering first. <span className="serif accent">Models second.</span></>}
            lead="Six ways we work with growing companies, from a single automated workflow to the architecture behind a whole product."
            wide
          />
          <Grid className="mt-[clamp(40px,6vw,72px)]">
            {SERVICES.map((s, n) => (
              <Pillar key={s.slug} index={String(n + 1).padStart(2, "0")} title={s.title}>
                <p className="text-[0.95rem] text-muted">{s.summary}</p>
                <Link href={`/services/#${s.slug}`} className="mt-auto pt-2 text-[0.9rem] text-accent-ink">
                  How it works &rarr;
                </Link>
              </Pillar>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ---------------- problem to solution ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Problem to solution"
            title={<>The expensive problems <span className="serif accent">look like this.</span></>}
            lead="Every engagement starts from a problem you can describe in a sentence, and ends with a number you can check."
            wide
          />
          <div className="mt-[clamp(40px,6vw,72px)] grid gap-5 lg:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <Card key={s.title} className="gap-4">
                <h3 className="t-h3">{s.title}</h3>
                <dl className="grid gap-3">
                  {[["Problem", s.problem], ["What we build", s.approach], ["How it is judged", s.outcome]].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-ink">{k}</dt>
                      <dd className="mt-1 text-[0.93rem] text-muted">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ))}
          </div>
          <div className="mt-9">
            <ButtonLink href="/solutions/" variant="ghost">See all solutions</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- process ---------------- */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="How we deliver"
            title={<>Small proof first. <span className="serif accent">Then scale.</span></>}
            lead="Work starts narrow and ends either in a working system or an honest recommendation not to build it. You see the result before the budget grows."
            wide
          />
          <Grid cols={4} className="mt-[clamp(40px,6vw,72px)]">
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-line-strong pt-[22px]">
                <span className="block font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-none tracking-[-0.05em] text-accent-ink">
                  {p.n}
                </span>
                <h3 className="t-h3 mt-3">{p.title}</h3>
                <p className="mt-2 text-[0.93rem] text-muted">{p.body}</p>
              </div>
            ))}
          </Grid>
          <p className="mt-[clamp(36px,5vw,56px)] font-[family-name:var(--font-display)] text-[clamp(1.3rem,2.6vw,2rem)] font-extrabold leading-tight tracking-[-0.025em]">
            Automation where it works. Judgment where it matters.{" "}
            <span className="serif accent">Security throughout.</span>
          </p>
        </Container>
      </Section>

      {/* ---------------- credibility ---------------- */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Why trust the work"
                title={<>What we will put <span className="serif accent">in writing.</span></>}
                lead="Giilab is a young studio, so here is what is actually verifiable rather than a wall of logos."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {INDUSTRIES.map((i) => <Pill key={i.name}>{i.name}</Pill>)}
              </div>
            </div>
            <ul className="grid gap-4">
              {[
                ["Senior engineering, not a hand-off", "The studio is led by a solutions architect with over a decade building production Python backends and platforms. The person who scopes the work builds it."],
                ["Accuracy as a number", "Every engagement defines a measurable success criterion up front and reports against it on your own data. If we cannot measure it, we will say so."],
                ["Your data stays yours", "Systems are designed to keep your data in your accounts wherever possible, with least-privilege access and a log of what the system did."],
                ["Model-agnostic by design", "The model sits behind an interface so it can be swapped as prices and capabilities change. No architecture built around one vendor."],
                ["We will tell you not to build", "If the honest answer is that the problem is a process or data issue rather than an AI one, that is the recommendation you get."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-[var(--radius-brand)] border border-line bg-surface p-5">
                  <h3 className="text-[1.02rem] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[0.93rem] text-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
