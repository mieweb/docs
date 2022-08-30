---
id: '1CiNab4LMjdlfwFMKuO6BvVHheUHyNqoJCxDsdvuyOPk'
title: 'Injection Program Tab - Recording Mass Injections'
date: '2020-03-16T14:45:42.136Z'
version: 59
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'http://immunize.org/VIS/'
  - 'http://immunize.org'
source: 'https://drive.google.com/open?id=1CiNab4LMjdlfwFMKuO6BvVHheUHyNqoJCxDsdvuyOPk'
wikigdrive: '762e46ee0b866c028283dd665b3a8ee950fb436c'
menu:
  main:
    name: 'Injection Program Tab - Recording Mass Injections'
    identifier: '1CiNab4LMjdlfwFMKuO6BvVHheUHyNqoJCxDsdvuyOPk'
    parent: '1bLRXxR-h5NWzJsXSk2cf_6ZjxljZuiBzTcQdmlvVrDA'
    weight: 2320
---
## **Add Injection Records Using Injection Program**

If doing mass immunizations/injections, {{% system-name %}} provides a feature to document these injections from one tab instead of going into individual patient charts individually.  The mass immunization record tab also saves information in fields so you don't have to re-key it in for the next patient in line. This program is used when doing injections/immunizations in mass for various patients at a given time.  A laptop with a tablet pen can also be used with this program. The patients can electronically sign a HIPAA form or consent, or whatever is needed for your practice, for the injection and documentation using that laptop pen. By default, this program is set to a rule to look for the doc.type HIPAA in the patient's chart before allowing you to inject/document the injection.  Contact your MIE Implementer if you wish to change this rule for your practice or turn it off.
Click the E-Chart sidemenu tab.  Click the Injection Program tab. (The Injection Program tab may be located elsewhere in your system like it's own sidemenu tab). The Injection / Immunization screen will open.

![](../injection-program-tab-recording-mass-injections.assets/100002010000039B000001CA7562CFB385EB65E2.png)

The Injection screen will appear.  The Injection screen has fields to fill out pertaining to the injection / immunization that you want to record.
* Patient:  Begin typing the last name of the patient you wish to add the record for.  The system will auto-complete and show you choices of matching patients in your {{% system-name %}} system.  You can select a choice using your mouse to highlight your choice.


![](../injection-program-tab-recording-mass-injections.assets/1000020100000234000002427C84CE6E045DCE50.png)


* Pop-up Warnings:  This program points to a rule looking for the doc.type HIPAA.  When entering in a patient's name and using your tab key to advance to the next field, this injection program looks for a HIPAA doc.type already stored/uploaded in the patient's chart.  If no such document is stored in the patient's chart, it should prompt the warning to ‘sign HIPAA' form.
    * You can have this feature customized differently to pop-up a warning for specific document(s) to look for prior to injecting.  In the example below, it is set up to show a pop-up warning if the patient selected above doesn't have a stored/uploaded HIPAA document in their chart stored already.  Your {{% system-name %}} system can be customized for different pop-up warnings, but by default the rule looks for doc.type HIPAA if it exists in the patient's chart or not.
        * Example--HIPAA notice: After you select a patient, you may see this pop-up HIPAA notice stating a HIPAA needs signed by the patient and uploaded on file before you can administer the injection/document in this module.  That specific document must be signed & uploaded. If this form is not already stored in the patient's e-chart, you will see this notice pop-up. If the patient already has a signed & uploaded HIPAA form on file (in their chart), then you will not see this pop-up notice and can proceed to enter the injection data/record in the next fields.  MIE can program any rule for a document that you wish for it to prompt you for. You can have the patient sign the HIPAA form with a pen pad device, tablet pen, or print & index immediately into the patient's chart.

![](../injection-program-tab-recording-mass-injections.assets/100002010000010D0000007FDD583E7D4AB9D023.png)
![](../injection-program-tab-recording-mass-injections.assets/100002010000010700000068AAFBE3098457619B.png)

 
If you see the above pop-up notice, please click OK or SHOW HIPAA FORM and it will then open the Hipaa document form on the screen. Let the patient sign the screen, where indicated, using the electronic pen on the computer or pen pad device.  When done, you will click the UPLOAD button located at the top near the PEN button.


![](../injection-program-tab-recording-mass-injections.assets/1000020100000359000001C35F9CA12BB1AEC3FE.png)


You will then get a confirmation pop-up asking if you want to upload this form/image into the system. Click OK to confirm & upload the document into that patient's chart.


![](../injection-program-tab-recording-mass-injections.assets/100002010000019D0000007EB4575953A34D7EFE.png)


After you have uploaded the signed form, you will be refreshed back to the Injection/Immunization screen and can proceed to advance to the remaining fields for data entry on that patient.
Remaining fields:


![](../injection-program-tab-recording-mass-injections.assets/1000020100000234000002427C84CE6E045DCE50.png)


* Injection/Immunization:  This is a required field.  Type the name of the injection/immunization.  The system will attempt to auto-complete your typing & give you choices that match.  You can highlight & select if you wish. Otherwise, you can continue to free-type in text.
    * Injections that used to show as NOS (Not Otherwise Specified) are now shown as unspecified formulation as this is a change that the CDC registry put in place 10/1/2010.

![](../injection-program-tab-recording-mass-injections.assets/1000020100000192000000493C2BBDAD4D4D4090.png)

* Certain immunizations are automatically programmed to look for specific allergies or conditions.  
    * Influenza injections: When you select specific influenza injections, the system will notify you in an alert box if the patient is allergic to eggs, allergic to influenza vaccine, allergic to flu vaccine, allergic to influenza virus vaccine or if has Guillain-Barre syndrome.  These allergies must be previously documented in the patient's E-Meds allergy tab. Guillain-Barre syndrome must be previously documented in the patient's conditions tab.

    ![](../injection-program-tab-recording-mass-injections.assets/10000201000000C900000029AAEE349019098319.png)
    ![](../injection-program-tab-recording-mass-injections.assets/1000020100000140000000297A6F80B0E455277E.png)

    * Egg allergy alert: When you select other specific injections or immunizations to record, some specific injections will also look for egg allergies and give you an alert.  These injections that look for egg allergies and give a pop-up alert are: MMR, Influenza split (incl.purified surface antigen), Influenza whole, Influenza NOS, Influenza live intranasal, Rabies intramuscular injection, Rabies intradermal injection, Rabies NOS and Yellow Fever.
* Administration Date:  Automatically pops-up today's date and current time.  Change date or time to when the injection was given.
* Injection Administrator: Select the name of the person that gave the injection.  There are 3 ways to select the administrator's name. You can start typing the last name in the first blank field and click SEARCH to pull up a list of users that match and select from there.  If you want to select a physician within your practice, use the drop-down arrow in the next field and select from there (this is helpful to narrow down the search).  If you are the injection administrator yourself (not recording this for anyone else) then choose ME box here. The document will reflect your name as Injection Administrator. The name you choose/select, will then appear at the top of this field next to Injection Administrator.  Confirm and make a change if need to.
* Administering Location: If your practice only has 1 location it will automatically populate this field.  If your practice has several locations programmed into {{% system-name %}} , use the drop-down arrow to select the correct location of where the injection was administered.
* Route:  Select the route of the injection, if you wish, from the drop-down of choices.
* Site:  Select the site the injection was given from the drop-down of choices.  You can select Other and it will open a free-text field for you to type in.
* Dose:  Enter the dose of the injection.
* Strength: Enter the strength of the injection.
* Manufacturer:  Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing.  It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* Vial / Lot #:  Enter the vial and/or lot # of the serum. In the mass injections mode or the normal "add injection" screen, the Lot# field autocomplete references Vials/Lots as referenced in the Inventory module.
If not administering from Inventory, then Vial/Lot should be added as a free text entry. Any vaccines documented that are administered from Inventory will automatically deduct from Inventory totals. Quantity is reduced by one for each vaccine administered from the Inventory module.
Decrement is done in whole numbers. So in inventory you have a qty of 10 flu shots, then you document the immunization, the inventory decreases by one. It doesn't calculate that you have a 50cc multi injection vial. If the give 5cc's to Patient One and 10cc's to Patient Two, you have 35cc's left.
* Series #:  Enter the number of the series for this injection record.  Example: Patient is here for 2nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2nd shot in the Hepatitis B series.
* Expiration Date: Enter expiration from the vial.
* Comments / Reaction:  Free-text in this field any comments regarding the injection, etc.  If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record.  (See other instructions in Injection Tab-Edit-Delete.pdf).
The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions.  These are typically used for Allergy Injections, but can be used for any other injection.
* Resulting Fields: The Resulting fields are for documenting a reaction/result of the injection given.  Since you are doing just mass entry of injection given, you would document any reactions or results in the patient specific e-chart and not using this method.  See other help documentation named Injection Tab.pdf or Injection Tab-Edit-Delete.pdf).
* VIS (Vaccine Information Handouts): Your mass injections program feature can be customized to require the VIS Handout field to be filled out and documented.  It will stop you from adding the injection record if you don't have a VIS handout documented.  Or your system can allow the user to add the injection to the patient's chart without documenting a VIS Handout.
    * Many clients hand the patient a Vaccine Information Handout (VIS) when the patient receives an injection.  You can document that this handout was given to the patient by clicking the VIS Handouts link at the bottom of the injections/immunizations add/edit screen.   Better yet, you do not have to maintain a latest publication of VIS sheets yourself to hand out. We now offer the VIS Website link available while documenting an injection and VIS Handout.


