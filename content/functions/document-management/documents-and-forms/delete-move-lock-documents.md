---
id: '1uTO46APK2mbErCejVhXDlPSyVYOu3JHki92eUXmndz4'
title: 'Delete/Move/Lock Documents'
date: '2020-03-23T17:21:07.161Z'
version: 66
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=admin&s=recordman&tabmodule=admin&tabselect=Record+Locks'
source: 'https://drive.google.com/open?id=1uTO46APK2mbErCejVhXDlPSyVYOu3JHki92eUXmndz4'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In order to delete, move, or lock documents found within a chart, users must have the proper security permissions granted. There are a few specific security permissions that control what can be done with documents within a chart. These security permission settings are: *Document Move*, *Document Lock*, *Document Delete*, and *Document Un-Delete*.

## Delete Documents

The security permission **Document Delete** must be set to **Yes** in order to delete a document from a chart. If the user has the **Document Un-Delete** permission set to **Yes**, then that user would be able to *undelete* documents. Undeleting documents will reactivate them in the chart.

{{% warning %}}
Deleting a document in {{% system-name %}} will simply remove the contents from being visible. The document will continue to show as a line item on lists, marked as *deleted*. This provides visibility to documents that once existed and have since been removed, or deleted.
{{% /warning %}}

To delete a document from a chart, find and open the document needing deleted. While viewing the document, click the **Properties** link near the upper-right corner of the page.

![](../delete-move-lock-documents.assets/45c3efbfece2b0dfdd229cb41adcb026.png)

Once the page reloads, click the **Delete** link.

![](../delete-move-lock-documents.assets/797519ed3d4d01e8a86e2503832186cc.png)

The *Delete Document* confirmation prompt will load at the top of the document. This shows the document ID in parentheses, and a free-text field to state *Reason for Deleting Document*. To proceed with deletion, it is required to provide the reason for deleting the document. Click the **Delete Document** button, when finished.

![](../delete-move-lock-documents.assets/db0ab9bd016d8051329e17b85bb9c51d.png)

After deleting, a confirmation will appear stating, *Document (ID#) has been Deleted Successfully*. All content of the document will be removed and replaced with verbiage of the document's deletion and the reason for deleting.

![](../delete-move-lock-documents.assets/a12c66e489386d4bc9067a0f79213ae2.png)

{{% system-name %}} will keep a record of document deletions in the revision history of the chart. The document(s) will be kept in the chart, with the contents removed. Some chart tabs are configured to omit deleted documents from the view, by default (e.g., Document Summary chart tab). Other chart tabs can be configured to omit deleted documents from view, if preferred. Otherwise, chart tabs will display a deleted document in the List View.

![](../delete-move-lock-documents.assets/8da2e38a1f57a2c08a215fd9767f1332.png)

{{% tip %}}
MIE can also set up a Deleted Documents chart tab, configured to house any/all deleted documents, for easy viewing in a separate chart tab.
{{% /tip %}}

## Move Documents

The security permission **Document Move** must be set to **Yes** in order to move documents between charts. With this permission set, users may move documents from one chart into another. This is typically reserved for instances where a document was accidentally indexed into the wrong chart.

To perform moving a document from one chart to another, find and open the document needing moved. While viewing the document, click the **Properties** link near the upper-right corner of the page.

![](../delete-move-lock-documents.assets/58fa967f667590827b004197bb77b595.png)

Once the *Properties for Document* screen loads, click the **Move** link.

![](../delete-move-lock-documents.assets/43ae58f888df5b6cfd8a354496547fc9.png)

The *Move Document* confirmation prompt will display at the top of the screen. This shows the document ID in parentheses, an autocomplete field to specify where the document is going, and a free-text field to provide *Reason for Moving Document*.

![](../delete-move-lock-documents.assets/3ba3e8865b7ed609dab2cfe71f457cf2.png)

To proceed moving the document, use the *Move To Employee/Patient* autocomplete field to specify the appropriate chart the document needs moved into. The autocomplete field functions as a search for finding the correct chart, because the necessary chart must already exist in order to move the document. Use the help bubble for assistance with searching for the appropriate chart.

After selecting, be sure to fill in the *Reason for Moving Document* field, and click the **Move Document** button.

{{% tip %}}
If there are duplicate, or matching patients, these will display above the chart search. Click **Select** next to the appropriate chart the document is being moved into.
{{% /tip %}}

Once finished, a confirmation will populate at the top of the page, stating *Document (ID#) has been moved to patient MR: # successfully*.

![](../delete-move-lock-documents.assets/e27ceebd6c9bf5b2e0f9f51c0579f7df.png)

{{% system-name %}} will keep a record of document moves in the revision history of the chart. In the List View of the original chart, documents will display as *Deleted*, because the document is considered *deleted* from the original chart and *moved* into the correct chart. The full contents of the document can be viewed from the correct chart.

![](../delete-move-lock-documents.assets/7c5dadc9fa83bc490e15dcc3c9bda789.png)

{{% note %}}
When moving a document, any/all encounters linked to the document will be unlinked, to prevent any unwanted links to other charts.
{{% /note %}}

## Lock Documents

The **Document Lock** security permission must granted in order for a user to be able to lock documents. There are varying levels of security when it comes to locking documents. For example, users can be granted permission to lock only their documents, or they can be given permission to lock any/all documents.

To lock a document, find and open the document needing locked. While viewing the document, click the **Properties** link near the upper-right corner of the page.

![](../delete-move-lock-documents.assets/58fa967f667590827b004197bb77b595.png)

Once the page reloads, click the **Lock** link.

![](../delete-move-lock-documents.assets/ad74c9ec4326522bc2d7e338f8520e64.png)

The *Locking Document* confirmation prompt will load at the top of the document. This shows the document ID in parentheses, and a free-text field to state *Reason for Locking Document*. To proceed with locking, it is required to provide the reason. Click the **Lock Document** button, when finished.

![](../delete-move-lock-documents.assets/7a39a7a1c8d0af05ec0111f5d6a4ab71.png)

After locking, a confirmation will appear stating, *Document ID (#) has been locked successfully*. {{% system-name %}} will keep a record of this locked document in the revision history of the chart.

![](../delete-move-lock-documents.assets/e8d39885fcb863ad5616056527590644.png)

When viewing document List Views, all locked documents will display in the list; however, all locked documents indicate their locked status, along with the provided reason for locking.

![](../delete-move-lock-documents.assets/fe28bdbde337d8f0d9245626754d8dc1.png)

Users without permission to view locked documents will not see any contents when trying to access a locked document. Only users with proper security permissions to lock documents can view locked documents. There are also security options for users to be able to print locked documents, if necessary.

![](../delete-move-lock-documents.assets/f13bc18b4e30f1389e90a4f40c60ec88.png)

## Remove Old Record Locks

With the proper security permission, a user may review a full listing of current record locks on documents. Simply navigate to the **Control Panel** and select the [Record Locks](https://system/?f=admin&s=recordman&tabmodule=admin&tabselect=Record+Locks) tab. Authorized users can remove locks on individual documents, or utilize the **Remove Old Record Locks** link in the top-right corner of the page. This will remove all record locks on the list, en masse.

![](../delete-move-lock-documents.assets/851c34487c0f16ce5024ef2052fc3ed9.png)
