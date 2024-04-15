---
id: '1iwFDWxfDtmZRjE2Q2bdW7Jnd7q_7G9y1WmBUHML9rfM'
title: 'Messages from NMC User'
date: '2020-03-11T22:32:43.569Z'
version: 78
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1iwFDWxfDtmZRjE2Q2bdW7Jnd7q_7G9y1WmBUHML9rfM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Portal Integration with {{% system-name %}}

NoMoreClipboard offers NMC-MD – a patient portal that combines personal health record functionality with an administrative portal that enables a practice using {{% system-name %}} to receive and reply to patient-generated messages within a practice's {{% system-name %}} system. This is considered a data-send/auto-route document interface.

With a NMC-MD interface/integration with {{% system-name %}} patients can visit the website, click on a patient registration button and link to a NoMoreClipboard portal that looks and feels just like the practices existing site making the patient experience appear seamless. From the portal, patients can create a personal health record account, share demographic and clinical information, and send and receive secure messages to the practice (ex: Nurse questions, billing questions, request a refill, request an appointment, etc).

![](../messages-from-nmc-user.assets/b2c6c0a932a84c51307d6902fc091c2b.png)

Any nursing/clinical questions, appointment requests, medication refill requests, billing questions will come into {{% system-name %}} via a task. If you are part of the department for tasks, you will see an alert at the top alert bar showing any tasks needing to be worked on, or you can view them from the sidemenu tab named TASKS.

![](../messages-from-nmc-user.assets/2f1977bd1b5ec0b129f5121564b808ef.png)

A NoMoreClipboard (NMC) user can communicate electronically with the practice using this ‘message' feature. The NoMoreClipboard (NMC) user selects from their NMC (NoMoreClipboard) account to send you (for example) a request for an appointment with your practice. When they submit their appointment request from the NMC side, you will receive that message from the NMC user in your {{% system-name %}} system as a task. Your MIE Implementer and NMC Implementer will have had these task rules set up prior during all the implementation meetings and onboarding process. {{% system-name %}} users who are a part of that specific department that the task is tied to will be notified of the incoming task.

If you (system wide) do not want to get these tasks until the patient is merged then MIE Implementer needs to check off the box labeled "Skip Temporary Patients?" in the tasklist event that is set up for these incoming NMC tasks.

To work an incoming task regarding medication refills, billing questions, questions to a nurse, and/or appointment requests, you would GRAB the task so that you are assigned that specific task and no one else can work on it in duplicate while you are also working on it. Find the task you want to work on and click GRAB.

![](../messages-from-nmc-user.assets/5a55b8af55895a9a167a586d1009ec75.png)

When you have grabbed the task, the task will open on your screen. The top portion is the document (the message) itself from the NMC user. It is describing what they are requesting or asking. The bottom portion is the task options to complete the task, etc.

![](../messages-from-nmc-user.assets/0fd47f82bc742acf0ad9a77aa9bd20fa.png)

### Reply to Messages from Portal Users

*You can only use and see the reply feature if you have security* **Send Patient Data***.*

After you have grabbed the task and read the document/message that came in, you should click OPEN CHART to get to the patient's chart. When you go to OPEN CHART, it opens the patient's chart in a separate window and leaves your grabbed task in the background still in its own window. When you go to OPEN CHART, you can go to the scheduler and schedule an appointment (if you schedule directly into the {{% system-name %}} scheduler and not via interface), or you can go into the patient's chart to verify the meds they are requesting a refill on and refill it from the patient's e-meds tab directly then print/fax/transmit it, or go to the patient's chart to verify any other patient information or look at the patient's chart to help you respond to the patient and or process their request.

![](../messages-from-nmc-user.assets/0fd47f82bc742acf0ad9a77aa9bd20fa.png)

Once you are done in the patient's chart or in the scheduler, etc, close that separate screen that opened when you clicked OPEN CHART and then your grabbed task is still on your screen. If your grabbed task doesn't display again for some reason, simply go over to the sidemenu tab named TASKS and click that and you will see the grabbed task in your USERS TASKS section towards the top.

