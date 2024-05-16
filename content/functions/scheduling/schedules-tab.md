---
id: '1vqaEmCqyIRpOtEn-QAUSNsx1pCn46xCHsNqacQPxPOM'
title: 'Schedules Tab'
date: '2024-05-16T16:59:44.066Z'
version: 166
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1vqaEmCqyIRpOtEn-QAUSNsx1pCn46xCHsNqacQPxPOM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Log into {{% system-name %}}

Click *Scheduler* from the left sidebar menu.

If you have the preference in My Settings of FORCE DEFAULT RESOURCES set to Yes, your scheduler view will show all the resources (physicians) schedules that you have added an appt for or edited an appt for. To only show one resource, make sure this is set to No.

Click *Scheduler* tab from left sidebar menu.

Click *Schedules* tab from top tab menu.

![](../schedules-tab.assets/0fabb6dc58090d39727d58cf40357c30.png)

This shows the individual schedules of the doctor/therapist. These have to be added by a person with the correct security role. This is a quick view of the person(s) work schedule on set days.

Inputting a schedule will reduce the amount of override errors you receive when adding an appointment.

The calendar (month/week) view is showing.

## Adding a Schedule

You can edit or delete an existing schedule you see here, or click *Add* hyperlink at the top right to add a schedule.

![](../schedules-tab.assets/70ac879c1cc563eeecc982e77f79a568.png)

The Scheduler Editor screen opens.

![](../schedules-tab.assets/bdc9945edd4ed7d256f5d4ad10f45333.png)

* <strong>Start/End time</strong>: This is a required field. Use today's date and the person's start time on their work day. Use today's date and the person's end time on their work day. OR use the specific date/time range you are blocking something for.
    * <strong>Duration:</strong> Based on the start and end time you enter, the duration will be automatically calculated and filled in here. Or you can change the Duration and it will automatically calculate from the start time entered and change the end time to the duration you specified. Putting in an end time will set the duration. Choosing a duration will set the end time.
* <strong>Resource</strong>: This is a required field. This is the Person(s) name for the schedule. Begin typing in the name of the resource for this schedule. You can also hit the ↓ down arrow button on your keyboard to see some selections. To set the schedule to any and ALL locations, simply leave this field blank. To set a schedule to multiple resources, you will need to create multiple schedules, one resource at a time by using the <em>save info and use again</em> link provided at the top of this <em>add schedules</em> screen.
* <strong>Location:</strong> Shows on schedule and narrows down searching if select a location. Does not show outside locations. (This is on month/week schedule adding only). Specify a location by using the auto-complete or hitting the ↓ down arrow button on your keyboard to see some selections. To set the schedule to any and ALL locations, simply leave this field blank. To set a schedule to a few specific locations, you will need to create multiple schedules, one location at a time by using the <em>save info and use again</em> link provided at the top of this <em>add schedules</em> screen. When scheduling a resource at multiple locations, the setting "Warn on Resource Scheduled at Another Location" controls how to warn the user. If it is 1, the user gets a warning after saving in the systems ‘warning' color scheme. If the setting is 2, the user is told and the schedule is not saved. The message comes up in the ‘alert' color scheme and the user must ‘force' the action to proceed. The force option is only given if the user has the security permission of "Schedule Resource at Multiple Locations." For this feature, please contact your Implementer and they will activate.
* <strong>Display Appointments Inside Schedule</strong> Some clients use this. It's like the old ‘absorb' button. If this is checkmarked, it takes all appointments that occur and make them comments. When displaying a schedule, this setting will cause basic appointment info to show up inside of the schedule. When a schedule is exported the appointment info is sent as comments on the schedule. It is a sort of a ‘Where am I for the day' view.
* <strong>Simultaneous appointment bookings allowed:</strong> This is the number of appointment bookings allowed for this Schedule. Type in number of appointments you'll let people schedule for this resource(s) per time slot. This is defaulted to blank, meaning unlimited # of appointments per time slot. This setting allows overbooks—and reduces the override permission need when overbooking. If the physician allows you to book 3 people for this type of appointment per time slot, then you'd set this to 3.
* <strong>Total Appointments Allowed:</strong> This is the number of Appointments allowed in this Schedule. Type in the number of appointments you want allowed/restricted to in a full day's schedule. Example: if you set it to 10, there can only be 10 appointments added in the time the schedule occupies. 0 (zero) mean unlimited appointments allowed. This is defaulted to blank, which is unlimited so you must specify the # of appts allowed for this schedule.
* <strong>Schedule Color:</strong> You can select a color for the schedule. It does not affect/alter appointment type colors, etc.
* <strong>Display ‘Add Appointment' Links:</strong> Use drop-down to specify at what increment for the appointments link to show up. It then puts a <em>link</em> to add/schedule an appointment inside of the scheduler instead of clicking on the yellow time link. This provides a quick way for adding appointments from the scheduler that uses this specific schedule.
    * The selection NO from this drop-down will not display links for this schedule. YES will display the links at the user's default increment that is set in MY SETTINGS preference for this schedule. However, if you select a specific minute/hour increment, it will display the link with those specific increments for this schedule.

