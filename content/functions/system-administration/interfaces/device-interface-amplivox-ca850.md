---
id: '1fRNqhKM-WvY_OAuHbYr2Hk4rKv0tTgulNwh_EVBO1HA'
title: 'Device Interface - Amplivox CA850'
date: '2020-03-19T19:02:19.406Z'
version: 30
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/interface-specifications.md'
source: 'https://drive.google.com/open?id=1fRNqhKM-WvY_OAuHbYr2Hk4rKv0tTgulNwh_EVBO1HA'
wikigdrive: 'b7222904e37143b515987f6e0f083f595990e37a'
menu:
  main:
    name: 'Device Interface - Amplivox CA850'
    identifier: '1fRNqhKM-WvY_OAuHbYr2Hk4rKv0tTgulNwh_EVBO1HA'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5420
---
This page provides instructions for retrieving results from the Amplivox CA850 and Amplivox PC850 audiometers with Enterprise Health (EH), and lists the fields that the interface retrieves.

## **Instructions**

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### **Batch Mode**

To retrieve results for multiple patients:
1. In the Amplivox software, export the results file
2. Click the Import tab on the left side menu.
3. Select "Amplivox Audiogram Data Import" from the dropdown.
4. Click the Go button.
5. In the "Data File" input select the file that was exported in step 1.
6. Select the correct partition from the Partition dropdown
7. Select the Location where the tests were performed
8. Click the Upload button
9. Verify the expected patients were found and click the Upload button.
   1. If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
   2. If some tests should not be uploaded uncheck the checkbox to the left of the patient.
   3. Click the information icon (?) to see all the details of a test.
   4. If no tests should be uploaded, close the new window; nothing is saved.

## **Collected Fields**

The following fields are collected in EH:
* Left ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Right ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Patient MR Number
* Test Date/Time
* Audiometer Serial Number
* Calibration Date/Time
* User that performed the test
   * Translations are used to map users from the device to EH users. The translations have name of "Device" and category of "tech."

## **Installation Help**

To correctly install and use the audiometer with EH the following considerations are important to note:
* The interface uses files exported from the Amplivox audio software
* The import menu is not installed on a default system, it must be added from the menu editor in the Control Panel.
   * To select the options that appear in the dropdown of the import page, add "?f=wc_import&s=edit" to the URL and select the desired options.

## **Related Pages**

[Devices List](../../../resources/system-specifications/interface-specifications.md)
