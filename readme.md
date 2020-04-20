# MIE Docs

## Setup 

## TLDR

- [Git Desktop for Window](https://desktop.github.com)
- open bash window, type: `./build`

**Requirements**

- [Hugo](https://gohugo.io/)
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [wikiGDrive](https://www.npmjs.com/package/@mieweb/wikigdrive) Background: [Info](https://docs.google.com/document/d/1H6vwfQXIexdg4ldfaoPUjhOZPnSkNn6h29WD6Fi-SBY/edit#heading=h.rv5b8ogzvg6h)

### Mac Users

From your terminal, clone this repository:

```bash
git lfs clone https://github.mieweb.com/aquandt/mie-docs.git
```
Then run the setup script:
```bash
./setup.sh
./build.sh
```

### Windows Users

If you do not have Git installed, [download](https://git-scm.com/download/win) and install it.

To install Nodejs and Chocolatey (package manager), [go here](https://nodejs.org/en/download/package-manager/) and choose the Windows (.msi) installer. If you are unsure about your computer being 32 or 64 bit, choose 32.

During the installation, you will reach a screen with a checkbox for installing Chocolatey. Make sure this is checked (it is not checked by default):

![](readme-assets/nodejs.png)

Once you have Chocolatey installed, open Git Bash (run as administrator), clone this repository:
```bash
git lfs clone https://github.mieweb.com/aquandt/mie-docs.git
```
Then run the setup script:
```bash
./setup.sh
```


## Getting Started

### Overview

This project uses the following tools:

- **wikigdrive:**  A script that will download content from a Google Drive folder and convert it to [Markdown](https://www.markdownguide.org/cheat-sheet/) for use with Hugo.
- **Hugo:** A static HTML website builder.

You will use wikigdrive to download or watch for updates (and download) to the content in your Google Drive Folder.  You can use Hugo to:

### Getting content from Google Drive:

We will need to run wikigdrive at least once in order to generate the content that Hugo will build the website with.  You will need to have the following:

- URL of the Google Drive folder you wish to use (example URL: `https://drive.google.com/drive/folders/1ahRhJjqSdokWHI6QllTJzms_u5jYxWBR` )
- If you do not have Google Cloud credentials in `.wikigdrive` file, visit the [wikiGrdive](https://github.com/mieweb/wikiGDrive/blob/master/README.md#authorization) project for instructions.

## Branding

There are currently 3 branding options.  

- MIE (Generic)
- Enterprise Health
- WebChart

The MIE branding option is the default and its configuration is stored in the `config.toml` file.  Enterprise Health's branding configuration is stored in `config-eh.toml` and WebChart's is within `config-wc.toml`.

If you wish to build or run a local server using a different branding configuration; add the `--config` flag to your Hugo command.

Example:

```bash
hugo server --config 'config-eh.toml'
hugo --config 'config-wc.toml'
```
