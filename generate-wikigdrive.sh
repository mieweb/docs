echo "Node version"
node -v
npm config set color false &&  npm config set progress false
echo "npm i"
time npm i

mkdir -p config/_default/; cat content/navigation.md | ./navigation2menu.js > config/_default/menu.en.json

echo "Building docs.enterprisehealth.com"
rm -rf public/*
echo hugo --config 'wikigdrive.toml' --baseURL $BASE_URL
time hugo --config 'wikigdrive.toml' --baseURL $BASE_URL

CODE=$?
rm -rf .hugo_build.lock
exit $CODE
