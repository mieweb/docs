---
id: '1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM'
title: 'Observations Validation Test Script'
date: '2024-05-21T18:18:20.348Z'
version: 88
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/1-hSqvUnnLgnffj6Rdwgv5xsopPWGhdpr/view'
  - '../../e-chart/basic-initial-system-information.md'
  - '../../e-chart/detailed-searching-in-e-chart.md'
  - '../../order-and-result-management/observations-tab.md'
  - '../../order-and-result-management/observation-flowsheets.md'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit'
  - 'https://drive.google.com/open?id=1-ivoLFTHd72QsFV4d10yUip3k9do8KQi'
  - '../../reports/observations-report.md'
  - 'https://docs.enterprisehealth.com/observations-report-7345005.html'
source: 'https://drive.google.com/open?id=1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
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
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Example</strong></td>
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

## [Validation Instructions](https://drive.google.com/file/d/1-hSqvUnnLgnffj6Rdwgv5xsopPWGhdpr/view)

1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

    ![](../observations-validation-test-script.assets/52f73ae40dc37122cc526f2bbb6020ab.png)

{{% tip %}}

* Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
* Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.md) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.md).)

{{% /tip %}}

3. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

    ![](../observations-validation-test-script.assets/3b6e81d53b6a76b60742edeec867658b.png)
4. Select <strong>Observations/Flowsheets</strong> from the Medical Record chart tab.

    ![](../observations-validation-test-script.assets/e423e14102b231b3461d21cee6d2e4e7.png)

{{% tip %}}
The number in parenthesis indicates the number of items in each tab. 
{{% /tip %}}

5. The Observations Search will display. Simply click the <strong>Search</strong> button to search all observations, unless the search needs to be more specific or filtered down.

    ![](../observations-validation-test-script.assets/235fe960ff2ed0d194fd447cbe4b4df6.png)

{{% tip %}}
Observation names are displayed alphabetically, by default, with all data listed *horizontally* across the page.





![](../observations-validation-test-script.assets/1dd5843153d5d9d1b18143acf28cd1a5.png)



![](../observations-validation-test-script.assets/0a91d03ccd3aa4eb41d936bf9fc83b1e.png)

To aid in validation and instead view data *vertically*, or with dates descending, simply click the **Vertical** radio button before clicking Search. The results will be displayed with the dates in the first column, with the results listed across the page. (See our help documentation for more detailed information on the [Observations Tab](../../order-and-result-management/observations-tab.md).)

![](../observations-validation-test-script.assets/4d5008d39b53acc64a82d77177fc1775.png)

Within each chart, it is possible a [Flowsheet](../../order-and-result-management/observation-flowsheets.md) of logically grouped observations may exist. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a Flowsheet is available, select it from the Flowsheet drop-down to load the results.

![](../observations-validation-test-script.assets/15b6e3739fd26076b613c843cfb41634.png)
{{% /tip %}}

6. With the observations displayed, begin comparing the data. Toggle between the legacy system and the {{% system-name %}} system to validate the data. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import.

{{% note %}}
The date displayed will be the date the data was imported to {{% system-name %}} , **NOT** the date the item was recorded in the legacy system.
{{% /note %}}

* Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
* Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
* Contact {{% system-name %}} with the findings.

Reports ([video](https://drive.google.com/open?id=1-ivoLFTHd72QsFV4d10yUip3k9do8KQi))

The [Patient Observations report](../../reports/observations-report.md) is particularly helpful in validating data between systems. To access and utilize this report:

1. Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
2. Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list.

    ![](../observations-validation-test-script.assets/ec2ab6d6a4b70fc56ac700c653eeca68.png)
3. Criteria may be added to filter or drill down data. The <strong>Entered By</strong> field, for example, can be used to further refine the results. The Entered By value when performing a data migration is typically <strong>Import User</strong>. Otherwise, the legacy system name may be used, or a meaningful acronym (e.g., Cerner Import, OHM Import) may be chosen. 

    ![](../observations-validation-test-script.assets/f958f0553b53bc389064f532fa9d8b33.png)

## FAQs

**Q:** I am only validating specific observations. Is there a way to filter to just the ones I need?

**A:** Yes. Users may use the [Patient Observations Report](https://docs.enterprisehealth.com/observations-report-7345005.html), described [above](#above), to search specific observation values. Otherwise, it is possible a [Flowsheet](../../order-and-result-management/observation-flowsheets.md) of logically grouped observations may exist within each chart. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a flowsheet is available, select it from the Flowsheet drop-down to load the results.

![](../observations-validation-test-script.assets/15b6e3739fd26076b613c843cfb41634.png)

**Q:** Why are some observations only listed once, even though they apply across all dates (e.g., Race, Ethnicity, Email, etc.)?

**A:** Once an observation is recorded, it is not repeated as a duplicate discrete value. If the observation changes, then a new observation will display with the observation history always available. WARNING: Users with proper security permissions may Delete observations, along with their history.

**Q:** Can I create my own flowsheets with just the observations I need to validate?

**A:** This depends on company policy and is controlled through user security settings. If permitted, select users may create flowsheets, as needed.
