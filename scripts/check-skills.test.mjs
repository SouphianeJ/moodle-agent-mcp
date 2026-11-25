// Tests of scripts/check-skills.mjs: `npm test` at the root (after `npm ci`).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkSkill } from './check-skills.mjs';

const body = '\n# Title\n\nBody.\n';
const good = [
  '---',
  'name: moodle-follow-class',
  'description: "Follow a Moodle class with the local_mcpcourse MCP server: activity, results. Use when asked."',
  'license: GPL-3.0-or-later',
  '---',
].join('\n') + body;

test('a quoted header with a licence conforms', () => {
  assert.deepEqual(checkSkill(good, 'moodle-follow-class').errors, []);
});

test('the old unquoted header, whose description holds ": ", is not valid YAML', () => {
  const old = [
    '---',
    'name: moodle-follow-class',
    'description: Follow the progress of a class in Moodle through the local_mcpcourse MCP server: student activity, missing',
    '  submissions, quiz results. Scenarios: student_activity_review.',
    '---',
  ].join('\n') + body;
  const { errors } = checkSkill(old, 'moodle-follow-class');
  assert.ok(errors.some((e) => e.startsWith('frontmatter is not valid YAML')), errors.join('; '));
});

test('a description over 200 characters is refused for claude.ai', () => {
  const long = good.replace(/description: ".*"/, `description: "${'a'.repeat(201)}"`);
  assert.ok(checkSkill(long, 'moodle-follow-class').errors.some((e) => e.includes('claude.ai')));
});

test('a missing licence, a name unlike its directory and a bad name are refused', () => {
  const noLicense = good.replace('license: GPL-3.0-or-later\n', '');
  assert.ok(checkSkill(noLicense, 'moodle-follow-class').errors.some((e) => e.startsWith('license')));
  assert.ok(checkSkill(good, 'other-dir').errors.some((e) => e.includes('must match its directory')));
  const bad = good.replace('name: moodle-follow-class', 'name: Moodle--Follow');
  assert.ok(checkSkill(bad, 'Moodle--Follow').errors.some((e) => e.includes('lowercase')));
});

test('an unknown field is refused', () => {
  const extra = good.replace('license:', 'version: 1\nlicense:');
  assert.ok(checkSkill(extra, 'moodle-follow-class').errors.some((e) => e.includes('unknown frontmatter field')));
});
