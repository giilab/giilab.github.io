import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHead, PageHero, Card } from "@/components/ui";
import { AiVisual } from "@/components/HeroVisuals";
import ContactForm from "@/components/ContactForm";
import { SITE, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/contact/",
  "Contact Us to Discuss Your AI or Software Project",
  "Contact Giilab about your AI, automation or custom software project. Start with a free 30-minute discovery conversation.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        visual={<AiVisual />}
        eyebrow="Contact"
        title={<>Let&rsquo;s discuss what your <span className="serif accent">business needs.</span></>}
        lead="Giilab builds AI applications, automation and custom software. Have a problem to solve, an idea or a process worth improving? Tell us a little about it. We'll help you understand the possibilities, technical requirements and next steps. Start with a free 30-minute discovery conversation."
      />

      <Section className="pt-0">
        <Container>
          <SectionHead
            eyebrow="FAQ"
            title={<>Frequently asked <span className="serif accent">questions.</span></>}
          />
          <dl className="mt-10 grid gap-5 lg:grid-cols-2">
            {FAQ.map(([q, a], i) => (
              // Odd count: the last answer spans both columns so the grid has no gap.
              <div key={q} className={`faq-item ${i === FAQ.length - 1 ? "lg:col-span-2" : ""}`}>
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
                <h2 className="text-[1.05rem] font-semibold">What you can contact us about</h2>
                <ul className="grid gap-1.5 text-[0.92rem]">
                  {TOPICS.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-accent-ink underline-offset-4 hover:underline">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
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
                <ol className="grid gap-2.5 text-[0.92rem] text-muted">
                  {NEXT.map(([step, text], i) => (
                    <li key={step}>
                      <span className="font-medium text-text">
                        {String(i + 1).padStart(2, "0")} — {step}
                      </span>
                      <span className="block">{text}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}

// Static answers, so a plain box (.faq-item) rather than Card: no hover lift on something you cannot click.

const FAQ = [
  ["Do I need a technical specification?", "No. Start with the problem and what you want to achieve. We can help define the technical requirements."],
  ["Is the initial consultation free?", "Yes. The first 30-minute discovery conversation is free and carries no obligation."],
  ["How much does a project cost?", "Pricing depends on scope, complexity and integration requirements. We provide a proposal before development begins."],
  ["Can you work with our existing software?", "Yes. We evaluate your existing applications, APIs, databases and infrastructure before recommending changes."],
  ["Do you sign NDAs?", "Yes. We can discuss confidentiality requirements and arrange an NDA before reviewing sensitive project information."],
  ["Do you work with international clients?", "Yes. Giilab is based in Pune, India and works with teams across time zones."],
  ["What happens after I submit the form?", "We review your enquiry, arrange a discovery conversation where appropriate and recommend the next steps."],
];

// Enquiry types, each pointing at the page that describes it.
const TOPICS = [
  ["Custom AI applications and AI agents", "/services/#ai-engineering"],
  ["Automation and system integrations", "/services/#automation"],
  ["Software engineering and AI consulting", "/services/#software-engineering"],
  ["A proof of concept for support, documents, search or data", "/solutions/"],
];

const NEXT = [
  ["Review", "We review your requirements and respond within two working days."],
  ["Discuss", "We arrange a 30-minute conversation to understand the problem."],
  ["Recommend", "You receive a suggested technical approach, proposal or an honest recommendation if the project isn't a fit."],
];
