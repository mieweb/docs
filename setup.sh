#!/bin/sh

echo "Installing Prerequisites"

if [[ "$OSTYPE" == "darwin"* ]]
then
  (which brew || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)")
  (which hugo || brew install node hugo)
  # brew update node hugo
elif [[ "$OSTYPE" == "msys" ]]
then
  choco install -y nodejs hugo hugo-extended
fi

npm i -g @mieweb/wikigdrive postcss postcss-cli
