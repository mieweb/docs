---
title: "Show Inventory Tab"
date: "2020-02-27T20:32:21.170Z"
url: "general-functionality/system-administration/asset-management/show-inventory-tab.html"
version: 29
id: "1pwmVB0X2rvStNmDOmy_XRa1ScUcZmzqEQlQWuJ9xtb0"
source: "https://drive.google.com/open?id=1pwmVB0X2rvStNmDOmy_XRa1ScUcZmzqEQlQWuJ9xtb0"
menu:
    main:
        name: "Show Inventory Tab"
        identifier: "1pwmVB0X2rvStNmDOmy_XRa1ScUcZmzqEQlQWuJ9xtb0"
        parent: "1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek"
        weight: 5710
---
Show Inventory (Current Inventory) tab is located within the sidemenu tab named *Inventory*. It will open to the default (landing page) of showing you all current *General Inventory* for your system. It will show in and out of stock, but there is a hyperlink at the top right corner that you can hide or show Out of Stock. This is a listing of your current inventory in the system along with its quantity, where it is (site) and item details.

![](show-inventory-tab.images/image1.png)

{{% info %}}

To see specific Patient Assistance current inventory (if your system uses Patient specific Inventory for patient assistance programs), then you would click the Show Patient Inventory hyperlink at the right of this screen view (see more specific instructions later in this help documentation).

{{% /info %}}


The *Show Inventory* (Current Inventory) screen shows all medications, immunizations and order items you have entered as inventory for your practice with its specific quantity in stock at this current time and other details (site that inventory is at, lot & details, etc).

![](show-inventory-tab.images/image2.png)

The columns show this information:

* <strong>Inv ID</strong>: This is the {{% system-name %}} inventory ID# the master inventory item was assigned.
* <strong>Drug Class</strong>: If your system is set up to show this, it shows the drug class (narcotics, etc) of an inventory drug. The drug classes are 1-5 for narcotics. Non-narcotics are zero.
* <strong>Item Name</strong>: This is the master inventory list item name of the inventoried item. This is also a hyperlink. If you click an item name shown here, it will take you to the <em>Transaction Report</em> screen and automatically limit that report screen to the inventoried item name you clicked. It prefills fields for you based on that item name you clicked.
* <strong>Qty</strong>: This is how many the site/location has on hand currently. Any Qty that is zero means it is out of stock. You can click the Hide Out of Stock link at the right to not show the inventoried meds that are out of stock.

![](show-inventory-tab.images/image3.png)

* <strong>Site</strong>: If your practice has multiple locations where inventory is kept, the site will be shown here of where that inventoried item is located at.
* <strong>Lot</strong>: This is the Lot number for this specific lot of meds or items that are inventoried. This is also a hyperlink. If you click a lot number shown here, it will take you to the <em>Transaction Report</em> screen and automatically limit that report screen to the item/lot number you clicked. It prefills fields for you based on that lot number you clicked.
* <strong>Expiration Date</strong>: This is the expiration date of that specific inventoried item.

You can also use the search tool at the top of this Show Inventory view to search for something specific using these same fields to narrow down your search by.

![](show-inventory-tab.images/image4.png)

## Options

There are several options you can complete in the Show General Inventory screen.

{{% info %}}

the options hyperlinks say the word "med", but these options apply to immunization/injection inventory as well as supply order inventory.

{{% /info %}}


![](show-inventory-tab.images/image5.png)
* <strong>Edit</strong>: This is used when you need to edit/change the count/quantity of the inventoried item. When you click Edit, it will allow you to edit to enter a new quantity for this item. You should enter comments pertaining to the quantity being edited also.

![](show-inventory-tab.images/image6.png)

* Click the SAVE button to update and save with your change. The RESET button will reset the fields back to what they originally were when you just clicked edit and you can start over. The CANCEL button will cancel this and take you out of the screen.
* <strong>Expire:</strong> This is used if you need to expire some quantity or all quantity of the inventoried item. When you click Expire, it defaults to show the quantity you currently have. You then need to enter the number (quantity) you wish to <em>expire</em>. If you are expiring <em>all</em> the quantity in that, you would leave the quantity alone and type a comment of why you are expiring this. If you need to only expire a portion, you can enter the specific quantity you wish to expire from that item. You are typing in the quantity to expire. You should enter comments pertaining to the quantity & reason why you are expiring.

![](show-inventory-tab.images/image7.png)

* If you do not see the link to expire a med, that means the item is out of stock (zero quantity) so there is nothing to expire.
* <strong>Transfer:</strong> This is used if you need to transfer a specific quantity of an inventoried item to either a different site or to a specific patient (if you use the patient assistance inventory). When you click Transfer, it defaults to show the quantity you currently have. You then type in the quantity that you wish to transfer.

![](show-inventory-tab.images/image8.png)

* In the <em>Destination</em> fields, you can begin typing in the name of the site (location) you wish to transfer this inventory to. The system will auto-complete and give you choices of locations/sites that are currently in your {{% system-name %}} system. If you are not transferring an inventoried item quantity to a specific patient, please leave the patient field as <em>None.</em> Or, you can also begin typing in a patient's last name and it will auto-complete choices for you to move the inventoried med quantity to that specific patient noted.

{{% info %}}

If your system uses Stockpile functionality, then to transfer to a stockpile, you first need to select the Main "Site", then tab and select the stockpile to transfer to using the "Patient" field. That "Patient" field will show stockpile choices to transfer to after selection.

{{% /info %}}


You should enter comments pertaining to the quantity & reason why you are transferring.

### Hide Out of Stock

When you search and show inventory, it will show all results that match. Below shows an example search for *amox* and it renders all the inventoried items that begin with *amox*. It shows one that has a quantity of zero, which means it's out of stock.

![](show-inventory-tab.images/image9.png)

You can click the Hide Out of Stock link also to narrow down your results to show only the inventoried meds that have quantity left in the inventory.

![](show-inventory-tab.images/image10.png)

Current inventory without quantity (aka: out of stock) is now hidden:

![](show-inventory-tab.images/image11.png)

You can reverse the results to show all again by clicking Show Out of Stock link then in the same area.

![](show-inventory-tab.images/image12.png)

### Show Patient Inventory

If your practice utilizes the Patient Assistance Program and Patient Inventory medication functionality of the Inventory module, you can quickly see current inventory for Patient individual Inventory from this tab. This is accessed by clicking the Show Patient Inventory hyperlink at the right of this screen view. The Patient Assistance Inventory is used by practices that receive or buy meds for a specific patient through a patient assistance program sponsored by drug companies, etc.

![](show-inventory-tab.images/image13.png)

The Show Patient Inventory shows the medication inventory and the specific linked patients that have meds received through patient assistance programs specifically for them. These are entered by using the Dispense chart tab in the patient's specific chart (see other help documentation named *Add Patient Assistance Inventory*).

![](show-inventory-tab.images/image14.png)

The options (Edit & Expire) are the same as above in the General Current Inventory screen (see instructions in previous pages).

There is however an option to Transfer to General. If you click Transfer to General, it will allow you to transfer a specific quantity of this specific patient's inventoried medicine into your practice's General Inventory (not patient specific).

![](show-inventory-tab.images/image15.png)

When you click Transfer to General it defaults to show the quantity that specific patient currently has in their chart that is applied to them specifically. You then type in the quantity that you wish to transfer and designate the site. The patient field will display as NONE since it's being moved to "general" inventory and out of patient assistance inventory.

![](show-inventory-tab.images/image16.png)

You should enter comments pertaining to the quantity & reason why you are transferring from the specific patient's inventory into the practice's general inventory.

