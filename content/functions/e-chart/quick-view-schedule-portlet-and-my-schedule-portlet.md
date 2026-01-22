---
id: '1Coi2VR4ZAp9iVHZ4RVgP-tPNB3e46-hEzCnp4NDxXkw'
title: 'Quick View - Schedule Portlet and My Schedule Portlet'
date: '2025-11-10T20:05:35.368Z'
version: 124
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/'
source: 'https://drive.google.com/open?id=1Coi2VR4ZAp9iVHZ4RVgP-tPNB3e46-hEzCnp4NDxXkw'
wikigdrive: 'v2.15.30'
---
The Schedule portlet and/or the My Schedule portlet are optional portlets that can be configured to display on the Quick View sidemenu. For more information on how to use and configure the Quick View, please review [Quick View Sidemenu](https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/).

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/1483db0ad7a49539eb572ecbc9f459b0.png)

## Schedule Portlet

The Schedule portlet will display existing scheduled appointments for a specific resource, location and/or date specified in your search.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/e9018d24b4e5982a3fc6b19c5dfc53b7.png)

### Schedule Portlet Search

When users first view the Schedule Portlet, the search information will be empty.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/4875d3aeea4ae6fdbd080f9970078255.png)

Once the user has entered search criteria, the selection will remain sticky until changed.

Users can select a location(s), a resource(s), the schedule date and time of day they wish to view on the portlet to list existing scheduled appointments. The **Location** and **Resource** are autocomplete fields in which users may select one or multiple locations and resources. The **Resource field** is required when searching for scheduled appointments. The **Date** entered should be the date the user wishes to view the scheduled appointments for. Users may search for today or for dates in the past or future. The **Time** option dropdown allows the user to limit the search to display all appointments for the day, just the morning or just the afternoon for the given day. Once search criteria has been entered, click the **Search** button to display the schedule.

### Schedule Portlet Search Results/Listing

Once the Search button has been clicked, the schedule information will display beneath the search criteria.

Each appointment listed on the schedule shows details, allows interoperable functionality, and is color coded by the appointment type that your system is configured to display for easy visualization.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/ce25165fe09d383e83502c3891c40c5a.png)

**Time**: Displays the time slot of the scheduled appointment. This is a hyperlink that can be used to advance to the Reschedule/Cancel appointment screen for this scheduled appointment.

**Chart**: Displays the name of the chart that is scheduled for the appointment. This is a hyperlink that can be used to advance to the chart's Summary dashboard and chart contents.

**Options Column**: There are some options available from the Schedule quick view portlet:

* <strong>Checkin</strong> hyperlink<strong>:</strong> Allows users to Check in using that hyperlink to one-click checkin for the scheduled appointment from this portlet.
* <strong>Checked Out</strong> hyperlink<strong>:</strong> Signifies the person has been checked out, but one can click this hyperlink to check them back in if needed from this portlet.
* <strong>Checkin Station Name</strong> hyperlink<strong>:</strong> Displays the various station names of where the person is at the moment at the clinic (and how long they've been in that station).  As patients move through their visit, stations may change and update here.  This is a quick visual to see ‘where' physically the patient is in your clinic.  The station is a hyperlink that can be clicked here to quickly <em>move</em> the patient to another station as needed, from this portlet.
* <strong> [+] icon</strong>: Allows users to only create/add the encounter (that is configured to that specific appointment type) and does <strong>not</strong> check the chart in for their scheduled appointment. This may be used when needing to prepare the encounter for the appointment, but not check the person in for their appointment yet. When the <strong>+</strong> icon is selected, the associated encounter, if configured, will automatically be created & will open and the user will be redirected to the opened encounter. The Encounter section will default the encounter to the date/time of the scheduled appointment (NOT the date/time the encounter was created/opened), as well as display the linked appointment type. If the patient is later checked in, and an encounter was previously created/opened using this [+] icon, a second encounter will not be created.  The user will be directed to the existing encounter. If an encounter was not previously opened at the time of check in, then the existing functionality has not changed. In this case, any associated encounter will automatically be opened for the user upon Checkin.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/34bb5349fe39ac3c7964976e6b2d8023.png)

* <strong>Visit</strong> hyperlink: Allows users to click that hyperlink to get right into the open linked encounter that was created based on the specific scheduled appointment.
* <strong>Checked Out</strong> hyperlink: Signifies the chart has been marked as checked out for their appointment.  If needed, can click on the Checked Out hyperlink to check them in again.
* <strong>View</strong> hyperlink<strong>:</strong> Allows users to click on that hyperlink to get to the linked encounter ‘view' that was created based on the specific scheduled appointment. But, only the encounter View because the encounter had been closed & archived.

