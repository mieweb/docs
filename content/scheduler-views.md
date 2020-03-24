---
title: "Scheduler Views"
date: 2020-03-10T17:27:50.430Z
url: "scheduler-views.md"
author: Jeremia Ploor
id: 1nbrqEDJP6jVQWzJ_-Q19MwiqfpezPnjjVGAPVgfDL7I
source: https://drive.google.com/open?id=1nbrqEDJP6jVQWzJ_-Q19MwiqfpezPnjjVGAPVgfDL7I
menu:
    main:
        name: "Scheduler Views"
        identifier: "1nbrqEDJP6jVQWzJ_-Q19MwiqfpezPnjjVGAPVgfDL7I"
        parent: "1tF-Tk_-m1MKjLwr0A48YUO1QRDN6Y6Yu_JPedO_z30w"
        weight: 1140
---
Log into {{% system-name %}}

Click *Scheduler* from the left sidebar menu.

If you have the preference in My Settings of FORCE DEFAULT RESOURCES set to Yes, your scheduler view will show all the resources (physicians) schedules that you have added an appt for or edited an appt for. To only show one resource, make sure this is set to No.

The LIST VIEW / MULTI VIEW & WEEK VIEW tabs at the top:

![](external_files/2621c53bfe4291fd055bf65e35fa27bc.png)

If you (the logged in user) are a physician – your Scheduler default will be set to you in the drop-down. Your default view will be your own schedule of appointments. If you (the logged in user) are not a provider that sees patients for appointments, you will need to set your default Scheduler view. Simply click the provider you wish to default to in the drop-down and/or specific location and click the SAVE button to the right of the screen under the mini-calendar. This will then be your default view. You will need to set this default view before using "pocket" mode.

If you see the words **No resources defined** in the drop-down of providers in the Scheduler, you need to either create a department named SysSched and tag any providers or rooms that have appointments scheduled to them.

![](external_files/7fb86c3ded879efb4f702a9e3317bd58.png) ![](external_files/8a96b2710d96176c0297d5509a7d2d40.png)

OR

You can have your MIE Implementer change the system setting to point to a specific department instead of the default Scheduling Realm department (SysSched department). Whatever this is set to – the users/rooms that have appointments scheduled to them need to be in that specific department.

![](external_files/13c8c81f4889c88cbe6c8a07d4e3108b.png)

## List View Tab

Click *List View* tab at the top. This shows a list of patients and appt. times for the date selected.

There are search fields at the top to select resource, which location(s), date, etc that you want to see. There are other option hyperlinks on the right side of the top of the screen for the days schedule on view.

![](external_files/10d7e8b5a91beeb7fed28467c39e169e.png)

It will open/default to today's date in the Scheduler. If you wish to view a different date, enter it in the top at the date field and click GO, or use the calendar at the far right of the screen and click on a calendar date. OR use the *Jump To* drop-down choice. These are pre-set choices of advancing exactly 3 days, 1 week, etc. To go back to today's schedule, click the TODAY button and then click GO.

![](external_files/918197e3ede76fae860060a6bd16903c.png)

Choose the doctor (resource), therapist, date, etc to view a schedule from the drop-down arrow boxes.

To add another individual's schedule to your view, click the check-box next to the word *add* and search for the person's name to the left of that to add to your view.

Choose a location, or will default to *any locations*. Does not show outside locations.

Click the date you wish to view by clicking Today for today's schedule, or type the date you wish to view and click *go*, or click the date on the month calendar on the far right side-bar.

* This view only shows the appointments, not open slots to reserve.
* You <strong>cannot</strong> add an appointment from this view, but you can print the schedule out on this view.
* The view will also show under the resource name _<em>/</em>_ (example 2/10) meaning it is displaying the number of appointments scheduled out of the total number of allowed appointments (if this amount appt allowed has been set for the schedule). It will not show these numbers if there is not restricted number of appointments entered for a specific schedule.

To print entire days' schedules w/ this view click [*view printable*] on the right side. It will open a separate screen of the printable view of the day's schedule. Click File then Print or click the printer icon picture to print this. To close out of this view, click the red X at the top right of the screen.

### Available Quick Links on Views

![](external_files/356986e9d5c1f0943cda68538ed0a3e0.png)

* <strong>View Printable:</strong> allows you to view and print/fax a date range list of appointments for that resource. This layout can be customized for what displays for each appointment by your company. After clicking <em>View Printable,</em> then select the resource(s) you wish to show in the print/fax document. Then enter a date range of appointments schedules you wish to print/fax. It can print each day and each resource on a separate page if you have <em>start each resource on new page</em> check-marked. You can control the check-mark default by the user preference <em>Print with Page Breaks</em>.
* <strong>Canceled:</strong> allows you to view appointments that are canceled for that individual for that day.
* <strong>Print Charts:</strong> Will print all the individuals/charts/forms needed for that day all at once for all patient's scheduled according to print def or appt def you pick. (See additional help instructions titled <em>Printing Documents.</em>)

