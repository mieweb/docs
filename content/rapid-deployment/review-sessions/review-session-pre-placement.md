---
id: '1G7nXT2GQh4EzhD66pnuBUwBBP2WOPaq0JX_M1SgyViA'
title: 'Review Session - Pre-placement'
date: '2024-02-28T16:51:28.697Z'
version: 701
lastAuthor: 'sberry'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:LGSIDNHR'
  - 'https://drive.google.com/open?id=1kdoY2-_e0I-ST4fa9LVuAdTRmAZ9nByq8vs3JFb5w4s'
  - '../../functions/portal-management/patient-portal-first-time-setup-and-configuration.md'
  - '../../functions/portal-management/linking-users-for-portal-access.md'
  - '../../functions/portal-management/employer-portal-setup.md'
  - '../../functions/portal-management/employer-employee-second-portal-setup.md'
  - 'https://employee-mie.talentlms.com/catalog/info/id:165'
  - 'https://employee-mie.talentlms.com/catalog/info/id:436'
  - 'https://docs.enterprisehealth.com/videos-and-demonstrations.html'
  - 'https://docs.enterprisehealth.com'
source: 'https://drive.google.com/open?id=1G7nXT2GQh4EzhD66pnuBUwBBP2WOPaq0JX_M1SgyViA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Pre-requisites</strong>
* <strong>Watch LMS Course</strong>
* <strong>Overview</strong>
* <strong>Pre-placement Workflow Demonstration</strong>
    * <strong>Talent Team Communication</strong>
    * <strong>Applicant Portal</strong>
    * <strong>Scheduling</strong>
    * <strong>Check-in</strong>
    * <strong>Pre-placement Exam - Intake</strong>
    * <strong>Pre-placement Exam - Provider</strong>
    * <strong>Check-out</strong>
    * <strong>HR Notification of Pre-placement Medical Clearance</strong>
    * <strong>Chart Merge (Applicant Chart->Employee Chart)</strong>
* <strong>System Configuration</strong>
    * <strong>Portal Setup</strong>
    * <strong>Applicant Portal</strong>
    * <strong>System Configuration and Setup</strong>
    * <strong>System Settings</strong>
* <strong>Related Reports</strong>
* <strong>Key Decision Points</strong>
* <strong>Action Items/Timelines</strong>
* <strong>Resources</strong>
    * <strong>Product Documentation</strong>
    * <strong>LMS Courses/Videos</strong>

## Pre-requisites

Watch the following LMS course: Pre-employment Management w/Applicant Portal (33 min): https://mie.talentlms.com/shared/start/key:LGSIDNHR (This link will not require a login if clicked from a PDF version of this agenda)

## Overview

As a means to streamline applicant engagement and tracking, as well as offer easy access to request an appointment, complete questionnaires, upload immunization and medical history information, complete consent forms, and upload documentation, {{% system-name %}} offers its certified applicant portal. The {{% system-name %}} web-based applicant portal is available 24/7 and provides secure access for candidates to use when and where it is most convenient for them. The applicant portal is designed to prompt engagement with user-friendly, intuitive pre-placement questionnaires, with responses being captured electronically, automatically populating the appropriate fields and documents within the clinical application, thus minimizing data entry and management for clinic staff. Applicant records may be automatically purged from the system after a predetermined amount of time if they are not hired. Additionally, the supervisor portal provides an HR and manager dashboard to view applicant work status reports, which include employee surveillance status and restrictions/accommodations. The time savings is significant – no more endless phone calls to collect information or to schedule appointments.

The words Pre-Placement, Candidate, or Applicant are used interchangeably. New hires may be manually registered into a separate applicant (APP) medical record partition either on the clinical side or using an applicant portal. The pre-placement health surveillance panel tracks appropriate testing that is required based on the job role. If the employee is hired their temporary applicant medical record may be merged to their permanent medical record automatically using a scheduled job or manually using the document queue merge tool. Custom configuration is required to add electronic pre-placement questionnaires, health surveillance panels, email templates, and automated business rules.

Standard functionality for the pre-placement workflow includes

    * Client-specific branding with logo
    * Applicant portal
    * Applicant (APP) partition
    * Pre-placement questionnaire
    * Appointment scheduling requests/tasking
    * Real-time portal appointment scheduling using pick-up codes
    * Appointment invitation, confirmation, and reminder emails
    * Pre-placement visit encounter
    * Quick View Pre-placement worklist
    * Health surveillance pre-placement panel
    * Document queue tool available for the customer to merge duplicate records
    * Purge editor is available for customer use to purge documents for applicants that aren't hired after a predetermined time

