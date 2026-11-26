// Tests of the shell scripts of the repository: `npm test` at the root. Each test works in a temporary folder.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readlinkSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

function scratch() {
  const dir = mkdtempSync(join(tmpdir(), 'mcp-agent-'));
  return { dir, done: () => rmSync(dir, { recursive: true, force: true }) };
}

// A copy of the repository layout the scripts expect: scripts/, skills/<name>/SKILL.md.
function repoCopy(dir) {
  mkdirSync(join(dir, 'scripts'));
  for (const f of ['build-skill-zips.sh', 'sync-skills.sh']) cpSync(join(here, f), join(dir, 'scripts', f));
  mkdirSync(join(dir, 'skills', 'moodle-demo'), { recursive: true });
  writeFileSync(join(dir, 'skills', 'moodle-demo', 'SKILL.md'), '---\nname: moodle-demo\n---\n# Demo\n');
}

test('build-skill-zips builds a zip when there is no symbolic link', () => {
  const { dir, done } = scratch();
  try {
    repoCopy(dir);
    const r = spawnSync('bash', [join(dir, 'scripts', 'build-skill-zips.sh')], { encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    assert.match(r.stdout, /dist\/skills\/moodle-demo\.zip/);
  } finally {
    done();
  }
});

test('build-skill-zips refuses a symbolic link to a file, and to a folder, in a skill', () => {
  for (const [kind, make] of [
    ['file', (d) => symlinkSync('/etc/hostname', join(d, 'skills', 'moodle-demo', 'leak.txt'))],
    ['folder', (d) => symlinkSync('/etc', join(d, 'skills', 'moodle-demo', 'etc'))],
  ]) {
    const { dir, done } = scratch();
    try {
      repoCopy(dir);
      make(dir);
      const r = spawnSync('bash', [join(dir, 'scripts', 'build-skill-zips.sh')], { encoding: 'utf8' });
      assert.notEqual(r.status, 0, `a link to a ${kind} must fail`);
      assert.match(r.stderr, /symbolic link/);
    } finally {
      done();
    }
  }
});

test('sync-skills refuses a symbolic link in the skills of the plugin, before copying anything', () => {
  const { dir, done } = scratch();
  try {
    repoCopy(dir);
    const skill = join(dir, 'plugin', 'agent-kit', 'skills', 'moodle-demo');
    mkdirSync(skill, { recursive: true });
    writeFileSync(join(skill, 'SKILL.md'), '---\nname: moodle-demo\n---\n');
    symlinkSync('/etc/hostname', join(skill, 'leak.txt'));
    const r = spawnSync('bash', [join(dir, 'scripts', 'sync-skills.sh'), join(dir, 'plugin')], { encoding: 'utf8' });
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /symbolic link/);
    // skills/ is left as it was.
    const ls = spawnSync('ls', [join(dir, 'skills', 'moodle-demo')], { encoding: 'utf8' });
    assert.match(ls.stdout, /SKILL\.md/);
  } finally {
    done();
  }
});

test('deploy --rollback with a relative --target switches current to the previous release', () => {
  const { dir, done } = scratch();
  try {
    const target = join(dir, 'srv');
    for (const r of ['20260101T000000Z', '20260102T000000Z', '20260103T000000Z']) mkdirSync(join(target, 'releases', r), { recursive: true });
    symlinkSync(join(target, 'releases', '20260103T000000Z'), join(target, 'current'));
    const deploy = resolve(here, '..', 'deploy', 'deploy.sh');
    const r = spawnSync('bash', [deploy, '--rollback', '--target', 'srv'], { cwd: dir, encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    assert.equal(readlinkSync(join(target, 'current')), join(target, 'releases', '20260102T000000Z'));
  } finally {
    done();
  }
});

test('deploy refuses a --keep that is not a positive number', () => {
  for (const keep of ['abc', '0', '-1']) {
    const deploy = resolve(here, '..', 'deploy', 'deploy.sh');
    const r = spawnSync('bash', [deploy, '--keep', keep, '--target', tmpdir()], { encoding: 'utf8' });
    assert.equal(r.status, 2, `--keep ${keep}`);
  }
});
