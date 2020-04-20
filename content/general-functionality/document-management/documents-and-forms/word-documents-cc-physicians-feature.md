---
title: "Word Documents - CC Physicians Feature"
date: 2020-03-23T16:31:35.134Z
url: "general-functionality/document-management/documents-and-forms/word-documents-cc-physicians-feature.html"
author: Jeremia Ploor
version: 65
id: 1C4Vw9cSEYMGiWWD7hKDjUEhxs2v4u8xyXKKN1BVJsLQ
source: https://drive.google.com/open?id=1C4Vw9cSEYMGiWWD7hKDjUEhxs2v4u8xyXKKN1BVJsLQ
---
{{% note %}}

The CC Physicians feature from word documents will not work until the practice has the new ActiveX word control version 1.0.0.23. If you wish to utilize this feature, please contact your MIE Implementer to have the new word control pushed out to your {{% system-name %}} system. Your MIE Implementer also has to install datasend for your {{% system-name %}} system for this feature to work.

{{% /note %}}


## CC (Carbon Copy) Feature

CC Physicians is a new feature that can be used in word documents that you create by using the new word control version 1.0.0.23. The new word control version can be pushed out to your system for use. Even though the *CC Physician* link appears on word documents you create, the feature will not work unless you computer has the new word control version 1.0.0.23 installed on it.

Using the CC Physician feature allows you to attach any users, referring physicians, etc as a carbon copied user and immediately faxes it to them or by any other datasend feature your practice has set up. This eliminates the need to task a document and have someone manually fax it, etc.

## Add a CC User to the Word Document

Click on the Add link to create a list of CC (Carbon Copied) Physicians for this word document you are creating. This is optional. You do not have to attach any carbon copied physicians.

![](../../../external_files/0760a85a8d36362f88e1ad24c7683b63.png)

A new window will open to add CC'd users to this document.

![](../../../external_files/4c314b02eb808e6f47654aaea9a5c2ab.png)

**Recipient:** Recipient is the cc'd (carbon copied) users (usually physician(s) that you want to receive this word document. Usually the physicians dictate who they want to ‘cc' their dictated document to and the transcriptionists can set those cc users here when they open the word template to transcribe into. The transcriptionist can also set the cc users once they are in the word document typing (see below pages), but this is the first place you can set a cc user for the document.

* You can free text the recipient's name to be a cc'd user/physician for this document, or you can begin typing first or last name and it will auto-complete to give you matching users your system has loaded in the {{% system-name %}} departments.

![](../../../external_files/2d3b3c0d12283994668c0ca19c117407.png)

**Method:** The *method* field will automatically default to what the user has set as their *preferred route* in their username screen. Most users (for example referring physicians that are loaded into your {{% system-name %}} system) are set to preferred route as ‘fax'. So, the method field here would default to FAX, but you can override it and select using the drop-down arrow. This CC feature is mainly used to ‘fax' these carbon copied users, so you will most likely always be selecting ‘fax' here to get this document to that cc'd user/physician, but you can override and make a different selection.

![](../../../external_files/e2754a85f42a34c344f52317d42b183f.png)

* The username screen for a loaded {{% system-name %}} user within a department (example: referring physicians) has a field to set their ‘preferred route'. The <em>method</em> field here in the cc feature will respect what that preferred route is set for on that cc user.

![](../../../external_files/d2356b4818875ae54130622565882233.png)

* If you chose method of ‘Print', the next <em>detail</em> field will populate the stored user's full address in the <strong>Mail To</strong> field. Currently, the <strong>Mail To</strong> doesn't actually get used. In the future, it will be developed to print the document and an envelope at the same time. Then the address that shows up in this <em>Mail To</em> field (or if you manually type one) in the <em>Mail To</em> field will be utilized on the envelope. You can leave this blank for now as this feature has not yet been developed. Using the method ‘print' will cause the document to be printed to the (network) printer by the system's print daemon. This will only work for network printers that have been configured to work with {{% system-name %}} . Continue to select the printer, paper tray and also check-mark if you want the document to print without document headers or not.

![](../../../external_files/1f4a58b250bf1045d85ddd1593175696.png)



**Detail:** If the method is ‘Fax', then this next *detail* field will populate the Fax Number stored for that user in their username screen. If you free-typed in a *recipient* then you would need to type in the full fax number manually (remember area code). This is the fax number the document will be faxed to.



**Coversheet:** Default Setting means it will render the fax coversheet that your MY SETTINGS preference is set to. Otherwise, you can select a different fax coversheet here using the drop-down.



**Fax without document Header:** Check-mark this box if you wish to send this document to the cc'd users without the {{% system-name %}} document header (this is the same as in the print/fax queue mode for other {{% system-name %}} documents).

![](../../../external_files/df7b8e4b15ec03324c579c0b41ae3da8.png)



**Send On:** Select when you want to send this document to the cc'd users/physicians. Your choices are to send this document on any and **All Revisions** (this includes the original document), or **Preliminary Signed** which will send this document after it has been *preliminary* e-signed by your provider, or **Final Signed Only** which will send this document after it has been e-signed as final by your provider. Once this cc route is created, when the document matches the ‘Send On' criteria, it will automatically be sent via the method you selected (faxed, printed, etc) by the system's datasend program. Your system must have a datasend setup for this to work, so please contact your MIE Implementer.

![](../../../external_files/d2e56cce6fc5cd6ddabc64639183f8ae.png)



