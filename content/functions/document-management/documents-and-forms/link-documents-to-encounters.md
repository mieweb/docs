---
id: '1mcJnn30H7hx9cuQW4N201yIWBm0qMGI67jP-1R-UNgc'
title: 'Link Documents to Encounters'
date: '2020-03-23T17:58:18.072Z'
version: 79
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../scanning-and-indexing/indexing.md'
  - '../../document-management.md'
source: 'https://drive.google.com/open?id=1mcJnn30H7hx9cuQW4N201yIWBm0qMGI67jP-1R-UNgc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The {{% system-name %}} system allows any stored or indexed document to be linked to a corresponding encounter whether the encounter is open or closed. Linking a document to an encounter in a chart allows users to easily view the encounter and corresponding linked documents, all from one place. Security permission of *Link Documents to Encounters* must be permitted to users that need to link documents to encounters.

## Link Documents

Linking documents to encounters can be performed many different ways. Depending on the workflows being performed and where the user is located within the {{% system-name %}} system can determine the best method for linking a document to an encounter. The following discusses the various methods available for linking documents to encounters, as needed.

### Link from Document View

To link a stored chart document to an encounter, simply find the specific document in the chart that needs to be linked. Once in the document view, click the **View Links** hyperlink from the right side of the document view.

{{% note %}}
To link using this method, the document being linked to an encounter must already be indexed to the chart.
{{% /note %}}

![](../link-documents-to-encounters.assets/4697830dffd93c2a652ba57ee1db8dfa.png)

After clicking *View Links*, a pop-up window will display a list of items the document is currently linked to, if any. To link the document to an encounter, simply click the **Add** link displayed in the pop-up.

![](../link-documents-to-encounters.assets/370b27747520edb0f3f03ddb46c477fe.png)

The *Add Encounter Link* window will open with an autocomplete field and **Search** and **Add Link** buttons. Because most encounter IDs are not known, use the Search button to locate the appropriate encounter ID to be linked. Using the Search button will allow the user to search encounters from the past 3 days.

{{% tip %}}
To search further out than 3 days, simply click the **Search Within x Days** link within the *Select Encounter* window. This will search additional 3-day increments, until the appropriate encounter ID is found.
{{% /tip %}}

![](../link-documents-to-encounters.assets/8ef0e87e75792899bbb211c92fabb2d2.png)

After clicking the Search button and finding the appropriate encounter, click the **Select** link next to the encounter being linked to the document. The selected encounter ID and relevant information will populate the field. Continue by clicking the **Add Link** button, which completes the linking process.

![](../link-documents-to-encounters.assets/029c6303c3d283e2e5f69d7004571345.png)

### Link from Document Properties

A stored document can be linked to an encounter while in the Properties of the document, as well. To link a document to an encounter from the document properties, simply open the document view and click the *Properties* link, found in the upper-right corner of the document header.

![](../link-documents-to-encounters.assets/1356df2dc401c931ffefa65d466ccbef.png)

Once the Properties page loads, click the **Link to Encounter** hyperlink, near the top of the page.

{{% note %}}
If the **Link to Encounter** hyperlink is not displayed, then security permissions have not been granted. Contact your system administrator for access.
{{% /note %}}

![](../link-documents-to-encounters.assets/e70a875474d6f321d13b33ccb9b16b6c.png)

Clicking the **Link to Encounter** hyperlink will open the Encounters ListView. All encounters for the chart will appear in the list, and additional details are provided to help users identify the appropriate encounters, as needed. Once the appropriate encounter is found, simply click the **Link to Document** hyperlink, found in the Options column of the encounter being selected.

{{% info %}}
A document can be linked to an open or closed encounter.
{{% /info %}}

![](../link-documents-to-encounters.assets/d92216a13ae198ce80128f13a829973f.png)

Once clicked, the system will link the document to the selected encounter and refresh the page, where a confirmation message will be displayed along with the properties of the linked encounter.

![](../link-documents-to-encounters.assets/f8a205b381e2c338c31f9d1e70566c85.png)

### Link from WebScan

