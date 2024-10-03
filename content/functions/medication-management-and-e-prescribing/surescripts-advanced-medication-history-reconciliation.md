---
id: '1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
title: 'SureScripts Advanced - Medication History Reconciliation'
date: '2024-09-09T17:36:55.369Z'
version: 404
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'surescripts-advanced-prescription-and-insurance-eligibility-requests.md'
  - 'https://drive.google.com/open?id=1Xz6RRJhZB83PTc2WsRc3BmVeEXllm4nW'
  - 'https://github.mieweb.com/mie/ssep/tree/master/schema/2017071/NCPDP_20170715'
  - 'https://mie.talentlms.com/shared/start/key:ZOQDNHRK'
source: 'https://drive.google.com/open?id=1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The SureScripts advanced functionality includes access to Prescription Benefits (insurance eligibility and prescription benefit information of both formulary and eligibility), access to patient's Medication History and the ability to do Prescription Routing to Mail Order Pharmacies using the formulary selected. {{% system-name %}} will maintain a record of whether the patient was eligible for drug coverage in the patient benefit table for future reference (this data is stored in a document named *Insurance/Prescription Eligibility* and defaults to the ‘Documents' chart tab). A drug eligibility request can‘t be sent more than once every 72 hours, however a Medication History query is not restricted to that same timeframe. This help document discusses the Medication History functionality.

*Important: The Medication History and the daily eligibility report require an attending physician to be associated with the patient's chart. The system can default to an attending physician that will be used if the logged in user does not have a national provider id and no attending physician for the patient has been set. Contact your MIE Implementer to make sure that default system setting is set (E-Prescribing, SureScripts, Default Physician [the value should be the user_id of the physician]). If this system setting is not configured and an attending physician is not listed on the patient chart, the following message will appear when attempting to reconcile the medication history.*

![](../surescripts-advanced-medication-history-reconciliation.assets/a9163885d0bf93b4216c702cb1cd24ac.png)

## Medication History Report

Accessing a patient's medication history electronically allows prescribers to receive important information on their patient's current and past prescriptions and to become better informed about potential medication issues with their patients (ex: drug to drug interactions). Prescribers can use this information to improve safety and quality.

When in the patient's chart and in their E-Meds (Allergies/Medications) tab, users will see the hyperlink Med History in the top right corner. If you do not see the Med History link, then the system setting named *Show History Link* does not have a value of 1 and is not turned on. Please contact MIE for assistance.

Users can click this link to get the patient's medication history from the SureScripts Advanced database. Unlike eligibility, there is no stipulation on the number of times or frequency of obtaining Medication History on the patient.

![](../surescripts-advanced-medication-history-reconciliation.assets/657e2007fd1cd8e0ab391d46e665a7c7.png)

When users click the Med History link found in the patient's e-meds tab, the user will navigate to the Med History tab. Medication history can only be pulled in conjunction with a patient interaction, which could result in a prescription being written. This interaction can take the form of a physical visit, phone call, telemedicine, or email exchange between the provider and the patient. The medication history request occurs at the time of the patient interaction.

Secondly, patient consent must also be obtained to query the SureScripts Advanced Medication History.  By default, the system assumes the provider has obtained consent. Therefore the "Patient Consent" checkbox will be auto checked for the provider. Providers can document the patient's consent to perform this in any way you wish (create a standard form for your practice, note on a chart somewhere, etc). Once consent has been obtained from the patient to run a Medication History report, verify the *Consent* checkbox is checked and then click the "Get History" button.

![](../surescripts-advanced-medication-history-reconciliation.assets/9e3e775ac0ebcdd8a42dd4be0151e9f6.png)

If you do not have consent (and the patient consent is not checked) end users will receive a message stating that they must obtain consent and it will not render the request.

![](../surescripts-advanced-medication-history-reconciliation.assets/2899713ff47e049d0ffeb2e4741b73f3.png)

Once users have obtained consent and click the ‘Get History' button, the patient's Medication History stored in the SureScripts Advanced database will display on the screen. The system will also save a document called ‘Medication History Response' (defaults to the ‘Documents' chart tab). The Past Medical History list at the bottom of the query results will also display links to prior Medication History Reponse inquiries.

