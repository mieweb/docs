---
id: '1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM'
title: 'Observations Validation Test Script'
date: '2020-02-28T15:30:47.082Z'
version: 49
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/1-hSqvUnnLgnffj6Rdwgv5xsopPWGhdpr/view?usp=sharing'
  - 'gdoc:1tg6fw6rjGuTilWgo6MTVXqLV--GlqfvOhERuMQl7Ec8'
  - 'gdoc:1oJi_eiW1Rz4O5aJlJjXU2dc2IKUZ-vaeUOCw5M7hnpY'
  - 'gdoc:13UOUobSDFmuMqHmgps91RswTip-sSvHqkiAncWNOtaw'
  - 'gdoc:15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0'
  - 'gdoc:1-ivoLFTHd72QsFV4d10yUip3k9do8KQi'
  - 'gdoc:13jOk33Y1SJkreIkd5pt3QzR7QY28FQvZOcLsMSPA1MM'
  - 'https://docs.enterprisehealth.com/observations-report-7345005.html'
source: 'https://drive.google.com/open?id=1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Observations Validation Test Script'
    identifier: '1RjJm78kYrjXJPlfpc7oRo0-g12BxQB5A5d7e7sTpPfM'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
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
  
## Validation Instructions ([**video**](https://drive.google.com/file/d/1-hSqvUnnLgnffj6Rdwgv5xsopPWGhdpr/view?usp=sharing))  

1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

   <img src="../observations-validation-test-script.assets/10000201000000E90000008428F41BCA52594CC8.png" />

{{% tip %}}
   1. Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
   2. Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](gdoc:1tg6fw6rjGuTilWgo6MTVXqLV--GlqfvOhERuMQl7Ec8) or [Detailed Searching in E-Chart](gdoc:1oJi_eiW1Rz4O5aJlJjXU2dc2IKUZ-vaeUOCw5M7hnpY).)
{{% /tip %}}
1. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

   <img src="../observations-validation-test-script.assets/10000201000003EE0000005E5A4755F56EC0CF16.png" />

2. Select <strong>Observations/Flowsheets</strong> from the Medical Record chart tab.

   <img src="../observations-validation-test-script.assets/1000020100000484000001525DE96F9AB6BF6B91.png" />


{{% tip %}}
   The number in parenthesis indicates the number of items in each tab. 
{{% /tip %}}
3. The Observations Search will display. Simply click the <strong>Search</strong> button to search all observations, unless the search needs to be more specific or filtered down.

   <img src="../observations-validation-test-script.assets/100002010000049200000137BB40A2317D8F974E.png" />

{{% tip %}}
4. Observation names are displayed alphabetically, by default, with all data listed <em>horizontally</em> across the page.
   <img src="../observations-validation-test-script.assets/10000201000001CC0000007B3CF06461C4F8A950.png" />  
   <img src="../observations-validation-test-script.assets/1000020100000486000000C9B8AFEF8D7F48B22F.png" />

   1. To aid in validation and instead view data <em>vertically</em>, or with dates descending, simply click the <strong>Vertical</strong> radio button before clicking Search. The results will be displayed with the dates in the first column, with the results listed across the page. (See our help documentation for more detailed information on the [Observations Tab](gdoc:13UOUobSDFmuMqHmgps91RswTip-sSvHqkiAncWNOtaw).)

      <img src="../observations-validation-test-script.assets/10000201000004810000007D3795F0ECC6025E70.png" />

   2. Within each chart, it is possible a [Flowsheet](gdoc:15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY) of logically grouped observations may exist. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a Flowsheet is available, select it from the Flowsheet drop-down to load the results.

      <img src="../observations-validation-test-script.assets/10000201000002F1000001323D550DF6047F71FF.png" />  

{{% /tip %}}  

1. With the observations displayed, begin comparing the data. Toggle between the legacy system and the {{% system-name %}} system to validate the data. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import. 

{{% note %}}
   The date displayed will be the date the data was imported to {{% system-name %}} , <strong>NOT</strong> the date the item was recorded in the legacy system.
{{% /note %}}
   1. Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
   2. Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
   3. Contact {{% system-name %}} with the findings.
{{% anchor sys="report" %}}

Reports ([video](gdoc:1-ivoLFTHd72QsFV4d10yUip3k9do8KQi))
The [Patient Observations report](gdoc:13jOk33Y1SJkreIkd5pt3QzR7QY28FQvZOcLsMSPA1MM) is particularly helpful in validating data between systems. To access and utilize this report:
1. Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
2. Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list.

   <img src="../observations-validation-test-script.assets/1000020100000164000001E1D01E2A64EF54EF8C.png" />  

3. Criteria may be added to filter or drill down data. The <strong>Entered By</strong> field, for example, can be used to further refine the results. The Entered By value when performing a data migration is typically <strong>Import User</strong>. Otherwise, the legacy system name may be used, or a meaningful acronym (e.g., Cerner Import, OHM Import) may be chosen. 

   <img src="../observations-validation-test-script.assets/1000020100000159000000ADFDB6517C2994CEB0.png" />  

  
## FAQs  

**Q:** I am only validating specific observations. Is there a way to filter to just the ones I need?
**A:** Yes. Users may use the [Patient Observations Report](https://docs.enterprisehealth.com/observations-report-7345005.html), described [above](#gjdgxs), to search specific observation values. Otherwise, it is possible a [Flowsheet](gdoc:15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY) of logically grouped observations may exist within each chart. A Flowsheet is a grouping of observations, such as Vitals, Glucose levels, Questionnaire responses, etc. If a flowsheet is available, select it from the Flowsheet drop-down to load the results.
  
![](../observations-validation-test-script.assets/10000201000002F1000001323D550DF6047F71FF.png)  

**Q:** Why are some observations only listed once, even though they apply across all dates (e.g., Race, Ethnicity, Email, etc.)?
**A:** Once an observation is recorded, it is not repeated as a duplicate discrete value. If the observation changes, then a new observation will display with the observation history always available. WARNING: Users with proper security permissions may Delete observations, along with their history.
**Q:** Can I create my own flowsheets with just the observations I need to validate?
**A:** This depends on company policy and is controlled through user security settings. If permitted, select users may create flowsheets, as needed.



