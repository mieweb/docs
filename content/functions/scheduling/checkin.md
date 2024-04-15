---
id: '19rm5d6W5KlJXERbF31IyvjcGek3Bx_lhUNMrM1nvXT8'
title: 'Checkin'
date: '2021-10-07T12:19:14.558Z'
version: 86
lastAuthor: 'sriecke'
mimeType: 'text/x-markdown'
links:
  - '../e-chart/insurance-summary-in-demographics-tab.md'
  - 'https://system/?f=chart&s=checkin'
  - 'https://system/?func=scheduler#Now'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - 'https://system/?func=scheduler&s=apttypes'
  - 'https://system/?f=chart&s=checkin&t=station_manager&tabmodule=checkin&tabselect=Station+Manager'
  - 'https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control'
  - 'https://system/?f=chart&s=checkin&t=station_manager&opp=add'
  - '../reports/checkin-reports.md'
source: 'https://drive.google.com/open?id=19rm5d6W5KlJXERbF31IyvjcGek3Bx_lhUNMrM1nvXT8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The {{% system-name %}} Checkin module significantly improves patient flow by ensuring communication lines between the front office and clinicians are always open. The Checkin module will function in a patient kiosk setting, or within {{% system-name %}} as used by the clinical staff.

The module allows for initiation of patient encounters, notifications for clinical staff of the patients' locations, as well as tracking of patient wait times. An additional feature is the Station Manager, which allows staff to move patients between varying stations, or locations, through to checkout. Color-coded station alerts let users know when a patient has remained at a station for an extended period of time.

## Checkin

Checking in patients can be performed from various areas throughout {{% system-name %}} , depending on preferred system settings and workflow. In this case, using the Checkin link throughout the patient's chart provides a quick and easy method for initiating the encounter.

![](../checkin.assets/e5ffc3836d2df6f10834ad13b87d66f6.png)

After clicking the **Checkin** link, the current encounter screen will display, where the patient can be checked into the appropriate station, based upon their place during their visit. As will be discussed in more detail later, it is important to note that encounters are useful for tracking a patient's health status and either conditions or appointments (i.e., hospitals track conditions, rather than appointments).

When a patient arrives with a scheduled appointment or as a walk-in, a user can utilize the Checkin link to update the station, notifying staff where the patient is within the facility. This action initiates a new encounter for the patient. If an appointment was scheduled the same day, clicking the Checkin link from the chart will display a prompt suggesting to link the check-in request to the existing appointment. Click the hyperlink with the date and chief complaint to link to the scheduled appointment. Otherwise, click the Checkin With New Encounter button.

![](../checkin.assets/71d1b7b495d2b435391ffdcf912ba16c.png)

Clicking the **Checkin With New Encounter** button will load the *Encounter (new)* page, where additional encounter details can be recorded and updated, as needed.

![](../checkin.assets/04c2edab882f1556eae82613a2c820e2.png)

The available fields are as follows:

**Visit Type:** The Visit Type dropdown establishes the encounter that will be created upon checking in. The default is typically Checkin, which simply creates a background encounter used for tracking the patient's location and time in the office. This can be manually updated by staff, so that an encounter can be selected for documenting the visit information and patient status elsewhere in the system. The default Visit Type is driven by the *My Settings* **Default Visit Type**, which can be changed anytime, according to the needs of the user.

**Insurance Pre-Certification:** The Insurance Pre-Certification section tracks specific insurance information. Insurances can be loaded into the chart through the *Demographics* chart tab, where specific pre-certification details can be provided. If checking in a patient with no need for a pre-certification to be applied, simply select the radio button with Plan Name (none). Otherwise, with the appropriate insurance plan selected, the {{% system-name %}} system will reduce the pre-certification count by one, when saved. For more information on entering insurances, see the [Insurance Summary in Demographics Tab](../e-chart/insurance-summary-in-demographics-tab.md) documentation.

**Service Date:** The date of service. Defaults to today's date.

**Location:** Use this dropdown to select the location the patient is being checked into. This location selection will default to the user's *My Settings* **Default Location**.

**Performing Provider:** The Performing Provider field will automatically populate the name of the clinician listed as Attending Physician on the *Demographics* chart tab. Otherwise, when scheduled with a specified clinician, that physician's name will populate the Performing Provider. This field can be changed by simply typing in the beginning of the physician's last name and clicking the **Search** button. When found, select the physician by clicking their name, and it will populate the field. Alternatively, staff may instead set the Performing Provider within the encounter when documenting the patient's visit, if preferred.

