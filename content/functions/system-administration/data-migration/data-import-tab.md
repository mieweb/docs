---
id: '1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y'
title: 'Data Import Tab'
date: '2025-11-12T19:30:47.495Z'
version: 278
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ZOBDNHRK'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y'
wikigdrive: 'v2.15.30'
---
In order to access and utilize the Data Import CSV API within the Control Panel, one must have security access. The security needed is *Allow .csv Data Import* set to Yes.

![](./data-import-tab.assets/95ed08be2c3c6a995f20cf11d0234bbb.png)

If user(s) have security permission to allow .csv data import, then the user(s) can access the Data Import CSV API tab.

![](./data-import-tab.assets/1d3df952068902d947e109bb255bc523.png)

## Data Import CSV API in datavis

The Data Import page has been redesigned into a datavis with function buttons, to enhance user experience and usability. However, the Legacy Data Import screen is still accessible on the page for use.

Within the redesigned Data Import page, a specific data import api tool is able to be selected (checkmark) and then displays individual buttons for the user to access/see/obtain information for an Overview, Specifications information, Sample file information, Help Guide, and the Upload Data screen for the specific Data Import API selected.

![](./data-import-tab.assets/9706312b7150d69b1e694b527a3887d6.png)

In a new system or upon upgrade, the updated Data Import datavis page may not work unless you set ‘ csv_api_data_import' JSON model_security on applicable security roles needing access.

![](./data-import-tab.assets/e5bf0a54c38b6b95ce65c1327a554004.png)

Any data needing to be imported, must be formatted in an appropriate CSV file, according to the specific import type's specifications.

### Data Import Options

Once a specific Data Import CSV API option has been selected (checkmark which you wish to use the data import for), the *Data Import Option buttons* will display for use at the bottom of the datavis.

![](./data-import-tab.assets/f2c06e367d80995655db5da3ce91a207.png)

#### Show Overview

The *Show Overview* button essentially is a pop-up window with the Data Import's specific overview of what it will import, along with all the other option abilities (view specification files, view sample files, view any help guide documentation for the specific import selected, and ability to upload/import the data) all within the same pop-up window.

![](./data-import-tab.assets/9e666fd78449d09c0e1a551277c6af9c.png)

* <strong>Description:</strong> Gives a brief description of this specific data import that was selected.
* <strong>Specification File(s):</strong> Will take the user to a new separate window tab (typically a google drive document) to view the specific criteria/specifications to format the CSV file columns and rows of data with.
* <strong>Sample File(s):</strong> Will take the user to a separate window tab (typically a google drive document) to view the specific criteria/specifications to format the CSV file of data with, but in a sample CSV file.  Essentially, showing a full sample formatted file for the specific import selected.
* <strong>Help Guide Documentation:</strong> Will take the user to a separate window tab of the {{% system-name %}} published help guide specific to the import selected.
* <strong>Upload Data Import File:</strong> Will pop-up the Upload Data screen to begin the import upload process.

#### Upload Data

The Upload Data pop-up window shows the field requirements (Interface, Verbose checkbox, Delimiter) and the CSV file field to browse and upload the CSV file needing to be imported that is for the specific Data Import selected.

![](./data-import-tab.assets/589fedad5bf8ec998fdb32ab179763b6.png)

* <strong>Interface:</strong> You can change the default name to be any text you wish.  When changing the Interface field name, it's best to be a unique name to identify the import.
* <strong>Verbose:</strong> It is recommended that you checkmark this to view more detailed information about the data processing during the import step. A data import verbose log is an extremely detailed record of the entire row/line process of bringing data into the system.
* <strong>Delimiter:</strong> Use the drop-down to select the delimiter. Typically it is as Comma
* <strong>CSV File:</strong> Browse out and select the CSV file you wish to import, that follows all specifications the specific import requires.  The Data Import only accepts CSV file format.

After browsing to select the file to import, make sure to click the *Validate File* button before beginning the data import upload.  The *Validate File* button will analyze the data in the file to alert you of any issues (or of a successful file with no warnings or errors) before you click to *Upload File* to begin the import process.

Here's an example of possible messages visible after *Validate File* is clicked:

![](./data-import-tab.assets/35a3e61c6c29ad7003316ef5c9cdee23.png)

* <strong>Upload File:</strong> Once ready to import the data from the CSV file, click the <em>Upload File</em> button.  The system will begin the import process.

### Verbose Log

Once the CSV is uploaded, and if you had checkmarked *Verbose* in the upload requirements section (which is always recommended), you will then see a **Verbose Log** after the import has been processed.

![](./data-import-tab.assets/ec26276e14bc5f28617049752be2473e.png)

* <strong>Show Log:</strong> Click this to see the detailed records of rows and lines of the entire process of bringing that CSV file data into the system.  This will show successful processed rows of data and will also display any rows of data that have errored.

![](./data-import-tab.assets/9a49430e65d2c53c337c228486891fb1.png)

* <strong>Download Log:</strong> The <em>download log</em> button will download the log into a notes text file that you can save to your device/computer, etc.

Note: Any data that had errored, would not have been imported into the system.  Thus, those would need to be fixed and placed on their own unique CSV file to import later once you've worked any issues the Verbose Log displayed as having an error.  This is why using the *Validate File* button is also important to do before the upload file process.

### Log:

Once the CSV is uploaded, and if you had **not** checkmarked *Verbose* in the upload requirements section (which is always recommended), you will then only see a** Log** after the import has been processed.

![](./data-import-tab.assets/18337eeb126b5ec77b903a2d71b4b003.png)

* <strong>Show Log:</strong> Click this to see an overview success or errored per row of the CSV file that was imported.  It does not granular Verbose detail in the log, since <em>Verbose</em> was not marked to be utilized.

![](./data-import-tab.assets/763515c9ebec2ac941f9b962f83363e1.png)

* <strong>Download Log:</strong> The <em>download log</em> button will download the log into a notes text file that you can save to your device/computer, etc.

#### Specifications

Will take the user to a new separate window tab (typically a google drive document) to view the specific criteria/specifications to format the CSV file columns and rows of data with.

![](./data-import-tab.assets/e3388fae50abacb4adb3417228078d55.png)

#### Sample

Will take the user to a separate window tab (typically a google drive document) to view the specific criteria/specifications to format the CSV file of data with, but in a sample CSV file.  Essentially, showing a full sample formatted file for the specific import selected.

![](./data-import-tab.assets/45e583a5619d502353852458b9b07faa.png)

#### Help Guide

Will take the user to a separate window tab of the {{% system-name %}} published help guide specific to the import selected.

![](./data-import-tab.assets/7d3659e525e3a58c01b00fc09d675dc7.png)

## Legacy Data Import

Within the updated datavis Data Import CSV API screen, there is the ability to get to our Legacy Data Import look and screen.  Simply click the Legacy Data Import hyperlink to get to our legacy screen and the directions below apply.

![](./data-import-tab.assets/a63743648d9cebaec7111e56e97bb67e.png)

Once in the Legacy Data Import tab, use the drop down to select the {{% system-name %}} data import type and click the GO button to continue on.

![](./data-import-tab.assets/377bbd7ac3d4ddba3129068de73fc449.png)

## Learning Management System

To learn more about the Data Import Tab, follow the link below to the Learning Management System course:

* [Data Import Tab](https://mie.talentlms.com/shared/start/key:ZOBDNHRK)

## Additional Information

Additional help guide available: [Data Import Master List](data-import-master-list.md)
