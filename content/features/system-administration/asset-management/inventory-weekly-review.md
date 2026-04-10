---
id: '1eaZDcPz5DZCexhkRzoxmk5I-rtLHHjsnWKzF2gWhS6I'
title: 'Inventory Weekly Review'
date: '2026-01-20T18:11:07.995Z'
version: 54
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/asset-management/show-inventory-tab/'
source: 'https://drive.google.com/open?id=1eaZDcPz5DZCexhkRzoxmk5I-rtLHHjsnWKzF2gWhS6I'
wikigdrive: 'v2.16.0'
---
The Weekly Review Inventory Tab is located within the sidemenu tab named *Inventory*.

Weekly Review tab shows you a worklist of problem inventory items that should be reviewed. These are inventory items that have a negative quantity that need attention or expired meds in the inventory that need worked on. We call it ‘weekly review' because this tab should be looked at weekly as meds expire regularly (depending on the expiration date that was entered) and inventory could get a negative quantity if items aren't dispensed correctly or quantities modified correctly. Your practice can rename this tab as you wish. Items will appear on this list for one of two reasons: 1) They fall outside the PAR limits that are set on that inventory item and 2) They are about to expire.

Your MIE Implementer can also set up an email cron job to email someone in your organization when inventory items hit a low Par level set or quantity specific. To narrow down the results, the Weekly Review report has several filters one can fill in to limit and reduce results at the top. When done entering in anything to filter by, simply click the Filter button to show the results limited to those filters.

![](./inventory-weekly-review.assets/516d0820c46ac4554f457b51c6fda980.png)

By default, the Weekly Review will open to show you 2 buckets. The *General Inventory Review* section and the *Patient Assistance Inventory* *Review* section.

## General Inventory Review

The General Inventory Review section shows any inventory items that have a zero quantity (out of stock), have a negative quantity, items that have hit a min or max PAR level for it (this is the ‘Limit' column), and inventory items that are expired according to the expiration date entered for the item details.

![](./inventory-weekly-review.assets/761b2f34e8eb03bb02e24e837d14c1d1.png)

The item name and Lot number fields are hyperlinks. If you click an item name or lot number shown there, it will take you to the *Transaction Report* screen and automatically limit that report screen to the item/lot number you clicked. It prefills fields for you.

In the Weekly Review, you have options to Edit and/or Expire a medication or a supply. For explanation on these options, please see the other help documentation named [Show Inventory](https://docs.enterprisehealth.com/functions/system-administration/asset-management/show-inventory-tab/).

![](./inventory-weekly-review.assets/f02383588e47b981011b1f99694f17e4.png)

## Patient Assistance Inventory Review

The Patient Assistance Inventory Review section in Weekly Review is patient specific. This is used for practices that perhaps use drug company patient assistance programs and enter received meds into patient specific charts as inventory specific for them (instead of general inventory). This section shows any inventory items (along with the patient's name that has this inventory item) that have zero quantity, negative quantity or inventory items that are expired (it knows this from the expiration date that was entered when a user added the medication to the patient's specific inventory)

You have options to Edit, Expire, or Transfer a medication/supply to General Inventory.

For explanations on these options, please see the other help documentation named [Show Inventory](https://docs.enterprisehealth.com/functions/system-administration/asset-management/show-inventory-tab/).

![](./inventory-weekly-review.assets/273e8797a3e691c0bc1a3453c276592c.png)