## [Pre-placement Workflow Demonstration](https://drive.google.com/open?id=1kdoY2-_e0I-ST4fa9LVuAdTRmAZ9nByq8vs3JFb5w4s)

#### Talent Team Communication

HR will embed the applicant portal URL into their email communications to the applicant and instruct the applicant as to which questionnaires need to be submitted by the specific applicant. Applicants who need the ability to do real-time appointment scheduling on the applicant portal will be sent an email containing a pick-up code to create an account.

#### Applicant Portal

Applicants will visit the applicant portal to key in demographic information selected by the customer which may include name, DOB,  SSN, email, or mobile phone number to register themselves as a new applicant in the system. The applicant will proceed to fill out the specific questionnaire(s), consent, medical history, and/or upload documentation that HR indicated in their communications. When the applicant submits questionnaires via the applicant portal, an applicant partitioned chart is created. The applicant may also print their submitted/completed questionnaires from their portal session. Automated task notifications may be triggered to clinical staff when new applicants register or after questionnaires have been completed on the applicant portal.

#### Scheduling

Applicant contacts clinic to schedule pre placement exam appointment. There may be an instance where an applicant does not visit the applicant portal prior to calling to make their appointment.  You can direct them to follow the directions to visit the applicant portal first and then call back to schedule the appointment.  If they refuse, you can manually create the chart in Enterprise Health. First search by name to make sure a chart doesn't already exist for the individual.  If a chart doesn't exist, the staff member can manually create the applicant chart.

The pre-placement health surveillance panel (without membership) may be triggered from the Due List in the applicant's chart. Once orders from the panel populate the Due List any additional orders may be added. A pending waitlist appointment may be scheduled manually by going to the Appointments portlet from the Summary dashboard tab of the chart. A pending waitlist appointment is automatically added when orders are evaluated on the due list using a pre-placement health surveillance panel. Click on the Appointment needs scheduled hyperlink on the pending waitlist appointment to schedule a date/time for the visit. An appointment confirmation email may be sent to the employee at the time of scheduling and appointment reminders are automatically generated a few business days prior to the appointment. Scheduled jobs may be used to automate email notifications

#### Check-in

The applicant will bring copies of all questionnaires and paperwork completed on the portal to the appointment. Front desk staff will mark the appointment as checked in and scan pre-placement documents into the system if needed. A pre-placement encounter is automatically initiated when the employee checkin in and the system tracks the amount of time sprint in the clinic for this visit. A pre-placement encounter may also be created manually for walk-in visits.

#### Pre-placement Exam - Intake

The nurse or MA will open the pre-placement encounter exam and complete the appropriate sections of the encounter, including:

1. Subjective
    * <strong>Encounter Information -</strong> Displays the basic employee information that is associated with the current encounter being worked in.
        * Make sure the <em>Provider</em> is the name and location of the correct final provider whose signature will be on the document as performing provider.
    * <strong>Chief Complaint -</strong> Add/update Chief Complaint (this will pre-populate from the scheduler if checked in for a scheduled appointment).
    * <strong>Case -</strong> Create a Medical Surveillance case (if the pre-placement visit is going to be split into Part 1 and Part 2).  If this is the Part 2 appointment, <strong>link</strong> the exam encounter to the Medical Surveillance case that exists for the applicant.
    * <strong>Past medical history; Past Procedures</strong> - Confirm/update any past medical history for the applicant as appropriate.
    * <strong>Presenting medication -</strong> Entry of the applicant's list of medications that they are currently taking at the time of the visit. Confirm/update presenting medications.
    * <strong>Allergies / Intolerances -</strong> Confirm/update presenting allergies/Intolerances and family history as appropriate.
    * <strong>Injections / Immunizations</strong> – Past/historical injections or immunization history collected.
    * <strong>Social History -</strong> As appropriate.
    * <strong>Linked Documents -</strong> Displays a list of documents linked to this encounter.
2. Objective
    * <strong>Tests & procedures</strong> - User to select predefined order items to perform them in-house. This section also contains the Due List which will help to define what services an employee may be due for at today's visit.
    * Review the list of items on the applicant's Due List. Check off any that you would like to perform at today's visit. You can also use this section to delete/decline any of the orders as well.
        * Complete - check mark and "Set Completed" any items already completed, and enter a "completed date" ex: questionnaires the applicant submitted via the applicant portal
        * <strong>Audiogram -</strong> Make sure to mark the audiogram performed for the pre-placement visit as the <strong>baseline</strong> on the audiogram test here in the encounter.
