---
id: '1wlGTWg0_1ZGOb8zpDBEoR9M5hK8u9Rp9FlGi20Kf-bo'
title: 'Appointments Import'
date: '2024-12-18T14:43:33.153Z'
version: 29
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1wlGTWg0_1ZGOb8zpDBEoR9M5hK8u9Rp9FlGi20Kf-bo'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
This wiki page is to document how appointment data needs to be constructed in order to import using WebChart's Schedule Import Tool.

* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an appointment.

## Column Definition

The appointment column definition shall contain all columns listed below regardless if there is a value or not.

* R = Required
* R* = Only one of these is required
* O = Optional
<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Required</td>
<td>Comments</td>
</tr>
<tr>
<td>patient.partition</td>
<td>char 15</td>
<td>O</td>
<td>MRN group partition</td>
</tr>
<tr>
<td>patient.MRN</td>
<td>char 50</td>
<td>O</td>
<td>chart identifier, a Medical Record Number</td>
</tr>
<tr>
<td>sched.Resource</td>
<td>int 10 unsigned</td>
<td>R</td>
<td>Id of resource patient will see (the import tool limits the appointment to one resource)</td>
</tr>
<tr>
<td>sched.Start Date</td>
<td>datetime</td>
<td>R</td>
<td>Date and time the appointment starts (YYYYMMDD HHMMSS)</td>
</tr>
<tr>
<td>sched.End Date</td>
<td>datetime</td>
<td>R*</td>
<td>Date and time the appointment ends (YYYYMMDD HHMMSS)</td>
</tr>
<tr>
<td>sched.Due Date</td>
<td>datetime</td>
<td>O</td>
<td>Date and time the appointment must be completed by (YYYYMMDD HHMMSS)</td>
</tr>
<tr>
<td>sched.Duration</td>
<td>int 10 unsigned</td>
<td>R*</td>
<td>Duration of the appointment in seconds</td>
</tr>
<tr>
<td>sched.Reason</td>
<td>mediumtext</td>
<td>O</td>
<td>The reason for the appointment (EG: patient's cheif complaint)</td>
</tr>
<tr>
<td>sched.Location</td>
<td>char 10</td>
<td>O</td>
<td>Where the location takes place; can be a code (EG: OFFICE) or the description (EG: Office)</td>
</tr>
<tr>
<td>sched.Type1</td>
<td>char 15</td>
<td>O</td>
<td>Type of appointment; EG: Office Visit Established, Procedure, Well Child Exam</td>
</tr>
<tr>
<td>sched.Type2</td>
<td>char 75</td>
<td>O</td>
<td>Type of appointment</td>
</tr>
<tr>
<td>sched.Type3</td>
<td>int 5</td>
<td>O</td>
<td>Type of appointment</td>
</tr>
<tr>
<td>sched.Type4</td>
<td>int 10</td>
<td>O</td>
<td>Type of appointment</td>
</tr>
<tr>
<td>sched.Comment</td>
<td>mediumtext</td>
<td>O</td>
<td>General appointment comments/notes</td>
</tr>
<tr>
<td>sched.Canceled</td>
<td>int 10 unsigned</td>
<td>O</td>
<td>Flags appointment as cancelled; 0=not cancelled; 1=cancelled; 2=patient did not show</td>
</tr>
<tr>
<td>sched.Cancel Code</td>
<td>char 10</td>
<td>O</td>
<td>Reason why the appointment was cancelled; EG: No Show, Patient Cancelled</td>
</tr>
<tr>
<td>sched.Cancel Date</td>
<td>datetime</td>
<td>O</td>
<td>Date that the appointment was canceled. (YYYYMMDD HHMMSS)</td>
</tr>
<tr>
<td>sched.Confirmed</td>
<td>int 10 unsigned</td>
<td>O</td>
<td>0 (no) or 1 (yes) to indicate whether or not the appointment has been confirmed with the patient</td>
</tr>
<tr>
<td>sched.Confirm User</td>
<td>int 11 unsigned</td>
<td>O</td>
<td>ID of the user who confirmed the appointment</td>
</tr>
<tr>
<td>sched.Confirm Date</td>
<td>datetime</td>
<td>O</td>
<td>Date that the appointment was confirmed. (YYYYMMDD HHMMSS)</td>
</tr>
<tr>
<td>sched.Contact</td>
<td>char 30</td>
<td>O</td>
<td>Field for the name of the provider who called in the appointment</td>
</tr>
<tr>
<td>sched.Contact Number</td>
<td>char 30</td>
<td>O</td>
<td>Field for the phone number of contact who called in the appointment</td>
</tr>
</table>
