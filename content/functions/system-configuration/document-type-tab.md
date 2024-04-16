---
id: '1cKcHC0ShLX-AyNro4x-3zsZefccwS3im2LletR2x__Q'
title: 'Document Type Tab'
date: '2024-01-15T17:07:45.011Z'
version: 181
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1cKcHC0ShLX-AyNro4x-3zsZefccwS3im2LletR2x__Q'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Click *Control* on the left sidebar menu.

Click *Document Types* tab at the top. (You must have security role permission to access the Document Types tab)

It will then pop-up the entire listing of all **active** document types that have been entered for your system. Document types are names of documents for any patient's medical records.

![](../document-type-tab.assets/126501665bed2c4bfe0b429c4e53749f.png)

## Search for a Document Type

You can scroll the page up and down to search/find the document type you want to look at, edit, inactivate, etc. However, if your system has a lot of document types, then you may want to search for the specific document type by using the search engine at the top left of the screen.

![](../document-type-tab.assets/2bba399be7160aa718d70783bdafbad3.png)

In *Search* field, type in either the document type abbreviation **or** the document type description name and click *Search*. It will search by both. It will then display any matches. You do not have to type the complete entire abbreviation or description. You can type in a few letters of the document type abbreviation or document type description name and it will display any matches. This is a "contains as" search so any doc.types that contain what your search it, will result.

If your match choices did not display what you wanted to find, type in another search. If you want to get back to the main, full document type tab listing, click the *Clear* button and it will bring you back to the full document type listing and you can search again.

You can also search by *Chart Type*. Some documents are only utilized in specific types of charts. {{% system-name %}} houses many things as "charts" besides patients. You can use the drop-down arrow to select a specific chart type to filter your search results on.

![](../document-type-tab.assets/91a1189e11d6b44763aa0ab4fab08dfa.png)

## Navigation Links

### Show Links

By default, Active Document Types are displayed, but one can select Inactive or Show All to display the Inactive Document Types or both the Inactive and Active Document Types. Here are the descriptions of each option:

![](../document-type-tab.assets/a83aeafcd0bcb8926417f6a97faf063f.png)

#### Active (Document Types)

When you click Document Types tab, it automatically pops-up this listing of the entire active document types for your system.

![](../document-type-tab.assets/d6d09012cb5ebc7d06c2e3aaf2c10061.png)

The description of columns are as follows:

* <strong>Document Type</strong>: This is the abbreviation created for this document type. Other modules in {{% system-name %}} work off of this abbreviation code. This cannot be changed once created.
* <strong>Description</strong>: This is the full description/name of the document type. This can be changed if you need to rename it.
* <strong>Chart Types</strong>: This lists what specific "chart type(s)" the document may be utilized in. If this column is blank, then this document is used in any/all chart types. {{% system-name %}} houses many things as "charts" besides patients and may have relative document types that go along with it and not any other type of "chart type".
* <strong>LOINC Code</strong>: The document type can be associated and coded with a specific LOINC code.
* <strong>Restricted</strong>: Shows Yes or No if this document type is restricted to certain departments/users. (Locked document). After you click SUBMIT, then go back into this doc.type by clicking edit and then next to this ‘restricted' box you check-marked will be a box to click that says ALLOWED USERS LIST. Click this an add specific user(s) or department(s) <strong>allowed</strong> to view this document type. When you click a username or dept, it automatically puts it in the allowed list on the left. If you make an error, click remove next to the user or dept to remove them.
* <strong>Index Scan</strong>: Shows Yes or No if this document type is available to be uploaded into a patient's chart by indexing from MIE Scan (normal scanning & indexing method for paper.)
* <strong>E-Chart Scan</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by WebScan (flatbed scanner) mode.
* <strong>Word</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by Word mode. Click Yes to see the word template that is loaded. It shows the variables being pulled, summary at top, etc. Next to Yes shows Add or Edit. Edit means there is a word template created for this doc.type. Click Edit to edit it. Click Add to add a template for this word document.
* <strong>HTML</strong>: MIE can enter a document as html programming.
* <strong>Excel</strong>: Shows Yes or No if an Excel file can be stored into a patient's chart as this document type (MIE must enable this).
* <strong>PDF</strong>: Shows Yes or No if a PDF file can be stored into a patient's chart as this document type. (MIE must enable this.)
* <strong>Text</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by Text mode. Click Yes to see the text template that is loaded. Next to Yes shows Add or Edit. Edit means there is a text template created for this doc.type. Click Edit to edit it. Add means that it is just a free-text box loaded, and no template. If you click Add, it will allow you to then create a text template.
* <strong>Form</strong>: Shows Yes or No if this document type is available to be created from a Form (printable form) mode. Click Yes to see the form that is loaded. Next to Yes shows Add or Edit. Edit means there is are forms created for this doc.type. Click Edit to edit it. Add means there needs to be a form loaded to this. MIE must handle edits and adds.(Tracked) will appear if this form is set to have it ‘tracked'. Tracking a form makes sure that when the form is printed, it tracks it to make sure it gets scanned back in. Or if you track a form that you wouldn't scan back in (ex: a patient education sheet) this tracking method tracks that it was printed for the patient and not scanned back in, but you know it was printed for the patient and when. MIE can create a layout/chart tab to display a log of forms that were printed, but not scanned back in.
* <strong>Picture</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by Picture/Photomode.
* <strong>Sketch</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by Sketch mode. Click Yes to see the sketch template that is loaded. Next to Yes shows Add or Edit. Edit means there is a sketch background template created for this doc.type. Click Edit to edit it and set height/width. Add means there is a blank sketch box. Click Add to add a sketch background for this document. MIE must load sketches, backgrounds and handle edits and adds.
* <strong>Script</strong>: Shows Yes or No if this document type is available to be created and uploaded into a patient's chart by Prescription mode. MIE sets these when they load your electronic prescriptions.
* <strong>Options</strong>: Choose Edit to edit any part of the document type. Choose De-Activate to make this document type inactive. Users will then not be able to see it, use it, create it, etc. It stays in the Inactive category. You can then reactivate it if necessary.

