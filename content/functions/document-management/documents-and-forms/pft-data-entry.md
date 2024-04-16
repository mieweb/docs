---
id: '1AaU-2q8717ibJc2q1igfSGQkhBf9D270y77vHQ_ITFg'
title: 'PFT Data Entry'
date: '2020-03-06T20:35:16.544Z'
version: 53
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../scanning-and-indexing/indexing-bubble-forms.md'
  - '../scanning-and-indexing/indexing.md'
  - '../../system-administration/interfaces/device-interface-pft-system.md'
  - 'https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits'
source: 'https://drive.google.com/open?id=1AaU-2q8717ibJc2q1igfSGQkhBf9D270y77vHQ_ITFg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Data entry can be addressed a few different ways in {{% system-name %}} . Bubble forms are a very convenient and efficient solution. Bubble forms are document type templates with special formatting that allow data to be collected when documents of that type are scanned and indexed into the {{% system-name %}} system. This data is stored discretely within {{% system-name %}}.

Bubble forms also work well added to Print Definitions, particularly for providers that do not use interfaced equipment. Bubble forms can be developed so that a stack of the forms can be printed and taken onsite, where they then can be scanned/indexed, afterward.

## Bubble Form

There is a standard PFT bubble form that is available in the {{% system-name %}} system. To ease data collection, the PFT bubble form mimics the PFT electronic screen data inputs. This bubble form collects PFT data, and once scanned and indexed into the system, the optical marks are read and the interpreted data is stored discretely, in the appropriate chart.

To access and utilize a bubble form for recording information, simply navigate to the Forms Library and print the preferred form. After the form has been completed, scan the form into the system and index it, accordingly. If any of the indexed information needs edited immediately after scanning, simply use the confirmation window to verify all values were read correctly, prior to validating. Once the scan and values are confirmed, the data will index into the chart in context, as appropriate. To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../scanning-and-indexing/indexing.md) documentation.

1. While in the appropriate chart, access and print the PFT bubble form by clicking the <strong>Add Document</strong> link. This will open the Document/Forms Library, where all forms can be accessed.
2. Find and open the necessary form by visually locating it in the list and clicking the <strong>Form</strong> link. Otherwise, begin typing in the <strong>Doc Type Search</strong> autocomplete, select the appropriate form, and click <strong>Submit</strong> to open the document.

![](../pft-data-entry.assets/bc0ac72ed5cb5dd1dab69eb7d15cea0f.png)

3. Print out the bubble form.
4. Record results by coloring in the respective bubbles, then scan and index the form(s) back into the appropriate chart(s).

![](../pft-data-entry.assets/fc79d30f14e9152ebc517bff841487d2.png)

{{% info %}}
Bubble forms can also be generated as generic, or unassociated with a specific chart, to allow for mass use. Print a stack of generic forms to take onsite, and afterward, scan and index them into the respective charts.
{{% /info %}}

## Manual Entry

There are alternative, manual processes outside of using and scanning in bubble forms. These options include using an interfaced device and importing data into the system, which can be edited and/or updated, manually; or by using the appropriate encounter or adding and inputting the results as test/procedure results within or outside of an encounter. Both of these methods are also highly effective.

### Add From Chart Tab

Navigating to the **Test Results** chart tab allows users to select what type of results need to be entered or reviewed. One of the types of results is **PFT** results. When selected, the screen will display an entry screen to key in a new PFT test, but will also show a *List View* of all of the archived/closed (i.e., stored documents) PFT tests at the bottom of the page.

![](../pft-data-entry.assets/5b72dd6d4f64cdc48e436c491d2d0d0c.png)

To add new PFT data from the Test Results chart tab:

1. Click the <strong>New Manual Test</strong> to enter the PFT data.

![](../pft-data-entry.assets/8aec71e04fb579a98ebf4fcae91c888f.png)

2. If performing a <em>New Manual Test</em>, begin filling in the fields with the appropriate data.
3. In the PFT manual-entry screen, there is the ability to enter an interpretation and mark a maneuver as the <em>best maneuver</em>. In the list of all maneuvers, views of the interpretation of a maneuver will show the first 25 characters, with the rest visible while hovering.

![](../pft-data-entry.assets/ff720f7461c33c77ac2f5698dd2a425f.png)

{{% info %}}
PFT Interpretation data can be populated as an encounter view. This is an optional setting that can be enabled on encounter views to show PFT Interpretation.
{{% /info %}}

4. When completed, click the <strong>Save</strong> button. The <strong>Save</strong> button will only appear if the New Manual Test button has been clicked.

    ![](../pft-data-entry.assets/b740b08dfdae3b71153ebc4d12a80e72.png)

The data will be stored in the system in the **Test Results** chart tab. If the recorded data is preferred elsewhere in the system, do not hesitate to reach out to Helpdesk. We are happy to work with clients in order to develop ways to better address any specific business needs.

### Add from Encounter Section

Another alternative to the bubble form is the manual process of entering results through an encounter.

The PFT may be added to an encounter in multiple ways. One method is by selecting the PFT order on the **Due List**, found in the *Tests & Procedures* section of the encounter, then using the **Add to Exam** button to allow for manual entry or device import.

![](../pft-data-entry.assets/6cd223a6fefb19dd81d2e65d06c954f7.png)

If the PFT is not found on the Due List, it can be autocompleted in the Tests & Procedures section and added to the encounter.

![](../pft-data-entry.assets/0a4a7aa1812c4b95706ddcaed7a4669e.png)

Alternatively, the PFT may be selected using the **Picklist** icon by selecting the order from the list and adding it to the encounter.

![](../pft-data-entry.assets/d0397840f58fc906db182299c2006f0a.png)

### Import PFT Data From Device

When accessing the the Test Results chart tab after adding a new PFT, there is the ability to enter data manually, or upload results from a device if an interface is established. To utilize the semi-automatic process of uploading results from the device interface, simply click the **Load From Device** import button, select the appropriate file, and click **Upload File** (see other help documentation named [Device Interface – PFT System](../../system-administration/interfaces/device-interface-pft-system.md), for more information).

![](../pft-data-entry.assets/922ed688e4897d27476053def47f9c86.png)

## Reporting

These types of report links are generally found in the **Reports** sidemenu, under the [Visits](https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits) grouping of reports. These reports enable a client to review the various data captured during a visit or encounter. The PFT Summary Report is available here, for example.

![](../pft-data-entry.assets/e9ba582146e4a9234b994517c3a83443.png)
