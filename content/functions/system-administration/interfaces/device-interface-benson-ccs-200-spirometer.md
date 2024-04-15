---
id: '1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw'
title: 'Device Interface - Benson CCS-200 Spirometer'
date: '2020-03-18T14:49:40.210Z'
version: 65
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
This page provides instructions for interfacing the Benson CCS-220 Spirometer with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable.

{{% note %}}
Be sure to install the required applications for optimal functionality. The device interface must use the Benson spirometer software for testing and uses the **VidCap Active X Control** to communicate with {{% system-name %}}. The VidCap Active X Control will need installed on EACH workstation.
{{% /note %}}

## Collected Data Fields

The following data fields are collected in
![](../device-interface-benson-ccs-200-spirometer.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)
using Benson CCS-200:

* Patient MRN
* Test Date/Time
* FVC
* FEV1
* FEV1/FVC
* PEF
* FEF 25%-75%
* Interpretation
* Calibration Date and Result
* Test Temperature
* Test Humidity
* Curve information to reproduce graph

## Using the Device Interface

From the encounter, the Spirometry/PFT can be added to the exam using the Tests & Procedures section. If the chart is due for the procedure, it can be added from the Due List. Otherwise, users may use the In House Testing Pick List or autocomplete to manually add the procedure, as needed.

1. Using the In House Testing icon or autocomplete, select <strong>Spirometry/PFT</strong> to add to the exam.

![](../device-interface-benson-ccs-200-spirometer.assets/5faca738ff0c4c3ef683f54a9a0920ad.png)

2. After adding the procedure to the exam, open the Spirometry/PFT section by clicking the header, and select the appropriate device (i.e., CCS-200) from the <strong>File Type</strong> dropdown.

![](../device-interface-benson-ccs-200-spirometer.assets/55935597082d547d8b6b54857e9bb7da.png)

{{% note %}}  
Perform testing with the Benson Software as instructed in the device's operation manual, and save the test and export the results:

* Choose the File menu and export.
* Select "ATS-ERS 2005 standard format" in the Format dropdown.  
    ![](../device-interface-benson-ccs-200-spirometer.assets/60f918983155be183ce17b7c6ea54027.png)
* Select the correct location to save the file.
* Click OK.

{{% /note %}}

3. To import the spirometry/PFT results, click the <strong>Load From Device</strong> button.

    ![](../device-interface-benson-ccs-200-spirometer.assets/dda14acc97e4e778f9209f1b90689433.png)
4. When loading test data, be sure to select the <strong>Reason for Test</strong> using the dropdown.

![](../device-interface-benson-ccs-200-spirometer.assets/cc2aa9568eae174a7543770ab9bae7b0.png)

5. After clicking the Load From Device button, the <strong>Load Data</strong> section will appear. Select the ATS/ERS formatted file.

![](../device-interface-benson-ccs-200-spirometer.assets/cf93e11584bb4e3e486d93da3032fc81.png)

{{% note %}}
If the file does not appear in the Load Data section, right-click in the Load Data box and select **Source: SmartCard** from the context menu, if it is not already selected. If necessary, right-click again and select **Set SmartCard Folder...**. Set the folder to the same output directory.

![](../device-interface-benson-ccs-200-spirometer.assets/d086ddb8043a99d284deef54638ea7a1.png)
{{% /note %}}

6. Before uploading the file, add any pertinent information using the Comments and Interpretation fields.

![](../device-interface-benson-ccs-200-spirometer.assets/7cf1e42ade44ce15337c0910dabb1cb3.png)

7. Click the <strong>Upload File</strong> button.
8. The results will populate the section.

![](../device-interface-benson-ccs-200-spirometer.assets/8304e99670b8897cfbd11fa2dd1b0b97.png)

{{% note %}}
Mark the test as **Completed**, before continuing to work in the encounter or clicking the Next button.
{{% /note %}}

9. Scroll to the top of the expanded spirometry/PFT encounter section and select <strong>Completed</strong> by placing a check mark in the box.

![](../device-interface-benson-ccs-200-spirometer.assets/5ff07d41497f6a0bb25ed84e645cb1b8.png)

10. Click the header or <strong>Next</strong> button to collapse the section and continue working in the encounter, as needed.
