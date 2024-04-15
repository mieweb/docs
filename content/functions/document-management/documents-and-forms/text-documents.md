---
id: '1u7x_lyt-nR0_ZyRTOFwBilkSIkuoXLXqzNZuG_LC-Gc'
title: 'Text Documents'
date: '2020-03-05T20:22:27.480Z'
version: 47
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'word-documents-cc-physicians-feature.md'
  - 'document-properties.md'
source: 'https://drive.google.com/open?id=1u7x_lyt-nR0_ZyRTOFwBilkSIkuoXLXqzNZuG_LC-Gc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The  {{% system-name %}} system is designed to allow free-text notes to be uploaded as documents into charts, as needed.

## Add a Text Document to Chart

To begin creating a text document in a chart, navigate to the Document Library by clicking any of the **Add Document** links, found throughout the chart. Once clicked, the library will load, and the **Text** filter link can be selected to reduce the available documents. Selecting the Text filter link will show only document types that are available for upload as a Text file.

![](../text-documents.assets/74a45f7f680e018af08f37b46f5e66ae.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document type for Text entry, from the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types).
{{% /note %}}

Select the document type needing attached and uploaded to the chart by simply clicking the Text link following the appropriate document name.

![](../text-documents.assets/255aa8859ce263bed38896c39e1bf464.png)

Once clicked, the Add Document Properties window will open. Fill in the available fields, as appropriate.

![](../text-documents.assets/70bfdc321a103138be91c6c66945afe0.png)

**Authored By**: Given the proper security permission, use this field to select for whom this document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}
In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be an option.
{{% /note %}}

**Document Type**: Select the document type being uploaded and stored in the chart.

**Date of Service**: Provide the date of service for the document.

**Service Location**: Select the service location of the document.

**Subject**: Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter**:  {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

    ![](../text-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the *Encounter* field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

**Link to Orders**: Like linking to encounters, Text documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in the [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.md) help documentation.

**Textbox:** For Text documents, a textbox will be available for entering relevant content. Text templates can be configured by MIE or system administrators, if necessary. When there is no pre-programmed template, the textbox will be blank, and text can be added, accordingly. If a template has been configured for the document type, be sure to follow the template, filling it in and typing where is appropriate; however, additional text can always be added, even when a template is being used.

![](../text-documents.assets/41cec040534962a9bc9335cdf0b74cf3.png)

Once the necessary fields and content have been added, the document can be uploaded to the chart by simply clicking the **Add Document** button. The Text document will be uploaded to the chart, and a confirmation message will display, notifying the user that the document has been successfully uploaded.

## Append a Text Document

The  {{% system-name %}} system allows users to append text documents, if necessary. Appending a document does not alter, change, or edit the original document. However, to append a document allows the user to provide an attachment or supplement to the original document.

To append to a text document, navigate to the document, and click the **Append** link in the options of the document header, found in the top-right of the document.

{{% tip %}}
A text document can be appended multiple times, if needed.

![](../text-documents.assets/633ddec6350273cd9c952c763a43aaa7.png)
{{% /tip %}}

The original body of the document will be labeled as **Original Document** for clear visibility.

![](../text-documents.assets/684bf819bdebde0089a4ca63f4d38ac7.png)

This original content will be followed by a large free-text box, where any additional information can be provided. Type any necessary information to append to the existing document, and click the Submit Append button to save the changes.

![](../text-documents.assets/d0293a63a4072ef971cfc1dd4f747027.png)

A confirmation message will display, notifying the user that the document has been successfully uploaded, and the appended text will be shown below the original content, with a timestamp and author of the addition.

![](../text-documents.assets/91ebcd6ac48e58cbd3ed29428705b9b7.png)

## Edit a Text Document

Editing a text document can be done according to the security permissions of the user. Some users may only be permitted to edit documents they create, making it so they can only append documents created by others. Otherwise, users may be permitted to edit and/or append any documents, regardless of the author.

To edit a text document, navigate to the document, and click the **Edit** link in the options of the document header, found in the top-right of the document.

![](../text-documents.assets/adecc089f63a34e7466ca41b4dcbe4be.png)

The *Properties for Document* screen will open. All of the fields will retain their original values, and the textbox will display the original text of the document, as well as any appended text that has been added. Here, any necessary changes can be made, accordingly.

![](../text-documents.assets/59aa722a35a2c819cb7c2080432302fc.png)

When finished, click the **Edit Document** button to save and submit the edits. A confirmation message will display, notifying the user that the document has been uploaded successfully, and the edited content will be shown below the message, with a timestamp and author of the edit(s).

![](../text-documents.assets/2c6fe13bfd4ccd7713bc65d015927896.png)

The edited document is now uploaded to the specific chart. The edited version replaces the original version, and the revision history tracks and displays from the document header.

![](../text-documents.assets/95c643da54055654f47ef1190e250d48.png)

To view the details of the revision history of a text document, simply click the **Properties** link. Once the *Properties for Document* page loads, locate the **Revisions for Document** section. The number of revisions, as well as the timestamp and author of the modifications are displayed.

![](../text-documents.assets/8096a163c284d60954c377a0eaee0f4e.png)

For more information on how to view revisions or utilize the View Diff feature, please see our [Document Properties](document-properties.md) help documentation.
