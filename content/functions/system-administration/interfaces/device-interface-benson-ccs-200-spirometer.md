---
id: '1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw'
title: 'Device Interface - Benson CCS-200 Spirometer'
date: '2020-03-18T14:49:40.210Z'
version: 56
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1K1Aoetbj6JumsN1BuVOxb2FKlGmngXOeBSE3UHaVuTw'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
---
This page provides instructions for interfacing the Benson CCS-220 Spirometer with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable.   
{{% note %}}  
Be sure to install the required applications for optimal functionality. The device interface must use the Benson spirometer software for testing and uses the **VidCap Active X Control** to communicate with {{% system-name %}}. The VidCap Active X Control will need installed on EACH workstation.  
{{% /note %}}
  
## Collected Data Fields  

  
The following data fields are collected in![](../device-interface-benson-ccs-200-spirometer.assets/1000020100000001000000014C77D75F6DC67A52.png)  
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
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000002CE000001A60EAFD2F17959D998.png)  

2. After adding the procedure to the exam, open the Spirometry/PFT section by clicking the header, and select the appropriate device (i.e., CCS-200) from the <strong>File Type</strong> dropdown.
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000002CE000000A6A63619E4B7D34DB9.png)  

{{% note %}}  
Perform testing with the Benson Software as instructed in the device's operation manual, and save the test and export the results:
* Choose the File menu and export.
* Select "ATS-ERS 2005 standard format" in the Format dropdown.
  <img src="../device-interface-benson-ccs-200-spirometer.assets/10000201000001D2000000DEF6A3E3759A888C7D.png" />  

* Select the correct location to save the file.
* Click OK.
{{% /note %}}
1. To import the spirometry/PFT results, click the <strong>Load From Device</strong> button.

   <img src="../device-interface-benson-ccs-200-spirometer.assets/10000201000002CE0000011FB6AD8406196B78CC.png" />

2. When loading test data, be sure to select the <strong>Reason for Test</strong> using the dropdown.
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000002CD00000105A79809A3EFC53D4A.png)  

3. After clicking the Load From Device button, the <strong>Load Data</strong> section will appear. Select the ATS/ERS formatted file. 
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000002CC00000149B3952D8AAAFAA0BB.png)  

{{% note %}}  
If the file does not appear in the Load Data section, right-click in the Load Data box and select **Source: SmartCard** from the context menu, if it is not already selected. If necessary, right-click again and select **Set SmartCard Folder...**. Set the folder to the same output directory.
  
![](../device-interface-benson-ccs-200-spirometer.assets/100002010000023500000142ECD67BFED325D337.png)  
{{% /note %}}
4. Before uploading the file, add any pertinent information using the Comments and Interpretation fields.
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000001FE0000011DAF9AC161887FAF94.png)  

5. Click the <strong>Upload File</strong> button.
6. The results will populate the section.
  
![](../device-interface-benson-ccs-200-spirometer.assets/100002010000024A000000C238FAA8745D214043.png)  

{{% note %}}  
Mark the test as **Completed**, before continuing to work in the encounter or clicking the Next button.  
{{% /note %}}
7. Scroll to the top of the expanded spirometry/PFT encounter section and select <strong>Completed</strong> by placing a check mark in the box.
  
![](../device-interface-benson-ccs-200-spirometer.assets/10000201000002CF000000E932202CDDE94707DB.png)  

8. Click the header or <strong>Next</strong> button to collapse the section and continue working in the encounter, as needed.

