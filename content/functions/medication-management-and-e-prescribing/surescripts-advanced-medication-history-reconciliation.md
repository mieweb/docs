---
id: '1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
title: 'SureScripts Advanced - Medication History Reconciliation'
date: '2024-11-29T15:18:00.389Z'
version: 494
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'surescripts-advanced-prescription-and-insurance-eligibility-requests.md'
  - 'https://drive.google.com/open?id=1Xz6RRJhZB83PTc2WsRc3BmVeEXllm4nW'
  - 'https://github.mieweb.com/mie/ssep/tree/master/schema/2017071/NCPDP_20170715'
  - 'https://mie.talentlms.com/shared/start/key:ZOQDNHRK'
source: 'https://drive.google.com/open?id=1K9LL0Cg7qwdOn8Ajme5wSMG8dCHZvowBvvzFfltrHKU'
wikigdrive: '09e37def9271cd982804f575ee70401ad07a0a3f'
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

Once users have obtained consent and click the ‘Get History' button, the patient's Medication History stored in the SureScripts Advanced database will display on the screen. The system will also save a document called ‘Medication History Response' (defaults to the ‘Documents' chart tab). The Past Medical History list at the bottom of the query results will also display links to prior Medication History Response inquiries.

![](../surescripts-advanced-medication-history-reconciliation.assets/10f8380ed3c688598479e93437c8f20c.png)

The Medication History query displays the drug name, directions, quantity, supply, last fill date and any pharmacy/prescriber information if applicable. This listing from the SureScripts Advanced database is from claims data & from pharmacies itself that are SureScripts certified.

This Medication History screen will show 50 records at a time. If there are more than 50 for the patient, you can click the *Get More* button. Click the View link to see more details on each drug listed.

![](../surescripts-advanced-medication-history-reconciliation.assets/c19f9bff266e73620dff064c98776fee.png)

### Insurance Eligibility Response

When users query for a Medication History using this link from the e-meds tab, the system will also automatically run a Drug Eligibility check on that patient (required prior to obtaining Medication History) if one hasn't been performed in the previous 72 hours. The drug eligibility document (‘Insurance/Prescription Eligibility' document) will be stored in their chart (defaults to the ‘Documents' tab). See other help documentation titled [*Prescription and Insurance Eligibility Requests-SureScripts Advanced*](surescripts-advanced-prescription-and-insurance-eligibility-requests.md)

![](../surescripts-advanced-medication-history-reconciliation.assets/322cdbef52b2a1cd8a8f8773b1f41c4b.png)

## Medication History Import/Reconciliation

Users can view the patient's medications on the screen, but the most advantageous method is to transfer this list into the patient's chart and manage from {{% system-name %}} . For users on the 202409 release or newer, medications can be transferred in one click by selecting the "Import Medical History" option.

![](../surescripts-advanced-medication-history-reconciliation.assets/9e4f2411f3e284524fffb97f6ee43779.png)

{{% system-name %}} will indicate an ‘Import Med History' progress bar while the transfer is in progress.

![](../surescripts-advanced-medication-history-reconciliation.assets/1ef6150204a6181905550c3977bd7fb2.png)

When the transfer is complete, the user is redirected to the Allergies/Medications chart tab. Any medications imported into the Medication History will display details regarding that medication in the ‘COMMENT' column.

![](../surescripts-advanced-medication-history-reconciliation.assets/5ff5336ee3a98af5672f0ca6b4516f96.png)

*Hint: Click the "Hide Discontinued" filter to hide discontinued medications entered manually or imported*.

## For Users on release 202409 and newer

Users on a Release 202409 or newer will be directed to the Allergies/Medication History Tab.

![](../surescripts-advanced-medication-history-reconciliation.assets/d2740f4eeada16fd7ae19255ff8f2864.png)

Click the **Confirm** or **Discontinue** link in the **Options** column to either confirm or discontinue a medication in the Medication History.

Successfully confirmed medications will display at the top of the tab.

![](../surescripts-advanced-medication-history-reconciliation.assets/63453f869bd513da9c0044dcd06e9274.png)

Successfully confirmed medications can then be edited, deleted, discontinued or refilled from the **Options** column.

![](../surescripts-advanced-medication-history-reconciliation.assets/568d5e0da18c198ca752ea37c8f4730c.png)

To discontinue a medication, enter the **Discontinue Date**, a **Reason** and select either the **Simply Discontinue**, **Mark Intolerant**, **Mark Allergic** button. Or click **Cancel** to return to the Medication History.

![](../surescripts-advanced-medication-history-reconciliation.assets/e9b2dde48e2e38ffcf9e2be5af8234b9.png)

Successfully discontinued medication will display at the top of the tab.

![](../surescripts-advanced-medication-history-reconciliation.assets/fdc325cd1c69146b36515733909f2d0b.png)

If the user preference is set to **Hide Discontinued**, discontinued items will not display in the Medication History. To view discontinued mediations use click the **Show Discontinued** link in the Medication History section.

Once the medication has been **Confirmed** or **Discontinued**, the medication will display as **Reconciled**.

![](../surescripts-advanced-medication-history-reconciliation.assets/f7c0f7723b1ee3dc0315484c0e3444a7.png)

For users that have their My Setting enabled to utilize datavis in the Meds/Allergy tab, select the appropriate action button to confirm, discontinue, correct medication, change therapy or refill a medication. The datavis also introduces a new column for **Status**. Non-confirmed medications will display with a **Status** of **Dispensed** until confirmed, discontinued.

![](../surescripts-advanced-medication-history-reconciliation.assets/358c7424e8e0e585df94bd62a9553377.png)

![](../surescripts-advanced-medication-history-reconciliation.assets/ad92a246befd2031c24f3b2d6de95066.png)
 Confirm. Confirmed medications will display with a **Status** of **Active**. Active medications can be discontinued, corrected, therapy changed or refilled.

![](../surescripts-advanced-medication-history-reconciliation.assets/42fd20961ecf602ada81133c033c47a2.png)
Discontinue. Discontinued medication will display with a **Status** of **Discontinued**. Discontinued medications cannot be corrected, therapy changed or refilled.

![](../surescripts-advanced-medication-history-reconciliation.assets/60fd5a89a085648c23f8a0686a31e39f.png)
Correct Medication. This action can only be taken on **Active** Medications.

![](../surescripts-advanced-medication-history-reconciliation.assets/4f8982281d3eaee534e3fd48d23c8b9c.png)
Change Therapy. This action can only be taken on **Active** Medications.

![](../surescripts-advanced-medication-history-reconciliation.assets/325105095d96b770c6cf92763f97aeb8.png)
Refill. This action can only be taken on **Active** Medications.

## For Users on a release prior 202409

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
