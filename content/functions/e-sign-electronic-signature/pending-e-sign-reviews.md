---
id: '1lEVwWXjC5fHEqff8amLbCXcRZK4I1-81u7xRPEs6s8I'
title: 'Pending E-Sign Reviews'
date: '2025-07-02T19:25:43.867Z'
version: 159
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:AOTHRKMF'
source: 'https://drive.google.com/open?id=1lEVwWXjC5fHEqff8amLbCXcRZK4I1-81u7xRPEs6s8I'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
E-Sign is used to electronically mark a document by putting the label "Signed by: Michael Example, MD" on a document in {{% system-name %}} within a chart.  This ‘signature label' is called an E-sign (electronic signature).  It's not a wet signature in handwriting, but it is a place in the document properties header that says "Signed by: Michael Example, MD".  It puts the name of the person that reviewed the document and marked it as ‘sign'.

E-Sign is requested manually when a user clicks Request Signature when in a document.  The user assigns an e-sign request to a specific user.  E-Sign requests can also be automated based on event, document, or other criteria and are configured by MIE via the Esign Editor.  An example of Esign request automation would be when a specified document type such as lab results coming in electronically via an interface, an esign request can trigger for the specific ordering provider to review and mark as signed.

The Pending Reviews tab, found within the E-Sign sidemenu tab module, is where users work the e-sign requests assigned to them.

## Accessing Your Assigned Pending E-Sign Requests

