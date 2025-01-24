---
id: '1FwypV9LIggTF83AUXioRUfLhtpziIfE164wAE3T6uZk'
title: 'Lab Result CSV API'
date: '2024-12-18T14:11:10.522Z'
version: 43
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-standards/'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1FwypV9LIggTF83AUXioRUfLhtpziIfE164wAE3T6uZk'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
This page outlines how lab result data is formatted for import using WebChart's Lab Result Data Import tool.

### Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the XYZ API. Technical details are provided in the remaining sections.

### Abstract

The Lab Results CSV API imports data related to lab data. CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.

Lab results are stored in a chart as a document. A **document** in an EH system is used to record and store many forms data. HL7 messages send all of the information used to create a lab document. The common order segment (ORC) message with visit information (DOS) creates the document in the EH database. The observation request (OBR) message includes the order number and panel or test name to create the lab request. The observation segment (OBX) transmits the observed date, results, units, and range to create the observation. Revisions are stored as well as the date/time the results were received.

All lab results are stored both as discrete data. Discrete data can be displayed in EH as a **flowsheet,**or collection of results.

![](../lab-result-csv-api.assets/a227f45c633d223b420da98d1e1a7948.png)

## Specifications

The following detailed specifications are available for the Lab Result CSV API:

* [Lab Result CSV API specifications](https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0)
    * Note: The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-standards/) page.

## Related Pages

* [Data Import Master List](data-import-master-list.md)
