---
title: "Review Session - Portal Management"
date: "2020-02-27T21:25:02.537Z"
url: "rapid-deployment/review-sessions/review-session-portal-management.html"
author: aquandt
version: 30
id: "1zEfFcB-6HplW3UUQOH5xkmMH0zUYNTy781hBg_unQpk"
source: "https://drive.google.com/open?id=1zEfFcB-6HplW3UUQOH5xkmMH0zUYNTy781hBg_unQpk"
menu:
    main:
        name: "Review Session - Portal Management"
        identifier: "1zEfFcB-6HplW3UUQOH5xkmMH0zUYNTy781hBg_unQpk"
        parent: "1Ws2Vhysc7vAiQXeVws2C92oE2Y10i-BYITqCos59cWM"
        weight: 6030
---
## Agenda

* <strong>Employee and Supervisor Portal Demonstration</strong>
* <strong>Overview</strong>
* <strong>System Configuration</strong>
    * <strong>User-Patient Relationships</strong>
    * <strong>Portal Setup</strong>
    * <strong>Employee Portal</strong>
    * <strong>Supervisor Portal</strong>
    * <strong>Applicant Portal</strong>
    * <strong>System Settings</strong>
* <strong>Resources</strong>

## Overview

As a means to streamline employee engagement and tracking, as well as offer easy access to due lists, employee work status, and overall health surveillance, {{% system-name %}} offers its certified employee and supervisor portals. Employees can schedule appointments, provide information, and complete questionnaires, easily maintaining work certifications and overall wellness. All the while, supervisors can view their personal information, as well as view their employees' restrictions, lost time, work status, or any additional information custom to the business needs.

The {{% system-name %}} web-based portals are available 24/7 and provide secure access to health information, scheduling, health questionnaires, and management tools for employees and supervisors to use when and where it is most convenient for them. The employee portal is designed to prompt engagement with user-friendly, intuitive pre-exam questionnaires, with responses being captured electronically, automatically populating the appropriate fields and documents within the clinical application, thus minimizing data entry and management for clinic staff. Additionally, the supervisor portal provides a manager dashboard to view employee orders and scheduling, as well as support and work status reports, which include employee surveillance status and restrictions/accommodations. The time savings is significant – no more endless phone calls to collect information or to schedule or reschedule appointments, and a one-stop-shop for better planning around illnesses, absences, vaccine requirements, and general certifications.

Standard functionality for the employee and supervisor portals includes:

* Client-specific branding with logo and photo
* Online scheduling
* Appointment requesting
* Appointment invitation, confirmation, and reminder emails
* Questionnaires
* Secure messaging
* Work status reports, including surveillance status and restrictions/accommodations
* Employee orders
* Views to lab results and other documents needing shared with employees
* Allergies/medications/immunizations/vitals
* Reporting abilities for work-related injury/illness (including state-specific requirements)
* Links to other health resources
* Support contacts

## System Configuration

