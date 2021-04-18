---
title: "Audiogram Validation Test Script"
date: "2020-02-27T21:32:53.730Z"
url: "functions/system-administration/data-migration/audiogram-validation-test-script.html"
author: aquandt
version: 37
id: "1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo"
source: "https://drive.google.com/open?id=1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo"
menu:
    main:
        name: "Audiogram Validation Test Script"
        identifier: "1g7ac-0fYJZz78LbTF6XkBU9gnOXObzb1_l9cZCO33eo"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5190
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
    <td>**Field**</td>
    <td>**Description**</td>
    <td>**Sample Data**</td>
  </tr>
  <tr>
    <td>**Test Datetime**</td>
    <td>
When the test was conducted (datetime).

Must be in this date and time format: YYYY-MM-DD HH:MM:SS
    </td>
    <td>2019-02-15 13:30:00</td>
  </tr>
  <tr>
    <td>**Left 500 Hz**</td>
    <td>Result for the left ear 500 Hz test in dB.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>**Left 1 kHz**</td>
    <td>Result for the left ear 1 kHz test in dB.</td>
    <td>5</td>
  </tr>
  <tr>
    <td>**Left 2 kHz**</td>
    <td>Result for the left ear 2 kHz test in dB.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>**Left 3 kHz**</td>
    <td>Result for the left ear 3 kHz test in dB.</td>
    <td>15</td>
  </tr>
  <tr>
    <td>**Left 4 kHz**</td>
    <td>Result for the left ear 4 kHz test in dB.</td>
    <td>20</td>
  </tr>
  <tr>
    <td>**Left 6 kHz**</td>
    <td>Result for the left ear 6 kHz test in dB.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>**Left 8 kHz**</td>
    <td>Result for the left ear 8 kHz test in dB.</td>
    <td>20</td>
  </tr>
  <tr>
    <td>**Right 500 Hz**</td>
    <td>Result for the right ear 500 Hz test in dB.</td>
    <td>5</td>
  </tr>
  <tr>
    <td>**Right 1 kHz**</td>
    <td>Result for the right ear 1 kHz test in dB.</td>
    <td>5</td>
  </tr>
  <tr>
    <td>**Right 2 kHz**</td>
    <td>Result for the right ear 2 kHz test in dB.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>**Right 3 kHz**</td>
    <td>Result for the right ear 3 kHz test in dB.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>**Right 4 kHz**</td>
    <td>Result for the right ear 4 kHz test in dB.</td>
    <td>25</td>
  </tr>
  <tr>
    <td>**Right 6 kHz**</td>
    <td>Result for the right ear 6 kHz test in dB.</td>
    <td>25</td>
  </tr>
  <tr>
    <td>**Right 8 kHz**</td>
    <td>Result for the right ear 8 kHz test in dB.</td>
    <td>20</td>
  </tr>
  <tr>
    <td>**Left STS**</td>
    <td>
Standard threshold shift from last baseline test for the left ear.

Options include:

* YES
* NO
    </td>
    <td>YES</td>
  </tr>
  <tr>
    <td>**Right STS**</td>
    <td>
Standard threshold shift from last baseline test for the right ear.

Options include:

* YES
* NO
    </td>
    <td>NO</td>
  </tr>
  <tr>
    <td>**Left Baseline**</td>
    <td>
Flags the test as a baseline for the left ear.

Options include:

* YES
* NO
    </td>
    <td>YES</td>
  </tr>
  <tr>
    <td>**Right Baseline**</td>
    <td>
Flags the test as a baseline for the right ear.

Options include:

* YES
* NO
    </td>
    <td>NO</td>
  </tr>
  <tr>
    <td>**Calibration Date**</td>
    <td>
Records the last date (datetime) the audiometer was calibrated.

Must be in this date and time format: YYYY-MM-DD HH:MM:SS
    </td>
    <td>2016-12-15 08:30:02</td>
  </tr>
</table>

Reference the [Audiogram Data Entry](../../document-management/documents-and-forms/audiogram-data-entry.html) online help for instructions on audiogram data entry.

## Validation Instructions ([video](https://drive.google.com/open?id=1-ROSCMRuk0f9p4Ut0uIYJPn2ks90BWg-))

* Log into the {{% system-name %}} system.
* Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.  ![](audiogram-validation-test-script.images/image1.png)  {{% tip %}}
    * Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
    * Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.html) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.html).)

{{% /tip %}}


* Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.  ![](audiogram-validation-test-script.images/image2.png) 
* Select <strong>Audiogram</strong> from the Test Results chart tab. ![](audiogram-validation-test-script.images/image3.png)  

{{% tip %}} The number in parenthesis indicates the number of items in each tab.  {{% /tip %}}
  
* The audiograms are listed in reverse chronological order, with the most recent at the top. Locate the correct date of service and click to open and display the audiogram.  ![](audiogram-validation-test-script.images/image4.png) 
* Clicking into the most recent audiogram will display all results that have been entered.  ![](audiogram-validation-test-script.images/image5.png)
* With the audiogram data displayed, begin comparing the data by toggling between the legacy system and the {{% system-name %}} system and validate. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import.  
    * Be sure to validate each data element, data/time of test, each baseline, including current baseline(s), and any shifts (STSs).
    * Validate the correct location and and by whom the test was administered. 

{{% note %}} The *Location* may be listed as the name of the legacy system (e.g., OHM), and the *Author/Administered By* may be listed as **Import User**. {{% /note %}}

* Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
    * Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
    * Contact {{% system-name %}} with the findings.

## Reports ([video](https://drive.google.com/open?id=1-ZKbOBVwYLcXZw70rrazFdRmblgKVHO_))

The **Audiogram Report** and **Audiometric Testing** reports are particularly helpful in validating data between systems.

**Audiogram Report: **Shows details based on search criteria.



**Audiometric Testing Report: **Displays STS information and OSHA recordable status.

To access and utilize these reports:

* Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
* Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list.  ![](audiogram-validation-test-script.images/image6.png)
* Criteria may be added to filter or drill down data. 
    * Audiogram Report  ![](audiogram-validation-test-script.images/image7.png)   
    * Audiometric Testing Report  ![](audiogram-validation-test-script.images/image8.png)  

## FAQs

**Q:** Why were age-adjusted shifts not included in the import?

**A:** Because the Age Corrected Shift is a calculated field in {{% system-name %}} , this is not a stored field.

**Q:** How does {{% system-name %}} calculate shifts?

**A: **A shift is set when both of the following conditions are met:

The age corrected shift from the baseline is >= 10 **AND**



The average of 2kHz, 3kHz, and 4kHz >= 25