Once you are ready to reply to the patient with a response or consider the task done, you can click REPLY link and reply to the patient electronically. This sends back to the NMC user your reply in electronic format (like an email) and also saves what you are typing as a document itself in the patient's {{% system-name %}} record.

Your ‘reply' gets sent to the NMC user in their NMC account message box. It doesn't go to a patient's email account (ex: hotmail, gmail, etc) it only goes to the patient's NMC message inbox, so they have to log into NMC to see their messages and their NMC inbox, just like how they sent you the request initially. The NMC user *will* get an email **notification** to the main member's personal email (that they have set up to be in NoMoreClipboard) stating that they have an interface mailbox document for one of the members in their personal health record account. But they have to log into NMC mailbox to read the reply document you sent them.

![](../messages-from-nmc-user.assets/78a67494a5d66f34114afaa585e452ab.png)

Once you click REPLY you will be prompted to select the correct ‘text' document to store your reply to the NMC user as. It is important to select the correct text document as this is also storing your reply as a document in the {{% system-name %}} system that can be retrieved at anytime. Your practice may be set up with different document types/names than the below screen shots. The doc.types/names are customized per practice.

![](../messages-from-nmc-user.assets/0c813d0f5f5dfc0db9c0c4641695cdac.png)

If you were replying to an ‘appointment request', then you would select **Reply-NMC Appt Request** here. Once you've selected the document type, it will open up the text box and you can begin typing in your reply to the NMC user (your patient).

![](../messages-from-nmc-user.assets/37cde4e24657fbe1d1ff88cb48a0f325.png)

Click ADD DOCUMENT button below the text box when done. When you click the ADD DOCUMENT button, it sends this message that you typed to the NMC user's account message inbox **and** it stores your reply as a document in the patient's chart in {{% system-name %}} . Your reply doesn't go to a patient's email account (ex: hotmail, gmail, etc) it only goes to the patient's NMC message inbox, so they have to log into NMC to see their messages and their NMC inbox, just like how they sent you the request initially.

Some patients indicate in their message that they'd rather be called with the information they are requesting/asking from you. Even if you call them, you can also send a reply if you wish. Regardless of how you contact the patient with the requested information/question they sent you, you then need to proceed to mark the task done.

When you are now done replying to the NMC user, you are now ready to mark this task done. Mark the task done like any other task (for more information see help document named *Tasking.pdf*).

Once you've marked the task done, it is taken out of your tasklist and marked as done.

#### Verify Successful Transmission of Messages

From {{% system-name %}} , you can verify if your ‘reply' document went successfully into the NMC user's mailbox.

When you have ‘replied' to a NMC user using the reply feature, after you uploaded that reply document, it states you've successfully uploaded the document. The ‘reply' document is now stored in the patient's e-chart and also sent the ‘reply' document/email to the patient's NMC mailbox. Since you have uploaded the ‘reply' document and it was successful, you can quickly click the Properties link in the successful uploaded document.

![](../messages-from-nmc-user.assets/3fb317f8eba3ea2cb13bcda541047b86.png)

When you click Properties link, scroll down to the section that says **Current Routes** and **Routing History**. In the *Current Routes* section, it shows who sent it, the date, the recipient will always be NoMoreClipboard, and the **status** is what you want to look at.

If your ‘reply' document was successfully sent, a COMPLETE status displays in the current route section. It means the ‘reply' document went successfully back to the NMC user's mailbox by this auto/datasend route. If you hover over the word *complete* it also give you additional detailed information. If you needed to resend this document through the same method (NMC autoroute), then you can go to the options column and click on the resend link.

![](../messages-from-nmc-user.assets/7b0fbf5b10010d5e2698381e21ec0203.png)

From this section, you can also acknowledge an error, try to resend the document via that route again, or deactivate the document from trying the datasend route again, etc. In the OPTIONS column at the right of the route, those are links you can click to acknowledge, resend, or deactivate. "**Deactivate"** means that you no longer want the error to be sent and to never try again. **"Acknowledge"** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes, the data/document information will be resent.

