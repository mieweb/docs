---
id: '1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
title: 'Adding an Appointment Using the Wizard Tab'
date: '2024-01-02T18:36:32.462Z'
version: 203
lastAuthor: 'Angie Nichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
wikigdrive: 'dc9ec4e15828d59cf43699483d3f3e6ddbe5d23a'
---
Scheduling/Adding appointments can be done in many places within {{% system-name %}} but a centralized method is from the Wizard tab within the Scheduler module.

Adding an appointment anywhere in {{% system-name %}} requires appropriate security permission. 

## Adding an Appointment using the Wizard Tab from Scheduler Module

Click *Scheduler* from the left sidebar menu and advance to the Wizard tab at the top.

![](../adding-an-appointment-using-the-wizard-tab.assets/dca0ca9a8a948e990606979eb66e6cd9.png)

The *Add Appointment* screen will display.  This is an option as a centralized method to schedule/add an appointment onto the schedule.

When the Add Appointment wizard screen opens, it will show various fields to add an appointment successfully.

![](../adding-an-appointment-using-the-wizard-tab.assets/48caf407dd1f0e2ba3265ef14fcce4f7.png)


This will help describe each field found on the Add Appointment screen:
* <strong>Patient:</strong> Search for the patient chart that this appointment is for.  Various search methods exist, but typically keying in last name, followed by a portion of first name is what is used.  Use the auto-complete to select the specific patient match. 
  * <strong>Add Patient or Add Employee hyperlink:</strong> This is a hyperlink provided next to the Patient field. When searching for a patient chart and do not get any auto-complete choices that are for the specific patient chart you need, the <em>Add Patient</em> or <em>Add Employee</em> hyperlink will allow you to manually add the patient chart to the system from here.
* <strong>Select Encounter:</strong> this selection box will show any existing <em>open</em> encounters for this patient's chart. You can link any open encounter(s) to the appointment you are creating. The list of open encounters available to link, will display the encounter type name. When you are adding or editing an appointment, you can link multiple open encounter(s) to that appointment if needed or if workflow appropriate.

![](../adding-an-appointment-using-the-wizard-tab.assets/d8bbd578486cb6aa9426c80607f6146c.png)

{{% note %}}
Any linked encounters to an appointment, will display in the scheduler module if your preference is set to show linked encounters on scheduled appointments.

![](../adding-an-appointment-using-the-wizard-tab.assets/c027d709328c56e1e54c0de7ced7f8d3.png)

{{% /note %}}
* <strong>Select Incident:</strong> this selection box will show any existing active (open) cases/incidents for this patient's chart.  You can link any open case/incident to the appointment you are creating.  The list of open cases/incidents available to link, will display the case number, type and onset of injury/illness. When you are adding or editing an appointment, you can link an open case/incident to that appointment if needed or if workflow appropriate. 

![](../adding-an-appointment-using-the-wizard-tab.assets/e37004061439a7af865460aa7fa639fa.png)

* <strong>Select Due List Items:</strong> this selection box will show any pending due list items that are not marked as ‘scheduled'.  You can link any pending due list items to the appointment you are creating.  The list of pending due list items available to link, will display the due list item name and its due date.  When you are adding or editing an appointment, you can link a pending due list item to that appointment if needed or if workflow appropriate.

![](../adding-an-appointment-using-the-wizard-tab.assets/c2a2d19b9d577b472364e79454307950.png)

{{% note %}}
If you link any pending due list items to a successfully scheduled appointment, then the pending due list item will display that scheduled appointment date/time in the *Scheduled* column next to the pending due list items, which is visible within the Due List chart tab.  It is also visible in the Encounter Orders search report, Active Due List Items report and Global Due List Search report.

![](../adding-an-appointment-using-the-wizard-tab.assets/f690b183dd9ef5e844e120f476263bef.png)

