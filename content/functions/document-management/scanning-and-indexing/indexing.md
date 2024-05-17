---
id: '1Q3zud5gpDVgfHepoHWOthPPN-iWWMV_H_0-jFxxssV8'
title: 'Indexing'
date: '2024-05-17T15:01:49.594Z'
version: 228
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=miewebscan'
  - 'indexing-bubble-forms.md'
source: 'https://drive.google.com/open?id=1Q3zud5gpDVgfHepoHWOthPPN-iWWMV_H_0-jFxxssV8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The WebScan module allows users to scan and index documents into the {{% system-name %}} system, so that document images can be attached to associated charts and be stored, accordingly. Indexing is the process of cataloging documents according to their attributes, such as chart name, provider, document type, date of document, etc. Once documents are scanned and indexed, staff can search for and retrieve documents from electronic charts, rather than having to search a medical file for paper copies. Additionally, there are WebScan reports that can be run by an administrator, or users with proper security permissions, that report statistics on batches scanned and/or indexed.

As expected, using the WebScan module and being able to index documents is security driven. Specific system settings and permissions must be established in order to access WebScan and utilize its functionality. To ensure user access, verify the **MIEWebScan** control setting is set to **Edit**.

## Batches and Batch Statuses

To access the scanning and indexing module, simply navigate to the WebScan sidemenu.

The WebScan module will load, displaying the landing page, where existing scan batches can be viewed and indexed, as well as where new batches can be created. The WebScan module default is to display the **Batch Search Criteria** search function, as well as the ListView of any *checked-in* batches. This will be explained in more detail when discussing batch statuses; however, for the purposes of understanding the function of the **Batch** ListView, note that batches are simply a set of, or quantity of, items needing indexed, which display in the *Batch* ListView according to priority. Therefore, any batches with a *High* priority will appear first on the list.

Additionally, the ListView of the checked-in scanned batches will only show batches from partitions the logged-in user is able to access. There is a system setting that allows clients to specify chart partitions, therefore restricting storage of and access to document types according to specific business needs, consequently limiting a user's accessibility to specific document types, whenever appropriate. If the **Show Partition Restrict** system setting is enabled, batches can be scanned into specific partitions, as needed. If a batch is scanned into a specific partition, only indexers with access to that partition will see the batch in the ListView. The *Partition* column in the ListView displays the partition of the batch.

![](../indexing.assets/6979d26c3e8d3593d864941035252d90.png)

### Batch Statuses

