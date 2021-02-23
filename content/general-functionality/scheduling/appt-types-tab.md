---
title: "Appt Types Tab"
date: 2021-02-22T21:41:56.471Z
url: "general-functionality/scheduling/appt-types-tab.html"
author: Edward Grzetich
version: 69
id: 1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo
source: https://drive.google.com/open?id=1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo
menu:
    main:
        name: "Appt Types Tab"
        identifier: "1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo"
        parent: "1tF-Tk_-m1MKjLwr0A48YUO1QRDN6Y6Yu_JPedO_z30w"
        weight: 1160
---
## About <em>Appt Types</em> tab

Use the *Appt Types* tab to view, add, edit, and delete appointment types and appointment templates. 

Appointment types are used to set up basic information about frequently-used appointments. For example, an appointment type can be created for new patient appointments and each time it is used, the system automatically applies a current procedural terminology (CPT) code, appointment duration, visit type, and other characteristics to the appointment. Appointment types help ensure appointments are created uniformly and relieve staff of repetitious work.

Appointment templates are based on appointment types and refine them by associating with them a service location, a default encounter type for documenting the encounter visit resulting from the appointment, and clinical and scheduling instructions for staff. 

To create, edit, and delete appointment types and appointment templates, the *Manage Apt Types* security role needs to be set to *Yes*. See [Security Role Settings](../system-administration/security/security-role-settings.html).

## Viewing appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types. To work with the table, see [Using DataVis Grids - Data Tools](../reports/using-datavis-grids-data-tools.html).![](../../external_files/fdec01eed509f021a2863bf9afdcac3c.png)

## Viewing appointment type templates

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>View Type Templates</strong>. The system displays a table of appointment type templates. To work with the table, see [Using DataVis Grids - Data Tools](../reports/using-datavis-grids-data-tools.html).

![](../../external_files/16ad71bca25bb3ab81cd3f5ed462daf0.png)

