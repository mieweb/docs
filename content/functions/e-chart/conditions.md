---
id: '1xWR8UvNro2Aic07QeoMCZ36-vWg81dasBtovoe9FLg0'
title: 'Conditions'
date: '2024-04-22T14:18:25.660Z'
version: 308
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1xWR8UvNro2Aic07QeoMCZ36-vWg81dasBtovoe9FLg0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Viewing a Patient's Conditions

Conditions can show in the top summary portion of the patient's information in most chart tabs *if* you have the My Settings preference for *Show Conditions in Med Header* set to Yes.

![](../conditions.assets/1de69ef9292dd6b1a7e0a51a975de981.png)

This is the Med Header:

![](../conditions.assets/a40afc20780831413fd9f2f9c09a8479.png)

The patient's current active conditions show in the Past Medical History portlet and/or Medical History portlet of the Summary tab.

![](../conditions.assets/5626330b6300d70f6d4eb3fd8ffe1c57.png)

They also show in the Conditions chart tab or patient's E-history tab (E-History program must be set up by MIE). And from here can enter in patient conditions (or enter them in the Past Medical History Section of point & click encounters)

![](../conditions.assets/88158a1d44c6d41f25f5bd052e715715.png)

## Viewing List of Conditions

When you are working in a patient's E-Chart, you can click the chart tab at the top named Conditions and it will take you to the patient's condition history also where you can document conditions or family conditions for the patient.

![](../conditions.assets/88158a1d44c6d41f25f5bd052e715715.png)

Once you are in the Conditions module, you will see the patient's *Problem List, Past Medical History, Other Problems, Unconfirmed Conditions, Declined Conditions, and Family History.*

* <strong>Problem List</strong> are patient conditions that are set to ‘Yes' by the radio button when adding the condition. If the Clinical Status is set to Inactive, it will display next to the condition.
* <strong>Past Medical History</strong> are patient conditions that are set to ‘Yes' by the radio button when adding the condition. If the Clinical Status is set to Inactive, it will display next to the condition. The conditions can be current and/or no longer active.
* <strong>Other Problems</strong> are patient conditions that have both the Problem List radio button set to ‘No' and the Past Medical History radio button set to ‘No'.
* <strong>Unconfirmed Conditions</strong> are patient conditions that have a Verification Status set to ‘Unconfirmed'.
* <strong>Declined Conditions</strong> are Unconfirmed patient conditions that have been refuted. When the Unconfirmed Condition is Declined a reason is required.
* <strong>Family History</strong> are conditions held by family members of the patient.

Providers can alter the condition within the Past Medical History section of the Encounter which can alter where the condition falls in the above sections.

![](../conditions.assets/825a856b7ef7d8d644348deb2d38c871.png)

## Documenting a Condition for a Patient

From the Conditions screen, click the Show/Hide Quick Lists icon under the Problem List section.

![](../conditions.assets/50bcd3b794c07882fd8cd5b48e4dcd18.png)

Once the Quick List displays, click the Plus icon to Add a Condition

![](../conditions.assets/a2c40e9f0dde86027d598d10d220fba6.png)

The Add Condition window displays to enter the new condition for the patient.

![](../conditions.assets/f40367b808d74f3ce96f637ac8ab413d.png)

* <strong>Condition Name:</strong> Free-text type the condition name or ICD10 code. It will auto-complete your text to give you choices and you can highlight a choice or you can continue to free-text in a condition. Conditions shown <em>in italics as light grey</em> are non-billable ICD codes from the ICD tables we integrate with. This is a system setting that can be set to different settings to totally hide any conditions they state are non-billable or to leave all conditions as shown.
* <strong>Problem List:</strong> By selecting ‘Yes', the condition is added to the Problem List of the patient conditions.
* <strong>Past Medical History:</strong> By selecting ‘Yes', the condition is added to the Past Medical History list of the patient conditions.
* <strong>Clinical Status:</strong> Set the condition to Active or Inactive. The Problem List defaults to Active. There are also options within Active to set Recurrence or Relapse. Or within Inactive, there are options for Remission or Resolved.
* <strong>Verification Status:</strong> Set the condition to Confirmed, Unconfirmed or Refuted. The Problem List defaults to Confirmed. Under Unconfirmed, the verification can be Provisional or Differential.
* <strong>Managed By:</strong> This is optional to be filled out. It is an auto-complete pointed to the users whom are part of the department set in the system setting <em>Webchart/Settings/Physician Realm</em>. The users in this realm show up as choices for this field. The users need not have this as their <em>primary</em> department. Simply a user being part of the specified realm will allow them to display as choices. This field does not accept free type.

![](../conditions.assets/61acf2893b5d874b896f497d118039be.png)

