---
title: "Injection Tab with CHIRP Interface"
date: 2020-03-16T15:14:29.099Z
url: "general-functionality/injection/immunization-management/injection-tab-with-chirp-interface.html"
author: Jeremia Ploor
version: 51
id: 1cVM6kOokD8qoZ7i7IdJY4lVB2RIXhgOoDG1fNBPY5kQ
source: https://drive.google.com/open?id=1cVM6kOokD8qoZ7i7IdJY4lVB2RIXhgOoDG1fNBPY5kQ
menu:
    main:
        name: "Injection Tab with CHIRP Interface"
        identifier: "1cVM6kOokD8qoZ7i7IdJY4lVB2RIXhgOoDG1fNBPY5kQ"
        parent: "1bLRXxR-h5NWzJsXSk2cf_6ZjxljZuiBzTcQdmlvVrDA"
        weight: 2310
---
## View Injections/Immunizations Record

Click *E-Chart* from left sidebar tab. Search and open a patient's chart. Click *Injection* chart tab from the top.

The Injection / Immunization screen will open. It will have categories: Immunizations, Other Injections & Vials.

In these categories will be listed (if any) records of immunizations, oral immunizations or other injections that have been entered and are active for the specific patient. This is called the Injection/Immunization List. It also lists any Vials (used for Allergy Injection Vials) entered for the patient.

![](../../../external_files/03e7c6560fb867e2e78a14d3b4197f6c.png)

To view any *deleted* immunizations or *deleted* other injections or vials for the specific patient, then click [ Show Deleted ] link and it will then show the active *and* deleted records for each category.

![](../../../external_files/03e7c6560fb867e2e78a14d3b4197f6c.png)

It will then show and list the deleted for all categories. A deleted injection/immunization will have the word **deleted** under it in the name column.

![](../../../external_files/17ebc7ac767fa630ddd70c18bc4dcac7.png)

Click [ Hide Deleted ] there to show/view only the active injections and immunizations records for the patient. This hides the deleted immunizations/injections from the list.

## The Get Updates Link for CHIRP Interface

If your system is interfaced bi-directionally with an injection program example: CHIRP *(Children and Hoosiers Immunization Registry Program* in Indiana), then you will see the Get Updates link from the injection/immunization summary view screen.

![](../../../external_files/189344b9094c0375c71e5205ece11ae9.png)

If your system is set up for this type of interface, you would click the Get Updates link in the specific patient you are working on. Get Updates will query the injection program you are interfaced with to get any updates with an injections program for this specific patient only. You will see the query status screen.

![](../../../external_files/86ff90358b1929acd3c9652b051cafdd.png)

Once the query has been run, it will tell you if there were or were not any updates for the specific patient's injection record. The purpose of this Get Updates query is to make sure the patient's chart has the most up to date injection information available.

![](../../../external_files/87d6711811ec2b32dbf202faf9447062.png)

If there are updates, you'll either get a list of matching patients or a list of the matched patient's injections to bring into {{% system-name %}} .

If the {{% system-name %}} patient needs matched/linked to their CHIRP account, you will see a message stating *This patient has not yet been connected to a CHIRP patient account. Please select a potential match to connect to by clicking the CHIRP MR for the correct account*. At the very right end column is a rating column. The greater the number here in the CHIRP account, the more it matches the {{% system-name %}} patient information. 9 rating (highest rating) means this is the same patient in the CHIRP system as this {{% system-name %}} system. You now need to link/connect them (connect their CHIRP account with their {{% system-name %}} account). If you see a lower rating or multiple patient matches, please verify and make sure you link/connect the correct account to the {{% system-name %}} patient account.

If there are multiple matching CHIRP choices with same name, same DOB, etc we suggest you log into the CHIRP web app and look up the patient's identifier in there. We are displaying the CHIRP MR#, so that would make it easy to pick the right one then in {{% system-name %}} which then links the two. Once you select one in {{% system-name %}} – it will be linked to that patient. So the correct one needs to be selected. If you do select the wrong one, contact your MIE Implementer to have that CHIRP MR# removed and then when you go back to get updates you'll see the choices again to link to the correct one for CHIRP.

![](../../../external_files/cc284d563a985db73995017f92f9bb68.png)

To link/connect the CHIRP account to the {{% system-name %}} account, simply click on the CHIRP MR of the specific patient found in the first column on the left.

![](../../../external_files/8001b3b1cc24dfb10a67928cc45509af.png)

Next you will see the confirmation page that you are linking these patients. Keep the CHIRP mr# checkmarked.

