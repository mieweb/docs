---
id: '1cVM6kOokD8qoZ7i7IdJY4lVB2RIXhgOoDG1fNBPY5kQ'
title: 'Injection Tab with CHIRP Interface'
date: '2024-12-31T16:02:47.004Z'
version: 165
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'http://immunize.org/VIS/'
source: 'https://drive.google.com/open?id=1cVM6kOokD8qoZ7i7IdJY4lVB2RIXhgOoDG1fNBPY5kQ'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
## View Injections/Immunizations Record

Navigate to the **MAR/Injections** tab in the patient chart.

The **MAR/Injections** tab will display the Medication Administration list, Immunizations list, a display only version of the Titer Results flowsheet, Injection Documents list, Vials list, and the Contraindications list.

![](../injection-tab-with-chirp-interface.assets/95793a61ee88cf0d92fc4d8c01172cde.png)

To view any deleted immunizations or any other deleted injections or vials for the specific patient, click the **Show Deleted** link. Active and deleted records will display for each category.

![](../injection-tab-with-chirp-interface.assets/79607fd94db04ff53ce53eb21f696016.png)

Deleted injection/immunization will have the word **deleted** beneath the name column.
![](../injection-tab-with-chirp-interface.assets/ceb04c603c820a94aa313830335e835e.png)

Click Hide Deleted link to only display the active injections and immunizations records for the patient.

## Get Update link for most Bidirectional Immunization Interfaces

The **Get Updates** link will query the bidirectional interface for the most up to date results on the selected patient

![](../injection-tab-with-chirp-interface.assets/1a97978d40024ca51acdab7b5b864920.png)

If a matching immunization record for the patient is not found, a message will be displayed to let the end user know that there isn't any information available for this patient.

![](../injection-tab-with-chirp-interface.assets/8122395e0f429e9022b7915404305999.png)

If a match has been found, the user will be taken to the Immunization Reconciliation.

The left side of the immunization reconciliation screen labeled **Updates**, is a list of updates provided by the immunization interface (ImpactSIIS pictured). The right side of the screen label **Patient Record** are immunizations listed within {{% system-name %}} .

Onscreen instructions are provided at the top of the reconciliation screen.

Click the Add buttons to move the immunization in the **Updates** column into {{% system-name %}} **(Patient Record column)**.

Click the Trashcan icon on the right side of the **Patient Record** column to DELETE this immunization from {{% system-name %}} .

When all updates are completed, click the **SAVE** button to save all updates.

![](../injection-tab-with-chirp-interface.assets/355f3de457b590a86e7d2c031545f127.png)

For systems on 03-2024RC and newer a new system setting (E-Chart/Chirp/Smoothie on Delete Warning) can be enabled. Simply enter a "warning message" in the Current Value field. Any text/words typed into the 'value' field (of this system setting) will be displayed to end users as a message when 'delete' from the patient record is used on/doing updates on the Injection History query screen.

![](../injection-tab-with-chirp-interface.assets/8b58023881eea5667b0ced22f6ff149e.png)

## The Get Updates Link for CHIRP Immunization Interface

If your system is interfaced bi-directionally with an injection program example: CHIRP (Children and Hoosiers Immunization Registry Program in Indiana), users will see a **Get Updates** link on the MAR/Injections tab.

![](../injection-tab-with-chirp-interface.assets/1a97978d40024ca51acdab7b5b864920.png)

The **Get Updates** link will query the bidirectional interface for the most up to date results on the selected patient.

Once the query has been run and no updates are available, a message will display to indicate this.

![](../injection-tab-with-chirp-interface.assets/f1f9c62b3df10e3825ed51ff15a8b206.png)

If there are updates, you'll either get a list of matching patients or a list of the matched patient's injections to bring into {{% system-name %}} .

If the {{% system-name %}} patient needs to be matched/linked to their CHIRP account, you will see a message stating This patient has not yet been connected to a CHIRP patient account. Please select a potential match to connect to by clicking the CHIRP MR for the correct account. At the very right end column is a rating column. The greater the number here in the CHIRP account, the more it matches the {{% system-name %}} patient information. 9 rating (highest rating) means this is the same patient in the CHIRP system as this {{% system-name %}} system. You now need to link/connect them (connect their CHIRP account with their {{% system-name %}} account). If you see a lower rating or multiple patient matches, please verify and make sure you link/connect the correct account to the {{% system-name %}} patient account.

