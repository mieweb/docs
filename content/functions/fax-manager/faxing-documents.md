---
id: '1m6v3HgyiGVoT4r2LTce3OC0uSMx00sczOS4Pu10rU-g'
title: 'Faxing Documents'
date: '2020-03-16T16:21:29.768Z'
version: 66
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'outbound-faxing-email-notifications-of-sent-failed-faxes.md'
source: 'https://drive.google.com/open?id=1m6v3HgyiGVoT4r2LTce3OC0uSMx00sczOS4Pu10rU-g'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Fax or Print an Individual Document from Chart

When in the patient's chart and you wish to print or fax a specific (one) document, click the *Print* or *Fax* option on the top right of the opened document screen view.

{{% warning %}}
Do not go to File, then down to Print in the Microsoft Windows toolbar at the very top. This is not compatible with any printing in  {{% system-name %}} .
{{% /warning %}}

![](../faxing-documents.assets/fa2d920bb3247b803c0f9bd826071d1e.png)

PRINT or FAX allows you just to fax/print that particular document you are viewing only.

### Fax Mode

If you wish to fax the specific document you have opened on the screen, click Fax from the document's options located at the top right.

![](../faxing-documents.assets/83a8662f689da436d173e4765d88d782.png)

The fax mode window will open.

Fax mode window:

![](../faxing-documents.assets/6318762974c83528d6ed78d0f1827965.png)

* <strong>Comments</strong>: Type in here any comments you wish and these will print on the fax coversheet to the recipient of this fax. These comments will print on the fax coversheet if you select a fax coversheet that has been programmed.
* <strong>Print without headers</strong>: <em>This option will only appear if you have the security permission to Allow Printing without Headers set to Yes</em>. This option is for word documents, form documents, sketch, etc. Check-mark this if you <strong>do not</strong> want the grey-box patient header summary at the top to print on the document. This grey-box shows DOC ID, DOS, DICTATED BY, WHO INDEXED/TYPED IT, DOCUMENT TYPE DESCRIPTION, WHO E-SIGNED IT, etc. You have the option to print it on the document or not <em>if you have security permission to do so.</em> If you do not see this option box, then you are restricted and the patient summary header will always appear on the documents you are printing/faxing.

![](../faxing-documents.assets/753ec42fed3b90e3ecd79dd2786e78f0.png)

* <strong>Send To</strong>: Select Fax to fax the document, or you can select Print if you changed your mind and need to print the document instead. Create New Batch option is to add this document to a ‘batch' and not print or fax yet. (See separate instructions on how to batch print/fax).
* <strong>Fax</strong>: Select user or manual radio button.

### Fax-User Mode

* <strong>User:</strong> Select this radio button to fax to a user from a list of active departments loaded in your  {{% system-name %}} system and their fax numbers.

{{% info %}}
{{% system-name %}}  automatically remembers the last person/dept you ever faxed to (pulls from your username only)
{{% /info %}}

![](../faxing-documents.assets/fe52dbdf52f2b5069e45ff6b9c44e649.png)

* <strong>From:</strong> If a user has security permission named "<em>Allow Setting of FAX From"</em> set to Yes, the user can choose the CSI value of a fax. The CSI value is the Call Station Identifier that is part of the FAX header - it is essentially the caller id of the FAX. If user is set to Yes permission, in the fax mode a drop-down field named From: will show and user can select from a drop-down of fax #'s to set the fax ‘from' on the header that the recipient receives. ‘FROM' fax number choices in this drop-down are set in the LOCATIONS tab for each location with a fax#. If the user doesn't have security to choose "from" for a fax, then it uses the user's location and the system setting <em>Fax Header</em> entry.

![](../faxing-documents.assets/438c1a15278b43d90de5809cb54ec3e3.png)

* <strong>Cover</strong>: Select type of fax coversheet to use by using the drop-down arrow. (MIE loads these) You can also choose the fax cover-sheet choice or select: <strong>No CoverSheet.</strong> If you choose this, a coversheet will not be sent with your document(s) and no comments will be printed since there is no coversheet selected.
* <strong>Dept:</strong> Use the arrow drop-down to choose the active department you wish to select your fax number from.
* <strong>User:</strong> Use the arrow drop-down to choose the active name/company who will be the recipient of your fax. Their fax number appears next to them. If the user you are looking for does not appear in this autocomplete, please make sure that user has a valid fax number. The users in this auto-complete will only show up if they have a fax number of at least 3 characters long in their username screen. Even if it is a local number, the (area code) <strong>may</strong> appear (depends how a user added this entry). {{% system-name %}} 's faxing capability treats local and long-distance fax numbers alike. There is no reason to dial a 1-in front of a long-distance number. Only needs the area code and phone number.