{{% system-name %}} displays a simple notification if you have any Esign requests assigned to you.  This notification is displayed at the top in the tool header at all times when working in {{% system-name %}} .  The notification displays as Esign (#).  The number (count) of the logged in user's pending E-sign requests displays in the brackets.  That notification there is also a hyperlink to take you directly to your Pending Reviews with one click.

![](../pending-e-sign-reviews.assets/588ebe02069bd1a37a4d3d93cba322ac.png)

Another way to get to your assigned pending e-sign requests is by going to the E-Sign sidemenu.  Clicking on the E-Sign sidemenu tab will take you directly to your Pending Reviews also.

![](../pending-e-sign-reviews.assets/3a503090a616489e559329f3395b90cd.png)

### Pending Reviews Tab

The Pending Reviews tab, within the E-Sign module, displays all the logged in user's assigned pending E-Sign requests that need to be worked.  There are 2 categories or buckets within the Pending Reviews tab.

#### Pending Documents section

The Pending Documents category/bucket will be displayed at the top and displays a list of all pending documents that need E-signed by the logged in user.  These documents request your e-signature.

{{% tip %}}
High priority requests will be at the top and highlighted in red, followed by normal and low priority at the bottom of your pending list.  The priority was set by the user that sent the request to you to be signed.
{{% /tip %}}

![](../pending-e-sign-reviews.assets/8d460074a1c6c68da9b1c34135e5af1b.png)

#### Last Reviewed Documents section

The Last Reviewed Documents category/bucket will be displayed next which lists documents you have last e-signed along with the signed date.  This list may be helpful if you needed to go back and review something you signed recently.

![](../pending-e-sign-reviews.assets/e91a1da82f1cd98bb247fd13313a065c.png)

The Pending Reviews tab can have a custom layout configured by MIE.  Some workflows may require or be helped visibly by splitting up pending E-sign requests into specific pending types or buckets.  The buckets would be specific types of documents pending e-signature, instead of all requests being displayed together or using the document type column sort feature.

![](../pending-e-sign-reviews.assets/6788d4921d0ede15c8f9cca1f5403180.png)

### Sign a Request

When viewing the Pending Documents awaiting your e-signature, simply click the Doc ID of the specific document you wish to review and sign.

![](../pending-e-sign-reviews.assets/f65b6cbc760efd7609494ae2dd80000e.png)

The Doc ID is a hyperlink that will take you directly into the specific document being requested to sign.  At the top is the document header, along with the visible verbiage (Preliminary).  When a document has been assigned to be e-signed, it indicates Preliminary on the document header.  If it has been signed by someone, but needs other signatures, it indicates "Signed (Preliminary): and who signed it".  If it has been signed by everyone that needs to, it indicates "Signed (Final): and the name of who signed it" or "multiple users" (if signed by more than one user).

![](../pending-e-sign-reviews.assets/845a85fa3cf803676fef295516695adb.png)

When done reviewing the document, scroll to the bottom of the document.  You will see several hyperlink functions and are described below:

![](../pending-e-sign-reviews.assets/ce94dca20a7657fccc706399ed2c03cc.png)

* <strong>SIGN DOCUMENT:</strong>  Click this and it marks the document signed as your name and takes it out of your pending e-sign queue.  You've accepted and signed off on the document. {{% system-name %}} then takes you back to the Pending Reviews summary tab and displays a confirmation the document has been signed.
* <strong>SIGN and Add Document:</strong>  Click this and not only does it mark the document signed as your name, but also opens a new screen where you can select and add/upload another document to the chart. Many providers use this ‘add document' option to create a note/comment if needed, when they sign their documents.
* <strong>SIGN DOCUMENT and Add Task:</strong>  Click this and it marks the document signed as your name, takes it out of your pending e-sign queue, and gives you the option to respond back to the sender by means of generating a task to them (generic or fast task). The task will automatically be sent back to the sender (person who requested your signature) even though it does not have their name in any fields.  The document is attached to the task. Fill out the due date, reminder date (if wish), Description, Priority level, and Notes.
* <strong>Add Task W/O Signing:</strong>  Click this and it does nothing as far as e-signing the document. The e-sign requests remains in your pending documents queue, but it gives you the option to send a generic or fast task to the sender.  The task will automatically be sent back to the sender (person who requested your signature) even though it does not have their name in any fields.  The document is attached to the task. Fill out the due date, reminder date (if wish), Description, Priority level, and Notes.
* <strong>Reject and Add Task:</strong>  Click this to reject the document, not e-sign it and a box called Reject Notes will appear with a text-box. Type in the notes/reason for why you are rejecting this document for e-sign.  Click Submit Rejection.  It takes it out of your e-sign pending queue, and has automatically sent a task to the sender.  What you type in the Reject Notes text-box will appear in the notes of the task to the sender.  It automatically sets the priority level to high for that task.  The task will automatically be sent back to the sender (person who requested your signature). The document is attached to the task.
* <strong>Add Dictation:</strong>  If dictation is enabled on the system, can click this to add dictation to the specific e-sign document you are working in.  If dictate something into the player, it will send the dictation job to the dictation tab/queue. The transcriptionist then can open the dictation and/or the document you sent this from in esign.  This allows the transcriptionist to access the document easily to make edits to if need be from your dictation remarks.
* <strong>Add Document:</strong>  Click this and another screen will open to the add document module of {{% system-name %}} .  You can add/create any document (ex: note) to the chart from here. When done, simply X out of this add document mode/window and it will still have the e-sign screen open in the main window.  Any document you create/add from esign using this add document feature will link themselves to the document being reviewed. You will see this in the document links section of the add document properties screen that opens once you've selected what type of document to ‘add'.
* <strong>Open Chart:</strong>  Click this to open the chart the document resides in a separate screen.  This is so you can look something up in the chart and not lose the document you are to e-sign in the original screen.  To exit out of the open chart screen, simply click the X at the top right corner when you are ready to complete the e-sign document.
* <strong>SIGN and Add Visit:</strong>  A list of several options will display after the Open Chart hyperlink. A link will display that allows the user to Sign the current document and then add an encounter. A link will display for each active encounter type in the database.  For Example, SIGN and Add Visit, SIGN and Add Results, SIGN and Add Case Management, etc. Sign and Add Encounter links sign the selected document and then create an encounter with the current date of service instead of the date of service on the document being signed.

![](../pending-e-sign-reviews.assets/0e2e4f0593bbbdf6a814deaefa4c555d.png)

### Sign and Create Encounter

The user experience for client databases on release 202309 and newer not only includes the standard ability to sign the document and add an encounter, but also includes the feature to automatically link the signed document to the newly opened encounter.  The e-signed document will then display in the newly added encounter in the **Linked Documents** encounter section in full detail mode. The newly created encounter will also default to "today's" date rather than the date of service of the signed document, as it did in previous releases.

![](../pending-e-sign-reviews.assets/74b9e041b5f590d7ad0c2f294a802c39.png)

![](../pending-e-sign-reviews.assets/852e273675f8b3c2e3b32ca248e1351c.png)

The same will occur, if the Quick Links feature is used from within the E-sign module, rather than using the Sign and add Encounter links at the bottom of each document.

![](../pending-e-sign-reviews.assets/8ac66534f71e1b5085ff13fa67b69392.png)

![](../pending-e-sign-reviews.assets/8a7e62f94843a50f764727cfe8c42e68.png)

The user experience for clients on a release prior to 202309 still have the ability to SIGN and Add an encounter, but the document will not automatically be linked to the encounter.  Users would need to manually link documents to the encounter if desired.

### Multi-Review

There is a Multi-Review option at the top of the Pending Reviews tab.  When clicked, it will display 10 pending e-sign request documents at a time from your list.

{{% tip %}}
There is a My Settings preference available to increase the number of documents in Multi-Review that it displays at a time.  This is an option to quickly review documents on one screen in bulk, and ability to mark them all signed in bulk, instead of individually working e-sign requests as described in the above steps.
{{% /tip %}}

![](../pending-e-sign-reviews.assets/2a94f6920110964ecc6ccf99bede477d.png)

When Multi-Review is clicked, the system will display the full view of each document on one screen.  Use the scroll to review the number of documents listed. These are pending documents that are assigned to the logged in user to e-sign.

At the top and at the very bottom is the button Mark All as Signed.  If you click this, it will mark all the documents displayed on the screen. It hasn't ‘signed' them yet, but it has quickly marked them all with this radio button option.  That is a quick way to mark all the bulk documents as ready to Sign.

![](../pending-e-sign-reviews.assets/379f72295fc292b3aa694dfb368c72a9.png)

However, each document displayed does still offer individual functions.  You could mark all 10 documents displayed on the screen as ‘Signed' in mass by clicking the Mark All As Signed button, but then decide that one document listed needs to be rejected.  One can then change the radio button function for that one specific document, while leaving the rest of the bulk documents indicated to be signed.

![](../pending-e-sign-reviews.assets/f06368142735b8a5d1766accf08d1174.png)

#### Options in Multi-Review

Even if you checked them all the documents in bulk as ‘Sign', you can change the option on a specific document displayed on the screen if needed and the rest of them will stay as ‘Sign'.

![](../pending-e-sign-reviews.assets/f06368142735b8a5d1766accf08d1174.png)

The choices on individual documents being reviewed and signed using Multi-Review method are described below:

* <strong>Leave Pending:</strong>  Choose this if you wish the document to stay in the pending E-sign queue to work on another time. Leaves the esign request as pending. (Ex: If you clicked mark all as signed but wanted to have a few stay in pending and not sign off on them yet).
* <strong>Set Low Priority:</strong>  Choose this if you wish the document to stay in your pending E-sign queue to work on another time but it also sets/changes it as low priority.
    * If you wish to set low priority, yet want to request a signature(s) from other people, then, you still click the radio button next to ‘Set Low Priority' then you can to over and select a person from the Request Signature dropdown arrow field.  This will leave the document in your E-Sign queue to do, but will then request the signature from the other person(s). A comment box next to the Request Signature drop-down will open to type in any comments for the person you are requesting a signature from.  Continue with the next document in your Multi-Review Listing and make selections.  When done with all documents and selections, click Sign Marked Documents.  It doesn't sign the ones that you stated ‘do nothing'. It just sends the requests to those other users (if you selected any) and keeps this document in your E-sign queue to still do.
* <strong>Sign:</strong> Choose this if you wish to sign the document.  It then takes it out of your E-sign queue. If you wish to sign, yet want to request a signature(s) from other people, then, you still click the radio button next to ‘Sign' then you can go over and select a person from the Request Signature dropdown arrow field.  This will sign and take the document out of your E-Sign queue, and will also then request the signature from the other person(s) (if you selected any). Continue with the next document in your Multi-Review Listing and make selections.  When done with all documents and selections, click Sign Marked Documents.
* <strong>Reject:</strong> Choose this if you wish to reject the document with notes/reason and it will automatically be sent to your user tasklist in the form of a task and it will take it out of your E-sign pending queue. The system automatically marks this rejected E-sign task as High and attaches the document.  Click the radio button next to ‘Reject' then can type in a note/reason in the free-text comment box next to that. Those comments will show up in the information bubble in document properties.  If you wish to reject, yet want to request a signature(s) from other people, then, you still click the radio button next to ‘Reject' then you can go over and select a person from the Request Signature dropdown arrow field.  This will reject and take the document out of your E-Sign queue.  It will then be sent back to the original requesting user in a task form.  It also then will request the signature from the other person(s) (if you selected any). Continue with the next document in your Multi-Review Listing and make selections.  When done with all documents and selections, click Sign Marked Documents.  When a provider rejects a signature it will task the person that sent it to him (or a specific person/dept depending on how you have the reject fast task setup), but it does not automatically un-request the signature.  Whomever receives the reject task has to manually un-request the signature for the person that rejected it.
* <strong>Request Signature:</strong>  You must choose an option before this (must select either to do nothing, sign or reject) then can use this field to request another signature from someone.  A comment box next to the Request Signature drop-down will open to type in any comments for the person you are requesting a signature from
* <strong>Add Dictation:</strong>  If system is enabled for dictation, can click this link and the dictation player will open and appear in the top corner.  You can add dictation to the specific e-sign document you are working in. If dictate something into the player, it will send the dictation job to the dictation tab/queue.  The transcriptionist then can open the dictation and/or the document you sent this from in esign. This allows the transcriptionist to access the document easily to make edits to if need be from your dictation remarks.
* <strong>Add Document:</strong>  Click this and another screen will open to the add document module of {{% system-name %}} .  You can add/create any document (ex: note) to the patient's chart from here. Any document you create/add from multi-review esign using this add document feature will link themselves to the document being reviewed. You will see this in the document links section of the add document properties screen that opens once you've selected what type of document to ‘add'.  

    ![](../pending-e-sign-reviews.assets/58c0ce8f1498206ec976b9fa2112a152.png)

* <strong>Open Chart:</strong>  Click this to open the chart that this document resides in a separate screen.  This is so you can look something up in the chart and not lose the document you are to e-sign in the original screen.  To exit out of the open chart screen, simply click the X at the top right corner when you are ready to complete the e-sign document.

### Sign Marked Documents

Scroll all the way at the bottom of the documents being displayed in bulk count using the Multi-Review feature to see the option to access the button Sign Marked Documents.

![](../pending-e-sign-reviews.assets/bdbabb9344098a616b8a74bc9caa7a0d.png)

After all the documents, displayed in bulk using Multi-Sign, have been marked to sign or other radio button option, click the Sign Marked Documents button as the final step.  The system will then sign the documents indicated to Sign, or other radio button options.  The system will display a message at the top of which documents its marked as signed, etc. The documents that were not marked as any radio button indication will remain displayed on the screen for you to look at again, complete or just ignore and go back to the pending list view.  These stay in your pending e-sign queue. If chose radio button on any document to Reject and typed in the notes/reason for rejecting in the summary at the top it will show an automatic task sent to your user task list for that rejected document.

![](../pending-e-sign-reviews.assets/66a1bbceb22d63b03bb0c9c44b55a476.png)

## E-Sign DataVis

Users on RC202309 and newer can switch from the legacy E-Sign view to the DataVis format by changing a My Settings user preference of *Use DataVis in E-sign* to Yes.

![](../pending-e-sign-reviews.assets/ec51e069b7783150e7c5fbffafe3daab.png)

If the **My Settings** preference to Use DataVis in E-Sign is enabled, users will see the **E-sign** DataVis on the **Pending Reviews** tab. The Pending Reviews tab defaults to e-sign requests for the logged in user. If the logged in user has the proper security setting access to view All Pending e-sign requests, then the logged in user may use the User autocomplete to search for another user, then click the Search button to view the other users unsigned e-sign requests. Users can create their own perspective(s) as needed also.

![](../pending-e-sign-reviews.assets/d066ac6f453063033b47af0b13d406c7.png)

Select a row or multiple rows of pending documents that need e-signed, then click the *Review Selected E-Sign* function button below the datavis table.  Doing that then opens a pop-up with the document(s) within it to review and sign document(s) individually from the E-sign Review screen.

![](../pending-e-sign-reviews.assets/830bf21234f589b4e2ffacf94cf95716.png)

Users with Proxy Signing security permission will have an option to search for other users and toggle to other users pending E-Sign requests list and be able to sign documents on behalf of another. If the user does not have Proxy Signing security rights, the user search field does not display to be able to search for pending e-signs requested for another user.

## Learning Management System

To learn more about Pending E-Sign Reviews, follow the link below to the Learning Management System course:

* [Esign](https://mie.talentlms.com/shared/start/key:AOTHRKMF)