Hover over the word *error* in the status column to see details of why there is an error. If you hover over the word *error* it will help tell you what went wrong and possibly what needs corrected.

![](../messages-from-nmc-user.assets/8810000040a7fbfa2dd8beb05c85ed61.png)

If your document route has an error on it or is pending, you can click the cancel link or the error link to move it from ‘pending' to the ‘errored' section/list which removes it from the list of routes to be retried. The ‘resend' option can undo this operation.

![](../messages-from-nmc-user.assets/af3bf511862709f7399064257d79f6a6.png)

You can get into a document and check the route and status at any time. You don't have to do it right after you upload a ‘reply' document to a NMC user. This is just a way to check if the ‘reply' document did indeed get sent successfully or if you need to address an error.

For more information on document properties, please see other help document named *Document Properties.pdf*

#### SendQueue Sidemenu

This sidemenu tab is where you can then see Datasend routes in progress, pending routes, completed routes, and the error routes category. It's similar to outgoing faxes to check status (pending, errored, complete etc) but is for datasend routes of electronic data being sent from {{% system-name %}} to a system you are linked to. In this case…NoMoreClipboard is the system you are linked to and electronic data is being sent via routes from {{% system-name %}} into NoMoreClipboard. It's a full listing and can use a drop-down method to perform the desired selection to all the routes in that category in mass, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../messages-from-nmc-user.assets/b31ba15e2ab7f5cde2f5896c2c182ac1.png)

**"Deactivate"** means that you no longer want the error to be sent and to never try again. **"Acknowledge"** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes, the information will be resent. **"Resend"** will attempt to resend that data message again.

![](../messages-from-nmc-user.assets/bea517a18faf64206eabcf6bc38b77bb.png)

You can individually select the routes to perform an option. Once you have the routes checkmarked, you go to the end of that section and select the error route option to perform using the drop-down. Then click Perform button. In this example I have marked these 5 routes to do a function of *resend* and then click Perform button to perform that resend on those 5. It applies the function option to the ones checkmarked. If you wish to mark **ALL** routes in that bucket and perform a function, you do not have to individually checkmark each route. You just scroll to the end of that section and click the [All], it will then put a checkmark on all those routes shown on your screen (10 at a time), then set the function to perform in the drop-down and then click Perform.

![](../messages-from-nmc-user.assets/d629b2307437a0005fd62b2ad095605c.png)

There is a security option for MIE/Tech support named "Break Sending Lock" option for Routes marked as ‘Sending' in the DataSend Queue. This feature allows the unlocking of any ‘stuck' route which has been stuck for more than an hour. Users wishing to have this ability will need the new E-Chart permission: "Unlock Sending Routes". In the case of a coding error, routes can become ‘stuck' in the ‘In Progress' status. This new option allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool.

![](../messages-from-nmc-user.assets/8869258247937318d3989283ecfc92f6.jpg)

## Alert Toolbar

The other way to be alerted if a ‘reply' document didn't go successfully to a NMC user is to have your alert toolbar turned on. Instead of doing into the individual reply document properties to check a document if it was successfully sent or not, you can simply be alerted of any errors and acknowledge them at that time. It is recommended to have this turned on for your view since you work with the NoMoreClipboard interface.

![](../messages-from-nmc-user.assets/1f98f105aad86ae06b6c614780c5dbc3.png)

For more details on this feature, please see other help documentation in EChart section named *Alerts/Errors/Failures-Interactive Tab.pdf*

## Health Forms from Portal

Your practice may have up to 3 forms programmed on the NoMoreClipboard (NMC) side. These are forms specific to your practice and specialty and the NMC user would answer them electronically and NMC converts them onto your paper forms and sends those forms to you into {{% system-name %}} and alerts you that they came in via a task. NMC sends the forms over into {{% system-name %}} as one "document" (a Print Definition from NMC). So if you have a patient information form and a patient ROS form, etc they wouldn't come in separately. They'd come in as one document and store in the patient's chart as such.

