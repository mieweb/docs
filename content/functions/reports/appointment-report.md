---
id: '16bxQgq2-0OvXmyQcnJK81ci7x-uFmu3AQBhmAbLaa30'
title: 'Appointment Report'
date: '2024-02-21T18:33:25.801Z'
version: 121
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=16bxQgq2-0OvXmyQcnJK81ci7x-uFmu3AQBhmAbLaa30'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.

The Appointment Report displays a report of found appointments

Click *Reports* tab on the left side-bar menu.

Click *Appt Report* tab from the top tab menu.

It will open to the Appointment Reports search fields.

![](../appointment-report.assets/823764d1adac79db343ceed8944ba154.png)

* <strong>Date Range:</strong> It will automatically default to today's date as the range. You can select any date range you wish to run the report for.
* <strong>Appointments on waiting list</strong> checkbox: This option is to search for appointments on the waiting list. If this is checked, then the start and end dates are greyed out/disabled to indicate that they are not being used.

To narrow down a search for appointments, simply select the fields you wish to narrow your search down by. These fields are: **Visible Date range, Due Date range, Resource, Date Range, Location, Appointment Types, Cancel Reason, Patient and/or Time of Day.**

* <strong>Select the Resource:</strong> You can run an appointment report for a specific a resource or multiple resources by clicking in this <em>Select Resource(s)</em> field or clicking on the […] box at the end of that field.  It will open a drop-down selection of resources.  Check-mark the resource(s) you wish to run an appointment report for.  The default is set to <em>ALL</em>.
    * When you check-mark the resource(s) you wish to run the report for, you can only checkmark up to 99 individual resources. If you need more than 100 resources for this report, you will need to use the SELECT ALL option in this field.

![](../appointment-report.assets/db66092af3a1529be6941c1e1dbdca46.png)

* <strong>Location:</strong> You can select a specific location to run this report for or multiple/all locations. You can also run a report and select ‘No Location Chosen' to see what appointments were scheduled without a location set on them. Simply click in the <em>Location Filter</em> field or click on the […] box at the end of that field. The default is to run this report by ALL locations. Click in this filter to select one or more locations specifically. It will open a drop-down selection of locations your system uses. Check-mark the location(s) you wish to run an appointment report for.
* <strong>Appt Types: Appt Type Filter (Default is All):</strong> You can select a specific appointment type to run this report for or multiple or all appointment types. Simply click in the <em>Appt Type Filter</em> field or click on the […] box at the end of that field. It will open a drop-down selection of appointment types. Check-mark the appt type(s) you wish to run an appointment report for.

![](../appointment-report.assets/6b9ebc1987a67dd381a943699c8c22d2.png)

* <strong>Cancel Reason:</strong> You can select a specific cancel reason to run this report for or multiple/all cancel reasons. Simply click in the <em>Cancel Reason</em> field or click on the […] box at the end of that field. It will open a drop-down selection of cancel reasons your system uses. Check-mark the cancel reason(s) you wish to run an appointment report for. By default, <strong>all</strong> cancel reasons are selected and set not to filter out any.

![](../appointment-report.assets/7be5d18131f28bf844d9256c3b4f6a81.png)

* <strong>Patient:</strong> You can run the report to filter the found appointments by a specific patient. Simply enter the patient's <em>last</em> name and it will give you auto-complete choices. You can also click the icon for help to enter a different method of searching for a specific patient to enter into this field using MR#, DOB, etc.

![](../appointment-report.assets/afac46ff5909bd38d7be0090583d3610.png)

* <strong>Time of Day:</strong> You can run the report to filter the results by a specific Appointment Time. Simply enter the time range you want the report to find appointments for. You can enter the time with am or pm, or you can also type in military time (example: 22:00) and it will convert that to 10:00pm.

![](../appointment-report.assets/4b558b11bfe7046e40f89d275391199b.png)

