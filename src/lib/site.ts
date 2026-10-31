import type { Metadata } from "next";

export const SITE = {
  name: "Giilab",
  legalName: "Great Ideas Innovation Lab LLP",
  descriptor: "AI Engineering Studio",
  positioning: "Practical AI solutions for real business problems.",
  // Single canonical origin: GitHub Pages 301s giilab.in and giilab.github.io here.
  url: "https://www.giilab.in",
  email: "hello@giilab.in",
  phone: "+91 90287 35097",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/giilab",
  portfolio: "https://pkaranje.github.io",
  linkedin: "https://www.linkedin.com/company/gii-lab",
  // wa.me link: country code + number, no "+" or spaces. Empty hides the footer link.
  whatsapp: "https://wa.me/919028735097",
  founder: {
    name: "Pratik Karanje",
    role: "Founder & Chief AI Architect",
    linkedin: "https://www.linkedin.com/in/pratikkaranje/",
  },
  /** First public release; structured data's datePublished. */
  launched: "2026-10-28",
} as const;

/** When this build was made: the site's dateModified and the footer's "updated" line. */
export const BUILT = new Date().toISOString().slice(0, 10);

/**
 * Per-page metadata. Next shallow-merges `openGraph`/`twitter`, so a page that
 * only sets title/description would otherwise share the homepage's social tags.
 */
export function pageMeta(path: string, title: string, description: string): Metadata {
  const full = `${title} — ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: path,
      title: full,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.descriptor}` }],
    },
    twitter: { card: "summary_large_image", title: full, description, images: ["/og.png"] },
  };
}

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-automation",
    title: "AI automation",
    summary:
      "One process that eats hours every week, run end to end, with your people kept for the exceptions.",
    detail:
      "We start from the workflow as it actually runs, not as the process document describes it. The parts a model handles well get automated. The rest go to a person, with the context already attached.",
    deliverables: [
      "Workflow and data mapping",
      "Automation built against your real cases",
      "Confidence thresholds and escalation rules",
      "Accuracy and cost-per-task reporting",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI agent development",
    summary:
      "Agents that use your tools under explicit limits, and stop when they are out of their depth.",
    detail:
      "An agent is only as good as its tools, its guardrails and its tests. We build all three together. You can see what the agent did, and why, before you let it touch more.",
    deliverables: [
      "Tool and permission design",
      "Guardrails and failure handling",
      "Evaluation suite on your own cases",
      "Action logging and review",
    ],
  },
  {
    slug: "ai-applications",
    title: "Custom AI applications",
    summary:
      "Your idea as a working system on real data, with the evaluations that make it safe to ship.",
    detail:
      "Retrieval over your documents, assistants inside your product, classification and extraction pipelines. Built as ordinary software with a model in it, which is what makes it maintainable.",
    deliverables: [
      "Retrieval and context design",
      "Model selection and prompt engineering",
      "Evaluation harness and regression tests",
      "Production deployment",
    ],
  },
  {
    slug: "ai-integrations",
    title: "AI integrations",
    summary:
      "Connect models to the systems you already run, without rebuilding them around a vendor.",
    detail:
      "We keep the model behind an interface so it can be swapped as prices and capabilities change. Integration work covers your existing APIs, databases, queues and third-party tools.",
    deliverables: [
      "Integration architecture",
      "API and data plumbing",
      "Model-agnostic abstraction layer",
      "Monitoring and alerting",
    ],
  },
  {
    slug: "process-automation",
    title: "Business process automation",
    summary:
      "Software that removes the manual steps between systems, with or without a model involved.",
    detail:
      "Not every problem needs AI. Plenty of costly manual work is really a scheduling, data or integration problem. When that is the cheaper fix, we will tell you.",
    deliverables: [
      "Process analysis",
      "Pipelines and scheduled jobs",
      "Data validation and reconciliation",
      "Operational dashboards",
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI consulting",
    summary:
      "Clear technical direction before the expensive decisions get made.",
    detail:
      "Architecture review, build-versus-buy, feasibility assessment and a delivery plan you can actually staff. Sometimes the useful output is a recommendation not to build.",
    deliverables: [
      "Architecture and design review",
      "Feasibility and cost assessment",
      "Technical roadmap",
      "Team and delivery planning",
    ],
  },
];

export type Solution = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const SOLUTIONS: Solution[] = [
  {
    title: "Customer support automation",
    problem:
      "Support volume grows with your customer base. Either headcount grows with it, or replies get slower.",
    approach:
      "An assistant answers from your own documents and past tickets. It handles routine requests through your helpdesk. Anything involving money, policy or judgment goes to a person.",
    outcome:
      "Measured on deflection rate, answer accuracy and time to first response — on your tickets, before and after.",
  },
  {
    title: "Document processing at scale",
    problem:
      "Invoices, forms, contracts and reports arrive in inconsistent formats and get re-keyed by hand.",
    approach:
      "Extraction tuned to your document types, with a confidence score for each field. Fields we are sure of post straight through. The rest go to a fast review queue.",
    outcome:
      "Measured on field-level accuracy, straight-through rate and cost per document.",
  },
  {
    title: "Knowledge search over internal systems",
    problem:
      "The answer is somewhere in a wiki, a shared drive or a ticket system. Nobody can find it.",
    approach:
      "Search runs across all your sources and respects who can see what. Every answer cites the document it came from. A test set of real questions shows you when quality slips.",
    outcome:
      "Measured on answer accuracy against a question set drawn from your own staff.",
  },
  {
    title: "Operational data pipelines",
    problem:
      "Device, machine or transaction data arrives faster than the reporting stack can absorb it.",
    approach:
      "Data is taken in, checked and rolled up by ordinary backend services you can monitor. A model is added only where it earns its place.",
    outcome:
      "Measured on freshness, completeness and the cost of running the pipeline.",
  },
];

// Sectors with delivered production work; listed on the homepage and Projects.
export const INDUSTRIES = [
  { name: "Education" },
  { name: "Food" },
  { name: "Healthcare" },
  { name: "Manufacturing" },
  { name: "Industrial" },
  { name: "Energy" },
  { name: "Open Source" },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    body: "We map the workflow, the data and the limits. Then we agree what a good result looks like, as a number rather than a feeling.",
  },
  {
    n: "02",
    title: "Prove",
    body: "A short build against your real cases, measured on that number. It ends in a clear go or no-go, with the evidence attached.",
  },
  {
    n: "03",
    title: "Build",
    body: "The proven approach built properly: tests, observability, guardrails and the integration work that makes it part of your stack.",
  },
  {
    n: "04",
    title: "Run",
    body: "A supervised rollout, with monitoring and human escalation in place. Then a clean handover to your team, or ongoing support from us.",
  },
] as const;

/**
 * Published case studies.
 *
 * Deliberately empty. The Projects page renders real entries when this array
 * is populated and an honest "no published work yet" state until then — it
 * never invents clients, metrics or outcomes. To publish one, add an entry
 * with details you can stand behind and have permission to share.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  work: string;
  /** Only include an outcome you can evidence. Omit rather than estimate. */
  outcome?: string;
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [];
