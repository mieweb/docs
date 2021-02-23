#!/bin/sh

# make sure deps are installed
./setup.sh

# init drive if not there

if [ ! -d .wgd ]
then
  ../wikiGDrive/dist/main.js init --drive "https://drive.google.com/drive/folders/1nwb2j9w6LFZASdr3ouUXPmouw4tynHv-" --dest ./content --link_mode uglyURLs --service_account=wikigdrive.json
fi

# sync once and time it
time wikigdrive pull
time hugo --config 'config-wc.toml'
time hugo --config 'config-eh.toml'