If there are multiple matching CHIRP choices with same name, same DOB, etc we suggest you log into the CHIRP web app and look up the patient's identifier in there. We are displaying the CHIRP MR#, so that would make it easy to pick the right one then in {{% system-name %}} which then links the two. Once you select one in {{% system-name %}} – it will be linked to that patient. So the correct one needs to be selected. If you do select the wrong one, contact your MIE Implementer to have that CHIRP MR# removed and then when you go back to get updates you'll see the choices again to link to the correct one for CHIRP.

![](../injection-tab-with-chirp-interface.assets/ec6edc150fa45ca8615c2798698e7da7.png)

To link/connect the CHIRP account to the {{% system-name %}} account, simply click on the CHIRP MR of the specific patient found in the first column on the left.

![](../injection-tab-with-chirp-interface.assets/be25553eadce23480cd1b8cbfc3797cc.png)

Next you will see the confirmation page that you are linking these patients. Keep the CHIRP mr# checkmarked.

Then click GET UPDATES FOR THIS PATIENT button if you wish to proceed to link/connect the accounts and proceed to get the injection updates from CHIRP into {{% system-name %}} . If you wish to cancel and get back, click BACK TO LIST.

![](../injection-tab-with-chirp-interface.assets/5722102f563ac26952bbb4a8c8d3b1fb.png)

Once you click GET UPDATES FOR THIS PATIENT, it will grab any and all injection updates from the CHIRP database. It will show the Injection Updates screen. On the left is the CHIRP updates. On the right is the {{% system-name %}} patient record. You then select which injection updates from the left side (CHIRP side) to bring into and store into the patient's {{% system-name %}} record on the right side.

You can select individual injection updates from the left and bring over to the right by clicking the >> arrows next to each injection update. Each injection update from CHIRP shows the name of the injection/immunization and also the date given. Click the >> button next to the specific injection & date to bring over.

If you wish to bring over ALL injection updates from the left side to the right side (in mass and quickly with one click) click the >> button at the very top in between the titles. This is the quick >> button to bring over everything from the left side to the right side.

Clicking the >> button will bring over that CHIRP injection update and bring it over to the right 
![](../injection-tab-with-chirp-interface.assets/ef8054e3dbe0865eeb5850a574a23278.png)
side which is what you will be placing and storing in the patient's {{% system-name %}} record. When you click the >> you will see the injection then appear on the right side.

![](../injection-tab-with-chirp-interface.assets/fa023d77300d71e4296791288e18a529.png)

When you are done selecting the injection updates to bring over into the patient's {{% system-name %}} account, click the SAVE button at the bottom.

Once you've clicked the SAVE button, it will refresh your screen and show a successfully updated injections message at the top. You will also see in the injections tab summary those injections/updates you brought over into {{% system-name %}} .

![](../injection-tab-with-chirp-interface.assets/894dc1a1d49ff78cf076872381ef21b9.png)

If there were not any updates for the specific patient's injection record, you would see a message that No Updates are Available and you wouldn't see the >> screen to bring over any updates.

![](../injection-tab-with-chirp-interface.assets/f1f9c62b3df10e3825ed51ff15a8b206.png)

The purpose of this Get Updates query is to make sure the patient's chart has the most up to date injection information available.

{{% note %}}
CHIRP sends in 999 as the dose to identify that no dose information was collected for this record.
{{% /note %}}

## Add Single Injection/Immunization

From the MAR/Injections tab, click Add Inj/Imm at the top right of the injection screen.

![](../injection-tab-with-chirp-interface.assets/94d87f6110f3265c09374f47ab3cb5df.png)

The Injection screen will appear. The Injection screen has fields to fill out pertaining to the injection / immunization that you want to record.

![](../injection-tab-with-chirp-interface.assets/797b224b14a1b178062df76e8583981c.png)

