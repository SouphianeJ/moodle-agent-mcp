#!/usr/bin/env node
// Fail when a scenario of the generated list (site/data/scenarios.json) has no French title and summary
// (site/data/scenarios.fr.json), or when a family has no label (site/data/families.json).
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const data = join(dirname(fileURLToPath(import.meta.url)), '..', 'site', 'data');
const read = (f) => JSON.parse(readFileSync(join(data, f), 'utf8'));
const { scenarios, count } = read('scenarios.json');
const fr = read('scenarios.fr.json');
const families = read('families.json');
const errors = [];
if (scenarios.length !== count) errors.push(`scenarios.json: count ${count} but ${scenarios.length} entries`);
for (const s of scenarios) {
  const t = fr[s.slug];
  if (!Array.isArray(t) || t.length !== 2 || !t[0] || !t[1]) errors.push(`scenarios.fr.json: no French title and summary for ${s.slug}`);
  if (!families[s.family]?.fr || !families[s.family]?.en) errors.push(`families.json: no label for ${s.family}`);
  if (!families[s.family]?.quip?.fr || !families[s.family]?.quip?.en) errors.push(`families.json: no quip for ${s.family}`);
}
for (const slug of Object.keys(fr)) {
  if (!slug.startsWith('_') && !scenarios.some((s) => s.slug === slug)) errors.push(`scenarios.fr.json: ${slug} is not in the plugin any more`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`i18n: ${scenarios.length} scenarios and ${Object.keys(families).length} families have their French text.`);
