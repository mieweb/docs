---
id: '1pN9DzGzqbdEeR5BRFtr7JltGc4UTtFel20pPFK_g6J0'
title: 'Enabled & Disabled Scheduled Jobs'
date: '2025-11-04T16:21:01.122Z'
version: 540
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1pN9DzGzqbdEeR5BRFtr7JltGc4UTtFel20pPFK_g6J0'
wikigdrive: 'v2.15.27'
---
The {{% system-name %}} solution allows for numerous scheduled jobs to be enabled. Out of the box there are many already enabled and available to be used. There are also available scheduled jobs that are disabled, by default.

To access the Scheduled Jobs, from the Sidemenu, click on the Control Panel, then Scheduled Jobs.

![](../enabled-and-disabled-scheduled-jobs.assets/fa33bcdef08df5ba3e427eaa29000811.png)

## Scheduled Jobs System Enable

The Deployment Consultant must configure the scheduled jobs functionality to be enabled for the system.  Otherwise you will be notified that scheduled jobs are not yet enabled system wide.

![](../enabled-and-disabled-scheduled-jobs.assets/223d984c14c51d4df109a3cb531dbb99.png)

## Enabled Individual Scheduled Jobs

The standard scheduled jobs are displayed upon initial entry to the Scheduled Job screen.

![](../enabled-and-disabled-scheduled-jobs.assets/b97c53813ace0bf6e49b478b6c86d09a.png)

### Health Surveillance Membership

This scheduled job runs to look for any eligible employees to be enrolled in a Health Surveillance Panel. The standard recurrence is once every day.

### Health Surveillance Panel Actions

This scheduled job runs and evaluates the eligible panel actions for the Health Surveillance Panels. The standard recurrence is once every day.

### Immunizations Past Due Email

This scheduled job emails employees notice they are past due for an injection that has a next_due date of yesterday. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "ImmunizationsPastDueDaysEmail". The parameters within this scheduled job that can be set are:

* Email Template - The default is "Pat Immunizations Past Due"
* Number of Days Past the Next Due Date - The default is 7 days

### Immunizations Due 30 Days

This scheduled job emails employees notice they are due for an injection that has a next_due date exactly 30 days out. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "ImmunizationsDue30DaysEmail".

### Nightly Checkout

This scheduled job will automatically check out all patients left as checked in from the previous day. The standard recurrence is once every day.

### Apt Spv Reminder 15 Days

This scheduled job emails supervisor notice if a pending waitlist appointment exists on their subordinate's chart for a Health Surveillance panel that hasn't been scheduled (and has a visible date of at least 15 days). The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized to generate this email notification is "Apt Spv Reminder 15 Days".

### Apt 30 Day Reminder

This scheduled job emails employees and cc's the supervisor notice at 30 days prior to pending waitlist appointment due to complete/schedule testing within 30 days to meet the medical requirements for their job. The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized to generate this email notification is "Apt 30 day reminder".

### Apt 60 Day Reminder

This scheduled job emails employees notice at 60 days prior to pending waitlist appointment due to complete/schedule testing within 60 days to meet the medical requirements for their job. The system report that is utilized to generate this email notification is "Apt 60 day reminder".

### Apt 7 Day Reminder

This scheduled job emails employees notice at 7 days prior to pending waitlist appointment due to complete/schedule testing within 7 days to meet the medical requirements for their job. The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized to generate this email notification is "Apt 7 day reminder".

### Apt Invite 45 Day

This scheduled job emails employees notice at 45 days prior to pending waitlist appointment due to complete/schedule testing within 45 days to meet the medical requirements for their job. The email will link to the portal for scheduling. The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized to generate this email notification is "Apt Invite 45 day".

### Pat Out of Compliance

This scheduled job emails employees notice after 2 full days overdue (past due date) on their health surveillance program. The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized to generate this email notification is "Pat Out of Compliance".

### Mark Non-Checked In Scheduled Appointments as No Show

