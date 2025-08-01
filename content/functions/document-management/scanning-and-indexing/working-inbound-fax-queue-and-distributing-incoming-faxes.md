---
id: '1B7jui0tuMXtAbfAhX6oxYh3SInCEOpvtJxvsMLf4za8'
title: 'Working Inbound Fax Queue & Distributing Incoming Faxes'
date: '2025-06-18T18:54:07.766Z'
version: 195
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'indexing.md'
  - 'https://mie.talentlms.com/shared/start/key:AOAHRKMF'
source: 'https://drive.google.com/open?id=1B7jui0tuMXtAbfAhX6oxYh3SInCEOpvtJxvsMLf4za8'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
## Incoming/Pending Faxes

Incoming faxes for certain fax numbers can be found within {{% system-name %}} , by clicking on the **Fax Q** tab on the left sidebar menu. (Your system may have this named differently to whatever you wish). This will automatically default to open and show the "Pending" status faxes in the Fax queue.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/e0e980d178e973a513babae6638a6337.png)

Depending on your "folder preference" you are set to, you will default to show all incoming faxes (files) in the queue that need to be worked on. The folder on the left column is highlighted in light grey as to which folder you are in and viewing files/faxes for. If your preference is set to a specific category then that is the folder you will default to each time you go into the IFQ. To set your default category/folder you want to land out (instead of Inbox), click the **preferences** tab at the top and set your category to default to.

The Fax Q module by default will open to the Inbox (unless you have set a different preference folder) and automatically opens to show all the "pending" (read & unread) status faxes/files. Files in **bold** are unread files. Files in un-bold are files that have been viewed but nothing done to them yet. Using the keyboard arrow keys would move from file to file (message to message). If you then click on the body of a message file, it will scroll the message/file. Clicking on another message or the same message will put focus back to the list again.

The items are ordered by their creation date/time with the most recent on top.

It shows the sender (who sent the fax), the recipient (your practice's fax number it was sent to). It also shows the total number of pages, the date & time it was received and it shows the status of those faxes.

For the sender column, there is a system setting your MIE Implementer can turn on (or back off) to show sender name, not just fax #. If the sender's fax number is already in the practice's {{% system-name %}} , then it will display sender with the sender's name/practice name in this column also (see above screenshot). Not just fax # only.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/0d0c614edc901a8742e15b46f8c7af88.png)

The options column shows a checkbox. If you hover your mouse over open link, it will show the IFQ Fax Q id #. If you click open, the alternatiff screen will open and show you each page of the fax in a "preview" type of mode. You can only view the fax on the screen or can print it if you wish. To get out of the preview mode, you will need to X out of it when done looking at it. You cannot process/distribute the fax from the "open" link. However, when you look at it using open the fax will remain in the *pending/read* status files. Previewing/opening a fax does not change its status.

You can also "view" it in the body message below if you click on the file/fax in your inbox. To work or distribute a fax, you would check-mark the box in the options column and proceed from there (see next steps on subsequent pages).

## Search Fields

The search field in Fax/File Q are fields you can fill out to narrow down a search for an incoming fax/file received. Click the "Search" link to get to this search filter criteria.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/3f553a0a694f38db3685a4a42d1bac9e.png)

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/d5626b40898ed915ac3e9c41fa0a145b.png)

* <strong>Sender</strong> field: This is a <em>"starts as"</em> search. You can type in ex: 260459 to search and work only the incoming faxes from fax #'s that start with area code 260 and prefix 459. It is <em>not</em> a partial search, it's a "starts as" search. You can also type in the entire 10-digit fax number the fax is received from (the sender) to narrow down results to show only faxes sent from a specific sender (fax#). Or can enter the first characters of a name if stored as an identified name. A fax # can be stored as an identified name if the fax # is loaded in the Fax-Physician or other department in control.
* <strong>Status</strong> drop-down field:
    * <strong>"Pending"</strong> means these are incoming faxes which no user has looked at yet in the Fax/file Q. They are new faxes and need to be processed by a user.
    * <strong>"Read"</strong> status means the faxes in this category were viewed, but nothing was done to these faxes/files yet by a user. It wasn't emailed, wasn't batched, wasn't deleted, wasn't uploaded into the patient's chart, etc. After viewing a file for 5 seconds it will be marked as "read" and appear un-bolded.
    * <strong>"Batched"</strong> means the faxes in this status were sent as a batch to index in WebScan by a user in the Fax/file Q. These were batched and sent to WebScan to be indexed and uploaded into a patient's chart.
    * <strong>"Deleted"</strong> means the faxes in this category were deleted by a user in the Fax/file Q. They were not needed for a chart; they are faxes of junk, etc. The system is usually set to purge these deleted faxes in 180 days, however contact your MIE Implementer to find out. They cannot be retrieved after that purged date. Your MIE Implementer can change the system setting to a different number of days to purge the deleted faxes if you wish.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/d75da557f8c3e5c511f038ee509b7dba.png)

