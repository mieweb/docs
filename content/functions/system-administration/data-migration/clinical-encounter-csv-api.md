---
id: '1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk'
title: 'Clinical Encounter CSV API'
date: '2020-03-17T13:11:47.649Z'
version: 36
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://www.osha.gov/recordkeeping/RKforms.html'
  - 'https://www.osha.gov/pls/oshaweb/owastand.display_standard_group?p_toc_level=1&p_part_number=1904'
  - 'case-management-csv-api.md'
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit'
  - 'data-import-standards.md'
  - 'chart-observations-import-options.md'
  - 'chart-observations-default-values.md'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1ogOQ9KbjW2Fq6L1nWBb_KLpbbn0ylNcWB5nuRYIewzM/edit?usp=sharing'
  - 'https://docs.google.com/spreadsheets/u/1/d/1EfNyS8Dmk2eS4NX5F9AIOqfFWVgmO1rvrrXIs03EXXg/pubhtml'
  - 'https://docs.google.com/spreadsheets/d/1EfNyS8Dmk2eS4NX5F9AIOqfFWVgmO1rvrrXIs03EXXg/pub?gid=503618203&single=true&output=csv'
  - 'restrictions-csv-api.md'
  - 'accommodations-csv-api.md'
  - 'conditions-csv-api.md'
  - 'nature-of-injury-csv-api.md'
  - 'data-import-master-list.md'
  - 'data-migration-file-format-standard.md'
source: 'https://drive.google.com/open?id=1dWlxZTkN0MeMsw_OGuzzr2SIH6GiA3vPwndilFkY5hk'
wikigdrive: 'a089f188505e78981d76f5d8cf7827afb7a63200'
---
## Introduction

The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) using the Clinical Encounter CSV API.

