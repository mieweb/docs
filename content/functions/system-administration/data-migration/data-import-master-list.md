---
id: '12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
title: 'Data Import Master List'
date: '2020-02-27T21:30:54.076Z'
version: 116
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0'
  - 'chart-data-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0//Patient/Chart'
  - 'chart-relations-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit'
  - 'clinical-encounter-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pubhtml'
  - 'lost-time-import-tool.md'
  - 'https://docs.google.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit#gid=0'
  - 'audiometric-data-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit#gid=0'
  - 'pft-data-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0'
  - 'lab-result-csv-api.md'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?usp=sharing'
  - 'observation-import.md'
  - 'observation-codes-csv-api.md'
  - 'panel-membership-import-tool.md'
  - 'panel-status-import.md'
  - 'completed-orders-import-tool.md'
  - 'order-list-import-tool.md'
  - 'custom-documents-csv-api.md'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing'
  - 'summary-documents-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit'
  - 'injections-csv-api.md'
  - 'mie-file-import.md'
  - 'https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit#gid=0%7C'
  - 'pharmacy-filter-import.md'
  - 'appointments-import.md'
  - 'fee-schedule-import-tool.md'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Asset_template_(4).xlsx'
  - 'order-question-import-tool.md'
  - '../../../resources/system-specifications/interface-specifications.md'
  - 'data-migration-file-format-standard.md'
  - 'data-migration-overview.md'
  - 'system-conversion.md'
  - 'https://drive.google.com/open?id=10kV4HZbW7x3m4YigSKD_z-saFN4LsAy72Kj4f7P9LEI'
  - 'https://confluence.mieweb.com/display/DOCS10/Medgate+Conversion+Queries'
source: 'https://drive.google.com/open?id=12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Data Import Master List'
    identifier: '12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4960
---
This page provides an overview of the ways MIE imports data from a client's legacy EMR (i.e., spreadsheets, custom databases, and other sources) into the  {{% system-name %}} ( {{% sys-name %}} ) system. Most information is imported using CSV files and an application program interface (API).  
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.
  
### **Audience**  
  
The sections that follow should be presented to decision-makers or stakeholders interested in a general explanation of MIE's import tools. Technical details are provided in the individual pages linked in each section.
  
### **Abstract**  
  
The following sections represent different data types that may be imported into {{% sys-name %}} using MIE's different tools and APIs. This page provides a brief description of the data, example functionality in {{% sys-name %}} , and links to specifications and other details on each API.  
Standard features and {{% sys-name %}} product offerings are not discussed as part of this overview. Imports that require development include details on their respective pages.
  
## **Chart (Employee) Demographics**  
  
The Chart Data CSV API is used to import many types of chart data, from chart demographics to observations. It may also be used to set up relationships between charts. This API is used as part of MIE's standard Human Resource Interface, but it may also be used for single imports of new charts or updates to charts.
  
![](../data-import-master-list.assets/100002010000023800000259F562D6EEB3754323.png)  

Standard demographics display employee information such as name, DOB, gender, address, phone number, email address and employer information. Information in the HR import file is mapped to the appropriate demographic field. A history of revisions is stored indicating the date/time of the change.
  
![](../data-import-master-list.assets/100002010000030E000001A32703DBB434B5841D.png)  

Extended demographic fields are configurable based on customer requirements. Custom fields outside of what is listed in the HR import template are not included in the standard implementation. Customization requires a discovery call to scope and quote the work effort. Revisions are not stored on custom extended fields.
  
![](../data-import-master-list.assets/100002010000031D0000013EBF817E22AC2D2E20.png)  

Administrative demographic fields are in a separate table and store specific employment information such as supervisor information, cost center, job description, and work schedule. A history of revisions is stored indicating the date/time of the change.
  
![](../data-import-master-list.assets/1000020100000321000001094E094C6058E964D9.png)  

* [Demographic Import Specification: Patient/Chart Demographics](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0)
* [Chart Data CSV API](chart-data-csv-api.md)
  
### **Organizational Hierarchy**  
  
The organizational hierarchy displays in the employee demographics chart tab and is also used as a filter for reporting purposes. Mapping organizational hierarchies is not included in the standard implementation and would be scoped and quoted separately.
  
![](../data-import-master-list.assets/100002010000024900000098E3622CD17441B3D7.png)  

  
### **Chart-to-Chart Relationships**  
  
