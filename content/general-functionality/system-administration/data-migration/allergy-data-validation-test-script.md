---
title: "Allergy Data Validation Test Script"
date: 2020-02-27T21:32:57.175Z
url: "general-functionality/system-administration/data-migration/allergy-data-validation-test-script.html"
author: Alan Quandt
version: 19
id: 1SxK7srGGnHEu_j3yENZoNf51Uy53jy0g0iDpJZLobeM
source: https://drive.google.com/open?id=1SxK7srGGnHEu_j3yENZoNf51Uy53jy0g0iDpJZLobeM
menu:
    main:
        name: "Allergy Data Validation Test Script"
        identifier: "1SxK7srGGnHEu_j3yENZoNf51Uy53jy0g0iDpJZLobeM"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5200
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
    <td>
**Field**    </td>
    <td>
**Description**    </td>
    <td>
**Sample Data**    </td>
  </tr>
  <tr>
    <td>
**Allergy Name**    </td>
    <td>
Name of allergy to validate    </td>
    <td>
Vicodin    </td>
  </tr>
  <tr>
    <td>
**Alternate Name**    </td>
    <td>
Alternative name of allergy    </td>
    <td>
hydrocodone-acetaminophen    </td>
  </tr>
  <tr>
    <td>
**Type**    </td>
    <td>
Type of allergy

Options include:

* Medication
* Other    </td>
    <td>
Medication    </td>
  </tr>
  <tr>
    <td>
**Allergy or Intolerance**    </td>
    <td>
Allergy/Intolerance flag

Options include:

* Allergy
* Intolerance    </td>
    <td>
Allergy    </td>
  </tr>
  <tr>
    <td>
**Reaction/Reason**    </td>
    <td>
Records the reaction or response to the allergy/intolerance being documented    </td>
    <td>
Rash, Itching    </td>
  </tr>
  <tr>
    <td>
**Start Date**    </td>
    <td>
When the allergy/intolerance was first noted    </td>
    <td>
10/10/2010    </td>
  </tr>
  <tr>
    <td>
**End Date**    </td>
    <td>
The date on which the allergy/intolerance was noted to stop    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
Entered By    </td>
    <td>
Initials of the user entering allergy/intolerance data    </td>
    <td>
BB    </td>
  </tr>
  <tr>
    <td>
Date Modified    </td>
    <td>
Records the last date the allergy was modified    </td>
    <td>
3/4/2015 8:00    </td>
  </tr>
</table>

## Validation Instructions

* Log into the {{% system-name %}} system.
* Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.  ![](../../../external_files/ba2565ae7f28ae2bc3deb4d5c9e480f3.png)  {{% tip %}}
    * Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
    * Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.html) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.html).)

{{% /tip %}}


* Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.  ![](../../../external_files/fc4a55c6aa34edbba920cbc5479b0638.png)   
* Select <strong>Allergies/Medications</strong> from the Medical Record chart tab.  ![](../../../external_files/34b0e17ab629426de1392cf5f21d3422.png)   
* Review the same patient in the legacy system and perform a side-by-side comparison. With the allergies and medications displayed, begin comparing the data by toggling between the legacy system and the {{% system-name %}} system and validate. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import. ([video](https://drive.google.com/open?id=1-PoLE-uKdtcT7hEhc7aH3FLNuipu9RMw))
    * Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record exact matches (Pass) and any discrepancies or differences (Fail). ([video](https://drive.google.com/open?id=1-NeQexrq2pMf_U4EFzoRTengEOjEp_2U))
    * Contact {{% system-name %}} with the findings.

## Reports

The **Allergy Report** and **Allergy Report - DV** can both be particularly helpful in validating data between systems.

**Allergy Report:** A columnar list of allergies and/or intolerances, based on specific criteria entered. For data validation efforts, it may be helpful to use this report to compare to the legacy system versus bringing up each chart, individually.

**Allergy Report - DV:** Lists allergies and/or intolerances with built-in DataVis (DV) tools, such as filtering, column selection, and the ability to save report perspectives. For more information, see the [DataVis](../../reports/using-datavis-grids-data-tools.html) online help documentation.

To access and utilize these reports:

* Navigate to the  {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}}  sidemenu.
* Select the  {{% syslink "Medications/Allergies/Scripts" "f=layout&module=reports&name=MedsAllergiesScripts&tabmodule=reports&tabmodule=reports&t=Medications%2FAllergies%2FScripts&tabselect=Medications%2FAllergies%2FScripts" %}}  report list.  ![](../../../external_files/238b38b69ca8b2ffaf415730f46f0ded.png)   
* Criteria may be added to filter or drill down data.  ![](../../../external_files/c8c2bd5f13250a71da5064ca5118dbc4.png)
