---
id: '1B7jui0tuMXtAbfAhX6oxYh3SInCEOpvtJxvsMLf4za8'
title: 'Working Inbound Fax Queue & Distributing Incoming Faxes'
date: '2020-03-09T16:19:40.525Z'
version: 96
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'indexing.md'
  - 'mailto:noreplywebchart@med-web.com'
  - 'mailto:helpdesk@mieweb.com'
source: 'https://drive.google.com/open?id=1B7jui0tuMXtAbfAhX6oxYh3SInCEOpvtJxvsMLf4za8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Incoming/Pending Faxes

Incoming faxes for certain fax numbers can be found within {{% system-name %}} , by clicking on the **Fax/file Q** tab on the left sidebar menu. (Your system may have this named differently to whatever you wish). This will automatically default to open and show the "Pending" status faxes in the Fax queue.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/74525b62f57fee22ff93d0e135d90b45.png)

Depending on your "folder preference" you are set to, you will default to show all incoming faxes (files) in the queue that need to be worked on. The folder on the left column is highlighted in light grey as to which folder your are in and viewing files/faxes for. If your preference is set to a specific category then that is the folder you will default to each time you go into the IFQ. To set your default category/folder you want to land out (instead of Inbox), click the **preferences** tab at the top and set your category to default to.

The IFQ module by default will open to the Inbox (unless you have set a different preference folder) and automatically opens to show all the "pending" (read & unread) status faxes/files. Files in **bold** are unread files. Files in un-bold are files that have been viewed but nothing done to them yet. Using the keyboard arrow keys would move from file to file (message to message). If you then click on the body of a message file, it will scroll the message/file. Clicking on another message or the same message will put focus back to the list again.

The items are ordered by their creation date/time with the most recent on top.

It shows the sender (who sent the fax), the recipient (your practice's fax number it was sent to). It also shows the total number of pages, the date & time it was received and it shows the status of those faxes.

For the sender column, there is a system setting your MIE Implementer can turn on (or back off) to show sender name, not just fax #. If the sender's fax number is already in the practice's {{% system-name %}} , then it will display sender with the sender's name/practice name in this column also (see above screenshot). Not just fax # only.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/949ee12e3c4dea716a8b35635da1fbff.png)

The options column shows a checkbox. If you hover your mouse over open link, it will show the IFQ Fax Q id #. If you click open, the alternatiff screen will open and show you each page of the fax in a "preview" type of mode. You can only view the fax on the screen or can print it if you wish. To get out of the preview mode, you will need to X out of it when done looking at it. You cannot process/distribute the fax from the "open" link. However, when you look at it using open the fax will remain in the *pending/read* status files. Previewing/opening a fax does not change its status.

You can also "view" it in the body message below if you click on the file/fax in your inbox. To work or distribute a fax, you would check-mark the box in the options column and proceed from there (see next steps on subsequent pages).

## Advanced Search Fields

The search field in Fax/File Q are fields you can fill out to narrow down a search for an incoming fax/file received. Click the "Adv.Search" button to get to this search filter criteria.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/738f941e18df48f716cd9419c0cf474d.png)

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c2c756496ffc8afbfd858f7937fafe50.png)