**Stage**: Displays the encounter stage of the appointment's linked encounter.  Not all encounters utilize stages, so it is common for this column to be empty.

**Status** padlock: The green open padlock icon indicates that the linked encounter (to this appointment) is still open (meaning, the encounter has not been closed & archived yet). One can actually quickly click on the green open lock icon to closed & archive the encounter from here.  The red closed padlock icon indicates that its linked encounter (to this appointment) has been closed & archived.  One cannot reopen the encounter from here though.

**Birth Date, Age & Sex**: Displays the related scheduled patient's demographics info.

**Appointment Type(s)**: Displays the appointment type(s) for the scheduled appointment.

**Appointment Reason**: Display the appointment's Chief Complaint, if one was added at the time of scheduling.

**Resource(s)**: Displays the provider for which the patient has been scheduled to see.

**Location**: Displays the location at which the appointment was scheduled.

**Comment**: Displays any appointment comments entered on the appointment at the time of scheduling.

## My Schedule Portlet

The My Schedule portlet will display existing scheduled appointments for a specific resource, location and/or date specified in your search, but does not keep the fields sticky for next time working in the portlet.  The search criteria and listing refresh to be blank, to start your fresh search over again.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/a488f6d829325d7f68696ba671f37093.png)

### My Schedule Portlet Search

When users view the My Schedule Portlet, the search information will be empty upon each time utilizing the portlet.

* Three differences from the other optional Schedules portlet:
1. My Schedule portlet will default to populate today's date in the search
2. Other search fields will populate/prefill with the saved resource(s) and saved location(s) that your <em>Scheduler</em> sidemenu tab views have applied/saved as your default view.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/8bf536c316eff3b11b2e91fd85558c8d.png)

3. Does not offer the ability to create the encounter for the appointment without also checking them in for their appointment (thus, only offers checkin)

Users can select a location(s), a resource(s), the schedule date and time of day they wish to view on the portlet to list existing scheduled appointments, or go to the Scheduler sidemenu tab to set their default resource/location so it will be applied/prefill to this portlet also.

* A resource and a date are required to get search results.  The Location field is optional to narrow down your search.

The **Location** and **Resource** are autocomplete fields in which users may select one or multiple locations and resources. The **Resource field** is required when searching for scheduled appointments. The **Date** entered should be the date the user wishes to view the scheduled appointments for but will prepopulate with today's date. Users may search for today or for dates in the past or future. Once search criteria has been entered, click the **Search** button to display the schedule.

### My Schedule Portlet Search Results/Listing

Once the Search button has been clicked, the schedule information will display beneath the search criteria.

Each appointment listed on the schedule shows details, allows interoperable functionality, and is color coded by the appointment type that your system is configured to display for easy visualization.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/6a407d875ed6a91370d5f443b7e7d011.png)

**Time**: Displays the time slot of the scheduled appointment. This is a hyperlink that can be used to advance to the Reschedule/Cancel appointment screen for this scheduled appointment.

**Chart**: Displays the name of the chart that is scheduled for the appointment. This is a hyperlink that can be used to advance to the chart's Summary dashboard and chart contents.

**Appointment Type(s)**: Displays the appointment type(s) for the scheduled appointment.

**Resource(s)**: Displays the provider for which the patient has been scheduled to see.

**Location**: Displays the location at which the appointment was scheduled.

**Comment**: Displays any appointment comments entered on the appointment at the time of scheduling.

**Options Column**: There are some options available from the Schedule quick view portlet:

* <strong>Checkin</strong> hyperlink<strong>:</strong> Allows users to Check in using that hyperlink to one-click checkin for the scheduled appointment from this portlet.
* <strong>Checkin Station Name</strong> hyperlink<strong>:</strong> Displays the various station names of where the person is at the moment at the clinic (and how long they've been in that station).  As patients move through their visit, stations may change and update here.  This is a quick visual to see ‘where' physically the patient is in your clinic.  The station is a hyperlink that can be clicked here to quickly <em>move</em> the patient to another station as needed, from this portlet.
* <strong>Visit</strong> hyperlink: Allows users to click that hyperlink to get right into the open linked encounter that was created based on the specific scheduled appointment.
* <strong>Checked Out</strong> hyperlink: Signifies the chart has been marked as checked out for their appointment.  If needed, can click on the Checked Out hyperlink to check them in again.

![](./quick-view-schedule-portlet-and-my-schedule-portlet.assets/96e29b9cbdf0a08d3c3d146d5c26c5d7.png)
