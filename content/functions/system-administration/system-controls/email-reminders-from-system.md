---
id: '1i7YoarhqQRnve4N65SpJkHJR9raGN_EMCMfzShpUyUw'
title: 'Email Reminders from System'
date: '2024-10-23T13:26:37.472Z'
version: 219
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'about:blank'
  - '../../scheduling/scheduler-views.md'
  - '../../scheduling/adding-an-appointment-using-the-wizard-tab.md'
  - '../../scheduling/waiting-list-tab.md'
  - '../../reports/appointment-report.md'
  - '../../reports/documents-report-super-document-type-search.md'
  - 'https://mie.talentlms.com/shared/start/key:LAZIDNHR'
source: 'https://drive.google.com/open?id=1i7YoarhqQRnve4N65SpJkHJR9raGN_EMCMfzShpUyUw'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Must have security setting of *Send Email to Patient* set to Yes in order to utilize the email link and feature in {{% system-name %}} .

Sending Email Reminders to patients are available in many modules within {{% system-name %}} . An ‘email' link can be found in the Quick Links portlet in the patient chart. This email link will show regardless if patient has an email address captured in their demographics or not.

![](../email-reminders-from-system.assets/d4a30f42030072c1d5caa264556a23b7.png)

## Email Templates from Chart

The email template available from the email link in the Quick Links portlet of patient's chart is usually only the email layout (template) of **Comments Only**. This means the email layout (template) doesn't have any other text in the email except what you will fill out for the Subject, and Comments. That is all that will send in an email to the patient. Your MIE Implementer can remove the ‘Comment Only' layout from this template selection list if you have other templates custom created for your practice. Comment Only layout is meant to be used when no other layouts are available. If all email correspondence is templated or other custom template choices appear here and the basic *Comments Only* template is not needed and/or not wanted they can be removed via the system setting named "Offer Comment Only Email Template". Set system setting to 0 (zero) to remove the *Comments Only* email template choice from showing up.

![](../email-reminders-from-system.assets/ed58ab6f922a4ab3d24b3adae45fdc0b.png)

