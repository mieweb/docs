---
id: '1vh7UsgREWhLDIYSS0IXhc9Z_2Rnzi1uplvp6c8ywc7o'
title: 'E-Orders Chart Tab'
date: '2025-08-06T18:04:21.491Z'
version: 214
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:LATIDNHR'
source: 'https://drive.google.com/open?id=1vh7UsgREWhLDIYSS0IXhc9Z_2Rnzi1uplvp6c8ywc7o'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
You can create orders for a patient outside of being in an *encounter exam*.

Click *E-Chart* on the left sidebar menu.

Search for a patient in *E-Chart* and open the patient's file.

Click the *Order Requests* chart tab from the Medical Record tab.

The Order Requests module shows the recent completed and incomplete orders for the patient.

## Add Order

After you are in the orders tab or have clicked the link Add Order from somewhere in {{% system-name %}} , your default action may be set to *add order*. That means when you have clicked the order tab or the add orders link, then the ADD ORDER screen will appear for this patient. Otherwise, the most recent orders summary will open.

![](../e-orders-chart-tab.assets/a5b2bf9d6f9d553a39cedb80aff2eb9d.png)

If you are not taken to the add orders screen, click Add Order from the top right of the screen when in the orders module.

![](../e-orders-chart-tab.assets/d4ef148c05eecc33060ba005c5745489.png)

### PIN Authenticate

You can have your orders module to require a PIN. This only allows users with a designated PIN to create orders. This is a system setting that can be turned on.

![](../e-orders-chart-tab.assets/aa2a06c4c81304f8eeb446d3b7e3304e.png)

When you click add to add an order for a patient, you would then see at the beginning of the order the field **PIN Authenticate**. This means your practice has requested that users enter their PIN (personal identification number) to access and add orders for patients. If you see this field, you cannot create or edit an order for the patient until you enter your PIN number first. This gives you access to add or edit an order then and others cannot.

![](../e-orders-chart-tab.assets/c86c9af0e158c6aae754f2a885b4e0aa.png)

Your PIN number must be entered in your username screen or in the MY SETTINGS tab screen for your username. It is the field called PIN Vericode. The PIN number entered in this field is what you type in the orders PIN Authenticate field to gain access.

![](../e-orders-chart-tab.assets/7fbcec5ca4bb21f24f68ddc16d60f4f5.png)

**Or from MY SETTINGS:**

![](../e-orders-chart-tab.assets/da407d35a080fc15efbff97af33e8fda.png)

After you have entered your PIN Authenticate number (if applicable) in the orders module, you now complete the fields to create/add an order for this patient.

### Order Requisition

![](../e-orders-chart-tab.assets/67d812ab8f3d7b6d16be5fc9835ae67d.png)

