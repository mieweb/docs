---
id: '1kEF-RWvZOJqe2pD7lr3XpwNbP73D0X8SXsRjGm4T-SA'
title: 'Make Order Feature - Encounter Plan Section'
date: '2021-12-10T21:03:10.965Z'
version: 146
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1kEF-RWvZOJqe2pD7lr3XpwNbP73D0X8SXsRjGm4T-SA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
4The ‘plan' area of an encounter allows the physician/user to create orders for the patient. The below explains how a physician/user enters items into the plan area by using Make Order link or Create Order link in the plan area and how it renders a complete order to print/fax right from the encounters view. This forces the physician/user to create the order right from the encounter and eliminates having to go to unordered orders or the patient's chart to render the order that the physician created in the encounter. You can ask MIE to remove the list option completely and only use the Make / Create Order feature or have both options. Only the make / create order feature will create the order right there in the encounter though. Using the Create xx Order link bypasses the unordered orders and inserts the order as a document directly into the patient's chart. If using the list link or auto-complete fields in the plan orders area, it creates an unordered order (see other help documentation titled *Encounters Plan Section-Unordered Orders.pdf*).

If the user/physician uses list (and not make / create order) or the auto-complete fields in the plan area, it creates an unordered order which the front/check out staff uses to create the orders before the patient leaves. See separate help documentation named *Encounters Plan Section-Unordered Orders.pdf* for this workflow option.

## Make Order Link/Create Order Link

Your plan section in encounters can be programmed to have a Make Order feature link or a Create Order link. This gives the physician/user the ability to make and create an order right from the plan and then it is ready to print/fax in the encounter view or print all. Using the make /create order link bypasses the unordered orders and inserts the order into the patient's chart. It is then available in the encounter PRINT ALL option to print these orders for the patient.

![](../make-order-feature-encounter-plan-section.assets/de3de24467149c34a7c0f57a9cb52e3e.png)

![](../make-order-feature-encounter-plan-section.assets/772abc92c5b8689db38a087f19c3124a.png)

![](../make-order-feature-encounter-plan-section.assets/b38cb49aaffa5e72b3151ba980e04228.png)

To create an order in the plan section, the user must **first click Make / Create xxx Order** link from the specific category they want to make an order from. If you click list first and check-mark items—it will render it as an unordered order (see separate help documentation). You can have the ‘list' links removed to force creation of order from encounter.

To make an order right from the encounter, click Make / Create Order first in the specific section. When you click Make / Create xxx Order, it will open up the *Start Order Request* dialogue screen.

![](../make-order-feature-encounter-plan-section.assets/59b106a96c146af4c5a7b3d83a24b80c.png)

In the *Start Order Request* screen, you must select and enter the fields:

* <strong>Location:</strong> Select the location that this order is to be completed at (optional field). The layout can be modified by MIE so that location of this <em>Make Order</em> feature shows all locations in your system, only outside locations or no outside locations. The setting is -1 for all, 1 for just outside, 0 for no outside. Please contact your MIE representative for this change. Your MIE Implementer can also change the system setting to make this a required field. This field also respects the orders location default you have set for yourself in MY SETTINGS.
* <strong>Facility:</strong> This is where the order will be sent if you have a lab or other interface set up where your e-orders get automatically sent to a facility via interface to the facility (ex: LabCorp, Quest etc). The <em>My Settings</em> preference "Preferred Facility" will default here, but can always select a specific performing facility in the drop-down. Otherwise, leave this blank and skip this field if you don't have any directional interface to lab/imaging facilities set up.
* <strong>Refer To:</strong> Ability to document whom you are referring this patient to via the order (mainly used when making Referral Orders). This <em>Refer To</em> field is a user autocomplete that only shows user choices whose <strong>user role</strong> is "referring physician" (not department but user role <em>aka</em> Def User Role in their username screen). Creating an order request in an encounter also supports using charts for referring physicians if the (System, External Provider, Use charts) setting is enabled.
* <strong>Ordering Physician:</strong> Select the Ordering Physician by using the drop-down arrow to select the physician that is ordering this. Your MIE Implementer can also change the system setting to make this a required field. This ordering physician field for the order via the encounter defaults to populate the same name as the performing provider on the encounter. If no performing provider has been set on the encounter, the ordering physician defaults to the user's MY SETTINGS preference of ‘Ordering Physician' if that has been set.
* <strong>Order Frequency:</strong> Type in how often to do the order, example: to do this standing order every 3 days or every 1 month, etc. If it isn't a standing order, leave as 0 (zero) days.
* <strong>Schedule Lab In:</strong> You can use the drop-down arrow to select an automated selection if the date for the order is not a specific date (more of a general time frame). You can also free-type in the free-text field next to it any other general date time frame, etc.
* <strong>Diagnosis:</strong> The 4 most recent conditions the patient has will appear here. There is a system setting you can ask your MIE Implementer to set to add more or less to this list.

