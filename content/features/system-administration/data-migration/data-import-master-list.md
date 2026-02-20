---
id: '12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
title: 'Data Import Master List'
date: '2026-01-06T15:24:45.838Z'
version: 387
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-overview/'
  - 'https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/chart-data-csv-api/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/chart-relations-csv-api/'
  - 'https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/clinical-encounter-csv-api/'
  - 'https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pubhtml'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/lost-time-import-tool/'
  - 'https://docs.google.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/audiometric-data-csv-api/'
  - 'https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/pft-data-csv-api/'
  - 'https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/lab-result-csv-api/'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?usp=sharing'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/observation-import/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/observation-codes-csv-api/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/create-health-surveillance-file-for-import/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/panel-membership-import-tool/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/panel-status-import/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/completed-orders-import-tool/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/order-list-import-tool/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/custom-documents-csv-api/'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing'
  - 'summary-documents-csv-api.md'
  - 'https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/injections-csv-api/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/'
  - 'https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/pharmacy-filter-import/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/appointments-import/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/fee-schedule-import-tool/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/order-question-import-tool/'
  - 'https://docs.enterprisehealth.com/resources/system-specifications/enterprise-health-interface-specifications/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-migration-file-format-standard/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-migration-overview/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/system-conversion/'
  - 'https://drive.google.com/open?id=10kV4HZbW7x3m4YigSKD_z-saFN4LsAy72Kj4f7P9LEI'
  - 'https://mie.talentlms.com/shared/start/key:ZOBDNHRK'
source: 'https://drive.google.com/open?id=12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
wikigdrive: 'v2.16.0'
---
This page provides an overview of the ways MIE imports data from a client's legacy EMR (i.e., spreadsheets, custom databases, and other sources) into the  {{% system-name %}} ( {{% sys-name %}} ) system. Most information is imported using CSV files and an application program interface (API).

CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-overview/) page for a more detailed explanation of terminology.

## Audience

The sections that follow should be presented to decision-makers or stakeholders interested in a general explanation of MIE's import tools. Technical details are provided in the individual pages linked in each section.

## Abstract

The following sections represent different data types that may be imported into {{% sys-name %}} using MIE's different tools and APIs. This page provides a brief description of the data, example functionality in {{% sys-name %}} , and links to specifications and other details on each API.

Standard features and {{% sys-name %}} product offerings are not discussed as part of this overview. Imports that require development include details on their respective pages.

## Chart (Employee) Demographics

The Chart Data CSV API is used to import many types of chart data, from chart demographics to observations. It may also be used to set up relationships between charts. This API is used as part of MIE's standard Human Resource Interface, but it may also be used for single imports of new charts or updates to charts.

![](./data-import-master-list.assets/83a1a8f52dff0067289b8c9d5a536f05.png)

Standard demographics display employee information such as name, DOB, gender, address, phone number, email address and employer information. Information in the HR import file is mapped to the appropriate demographic field. A history of revisions is stored indicating the date/time of the change.

![](./data-import-master-list.assets/3631dd011bbd1c82be8cf77b155ebc77.png)

Extended demographic fields are configurable based on customer requirements. Custom fields outside of what is listed in the HR import template are not included in the standard implementation. Customization requires a discovery call to scope and quote the work effort. Revisions are not stored on custom extended fields.

![](./data-import-master-list.assets/ff50b94b05c26180bca09c144818a6dc.png)

Administrative demographic fields are in a separate table and store specific employment information such as supervisor information, cost center, job description, and work schedule. A history of revisions is stored indicating the date/time of the change. This is available from the Patient Revisions hyperlink.

* [Demographic Import Specification: Patient/Chart Demographics](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0)
* [Chart Data CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/chart-data-csv-api/)

### Organizational Hierarchy

The organizational hierarchy displays in the employee demographics chart tab and is also used as a filter for reporting purposes. Mapping organizational hierarchies is not included in the standard implementation and would be scoped and quoted separately.

![](./data-import-master-list.assets/e23a9d91721500df0a7aae437c9e8643.png)

### Chart-to-Chart Relationships

A chart can represent a person, organization, or other entity. Chart-to-chart relationships are used by the {{% system-name %}} systems to connect a patient (employee) to another patient, employee group (patient population), or non-employees. The relationship link works with security restrictions to determine who has access to view information on specific charts. Relationships display in the demographics chart tab.

