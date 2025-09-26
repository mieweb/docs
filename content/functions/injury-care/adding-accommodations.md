---
id: '1zvlKSV0JLLJQTwD3w6JN9HOposnRNBfVcSSfWmpToZY'
title: 'Adding Accommodations'
date: '2024-12-12T16:13:59.272Z'
version: 144
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'viewing-accommodations.md'
  - 'https://mie.talentlms.com/shared/start/key:ALEHRKMF'
source: 'https://drive.google.com/open?id=1zvlKSV0JLLJQTwD3w6JN9HOposnRNBfVcSSfWmpToZY'
wikigdrive: '6734a553a9b9ad6d6322fa22a9088c47069cc5a0'
---
The accommodation management function provides for the recording and documenting of accommodations (both personal as well as work-related). Users may initiate an encounter exam to document and authorize work accommodations.  Accommodations are also available for viewing throughout {{% system-name %}} from a header, or from its own chart tab outside of an encounter exam.

## Security Permission

Security permission **Manage Restr and Accom** allows a user to manage restrictions and accommodations for patient charts.  There are various levels from not being able to view any documented restrictions and/or accommodations on a chart, to being able to delete existing or add new restrictions and/or accommodations on a chart.

![](../adding-accommodations.assets/60140c574ab7a6e73a97e879234d1109.png)

Based on your permission, you may or may not have accommodations listings visible or you may or may not be able to add or edit existing or new accommodations for a chart.

![](../adding-accommodations.assets/6c9ee0adf44e9fd9a3622e73b41d91ae.png)

## Adding a New Accommodation while in Encounter-Section Expansion Method

While working in an encounter, the Plan area of the encounter offers a section named Accommodations. This is the section where new accommodations get entered for visits. If you need to simply view current accommodations a patient has on their chart, please refer to [Viewing Accommodations](viewing-accommodations.md) detailed document.

![](../adding-accommodations.assets/44312f4162e7687f3f4d0e026581fcf8.png)

Expand open the Accommodations section in the encounter (by clicking anywhere in the grey section title bar) to document new accommodations. When expanded, all active accommodations will display.  NOTE: Inactive accommodations may also display if you have Show Inactive [accommodations] enabled.

![](../adding-accommodations.assets/d5ff6c92dd562f5cd28929183b2e325b.png)

To add a new accommodation, simply click on the section title bar Restrictions to expand and open that encounter section.

![](../adding-accommodations.assets/c50b78aedaafdebf94732d0d22b909c8.png)

Once you do that, you will see again a list of all current active accommodations for the chart.  For more information on how to show/hide inactive accommodations, please refer to [Viewing Accommodations](viewing-accommodations.md) help guide.

![](../adding-accommodations.assets/42aa8520ee7adb6a6a345347c6bb1b3c.png)

Below that summary, you will see the fields and the ability to add new accommodations.

![](../adding-accommodations.assets/93a9f9862900b3147c638ad1df98897d.png)

![](../adding-accommodations.assets/d603ce4a70fa197b582397e49ee3c2c7.png)

* <strong>Where Accommodated:</strong> Is a required field to store an accommodation to a chart.  This field is a drop-down of specific choices for your system. The drop-down list of selections here are preconfigured. These choices are not recommended to be changed because they are used in the OSHA log. The Lost Time choices will count on the OSHA Log for lost time days whereas the others count as restricted days.
    * The system setting I&I / Clinical Restriction	/ Lost Time Type drives which restriction types will be counted as Lost Time
        * Out of the box, the product counts 5 accommodation types that start with ‘Lost Time' as Lost Time on the OSHA logs for ‘Days away from Work' via that system setting.
* <strong>Accommodation Details:</strong> Is a free text field to type in any details needed.
* <strong>Accommodation Start Date:</strong> Is a required field to store an accommodation to a chart.  This field will default to populate today's date, however you can change it to the exact date (and time) to record when the accommodation starts.  NOTE: Time will be converted to military/24 hour clock time.  Either enter a 24-hr clock or key in <em>p</em> or <em>a</em> after entering in a 12-hr time to be converted correctly.
* <strong>Accommodation End Date:</strong> Is a field to indicate the date (and time) the accommodation is to end. Keying in a specific end date will default to a time of 23:59 meaning accommodation goes until the end of that day.  You can always change to be the exact time that you want that accommodation to end on a specific date.  Again, time will be converted to military/24 hour clock time.  Either enter a 24-hr clock time or key in p or a after entering in a 12-hr time to be converted correctly.  NOTE: If the end date is left blank and you save the accommodation entry, it will store the accommodation to the chart as a <em>permanent</em> accommodation, since no end date was indicated.
    * The security permission Allow Open Restrictions allows users to create restrictions that don't have an end date and are not permanent. Use that with caution.  But, by default, the security permission is ‘No' meaning a restriction must have an end date and if it doesn't, then it is considered a Permanent restriction.
* <strong>Linked Case:</strong> If the encounter visit you are in is linked to a case/incident, that case/incident info will prepopulate here.  If you are adding an accommodation that should be tied to a different case/incident, you can use this field to auto-complete to link it to the appropriate case/incident.  If you click your down arrow key ↓ on your keyboard, it will display incidents on that chart to link to.

Once you have entered accommodation details, click the SAVE button.  The accommodation fields will refresh the accommodation entry screens to allow you to then enter another separate accommodation for a period of time if needed.