3. Plan
    * <strong>Generating Referral/Requisition Orders:</strong> Checkmark the ‘like' items listed on the due list (ex: Lab Work) that needs to be performed with an outside vendor, then click the <em>Make Order</em> button to generate that order requisition. <em>Note: make sure to Make Orders based on type, meaning you would not checkmark a Chest X-ray item to be in the same order as lab work that is going to a lab vendor to have performed.</em>

#### Pre-placement Exam - Provider

The provider will open the pre-placement encounter exam, review information that the clinician has already provided during intake, and complete the appropriate sections of the encounter, including

1. Subjective
    * Reviews all <strong>Past Medical History</strong> and<strong> Linked Documents</strong>
2. Objective
    * <strong>Vitals</strong> - Review employee's vitals.
    * <strong>Tests & Procedures:</strong> Checkmark the items you will be performing yourself during today's visit, then click <em>Add to Exam</em> button. (ex: Medical Exam / Physical Exam due list item that is due for surveillance)
3. Plan
    * <strong>Restriction/Accommodations</strong>
        * Enter any applicable restrictions and/or accommodations
    * <strong>Recommendations -</strong> Generates a work status report
        * This section contains a link to add the Written Opinion-Pre-Placement to the encounter.  You will use this section to document a written opinion to signify if they are fit, not fit, fit with restrictions, etc.
        * In the Comments field, be sure to type in any add-on programs they were also cleared for, etc even though doing a separate written opinion for those programs.
        * The Next Due Date field remains <strong>blank</strong> since a Pre-Placement (and any add-on program testing) is not routine testing that needs done as they have not been officially hired and not put into membership surveillance programs at this time.

#### Check-out

Complete the visit by scheduling any follow-up appointments, and checking out the applicant. If the appointment requires a second visit the pre-placement encounter may be kept open on the pre-placement worklist until all testing has been completed.

From the Quick View sidemenu tab, a portlet is available named **Pre-Placement Exam Worklist**.  This lists any Pre-Placement Exam encounters that are still **open** status (not archived & closed) and what *Stage* they are in (if applicable due to drug screen results still pending before a written opinion-Pre-Placement can be completed).

Use this worklist to manage and follow up getting the Pre-Placement Exam encounters to archived & closed status after the Written Opinion-Pre-Placement has been completed.

#### HR Notification of Pre-placement Medical Clearance

Once a Written Opinion - Pre-placement has been completed in the recommendations encounter section and the encounter has been closed & archived, the Written Opinion-Pre Placement document will be automatically emailed (hourly) to the HR Team. The HR team will view the final clearance determination of the pre hire to send out any further appropriate notifications needed.

#### Chart Merge (Applicant Chart->Employee Chart)


The Document Queue may be used to merge charts on-demand in between custom-tailored Auto Merge scheduled job runs. The 'Delete' link in Doc Queue may be used for non-hired applicants. The 'Q-Merge' link in Doc Queue may be used for hired applicants. An automated scheduled job runs nightly to auto-merge temporary flagged applicant/pre-placement partition charts to incoming permanent HR employee charts (when/if hired) based on first name, last name, & DOB. Each day, the doc queue automatch will run between the Applicant/Pre-placement and Employee/ID partitions to merge any applicants that have become employees. This relies on the match rating logic which takes into account how many matches are found and the name, DOB, & SSN. If the applicant's Name or DOB doesn't match the HR feed, the match rating will be less than 9 and not auto-merge. These scenarios of results with less than a 9 rating would require a manual merge. The benefit is that the demographics are not overwritten in this case. The merging of demographics is left to the end-user.

## System Configuration

To more fully address preferred configurations and review available options and features, utilize the Employer Organization tab under the Control Panel to access and edit the applicant portal. These configurations will be visible from the respective portal when accessed. To begin the initial setup and finalize the configuration of the portal, there is additional information that is important to understand before getting started. The Deployment Consultant will ensure the portal configurations are suited to the business needs in the following areas:

    * <strong>Applicant partition</strong>
    * <strong>Applicant portal setup</strong>
    * <strong>Task rule and department setup</strong>
    * <strong>Consent and questionnaire flowsheets</strong>
    * <strong>Schedule job - auto-merging applicant chart to employee chart</strong>

