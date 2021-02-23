---
title: "Waiting List Tab"
date: 2020-03-25T17:17:23.139Z
url: "general-functionality/scheduling/waiting-list-tab.html"
version: 38
id: 17VNUnZWvZm1Fl-N0pr-rm1o7COpnZsVN0PxfA_QO1qM
source: https://drive.google.com/open?id=17VNUnZWvZm1Fl-N0pr-rm1o7COpnZsVN0PxfA_QO1qM
menu:
    main:
        name: "Waiting List Tab"
        identifier: "17VNUnZWvZm1Fl-N0pr-rm1o7COpnZsVN0PxfA_QO1qM"
        parent: "1tF-Tk_-m1MKjLwr0A48YUO1QRDN6Y6Yu_JPedO_z30w"
        weight: 1170
---
Log into {{% system-name %}}

Click *Scheduler* from the left sidebar menu.

If you have the preference in My Settings of FORCE DEFAULT RESOURCES set to Yes, your scheduler view will show all the resources (physicians) schedules that you have added an appt for or edited an appt for. To only show one resource, make sure this is set to No.

Click *Waiting List* tab from top menu of tabs. It will automatically show all people on the waiting list for your practice if the *Resource* in the search field is set at *Select Resource*.

It will also have resource and patient search fields at the top to narrow down a search for someone on the waiting list. This Waiting List will automatically open set to the resource & location you are defaulted to. To view the *entire* waiting list, make Resource set to *Select Resource* and location set to *Any Location* in this search.

The waiting list will always list patients in ascending order of when they were inserted on the waiting list. Meaning, the top person on the list is the first person on the waiting list. The last person on the list is the most recent person added to the waiting list.

You may want to utilize the "Appointment Report" found in the Reports module instead because it offers a lot more filter criteria and functions also.

![](../../external_files/f6c8c877afdddcbc709c4012aaf7e334.png)

There are optional fields to narrow your search from:

* <strong>Resource:</strong> If you wish to only view the waiting list for a specific physician/resource, select the resource in the <em>Resource</em> search field at the top. Leaving it as <em>Select Resource</em> will show the waiting list for the entire practice. This view (per specific resource or leaving as select resource) will list the appointments in ascending order of when they were created. Meaning, the top person on the list is the first person on the waiting list. The last person on the list is the most recent person added to the waiting list.
* <strong>Group resources:</strong> If you check-mark this and a patient is on a waiting list for multiple resources, this will make the list show all of the resources as a single item. Grouping of the resources will list all the required resources as a single item. This prevents listing the same patient multiple times when the appointment requires multiple (more than 1) resource. It also makes appointments requiring multiple resources stand out.

Example of the waiting list shown with_out_ grouping the resources. This patient below is on the waiting list for an appointment requiring multiple resources. Therefore, she is listed twice on the waiting list as each resource is separated out.

![](../../external_files/2c0177a20754d108e9e96d9dc8bb9688.png) ![](../../external_files/a80b6f17060a9e3257becc95841ffea6.png)

This example shows the waiting list *with* the Group resources check-marked. This groups the resources for any patient that is on the waiting list for an appointment requiring more than 1 resource. It lists the patient once, but groups all the resources (physicians) in the doctor line.

![](../../external_files/2b6b1eb07d55a096c984b2619aa46979.png) ![](../../external_files/15804616d39f87893ce200f0243978b0.png)

* <strong>Patient:</strong> To search for a specific patient on the waiting list, type patient's last name (in the <em>Patient</em> search field) and it will pop-up patients to select from. Highlight the patient then click <em>Search</em>. Your search will show up in the Waiting List: below. If you want to search for someone by using their MR#, you must type a question mark and then the MR#.
* <strong>Location:</strong> To search by a specific location on the waiting list, select the desired location from the drop-down arrow. Only shows inside locations. It does not show outside locations.
* <strong>Comment:</strong> To search for any specific text within a comment that would be in the comments section of the patient's waiting list appointment.
* <strong>Create Date:</strong> To search by a specific date the appointment was created in the waiting list.
* <strong>Hide Future Visible:</strong> This checkbox should only be used to display occupational health appointments with a visible date in the future.  These waiting list appointments have a visible date in the future when the employee is notified that they are due to schedule their appointment.

**Show CSV Link:** If you click the *Show CSV* link above the waiting list results, it will put the waiting list into an excel spreadsheet/report format. You can sort, print, save, or do other functions from this report/spreadsheet ability.

![](../../external_files/87ec0ed618f8e3c0c6a0ce45a4e94cb3.png)

## Remove Patients from the Waiting List

### Scheduling from the Waiting List

The following addresses how to schedule patients that now have appointment times and need to be taken off the waiting list and scheduled.

Click *Scheduler* from left sidebar menu.