{{% /note %}}
* <strong>Select Checkin Station:</strong> this should only be used if you add appointments to the schedule for walk-in appointment workflow needs and is not to be used for future appointments being scheduled.  This selection box will allow you to set a checkin station on this patient at the time you are adding this appointment. You should <strong>only set this/use this</strong> for walk-in appointments you are adding to the schedule because if you set a checkin station here, as soon as you SAVE the appointment, it will automatically checkin that patient to that station immediately. If the <em>Hide Occupied Stations</em> system setting is turned on for your system, the station dropdown in this Add Appointment screen will be populated only with those stations that are unoccupied (or "lobby-like"). This checkin station selection field only shows up if you are creating a brand-new appointment, not on appointment edits. You also won't get this checkin station drop-down if the patient is already checked in somewhere. If this is a future appointment you are scheduling, you would leave this blank. If your practice doesn't want this field at all to utilize, contact your MIE Implementer who can remove it as an available field.

![](../adding-an-appointment-using-the-wizard-tab.assets/22dd9e4fe39121c9bfacaa113f80754b.png)

* <strong>Referring Physician:</strong> This is an auto-complete field, not a free text field.  Begin typing the first or last name of the referrer if you need this on the appointment for any workflow needs. This referring physician auto-complete field looks for users (active or disabled) in your system set to a <em>Default User Role</em> of Referring Physician. This means, any referring physician names must be configured and managed in your system. The system will auto-complete your typing and give you choices of matches that are configured as users in the system.  You must select from the auto-complete if using this field.  You can select more than one referrer. If you wish to delete a referrer you have entered, simply click on the minus ( - ) sign to the left of the name. A custom configuration option is offered where the referring physician input can be replaced with a list edit that inputs a user and their role. So, a physician can be added as the ‘ordering' rather than the referring or any other type of role the system has set up. This carries over to the encounter created from the appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/624d6b664c9d0b35ab367a2f752b75dd.png)

* <strong>Chief Complaint:</strong> Type in complaint/problem.  Any Chief Complaint typed here is also displayed as Chief Complaint encounter section when/if checked in for an appointment that creates an encounter visit to document in.
* <strong>Contact:</strong> Free type in any contact information name(s) for this appointment if needed for any workflow needs.
* <strong>Contact Number:</strong> Type in the phone number for the contact(s) if needed for any workflow needs.
* <strong>Confirmed:</strong> Can checkmark this box if you have confirmed the appointment with the person. On the appointment schedule multiview, a [c] will appear if you have changed your settings to view this (for confirmed), or a [u] will appear for unconfirmed (or checkbox if have edit rights to an unconfirmed) for quick visibility of the day's schedule.

![](../adding-an-appointment-using-the-wizard-tab.assets/c9d5c012c4f1fe35b49e49b5c90ca729.png)

* <strong>Email Patient:</strong> You must have security permission to <em>Send Email to Patients</em> set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature. Select a pre-templated email, from the drop-down, if you wish to send the patient an email regarding the appointment just scheduled.

![](../adding-an-appointment-using-the-wizard-tab.assets/b89964ff4ea6bb519dd183abac221357.png)

