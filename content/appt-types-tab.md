---
title: "Appt Types Tab"
date: 2020-02-27T19:48:29.775Z
url: "appt-types-tab.md"
id: 1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo
source: https://drive.google.com/open?id=1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo
menu:
    main:
        name: "Appt Types Tab"
        identifier: "1jRDMeTD6iAj6aqxsi-XfoPUUkthQinraJfl5S0S5Cpo"
        parent: "1tF-Tk_-m1MKjLwr0A48YUO1QRDN6Y6Yu_JPedO_z30w"
        weight: 1160
---
Log into {{% system-name %}}

Click *Scheduler* from the left sidebar menu.

If you have the preference in My Settings of FORCE DEFAULT RESOURCES set to Yes, your scheduler view will show all the resources (physicians) schedules that you have added an appt for or edited an appt for. To only show one resource, make sure this is set to No.

Click *Scheduler* tab from left sidebar menu.

Click *Appt Types* tab from the top menu of tabs.

This shows the existing list of appointment types, durations, coding, etc to select from when selecting the appointment type for a patient's appointment. They automatically list in alphabetical order. If you have security role access, you can edit/delete from here or add an appointment type from here.

![](external_files/72122d268b38659b2dfca12e06ef5d69.png)

## Quick Links of the Appointment Types Tab

### Alphabetize Types

Click this and it will automatically alphabetize this Appointment Type list by code description column only. Can edit or delete an appointment type from here. To edit, see instructions below called *Editing an Appointment Type*. To delete an appointment type, click *delete*. It will ask you if you are sure you want to delete it and tell you how many appointments and resource schedules exist with this appointment type. Choose Yes or No to continue in delete.

![](external_files/72122d268b38659b2dfca12e06ef5d69.png)

### Add Type

Click this to **add** an Appointment Type (must have security permission to this):

![](external_files/5960271d04923e834b7fc891be20aa1b.png)

* <strong>Active:</strong> Keep this check-marked so the appointment type remains active. If you want any appt type to stay in system (not delete it completely) but mark as inactive, simply uncheck here.
* <strong>Code:</strong> This is the APT code. (Appointment Code). This is the code or alpha's that will appear in the scheduler view next to the patient. Type in the same CPT code you will use, or an Alpha abbreviation of the name of the appointment type you are creating.
* <strong>CPT code:</strong> leave blank or, enter the correct CPT code for billing/auditing/report purposes.
* <strong>Duration:</strong> type in the amount of time it takes for this type of appointment
* <strong>Display order:</strong> Enter in a display order number. This is the ordering the appointment types will order/show in when you come to this Appt Types tab <em>and</em> also shows in this order to staff when scheduling appointments. If they staff clicks their down arrow key on the keyboard to select an appt type to schedule the patient for – this is the order in which they will see choices (or they can use the autocomplete method). You may want to make your most popular appointment types a lower display order # so they appear first in the ordering/selection for staff to see quicker. Than any appt types you use to perhaps block for meetings, vacation, sick, etc would be set to a higher display order so they appear at the end of the list of choices.
* <strong>Duration given to patient:</strong> This is a field to enter the duration to tell the patient. It mainly comes into play when sending emails to a patient. The duration indicated on a patient email will be the patient duration rather than the actual duration. For some practices, they may schedule 15 minute appointments on their calendar but the patient may be there for 60 minutes, so they tell the patient 60minute duration. Their Medical staff may only be required for the first 15 minutes of that though hence scheduling the 15 minute appointment durations vs. the duration given to the patient.
* <strong>Description:</strong> Type in the full name of appointment you are creating.
* <strong>Default Encounter Type:</strong> If your practice uses the checkin module, it is suggested to always default this to Checkin. If your practice uses encounters and wish to have an encounter type automatically create & open when a patient is checked in for the visit, you can specify the encounter type name here.
* <strong>Default Encounter Template:</strong> If you practice has any named saved/stored encounter templates, those will be available here to select one. When an appointment checks in with this appointment type and a default encounter type has been set for this appt type, then a specific encounter template can also be set. When a patient is checked in for the appointment, the specific encounter will automatically be created in the chart and also a specific encounter template will be applied if this is set.
* <strong>Dictation Job Type:</strong> This is the dictation job type that will open/default to when a user adds dictation from the patient's appointment who has this appt type.
* <strong>Print Definitions:</strong> Print definitions can be attached to appointment types. Print definitions that are attached to an appointment type this way are noted as appointment type print definitions. Resource options in this section show users in the scheduling realm. To undo print definitions being attached to appt types, you need to remove the print definition(s) from all appointment types and use the print definition editor to remove the appt type designation.
* <strong>Title Color:</strong> Choose the color for the ‘title bar' of the appointment. The ‘title bar' is the first line of the appointment in the scheduler view that shows the appointment time and patient. If you do not select a color, it will automatically default to no color. If you select a color, you'll see the color choice appear around the Edit Color words/box next to this with the color hex value in the field. The rest of the appointment (body of the appointment) will be in the next color.

![](external_files/e38c1a1e3b2225f546989fd7d4fd3481.png)

* <strong>Color</strong>: This color selection is for the ‘body' of the appointment. If you do not select a color, it will automatically default to no color. If you select a color, you'll see the color appear around the Edit Color words/box next to this with the color hex value in the field.
* <strong>Comment:</strong> Type any comments associated with this appointment type. These comments will appear in the comments box when scheduling an appointment for a patient with this appt type if you have your preference set to show comments. These comments will also appear in the Scheduler view under the patient's specified appointment time/date. This is a comment associated with the appointment type so anyone who gets scheduled for an appointment will have that comment on their appointment when created.
* <strong>Choices for submission/changes:</strong>
    * Click <strong>Submit:</strong> This will only update the appt type list and any future appointments made from here on. It does not change the info. for any appointments already existing/scheduled for this appt type or any schedule templates for this type. If you click this, it will give you a confirmation at the top.
    * Click <strong>Submit & Update:</strong> This will update the appt type list and it also updates all existing patient appointments for this type and updates any existing schedules with this appt type. If you click this, it will give you a confirmation at the top.

