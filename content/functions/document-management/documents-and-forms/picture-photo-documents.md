---
id: '1E5YYzxsfdGO75Ol__6jtjvnrteNioQ-QbT44hv1UqTY'
title: 'Picture-Photo Documents'
date: '2020-03-05T20:49:06.831Z'
version: 71
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'word-documents-cc-physicians-feature.md'
source: 'https://drive.google.com/open?id=1E5YYzxsfdGO75Ol__6jtjvnrteNioQ-QbT44hv1UqTY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The {{% system-name %}} system is designed to allow photos/pictures to be uploaded as documents into charts, as needed. Currently, only JPG, TIFF, and PNG file types are supported for uploading to charts, so it is important to ensure the photos being uploaded are one of these acceptable file formats prior to adding any photo documents to a chart.

## Upload Photo/Picture from Source

To begin adding a photo as a document to a chart, navigate to the Document Library by clicking any **Add Document** link, found throughout the chart. Once clicked, the library will load, and the **Picture** filter link can be selected to reduce the available document types. Selecting the Picture filter link will show only document types that are available to upload as a picture.

![](../picture-photo-documents.assets/f52a41b8eea9061d1be415eecd1101f5.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document type for picture entries, from the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types).
{{% /note %}}

Select the document type needing attached and uploaded to the chart by simply clicking the **Picture** link following the appropriate document name.

![](../picture-photo-documents.assets/4c9bb377630784187a2e7cbe66702d74.png)

Once clicked, the Add Document Properties window will open. Fill in the available fields, as appropriate.

![](../picture-photo-documents.assets/9552505e471a4e2d3872bcf1bd0e5875.png)

**Authored By**: Given the proper security permission, use this field to select for whom this document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}
In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be an option.
{{% /note %}}

**Document Type:** Select the document type being uploaded and stored in the chart.

**Date of Service:** Provide the date of service for the document.

**Service Location:** Select the service location of the document.

**Subject:** Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter:** {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. When the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

![](../picture-photo-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the Encounter field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

**Link to Orders**: Like linking to encounters, documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in the [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.md) help documentation.

Once the necessary fields have been filled in, click the **Add Document** button to locate the file for upload. The *Document Capture Control* screen will open. By default, the scan control is automatically set to open and show image files from the **Pictures** folder on the local hard drive. This is typically where most photo/images are stored when downloading from a digital camera.

{{% note %}}
If this is the first time uploading a picture, the MIE VidCap Control plugin will need to be installed. This will allow users to capture images from a camera (e.g. a webcam) for upload, or from a smartcard source, where the image file can be browsed to and uploaded, as needed.
{{% /note %}}

![](../picture-photo-documents.assets/a4efe4b500cc4430a6b7e8b0bfb9cb82.png)

{{% tip %}}
The media source can be changed, as needed. To change either the media source or the SmartCard folder, simply right-click anywhere in the box of photos/images. If the preferred media source is SmartCard, but the Picture folder is not the correct directory, select **Set SmartCard Folder**. Make sure to select the correct folder needing associated, and then click **OK**. Otherwise, to change the media source from SmartCard to any of the available alternatives (e.g., Camera), place a checkmark next to the appropriate option by simply clicking on that choice. The Document Capture Control screen will display the picture files from the newly selected folder or source.

![](../picture-photo-documents.assets/e80ea208b605333495dd9b95347243d3.png)
{{% /tip %}}

Once ready, use the mouse to select a picture for upload. When the photo is selected it will be highlighted with a blue border. If multiple photos are being uploaded and needed selected at the same time, hold the **Ctrl** button on the keyboard while clicking any additional photos needing uploaded. All selected photos will have a blue border notating the selection.

{{% tip %}}
If the work station is set up with a **WebCam** for taking photos for chart demographics, simply click the webcam icon on the scan control toolbar to open the viewer.

![](../picture-photo-documents.assets/4e5b5a5c9c4948f2f559b022b989f7e7.png)
{{% /tip %}}

When ready to upload, click the **Record** (red circle) button. This will upload the selected files.

![](../picture-photo-documents.assets/4dbf317435e943eb3f51d3eee89c04bc.png)

{{% warning %}}
With some computers, upon uploading photos, a pop-up message may display asking the user if he/she wishes to delete the uploaded image(s) from the source or smartcard folder. Answering *Yes* will delete the photo(s) in the SmartCard folder from the hard drive, making them irretrievable for future use.
{{% /warning %}}

Any uploaded photos will appear as stored documents in the respective chart. Each photo will be a separate document with the date of service specified, even though multiple photos may have been uploaded within the same session.

![](../picture-photo-documents.assets/a8d2ea860c40a8bb8a3a4d3cfb9176a0.png)