Click *Waiting List* tab from top menu of tabs.

Find the patient you want on the waiting list.

Click *edit* at the right of the patient name on the waiting list that you want to move off this list (by editing the appts) and make/create an appointment for. (You can also find list of patients on the waiting list by using the Appointment Report and edit their appt to now schedule them for a specific date/time of an appt from there too).

![](../../external_files/06b3715e0a6d2ba8680a08af60ee02b6.png)

It will now open the *Appointment Wizard* tab for the patient.

![](../../external_files/0f72172050da62d6b88a313bf0f08f6b.png)

![](../../external_files/aa311b004b2423efed3928e055d83a34.png)

Fill out the **appointment date & time** field information of the appointment that the patient is now being scheduled for (see appt wizard instructions) and/or edit any other information in the Appointment Wizard screen.

Click *Save* at the bottom when done.

It will say *Uploaded Appointment*! at the top. The patient is also automatically taken off the waiting list and their appointment is now scheduled for the date/time, resource, appt type, location etc that you filled out.

### Removing Patients from Waiting List with No Appointment

The following addresses how to remove patients needing removed from the waiting list who have no appointment times or went to another facility.

Click *Scheduler* tab from left sidebar menu.

Click *Waiting List* tab from top menu of tabs.

Find the patient you want on the waiting list.

Click *edit* at the right of the patient name on the waiting list that you want to take off this list and not create a future appointment for. (You can also find list of patients on the waiting list by using the Appointment Report and take them off from there too).

![](../../external_files/06b3715e0a6d2ba8680a08af60ee02b6.png)

It will now open the *Appointment Wizard* tab for the patient.

Scroll down to the very bottom and there is a field named *Cancel*. Select a cancel reason from the drop-down of choices.

![](../../external_files/7d63575d500453caa05d7bf5c8866a45.png)

{{% tip %}}

If the reason is not in this drop-down choice you can add Cancellation Code Reason if you have security role permission. See other help documentation titled [COPY-EDIT-DELETE-CANCEL-NO SHOW APPOINTMENTS](cancel-no-show-edit-appointments.html).

{{% /tip %}}


Click SAVE button. It will automatically take the patient off the waiting list by cancelling the appointment.

## Adding a Patient to the Waiting List

Click *Scheduler* tab from left sidebar menu.

Click *Wizard* tab in the Scheduler.

It will open the *Appointment Wizard tab.*

Search and select the patient you want to put on the waiting list from the Patient Search field at the top of the Appointment Wizard screen.

![](../../external_files/b218dffc883386c812c8b0b72b914560.png)

OR

Click *E-Chart* tab from left sidebar menu.

Find patient you want and get into their file.

Click *Add Apt* from anywhere in the patient's chart.

![](../../external_files/d27f7a6ebf406733e1ba455765dad571.png)

It will open the *Appointment Wizard* screen.

When the Appointment Wizard opens, it will show the *Patient* section. This is where you type in the last name of the patient for the appointment (or click the help icon and search for the patient by DOB, MR#, or SSN).

Proceed to fill out the information fields that you need to, then at the **date/time for appointment field** you must click USE WAITLIST button. It will clear out the date/time fields to be blank (meaning the patient will be going on the waiting list).

![](../../external_files/e7e3cfc0002b9a978695425cd347d72a.png)

Then go down to the bottom of the screen and click the SAVE box.

It will add the patient's appt to the waiting list and it will refresh you to take you to the waiting list view. This has put this patient in the waiting list and shows you. You can get out and continue to work elsewhere in {{% system-name %}} .

![](../../external_files/e7d0da3b1921b7a68e5e905ccbe7b04b.png)

## Send Email(s) to Patient(s) on Waiting List

You must have security permission to *Send Email to Patients* set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature.

You can send an email of a patient reminder to anyone or all patients on the waiting list. The email will only be sent to those patients who have an email address stored in the demographics tab in the email field.

![](../../external_files/5f3bc7104f08e8a9f932f92b203ff0a9.png)

When in the scheduler, click the WAITING LIST tab at the top.

In the Waiting List screen view, click **Notify Patient by Email** link at the top right of the waiting list.

![](../../external_files/bc24066e8f7869b44fea1fdc69bc34f6.png)

See other help documentation named *Email Reminders From |system|.pdf* on how to send emails to patient from here. You can also send emails for waiting list appointments from the Appointment Report. See other help documentation regarding the Appointment Report.

## Print Charts from Waiting List

You can print charts, using print definitions, for patient's on the waiting list by clicking the Print Charts link found in the Waiting List tab. Print Charts functions just like the print chart link found under list or multi-view.

![](../../external_files/92db8df773d57a72af4f6af9b0eebf53.png)

You can also send emails for waiting list appointments from the Appointment Report. See other help documentation regarding the Appointment Report.