This scheduled job will mark any non-checked in scheduled appointments as ‘No Shows' from yesterday. Scheduled job configured to run at 12:30 am to catch the previous day. The standard recurrence is once every day. The system report that is utilized is "ApptNoCheckinUpdateNoShow". The parameters within this scheduled job that can be set are:

* Day

### Appt Cancel When No Pending Due List Items Linked Anymore

This scheduled job will cancel the pending waitlist appointment that the health surveillance panel triggered when the action items (pending due list items) triggered if the due list items are not pending anymore. Example: The employee walked in to have services completed and never scheduled the health surveillance panel waitlist appointment. The process looks back 30 days and reviews the order's appointment type instead of the order being directly linked to the appointment. The standard recurrence is every 30 minutes. The system report that is utilized is "ApptCancelWhenNoProcedures".

### Planned Leave Evaluator

This scheduled job adjusts due dates for people who meet the criteria of planned leave rules. The standard recurrence is once every day.

### HSPInjCmpOrders

This scheduled job completes health surveillance pending injection due list orders based on CDC injection documented in the Mass Injection Program screen using the translation table mappings. The standard recurrence is every 1 minute. The system report that is utilized is "HSPInjCmpOrders".

### Order Status from Document

This scheduled job completes, waives, deletes, or declines orders based on document creation (document created within the past 24 hours). This report/job uses translation table mappings of order_status_doctype. The standard recurrence is every 1 minute. The system report that is utilized is "Order Status from Document".

### Esign Review

This scheduled job forwards 25% of documents to be e-signed by the supervisor. The standard recurrence is once a week occurring on a Friday. The system report that is utilized is "EsignReview". The parameters within this scheduled job that can be set are:

* Days - How many days in the past to look for eligible documents
* Provider ID - The User ID of the Provider to be reviewed
* Doc Type - Only consider the given doc type(s) eligible for review
* Comment - The comment to put on the esign request
* Priority - The signature priority - Default value is 5
* Supervisor ID - The User ID of the Supervisor to have requests forwarded to
* Percentage - The percentage of found documents to forward for review

### EmailRestrictions

This scheduled job emails employees and cc's the supervisor and backup supervisor notice of a list of an employee's restrictions. Ignores updates with "Exclude from notification email" checked off as well as updates that already had an email sent. The standard recurrence is every 15 minutes. The system report that is utilized to generate this email notification is "EmailRestrictions".

### Refresh patpatrelflat

This scheduled job refreshes values in pat_pat_relflat when they expire today. The standard recurrence is once every day.

### Applicant Auto Merge

This scheduled job automatically merges the Applicant (APP) temporary chart and the Medical Record Number (MR) permanent chart together if they have a 9 rating match. The standard recurrence is once every day.

### Close Open Questionnaires

This scheduled job closes open questionnaire encounters that are older than 6 months. The standard recurrence is once a week occurring on a Friday. The system report that is utilized is "Close Old Questionnaires".

### Flu Exemption Task Extended into Observation

This scheduled job will convert Task Extended Flu Review Determination Reasons (set on the Flu Determination Task when worked) into a stored observation named Influenza Vaccination Exemption Review with the specific exemption value noted. The standard recurrence is every 15 minutes. The system report that is utilized is "Flu Exemption Task to Obs".

### Phone Home - Licensing

This scheduled job sends a list of security roles and number of users in each security role to Medical Informatics Engineering. This job is used to ensure that clients are being billed for the appropriate number of software licenses.

## Disabled Individual Scheduled Jobs

To view the Disabled Scheduled jobs, select the *Show Disabled* option.

![](../enabled-and-disabled-scheduled-jobs.assets/4c6ad40cf80b3041b2ac019e5b380dd5.png)

### HSPDocCmpOrders

This scheduled job will complete orders based on document creation (uses translation table mappings). The standard recurrence is every 1 minute. The system report that is utilized is "HSPDocCmpOrders".

### HSPOrderDecOrder

This scheduled job will decline other orders when certain orders are completed. The standard recurrence is every 1 minute. The system report that is utilized is "HSPDocCmpOrders".

### Disable Inactive Users

