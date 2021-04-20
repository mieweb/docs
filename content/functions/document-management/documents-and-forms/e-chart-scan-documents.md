---
title: "E-Chart Scan Documents"
date: "2020-03-09T19:33:19.747Z"
url: "functions/document-management/documents-and-forms/e-chart-scan-documents.html"
author: aquandt
version: 68
id: "1uhZABnL3rktlj5EknE9RfqLdquq6eQFKknC-Dw8ZRLc"
source: "https://drive.google.com/open?id=1uhZABnL3rktlj5EknE9RfqLdquq6eQFKknC-Dw8ZRLc"
menu:
    main:
        name: "E-Chart Scan Documents"
        identifier: "1uhZABnL3rktlj5EknE9RfqLdquq6eQFKknC-Dw8ZRLc"
        parent: "1F21zNiYq703LscR9rtGl8pZLjtxvozONvXhkaZFefEI"
        weight: 390
---
With {{% system-name %}} , users have the ability to scan individual documents into a chart using a flatbed or shell scanner. This should not be confused with the high-speed scanning functionality of the [WebScan](https://system/?f=miewebscan) module. Rather, navigating to the documents library by clicking any of the Add Document links throughout the chart, and filtering down to scan document types by clicking the **E-Chart Scan** filter link, allows users to upload any of the relevant documents necessary. This can include any full-sized documents, or even smaller (e.g. card-sized) items, such as photo IDs or insurance cards.



Scanning can be performed directly from the user's workstation, and any flatbed scanner can be used. However, MIE recommends ScanShell 800NR or 800DXN card scanners for the smaller items. This removes the need for any additional cropping or resizing of images going into the chart.



{{% info %}}

If several single- and double-sided items are being scanned into the system, it is better to utilize a high-speed scanner and the WebScan module, because large batches of documents can more quickly and easily be indexed into the system. However, the method described in this document is focused on quickly scanning in individual documents via the documents library, on demand.

{{% /info %}}


## Add E-Chart Scan Document

To begin scanning in a document to the chart, navigate to the Document Library by clicking any of the **Add Document** links, found throughout the chart. Once clicked, the library will load, and the **E-Chart Scan** filter link can be selected to reduce the available documents. Selecting this filter link will show only document types that are available for upload as scanned documents.



![](e-chart-scan-documents.images/image8.png)



{{% note %}}

If a specific document type is not listed, contact the system administrator to set up the necessary document type for Text entry, from the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types).

{{% /note %}}


Place the document in the flatbed or shell scanner. Depending on the scanner model, flatbed scanners often scan one side at a time, whereas some ScanShell card scanners may be equipped with a duplex scanning feature, making double-sided scanning easier.

Once the scanner is prepared, select the document type needing attached and uploaded to the chart by simply clicking the **Scan** link following the appropriate document name.



![](e-chart-scan-documents.images/image9.png)



{{% tip %}}

When the Scan link is clicked, the MIE VidCap Control plugin will need to be installed for first-time use. This control allows the user to scan a document using a selected scanner.

{{% /tip %}}


Scanning and uploading an individual document using this method is a two-part process, where the user first scans in the document, and then indexes the document, accordingly. Once the document is selected, the Document Capture Control screen will open at the top of the screen, with the Add Document Properties section displayed lower on the screen.

![](e-chart-scan-documents.images/image2.png)

![](e-chart-scan-documents.images/image4.png)

Depending on if the functionality has been used previously, the system may automatically start the scanner and begin scanning the document, automatically. Otherwise, select the appropriate scanner by clicking the **Select Scanner** button and choosing the necessary scanner. Once set, click the **Scan Image** button to initiate scanning the document.

![](e-chart-scan-documents.images/image3.png)

The scanned document will appear as an image within the Document Scan Control area. If the document is two-sided and the scanner is not equipped with a duplex scanning feature, flip the document over, and click the **Scan Image** button, again. Users may scan in as many pages as necessary, though each scan will be stored as a single document in the chart.

![](e-chart-scan-documents.images/image6.png)

After scanning the document(s) using the above method, scroll down to the Add Document Properties section of the screen. Fill in the available fields, as appropriate.



![](e-chart-scan-documents.images/image1.png)



**Authored By**: Given the proper security permission, use this field to select for whom this document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}

In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be available as an option.

{{% /note %}}


**Document Type**: Select the document type being uploaded and stored in the chart.

**Date of Service**: Provide the date of service for the document.

**Service Location**: Select the service location of the document.

**Subject**: Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter**: {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

![](e-chart-scan-documents.images/image5.png)



{{% info %}}

If the user has a current encounter set in the chart, the *Encounter* field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.

{{% /info %}}


**Link to Orders**: Like linking to encounters, Text documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in the [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.html) help documentation.

**Textbox:** For E-Chart Scan documents, a textbox will be available for entering relevant information as it pertains to the scanned document(s). The **Spell Check** button may be utilized to check the spelling of the entered information.



Once the necessary fields and content have been added, the document(s) can be uploaded to the chart by simply clicking the **Upload** button. The scanned document(s) will be uploaded to the chart with the specified details, and a confirmation message will display, notifying the user that upload was successful. If the Upload button is not clicked, the document(s) will not be uploaded to the chart.

## Scan Control Options

When scanning in documents, there are various control options available from the Document Scan Control toolbar. These controls are intended to be used prior to uploading the document(s), and provide users the ability to rotate, crop, and move/remove documents, as needed.



![](e-chart-scan-documents.images/image10.png)



* <strong>Crop</strong> : To utilize the Crop feature, simply hover the mouse over the scanned image and place the cross cursor  at the starting point of the intended crop. Left-click and hold the mouse button, dragging the cursor over the scanned image, highlighting (in black) the area intended to be cropped and kept. Release the mouse. If the highlighted field needs redone, simply left-click the mouse again, and resize the crop field. When ready, click the <strong>Crop</strong> button.
    * The area highlighted in black will be saved. After clicking the Crop button, the image will refresh, showing the cropped document in the upper-left corner. The cropped image will be stored in the chart, once uploaded. If more of the document requires cropping, simply continue by repeating the steps, above.



![](e-chart-scan-documents.images/image7.png)



* <strong>Delete</strong> : Clicking the <strong>Delete</strong> button will delete the scanned image being viewed. This <em>will not</em> prompt the user with a confirmation request. As soon as the Delete button is clicked, the image will be removed, immediately. If the deletion is done in error, the user will need to rescan the original document.
* <strong>Move Left</strong> and <strong>Move Right</strong> : These buttons can be used for reordering multi-page scan batches. If multiple documents have been scanned, the user can simply move a page to the left or the right, moving the document either ahead or behind another.