* <strong>I-Calender Invite (.ics):</strong> The appointment will be sent (along with the email template) with a calendar invite that the patient can accept to add this appointment to their calendar/device calendar that they receive the email on. It copies this appointment into the patient's calendar program if they use such calendar programs if they wish. 
* <strong>Make appt invite ‘Public':</strong> The appointment is sent as <em>private</em> by default on the patient's calendar program when this is uncheckmarked.  However, if checkmarked, the appointment goes on the patient's calendar program (if they wish to accept and store on their device's calendar received at), but as <em>public</em> instead of private.
* <strong>Send me RSVP:</strong> Checkmark this if you wish to receive an RSVP via email. When the appointment is accepted or declined by the recipient, the logged in user will receive an RSVP email sent out by the recipient's email client.
* <strong>CC: (carbon copy)</strong> You can type in the first or last name of a user within your {{% system-name %}} system and the same email (that you signified to send within the <em>Email Patient</em> field) will be sent to the CC'd {{% system-name %}} user also. It will auto-complete {{% system-name %}} users for you to choose from. You cannot freely type in an email address. It has to be selected from the auto-complete of users in your system. If the user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
* <strong>Comment:</strong> Can type a comment and it will appear in the schedule views. Any comment associated with the appointment type selected will appear here also, unless there is already a comment typed here previously.
* <strong>Due Date:</strong> Due Date is an optional field typically used with health surveillance needs.  It indicates to have this appointment within the indicated due date. This is also used for our Corporate Health clients when an appointment is on the waiting list and the employee can self schedule the pending waitlist appointment (typically for health surveillance compliance needs) and can self schedule the appointment within the indicated due date.
* <strong>Visible Date:</strong> Visible date is an optional field typically used with health surveillance needs. Visible date indicates the date the waiting list appointment will display to the employee on the employee portal visibly to self schedule, and the date they will receive an email invitation to schedule their visible appointment or questionnaires to become visible on the portal for filling out and submitting.  Sometimes visible date is set as a future date and is a period (between now and the visible date) where everything is set up by automated evaluators and clinicians may have workflows or reports to review charts or even line managers in order to review to make sure the person is in the correct health surveillance panel(s) before the email invitation is sent or things (appointments & questionnaires, etc) become visible on the portal to the patient or employee.  This is typically only used for Corporate Health clients. Visible date may also be utilized by health practices that cannot schedule patients yet because they don't schedule physicians ahead of time.

### Patient Visits

The next section is *Patient Visits*.

![](../adding-an-appointment-using-the-wizard-tab.assets/f033c5f9597aa82a5396bc3aca92574d.png)

* <strong>Resource:</strong> Required field. The resource will default and show/populate the name of the physician whose scheduler view you are set to or last worked in. Simply click the [-] minus button to get rid of it if you wish to select a different resource for this appointment. In the resource field, begin typing the last or first name of the physician to schedule with. The system will auto-complete to give you choices. You can set the appointment to use the waitlist by selecting the Scheduler Waiting List resource also.

![](../adding-an-appointment-using-the-wizard-tab.assets/efa6902a464148678bddf809a41008ce.png)

* Resources are users preloaded in your {{% system-name %}} system. They must belong to a specified department to be considered a resource. In most systems, it is called a SysSched department. Some use the physicians department. If you want to add another physician/therapist, etc to this appointment for this patient, then after you initial selection, simply begin typing another last or first name in the resource field and choose it. Continue until you are done. If you selected a wrong resource, click the [-] minus sign to delete that selection.
* <strong>Appt (Appointment) Types:</strong> Begin typing in the appointment type the patient is being seen for. The system will auto-complete to give you choices of active appt types. If you selected a wrong appt type, click the [-] minus sign on the appt type to remove it. To add another appointment type for this specific appointment, simply begin typing another appt type and choose it. Continue until you are done. <em>Hit your down arrow key on your keyboard here to see a complete list of appointment type choices your system has—instead of using the auto-complete if you wish.</em>
* <strong>Location:</strong> The location automatically defaults to show the location you are set to in your default settings (MY SETTINGS). If you wish to change the location for this appointment, simply begin typing in the name of the location and it will auto-complete to give you choices. You can only make ONE location choice for the appointment.
  * It does not show outside locations as choices in the auto-complete field. <em>Hit your down arrow key on your keyboard here to see a complete list of location choices your system has—instead of using the auto-complete if you wish.</em>

![](../adding-an-appointment-using-the-wizard-tab.assets/aef305c922a2c6c76f3408596aab983a.png)

