import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site deploys as plain files (GitHub Pages, any CDN).
  output: "export",
  // No Next image server in a static export.
  images: { unoptimized: true },
  // Emit /about/index.html rather than /about.html so static hosts resolve clean URLs.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