There are various statuses used within {{% system-name %}} for tracking batches. As noted, when accessing [WebScan](https://system/?f=miewebscan), the default ListView displays all *checked-in* batches. This can be changed by using the **Batch Status** filter of the Batch Search Criteria search function. Both *Checked In* and *Checked Out* batches will need to be indexed in order to be removed from the queue.

![](../indexing.assets/67f35f705bf636a93cc042fd29f7aa97.png)

* <strong>Checked In</strong>: Batches that have been scanned into {{% system-name %}} requiring indexing. These batches have not been viewed, opened, or completed. Once viewed or opened, the batch status will become <em>Checked Out</em>.
* <strong>Checked Out</strong>: Batches that a user has viewed, opened, or begun indexing, without completing. Any batch that is opened and not completed, closed, or deleted will appear in the <em>Checked Out</em> ListView of batches. Simply change the Batch Status filter to <strong>Checked Out</strong>, and click the <strong>Search</strong> button to view.

{{% info %}}
It is important to regularly check both Checked In and Checked Out batch statuses, in order to work and complete batches in the queue.
{{% /info %}}

* <strong>Complete</strong>: Scanned batches with each page fully indexed, uploaded into the appropriate chart(s). When all pages are fully indexed, the batch will be marked as Complete.
* <strong>Deleted</strong>: Scanned batches that have been deleted. Deleted batches are not indexed nor uploaded into charts.

{{% tip %}}
By default, Completed batches are purged from the {{% system-name %}} system after 90 days. However, the system setting ("MIEWebScan", "Settings", "Purge age in days") can be updated to purge at different intervals, if preferred.
{{% /tip %}}

* <strong>Complete w/ non-uploaded pages</strong>: Scanned batches that have been marked as Complete; however, the {{% system-name %}} system detects pages that exist but still need indexed.

{{% info %}}
*Checked In*, *Checked Out* & *Complete w/non-uploaded pages* batches will remain in the queue until every page is indexed and the batch is completed or deleted.
{{% /info %}}

### Searching Batches

As explained, the WebScan module will display all *Checked In* batches, by default. However, a user may search for a batch by its batch ID number, its comments, a specific patient or user, or the batch date. Use the search filters to narrow search results, and after clicking the **Search** button, matching results will populate below the search in a ListView.

![](../indexing.assets/763e37400bb93c453ff8701a08b58cdf.png)

#### Columns in Batch ListView

The **Batch** ListView shows various columns of information. Click any of the column headers to sort in ascending/descending alphabetical or numerical order.

![](../indexing.assets/4d7df124f149dd26d66b847c4c9149bf.png)

The columns include:

* <strong>Batch ID</strong>: Identification number assigned to the batch.
* <strong>User</strong>: User that scanned in the batch.
* <strong>Comment</strong>: Displays any comments that were added when the batch was scanned, opened, or completed.
* <strong>Partition</strong>: Used to determine the partition the batch is scanned into. Users in systems with multiple partitions will have access to only those batches and partitions they are restricted to. Those batches with partitions that display as blank are open to every WebScan user for working and completing.
* <strong>Project</strong>: Displays the program that batched the documents (e.g., MIEWebScan).
* <strong>Creation date</strong>: Date the batch was scanned into the system.
* <strong>Modified Date</strong>: Date of last modification, or the date the batch was last opened.
* <strong>Pages</strong>: Displays the number of pages in the batch.
* <strong>Priority</strong>: Displays the level of priority of the batch. Default is zero, given when no priority is set. The higher the priority to index the batch, the higher the number given.
* <strong>Status</strong>: Displays the status of the batch.
* <strong>Options:</strong> Quick links for performing necessary actions when managing batches. Options include <em>Open</em>, <em>View</em>, and <em>Delete</em>.

#### Batch Options

In the **Options** column of the Batch List View are the functions that can be done to a batch. A scanned batch can be opened, viewed, or deleted from any of the status categories.

![](../indexing.assets/31f90445fab2bff714ddfbddc0cb95f6.png)

**Open**: Opens the batch for indexing. Opening a batch allows the user to begin indexing the items of the batch. Any batch, regardless of status, can be opened.

{{% tip %}}
Once a batch is in the status of Checked Out, Completed, or Deleted, users may choose to open the batch. However, the user may receive an error requesting to **Force Checkout**. This means the Checked Out, Completed, or Deleted batch was closed by another user. Forcing checkout will place the logged-in user's username on the batch.
{{% /tip %}}

![](../indexing.assets/efe2e3fd8104bb97f8ac4fb78f9da0b6.png)

**View**: Allows users to only view the pages of the batch. Clicking the *View* link opens batch pages. Indexing cannot be done from this view. After viewing, simply close the window by clicking the red X in the top-right corner of the window. The batch remains set to the status it was in when the *View* option was clicked.

**Delete**: Allows user to mark batch(es) as deleted. If a batch is scanned in accidentally, or perhaps scanned in twice, simply clicking the Delete link will mark the batch for deletion. Before deleting, {{% system-name %}} will ask to confirm. Comments can be entered or edited before confirming the deletion. Clicking **Yes** will delete the batch. Once confirmed, {{% system-name %}} will set the batch to Deleted and display a confirmation message of *Successfully deleted Batch #*.

![](../indexing.assets/d386106868f46c10f1bf2489f0de4943.png)

{{% tip %}}
A deleted batch can be retrieved, if necessary. From the WebScan module, filter down the batch search to Deleted batch statuses. Find the batch needing retrieved, and click the **Open** link. The deleted batch will then open with its contents in the indexing screen. Whenever a deleted batch is opened, the system will move it out of deleted status. The retrieved batch can have pages uploaded, can be worked on (indexed), or closed again. If the batch is closed without marking it as complete, {{% system-name %}} places the batch into the *Checked In* queue. If a user only *views* a deleted batch, the batch remains in the deleted status.
{{% /tip %}}

## Navigating WebScan

To begin indexing a batch, users must click the **Open** link from the *Options* column of the specific batch being indexed. This will open the batch in a separate Indexing window.

![](../indexing.assets/bebf8b9cfd8800364ed275565e467e75.png)

The first page of the batch will display on the right side of the window. The fields on the left are used while indexing, and the toolbar at the top will provide tools for navigating and indexing.

![](../indexing.assets/7bac4ead25b240b048a64377d4f41a6d.png)

### Left Toolbar Options

![](../indexing.assets/a1920cb387ae9dfbb1f23b9dd0c774d7.png)

**Upload to Chart**: Uploads pages into the specified charts for indexing.

**Close**: Closes the batch. Signifies if the batch is completely indexed, or whether it will need to be finished at a later time.

**Help Bubble**: Hover over or click to see the *MIEWebScan Hot Keys* menu. These are keyboard combinations used for performing the equivalent mouse function.

#### Indexing Hotkeys

There are keyboard hotkeys to help users perform functions quicker than when using a mouse. Some hotkeys perform options that are not available by mouse. Hover the cursor over the help bubble, or the circled question mark icon, next to the Close button, to access the MIEWebScan Hot Keys menu.

![](../indexing.assets/3107c367548d38914335607d6caa00cd.png)

<table>
<tr>
<td><strong>Keystroke</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr>
<td><strong>[Up/Down]</strong></td>
<td>Using the up/down arrow keys moves the line of focus (i.e., yellow indicator line) of the Image Info section up or down, to the next or previous line/page.</td>
</tr>
<tr>
<td><strong>[Left/Right]</strong></td>
<td>The left/right arrow keys allow users to look at the lines/pages that are linked together. Using the up/down arrows would bypass any linked lines/pages. Using the left/right arrows allow users to view the specific linked lines/pages.</td>
</tr>
<tr>
<td><strong>[Tab]</strong></td>
<td>Advances to the next entry field for indexing (e.g., Service Date, Doc Type, Provider, Patient, Service Location, etc.).</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Left]</strong></td>
<td>Rotates single page 90 degrees counterclockwise.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Right]</strong></td>
<td>Rotates single page 90 degrees clockwise.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Up]</strong></td>
<td>Moves the current page up.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Down]</strong></td>
<td>Moves the current page down.</td>
</tr>
<tr>
<td><strong>[Delete]</strong></td>
<td>Deletes the page. Can Un-delete by pressing the key again. When a page is deleted with other pages linked to it, all pages will be deleted.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Delete]</strong></td>
<td>Purges all deleted pages from the batch. Takes the pages that are marked for deletion and removes them from the batch and the view. Some users leave deleted pages in the batch, because deleted pages are not uploaded, by default. Whereas others want them removed from the batch, so that the number of pages to review is reduced. Once a deleted page is purged, it cannot be retrieved for viewing or indexing.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Enter]</strong></td>
<td>Performs the linking function, linking the current page to the previous page. To un-link, simply press [Ctrl] + Enter again.</td>
</tr>
<tr>
<td><strong>[Home/End]</strong></td>
<td>Using the Home key advances to the beginning of the batch (i.e., page/line 1). Using the End key goes to the end of the batch (i.e., last item of the batch).</td>
</tr>
<tr>
<td><strong>[Enter]</strong></td>
<td>Sets the form indexing data. Tabbing between fields while indexing advances users from field to field, but when all fields have been entered, hitting the Enter key sets the data and populates the entered information into the <em>Image Info</em> fields, advancing the program to the next page/line.</td>
</tr>
<tr>
<td><strong>[Alt] + R</strong> or <strong>[Alt] + [Enter]</strong></td>
<td>Sets all pages to all the current indexing data. This is the same functionality as clicking the Fill Blanks toolbar button. Either hotkey function copies down <em>all</em> the form data, not just one field. Specify the ending document number to establish the end of the range to copy to.</td>
</tr>
<tr>
<td><strong>[Shift] + [Enter]</strong></td>
<td>Sets all pages to one specific form element (i.e., specific index field). This is the same functionality as clicking the FillField toolbar button. Using the hotkey [Shift] + [Enter] where the cursor is focused will populate the field data onto all the following pages in the batch. This is a quick way of copying down a field to all pages in the batch.</td>
</tr>
<tr>
<td><strong>[Alt] + C</strong></td>
<td>Performs the Close function for the batch. Proceed to mark the batch as complete, if appropriate. This hotkey is the same as clicking the Close button from the toolbar.</td>
</tr>
<tr>
<td><strong>[Alt] + U</strong></td>
<td>Uploads the documents into {{% system-name %}} . Same functionality as clicking the Upload to Chart button from the toolbar.</td>
</tr>
<tr>
<td><strong>[Alt] + P</strong></td>
<td>Processes barcodes, deletes blanks, and indexes any information garnered by reading the barcodes. Same functionality as clicking the Process Barcodes button from the toolbar.</td>
</tr>
<tr>
<td><strong>[Ctrl] + M</strong></td>
<td>Allows users to move a page to a different order in the batch. Same functionality as right-clicking a line/page and selecting the Move Page option from the context menu.</td>
</tr>
<tr>
<td><strong>[Alt] + L</strong></td>
<td>Copies all the Index Information fields down to the next line/page. Same functionality as right-clicking on the line/page and choosing the Copy Down One option from the context menu.</td>
</tr>
<tr>
<td><strong>[Ctrl] + [Tab]</strong></td>
<td>Switches focus between page list and indexing fields.</td>
</tr>
<tr>
<td><strong>[Shift] + [Alt] + P</strong></td>
<td>Displays any barcode on <em>current</em> page. While on a page with a barcode, hold [Ctrl] + [Alt] + P to see what the barcode data will display.</td>
</tr>
</table>

