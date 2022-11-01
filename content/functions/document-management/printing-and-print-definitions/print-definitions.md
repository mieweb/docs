---
id: '1PFDV9CkSZ7zurZN_gdy7-8ZqUXHU1Hp-DFaMu6CDdok'
title: 'Print Definitions'
date: '2020-03-09T16:32:06.375Z'
version: 103
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'gdoc:10iTI1XYCr4psVflBlwJHnxnPKKcb3I64Yrq6LviXvD8'
  - 'https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions'
  - 'https://system/?f=chart&s=printdefedit&item=def&opp=add'
source: 'https://drive.google.com/open?id=1PFDV9CkSZ7zurZN_gdy7-8ZqUXHU1Hp-DFaMu6CDdok'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Print Definitions'
    identifier: '1PFDV9CkSZ7zurZN_gdy7-8ZqUXHU1Hp-DFaMu6CDdok'
    parent: '1NHBPyY_YvI92JSil-rc3O0Kpu5qYLkdKWZTNjlzQpNY'
    weight: 760
---
Print definitions provide ways to group many documents, forms, layouts, or the like into a defined print (or fax) job. Print definitions can be accessed from either the Scheduler module or any patient chart by clicking the **Print Chart** link. Users are then given the ability to select the desired print definition and set a date range and printing options, such as printing without headers and printing one document per page. In addition, users can not only print and fax, but can send the print definition as a secure email, or even create a batch so that the print definition can be printed or faxed at a later time.

The following information covers how to create and restrict print definitions, as well as how to configure and customize them. For more information on how to use print definitions, see the [Print Chart](gdoc:10iTI1XYCr4psVflBlwJHnxnPKKcb3I64Yrq6LviXvD8) online help documentation.

  
## Create a Print Definition   


To create a print definition, users must first navigate to the from the **Control Panel** left sidebar menu, and then select the [Print Definitions tab](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions). This will load the Print Definition Search and listview, where all existing print definitions will display.