This scheduled job marks any active user as a deleted current status if they haven't logged in for XX number of days. The system setting value within ‘Days Inactive' is respected for the XX number of days that this job will mark the users as ‘deleted' current status. The standard recurrence is once every day. Two system settings can be added and configured that will protect certain users or roles from being disabled by this job. The system settings are "System, Security, Protected Security Roles" and "System, Security, Protected Users".

### Restrictions Notifications

This scheduled job emails employees and cc's the supervisor and backup supervisor notice of a list of an employee's restrictions. Ignores updates with "Exclude from notification email" checked off as well as updates that already had an email sent. If all restrictions are marked as "Excluded", then no email is sent. The standard recurrence is every 15 minutes. The system report that is utilized to generate this email notification is "EmailRestrictions".

### COVID Orders Complete

This scheduled job completes the COVID injection orders after injection administration. The standard recurrence is every 5 minutes. The system report that is utilized is "COVID Orders Complete".

### Email 2nd COVID Vaccination Invitation

This scheduled job emails employees with new COVID Injection 2-Pfizer (COVIDINJP) and COVID Injection 2-Moderna (COVIDINJM) waitlist appointments an invite to schedule for their second COVID vaccine appointment on the portal. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Email 2nd COVID Vaccination Invitation".

### Email 2nd COVID Vaccination Reminder

This scheduled job emails employees a reminder to schedule a COVID Injection 2-Pfizer (COVIDINJP) or COVID Injection 2-Moderna (COVIDINJM) appointment 3 and 10 days after the vaccination invite is sent, if the waitlist appointment still exists. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Email 2nd COVID Vaccination Reminder". The parameters within this scheduled job that can be set are:

* Current Date

### Email COVID Vaccination Invitation

This scheduled job emails employees with a new COVID Injection (COVIDINJ) waitlist appointment an invite to schedule for a COVID vaccine appointment on the portal. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Email COVID Vaccination Invitation".

### Email COVID Vaccination Reminder

This scheduled job emails employees a reminder to schedule a COVID Injection (COVIDINJ) appointment 3 and 10 days after vaccination invite, if the waitlist appointment still exists. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Email COVID Vaccination Reminder". The parameters within this scheduled job that can be set are:

* Current Date

### Email Post COVID Vaccine Education

This scheduled job emails employees vaccine education one hour after they receive their COVID injection. The standard recurrence is every 15 minutes. The system report that is utilized to generate this email notification is "Email Post COVID Vaccine Education". The parameters within this scheduled job that can be set are:

* Current Time

### COVID-19 Complete Panel

This scheduled job completes the COVID Vaccine Compliance order based on the injection records. The standard recurrence is every 15 minutes. The system report that is utilized is "COVID-19 Complete Panel".

### COVID19 Vaccine Exemption Determination

This scheduled job auto-waives COVID-19 injection orders and compliance orders based on an approved COVID-19 exemption task. The standard recurrence is once every hour. The system report that is utilized is "COVID19 Exemption Orders".

### COVID19 Vaccine Exemption Email

This scheduled job sends an approved or denied email based on the determination of the COVID-19 Vaccine Exemption Task. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "COVID19 Vaccine Exemption".

### Complete COVID19 Compliance Order-Uploaded Proof from Employee

This scheduled job completes compliance orders for employees that have submitted proof of the COVID vaccination series and it has been reviewed and accepted by a COVID-19 Program Reviewer. The standard recurrence is once every hour. The system report that is utilized is "Complete COVID19 Compliance Orders w Documentation".

### Waive COVID19 Compliance Order

This scheduled job waives compliance orders for employees with an approved exemption by a COVID-19 Program Reviewer. The standard recurrence is once every hour. The system report that is utilized is "Waive COVID19 Compliance Order".

### Scheduled Appt Reminder-3 Days Prior to Appt

This scheduled job emails employees a reminder (ScheduledApptReminder) 3 days prior to any scheduled appointment. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "ScheduledApptReminder". The parameters within this scheduled job that can be set are:

* Email Template - The default is "ScheduledApptReminder"
* Number of Business Days Before Appointment to Email Reminder - The default is 3 days

### Portal Message Notification Email

