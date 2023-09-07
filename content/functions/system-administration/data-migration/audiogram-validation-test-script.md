---
id: '1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo'
title: 'Audiogram Validation Test Script'
date: '2020-02-27T21:32:53.730Z'
version: 41
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../document-management/documents-and-forms/audiogram-data-entry.md'
  - 'https://drive.google.com/open?id=1-ROSCMRuk0f9p4Ut0uIYJPn2ks90BWg-'
  - '../../e-chart/basic-initial-system-information.md'
  - '../../e-chart/detailed-searching-in-e-chart.md'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0'
  - 'https://drive.google.com/open?id=1-ZKbOBVwYLcXZw70rrazFdRmblgKVHO_'
source: 'https://drive.google.com/open?id=1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo'
wikigdrive: '74f4d1b504045661a4a97b0e3aea1d65b95f37ab'
menu:
  main:
    name: 'Audiogram Validation Test Script'
    identifier: '1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5210
---
This document is intended to describe and assist users with the process to validate audiogram results imported from another system.
  
## Requirements  

* Compile a list of 8-10 different charts containing individual audiogram data from the legacy/existing system. Ensure the examples include varied complexity and multiple years of data, such as multiple Standard Threshold Shifts (STSs) and multiple baselines, to address potential import discrepancies that could arise.
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
<td><strong>Test Datetime</strong></td>
<td>When the test was conducted (datetime).
Must be in this date and time format: YYYY-MM-DD HH:MM:SS</td>
<td>2019-02-15 13:30:00</td>
</tr>
<tr>
<td><strong>Left 500 Hz</strong></td>
<td>Result for the left ear 500 Hz test in dB.</td>
<td>10</td>
</tr>
<tr>
<td><strong>Left 1 kHz</strong></td>
<td>Result for the left ear 1 kHz test in dB.</td>
<td>5</td>
</tr>
<tr>
<td><strong>Left 2 kHz</strong></td>
<td>Result for the left ear 2 kHz test in dB.</td>
<td>10</td>
</tr>
<tr>
<td><strong>Left 3 kHz</strong></td>
<td>Result for the left ear 3 kHz test in dB.</td>
<td>15</td>
</tr>
<tr>
<td><strong>Left 4 kHz</strong></td>
<td>Result for the left ear 4 kHz test in dB.</td>
<td>20</td>
</tr>
<tr>
<td><strong>Left 6 kHz</strong></td>
<td>Result for the left ear 6 kHz test in dB.</td>
<td>10</td>
</tr>
<tr>
<td><strong>Left 8 kHz</strong></td>
<td>Result for the left ear 8 kHz test in dB.</td>
<td>20</td>
</tr>
<tr>
<td><strong>Right 500 Hz</strong></td>
<td>Result for the right ear 500 Hz test in dB.</td>
<td>5</td>
</tr>
<tr>
<td><strong>Right 1 kHz</strong></td>
<td>Result for the right ear 1 kHz test in dB.</td>
<td>5</td>
</tr>
<tr>
<td><strong>Right 2 kHz</strong></td>
<td>Result for the right ear 2 kHz test in dB.</td>
<td>10</td>
</tr>
<tr>
<td><strong>Right 3 kHz</strong></td>
<td>Result for the right ear 3 kHz test in dB.</td>
<td>10</td>
</tr>
<tr>
<td><strong>Right 4 kHz</strong></td>
<td>Result for the right ear 4 kHz test in dB.</td>
<td>25</td>
</tr>
<tr>
<td><strong>Right 6 kHz</strong></td>
<td>Result for the right ear 6 kHz test in dB.</td>
<td>25</td>
</tr>
<tr>
<td><strong>Right 8 kHz</strong></td>
<td>Result for the right ear 8 kHz test in dB.</td>
<td>20</td>
</tr>
<tr>
<td><strong>Left STS</strong></td>
<td>Standard threshold shift from last baseline test for the left ear.
Options include:
<ul><li><p>YES</p></li><li><p>NO</p></li></ul></td>
<td>YES</td>
</tr>
<tr>
<td><strong>Right STS</strong></td>
<td>Standard threshold shift from last baseline test for the right ear.
Options include:
<ul><li><p>YES</p></li><li><p>NO</p></li></ul></td>
<td>NO</td>
</tr>
<tr>
<td><strong>Left Baseline</strong></td>
<td>Flags the test as a baseline for the left ear.
Options include:
<ul><li><p>YES</p></li><li><p>NO</p></li></ul></td>
<td>YES</td>
</tr>
<tr>
<td><strong>Right Baseline</strong></td>
<td>Flags the test as a baseline for the right ear.
Options include:
<ul><li><p>YES</p></li><li><p>NO</p></li></ul></td>
<td>NO</td>
</tr>
<tr>
<td><strong>Calibration Date</strong></td>
<td>Records the last date (datetime) the audiometer was calibrated.
Must be in this date and time format: YYYY-MM-DD HH:MM:SS</td>
<td>2016-12-15 08:30:02</td>
</tr>

