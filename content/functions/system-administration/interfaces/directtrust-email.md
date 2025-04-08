---
id: '1XZfnbZ7NfDo3BGeGQ1cR_9iGJeX8xowFaZvB_AuGSq4'
title: 'DirectTrust Email'
date: '2025-04-07T15:50:08.793Z'
version: 59
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1XZfnbZ7NfDo3BGeGQ1cR_9iGJeX8xowFaZvB_AuGSq4'
wikigdrive: '37774c813cb40b3c0329e2e7ebc29deda8058d16'
markup: 'pandoc'
---
## DirectTrust Email

****

When DIRECT email has been set up, providers will be issued an email address from Direct. Example email address formats include "direct.internistbutlermd@ccme.com" or "internist.butler@12345.direct.anywhere.com" .

Provider's Direct email address should be stored in the demographics section of their provider or Provider organization chart.

![](../directtrust-email.assets/7b4f481b5d7e005a1964be6ed52e69a9.png)

## Direct Trust Directory

For {{% system-name %}} systems that have Direct Messaging configured, a DirectTrust Directory will display in a datavis format under the Provider Management DataVis. Clients not set up with Direct Messaging will not see a Direct Trust Directory in their system.

![](../directtrust-email.assets/bc812d654fc004e033afb4c5b0068e39.png)

User Security & Setup

****

1. Users that need to "send" messages/documents will need the "Send Patient Data" security permissions.

![](../directtrust-email.assets/987bd37e4234a0f27d99d316e2be35e0.png)

2. Additional configuration is required before users will be able to see documents coming/going from {{% system-name %}}.
    a.  Ensure that any additional users that will be sending messages/documents via Direct have been configured with a user account and have the proper security to send patient data.
    b.  On the "Direct PO, Direct" chart add these users, by adding them to the Medical Contacts portlet.
    c.  Click on the <strong>manage info icon</strong> (pencil) of the <strong>Medical Contacts</strong> portlet.
    d.  Find and link those users with the role of ‘Direct Email' and then click the <strong>Submit</strong> button to save.

![](../directtrust-email.assets/c811215fe3612b2f1f338da91f910a01.png)

## Working with ‘Incoming' DIRECT emails

When Direct is configured, 2 ‘test' emails will be placed in the document queue for users to preview/experiment with.

1. Working incoming documents can be found in the Doc Queue
    a.  Direct messages coming into the document queue are not patient identified. They come into the system as unique non-identified messages.

![](../directtrust-email.assets/dedda907e25d1e33f9a9767f80faa0be.png)

    b.  Users must go into the document (via the document queue) to see who it's pertaining to. Click on the DIRECT message to view the document on the bottom half of the screen.  View the document to determine who it's pertaining to. Process the message by setting the DOS (or leave marked as "unknown" if you want the date to be a blank DOS, which will default the document at the bottom of list views in chart tabs), then on the right side of the document queue to manually search who to merge this document to.

![](../directtrust-email.assets/ef8838d65bfe8b40ab8116d323c50c87.png)

    c.  It's very important to always select the 1st merge option when working the DIRECT partition in the document queue. Every message comes in with a unique direct id# (mr#) and we don't want to keep those on patients for tracking purposes. This 1st option will merge and only keep the MR number of the chart the documents & chart are being merged to (regardless of partitions being merged), meaning it will keep the patient's current MR#'s and not apply the direct lengthy unique MR/ID # one.

![](../directtrust-email.assets/b343db2352c7f61bb97afc50ba511dc4.png)

## Workflows to send ‘Outgoing' DIRECT messages

****

1. To send a document via Direct, click on the ‘send' link near the properties of the document.

![](../directtrust-email.assets/652a87430043e177569a357fb2ecd348.png)

2. It's important to remember to ‘TAB' through these fields.

![](../directtrust-email.assets/177e50edf6055aec8a8bfe5af2294c62.png)

    a.  <strong>Recipient</strong>: Search & select an existing configured referring physician user (configured in your system) from the auto-complete (Tab). If the person isn't found, you can add a user to the recipient selections by using ADD USER button (see separate steps)
    b.  <strong>Method:</strong> Select ‘Direct Email' from the drop-down if isn't already (Tab)
    c.  <strong>Detail:</strong> If you've already added the referring physician's direct email address, it should pull up here. If it  does NOT pull up, you will need to go back to the control panel à access control and add or correct the address.
    d.  <strong>Send On:</strong> The default for this is usually ‘All Revision'
    e.  Click the ‘add' button & then ‘Update & Close'
    f.  You can check the send progress either through the document properties or from the Send Queue

### Add New Recipient

If the referring physician recipient isn't found in the auto-complete search, you can ADD USER to the system from this screen.

![](../directtrust-email.assets/dbea0ef7c373fc35b0451ef313c77cdc.png)

Click on Add User button and the *Create User* window and fields will display.

![](../directtrust-email.assets/34dc861ce83e17fd3755853196fbde96.png)

Key in all the information fields that are applicable, especially the Preferred Route field (set this to Direct Email).

Click the ADD USER button to save your work.  That added new user will now display in the Recipient auto-complete field for you to send as an outgoing direct message.

Note: after clicking ADD USER button, if you receive a warning message that you need to select a department for the user to be added to the system, it is because the system setting **NULL Username Realm** is not set to a value of Referring Physicians.  Simply have your implementer or support get that system setting value set.

![](../directtrust-email.assets/b3bc1b943f279b1b670836f11b84f0b0.png)

## Storage types to use when sending/receiving DIRECT emails

1. These are the file types that can be sent & received via Direct:
    a.  For Outgoing Messages, these WebChart storage types are supported:  CDA, E-Order, CCR, Plain Text, TIFF, PNG, PDF, DOC, JPEG, Binary and XLS. Additionally, PDF is supported on client db's on RC202503 and newer.
    b.  For Incoming (received) Messages, these WebChart storage types are supported:  CDA, CCR, Plain Text, PDF, HTML

## Not receiving Direct emails?

If you find that you are not receiving direct emails, we may have to exchange HISP's certificates. It helps to have the external provider or office information as well as who we need to exchange HISP's with. If you run into this stumbling block, please provide the information below and we will take the ball from there.

1. External Office/Provider name
2. Office Contact info (name/role/phone/email)
3. ‘Direct' Vendor (EMR & HISP)
4. ‘Direct' email address