* <strong>"Auto-Indexed"</strong> means a fax came in that has a barcode on the coversheet, if the system setting to <em>Auto-Index Incoming Faxes</em> is turned on, then the Inbound Fax Queue will attempt to read that barcode and put the fax into the patient's chart. If this is successful, it marks that fax as Auto-Indexed and stores in this ‘status'. If not, it goes to this IFQ as usual. The system setting is turned off by default, but to turn this feature on, set the system setting to 1 or contact your MIE Implementer.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/1948dce4d52aaf09e93b56d3d7c33b64.png)

* <strong>Create:</strong> You can search by specific date the fax was received.
* <strong>Recipient:</strong> You can use the drop-down to select and search a specific recipient fax #. The recipient fax# is the fax # that the fax was received (if your practice has multiple fax machines/numbers).
* <strong>Show Message Events:</strong> this is tied to SureScripts secure messaging. Checkmarking this will result to show events such as "message read" and "message deleted" that are sent back from recipients of secure messages sent.
* <strong>Category</strong> field: Incoming faxes can be moved into a category (which we also call ‘buckets'). Users with permissions can work on the incoming fax queue and move faxes into a separate ‘bucket' or category for a specific department, floor or user to work on. Your MIE Implementer can help you set up bucket categories for incoming faxes or delete categories no longer needed. A category cannot be deleted if there are files/faxes still housed in that category. You can search by category of incoming faxes if the fax was processed into a category. The ‘Any Category' selection in this search drop-down can be selected if you are searching for a fax that came in, but you don't know which category it may have been moved to or where it's now housed or where it was moved to. It will then search to find the fax you want by searching all the categories.
* <strong>Subject:</strong> can enter in words to filter the files by "subject" which pertains to secure email messages from SureScripts for now.
* <strong>File Queue ID:</strong> The file queue id is a number the system assigns to each incoming fax (just like outbound faxing has a fax id).  We don't display the File Queue ID on the incoming faxes however for MIE to help you find a fax they perhaps didn't receive then MIE will attempt to find the fax on the server and then provide the user with the File Queue ID #. The user then can enter the file queue id here to search and find their fax to view.

### Superuser Buttons

The links in the top right corner are quick links to functions available to superusers or users with permission to certain administrative things within the Inbound Fax Queue. If you do not have security for these functions, you will not see these links.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/d26c87314f57f53f242a8556cd9b6a34.png)

* <strong>Categories:</strong> You can add, delete, and manage Fax/file Q categories from here. A category cannot be deleted if there are files/faxes still housed in that category. You would need to move them first.
* <strong>Mappings:</strong> If a practice has users they want to have permission to the incoming Fax/fileQ, then you must set them up for each fax number in this screen. Users need to be set there to even be able to see the file if they are emailed or tasked. <em>See other help documentation to set up user access/permissions named Inbound Fax Queue-Setting User Access/Permissions</em>

## Work Multiple Faxes Simultaneously

If you are the person(s) assigned to "distribute" the faxes, it is easiest to click on the SELECT ALL checkbox.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/efbd3f2985b61cdf382a1db48434b4cb.png)

This puts a checkmark in each of the boxes on the far right side in the options column. (and you can go back and click the Select All checkbox to reverse).

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/965b5d0535454c15bc05488671644e39.png)

## Working Faxes

