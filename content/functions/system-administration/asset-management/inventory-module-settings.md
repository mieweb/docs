---
id: '1RFRNdru_Sm4hlC4CbRfbVczA7hr9_mvzDmQbtX5k_6I'
title: 'Inventory Module Settings'
date: '2020-02-27T20:31:40.529Z'
version: 83
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1RFRNdru_Sm4hlC4CbRfbVczA7hr9_mvzDmQbtX5k_6I'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
![](../inventory-module-settings.assets/268ee4a57c3887e20d82ea1242d53e97.png)

## Inventory Module Security Settings

The following are security settings available for users in order to utilize the Inventory module.

![](../inventory-module-settings.assets/08375b5cfe4f8fd45ff94041876bc874.png)

* <strong>View Inventory:</strong> Allows users access to the <em>Inventory</em> tab and modality on the left side bar menu.
* <strong>Receive Inventory:</strong> Allows users to access and use the <em>Add Inventory</em> and <em>Add Donated</em> tabs to add/receive meds into Inventory.
* <strong>Transfer Inventory:</strong> Allows users to move and transfer inventory items to other sites, stockpiles (or specific patients if using that modality) via the <em>Transfer Med</em> hyperlink option found in <em>Show Inventory</em> tab.
* <strong>Expire Inventory:</strong> Allows users to expire inventory items and quantities via the <em>Expire Med</em> hyperlink option in <em>Show Inventory</em> tab.
* <strong>Edit Inventory:</strong> Allows users to be able to edit general inventory in the <em>Show Inventory</em> tab of current quantity and comment fields.
* <strong>Fill Prescriptions:</strong> Allows users access to fill prescription orders from inventory for patients in <em>Med Queue</em> tab or from <em>Dispense</em> tab in a specific patient.
* <strong>Verify Fills:</strong> Allows users access to verify prescription fills in <em>Med Queue</em> tab for a patient or from <em>Dispense</em> tab in a specific patient. Verify Fills is an optional feature and is controlled by a system setting, but this is the security setting to perform that feature if it's turned on.
* <strong>Dispense Inventory:</strong> Allows users access to dispense and undispense meds for a patient in the patient's <em>Dispense</em> chart tab.
* <strong>Return Fills to Inventory:</strong> Allows users access to return a fill to inventory in <em>Dispense</em> chart tab for a patient.
* <strong>View Transactions:</strong> Allows users access to view inventory via <em>Transaction Reports</em> tab of Inventory module.
* <strong>Edit Transactions:</strong> Allows users access to the <em>Edit Transaction</em> hyperlink option in <em>Transaction Reports</em> tab of Inventory module.
* <strong>Edit Inventory Mappings:</strong> Allows users to map inventory items to orders, meds, injections and allows users ability to edit those mappings of inventory items in the Mappings tab of Inventory module.
* <strong>Edit Master Inventory List:</strong> Allows users to add items to allowed general inventory and ability to edit names and aliases of allowed general inventory items to the system via the Control tab of Inventory module.
* <strong>Merge Inventory Items:</strong> Allows users to merge two or more general inventory items into a single inventory item via the Control tab or Mappings tab of Inventory module.
* <strong>Manage Stockpiles:</strong> Allows users to add and edit inventory stockpile sub-locations for main inventory locations via the <em>Stockpiles</em> tab of Inventory module. MIE has to delete a stockpile if needed.
* <strong>Manage Stock Warning Levels:</strong> Allows users to manage inventory warning levels via <em>Par Levels</em> tab of Inventory module. Par Level minimums and maximums for general inventory items can be set or edited if users have this access.

### Inventory Module My Settings Preferences

The following are user preferences available for users in order to utilize the Inventory module.

![](../inventory-module-settings.assets/9494353039958f238a09f93b31d61fdc.png)

