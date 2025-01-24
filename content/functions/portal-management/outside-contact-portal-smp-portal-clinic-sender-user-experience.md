---
id: '15y_7nNJn1rsSRh-RC4aEMXGuzuiRNPIW7zWM5uHlIDc'
title: 'Outside Contact Portal - SMP Portal Clinic Sender User Experience'
date: '2024-10-15T19:50:54.492Z'
version: 74
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s/'
source: 'https://drive.google.com/open?id=15y_7nNJn1rsSRh-RC4aEMXGuzuiRNPIW7zWM5uHlIDc'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
The system has the ability to send system contacts documents utilizing a secure ‘Outside Contact Portal' EO chart setup (or whatever you wish to name it). This portal is often referred to as the "Secure Message Portal" When a Contact is added to the system, the system will automatically create a Contact Chart and tie it to the EO chart that has portal access for Contacts. End users may share/send a copy of a document from the originating patient chart to the Contact Chart. In turn, the Contact is sent a portal invitation to create a secure portal login account which will allow them to view the shared document(s). Utilizing this ‘Send Document' feature reduces the risk of end users from emailing PHI out of the system.

The ‘Outside Contact Portal' is an excellent alternative for clients that can not or do not have secure or [Direct](https://docs.enterprisehealth.com/functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s/) email configured.

## Clinic/Sender User Experience

### Sending a Document to a Contact using the Outside Contact Portal

1. Navigate to the document in a patient chart that you wish to share.
2. Hover on the document header to view options. Click on the ‘Send Document' icon. This icon is available within the document, or within a list view.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/c0c87322871a4a2f6ce3a77299fef989.png)

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/ae1a8f08bcf6021633812fabfd042bd6.png)

3. The ‘Send Document' details box will open.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/f1f2627e9a17fb02d36d1bb7c01e6e0b.png)

    1. <strong>Subject:</strong> will display the Document ID attached to this send request.
    2. <strong>From:</strong> will default to the auto reply url indicated in the System Settings (WebChart/Email/Autoreply).
    3. <strong>Recipient:</strong> Search for any existing <em>Recipient</em> in the system by using the autocomplete or click the ‘+' to add a new contact chart/details to the system to be able to send to. Upon selecting an existing contact or adding a contact, the contact name will display in this field. It is recommended that users always search for an existing contact so that duplicate contact charts are not created.
    4. <strong>Employer:</strong> Use the <em>Employer</em> field to search for the portal for which you wish a portal invitation to be sent from. Search for ‘Outside Contact Portal' if using the OOTB configuration. If individual client Employer Contact Portals have been custom configured, select the appropriately named employer contact portal for that client/customer. A list of contacts for the portal will display to select and send the document.  See [Employer Search](#employer-search) below for more information on the Employer search. If a recipient is selected and the employer field is left blank, the system will send a portal invitation to the system default portal. System Setting (NMC/Portal/Default Portal). Therefore, if many custom Employer Contact Portals are configured, entering the employer will allow the user to select which employer portal you want the invitation to come from.
    5. Click the <em>Send</em> button after all fields have been completed.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/09852f45d803278879e86b9141baf8af.png)

### Adding a New Recipient Contact

It is important to search for an existing recipient first, before adding a new Contact recipient to the system.  If the Contact doesn't exist, the ‘+' icon can be selected at the time of sending a document.  Users are then directed to the ‘Add Contact' details entry box.  Enter the contact's *First Name*, *Last Name*, *Email*, and *Phone*. In the *Employer* field, select the ‘Outside Contact Portal' if using the OOTB configuration. If custom employer contact portals have been created, select the appropriate Employer Contact Portal. Click the *Save* button after all fields have been completed.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/790efc38b5b3b95c579f5c3eb98f45d8.png)

After the new contact has been added, a confirmation message will pop up in the upper right hand corner of the screen notifying the user that the contact has been successfully added. The user is then directed back to the ‘Send Document' details box. The Employer field can be entered and then click *Save* to send the document.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/faf4bf25dbd28ed4d7f3c7cb195c68b7.png)

*Note*: When entering a contact, the contact's *First name*, *Last name* and *Email* is required. If the user attempts to save the ‘Add Contact' details box, a warning message will appear indicating fields are required.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/5bd4bc1039499979cc5f71b3f036e4f1.png)

### Sending to an Existing Contact

#### Recipient Search

