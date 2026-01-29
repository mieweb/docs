---
id: "1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM"
title: "Case Management CSV API"
date: "2025-11-12T20:15:25.021Z"
version: 39
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "https://www.osha.gov/recordkeeping/RKforms.html"
  - "https://www.osha.gov/pls/oshaweb/owastand.display_standard_group?p_toc_level=1&p_part_number=1904"
  - "restrictions-csv-api.md"
  - "accommodations-csv-api.md"
  - "conditions-csv-api.md"
  - "nature-of-injury-csv-api.md"
  - "clinical-encounter-csv-api.md"
  - "data-import-overview.md"
  - "https://docs.google.com/a/mieweb.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit?usp=sharing%7CThe"
  - "data-import-standards.md"
  - "https://www.lucidchart.com/documents/view/d7a759d4-0d0c-47bd-9426-ecd7d3d50aaf"
  - "https://docs.google.com/spreadsheets/u/1/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub"
  - "https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=503618203&single=true&output=csv"
  - "https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=388607337&single=true&output=csv"
  - "https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=700124604&single=true&output=csv"
  - "https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1481656376&single=true&output=csv"
  - "https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1488916786&single=true&output=csv"
  - "data-import-master-list.md"
source: "https://drive.google.com/open?id=1AsEPbkLvKFI-gXp8bfQyRKL5__dnLrj_L2BDtrZg6HM"
wikigdrive: "v2.15.30"
---

The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) using the Case Management CSV API. A **case** encompasses a variety of data that is ultimately meant to generate an [OSHA 300 log](https://www.osha.gov/recordkeeping/RKforms.html) for [occupational injuries and illness.](https://www.osha.gov/pls/oshaweb/owastand.display_standard_group?p_toc_level=1&p_part_number=1904)

The following CSV APIs import information used to build a case:

- Encounters/Incidents
- [Restrictions Case Management CSV API](restrictions-csv-api.md)
- [Accommodations Case Management CSV API](accommodations-csv-api.md)
- [Conditions Case Management CSV API](conditions-csv-api.md)
- [Nature of Injury Case Management CSV API](nature-of-injury-csv-api.md)

The Case Management CSV API includes encounter information, but a separate CSV API--[Clinical Encounter CSV API](clinical-encounter-csv-api.md) is used when encounters are not imported as a part of a case.

Although data may be imported separately, the specifications outlined on this page include all of the CSV APIs listed above to create cases and generate an OSHA 300 log.

## Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Case Management CSV API. Technical details are provided in the remaining sections.

## Abstract

The Case Management CSV API is used to import information related to an employee's (patient's) condition, accommodation, and lost time from an existing system.

It is valuable to recognize the following terminology as it pertains to MIE systems:

- An <strong>accommodation</strong> is modification that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.
- A <strong>case</strong> is a full report of a workplace injury, or incident, for an employee (patient). The case is created in an initial visit (encounter), and is then linked to subsequent visits. A case links all follow up visits (encounters), restrictions, accommodations, conditions, and nature of injury information. All of the documents pertaining to the case are grouped together within the patient's chart for reporting purposes. There are several case types, which designate different required fields as well as state specific incident questions and forms. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system.
- A <strong>condition</strong> in an MIE system records a patient's health/medical problem, recorded using the appropriate medical coding (ICD9/10, SNOMED, etc.).
- An <strong>encounter</strong> documents a visit with a employee, and is also known as a patient visit. All aspects of the visit are covered in the encounter, such as the history of present illness, case/incident information, past medical history, medications, allergies, review of systems, vitals, tests and procedures, physical exam, assessment, restrictions/accommodations, plan and follow up information.
- The term <strong>incident</strong> refers to the workplace injury that opens a case for an employee. The database table in an MIE system where information on the injury is recorded is the incidents table. When an incident date is entered in the incidents table, a case is created. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system, because an incident creates a case.
- <strong>Lost time</strong> is the period of time that an employee (patient) is away from work due to an injury.
- <strong>Nature of injury codes</strong> and <strong>body part codes</strong> are combined in a case to create the incident nature of injury body part ID (nibp_id) in an MIE system.
- In occupational health, a <strong>restriction</strong> (clinical restriction) refers to an activity that an employee (patient) is not permitted to do after an injury (incident).

CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.

### Screenshots

The following screenshots show a simple CSV file, and the resulting case documents in an EH system. Example data is available on the tab "----" in the specification (see link in Specification section of this page).

## Workflow Considerations

The following subsections outline situations in which cases are useful, and when they are not.

### Importing Information Separately

Depending on the way the client uses the MIE system, the imported information may be included in an encounter, restriction, accommodation, condition, or nature of injury information for a patient.

Case management in EH was built to collect data for OSHA 300 logs. Clients that are not required to keep OSHA 300 logs may not need to use the Case Management CSV API.

The [Clinical Encounter CSV API](clinical-encounter-csv-api.md) imports case-related data, such as how and where an injury occurred, but does not include data on how a workplace accommodates an injury. An incident is not required for an encounter.

### Importing Information as Part of a Case

