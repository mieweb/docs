#!/bin/sh



echo "Installing Prerequisites"

if [[ "$OSTYPE" == "darwin"* ]]; then
  manifest=('brew' 'node' 'hugo' 'nothing')
elif [[ "$OSTYPE" == "msys" ]]; then
  manifest=('choco' 'node' 'hugo' 'nothing')
fi

if [[ " ${manifest[@]} " =~ "brew" ]]; then
  if [[ $(which brew ) ]]; then
    echo "Brew Found"
  else 
    echo "Installing Brew"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  fi
fi

if [[ " ${manifest[@]} " =~ "choco" ]]; then
  if [[ $(which choco ) ]]; then
    echo "Choco Found"
  else 
    echo "Installing Choco"
  fi
fi

if [[ " ${manifest[@]} " =~ "node" ]]; then
  if [[ $(which node ) ]]; then
    echo "Node.js Found. Installing modules"
    npm i -g @mieweb/wikigdrive postcss postcss-cli
  else 
    echo "Installing Node.js"
    if [[ "$OSTYPE" == "darwin"* ]]; then
      brew install node
    elif [[ "$OSTYPE" == "msys" ]]; then
      choco install -y nodejs
    fi
    
  fi
fi

if [[ " ${manifest[@]} " =~ "hugo" ]]; then
  if [[ $(which hugo ) ]]; then
    echo "Hugo Found"
  else 
    echo "Installing Hugo"
    if [[ "$OSTYPE" == "darwin"* ]]; then
      brew install hugo
    elif [[ "$OSTYPE" == "msys" ]]; then
      choco install -y hugo hugo-extended
    fi
    
  fi
fi

if [[ " ${manifest[@]} " =~ "nothing" ]]; then
  if [[ $(which nothing ) ]]; then
    echo "Nothing Found"
  else 
    echo "Installing Nothing"
  fi
fi


