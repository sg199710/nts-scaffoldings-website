#!/bin/sh
# Use project's Node (no system install needed)
ROOT="$(cd "$(dirname "$0")" && pwd)"
export PATH="$ROOT/.node/bin:$PATH"
exec "$@"
