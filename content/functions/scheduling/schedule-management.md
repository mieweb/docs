---
id: '1X-ADmVCC8uBszVWfXXg___Ejc7Usf9DFmDnhVTvnq5Q'
title: 'Schedule Management'
date: '2023-11-20T16:31:48.935Z'
version: 156
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - '../system-administration/system-controls/resource-restrictions.md'
source: 'https://drive.google.com/open?id=1X-ADmVCC8uBszVWfXXg___Ejc7Usf9DFmDnhVTvnq5Q'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

Resource schedules can be easily maintained in {{% system-name %}} systems. Adding, editing, and deleting schedules is a simple process, which also allows for copying or templating for fast and efficient onboarding. Additionally, scheduling resources can be limited, or restricted, if necessary, to assist with efficiency and security purposes. For information on general uses and available views within the Scheduler module, review the Scheduler documentation. Following is a breakdown of the available configurations for scheduling functionality.

## Managing Schedules

Review the following information for adding schedules to the system. For information on how to edit or delete existing schedules, see the following section, Editing/Deleting Schedules.

### Adding Schedules

To add a schedule:

1. Navigate to the Scheduler side menu.
2. Click the Schedules tab.
3. Click the Add link.
4. The Scheduler Editor screen opens. Fill out all of the appropriate fields:

![](../schedule-management.assets/1804755d96bd799721f039a7dfa34715.png)

**Start/End time**

Required field. To establish a start and end time for a schedule, use one of two methods, depending on the duration of the schedule block. To establish a schedule with a start/end time, with an indefinite end date, use today's date and the resource's start time for the work day, as well as today's date with the resource's end time for the work day. Otherwise, use the *specific* date/time (range) the schedule is being created/blocked for.

**Duration**

Based on the entered start and end time, the duration will calculate automatically and populate in this field. Otherwise, the start time can be entered, and using the dropdown, choosing the duration will auto-fill the end time. Choosing a duration will set the end time with today's date.

**Resource**

Required field. This is the individual available from the time slots of the schedule. Begin typing the name of the resource and select from the autocomplete. The down arrow (↓) button on the keyboard also displays the available options to be chosen from. To set a schedule to multiple resources, multiple schedules will need to be created by either creating each one, individually, using the **Save info to use again** link at the top of the screen, or the **Copy Schedule** feature, toward the bottom.

**Location**

Entering a location in this field will display the specified location on the schedule. To set the schedule to **all** locations, simply leave this field blank. An entry in this field will narrow resource searching when the location is specified. This field does not show outside locations. To specify, begin typing the location name and select from the autocomplete. Otherwise hit the down arrow (↓) button on the keyboard to see available selections. To set a schedule to multiple locations, multiple schedules will need to be created by either creating each one, individually, using the **Save info to use again** link, at the top of the screen, or the **Copy Schedule** feature, toward the bottom.

{{% tip %}}
When scheduling a resource at multiple locations, the **Warn on Resource Scheduled at Another Location** system setting will control how to warn the user. If the system setting is set to 1, the user will receive a warning after saving the appointment. The warning will appear in the system's *warning* color scheme. If the system setting is set to 2, the user will receive a message that the schedule is not saved. The message will appear in the *alert* color scheme, and the user must force the action to proceed. The force option is only given if the user has the security permission of **Schedule Resource at Multiple Locations** set to *Yes*.
{{% /tip %}}

**Display Appointments Inside Schedule**

If this is selected, all appointments will be made into comments. When displaying a schedule, this setting will cause basic appointment info to display inside the schedule. When a schedule is exported, the appointment info is sent as a comment on the schedule.

**Simultaneous appointment bookings allowed**

This field refers to the number of appointment bookings allowed for the schedule. Type in the maximum number of appointments allowed for the resource(s), *per time slot*. This field defaults to blank, which indicates an unlimited number of appointments, per time slot. This is a setting to allow or regulate overbooking,which also overrides the permission needed when overbooking. For example, if the physician allows three appointments of a specified appointment type per time slot, then this field would be set to 3.

**Total Appointments Allowed**

