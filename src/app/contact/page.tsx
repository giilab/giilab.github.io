import type { Metadata } from "next";
import { Container, Section, SectionHead, PageHero, Card } from "@/components/ui";
import { AiVisual } from "@/components/HeroVisuals";
import ContactForm from "@/components/ContactForm";
import { SITE, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/contact/",
  "Contact Us to Start an AI Project",
  "Tell us the problem you are trying to solve and get an honest answer on whether AI is the right tool. Start a project with Giilab.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        visual={<AiVisual />}
        eyebrow="Contact"
        title={<>Tell us what your <span className="serif accent">business needs.</span></>}
        lead="One free 30-minute call, and an honest answer on what AI can and cannot do about it. Bring a problem rather than a brief."
      />

      <Section className="pt-0">
        <Container>
          <SectionHead
            eyebrow="FAQ"
            title={<>Before you <span className="serif accent">get in touch.</span></>}
          />
          <dl className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className={`${FAQ_ITEM} lg:row-span-2`}>
              <dt className="text-[1.05rem] font-semibold">What should I put in my message?</dt>
              <dd className="mt-2.5 grid gap-2.5 text-[0.95rem] text-muted">
                <p>You do not need a brief or a spec. A few lines on each of these is plenty:</p>
                <ul className="grid list-disc gap-1.5 pl-4">
                  <li>What the work looks like today, and who does it.</li>
                  <li>Roughly how often it happens, or how much of it there is.</li>
                  <li>Which systems or files the data lives in.</li>
                  <li>What you have already tried.</li>
                </ul>
                <p>
                  Not sure AI is the answer? Say so. Often the cheaper fix is a change to a
                  process or to the data, and we will tell you if it is.
                </p>
              </dd>
            </div>
            {FAQ.map(([q, a]) => (
              <div key={q} className={FAQ_ITEM}>
                <dt className="text-[1.05rem] font-semibold">{q}</dt>
                <dd className="mt-2.5 text-[0.95rem] text-muted">{a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div className="rounded-[var(--radius-brand)] border border-line bg-surface p-6 sm:p-9">
              <h2 className="text-[1.3rem] font-semibold">Let&rsquo;s talk</h2>
              <p className="mt-2 mb-7 text-[0.95rem] text-muted">
                Fields marked with an asterisk are required.
              </p>
              <ContactForm />
            </div>

            <div className="grid content-start gap-5">
              <Card className="gap-2.5">
                <h2 className="text-[1.05rem] font-semibold">Email</h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[0.95rem] text-accent-ink underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </Card>
              <Card className="gap-2.5">
                <h2 className="text-[1.05rem] font-semibold">Phone</h2>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-[0.95rem] text-accent-ink underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </a>
              </Card>
              <Card className="gap-2.5">
                <h2 className="text-[1.05rem] font-semibold">Where we are</h2>
                <address className="text-[0.95rem] not-italic text-muted">
                  {SITE.location}
                </address>
                <p className="text-[0.9rem] text-muted">
                  We work with teams across time zones, with deliberate overlap each day.
                </p>
              </Card>
              <Card className="gap-2.5">
                <h2 className="text-[1.05rem] font-semibold">What happens next</h2>
                <ol className="grid list-decimal gap-1.5 pl-4 text-[0.92rem] text-muted">
                  <li>We read it and reply within two working days.</li>
                  <li>A 30-minute call to understand the problem properly.</li>
                  <li>A scoped proposal, or an honest no.</li>
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}

// Static answers, so a plain box rather than Card (no hover lift on something you cannot click).
const FAQ_ITEM = "rounded-[var(--radius-brand)] border border-line bg-surface px-7 py-[26px]";

const FAQ = [
  ["Is the first call free?", "Yes. One 30-minute call, with no obligation to go further. Bring whoever knows the work best."],
  ["What does it cost?", "It depends on the scope. After the call you get a scoped proposal, so you know the cost before any work starts."],
  ["Will you sign an NDA?", "Yes. If it helps, we sign one before you share any details about your systems or your data."],
  ["Do you work with teams outside India?", "Yes. We work with teams across time zones and keep a few hours of overlap with your working day."],
];
