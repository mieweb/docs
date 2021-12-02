---
title: "Device Interface - Tremetrics RA500 , RA300, RA800"
date: "2021-08-31T14:16:27.353Z"
url: "functions/system-administration/interfaces/device-interface-tremetrics-ra500-ra300-ra800.html"
author: Kyle Kocks
version: 36
id: "1QVYsGl9zxe8qBxICbS2cW2qKMt2mnGY_L0H0UcsDLDc"
source: "https://drive.google.com/open?id=1QVYsGl9zxe8qBxICbS2cW2qKMt2mnGY_L0H0UcsDLDc"
menu:
    main:
        name: "Device Interface - Tremetrics RA500"
        identifier: "1QVYsGl9zxe8qBxICbS2cW2qKMt2mnGY_L0H0UcsDLDc"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5570
---
This page provides instructions for retrieving results from the Tremetrics RA500 audiometer with Enterprise Health (EH), and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Individual Mode

To retrieve results for an individual patient:

* Go to the patient's chart and start a new Audiogram encounter.
* Click the Perform Test button in the Tremetrics Audio section.
* Click the Connect to RA500 link.
    * The first time the device is used, enter the correct COM Port. This is now the default value.
* Click the Open Port button. If successful, "Waiting for data..." appears.
    * A security prompt appears to ensure a user initiated the request. Clicking "Yes" allows a single request. Clicking "Yes, Always" prevents the warning from appearing every time.
* Click the Request Current Test link. A new window opens with the received test.
* Verify the patient and click the Upload button.
    * If the patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    * Click the information icon (?) to see all the details of the test.
    * If the wrong test was retrieved, close the new window; nothing is saved.

### Batch Mode

To retrieve results for multiple patients:

* Click the Import tab on the left side menu.
* Select "Tremetrics Data Import" from the dropdown.
* Click the Go button.
* Follow steps 3-6 from the Individual Mode section above.
* Select the tests on the audiometer unit to import to EH.
* Click the Request All Tests link. A new window opens with all received tests.
* Verify the expected patients were found and click the Upload button.
    * If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
    * If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    * Click the information icon (?) to see all the details of a test.
    * If no tests should be uploaded, close the new window; nothing is saved.

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

For a list of all supported devices see the [Devices List](../../../resources/system-specifications/interface-specifications.html)

