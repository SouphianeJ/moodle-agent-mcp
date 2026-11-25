import type { NextConfig } from 'next';

// Static export: `next build` writes the whole site to out/, served as plain files (no Node server, no image service).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  // The repository root has its own package (the skill checks): the site is its own workspace.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
