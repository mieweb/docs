---
id: '1_uR3XH1DoBCrzV-nBO46Gq46zuqB1PBRe7-FYjGan4s'
title: 'Document Properties'
date: '2024-05-31T16:16:15.583Z'
version: 103
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'link-documents-to-order-requests.md'
  - 'adding-a-subject-to-documents.md'
  - '../../injury-care/case-management/viewing-cases.md'
  - 'link-documents-to-encounters.md'
  - 'link-documents-to-other-documents.md'
  - '../../e-chart/alerts-errors-failures-interactive-tab.md'
  - 'delete-move-lock-documents.md'
source: 'https://drive.google.com/open?id=1_uR3XH1DoBCrzV-nBO46Gq46zuqB1PBRe7-FYjGan4s'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Every document contains metadata that identifies the document or describes the data of the document. These details are found in the document properties. The document properties accessed by clicking the **Properties** link, found in the upper-right corner of the stored document.

![](../document-properties.assets/453be0179b808944b54c9bf4047e98f9.png)

After clicking the **Properties** link, the page will display all of the general properties of the document, as well as additional properties sections, such as revision history, encounters linked to the document, orders linked to the document, current routes for the document, etc.

![](../document-properties.assets/985fe74f419b3276155f45b48d1908e1.png)

## Document Properties Fields

The following explains the various fields available in the document properties. These fields are those found at the top of the *Properties* page.

![](../document-properties.assets/4542e17ad66289b1bd29bea1f084b364.png)

**Document ID**: The document identifier, or document ID, is often referred to as doc ID, or some variation thereof. Every document that is created has a unique identifier. This document identifier can be found throughout the system as a hyperlink. Clicking the document ID link will take users directly into the document view. The document view displays limited document properties, such as revision number, author, date of service, created by, creation date, and location. However, to view additional properties, or specific details, click the Properties link and locate the necessary information. Any previous versions, or revisions, can be viewed by simply clicking the revision number.

**Date of Service**: This field indicates the date of service of the document. To change the date, simply click the **Edit Properties** link and make changes, as needed. There is also an option for unknown dates, if necessary. When on the *Edit Properties* screen, checkmark the **Unknown** checkbox, and the date field will display as blank, upon save. Otherwise, when provided, the service date will display MM-DD-YYYY formatting.

**Author**: This field indicates the user credited as authoring the document.

**Type**: The Type field specifies the document type. The drop-down choices are filtered based upon the available chart types designated for the chart in context.

**Location**: The Location field indicates the service location where the document was authored. The available drop menu includes *internal* locations, by default. By updating the System Setting (i.e., "E-Chart", "Documents", "Show Outside Locations"), the drop-down can be configured to show external, or *outside* locations, as well.

**Link to Orders**: This field is visible when on the *Edit Properties* screen. The field is an autocomplete, and when an order number is selected, this indicates a pending, incomplete order request is linked, or associated with the document. Using this field to link a pending order with a document will mark the pending, incomplete order as Complete, when the properties are saved. This functionality is also available when using the Add Document quick link. If a link needs to be removed, use the *Orders Linked to Document* section of the *Edit Properties* page. See [Link Document to Order](link-documents-to-order-requests.md) documentation for additional information and details.

![](../document-properties.assets/231c5db3d74f823ad4236f20586d614a.png)

**Interface**: If the document in context originates from an external interface, this field will autopopulate the name of the interface the document originated from.

**Inpatient**: Inpatient is a flag in the system that signifies whether or not a document came over an established interface as regarding inpatient or not (i.e., ambulatory, ER, etc.). This feature, for example, provides value to those clients wishing to avoid tasking staff with inpatient result tasks.

**Signed By**: Signifies the user by whom the document is electronically signed (e-signed). This field displays the name and timestamp associated with the e-sign event. Additionally, if any comment regarding the signature request is made, the first 15 characters of the comment will display, directly after the timestamp. To view the entire comment, simply hover the cursor over, or click, the comment.