### Right Toolbar Options

![](../indexing.assets/a4b5f783ff4d0f78298bfef68be9d5c7.png)

**Bubble**: This button is for clients using bubble forms in the {{% system-name %}} system. This triggers the reading of the bubble form optical marks and indexes and uploads the document. If a batch has bubble forms to index, first click the **Process Barcodes** button, and then click the **Scan Bubbles** button. {{% system-name %}} can be programmed to set required entry fields on bubble forms, as well as display expected result criteria, ultimately warning users if a value is not provided or out of range. If any errors are detected, a pop-up window will appear for making changes to the errored values. Clicking Submit at the bottom of the pop-up window will save the data. Continue indexing any additional pages of the batch and click the **Upload** button. Refer to [Indexing Bubble Forms](indexing-bubble-forms.md) for more details.

**Preferences**: Accesses the MIEWebScan Preferences. Changing these preferences will only change the preferences for the logged-in user.

![](../indexing.assets/27c3e3f8ac6133d4d27b453f32cb8697.png)

Indexing preferences include:

* <strong>Blank Page Threshold</strong>: Setting will automatically detect and purge/delete blank pages when using the Process BarCodes button. The threshold is the percentage (%) of ink, or black on the page, that designates the page as <em>not blank</em>. This preference determines the minimum percentage of black required on the page before the program considers the page blank, marking it for deletion. If any scanned pages contain little content, a low percentage threshold would need to be set in order to detect the small amount of text, or black on the page. This setting is usually set to lower numbers. If a blank page is undetected and is not deleted, the scanner may be dirty, or the page may be smudgy and tripping the threshold sensor.
* <strong>Default Mouse Mode</strong>: Sets what function is executed when using the mouse to click the document image.
    * <strong>Zoom</strong>: Perform zoom function when document image is clicked. Equivalent toolbar option is the magnifying glass.
    * <strong>Pan</strong>: Perform pan function when document image is clicked. Will only be able to scroll/move the image up and down. Equivalent toolbar option is the hand icon.
    * <strong>Pointer</strong>: Selection will only allow scrolling. Cannot do anything to the document image.
    * <strong>Crop</strong>: Perform crop function when document image is clicked. Equivalent toolbar option is the plus sign.
