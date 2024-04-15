---
id: '1M34Pr2z2Qc-Z1I0PuQYKCB50vurvtKddEMd7fHRQX6Q'
title: 'Setting Preferred Pharmacy, Days Supply, and Current Library & Med History Verification'
date: '2020-02-27T20:08:07.990Z'
version: 44
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1M34Pr2z2Qc-Z1I0PuQYKCB50vurvtKddEMd7fHRQX6Q'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Set Preferred Pharmacy

For setting Drug Plan option, please see separate help documentation named *Drug Plan/Formularies*

Make sure system settings are turned on to show Preferred & Mail In Pharmacy fields in e-meds tab:

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/5a6f9197af3bf3853c8fad3e370ab21e.png)

Click *E-Chart* on the left sidebar menu.

Search for the patient you wish to view.

Click on the *MEDS* tab at the top in the patient's file.

The *MEDS* summary screen pops up and lists allergies, refills due (if any) and medication history.

Towards the top left under patient name and other info it gives you the option to set Preferred Pharmacy. Towards the right side under the other info, it gives you the option to set Preferred Days Supply. Clicking either of these links will allow you to select for both at the same time and set both fields in one step.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/19f97c3a728d49f4c819c8280c90b141.png)

### Preferred Pharmacy

If no pharmacy is set for this patient it will say Not Selected. Preferred Pharmacy means the pharmacy this patient regularly uses and would want prescriptions faxed to. You can always change this in the fax screen to select a different pharmacy for an occasional change—but if you have a preferred pharmacy selected for this patient here, then it will default in the fax module and automatically pop up this pharmacy's information for you. If you fax to a known pharmacy for a patient, it will remember that known pharmacy information and automatically set the patient's preferred pharmacy to that.

Click Preferred Pharmacy to either SELECT a pharmacy for this patient or to CHANGE a preferred pharmacy for this patient. It will only accept one pharmacy. Once you click on Preferred Pharmacy, it will pop open a pharmacy search. The state/city and zip code default to be the same as the patient's address information stored in their demographics screen.

You can search for pharmacies via state/city or zip code. We suggest searching by zip code because for example: some pharmacies from the database may be loaded as Ft Wayne vs Fort Wayne, but the search should find those and we can add a list of normalized city names as needed. Some cities may be spelled out differently. In the blank pharmacy field type at least the **first three (3) letters** of the pharmacy and it will take you to those pharmacies matching those initial characters. It may take a few seconds to load selections because it is looking through the NPI pharmacy directory and the SureScripts database of national pharmacies for that area in your search criteria. This field searches those directories. This search field is not pointed to any {{% system-name %}} departments. If the pharmacy you want is not found in the search, there is no way to add it to the directories. Adding a pharmacy to a department in {{% system-name %}} username screen will not show here. The pharmacy selections from the NPI database & SureScripts database and are updated nightly.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/56610a8d06edb83ea4c9d3a10dd96058.png)

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/5db223624754c993c465abceff3eb3af.png)

If you can't find the specific pharmacy you need, please be sure to search via zip code search criteria. Some cities are stored in the directories differently (ex: Fort Wayne vs Ft Wayne) and MIE has no control of how those are stored and directed to {{% system-name %}} from SureScripts, but the search should find those and we can add a list of normalized city names as needed. It's best to do a zip code search. Zip code search will search for pharmacies 100 miles around the center of the zip code. The first 30 will render with the closest ones first in the list.

