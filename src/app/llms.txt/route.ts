import { SITE, NAV, SERVICES, SOLUTIONS } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain-text site summary for AI crawlers, built from site.ts.
export function GET() {
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} (${SITE.legalName}) is an AI engineering studio in ${SITE.location}. ${SITE.positioning}`,
    "",
    "## Pages",
    "",
    ...NAV.map((n) => `- [${n.label}](${SITE.url}${n.href})`),
    `- [Contact](${SITE.url}/contact/): ${SITE.email}`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- ${s.title}: ${s.summary}`),
    "",
    "## Solutions",
    "",
    ...SOLUTIONS.map((s) => `- ${s.title}: ${s.approach}`),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
