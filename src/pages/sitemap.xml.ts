import { SITE } from "@/lib/site";

const ROUTES = ["", "/services", "/solutions", "/projects", "/about", "/contact", "/privacy", "/terms", "/editorial-policy"];

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = ROUTES.map(
    (route) =>
      `<url>\n<loc>${SITE.url}${route}/</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>monthly</changefreq>\n<priority>${route === "" ? 1 : 0.7}</priority>\n</url>`,
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  );
}
