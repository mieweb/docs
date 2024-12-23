---
id: '1Coi2VR4ZAp9iVHZ4RVgP-tPNB3e46-hEzCnp4NDxXkw'
title: 'Quick View - Schedule Portlet'
date: '2024-12-16T19:50:40.950Z'
version: 41
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/'
source: 'https://drive.google.com/open?id=1Coi2VR4ZAp9iVHZ4RVgP-tPNB3e46-hEzCnp4NDxXkw'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
The Schedule Portlet is an optional portlet that can be configured to display on the Quick View sidemenu. For more information on how to use and configure the Quick View, please review [Quick View Sidemenu](https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/).

## Schedule Portlet Search

When users first view the Schedule Portlet, the search information will be empty. Once the user has entered search criteria, the selection will remain sticky until changed.

Users can select a location(s), a resource(s), the schedule date and time of day they wish to view on the portlet. The **Location** and **Resource** are autocomplete fields in which users may select one or multiple locations and resources. The **Resource field** is required when searching for appointments. The **Date** entered should be the date the user wishes to review. Users may search for today or for dates in the past or future. The **Time** option dropdown allows the user to limit the search to display all appointments for the day, just the morning or just the afternoon for the given day. Once search criteria has been entered, click the **Search** button to display the schedule.

![](../quick-view-schedule-portlet.assets/f1f6f17ac53f5d334db367a5b6e69b22.png)

## Search Results

Once the Search button has been clicked, the schedule information will display beneath the search criteria.

![](../quick-view-schedule-portlet.assets/4982836441cc19976398fdc6acc22b1f.png)

**Time**: Displays the time of the scheduled appointment.

**Chart**: Displays the name of the patient scheduled for the appointment.

**Options**: Allows users to Check in and/or quickly create and/or view the encounter associated with the appointment. See below for more information on this functionality.

**Stage**: Displays the encounter stage of the encounter associated with the appointment. Not all encounters utilize stages, so it is not uncommon for this column to be empty.

**Status**: The open lock indicates that the associated encounter to this appointment is still open. A closed lock indicates that the associated encounter to this appointment has been closed.

**Birth Date**: Displays the scheduled patient's date of birth.

**Appointment Type(s)**: Displays the appointment type(s) for the scheduled appointment.

**Appointment Reason**: Display the appointment reason, if one was added at the time of scheduling.

**Resource(s)**: Displays the provider for which the patient has been scheduled to see.

**Location**: Displays the location at which the appointment was scheduled.

**Comment**: Displays any comments entered on the appointment at the time of scheduling.

## Options

The Schedule portlet has been updated to allow users to create the visit encounter prior to patient check in. Users on release 202309 will now see a **+** icon to the right of the Checkin link.  When the **+** icon is selected, the associated encounter, if configured, will automatically open and the user will be redirected to the opened encounter. The Encounter section will default the encounter to the date/time of the scheduled appointment (NOT the date/time the encounter was opened), as well as display the linked appointment type. If the patient is checked in, and an encounter was previously opened, a second encounter will not be created and the user will be directed to the existing encounter. If an encounter was not previously opened at the time of check in, then the existing functionality has not changed. In this case, any associated encounter will automatically be opened for the user upon Checkin.

![](../quick-view-schedule-portlet.assets/d377faa3048677dc876563d0272251d4.png)

![](../quick-view-schedule-portlet.assets/6ddea52a920bb927c5d99feb139e7292.png)

![](../quick-view-schedule-portlet.assets/d46d614ee1f16ebfe5f0a069bef93141.png)