* <strong>Sender</strong> field: This is a <em>"starts as"</em> search. You can type in ex: 260459 to search and work only the incoming faxes from fax #'s that start with area code 260 and prefix 459. It is <em>not</em> a partial search, it's a "starts as" search. You can also type in the entire 10-digit fax number the fax is received from (the sender) to narrow down results to show only faxes sent from a specific sender (fax#). Or can enter the first characters of a name if stored as an identified name. A fax # can be stored as an identified name if the fax # is loaded in the Fax-Physician or other department in control.
* <strong>Status</strong> drop-down field:
    * <strong>"Pending"</strong> means these are incoming faxes which no user has looked at yet in the Fax/file Q. They are new faxes and need to be processed by a user.
    * <strong>"Read"</strong> status means the faxes in this category were viewed, but nothing was done to these faxes/files yet by a user. It wasn't emailed, wasn't batched, wasn't deleted, wasn't uploaded into the patient's chart, etc. After viewing a file for 5 seconds it will be marked as "read" and appear un-bolded.
    * <strong>"Batched"</strong> means the faxes in this status were sent as a batch to index in WebScan by a user in the Fax/file Q. These were batched and sent to WebScan to be indexed and uploaded into a patient's chart.
    * <strong>"Deleted"</strong> means the faxes in this category were deleted by a user in the Fax/file Q. They were not needed for a chart; they are faxes of junk, etc. The system is usually set to purge these deleted faxes in 90 days, however contact your MIE Implementer to find out. They cannot be retrieved after that purged date. Your MIE Implementer can change the system setting to a different number of days to purge the deleted faxes if you wish.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/a508b72730a5d5c94560ee4f44196dea.png)

* <strong>"Auto-Indexed"</strong> means a fax came in that has a barcode on the coversheet, if the system setting to <em>Auto-Index Incoming Faxes</em> is turned on, then the Inbound Fax Queue will attempt to read that barcode and put the fax into the patient's chart. If this is successful, it marks that fax as Auto-Indexed and stores in this ‘status'. If not, it goes to this IFQ as usual. The system setting is turned off by default, but to turn this feature on, set the system setting to 1 or contact your MIE Implementer. 
    ![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/84b2cf522a257a847fe9d42eb46cde80.png)
* <strong>Create:</strong> You can search by specific date the fax was received.
* <strong>Recipient:</strong> You can use the drop-down to select and search a specific recipient fax #. The recipient fax# is the fax # that the fax was received (if your practice has multiple fax machines/numbers).
* <strong>Show Message Events:</strong> this is tied to SureScripts secure messaging. Checkmarking this will result to show events such as "message read" and "message deleted" that are sent back from recipients of secure messages sent.
* <strong>Category</strong> field: Incoming faxes can be moved into a category (which we also call ‘buckets'). Users with permissions can work on the incoming fax queue and move faxes into a separate ‘bucket' or category for a specific department, floor or user to work on. Your MIE Implementer can help you set up bucket categories for incoming faxes or delete categories no longer needed. A category cannot be deleted if there are files/faxes still housed in that category. You can search by category of incoming faxes if the fax was processed into a category. The ‘Any Category' selection in this search drop-down can be selected if you are searching for a fax that came in, but you don't know which category it may have been moved to or where it's now housed or where it was moved to. It will then search to find the fax you want by searching all the categories.
* <strong>Subject:</strong> can enter in words to filter the files by "subject" which pertains to secure email messages from SureScripts for now.
* <strong>File Queue ID:</strong> The file queue id is a number the system assigns to each incoming fax (just like outbound faxing has a fax id).  We don't display the File Queue ID on the incoming faxes however for MIE to help you find a fax they perhaps didn't receive then MIE will attempt to find the fax on the server and then provide the user with the File Queue ID #. The user then can enter the file queue id here to search and find their fax to view.

### Superuser Buttons

The buttons below the search fields also are quick links to functions available to superusers or users with permission to certain administrative things within the Inbound Fax Queue. If you do not have security for these functions, you will not see these buttons.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/065ea861821ad1d271305f652a7bd4b3.png)

* <strong>Recipient Permissions:</strong> If a practice has users they want to have permission to the incoming Fax/fileQ, then you must set them up for each fax number in this screen. Users need to be set there to even be able to see the file if they are emailed or tasked. <em>See other help documentation to set up user access/permissions named Inbound Fax Queue-Setting User Access/Permissions</em>
* <strong>Edit Categories:</strong> You can add, delete, and manage Fax/file Q categories from here. A category cannot be deleted if there are files/faxes still housed in that category. You would need to move them first.

## Work Multiple Faxes Simultaneously

If you are the person(s) assigned to "distribute" the faxes, it is easiest to click on the SELECT ALL button.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/7aad646034a775141b6b7c7730f2ec86.png)

