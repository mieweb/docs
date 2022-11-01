---
id: '1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4'
title: 'Conditions CSV API'
date: '2020-02-27T21:32:21.297Z'
version: 23
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM'
  - 'gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU'
  - 'gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc'
  - 'gdoc:1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU'
  - 'gdoc:1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
  - 'https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=1082191839%7CThe'
  - 'gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M'
  - 'https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=388607337&single=true&output=csv'
  - 'gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
  - 'gdoc:1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk'
source: 'https://drive.google.com/open?id=1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Conditions CSV API'
    identifier: '1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5120
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) **for conditions** using the [Case Management CSV API](gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM).  
The following CSV APIs import information used to build a case:
* Encounters/Incidents
* [Restrictions Case Management CSV API](gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU)
* [Accommodations Case Management CSV API](gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc)
* Conditions Case Management CSV API
* [Nature of Injury Case Management CSV API](gdoc:1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU)

  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Case Management CSV API. Technical details are provided in the remaining sections.

  
### **Abstract**  
  
The Case Management CSV API is used to import information related to an employee's (patient's) condition, accommodation, and lost time from an existing system.  
It is valuable to recognize the following terminology as it pertains to MIE systems:
* An <strong>accommodation</strong> is modification that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.
* A <strong>case</strong> is a full report of a workplace injury, or incident, for an employee (patient). The case is created in an initial visit (encounter), and is then linked to subsequent visits. A case links all follow up visits (encounters), restrictions, accommodations, conditions, and nature of injury information. All of the documents pertaining to the case are grouped together within the patient's chart for reporting purposes. There are several case types, which designate different required fields as well as state specific incident questions and forms. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system.
* A <strong>condition</strong> in an MIE system records a patient's health/medical problem, recorded using the appropriate medical coding (ICD9/10, SNOMED, etc.).
* An <strong>encounter</strong> documents a visit with a employee, and is also known as a patient visit. All aspects of the visit are covered in the encounter, such as the history of present illness, case/incident information, past medical history, medications, allergies, review of systems, vitals, tests and procedures, physical exam, assessment, restrictions/accommodations, plan and follow up information.
* The term <strong>incident</strong> refers to the workplace injury that opens a case for an employee. The database table in an MIE system where information on the injury is recorded is the incidents table. When an incident date is entered in the incidents table, a case is created. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system, because an incident creates a case.
* <strong>Lost time</strong> is the period of time that an employee (patient) is away from work due to an injury.
* <strong>Nature of injury codes</strong> and <strong>body part codes</strong> are combined in a case to create the incident nature of injury body part ID (nibp_id) in an MIE system.
* In occupational health, a <strong>restriction</strong> (clinical restriction) refers to an activity that an employee (patient) is not permitted to do after an injury (incident).
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](gdoc:1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk) page for a more detailed explanation of terminology.

  
## **Workflow Considerations**  
  
The following subsections outline situations in which cases are useful, and when they are not.

  
### **Importing Condition Information Separately**  
  
Case management in EH was built to collect data for OSHA 300 logs. Clients that are not required to keep OSHA 300 logs may not need to use the Case Management CSV API. Depending on the way the client uses the MIE system, the imported information may be included in an encounter, restriction, accommodation, condition, or nature of injury information for a patient.  
It is possible to import conditon data separately. See a developer for more details.

  
### **Importing Condition Information as Part of a Case**  
  
Not all encounters are part of a case, but a case is always created when an incident is created in the system. The Case Management CSV API requires an incident date (incidents.inc_datetime).  
A major advantage of using the Case Management CSV API is that once data is imported, all information related to case is in the system, not just visits (encounters).

  
## **Specifications**  
  
The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[Case Management CSV API specifications are available here](https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=1082191839%7CThe).  
Additionally, [user instructions](#gjdgxs) are available for importing data in EH.

  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M) page.

  
### **Field Requirements**  
  
The following sections outline requirements for importing condition data related to case management. The Case Management CSV API utilizes data from multiple locations to track the progress of a workplace injury or illness by building a case for the patient.

  
#### **Required**  
  
Since each page in the full Case Management CSV API spec also imports information separately, there is some overlap in what is required.  
The following fields are required to import conditions data:
* <em>Case Number (External ID)</em> (encounters.ext_id): Links a chart to a patient.
* <em>Condition External ID</em> (patient_conditions.ext_id): Identifier from the legacy database or spreadsheet. This is typically the primary key of the legacy database's conditions or problems table.
* <em>Chart ID</em> (patient_conditions.pat_id): Identifier of the chart to which this condition pertains.
* <em>Chart ID Type</em> (patient_conditions.pat_id_type): Type of identifier of the chart to which this condition pertains. Applies the condition to a specific patient.
* <em>Status</em> (patient_conditions.status): Status of condition. Active conditions display on the encounter, while concluded conditions display elsewhere on a list of previous conditions.
* <em>Description of Condition</em> (patient_conditions.description): A short description of the condition, this may be an ICD, Snomed, or free text. This description appears on the encounter.

  
#### **Best Practice**  
  
Although this information is not required, it is considered a best practice to use at least some of these fields to populate information in the header of a document for identification and organizational purposes.  
The fields that follow are used to populate the OSHA 300 log.
* <em>ICD-10 Code</em> (patient_conditions.icd10): ICD10 code.
* <em>Onset Date</em> (patient_conditions.onset_date): Date when the condition began.
* <em>Conclusion Date</em> (patient_conditions.conclusion_date): Date when the condition was concluded.
* <em>Snomed Concept ID</em> (patient_conditions.concept_id): SNOMED concept ID.

  
## **Examples**  

* [Patient Conditions Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=388607337&single=true&output=csv)

  
## **Troubleshooting**  


  
## **Validation**  


  
## **Resources**  


  
## **Related Pages**  

* [Data Import Master List](gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y)
* [Case Management CSV API](gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM)
* [Clinical Encounter CSV API](gdoc:1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk)
* [Accommodations CSV API](gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc)
* [Nature of Injury CSV API](gdoc:1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU)
* [Restrictions CSV API](gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU)
