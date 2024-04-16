---
id: '14cjYMBfnZUbxg9D9hYYkg938x50UzNfG-l0SYmkmG4Y'
title: 'Review Session - Checkin'
date: '2020-02-27T21:24:39.047Z'
version: 38
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../functions/scheduling/checkin.md'
  - '../../functions/reports/checkin-reports.md'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/system-administration/security/security-role-settings.md'
source: 'https://drive.google.com/open?id=14cjYMBfnZUbxg9D9hYYkg938x50UzNfG-l0SYmkmG4Y'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Checkin Module Demonstration</strong>
* <strong>Security Role Permissions</strong>
* <strong>My Settings Preferences</strong>
* <strong>System Configuration</strong>
    * <strong>Checkin and Lobby-Like Stations</strong>
    * <strong>Station Manager</strong>
    * <strong>One-Click Checkin</strong>
    * <strong>Default Visit Type and Default Encounter Type</strong>
    * <strong>Nightly Checkout</strong>
    * <strong>Worklists</strong>
    * <strong>Print Definitions</strong>
    * <strong>Checkin-Public Sidemenu</strong>
    * <strong>System Settings</strong>
    * <strong>Practice Management System Interface</strong>
    * <strong>Self-Checkin Kiosk</strong>
    * <strong>Checkin via Portal</strong>
* <strong>Reporting</strong>
* <strong>Resources</strong>

## Overview

The Checkin module significantly improves patient flow, reducing wait times and providing workflow efficiency, all by providing simple check-in processes and open communication between the front office staff and clinicians.

Checking in scheduled appointments can be done from the Scheduler or from various places throughout the chart. Depending on the preferred system settings and established workflows, checking in appointments can be performed using the One-Click Checkin feature of the Scheduler, where one click will check in the patient, automatically generate and link the encounter for the visit, and alert staff that the patient is in the waiting room. Otherwise, users may use the *Checkin* links throughout the chart, whereby users can specify the encounter, any encounter details, such as performing provider or related providers, as well as any insurance precertification information, as needed.

Additional ways the Checkin module reduces wait times and improves workflow efficiency is through automated, scheduled clean-up processes, as well as built-in alerts and functionality designed to help recognize congestion and ease usability. For example, upon checkout, {{% system-name %}} allows users to quickly and easily schedule necessary follow-up appointments, eliminating the need for manual tracking. For appointments that were not checked out, or missed, {{% system-name %}} runs nightly commands, or jobs, that clear these from the system. Or when an individual occupies a station for longer than 15 minutes, the status is raised to high priority, providing an alert to staff regarding the long wait.

Standard functionality includes:

* Checkin Module with Checkin Statistics
* One-click Checkin from the Scheduler
* Checkin from Charts
* Checkin Visit Report

## Security Role Permissions

It is important to review what security role(s), or individual users, will be expected to access the Checkin module and perform checkin functions. The **Checkin** security role permission, found under the security settings, allows users to access the Checkin sidemenu and perform check-in processes from both the Scheduler and within the patient charts. Additionally, the **Station Manager** security permission will need set, in order to allow the appropriate users/security role(s) the ability to add or edit stations used for the Checkin process. Setting this permission to **Yes** will enable the appropriate users the ability to add or edit stations, as needed.

## My Settings Preferences

Depending on the specified security permissions, some users may have the ability to manage their specific preferences and settings, or even the preferences and settings of other users. Some users may be given the ability to set system default preferences and settings, as well. It is important to review how to navigate the tab of the Control Panel and ensure all options for the Checkin functionality are enabled, as needed.

The most commonly changed user preferences for Checkin functionality are:

