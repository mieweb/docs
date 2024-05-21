---
id: '16jO2umnJ-Eg-5kGeSj3Z5yAXYCkaPVZQ0mdGVhBD-44'
title: 'Review Session - Scheduler'
date: '2024-05-21T15:49:02.744Z'
version: 58
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?func=scheduler&s=schedules'
  - 'https://system/?func=scheduler&s=wait_list'
  - 'https://system/?func=scheduler#Now'
  - '../../functions/system-administration/security/security-role-settings.md'
  - 'https://system/?func=scheduler&s=schedules&opp=sched_edit'
  - 'https://system/?func=scheduler&s=apttypes'
  - '../../functions/scheduling/appt-types-tab.md'
  - 'https://system/?f=scheduler&s=apttemplates&opp=add'
  - 'https://system/?f=scheduler&s=apttemplates&opp=addmulti'
  - '../../functions/document-management/printing-and-print-definitions/print-definitions.md'
  - 'https://system/?f=scheduler&s=cancel_code_manager'
  - 'https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/scheduling/adding-an-appointment-using-the-wizard-tab.md'
  - '../../functions/scheduling/cancel-no-show-edit-appointments.md'
  - '../../functions/scheduling/pat-appt-wizard-tab.md'
  - '../../functions/scheduling/scheduler-inputs-editor-required-recommended-fields.md'
  - '../../functions/scheduling/scheduler-views.md'
  - '../../functions/scheduling/schedules-tab.md'
  - '../../functions/scheduling/waiting-list-tab.md'
  - '../../functions/scheduling/schedule-management.md'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=6588ae3624f140c1dff58b2c75025447'
source: 'https://drive.google.com/open?id=16jO2umnJ-Eg-5kGeSj3Z5yAXYCkaPVZQ0mdGVhBD-44'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Demo Scheduler</strong>
* <strong>Overview</strong>
* <strong>Scheduler</strong>
    * <strong>Tabs</strong>
        * <strong>Views</strong>
        * <strong>Wizards</strong>
        * <strong>Schedules</strong>
        * <strong>Waiting List</strong>
* <strong>System Configuration</strong>
    * <strong>Schedule Resources</strong>
    * <strong>Schedules</strong>
    * <strong>Appointment Types</strong>
        * <strong>Durations</strong>
        * <strong>Colors</strong>
        * <strong>Default Encounter Type</strong>
        * <strong>Print Definitions</strong>
    * <strong>Cancellation Codes</strong>
    * <strong>Waiting List</strong>
    * <strong>System Settings</strong>
    * <strong>My Settings and Security Role Permissions</strong>
* <strong>Resources</strong>

## Overview

The {{% system-name %}} Scheduler is easily configured to organize multiple clinicians, locations, and resources. Editors are available for clients to load appointment types, cancellation codes, and schedules, as needed. Custom configuration of appointment types, cancellation codes, schedules, email templates, or automated business rules by Deployment Specialists or MIE staff is available as an add-on service, if interested.

Standard functionality includes:

* Customizable views and user preference options
* Multi-location/centralized scheduling
* Appointment Waiting List
* Appointment Types editor
* Schedule editor
* Cancellation editor
* Self-scheduling via the portal
* Pre-loaded standard email templates
* Appointment reports for missed, canceled, or no-show appointments

## Scheduler

The appointment and schedule management module, also known as the Scheduler, features a customizable, robust scheduler that makes it easy to set up and organize multiple physicians, locations, and resources (e.g., CT scanner, MR magnet, Surgery Suite, etc.). The appointment calendar features an easy-to-use appointment wizard, intuitive interface, color coding option, and multiple views, including daily and weekly views. The scheduling module allows users to check in patients, print charts, enter vitals, and add dictation through the scheduling screen.

### Tabs

Given the foundations of the {{% system-name %}} system, almost every module and page will have tabs at the top. These are designed to assist with navigation, customizations and configurations, as well as general functionality.

#### Views

There are three available views for the Scheduler: List View, Multi View, and Week View. Each of these provides a different look at the schedule resources, which may be more or less conducive to the organization's prescribed workflows. It is important to note that appointments cannot be scheduled from the List View.

#### Wizards

There are two tabs dedicated to assisting users with quick registrations and appointment scheduling. The **Wizard** tab, or Add Appointment Wizard, allows users to schedule appointments for already established users or patients in the system. The **Pat/Appt Wizard**, or Patient Registration/Appointment Wizard, is similar to the Add Appointment Wizard; it simply prompts the user with a patient registration page, where all of the new patient information can be entered, prior to scheduling the appointment. Once the information is saved, the Add Appointment Wizard immediately loads, and the appointment(s) can be scheduled, as needed. Simply put, the Pat/Appt Wizard allows new patients to be registered and scheduled for their first appointment(s), at the same time.

#### Schedules