* <strong>Transaction Search:</strong> In the Inventory module, this user preference to <em>Show Search</em> or <em>Hide Search</em> determines if the transaction screen advanced search fields will automatically show or hide on the landing page each time the user opens the Transaction Search tab of Inventory module.
* <strong>Number of Verify Needed:</strong> Select # of Verification Needed Fills you wish to display on your screen for each patient at a time. Example: if select 5 as your user preference, it will only show the first 5 Verification Needed Fills for that patient, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab and if verification functionality is turned on via system setting for the {{% system-name %}} system.
* <strong>Number of Verified:</strong> Select # of Verified Fills you wish to display on your screen for each patient. Example: if select 5 as your user preference, it will only show the first 5 Verified Fills for that patient, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab and if verification functionality is turned on via system setting for the {{% system-name %}} system.
* <strong>Number of Fill Requests:</strong> Select # of Requests you wish to display on your screen for each patient. Example: if select 5 as your user preference, it will only show the first 5 fill requests, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab.

### Inventory Module System Settings

The following are system settings available for enabled or disabled features and functionality for the Inventory module. Some inventory system settings will not show up (will not be triggered to be able to view or set enable/disable functionality in System Settings module) until you have added inventory and done some setup in the {{% system-name %}} system and/or prescribed and/or done a test dispense/fill.

![](../inventory-module-settings.assets/08324bb48c49703ba3db5cd49a492a5e.png)

![](../inventory-module-settings.assets/1dbcdf0efa0f48fb6e1151c6773a3326.png)

![](../inventory-module-settings.assets/69b66433641cefea262ba5cc40d2de68.png)

![](../inventory-module-settings.assets/4b8865b8ef240be6de1095d17fe6f0a2.png)

![](../inventory-module-settings.assets/67ec01c22cfe57cb138065c4dbaf2f93.png)

#### Injections

* <strong>E-Chart, Injections, Show Inventory Qty in Autocompletes:</strong> Disabled (value 0) by default, but recommended to enable if using inventory module for immunizations. If enabled (value 1), while working in <em>Add Injection/Immunization</em> module to document an injection, it will show the total QTY (quantity) next to any injection/immunization you are documenting available in inventory and also shows QTY (quantity) for that specific vial/lot# available in that field. This allows seeing the quantity for the injection/immunization you have in inventory and per specific lot, for decrementing inventory for injections/immunizations mapped to inventory.

![](../inventory-module-settings.assets/777493d3da391e1f1e7b8341dc15b885.png)

#### Inventory

* <strong>E-Chart, Inventory, Allow Non-Inventory Dispensing:</strong> In most cases, this will not be enabled and shouldn't be. Normally the inventory module functionality only allows dispensing of items which are tracked in the inventory module. If this system is enabled (value 1) then dispensing is allowed on anything, any medication, etc even outside the items in inventory which they choose to auto-complete in the dispense dialog.
* <strong>E-Chart, Inventory, By Site:</strong> Disabled (value 0) by default. If enabled (value 1), you can add inventory to master list, add inventory quantity when receiving new inventory items and decrement inventory by a specific site/location.
* <strong>E-Chart, Inventory, OfficeFill Task:</strong> Default value is OfficeFill meaning it is pointing to the fast task named <em>OfficeFill</em> when prescriptions to "fill" from inventory are signified via the prescription while working in a patient encounter and the <strong>[ x] Fill</strong> checkbox is marked or if radio button <em>patient is in office</em> while prescribing from Medications chart tab and the Fill Script date is entered along with radio button <em>patient in office</em>. This will trigger that fast task and put the fill request in the Med Queue tab under <em>In Office Fill Requests</em> for staff to work.

![](../inventory-module-settings.assets/720fbaab0cf705fe6a54cd407c2e88ae.png)

* <strong>E-Chart, Inventory, PhoneFill Task:</strong> Default value is PhoneFill meaning it is pointing to the fast task named <em>PhoneFill</em> when prescriptions to "fill" from inventory are signified via the prescription if radio button <em>patient Phone</em> while prescribing from Medications chart tab. This will trigger that fast task and put the fill request in the Med Queue tab under <em>Phone Fill Requests</em> for staff to work.

![](../inventory-module-settings.assets/6d9d044d17e68f2f7921e2d355515cab.png)

