---
id: '1iIBBj7YhPN--toi1eztojxqRu70YpPCulg8vowFjRlg'
title: 'Adding Restrictions and Accommodations'
date: '2022-01-04T12:03:57.110Z'
version: 126
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'viewing-restrictions-and-accommodations.md'
  - 'editing-restriction-types.md'
source: 'https://drive.google.com/open?id=1iIBBj7YhPN--toi1eztojxqRu70YpPCulg8vowFjRlg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The restriction management function provides for the recording and documenting of restrictions (both personal as well as work-related). Users may initiate an encounter exam to document and authorize work restrictions.  Restrictions are also available for viewing throughout {{% system-name %}} from a header, or from its own chart tab outside of an encounter exam.

## Adding a New Restriction

While working in an encounter, the Plan area of the encounter offers a section named Restrictions and Accommodations. This is the section where new restrictions get entered in for visits. If you need to simply view current restrictions a patient has on their chart, please refer to [Viewing Restrictions and Accommodations](viewing-restrictions-and-accommodations.md) detailed document.

![](../adding-restrictions-and-accommodations.assets/e486e72b8f2fe3809b0888e0aea7d780.png)

Expand the Restrictions and Accommodations section in the encounter to document new or update/revise current active restrictions. When expanded, all active restrictions will display.

{{% info %}}
Accommodations on a restriction will be indented underneath the restriction.  It is possible for accommodations to show/list without a restriction tied to it, so in that case, those accommodations are not indented.
{{% /info %}}

![](../adding-restrictions-and-accommodations.assets/66059b12389f8960bbb9a1ca40960e1d.png)

If you are in "detailed" view for the Restrictions and Accommodations encounter section, any accommodation related to a restriction is in a separate column on the same restriction line item.  It is possible for accommodations not to be tied to a restriction and for restrictions not to have accommodations and those would be listed separately.

![](../adding-restrictions-and-accommodations.assets/3d76b14831e4d9b85a5f9310d73e19ec.png)

To add a new restriction, simply click on the section title bar Restrictions and accommodations to expand and open that encounter section.

![](../adding-restrictions-and-accommodations.assets/f17a99e3d7e976516aa321e1eb65b843.png)

Once you do that, you will see again a list of all current active restrictions and/or accommodations for the chart.  Below that summary, you will see the fields and the ability to add new restrictions and an accommodation (if needed) with that restriction.  For more information on how to show/hide inactive restrictions and accommodations, please refer to [Viewing Restrictions and Accommodations](viewing-restrictions-and-accommodations.md) help guide.

![](../adding-restrictions-and-accommodations.assets/64d90914f5f89ff7be46467314e99d2a.png)

Complete the Restriction fields to add a new restriction on the chart for this visit. Several fields are auto-completes that offer built in choices. The Restriction fields are described as:

* Restriction Type: Begin typing in the name or type of restriction.  The system will autocomplete preformatted choices for you.  Restriction types are programmed by MIE or your Super Admin in the [Editing Restriction Types](editing-restriction-types.md) found in Control. If the person is restricted from working, use the restriction type of Lost Time.  Depending on the restriction type selected, more input fields may expand for more entry details about the specific restriction.
* Comment: This is a free text field to type in any comment regarding the restriction if needed or to add any more information regarding specifics to the restriction.
* Problem: This is an autocomplete field but also allows free text.  You would most likely key in the patient's current condition from their problem list that this restriction may be related about.  If you push your down arrow key ↓on your keyboard it will display the patient's current problem list (conditions) you could select from.  Or you can free text in this field also. Anything typed here does not affect the patient's problem list.
* Disability Criteria: This checkbox may be used for safety teams. The provider would write/add a new restriction here, but the safety team would come into this restriction and edit and mark the checkbox if applicable.
* Affect Work: If the encounter visit you are in is linked to an incident, this will be checkmarked.
* Occupational WC: If the encounter visit you are in is linked to a case/incident, this will be checkmarked.
* Start Date/End Date/Permanent: When adding a restriction, the permanent flag must be checked or an end date must be set.  The Start Date will default to today's date and time. The End Date or the Permanent checkbox will need to be documented (required field).  When picking an end date for a clinical restriction from the popup calendar, the end time will default to 11:59pm. If you leave the "End Time" field blank, it will also default/assume to 11:59pm.
* Provider: This autocomplete field currently points to select users within the department "Physicians", but can be changed to point to a different department by having your MIE Implementer change the layout: Restriction Providers. By default, if the logged in user is a member of the department this field points to, it will populate that user's name here in the field automatically. You may want to document a restriction on a patient/employee that an outside provider (not internal) put them on, especially for case management.  In this case, you may want to have your system set up to point to a different department as stated above where active & inactive users (via a layout tag) can be set to that department to show up as choices here.
* Linked Case:  If the encounter visit you are in is linked to a case/incident, that case/incident info will prepopulate here.  If you are adding a restriction and accommodation that should be tied to a different case/incident, you can use this field to auto-complete to link it to appropriate incident.  If you click your down arrow key ↓ on your keyboard, it will display incidents on that chart to link to.
* Exclude from Notification Email: This functionality is only available if your system has a scheduled job configured by MIE to automatically email newly added or changed restrictions/accommodations to patient/employee and documented supervisors.  If such scheduled job is configured for the system, then the email should respect this checkbox, so when checked, the email would not be sent out upon adding, editing or updating a restriction/accommodation in the chart.

