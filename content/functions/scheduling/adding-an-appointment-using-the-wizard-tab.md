---
id: '1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
title: 'Adding an Appointment Using the Wizard Tab'
date: '2024-04-25T11:14:26.372Z'
version: 389
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Scheduling/Adding appointments can be done in many places within {{% system-name %}} but a centralized method is from the Wizard tab within the Scheduler module.

Adding an appointment anywhere in {{% system-name %}} requires appropriate security permission.

## Adding an Appointment using the Wizard Tab from Scheduler Module

Click *Scheduler* from the left sidebar menu and advance to the *Wizard* tab at the top.

![](../adding-an-appointment-using-the-wizard-tab.assets/dca0ca9a8a948e990606979eb66e6cd9.png)

The *Add Appointment* screen will display.  This is an option as a centralized method to schedule/add an appointment onto the schedule.

When the Add Appointment wizard screen opens, it will show various fields to add an appointment successfully.

![](../adding-an-appointment-using-the-wizard-tab.assets/48caf407dd1f0e2ba3265ef14fcce4f7.png)

This will help describe each field found on the Add Appointment screen:

* <strong>Patient:</strong> Search for the patient chart that this appointment is for.  Various search methods exist, but typically keying in last name, followed by a portion of first name is what is used.  Use the auto-complete to select the specific patient match.
    * <strong>Alerts</strong>: Any Alerts on the patient's chart and/or the patient's related employer organization chart, will appear at the top in red for visibility during an appointment scheduling process.

![](../adding-an-appointment-using-the-wizard-tab.assets/a4c1bc8b028759611b4d023170a1d31e.png)

* <strong>Add Patient or Add Employee hyperlink:</strong> This is a hyperlink provided next to the Patient field. When searching for a patient chart and do not get any auto-complete choices that are for the specific patient chart you need, the <em>Add Patient</em> or <em>Add Employee</em> hyperlink will allow you to manually add the patient chart to the system from here.

![](../adding-an-appointment-using-the-wizard-tab.assets/5777e518b18b62a254d84dd7200361d7.png)

* <strong>Select Encounter:</strong> this selection box will show any existing <em>open</em> encounters for this patient's chart. You can link any open encounter(s) to the appointment you are creating. The list of open encounters available to link, will display the encounter type name. When you are adding or editing an appointment, you can link multiple open encounter(s) to that appointment if needed or if workflow appropriate.

![](../adding-an-appointment-using-the-wizard-tab.assets/5f9677e2a66502a532a595808c555838.png)

{{% note %}}
Any linked encounters to an appointment, will display in the scheduler module if your preference is set to show linked encounters on scheduled appointments.

![](../adding-an-appointment-using-the-wizard-tab.assets/c027d709328c56e1e54c0de7ced7f8d3.png)
{{% /note %}}

* <strong>Select Incident:</strong> this selection box will show any existing active (open) cases/incidents for this patient's chart.  You can link any open case/incident to the appointment you are creating.  The list of open cases/incidents available to link, will display the case number, type and onset of injury/illness. When you are adding or editing an appointment, you can link an open case/incident to that appointment if needed or if workflow appropriate.

![](../adding-an-appointment-using-the-wizard-tab.assets/077e8b9f2dcf797702d14e11854e3b06.png)

* <strong>Select Due List Items:</strong> this selection box will show any pending due list items that are not marked as ‘scheduled'.  You can link any pending due list items to the appointment you are creating.  The list of pending due list items available to link, will display the due list item name and its due date.  When you are adding or editing an appointment, you can link a pending due list item to that appointment if needed or if workflow appropriate.

![](../adding-an-appointment-using-the-wizard-tab.assets/fed960785fb15a076f0dc09274a0c1fa.png)

{{% note %}}
If you link any pending due list items to a successfully scheduled appointment, then the pending due list item will display that scheduled appointment date/time in the *Scheduled* column next to the pending due list items, which is visible within the Due List chart tab.  It is also visible in the Encounter Orders search report, Active Due List Items report and Global Due List Search report.

