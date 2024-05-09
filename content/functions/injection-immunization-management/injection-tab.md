---
id: '1O4s5YPHkNa_EGcmZ9rlsWai2yIrqQnQrEnQHLnTigTk'
title: 'Injection Tab'
date: '2024-05-09T17:38:26.485Z'
version: 216
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'http://immunize.org/VIS/'
  - 'http://immunize.org'
source: 'https://drive.google.com/open?id=1O4s5YPHkNa_EGcmZ9rlsWai2yIrqQnQrEnQHLnTigTk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## View Injections/Immunizations

Click E-Chart from left sidebar tab.

Search and open a patient's chart.

Click Medical Record and then MAR/Injections chart tab.

The MAR/Injections screen will open.  It will have categories: Medical Administration, Immunizations, Titer Results, Injection Documents, Vials and Contraindicated Immunizations.

In these categories will be listed (if any) records of immunizations, oral immunizations or other injections that have been entered and are active for the specific patient.  This is called the Injection/Immunization List. It will list Titer Results for any applicable titer. It also lists any Vials (used for Allergy Injection Vials) entered for the patient.

![](../injection-tab.assets/c8a6e5f8422bf2abe624b6cdea91b369.png)

To view any deleted medication administration, deleted immunizations or deleted vials for the specific patient, then click [ Show Deleted ] link and it will then show the active and deleted records for each category.

![](../injection-tab.assets/4debf7bbefc542ba76774494e7adf263.png)

It will then show and list the deleted for all categories.  A deleted injection/immunization will have the word deleted under it in the name column.

![](../injection-tab.assets/e6d58f13fad741a6fd879afa29303523.png)

Click [ Hide Deleted ] there to show/view only the active injections and immunizations records for the patient.  This hides the deleted immunizations/injections from the list.

## Add Injection/Immunization to Chart

From the injections tab, click Add Inj/Imm at the top right of the injection screen.

![](../injection-tab.assets/3ffa05c9dc4eea316125dfb6f18d08f5.png)

The Injection screen will appear.  The Injection screen has fields to fill out pertaining to the injection / immunization that you want to record.

![](../injection-tab.assets/9acd14578f75fefe5e56554706e30414.png)

* Injection/Immunization:  This is a required field.  Type the name of the injection/immunization.  The autocomplete field will display results that BEGINS WITH and CONTAINS the name of the injection/immunization being searched and give you choices that match the CDC immunizations from the FDB database, or will give you choices of matches of medications which are in the patient's meds history as injectable.  You can highlight & select from the list of auto-complete name matches.

{{% note %}}
You can only free-type in an injection name if your system has a setting turned on to allow free-type (system setting named: Allow Free Type in Autocomplete). If that is not enabled for your system, then you must choose an injection name from the auto-complete choice list.
{{% /note %}}

![](../injection-tab.assets/85f946fc55b1fdef7b37b3ad6f8feccc.png)

Certain immunizations are automatically programmed to look for specific allergies or conditions.

* Influenza injections: When you select any of the influenza injections, the system will notify you in an alert box if the patient is allergic to eggs, allergic to influenza vaccine, allergic to flu vaccine, allergic to influenza virus vaccine or if has Gullian-Barre syndrome.  These allergies must be previously documented in the patient's E-Meds allergy tab. Guillian-Barre syndrome must be previously documented in the patient's conditions tab.

![](../injection-tab.assets/46bf4230e8a07341889d3fd86ccb3335.png)

![](../injection-tab.assets/6c3ac6f2cb852a8728470512945590d1.png)

* Egg allergy alert:  When you select other specific injections or immunizations to record, some specific injections will also look for egg allergies and give you an alert.  These injections that look for egg allergies and give a pop-up alert are: MMR, Influenza split (incl.purified surface antigen), Influenza whole, Influenza NOS, Influenza live intranasal, Rabies intramuscular injection, Rabies intradermal injection, Rabies NOS and Yellow Fever.
* Contraindications: This is an optional field that is off by default.  If you wish to have it turned on, you will see a contraindications field you can select from and the rest of the fields minimize for documenting.

![](../injection-tab.assets/ef10bd3b8c37e6492d2ce19253a73e5c.png)

* Administering Location: If your practice only has 1 location it will automatically populate this field.  If your practice has several locations programmed into {{% system-name %}} , use the drop-down arrow to select the correct location of where the injection was administered.  If you have a location selected here, it considers this injection an in-house injection.  Meaning, the injection was administered at your location.  If a location is selected here, you will be required then to fill out the Manufacturer and Expiration Date fields.  These are required fields if a location is specified.
    * If the injection was given elsewhere and you are just documenting the injection for records, select No Location and it will not make those other fields required to fill out.
