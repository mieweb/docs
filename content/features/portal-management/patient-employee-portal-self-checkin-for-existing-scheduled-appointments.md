---
id: '1G5_D48UMtZeEnFgn9HwNxosxWLi0wTPauIEM6bUJIRs'
title: 'Patient/Employee Portal Self Checkin for Existing Scheduled Appointments'
date: '2025-12-08T15:47:04.906Z'
version: 119
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1G5_D48UMtZeEnFgn9HwNxosxWLi0wTPauIEM6bUJIRs'
wikigdrive: 'v2.15.30'
---
The {{% system-name %}} can have portals on Provider Organizations set up to integrate streamlining things such as self appointment check-in and intake processes. For example, portal users may electronically access questionnaires they are due for or paperwork required by the clinic upon check-in, so then all of the necessary information can be recorded and automatically uploaded into the appropriate chart. With the {{% system-name %}} portal, clinicians can easily maintain patient flow, while also managing their check-in and intake processes. This guide is the information needed for initially setting up and utilizing the portal user self-checkin for existing scheduled appointments functionality.

## Initial Setup

### System Setting

A system admin or Deployment Consultant needs to make sure the **Use Checkin** system setting is enabled.  Navigate to the **System Settings** tab of the Control Panel and locate the **E-Chart**, **Defaults**, **Use Checkin** system setting.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/3a847ad376cf2690d8298a2f97d77dec.png)

The system setting should be enabled by default, but if it is not, simply click the Edit option and set the value (of the system setting) to enabled, then key in the reason and save your work.

### Patient Portal Configuration

With the system setting enabled, navigate to the Provider Organization chart that has the patient/employee portal configured on it.   In the *Select Modules* portal of the portal configuration, make sure the My Appointments module is selected and configured with what is needed for workflows.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/ef4e98ffb01ccee21aaf65c83b8c66e8.png)

That allows portal users to utilize the My Appointments module within the portal.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/bc9f78eadd41692bc4bc11392ee96d72.png)

Within the My Appointments module configuration of the portal, there is a **Use Checkin** that can be checkmarked to be utilized/enabled.  **Use Checkin**: This selection allows the logged in portal user to see a ‘Check Into Waiting Room' button next to their existing scheduled appointment(s) from their My Appointments portal screen.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/e4465070ce0970167ec797cb855101a6.png)

The **Use Checkin** (when enabled/checkmarked) will allow portal users to *Check into the Waiting Room* station for their existing scheduled appointment when logged into their own portal account within the My Appointments menu tab in their portal.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/763cb6acf8a7b650d56e8a590b690661.png)

### System Settings that Control Visibility of Check Into Waiting Room button

There are 2 system settings that control when the 'Check Into Waiting Room' button will appear to the portal user when viewing their scheduled appointments listing: 'Minutes Allowed Before Start', 'Minutes Allowed After Start'.

* Make sure to review the default minutes these are set to, and have your Deployment Consultant/System Admin get these updated to appropriate minutes for workflow needs.
    * <strong>Minutes Allowed Before Start</strong> system setting: When portal users are checking into appointments from the portal, this is the amount of time (in minutes) that checkin is allowed BEFORE the appointment's scheduled start time. Meaning, if value for this setting is 360, then a portal user can checkin for their existing scheduled appointment via a portal up to 360 minutes (6 hours) before their existing scheduled start appointment time.
    * <strong>Minutes Allowed After Start</strong> system setting: When portal users are checking into appointments from the portal, this is the amount of time (in minutes) that checkin is allowed AFTER the appointment's scheduled start time. Meaning, if value for this setting is 15, then a portal user can still checkin for their existing scheduled appointment via a portal up to 15 minutes past the existing scheduled start appointment time.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/c34c6b2e6466b39eb19bc8007474798f.png)

NOTE: A system admin or Deployment Consultant may need to **add** the system settings to the system if they don't show up in the system settings search.

## Portal User Experience

Portal users will see the ‘Check Into Waiting Room' button to self checkin for their existing scheduled appointment.  Again, 2 system settings determine when this button will display for portal users to utilize.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/b667e8913343ada1ec3edb018ddb79bc.png)

Once the portal user has clicked to check into the waiting room, they will get a successful pop-up message and the existing scheduled appointment will display **Checked In**.  The portal user can peruse elsewhere in their portal or finish up questionnaires that are due, etc.

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/380e662f459fe3c35d83b2da943d1c8c.png)

## Clinician System Side

The clinician side shows in several areas of the system, who has checked in, including portal users who self-check in into the waiting room.

### Checkin side menu

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/8da72d3e0cb8d1175a051a0d2bcbad02.png)

### Quick View side menu with Checkin Portlet

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/a903e542db205861f76de19bf58c396e.png)

### Quick View side menu with Schedule or My Schedule Portlets

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/c9e38ef2e17f2cb84e0e6c129091ed35.png)

### Chart Demographics Bar and Chart Quick Links Portlet

![](./patient-employee-portal-self-checkin-for-existing-scheduled-appointments.assets/35b07e1a23838a7f90d1069d1e456947.png)
