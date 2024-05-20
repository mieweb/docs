---
id: '1wiiDtA6Dlmbqe65Sx1tJh-cDj-Ld7D5GmICs6-qXoNU'
title: 'Checkin Reports'
date: '2024-05-20T18:53:31.072Z'
version: 42
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1wiiDtA6Dlmbqe65Sx1tJh-cDj-Ld7D5GmICs6-qXoNU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

Practices and organizations can evaluate patient flow through check-in and appointment statistics and reports. These reports support filtering, by resource, station, location, and patient or date range, and they may be printed or tasked to administrators for review.

## Checkin Report

To access and utilize the Checkin Report:

1. Navigate to the sidemenu.
2. Click the link, or tab.
3. Locate and select the report.
4. Select and/or fill in the appropriate fields. Not all fields need to be filled. These fields provide different ways to report the checkin statistics, and each field narrows the search down further:
* <strong>Resource</strong>: This dropdown allows the report to Show All Resources or be filtered by a specific scheduling resource (e.g., physician, nurse, lab, etc.). Select a specific resource or keep as Show All Resources. The resource selections respect the SysSched department.
* <strong>Station</strong>: This dropdown allows for filtering by a specific station. Select the specific station or leave as All Stations.
* <strong>Location</strong>: This dropdown allows for filtering by a specific location. Select a specific location or leave as All Locations.
* <strong>Unique Patient</strong>: This field is used to determine how many patients (total number) were seen for the specified filters (i.e., date range, specific station, resource, or location). Placing a checkmark in this field will allow the report to be run displaying <strong>only</strong> the chart name, MRN, and the checkin user, eliminating duplicates and displaying only unique patients.
* <strong>Encounter Start Date & End Date</strong>: These dates can be used to track a condition/encounter for a patient, starting with the condition onset or encounter beginning and going until condition is concluded or encounter is closed. The Encounter Start and End Date would be the same date for standard offices/clinics (i.e., the office visit date). Alternatively, this is often used by hospitals for tracking a condition, which may present for several days or weeks.
* <strong>Station Start Date & End Date</strong>: These dates can be used to track specific station dates and times. Start and End Date would be the same date for standard offices/clinics.
5. Click the <strong>Search</strong> button to run the report. Once the report runs, the page will load the results.

The results will include the schedulable resource, patient name and MRN, encounter date, initial station time, location, station, total station time, and checkin user. Below the results is also a summary giving Average Station Time, where averages are broken down by specific station, as well as Average Time Between Check-in and Check-out, which only populates if the Station filter is left set as Show All Stations.

Once the report has been run, additional features come available to print, communicate, and view the data. The following links are available:

* <strong>Show CSV</strong>: This link is available to provide the data in a CSV format. To render the CSV format, click the <strong>Show CSV</strong> link in the header of the table.
* <strong>Add Task</strong>: This link, in the upper-right corner, allows users to task other users to review the report. When the task is generated, the <em>perform</em> link on the task will point to the original report.
* <strong>View Printable</strong>: This link, in the upper-right corner, opens a printable version of the report, allowing the report to be printed locally in a black and white format.

## Appointment Reports

In addition to the Checkin Report, there is also the Appointment Report users may choose.

For a particular encounter, one can run an Appointment Report based on time the patient was checked in and what time they were checked out. Via Appointment Report, in the Optional Columns section, there is an "Arrival/Departure" selection, and then you could also specify the Linked Encounters. When using the Checkin functionality, the "checkin" type of encounter is always triggered and tracks checkin and checkout.
