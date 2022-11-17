---
id: '1fPF1Dh5Vo8onrG7HPCr1mk69QGe43r8YvTiBy2V7WYY'
title: 'EKG Data Entry'
date: '2020-03-06T20:29:53.003Z'
version: 37
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../scanning-and-indexing/indexing-bubble-forms.md'
  - '../scanning-and-indexing/indexing.md'
  - '../../system-administration/interfaces/device-interface-ekg-system.md'
  - 'https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits'
source: 'https://drive.google.com/open?id=1fPF1Dh5Vo8onrG7HPCr1mk69QGe43r8YvTiBy2V7WYY'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'EKG Data Entry'
    identifier: '1fPF1Dh5Vo8onrG7HPCr1mk69QGe43r8YvTiBy2V7WYY'
    parent: '1F21zNiYq703LscR9rtGl8pZLjtxvozONvXhkaZFefEI'
    weight: 600
---
Data entry can be addressed a few different ways in {{% system-name %}} . Bubble forms are a very convenient and efficient solution. Bubble forms are document type templates with special formatting that allow data to be collected when documents of that type are scanned and indexed into the {{% system-name %}} system. This data is stored discretely, as observations, within {{% system-name %}}.

Bubble forms also work well added to Print Definitions, particularly for providers that do not use interfaced equipment. Bubble forms can also be developed so that a stack of the forms can be printed and taken onsite, where they then can be scanned/indexed, afterward.
  
## Bubble Form  
  
There is a standard EKG bubble form that is available in the {{% system-name %}} system. This bubble form collects EKG data, and once scanned and indexed into the system, the optical marks are read and the interpreted data is stored discretely, in the appropriate chart.  
{{% info %}}

An electrocardiogram is a test designed to measure the electrical activity of heartbeats and is often referred to as an EKG or ECG, interchangeably.
{{% /info %}}
To access and utilize a bubble form for recording information, simply navigate to the Forms Library and print the preferred form. After the form has been completed, scan the form into the system and index it, accordingly. If any of the indexed information needs edited immediately after scanning, simply use the confirmation window to verify all values were read correctly, prior to validating. Once the scan and values are confirmed, the data will index into the respective chart, as appropriate. To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../scanning-and-indexing/indexing.md) documentation.
1. While in the appropriate chart, access and print the EKG bubble form by clicking the <strong>Add Document</strong> link. This will open the Document/Forms Library, where all forms can be accessed.
2. Find and open the necessary form by visually locating it in the list and clicking the <strong>Form</strong> link. Otherwise, begin typing in the <strong>Doc Type Search</strong> autocomplete, select the appropriate form, and click <strong>Submit</strong> to open the document.
  
![](../ekg-data-entry.assets/10000201000004F80000029269D243DEF6EA3F34.png)  

3. Print out the bubble form.
4. Record the results by coloring in the respective bubbles, then scan and index the form(s) back into the appropriate chart(s).
  
![](../ekg-data-entry.assets/10000201000003F80000021FE63CADE77DBC999A.png)  

{{% info %}}

Bubble forms can also be generated as generic, or unassociated with a specific chart, to allow for mass use. Print a stack of generic forms to take onsite, and afterward, scan/index them into the respective charts.
{{% /info %}}
  
## Manual Entry  

There are alternative, manual processes outside of using and scanning in bubble forms. These options include using an interfaced device and importing data into the system, which can be edited and/or updated, manually; or by using the appropriate encounter or adding and inputting the results as test/procedure results within an encounter. Both of these methods are also highly effective.
  
### Add from Encounter Section  

This method of data entry can be achieved by checking the EKG order on the **Due List**, found in the Tests & Procedures section of the encounter, then using the **Add to Exam** button, to allow for manual entry or device import.
  
![](../ekg-data-entry.assets/100002010000049F000001AD7E574AEC112DE3DA.png)  

If the EKG is not found on the Due List, it can be autocompleted in the Tests & Procedures section and added to the encounter via the **Add to Exam** button.
  
![](../ekg-data-entry.assets/1000020100000258000000BD5FC78063ACCA2BB7.png)  

Alternatively, the EKG may be selected using the **Picklist** icon by selecting the order from the list and adding it to the encounter.
  
![](../ekg-data-entry.assets/1000020100000498000001E84A4954B1D8F74293.png)  

Once the EKG test/procedure has been applied to the encounter, EKG data fields open for data entry in the visit encounter.
  
![](../ekg-data-entry.assets/10000201000004AA0000020E4D4033335F50FD00.png)  

  
### Import EKG Data From Device  

When accessing the **Test Results** chart tab after adding a new EKG, there is the ability to either enter the data manually, or upload results from a device, if an interface is established. To utilize the semi-automatic process of uploading results from the device interface, simply click the **Load CardioPerfect** import button when the EKG procedure is added to the visit encounter. Select the appropriate file and click **Upload File**.
  
![](../ekg-data-entry.assets/100002010000049C000002329C1272742337B73B.png)  

For more information on device interfaces and file uploads, see the help documentation [Device Interfaces – EKG System](../../system-administration/interfaces/device-interface-ekg-system.md).
  
## Reporting  

These types of report links are generally found in the **Reports** sidemenu tab, under the [Visits](https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits) grouping of reports. These reports enable a client to review the various data captured during a visit or encounter. The EKG Report is available here, for example.
  
![](../ekg-data-entry.assets/100002010000044D0000024AE4006E887B496F8A.png)  

