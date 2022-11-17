---
id: '1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
title: 'Adding an Appointment Using the Wizard Tab'
date: '2020-03-10T17:21:10.201Z'
version: 69
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'Adding an Appointment Using the Wizard Tab'
    identifier: '1ONkH3eH9oQOaRqWYNyoVuO7dfjITMDjVW28IgsoHppw'
    parent: '1tF-Tk_-m1MKjLwr0A48YUO1QRDN6Y6Yu_JPedO_z30w'
    weight: 1120
---
Log into {{% system-name %}}  
Click *Scheduler* from the left sidebar menu.  
Adding or editing appointment is security permission driven. If you have the preference in My Settings of FORCE DEFAULT RESOURCES set to Yes, your scheduler view will show all the resources (physicians) schedules that you have added an appt for or edited an appt for. To only show one resource, make sure this is set to No.  
Wizard tab is the program in which you add an appointment to the Scheduler. There are 3 ways to get to the Appointment Wizard to add an appointment for a patient:
1. From the time slot in Multi or Week view
2. Clicking Wizard tab itself
3. Click Add Apt link from anywhere in the patient's e-chart.
  
## Adding an Appointment  
  
Click *Scheduler* from left sidebar menu.  
Find the day and person's schedule you want to view in Multi or Week view (you cannot add an appointment from List view).  
Click on the time slot you want to schedule to (in yellow from multi or week view) and it will automatically open the Wizard tab.  
OR  
Click the Wizard tab at the top to create a patient's appointment and choose date/time within the Wizard screen.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000054C000001DC3129777749C1120A.png)  

OR  
Click add appt from any screen in a specific patient's chart.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000049500000159590B224DDA0229D8.png)  

The Appointment Wizard screen will then open after any of the above selections.  
When the Appointment Wizard opens, it will show the *Patient* section. This is where you type in the last name of the patient for the appointment (or click the help icon and search for the patient by DOB, MR#, or SSN).
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000035F0000019846503FE3142CAC69.png)  

{{% info %}}

If you chose Add Apt from a specific patient's e-chart, then it will automatically have populated this name field with the patient you are in. And any *patient alert comments* the patient may have on their chart will appear at the top left corner of the add/edit appointment screen.
{{% /info %}}
* <strong>Patient:</strong> Search for patient by typing in the patient's <em>last name</em>. The system will then attempt to auto-complete your typing and give you choices of patients that match that last name. You can also click the help icon to search for a patient by Date of Birth, SSN or MR#. Choose the correct patient by using the up/down arrow on the keyboard to the patient's name and then the tab key to get to the next field <strong>or</strong> use your mouse and click on the correct patient's name and proceed to the next field. If you selected the wrong patient name, simply clear the patient field and begin to type the last name of the patient you want.
   * <strong>Add Patient:</strong> This is a link provided in the Patient field. If you search for the patient and do not get any auto-complete choices that are for the specific patient you need, click Add Patient link and you can load the patient into your {{% system-name %}} system manually. This will create a patient chart and MR# for that new patient. This is only to enter patients into the system that do not exist currently in {{% system-name %}} .
* <strong>Select Encounters:</strong> In the Appointment Wizard, it will show any existing <em>open</em> encounters at the time you are scheduling an appointment. You can link open encounter(s) to the appointment you are creating. The list of open encounters to link will display the encounter type name. When you are adding or editing an appointment, you can add multiple encounter links to that appointment. To get to the next field, simply use your tab key.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000020100000396000000C00F216917B53EC14E.png)  

* Once the patient checks in for that appointment, that linked open encounter will automatically appear in the appointment details, which provides easy access into that encounter for documenting.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000002FA00000055C552357B2D839998.png)  

* <strong>Select Incident:</strong> In the Appointment wizard, if there are any active incidents in the patient's record, you can link appointment to active incidents.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000003980000006ADDDBF55BC161B49C.png)  

