# WebChart / Enterprise Health Docs

If your are a non-techie looking to [contribute](content/contributing-to-this-documentation.md) to documentation, best use the website and author in Google Drive and make recommendations there.

# Overview

This git repo contains the history of documentation for MIE's WebChart based products for public consumption.  Its purpose is four fold:

1. Act as a public facing revision control repository for end-user and adminsitrator documentation linked to the release cycle for WebChart based software.  Eg: each version of the documentation is earmarked on a branch RC20YYMM and this documentation will be maintained beside that strategy.
2. Scripts to maintain the documentation. The source of truth for the "master" branch of the [content](content) folder is **not** this repository.  It is instead is stored in a specific [MIE Documentation Google Shared Drive](https://drive.google.com/drive/u/0/folders/0ALfGlL3hJS03Uk9PVA).  Changes should be made there (by using "Propose Changes") and when approved in the Google Drive, a tool named wikiGDrive transforms the Google Docs and Google Drawings into Markdown and images (png or svg) to be placed in the content folder.
3. Scripting tools to transform the Markdown into HTML using [Hugo](https://gohugo.io) to generate a website for each product branded to its purpose.
4. Automation in GitHub Enterprise [Actions](.github/workflows) to automate the updating of the public facing websites.  Currently there are two:  1) docs.webchartnow.com and 2) docs.enterprisehealth.com

## Contents of this project

1. The [content](content) folder contains the [Markdown](https://www.markdownguide.org/basic-syntax/) for documentation.  Most conributors of documentation will not directly work with the Markdown as it requires a bit more skill than working with Google Docs and Diagrams.
2. Scripts to get Google changes in to Markdown
themes.gohugo.io) for WC and EH.
3. Hugo stuff
    - [config-eh.toml](config-eh.toml) Hugo config for Enterprise Health of static pages.
    - [config-wc.toml](config-wc.toml) Hugo config for WebChart building of static pages.
    - [themes/wc-eh-docs](themes/wc-eh-docs) custom Hugo [themes](https://themes.gohugo.io)
4. Automation to automate the process as well as a set of scripts to update a qa-server in realtime watching for changes in Google Drive and near instant update.
    - [Actions](.github/workflows) - github scripts that automate changes out to production and test Pull Requests to see if they break the build process.
    - [test.sh](test.sh) a script for testing the static page generation locally on your own machine.
    - [start-server.sh](start-server.sh) starts several services that watch for changes in realtime from Google, download, transform and update the page.

## Setup 
### TLDR - for geeks to get started quickly.

- Clone this repo.
- open bash window, type: `./build.sh`
### Requirements

- [Git LFS](https://git-lfs.github.com/)
- [Hugo](https://gohugo.io/)
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [wikiGDrive](https://www.npmjs.com/package/@mieweb/wikigdrive) Background: [Info](https://docs.google.com/document/d/1H6vwfQXIexdg4ldfaoPUjhOZPnSkNn6h29WD6Fi-SBY/edit#heading=h.rv5b8ogzvg6h)

### Mac Users

From your terminal, clone this repository:

```bash
# CHOOSE ONE
# for username and password
git lfs clone https://github.mieweb.com/webchart/docs.git
# -- OR --
# for SSH key
git lfs clone git@github.mieweb.com:webchart/docs.git
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

Once you have Chocolatey installed, open Git Bash (run as administrator), clone this repository:
```bash
git lfs clone https://github.mieweb.com/webchart/docs.git
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
