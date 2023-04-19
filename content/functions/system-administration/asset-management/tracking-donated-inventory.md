---
id: '1uvf1aYv8VNw2vCGturbCrmeWl-3-aK-3imyJsU4ryyc'
title: 'Tracking Donated Inventory'
date: '2020-02-27T20:30:10.177Z'
version: 21
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1uvf1aYv8VNw2vCGturbCrmeWl-3-aK-3imyJsU4ryyc'
wikigdrive: 'd3e22db37cfdd4a4e5d0d1fe46fc320e82e79136'
menu:
  main:
    name: 'Tracking Donated Inventory'
    identifier: '1uvf1aYv8VNw2vCGturbCrmeWl-3-aK-3imyJsU4ryyc'
    parent: '1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek'
    weight: 5650
---
## Add Donated Tab  
  
This tab looks and performs just like the *Add Inventory* tab. However, when you add inventory items here thru the *Add Donated* tab, it tracks the transaction comment as *donated* if your system is set up to add/receive donated inventory items. Note: If you will not be tracking inventory items as separate ‘donated' items instead of general received inventory, then you can have your MIE Implementer remove this tab.
  
![](../tracking-donated-inventory.assets/196fd94ac4a62ad48d4e688ae9a72bd8.png)  

If you need to add inventory specific to a patient because your practice uses patient assistance programs, you have to enter the patient's specific inventory from their e-chart using the Dispense chart tab (See other help documentation named *Receive Patient Assistance*).  
Depending on how your practice is set up and what all inventory details you track for Inventory, your *Add Inventory* data entry fields may be different.
  
![](../tracking-donated-inventory.assets/c4a53d4ad1051a958ee3c25802b2514c.png)  

To add donated inventory quantity and detail information to be tied to your inventory master item, fill out the fields in this Add Donated screen. Use your tab key to advance to each field.
* <strong>Site</strong>: Designate which site the meds will be available at.
* <strong>Stockpile</strong>: if that site has a stockpile location associated with it, you can specify the stockpile you are adding inventory to for that specific site.
* <strong>Drug/Item</strong>: Begin typing the name of the medication, injection or supply order item that you are adding to inventory. It will auto-complete choices from your master inventory items list for selection. If you have a barcode hand-held scanner device interface into your {{% system-name %}} system, you can have the cursor in this field, scan the barcode on the box/item and it will insert the barcode# and item name here (if prior barcode mapping has been compiled).
* <strong>Qty</strong>: Enter the quantity of this specific inventory item you are adding to inventory. This is the individual number of items, not like number of boxes, etc.
* <strong>Lot Number</strong>: You can enter the Lot Number of the inventory item. This is especially necessary for medications. If you fill out Lot # field, it's important to also fill out Mfr and expiration date fields so when decrementing inventory, it will decrement from the exact match. Lot # field can be set to be a ‘required' field via a system setting, but then that field is required for supply order items and injection items also.
* <strong>Manufacturer</strong>: You can enter the Manufacturer of this inventory item you are adding to inventory.
* <strong>Supplier</strong>: You can enter the Supplier of this inventory item you are adding to the inventory (who supplied it to you). However this field does not display anywhere else nor show in any reports.
* <strong>Expiration Date</strong>: You can enter the expiration date for an inventory item being added to the inventory. There is a CLEAR button to clear the date or a calendar/pick date icon/link to pick a date from the calendar feature.
{{% tip %}}

There is also another CLEAR button to the far right which will clear *all* the add inventory fields for that line to start over.
{{% /tip %}}
Click the ADD TO INVENTORY button at the very bottom to add the donated inventory item QTY and details to your system's current inventory.
You will get a confirmation at the top stating the system received the items into the inventory successfully.
When you go into the Show Inventory tab (show current inventory), you will see your received items you entered into the inventory using the Add Inventory tab.
