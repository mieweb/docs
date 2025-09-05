---
id: '1RuHA33Tl1EUkDZwSyZgp1-ST4uY012jXSXWqjf9oqG0'
title: 'Financials Pending Billing'
date: '2024-10-04T14:42:37.293Z'
version: 104
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/reports/using-datavis-grids-data-tools/'
source: 'https://drive.google.com/open?id=1RuHA33Tl1EUkDZwSyZgp1-ST4uY012jXSXWqjf9oqG0'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
The Pending Billing Report is populated by billing records generated from orders with billing codes/prices and/or Deals. This report can be used in a number of ways to help users monitor billing records.

## Tracking Order Status

Use the Order Status column to track orders that are marked as completed. Typically billing interfaces are configured to send completed order/billing items to the billing system automatically. However, some clients may customize the interface to send at specific times of the day, end of day or manually. If a completed order continues to display on the report after the interface is configured to have sent them, then the billing record may need to be reviewed. The Pending Encounters report may also provide additional insight.

Billing records for order items that are In Progress and Ordered also display on this report.

Since only completed order items with billing records are sent to the billing software, this report can be used to identify items that have not been billed yet.

![](../financials-pending-billing.assets/5d7f389e8da44657f84742b4bcb9612e.png)

Order Items that have been added to the encounter will display with an IN PROGRESS order status. Orders that have been added to the encounter and completed will display with a COMPLETED order status. If an IN PROGRESS item is on the report, then the provider may not have completed that order at the time of service or intentionally left it in progress or meant to delete it and did not. Therefore the IN PROGRESS order items should be audited and validated.

![](../financials-pending-billing.assets/e41dcebde337353ee0e449cbe1e6c0cb.png)

Labs or other testing sent* outside of the clinic* (deal orders) that have been made into an order requisition have a status of ORDERED. Ordered labs will display on the Pending Billing report until all order items have been received for the order request. It is not uncommon to receive one lab result back and have that line item display as completed, yet another still display as Ordered. Once all labs on the order request are back and the order status marked as completed, they will be sent to the billing system and fall off the Pending Billing Report.

![](../financials-pending-billing.assets/30115d4cd94ac9dd3f9f66503cb08f83.png)

## Charge Code

In addition to sending completed orders with billing records, the system also required a charge code/billing code.  If a billing code is absent, then this charge will not be accepted by the billing system. Use the "Charge Code" column of the Pending Billing report to catch any charges with billing records that do not contain a charge code.  Some clients may intentionally create an order item/record, but intentionally not bill it. Lack of a billing code could also be a Deal configuration issue. Any missing charge codes on deals or billing order items should be reviewed and validated. If an item intentionally does not need to be billed, the user can select the row and choose the delete option to remove it from the report.

![](../financials-pending-billing.assets/30b0fbfa847872daa77e726a44322c7f.png)

## Other Uses

Since several columns are displayed in the Pending Billing report users can use the filters to sort for charge records by EO, price, provider, etc. The report can be used in a number of ways based on need.

## Updating the Report

Select a row or row(s) to see additional options at the bottom of the Datavis

![](../financials-pending-billing.assets/598efca9d8c638881034ddd3b67d2e2d.png)

**Edit Memo:**

Edit Memo allows the user to add/edit an internal note/memo on the billing item. It is not necessarily sent to the billing system.

![](../financials-pending-billing.assets/08dddc8d375b793081db0a2233615c5d.png)

**Edit Quantity:**

Most billing items will default to a quantity of 1 unless the user specifies additional units when billing. For example, a patient's charge may be "XYZ Injection 5mg @ $10.00", but the patient was administered "10mg of XYZ injection". Therefore the quantity can be changed to 2, so that 10mg can be billed.

![](../financials-pending-billing.assets/08228f396fec55cb1c58b5e69a48585f.png)

**Edit Price:**

This allows the user to edit the existing price and enter a custom price for this service.

![](../financials-pending-billing.assets/dd01c8443f51db81038a2b7293fc33fa.png)

**Edit Account:**

Some Deal's may have more than one potential payer. For example, one payer could be "XYZ insurance company" and another maybe "ABC Work Comp company". Typically, the payer is set on the encounter at the time of service, but if the wrong payer was selected, the biller can edit the payer on the charge before sending the charges to the billing system. The Account field is an autocomplete that will search for existing payors in the system.

![](../financials-pending-billing.assets/faa0c6d529fa578e724cf91e6f207c29.png)

**Delete:**

If determined a charge should not be sent to the billing system be it error or intentional, the billing record can be deleted. When the billing record is deleted, the item will fall off the Pending Billing report. When selected, the user will be asked to confirm that the charge should be deleted.

![](../financials-pending-billing.assets/c8d65cf0072efff00dd3298ebca77956.png)

**Send to Billing:**

Clicking send to billing will force the item to be sent to the billing system, even though a potential error might exist (which is why it is showing on the report). This may also be used to send completed orders to the billing system before all other orders on an encounter have been completed. Some clients may choose to do this for end of month or fiscal year billing. When selected, the user will be asked to confirm the charges should be sent to billing.

![](../financials-pending-billing.assets/a587ea379dad41db579d5fd9e8212a4c.png)

**Close:**

The close button is utilized for clients who use the Ledger to track charges against revenue and cost centers. This process is typically done at the end of the day after all individual transactions have been completed. This function does not send encounter billing records to a billing system.

Learn more about using Datavis reports, reordering columns and saving perspectives [here](https://docs.enterprisehealth.com/functions/reports/using-datavis-grids-data-tools/).