* <strong>Onset Date:</strong> This is optional. Enter the date this condition began for the patient. If you only type in a year (not month or day ex: 1969) then the month/day will default to 01-01. If you enter a month and year (no day ex: 04-1969) then the day will default to 01. If no date is entered, it will save as 00-00-0000 onset date.
* <strong>Concluded Date (if any):</strong> This is optional. Enter the date this condition concluded for the patient. Month/Day/Year apply as above in Onset Date.
* <strong>Restricted Security:</strong> If this box is checked, the condition will be marked as ‘Restricted' on CCDA or FHIR output.
* <strong>Comments:</strong> Comments stay with the conditions through all encounters. To place an encounter specific note, use the ‘add note' feature or ‘Encounter Note' text box on a new entry.
* <strong>Encounter Note:</strong> This will create a new encounter note with the new condition being added.

* <strong>E&M Categories:</strong> This is optional. You will only get a drop-down for this severity field if you enter a condition that a severity can be applied to. Example: Bronchitis. You could then select a severity of Acute, Chronic, or Self-Limiting from the drop-down. This is optional. Again, this field will only turn on if you enter a valid condition that is tied to these 3 types of severity categories.
* <strong>Private Note:</strong> Setting as a private note will block the note from appearing in pages or documents available to employees.

Click **Save** and it will automatically put it in the appropriate conditions section.

Click **Add Another** and it will save the current condition and open a blank Add Condition pop-up window for a new condition to be entered. Click **Save to Library** to add the condition to the library.

You can use the Quick List for the most commonly used Conditions. Hover over the condition you wish to add. The first Plus icon, if selected, will add the condition to the Past Medical History section. The second Plus icon highlighted in gray, if selected, will add the condition to the Problem List.

![](../conditions.assets/6cf1cf12622001352bba0548bd69f610.png)

### Pregnancy Condition

Under the Past Medical History tab, click the Plus icon to Add Past Pregnancy.

![](../conditions.assets/4259c1cb30590513c3858a68a5c72a8e.png)

The pop-up window will display to allow for documenting the details of each of the past pregnancies. Once all documentation is completed, click the **Save** button.

![](../conditions.assets/3b5d17efa26c91731a5339124e5f9320.png)

### Add Family Condition

If you wish to enter a family medical condition for the patient, click on the Condition tab from the patient chart. Anything entered here is considered a family member condition and will be placed in the Family history section for this patient's conditions summary.

![](../conditions.assets/ccd2b804b02d9b95726e9a8a5416fd55.png)

After you click the Plus sign icon, you will see the *Add Family Condition* fields.

![](../conditions.assets/14d64ff68c700886fc99337a7acb5092.png)

* <strong>Problem:</strong> You are entering one family condition at a time. Simply click the radio button for <em>Name or ICD10</em> and free-text type the family condition name or ICD10 code. It will auto-complete your text to give you choices and you can highlight a choice or you can continue to free-text in a condition.
* <strong>Relationship:</strong> Select from the dropdown which family member had the condition listed above. If you leave the relationship field <em>blank</em>, it will still document the family condition to the patient's history and will assume and mark it ‘unknown' as the
* <strong>Age at Onset:</strong> Type or use the calendar to select the age in which the condition began. ‘=' is used for the exact age the condition began. ‘~' is used for around the age the condition began. ‘?' is used when the age of onset is unknown.
* <strong>Comments:</strong> This field is optional and can be used for any additional comments on the family condition.

When entering family conditions in the dynamic encounter, you will see No Known History and Non-Contributory options available for documentation purposes. No Known History means the patient has no known family history of any diseases/conditions. Instead of specifying a specific condition a family member has, you are doing the opposite and documenting that the patient has no known family history of that specific condition you are entering.

![](../conditions.assets/77beb6f7035148e0dd04cf06956d4374.png)

Click *Save* or *Add Another* and it will automatically list it in the Family history section of the Conditions tab.

### Editing/Deleting a Patient Condition

If you need to edit or delete a condition for a patient, simply click into the Conditions tab. To edit or delete a condition, hover over the condition until the icons appear. To edit, click the Pencil icon.

![](../conditions.assets/94fc7ebfca4f985144fcc351f6cbc02b.png)

The Edit Condition screen will open in a pop-up window. When the *Edit Condition* window appears, you can change any field you need to for this specific condition you selected or type notes into document a reason for deleting or editing, etc. You will see the date the condition was entered and the date(s) any modifications/edits were done to this condition entry from this screen too.

![](../conditions.assets/ca1583c7ad8329ad738258c00652d1c2.png)

Select the submit function you wish to perform:

* <strong>Resolve Now:</strong> Sets the condition to ‘Resolve/Inactive' and moves the condition to the Past Medical History section. It sets the Concluded Date to today's date. This concludes an active patient condition.
* <strong>Add Note:</strong> For additional documentation purposes on the condition.
* <strong>Add Task:</strong> A task can be sent regarding the condition to another user or department.
* <strong>Save:</strong> Save the edited condition and be returned to the Conditions tab.

