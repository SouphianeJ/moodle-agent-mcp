import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { NextConfig } from 'next';

// Next.js puts a random build id in the inline scripts of every page. The CSP of the site lists the SHA-256 of these
// scripts (deploy/Caddyfile.site, scripts/csp-hashes.mjs): the id is derived from the source instead, so the same source
// always gives the same export and the same hashes.
function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((e) => (e.isDirectory() ? sourceFiles(join(dir, e.name)) : [join(dir, e.name)]));
}

function sourceBuildId(): string {
  const root = import.meta.dirname;
  const hash = createHash('sha256');
  for (const rel of ['app', 'components', 'content', 'data', 'lib', 'public']) {
    for (const file of sourceFiles(join(root, rel))) hash.update(file.slice(root.length)).update(readFileSync(file));
  }
  for (const rel of ['package-lock.json', 'next.config.ts']) hash.update(readFileSync(join(root, rel)));
  return hash.digest('hex').slice(0, 20);
}

// Static export: `next build` writes the whole site to out/, served as plain files (no Node server, no image service).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  generateBuildId: sourceBuildId,
  reactStrictMode: true,
  // The repository root has its own package (the skill checks): the site is its own workspace.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
