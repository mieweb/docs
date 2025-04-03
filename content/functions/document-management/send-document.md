---
id: '1qgX2WvaE1iF3D3xYnwq-xGj80liR7s3hMY3ZXCUf2Ww'
title: 'Send Document'
date: '2025-01-17T15:52:33.077Z'
version: 283
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:SLERKMFP'
source: 'https://drive.google.com/open?id=1qgX2WvaE1iF3D3xYnwq-xGj80liR7s3hMY3ZXCUf2Ww'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
markup: 'pandoc'
---
Send Document

## Overview

Users are able to send a document to specific recipients.

Depending on the recipient of the document and what their email address is, we have the following pathways:

1. If the recipient's email domain is "white listed" (System setting "Whitelist Domains"), then we attach the document to an email.
    a.  User permission "Securely Email Documents" is required for this to work.
2. Otherwise, the system creates a new "Received Document" document and adds it on the recipient's chart
    a.  A "Received Document" will have doc_type WCRECVDOC
    b.  The newly created document will be linked to the original one using the document_links database table
    c.  It will have storage type 33
    d.  Column to_doc_id value will be the original document doc_id
    e.  The document type should be added on the "Message Center" chart tab of the portal chart(s)

Users are also able to select an "Employer" and perform the above actions on the related contacts.  Related contacts are found under the employer's Overview (EO) chart tab in the Contacts section.  These contacts have to be active users in the system, which means they need to be Login Enabled and have credentials to access the system.


## Setup involved

1. User Permissions
    a.  "Securely Email Documents" - This is used when send documents as attachments
2. System Settings
    a.  "Whitelist Domains" - Used to determine if we should email a document or create a "Received Document"
    b.  "Default Portal" - This is used when we try to send activation codes to users, so that they can get access to the system
3. Other Configuration
    a.  "Portal Setup" chart tab - "Enable Activation Code Redemption"

![](../send-document.assets/f744157ad09a5ccd8e3615ca0c6e7caa.png)

## Workflow

### Begin with

First you have to find a document and hover over the top section like so:

![](../send-document.assets/2330c3cc1ba3b3684bb3934530771f3b.png)

Then click the icon like so:

![](../send-document.assets/48227fa249e541371336ec1bb8640bc0.png)

The "Send Document" window will pop up:

![](../send-document.assets/97cbc65ecaab9151c9dbc0403b60675a.png)

1. "Subject" will be what is used on the email subject or the new received document.
    a.  Users are able to customize it
    b.  Number in the current value represents the document doc_id that the user is trying to send
2. "From" will be the "From Address" on emails
3. "Recipient" is an autocomplete input for all chart that have one of the "Contact" or "Provider" chart types
    a.  Users are able to create a new contact if needed
4. "Employer" is an autocomplete input for all Employer Organizations

### Add new Contact

The following screenshot explain how you can add a new contact

![](../send-document.assets/78a454a3f0091d2c3b7dca4399e857ee.png)

"Add Contact" window

![](../send-document.assets/453e652fa72490562862fa697bb6df02.png)

### Send the document

On the above screen, users can create a new contact chart and link a specific employer if needed.

After the screen is saved, it will populate the new information into the "Recipient" input on the "Send Document" window

![](../send-document.assets/898c23c50b3a4c480029e031d1751644.png)

In the screenshot above, you can see how the newly created contact is populating the "Recipient".

The "Better Corp." radio button populated here either because we added that employer on the "Add Contact" window, or because of the "Default Portal" system setting value.

This radio button will only show up if the "Enable Activation Code Redemption" checkbox is checked as explained above in [Setup Involved](#setup-involved)

The "Enable Activation Code Redemption" method is advised, so that the users that get the new "Received Document" in their chart can have access to it on the portal.

After the "Send" button is clicked the "Send Document" window will change to this

![](../send-document.assets/a8f8f1bd0decdc10991916238d530561.png)

Notice the "Previously sent to" section lists the recipient information with links to the chart and the new "Received Document" (Doc ID 733).  We also display the "Activation code" that was used.

If I choose the send the same document to someone using mieweb domain (whitelisted domain), this is how the "Send Document" window changes

![](../send-document.assets/ebe33f54655e6f739aa05de282659dfd.png)

Notice the "Previously emailed to" section shows up, and lists the email address that was used.

This is what the email looks on my email application

![](../send-document.assets/63ef6e02b907141c12de3ef815eb0855.png)

### Employer Contacts

On the other hand, if I enter "Better Corp" in the Employers autocomplete input, get the following screen:

![](../send-document.assets/9784e74337d7181426bfb06f6fbf83d4.png)

Notice all the checkboxes shown in the "Employer Contacts" section.

These contacts are:

1. Charts identified as contacts on the selected "Employer"
2. They are also active users.
3. They have an email address.

Notice in the screen below, one of those contacts does not have an email address and that's why he/she does not show up in the "Encounter Contacts" section above.

![](../send-document.assets/49791091a060812a0091ee6da37ecc7d.png)

You can then select the ones that they want to send the document to.  The actions that happen next, depend on the user's email address and whether it's white listed, or not.  We DO NOT generate activation codes on "Employer Contacts".  The assumption is that these contacts are already active users and do not need to create an account.

After you select contacts and click the "Send" button the window might look something like this:

![](../send-document.assets/8ea6ebef58b2e81b1901959f17e0bf0c.png)

## Learning Management System

To learn more about Sending a Document, follow the link below to the Learning Management System course:

* [Patient Portal Send Document on Demand](https://mie.talentlms.com/shared/start/key:SLERKMFP)