![](external_files/a05c7a50feffb755ce7a2cf89fe9713e.png)

* <strong>Add Dictation</strong>: Click this and it will allow you to add dictation. It will <strong>not</strong> be linked to a specific patient. You will need to dictate all that information.
* <strong>Dictate Day:</strong> Click this (if you have this option turned on in MY SETTINGS) to go through all <strong>un-dictated</strong> patients and add dictation in schedule order. It will automatically pop-up the MIEPlayer with the 1^st patient name in the scheduler view. Dictate then upload. After you upload, the next patient in the schedule will pop-up in the MIEPlayer to dictate for next. If you do not want to dictate for a specific patient that pops-up in MIEPlayer, then close the window by X out the MIEPlayer box. It will then skip that particular patient and pop-up the next patient in the schedule order.
    * When you skip a patient, it considers it still as <strong>un-dictated</strong>. When you refresh and go back into the schedule and click Dictate Day again, it will start with the first <strong>un-dictated</strong> patient and any others that are un-dictated in that schedule order. Meaning, it will pop-up any that you had previously skipped if applicable.
* <strong>Email:</strong> You must have security permission to <em>Send Email to Patients</em> set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature. Click this to send out emails for <em>all</em> appointments scheduled for the schedule you are viewing. It will only send emails if the patient has an email address entered in their <em>demographics tab</em> in the email field. See other help documentation named <em>Email Reminders From |system|.pdf</em> on how to send emails to patient from here.

![](external_files/267ef708b2796593104cc20934e4367a.png)

* <strong>Print Labels:</strong> Click this to print a label for <em>all</em> patients with scheduled appointments for the schedule you are viewing. See other help documentation named <em>Label_Printing_Feature.pdf</em> on how to print labels from here.

![](external_files/267ef708b2796593104cc20934e4367a.png)

* <strong>Run All Drug Eligibility:</strong> Click this to run Drug Eligibility for <em>all</em> patients with scheduled appointments for the schedule you are viewing if your system is set up for this.

![](external_files/63fdf7b8a7bd7dd717d7c6bb7ee3f7ea.png)

See other help documentation named *Prescription/Insurance Eligibility Requests-SureScripts.pdf* on how run Drug/Insurance Eligibility checks.

## Multi-View Tab

The Scheduler tab usually automatically defaults to open to the *Multi-View* screen unless you change it in My Settings for your username.

![](external_files/0822018af806a12ff072f6968e5ed4dc.png)

Choose the doctor, therapist, etc to view a schedule from the drop-down arrow box.

To view/add another individual's schedule to your view, select that resource from the drop-down then check-mark The **Add** box next to it. It will then show those resources & schedules on your view. To remove a resource from the view, click the minus button [ - ] next to their name in the middle of the view.

The **[f/b]** button on the resource's schedule is a quick button to view free & busy time. A schedule for that resource must be entered for this f/b button to perform. It is useful when someone uses many bookings in their schedule and you just want to see if they have openings. It condenses the appointments to show on your screen only free & busy (not available) time slots. *It only knows free/busy time if there is a schedule set up for the resource.*

Choose a location, or will default to *Any locations* or your default location you are set to in MY SETTINGS.

It will open to today's date in the Scheduler. If you wish to view a different date, enter it in the top at the date field and click GO, or use the calendar at the far right of the screen and click on a calendar date. OR use the *Jump To* drop-down choice. These are pre-set choices of advancing exactly 3 days, 1 week, etc. To go back to today's schedule, click the TODAY button and then click GO.

![](external_files/918197e3ede76fae860060a6bd16903c.png)

* This multi-view shows the appointments that are reserved and times that are open.
* The view will also show under the resource name _<em>/</em>_ (example 2/10) meaning it is displaying the number of appointments scheduled out of the total number of allowed appointments (if this amount appt allowed has been set for the schedule). It will not show these numbers if there is not restricted number of appointments entered for a specific schedule.

To add an appointment from this view click on the yellow time slot on the left side you wish to reserve. It automatically pops into **WIZARD**. Follow **Wizard** instructions to continue adding an appt.

### Displays/Options at Bottom of Multi-View

If you scroll all the way down to the bottom of this screen view, you will see the categories that display any

**Cancelled Appointments** and/or **No Show Appointments** and/or **Dictations without Appointments**.

![](external_files/6acfd30c983db08d4670b05a569c060c.png)

* <strong>Cancelled Appointments:</strong> Shows list of cancelled appointments for that specific day & physician. Can select options of Add Document or Print Chart by clicking these OPTIONS on the far right column. Add Document takes you to the Add Document program and you would select what type of note (text, etc) that you want to enter.
* <strong>No Show Appointments:</strong> Shows list of patients that were no shows for that specific day & physician. Can select options of Add Document or Print Chart by clicking these OPTIONS on the far right column. Add Document takes you to the Add Document program and you would select what type of note (text, etc) that you want to enter.
* <strong>Dictations without Appointments</strong>: Shows list of dictations for the specific day & physician that do not have a matching appointment.

