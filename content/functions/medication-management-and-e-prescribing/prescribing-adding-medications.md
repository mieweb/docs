---
id: '1gaHfjLq39wqQJRPf8fH6ozhs4LyAdTUxiG2JeKq0lPI'
title: 'Prescribing/Adding Medications'
date: '2024-05-24T15:54:13.462Z'
version: 253
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1gaHfjLq39wqQJRPf8fH6ozhs4LyAdTUxiG2JeKq0lPI'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
To access the Meds Tab in a patient's e-chart, click *E-Chart* on the left sidebar menu.

Search for the patient you wish to view.

Click on the *Medical Record* tab at the top in the patient's chart. Click on the *Allergies/Medications* tab.

The *Allergies/Medications* summary screen pops up and lists allergies, refills due (if any) and medication history.

Allergies/Medications tab options appear on the top right side of the screen.

![](../prescribing-adding-medications.assets/b0a640c632b3f4f658310a284f6e555b.png)

## Prescribe

Click Prescribe to prescribe **new** medications for the patient from your facility. This is not to be used to just add to the list of existing medications taken by this patient. This is used to quickly prescribe prescriptions for the patient.

![](../prescribing-adding-medications.assets/b4dfcd9c9cb46a20074c1e7c93995cee.png)

**DRUG INTERACTION warning** will appear when using this option if you are prescribing a drug that interacts with another the patient already has entered as prescribed or an allergy the patient has entered. Quick Prescribe will also check and give warning to duplicate therapy by checking the patient's current med lists entered in {{% system-name %}} .

![](../prescribing-adding-medications.assets/55b53d9a2ea6c12b6c8b3b3eb1f163c7.png)

### Prescription Fields

![](../prescribing-adding-medications.assets/676fa2f916395de6a3434c6a429f9f05.png)

