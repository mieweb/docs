# MIE Docs

description 



## Requirements

- Hugo
- wikiGdrive



### Install Hugo:

- Windows
- Mac

Verify installation, run: `hugo version`

### Install wikiGDrive:

Clone the wikiGDrive repository:

```bash
git clone git@github.com:mieweb/wikiGDrive.git
```

Install dependencies:

```bash
cd wikiGDrive
npm install
```

### Setup Hugo Site:

Clone this repository:

```bash
git clone ssh://git@repo.mieweb.com:7999/~aquandt/mie-docs.git
cd mie-docs
```

#### Hugo Build/Server:

The wc-eh-docs theme is setup to change the branding depending on which product you are building documentation for.  You should provide the proper config file for your purposes. 

Example: Building or running Hugo's server with WebChart branding:

```bash
hugo --config 'config-wc.toml' // Builds with WebChart branding
hugo server --config 'config-wc.toml' // Runs Hugo server with WebChart branding
```

Example: Building or running Hugo's server with Enterprise Health branding:

```bash
hugo --config 'config-eh.toml' // Builds with Enterprise Health branding
hugo server --config 'config-eh.toml' // Runs Hugo server with Enterprise Health branding
```

#### Using wikiGDrive to get content from Google Drive:

In order to run `wikiGDrive` as a command we need to `npm link` wikiGDrive (because it is not yet in NPM). You should only need to do this once:

```bash
npm link wikigdrive path/to/where/you/cloned/wikigdrive
```

When you run the wikiGDrive script, you will be downloading all files and folders within the folder of the URL you provide.  The script will create a `.wikigdrive` file in the root folder.  This contains auth information and other data that is necessary for the wikigdrive script to run properly. **DO NOT DELETE or MODIFY this file unless you know what you are doing.**

To run the script, you must provide:

- URL of the root Google Drive folder
- Google API client ID
- Google API client secret
- Destination for the downloaded files (usually the 'content' directory)

Example use (downloads documents while ignoring the folder structure):

```bash
wikigdrive "https://GOOGLE_DRIVE_FOLDER_URL"  --client_id YOUR_CLIENT_ID --client_secret YOUR_CLIENT_SECRET --dest content --without-folder-structure

```