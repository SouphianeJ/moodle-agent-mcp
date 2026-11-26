#!/usr/bin/env bash
# Build one zip per skill in dist/skills/, for upload to claude.ai or ChatGPT.
# Each zip holds the folder of the skill at its top level (<name>/SKILL.md), as claude.ai expects.
# Zips are build outputs: they are not committed; the release workflow attaches them to each GitHub release.
# Needs python3 only; the zips are reproducible (sorted entries, fixed dates).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
python3 - "$root" <<'PY'
import hashlib, os, sys, zipfile
root = sys.argv[1]
src, out = os.path.join(root, 'skills'), os.path.join(root, 'dist', 'skills')
os.makedirs(out, exist_ok=True)
for f in os.listdir(out):
    os.remove(os.path.join(out, f))
sums = []
for name in sorted(os.listdir(src)):
    folder = os.path.join(src, name)
    if not os.path.isfile(os.path.join(folder, 'SKILL.md')):
        continue
    # A symbolic link would put a file of the build machine in a public zip: refuse it.
    links = [os.path.join(d, n) for d, ds, fs in os.walk(folder) for n in ds + fs if os.path.islink(os.path.join(d, n))]
    if os.path.islink(folder) or links:
        sys.exit('ERROR: symbolic link in skills/' + name + ': ' + ', '.join(sorted(os.path.relpath(l, root) for l in links or [folder])))
    target = os.path.join(out, name + '.zip')
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as z:
        files = sorted(os.path.relpath(os.path.join(d, f), src) for d, _, fs in os.walk(folder) for f in fs)
        for rel in files:
            info = zipfile.ZipInfo(rel.replace(os.sep, '/'), date_time=(2000, 1, 1, 0, 0, 0))
            info.external_attr = 0o644 << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            with open(os.path.join(src, rel), 'rb') as fh:
                z.writestr(info, fh.read())
    digest = hashlib.sha256(open(target, 'rb').read()).hexdigest()
    sums.append(f'{digest}  {name}.zip\n')
    print(f'dist/skills/{name}.zip')
open(os.path.join(out, 'SHA256SUMS'), 'w').writelines(sums)
print('dist/skills/SHA256SUMS')
PY
