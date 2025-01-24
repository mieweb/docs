---
id: '11_gJvEXt_A9TeALtLbhxsUzWimA0i3C3qi0TZ1w43dk'
title: 'Injection Tab - Vials'
date: '2024-12-23T16:08:04.489Z'
version: 194
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'injection-editor.md'
  - '../document-management/documents-and-forms/e-chart-scan-documents.md'
  - 'https://mie.talentlms.com/shared/start/key:LSLIDNHR'
  - 'https://mie.talentlms.com/shared/start/key:LSEIDNHR'
source: 'https://drive.google.com/open?id=11_gJvEXt_A9TeALtLbhxsUzWimA0i3C3qi0TZ1w43dk'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
Within the immunization/injections module is the ability to manage Allergy Vials and Allergy Injections administered from those vials.

## Vials

Current unexpired Vials will display within the MAR/Injections stand alone chart tab.

![](../injection-tab-vials.assets/d07fe84d794fbcd920ad14d2816e297f.png)

To show past expired (or ended) Vials or deleted Vials on the chart, simply use the Show Expired/Ended or Show Deleted hyperlinks available to toggle your viewing.  Vials with an expiration date that is past or Vials that have a past end date or Vials that were deleted, will be available to be viewed using those hyperlinks.

![](../injection-tab-vials.assets/b738986a16e5412c7bc3c3059f9f7384.png)

## Additional Allergy Vials Related

### Allergist

An ‘Allergist' can be captured on the MAR/Injections screen, which then stores that allergist as a ‘contact' (with a specific user relationship) onto the patient's chart.

First, the system setting "Allergist" would need to be configured to point to which user role id# to store a related Allergist as.  It would be common to get this configured to be user role id# 139, but another user role id# could be set to the system setting as needed.

![](../injection-tab-vials.assets/769f42e24b6090f6ffdd81ed725c5304.png)

Clicking on Allergist hyperlink then allows selection of any active user in the system to be set here as the chart's Allergist.

![](../injection-tab-vials.assets/82ee356554d76c8aacf6785633a93e52.png)

However, you can limit the selection to be specific active users within a specific department (realm) of your system instead.  An additional system setting "Allergist Realm" can be configured to a specific department name you want the auto-complete of user selections to pull from, to be set as.

![](../injection-tab-vials.assets/dbedcfdb673432d2a0cfe1588ed857c2.png)

Once an Allergist is ‘set', then it is visible on that MAR/Injections tab.

![](../injection-tab-vials.assets/53b04414515078f991a25f593bcef5d3.png)

Also, it stores that set user/allergist as a ‘Contact' to the chart as the user role id that field is set to store as. This is visible from the Summary chart tab dashboard within the *Contacts* portlet.

![](../injection-tab-vials.assets/ec91b7fec8c19715d4443358e3a041c8.png)

### Allergy Emergency Info

The ability to free text in an Allergy Emergency Info area into the MAR/Injections stand alone chart tab is available if system setting "Allergy Emergency Info Extended Name" is enabled for the system.

Clicking then on the Allergy Emergency Info: hyperlink allows entering in free text of data for this information.

![](../injection-tab-vials.assets/f5e6a710ba69a00bc914e6492980194c.png)

To save, click SET button and the free text info will be displayed within the MAR/Injections chart tab.

![](../injection-tab-vials.assets/99a4aa9da6e18ca7304b0d5bada8ae3c.png)

### Peak Flow Baseline

A Peak Flow Baseline is available to set onto the MAR/Injections chart tab.  If the system setting "Peak Flow Baseline Extended Name" is configured with the name of extended value or observation to compare peak flow observations to, then Peak Flow Baseline hyperlink will be available to set the L/min peakflow baseline to be displayed within the MAR/Injections chart tab.

![](../injection-tab-vials.assets/d579e1c945d4eb4defa83558d94aa242.png)

## Add Vial

To add a new Vial to a chart (typically used for allergy injections), simply click the Add Vials hyperlink found that the top right of the MAR/Injections stand alone chart tab.