* <strong>Select Checkin Station:</strong> In the Appointment screen, it will allow you to set a checkin station on this patient at the time you are adding this appointment. You should <strong>only set this/use this</strong> for walk-in appointments you are adding to the schedule because if you set a checkin station here, as soon as you SAVE the appointment, it will automatically checkin that patient to that station immediately. If the "Hide Occupied Stations" system setting is turned on for your system, the station dropdown in the Appointment Screen will be populated only with those stations that are unoccupied (or "lobby-like"). This checkin station selection field only shows up if you are creating a brand-new appointment, not on appointment edits. You also won't get this checkin station drop-down if the patient is already checked in somewhere. If this is a future appointment you are scheduling, you would leave this blank. If your practice doesn't want this field at all to utilize, contact your MIE Implementer and we can remove it as an available field.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000004410000008D5AC84475DB9B22D7.png)  

* <strong>Referring Physician:</strong> Begin typing the first or last name of the referrer. The system will auto-complete your typing and give you choices of matches that are in the system. The list of autocomplete choices pulls referring physicians who are tagged to the Def.User Role of Referring Physicians. Make sure referring physicians are set to this in your {{% system-name %}} system so they show up here.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000000000001DC000000188C9C60FC3CDEB9C8.png)  

* Click on the referring physician that you want .This field will not accept manually, free-typed names. You must select from the auto-complete choices. You can select more than one referrer. If you wish to delete a referrer you have entered, simply click on the minus ( - ) sign to the left of the name. (In the new appt screen, the referring physician input can be replaced with a list edit that inputs a user and their role. So, a physician can be added as the ‘ordering' rather than the referring or any other type of role the system has set up. This carries over to the encounter created from the appointment.)
* <strong>Chief Complaint:</strong> Type in complaint/problem, etc Limited to 30 characters
* <strong>Contact:</strong> Type in any contact information for this appt. Maybe who requested the appointment, or any other contact info.
* <strong>Contact Number:</strong> Type in the phone number for the contact.
* <strong>Confirmed:</strong> Can checkmark this box if you have confirmed the appointment with the person. On the appt schedule view, a [c] will appear if you have changed your settings to view this (for confirmed), or a [u] will appear for un-confirmed.
* <strong>Email Patient:</strong> You must have security permission to <em>Send Email to Patients</em> set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature. Select an email template <em>if</em> you wish to send the patient an email regarding the appointment just scheduled.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000015800000011D3D98B9B7483250F.png)  

* <strong>I-Calender Invice (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
* <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
* <strong>Send me RSVP:</strong> Checkmark this if you wish to receive an RSVP via email. When the appointment is accepted or declined by the recipient, the logged in user will receive an RSVP email sent out by the recipient's email client.
* <strong>CC: (carbon copy)</strong> You can type in the first or last name of a user within {{% system-name %}} & this email will be sent to the {{% system-name %}} user also. It will auto-complete {{% system-name %}} users for you to choose from. You cannot free type in an email address. It has to be selected from the auto-complete of users in your system. If the user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
* <strong>Comment:</strong> Can type a comment and it will appear in the schedule views. Any comment associated w/ the appointment type selected will appear here also, unless there is already a comment typed here previously.
* <strong>Due Date:</strong> indicates that the appt needs to be scheduled by that date. This is used for our Corporate Health clients when an appt is on the waiting list and the employee needs to choose an appt time by that due date.
* <strong>Visible Date:</strong> Visible date is the date the waiting list appointment will display to the employee on the employee portal, and the date they will receive an email invitation to schedule their appointment.  There is a period prior to that visible date where everything is setup and it allows time for the line manager to review to make sure the patient is in the correct panel(s) before the email invitation is sent.  This is only used for Corporate Health clients. Visible date may also be utilized by health practices that cannot schedule patients yet because they don't schedule physicians ahead of time and need to send a recall letter to a patient on that date to remind them to now call to schedule their appointment. (If wish to utilize this in that capacity, please contact your MIE Implementer).
  
### Patient Visits  

The next section is *Patient Visits*.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000004E1000000DCCA9DE68E13407F37.png)  

* <strong>Resource:</strong> Required field. The resource will default and show/populate the name of the physician whose scheduler view you are set to or last worked in. Simply click the [-] minus button to get rid of it if you wish to select a different resource for this appointment. In the resource field, begin typing the last or first name of the physician to schedule with. The system will auto-complete to give you choices.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000023C00000073EB341C9BD9E52000.png)  