* <strong>Auto Link Form Pages</strong>: Setting to <strong>Yes</strong> will trigger multi-page forms embedded with form ID barcodes to automatically link, ensuring the full document, regardless of the number of pages, is linked to the first page, as one multi-page record. Otherwise, this must be done manually, while indexing the pages of the batch. In other words, if <em>Auto Link Form Pages</em> is set to Yes and the form being indexed is programmed with the necessary barcode, {{% system-name %}} will link subsequent pages of the form to the initial page. Because of the form ID barcode, {{% system-name %}} recognizes the form as a multi-page document.
* <strong>Auto Un-tumble Form Pages</strong>: <em>Tumbling</em> is a programmable feature of printed forms where the back page is printed upside-down. Some forms are set to tumble for clipboard use, for example. If a form embedded with a form ID barcode is programmed to tumble and is scanned/indexed with this preference set to <strong>Yes</strong>, {{% system-name %}} will automatically <em>un-tumble</em> the pages, indexing all of them right-side up, with the back page no longer upside-down. If this preference is set to <strong>No</strong>, the pages would appear <em>tumbled</em>, just as they were printed and scanned in, and the user would then be required to manually rotate the inverted images.
* <strong>Clear Indexing Fields</strong>: When set to <strong>Yes</strong>, the indexing fields of the <em>Indexing Information</em> section will be cleared after advancing to the next document within a batch.
* <strong>Confirm All Bubble Sheets</strong>: If set to <strong>Yes</strong>, every bubble sheet scanned/indexed will present a confirmation window, even when there are no missing fields required or values outside of the historical range. This triggers a confirmation after every scanned/indexed bubble sheet.
* <strong>Auto-Rotate to find Barcodes</strong>: This preference ensures that the {{% system-name %}} system may locate and read an embedded barcode, regardless of its placement on the scanned form. Setting to <strong>Yes</strong> will automatically rotate scanned pages, allowing {{% system-name %}} to search for the barcode, so that the form can be indexed accordingly. This is particularly useful for forms with <em>landscape</em> orientation, whose barcode is found on the side of the page. If indexing forms with landscape orientation and this preference is set to <strong>No</strong>, the barcode would not be detected, as the WebScan module would only search the tops of pages.
* <strong>Auto-Rotate Linked Pages</strong>: Setting to <strong>Yes</strong> will automatically rotate linked pages to sync page orientation.

