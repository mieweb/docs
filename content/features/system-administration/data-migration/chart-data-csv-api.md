---
id: '1Jv5jf4al_rY2ZMYQmBYEW-DWpyJudarkxKZ8sbg_uSs'
title: 'Chart Data CSV API'
date: '2025-11-12T20:05:17.130Z'
version: 197
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?gid=0'
  - 'data-import-standards.md'
  - 'chart-medical-record-number-mrn-import-options.md'
  - 'chart-observations-import-options.md'
  - 'chart-observations-default-values.md'
  - 'https://www.lucidchart.com/documents/view/8b1c6c06-6b16-40a0-afe7-a576d804854d'
  - 'https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/pubhtml'
  - '../../../resources/system-specifications/application-programming-interface-api.md'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1Jv5jf4al_rY2ZMYQmBYEW-DWpyJudarkxKZ8sbg_uSs'
wikigdrive: 'v2.16.0'
---
The purpose of this page is to define data and fields that may be imported into an Enterprise Health (EH) system using the Chart Data CSV API.

## Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Chart Data CSV API. Technical details are provided in the remaining sections.

## Abstract

The Chart Data CSV API is used to import data related to patients or charts. It is valuable to recognize the following terminology as it pertains to MIE systems:

* A <strong>patient</strong> is an individual whose medical information is stored in an EH database.
* A <strong>chart</strong> is a patient's electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient.
* A <strong>user</strong> is an individual who uses an Enterprise Health system as part of their job.
* <strong>Partitions</strong> organize groups of charts. Partitions are often used to restrict which charts a user can access.

CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.

This API may also be used to set up relationships between charts. It is part of MIE's standard Human Resources Interface, but it may also be used for single imports of new charts or updates to charts.

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.

The Chart Data CSV API specifications are available here: [Chart Data CSV API Specification](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/edit?gid=0#gid=0)

{{% note %}}
The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.
{{% /note %}}

Additionally, user instructions are available for importing data in EH.

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.

### Field Definitions by Table

The sections that follow outline the fields and data utilized by an EH system.

A chart search in an EH can be completed with one of the following options:

* Patient medical record number (MRN)
* First Name, Last Name, and Date of Birth
* Social Security Number (SSN - used in the United States)
* Social Insurance Number (SIN - used in Canada)

#### patients

The patients table is a record of all patients in an EH system. These fields maintain the demographics on the chart of the patient. A last name and birth date is required to create a patient chart. The state, country, sex, marital status, race, and ethnicity fields require specific coded values to properly display.

#### patient_mrns

A Medical Record Number (MRN) is a unique identifier of the patient. A MRN is required to create a new patient chart.

A partition is a means of organizing groups of charts. Partitions are often used to restrict which charts a user can access. This column identifies the partition the medical record appears in (ex: hospital). The value of this field will be the MRN in the partition defined by the column name.

The field @patient_mrns. is required for a demographics import.

[Chart MRNumber Import Options](chart-medical-record-number-mrn-import-options.md) can be used to modify how patient mrns are processed as the file is loaded.

#### patient_admin

Employee information is contained within the Patient Admin fields. This is useful for organizing employees by groups, classes, locations, jobs, or status. Each field is custom coded, and the code values should correspond to a description.

#### patient_extended_values

Along with the patient_extended_values table, the patient_extended index table stores patient-relevant organizational-level information for Enterprise Health systems. Hundreds of other data items relevant to a patient's chart that does not fit on the patients or patient_admin tables are stored here.

Patient extended values are used for storing data that doesn't neatly fit into one of the predefined patient tables. This field can be reused multiple times by replacing the extension with a new name. The value of this field will be stored under the name defined in the column extension.

#### observations

Along with the patient_extended_values table, the patient_extended index table stores patient-relevant organizational-level information for Enterprise Health systems. Hundreds of other data items relevant to a patient's chart that does not fit on the patients or patient_admin tables are stored here. The patient_extended_values table stores the values related to the patient_extended_index table. Information stored on this table is also stored on the observations table via database triggers.

Observations are used to track information that may change from time to time. Typical examples of this are results from lab work. Observations can be used multiple times by replacing them with a new name. If multiple observations have the same name then the optional [group] can be replaced with a different identifier for each distinct observation.

The field obs_result is required to create an observation.

**Optional Field Pair For Observations**

Both of the following fields are needed to link the observation to a patient encounter:

* encounter ext_id
* encounter interface

Including the field encounter order_id will also create an encounter order.

[Chart Observations Import Options](chart-observations-import-options.md) can be used to modify how observations are processed as the file is loaded.

[Chart Observations Default](chart-observations-default-values.md) Values can be used to simplify the import file.

#### insurance_policy

The insurance_policy table stores the policy information for each insurance policy that a patient has.

This field can be used multiple times by replacing it with a unique identifier. If it is an integer value it is used to indicate the priority of the insurance policy. Otherwise, it is not linked in any way to the policy.

#### user_patients

The user_patients table stores the relationship between a patient and a user. The relationship in the header field is used to specify the type or relation the user has to the patient. This can be either the description or the code of the relationship from the user_roles table.

#### pat_chart_types

The pat_chart_types table stores any additional chart types that apply to a patient chart.

## EER Diagram

[Source](https://www.lucidchart.com/documents/view/8b1c6c06-6b16-40a0-afe7-a576d804854d)

## Examples

Examples using sample data are available on [separate tabs in the specification.](https://docs.google.com/spreadsheets/d/1MVaWGTxWdKM1VKuaBjcj6HewS0zH3ETM9PLjGFEwRM0/pubhtml)

## Troubleshooting

See [Troubleshooting APIs](../../../resources/system-specifications/application-programming-interface-api.md).

## Related Pages

* [Data Import Master List](data-import-master-list.md)