* Resources are users preloaded in your {{% system-name %}} system. They must belong to a specified department to be considered a resource. In most systems, it is called a SysSched department. Some use the physicians department. If you want to add another physician/therapist, etc to this appointment for this patient, then after you initial selection, simply begin typing another last or first name in the resource field and choose it. Continue until you are done. If you selected a wrong resource, click the [-] minus sign to delete that selection.
* <strong>Appt (Appointment) Types:</strong> Begin typing in the appointment type the patient is being seen for. The system will auto-complete to give you choices of active appt types. If you selected a wrong appt type, click the [-] minus sign on the appt type to remove it. To add another appointment type for this specific appointment, simply begin typing another appt type and choose it. Continue until you are done. <em>Hit your down arrow key on your keyboard here to see a complete list of appointment type choices your system has—instead of using the auto-complete if you wish.</em>
* <strong>Location:</strong> The location automatically defaults to show the location you are set to in your default settings (MY SETTINGS). If you wish to change the location for this appointment, simply begin typing in the name of the location and it will auto-complete to give you choices. You can only make ONE location choice for the appointment.
   * It does not show outside locations as choices in the auto-complete field. <em>Hit your down arrow key on your keyboard here to see a complete list of location choices your system has—instead of using the auto-complete if you wish.</em>
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000003F30000003514041BA7C63FDAB6.png)  

* <strong>Date/Time:</strong> Pick the date of the appointment. Automatically pops-up today's date & time or the date & time you selected when you clicked the yellow time slot in a view. Type in a different date using that format, or click <em>Pick Date</em> and it will pop up a calendar to choose your date from. <strong>To put a patient on the Waiting List</strong> you must click USE WAITLIST button and the date/time field will clear out, then just click "add" to add the appt and it will then put this patient in the waiting list.
* <strong>Jump To:</strong> You can leave the date/time as today's default, but then simply use the <em>Jump To</em> drop down to get quickly to another week/month, etc date from now. When you then click find time it will open to show free times for that jumped to date.
* <strong>Duration:</strong> This automatically pops-up the duration of the appointment according to the Appt. type you selected. To add or subtract time to the appointment, change this field using the numeric specified.
* <strong>Find Time:</strong> This works if schedules are set up. When this searches for free time, it needs to have the free time templated. (Templated means that physician/resource would have a schedule loaded.) Example: your site is open from 8am to 9pm during the week, so you have a schedule set for that time. If you have your date set or used the <em>jump to</em> feature, and you click FIND TIME, it will open up a separate box showing FREE TIMES for that specific resource(s) for that location and for the specific date. Simply click the select link to the appointment slot you wish to grab. It will populate the date/time fields with that selection. You can also use the monthly calendar view to its side to choose a different date/month and view free times to select.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000026A000000FC8904A23E901FBE71.png)  

  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000000000000212000000A79D15D3797CB7142D.png)  

* <strong>View Calendar:</strong> Click this button and it will pop-up the multi-view schedule of the Resource (doctor/date) that you selected. You can click on a time slot (in yellow) or choose another date from the calendar at the far, right side. When you have selected the time/date in yellow that you wish, then it automatically puts that date and time in the <strong>date/time</strong> box above.
Once you have your appointment information in the fields, click the SAVE button. It will automatically add and schedule that appointment. It then takes you out to the multi-view of the scheduler. If you wish to add another appt for the same patient or set a recurring appointment, see the **options** described below.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000020100000476000000C84F93448AFFB50C81.png)  

* <strong>Options:</strong> In the options column, there are options that can be used for scheduling multiple appointments for the same patient. ADD & CLEAR, ADD & RECUR.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000000BB00000036950394A0E0CBFCB5.png)  

