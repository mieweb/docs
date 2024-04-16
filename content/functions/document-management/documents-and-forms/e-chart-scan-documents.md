---
id: '1uhZABnL3rktlj5EknE9RfqLdquq6eQFKknC-Dw8ZRLc'
title: 'E-Chart Scan Documents'
date: '2024-01-15T12:38:40.081Z'
version: 168
lastAuthor: 'godlewski8'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1uhZABnL3rktlj5EknE9RfqLdquq6eQFKknC-Dw8ZRLc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
With {{% system-name %}}, users have the ability to scan individual documents into a chart using a flatbed or shell scanner from within the document library. This should not be confused with the high-speed scanning functionality of the WebScan module. Rather, navigating to the documents library by clicking any of the Add Document links found throughout the chart, and filtering down to scan document types by clicking the **E-Chart Scan** filter link, allows users to upload any of the relevant documents necessary. This can include any full-sized documents, or even smaller (e.g. card-sized) items, such as photo IDs or insurance cards.

Scanning can be performed directly from the user's workstation with any flatbed scanner or card scanners for the smaller items. This removes the need for any additional cropping or resizing of images going into the chart.

In order to use the Scan method from the document library, your workstation must have MIE SSL App and MIE Device App installed.

{{% info %}}
If several single and double-sided items are being scanned into the system, it is better to utilize a high-speed scanner and the WebScan module, because large batches of documents can more quickly and easily be indexed into the system. However, the method described in this document is focused on quickly scanning individual documents via the documents library into a chart, on demand.
{{% /info %}}

## Add Scan Document

To begin scanning a document to the chart, navigate to the Document Library by clicking any of the **Add Document** links, found throughout the chart. Once clicked, the library will load, and the **E-Chart Scan** filter link can be selected to reduce the available documents. Selecting this filter link will show only document types that are available for upload as scanned documents.

![](../e-chart-scan-documents.assets/33a31139775817584041bfda95e87c70.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document type for Scan entry, from the system's Document Types editor.
{{% /note %}}

Place the document in the flatbed or shell scanner. Depending on the scanner model, flatbed scanners often scan one side at a time, whereas some ScanShell card scanners may be equipped with a duplex scanning feature, making double-sided scanning easier.

Once the scanner is prepared, select the document type from the Add Document library and upload to the chart by simply clicking the Scan hyperlink following the appropriate document name.

![](../e-chart-scan-documents.assets/0d3f8c064ef720737fba4b644940a096.png)

Scanning and uploading an individual document using this method is a two-part process, where the user scans the document using the *Document Scan Control* portion of the screen.  Then, the document gets indexed/uploaded accordingly using the *Add Document Properties* portion of the screen.

![](../e-chart-scan-documents.assets/80b9b9816d00973eaf579169eabb3938.png)

Depending on if the functionality has been used previously, the system may automatically start the scanner and begin scanning the document, automatically. Otherwise, select the appropriate scanner by clicking the **Scanner** button and choosing the necessary scanner.

![](../e-chart-scan-documents.assets/a7202a62552160dffbb63f0baca0c5b9.png)

Once the appropriate Scanner selection is set, click the **Scan Image** button to initiate scanning the document.The scanned document will appear as an image within the Document Scan Control area. If the document is two-sided and the scanner is not equipped with a duplex scanning feature, flip the document over, and click the **Scan Image** button, again. Users may scan in as many pages as necessary, though each scan will be stored as a single document in the chart.

![](../e-chart-scan-documents.assets/e204d0c8325f8c703652595b879dfbfb.png)

{{% note %}}
In order to use the Scan method from the document library, your workstation must have MIE SSL App and MIE Device App installed.  Contact your system administrator to connect to those installed apps on your workstation if you get a pop-up message stating it could not connect to those apps.

![](../e-chart-scan-documents.assets/974d7afe6689198d5372a7f40155244e.png)
{{% /note %}}

After scanning the document(s) using the above method, scroll down to the *Add Document Properties* section of the screen. Fill in the available fields, as appropriate.

![](../e-chart-scan-documents.assets/8e557d606f124578750b91c6c58b91c1.png)

* <strong>Authored By</strong>: Given the proper security permission, use this field to select for whom this document is being authored, or click the <strong>Me</strong> button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the <em>Creator</em> and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}
In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be available as an option.
{{% /note %}}