#### Inactive (Document Types)

Click Inactive to view the inactive document types listing.

These inactive document types listed are inactive in the system.

![](../document-type-tab.assets/2337f63330c54ee634fd71bbdbd3b3fa.png)

You can activate any inactive document types if you wish. Simply click the option to Edit this document type, click Active check box and the SAVE button. The system will automatically set this document type to active and give you a confirmation message at the top. The document type can now be found in the *active* listing.

![](../document-type-tab.assets/dd4cf7c21691f30286d5299ca22beb38.png)

If you made a mistake, simply find it in the *active* listing, click Edit in the options column, uncheck the Active checkbox and click the SAVE button.

#### Show All (Document Types)

Click Show All to view both active and inactive document types merged together in the listing.

![](../document-type-tab.assets/abef92582c5df024b4b4db5b5f9fe481.png)

### View Purge Rules

This is for MIE programming use only. You must have security role permission to view/access this.

![](../document-type-tab.assets/beee99db606199f3978e0b6675ea494f.png)

Clients may want to get rid of documents after the governing bodies will allow those documents to be purged.  This is an interface to provide that feature. Custom SQL statements can be crafted so that different document types can be singled out based on patient information (when the patient died, when they were terminated from the company, whether the patient is involved in litigation, etc) and purge documents that are allowed.

![](../document-type-tab.assets/05f6b66935efc9a61645f3729c06b0a8.png)

Purge rules may be created to specify which documents should be purged after what amount of time.  They may be specified by the document type, or more typically, customized using an SQL statement by one of MIE's engineers to do more elaborate document selection. The document purge rules must be run manually by a user at this time.  When the user runs the document purge rules, they will be presented with a list of files that match the purge rule, and may select via a checkbox to proceed with the purge.  Files that are selected to be purged will be placed in a table of documents-to-be-purged. Those files may be unmarked at any time up to the point when they are deleted by evaluating the same purge rule a second time and unchecking the already-checked documents that are brought up and submitting the new list of "approved" files-to-be-purged.

![](../document-type-tab.assets/6c1c2afd6181057212f93600fe4fdba2.png)

At a specified interval (weekly, monthly, years, or whatever is specified), rmdoc will be called to run via a cron job. Rmdoc will read that table and permanently delete the files that were marked to be purged.  Once files have been deleted, they may no longer be unmarked for deletion and restoring them from our dvd archives will not be possible.

### Edit Master Template

This is for MIE programming use only or if you are trained as a Super-User and have permission to access this.

![](../document-type-tab.assets/17ff621980972ee06d89cc25eab823b6.png)

### Add Document Type

Click *E-Chart* on the left sidebar menu.

Click *Document Types* tab at the top. (You must have security role permission to access the Document Types tab)

It will then display the entire listing of all **active** document types that have been entered for your system.

