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
    slug: "ai-applications",
    title: "Custom AI Applications",
    summary:
      "Turn your AI product ideas into working applications built around real requirements.",
    detail:
      "Retrieval over your documents, assistants inside your product, classification and extraction pipelines. Built as ordinary software with a model in it, which is what makes it maintainable.",
    deliverables: [
      "AI application architecture",
      "Retrieval and knowledge systems",
      "Model integration and evaluation",
      "Application development and deployment",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agent Development",
    summary:
      "Develop AI agents that interact with your approved tools and perform tasks within defined permissions.",
    detail:
      "An agent is only as good as its tools, its guardrails and its tests. We build all three together. You can see what the agent did, and why, before you let it touch more.",
    deliverables: [
      "Agent architecture and tool integration",
      "Workflow and permission design",
      "Guardrails and failure handling",
      "Evaluation and action monitoring",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    summary:
      "Automate repetitive tasks and workflows using AI where it adds measurable value.",
    detail:
      "We start from the workflow as it actually runs, not as the process document describes it. The parts a model handles well get automated. The rest go to a person, with the context already attached.",
    deliverables: [
      "Workflow assessment and automation design",
      "AI-powered task processing",
      "Human review and escalation workflows",
      "Quality evaluation and monitoring",
    ],
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    summary:
      "Connect AI capabilities with your existing applications, APIs and databases.",
    detail:
      "We keep the model behind an interface so it can be swapped as prices and capabilities change. Integration work covers your existing APIs, databases, queues and third-party tools.",
    deliverables: [
      "API and third-party integrations",
      "Model integration architecture",
      "Data and application connectivity",
      "Monitoring and error handling",
    ],
  },
  {
    slug: "process-automation",
    title: "Business Process Automation",
    summary:
      "Automate repetitive processes without introducing unnecessary complexity.",
    detail:
      "Not every problem needs AI. Plenty of costly manual work is really a scheduling, data or integration problem. When that is the cheaper fix, we will tell you.",
    deliverables: [
      "Process assessment",
      "Workflow automation",
      "Data validation and reconciliation",
      "Scheduled jobs and operational dashboards",
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    summary:
      "Evaluate AI opportunities, technical feasibility and implementation options before committing development resources.",
    detail:
      "Architecture review, build-versus-buy, feasibility assessment and a delivery plan you can actually staff. Sometimes the useful output is a recommendation not to build.",
    deliverables: [
      "AI opportunity assessment",
      "Technical architecture reviews",
      "Build-versus-buy evaluation",
      "Implementation roadmap and cost assessment",
    ],
  },
];

export type Solution = {
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  capabilities: string[];
  outcome: string;
};

export const SOLUTIONS: Solution[] = [
  {
    title: "Intelligent Customer Support",
    tagline: "Give your customers faster access to answers.",
    problem:
      "Support teams spend valuable time responding to repetitive questions and searching for information.",
    approach:
      "An AI-powered support assistant that uses your approved knowledge sources and connects with your existing support workflows.",
    capabilities: [
      "Knowledge-based customer assistance",
      "Frequently asked question automation",
      "Ticket classification and routing",
      "Human escalation for complex requests",
    ],
    outcome:
      "Answer accuracy, response time and the proportion of requests resolved without human intervention.",
  },
  {
    title: "Intelligent Document Processing",
    tagline: "Turn unstructured documents into usable information.",
    problem:
      "Invoices, applications, forms and reports often require manual data entry and verification.",
    approach:
      "An intelligent document processing system that extracts information, validates fields and routes exceptions for human review.",
    capabilities: [
      "Document classification",
      "Information extraction",
      "Field validation",
      "Review and approval workflows",
      "Integration with your existing systems",
    ],
    outcome: "Extraction accuracy, processing time and cost per document.",
  },
  {
    title: "Enterprise Knowledge Assistant",
    tagline: "Make your company knowledge easier to find.",
    problem:
      "Important information is often distributed across documents, internal systems, shared drives and knowledge bases.",
    approach:
      "A searchable knowledge assistant that retrieves relevant information from approved sources and provides answers with supporting references.",
    capabilities: [
      "Enterprise search",
      "Retrieval-augmented generation (RAG)",
      "Source-based answers",
      "Role-based access controls",
      "Knowledge evaluation",
    ],
    outcome: "Answer relevance, retrieval accuracy and user task completion.",
  },
  {
    title: "Operational Data & Intelligence",
    tagline: "Turn disconnected operational data into useful information.",
    problem:
      "Organisations generate data across applications, machines, devices and operational systems.",
    approach:
      "Reliable data pipelines and intelligent applications that collect, process and present information for operational decision-making.",
    capabilities: [
      "Data ingestion and processing",
      "API and system integration",
      "Data quality validation",
      "Operational dashboards",
      "Monitoring and alerting",
    ],
    outcome: "Data freshness, completeness, reliability and operating cost.",
  },
];

// Sectors with delivered production work; listed on Projects.
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
