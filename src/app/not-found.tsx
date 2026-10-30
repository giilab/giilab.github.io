import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui";
import { NAV } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="relative z-[2] flex min-h-[70vh] items-center py-24">
      <Container className="relative">
        <p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-faint">
          Error 404
        </p>
        <h1 className="t-hero mt-5 max-w-[16ch]">
          That page isn&rsquo;t <span className="serif accent">here.</span>
        </h1>
        <p className="t-lead mt-5">
          The link may be out of date, or the page may have moved. Everything on the site
          is one click away below.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <ButtonLink href="/">Back to the homepage</ButtonLink>
          <ButtonLink href="/contact/" variant="ghost">
            Get in touch
          </ButtonLink>
        </div>
        <nav aria-label="All pages" className="mt-12 flex flex-wrap gap-2.5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-line-strong px-4 py-2 text-[0.85rem] text-muted transition-colors hover:border-accent hover:text-accent-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