* <strong>Add & Clear:</strong> If you have another appt to schedule for this patient, instead of clicking the SAVE button after you've created your first appt for this patient, you can click ADD & CLEAR button to add the appt then clear the resource, appt types field, etc to add another appt for the patient. The CLEAR portion clears the appt fields so you can enter another appt for the patient and have those fields cleared to start the next appt. The ADD & CLEAR button adds an appointment and clears the resources, apt types fields, etc. This way you don't have to clear the fields manually and change when making another/multiple appt for this patient. However, no appointment is SAVED until you click the SAVE button.
* <strong>Add (Appt):</strong> If you have another appt to schedule for this patient, instead of clicking the SAVE button after you've created your first appointment for this patient, you can click ADD instead. It then lists that first appointment you created in a summary listing and you are free to add/schedule another appointment for this same patient. You just go up and edit the fields you need to change for the next appt to schedule on this patient.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000047C000000FE5D8D1AE68F6F8404.png)  

This is a quick way to schedule multiple appointments for the patient with the same field details as the original appt without having to change/edit/enter many fields again. However, no appointment is SAVED until you click the SAVE button. You can always click "add and clear" to add the first appt and clear the fields out to be able to enter in another appt for the patient. However the "add" button will remember your prior fields and you only edit/change what you need to for the next appt on this patient to schedule (while staying on the same screen).
After you click ADD (APPT), you can change and modify the fields and enter another appointment and its details. Click SAVE if you are done after scheduling multiple appointments, or keep clicking ADD (APPT) or ADD & CLEAR button to continue adding more appointments for this patient.
  
#### Search for Day & Location All Appointments Can Occur  

Click this link to search for a day where all of the appointments (that you added) can occur. This would be used for appointments that need to happen on the same day. Example: Patient needs to be seen by the xray tech for a mammogram, then by a physician resource for an exam. And the patient would like to have them done on the same day for one trip in.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000047E0000010D4ABF2E9535681744.png)  

The search involves looking at the day in a separate window and choosing times for each appointment you need to scheduled. When you click the *search for a day & location…* hyperlink, it will open a calendar window. The calendar window will take you to the first available date that the resource, location & appt type *schedules* match to be able to schedule all on same day.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000040A000000C386AA69E7C4939C65.png)  

You can, of course, click on the calendar to select a different date to see if the schedules match. In this example, when I click on 2/26/2015 date, it shows *no free time* which means the schedules do not match to be able to set these appointments on a same day/location to all occur.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000020100000429000000C55EAB05598659947D.png)  

When the schedules do match when you are clicking calendar dates (for the appt details you are attempting to schedule all for one day & location), then you will see a hyperlink on the left with the date and location that is available (the system found a date that would match the schedules of appts you are trying to schedule all on same day).
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000040A000000C386AA69E7C4939C65.png)  

Click the hyperlink there on the left of the calendar pop-up.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100002010000040A000000C392ADDD14A3942980.png)  

It will open the multi-view scheduler view where you see the location (and the date) at the top that the appointment can occur at and both (or multiple resources) schedules shown on your view.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000020100000435000001FC0EA52978CC068F8F.png)  

You could click on the time slot you want to select for the first resource that shows in the ordering (in this example: Dr Butler) Once you click on a time slot it will show a small pop-up towards the bottom that you selected that time slot for the resource appointment and appt type (like a small confirmation).
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000003CA000002892C61B1A47DB260D5.png)  

You then select on a time slot on the left yellow bar for the next appointment resource in order (in this example: Dr Selenium) for that appointment to be scheduled. It will refresh and take you back to the appointment wizard where it has populated the date and time for these appts you wanted to occur on the same date.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000002E40000007EF852A2B1C6D0B0D1.png)  

No appointments will be put on the scheduler or saved until you click the SAVE button. If you try to click the CLOSE button with appointments listed in the summary, you will get a warning.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000001C8000000A87EE2DCD1FE571C47.png)  

Once the SAVE button is clicked, those appointments are placed in the scheduler and you are taken out to that view.
* <strong>Recur (Appt):</strong> You can keep the same appointment field information (appt type, duration, resource, location & time) and create a recurring appointment. This may be used for example: Allergy Injections. After you have entered the initial appointment information into the fields, you can click RECUR APPT button. This pop open a box asking you for the reoccurrence details.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000000000000A400000044B9CB703B7EED1C7A.png)  

  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000016500000098134219E1A56F1EB1.png)  