**Needs Signed By**: The {{% system-name %}} system not only offers the ability to electronically sign a document directly, but to request electronic signatures of documents, as well. The *Needs Signed By* field shows those users that are expected to e-sign the document. An **un-request** link is available to remove the e-sign request from the document, if necessary. Also, like the *Signed By* field, the first 15 characters of any comment associated with a signature request will display, though hovering over or clicking the comment will display the comment in its entirety. The information bubble shows from whom and when the request came.

![](../document-properties.assets/9a0a594f64fa8be928d186685c0b50ad.png)

**Viewed By:** This field is available for clients on 202309 and newer. This field will show the name of the user and date that this document was viewed on the portal.

**Subject**: The ability to add a subject to a document is a feature that is enabled by default. This field is designed for free-texted subjects, intended to assist with providing context on and searchability of multitudinous documents. To add a subject, simply click the **Add** link in the *Subject* field of the document properties. After free-texting the subject, click the **Save** button. Subjects cannot be added/edited for email documents, because email subjects are created when the email reminder is triggered from system modules. For more details, review the [Adding a Subject to Documents](adding-a-subject-to-documents.md) documentation.

**Case**: Like linking a document to an order, {{% system-name %}} allows users to link cases/incidents to documents, as needed. When on the *Edit Properties* screen, an autocomplete field is available for linking a case/incident to the document in context. If the document is linked to a case/incident, it will display the date and time, as well as the case number the document is linked to. Using the down arrow (↓) in the *Case* field will display all of the existing cases within the chart in context. Link to, or edit which case the document is linked to, by selecting the appropriate one from those available. To unlink a Case from a document, click the "Unlink" button, rather than simply using the spacebar to "clear out' the autocomplete field. Clearing the field and submitting the page, will not properly unlink the document from the case itself. Check out more information about [Viewing Cases](../../injury-care/case-management/viewing-cases.md), if interested.

![](../document-properties.assets/47e35d8c0dd42c379fae866795edbab7.png)

**MR#**: This field displays the medical record number of the chart the document is stored within.

**Created By**: The creator, or transcriber, of the document.

**Create Date**: The date and time the original document is created. This cannot be changed.

**Revised Date**: The last date and time the document was revised. This will update and change with any new revision.

**Content**: This field autopopulates the document storage type. This field provides a quick reference, and sometimes a hyperlink, to the type of item being stored. For example, if the document is a form, the field may display **Tiff Image File**; tasks may show **Task**; or HL7 results from laboratories may display **Lab Results**. If a hyperlink is available, clicking it will open a view of the document, or the specific HL7 message that was received.

**Submit Changes**: Click the Submit Changes button to save edits, if in the *Edit Properties* screen.

## Document Properties Sections

While viewing the document properties, there are several groupings found toward the lower-half of the properties page. These groupings are intended to offer users a quick and easy method for checking revisions, links, routes, and locks. The following information explains each section and how each is intended to be used.

![](../document-properties.assets/951e0965a6edb33f4fa4b78a7378928f.png)

### Revisions for Document

If any revisions have been done to the document, the *Revisions for Document* section lists each revision, the revision date/time, as well as a few general details. To view the version of the document according to a specific revision that was done, simply click the revision number link, found in the first column.

#### View Diffs

To view and compare revision versions, or the different versions of the document in context, simply use the **Diff** checkboxes and **View Diff** button. Checkmark which revisions to compare differences between by selecting the appropriate Diff checkboxes. Once the revisions being compared are selected, click the View Diffs button. This button allows for a visual comparison of the changes made between revisions.The changes will be highlighted on the screen for easy viewing.

![](../document-properties.assets/9bddc45b8989ba7d97cfb1bd0dfaecba.png)

{{% note %}}
The Diff checkbox will only be available for supported storage types. Examples of supported storage types would be text documents, word documents, or encounter exams. Unsupported storage types include images, PDFs, and the like. If the storage type is unsupported, the checkbox will not be available to select.
{{% /note %}}

