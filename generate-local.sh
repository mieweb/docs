echo "Node version"
node -v
npm config set color false &&  npm config set progress false
echo "npm i"
npm i

echo "Building docs.enterprisehealth.com"
echo hugo --config 'config-eh.toml' --baseURL "https://docs.enterprisehealth.com" --minify
hugo --config 'config-eh.toml' --baseURL "https://docs.enterprisehealth.com" --minify