* <strong>Appt Duration Range & Encounter Duration Range:</strong> You can run the report to filter the found appointments or encounter appointment by a specific appointment duration range in minutes. You can enter specific appt or encounter appt durations to search or a range of appointment or encounter appt durations in minutes to search.

![](../appointment-report.assets/a47379ce26ba4e0d96131ff96b995d43.png)

* <strong>Optional Columns:</strong> Here you can checkmark which optional columns you want to display or not display in your search results section. By default, <strong>all</strong> are checkmarked. Unchecking all of these optional columns means that none of them will show up. This is different from the "Default is All" behavior in locations, appointment types, etc., where unchecking everything means "don't filter anything out".

![](../appointment-report.assets/16d143d2b93079d0887a2c1ff28bded4.png)

Note: If you select the optional column of *observation*, then an auto-complete field will appear when you click outside of the optional column choices. The auto-complete is there to type in the specific observation(s) you wish to show in the results.

![](../appointment-report.assets/69a6e6fc6956bf35a3bcd78c5dd341ad.png)

* <strong>Include Revisions:</strong> If you check-mark the box to <em>Include Revisions</em> in the Appointment Report, it will show your search results (found appointments) and then also will show another separate section/category of Found Appointment Revisions below the found appointments.

This will allow you to show any revisions to appointments also in this report search.

![](../appointment-report.assets/7e00e49eaf730194cefd046155dfdc07.png)

* <strong>Order By</strong> field*:* You can select from the drop-down the method for which you want your results displayed on the screen. The list of found appointments can be displayed in Patient Name order (last name alphabetically) or in Appointment Time order (will display the earliest appointments first in chronological time order).

![](../appointment-report.assets/d77584f315d6fbb44112228f48e2e3d8.png)

* <strong>PatName</strong> order will display the results in alphabetical order by last name of the patient.
* <strong>Appt Time</strong> order will display the results in appointment date/time chronological order.
* <strong>Linked Encounters</strong> field: You can filter the report by specific encounters linked to the appointments or render results by no linked appointments. By default this field is set to show "any/all" linked encounters per appointment that results on the report (or blank if none). Example: You can link to "checkin" and select optional column of "arrival/departure" to run reports based on checkin and checkout of appointments linked to "checkin" or appointment reports linked to other encounter types.

## Found Appointments

Click the SEARCH button after you've filled out all the filter data you wish. It will then render "Found Appointments" listing of the matching appointments found. This is the Report of Results.

![](../appointment-report.assets/aa7948b5d5633b97a4cd24d02cbc1001.png)

You can confirm appointments from this report or see which appointments already are confirmed with the check-mark in the *confirm* column.

![](../appointment-report.assets/e1faf5af3d7f9fbb0c18bfbb1593e338.png)

To edit an appointment or view the details of the appointment, simply click on the underlined Appointment ID and it will take you to the appointment wizard for that specific appointment.

![](../appointment-report.assets/29861bcbcb3c63ba544d3f6fd186dbf6.png)

### Moving Found Appointments

You can select an appointment from the Found Appointments report. If you just want to quickly in mass or individually change/move them to a different Resource or Location or put them on a Waiting List or cancel them in mass, for the selected found appointments, you can check-mark those specific appointments in the **Select** column and then click the **MOVE SELECTED** button.

![](../appointment-report.assets/b8fd4e932f969e618a59a6dd97c936af.png)

This will allow you to move these patient appointments to a new resource or location or waiting list easily & quickly. As soon as you click MOVE SELECTED, you will view the Update Options screen.

This is where you change the Resource and/or Location for all of the found appointments you selected with the check-mark. If you want to move the block of appointments to a new resource, new location, etc.

You can always un-checkmark specific patient appointments in the list below these fields if you decide you didn't need to change/move anything.

You can also put these ‘move selected' appointments on a Waiting List by check-marking that option.

