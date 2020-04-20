---
title: "Create Health Surveillance File for Import"
date: 2020-03-17T02:39:10.700Z
url: "general-functionality/system-administration/data-migration/create-health-surveillance-file-for-import.html"
author: Jeremia Ploor
version: 26
id: 1fOpOgUVCm1HHYNzZtFXrsYYmXLeEXK6McovQn-bTgQY
source: https://drive.google.com/open?id=1fOpOgUVCm1HHYNzZtFXrsYYmXLeEXK6McovQn-bTgQY
---
This document explains how to import your health surveillance data into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Health Surveillance CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Health Surveillance CSV File

* The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.Note Required and Best Practice columns for the Health Surveillance CSV file.



<table>
  <tr>
    <td>
**Field Name**

    </td>
    <td>
**Description**

    </td>
    <td>
**Requirement**

    </td>
    <td>
**Column Header Name**

    </td>
  </tr>
  <tr>
    <td>
Employee ID

    </td>
    <td>
Employee Identifier

    </td>
    <td>
**Required**

    </td>
    <td>
patient_panel_status.pat_id

    </td>
  </tr>
  <tr>
    <td>
External ID

    </td>
    <td>
 

    </td>
    <td>
**Required**

    </td>
    <td>
patient_panel_status.ext_id

    </td>
  </tr>
  <tr>
    <td>
Panel ID

    </td>
    <td>
 

    </td>
    <td>
**Required**

    </td>
    <td>
patient_panel_status.panel_id

    </td>
  </tr>
  <tr>
    <td>
Surveillance Schedule Status

    </td>
    <td>
Possible values:

current

history

deleted

    </td>
    <td>
**Required**

    </td>
    <td>
patient_panel_status.rec_status

    </td>
  </tr>
  <tr>
    <td>
Test Outcome Status

    </td>
    <td>
Possible values:

pending

complete

fit

fitrestrict: Fit with restrictions

notfit

overdue

failcomply: Failure to comply

    </td>
    <td>
**Required**

    </td>
    <td>
patient_panel_status.status

    </td>
  </tr>
  <tr>
    <td>
Effective Date

    </td>
    <td>
When the status went into effect

    </td>
    <td>
Best Practice

    </td>
    <td>
 patient_panel_status.effective_dt

    </td>
  </tr>
  <tr>
    <td>
Next Due

    </td>
    <td>
Next due date for panel

    </td>
    <td>
Best Practice

    </td>
    <td>
patient_panel_status.next_due 

    </td>
  </tr>
  <tr>
    <td>
Panel Membership Start Date

    </td>
    <td>
If a date is provided, this chart will be added as a member to the panel effective the specified start date. If the chart is not an active member of the panel (EG, the record is historical), then no Panel Membership Start Date should be specified.

    </td>
    <td>
Best Practice

    </td>
    <td>
patient_panel_status.pm_start_dt 

    </td>
  </tr>
</table>

{{% tip %}}

*For a more comprehensive list of supported fields, please refer to the *[Patient Panel Status CSV API Specification](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/)*.*

{{% /tip %}}


* Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Health Surveillance CSV File Example for guidance.



![](../../../external_files/483a01771f506be4900663e64ec098a2.png)



* Save the file as CSV format.

## Upload Health Surveillance CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.



![](../../../external_files/f7321acaa475d389413c8960f680181a.png)



3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.



![](../../../external_files/6ad90004bcde1af68316b8ca0dc908ba.png)



4. Select <strong>Patient Panel Status CSV API</strong> from the drop-down menu and click <strong>Go</strong>.



![](../../../external_files/c2dae99efdec3e52fd697f3eea7e3abe.png)



5. Select the Health Surveillance CSV File and click <strong>Upload</strong>.



![](../../../external_files/9a0563b4e22b891467a5929bf13ae6e6.png) 

{{% tip %}}

*For extra information on what happens during the import, click the ***_Verbose_*** checkbox.*

{{% /tip %}}


## Resources

* [Patient Panel Status CSV API Specification](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/)
* [Health Surveillance CSV File Example](https://docs.google.com/spreadsheets/d/1kvKRTnK8BKIgF1wVeAQT_VNQ8uDR9UVEJvzDnuk2_T0/export?format=csv&gid=1187733888)
* [Health Surveillance Validation Instructions](https://docs.google.com/document/d/1_v-i2Qg_HKrNN0__NryeamUQuoNLyGrOI2XQrc2EPVU/edit#heading=h.9xf10guyyvpr)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

