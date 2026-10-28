import type { Metadata } from "next";
import { Container, Section, PageHero, Card } from "@/components/ui";
import { NeuralVisual } from "@/components/HeroVisuals";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Giilab. Tell us the problem you are trying to solve and we will give you an honest answer on whether AI is the right tool.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        visual={<NeuralVisual />}
        eyebrow="Contact"
        title={<>Tell us the part that <span className="serif accent">keeps breaking.</span></>}
        lead="One free 30-minute call, and an honest answer on what AI can and cannot do about it. Bring a problem rather than a brief."
      />

      <Section>
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