**Process BarCodes**: Clicking this button after opening a batch will trigger the system to locate and read any barcodes within the batch, subsequently indexing any available information garnered. This will also trigger the removal of any blank pages that are flagged, based on the *Blank Page Threshold*. After clicking the Process BarCodes button, the cursor automatically defaults to the Service Date index field in the *Index Information* section.

{{% info %}}
The highlighted blue bar in **Image Info** section indicates the page number and corresponds with the page image that is displayed on the right side of the window.
{{% /info %}}

![](../indexing.assets/47e025d5980e461b138e7089e42a1675.png)

**Flip All**: Flips the batch items 180 degrees.

**Add Page**: Opens WebScan and allows users to scan any additional documents onto the end of the batch. After adding the additional page(s), proceed with indexing the remainder of the batch.

**Rotate One**: This dropdown option allows users to rotate only the document being displayed, or viewed, at the time. Options include rotating the page 90, 180, or 270 degrees. After selecting a degree to rotate, {{% system-name %}} automatically rotates the single document.

**Rotate All**: This dropdown option allows users to rotate all of the documents within the batch. Options include 90, 180, or 270 degrees. After selecting a degree to rotate, {{% system-name %}} automatically rotates all pages within the batch. As an example, this can be helpful in cases where a multi-page document with landscape orientation is scanned in, but the pages need to be indexed accordingly. Depending on the number of pages in the batch, this function may take a few seconds to execute.

**Print**: When the Print button is clicked, a new print window is opened. Then the user is able to print the entire batch.

{{% note %}}
Exiting the WebScan module is possible by clicking the X, found in the upper-right corner of the window. Any incomplete batches will be marked as Checked Out after opening. However, using the X is not the proper way to close a batch. Whenever possible, be sure to close the batch following the prompts and using the Close button, when all items have been indexed.
{{% /note %}}

### Index Information Section

![](../indexing.assets/303c87b8880e4eb6340c03d67aea52a3.png)

