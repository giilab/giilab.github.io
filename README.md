# Giilab — <www.giilab.in>

Company website for Giilab, an AI engineering studio in Pune.

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

## Pages

Ten pages in `src/pages/`. All but the 404 are in the sitemap.

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `index.astro` | Home |
| `/services/` | `services.astro` | The six services, grouped, with an anchor per service |
| `/solutions/` | `solutions.astro` | Business problems we solve, plus the human-oversight diagram |
| `/how-we-work/` | `how-we-work.astro` | Engagement options, delivery process, what you need to start, stack, NDAs |
| `/about/` | `about.astro` | Philosophy, team set-up, sectors, founder |
| `/contact/` | `contact.astro` | FAQ, contact form, contact details |
| `/privacy/` | `privacy.astro` | Privacy policy |
| `/terms/` | `terms.astro` | Terms of use |
| `/editorial-policy/` | `editorial-policy.astro` | Editorial policy |
| 404 | `404.astro` | Error page, not indexed |

Three more files are generated at build, not pages: `sitemap.xml.ts`,
`robots.txt.ts` and `llms.txt.ts` (see SEO).

`/how-we-work/` replaced `/projects/` while there is no published client work;
`/projects` and the old `/industries` 301 there. When there is real work to show,
add a case-study page, and only include outcomes you can evidence.

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
- `public/_redirects` holds the permanent (301) redirects: no-trailing-slash
  URLs, and retired pages. Add a line here whenever a page is renamed or removed.

DNS lives at Cloudflare (domain registered at Hostinger). In the Cloudflare
dashboard, the Worker has `www.giilab.in` and `giilab.in` as custom domains, and
a Redirect Rule sends `giilab.in/*` to `www`. To change the domain, update it
there and in `SITE.url` in `src/lib/site.ts`, which every canonical, sitemap,
robots and structured-data URL is built from.

`.github/workflows/deploy.yml` runs lint, typecheck and build, and publishes a
copy to `giilab.github.io` on pushes to `main` and `astro`. Its canonical tags
point at `www.giilab.in`.

## How it is put together

```bash
src/
  pages/          one .astro file per route, plus sitemap.xml.ts, robots.txt.ts, llms.txt.ts
  layouts/        Base.astro: <head>, SEO tags, JSON-LD, header and footer
  components/     Header, Footer, Mark, RoutingVisual, CTABand, ContactForm, ...
    ui/           layout primitives (Section, Container, Card, PageHero, ...)
    visuals/      decorative hero art
  styles/         globals.css
  lib/
    site.ts       shared data: company details, nav, services, solutions, process
    logo.ts       generated logo geometry (see below)
public/           icons, OG image, founder photo, _headers, _redirects
```

### Theming

Colour lives in CSS custom properties in `src/styles/globals.css`, exposed to
Tailwind through `@theme inline`. Dark mode re-points the same tokens under
`:root[data-theme="dark"]`; an inline script in `Base.astro` sets `data-theme`
before first paint, and `ThemeToggle.astro` switches it (stored in
`localStorage` as `giilab-theme`). Use `bg-surface`, `text-muted`, `border-line`
and so on rather than hard-coded colours, and a component works in both themes.

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
inside their `.astro` components, which Astro bundles into `/_astro/`. Every
animation stops under `prefers-reduced-motion`.

## Editing content

- **Shared data** lives in `src/lib/site.ts`: company details (`SITE`), the menu
  (`NAV`, which also drives the footer and `llms.txt`), `SERVICES`, `SOLUTIONS`,
  `INDUSTRIES` and the delivery `PROCESS`. Change it there and every page that
  uses it follows.
- **Page-specific copy** (headings, intros, FAQ, legal text) lives in each page
  file under `src/pages/`, either in the markup or in a list at the top of the
  file.

## SEO

Each page passes `pageMeta(path, title, description)` from `site.ts` to
`Base.astro`, which writes the `<title>`, description, canonical, Open Graph,
Twitter and JSON-LD tags.

- **Titles:** keyword first, then `| Giilab` (added automatically). The home
  page sets `brandFirst: true` for `Giilab | …`. Keep the whole title at 51
  characters or fewer.
- **Descriptions:** 120–155 characters, naming the page's main keyword.
- **H1:** one per page. Inner pages carry their keyword in the H1; the home and
  contact headings are deliberately brand copy.
- **Error pages** set `noindex: true`: robots `noindex`, no canonical.
- **`sitemap.xml`** lists every `.astro` page in `src/pages` automatically (404
  and dynamic routes excluded). A page that should not be indexed must be added
  to the filter in `sitemap.xml.ts`.
- **`robots.txt`** allows all crawlers and points to the sitemap.
- **`llms.txt`** (a summary for AI crawlers) is built from `NAV`, `SERVICES`,
  `SOLUTIONS` and `PROCESS`.

### Adding a page

1. Create `src/pages/<name>.astro` using `Base`, `PageHero` and `pageMeta()`.
   It joins the sitemap automatically.
2. If it belongs in the menu, add it to `NAV` in `site.ts`.
3. Add `/<name> /<name>/ 301` to `public/_redirects`.
4. Run `npm run lint`, `npm run typecheck` and `npm run build`.

## Still to configure

- `SITE.email` in `src/lib/site.ts` is `hello@giilab.in`; make sure that mailbox exists.
- No analytics is installed.
