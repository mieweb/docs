---
id: '1Wr-vTLd_jr5j2IcTTGKHlvQoD5bBdW0NolS-KrMK1cg'
title: 'Document Details'
date: '2020-03-23T17:49:31.479Z'
version: 45
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../../system-configuration/document-type-tab.md'
  - '../../order-and-result-management/observation-flowsheets.md'
source: 'https://drive.google.com/open?id=1Wr-vTLd_jr5j2IcTTGKHlvQoD5bBdW0NolS-KrMK1cg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Document details can be added in multiple ways to many types of documents within {{% system-name %}} . Discrete observation data, for example, can be captured and stored on any document that is indexed within {{% system-name %}} , given the proper setup. Review the information below, to learn about adding and viewing document details, as needed.

## Initial Setup

1. First, in order to capture discrete observation data, the appropriate document type must already exist within {{% system-name %}} . If it does not, review the [Document Type Tab](../../system-configuration/document-type-tab.md) documentation.
2. Next, create a flowsheet with the same name as the document type (e.g., Document Type Code = 2DECHO, Flowsheet Name = 2DECHO). Be sure to match the Flowsheet name to the Document Type <em>Code</em> and not the Description.
3. To finish creating the flowsheet, add all of the preferred observations, so that the information can be captured, accordingly. If an observation does not exist within {{% system-name %}} , it must be added before attempting to configure any flowsheet.

For detailed information regarding the adding of flowsheets to {{% system-name %}} , check out the [Observation Flowsheets](../../order-and-result-management/observation-flowsheets.md) documentation.

## Adding Document Details

Once the initial setup is completed, the document and ability to capture the specified observations, or discrete values, via the matching flowsheet, can be added to any chart, as needed. Adding document details can be done in a variety of ways, such as with WebScan, Add Document Properties, File Upload, etc.

### WebScan

While using the WebScan feature, adding document details can be accomplished during the indexing process. When indexing, the Doc Type field must be provided. The {{% system-name %}} system will then perform a search for any flowsheet matching the supplied Doc Type code. If a match is found, the **Document Details** button will activate, found at the bottom of the *Index Information* section. However, continue with the remaining indexing fields before proceeding to the Document Details button.

![](../document-details.assets/601c3c71db0bef0c38e7d8d6b91befbb.png)

When the Document Details button is clicked from the indexing screen, the matching flowsheet fields will open in a pop-up window, where the discrete observation data can be recorded. This pop-up allows users to enter discrete observation data associated with the respective flowsheet. Clicking the **Submit** button will save the entered data. Continue indexing, as appropriate, and upload the batch to the chart using the normal indexing workflow.

![](../document-details.assets/6e3a35777fb5349510850dd1a4b18ba3.png)

### Add Document

Another method for capturing discrete data can be done while in a specific chart, using the **Add Document** link. Access the appropriate document by clicking the **Add Document** link and selecting any of the available document options.

![](../document-details.assets/b01c4226ead136e06d145944fd3f94b4.png)

If a document in the library has an associated flowsheet, as described above, a *Document Details* section will be provided for data entry, with the flowsheet data entry points. When finished, continue uploading the document via the method of selection.

![](../document-details.assets/20f02e6ef9dde73f4658f457167d6a00.png)

## View/Edit Discrete Data on Document

As noted, the document details will display any discrete observation data that was captured in {{% system-name %}} from the respective flowsheet. The observation data can be viewed and/or edited in the document properties. To view captured Document Details on an uploaded document, click the **Properties** link, found in the upper-right corner of the document.

![](../document-details.assets/924c7c8d6b0e04331bb136561716e8cb.png)

Any captured discrete data will be listed in the *Document Details* section.

![](../document-details.assets/4a4369e3b3eace416d2ad77ddd501fc4.png)

Editing this observation data can be done by simply clicking the **Edit Properties** link. The *Document Details* section will expand, allowing users to edit the observations, as needed.

Once completed, click the **Submit Changes** button, and the edits will be saved. The original observation data will remain in the chart in revision history; however, the *Document Details* section of the document properties will only show the most recent data.

![](../document-details.assets/b9e7de506989dd41eae29255b357bb20.png)

{{% tip %}}
Discrete data observations can also be found and managed via the **Observations/Flowsheets** chart tab of the specific chart.
{{% /tip %}}
