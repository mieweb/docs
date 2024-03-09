---
id: '1SxK7srGGnHEu_j3yENZoNf51Uy53jy0g0iDpJZLobeM'
title: 'Allergy Data Validation Test Script'
date: '2020-02-27T21:32:57.175Z'
version: 30
lastAuthor: 'Alan Quandt'
mimeType: 'text/x-markdown'
links:
  - '../../e-chart/basic-initial-system-information.md'
  - '../../e-chart/detailed-searching-in-e-chart.md'
  - 'https://drive.google.com/open?id=1-PoLE-uKdtcT7hEhc7aH3FLNuipu9RMw'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0'
  - 'https://drive.google.com/open?id=1-NeQexrq2pMf_U4EFzoRTengEOjEp_2U'
  - '../../reports/using-datavis-grids-data-tools.md'
source: 'https://drive.google.com/open?id=1SxK7srGGnHEu_j3yENZoNf51Uy53jy0g0iDpJZLobeM'
wikigdrive: 'c35d35a9fcc46b2c2392b52072ee14a218f1010a'
---
This document is intended to describe and assist users with the process to validate medication allergies imported from another system. The {{% system-name %}} system uses the Visit encounter to display the details related to a visit. 

{{% tip %}}
Within each chart, the encounter has separate sections that show the allergies, intolerances, and medications on one page.
{{% /tip %}}

## Requirements


* Compile a list of 5-10 different charts containing multiple allergies/intolerances data from the legacy/existing system. Ensure the examples include varied complexity and multiple years of data, to address potential import discrepancies that could arise. 
* Multiple monitors are recommended to assist with comparing legacy data to the data imported to {{% system-name %}} . 


## Data Fields

Validate the discrete values imported to {{% system-name %}} , listed in the table below. 

{{% note %}}
Some charts/records may not have all data elements, and in some circumstances, there may be additional data to validate. Check with the {{% system-name %}} superuser for details.
{{% /note %}}


<table>
<tr>
<td><strong>Field</strong></td>
<td><strong>Description</strong></td>
<td><strong>Sample Data</strong></td>
</tr>
<tr>
<td><strong>Allergy Name</strong></td>
<td>Name of allergy to validate</td>
<td>Vicodin</td>
</tr>
<tr>
<td><strong>Alternate Name</strong></td>
<td>Alternative name of allergy</td>
<td>hydrocodone-acetaminophen</td>
</tr>
<tr>
<td><strong>Type</strong></td>
<td>Type of allergy
Options include:
<ul><li><p>Medication</p></li><li><p>Other</p></li></ul></td>
<td>Medication</td>
</tr>
<tr>
<td><strong>Allergy or Intolerance</strong></td>
<td>Allergy/Intolerance flag
Options include:
<ul><li><p>Allergy</p></li><li><p>Intolerance</p></li></ul></td>
<td>Allergy</td>
</tr>
<tr>
<td><strong>Reaction/Reason</strong></td>
<td>Records the reaction or response to the allergy/intolerance being documented</td>
<td>Rash, Itching</td>
</tr>
<tr>
<td><strong>Start Date</strong></td>
<td>When the allergy/intolerance was first noted</td>
<td>10/10/2010</td>
</tr>
<tr>
<td><strong>End Date</strong></td>
<td>The date on which the allergy/intolerance was noted to stop</td>
<td></td>
</tr>
<tr>
<td>Entered By</td>
<td>Initials of the user entering allergy/intolerance data</td>
<td>BB</td>
</tr>
<tr>
<td>Date Modified</td>
<td>Records the last date the allergy was modified</td>
<td>3/4/2015 8:00</td>
</tr>

</table>

## Validation Instructions


1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

   ![](../allergy-data-validation-test-script.assets/52f73ae40dc37122cc526f2bbb6020ab.png)

{{% tip %}}
   1. Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
   2. Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.md) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.md).)

{{% /tip %}}

3. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

   ![](../allergy-data-validation-test-script.assets/3b6e81d53b6a76b60742edeec867658b.png)



4. Select <strong>Allergies/Medications</strong> from the Medical Record chart tab.

   ![](../allergy-data-validation-test-script.assets/3e3a569788287f0ab5e976e5bc3610a2.png)



5. Review the same patient in the legacy system and perform a side-by-side comparison. With the allergies and medications displayed, begin comparing the data by toggling between the legacy system and the {{% system-name %}} system and validate. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import. ([video](https://drive.google.com/open?id=1-PoLE-uKdtcT7hEhc7aH3FLNuipu9RMw))


   1. Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record exact matches (Pass) and any discrepancies or differences (Fail). ([video](https://drive.google.com/open?id=1-NeQexrq2pMf_U4EFzoRTengEOjEp_2U))
   2. Contact {{% system-name %}} with the findings.



## Reports

The **Allergy Report** and **Allergy Report - DV** can both be particularly helpful in validating data between systems.
**Allergy Report:** A columnar list of allergies and/or intolerances, based on specific criteria entered. For data validation efforts, it may be helpful to use this report to compare to the legacy system versus bringing up each chart, individually.
**Allergy Report - DV:** Lists allergies and/or intolerances with built-in DataVis (DV) tools, such as filtering, column selection, and the ability to save report perspectives. For more information, see the [DataVis](../../reports/using-datavis-grids-data-tools.md) online help documentation.
To access and utilize these reports:

1. Navigate to the  {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}}  sidemenu.
2. Select the  {{% syslink "Medications/Allergies/Scripts" "f=layout&module=reports&name=MedsAllergiesScripts&tabmodule=reports&tabmodule=reports&t=Medications%2FAllergies%2FScripts&tabselect=Medications%2FAllergies%2FScripts" %}}  report list.

   ![](../allergy-data-validation-test-script.assets/900ac3a98042d7338093aa2698c33d88.png)



3. Criteria may be added to filter or drill down data.

   ![](../allergy-data-validation-test-script.assets/676d1259f36139c0656a87e5dad00edb.png)
