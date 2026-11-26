#!/usr/bin/env bash
# Build the site and publish it as a new release folder, with rollback.
#
#   deploy/deploy.sh [--target DIR] [--keep N]   build site/ and switch DIR/current to the new release
#   deploy/deploy.sh --rollback [--target DIR]   switch DIR/current back to the release just before the current one
#
# Layout of DIR (default /srv/moodle-agent-mcp): releases/<timestamp>/ and the symlink current -> releases/<timestamp>.
# Each release holds a REVISION file: the git commit it was built from (with -dirty when the tree had changes).
# The web server serves DIR/current (see deploy/Caddyfile.site). The switch is atomic (rename of a symlink).
# Builds in a node:22 container when Node is not installed. Touches no service: Caddy reads the files as they are.
set -euo pipefail

target="/srv/moodle-agent-mcp"
keep=5
rollback=0
while [ "$#" -gt 0 ]; do
  case "$1" in
    --target) target="$2"; shift 2 ;;
    --keep) keep="$2"; shift 2 ;;
    --rollback) rollback=1; shift ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done

# A relative --target would break the rollback and the purge guard (they compare it with readlink -f): make it absolute.
target="$(realpath -m -- "$target")"
case "$keep" in ''|*[!0-9]*) echo "ERROR: --keep takes a positive number." >&2; exit 2 ;; esac
[ "$keep" -ge 1 ] || { echo "ERROR: --keep takes a positive number." >&2; exit 2; }

releases="$target/releases"
switch_to() {
  ln -sfn "$1" "$target/current.tmp"
  mv -Tf "$target/current.tmp" "$target/current"
  echo "current -> $1"
}

if [ "$rollback" -eq 1 ]; then
  [ -L "$target/current" ] || { echo "ERROR: $target/current is not a symlink: nothing to roll back." >&2; exit 1; }
  now="$(readlink -f "$target/current")"
  # The release that sorts just before the current one (timestamps sort in time order), not the newest other one:
  # a second rollback goes one step further back instead of bouncing between two releases.
  prev="$(find "$releases" -mindepth 1 -maxdepth 1 -type d ! -name '*.tmp' | sort | awk -v now="$now" '$0 == now { print last; exit } { last = $0 }')"
  [ -n "$prev" ] || { echo "ERROR: no release before $now to roll back to." >&2; exit 1; }
  switch_to "$prev"
  [ -f "$prev/REVISION" ] && echo "revision $(cat "$prev/REVISION")"
  exit 0
fi

root="$(cd "$(dirname "$0")/.." && pwd)"
if command -v npm >/dev/null 2>&1; then
  (cd "$root/site" && npm ci --no-audit --no-fund && npm run build)
else
  docker run --rm --user "$(id -u):$(id -g)" -e HOME=/tmp -e NEXT_TELEMETRY_DISABLED=1 \
    -v "$root:/repo" -w /repo/site node:22-slim sh -c 'npm ci --no-audit --no-fund && npm run build'
fi
[ -f "$root/site/out/fr/index.html" ] || { echo "ERROR: the build did not produce site/out/fr/index.html." >&2; exit 1; }

# The CSP of the web server lists the hash of every inline script: refuse to publish pages the CSP would block.
if command -v node >/dev/null 2>&1; then
  node "$root/scripts/csp-hashes.mjs"
else
  docker run --rm --user "$(id -u):$(id -g)" -v "$root:/repo" -w /repo node:22-slim node scripts/csp-hashes.mjs
fi

revision="$(git -C "$root" rev-parse HEAD 2>/dev/null || echo unknown)"
if [ "$revision" != unknown ] && [ -n "$(git -C "$root" status --porcelain 2>/dev/null)" ]; then
  revision="$revision-dirty"
fi

stamp="$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$releases"
[ ! -e "$releases/$stamp" ] || { echo "ERROR: $releases/$stamp already exists." >&2; exit 1; }
cp -R "$root/site/out" "$releases/$stamp.tmp"
echo "$revision" > "$releases/$stamp.tmp/REVISION"
# The web server reads the files as another user: everything readable, directories traversable.
chmod -R a+rX "$releases/$stamp.tmp"
mv "$releases/$stamp.tmp" "$releases/$stamp"
switch_to "$releases/$stamp"

# Keep the last N releases.
find "$releases" -mindepth 1 -maxdepth 1 -type d ! -name '*.tmp' | sort | head -n "-$keep" | while read -r old; do
  [ "$old" = "$(readlink -f "$target/current")" ] || rm -rf "$old"
done
echo "Deployed $stamp (revision $revision). Roll back with: deploy/deploy.sh --rollback --target $target"
