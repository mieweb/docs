---
id: '1fOpOgUVCm1HHYNzZtFXrsYYmXLeEXK6McovQn-bTgQY'
title: 'Create Health Surveillance File for Import'
date: '2020-03-17T02:39:10.700Z'
version: 45
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
  - 'https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/export?format=csv&gid=1187733888'
  - 'https://drive.google.com/open?id=1_v-i2Qg_HKrNN0__NryeamUQuoNLyGrOI2XQrc2EPVU'
source: 'https://drive.google.com/open?id=1fOpOgUVCm1HHYNzZtFXrsYYmXLeEXK6McovQn-bTgQY'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
This document explains how to import your health surveillance data into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Health Surveillance CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Health Surveillance CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.Note Required and Best Practice columns for the Health Surveillance CSV file.

<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
<td><strong>Column Header Name</strong></td>
</tr>
<tr>
<td>Employee ID</td>
<td>Employee Identifier</td>
<td><strong>Required</strong></td>
<td>patient_panel_status.pat_id</td>
</tr>
<tr>
<td>External ID</td>
<td></td>
<td><strong>Required</strong></td>
<td>patient_panel_status.ext_id</td>
</tr>
<tr>
<td>Panel ID</td>
<td></td>
<td><strong>Required</strong></td>
<td>patient_panel_status.panel_id</td>
</tr>
<tr>
<td>Surveillance Schedule Status</td>
<td>Possible values:<br />
current<br />
history<br />
deleted</td>
<td><strong>Required</strong></td>
<td>patient_panel_status.rec_status</td>
</tr>
<tr>
<td>Test Outcome Status</td>
<td>Possible values:<br />
pending<br />
complete<br />
fit<br />
fitrestrict: Fit with restrictions<br />
notfit<br />
overdue<br />
failcomply: Failure to comply</td>
<td><strong>Required</strong></td>
<td>patient_panel_status.status</td>
</tr>
<tr>
<td>Effective Date</td>
<td>When the status went into effect</td>
<td>Best Practice</td>
<td>patient_panel_status.effective_dt</td>
</tr>
<tr>
<td>Next Due</td>
<td>Next due date for panel</td>
<td>Best Practice</td>
<td>patient_panel_status.next_due</td>
</tr>
<tr>
<td>Panel Membership Start Date</td>
<td>If a date is provided, this chart will be added as a member to the panel effective the specified start date. If the chart is not an active member of the panel (EG, the record is historical), then no Panel Membership Start Date should be specified.</td>
<td>Best Practice</td>
<td>patient_panel_status.pm_start_dt</td>
</tr>
</table>

{{% tip %}}
*For a more comprehensive list of supported fields, please refer to the* [*Patient Panel Status CSV API Specification*](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/)*.*
{{% /tip %}}

2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Health Surveillance CSV File Example for guidance.

![](../create-health-surveillance-file-for-import.assets/32e4d7c298d82e3ac0113d078ee7827f.png)

3. Save the file as CSV format.

## Upload Health Surveillance CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.

![](../create-health-surveillance-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)

3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.

![](../create-health-surveillance-file-for-import.assets/197af282190b350e97494ffba0636d29.png)

4. Select <strong>Patient Panel Status CSV API</strong> from the drop-down menu and click <strong>Go</strong>.

![](../create-health-surveillance-file-for-import.assets/184adff065510b3014a3b5f0a44c0f4b.png)

5. Select the Health Surveillance CSV File and click <strong>Upload</strong>.

![](../create-health-surveillance-file-for-import.assets/812d200f86320e164fda882c04c16eed.png)

{{% tip %}}
*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}

## Resources

* [Patient Panel Status CSV API Specification](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/)
* [Health Surveillance CSV File Example](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/export?format=csv&gid=1187733888)
* [Health Surveillance Validation Instructions](https://drive.google.com/open?id=1_v-i2Qg_HKrNN0__NryeamUQuoNLyGrOI2XQrc2EPVU#heading=h.9xf10guyyvpr)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