Or you can cancel all these ‘move selected' appointments entirely. When editing an appt or moving appts from the Appt report, if the {{% system-name %}} system does not have any cancel codes, the drop-down for cancel reason will always cancel the appt. It's been modified so that the first entry in the drop-down is the blank that appears when there are cancel codes. It can be used now even when there aren't any codes loaded.

![](../appointment-report.assets/0371faee9c0d9796856c5a8ec28129b5.png)

If you put the patient(s) from the appointment block onto a waiting list, check mark that option. It will then open an option to send a cancellation email. This is a separate ‘cancel appt & put on waiting list' email that can be sent.

You must have security permission to *Send Email to Patients* set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature.

![](../appointment-report.assets/c98c15e13cb06a951381f174c3285942.png)

You can select an **email after moving** from the drop-down also. This allows emailing the newly moved appointments.

Both the cancellation email and email after moving emails will allow i-calendar attachments for putting on Outlook/gmail, etc. You must have security permission to *Send Email to Patients* set to Yes in order for any email features to display for your use. If your security is set to No, you will not see this Email feature.

Click UPDATE when you have made your Update Option selections. It will then give you a confirmation at the top of the screen saying how many appointments you updated.

![](../appointment-report.assets/9922329996b3320c37b15a1478e9af80.png)

### Printing Charts/Documents for Found Appointments

You can also print charts for any selected patient in the appointment report.

First select a patient or multiple patients or all patients in the report by individually check-marking to select them from the **Select** column, or use the *Select All* or *De-Select All* buttons at the bottom of the report.

Once you have the patient(s) selected you want to print charts for, click the **Print Selected Charts** button at the bottom of the report. You will be taken to the Print Charts functionality and can continue to print a print definition of charts for those patients.

![](../appointment-report.assets/6bf1a39ec2973495012518af43a9a10f.png)

### Emailing Selected Found Appointments

You can also Email appointment reminder emails to any selected patient in the appointment report.

You must have security permission to *Send Email to Patients* set to Yes in order for any email features to display for your use.

If your security is set to No, you will not see this Email feature.

First select a patient or multiple patients or all patients in the report by individually check-marking to select them from the **Select** column, or use the *Select All* or *De-Select All* buttons at the bottom of the report.

Once you have the patient(s) selected to send email appointment reminders to, click the **Email Selected** button at the bottom of the report.

![](../appointment-report.assets/6782071605ed4f90e356da3e9bb31337.png)

Once you have clicked *Email Selected*, it will open to the Email Options screen.

![](../appointment-report.assets/06d2f3db92e45a8b530d5a3661208544.png)

