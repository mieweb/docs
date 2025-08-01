---
id: '1CotwhF-uu0oYAPV6NtTEuvP5du6OU-QEr2YW1TILwkc'
title: 'Observation Codes CSV API'
date: '2020-03-17T15:10:49.614Z'
version: 44
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1ouZFU3lVQWSrvR1G3J9d7YLz-S3S0whUEEC_bIOrIHY/edit'
  - 'data-import-standards.md'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1CotwhF-uu0oYAPV6NtTEuvP5du6OU-QEr2YW1TILwkc'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) to create observation codes using the Observation Codes CSV API.

### Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Observation Codes CSV API. Technical details are provided in the remaining sections.

### Abstract

The Observation Codes CSV API imports the details that comprise how observations are classified in the system.

CSV refers to the type of file and format of data needed to import information into the {{% sys-name %}} system. API refers to how the data interacts with the {{% sys-name %}} system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.

#### Screenshots

The first screenshot shows a simple CSV file containing the required field and several of the best practice fields. This example data is available for full inspection on the tab "Example" in the specification (see link in Specification section of this page).

![](../observation-codes-csv-api.assets/cef09692e03cb03054ab91c1411c2470.png)

This screenshot shows how the Bilirubin observation code should appear when viewing in the Observation Codes Manager after the import has been run with the example CSV file.

![](../observation-codes-csv-api.assets/84d12580bd892a66c650da0c83b9b56a.png)

And this final screenshot shows how the RBC observation code should appear when viewing in the Observation Codes Manager after the import has been run with the example CSV file.

![](../observation-codes-csv-api.assets/ae6a07dce32ff15f74570760117ea338.png)

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in the {{% system-name %}} system.

[The Observation Codes CSV API specifications are available here.](https://docs.google.com/spreadsheets/d/1ouZFU3lVQWSrvR1G3J9d7YLz-S3S0whUEEC_bIOrIHY/edit#gid=0)

{{% note %}}
The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.
{{% /note %}}

Additionally, user instructions are available for importing data into the {{% sys-name %}} system.

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.

### Field Requirements

The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Observation Codes CSV API specification. Additional details and considerations are provided here.

**Required**

The following field is required:

* <em>Observation Name</em> (observation_codes.obs_name) is used to uniquely identify an observation code record.

**Best Practice**

Although this information is not required, it is considered a best practice to use at least some of these fields to better specify information in the observation code:

* <em>Observation Code</em> (observation_codes.obs_code) is the unique numerical id value of the observation code record. If this is given, a mapping of the <em>Vendor Result Code</em> (observation_codes.hl7_code) will be created to this value. This is useful when the observation code of the same name already exists in the system and merely a new mapping for the given vendor(lab) is desired.
* <em>Observation Type</em> (observation_codes.obs_type) is the type of data that the observation is storing; 'DATETIME' for dates/datetimes, 'DECIMAL' for numeric values, & 'TEXT' for results that won't have any formatting constraints.
* <em>Vendor Result Code</em> (observation_codes.hl7_code) is the code used by the vendor(lab) when sending a result of this observation.
* <em>Observation Range</em> (observation_codes.obs_range) is the range of values that would be considered 'normal' for this observation. The units of this range will be specified by the <em>Units</em> (observation_codes.obs_units) field.
* <em>Units</em> (observation_codes.obs_range) specifies the default unit of the observation as well as the <em>Observation Range</em> (observation_codes.obs_range).
* <em>LOINC Code</em> (observation_codes.loinc_num) specifies the globally recognized identifier as outlined by LOINC.

**Optional Fields**

* <em>Template ID</em> (observation_codes.template_id) specifies the CDA/CCD section where the observation appears.
* <em>Target Type</em> (observation_codes.target_type) specifies the type of comparison that is done with the result. Options are 'target', 'range', & 'abrange'. If 'range' or 'abrange' is specified, no value need be specified for the <em>Target</em> field, but rather the <em>Observation Range</em> field. 'range' looks at the Observation Range as the normal range of values whereas 'abrange' treats it as the abnormal range of values.
* <em>Target</em> (observation_codes.target) is the specific target value desired. Only applicable if <em>Target Type</em> is 'target'.
* <em>English Units</em> (observation_codes.english_units) specifies the desired unit to be used when displaying the result and the user's Preferred Unit System is 'English'.
* <em>Metric Units</em> (observation_codes.metric_units) specifies the desired unit to be used when displaying the result and the user's Preferred Unit System is 'Metric'.

## Example

Example using sample data is provided on [Example tab in the specification.](https://docs.google.com/spreadsheets/d/1ouZFU3lVQWSrvR1G3J9d7YLz-S3S0whUEEC_bIOrIHY/edit#gid=0)

## Related Pages

* [Data Import Master List](data-import-master-list.md)
