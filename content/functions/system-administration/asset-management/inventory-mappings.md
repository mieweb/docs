---
id: "1nvcWeIakN3JOQyEK1j5fOJn6sXjalZuVXRKub1w4nos"
title: "Inventory Mappings"
date: "2024-09-25T19:50:01.995Z"
version: 211
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=1nvcWeIakN3JOQyEK1j5fOJn6sXjalZuVXRKub1w4nos"
wikigdrive: "v2.15.30"
---

After you have added a new inventory item into your inventory in the Master Inventory List/Control tab, you then map it in the Mappings tab.

The Mappings tab is located in the sidemenu tab named _Inventory_. It will open to the default of the Show Inventory tab which displays the current inventory. To show the inventory mappings, click on the Mappings tab. There are two display options, the DataVis view:

![](./inventory-mappings.assets/76cb281c5de733515d0fc0ba67a4c8c3.png)

Or the Legacy Mappings view:

![](./inventory-mappings.assets/eb899c12061119f7be75824a9aaf4a5a.png)

Mapping needs to be done because it is the process of matching the Master Inventory Item name to a recognized medication in the drug database, CDC immunization, or supply order within the database.

## Search for Current Inventory Mappings

First you will want to search for the inventory item to confirm if it's already mapped or not.

- <strong>Search</strong>: You can search for mappings using the search by fields. If you click the [ + ] sign in search by, you can open up another search to search a medication name and it's inventory name or 2 different searches, etc.

![](./inventory-mappings.assets/e63f9024c23309a9fd7609b77dcfa1df.png)

- You can also render results to show by All Types, or get granular by selecting to see only current mappings that are Medication type, Injection Type, Order type or Barcode type.

![](./inventory-mappings.assets/d502ea06cec4ac3df5bf316ff6b61d87.png)

### Columns in Results

Mapped ID column: shows you the Medication ID # it's mapped to from First DataBank (if it's a medication inventory item mapping), or it will be the CDC immunization code if it's an immunization/injection mapping, the {{% system-name %}} Order ID# if it's a supply order mapping or the barcode # if it's a Barcode mapping. For medications that are mapped to Medication ID's from First DataBank, you click that underlined id#, it will open up that drug guide for the medication.

![](./inventory-mappings.assets/72b897cac058f7cf6860d13538b97830.png)

- <strong>Mapped Name</strong>: This is the recognized name of the medication from First DataBank, or the CDC recognized immunization or the recognized supply order. This is what the master inventory item is mapped to.
- <strong>Mapping Type</strong>: This is the type of mapping it is. If it's a medication inventory item mapping, an injection/immunization mapping, a supply order mapping or a barcode mapping for that specific inventory item.
- <strong>Inv ID</strong>: This is the {{% system-name %}} inventory ID number that is assigned to the master inventory item.
- <strong>Inventory Item</strong>: This is the name of the inventory item in the master inventory list.

## Add Mapping(s)

To add a mapping, first you must have the _Show Type:_ selection specified.

The ‘Show Type' performs 2 functions:

1. It limits the mapping types that are displayed in the Inventory Mappings search results list (see above pages).
2. It changes the behaviors of the auto-complete in the ‘add a mapping' form from being medication autocomplete choices to an injection auto-complete.

{{% info %}}
It will not allow you to add a mapping if the Show Type: is set to All. You must select a Show Type first before you can add a mapping. If you want to add a mapping for a Medication, make sure the _Show Type:_ is set to Medication. If you want to add a mapping for an Injection, make sure the _Show Type:_ is set to Injection. If you want to add a mapping for a supply order, make sure the _Show Type:_ is set to Order. If you want to add a mapping for a barcode hand-held scanner functionality, make sure the _Show Type:_ is set to Barcode.
{{% /info %}}

![](./inventory-mappings.assets/d502ea06cec4ac3df5bf316ff6b61d87.png)

### Add Medication Mapping(s)

The _Show Type:_ needs to be selected to Medication.

Then click the Add a Mapping hyperlink at the top right of the Mappings tab (next to _Show Type_ selection).

![](./inventory-mappings.assets/ad82d302f29b1937f7adf97772076053.png)

The Map Inventory fields will open at the top of the screen.

The two fields on the left are the auto-completes pointed to the medication name & form/strength from the First DataBank drug database. Begin typing and select from the auto-complete for the recognized drug database medication name and use the tab key to select the specific strength/form that First Databank states this drug is available in. This is what your Master Inventory Med item will be linked/mapped to in the recognized drug database {{% system-name %}} is linked to.

![](./inventory-mappings.assets/6e01b5d1f72e7861c7f477391e4d8367.png)

Again, use the tab key to go over to the next field which is your Inventory Description field.

The Inventory Description field is to be the Master Inventory Item of that medication. You are linking the left side fields (recognized FDB medication & strength/form) to the ride sided field of your master inventory item name.

Begin typing in the name of the master inventoried medication in your system that you entered in the Control Inventory (Master Inventory List) tab. Select the master inventory item name. It will auto-complete for your selection.

![](./inventory-mappings.assets/dce771b8722e1a6e1fe36035b9a8204e.png)

Click SUBMIT button and it will say confirmation of _mapping inserted_ at the top.

You will then see it listed in the Inventory Mappings Tab list of all current mappings for medications inventory items.

### Add Immunization Mapping(s)

The _Show Type:_ needs to be selected to Injection.

Then click the Add a Mapping hyperlink at the top right of the Mappings tab (next to _Show Type_ selection).

![](./inventory-mappings.assets/5857f32074a19323a3836682dd7c2c83.png)

The Map Inventory fields will open at the top of the screen.

