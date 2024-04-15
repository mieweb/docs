---
id: '1C4Vw9cSEYMGiWWD7hKDjUEhxs2v4u8xyXKKN1BVJsLQ'
title: 'Word Documents - CC Physicians Feature'
date: '2020-03-23T16:31:35.134Z'
version: 80
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../../e-chart/alerts-errors-failures-interactive-tab.md'
source: 'https://drive.google.com/open?id=1C4Vw9cSEYMGiWWD7hKDjUEhxs2v4u8xyXKKN1BVJsLQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% note %}}
The CC Physicians feature from word documents will not work until the practice has the new ActiveX word control version 1.0.0.23. If you wish to utilize this feature, please contact your MIE Implementer to have the new word control pushed out to your {{% system-name %}} system. Your MIE Implementer also has to install datasend for your {{% system-name %}} system for this feature to work.
{{% /note %}}

## CC (Carbon Copy) Feature

CC Physicians is a new feature that can be used in word documents that you create by using the new word control version 1.0.0.23. The new word control version can be pushed out to your system for use. Even though the *CC Physician* link appears on word documents you create, the feature will not work unless you computer has the new word control version 1.0.0.23 installed on it.

Using the CC Physician feature allows you to attach any users, referring physicians, etc as a carbon copied user and immediately faxes it to them or by any other datasend feature your practice has set up. This eliminates the need to task a document and have someone manually fax it, etc.

## Add a CC User to the Word Document

Click on the Add link to create a list of CC (Carbon Copied) Physicians for this word document you are creating. This is optional. You do not have to attach any carbon copied physicians.

![](../word-documents-cc-physicians-feature.assets/4bb94d720820bd92b3508ba362e0f084.png)

A new window will open to add CC'd users to this document.

![](../word-documents-cc-physicians-feature.assets/798d1d094f12972de8a92beb59e3514e.png)

**Recipient:** Recipient is the cc'd (carbon copied) users (usually physician(s) that you want to receive this word document. Usually the physicians dictate who they want to ‘cc' their dictated document to and the transcriptionists can set those cc users here when they open the word template to transcribe into. The transcriptionist can also set the cc users once they are in the word document typing (see below pages), but this is the first place you can set a cc user for the document.

* You can free text the recipient's name to be a cc'd user/physician for this document, or you can begin typing first or last name and it will auto-complete to give you matching users your system has loaded in the {{% system-name %}} departments.

![](../word-documents-cc-physicians-feature.assets/917c13b619666bf79448713252a3f050.png)

**Method:** The *method* field will automatically default to what the user has set as their *preferred route* in their username screen. Most users (for example referring physicians that are loaded into your {{% system-name %}} system) are set to preferred route as ‘fax'. So, the method field here would default to FAX, but you can override it and select using the drop-down arrow. This CC feature is mainly used to ‘fax' these carbon copied users, so you will most likely always be selecting ‘fax' here to get this document to that cc'd user/physician, but you can override and make a different selection.

![](../word-documents-cc-physicians-feature.assets/39d16a7a370787a73b1f02c4342676c4.png)

* The username screen for a loaded {{% system-name %}} user within a department (example: referring physicians) has a field to set their ‘preferred route'. The <em>method</em> field here in the cc feature will respect what that preferred route is set for on that cc user.

![](../word-documents-cc-physicians-feature.assets/d1fffcd98b9c56bb854e439d9ee2aef7.png)

* If you chose method of ‘Print', the next <em>detail</em> field will populate the stored user's full address in the <strong>Mail To</strong> field. Currently, the <strong>Mail To</strong> doesn't actually get used. In the future, it will be developed to print the document and an envelope at the same time. Then the address that shows up in this <em>Mail To</em> field (or if you manually type one) in the <em>Mail To</em> field will be utilized on the envelope. You can leave this blank for now as this feature has not yet been developed. Using the method ‘print' will cause the document to be printed to the (network) printer by the system's print daemon. This will only work for network printers that have been configured to work with {{% system-name %}} . Continue to select the printer, paper tray and also check-mark if you want the document to print without document headers or not.

