---
id: "1NVQbMR11ks0eU1kMlzxijhbBUKp3ljDp6aiMrhkF39s"
title: "Patient Assistance Inventory"
date: "2026-01-16T18:07:52.337Z"
version: 51
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=1NVQbMR11ks0eU1kMlzxijhbBUKp3ljDp6aiMrhkF39s"
wikigdrive: "v2.15.30"
---

## Add Patient Assistance Inventory

If you need to add inventory specifically tied to an individual patient because your practice uses patient assistance programs, you have to enter add the specific inventory item into the specific patient's chart via their _Dispense_ chart tab.

![](./patient-assistance-inventory.assets/06c5d8b71624d6f5ac46e186bbea0984.png)

Depending on how your practice is set up and what all you track for Inventory, your _Receive Patient Meds_ (adding patient specific inventory) entry fields may be different.

![](./patient-assistance-inventory.assets/aad1f1d4bb6a3ec81243ee670e917fad.png)

To add a quantity of received meds into this specific patient's assistance (patient inventory) fill out the fields in the _Receive Patient Meds_ screen. Use your tab key to advance to each field.

- <strong>Site</strong>: Is which site the meds till be available at.
- <strong>Stockpile</strong>: if that site has a stockpile location associated with it, you can specify the stockpile you are adding inventory to for that specific site.
- <strong>Drug</strong>: Begin typing the name of the medication item that you are adding to inventory. It will auto-complete choices from your master inventory items list for selection. If you have a barcode hand-held scanner device interface into your {{% system-name %}} system, you can have the cursor in this field, scan the barcode on the box/item and it will insert the barcode# and item name here (if prior barcode mapping has been compiled).
- <strong>Form</strong>: select the form of that specific drug item
- <strong>Qty</strong>: Enter the quantity of this specific inventory item you are adding to inventory. This is the individual number of items, not like number of boxes, etc.
- <strong>Lot Number</strong>: You can enter the Lot Number of the inventory item. This is especially necessary for medications. If you fill out Lot # field, it's important to also fill out Mfr and expiration date fields so when decrementing inventory, it will decrement from the exact match. Lot # field can be set to be a ‘required' field via a system setting, but then that field is required for supply order items and injection items also.
- <strong>Manufacturer</strong>: You can enter the Manufacturer of the item you are adding to inventory.
- <strong>Supplier</strong>: You can enter the Supplier of the item you are adding to the inventory (who supplied it to you). However this field does not display anywhere else nor show in any reports.
- <strong>Expiration Date</strong>: You can enter the expiration date for an inventory item being added to the inventory. There is a CLEAR button to clear the date or a calendar/pick date icon/link to pick a date from the calendar feature.

{{% tip %}}
There is also another CLEAR button to the far right which will clear _all_ the add inventory fields for that line to start over.
{{% /tip %}}

Click the ADD TO INVENTORY button at the very bottom to add these medication(s) to the patient's specific inventory/chart.

You will get a confirmation at the top stating the system received the medication into the patient's inventory successfully.

## Viewing Patient Assistance Inventory Individually

When you go back into the patient's Dispense chart tab, you will see their received medications you entered into the patient's assistance inventory (for that specific patient) using the Receive Patient Assistance feature. It is the last bucket in the Dispense chart tab named _Patient Assistance Inventory_.

![](./patient-assistance-inventory.assets/723e074492251201b39af52cf0b0eedf.png)

If you need to add inventory as donated or as general inventory, you need to do that through the Add Donated tab or the Add Inventory tab which is separate from the specific patient's assistance inventory. (See other help documentation named _Add Inventory_ and _Add Donated_).

## View All Patient Assistance Inventory

In the sidemenu tab _Inventory,_ go to the Show Inventory tab and find the hyperlink on the right side that says Show Patient Inventory. It will result and list all patient specific inventories (patient assistance meds) and details while also listing the specific patient. This is to see any and all patient assistance inventory tied to specific patients in the entire system. (See other help documentation named _Show Inventory Tab_).

![](./patient-assistance-inventory.assets/6b8779c62d8521fcbe3cd442796ed045.png)