This scheduled job emails employees there is something available for them to see/do on the portal. The following items are examples of items that the employee could be notified about:

* Waitlist appointments to schedule
* Questionnaires to fill out
* Documents to view

The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Portal Message Notification Email". The parameters within this scheduled job that can be set are:

* mmi_charttab_ext_id

### COVID Testing Panel Enrollment Notification

This scheduled job emails employees notification of enrollment in the COVID Testing Panel. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "COVID Testing Panel Enrollment Notification".

### TB Panel Updates

This scheduled job explicitly adds patients to the TB Sensitive Panel (TBSEN) if the observation "Should the employee be enrolled in the TB Sensitive (Annual Symptom Screening for HCP with untreated LTBI) panel?" is currently set to "Yes". Will also remove the patient from TB Surveillance Panel (TBSURV) if previously enrolled. The standard recurrence is once every day during the standard work week (Monday through Friday). The system report that is utilized is "TB Panel Updates".

### SS Provider Updates

This scheduled job gets a local copy of providers from the SureScripts directory. The standard recurrence is once every day.

### Email Monkeypox Risk Assessment Reminder

This scheduled job emails members of the Monkeypox Exposure Panel a reminder twice a day to take their survey. The standard recurrence is every 12 hours. The system report that is utilized to generate this email notification is "Monkey Pox Email Notification".

### Flu Exemption Approved - Pending Flu Injection Order Waived

This scheduled job waives an existing pending Influenza Vaccine injection order item if a Flu Declination task was completed today and the Determination Reason was documented as Approved (Task Extended Variable).  The standard recurrence is once every day. The system report that is utilized is "Flu Exemption Orders".

### Flu Program Email - Last Day for Compliance

This scheduled job emails employees who are a member of the Flu Program panel and still have a pending Flu Injection on their due list with a due date of 1 day or less. Email notifies them that it is the last day for them to receive their flu vaccine. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Flu Last Day of Compliance Email".

### Flu Program Email - Deadline Approaching

This scheduled job emails employees 14 days prior to the due date of any pending order ID 2641 Influenza Injection (which is the Representative Event of the Flu Panel Health Surveillance Panel) on their due list. The standard recurrence is once every day. The system report that is utilized to generate this email notification is "HS Flu Program Deadline Approaching".

### Flu Program Email - Enrollment

This scheduled job emails employees if they are a member of the Flu Program Health Surveillance Panel and the Health Surveillance Flu Program Panel items/components/action items triggered on their due list. Meaning, order ID 2641 Influenza Injection (which is the Representative Event on the Flu Health Surveillance Panel) was just triggered onto their due list as pending. The standard recurrence is once every year. The system report that is utilized to generate this email notification is "HS Flu Program Enrollment".

### Flu Program Email - Exemption Approval or Denial Email

This scheduled job emails employees explaining their flu vaccine exemption request was approved or denied (from completed worked Flu Vaccine Declination Task). The standard recurrence is once every day. The system report that is utilized to generate this email notification is "Flu Exemption".

### Update LabCorp Compendium

This scheduled job synchronizes order_lists, order_questions, and order_question_index with the Labcorp compendium. The standard recurrence is once a week occurring on a Sunday.

### Active Standing Order

This scheduled job will find all active standing orders and creates a new requisition based on the order frequency and occurrence. The standard recurrence is once every day. The system report that is utilized is "ActiveStandingOrders".

### Auto Generation of Case (Step 1 of 2)

This scheduled job automatically generates a case when an injury report is created on the portal. This is step 1 of a 2 step process. The standard recurrence is every 5 minutes. The system report that is utilized is "AddCasePerform". The parameters within this scheduled job that can be set are:

* last_id

### Auto Generation of Case (Step 2 of 2)

This scheduled job adds a case number to the incidents reported from the portal. This is step 2 of a 2 step process. The standard recurrence is every 5 minutes. The system report that is utilized is "AddCasePerform_Verify".

### cgi_datasend

This scheduled job is used for auto fax routes previously held by datasend. This scheduled job can also be used to automatically print routes to network printers. This job should be enabled instead of datasend if the client only needs auto routed faxing. When this job is turned on, enable print and enable fax settings should be turned on.

