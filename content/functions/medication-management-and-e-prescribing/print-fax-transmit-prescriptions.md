---
id: '1YXoK4YEcfupQDQQrPlaqPjDkB4CLhiJER9sF4pGuwGc'
title: 'Print/Fax/Transmit Prescriptions'
date: '2024-05-24T16:11:13.918Z'
version: 122
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1YXoK4YEcfupQDQQrPlaqPjDkB4CLhiJER9sF4pGuwGc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Printing a prescription will render the prescription on paper from your printer you are hooked up to.

Transmit will send the prescription by a SureScripts electronic transmission (if the receiving pharmacy is SureScripts capable). If the pharmacy is not capable of receiving electronic transmissions, your prescription will automatically default to a manual fax to that pharmacy.

## Print/Fax/Electronically Transmit Prescriptions

After you click SAVE when prescribing a drug, the Medication history screen will reappear and in the middle will be a box that says **Unsent Prescriptions.**

The Unsent Prescriptions queue respects how the prescription was generated and indicates how to be sent.  When prescribing from the encounter, the prescription *Transmission* method will respect the My Settings preference. If the Transmission method for the prescription was selected as "None", the prescription will display in the Visit Orders summary and Prescribed Meds List but will **not** display on this Unsent Prescriptions queue. For users that prefer to use the Allergies/Medications chart tab to prescribe, selecting the default method option of "None" will "uncheck" the Print/Transmit box.

![](../print-fax-transmit-prescriptions.assets/296576b34a9886bee980b3529240a6f7.png)

* <strong>Include</strong> option column: This will automatically default to having all scripts check-marked to be included in the print/fax/transmit queue. You can un-checkmark specific ones and they will <strong>not</strong> print/fax/transmit at this time. However, they <strong>will</strong> stay up in the <strong>Unsent Prescriptions</strong> queue. You can then print or fax/transmit or take completely out by clicking Do NOT Send (see below instructions).
    * If there are prescriptions in this queue but you cannot check-mark them to include them to be sent, then you must look at the details column to see what needs fixed. Once errors are fixed, then the prescription should be able to be check-marked to be included to be sent.
* <strong>Drug</strong> name column: It will then list the names of the drugs (it lists generic names if they selected ok to substitute). You can click on this underlined name of the drug to get a summary of the prescription that was entered. Then you can edit (if have security permission) from there. If you see the printer icon next to the drug name, this is a quick link to access the drug guide information sheet for this medication. You can click the printer icon to be sent to the print/fax module to quickly print this drug guide. You can click the printer icon at anytime to print the drug guide as many times as you wish. The printer icon also shows next to the drug name in the Medication History summary. This is a system setting and may not be turned on for your practice.
* <strong>Details</strong> column: This will be blank, unless there is an error with the prescription or if it is a controlled substance. If there is a field left blank, it will say here what it is missing. If it is a controlled substance, then it will say that here. Some options currently set to show in <em>details</em> column are: 1) Controlled substance with class #, 2) May or may not be a controlled substance, 3) No Quantity specified, 4) No Strength/Form specified and 5) No Prescriber specified. This allows you to catch something before printing/faxing, correct it, then print/fax it correctly. To correct something, you can click on the underlined drug name in the <strong>Drug</strong> name column and it will pull up that prescription. You then click <em>Edit</em> and either <em>Change Therapy</em> or <em>Correct Error</em> (see separate Prescribing/Adding Meds help documentation). Click <em>Save</em> after correcting the error/therapy, then it will still be in the pending print/fax box w/ your changes/corrections. Prescriptions with missing "required" SureScripts fields can be printed, but not faxed/e-sent until the required fields are fixed. If SureScripts is disabled, then there will be no warning about the required fields.
    * If you see a detail message of:_  
        This drug has (Inactive) status_  
        , that means the system is telling the user that for example: Elavil is not a drug that can be prescribed anymore, according to our drug database provider (First Databank) it is inactive and not available for prescribing. Further research will need to be done by the user to prescribe something valid.

![](../print-fax-transmit-prescriptions.assets/d1c0159ce0013ed7a77ee2b43343a896.png)

