---
id: "1i7YoarhqQRnve4N65SpJkHJR9raGN_EMCMfzShpUyUw"
title: "Email Reminders from System"
date: "2026-02-20T14:03:20.588Z"
version: 411
lastAuthor: "anichols"
mimeType: "text/x-markdown"
links:
  - "enabled-and-disabled-scheduled-jobs.md"
  - "../../scheduling/scheduler-views.md"
  - "../../scheduling/adding-an-appointment-using-the-wizard-tab.md"
  - "../../scheduling/waiting-list-tab.md"
  - "../../reports/appointment-report.md"
  - "../../reports/documents-report-super-document-type-search.md"
  - "https://mie.talentlms.com/shared/start/key:LAZIDNHR"
source: "https://drive.google.com/open?id=1i7YoarhqQRnve4N65SpJkHJR9raGN_EMCMfzShpUyUw"
wikigdrive: "v2.16.0"
---

The ability to email patients directly from the {{% system-name %}} supports timely communication, improves engagement, and helps ensure patients stay informed about their care. It enables organizations to send reminders for upcoming appointments, notifications about overdue visits or items, and other important health-related updates. This functionality helps reduce missed appointments, supports continuity of care, and strengthens overall patient outcomes.

Users must have security setting of *Send Email to Patient* set to Yes in order to utilize the email functionality in {{% system-name %}}.

![](./email-reminders-from-system.assets/ff620e02fde3e3dd7cebe51353e896f2.png)

## Scheduled Jobs of Automated Emails

Scheduled Jobs (within the Control Panel) houses several standard automated jobs that will routinely generate and send an email based on specific criteria. Custom automated scheduled jobs, for other types of routine email reminders needed, can also be configured for your system.

For more information, visit [Enabled & Disabled Scheduled Jobs](enabled-and-disabled-scheduled-jobs.md).

## Manually Generating an Email

Sending Emails to patient charts are available in many functions and screens within {{% system-name %}}. An Email link can be found in the Quick Links portlet in the patient chart or from the lightning bolt. This email link will show regardless if the patient chart has an email address captured in their demographics or not.

![](./email-reminders-from-system.assets/e738a48eb616435e71a359681aad5b23.png)

## Email Patient Pop-up Window From Patient Chart

### Template Selection

Various email templates (PAT email layouts) are available for selection when generating an email from a chart. NOTE: When/if generating an email regarding an appointment, those email template choices are different.

### Comments Only Email Template Selection

The email template available from the email link in the Quick Links portlet of patient's chart is usually only the email layout (template) of **Comments Only**. This means the email layout (template) doesn't have any other text in the email except what you will fill out for the Subject, and Comments. That is all that will send in an email to the patient. Your MIE Deployment Consultant can remove the ‘Comment Only' layout from this template selection list if you have other templates custom created for your practice.

![](./email-reminders-from-system.assets/42b51f033ba7bf6ccf0dec833be67079.png)

Comment Only layout is available when system setting _Offer Comment Only Email Template_ is enabled. It is enabled by default. Users will see the Comments Only option in the template dropdown, allowing them to compose an email from scratch without using a predefined template. When disabled, the Comments Only template option is hidden, so users can only choose from available standard or custom email template selections.

![](./email-reminders-from-system.assets/cc16a03262f8ada9792f7db14a790683.png)

This is what the Comments Only email template looks like when it sends to the patient:

![](./email-reminders-from-system.assets/a176ac08703de3af18fa092e48d9e67a.png)

MIE can program any other email layout (template) you wish that include pre-templated text in the email to be sent. Other customized email layouts (templates) can be programmed here as a choice in the drop-down.

![](./email-reminders-from-system.assets/f5abdbc5512b2a7f143153af97dae208.png)

### Additional Fields - Email Patient

![](./email-reminders-from-system.assets/0d3899fe57b7a190ef5090a13d0a7031.png)