### Generate Pickup Activation Codes

Generates a portal activation/pickup code if the patient chart has an employer relationship to a portal that is set up to utilize activation code redemption and the patient chart doesn't fit into the system's emailexclusion (separate system report) criteria.

### Send Pickup Activation Code Email

Sends an instruction email with the portal activation/pickup code to patient charts in a PICKUP partition that have had an activation/pickup code generated and haven't received an instruction email yet.

* Email Template - The default is "Portal Activation Code Instructions Default"
* Looking if doc.type PORTACTINS exists already for the generated code

### Vaccination Post Declination Update System Report

A *Vaccination Post Declination Update* system report is available to be configured as a scheduled job.  This system (when executed) looks for charts that declined the flu injection, but then end up becoming vaccinated within the same season (8/1-4/30).  This report (when executed) will find charts that declined the flu injection item (with auto-declined status), yet now also have a flu injection administered (of specific CVX codes) in the same season.  If any matching charts are found, the executed report will populate a completed flu injection order item with comment *Previous Declination to Vaccination* so charts show up appropriately on reports.

![](../enabled-and-disabled-scheduled-jobs.assets/6d32717b1d6dbd02cc406deeec88e9df.png)

NOTE: If any systems wish to have this (that are not on 2025-09 or newer yet), can simply request their deployment consultant to import the system report JSON file and set up the scheduled job.

## Max Records

Any active scheduled job with a specific number in the *Max Records* field of the scheduled job, will terminate the scheduled job once/if the max number of records is hit during that scheduled job.  The *Max Records* field sets a threshold for the number of records processed before requiring approval to continue to execute the scheduled job. The execution of the scheduled job is blocked when the max records count exceeds the row count the scheduled job finds to execute on. Set the Max Records field to zero 0 for no limit.

Using *Max Records* functionality may be helpful for email scheduled jobs.  Where a system admin wants to receive a warning and approve all scheduled jobs that will be triggered if the number of email recipients exceeds a specified threshold (X) max records.  This would ensure proper oversight of communications and prevent unauthorized or accidental dissemination of information.

![](../enabled-and-disabled-scheduled-jobs.assets/354ea872cda624c6cdad292d047b3ef1.png)

### Max Records Exceeds Notification

The notification of the blocked scheduled job(s) being executed will be sent to the email address that is configured in the system setting *System / Cron / Email Failures To*.

![](../enabled-and-disabled-scheduled-jobs.assets/97a2a506c55890894ac7a46493061f6f.png)

### Max Records Exceeds Approval Process

The "approval" process refers to stopping the execution of scheduled jobs that exceed the configured max records value threshold.  The email notification is sent to the designated administrator (the email set in the system setting "Email Failures To") explaining that the job was stopped due to exceeding the allowed recipient count.

A system admin can then manually run the associated system report, review and decide whether to proceed with performing it (Perform All button). This manual execution serves as the approval step.  The other method is to simply remove the Max Records value from the scheduled job itself and manually execute the scheduled job to run, and after it has run entirely, the system admin can place back the Max Records value to take effect in the next run.

![](../enabled-and-disabled-scheduled-jobs.assets/017ed371f2938e1268b0f3b50904e21c.png)

## Status

The Status column will show a colored status circle.

* Green status circle means the scheduled job has run successfully routinely as the recurrence is set to.
* Orange status circle means the scheduled job has run, but some runs have been unsuccessful as the recurrence is set to.
* Grey status circle means the scheduled job has not run as of yet.
* Red status circle means the scheduled job has errored out during every run as the recurrence is set to.

![](../enabled-and-disabled-scheduled-jobs.assets/286a3ac2b49c16b9ebe9efa434d9bdb5.png)

### Scheduled Job Failures Notification

There is a system setting that can be configured with an email(s) of who should receive email notifications of a scheduled job failure.  The system setting is *Email Failures To*.

![](../enabled-and-disabled-scheduled-jobs.assets/d9baa71c9a52efaa549ece475ba636e1.png)

