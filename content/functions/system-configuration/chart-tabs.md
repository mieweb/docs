---
id: '1152N8SuEFh-XXf0Rev0oGdD4ErLhyvoG5eFGYhcOtOk'
title: 'Chart Tabs'
date: '2024-05-20T14:53:30.192Z'
version: 246
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=cteditor&tabmodule=admin&tabselect=Chart+Tabs'
source: 'https://drive.google.com/open?id=1152N8SuEFh-XXf0Rev0oGdD4ErLhyvoG5eFGYhcOtOk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} uses what are known as **chart tabs** within each chart. These are similar to chart dividers, or chart tabs, found within paper charts. They are simply an easy means to organize and track all of the documentation within a chart. Users interested in configuring or maintaining chart tabs throughout the system will need the appropriate security permissions and may access the [Chart Tabs editor](https://system/?f=chart&s=cteditor&tabmodule=admin&tabselect=Chart+Tabs) from the Control Panel to update and maintain, as necessary.

## Summary

When you click [Chart Tabs](https://system/?f=chart&s=cteditor&tabmodule=admin&tabselect=Chart+Tabs) at the top, the entire listing of all chart tabs created in your system appears.

Users can click on any underlined column to sort the listing alphabetically, or by way of any of the other columns, as needed.

![](../chart-tabs.assets/2c876e6d4153a312245b1b9294bb82d2.png)

Available columns include:

* <strong>Tab Name</strong>: This is the name of the chart tab. This is how it appears in each patient's chart.
* <strong>Target</strong>: This is usually blank which means this tab won't open in a new window on your computer screen. If this chart tab is set to open in a new window on your screen, it will say as such.
* <strong>Default View</strong>: This is the view (e.g., detailed, dashboard, thumb-view, etc.) to which the chart tab in context defaults.
* <strong>Def Doc Type</strong>: Lists the document default type(s) (if any) for the chart tab in context. If a Default Document Type is designated for this chart tab, only that document type will be displayed as the primary Default Document Add Type when the Add Document link is clicked from within the chart. Leave this field blank if a default document add type is not needed for the chart tab.
* <strong>Description</strong>: If documented, this is the purpose of each chart tab. The first 60 characters of the description display here. If the description exceeds 60 characters, the entirety of the description will be displayed in a help bubble following the truncated version

![](../chart-tabs.assets/193fc6b0cba871d52faf3667dc6f844d.png)

* <strong>Document Type(s)</strong>: Lists all of the Document Types that are mapped to and appear on the chart tab in context.
* <strong>Sub Tab Of</strong>: Lists the parent tab of the chart tab in context. In other words, if the chart tab in context is found within another menu or tab, that menu/tab, or parent, will be displayed in this column.
* <strong>Force Display</strong>: Shows `yes` or `no`. This indicates whether or not the chart tab in context is forced to display. If a tab is forced (i.e., `yes`), the tab will appear in all charts, regardless of whether or not documents reside in that tab.
* <strong>Pocket Tab</strong>: This will be `yes` if the chart tab in context is to be displayed in the  {{% system-name %}} Pocket version (i.e., used on smart devices).
* <strong>Tab Order</strong>: Shows the numerical order set to the chart tab in context. Chart tabs are ordered numerically, left to right, at the top of the chart.
* <strong>Options</strong>: `Edit` and/or `Delete` links will be available for editing and deleting chart tabs, as needed. If a chart tab is restricted, users with the appropriate security permissions to view restricted charts will also have a `Restrictions` link available here.

### Search Engine (At Top of Screen)

There is a search engine at the top of the screen.  You can use the dropdowns to do a BEGINS WITH, CONTAINS, or EXACT criteria search, along with searching by chart tab name or can do a reverse search by searching for the document type name/description (or doc.type) and it will display the chart tab(s) that document type is housed in.  Using the search fields will narrow down your results and display them, instead of scrolling through the entire/complete listing of chart tabs with included document types.

There are also checkboxes available to change your search results to find what you are looking for.  The system will remember what you checkmarked and next time you come back to do a search, it will remember and prefill those checkboxes of what you were at last time you rendered a search.  There are also check all and uncheck all buttons to quickly perform those on the checkboxes.

Click the SEARCH button when ready to show the results of the search criteria you have set.

![](../chart-tabs.assets/09bc54d423c038bdd4a096f1a49a2fed.png)

## Add a New Chart Tab (Basic Editor Option)

You must have security role permissions to access Chart Tab.

Click Control tab from left sidebar menu.

Click Chart Tabs at the top.

To add, click Add Tab link at the top right of the screen.

![](../chart-tabs.assets/25558c3842d39746ae9ec595bdc6015d.png)

After you click Add Tab, the Chart Tab Basic Editor Information screen will appear.  This is where you type in the name of your new chart tab and select specifications for the chart tab.

![](../chart-tabs.assets/01b221270989e99ac4e7a4d1a40f53ed.png)

* <strong>Tab Name</strong>: Type in the name of the tab you want to add. This will appear as a tab in e-chart for patients.
* <strong>Description</strong>: Optional field to type in the purpose of this chart tab. This only displays here and in the Chart Tab summary screen of Control.
* <strong>Open in a new window?</strong>: If you want the chart tab to display in the new opened window or your screen each time, click Yes for this. Otherwise, most keep as No so the chart tab stays on the screen view instead of in a separate window.
* <strong>Default View</strong>: Choose type of view this chart tab will appear as. The default view of a chart tab determines the basic functionality of that tab. To see a brief description of a particular default view, choose that default view in the select box, then click the question mark to the right of select box. Example: some are set to Documents-Thumb view (would show the scanned image while viewing all the documents in that chart tab). If you just wanted a text/list view, then choose Documents-List view. Documents-Detail view opens the document on the screen in a summary fashion. Documents-Thumb view shows the document image on the left for that tab and then the list view in the middle of the screen. Use the help icon to view what each Default View choice describes and shows. Your MIE Implementer loads other chart tabs like vitals, flowsheets, Rx lists, and other programs specific to your company.

{{% note %}}

Certain default views will allow you to tag document types to them. Default views that allow document types to be tagged to them, but are not required:

* Demographics View
* Encounter View
* Injections List
* Lab Results
* Mammogram Tracking
* Medications/Allergies
* Orders View

Default views that require at least one document type to be tagged:

* Documents Detail  View
* Documents Detail List View
* Documents List View
* Documents Thumbnail View

Default views that forbid/don't allow document types to be tagged to them:

* Appointments View
* Conditions List
* Dashboard View
* DICOM view
* Dictation List
* Flowsheet (Observation List)
* Inventory View
* Sub Tab View
* Insurance List

If you select any default view that allows you to tag document types to it, you will then see a Document Types section to complete.

{{% /note %}}

* <strong>Inclusive</strong>: Begin typing the names of the document(s) you want included in this Chart Tab. It will auto-complete to give you choices. Click the ADD button to add it and type in another document to add to the chart tab. You can have as many documents added to a chart tab as you want. You can hit your down arrow ↓ key on your keyboard in this field to show the entire listing of document types in your system alphabetically and use the scroll to select and ADD individually that way with your mouse instead of the auto-complete. Or do a reverse document type add to a chart tab instead by selecting Exclusive.

![](../chart-tabs.assets/36f3a80b48c600d74279d02b63498e10.png)

![](../chart-tabs.assets/a09957f4b10305be035e29b31674009f.png)

* <strong>Exclusive</strong>: This chart-tab will include every document type in your system, except for the ones you type in using the auto-complete. Click the ADD button to add any document types to exclude from this chart tab. Only the document(s) you don't want included in the chart tab should be added here if you choose exclusive.
* <strong>Inactive</strong>: This is a list of document types that a super-user has deemed inactive.  You can also click to add these documents to your chart-tab, but these are old and not being used as this ‘doc type name' any longer.  These appear in italics and when choosing them from the auto-complete they say (INACTIVE) next to them.
* <strong>Tab Order</strong>: Demo (demographics tab) is always zero (0).  Then when adding a chart-tab, use the drop-down to choose the order you wish the chart tab to appear in e-chart for patient's.  Usually skip 5 and put the next type in. That way, if you wish later to add a chart-tab and want it to show up as the 3rd tab, then you can go in easily and create it and mark it 3rd, since there are 5 in between each chart-tab.
* <strong>Background Color</strong>:  Choose the background color for the chart tab.  Use the edit color link to open a selection of colors to click on.  Default is set to grey.
* <strong>Font Color</strong>:  Choose the color of font you wish to have on that chart tab.  Use the edit color link to open a selection of colors to click on.  Default is set to black.
* <strong>Restrict Access</strong>: Check this box if you want this tab to be restricted to certain users and/or departments.To specify permitted users and/or departments for a restricted tab, an administrator with the right privilege level must click the restrictions link in the options column of the specific chart tab listing. The restrictions link is where you view, add, edit the allowed users and/or departments for the chart tab. This link will appear only for users who are permitted to make these changes.  You cannot un-restrict (un-checkmark) this box if you do not have security permission. Anyone can set a chart tab to be restricted, but you must have security permission to un-restrict. If you have security permission to be able to manage chart tab restrictions, if you click this box to RESTRICT ACCESS while setting up a chart tab, the ‘restrictions' section will open up on your screen so you can set the allowed users/departments right then while setting up the chart tab. Editing restrictions is also available from the restrictions link found when looking at the list of chart tabs for the system from Chart Tab.
* <strong>Show Tab in Pocket</strong>:  Check this box if you want this chart tab to be shown on the pocket version of {{% system-name %}} which is accessible via smart devices such as a Blackberry or an iPhone.
* <strong>Show Link Header</strong>: This allows each chart tab the option to have the header links display or not. Check this box if you want this chart tab to show the header links when viewing in the chart tab.
* <strong>Chart Type</strong>: If this chart tab should only appear in specific Chart Types (your system needs configured for Chart Types), then you can set this chart tab to be a part of a specific chart type easily from here. This tab then would only appear in those specific chart types if this is set.
* <strong>Default Document Add Type</strong>: This is usually None. However, this is the document type that will be used when a user clicks ‘add document' when in that specific chart tab. You can scroll your mouse over ‘add document' on any tab and a box will pop-up telling you what the default doc.type is for that tab.  If you designate a Default Document Add Type for this chart tab, only that document type will be displayed as the primary default document add type when the add document link is clicked on this chart tab.  Leave this field blank if you do not want to designate a default document add type for the tab.
* <strong>HAP System</strong>: This is used by MIE only.
* <strong>Force Display</strong>: If you select YES, it puts this chart-tab you are creating on all patients e-chart even if they do not have any of these types of documents.  If not check-marked, this chart-tab you created will only show up on patient's e-charts if they have documents attached to them.   Always force Demo and DocSum, and any others you wish to always show up on e-chart for a patient. If there is a document attached to the chart-tab, it would say : example  Labs (2). If it were forced and there were no documents, it would show : Labs as a tab and nothing next to it. If select No, it will only show this chart tab for a patient if they have any indexed documents for this particular chart tab.  Hidden, Conditional Show, & Conditionally Force are set up by MIE.  These chart tabs can be hidden and incorporate multiple (sub-tabs) tabs into one main tab.  Conditional Show & Force are set up by MIE and these chart tabs can be programmed to conditionally show or be forced to show on specific request.

If you need to see a list of documents that haven't been tagged to a chart tab yet in your system, scroll up to the top and click the link Click here to see your unused document types in another window.  If you click that link provided, it will open a separate window on your computer screen.

![](../chart-tabs.assets/14bedfde7c5f1d5b45384c66a6ea8e85.png)

A list of document types not tagged to any inclusive tab will display.  It will open to display in document type alphabetic order. You can sort and group Active vs Inactive document types by clicking the active? column header title.

![](../chart-tabs.assets/16388a2cc030dd0f6a11ea0f94b7537b.png)

Unfortunately, you cannot select the document type from here to add to the chart tab. This is for viewing only. If you click the document type name in this screen, it will take you to the document type details for that document. To get out of this screen you can simply click the X at the top right of this opened screen.  Then you will be back at your Chart Tab and can add that document type you found wasn't tagged to any chart tab yet.

Click Save button when done creating your Chart Tab. Your chart tab has been added to the system.  If you restricted the chart tab, you need to go back into the chart tab and set the allowed users and/or departments (see page 6 of this help documentation regarding restrictions).

### Advanced Editor

This is for MIE syntax programmer use to program instructions for specific client needs. Only MIE will be using this entry method. However, if setting restrictions to the chart tab, it will automatically set you to this Advanced Editor mode so you can enter in any allowed users/departments to the chart tab you are creating.

![](../chart-tabs.assets/dcb09e18501d0d4ab34f8b713ceaee4f.png)

### Edit or Delete/Inactivate an Existing Chart Tab

You must have security role permissions to access Chart Tab.

Click Control tab from left sidebar menu.

Click Chart Tabs at the top.

Find the chart tab you wish to edit by using the search engine or by scrolling through the list. To edit a chart tab, click edit at the right end of the line description for that tab, under options.

![](../chart-tabs.assets/a9c2b55866b454bb01d69600676d14ed.png)

Edit the chart tab information fields you wish and click SAVE at the bottom.

Revisions done to a chart tab are tracked. If you wish to view the revisions ever done to a chart tab simply click the name of the chart tab in the tab name column.

![](../chart-tabs.assets/75e58f3e221e24dfd569977556eeb94c.png)

The ‘view/summary' of the chart tab will show on your screen and a revision history is shown at the very bottom.

![](../chart-tabs.assets/201581a7f170a2853c87af40c28a5642.png)

If wish to delete (inactivate a chart tab), click delete and you will delete this entire chart tab from all patient's charts.  When you click delete, it will display the chart tab details and asks a confirmation message if you are sure you want to delete this chart tab.  Click Delete button again to confirm and delete the chart tab. Click cancel to escape and get out.

![](../chart-tabs.assets/ab5b5790e01f23c860805a28f28093c9.png)

A confirmation message will appear at the top to confirm you successfully deleted the chart tab.

![](../chart-tabs.assets/ee83940891362277fb01eb0c9f2fe828.png)

To "reactivate/undelete" a chart tab, you can click the UnDelete link in its options column. (Make sure Hide Deleted Tabs is not checkmarked).  It will ask you to confirm you wish to un-delete the tab.  To confirm, click the UNDELETE button to confirm/reactivate the tab and it will give you a successful message.

![](../chart-tabs.assets/f8e173dee4cc46bcac9163f3b239b0c0.png)

## Restricted Chart Tabs

If you check-mark a chart tab to be restricted and have security to manage chart tab restrictions, you can add any allowed users/departments to that chart tab while you are adding/creating the chart tab.  OR at any time you can add/edit/delete any allowed users and allowed departments that are allowed to view this chart tab by going to the Restrictions link provided from the chart tab list summary screen.

Find the chart tab that is restricted from the Chart Tab summary screen.  Chart tabs that are restricted will have the option link Restrictions next to it.  If that option link does not appear, then that chart tab is not restricted.

Click the Restrictions link in the options column next to the chart tab name to set allowed users/departments access.

![](../chart-tabs.assets/2f95e278a440b4922bb5fa49c878494d.png)

The Allowed Users / Allowed Departments to the restricted chart tab will display. This is where you search for specific user(s) and set them to Yes to be allowed to this restricted chart tab or set the specific department(s) to yes to view this restricted chart tab.

![](../chart-tabs.assets/c9df91c1c56096770b18b1cce4b3a506.png)

### Allowed Users

You can search and add a specific user in Add User and add them to the chart tab.  Type in their last name (or first name) and the system will give you any auto-complete selections that match. When you find the specific user you want to allow to this chart tab, click on their name, then go over to the PERMISSION LEVEL and it's default to Yes, but you can change it to No. Then click the ADD button. It will then insert that user above it in the list edit.  No user is submitted or access changed until you are done and click the SAVE button at the bottom of the screen. You can continue to add another user to be allowed to this restricted chart tab. Click SAVE button when done. Any user with NO permission on this list or not on the ‘allowed' list at all on this screen is not allowed into this restricted chart tab.

### Allowed Departments

You can select an entire department to be allowed to this restricted chart tab. Simply find the department using the drop-down and then at the PERMISSION LEVEL its default is Yes. This will allow all users within that department permission to this restricted chart tab. Then click the ADD button. It will then insert that department above it in the list edit.  No department is submitted or access changed until you are done and click the SAVE button at the bottom of the screen. You can continue to add another user to be allowed to this restricted chart tab.  Click SAVE button when done. Any department with NO permission on this list or not on the ‘allowed' list at all on this screen is not allowed into this restricted chart tab.

## Edit Permission or Remove User/Department From Allowed List

If you want to deny permission to a user and/or department or need to edit a permission level for an allowed user/department on the list for the restricted tab, simply get into the chart tab by clicking the EDIT link or get into just the restrictions by clicking the Restrictions link provided in the options column of the chart tab listing screen.

![](../chart-tabs.assets/5222e76d7ba0cbac9a681305b259065c.png)

Once in either link, find the Allowed Users / Allowed Departments section. To change a permission level to NO for a user or department (No meaning that the user or department is no longer allowed permission to view/work in that restricted chart tab) then find the specific user or department and click the EDIT button where they are listed.

![](../chart-tabs.assets/54ec2deb1ed866b664da626cc4d3493d.png)

Once in the ‘edit' mode, change their permission level, using the drop-down, to NO.  Continue to edit/change any other users/departments you wish for the restricted tab. Changing a user or department's level to NO means they are not allowed into this restricted chart tab.  Only users or departments with YES permission can access the restricted chart tab.

When done editing the users or departments to change their permission level, click the SAVE button at the bottom of the screen.  Nothing is submitted until the SAVE button is performed.

![](../chart-tabs.assets/76a4cf8bd18a52406a1c1b2b281061a9.png)

Another quick way to change a user or departments permission level to NO (when they currently are set to YES permission) is to just click the [ - ] delete button next to their username or department name.  Doing so will then put a strikethrough in the user name or department name.  When done, click the SAVE button at the bottom of the screen.

Any user or department who is removed from the allowed list using the [ - ] button is simply removed from the allowed list and is automatically changed to permission level NO in the background of the system once the SAVE button is performed.

![](../chart-tabs.assets/9906654476e74755381fbc10dff2fd4e.png)
