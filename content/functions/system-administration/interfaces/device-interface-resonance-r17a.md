---
id: '1XPNwuIDF8ySb9bU9mhYXrYBic4JcJ2Ut1YnZPTkzZ3I'
title: 'Device Interface - Resonance R17A '
date: '2024-10-31T20:03:09.196Z'
version: 42
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1XPNwuIDF8ySb9bU9mhYXrYBic4JcJ2Ut1YnZPTkzZ3I'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
This interface uses the Resonance cloud interface to import results from the audiometer to {{% system-name %}}.

## Import Instructions

* Create a new patient on the resonance audiometer.  If the system uses multiple partitions, the patient ID should be the partition identifier and MRN without a dash character in between.  For example, William Hart would be TEST10019.  If only one partition is used, the partition identifier can be excluded.
* Perform a test on the Resonance audiometer.  The results will be automatically sent to <em>{{% system-name %}}.</em> On success, the test will be removed from the audiometer.
* Once results have been received, they can be viewed in the patient's chart. As this device does not support location information, the location on the audiogram document created in {{% system-name %}} will be blank.

## Collected Fields

The following fields are collected:

* Left ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Right ear frequencies: 500Hz, 1kHz, 2kHz, 3kHz, 4kHz, 6kHz, 8kHz
* Patient MR Number
* Test Date/Time
* Audiometer Serial Number
* Calibration Date/Time

## Installation Help

* Resonance will need to create a new Endpoint in their Resodis software to send data from devices to {{% system-name %}}.
* The only authentication that can be used from Resonance to {{% system-name %}} is HTTP Basic Authentication. A new user will need to be created with a password.  Once that is done, the username and password will need to be base64 encoded and entered into the Resodis Endpoint manager.
* The installation of this interface requires additional help from the {{% system-name %}} team. Please contact your deployment or support representative.