* <strong>E-Chart, Inventory, Prescribe From Inventory</strong>: Disabled (value 0) by default and most likely to remain off for practices. If enabled (value 0) then this would limit the {{% system-name %}} system for staff to only see auto-complete choices for prescribing meds to be meds only in their inventory. They would not be able to prescribe any medication choices or prescriptions for any meds that they do not have in their inventory. If enabled, staff is only allowed to prescribe and only sees medication autocomplete choices to prescribe meds only from inventory in their system and nothing else. So if a patient needed a prescription for Tylenol, but you don't dispense or have Tylenol in your inventory system, the staff wouldn't be able to see that med in the auto-complete to prescribe it since it's a med outside their inventory.
* <strong>E-Chart, Inventory, Print All Warnings on Labels as Default:</strong> Default value is enabled (value 1) to prepopulate a checkmark in all the specific warnings related to a dispensable med while dispensing a medication from inventory and printing a label for it. Allows "all selected" of specific warnings to be also placed on the label being created for the dispensable medication from your inventory while working a "fill" request but you can always uncheckmark one(s) you wish. This just saves user time from manually checkmarking them all the time.To disable (value 0) then the selection of warnings to print on the label for a dispensable med will not be prefilled with a checkmark. Users have to then manually select any warning(s) they wish to be on the label for the dispensable med.

![](../inventory-module-settings.assets/fd525bc97034a2439bd0e5d49ed54b50.png)