![](../make-order-feature-encounter-plan-section.assets/a252210b33c6629a3bf1d48e63eb286c.png)

* By default it is set to 4. You can delete the diagnosis that appears by clicking on the grey minus button. You can also add another diagnosis in the field below that. When you start typing the name of the diagnosis, a series of auto-complete choices will appear and you can choose from there. You can also start typing the ICD-9 code and a series of auto-complete choices will appear and you can choose from there. To add multiple diagnoses to this order, simply search and select the diagnosis after you select from the auto-complete choices and it will automatically insert it in the field above it. To delete one, click the minus button next to the diagnosis. Any conditions/diagnosis that are entered on the order that the patient doesn't already have will be linked to the encounter as a part of the "Impression" and will not appear under the "Past Medical History". This respects the system setting "Save Diagnosis to Patient Conditions" that causes orders to save the conditions to the patient in the first place. When you are done, simply go to the next tab called Patient Instructions.
* <strong>Bill Type:</strong> Order requests can specify a bill type. If system setting <em>Require Bill Type</em> is enabled, this field will appear. There are four options: The default is None (unspecified), Self, Client, and Third Party. The system setting (Orders, Settings, Require Bill Type) will control whether this field is required or not on the order. If this setting is on (value set to 1), and ‘None' is chosen in the bill type dropdown, the user will be asked to choose a different option.

![](../make-order-feature-encounter-plan-section.assets/30b5063563a11a4211260a89897ca1a9.png)

* <strong>Patient Instructions:</strong> Free type any instructions for the patient regarding this order. These instructions may or may not print on the order sheet, depending on how your practice decided to layout the printable order sheet.
* <strong>Comments:</strong> Free type any comments regarding this order. It will print on the order sheet and will show up in the Comments category when looking at this patient's recent orders from the orders screen view.

Continue down this order screen and checkmark which order items you wish to order for the patient. The blank fields next to any order item are free-text boxes (like to document which side to do an xray or how many views or any additional comments regarding that order item).

![](../make-order-feature-encounter-plan-section.assets/dd2b28618870357a7ac211a5394ee7fa.png)

Above or at the bottom there are function buttons. Click "REQUEST ORDERS" button to render the order. The "Hide Top Form" button simply hides the top portion of this orders screen and only shows the order items to checkmark.

![](../make-order-feature-encounter-plan-section.assets/507eaf21cb948a6a1840c945c6aff834.png)

You can toggle between order sets to checkmark orders from various order set's (ex: Lab, Imaging, etc) all at once and make it **one** order document instead of separate. There is the ability to switch picklists in the encounter order which is controlled by a dropdown containing all the order picklists in the system.

The last picklist visited before clicking the "Request Orders" button will be the name of the order document that it will store as, regardless of whether any orders were chosen on that last picklist or not. The user can choose which picklist is recorded by visiting that picklist (or returning to it) before clicking the "Request Orders" button. There is a help bubble explaining this next to the *set name* field also for additional help. Again, this gives ability to mark orders across various order sets but will store it as one order document – as the name of the last set name (picklist) you were in.

![](../make-order-feature-encounter-plan-section.assets/6366f1fc534919779b2ec474800a4b12.png)

After clicking REQUEST ORDERS button, this will close that orders screen and then it will list your items you selected under the *Order Requests* category of the encounter.

![](../make-order-feature-encounter-plan-section.assets/5d02ea1e70188e7dda92534e29dbb047.png)

If your system is configured to require diagnosis for each order item, you will be prompted to confirm diagnosis for each order item you marked. If there are more than 3 order items on the order, you will have the ability to **apply diagnosis** to all order items quickly in mass instead of individually. If there are any order questions to answer on any order item, you will be prompted to answer those too. Click the FINISH button when done confirming diagnosis for each specific order item and any questions answered.

![](../make-order-feature-encounter-plan-section.assets/66e82334808ffdec718c9638bb98bd14.png)

![](../make-order-feature-encounter-plan-section.assets/c68126f3cd983703b12a71154817ca33.png)

When click the FINISH button, it will prepare the order request for submission with the encounter but the order request will *not* be submitted until the encounter work is saved. You can edit the order request before you save your encounter work. You can click the *edit "xxx" order request* button. This will re-open the ‘Start Order Request' window and populate it as it was in its last state. Cancelling the order request from that window or the Finish Order Request window keeps the order intact. If any changes to the order are made, those changes will be reflected on the page.

![](../make-order-feature-encounter-plan-section.assets/861406a3d9d47ecc927f435ce4796316.png)

