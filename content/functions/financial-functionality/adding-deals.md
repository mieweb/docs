---
id: "1RwavD1Q59PIs4xjzk_RJp_T9Wl8d-p65Lq7gOPM6sGU"
title: "Adding Deals"
date: "2025-08-27T14:00:47.146Z"
version: 156
lastAuthor: "auhrick"
mimeType: "text/x-markdown"
links:
  - "https://mie.talentlms.com/shared/start/key:SOLRKMFP"
source: "https://drive.google.com/open?id=1RwavD1Q59PIs4xjzk_RJp_T9Wl8d-p65Lq7gOPM6sGU"
wikigdrive: "v2.15.30"
---

A Deal is created on an Employer Organization chart.

Navigate to the Employer Organization chart (the chart that the EH client is entering into business with) and click the Add Deal link.

![](./adding-deals.assets/bb48f9db6ee45c9bafbf511fd3bf87fb.png)

## Deal Encounter

Complete each section of the Deal.

### Parties

The Employer Organization will default to the EO for which the deal is being created. Use the autocomplete to enter the Provider Organization (the EH Client), then proceed to the next section. Adding a PO is **REQUIRED**.

![](./adding-deals.assets/8f6c39aa4df15617df2a543853dec8c6.png)

### Contacts

Enter the Signatory for both the EO and PO **(REQUIRED)**.

![](./adding-deals.assets/3cc3b6d414bf565fc3a7df29ec3a03dc.png)

In the ‘Name' field, type the name of the contact for the employer or provider organization. The system shows matching contacts. Select the contact.

In the ‘Role' field, select ‘Signatory Contact'. Select the ‘Add' button. Repeat to add another contact, if appropriate. Then select ‘Next'.

### Details

Enter a Title, Start Date and End Date. These items are **REQUIRED**. Before the deal is considered active, the Deal must also indicate that the contract has been executed (Executed=Yes). In some client configuration scenarios, a deal may be created, but an official contract between the two has not yet been finalized. A Deal can be made and set to Executed=No, meaning this Deal has not been executed yet and not "live" in the system. Executed=Yes is **REQUIRED** before the deal is recognized in the system.

![](./adding-deals.assets/3d7b57aa7d7e17c9e7467e16b3c73057.png)

Title:

- Enter the name for this deal<strong>(REQUIRED).</strong> Or use the macro's library to create a standard.

In the Start Date field, do one: (**REQUIRED**)

- Type in the date, month, and year on which the deal is effective.
- Select Today to choose today's date, month, and year on which the deal is effective.
- Select Calendar to choose from a calendar the date, month, and year on which the deal is effective.

In the End Date field, do one:

- Type in the date, month, and year after which the deal is not effective.
- Select Today to choose today's date, month, and year after which the deal is not effective.
- Select Calendar to choose from a calendar the date, month, and year after which the deal is not effective.

In the Executed field, select Yes or No to indicate if the deal is in effect between the organizations. (**REQUIRED**)

### Charges

In the Charges section, select ‘Show/Hide Quick Lists'. Quick List appears on the right hand side of the Charges section. Then click the ‘+' icon to add procedures/orders and pricing for items covered in the Deal.

![](./adding-deals.assets/cb103d05a58810ccb868268815e77050.png)

The Add Charge window appears. Enter in each field as appropriate.

![](./adding-deals.assets/2d0db55937fdd79ab926e0ddb3ad1773.png)

- In the Date field, enter the month, day and year on which the charge is created or select Today to use today's month, day, and year or select Calendar to select the month, date, and year from a calendar.
- In the ‘Funding Source' field, select an account against which this charge will be made. Please note that this will not be passed to OpenPM for billing purposes.
- In the ‘Item' field, type a description of the item. The system displays matching items. Select the appropriate one. Its name appears in the Item field and its billing code (if it has one) appears in the billing Code field.
  - Note: If a client is authorized to use billing and loads them in their database, the billing will pull forward from the Orders-List Editor.
- A charge will not drop in an encounter without a code in the billing field. You do not need to use a billing code but a string of alpha/numeric characters needs to be listed here in order for the charge to drop on the encounter.
- In the ‘Reason #1' through ‘Reason #4' fields as appropriate, type a description of a diagnosis or a diagnosis code to associate with this item. The system displays matching items. Select the appropriate one.
- To the right, from the Modifiers List, select an appropriate modifier. The selection appears in the Modifiers field. If no modifier is necessary, skip.
- In the ‘Quantity' field, type the quantity of the item to include each time this item is used in a visit.
- In the ‘Price' field, type the contracted price of the item as dollars and cents.
  - Note: a system default for pricing can be loaded on the procedure/order codes in the Orders-List Editor.
- In the ‘Memo' field, type any information applicable to the item not otherwise contained in the window.
- The Recurring Charge check box is used when utilizing the Ledger in Enterprise Health only. This box is used to indicate the item entered is a capitated service and not fee for service.
- To save this item and add more, select Add Another. Otherwise, select Save.

Once all items have been added to the Charges section, the complete list of the procedures, associated conditions, and pricing will display. Hover over the items to view, edit, delete or rearrange order icons.

![](./adding-deals.assets/e4c6e1d739ada6e86a2e18aa724a589d.png)

### Documents

The documents section is designed to show a list of any linked documents to this Deal. Clients may configure custom document types and scan/upload relevant linked documents to this deal. For example, a copy of the formal executed agreement could be scanned in and linked to this encounter. If this is done, a link to the document will display in this section. If there are no linked documents, this section will be blank/empty.

### Approval

Once all required information has been added in the Deal and the Deal executed flag is set to Yes, the Deal encounter must be closed to go into effect. Select the ‘Archive & Close' button to complete the Deal. If a Deal was created, but no longer needed or an official contract is never executed, ensure that the Executed field in the Details Section is set to No before clicking ‘Archive & Close'.

## Deal Summary

A summary of Executed Deals created for each employer group can be viewed from the Deal Summary Tab. The Deal Summary tab displays a list of all active deals for the employer (EO). The Deal number, title, start date and the orders and their respective pricing within the Deal.

![](./adding-deals.assets/a076a705ccfa40d4a0eac3a8cdefc1df.png)

![](./adding-deals.assets/b8cb4242876b115ec9ef2972698670c2.png)

## Learning Management System

To learn more about Adding Deals, follow the link below to Learning Management System course:

- [Deal Management for Outside Occ. Health Services](https://mie.talentlms.com/shared/start/key:SOLRKMFP)