A **case** encompasses a variety of data that is ultimately meant to generate an [OSHA 300 log](https://www.osha.gov/recordkeeping/RKforms.html) for [occupational injuries and illness.](https://www.osha.gov/pls/oshaweb/owastand.display_standard_group?p_toc_level=1&p_part_number=1904) The [Case Management CSV API](case-management-csv-api.md) includes encounter information, and is used when encounters are imported as a part of a case.

### Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Clinical Encounter CSV API. Technical details are provided in the remaining sections.

### Abstract

The Clinical Encounter CSV API is used to import information related to an employee/patient's condition from an existing system.

It is valuable to recognize the following terminology as it pertains to MIE systems:

* An <strong>accommodation</strong> is modification that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.
* A <strong>case</strong> is a full report of a workplace injury, or incident, for an employee (patient). The case is created in an initial visit (encounter), and is then linked to subsequent visits. A case links all follow up visits (encounters), restrictions, accommodations, conditions, and nature of injury information. All of the documents pertaining to the case are grouped together within the patient's chart for reporting purposes. There are several case types, which designate different required fields as well as state specific incident questions and forms. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system.
* A <strong>condition</strong> in an MIE system records a patient's health/medical problem, recorded using the appropriate medical coding (ICD9/10, SNOMED, etc.).
* An <strong>encounter</strong> documents a visit with a employee, and is also known as a patient visit. All aspects of the visit are covered in the encounter, such as the history of present illness, case/incident information, past medical history, medications, allergies, review of systems, vitals, tests and procedures, physical exam, assessment, restrictions/accommodations, plan and follow up information.
* The term <strong>incident</strong> refers to the workplace injury that opens a case for an employee. The database table in an MIE system where information on the injury is recorded is the incidents table. When an incident date is entered in the incidents table, a case is created. The terms <strong>case</strong> and <strong>incident</strong> may be used interchangeably in an MIE system.
* <strong>Lost time</strong> is the period of time that an employee (patient) is away from work due to an injury.
* <strong>Nature of injury codes</strong> and <strong>body part codes</strong> are combined in a case to create the incident nature of injury body part ID (nibp_id) in an MIE system.
* In occupational health, a <strong>restriction</strong> (clinical restriction) refers to an activity that an employee (patient) is not permitted to do after an injury (incident).

CSV refers to the type of file and format of data needed to import information into the {{% sys-name %}} system. API refers to how the data interacts with the {{% sys-name %}} system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.

## Workflow Considerations

The Clinical Encounter CSV API is useful for clients importing encounter-related data such as annual tests for clearance. Each encounter includes a chief complaint and documents separate visits with an employee/patient. Additional information is included in the encounter via documents. A **document** in {{% sys-name %}} is a way of storing information in patient charts. This includes patient photographs, insurance cards, physician or nurse notes, imaging studies, past medical histories, physician tasks for a patient, CCDs and CDAs, email correspondence about a patient, injections, and many other forms of data.

The related [Case Management CSV API](case-management-csv-api.md) imports encounter, restriction, accommodation, condition, or nature of injury information for a patient, and is used to generate an OSHA 300 log. Clients who do not submit OSHA 300 logs may find the Clinical Encounter CSV API more appropriate for their needs.

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in {{% system-name %}} .

[The Clinical Encounter CSV API specifications are available here](https://docs.google.com/spreadsheets/d/1uZ8j8aJRePAreZLIIOZrCtuB_F0Aa65NHLFsRMulZ2w/edit).

{{% tip %}}
The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.

Additionally, user instructions are available for importing data in {{% sys-name %}} .
{{% /tip %}}

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.

### Field Requirements

The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Clinical Encounter CSV API specification. Additional details and considerations are provided here.

#### Required

The following fields are required:

* <em>Chart Identifier</em> (encounters.pat_id): Links a chart to a patient.
* <em>Chart ID Type</em> (encounters.pat_id_type): Identifies the type of chart.
* <em>Record External ID</em> (encounters.ext_id): Number that identified the encounter in the previous system.

*Performing User ID Type* (encounters.performing_user_id_type): Is a conditionally required field if the field *Performing User ID* (encounters.performing_user_id) is used to identify the user that performed the encounter.

#### observations

Observations can be added to the encounter by adding the observation columns to the import file.

The field obs_result is required to create an observation.

[Chart Observations Import Options](chart-observations-import-options.md) can be used to modify how observations are processed as the file is loaded.

[Chart Observations Default Values](chart-observations-default-values.md) can be used to simplify the import file.

#### Best Practice

Although this information is not required, it is considered a best practice to use at least some of these fields to populate information in the header of a document for identification and organizational purposes:

* <em>Visit Type</em> (encounters.visit_type): Identifies how the encounter was performed (phone, office, etc.).
* <em>Date of Service</em> (enounters.serv_date): It is best practice to record the date of service for record keeping purposes.
* <em>Encounter Closed</em> (encounters.closed): Encounters that are flagged as closed cannot be opened as an encounter once imported into in {{% sys-name %}} .
* <em>Case Date Time</em> (incidents.inc_datetime): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Case Type</em> (incidents.case_type): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Location Description</em> (incidents.loc_description): The location description is a text description of where an incident occurred, and should be utilized with incidents.
* <em>Work Related</em> (incidents.osha_work_related): It is best practice to utilize this field for OSHA reporting purposes.
* <em>OSHA Reported Date</em> (incidents.osha_completed_dt): It is best practice to utilize this field for OSHA reporting purposes.
* <em>Injury/Illness Type</em> (incidents.osha_itype): It is best practice to utilize this field for OSHA reporting purposes.
* <em>Privacy Case</em> (incidents.privacy_case): It is best practice to utilize this field for OSHA reporting purposes.
* <em>Workers' compensation related</em> (incidents.workcomp_completed_dt): It is best practice to utilize this field for OSHA reporting purposes.
* <em>Last date of work</em> (incidents.date_last_worked): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Time patient began work on day of injury/illness</em> (incidents.employee_starttime): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Date supervisor notified</em> (incidents.reported_super_datetime): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Action employee performing before incident</em> (incidents.comment_activity): It is best practice to utilize this field if cases are used in  {{% sys-name %}} .
* <em>Incident Explanation</em> (incidents.comment_explanation): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Incident Cause</em> (incidents.comment_cause): It is best practice to utilize this field if cases are used in {{% sys-name %}} .
* <em>Incident Status</em> (incidents.status): It is best practice to utilize this field if cases are used in {{% sys-name %}} .

## Validation

Unless otherwise specified, validation between the previous system and the new {{% sys-name %}} system requires the client to provide a number of test patients. This data can be compared in the previous system using the validation test script.

[Clinical Encounter CSV API Validation Test Script](https://docs.google.com/a/mieweb.com/spreadsheets/d/1ogOQ9KbjW2Fq6L1nWBb_KLpbbn0ylNcWB5nuRYIewzM/edit?usp=sharing)

## Examples

The following examples are available:

* [Google spreadsheet](https://docs.google.com/spreadsheets/u/1/d/1EfNyS8Dmk2eS4NX5F9AIOqfFWVgmO1rvrrXIs03EXXg/pubhtml)
* [Downloadable CSV](https://docs.google.com/spreadsheets/d/1EfNyS8Dmk2eS4NX5F9AIOqfFWVgmO1rvrrXIs03EXXg/pub?gid=503618203&single=true&output=csv)

## Related Pages

* [Case Management CSV API](case-management-csv-api.md)
* [Restrictions CSV API](restrictions-csv-api.md)
* [Accommodations CSV API](accommodations-csv-api.md)
* [Conditions CSV API](conditions-csv-api.md)
* [Nature of Injury CSV API](nature-of-injury-csv-api.md)
* [Data Import Master List](data-import-master-list.md)
* [Import Overview](data-import-overview.md)
* [Data Migration File Format Standard](data-migration-file-format-standard.md)
