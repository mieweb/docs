---
id: '1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0'
title: 'Alerts Tab - Warnings'
date: '2024-11-13T19:35:38.890Z'
version: 126
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../medication-management-and-e-prescribing/drug-guide-search.md'
source: 'https://drive.google.com/open?id=1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
In the patient's ‘Summary' chart tab is a portlet named *Warnings/Alerts* where you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, guidelines (scripted rules) etc. for the patient.

![](../alerts-tab-warnings.assets/a3ccd196842ae6a4ca340c469ce1150c.png)

Also, as a separate chart tab in the patient's chart, is a chart tab named ‘Warnings', you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, etc. for the patient.

![](../alerts-tab-warnings.assets/13e98e86781c92ad9f77518015c29414.png)

![](../alerts-tab-warnings.assets/0d3bbc8c30e51ebbc61197a3d4322e33.png)

The warnings section also shows in the encounter (point & click) exam. Contact your MIE Implementer if you want it programmed on any encounter.

![](../alerts-tab-warnings.assets/460832f876b21c8eabe861b1340b1467.png)

Drug interaction warnings and Allergy warnings will also appear in E-Meds module when adding an allergy/intolerance or prescribing a med, or in the patient's medication history. {{% system-name %}} can generate a warning stating contraindications and duplicate therapies, so we encourage entering allergies for patients and current meds the patient is taking.

{{% system-name %}} currently imports the First DataBank (FDB) update files on a weekly basis on Saturday mornings at 2 am. MIE then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on each of the client servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

We do not "message" after updates these updates. However, we do have a message on the Drug Guide that you can see what the version is. The Drug Guide Search feature is usually found in the sidemenu tab named References, however in your particular {{% system-name %}} system, it could be found in the Omniscope side tab or in the E-Chart tab. The Drug Guide Search program is also found while prescribing in the e-meds module. Wherever your particular Drug Guide Search program is, when you get to that program you will see under the Drug Guide search field bar for example: **Drug database version: 2.400, last updated 2010-06-12 02:16:17**

This shows the last time we have updated the Drug database (not the rxdb as a whole, it looks specifically only for updates called ‘FDB Update') on the server box the system is looking at. This mainly gives MIE information to make sure the client is getting the updates we are putting out in our "home" base version. If there is a problem with the home base version for some reason (even if this is up to date), this will have an issue, but MIE would be alerted internally that there is an issue with the mainline not getting updated properly.

For more information on how to use the Drug Guide Search, please see our [Drug Guide Search](../medication-management-and-e-prescribing/drug-guide-search.md) help documentation.

![](../alerts-tab-warnings.assets/aed17e3fe06672a4c20a8776edb166f9.png)

The warnings automatically sort and default to order by Severity. Guidelines are scripted rules that MIE can program for you based on specific things you want to be alerted for on your patients based on different criteria and conditions. Contact your MIE Implementer if you wish to have a scripted rule/guideline programmed for your practice/specialty.

![](../alerts-tab-warnings.assets/13e98e86781c92ad9f77518015c29414.png)

![](../alerts-tab-warnings.assets/0d3bbc8c30e51ebbc61197a3d4322e33.png)

Hovering your mouse over the help icon will pop-up a monolog more detailed information about that specific warning/alert.

![](../alerts-tab-warnings.assets/fc75b767200f5cd29e9441984a9225f3.png)

If a Drug interaction warning or Allergy warning appears in a patient's chart while prescribing or documenting.

## Dismiss Allergy/Medication Warnings

Based on your security permission in {{% system-name %}} , you may be able to dismiss warnings for the patient only or for all patients or not at all.

![](../alerts-tab-warnings.assets/c74e05759f9cbfc64227bb2091c06777.png)

Most practices give the nurses/MA's the right to dismiss for ‘this patient' and give the physicians the higher security to dismiss ‘for all patients'.

![](../alerts-tab-warnings.assets/13e98e86781c92ad9f77518015c29414.png)

![](../alerts-tab-warnings.assets/0d3bbc8c30e51ebbc61197a3d4322e33.png)

MIE cannot hide or remove the warnings.  To be an e-prescribe system and per the guidelines, etc we are to generate these interactions and warnings.  These warnings are required. These warnings also display/print on the Med Sheet. The system is telling you a warning, contraindication, interaction or duplicate therapy.

If you wish to dismiss it, you would do the following steps (if you have security permission to do so).

Usually, the Physician has been set with security rights to dismiss all levels.  The physician can dismiss the warning for that specific patient only.  Or the physician can dismiss the specific warning for all patients via him or all users.

![](../alerts-tab-warnings.assets/325627021377c29f18ca28e8038c0db2.png)

Usually, the nurses have been set with security rights to dismiss warnings only for that specific patient only (doesn't affect all other patients).

If the physician does decide to dismiss, there is a security setting to dismiss "this one time for this one patient" or for "all patients".  (Usually nurses only can dismiss for that specific patient only.  Physicians usually are the only ones with full security rights).

If the physician dismisses a warning for "all patients' they would only have to dismiss once and never see it generated again.  We discourage this because it really defeats the purpose of showing warnings and affects all other patients and the warning won't pop-up again for any patient.

If you wish to dismiss, go into the specific patient's chart and click the dismiss option link. This is how the physician or the nurse can dismiss the warning.

Warnings should only be dismissed by nurse's or MD's. The *Reason for Dismissing* field should be filled out for why you are dismissing the warning. It will accept free text, but it will also auto-complete and give you choices of previous entries of reasons why warnings were dismissed (it saves previous reasons for dismissing entries if a dismissing reason was typed in twice exactly the same).

![](../alerts-tab-warnings.assets/84c818e83f1950da65937dbc19a6856c.png)

![](../alerts-tab-warnings.assets/3d115dd5d804a53e2f84d1aa84980739.png)

## Dismiss Guideline Warnings

Based on your security permission in {{% system-name %}} , you may be able to dismiss warnings for the patient only or for all patients or not at all.

![](../alerts-tab-warnings.assets/c74e05759f9cbfc64227bb2091c06777.png)

Dismissing Guideline alerts/warnings on a patient's chart are different than dismissing drug/allergy warnings. You can dismiss from the warnings/alerts portlet, warnings chart tab, or warnings section from encounters.

![](../alerts-tab-warnings.assets/84c818e83f1950da65937dbc19a6856c.png)

Click the Dismiss if you wish to dismiss the guideline alert for a patient for any reason.

![](../alerts-tab-warnings.assets/d88a41647ca9c98c7da61f4f99f118b3.png)

You then have to type in a reason for dismissing (make sure you are dismissing for only that patient and not all patients w/ that guideline warning/alert).

![](../alerts-tab-warnings.assets/e066fa56d40959d9bd47c1c5c97b7278.png)

Resume Warning: Enter a date you want the Warning to reappear on the patient's chart. This warning will reappear on the day selected/entered. The date is when you want the alert dismissed until.  So the alert will not display again until the date that is entered. Blank means never. Leaving this date blank and submitting the dismissal will mean the warning will never reappear for this patient.
