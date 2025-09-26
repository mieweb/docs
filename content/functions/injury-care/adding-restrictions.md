---
id: '1iIBBj7YhPN--toi1eztojxqRu70YpPCulg8vowFjRlg'
title: 'Adding Restrictions'
date: '2025-02-04T19:11:08.371Z'
version: 371
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'viewing-restrictions.md'
  - 'editing-restriction-types.md'
  - 'https://mie.talentlms.com/shared/start/key:ALEHRKMF'
source: 'https://drive.google.com/open?id=1iIBBj7YhPN--toi1eztojxqRu70YpPCulg8vowFjRlg'
wikigdrive: '6734a553a9b9ad6d6322fa22a9088c47069cc5a0'
---
The restriction management function provides for the recording and documenting of restrictions (both personal as well as work-related). Users may initiate an encounter exam to document and authorize work restrictions.  Restrictions are also available for viewing throughout {{% system-name %}} from a header, or from its own chart tab outside of an encounter exam.

## Security Permission

Security permission **Manage Restr and Accom** allows a user to manage restrictions and accommodations for patient charts.  There are various levels from not being able to view any documented restrictions and/or accommodations on a chart, to being able to delete existing or add new restrictions and/or accommodations on a chart.

![](../adding-restrictions.assets/60140c574ab7a6e73a97e879234d1109.png)

Based on your permission, you may or may not have restrictions/accommodations listings visible or you may or may not be able to add or edit existing or new restrictions/accommodations for a chart.

![](../adding-restrictions.assets/ecd3ede4ae2d53e7c2db7301c3c2f454.png)

## Adding a New Restriction while in Encounter

While working in an encounter, the Plan area of the encounter offers a section named Restrictions. This is the section where new restrictions get entered in for visits. If you need to simply view current restrictions a patient has on their chart, please refer to [Viewing Restrictions](viewing-restrictions.md) detailed document.

![](../adding-restrictions.assets/0bdb9a7c0f8b5c1d2c7939f914373ef8.png)

Expand the Restrictions section in the encounter to document new or update/revise current active restrictions. When expanded, all active restrictions will display.

To add a new restriction, simply click on the section title bar Restrictions to expand and open that encounter section.

![](../adding-restrictions.assets/98b52d9f2b7912bd22d4281bd27f4ff4.png)

Once you do that, you will see again a list of all current active restrictions for the chart.  Below that summary, you will see the fields and the ability to add new restrictions.  For more information on how to show/hide inactive restrictions, please refer to [Viewing Restrictions](viewing-restrictions.md) help guide.

![](../adding-restrictions.assets/2d60cd1cda37ab55b067cdda55e42fdd.png)

Complete the Restriction fields to add a new restriction on the chart for this visit. Several fields are auto-completes that offer built-in choices. The Restriction fields are described as:

* Restriction Type: Begin typing in the name or type of restriction.  The system will autocomplete preformatted choices for you.  Restriction types are programmed by MIE or your Super Admin in the [Editing Restriction Types](editing-restriction-types.md) found in Control. If the person is restricted from working, use the restriction types of Lost Time.
    * Depending on the restriction type selected, more input fields may expand for more entry details about the specific restriction.
* Comment: This is a free text field to type in any comment regarding the restriction if needed or to add any more information regarding specifics to the restriction.
* Problem: This is an autocomplete field but also allows free text.  You would most likely key in the patient's current condition from their problem list that this restriction may be related to.  If you push your down arrow key ↓on your keyboard it will display the patient's current problem list (conditions) you could select from.  Or you can free text in this field also. Anything typed here does not affect the patient's problem list.
* Disability Criteria: This checkbox may be used for safety teams. The provider would write/add a new restriction here, but the safety team would come into this restriction and edit and mark the checkbox if applicable.
* Affect Work: If the encounter visit you are in is linked to an incident, this will be checkmarked.
* Occupational WC: If the encounter visit you are in is linked to a case/incident, this will be checkmarked.
* Start Date/End Date/Permanent: The Start Date will default to today's date and time. However, a restriction must have an end date OR be marked as a permanent restriction (meaning no end date).  The End Date or the Permanent checkbox will need to be documented (required field).

![](../adding-restrictions.assets/6843cf5c9cb765eb09d8cdbc8c841df0.png)

When picking an end date for a clinical restriction from the popup calendar, the end time will default to 11:59pm. If you leave the "End Time" field blank, it will also default/assume to 11:59pm.

NOTE: The only way around signifying a specific end date and not marking the restriction (with no end date) as permanent would be if the user has security permission to *Allow Open Restrictions*.  If a user has permission to Allow Open Restrictions, then it allows the user to create & save restrictions without keying in an end date, not having to mark it permanent.  Use caution if allowing this security permission.

* Provider: This autocomplete field currently points to select users within the department "Physicians", but can be changed to point to a different department by having your MIE Implementer change the layout: Restriction Providers. By default, if the logged in user is a member of the department this field points to, it will populate that user's name here in the field automatically. You may want to document a restriction on a patient/employee that an outside provider (not internal) put them on, especially for case management.  In this case, you may want to have your system set up to point to a different department as stated above where active & inactive users (via a layout tag) can be set to that department to show up as choices here.
* Linked Case:  If the encounter visit you are in is linked to a case/incident, that case/incident info will prepopulate here.  If you are adding a restriction and accommodation that should be tied to a different case/incident, you can use this field to auto-complete to link it to the appropriate case/incident.  If you click your down arrow key ↓ on your keyboard, it will display incidents on that chart to link to.
* Exclude from Notification Email: This functionality is only available if your system has a scheduled job configured to automatically email newly added or changed restrictions/accommodations to patient/employee and documented supervisors.  If such scheduled job is configured for the system, then the email should respect this checkbox, so when checked, the email would not be sent out upon adding, editing or updating a restriction/accommodation in the chart.