A chart can represent a person, organization, or other entity. Chart-to-chart relationships are used by the {{% system-name %}} systems to connect a patient (employee) to another patient, employee group (patient population), or non-employees. The relationship link works with security restrictions to determine who has access to view information on specific charts. Relationships display in the demographics chart tab.  
The Chart Relations CSV API imports various relationships between charts.
  
![](../data-import-master-list.assets/100002010000031B000000D81F4875BEBC1CD7D6.png)  

* [Administration Information Demographic Import Specification: Patient/Chart Administration Information](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0//Patient/Chart)
* [Chart Relations CSV API](chart-relations-csv-api.md)
  
## **Encounters / Incidents / Cases**  
  
An encounter documents a visit with a employee, and is also known as a patient visit. An encounter is a template of specific items to be addressed, in part or completely, during an appointment including the subjective, objective, assessment and plan. The encounter records information collected during an appointment, and stores it in the final desired format: a visit report document.  
All aspects of the visit are covered in the encounter, such as the history of present illness, case/incident information, past medical history, medications, allergies, review of systems, vitals, tests and procedures, physical exam, assessment, restrictions/accommodations, plan and follow up information.  
The Clinical Encounter CSV API imports data related to an employee's (patient's) condition.
  
![](../data-import-master-list.assets/10000201000002D100000259F0605EBC1E1806AF.png)  

Related documents are included or linked to an encounter.
  
![](../data-import-master-list.assets/10000201000003220000018940794F2E843C5335.png)  

  
![](../data-import-master-list.assets/100002010000031C0000006B4B3956F6D0C87E1E.png)  

* [CSV import specification](https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit)
* [Clinical Encounter CSV API](clinical-encounter-csv-api.md)
  
### **Restrictions and Accommodations**  
  
Encounters are used to document many types of employee visits, including workplace incidents and accommodations and restrictions.  
In an EH system, a restriction (clinical restriction) refers to an activity that an employee is not permitted to do after an injury (incident). An accommodation is a modification that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.  
The Lost Time CSV API is used to import information related to an employee's (patient's) condition, accommodation, and lost time.
  
![](../data-import-master-list.assets/100002010000031E000001AE5693B8B93C294EBB.png)  

* [CSV import specification](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pubhtml)
* [Lost Time CSV Import](lost-time-import-tool.md)
  
## **Discrete Chart Data**  
  
An observation in an MIE system is a means of storing repeated historic data, such as vital signs, lab results, measurements, and other discrete data. Any discrete data can be stored as an observation, but some is stored on other custom database tables, such as audiograms, demographics information, injections, medications, prescriptions, and allergies. The data in these other custom tables may also be stored as observations.
  
### **Audiometry**  
  
MIE systems store discrete data for occupational audiogram tests. Audio tests are linked to a chart through a document. Audiogram data contains a number of specific tests and baselines aggregated into a single document. Previous audiogram data can be aggregated to display graphically in a document.  
The Audiometric Data CSV API imports audiometric and related data for an employee (patient).
  
![](../data-import-master-list.assets/1000020100000322000001C1D2DABE204AEAACFD.png)  

Audiograms that are converted from other systems store the data discretely as an individual report document.
  
![](../data-import-master-list.assets/1000020100000322000000BBE6237EAB819A4B07.png)  

Audiogram questions are stored as observations in a flowsheet-like format ordered by date.
  
![](../data-import-master-list.assets/1000020100000322000000CDAB6716C4D8F2A025.png)  

