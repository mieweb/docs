---
id: "1-jXm8RPS5HN_lQVCr0HIvlSwPPWMwapjMunsWlszw2Y"
title: "Supervisor Portal Scheduling"
date: "2025-11-10T19:01:07.231Z"
version: 176
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "https://docs.enterprisehealth.com/functions/portal-management/supervisor-portal-setup/"
source: "https://drive.google.com/open?id=1-jXm8RPS5HN_lQVCr0HIvlSwPPWMwapjMunsWlszw2Y"
wikigdrive: "v2.15.30"
---

The **Supervisor Portal** allows supervisors to schedule appointments on behalf of their direct subordinates. The Schedule Appointments module is available in databases on the 202503 release of {{% system-name %}}.

## Schedule Appointments

1. Select the Schedule Appointments module from the Supervisor Portal.

![](./supervisor-portal-scheduling.assets/f164c561f972c990822b26220c5877e8.png)

2. Select the employee from the <strong>Choose the employee</strong> field. The <strong>Choose the employee</strong> field will display as an autocomplete if the supervisor has more than 10 employees/direct subordinates. If the supervisor has less than 10 employees/direct subordinates, the <strong>Choose the employee</strong> field will display as a drop down list to select the employee name.

![](./supervisor-portal-scheduling.assets/781ec6aa891049d47946f400387764b1.png)

3. Select the green <strong>Schedule</strong> button to schedule the employee for an appointment that is on the waiting list. <strong>Appointments To Be Scheduled</strong>, are typically waiting list appointments that have been automatically generated as a result of a surveillance program. This section will only display if a waiting list appointment exists. Otherwise, select the <strong>schedule a new appointment</strong> button to schedule an appointment on demand.

![](./supervisor-portal-scheduling.assets/199d3bc4405792ee570450e643d224b3.png)

4. Select the<strong> Reason(s), locations, provider, appointment date/time</strong> and add <em>optional</em> <strong>Provider</strong> <strong>comments</strong>, then select the green <strong>Submit</strong> button to schedule the appointment. If scheduling an appointment on demand, the supervisor will be required to enter all fields, except the <strong>comment</strong>, before submitting the page. If scheduling an appointment from the <strong>Appointments To Be Scheduled</strong> section, the Reason(s)/(appointment type) will default for the supervisor and can not be changed. Additionally, if only one location and/or provider offers this appointment type, the location and/or provider may be automatically selected and default for the supervisor when scheduling the appointment. The date/time format, calendar options and comments are also configurable items and may differ slightly from what is pictured below.

![](./supervisor-portal-scheduling.assets/f2fd83192dd50225e5d9d40c748c5350.png)

5. After the appointment has been scheduled, the supervisor returns to the Schedule Appointments page to view scheduled appointments for the employee. The supervisor may navigate away to complete other actions or if needing to schedule for another employee, simply select another employee from the Choose the employee dropdown/autocomplete to select another employee.

![](./supervisor-portal-scheduling.assets/f74afa5c9bf009eb68b9dafd593d1d90.png)

6. Additionally, the employee will receive the standard out of the box appointment confirmation email.

![](./supervisor-portal-scheduling.assets/b172aad51b96f907e52560f588ecb5bf.png)

## Cancel Appointments

1. Select the employee from the <strong>Choose the employee</strong> field to view scheduled appointments. Select the Red <strong>Cancel</strong> button next to the appointment to be canceled.

![](./supervisor-portal-scheduling.assets/244cb60e8bde4ff953c40752685c17c7.png)

2. {{% system-name %}} will ask the supervisor <strong>Are you sure?</strong> That you want to cancel the appointment. Select the <strong>Yes</strong> button to cancel the appointment. Select the <strong>No</strong> button to keep the scheduled appointment.
   ![](./supervisor-portal-scheduling.assets/03769c22ad6ffa35141baba67ecc289d.png)

3. Additionally, the employee will receive the standard out of the box appointment cancellation email.

![](./supervisor-portal-scheduling.assets/ff3cb32954e4850999fed5dc2c4e0204.png)

4. If the cancelled appointment originated as a waitlist appointment AND the appointment due date has not passed, the appointment will go back to the waitlist and display in the <strong>Appointments to be Scheduled</strong> section. If the appointment did not originate as a waitlist appointment, the Appointments to be Scheduled section will be blank.

![](./supervisor-portal-scheduling.assets/6c0c9ea55497cbdb036e86031c061369.png)

5. Supervisors are not allowed to schedule appointments past their due date, as employees would be considered past due and/or out of compliance. Supervisors must contact the clinic directly to schedule. If an Appointment to be Scheduled is past the required due date, then a message will display in the <strong>Due Date</strong> field of the <strong>Appointments to be Scheduled</strong> summary.

![](./supervisor-portal-scheduling.assets/fd47d9f65849998f57b55e5eed204d38.png)

## Configuration Requirements

Employees/subordinates must have a direct relationship to the supervisor in order for the supervisor

For more information on Employer/Supervisor scheduler configuration options, see [Employer Portal Setup](https://docs.enterprisehealth.com/functions/portal-management/supervisor-portal-setup/) in the online help directory.
