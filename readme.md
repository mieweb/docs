# MIE Docs

description 



## Requirements

- [Hugo](https://gohugo.io/)
- [wikiGDrive](https://github.com/mieweb/wikiGDrive)

First, install Hugo [Windows](https://gohugo.io/getting-started/installing/#chocolatey-windows) - [Mac](https://gohugo.io/getting-started/installing/#homebrew-macos) and verify installation by running: `hugo version`

Once Hugo is installed, you need to clone the wikiGDrive repository, install dependencies and build:

```bash
git clone git@github.com:mieweb/wikiGDrive.git
cd wikiGDrive
npm install
npm run build
```

## Setup Hugo Site:

Clone this repository (NOT in your wikiGDrive directory):

```bash
git clone ssh://git@repo.mieweb.com:7999/~aquandt/mie-docs.git
cd mie-docs
```

In order to run `wikiGDrive` as a command we need to `npm link` wikiGDrive (because it is not yet available as an NPM module). You should only need to do this once.

In your `mie-docs` directory, run:

```bash
npm link wikigdrive path/to/where/you/cloned/wikigdrive
```


### Getting content from Google Drive:

When you run the wikiGDrive script, you will be downloading all files and folders within the folder of the URL you provide.  The script will create a `.wikigdrive` file in the root folder.  This contains auth information and other data that is necessary for the wikigdrive script to run properly. **DO NOT DELETE or MODIFY this file unless you know what you are doing.**

To run the script, you must provide:

- URL of the root Google Drive folder
- [Google API client ID and client secret](https://console.developers.google.com/apis/credentials/oauthclient/762352378313-cfb109ipchpj1qij3i8u17t7faf6t5e0.apps.googleusercontent.com?project=wikigdrive). 
- Destination for the downloaded files (usually the 'content' directory)

Common options for wikiGDrive ( all options found [here](https://github.com/mieweb/wikiGDrive) ):

```
--link_mode mdURLs - `/filename.md`
--link_mode dirURLs - `/filename/`
--link_mode uglyURLs - `/filename.html`

--without-folder-structure    Download documents into single, flat folder
```

Example use:

```bash
wikigdrive "https://GOOGLE_DRIVE_FOLDER_URL"  --client_id YOUR_CLIENT_ID --client_secret YOUR_CLIENT_SECRET --link_mode uglyURLs --without-folder-structure --dest content 
```

The first time you run, you will be prompted with a URL.  You must visit this URL to authenticate yourself.  Once you follow the steps, you will receive a code.  Copy this code and paste it in your terminal. Then hit enter.  If your `.wikigdrive` has been removed or tampered with, you may be asked to do this again.

### Hugo Build/Server:

The wc-eh-docs theme is setup to change the branding depending on which product you are building documentation for.  You should provide the proper config file for your purposes. 

To build the documentation run `hugo` with the config file for the desired product:

```bash
hugo --config 'config-wc.toml' // Builds with WebChart branding
hugo --config 'config-eh.toml' // Builds with Enterprise Health branding
```

To start a Hugo server, run `hugo server` with the config file for the desired product:

```bash
hugo server --config 'config-wc.toml' // Runs Hugo server with WebChart branding
hugo server --config 'config-eh.toml' // Runs Hugo server with Enterprise Health branding
```