**Carbon Copies/Related Providers:** This section is used to link appropriate physicians, or provide carbon copies to relevant clinicians associated with the patient. Simply enter the name of the clinicians, specifying their role and whether they need linked to the patient, and click the **Add** button for each. Alternatively, staff may set any related providers from within the encounter, as well.

**Notes/Comments:** This free-text field is used between the Scheduler and Checkin modules. Adding comments/notes in this free-text box will only show when a user is viewing the Checkin screen or tab, or when moving a patient from one station to another. Comments on scheduled appointments transfer over to the Checkin module. These notes can be edited without changing the appointment comments, and are generally used for the specific tasks and actions of that day, allowing staff to monitor what is done throughout the patient's visit. The Notes/Comments are not saved and will be removed when the patient is checked out.

**Station:** Choose the initial station the patient is being checked into. This is typically *Waiting Room*.

Once the necessary information has been provided, click the **Save** button. Everything will be saved, and the check-in request will be submitted. Depending on the preferences established in *My Settings*, the Checkin page will load with a confirmation message, as well as with the patient listed under the specified station and/or under the *Checked in Patients - All Stations* category.

## Checkin Sidemenu

When navigating to the [Checkin module](https://system/?f=chart&s=checkin), the Checkin page will load. This page shows all the patients currently checked in, along with their station or location within the office/facility, and the time spent at each station. The Checkin page is designed to be a type of summary view with filtering options and statistics tracking. Filtering is available by location or provider, and the statistics can be found at the bottom of the page. The statistics section only tracks time daily, resetting each night.

The available categories consist of the top-most view, which tracks all patients in the Waiting Room, or lobby-like, station, as well as the bottom category, which shows checked-in patients across all stations, according to the filtered location(s). The *Patients in Waiting Room* category is a list of patients only in the Waiting Room station, currently. The *Checked In Patients - All Stations* category lists all patients checked in, showing their station and time in the Options column.

The *Patients in Waiting Room* category can also be configured to show patients in any lobby-like stations. Reach out to Helpdesk for assistance in turning this feature on. If enabled, the category view would display a Station Name column, showing patients in *any* waiting room, or lobby-like station, that is listed in the System Setting ("Checkin", "Settings", "Lobby-Like Stations").

![](../checkin.assets/32788b9a873e63c2efa88a36a23e1c04.png)

The columns available in each category's list view can be sorted, as needed. The Checkin module is designed to remember sorting preferences per user. To sort a column, simply click the column header, and the column will be sorted in ascending or descending order. The next time the Checkin module is accessed the sorting preferences will be retained. Available columns are, as follows:

* <strong>MR#</strong>: Displays the medical record number of the checked-in patient. Clicking the listed MR# will open the patient chart.
* <strong>Last, First Name</strong>: Displays the last and first names of the checked-in patient. Clicking the name will open the patient chart.
* <strong>Resource</strong>: The resource or physician the patient is expected to see.
* <strong>Appointment Time</strong>: Displays the appointment time of the scheduled appointment. If an encounter is tied to a scheduled appointment, the Appointment Time will appear in the column. If the patient was checked in with a new encounter, not tied/related to a scheduled appointment, this field will display <em>N/A</em>.
* <strong>Appointment Type(s)</strong>: When checked in from the Scheduler, this column displays any appointment type(s) the patient is scheduled for.
* <strong>Chief Complaint</strong>: It is possible to add an attribute to show the Chief Complaint column for both categories. If this attribute tag is used in a public setting (i.e., PUBLIC_VIEW="1") or the user does not have Checkin permission, this column will not be displayed in either category view.
* <strong>Check-In Time</strong>: Displays the time the patient was checked in, when the staff clicked the Checkin link.
* <strong>Encounter Time</strong>: Displays the total time the patient has been at the facility, since the initial check.
* <strong>Comment</strong>: Any comments tied to the checkin/station movement are displayed.
* <strong>Acting User</strong>: This is the name of the user that last edited the patient's location, or station.
* <strong>Options</strong>: Displays the patient's current station, and in parentheses, the amount of time the patient has been at the station. This can be clicked to move a patient to another station or to check him/her out.
    * <strong>Open</strong>: Click this and the encounter will become the current encounter for the user. The user will then be taken directly into the current encounter's Exam stage.

### Move Station or Checkout Patient

With the patient checked in, the station location of the patient will display in various places throughout the system, including on the Demographics chart tab, Summary chart tab, and the Scheduler and Checkin modules, to name a few. The current station, or room, and duration of time spent at the listed station is displayed. To move or check out a patient, simply click on the link.

When the link is clicked, the *Enter New Station Details* pop-up opens. Move the patient to the appropriate station by using the *New Station* dropdown menu. Comments will display to users when using the Checkin module screen. Click the **Save** button, when finished.

![](../checkin.assets/317b494c00ef850b175e896c079b7276.png)

{{% note %}}
The **Hide Occupied Stations** system setting can be turned off. This setting is enabled by default and will hide any station already occupied by another patient, to prevent double-booking stations. If a selected room is occupied when moving a patient, an alert will display, prompting the user to make another selection, as the station is currently occupied.
{{% /note %}}

{{% tip %}}
It is advised when using the Hide Occupied Stations system setting that administrators establish stations capable of holding more than one patient at a time. For example, waiting rooms, lobbies, or ICUs are expected to hold several patients at a time. The **Lobby-Like Stations** system setting can be used to address these needs. By default, only Waiting Room is set; however, more can be added. Any station that is not listed in the *Lobby-Like Stations* system setting would function on a first-come-first-serve basis, consequently hiding that station when occupied.
{{% /tip %}}

## Check In from Scheduler

Navigate to the [Scheduler](https://system/?func=scheduler#Now) from the sidemenu, and view the necessary schedule(s). Under each patient name, in any of the scheduler views, the **Checkin** option is displayed in the Appointment Detail. Click the hyperlink to check in the patient.

{{% tip %}}
If the Checkin link is not available in the Appointment Detail, click the **Preferences** button found at the right of the screen. Ensure the **Show Checkin** setting is set to **Yes**.
{{% /tip %}}

![](../checkin.assets/f0726179c4ed77726a21f132244fe489.png)

Depending on the preferences of My Settings, the Checkin link may automatically check in the patient to the default station and create a default encounter from the appointment type. This is the One-Click Checkin functionality and will be explained in more detail, below.

If One-Click Checkin is not enabled, users will be directed to the *Encounter (new)* screen, where all necessary information can be provided and updated, as explained earlier. After which, a confirmation message will display on the Checkin module page. Here, the patient will be tracked under the specific station category and/or under the *Checked in Patients - All Stations* category, depending on personal settings.

![](../checkin.assets/f8fc8d80937af9fdfe1b4ee0eff17d52.png)

If a patient has already been checked in, the Scheduler will display a link with the station and duration of time spent at the station, rather than the Checkin link. After checking in a patient, users can use the Back to Scheduler link in the Checkin module, to continue working in the Scheduler. Otherwise, they may navigate elsewhere in {{% system-name %}} , as needed.

### One-Click Checkin from Scheduler

**One-Click Checkin** allows users to quickly and easily check in patients from the Scheduler, eliminating the additional steps of initiating an encounter and moving patients to their appropriate stations. All of this can be performed with just one click.

To enable One-Click Checkin, users can utilize the **Preferences** button, found at the right of the screen, or navigate to My Settings, in the Control Panel. The *One-Click Checkin* preference must be set to **Yes** to enable the functionality. To check or set the default check-in station, go to [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) and use the **My Station** setting dropdown to select the preferred default station, so that patients are automatically checked into that station, initially. The system default is *Waiting Room*.

Once enabled, using One-Click Checkin is no different than checking in patients, normally. Simply click the Checkin link in the Appointment Detail on the Scheduler.

![](../checkin.assets/f0726179c4ed77726a21f132244fe489.png)

Now, with One-Click Checkin set to Yes, clicking the Checkin link will automatically check the patient into the user-default station. Additionally, settings can be adjusted to **Link Referrers to Encounter** or **Link Referrers to Patient**, by using the *Preferences* button and ensuring these settings are set to **Yes**. These are set to Yes by default.

Also, when checking in patients with the One-Click Checkin functionality, any chart alerts will be displayed when the Checkin link is clicked. This ensures chart alerts are not missed.

{{% note %}}
One-Click Checkin will not allow users to select an encounter. It is not recommended for those clients whose workflows require manual selection of specific encounter types. One-Click Checkin creates a new encounter based upon the specified visit type of the scheduled appointment, or upon the **Default Visit Type** found in My Settings. When a patient is checked in for an appointment using One-Click Checkin, the default visit type assigned to the scheduled appointment type will be used, unless there is no default encounter visit type set in the [Appointment Type editor](https://system/?func=scheduler&s=apttypes) for the scheduled appointment type. The Default Visit Type setting will then be used. This ensures every encounter created through One-Click Checkin has a visit type assigned to it.
{{% /note %}}

#### Insurance Pre-Certifications

As noted above, insurances can be loaded into a chart through the *Demographics* chart tab, where specific pre-certification details can be provided. One-click Checkin displays an insurance verification screen when a patient is checked in from this method.

![](../checkin.assets/d8c049974259e16d7f7cfb4757f0d8a1.png)

If checking in a patient with no need for a pre-certification to be applied, simply select the radio button with Plan Name (none). Otherwise, with the appropriate insurance plan selected, the {{% system-name %}} system will reduce the pre-certification count by one, when saved. For more information on entering insurances, see the [Insurance Summary in Demographics Tab](../e-chart/insurance-summary-in-demographics-tab.md) documentation.

## Station Manager Tab

In the Checkin module, there is a [Station Manager tab](https://system/?f=chart&s=checkin&t=station_manager&tabmodule=checkin&tabselect=Station+Manager) near the top of the page. The Station Manager allows users to manage stations for the Checkin module, given the appropriate security permissions. Stations can only be added or edited with the [Access Control](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control) security setting **Station Manager** set to **Yes**.

![](../checkin.assets/148efa4ef0b1cf93fa8c0d674bea8f3d.png)

The Station Manager displays all stations being used system-wide, and allows for the creation of new stations, as well as the updating and editing of existing stations.

![](../checkin.assets/4681b12eeb5b7f027cd397fb3a0b8f17.png)

{{% tip %}}
To update the threshold for displaying a red highlighted station time status, navigate to the system setting ("Checkin", "Defaults", "Station Alert Threshold Minutes") to increase or decrease the threshold. The setting value is measured in minute increments and is defaulted to fifteen (15). This can be changed by an administrator, as needed.
{{% /tip %}}

### Add a Station

To add a new station, simply click the [Add Station link](https://system/?f=chart&s=checkin&t=station_manager&opp=add), found in the top-right corner of the Station Manager screen.

![](../checkin.assets/88763b112b4764f2cbbdc15acb5181ee.png)

The *Station Add* page will load, where the Station ID and Name can be provided.

![](../checkin.assets/2d6c51b3c7584397ab12069c1398c68d.png)

* <strong>Station ID</strong>: Station ID is the unique identifier of a given station. Station IDs tend to use the format STATION + number.
* <strong>Station Name</strong>: Enter the name of the station. This name will display to users when moving patients between stations.

Click the **Save** button, and the station will be added to the list, displaying a confirmation that it was successfully created.

{{% note %}}
Remember, adding a station with the Hide Occupied Stations system setting enabled may require a modification to the Lobby-Like Stations list, as noted above. Also, the Checkout station is preloaded and will always appear in {{% system-name %}} . There is no need to create a Checkout station as this is embedded in the Checkin module and will always appear as an option.
{{% /note %}}

### Edit a Station

To edit a station, click the **Edit** link next to the specific station needing updated.

![](../checkin.assets/4b4a7385b87a64554e6632816834f093.png)

The *Station Edit* screen will open, where edits can be made to the Station ID and/or Station Name.

![](../checkin.assets/dd3babd54024367797d988e5cddcb909.png)

Click the **Change** button to submit the edit(s), or the Cancel button to return to the Station Manager. When the Change button is clicked and the changes saved, the system will display a confirmation message.

{{% warning %}}
Stations cannot be deleted. Stations can only be set as active/inactive. To delete a station, an administrator must contact Helpdesk.
{{% /warning %}}

## Checkin-Public Sidemenu

A **Checkin-Public** sidemenu option can be programmed into a {{% system-name %}} system, to be used as a type of public-facing dashboard. This menu is typically used *in lobbies* as a means for monitoring and tracking wait times and current averages. The Checkin-Public dashboard only shows medical record numbers, appointment resources, appointment dates/times, check-in times, and wait times. Checkin Statistics also shows at the bottom of the page, displaying average waiting time and checkin-to-checkout total time.

![](../checkin.assets/e6e0d09d0282d09861e9a07719baf3b9.png)

{{% info %}}
The Checkin-Public dashboard only shows the Waiting Room station. Once the patient is moved to a different station, their details will be removed from the list, though they will continue to count toward the total statistics.
{{% /info %}}

## Checkin Reports

A report is available for auditing check-in statistics. This can be used to review statistics from each station within {{% system-name %}} . Refer to separate [Checkin Reports](../reports/checkin-reports.md) documentation.

{{% note %}}
After hours, {{% system-name %}} can perform automated jobs/routines to clear the system of any patients that were missed during the checkout procedure. The system can be configured with an automatic function that checks out any patients not checked out by staff that day. Contact the Deployment Consultant for more information.
{{% /note %}}
