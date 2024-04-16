---
id: '1-7wZ_hZAPQsRVMnJTaIRs2hV9Cfj03WjHJs86jRBYqc'
title: 'Review Session - E-Sign'
date: '2020-02-27T21:25:54.536Z'
version: 45
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../functions/e-sign-electronic-signature/e-sign-all-pending-tab.md'
  - '../../functions/e-sign-electronic-signature/e-sign-chart-tab.md'
  - '../../functions/e-sign-electronic-signature/request-e-signature.md'
  - '../../functions/e-sign-electronic-signature/un-request-unassign-an-e-signature.md'
  - '../../functions/e-sign-electronic-signature/pending-e-sign-reviews.md'
  - '../../functions/encounters/dictation-and-transcription/highlight-transcribed.md'
  - '../../functions/reports/documents-report-super-document-type-search.md'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=01b7980ef298c9776889ace1aa2c0174'
source: 'https://drive.google.com/open?id=1-7wZ_hZAPQsRVMnJTaIRs2hV9Cfj03WjHJs86jRBYqc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>E-Sign Demonstration</strong>
* <strong>Overview</strong>
* <strong>My Settings Preferences</strong>
* <strong>Security Role Permissions</strong>
* <strong>System Configuration</strong>
    * <strong>Esign Editor</strong>
    * <strong>All Pending</strong>
    * <strong>CC Physician</strong>
    * <strong>Esign Chart Tab</strong>
    * <strong>System Settings</strong>
* <strong>Reporting</strong>
* <strong>Resources</strong>

## Overview

{{% system-name %}} offers users the ability to electronically sign (e-sign) encounters, orders, result documentation, and the like, helping facilitate communication and improve overall workflow efficiency. E-signatures can be requested manually, with additional notes and comments, or automatically, using e-sign routing rules.

The {{% syslink "E-Sign module" "func=esign" %}} allows users to review the signature requests and their associated notes or comments, as well as the documents with the pending requests. From here, users can decide to either electronically sign the document(s), or edit or reject the document(s). The E-Sign module also allows clinicians to add documents, tasks, and dictations, and whenever necessary, request co-signers or multiple signatures. And for auditing purposes, HIPAA-compliant timestamps are applied and stored in documents once they have been electronically signed. As a matter of fact, documents can house the e-signatures and timestamps of multiple signatories, and the E-Sign module can track who requested the e-signature, as well as when it was requested.

Additionally, the E-Sign module integrates the common functions of the {{% system-name %}} Task List module. Through the use of tasks and their priority ratings, reminder and overdue dates, and ease of usability, they not only simplify communication and general requests, tasks promote timely responses and quality care.

Standard functionality includes:

* E-Sign dashboard
* Multi-View feature for reviewing and e-signing up to fifty (50) documents, at once
* HIPAA-compliant timestamps

## My Setting Preferences

Users have the ability to manage defaults and specific settings in their account by way of {{% syslink "My Settings" "f=admin&tabmodule=admin&tabselect=My+Settings" %}} in the **Control Panel**. Depending on the specific security permissions of the user, he/she may also manage other user accounts, or even update settings system-wide. It is important to know how to navigate to My Settings and understand the implications of editing and changing specific preferences. The following settings are the most commonly changed user preferences, when using the E-Sign module:

* Show Pending Esign/Tasks
* Number Documents in Multi-Sign
* Notify Me on E-Sign Addition

## Security Role Permissions

In order to best address all necessary security role permissions, it is important to understand and know which users or security roles will need access and permissions to the E-Sign module. Below, are the primary security permissions needing consideration, so that an accurate assessment can be made in determining access needs.

**Sign Document**: Allows users to sign documents. When set to **Yes**, the user has the ability to sign *any* document in *any* chart. If set to **No**, the user is limited to signing only documents found in the Pending Reviews E-Sign tab, meaning the user can only sign requests assigned to their username, specifically.

{{% info %}}
Even if the *Proxy Signing* security permission is enabled, users with the *Sign Document* security permission set to **No**, can only sign documents assigned to their username.
{{% /info %}}

**Document Signature Override**: When set to **Yes**, this security permission allows users to request another signature, or override a signature, if a document has already been electronically signed by another user.

The **E-Sign Template Editor** security permission is being removed. This is no longer utilized in the {{% system-name %}} system.

**View Access**: When set to **Yes**, provides view access to the E-Sign module from the left sidemenu.

**E-Sign Editor Access**: When set to **Yes**, users assigned to a specific security role may be granted access to the Esign Editor. The *System Owner* and *SuperUser* security roles grant access, by default. The Esign Editor allows MIE to program rules of automation, where E-Sign tasks are created automatically, in varying circumstances, according to the needs and workflows of the client.

**All Pending Access**: Allows users variable access to the All Pending tab of the E-Sign module. There are three levels of permission for this tab: **None**, **View**, or **Delete**.

* <strong>None</strong>: When selected, access to the All Pending E-Sign tab is not permitted.
* <strong>View</strong>: View-level permission allows users to access the All Pending E-Sign tab, as well as preliminarily sign others' E-Sign Requests, as needed.
* <strong>Delete</strong>: When selected, users are permitted View-level access, as well as the ability to utilize the <em>Clear Queue</em> functionality.

**Proxy Signing**: When set to **Yes**, users may utilize the *Proxy Sign* functionality of the All Pending E-Sign tab. This permits users to sign by proxy another user/physician E-Sign Request, allowing the document(s) to be sent out in a timely manner, with no delay due to vacations, sick days, or other absences or delays. When the **Proxy Sign** link is clicked, the multi-view queue will load with any documents needing reviewed and signed. The user (with proxy rights) may sign any or all documents, as needed. Once signed, the user's signature is placed on the document(s), and the pending E-Sign Request for the assignee will be removed from the Pending Reviews E-Sign queue.