This puts a checkmark in each of the boxes on the far right side in the options column. (and you can go back and click "select none" to reverse).

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c0a80c9eb442df015403ea31b064a185.png)

Once these boxes are checked, click the "VIEW" button.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c750b9107e7e3866c041d81fd85c42e2.png)

This will then allow you to work each fax you checkmarked by utilizing radio function buttons on each fax.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c651a7d10203fc719b30624cd1094214.png)

## Working Faxes

If you wish to do one fax at a time, you click check-mark the box of the specific fax file(s) you want to work on in the **options** column. When you do that, the body of the fax/file displays in the bottom portion of the window pane.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/bc46bdf9b3d8a108f9b8e79eb72f2eb9.png)

If there is more than one page in a fax, you can look at all the pages in two ways. If the arrow pointing to the right (in the toolbar) appears, that means there is more than one page. Just click on that arrow to see the next page. Or, you may click on the down arrow next to the page Number, and select which page you want to see.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/38aa15151390a4838fbfb81dca74a8ed.png)

Follow these instructions to begin processing/distributing the faxes in various methods.

Files/Faxes can be added to a batch, e-mailed to someone in your organization, deleted, tasked, categorized and/or printed. All of those options appear as function buttons at the top of the IFQ screen.

* <strong>Create Batch:</strong> When you have decided that this faxed document or file needs to go into a patient's chart, simply click the button that says "Create Batch".

If you previewed/read the faxes/files, you can check-mark the files that you want to process in *bulk* and can simply check-mark the boxes and then select *Create Batch* button at the top. These are quick links to process/distribute faxes that you know for sure should be processed by those methods.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/999086d607b63228e5a326284b96c100.png)

If you click **Create Batch**, it will prompt you to type in a comment for that batch and then click *Create Batch button* again (or cancel). Creating a ‘batch' puts those faxes and all pages of the fax(es) into WebScan for someone to index into patient's charts.

If you click **Create Batch & Index** all those faxes/files you check-marked will become a batch, it will prompt you to type in a comment for that batch, then click *Create Batch & Index* then it will automatically take you directly to WebScan to index those documents immediately. **If you have pop-up blocker on, it will not automatically open WebScan from here.**

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/5f2f14f53036db5df9f453613406c9ca.png)

{{% info %}}
If you need instructions on how to index batches in WebScan, please see the [Indexing](indexing.md) help documentation.
{{% /info %}}

* <strong>Delete:</strong> When you have determined that this faxed document or file needs to be deleted out of the queue, it doesn't to be emailed to anyone, doesn't to be indexed into a patient's chart, etc. simply mark the file/fax you wish to delete, then click the "delete" button at the top and it will delete the files you have marked to (in options column).

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/60ba46d2e165c3f5e1f1427e045a33d6.png)

You can "undelete" one if you go to the deleted bucket/category on the left side buckets and find the one to checkmark and then click the undelete button at the top. It will move it back to the "inbox" category/bucket.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/6b5c1ea842e0dfc2d11d3cbc583c4901.png)

* <strong>Task:</strong> You can task a file/fax using a fast task template that is set up for IFQ. Select the file (checkmark it) and then click the Task button at the top.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/ca647c391a81cfa5844b87fe1b4f218a.png)

Choose a fast task template from the drop-down that is specified for incoming Fax/file Q files. Your superuser or MIE Implementer can set up the fax task templates that you want processed from the Fax/file Q. To set up fast tasks to be available from this Incoming Fax Queue, create/add a fax task from the task module and make sure the *type* is set to *incoming file queue* and make sure it's assigned to the proper user or department. Once saved, that fast task will then appear as a selection here in the Incoming Fax Queue.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/52a1b0ffb3180fa3c27fe26013a64c17.png)