![](../schedules-tab.assets/a6342fff70d892342f1be955253905e8.png)

* When displaying links inside a schedule to add an appointment, the links will only go until there is enough time for the smallest appt type's duration. So, if there is only one appt type allowed in the schedule and it has a duration of 60 minutes, the schedule ends at 5pm, then the last link available to schedule an appointment for will be 4pm. If the schedule allows all appointment types, the change has no effect.
* <strong>Time Slots Available on Portal:</strong> The setting increments enable the free time to be available for scheduling from an employee/patient portal if in use.
* <strong>Priority:</strong> Set a priority level of this schedule you are entering. The level is any number 0 thru 10. Priority is meant to give schedule a priority. 10 will override a 0.  If you have a typical 8a-5p schedule entered, then you need to override it with a meeting one day, you put in a higher priority.
* <strong>Appointment Types</strong>: Select and add to this list, the allowed appointment types for this schedule. Can add as many allowed types to a schedule. You can leave blank if doesn't matter what type of appointment is being seen for that schedule. If only certain appointment types are allowed in this schedule, select the specific type(s) here. In the <strong>Appt Type</strong> field, start to type in the appt type name description, appt type code (or click your ↓ button on your keyboard for the first 20 alphabetical choices). Once you've found the appt type to link to the schedule click the ADD button and proceed to add another if you wish using the same steps.
* <strong>Required</strong> Appointment type checkbox*:* When setting up a schedule, if you choose more than one required appt type. Required means that the patient's appointment must have at least <em>one</em> of those specified appointment types in order to allow a patient's appointment to be scheduled within this schedule you are creating. In order for patients to be able to be scheduled during this specific schedule you are creating, the patients <em>must</em> have one of the specific appt type(s) in order to be scheduled for this time frame. (Example: fasting patients always have rights/get morning appointments, so a schedule for morning appointments would require an appointment type of lab procedure, lab test services, etc). In order for an appointment to see the schedule as free time, the patient's appointment has to have the required appointment type.
* <strong>Portal</strong>: By selecting Yes for the Portal, this appointment type for this resource will be available for scheduling on the patient portal. By selecting No, the appointment type for this resource will not be available for scheduling.

![](../schedules-tab.assets/21a5f2b4aeda8f3fa9d37d816aa2e28f.png)

* <strong>Add All</strong> Link: You can use the <strong>Add All</strong> link provided to add all appt types to this schedule (instead of selecting each individually). You can also use the <strong>Add All</strong> link provided and then remove a specific appt type that you don't want to be included if it's easier to select all of them and just eliminate a few. The <strong>Add All</strong> link (if used) skips any that are already in the list so that any appt types already listed there and set to ‘required' will stay. Using the <strong>Add All</strong> link defaults the appt type as <em>not</em> required.
* <strong>Recurrence</strong>
    * Click the RECURRENCE button to set any recurrences to the schedule.

![](../schedules-tab.assets/8c8c856419adff9815294a4b26a09fb3.png)

