---
id: '1CiNab4LMjdlfwFMKuO6BvVHheUHyNqoJCxDsdvuyOPk'
title: 'Injection Program Tab - Recording Mass Injections'
date: '2024-05-20T13:53:53.545Z'
version: 236
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'http://immunize.org/VIS/'
  - 'http://immunize.org'
source: 'https://drive.google.com/open?id=1CiNab4LMjdlfwFMKuO6BvVHheUHyNqoJCxDsdvuyOPk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Add Injection Records Using Injection Program

If doing mass immunizations/injections, {{% system-name %}} provides a feature to document these injections from one tab instead of going into individual patient charts individually.  The Flu Injection Program tab also saves information in fields so you don't have to re-key it in for the next patient in line. This program is used when doing injections/immunizations en masse for various patients at a given time.  A laptop and mouse, laptop and pen, or tablet can also be used with this program. The patients can electronically sign a consent, or whatever is needed for your practice, for the injection and documentation using that laptop mouse, tablet, or laptop pen. By default, this program is set to a rule to look for the doc.type FLUCONSENT in the patient's chart before allowing you to inject/document the injection.  Contact your MIE Implementer if you wish to change this rule for your practice or turn it off.

Click the E-Chart sidemenu tab.  Click the Flu Injection Program. (The Flu Injection Program tab may be located elsewhere in your system like its own sidemenu tab). The Injection / Immunization screen will open.

![](../injection-program-tab-recording-mass-injections.assets/23e8a258d6941ac3d55767f9f0722edd.png)

The Injection screen will appear.  The Injection screen has fields to fill out pertaining to the injection / immunization that you want to record.

* Patient:  Begin typing the last name of the patient you wish to add the record for.  The system will auto-complete and show you choices of matching patients in your {{% system-name %}} system.  You can select a choice using your mouse to highlight your choice.

![](../injection-program-tab-recording-mass-injections.assets/6331b169f4a137b09dd262cee92ba389.png)

* Pop-up Warnings:  This program points to a rule looking for the doc.type FLUCONSENT.  When entering in a patient's name and using your tab key to advance to the next field, this injection program looks for a Flu Consent doc.type already stored/uploaded in the patient's chart.  If no such document is stored in the patient's chart, it should prompt the warning to ‘Signed Consent required' form.
    * You can have this feature customized differently to pop-up a warning for specific document(s) to look for prior to injecting.  In the example below, it is set up to show a pop-up warning if the patient selected above doesn't have a stored/uploaded Flu Consent document in their chart stored already.  Your {{% system-name %}} system can be customized for different pop-up warnings, but by default the rule looks for doc.type FLUCONSENT if it exists in the patient's chart or not.
        * Example--Flu Consent: After you select a patient, you may see this pop-up  notice stating a Flu Consent needs signed by the patient and uploaded on file before you can administer the injection/document in this module. That specific document must be signed & uploaded. If this form is not already stored in the patient's e-chart, you will see this notice pop-up. If the patient already has a signed & uploaded Flu Consent form on file (in their chart), then you will not see this pop-up notice and can proceed to enter the injection data/record in the next fields.  MIE can program any rule for a document that you wish for it to prompt you for. You can have the patient sign the Flu Consent form with a mouse, pen pad device, tablet, or print & index immediately into the patient's chart.

![](../injection-program-tab-recording-mass-injections.assets/b5f56a67f4a58a365e932de8a6662c71.png)

If you see the above pop-up notice, please click **Show Flu Consent Form** and it will then open the Flu Consent document form in a new tab on the screen. Let the patient sign the screen, where indicated. When done, you will click the Upload button located at the top near the PEN button.

![](../injection-program-tab-recording-mass-injections.assets/25f535cc823643e18f7f04bbe6bd4522.png)

After you have uploaded the signed form, return to the Flu Program Injection tab and proceed to advance to the remaining fields for data entry on that patient.

Remaining fields:

![](../injection-program-tab-recording-mass-injections.assets/cce5edf56e64201401800909553c3790.png)