* [CSV import specification](https://docs.google.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit#gid=0)
* [Audiometric Data CSV API](audiometric-data-csv-api.md)
  
### **Respirator Fit Test**  
  
EH maintains records of all respirator masks an employee has tested for use. The Respirator Fit Test Data CSV API imports data related to respirator fit testing.
  
![](../data-import-master-list.assets/10000201000003120000015767F17F7E789C65AA.png)  

* CSV import specification TBD
* Respirator Fit Test CSV API TBD
  
### **Spirometry (PFT)**  
  
Spirometry, or pulmonary function tests (PFT), are stored for individual employees. Additional information on the employee's height and weight is recorded to compare to predicted results. The comparison tool displays PFT information in a flowsheet format. The PFT Data CSV API imports data related to spirometry.
  
![](../data-import-master-list.assets/10000201000002580000025A06F244B30CF047CC.png)  

* [CSV import specification](https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit#gid=0)
* [PFT Data CSV API](pft-data-csv-api.md)
  
### **Lab Data**  
  
Lab results are stored in a chart as a document; a document may contain multiple lab results. HL7 messages send all of the information used to create a lab document. The common order segment (ORC) message with visit information (DOS) creates the document in the MIE system's database. The observation request (OBR) message includes the order number and panel or test name to create the lab request. The observation segment (OBX) transmits the observed date, results, units, and range to create the observation. Revisions are stored as well as the date/time the results were received. All lab results are stored both as discrete date (for trending and flowsheet purposes) and as a document. Abnormal results are highlighted in red.  
The Lab Results CSV API imports data related to lab data.
  
![](../data-import-master-list.assets/1000020100000322000001AC8C5B57E974089627.png)  

Converted lab results store as a document in a chart.
  
![](../data-import-master-list.assets/1000020100000322000000758A7B189A8ABFCBAD.png)  

The discrete lab results also display as a flowsheet.
  
![](../data-import-master-list.assets/100002010000032100000169D686916C11668935.png)  

* [Lab Results CSV Specification](https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0)
* [Lab Results CSV API](lab-result-csv-api.md)
  
### **Observations**  
  
An observation is a means of storing repeated historic data, such as vital signs, lab results, questionnaire responses, etc. for an employee. Vitals display in a flowsheet format. The Observations CSV API imports data related to observations.
  
![](../data-import-master-list.assets/1000020100000316000001AE95DFCB9C4C56E8AA.png)  

The vitals flowsheet displays in the Vitals chart tab and within the visit encounter.
  
![](../data-import-master-list.assets/100002010000031F00000051B2CD5BE1C115A22E.png)  

Lab results store as a discrete data and display in a flowsheet format and as a document in the chart.
  
![](../data-import-master-list.assets/100002010000031C000000E69A77CA434119F4B8.png)  

* [Chart Data CSV Import Specification: Observations](https://docs.google.com/a/mieweb.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?usp=sharing)
* [Observation Import](observation-import.md)
* [Observation Codes CSV API](observation-codes-csv-api.md)
  
### **Health Surveillance**  

  
#### **Panels**  
  
A panel defines a group of events or actions that will take place on certain profiles of people on a regular schedule in the Health Surveillance module of the MIE system. Panels are sometimes referred to as exposure groups, as panels are used for groups exposed to certain hazards due to their job roles. The panels table is also used to document regularly scheduled voluntary health screenings or checkups. A panel action refers to a procedure that is completed for an employee as part of a panel.  
The Configuration Tool has been developed to import panel data into EH.
  
![](../data-import-master-list.assets/100002010000023900000256A89B2C3416681992.png)  

There is a CSV import/export template that may be used to setup surveillance panels and actions, however it is primarily used to copy data from one MIE system to another.
  
![](../data-import-master-list.assets/100002010000032000000134E30907B9707FF1CD.png)  

There is an editor built into the MIE system to initially setup the panels and actions.
  
![](../data-import-master-list.assets/100002010000031E000001434459A2E78C73D317.png)  

* CSV import specification TBD
* Wiki page TBD
  
#### **Panel Membership**  
  
The Panel Member CSV API is used during initial setup to import employees to the appropriate surveillance panel.
  
![](../data-import-master-list.assets/100002010000031B0000016C99D2202722875C8F.png)  

There is an editor to automate business rules for which employees should be added or removed from panel membership. In addition, a system administrator may also manually include or exclude specific employees from the panels.
  
![](../data-import-master-list.assets/100002010000031C00000153470F7C091FB72E0C.png)  

* CSV import specification TBD
* [Panel Membership CSV API](panel-membership-import-tool.md)
  
#### **Panel Status**  
  
The Panel Status CSV API is used for panels that use the "Panel Expiration" method of triggering orders. This method has the advantages that the import of previous completed order records is not necessary for HSP to function, and that only employees with status records provided will have new orders triggered. This allows for a phased roll-out of HSP programs. It also allows for fine-grained control of initial due dates, rather than relying on the system to calculate them.
* [Panel Status CSV API](panel-status-import.md)
  
#### **Completed Orders**  
  
The last completed date is imported during the migration process using the Completed Orders CSV API to ensure that surveillance actions trigger with the appropriate due date.
  
![](../data-import-master-list.assets/10000201000003220000005D2A2ABDB1C85C8974.png)  

There is a column that displays the source of the information. If the order completion information comes from a legacy system it will display the name of that system (i.e. HAMT Import).
  
![](../data-import-master-list.assets/100002010000031E0000018F6A831A4E831D3042.png)  

During the migration process additional surveillance notification documentation may be imported as a document within the chart.
  
![](../data-import-master-list.assets/1000020100000322000001BB3EB43F7395AF784F.png)  

* CSV import specification TBD
* [Completed Orders CSV API](completed-orders-import-tool.md)
  
#### **Orders Compendium**  
  
An **order** is a term used loosely when any method is used to request tests, labs, radiology studies, or E-Orders. Each lab vendor has specific test codes that they use to result ordered tests. The Order List Compendium CSV API loads them as orderable items in EH.
  
![](../data-import-master-list.assets/100002010000031D00000166D005A961F68DBCBA.png)  

A standard orders compendium is included in the initial installation, however there is an editor for a system administrator to manually add/remove/edit orders and order pick lists within the MIE system.  
In addition, all orders for lab facilities can store the order code, CPT code, and LOINC code.
  
![](../data-import-master-list.assets/100002010000031F000001132A67A925D87202FB.png)  

* CSV import specification TBD
* [Order List Compendium CSV API](order-list-import-tool.md)
  
## **Non-Discrete Documents**  
  
Summary documents are generated in an MIE system to display non-discrete information on a chart.
  
### **Summary Documents Using WC Query**  
  
Text is stored as document during a data migration. A description of each type of document is stored in the document type name, which allows the MIE system to display the document under the appropriate chart tab in a chart. The Custom Documents CSV API imports a number of summary, non-discrete data as a document.
  
![](../data-import-master-list.assets/10000201000003270000010A55095F9377418593.png)  

  
![](../data-import-master-list.assets/1000020100000326000000937FCB0A33970BF9D4.png)  

  
![](../data-import-master-list.assets/100002010000031F000001148AF73EF4EA04E4A3.png)  

* CSV import specification TBD
* [Custom Documents CSV API](custom-documents-csv-api.md)
  
### **Summary Documents Creating HTML Files**  
  
Case information may be stored as a document in a static 2-column format, which displays the field label and the value side-by-side. The document type name is specific to the type of information displays in the document, which allows the document to display in the appropriate chart tab within a chart. The Summary Documents CSV API imports a number of summary, non-discrete data as a document.
  
![](../data-import-master-list.assets/100002010000030F00000134BAD923DC9AEC7F27.png)  

* [Summary Document Import CSV Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing)
* [Summary Documents CSV API](summary-documents-csv-api.md)
  
### **Questionnaires**  
  
Questionnaire data is grouped together by date of service in a document. The document type name is stored as a questionnaire so it will display within the appropriate chart tab in a chart. In addition, questionnaire data may be linked to the encounter for that date of service.
  
![](../data-import-master-list.assets/10000201000002D1000002575D34420EC1EB5B0B.png)  

* CSV import specification TBD
* Wiki page TBD
  
### **Immunizations**  
  
A number of external database tables are referenced to identify drugs for injections/immunizations and relate them to patients.
  
![](../data-import-master-list.assets/1000020100000325000001CD382E76DA58B94ABC.png)  

Injections data is stored as a document, and will display within the appropriate tab of a chart.
  
![](../data-import-master-list.assets/10000201000003210000012C3256B7B3B9BC77FD.png)  

In addition, injections display within the Injections flowsheet chart tab as discrete data.
  
![](../data-import-master-list.assets/10000201000003220000008BC33F2235F33F2350.png)  

* [CSV import specification](https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit)
* [Injections CSV API](injections-csv-api.md)
  
### **MIE File Import**  
  
The [File Import CSV API](mie-file-import.md) imports and stores a set of files (an archive) into EH as a document. A document is then associated with a chart. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual.  
Along with the files that are imported into the MIE File System, a discrete document record is created to associate the file with the correct chart in the MIE system. Although the content of the file is not stored as discrete data, the document record is stored discretely and features data such as the service date, enter date, service location, author, and document type (a way to group and classify documents in MIE's system).
* CSV import specification TBD
* Wiki page TBD
  
#### **Employee Photos**  
  
Employee photos are one example of files that may be imported with the File Import CSV API. Employee photos appear on the Summary and Demographics tabs in the employee's chart.
  
![](../data-import-master-list.assets/100002010000030D0000016E046442D02DAF8B1E.png)  

  
#### **Scanned Documents**  
  
Scanned documents are another example of files that may be imported with the File Import CSV API. PDF or TIF formatted files may be imported into the MIE system during the data migration process. As with every file import, each file has a header file to indicate the employee MR number, date of service and document type name these documents will display in the appropriate chart tab in the employee's medical record. Documents that are not indexed may be imported into the WebScan module to allow a user to manually index those fields before uploading the images to the medical record.
  
![](../data-import-master-list.assets/100002010000030F0000011C0D3DDFA991863DDD.png)  

  
#### **ECG Flowsheet and Reports**  
  
Historical ECG data is imported as a document.
  
![](../data-import-master-list.assets/1000020100000312000001746D9D27003753EF23.png)  

Specific discrete data fields may also be viewed in a flowsheet format.
  
![](../data-import-master-list.assets/100002010000032000000139BAF6D1A8FB55E113.png)  

* [MIE File Import](mie-file-import.md)
* [MIE CSV File Import](https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit#gid=0%7C)
  
## **Other Flowsheets and Reports**  

  
#### **Vision Flowsheet and Reports**  
  
The vision flowsheet displays specific discrete data in order by date of service.
  
![](../data-import-master-list.assets/100002010000031F00000160F1F1DD3DAFBEF629.png)  

Historical vision data is imported as a document in a chart.
  
![](../data-import-master-list.assets/10000201000003220000019FC5522FE896741FAD.png)  

  
#### **X-ray Flowsheet and Reports**  
  
Historical x-ray reports are imported as a document. Specific discrete data fields may also be viewed in a flowsheet format. In addition, the MIE system has the ability to store digital radiology (DICOM) images.
  
![](../data-import-master-list.assets/100002010000031C000001CB1F027519B95D2DBD.png)  

  
## **Discrete System Data**  

  
### **Pharmacy Filter**  
  
The pharmacy import template allows for a batch upload to the inventory module. Items are matched by Name, Strength and Lot # to determine if an existing item should be updated or a new item added to the MIE system.
  
![](../data-import-master-list.assets/100002010000031E0000015510703F74F9C6F002.png)  

* CSV import specification TBD
* [Pharmacy Filter Import](pharmacy-filter-import.md)
  
### **Schedules**  
  
There is an editor in the MIE system to manually add/edit schedules, appointment types and cancellation codes. The schedules may also be copied to a new entry. If appointments are uniquely identified during the data migration they will be stored in the appointment history in the chart. The Appointments CSV API imports data related to appointments and schedules.
  
![](../data-import-master-list.assets/100002010000031D00000175E03D49E43AB636C5.png)  

* CSV import specification TBD
* [Appointments CSV API](appointments-import.md)
  
### **Fee Schedules**  
  
Fee schedule information may be imported from a template. There is an editor within the MIE system to add/edit/remove CPT codes, descriptions and fee schedule information.
  
![](../data-import-master-list.assets/100002010000031C0000011C006D4667B2516AC3.png)  

* CSV import specification TBD
* [Fee Schedule CSV API](fee-schedule-import-tool.md)
  
### **Assets**  
  
The Asset Management module includes the ability to import asset details via an Assets CSV API. The CSV defines each field and allows the ability to leave columns blank if the data is not available. This can be populated by the client and imported directly into their systems. All columns must remain in place with the header row in place.
  
![](../data-import-master-list.assets/100002010000031C000001CB134867B282329EDC.png)  

* [File:Asset template (4).xlsx](https://miewiki.med-web.com/wiki/index.php/File:Asset_template_(4).xlsx)
* Wiki page TBD
  
### **Order Questions**  
  
Orders questions may be added using a template. There is also an editor within the MIE system to create orders questions.
  
![](../data-import-master-list.assets/100002010000031E000001235CB3CFB9E7FED43F.png)  

* CSV import specification TBD
* [Order Question CSV API](order-question-import-tool.md)
  
## **Related Pages**  

* [Interface Specifications](../../../resources/system-specifications/interface-specifications.md)
* [Data Migration File Format Standard](data-migration-file-format-standard.md)
* [Data Migration Overview](data-migration-overview.md)
* [MIE File Import](mie-file-import.md)
* [System Conversion](system-conversion.md)
* [Human Resources Interface](https://drive.google.com/open?id=10kV4HZbW7x3m4YigSKD_z-saFN4LsAy72Kj4f7P9LEI)
* [Medgate Conversion Queries](https://confluence.mieweb.com/display/DOCS10/Medgate+Conversion+Queries)