![](../adding-an-appointment-using-the-wizard-tab.assets/f690b183dd9ef5e844e120f476263bef.png)
{{% /note %}}

* <strong>Select Checkin Station:</strong> this should only be used if you add appointments to the schedule for walk-in appointment workflow needs and is not to be used for future appointments being scheduled.  This selection box will allow you to set a checkin station on this patient at the time you are adding this appointment. You should <strong>only set this/use this</strong> for walk-in appointments you are adding to the schedule because if you set a checkin station here, as soon as you SAVE the appointment, it will automatically checkin that patient to that station immediately. If the <em>Hide Occupied Stations</em> system setting is turned on for your system, the station dropdown in this Add Appointment screen will be populated only with those stations that are unoccupied (or "lobby-like"). This checkin station selection field only shows up if you are creating a brand-new appointment, not on appointment edits. You also won't get this checkin station drop-down if the patient is already checked in somewhere. If this is a future appointment you are scheduling, you would leave this blank. If your practice doesn't want this field at all to utilize, contact your MIE Implementer who can remove it as an available field.

![](../adding-an-appointment-using-the-wizard-tab.assets/6f5bdef529a4f8809279dc9c19b0405b.png)

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
* <strong>Visible Date:</strong> Visible date is an optional field typically used with health surveillance needs. Visible date indicates the date the waiting list appointment will display to the employee on the employee portal visibly to self schedule, and the date they will receive an email invitation to schedule their visible appointment or questionnaires to become visible on the portal for filling out and submitting.  Sometimes visible date is set as a future date and is a period (between now and the visible date) where everything is set up by automated evaluators and clinicians may have workflows or reports to review charts or even line managers in order to review to make sure the person is in the correct health surveillance panel(s) before the email invitation is sent or things (appointments & questionnaires, etc) become visible on the portal to the patient or employee.  This is typically only used for Corporate Health clients. Visible date may also be utilized by health practices that cannot schedule patients yet because they don't schedule provider's ahead of time.

### Patient Visits Section

The next section is *Patient Visits*.

![](../adding-an-appointment-using-the-wizard-tab.assets/f033c5f9597aa82a5396bc3aca92574d.png)

* <strong>Resource:</strong> Required field. The resource will default and show/populate the name of the provider(s) whose scheduler view you are set to or last worked in. Simply click the [-] minus button to get rid of any listed resource/provider names if you wish to select a different resource for this appointment. In the resource field, begin typing the last or first name of the provider to schedule with. The system will auto-complete to give you choices of providers that are tied to a department that is linked to the system setting <em>Scheduling Realm</em>. To put someone on a waitlist, the appointment can be set to select the Scheduler Waiting List resource from the auto-complete.   <em>HINT: Hit your down arrow key on your keyboard within the Resource field to see a complete list of resource/provider choices your system has, instead of using the auto-complete if you wish.</em>

![](../adding-an-appointment-using-the-wizard-tab.assets/7c7eb34be8eb91fa9e96aa4aba2e5805.png)

* Resources are users preloaded in your {{% system-name %}} system. Resources must belong to a specified department to be considered within the <em>Scheduling Realm</em> system setting. If you want to add another physician/therapist, etc to this appointment for this patient, then after your initial selection, simply begin typing another last or first name in the resource field and choose it. Continue until you are done. If you selected the wrong resource, click the [-] minus sign to delete that selection.
* <strong>Appt (Appointment) Types:</strong> Begin typing in the appointment type the patient is being scheduled for. The system will auto-complete to give you choices of active appointment types configured to the system. If you selected the wrong appt type, click the [-] minus sign on the appt type to remove it. To add another appointment type for this specific appointment, simply begin typing another appt type and choose it. Continue until you are done. <em>HINT: Hit your down arrow key on your keyboard within the Appt Types field to see a complete list of appointment type choices your system has, instead of using the auto-complete if you wish.</em>