* <strong>Default Location</strong> - The Default Location setting can be particularly beneficial for those facilities with multiple sites or locations. This setting drives which location is used when displaying <em>Patients in Waiting Room</em>, <em>All Checked in Patients</em>, and checkin statistics. Use the dropdown to select the primary location of the user.
* <strong>My Station</strong> - The My Station setting establishes the default station used when moving checked-in patients. If the One-Click Checkin feature is enabled, the system will automatically place the patient into the specified station of the My Station setting. This setting can be set to any station, as needed. Users should choose the station that they most often move patients into, based on their role and place in the workflow.
* <strong>Show Checkin</strong> - It is recommended that the Show Checkin setting is enabled. When enabled, <em>Checkin</em> links will be displayed on all scheduled appointments, allowing users to quickly check in patients via their scheduled appointments. Choose <strong>Yes</strong> to enable.
* <strong>Use One-Click Checkin</strong> - This setting controls the One-Click Checkin feature. Enabling one-click checkin will not only check in the patient with one click, it moves the patient to the specified default station, as well as generates the appropriate encounter, if one is needed. Simply select <strong>Yes</strong> to enable.
* <strong>Default Visit Type</strong> - The Default Visit Type setting can be used for manual checkin processes, as well as those driven by the One-Click Checkin functionality. For instance, when manually adding an encounter from the <em>Encounters</em> chart tab, the system will automatically populate the <strong>Visit Type</strong> based on this Default Visit Type setting. However, if using one-click checkin, the system will first check the scheduled appointment type (appt type) for any established, or default visit type, needing to be used. If none is provided by the appointment type, the Default Visit Type setting will be referenced and used when creating the encounter visit type via one-click checkin.

## System Configuration

### Checkin and Lobby-Like Stations

When navigating to the module, users will see two sections, or categories. These sections show all patients currently checked in, displaying the patients either as **Patients in Waiting Room** or **Checked In Patients - All Stations**. This page serves as a type of dashboard, allowing users to locate patients, track time statistics, and filter down results by location or provider, if needed. **Checkin Statistics** can be also be found, at the bottom of the page. This section shows only daily times, as it resets each evening.

The *Patients in Waiting Room* category is designed to track all patients checked into the Waiting Room station, by default. Likewise, the *Checked In Patients - All Stations* category displays all checked-in patients, regardless of their station. The station and wait time can be found under the *Options* column.

The *Patients in Waiting Room* category can be configured to not only show patients in the Waiting Room station, but rather all patients in any *lobby-like stations*, if preferred. Most clients prefer the default; however, custom configuration can be done to display patients in lobby-like stations versus just those patients checked into the Waiting Room.

### Station Manager

A station is a physical location of the clinic (e.g., Waiting Room, Exam Rm 1, Lab, Checkout, etc.). Stations allow staff to manage the flow of the office, as well as track wait times and recurring bottlenecks.

The of the Checkin module allows administrative users, or those with the proper security permissions, to create and manage all necessary stations. Use the Station Manager to review the default stations in the {{% system-name %}} system, and add or edit any of the stations based on workflow needs.

To access the Station Manager, appropriate users must have the Access Control security permission **Station Manager** set to **Yes**. Users with access will be able to navigate to the tab, found in the module. Consequently, this provides these users with the ability to add, edit, and delete stations, as needed.

{{% info %}}
*Checkout* will not display as a station in the Station Manager editor. It does not need to be set up as a station or lobby-like station. Checkout is hardcoded and always available in the {{% system-name %}} system.
{{% /info %}}

### One-Click Checkin

As noted, the One-Click Checkin feature allows users to quickly and easily check in patients from the Scheduler, eliminating the additional steps of initiating an encounter and moving a patient to the appropriate station. In other words, using One-Click Checkin bypasses the *Add Encounter* confirmation screen and instead autofills the required fields with referenced defaults, all with just one click. When users specify **My Station** and **Default Visit Type** setting preferences, the One-Click Checkin feature can be enabled and will populate the required fields according to the specified preferences.

After reviewing and setting the My Station and Default Visit Type preferences accordingly, the **Use One-Click Checkin** setting can be enabled by selecting **Yes** from the dropdown.

### Default Visit Type and Default Encounter Type

When utilizing the One-Click Checkin feature, scheduled appointments are checked in using one of two possible defaults–the **Default Visit Type** preference or an **Default Encounter Type**.

When an appointment type is created, there is the option to set a Default Encounter Type, so that any time the scheduled appointment type is checked in, the specified encounter type will be created and used for that appointment. Alternatively, if no encounter type is specified, the system will defer to the user's Default Visit Type preference anytime one-click checkin is enabled. Because of this, it is important to review the appointment type Default Encounter Types, as well as the Default Visit Type setting, to ensure all workflow expectations are met.

{{% tip %}}
When no specific encounter/visit type is to be generated for an appointment type, then set the Default Encounter Type of the appointment type to **Checkin**.
{{% /tip %}}

### Nightly Checkout