### Add Template

Can select a specific appointment type template for a specific doctor and/or location in a schedule.

Example, Dr. A may take 30 minutes for a new patient exam and only wants 30 minutes to be saved when making appointments for patients who want to be seen for new patient exams. However, Dr. B may want 1 hour allotted for his/her new patient exam appointments. Creating templates for appointment types allows that. Then a person making an appointment can see the appointment type and choose the specific physician/resource and/or location.

![](external_files/5a177f5c7a1ff7b18702cf330573ec7a.png)

* <strong>Apt Type:</strong> Choose the appointment type you want to template for a specific resource.
* <strong>Resource:</strong> Choose the specific resource (physician, etc) that this appointment type template is for.
* <strong>Location:</strong> If want, choose the specific location this appointment type template is for. This does not show any outside locations.
* <strong>Duration:</strong> Choose the duration that this specific resource takes for this type of appointment. Then, when a person adds an appointment for a patient from the Scheduler and clicks <em>Calculate</em> box after selecting the appointment type, it will also pull this specific duration you entered according to the appointment type, resource, and/or location that was entered in the Appointment Wizard tab.
* <strong>Duration Given to Patient:</strong> This is a field to enter the duration to tell the patient. It mainly comes into play when sending emails to a patient. The duration indicated on a patient email will be the patient duration rather than the actual duration. For some practices, they may schedule 15 minute appointments on their calendar but the patient may be there for 60 minutes, so they tell the patient 60minute duration. Their Medical staff may only be required for the first 15 minutes of that though hence scheduling the 15 minute appointment durations vs. the duration given to the patient.
* <strong>Reminder:</strong> This field is not used. Do not enter any selection here.
* <strong>Scheduling Instructions:</strong> This field is not used. Doesn't print or show anywhere. Do not enter anything here.
* <strong>Clinical Instructions:</strong> This field is not used. Doesn't print or show anywhere. Do not enter anything here. This field is not used. Do not enter any selection here

Click *Submit Template* when done. You will see a confirmation message at the top that says *Appointment Type Template Inserted Successfully!*

### Add Multiple Templates

Use this method to quickly create multiple appointment type templates in mass using existing appt types.

![](external_files/87e323ebd265ffbd193bf70bdc1d4dbf.png)

You can use this method to create multiple appointment type templates in mass for any combination of appointment type, resource and location you select. For instance, if you choose 3 appointment types, 4 resources, and 2 locations then 24 appt type templates will be created. If no location is chosen, your choices for appointment types and resources will be associated to **all** locations.These templates will have the same "duration" and "duration given to patient" settings as corresponding appointment type that was selected and these can be edited by using the edit link in the appointment templates listview.

![](external_files/8e95a7824d97be990ab5c884f24fa2b3.png)

If you try to create a template combination that already exists, the existing appt type template will **not** be overwritten and you will receive an alert stating such.

![](external_files/5b2814f46c3de6d205383eb57f408192.png)

If you have entered in multiple templates that can be created successfully, you will receive a confirmation message at the top that your Appointment Type Templates have been inserted successfully and it will refresh you back to the appointment type templates screen.

![](external_files/d0f7e6e1c13938b2fe2a3c773ac4c8be.png)

### View Types

Click this to view the list of appointment types in the system. It's the same summary list that pops up with the main Appt Types tab and like Alphabetize Types.

![](external_files/df70327f728890c0b73cd1989d154a78.png)

You can edit a type from here by clicking **edit** to the far right of the type you select.

You can also *delete* an appt type from here (if you have the security access to do so).

### View Type Templates

Click this to view all the existing appointment type templates in the system. These type templates were created using the *Add Template* link or the *Add Multiple Templates* link (see page 4 & 5 of this help documentation).

![](external_files/f662253025e667459f7d1b4a40b2438e.png)

You can edit or delete a type from here by clicking the selection in the options column of the Appt Template. There is also a "search" filter at the top to search for existing appointment type templates.

## Editing or Deleting an Appointment Type

Click *Edit* from the appointment types tab or from Alphabetize Types link/option or from View Types link/option in this screen.

![](external_files/df70327f728890c0b73cd1989d154a78.png)

Edit any fields. (See detailed descriptions of each field in the above help documentation section called APPT TYPE on page 2 above.)

At the top of the edit screen it also notes how many appointments are already scheduled with this appointment type you are about to edit. It also notes how many schedules use this appointment type you are about to edit. Depending on the button that you select after editing the appointment type (selecting SUBMIT or SUBMIT & UPDATE) the edits done may or may not affect those appointments already scheduled with this appt type or schedules attached to this appt type.

![](external_files/f8526df1af60e96700d2d766d6b5f710.png)

* Click <strong>Submit:</strong> This will only update the appt type list with the edits you made and any future appointments made from here on. It does not change the appt type information for any appointments already existing/scheduled for this appt type or any schedule templates for this type. If you click this, it will give you a confirmation at the top. If you are editing appointment type <em>codes</em> (the abbreviation), please make sure you click submit & update instead, otherwise the system will not be able to find that appointment type for any existing appointments already scheduled using that type.
* Click <strong>Submit & Update:</strong> This will update the appt type list and it also updates all existing patient appointments for this type and updates any existing schedules with this appt type with all edits you have made. If you click this, it will give you a confirmation at the top. If you edit the appt type <em>code,</em> you should click submit and update.