![](../adding-an-appointment-using-the-wizard-tab.assets/d3d94aa0f160e9f12ba804cf73cf4019.png)

* <strong>Location:</strong> The location automatically defaults to show the location you are set to in your default settings (MY SETTINGS). If you wish to change the location for this appointment, simply begin typing in the name of the location and it will auto-complete to give you choices. You can only make ONE location choice for the appointment.
    * It does not show outside locations as choices in the auto-complete field. <em>HINT: Hit your down arrow key on your keyboard here to see a complete list of location choices your system has, instead of using the auto-complete if you wish.</em>

![](../adding-an-appointment-using-the-wizard-tab.assets/b8f735cd6cdcec51c4c9160736e06d9e.png)

* <strong>Date/Time:</strong> Pick the date for the scheduled appointment. Automatically pops-up today's date & time or the specific date & time of the slot you selected when you clicked the yellow time slot in a general scheduler view. Type in a different date using that format, or click <em>Pick Date</em> and it will pop up a calendar to choose your date from.
    * <em>TIP: Use the</em> <strong><em>Find Time</em></strong>'<em> or</em> <strong><em>View Calendar</em></strong>'<em></em> buttons available, to find an empty slot to schedule this specific appointment for (according to the resource, appt type & location's schedule you selected above)

![](../adding-an-appointment-using-the-wizard-tab.assets/1b2debe81a1bae9a1e1b45a6194170f8.png)

* <strong>To put a patient on the Waiting List</strong> you must click the USE WAITLIST button and the date/time field will clear out, then just click "add" to add the appointment and it will then put this patient in the waiting list, which has separate reporting for visibility.

![](../adding-an-appointment-using-the-wizard-tab.assets/e6040a013bfb5926d26f92cb3215895f.png)

* <strong>Jump To:</strong> You can leave the date/time calendar (from Pick Date method) as today's default, but then simply use the <em>Jump To</em> drop down to get quickly to another week/month, etc date from now. When you then click find time it will open to show free times for that jumped to date.

![](../adding-an-appointment-using-the-wizard-tab.assets/27a7bc175bb6ef454b3127ac12646217.png)

* <strong>Duration:</strong> This automatically pops-up the duration of the appointment according to the appointment type you selected. To add or subtract time to the appointment, change this field using the numeric specified.

![](../adding-an-appointment-using-the-wizard-tab.assets/d14f67a209d6defccfcb73d9bb69a06f.png)

* <strong>Find Time:</strong> This works if schedules are set up. When this searches for free time, it needs to have the free time templated. Templated means that a specific provider/resource would have a schedule loaded for that specific location.  Example: your site is open from 8am to 9pm during the week, so you have a schedule set for that time per resource/provider that works that schedule. If you have your date set or used the <em>jump to</em> feature, and you click FIND TIME, it will open up a separate box showing FREE TIMES for that specific resource(s) for that location and for the specific date.

![](../adding-an-appointment-using-the-wizard-tab.assets/af005091765cde860b80d10dd34a5fda.png)

* Simply click the Select hyperlink for the free appointment slot you wish to grab. It will populate the date/time fields with that selection.

![](../adding-an-appointment-using-the-wizard-tab.assets/13935183d81188ad7eb2d06fda812c49.png)

* <strong>View Calendar:</strong> Click this button and it will pop-up the Multi-View schedule of the Resource/location/date that you had input. You can click on an open time slot to grab or choose another date from the calendar at the far, right side. When you have selected the time/date in yellow that you wish, then it automatically puts that date and time in the <strong>date/time</strong> box to schedule the appointment for.

![](../adding-an-appointment-using-the-wizard-tab.assets/46806542d741603e916004b8e47fa221.png)

Once you have your appointment information in the fields, click the SAVE button. It will automatically add that appointment to the system as a scheduled appointment with that resource, location, appointment type on the selected date/time.

![](../adding-an-appointment-using-the-wizard-tab.assets/259c61e90137f247c21a3ce006cc10e9.png)

Once you've saved the appointment to be scheduled (with the details), the system takes you to the Multi-View of the scheduler with the newly added/scheduled appointment highlighted in **pink**.  Pink is proof that it scheduled that appointment for that resource, location and on the date/time slot indicated.

![](../adding-an-appointment-using-the-wizard-tab.assets/426fe6948b58a0ca4fd0abd9424df044.png)

### Options for recurring appointment needs

* <strong>Options:</strong> In the options column, there are options that can be used for scheduling multiple appointments for the same patient. ADD & CLEAR, ADD, or RECUR.

![](../adding-an-appointment-using-the-wizard-tab.assets/69cc592b1bf4be843000e4e95c28e691.png)

* <strong>Add & Clear:</strong> If you have another appointment to schedule for this patient, instead of clicking the SAVE button after you've detailed the first appointment for this patient, you can click ADD & CLEAR button to add the appointment to a list on your screen, then clears the resource, appt types field, etc to add another appointment for the patient. The CLEAR portion clears the appt fields so you can enter another appt for the patient and have those fields cleared to start the next appt. The ADD & CLEAR button adds an appointment and clears the resources, appt types fields, etc. This way you don't have to clear the fields manually and change when making another/multiple appt for this patient. However, no appointment is SAVED until you click the SAVE button.

![](../adding-an-appointment-using-the-wizard-tab.assets/2572a3d80b4b3fd8bcd5ca9f564bb22e.png)

* <strong>Add (Appt):</strong> If you have another appointment to schedule for this patient, instead of clicking the SAVE button after you've created your first appointment for this patient, you can click ADD instead. It then lists that first appointment you created in a summary listing and you are free to add/schedule another appointment for this same patient. You just go up and edit the fields you need to change for the next appointment to schedule on this patient.

![](../adding-an-appointment-using-the-wizard-tab.assets/97ef1823fc7a5214c301ddb506df5ab5.png)

This is a quick way to schedule multiple appointments for the patient with the same field details as the original appointment without having to change/edit/enter many fields again. However, no appointment is SAVED until you click the SAVE button. You can always click "add and clear" to add the first appt and clear the fields out to be able to enter in another appt for the patient. However the "add" button will remember your prior prefilled fields and you only need to edit/change what you need to for the next appt for this patient to schedule (while staying on the same screen).

After you click ADD (APPT), you can change and modify the fields and enter another appointment and its details. Click SAVE if you are done after scheduling multiple appointments, or keep clicking ADD (APPT) or ADD & CLEAR button to continue adding more appointments for this patient.

## Schedule Back to Back Appointments

* Enter in details for the first appointment, but clear out the date/time field so there is none set OR set it to Use Waitlist so the date/time is empty

![](../adding-an-appointment-using-the-wizard-tab.assets/964837508c2a9967cf6a37d468621bc1.png)

* Click the <strong>Add & Clear</strong> button
    * The appointment gets listed under in a section

![](../adding-an-appointment-using-the-wizard-tab.assets/4540f644e59cad1d227172eccdbb98f9.png)

* Then enter in details for the next appointment (both appointments <strong>must</strong> be for the same location to accommodate back to back appointments), but clear out the date/time field so there is none set OR set it to Use Waitlist so the date/time is empty

![](../adding-an-appointment-using-the-wizard-tab.assets/c7d587e84202830d021fdc8f9168f4af.png)

* Click the <strong>Add & Clear</strong> button
    * The appointment gets listed with the other, under in a section

![](../adding-an-appointment-using-the-wizard-tab.assets/5553f5711e20e58616c05008f5a0d5ad.png)

* Click the <strong>Search for a day and location where all of these appointments can occur</strong><strong></strong> hyperlink, to find times both appointments can happen on the same day

![](../adding-an-appointment-using-the-wizard-tab.assets/e5c8948a942721d1d1d1f83f9db97518.png)

* With in the <strong>Free Times</strong> pop-up window, select a specific calendar date from the calendar picker

![](../adding-an-appointment-using-the-wizard-tab.assets/3edff5a5b5f1fbfd4b6b2509e8a0c0a8.png)

* Once you've selected a specific calendar date from the calendar picker, then click the date hyperlink in the same pop-up window that is highlighted in (typically) light blue

![](../adding-an-appointment-using-the-wizard-tab.assets/e34533d409774786859c14db2a02a3b7.png)

* The Multi-View of the Scheduler will display in another window which will show a split schedule for both resources you had indicated needing appointments within the above appointment details.

![](../adding-an-appointment-using-the-wizard-tab.assets/020941870063a340e8e7bc548f164f79.png)

* Locate a date & time that would work for both appointments back-to-back.  HINT: You can use the calendar picker on the far right side of this split schedule, to select a different date to find availability back-to-back.

![](../adding-an-appointment-using-the-wizard-tab.assets/a05fd4661d7894a4ef32ad1ae24ef7b7.png)

* Click on a timeslot for the first appointment, then click on a timeslot for the second appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/236938f679c06edbe079a4ac14a8c917.png)

