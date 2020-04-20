---
title: "Device Interface - Benson Audiometer"
date: 2020-03-19T19:08:51.988Z
url: "general-functionality/system-administration/interfaces/device-interface-benson-audiometer.html"
author: Jeremia Ploor
version: 18
id: 1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0
source: https://drive.google.com/open?id=1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0
---
This page provides instructions for retrieving results from the Benson software with {{% system-name %}} , and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Batch Mode

To retrieve results for multiple patients:

1. In the Benson software, export the results file
    1. Use format: Webchart Data Transfer
    2. Select file location
2. Click the Import tab on the left side menu.
3. Select "Benson Audiogram Data Import" from the dropdown.
4. Click the Go button.
5. In the "Data File" input select the file that was exported in step 1.
6. Select the correct partition from the Partition dropdown
7. Select the Location where the tests were performed
8. Click the Upload button
9. Verify the expected patients were found and click the Upload button.
    3. If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    4. If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    5. Click the information icon (?) to see all the details of a test.
    6. If no tests should be uploaded, close the new window; nothing is saved.

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
    * Translations are used to map users from the device to  {{% system-name %}} users. The translations have name of "Device" and category of "tech."

## Installation Help

To correctly install and use the audiometer with {{% system-name %}} the following considerations are important to note:

* The interface uses files exported from the Benson audio software
* To get the correct export format a configuration file must be imported into the Benson software
    * Please talk to an implementer to get the configuration file
    * Use "Merge" file option in Benson Audio software
* The import menu is not installed on a default system, it must be added from the menu editor in the Control Panel.
    * To select the options that appear in the dropdown of the import page, add "?f=wc_import&s=edit" to the URL and select the desired options.
* System setting "Save results automatically" should be set to "0"

## Related Pages

[Devices List](https://docs.google.com/document/d/1dpBE40WHHZcXc2vs9jWtBsoHS-4NiCZPKXLbmG8-HX4)

Configuration File

* File:Stxextract mie.mdb