* <strong>Options</strong> column with the words "<em>Do NOT Send"</em>. If you do <strong>not</strong> want to print/fax/transmit a particular prescription or drug guide at this time then click that. It will take it totally out of the <em>pending print prescriptions</em> and still places it below in the patient's medication history_._ It will show the others still as active to print (if there are others pending to print). You can continue to click another if you wish not to print another. This medication has been prescribed for this patient, but has been chosen not to print/fax/transmit. Ex: you may have called in a prescription to a pharmacy. Since you called it in, you would not print/fax/transmit it now.
* <strong>Script:</strong> Use the drop-down arrow to select the type of script pad you want these printed/faxed/transmitted on.
* <strong>Print/Fax Prescriptions:</strong> Click the radio button next to <strong>Print</strong> then click <em>SUBMIT</em> to print <strong>all</strong> the prescription(s) in this list on paper. The print module will appear. Click Print (or cancel) and proceed by selecting your options and click the Print box. If you need to manually fax the script to some known place and a fax number, you can click the Fax radio button from this print module to get to the manual fax module. Doing so would <em>not</em> be an electronic transmission via SureScripts. By default clients are <strong>not</strong> able to e-fax controlled substances. There is a system setting "E-Chart", "Meds", "Disallow Faxing of Controlled Substances" that would need to change to be 0 if practice wants to have that ability. Contact your MIE Implementer.
* <strong>Transmit Prescriptions:</strong> Click the radio button next to <strong>Transmit</strong> then click <em>SUBMIT</em> to transmit <strong>all</strong> the prescription(s) you have check-marked. The transmit e-prescription module will appear. The <em>Pharmacy</em> field will have automatically filled out as the <em>Preferred Pharmacy</em> transmit information according to if/what was selected for this patient. If the <em>Pharmacy</em> field is blank, then there is no preferred pharmacy set in the patient's e-chart.

The easiest/quickest way is to have had the patient's Preferred Pharmacy set in the patient's meds tab and a stored Preferred Mail-In Pharmacy for the patient. Then you can use the quick buttons of USE PREFERRED or USE MAIL-IN to populate the pharmacy field with that specific pharmacy and continue to transmit the script.

![](../print-fax-transmit-prescriptions.assets/d950b09564fcd7955798dfa8a513e402.png)

If you wish to search and transmit to a different pharmacy, just clear the *Pharmacy* field (click the CLEAR button) and type at least 3 characters of the pharmacy you want to search for. The system will show you a drop-down of matching choices according to what you typed. These pharmacy choices are within the patient's state/city or zip code range. The state/city and zip code defaults are read from the patient's demographics tab. If there is no zip code entered in the patient's demographics tab, it will show choices for pharmacies within the logged in user's zip code range.

When you search for a pharmacy to send to, it shows the pharmacy name, address, phone and fax numbers. It also may show some pharmacies in grey and some pharmacies in bold **blue.** Pharmacies showing in **blue** are capable to e-transmit to using the SureScripts feature. It doesn't mean it will be electronically transmitted to that pharmacy though unless you are a certified e-prescriber with SureScripts (see other help documentation named *Setting up E-Prescribers.pdf* to become certified). The bold **blue** just signifies that this pharmacy is indeed capable to electronically transmit to via the SureScripts feature. The other pharmacies in grey are valid pharmacies, but they would be transmitted via standard fax from {{% system-name %}} because they are not capable of receiving via electronic transmit. *If the pharmacy isn't capable of receiving an electronic transmit, the prescription will automatically default to a fax to that pharmacy.*

![](../print-fax-transmit-prescriptions.assets/56610a8d06edb83ea4c9d3a10dd96058.png)

![](../print-fax-transmit-prescriptions.assets/5db223624754c993c465abceff3eb3af.png)

Select the pharmacy you wish to transmit to. You can search for pharmacies via state/city or zip code. We suggest searching by zip code because for example: some pharmacies from the database may be loaded as Ft Wayne vs Fort Wayne. Some cities may be spelled out differently, but the search should find those and we can add a list of normalized city names as needed.In the blank pharmacy field type at least the **first three (3) letters** of the pharmacy and it will take you to those pharmacies matching those initial characters. It may take a few seconds to load selections because it is looking through the NPI pharmacy directory and the SureScripts database of national pharmacies for that area in your search criteria. This field searches those directories. This search field is not pointed to any {{% system-name %}} departments. If the pharmacy you want is not found in the search, there is no way to add it to the directories. Adding a pharmacy to a department in {{% system-name %}} username screen will not show here. You would need to print the prescription for the patient if the pharmacy they want it sent to is not found as a choice. The pharmacy selections from the NPI database & SureScripts database and are updated nightly.

If you can't find the specific pharmacy you need, please be sure to search via zip code search criteria. Some cities are stored in the directories differently (ex: Fort Wayne vs Ft Wayne) and MIE has no control of how those are stored and directed to {{% system-name %}} from SureScripts, but the search should find those and we can add a list of normalized city names as needed. It's best to do a zip code search. Zip code search will search for pharmacies 100 miles around the center of the zip code. The first 30 will render with the closest ones first in the list.

