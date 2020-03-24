---
title: "E-Orders - Add Order Requests"
date: 2020-03-13T19:22:58.979Z
url: "e-orders-add-order-requests.md"
author: Jeremia Ploor
id: 1Kn-0evj_fBShe8r-4SO_JRo2CmY_54vEt4VTxlQLZ50
source: https://drive.google.com/open?id=1Kn-0evj_fBShe8r-4SO_JRo2CmY_54vEt4VTxlQLZ50
menu:
    main:
        name: "E-Orders - Add Order Requests"
        identifier: "1Kn-0evj_fBShe8r-4SO_JRo2CmY_54vEt4VTxlQLZ50"
        parent: "103elDMKyCQlA8uZjycHzAZ90L6BR3FTzxRLYOKrgpo8"
        weight: 1910
---
You can create orders for a patient outside of being in an *encounter exam*.

Click *E-Chart* on the left sidebar menu.

Search for patient in *E-Chart* and open the patient's file.

Click the *Orders* or *E-Orders* chart tab **or** the Add Order link when in a patient's chart.

It most likely will default and open to the ADD ORDER module. This means it automatically would default to the screen that allows you to add an order for the patient. The other ‘view' for this module that it may default to is the RECENT orders where it lists completed and incomplete orders for the patient. You can change this default action view in MY SETTINGS. (See description of MY SETTINGS default action for Orders on the last page of this document.)

## Add Order

After you are in the orders tab or have clicked the link Add Order from somewhere in {{% system-name %}} , your default action may be set to *add order*. That means when you have clicked the order tab or the add orders link, then the ADD ORDER screen will appear for this patient. Otherwise, most recent orders summary will open.

![](external_files/6acb68512d3bdf4427aa275afc5a072c.png)

If you are not opened to the add orders screen, click Add from the top right of the screen when in the orders module.

![](external_files/891e99407cf23ee665dcc7220179a783.png)

### PIN Authenticate

You can have your orders module to require a PIN. This only allows users with a designated PIN to create orders. This is a system setting that can be turned on.

![](external_files/c693ec24a9188ba60f9f948f3b95afda.png)

When you click *add* to add an order for a patient, you would then see at the beginning of the order the field **PIN Authenticate**. This means your practice has requested that users enter their PIN (personal identification number) to access and add orders for patients. If you see this field, you cannot create or edit an order for the patient until you enter your PIN number first. This gives you access to add or edit an order then and others cannot.

![](external_files/44ab1396cc0a98e8466edcfcec02a6df.png)

Your PIN number must be entered in your username screen or in the MY SETTINGS tab screen for your username. It is the field called PIN Vericode. The PIN number entered in this field is what you type in the orders PIN Authenticate field to gain access.

![](external_files/523f4297d3f1bda2873e570092d0af50.png)

**Or from MY SETTINGS:**

![](external_files/f6b3a283374ffde91d7d2b935b1f08b1.png)

After you have entered your PIN Authenticate number (if applicable) in the orders module, you now complete the fields to create/add an order for this patient.

![](external_files/2f028a99850009f3cc0ccc4713d5170b.png)

* <strong>MR# and Name</strong> will automatically be filled out since you are in the specific patient's e-chart. The MR# dropdown defaults to the MR number in respect to the USERS "starting partition" preference default partition if the patient has an MR number with that partition
* <strong>Standing Order Frequency:</strong> Type in how often to do the order, example: to do this standing order every 3 days or every 1 month, etc. In the first field, type the number, then in the 2^nd field use the drop-down to select the frequency unit (ex: days, months, etc) If it isn't a standing order, leave as 0 (zero) days.

![](external_files/0599c93f69ecb3216ee24c1276c7074a.png)

* <strong>Schedule Lab In:</strong> You can use the drop-down arrow to select an automated selection if the date for the order is not a specific date (more of a general time frame). You can also free-type in the free-text field next to it any other general date time frame, etc. You can also get date/time specific by going to the next field of Scheduled Date.

Or

