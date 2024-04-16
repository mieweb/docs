---
id: '1_QN1k1chuQwKEFoBNmXwa7THRu91en4_FcZCVFujSs8'
title: 'Device Interface - MI 7000'
date: '2020-02-27T21:28:12.911Z'
version: 25
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/interface-specifications.md'
source: 'https://drive.google.com/open?id=1_QN1k1chuQwKEFoBNmXwa7THRu91en4_FcZCVFujSs8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
This page provides instructions for retrieving results from the MI 7000 audiometer with {{% system-name %}} ( {{% sys-name %}} ), and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Individual Mode

To retrieve results for an individual patient:

1. Go to the patient's chart and start a new Audiogram encounter.
2. Click the Perform Test button in the MI 7000 section.
3. Click the Connect to Monitor Instruments MI7000 link.
    1. The first time the device is used, enter the correct COM Port. This is now the default value.
4. Click the Open Port button. If successful, "Waiting for data..." appears.
    1. A security prompt appears to ensure a user initiated the request. Clicking "Yes" allows a single request. Clicking "Yes, Always" prevents the warning from appearing every time.
5. Instruct the audiometer to send the results. A new window opens with the received test.
6. Verify the patient and click the Upload button.
    1. If the patient is incorrect or not found, click the pencil icon and choose the correct patient.
    2. Click the information icon to see all the details of the test.
    3. If the wrong test was retrieved, close the new window; nothing is saved.

### Batch Mode

To retrieve results for multiple patients:

1. Click the Import tab on the left side menu.
2. Select "MI7000 Data Import" from the dropdown.
3. Click the Go button.
4. Follow steps 3-6 from the Individual Mode section above.
5. Instruct the audiometer to send the results. A new window opens with the received test.
6. Verify the expected patients were found and click the Upload button.
    1. If a patient is incorrect or not found, click the pencil icon and choose the correct patient.
    2. If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    3. Click the information icon (?) to see all the details of a test.
    4. If no tests should be uploaded, close the new window; nothing is saved.

## Collected Fields

The following fields are collected in {{% sys-name %}} :

* Left ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Right ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Patient MR Number
* Test Date/Time
* Audiometer Serial Number
* Calibration Date/Time

## Installation Help

To correctly install and use the audiometer with EH the following considerations are important to note:

* The interface uses Java to interact with the device; Java must be installed on each PC that is connected to the audiometer.
* The import menu is not installed on a default system, it must be added from the menu editor in the Control Panel.
    * To select the options that appear in the dropdown of the import page, add "?f=wc_import&s=edit" to the URL and select the desired options.
* The following settings need to be used on the device:
    * Use ID Number - Y
    * Use SSN Format - N
    * Communication Code - 900
    * Use Normal Xfer - Y

## Related Pages

For a list of all supported devices see the [Devices List](../../../resources/system-specifications/interface-specifications.md)
