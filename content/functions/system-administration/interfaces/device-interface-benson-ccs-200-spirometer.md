---
title: "Device Interface - Benson CCS-200 Spirometer"
date: "2020-03-18T14:49:40.210Z"
url: "functions/system-administration/interfaces/device-interface-benson-ccs-200-spirometer.html"
version: 41
id: "1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw"
source: "https://drive.google.com/open?id=1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw"
---
This page provides instructions for interfacing the Benson CCS-220 Spirometer with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable. 



{{% note %}} Be sure to install the required applications for optimal functionality. The device interface must use the Benson spirometer software for testing and uses the **VidCap Active X Control** to communicate with {{% system-name %}}. The VidCap Active X Control will need installed on EACH workstation. {{% /note %}}


## Collected Data Fields

The following data fields are collected in![](device-interface-benson-ccs-200-spirometer.images/image1.png)using Benson CCS-200:

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

![](device-interface-benson-ccs-200-spirometer.images/image2.png)

2. After adding the procedure to the exam, open the Spirometry/PFT section by clicking the header, and select the appropriate device (i.e., CCS-200) from the <strong>File Type</strong> dropdown.

![](device-interface-benson-ccs-200-spirometer.images/image3.png)

{{% note %}} Perform testing with the Benson Software as instructed in the device's operation manual, and save the test and export the results:

* Choose the File menu and export.
* Select "ATS-ERS 2005 standard format" in the Format dropdown. ![](device-interface-benson-ccs-200-spirometer.images/image4.png)
* Select the correct location to save the file.
* Click OK.

{{% /note %}}


3. To import the spirometry/PFT results, click the <strong>Load From Device</strong> button.  ![](device-interface-benson-ccs-200-spirometer.images/image5.png) 
4. When loading test data, be sure to select the <strong>Reason for Test</strong> using the dropdown.

![](device-interface-benson-ccs-200-spirometer.images/image6.png)

5. After clicking the Load From Device button, the <strong>Load Data</strong> section will appear. Select the ATS/ERS formatted file. 

![](device-interface-benson-ccs-200-spirometer.images/image7.png)

{{% note %}} If the file does not appear in the Load Data section, right-click in the Load Data box and select **Source: SmartCard** from the context menu, if it is not already selected. If necessary, right-click again and select **Set SmartCard Folder...**. Set the folder to the same output directory.

![](device-interface-benson-ccs-200-spirometer.images/image8.png) {{% /note %}}


6. Before uploading the file, add any pertinent information using the Comments and Interpretation fields.

![](device-interface-benson-ccs-200-spirometer.images/image9.png)

7. Click the <strong>Upload File</strong> button.
8. The results will populate the section.

![](device-interface-benson-ccs-200-spirometer.images/image10.png)



{{% note %}} Mark the test as **Completed**, before continuing to work in the encounter or clicking the Next button. {{% /note %}}


9. Scroll to the top of the expanded spirometry/PFT encounter section and select <strong>Completed</strong> by placing a check mark in the box.

![](https://lh3.googleusercontent.com/rKeoJc2K5ZhgOrRyaCyQue7hHLYNrkQyiCnNno-Zuj8mCQwx90G-nlC3gi6Z0OXVP7G3TO2UDDd7dSP-IJf1Dgzgba_kBJr5bfCFwm7e7F813V_ze8nBiehvsbknAELsXcs4wPOSy24eBqH8TQ)

10. Click the header or <strong>Next</strong> button to collapse the section and continue working in the encounter, as needed.