* <strong>Scheduled Date:</strong> You can type in the specific date (month/date/year) that this order is to be done on. Your MIE Implementer can also change a system setting to make this <em>Scheduled Date</em> a required field.
* <strong>Recurrence:</strong> If this is a standing order, you can free type the amount of recurrences in this field if a standing order is to be done a specific number of times. Standing orders that should only be completed a finite number of times are then closed when that final order has been completed.
* <strong>Location:</strong> Select the location that this order was generated for/from (optional field). The layout can be modified by MIE so that location of this Make Order feature shows all locations in your system, only outside locations or no outside locations. The setting is -1 for all, 1 for just outside, 0 for no outside. Please contact your MIE representative for this change. Your MIE Implementer can also change the system setting to make this a required field. This field also respects the orders location default you have set for yourself in MY SETTINGS.
* <strong>Facility:</strong> This is where the order will be sent if you have a lab or other interface set up where your e-orders get automatically sent to a facility via interface to the facility (ex: LabCorp, Quest etc). The <em>My Settings</em> preference "Preferred Facility" will default here, but can always select a specific performing facility in the drop-down. Otherwise, leave this blank and skip this field if you don't have any directional interface to lab/imaging facilities set up.
* <strong>Refer to:</strong> Ability to document whom you are referring this patient to via the order (mainly used when making Referral Orders). This <em>Refer To</em> field is a user autocomplete that only shows user choices that are in departments set via the system setting: <em>Orders, Settings, Refer To Departments</em>. If system is set up for {{% system-name %}} , the Refer To field will be an auto-complete of referable entity PO/Provider charts from the EPM module. This is via system setting <em>System, External Provider, Use Chart</em> as enabled. Then it looks at system setting <em>System, External Provider, Chart Types</em>. The Refer To auto-complete field is further limited by active charts and charts flagged as <em>referable entity=yes</em> in the chart. Contact your MIE Implementer to have that set.
* <strong>Ordering Physician:</strong> This will automatically insert the name of the physician that you are defaulted to in MY SETTINGS for Ordering Physician. (See description of MY SETTINGS default action for Orders on the last page of this document.) To select a different Ordering Physician, simply use the drop-down arrow to select the physician that is ordering this. If the user's default ordering physician is set to ‘nothing' in <em>my settings</em> preference, then the name of the last physician they used to create an order will populate. _Note: If system setting "Orders", "Settings", "Ignore Recent Documents for Ordering Physician" is s_et to value=1 to ignore the recent documents last authored, then when going to "add order" this ordering physician field to not prepopulate with that last remembered you used in recent documents.
* <strong>Status:</strong> not currently used. Leave blank.
* <strong>Diagnosis:</strong> This field will display all diagnoses from the Assessment (Impression) section. If there are fewer conditions in the Assessment section than specified in the system setting: <em>Orders, Defaults, Number of patient conditions</em>, the remainder will be pulled from the patient's active conditions that are not already in the Assessment section. You can delete the diagnosis that appears by clicking on the grey minus button. You can also add another diagnosis in the field below that. When you start typing the name of the diagnosis, a series of auto-complete choices will appear and you can choose from there. You can also start typing the ICD-9 code and a series of auto-complete choices will appear and you can choose from there. To add multiple diagnosis to this order, simply search and select the diagnosis after you select from the auto-complete choices and it will automatically insert it in the field above it. To delete one, click the minus button next to the diagnosis. MIE can also program a diagnosis picklist here if you wish to have a pop-up window of most common diagnoses for this particular e-order set. When you are done, simply go to the next tab called Patient Instructions.
* <strong>Bill Type:</strong> Order requests can specify a bill type. If system setting <em>Require Bill Type</em> is enabled, this field will appear. There are four options: The default is None (unspecified), Self, Client, and Third Party. The system setting (Orders, Settings, Require Bill Type) will control whether this field is required or not on the order. If this setting is on (value set to 1), and ‘None' is chosen in the bill type dropdown, the user will be asked to choose a different option.

![](external_files/25617c3cc5436ca2c7b0d5bdb3daaff0.png)

* <strong>CC Physcians:</strong> Your MIE Implementer can enable a layout tag to show a <em>CC Physicians</em> field if you need ability to send out multiple CC physicians on an order. The auto-complete of choices pulls from users who are tied to the department(s) listed in the system setting <em>Orders, Settings, Refer To Departments</em>. Contact your MIE Implementer to have that set. If this setting is empty, it falls back to user choices whose role is Referring Physician. This CC field/user selected shows on the view/document order also.

![](external_files/0a86e90ef6cdfed4c4d5d69046839046.png)

* <strong>Patient Instructions:</strong> Free type any instructions for the patient regarding this order. These instructions may or may not print on the order sheet, depending on how your practice decided to layout the printable order sheet.
* <strong>Comments:</strong> Free type any comments regarding this order. It will print on the order sheet and will show up in the Comments category when looking at this patient's recent orders from the orders screen view.
* <strong>Set Name:</strong> Using the drop-down arrow, select the name of the set/Order that you want to create/add for this patient. When you make the selection, the items/order choices will appear below that on the screen with check-mark boxes.
* <strong>Insurance:</strong> If your practice has insurance selections turned on by MIE, then use the drop-down to select the insurance that this order will be sent to (usually primary insurance).

Continue the order by check-marking the specific items/orders you wish to have done for this patient within this *set name* (order name).

* <strong>Additional:</strong> This auto-complete field is available if system setting Number Order Autocompletes is enabled.

![](external_files/551ecf3acc7e2b692b36c876e8cbabc7.png)

It will show an auto-complete field named *Additional* where a user can key in an additional order that isn't found on the pre-templated Order set checkmark picklist. The autocomplete "additional" field is pointed to *all* existing order items in the system. It is not a free text.

* <strong>Set Name:</strong> this is the name of the order picklist you are currently viewing. Different selectable order items display on the screen based on what main picklist you are working in. You can use the drop-down to select a different picklist.

The system setting *E-Chart*, *Order Picklists*, *Restrict Sets* can be enabled to restrict order picklists from being viewed and used by department. By default restricting sets is disabled. If enabled, this system setting indicates (by setting the value) which order picklists to restrict in the system. For a picklist to be accessed by specific departments but restricted from others, from Access Control make a department named the specific order picklist exactly (followed by any other words) and tag users to that department to be able to see/use the restricted picklist. The picklist is then restricted to all other users that aren't part of that dept that matches the picklist name.