## Week View Tab

Click *Week View* tab at the top. This shows a week's worth of appointments for the person(s) you select and the date you select. You will need to scroll over to the right to see the whole week and options at the top.

![](external_files/166a15e4adb56a6f2415aa9ebef39ef8.png)

Choose the doctor, therapist, etc to view a schedule from the drop-down arrow box.

To view/add another individual's schedule to your view, select that resource from the drop-down then check-mark The **Add** box next to it. It will then show those resources & schedules on your view. To remove a resource from the view, click the minus button [ - ] next to their name in the middle of the view

The **[f/b]** button on the resource's schedule is a quick button to view free & busy time. It is useful when someone uses many bookings in their schedule and you just want to see if they have openings. It condenses the appointments to show on your screen only free & busy (not available) time slots. *It only knows free/busy time if there is a schedule set up for the resource.*

Choose a location, or will default to *Any locations* or your default location you are set to in MY SETTINGS.

It will open to today's date in the Scheduler. If you wish to view a different date, enter it in the top at the date field and click GO, or use the calendar at the far right of the screen and click on a calendar date. OR use the *Jump To* drop-down choice. These are pre-set choices of advancing exactly 3 days, 1 week, etc. To go back to today's schedule, click the TODAY button and then click GO.

![](external_files/918197e3ede76fae860060a6bd16903c.png)

This week-view shows the appointments that are reserved and times that are open.

The view will also show under the resource name _*/*_ (example 2/10) meaning it is displaying the number of appointments scheduled out of the total number of allowed appointments (if this amount appt allowed has been set for the schedule). It will not show these numbers if there is not restricted number of appointments entered for a specific schedule.

To add an appointment from this view click on the yellow time slot on the left side you wish to reserve.

It automatically pops you into **WIZARD**.

### Displays/Options at Bottom of Week View

If you scroll all the way down to the bottom of this screen view, you will see the category displaying any

**Dictations without Appointments** if your preference to *Show Dictations w/o appts* is set to Yes.

![](external_files/22286707f3a259a223d5f14f1e81e9b0.png)

## Saving Preferences/Settings in Scheduler

You can set quick preferences & defaults, resource (physician) to default your scheduler view to, location default, etc from here for your Scheduler view. This is just a quicker way to save preferences & defaults for your scheduler screen view, instead of going into *Control tab and My Settings tab* to set them for your username. Various preferences you are set to show various quick links (such as add vitals, add order, add task, checkin, etc) on the appointment listing themselves on the scheduler view you use.

![](external_files/712b7cc0a292c923dfd23d9c238c09e0.png)

In *LIST* view, you can change your view to show appointments only, schedules only, or both separate. Default is to appointments only.

**List View Scheduler Settings:**

![](external_files/448a2bab58cd6ef6a0a4865b53d425e6.png)

**Multi & Week View Scheduler Settings:**

![](external_files/344c3a4e0fb6f97009fd2528cdab1999.png)

When looking in *schedules* only mode, the numerator/denominator you see tells you how many appointments you have out of how many you are allowed. The denominator comes from that total number. If the numerator is bigger than the denominator it means it's overbooked.

![](external_files/12bd7ee644fe0aecf05b08e834e7220b.png)

You can also change your appointment view to Full, Compact or Patient Name. *Full* will show the entire appointment information in the appointment block, *Compact* will compact the appointment block information. You can view the rest of the appointment information by clicking the appointment block for a specific patient. (Click again to hide the information). *Patient Name* will compact the appointments to show **only** the patient name on the appointment block. You can view the rest of the appointment information by clicking the appointment block for a specific patient. (Click again to hide the information). You can select what you want and click *Save* box and it will remember your preference.

In *Multi-View and Week View,* you can change your view to show specific appointment time increments in minutes. You can also change your view to show appointments only, schedules only, both separate, Both Merged or Where Am I (Where Am I is currently not being used.) *Both Merged* is usually what client's use. Both Merged shows free time slots and also available appointment slots if a schedule for the resource is loaded. You can also change your appointment view to Full, Compact or Patient Name (see above for descriptions of these options). You can change your view to choose the start time and end time you wish your day/week view to show. Click *Save* and it saves for all your views.

Setting options here allow quicker access to change some settings/preferences instead of going into Control and changing preferences in My Settings.

Click the *SAVE button* to save the view preferences you set.

![](external_files/80a6b9406e48dac1d6c9f4f8bf611389.png)

### Preferences Button

If you click this, it automatically takes you to the *My Settings* Scheduler Preferences. You can set these here instead of going to the control tab, MY SETTINGS tab and setting preferences there. These are defaults that you wish to set for your scheduler view also.

![](external_files/1488140023116e4bfba589b7bb147683.png)

For descriptions on each Scheduler preference, please see other help documentation titled MY SETTINGS.