* Vial / Lot #:  Enter the vial and/or lot # of the serum. The Lot# field autocomplete references Vials/Lots as referenced in the Inventory module. If not administering from Inventory, then Vial/Lot should be added as a free text entry.
    * Any vaccines documented that are administered from Inventory will automatically deduct from Inventory totals. Quantity is reduced by one for each vaccine administered from the Inventory module.
    * Decrement is done in whole numbers. So in inventory you have a qty of 10 flu shots, then you document the immunization, the inventory decreases by one. It doesn't calculate that you have a 50cc multi injection vial. If the give 5cc's to Patient One and 10cc's to Patient Two, you have 35cc's left.
* Manufacturer:  Enter the manufacturer's name.  The system will attempt to auto-complete your typing.  It will give you choices that match and you can highlight and select if you wish.  Otherwise, you can continue to free-type in text. This is a required field if you have chosen a location.  If you leave the location field set to No Location, this will not be required.
* Expiration Date: Enter expiration from the vial. This is a required field if you have chosen a location.  If you leave the location field set to No Location, this field will not be required.  A warning will display and not allow entry of immunizations with an expiration date in the past.

![](../injection-tab.assets/80d05e36724b25381394af8784369ec0.png)

* Administering Date:  Automatically pops-up today's date and current time.  Change date or time to when the injection was given.
* Ordering Provider: If system setting <em>Use Ordered By</em> is enabled for your system, you can capture an Ordering Provider by using the autocomplete field.  Also, if the logged in user has their My Settings preference for <em>Ordering Physician</em> set, it will default that ordering providers name into this field.  NOTE: When working in an encounter, any injection administered within an encounter will populate Ordering Provider as the name of the provider on the encounter, but can be changed here.
* Administrator: This field will default to be your logged in username here as administrator. Otherwise, you can select the name of the person that gave the injection by typing in the first or last name in the auto-complete of the other administrator.  The document will reflect the name as Injection Administrator from this field.
* Route:  Select the route of the injection, if you wish, from the drop-down of choices.
* Site:  Select the site the injection was given from the drop-down of choices.  You can select Other and it will open a free-text field for you to type in. Your MIE Implementer can change a system setting to show all or a limited choice of sites to list.
* Dose:  Enter the dose of the injection.  The unit of measure drop-down can be set to a different default than cc for the entire {{% system-name %}} system via a system setting Default Unit of Measure.
* Strength: Enter the strength of the injection.
* Series #:  Enter the number of the series for this injection record.  Example: Patient is here for 2nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2nd shot in the Hepatitis B series.

* Reaction/Comments:  Free-text in this field any comments regarding the injection, etc.  If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record.  (See other instructions in Editing an Injection Record).

The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions.  These are typically used for Allergy Injections, but can be used for any other injection.

* VFC Status:  If you have had MIE set up an interface with CHIRP (Children and Hoosiers Immunization Registry Program in Indiana) and this system setting is on, you may see the VFC status drop-down selection field.  You would choose the correct eligibility status of the patient for the Vaccines For Children (VFC) program.  Then when the injection is submitted, this VFC status field data along with the submitted injection goes through an interface to CHIRP.  (see additional help documentation named Injection Tab with CHIRP Interface.pdf)
* Funding Source: If you have had MIE set up an interface for immunizations, you would select the source of funding, for this injection record, for submission under the Vaccines For Children (VFC) program.

![](../injection-tab.assets/9571310e22688e76c9689041e62179e9.png)

