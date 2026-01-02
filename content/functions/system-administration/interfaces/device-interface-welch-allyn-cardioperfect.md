---
id: '1XB-StdKfSnnnlBvSzmgH_0swF-0VnJFNgOx86By8gJ8'
title: 'Device Interface - Welch Allyn CardioPerfect'
date: '2025-07-03T15:54:56.861Z'
version: 124
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/enterprise-health-interface-specifications.md'
source: 'https://drive.google.com/open?id=1XB-StdKfSnnnlBvSzmgH_0swF-0VnJFNgOx86By8gJ8'
wikigdrive: 'v2.15.30'
---
This page describes the interface between Enterprise Health (EH) and the Welch Allyn EKG and Spirometry Monitoring system known as CardioPerfect.

## Instructions

Within EH a user navigates to a page in the patients chart or opens an order section in the encounter that is configured with MIE's layout for interfacing to CardioPerfect. The tab launches an ActiveX control that interfaces to CardioPerfect. If the patient is not registered in CardioPerfect, EH will create the patient. It will transfer/update:

* MR number (Which MR number is controlled by configuration in the layout)
* Name
* Address (Addr1, Addr2, City, State, Zip)
* DOB
* Most recent height
* Most recent weight

Then the end user is presented CardioPerfect to conduct the test. After the the user completes their session with the patient in CardioPerfect:

* If the FileLink program has been correctly configured, a TIFF image and XML file will now exist in the user-configured directory.
* EKG
    * The user chooses that TIFF image from the VidCap control.
    * The user clicks the "Get Interpretation" button to pull the automatically generated interpretation into a text area.
    * The user chooses Normal / Abnormal.
    * The user clicks the Upload button in EH to create a document from the TIFF and an observation from the interpretation. The normal/abnormal value is stored as the flag on the interpretation observation.
* Spirometry
    * The user chooses the TIFF image and the XML File
    * The user clicks the "Upload File" button

## EKG Model Numbers

A list of devices known to work with this interface:

* CP100/200
* CP20
* AT-2 Plus

## Technical Details

* CardioPerfect must be installed on the PC from which EKGs and PFTs will be recorded.
* FileLink must be installed and configured to write TIF and XML files when a new test is created.
    * FileLink program should be included with CardioPerfect software - if not already installed, install from disk
    * Set FileLinkPreferences:
        * Select Output Directory
        * Choose File format pattern (e.g. TESTTYPE, LASTNAME, DATE)
        * Delimiter
        * Date Format
        * File types:
            * Image Type = TIF
            * Check all boxes under Image and XML

                ![](./device-interface-welch-allyn-cardioperfect.assets/8ddbad35e0aa4f9ea75aa7354c83adc3.png)
* CardioPerfect runs MSSQL on the PC. Some implementations may be talking to a database remotely and multiple machines sharing the same DB.

## EH Setup

* See Layout (EKG Search) for details
* The PFT Tool has the CardioPerfect option installed by default

## Related Pages

For a list of all supported devices see the [Devices List](../../../resources/system-specifications/enterprise-health-interface-specifications.md)