**Service Date**: The service date of the document being displayed. The clock icon will insert today's date, when clicked. The calendar icon can be used to select a specific date. The Service Date will also assume/be the ‘Completed Date' when/if a document is indexed to be linked to complete an order request and/or pending due list item.  Future dates will produce an alert when entered; however, there is the option to disable this feature, if preferred. Contact the Helpdesk for more details.

{{% tip %}}
To magnify anything on the document being displayed, use the mouse to hover over the image and click once while the magnifying glass is showing. Moving the mouse will magnify any moused-over area.
{{% /tip %}}

**Doc Type**: Doc Type is a required field. When left blank, {{% system-name %}} will inform users that there are pages not ready for uploading. If no information was populated from processing barcodes, this field will need to be entered manually. The Doc Type field is not a free-text field; it is an autocomplete field. Begin typing the document type name, and the autocomplete will list potential options alphabetically. Choose the appropriate doc type, and tab to the next field.

**Subject**: The Subject field is optional. This field allows users to specify what the document is about, contains, or is intended for, as an easy reference when searching for or reviewing documents within a chart.

**Provider**: The Provider field is optional. It is an autocomplete field, so typing in the provider's first or last name will initiate the search on the database, and {{% system-name %}} will return possible matches in alphabetical order. The provider names are those users tied to the Physicians Department. If a different department needs to be mapped, contact your Deployment Specialist. After selecting the provider, tab to the next field.

**Chart**: Chart is a required field. When left blank, {{% system-name %}} will inform users that there are pages unable to be uploaded to a chart. If no information was populated from processing barcodes, this field will need to be entered manually. The Chart field is not a free-text field; it is an autocomplete field. Begin typing the *last name*, and the autocomplete will list potential matches alphabetically. Choose the appropriate chart, and tab to the next field.

{{% note %}}
If a user is restricted to certain chart types, the indexing module will only result chart choices that exist within, or match, the chart types restricted to the logged-in user.
{{% /note %}}

**Link to Order**: The Link to Order field is optional. This field is designed to allow users the ability to link pending orders from the chart in context to the item being indexed. Clicking the ellipsis button will display a list of pending order items to choose from. Placing a checkmark next to a specific order item indicates that the document is to be linked to the order and will automatically mark the pending order as Complete. The Service Date will also assume/be the ‘Completed Date' when/if a document is indexed to be linked to complete an order request.

![](../indexing.assets/35e5381655d253edb692a2689117eaf3.png)

{{% note %}}
The Link to Order field will not activate until the Chart field has been entered. Once the Chart field is entered, the Link to Order field will be mapped for searching pending orders. If the chart does not have any pending orders to choose from, the field will display No incomplete orders found.
{{% /note %}}

![](../indexing.assets/64f60661ea350fc2de5d741ae7d8fa9d.png)

**Link to Due List**: The Link to Due List field is optional. This field is designed to link items from the due list to the items being indexed. Clicking the ellipsis button will display the due list items for the patient. Placing a checkbox next to the due list item will mark the item as Complete. The Service Date will also assume/be the ‘Completed Date' when/if a document is indexed to be linked to complete a pending due list item.

**Service Location**: The Service Location field is optional. It is an autocomplete, so simply begin typing the name of the service location and {{% system-name %}} will initiate the search on the database. All possible matches will be driven by those locations configured in the system. The Service Location field will not accept free text.

**Encounter**: The Encounter field is optional. This field is designed to link an encounter from the chart in context to the item being indexed. If the encounter ID is known, begin typing the ID number in the field, and the autocomplete will populate the encounter to select. However, when the encounter ID is unknown, simply use the Search button found to the right of the field. By clicking the Search button, a pop-up window will display existing encounters for the specified chart. This initial search goes back three (3) days, resulting a list of encounters 3 days from the selected Service Date. Clicking the *Search within # days* hyperlink will perform another 3-day increment search, displaying encounters within 6 days of the Service Date indicated. Continue to click the hyperlink to continue searching further out. To select a specific encounter, click the *Select* hyperlink next to the specific encounter needing linked. Once selected, the pop-up window will close, and the encounter details will automatically be inserted into the Encounter field.

**Case**: The Case field is optional. This field is designed to link a case/incident from the chart in context to the item being indexed. Click the down (↓) arrow key within the field to see any cases/incidents in the chart. Select the specific case/incident needing linked to the document.