</table>
Reference the [Audiogram Data Entry](../../document-management/documents-and-forms/audiogram-data-entry.md) online help for instructions on audiogram data entry.
  
## Validation Instructions ([**video**](https://drive.google.com/open?id=1-ROSCMRuk0f9p4Ut0uIYJPn2ks90BWg-))  

1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

   <img src="../audiogram-validation-test-script.assets/52f73ae40dc37122cc526f2bbb6020ab.png" />

{{% tip %}}
   1. Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
   2. Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.md) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.md).)
{{% /tip %}}
1. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

   <img src="../audiogram-validation-test-script.assets/3b6e81d53b6a76b60742edeec867658b.png" />

2. Select <strong>Audiogram</strong> from the Test Results chart tab.
   <img src="../audiogram-validation-test-script.assets/9a7bb8b77bad67853b399785d15be97e.png" />

{{% tip %}}
   The number in parenthesis indicates the number of items in each tab. 
{{% /tip %}}


3. The audiograms are listed in reverse chronological order, with the most recent at the top. Locate the correct date of service and click to open and display the audiogram.

   <img src="../audiogram-validation-test-script.assets/e1a18f959d442492081dac7e73ecccce.png" />

4. Clicking into the most recent audiogram will display all results that have been entered.

   <img src="../audiogram-validation-test-script.assets/b3818d187cff450d6fdcc26b4727f4bd.png" />  

5. With the audiogram data displayed, begin comparing the data by toggling between the legacy system and the {{% system-name %}} system and validate. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import. 

   1. Be sure to validate each data element, data/time of test, each baseline, including current baseline(s), and any shifts (STSs).
   2. Validate the correct location and and by whom the test was administered.
{{% note %}}
      The <em>Location</em> may be listed as the name of the legacy system (e.g., OHM), and the <em>Author/Administered By</em> may be listed as <strong>Import User</strong>.
{{% /note %}}
1. Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
   1. Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
   2. Contact {{% system-name %}} with the findings.
  
## Reports ([**video**](https://drive.google.com/open?id=1-ZKbOBVwYLcXZw70rrazFdRmblgKVHO_))  

The **Audiogram Report** and **Audiometric Testing** reports are particularly helpful in validating data between systems.
**Audiogram Report:** Shows details based on search criteria.

**Audiometric Testing Report:** Displays STS information and OSHA recordable status.
To access and utilize these reports:
1. Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
2. Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list.

   <img src="../audiogram-validation-test-script.assets/403e427a3920d588507800435afefaf9.png" />  

3. Criteria may be added to filter or drill down data. 
   1. Audiogram Report

      <img src="../audiogram-validation-test-script.assets/f72feceaf3162050b77cacab2502b281.png" />



   2. Audiometric Testing Report

      <img src="../audiogram-validation-test-script.assets/f34ef1cc466e770880e198bddce5af52.png" />  
       

  
## FAQs  

**Q:** Why were age-adjusted shifts not included in the import?
**A:** Because the Age Corrected Shift is a calculated field in {{% system-name %}} , this is not a stored field.
**Q:** How does {{% system-name %}} calculate shifts?
**A:** A shift is set when both of the following conditions are met:
The age corrected shift from the baseline is >= 10 **AND**

The average of 2kHz, 3kHz, and 4kHz >= 25




