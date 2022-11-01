---
id: '1eIHNqGUb4LBiyFjmzFyYz3svkEmx8y-Fo1I_mL9MWBQ'
title: 'Panel Status Import'
date: '2020-03-17T15:16:03.508Z'
version: 30
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/Import_Overview'
  - 'https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/edit?usp=sharing'
  - 'gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M'
  - 'gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
source: 'https://drive.google.com/open?id=1eIHNqGUb4LBiyFjmzFyYz3svkEmx8y-Fo1I_mL9MWBQ'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Panel Status Import'
    identifier: '1eIHNqGUb4LBiyFjmzFyYz3svkEmx8y-Fo1I_mL9MWBQ'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4910
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) to create patient panel status records using the Panel Status CSV API.
  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Panel Status CSV API. Technical details are provided in the remaining sections.
  
### **Abstract**  
  
The Panel Status CSV API imports discrete employee panel status records.  
It is valuable to recognize the following terminology as it pertains to MIE systems:
* A <strong>chart</strong> is a patient's electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient.
* A <strong>panel</strong> is a group of one-time or recurring testing items to performed for a person.
* A <strong>panel membership</strong> is the assignment of a person to a panel. It can be assigned based on the kind of work that a person does, the materials they handle, the environment in which they work, or other factors.
* A <strong>panel status</strong> indicates an person's current or historical fitness for doing the work that requires their membership in a particular panel. Also indicates when testing will be due next.
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](https://miewiki.med-web.com/wiki/index.php/Import_Overview) page for a more detailed explanation of terminology.
  
## **Specifications**  
  
The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[Specifications for the Panel Status CSV API are available here.](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/edit?usp=sharing)  
Note: The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.  
Additionally, [user instructions](#gjdgxs) are available for importing data in EH.
  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M) page.
  
### **Field Requirements**  
  
The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Panel Status CSV API specification. Additional details and considerations are provided here.  
**Required**  
The following fields are required:
* <em>Chart ID</em> (patient_panel_status.pat_id) and <em>Chart ID Type</em> patient_panel_status.pat_id_type) are used to to correctly identify a chart.
* <em>External ID</em> identifies a record in the original data source (i.e., this is often the primary or unique key on the table of the legacy database that is being migrated to the MIE system).
* <em>Panel ID</em> identifies which panel the status applies to
* <em>Rec Status</em> should be marked as current for the most recent status for each unique chart+panel combination. All others should be marked as history.
* <em>Status</em> indicates a person's progress through the testing process. "In-Flight" individuals, meaning those who were scheduled for testing by a different employee health system, but have not yet completed it, could be marked as pending or overdue. Other people that do not yet have scheduled testing could be marked as complete or one of the other statuses.
* <em>Next Due</em> is conditionally required, based on the panel. An annual or otherwise recurring panel should have a next due date marked so that the system knows when to initiate future testing. A one-time panel, such as an acute exposure group, could leave this field blank except for those people who are considered "In-Flight".
**Best Practice**  
Although this information is not required, it is considered a best practice to use them:
* <em>Effective Date</em> (patient_panel_status.effective_dt) is the date that a final status went into effect.
**Optional Fields**  
These fields are optional:
* <em>Review Date</em> (patient_panel_status.review_dt) is the date when a status determination was made.
* <em>Create Date</em> (patient_panel_status.create_dt) is the date when a status record was created.
* <em>Creating Provider ID</em> (patient_panel_status.create_user_id) along with Creating Provider ID Type (patient_panel_status.create_user_id_type) identify the provider who added the status to the system.
* <em>Panel Membership Start Date</em> (patient_panel_status.pm_start_dt) is the date when the patient started membership in the panel.

  
## **Validation**  
  
Unless otherwise specified, validation between the previous system and the new EH system requires the client to provide a number of test patients. This data can be compared in the previous system and EH using the validation test script.
  
## **Related Pages**  

* [Data Import Master List](gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y)