![](../injection-program-tab-recording-mass-injections.assets/100002010000016600000090771D1F59A71214FF.png)


Once you click on the link VIS Handouts, it will open the VIS Handout fields for documentation.


![](../injection-program-tab-recording-mass-injections.assets/1000020100000219000000A79AAC6E371696ACDC.png)


* Name:  Using the drop-down, select the name of the VIS Handout publication.  The list that we have in the drop-down comes from [http://immunize.org/VIS/](http://immunize.org/VIS/).  Contact your MIE Implementer if you need additional VIS Handouts added to this drop-down.  
* Published: Can enter the date of the VIS Handout publication.
* Date VIS Handout(s) Given:  Will automatically default to today's date.
The VIS Website link can be set up by your MIE Implementer.  You do not have to maintain a latest publication of VIS sheets yourself to hand out manually to a patient.  We now offer the VIS Website link available while documenting an injection and VIS Handout given.


![](../injection-program-tab-recording-mass-injections.assets/1000020100000221000000E5F31C22DA3126D148.png)


When you click the VIS Website link found available in the VIS Handouts section, it will take you out to [immunize.org](http://immunize.org) where you can utilize the latest publication of VIS available, along with the VIS sheets available in a different language to print for the patient.  If your {{% system-name %}} system is set up to be multi-lingual (you use {{% system-name %}} in various countries) it will open to the language your preference is set to. Regardless, from here you can access the latest publication and print it in various languages and print it off to hand to the patient using your printer icon in your browser view.  To get out, simply click the X to get out of that separate tab/window that you are in.  Your {{% system-name %}} system will still be in the background.


![](../injection-program-tab-recording-mass-injections.assets/10000201000003FD00000229AB00B8559D13667F.png)



## **Add Multiple VIS Handouts Per Injection**

After you select your first VIS Handout from the Name drop-down, click the ADD button, then select the 2nd VIS Handout pertaining to this same injection, then click the ADD button, then SUBMIT.
You must click the ADD BUTTON to insert more than one VIS Handout to the injection.  This may be needed for example documenting an MMR injection, but you give out 3 separate VIS Handouts (a measles one, a mumps one, a rubella one) pertaining to each part of the injection serum.


![](../injection-program-tab-recording-mass-injections.assets/10000201000001540000009032B9CC9F554708F0.png)


When ready to upload the injection record into the patient's chart, click the ADD INJECTION button at the bottom of the screen to submit the injection / immunization record to the patient's chart.


![](../injection-program-tab-recording-mass-injections.assets/100002010000016E0000009B20E01B393A4D0E26.png)


It will have uploaded that injection record into that patient's chart and the screen will refresh to be back to the INJECTION PROGRAM tab and the patient field will be blank. Since you are doing injections in mass, you can easily begin typing the last name of the next patient and repeat.
The INJECTION PROGRAM tab keeps the prior patient's injection field information so you do not have to repeat typing in the same data information.  Please change applicable field data though if there is a different vial#, etc. As long as you stay in this tab program, the fields will continue to be remembered from the last previous entry.


![](../injection-program-tab-recording-mass-injections.assets/10000201000002690000012B9AF0ECC7CC5DC84D.png)


You can also have your MIE Implementer program a Print last injection record hyperlink available in this mass injections module at the top corner.  

![](../injection-program-tab-recording-mass-injections.assets/10000201000003BF000000738D19821EA86521D2.png)

After you have documented the patient's injection, before documenting the next patient in line you can click print last injection record and print out a document of the injection you just entered for that patient.  Then can hand that to the patient as their copy which is the document of the injection record you just did. Then proceed to enter in the next patient information.


![](../injection-program-tab-recording-mass-injections.assets/10000201000005030000020A5843593E38C781FE.png)


