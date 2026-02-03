---
id: "16GPTNe8X-gfZywsQSEG5rOD6ccCOx283XiGJ9l9NfOw"
title: "Create PFT Data File for Import"
date: "2025-11-13T16:29:18.565Z"
version: 56
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/"
  - "https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-tab/"
  - "https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/export?format=csv&id=1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM&gid=613534971"
  - "https://drive.google.com/open?id=1U3Fqg47vEiggMI9FSFuqz1aiLVv5c8kSEbKHmV1Wh7Y"
source: "https://drive.google.com/open?id=16GPTNe8X-gfZywsQSEG5rOD6ccCOx283XiGJ9l9NfOw"
wikigdrive: "v2.15.30"
---

This document explains how to import your pulmonary function testing data into {{% system-name %}} .

What you will need:

- Spreadsheet software (Microsoft Excel or Google Sheets)
- PFT Data CSV File Example
- {{% system-name %}} end user with administrative rights

## Create PFT Data CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.

<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
<td>Data File Column Header</td>
</tr>
<tr>
<td>Employee ID</td>
<td>Employee Identifier. This field will be used for looking up the chart in {{% system-name %}} , to insert or update.</td>
<td><strong>Required</strong></td>
<td>documents.pat_id</td>
</tr>
<tr>
<td>External ID</td>
<td>This is a unique identifier typically populated by third-party interfaces from which the document originated.</td>
<td><strong>Required</strong></td>
<td>documents.ext_doc_id</td>
</tr>
<tr>
<td>Test Datetime</td>
<td>When (datetime) the PFT was performed. Must be formatted as YYYY-MM-DD HH:MM:SS</td>
<td><strong>Required</strong></td>
<td>pft.test_datetime</td>
</tr>
<tr>
<td>PFT Maneuver Datetime</td>
<td>Datetime of PFT maneuver. Must be formatted as YYYY-MM-DD HH:MM:SS</td>
<td><strong>Required</strong></td>
<td>pft_maneuver.meneuver_datetime</td>
</tr>
<tr>
<td>FVC</td>
<td>Records the forced vital capacity (FVC) , the total volume expelled from lungs. Enter volume in milliliters (mL).</td>
<td><strong>Required</strong></td>
<td>pft_maneuver.fvc</td>
</tr>
<tr>
<td>FVC Predicted</td>
<td>Records the predicted value for FVC. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.fvc_predicted</td>
</tr>
<tr>
<td>FEV1</td>
<td>Records the forced expiratory volume (FEV). Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.fev1</td>
</tr>
<tr>
<td>FEV1 Predicted</td>
<td>Records the predicted value for the FEV for the first second of the test. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.fev1_predicted</td>
</tr>
<tr>
<td>FEF25%-75%</td>
<td>Records the forced expiratory flow (FEF) from 25% to 75% of test, or the middle 50% of test. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.fef25_75</td>
</tr>
<tr>
<td>FEF25%-75% Predicted</td>
<td>Records the predicted value for FEF from 25% to 75% of test. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.fef25_75_predicted</td>
</tr>
<tr>
<td>FEV1/FVC</td>
<td>Records the lower limit of normal for the first second of FEV over the FVC.</td>
<td>Optional</td>
<td>pft_maneuver.fev1_fvc</td>
</tr>
<tr>
<td>FEV1/FVC Predicted</td>
<td>Records the predicted value for the first second of FEV over the FVC.</td>
<td>Optional</td>
<td>pft_maneuver.fev1_fvc_predicted</td>
</tr>
<tr>
<td>PEF</td>
<td>Records the lower limit of normal for PEF. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.pef</td>
</tr>
<tr>
<td>PEF Predicted</td>
<td>Records the predicted value for PEF. Enter volume in milliliters (mL).</td>
<td>Optional</td>
<td>pft_maneuver.pef_predicted</td>
</tr>
<tr>
<td>Spirometer</td>
<td>Model of spirometer.</td>
<td>Optional</td>
<td>pft.spirometer</td>
</tr>
<tr>
<td>Interpretation</td>
<td>Interpretation of a test (by device).</td>
<td>Optional</td>
<td>pft_maneuver.interpretation</td>
</tr>
<tr>
<td>Comment</td>
<td>Free text comment for PFT. This field may be repeated in the CSV file. Comments would be handled in-order and separated by a newline.</td>
<td>Optional</td>
<td>pft.comment</td>
</tr>
</table>

{{% tip %}}
_For a more comprehensive list of supported fields, please refer to the_ [_PFT Data CSV API Specification_](https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/)
{{% /tip %}}

2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents a pulmonary function test record. Below is a screenshot of the PFT Data CSV File Example for guidance.

![](./create-pft-data-file-for-import.assets/5f64a31781e850897d6720b84d7bb4e2.png)

3. Save the file as CSV format.

## Upload PFT Data CSV File

1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.

![](./create-pft-data-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)

3. Select the [Data Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-tab/) tab.

![](./create-pft-data-file-for-import.assets/197af282190b350e97494ffba0636d29.png)

4. Select <strong>PFT Data CSV API</strong> from the drop-down menu and click <strong>Go</strong>.

![](./create-pft-data-file-for-import.assets/30d41df38dfbd6662a6ce0a367d7c487.png)

5. Select the PFT Data CSV File and click <strong>Upload</strong>.

   ![](./create-pft-data-file-for-import.assets/78193ae652252ee583b49d05b8681478.png)

{{% tip %}}
For extra information on what happens during the import, click the **Verbose** checkbox.
{{% /tip %}}

## Resources

- [PFT Data CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/)
- [PFT Data CSV File Example](https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/export?format=csv&id=1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM&gid=613534971)
- [Validation script for PFT data](https://drive.google.com/open?id=1U3Fqg47vEiggMI9FSFuqz1aiLVv5c8kSEbKHmV1Wh7Y)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
