#!/bin/bash
set -eo pipefail

PANDOC_VERSION="3.6.4"

# Get SHA256 checksum for a pandoc release artifact (verified from GitHub releases)
get_pandoc_sha256() {
  case "$1" in
    pandoc-3.6.4-linux-amd64.tar.gz)  echo "5def6e1ff535e397becce292ee97767a947306150b9fb1488003b67ac3417c5e" ;;
    pandoc-3.6.4-linux-arm64.tar.gz)  echo "ad5cf63fe0420388d9ec513f02d03e061477b786d11a328164dce8ad7387b8bd" ;;
    pandoc-3.6.4-x86_64-macOS.zip)    echo "35789fb4afc61266b954035059820dd546b10d8f05fef36a8deadffaedffc2b8" ;;
    pandoc-3.6.4-arm64-macOS.zip)     echo "88af17f1885afacb25f70ce4c8c44428feb6da860b6cf690e30da77998456c7f" ;;
    *) echo "" ;;
  esac
}

# Download a URL to stdout or to a file, using curl or wget (whichever is available)
download() {
  local url="$1" dest="${2:-}"
  if command -v curl &>/dev/null; then
    if [[ -n "$dest" ]]; then
      curl -fsSL -o "$dest" "$url"
    else
      curl -fsSL "$url"
    fi
  elif command -v wget &>/dev/null; then
    if [[ -n "$dest" ]]; then
      wget -qO "$dest" "$url"
    else
      wget -qO- "$url"
    fi
  else
    echo "Error: neither 'curl' nor 'wget' is installed. Please install one to download pandoc." >&2
    return 1
  fi
}

# Verify SHA256 checksum of a file
verify_checksum() {
  local file="$1" expected="$2" actual
  if command -v sha256sum &>/dev/null; then
    actual="$(sha256sum "$file" | cut -d' ' -f1)"
  elif command -v shasum &>/dev/null; then
    actual="$(shasum -a 256 "$file" | cut -d' ' -f1)"
  else
    echo "Warning: no sha256sum or shasum available, skipping checksum verification" >&2
    return 0
  fi
  if [[ "$actual" != "$expected" ]]; then
    echo "Error: checksum mismatch for $(basename "$file")" >&2
    echo "  expected: $expected" >&2
    echo "  actual:   $actual" >&2
    return 1
  fi
}

# Ensure pandoc is available (required by some markdown files using markup: 'pandoc')
ensure_pandoc() {
  local pandoc_dir="${PANDOC_DIR:-"$PWD/.pandoc"}"

  # Check if pandoc is already on PATH
  if command -v pandoc &>/dev/null; then
    echo "pandoc found: $(pandoc --version | head -1)"
    return
  fi

  # Check if pandoc exists in the cached install directory
  if [[ -x "$pandoc_dir/bin/pandoc" ]]; then
    export PATH="$pandoc_dir/bin:$PATH"
    echo "pandoc found (cached): $(pandoc --version | head -1)"
    return
  fi

  echo "pandoc not found, downloading v${PANDOC_VERSION}..."
  local os arch tarball url
  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os" in
    Linux)
      case "$arch" in
        x86_64)           tarball="pandoc-${PANDOC_VERSION}-linux-amd64.tar.gz" ;;
        aarch64|arm64)    tarball="pandoc-${PANDOC_VERSION}-linux-arm64.tar.gz" ;;
        *) echo "Unsupported Linux arch: $arch" >&2; return 1 ;;
      esac
      ;;
    Darwin)
      case "$arch" in
        x86_64)  tarball="pandoc-${PANDOC_VERSION}-x86_64-macOS.zip" ;;
        arm64)   tarball="pandoc-${PANDOC_VERSION}-arm64-macOS.zip" ;;
        *) echo "Unsupported macOS arch: $arch" >&2; return 1 ;;
      esac
      ;;
    *) echo "Unsupported OS: $os" >&2; return 1 ;;
  esac

  url="https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${tarball}"
  local expected_sha
  expected_sha="$(get_pandoc_sha256 "$tarball")"
  mkdir -p "$pandoc_dir"

  if [[ "$tarball" == *.tar.gz ]]; then
    local tmptgz
    tmptgz="$(mktemp)"
    download "$url" "$tmptgz"
    verify_checksum "$tmptgz" "$expected_sha"
    tar xz --strip-components=1 -C "$pandoc_dir" < "$tmptgz"
    rm -f "$tmptgz"
  else
    if ! command -v unzip &>/dev/null; then
      echo "Error: 'unzip' is required to install pandoc from ZIP archives." >&2
      return 1
    fi
    local tmpzip
    tmpzip="$(mktemp)"
    download "$url" "$tmpzip"
    verify_checksum "$tmpzip" "$expected_sha"
    unzip -qo "$tmpzip" -d "$pandoc_dir"
    rm -f "$tmpzip"
    # macOS ZIPs extract into a nested directory (e.g. pandoc-3.6.4-arm64/)
    # Move contents up so $pandoc_dir/bin/pandoc exists
    local nested_dir
    nested_dir="$(find "$pandoc_dir" -mindepth 1 -maxdepth 1 -type d | head -1)"
    if [[ -n "$nested_dir" && -d "$nested_dir/bin" ]]; then
      mv "$nested_dir"/* "$pandoc_dir"/
      rmdir "$nested_dir"
    fi
  fi

  export PATH="$pandoc_dir/bin:$PATH"
  echo "pandoc installed: $(pandoc --version | head -1)"
}

# Only ensure pandoc when a Hugo target (wc or eh) is specified
for arg in "$@"; do
  case "$arg" in
    wc|eh)
      ensure_pandoc
      break
      ;;
  esac
done

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
