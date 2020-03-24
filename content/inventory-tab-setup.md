---
title: "Inventory Tab Setup"
date: 2020-02-27T20:31:20.847Z
url: "inventory-tab-setup.md"
author: Alan Quandt
id: 1lxHNNJ4DFvCjc08-aQVeZdFu3PUT2xxgpxamGy-PzMs
source: https://drive.google.com/open?id=1lxHNNJ4DFvCjc08-aQVeZdFu3PUT2xxgpxamGy-PzMs
menu:
    main:
        name: "Inventory Tab Setup"
        identifier: "1lxHNNJ4DFvCjc08-aQVeZdFu3PUT2xxgpxamGy-PzMs"
        parent: "1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek"
        weight: 5680
---
Using the "Control" tab in the Inventory module is the first step to getting your inventory module set up. This is where you key in to tell the system any and all inventory items that you will want to track. This isn't where you add quantity or tell the system specific lot's, quantity, etc. This is just keying in a name of an item that you want shown on inventory reports, to users to dispense inventory for, etc.

The second step is them to ‘map' the inventory master item to a specific recognized ‘type' of medication, CDC immunization or supply order (see other help documentation *Mappings Inventory Tab.pdf*)

Then the third step is to ‘add received inventory' to your system so you can put in specific quantity and details of the specific inventory items that you will start your inventory system off with in order to decrement and use inventory. (see other help documentation *Add Inventory Tab.pdf*)

First, the system needs to know what items it will be tracking. This is done through the "control" tab (or Inv Master List tab). This is the initial base setup to tell the system it will be tracking a specific inventory item.

The *Control (Inv Master List)* tab is located in the sidemenu tab named *Inventory*.

When you click on *Control/Inv Master List* tab, it will open to the default of showing you all of the current *Inventory Items Master List* items with its {{% system-name %}} Inventory ID #. It will also show any mappings of that master inventory item.

![](external_files/18aae460cf365604e3411d69685a75c8.png)

First search to see if the specific medication (strength, etc), immunization and/or supply order inventory item is already in the master inventory list and would possibly just need edited instead of added as completely new.

To search, us the *Search by* field at the top to narrow down your search results.

![](external_files/97cb507b2ab591074f9501fa044e956c.png)

You can search by inventoried name, or by an alias or by Inventory ID #.

You can search for 2 at a time by clicking the [ + ] button in the *search by* section.

If you click the [ + ] sign in search by, you can open up another search to search a medication name and it's alias name or 2 different searches, etc.

![](external_files/90b770a8fcdc2f735efa93979d4ce2b8.png)

After you click the SEARCH button, your results will display on your screen in **the Inventory Items Master List** section under the search by section.

![](external_files/bfa7afbc30d70ef8a03142636b6762d2.png)

## Edit/Delete Inventory Items

If you need to edit the Display Name or Alias of an inventory item that is showing in the Inventory Master List, click on Edit in the options column.

![](external_files/a93ae2d8ea05bed37910396bf9938f22.png)

When you click Edit for a master inventory item, it will take you to the *Rename Inventory Item* screen.

Here you can type in the New Name and/or a New Alias. The New Name should include the name & the strength/form, size, box info, etc. The Alias is like a ‘remembered name' just like when in e-meds module when prescribing a med. You do not have to enter anything in the Alias field. It is optional, but alias names do show to users when dispensing a medication, and on inventory reports and searches.

![](external_files/32514237be88677f8e2244a64966a4e5.png)

Click the CHANGE NAME button when done or cancel to get out of this screen.

To delete a master inventory item, click Delete in the options column.

![](external_files/83edb2c2bedca7089faa9a5d5965876f.png)

If the inventoried item still has quantity in stock, you will see an error message that you cannot delete the inventory item. If you needed to delete that, you'd have to go and edit it in the *Show Inventory* tab and expire it or edit it to a zero quantity first. If you have a zero quantity inventory item that you need to delete, you will get a message to confirm the inventory item deletion. Click Delete to continue to delete the inventory item completely from the master inventory list of the system.

![](external_files/2399390bcbe532337dec67dd87311a4a.png) ![](external_files/61b2c51e70ef7b0737236ee40ce7213b.png)

## Merging Inventory Items

Merging would be done if (for instance) two different items are in this inventory master list and they are the same (duplicates). Perhaps someone entered in one and so did another staff member later on into this master inventory control tab.

If you need to merge inventory items in the Inventory Master List, checkmark which items to merge in the *Merge* column. Then click the *Merge Selected* button at the bottom.

![](external_files/04673c5b9e561bbd28cf198c8bde6986.png)

It will then take you to the *Merge Inventory Items* screen. Here you type the new name of the Merged Item or same name, and optional you can enter a new alias merged item name.

![](external_files/6cfb3ed35e6cab9d9275623947b0d063.png)

Click the MERGE button at the bottom or cancel to escape out.

It will then merge all those selected into one new mapping with the name/alias you entered.

## Adding a Medication to Inventory

If you've confirmed that the inventory item doesn't already exist in the Master Inventory Items list, then click on Add an Item link at the top right.

![](external_files/cdf9561a14b1b744f7a32e5eebb3f999.png)

The *Add Inventory Item* fields will display. Type in the name of the inventory item you wish to add to the inventory along with it's strength (10mg, 25mg,etc) and form (tablet/injection, supply info, etc). You can also type in its alias name (this is like a remembered name that can be used when dispensing this) if it has an alias known to your staff at your practice.

![](external_files/99d51c666b69be9d41f69050542cc4f6.png)

You will get a confirmation that the inventory item was added successfully. It assigns a {{% system-name %}} Inventory ID number and shows now in the Inventory Items Master List.

![](external_files/0afaf6117400a4c00dcbcf665b390c98.png)

After you have successfully added an item to the master inventory list, you need to then map it. Please see separate help instructions named **Mappings Inventory Tab.**