Then click GET UPDATES FOR THIS PATIENT button if you wish to proceed to link/connect the accounts and proceed to get the injection updates from CHIRP into {{% system-name %}} . If you wish to cancel and get back, click BACK TO LIST.

![](../../../external_files/f91b6e21433129a411fc1d497eef83a8.png)

Once you click GET UPDATES FOR THIS PATIENT, it will grab any and all injection updates from the CHIRP database. It will show the *Injection Updates* screen. On the left is the CHIRP updates. On the right is the {{% system-name %}} patient record. You then select which injection updates from the left side (CHIRP side) to bring into and store into the patient's {{% system-name %}} record on the right side.

You can select individual injection updates from the left and bring over to the right by clicking the >> arrows next to each injection update. Each injection update from CHIRP shows the name of the injection/immunization and also the date given. Click the >> button next to the specific injection & date to bring over.

If you wish to bring over ALL injection updates from the left side to the right side (in mass and quickly with one click) click the >> button at the very top in between the titles. This is the quick >> button to bring over everything from the left side to the right side.

![](../../../external_files/669f3250947e3551ba636b025c2da006.png)

Clicking the >> button will bring over that CHIRP injection update and bring it over to the right side which is what you will be placing and storing in the patient's {{% system-name %}} record. When you click the >> you will see the injection then appear on the right side.

![](../../../external_files/743a73f4100b0178a70905adb570f40d.png)

When you are done selecting the injection updates to bring over into the patient's {{% system-name %}} account, click the SAVE button at the bottom.

Once you've clicked the SAVE button, it will refresh your screen and show a successfully updated injections message at the top. You will also see in the injections tab summary those injections/updates you brought over into {{% system-name %}} .

![](../../../external_files/955af93e4c4c012ac4a7dfde0045686c.png)

If there were not any updates for the specific patient's injection record, you would see a message that *No Updates are Available* and you wouldn't see the >> screen to bring over any updates.

![](../../../external_files/87d6711811ec2b32dbf202faf9447062.png)

The purpose of this Get Updates query is to make sure the patient's chart has the most up to date injection information available.

{{% note %}}

CHIRP sends in 999 as the dose to identify that no dose information was collected for this record.

{{% /note %}}


## Add Single Injection/Immunization

From the injections tab, click Add Inj/Imm at the top right of the injection screen.

![](../../../external_files/03e7c6560fb867e2e78a14d3b4197f6c.png)

The Injection screen will appear. The Injection screen has fields to fill out pertaining to the injection / immunization that you want to record.

![](../../../external_files/bc0d36b3c55ac428911d73716342da89.png)

* <strong>Injection/Immunization:</strong> This is a required field. Type the name of the injection/immunization. The system will attempt to auto-complete your typing & give you choices that match. You can highlight & select if you wish. Otherwise, you can continue to free-type in text. Certain immunizations are automatically programmed to look for specific allergies or conditions.
    * <strong>Influenza injections:</strong> When you select any of the influenza injections, the system will notify you in an alert box if the patient is allergic to eggs, allergic to influenza vaccine, allergic to flu vaccine, allergic to influenza virus vaccine or if has Gullian-Barre syndrome. These allergies must be previously documented in the patient's E-Meds allergy tab. Guillian-Barre syndrome must be previously documented in the patient's conditions tab.

![](../../../external_files/8713027b81462262571f86f1b5b62d00.png) ![](../../../external_files/4ba9f5177a38ca3f986e87d4fc55a0f6.png)