* <strong>Exclude NPI checkbox option:</strong> Checking this box limits the results to pharmacies in the SureScripts pharmacy directory.   NPI data is a U.S. database of all pharmacies, but some do not have fax numbers available. If this box is not check-marked, then you are searching in both directories for the pharmacy of your choice.
* <strong>Mail Only option:</strong> Checking this box limits the results to pharmacies in the SureScripts and/or NPI pharmacy directories to mail in pharmacies only. This option is used mostly when setting the patient's preferred mail in pharmacy or when searching for a mail-in pharmacy to transmit to.
* <strong>Fax # / Phone # Search:</strong> You can do a reverse search for a pharmacy if you know the pharmacy's specific fax number or phone number. Instead of searching for the name of the pharmacy, you are searching for pharmacy matches by fax/phone number of the pharmacy that you know. This could be utilized when a patient states a pharmacy that may have had a name change. The patient may know the pharmacy by one name, yet the SureScripts and NPI database have it stored as an official/different name. To search for a pharmacy by its known fax or phone number, first make sure the <em>pharmacy field</em> is cleared. Click the clear button to clear that field. Then select the radio button to search by fax or phone number of the pharmacy. Proceed to type in at least the first 6 digits (including area code) of the fax or phone number for the pharmacy you are searching for. The first 6 digits are required. You can type them all run together (ex: 260483) or include a space or dash (ex: 260 483 or 260-483). Once you have at least the first 6 digits of the pharmacy's fax or phone number you are searching for, hit your TAB key to advance and then any matching results will render.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/fd0a18431018d640eb4133c058b37128.png)

When you find the patient's preferred pharmacy they wish to be set to, simply use your mouse to select it.

Pharmacies showing in **blue** are capable to e-transmit to using the SureScripts feature. It doesn't mean it will be electronically transmitted to that pharmacy though unless you are a certified e-prescriber with SureScripts (see other help documentation named *Setting Up E-Prescribers.pdf* to become certified). The bold **blue** just signifies that this pharmacy is indeed capable to electronically transmit to via the SureScripts feature. The other pharmacies in grey are valid pharmacies from the either database, but they would be transmitted via standard fax from {{% system-name %}} because they are not capable of receiving via electronic transmit. The other symbols next to the pharmacies denote what type of pharmacy it is and certification status.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/56610a8d06edb83ea4c9d3a10dd96058.png)

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/09c4f90463d4fac430b94ca6becaef47.png)

Once you have selected the patient's preferred pharmacy to store on their chart, click the SET AS PREFERRED button. This will store the pharmacy as the patient's preferred pharmacy they use.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/73ebb23f1fc19ee18c97bd175f61c375.png)

### Mail-In Pharmacy

To set this, you would do the same steps as the above in setting the Preferred Pharmacy. However, when setting a patient's preferred Mail-In Pharmacy, please remember to change the state/city search or zip code. You can also do the reverse search to find one by typing in the specific fax or phone number for the mail-in pharmacy. Most Mail-In Pharmacies will not be in the same city/state/zip as the patient's demographics information, so these fields will need to be changed to reflect the city/state and/or zip of where the mail-in pharmacy is, so that mail-in will be found in the search.

When you have found the patient's preferred Mail-In Pharmacy, click the SET AS MAIL-IN button and it will store in the patient's chart. If you do not find a specific Mail-In Pharmacy and you've exhausted all search methods, contact your MIE Implementer. Your Implementer can add to the mail-in pharmacy list if requested by a practice, however the Mail-In Pharmacy will show system wide for any and all {{% system-name %}} practice systems. If you wish a mail-in pharmacy to be added to the searchable database, contact your MIE Implementer and specific information will need to be gathered and applied before this can/will be added to the system wide database. This is only for Mail-In Pharmacies, not regular preferred pharmacies which need to pull from SureScripts or NPI databases.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/01f16beb8d6435af30c09e9831d31cad.png)

* <strong>Mail Only option:</strong> Checking this box limits the results to pharmacies in the SureScripts and/or NPI pharmacy directories to mail in pharmacies only. This option is used mostly when setting the patient's preferred mail in pharmacy or when searching for a mail-in pharmacy to transmit to.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/56610a8d06edb83ea4c9d3a10dd96058.png)

## Set Preferred Days Supply

Make sure system setting is turned on for this Days Supply field to show on screen of e-meds module:

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/97a55734872210e1d6514503327b6dc1.png)

### Preferred Days Supply

If no days supply is set for this patient it will say Not Selected. You do not have to set this option. This is the option that will automatically fill in the DURATION (days worth) field in **any** prescription for this patient. (You can override the duration though for any prescription you prescribe).

Preferred Days Supply means for example: a patient may have a mail-in drug prescription program and would need each long-term prescription written for 90 days. This option automatically fills in the days supply in the *duration* field when making a prescription for this patient.

