---
title: "Link Documents to Order Requests"
date: "2020-03-06T17:48:39.034Z"
url: "functions/document-management/documents-and-forms/link-documents-to-order-requests.html"
version: 51
id: "1QPdP9x2P6JaMBy4iqaEYmhYlcHJjyRd0wdgXiVMGR2o"
source: "https://drive.google.com/open?id=1QPdP9x2P6JaMBy4iqaEYmhYlcHJjyRd0wdgXiVMGR2o"
menu:
    main:
        name: "Link Documents to Order Requests"
        identifier: "1QPdP9x2P6JaMBy4iqaEYmhYlcHJjyRd0wdgXiVMGR2o"
        parent: "1F21zNiYq703LscR9rtGl8pZLjtxvozONvXhkaZFefEI"
        weight: 540
---
The {{% system-name %}} system allows any stored or indexed document to be linked to a corresponding order request. Linking a document to an order request in a chart allows users to easily view the order request, results, and corresponding linked documents, all from one place. Orders can also be managed from within an encounter, as well as when scanning and indexing documents, as will be outlined below. For information on how to view an order and manually complete and enter results for the order request, see our [Order Requests Chart Tab](../../order-and-result-management/orders-view-recent.html) documentation.

## Link via Order Requests Tab

Using the **Order Requests** chart tab, users can not only search, view, add, and complete orders, but they can also complete orders with results, simply by linking the appropriate result document to the corresponding order request.

{{% note %}}

To successfully link results to orders, the result document being linked to the order request must already be indexed in the chart, and the document ID must be known.

{{% /note %}}


![](link-documents-to-order-requests.images/image1.png)
1. Navigate to the <strong>Order Requests</strong> chart tab, typically found as a sub-tab of Medical Records.
2. From here, users can view Pending Order Requests, Standing Order Requests, and Completed Order Requests that exist for the chart.
3. Once the order is located, click the <strong>Complete</strong> link in the Options column. This will allow the user to enter any internal comments, result comments, and provide the document identifier (Doc ID) of the corresponding document, consequently linking it to the order.

![](link-documents-to-order-requests.images/image2.png)

4. To finish linking the document to the order, verify all information provided, and ensure the <em>Status</em> is set to <strong>Completed</strong>. Verify the radio button next to the order item is <strong>Completed</strong>, and enter the specific <strong>Doc ID#</strong> of the corresponding document that is being linked to the order request.

![](link-documents-to-order-requests.images/image8.png)

5. When finished, click the <strong>Complete</strong> button.
6. The order request has been marked as Completed, and the order request is moved to the <em>Completed</em> <em>Order Requests</em> section of the Order Requests chart tab. The document linked to the order can be viewed in the Order Requests tab by clicking the <strong>View Results</strong> link from the Completed Order Request section.

![](link-documents-to-order-requests.images/image4.png)

## Link via Encounter View

Users can also link documents to orders from the Encounter View. Navigate to the view of the encounter, and scroll to the bottom of the page. Here, users can see all pending order requests associated with the encounter in context. Simply click the **Complete** link, to begin linking the document.

![](link-documents-to-order-requests.images/image3.png)

Ensure the *Status* is set to **Completed**, and verify the radio button next to the order item is **Completed**. Then, enter the specific **Doc ID#** of the corresponding document being linked to the order request. When finished, click the **Complete** button.

![](link-documents-to-order-requests.images/image5.png)

As a result, the order request has been marked Completed, and the order request is moved to the *Completed* *Order Requests* section of the Order Requests chart tab. The document linked to the order can be viewed by clicking the **View Results** link from the Completed Order Requests section.

![](link-documents-to-order-requests.images/image4.png)

## Link via WebScan

Users designated to scan and index documents into the {{% system-name %}} system have the ability to link documents to pending orders, whenever necessary. While indexing, users can link a stored document image (e.g., lab result, referral consult letter, etc.) to a pending order in a specified chart.

To link documents to pending order requests while using WebScan, note the **Link to Order** field. In order to use this field, a chart must first be specified in the **Chart** field. Once a chart has been specified, the Link to Order field will allow for searching and linking of scanned documents to pending orders.

![](link-documents-to-order-requests.images/image6.png)

To begin searching for a pending order, click the **ellipsis** [**…**] button in the *Link to Order* indexing field. When clicked, all pending orders for the chart in context will display. Completed orders will not display as options. Select all pending orders the document in context needs linked to. When finished, either continue indexing the remainder of the batch, or upload the linked documents directly into the chart.

As usual, once the document is indexed and uploaded into the chart, the pending order(s) selected for linking will we completed, automatically, moving the order request to the *Completed* *Order Requests* section of the Order Requests chart tab. The linked document can be viewed by clicking the **View Results** link from the Completed Order Requests section.

![](link-documents-to-order-requests.images/image4.png)

For more details on scanning, indexing, and linking while indexing, see our [Indexing](../scanning-and-indexing/indexing.html) documentation.

## View Results Linked to Orders

There are various ways to view documents linked to orders. Users may simply refer to the document's properties or navigate to the Order Requests chart tab.

As noted, the results of an order can always be easily accessed from the **Order Requests** chart tab. Simply locate the order needing viewed, and click the **View Results** link in the *Options* column. The results document will open.

![](link-documents-to-order-requests.images/image4.png)

{{% info %}}

The View Results link will not display if the order has no linked documents.

{{% /info %}}


The result document of an order can also be accessed from either the appropriate chart tab the document is indexed to, or from the Documents chart tab. While in the result document, go into the Properties of the document. Once in Properties, locate the **Orders Linked to Document** section. Orders linked to the current document will display.

![](link-documents-to-order-requests.images/image7.png)

### Unlink Document from Order

Unlinking a document from an order is just as easy as linking one. Navigate to the linked document **Properties**.

![](link-documents-to-order-requests.images/image9.png)

Once in Properties, locate the **Orders Linked to Document** section. Orders linked to the current document will display. To unlink the document from the corresponding order, click the **Remove Link** hyperlink in the *Options* column.

![](link-documents-to-order-requests.images/image10.png)

After Remove Link is clicked, the page will refresh displaying something similar to the following:

![](link-documents-to-order-requests.images/image11.png)

* <strong>Remove</strong>: This option will simply remove the document link from the order and take no further action.
* <strong>Remove & Mark Order Incomplete</strong>: This option removes the document link and reopens the order, resetting the status to Pending.
* <strong>Cancel</strong>: This option cancels the request to unlink the document from the order, and retains its current status.

Once the document is unlinked from the order, a successful message will display on the page, confirming the removal of the link.

To see full details on how document properties can provide alternative methods for linking/unlinking documents to orders, check out our [Document Properties](document-properties.html) documentation.