* <strong>Date/Time:</strong> Pick the date of the appointment. Automatically pops-up today's date & time or the date & time you selected when you clicked the yellow time slot in a view. Type in a different date using that format, or click <em>Pick Date</em> and it will pop up a calendar to choose your date from. <strong>To put a patient on the Waiting List</strong> you must click USE WAITLIST button and the date/time field will clear out, then just click "add" to add the appt and it will then put this patient in the waiting list.
* <strong>Jump To:</strong> You can leave the date/time as today's default, but then simply use the <em>Jump To</em> drop down to get quickly to another week/month, etc date from now. When you then click find time it will open to show free times for that jumped to date.
* <strong>Duration:</strong> This automatically pops-up the duration of the appointment according to the Appt. type you selected. To add or subtract time to the appointment, change this field using the numeric specified.
* <strong>Find Time:</strong> This works if schedules are set up. When this searches for free time, it needs to have the free time templated. (Templated means that physician/resource would have a schedule loaded.) Example: your site is open from 8am to 9pm during the week, so you have a schedule set for that time. If you have your date set or used the <em>jump to</em> feature, and you click FIND TIME, it will open up a separate box showing FREE TIMES for that specific resource(s) for that location and for the specific date. Simply click the select link to the appointment slot you wish to grab. It will populate the date/time fields with that selection. You can also use the monthly calendar view to its side to choose a different date/month and view free times to select.

![](../adding-an-appointment-using-the-wizard-tab.assets/097caed22e5462ebe686fc5408b063cb.png)


![](../adding-an-appointment-using-the-wizard-tab.assets/9d7340d22105967cb661949165ea2ddb.png)

* <strong>View Calendar:</strong> Click this button and it will pop-up the multi-view schedule of the Resource (doctor/date) that you selected. You can click on a time slot (in yellow) or choose another date from the calendar at the far, right side. When you have selected the time/date in yellow that you wish, then it automatically puts that date and time in the <strong>date/time</strong> box above.
Once you have your appointment information in the fields, click the SAVE button. It will automatically add and schedule that appointment. It then takes you out to the multi-view of the scheduler. If you wish to add another appt for the same patient or set a recurring appointment, see the **options** described below.

![](../adding-an-appointment-using-the-wizard-tab.assets/5d79470881ef734e771a7986fc92c4b1.png)

* <strong>Options:</strong> In the options column, there are options that can be used for scheduling multiple appointments for the same patient. ADD & CLEAR, ADD & RECUR.

![](../adding-an-appointment-using-the-wizard-tab.assets/b106d9c7e4a7bff55d78611ce78f2181.png)

* <strong>Add & Clear:</strong> If you have another appt to schedule for this patient, instead of clicking the SAVE button after you've created your first appt for this patient, you can click ADD & CLEAR button to add the appt then clear the resource, appt types field, etc to add another appt for the patient. The CLEAR portion clears the appt fields so you can enter another appt for the patient and have those fields cleared to start the next appt. The ADD & CLEAR button adds an appointment and clears the resources, apt types fields, etc. This way you don't have to clear the fields manually and change when making another/multiple appt for this patient. However, no appointment is SAVED until you click the SAVE button.
* <strong>Add (Appt):</strong> If you have another appt to schedule for this patient, instead of clicking the SAVE button after you've created your first appointment for this patient, you can click ADD instead. It then lists that first appointment you created in a summary listing and you are free to add/schedule another appointment for this same patient. You just go up and edit the fields you need to change for the next appt to schedule on this patient.

![](../adding-an-appointment-using-the-wizard-tab.assets/ffdd1d25a976ad1cb05d94196f79917c.png)

This is a quick way to schedule multiple appointments for the patient with the same field details as the original appt without having to change/edit/enter many fields again. However, no appointment is SAVED until you click the SAVE button. You can always click "add and clear" to add the first appt and clear the fields out to be able to enter in another appt for the patient. However the "add" button will remember your prior fields and you only edit/change what you need to for the next appt on this patient to schedule (while staying on the same screen).
After you click ADD (APPT), you can change and modify the fields and enter another appointment and its details. Click SAVE if you are done after scheduling multiple appointments, or keep clicking ADD (APPT) or ADD & CLEAR button to continue adding more appointments for this patient.

#### Search for Day & Location All Appointments Can Occur

Click this link to search for a day where all of the appointments (that you added) can occur. This would be used for appointments that need to happen on the same day. Example: Patient needs to be seen by the xray tech for a mammogram, then by a physician resource for an exam. And the patient would like to have them done on the same day for one trip in.

