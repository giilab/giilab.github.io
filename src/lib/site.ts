export const SITE = {
  name: "Giilab",
  legalName: "Great Ideas Innovation Lab LLP",
  descriptor: "AI Engineering Studio",
  positioning: "Practical AI solutions for real business problems.",
  url: "https://giilab.github.io",
  email: "hello@giilab.in",
  phone: "+91 90287 35097",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/giilab",
  portfolio: "https://pkaranje.github.io",
  linkedin: "https://www.linkedin.com/company/gii-lab",
  // wa.me link: country code + number, no "+" or spaces. Empty hides the footer link.
  whatsapp: "https://wa.me/919028735097",
} as const;

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/industries/", label: "Industries" },
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
      "We start from the workflow as it actually runs, not as the process document describes it. The parts a model handles reliably get automated; the rest route to a person with the context already attached.",
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
      "An agent is only as good as its tools, its guardrails and its evaluation harness. We build all three together, so you can see what the agent did and why before you widen what it is allowed to touch.",
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
      "Not every problem needs AI. Plenty of expensive manual work is a scheduling, data or integration problem, and we will tell you when that is the cheaper fix.",
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
      "Support volume grows with the customer base, so headcount has to grow with it or response times slip.",
    approach:
      "An assistant answers from your own documentation and ticket history, acts on the routine requests through your helpdesk, and hands anything involving money, policy or judgment to a person.",
    outcome:
      "Measured on deflection rate, answer accuracy and time to first response — on your tickets, before and after.",
  },
  {
    title: "Document processing at scale",
    problem:
      "Invoices, forms, contracts and reports arrive in inconsistent formats and get re-keyed by hand.",
    approach:
      "Extraction tuned to your document types, with confidence scores per field. High-confidence fields post straight through; the rest go to a review queue built for speed.",
    outcome:
      "Measured on field-level accuracy, straight-through rate and cost per document.",
  },
  {
    title: "Knowledge search over internal systems",
    problem:
      "The answer exists somewhere across a wiki, a drive and a ticket system, and nobody can find it.",
    approach:
      "Retrieval across your sources with permissions respected, answers that cite the document they came from, and an evaluation set so you can tell when quality regresses.",
    outcome:
      "Measured on answer accuracy against a question set drawn from your own staff.",
  },
  {
    title: "Operational data pipelines",
    problem:
      "Device, machine or transaction data arrives faster than the reporting stack can absorb it.",
    approach:
      "Ingestion, validation and aggregation built as ordinary, observable backend services, with the model layer added only where it earns its place.",
    outcome:
      "Measured on freshness, completeness and the cost of running the pipeline.",
  },
];

export const INDUSTRIES = [
  {
    name: "Education",
    note: "Course and content recommendation, learner support, and the data pipelines behind both.",
  },
  {
    name: "Food",
    note: "Catalogue, ordering and operations systems, and automation across the manual steps between them.",
  },
  {
    name: "Healthcare",
    note: "Document-heavy intake and administrative workflows automated, with sensitive cases kept with people.",
  },
  {
    name: "Manufacturing",
    note: "Production and quality data brought together, document-heavy processes automated, and reporting the floor can act on.",
  },
  {
    name: "Industrial",
    note: "Equipment and sensor data ingested at volume, monitoring and alerting, and maintenance workflows built around it.",
  },
  {
    name: "Energy",
    note: "Asset and operational data consolidated, monitoring and reporting automated, and the pipelines that feed both.",
  },
  {
    name: "IIoT",
    note: "Device telemetry ingested from the edge, stored and processed reliably, and turned into alerts and dashboards.",
  },
  {
    name: "Open Source",
    note: "Libraries, tooling and integrations built in the open, with the documentation and maintenance that keep them usable.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    body: "We map the workflow, the data and the constraints, then agree what a good result looks like as a number rather than a feeling.",
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
    body: "A supervised rollout with monitoring and human escalation in place, then a clean handover to your team or ongoing support from us.",
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