* <strong>Egg allergy alert:</strong> When you select other specific injections or immunizations to record, some specific injections will also look for egg allergies and give you an alert. These injections that look for egg allergies and give a pop-up alert are: MMR, Influenza split (incl.purified surface antigen), Influenza whole, Influenza NOS, Influenza live intranasal, Rabies intramuscular injection, Rabies intradermal injection, Rabies NOS and Yellow Fever.
* <strong>Administering Location:</strong> If your practice only has 1 location it will automatically populate this field. If your practice has several locations programmed into {{% system-name %}} , use the drop-down arrow to select the correct location of where the injection was administered. If you have a location selected here, it considers this injection an <em>in-house</em> injection. Meaning, the injection was administered at your location. If a location is selected here, you will be required then to fill out the Manufacturer and Expiration Date fields. These are required fields if a location is specified. If the injection was given elsewhere and you are just documenting the injection for records, select <em>No Location</em> and it will not make those other fields required to fill out.
* <strong>Administering Date:</strong> Automatically pops-up today's date and current time. Change date or time to when the injection was given.
* <strong>Administrator:</strong> Select the name of the person that gave the injection. There are 3 ways to select the administrator's name. You can start typing the last name in the first blank field and click <em>SEARCH</em> to pull up a list of users that match and select from there. If you want to select a physician within your practice, use the drop-down arrow in the next field and select from there (this is helpful to narrow down the search). If you are the injection administrator yourself (not recording this for anyone else) then choose ME box here. The document will reflect your name as Injection Administrator. The name you choose/select, will then appear at the top of this field next to Injection Administrator. Confirm and make a change if need to.
* <strong>Route:</strong> Select the route of the injection, if you wish, from the drop-down of choices.
* <strong>Site:</strong> Select the site the injection was given from the drop-down of choices. You can select <em>Other</em> and it will open a free-text field for you to type in. Your MIE Implementer can change a system setting to show all or a limited choice of sites to list.
* <strong>Dose:</strong> Enter the dose of the injection.
* <strong>Strength:</strong> Enter the strength of the injection.
* <strong>Manufacturer:</strong> Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text. This is a required field if you have chosen a location. If you leave the location field set to <em>No Location</em>, this will not be required.
* <strong>Vial / Lot #:</strong> Enter the vial and/or lot # of the serum.
* <strong>Series #:</strong> Enter the number of the series for this injection record. Example: Patient is here for 2^nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2^nd shot in the Hepatitis B series.
* <strong>Expiration Date:</strong> Enter expiration from the vial. This is a required field if you have chosen a location. If you leave the location field set to <em>No Location</em>, this will not be required.
* <strong>Comments / Reaction:</strong> Free-text in this field any comments regarding the injection, etc. If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record. (See other instructions in Editing an Injection Record).

The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions. These are typically used for Allergy Injections, but can be used for any other injection.

* <strong>VFC Status:</strong> If you have had MIE set up an interface with CHIRP <em>(Children and Hoosiers Immunization Registry Program</em> in Indiana_)_ and this system setting is on, you may see the VFC status drop-down selection field. You would choose the correct eligibility status of the patient for the Vaccines For Children (VFC) program. Then when the injection is submitted, this VFC status field data along with the submitted injection goes through an interface to CHIRP.

![](../../../external_files/60fd84e62b87b8d02f78c606e1aa0e34.png)

* <strong>Resulting Service Provider:</strong> Can select, by auto-complete, the physician the resulting service is monitored by. This auto-complete of choices shows only users in the Physician Department of {{% system-name %}} . It does not allow free-text.

![](../../../external_files/3c42b8e0ff2b15e9ef2480eb3e0dc87a.png)

