---
id: '1Dycw2lHP4Ryb8rnlJbjtSogsDDKpVOt6KfPZq978E_c'
title: 'Batch Search in WebScan'
date: '2025-11-10T17:18:43.950Z'
version: 76
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/document-management/scanning-and-indexing/scanning/'
  - 'https://docs.enterprisehealth.com/functions/reports/webscan-report/'
source: 'https://drive.google.com/open?id=1Dycw2lHP4Ryb8rnlJbjtSogsDDKpVOt6KfPZq978E_c'
wikigdrive: 'v2.15.30'
---
In order to access the [WebScan](https://docs.enterprisehealth.com/functions/document-management/scanning-and-indexing/scanning/) module, users must have the necessary security permissions. With access, users have the ability to scan, index, review, and search scan batches, as needed. For more information on how to use the WebScan module and perform batch scanning, see our [Scanning](https://docs.enterprisehealth.com/functions/document-management/scanning-and-indexing/scanning/) help documentation.

To review and search scan batches, open the WebScan module. Once opened, users will see the Batch Search Criteria fields, and any New batches will be listed under the Batch list view, by default. The New batches are various scanned documents ready to be indexed into the system.

![](./batch-search-in-webscan.assets/ba4961794c4ade64ed7fb5531f348268.png)

## Searching Batches

The WebScan module will display all *New* batches, by default. However, a user may search for a batch by its batch ID number, its comments, a specific patient or user, or the batch date. Use the search filters to narrow search results, and after clicking the **Search** button, matching results will populate below the search in a ListView.

![](./batch-search-in-webscan.assets/51c17a6d74053712dfe1ff9470569949.png)

### Columns in Batch ListView

The **Batch** section of the screen lists various columns of information. Click any of the column headers to sort in ascending/descending alphabetical or numerical order.

![](./batch-search-in-webscan.assets/218f52092de3d49968cad6eaa392d4c0.png)

The columns include:

* <strong>Batch ID</strong>: Identification number assigned to the batch.
* <strong>User</strong>: User that scanned in the batch.
* <strong>Comment</strong>: Displays any comments that were added when the batch was scanned, opened, or completed.
* <strong>Partition</strong>: Used to determine the partition the batch is scanned into. Users in systems with multiple partitions will have access to only those batches and partitions they are restricted to. Those batches with partitions that display as blank are open to every WebScan user for working and completing.
* <strong>Project</strong>: Displays the program that batched the documents (e.g., MIEWebScan).
* <strong>Creation date</strong>: Date the batch was scanned into the system.
* <strong>Modified Date</strong>: Date of last modification, or the date the batch was last opened.
* <strong>Pages</strong>: Displays the number of pages in the batch.
* <strong>Priority</strong>: Displays the level of priority of the batch. Default is zero, given when no priority is set. The higher the priority to index the batch, the higher the number given.
* <strong>Status</strong>: Displays the status of the batch.
* <strong>Options:</strong> Quick links for performing necessary actions when managing batches. Options include <em>Open</em>, <em>View</em>, and <em>Delete</em>.

## Purged Batches

By default, Completed batches are purged from the {{% system-name %}} system after 90 days. However, the system setting ("MIEWebScan", "Settings", "Purge age in days") can be updated to purge at different intervals, if preferred.

Any batches that display Purge in the Options column are batches with scanned documents that have been purged. Only Completed or Deleted batches are purged after a period of time. When batches are Completed or Deleted, the files are set with an expiration date, according to the system setting, and though these batches can be opened, the TIFF images (i.e., the scanned documents) of the batch cannot be viewed. The batch *cannot* be restored after it has been purged.

## My Settings Preference

My Settings Preference **Show Pending Batches:** If your My Settings Preference for *Show Pending Batches* is On (and you have security permission to at least view MIEScan), the system will display the WebScan (x) count hyperlink at the top of every screen.

![](./batch-search-in-webscan.assets/0648372bb9ec6f9de23131655d61e146.png)

* The WebScan (x) count hyperlink is a quick visual of how many New <strong>and</strong> Incomplete total batches there are that need worked.  The user can also easily click on the WebScan (x) count hyperlink to be taken directly to the WebScan batches, where the Batch Status will automatically be populated as <em>New and Incomplete</em>, to begin working those batches to completed status.

![](./batch-search-in-webscan.assets/d7964dac86590b8c652cfe27ce60e97d.png)

## Reporting

From the Reports sidemenu, there is a report named WebScan Report.  Displays statistical details regarding scanned/uploaded batches and Indexed pages.  For more information, please refer to the [WebScan Report](https://docs.enterprisehealth.com/functions/reports/webscan-report/) guide.

![](./batch-search-in-webscan.assets/bfbb78e09c33dd0adfe6be7dc0cfeede.png)
