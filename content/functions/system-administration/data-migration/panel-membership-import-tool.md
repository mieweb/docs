---
id: '1kF3jZSVDWJL7AYRVYHwooNNnMdOkGy8j9ACvgEH1M0Y'
title: 'Panel Membership Import Tool'
date: '2020-03-17T03:14:54.850Z'
version: 67
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'data-import-tab.md'
  - '../../health-surveillance/health-surveillance-panels-add-memberships-manually.md'
  - 'https://system/f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
source: 'https://drive.google.com/open?id=1kF3jZSVDWJL7AYRVYHwooNNnMdOkGy8j9ACvgEH1M0Y'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
This document explains how to import your health surveillance panel membership data into {{% system-name %}} , using the Data Import tab. See our [Data Import Tab](data-import-tab.md) help documentation for more information regarding its many uses.

The Panel Membership Import Tool uses partitions and medical record numbers (MRNs) to match patients' panel information to their charts. Therefore, work with your MIE Implementer, as needed, to import panel memberships, so that all data and columns are captured correctly, before importing via this tool.

{{% warning %}}
Only use this one-time import tool if staff is going to be manually managing panel memberships on every employee (i.e., every patient being imported this method) from this point forward. When using the Panel Membership Import Tool in {{% system-name %}} , every membership gets inserted as **Explicit**. This method is essentially the same as the [manual-add method](../../health-surveillance/health-surveillance-panels-add-memberships-manually.md); however, it allows users to add several memberships, en masse, using the provided template. Please be aware, though, that this will add all memberships as Explicit.

![](../panel-membership-import-tool.assets/5cab3522106766df005f29e69b6fc35d.png)
{{% /warning %}}

The following page defines data and fields that may be imported using the panel membership import tool. It is valuable to recognize the following terminology as it pertains to {{% system-name %}} systems:

* <strong>Panel</strong> - Defines a group of events or actions that will take place on certain profiles of people on a regular schedule in the Health Surveillance module. Panels are sometimes referred to as exposure groups, as panels are used for groups exposed to certain hazards due to their job roles. The panels table is also used to document regularly scheduled voluntary health screenings or checkups. A <em>panel action</em> refers to a procedure that is completed for a patient as part of a panel.
* <strong>Panel ID</strong> - The client-identified primary key used to identify the panel.
* <strong>Partition</strong> - Often used to restrict which charts a user may access. Partitions are used to organize groups of charts.
* <strong>Trigger</strong> - Established events that are programmed in a system to set off a series of events. For example, panel actions can be set to trigger off the creation of an encounter order in the {{% system-name %}} system.
* <strong>Order</strong> - Term used loosely when any method is used to request tests, labs, radiology studies, and E-Orders.
* <strong>Encounter Order</strong> - Generated from an encounter (a patient visit) or an order that must be completed from within an encounter.

## Specifications

* {{% system-name %}} end user with administrative privileges
* Spreadsheet software for formatting the data file (e.g., Microsoft Excel or Google Sheets); data files must be formatted in Comma Separated Values (CSV)
* The first row of the file must contain column header information
* Each subsequent row represents an encounter order

## Create Panel Membership Data CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. PARTITION must be the first column in the CSV file. The order of the remaining fields does not matter.

<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td>Type</td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>PARTITION</td>
<td>Partition of the patient. This field will be used for looking up the chart in {{% system-name %}} , to insert or update.</td>
<td>char</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>MRN</td>
<td>Medical record number of patient. This is a unique identifier found on every patient chart, used for looking up the chart, to insert or update.</td>
<td>integer</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>PANEL_ID</td>
<td>The panel ID to be associated with the patient.</td>
<td>char</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>INCLUDE</td>
<td>This field determines whether to Include to panel or Exclude from panel:<br />
<ul><li><ul><li><strong>1</strong> = Include to panel</li><li><strong>0</strong> = Exclude from panel</li></ul></li></ul></td>
<td>integer</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>START_DATETIME</td>
<td>Datetime of panel membership initiation.</td>
<td>Datetime</td>
<td>Optional</td>
</tr>
<tr>
<td>CHANGE_REASON</td>
<td>If any changes are being made, this field can be used to provide a reason for the change.</td>
<td>char</td>
<td>Optional</td>
</tr>
<tr>
<td>TRIGGER_ENTRY_EXIT_ACTIONS</td>
<td>Default (1)</td>
<td>integer</td>
<td>Optional</td>
</tr>
</table>

2. Using the table, above, determine the data to be imported. Starting with the PARTITION field, enter all required and desired data, verifying required data is present. Note that each row represents a panel membership record. Below is a screenshot of the Panel Membership Data File Example for guidance.

![](../panel-membership-import-tool.assets/3fd82738893d6be993e61af6beb2add7.png)

3. Save the file as CSV format.

## Upload Panel Membership Data CSV File

1. Login as a user with administrator privileges.
2. Navigate to the [Control Panel](https://system/f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.

![](../panel-membership-import-tool.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)

3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.

![](../panel-membership-import-tool.assets/197af282190b350e97494ffba0636d29.png)

4. Select <strong>Panel Membership CSV API</strong> from the drop-down menu and click <strong>Go</strong>.

![](../panel-membership-import-tool.assets/54682425d132f1d1efa93de9f3f35eee.png)

5. Using the provided link, download the template and fill in the spreadsheet data. Save the file as CSV format.

![](../panel-membership-import-tool.assets/7cd2d5ac9362a60912c63a7f6154c069.png)

{{% tip %}}
Use the help bubble to see what panel IDs your {{% system-name %}} system has to populate into the spreadsheet template for import. *This screenshot is an example. Do not use this Panel ID ordering for your system.*
![](../panel-membership-import-tool.assets/4abf1c02d7137491533e63bef4127265.png)
{{% /tip %}}

6. Click the <strong>Choose File</strong> button, and select the panel membership data CSV file (from Step 5) and click <strong>Upload</strong>.

    ![](../panel-membership-import-tool.assets/22ab2e692fb4da43e0c888c3066ba0b2.png)

{{% tip %}}
*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
