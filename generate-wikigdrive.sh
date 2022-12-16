echo "Node version"
node -v
npm config set color false &&  npm config set progress false
echo "npm i"
npm i

echo "Building docs.enterprisehealth.com"
rm -rf public/*
echo hugo --config 'wikigdrive.toml' --baseURL $BASE_URL
hugo --config 'wikigdrive.toml' --baseURL $BASE_URL

CODE=$?
rm -rf .hugo_build.lock
exit $CODE
