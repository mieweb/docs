---
id: '1u7cPDkqx04cxeALGacspymwrVoHyKKwQbOW8z5XMVzY'
title: 'Device Interface - Maico MA800'
date: '2026-01-07T21:13:45.441Z'
version: 47
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/enterprise-health-interface-specifications.md'
source: 'https://drive.google.com/open?id=1u7cPDkqx04cxeALGacspymwrVoHyKKwQbOW8z5XMVzY'
wikigdrive: 'v2.15.30'
---
This page provides instructions for retrieving results from the Teleaccoustics Maico MA800 audiometer with Enterprise Health (EH), and lists the fields that the interface retrieves.

## Instructions

### Individual Mode

To retrieve results for an individual patient:

1. Go to the patient's chart and start a new Audiogram encounter.
2. Click the Perform Test button in the MA800 Audio section.
3. Click the Connect to Maico MA800 link.
    * The first time the device is used, run the MIE Applet and allow access to the application.
    * The first time the device is used, enter the correct COM Port. This is now the default value.
4. Click the Open Port button. If successful, "Waiting for data..." appears.
5. Perform the audio test on the device
6. The test will automatically be transferred when completed
    * A window will appear with the test results
    * Click the "Save Results" button if correct or "Cancel" if incorrect

### Batch Mode

The MA 800 does not support batch upload.

## Collected Fields

The following fields are collected in EH:

* Left ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Right ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Test Date/Time
* Calibration Date/Time

## Installation Help

To correctly install and use the audiometer with EH the following considerations are important to note:

* The interface uses Java to interact with the device; Java must be installed on each PC that is connected to the audiometer.
* During the initial setup, ensure that the COM port settings on the device are the same as in EH

## Related Pages

For a list of all supported devices, see our [Devices List](../../../resources/system-specifications/enterprise-health-interface-specifications.md)
