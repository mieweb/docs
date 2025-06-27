---
id: '11ghe6MwfhTsxiclrKndCYHo91JWKbWF0QtpGQN1n-bM'
title: 'Financials Pending Encounters Report'
date: '2024-10-02T18:07:27.109Z'
version: 56
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/reports/using-datavis-grids-data-tools/'
source: 'https://drive.google.com/open?id=11ghe6MwfhTsxiclrKndCYHo91JWKbWF0QtpGQN1n-bM'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
The Financials Pending Encounters Report displays a list CLOSED encounters where a potential billing issue has been identified. Patient's on this list may also be on the Financials Pending Billing report. The Pending Billing report looks at individual order items, while his report looks at the encounter as a whole. This report will provide hints as to potential issues with these encounters.  If issues are addressed on the Pending Billing report, then encounters should naturally fall off this list.

![](../financials-pending-encounters-report.assets/f6f844e989336d60ab53099f5ceb7b5a.png)

Common Issues:

* Orders associated with an encounter, but the order was not completed.
* No charge code associated with orders linked to the encounter.
* No Employer or payer set on the encounter (this is set in the Encounter section of every encounter)

Typically most billing interfaces are set up to send billing records to the billing system upon order completion. However, some clients may have custom configured their interface to not automatically send billing records to the billing system. If this route is desired, users can manually review the Pending Encounters report and send billing records to the billing system after reviewing the charges. In this case, the "Errors" column of the report will simply indicate that the "Encounter closed today". As long as no other issues are identified and the biller approves the charge, the user can select the item(s) and manually send to the billing records for that encounter to the billing system.

![](../financials-pending-encounters-report.assets/e6a56e8646b2e6207ba3e2c4bef3fcbc.png)

Learn more about using Datavis reports, reordering columns and saving perspectives [here](https://docs.enterprisehealth.com/functions/reports/using-datavis-grids-data-tools/).