Use the *Recipient* autocomplete field to search for an existing contact. If the contact does not currently have an active Contact login to the system, then a list of all key code portals that the contact is associated with will display. Select the appropriate portal to send the Contact a portal invitation.  Note: The radio buttons to select the appropriate portal to send the Contact a portal invitation is driven by the portal EO chart having *Enable Activation Code Redemption* checked.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/b41acc428a03456eb43911f6190a6601.png)

If the Recipient already has an active Contact login, then the option to send a key code does not display and you user can simply click the "Send" button to send the document.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/2953c65d0cee27647781bb72c96a16d7.png)

Upon sending the document, a confirmation message will pop up in the upper right hand corner of the screen notifying the user that the document was successfully sent.

The recipient name field is cleared/resets. Should the user need to send the document to additional recipients. Additional recipients can be added at this time and sent immediately.

Additionally, the user will see a history showing each time this specific document has been sent to a contact. The history will show who the document was shared with (the contact chart the document was sent or [emailed](#emailed) to), who sent it and on what date the document was sent. In parenthesis, a new ‘document id' will display for the document that is located within the contacts chart. In a second set of parenthesis, a portal activation code will display. This simply lets the end user know that an ‘Outside Contact Portal' invite has been sent to the contact, but the contact has not yet used the code. The contact can then use the invite to set up a portal account and login and view the document that has been sent to them. Once the contact makes a login using the activation code, the code will no longer display.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/fa2ed70e858eeec741be3aca298ae5cc.png)

#### Employer Search

Users have the option to also search by Employer. If using the OOTB search for the "Outside Contact Portal". If the client has multiple custom Employer Contact Portals, then search by the desired portal. If a Recipient has not already been selected and the Employer field is entered, a full list of contacts for the portal will display. Check the box of the contact you wish to send the document to. Please note the "Outside Contact Portal" or custom Employer Contact Portal(s) must have at least one contact entered for this list to display. Additionally, if the portal has many contacts, this list may become rather large. Therefore, it is recommended that users search by recipient name whenever possible.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/1f38a762b9a445306c3c7c2c6ad0dbcc.png)

Similarly, if the Recipient has already been selected and the Employer field is also entered, a list of all other contacts will display. The document can then be sent to the Recipient and any additional contacts selected from the Employer contact listing.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/2e619923ea353ee404243a79b9f44b6c.png)

If a Contact's email is manually removed from the contact chart and the user attempts to send a document, the user is notified by a pop up alert in the upper right hand corner of the screen. To resolve, navigate to the contact chart and update the email in the ‘Overview (Contact)' chart tab. Then return to the document and attempt to send it again.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/83ee5c253c747dc519c6ca9601a1e144.png)

### Batch Sending of Documents to Contacts

Multiple documents can be batched and sent using the Batch feature.  Navigate to the patient chart and click on the "Batch" icon link (List View) or "Batch link (Detail View).

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/8bac0d8f7b083fa375611cc27c84b48e.png)

Click on the "Send" link for ‘Batched' items located at the top of the chart.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/03d851a0a41ba8f6e5bad889c377b2b8.png)

Enter the appropriate information in the "Send Batch" detail box and click the "Send" button.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/92740cde44c85dd5b981d8dfdef7183d.png)

### Sent Documents

When documents are ‘Sent' to the Contact Chart, the actual document does not leave the patient chart and the original document is not actually ‘sent' to the contact chart or emailed to the contact. The system will ‘duplicate' the sent/shared document and create a new document id for that document. A link to this document is in the first set of parentheses on the sent history list that displays in the ‘Send Document" details box. This is the document ID of a new document that has been essentially copied and stored on the contact chart. When the contact user logs in the ‘Outside Contact Portal', the contact is only able to view documents on their contact chart. Outside contacts are not actually able to view or enter the patient chart. They will only have access to specific/individual documents purposely sent/copied by the clinic to the contact chart.

### Emailed Documents

If the contact selected has an email domain that has been Whitelisted (See System Setting: WebChart/Email/Whitelist Domains) then the system will send the document as a PDF to the contact in lieu of sending to the Contact Chart and sending a portal activation code. The ‘Previous' history section on the ‘Send Document' dialogue box will also display the previous email history. This information contains the email address this document was sent to, who sent the email and the date the document was emailed out of the system.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/7b4ec1ecb606fd75bec8fd191f5f0087.png)

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/40f570a9fb6f7836dc28a75c40eabfd0.png)