If you know (while you are entering in the new restriction) what the accommodation will be for this chart, then you can fill out the accommodation fields within the accommodation section.

![](../adding-restrictions.assets/6dfc1ccfdfbefe2596d4ec99adea3b77.png)

When the user is done with the entire encounter and other sections, when this encounter is saved and closed, a Work Status document may also be created (an additional encounter view) and saved as a result of this encounter and restrictions being added.  The Work Status document can be housed in any chart tab if your practice is set up that way.  The Work Status document created from this encounter could then be emailed to the employee and/or leader.  If there were no work restrictions added to the encounter, the Work Status document will still create and save in the chart but it will state "There were no work restrictions added on this encounter."

## Extend/Repeat/End Past Restrictions while in Encounter

You have the opportunity to repeat, extend, or end past (active or inactive) restrictions in the chart.  This is to help with efficiency by not having to key in the same restriction the patient has had in the past.  Click the Extend/Repeat/End Past Restrictions hyperlink to see a list of past restrictions (active or inactive) on that patient.

![](../adding-restrictions.assets/a6a2a62e70e655316d826c72753cc23f.png)

You will see the list of past restrictions (active or inactive) on that chart.  It lists them in a line with detail. At the end of each listed restriction, there is a checkbox.  At the very top in the title column, there is a checkbox also. The very top column checkbox is an "apply all", meaning it will apply a check on every listed restriction it displays.  Otherwise you can pick and choose by checking which past restrictions you wish to repeat, extend or end.

![](../adding-restrictions.assets/8db7480cc97761df428d533e6b4d79d2.png)

Whatever restrictions listed here that are checkmarked, can be applied quickly to today's encounter visit on the chart without having to rekey in all those fields.  You would then just set the start & end/permanent dates for that restriction and apply it to today's visit on the patient. Click the SAVE or NEXT button to save your work.

There is an END ALL button in the restrictions sub sections.  Performing End All button in the restrictions subsection means it will automatically apply an end date of "today" on all restrictions listed.  If you click End All in the accommodations subsection, it will apply an end date of "today" on all accommodations listed.  It will automatically refresh your screen and show you that in the summary.

![](../adding-restrictions.assets/8bc9eaeb2af775ca2f1cc235c2aba5ee.png)

### Edit Form Quick Link

The Edit Form hyperlink is simply a quick way to get to the fields to add a brand new restriction and/or accommodation if you decided not to extend/repeat/end any past ones. This hyperlink gets you back quickly to enter in a new one without having to collapse the section and get back in.

![](../adding-restrictions.assets/d926a0fa2e20bcca75c68de7160f2eb0.png)

{{% note %}}
If the chart didn't have any past restrictions (active or inactive) then you would not see the Extend/Repeat/End Past Restrictions hyperlink.
{{% /note %}}

## Delete Restrictions

If you entered in an incorrect restriction, you can click the trash can icon next to which item you wish to delete.  Upon clicking the trash can icon, a pop-up will appear to ask you to confirm deletion. Once it's deleted it cannot be un-deleted.

![](../adding-restrictions.assets/d0bb1caa90965e8ee306ecdf4f3361af.png)

**Edit Restrictions**

If you entered in a restriction but just need to edit a portion of it due to an error or revising to update information that is in effect, click the pencil icon next to which item you need to edit.

{{% info %}}
You would not edit an existing restriction to extend or change restriction type for something already actively current on the chart etc.
{{% /info %}}

When you click the pencil icon (to edit) the restriction fields of the one you selected will open.  Edit what you need. Click the Save button.

![](../adding-restrictions.assets/01d8585e6199f76bfaa4bed1114933f3.png)

## Current Restrictions Visibility

Current restrictions, that encompass today's date, are shown in various places when working in the chart.  Please read the other [Viewing Restrictions](viewing-restrictions.md) documentation for specific details, but a couple areas are:

### Dark Gray Demographic Bar

Current restrictions, that encompass today's date, are always shown in the dark gray chart demographic information bar.  This provides quick visibility to current restrictions for the chart while working in it.

![](../adding-restrictions.assets/a9940e08aa952c5211cf23b62776ee6e.png)

### Restrictions/Lost Time stand alone Chart Tab

Any active current restrictions for a chart are shown on the stand alone chart tab *Restrictions/Lost Time* found in the Admin parent chart tab.

![](../adding-restrictions.assets/45729643f432b52ea5d434706afe0227.png)

### Side Chart

Current active restrictions are viewable from the side chart within the demographics section.

![](../adding-restrictions.assets/4ab7e69d35c018ddfac3f4b6aefdc34c.png)

Also, any active current restrictions that are specifically linked to a case/incident are also shown on the side chart.  When you open the side chart, open cases/incidents are shown and when you expand it, the linked restrictions & accommodations will be visible there also.

![](../adding-restrictions.assets/84e3a30309fbefe694909dd84db6e6e3.png)

## Learning Management System

To learn more about Adding Restrictions and Accommodations, follow the link below to the Learning Management System course:

* [Restriction and Accommodation Management](https://mie.talentlms.com/shared/start/key:ALEHRKMF)
