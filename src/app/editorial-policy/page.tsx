import type { Metadata } from "next";
import { PageHero, LegalSections } from "@/components/ui";
import { SITE, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/editorial-policy/",
  "Editorial Policy",
  `How ${SITE.name} writes about its work: client permission, evidence for every claim, who writes the pages and how to report an error.`,
);

const SECTIONS = [
  {
    h: "What this policy covers",
    body: (
      <p>
        This policy covers everything {SITE.legalName} (&ldquo;{SITE.name}&rdquo;) publishes on{" "}
        {SITE.url}: service and solution pages, project descriptions and any other content
        about our work. It sets out what we will and will not claim, and why.
      </p>
    ),
  },
  {
    h: "Client work",
    body: (
      <p>
        We publish client work only with the client&rsquo;s permission. Without it, we do not
        name the client or share details that would identify them.
      </p>
    ),
  },
  {
    h: "Claims and evidence",
    body: (
      <p>
        We state an outcome only if we can back it with evidence. If we cannot, we leave it
        out rather than estimate it.
      </p>
    ),
  },
  {
    h: "Logos, testimonials and numbers",
    body: (
      <p>
        We do not show logos, testimonials, numbers or certifications we cannot verify.
      </p>
    ),
  },
  {
    h: "Who writes our pages",
    body: (
      <p>
        Pages are written by {SITE.founder.name}, {SITE.founder.role}. Legal pages show the
        date they were last updated.
      </p>
    ),
  },
  {
    h: "Corrections",
    body: (
      <p>
        Spotted something wrong? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we
        will correct it.
      </p>
    ),
  },
  {
    h: "Changes and contact",
    body: (
      <p>
        We may update this policy; the date above shows the latest version. Questions go to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    ),
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Editorial policy" />
      <LegalSections updated="October 2026" sections={SECTIONS} />
    </>
  );
}
