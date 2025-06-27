---
id: '1A7oWwntZCZcpM4fYviTX7-qcxJy3D1xh_2Ocwsfs6dQ'
title: 'Financials'
date: '2025-06-20T15:12:23.410Z'
version: 200
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../financial-functionality/adding-deals.md'
  - '../financial-functionality/deal-quick-links-using-deals-in-encounters.md'
  - '../financial-functionality/configuring-access-to-financial-modifiers.md'
  - '../financial-functionality/configuring-access-to-prices.md'
  - '../financial-functionality/configuring-access-to-financial-funding-sources.md'
  - '../financial-functionality/financial-reports.md'
  - '../financial-functionality/viewing-financial-reports.md'
  - '../reports/financials-pending-encounters-report.md'
  - '../financial-functionality/downloading-financial-reports.md'
  - 'https://mie.talentlms.com/shared/start/key:SOLRKMFP'
source: 'https://drive.google.com/open?id=1A7oWwntZCZcpM4fYviTX7-qcxJy3D1xh_2Ocwsfs6dQ'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
The financial functionality of the system allows you to:

* Track relationships between your organization and service providers, including recording and managing contractual details and controlling which services those providers can provide.
* Set fees for services through fee schedules.
* View reports such as account details and pending billing and generate statements and forms.
* Post payments and manage ledger transactions.

## Financials encounter section

The Financial encounter section lists and allows charge and payment capture.  Most charges are added automatically, but you can add or remove charges and payments as necessary using the right side quick list method.

![](../financials.assets/aa556c09344b84269e7a4116d5ac754d.png)

Expanded section datavis view:

![](../financials.assets/aab0ccfb37cd7196e18984a981590317.png)

The system may apply charges automatically based on entries in the Vitals section or when Orders (Tests & Procedures) are performed on the encounter.  The billing code of an order determines the amount of the charge.

### Security Permission

*Manage Encounter Charges* security permission interoperates with the Financials encounter section and on stored documents.

![](../financials.assets/8228bc3cb42e49cd497067562a2b3e0f.png)

### Add a Charge

On the right side quick list method, there is the ability to add a charge manually using the + icon. Only users with security permission to *Manage Encounter Charges* set to Add or Edit permission levels can add charges.

![](../financials.assets/91d6da11d3f6a324fdadeb48795dce93.png)

An *Add Charge* pop-up window will display.

![](../financials.assets/4d8d85fce108edb60e34f7bd300d78f9.png)

* Item: select the item (order/test/procedure).  Order items need to be preconfigured in your system
* Billing/Procedure Code: will prepopulate if the order item has a preconfigured billing code on it, otherwise can manually type one in that corresponds to the item
* Reasons: these are conditions that you can select from the chart's problem list using the right side area or can search and find a new condition reason to tie this to
* Modifiers: add modifiers and there is a quicklist on the right side area that can help also
* Quantity: signify quantity for this charge
* Price: will prepopulate if a price is tied to the order item, otherwise can manually type one in that corresponds to the item
* Memo: can add an optional memo as free text

Select the SAVE button to save the charge.  The charge details will then reflect within the Financials encounter section.

### Add a Payment

On the right side quick list method, there is the ability to add a payment manually using the + icon.  Only users with security permission to *Manage Encounter Charges* set to Add or Edit permission levels can add payments.

![](../financials.assets/29cb4fe5283491d472057fa354574a72.png)

An *Add Payment* pop-up window will display.

![](../financials.assets/ba4c9732fb10e2d13eb738b019e2466b.png)

* Date: Today's date is automatically prepopulated in the date field, otherwise you can change it
* Price: Enter the amount paid
* Memo: Enter in any additional information needed such as check or transaction number

Select the SAVE button to save the charge.  The charge details will then reflect within the Financials encounter section.

### Encounter View & Encounter Document

Financials are displayed on the encounter view. Financials is visible here if the logged in user has security permission to *Manage Encounter Charges* set to View, Add, or Edit permission levels.