* <strong>Injection/Immunization:</strong> This is a required field. Type the name of the injection/immunization. The system will attempt to auto-complete your typing & give you choices that match. You can highlight & select if you wish. Otherwise, you can continue to free-type in text. Certain immunizations are automatically programmed to look for specific allergies or conditions.
    * <strong>Influenza injections:</strong> When you select any of the influenza injections, the system will notify you in an alert box if the patient is allergic to eggs, allergic to influenza vaccine, allergic to flu vaccine, allergic to influenza virus vaccine or if has Gullian-Barre syndrome. These allergies must be previously documented in the patient's E-Meds allergy tab. Guillian-Barre syndrome must be previously documented in the patient's conditions tab.

![](../injection-tab-with-chirp-interface.assets/0d3c592e825a1d4e38c0a442a50946a0.png)

![](../injection-tab-with-chirp-interface.assets/31758435046560ef88db8637ba820e10.png)

* <strong>Egg allergy alert:</strong> When you select other specific injections or immunizations to record, some specific injections will also look for egg allergies and give you an alert. These injections that look for egg allergies and give a pop-up alert are: MMR, Influenza split (incl.purified surface antigen), Influenza whole, Influenza NOS, Influenza live intranasal, Rabies intramuscular injection, Rabies intradermal injection, Rabies NOS and Yellow Fever.
* <strong>Contraindications:</strong> This is an optional field that is on by default.  If you wish to have it turned on, you will see a contraindications field you can select from and the rest of the fields minimize for documenting.
* <strong>Administering Location:</strong> If your practice only has 1 location it will automatically populate this field. If your practice has several locations programmed into {{% system-name %}} , use the drop-down arrow to select the correct location of where the injection was administered. If you have a location selected here, it considers this injection an in-house injection. Meaning, the injection was administered at your location. If a location is selected here, you will be required then to fill out the Manufacturer and Expiration Date fields. These are required fields if a location is specified. If the injection was given elsewhere and you are just documenting the injection for records, select No Location and it will not make those other fields required to fill out.
* <strong>Vial / Lot #:</strong> Enter the vial and/or lot # of the serum.
* <strong>Manufacturer:</strong> Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text. This is a required field if you have chosen a location. If you leave the location field set to No Location, this will not be required.
* <strong>NDC:</strong> National Drug Code pulls the 10 or 11-digit code that represents the injection.
* <strong>Expiration Date:</strong> Enter expiration from the vial. This is a required field if you have chosen a location. If you leave the location field set to No Location, this will not be required.
* <strong>Administering Date:</strong> Automatically pops-up today's date and current time. Change date or time to when the injection was given.
* <strong>Administrator:</strong> The Administrator will default to the logged in user. Use the autocomplete to change the name of the administrator if not the logged in user.
* <strong>Route:</strong> Select the route of the injection, if you wish, from the drop-down of choices.
* <strong>Site:</strong> Select the site the injection was given from the drop-down of choices. You can select Other and it will open a free-text field for you to type in. Your MIE Implementer can change a system setting to show all or a limited choice of sites to list.
* <strong>Dose:</strong> Enter the dose of the injection.
* <strong>Strength:</strong> Enter the strength of the injection.
* <strong>Series #:</strong> Enter the number of the series for this injection record. Example: Patient is here for 2nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2nd shot in the Hepatitis B series.
* <strong>Comments / Reaction:</strong> Free-text in this field any comments regarding the injection, etc. If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record. (See other instructions in Editing an Injection Record).
* <strong>VFC Status:</strong> If a bidirectional immunization interface has been configured and the appropriate system settings are enabled (System setting: E-Chart/CHIRP/Use Chirp), users will see the VFC status drop-down selection field. The user should select the correct eligibility status of the patient for the Vaccines For Children (VFC) program. When the injection is submitted, this VFC status field data along with the submitted injection will be sent to the immunization registry.
* <strong>Funding Source:</strong> If a bidirectional immunization interface has been configured and the appropriate system settings are enabled (System setting: E-Chart/CHIRP/Use Chirp), users will see the Funding Source drop down selection field. The user should select the appropriate funding method for the immunization under the Vaccine For Children (VFC) program . When the injection is submitted, this Funding Source field data along with the submitted injection will be sent to the immunization registry.
* <strong>Next Due:</strong> You can enter a date the next inj/immunization is due if you wish (ex: if it's a series, etc). {{% system-name %}} has the ability to have overdue injections pop up from One-Click Checkin when in the Scheduler. The (Scheduler/One-Click Checking/Overdue Injections Alert) must be enabled for this feature. Updating the date in the Next Due date  field does not update any Health Surveillance panel due dates or orders. The Next Due date can be tracked independently by using the "Immunizations Due Within 30 Days" and "Immunizations Past Due" System Reports. The "Immunizations Due 30 Day" scheduled job will also send an email to patients notifying them of a vaccine reminder" if enabled.

## Vaccine Information Statement (VIS) Handouts

Users can document what VIS handout was given to the patient by clicking the VIS Handouts link at the bottom of the injections/immunizations add/edit screen.

![](../injection-tab-with-chirp-interface.assets/8790fe9e5c90a0292cdd42f74ca57d97.png)

Once you click on the link VIS Handouts, use the autocomplete to type in the name of the VIS handout provider, enter the date the VIS hand outs were given. Click the Add button to add multiple VIS hand outs. Once completed, click the **Submit** button to save and record the immunization.

![](../injection-tab-with-chirp-interface.assets/0910281c700c323a10177953212e0646.png)

Click the VIS Website to visit http://immunize.org/VIS/ to select from a list of current VIS handouts to print on demand.

![](../injection-tab-with-chirp-interface.assets/65e46f9a90de6f2049f54777380550d3.png)

Click the **Submit** button at the bottom of the screen to submit the injection / immunization record with the VIS Handout information to the patient's chart.

![](../injection-tab-with-chirp-interface.assets/0868f7187d0ca9d47e00052dd79e5c9c.png)

{{% system-name %}} will display a confirmation message towards the top of the MAR/Injections tab upon saving the injection.

![](../injection-tab-with-chirp-interface.assets/c537ec4b637939a7380883992f78fbe2.png)

In the injection/immunization listing, users will see the VIS information stored in the **Comments/Reaction** column. The "Pub" information is the date entered as the published date from the VIS handout selected from the autocomplete when entering the VIS data.

![](../injection-tab-with-chirp-interface.assets/090e9133fcaab5f29b7ebdbd32b7f597.png)

## Quick Add - Add Multiple Injection Records

From the injections tab, click Quick Add at the top right of the injection screen. Click Quick Add at the top right of the injection screen to add multiple injection records to a patient's chart. Using Quick Add only allows you to quickly add multiple historical injections. This is a way to add injections that a patient has previously received. It is not as specific of a record as using Add Injection. Using quick add, you can add 10 injections at a time on the screen.

![](../injection-tab-with-chirp-interface.assets/95884680f1f431699ad72be23825d1a0.png)

The Add Injections screen appears to allow you to record multiple injection records at one time, but not as many option fields (specifics) as Add Injection.

{{% tip %}}
Use tab key to get to each field.
{{% /tip %}}

* <strong>Injection:</strong> Type in name of an injection to record for the patient. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* <strong>Date of Injection:</strong> Type in date injection was given. If you don't know the exact date, leave this blank and use the comment field for example: Received injection in 1995.
* <strong>Administrator:</strong> Use the drop-down arrow to select the administrator of the injection. This is a pre-loaded selection from a specific department list. MIE can program other users to choose from in this column.
* <strong>Manufacturer:</strong> Enter the manufacturer's name if desired. The system will attempt to auto-complete your typing. It will give you choices that match and you can highlight and select if you wish. Otherwise, you can continue to free-type in text.
* <strong>Series #:</strong> Enter the number of the series for this injection record. Example: Patient is here for 2^nd Hepatitis B shot. You would enter a 2 in this field as it is the patient's 2^nd shot in the Hepatitis B series.
* <strong>Dose:</strong> Enter the dose of the injection.
* <strong>Strength:</strong> Enter the strength of the injection.
* <strong>Reaction:</strong> Free-text in this field any comments regarding the injection, etc. If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record. (See other instructions in Editing An Injection Record).

## Injection/Immunization Summary List

Clicking [ Inj/Imm List ] link will bring up the same screen/view as when you first open the Injections tab.

Injection/Immunization List is the complete, active summary list of injection / immunization records for the patient & vials entered.

![](../injection-tab-with-chirp-interface.assets/8fbf58f34153ab08dab9a2ed73b49df0.png)