Document types are names of documents for any patient's medical records. At the top right of the screen says SHOW: click Add Document Type to create a new document type for your system. Click Add Document Type to add a new document type to your system.

![](../document-type-tab.assets/cdc89f3f20d17293db926c03a28b269f.png)

After you have clicked Add Document Type, the Add a Document Type screen will open where you need to enter information into the fields.

![](../document-type-tab.assets/7d0c2e071c86d05a5f7b485aaa3e1f81.png)

* <strong>Document Type</strong>: If you have security permission, you can type the abbreviation for your document (this doesn't appear anywhere on e-chart but is used for internal programming that other {{% system-name %}} modules may have programming pointed to). If you do not have security permission, a Document Type will be automatically assigned (as a number). This cannot be changed once created.
* <strong>Active</strong>: always check-marked. If you edit it and uncheck-mark this, it will not allow any more documents to be inserted into this doc.type and will consider it <em>inactive</em>.
* <strong>Description</strong> = type out the description/complete name of this document (this appears on e-chart)
* <strong>Chart Types:</strong> {{% system-name %}} houses many things as "charts" besides patient charts. The other types of "charts" may have relative document types that go along with it and not any other type of "chart". This field is where you can select what "type of chart" this document may be utilized and found in. You can leave this blank to indicate this document type can be used in any/all chart types.
* <strong>LOINC:</strong> Document Types can have a LOINC code associated to them. This field is available to tie a LOINC code to the document type. The hyperlink View LOINC codes for documents takes you to a LOINC report that opens in a new window and provides a list of the relevant document LOINC codes as reference material.
* <strong>Used in Chart Tabs</strong>: If you have security to "Manage Chart Tabs" you will see this section with a drop-down field. From this section you can tag this document you are adding/creating in your system to any chart tab(s) you want that document to be housed in. Doc.Sum tab is always there by default unless your Doc.Sum tab is set to ‘exclude' instead of ‘include' all documents. From the drop-down select the Chart Tab you want this document to be housed in. Click the ADD button. You can select another chart tab to store this document in and continue again by clicking the ADD button.

![](../document-type-tab.assets/4fd5e0916c68a97bfbac1765122be832.png)

{{% info %}}
The drop-down choices of Chart Tabs available to tag the document type to are the chart tabs in the system that are able to display documents. If the chart tab does not appear in the drop-down, it is because the chart tab has a ‘default view' (functionality) set that does not allow the display of documents within that tab. You must link the document type to a Chart Tab in order for it to be filed/shown in that chart tab. You can also link a document type from the Chart Tab module.
{{% /info %}}

* <strong>Style</strong>: type the style that you want this document to show as when looking in a patient's chart. You can make it a colored background for this specific document type, can change the font, font size, color of font, etc. This does <strong>not</strong> affect the way it prints. This is strictly styles for viewing in documents in {{% system-name %}} only.
    * <strong>Sample Text</strong>: Will show a sample of what the text/background, etc looks like while you are programming the style.
        * <strong>Click the</strong> 
            ![](../document-type-tab.assets/59f169f5ba600ee1ceb8f7dbfc56f6c6.png)
             <strong>next to Sample Text to get a complete help listing of these programming options.</strong>

{{% note %}}
Below, where it says :value; is where you type in a value choice (do not type the word ‘value' or it won't work. You must program a value for each style. Any or all of these choices can be programmed. They all get programmed together on one line and separated by a semi-colon ( ; ) You must also **end** with a semi-colon ( ; ).
{{% /note %}}

* Can program the following:
<table>
<tr>
<td>*Program Style:*Must have colons and semi-colons for it to work</td>
<td>*What you are programming:*How it views/shows in {{% system-name %}}</td>
<td>*Your value choices:*Type in these choices for ‘value'</td>
</tr>
<tr>
<td>background-color:value;</td>
<td>Background color</td>
<td>Any color name (ex: red,orange,blue, brown,pink, purple,yellow, etc)</td>
</tr>
<tr>
<td>color:value;</td>
<td>Font color</td>
<td>Any color name (ex: red,orange,blue, brown,pink, purple,yellow, etc)</td>
</tr>
<tr>
<td>font-family:value;</td>
<td>Font family/type</td>
<td>Arial, Times, Courier, Century, Helvetica, etc. Font families depend from system to system on what fonts are available.</td>
</tr>
<tr>
<td>font-weight:value;</td>
<td>Weight of font</td>
<td>Bold, bolder, lighter or normal</td>
</tr>
<tr>
<td>font-style:value;</td>
<td>Style of font</td>
<td>Italic, oblique or normal</td>
</tr>
<tr>
<td>font-size:value;</td>
<td>Size of font</td>
<td>Can be in pt, px or em formats ex: 12pt, 10pt, 14px, 16em, etc.</td>
</tr>
<tr>
<td>font-variant:value;</td>
<td>Variant of font</td>
<td>Small-caps or normal</td>
</tr>
<tr>
<td>text-align:value;</td>
<td>Alignment of text</td>
<td>Left, right, center or justify</td>
</tr>
<tr>
<td>vertical-align:value;</td>
<td>Alignment of text vertically</td>
<td>Top, bottom or middle</td>
</tr>
<tr>
<td>text-decoration:value;</td>
<td>Decoration of text</td>
<td>Underline, overline, line-through or none</td>
</tr>
</table>

* <strong>Auto-Merge:</strong> this is left unchecked. If you check-mark this, when viewing a document(s) in detail view and the doc.type is set to auto-merge, you will see all those documents stored as that doc.type merged together on your screen. Currently, not very many clients use this. Some use for lab results, etc. <em>If you hover your mouse over this title, it will show you the help explanation for this selection:</em>

![](../document-type-tab.assets/ce346fa3bc7881ca8d5d4b700742da07.png)

* <strong>Print with Patient Header:</strong> Will automatically be defaulted to check-marked. The patient header will appear on this document type when faxed or printed. It prints above the document at the top (header). A user can always over-ride this by check-marking <em>print without headers</em> when in print/fax mode <em>if</em> they have security permission to override. If not, this header will always print at the top of the document if this selection is check-marked here in add document when setting up the document. <em>If you hover your mouse over this title, it will show you the help explanation for this selection:</em>

![](../document-type-tab.assets/3a3936831cc54d7883fa37ba5f636c15.png)

* <strong>Print with Document Header:</strong> Will automatically be defaulted to check-marked. The document header will appear on this document type when faxed or printed. It prints above the document at the top (header). A user can always over-ride this by check-marking <em>print without headers</em> when in print/fax mode <em>if</em> they have security permission to override. If not, this header will always print at the top of the document if this selection is check-marked here in add document when setting up the document. <em>If you hover your mouse over this title, it will show you the help explanation for this selection:</em>

![](../document-type-tab.assets/387ed5030c88bd5e58d94408f8b124ca.png)

![](../document-type-tab.assets/e276118b383c570e22d8bf84ca7abce3.png)

* <strong>Display plain text</strong>: leave blank
* <strong>Restricted viewing</strong>: If you checkmark this, you will restrict this doc.type from viewing and have to designate <em>allowed users and/or departments</em> that are allowed to view this restricted document (doc.type). An example of this would be perhaps drug screen results, which the drug screen doc.type is to be viewed/restricted to certain users or departments.

If you check-mark a doc.type (document) to be restricted viewing, the *Allowed Users and Allowed Departments* section will open up on your screen. You must now set the allowed user(s) and/or allowed department(s) that are allowed to view this type of document for any patient. Remember, nothing is saved until the SUBMIT button has been clicked at the end of the doc.type screen.

![](../document-type-tab.assets/36588dee56df7ce6d635bfd0c715b0f2.png)

If you do not have security rights to manager document type restrictions, then you will not be able to checkmark that section nor set allowed users. Only users with security rights to Manage Document Type Restrictions can set the document to be restricted and set the allowed users/departments.

If you are editing a doc.type and you do not have security rights and the document type **is** set as restricted, you will see that field says YES.

![](../document-type-tab.assets/4d25ddc3980a1fcf77ffa4e95c6aa466.png)

This means the document type is restricted, but you don't have security to change or edit those allowed users/departments.

If you are editing or adding a doc.type and you do not have security rights and the document type **is not** set as restricted, you will see that field says NO.

![](../document-type-tab.assets/e0d4f096a156d0dc5cd9a78e7bae0e2f.png)

It means the document type is not restricted from view of anyone or department. However, since you don't have security, you cannot change that to be restricted and set users/departments.

* <strong>Background Form</strong>: If this document is just text & you want it to print on a specific background form, you can set it here.
* <strong>Document Addition Methods</strong>: check-mark the type/method of how this document will enter {{% system-name %}} . You can check-mark as many methods as you want.

![](../document-type-tab.assets/6e9f3f53f0c94bedef009eab650bff12.png)

* <strong>Allow High Speed Scanning in WebScan</strong>: document would be scanned using a regular high-speed scanner and then indexed into {{% system-name %}} . Check-marking this allows the document name/doc.type to appear in the indexing module and allows a user to choose the document type/name and index it into a patient's chart.
* <strong>Allow Scanning in E-Chart</strong>: Checkmark this to allow the ability to scan in a document with this name directly into a patient's E-Chart and bypassing regular scanning/indexing methods. This is mainly used it you have a flat-bed scanner and is mainly for insurance cards, drivers license type of doc.types. This is used for types of papers/cards etc that can't be fed through a regular high-speed scanner and indexed that way. When you select a doc.type that has this feature, then it will open the Document Scan Control and allow you to scan the document/card etc using the flatbed scanner and will upload it directly into the patient's chart as this document name. (See other instructions called WebScan).
* <strong>Text Entry</strong>: document would be typed in either freely, or you'd set up a template by clicking <em>add template</em>. Check-marking this lets a user free-type or follow a text template.
* <strong>Word Entry</strong>: document would be typed in using Word. Template would need to be set up after clicking Submit. After clicking submit, go back to the list of doc.types and click add in the word column next to the doc.type you created allowing Word entry. You then create your word template. This is used for all transcription templates, correspondence/letterhead letters, etc. MIE also programs these. | <strong>Excel Entry</strong>: If your system is enabled to allow Excel file entry, this will show up as a choice. You can upload excel files into a patient's chart as this document name/type. You add the Excel file from using add document when in the patient's chart. You will see this document to store the Excel file as.
* <strong>PDF Entry</strong>: If your system is enabled to allow PDF file entry, this will show up as a choice. You can upload PDF files into a patient's chart as this document name/type. You add the PDF file from using add document when in the patient's chart. You will see this document to store the PDF file as.
* <strong>Form Render</strong>: document would appear as a form to print off. MIE scans and loads in a form, then if this option is check-marked the form would pop-up to be printed off and scanned/indexed back in the patient's chart.
* <strong>Track Form</strong>: if you checkmark this, it will track the form. Tracking a form makes sure that when users print the form(s) (if tracking is check-marked) it keeps track whether it was scanned back in or not. MIE can create a layout/chart tab to display a log of forms that were printed but not scanned back in, providing the <em>Track Form</em> box was check-marked for the specific form(s).
* <strong>Archive Form</strong>: if you checkmark this, it will archive the form as a document when the form is rendered. Meaning, it will upload/store the form into the patient's chart each time it is rendered. This is not really used, because forms usually will be printed, then handwritten information is placed on the form and then scanned back in and indexed later. If this is check-marked, the form would be stored as a document in the patient's chart without any handwriting, etc on it. It's just stored as how the form looks when printed off.
* <strong>Picture Capture</strong>: document would be from a webcam photo, scanner, smartcard source, etc.
* <strong>Sketch Capture</strong>: document would be drawn in using the computer mouse as a pencil. You can set the width and height of the ‘viewable-box' a user would be sketching/drawing in. MIE can also load backgrounds for sketches. An image would appear, and a user would sketch/draw on it. Example: a sketch background could be loaded of a hand. The user would sketch/draw in the location of the hand pain, etc.
* <strong>Width & Height</strong> settings: It sets the size of the viewable sketch pad. It is in pixels. Leaving it blank will make it a default size of like 600x30. MIE will set these for background image sketches also, so that the background image is fully viewable.
* <strong>Prescription Add</strong>: MIE would check-mark this and has to load in electronic prescription pads for your company.

Click **Submit** at the bottom (or cancel to get out and start over).

Click the SUBMIT button at the bottom of the screen to save and add the document type you just created/added. A document type must be tagged to chart tab(s). If you didn't tag it from this screen, you can do it from the edit screen of the doc.type, or go to Chart Tab module and tag it that way (see separate help instructions called *Chart Tab.pdf*)

## Deny Permission or Remove a User/Department from the Allowed List

If you want to deny permission to a user and/or department or maybe you made a mistake and chose the wrong department or user, simply click - sign next to the user or department name from the left side (the allowed list side) and it will take them off the allowed list.

![](../document-type-tab.assets/4e2f8a2eb546ab9550dfd4f49cbd398f.png)

The user will display with a strikethrough.

![](../document-type-tab.assets/f64c31ad84809d7105714fd07b61da0a.png)