![](../financials.assets/1b216f0637917fe772823d14ae7e884f.png)

And once an encounter has been closed & archived, the Financials are also stored on the encounter document.  Financials is visible here if the logged in user has security permission to *Manage Encounter Charges* set to View, Add, or Edit permission levels.

![](../financials.assets/a208fbabb7cabf1db0721f20c72be914.png)

### Encounter Document Summary of Charges

Within the stored document details or a chart tab list view, an Encounter Charges Summary will appear for the stored document if the logged in user has security permission to *Manage Encounter Charges* set to Edit permission level.

Document Detail View:

![](../financials.assets/a2220dd40c21906e936db4c6726de17b.png)

Chart tab list view:

![](../financials.assets/03de47ada1954d5e9525d167da16671b.png)

### Optional System Settings

There are system settings that can be enabled to help with financial charges within encounters. These provide additional checks (if enabled) when closing and archiving an encounter with financials/billing. These validation checks (optional to enable via the system settings) and warning alerts can help prevent issues in the downstream billing.

![](../financials.assets/ef26e88d12065f73d05895fae93eff54.png)

* <strong>Alert if charges exist with no diagnosis codes:</strong>  If enabled, Upon close and archive of an encounter, will alert if the Financials section includes/lists charge(s) yet the encounter is missing or has an invalid diagnosis code.  Any error(s) must be fixed before being able to successfully close and archive the encounter.
    * This alert will display (when closing & archiving an encounter) if:
        * There are charge(s) in the financial section and
        * There is no valid diagnosis code(s) documented for the visit in the Symptoms/Diagnosis encounter section OR
            * there are no valid diagnosis code(s) aka: Reason(s) documented on the charge(s) themselves in the financial section

![](../financials.assets/13af42c64caead395bb1dd4ef43ca5d5.png)

OR

![](../financials.assets/540de9230a4534f52f0c3fac0b282aea.png)

* <strong>Alert if charges have no quantity set:</strong> If enabled, Upon close and archive of an encounter, will alert if the Financials section includes/lists charge(s) with a quantity of zero.  Any error(s) must be fixed before being able to successfully close and archive the encounter.
    * This alert will display (when closing & archiving an encounter) if:
        * There are charge(s) in the financial section and
        * There the charge(s) have a quantity of 0.

![](../financials.assets/b1a0fea22ebe18d38acd26e992e503ce.png)

* <strong>Alert if work comp payer is missing:</strong> If enabled, Upon close and archive of an encounter, will alert if the encounter has a linked Case/Incident that is not set to a payer with a Workers Compensation insurance type for the Payer.  Any error(s) must be fixed before being able to successfully close and archive the encounter.
    * This alert will display (when closing & archiving an encounter) if:
        * There are charge(s) in the financial section and
        * There is a case/incident in the encounter marked as Work Comp = Yes and
        * The Payer in the Encounter top info section does not have a Work Comp Insurance liability type of Work Comp tied to it.

![](../financials.assets/293dccd854ce9cf51bf7e5a4737bc02e.png)

## Additional Information

[Adding Deals](../financial-functionality/adding-deals.md)

[Deal Quick Links - Using Deals in Encounter](../financial-functionality/deal-quick-links-using-deals-in-encounters.md#creating-orders-in-charts-from-a-deal)

[Configuring Access to Financial Modifiers](../financial-functionality/configuring-access-to-financial-modifiers.md)

[Configuring Access to Prices](../financial-functionality/configuring-access-to-prices.md)

[Configuring Access to Financial Funding Sources](../financial-functionality/configuring-access-to-financial-funding-sources.md)

[Financial Reports](../financial-functionality/financial-reports.md)

[Viewing Financial Reports](../financial-functionality/viewing-financial-reports.md)

[Financials Pending Encounter Report](../reports/financials-pending-encounters-report.md)

[Downloading Financial Reports](../financial-functionality/downloading-financial-reports.md)

LMS Course [401.M Deal Management for Outside Occ Health Services](https://mie.talentlms.com/shared/start/key:SOLRKMFP)
