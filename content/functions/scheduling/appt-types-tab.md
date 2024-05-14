---
id: '1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo'
title: 'Appt Types Tab'
date: '2024-05-14T15:09:11.459Z'
version: 191
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/document/u/0/d/1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM/edit'
  - 'https://docs.google.com/document/u/0/d/1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY/edit'
source: 'https://drive.google.com/open?id=1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
# About Appt Types tab

Use the *Appt Types* tab to view, add, edit, and delete appointment types and appointment templates.

Appointment types are used to set up basic information about frequently-used appointments. For example, an appointment type can be created for new patient appointments and each time it is used, the system automatically applies a current procedural terminology (CPT) code, appointment duration, visit type, and other characteristics to the appointment. Appointment types help ensure appointments are created uniformly and relieve staff of repetitious work.

Appointment templates are based on appointment types and refine them by associating with them a service location, a default encounter type for documenting the encounter visit resulting from the appointment, and clinical and scheduling instructions for staff.

To create, edit, and delete appointment types and appointment templates, the *Manage Apt Types* security role needs to be set to *Yes*. See [Security Role Settings](https://docs.google.com/document/u/0/d/1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM/edit).

## Viewing appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types. To work with the table, see [Using DataVis Grids - Data Tools](https://docs.google.com/document/u/0/d/1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY/edit).
    ![](../appt-types-tab.assets/f98c6e8b6d13c17911c0fa2b33fb42f4.png)

## Viewing appointment type templates

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>View Type Templates</strong>. The system displays a table of appointment type templates. To work with the table, see [Using DataVis Grids - Data Tools](https://docs.google.com/document/u/0/d/1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY/edit).

![](../appt-types-tab.assets/a769e526984f2a6bd4e7954737bb8734.png)

## Adding appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Type</strong>. The <em>Appointment Type</em> section appears.  
    ![](../appt-types-tab.assets/a1b82ab9fa91bad4fc1d0ab64bd5a602.png)
5. In the <em>Appointment Type</em> section, make entries or selections in fields as appropriate:
    1. <em>Active</em>: To make the appointment type active in the system and available to be used after it is created, enable this check box. To make the appointment type inactive in the system and unavailable to be used after it is created, clear this check box.
    2. <em>Code</em>: Enter the appointment code. The entry in this field appears in the schedule next to the patient. Type in an alpha-numeric abbreviation of the name of the appointment type. In releases prior to RC202203 this field is limited to 10 characters. For release RC202203 and newer the character count was increased to 15 characters.
    3. <em>CPT code</em>: Type the appropriate CPT code if licensed to use AMA CPT codes or enter a customcode for billing, auditing, or report purposes. You may also leave this field empty.
    4. <em>Duration</em>: Type the amount of time this type of appointment is expected to take.
    5. <em>Display order</em>: Type a number by which the system will sort the appointment type for display in the table of appointment types (see [Viewing appointment types](#viewing-appointment-types)) and when scheduling an appointment. The lower the number in this field, the closer to the top of the table and when scheduling this appointment type appears.
    6. <em>Duration given to patient</em>: Type the duration of the appointment in minutes to provide to the patient. The system provides this duration when the patient views the appointment, for example when it sends a reminder email. For example, medical staff may be required for 15 minutes of a 60-minute appointment. In this case, the appointment type duration appears on the schedule of the medical staff as a 15-minute appointment and the duration given to patient is 60 minutes.
    7. <em>Description</em>: Type in the full name of appointment type you are creating.
    8. <em>Default Encounter Type</em>: If your practice uses the <em>Checkin</em> module, select <strong>Checkin</strong>. If your practice uses encounters and wishes to have the systems automatically create and open a type of encounter when a patient is checked in for the visit based on this appointment type, select that <strong>encounter type</strong>.
    9. <em>Default Encounter Template</em>: If you selected a default encounter type other than <em>Checkin</em> in the previous field, select <strong>the encounter template with the same name</strong> in this field. Otherwise, select <strong>None</strong>.
    10. <em>Dictation Job Type</em>: Select the appropriate dictation job type that the system will apply to dictation added to the encounter from this appointment type.
    11. <em>Print Definitions</em>: Print definitions can be attached to appointment types. Print definitions that are attached to an appointment type this way are noted as appointment type print definitions. Resource options in this section show users in the scheduling realm. To undo print definitions being attached to appt types, you need to remove the print definition(s) from all appointment types and use the print definition editor to remove the appt type designation.
    12. <em>Title Color</em>: Type a hexadecimal color value or select the <strong>eye dropper button</strong> to select a color from a palette. This color applies to the title bar, the first line of an appointment in the scheduler view that shows the appointment time and patient name. If you do not select a color, the system displays the title without a color.   
        ![](../appt-types-tab.assets/163ddebd0bfb29f36970a0513e336838.png)
    13. <em>Color</em>: Type a hexadecimal color value or select the <strong>eye dropper button</strong> to select a color from a palette. If you do not select a color, the system displays the appointment body  without a color.
    14. <em>Comment</em>: Type comments to appear in the <em>Comments</em> field when scheduling an appointment based on this appointment type. This entry also appears in the <em>Scheduler</em> view under the patient's appointment date and time.
6. Do one:
    1. Select <strong>Submit</strong> to update the appointment type list and any future appointments made from this appointment type. No changes are made to any existing appointments based on this appointment type or any schedule templates for this type.
    2. Select <strong>Submit & Update</strong> to update the appointment type list and also update all existing patient appointments based on this appointment type and updates any existing schedules with this appointment type.

## Add an appointment type template

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Template</strong>. The <em>Add Appointment Type Template</em> section appears.  
    ![](../appt-types-tab.assets/df724ee8506f2b241becc633fe31e905.png)
5. In the <em>Add Appointment Type Template</em> section, make entries or selections in fields as appropriate:
    * <em>Apt Type</em>: Select the appointment type the template will create when used to schedule an appointment.
    * <em>Resource</em>: Select the resource (such as a physician) that when scheduled, this appointment type template will reserve.
    * <em>Location</em>: Select the location where the appointment type can be scheduled.
    * <em>Duration</em>: Type the amount of time in minutes for which this appointment will reserve the resource.
    * <em>Duration Given to Patient</em>: Type the duration of the appointment in minutes to provide to the patient. The system provides this duration when the patient views the appointment, for example when it sends a reminder email. For example, medical staff may be required for 15 minutes of a 60-minute appointment. In this case, the appointment type duration appears on the schedule of the medical staff as a 15-minute appointment and the duration given to patient is 60 minutes.
    * <em>Reminder</em>: This field is not used. Do not make a selection in it.
    * <em>Scheduling Instructions</em>: This field is not used. Do not type in it.
    * <em>Clinical Instructions</em>: This field is not used. Do not type in it.
6. Select <strong>Submit Template</strong>. The system displays a message indicating the appointment type template was created.

## Adding multiple appointment type templates

Use this method to quickly create multiple appointment type templates for any combination of appointment types, resources, and locations. For example, a medical specialist (the resource) can be scheduled for three appointment types at two locations. This results in six appointment type templates:
<table>
<tr>
<td><strong>Appointment type template 1</strong></td>
<td><strong>Appointment type template 2</strong></td>
<td><strong>Appointment type template 3</strong></td>
<td><strong>Appointment type template 4</strong></td>
<td><strong>Appointment type template 5</strong></td>
<td><strong>Appointment type template 6</strong></td>
</tr>
<tr>
<td>Resource 1</td>
<td>Resource 1</td>
<td>Resource 1</td>
<td>Resource 1</td>
<td>Resource 1</td>
<td>Resource 1</td>
</tr>
<tr>
<td>Appointment type 1</td>
<td>Appointment type 2</td>
<td>Appointment type 3</td>
<td>Appointment type 1</td>
<td>Appointment type 2</td>
<td>Appointment type 3</td>
</tr>
<tr>
<td>Location1</td>
<td>Location 1</td>
<td>Location 1</td>
<td>Location 2</td>
<td>Location 2</td>
<td>Location 2</td>
</tr>
</table>

If no location is chosen, your choices for appointment types and resources will be associated with all locations. These templates will have the same durations and durations given to patient as the corresponding appointment type that was selected.

Appointment types created this way can be edited by using the *Edit* link in the appointment type templates table. See [Viewing appointment type templates](#viewing-appointment-type-templates).

If you try to create multiple appointment type templates for a combination of resources, appointment types, and locations that already exists, the system will not overwrite the existing appointment type templates and will present a message indicating those that were not created.

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Multiple Templates</strong>. The <em>Add Multiple Templates</em> section appears.  
    ![](../appt-types-tab.assets/e30e9df46e140f828a32288c32b31b89.png)
5. In the <em>Appointment Type</em> field, do the following to select one or more appointment types:
    1. To create appointment templates based on all appointment types, select <strong>Select All</strong>.
    2. To clear selected appointment types, select <strong>Un-Select All</strong>.
    3. To search for an appointment type, type its name in the field. The system displays matching appointment types in the menu.
    4. Select one or more <strong>appointment types</strong>.
6. In the <em>Resource</em> field, do the following to select one or more resources:
    1. To create appointment templates including all resources, select <strong>Select All</strong>.
    2. To clear selected resources, select <strong>Un-Select All</strong>.
    3. To search for a resource, type its name in the field. The system displays matching resources in the menu.
    4. Select one or more <strong>resources</strong>.
7. In the <em>Location</em> field, do the following to select one or more locations:
    1. To create appointment templates including all locations, select <strong>Select All</strong>.
    2. To clear selected locations, select <strong>Un-Select All</strong>.
    3. To search for a location, type its name in the field. The system displays matching locations in the menu.
    4. Select one or more <strong>locations</strong>.
8. Select the <strong>Create Templates</strong> button. If the selected appointment types, resources, and locations do not conflict with existing appointment templates, the system creates and displays the new appointment templates in the list of appointment type templates. Otherwise, the system indicates one or more appointment type templates exists and does not overwrite them.

## Editing appointment type templates

1. [View appointment type templates](#viewing-appointment-type-templates).
2. In the <em>Options</em> column of the appointment type template to edit, select <strong>Edit</strong>. The <em>Edit Appointment Type Template</em> section appears.
    ![](../appt-types-tab.assets/73bf2c81e8a2a81f72be6a9b35f3f92e.png)
3. Edit the template.
4. Depending on whether appointments have already been scheduled with this appointment type template, do one:
    1. To update the appointment type template list with the edits you made and any future appointments, select <strong>Submit</strong>. This does not change any appointments already scheduled using this appointment type template. If you click this, it will give you a confirmation at the top. If you are editing appointment type <em>codes</em> (the abbreviation), please make sure you click submit & update instead, otherwise the system will not be able to find that appointment type for any existing appointments already scheduled using that type.
    2. Click <strong>Submit & Update:</strong> This will update the appt type list and it also updates all existing patient appointments for this type and updates any existing schedules with this appt type with all edits you have made. If you click this, it will give you a confirmation at the top. If you edit the appt type <em>code,</em> you should click submit and update.

## Deleting appointment type templates

1. Select the side menu. The side menu appears.
2. From the side menu, select Scheduler. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>View Type Templates</strong>. The system displays a table of appointment type templates.
5. Select the checkbox next to the template you wish to delete

![](../appt-types-tab.assets/d675e8a5a6f2ddcf1be520a678b8c9f6.png)

6. Select the <strong>Delete</strong> button
7. Select the <strong>Yes</strong> button in the pop-up window to confirm you wish to delete the template.

![](../appt-types-tab.assets/febeb3acb9571b0720f84874f4a522b3.png)

## Editing appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. In the <em>Options</em> column of the appointment type to edit, select <strong>Edit</strong>. The <em>Appointment Type</em> section appears.

![](../appt-types-tab.assets/c190146c0cbf24c58be628585800d87a.png)

5. Edit the appointment type.
6. Depending on whether appointments have already been scheduled with this appointment type template, do one:
    1. To update the appointment type template list with the edits you made and any future appointments, select <strong>Submit</strong>. This does not change any appointments already scheduled using this appointment type template. If you click this, it will give you a confirmation at the top. If you are editing appointment type <em>codes</em> (the abbreviation), please make sure you click submit & update instead, otherwise the system will not be able to find that appointment type for any existing appointments already scheduled using that type.
    2. Click <strong>Submit & Update:</strong> This will update the appt type list and it also updates all existing patient appointments for this type and updates any existing schedules with this appt type with all edits you have made. If you click this, it will give you a confirmation at the top. If you edit the appt type <em>code,</em> you should click submit and update.

## Inactivate appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. Select the checkbox next to the appointment type you wish to inactivate
5. Select the Set Status button. The Set Status window appears.

![](../appt-types-tab.assets/6d9b7ac3f6d09c225f2eb2c36cedb1c3.png)

6. To set the status of the appointment type to Inactive, select No. If the status needs to be set to Active, select Yes.

![](../appt-types-tab.assets/db465bd8d7e5bccde998f3dd2887010e.png)

7. Select <strong>Submit</strong>
