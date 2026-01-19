---
id: '1RFRNdru_Sm4hlC4CbRfbVczA7hr9_mvzDmQbtX5k_6I'
title: 'Inventory Module Settings'
date: '2026-01-19T17:57:55.634Z'
version: 274
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1RFRNdru_Sm4hlC4CbRfbVczA7hr9_mvzDmQbtX5k_6I'
wikigdrive: 'v2.15.30'
---
![](./inventory-module-settings.assets/061cf2c2d7bfc6033f7ceca06968b2b1.png)

## Inventory Module Security Settings

The following are security settings available for users in order to utilize the Inventory module.

![](./inventory-module-settings.assets/c29412da7f204b0cb5b614a2b98552df.png)

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
* <strong>Edit Inventory Mappings:</strong> Allows users to map inventory items to orders, meds, injections and allows users ability to edit those mappings of inventory items in the Mappings tab of Inventory module.
* <strong>Edit Master Inventory List:</strong> Allows users to add items to allowed general inventory and ability to edit names and aliases of allowed general inventory items to the system via the Control tab of Inventory module.
* <strong>Merge Inventory Items:</strong> Allows users to merge two or more general inventory items into a single inventory item via the Control tab or Mappings tab of Inventory module.
* <strong>Manage Stockpiles:</strong> Allows users to add and edit inventory stockpile sub-locations for main inventory locations via the <em>Stockpiles</em> tab of Inventory module. MIE has to delete a stockpile if needed.
* <strong>Manage Stock Warning Levels:</strong> Allows users to manage inventory warning levels via <em>Par Levels</em> tab of Inventory module. Par Level minimums and maximums for general inventory items can be set or edited if users have this access.

### Inventory Module My Settings Preferences

The following are user preferences available for users in order to utilize the Inventory module.

![](./inventory-module-settings.assets/a5ed6676b3b5b06cbc5d188039b95389.png)

* <strong>Transaction Search:</strong> In the Inventory module, this user preference to <em>Show Search</em> or <em>Hide Search</em> determines if the transaction screen advanced search fields will automatically show or hide on the landing page each time the user opens the Transaction Search tab of Inventory module.
* <strong>Number of Verify Needed:</strong> Select # of Verification Needed Fills you wish to display on your screen for each patient at a time. Example: if select 5 as your user preference, it will only show the first 5 Verification Needed Fills for that patient, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab and if verification functionality is turned on via system setting for the {{% system-name %}} system.
* <strong>Number of Verified:</strong> Select # of Verified Fills you wish to display on your screen for each patient. Example: if select 5 as your user preference, it will only show the first 5 Verified Fills for that patient, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab and if verification functionality is turned on via system setting for the {{% system-name %}} system.
* <strong>Number of Fill Requests:</strong> Select # of Requests you wish to display on your screen for each patient. Example: if select 5 as your user preference, it will only show the first 5 fill requests, then you would click <em>next</em> to get the next 5, etc. This applies to MedQueue tab and Dispense tab.
* <strong>Prioritize Inventory in ACs:</strong> Inventory items can be ordered from the Medications Orders encounter section and the autocomplete field there (for the medication order drug) prioritizes inventory items over other items, when this preference is enabled.

### Inventory Module System Settings

The following are system settings available for enabled or disabled features and functionality for the Inventory module. Some inventory system settings will not show up (will not be triggered to be able to view or set enable/disable functionality in System Settings module) until you have added inventory and done some setup in the {{% system-name %}} system and/or prescribed and/or done a test dispense/fill.

![](./inventory-module-settings.assets/b68eda166b2abf5ab17bc7eeb985721c.png)

![](./inventory-module-settings.assets/38d6a78700b569e7a1d14b19fe336da9.png)

![](./inventory-module-settings.assets/46d22849e75ff47d133b97bfbac7d528.png)

#### Injections

* <strong>E-Chart, Injections, Show Inventory Qty in Autocompletes:</strong> Disabled (value 0) by default, but recommended to enable if using inventory module for immunizations. If enabled (value 1), while working in <em>Add Injection/Immunization</em> module to document an injection, it will show the total QTY (quantity) next to any injection/immunization you are documenting available in inventory and also shows QTY (quantity) for that specific vial/lot# available in that field. This allows seeing the quantity for the injection/immunization you have in inventory and per specific lot, for decrementing inventory for injections/immunizations mapped to inventory.

![](./inventory-module-settings.assets/1646ef73b0e07e1c19addc7e0da4b9e8.png)

#### Inventory

