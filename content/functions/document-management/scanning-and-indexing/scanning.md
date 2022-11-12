---
id: '1K6yscB7qxQVp_0D1Q4uRBiJmrYQsIQ7tqQeS2PEQcs0'
title: 'Scanning'
date: '2021-12-29T13:08:55.701Z'
version: 94
lastAuthor: 'sriecke'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=miewebscan'
  - 'https://system/?f=miewebscan&s=index&no_footer=1&bat_id=0&no_tabs'
  - 'indexing.md'
source: 'https://drive.google.com/open?id=1K6yscB7qxQVp_0D1Q4uRBiJmrYQsIQ7tqQeS2PEQcs0'
wikigdrive: '8934ab392b82c3a1d5a8ae9fb7795d99e93c12ca'
menu:
  main:
    name: 'Scanning'
    identifier: '1K6yscB7qxQVp_0D1Q4uRBiJmrYQsIQ7tqQeS2PEQcs0'
    parent: '1pwmW3emkb6f6tktfbMmtsZOKMk1XGa6a8VtvCQz269w'
    weight: 670
---
The  {{% system-name %}} system has integrated scanning functionality designed to streamline all scanning and indexing needs. The following information provides a basic introduction to these scanning and indexing capabilities, along with details on how to access and utilize these features.
  
## Scanning Using WebScan  
  
In order to access and use WebScan, users must have the appropriate security permission granted. If users experience any issues accessing or using WebScan, ensure their *MIEWebScan*security setting is set to **Edit**.  
{{% note %}}