* <strong>Ordering Provider:</strong> This will automatically insert the name of the physician that you are defaulted to in MY SETTINGS for Ordering Provider. (See description of MY SETTINGS default action for Orders on the last page of this document.) To select a different Ordering Physician, simply use the drop-down arrow to select the physician that is ordering this. If the user's default ordering physician is set to ‘nothing' in <em>my settings</em> preference, then the name of the last physician they used to create an order will populate. Note: If system setting "Orders", "Settings", "Ignore Recent Documents for Ordering Physician" is set to "Enabled" to ignore the recent documents last authored, then when going to "add order" this ordering physician field to not prepopulate with that last remembered you used in recent documents.
* <strong>Status:</strong> The default is "Pending".
* <strong>Location:</strong> Select the location that this order is to be completed at (optional field). The layout can be modified by MIE so that location of this Make Order feature shows all locations in your system, only outside locations or no outside locations. The setting is -1 for all, 1 for just outside, 0 for no outside. Please contact your MIE representative for this change. Your MIE Implementer can also change the system setting to make this a required field. This field also respects the orders location default you have set for yourself in MY SETTINGS.
* <strong>Save As:</strong> This will save the order as the selected document type.
* <strong>MR# and Name</strong> will automatically be filled out since you are in the specific patient's e-chart. The MR# dropdown defaults to the MR number in respect to the USERS "starting partition" preference default partition if the patient has an MR number with that partition
* <strong>Schedule In:</strong> You can use the drop-down arrow to select an automated selection if the date for the order is not a specific date (more of a general time frame). You can also free-type in the free-text field next to it any other general date time frame, etc. You can also get date/time specific by going to the next field of Scheduled Date.
* <strong>Scheduled Date:</strong> You can type in the specific date (month/date/year) that this order is to be done on. Your MIE Implementer can also change a system setting to make this <em>Scheduled Date</em> a required field.
* <strong>Priority:</strong> You can set the priority of the order in this field.
* <strong>Collection Date:</strong> Some orders may require a collection date, which is the date the specimen was collected.
* <strong>Refer to:</strong> Ability to document whom you are referring this patient to via the order (mainly used when making Referral Orders). This <em>Refer To</em> field is a user autocomplete that only shows user choices that are in departments set via the system setting: <em>Orders, Settings, Refer To Departments</em>. If system is set up for {{% system-name %}} , the Refer To field will be an auto-complete of referable entity PO/Provider charts from the EPM module. This is via system setting <em>System, External Provider, Use Chart</em> as enabled. Then it looks at system setting <em>System, External Provider, Chart Types</em>. The Refer To auto-complete field is further limited by active charts and charts flagged as <em>referable entity=yes</em> in the chart. Contact your MIE Implementer to have that set.
* <strong>Facility:</strong> This is where the order will be sent if you have a lab or other interface set up where your e-orders get automatically sent to a facility via interface to the facility (ex: LabCorp, Quest etc). The <em>My Settings</em> preference "Preferred Facility" will default here, but can always select a specific performing facility in the drop-down. Otherwise, leave this blank and skip this field if you don't have any directional interface to lab/imaging facilities set up.
* <strong>External ID:</strong> This field can be used to add an external ID for an order.
* <strong>Items:</strong> This section includes a list of outstanding Due List order items for easy access to add to the order ensure no orders are missed. Picklists or the autocomplete can be used to select the order items.

The system setting *E-Chart*, *Order Picklists*, *Restrict Sets* can be enabled to restrict order picklists from being viewed and used by department. By default restricting sets is disabled. If enabled, this system setting indicates (by setting the value) which order picklists to restrict in the system. For a picklist to be accessed by specific departments but restricted from others, from Access Control make a department named the specific order picklist exactly (followed by any other words) and tag users to that department to be able to see/use the restricted picklist. The picklist is then restricted to all other users that aren't part of that department that matches the picklist name.

![](../e-orders-chart-tab.assets/18fbc311d2e791ca2eeed64d5ef7cdfd.png)

Next to the Item field of the Order Request screen, click the Picklist icon to select order items that correspond with the set name (picklist) you are working in.

![](../e-orders-chart-tab.assets/8c62ff855ac706026b7931099fed6959.png)

Any order item that you check-mark and it has a blank field next to it, after you check-mark it you may need to enter more information needed for that item/order by free text typing in that field to complete that item/order.

* <strong>Reason:</strong> This field will display all diagnoses from the Assessment (Impression) section. If there are fewer conditions in the Assessment section than specified in the system setting: <em>Orders, Defaults, Number of patient conditions</em>, the remainder will be pulled from the patient's active conditions that are not already in the Assessment section. You can delete the diagnosis that appears by clicking on the grey minus button. You can also add another diagnosis in the field below that. When you start typing the name of the diagnosis, a series of auto-complete choices will appear and you can choose from there. You can also start typing the ICD-9 code and a series of auto-complete choices will appear and you can choose from there. To add multiple diagnoses to this order, simply search and select the diagnosis after you select from the auto-complete choices and it will automatically insert it in the field above it. To delete one, click the minus button next to the diagnosis. MIE can also program a diagnosis picklist here if you wish to have a pop-up window of most common diagnoses for this particular e-order set. When you are done, simply go to the next tab called Patient Instructions.