Users designated to scan and index documents into the {{% system-name %}} system also have the ability to link documents to encounters, whenever necessary. While indexing, for example, users can link a stored document (e.g., correspondence, referral consult letter, etc.) to an open or closed encounter of the specified chart.

To link documents to an encounter while using WebScan, note the **Encounter** field. In order to use this field, a chart must first be specified in the **Chart** field. Once a chart has been specified, the Encounter field will allow for searching and linking of scanned documents to encounters.

![](../link-documents-to-encounters.assets/83944e70848594ff5eb8c1cd8030e4ff.png)

If the exact encounter ID is known, users may begin typing to autocomplete the appropriate encounter. However, if the encounter ID is not known, users may begin searching for one by clicking the **Search** button next to the *Encounter* indexing field. When clicked, all encounters for the chart, 3 days out from the provided Service Date, will display. Both open and closed encounters are listed. Select the appropriate encounter by clicking the **Select** link in the Options column. When finished, either continue indexing the remainder of the batch, or upload the linked documents directly into the chart.

![](../link-documents-to-encounters.assets/85ad25fcc1ecef933f3e3a4746065498.png)

{{% tip %}}
To search further out than 3 days, simply click the **Search Within x Days** link within the *Select Encounter* window. This will search additional 3-day increments, until the necessary encounter ID is found.
{{% /tip %}}

For more details on scanning, indexing, and linking while indexing, see our [Indexing](../scanning-and-indexing/indexing.md) documentation.

### Link from Add Document

Using the **Add Document** link provides users the ability to open or create new documents in a chart. This function also allows users to specify an encounter to link to the new document, if necessary. For additional information on how to add documents, link documents, or access pre-configured or pre-templated documents, check out our documentation on [Document Management](../../document-management.md).

First, to begin adding a new document for linking an encounter to, click the **Add Document** link, while in the appropriate chart.

![](../link-documents-to-encounters.assets/43bf94345fc4b626460817b111b16bb3.png)

Find the document type needing added by using the filtering options or autocomplete field.

![](../link-documents-to-encounters.assets/2cec3af6720a820fa7c7ca44a5c3419a.png)

Once the necessary document has been selected from the library, the *Add Document Properties* screen will display. Here, users will find an **Encounter** field, where they may specify and link the appropriate encounter to the document in context.

![](../link-documents-to-encounters.assets/b1324aef413153ebadf050ec8a882a97.png)

As noted, if the exact encounter ID is known, users may begin typing to autocomplete the appropriate encounter. However, if the encounter ID is not known, users may begin searching for one by clicking the **Search** button next to the *Encounter* autocomplete field. When clicked, all encounters for the chart, 3 days out from the provided Service Date, will display. Both open and closed encounters are listed. Select the appropriate encounter by clicking the **Select** link in the Options column. Continue adding the document and linking the encounter by clicking the **Add Document** button at the bottom of the window.

![](../link-documents-to-encounters.assets/85ad25fcc1ecef933f3e3a4746065498.png)

{{% tip %}}
To search further out than 3 days, simply click the **Search Within x Days** link within the *Select Encounter* window. This will search additional 3-day increments, until the necessary encounter ID is found.
{{% /tip %}}

## View Documents Linked to Encounters

There are various ways to view documents linked to encounters. Users may simply refer to the document's properties or navigate to the Encounters chart tab.

A stored document can be accessed from either the appropriate chart tab the document is indexed to, or from the Documents chart tab. While in the document, click the **Properties** link. Once the Properties page loads, locate the **Encounters Linked to Document** section. Here, all linked encounters will be listed.

![](../link-documents-to-encounters.assets/1ededfcfbd2f80f94f8c886a3ec99ff8.png)

The linked encounters of documents can easily viewed from the **Encounters** chart tab, as well. Once the Encounters ListView loads, locate the appropriate encounter and click the **View Links** hyperlink, in the Options column. Clicking this will open a pop-up window displaying a list of documents linked to the selected encounter.

![](../link-documents-to-encounters.assets/01f86c86391b45cfd848243fc97fee6d.png)

## Move Link via Encounter Properties