When you are done setting up the cc user and the method of route, click the ADD button to add this user to be carbon copied to the document. Click Clear to clear out all fields and begin again. Click Cancel to get out of this screen. Once you click the ADD button, it will list that cc user above. You can add another cc user to this document if you wish. Nothing is saved/complete until you click the DONE button.



![](../../../external_files/6b00e0774f301f4bff71333c670c662b.png)



To add multiple CC Users/Physicians to the document, click the ADD button and it will open the recipient screen again to continue with the next CC user you want to add to this word document. When you are complete with the cc user list for this document, click the DONE button. When the DONE button is selected, your cc users are saved and tied to that document (you can edit later if you wish while working in the document. See below help pages).



![](../../../external_files/3c8953e63d057b81d35eec463c0377fb.png)



Once you've clicked the DONE button, you will be returned to the *Add Document Properties* window and all the CC Users/ Physicians you set will show in the properties for the document. If you forgot a CC physician, you can still click the Add link there and add more. You can add additional CC Physicians before launching (creating) the word document.

![](../../../external_files/d4b2864a35d47299539cf6c01f91fe38.png)



Open the word template, as usual, to create the word document by clicking the Add Document button.



![](../../../external_files/d4b2864a35d47299539cf6c01f91fe38.png)



The word template will open for you to begin typing and then upload the document into the patient's chart when done. After the word document is uploaded, it will automatically create the route(s) specified (the routes are the cc users and method you selected for this document). At that point, datasend will pick up the routes and dependent upon *send on* status that was selected for each route. To see the routes for the word document you uploaded, see below section named **Document Properties**).

### Add CC User from the Word Template

You can look to see which CC'd users are tied to the word document you created and are currently working in (before uploading). You can also add more CC users to the document or remove them while working in the body of the word template open on your screen (example: if later on in the dictation the physician specifies to CC another user).

To do this, at the top left corner of the word toolbar is a button named **CC UserList**. Your computer needs the newest word control version for this button to appear, so if your system doesn't have this pushed out to be used, please contact your MIE Implementer.

Click the ‘CC UserList' button from the toolbar at the top while you are working in the word document before uploading it.

![](../../../external_files/052c3391dbac45b314da38e7f7cd3ed4.png)

The CC Physicians window will open showing what current CC recipients are currently tied to this word document you created and are working in. It shows the route specified also and send on criteria. If you need to remove a CC user, simply click the [ - ] button from here. If you need to add another CC user/route to this document, simply click the ADD button and add the CC user, route & send criteria (as described above on previous pages).

![](../../../external_files/4111c85a598f5c102c1dfe3310edee57.png)

When you are done with the CC user screen, you must click the DONE button to save anything and/or to get out of the window.

You will be returned back to the word document you have open and were working on. Continue to type in your document and click the UPLOAD button when done to upload the document.

![](../../../external_files/052c3391dbac45b314da38e7f7cd3ed4.png)

You will be shown the uploaded document on your screen if your MY SETTINGS preference is to return you to the uploaded document view upon upload process. Your uploaded document shows it in a text version and has assigned the document a document id since it is now uploaded into the patient's chart.

![](../../../external_files/725c6887394285c859ce6de4232b587e.png)

## Viewing CC'ed Users on an Uploaded Document

You can see which CC'd users are set to an uploaded document and their routes that are set even after a document is uploaded. You can also view if the document was sent, if it's pending or if there was an error for that route/cc'd user.

Simply find the stored/uploaded document in the patient's chart (doc id). Then click on the *Properties* link found on the stored document.

![](../../../external_files/725c6887394285c859ce6de4232b587e.png)

The document properties will show various sections and scroll down to the sections named **Current Routes for Document** and **Routing History for Document**. There you will see which cc'd user/physician this document went to, how it was sent (printed, faxed, etc), date/time sent and if the datasend was successful or pending or has an error you need to acknowledge or you can resend a document via this route from here also. For other specific information on document properties and routes, please see other help documentation named *Document Properties.pdf*. For other specific information on how to be notified of a datasend error, please see other help documentation named [Alert-Errors-Failures-Interactive Tab](https://drive.google.com/a/mieweb.com/open?id=121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc)*.*

![](../../../external_files/8f31a1407141f70b497e95d5e4f900ff.png)
Scrolling down in the document properties will also show fax history, print history, etc to see additional information also.

## Editing Uploaded Word Documents with CC Users Attached

You can edit (revise) an uploaded word document in a patient's chart as usual. Simply find the stored/uploaded document in the patient's chart (doc id). Then click on the *Edit* link found on the stored document.

![](../../../external_files/725c6887394285c859ce6de4232b587e.png)

When you click the *edit* link, the *edit document properties* window will open. It will show you what CC users/physicians are already tied to that uploaded word document. You can add another at this time by clicking the Add link in the CC user field, or remove one, etc.

![](../../../external_files/610f9cf381c8d8e475fc501f2fe05063.png)

Depending on what the CC'd users are set to for *send on status*, if you make a revision—the route may be set up to send the revised document also to the CC'd user (see *send on* field in above previous page 3 steps).

![](../../../external_files/db5039b892daa6d53f6abf413b00ddfd.png)

You must continue and click the EDIT DOCUMENT button to get into the document and make any other changes to the document itself and upload the document again. You can also see the CC userlist while working in the body of the word template (as stated in previous pages of this help document) by using the CC Userlist button in the toolbar of the opened word document.

Once you've edited a document and re-uploaded it, that revised document will again create the route(s) specified and datasend will pick up the routes depending on the *send on* status set for that cc'd user and will then show the current routing and tracks history of the routing in the document properties also.