* <strong>E-Chart, Inventory, Allow Non-Inventory Dispensing:</strong> In most cases, this will not be enabled and shouldn't be. Normally the inventory module functionality only allows dispensing of items which are tracked in the inventory module. If this system is enabled (value 1) then dispensing is allowed on anything, any medication, etc even outside the items in inventory which they choose to auto-complete in the dispense dialog.
* <strong>E-Chart, Inventory, By Site:</strong> Disabled (value 0) by default. If enabled (value 1), you can add inventory to master list, add inventory quantity when receiving new inventory items and decrement inventory by a specific site/location.
* <strong>E-Chart, Inventory, OfficeFill Task:</strong> Default value is OfficeFill meaning it is pointing to the fast task named <em>OfficeFill</em> when prescriptions to "fill" from inventory are signified via the prescription while working in a patient encounter and the <strong>[ x] Fill</strong> checkbox is marked or if radio button <em>patient is in office</em> while prescribing from Medications chart tab and the Fill Script date is entered along with radio button <em>patient in office</em>. This will trigger that fast task and put the fill request in the Med Queue tab under <em>In Office Fill Requests</em> for staff to work.
* <strong>E-Chart, Inventory, PhoneFill Task:</strong> Default value is PhoneFill meaning it is pointing to the fast task named <em>PhoneFill</em> when prescriptions to "fill" from inventory are signified via the prescription if radio button <em>patient Phone</em> while prescribing from Medications chart tab. This will trigger that fast task and put the fill request in the Med Queue tab under <em>Phone Fill Requests</em> for staff to work.
* <strong>E-Chart, Inventory, Prescribe From Inventory</strong>: Disabled (value 0) by default and most likely to remain off for practices. If enabled (value 0) then this would limit the {{% system-name %}} system for staff to only see auto-complete choices for prescribing meds to be meds only in their inventory. They would not be able to prescribe any medication choices or prescriptions for any meds that they do not have in their inventory. If enabled, staff is only allowed to prescribe and only sees medication autocomplete choices to prescribe meds only from inventory in their system and nothing else. So if a patient needed a prescription for Tylenol, but you don't dispense or have Tylenol in your inventory system, the staff wouldn't be able to see that med in the auto-complete to prescribe it since it's a med outside their inventory.
* <strong>E-Chart, Inventory, Print All Warnings on Labels as Default:</strong> Default value is enabled (value 1) to prepopulate a checkmark in all the specific warnings related to a dispensable med while dispensing a medication from inventory and printing a label for it. Allows "all selected" of specific warnings to be also placed on the label being created for the dispensable medication from your inventory while working a "fill" request but you can always uncheckmark one(s) you wish. This just saves user time from manually checkmarking them all the time.To disable (value 0) then the selection of warnings to print on the label for a dispensable med will not be prefilled with a checkmark. Users have to then manually select any warning(s) they wish to be on the label for the dispensable med.

![](./inventory-module-settings.assets/203d0739db473096dd6bf68731ab508d.png)

