---
id: "1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M"
title: "Data Import Standards"
date: "2025-12-01T22:12:50.653Z"
version: 183
lastAuthor: "nwallace"
mimeType: "text/x-markdown"
links:
  - "https://docs.google.com/a/mieweb.com/spreadsheets/d/1WqdIEGETaoa0RFPUazvKp5JfX-gYEIfzyQ8jtApwFq8/edit?usp=sharing"
  - "https://docs.google.com/spreadsheets/d/1sSzJZ7izQBpfv1VL1vVQjNn8NUrbE2hUtqxvDj_bGus/edit"
  - "https://www.iso.org/obp/ui/"
  - "http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm"
  - "http://www.cdc.gov/nchs/data/dvs/Race_Ethnicity_CodeSet.pdf"
  - "chart-data-csv-header-options.md"
source: "https://drive.google.com/open?id=1WLg2T3kafPU5DrzAkrTOOMQm_2iTyBV1dJWa2ttHu2M"
wikigdrive: "v2.15.30"
---

The following columns display in standardized data import specifications:

- <strong>Field Name</strong> - The name for the specific field and what should be the column header in the file. Often from the related database column name.
- <strong>Type (Length)</strong>- Identifies what type of value should be sent in this field and the maximum length the field can hold. Updated information available in db model, otherwise [follow link to model spreadsheet.](https://docs.google.com/a/mieweb.com/spreadsheets/d/1WqdIEGETaoa0RFPUazvKp5JfX-gYEIfzyQ8jtApwFq8/edit?usp=sharing)
- <strong>Required</strong> - Indicates if a field is required. Options include:
  - R - required: Data is required for import to function.
  - O - optional: Data is optional for import.
  - BP - best practice: Data is not required, but provides better usability within EH.
  - CR - conditionally required: Data is required based on conditions defined in spec. Include details for conditionally required data in this column as needed.
- <strong>Description</strong> - Description of imported information. Retrieved from db model or model spreadsheet (see link under Type).
- <strong>Example</strong> - Example field contents.
- <strong>Data File Column Name Header</strong> - Name of column header in CSV file.
- <strong>Displays in EH?</strong> - Yes/No - Indicates if field displays in the EH system.
- <strong>Client Using</strong> - Indicates if client will use field in their EH system.
- <strong>Client Notes</strong> - Open for client use to document questions.
- <strong>MIE Notes</strong> - Open for MIE use to document questions.
- <strong>MIE Wiki Link</strong> - URL to MIE Wiki page with related information.
- <strong>MIE Legacy Field #</strong> - (Use if applicable.) Order of columns from older MIE spec.

Older specifications may display different columns or a different order. The standard specification template is available [here.](https://docs.google.com/spreadsheets/d/1sSzJZ7izQBpfv1VL1vVQjNn8NUrbE2hUtqxvDj_bGus/edit#gid=0)

CSV API wiki pages refer to data as it is named in the Field Name column of the specification, accompanied by the Data File Column Name Header in parentheses. This aides in tying together the details of the specification with the CSV template file used for the import. For example, *Name Value Pairs* (name_value.NAME)

## Specific Coded Values

The following fields require specific codes to represent specific values, and the data won't be displayed properly in a MIE system if the specific codes are not used.

### State

ISO 2 letter state code (ISO 3166-2) - https://www.iso.org/obp/ui/#iso:code:3166:US \*

### Country

ISO 2 letter country code (ISO 3166-1-alpha-2) - http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm

### Race

CDC Race codes - http://www.cdc.gov/nchs/data/dvs/Race_Ethnicity_CodeSet.pdf

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>R1</td>
<td>American Indian</td>
</tr>
<tr>
<td>R2</td>
<td>Asian</td>
</tr>
<tr>
<td>R3</td>
<td>African American</td>
</tr>
<tr>
<td>R4</td>
<td>Hawaiian / Pacific Islander</td>
</tr>
<tr>
<td>R5</td>
<td>White</td>
</tr>
<tr>
<td>R9</td>
<td>Other</td>
</tr>
<tr>
<td>NA</td>
<td>Declined to Answer</td>
</tr>
</table>

**Ethnicity**

CDC Ethnicity codes - http://www.cdc.gov/nchs/data/dvs/Race_Ethnicity_CodeSet.pdf

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>E1</td>
<td>Hispanic or Latino</td>
</tr>
<tr>
<td>E2</td>
<td>Not Hispanic or Latino</td>
</tr>
<tr>
<td>NA</td>
<td>Declined to Answer</td>
</tr>
</table>

**Sex**

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>M</td>
<td>Male</td>
</tr>
<tr>
<td>F</td>
<td>Female</td>
</tr>
<tr>
<td>A</td>
<td>Ambiguous</td>
</tr>
<tr>
<td>N</td>
<td>Not applicable</td>
</tr>
<tr>
<td>O</td>
<td>Other</td>
</tr>
<tr>
<td>U</td>
<td>Unknown</td>
</tr>
</table>

**Marital Status**

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>M</td>
<td>Married</td>
</tr>
<tr>
<td>S</td>
<td>Single</td>
</tr>
<tr>
<td>D</td>
<td>Divorced</td>
</tr>
<tr>
<td>W</td>
<td>Widowed</td>
</tr>
<tr>
<td>A</td>
<td>Legally Separated</td>
</tr>
<tr>
<td>C</td>
<td>Common Law</td>
</tr>
</table>

**Full/Part Time Employment Status**

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>F</td>
<td>Full-Time Employee</td>
</tr>
<tr>
<td>P</td>
<td>Part-Time Employee</td>
</tr>
</table>

**User ID Types**

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>id:username</td>
<td>Webchart username</td>
</tr>
<tr>
<td>id:uid</td>
<td>Universal ID</td>
</tr>
<tr>
<td>id:npi</td>
<td>Nation Provider ID</td>
</tr>
<tr>
<td>id:user_id</td>
<td>Internal Webchart User ID</td>
</tr>
</table>

**Patient ID Types**

<table>
<tr>
<td>Code</td>
<td>Description</td>
</tr>
<tr>
<td>id:username</td>
<td>Webchart username</td>
</tr>
<tr>
<td>id:ext_id</td>
<td>External Identifier</td>
</tr>
<tr>
<td>id:ssn</td>
<td>Social Security Number (US)</td>
</tr>
<tr>
<td>id:sin</td>
<td>Social Insurance Number (Canada)</td>
</tr>
<tr>
<td>id:email</td>
<td>email address</td>
</tr>
<tr>
<td>id:pat_id</td>
<td>Internal Webchart Patient ID</td>
</tr>
</table>

## Data Import User Instructions

The following instructions detail how to import data into an EH system using a CSV file.

{{% note %}}
These instructions apply only to a CSV file input. If the file you need to convert from is different, or if the client requests fields to be imported that are not covered by the generic data import format, the data must be imported differently.
{{% /note %}}

### Accessing Data Import

To access the data import template:

1. Access the left side menu by clicking the menu icon.
2. Click the Control Panel tab.
3. Click the Data Import tab.
4. Select the appropriate from the drop-down menu. (Example displays generic data import).
5. Click the Go button.

#### Template File

Use the template file to establish the required columns and formats for the data import file. Click on the CSV Import Specification link for details about setting up the file.

### Import Testing

The import file must be stored as a CSV. If prompted by Excel to save as a different format, make sure the file is saved as a CSV. It is best to first test with only a few rows of data before importing an entire file. Then, if the data imports successfully, delete the rows you just loaded from the original file so that they are not duplicated. To complete a test import:

1. Input the following information into corresponding fields to upload the form:
   1. <strong>Interface</strong>: hr_feed
   2. <strong>Verbose</strong>: Select the Verbose checkbox to see the logging of the import. Usually only needed if there are errors.
   3. <strong>Delimiter</strong>: select from drop list
   4. <strong>Choose/Upload File</strong>: Select the file you're importing.
   5. Click the <strong>Upload</strong> button.

Any errors encountered during the import display on the import page. Click the Download Failed Generic Test Data File button to view the error file. This file is useful because it only contains the records from the data file that had issues. These issues can be identified and fixed and then the failed file can be uploaded to fill in the gap.

## CSV Header Options

[Chart Data CSV Header Options](chart-data-csv-header-options.md)

{{% anchor sys="data-import-user-instructions" %}}