Instead of receiving the forms in bulk as one document using the task queue, we recommend setting your system up to receive these PHR forms in the WebScan indexing module so you can index each individual page into it's specific doc.type and store in the patient's chart.

The user/indexer works the WebScan module as usual to index batches. Any batch from NoMoreClipboard containing PHR documents will show the date it was received, but the name of who uploaded the batch is blank and comments are blank since it's a batch that came in from NMC containing a patient's PHR health forms. Each patient is an individual batch from NoMoreClipboard.

![](../messages-from-nmc-user.assets/6c07432d3d627de7d2b85ec655ad77f1.png)

Simply open the batch and begin indexing. The PHR forms from NoMoreClipboard can be programmed with your {{% system-name %}} doc.type of which specific form it is. Click the *Process BarCodes* button before indexing so it will read the doc.type barcodes on the forms that came in from NoMoreClipboard. This will index the doc.type for you. The patient name is available on the NMC forms. Continue indexing the fields and delete any unwanted pages and upload the forms to the patient's chart. For more information on how to index, please see other help documentation named *Indexing.pdf*

You can ask your MIE Implementer to create any e-sign rules or tasking rules you wish to trigger after any of these doc.types are indexed and uploaded into a patient's chart if someone needs to be alerted that they came in and were indexed or if staff needs to look at the forms after they came in and were indexed.

![](../messages-from-nmc-user.assets/7cfbd51e226ed73f7febca6c7488e02f.png)

### Reconcile CCR Document from Portal User

Continuity of Care Record (CCR) is sent from a NMC user into {{% system-name %}} through the portal also. When you receive such a document based on the task rules you have set up. The Continuity of Care Record (CCR) is the discrete data from the patient's PHR and can be reconciled using the FroozHIE method into the patient's {{% system-name %}} account. To work on a CCR record and reconcile it into {{% system-name %}} , GRAB the task.

![](../messages-from-nmc-user.assets/7e02f342e6cc319b9282071529b7aa18.png)

Once you have grabbed the task, it will open up the CCR document on your screen. This is the data the patient is sending you regarding their PHR. To reconcile it and bring this data over into {{% system-name %}} , you need to click on the **Doc ID: #** at the very top left corner of the CCR document that opened on your screen. Click on that underlined number.

![](../messages-from-nmc-user.assets/eb367cd43dd8f58d7c5665168eee52b5.png)

Once you clicked on the underlined doc.id #, it will display the CCR document again but you will now see the **Reconcile** link at the top right corner with the other options. Click on the **Reconcile** link to get into the FroozHIE method to reconcile this data into {{% system-name %}} . (System setting to *reconcile* must be turned on for this link to show).

![](../messages-from-nmc-user.assets/13fdf188d689b1d97828e0f99205bbac.png)

Once you've clicked reconcile, a separate window on your screen which is the FroozHIE module. There are instructions at the top to explain the FroozHIE tool and how to bring data over into {{% system-name %}} .

Whatever you want brought over, click the >> button next to it. The LEFT side is the patient's NoMoreClipboard PHR record they are sending to you. The RIGHT side is what you have in {{% system-name %}} for that patient currently.

{{% note %}}
The CCR shows all the sections like Family History, Procedures, Injections, Social History, Illnesses, etc. However, the FroozHIE tool only shows certain sections like Demographics, Meds, Allergies, etc. Even though you do not see the injections, family history, procedures and observation sections in the FroozHIE, they will come over automatically into the patient's chart as soon as you click the SEND CHANGES button. They are automatic in the background at this point in time. Therefore, it's important to click the SEND CHANGES button even though the left side and right side of the FroozHIE tool may already match from what you've brought in before. The update/change from the patient may be in the other ‘automatic' sections that you don't see on the FroozHIE tool.
{{% /note %}}

![](../messages-from-nmc-user.assets/ede70f5e586b501f27519df04a68b4bd.png)

If you want to bring over individual line items from the left side to the right side, use the >> button on each line item. If you want to bring over the entire section/category, click the >> button between *incoming* and *destination* towards the top title of each category. This will bring over all items from the left to the right side in mass (instead of clicking individual line items).