* <strong>E-Chart, Inventory, Show Drug Classes:</strong> Disabled (value 0) by default, but if enabled (value 1) then in the <em>Show Inventory</em> tab, it will add a column named <em>Drug Class</em> and show the appropriate drug class pulled from the rxdb database related to a specific mapped inventory medication item that is a controlled substance.
* <strong>E-Chart, Inventory, Show Quantity in AutoCompletes:</strong> Disabled (value 0) by default, but if enabled (value 1) then users will see the quantity (QTY:#) next to medication choices when prescribing and quantity (QTY:#) next to immunization choices while documenting gave an injection. Recommend this be enabled if using the inventory module for dispensable medications and/or immunizations.
* <strong>E-Chart, Inventory, Use Lot Numbers:</strong> Disabled (value 0) by default, but if enabled (value 1) then users will be able to key in specific lot numbers to master inventory items, when adding quantity inventory to system and when dispensing medications or immunizations. This will ensure fill requests and immunizations given will show correct QTY for a specific lot# of an inventory item and decrement the correct inventory item by matching up the lot#. If use the Lot#, it's essential to also fill out the manufacturer, supplier and expiration date fields also so the system can find the perfect match when dispensing from inventory. If (for example: supply order) doesn't have a lot#, then it's best to leave lot, mfr, supplier, expiration blank.
* <strong>E-Chart, Inventory, Verify Fills:</strong> Enabled (value 1) by default, to have medications being dispensed from inventory go through a verification process before it can be dispensed out. When this is enabled, the staff working fill requests via the Med Queue and/or Dispense chart tab will go through the fill request and label generation, but then it will fall into the <em>Verification Needed Fills</em> queue for someone to work and verify. At time of verification, the label can be printed and the medication to dispense per fill request can be marked as verified and dispensed. At time of verification, the <strong>filled until</strong> will populate with the appropriate date. Until a dispensable fill request has been verified, the <strong>filled until</strong> column will cay <em>Current Fill has not Been Verified Nor Dispensed</em>.

![](./inventory-module-settings.assets/49495cbfdb92ea2a9b6f59956dc76edf.png)

* If system setting is disabled (Value 0), then staff does not have to go through nor work verification requests for dispensable inventory medications and there will not be a bucket/section named <em>Verification Needed Fills</em> and once the fill request is worked, that medication will be marked as dispensed and the <strong>filled until</strong> column is appropriately marked with a date instead of a holding status of verification needed.

![](./inventory-module-settings.assets/f250134159c970aebb7b1653919bf60a.png)

* <strong>E-Chart, Inventory, Show Supplier:</strong> Disabled (value 0) by default. If enabled (value 1) then it will display a field named <em>Supplier</em> while in the Add Inventory functionality. Can key in Supplier information of inventory item details.
* <strong>Inventory, Label Printing, Enforce Labels in Landscape:</strong> Enabled (value 1) by default. This will render the label for the dispensable inventory medication in landscape fashion for a dymolabel printer.
* <strong>Inventory, Lot Numbers, Are Required:</strong> If using Lot Numbers system setting is enabled and staff keys in Lot Numbers for medication inventory, this system setting is enabled (value 1) by default. When working Fill Requests via the Med Queue and/or Dispense chart tab, the staff will be required to enter in lot# field before the fill request can be completed. Lot numbers field requirement when documenting immunizations is a separate system setting and this lot# field system setting isn't applied to order supplies even if this system setting is enabled. If this is enabled (value 1) when you are working the "Add Inventory" to add quantity to your system, it will require the Lot # field to be filled out also to be able to add inventory qty.

#### Transaction Report

Run a test Transaction Report in the {{% system-name %}} system to make these system settings appear and trigger in the system.

* <strong>Inventory, Transaction Report, Check All Trans Types on Clear:</strong> Enabled (value 1) by default. That pre-populates a checkmark in all of the <em>Transaction Types</em> when you run the report or clear the report to run another transaction search report. User can uncheckmark which one(s) they don't want to run and result the report by. Disabled (value 0) will not pre-populate these checkmarks in the <em>Transaction Types</em> of this report and user will manually have to checkmark which types to run the report for.

![](./inventory-module-settings.assets/df9e4746b5a094f6bef0ae4af54b9812.png)

* <strong>Inventory, Transaction Report, Show Prescriber:</strong> Disabled (value 0) by default. If enabled (value 1) then the Prescriber column will show with applicable information in the results when running the Transaction Report for Inventory. If enabled with value 2, then the Prescriber NPI column will show results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show Refills Remaining:</strong> Disabled (value 0) by default. If enabled (value 1) then the Refills column will show with applicable information in the results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show RXID:</strong> Disabled (value 0) by default. If enabled (value 1) then the RxID column will show with applicable information in the results when running the Transaction Report for Inventory.
* <strong>Inventory, Transaction Report, Show Sig in Results:</strong> Disabled (value 0) by default. If enabled (value 1) then the Sig column will show with applicable information in the results when running the Transaction Report for Inventory.

![](./inventory-module-settings.assets/4056feb42cfb3502fb3eb81d486cb9cd.png)

#### Supply Orders

* <strong>Orders, Settings, Order From Inventory:</strong> Disabled (value 0) by default. Recommended to enable (value 1) if using inventory module for supply orders. This system setting then enables ability to order supply items from inventory using <em>orders</em> and makes the QTY# (quantity) show up on each order item when ordering supplies from inventory. This will allow the order item to decrement from inventory.
    * So essentially to see QTY# (quantity) count of current inventory for order supplies tied to inventory, this system setting must be enabled.

![](./inventory-module-settings.assets/f9bccd27c94518616e15b8ae0a5d0041.png)

* To see QTY# (quantity) count of current inventory for injection immunizations tied to inventory, this system setting must be enabled.

![](./inventory-module-settings.assets/70722fda962fb2af8707986ad75ab663.png)

* And to see QTY# (quantity) count of current inventory for medication prescriptions tied to inventory, this system setting must be enabled.

![](./inventory-module-settings.assets/767f675906495c2b6e6dcb244ec7d26e.png)

#### Dispense

* <strong>E-Chart, Dispense, Confirm User on Transactions:</strong> Enabled (value 1) by default. This requires the user's username and password to dispense a medication prescription from inventory in the Dispense chart tab. This is considered double authentication. Disable (value 0) to not show the username and password double authentication fields in the Dispense tab when working a fill request.

![](./inventory-module-settings.assets/afd6f6707bbe1f4159fdf1cec90ed379.png)

* <strong>E-Chart, Meds, Encounter plan collect dispense details:</strong> Disabled (value 0) by default. If enabled (value 1) then users can document dispense details of medication prescriptions handing out/dispensing directly into the plan while prescribing via the encounter plan meds section.

![](./inventory-module-settings.assets/6381b204b758490103776f5e0bfbd1e0.png)

* <strong>E-Chart, Meds, Use Fill Requests:</strong> Disabled (value 0) by default. If enabled (value 1) then this makes hyperlink "add fill request" functionality show up in meds module.

![](./inventory-module-settings.assets/8ad380a361f70e082d83a5520e7e475c.png)

* And the fill checkbox functionality in the medication orders section of encounters.

![](./inventory-module-settings.assets/c94823727646a96aca2de1c8eaedb989.png)
