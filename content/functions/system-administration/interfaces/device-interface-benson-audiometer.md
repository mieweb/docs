---
id: '1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0'
title: 'Device Interface - Benson Audiometer'
date: '2025-07-23T16:17:45.270Z'
version: 378
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/enterprise-health-interface-specifications.md'
  - 'https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ'
source: 'https://drive.google.com/open?id=1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
markup: 'pandoc'
---
This page provides instructions for retrieving results from the Benson software with , and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Batch Mode

To retrieve results for multiple patients:

1. In the Benson software, export the results file
    a.  Use format: Webchart Data Transfer
    b.  Select file location
2. Click the Import tab on the left side menu.
3. Select "Benson Audiogram Data Import" from the dropdown.
4. Click the Go button.
5. In the "Data File" input select the file that was exported in step 1.
6. Select the correct partition from the Partition dropdown
7. Select the Location where the tests were performed
8. Click the Upload button
9. Verify the expected patients were found and click the Upload button.
    a.  If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    b.  If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    c.  Click the information icon (?) to see all the details of a test.
    d.  If no tests should be uploaded, close the new window; nothing is saved.

## Collected Fields

The following fields are collected in {{% system-name %}} :

* Left ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Right ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Left baseline
* Right baseline
* Patient MR Number
* Test Date/Time
* Audiometer Serial Number
* Calibration Date/Time
* Test comment
* User that performed the test
    * Translations are used to map users from the device to  {{% system-name %}} users. The translations have the name of "Device" and the category of "tech."

## Installation Help

To correctly install and use the audiometer with {{% system-name %}} the following considerations are important to note:

* The interface uses files exported from the Benson audio software
* To get the correct export format a configuration file must be imported into the Benson software
    * The configuration file is available in the Plugins page of the Control Panel in {{% system-name %}}

![](../device-interface-benson-audiometer.assets/62de28659970757f10b439a76974c5b2.png)

    * Use "Merge" file option in the Plus Package software
* The import menu is not installed on a default system, it must be added from the menu editor in the Control Panel.
    * To select the options that appear in the dropdown of the import page, add "?f=wc_import&s=edit" to the URL and select the desired options.
* System setting "Save results automatically" should be set to "0"

## Related Pages

[Devices List](../../../resources/system-specifications/enterprise-health-interface-specifications.md)

### Configuration File

* File: [Stxextract](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)[ ](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)[mie.mdb](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)
