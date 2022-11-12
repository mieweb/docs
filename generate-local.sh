echo "Node version"
node -v
echo "npm i"
npm i
npm -g i  hugo-extended

echo "Building docs.enterprisehealth.com"
hugo --config 'config-eh.toml' --baseURL "https://docs.enterprisehealth.com" --verbose --minify
