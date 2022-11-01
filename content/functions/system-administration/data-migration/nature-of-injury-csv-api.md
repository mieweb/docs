---
id: '1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU'
title: 'Nature of Injury CSV API'
date: '2020-02-27T21:32:25.970Z'
version: 25
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM'
  - 'gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU'
  - 'gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc'
  - 'gdoc:1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4'
  - 'gdoc:1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
  - 'https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=1683353759%7CThe'
  - 'gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M'
  - 'https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1488916786&single=true&output=csv'
  - 'gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
  - 'gdoc:1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk'
source: 'https://drive.google.com/open?id=1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Nature of Injury CSV API'
    identifier: '1TMIp_Sy8YO8Qe8FyfpxRuHIZUFUBzdSK69mRQrBUgmU'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5130
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) **for nature of injury** using the [Case Management CSV API](gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM).  
The following CSV APIs import information used to build a case:
* Encounters/Incidents
* [Restrictions Case Management CSV API](gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU)
* [Accommodations Case Management CSV API](gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc)
* [Conditions Case Management CSV API](gdoc:1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4)
* Nature of Injury Case Management CSV API

  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Clinical Encounter CSV API. Technical details are provided in the remaining sections.

  
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

  
### **Importing Restriction Information Separately**  
  
Case management in EH was built to collect data for OSHA 300 logs. Clients that are not required to keep OSHA 300 logs may not need to use the Case Management CSV API. Depending on the way the client uses the MIE system, the imported information may be included in an encounter, restriction, accommodation, condition, or nature of injury information for a patient.  
It is possible to import nature of injury data separately. See a developer for more details.

  
### **Importing Restriction Information as Part of a Case**  
  
Not all encounters are part of a case, but a case is always created when an incident is created in the system. The Case Management CSV API requires an incident date (incidents.inc_datetime).  
A major advantage of using the Case Management CSV API is that once data is imported, all information related to case is in the system, not just visits (encounters).

  
## **Specifications**  
  
The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[Case Management CSV API specifications are available here](https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=1683353759%7CThe).

  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](gdoc:1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M) page.

  
### **Field Requirements**  
  
The following sections outline requirements for importing nature of injury data related to case management. The Case Management CSV API utilizes data from multiple locations to track the progress of a workplace injury or illness by building a case for the patient.

  
#### **Required**  
  
Since each page in the full Case Management CSV API spec also imports information separately, there is some overlap in what is required.  
The following fields are required to import nature of injury data:
* <em>Encounter External ID</em> (encounters.ext_id): External ID of the encounter to which this Incident Body Part applies.
* <em>External ID</em> (incident.nibp.ext_id): Internal ID from source system.
A text description of either the injury (Injury Description, incident_nibp.nature_injury) OR body part (Body Part Description, incident_nibp.body_part) is also required.

  
## **Examples**  

* [Incident Body Parts Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1488916786&single=true&output=csv)

  
## **Validation**  


  
## **Related Pages**  

* [Data Import Master List](gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y)
* [Case Management CSV API](gdoc:1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM)
* [Clinical Encounter CSV API](gdoc:1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk)
* [Accommodations CSV API](gdoc:1rVOLi3blPwvbLbidZxdCxn58hZgU1HraWdGz-LQJJUc)
* [Conditions CSV API](gdoc:1-8GONLFjnSIAyxTcEnkktUluwfAzhYBp7QrMgGLLRm4)
* [Restrictions CSV API](gdoc:1tJLybb-43t9zEG8lXOCUZTjbECoea4N6EhC6FIwOfqU)
