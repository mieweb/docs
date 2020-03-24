---
title: "Inventory Weekly Review"
date: 2020-02-27T20:32:27.298Z
url: "inventory-weekly-review.md"
id: 1eaZDcPz5DZCexhkRzoxmk5I-rtLHHjsnWKzF2gWhS6I
source: https://drive.google.com/open?id=1eaZDcPz5DZCexhkRzoxmk5I-rtLHHjsnWKzF2gWhS6I
menu:
    main:
        name: "Inventory Weekly Review"
        identifier: "1eaZDcPz5DZCexhkRzoxmk5I-rtLHHjsnWKzF2gWhS6I"
        parent: "1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek"
        weight: 5740
---
The Weekly Review Inventory Tab is located within the sidemenu tab named *Inventory*.

Weekly Review tab shows you a worklist of problem inventory items that should be reviewed. These are inventory items that have a negative quantity that need attention or expired meds in the inventory that need worked on. We call it ‘weekly review' because this tab should be looked at weekly as meds expire regularly (depending on the expiration date that was entered) and inventory could get a negative quantity if items aren't dispense correctly or quantities modified correctly. Your practice can rename this tab as you wish. Items will appear on this list for one of two reasons: 1) They fall outside the PAR limits that are set on that inventory item and 2) They are about to expire.

Your MIE Implementer can also set up an email cron job to email someone in your organization when inventory items hit a low Par level set or quantity specific. To narrow down the results, the Weekly Review report has several filters one can fill in to limit and reduce results at the top. When done entering in anything to filter by, simply click the Filter button to show the results limited to those filters.

![](external_files/517638836bc745bca715e3b3c4748b93.png)

By default, the Weekly Review will open to show you 2 buckets. The *General Inventory Review* section and the *Patient Assistance Inventory* *Review* section.

## General Inventory Review

The General Inventory Review section shows any inventory items that have a zero quantity (out of stock), have a negative quantity, items that have hit a min or max PAR level for it (this is the ‘Limit' column), and inventory items that are expired according to the expiration date entered for the item details.

![](external_files/97842b897b6b42ba3d5bf6d68f5528cd.png)

The item name and Lot number fields are hyperlinks. If you click an item name or lot number shown there, it will take you to the *Transaction Report* screen and automatically limit that report screen to the item/lot number you clicked. It prefills fields for you.

In the Weekly Review, you have options to Edit Med, Expire Lot and Expire Med. Even though the hyperlinks have the word ‘med' in them, the functionality is used for immunization and supply order inventory items. For explanation on these options, please see the other help documentation named *Show Inventory*.*pdf*

![](external_files/d3d3a275523f7d572f447b12ae9911d3.png)
## Patient Assistance Inventory Review

The Patient Assistance Inventory Review section in Weekly Review is patient specific. This is used for practice's that perhaps use drug company patient assistance programs and enter received meds into patient specific charts as inventory specific for them (instead of general inventory). This section shows any inventory items (along with the patient's name that has this inventory item) that have zero quantity, negative quantity or inventory items that are expired (it knows this from the expiration date that was entered when a user added the medication to the patient's specific inventory)

You have options to Edit Med, Expire Med or Transfer Med to General Inventory.

For explanations on these options, please see the other help documentation named *Show Inventory.pdf*

![](external_files/050653f7790ece4e1db76c183ea9e528.png)