* Once you've selected a slot for each back-to-back listed appointment, the system will automatically close the split-schedule scheduler pop-up view and will return you to the Add Appointment screen you were working in.
* You will see dates & times now assigned to the appointments you searched to accommodate a back-to-back need.

![](../adding-an-appointment-using-the-wizard-tab.assets/03ce3c3263869145908ea6a306a3fcb4.png)

* Click the SAVE<strong></strong> button to save your work to put (schedule) those appointments on the books.

![](../adding-an-appointment-using-the-wizard-tab.assets/396a54841b043219f0b0b73c6dec5aa0.png)

* You will be taken to the Multi-View schedule screen, where it shows you in Pink (pink is proof) that it scheduled the appointments.  Note: It will show you proof of the first appointment scheduled in the back-to-back need.

![](../adding-an-appointment-using-the-wizard-tab.assets/f57fd70f9c8a9311df342054afc95097.png)

* You can toggle the Resource drop-down to select the other provider that the back-to-back second appointment was for, and you will see it already scheduled also.

![](../adding-an-appointment-using-the-wizard-tab.assets/af75e8ea474a1c7fd546edeb3f4f64f2.png)

## Schedule Recurring Appointments

* <strong>Recur (Appt):</strong> You can keep the same appointment field information (appt type, duration, resource, location & time) and create a recurring appointment. This may be used for example for weekly or monthly Allergy Injections. After you have entered the initial appointment information into the fields, you can click the RECUR button. This pops open a box asking you for the repeat appointment details.   Once you have entered the repeat details, clicking SAVE will add the current appointment repeatedly, incrementing the date according to your criteria.It will also save the appointments so that you can see any conflicts on the schedule and resolve them individually.