The [Schedules tab](https://system/?func=scheduler&s=schedules) allows users with the proper security permissions to add, edit, and remove any established schedules and schedule resources, as needed. In order to schedule appointments, establish appointment durations, and ensure the preferred scheduling times are available, use the Schedules tab. Here, users will be able to determine the number of available appointments, specify the types of appointments open to be scheduled, search for and view existing schedules, and manage any resource schedules needed for the organization.

#### Waiting List

The [Waiting List tab](https://system/?func=scheduler&s=wait_list) can be used to view all appointments placed on the Waiting List. When clicked, the Waiting List will automatically display appointments for the defaulted Resource, shown in the *Show Waiting List For* search section, at the top of the page. To view the entire list, set the Resource to **Select Resource** and Location to **Any Location**, and the results will update, automatically.

The Waiting List displays patients in ascending order of when they were scheduled on the waiting list. For example, the top-most appointment on the list is the first person scheduled on the waiting list; and the last appointment on the list is the most recently added appointment.

## System Configuration

The [Scheduler](https://system/?func=scheduler#Now)[**** ](https://system/?func=scheduler#Now)[module](https://system/?func=scheduler#Now) in {{% system-name %}} allows offices to interface with a Practice Management (PM) system, as well as account for any varying schedules the organization may need. Depending on the workflows and necessary schedule resources, varying degrees of configuration are needed to begin scheduling appointments in {{% system-name %}} .

In order to add or manage schedules and appointments in {{% system-name %}} , the proper security permissions must be provided. For instance, in order to create and manage resource schedules, the security role setting *Edit Schedules* must be set to **Yes**. Similarly, to add appointments, the *Add Appointments* setting must be **Yes**. If the My Settings preference of *Force Default Resources* is set to **Yes**, the Scheduler will show all resources that have an added or edited appointment by you. To view only one resource at a time, ensure this setting is set to **No**. For more information on some the various settings, review the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) documentation.

Once schedules are configured, adding an appointment is as simple as navigating to the [Scheduler](https://system/?func=scheduler#Now), locating the necessary day on the proper resource's schedule, and clicking the appropriate time slot needed. This will automatically open the Wizard tab, which allows users to detail the scheduled appointment, as needed. When the Appointment Wizard opens, it will show the *Patient* section, where the user types in the last name of the patient, or searches by date of birth, medical record number, or social security number. If the **Add Appt** link is clicked from anywhere in a chart, the *Patient* field will automatically populate the name of the patient. To reduce alerts and ensure everything on the Scheduler works fluidly, the following areas may need additional configuration:

### Schedule Resources

As noted, schedule resources are schedulable entities, such as physicians, technicians, devices, or departments, to name a few. For example, a schedule resource can be Dr. John. A. Doe, CT Scanner, MR magnet, Lab, Surgery Suite, etc.

Resources are set up as users, configured or pre-loaded in the {{% system-name %}} system. Each resource must belong to the specified department to be considered a resource. Most systems utilize the default Scheduling Resources department; however, the Physicians department may be a preferred alternative. To specify the preferred department from which scheduling resources will be pulled, ensure the System Setting (Scheduler, Settings, Scheduling Realm) is set to the specific department being used.

### Schedules

Creating schedules is quick and easy in {{% system-name %}} systems. After creating and/or customizing a schedule, it can be saved as a template or copied, to make for fast creation across multiple scheduling resources. Additionally, scheduling resources can be limited, or restricted, if necessary, to assist with efficiency and security. To create a schedule for a scheduling resource:

1. Navigate to the [Scheduler sidemenu](https://system/?func=scheduler#Now).
2. Click on the [Schedules tab](https://system/?func=scheduler&s=schedules).
3. Click the [Add link](https://system/?func=scheduler&s=schedules&opp=sched_edit).
4. Fill in all of the appropriate fields.
5. Assign specific, allowed appointment types, when applicable.

{{% tip %}}
Leaving this field blank will allow all appointment types to be scheduled for the resource in context.
{{% /tip %}}

6. Set a recurrence, if necessary.
7. Copy the schedule to additional scheduling resources, when appropriate.
8. Upon completion, click the <strong>Save</strong> button.

### Appointment Types & Templates

As part of the schedule setup, there is the ability to specify the types of appointments allowed on a particular schedule, or for a specific schedule resource. Appointment types are created and maintained from the tab, found in the Scheduler module. The {{% system-name %}} system has several default appointment types, as well as encounter types. To review these, simply navigate to the [Appt Types tab](https://system/?func=scheduler&s=apttypes). An appointment type can be configured to default to a specific encounter type, or they may be set up with an associated CPT code, pre-built print definitions, or additional details, as needed. For more information, review the [Appt Types Tab](../../functions/scheduling/appt-types-tab.md) documentation.

Additionally, {{% system-name %}} allows the creation of appointment type templates. These templates allow schedules to be customized per scheduling resource needs. For example, Dr. John A. Doe may wish to see Office Visit Follow-Ups for a 15 minute duration, but Dr. Jane B. Doe would like to see the same appointment type for 30 minutes. Use an appointment type template to distinguish any specific differences needing to be represented on behalf of a specific scheduling resource.

To create an appointment type template:

1. Click on the [Appt Types tab](https://system/?func=scheduler&s=apttypes).
2. Click the [Add Template](https://system/?f=scheduler&s=apttemplates&opp=add)[<strong></strong> ](https://system/?f=scheduler&s=apttemplates&opp=add)[link](https://system/?f=scheduler&s=apttemplates&opp=add).
3. Fill in the fields, as needed.
4. When finished, click the <strong>Submit Template</strong> button.

To provide a quick method for creating multiple appointment type templates for existing appointment types, {{% system-name %}} has an [Add Multiple Templates option](https://system/?f=scheduler&s=apttemplates&opp=addmulti). This feature allows users to create appointment type templates en masse, per appointment type, resource, and/or location.

For example, selecting three (3) existing appointment types, four (4) schedule resources, and two (2) locations, a total of 24 appointment type templates will be created. These templates will list the standard appointment type Duration and Duration Given to Patient; however, these can be edited, as needed, by simply using the **Edit** link in the *Options* column.

#### Durations

As alluded to, above, durations of appointment types are mostly straight-forward. As expected, a specified duration for an appointment type is the amount of time needed for the specified type of appointment.

In addition to the duration of the appointment, {{% system-name %}} allows for specifying the Duration Given to Patient. This field is typically used with email appointment reminders. If a value is provided for Duration Given to Patient, the email reminder will specify how much time the individual should allot for the appointment. For example, offices may anticipate 15 minutes with staff, though the entire duration of the appointment is 60 minutes, for the patient.

#### Colors

To improve usability, appointment types can be configured with specific colors. The **Title Color** may be specified in order to highlight the title bar of the appointment, where the appointment time and patient is notated. The **Color** of the appointment body can be edited, as well. The chosen color can be specified with Hex color code, or the color can be selected from the color palette shown after clicking the dropper.

#### Default Encounter Type

The **Default Encounter Type** can be specified within the established appointment type, so whenever a specific appointment type is scheduled, the defaulted encounter type will automatically be created and opened. The {{% system-name %}} system comes with several encounter types preconfigured for most office needs.

If a client uses the Checkin module, it is suggested to always default the Default Encounter Type field to Checkin. If the office uses encounters and wishes to have an alternative encounter type automatically created and opened upon check-in, that encounter type can be specified in this field.

#### Print Definitions

Print definitions provide ways to group many documents, forms, layouts, or the like into a defined print or fax job. Print definitions can be attached to any appointment type. This allows users to click one button and get a group of forms/documents for use, as it relates to the scheduled appointment.

To print or fax a print definition from the Scheduler, simply click the *Print Chart* link from the patient's appointment. To dissociate print definitions from any appointment types, remove the print definition(s) from each of the associated appointment types, and submit the changes. Additional information can be found in the [Print Definitions](../../functions/document-management/printing-and-print-definitions/print-definitions.md) documentation.

### Cancellation Codes

For clients interested in tracking appointment cancellations and reasons for cancellations/no-shows, there are features available to easily add codes needing to be tracked, as well as to allow users with appropriate permissions to add new reasons at the time of a cancellation. The [Cancellation Codes tab](https://system/?f=scheduler&s=cancel_code_manager) can be used to view, add, and maintain all cancellation codes.

### System Settings

There are a large number of system settings available for the Scheduler module. In the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) of the **Control Panel**, permitted users can search for settings pertaining to the *Scheduler* Module. These settings may be enabled, disabled, edited, or set, to align with business needs and prescribed workflows.

### Security Role Permissions

In additional to system settings, it is important to review the security settings for each user or security role needing access to the scheduler functions. There is additional information available within the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) online help documentation, if needed.

![](../review-session-scheduler.assets/0e7eacfbd58ff2bcae82ca091bd69fd0.png)

### My Settings Preferences

Review the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) preferences of security roles and individuals, and ensure access and restrictions are established, as needed. Set each restriction or permission, accordingly. This information is also detailed within the [My Settings](../../functions/system-administration/security/my-settings.md) online help documentation.

![](../review-session-scheduler.assets/3440485d36fc57f2dfe8f3cb658cb024.png)

## Resources

### Help Documentation

* [Adding an Appt Using Wizard Tab](../../functions/scheduling/adding-an-appointment-using-the-wizard-tab.md)
* [Appt Types Tab](../../functions/scheduling/appt-types-tab.md)
* [Copy-Edit-Delete-Cancel-No Show Appointments](../../functions/scheduling/cancel-no-show-edit-appointments.md)
* [PAT-APT Wizard Tab](../../functions/scheduling/pat-appt-wizard-tab.md)
* [Required-Recommended Fields When Adding Appointments](../../functions/scheduling/scheduler-inputs-editor-required-recommended-fields.md)
* [Scheduler Views-List-Multi-Week](../../functions/scheduling/scheduler-views.md)
* [Schedules Tab](../../functions/scheduling/schedules-tab.md)
* [Waiting List Tab](../../functions/scheduling/waiting-list-tab.md)
* [Schedule Management](../../functions/scheduling/schedule-management.md)

### Training Videos

* [Scheduler (00:40:25)](https://mieweb.webex.com/mieweb/ldr.php?RCID=6588ae3624f140c1dff58b2c75025447)
