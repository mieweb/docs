#!/bin/bash

if ! command -v node >/dev/null
then
  echo "Not found: node, installing"
  install_dep nodejs

  if [[ -z "$CF_PAGES_URL" ]]
  then
    echo "Node should be already installed on CloudFlare"
    exit 1
  elif [[ "$OSTYPE" == "darwin"* ]]
  then
    (which brew || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)")
  elif [[ "$OSTYPE" == "msys" ]]
  then
    echo "unsupported"
  elif [[ "$OSTYPE" == "linux-gnu" ]]
    if [[ -e /bin/apt-get ]]
    then
      sudo apt-get -yq install $*
    else
      sudo yum install $*
    fi
  then
    choco install -y $*
  fi
fi

# Install pandoc for markdown processing
if ! command -v pandoc >/dev/null
then
  echo "Not found: pandoc, installing"
  if [[ -n "$CF_PAGES_URL" ]]
  then
    # Cloudflare Pages - use apt
    apt-get update && apt-get install -y pandoc
  elif [[ "$OSTYPE" == "darwin"* ]]
  then
    brew install pandoc
  elif [[ "$OSTYPE" == "linux-gnu"* ]]
  then
    if [[ -e /usr/bin/apt-get ]]
    then
      sudo apt-get update && sudo apt-get install -y pandoc
    else
      sudo yum install -y pandoc
    fi
  elif [[ "$OSTYPE" == "msys" ]]
  then
    echo "Windows detected - install pandoc manually: winget install pandoc"
  fi
fi

npm ci