![](../adding-an-appointment-using-the-wizard-tab.assets/0fea8fcceed5206262233d3790f7f84f.png)

This is an example of scheduling an allergy injection for 5/7/2024 and using the RECUR APPT option for every week and occurring 3 times.

It then listed my initial appointment (which is considered the first occurrence) and then subsequently listed the next 2 occurrences which totals the 3 occurrences (times) that were specified.

![](../adding-an-appointment-using-the-wizard-tab.assets/179d531ff30814daaf1a88747a4f7d15.png)

You can view to the right of each appointment listing if the appointment scheduling was ok (shows as saved) or if there are any conflicts. If any conflicts (like overbooked, etc) you can Force the appointment to be scheduled anyhow, or you can find free time or view calendar to reschedule just that specific conflicted appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/6680e7ca5238105aa78e296b61f8859f.png)

If you wish to delete an appointment from the listing, click the [-] box at the left of the appointment line.

Even though this summary appointment list may list them as ‘saved' recurring appointments— they are NOT saved/scheduled until you click the SAVE button at the bottom. Using the close button will take you out and not save your appointments.

{{% note %}}
The system will not SAVE appointments that have a conflict. You must either delete that appointment that has a conflict, force it, or find a new appointment time/date.  Successful saved appointments have *Saved* next to each listed on the far right.
{{% /note %}}