![](../injection-tab-vials.assets/e1a808e94fce898e02cc20070f3dc67f.png)

The *Add Vial* screen will display to allow you to add vial(s).

Enter the information in each field as needed.

![](../injection-tab-vials.assets/d0ce0624aa5782106c35189cb384f570.png)

* <strong>Vial Name:</strong> is a free text field to name the vial as you wish
* <strong>Contents:</strong> this is an autocomplete from the rxdb that pulls from the inject_type field of being ‘allergy' from the CDC.  These inject codes start with a V
    * Note: Within the Injection Editor is where these are found and can be renamed for system use or hidden based on what you want offered for system use.

For example:

![](../injection-tab-vials.assets/4906d2e9ef45a24230ecb4a3f36ae0cf.png)

    * For more information please go to [Injection Editor](injection-editor.md) help guide for more detailed information
* <strong>Strength:</strong> is an autocomplete to select from various used strengths or a system setting can be enabled for "Vial Strength Dropdown" which uses a drop-down instead of an autocomplete.
    * Depending on the strength, it will be associated with a color if system setting "Use Vial Colors" is also enabled.

![](../injection-tab-vials.assets/a3c6a64469f4e066f8ce531a0d8b538b.png)

* <strong>Expiration Date:</strong> can key in the expiration date of the vial.  Once that date has passed, then the Vial will automatically become expired and be visible in the Show Expired/Ended toggle view.
* <strong>Start Date:</strong> can key in the start date of when injections are to begin to be administered from the vial
* <strong>End Date:</strong> can key in an end date of when injections are to stop being administered from the vial.  Once that date has passed, then the Vial will automatically become ended and be visible in the Show Expired/Ended toggle view.

Click the ADD button when done entering the vial(s) you wish. After you enter vial(s), you will be taken back to the immunization/injection summary screen. You will see the summary list of immunizations, injections & vials. You can now add an injection(s) towards the vial(s) you entered.

![](../injection-tab-vials.assets/47e498e81980a1d4adf5bee91ca7be68.png)

## Administering Injections from Vial(s) from Stand Alone MAR/Injections chart tab

One can document an administered injection from a vial using the stand alone MAR/Injections chart tab.  To do this, you must first check-mark the vial(s) you wish to administer an injection for.  If you do not, you will get an error message saying you must first select a vial to add an injection to.  NOTE: There is a system setting "Vial Checkbox Checked by Default" that can be enabled which will default to all active vials having a checkmark on them.  Then one can simply "uncheckmark" which vial is not dispensing from.

Then, click the ADD INJECTIONS FOR VIALS button under the vials summary listing.

![](../injection-tab-vials.assets/483434e5fc4791fbe8516f55d33c4e9b.png)

The correct number of injection screens will open according to how many vials you check-marked.

Fill out the injection fields with the information.

![](../injection-tab-vials.assets/1e52c94582d8b873806211dce755ff01.png)

* <strong>Injection/Immunization:</strong>  This is a required field.  This will prefill the allergy injection name (from the Injection Editor) of the ‘contents' field the Vial has on it.
* <strong>Administering Location:</strong> Select the location of where injection is being administered at.  It will default to your default location from your My Settings preferences.
    * If the injection was given elsewhere and you are just documenting the injection for records, select No Location.
* <strong>Administering Date:</strong>  Automatically populates today's date and current time.  Change date or time to when the injection was given.
* <strong>Administrator:</strong> Automatically populates your name but you can change to whom is the administrator
* <strong>Route:</strong>  Select the route of the injection, if you wish, from the drop-down of choices.
* <strong>Site:</strong>  Select the site the injection was given from the drop-down of choices. Our Deployment Consultant can configure the system setting "Vial Sites" to offer a limited choice of sites specific to Vial injections.
* <strong>Dose:</strong>  Enter the dose of the injection.  Our Deployment Consultant can configure the system setting "Autodose vial injections" to allow the system to suggest an autopopulate a dose (based on the vial strength that the injection is being administered from) in this field, but one should always document the appropriate dose given.  NOTE: if autodose vial injections system setting is enabled, the system will also display a message if it's not able to calculate a dose based on strength entered for the vial being administered from.