The Chart Relations CSV API imports various relationships between charts.

![](./data-import-master-list.assets/5a4227da010e3da8a226e66367021eba.png)

* [Administration Information Demographic Import Specification: Patient/Chart Administration Information](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit#gid=0//Patient/Chart)
* [Chart Relations CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/chart-relations-csv-api/)

## Encounters / Incidents / Cases

An encounter documents a visit with an employee, and is also known as a patient visit. An encounter is a template of specific items to be addressed, in part or completely, during an appointment including the subjective, objective, assessment and plan. The encounter records information collected during an appointment, and stores it in the final desired format: a visit report document.

All aspects of the visit are covered in the encounter, such as the history of present illness, case/incident information, past medical history, medications, allergies, review of systems, vitals, tests and procedures, physical exam, assessment, restrictions/accommodations, plan and follow up information.

The Clinical Encounter CSV API imports data related to an employee's (patient's) condition.

Related documents are included or linked to an encounter.

![](./data-import-master-list.assets/0590b822a9099d1c60d040aba7c7beb0.png)

![](./data-import-master-list.assets/c09c55744f1125c57c5b885eaed8a11f.png)

* [CSV import specification](https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit)
* [Clinical Encounter CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/clinical-encounter-csv-api/)

### Restrictions and Accommodations

Encounters are used to document many types of employee visits, including workplace incidents and accommodations and restrictions.

In an EH system, a restriction (clinical restriction) refers to an activity that an employee is not permitted to do after an injury (incident). An accommodation is a modification that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.

The Lost Time CSV API is used to import information related to an employee's (patient's) condition, accommodation, and lost time.

![](./data-import-master-list.assets/3562fd048dc2657bdfec016951b0c3e1.png)

* [CSV import specification](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pubhtml)
* [Lost Time CSV Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/lost-time-import-tool/)

## Discrete Chart Data

An observation in an MIE system is a means of storing repeated historic data, such as vital signs, lab results, measurements, and other discrete data. Any discrete data can be stored as an observation, but some is stored on other custom database tables, such as audiograms, demographics information, injections, medications, prescriptions, and allergies. The data in these other custom tables may also be stored as observations.

### Audiometry

MIE systems store discrete data for occupational audiogram tests. Audio tests are linked to a chart through a document. Audiogram data contains a number of specific tests and baselines aggregated into a single document. Previous audiogram data can be aggregated to display graphically in a document.

The Audiometric Data CSV API imports audiometric and related data for an employee (patient).

![](./data-import-master-list.assets/688496dbce707c3f9526b70dfcb4d789.png)

Audiograms that are converted from other systems store the data discretely as an individual report document.

![](./data-import-master-list.assets/d0c6610009b518b1df9ad1e6c0230381.png)

Audiogram questions are stored as observations in a flowsheet-like format ordered by date.

![](./data-import-master-list.assets/f05fa23c001a00651671fa4fece41915.png)