This is the total number of appointments allowed in the schedule. Type in the maximum number of appointments allowed/restricted to a full day's schedule. For example, if this field is set to 10, there can only be 10 appointments, total, added throughout the day. Setting this field to 0 (zero) indicates that unlimited appointments are allowed for a full day's schedule. This is defaulted to blank, which also indicates an unlimited number of allowed appointments, so a value must be specified.

**Schedule Color**

Select a color for the schedule. The color applies to only the schedule, as a whole.

**Display** **_Add Appointment_**** Links**

Use the dropdown to specify what increments of appointment links will display, which allow adding appointments via a quick link. This will place a link inside the scheduler to add/schedule an appointment *inside* the scheduler, instead of the yellow time links, only. This provides a quick way for adding appointments from the scheduler that uses that specific schedule. The selection of **No** from the dropdown will not display links for this schedule. Selecting **Yes** will display the links at the user's default increment, which is set as Duration in the My Settings preferences.

{{% info %}}
If a specific minute/hour increment is selected, it will display the link with those specified increments on the schedule. When displaying the links to add an appointment, the links will only go until there is enough time for the shortest appointment type's duration to be fulfilled. If there is only one appointment type allowed in the schedule, with a duration of 60 minutes, and the schedule is set to end at 5 pm, then the last link available to schedule an appointment will be 4 pm. If the schedule allows *all* appointment types, the change will have no effect.
{{% /info %}}

**Time Slots Available on Portal**

This dropdown allows the free time to be available for scheduling from the portal, if in use.

**Priority**

This field is used to set a priority level of the schedule being entered. The value can be any number 0 through 10. Priority is meant to give a priority, where the higher value (e.g., 10) will override a lower value (e.g., 0). For example, if there is a need to create an overriding event (e.g., holiday, symposium, etc.), expected to occur (or recur) throughout the year, that event can be set to a priority of 10 and override any previous schedules, which may be daily or previously set for the same date.

**Appointment Types**

This section is used to select and add appointment types allowed for the schedule. This can include as many appointment types as needed. If there is no need to specify allowed appointment types, this can be left blank to allow all appointment types to be scheduled on the schedule. If certain appointment types are to be allowed, select the specific type(s) by using the autocomplete and clicking the Add button. The name description or appointment type code can be used to find the desired appointment type, otherwise, press the down arrow (↓) button on the keyboard to view the first 20 choices, alphabetically. Once the appointment type populates in the Appt Type field, click the **Add** button to link to the schedule. Proceed adding additional appointment types, as needed.

{{% tip %}}
If most of the available appointment types are needed for a schedule, instead of entering each one individually, use the **Add All** link, and use the minus button to remove the few that are not allowable for the schedule.
{{% /tip %}}

{{% info %}}
The **Required** and **Portal** checkboxes allow for specific appointment types to be either required for a specified day/time or available from the portal, or both. For example, if only lab services appointments are seen Wednesdays, the appropriate appointment type would be selected, and the Required checkbox would be checked prior to adding. Likewise, if blood pressure check appointments are expected, or allowed, to be scheduled from the portal, choosing the appropriate appointment type and placing a check in the Portal checkbox will make those available.
{{% /info %}}

**Recurrence (button)**

![](../schedule-management.assets/fe2e00f4e777dc11b40e3e8ebe737a47.png)

This section allows recurrences to be set for a given schedule. Click the **Recurrence** button to set any recurrences to a given schedule. When the button is clicked, the window will expand to show the additional fields to be set. Use the **Occur every** dropdown to choose and set an occurrence interval. This field will default to *Every*. **Duration** is the following dropdown that defaults as a blank entry. Use this dropdown to set the type of time during which the occurrence is expected to continue (e.g., Day(s), Week(s), Month(s), Year(s), etc.). If *Week(s)* is selected as the type of time, then the days of the week will display, below. Select the days the resource is intended to work this schedule