### Portal Setup

When configuring the web-based applicant portal for the first time, it is best to navigate to the Portal Setup tab of the Portal Employer Organization. This tab contains options for first-time setup and some standard configurations. These options are designed to allow portals to be preliminarily customized and accessed according to the business needs.

To begin using the **First Time Setup**, click the section header to expand and display the options. Once opened, security roles may be selected to indicate which roles have access to the portal.

{{% info %}}
By default, any {{% system-name %}} user with the necessary user-patient relationships established can access the portal. This means that as long as the user-patient relationship is set correctly, the portal will be enabled for all security roles.
{{% /info %}}

![](../review-session-pre-placement.assets/32b701192f2cfae38545b9644e67639a.png)

The **Portal** section includes options to make label and verbiage changes, to update the logo, to disable either the employee or supervisor portal, and to add a consent form that would need to be electronically signed before being granted access to the portal.

Some of the options needing to be customized or addressed include

* <strong>Replacement text for Enterprise Health</strong>: This field is used to replace the <em>Enterprise Health</em> label with the provided text. The replacement text should be the business name.
* <strong>Logo - Upload new logo</strong>: Click the <em>Upload new logo</em> link to replace the default logo. The page will refresh after confirming the image selection.
* <strong>Consent forms needing to be completed</strong>: Click the <em>Add consent forms</em> link to add forms. This will determine which consent form(s) a user will be required to complete before being granted portal access. Users will not have portal access until all required forms are completed.

{{% info %}}
An order for the consent must be added to the Portal Consent picklist, with an associated questionnaire flowsheet linked to the order for the verbiage.
{{% /info %}}

* <strong>Renewal interval</strong>: This determines the interval at which consent forms need to be completed. If no interval is provided, each form will only be required once. Setting the renewal interval to the shortest requirement is recommended.

All other options are part of the standard configuration and are enabled by default. No additional changes are required in this section, unless more customizations are needed to suit the business needs. In these cases, users are welcome to review the [Patient Portal](../../functions/portal-management/patient-portal-first-time-setup-and-configuration.md) online help documentation, for further details.

### Applicant Portal

The applicant portal is a web-based platform available for screening new employees and streamlining the hiring process. The applicant portal is an optional module designed as a login terminal for increased usability. With it, employers have the ability to simplify the onboarding process and ensure all pre-employment needs are addressed early and accurately. This portal is configured so that candidates can be directed to the portal to complete forms and/or questionnaires, according to the hiring and pre-employment needs of the business. Candidates simply need to begin the portal session by entering their first and last name. Once the applicant has completed the forms/questionnaires, all of the information is submitted to the employer electronically. From here, a login-disabled user account will be drafted and linked to the pre-configured Applicant department, so if hired, the information can be easily merged into the employee user account.

![](../review-session-pre-placement.assets/f9b755fa438b719330f844cf4a1ddea0.png)

### System Configuration and Setup

Be sure to speak with a Deployment Consultant if there is interest in maintaining an applicant portal, so any preferred configurations can be fully addressed and all available options and features can be reviewed. Once the portal has been configured, the URL will be made available for marketing purposes. From the Employer Organization tab, permitted users will have the ability to edit the title, color scheme, available questionnaires, and instructions. These configurations will then be visible within the portal accessed by the candidates.

**Questionnaire(s) for Applicants**: Clients will determine what types of information and the number of forms/questionnaires applicants will be expected to complete. Discussions with the Deployment Consultant will help establish the necessary configurations and workflow (e.g., link necessary questionnaire(s) to corresponding order items; indicate what document type each questionnaire will be saved as; confirm the preferred chart tab to which each document type will be mapped).

**Questionnaire(s) Data Fields**: Additional discussions will be needed to determine what specific information is necessary from each questionnaire being presented to applicants, as well as in what way the information will be recorded. The Deployment Consultant will assist with configuring observations and observation flowsheets to align with the appropriate free text data fields and pre-templated options needed on each questionnaire.

**Order Picklist**: Any questionnaires being used for the applicant portal must fall within an order picklist. Work with the Deployment Consultant to ensure an Applicant Portal order picklist is configured, listing each questionnaire needed for an Employer Organization (EO) applicant portal.

**Applicant Portal EO Chart Tab**: Customizations to the applicant portal can be done through the Applicant Portal chart tab of the EO, as needed. It is through the Applicant Portal chart tab that users with the necessary permissions may configure the portal components. The portal URL suffix will be provided from this tab, which will be appended to the production database base URL and distributed for use.

