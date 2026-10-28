# Giilab — giilab.github.io

Marketing site for Giilab, an AI engineering studio in Pune.

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · static export.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run lint
npx tsc --noEmit
```

`npm run build` writes a fully static site to `out/`. There is no server at
runtime, which is what lets it sit on GitHub Pages.

## Configuration

No environment variables. Because the site is a static export it cannot receive
form posts itself, so the contact form sends to [Web3Forms](https://web3forms.com),
which emails each submission to the inbox its access key was created for. The
key is `ACCESS_KEY` in `src/components/ContactForm.tsx`; it is public by design.
To send to a different inbox, create a new key at web3forms.com and replace it.

## Deployment

`.github/workflows/deploy.yml` lints, typechecks, builds and publishes to GitHub
Pages on every push to `main`. Enable it once under Settings → Pages → Source →
GitHub Actions.

The site is served at <https://giilab.github.io> (the `giilab.github.io` repo is
the organisation's root Pages site, so no `basePath` is needed).
`public/.nojekyll` stops Pages from hiding the `_next/` directory. To move to a
custom domain later, add `public/CNAME` containing the domain and update
`SITE.url` in `src/lib/site.ts`.

## How it is put together

```
src/
  app/            one folder per route, plus sitemap.ts and robots.ts
  components/     Header, Footer, Logo, RoutingVisual, CTABand, ContactForm, ui.tsx
  lib/
    site.ts       all site copy and structured content — edit here, not in JSX
    logo.ts       generated logo geometry (see below)
public/           icons, OG image
```

### Theming

Colour lives in CSS custom properties in `src/app/globals.css`, exposed to
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

`src/components/Logo.tsx` exposes `<Mark>`, `<Wordmark>` and `<Lockup>`.
`<Lockup>` derives every dimension from `markHeight` using the ratios measured
off the board, so the lockup cannot drift.

## Editing content

Nearly all copy lives in `src/lib/site.ts`: services, solutions, industries,
delivery process, contact details. Pages read from it. Change it there and every
page that uses it follows.

### Publishing a case study

`CASE_STUDIES` in `src/lib/site.ts` is intentionally empty, and
`/projects` renders an honest "nothing published yet" state. Add an entry and the
page switches to rendering real case studies automatically. Only include an
`outcome` you can evidence.

## Still to configure

- `SITE.email` in `src/lib/site.ts` is `hello@giilab.in`; make sure that mailbox exists.
- `CASE_STUDIES` is empty by design.
- No analytics is installed.