This is an email notification example that could be received:

![](../enabled-and-disabled-scheduled-jobs.assets/f8c8d7a5e2ec3421ba1f25d9c337e8d9.png)

Another system setting related to scheduled job failures is *Error Emails From*.  By default the email will be ‘from address' scheduledjobs@med-web.com, but this can be changed to be any email ‘from' address.

![](../enabled-and-disabled-scheduled-jobs.assets/c54a91c950570f9b75c3f2513ae9980a.png)

### Status History

Clicking on a colored status circle for the specific scheduled job row, will display a Job History for the past 7 days of that scheduled job's runs.

The Job History lists the specific scheduled job name, and the date/time the scheduled job has run (according to recurrence it's set to), the total duration of how long the scheduled job took (in seconds) and another colored status circle within each listed run, to see which runs the scheduled job may have run successfully, or failed, etc.

![](../enabled-and-disabled-scheduled-jobs.assets/5f6113ec3db119ef62e846b60b0c5723.png)

![](../enabled-and-disabled-scheduled-jobs.assets/19876ab46331bd694894c1a49d156f34.png)

## Revision History of Scheduled Job Configuration

Within the listing of scheduled jobs (whether active or inactive), is an option to view Revisions.

![](../enabled-and-disabled-scheduled-jobs.assets/d2fa8904a8ac537d2f182b3870ccacd6.png)

When looking at the Revisions of a scheduled job (in a pop-up window), each revision is listed with whom (user) made a change to the scheduled job, including a date/time stamp of that revision, and which field(s) were revised, and the field(s) revised show what the value or data was entered in by that user during the revision that was saved.  Revisions gives a chronological history of any revisions to the scheduled job that was selected to view.  Newest revisions would be at the bottom of the pop-up window and oldest revisions at the top.

![](../enabled-and-disabled-scheduled-jobs.assets/5f58ad399f24b0c4d15f6e5c6799dc2d.png)

**Recurrence Mapping**

When you set up a scheduled job, you pick a recurrence type (how often it repeats) and, depending on the type, a recurrence number (which days/months/etc. it runs).

A revision to the ‘recurrence' field of a scheduled job will display a value or calculation that may not be intuitive.  The revision value shows the raw numeric codes (e.g., 258, 32, 0 etc), and currently we are unable to convert these into clear descriptive text (e.g., specific months or weekdays).   Therefore, this is the mapping to decipher that revision's value when looking at revision history that may involve a Recurrence revision:

![](../enabled-and-disabled-scheduled-jobs.assets/a7f10060c0366d800ca2ba27a6b823e1.png)

**Recurrence Type**

* 0 = No Recurrence → Runs once at the start time.
* 1 = Minutely → Runs every 1, 5, 10, 15, 20, 30, or 45 minutes.
* 2 = Hourly → Runs every 1, 2, 3, 4, 5, 6, 7, 8, or 12 hours.
* 3 = Daily → Runs once every day at the chosen time.
* 4 = Weekly → Runs on the specific days of the week you select.

**Weekly Recurrence (Type 4)**

Each day of the week has its own number:

* Sunday = 1
* Monday = 2
* Tuesday = 4
* Wednesday = 8
* Thursday = 16
* Friday = 32
* Saturday = 64

If you check multiple days, the system adds them up:

All week (Sun–Sat) = 127  
Weekdays (Mon–Fri) = 62  
Weekends (Sat+Sun) = 65

**Example:** Mon + Wed + Fri = 2 + 8 + 32 = 42

* 5 = Monthly → Runs in the specific months you select.

**Monthly Recurrence (Type 5)**

Each month has its own number:

* January = 1
* February = 2
* March = 4
* April = 8
* May = 16
* June = 32
* July = 64
* August = 128
* September = 256
* October = 512
* November = 1024
* December = 2048

If you check multiple months, the system adds them up:

All months = 4095  
Q1 (Jan–Mar) = 7  
Even months only = 2730

**Example:** Feb + Sept = 2 + 256 = 258

* 6 = Yearly → Runs once a year on the chosen date.