Continue to add an accommodation to this restriction if you have accommodations known for the restriction.  Workflow may be for a case manager to determine accommodation and document the accommodation later. Accommodation fields are described further down in this guide.

![](../adding-restrictions-and-accommodations.assets/f1e1baaa4977731a9463b5c76695042b.png)

If you do not have any known accommodations to tie to this restriction yet, simply click the Save button to save and apply this restriction to the chart.  You or a case manager, etc can later add an accommodation to the new restriction when you know what the accommodation will be.  However, if you know (while you are entering in the new restriction) what the accommodation will be for this chart, then you can fill out the accommodation fields on the right side column next to the new restriction.

![](../adding-restrictions-and-accommodations.assets/ee6b3a6059488af898c3adff22621ada.png)

If you did not / could not enter in accommodations for that restriction yet, the restriction will show in the next encounter section titled Restrictions pending accommodation.  You or other staff, who makes accommodations on restrictions, can at some point enter the accommodations here or via the separate chart tab Restrictions/Lost Time.  You can also access to add accommodations from the encounter section Restrictions and Accommodations and clicking on the edit link on that restriction.

When the user is done with the entire encounter and other sections, when this encounter is saved and closed, a Work Restriction Document may also be created (an additional encounter view) and saved as a result of this encounter and restrictions being added.  The Work Restriction document can be housed in any chart tab if your practice is set up that way.  The Work Restriction Document created from this encounter could then be emailed to the employee and/or leader.  If there were no work restrictions added to the encounter, the Work Restriction document will still create and save in the chart but it will state "There were no work restrictions added on this encounter."

## Adding an Accommodation to a Restriction

### When Entering the Restriction

While you are entering in a restriction, you can enter in the corresponding accommodation if known.  Otherwise, someone else can enter in an accommodation later within the same encounter via the section Restrictions pending accommodations or via the separate chart tab named Restrictions/Lost Time.

![](../adding-restrictions-and-accommodations.assets/6b576c0fc2c4894a0f1d6ce286c5799d.png)

* Where Accommodated: The drop-down list of selections here are pre-configured.  These choices are not recommended to be changed as they are used in the OSHA log. The Lost Time choices will count on the OSHA Log for lost time days whereas the others count as restricted days.
* Accommodation Details: This is a free text field to type in any details needed.
* Accommodation Start/End dates: The start and end dates/times will default to be the same as what the specific restriction is, but you can override to change any specific on accommodations.
* Leader: This is an auto-complete field pointed to users in the "Providers" department, but if that department doesn't exist in your system, then the autocomplete will point autocomplete choices of any/all users in the system.  Contact your MIE Implementer if you wish to have this field pointed to a different department of users. It will not accept/save free type.

Once you have entered in an accommodation, click the Save button or the Next button to collapse the section.

### When Restriction is Pending Accommodation

If a provider has entered in a restriction and does not know the accommodation yet, it will place that restriction in the Restriction pending Accommodation section of the encounter.  Here, once an accommodation is known or received, a staff member can add that accommodation to the restriction.  Simply click on the section title bar Restrictions pending accommodation to open and expand that section.

![](../adding-restrictions-and-accommodations.assets/57d28edd365fae2111bf96aeb5e31a1b.png)

Again, you have checkboxes on the far right to "apply all" a checkmark or pick and choose which listed restrictions need the accommodation details you are about to set.  You can set one accommodation detail to many restrictions using those checkboxes, but if each restriction has a different accommodation, then you will need to do them individually.

Checkmark which restriction to apply an accommodation to.  Then go down to the Accommodation fields and fill out the detail. Click Save to save your work and continue with to select another restriction to apply an accommodation to. Or click Next button to save your work, collapse the section and continue working in the encounter.

![](../adding-restrictions-and-accommodations.assets/c24962309e30ac949dd88040a8413f77.png)

### When Editing a Restriction