![](../adding-an-appointment-using-the-wizard-tab.assets/4f97648e155de67f36da6497a6390641.png)

The search involves looking at the day in a separate window and choosing times for each appointment you need to scheduled. When you click the *search for a day & location…* hyperlink, it will open a calendar window. The calendar window will take you to the first available date that the resource, location & appt type *schedules* match to be able to schedule all on same day.

![](../adding-an-appointment-using-the-wizard-tab.assets/c8ef997aff1cc568454dd531f2207ea0.png)

You can, of course, click on the calendar to select a different date to see if the schedules match. In this example, when I click on 2/26/2015 date, it shows *no free time* which means the schedules do not match to be able to set these appointments on a same day/location to all occur.

![](../adding-an-appointment-using-the-wizard-tab.assets/fd9b65928fadf9b7ab08576a432e3c88.png)

When the schedules do match when you are clicking calendar dates (for the appt details you are attempting to schedule all for one day & location), then you will see a hyperlink on the left with the date and location that is available (the system found a date that would match the schedules of appts you are trying to schedule all on same day).

![](../adding-an-appointment-using-the-wizard-tab.assets/c8ef997aff1cc568454dd531f2207ea0.png)

Click the hyperlink there on the left of the calendar pop-up.

![](../adding-an-appointment-using-the-wizard-tab.assets/3c4ccf547774ac88e85c9817a1390ae2.png)

It will open the multi-view scheduler view where you see the location (and the date) at the top that the appointment can occur at and both (or multiple resources) schedules shown on your view.

![](../adding-an-appointment-using-the-wizard-tab.assets/e52ca9425217b5cb15cc65cbd2174c69.png)

You could click on the time slot you want to select for the first resource that shows in the ordering (in this example: Dr Butler) Once you click on a time slot it will show a small pop-up towards the bottom that you selected that time slot for the resource appointment and appt type (like a small confirmation).

![](../adding-an-appointment-using-the-wizard-tab.assets/d2e50cc304b9f2f844cf6732a8a603a7.png)

You then select on a time slot on the left yellow bar for the next appointment resource in order (in this example: Dr Selenium) for that appointment to be scheduled. It will refresh and take you back to the appointment wizard where it has populated the date and time for these appts you wanted to occur on the same date.

![](../adding-an-appointment-using-the-wizard-tab.assets/c9b0dc68017547d5de53c1caa67bb6b2.png)

No appointments will be put on the scheduler or saved until you click the SAVE button. If you try to click the CLOSE button with appointments listed in the summary, you will get a warning.

![](../adding-an-appointment-using-the-wizard-tab.assets/3a3f40818ca3c5e7edd9b0e98918482c.png)

Once the SAVE button is clicked, those appointments are placed in the scheduler and you are taken out to that view.
* <strong>Recur (Appt):</strong> You can keep the same appointment field information (appt type, duration, resource, location & time) and create a recurring appointment. This may be used for example: Allergy Injections. After you have entered the initial appointment information into the fields, you can click RECUR APPT button. This pop open a box asking you for the reoccurrence details.

![](../adding-an-appointment-using-the-wizard-tab.assets/8a2698220b242c46b9d6ff310c97b402.png)


![](../adding-an-appointment-using-the-wizard-tab.assets/6502aa15163e0d8afcf334645b5247ca.png)

This is an example of scheduling an allergy injection for 5/14/2009 at 12:30pm and using the RECUR APPT option for every day (Repeat every 1 day) and occur 3 times.
It then listed my initial appointment (which is considered the first occurrence) and then subsequently listed the next 2 occurrences which totals the 3 occurrences that was specified.

![](../adding-an-appointment-using-the-wizard-tab.assets/eb44a71bf21ca4f8fb5c3aeb24436248.png)

You can view to the right of each appointment listing if the appointment scheduling was ok (shows as saved) or if there are any conflicts. If any conflicts (like overbooked, etc) you can Force the appointment to be scheduled anyhow, or you can find free time or view calendar to reschedule just that specific conflicted appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/32d6c74476e36f87da1d94b9fa707381.png)

