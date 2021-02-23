---
title: "Observations Validation Test Script"
date: 2020-02-28T15:30:47.082Z
url: "general-functionality/system-administration/data-migration/observations-validation-test-script.html"
author: aquandt
version: 44
id: 1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM
source: https://drive.google.com/open?id=1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM
menu:
    main:
        name: "Observations Validation Test Script"
        identifier: "1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5220
---
This document is intended to describe and assist users with the process to validate discrete observations imported from another system.

## Requirements

* Compile a list of 8-10 different charts containing individual observations from the legacy/existing system. Ensure the examples include varied complexity and multiple years of data to address potential import discrepancies that could arise.
* Multiple monitors are recommended to assist with comparing legacy data to the data imported to {{% system-name %}} .

## Data Fields 

Validate the discrete values imported to {{% system-name %}} , listed in the table below. 

{{% note %}}

Some charts/records may not have all data elements, and in some circumstances, there may be additional data to validate. Check with the {{% system-name %}} superuser for details.

{{% /note %}}


<table>
  <tr>
    <td>**Field Name**</td>
    <td>**Description**</td>
    <td>**Example**</td>
  </tr>
  <tr>
    <td>Employee ID</td>
    <td>Employee Identifier</td>
    <td>MR 12345</td>
  </tr>
  <tr>
    <td>Observation Name</td>
    <td>Name of observation to validate</td>
    <td>p.work_phone</td>
  </tr>
  <tr>
    <td>Observation Result</td>
    <td>Expected result of observation being validated</td>
    <td>8883139766</td>
  </tr>
</table>

## Validation Instructions ([video](https://drive.google.com/file/d/1-hSqvUnnLgnffj6Rdwgv5xsopPWGhdpr/view?usp=sharing))

* Log into the {{% system-name %}} system.
* Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.  ![](../../../external_files/ba2565ae7f28ae2bc3deb4d5c9e480f3.png)  {{% tip %}}
    * Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
    * Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.html) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.html).)

{{% /tip %}}


* Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.  ![](../../../external_files/fc4a55c6aa34edbba920cbc5479b0638.png) 
* Select <strong>Observations/Flowsheets</strong> from the Medical Record chart tab.  ![](../../../external_files/4a1cf8620e05c10d54ca4e1cc982851c.png)   

{{% tip %}} The number in parenthesis indicates the number of items in each tab.  {{% /tip %}}

* The Observations Search will display. Simply click the <strong>Search</strong> button to search all observations, unless the search needs to be more specific or filtered down.  ![](../../../external_files/a8a891b30173b8665c299e4d2a45b7e9.png)  {{% tip %}}
* Observation names are displayed alphabetically, by default, with all data listed <em>horizontally</em> across the page. ![](../../../external_files/686cd64c35ae0cbf81a9164ec2036efd.png)![](../../../external_files/2d6dfaa487ff4a44b2cb71bb809b2ef7.png) 
    * To aid in validation and instead view data <em>vertically</em>, or with dates descending, simply click the <strong>Vertical</strong> radio button before clicking Search. The results will be displayed with the dates in the first column, with the results listed across the page. (See our help documentation for more detailed information on the [Observations Tab](../../order-and-result-management/observations-tab.html).)  ![](../../../external_files/95943c8a01861746e847325b8344a325.png) 
    * Within each chart, it is possible a [Flowsheet](../../order-and-result-management/observation-flowsheets.html) of logically grouped observations may exist. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a Flowsheet is available, select it from the Flowsheet drop-down to load the results.  ![](../../../external_files/7a3d7a792280ac0b43358e1ed5f1e98f.png)

{{% /tip %}}
 

* With the observations displayed, begin comparing the data. Toggle between the legacy system and the {{% system-name %}} system to validate the data. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import.   

{{% note %}} The date displayed will be the date the data was imported to {{% system-name %}} , **NOT** the date the item was recorded in the legacy system. {{% /note %}}

    * Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
    * Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
    * Contact {{% system-name %}} with the findings.

{{% anchor sys="report" %}}

Reports ([video](https://drive.google.com/open?id=1-ivoLFTHd72QsFV4d10yUip3k9do8KQi))

The [Patient Observations report](../../reports/observations-report.html) is particularly helpful in validating data between systems. To access and utilize this report:

* Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
* Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list.  ![](../../../external_files/452b37ab31bffc744a78834dc2bd8bd9.png)
* Criteria may be added to filter or drill down data. The <strong>Entered By</strong> field, for example, can be used to further refine the results. The Entered By value when performing a data migration is typically <strong>Import User</strong>. Otherwise, the legacy system name may be used, or a meaningful acronym (e.g., Cerner Import, OHM Import) may be chosen.   ![](../../../external_files/00264f0ec0ad27a4850e9aa473591d25.png)

## FAQs

**Q:** I am only validating specific observations. Is there a way to filter to just the ones I need?

**A:** Yes. Users may use the [Patient Observations Report](https://docs.enterprisehealth.com/observations-report-7345005.html), described above, to search specific observation values. Otherwise, it is possible a [Flowsheet](../../order-and-result-management/observation-flowsheets.html) of logically grouped observations may exist within each chart. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a flowsheet is available, select it from the Flowsheet drop-down to load the results.

![](../../../external_files/7a3d7a792280ac0b43358e1ed5f1e98f.png)

**Q: **Why are some observations only listed once, even though they apply across all dates (e.g., Race, Ethnicity, Email, etc.)?

**A:** Once an observation is recorded, it is not repeated as a duplicate discrete value. If the observation changes, then a new observation will display with the observation history always available. WARNING: Users with proper security permissions may Delete observations, along with their history.

**Q: **Can I create my own flowsheets with just the observations I need to validate?

**A:** This depends on company policy and is controlled through user security settings. If permitted, select users may create flowsheets, as needed.







