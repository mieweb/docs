#!/bin/sh

echo "Installing Prerequisites"

if [[ "$OSTYPE" == "darwin"* ]]
then
  (which brew || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)")
  (which hugo || brew install node hugo)
  # brew update node hugo
elif [[ "$OSTYPE" == "msys" ]]
then
  echo "unsuported"
elif [[ "$OSTYPE" == "linux-gnu" ]]
  if [[ -e apt ]]
  then
    apt install nodejs hugo hugo-extended
  else
    yum install nodejs hugo hugo-extended
  fi
then
  choco install -y nodejs hugo hugo-extended
fi

npm -g list postcss-cli || npm i -g postcss-cli
npm -g list postcss || npm i -g postcss

if [ ! -d ../wikiGDrive ]
then
  npm i -g @mieweb/wikigdrive postcss postcss-cli
fi
