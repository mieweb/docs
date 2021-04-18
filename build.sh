#!/bin/sh

# make sure deps are installed
#./setup.sh

wgdcmd() {
  if [ -f ../wikiGDrive/dist/main.js ]
  then
    echo "Using development version of wikiGDrive"
    echo time ../wikiGDrive/dist/main.js $*
    time ../wikiGDrive/dist/main.js $*
  else 
    time wikigdrive $*
  fi
}

# init drive if not there

if [ ! -d .wgd ]
then
  wgdcmd init --drive_id "0ALfGlL3hJS03Uk9PVA" --drive "https://drive.google.com/drive/folders/1nwb2j9w6LFZASdr3ouUXPmouw4tynHv-" --dest ./content --link_mode uglyURLs --service_account=wikigdrive.json
fi

# sync once and time it
wgdcmd pull
time hugo --config 'config-wc.toml'
time hugo --config 'config-eh.toml'
