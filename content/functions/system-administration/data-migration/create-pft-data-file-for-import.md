---
id: '16GPTNe8X-gfZywsQSEG5rOD6ccCOx283XiGJ9l9NfOw'
title: 'Create PFT Data File for Import'
date: '2020-03-17T02:47:24.604Z'
version: 35
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/'
  - 'https://system/f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
  - 'https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/export?format=csv&id=1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM&gid=613534971'
  - 'https://drive.google.com/open?id=1U3Fqg47vEiggMI9FSFuqz1aiLVv5c8kSEbKHmV1Wh7Y'
source: 'https://drive.google.com/open?id=16GPTNe8X-gfZywsQSEG5rOD6ccCOx283XiGJ9l9NfOw'
wikigdrive: 'b7222904e37143b515987f6e0f083f595990e37a'
menu:
  main:
    name: 'Create PFT Data File for Import'
    identifier: '16GPTNe8X-gfZywsQSEG5rOD6ccCOx283XiGJ9l9NfOw'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4770
---
This document explains how to import your pulmonary function testing data into {{% system-name %}} .
What you will need:
* Spreadsheet software (Microsoft Excel or Google Sheets)
* PFT Data CSV File Example
{{% system-name %}}*  end user with administrative rights

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
*For a more comprehensive list of supported fields, please refer to the* [*PFT Data CSV API Specification*](https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/)
{{% /tip %}}

2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents a pulmonary function test record. Below is a screenshot of the PFT Data CSV File Example for guidance.


![](../create-pft-data-file-for-import.assets/10000201000003A400000079320A07FD81770960.png)


3. Save the file as CSV format.

## Upload PFT Data CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.


![](../create-pft-data-file-for-import.assets/10000201000000BC00000116A7BD67E0C474E6E6.png)


3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.


![](../create-pft-data-file-for-import.assets/10000201000001100000006549C20A8099BBAE2C.png)


4. Select <strong>PFT Data CSV API</strong> from the drop-down menu and click <strong>Go</strong>.


![](../create-pft-data-file-for-import.assets/100002010000015600000081517C1C7B0D029709.png)


5. Select the PFT Data CSV File and click <strong>Upload</strong>.

   <img src="../create-pft-data-file-for-import.assets/100002010000013D000000AE0AAC0D6367E15EE4.png" />


{{% tip %}}

*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}

## Resources

* [PFT Data CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/)
* [PFT Data CSV File Example](https://docs.google.com/spreadsheets/d/1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM/export?format=csv&id=1uvP3Yi7uhMrvp_Ba_OBywXdElPLYzGNG9SRA7s2YqBM&gid=613534971)
* [Validation script for PFT data](https://drive.google.com/open?id=1U3Fqg47vEiggMI9FSFuqz1aiLVv5c8kSEbKHmV1Wh7Y)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
