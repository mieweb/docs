---
id: '1-jXm8RPS5HN_lQVCr0HIvlSwPPWMwapjMunsWlszw2Y'
title: 'Supervisor Scheduling'
date: '2025-03-20T18:48:45.654Z'
version: 106
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/portal-management/employer-portal-setup/'
source: 'https://drive.google.com/open?id=1-jXm8RPS5HN_lQVCr0HIvlSwPPWMwapjMunsWlszw2Y'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
---
The **Supervisor Portal** allows supervisors to schedule appointments on behalf of their direct subordinates. The Schedule Appointments module is available in databases on the 202503 release of {{% system-name %}}.

## Schedule Appointments

1. Select the Schedule Appointments module from the Supervisor Portal.

![](../supervisor-scheduling.assets/f164c561f972c990822b26220c5877e8.png)

2. Select the employee from the <strong>Choose the employee</strong> field. The <strong>Choose the employee</strong> field will display as an autocomplete if the supervisor has more than 10 employees/direct subordinates. If the supervisor has less than 10 employees/direct subordinates, the <strong>Choose the employee</strong> field will display as a drop down list to select the employee name.

![](../supervisor-scheduling.assets/781ec6aa891049d47946f400387764b1.png)

3. Select the green <strong>Schedule</strong> button to schedule the employee for an appointment that is on the waiting list. <strong>Appointments To Be Scheduled</strong>, are typically waiting list appointments that have been automatically generated as a result of a surveillance program. This section will only display if a waiting list appointment exists. Otherwise, select the <strong>schedule a new appointment</strong> button to schedule an appointment on demand.

![](../supervisor-scheduling.assets/199d3bc4405792ee570450e643d224b3.png)

4. Select the<strong> Reason(s), locations, provider, appointment date/time</strong> and add <em>optional</em> <strong>Provider</strong> <strong>comments</strong>, then select the green <strong>Submit</strong> button to schedule the appointment.  If scheduling an appointment on demand, the supervisor will be required to enter all fields, except the <strong>comment</strong>, before submitting the page. If scheduling an appointment from the <strong>Appointments To Be Scheduled</strong> section, the Reason(s)/(appointment type) will default for the supervisor and can not be changed.  Additionally, if only one location and/or provider offers this appointment type, the location and/or provider may be automatically selected and default for the supervisor when scheduling the appointment.  The date/time format, calendar options and comments are also configurable items and may differ slightly from what is pictured below.

![](../supervisor-scheduling.assets/3df39f0ad210c9e745dd688ed79ad008.png)

5. After the appointment has been scheduled, the supervisor returns to the Schedule Appointments page to view scheduled appointments.

![](../supervisor-scheduling.assets/f84fcd05d797dcc1404f03af1f0a40b8.png)

6. Additionally, the employee will receive the standard out of the box appointment confirmation email.

![](../supervisor-scheduling.assets/658f685a47579c64f7cf9148f8278851.png)

## Cancel Appointments

1. Select the employee from the <strong>Choose the employee</strong> field to view scheduled appointments. Select the Red <strong>Cancel</strong> button next to the appointment to be canceled.

![](../supervisor-scheduling.assets/0a8bb394969121de1c1f1f9190d13dc2.png)

2. {{% system-name %}} will ask the supervisor <strong>Are you sure?</strong> That you want to cancel the appointment. Select the <strong>Yes</strong> button to cancel the appointment. Select the <strong>No</strong> button keep the scheduled appointment. 
    ![](../supervisor-scheduling.assets/d55d036818ba768424ed7a78991a60e2.png)
3. If the cancelled appointment originated as a waitlist appointment AND the appointment due date has not passed, the appointment will go back to the waitlist and display in the <strong>Appointments to be Scheduled</strong> section. Supervisors are not allowed to schedule appointments past their due date, as employees would be considered past due and/or out of compliance. Supervisors must contact the clinic directly. If the cancelled appointment originated as an on demand

![](../supervisor-scheduling.assets/6cf1a93d8bce58ad553dbeb913ffdaea.png)


## Configuration Requirements

Employees/subordinates must have a direct relationship to the supervisor in order for the supervisor

For more information on Employer/Supervisor scheduler configuration options, see [Employer Portal Setup](https://docs.enterprisehealth.com/functions/portal-management/employer-portal-setup/) in the online help directory.