* <strong>Categorize:</strong> Categorize it to a specific department, bucket or whatever category your practice is set up for. By categorizing it to a department, it is now available for the staff who handles that specific department's faxes. That staff can view them, print them, or send them back to a medical records department to be indexed into a chart. Checkmark the file/fax(es) you want to move to a bucket/category and select the category/bucket to move them to from the drop-down selection. Then click the "categorize" button to distribute/process each fax/file document to go to that bucket/category you selected. The faxes will be moved to that bucket/category now and can be accessed from the side list of buckets in the IFQ.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c46a7769138f906c7e12290774ce109b.png)

If you need to move a fax back into the "inbox" category/bucket, simply checkmark the fax you need to move back and in the drop-down select the "No Category" and then click the *categorize* button. This will now move that fax(es) back into the main "inbox" bucket/category.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/f2fe5001749fd0f68ba17a58112f4bf0.png)

* <strong>E-Mail:</strong> Click this button and begin to type the user's name in {{% system-name %}} that will be receiving this fax by email.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/40cf83d9bb547803ebc2c77a15375c50.png)

It will auto-complete and give you choices based on your typing, of users within your {{% system-name %}} system. You have to select a user from the auto-complete. The user you are emailing this to **has** to be a user that's in your system with an email address entered in their {{% system-name %}} username screen, otherwise you will get an error. (Meaning, you cannot email this to an outside provider or someone outside your practice. Emailing can only be done to users within your practice boundaries). The person within your practice that you are emailing this to **must have an email address** entered in their username screen in the Control tab. Contact a superuser if an email address needs entered for a user. This will **not** allow you to free-type an email address here in this method. It has to be an auto-complete choice selection which sends this document to the email on file for that user in their username screen. You can email multiple recipients in your system. Once the user to email is selected, then tab to the *Message* section and type any email subject notes you wish to have shown on this email.

{{% warning %}}
If you email a fax, it will email (send) that fax to the user you specified and then marks that fax with a deleted status.
{{% /warning %}}

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/3c606b7748ad2f380471fc4737988c6d.png)

The email will to go the recipient from a [noreplywebchart@med-web.com](mailto:noreplywebchart@med-web.com) email address. Your MIE Implementer can change this system setting to reflect a different email. It can only be set to one specific email address you have at your practice. It could be a specific individual's email for your practice that may get replies to emails being sent out, or it could be a group email you have within your practice (ex: [helpdesk@mieweb.com](mailto:helpdesk@mieweb.com)) Changing the ‘from' email will affect emails generated from any module/feature in {{% system-name %}} . Examples are these email reminders and also emailing of documents from the inbound fax queue.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/1bcd9adf37286b1ecba4653b5349f9cb.png)

The subject line will be FAX from… It will have the faxed document as the attachment. It will send two file types of this faxed document. It attaches a .tif version and an .htm version depending on which email program you use. The **htm** version is the only one that will display your email notes (if you typed any in the step above).

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/0229fe6ac5865e7d01a53d87d9d7525e.png)

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/df3c2c5ca7be6388e061a3f37edaa84a.png)

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/1fc5f0d0b3f9c95b0037e3a3ee9f36be.png)

* <strong>Reply/Forward:</strong> <em>The reply and forward buttons you see at the top of the IFQ screen are only for replying or forwarding secure emails received from SureScripts at this time.</em>

If you checkmark a message/item that is an email from SureScripts, the *reply* and *forward* buttons will appear active on your IFQ screen. You can reply or forward and the appropriate reply or forward window will open. When you reply, the email address will already be pre-populated for you to send to.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/6e77dde0846706ad6386b926c6db8adc.png)

{{% note %}}
*To "preview" or "open" to view faxes that come into the IFQ the Alternatiff/Active X functionality program is used – therefore apple products will not open them. You will see the warning "There is no Active X Control (AlternaTIFF) on your system. Contact your administrator." when you click "view" on the IFQ. When you click the fax that came in and the bottom preview screen below it opens - it says the above message - but then says "click here to download a pdf version" which at least shows the apple user the 1st page - but not subsequent pages of the fax. This is applicable to iphones, ipads, etc. If you have an apple computer you can run in a different browser mode/parallels, etc to get access.*
{{% /note %}}