This is an example of scheduling an allergy injection for 5/14/2009 at 12:30pm and using the RECUR APPT option for every day (Repeat every 1 day) and occur 3 times.
It then listed my initial appointment (which is considered the first occurrence) and then subsequently listed the next 2 occurrences which totals the 3 occurrences that was specified.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/1000000000000458000000F8C15CC6F42D67F30D.png)  

You can view to the right of each appointment listing if the appointment scheduling was ok (shows as saved) or if there are any conflicts. If any conflicts (like overbooked, etc) you can Force the appointment to be scheduled anyhow, or you can find free time or view calendar to reschedule just that specific conflicted appointment.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000034B0000003316730D84B4C04D79.png)  

If you wish to delete an appointment from the listing, click the [-] box at the left of the appointment line.
Even though this summary appointment list may list them as ‘saved' recurring appointments— they are NOT saved/scheduled until you click the SAVE button at the bottom. Using the close button will take you out and not save your appointments.
{{% note %}}

It will not allow you to SAVE appointments that have a conflict. You must either delete that appointment that has a conflict, force it, or find a new appointment time/date.
{{% /note %}}
No appointments will be put on the scheduler or saved until you click the SAVE button. If you try to click the CLOSE button with appointments listed in the summary, you will get a warning.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000201000001C8000000A87EE2DCD1FE571C47.png)  

Once the SAVE button is clicked, those appointments are placed in the scheduler and you are taken out to that view.
When you click the SAVE button, if there are any missing fields that your practice has deemed required or recommended, you will get that warning box. Required fields must be fixed before it will allow you to save the appointment. Recommended fields are just alerting you that your practice deems them ‘recommended fields' but you can proceed and continue to save the appointment without having to fill out that field.
*To find out how to set these fields as required or recommended or how to change them practice wide, see other help document named Required- Recommended Fields When Adding Appointments.pdf*
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000018C0000008AD621C0FDC16DE462.png)  
  
 ![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000018A00000084DDADBE1734564120.png)  

You will be refreshed back to the scheduler view and will see your appointment added in your view.
Below the appointment add wizard screen (while you are scheduling an appointment) is a summary section of *Pending Appts, Past Appts, and Cancelled Appts* for that patient you are scheduling an appointment for. This is a summary for viewing purposes. If you scroll down to the bottom of the appointment wizard screen, you will see this summary if the patient has any pending/past or cancelled appointments.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000024C000000EBB67B054844B7C4EE.png)  

  
## Common Messages When Scheduling an Appointment  

  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000016B0000001E9AF4048AA00FB4F9.png)  

Time is not templated means the time of the appointment is not within the resource/physician's schedule that is set up. It means that a schedule is entered, but you are trying to schedule an appointment for a time not within those hours the physician will see patients or at the location specified in the schedule. It could also mean that the resource/physician is off that day and not seeing patients, so that time is blocked off in a schedule. This is a general warning message that the time you are trying to schedule for is not matching what is in the schedule. If you have security rights, you can force the appointment and schedule it anyway. Otherwise, it is suggested to view calendar to see why you cannot schedule that appointment or pick another day. The scheduler will not warn for non-templated times when adding an appointment for a resource that has no schedule(s) set up. All time will show as free if a resource/physician doesn't have a schedule set up.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000000000001B200000019C83C489066E6BA10.png)  

Start time is before current time means the appointment you are trying to schedule is before today's date or today's time. You are trying to schedule an appointment in the past.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/10000000000000FE0000001ADC53C4D32475E67F.png)  

Overbooked is a message telling you that the appointment you are trying to schedule is overbooking that time slot. Example, there may be a schedule set up for that resource/physician to only allow 2 patient appointments per time slot. If you are making an appointment and are trying to schedule a 3^rd appt for that time slot, it will give you this message that the time slot is overbooked. If you have security permission, you can force it and schedule the appt anyway. Otherwise, it is suggested to view calendar or find a different open time to schedule that appointment so it doesn't overbook the schedule.
**Deceased patient:** If the patient has been marked as deceased in the edit demographics tab and you try to add/schedule an appointment for that patient, it will alert you when you try to click SAVE that the patient is deceased and asks if you still want to add the appointment.
  
![](../adding-an-appointment-using-the-wizard-tab.assets/100000000000032D000000C217F83FCE4BA76336.png)  