{{% tip %}}
Hit the [Enter] key when all applicable fields have been entered. This applies all entered data to the document image and advances the program to the next page of the batch.
{{% /tip %}}

### Batch Info Section

The Batch Info section shows the Batch ID number, the number of pages scanned into the batch, the batch priority, as well as the batch partition and any associated comments. The Partition can be edited using the available drop-down. There are also system settings that can be turned on to make the partition required and/or displayed, by default.

![](../indexing.assets/5b58975aa4f1a055fa4f6d5f537d5212.png)

### Image Info Section

The Image Info section displays columns aligned with the fields of the Index Information section. There is additional functionality available from within this section of the WebScan module. These options are applicable to each page of the batch, or each line. To access and utilize these functions, simply highlight a page of the batch by clicking on the appropriate line. Once highlighted, right-click to open the WebScan context menu.

![](../indexing.assets/4fd51aaee3ed77ab7a42bfafbb9563b3.png)

**Rotate**: This option allows users to rotate the document 90, 180, or 270 degrees. Simply select Rotate and then the degrees to be rotated. After selecting a degree, {{% system-name %}} will automatically rotate the document.

**Delete**: Allows a user to mark a page deleted. If a page is scanned in accidentally, or perhaps scanned in twice, simply selecting the Delete option will mark the item for deletion. After selecting, the line will change from yellow to grey, and *Deleted* will appear. Any linked pages will be deleted with the document. To un-delete, simply right-click and select the Un-delete option.

**Move Page**: Select the Move Page option from the context menu to move the highlighted item to a different location within the batch. Moving a document using this option allows users to not only move the document to another location within the batch, but also allows the document being moved to be linked to the previous page, or the page that precedes it in the batch. Moving pages is typically done to organize documents requiring a specific order. After selecting Move Page, a pop-up window will appear where the new location of the document can be specified, as well as whether or not the document needs linked to the previous page. To perform the move, click the **Move** button.

* <strong>After Doc Num</strong>: Provide the page (Pg) number the document being moved is to follow.
* <strong>Link to Prev</strong> (<strong>checkbox</strong>): Place a checkmark in this box to link the page being moved to the previous page, relative to the location it is being moved to. Ensure all linked documents are in the correct page order.

![](../indexing.assets/04df25841dbb8df7069fc729809b1442.png)

**Link to Prev**: This option allows users to link pages that are intended to remain grouped together, where a page is linked to the previous page in the batch. Linking pages simply attaches subsequent pages to the initial page. The linked page will not be inserted into the chart as a separate document; but rather, a linked document will be considered the subsequent page (e.g., 2nd, 3rd, 4th, 5th, etc.) of the page listed before it. For example, if a 5-page document is scanned into a batch, page 1 would be indexed with all of the applicable field information, and pages 2-5 would be linked using the Link to Prev function. The document would then be stored in the chart as one document with 5 pages. There is no limit to the number of possible linked pages. Once a page is linked, the system displays the line as *Linked to Prev* in a pink highlight.

{{% tip %}}
To un-link a page, simply **right-click** the line item and select the **Un-Link to Prev** option.
{{% /tip %}}

![](../indexing.assets/70158af86223fde115594e1535cc6377.png)

**Copy Down One**: The Copy Down One option allows users to copy the same index field information from the current page to the line below it. This will only copy the index fields to the next page; it will not duplicate the document/image. Often, when the Copy Down One function is used, a **Dup** alert will appear in the *Status* column. This means the system detects the same information being indexed on a separate item. It can also signify that a document with the same index field information already exists in the respective chart. Modifying some index fields for the document may eliminate some Dup alerts; however, they do not need to be corrected if the intention is to upload the document.

![](../indexing.assets/f2fce788ef00baeb05d5cc35fab2a43e.png)

{{% tip %}}
Click on the red **Dup** hyperlink to open the view of the duplicate page/image. This provides a means to verify duplicates. If the page is indeed a duplicate, a user may wish to delete it from the batch. If the page is not a duplicate, but has the same indexing data, a user may want to proceed with uploading the document to the chart anyway.
{{% /tip %}}