Scanning to and appending a batch is currently supported in Internet Explorer browsers, only.
{{% /note %}}
To begin using the WebScan capabilities, first click the [WebScan](https://system/?f=miewebscan) sidemenu option.
Once the page loads, users will see the Batch Search Criteria search options at the top of the page, with all *checked-in* batches shown below, in the list view. Checked-in batches are simply batches of scanned documents that need indexed into the appropriate charts.
  
![](../scanning.assets/1000020100000771000001855A09293F4C41926F.png)  

To begin scanning, simply click the [Add Batch](https://system/?f=miewebscan&s=index&no_footer=1&bat_id=0&no_tabs) link found in the upper-right corner of the screen. Once clicked, a new window will open. Here, users may scan and index documents, accordingly.
  
![](../scanning.assets/10000201000007440000006732CC3CFDF6D938B3.png)  

1. Align and insert the document(s) into the scanner tray according to the scanner specifications. Scanning can be done in portrait or landscape orientation.
2. Using the <strong>Priority</strong> dropdown, set the priority of the batch. Select Low, Med, or High.
3. If any comments need to be associated with a batch, simply type them into the <strong>Comments</strong> field, as necessary.
4. Use the <strong>Select Partition</strong> dropdown to specify the partition to which the scanned document(s) need assigned. This field displays if the <em>Show Partition Restrict</em> system setting is enabled. Once a batch is assigned to a specific partition and scanned, only users with access to that partition will be able to see the scanned batch in WebScan.
5. To review and ensure the scanner settings and preferences are enabled, click the <strong>Settings</strong> button. Users may change these settings, as needed. For instance, barcodes on form documents will be read regardless of page orientation if the <em>Auto-Rotate to Find Barcodes</em> preference is set to <strong>Yes</strong>.

  
   ![](../scanning.assets/100002010000038100000144096699442C110825.png)  


   1. <strong>Resolution</strong>: It is recommended that Resolution be set to 200 dpi. It is not recommended to scan with a dpi resolution lower than 150.
   2. <strong>Color Depth</strong>: It is recommended that Color Depth be set to B/W (black/white). Users should only use the Color setting when absolutely necessary. This can set per page by simply changing the preference for each page being scanned.
   3. <strong>Duplex</strong>: Users may scan the front and back of documents by setting Duplex to Yes.
7. The connected scanner should automatically be detected by the WebScan program. However, users can confirm the established connection by clicking the <strong>Select Scanner</strong> button and viewing the listed scanner is correct and highlighted for use.
8. When ready, click the <strong>Scan Image</strong> button to begin scanning the documents. If any of the pages become jammed during the scanning process, simply acknowledge the error on the screen and click the Scan Image button, again. The system will resume scanning the remaining documents and automatically attach them to the previously scanned pages (i.e., the current batch of scanned documents).
9. Once the documents have been scanned in, WebScan will display the last document scanned, along with the total number of pages scanned into the batch. Using the <strong>Prev</strong> or <strong>Next</strong>buttons, users may view the documents of the batch.
  
![](../scanning.assets/100002010000076700000362A99BC81150B73D08.png)  

  
### Hotkeys in WebScan  

Users may use hotkeys for certain functions within WebScan. To see the list of available hotkeys for WebScan, click the help bubble (encircled question mark) next to the Close button.
  
![](../scanning.assets/1000020100000174000000DA1162877890DAA5B5.png)  


**Acquire** ([Ctrl] + a): Performs the same function as the Scan Image button on the toolbar.
**Upload & Index** ([Ctrl] + i): Performs the same function as the Upload & Index button on the toolbar.
**Upload** ([Ctrl] + u): Performs the same function as the Upload button on the toolbar.
**Delete** ([Delete]): Perform the same function as the Delete Page button on the toolbar.
  
## Editing Scanned Batches  

Once documents have been scanned into the WebScan module, users may make any necessary edits to the batch, before uploading the scanned documents into the respective charts.
{{% info %}}

Indexing can be done immediately following scanning, or saved for a later time.
{{% /info %}}
**Move Left** or **Move Right**: Users can use the Move Left or Move Right button to rearrange the pages of a batch. After using the Prev and Next buttons to navigate through the pages, users can then use the Move Left button to place the current page being displayed ahead (i.e., to the left) of the next page. Clicking the Move Right button will place the current page after (i.e., to the right) one page.
**Crop**: Users may Crop a document prior to indexing it to a chart. First, navigate to the page needing cropped, using the Prev or Next button, accordingly. To utilize the Crop feature, simply hover the mouse over the scanned image and place the cross cursor (+) at the starting point of the intended crop. Left-click and hold the mouse button, dragging the cursor over the scanned image, highlighting (in black) the area intended to be cropped and kept. Release the mouse. If the highlighted field needs redone, simply left-click the mouse again, and resize the crop field. When ready, click the **Crop** button. The area highlighted in black will be saved. After clicking the Crop button, the image will refresh, showing the cropped document in the upper-left corner. The cropped image will be stored in the chart, once uploaded. If more of the document requires cropping, simply continue by repeating the steps, above.
  
![](../scanning.assets/10000201000007580000020AB3F2E82B48E65496.png)  

{{% warning %}}

Once a page has been cropped, there is not a way to retrieve the original document without rescanning the original document.
{{% /warning %}}
**Delete Page**: Clicking the Delete button will delete the scanned image being viewed. This *will not* prompt the user with a confirmation request. As soon as the Delete button is clicked, the image will be removed, immediately. If the deletion is done in error, the user will need to rescan the original document.
**Replace Page**: To replace a page in a scanned batch, navigate to the page needing replaced and load the replacement document into the scanner. Once finished, click the Replace Page button. The document will be scanned into the batch, replacing the displayed document with the newly scanned document.
**Insert Page**: Users may add a page to a batch, as needed. Simply navigate to the document of the batch the inserted page should follow, and load the appropriate document into the scanner. When ready, click the Insert Page button. The inserted page will be displayed in the scanned batch.
**Scan Image**: When loading more than one document to a scanned batch, users will use the Scan Image button. Simply place the additional documents in the scanner tray and click the Scan Image button. The newly scanned documents will be appended to the end of the existing batch.
**FileUpload**: With the FileUpload button, users have the ability to upload TIFF files and save them locally. Click the FileUpload button.
{{% note %}}

If this is the first time uploading a file, the MIE VidCap Control plugin will need installed. This will allow users to upload files from a smartcard source, where the files can be browsed to and uploaded, as needed.
{{% /note %}}
Use the mouse to select a file for upload. When the file is selected it will be highlighted with a blue border. If multiple files are being uploaded and need selected at the same time, hold the **Ctrl** button on the keyboard while selecting any additional files for upload. All selected files will have a blue border notating the selection. The file(s) selected must be in TIFF format, otherwise the user will receive an error message.

  
![](../scanning.assets/100002010000073B0000023BC1032B39EEB5CA64.png)  

{{% tip %}}

The SmartCard folder can be changed, as needed. To change the SmartCard folder, simply right-click anywhere in the box of documents. Select **Set SmartCard Folder**. Make sure to select the correct folder needing associated, and then click **OK**.
{{% /tip %}}
Once the desired TIFF files have been selected, click **Upload** or **Upload & Index** from the toolbar.
{{% warning %}}

With some computers, upon uploading photos, a pop-up message may display asking the user if he/she wishes to delete the uploaded image(s) from the source or smartcard folder. Answering *Yes* will delete the photo(s) in the SmartCard folder from the hard drive, making them irretrievable for future use.
{{% /warning %}}
Users will receive a confirmation message showing the upload was successful, giving the user the batch ID number. Users can click the OK button to continue and select additional files, or click the Close button from the toolbar to quit.
  
![](../scanning.assets/10000201000001AF000000E917BE0073135AE980.png)  

  
## Uploading/Closing the Batch  

Once scanning and editing is finished, users may choose to upload, upload and index, or close the batch. The following information provides details regarding each of these processes.
  
### Close a Batch  

Users may close a batch by clicking the **Close** button from the toolbar. Performing this action will close the entire batch, not saving any of the work, and the user will be exited out of the Add Batch screen. Users will not be warned of losing the batch when the Close button or the X (from the corner of the window) is clicked.
  
### Upload a Batch  

To save a batch for later, users may use the **Upload** button. Clicking the Upload button from the toolbar will save the scanned batch to the Checked-In queue. A checked-in batch contains documents needing indexed into the respective charts. Once a batch is successfully uploaded, a confirmation message will display, along with the batch ID number. Users can click the OK button to proceed scanning additional documents, or close out of the Add Batch screen.
  
### Upload and Index a Batch  

To upload and index the scanned documents, click the **Upload & Index** button. This will upload the batch and allow the user to index each document, accordingly. For detailed information on how to index scanned documents, see our [Indexing](indexing.md) online help documentation.
{{% tip %}}

If a user must index the documents at a later time, after clicking the Upload & Index button, he/she can simply click the **Close** button from the Indexing screen. Comments can be added and the priority updated in the Close Batch dialog window, if necessary. Once the dialog window is closed, the batch will automatically be saved to the WebScan Checked-In queue for indexing later.
  
![](../scanning.assets/10000201000002960000011E149F02F6C6CE8F3B.png)  

{{% /tip %}}

