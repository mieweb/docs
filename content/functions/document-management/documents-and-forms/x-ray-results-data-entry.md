---
id: '1MwxS6jLOhlJOif4APELiumSaoI0J-pRTX9W6zBZ3WtU'
title: 'X-Ray Results Data Entry'
date: '2020-03-06T20:36:53.541Z'
version: 42
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../scanning-and-indexing/indexing-bubble-forms.md'
  - '../scanning-and-indexing/indexing.md'
  - '../imaging/dicom-setup-tab.md'
  - '../imaging/dicom-viewer.md'
  - '../imaging/burning-dicom-images-onto-cd-dvd.md'
  - 'https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits'
source: 'https://drive.google.com/open?id=1MwxS6jLOhlJOif4APELiumSaoI0J-pRTX9W6zBZ3WtU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Data entry can be addressed a few different ways in {{% system-name %}} . Bubble forms are a very convenient and efficient solution. Bubble forms are document type templates with special formatting that allow data to be collected when documents of that type are scanned and indexed into the {{% system-name %}} system. This data is stored discretely, as observations, within {{% system-name %}}.

Bubble forms also work well added to Print Definitions, particularly for providers that do not use interfaced equipment. Bubble forms can also be developed so that a stack of the forms can be printed and taken onsite, where they then can be scanned/indexed, afterward.

## Bubble Form

There is a standard x-ray results bubble form that is available in the {{% system-name %}} system. This bubble form collects x-ray result data, and once scanned and indexed into the system, the optical marks are read and the interpreted data is stored discretely, in the appropriate chart.

To access and utilize a bubble form for recording information, simply navigate to the Forms Library and print the preferred form. After the form has been completed, scan the form into the system and index it, accordingly. If any of the indexed information needs edited immediately after scanning, simply use the confirmation window to verify all values were read correctly, prior to validating. Once the scan and values are confirmed, the data will index into the chart in context, as appropriate. To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../scanning-and-indexing/indexing.md) documentation.

1. While in the appropriate chart, access and print the x-ray results bubble form by clicking the <strong>Add Document</strong> link. This will open the Document/Forms Library, where all forms can be accessed.
2. Find and open the necessary form by visually locating it in the list and clicking the <strong>Form</strong> link. Otherwise, begin typing in the <strong>Doc Type Search</strong> autocomplete, select the appropriate form, and click <strong>Submit</strong> to open the document.

![](../x-ray-results-data-entry.assets/b20620034a1e2e749389598673fedfef.png)

3. Print out the bubble form.
4. Record results by coloring in the respective bubbles, then scan and index the form(s) back into the appropriate chart(s).

![](../x-ray-results-data-entry.assets/ddacdb3fd2d74a5fc7157f9fdbc233a9.png)

{{% info %}}
Bubble forms can also be generated as generic, or unassociated with a specific chart, to allow for mass use. Print a stack of generic forms to take onsite, and afterward, scan/index them into the respective charts.
{{% /info %}}

## Manual Entry

There are alternative, manual and semi-manual processes outside of using and scanning in bubble forms. These options include using an interfaced device and importing data into the system, which can be edited and/or updated, manually; or by using the appropriate encounter or adding and inputting the results as test/procedure results within an encounter. Both of these methods are also highly effective.

### Add from Encounter Section

This method of data entry can be achieved by selecting the x-ray order on the **Due List**, found in the Tests & Procedures section of the encounter, then using the **Add to Exam** button, to allow for manual entry or device import.

![](../x-ray-results-data-entry.assets/597abd62e618f8bdf74ccce338b8c3f6.png)

If the x-ray order is not found on the Due List, it can be autocompleted in the Tests & Procedures section and added to the encounter.

![](../x-ray-results-data-entry.assets/69dc2c32a17f010f74ef38c6e9b83db4.png)

Alternatively, the x-ray order may be selected using the **Picklist** icon, by selecting the order from the list and adding it to the encounter.

![](../x-ray-results-data-entry.assets/776dd760b786fb68e2bb11d513be5525.png)

### Import Data From Device

Though not the typical type of device interface, the {{% system-name %}} solution offers users the ability to establish open connections with DICOM application entities. This means Digital Imaging and Communications in Medicine (DICOM) can be handled, stored, printed, and transmitted/exchanged quickly and easily. For more information, check out our documentation on the [DICOM Setup Tab](../imaging/dicom-setup-tab.md), [DICOM Viewer](../imaging/dicom-viewer.md), and [Burning DICOM Images to Disc](../imaging/burning-dicom-images-onto-cd-dvd.md).

## Reporting

These types of reports are generally found in the **Reports** sidemenu, under the [Visits](https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits) grouping of reports. These reports enable clients to review the various data captured during a visit or encounter, as well as that stored in documents. The Document Reports is available here, for example, along with the Patient Observations report.

![](../x-ray-results-data-entry.assets/8963a7cbcad05e622538f80636491b02.png)
