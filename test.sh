:

if [ "$1" == "static" ]
then
    time hugo --config config-wc.toml
    time hugo --config config-eh.toml
    cd public
    echo "http://localhost:8000"
    python -m SimpleHTTPServer
elif [ "$1" == "live" ]
then
    hugo server --config config-wc.toml --baseURL http://localhost:1313/ --port=1313 &
    sleep 3
    hugo server --config config-eh.toml --baseURL http://localhost:1314/ --port=1314 &
    sleep 3
    echo "Two webservers are running.  Press Ctrl+C to kill both."
    echo "  WC: http://localhost:1313/"
    echo "  EH: http://localhost:1314/"
    wait < <(jobs -p)
else 
    echo "Usage: $0 <static|live>"
fi