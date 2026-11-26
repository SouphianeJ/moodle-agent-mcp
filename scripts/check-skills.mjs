#!/usr/bin/env node
// Check every skills/<name>/SKILL.md against the Agent Skills specification (https://agentskills.io/specification)
// and the extra limits of claude.ai, then the Claude Code plugin manifests that list them.
// The frontmatter is read with a real YAML parser (package "yaml"): run `npm ci` at the root, then
// `node scripts/check-skills.mjs`. Exit code 1 when a check fails. Tests: `npm test`.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';

// Agent Skills specification: 1 to 64 characters, lowercase letters, digits and hyphens, no hyphen at either end and
// no two hyphens in a row, equal to the name of the directory.
export const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
export const DESCRIPTION_MAX = 1024;
// claude.ai refuses an uploaded skill whose description is longer than 200 characters.
export const DESCRIPTION_MAX_CLAUDE_AI = 200;
export const LICENSE = 'GPL-3.0-or-later';
const ALLOWED = ['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools'];

/**
 * Check the text of one SKILL.md. Returns the list of errors (empty when it conforms) and the parsed fields.
 * @param {string} text content of SKILL.md
 * @param {string} dirName name of the directory of the skill
 */
export function checkSkill(text, dirName) {
  const errors = [];
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return { errors: ['no YAML frontmatter between --- lines at the top'], fields: null };
  const doc = parseDocument(m[1], { prettyErrors: false, uniqueKeys: true });
  if (doc.errors.length) {
    return { errors: doc.errors.map((e) => `frontmatter is not valid YAML: ${e.message.split('\n')[0]}`), fields: null };
  }
  const fm = doc.toJS();
  if (fm === null || typeof fm !== 'object' || Array.isArray(fm)) {
    return { errors: ['frontmatter must be a YAML mapping'], fields: null };
  }
  for (const key of Object.keys(fm)) {
    if (!ALLOWED.includes(key)) errors.push(`unknown frontmatter field "${key}"`);
  }
  const { name, description, license, compatibility, metadata } = fm;
  if (typeof name !== 'string' || name === '') {
    errors.push('name is required and must be a string');
  } else {
    if (name.length > 64) errors.push(`name is ${name.length} characters, 64 at most`);
    if (!NAME_RE.test(name)) errors.push(`name "${name}": lowercase letters, digits and single inner hyphens only`);
    if (name !== dirName) errors.push(`name "${name}" must match its directory "${dirName}"`);
    if (/anthropic|claude/.test(name)) errors.push('name must not contain "anthropic" or "claude" (reserved by Anthropic)');
  }
  if (typeof description !== 'string' || description.trim() === '') {
    errors.push('description is required and must be a non-empty string');
  } else {
    if (description.length > DESCRIPTION_MAX) {
      errors.push(`description is ${description.length} characters, ${DESCRIPTION_MAX} at most (specification)`);
    }
    if (description.length > DESCRIPTION_MAX_CLAUDE_AI) {
      errors.push(`description is ${description.length} characters, ${DESCRIPTION_MAX_CLAUDE_AI} at most (claude.ai upload)`);
    }
    if (/[<>]/.test(description)) errors.push('description must not contain < or >');
  }
  if (license !== LICENSE) errors.push(`license must be "${LICENSE}" (the licence of the plugin), found ${JSON.stringify(license)}`);
  if (compatibility !== undefined && (typeof compatibility !== 'string' || compatibility.length < 1 || compatibility.length > 500)) {
    errors.push('compatibility must be a string of 1 to 500 characters');
  }
  if (metadata !== undefined) {
    const ok = metadata && typeof metadata === 'object' && !Array.isArray(metadata)
      && Object.values(metadata).every((v) => typeof v === 'string');
    if (!ok) errors.push('metadata must map strings to strings');
  }
  if (fm['allowed-tools'] !== undefined && typeof fm['allowed-tools'] !== 'string') {
    errors.push('allowed-tools must be a space-separated string');
  }
  const lines = text.split('\n').length;
  if (lines > 1000) errors.push(`${lines} lines, keep SKILL.md short`);
  return { errors, fields: fm };
}

function main(root) {
  const skillsDir = join(root, 'skills');
  const errors = [];
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
    const { errors: found, fields } = checkSkill(text, entry);
    errors.push(...found.map((e) => `${file}: ${e}`));
    if (found.length === 0) {
      names.push(fields.name);
      console.log(`ok  ${fields.name}  (description ${fields.description.length}/${DESCRIPTION_MAX_CLAUDE_AI}, ${fields.license})`);
    }
  }
  if (names.length === 0 && errors.length === 0) errors.push('skills/: no skill found');

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
  if (plugin && !/^\d+\.\d+\.\d+$/.test(plugin.version || '')) {
    errors.push(`plugin.json: version "${plugin.version}" must be a release number (x.y.z), not a -dev one`);
  }

  if (errors.length) {
    console.error('\n' + errors.join('\n'));
    process.exit(1);
  }
  console.log(`\n${names.length} skills conform to the Agent Skills specification and to the limits of claude.ai.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(join(dirname(fileURLToPath(import.meta.url)), '..'));
}