**Tasking**: It is important to discuss and determine any tasklist events needing to be triggered whenever applicants register and submit information via the applicant portal. Additional departments may need to be created for tasking notifications.

**Merging**: Once an applicant is hired, it is important to merge the applicant chart with the employee chart. New employee charts are typically generated through the HR interface feed. Determine the workflow for merging charts, including an automated scheduled job for merging, and ensure users who will be working applicant charts have the necessary merge security permissions for the document queue.

### System Settings

In {{% system-name %}} systems, workflows *use charts* for every patient, as well as users, employees, staff, etc. {{% system-name %}} may already be set up to create a user when a chart is registered manually, or via an HR interface, by way of the *Enable PUR Routine* system setting. Correct relationships are then needed between charts and users for portal functionality to work for those users. Some customers have post-processing scripts that run after the HR file that add these relationships to the chart automatically.

## Related Reports

There is a report available to list applicant partitioned charts that do not have the **_Is Applicant_** checkbox marked.  This checkbox indicates the chart is not flagged as temporary and wouldn't be able to be merged with a permanent employee record once they are hired.

![](../review-session-pre-placement.assets/82df001feaa8291953454422aa781f62.png)

Clicking on that report will list any applicant partitioned charts without the *Is Applicant* box being checked in their chart.

![](../review-session-pre-placement.assets/ed0682ed5931119e1a09629aab0dd024.png)

This is the opportunity to go into the listed chart(s) and fix that via edit demographics.

![](../review-session-pre-placement.assets/6238ce4791c029a3ae959468bd02e54a.png)

In the the edit demographics screen, checkmark the *Is Applicant* box and click Save to save your work.

![](../review-session-pre-placement.assets/4a84dee27538245b46dc8dc6266bf621.png)

## Key Decision Points

1. Determine the abbreviation that will be used for the applicant partition (APP is the default)
2. Review applicant portal setup and collect all consent and questionnaires that are needed
3. Determine which registration fields are needed on the applicant portal (choices are name, DOB,  SSN, email, or mobile phone number)
4. Determine whether online scheduling is needed on the applicant portal (determines whether the no login portal may be used vs using pick-up codes)
5. Determine whether HR/Talent needs the ability to schedule appointments for applicants (determine whether they will need a license to have a restricted login to the clinical side for registration and scheduling vs the supervisor portal for reporting only)
6. Determine the criteria for tasking notifications for applicants and which department should be notified (are different departments needed by location?)
7. Review the standard applicant email template and determine if verbiage changes are needed
8. Determine whether any automated email notifications should be sent out
9. Determine the criteria needed for the scheduled job to auto-merge the applicant chart to the employee chart
10. Does HR need access to view applicant status on the supervisor portal? If so, what information do they need to see on the report?
11. Does a purge rule need to be put into place to purge applicant records that are not hired? What are the criteria for the purge rule?
12. Determine the list of orders that need to be configured on the Pre-placement health surveillance panel

## Action Items/Timelines

1. Provide all pre-placement questionnaires that need to be loaded on the applicant portal
2. Provide all consent forms that need to be loaded on the applicant portal
3. Provide all testing that should be completed on new hires to configure the Pre-placement surveillance panel

## Resources

### Product Documentation

* [Linking Users for Portal Access](../../functions/portal-management/linking-users-for-portal-access.md)
* [Patient Portal Setup](../../functions/portal-management/patient-portal-first-time-setup-and-configuration.md)
* [Employer Portal Setup](../../functions/portal-management/employer-portal-setup.md)
* [Employer-Employee Second Portal Setup](../../functions/portal-management/employer-employee-second-portal-setup.md)

### LMS Courses/Videos

<table>
<tr>
<td><a href="https://employee-mie.talentlms.com/catalog/info/id:165">Pre-employment Management w/Applicant Portal</a> (LMS Course - 33 min)</td>
<td></td>
</tr>
<tr>
<td><a href="https://employee-mie.talentlms.com/catalog/info/id:436">Patient Engagement Portals</a> (LMS Course - 22 min)</td>
<td></td>
</tr>
</table>

Additional videos are also accessible via: [https://docs.enterprisehealth.com/videos-demonstrations](https://docs.enterprisehealth.com/videos-and-demonstrations.html)

Users always have access to (?) online help in the product at the top right corner or by visiting: https://docs.enterprisehealth.com