## System Configuration

### E-Sign Editor Access

The {{% syslink "Esign Editor" "f=esign&s=dbe&tabmodule=esign&tabselect=Esign+Editor" %}} is a configuration tool intended for automating E-Sign Request routes and tasking through the use of programmed business rules. For example, with E-Sign rules, a specific document type (when uploaded or created via an incoming interface) can be routed to a specific user as an electronic signature request, whenever necessary. Though MIE configures the WHERE clauses needed for these automated rules, the Esign Editor is accessible by users who have the required security permission.

Audit the default E-Sign Rules in the Esign Editor tab. When considering and reviewing future-state {{% system-name %}} workflows, determine what documents would routinely require an electronic signature. Then configure those applicable automated E-Sign Rules in the Esign Editor.

Custom configuration of automated e-sign or tasking business rules, or to automatically route a percentage of charts seen by a PA or NP to a supervising physician for review and electronic signature, is available as an add-on service.

### All Pending Access

The [All Pending tab](../../functions/e-sign-electronic-signature/e-sign-all-pending-tab.md) of the E-Sign module displays a summary of *all* outstanding E-Sign Requests. The ListView displays all requests by user last name and the count of each user's documents pending a signature. It is important to determine what users should be granted permission to access this tab. As noted above, the security permission is **All Pending Access** and the possible levels of access are None, View, or Delete.

### Esign Chart Tab

An Esign tab can be configured by MIE to display within charts in the {{% system-name %}} system. This chart tab shows any outstanding E-Sign Requests specific to the chart, or patient, that are assigned to the logged-in user. Though this is not a highly utilized feature, it is an optional configuration available so that users may see and address E-Sign Requests while working in specific charts.

### System Settings

There are various system settings relevant to the E-Sign module, which may be enabled or disabled system-wide, as needed. These system settings are described, below:

**Sign All**: Enabled by default (value **1**). When enabled, the **Mark All As Assigned** button will be available in the Multi-View E-Sign queue. This allows users to mark and sign *all* documents requesting electronic signatures, quickly and easily. If disabled (value **0**), users will not see this button as an option. These users should manually review each E-Sign Request, selecting the **Sign** radio button for each request, individually.

**Request Re-Sign**: Enabled by default (value **1**). When enabled, previously e-signed documents will be sent back to the signatory upon any edits or revisions to the document. If disabled, a new E-Sign Request would need to be manually sent upon editing or revising.

**Use Patient Header Layout**: Disabled by default (value **2**). {{% system-name %}} will render the standard patient header of basic demographic information above documents in the E-Sign Request queue. This system setting is being deprecated and will be removed in newer systems, soon. New headers will display in the E-Sign module, by default.

### CC Physician E-Sign Request - Inbound HL7 Interface

(Only if purchased)

For clients utilizing an inbound HL7 interface, there is an option to configure the interface to request electronic signatures from the carbon copied (CC'd) physicians listed on the document. This process can be executed automatically, with no additional Esign Editor rules needed. If a custom rule is needed, there is the ability to deactivate the HL7 automated E-Sign Request, in favor of a custom WHERE clause in an Esign rule. Regardless of the process used, the logic works off of a translation of the available physician IDs, meaning only those users mapped in the `[interface]-CC Physician` translation may have E-Sign Requests created automatically.

This feature is not turned on by default. If the need for automating E-Sign Requests to CC'd physicians is noted, the MIE EDI team will work with clients to make the necessary changes in the HL7 configuration file and collaborate to create the physician translations, as needed.

{{% info %}}
The HL7 interface uses the fields OBR.28 (ORU) and TXA.23 (MDM) to pull in CC'd physician IDs. E-Sign Requests can also be created by using the physician information provided within the PV1.7, PV1.8, PV1.9, PV1.17, and PV1.52 fields. A wildcard (*) translation will be added, which is mapped to `-1`, in order to prevent non-mapped users from receiving any E-Sign Requests.
{{% /info %}}

## Reporting

Two common methods administrative staff and managers use to review E-Sign Requests and general statistics are by using the E-Sign module {{% syslink "All Pending tab" "f=esign&s=all_pending&tabmodule=esign&tabselect=All+Pending" %}} , as well as by utilizing the {{% syslink "Document Reports Document Search" "f=reports&s=docrp&tabmodule=reports&t=Visits" %}} . The All Pending tab displays all E-Sign Requests currently pending, along with the tasked user and number of documents pending a signature. The Document Search, on the other hand, is available from the Reports sidemenu, under the Visits grouping, and provides a means to search all documents according to the available E-Sign filters (i.e., No Signature, Signature Pending, Signed, Signature Rejected).

## Resources

### Help Documentation

* [E-Sign Chart Tab](../../functions/e-sign-electronic-signature/e-sign-chart-tab.md)
* [Esign-All Pending Tab](../../functions/e-sign-electronic-signature/e-sign-all-pending-tab.md)
* [Esign-Request Signature](../../functions/e-sign-electronic-signature/request-e-signature.md)
* [Esign-Unrequest Signature](../../functions/e-sign-electronic-signature/un-request-unassign-an-e-signature.md)
* [Esign-Pending Reviews](../../functions/e-sign-electronic-signature/pending-e-sign-reviews.md)
* [Esign-Highlight Transcribed](../../functions/encounters/dictation-and-transcription/highlight-transcribed.md)
* [Document Search](../../functions/reports/documents-report-super-document-type-search.md)

### Training Videos

* [E-Sign](https://mieweb.webex.com/mieweb/ldr.php?RCID=01b7980ef298c9776889ace1aa2c0174) (00:11:40)
