---
id: '1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0'
title: 'Device Interface - Benson Audiometer'
date: '2020-05-11T12:19:36.982Z'
version: 66
mimeType: 'text/x-markdown'
links:
  - '../../../resources/system-specifications/interface-specifications.md'
  - 'https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ'
source: 'https://drive.google.com/open?id=1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0'
wikigdrive: '157919b64f9a467c6d0b4a7a3b2d494ae2131526'
menu:
  main:
    name: 'Device Interface - Benson Audiometer'
    identifier: '1BmGYx7kkuGX3mmqqS0Qp_3H7jy1TdfSMNWfl1qn51s0'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5440
---
This page provides instructions for retrieving results from the Benson software with {{% system-name %}} , and lists the fields that the interface retrieves.
  
## **Instructions**  
  
To begin retrieving results from the audiometer, first perform the test instructed in the device's operation manual.
  
### **Batch Mode**  
  
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
   1. If a patient is incorrect or not found, click the pencil icon (?) and choose the correct patient.
   2. If some tests should not be uploaded uncheck the checkbox to the left of the patient.
   3. Click the information icon (?) to see all the details of a test.
   4. If no tests should be uploaded, close the new window; nothing is saved.
  
## **Collected Fields**  
  
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
  
## **Installation Help**  
  
To correctly install and use the audiometer with {{% system-name %}} the following considerations are important to note:
* The interface uses files exported from the Benson audio software
* To get the correct export format a configuration file must be imported into the Benson software
   * Please talk to an implementer to get the configuration file
   * Use "Merge" file option in the Plus Package software
* The import menu is not installed on a default system, it must be added from the menu editor in the Control Panel.
   * To select the options that appear in the dropdown of the import page, add "?f=wc_import&s=edit" to the URL and select the desired options.
* System setting "Save results automatically" should be set to "0"
  
## **Related Pages**  
  
[Devices List](../../../resources/system-specifications/interface-specifications.md)
  
### Configuration File  

* File: [Stxextract](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)[ ](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)[mie.mdb](https://drive.google.com/open?id=1Z0D9BXADNDIrYOJslQLAvLAz-WwvvDkJ)