{{% tip %}}
If you wish to fax these exact same document(s) to another person at the same time, you click **ADD** button at the right after choosing your first USER. It now puts your first USER selection at the top above USER/MANUAL choice. You can select *REMOVE* box if you decide you don't want that recipient then, otherwise use the scroll-down to choose another USER.
{{% /tip %}}

If you do not find the pre-loaded place/person/fax # you are looking for within the department you are searching, you can (if you have security rights) add a user & fax # from this screen without loosing your fax information & documents. You can add the person/place & fax# from here, it adds that entry to that Fax Department for all future fax user selections and then you can send the documents by fax all from this screen. It is important to search for the person/place you are faxing to first before you add a new entry to that fax department.

#### Add a User to a Department from User Mode

When searching a Fax Department for Users and you do not find the person/place or fax # you want to fax your documents to, you can add that person/place & fax # from here. You must have security permission *AJAX User Add* set to yes. Click the word User. Note: the layout [Chart Print/Fax User Add] must be installed on the system

![](../faxing-documents.assets/f43c6b01e683b6fd8ccc80b619ae9952.png)

It will open another window that says ADD USER. Enter the Fax Recipients Last, First, Middle name & complete fax number. Select the Fax-department this recipient should be placed into by using the drop-down arrow. Click ADD USER when done.

![](../faxing-documents.assets/3fcc4af66b1ddd1e3d2c18c6f258d6df.png)

If you have entered a fax number that matches another user's fax number who is already loaded into the system, it will then bring up a warning box saying **These users already exist:** which means the fax # you typed in matches some existing entries/users in the system. This is just to help make sure you are not duplicating an entry.

If the person/place you manually entered is not in this warning list, click Add As New User. It will add the entry to that Fax Department for future use and it will automatically populate the Fax Module field information and you can then fax your documents to that person/place now.

![](../faxing-documents.assets/1b9f303206b473407f9a8fbae3efabe6.png)

If the person/place you want to fax to **is** *listed in* this warning list, simply click that name from the warning list and it will populate into the fax module screen to fax your documents to. It will not add the entry you just completed since you found a match that already exists. You can then fax your documents out as it has automatically populated that information to fax your documents to.

**Priority:** Set priority. Defaults to Normal. If choose URGENT: it will be sent ahead of others in the fax spool. If choose LOW: it will not be faxed until a later time after all other normal and urgent faxes have been sent.

Click –FAX—box at the bottom to send this fax now.

Click – Preview – box at the bottom if wish to view the documents that will be faxed. The coversheet will be the first page if you selected a fax coversheet. After you preview, you can then click SEND FAX or CANCEL FAX from that screen.

![](../faxing-documents.assets/b34a82b974061a57a978351f68a69148.png)

Click CANCEL FAX if wish to get out of the fax mode screen.

You can view status of your fax on the Fax Manager Tab on the left sidebar menu tab. (See other instructions titled FAX MANAGER TAB).

### Fax-Manual Mode

* <strong>Manual</strong>: Select this radio button to enter a recipient and their fax number yourself.

![](../faxing-documents.assets/7d6609d918cf5e72e8bd5f0018e6e100.png)

* <strong>From:</strong> If a user has security permission named "<em>Allow Setting of FAX From"</em> set to Yes, the user can choose the CSI value of a fax. The CSI value is the Call Station Identifier that is part of the FAX header - it is essentially the caller id of the FAX. If user is set to Yes permission, in the fax mode a drop-down field named From: will show and user can select from a drop-down of fax #'s to set the fax ‘from' on the header that the recipient receives. ‘FROM' fax number choices in this drop-down are set in the LOCATIONS tab for each location with a fax#. If the user doesn't have security to choose "from" for a fax, then it uses the user's location and the system setting <em>Fax Header</em> entry.

![](../faxing-documents.assets/438c1a15278b43d90de5809cb54ec3e3.png)

* <strong>Cover</strong>: Select type of fax coversheet to use by using the drop-down arrow. (MIE loads these) You can also choose the fax cover-sheet choice or select: <strong>No CoverSheet.</strong> If you choose this, a coversheet will not be sent with your document(s) and no comments will be printed since there is no coversheet selected.
* <strong>Name:</strong> Type in the name of the person to receive the fax.

{{% tip %}}
If you wish to fax the exact same document(s) to another person at the same time, you click **ADD** button at the right after choosing your first name and fax #. It now puts your first recipient selection at the top above USER/MANUAL choice. You can select *REMOVE* box if you decide you don't want that recipient.
{{% /tip %}}

