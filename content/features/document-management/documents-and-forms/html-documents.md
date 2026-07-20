---
id: '1kqHmDHlgYYRiuZt8zHy8Zrj48UvduL6Stu9jwCJ7BsU'
title: 'HTML Documents'
date: '2026-07-20T18:05:29.009Z'
version: 65
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-configuration/document-type-tab/'
source: 'https://drive.google.com/open?id=1kqHmDHlgYYRiuZt8zHy8Zrj48UvduL6Stu9jwCJ7BsU'
wikigdrive: 'v2.16.0'
---
The  {{% system-name %}} system is designed to allow HTML documents to be uploaded as documents into charts, as needed.

## Add a HTML Document to Chart

To begin creating a HTML document in a chart, navigate to the Document Library by clicking any of the **Add Document** links, found throughout the chart. Once clicked, the library will load, and the **HTML** filter link can be selected to reduce the available documents. Selecting the HTML filter link will show only document types that are available for upload as a HTML file.

![](./html-documents.assets/04696bae355d488d156c28d5ff18cabb.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document type for HTML entry, from the [Document Types editor](https://docs.enterprisehealth.com/functions/system-configuration/document-type-tab/).
{{% /note %}}

Select the document type needing to be attached and uploaded to the chart by simply clicking the HTML link following the appropriate document name.

![](./html-documents.assets/bbc4bac9b6dac0fd3c95f36ff7acabf0.png)

Once clicked, the Add Document Properties window will open. Fill in the available fields, as appropriate.

![](./html-documents.assets/5a6eebeda6e71ac4be11ae01d73b17f5.png)

**Authored By**: Given the proper security permission, use this field to select for whom this document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

* In order to author documents for others, the user must have the Access Control <strong>Transcribe for Others</strong> setting set to <strong>Yes</strong>. If this setting is not enabled for the user, the Authored By field will not be available as an option.
* The <strong>Choose</strong> drop-down list of names will populate with list choices of users who are tied to the department specified in a system setting named Webchart / Settings / Physician Realm

![](./html-documents.assets/7635812e7191ecb60d4cd0288da5b217.png)

**Document Type**: Select the document type being uploaded and stored in the chart.

**Date of Service**: Provide the date of service for the document.

**Service Location**: Select the service location of the document.

**Subject**: Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter**:  {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

    ![](./html-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the *Encounter* field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

**Link to Orders**: Like linking to encounters, HTML documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing to be linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup.

**HTML Editor:** For HTML documents, an HTML template will be available for editing. HTML templates can be configured by MIE or system administrators, if necessary. When there is no pre-programmed template, the textbox will be blank, and text can be added, accordingly. If a template has been configured for the document type, be sure to follow the template, filling it in and typing where is appropriate; however, additional text can always be added, even when a template is being used.

![](./html-documents.assets/ff6b2b184cbab57b4bc3716ec15a7c3a.png)

## HTML Template Editor within Document Types

To create a new HTML Template, go to the Document Types within the Control Panel. Add a new Document Type or edit an existing document type. When adding the document type, make sure the HTML option is selected in the Document Addition Methods at the bottom of the page. Click Save when complete.

![](./html-documents.assets/1c4b5611dc3add57c946be3aca8997e0.png)

Within the Document Types module, click Edit next to the HTML option to begin creating a template.

![](./html-documents.assets/ffb7bfbd7302323d26c8542a929caa1b.png)

Once in the HTML Editor, begin creating your template.

![](./html-documents.assets/5204560e27750022683611ecebb3cc03.png)

**Vars**: These are the different variables or attributes that can be added to your template. When you go to Add Document and open up an HTML document with a template, the variables will be filled in with the appropriate data.

![](./html-documents.assets/226987386b82274f1522d15f02f81e11.png)

When you click on a Variable, additional options may appear. For example, if you click on pat, additional variables about the patient will appear such as the patient's first name.

**Undo/Redo**: The forward and backwards arrows are to redo or undo a previous item.

**Type**: This is the "T" icon. The options will appear in a dropdown.

**Heading**: This is the "H" icon. A user can create different headings for the template.

**List**: This is the bulleted pointed list icon. A user can add bullet points to create a list.

**Bold**: This is the **B** icon. Text can be made bold, if needed.

**Italicised**: This is the *I* icon. Text can be made italic, if needed.

**Strikethrough**: This is the T with a line through it icon.

**Underline**: This is the U icon.

**Highlight**: This is the marker with the yellow line underneath it icon.

**Link**: This is the sideways paperclip icon. A hyperlink can be added to the template for a user to follow.

**Left, Center, Right and Justified**: These options allow a user to have the text align in a certain way, either left, center, right or justified.

**Insert Image**: This is the picture icon. This allows for a user to add an image to the HTML document, such as a logo.

**Table**: This is the grid icon. A user can add a table to their HTML document to organize data clearly.

Once the template has been created. Click the Save Template button.