* <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to all patients.
* <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to all patients.
* <strong>Email Template:</strong> Select any pre-templated email verbiage/layouts that your system has set up.
* <strong>Include Appt Invite (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
* <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
* <strong>Send Me RSVP:</strong> when emailing from the scheduler, the attached ICS (meeting request) has the option to request an RSVP. If the auto reply email setting is setup with something that has ‘noreply' in it, it will not request an RSVP. It will otherwise.
* <strong>Carbon Copy Email:</strong>
    * <strong>Email Template:</strong> MIE can set up different email layouts (information you want to send in mass). This is where you would select a specific email template to be sent to all the patients. Default will just show your subject & comments as typed above.
    * <strong>Users to email:</strong> You can type in the first or last name of a user within {{% system-name %}} & this email will be sent to the {{% system-name %}} user also. If the user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
* <strong>Patients to Email:</strong> It will display the patient's that have an email address entered into their demographics tab and be selected as a check-mark meaning this email will be sent to those patients that have valid email addresses entered in their demographics tab. You have to checkmark patients you wish to receive the mass email regarding appointments. Or you can use the check all or uncheck all links provided to quickly check-all to receive the email and uncheck-mark those you want to remove from the email reminder being sent. Only patient's with email addresses entered in their demographics tab will appear in this list. If a patient doesn't appear on this scheduler email list, then they don't have an email address entered in their demographics tab.

![](../appointment-report.assets/ff31dccf0de76177fc9ea5fdec7bf7d1.png)

Click **Send Emails** when those text fields are completed. It will then show a confirmation message of the emails it sent out. If a patient does not have an email entered in their *demographics* tab field, it will not show anything on this *emailed* screen for that specific patient. That patient will not be displayed in this confirmation screen.

![](../appointment-report.assets/c5203d80b6f366c4e1e7b110275b9113.png)

You will also be taken back to the original appointment report you just ran.

The patient will then receive an email from your scheduler. This is an example of what the email will look like that the patient receives:

* <strong>From:</strong> They cannot reply to the email. It will say it's from noreply|system|.
* <strong>Sent:</strong> The day/time you sent the emails from the email module.
* <strong>To:</strong> The email address that was entered into the demographics tab for the patient.
* <strong>Subject:</strong> Your subject line that you typed in the email module appears here as the same subject for <em>all</em> emails you sent through the email module.
* <strong>When/Where:</strong> The date, time and location of the appointment that is scheduled for that patient. If your practice does not select the location of the appointment, this <em>location</em> field will then be blank.
* <strong>Text Comments:</strong> The appointment comments as they appear in the scheduler will automatically pull first in the email to the patient. Then any other comments you typed in the email module will appear here as the same to <em>all</em> emails you sent through the email module.

![](../appointment-report.assets/ca7a3f37a3a97538191542474bc3caf7.png)

## Save Report Filter Templates

You can "save" an appointment report you've run. You may run the same report monthly and instead of putting in the report search criteria fields in individually all the time, you can "save" the report filters to run again at a future time without having to manually key everything in again. You can save and access previous saved filter reports using the link options at the top: Save Filter Template and Show Saved Filters.

![](../appointment-report.assets/f56d75203aab4fdb4990e087e10c8ef8.png)

### Save Filter Template Link Option

To "save" a new report filter template, you need to enter in all the search criteria fields for the report from the Document Search Report. When you are done, you can click SEARCH to run the report and still access the save filter templates link even after you run a report.

![](../appointment-report.assets/2b9f117d3ffe5d9ac9eaa96ad075434f.png)

All the search criteria you entered in for the report can be stored as a "saved template" to run that same report again without having to rekey in each field manually. All search criteria fields are able to be stored in a filter template *except patient name.*

When you click the save filter template all search criteria fields (except those noted above) can be "saved" to this template to run the report again in the future quickly. You can "uncheckmark" any search criteria line items that you don't want to be included in this future "filter template", but by default it assumes you want to save all and it places a checkmark beside each. You must type a "Name" to name this saved report filter template.

![](../appointment-report.assets/1f1351e9da47d9a76722154d64321f82.png)

Click the SAVE button to save your template. You and others can now access the saved report filter template by clicking show saved filters link and quickly run the same report in the future without having to manually key in each filter criteria field individually.

### Show Saved Filters Link Option

If you wish to access a previously saved template and want to run the same report again, click the Show Saved Filters link. You will see a list of the choices and what the report is named. If you have security privilege, you can delete any saved filter reports from here too so it cannot be utilized anymore.

Click the saved document report template you wish to run. It will open the fields that are attached to this report and all will be checkmarked by default. If you wish to run the same report, simply click APPLY button and the report will render. If you wish to not include a previously saved filter item (ex: document type), then uncheckmark it and then run the report by clicking the APPLY button and it populate the Appointment Report search filter fields based and respecting what you have checkmarked from the saved template. Click the SEARCH button to run the report then.

![](../appointment-report.assets/b453149ccfd37ccf5c3d503d0593c95c.png)

*Personal Templates* are saved appointment report templates you (the logged in user) have saved & created to be in the library.

*Global Templates* are saved appointment report templates that other users have saved & created in this library and you can access them also.
