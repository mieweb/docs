---
id: '153ycsbo_ev5FSulpz_r0YQPR1RqLO32JDVPuZagEuDY'
title: 'PDF Documents'
date: '2022-11-11T13:17:09.076Z'
version: 69
lastAuthor: 'acook'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'word-documents-cc-physicians-feature.md'
source: 'https://drive.google.com/open?id=153ycsbo_ev5FSulpz_r0YQPR1RqLO32JDVPuZagEuDY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The {{% system-name %}} system provides the ability to browse to and upload PDF file types, if necessary. This is driven by a system setting ("E-Chart", "PDF Upload", "Enable"), which is enabled by default.

{{% note %}}
Though users may upload and store any type of file to a chart, certain file types are not supported for printing, faxing, or viewing. For more information on these limitations, please feel free to contact our Helpdesk.
{{% /note %}}

## Add a PDF to a Chart

To add a PDF document to a chart, navigate to the Document Library by clicking any **Add Document** link, found throughout the chart. Once clicked, the library will load, and the **PDF** filter link can be selected to reduce the available documents. Selecting the PDF filter link will show only document types that are available to upload as a PDF file.

![](../pdf-documents.assets/05a52e02ef3a41c01fd9f09188d1ad5b.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document type for PDF entry, from the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types).
{{% /note %}}

Select the document type needing attached and uploaded to the chart by simply clicking the PDF link following the appropriate document name.

![](../pdf-documents.assets/0e5418c78d7eb6776847e3ca74c6896a.png)

Once clicked, the Add Document Properties window will open. Fill in the available fields, as appropriate.

![](../pdf-documents.assets/cb9f2e51a6a9dd3675aaa755a0c690ef.png)

**Authored By**: Given the proper security permission, use this field to select for whom this PDF document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}
In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be an option.
{{% /note %}}

**Document Type**: Select the document type being uploaded and stored in the chart.

**Date of Service**: Provide the date of service for the document.

**Service Location**: Select the service location of the document.

**Subject**: Provide a free-text subject for the PDF document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter**: {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded PDF document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

![](../pdf-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the Encounter field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

**Link to Orders**: Like linking to encounters, PDF documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in the [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.md) help documentation.

**Drag n' Drop/Use File Upload**: This field is designed to allow the dragging and dropping of PDF files for upload, or the ability to browse to specific PDF files. The field tends to default to the Drag n' Drop option; however, clicking the **Use File Upload** link will switch to allow users to browse to local PDF files for upload.

![](../pdf-documents.assets/1e0a497f6ef4fa92df8d5bc0d6989393.png)

Multiple PDF files can be uploaded to the same chart within this session, if necessary. Any additional files will assume the same Date of Service, Location, Author, etc. To add multiple files, select the initial PDF file using the steps above, then click the **Add Another File** button, and repeat the same steps to find the necessary file(s) for upload.

![](../pdf-documents.assets/1dec34166eff4aa5a928f63c62d555dd.png)

Once the PDF(s) have been selected for upload, click the **Add Document** button. This will upload the document(s) into the chart and will display a confirmation message of successful upload.

{{% note %}}
All files must end in `.pdf` when uploading via this method.
{{% /note %}}
