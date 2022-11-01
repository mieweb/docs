---
id: '1FwypV9LIggTF83AUXioRUfLhtpziIfE164wAE3T6uZk'
title: 'Lab Result CSV API'
date: '2020-02-27T21:28:38.594Z'
version: 31
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
  - 'https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Labimportsample2.csv'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Labimportsample3.csv'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Labimportsample4.csv'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Labimportsample5.csv'
  - 'gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
source: 'https://drive.google.com/open?id=1FwypV9LIggTF83AUXioRUfLhtpziIfE164wAE3T6uZk'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Lab Result CSV API'
    identifier: '1FwypV9LIggTF83AUXioRUfLhtpziIfE164wAE3T6uZk'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5180
---
This page outlines how lab result data is formatted for import using WebChart's Lab Result Data Import tool.
  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the XYZ API. Technical details are provided in the remaining sections.
  
### **Abstract**  
  
The Lab Results CSV API imports data related to lab data. CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](gdoc:1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk) page for a more detailed explanation of terminology.  
Lab results are stored in a chart as a document. A **document** in an EH system is used to record and store many forms data. HL7 messages send all of the information used to create a lab document. The common order segment (ORC) message with visit information (DOS) creates the document in the EH database. The observation request (OBR) message includes the order number and panel or test name to create the lab request. The observation segment (OBX) transmits the observed date, results, units, and range to create the observation. Revisions are stored as well as the date/time the results were received.  
All lab results are stored both as discrete data. Discrete data can be displayed in EH as a **flowsheet,**or collection of results.
  
![](../lab-result-csv-api.assets/1000020100000322000001AC025CE7499D138374.png)  

  
## **Specifications**  
  
The following detailed specifications are available for the Lab Result CSV API:
* [Lab Result CSV API specifications](https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0)
   * Note: The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.
   * [User instructions for importing data](#gjdgxs).
  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards) page.
  
## **Examples**  
  
The following examples are available in CSV format:
* 1 Lab with 1 result - [File:Labimportsample2.csv](https://miewiki.med-web.com/wiki/index.php/File:Labimportsample2.csv)
* 1 Lab with 2 results - [File:Labimportsample3.csv](https://miewiki.med-web.com/wiki/index.php/File:Labimportsample3.csv)
* 2 Labs with 2 results each - [File:Labimportsample4.csv](https://miewiki.med-web.com/wiki/index.php/File:Labimportsample4.csv)
* 3 Labs with 2 results each - [File:Labimportsample5.csv](https://miewiki.med-web.com/wiki/index.php/File:Labimportsample5.csv)
  
## **Related Pages**  

* [Data Import Master List](gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y)