You can change/overwrite the days supply when making a prescription in the *duration* field. (example: patient needs 90 day supplies for long-term meds, but if prescribed on an antibiotic—you would overwrite the days supply for this patient in that prescription).

Click Preferred Days Supply to either SELECT a day's supply for this patient or to CHANGE a day's supply for this patient. It will only accept 1 type of supply. Now it pops open 2 fields next to Preferred Days Supply.

Click in the blank field to manually type in a specific number, then click SET. It will now show up next to Preferred Days Supply: for this patient.

OR

Click on the down-arrow button in the next field. This will pop up 21, 30, 60, 90, 100, 120 day options to highlight and use. Select your days supply from this list. Once you have found the days supply for this patient then highlight it and click it. Then click SET. It will now show up next to Preferred Days Supply: for this patient.

If you chose the wrong one, follow the above steps again. If the days supply the patient uses is **not** in this list, choose the **blank** field at the very top of the list of days supply choices using the scroll bar and highlight and click on this blank field. (At the very top of the listing) This will then make it say Not Selected for this patient.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/a9ef258840a1df4e7c034f03ebd3a775.png)

Then click SET. It will now show up next to Preferred Pharmacy: for this patient.

If you chose the wrong one, follow the above steps again. If the pharmacy the patient uses is **not** in this list, choose the **blank** field at the very top of the list of pharmacy choices using the scroll bar and highlight and click on this blank field. (At the very top of the listing– above the pharmacies that start with A). This will then make it say Not Selected for this patient. See an administrator and they can add a pharmacy & their fax # to the master pharmacy list so it will appear the next time.

## Verify Medication History

OPTIONAL VERIFY SETTING FOR PRACTICES: This verify feature will only appear if your practice is set up for it.

If your practice is set up for this option, you can verify at any time and as many times in a patient's medication history.

Review the patient's medication history and if all is to your approval then click **Verify**.

It will pop-up a confirmation asking if you're sure you want to verify the medications record for the patient

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/60b9ffdc8ef227cc23d7d86adb6d9038.png)

Click Verify or Cancel. If click VERIFY, it will then show the meds history as

**List of Verifications** with the date you verified, the time you verified, and your username.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/f3ba68698479157172cb1ec84a54e8b8.png)

When a medication history has been verified, it shows the meds history as **List of Verifications Verified On:** with the date last verified, the time last verified, and the username who last verified this Medication History content. If you wish to verify again (ex: is has been a month and changes were made, etc) then click **Verify** and it will alert you if you really wish to verify or not. If you verify, it will then save this verification as *Verified On*. It only saves the last verification. This verification date/time may also print on your system's Med Sheet if your practice has it set up to do so.

If you wish to see an entire list of verifications done on this patient's medication history, then click **List Verifications**.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/f3ba68698479157172cb1ec84a54e8b8.png)

The Meds + Allergies list of verifications will display. You can also click View Doc to view that specific Med Sheet with all the meds/allergies for that specific verification that was done.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/bde4c14d96670d91c8311242a666a1cb.png)

If a patient never had their medication history verified, you would see the following statement in their Medications History screen: *The accuracy of this content has not yet been verified.*

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/4b6a74cecaf18b996950403a2c0afb6b.png)

## Select Current Library

This does NOT save for a patient. This is just for you as a user to select a physician/person's library of prescriptions you want to work in. You can switch here when in different patients. If you only work for 1 physician primarily, you can select his/her name here in the library and that's what will be defaulted to for **every patient's chart** you work in, unless you change it here.

This allows you to work under a library/physician for prescribing without having to always go to your control settings.

![](../setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.assets/19f97c3a728d49f4c819c8280c90b141.png)

If you wish to change library/physician for prescribing click Current Library in the patient's med screen.

Use the drop-down arrow and highlight the physician/person and click.

When prescribing medications for this particular physician/person, it will resource the physician/resource's library of ‘saved' prescription names or sigs, or instructions. It also pulls this physician's name to the Prescriber field in the prescription. Of course, you can always select/overwrite to a different physician's name in the Prescriber field of a prescription.
