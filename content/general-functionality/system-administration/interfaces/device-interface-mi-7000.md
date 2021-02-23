---
title: "Device Interface - MI 7000"
date: 2020-02-27T21:28:12.911Z
url: "general-functionality/system-administration/interfaces/device-interface-mi-7000.html"
author: aquandt
version: 15
id: 1_QN1k1chuQwKEFoBNmXwa7THRu91en4_FcZCVFujSs8
source: https://drive.google.com/open?id=1_QN1k1chuQwKEFoBNmXwa7THRu91en4_FcZCVFujSs8
menu:
    main:
        name: "Device Interface - MI 7000"
        identifier: "1_QN1k1chuQwKEFoBNmXwa7THRu91en4_FcZCVFujSs8"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5560
---
This page provides instructions for retrieving results from the MI 7000 audiometer with {{% system-name %}} ( {{% sys-name %}} ), and lists the fields that the interface retrieves.

## Instructions

To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.

### Individual Mode

To retrieve results for an individual patient:

* Go to the patient's chart and start a new Audiogram encounter.
* Click the Perform Test button in the MI 7000 section.
* Click the Connect to Monitor Instruments MI7000 link.
    * The first time the device is used, enter the correct COM Port. This is now the default value.
* Click the Open Port button. If successful, "Waiting for data..." appears.
    * A security prompt appears to ensure a user initiated the request. Clicking "Yes" allows a single request. Clicking "Yes, Always" prevents the warning from appearing every time.
* Instruct the audiometer to send the results. A new window opens with the received test.
* Verify the patient and click the Upload button.
    * If the patient is incorrect or not found, click the pencil icon and choose the correct patient.
    * Click the information icon to see all the details of the test.
    * If the wrong test was retrieved, close the new window; nothing is saved.

### Batch Mode

To retrieve results for multiple patients:

* Click the Import tab on the left side menu.
* Select "MI7000 Data Import" from the dropdown.
* Click the Go button.
* Follow steps 3-6 from the Individual Mode section above.
* Instruct the audiometer to send the results. A new window opens with the received test.
* Verify the expected patients were found and click the Upload button.
    * If a patient is incorrect or not found, click the pencil icon and choose the correct patient.
    * If some tests should not be uploaded uncheck the checkbox to the left of the patient.
    * Click the information icon (?) to see all the details of a test.
    * If no tests should be uploaded, close the new window; nothing is saved.

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

For a list of all supported devices see the [Devices List](../../../resources/system-specifications/interface-specifications.html)