* Once you click the RECURRENCE button, you will see those fields open up on your screen to set. If you are editing a schedule and want to remove the recurrence totally from the schedule, you can simply click the CANCEL RECURRENCE button and save the schedule with your edits.

![](../schedules-tab.assets/5ac6f9066777878dc72fc861cf441fef.png)

* <strong>Occur every</strong>: This field will default to be shown as <em>every</em>, but you can choose a different occurrence interval from this first drop-down field.
* <strong>Interval:</strong> In the next drop-down field choose the recurrence interval. Verify your recurrence and intervals reading from left to right starting with how often it will occur and when it will occur. <strong>Days</strong>: If you check-marked <em>weeks</em> as the type, then the days of the week pop-up. Check-mark the days this person works this schedule. Example: if a person works Mon-Thurs 8a-5pm, but <strong>every</strong> Friday 8a-noon, then you would choose Weekly, and only checkmark Mon, Tues, Wed & Thurs and input this occurrence. Then would make another separate schedule and tag that schedule just for Friday using <em>Weeks</em>, and checkmark Friday only.

![](../schedules-tab.assets/8430f5f6715b9098173853e49d1236f6.png)

* <strong>Until</strong>: This is how long you want this to recur until. Type in how long they have this schedule. You can put a Recur Until date and it will tell it to stop in a month or a year, etc. If you leave it blank, it will fill in with zero's and recur forever.
* <strong>Copy Schedule To:</strong> can copy the schedule to multiple locations and/or resources.

![](../schedules-tab.assets/caf9fe2c9704b289718ac6e3711c8cc0.png)

* When you click on the Copy Schedule button, the fields will expand.

![](../schedules-tab.assets/c4bce520ded41f4f4f0526bcf8dfe95a.png)

* You can click the underlined links to perform that action (apply the schedule to ALL locations, and/or apply the schedule to ALL resources). You can use the clear all link to start over. You can also set individual locations & resources at the bottom, or you can select a specific location and then use the ADD ALL RESOURCES link to that specified location. The <em>copy schedule</em> button shows & tracks how many schedules you are copying to. You can click it to CANCEL if you wish also to get out.

![](../schedules-tab.assets/004b7746b1f466cc22c11556f86a14ce.png)

* <strong>Comment:</strong> Can add a comment to this schedule for other users to see when they look at schedule editor.

When all done, click *SAVE* to create this schedule or click *Cancel* to go back to the view and start over.

If you want to *save this schedule info to use again* at a later time, please scroll back to the top of the screen *before* clicking SAVE button. Click the Save Info to Use Again link and it will allow you to name this template so you can use this info again and make edits to it to enter in another schedule similar to this one without having to re-key in each field from scratch. It's a way to ‘copy' a schedule and save it as a template. (See next page for specific information on how to save schedule templates and how to bring up previously saved templates).

## Saving Schedules & Fields as Templates

You can save a schedule as a template. It's essentially the way to ‘copy' a schedule so you can retrieve the template later on at a future time & do a few edits to it to add another similar schedule without having to re-key in all the fields that are the same.

If you save the schedule information that you just entered, you will be able to retrieve it and make slight modifications to it in order to create another scheduler similar to one you've already done. This is like a ‘copy' feature where you save & copy the schedule template you created so you can retrieve it and make slight modifications to it for another schedule you wish to create—without having to re-key in all the fields again.

After you have created a schedule, *before* clicking the SAVE click the **Save info to use again** link provided at the top of the schedule editor screen.

![](../schedules-tab.assets/9f1e51d13349d3b8c8d8ae980590fcff.png)

When you click the Save info to use again, it opens up a *Save Template* window. Name the scheduler template so you can use it again if need be to create another schedule again just like it (perhaps for another location or another resource) so you don't then have to re-key in the fields that would remain the same entry data you already did for a schedule. When you are done naming the saved schedule template and have check-marked or uncheck-marked specific fields to save with this template, click the SAVE button at the top or bottom of the *save template* window. You are **not** saving the schedule you created, you are simply saving the ‘template' of this schedule so you can use the basic template again for another schedule you wish to add.