![](external_files/88b7bdca8d358221ba3649e81c9eef17.png)

Under the Set Name field of the Order Request screen, are the selectable order items that correspond with the set name (picklist) you are working in.

![](external_files/27a48f59394ab8eefcdca0c0d5c21e7f.png)

Any order item that you check-mark and it has a blank field next to it, after you check-mark it you may need to enter more information needed for that item/order by free text typing in that field to complete that item/order.

When done, at the top of the Order Request screen simply click REQUEST ORDERS button.

![](external_files/f9fe106124ef69c56bc8e3e1617f6453.png)

It may then show a confirmation that you select the correct diagnosis for the order which you entered if your practice requires that field or any other required fields missing. There are several fields that can be set as "required" for your practice workflow.

After selecting the specific diagnosis each order item pertains to, click FINISH button to finish. Or you can click the BACK button to edit the order and get back to this screen after editing. Some order items can be tagged to certain ICD-9 codes and are restricted to those diagnosis, etc. To set those up, contact your MIE Implementer.

This is a ‘diagnosis confirmation' screen that can be turned off and doesn't need to be turned on for use in your system. Again this is one of many fields that can be set to be "required". If your practice wishes to have any turned off, please contact your MIE Implementer.

![](external_files/8a9648a6ff0a5458ab9cd967ec345f1f.png)

{{% note %}}

If there is only *one* diagnosis entered in for the e-order (when the e-order was entered/created) it will default this ‘confirmation screen' to have that diagnosis selected in the confirmation box. It assumes that is the confirmed diagnosis selection for the order items since there's only one diagnosis entered for the patient's e-order. If there is more than one diagnosis entered in the patient's e-order, then this ‘confirmation screen' will display the note to *select a diagnosis* from the drop-down for each order item. Select the appropriate diagnosis entered for the patient that is relevant for that order item(s).

{{% /note %}}




After requesting the orders, it sets the status of the orders as pending or incomplete. To complete an order, see instructions on the following pages in this help document.

It may automatically take you to the print module to print this order if you have the system setting to automatically take you to the print job screen.

![](external_files/a961f781b8f9ff86edbbe9afd912c1b5.png)

Otherwise, after you click FINISH, it will refresh to the screen showing the order and say the order was successfully inserted.

A Print ABN hyperlink can be programmed to display, reminding users that an Advance Beneficiary Notice (ABN) form may be needed for a patient. An ABN form is required for all patients who have Medicare Part B insurance, for certain Lab Orders, or not at all. There is a system setting (Orders,Settings,Show ABN Link for all patients) that is off by default. However, if the value of this system setting is set to 1 for the system you are working in, a Print ABN link will appear on stored order documents on all orders for Medicare B patients (As defined by the PQRS system setting) and no link is shown for all other patients.

![](external_files/29535929720682f90eb917cfb67f98aa.png)

If the value of this system setting is set to 2 for the system you are working in, the Print ABN link will be shown on the stored order documents for all patients regardless of Medicare B status or CPT requirements.

![](external_files/f01b797d82a704fb3d2603ff6ae906fd.png)

Then to print, click PRINT/FAX ORDER.

![](external_files/04cd1aa8b12c5a90d112132b88b262a9.png)

When you click Print/Fax Order, it will take you through the printing module to print.

After you print, X out of the print module view.

You will then still be in the patient's orders module.

![](external_files/dca3589c91c712ec7e13a1bed67c6de3.png)

You can complete another order for this patient by clicking Add from this e-orders module/tab or you can go to E-Chart and work elsewhere, etc.

## Electronic Orders Submitted to Labs

If your practice is set up with an orders interface with a lab vendor to submit lab orders electronically to a lab facility (ex: LabCorp), the lab's location account number for that specific location must be entered in the location tab of control tab.  When we send the order electronically to the lab that account number for the location gets sent with it.

![](external_files/bbd66b5845e055049cef9183a934031d.png)

## Labels

If your system is set up to print a label from the e-orders submission, after saving an order and the summary page is displayed, if the system setting "Auto Print on Summary" is turned on, it will also pop up the window to print any configured labels for the order.

Using the *Print* window that opens, select your printer and click OK to print. Once this software is installed and the printer has been chosen, when you click the label link provided at any future time, it will just automatically print that label to that printer.

![](external_files/b4d3aed0191a97d828840fcd5fe37d32.png)

To reprint a label, click the label link provided in any listing or after successfully inserting the order.

It will automatically print the label to your printer.

![](external_files/034e83e45304f3b9479052bbe910fd5d.png)

Labels can also be performed from the list of standing orders for the patient (in orders module)

![](external_files/c524cc8a81893d03090dc8e8d19755b5.png)

Or from the "view" of the encounter at the very bottom of the order was done by *"Create xxx Order*" method from within the encounter.

![](external_files/4e209d4d4302961c7fca1361dfef04f8.png)

