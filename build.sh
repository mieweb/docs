#!/bin/bash
set -eo pipefail

PANDOC_VERSION="3.6.4"

# Ensure pandoc is available (required by some markdown files using markup: 'pandoc')
ensure_pandoc() {
  if command -v pandoc &>/dev/null; then
    echo "pandoc found: $(pandoc --version | head -1)"
    return
  fi

  echo "pandoc not found, downloading v${PANDOC_VERSION}..."
  local os arch tarball url
  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os" in
    Linux)
      case "$arch" in
        x86_64)  tarball="pandoc-${PANDOC_VERSION}-linux-amd64.tar.gz" ;;
        aarch64) tarball="pandoc-${PANDOC_VERSION}-linux-arm64.tar.gz" ;;
        *) echo "Unsupported Linux arch: $arch"; return 1 ;;
      esac
      ;;
    Darwin)
      case "$arch" in
        x86_64)  tarball="pandoc-${PANDOC_VERSION}-x86_64-macOS.zip" ;;
        arm64)   tarball="pandoc-${PANDOC_VERSION}-arm64-macOS.zip" ;;
        *) echo "Unsupported macOS arch: $arch"; return 1 ;;
      esac
      ;;
    *) echo "Unsupported OS: $os"; return 1 ;;
  esac

  url="https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${tarball}"
  local pandoc_dir="${PANDOC_DIR:-.pandoc}"
  mkdir -p "$pandoc_dir"

  if [[ "$tarball" == *.tar.gz ]]; then
    wget -qO- "$url" | tar xz --strip-components=1 -C "$pandoc_dir"
  else
    local tmpzip
    tmpzip="$(mktemp)"
    wget -qO "$tmpzip" "$url"
    unzip -qo "$tmpzip" -d "$pandoc_dir"
    rm -f "$tmpzip"
  fi

  export PATH="$pandoc_dir/bin:$PATH"
  echo "pandoc installed: $(pandoc --version | head -1)"
}

ensure_pandoc

HUGO_RUN=""
OPTS=""
BASE_URL="/"
IS_LIVE=""
IS_STATIC=""
PORT=1313

while [[ $# -gt 0 ]]; do
  case $1 in
    --verbose | --minify)
      OPTS="$OPTS $1"
      shift # past argument
      ;;
    --live)
      IS_LIVE="true"
      shift # past argument
      ;;
    --static)
      IS_STATIC="true"
      shift # past argument
      ;;
    --baseURL)
      BASE_URL="$2"
      shift # past argument
      shift # past value
      ;;
    wc | eh)
      if [[ ! -z "$IS_LIVE" ]]
      then
        echo "Preview $1"
        mkdir -p config/_default/; cat content/navigation.md | ./navigation2menu.js > config/_default/menu.en.json
        BASE_URL="http://localhost:$PORT/$1/"
        npx hugo server --config "config-$1.toml" --baseURL "$BASE_URL" $OPTS --port=$PORT &
        sleep 3
        echo "webserver running $1: http://localhost:$PORT/"
        PORT=$((PORT+1))
      else
        echo "Building $1"
        if [[ -z "$FAST_PREVIEW_RENDER" || ! -d "node_modules" ]]
        then
          if [[ ! -z "$NPM_CACHE_DIR" ]]
          then
            time npm ci --cache $NPM_CACHE_DIR --prefer-offline --no-audit
          else
            time npm ci
          fi
        else
          echo "Fast render, skipping npm ci"
        fi
        mkdir -p config/_default/; cat content/navigation.md | ./navigation2menu.js > config/_default/menu.en.json
        npx hugo --config "config-$1.toml" --baseURL "$BASE_URL" $OPTS
      fi
      HUGO_RUN="true"
      shift # past argument
      ;;
    *)
      echo "Unknown argument: $1"
      shift # past argument
      ;;
  esac
done

if [[ ! -z "$IS_LIVE" ]]
then
  wait < <(jobs -p)
fi

if [[ ! -z "$IS_STATIC" ]]
then
  npx http-server public
fi

if [[ -z "$HUGO_RUN" ]]
then
  echo "No hugo config specified. Please specify wc or eh"
  exit 1
fi
