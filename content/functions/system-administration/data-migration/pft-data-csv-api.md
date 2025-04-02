---
id: '1DUt0OeVBqIqltcPnvfiIuZ_4zvvX5E8Y4JvqlUV9l2o'
title: 'PFT Data CSV API'
date: '2024-12-18T15:29:22.518Z'
version: 54
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-overview/'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit?usp=sharing'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-standards/'
  - 'https://www.lucidchart.com/documents/view/4962ac3b-8b0e-46a1-9c2b-549ef7ea93c7'
  - 'https://docs.google.com/spreadsheets/u/1/d/1puny4jyXhZKsmZQFpDn1M5fk7MwyDh9HLPaHDFMOb-g/pub'
  - 'https://docs.google.com/spreadsheets/d/1puny4jyXhZKsmZQFpDn1M5fk7MwyDh9HLPaHDFMOb-g/pub?output=csv'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-master-list/'
source: 'https://drive.google.com/open?id=1DUt0OeVBqIqltcPnvfiIuZ_4zvvX5E8Y4JvqlUV9l2o'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) for spirometry (pulmonary function tests) using the PFT Data CSV API.

### Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the PFT Data CSV API. Technical details are provided in the remaining sections.

### Abstract

PFT data is stored for individual employees, along with information on the employee's height and weight to compare to predicted results. The PFT Data CSV API imports data related to spirometry.

CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-overview/) page for a more detailed explanation of terminology.

## Workflow Considerations

One consideration for importing PFT data is predicted values used in testing.

### How Are Predicted Values Added in EH?

When results come from a legacy interface and are imported using the CSV API, or from a pulmonary testing machine, predicted values need to be passed from the interface. Predicted values are not calculated within EH for these cases. EH relies on the demographics data that was entered on the machine or into the legacy database, and the predicted values calculated there are stored in EH as-is.

If PFT numbers are ever added directly into EH via the pulmonary layout, then predicted values are calculated using a few of the prediction methods via Javascript within the layout and stored on the PFT table within EH. Demographics information stored in EH charts are used to calculate the predicted values for manual entry.

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.

The PFT Data CSV API specifications are available here: [[1]](https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/edit?usp=sharing)

{{% tip %}}
The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.

Additionally, user instructions are available for importing data in EH.
{{% /tip %}}

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-standards/) page.

### Field Requirements

The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Summary Documents CSV API specification. Additional details and considerations are provided here.

#### Required

The following fields are required:

* <em>Chart ID</em> (documents.pat_id) and <em>Chart ID Type</em> (documents.pat_id_type) are used to to correctly identify a chart.
* <em>External ID</em> (documents.ext_doc_id): Identifies a record in the original data source (i.e., this is often the primary or unique key on the table of the legacy database that is being migrated to the MIE system).
* <em>Test Date/Time</em> (pft.test_datetime):The date (datetime) the PFT was performed. Also sets documents.service_date.
* <em>FVC</em> (pft_maneuver.fvc): Records the forced vital capacity (FVC - total volume expelled from lungs). Enter volume in milliliters (mL).

#### Optional Fields

The following optional fields are needed to link the document to a patient encounter:

* <em>Encounter External Identifier</em> (encounters.ext_id)
* <em>Encounter Interface</em> (encounters.interface)

Including the field encounter order_id will also create an encounter order of the identified in the field.

## EER Diagram

[Source](https://www.lucidchart.com/documents/view/4962ac3b-8b0e-46a1-9c2b-549ef7ea93c7)

## Examples

The following examples are available:

* [Google sheet](https://docs.google.com/spreadsheets/u/1/d/1puny4jyXhZKsmZQFpDn1M5fk7MwyDh9HLPaHDFMOb-g/pub)
* [Downloadable CSV](https://docs.google.com/spreadsheets/d/1puny4jyXhZKsmZQFpDn1M5fk7MwyDh9HLPaHDFMOb-g/pub?output=csv)

## Related Pages

* [Data Import Master List](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-master-list/)