Users may move a linked document from one encounter to another encounter, if necessary.

{{% note %}}
When using the Move Link functionality, users must know the specific encounter ID of the encounter the document is being moved to.
{{% /note %}}

To move a linked document to another encounter, navigate to Encounters chart tab and click the **Properties** link of the appropriate encounter.

![](../link-documents-to-encounters.assets/f57fba2ff73ce0ab70deddd8c5508655.png)

Once the page loads, scroll down to the **Links to Encounter** section to view all items linked to the encounter in context.

![](../link-documents-to-encounters.assets/7491531a4448d1aa29d5f8b8ac467c6e.png)

Find the document needing moved to another encounter. Once located, click the **Move Link** hyperlink.

![](../link-documents-to-encounters.assets/1581a57cfac23101246d2d845051e6ce.png)

When the Move Link hyperlink is clicked, the page will refresh with a **Move Encounter Link** section displayed where the previous *Links to Encounter* section was shown.

![](../link-documents-to-encounters.assets/4711bb139b7967a6199d48826880bade.png)

Enter the specific encounter ID into the **Move to Encounter** autocomplete field. Once the encounter is entered, click the **Move** button.

{{% note %}}
The Move Link functionality does not support moving documents between charts.
{{% /note %}}

![](../link-documents-to-encounters.assets/1c8bd380f5a45a8d47b4606695b4f458.png)

The page will refresh again, this time replacing the *Move Encounter Link* section with the **Confirm Move Link to Encounter** section. Click the **Confirm Move** button to confirm the moving of the document to the new encounter.

![](../link-documents-to-encounters.assets/b05b6b015f06d9c70ec79f19bb226b66.png)

After confirming the move, the page will refresh with a confirmation showing from where and where to the document has been moved.

![](../link-documents-to-encounters.assets/6c1402a70d1c4bb011b1487b7a044eeb.png)

## Unlink Documents

Unlinking a document from an encounter is just as easy as linking or viewing one. Unlinking can be performed from either the Encounter Properties or the Document Properties.

### Unlink from Encounter Properties

To remove the link of a document from an encounter, navigate to the Encounters chart tab and locate the appropriate encounter. Once located, click the **Properties** link.

![](../link-documents-to-encounters.assets/f57fba2ff73ce0ab70deddd8c5508655.png)

Once the page loads, scroll down to the **Links to Encounter** section to see all items linked to the encounter in context.

![](../link-documents-to-encounters.assets/7491531a4448d1aa29d5f8b8ac467c6e.png)

Locate the linked document needing unlinked from the encounter, and click the **Delete Link** hyperlink, in the Options column.

![](../link-documents-to-encounters.assets/cba131bdb917d7d3ddb714c2dae3f791.png)

Once clicked, the page will refresh with a **Delete Encounter Link** section displayed where the previous *Links to Encounter* section was shown. Click the **Delete Link** button to confirm the deletion of the link to the encounter.

![](../link-documents-to-encounters.assets/944bb123f69ce2b34167805ccb113e4c.png)

After confirming the deletion of the link to the encounter, the page will refresh with a confirmation, and the document will no longer be listed in the *Links to Encounters* section.

{{% warning %}}
The Delete Link function does not delete the document from the chart. It simply deletes the link between the document and the encounter, only. The document remains in the chart.
{{% /warning %}}

### Unlink from Document Properties

A link between a document and an encounter can be removed from the properties of the document, as well.

Locate the appropriate document. When viewing the document, click the **Properties** link from the document header. When the page loads, scroll down to the **Encounters Linked to Document** section.

![](../link-documents-to-encounters.assets/a0c4f1413a850449199e2cbb5b333371.png)

Locate the appropriate linked encounter and remove by simply clicking the **Remove Link** hyperlink from the Options column.

![](../link-documents-to-encounters.assets/ecd4059a4a50783864409cf5b4f7520f.png)

{{% warning %}}
There is no confirmation step when removing a link from the document properties. As soon as the *Remove Link* hyperlink is clicked, the link will be removed immediately.
{{% /warning %}}