![](../word-documents-cc-physicians-feature.assets/da2a6c03c0e43609cc87c8e3301973b0.png)

**Detail:** If the method is ‘Fax', then this next *detail* field will populate the Fax Number stored for that user in their username screen. If you free-typed in a *recipient* then you would need to type in the full fax number manually (remember area code). This is the fax number the document will be faxed to.

**Coversheet:** Default Setting means it will render the fax coversheet that your MY SETTINGS preference is set to. Otherwise, you can select a different fax coversheet here using the drop-down.

**Fax without document Header:** Check-mark this box if you wish to send this document to the cc'd users without the {{% system-name %}} document header (this is the same as in the print/fax queue mode for other {{% system-name %}} documents).

![](../word-documents-cc-physicians-feature.assets/d8f811cc230a1e977d9cc3f2f19b644d.png)

**Send On:** Select when you want to send this document to the cc'd users/physicians. Your choices are to send this document on any and **All Revisions** (this includes the original document), or **Preliminary Signed** which will send this document after it has been *preliminary* e-signed by your provider, or **Final Signed Only** which will send this document after it has been e-signed as final by your provider. Once this cc route is created, when the document matches the ‘Send On' criteria, it will automatically be sent via the method you selected (faxed, printed, etc) by the system's datasend program. Your system must have a datasend setup for this to work, so please contact your MIE Implementer.

![](../word-documents-cc-physicians-feature.assets/4e09d12bb0920b1157cac176c884134c.png)

When you are done setting up the cc user and the method of route, click the ADD button to add this user to be carbon copied to the document. Click Clear to clear out all fields and begin again. Click Cancel to get out of this screen. Once you click the ADD button, it will list that cc user above. You can add another cc user to this document if you wish. Nothing is saved/complete until you click the DONE button.

![](../word-documents-cc-physicians-feature.assets/9980b4ac3e636a82dc548fa0207c8a47.png)

To add multiple CC Users/Physicians to the document, click the ADD button and it will open the recipient screen again to continue with the next CC user you want to add to this word document. When you are complete with the cc user list for this document, click the DONE button. When the DONE button is selected, your cc users are saved and tied to that document (you can edit later if you wish while working in the document. See below help pages).

![](../word-documents-cc-physicians-feature.assets/55e6eda2fd6615b6af0ba31cbd33f5c4.png)

Once you've clicked the DONE button, you will be returned to the *Add Document Properties* window and all the CC Users/ Physicians you set will show in the properties for the document. If you forgot a CC physician, you can still click the Add link there and add more. You can add additional CC Physicians before launching (creating) the word document.

![](../word-documents-cc-physicians-feature.assets/be3756034d3a31db57b2f6cecfd4ebb2.png)

Open the word template, as usual, to create the word document by clicking the Add Document button.

![](../word-documents-cc-physicians-feature.assets/be3756034d3a31db57b2f6cecfd4ebb2.png)

The word template will open for you to begin typing and then upload the document into the patient's chart when done. After the word document is uploaded, it will automatically create the route(s) specified (the routes are the cc users and method you selected for this document). At that point, datasend will pick up the routes and dependent upon *send on* status that was selected for each route. To see the routes for the word document you uploaded, see below section named **Document Properties**).

### Add CC User from the Word Template

You can look to see which CC'd users are tied to the word document you created and are currently working in (before uploading). You can also add more CC users to the document or remove them while working in the body of the word template open on your screen (example: if later on in the dictation the physician specifies to CC another user).

To do this, at the top left corner of the word toolbar is a button named **CC UserList**. Your computer needs the newest word control version for this button to appear, so if your system doesn't have this pushed out to be used, please contact your MIE Implementer.