![](../injection-tab-vials.assets/9599bdeb0d30babda9154f4b8897df51.png)

* <strong>Strength:</strong> The strength will autopopulate based on the Vial's strength this injection is being administered from.  If the Vial didn't have a strength keyed in, one can enter the strength of the injection here.  You will also see the color code next to that strength chosen if your practice has the "Use Vial Colors" system setting turned on.
* <strong>Comments / Reaction:</strong>  Free-text in this field any comments regarding the injection, etc.  If a patient later had a reaction to this injection, you would also type any comments regarding that here and submit an edit to the original record.
* <strong>Peak Flow:</strong> An optional field to document the peak flow in L/Min if system setting "Peak Flow Observation Name" is configured for the system, which gives the ability to document a peak flow value associated with an injection.
* <strong>Next Due:</strong> You can enter a date of when the next injection is due if you wish (ex: if it's a series, etc). {{% system-name %}} has the ability to have overdue injections pop up from One-Click Checkin when in the Scheduler to check someone in also.

Click the ADD INJECTIONS button at the bottom to enter these injections from the vials into the chart's record. It will then place these injections into the Injection List of records for the patient.

### Documenting Injections from Vials within Encounters

When working in an encounter, you would typically select **Allergy Injection-Single** from a tests & procedures picklist and add the procedure to the encounter.

![](../injection-tab-vials.assets/e5112b51eb265331cf60c90f5e260585.png)

Once allergy injection test/procedure is added to the encounter, simply click on the Allergy Injection grey title section to expand it open.

![](../injection-tab-vials.assets/ff6ccebb06f3c3fb24ac12b302dc3cd1.png)

The allergy injection will be In Progress and you will see a list of Vials that have already been added to the chart.

![](../injection-tab-vials.assets/4cc643c1637f996a6da010e958607d49.png)

Checkmark the vial(s) you wish to administer an injection for and then the Injection From Vial entry fields will display.

![](../injection-tab-vials.assets/2efd21dc0e67277cb952f8746d8f07f3.png)

Document the administered injection and save your work. Make sure to mark the applied Allergy Injection test/procedure as *completed*.

![](../injection-tab-vials.assets/2942db4f563dd1217ac0de5b17ae9452.png)

## Vial Flowsheet

A Vials Flowsheet can be displayed within the MAR/Injections stand alone chart tab.  This is configured by enabling a system setting "Vial Use Flow Layout" for the system.

![](../injection-tab-vials.assets/bef965e4d3bf6223ee077b872d7a9043.png)

## Injections Portlet - Vials

Injections administered from Vials are also displayed on the Summary chart tab dashboard, within the Injections portlet.

![](../injection-tab-vials.assets/892eef38af204cfe0ee987c4079322ad.png)

## Print Allergy Injection Flowsheet

The history of allergy injections can be printed using the Print Chart print definition *Allergy Injections.*

![](../injection-tab-vials.assets/bb9af62c9b91b1b22a10542a38d28a99.png)

## Edit a Vial

You can edit, copy or delete a vial from the Injections List summary screen.

To Edit a Vial, simply click the Edit link in the Options column next to the vial you wish to edit.

![](../injection-tab-vials.assets/b1561e606150752fcdfafddb5ae93697.png)

Make the edits to the fields needed.

![](../injection-tab-vials.assets/2ecac83dc5496f98b7be04698360a3d9.png)

Click EDIT when done to save your work.

## Delete a Vial

You can edit, copy or delete a vial from the Injections List summary screen.

To Delete a Vial, simply click the Delete link in the Options column next to the vial you wish to delete.

![](../injection-tab-vials.assets/d0cb2cafc84b192f1b79a1d28e68a86f.png)

Click the DELETE button.  Once you click delete, it will delete the vial.  There is no confirmation screen or field to type in a reason for deletion.

![](../injection-tab-vials.assets/3475454a926a57cec5c907a1fe4c6b76.png)

It will delete the vial & refresh you back to the main Injection summary screen.  The vial will no longer be displayed.

### Retrieve Deleted Vials

If you wish to view or retrieve a deleted vial, from the Vials section, click the link Show Deleted hyperlink to toggle your view.

![](../injection-tab-vials.assets/b738986a16e5412c7bc3c3059f9f7384.png)

The deleted vial will then show in that category summary for viewing.

If you wish to retrieve (undelete) a vial, simply click the link undelete from the options column.

![](../injection-tab-vials.assets/fef62cc8b669600ccd7638772ce7cc8a.png)

It then brings up the details of the vial.  Click the UNDELETE button at the bottom to retrieve & undelete the vial.

![](../injection-tab-vials.assets/400e9dcf5357b11e7912f3aaf7275067.png)

It will then refresh & bring you back to the main Injections summary screen.  You will see the vial(s) listed that you undeleted.

## Copy a Vial

You can edit, copy or delete a vial from the Injections List summary screen.

To copy a Vial, simply click the Copy link in the Options column next to the vial you wish to copy.

Copy is a quick way to enter another vial using previous or current vial information.

![](../injection-tab-vials.assets/09caaeac5597498f0f7756502a07622c.png)

The Copy Vial screen fields will appear.  It auto-populates the fields w/ the information from the vial you are copying.  You can make any changes to the fields you wish for this new copied vial & click the COPY button at the bottom.

This is just a quick way to enter another vial without having to re-enter data/information that might be the same as other already entered vials for the patient.

![](../injection-tab-vials.assets/807a489b58a4011f28c12ea8eaaefb66.png)

* <strong>Auto-Expire Previous:</strong>  This is check-marked by default.  When you copy a vial, most likely it is because you are tossing the old vial out.  So the original vial you copied gets expired as of the current date if this is check-marked to automatically-expire the previous (previous means original vial you are creating the copy from).  The original vial then won't show up on the current list because you automatically-expired it. It will then refresh & bring you back to the main Injections summary screen. You will see the new entered vial you created as a copy from a previous vial.

## Scan a Vial Sheet

Some practices want to scan in the allergy vial sheet that comes packaged with the vial (from the allergist).  That is typically the paper sheet that the nurse handwrites the date given, the dose, any reaction, etc. That sheet then goes back with the vial for additional documentation for the allergist.

Your system can be set up to have a Scan link in the options column for scanning in that vial sheet and store it as a document in the patient's chart.

The system setting "Vial Doctype" can be configured to use the doc.type VIAL which then allows the Scan ability from the Vials section.  Also, make sure in the document types editor, that doc.type VIAL is checkmarked to allow E-Chart Scan.  This is so that when using Scan method on a vial, it will store as the correct VIAL doc.type and nothing else.

![](../injection-tab-vials.assets/ece79482eadd000b0cb705c60d98dbca.png)

If your workflows don't need to utilize this feature, then the system setting can be configured to blank out the doc.type value and the Scan hyperlink will not appear.

Using a flatbed scanner to scan a Vial sheet, simply click the Scan link in the Options column next to the vial you wish to edit.

![](../injection-tab-vials.assets/cd1920dd39f07aeb46ff9c10321029d1.png)

The document scan control will appear on the screen.  Proceed to scan in (or file upload an existing electronic file) of the vial sheet and upload.  See other help instructions titled [E-Chart Scan Documents](../document-management/documents-and-forms/e-chart-scan-documents.md) for help with Document Scan Control and scanning.

![](../injection-tab-vials.assets/18ab25d6374cf210c44cf913273a9ec6.png)

## Learning Management System

To learn more about the Injection Tab - Vials, follow the links below to the Learning Management System courses:

* [Allergy/Injection Management](https://mie.talentlms.com/shared/start/key:LSLIDNHR)
* [Injection/Immunization Management](https://mie.talentlms.com/shared/start/key:LSEIDNHR)