* Injection/Immunization:  This is a required field.  Type the name of the injection/immunization.  The autocomplete field will display results that BEGINS WITH and CONTAINS the name of the injection/immunization being searched and give you choices that match the CDC immunizations from the FDB database, or will give you choices of matches of medications which are in the patient's meds history as injectable.  You can highlight & select from the list of auto-complete name matches.
    * Injections that used to show as NOS (Not Otherwise Specified) are now shown as unspecified formulation as this is a change that the CDC registry put in place 10/1/2010.

![](../injection-program-tab-recording-mass-injections.assets/e40bf1cc4489da4a68166e57224fda13.png)

* Certain immunizations are automatically programmed to look for specific allergies or conditions.
    * Influenza injections: When you select specific influenza injections, the system will notify you in an alert box if the patient is allergic to eggs, allergic to influenza vaccine, allergic to flu vaccine, allergic to influenza virus vaccine or if has Guillain-Barre syndrome.  These allergies must be previously documented in the patient's E-Meds allergy tab. Guillain-Barre syndrome must be previously documented in the patient's conditions tab.

![](../injection-program-tab-recording-mass-injections.assets/46bf4230e8a07341889d3fd86ccb3335.png)

![](../injection-program-tab-recording-mass-injections.assets/6c3ac6f2cb852a8728470512945590d1.png)

* Egg allergy alert: When you select other specific injections or immunizations to record, some specific injections will also look for egg allergies and give you an alert. These injections that look for egg allergies and give a pop-up alert are: MMR, Influenza split (incl.purified surface antigen), Influenza whole, Influenza NOS, Influenza live intranasal, Rabies intramuscular injection, Rabies intradermal injection, Rabies NOS and Yellow Fever.
* Contraindications: A dropdown list of contraindications are available to be selected. When one is selected, the fields below are hidden.
* Administering Location: If your practice only has 1 location it will automatically populate this field.  If your practice has several locations programmed into {{% system-name %}} , use the drop-down arrow to select the correct location of where the injection was administered.
* Vial / Lot #:  Enter the vial and/or lot # of the serum. In the mass injections mode or the normal "add injection" screen, the Lot# field autocomplete references Vials/Lots as referenced in the Inventory module.

If not administering from Inventory, then Vial/Lot should be added as a free text entry. Any vaccines documented that are administered from Inventory will automatically deduct from Inventory totals. Quantity is reduced by one for each vaccine administered from the Inventory module.

Decrement is done in whole numbers. So in inventory you have a qty of 10 flu shots, then you document the immunization, the inventory decreases by one. It doesn't calculate that you have a 50cc multi injection vial. If the give 5cc's to Patient One and 10cc's to Patient Two, you have 35cc's left.

* Manufacturer:  Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing.  It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* NDC: Or National Drug Code pulls the 10 or 11-digit code that represents the injection.
* Expiration Date: Enter expiration from the vial.
* Administration Date:  Automatically pops-up today's date and current time.  Change date or time to when the injection was given.
* Ordering Provider: When the system setting "Use Ordered By" is enabled, this field will display. The Ordering Provider can be set by default in the user preferences "Orders Default, Ordering Provider".
* Administrator: Select the name of the person that gave the injection. Start typing the last name in the blank field to pull up a list of users that match and select from there.
* Route:  Select the route of the injection, if you wish, from the drop-down of choices.
* Site:  Select the site the injection was given from the drop-down of choices.  You can select Other and it will open a free-text field for you to type in.
* Dose:  Enter the dose of the injection.
* Strength: Enter the strength of the injection.

