---
id: '1qgX2WvaE1iF3D3xYnwq-xGj80liR7s3hMY3ZXCUf2Ww'
title: 'Send Document'
date: '2022-03-24T12:38:33.377Z'
version: 184
lastAuthor: 'aris'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1qgX2WvaE1iF3D3xYnwq-xGj80liR7s3hMY3ZXCUf2Ww'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Send Document

# Overview

Users are able to send a document to specific recipients.

Depending on the recipient of the document and what their email address is, we have the following pathways:

1. If the recipient's email domain is "white listed" (System setting "Whitelist Domains"), then we attach the document to an email.
    1. User permission "Securely Email Documents" is required for this to work.
2. Otherwise, the system creates a new "Received Document" document and adds it on the recipient's chart
    1. A "Received Document" will have doc_type WCRECVDOC
    2. The newly created document will be linked to the original one using the document_links database table
    3. It will have storage type 33
    4. Column to_doc_id value will be the original document doc_id
    5. The document type should be added on the "Message Center" chart tab of the portal chart(s)

Users are also able to select an "Employer" and perform the above actions on the related contacts.  Related contacts are found under the employer's Overview (EO) chart tab in the Contacts section.  These contacts have to be active users in the system, which means they need to be Login Enabled and have credentials to access the system.

# Setup involved

1. User Permissions
    1. "Securely Email Documents" - This is used when send documents as attachments
2. System Settings
    1. "Whitelist Domains" - Used to determine if we should email a document or create a "Received Document"
    2. "Default Portal" - This is used when we try to send activation codes to users, so that they can get access to the system
3. Other Configuration
    1. "Portal Setup" chart tab - "Enable Activation Code Redemption"

![](../send-document.assets/da668975187ff27da42b8517a5c343cd.png)

# Workflow

## Begin with

First you have to find a document and hover over the top section like so:

![](../send-document.assets/fab46b7132d46e5b670d2f0d2959f818.png)

Then click the icon like so:

![](../send-document.assets/daf18bf0c4e782a6a0c9e63b23d95a59.png)

The "Send Document" window will pop up:

![](../send-document.assets/ec1c3d5d99d9dfb1f23e30cfce6875f1.png)

1. "Subject" will be what is used on the email subject or the new received document.
    1. Users are able to customize it
    2. Number in the current value represents the document doc_id that the user is trying to send
2. "From" will be the "From Address" on emails
3. "Recipient" is an autocomplete input for all chart that have one of the "Contact" or "Provider" chart types
    1. Users are able to create a new contact if needed
4. "Employer" is an autocomplete input for all Employer Organizations

## Add new Contact

The following screenshot explain how you can add a new contact

![](../send-document.assets/3d3684456761db64d0f0756febe8ee75.png)

"Add Contact" window

![](../send-document.assets/49323c26fe71d0e02dd116fe0ed31bbb.png)

## Send the document

On the above screen, users can create a new contact chart and link a specific employer if needed.

After the screen is saved, it will populate the new information into the "Recipient" input on the "Send Document" window

![](../send-document.assets/ef20a4a2ecf8d85798b7bc8dce38c245.png)

In the screenshot above, you can see how the newly created contact is populating the "Recipient".

The "Better Corp." radio button populated here either because we added that employer on the "Add Contact" window, or because of the "Default Portal" system setting value.

This radio button will only show up if the "Enable Activation Code Redemption" checkbox is checked as explained above in [Setup Involved](#v2syi7euzkrn)

The "Enable Activation Code Redemption" method is advised, so that the users that get the new "Received Document" in their chart can have access to it on the portal.

After the "Send" button is clicked the "Send Document" window will change to this

![](../send-document.assets/970c3620cb821acaf71673f9529863bb.png)

Notice the "Previously sent to" section lists the recipient information with links to the chart and the new "Received Document" (Doc ID 733).  We also display the "Activation code" that was used.

If I choose the send the same document to someone using mieweb domain (whitelisted domain), this is how the "Send Document" window changes

![](../send-document.assets/8f7d1bdf0b75201380ff3c966cf85695.png)

Notice the "Previously emailed to" section shows up, and lists the email address that was used.

This is what the email looks on my email application

![](../send-document.assets/8647a2b13493cfb0c39ac928a023ff17.png)

## Employer Contacts

On the other hand, if I enter "Better Corp" in the Employers autocomplete input, get the following screen:

![](../send-document.assets/7456da0813b6a29a1ad5ef8307de5acf.png)

Notice all the checkboxes shown in the "Employer Contacts" section.

These contacts are:

1. Charts identified as contacts on the selected "Employer"
2. They are also active users.
3. They have an email address.

Notice in the screen below, one of those contacts does not have an email address and that's why he/she does not show up in the "Encounter Contacts" section above.

![](../send-document.assets/cb97d99b92c6b11d1bebdc3b3ce404ae.png)

You can then select the ones that they want to send the document to.  The actions that happen next, depend on the user's email address and whether it's white listed, or not.  We DO NOT generate activation codes on "Employer Contacts".  The assumption is that these contacts are already active users and do not need to create an account.

After you select contacts and click the "Send" button the window might look something like this:

![](../send-document.assets/e357d249f5d5f2027d0149d1ed9f7f9b.png)
