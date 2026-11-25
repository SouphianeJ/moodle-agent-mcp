#!/usr/bin/env bash
# Build the site and publish it as a new release folder, with rollback.
#
#   deploy/deploy.sh [--target DIR] [--keep N]   build site/ and switch DIR/current to the new release
#   deploy/deploy.sh --rollback [--target DIR]   switch DIR/current back to the previous release
#
# Layout of DIR (default /srv/moodle-agent-mcp): releases/<timestamp>/ and the symlink current -> releases/<timestamp>.
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

releases="$target/releases"
switch_to() {
  ln -sfn "$1" "$target/current.tmp"
  mv -Tf "$target/current.tmp" "$target/current"
  echo "current -> $1"
}

if [ "$rollback" -eq 1 ]; then
  now="$(readlink -f "$target/current" || true)"
  prev="$(ls -1d "$releases"/*/ 2>/dev/null | sed 's:/$::' | sort | grep -vxF "$now" | tail -1 || true)"
  [ -n "$prev" ] || { echo "ERROR: no previous release to roll back to." >&2; exit 1; }
  switch_to "$prev"
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

stamp="$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$releases"
cp -R "$root/site/out" "$releases/$stamp"
switch_to "$releases/$stamp"

# Keep the last N releases.
ls -1d "$releases"/*/ | sed 's:/$::' | sort | head -n "-$keep" | while read -r old; do
  [ "$old" = "$(readlink -f "$target/current")" ] || rm -rf "$old"
done
echo "Deployed $stamp. Roll back with: deploy/deploy.sh --rollback --target $target"