If the schedule is not intended to go on indefinitely, the **Until** date must be set. The recurrence will continue until the specified date is reached, otherwise the schedule will continue to be available, as specified, indefinitely, if left blank, or filled with zeros. If you are editing a schedule and want to remove the recurrence entirely, click the **Cancel Recurrence** button and save the schedule with the edits.

{{% info %}}
If a resource works Mon-Thurs 8 am - 5 pm, with Fridays 8 am - Noon, then Week(s) would be chosen and Monday, Tuesday, Wednesday, and Thursday checkmarked for one schedule, and the other schedule would be made separately. That second schedule would be made by also selecting Week(s), but choosing Friday, only.
{{% /info %}}

**Copy Schedule To (button)**

![](../schedule-management.assets/b700490fcd069f61117e503a99509644.png)

This button allows schedules to be copied to multiple locations and/or resources. When you click on the **Copy Schedule To** button, the fields will expand. You can click the underlined links to perform the specified action (i.e., **Add All Locations w/ Selected Resource** and/or **Add All Resources w/ Selected Location**). The **Clear All** link can be used to start over, if necessary. Additionally, individual locations and/or resources can be set at the bottom, entering each individually and clicking the **Add** button. The Copy Schedule function shows and tracks how many schedules are being copied to. Click **Cancel copying to # schedules** if the copy is no longer needed or needs to be cancelled.

**Comment**

Use the field to add a comment to the schedule for other users to see when viewing schedules from the schedule editor.

1. When the schedule is complete and all fields are configured, as needed, click the <strong>Save</strong> button to create the schedule, or click <strong>Cancel</strong> to dismiss changes and go back to the view.

{{% tip %}}
If this schedule detail is needing to be used again, perhaps at a later time, scroll to the top of the screen **before clicking the Save button**, and click the **Save info to use again** link and it will save the information as a template to be named and used at a later time. This allows the information to be used again, edited as needed, all without having to rekey each field, from scratch. It is a way to *copy* a schedule and save it as a template.
{{% /tip %}}

### Editing/Deleting Schedules

To edit or delete a schedule:

1. Locate the resource's schedule in the Schedules list view by either scrolling through the list, or use the autocomplete fields (at the top of the screen) to filter schedules by resource(s), location(s), or specific appointment type(s).
2. Once the particular schedule has been located, click the <strong>Edit</strong> or <strong>Delete</strong> link in the <strong>Options</strong> column.

![](../schedule-management.assets/a71d8817afc968dfd1cfa51d99b853b7.png)

{{% note %}}
Editing or deleting options are only available if the appropriate security permission is set on the user, to all schedule edits and deletes.
{{% /note %}}

3. After clicking <strong>Delete</strong>, a message will display at the top of the confirmation page, indicating how many appointments exist for that schedule, which may need to be rescheduled prior to deletion. Either confirm deletion, or move scheduled appointments, prior to deleting.

![](../schedule-management.assets/429827c8439c8950b6caad962b99ea41.png)

4. After clicking <strong>Edit</strong>, a message will display at the top of the page, indicating how many appointments already exist for that schedule. If no appointments are found, the alert message does not display. Only appointments expected to occur within the upcoming four (4) weeks of the schedule's configured time frame are tracked.

![](../schedule-management.assets/fb656ab357a25ab42fcd2723dc022cd0.png)

{{% info %}}
A link is available to navigate to an appointment report, which allows appointments to be rescheduled or moved, as necessary. This link loads the Appointments Report and Found Appointments, allowing block moving, as well, so if multiple, or a block of appointments need moved, they can be rescheduled, en masse. For more information, see Reports documentation.
{{% /info %}}

5. When the necessary edits are completed, click the <strong>Save</strong> button.

#### Moving Appointment(s)

Moving appointments can be done by clicking the available link found when editing an already established schedule; however, if a block of appointments, or several confirmed appointments, need to be moved without editing the schedule, the Appointments Report will also provide the same functionality, seen below:

1. When the Found Appointments display, place a check mark in the <strong>Select</strong> column to select any/all appointments that need moved.

![](../schedule-management.assets/0b88a2630caec4cc926ed32fa5e92630.png)