* <strong>Exclude NPI checkbox option:</strong> Checking this box limits the results to pharmacies in the SureScripts pharmacy directory.   NPI data is a U.S. database of all pharmacies, but some do not have fax numbers available. If this box is not check-marked, then you are searching in both directories for the pharmacy of your choice.
* <strong>Mail Only option:</strong> Checking this box limits the results to pharmacies in the SureScripts and/or NPI pharmacy directories to mail in pharmacies only. This option is used mostly when setting the patient's preferred mail in pharmacy or when searching for a mail-in pharmacy to transmit to.
* <strong>Fax # / Phone # Search:</strong> You can do a reverse search for a pharmacy if you know the pharmacy's specific fax number or phone number. Instead of searching for the name of the pharmacy, you are searching for pharmacy matches by fax/phone number of the pharmacy that you know. This could be utilized when a patient states a pharmacy that may have had a name change. The patient may know the pharmacy by one name, yet the SureScripts and NPI database have it stored as an official/different name. To search for a pharmacy by its known fax or phone number, first make sure the <em>pharmacy field</em> is cleared. Click the clear button to clear that field. Then select the radio button to search by fax or phone number of the pharmacy. Proceed to type in at least the first 6 digits (including area code) of the fax or phone number for the pharmacy you are searching for. The first 6 digits are required. You can type them all run together (ex: 260483) or include a space or dash (ex: 260 483 or 260-483). Once you have at least the first 6 digits of the pharmacy's fax or phone number you are searching for, hit your TAB key to advance and then any matching results will render.

![](../print-fax-transmit-prescriptions.assets/fd0a18431018d640eb4133c058b37128.png)

If you wish to set this found pharmacy as the patient's Preferred Pharmacy or as the patient's Preferred Mail-In Pharmacy, after you've selected it from the *Pharmacy* search field, simply click the SET AS PREFERRED button or SET AS MAIL-IN button. It will save that pharmacy as the patient's Preferred Pharmacy in {{% system-name %}} or the patient's Preferred Mail-In pharmacy.

![](../print-fax-transmit-prescriptions.assets/41375944cdc446314d587966e059949d.png)

![](../print-fax-transmit-prescriptions.assets/ef2bce5c94aa26eadc63ca5f7e93fcd9.png)

At the top of the fax/transmit screen is the *medications* summary of each prescription being sent. This is essentially the preview and last step to verify the prescription and details that will be faxed or transmitted. You can use the show/hide link to show/hide this section if you wish.

![](../print-fax-transmit-prescriptions.assets/ec37e933e229281983a2548a9e6d7327.png)

The next section is the pharmacy search (described above).

Below that are the details of the pharmacy that it will be faxed or transmitted to.

* <strong>Service Level</strong>: The service level tells you what that pharmacy is capable of.  Hover your mouse over the help icon to see what the pharmacy you selected is capable of. This is an example of a pharmacy that is capable of receiving prescriptions via electronic transmission using SureScripts. This would be sent by electronic transmit (SureScripts) if you, the prescriber, have been verified by SureScripts as an approved e-prescriber. It also shows the service level and you can hover over the help icon to see descriptions of service level(s) this pharmacy is capable of. The Fax Coversheet will <strong>not</strong> render if the pharmacy will be receiving the prescription electronically transmitted from your practice.

![](../print-fax-transmit-prescriptions.assets/62fb28c60bc5ddf45d0534b6c43938e2.png)

* <strong>Fax From</strong>: This field shows on the Fax/Transmit E-Prescription screen, allowing users to choose a source location.  Pharmacies then can see what number to use if faxing things back.

![](../print-fax-transmit-prescriptions.assets/012f90ded688fe269c5cb86441067b0b.png)

* In order to see the <strong>Fax From</strong> field you need the security setting of <em>Allow Setting of FAX From</em> set to yes. Also, the location selections shown in this <em>Fax From</em> field are pulled from the "Locations" tab in {{% system-name %}} . The location(s) you wish to be able to show as selections here must have the setting of <em>Use In Fax Header</em> set to Yes in the "Locations" tab.

![](../print-fax-transmit-prescriptions.assets/aadee9f0d952a1ee9e26724934f235ea.png)

* <strong>Fax Coversheet</strong>: Choose the fax coversheet if you are the prescription is defaulting to go by fax (fax-only service level) because the pharmacy isn't capable of receiving electronic SureScripts transmissions. The fax coversheet will <em>only</em> be sent with the script if it goes by default fax mode. A script will be sent by fax if the pharmacy is not capable of receiving via electronic transmittal, or if you, the prescriber, do not have verification approval from SureScripts to be an e-prescriber.

![](../print-fax-transmit-prescriptions.assets/bbd0f85fc1d6629332bd690c35a397ce.png)