Not all encounters are part of a case, but a case is always created when an incident is created in the system. The Case Management CSV API requires an incident date (incidents.inc_datetime).

A major advantage of using the Case Management CSV API is that once data is imported, all information related to case is in the system, not just visits (encounters).

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.

[Case Management CSV API specifications are available here](https://docs.google.com/a/mieweb.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit?usp=sharing%7CThe).

Additionally, user instructions are available for importing data in EH.

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.

### Field Requirements

The following sections outline requirements for importing data related to case management. The Case Management CSV API utilizes data from multiple locations to track the progress of a workplace injury or illness by building a case for the patient.

#### Required

Because the Case Management CSV API is broken up into multiple, related CSVs (sheets in the workbook), all of the fields marked required or best practice apply to the Case Management CSV API.

Since each page in the full Case Management CSV API spec also imports information separately, there is some overlap in what is required.

- <em>Chart Identifier</em> (encounters.pat_id): Links a chart to a patient.
- <em>Chart ID Type</em> (encounters.pat_id_type): Identifies the type of chart.
- <em>Record External ID</em> (encounters.ext_id): Number that identified the encounter in the previous system.

*Performing User ID Type* (encounters.performing_user_id_type): is conditionally required if the field *Performing User ID* (encounters.performing_user_id) is used to identify the user that performed the encounter.

The required IDs listed here serve to correctly identify the patient and link together all information pertinent to a case.

#### Best Practice

Although this information is not required, it is considered a best practice to use at least some of these fields to populate information in the header of a document for identification and organizational purposes.

The fields that follow are used to populate the OSHA 300 log.

- <em>Visit Type</em> (encounters.visit_type): Identifies how the encounter was performed (phone, office, etc.).
- <em>Date of Service</em> (enounters.serv_date): It is best practice to record the date of service for record keeping purposes.
- <em>Encounter Closed</em> (encounters.closed): Encounters that are flagged as closed cannot be opened as an encounter once imported into in EH.
- <em>Case Date Time</em> (incidents.inc_datetime):
- <em>Case Type</em> (incidents.case_type):
- <em>Location Description</em> (incidents.loc_description): The location description is a text description of where an incident occurred, and should be utilized with incidents.
- <em>Work Related</em> (incidents.osha_work_related): Flags injury as OSHA work-related.
- <em>OSHA Reported Date</em> (incidents.osha_completed_dt): Timestamp when incident was reported to OSHA.
- <em>Injury/Illness Type</em> (incidents.osha_itype): Maps to EH incident field "Injury/illness type". Injury or illness type (OSHA list).
- <em>Privacy Case</em> (incidents.privacy_case): Flag if incident is sensitive. Name of employee is hidden on OSHA log.
- <em>Workers' compensation related</em> (incidents.workcomp_completed_dt): Maps to EH incident field "Workers' comp related." Indicates that the incident is compensable by a work comp provider.
- <em>Last date of work</em> (incidents.date_last_worked): Datetime the employee last time worked before the incident.
- <em>Time patient began work on day of injury/illness</em> (incidents.employee_starttime): Maps to EH incident field "Time patient began work on day of injury/illness." Time employee began shift on day of injury.
- <em>Date supervisor notified</em> (incidents.reported_super_datetime): Maps to EH incident field "Date/time supervisor notified" "Datetime incident was reported to the employee's supervisor."
- <em>Action employee performing before incident</em> (incidents.comment_activity): Maps to EH incidents field "What was the employee doing just before the incident occurred?" Documents action employee was performing before incident happened. Corresponds to OSHA form.
- <em>Incident Explanation</em> (incidents.comment_explanation): Maps to EH incident field "What happened?" Explanation of how injury occurred. Corresponds to OSHA form.
- <em>Incident Cause</em> (incidents.comment_cause): Maps to EH incident field "What object or substance directly harmed the employee?" Object or substance that harmed the employee. Corresponds to OSHA form.
- <em>Incident Status</em> (incidents.status): Populates the "case/incident" in EH as opened or closed.
- <em>California dwc 1 Form</em> (incident_extended_fields.ca_dwc_1_form): Part of the California work comp form.

## EER Diagram

The EER diagram below identifies the database tables involved in creating cases in EH.

[Source](https://www.lucidchart.com/documents/view/d7a759d4-0d0c-47bd-9426-ecd7d3d50aaf)

## Example

- [Google spreadsheet](https://docs.google.com/spreadsheets/u/1/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub)
  - This sheet has 5 tabs, one for each file type

Downloadable CSV versions are available:

- [Encounters and Incidents Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=503618203&single=true&output=csv)
- [Patient Conditions Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=388607337&single=true&output=csv)
- [Patient Clinical Restriction Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=700124604&single=true&output=csv)
- [Accommodations Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1481656376&single=true&output=csv)
- [Incident Body Parts Downloadable CSV](https://docs.google.com/spreadsheets/d/1Gi1bPGobEOuUJX40_lXf-oDSEpriLBUXyeJACUy7DaQ/pub?gid=1488916786&single=true&output=csv)

## Related Pages

- [Data Import Master List](data-import-master-list.md)