No appointments will be put on the scheduler or saved until you click the SAVE button. If you try to click the CLOSE button with appointments listed in the summary (and unsaved or unconflicted), you will get a warning.

![](../adding-an-appointment-using-the-wizard-tab.assets/fb7e4fb2dad7789f3ca0be055f6c4631.png)

Once the SAVE button is clicked, those appointments are successfully placed in the scheduler and you are taken out to that view.

When you click the SAVE button, if there are any missing fields that your practice has deemed required or recommended, you will get that warning box. Required fields must be fixed before it will allow you to save the appointment. Recommended fields are just alerting you that your practice deems them ‘recommended fields' but you can proceed and continue to save the appointment without having to fill out that field.

*To find out how to set these fields as required or recommended or how to change them practice wide, see other help document named Required- Recommended Fields When Adding Appointments.pdf*

![](../adding-an-appointment-using-the-wizard-tab.assets/fd41f2f05366cd390d9eed0aabcd446f.png)

You will be refreshed back to the scheduler view and will see your appointment added in your view.

Below the appointment add wizard screen (while you are scheduling an appointment) is a summary section of *Pending Appts, Past Appts, and Cancelled Appts* for that patient you are scheduling an appointment for. This is a summary for viewing purposes. If you scroll down to the bottom of the appointment wizard screen, you will see this summary if the patient has any pending/past or cancelled appointments.

![](../adding-an-appointment-using-the-wizard-tab.assets/6f4a02d317062dd783ff0967f0fec6de.png)

## Common Messages When Scheduling an Appointment

#### Time is not templated

![](../adding-an-appointment-using-the-wizard-tab.assets/b810cc96f19b74d3262eec3c437430cf.png)

Time is not templated means the time of the appointment is not within the resource/provider's schedule that is set up. It means that a schedule is entered, but you are trying to schedule an appointment for a time not within those hours the provider will see patients or at the location specified in the schedule. It could also mean that the resource/provider is off that day and not seeing patients, so that time is blocked off in a schedule. This is a general warning message that the time you are trying to schedule for is not matching what is in the schedule. If you have security rights, you can force the appointment and schedule it anyway. Otherwise, it is suggested to use the View Calendar button to see why you cannot schedule that appointment or pick another day. The scheduler will not warn for non-templated times when adding an appointment for a resource that has no schedule(s) set up. All time will show as free if a resource/provider doesn't have a schedule set up.

#### Start time is before current time

![](../adding-an-appointment-using-the-wizard-tab.assets/fc5f4e181bf1056ee80a98101fed27bb.png)

Start time is before the current time means the appointment you are trying to schedule is before today's date or today's current time that your workstation shows. You are trying to schedule an appointment in the past.

#### Overbooked

![](../adding-an-appointment-using-the-wizard-tab.assets/053eca52784f70586bd209b53b45bfa4.png)

Overbooked is a message telling you that the appointment you are trying to schedule is overbooking that time slot. For example, there may be a schedule set up for the resource/provider to only allow 2 patient appointments per time slot. If you are scheduling an appointment and are trying to schedule a 3rd appt for that time slot, it will give you this message that the time slot is overbooked. If you have security permission, you can force it and overbook the appointment anyway. Otherwise, it is suggested to use the View Calendar button or Find Time button to find a different open time to schedule that appointment, so it doesn't overbook their schedule.

#### Deceased Patient

**Deceased patient:** If the patient has been marked as deceased in the demographics tab and you try to add/schedule an appointment for that patient, the system will alert you when you try to click SAVE.  The system notifies you that the patient chart is marked as deceased and asks if you still want to add/schedule the appointment.

![](../adding-an-appointment-using-the-wizard-tab.assets/efa989dbdd6f33050055c45d7a0cd78e.png)