* <strong>Document Type</strong>: Select the document type being uploaded and stored in the chart.
* <strong>Date of Service</strong>: Provide the date of service for the document.
* <strong>Service Location</strong>: Select the service location of the document.
* <strong>Subject</strong>: Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.
* <strong>Encounter</strong>: {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.
* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
    * Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
    * Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

![](../e-chart-scan-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the Encounter field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

* <strong>Link to Orders</strong>: Like linking to encounters, Text documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the <em>Link to Orders</em> field. Select any of the orders needing to be linked to this scanned document, and once the file is uploaded, the order(s) will automatically be marked as Complete.
* <strong>Case</strong>: Use this field to link the scanned document to a case/incident. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the <em>Case</em> field.
* <strong>CC</strong> (<strong>Physicians</strong>): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. Information on this feature is found in the Word Documents - CC Physicians Feature help documentation.
* <strong>Textbox:</strong> For Scan documents, a textbox will be available for entering relevant information as it pertains to the scanned document(s). The <strong>Spell Check</strong> button may be utilized to check the spelling of the entered information.

Once the necessary fields and content have been added, the document(s) can be uploaded to the chart by simply clicking the **Upload** button. The scanned document(s) will be uploaded to the chart with the specified details, and a confirmation message will be displayed, notifying the user that the upload was successful. If the Upload button is not clicked, the document(s) will not be uploaded to the chart.

## Scan Control Options

When scanning in documents, there are various control options available from the Document Scan Control toolbar. These controls are intended to be used prior to uploading the document(s), and provide users the ability to rotate, crop, and move/remove documents, as needed.

![](../e-chart-scan-documents.assets/0d007797fdaa22d431c1f373c564e56f.png)

* <strong>Crop</strong>: To utilize the Crop feature, simply hover the mouse over the scanned image and place the cross cursor 
    ![](../e-chart-scan-documents.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)
     at the starting point of the intended crop. Left-click and hold the mouse button, dragging the cursor over the scanned image, highlighting (in black) the area intended to be cropped and kept. Release the mouse. If the highlighted field needs redone, simply left-click the mouse again, and resize the crop field. When ready, click the <strong>Crop</strong> button.
    * The area highlighted in black will be saved. After clicking the Crop button, the image will refresh, showing the cropped document in the upper-left corner. The cropped image will be stored in the chart, once uploaded. If more of the document requires cropping, simply continue by repeating the steps above.
* <strong>Delete</strong>: Clicking the <strong>Delete</strong> button will delete the scanned image being viewed. This <em>will not</em> prompt the user with a confirmation request. As soon as the Delete button is clicked, the image will be removed, immediately. If the deletion is done in error, the user will need to rescan the original document.
* <strong>Move Left</strong> and <strong>Move Right</strong>: These buttons can be used for reordering multi-page scan batches. If multiple documents have been scanned, the user can simply move a page to the left or the right, moving the document either ahead or behind another.

## Add Scan Document via File Upload

The same Scan method supports a File Upload.  Instead of scanning an individual document to the chart, you can use the same functionality to upload a single file/document to the chart, using the Scan document add method.

![](../e-chart-scan-documents.assets/c92467b728525a58d873ae2b7012e4e4.png)

Use the *Choose Files* button to browse out to find the file needing to be uploaded as the specific document type you indicate in the *Add Document Properties* dialog below this section.

![](../e-chart-scan-documents.assets/7815abb4e572249e97ef6a8c97b7374f.png)

{{% note %}}
The *File Upload* method from the Scan functionality only supports .TIFF file types.  If needing to upload any other file type (ex: PDF, JPG, PNG, etc), you will need to use the **File** filter method from the Add Document screen, instead of this Scan/E-Chart Scan method.
{{% /note %}}

After you have chosen the .TIFF file you wish to upload, set the document properties in the portion below this screen, then click the UPLOAD SCANNED FILE button to upload the file to the chart as the document type you indicated.
