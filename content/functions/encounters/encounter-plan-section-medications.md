---
id: '1sfvHUjlAN4xI1sXyPetceFUAPHYB9uko2GBdkKMys0A'
title: 'Encounter Plan Section - Medications'
date: '2024-05-17T15:56:11.997Z'
version: 135
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1sfvHUjlAN4xI1sXyPetceFUAPHYB9uko2GBdkKMys0A'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
**Toward the bottom of an Encounter Exam is a section called Plan.**

This is the ‘plan' that the physician is recommending/ordering for the patient as a result of the examination. There are two different ‘looks' to the plan area that you may have.

![](../encounter-plan-section-medications.assets/abb37ea646c9d4a9ebd48ff5f5413b01.png)

![](../encounter-plan-section-medications.assets/019d8f4c1c4e31605e72dbbfa3aa5333.png)

## Meds

The first section of the ‘plan' area is the Meds field. You can prescribe/start the patient on a new medication here, you can increase or decrease a current medication the patient is on here, you can discontinue a medication the patient is currently on here and you can refill medications the patient is on from here.

### Prescribe New Medication

To prescribe a new medication for the patient in the encounter, simply type in the correct name of the medication you wish to prescribe for the patient. The system will give you auto-complete choices of active coded medications from the First DataBank database. *Obsolete drugs and forms/strengths will now be shown when prescribing, up to 3 years (according to First Databank's recommendation) after they are no longer being actively produced and marketed in the US. These drugs will appear in the autocomplete results with "OBSOLETE" because it is possible that the drug is no longer available.* You can free-type in a medication name, but you will be alerted that you are entering and uncoded medication and it cannot be checked for drug/drug interaction and other potential problems.

![](../encounter-plan-section-medications.assets/d92782877094b5e2ecacec490a7199ab.png)

When the name of the medication has been entered, use the **tab** key on the keyboard and it open additional fields to enter the form, sig, duration, quantity, # of refills, etc. for this medication you are prescribing for the patient. Your cursor will advance to each field as you hit the *tab* key on your keyboard.

Once you've selected the medication to prescribe for the patient, use the tab key to open up the medication fields to fill out for the prescription. Under the **med** name you select to prescribe is an icon. This is the drug info icon. If you click the (*i)* it will open the drug guide for this specific drug.

![](../encounter-plan-section-medications.assets/f2029c4f26713f2b429f3b4a8d19dbca.png)

**Form:** the form of the medication (tablet, liquid, etc) and strength. Auto-complete or ↓down arrow key to see choices.

**f:** If the ‘F' icon displays, this is access to the Medicare Part D formulary. If the patient has a Medicare Part D Drug Plan stored in their e-meds tab, the formularies for medications being prescribed is available here too.

**Dose:** the ‘dose' button to open up a *dose calculator* window is available if the system setting is on to show this button.

![](../encounter-plan-section-medications.assets/59876eadb867c7b679334bd232180223.png)

* <strong>C / S:</strong> If the C and S checkboxes appear, you've entered in an uncoded medication. Usually you will see the pop-up also that states the system cannot determine and you need to choose the compound or supply flag to indicate that this is not a controlled substance. In order to electronically send, you must specify C or S to indicate if it's a compound or a supply. A compound is multiple drugs, possibly mixed together by the pharmacist. It doesn't mean that for marketed compound drugs like ex: Caduet that you have to check this box. This is for uncoded things only. A supply is a non-drug, like syringes or crutches that some staff write prescriptions for.

![](../encounter-plan-section-medications.assets/8cff1768cbf7d3085ad56613d3068f0d.png)

![](../encounter-plan-section-medications.assets/dffda9121afca8433a6c2243df504b19.png)

* <strong>Sig:</strong> Enter the directions for the patient regarding this medication. The sig should always include <strong>dose, route and frequency.</strong>
* <strong>Dur:</strong> Enter the duration for the medication.
* <strong>Qty:</strong> The total quantity will calculate automatically according to the Duration field and Sig that is understood in the system. Otherwise you can free-type a quantity. If the user manually changes the quantity, then the automatic calculating behavior is turned off for that quantity. Total Quantities should not be overly vague to send to pharmacies. For example, Azelex Cream 20%, "Apply to affected area daily", for 30 days, with a quantity like "1 tube".  That cream may be available in a 30g tube and also a 50g tube, so the pharmacist doesn't know which one to give, without calling back to the prescriber's office, or trying to figure it out by asking the patient… "So, how big IS the affected area?  Are you dabbing this on a mole, or slathering it over your whole leg?"  For things like tablets and capsules, it's not as big of a problem, as the prescriber tends to give an exact number here.
* <strong>Unit of Measure:</strong> It will automatically show the unit according to the form selected, but if not, you must select something in the drop-down list. This is a required field.

{{% tip %}}
Available package sizes are now visible to our prescribers.  This comes from the NDC data. The "Pkg" button, when prescribing or refilling a medication, gives prescribers a view of what sized packages are actually available, allowing for better prescriptions to be written.
{{% /tip %}}

![](../encounter-plan-section-medications.assets/e1471bca6909412514e6b215dd2abbe2.png)

When the yellow triangle with exclamation point ( ! ) appears, that means {{% system-name %}} couldn't figure out a quantity to dispense based on what was entered.  If the user clicks the Pkg button at that point, we show the package sizes provided by the First Databank database that the user should select from – so it's specified to the pharmacist and not vague.

Click on the selection and it will set the *Total Quantity* value and unit.

Area's/modules where this feature will appear: Prescribe (E-Meds) chart tab, Refill, Refill All and Encounter Plan meds section.

![](../encounter-plan-section-medications.assets/42bf83640e9b435382794c9fe03c0ea7.png)

* <strong>Ref:</strong> Enter in the number of refills allowed for this prescription.
* <strong>Sub:</strong> Check-mark this box if the pharmacy is allowed to dispense a generic or a substitution for this medication.
* <strong>Indication:</strong> Using the tab key to advance to this field will show you a drop-down of choices of indications that this medication is usually prescribed for. You can select and enter the reason (indication) for this medication prescription. IE: the diagnosis, or why this was prescribed. Under the Indication field is a [ + ] button. Click this to add another indication reason for this prescription if you wish. Enter in a second indication for the prescription. You can click the [ + ] to enter in yet another indication if you wish. Start and End date fields are also available. If you wish these to be turned on for field entry on your system, contact your MIE Implementer.

![](../encounter-plan-section-medications.assets/21371439a1fb5ebfaea152e2298d2115.png)

* <strong>Prescriber:</strong> The prescriber will automatically default to the performing physician's name that is set on the encounter, however you can change it by using the drop-down.

![](../encounter-plan-section-medications.assets/6108823ec8c6128fc928f53e3d6a3913.png)

* <strong>Note to Pharmacist:</strong> You can type a note to the pharmacist regarding this prescription and it will show on the prescription when printed/faxed/transmitted. This Notes field should only include information to the pharmacist that does not already have structured fields designated for such information, so long as it does not conflict with information sent in other structured fields. Inappropriate use of this Notes field includes information that already has a structured and codified field within the e-prescription message. The most concerning inappropriate use of this field is for patient directions, either supplemental or conflicting. This can lead to critical information not being conveyed to the patient.
    * Instructions should not be split between the Sig and Notes fields. The Notes field should be reserved for information to assist the pharmacist in dispensing, benefits determination and other pharmacy staff activities.
    * Populating multiple fields with patient instructions may result in some instructions being missed and not conveyed to the patient.
    * Inconsistent patient information between the Sig and Notes can result in the patient being provided the wrong instructions.
    * Examples of Improper Use
        * Sig field-"Take one tablet daily," Notes field-"Take only on Monday, Wednesday and Friday."
        * Sig field-"Dissolve one tablet under the tongue every 10 minutes for chest pain," Notes field-"Call physician immediately if relief is not obtained after three doses."
        * Sig field-"Apply and rub well into affected area twice a day," Notes field-"Discontinue use and call physician if rash worsens."
        * Sig field-"One drop to eye having surgery three times daily," Notes field-"Start two days prior to surgery."

{{% note %}}
The Note to Pharmacist field **should not** contain patient instructions on medication use.** Patient instructions should be contained entirely within the Sig field.**
{{% /note %}}

* <strong>Office Comments:</strong> Your MIE Implementer can program an attribute tag on the layout for this field to be present for your system while prescribing within encounters. Attribute ‘meds_comment' and can also be on the refill all.
* <strong>Start/End dates:</strong> it is possible to specify start & end dates on changes & refills. An end-date can be set for discontinue med orders also. This is not the default, and must be specifically enabled on each system via the layout.

![](../encounter-plan-section-medications.assets/b8b2aed8406a2cd9c93f7734fb20070d.png)

* <strong>Print Drug Guide:</strong> Checkmark this if you with to have the drug guide for this medication to go into the print queue to print for the patient.
* <strong>Remember As:</strong> This means you the user can type something in there (example: BOB or Heart Disease). This remembers this specific prescription/form (not free-text form though)/sig/duration/refills and quantity and saves it in the prescriber's medication library.
    * Update Button: If you used/prescribed a ‘remembered script' and change any prescription detail fields you can click the UPDATE button for the remembered script, it will ‘update' that remembered script with everything you entered in currently then. It ‘updates' the remembered script and changes that remembered script to have the details you just entered in/changed to.

![](../encounter-plan-section-medications.assets/a29d54556270fea58699339b94c68a3d.png)

* <strong>Manufacturer/Lot#/Expiration Date:</strong> The system setting <em>E-Chart/Meds/Encounter plan collect dispense details</em> needs to be turned on for these fields to show. This allows extra info to be set when dispensing meds from encounter. The mfr, lot#, expiration date can now be set when dispensing meds directly from the encounter.  If need be, they can also be edited from the encounter.

![](../encounter-plan-section-medications.assets/e653e27461422dcc32bfa42ca3232474.png)

* <strong>Add:</strong> Click the ADD button to add this medication prescription to the encounter plan area. If you made an error or needed to change something, you can still edit it after you click the ADD button. After clicking the ADD button, you're medication you entered shows at the top in bold in the med plan section.

Users will be warned before they are allowed to submit an encounter layout if the user has written an ‘invalid' script. Each field required by our code contains an alert if data has not been entered for the script.

You can then enter another medication you wish to prescribe in the medication field below the one you just added. Follow the same steps above to enter the form, sig, duration, quantity, etc for the next medication.

![](../encounter-plan-section-medications.assets/6b00d8c8b6bca3d64dee3569e5a18eb3.png)

It will show the medications you prescribed in bold and with the word **Start** prior to the medication/prescription you entered. This means it is a new medication for the patient to start taking and was started/prescribed on this encounter exam date.

All medications/prescriptions entered here in the encounter exam will automatically be placed in the E-Meds module. The medications/prescriptions entered here will now become part of the patient's record.

When done working in the entire encounter and you've saved the encounter (Save and View) or submitted or archived the encounter, you will view your formatted encounter exam and when you scroll down to the bottom of the screen, you will see the section **This patient has unprinted prescriptions.** This displays the medications/prescriptions you just entered in the Meds field of the Plan in the encounter exam. You can quickly print the prescriptions from here for the patient to take, or fax directly to the pharmacy along with printing any drug guides you checked to print.

![](../encounter-plan-section-medications.assets/3d1cdb91080dd8e5965e2293b778859e.png)

### Edit a Medication

You can edit a med you prescribed/entered in the medication plan area of the encounter. Simply click the edit button next to the medication you added to the encounter.

![](../encounter-plan-section-medications.assets/6b00d8c8b6bca3d64dee3569e5a18eb3.png)

The medication fields will open with the entries you have entered. You can change any field. Click the OK button when done.

![](../encounter-plan-section-medications.assets/1f9a2422a0248fb95673ce818b548f98.png)

### Delete a Medication

If you made a mistake or entered the wrong medication, simply click the minus sign [ - ] at the left of the medication you entered and added in the encounter plan area. The [ - ] button is to only be used if there was an error. It's not to be used to discontinue a medication.

![](../encounter-plan-section-medications.assets/6b00d8c8b6bca3d64dee3569e5a18eb3.png)

### Refilling Individual Active Medications

If the patient is currently on a medication (active medication) and your plan is to refill it for the patient, do not enter the medication by typing in the name of the medication – you do not want to prescribe it again.

Instead, simply type in the Meds field the letters **REF** and the **space key** **or** the word **REFILL** and the **space key** and it will then pop-up choices of the current medications that the patient is on that have been entered into their health record to refill it.

**REF stands for *Refill*.** It doesn't matter if you type REF (or REFILL) in all caps, or REF (or REFILL) in all lowercase. Just type REF (or REFILL) and enter a space on your keyboard and it will pop-up the list of current medications the patient is on if they have been entered in the patients record. **Make sure you use the space key after the word *Inc***

**REF stands for *refill.***

![](../encounter-plan-section-medications.assets/eb8dd63aeb9b862ceb08941a2fb865a8.png)

![](../encounter-plan-section-medications.assets/5a10235d76c2bae7937245d3f2378b94.png)

![](../encounter-plan-section-medications.assets/0a8ea224d469a4d262132ea635d0deba.png)

To select the medication to refill, use your up/down arrow keys on the keyboard to highlight and click on the one from the drop-down list, then hit your tab key. Or scroll with your mouse and click the mouse on the medication you want to refill from the drop-down list.

Click the *tab* key on the keyboard to place this refill in the Meds Plan and to advance to the prescription fields of the refill. The refilled medication will display on the Meds Plan with the prefix of *refill* so you know this is the plan to refill a current medication.

The duration, quantity, refills, etc fields of the refilled medication will automatically populate with the current dispensed information that the patient is taking. You can edit or change if needed.

![](../encounter-plan-section-medications.assets/c77ae42d2e330333f02cec8d606ca3f8.png)

Click the ADD button when done entering the refill and editing any fields needed.

### Refilling Multiple Active Medications

If the patient is currently on medications (active medications) and your plan is to refill multiple meds for the patient, you can quickly click the REFILL button and be shown a screen listing all the patient's active medications. Your system must be on July 2012 RC and have this tag to show this button on your encounters layout.

![](../encounter-plan-section-medications.assets/96df9bf0b21e3f84116cf0d52683046d.png)

Clicking the REFILL button displays a screen listing all the patient's active medications and a column listing the medication's prescriber if the prescriber is known. Here you can click REFILL ALL button to refill all of them and set duration, # of refills, etc or you can individually pick and choose a few to refill in mass by clicking the REFILL button next to the specific medications and then filling out the field details on each.

![](../encounter-plan-section-medications.assets/96f7d01618053befc03e92c94317e184.png)

You can click CANCEL button if you selected one to refill but then needed to cancel that.

![](../encounter-plan-section-medications.assets/68e4750844b198d1d7a00fcfd1c82f4d.png)

Once you are done setting the refills in mass, click the SAVE button on this screen.

The meds you refilled using this functionality will then appear in the listing of the Meds plan area of the encounter.

![](../encounter-plan-section-medications.assets/5fe9f4c39cfa5a339298c85330406e72.png)

### Continue a Current Medication

If the patient is currently on a medication and your plan is to continue it for the patient and not change anything regarding the medication, simply type in the Meds field the letters (abbreviations) **con** followed by the **space key** and it will then pop-up choices of the current medications that the patient is on that have been entered into their health record.

![](../encounter-plan-section-medications.assets/0cebda5883e4eebfb5f548a1ae5e536d.png)

The medication to continue for part of your plan will display on the Meds Plan with the prefix of *Continue* so you know this is the plan to continue a current medication.

![](../encounter-plan-section-medications.assets/7123de008c3f8c7a276f21e53265b2b1.png)

Since you are continuing the same medication the patient is already on, simply click the ADD button.

### Discontinue a Current Medication

If the patient is currently on a medication and your plan is to discontinue it for the patient, do not delete the medication from the presenting medications section at the very beginning of the exam. Instead, simply type in the Meds field the letters (abbreviations) **d/c or dis or dc or discontinue** (depends how your system is set up) followed by the **space key** and it will then pop-up choices of the current medications that the patient is on that have been entered into their health record.

It doesn't matter if you type D/C in all caps, or in all lowercase. Just type D/C and enter a space on your keyboard and it will pop-up the list of current medications the patient is on if they have been entered in the patients record. **Make sure you use the space key after the word *Inc***

**D/C stands for *discontinue.***

![](../encounter-plan-section-medications.assets/ad3f5699c87975acfde1422ade615113.png)

To select the medication to discontinue, use your up/down arrow keys on the keyboard to highlight and click on the one from the drop-down list, then hit your tab key. Or scroll with your mouse and click the mouse on the medication you want to discontinue from the drop-down list.

Click the *tab* key on the keyboard to place this discontinue in the Meds Plan and to advance to the reason for the discontinuation. The discontinued medication will display on the Meds Plan with the prefix of *Discontinue* so you know this is the plan to discontinue a current medication.

Enter a reason for discontinuing the medication the patient is currently on.

![](../encounter-plan-section-medications.assets/aac8387cbe4caba07346bc55fda9f274.png)

Click the ADD button when done typing in the reason for discontinuing the medication.

### Increase or Decrease a Current Medication

If the patient is currently on a medication and your plan is to increase it for the patient, simply type in the Meds field the letters **INC** and the **space key** or the word **INCREASE** and the **space key** and it will then pop-up choices of the current medications that the patient is on that have been entered into their health record.

It doesn't matter if you type INC (or INCREASE) in all caps, or INC (or INCREASE) in all lowercase. Just type INC (or INCREASE) and enter a space on your keyboard and it will pop-up the list of current medications the patient is on if they have been entered in the patients record. **Make sure you use the space key after the word *Inc***

**INC stands for *Increase.***

![](../encounter-plan-section-medications.assets/77ec1e8d9bb3384c7bf3f7c14627c61f.png)

![](../encounter-plan-section-medications.assets/5a10235d76c2bae7937245d3f2378b94.png)

If the patient is currently on a medication and your plan is to decrease it for the patient, simply type in the Meds field the letters **DEC** and the **space key** or the word **DECREASE** and the **space key** and it will then pop-up choices of the current medications that the patient is on that have been entered into their health record.

It doesn't matter if you type DEC (or DECREASE) in all caps, or DEC (or DECREASE) in all lowercase. Just type DEC (or DECREASE) and enter a space on your keyboard and it will pop-up the list of current medications the patient is on if they have been entered in the patients record. **Make sure you use the space key after the word *Dec***

**DEC stands for *Decrease.***

![](../encounter-plan-section-medications.assets/e923c2f076cdc0dea5dc17949ea14985.png)

![](../encounter-plan-section-medications.assets/5a10235d76c2bae7937245d3f2378b94.png)

To select the medication to increase or decrease, use your up/down arrow keys on the keyboard to highlight and click on the one from the drop-down list, then hit your tab key. Or scroll with your mouse and click the mouse on the medication you want to increase or decrease from the drop-down list.

Click the *tab* key on the keyboard to place this increase or decrease in the Meds Plan and to advance to the prescription fields of the medication. The increased or decreased medication will display on the Meds Plan with the prefix of *Increase* or *Decrease* so you know this is the plan to increase or decrease a current medication. The duration, quantity, refills, etc fields of the medication will automatically populate with the current dispensed information that the patient is taking. Change the fields to reflect your increase or decrease of the medication.

Click the ADD button once done increasing or decreasing the med and changing any of the fields.

### No Change in Medications/Continue Same Medical Rx

This check-box is a quick way to signify that your plan for the patient is to not change any medications of any sort. Your plan is to continue the same medical rx and note no medication changes. Check-mark this box if you will *not* start, discontinue, increase or decrease medications the patient is on.

![](../encounter-plan-section-medications.assets/c2b26195ca37a9126e376be2d6e8798c.png)

The wording *No Medication Changes* will appear in the final formatted encounter exam in the Meds Plan section.

![](../encounter-plan-section-medications.assets/ef4024c5a84f6a2598f4f57bebd1e59c.png)

If you leave the Meds section of the plan blank and also don't check-mark the *no medication changes* box, it will not place any text or anything in the final formatted encounter exam. That is why the check-box for *no medication changes* is there. This is a way of indicating that you acknowledge the medications the patient is on and plan not to change those.

![](../encounter-plan-section-medications.assets/9aaf8f1b0481da7df489be365298bd0f.png)

### Save Template/Show Templates

The Save Template link is right above the Meds field in the Plan section. You can ‘save the template' of this plan area (meds, labs, xray, order items, misc. etc) and can use it as a short cut for future patient treatments.  So if your treatment plan is always the same for example: Sinusitis, and a patient comes in with Sinusitis, you can click the Show Templates link and then select and load that plan you had saved for Sinusitis. Then all the plan fields will complete for you.

![](../encounter-plan-section-medications.assets/d977ab98d073b1c73bca68de9dc82c35.png)

### Custom Prescribing Alerts

MIE can program a custom prescription alert for any practice. Please contact your MIE Implementer if you wish to have a custom prescription alert specific to your practice. The alert is specific to the client that sets it up. The alert is on the prescribe page from e-meds or the encounter, refills page, and med edit page.

When prescribing meds the custom layout will check for whatever the practice wants to check, for example, a practice is checking to make sure that there are no refills on level 2 controlled substances.  If practice wants to turn this on, they would need to tell MIE Implementer what they want checked/alerted to and MIE would update the layout.

![](../encounter-plan-section-medications.assets/d696b99a916d98ed5e998e1341f3256d.png)