Click the [Add Definition](https://system/?f=chart&s=printdefedit&item=def&opp=add) link in the upper-right corner, to create a new print definition.

  
![](../print-definitions.assets/10000201000006B20000037E5027D3EE0A36B195.png)  


The Add Print Definition page will load. Fill in the appropriate fields to create the new print definition.

  
![](../print-definitions.assets/100002010000025B000001CF99FA695C91917880.png)  


**Definition Name**: This field is intended for the name of the print definition, which is used and displayed in the Print Definition dropdown when a Print Chart link is used. The name is a title or *group name* for all documents/sections included within the definition. However, only users with the Allow Print Def Declaration security setting enabled are permitted to name print definitions. Users without the security setting enabled will see the name is *automatically assigned*. In these instances, after completing the creation process and saving, the assigned definition name (PD#__) will populate.

  
![](../print-definitions.assets/100002010000025B0000008096F7C917E0BFAF1F.png)  


  
![](../print-definitions.assets/10000201000002E80000007018A0C62C7F065BE4.png)  


**Description**: A description, or comments, can be added to the print definition, as needed. This field does not populate or display in {{% system-name %}} , however it does display in NoMoreClipboard to provide users necessary instructions (e.g., to click the link, to fill out forms to send to an office, etc.).

**Status**: Select the appropriate radio button. When creating a new print definition, select **Active**. When a print definition is no longer utilized, this option can be set to **Inactive**. This will retain the print definition information, though the print definition will not be usable from within the system. Selecting **Active but Hidden** will set the print definition as active while also hiding it from the Print Chart Print Definition dropdown. This is typically used for hiding print definitions designed for use as appointment/scheduler overrides.

**Require Reason**: This is not typically checkmarked. When checked, users will be prompted to enter a reason for using the print definition. The supplied reason is entered into the Comments field of the Print Chart dialog window.

**Number Pages**: By default, this field is checked, meaning all documents printed from the print definition will have page numbering. Do not check if page numbering is not preferred.

**Restriction Control**: This is not typically checkmarked. When checked, only specified users will have permission to utilize the print definition. Users with the Manage Print Def Restrictions security setting enabled will have the ability to restrict the print definition to specific users/departments, when editing or adding print definitions. This is discussed in more detail above, under the [Restricting a Print Definition](#gjdgxs) section.

**Scheduler Override Control**: The Scheduler Override Control was designed to allow users the ability to create print definitions that override selected print definitions, when specific appointment details are met. To enable this functionality, place a checkmark in the box, complete the remaining fields, and save. Additional information and how to establish this function can be found under the  section.

**Archive Print Definition**: The Archive Print Definition option is intended to allow for specifying what document types certain print definitions need archived as. Placing a checkmark here will trigger a dropdown selector of available document types. With this option checked and the document type specified, whenever the print definition is printed, the archived version (i.e., print definition content) will automatically be saved within the chart in context, as the specified document type. Most print definitions are not set to *this* archive functionality, but rather the archive functionality attributed to the individual document type itself.

  
![](../print-definitions.assets/1000020100000362000001C67E06EF029ECCFCD2.png)  


{{% note %}}

When using a print definition en masse (i.e., on multiple charts at one time), the Archive Print Definition functionality will not work. This only works for individual chart printing.
{{% /note %}}

**Use Page Header**: The Use Page Header option is designed for using a specific page header for an entire print definition. In other words, if certain information is necessary at the top of each document/section associated with a print definition, this option would be checkmarked. Leave unchecked, unless a page header is needed for an entire print definition. MIE can program these page header layouts with the required information, and once this option is selected, the programmed page header layouts will appear for selection. When one is selected, the HTML will automatically populate in the Layout Editor.

  
![](../print-definitions.assets/10000000000001BC0000006CE5C0C446ECB5B3AF.png)  


**Definition Alert**: Use this free-text field to specify any alert(s) pertaining to the use or overall function of this print definition. If a Definition Alert is provided, a user will be shown the alert, when the print definition is selected for use.

Once all of the fields have been addressed accordingly, click the **Save** button. If no additional details are needed, a confirmation message will display. Next, the sections and documents to be included in the print definition need to be defined. Skip to the [Creating Section(s) in a Print Definition](#30j0zll) section for more details.

{{% info %}}

Print definitions with Restriction Control enabled, and/or the Scheduler Override Control enabled, will be prompted to specify the restriction/override criteria upon saving. See the **Restricting a Print Definition** and **Scheduler Override Control** sections for more information.
{{% /info %}}

  
### Restricting a Print Definition   


When the **Restriction Control** option is enabled on a print definition, specified users/departments will retain permission to see and utilize the print definition in context. This allows certain print definitions to be restricted from certain users/departments, as needed.

  
![](../print-definitions.assets/100002010000039E000001C7FA3F0EFC9F7C54C2.png)  


When creating a print definition, an additional screen will load after clicking the **Save** button, as long as (at least) the Restriction Control option is selected. This screen is a confirmation of the intent to establish the users/departments being granted access to the print definition. Click the **Yes** button to begin adding to the Allowed Users/Allowed Departments lists.

  
![](../print-definitions.assets/10000201000001EB0000009F890AE9A975C8A8CF.png)  


Once clicked, the *Edit Print Definition* page will load. Update the **Allowed Users** and/or **Allowed Departments**, as appropriate.

  
![](../print-definitions.assets/100002010000025F0000021427FBD50CFA25E808.png)  


* <strong>Allowed Users</strong>: Begin typing the name of the user needing permission to access the print definition in context. This is an autocomplete field. Using either the mouse or the tab key of the keyboard, select the user and click the <strong>Add</strong> button to the right of the field. This places the user in the Allowed Users list and can be repeated, as needed. To <em>remove</em> a user from the list, simply click the minus button ( – ) next to the name being removed. When all edits are complete, click the <strong>Save</strong> button at the bottom of the page.
* <strong>Allowed Departments</strong>: Begin typing the name of the department needing permission to access the print definition in context. This is an autocomplete field. Using either the mouse or the tab key of the keyboard, select the department and click the <strong>Add</strong> button to the right of the field. This places the department in the Allowed Department list and be repeated, as needed. To <em>remove</em> a department from the list, simply click the minus button ( – ) next to the department being removed. When all edits are complete, click the <strong>Save</strong> button at the bottom of the page.

Once this additional information for Restriction Control has been added, users may continue configuring the print definitions with necessary sections, or continue providing additional information for the Scheduler Override Control. Proceed to the respective sections of this help documentation for detailed information on how these processes are performed.

  
### Scheduler Override Control   


When the **Scheduler Override Control** option is enabled on a print definition, the print definition in context will be used in place of the specified print definition, when matched against the provided appointment details of the Scheduler Override Control. This drives the *Use Appointment Type Print Def if Exists* feature of the Print Chart functionality found in the Scheduler.

  
![](../print-definitions.assets/100002010000031C0000015DBDC561E22A14E731.png)  


When creating a print definition, an additional screen will load after clicking the **Save** button, as long as (at least) the Scheduler Override Control option is selected. This screen is a confirmation of the intent to establish the appointment details needing matched to override a print definition selection. Click the **Yes** button to begin adding the appointment details.

  
![](../print-definitions.assets/1000020100000221000000B7FE261061E6A3814E.png)  


Once clicked, the *Edit Print Definition* page will load. Update the **Override For The Following Appointments** section, as appropriate.

  
![](../print-definitions.assets/1000020100000306000001CC2B8A11FB69DC805E.png)  


{{% info %}}

It is not necessary to select something for each field.
{{% /info %}}

* <strong>Appt Type</strong>: This dropdown is used to select the overriding appointment type.
* <strong>Resource</strong>: Use this dropdown to select a specific overriding physician/resource, if any.
* <strong>Location</strong>: This dropdown is used to select the overriding location, if any.
* <strong>Priority</strong>: Use the freetext field to specify a priority.
* <strong>Add</strong>: Click this button to add the overriding parameter(s) for the print definition.

{{% tip %}}

It is possible to have multiple and various appointment details for each print definition. Simply click the Add button for all of the necessary overriding details, as appropriate.
{{% /tip %}}

To *remove* any overriding criteria from the list, simply click the minus button ( – ) next to the information needing removed.

  
![](../print-definitions.assets/10000201000002E8000001FAAC60D85FE86006B3.png)  


Once all of the additional information has been updated accordingly, click the **Save** button. If no additional details are needed, a confirmation message will display. Next, the sections and documents to be included in the print definition need to be defined. Skip to the [Creating Section(s) in a Print Definition](#2et92p0) section for more details.

  
## Edit a Print Definition  


To begin editing an existing print definition, users with the appropriate security permissions can simply navigate to the **Control Panel** from the left sidemenu and open the [Print Definitions editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions). This will display a list of all existing active print definitions in alphabetical order, which can be filtered or searched, as needed.

After locating the existing print definition needing edited, click the **Edit** link in the *Actions* column.

  
![](../print-definitions.assets/100002010000048F00000043BAFB5B2FED9442D2.png)  


The *Edit Print Definition* page will load, where any of the fields can be updated, as needed.

  
![](../print-definitions.assets/100002010000024E0000016A3097EBEF23ABB71C.png)  


{{% info %}}

For detailed information pertaining to each available field, go back to the **Create a Print Definition** section.
{{% /info %}}

* <strong>Show/Hide Allowed Users/Departments</strong>: Use this option to view/hide the list of allowed users/departments associated with the print definition in context. This allows edits and updates to be made to the list, as needed.
* <strong>Show/Hide Appt Override List</strong>: Use this option to view/hide the list of appointment override criteria associated with the print definition in context. This allows edits and updates to be made to the list, as needed.

When editing is completed, simply click the **Save** button. A confirmation page will display that the user *Successfully updated Print Definition.*

  
### Inactivate Existing Print Definition  


From the Print Definitions editor, users with the appropriate security permissions can inactivate print definitions that are no longer needed, but perhaps may be used in the future, or for duplicating.

After locating the existing print definition needing inactivated, click the **Edit** link in the *Actions* column. The *Edit Print Definition* page will load.

  
![](../print-definitions.assets/100002010000048F00000043BAFB5B2FED9442D2.png)  


Set the *Status* by selecting the **Inactive** radio button. This will retain the information of the print definition, though it will not be available for use to end users. Inactivated print definitions can be reactivated or modified for future use, if necessary. Click the **Save** button to save the changes.

  
![](../print-definitions.assets/10000201000002620000017B4295F96CA08C6457.png)  


  
## Delete Existing Print Definition  


If a print definition is no longer used and needs removed from the system, rather than simply inactivating the print definition, users with the appropriate security permissions may delete it from the system.

After navigating to the [Print Definitions editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions), simply locate the print definition needing removed, and click the **Delete** link in the *Actions* column. A confirmation page will load, emphasizing *ALL print sections and appt override details associated with this Print Def will also be deleted*. Click the **Yes** button to proceed, and a message of successful deletion will appear at the top of the page.

  
![](../print-definitions.assets/100002010000048F00000043127E3EB69A535736.png)  


  
## Creating Section(s) in a Print Definition   


Once a print definition has been created, all of the appropriate documents, forms, flowsheets, and the like must be configured as sections of the print definition, in order for those items to be printable (or faxable) from the print definition.

Navigate to the [Print Definitions editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions). All existing active print definitions will be displayed in alphabetical order. These can be filtered or searched, as needed. Locate the print definition needing a section added, and click the **Add Section** link in the *Actions* column.

  
![](../print-definitions.assets/100002010000048F00000043F95AD4B3CC0C33ED.png)  


The Add Print Section page will load. Fill in the appropriate fields to create the new section.

  
![](../print-definitions.assets/1000020100000387000001F8A4589AF3617E7382.png)  


**Section Name**: This field is intended for the name of the section/document being added to the print definition.

**Print Definition**: The name of the print definition in context will populate here.

**Section Type**: Use the dropdown to select the type of section (i.e., document, layout, form, prescription, chart tab, etc.) being added to the print definition. For example, if a form is being added for printing, select the E-Chart Form option; or if one or several existing documents in a chart need printed as part of the print definition, select the Document Type option. Once a section type has been specified, be sure to review the *Options* section, near the bottom of the page. Here, users specify the documents, forms, chart tab, or the like, as it relates to the selection for the Section Type field. When selecting specific document types, be sure to notate whether the document is being included (inclusive) or excluded (exclusive) from the print definition. In other words, if the Exclusive radio button is selected, the documents chosen would be excluded from printing when using the print definition.

{{% info %}}

A MIE Deployment Consultant can assist with any WHERE clauses needed for Conditional Queries, if necessary.
{{% /info %}}

**Paper Name**: Use this field to select the type of paper. This is an optional field and may be skipped. Select Plain, Coverpage, or Default.

**Duplex**: This field should be set to **No**. Many printers are equipped with duplex functionality, which allows two-sided printing. In order to utilize duplex printing, setup must be completed by an MIE representative. Once setup is complete, this setting may be changed to Yes.

* <strong>Yes - Normal</strong>: This setting indicates normal duplex printing, meaning content will print on the front and back of a page using the same orientation.
* <strong>Yes - Tumble</strong>: This setting indicates tumble duplex printing, meaning content will print on the front and back of a page using inverted orientation, where the back page will be rotated 180 degrees from the original position of the front page, producing a <em>tumble</em> effect.

**Print Order**: Using the dropdowns, establish the print order of the section.

**Eject Previous Page**: When checked, this section will start on a new page. When the section with this setting enabled starts to render, any previous section will eject, allowing the printing section to start on a new page.

**Insurance Plans**: When checked, the print definition section in context will print *only* when one of the specified insurances is listed in the patient chart. When the **Use Insurance Plan Matching** is selected, users must also select the **View/Hide Insurance Plan Select Box**. Using the provided autocomplete field, specify any and all insurance plans that should be the limiting criteria for the print definition section. To add, begin typing the name of the plan, and select it using the mouse or the Tab or Enter keys. To *remove* any plans from the list, simply click the minus button ( – ) next to the plan needing removed. If the Insurance Plan Matching is ever no longer needed, simply edit the print definition section and uncheck the option. All listed insurances will be retained, in case this option is re-enabled at a later date..

  
![](../print-definitions.assets/100002010000043D0000006D4F4228AC4D788E5A.png)  


**Use Page Header**: By default, this feature is not enable. The Use Page Header feature is intended for print definitions that require specific information to appear at the top of the respective pages. If there is a business need, MIE can create such a page header layout and enable this option, so the layout can be selected from the dropdown and applied to the print definition or section, as needed.

**Status**: By default, the status is set to Active. To inactivate a section, use the Inactive radio button. This will inactivate the section and retain the information for potential future use.

**TIFF Headers off**: When checked, patient information (patient and document header) will not be displayed on TIFF documents (i.e., forms) that are printed/faxed from the print definition in context.

**WORD Headers off**: When checked, patient information (patient and document header) will not be displayed on Word documents that are printed/faxed from the print definition in context.

**TEXT Headers off**: When checked, patient information (patient and document header) will not be displayed on text documents that are printed/faxed from the print definition in context.

**HTML Headers off**: When checked, patient information (patient and document header) will not be displayed on HTML documents that are printed/faxed from the print definition in context.

**One Document per Page**: When checked, each document of the print definition will be printed/faxed as an individual page, or as its own page. For example, text entries (e.g., Nurse Notes, Tasks, etc.) are typically short, and when printed/faxed, they will be grouped together onto a page, according to what will fit on the page. Enabling this option would ensure each note, task, or overall content of the print definition be printed/faxed as individual pages.

**Documents since last encounter**: When selected, the print definition/section in context will only retrieve and print/fax documents created since the last encounter.

**Render on Background**: This feature is enabled by MIE and requires setup. It is typically used for printing encounter forms. Clients may use this feature to have plain text data overlaid on forms. For example, data from the PM system will come into the {{% system-name %}} system as a text document, and that data will then be rendered on a form with barcodes and can be used as a document.

**Color**: Selecting *Yes* will print/fax the section in context in color.

**Options**: This section will display *N/A* if a standard Section Type is selected (no options). When selecting E-Chart Form, E-Chart Tab, or Document Type as the Section Type, this section will display a dropdown or list where the appropriate form, tab, or document(s) can be selected.

Once all of the fields have been addressed as needed, scroll to the bottom of the page and click the **Save** button. Repeat the previous steps to continue adding sections to the print definition. Once completed, all sections attributed to a print definition will print/fax according to the established criteria, when the print definition is selected and used by users.

  
### Sections of a Print Definition  


To view the sections of a specific print definition, first navigate to the [Print Definitions editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions). This will display all of the existing print definitions in alphabetical order. Locate the print definition to which the necessary print section(s) being viewed/edited belongs. Click the *Name* of the print definition.

  
![](../print-definitions.assets/10000201000004AF00000069F1AF81C009E3661C.png)  


Once clicked, the print sections attributed to the print definition will be listed.

  
![](../print-definitions.assets/10000201000004BB0000008B2A16CB873B7C4D7F.png)  


  
#### Edit a Section  


From the *Print Sections* page, users with the appropriate security permissions have the ability to edit each print section, as needed. Locate and click the **Edit** link in the *Actions* column.

{{% tip %}}

Use the Edit link to mark a print section as *Inactive*, as needed. This allows existing sections to be inactivated, rather than deleted and permanently removed from the system.
{{% /tip %}}

  
![](../print-definitions.assets/10000201000004BB0000008BC26D9B85A0B19BC2.png)  


When editing a section, users may change any of the section fields.

  
![](../print-definitions.assets/10000000000002670000016CE5A0FFD2DD4B3355.png)  


When editing is completed, simply click the **Save** button. A confirmation page will display that the user *Successfully updated Print Definition.*

  
#### Delete a Section  


From the *Print Sections* page, users with the appropriate security permissions have the ability to delete each print section, as needed. Locate and click the **Delete** link in the *Actions* column.

{{% tip %}}

Use the Edit link to mark a print section as *Inactive*, as needed. This allows existing sections to be inactivated, rather than deleted and permanently removed from the system.
{{% /tip %}}

  
![](../print-definitions.assets/10000201000004BB0000008BC26D9B85A0B19BC2.png)  


When deleting a print section, users will need to verify that the print section is to be deleted. Select Yes or No.

  
![](../print-definitions.assets/10000201000001D1000000602B8A23F512AC40C9.png)  


Once completed, a confirmation will display that the user *Successfully deleted print section from print definition.*

  
## Duplicate a Print Definition  


As a way to quickly create a print definition without having to start from scratch, the {{% system-name %}} system provides an ability for users to duplicate existing print definitions. This will duplicate every aspect of the original print definition, eliminating the need to address every step of the creation process. This is particularly helpful when working on a print definition that will closely resemble an existing one.

To begin, first navigate to the [Print Definitions editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions) of the Control Panel. All existing active print definitions will be displayed in alphabetical order. Locate the existing print definition intended to be duplicated, and click the **Duplicate** link in the *Actions* column.

  
![](../print-definitions.assets/100002010000048F0000004339BE7B343B59AF80.png)  


Once clicked, the page will load with a **New Print Definition Name** field. Simply provide the name of the *new* print definition (cannot be the same as the original), and click the **Confirm** button.

  
![](../print-definitions.assets/1000000000000179000000555A1C14F266F2B3A7.png)  


After confirming the duplication, the page will refresh with the status displayed at the top of the page and the newly created print definition shown in the list. All print sections and associated details will be available within the new print definition created.

  
![](../print-definitions.assets/100000000000024800000047D9163EF1A0036F2B.png)  


Once the print definition has been duplicated, users may go into the print definition and sections to update and change the criteria, as needed.
