:
tmux new-session -d -s wikigdrive 'node "/root/wikiGDrive/dist/main.js" watch --watch_mode=changes --debug=watch; bash -i'
tmux new-session -d -s webchart_hugo 'hugo server --baseURL="https://docs-qa.med-web.com/wc" --config 'config-wc.toml' --appendPort=false --port=1313 --liveReloadPort=443; bash -i'
tmux new-session -d -s eh_hugo 'hugo server --baseURL="https://docs-qa.med-web.com/eh" --config 'config-eh.toml' --appendPort=false --port=1314 --liveReloadPort=8443; bash -i'