{{% system-name %}} runs scheduled commands, or jobs, nightly, to clear the system of any checkout processes missed during the previous day operations. This automated job is called **Nightly Checkout.**

All new clients should note the date and time the first job is expected to run. Normally, scheduled jobs are set to run daily, at approximately 2 a.m. Once the system is enabled to perform scheduled jobs, they will continue to run, daily.

Once a chart has been manually checked out, or once the Nightly Checkout scheduled job has been run for the first time, a new system setting will be created for the Checkin module. The **Allow Auto Checkout After This Hour** system setting will have a default value of **20**. The system setting uses the 24-hour clock; therefore, the value of 20 indicates 10 p.m. The system setting, then, is indicating that the Nightly Checkout scheduled job is allowed to run, and it may auto-checkout any outstanding or remaining appointments, so long as the current time is past the indicated value (i.e., 10 p.m.).

### Worklists

Worklists, or worklist portlets, are tools designed to assist users in overseeing and managing open or pending encounters, orders, tests, etc. When using the Checkin module, checking in scheduled appointments will create an initial *Checkin* encounter visit type. These Checkin encounters are used to establish the encounter and allow for utilization tracking and review, among other things. Because they are not used for documenting or assessing the health or status of the individual, it is important to review checkin workflows with the Deployment Specialist(s), so that worklist configuration reflects the utility needed for managing and working encounters. This ensures all appropriate encounter visit types are hidden and shown in worlists and on listviews, as needed.

### Print Definitions

Print definitions provide ways to group many documents, forms, layouts, or the like into defined print or fax jobs. These jobs are helpful when users need to print or send specific information, or packets of information, when referring out or checking in patients, for example. It is important to review any forms, consents, or documents needed for checkin workflows, so that specific print definitions can be configured accordingly, incorporating all of the necessary items to be given to or filled out by the patient.

### Checkin-Public Sidemenu

The **Checkin-Public** sidemenu option is disabled by default, but can be activated on a {{% system-name %}} system, so that a type of public-facing dashboard may be used in lobby settings, or wherever patients may have visibility to it. This view, or dashboard, provides to those waiting a means to monitor and track wait times and current averages. The Checkin-Public dashboard only shows medical record numbers, appointment resources, appointment dates/times, checkin times, and wait times. Checkin statistics also show at the bottom of the page, displaying average waiting time and checkin-to-checkout total time.

### System Settings

There are various system settings relevant to the Checkin module, which may be enabled or disabled system-wide, as needed. These system settings are described, below:

**Use Checkin**: Enabled, by default, indicated by the value **1**. When enabled, the *Checkin* hyperlinks are displayed throughout the system. *Checkin* links can be found in places such as the chart demographics header, within encounters, on the Summary chart tab, in the Quick Links portlet, etc. If disabled (value **0**) then *Checkin* hyperlinks are hidden, or removed, system-wide.

**Lobby-Like Stations**: Default is **‘Waiting Room'**. Lobby-like stations are those locations which can be expected to have or hold more than one individual, at a time. When the *Hide Occupied Stations* system setting is enabled (value 1), clients will need to utilize this *Lobby-Like Stations* system setting to set the station name(s), or location(s), where multiple individuals may be present at any given time. Examples include Waiting Room, Lobby, Completing Questionnaires, Holding Room, Ready for Nurse, etc.