* <strong>Clear:</strong> Clicking this button will clear out <em>all</em> fields for this specific prescription. This is a quick way to clear the fields to start over if you realize that you made a mistake and want to start over (before clicking the ‘prescribe' function button).

![](../prescribing-adding-medications.assets/b438c1a102bd28854faf710c9860c5bd.png)

* <strong>Medication</strong>: Type in name of medication. Use the auto-complete to select the active medication from the FDB knowledge base. <em>First DataBank announced in Sept 2010 of an enhancement to generically named medication concepts. To comply with the Institute for Safe Medical Practices (ISMP) standards, FDB has lowercased the first letter of each ingredient in the generically named medication descriptions</em>. <em>Obsolete drugs and forms/strengths will now be shown when prescribing, up to 3 years (according to First Databank's recommendation) after they are no longer being actively produced and marketed in the US. These drugs will appear in the autocomplete results with "OBSOLETE" because it is possible that the drug is no longer available.</em> You can free-text in a medication name if not recognized in the FDB database of choices, but it is limited to 105 characters. If you continue to free type, it will generate a message that it's an uncoded drug and won't interact with drug/drug interactions. If the drug you are trying to prescribe does <em>not</em> show in the auto-complete choices, please consider prescribing a generic or alternate choice, as the drug you have entered may no longer be available. But you can continue to free-text in an uncoded medication to prescribe.
    * The medication field will auto-complete and you can select from the choices. The choices list is not alphabetical based on few characters.  It is supposed to be based on frequency of use. Type more characters to limit the list choices.
    * {{% system-name %}} uses the First DataBank knowledge database. The circled-blue next to it will pop up the drug guide and information concerning this drug if you click on it.

![](../prescribing-adding-medications.assets/1edbd7e469a98f7375b8ab48bbb40d2f.png)

* This is an information link that opens up a separate screen with drug guide information for recommended dosage, drug interaction information, side effects, formularies, etc. Close out the drug info screen using the X at the top right.

{{% tip %}}
The prescribe feature is not the most favorable place to prescribe DME or supplies. You could free text the DME or supply via quick prescribe and save it as a remembered script and pull it up each time that way for future use. However, ordering DME or supplies could also be done as an e-order in the e-orders module.
{{% /tip %}}

* <strong>Form:</strong> If you tab over or click in that field, begin typing (it's an auto-complete field) and it will list choices of forms that this drug comes in. You can also use your ↓ down arrow key on keyboard to see selections. Also you can free-text in that field too, but is limited to 105 characters. {{% system-name %}} uses the First DataBank knowledge database to display "AB rated equivalent" generics in the drop-down selections for "form."  If the generic is chosen, the medication will be switched to the generic form for the brand in the final prescription. Medication forms are listed in order of most frequently used/prescribed, not in alpha order or numerical order. If you free-text in a ‘form', it will not be saved if you use the <em>remembered script</em> feature. Only valid FDB form selections are saved using the remembered script feature.

![](../prescribing-adding-medications.assets/512b59c4fa4b4480b13b149717c73a0f.png)

* <strong>Dose:</strong> A ‘dose' button to open up a <em>dose calculator</em> window is available if the system setting is on to show this button.

![](../prescribing-adding-medications.assets/551e847325764427ffe3538390ecfcb4.png)

* <strong>C / S:</strong> If the C and S checkboxes appear, you've entered in an uncoded medication. Usually you will see the pop-up also that states the system cannot determine and you need to choose the compound or supply flag to indicate that this is not a controlled substance. Do <em>not</em> choose the compound or supply flag unless what you are prescribing is truly a compound or a supply. If the drug you are trying to prescribe does NOT show in the list, please consider prescribing a generic or alternate choice, as the drug you have entered may no longer be available. In order to electronically send, you must specify C or S to indicate if it's a compound or a supply. A compound is multiple drugs, possibly mixed together by the pharmacist. It doesn't mean that for marketed compound drugs like ex: Caduet that you have to check this box. This is for uncoded things only. A supply is a non-drug, like syringes or crutches that some staff write prescriptions for.

![](../prescribing-adding-medications.assets/44b0531889640ada7e07905ab7bf1957.png)

![](../prescribing-adding-medications.assets/7bf520b5a523126723d772a90db8fa19.png)

* <strong>Start Date:</strong> Select today or pick a date to start prescription.
* <strong>Practitioner Sig</strong>: Type in your instructions. The sig should always include <strong>dose, route and frequency.</strong> Then use the <strong>tab</strong> key and it will automatically pop up the written <em>Patient Sig</em> for this drug. If the practitioner sig is too long when it converts into the English Patient Sig, it will give you an error that you need to shorten it. SureScripts limits the number of characters in the sig, so you may need to put the complex sig in the Pharmacist Note field instead. Also, do <em>not use commas</em> to separate instructions in a sig. Use the semicolon to separate things in a sig. When you tab, the translation into patient sig will take place and you can double check the translation. PATIENT SIG is what SureScripts transmits electronically to pharmacies if you transmit using e-send.

![](../prescribing-adding-medications.assets/5774383e455ecc45fc6ca9757c6876c3.png)

* <strong>Duration</strong>: The duration will automatically populate the preferred days supply the patient may have set in their e-meds tab. You can also change that to any duration you wish.

![](../prescribing-adding-medications.assets/4b8cdf3b7ebe35a7f582928bcd652531.png)

* Type a duration and you must use d for days, w for week, m for months, or y for year. Example type: 30d or 1w or 8m or 1y <strong>OR</strong> can use any combination. Example: 3w 2d or 1y 3m etc. If you don't type d or m or w or y— it will default to ‘d' for days. However, you do need to enter something in this field. You can enter zero and it will be considered 0d (zero days) or you can enter a specific day/week/month duration.  This field a required entry (even if type a zero), but it cannot be left blank. If left blank, you will receive an error message that there are invalid/missing fields in your prescription.
* <strong>Total Quantity</strong>: The total quantity should calculate automatically according to the Duration field and Sig. Otherwise you can free-type a quantity. (The quantity will also automatically fill in if the user enters a Sig and a Duration that is understood in the system.

![](../prescribing-adding-medications.assets/6eb46d2ed56affc82ca2fe7bca01910a.png)

* If the user manually changes the quantity, then the automatic calculating behavior is turned off for that quantity). This field will only take a numeric quantity or you will get an error before rendering the script via fax/print/e-send. The next field after the quantity is the unit. It will automatically show the unit according to the form selected above, but if not, you must select something in the drop-down list and you cannot prescribe the medication without this field having an entry.
* <strong>QS (Quantity Sufficient)</strong>: The ‘QS' (quantity sufficient) button (if clicked) fills in the numeric quantity with a 1, and picks "Not Specified" from the unit of measure drop down, and adds "Quantity Sufficient" in the Note To Pharmacist field for that script if used.

![](../prescribing-adding-medications.assets/a4c632b12a96f3ed5fc7f9f06f5b1097.png)

* There are cases where the prescriber wants to just make the pharmacist figure out how much to give the patient.

![](../prescribing-adding-medications.assets/bd297185c0f93742a25d2675ac07d9de.png)

* Total Quantities should not be overly vague to send to pharmacies. For example, Azelex Cream 20%, "Apply to affected area daily", for 30 days, with a quantity like "1 tube".  That cream may be available in a 30g tube and also a 50g tube, so the pharmacist doesn't know which one to give, without calling back to the prescriber's office, or trying to figure it out by asking the patient… "So, how big IS the affected area?  Are you dabbing this on a mole, or slathering it over your whole leg?"  For things like tablets and capsules, it's not as big of a problem, as the prescriber tends to give an exact number here.
* Available package sizes are now visible to our prescribers.  This comes from the NDC data. The "Pkg" button, when prescribing or refilling a medication, gives prescribers a view of what sized packages are actually available, allowing for better prescriptions to be written.

![](../prescribing-adding-medications.assets/a884542e94b4d35cacd264f2220bdfe7.png)

* When the red ! appears, that means {{% system-name %}} couldn't figure out a quantity to dispense based on what was entered.  If the user clicks the Pkg button at that point, we show the package sizes provided by the First Databank database that the user should select from – so it's specified to the pharmacist and not vague. Click on the selection and it will set the <em>Total Quantity</em> value and unit.
* Area's/modules where this feature will appear: Prescribe (E-Meds) chart tab, Refill, Refill All and Encounter Plan meds section.

![](../prescribing-adding-medications.assets/23afd9e4d8b752b4ede77472872cf888.png)

* <strong>Reason for Taking:</strong> Type in reason patient will be taking this drug. The user preference <strong>Quick Add Auto Disp Indication</strong> in MY SETTINGS will determine what indication choices pop-up here. If your preference is set to No, then you must start to type an indication and the system will auto-complete indications related to the drug by what characters you've typed. If your preference is set to Yes, then when you click into this Indication field or use your tab key in this field, it will pop-up a list of all indications related to that drug you are prescribing. You can choose one or free-text an indication.
* <strong>Managed By:</strong> Type in name/physician who is managing this drug.
* <strong>Remember As:</strong> This means you the user can type something in there (example: BOB or Heart Disease). This remembers this specific prescription/form (not free-text form though)/sig/duration/refills and quantity and saves it in the prescriber's medication library. The next time you type in that medication, there will be choices in the auto-complete drop-down that says ex: Lipitor (new), or another choice would be Lipitor (BOB) or Lipitor (Heart Disease) etc.

![](../prescribing-adding-medications.assets/c3cea637d001f0d6a2f5f1f0691acb13.png)

* Normally users enter a doctor's last name in the ‘remember as' field <em>if</em> that physician routinely prescribes that same medication/form/qty/sig/refills, etc and it's just a quick way to save it and not have to fill out each field again for common meds a physician routinely prescribes.
* The Current Library you are set to in e-meds in that patient is the library that <em>remembered script name</em> will be saved under. Meaning, Dr. Jones would not see <em>LIpitor (BOB)</em> as a choice when prescribing Lipitor because that is only saved in Dr. Andrews library. Each physician has their own meds library to save most common scripts in if they wish. You do not have to use this feature of <em>remembered script name</em>. It's simply there to help with most common prescriptions routinely/daily prescribed.

![](../prescribing-adding-medications.assets/4b8cdf3b7ebe35a7f582928bcd652531.png)

* Any time is says (New) next to a medication choice, it means it is a new template with no saved fields…meaning all fields will be blank. That means the <em>remembered script name</em> field was left blank. You do <strong>not</strong> have to type something in the <em>remembered script name</em> field. Remembered Script Name—only saves this (name) in that particular physician's library you are working in. It's just another way to pull up a prescription that will automatically fill in all the fields for you (as you saved them with this ‘Remember As', instead of filling out each blank field.

![](../prescribing-adding-medications.assets/559d861824a96b83e1fb0d31ed918f30.png)

* Example: if there's usually a certain way this physician prescribes Donatussin, then you may want to Remember As: (Smith). So, next time Dr. Smith is prescribing for a patient, you could choose this remembered name—which would populate all the fields as how the doctor usually prescribes this specific medication. They just select that medication name with the (remembered name) and then click the PRESCRIBE button and all is done & quickly. When there is something in ( ) parenthesis, it means that a user has saved a name of how they entered that prescription as. <em>See other help documentation named Meds Library-Remembered Scripts.pdf for full instruction and information.</em>
* <strong>Update button:</strong> The UPDATE button found above ‘remember as' field can clicked if you used/prescribed a ‘remembered script' in the medication name field. Some previous saved remembered scripts could be missing required info/fields for prescriptions to be valid for electronic transmission via SureScripts. If you use a ‘remembered script' and update or enter in information to the prescription fields and click the UPDATE button for the remembered script, it will ‘update' that remembered script with everything you entered in currently then. It ‘updates' the remembered script and changes that remembered script to have the details you just entered in. When you click the UPDATE button, the ‘remembered script name' populates that field and upon submit, that remembered script name will be updated with the information you entered.
* <strong>Refills</strong>: Type in # of refills allowed for this specific drug prescription. This prints on the script. This has nothing to do with Refill Due summary for a patient's prescription.
* <strong>May Substitute</strong>: Click Yes or No. Each physician can specify their own list of drugs that they never want substituted. When MIE loads these, regardless of Yes or No to allow substitute, it will print their signature in ‘dispense as written' field. His specific list and capability is tied to the prescribing physician. (MIE has to load these requests)
* <strong>Prescriber</strong>: This field defaults to the current user if you are a prescriber. Otherwise, select the name of the physician prescribing the medication. Click on the drop-down arrow next to it and it will pop-up the names that appear in your company's scheduler. Select a name from here by highlighting it and click. If you do <strong>not</strong> select a Prescriber, you will get an error message when you try to prescribe. Whichever Prescriber you used last is remembered in this field.

![](../prescribing-adding-medications.assets/66a37b2eb1aa12e8aa94c86fed8a060d.png)

* If you are an NP or PA, etc and your state requires you to have a supervising prescriber/physician attached to your scripts, you can set this in MY SETTINGS. Then contact your MIE Implementer to have your printed/faxed scripts programmed to show that information. If you have a supervising prescriber set for you, that information will be sent to SureScripts with all your electronic prescriptions automatically.
* <strong>Print/Transmit:</strong> Check-mark the box if you wish to print/transmit this prescription. By default, this box can be checked, if the My Setting Prescription Print/Transmit is set to Print or Transmit. If None is selected, the checkbox will be blank by default and the prescription will display in the Visit Orders summary/Prescribed Meds List and <strong>not</strong> display on the prescription send queue
* <strong>Print Drug Guide:</strong> Check-mark the box if you wish to print the drug guide for this prescription. It adds it to the print/fax queue if check-marked.
* <strong>Special Instructions for Patient Education/Med Sheet:</strong> Type in the free-text box. This <strong>will not</strong> print on the script. But, this <strong>will</strong> appear in patient's Medication History under Sig column and in Pat.Ed sheet and Med Sheet. An example of something a physician would type in here might be example: Put 1 tablet under tongue as needed for chest pain. If chest pain continues, you may repeat 2 more times. Wait 5 minutes between each dose. If chest pain still persists call 911. Anything typed in here when using the <em>Remembered Script</em> feature will also be saved with the remembered script.
* <strong>Office Comments:</strong> This is for comments for office use only.
    * This will*  
        not*  
        print on the script.
    * This*  
        will*  
        appear in a Comments column on the Medication History Summary Screen.
    * This will*  
        not*  
        appear in the Pat.Ed sheet.
    * This*  
        will*  
        appear in the Med Sheet in comments column.
* <strong>Note to Pharmacist:</strong> You can free type in a note to the pharmacist. It will also be transmitted to the pharmacy and will print on the script when rendered. When you view or edit the med details, this will show there also. This field is limited to 210 characters by SureScripts. Anything typed in here when using the <em>Remembered Script</em> feature will also be saved with the remembered script. This Notes field should only include information to the pharmacist that does not already have structured fields designated for such information, so long as it does not conflict with information sent in other structured fields. Inappropriate use of this Notes field includes information that already has a structured and codified field within the e-prescription message. The most concerning inappropriate use of this field is for patient directions, either supplemental or conflicting. This can lead to critical information not being conveyed to the patient. However, <strong>patient instructions on medication use should be contained entirely within the Sig field.</strong>
    * Instructions should not be split between the Sig and Notes fields. The Notes field should be reserved for information to assist the pharmacist in dispensing, benefits determination and other pharmacy staff activities.
    * Populating multiple fields with patient instructions may result in some instructions being missed and not conveyed to the patient.
    * Inconsistent patient information between the Sig and Notes can result in the patient being provided the wrong instructions.
    * <strong>Examples of improper use:</strong>
        * Sig field-"Take one tablet daily," Notes field-"Take only on Monday, Wednesday and Friday."
        * Sig field-"Dissolve one tablet under the tongue every 10 minutes for chest pain," Notes field-"Call physician immediately if relief is not obtained after three doses."
        * Sig field-"Apply and rub well into affected area twice a day," Notes field-"Discontinue use and call physician if rash worsens."
        * Sig field-"One drop to eye having surgery three times daily," Notes field-"Start two days prior to surgery."
* <strong>Discontinue On:</strong> Can type a date this medication is to be stopped. If a date is typed here—it will <strong>not</strong> pop-up in the Refill Due section of the Medication History screen when prescription is out, according to the duration, etc. If you leave this Discontinue Date blank, then it assumes it is for a long-term drug and will automatically pop-up in the Refill Due section of the Medication History screen when the prescription is out, according to the duration, etc. Discontinue dates can be entered for antibiotics, controlled substances, etc.Click <strong>calculate</strong> if you wish to set the discontinue date for exactly when the duration is up. Example: if you typed in 3w for duration (3 weeks) then click <em>calculate</em> here and it will automatically figure out 3 weeks from the start-date and insert it.

Fill out next Prescription Detail box with the next prescription details for this patient. Each separate prescription has its own CLEAR button if you wish to clear out the details before using the ‘prescribe' function button.

When done entering prescriptions, click any **Prescribe** button. Those prescriptions you created will then show the *Unprinted Prescriptions* box and the screen will refresh you to the Medication History summary screen.

*To print/fax prescriptions, please see other help documentation named Print-Fax-Transmit Prescriptions.pdf*

## Prescription Samples

Prescription samples should be prescribed like any other medication, giving it a discontinue date that lines up with when the person should naturally run out.  Doing it as an actual med means they will get the prescribing warnings and that it will be seen on the historical medication list, rather than having to hunt for it someplace else.  Hypothetical scenario could be that a facility calls to say the patient is unconscious in the ER from what seems like a serious allergic reaction, asking if maybe the doctor's office knows of any recently prescribed meds. Giving a sample is not so very different than prescribing a medication; it's just a question of who is dispensing it.  The user can also put in the office comments that a sample was given, if that is necessary to document somewhere.

![](../prescribing-adding-medications.assets/0ef2acb87ed91e1f62ffbdec273c2260.png)

## Custom Prescribing Alerts

MIE can program a custom prescription alert for any practice. Please contact your MIE Implementer if you wish to have a custom prescription alert specific to your practice. The alert is specific to the client that sets it up. The alert is on the prescribe page from e-meds or the encounter, refills page, and med edit page.

When prescribing meds the custom layout will check for whatever the practice wants to check, for example, a practice is checking to make sure that there are no refills on level 2 controlled substances.  If practice wants to turn this on, they would need to tell MIE Implementer what they want checked/alerted to and MIE would update the layout.

## Quick Add

Click this to add meds with detail/specifics of medications that a patient is taking to their medication history list. This is not prescribing. This is to add multiple medications at once to a patient's medication history with more detail regarding the drug than with Simple Add. Quick Add is not for prescribing medications.

![](../prescribing-adding-medications.assets/2e7edb495de9c31248b87c2c82123330.png)

**DRUG INTERACTION warning** will appear when using this option if you are entering a drug that interacts with another the patient already has entered as prescribed or an allergy the patient has entered. Warnings will also appear in the comment column of the patient's medication history.

If you enter in a free text or uncoded medication via quick add, you will also get a warning that it cannot be checked for drug/drug interactions and problems like the prescribe screen does. You can turn this off via a system setting for entire system if desired (system setting: E-Chart: Meds:Quick Add Uncoded Warning).

![](../prescribing-adding-medications.assets/15b72f5dc126b5ec53ce2deccc9749f8.png)

Quick Add opens a screen that allows you to quickly add medications for a patient into their medication history. It will allow you to add 10 meds at a time.

![](../prescribing-adding-medications.assets/842263851ee05f996ac31650dd6a6ada.png)

You can hide/show date fields and/or you can show full or quick sigs on your screen view when entering. Click the corresponding buttons on the screen view before entering meds called *Show Dates* or *Full Sigs* or *Hide Dates* or *Quick Sigs*

If you *show* dates, then you will get the date range fields to fill out for each medication you are entering. If you *hide* dates, then the date range fields will not appear to enter into.

If you *Full Sigs*, then you will get the sig field to fill out for each medication you are entering. If you *Quick Sigs*, then the sig field will not appear to enter into.

**Medication:** Type the name of the medication the patient is using. It will auto-complete your typing and give you choices. Any drug aliases will also appear next to the drug name. Use tab key to go to the other fields and free-text or use the pop-up options that appear. The medications Quick Add screen allows entry of a form even for systems that prescribe from inventory.

Click *Clear* at the far right of each line item you wish to totally clear and/or start over.

Click ***Add Meds*** box at the top or scroll to the bottom and it will add them to the patient's medication history.

Click **Submit and Add More** box at the bottom to submit/upload the list of meds you just typed in and then it will open another screen to add more.

If you are using quick add to document a medication the patient states they are taking, you may see a medication come up as REPLACED-do NOT use, or INACTIVE-can NOT prescribe.

This is a notification that the drug maker stops making the drug, which means that it isn't available under that name anymore.  This is also a heads-up to the clinician, that if the patient says they are taking that drug; there are a few possible problems to look out for:

1. The patient may not actually know what they are taking
2. The patient may be taking drugs that are past the expiration date
3. The patient's supply of this drug may not be expired, but when it runs out, it may need to be replaced with something else

![](../prescribing-adding-medications.assets/4e1ba8096e728c5b15db3cd18311f917.png)

## Simple Add

Your system may have a simple add link. Click this to add names of medications only that a patient is taking to their medication history list. This is not prescribing. This is to add multiple medications at once to a patient's medication history. Simple add does not store specifics/details/sigs, etc using this option. This is to add multiple medication names only to a patient's medication history. This is not to be used to prescribe a medication for the patient. This link is hidden by default and not recommended for use by MIE.

![](../prescribing-adding-medications.assets/70d7eee76ca1a154f35944e4d85d8566.png)

**DRUG INTERACTION/DRUG ALLERGY warnings** will **not** appear when using this option. It does, however, put the warning in red or yellow in the *Comment* column of the Medication History listing after you've added the meds to the patient's medication history. It doesn't warn you ahead of time like the prescribing modules since you are just adding/entering existing names of medications the patient has taken/is taking, not prescribing.

Simple Add is used only to enter **only names** of medications, not specifics/details such as forms/quantities/units, etc. Start typing in name of medications and it will auto-complete and give you a choice when you start typing.

![](../prescribing-adding-medications.assets/fd03530656c93de6c4afc5003fb584b9.png)

**Add Meds:** Type the name of the medication the patient is using. It will auto-complete your typing and give you choices or you can free-text. Any drug aliases will also appear next to the drug name. Use tab key to go to next field and enter another name of the drug.

There is also an **Add Common Meds** box at the bottom where you can simply check-mark a box of most common meds. Click ***Add Meds*** box at the top or scroll to the bottom and it will add them to the patient's medication history list.

If you are quick adding a medication the patient states they are taking, you may see a medication come up as REPLACED-do NOT use, or INACTIVE-can NOT prescribe.

This is a notification that the drug maker stops making the drug, which means that it isn't available under that name anymore.  This is also a heads-up to the clinician, that if the patient says they are taking that drug; there are a few possible problems to look out for:

1. The patient may not actually know what they are taking
2. The patient may be taking drugs that are past the expiration date
3. The patient's supply of this drug may not be expired, but when it runs out, it may need to be replaced with something else

To change/edit a medication record (prescription) already entered in for a patient in E-Meds, see separate help documentation named *Edit or Change Meds.pdf*

## Uncoded Meds Report

There is a report available from the Reports sidemenu tab. Found in the Medications/Allergies/Scripts bucket of reports, there is a report named *Uncoded Meds*.

![](../prescribing-adding-medications.assets/508fa62e3b6a999ec68a2b35247afcba.png)

This report can be filtered by a start date and end date to limit results. The report will result a list of uncoded prescriptions (free-typed medications a user prescribed instead of using the FDB autocomplete list of choices of coded medications available to prescribe) created within a specified date range. The practice should review this report periodically and address issues found. This report could help be more proactive at identifying and investigating these issues and working on training prescribers on the correct medications to choose.

![](../prescribing-adding-medications.assets/abfb94ad34a14a7287a5d8665b36a7af.png)