![](../adding-accommodations.assets/f9dd2854b964ea3dbf59627f1c3bdf9f.png)

Once done entering in accommodation(s), simply collapse the section or click the ‘next' on the section.

![](../adding-accommodations.assets/60fe94f482735f12c70217185ae1effa.png)

## Adding a New Accommodation while in Encounter-Quick List Method

Using the side quick list method, the user can have the side quicklist open and add an accommodation by using the **+** icon.

![](../adding-accommodations.assets/46bdc4200483d917a7efa3937b75a02d.png)

The *Add Accommodation* screen will pop-up to allow you to enter in a new accommodation. You can save and add another from this pop-up or simply save.

![](../adding-accommodations.assets/1442e827ef372996d9514fb57a3e247d.png)

Once you save, the accommodation will display in the Accommodations section of the encounter.

![](../adding-accommodations.assets/8c01b84b38b972591e79bc857b2e9007.png)

When the user is done with the entire encounter and other sections, when this encounter is saved and closed, a Work Status document may also be created (an additional encounter view) and saved as a result of this encounter and accommodations being added.  The Work Status document can be housed in any chart tab if your practice is set up that way.  The Work Status document created from this encounter could then be emailed to the employee and/or leader or shared via the portal.  If there were no work restrictions nor accommodations added to the encounter, the Work Status document will still create and save in the chart but it will have a statement "There are no current restrictions or accommodations."

## Editing or Deleting an Accommodation while in Encounter

From the list of accommodations, you can use the pencil icon that appears on the specific accommodation listed needing to be edited.  An accommodation may need to be edited to correct information or may need to end an accommodation early or extend it.  These icons are available on hover (or left swipe if on a tablet/ipad), or can be set to appear all the time via a system wide setting.  Again, you must have security permission to edit.

![](../adding-accommodations.assets/515540dcebcae9cbd6f3eb7a4212630d.png)

From the list of accommodations, you can use the trash can icon that appears on the specific accommodation listed needing to be deleted entirely from the chart.  This would be used if an accommodation were entered in error.  These icons are available on hover (or left swipe if on a table/ipad, or can be set to appear all the time via a system wide setting.  Again, you must have security permission to delete.

![](../adding-accommodations.assets/3806d70a9432ce28b1fdc3220e6bbd29.png)

## Editing or Deleting an Accommodation while in Encounter-Section Expansion Method

Accommodations can also be edited or deleted while the Accommodations encounter section is expanded open.  To expand, open the Accommodations section, simply click on the grey section title bar.

![](../adding-accommodations.assets/99ecff903c8071156962d18cb7fc3771.png)

Once the Accommodations section is expanded, you will see active accommodations listed (or you can show inactive ones also).  From the bulleted listing of accommodations, you will see the same pencil or trash can icons.

![](../adding-accommodations.assets/483d88552fcdb20f8f8fc6ff244541d5.png)

If using the edit/pencil icon on a specific listed accommodation using the section expansion method, the specific selected accommodation details will then populate in the fields on the screen.  That is where you then edit what is needed and click Save.

![](../adding-accommodations.assets/98e97e7c344b0f2659c24cca71809d35.png)

## Restrictions Not Accommodated Encounter Section

If there is a restriction entered but either do not know the accommodation yet or no accommodation with the same dates exists, it will place that restriction in the *Restriction Not Accommodated* section of the encounter. To view those, simply click on the grey section bar to expand open the section.

![](../adding-accommodations.assets/f28d3cb49b6c9c8398a8d3002633ff62.png)

The *Restrictions Not Accommodated* section lists any un-accommodated restrictions for the chart.

![](../adding-accommodations.assets/25f082bf8c77da175d4b2eeba4930d96.png)

This section is simply to show you any current active restrictions that do not have an accommodation documented that encompass the same dates of the restriction.   One can then go back to the Accommodations section to edit or add any accommodations if needed since restriction(s) exist.

![](../adding-accommodations.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)

If the accommodations for the patient do not need to be modified, one can click the *Confirm Accommodations* button if the accommodations for the chart do not need to be entered or modified based on restrictions the chart has.  Doing a confirmation like this will then remove that restriction from this ‘not accommodated' section listing.
![](../adding-accommodations.assets/7546bf5b41ac042eb02975c845ca570b.png)

## Current Accommodations Visibility

Current accommodations, that encompass today's date, are shown in various places when working in the chart.  Please read the other [Viewing Accommodations](viewing-accommodations.md) documentation for specific details, but a couple areas are:

### Restrictions/Lost Time stand alone Chart Tab

Any active current accommodations for a chart are shown on the stand alone chart tab *Restrictions/Lost Time* found in the Admin parent chart tab.

![](../adding-accommodations.assets/ab445f1aa9d952eb7e01e1b0ff05484b.png)

### Side Chart

Any active current accommodations that are specifically linked to a case/incident are also shown on the side chart.  When you open the side chart, open cases/incidents are shown and when you expand it, the linked restrictions & accommodations will be visible there also.

![](../adding-accommodations.assets/84e3a30309fbefe694909dd84db6e6e3.png)

## Learning Management System

To learn more about Adding Restrictions and Accommodations, follow the link below to the Learning Management System course:

* [Restriction and Accommodation Management](https://mie.talentlms.com/shared/start/key:ALEHRKMF)