- <strong>Subject:</strong> Type in the subject line for the email. Typing in a subject will also be searchable to find specific sent/stored email documents when using the Documents Report. The subject (of an email) cannot be edited (in the document properties) after the email is sent and stored as a document in {{% system-name %}} .
- <strong>Additional Recipients:</strong> if the chart has any additional email addresses captured, they may appear here as well to send the email to. Other users (with valid email addresses) can be included here as an additional recipient if wish.
- <strong>Exclude employee email:</strong> By default, the email would be sent to the chart's primary email address in their demographics. If you need to send the email regarding the chart, but not send to the employee/chart/patient this is being generated about, you can checkmark to exclude employee/patient email. The email will still be stored within the chart.
- <strong>Carbon Copy Email:</strong> Can type in the first or last name of a user within {{% system-name %}} and this email will be sent to the  {{% system-name %}} user also. It will auto-complete {{% system-name %}} users for you to choose from. You <em>cannot</em> free type in an email address. It has to be selected from the auto-complete of users in your system. If a user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select. You have to select a user from the auto-complete and the user's email has to be a user that's in your system, otherwise you will get an error. (Meaning, you cannot carbon copy the email to an outside provider or someone outside your practice. Carbon Copy emailing can only be done to users within your practice boundaries). There is also a system setting <em>WebChart</em>, <em>Email</em>, <em>Include Chart Types</em> that your MIE Deployment Consultant can set the Chart Type ID# to have those charts (chart types) also available in the auto-complete of choices to email to and they don't necessarily need to be entered in as users.
- <strong>Comments:</strong> Type in any comments. These comments will appear in the email to any/all recipients.

To see a preview of the email that will be sent, click the Preview button. It will open up a separate window showing you what will be sent in the email.

![](./email-reminders-from-system.assets/e7e3d5617c6a82acc98d1b98c18b9bd5.png)

### Email From Address

The *From* email is set to be from the default of noreplywebchart@enterprisehealth.com Your MIE Deployment Consultant can change this system setting to reflect an email from your own practice and own server. It can only be set to one specific email address you have at your practice. It could be a specific individual's email for your practice that may get replies to emails being sent out, or it could be a group email you have within your practice (ex: helpdesk@mieweb.com) Changing the ‘from' email will affect emails generated from any module/feature in {{% system-name %}}. Examples are these email reminders and also emailing of documents from the inbound fax queue.

![](./email-reminders-from-system.assets/75546c1015015436623b6d96b5fc9afe.png)

## Email from the Scheduler/Appointments

An email link is also available in the scheduler views to send an email to multiple charts who have appointments scheduled for the day/view you are viewing. This is a user preference if Scheduler Preference *Show Email Link* is set to Yes.

![](./email-reminders-from-system.assets/2d5aedea55e6387d379f4d7bad8468a5.png)

When the Email link is selected, an Email Options window is opened on a new tab. This is where you can mass email appointment reminders, for example, to everyone scheduled for the day.

![](./email-reminders-from-system.assets/9be048e1709d7147e06f50e1b7ab71a5.png)