When done selecting which items or sections to bring over, click the SEND CHANGES button at the very bottom of the FroozHIE screen.

![](../messages-from-nmc-user.assets/fd5c7827fd69a49b64b868eb7e9bde27.png)

Once done bringing over the items in the FroozHIE tool, it will refresh that separate screen back to the patient's chart. Simply click the X at the top right to close out that screen.

{{% note %}}
The other sections that are ‘automatic' to come into {{% system-name %}} from the CCR after clicking the FroozHIE SEND CHANGES button are Procedures, Injections, Observations and Family History. Once you click the SEND CHANGES button, these ‘automatic' section items will automatically come into the patient's chart. You can find them in the observations chart tab, injections chart tab, conditions chart tab, Patient Summary chart tab, and encounters. Therefore, it's important to click the SEND CHANGES button even though the left side and right side of the FroozHIE tool may already match from what you've brought in before. The update/edit from the patient may be in the other ‘automatic' sections that you don't see on the FroozHIE tool.
{{% /note %}}

You now need to mark the task done since you have reconciled the CCR document into {{% system-name %}} . Click the sidemenu tab named TASKS.

Look in your USER TASKS section and the CCR document you grabbed and reconciled is there. Since you grabbed it, it's now assigned to you specifically and will show here in the task section named USER TASKS. Simply check-mark the box in the options column and it will strikethrough the task marking it done. If your system isn't set up with a check-box, simply click MARK DONE in the options column and click the COMPLETE button. That task is now marked done and you can work on another.

![](../messages-from-nmc-user.assets/54de758cdbfdfc3d4909f382fde8823e.png)

### Send CCR Document to Portal Account

You can send a Continuity of Care Record (CCR) from {{% system-name %}} through the portal back to the patient's NMC account also. This is a reverse of what was just described in the previous pages. You can receive the CCR document from the NMC user, but you can also push back an updated CCR to the user with all the {{% system-name %}} data you have collected during the patient's visits, other practices, etc.

There are 2 different tabs to get to the POST PATIENT SUMMARY TO NMC button. One way is from the Patient Summary tab and the second way is from the Personal Health Record sub-tab.

#### Patient Summary Tab

Get into the patient's {{% system-name %}} record and go to the Patient Summary chart tab. There is a portlet section named **Patient Portal** from which you can access this feature. The Patient Portal section shows the NoMoreClipboard (NMC) account this {{% system-name %}} patient is linked to. Below that it shows any *unreconciled patient summaries (CCR's)* that are pending for this patient. Unreconciled patient summaries are CCR's the NMC user has sent to you through {{% system-name %}} and no one has reconciled those into {{% system-name %}} yet. You can click on the document id number and reconcile the CCR right from here. When you click the document id number, it will open the document where you will need to click the reconcile link. Then it will take you to the FroozHIE tool to import the data that is pending. Once any CCR document in this listing is reconciled, they will disappear from this summary listing here in the Patient Portal portlet.

When a {{% system-name %}} user clicks the button POST PATIENT SUMMARY TO NMC it will send the NMC user the {{% system-name %}} data information. So the patient can have an updated record of his data to reconcile into their NMC record. When you sent a patient summary from {{% system-name %}} to the NMC user, it sends a patient summary from {{% system-name %}} to the NMC user's message box. A full Patient Summary (in CCR format) is generated and sent to the patients account in NMC.  This will be used for part of the ‘meaningful use' criteria for {{% system-name %}} practices that have this interface with NMC.

![](../messages-from-nmc-user.assets/5c749c5fdf146b238369f342dbd806f5.png)

Once you have sent the patient summary to the NMC user from {{% system-name %}} using that button, it will tell you the document number and a message that it was uploaded successfully into the NMC user's account. If the patient doesn't have an NMC account yet, it will provide you with the member pickup code that you can give to the patient. They would then log into NoMoreClipboard, create an account and use that member pickup code. Once the promo code is picked up (patient creates a NMC account) then the promo code is removed. Any future pushes would not return a promo code, just the confirmation that the document was posted to NoMoreClipboard. The NMC# is not known to the {{% system-name %}} system until the NMC patient sends something back to the {{% system-name %}} system. This is why you still see the message "*a NoMoreClipboard.com account is not linked to this patient"*, but you are not getting a promo code back either.