![](../surescripts-advanced-medication-history-reconciliation.assets/7094f5fcf13c2e9a7ffa1c71e0b5016a.png)

The Medication History query displays the drug name, directions, quantity, supply, last fill date and any pharmacy/prescriber information if applicable. This listing from the SureScripts Advanced database is from claims data & from pharmacies itself that are SureScripts certified.

This Medication History screen will show 50 records at a time. If there are more than 50 for the patient, you can click the *Get More* button. Click the View link to see more details on each drug listed.

![](../surescripts-advanced-medication-history-reconciliation.assets/c19f9bff266e73620dff064c98776fee.png)

### Insurance Eligibility Response

When users query for a Medication History using this link from the e-meds tab, the system will also automatically run a Drug Eligibility check on that patient (required prior to obtaining Medication History) if one hasn't been performed in the previous 72 hours. The drug eligibility document (‘Insurance/Prescription Eligibility' document) will be stored in their chart (defaults to the ‘Documents' tab). See other help documentation titled [*Prescription and Insurance Eligibility Requests-SureScripts Advanced*](surescripts-advanced-prescription-and-insurance-eligibility-requests.md)

![](../surescripts-advanced-medication-history-reconciliation.assets/322cdbef52b2a1cd8a8f8773b1f41c4b.png)

## Medication History Import/Reconciliation

Users can view the patient's medications on the screen, but the most advantageous method is to transfer this list into the patient's chart and manage from {{% system-name %}} . For users on the 202409 release or newer, medications can be transferred in one click by selecting the "Import Medical History" option.

![](../surescripts-advanced-medication-history-reconciliation.assets/4ea13d61944f8957e7db51e9b6ee4b42.png)

{{% system-name %}} will indicate an ‘Import Med History' progress bar while the transfer is in progress.

![](../surescripts-advanced-medication-history-reconciliation.assets/565b6c517bf0688e4b8f6e12eef2e5f3.png)

When the transfer is complete, the user is redirected to the Allergies/Medications chart tab. Any medications imported into the Medication History will display details regarding that medication in the ‘COMMENT' column.

![](../surescripts-advanced-medication-history-reconciliation.assets/5ff5336ee3a98af5672f0ca6b4516f96.png)

*Hint: Click the "Hide Discontinued" filter to hide discontinued medications entered manually or imported*.

Users on a release prior to 202409 will not see the Import ‘Medical History' import option and must use the Reconcile link to bring over the Medication History into {{% system-name %}}.

![](../surescripts-advanced-medication-history-reconciliation.assets/91447f208c857d761c84a8a47ec1c8d8.png)

Once the Reconcile link has been selected, the FroozHIE tool will open in a new browser tab. An instruction key displays at the top of the screen. Beneath the instructions are two sections labeled Medications and Past Medications. The **Medications list** is the patient's current active medications. The **Past Medications** is a list of expired/terminated or previously imported medical history. Medications listed on the left side of the FroozHIE, with the column labeled ‘Incoming', is the medication list received from the SureScripts Advanced database. Medications listed on the right side, with the column labeled ‘Destination', are medications already captured in {{% system-name %}}.

![](../surescripts-advanced-medication-history-reconciliation.assets/48aa6375abddefc6bba58bf71ef1e975.png)

When done selecting which items or the entire medication section to bring over, click the **SEND CHANGES** button at the very bottom of the FroozHIE screen.

Users will be redirected back to the patient's E-Meds tab. Simply refresh the screen to see the patient's transferred medication history in {{% system-name %}}.

![](../surescripts-advanced-medication-history-reconciliation.assets/5ff5336ee3a98af5672f0ca6b4516f96.png)

## Technical Description

1. Fetch XML
2. Store as a document in the chart

## References

1. [Surescripts MedicationDispensed Documentation](https://drive.google.com/open?id=1Xz6RRJhZB83PTc2WsRc3BmVeEXllm4nW)
2. [NCPDP_20170715 Schema Files](https://github.mieweb.com/mie/ssep/tree/master/schema/2017071/NCPDP_20170715)

## Learning Management System

To learn more about SureScripts Advanced - Medication Reconciliation, follow the link below to the Learning Management System course:

* [Data Comparison / Reconciliation Toolset (FroozHIE)](https://mie.talentlms.com/shared/start/key:ZOQDNHRK)
