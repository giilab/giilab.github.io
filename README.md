# Giilab — www.giilab.in

Company portfolio site for Giilab, an AI engineering studio in Pune.

Astro · TypeScript · Tailwind CSS v4 · static HTML, no UI framework.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site into ./dist
npm run preview    # serve ./dist locally
npm run lint
npm run typecheck  # astro check
```

`npm run build` writes a fully static site to `dist/`. There is no server at
runtime, which is what lets it sit on any static host.

## Configuration

No environment variables. Because the site is static it cannot receive
form posts itself, so the contact form sends to [Web3Forms](https://web3forms.com),
which emails each submission to the inbox its access key was created for. The
key is `ACCESS_KEY` in `src/components/ContactForm.astro`; it is public by design.
To send to a different inbox, create a new key at web3forms.com and replace it.

## Deployment

The site is served at <https://www.giilab.in> by Cloudflare Workers. Cloudflare
builds every push to `main` (`npm run build`, then `npx wrangler deploy`) and
serves `dist/` as static assets, configured in `wrangler.jsonc`.

- `worker.js` runs in front of HTML pages only. It stamps a per-request nonce on
  every `<script>` and sends the Content-Security-Policy that trusts it, so the
  CSP needs no `'unsafe-inline'`. Edit the CSP there.
- `public/_headers` sets the other security headers and the long cache on
  the hashed bundles in `/_astro/*`.
- `public/_redirects` makes the no-trailing-slash redirects permanent (301).

DNS lives at Cloudflare (domain registered at Hostinger). In the Cloudflare
dashboard, the Worker has `www.giilab.in` and `giilab.in` as custom domains, and
a Redirect Rule sends `giilab.in/*` to `www`. To change the domain, update it
there and in `SITE.url` in `src/lib/site.ts`, which every canonical, sitemap,
robots and structured-data URL is built from.

`.github/workflows/deploy.yml` still publishes a copy to `giilab.github.io`; its
canonical tags point at `www.giilab.in`.

## How it is put together

```
src/
  pages/          one .astro file per route, plus sitemap.xml.ts, robots.txt.ts, llms.txt.ts
  layouts/        Base.astro: <head>, SEO tags, JSON-LD, header and footer
  components/     Header, Footer, Mark, RoutingVisual, CTABand, ContactForm, ...
    ui/           layout primitives (Section, Container, Card, PageHero, ...)
    visuals/      decorative hero art
  styles/         globals.css
  lib/
    site.ts       all site copy and structured content — edit here, not in markup
    logo.ts       generated logo geometry (see below)
public/           icons, OG image
```

### Theming

Colour lives in CSS custom properties in `src/styles/globals.css`, exposed to
Tailwind through `@theme inline`. Sections declare a tone (`tone-light` or
`tone-dark`) and every token re-points, so a component written once works on
both. Use `bg-surface`, `text-muted`, `border-line` and so on rather than
hard-coded colours.

> **One deliberate departure from the brand board.** The board lists `#64748B`
> for secondary text. On the `#F3F4F6` ground that is 4.1:1, which fails WCAG AA
> for body copy, so secondary text is `#475569` on light and `#94A3B8` on dark.
> The brand blues, purples and cyan are used exactly as specified.

### The logo

`src/lib/logo.ts` holds the mark and wordmark as path data traced from the brand
identity board, so the site carries no font dependency for the logo and the
header lockup is identical to the exported SVG files. It is generated — if the
artwork changes, re-trace rather than hand-editing the path strings.

`src/components/Mark.astro` and `LockupStacked.astro` render it.

### Interactivity

There is no React. The few interactive pieces (header menu, theme toggle, smooth
scroll and back-to-top, hero particles, contact form) are plain `<script>` tags
inside their `.astro` components, which Astro bundles into `/_astro/`.

## Editing content

Nearly all copy lives in `src/lib/site.ts`: services, solutions, industries,
delivery process, contact details. Pages read from it. Change it there and every
page that uses it follows.

### How We Work page

`/how-we-work/` replaced `/projects/` (old URLs 301 there via `public/_redirects`)
while there is no published client work. It covers engagement options, the
delivery process (`PROCESS` in `site.ts`), what a client needs to start, how
success is measured, the stack and confidentiality. When there is real work to
show, add a case-study page; only include outcomes you can evidence.

## Still to configure

- `SITE.email` in `src/lib/site.ts` is `hello@giilab.in`; make sure that mailbox exists.
- No analytics is installed.