You will see confirmation and you will see a link that says *Click here to view the local CCR document*.  You don't need to click it—but if you want to see what was in it—click that link and you're taken to the CCR document you just sent them.

![](../messages-from-nmc-user.assets/616fd8e8d388d650b9703c5a9cf155ee.jpg)

Once you click the POST TO NMC or SEND TO NMC button from anywhere—the CCR document you sent to that patient via NMC is stored as doc.type {{% sys-name %}} CCR and is found in your doc.sum tab **and** NMC Documents tab.   Then you can access from there to see who/when/how many times a CCR was sent to that patient and track or see when.

If you want to see **if** the CCR went to the NMC patient *successfully* or not, you can see that from the SEND QUEUE side menu tab as always, or you can see it by going to the specific patient's chart, find the CCR you pushed, go to properties and down in the **Current Routes** section you'll see complete or error and hover your mouse over for more details.

![](../messages-from-nmc-user.assets/890d6fbe6dc4ba2121a8c3c118fbc8c2.jpg)

The practice can control what data is sent in a CCR from {{% system-name %}} . Your MIE Implementer can set up a CCR Sharing flowsheet in the observations tab. You can specify which observations you wish to have in the CCR's. The other things that are automatically sent in a CCR from {{% system-name %}} are Demographics, Meds, Allergies, Conditions, Procedures, Family History, Immunizations/Injections and the observations you specify in a CCR Sharing flowsheet. If no CCR Sharing flowsheet is set up, then any and all observations from that patient's chart and/or encounter would be in the CCR. Most practices are set up with a CCR Sharing flowsheet restricting the observations to only the minimal ones that Meaningful Use requires, but the CCR Sharing flowsheet gives the practice the control on what is shared. Also your system can be set to not send a patient's SSN through the CCR. System setting "CCR", "Content", "Include Social Security Number" allows you to turn off including the SSN in CCRs created in your system, if value is set to 0.

You can have the pickup code display/pull on any form or document also (like the patient clinical summary handout). The pickup code is saved as an observation in the patient's chart. If you have a bidirectional portal with NoMoreClipboard this may be something to utilize or just to notify the patient to go to nomoreclipboard.com & retrieve.

![](../messages-from-nmc-user.assets/8ada1f40c18bf02100a2c1f7088658a8.png)

#### Personal Health Record Sub-Tab

Get into the patient's {{% system-name %}} record and go to the Visits chart tab. There is then a sub-tab named **Personal Health Record** from which you can access this feature. The Personal Health Record tab shows the NoMoreClipboard (NMC) account this {{% system-name %}} patient is linked to. Below it, it shows a listing of all CCR documents {{% system-name %}} has received for this patient. This is a full listing. These are all CCR documents received whether they've been reconciled or not. This is just a summary listing.

When a {{% system-name %}} user clicks the button POST (PATIENT SUMMARY) TO NMC it will send the NMC user the {{% system-name %}} data information. So the patient can have an updated record of his data to reconcile into their NMC record. When you sent a patient summary from {{% system-name %}} to the NMC user, it sends a patient summary from {{% system-name %}} to the NMC user's message box. A full Patient Summary (in CCR format) is generated and sent to the patient's account in NMC.  This will be used for part of the ‘meaningful use' criteria for {{% system-name %}} practices that have this interface with NMC.

![](../messages-from-nmc-user.assets/81087be0a247431155d2b45672a5cb6a.png)

Once you have sent the patient summary to the NMC user from {{% system-name %}} using that button, it will tell you the document number and a message that it was uploaded successfully into the NMC user's account. If the patient doesn't have an NMC account yet, it will provide you with the member pickup code that you can give to the patient. They would then log into NoMoreClipboard, create an account and use that member pickup code. Once the promo code is picked up (patient creates a NMC account) then the promo code is removed. Any future pushes would not return a promo code, just the confirmation that the document was posted to NoMoreClipboard. The NMC# is not known to the {{% system-name %}} system until the NMC patient sends something back to the {{% system-name %}} system. This is why you still see the message "*a NoMoreClipboard.com account is not linked to this patient"*, but you are not getting a promo code back either.

