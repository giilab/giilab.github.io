import type { Metadata } from "next";
import { PageHero, LegalSections } from "@/components/ui";
import { SITE, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/terms/",
  "Website Terms of Use and Liability",
  `The terms for using the ${SITE.name} website: what its information does and does not promise, intellectual property and liability.`,
);

const SECTIONS = [
  {
    h: "About this site",
    body: (
      <p>
        {SITE.url} is run by {SITE.legalName} (&ldquo;{SITE.name}&rdquo;), based in {SITE.location}. By using the site you
        agree to these terms. If you do not agree, please do not use it.
      </p>
    ),
  },
  {
    h: "Information on the site",
    body: (
      <p>
        The site describes our services in general terms. It is not an offer, a quote or
        professional advice, and nothing on it promises a particular result for your
        project. We try to keep it accurate, but it may be out of date or incomplete.
      </p>
    ),
  },
  {
    h: "Intellectual property",
    body: (
      <p>
        The {SITE.name} name, logo and the content of this site belong to {SITE.legalName}. You
        may share links to it and quote short passages with credit. Other names and
        trademarks mentioned belong to their owners.
      </p>
    ),
  },
  {
    h: "Engagements",
    body: (
      <p>
        Any work we do for you is governed by a separate written agreement or statement of
        work. If that agreement and these terms disagree, the agreement wins.
      </p>
    ),
  },
  {
    h: "Links to other sites",
    body: (
      <p>
        We link to sites we do not control, such as GitHub. We are not responsible for their
        content or how they handle your data.
      </p>
    ),
  },
  {
    h: "Liability",
    body: (
      <p>
        The site is provided as is. To the extent the law allows, {SITE.name} is not liable
        for any loss arising from your use of the site or reliance on its content.
      </p>
    ),
  },
  {
    h: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India, and the courts of Pune, Maharashtra
        have jurisdiction over any dispute about them.
      </p>
    ),
  },
  {
    h: "Changes and contact",
    body: (
      <p>
        We may update these terms; the date above shows the latest version. Questions go to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" />
      <LegalSections updated="October 2026" sections={SECTIONS} />
    </>
  );
}