## Adding appointment types

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Type</strong>. The <em>Appointment Type</em> section appears. ![](../../external_files/8e2ce61b35710883dffcf09920b56ca4.png)
5. In the <em>Appointment Type</em> section, make entries or selections in fields as appropriate:
    * <em>Active</em>: To make the appointment type active in the system and available to be used after it is created, enable this check box. To make the appointment type inactive in the system and unavailable to be used after it is created, clear this check box. 
    * <em>Code</em>: Enter the appointment code. The entry in this field appears in the schedule next to the patient. Type in the same CPT code for the visit encounter for the appointment type or an alpha-numeric abbreviation of the name of the appointment type.
    * <em>CPT code</em>: Type the appropriate CPT code for billing, auditing, or report purposes. You may also leave this field empty.
    * <em>Duration</em>: Type the amount of time this type of appointment is expected to take.
    * <em>Display order</em>: Type a number by which the system will sort the appointment type for display in the table of appointment types (see [Viewing appointment types](#viewing-appointment-types)) and when scheduling an appointment. The lower the number in this field, the closer to the top of the table and when scheduling this appointment type appears.
    * <em>Duration given to patient</em>: Type the duration of the appointment in minutes to provide to the patient. The system provides this duration when the patient views the appointment, for example when it sends a reminder email. For example, medical staff may be required for 15 minutes of a 60-minute appointment. In this case, the appointment type duration appears on the schedule of the medical staff as a 15-minute appointment and the duration given to patient is 60 minutes.
    * <em>Description</em>: Type in the full name of appointment type you are creating.
    * <em>Default Encounter Type</em>: If your practice uses the <em>Checkin</em> module, select <strong>Checkin</strong>. If your practice uses encounters and wishes to have the systems automatically create and open a type of encounter when a patient is checked in for the visit based on this appointment type, select that <strong>encounter type</strong>.
    * <em>Default Encounter Template</em>: If you selected a default encounter type other than <em>Checkin </em>in the previous field, select <strong>the encounter template with the same name</strong> in this field. Otherwise, select <strong>None</strong>.
    * <em>Dictation Job Type</em>: Select the appropriate dictation job type that the system will apply to dictation added to the encounter from this appointment type. 
    * <em>Print Definitions</em>: Print definitions can be attached to appointment types. Print definitions that are attached to an appointment type this way are noted as appointment type print definitions. Resource options in this section show users in the scheduling realm. To undo print definitions being attached to appt types, you need to remove the print definition(s) from all appointment types and use the print definition editor to remove the appt type designation.
    * <em>Title Color</em>: Type a hexadecimal color value or select the <strong>eye dropper button</strong> to select a color from a palette. This color applies to the title bar, the first line of an appointment in the scheduler view that shows the appointment time and patient name. If you do not select a color, the system displays the title without a color.  ![](../../external_files/8270857b0723b32a6e20f373badba837.png)
    * <em>Color</em>: Type a hexadecimal color value or select the <strong>eye dropper button</strong> to select a color from a palette. If you do not select a color, the system displays the appointment body  without a color.
    * <em>Comment</em>: Type comments to appear in the <em>Comments</em> field when scheduling an appointment based on this appointment type. This entry also appears in the <em>Scheduler</em> view under the patient's appointment date and time. 
6. Do one:
    * Select <strong>Submit</strong> to update the appointment type list and any future appointments made from this appointment type. No changes are made to any existing appointments based on this appointment type or any schedule templates for this type.
    * Select <strong>Submit & Update</strong> to update the appointment type list and also update all existing patient appointments based on this appointment type and updates any existing schedules with this appointment type.

## Add an appointment type template

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Template</strong>. The <em>Add Appointment Type Template</em> section appears. ![](../../external_files/187b9dba13a605264b79bfb5bfbdcc0c.png)
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
    <td>**Appointment type template 1**</td>
    <td>**Appointment type template 2**</td>
    <td>**Appointment type template 3**</td>
    <td>**Appointment type template 4**</td>
    <td>**Appointment type template 5**</td>
    <td>**Appointment type template 6**</td>
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

If no location is chosen, your choices for appointment types and resources will be associated with all locations. These templates will have the same durations and durations given to patient as the corresponding appointment type that was selected. Appointment types created this way can be edited by using the *Edit* link in the appointment templates table. See [Viewing appointment types](#viewing-appointment-types).

If you try to create multiple appointment type templates for a combination of resources, appointment types, and locations that already exists, the system will not overwrite the existing appointment type templates and will present a message indicating those that were not created.

1. Select the side menu. The side menu appears.
2. From the side menu, select <strong>Scheduler</strong>. A schedule for the day appears.
3. At the top of the page, select <strong>Appt Types</strong> tab. The system displays a table of appointment types.
4. At the top-right of the page, select <strong>Add Multiple Templates</strong>. The <em>Add Multiple Templates</em> section appears. ![](../../external_files/3ff52f1b234f4b323946115e5b572cf4.png)
5. In the <em>Appointment Type</em> field, do the following to select one or more appointment types:
    1. To create appointment templates based on all appointment types, select <strong>Select All</strong>.
    2. To clear selected appointment types, select <strong>Un-Select All</strong>.
    3. To search for an appointment type, type its name in the field. The system displays matching appointment types in the menu.
    4. Select one or more <strong>appointment types</strong>.
6. In the <em>Resource</em> field, do the following to select one or more resources:
    5. To create appointment templates including all resources, select <strong>Select All</strong>.
    6. To clear selected resources, select <strong>Un-Select All</strong>.
    7. To search for a resource, type its name in the field. The system displays matching resources in the menu.
    8. Select one or more <strong>resources</strong>.
7. In the <em>Location</em> field, do the following to select one or more locations:
    9. To create appointment templates including all locations, select <strong>Select All</strong>.
    10. To clear selected locations, select <strong>Un-Select All</strong>.
    11. To search for a location, type its name in the field. The system displays matching locations in the menu.
    12. Select one or more <strong>locations</strong>.
8. Select the <strong>Create Templates</strong> button. If the selected appointment types, resources, and locations do not conflict with existing appointment templates, the system creates and displays the new appointment templates in the list of appointment type templates. Otherwise, the system indicates one or more appointment type templates exists and does not overwrite them.

### Viewing appointment types

Click this to view the list of appointment types in the system. It's the same summary list that pops up with the main Appt Types tab and like Alphabetize Types.

![](../../external_files/fdec01eed509f021a2863bf9afdcac3c.png)

You can edit a type from here by clicking **edit** to the far right of the type you select.

You can also *delete* an appt type from here (if you have the security access to do so).

### View Type Templates

Click this to view all the existing appointment type templates in the system. These type templates were created using the *Add Template* link or the *Add Multiple Templates* link (see page 4 & 5 of this help documentation).

You can edit or delete a type from here by clicking the selection in the options column of the Appt Template. There is also a "search" filter at the top to search for existing appointment type templates.

## Editing or Deleting an Appointment Type

Click *Edit* from the appointment types tab or from Alphabetize Types link/option or from View Types link/option in this screen.

Edit any fields. (See detailed descriptions of each field in the above help documentation section called APPT TYPE on page 2 above.)

At the top of the edit screen it also notes how many appointments are already scheduled with this appointment type you are about to edit. It also notes how many schedules use this appointment type you are about to edit. Depending on the button that you select after editing the appointment type (selecting SUBMIT or SUBMIT & UPDATE) the edits done may or may not affect those appointments already scheduled with this appt type or schedules attached to this appt type.

![](../../external_files/3198560663df7fb5bcda23e8d3cdc637.png)

* Click <strong>Submit:</strong> This will only update the appt type list with the edits you made and any future appointments made from here on. It does not change the appt type information for any appointments already existing/scheduled for this appt type or any schedule templates for this type. If you click this, it will give you a confirmation at the top. If you are editing appointment type <em>codes</em> (the abbreviation), please make sure you click submit & update instead, otherwise the system will not be able to find that appointment type for any existing appointments already scheduled using that type.
* Click <strong>Submit & Update:</strong> This will update the appt type list and it also updates all existing patient appointments for this type and updates any existing schedules with this appt type with all edits you have made. If you click this, it will give you a confirmation at the top. If you edit the appt type <em>code,</em> you should click submit and update.
* 