* [CSV import specification](https://docs.google.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit#gid=0)
* [Audiometric Data CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/audiometric-data-csv-api/)

### Respirator Fit Test

EH maintains records of all respirator masks an employee has tested for use. The Respirator Fit Test Data CSV API imports data related to respirator fit testing.

![](./data-import-master-list.assets/506e88fbf24399f8b39daa65bb1304e3.png)

* CSV import specification TBD
* Respirator Fit Test CSV API TBD

### Spirometry (PFT)

Spirometry, or pulmonary function tests (PFT), are stored for individual employees. Additional information on the employee's height and weight is recorded to compare to predicted results. The comparison tool displays PFT information in a flowsheet format. The PFT Data CSV API imports data related to spirometry.

![](./data-import-master-list.assets/11d3e55d4e2b874711802b28724e91ed.png)

![](./data-import-master-list.assets/412db3c94bcf6905a894709eb4846315.png)

* [CSV import specification](https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit#gid=0)
* [PFT Data CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/pft-data-csv-api/)

### Lab Data

Lab results are stored in a chart as a document; a document may contain multiple lab results. HL7 messages send all of the information used to create a lab document. The common order segment (ORC) message with visit information (DOS) creates the document in the MIE system's database. The observation request (OBR) message includes the order number and panel or test name to create the lab request. The observation segment (OBX) transmits the observed date, results, units, and range to create the observation. Revisions are stored as well as the date/time the results were received. All lab results are stored both as discrete date (for trending and flowsheet purposes) and as a document. Abnormal results are highlighted in red.

The Lab Results CSV API imports data related to lab data.

![](./data-import-master-list.assets/179352f7931eee9627c1f98a8b692119.png)

Converted lab results store as a document in a chart.

![](./data-import-master-list.assets/b393b8e190ed42e0a4adafb2a9f9302c.png)

The discrete lab results also display as a flowsheet.

![](./data-import-master-list.assets/fba7ffe759c5ecf5a2f97c03180f0a03.png)

* [Lab Results CSV Specification](https://docs.google.com/spreadsheets/d/1kNHc7LYv6ee2Xe0gFsGcMpjgrVnuWljTWp5qX7PNGK4/edit#gid=0)
* [Lab Results CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/lab-result-csv-api/)

### Observations

An observation is a means of storing repeated historic data, such as vital signs, lab results, questionnaire responses, etc. for an employee. Vitals display in a flowsheet format. The Observations CSV API imports data related to observations.

![](./data-import-master-list.assets/b0d272fc6de9b0abab0b01422af1bd8a.png)

The vitals flowsheet displays in the Vitals chart tab and within the visit encounter.

![](./data-import-master-list.assets/895ff2b30802ff04a13a62417721f361.png)

Lab results store as a discrete data and display in a flowsheet format and as a document in the chart.

![](./data-import-master-list.assets/fd15b4c1b5ea88d5e786c03ca704ef64.png)

* [Chart Data CSV Import Specification: Observations](https://docs.google.com/a/mieweb.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?usp=sharing)
* [Observation Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/observation-import/)
* [Observation Codes CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/observation-codes-csv-api/)

### Health Surveillance

#### Panels

A panel defines a group of events or actions that will take place on certain profiles of people on a regular schedule in the Health Surveillance module of the MIE system. Panels are sometimes referred to as exposure groups, as panels are used for groups exposed to certain hazards due to their job roles. The panels table is also used to document regularly scheduled voluntary health screenings or checkups. A panel action refers to a procedure that is completed for an employee as part of a panel.

The Configuration Tool has been developed to import panel data into EH.

![](./data-import-master-list.assets/2c677bdfd65d76da4bf5d7dc198cf7a3.png)

There is a CSV import/export template that may be used to set up surveillance panels and actions, however it is primarily used to copy data from one MIE system to another.

![](./data-import-master-list.assets/bb891ec06df0275b64b398d7ef7e9eea.png)

There is an editor built into the MIE system to initially set up the panels and actions.

![](./data-import-master-list.assets/0f0e9ad2dd60d66d483e8713dc4f7f19.png)

* [Health Surveillance File Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/create-health-surveillance-file-for-import/)

#### Panel Membership

The Panel Member CSV API is used during initial setup to import employees to the appropriate surveillance panel.

![](./data-import-master-list.assets/a2714242459567fa405df08bf4999dee.png)

There is an editor to automate business rules for which employees should be added or removed from panel membership. In addition, a system administrator may also manually include or exclude specific employees from the panels.

![](./data-import-master-list.assets/1e1d33eecea22337faf7b89c74c6f3c6.png)

* [Panel Membership Import Tool](https://docs.enterprisehealth.com/functions/system-administration/data-migration/panel-membership-import-tool/)

#### Panel Status

The Panel Status CSV API is used for panels that use the "Panel Expiration" method of triggering orders. This method has the advantages that the import of previous completed order records is not necessary for HSP to function, and that only employees with status records provided will have new orders triggered. This allows for a phased roll-out of HSP programs. It also allows for fine-grained control of initial due dates, rather than relying on the system to calculate them.

* [Panel Status Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/panel-status-import/)

#### Completed Orders

The last completed date is imported during the migration process using the Completed Orders CSV API to ensure that surveillance actions trigger with the appropriate due date.

![](./data-import-master-list.assets/32bf21abf09594b20bb2ac798aec6940.png)

There is a column that displays the source of the information. If the order completion information comes from a legacy system it will display the name of that system (i.e. HAMT Import).

![](./data-import-master-list.assets/408b5c6eac092eda00d43ce9b39e22be.png)

During the migration process additional surveillance notification documentation may be imported as a document within the chart.

![](./data-import-master-list.assets/15879f29e60c6b60f86525fa9bb2311b.png)

* [Completed Orders Import Tool](https://docs.enterprisehealth.com/functions/system-administration/data-migration/completed-orders-import-tool/)

#### Orders Compendium

An **order** is a term used loosely when any method is used to request tests, labs, radiology studies, or E-Orders. Each lab vendor has specific test codes that they use to result ordered tests. The Order List Compendium CSV API loads them as orderable items in EH.

![](./data-import-master-list.assets/2b04dcb16e3957d5ad9be4095c4ebd6c.png)

A standard orders compendium is included in the initial installation, however there is an editor for a system administrator to manually add/remove/edit orders and order pick lists within the MIE system. In addition, all orders for lab facilities can store the order code, Billing code, and LOINC code.

![](./data-import-master-list.assets/5711aeed4114000c88e823d1bb0112f8.png)

* [Order List ](https://docs.enterprisehealth.com/functions/system-administration/data-migration/order-list-import-tool/)Import Tool

## Non-Discrete Documents

Summary documents are generated in an MIE system to display non-discrete information on a chart.

### Summary Documents Using WC Query

Text is stored as a document during a data migration. A description of each type of document is stored in the document type name, which allows the MIE system to display the document under the appropriate chart tab in a chart. The Custom Documents CSV API imports a number of summary, non-discrete data as a document.

![](./data-import-master-list.assets/779e8900e6b6579fa54b6e145011dc3e.png)

![](./data-import-master-list.assets/f873fa5a9201dea613f0f446201900b8.png)

![](./data-import-master-list.assets/17584ba61f2b1f987b64c733e1f5dc72.png)

* [Custom Documents CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/custom-documents-csv-api/)

### Summary Documents Creating HTML Files

Case information may be stored as a document in a static 2-column format, which displays the field label and the value side-by-side. The document type name is specific to the type of information displayed in the document, which allows the document to display in the appropriate chart tab within a chart. The Summary Documents CSV API imports a number of summary, non-discrete data as a document.

![](./data-import-master-list.assets/bae2bdfc94e7e34564961916044fb81e.png)

* [Summary Document Import CSV Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing)
* [Summary Documents CSV API](summary-documents-csv-api.md)

### Questionnaires

Questionnaire data is grouped together by date of service in a document. The document type name is stored as a questionnaire so it will display within the appropriate chart tab in a chart. In addition, questionnaire data may be linked to the encounter for that date of service.

![](./data-import-master-list.assets/0341b68aa8533de5197dc59bb1f0b822.png)

* CSV import specification TBD

### Immunizations

A number of external database tables are referenced to identify drugs for injections/immunizations and relate them to patients.

![](./data-import-master-list.assets/48d039ff0662340e6a4006eb226e848f.png)

Injection data is stored as a document, and will display within the appropriate tab of a chart.

![](./data-import-master-list.assets/08f341f4ca4306f630d53b7c325d7336.png)

In addition, injections display within the Injections flowsheet chart tab as discrete data.

![](./data-import-master-list.assets/9aa72bcca5a370347fab5530208ea17b.png)

* [CSV import specification](https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit)
* [Injections CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/injections-csv-api/)

### MIE File Import

The [File Import CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/) imports and stores a set of files (an archive) into EH as a document. A document is then associated with a chart. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual.

Along with the files that are imported into the MIE File System, a discrete document record is created to associate the file with the correct chart in the MIE system. Although the content of the file is not stored as discrete data, the document record is stored discretely and features data such as the service date, enter date, service location, author, and document type (a way to group and classify documents in MIE's system).

* CSV import specification TBD

#### Employee Photos

Employee photos are one example of files that may be imported with the File Import CSV API. Employee photos appear on the Summary and Demographics tabs in the employee's chart.

![](./data-import-master-list.assets/2adbf11dd3f130bc242229717324d067.png)

#### Scanned Documents

Scanned documents are another example of files that may be imported with the File Import CSV API. PDF or TIF formatted files may be imported into the MIE system during the data migration process. As with every file import, each file has a header file to indicate the employee MR number, date of service and document type name these documents will display in the appropriate chart tab in the employee's medical record. Documents that are not indexed may be imported into the WebScan module to allow a user to manually index those fields before uploading the images to the medical record.

![](./data-import-master-list.assets/288bb5d15e404a5c3cfd89ca24df142f.png)

#### ECG Flowsheet and Reports

Historical ECG data is imported as a document.

![](./data-import-master-list.assets/98d62e7e550a3467bd45d7a49f7148e8.png)

Specific discrete data fields may also be viewed in a flowsheet format.

* [MIE File Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/)
* [MIE CSV File Import](https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit#gid=0%7C)

## Other Flowsheets and Reports

### Vision Flowsheet and Reports

The vision flowsheet displays specific discrete data in order by date of service.

![](./data-import-master-list.assets/ecc8ff1084a4c3e396481c86f2ef31de.png)

Historical vision data is imported as a document in a chart.

![](./data-import-master-list.assets/b9aa66aeff5e08bec55d542c97428204.png)

### X-ray Flowsheet and Reports

Historical x-ray reports are imported as a document. Specific discrete data fields may also be viewed in a flowsheet format. In addition, the MIE system has the ability to store digital radiology (DICOM) images.

![](./data-import-master-list.assets/d0026e29af76d2c65eb828cd0fb2fe1d.png)

## Discrete System Data

### Pharmacy Filter

The pharmacy import template allows for a batch upload to the inventory module. Items are matched by Name, Strength and Lot # to determine if an existing item should be updated or a new item added to the MIE system.

![](./data-import-master-list.assets/5f74a4f3fb21291ba5649392757c405f.png)

* [Pharmacy Filter Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/pharmacy-filter-import/)

### Schedules

There is an editor in the MIE system to manually add/edit schedules, appointment types and cancellation codes. The schedules may also be copied to a new entry. If appointments are uniquely identified during the data migration they will be stored in the appointment history in the chart. The Appointments CSV API imports data related to appointments and schedules.

![](./data-import-master-list.assets/8a76ebbb1473472ef322d8338afddad3.png)

* [Appointments CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/appointments-import/)

### Fee Schedules

Fee schedule information may be imported from a template. There is an editor within the MIE system to add/edit/remove Billing codes, descriptions and fee schedule information.

![](./data-import-master-list.assets/b2fc42583eb7a036fc445d45fb97542c.png)

* [Fee Schedule CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/fee-schedule-import-tool/)

### Fee Schedules New

The Fee Schedule CSV API manages data for setting costs and prices for orders. Required columns include Fee Schedule Name, Order Name, and Amount. Please note the the Order Name column corresponds to the Order Name column in the Orders dataset. The difference between the two Fee Schedule Imports is that Billing Code is not a required field in this import.

![](./data-import-master-list.assets/04047b99bdf1d3ef40626c4e06b9bf37.png)

### Assets

The Asset Management module includes the ability to import asset details via an Assets CSV API. The CSV defines each field and allows the ability to leave columns blank if the data is not available. This can be populated by the client and imported directly into their systems. All columns must remain in place with the header row in place.

![](./data-import-master-list.assets/4843619b930404b2b2b64353527f33e4.png)

### Order Questions

Orders questions may be added using a template. There is also an editor within the MIE system to create order questions.

![](./data-import-master-list.assets/431157d3e1ff7dbece47d6d1144f3864.png)

* [Order Question CSV API](https://docs.enterprisehealth.com/functions/system-administration/data-migration/order-question-import-tool/)

## Related Pages

* [Interface Specifications](https://docs.enterprisehealth.com/resources/system-specifications/enterprise-health-interface-specifications/)
* [Data Migration File Format Standard](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-migration-file-format-standard/)
* [Data Migration Overview](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-migration-overview/)
* [MIE File Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/)
* [System Conversion](https://docs.enterprisehealth.com/functions/system-administration/data-migration/system-conversion/)
* [Human Resources Interface](https://drive.google.com/open?id=10kV4HZbW7x3m4YigSKD_z-saFN4LsAy72Kj4f7P9LEI)

## Learning Management System

To learn more about the Data Import Master List, follow the link below to the Learning Management System course:

* [Data Import Tab](https://mie.talentlms.com/shared/start/key:ZOBDNHRK)