* Series #:  Enter the number of the series for this injection record.  Example: Patient is here for 2nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2nd shot in the Hepatitis B series.
* Reaction / Comments:  Free-text in this field any comments regarding the injection, etc.  If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record.  (See other instructions in Injection Tab-Edit-Delete.pdf).
* Next Due: You can enter a date the next inj/immunization is due if you wish (ex: if it's a series, etc). If this field isn't enabled, please contact your MIE Implementer to set a layout tag for the field to show.

The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions.  These are typically used for Allergy Injections, but can be used for any other injection.

* Resulting Fields: The Resulting fields are for documenting a reaction/result of the injection given.  Since you are doing just mass entry of injection given, you would document any reactions or results in the patient specific e-chart and not using this method.  See other help documentation named Injection Tab.pdf or Injection Tab-Edit-Delete.pdf).
* VIS (Vaccine Information Handouts): Your mass injections program feature can be customized to require the VIS Handout field to be filled out and documented.  It will stop you from adding the injection record if you don't have a VIS handout documented.  Or your system can allow the user to add the injection to the patient's chart without documenting a VIS Handout.
    * Many clients hand the patient a Vaccine Information Handout (VIS) when the patient receives an injection.  You can document that this handout was given to the patient by clicking the VIS Handouts link at the bottom of the injections/immunizations add/edit screen.   Better yet, you do not have to maintain a latest publication of VIS sheets yourself to hand out. We now offer the VIS Website link available while documenting an injection and VIS Handout.

![](../injection-program-tab-recording-mass-injections.assets/a130047a10e212fb9a889a649914401a.png)

Once you click on the link VIS Handouts, it will open the VIS Handout fields for documentation.

![](../injection-program-tab-recording-mass-injections.assets/ac3f4b77a9337ded4e30e7e29153a162.png)

* Name:  Using the autocomplete, select the name of the VIS Handout publication.  The list that we have in the autocomplete comes from http://immunize.org/VIS/.  Contact your MIE Implementer if you need additional VIS Handouts added to this drop-down.
* Date VIS Handout(s) Given:  Will automatically default to today's date.

The VIS Website link can be set up by your MIE Implementer.  You do not have to maintain a latest publication of VIS sheets yourself to hand out manually to a patient.  We now offer the VIS Website link available while documenting an injection and VIS Handout given.

![](../injection-program-tab-recording-mass-injections.assets/b213c32930915905d2d9f25bd1933c2c.png)

When you click the VIS Website link found available in the VIS Handouts section, it will take you out to [immunize.org](http://immunize.org) where you can utilize the latest publication of VIS available, along with the VIS sheets available in a different language to print for the patient.  If your {{% system-name %}} system is set up to be multi-lingual (you use {{% system-name %}} in various countries) it will open to the language your preference is set to. Regardless, from here you can access the latest publication and print it in various languages and print it off to hand to the patient using your printer icon in your browser view.  To get out, simply click the X to get out of that separate tab/window that you are in.  Your {{% system-name %}} system will still be in the background.

![](../injection-program-tab-recording-mass-injections.assets/19ac74bc798e9e7fe6fe8ece26aa6705.png)

## Add Multiple VIS Handouts Per Injection

After you select your first VIS Handout from the Name drop-down, click the ADD button, then select the 2nd VIS Handout pertaining to this same injection, then click the ADD button, then SUBMIT.

You must click the ADD BUTTON to insert more than one VIS Handout to the injection.  This may be needed for example documenting an MMR injection, but you give out 3 separate VIS Handouts (a measles one, a mumps one, a rubella one) pertaining to each part of the injection serum.

![](../injection-program-tab-recording-mass-injections.assets/ac3f4b77a9337ded4e30e7e29153a162.png)

When ready to upload the injection record into the patient's chart, click the **A****dd**** I****njection** button at the bottom of the screen to submit the injection / immunization record to the patient's chart.

![](../injection-program-tab-recording-mass-injections.assets/c306203e82e0bf2ee318a399823fa827.png)

It will have uploaded that injection record into that patient's chart and the screen will refresh to be back to the Flu Injection Program tab and the patient field will be blank. Since you are doing injections in mass, you can easily begin typing the last name of the next patient and repeat.

The Flu Injection Program tab keeps the prior patient's injection field information so you do not have to repeat typing in the same data information. Please change applicable field data though if there is a different vial#, etc. As long as you stay in this tab program, the fields will continue to be remembered from the last previous entry.

![](../injection-program-tab-recording-mass-injections.assets/d94e3722e73fec54802d1518d769a56f.png)
