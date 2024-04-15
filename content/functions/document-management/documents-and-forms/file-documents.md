---
id: '1PaBNyPuSASuXOWiDUToeTPjuyqzBrMI1qET5jEgLXKw'
title: 'File Documents'
date: '2020-03-05T21:30:04.746Z'
version: 50
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'word-documents-cc-physicians-feature.md'
source: 'https://drive.google.com/open?id=1PaBNyPuSASuXOWiDUToeTPjuyqzBrMI1qET5jEgLXKw'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The  {{% system-name %}} solution has a system setting that allows users to browse and upload any local file types into a specific chart. This setting is known as the **Generic File Upload** setting, and it is enabled by default.

{{% note %}}
Though users may upload and store any type of file into a chart,  {{% system-name %}}  does not support, nor has the ability to print, fax, or view, certain file types. For more information on this, please reach out to our Helpdesk.
{{% /note %}}

## Add a File to a Chart

To begin adding a file to a chart, navigate into the specific chart and click the **Add Document** link accessible throughout the chart.

Once the document/form library loads, select the **File** link, to filter the options. This will load an *Add Document Properties* screen, where users can browse for a file and upload it into the chart.

![](../file-documents.assets/a68c9fbb18e17cc2071f8935c8c25d96.png)

Once the *Add Document Properties* screen opens, begin filling in the necessary fields:

**Authored By**: Given the proper security permission, select for whom this file document is authored by or click the **Me** button if the logged-in user is the *author*. The logged-in user uploading a file document into the chart is considered the Creator and will be logged as such in the document properties. Authored By is who authored the specific document being uploaded.

{{% note %}}
Users must have **Transcribe for Others** security access to author documents on behalf of others. If this setting is not enabled for the user, this field will not be an option.
{{% /note %}}

**Document Type:** Select the document type being uploaded and stored in the patient chart.

**Storage Type:** This dropdown allows users to specify the storage type of the file being uploaded. If the wrong storage type is selected, the document will not display correctly, and an error may present when the **Add Document** button is clicked. For example, an email is stored as an Email storage type, or an XML file is a CCD or CCR Document, etc. For help determining and selecting a specific storage type, do not hesitate to contact Helpdesk.

![](../file-documents.assets/0ec7505ae4472d4093a7966af322eb07.png)

**Date of Service:** Provide the date of service for the document.

**Service Location:** This drop-down can be used to choose the service location of the document.

**Subject:** Use this free-text field to provide a subject for the file document. The subject displays on List View summary pages where documents are displayed and can be searched using the Document Search report.

**Encounter:**  {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded file document to the specified encounter. If the document does not need to be linked to an encounter, simply keep the field blank.

* For the Encounter field, a <strong>Search</strong> button is provided to allow for searching specific encounters to obtain the ID for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters to assist with linking. If an encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and it will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out. If an encounter does not need to be linked, simply leave the encounter field blank.

![](../file-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the **Encounter** field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and the details from the encounter field.
{{% /info %}}

**Link to Orders:** Like linking to encounters, file documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders to link the file document to, and once the file is uploaded, the order will automatically be marked as Complete status.

**Case:** Use this field to link a file document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**)**:** Using this field allows users to attach any relevant clinicians/physicians as being carbon copied, immediately faxing or routing the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.md).

**File:** The *Browse/Choose File* button allows users to browse to their local hard drive to select the file document for upload.

After the file is selected, click the **Add Document** button. The page will refresh and display a confirmation message that the document was uploaded successfully, along with visibility to the uploaded document.
