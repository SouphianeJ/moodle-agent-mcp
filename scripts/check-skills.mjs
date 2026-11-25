#!/usr/bin/env node
// Check every skills/<name>/SKILL.md against the Agent Skills specification (https://agentskills.io/specification)
// and the extra limits of Anthropic's products, and check the Claude Code plugin manifests that list them.
// No dependency: run with `node scripts/check-skills.mjs`. Exit code 1 on the first list of errors.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');
const errors = [];
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function frontmatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) {
    errors.push(`${file}: no YAML frontmatter between --- lines`);
    return null;
  }
  const fields = {};
  let current = null;
  for (const line of m[1].split(/\r?\n/)) {
    if (/^\s*(#|$)/.test(line)) continue;
    const kv = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (kv) {
      current = kv[1];
      let value = kv[2].trim();
      if (/^(['"]).*\1$/.test(value)) value = value.slice(1, -1);
      fields[current] = value;
    } else if (/^\s+/.test(line) && current) {
      fields[current] = (fields[current] ? fields[current] + ' ' : '') + line.trim();
    } else {
      errors.push(`${file}: frontmatter line not understood: ${line}`);
    }
  }
  return fields;
}

const names = [];
for (const entry of readdirSync(skillsDir).sort()) {
  const dir = join(skillsDir, entry);
  if (!statSync(dir).isDirectory()) continue;
  const file = join('skills', entry, 'SKILL.md');
  if (!existsSync(join(root, file))) {
    errors.push(`${file}: missing`);
    continue;
  }
  const text = readFileSync(join(root, file), 'utf8');
  const fm = frontmatter(text, file);
  if (!fm) continue;
  const allowed = ['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools'];
  for (const key of Object.keys(fm)) {
    if (!allowed.includes(key)) errors.push(`${file}: unknown frontmatter field "${key}"`);
  }
  const { name = '', description = '' } = fm;
  if (!name) errors.push(`${file}: name is required`);
  if (name.length > 64) errors.push(`${file}: name longer than 64 characters`);
  if (name && !NAME_RE.test(name)) errors.push(`${file}: name "${name}" must be lowercase letters, digits and single hyphens`);
  if (name !== entry) errors.push(`${file}: name "${name}" must match its directory "${entry}"`);
  if (/anthropic|claude/.test(name)) errors.push(`${file}: name must not contain "anthropic" or "claude" (reserved by Anthropic)`);
  if (!description) errors.push(`${file}: description is required`);
  if (description.length > 1024) errors.push(`${file}: description is ${description.length} characters, 1024 at most`);
  if (/[<>]/.test(name + description)) errors.push(`${file}: name and description must not contain < or >`);
  if (fm.compatibility !== undefined && (fm.compatibility.length < 1 || fm.compatibility.length > 500)) {
    errors.push(`${file}: compatibility must be 1 to 500 characters`);
  }
  const lines = text.split('\n').length;
  if (lines > 1000) errors.push(`${file}: ${lines} lines, keep SKILL.md short`);
  names.push(name);
  console.log(`ok  ${name}  (description ${description.length}/1024, ${lines} lines)`);
}
if (names.length === 0) errors.push('skills/: no skill found');

// Claude Code marketplace and plugin manifests.
const readJson = (rel) => {
  try {
    return JSON.parse(readFileSync(join(root, rel), 'utf8'));
  } catch (e) {
    errors.push(`${rel}: ${e.message}`);
    return null;
  }
};
const ID_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const market = readJson('.claude-plugin/marketplace.json');
const plugin = readJson('.claude-plugin/plugin.json');
if (market) {
  if (!ID_RE.test(market.name || '')) errors.push('marketplace.json: invalid name');
  if (!market.owner?.name) errors.push('marketplace.json: owner.name is required');
  if (!Array.isArray(market.plugins) || market.plugins.length === 0) errors.push('marketplace.json: plugins is empty');
  for (const p of market.plugins || []) {
    if (!ID_RE.test(p.name || '')) errors.push(`marketplace.json: invalid plugin name "${p.name}"`);
    if (typeof p.source === 'string' && !(p.source === '.' || p.source.startsWith('./'))) {
      errors.push(`marketplace.json: relative source "${p.source}" must start with ./`);
    }
    if (typeof p.source === 'string' && p.source.includes('..')) errors.push('marketplace.json: source must not contain ..');
    if (plugin && p.source === './' && p.name !== plugin.name) {
      errors.push(`marketplace.json: entry "${p.name}" and plugin.json "${plugin.name}" must have the same name`);
    }
  }
}
if (plugin && !ID_RE.test(plugin.name || '')) errors.push('plugin.json: invalid name');

if (errors.length) {
  console.error('\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`\n${names.length} skills conform to the Agent Skills specification.`);
