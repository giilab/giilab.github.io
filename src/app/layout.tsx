import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/urbanist/700.css";
import "@fontsource/urbanist/800.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";

// Mobile browser chrome matches the page background (follows the system theme).
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.descriptor} for AI Automation & Agents`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "AI engineering studio in Pune, India. We build AI automation, AI agents and custom AI applications on solid backend engineering.",
  applicationName: SITE.name,
  keywords: [
    "AI engineering studio",
    "AI automation",
    "AI agent development",
    "custom AI applications",
    "business process automation",
    "AI consulting",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.descriptor}`,
    description: SITE.positioning,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.descriptor}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.descriptor}`,
    description: SITE.positioning,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/giilab-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const ORGANISATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  legalName: SITE.legalName,
  description: SITE.positioning,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  image: `${SITE.url}/og.png`,
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: [SITE.linkedin, SITE.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Artificial intelligence engineering",
    "Business process automation",
    "Software architecture",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: `${SITE.url}/`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-ink focus:px-5 focus:py-2.5 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([ORGANISATION_JSONLD, WEBSITE_JSONLD]) }}
        />
      </body>
    </html>
  );
}
