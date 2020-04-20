---
title: "Device Interface - Benson CCS-200 Spirometer"
date: 2020-03-18T14:49:40.210Z
url: "general-functionality/system-administration/interfaces/device-interface-benson-ccs-200-spirometer.html"
author: Jeremia Ploor
version: 35
id: 1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw
source: https://drive.google.com/open?id=1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw
---
This page provides instructions for interfacing the Benson CCS-220 Spirometer with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable. 



{{% note %}} Be sure to install the required applications for optimal functionality. The device interface must use the Benson spirometer software for testing and uses the **VidCap Active X Control** to communicate with {{% system-name %}}. The VidCap Active X Control will need installed on EACH workstation. {{% /note %}}


## Collected Data Fields

The following data fields are collected inusing Benson CCS-200:

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

![](../../../external_files/94057fda1406dc3d60d51b7efd349107.png)

2. After adding the procedure to the exam, open the Spirometry/PFT section by clicking the header, and select the appropriate device (i.e., CCS-200) from the <strong>File Type</strong> dropdown.

![](../../../external_files/2c464cae92aaf06e11bd7ee360815fac.png)

{{% note %}} Perform testing with the Benson Software as instructed in the device's operation manual, and save the test and export the results:

* Choose the File menu and export.
* Select "ATS-ERS 2005 standard format" in the Format dropdown. ![](../../../external_files/8144b61746a577cd9f64a244f91d1fef.png)
* Select the correct location to save the file.
* Click OK.

{{% /note %}}


3. To import the spirometry/PFT results, click the <strong>Load From Device</strong> button.  ![](../../../external_files/815a09a55d15814425c4a577400444c4.png) 
4. When loading test data, be sure to select the <strong>Reason for Test</strong> using the dropdown.

![](../../../external_files/71d9f35d60f0905f05f2bb5b566a98b3.png)

5. After clicking the Load From Device button, the <strong>Load Data</strong> section will appear. Select the ATS/ERS formatted file. 

![](../../../external_files/0e31cfa359788d5dfc3fda9da5f18287.png)

{{% note %}} If the file does not appear in the Load Data section, right-click in the Load Data box and select **Source: SmartCard** from the context menu, if it is not already selected. If necessary, right-click again and select **Set SmartCard Folder...**. Set the folder to the same output directory.

![](../../../external_files/a2253b3e0da71694b122ab58d769e452.png) {{% /note %}}


6. Before uploading the file, add any pertinent information using the Comments and Interpretation fields.

![](../../../external_files/72208cf4b8892f2fedf1ec7b94da9232.png)

7. Click the <strong>Upload File</strong> button.
8. The results will populate the section.

![](../../../external_files/95ae53c2084606309c787187aa652fb9.png)



{{% note %}} Mark the test as **Completed**, before continuing to work in the encounter or clicking the Next button. {{% /note %}}


9. Scroll to the top of the expanded spirometry/PFT encounter section and select <strong>Completed</strong> by placing a check mark in the box.

![](../../../external_files/3a6daf7451a2e6943a15090e41d28dc1.png)

10. Click the header or <strong>Next</strong> button to collapse the section and continue working in the encounter, as needed.