The field on the left is the auto-complete pointed to the CDC immunizations listing. Begin typing and select from the auto-complete for the recognized CDC immunization. This is what your Master Inventory item will be linked/mapped to in the recognized immunization database {{% system-name %}} is linked to.

![](./inventory-mappings.assets/3d2a5a21d135660103a86c72f73a9854.png)

Again, use the tab key to go over to the next field which is your Inventory Description field.

The Inventory Description field is to be the Master Inventory Item of that immunization. You are linking the left side fields (recognized CDC immunization) to the ride sided field of your master inventory item name.

Begin typing in the name of the master inventoried immunization in your system that you entered in the Control Inventory (Master Inventory List) tab. Select the master inventory item name. It will auto-complete for your selection.

![](./inventory-mappings.assets/ec4318016d09a5db19bc208549380246.png)

Click SUBMIT button and it will say confirmation of _mapping inserted_ at the top.

You will then see it listed in the Inventory Mappings Tab list of all current mappings for injection immunizations inventory items.

### Add Order/Supply Mapping(s)

The _Show Type:_ needs to be selected to Order.

Then click the Add a Mapping hyperlink at the top right of the Mappings tab (next to _Show Type_ selection).

![](./inventory-mappings.assets/b351a533963d9b6ed026fd6f83a4ed95.png)

The Map Inventory fields will open at the top of the screen.

The field on the left is the auto-complete pointed to the Supply Orders in {{% system-name %}} that were entered in the Order List Editor or Order Supply Editor tab. Begin typing and select from the auto-complete for the recognized order. This is what your Master Inventory item will be linked/mapped to in the recognized orders in {{% system-name %}} .

![](./inventory-mappings.assets/d2adf7d9b913e9db598603236ec8aecf.png)

Again, use the tab key to go over to the next field which is your Inventory Description field.

The Inventory Description field is to be the Master Inventory Item of that supply order. You are linking the left side fields (recognized order) to the ride sided field of your master inventory item name.

Begin typing in the name of the master inventoried order in your system that you entered in the Control Inventory (Master Inventory List) tab. Select the master inventory item name. It will auto-complete for your selection.

![](./inventory-mappings.assets/48b65b8de6365ec3db1a45216e1f5134.png)

Click SUBMIT button and it will say confirmation of _mapping inserted_ at the top.

You will then see it listed in the Inventory Mappings Tab list of all current mappings for supply order inventory items.

### Add Barcode Mapping(s)

The _Show Type:_ needs to be selected to Barcode. MIE can interface with a barcode scanner device Motorola ES406080 hand-held scanner. This requires MIE Implementer and programmers set up. We have found with that specific type of scanner to not have the base plugged into the wall for it to work and that is manufacturer specs, not an MIE program issue.

Then click the Add a Mapping link at the top right of the Mappings tab (also next to _Show Type_).

![](./inventory-mappings.assets/7b4bef57c7ba1934f6829a872aa89a3b.png)

The Map Inventory screen fields will open at the top of the screen.

On the left side field, place your cursor in that field and then physically trigger the barcode scanner on the physical item's barcode on the packaging that you want it to read. The Barcode numbers/alpha should populate in that field.

![](./inventory-mappings.assets/8f712fcabcb817622e16d5239421af86.png)

Again, use the tab key to go over to the next field which is your Inventory Description field.

The Inventory Description field is to be the Master Inventory Item of that inventory item. You are linking the left side fields (recognized barcode) to the ride sided field of your master inventory item name.

Begin typing in the name of the master inventoried order in your system that you entered in the Control Inventory (Master Inventory List) tab. Select the master inventory item name. It will auto-complete for your selection.

![](./inventory-mappings.assets/05c156a18993e9ab5ebd1bce3ddeb803.png)

Click SUBMIT button and it will say confirmation of _mapping inserted_ at the top.

You will then see it listed in the Inventory Mappings Tab list of all current mappings for inventory items.

If you are using the Barcode scanner functionality, your inventory item in the master list should have 2 mappings tied it. One mapping should be to the inventory item "type" and the other mapping would be to its "barcode".

![](./inventory-mappings.assets/9b3e6d92d81cb8204b0011f01ce7d8a4.png)

## Edit/Delete Mapping(s)

If you need to edit a mapping, click the edit link in the options column of the Mappings Tab list for the specific mapping you need to edit.

![](./inventory-mappings.assets/c640e1a3eb35da6da73a0f6b499ac7c0.png)

The Edit Map Inventory screen will open. Edit what needs done to the inventory item mapping and use your tab key to go thru the fields.

![](./inventory-mappings.assets/869a3c980c741eb6b132bff78c864261.png)

If you selected a different medication name from the drug database, use your _tab_ key on the keyboard to advance to the strength/form field. All choices for this drug from the database will show here for selection.

Click SUBMIT button and it will say the mapping was inserted, which means it was edited.

To delete a mapping, simply click the Delete option for the specific mapping item.

It will ask you to confirm the mapping deletion. Click DELETE button to perform the deletion or cancel to escape out.

![](./inventory-mappings.assets/e960131b5b5f7d8fb13885ba9a55a632.png)

## Merging Mappings

If you need to merge 2 different mappings that are the same (duplicates), check-mark which ones to merge in the MERGE column. Then click the MERGE SELECTED button at the bottom.

![](./inventory-mappings.assets/431877626da4f9b322a8840564e050b3.png)

The mappings & quantities would be merged into one mapping.

If you check-mark 2 inventory mappings that conflict with each other, you will get that warning message. You can check-mark them to merge again and click OVERRIDE button to override this warning or click Cancel to escape out.
