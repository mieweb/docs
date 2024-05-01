---
id: '1K6yscB7qxQVp_0D1Q4uRBiJmrYQsIQ7tqQeS2PEQcs0'
title: 'Scanning'
date: '2024-05-01T18:11:43.616Z'
version: 184
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=miewebscan&s=index&no_footer=1&bat_id=0&no_tabs'
  - 'indexing.md'
source: 'https://drive.google.com/open?id=1K6yscB7qxQVp_0D1Q4uRBiJmrYQsIQ7tqQeS2PEQcs0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The  {{% system-name %}} system has integrated scanning functionality designed to streamline all scanning and indexing needs. The following information provides a basic introduction to these scanning and indexing capabilities, along with details on how to access and utilize these features.

## Scanning Using WebScan

In order to access and use WebScan, users must have the appropriate security permission granted. If users experience any issues accessing or using WebScan, ensure their *MIEWebScan*security setting is set to **Edit**.

{{% note %}}
Scanning to and appending a batch is currently supported in Internet Explorer browsers, only.
{{% /note %}}

To begin using the WebScan capabilities, first click the WebScan sidemenu option.

Once the page loads, users will see the Batch Search Criteria search options at the top of the page, with all *checked-in* batches shown below, in the list view. Checked-in batches are simply batches of scanned documents that need indexed into the appropriate charts.

![](../scanning.assets/8d986ebaa4d76ccc9130774bb4b89e30.png)

To begin scanning, simply click the [Add Batch](https://system/?f=miewebscan&s=index&no_footer=1&bat_id=0&no_tabs) link found in the upper-right corner of the screen. Once clicked, a new window will open. Here, users may scan and index documents, accordingly.

![](../scanning.assets/76f70933e1490012553bf9748633510f.png)

1. Align and insert the document(s) into the scanner tray according to the scanner specifications. Scanning can be done in portrait or landscape orientation.
2. Use the <strong>Select Partition</strong> dropdown to specify the partition to which the scanned document(s) need assigned. This field displays if the <em>Show Partition Restrict</em> system setting is enabled. Once a batch is assigned to a specific partition and scanned, only users with access to that partition will be able to see the scanned batch in WebScan.
3. Using the <strong>Priority</strong> dropdown, set the priority of the batch. Select Low, Med, or High.
4. If any comments need to be associated with a batch, simply type them into the <strong>Comments</strong> field, as necessary.
5. To review and ensure the scanner settings and preferences are enabled, click the <strong>Settings</strong> button. Users may change these settings, as needed.

![](../scanning.assets/65c5eaec311aa78a5ff30cb6ce5af18a.png)

    1. <strong>DPI</strong>: It is recommended that Resolution be set to 200 dpi. It is not recommended to scan with a dpi resolution lower than 150.
    2. <strong>Color</strong>: It is recommended that Color Depth be set to B/W (black/white). Users should only use the Color setting when absolutely necessary. This can set per page by simply changing the preference for each page being scanned.

6. The connected scanner should automatically be detected by the WebScan program. However, users can confirm the established connection by clicking the <strong>Settings</strong> button and viewing the listed scanner is correct and highlighted for use.
7. When ready, click the <strong>Scan</strong> button to begin scanning the documents. If any of the pages become jammed during the scanning process, simply acknowledge the error on the screen and click the Scan button, again. The system will resume scanning the remaining documents and automatically attach them to the previously scanned pages (i.e., the current batch of scanned documents).
8. Once the documents have been scanned in, WebScan will display the last document scanned, along with the total number of pages scanned into the batch. Using the <strong>Prev</strong> or <strong>Next</strong> Icons, users may view the documents of the batch.

![](../scanning.assets/ba1dd9ae80991027eff1b1026110d48f.png)

## Editing Scanned Batches

Once documents have been scanned into the WebScan module, users may make any necessary edits to the batch, before uploading the scanned documents into the respective charts.

{{% info %}}
Indexing can be done immediately following scanning, or saved for a later time.
{{% /info %}}

**Move Page Left** or **Move Page Right**: Users can use the Move Left or Move Right button to rearrange the pages of a batch. After using the Prev and Next buttons to navigate through the pages, users can then use the Move Left button to place the current page being displayed ahead (i.e., to the left) of the next page. Clicking the Move Right button will place the current page after (i.e., to the right) one page.

![](../scanning.assets/2a351d8a8fc106b127b540af5170530a.png)

**Rotate Left** or **Rotate** **Right**: When a document is upside down, use the Rotate Left or Rotate Right icons.

**Delete Page**: Clicking the Delete button will delete the scanned image being viewed. This *will not* prompt the user with a confirmation request. As soon as the Delete button is clicked, the image will be removed, immediately. If the deletion is done in error, the user will need to rescan the original document.

**Previous Page** or **Next Page**: To view the pages that were scanned, click the Previous Page or Next Page icon.

**Scan**: When loading more than one document to a scanned batch, users will use the Scan button. Simply place the additional documents in the scanner tray and click the Scan button. The newly scanned documents will be appended to the end of the existing batch.

**Upload**: Once the documents have been reviewed, click the Upload button to complete and upload the batch.

**Settings**: Review the scanner settings and scanner selected under the Settings button

## Uploading/Closing the Batch

Once scanning and editing is finished, users may choose to upload, upload and index, or close the batch. The following information provides details regarding each of these processes.

### Close a Batch

Users may close a batch by clicking the **X** icon from the Batch Upload window. Performing this action will close the entire batch, not saving any of the work, and the user will be exited out of the Batch Upload screen.

### Upload a Batch

To save a batch for later, users may use the **Upload** button. Clicking the Upload button from the toolbar will save the scanned batch to the Checked-In queue. A checked-in batch contains documents needing indexed into the respective charts. Once a batch is successfully uploaded, a confirmation message will display, along with the batch ID number. Users can click the OK button to scan in more batches.

### Upload and Index a Batch

To upload and index the scanned documents, click the **Upload** button and click the **Open** link which will take the user to the Indexing screen. This will upload the batch and allow the user to index each document, accordingly. For detailed information on how to index scanned documents, see our [Indexing](indexing.md) online help documentation.

{{% tip %}}
If a user must index the documents at a later time, after clicking the Upload button, he/she can simply click the **Close** button from the Indexing screen. Comments can be added and the priority updated in the Close Batch dialog window, if necessary. Once the dialog window is closed, the batch will automatically be saved to the WebScan Checked-In queue for indexing later.

![](../scanning.assets/33e037d0581e7997846a194ef9b0087f.png)
{{% /tip %}}