If you wish to delete an appointment from the listing, click the [-] box at the left of the appointment line.
Even though this summary appointment list may list them as ‘saved' recurring appointments— they are NOT saved/scheduled until you click the SAVE button at the bottom. Using the close button will take you out and not save your appointments.
{{% note %}}

It will not allow you to SAVE appointments that have a conflict. You must either delete that appointment that has a conflict, force it, or find a new appointment time/date.
{{% /note %}}
No appointments will be put on the scheduler or saved until you click the SAVE button. If you try to click the CLOSE button with appointments listed in the summary, you will get a warning.

![](../adding-an-appointment-using-the-wizard-tab.assets/3a3f40818ca3c5e7edd9b0e98918482c.png)

Once the SAVE button is clicked, those appointments are placed in the scheduler and you are taken out to that view.
When you click the SAVE button, if there are any missing fields that your practice has deemed required or recommended, you will get that warning box. Required fields must be fixed before it will allow you to save the appointment. Recommended fields are just alerting you that your practice deems them ‘recommended fields' but you can proceed and continue to save the appointment without having to fill out that field.
*To find out how to set these fields as required or recommended or how to change them practice wide, see other help document named Required- Recommended Fields When Adding Appointments.pdf*

![](../adding-an-appointment-using-the-wizard-tab.assets/b538a9fbc605948b63d23d144bc9a9a1.png)

 ![](../adding-an-appointment-using-the-wizard-tab.assets/668e35ff42822a29a9c15095f98a1e1c.png)

You will be refreshed back to the scheduler view and will see your appointment added in your view.
Below the appointment add wizard screen (while you are scheduling an appointment) is a summary section of *Pending Appts, Past Appts, and Cancelled Appts* for that patient you are scheduling an appointment for. This is a summary for viewing purposes. If you scroll down to the bottom of the appointment wizard screen, you will see this summary if the patient has any pending/past or cancelled appointments.

![](../adding-an-appointment-using-the-wizard-tab.assets/2c1835c5c8715ad801c93c81fd89e017.png)


## Common Messages When Scheduling an Appointment


![](../adding-an-appointment-using-the-wizard-tab.assets/b810cc96f19b74d3262eec3c437430cf.png)

Time is not templated means the time of the appointment is not within the resource/physician's schedule that is set up. It means that a schedule is entered, but you are trying to schedule an appointment for a time not within those hours the physician will see patients or at the location specified in the schedule. It could also mean that the resource/physician is off that day and not seeing patients, so that time is blocked off in a schedule. This is a general warning message that the time you are trying to schedule for is not matching what is in the schedule. If you have security rights, you can force the appointment and schedule it anyway. Otherwise, it is suggested to view calendar to see why you cannot schedule that appointment or pick another day. The scheduler will not warn for non-templated times when adding an appointment for a resource that has no schedule(s) set up. All time will show as free if a resource/physician doesn't have a schedule set up.

![](../adding-an-appointment-using-the-wizard-tab.assets/fc5f4e181bf1056ee80a98101fed27bb.png)

Start time is before current time means the appointment you are trying to schedule is before today's date or today's time. You are trying to schedule an appointment in the past.

![](../adding-an-appointment-using-the-wizard-tab.assets/053eca52784f70586bd209b53b45bfa4.png)

Overbooked is a message telling you that the appointment you are trying to schedule is overbooking that time slot. Example, there may be a schedule set up for that resource/physician to only allow 2 patient appointments per time slot. If you are making an appointment and are trying to schedule a 3^rd appt for that time slot, it will give you this message that the time slot is overbooked. If you have security permission, you can force it and schedule the appt anyway. Otherwise, it is suggested to view calendar or find a different open time to schedule that appointment so it doesn't overbook the schedule.
**Deceased patient:** If the patient has been marked as deceased in the edit demographics tab and you try to add/schedule an appointment for that patient, it will alert you when you try to click SAVE that the patient is deceased and asks if you still want to add the appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/1bd04e0fc186118b7094f8ee6b7d5e57.png)