* <strong>E-Chart, Inventory, Show Drug Classes:</strong> Disabled (value 0) by default, but if enabled (value 1) then in the <em>Show Inventory</em> tab, it will add a column named <em>Drug Class</em> and show the appropriate drug class pulled from the rxdb database related to a specific mapped inventory medication item that is a controlled substance.
* <strong>E-Chart, Inventory, Show Quantity in AutoCompletes:</strong> Disabled (value 0) by default, but if enabled (value 1) then users will see the quantity (QTY:#) next to medication choices when prescribing and quantity (QTY:#) next to immunization choices while documenting gave an injection. Recommend this be enabled if using the inventory module for dispensable medications and/or immunizations.
* <strong>E-Chart, Inventory, Use Lot Numbers:</strong> Disabled (value 0) by default, but if enabled (value 1) then users will be able to key in specific lot numbers to master inventory items, when adding quantity inventory to system and when dispensing medications or immunizations. This will ensure fill requests and immunizations given will show correct QTY for a specific lot# of an inventory item and decrement the correct inventory item by matching up the lot#. If use the Lot#, it's essential to also fill out the manufacturer, supplier and expiration date fields also so the system can find the perfect match when dispensing from inventory. If (for example: supply order) doesn't have a lot#, then it's best to leave lot, mfr, supplier, expiration blank.
* <strong>E-Chart, Inventory, Verify Fills:</strong> Enabled (value 1) by default, to have medications being dispensed from inventory go through a verification process before it can be dispensed out. When this is enabled, the staff working fill requests via the Med Queue and/or Dispense chart tab will go through the fill request and label generation, but then it will fall into the <em>Verification Needed Fills</em> queue for someone to work and verify. At time of verification, the label can be printed and the medication to dispense per fill request can be marked as verified and dispensed. At time of verification, the <strong>filled until</strong> will populate with the appropriate date. Until a dispensable fill request has been verified, the <strong>filled until</strong> column will cay <em>Current Fill has not Been Verified Nor Dispensed</em>.

![](../inventory-module-settings.assets/3d6845eea977bf4e6e40f2cd8eb45d30.png)

* If system setting is disabled (Value 0), then staff does not have to go through nor work verification requests for dispensable inventory medications and there will not be a bucket/section named <em>Verification Needed Fills</em> and once the fill request is worked, that medication will be marked as dispensed and the <strong>filled until</strong> column is appropriately marked with a date instead of a holding status of verification needed.

![](../inventory-module-settings.assets/c54d9e5b16c88f18e5070f226e8e86d1.png)

* <strong>E-Chart, Inventory, Show Supplier:</strong> Disabled (value 0) by default. If enabled (value 1) then it will display a field named <em>Supplier</em> while in the Add Inventory functionality. Can key in Supplier information of inventory item details.
* <strong>Inventory, Label Printing, Enforce Labels in Landscape:</strong> Enabled (value 1) by default. This will render the label for the dispensable inventory medication in landscape fashion for a dymolabel printer.
* <strong>Inventory, Lot Numbers, Are Required:</strong> If using Lot Numbers system setting is enabled and staff keys in Lot Numbers for medication inventory, this system setting is enabled (value 1) by default. When working Fill Requests via the Med Queue and/or Dispense chart tab, the staff will be required to enter in lot# field before the fill request can be completed. Lot numbers field requirement when documenting immunizations is a separate system setting and this lot# field system setting isn't applied to order supplies even if this system setting is enabled. If this is enabled (value 1) when you are working the "Add Inventory" to add quantity to your system, it will require the Lot # field to be filled out also to be able to add inventory qty.

#### Transaction Report

Run a test Transaction Report in the {{% system-name %}} system to make these system settings appear and trigger in the system.

* <strong>Inventory, Transaction Report, Check All Trans Types on Clear:</strong> Enabled (value 1) by default. That pre-populates a checkmark in all of the <em>Transaction Types</em> when you run the report or clear the report to run another transaction search report. User can uncheckmark which one(s) they don't want to run and result the report by. Disabled (value 0) will not pre-populate these checkmarks in the <em>Transaction Types</em> of this report and user will manually have to checkmark which types to run the report for.

![](../inventory-module-settings.assets/672184f5d67fb56f3aeb130139466e7f.png)

* <strong>Inventory, Transaction Report, Show Prescriber:</strong> Disabled (value 0) by default. If enabled (value 1) then the Prescriber column will show with applicable information in the results when running the Transaction Report for Inventory. If enabled with value 2, then the Prescriber NPI column will show results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show Refills Remaining:</strong> Disabled (value 0) by default. If enabled (value 1) then the Refills column will show with applicable information in the results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show RXID:</strong> Disabled (value 0) by default. If enabled (value 1) then the RxID column will show with applicable information in the results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show Sig in Results:</strong> Disabled (value 0) by default. If enabled (value 1) then the Sig column will show with applicable information in the results when running the Transaction Report for Inventory.

![](../inventory-module-settings.assets/e6cf93587f10e206530523db40d53299.png)

#### Supply Orders

* <strong>Orders, Settings, Order From Inventory:</strong> Disabled (value 0) by default. Recommended to enable (value 1) if using inventory module for supply orders. This system setting then enables ability to order supply items from inventory using <em>orders</em> and makes the QTY# (quantity) show up on each order item when ordering supplies from inventory. This will allow the order item to decrement from inventory.
    * So essentially to see QTY# (quantity) count of current inventory for order supplies tied to inventory, this system setting must be enabled.

![](../inventory-module-settings.assets/52c04ef620d860351d0f5e7124704f06.png)

* To see QTY# (quantity) count of current inventory for injection immunizations tied to inventory, this system setting must be enabled.

![](../inventory-module-settings.assets/5bfbbc9e40aa353550cfbccdb6c88021.png)

* And to see QTY# (quantity) count of current inventory for medication prescriptions tied to inventory, this system setting must be enabled.

![](../inventory-module-settings.assets/a44510b9bf0be9a0a4fdf80edd079baf.png)

#### Dispense

* <strong>E-Chart, Dispense, Confirm User on Transactions:</strong> Enabled (value 1) by default. This requires the user's username and password to dispense a medication prescription from inventory in the Dispense chart tab. This is considered double authentication. Disable (value 0) to not show the username and password double authentication fields in the Dispense tab when working a fill request.

![](../inventory-module-settings.assets/3f058b1478ed22fffc91b1d2e9da5c38.png)

* <strong>E-Chart, Meds, Encounter plan collect dispense details:</strong> Disabled (value 0) by default. If enabled (value 1) then users can document dispense details of medication prescriptions handing out/dispensing directly into the plan while prescribing via the encounter plan meds section.

![](../inventory-module-settings.assets/8263ae73a285ffe8ac6d96aacc3bfe53.png)

* <strong>E-Chart, Meds, Use Fill Requests:</strong> Disabled (value 0) by default. If enabled (value 1) then this makes hyperlink "add fill request" functionality show up in meds module.

![](../inventory-module-settings.assets/94cd44f4969751ca856fe255a90c890d.png)

* And the fill checkbox functionality in the medication orders section of encounters.

![](../inventory-module-settings.assets/0044cbe37a4abcb3b5680164952f5ddb.png)