* Next Due: You can enter a date the next inj/immunization is due if you wish (ex: if it's a series, etc). If this field isn't enabled, please contact your MIE Implementer to set a layout tag for the field to show.

### Resulting

Injections entry screens and display lists (ex: print definition sections for injections) can show/display 'Reaction Induration', 'Reaction Erythema', and 'Resulting Datetime' fields. If wish this customization, please contact your MIE Implementer. The injection fields: Reaction Induration, Erythema, Resulting date, and Resulting provider are removed when adding or editing an injection record. The preferred way to document these is to add observations from a flowsheet (ex: for TB skin test results data documentation).  To re-enable these fields on add/edit of an injection record system wide, this system setting must be enabled (value 1).

![](../injection-tab.assets/90524ecb17f8c7f7adb781d9359ddbe6.png)

If enabled, these fields will display for data entry on an injection record:

* Resulting Service Provider: Can select, by autocomplete, the physician the resulting service is monitored by. This autocomplete of choices shows only users in the Physician Department of {{% system-name %}} .  It does not allow free-text.

![](../injection-tab.assets/217570f29780a737ef9b2705cf125e70.png)

* Resulting Service Date: Can enter the date this result was read (example: The date a TB test was read).
* Reaction Induration: Enter the induration reaction in mm.  If zero, you can click the [0] quick button.
* Reaction Erythema: Enter the erythema reaction in mm.  If zero, you can click the [0] quick button.
* Peak Flow: Enter the peak flow in L/Min

{{% system-name %}} has the ability to have overdue injections pop up from One-Click Checkin when in the Scheduler.

A system setting has to be manually created by MIE to enable this for a client.  System setting is Scheduler One-Click Checkin Overdue Injections Alert.

If you need to document you gave the patient a VIS (Vaccine Information Handout), please see next page for instructions, otherwise click the Submit button at the bottom of the screen to submit the injection / immunization record to the patient's chart. It will now refresh back to the Injection List for the patient and you will see the complete injection records for the patient in their specific category.

It also gives a confirmation towards the top that says Successfully added injection record.

### Required Fields

There are system settings where MIE can configure additional fields in the add injection screen to be required.  If you want more fields than the above standard/default fields that are marked required, the system setting just needs set to include the additional fields to be required for all users when documenting injections.  The value must have { } around it and each field specified out encompassed in quotes. Contact your MIE Implementer to have additional fields marked as required for injection adds.

![](../injection-tab.assets/93f73765cd3d406e2176ab0d122fb578.png)

Any extra fields that are not already required can be programmed to the system setting "Additional Warning Fields" along with their own warning message/text via a system setting "Additional Warning Message". The behavior is that the primary required fields are checked first and then the additional ones (in system setting above). A confirm box will popup if any of the additional ones are missing. The injections may still be submitted with these additional required fields missing if the user clicks 'ok' in the confirm box.

![](../injection-tab.assets/0573f3725ec1ef44ac6831dfbad29235.png)

## Vaccine Information Statement (VIS) Handouts

Many clients hand the patient a Vaccine Information Handout (VIS) when the patient receives an injection.  You can document that this handout was given to the patient by clicking the VIS Handouts link at the bottom of the injections/immunizations add/edit screen. Better yet, you do not have to maintain a latest publication of VIS sheets yourself to hand out.  We now offer the VIS Website link available while documenting an injection and VIS Handout.

![](../injection-tab.assets/ceaa0422cda986a52cf10998c5fc012e.png)

Once you click on the link VIS Handouts hyperlink, it will expand open the VIS Handout fields for documentation.

![](../injection-tab.assets/fc422791691f5fce3f08517890cf8882.png)

* Name:  Using the drop-down, select the name of the VIS Handout publication.  The list that we have in the drop-down comes from http://immunize.org/VIS/  Contact your MIE Implementer if you need additional VIS Handouts added to this drop-down.
* Date VIS Handout(s) Given:  Will automatically default to today's date but can be changed to the date it was given.

The VIS Website link can be set up by your MIE Implementer.  You do not have to maintain a latest publication of VIS sheets yourself to hand out manually to a patient.  We now offer the VIS Website link available while documenting an injection and VIS Handout given.

![](../injection-tab.assets/1c160bd441ff54acf3ad9d43bcdfbcaf.png)

When you click the VIS Website link found available in the VIS Handouts section, it will take you out to [immunize.org](http://immunize.org) where you can utilize the latest publication of VIS available, along with the VIS sheets available in a different language to print for the patient.  If your {{% system-name %}} system is set up to be multilingual (you use {{% system-name %}} in various countries) it will open to the language your preference is set to. Regardless, from here you can access the latest publication and print it in various languages and print it off to hand to the patient using your printer icon in your browser view.  To get out, simply click the X to get out of that separate tab/window that you are in.  Your {{% system-name %}} system will still be in the background.

![](../injection-tab.assets/19ac74bc798e9e7fe6fe8ece26aa6705.png)

### Add Multiple VIS Handouts per Injection

After you select your first VIS Handout from the Name drop-down, click the ADD button, then select the 2nd VIS Handout pertaining to this same injection, then click the ADD button, then SUBMIT.

You must click the ADD BUTTON to insert more than one VIS Handout to the injection.  This may be needed for example documenting an MMR injection, but you give out 3 separate VIS Handouts (a measles one, a mumps one, a rubella one) pertaining to each part of the injection serum.

![](../injection-tab.assets/fc422791691f5fce3f08517890cf8882.png)

Click the Submit button at the bottom of the screen to submit the injection / immunization record with the VIS Handout information to the patient's chart.  It will then refresh back to the Injection List for the patient and you will see the complete injection records for the patient in their specific category.

It also gives a confirmation towards the top that says Successfully added injection record.

![](../injection-tab.assets/b436bbbc592b2b1e3ad5359609fcb996.png)

In the injection/immunization listing, you will see in the comments/reaction column the date the VIS was given, which VIS handout was given and the word "Pub" is the label for the published date you entered of the handout.

![](../injection-tab.assets/7ddbe48a47654980664634bd6bae2549.png)

## Quick Add - Adding Historical Injection(s) to Chart

From the injections tab, click Quick Add at the top right of the injection screen.

Click Quick Add at the top right of the injection screen to add multiple injection records to a patient's chart.  Using Quick Add only allows you to quickly add multiple historical injections.  This is a way to add injections that a patient has previously received.  It is not as specific of a record as using Add Injection. Using quick add, you can add 10 injections at a time on the screen.

![](../injection-tab.assets/a13e7e817c359d5682480926a4429716.png)

The Add Injections screen appears to allow you to record multiple injection records at one time, but not as many option fields (specifics) as Add Injection.

{{% tip %}}
Use tab key to get to each field.
{{% /tip %}}

* Injection:  Type in name of an injection to record for the patient. The system will attempt to auto-complete your typing.  It will give you choices that match and you can highlight and select if you wish. Note: You can only free-type in an injection name if your system has a setting turned on to allow free-type (system setting named: Allow Free Type in Autocomplete). If that is not enabled for your system, then you must choose an injection name from the auto-complete choice list.
* Date of Injection: Type in date injection was given.  If you don't know the exact date, leave this blank and use the comment field for example: Received injection in 1995.
* Administrator:  Use the drop-down arrow to select the administrator of the injection.  This is a pre-loaded selection from a specific department list. MIE can program other users to choose from in this column.
* Manufacturer:  Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing.  It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* Series #:  Enter the number of the series for this injection record.  Example: Patient is here for 2nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2nd shot in the Hepatitis B series.
* Dose:  Enter the dose of the injection.
* Strength: Enter the strength of the injection.
* Reaction:  Free-text in this field any comments regarding the injection, etc.  If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record.  (See other instructions in Editing An Injection Record).

The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions.  These are typically used for Allergy Injections, but can be used for any other injection.

* Reaction Induration: Enter the induration reaction in mm. Note: this field only displays if system setting Show Skin Test Fields is enabled
* Reaction Erythema: Enter the erythema reaction in mm.  Note: this field only displays if system setting Show Skin Test Fields is enabled.

Click Submit at the bottom of the screen to submit the injection / immunization records to the patient's chart. It will stay in the Quick Add screen view incase you want to add more injections.

It also gives a confirmation towards the top that says Successfully added # injection record(s).

![](../injection-tab.assets/99bbde0725cd263fae4474fbb56300b6.png)

When you are done entering multiple injection records for the patient, then click any tab in the patient's chart to work elsewhere, or any left-side bar tab to work elsewhere in the {{% system-name %}} system.

## Injection/Immunization Summary List

Clicking [ Inj/Imm List ] link will bring up the same screen/view as when you first open the Injections tab.

Injection/Immunization List is the complete, active summary list of injection / immunization records for the patient & vials entered.

![](../injection-tab.assets/c8a6e5f8422bf2abe624b6cdea91b369.png)

By default the screen lists 20 at a time in each section. There is a system setting you can have your MIE Implementer change to show more or less in the listing of this tab.  Can change to any specific number to show how many entries will display at a time, or setting to zero will cause the injections tab to list and show all entries and not be limited or have to click show all continuously.

![](../injection-tab.assets/d966f6dde0a809e3f14bde2012449647.png)

## System Administrators

The "add injection" field contents/choices are controlled mainly by system settings.  Which can be edited by a superuser and/or MIE Implementer. You can go into the System Settings tab (found in Control) if you have access and know what you want to change and to what value.

Some examples of system settings that can control the auto-complete or choices found in injection fields drop-downs are these (type section ‘Injections' to find the settings that are linked to this injections tab):

![](../injection-tab.assets/a168ea99d66163c8b7d64e834a7dd968.png)

Another quick way to access these system settings and in a more user-friendly format (to make edits to the choices in the injection fields offered by auto-completes or drop-downs) is to open the injections/immunizations chart tab in a separate window (right click; open in new window)

![](../injection-tab.assets/dbdafcefe5420245bd8678f0124b8f0b.png)

Then go to that window and click in the url at the top.  Click the "end" key on your keyboard to get to the end of the url.  Then add *&implement* to the end of the url.

![](../injection-tab.assets/7700130664f95a3510c33338c958e1f8.png)

You will see this screen:

![](../injection-tab.assets/aa826cc18f69dcbe4e0deb3c2eb72d6f.png)

Here you have a different editor style to configuring the injection system setting fields of what choices/contents should be shown/offered in the auto-completes and/or drop-downs of the injection add screen fields.  Setting anything here will also link/update the specific individual system setting. So you can set these via individual system settings or this *&implement* editor method.