To more fully address preferred configurations and review available options and features, utilize the [Provider Management sidemenu](https://system/?f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+) to access and edit the employee and supervisor portals. These configurations will be visible from the respective portal when accessed.

To begin the initial setup and finalize configuring of the portal(s), there is additional information that is important to understand before getting started. Review the following, and work with the Deployment Consultant to ensure the portal(s) configurations are suited to the business needs.

### User-Patient Relationships

To begin utilizing any of the portal features and functionality, users must have their role and relationship established, so that appropriate access can be granted. Employees and supervisors must first be listed as employees in the [Portal](https://system/?f=chart&s=pat&pat_id=41) Provider Organization, in order to have access to their respective portals.

![](review-session-portal-management.images/image1.png)

They must also have established relationships, consisting of *Self* and *No More Clipboard User* roles, and employees that the supervisor manages should be listed with a *Supervisor* role. To set these relationships, navigate to the employee's Summary chart tab and edit the Contacts portlet. Otherwise, relationships can be established by editing user account information from [Access Control](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control).

![](review-session-portal-management.images/image3.png)

{{% info %}}

The supervisor user-patient relationship is typically automated through an HR interface.

{{% /info %}}


### Portal Setup

When configuring the web-based portal(s) for the first time, it is best to navigate to the [Portal Setup tab](https://system/?f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=41) of the Portal Provider Organization. This tab contains options for first-time setup and some standard configurations. These options are designed to allow portals to be preliminarily customized and accessed according to the business needs.

To begin using the **First Time Setup**, click the section header to expand and display the options. Once opened, security roles may be selected to indicate which roles have access to the portal.

{{% info %}}

By default, any {{% system-name %}} user with the necessary user-patient relationships established can access the portal. This means that as long as the user-patient relationship is set correctly, the portal will be enabled for all security roles.

{{% /info %}}


![](review-session-portal-management.images/image2.png)
The **Portal** section, on the other hand, includes options to make label and verbiage changes, to update the logo, to disable either the employee or supervisor portal, and to add a consent form that would need to be electronically signed before being granted access to the portal.

![](review-session-portal-management.images/image5.png)

Some of the options needing customized or addressed, include:

* <strong>Replacement text for Enterprise Health</strong>: This field is used to replace the <em>Enterprise Health</em> label with the provided text. The replacement text should be the business name.
* <strong>Logo - Upload new logo</strong>: Click the <em>Upload new logo</em> link to replace the default logo. The page will refresh after confirming the image selection.
* <strong>Consent forms needing completed</strong>: Click the <em>Add consent forms</em> link to add forms. This will determine which consent form(s) a user will be required to complete prior to being granted portal access. Users will not have portal access until all required forms are completed.

{{% info %}}

An order for the consent must be added to the Portal Consent picklist, with an associated questionnaire flowsheet linked to the order for the verbiage.

{{% /info %}}


* <strong>Renewal interval</strong>: This determines the interval at which consent forms need completed. If no interval is provided, each form will only be required once. Setting the renewal interval to the shortest requirement is recommended.

All other options are part of the standard configuration and are enabled by default. No additional changes are required in this section, unless more customizations are needed to suit the business needs. In these cases, users are welcome to review the [Patient Portal](../../functions/portal-management/patient-portal-first-time-setup-and-configuration.html) online help documentation, for further details.

### Employee Portal

In order to access the portal as a employee, users must be established in the {{% system-name %}} system and have the appropriate role affiliation (i.e., an established *Self* role and *No More Clipboard User* role). To customize and configure each portal individually, users may navigate to the respective tab of the Provider Organization. For instance, the [Patient Portal tab](https://system/?f=chart&s=pat&t=Patient+Portal&v=dashboard&pat_id=41) contains configuration options for the employee portal, exclusively. Under this tab, there is an **Employee Portal Options** section, which addresses things such as the ability to disable the message center or configure document types needed for display in the portal, or the ability to add or modify replacement text, labels, tab colors, the landing page image, or even the message ticker.

![](review-session-portal-management.images/image4.png)

Utilize the following options to customize the employee portal, as needed:

**Patient Portal Configuration - Show Sample**: Click the *Show Sample* button to view a sample page designed to show the customizable fields available. This will show a sample of the portal welcome screen.

![](review-session-portal-management.images/image7.png)

**Single function portal**: When the Message Center is disabled and this option is selected, the portal will automatically be forwarded to the first module in the Module List.

**Disable Message Center**: Selecting this option will force the Message Center to be hidden for this portal. (By default, the Message Center will be displayed, so long as the chart tab is configured.)

**Allowed message types for receiving within portal**: This field allows users with the proper security permission (i.e., View Preliminary Documents = Yes) to view the types of messages being sent/received from/to the portal. In order to configure message types, users must have the Manage Chart Tabs security setting set to Yes.

**Replacement text for patient**: The text provided (limit 40 characters) will replace, or substitute, any instance of *patient* found within the portal.

**Brand for portal welcome message**: The name or brand to be used in the Welcome Message. This field can be updated with up to 25 characters. By default, *NoMoreClipboard* will be displayed. Click Show Sample to see where this will display.

**Description for portal welcome message**: Use this field to update the description for the Portal Welcome Message. Click Show Sample to see where this will display.

**Custom color**: To customize the portal color, use the color picker, or provide a hex color code, as desired. Buttons are blue, by default.

**Welcome image ID**: Using the *System Files Manager* link, upload an image for the portal Welcome screen. Click Show Sample to see where this will display. After clicking the link, click the **Add System File** link in the upper-right corner of the page, and browse to the preferred image. Set the storage type as *JPEG Image File*, and type the alias as **portal-landing-41**. To save, click the **Add File** button. Desired dimensions are 650 x 412.

**Message ticker**: Use this field to update the message ticker, designed to display important information or messages at the bottom of the portal Welcome page. For long messages, the ticker will scroll from right to left, and will cycle through each message. Additional messages can be added, updated, or edited using the **Add/Edit Messages** links. A SuperUser security permission (i.e., Manage Chart Tabs = Yes) is required for adding or editing messages, and messages are constructed using a limited markup that allows bold, italic, and linking. For help with the markup, click the **Get Editing Help** link.

#### Select Modules

The Select Modules section is intended to be used for customizing the functionality of the employee portal. There are 6 modules enabled to display on the employee portal, by default. These are: My Appointments, My Medical Information, Report a Work Injury or Illness, Work Status, Send a Message, and Other Health Resources.

To begin customizing, clicking the **Select Modules** header will open a dialog window where modules can be added to or removed from the portal, as appropriate. Additionally, the number of columns across which the selected modules will display can be set using the **Columns** dropdown. With the necessary modules selected/deselected and the preferred column layout established, simply click the **Save** button to retain all changes. How to customize these modules is discussed in further detail, below.

{{% info %}}

The *My Medical Information*, *Report a Work Injury or Illness*, *Work Status* modules, as well as the optional *Questionnaire* modules, can only have their names customized, and in some cases, may have an autocomplete available for attributing any necessary questionnaire. Additional customizations are mostly limited to *My Appointments*, *Send a Message*, and *Other Health Resources*.

{{% /info %}}


##### My Appointments

The My Appointments module can be updated to allow specific options for functionality, as well as for displaying warnings or specified text, as needed.

![](review-session-portal-management.images/image6.png)

* <strong>Custom Module Name</strong>: The name defaults to <em>My Appointments</em>. Customize up to 60 characters.
* <strong>Schedule an Appointment</strong>: This selection allows users to schedule appointments from their portal by signing up for an appointment slot, based on appointment types and schedules set up within the system.
* <strong>Request an Appointment</strong>: This selection allows users to request appointments through their portal by sending an appointment request with their preferences and appointment information to the clinic. Once verified, appointments will display on the user's <em>My Appointments</em> page.

{{% info %}}

To use this feature, a *Request an Appointment* message type must be enabled.

{{% /info %}}


* <strong>Allow scheduling past due appointments</strong>: With this enabled, users will be able to schedule an appointment that is past the due date.
* <strong>Warning message for past due appointments</strong>: Use this field to free text a warning message that will be displayed next to the date of past due appointments.

{{% info %}}

This field will display only if *Allow scheduling past due appointments* IS NOT selected.

{{% /info %}}


* <strong>Days to show past appointments</strong>: Use this field to set the number of days of past appointments to display.
* <strong>Days out to search for</strong>: This field can be used to set the number of days being searched, out from the present day.
* <strong>Days out before showing days</strong>: This field determines how many days before having to show additional days, out from the present day.
* <strong>Show "First available provider" option when selecting a provider</strong>: If enabled, the option for <em>First available provider</em> will be available to users scheduling appointments.
* <strong>Force any available doctor</strong>: Any available doctor will be forced.
* <strong>Alert text to show at top of form</strong>: Use this field to display an alert or memo at the top of the page (e.g., "If this is a medical emergency, please dial 9-1-1.").

##### Send a Message

The Send a Message module can have its name and header customized, the sending instructions modified, or the message types configured, to determine what can/cannot be sent to and from the portal.

![](review-session-portal-management.images/image9.png)

* <strong>Custom Module Name</strong>: The name defaults to <em>Send a Message</em>. Customize up to 60 characters.
* <strong>Replacement text for header bar</strong>: The header found on the Send a Message portal page defaults to <em>Send a Message</em>. Use this field to customize this header, as needed.
* <strong>Instruction text</strong>: Use this field to add optional instructions for the Send a Message portal page.
* <strong>Allowed message types for sending within portal</strong>: The following message types are supported for transmission using the employee portal, by default:
    * My Medical Information
    * Request an Appointment
    * Travel Questionnaire
    * Ask a Clinical Question
    * Request an Accommodation
    * Report Injury or Illness

{{% tip %}}

Click the minus button to remove any message type, or click the button or *Add message types* link, to add back message types, as needed.

{{% /tip %}}


##### Other Health Resources

The Other Health Resources module allows for additional resources to be added to the portal, as needed. These resources can be internet or intranet resources, and there is no limit to the number of resources that can be added.

![](review-session-portal-management.images/image8.png)

* <strong>Custom Module Name</strong>: The name defaults to <em>Other Health Resources</em>. Customize up to 60 characters.
* <strong>Add additional health resources</strong>: To add additional health resources, simply click the <strong>Add Health Resource</strong> button. This will place a templated NoMoreClipboard health resource panel at the bottom of the list of resources.
* To update/edit a health resource, click on any area within the resource panel:
    * <strong>Title</strong> (NOMORECLIPBOARD): This is a free-text field. Click on the title and update with the preferred title of the health resource.
    * <strong>Summary</strong>: This is a free-text field. Click anywhere in the NoMoreClipboard summary and update the text with a preferred description/summary of the health resource.
    * <strong>Link</strong> (NMC HOME): Clicking on the provided link will open an <strong>Edit Link</strong> window. Determine the link type (i.e., a normal link, a form, or a pre-built questionnaire), the link title, and the URL of the webpage. Click <strong>Submit</strong>, when finished.
    * <strong>Arrows</strong>: Use the arrows in the bottom-left corner to move the health resource panel to an alternative location on the page.
    * <strong>Add Link</strong>: Click this button to add additional links to the health resource.
    * <strong>Delete</strong>: Click this button to remove the health resource from displaying on the employee portal. The button changes to <strong>Undelete</strong>, so the panel can be replaced prior to submitting, if necessary.
* When all edits have been completed, click the <strong>Submit</strong> button.

### Supervisor Portal

In order to access the portal as a supervisor, users must be established in the {{% system-name %}} system and have a user-patient relationship set up (i.e., supervisor-employee relationship with each employee chart). To customize and configure each portal individually, users may navigate to the respective tab of the Provider Organization sidemenu. For instance, the [Employer Portal tab](https://system/?f=chart&s=pat&t=Employer+Portal&v=dashboard&pat_id=41) contains configuration options for the supervisor portal, exclusively. Under this tab, there is an **Supervisor Portal Options** section, which addresses things such as the ability to disable the message center or configure document types needed for display in the portal, or the ability to add or modify replacement text, labels, tab colors, the landing page image, or even the message ticker.

![](review-session-portal-management.images/image11.png)

Utilize the following options to customize the employee portal, as needed:

**Patient Portal Configuration - Show Sample**: Click the *Show Sample* button to view a sample page designed to show the customizable fields available. This will show a sample of the portal welcome screen.

![](review-session-portal-management.images/image7.png)

**Single function portal**: When the Message Center is disabled and this option is selected, the portal will automatically be forwarded to the first module in the Module List.

**Disable Message Center**: Selecting this option will force the Message Center to be hidden for this portal. (By default, the Message Center will be displayed, so long as the chart tab is configured.)

**Allowed message types for receiving within portal**: This field allows users with the proper security permission (i.e., View Preliminary Documents = Yes) to view the types of messages being sent/received from/to the portal. In order to configure message types, users must have the Manage Chart Tabs security setting set to Yes.

**Replacement text for supervisor**: The text provided (limit 40 characters) will replace, or substitute, any instance of *supervisor* found within the portal.

**Brand for portal welcome message**: The name or brand to be used in the Welcome Message. This field can be updated with up to 25 characters. By default, *NoMoreClipboard* will be displayed. Click Show Sample to see where this will display.

**Description for portal welcome message**: Use this field to update the description for the Portal Welcome Message. Click Show Sample to see where this will display.

**Custom color**: To customize the portal color, use the color picker, or provide a hex color code, as desired. Buttons are blue, by default.

**Welcome image ID**: Using the *System Files Manager* link, upload an image for the portal Welcome screen. Click Show Sample to see where this will display. After clicking the link, click the **Add System File** link in the upper-right corner of the page, and browse to the preferred image. Set the storage type as *JPEG Image File*, and type the alias as **portal-landing-41**. To save, click the **Add File** button. Desired dimensions are 650 x 412.

**Message ticker**: Use this field to update the message ticker, designed to display important information or messages at the bottom of the portal Welcome page. For long messages, the ticker will scroll from right to left, and will cycle through each message. Additional messages can be added, updated, or edited using the **Add/Edit Messages** links. A SuperUser security permission (i.e., Manage Chart Tabs = Yes) is required for adding or editing messages, and messages are constructed using a limited markup that allows bold, italic, and linking. For help with the markup, click the **Get Editing Help** link.

#### Select Modules

The Select Modules section is intended to be used for customizing the functionality of the supervisor portal. There are 4 modules enabled, by default. These are: Orders, Work Status, Supervisor Scheduling, and Support. How to activate or deactivate these modules is discussed below, as well as how to customize these modules, as needed.

To begin customizing, clicking the **Select Modules** header will open a dialog window where modules can be added to or removed from the portal, as appropriate. Additionally, the number of columns across which the selected modules will display can be set using the **Columns** dropdown. With the necessary modules selected/deselected and the preferred column layout established, simply click the **Save** button to retain all changes. How to customize these modules is discussed in further detail, below.

{{% info %}}

The *Case Review Status*, *Order Status*, *Support, Health Surveillance, Orders, Supervisor Scheduling, and Work Status* modules can only have their names customized. Additional customizations are mostly limited to the *Send a Message* module.

{{% /info %}}


##### Send a Message

The Send a Message module can have its name and header customized, the sending instructions modified, or the message types configured, to determine what can/cannot be sent to and from the portal:

![](review-session-portal-management.images/image10.png)

* <strong>Custom Module Name</strong>: The name defaults to <em>Send a Message</em>. Customize up to 60 characters.
* <strong>Replacement text for header bar</strong>: The header found on the Send a Message portal page defaults to <em>Send a Message</em>. Use this field to customize this header, as needed.
* <strong>Instruction text</strong>: Use this field to add optional instructions for the Send a Message portal page.
* <strong>Allowed message types for sending within portal</strong>: This field is to be used for establishing the message types allowed for transmission with the supervisor portal.
* <strong>Designate message types for supervisors' review</strong>: Use this field to designate which questionnaires will need reviewed by supervisors, upon completion by employees.

{{% tip %}}

Click the minus button to remove any message type, or click the button or *Add message types* link, to add back message types, as needed.

{{% /tip %}}


* <strong>Use tasks to order supervisor questionnaires based on questionnaires completed by employees</strong>: Use the corresponding links to add Fast Tasks and Tasklist Events to order questionnaires for supervisors, based on questionnaires completed by employees.

### Applicant Portal

The applicant portal is a web-based platform available for screening new employees and streamlining the hiring process. The applicant portal is an optional module designed as a login terminal for increased usability. With it, employers have the ability to simplify the onboarding process and ensure all pre-employment needs are addressed early and accurately.

This portal is configured so that candidates can be directed to the portal to complete forms and/or questionnaires, according to the hiring and pre-employment needs of the business. Candidates simply need to begin the portal session by entering their first and last name. Once the applicant has completed the forms/questionnaires, all of the information is submitted to the employer electronically. From here, a login-disabled user account will be drafted and linked to the pre-configured Applicant department, so if hired, the information can be easily merged into the employee user account.

![](review-session-portal-management.images/image12.png)

#### System Configuration and Setup

Be sure to speak with a Deployment Consultant if there is interest in maintaining an applicant portal, so any preferred configurations can be fully addressed and all available options and features can be reviewed. Once the portal has been configured, the URL will be made available for marketing purposes. From the Provider Management sidemenu, however, permitted users will have the ability to edit the title, color scheme, available questionnaires, and instructions. These configurations will then be visible within the portal accessed by the candidates.

**Questionnaire(s) for Applicants**: Clients will determine what types of information and number of forms/questionnaires applicants will be expected to complete. Discussions with the Deployment Consultant will help establish the necessary configurations and workflow (e.g., link necessary questionnaire(s) to corresponding order items; indicate what document type each questionnaire will be saved as; confirm the preferred chart tab to which each document type will be mapped).

**Questionnaire(s) Data Fields**: Additional discussions will be needed to determine what specific information is necessary from each questionnaire being presented to applicants, as well as in what way the information will be recorded. The Deployment Consultant will assist with configuring observations and observation flowsheets, to align with the appropriate free text data fields and pre-templated options needed on each questionnaire.

**Order Picklist**: Any questionnaires being used for the applicant portal must fall within an order picklist. Work with the Deployment Consultant to ensure an Applicant Portal order picklist is configured, listing each questionnaire needed for an Employer Organization (EO) or Provider Organization (PO) applicant portal.

**Applicant Portal EO or PO Chart Tab**: Customizations to the applicant portal can be done through the Applicant Portal chart tab of the EO or PO, as needed. It is through the Applicant Portal chart tab that users with the necessary permissions may configure the portal components. The portal URL suffix will be provided from this tab, which will be appended to the production database base URL and distributed for use.

**Tasking**: It is important to discuss and determine any tasklist events needing triggered whenever applicants register and submit information via the applicant portal.

**Merging**: Once an applicant is hired, it is important to merge the applicant chart with the employee chart. New employee charts are typically generated through the HR interface feed. Determine the workflow for merging charts, and ensure users who will be working applicant charts have the necessary merge security permissions.

### System Settings

In {{% system-name %}} systems, workflows *use charts* for every patient, as well as users, employees, staff, etc. {{% system-name %}} may already be set up to create a user when a chart is registered manually, or via an HR interface, by way of the *Enable PUR Routine* system setting. Correct relationships are then needed between charts and users for portal functionality to work for those users.

## Resources

### Help Documentation

* [Linking Users for Portal Access](../../functions/portal-management/linking-users-for-portal-access.html)
* [Patient Portal Setup](../../functions/portal-management/patient-portal-first-time-setup-and-configuration.html)
* [Employer Portal Setup](../../functions/portal-management/employer-portal-setup.html)
* [Employer-Employee Second Portal Setup](../../functions/portal-management/employer-employee-second-portal-setup.html)