![](../e-orders-chart-tab.assets/cae14ac9d2f53f41d9f63cd7e281374f.png)

* <strong>CC:</strong> This field is used if you need the ability to CC physicians on an order. The auto-complete of choices pulls from users who are tied to the department(s) listed in the system setting <em>Orders, Settings, Refer To Departments</em>. Contact your MIE Implementer to have that set. If this setting is empty, it falls back to user choices whose role is Referring Physician. This CC field/user selected shows on the view/document order also.
* <strong>Comments:</strong> Free type any comments regarding this order. It will print on the order sheet and will show up in the Comments category when looking at this patient's recent orders from the orders screen view.
* <strong>Bill Type:</strong> Order requests can specify a bill type. If system setting <em>Require Bill Type</em> is enabled, this field will appear. There are four options: The default is None (unspecified), Self, Client, and Third Party. The system setting (Orders, Settings, Require Bill Type) will control whether this field is required or not on the order. If this setting is on (value set to 1), and ‘None' is chosen in the bill type dropdown, the user will be asked to choose a different option.
* <strong>Payer:</strong> You can set the payer for the order in this field.

* <strong>Instructions:</strong> Free type any instructions for the patient regarding this order. These instructions may or may not print on the order sheet, depending on how your practice decided to layout the printable order sheet.

When done, simply click the SAVE button.

![](../e-orders-chart-tab.assets/41bbac067bc9f505233c0e53c6937336.png)

After requesting the orders, it sets the status of the orders as pending or incomplete. To complete an order, see instructions on the following pages in this help document.

It may automatically take you to the print module to print this order if you have the system setting to automatically take you to the print job screen.

![](../e-orders-chart-tab.assets/492b76b085eec8644ddc2c4aec74916b.png)

Otherwise, after you click SAVE, it will refresh to the order document and you can print from the Print hyperlink.

![](../e-orders-chart-tab.assets/b36ada879c0002c155fc26275b7ab1fb.png)

When you click Print, it will take you through the printing module to print.

![](../e-orders-chart-tab.assets/95043a2421449852767b4f44bb17c83e.png)

You can complete another order for this patient by clicking Add Order from the Order Requests tab or you can go to E-Chart and work elsewhere, etc.

## Electronic Orders Submitted to Labs

If your practice is set up with an orders interface with a lab vendor to submit lab orders electronically to a lab facility (ex: LabCorp), the lab's location account number for that specific location must be entered in the Location Manager tab of the Control Panel tab. When we send the order electronically to the lab that account number for the location gets sent with it.

![](../e-orders-chart-tab.assets/ab248274c306250f0d87ebd7743c536e.png)

## Labels

If your system is set up to print a label from the e-orders submission, after saving an order and the summary page is displayed, if the system setting "Auto Print on Summary" is turned on, it will also pop up the window to print any configured labels for the order.

Using the *Print* window that opens, select your printer and click Print. Once this software is installed and the printer has been chosen, when you click the label link provided at any future time, it will just automatically print that label to that printer.

![](../e-orders-chart-tab.assets/e5a6fdac99a4cde764d7248dc5e5a4c7.png)

To reprint a label, click the label link provided in any listing or after successfully inserting the order.

Labels can also be performed from the list of standing orders for the patient (in order requests module)

![](../e-orders-chart-tab.assets/589021353c7d7d8c048bb64f48490ac9.png)

Or from the "view" of the encounter at the very bottom of the order was done by *"Create xxx Order*" method from within the encounter.

![](../e-orders-chart-tab.assets/8448f64e259b491a60a73cac9607f01b.png)

## Learning Management System

To learn more about the E-Orders Chart Tab, follow the link below to the Learning Management System course:

* [Order and Result Management](https://mie.talentlms.com/shared/start/key:LATIDNHR)