You can also add an accommodation to a restriction via the "edit" icon on the restriction.  The icon looks like a pencil. Clicking edit will open the restriction details and provide the accommodation section to document an accommodation if needed.

![](../adding-restrictions-and-accommodations.assets/eba3625f7a6e4cbcbfeab00d312a0ee4.png)

## Extend/Repeat/End Past Restrictions

You have the opportunity to repeat, extend, or end past (active or inactive) restrictions in the chart.  This is to help with efficiency by not having to key in the same restriction the patient has had in the past.  Click the Extend/Repeat/End Past Restrictions hyperlink to see a list of past restrictions (active or inactive) on that patient.

![](../adding-restrictions-and-accommodations.assets/e5f014c3ff24141b1ab3c46a6fc1dfda.png)

You will see the list of past restrictions (active or inactive) on that chart.  It lists them in a line with detail. At the end of each listed restriction & accommodation section, there is a checkbox.  At the very top in the title column, there is a checkbox also. The very top column checkbox is an "apply all", meaning it will apply a check on every listed restriction it displays.  Otherwise you can pick and choose by checking which past restrictions you wish to repeat, extend or end. Do the same for any accommodations you wish to extend, end or repeat.

![](../adding-restrictions-and-accommodations.assets/63f88a911f2bd508b54960fdf2b7e4e3.png)

Whatever restrictions and/or accommodations listed here that are checkmarked, can be applied quickly to today's encounter visit on the chart without having to rekey in all those fields.  You would then just set the start & end/permanent dates for that restriction and/or accommodation and apply it to today's visit on the patient. Click the SAVE or NEXT button to save your work.

There is an END ALL button in the restrictions and also accommodations sub sections.  Performing End All button in the restrictions subsection means it will automatically apply an end date of "today" on all restrictions listed.  If you click End All in the accommodations subsection, it will apply an end date of "today" on all accommodations listed.  It will automatically refresh your screen and show you that in the summary.

![](../adding-restrictions-and-accommodations.assets/51c6687ad09031fc6c48fe5a002133b5.png)

### Edit Form Quick Link

The Edit Form hyperlink is simply a quick way to get to the fields to add a brand new restriction and/or accommodation if you decided not to extend/repeat/end any past ones. This hyperlink gets you back quickly to enter in a new one without having to collapse the section and get back in.

![](../adding-restrictions-and-accommodations.assets/bb09cf030857ea329ad18ae96bf07faa.png)

{{% note %}}
If the chart didn't have any past restrictions (active or inactive) then you would not see the Extend/Repeat/End Past Restrictions hyperlink.
{{% /note %}}

## Delete Restrictions/Accommodations

If you entered in an incorrect restriction and/or accommodation, you can click the trash can icon next to which item you wish to delete.  Upon clicking the trash can icon, a pop-up will appear to ask you to confirm deletion. Once it's deleted it cannot be un-deleted.

![](../adding-restrictions-and-accommodations.assets/979c7b19c9789694f3ad968a30382acc.png)

{{% warning %}}
Deleting an accommodation only will mark related restrictions as not accommodated.
{{% /warning %}}

**Edit Restrictions/Accommodations**

If you entered in a restriction and/or accommodation but just need to edit a portion of it due to an error or revising to update information that is in effect, click the pencil icon next to which item you need to edit.

{{% info %}}
You would not edit an existing restriction or accommodation to extend or change restriction type for something already actively current on the chart etc.
{{% /info %}}

When you click the pencil icon (to edit) the restriction and accommodation fields of the one you selected will open.  Edit what you need. Click the Revise or Update button.

* Revise is used when you are correcting/editing something that was entered in as an error.
* Update is used when you are changing information to something new that had been in effect for this restriction.

![](../adding-restrictions-and-accommodations.assets/3110af502ffb07a6a0fc90914beafcef.png)

## Current Restrictions Visibility

Current restrictions, that encompass today's date, are shown in various places when working in the chart.  Please read our other [Viewing Restrictions and Accommodations](viewing-restrictions-and-accommodations.md) documentation for specific details, but a couple areas are:

### Dark Grey Demographic Bar

Current restrictions, that encompass today's date, are always shown in the dark grey chart demographic information bar.  This provides quick visibility to current restrictions for the chart while working in it.

![](../adding-restrictions-and-accommodations.assets/a9940e08aa952c5211cf23b62776ee6e.png)

### Side Chart

Any active current restrictions that are specifically linked to a case/incident are also shown on the side chart.  When you open the side chart, open cases/incidents are shown and when you expand it, the linked restrictions & accommodations will be visible there also.

![](../adding-restrictions-and-accommodations.assets/84e3a30309fbefe694909dd84db6e6e3.png)
