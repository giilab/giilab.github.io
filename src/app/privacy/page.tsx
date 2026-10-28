import type { Metadata } from "next";
import { PageHero, LegalSections } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `What personal data the ${SITE.name} website collects, why, and your rights over it.`,
  alternates: { canonical: "/privacy/" },
};

const SECTIONS = [
  {
    h: "Who we are",
    body: (
      <p>
        {SITE.legalName} (&ldquo;{SITE.name}&rdquo;, &ldquo;we&rdquo;) runs {SITE.url} from {SITE.location}. For any privacy
        question or request, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    ),
  },
  {
    h: "What we collect",
    body: (
      <>
        <p>
          If you use the contact form, email us or message us on WhatsApp, we receive what you choose to send: your
          name, email address, phone number, company, project stage and message. We use it only to reply
          to you and, if we work together, to manage that relationship.
        </p>
        <p>
          We do not use analytics, advertising or tracking tools, and we do not sell or
          share your details for marketing.
        </p>
      </>
    ),
  },
  {
    h: "Cookies and local storage",
    body: (
      <p>
        The site sets no cookies. If you switch between light and dark themes, your choice
        is saved in your browser&rsquo;s local storage so it is remembered next time. It
        never leaves your device, and clearing your browser data removes it.
      </p>
    ),
  },
  {
    h: "Service providers",
    body: (
      <p>
        The site is hosted on GitHub Pages, which keeps standard server logs such as IP
        addresses for security. Contact form messages are delivered through a third-party
        form service, which passes them to our inbox. Fonts are served from this site, not
        from an external font service.
      </p>
    ),
  },
  {
    h: "Retention",
    body: (
      <p>
        We keep enquiries for as long as needed to respond and follow up, and delete them
        once they are no longer needed, unless we must keep them for legal or accounting
        reasons.
      </p>
    ),
  },
  {
    h: "Your rights",
    body: (
      <p>
        Under India&rsquo;s Digital Personal Data Protection Act, 2023, and similar laws
        where you live, you can ask to see, correct or delete the personal data we hold
        about you, or withdraw consent. Email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will respond within 30
        days.
      </p>
    ),
  },
  {
    h: "Client project data",
    body: (
      <p>
        Data we handle while working on a client project is covered by that client&rsquo;s
        agreement with us, not by this policy.
      </p>
    ),
  },
  {
    h: "Changes",
    body: (
      <p>
        We may update this policy; the date above shows the latest version. Significant
        changes will be noted on this page.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <LegalSections updated="October 2026" sections={SECTIONS} />
    </>
  );
}
