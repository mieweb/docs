#!/bin/sh

# make sure deps are installed
./setup.sh

# sync once and time it
time wikigdrive "https://drive.google.com/drive/folders/1nwb2j9w6LFZASdr3ouUXPmouw4tynHv-" --service_account=wikigdrive.json --dest content --link_mode uglyURLs
time hugo --config 'config-wc.toml'
time hugo --config 'config-eh.toml'
