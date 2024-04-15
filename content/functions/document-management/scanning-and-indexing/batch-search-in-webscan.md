---
id: '1Dycw2lHP4Ryb8rnlJbjtSogsDDKpVOt6KfPZq978E_c'
title: 'Batch Search in WebScan'
date: '2020-03-09T16:13:04.599Z'
version: 31
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=miewebscan'
  - 'scanning.md'
source: 'https://drive.google.com/open?id=1Dycw2lHP4Ryb8rnlJbjtSogsDDKpVOt6KfPZq978E_c'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In order to access the [WebScan](https://system/?f=miewebscan) module, users must have the necessary security permissions. With access, users have the ability to scan, index, review, and search scan batches, as needed. For more information on how to use the WebScan module and perform batch scanning, see our [Scanning](scanning.md) help documentation.

To review and search scan batches, open the WebScan module. Once opened, users will see the Batch Search Criteria fields, and any Checked-In batches will be listed under the Batch list view, by default. The Checked-in batches are various scanned documents ready to be indexed into the system.

![](../batch-search-in-webscan.assets/4dd8e397d14f595a6b41e9b49f7681cc.png)

To search for a scan batch, use the Batch Search Criteria search fields at the top of the page. Fill in the available fields to narrow the search, as appropriate.

**Batch ID**: These fields allow users to search a range of batches in the system. When entering a range, the lower batch number must be accompanied by a valid upper batch number. If only a lower batch number is provided, the upper batch number will be set to the same lower batch number value, meaning only the one batch will be searched. Likewise, if the upper batch number is invalid (e.g., non-numeric value or lower than the lower batch number), only the batch matching the lower batch number will be searched. If only an upper batch number is provided, the system will search all batches from zero up through the upper batch number specified.

**Batch Status**: The Batch Status dropdown can be used to search batches of a specific status. WebScan defaults to searching Checked In batches. However, users may select **all**, which will search all batches, regardless of batch status. Selecting **Checked Out** will only search in Checked Out batches. Similarly, **Complete** will only search in batches marked Completed, and **Deleted** will only search in batches marked Deleted. The **Complete w/ non-uploaded pages** option will search batches that are marked as completed, but have at least one page that has not been processed. An unprocessed page is one that does not have a document ID and the status is undefined, or empty. The intent of this status option is to allow users a way to search for batches that may have been marked completed, even though the batch contains unprocessed pages.

{{% warning %}}
Completed and Deleted batches are purged from the system every 90 days. The Deployment Specialist can change this system setting, so that purging occurs at a different interval (e.g., 60 days, 180 days, etc.), if preferred. The other batch statuses (i.e., Checked In, Checked Out, and Complete w/non-uploaded pages) will remain in the queue until marked Completed or Deleted.
{{% /warning %}}

**Comment**: This field is intended to allow users the ability to search comments provided on batches, and can be limited by a BEGINS WITH search, or an EXACT search, as needed.

**Patient**: Searching can be narrowed down to a specific patient/chart, MRN, Date of Birth, or SSN. For more information on how to utilize the autocomplete search, click the help bubble 
![](../batch-search-in-webscan.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)
 to the right of the field.

**User**: Searching can be narrowed down to a specific user, if necessary. Simply type the first or last name of the user, and select the name from the autocomplete list of choices. Leaving this field blank will search by all users.

**Account**: This field is intended for the account number created from the encounter. This is mostly used by hospital clients. The account number should not be confused for the encounter ID or the MRN.

**Batch Date**: A provided date range will search for all batches created within the specified range.

With the limiting criteria provided, simply click the **Search** button to show any applicable search results. The search results will display in the Batch list view, found below the search criteria fields. To perform another search, modify the fields as necessary, or click the **Clear** button to begin again.

![](../batch-search-in-webscan.assets/83b4d654af20d61517918e552da581dc.png)

{{% warning %}}
Any batches that display Purge in the Options column are batches with scanned documents that have been purged. Only Completed or Deleted batches are purged after a period of time. When batches are Completed or Deleted, the files are set with an expiration date, according to the system setting, and though these batches can be opened, the TIFF images (i.e., the scanned documents) of the batch cannot be viewed. The batch *cannot* be restored after it has been purged.
{{% /warning %}}