- <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to all patients.
- <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to all patients.
- <strong>Email Template:</strong> Select any pre-templated email verbiage/layouts that your system has set up related to appointments (APT). These are different email templates (related to appointment needs) that are different templates from the chart email method.
- <strong>Include Appt Invite (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
- <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
- <strong>Send Me RSVP:</strong> when emailing from the scheduler, the attached ICS (meeting request) has the option to request an RSVP. If the auto reply email setting is setup with something that has ‘noreply' in it, it will not request an RSVP.
- <strong>CC Supervisor: (carbon copy)</strong> You can carbon copy the patient's supervisor by checking the CC Supervisor box. The supervisor must have an existing "Supervisor User Relationship" to the employee on the demographics Contact/Relationships list to be carbon copied using this feature. NOTE: This checkbox only displays if system setting <em>Allow CC Emails</em> is enabled.
- <strong>Carbon Copy Email:</strong>
  - <strong>Email Template:</strong> MIE can set up different email layouts (information you want to send in mass). This is where you would select a specific email template to be sent to all the patients. Default will just show your subject & comments as typed above.
  - <strong>Users to email:</strong> NOTE: This autocomplete CC section only displays if system setting <em>Allow CC Emails</em> is enabled. You can type in the first or last name of a user within {{% system-name %}} & this email will be sent to the {{% system-name %}} user also. If the user does not have an email address entered in their {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
- <strong>Patients to Email:</strong> It will display the patients that have an email address entered into their demographics tab and be selected as a check-mark meaning this email will be sent to those patients that have valid email addresses entered in their demographics tab. You have to checkmark patients you wish to receive the mass email regarding appointments. Or you can use the check all or uncheck all links provided to quickly check-all to receive the email and uncheck-mark those you want to remove from the email reminder being sent. Only patients with email addresses entered in their demographics tab will appear in this list. If a patient doesn't appear on this scheduler email list, then they don't have an email address entered in their demographics tab.

See other help documentation named [Scheduler Views](../../scheduling/scheduler-views.md) for specifics on how to email from the scheduler views.

Also from the scheduler view you can send an individual patient email reminder on the specific appointment scheduled on the view.

![](./email-reminders-from-system.assets/17ab6396691dadcff135ff1f574c6474.png)

Email is also available in the Wizard tab to send an email reminder, etc for new appointments being scheduled. See other help documentation named [Adding An Appt Using Wizard Tab](../../scheduling/adding-an-appointment-using-the-wizard-tab.md) for specifics on how to email from the Wizard (adding appointment) screen.

![](./email-reminders-from-system.assets/08c5bda7a019da8b5b4eeb46a2e21d62.png)

Email is also available to send email reminders within the Waiting List tab of the scheduler. See other help documentation named [Waiting List Tab](../../scheduling/waiting-list-tab.md) for specifics on how to email from the Waiting List screen.

![](./email-reminders-from-system.assets/d56f641de276793ea2f7e74f21293f33.png)

Email is also available to send email reminders within the patient's Appointment Chart tab. In the patient's chart tab named *Appointments*, it lists the patient's appointments that are on a waiting list, the patient's past/pending appointments, the patient's cancelled appointments and the patient's No Show appointments. In the options column of this summary is a Send Email link. You can send an email reminder to the patient regarding that appointment.

![](./email-reminders-from-system.assets/009fc5fd0243083fe0107c255205c4cf.png)

{{% warning %}}
When sending emails, be careful not to type / include protected health info if sending via the internet and not intranet using this feature.
{{% /warning %}}

Some practices gather and enter a patient's email from the patient forms they fill out, others have the patient sign an email authorization form authorizing the practice to email the patient about appt reminders, etc. It depends on your practice and how you want to gather emails and/or authorizations.

### Email Templates Regarding Appointments

- <strong>Subject:</strong> Type in the subject. This will be in the same <em>subject</em> line of every email sent to all patients. This subject line is also a searchable field to find specific email documents using the Doc Reports tab. This cannot be edited after the email is sent and stored as a document in {{% system-name %}} .
- <strong>Comments:</strong> Type in any comments. This will be the same <em>comments</em> in every email sent to all patients.
- <strong>Email Template:</strong> Select any pre-templated email verbiage/layouts that your system has set up. The email template available from the email link for patients regarding their specific appointments is the email template of <em>Default</em>. This means the email template will include the subject, comments, and some pre-templated text information regarding the appointment. This includes the <strong>appointment date, appointment time, appointment location,</strong> doesn't have any other text in the email except what you will fill out for the Subject, and Comments. That is all that will send in an email to the patient.

The email template that you default to (the template that the drop-down is defaulted to) is a user's (MY SETTINGS) preference. You can select the default appointment email template/layout you wish to always default to.

![](./email-reminders-from-system.assets/ebcd27ec5b9602778c3684634ec9660b.png)

Your system is already set up with a default email template named Default regarding appointments (APT) when wanting to send an email (regarding an appointment) from the appointment or from appointment reports, etc.

![](./email-reminders-from-system.assets/81928c69d8464a71630c4315aa69878a.png)

Your MIE Deployment Consultant can remove the ‘Default' layout from this template selection list if you have other templates custom created for your practice. The Default template is meant to be used when no other layouts/templates are available. If all email correspondence is templated or other custom template choices appear here and the basic *Default* template is not needed and/or not wanted they can be removed via the system setting named "Offer Default Email Template". Set system setting to disabled to remove the *Default* email template choice from showing up.

![](./email-reminders-from-system.assets/413065497487d9c6e8516edafdc0dde4.png)

The email template of *Default* means the email (regarding an appointment) will only include the subject, comments, and some pre-templated text information regarding the appointment. This includes the **appointment date, appointment time, appointment location,** doesn't have any other text in the email except what you will fill out for the Subject, and Comments. That is all that will send in an email to the patient.

This is what a Default email template looks like when it sends to the patient:

![](./email-reminders-from-system.assets/95d789dc0fdd28a2ca0d2c248d0643fc.png)

MIE can program any other email layout (template) you wish that include pre-templated text in the email to be sent. Other customized email layouts (templates) can be programmed here as a choice in the drop-down. Please contact your MIE Deployment Consultant to have additional customized email templates added to your system.

### Additional Appointment Email Fields

Click the preview link to view a preview of the email contents that will be sent out.

![](./email-reminders-from-system.assets/c1d1bcb04a445bcec40e3eabe2b8a8c8.png)

- <strong>Include Appt Invite (.ics):</strong> This is basically a meeting request stored in Outlook. It can also be used in other calendar programs like Lotus and Google calendar. It copies this appointment into the patient's calendar program if they use such calendar programs.
- <strong>Make appt invite ‘Public':</strong> Uncheck-marked means the appointment goes on their calendar, but to anyone else that can access their calendar, the appointment is marked as <em>private</em>. If this is check-marked to make appt public, then it saves the appointment in the patient's calendar program (if they use such calendar programs) and they can see the appointment, and anyone else that can access their calendar will be able to see the appointment specifics.
- <strong>Send Me RSVP:</strong> when emailing from the scheduler, the attached ICS (meeting request) has the option to request an RSVP. If the auto reply email setting is set up with something that has ‘noreply' in it, it will not request an RSVP. It will otherwise.
- <strong>Don't Email Patient:</strong> that will leave the patient off the recipient list but still document it in their chart. This is a way to email a supervisor or  {{% system-name %}} user about an employee or patient but <strong>not</strong> have it go to the employee/patient's email inbox. They do want it to document it in the employee/patient's chart though.
- <strong>To Email:</strong> this will email it to the other  {{% system-name %}} users. This field is similar to the CC Email field except the user's end up on the "To" line in the email instead of the CC line. This is used in conjunction with the <em>Don't Email Patients</em> box.
- <strong>Carbon Copy Email:</strong>
  - <strong>Users to email:</strong> NOTE: This autocomplete CC area only displays if system setting <em>Allow CC Emails</em> is enabled. Can type in the first or last name of a user within  {{% system-name %}} & this email will be sent to the  {{% system-name %}} user also. It will auto-complete  {{% system-name %}} users for you to choose from. You cannot free type in an email address. It has to be selected from the auto-complete of users in your system. If the user does not have an email address entered in their  {{% system-name %}} username screen, their name will <em>not</em> show up here as an auto-complete choice to select.
  - <strong>Patients to Email:</strong> Automatically lists all patients in the specific screen/feature/module you are in when you clicked Email. You have to checkmark patients you wish to receive the mass email regarding appointments. Or you can use the check all or uncheck all links provided to quickly check-all to receive the email and uncheck-mark those you want to remove from the email reminder being sent. Only patients with email addresses entered in their demographics tab will appear in this list. If a patient doesn't appear on this scheduler email list, then they don't have an email address entered in their demographics tab.
- <strong>CC Supervisor: (carbon copy)</strong> You can carbon copy the patient's supervisor by checking the CC Supervisor box. The supervisor must have an existing "Supervisor User Relationship" to the employee on the demographics Contact/Relationships list to be carbon copied using this feature. NOTE: This checkbox only displays if system setting <em>Allow CC Emails</em> is enabled.

Click **Send Emails** button when those text fields are completed.

It will then show a confirmation message of the emails it sent out. If a patient does not have an email entered in their *demographics* tab field, it will not show anything on this *emailed* screen for that specific patient. That patient will not be displayed in this confirmation screen.

If the email address was not correct, the document would have been made, but the email would have failed to make it.  Even if the receiving email server rejected the address,  {{% system-name %}} wouldn't be notified about it.

### Email from Appointment Report

Email is also available to send to multiple charts (in mass) within the Appointment Report in the reports tab. See other help documentation named [Appointment Report](../../reports/appointment-report.md) for specifics on how to email from the Appointment Report screen.

![](./email-reminders-from-system.assets/f8196f6620e8c43542653ab0da4da722.png)

### Appointment Default Email Template

Your system is initially only programmed with the Default template (layout) to use regarding patient appointments. This is what the Default email template looks like when it comes to the patient.

![](./email-reminders-from-system.assets/a28edf38ba509ffc732e94bbbe1eb246.png)

The Default email template regarding patient appointments includes **when** the appointment is scheduled for (date & time of the appointment), **where** the appointment is scheduled for (location), and **provider** which is the resource/clinician the patient is scheduled to see. (The Default template can be removed if practice doesn't wish to use this default layout. See previous page 5.) The subject of the email appears and is what you free-text typed in that field. The comments also appear with the free-text that you typed in that field.

{{% note %}}
Currently we cannot pull the scheduled appointment location's phone number. We do pull location, but not its respective phone number.
{{% /note %}}

### From Address of System Email

The *From* email is set to be from the default of noreplywebchart@med-web.com Your MIE Deployment Consultant can change the system setting to reflect an email from your own practice and own server. It can only be set to one specific email address you have at your practice. It could be a specific individual's email for your practice that may get replies to emails being sent out, or it could be a group email you have within your practice (ex: helpdesk@mieweb.com)

![](./email-reminders-from-system.assets/d2249c5c9046bd1ed14717269f500337.png)

## Emails Store as Documents

Emails sent via any of the above methods are stored in the patient's chart as a document. The emails are typically stored as the doc.type EMAIL, but can also be configured to store each email type as its own document type. Please make sure there is a doc.type in your system named EMAIL. When emailing a patient, if a layout template other than default is used (and has been programmed by MIE) and that specific layout has a document type set on it, that document type will be used when archiving/storing the email to a document. Therefore, the document type it stores may be different from default doc.type EMAIL.

When emails are sent, they are stored as EMAIL documents in the patient's chart (unless you've specified a different doc.type in an email layout choice). The subject of the email is also stored as a searchable option from the Document Reports tab.

![](./email-reminders-from-system.assets/390bb747cb9d23c88b9c837755992215.png)

Most emails are stored as the EMAIL doc.type, unless you have had MIE program an email layout tagged to a different doc.type. You can map the EMAIL documents to show in the chart tab of your choice, but the default will show them in the patient's DocSum tab.

Emails are stored as documents (usually doc.type named Email) in the chart.Stored email documents can also be found using the Doc Report (Document Report). This Document Report is found in the Reports sidemenu tab. You can search for emails using that report. See other help documentation named [Documents Report-Super Doc Search](../../reports/documents-report-super-document-type-search.md).

Emails are also stored as their own storage type of Email. Meaning, emails are not stored as word documents, not as text documents, not as html formatted…they are stored as their own storage type of Email.

![](./email-reminders-from-system.assets/977dd627eb964a8ec1f3ccf3a004e60f.png)

Also using the Doc Report (Document Search Report) found in the Reports sidemenu tab, you can search for email documents that contain a specific subject wording in the email. To do this, make sure **Doc Type** is check-marked to Email, **Storage Type** is check-marked to Email, set your date range and other fields if you wish. Then in the **subject** field, type the *subject verbiage* you want to search for. This allows you to show results of emails that contain that specific verbiage in the subject line of the email. Then click the SEARCH button to render your results.

![](./email-reminders-from-system.assets/0334e866be6448b414eebaf446d37822.png)

The **Optional Columns** field give you a choice to display the Subject column in your report results or not. If you checkmark *Subject* in this Optional Columns field, when you SEARCH and render your results for the report, it will make a column for this. It shows the *Subject* as a column in your results.

![](./email-reminders-from-system.assets/8fb9f2e067339e0b9e8c0ecae715a1a0.png)

![](./email-reminders-from-system.assets/82e49d50af05eeaa549a4d86be0c7ac2.png)

Many automated scheduled email reminder jobs will omit sending emails to charts marked as _Exclude from Quality Care_.

![](./email-reminders-from-system.assets/5979140536dc139ce29bd1e198b02b0a.png)

## Additional Extended Email Address(es)

Need to send an email to more than one email address for the same person/chart (ex: to work and to their personal email)? Contact your Deployment Consultant if you'd like to capture more than one email address for a patient/employee chart. This could be manual email entry of an additional email address needing to be captured or an extra email field(s) that comes in via your PM or HR interface.

The main primary email address field for the chart continues to be housed at the top of the demographics information area.

![](./email-reminders-from-system.assets/39bf912915ccc946c619dd3efe4657ce.png)

However, MIE can add a patient extended field(s) in your system's _Demographics_ screen to capture, collect and display an additional email address(es) for a patient/employee chart.

![](./email-reminders-from-system.assets/f853cbfd7a0e415a9271f31861b1602e.png)

Sometimes a patient/employee may have a work email and a personal email (as an example). Thus, when sending email reminders or emails from {{% system-name %}} using the chart demographics, both emails will display for your selection on where to send that email to or not send it to.

### Where Additional Email Address(es) are Visible

If you have the Deployment Consultant configure a patient extended field(s) in the system's demographics section, it will display in the **Other Data** flowsheet portion of the chart's Demographics.

![](./email-reminders-from-system.assets/56d84611da7ef52110d79ff361f026dc.png)

Any patient extended email(s) collected will also display on the Summary dashboard chart tab in the Demographics **portlet** in the Other Data area. The main primary email address for the chart continues to display at the top of the demographics area.

![](./email-reminders-from-system.assets/05b718942eb687ebee396472e9782e11.png)

Any patient extended email(s) collected will display as an **Additional Recipient** when emailing a chart.

![](./email-reminders-from-system.assets/f7538e87911d07c616d5921de200b236.png)

Any patient extended email(s) collected will display as a **CC** email recipient in an appointment email.

![](./email-reminders-from-system.assets/a71d898f175ef9f10500195488acb7af.png)

History of the patient extended email field data is housed in the Observations chart tab of a chart. Limiting observation search by Flowsheet _Demographic Data_ will display history to that pev field configured in the Demographic Data flowsheet per chart.

![](./email-reminders-from-system.assets/62eadffd4bc8cc7d2c0decf354de32bb.png)

### Configuration Setup for Patient Extended Email Field

Deployment Consultant will set up an observation named pev.personalemail (or custom pev obs name needed) in your system. Template ID must be set to Patient Extended Data on the observation. Any additional unique named pev. email obs can additionally be added.

![](./email-reminders-from-system.assets/5863768c19782d1f8a0ec65304eb4fb3.png)

Deployment Consultant will set the pev observation(s) to be an item in the **Demographic Data** flowsheet. This will allow capture and collection of the separate email address needed on a patient/chart.

![](./email-reminders-from-system.assets/b432af5c5cc83e5e121a2c9fdea8ca61.png)

Deployment Consultant will set the new email obs name(s) to the system setting **Extended Patient Email Fields**. The prefix pev. is not to be included as the system setting value, just the remaining portion of the unique obs name.

![](./email-reminders-from-system.assets/fe77f114063ecacc4ada06208ef8bafe.png)

Deployment Consultant will enable the system setting **DB Triggers - Copy to Observations** for item **patient_extended_values**.

![](./email-reminders-from-system.assets/d6c113280c49bf12a599e8997de50f02.png)

After all of that is configured for the system, users (or interface feeds) can start capturing an additional email in a chart's demographics and be able to send to it.

NOTE: Scheduled jobs would need to be updated to include the new pev email observations if need to also include/send any automated scheduled email jobs to include the new pev email observation.

## Additional Resources

### Learning Management System

To learn more about the Email Reminders from System, follow the link below to the Learning Management System course:

- [Email Templates](https://mie.talentlms.com/shared/start/key:LAZIDNHR)

### Security Permissions, System Settings and My Settings Preferences

- <strong><em>Send Email to Patient </em></strong>'<strong><em>(An E-Chart Security Permission)</em></strong>'<strong><em>:</em></strong>' When set to Yes, users can generate and send emails from charts and appointments using the product's email feature. When set to No, users cannot generate or send emails from charts or appointments.
- <strong><em>Offer Comment Only Email Template</em></strong>'<strong><em> (system setting):</em></strong>' is enabled by default. Users will see the Comments Only option in the template dropdown, allowing them to compose an email from scratch without using a predefined template. When disabled, the Comments Only template option is hidden, so users can only choose from available standard or custom email template selections.
- <strong><em>Allow CC Emails</em></strong>'<strong><em> (system setting):</em></strong>'<em></em> is enabled by default. Carbon Copy (CC) options appear when sending emails. You can add users as CC recipients by selecting them from the auto-complete list (only users with an email on their user access will appear to select), and you can optionally CC a patient's supervisor if a supervisor relationship is recorded. If disabled, CC fields and options are hidden, and emails can only be sent to the primary recipient.
- <strong><em>Include Chart Types</em></strong>'<strong><em> (system setting):</em></strong>'<strong></strong> can be set to a specific chart type ID number value(s). The email auto-complete list can include configured chart types (set by your Deployment Consultant) in addition to system users, allowing emails to be sent to those chart-type recipients even if they are not set up as users. When no value is present for the system setting, the auto-complete list only shows users within your system who have an email address on file, and emails cannot be sent to chart types or external addresses.
- <strong><em>Offer Default Email Choice</em></strong>'<strong><em> (system setting):</em></strong>' Enabled allows the Default email template to appear as a selectable option when sending appointment/scheduler emails. This basic template includes only appointment details (date, time, location) plus whatever you enter for the subject and comments. When disabled, the Default template is hidden from the list when sending an email regarding an appointment, so users can only choose from your practice's custom email templates.
- <strong><em>Autoreply</em></strong>'<strong><em> (system setting):</em></strong>' When left as default, emails are sent from the system's standard no-reply address indicated. When a custom email address is entered, that address is used as the From sender for emails sent through the product, including messages from charts, inbound fax queue emails, and email reminders.
- <strong><em>Use Clinic Location For Email Service Location</em></strong>'<strong><em> (system setting):</em></strong>'<strong><em> </em></strong>'When enabled, emails sent from an encounter or appointment are stored documents with the service location set to that visit or appointment location. If no location is otherwise assigned, the patient's clinic location is used by default. When disabled, emails are stored documents without automatically assigning a service location from the encounter, appointment, or patient clinic location.
- <strong><em>Extended Patient Email Fields</em></strong>'<strong><em> (system setting):</em></strong>'<em></em> When blank, no extra patient email address fields are included. When a comma-separated list of patient extended value field names are entered, those fields are used to pull additional patient email addresses into the To field when sending emails from a chart.
- <strong><em>Show Email Link </em></strong>'<strong><em>(Scheduler My Settings Preference):</em></strong>'<em></em> When set to Yes, an Email link appears next to each patient's scheduled appointment views, allowing you to send an email to that individual patient directly regarding their scheduled appointment. When set to<strong> No,</strong> the Email link is hidden, and individual emails cannot be sent from appointment views.
- <strong><em>Default Appt Email Layout </em></strong>'<strong><em>(Scheduler My Settings Preference):</em></strong>'<strong><em> </em></strong>' Sets your default preference email template that is automatically prefilled in the Email Template dropdown when sending emails from the scheduler or appointment views. This selection will be your chosen template prefilled each time (you can still change it per email). If not set, no default template is preselected.