After you have clicked one of the function buttons, it will then take you back to the patient's condition tab. You can edit another if you wish or continue working in {{% system-name %}} .

Beginning in RC202403, users will be able to view Incident/cases linked to conditions when in Edit Condition mode. When in Edit Condition, the associated incident/case will display beneath the condition name. If an incident/case is not linked to the condition, the **Case** field is completely hidden and not viewable to the end user.  Users will continue to be able to click on View Links to view and navigate quickly to linked encounters, incidents and assessments.

![](../conditions.assets/44fc8818e4d02e97a684d2bd431fae25.png)

To delete a condition, hover over the condition and click on the delete icon.

![](../conditions.assets/fe8e40cb06bf56cd2bd6a5d4fac4e97e.png)

Select the Reason for the deletion from the Remove Condition pop-up window. Once the documentation on the deletion is completed, click on the Remove button.

![](../conditions.assets/3cd637d78a9388a660cd8b2ef9c7a7cf.png)

### Concluding an Active Patient Condition

If you need to conclude an active condition for a patient simply get into the Conditions tab. Look in the Problem List section for the condition you want to conclude. Conclude means that the patient had this condition but no longer has it. Deleting a condition means it was put in error.

To conclude a condition, find the specific condition and hover over it until the icons appear. Click the Pencil icon.

![](../conditions.assets/94fc7ebfca4f985144fcc351f6cbc02b.png)

The Edit Condition screen will open in a pop-up window. Add the Concluded Date if it is different from today's date. Click the Resolve Now button and the condition will be marked as ‘Inactive/Resolved'. It will move from the Problem List to the Past Medical History section. A Concluded Date will be added with either the date entered manually or today's date if none was entered.

![](../conditions.assets/e00ef469bb04039318f95f95d8965148.png)

### Edit, Delete, or Activate a Concluded Condition

If you need to edit, delete or reactivate a concluded condition for a patient simply get into the Conditions tab from the patient chart. Conclude means that the patient had this condition but no longer has it. Deleting a condition means it was put in error. Reactivating it means the condition came back or you concluded it in error, etc.

To edit, delete or activate a concluded condition, find the specific concluded condition and simply hover over the condition until the icons appear. Click on the Pencil icon to Edit or Activate a condition. Click on the Delete icon to Delete a condition.

![](../conditions.assets/87db8b0f570e5c6dbd67a872137d44e8.png)

If you click on the Pencil icon to Edit, the Edit Condition pop-up window appears.

You can change any field you need to for this specific condition you selected or type notes in to document a reason for deleting, editing, or re-activating.

![](../conditions.assets/82bd4053d87b872a2cb59c6623976941.png)

Select the submit function you wish to perform.

* <strong>Resolve Now:</strong> Sets the condition to ‘Resolve/Inactive' and moves the condition to the Past Medical History section. It sets the Concluded Date to today's date. This concludes an active patient condition.
* <strong>Add Note:</strong> For additional documentation purposes on the condition.
* <strong>Add Task:</strong> A task can be sent regarding the condition to another user or department.
* <strong>Save:</strong> Save the edited condition and be returned to the Conditions tab.

After you have clicked one of the function buttons, it will then take you back to the patient's condition tab. You can edit another if you wish or continue working in {{% system-name %}} .

### Editing/Deleting a Family Condition

If you need to edit or delete a family condition for a patient simply get into the Conditions tab from the patient chart.

You will see the Family history section if you scroll down to the bottom of the screen. It is the last category in the patient's conditions summary screen.

To edit or delete a family condition, simply hover over the condition until the icons appear. Click the Pencil icon to Edit the condition. Click the Trash Can icon to Delete the condition.

![](../conditions.assets/075a67892a8ee45447be9fd91707367e.png)

You will then be taken to the Edit Family Condition window.

You can change any field you need to for this specific family condition you selected or type notes in to document a reason for deleting or editing, etc.

![](../conditions.assets/f5f78679fd0f3748f0c1d700c9d4a528.png)

Select the submit function you wish to perform.

* <strong>Add Task:</strong> A task can be sent regarding the condition to another user or department.
* <strong>Save:</strong> Save the edited condition and be returned to the Conditions tab.

After you have clicked one of the function buttons, it will then take you back to the patient's condition tab. You can edit another if you wish or continue working in {{% system-name %}} .

## Condition View Links

To view a Condition link, click on the Condition tab from the patient chart. Hover over the condition you wish to view the link until the icons display. Click on the Pencil icon.

![](../conditions.assets/b1702597edcbc9646ea13a17e25ae1f7.png)

The Edit Condition window will open. Click on the View Links link. The links to encounters and documents will display. Click on any one you wish to display.

![](../conditions.assets/bf2aba701f7c30ddbdf6c20467e85cb9.png)
