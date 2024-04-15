---
id: '1HZLlidMJpPlgDUKxH56ywGr29SsIf3WwPZk_EctSTaI'
title: 'Additional Appointment-Related Reports'
date: '2020-02-27T20:12:13.662Z'
version: 27
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1HZLlidMJpPlgDUKxH56ywGr29SsIf3WwPZk_EctSTaI'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Appointment Cancel Reason Report

You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.

The Appointment Cancel Reason Report displays a report of cancelled appointments according to the cancellation reason code you select, location and date range.

Click *Reports* tab on the left side-bar menu.

Click *Appt Cancel Reason* tab from the top tab menu.

The search criteria screen will display.

![](../additional-appointment-related-reports.assets/d3f2893189b952efa104a770520f10b0.png)

* <strong>Dates:</strong> Enter any date ranges. If you want a full history, simply enter an end date of today.
* <strong>Resource:</strong> Select a resource from the drop-down.
* <strong>Location:</strong> Select a location from the drop-down.
* <strong>Cancel Reason:</strong> This is a mandatory field. You must select a cancel reason you want to show results for. You cannot show results for <em>all</em> cancel reason codes as of yet. It has to be specific.

The results will display below the search fields. The report returns data of: Patient Name, DOB, Date, Location, Cancel Code. Resource, Last Edited By, and Cancelled Date

## Appointment Duplicate Report

The Appointment Duplicate Report lists duplicate appointments for a patient.

Click *Reports* tab on the left side-bar menu.

Click *Appt Duplicate* tab from the top tab menu.

It will automatically generate a list of duplicate appointments specific to a patient.

It will also show the number of duplicate appointments for that patient.

The Startdate is the date the duplicate appointment occurs.

![](../additional-appointment-related-reports.assets/d6432c81bb50617d3023529dfca7957c.png)

You can click View Printable and print out a basic black/white printable layout by then going to FILE and PRINT from that view.

## Appointment No Location Report

The Appointment No Location Report lists appointments scheduled without a location set to them.

Click *Reports* tab on the left side-bar menu.

Click *Appt No Location* tab from the top tab menu.

It will automatically generate a list of appointments without locations. These are appointments schedule that do not have a location selected for the patient's appointment.

![](../additional-appointment-related-reports.assets/497898d7b3a43b14cbd1094472d017f9.png)

You can click View Printable and print out a basic black/white printable layout by then going to FILE and PRINT from that view.

## Appointments Needing Dication Report

The Appointments Needing Dictation report displays a report of appointments that are in the system that don't have dictation done/linked for that appointment date.

This is an optional list report and can be turned on for your practice.

It can be shown in the Reports side tab and/or it can be shown in the Omniscope side tab or both.

There are many options for this report, however the only way to get a patient off this list is to add dictation to the appointment date by clicking the add dictation link in the options column.

![](../additional-appointment-related-reports.assets/ed5696a0c1bdf463572715e4b19fb991.png)

Your MIE Implementer can add a programming clause in that layout to exclude appointments that have been cancelled, or are no-show appointments. This will take those patient appointments off this report list or keep those from showing up on this report list.

MIE can also exclude certain appointment types from this report list as well (ex: your practice never needs dictations done for an appointment type of Injection, so you can have your MIE Implementer program this report list to exclude that appointment type from showing up on this list).

MIE can also program a date range for this report list. You can show the entire report list, or you can ask for it to be programmed to only show the appointments needing dictation within the last 30 days from today's logged in date or ask it to be programmed to ‘start' this report list from a certain starting date vs. the entire life of the database, etc.

Otherwise, once it is on the report list there is no way to get the patient's appointment off this report list unless you upload a dictation on that patient's appointment.