{{% tip %}}
When adding more stations to the Lobby-Like Station system setting, the value must contain the system name with single quotes, separating multiple values by commas (e.g., ‘Waiting Room', ‘Ready For Nurse', ‘West Wing', 'Questionnaire Room')
{{% /tip %}}

**Hide Occupied Stations**: Enabled by default (value **1**). When enabled, all occupied stations, or stations already occupied by patients, will not appear as options for checking in additional patients. For example, when a user checks in an individual and specifies the station location of the individual as Exam Room 1, that station will not appear as an option again, until the individual is moved to another station, or checked out.

{{% tip %}}
Review the *Hide Occupied Stations* and *Lobby-Like Stations* system settings, at the same time. Ensure the *Lobby-Like Stations* system setting has at least one station specified if the *Hide Occupied Stations* system setting is enabled.
{{% /tip %}}

**Station Alert Threshold Minutes**: Default is **15**. The station alert threshold is programmed so that an alert is triggered whenever stations are occupied longer than the expressed value. As noted in the name of the system setting, the value determines the number of *minutes* before an alert is triggered. Set the value to a number of minutes conducive to the business needs, indicating the number of minutes to elapse before the occupied station displays as a red alert. This provides easy visibility of those patients who have been waiting longer than the established threshold, and can be used to drive or increase efficiency.

**Close on Checkout**: Disabled by default (value **0**). If enabled (value **1**), upon checkout, or when the *Checkout* station is selected, the {{% system-name %}} system will close and archive any linked encounters, automatically. It is recommended that the *Close on Checkout* system setting remain disabled.

### Practice Management System Interface

(Only if purchased)

On occasion, clients will purchase a practice management (PM) system interface with {{% system-name %}} . The presence of an interface and its directionality (unidirectional or bidirectional) will determine how checkin workflows are to be performed. For instance, the directionality of the interface regulates which system scheduled appointments should be recorded in, as well as how appointments should be updated, when necessary. Therefore, it is important to review any system and workflow needs, as well as any interfaces that have been purchased, so that clients do not experience any major gaps or issues in workflows and business needs.

### Self-Checkin Kiosk

(Only if purchased)

When this add-on is purchased, the Checkin module has the ability to function in a kiosk setting, where patients can easily check in and address any necessary questions or information used by the office staff. Self-checkin kiosks can be set up with either keyboards/keypads or badge/card readers, though card readers only function on devices with USB capabilities.

The Checkin module kiosk functionality is typically used in lobby settings, where it can be accessed and used from a computer, tablet, or other smart device, as needed. Once the appropriate configuration and layouts are established, the self-checkin kiosk can recognize individual identifiers. When the specific identifiers are keyed in or recognized from a badge/card reader, the individuals will be checked in for their appointments. The screen can also prompt individuals to answer questions relevant to the visit or provide necessary information to the clinical staff.

Depending on the needs of the client, the self-checkin kiosk can also be configured for other types of scenarios, if necessary. For example, workflows involving scheduled *or* non-scheduled appointments can utilize the self-checkin kiosk; or even a workflow that requires specific stations (e.g., Fitness Center) to be used can benefit from the ease and usability of the kiosk option. Furthermore, the kiosk can be programmed to sound various tones according to specific types of identification (e.g., a specific sound when a Fitness Center member has an active status versus a different sound for a Fitness Center member with an inactive status).

### Checkin via Portal

(Only if purchased)

The Checkin module can also function in a portal setting, if purchased. With this add-on, the patient can simply log into the portal and check in, whether they are on site or not. However, this ability is only available for scheduled appointments, not walk-ins.

If purchased, it is important to review the following system settings and change any values according to the prescribed workflow(s) of the client:

**Minutes Allowed Before Start**: Default is **360**. This setting controls the amount of time (in minutes) allowed for checking in **before** the scheduled appointment start time. In other words, an individual may check in for a scheduled appointment from the portal up to 360 minutes before the appointment start time.

**Minutes Allowed After Start**: Default is **15**. This setting controls the amount of time (in minutes) allowed for checking in **after** the scheduled appointment start time. In other words, an individual may check in for a scheduled appointment from the portal up to 15 minutes past, or after, the appointment start time.

## Reporting

Checkin statistics and reports are part of the {{% system-name %}} standard, so that offices can easily and effectively evaluate traffic flow and possible bottlenecks. These reports allow filtering by resource station, location, patient, or date range, and they can be printed or tasked to administrators for review.

Ultimately, the client will define which stations (e.g., Waiting Room, exam rooms, Checkout, etc.) are important for the analysis of traffic throughput and potential bottlenecks. Once the stations are established and being used in the {{% system-name %}} system, the available reports can be referenced when needing to analyze traffic flow and attempting to identify better efficiencies.

Two reports specific to the Checkin module are the Checkin Statistics, tracked throughout the day, at the bottom of the Checkin page, as well as the Checkin Statistics Report found in the sidemenu, under the tab. This latter report provides historical check-in statistics, as opposed to only the present-day statistics.

## Resources

### Help Documentation

* [Checkin](../../functions/scheduling/checkin.md)
* [Checkin Reports](../../functions/reports/checkin-reports.md)
* [My Settings](../../functions/system-administration/security/my-settings.md)
* [Security Role Settings](../../functions/system-administration/security/security-role-settings.md)