If you click the SAVE button on the encounter to save your encounter work, you will see this section change to show the order requests and be able to *edit* them if need be. You can still edit the order at that point also.

![](../make-order-feature-encounter-plan-section.assets/cdd2503b1780751c463a10fcc93b3a94.png)

{{% info %}}
While working in the encounter and seeing the requested orders as the look above, the "look" can be configurable using tag attributes. Contact your MIE Implementer if you wish any of these additional tag attributes to show or hide additional information regarding order requests in encounters.
{{% /info %}}

![](../make-order-feature-encounter-plan-section.assets/9c44f77b90da3b209077f1bbf86aa6e4.png)

* <strong>Comments</strong> can be shown. That would show the comments field from the order request (comments are hidden by default).
* <strong>Date of Service</strong> next to the ‘Edit Order Request' link on generated orders can be hidden. This is the date of the encounter, not the order date or order create date (currently date is default to be shown)
* <strong>Completion Date</strong> can be shown which shows the completion date of the order (completion date is hidden by default).
* <strong>Diagnosis code & description</strong> can be shown which shows the diagnosis and ICD code for that order item (diagnosis code/desc is hidden by default).

If you click the hyperlink edit order request (date) you will be taken to the order screen again to make any edits and click REQUEST ORDERS button at the bottom to render. See other help documentation on editing orders.

![](../make-order-feature-encounter-plan-section.assets/4fe6c03e3c90c33be99db19ea8aebb01.png)

When done with the encounter exam, the physician will submit the encounter.

If there were any orders made by the physician using this make/create order feature, those orders show on the encounter document "view". The orders show in the *plan* area of the encounter document along w/ any diagnosis required on the order item.

![](../make-order-feature-encounter-plan-section.assets/0ca9d2df500b792a4800f900a21cca4c.png)

The order itself (the document) would be pending to batch/print/fax in the encounters "view" to print and hand to the patient or fax out to a facility. There are several other places in {{% system-name %}} that you can print/fax/batch this order document. But from here, in the "view" of the encounter, look in the *Encounter Options* area at the very bottom of the screen.

![](../make-order-feature-encounter-plan-section.assets/0e6718e3d9070757335f6be2bb460f61.png)

You can batch and print all orders, prescriptions, drug guides, etc created from the encounter. You can also see the last time it was printed or faxed so you know if someone already rendered it.

You can also individually batch or individually print/fax by clicking the batch link next to each prescription, drug guide and/or e-order pending in the queue to print/fax. An order also shows the status of the e-order in a column. You can edit an e-order from this screen but it will only edit the order document, it will not edit/updated your encounter document. You can also simply open it up in ‘view' mode also to view. If you need to delete an order, click the Complete link, then set the order item(s) to *cancelled* in the screen it takes you to.

{{% tip %}}
If the user's preference for (‘Orders', ‘Encounter Orders', ‘Filter Pick List By Insurance') is set to ‘YES', the order pick list link in the plan section will first show the insurance choice window. The user will then be shown only picklists which have at least one order for the chosen insurance (or at least one order for the default insurance, if no insurance has been chosen). When no insurance is chosen for an order picklist in encounter orders (for instance, those chosen via the Labs or Imaging links in the Plan section) only those order items that do not have an insurance plan attached to them are displayed. This preference is mainly used by occupational health clients.
{{% /tip %}}

## Mark Order Complete

You can easily mark a pending order as "complete" even while working in the encounter or from the "view" of the encounter.

![](../make-order-feature-encounter-plan-section.assets/ecf5f8fef5de7f3abcac6a6d15cad70a.png)

![](../make-order-feature-encounter-plan-section.assets/24023c06561946c5fb4367bc8f52b882.png)

Clicking the hyperlink to Complete a pending order request will take you to the *Complete Order* screen to document the pending order as "complete". (See additional documentation regarding *Order Completion* screen.) You will see this hyperlink available for any type of order request done via the Make xxx Order functionality.

### Mark Lab Order Complete with Results

You can easily mark a pending lab order as "complete" and key in the lab results as discrete data to link to the originating lab order. You can do this even while working in the encounter o from the "view" of the encounter.

![](../make-order-feature-encounter-plan-section.assets/b7fb919490715c509c11700e86263335.png)

![](../make-order-feature-encounter-plan-section.assets/13794d430e6d2caeeaf014841a937ccb.png)

Clicking the hyperlink to Complete with Results for a pending lab order request will take you to the *Complete Order with Results* screen to document the lab results of the order as discrete data and creates a Lab Results document in the patient's chart along with completing the order. (See additional help documentation regarding *Complete Order with Results* screen.) You will see this hyperlink available for any type of Lab order request done via the Make Lab Order functionality.