![](../messages-from-nmc-user.assets/28b05643814cd0a70dd1fe7f6541332f.jpg)

How Portal Users Receive Patient Summary (CCR)

When that NMC user is logged into their NMC account and is in their NMC mailbox, they will see that you sent a CCR document (electronic history) to them.

![](../messages-from-nmc-user.assets/3f2012278c8014931205a5b64f36017c.png)

They then click on the doc.id column to open up the CCR document you sent to them from {{% system-name %}} . Once they are in the document, it looks similar to the CCR documents that you work on in {{% system-name %}} . The NMC user can see the electronic history data you sent and can click the links at the top right corner to perform the function they want to.

![](../messages-from-nmc-user.assets/5bf8e2fb2d779bc9108486abb79d1ff0.png)

*Add to e-clipboard:* Click this link to add this document to the NMC user's E-Clipboard. Items on their E-Clipboard can be shared with others.

*Import data into account:* This will bring the NMC user to the ‘FroozHIE' tool, which allows the user to discretely import the data within this document into their personal health record for the member.

### Send Documents to Portal Account

You can send {{% system-name %}} documents through the portal back to the patient's NMC account also into their NMC inbox manually or through an auto-route set up.

Find the document you want to send the patient via NoMoreClipboard portal (ex: Lab Results, dictated summary, etc). It can be any type of document. Once you've found the document in the patient's chart you want to send them via NoMoreClipboard, click the doc.id of that document.

![](../messages-from-nmc-user.assets/d77379e19997d31e363f7a4f4740ae48.png)

Once in the document, click the Send link at the top right corner of the opened document. If you do not see the send link, then you do not have security permission to send patient data. Users must have security permission to *Send Patient Data.*

![](../messages-from-nmc-user.assets/9a7261fd726a5b92ac2e8eeb475e644f.png)

In the *To* column, start typing *nomoreclipboard* all together and it will auto-complete to give you the nomoreclipboard database to send to. If you get more than one *nomoreclipboard* result to choose from, contact your MIE Implementer.

![](../messages-from-nmc-user.assets/e2ce41c843d61a7e1d5f5817f6757c20.png)

In the *Method* field, make sure to always select **HL7 Send** as the method. It should default as such though. The *Detail* field will be **NMC_HL7**. The **[]Send as HTML** checkbox would only need checkmarked if you are sending an e-order document. Click **Update & Close** button.

![](../messages-from-nmc-user.assets/10ca43b27e5145f9f348539e05ca6e35.png)

It will then be sent to the patient's NMC account into their NMC inbox. You can go to the document properties and look at the *current routes* section and see the **status** should say complete if went thru fine. If not, check your alerts which is described in earlier pages of this help documentation.

![](../messages-from-nmc-user.assets/634a6ada47e74dd70a2f585162580490.png)

When the NoMoreClipboard user logs into their NMC account and goes to their inbox…

![](../messages-from-nmc-user.assets/7d0ff60b4ab2d082e7c2b3693655fc86.png)

The document you sent shows in their inbox to open. When they open the message in the inbox, the document will be there.

![](../messages-from-nmc-user.assets/3aa83bd43cb1ab03a0b986fee4be41d0.png)

Here is an example of a sketch document that was sent from the patient's {{% system-name %}} into their NMC inbox.

![](../messages-from-nmc-user.assets/f1fde955ded53e89af21c42c658d7246.png)

{{% info %}}
Scripted Rules can be programmed with criteria to allow the system to show the "Send" link or not on the patient's documents. For example, you do not want staff to be able to electronically send documents to the patient's NMC account unless they have PHR Consent doc.type signed. Contact your MIE Implementer to create a scripted logic item called "data_consent" if need this additional type of functionality.
{{% /info %}}
