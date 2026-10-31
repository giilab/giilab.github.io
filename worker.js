// Serves the static export and stamps a per-request nonce on every <script>,
// so the CSP can drop 'unsafe-inline' (Astro inlines the theme script and small bundles).
// Only HTML routes reach this Worker; see run_worker_first in wrangler.jsonc.
const csp = (nonce) =>
  [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://static.cloudflareinsights.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self' https://api.web3forms.com https://cloudflareinsights.com",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

const worker = {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    if (!res.headers.get("content-type")?.includes("text/html")) return res;

    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
    const out = new HTMLRewriter()
      .on("script", { element: (el) => el.setAttribute("nonce", nonce) })
      .transform(res);

    const headers = new Headers(out.headers);
    headers.set("Content-Security-Policy", csp(nonce));
    // The nonce changes per response, so a cached copy would carry a stale one.
    headers.set("Cache-Control", "no-cache");
    return new Response(out.body, { status: out.status, statusText: out.statusText, headers });
  },
};

export default worker;
