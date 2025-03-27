---
id: '1QVYsGl9zxe8qBxICbS2cW2qKMt2mnGY_L0H0UcsDLDc'
title: 'Device Interface - Tremetrics RA500 , RA300, RA800'
date: '2021-08-31T14:16:27.353Z'
version: 81
lastAuthor: 'kkocks'
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/interface-specifications.md'
source: 'https://drive.google.com/open?id=1QVYsGl9zxe8qBxICbS2cW2qKMt2mnGY_L0H0UcsDLDc'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
This page provides instructions for retrieving results from the Tremetrics RA500 audiometer with Enterprise Health (EH), and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Individual Mode

To retrieve results for an individual patient:

1. Go to the patient's chart and start a new Audiogram encounter.
2. Click the Perform Test button in the Tremetrics Audio section.
3. Click the Connect to RA500 link.
    1. The first time the device is used, enter the correct COM Port. This is now the default value.
4. Click the Open Port button. If successful, "Waiting for data..." appears.
    1. A security prompt appears to ensure a user initiated the request. Clicking "Yes" allows a single request. Clicking "Yes, Always" prevents the warning from appearing every time.
5. Click the Request Current Test link. A new window opens with the received test.
6. Verify the patient and click the Upload button.
    1. If the patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    2. Click the information icon (?) to see all the details of the test.
    3. If the wrong test was retrieved, close the new window; nothing is saved.

### Batch Mode

To retrieve results for multiple patients:

1. Click the Import tab on the left side menu.
2. Select "Tremetrics Data Import" from the dropdown.
3. Click the Go button.
4. Follow steps 3-6 from the Individual Mode section above.
5. Select the tests on the audiometer unit to import to EH.
6. Click the Request All Tests link. A new window opens with all received tests.
7. Verify the expected patients were found and click the Upload button.
    1. If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    2. If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    3. Click the information icon (?) to see all the details of a test.
    4. If no tests should be uploaded, close the new window; nothing is saved.

## Collected Fields

The following fields are collected in EH:

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

## Related Pages

For a list of all supported devices see the [Devices List](../../../resources/system-specifications/interface-specifications.md)