* <strong>Resulting Service Date:</strong> Can enter the date this result was read (example: The date a TB test was read).
* <strong>Reaction Induration:</strong> Enter the induration reaction in mm. If zero, you can click the [0] quick button.
* <strong>Reaction Erythema:</strong> Enter the erythema reaction in mm. If zero, you can click the [0] quick button.
* <strong>Peak Flow:</strong> Enter the peak flow in L/Min
* <strong>Next Due:</strong> You can enter a date the next inj/immunization is due if you wish (ex: if it's a series, etc).

{{% system-name %}} has the ability to have overdue injections pop up from One-Click Checkin when in the Scheduler.

A system setting has to be manually created by MIE to enable this for a client.

If you need to document you gave the patient a VIS (Vaccine Information Handout), please see next page for instructions, otherwise click the *Submit* button at the bottom of the screen to submit the injection / immunization record to the patient's chart. It will now refresh back to the Injection List for the patient and you will see the complete injection records for the patient in their specific category.

It also gives a confirmation towards the top that says *Successfully added injection record.*

## Vaccine Information Statement (VIS) Handouts

Many clients hand the patient a Vaccine Information Handout (VIS) when the patient receives an injection. You can document that this handout was given to the patient by clicking the VIS Handouts link at the bottom of the injections/immunizations add/edit screen. Better yet, you do not have to maintain a latest publication of VIS sheets yourself to hand out. We now offer the VIS Website link available while documenting an injection and VIS Handout.

![](../../../external_files/1f8a203c4b3813bb5d77d425f5888ffb.png)

Once you click on the link VIS Handouts, it will open the VIS Handout fields for documentation.

![](../../../external_files/7efe41bd28d239f1191b58bf3317b220.png)

* <strong>Name:</strong> Using the drop-down, select the name of the VIS Handout publication. The list that we have in the drop-down comes from [http://immunize.org/VIS/](http://immunize.org/VIS/). Contact your MIE Implementer if you need additional VIS Handouts added to this drop-down.
* <strong>Published:</strong> Can enter the date of the VIS Handout publication.
* <strong>Date VIS Handout(s) Given:</strong> Will automatically default to today's date.

The VIS Website link can be set up by your MIE Implementer. You do not have to maintain a latest publication of VIS sheets yourself to hand out manually to a patient. We now offer the VIS Website link available while documenting an injection and VIS Handout given.

![](../../../external_files/61be70588460a103da00a12f49a2dd9f.png)

When you click the VIS Website link found available in the VIS Handouts section, it will take you out to immunize.org where you can utilize the latest publication of VIS available, along with the VIS sheets available in a different language to print for the patient. If your {{% system-name %}} system is set up to be multilingual (you use {{% system-name %}} in various countries) it will open to the language your preference is set to. Regardless, from here you can access the latest publication and print it in various languages and print it off to hand to the patient using your *printer* icon in your browser view. To get out, simply click the X to get out of that separate tab/window that you are in. Your {{% system-name %}} system will still be in the background.

![](../../../external_files/2a6738caf054b4af76bbaa2a782a8c4d.png)

### Add Multiple VIS Handouts Per Injection

After you select your first VIS Handout from the *Name drop-down*, click the ADD button, then select the 2^nd VIS Handout pertaining to this same injection, then click the ADD button, then SUBMIT.

You must click the ADD BUTTON to insert more than one VIS Handout to the injection. This may be needed for example documenting an MMR injection, but you give out 3 separate VIS Handouts (a measles one, a mumps one, a rubella one) pertaining to each part of the injection serum.

![](../../../external_files/910c81b11dccc502a267280f90282c31.png)

Click the *Submit* button at the bottom of the screen to submit the injection / immunization record with the VIS Handout information to the patient's chart. It will then refresh back to the Injection List for the patient and you will see the complete injection records for the patient in their specific category.

It also gives a confirmation towards the top that says *Successfully added injection record.*

![](../../../external_files/b89f4a3d6e7c1e1941cc834eefd1094e.png)
In the injection/immunization listing, you will see in the comments/reaction column the date the VIS was given, which VIS handout was given and the word "Pub" is the label for the published date you entered of the handout.

![](../../../external_files/535f56f233312d600e3c6ef484ff6f9b.png)

## Quick Add - Add Multiple Injection Records

From the injections tab, click Quick Add at the top right of the injection screen. Click Quick Add at the top right of the injection screen to add multiple injection records to a patient's chart. Using Quick Add only allows you to quickly add multiple *historical injections*. This is a way to add injections that a patient has previously received. It is not as specific of a record as using Add Injection. Using quick add, you can add 10 injections at a time on the screen.

![](../../../external_files/9d41c5de0a293813bb23959cd9337b6a.png)

The Add Injections screen appears to allow you to record multiple injection records at one time, but not as many option fields (specifics) as Add Injection.

{{% tip %}}

Use tab key to get to each field.

{{% /tip %}}


* <strong>Injection:</strong> Type in name of an injection to record for the patient. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* <strong>Date of Injection:</strong> Type in date injection was given. If you don't know the exact date, leave this blank and use the comment field for example: <em>Received injection in 1995</em>.
* <strong>Administrator:</strong> Use the drop-down arrow to select the administrator of the injection. This is a pre-loaded selection from a specific department list. MIE can program other users to choose from in this column.
* <strong>Manufacturer:</strong> Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* <strong>Series #:</strong> Enter the number of the series for this injection record. Example: Patient is here for 2^nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2^nd shot in the Hepatitis B series.
* <strong>Dose:</strong> Enter the dose of the injection.
* <strong>Strength:</strong> Enter the strength of the injection.
* <strong>Reaction:</strong> Free-text in this field any comments regarding the injection, etc. If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record. (See other instructions in Editing An Injection Record).

The following fields can be entered when editing an injection or now when you are entering the injection & know the reactions. These are typically used for Allergy Injections, but can be used for any other injection.

* <strong>Reaction Induration:</strong> Enter the induration reaction in mm.
* <strong>Reaction Erythema:</strong> Enter the erythema reaction in mm.

Click *Submit* at the bottom of the screen to submit the injection / immunization records to the patient's chart. It will stay in the Quick Add screen view incase you want to add more injections.

It also gives a confirmation towards the top that says *Successfully added # injection record(s).*

![](../../../external_files/a538b16c0be8b7566510178d8c8bd0ce.png)
When you are done entering multiple injection records for the patient, then click any tab in the patient's chart to work elsewhere, or any left-side bar tab to work elsewhere in {{% system-name %}} .

## Injection/Immunization Summary List

Clicking [ Inj/Imm List ] link will bring up the same screen/view as when you first open the Injections tab.

Injection/Immunization List is the complete, active summary list of injection / immunization records for the patient & vials entered.

![](../../../external_files/8a6fa26036f30f98a150add9131870ce.png)

