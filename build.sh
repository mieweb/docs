#!/bin/bash

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
        BASE_URL="http://localhost:$PORT/"
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