2. Click the <strong>Email Selected</strong> button, if an email needs to go to each patient having their appointment moved. This feature also allows additional emails to be generated, if individuals need added or carbon copied.

![](../schedule-management.assets/f9273c9b4052a6f1e32d09e989d19896.png)

3. If emailing, click the <strong>Send Emails</strong> button.

![](../schedule-management.assets/0c682ec03d1318967cf52d06ba88df57.png)

4. Place a check mark in the Select column to select any/all appointments that need moved.
5. Click the <strong>Move Selected</strong> button.

![](../schedule-management.assets/bace3f151145c15b79b6b07d18bbc603.png)

6. The page will load with the options to select a resource/location, if different, and to cancel or place on a waiting list, if necessary.

{{% info %}}
If moving the appointment to a different resource/location, the date/time of the appointment will be retained, so canceling or placing on a waiting list are available options.
{{% /info %}}

7. Click the <strong>Update</strong> button, when completed.

![](../schedule-management.assets/c0ec8a9936067fdb5401b2cf6fa2e78b.png)

## Resource Restrictions

The Resource Restrictions configuration tool can be found in the Control Panel. This tool allows system administrators to add restrictions on scheduling resources. A restriction prohibits specific users from viewing or scheduling on a specific resource's schedule. Resource Restrictions can be used to prohibit staff or clinicians from accessing sensitive schedules, ensure partitioned population separation, or simply shorten a large list of resources in systems with multiple locations and users. Another use for the Resource Restriction functionality is when multiple resources have same/similar names and practice in different clinics or countries. This feature can help staff to schedule the correct resource, consistently. A resource can be limited to individual users or entire departments. The restriction applies only to the specified resource, and resources not listed in the Resource Restriction tab are not restricted from any users.

### Add Resource Restriction(s)

To add restrictions to any schedule:

1. Navigate to Resource Restrictions under the Control Panel.
2. When the page loads, there will be a search bar, for a <strong>Scheduling Department Resource Search</strong>. This will search all users within departments that are listed as Scheduling Resources within the system settings.
3. This field is an autocomplete. Begin typing the last name of the resource, and select the appropriate user profile by clicking the <strong>Search</strong> button.

{{% note %}}
If a resource is not listed in the autocomplete choices, check the tab and ensure the resource is listed in the Scheduling Resources department.
{{% /note %}}

4. With the resource selected, click the <strong>Search</strong> button. This will refresh the page.
5. The page has four (4) sections:

    1. <strong>Allowed Users</strong> – An autocomplete field to be used to key in individual users to have access to view and/or schedule on the specified resource schedule. Click the <strong>Add</strong> button to save selections.

    2. <strong>Allowed Departments</strong> – An autocomplete field to be used to key in entire departments to have access to view and/or schedule on the specified resource schedule. Any user that is a member of that department will have access to that resource. Click the <strong>Add</strong> button to save selections.

    3. <strong>Reason for Change</strong> – This is a required field, used to document the reason for the restriction or restriction change. This information will be saved in the Revision History for future reference.

    4. <strong>Revision History</strong> – A view of all revision histories.

6. After all allowed users/departments have been added, provide the <strong>Reason For Change</strong> and click the <strong>Submit Changes</strong> button to create the restrictions.

Once the restriction is submitted, the screen will refresh and the list of allowed users will display the user by whom they were added, as well as the date and time of the addition. The same information will be displayed in the Revision History section.

### Edit Resource Restriction(s)

To edit existing restrictions, removing or adding allowed users/departments:

1. Navigate to Resource Restrictions under the Control Panel.
2. Perform the <strong>Scheduling Department Resource Search</strong> and select the appropriate resource by clicking the <strong>Search</strong> button.
3. The existing allowed users and/or departments for the specific restricted resource will be listed.
4. Utilize the <strong>minus</strong> button to remove users and/or departments no longer needing access. Add new users and/or departments with the <strong>Add</strong> button. Provide the Reason For Change and click the <strong>Submit Changes</strong> button.

See additional information online help documentation on [Resource Restrictions](../system-administration/system-controls/resource-restrictions.md).