{{% tip %}}
The View Diffs button can be disabled system-wide via the system setting (i.e., "E-Chart", "Documents", "Allow Revision Diff").
{{% /tip %}}

### Encounters Linked to Document

This *Encounters Linked to Document* section details all encounters linked to the document. The option to remove a link is available by clicking the **Remove Link** hyperlink, found in the *Options* column.

![](../document-properties.assets/3efb0b6f680ebaddf3db2a9ef163d8b0.png)

For more information on how to link documents to encounters, check out [Link Documents to Encounters](link-documents-to-encounters.md).

### Orders Linked to Document

Users can review the document properties to see whether a document is linked to a specific order, as well. The *Orders Linked to Document* section displays each instance the document has been linked to a specific order request. The option to remove the link between order and document is available by clicking the **Remove Link** hyperlink from the *Options* column.

![](../document-properties.assets/1cd850e2ec0222711c2e2ceadb782b77.png)

For more information on how to link documents to orders, check out [Link Documents to Orders](link-documents-to-order-requests.md).

### Document Is Linked To

The *Document is Linked To* section is particularly helpful to users, because it not only shows additional items the document in context is linked to, but it also allows additional documents to be linked to other documents by simply using a **Link Type** designation. For example a radiology report can be linked to the x-ray image that is stored within the chart.

To link a document to another document, check out [Link a Document to Another Document](link-documents-to-other-documents.md).

![](../document-properties.assets/7358df411a9ddf4de11b6a330955d5ca.png)

{{% note %}}
The *Linked To* autocomplete field shows only stored document choices of the chart in context. This means documents cannot be linked to documents stored outside of the current chart.
{{% /note %}}

### Current Routes for Document

The *Current Routes for Document* section lists all datasend routes the document has been sent through, if any. The datasend feature simply allows the sending of documents between {{% system-name %}} systems/clients, as well as the automatic electronic transmission of documents (e.g., auto faxing documents to providers using the CC User feature in Word documents).

If the document is *electronically* transmitted, route details will display in the *Current Routes for Document* section of the document properties. Relevant information, such as the method by which the document was sent, the status of the transmission, and when the route was created, all will appear in this section. What is more is that managing the routes can be accomplished from this section, as well. If transmission errors occur, acknowledging the error, resending the document, or even deactivating the transmission can all be performed, all by simply using the links provided in the *Options* column.

For example, if the document route displays an error, or it shows as pending, the **Cancel** link or **Error** link can be used to move the transmission route from the pending queue to the errored queue, removing the route from the list of routes to be retried. Resending can undo this.

![](../document-properties.assets/af3bf511862709f7399064257d79f6a6.png)

If the document routed successfully, the status will display *Complete* and the only available options would be to Resend or Deactivate in the event of any transmission or communication errors.

For more information and to set up error and alert notifications, please see our [Alerts, Errors, Failures - Interactive Tab](../../e-chart/alerts-errors-failures-interactive-tab.md) documentation.

### Routing History for Document

This section tracks and stores all routing that has been done with the document, displaying all relevant information pertaining to the datasend route, such as by which method the document was sent, when it was sent, as well as what *send-on* criteria the route followed.

![](../document-properties.assets/da0c88b9ddce3d82ef17eafb756ca0c0.png)

### Edit Lock on Document

With the appropriate security permissions, users can view and manage document locks. If the document is locked, this section would show by whom, when, and how long the document has been locked, giving the user the ability to remove the lock, as needed.

![](../document-properties.assets/b3e64be1781b87e08c382336e3c008ef.png)

For more information, see the [Delete/Move/Lock Documents](delete-move-lock-documents.md) documentation.

### Document Fax History

This section shows all the fax history for the document. It will only display if there is fax history to present for the document.

![](../document-properties.assets/294cb245474c6a1906ef1817d3d32964.png)
