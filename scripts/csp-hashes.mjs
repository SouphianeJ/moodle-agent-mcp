// Content-Security-Policy hashes of the inline scripts of the static export (site/out/).
//
//   node scripts/csp-hashes.mjs            check: every inline script of site/out/**/*.html has its hash in deploy/Caddyfile.site
//   node scripts/csp-hashes.mjs --write    rewrite the script-src of deploy/Caddyfile.site with the hashes of the current export
//   node scripts/csp-hashes.mjs --list     print the hashes, one per line
//
// Next.js inlines its bootstrap scripts (self.__next_f.push(...), carrying the content of each page) and the theme script:
// the hashes change with the content of the site, so the Caddyfile is regenerated with --write after each build that changes a page.
// A hash is the SHA-256 of the exact text between <script> and </script>. Scripts with a src are not inline: 'self' covers them.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'site', 'out');
const caddyfile = join(root, 'deploy', 'Caddyfile.site');

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

/** Map hash -> list of pages carrying that inline script. */
export function inlineScriptHashes(files) {
  const found = new Map();
  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      if (/\ssrc\s*=/.test(m[1] || '')) continue;
      // A data block (JSON) is not executed: the CSP does not apply to it.
      if (/\stype\s*=\s*["']?(application\/(ld\+)?json|importmap)/i.test(m[1] || '')) continue;
      const hash = `'sha256-${createHash('sha256').update(m[2], 'utf8').digest('base64')}'`;
      if (!found.has(hash)) found.set(hash, []);
      found.get(hash).push(file.slice(outDir.length + 1));
    }
  }
  return found;
}

export function scriptSrcOf(caddy) {
  const m = caddy.match(/script-src ([^;"]*)/);
  return m ? m[1].split(/\s+/).filter(Boolean) : null;
}

function main() {
  const mode = process.argv[2] || '--check';
  const found = inlineScriptHashes(htmlFiles(outDir));
  const hashes = [...found.keys()].sort();
  if (mode === '--list') {
    console.log(hashes.join('\n'));
    return;
  }
  const caddy = readFileSync(caddyfile, 'utf8');
  if (mode === '--write') {
    const next = caddy.replace(/script-src [^;"]*/, `script-src 'self' ${hashes.join(' ')}`);
    writeFileSync(caddyfile, next);
    console.log(`deploy/Caddyfile.site: script-src with ${hashes.length} hashes.`);
    return;
  }
  const allowed = scriptSrcOf(caddy);
  if (!allowed) {
    console.error('No script-src in deploy/Caddyfile.site.');
    process.exit(1);
  }
  const problems = [];
  if (allowed.includes("'unsafe-inline'")) problems.push("script-src still allows 'unsafe-inline'.");
  for (const [hash, pages] of found) {
    if (!allowed.includes(hash)) problems.push(`inline script ${hash} (${pages[0]}${pages.length > 1 ? `, +${pages.length - 1}` : ''}) is not in the CSP.`);
  }
  if (problems.length) {
    console.error(problems.join('\n'));
    console.error('Run: node scripts/csp-hashes.mjs --write, then commit deploy/Caddyfile.site.');
    process.exit(1);
  }
  const stale = allowed.filter((h) => h.startsWith("'sha256-") && !found.has(h));
  if (stale.length) console.warn(`${stale.length} hash(es) of the CSP match no inline script any more (--write removes them).`);
  console.log(`CSP: ${found.size} inline scripts, all in script-src.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