* <strong>Fax #:</strong> Type in the fax number of the person to receive the fax. {{% system-name %}} 's faxing capability treats local and long-distance fax numbers alike. There is no reason to dial a 1-in front of a long-distance number. Only needs the area code and phone number. You can also enter fax numbers in international format. To enter an international number, type the plus sign <strong>+</strong> first in the field and then continue to type in the international fax number. If you type the + (plus sign) first, there won't be any automatic formatting done on it. Otherwise, standard US formatting will still be applied if there is no <strong>+</strong> entered first in the phone fields
    * <strong>Example:</strong> +61 (08) 938 2508, this is what you see:
* <strong>Priority:</strong> Set priority. Defaults to Normal. If choose URGENT: it will be sent ahead of others in the fax spool. If choose LOW: it will not be faxed until a later time after all other normal and urgent faxes have been sent.

Click –FAX—box at the bottom to send this fax now.

Click – Preview – box at the bottom if wish to view the documents that will be faxed. The coversheet will be the first page if you selected a fax coversheet. After you preview, you can then click SEND FAX or CANCEL FAX from that screen.

![](../faxing-documents.assets/b34a82b974061a57a978351f68a69148.png)

Click CANCEL if wish to get out of the fax mode screen.

You can view status of your fax on the Fax Manager Tab on the left sidebar menu tab. (See other instructions titled FAX MANAGER TAB)

### Fax-Chart Mode

* <strong>Chart</strong>: Select this radio button to fax to the fax # stored in a "chart" within {{% system-name %}} . Any "chart" stored in  {{% system-name %}} can house a fax #.  {{% system-name %}} offers the ability to fax documents to the number specified in a specific patient/employee or any other type of "Chart" (ex: PO, EO, EPM, etc).
* <strong>From:</strong> If a user has security permission named "<em>Allow Setting of FAX From"</em> set to Yes, the user can choose the CSI value of a fax. The CSI value is the Call Station Identifier that is part of the FAX header - it is essentially the caller id of the FAX. If user is set to Yes permission, in the fax mode a drop-down field named From: will show and user can select from a drop-down of fax #'s to set the fax ‘from' on the header that the recipient receives. ‘FROM' fax number choices in this drop-down are set in the LOCATIONS tab for each location with a fax#. If the user doesn't have security to choose "from" for a fax, then it uses the user's location and the system setting <em>Fax Header</em> entry.

![](../faxing-documents.assets/438c1a15278b43d90de5809cb54ec3e3.png)

* <strong>Cover</strong>: Select type of fax coversheet to use by using the drop-down arrow. (MIE loads these) You can also choose the fax cover-sheet choice or select: <strong>No CoverSheet.</strong> If you choose this, a coversheet will not be sent with your document(s) and no comments will be printed since there is no coversheet selected.
* <strong>Name:</strong> Type in the name of the "chart" to receive the fax.  {{% system-name %}} offers the ability to fax documents to the number specified in a specific patient/employee or any other type of "Chart". If the "chart" has a fax # stored in a fax# field, that "chart" will be accessible in the auto-complete to fax to. It will send to the fax# stored in that "chart" record you want to send to. You cannot edit the fax# from here. The Fax# it will send to is visible in the <em>name</em> auto-complete when you are searching a "chart" to send to.
* <strong>Priority:</strong> Set priority. Defaults to Normal. If choose URGENT: it will be sent ahead of others in the fax spool. If choose LOW: it will not be faxed until a later time after all other normal and urgent faxes have been sent.

Click –FAX—box at the bottom to send this fax now.

Click – Preview – box at the bottom if wish to view the documents that will be faxed. The coversheet will be the first page if you selected a fax coversheet. After you preview, you can then click SEND FAX or CANCEL FAX from that screen.

![](../faxing-documents.assets/b34a82b974061a57a978351f68a69148.png)

Click CANCEL if wish to get out of the fax mode screen.

You can view status of your fax on the Fax Manager Tab on the left sidebar menu tab. (See other instructions titled FAX MANAGER TAB)

## Sent/Failed Fax Email Notifications

You can have  {{% system-name %}} send you an email upon each successful sent fax and/or each failed (unsuccessful) fax that was sent by you via {{% system-name %}} . This is a user preference and only affects you, the logged in user.

Please make sure you have your email entered in your username screen (a superuser may need to verify this or add this for you within your practice). You can always view the Fax Manager tab to view failed and successful faxes, but the email notification sends you an email instantly to you when the fax has been sent or has a problem being sent.

Please see other help documentation named [Email Notifications of Sent or Failed Faxes-Outbound Faxing](outbound-faxing-email-notifications-of-sent-failed-faxes.md) for more information.

___