* <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to the patient. This subject line is also a searchable field to find specific email documents using the Doc Reports tab. This cannot be edited after the email is sent and stored as a document in {{% system-name %}} .
* <strong>Carbon Copy Email:</strong> Your system has this feature turned on via a system setting (by default this field is on). If you wish it off for your system, contact MIE helpdesk. You can type in the first or last name of a user within  {{% system-name %}} & this email will be sent to the  {{% system-name %}} user also. It will auto-complete  {{% system-name %}} users for you to choose from. You <em>cannot</em> free type in an email address. It has to be selected from the auto-complete of users in your system. If the user does not have an email address entered in their  {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select. You have to select a user from the auto-complete and the user's email has to be a user that's in your system, otherwise you will get an error. (Meaning, you cannot carbon copy this email to an outside provider or someone outside your practice. Carbon Copy emailing can only be done to users within your practice boundaries). There is also a system setting <em>WebChart</em>, <em>Email</em>, <em>Include Chart Types</em>that your MIE Implementer can set the Chart Type ID# to have those charts (chart types) also available in the auto-complete of choices to email to and they don't necessarily need to be entered in as users.

![](../email-reminders-from-system.assets/db9a14cf8ca8d00fc96084db09bdfc5a.png)

* <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to the patient.

![](../email-reminders-from-system.assets/74487e52c3df4951a5f7dad093c65319.png)

This is what the Comments Only email template looks like when it comes to the patient. The subject of the email appears and is what you free-text typed in that field. The comments also appear with the free-text that you typed in that field. When emailing patients, the comments will only be inserted at the top of the email if a layout is not already handling the comments within the layout itself.

{{% tip %}}
To see a preview of the email that will be sent, click the Preview button. It will open up a separate window showing you what will be sent in the email.

![](../email-reminders-from-system.assets/e7e3d5617c6a82acc98d1b98c18b9bd5.png)
{{% /tip %}}

The *From* email is set to be from the default of [noreplywebchart@med-web.com](about:blank) Your MIE Implementer can change this system setting to reflect an email from your own practice and own server. It can only be set to one specific email address you have at your practice. It could be a specific individual's email for your practice that may get replies to emails being sent out, or it could be a group email you have within your practice (ex: [helpdesk@mieweb.com](about:blank)) Changing the ‘from' email will affect emails generated from any module/feature in {{% system-name %}} . Examples are these email reminders and also emailing of documents from the inbound fax queue.

![](../email-reminders-from-system.assets/651d51df3e4445ca9e46b43369874e55.png)

This is what the Comments Only email template looks like when it sends to the patient:

![](../email-reminders-from-system.assets/a176ac08703de3af18fa092e48d9e67a.png)

MIE can program any other email layout (template) you wish that include pre-templated text (currently no images ie: logo's can be imbedded) in the email to be sent. Other customized email layouts (templates) can be programmed here as a choice in the drop-down. Please contact your MIE Implementer to have additional customized email templates added to your system. Billable charges apply to customized email layouts. As a default, your system is currently only programmed with the Comments Only template (layout) to use within the patient's chart tabs. Again, this email link shows in the patient chart tab headers if the patient has an email address entered in their demographics tab.

Your system is already set up with a default email template named *Comments Only* (as described above). Your MIE Implementer can remove the ‘Comment Only' layout from this template selection list if you have other templates custom created for your practice. The Comment Only template is meant to be used when no other layouts/templates are available. If all email correspondence is templated or other custom template choices appear here and the basic *Comment Only* template is not needed and/or not wanted they can be removed via the system setting named "Offer Comment Only Email Template". Set system setting to 0 (zero) to remove the *Comment Only* email template choice from showing up.

![](../email-reminders-from-system.assets/ed58ab6f922a4ab3d24b3adae45fdc0b.png)

## Email from the Scheduler

The email link is also available in the scheduler views to send mass email reminders for the appointments scheduled for the day/view you are viewing. This is a user preference if Scheduler Preference *Show Email Link* is set to Yes.

![](../email-reminders-from-system.assets/973b0344ee9a5a4342c8251a0b5aa748.png)

When the Email link is selected, an Email Options window is opened on a new tab. This is where you can mass email appointment reminders, for example, to everyone scheduled for the day.

![](../email-reminders-from-system.assets/9be048e1709d7147e06f50e1b7ab71a5.png)

* <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to all patients.
* <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to all patients.
* <strong>Email Template:</strong> Select any pre-templated email verbiage/layouts that your system has set up.
* <strong>Include Appt Invite (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
* <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
* <strong>Send Me RSVP:</strong> when emailing from the scheduler, the attached ICS (meeting request) has the option to request an RSVP. If the auto reply email setting is setup with something that has ‘noreply' in it, it will not request an RSVP. It will otherwise.
* <strong>CC Supervisor: (carbon copy)</strong> You can carbon copy the patient's supervisor by checking the CC Supervisor box. The supervisor must have an existing "Supervisor User Relationship" to the employee on the demographics Contact/Relationships list to be carbon copied using this feature.
* <strong>Carbon Copy Email:</strong>
    * <strong>Email Template:</strong> MIE can set up different email layouts (information you want to send in mass). This is where you would select a specific email template to be sent to all the patients. Default will just show your subject & comments as typed above.
    * <strong>Users to email:</strong> You can type in the first or last name of a user within {{% system-name %}} & this email will be sent to the {{% system-name %}} user also. If the user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
* <strong>Patients to Email:</strong> It will display the patient's that have an email address entered into their demographics tab and be selected as a check-mark meaning this email will be sent to those patients that have valid email addresses entered in their demographics tab. You have to checkmark patients you wish to receive the mass email regarding appointments. Or you can use the check all or uncheck all links provided to quickly check-all to receive the email and uncheck-mark those you want to remove from the email reminder being sent. Only patient's with email addresses entered in their demographics tab will appear in this list. If a patient doesn't appear on this scheduler email list, then they don't have an email address entered in their demographics tab.

See other help documentation named [Scheduler Views](../../scheduling/scheduler-views.md) for specifics on how to email from the scheduler views.

Also from the scheduler view you can send an individual patient email reminder on the specific appointment scheduled on the view.

![](../email-reminders-from-system.assets/17ab6396691dadcff135ff1f574c6474.png)

The email link is also available in the Wizard tab to send an email reminder for new appointments being scheduled. See other help documentation named [Adding An Appt Using Wizard Tab](../../scheduling/adding-an-appointment-using-the-wizard-tab.md) for specifics on how to email from the Wizard (adding appointment) screen.

![](../email-reminders-from-system.assets/130b94d3b4a6f0a7601d3275b2afde36.png)

The email link is also available to send email reminders within the Waiting List tab of the scheduler. See other help documentation named [Waiting List Tab](../../scheduling/waiting-list-tab.md) for specifics on how to email from the Waiting List screen.

![](../email-reminders-from-system.assets/bf44b9a7ad46932915fd2a94b343626e.png)

The email link is also available to send email reminders within the patient's Appointment Chart tab. In the patient's chart tab named *Appointments*, it lists the patient's appointments that are on a waiting list, the patient's past/pending appointments, the patient's cancelled appointments and the patient's No Show appointments. In the options column of this summary is a Send Email link. You can send an email reminder to the patient regarding that appointment.

![](../email-reminders-from-system.assets/009fc5fd0243083fe0107c255205c4cf.png)

{{% warning %}}
When sending emails, be careful not to type / include protected health info if sending via internet and not intranet using this feature.
{{% /warning %}}

Some clients gather and enter a patient's email from the patient forms they fill out, others have the patient sign an email authorization form authorizing the practice to email the patient about appt reminders, etc. It depends on your practice and how you want to gather emails and/or authorizations.

## Email Templates Regarding Appointments

* <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to all patients. This subject line is also a searchable field to find specific email documents using the Doc Reports tab. This cannot be edited after the email is sent and stored as a document in {{% system-name %}} .
* <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to all patients.
* <strong>Email Template:</strong> Select any pre-templated email verbiage/layouts that your system has set up. The email template available from the email link for patient's regarding their specific appointments is the email template of <em>Default</em>. This means the email template will include the subject, comments, and some pre-templated text information regarding the appointment. This includes the <strong>appointment date, appointment time, appointment location,</strong> doesn't have any other text in the email except what you will fill out for the Subject, and Comments. That is all that will send in an email to the patient.

The email template that you default to (the template that the drop-down is defaulted to) is a user (MY SETTINGS) preference. You can select the default appt email template/layout you wish to always default to.

![](../email-reminders-from-system.assets/03c6414488bd53f03965900dd904fd1f.png)

Your system is already set up with a default email template named Default regarding appointments. Your MIE Implementer can remove the ‘Default' layout from this template selection list if you have other templates custom created for your practice. The Default template is meant to be used when no other layouts/templates are available. If all email correspondence is templated or other custom template choices appear here and the basic *Default* template is not needed and/or not wanted they can be removed via the system setting named "Offer Default Email Template". Set system setting to 0 (zero) to remove the *Default* email template choice from showing up.

![](../email-reminders-from-system.assets/69d302ed37435b87e4eeb56bd63f2b5f.png)

Click the preview link to view a preview of the email contents that will be sent out.

![](../email-reminders-from-system.assets/c1d1bcb04a445bcec40e3eabe2b8a8c8.png)

* <strong>Include Appt Invite (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
* <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
* <strong>Send Me RSVP:</strong> when emailing from the scheduler, the attached ICS (meeting request) has the option to request an RSVP. If the auto reply email setting is set up with something that has ‘noreply' in it, it will not request an RSVP. It will otherwise.
* <strong>Don't Email Patient:</strong> that will leave the patient off the recipient list but still document it in their chart. This is a way to email a supervisor or  {{% system-name %}} user about an employee or patient but <strong>not</strong> have it go to the employee/patient's email inbox. They do want it to document it in the employee/patient's chart though.
* <strong>To Email:</strong> this will email it to the other  {{% system-name %}} users. This field is similar to the CC Email field except the user's end up on the "To" line in the email instead of the CC line. This is used in conjunction with the <em>Don't Email Patients</em> box.
* <strong>Carbon Copy Email:</strong>

    ![](../email-reminders-from-system.assets/db9a14cf8ca8d00fc96084db09bdfc5a.png)
    * <strong>Users to email:</strong> Your system must have this feature turned on via a system setting (by default this field is off). If this field is turned on for your system, you can type in the first or last name of a user within  {{% system-name %}} & this email will be sent to the  {{% system-name %}} user also. It will auto-complete  {{% system-name %}} users for you to choose from. You cannot free type in an email address. It has to be selected from the auto-complete of users in your system. If the user does not have an email address entered in their  {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
    * <strong>Patients to Email:</strong> Automatically lists all patients in the specific screen/feature/module you are in when you clicked Email. You have to checkmark patients you wish to receive the mass email regarding appointments. Or you can use the check all or uncheck all links provided to quickly check-all to receive the email and uncheck-mark those you want to remove from the email reminder being sent. Only patient's with email addresses entered in their demographics tab will appear in this list. If a patient doesn't appear on this scheduler email list, then they don't have an email address entered in their demographics tab.
* <strong>CC Supervisor: (carbon copy)</strong> You can carbon copy the patient's supervisor by checking the CC Supervisor box. The supervisor must have an existing "Supervisor User Relationship" to the employee on the demographics Contact/Relationships list to be carbon copied using this feature.

Click **Send Emails** button when those text fields are completed.

It will then show a confirmation message of the emails it sent out. If a patient does not have an email entered in their *demographics* tab field, it will not show anything on this *emailed* screen for that specific patient. That patient will not be displayed in this confirmation screen.

If the email address was not correct, the document would have been made, but the email would have failed to make it.  Even if the receiving email server rejected the address,  {{% system-name %}} wouldn't be notified about it.

The email link is also available to send mass email reminders within the Appointment Report in the reports tab. See other help documentation named [Appointment Report](../../reports/appointment-report.md) for specifics on how to email from the Appointment Report screen.

![](../email-reminders-from-system.assets/847a017fa48ab7494d145c140dd4c870.png)

## Default Email Template

Your system is initially only programmed with the Default template (layout) to use regarding patient appointments. This is what the Default email template looks like when it comes to the patient.

![](../email-reminders-from-system.assets/a28edf38ba509ffc732e94bbbe1eb246.png)

The Default email template regarding patient appointments includes **when** the appointment is scheduled for (date & time of the appointment), **where** the appointment is scheduled for (location), and **provider** which is the resource/clinician the patient is scheduled to see. (The Default template can be removed if practice doesn't wish to use this default layout. See previous page 5.) The subject of the email appears and is what you free-text typed in that field. The comments also appear with the free-text that you typed in that field.

{{% note %}}
Currently we cannot pull the scheduled appointment location's phone number. We do pull location, but not it's respective phone number.
{{% /note %}}

The *From* email is set to be from the default of [noreplywebchart@med-web.com](about:blank) Your MIE Implementer can change the system setting to reflect an email from your own practice and own server. It can only be set to one specific email address you have at your practice. It could be a specific individual's email for your practice that may get replies to emails being sent out, or it could be a group email you have within your practice (ex: [helpdesk@mieweb.com](about:blank))

![](../email-reminders-from-system.assets/f3be7c53984c495587042f07f02bf055.png)

This is what a Default email template looks like when it sends to the patient:

![](../email-reminders-from-system.assets/95d789dc0fdd28a2ca0d2c248d0643fc.png)

MIE can program any other email layout (template) you wish that include pre-templated text (currently no images ie: logo's can be imbedded) in the email to be sent. Other customized email layouts (templates) can be programmed here as a choice in the drop-down. Please contact your MIE Implementer to have additional customized email templates added to your system. Billable charges apply to customized email layouts. As a default, your system is currently only programmed with the Default template (layout) to use regarding patient appointments. Then you can set a user (MY SETTINGS) preference to select your default email template to use from the scheduler/appts view.

## Emails Stored as Documents

Emails sent via any of the above methods are stored in the patient's chart as a document. The emails are stored as the doc.type EMAIL. Please make sure there is a doc.type in your system named EMAIL. When emailing a patient, if a layout template other than default is used (and has been programmed by MIE) and that specific layout has a document type set on it, that document type will be used when archiving/storing the email to a document. Therefore, the document type it stores as may be different from default doc.type EMAIL.

When emails are sent, they are stored as EMAIL documents in the patient's chart (unless you've specified a different doc.type in an email layout choice). The subject of the email is also stored as a searchable option from the Document Reports tab.

![](../email-reminders-from-system.assets/d2e7567ea950704c7c46fe22def50475.png)

Most emails are stored as the EMAIL doc.type, unless you have had MIE program an email layout tagged to a different doc.type. You can map the EMAIL documents to show in the chart tab of your choice, but the default will show them in the patient's DocSum tab.

Emails are stored as documents (usually doc.type named Email) in the chart. If an email is sent from an encounter visit or from an appointment, the system setting (if enabled) can set the "location" of the email document to store as that clinic location on the email. Meaning, if an email is generated from the appointment view, then the stored email document will have the service location stored as that appointment location. Patient email documents have a service location assigned from the patient's clinic location if and only if no other service location was assigned and this system setting "Use Clinic Location For Email Service Location" is enabled (set to 1)

![](../email-reminders-from-system.assets/b13c4cc2a056c7bc18381299637ee051.png)

These email documents can also be found using the Doc Report (Document Report). This Document Report is found in the Reports sidemenu tab. You can search for emails using that report. *See other help documentation named* [Documents Report-Super Doc Search](../../reports/documents-report-super-document-type-search.md).

Emails are also stored as their own storage type of Email. Meaning, emails are not stored as word documents, not as text documents, not as html formatted…they are stored as their own storage type of Email.

![](../email-reminders-from-system.assets/977dd627eb964a8ec1f3ccf3a004e60f.png)

Also using the Doc Report (Document Search Report) found in the Reports sidemenu tab, you can search for email documents that contain a specific subject wording in the email. To do this, make sure **Doc Type** is check-marked to Email, **Storage Type** is check-marked to Email, set your date range and other fields if you wish. Then in the **subject** field, type the *subject verbiage* you want to search for. This allows you to show results of emails that contain that specific verbiage in the subject line of the email. Then click the SEARCH button to render your results.

![](../email-reminders-from-system.assets/0334e866be6448b414eebaf446d37822.png)

The **Optional Columns** field give you a choice to display the Subject column in your report results or not. If you checkmark *Subject* in this Optional Columns field, when you SEARCH and render your results for the report, it will make a column for this. It shows the *Subject* as a column in your results.

![](../email-reminders-from-system.assets/8fb9f2e067339e0b9e8c0ecae715a1a0.png)

![](../email-reminders-from-system.assets/82e49d50af05eeaa549a4d86be0c7ac2.png)

You can have your MIE Implementer program the custom ability to opt a patient out of email reminders thru their demographics tab. You can then exclude patient from appointment reminders (you simply check off) and the cron job that automatically sends email reminders daily, that would need setup, then respects that setting.

![](../email-reminders-from-system.assets/282129f61dd641eb643da945a10cd08b.png)

The system does not support emailing attachments, packets of documents, etc. Email sent out from  {{% system-name %}} is tracked and explained in sections above on how to run a report for them or where to find them in the patient's chart. Inbound email cannot be delivered into your  {{% system-name %}} system.  {{% system-name %}} does not accept or process incoming emails from outside sources. The Inbound Fax Queue can send a received fax via email as an attachment, but the email recipient has to be an active  {{% system-name %}} user. See more information in Inbound Fax Queue help documentation.

## Extended Email Fields

Contact your MIE Implementer if you'd like to capture more than one email address for a patient. This could be manual or an extra email field(s) that comes in via your PM interface. MIE can add a patient extended field(s) in your "edit demographics" screen (or in demographics if coming in via interface) to capture/show an additional email. Sometimes a patient may have a work email and a personal email (as an example). Then when sending email reminders or emails from  {{% system-name %}} to the patient, both emails will display for your selection on where to send that email to or not send it to.

A system setting in  {{% system-name %}} controls what fields to consider *extended email fields* for a patient (E-Chart, Email, Extended Patient Email Fields). Contact your MIE Implementer to have this set up.

![](../email-reminders-from-system.assets/0a0c9538ebadb9b8171173502394e62f.png)

## Learning Management System

To learn more about the Email Reminders from System, follow the link below to the Learning Management System course:

* [Email Templates](https://mie.talentlms.com/shared/start/key:LAZIDNHR)