Since this document was emailed directly, rather than sent to the contact's portal chart for viewing, a summary record will also be created in the **originating chart**. This summary record captures the originating document ID which was emailed, what email address the document was sent to, who sent it and the date the document was emailed. Documents that are Emailed do not display in the Contact chart. They are sent one time directly to the contact's email.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/06092a34011d6ca18d3cab7f60236cd4.png)

### Received Documents- Contact Charts

Upon sending the document to the Contact, the sent history list contains links to the Contact Chart. Click on the Contact's name to navigate to the Contact chart. Or click the Document ID to navigate directly to the sent document within the Contact chart.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/de0c2290ad878a92b62b12d5ea82cd75.png)

Users may also use the E-Chart search to search for Contact charts, just as they would a patient chart.

Sent documents will display in the Contact chart in the ‘Documents' tab. The document list displays the following:

The newly issued *DOCID* when shared with the Contact.

The *SERVDATE* (service date) will display the date the document was sent to the Contact.

The *DOCTYPE* (document type) will display as ‘Received Document' for any/all documents sent to the Contact.

The *SUBJECT* will display the document name/description as was indicated on the patient chart, then a hyphen followed by the patient name for which the document originated.

*BY* will display the name of the individual that sent the document to the contact for review.

*SERV LOCATION* will display the service location which was indicated on the original document. If a location was not stored on the originating document, this field will be blank.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/a2804b6760f592c862037d74c0b58d41.png)

This information can also be seen in the document header when viewing id Detail View.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/39fc845ce1067dc7790e9b0ce7d58ce0.png)

### Rescinding Sent Documents

Once a document is sent to a contact, that contact will indefinitely have access to view that document until the clinic/sender rescinds the document.

1. Open document in the Contact's chart
2. Click "properties" from the document options
3. Click "delete" (requires security permission to delete documents)
4. Enter reason for deleting
5. Click "Delete Document"

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/37687ffdbeb9c90665cb7a9b9874e5b1.png)

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/a8ec17e5b17653d58c34d46c4d6c66d1.png)

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/8769dacdfd194794f1e7500c505bc24d.png)

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/9e8f856b09174e13c0d9cfd4b9ac6938.png)

# SMP Worklist

When a contact "replies to" a message on the Outside Contact Porta/Secure Message Portal, the clinic is notified via the SMP Worklist. The clinic will need dedicated staff to review any messages received from Outside Contacts.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/5379d441dec23ffc91cda7b4ec77c0a3.png)

Hint: Remember, documents in the Outside Contact Chart are a "copy" of the original documents, which are located in the patient chart. Outside Contacts do not have direct access to the employee/patient's chart. They only have access to documents that have been copied and shared with them.

**SMP Worklist Columns**

**Options:** This option allows the clinic staff to move a document or reply from the Outside Contact chart to another chart, usually the patient's chart.

**Contact Name:** This is the Outside Contact that has replied or sent a message to the clinic.

**Chart Name: ** This is the name of the patient/employee the message is regarding. Click on the name to browse directly to the chart.

**Orig. Doc. ID:** This is the original document id of the document that was "copied" to the Outside Contact chart. Click on the document Id to browse directly to the original document.

**Orig. Doc. Type:** This is the original document type of the document that was "copied" to the Outside Contact chart.

**Orig. Doc. Service Date:** This is the original document service date on the document that was "copied" to the Outside Contact chart.

**Reply Doc. ID:** This is the document id of the Outside Contact's reply. Click on the Reply Doc. Id to browse directly to the document in the Outside Contact's contact chart.

**Reply Doc. Type:** This is the document name for which the Reply was saved as.

**Reply Doc. Service Date:** This is the date when the Reply was sent.

## Managing the SMP Worklist

The Options column is pinned by default to display as the first column of the SMP Worklist. Clinical staff or clinic users delegated to work this list, must review replies and determine the next course of action.

Ultimately, it is also their responsibility to move the reply from the Outside Contact's chart to the patient chart, so it becomes part of the patient record. Click the "Move" link on the worklist to move the document to the original document patient chart.

If needed, the user can search for another chart or link to an open encounter before moving the document. Click the "Move Document" button to move the document from the Outside Contact chart to the patient/employee chart.

![](../outside-contact-portal-smp-portal-clinic-sender-user-experience.assets/45d921838c6754094764041d6f4f152b.png)
