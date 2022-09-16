echo "npm ci"
npm ci
echo "Downloading hugo..."
wget https://github.com/gohugoio/hugo/releases/download/v0.103.0/hugo_extended_0.103.0_Linux-64bit.tar.gz -O hugo.tar.gz
tar xvf hugo.tar.gz

echo "Building $1"

#if $1 is "wc" then build docs.webchartnow.com, if it's "eh" then build docs.enterprisehealth.com

if [ "$1" = "wc" ]; then
    echo "Building docs.webchartnow.com"
    ./hugo --config 'config-wc.toml' --baseURL "https://docs.webchartnow.com" --verbose --minify
elif [ "$1" = "eh" ]; then
    echo "Building docs.enterprisehealth.com"
    ./hugo --config 'config-eh.toml' --baseURL "https://docs.enterprisehealth.com" --verbose --minify
else
    echo "Invalid argument. Please specify wc or eh"
    exit 1
fi
