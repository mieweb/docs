---
title: "Document Details"
date: 2020-03-23T17:49:31.479Z
url: "general-functionality/document-management/documents-and-forms/document-details.html"
author: Jeremia Ploor
version: 33
id: 1Wr-vTLd_jr5j2IcTTGKHlvQoD5bBdW0NolS-KrMK1cg
source: https://drive.google.com/open?id=1Wr-vTLd_jr5j2IcTTGKHlvQoD5bBdW0NolS-KrMK1cg
---
Document details can be added in multiple ways to many types of documents within {{% system-name %}} . Discrete observation data, for example, can be captured and stored on any document that is indexed within {{% system-name %}} , given the proper setup. Review the information below, to learn about adding and viewing document details, as needed.

## Initial Setup

1. First, in order to capture discrete observation data, the appropriate document type must already exist within {{% system-name %}} . If it does not, review the [Document Type Tab](../../system-configuration/document-type-tab.html) documentation.
2. Next, create a flowsheet with the same name as the document type (e.g., Document Type Code = 2DECHO, Flowsheet Name = 2DECHO). Be sure to match the Flowsheet name to the Document Type <em>Code</em> and not the Description.
3. To finish creating the flowsheet, add all of the preferred observations, so that the information can be captured, accordingly. If an observation does not exist within {{% system-name %}} , it must be added before attempting to configure any flowsheet.

For detailed information regarding the adding of flowsheets to {{% system-name %}} , check out the [Observation Flowsheets](https://docs.google.com/document/d/15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY) documentation.

## Adding Document Details

Once the initial setup is completed, the document and ability to capture the specified observations, or discrete values, via the matching flowsheet, can be added to any chart, as needed. Adding document details can be done in a variety of ways, such as with WebScan, Add Document Properties, File Upload, etc.

### WebScan

While using the WebScan feature, adding document details can be accomplished during the indexing process. When indexing, the Doc Type field must be provided. The {{% system-name %}} system will then perform a search for any flowsheet matching the supplied Doc Type code. If a match is found, the **Document Details** button will activate, found at the bottom of the *Index Information* section. However, continue with the remaining indexing fields before proceeding to the Document Details button.

![](../../../external_files/532dd4d4edcc28dac1947253310bb140.png)

When the Document Details button is clicked from the indexing screen, the matching flowsheet fields will open in a pop-up window, where the discrete observation data can be recorded. This pop-up allows users to enter discrete observation data associated with the respective flowsheet. Clicking the **Submit** button will save the entered data. Continue indexing, as appropriate, and upload the batch to the chart using the normal indexing workflow.

![](../../../external_files/f46849c71a7860b3aceea43948ffba37.png)

### Add Document

Another method for capturing discrete data can be done while in a specific chart, using the **Add Document** link. Access the appropriate document by clicking the **Add Document** link and selecting any of the available document options.

![](../../../external_files/b8de25c205b9ff3d7334dccb5a3d179d.png)

If a document in the library has an associated flowsheet, as described above, a *Document Details* section will be provided for data entry, with the flowsheet data entry points. When finished, continue uploading the document via the method of selection.

![](../../../external_files/9b92878e0be80bf5f3cde114f301dd5e.png)

## View/Edit Discrete Data on Document

As noted, the document details will display any discrete observation data that was captured in {{% system-name %}} from the respective flowsheet. The observation data can be viewed and/or edited in the document properties. To view captured Document Details on an uploaded document, click the **Properties** link, found in the upper-right corner of the document.

![](../../../external_files/740f5aa49d54fe5efafe2089c4f1f729.png)

Any captured discrete data will be listed in the *Document Details* section.

![](../../../external_files/5c9e635e408997e92cc20f51b3b96c13.png)

Editing this observation data can be done by simply clicking the **Edit Properties** link. The *Document Details* section will expand, allowing users to edit the observations, as needed.

Once completed, click the **Submit Changes** button, and the edits will be saved. The original observation data will remain in the chart in revision history; however, the *Document Details* section of the document properties will only show the most recent data.

![](../../../external_files/9e6b20e39550d6bfde46ec2d468f3afe.png)

{{% tip %}}

Discrete data observations can also be found and managed via the **Observations/Flowsheets** chart tab of the specific chart.

{{% /tip %}}