* <strong>Fax/Transmit</strong> will default to a fax or electronically transmit the prescription job right then.
    * Fax/Transmit button will send the fax or transmit the prescription electronically depending on the service level. Preview button will only appear if the prescription is being sent via fax. This way you can ‘preview' the fax being sent.
* <strong>Preview</strong> (if you wish to preview the default fax first) will pop-up an AlternaTIFF view of what the fax will look like (including the coversheet). You can go thru each page using the < > arrow keys. Preview shows you the fax to look over. See additional information below.
* <strong>Cancel</strong> button here at this point cancel this screen and keep the script in the print/fax/transmit queue.

Even though the pharmacy you selected is e-send capable, doesn't mean that you are transmitting/e-sending until you are a verified e-prescriber with Surescripts. The script will be sent by a default manual fax until you are verified with SureScripts. There's nothing here on this screen telling you which way it will be sent (fax or transmit) until after you click fax/transmit. Then it will say it was faxed instead of e-sent because the prescriber is not an e-prescriber. It will let you know if it was faxed or e-sent successfully right away or show you a message that it may be pending verification.

![](../print-fax-transmit-prescriptions.assets/76dec8bb7fd116c946662bd285072e43.jpg)

To see if the script was printed, faxed or electronically transmitted (e-sent), you can go into the patient's medication history to view how it went. (See instructions on page 7 below)

Patients with a non-US address previously could not have E-prescriptions routed through SureScripts. One workaround some practices used was to temporarily change the patient demographics to be the state and zip code of the practice temporarily. A new system setting now exists to make this possible without having to change the demographics. The setting name is "E-Chart", "SureScripts", "State,Zip for non-US patients", and should contain the two letter state abbreviation followed by a comma and a 5-digit zip code, if a client wants to use this behavior and see's patients that live in other countries and their demographics tab reflects that (ex: Canada).

### Fax Preview Mode

If you are sending a prescription that is going to go by a default manual fax (because the pharmacy isn't capable of receiving electronic SureScript transmissions),

![](../print-fax-transmit-prescriptions.assets/c2ef0361dc2da490b9e4a16fe6fb11e6.png)

In the **FAX PREVIEW** mode, it opens an AlternaTIFF view of what the fax will look like (including the coversheet). You can go thru each page using the < > arrow keys. Preview shows you the fax to look over. You then have the choices of SEND FAX or CANCEL FAX in this preview mode.

![](../print-fax-transmit-prescriptions.assets/e45b48120854615365318c83aa43a395.png)

* If you preview it and all looks fine, you would click SEND FAX.
* If you want to cancel the entire fax job you click CANCEL FAX.  Cancel Fax takes the fax job completely out (doesn't mark it as faxed either) and cancels the fax entirely. This Cancel Fax button in the preview mode acts entirely different than the Cancel Fax button on the fax/transmit screen earlier.
* If you notice an error while previewing the fax and need to change something on the script or fax coversheet itself that you are previewing on the screen, you can just click the <strong>red</strong> X at the top right of the preview screen and the script stays in the queue to do later or change who you are faxing to, etc.

It stays in the queue if you just use the **red** X to close the preview screen.  Use the X to close out the preview if you still want it to fax, but need to change an error or where it's being faxed to, etc.

If someone clicks CANCEL FAX by accident in this preview mode, then they would just go into the medication in the medication history list, click refill then click REPRINT OLD PRESCRIPTION and it puts it back up in the queue.

### Email Notifications of Sent and/or Failed Faxes

You can have {{% system-name %}} send you an email notifying you upon each successful sent fax you did and/or each failed (unsuccessful) fax that you sent via {{% system-name %}} . This is a user preference and only affects you, the logged in user. This is only for default manual faxes, not electronic SureScripts transmits. See other help documentation titled *Email Notification of Sent or Failed Faxes-Outbound Faxing.pdf* to set this preference.

If there were any errors with the pharmacy receiving your electronic transmit, you would go to the E-Refills tab and view those in the My E-RX Errors tab. See other help documentation named *E-Refills-MY E-RX ERRORS.pdf*.

### Verify Prescription Printed/Faxed/Transmitted

In the patient's E-Meds chart tab click on the medication/drug name of the specific medication in the Medication History section (Drug Name column) to see the stored history for that drug/prescription.

![](../print-fax-transmit-prescriptions.assets/8c7b129aafc1540af3454df6248d8075.png)

Once in the specific drug history, scroll down, it will show refills, medication revisions and below that it will tell you when/if the script was printed and/or faxed and also another section for e-send (electronically transmitted) dates and to which pharmacy.

![](../print-fax-transmit-prescriptions.assets/c58d55ac44c9968e6bf5b5e30ac51dcf.png)
