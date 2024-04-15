---
id: '1m0qyUJ0gzjNW32y7tnUzzTuwj0Fkv-wLTk6agxc8k-8'
title: 'Drug Interaction/Allergy Warnings'
date: '2020-02-27T20:04:52.863Z'
version: 38
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1m0qyUJ0gzjNW32y7tnUzzTuwj0Fkv-wLTk6agxc8k-8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Drug interaction warnings and Allergy warnings will appear in E-Meds module when adding an allergy/intolerance or prescribing a med, or in the patient's medication history. {{% system-name %}} can generate a warning stating contraindications and duplicate therapies, so we encourage entering allergies for patients and current meds the patient is taking.

{{% system-name %}} currently imports the First DataBank (FDB) update files on a weekly basis on Saturday mornings at 2 am. MIE then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on each of the client servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

We do not "message" after updates these updates. However, we do have a message on the Drug Guide that you can see what the version is. The Drug Guide Search feature is usually found in the sidemenu tab named References, however in your particular {{% system-name %}} system, it could be found in the Omniscope side tab or in the E-Chart tab. The Drug Guide Search program is also found while prescribing in the e-meds module. Wherever your particular Drug Guide Search program is, when you get to that program you will see under the Drug Guide search field bar for example: **Drug database version: 2.400, last updated 2010-06-12 02:16:17**

This shows the last time we have updated the Drug database (not the rxdb as a whole, it looks specifically only for updates called ‘FDB Update') on the server box the system is looking at. This mainly gives MIE information to make sure the client is getting the updates we are putting out in our "home" base version. If there is a problem with the home base version for some reason (even if this is up to date), this will have an issue, but MIE would be alerted internally that there is an issue with the mainline not getting updated properly.

For more information on how to use the Drug Guide Search, please see other help documentation named *Drug Guide Search.pdf*

![](../drug-interaction-allergy-warnings.assets/f20e8ca2fd6c1fd4cdf5c6ff63a3b5a5.png)

If a Drug interaction warning or Allergy warning appears in a patient's chart while prescribing or documenting, it will alert the user to that warning and there is a feature to *dismiss* warnings. Interaction warnings for the same exact drug already prescribed/entered for a specific patient are not produced.

Based on your security permission in {{% system-name %}} , you may be able to dismiss warnings for the patient only or for all patients or not at all.

![](../drug-interaction-allergy-warnings.assets/d092b6161030599c738b4030f8871d3d.png)

Most practices give the nurses/MA's the right to dismiss for ‘this patient' and give the physician's the higher security to dismiss ‘for all patients'.

Prescribing a medication in Quick Prescribe, **any DRUG INTERACTION warnings** will appear when you are prescribing a drug that interacts with another the patient already has entered as prescribed or an allergy the patient has entered. Quick Prescribe will also check and give warning to duplicate therapy by checking the patient's current med lists entered in {{% system-name %}} .

![](../drug-interaction-allergy-warnings.assets/bcf2a6ee3a146733867b4dce0e038c34.png)

**DRUG INTERACTION/DUPLICATE THERAPY warnings** display in red or yellow in the *Comment* column of the Medication History listing.

![](../drug-interaction-allergy-warnings.assets/25d42dc050dcc396134504522488b3a2.png)

MIE cannot hide or remove the warnings.  To be an e-prescribe system and per the guidelines, etc we are to generate these interactions and warnings.  These warnings are required. These warnings also display/print on the Med Sheet. The system is telling you a warning, contraindication, interaction or duplicate therapy.

If you wish to dismiss it, you would do the following steps (if you have security permission to do so).

Usually, the Physician has been set with security rights to dismiss all levels.  The physician can dismiss the warning for that specific patient only.  Or the physician can dismiss the specific warning for all patients via him or all users.

![](../drug-interaction-allergy-warnings.assets/373bfd51ea42591e1a6e1ab114ef4694.jpg)

Usually, the nurses have been set with security rights to dismiss warnings only for that specific patient only (doesn't affect all other patients).

If the physician does decide to dismiss, there is a security setting to dismiss "this one time for this one patient" or for "all patients".  (Usually nurse's only can dismiss for that specific patient only.  Physician's usually are the only ones with full security rights).

If the physician dismisses a warning for "all patients' they would only have to dismiss once and never see it generated again.  We discourage this because it really defeats the purpose of showing warnings and affects all other patients and the warning won't pop-up again for any patient.

If you wish to dismiss, go into the specific patient's e-meds tab and click on the underlined warning in yellow or red.  It will open the warning (screen shot below).  This is where the physician or the nurse can dismiss the warning.

Warnings should only be dismissed by nurse's or MD's. The *Reason for Dismissing* field should be filled out for why you are dismissing the warning. It will accept free text, but it will also auto-complete and give you choices of previous entries of reasons why warnings were dismissed (it saves previous reasons for dismissing entries if a dismissing reason was typed in twice exactly the same).

![](../drug-interaction-allergy-warnings.assets/bd6ef5d46d1209ff4d380e24fbf69486.png)

![](../drug-interaction-allergy-warnings.assets/ae32d66a4b5c30bf2584ab68ce6862f3.png)

Any warnings that have been dismissed will show as *(dismissed)* after them in the comment column of the patient's e-meds tab Medication History.

![](../drug-interaction-allergy-warnings.assets/148da9049efc8f054cb38a8ad2f3cfd4.png)
