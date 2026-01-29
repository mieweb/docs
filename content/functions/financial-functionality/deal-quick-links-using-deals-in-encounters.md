---
id: "1j0ZwMjaAjaVZIJfllNz4vtUgCHxD3Z_9Ze7Wlo0H0HQ"
title: "Deal Quick Links - Using Deals in Encounters"
date: "2025-11-11T16:21:14.036Z"
version: 83
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=1j0ZwMjaAjaVZIJfllNz4vtUgCHxD3Z_9Ze7Wlo0H0HQ"
wikigdrive: "v2.15.30"
---

## Creating Orders in Charts from a Deal

Deals can be used to generate orders to be performed for today's visit or populate orders on the employee due list, which may be used at today's visit or a future visit.

### Employer Relationships

To review employer deals from within employee chart or to add/update due list orders:

- Open employee chart
- Confirm the employee has a relationship to the applicable employer (EO). A relationship to an Employer Organization with active deals is required to be able to create chart orders using the Deal feature.

![](./deal-quick-links-using-deals-in-encounters.assets/2919a144361c705e01c8a59e79081b75.png)

- If the relationship doesn't exist, edit/update the employee's relationship to the appropriate Employer Organization.

![](./deal-quick-links-using-deals-in-encounters.assets/c48ce26bf44b3f0dfd214b6b5fe25dfb.png)

## Deal Quick Links

When a relationship has been created with an EO, all active Deal's associated with that employer group (EO) will display in the Deal Quick Link portlet. Click the up/down arrow to the right of the Deal Title to view a list of order items covered/contracted by the Deal.

![](./deal-quick-links-using-deals-in-encounters.assets/d0b3cee30de11b2a8da1e2add8d8711e.png)

If desired, you may select individual or specific items to perform today or add to the due list.

![](./deal-quick-links-using-deals-in-encounters.assets/1a0355a206a56924872bb8f8735388ab.png)

Click the check box to the Left of the Company Name, to select all orders in the Deal.

![](./deal-quick-links-using-deals-in-encounters.assets/2ca68b8b34ecef8b7c77ca40fd8f8f36.png)

- Clicking ‘Evaluate Selected Orders' will add the orders to the employee's Due List. These may or may not necessarily be performed today.
- Clicking ‘Perform Selected Orders' will open an encounter and add all the orders to the Tests & Procedures section to be completed today.

If there are any open encounters, a list will display on the bottom half of the Deal Quick Links portlet. If you wish to use an existing encounter, select the radio button for that encounter, then click the ‘Perform Selected Orders'. If you wish to open a new encounter, click the Add New Encounter button.

**_Note: the Add New Encounter button will open a blank encounter showing all default encounter sections. It does not open a specific encounter template._**

![](./deal-quick-links-using-deals-in-encounters.assets/87eb9dc7cd1c638952447439eddf624d.png)

## Using Deals in Encounters

### Encounter Section

It is important on all encounters to ensure that the date, provider, Employer and Payer are set. It is not uncommon for an employee to be associated with many Employer Organizations. **Therefore, when seeing a patient, ensure that the Employer and Payer are set to the correct Employer to be billed for today's services.** These fields will default to the first employer relationship on the relationship list. If needed, change the Employer and Payor.

![](./deal-quick-links-using-deals-in-encounters.assets/f1bffa8ea7ed69bb5d945ea41e9c13d2.png)

For users on RC202303 and newer and an encounter is added from the Quick Add link (Quick Links portlet) or from an appointment at checkin, the Employer Organization will auto populate in the encounter if the patient is linked to only one Employer and the payer will be set if that EO is also an account. If the patient/employee is associated with multiple employers or has multiple payers, the users must manually indicate the appropriate employer/payer on the encounter.

One Employer:

![](./deal-quick-links-using-deals-in-encounters.assets/ed7ea3c7287877975fb60bf84b24872f.png)

Two Employers:

![](./deal-quick-links-using-deals-in-encounters.assets/922df8e3f8f6ef139679b440141d932a.png)

### Tests and procedures section

If orders from the Deal were added to the Due List prior to opening an encounter, the order items will display in the Tests & Procedures Section. Simply hover over the orders to be performed and click the ‘Add to Exam' icon to add the procedure to the exam.

![](./deal-quick-links-using-deals-in-encounters.assets/174df74fe9ea6f053ed9b4260e0f6335.png)

If Deal orders have not been selected prior to the visit, they can be added on the fly from the Tests & Procedures Quick List.

**_Note:_** The Deal order items will only display in the Tests & Procedures Quick List if the Employer/payer have been set in the Encounter section.

**_Note:_** Special pricing configured on a deal will always override the pricing in the encounter when used. However, if treatment or equipment needs to be added to the encounter ad hoc, the pricing and codes must be configured directly on the order items that are not found on the deal. This is especially common for work comp workflows where you cannot always predict what services are needed and add them to the deal proactively. The user can then search for the orders (procedures) Tests & procedures, or pick them off of the pick list and add them to the encounter as normal.

![](./deal-quick-links-using-deals-in-encounters.assets/c97c795efec61dc2ef7a0c1af4e627c2.png)

**It is important to remember to Complete Orders Items. Items will NOT be billed until they are marked as completed and the encounter is Archived and Closed.**

![](./deal-quick-links-using-deals-in-encounters.assets/52c0d6688b52c6d03d74a4b547bbde54.png)

### Financials Section

The Financials section of the encounter will display a list of completed orders items and the amounts that will be billed. Once all items have been completed, click the ‘Archive & Close' button to close the encounter. Please note that any items not shown when this section is collapsed will not be billed through the billing interface.

![](./deal-quick-links-using-deals-in-encounters.assets/38a735ce2d308f98313549d26773dd38.png)

## Ordering Labs from the Encounter Visit

When ordering Labs from a Deal, the user should select the labs on the due list (populated by the Deal) and create a lab requisition. The Bill Type on the lab requisition Bill Type needs to be set to "**Internal**". When set to Internal, the labs ordered will display as billed on today's encounter. The "Internal" Bill Type is only available on RC 202303 and newer.

![](./deal-quick-links-using-deals-in-encounters.assets/06b404336451c60938f5c4b6cbf50af9.png)