Click the ‘CC UserList' button from the toolbar at the top while you are working in the word document before uploading it.

![](../word-documents-cc-physicians-feature.assets/2cc835b4976f2bd84af44aa1531be323.png)

The CC Physicians window will open showing what current CC recipients are currently tied to this word document you created and are working in. It shows the route specified also and send on criteria. If you need to remove a CC user, simply click the [ - ] button from here. If you need to add another CC user/route to this document, simply click the ADD button and add the CC user, route & send criteria (as described above on previous pages).

![](../word-documents-cc-physicians-feature.assets/6308fc637272d0fbb4685237b0303144.png)

When you are done with the CC user screen, you must click the DONE button to save anything and/or to get out of the window.

You will be returned back to the word document you have open and were working on. Continue to type in your document and click the UPLOAD button when done to upload the document.

![](../word-documents-cc-physicians-feature.assets/2cc835b4976f2bd84af44aa1531be323.png)

You will be shown the uploaded document on your screen if your MY SETTINGS preference is to return you to the uploaded document view upon upload process. Your uploaded document shows it in a text version and has assigned the document a document id since it is now uploaded into the patient's chart.

![](../word-documents-cc-physicians-feature.assets/551c37bcedd1151b7487cf9deb1c0fb5.png)

## Viewing CC'ed Users on an Uploaded Document

You can see which CC'd users are set to an uploaded document and their routes that are set even after a document is uploaded. You can also view if the document was sent, if it's pending or if there was an error for that route/cc'd user.

Simply find the stored/uploaded document in the patient's chart (doc id). Then click on the *Properties* link found on the stored document.

![](../word-documents-cc-physicians-feature.assets/551c37bcedd1151b7487cf9deb1c0fb5.png)

The document properties will show various sections and scroll down to the sections named **Current Routes for Document** and **Routing History for Document**. There you will see which cc'd user/physician this document went to, how it was sent (printed, faxed, etc), date/time sent and if the datasend was successful or pending or has an error you need to acknowledge or you can resend a document via this route from here also. For other specific information on document properties and routes, please see other help documentation named *Document Properties.pdf*. For other specific information on how to be notified of a datasend error, please see other help documentation named [*Alert-Errors-Failures-Interactive Tab*](../../e-chart/alerts-errors-failures-interactive-tab.md)*.*

![](../word-documents-cc-physicians-feature.assets/a3c0ab622d9d9c5e90d1c2afc9e03a10.png)

Scrolling down in the document properties will also show fax history, print history, etc to see additional information also.

## Editing Uploaded Word Documents with CC Users Attached

You can edit (revise) an uploaded word document in a patient's chart as usual. Simply find the stored/uploaded document in the patient's chart (doc id). Then click on the *Edit* link found on the stored document.

![](../word-documents-cc-physicians-feature.assets/551c37bcedd1151b7487cf9deb1c0fb5.png)

When you click the *edit* link, the *edit document properties* window will open. It will show you what CC users/physicians are already tied to that uploaded word document. You can add another at this time by clicking the Add link in the CC user field, or remove one, etc.

![](../word-documents-cc-physicians-feature.assets/3d78451a2181c9756a4cd94ae97d2b80.jpg)

Depending on what the CC'd users are set to for *send on status*, if you make a revision—the route may be set up to send the revised document also to the CC'd user (see *send on* field in above previous page 3 steps).

![](../word-documents-cc-physicians-feature.assets/86c9f624bc9763642f845736bcbc24be.png)

You must continue and click the EDIT DOCUMENT button to get into the document and make any other changes to the document itself and upload the document again. You can also see the CC userlist while working in the body of the word template (as stated in previous pages of this help document) by using the CC Userlist button in the toolbar of the opened word document.

Once you've edited a document and re-uploaded it, that revised document will again create the route(s) specified and datasend will pick up the routes depending on the *send on* status set for that cc'd user and will then show the current routing and tracks history of the routing in the document properties also.