If you wish to do one fax at a time, you click check-mark the box of the specific fax file(s) you want to work on. To view the fax, click the Preview link in the **Options** column.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/eac3c9c3e353d80b71de8d75cebeef06.png)

If there is more than one page in a fax, you can look at all the pages in two ways. You can scroll down and each page will display or you can select the page on the left hand side.

Follow these instructions to begin processing/distributing the faxes in various methods.

Files/Faxes can be added to a batch, e-mailed to someone in your organization, deleted, tasked, categorized and/or printed. All of those options appear as function buttons at the top of the IFQ screen.

* <strong>Create Batch:</strong> When you have decided that this faxed document or file needs to go into a patient's chart, simply click the button that says "Create Batch".

If you previewed/read the faxes/files, you can check-mark the files that you want to process in *bulk* and can simply check-mark the boxes and then select *Create Batch* button at the top. These are quick links to process/distribute faxes that you know for sure should be processed by those methods.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/5863e399ff52e22f0ed3665d13de171b.png)

Creating a ‘batch' puts those faxes and all pages of the fax(es) into WebScan for someone to index into patient's charts.

If you click **Create Batch & Index** all those faxes/files you check-marked will become a batch, it will prompt you to type in a comment for that batch, then click *Create Batch & Index* then it will automatically take you directly to WebScan to index those documents immediately. **If you have pop-up blocker on, it will not automatically open WebScan from here.**

{{% info %}}
If you need instructions on how to index batches in WebScan, please see the [Indexing](indexing.md) help documentation.
{{% /info %}}

* <strong>Delete:</strong> When you have determined that this faxed document or file needs to be deleted out of the queue, it doesn't to be emailed to anyone, doesn't to be indexed into a patient's chart, etc. simply mark the file/fax you wish to delete, then click the "delete" button at the top and it will delete the files you have marked to (in options column).

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/eea145f3f5eaa346dd22188326c6f5fe.png)

You can "undelete" one if you go to the deleted bucket/category within Search and find the one to checkmark and then click the undelete button at the top. It will move it back to the "pending" category/bucket.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/c4efbb1e8ae0110cbfd17d0a2779cad5.png)

* <strong>Add Task:</strong> You can task a file/fax using a fast task template that is set up for IFQ. Select the file (checkmark it) and then click the Task button at the top.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/bea6c64b01b3e1fd7ec63b4bdbac58a4.png)

Choose a fast task template from the drop-down that is specified for incoming Fax/file Q files. Your superuser or MIE Implementer can set up the fax task templates that you want processed from the Fax/file Q. To set up fast tasks to be available from this Incoming Fax Queue, create/add a fax task from the task module and make sure the *type* is set to *incoming file queue* and make sure it's assigned to the proper user or department. Once saved, that fast task will then appear as a selection here in the Incoming Fax Queue.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/77ff7157e32a8ba70425823244ccdc14.png)

* <strong>Categories:</strong> Categorize it to a specific department, bucket or whatever category your practice is set up for. By categorizing it to a department, it is now available for the staff who handles that specific department's faxes. That staff can view them, print them, or send them back to a medical records department to be indexed into a chart. Checkmark the file/fax(es) you want to move to a bucket/category and select the category/bucket to move them to from the drop-down selection. Then click the "Edit" button to distribute/process each fax/file document to go to that bucket/category you selected. The faxes will be moved to that bucket/category now and can be accessed from the side list of buckets in the IFQ.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/7344fb4e5bdc0818eb931e709beec75d.png)

If you need to move a fax back into the "inbox" category/bucket, simply checkmark and click the Edit button on the fax you need to move back and in the drop-down select the "Select a Category" option and then click the *Save* button. This will now move that fax(es) back into the main "inbox" bucket/category.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/d927cae7f534fc47b4530fe459092ccf.png)

* <strong>Send:</strong> Click this button and select the Department you wish to be assigned this Fax.

![](../working-inbound-fax-queue-and-distributing-incoming-faxes.assets/ec2ef958f94b8cf598e24622a5821ce8.png)

## Learning Management System

To learn more about Working Inbound Fax Queue & Distributing Incoming Faxes, follow the link below to the Learning Management System course:

* [Inbound Faxes](https://mie.talentlms.com/shared/start/key:AOAHRKMF)