![](../schedules-tab.assets/b2fb71f3f679defb661d13e6706b8ec7.png)

When you are done saving the template, make sure to click the SAVE button at the end of the schedule you just created (or edited) in the schedule editor module so that the schedule is saved & created (or edited) in the system.

### Retrieving Previously Saved Templates

To retrieve a previous saved schedule template, click the **Show previously saved info** link found at the top of the schedule editor.

![](../schedules-tab.assets/9f1e51d13349d3b8c8d8ae980590fcff.png)

It will open up the *Saved Templates* window showing you a list of templates that were saved (using the steps above) and their names given. If you wish to select a *saved template*, click on its name in the listing.

![](../schedules-tab.assets/a2f853f9e77add2afbef2647c3ad30e2.png)

The template will open up in a window and you can check mark which entry fields you wish to bring into your schedule you want to create. Once you have each field/category check-marked, click the APPLY button found at the top or bottom of this screen.

![](../schedules-tab.assets/ee89e31b05d1cbdb308d1d4b8936871d.png)

You will then be refreshed back to the Schedule Editor screen with all the fields/categories pre-populated with the template you selected and can edit and modify to create this new schedule to what you need, then click the SAVE button.

If you have security to manage saved templates, you will see a delete option to be able to delete your own saved templates or global/other users templates for managing purposes.

*Using previously saved templates is not where you go to edit an existing schedule*. To edit an existing schedule that the system is using, please see next page for help.

## Edit or Delete a Schedule

To edit or delete a schedule, find that person's schedule in the Schedules Tab.

Click *Scheduler* tab from left sidebar menu.

Click *Schedules* tab from top tab menu.

Find the resource (physician) you wish to view/edit/delete a schedule for by using the datavis table to filter.

Once you have found the particular schedule you wish to edit or delete, (if you have security role rights), click Edit or Delete.

![](../schedules-tab.assets/801a6df66f77b82f1b6b50dbab5b7f04.png)

Search for the schedule you with to edit or delete by using the field filters at the top. The fields allow more than one selection.

Once the schedule is found, you can edit or delete an existing schedule you see here by selecting the appropriate function you wish to perform Edit or Delete from the options column. You will only see edit or delete options if you have security permission to edit schedules or delete schedules.

After you click Edit to edit a schedule, it will display a message at the top indicating how many *already existing scheduled* appointments occur in the next 4 weeks during this schedule's time frame. A link to the appointment report is given to move those appointments if necessary. You can move those appointments if you need to, now or after you are done editing the schedule. This is called ‘block moving' if you wish to move a block of appointments from a schedule.

If editing a schedule from the List View, when you are done with the edits, click *Save* at the bottom.

It will give you a message that the schedule was successfully edited. You can still move a block of appointments after you edit the schedule.

![](../schedules-tab.assets/cab20ea21b8e27d92464a0c36ef4f2a5.png)

You can then use the Click here link if you need to block move those appointments pending for this schedule.

If editing a schedule from the List View, when done with the edits, click *Save* at the bottom.

![](../schedules-tab.assets/aff4d4b75bc11950686c1ac22c26f15a.png)

If there are any appointments scheduled for the next four weeks, you will see the confirmation pop-up window. If you select Yes, it will save the changes of the schedule and return you to the main schedules tab.

*Delete* will delete the schedule you have opened. If this message is seen when trying to add (schedule) an appointment:

![](../schedules-tab.assets/b810cc96f19b74d3262eec3c437430cf.png)

Time is not templated means the time of the appointment trying to be made is not within the resource/physician's schedule that is set up. It means that a schedule is entered, but a user is trying to schedule an appointment for a time not within those hours the physician will see patients or at the location specified in the schedule set up. It could also mean that the resource/physician is off that day and not seeing patients, so that time is blocked off in a schedule. This is a general warning message that the time you are trying to schedule for is not matching what is in the schedule.

The scheduler will not warn for non-templated times when adding an appointment for a resource that has no schedule(s) set up. All time will show as free if a resource/physician doesn't have a schedule set up.
