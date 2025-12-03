---
id: '1PaBNyPuSASuXOWiDUToeTPjuyqzBrMI1qET5jEgLXKw'
title: 'File Documents'
date: '2025-12-03T19:31:25.737Z'
version: 170
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/word-documents-cc-physicians-feature/'
  - 'https://mie.talentlms.com/shared/start/key:LBZIDNHR'
source: 'https://drive.google.com/open?id=1PaBNyPuSASuXOWiDUToeTPjuyqzBrMI1qET5jEgLXKw'
wikigdrive: 'v2.15.30'
---
The  {{% system-name %}} solution has a system setting that allows users to browse and upload any local file types into a specific chart. This setting is known as the **Generic File Upload** setting, and it is enabled by default.

{{% note %}}
Though users may upload and store any type of file into a chart,  {{% system-name %}}  does not support, nor has the ability to print, fax, or view, certain file types. For more information on this, please reach out to our Helpdesk.
{{% /note %}}

## Add a File to a Chart

To begin adding a file to a chart, navigate into the specific chart and click the **Add Document** link or from the lightning bolt icon accessible throughout the chart.

![](./file-documents.assets/f4ff0d2ba8c74dfd5da941bb4de84180.png)

Within the *Add Documents* screen, simply filter by File.  This will display the File Upload screen, where you can upload a file to be inserted into the chart.

![](./file-documents.assets/76e9434a10b18e1f85d5c7189508109a.png)

Within the *Add Document Properties* screen, users can signify the document details within the fields and then browse for a file to upload into the chart.

![](./file-documents.assets/3858af51c69ac5cc525a18ca108d18bf.png)

*Add Document Properties* fields:

* <strong>Document Type:</strong> This is a required field. Select the document type being uploaded and stored in the chart.
* <strong>Authored By</strong>: This is a required field. Given the proper security permission, select for whom this file document is authored by or click the <strong>Me</strong> button if the logged-in user is the <em>author</em>. The logged-in user uploading a file document into the chart is considered the Creator and will be logged as such in the document properties. Authored By is who authored the specific document being uploaded.
    * Users must have <strong>Transcribe for Others</strong> security access to author documents on behalf of others. If this setting is not enabled for the user, this field will not be an option.
    * The <strong>Choose</strong> drop-down list of names will populate with list choices of users who are tied to the department specified in a system setting named Webchart / Settings / Physician Realm

![](./file-documents.assets/7899005db163fcae333b8d6b3bed4d75.png)

* <strong>Date of Service:</strong> This is a required field. Provide the date of service for the document.
* <strong>Service Location:</strong> This drop-down can be used to choose the service location of the document. Note: if left blank, the file will be uploaded without a service location noted and will not assume any specific location.
* <strong>Subject:</strong> Use this free-text field to provide a subject for the file document. The subject displays on List View summary pages where documents are displayed and can be searched using the Document Search report. Note: if left blank, the file will be uploaded without any subject noted.
* <strong>Encounter:</strong>  {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded file document to the specified encounter. If the document does not need to be linked to an encounter, simply keep the field blank.
    * For the Encounter field, a <strong>Search</strong> button is provided to allow for searching specific encounters to obtain the ID for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
    * Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters to assist with linking. If an encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and it will place the encounter ID and details into the <em>Encounter</em> field.
    * Click the <em>Search Within [#] days</em> hyperlink (at the bottom of the pop-up screen) to search for and display encounters occurring in increments further out. If an encounter does not need to be linked, simply leave the encounter field blank.

![](./file-documents.assets/9cf368609c37462e90d929065466525e.png)

{{% info %}}
If the user has a current encounter set in the chart, the **Encounter** field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and the details from the encounter field.
{{% /info %}}

* <strong>Link Order:</strong> Like linking to encounters, file documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the <em>Link to Orders</em> field. Select any of the orders to link the file document to, and once the file is uploaded, the order will automatically be marked as Complete status.
* <strong>Case:</strong> Use this field to link a file document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the <em>Case</em> field.
* <strong>CC</strong> (<strong>Physicians</strong>)<strong>:</strong> Using this field allows users to attach any relevant clinicians/physicians as being carbon copied, immediately faxing or routing the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in [Word Documents - CC Physicians Feature](https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/word-documents-cc-physicians-feature/).
* <strong>Choose Files:</strong> Users may drop and drag files to the ‘Drop files here' area/box or use the ‘Choose Files' button to browse on your device to select the specific file document for upload. This version of the File Upload feature allows users to upload several different documents/files at once and can change the field information per file/document needing to be uploaded.

Once a file(s) has been chosen (via drag & drop or browse & select), the file(s) will display at the right side area of the File Upload screen.

![](./file-documents.assets/b1524c7d1faf72d54195dff7a3a3c780.png)

However, if any of the 3 required document property fields are blank (document type, or author, or service date), a popup warning window will appear to set those when trying to drag/drop or browse to upload the file.

![](./file-documents.assets/841379bf4f1beee45966f745cb6470cd.png)

Users may then select the *Upload Document* button to upload all document(s)/file(s) into the chart at once.

![](./file-documents.assets/5b4edc50aaa5c22a3e4991cd6d696174.png)

## Learning Management System

To learn more about File Documents, follow the link below to the Learning Management System course:

* [Forms Library/Documents Library Access](https://mie.talentlms.com/shared/start/key:LBZIDNHR)