**Find Document**: The *Find Document* option opens another window where users open the chart in context (i.e., where the document is being uploaded). The *Find Document* option simply provides a quick means to access the chart, so that the user may look for any needed information, rather than leaving WebScan or opening a new session to retrieve the information.

![](../indexing.assets/83213cdafe6a749220f171ec22e891f6.png)

{{% note %}}
To index documents into a locked chart, the indexer must have the **Add Document to Locked Charts** security permission. If the security control is set to **Yes**, the indexer may index documents into locked charts, as needed. However, because the chart is locked, indexing links will not allow access to the locked chart.
{{% /note %}}

## Uploading a Batch

Once all applicable fields have been filled, linking has been completed, and necessary deletions made, the batch is ready to be uploaded and indexed into the respective charts. Simply click the **Upload to Chart** button in the upper-left of the toolbar. Uploading processes each page of the batch and indexes the documents according to the index details provided. This is typically a fast process.

![](../indexing.assets/47a85fdcbb1443316f2bba81be59e1eb.png)

Once complete, the batch will remain opened. To confirm the batch is finished uploading, ensure the Status column for each document displays *Uploaded*.

![](../indexing.assets/ef91df45a20ae5dfe28ed19177052050.png)

If a line does not display *Uploaded* in the Status column, then there is likely an index field missing, keeping the system from being able to upload the page into the chart. Simply click the line item and key in any missing information needed, and click the **Upload to Chart** button, again. The system will then repeat the upload process, indexing any missed items.

{{% info %}}
In cases where the entire batch cannot be completed and indexed in one sitting, a user may receive a warning that **There are un-indexed pages. Do you still want to upload to chart?** Anytime index information is not provided, this warning will populate. It simply informs the user that one or more pages will not be indexed. It is important to note that if the batch has an un-indexed pages and is not completed, the user should not mark the batch Complete upon closing.
{{% /info %}}

![](../indexing.assets/5c804347ebb747980093527e7ff0ca28.png)

## Closing a Batch after Upload

After successfully uploading and indexing all pages of a batch, the batch must be marked as Complete. Doing this will not only close the batch, but also signify to the system that all pages have been addressed and are completed, moving the batch from the *Checked In* queue to the *Complete* queue..

First, to close the batch, click the **Close** button, near the top-left of the toolbar.

![](../indexing.assets/8d3524b6681cb6b72216ca4877712768.png)

{{% note %}}
After clicking the **Close** button, it is important to follow the prompts. Do not click the X in the upper-right corner to close the window.
{{% /note %}}

Once the **Close Batch** window opens, continue filling out the necessary information. Fields and options displayed on the Close Batch window are as follows:

![](../indexing.assets/a590aa0aa62ef6d5d1213d83d8a55af2.png)

* <strong>Comments</strong>: Any previous comments or text attributed to the batch will display in this field. These comments can be left as-is, or they may be modified, removed, or added to, if necessary. Comments on a batch provide helpful information that will display in the ListView when users are working batches.
* <strong>Mark as Complete</strong> (<strong>checkbox</strong>): A check mark will populate when all pages have successfully been uploaded. If any pages remain, no check mark will populate. If pages remain in the batch, a message just above the Comments field will display how many pages remain un-indexed. This checkbox should only be checked if the batch is considered entirely complete. When this box is checked, the system will move the batch from the <em>Checked In</em> queue to the <em>Completed Batches</em> category. Closed batches that are not marked as Complete will remain in the <em>Checked In</em> queue.
* <strong>Priority</strong>: Options include Low, Normal, and High. This field defaults to the priority the batch was set to when opened. As noted, High priority batches will display at the top of batch category ListViews, followed by Normal and then Low priority batches.
* <strong>Patient's Chart Online</strong>: Though not often used, this section provides a view of all charts uploaded to, and allows users with the proper security permissions to update the status of a chart (i.e., Offline, Partial, or Online). Or all charts can be flagged as Online by simply using the <strong>All Online</strong> button.
* <strong>Close / Cancel buttons</strong>: Clicking the <strong>Close</strong> button is the proper way to close an opened batch. Clicking the <strong>Cancel</strong> button will keep the user in the WebScan module.

After a batch is closed, the page will refresh back to the WebScan landing page, where users may continue to another batch.
