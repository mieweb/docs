---
id: '1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
title: 'SureScripts Advanced - Medication History Reconciliation'
date: '2024-03-07T15:49:36.630Z'
version: 137
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'surescripts-advanced-prescription-and-insurance-eligibility-requests.md'
source: 'https://drive.google.com/open?id=1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The SureScripts advanced functionality includes access to Prescription Benefits (insurance eligibility and prescription benefit information of both formulary and eligibility), access to patient's Medication History and the ability to do Prescription Routing to Mail Order Pharmacies using the formulary selected. {{% system-name %}} will maintain a record of whether the patient was eligible for drug coverage in the patient benefit table for future reference (it's named *Insurance/Prescription Eligibility* document and defaulted to doc.sum tab). A drug eligibility request can‘t be sent more than once every 72 hours, however a Medication History query is not restricted to that same timeframe. This help document discusses the Medication History functionality.

*The Medication History and the daily eligibility report have a default physician that will be used if the logged in user does not have a national provider id and no attending physician for the patient has been set. Contact your MIE Implementer to make sure that default system setting is set (E-Prescribing, SureScripts, Default Physician [the value should be the user_id of the physician]).*

## Medication History Reconciliation

Accessing a patient's medication history electronically allows prescribers to receive important information on their patient's current and past prescriptions and to become better informed about potential medication issues with their patients (ex: drug to drug interactions). Prescribers can use this information to improve safety and quality.

When in the patient's chart and in their E-Meds (Allergies/Medications) tab, you will see the hyperlink Med History at the top right corner. If you do not see the Med History link, then the system setting named *Show History Link* does not have a value of 1 and is not turned on. Please contact MIE to turn that on.

You can click this link to get the patient's medication history from the SureScripts Advanced database. Unlike eligibility, there is no stipulation on the number of times or frequency of obtaining Medication History on the patient.

![](../surescripts-advanced-medication-history-reconciliation.assets/ac2eb07038e9bf0d263c9ff507afb408.png)

When you click the Med History link found in the patient's e-meds tab, you will navigate to the Med History tab. Medication history can only be pulled in conjunction with a patient interaction, which could result in a prescription being written. This interaction can take the form of a physical visit, phone call, telemedicine, or email exchange between the provider and the patient. The medication history request occurs at the time of the patient interaction.

Secondly, patient consent must also be obtained to query the SureScripts Advanced Medication History.  By default, the system assumes the provider has obtained consent. Therefore the "Patient Consent" checkbox will be auto checked for the provider. Providers can document the patient's consent to perform this in any way you wish (create a standard form for your practice, note on a chart somewhere, etc). Once you've obtained consent from the patient to run a Medication History, verify the *Consent* checkbox is checked and then click the "Get History" button.

![](../surescripts-advanced-medication-history-reconciliation.assets/2c603aa0764a16f842761048d438bf94.png)

If you do not have consent (and the patient consent is not checked) end users will receive a message stating that they must obtain consent and it will not render the request.

![](../surescripts-advanced-medication-history-reconciliation.assets/d7f0d502bf1c16236170cd5624840b0e.png)

Once you have obtained consent and click the ‘Get History" button, the patient's Medication History stored in the SureScripts Advanced database will display on the screen. When you query for a Medication History using this link from the e-meds tab, it will also automatically run a Drug Eligibility check on that patient (required prior to obtaining Medication History) if one hasn't been performed in the previous 72 hours. The drug eligibility document (Insurance/Prescription Eligibility document) will be stored in their chart also (defaults to Doc.Sum tab). See other help documentation titled [*Prescription and Insurance Eligibility Requests-SureScripts Advanced*](surescripts-advanced-prescription-and-insurance-eligibility-requests.md)

![](../surescripts-advanced-medication-history-reconciliation.assets/aca728e9cf8790d41e715a3719b27253.png)

The Medication History you obtained and queried for shows the drug name, quantity, supply, last fill date and any pharmacy/prescriber information if applicable. This listing from the SureScripts Advanced database is from claims data & from pharmacies itself that are SureScripts certified.

This Medication History screen will show 50 records at a time. If there are more than 50 for the patient, you can click the *Get More* button.

![](../surescripts-advanced-medication-history-reconciliation.assets/78da2bc35d5f045e47530852a3d1b629.png)

You can view the patient's medications on the screen, but the most advantageous method is to now transfer this list into the patient's chart so you have a complete list of all medications the patient is on and manage from {{% system-name %}} . You can transfer this list electronically into {{% system-name %}} instead of manually keying in the medications in the patient's e-meds history.

To do this, click the Reconcile link to bring in those medications from electronic format into the patient's medication history in {{% system-name %}} . This is a quick way of bringing in the patient's medication history electronically instead of manually keying in the patient's medication history into their chart.

![](../surescripts-advanced-medication-history-reconciliation.assets/147b5f2b4a22009296530dae045607b0.png)

Once you've clicked Reconcile, a separate window on your screen which is the FroozHIE module. There are instructions at the top to explain the FroozHIE tool and how to bring data over into {{% system-name %}} . Only medications will display in the FroozHIE tool on the left side since only Medication History was obtained with SureScripts Advanced.

![](../surescripts-advanced-medication-history-reconciliation.assets/a846c2d0efe59f8014e1de018d5dd12c.png)

Whatever medications you want brought over (transferred over) into {{% system-name %}} , click the >> button next to it. The LEFT side is the patient's Medication History record you queried. The RIGHT side is what you have in {{% system-name %}} for that patient currently in their medication history in {{% system-name %}} .

![](../surescripts-advanced-medication-history-reconciliation.assets/b4f1397888043df2541c5bf487cab9fc.png)

If you want to bring over (transfer) specific individual medication history items from the left side to the right side; use the >> button next to each individual line item.

If you want to bring over (transfer) the entire medication section/category, click the >> button between *incoming* and *destination* towards the top title of each category. This will bring over all items from the left to the right side in mass (instead of clicking individual line items).

![](../surescripts-advanced-medication-history-reconciliation.assets/29fc9e075599793a27d057e0b59ac322.png)

When done selecting which items or the entire medication section to bring over, click the **SEND CHANGES** button at the very bottom of the FroozHIE screen.

You will be taken back to the patient's E-Meds tab where you were. You can refresh your page and you will then see the patient's medication history in {{% system-name %}} populated with what medication history transferred in from the SureScripts Advanced database for that patient when you did the Medication History request. You've now just transferred in medication history electronically for that patient without having to manually enter it in the patient's chart.

![](../surescripts-advanced-medication-history-reconciliation.assets/96e4487f8fef1328f90c7dddb302e749.png)
