---
id: '1eTIUEAeY-ytsvs1oMTixISaQR2yyRnx2oEmW5nSaekc'
title: 'Patient Portal First-Time Setup & Configuration'
date: '2024-06-11T17:45:28.237Z'
version: 596
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'http://ehdocs.med-web.com/wcdocs/patient-portal-first-time-setup-and-configuration.html#webchart-database-gaps-punchlist'
  - 'https://asterisk.med-web.com/password_reset_caller.php?greeting=mie&short=true'
source: 'https://drive.google.com/open?id=1eTIUEAeY-ytsvs1oMTixISaQR2yyRnx2oEmW5nSaekc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
With the **Patient Portal**, sometimes used and referred to as an **Employee Portal**, patients and clinicians, as well as employees and occupational health specialists, are able to communicate freely anytime. Patients or employees can quickly and easily add/update their personal health records, review medical information, schedule/cancel appointments, and so much more. Review the following information to assist with configuring and enabling the portal, today!

{{% only sys="wc" %}}
{{% note %}}



Many WebChart databases, especially legacy systems, may lack the necessary components and configurations to be able to configure the patient portal using the Provider Management menu option. To ensure that the WebChart database is configured properly, first refer to the [WebChart Gaps/Punchlist](http://ehdocs.med-web.com/wcdocs/patient-portal-first-time-setup-and-configuration.html#webchart-database-gaps-punchlist) found at the end of this document before continuing with any of the following steps.

{{% /note %}}


{{% /only %}}

## First-Time Setup

Configuration of a patient portal is done within a provider organization (PO) chart. To add or modify provider organization charts, click the {{% syslink "Provider Management" "f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+" %}} sidemenu option. In order to configure the portal from the PO, the **Portal** chart type must be associated with the chart. The chart type(s) can be viewed and edited from the **Overview (PO)** chart tab within the respective chart.

![](../patient-portal-first-time-setup-and-configuration.assets/888c4f9cdaecc3be851eb0d1580a522f.png)

In order to begin configuring the Patient Portal, it first must be enabled from the **General Configuration** section of the {{% syslink "Portal Setup" "f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=41" %}} tab.

![](../patient-portal-first-time-setup-and-configuration.assets/a10c2129b98c04b32bac7c8890433637.png)

Utilize the Provider Management menu search to locate the Provider Organization (PO) *chart* that will house the portal configurations. By default, a {{% syslink "Provider Portal" "f=chart&s=pat&pat_id=41" %}} provider organization will exist in the {{% system-name %}} system. This default provider organization can be used to setup/configure the patient portal; otherwise, a new provider organization can be created.

{{% tip %}}
If the default provider organization chart will be utilized, clients may wish to edit the Provider Organization (portal) name. This is done in the Overview (PO) chart tab by expanding the Provider Organization header and updating the **Search Name** field.
{{% /tip %}}

Complete the following steps to setup the patient portal within the provider organization chart:

1. Navigate to the {{% syslink "Provider Management" "f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+" %}} side menu.
2. Type the name of the PO, and click the <strong>Search</strong> button. In this example, we will be using  {{% syslink "Provider Portal" "f=chart&s=pat&pat_id=41" %}} .
3. Locate the PO Name, and click the hyperlink.
4. Locate and select the {{% syslink "Portal Setup" "f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=41" %}}  tab.
5. Once there, click the <strong>First Time Setup</strong> header, to expand and review the information.  
    ![](../patient-portal-first-time-setup-and-configuration.assets/11edec3c3df31e71caad76ea63099aa8.png)
6. Once the <em>First Time Setup</em> section is expanded, select which security roles will have access to the portal. After selecting all of the appropriate security roles, click the <strong>Submit</strong> button, and the first-time portal setup will initiate.    
    ![](../patient-portal-first-time-setup-and-configuration.assets/14dd3f1dada326d854043c703f29294a.png)

    {{% only sys="wc" %}}

{{% info %}}

WebChart portals should use a **Patients** role. If this role does not exist, please refer to the [WebChart Gap section](http://ehdocs.med-web.com/wcdocs/patient-portal-first-time-setup-and-configuration.html#webchart-database-gaps-punchlist) in this document for information on how to add that security role. A matching department name will also need to be added. Search for the** New User Realm** system setting (NMC, Signup, New User Realm) and enter the department name in the *Value* field (this should match the security role name, exactly). This system setting will ensure that when new user accounts are created and linked to the patient chart, the correct security role is being set for portal users in their user accounts.

![](../patient-portal-first-time-setup-and-configuration.assets/203499a3587105c8140b61a5129e6057.png)

The security role(s) that are chosen must have the following security settings set in place:

    1. <strong>Limited Access</strong> = Yes
    2. <strong>Limit to Portal</strong> = Yes
    3. <strong>Limited to Default Tab</strong> = No
    4. <strong>Manage Observations</strong> = Edit
    5. <strong>Document Permissions</strong> = Edit
    6. <strong>Conditions</strong> = Edit
    7. <strong>Demographics</strong> = Edit
    8. <strong>Manage Settings</strong> = Manage Own Settings
    9. <strong>View Encounters</strong> = Yes
    10. <strong>Sign Document</strong> = Yes
    11. <strong>View Preliminary Documents</strong> = Yes
    12. <strong>Manage Users</strong> = Self
    13. <strong>Manage User Patients</strong> = Yes
    14. <strong>Rx Manager</strong> = Edit (This is only set if patients need to enter their preferred pharmacy in the Settings of the portal.)


{{% /info %}}

{{% /only %}}

## General Configuration

After running the portal setup, click the **General Configuration/Portal** header to expand and begin customizing and updating the portal information, accordingly.

![](../patient-portal-first-time-setup-and-configuration.assets/e6339712b2619726d634ab29b8b4a7e3.png)

**Branding**

**Logo - Upload new logo**: Click the **upload new logo** link to replace the default logo. The page will refresh after confirming the image selection. If the logo does not appear in the portal as it should for all users, check to see if doc type WCPHOTO is restricted to certain department or users and adjust as needed.

**Features**

**Enable Patient Portal**: Select to enable patient/employee portal.

* Verify system setting of ‘Default on Signup' to be NMC vs. APP and that the NMC partition is set to View only.  Leaving the ‘Default on Signup' system setting set to APP will assign an APP MRN to all charts will create a portal account.

**Enable Employer Portal**: Select to enable employer/supervisor portal.

**Enable Activation Code Redemption**: This option will require an activation code for new portal users to create a portal account. Select to enable activation code redemption, which will allow users to generate a code for each chart needing to activate a portal account. To generate an activation code for a chart, the portal user must have a relationship to the applicable portal Provider Organization.

* This relationship can be set manually using the Contacts patient portlet (Relationships section) on the Patient Summary chart tab.
* It can also be automated by enabling the NMC, Portal, Default Portal system setting. In the <em>Value</em> field of the system setting enter the Pat ID of the portal, which can be found at the end of the portal URL address. Once the default portal system setting is configured with the appropriate Pat ID, clinic users will generate an activation code and this step will automatically link the applicable provider organization to the patient chart.
* To generate an activation code, enable the Portal patient portlet from the respective patient's Patient Summary chart tab. Generate an activation code, as needed.
* Ensure the System, Login, New Login Style system setting is set to one (1).
* A PICKUP partition must be created, and the name and description fields should read 'Portal Activation Codes'. This partition should be set to <em>Hidden from view but searchable (randomly generated)</em>.

{{% note %}}
There is also a system setting that needs added and reviewed when utilizing the Activation Code Redemption functionality. The setting controls how many days an activation code remains active. By default, the system setting is set to 30 days. The system setting to be added is *Unified Portal, Account Activation, Days to expire activation code*.


{{% /note %}}

**Use Alias for User's Name**: Select to enable the use of aliases in the portal, in place of user first names. The last name will not be affected.

**User Editable Settings**

**Available Settings/Settings List**: Use this section to select which settings are available for portal users to modify:

* Email
* Home Phone
* Cell Phone
* Security Question
* Preferred Time Zone
* Preferred Pharmacy

**Miscellaneous**

**Logo Alternate Text**: Alternative text is used for accessibility purposes. The alternative text should contain the same text that is used in the logo. If no text is used within the logo, the alternative text should be the organization name represented by the logo.

**Replacement Text for Enterprise Health**: The text provided will replace, or substitute, the *Enterprise Health* label.

**Checkin Kiosk Verbiage**: Use this field to update the description displayed on the Check-in Kiosk.

**Redirect on Logout**: Provide the website users should be redirected to when logged out of the portal.

**Preferred Partition**: Use the drop-down to determine which partition will be used to populate the appropriate record numbers, displayed next to a patient name (e.g., Hart, William (MR-1234))

**User Link Warning**

**View Sample** (
![](../patient-portal-first-time-setup-and-configuration.assets/e90ca94852bca1255ff5a0074613a42c.png)
): For a sample of the portal welcome screen, click the View Sample button, at any time. Clicking this button will provide a Portal Sample that displays how editing specific features will be seen from an end-user perspective. To exit the Portal Sample, click the red ‘x' in the upper-right corner.

![](../patient-portal-first-time-setup-and-configuration.assets/67b5ef8147665c28980e597991cfdc80.png)

**Custom Heading**: Use this field to customize the warning heading displayed to those users without a default portal or lacking the appropriate setup.

**Custom Message**: Use this field to customize the warning message displayed to those users without a default portal or lacking the appropriate setup.

**Permission Check Warning**

**View Sample** (
![](../patient-portal-first-time-setup-and-configuration.assets/e90ca94852bca1255ff5a0074613a42c.png)
): For a sample of the portal welcome screen, click the View Sample button, at any time. Clicking this button will provide a Portal Sample that displays how editing specific features will be seen from an end-user perspective. To exit the Portal Sample, click the red ‘x' in the upper-right corner.

**Custom Heading**: Use this field to customize the warning heading displayed to those lacking access to the portal environment.

**Custom Message**: Use this field to customize the warning message displayed to those lacking access to the portal environment.

**Confirmation Page**

**Custom Page Title**: Defaulted to *Submission Successful*. Use this field to customize the page title of the confirmation page.

**Custom Heading**: Defaulted to *Thank you!* Use this field to customize the heading of the confirmation page.

**Custom Message**: Defaulted to *You will be redirected momentarily*. Use this field to customize the message of the confirmation page.

**Consent Forms**

**Forms needing completed**: Click the **Add consent forms** link to add forms. This will determine which consent forms a user will be required to complete prior to being granted portal access. Users will not have portal access until all required forms are completed.

{{% note %}}

To *fully* add a consent form to the list:

1. Add the appropriate document type to the system.
2. Add the appropriate order item:
    1. Enter the order name
    2. Set the order type to <em>Questionnaires</em>
    3. Select the corresponding document type that was added to the system
    4. Set the Insert As field to Pending.
3. Add the order item to the Portal Consent orders picklist
4. Add a flowsheet (named the same as the order item)
    1. <em>Observations will likely need to be created prior to building and utilizing this flowsheet.</em>
    2. Add a WHERE clause to the Required section of this flowsheet, to ensure that portal users not accepting the terms and conditions of the consent form will not be permitted access or be able to proceed further in the portal. Add the following WHERE clause to the Required section:  
        `  
        observationValueByName('insert the consent observation') === 'Yes' ? 0 : -1`

{{% /note %}}

**Renewal interval**: This option determines the interval at which consent forms need completed. If no interval is provided, each form will only be required one time. Setting the renewal interval to the shortest requirement is recommended.

**Login Page**

**SSO Message**: Add a custom message underneath the SSO options on this portal's login page.

**Footer Message**: Add a custom message to the footer of this portal's login page.

Once all of the appropriate fields have been addressed, click the **Next** button, or click the section header to close and save all entries.

## Customizations

With the initial setup complete, navigate to the {{% syslink "Patient Portal" "f=chart&s=pat&t=Patient+Portal&v=dashboard&pat_id=41" %}} tab to finish any remaining portal customizations. Any permissions or settings that need to be addressed can be found under the Security Requirements section near the top of the page, and the configuration and modules can be adjusted, using the remaining sections, as needed.

While on the *Patient Portal* tab, click the **Configuration** header to expand and review the available options. Fill out the appropriate fields, as needed.

![](../patient-portal-first-time-setup-and-configuration.assets/dff4dc460c9629e4b704e22e99f0a80d.png)

**Features**

**Single Function Portal**: When this option is selected, the portal will not default to the Message Center, but rather automatically forward to the first module in the Module List. Unless the Message Center is the desired function, Disable Message Center must be selected, below.

**Disable Message Center**: By default, the Message Center will be displayed if the chart tab is configured; however, check this option to force the Message Center to be hidden for this portal.

**Enable Prefill From Context**: Allows supervisors to prefill previous questionnaire answers for configured flowsheets, based on existing contexts like Documents, Encounters, or Cases, created by the selected patient.

**Miscellaneous**

**Replacement Text for Patient**: The text placed in this field will update and replace any instance of "patient" found within the portal. Limit 40 characters.

**Custom Color**: Use the color picker, or provide a hex color code, to customize the portal color, if desired.

**Home Page**

**View Sample** (
![](../patient-portal-first-time-setup-and-configuration.assets/e90ca94852bca1255ff5a0074613a42c.png)
): For a sample of the portal welcome screen, click the View Sample button, at any time. Clicking this button will provide a Portal Sample that displays how editing specific features will be seen from an end-user perspective. To exit the Portal Sample, click the red ‘x' in the upper-right corner.

![](../patient-portal-first-time-setup-and-configuration.assets/67b5ef8147665c28980e597991cfdc80.png)

**Brand for Welcome Message**: The name or brand to be used in the Welcome Message. By default, the word NoMoreClipboard will be populated, but this field can be updated with up to 25 characters. Click Show Sample to see where this occurs.

**Description for Welcome Message**: The description provided for the Portal Welcome Message. Click Show Sample to see where this occurs.

**Welcome Image ID**: Using the link to the {{% syslink "System Files Manager" "f=admin&s=system_files&tabmodule=admin&tabselect=System+Files" %}} , upload an image to be seen on the portal Welcome screen. Click **Add System File**, select the preferred image, storing it as a *JPEG image file*, and set the alias as **portal-landing-####** (e.g., portal-landing-40307, portal-landing-431, etc.). The desired dimensions are 650 x 412.

**Message Ticker**: Use the message ticker to display important information, or messages, at the bottom of the portal Welcome page. The ticker will rotate through each message and scroll right to left, for long messages. Additional messages can be added, updated, or edited using the **Add/Edit Messages** links. A SuperUser security permission is required for adding or editing messages

{{% tip %}}
Messages are constructed using a limited markup that allows bold, italic, and linking. For help with the markup, click the help icon in the top-right of the page. Click **Provide Help**, and then click the **Get Editing Help** link.
{{% /tip %}}

**Message Center**

**Configuration**: Use the drop-down to select which chart tab will be used to determine the message types and/or documents available for the message center. Clicking the **Add messages types** link will take users to the currently selected chart tab. **Show documents that are manually sent to portal:** allows clinical staff to manually send documents to the portal that are not necessarily shared on the portal initially. **Show completed questionnaires:** will display completed questionnaires in the Message Center. **Enable Email Notifications:** will email portal users when notification items have been added to the Message Center.

**Document Center**

**Preliminary Documents** security setting must be set to **Yes** for users to view documents. **Document accept template(s)**: If a template is not available, click the Create a Fast Task link. This is used to control how to route accepted documents using Fast Tasks. **Document reject template(s)**: If a template is not available, click the Create a Fast Task link. This is used to control how to route rejected documents using Fast Tasks. **Conversation types**: Document types selected in this list will display conversations in the Document View page. Configure by selecting the appropriate portal message document type from the dropdown, so that replies that are sent back to the portal user are visible and linked to the original message sent from the portal.

{{% note %}}
If a document (such as a lab result document) should not display on the portal until after the document has been e-signed, add an additional expression to the Additional Expression field when editing the Message Center chart tab (or any chart tab being selected in the portal setup). The Additional Expression field will only display when in the Advanced Editor mode. An example of the additional expression to be used when doc type WCLAB should only display once it has been e-signed by the provider is as follows:



d.storage_type>0 AND IF(d.doc_type = 'WCLAB', EXISTS (SELECT sig.doc_id FROM document_sign sig WHERE sig.doc_id = d.doc_id AND sig.status = 1), 1)
{{% /note %}}

By default, if the Lab Result document is added to Message Center chart tab, ALL Lab Result documents will display unless a whereclause as outlined above is added to the Message Center chart tab.

Email notifications will be sent when new documents are available to view in either the Message Center or My Medical Information chart tab.  The following 3 items need to be in place in order for the email notifications to work properly:

* Pat Portal Notification Layout- this should be included in databases by default.  The layout should be reviewed to ensure that both the Message Center and The My Medical Information chart tabs are accounted for in this layout.
* PortalMessageNotificationEmail System Report- this should be included in databases by default.
* Scheduled Job- this is not included in databases by default and will need to be added if it doesn't exist.  When creating the scheduled job, the type is Perform Report, select the system report name of PortalMessageNotification and set the recurrence.

Click the **Next** button to save and close the section, and proceed to the **Select Modules** section.

### Select Modules

The Select Modules section is intended for customizing the functionality of the patient portal. The available modules to enable on the portal are:

* My Appointments
* Forms
* Questionnaires
* My Medical Information
* Report Work Injury or Illness
* Send A Message
* Other Health Resources
* Work Status

There are certain modules enabled, by default. How to activate or deactivate these modules is discussed below, as well as how to customize them, as needed.

1. Clicking on the Select Modules header will open a dialog window where modules can be added to or removed from the portal functionality. With the necessary modules selected/deselected, simply click the Save button to retain all changes.
2. All of the modules can be given a custom name using the Custom Module Name field, under each of the respective section headings.

#### My Appointments

The *My Appointments* module can be updated to allow certain functionality, as well as to display warnings or specified text, as needed.

**Custom Module Name**: The name defaults to *My Appointments*. Customize up to 60 characters.

**Schedule an Appointment**: This selection allows users to schedule appointments from their portal by signing up for an appointment slot, based on appointment types and schedules set up within the system. In order for the schedules to interact with the portal, the location linked to each schedule needs to be added to the **Locations** chart tab of the Provider Organization chart. Appointment types that are available for selection are managed from the {{% syslink "Appt Types" "func=scheduler&s=apttypes" %}} chart tab of the {{% syslink "Scheduler" "func=scheduler%23Now" %}} . Selecting **Available For Portal** on the respective appointment type indicates that the appointment type will be made available within the portal. Not selecting this option indicates that the appointment type linked to the schedule will NOT be available within the portal.

**Request an Appointment**: This selection allows users to request appointments through their portal by sending an appointment request with their preferences and appointment information to the clinic. Once verified, appointments will display on the user's *My Appointments* page.

{{% note %}}
To use this feature, a *Request an Appointment* message type must be enabled. Review the [Send a Message](#send-a-message) section of this help documentation for further information on how to add message types.
{{% /note %}}

**Allow scheduling past due appointments**: With this enabled, users will be able to schedule past due appointments.

**Warning message for past due appointments**: Use this field to free text a warning message that will be displayed next to an appointment past due date.

{{% note %}}
This field will only display if *Allow scheduling past due appointments* IS NOT selected.
{{% /note %}}

**Days to show past appointments**: Use this field to set the number of days of past appointments to display.

**Days out to search for**: This field can be used to set the number of days being searched, out from the present day.

**Days out before showing days**: This field determines how many days before having to show additional days, out from the present day.

**Show "First available provider" option when selecting a provider**: If enabled, the option for *First available provider* will display to users when scheduling appointments.

**Force any available doctor**: This disables the Select Provider field from displaying on the portal, automatically assigning a provider based on the appointment type and availability.

**Alert text to show at top of form**: Use this field to display an alert or memo at the top of the page (e.g., "If this is a medical emergency, please dial 9-1-1.").

### My Medical Information

The *My Medical Information* module is intended for displaying pre-defined documents in this section of the portal. The *My Medical Information* module will point to the My Medical Information chart tab, by default. The section within the portal will display the documents that are linked to whatever chart tab is selected during the portal setup.

* <strong>Custom Module Name</strong>: Rename this module to specify how this section will be labeled within the portal. Customize up to 60 characters.
* <strong>Message Configuration</strong>: Use the drop-down to select which chart tab will be used to populate this section of the portal.

{{% note %}}
If a document (such as a lab result document) should not display on the portal until after the document has been e-signed, add an additional expression to the Additional Expression field when editing the Message Center chart tab (or any chart tab being selected in the portal setup). The Additional Expression field will only display when in the Advanced Editor mode. An example of the additional expression to be used when doc type WCLAB should only display once it has been e-signed by the provider is as follows:



d.storage_type>0 AND IF(d.doc_type = 'WCLAB', EXISTS (SELECT sig.doc_id FROM document_sign sig WHERE sig.doc_id = d.doc_id AND sig.status = 1), 1)
{{% /note %}}

#### Send a Message

The *Send a Message* module can have its name and header customized, the sending instructions modified, or the message types configured, to determine what can/cannot be sent to and from the portal.

**Custom Module Name**: The name defaults to *Send a Message*. Customize up to 60 characters.

**Replacement text for header bar**: The header found on the Send a Message portal page defaults to *Send a Message*. Use this field to customize that header, as needed.

**Instruction text**: Use this field to add optional instructions for the Send a Message portal page.

**Allowed message types for sending within portal**: The following message types are supported for transmission using the portal, by default:

* My Medical Information
* Request an Appointment
* Travel Questionnaire
* Ask a Clinical Question
* Request an Accommodation
* Report Injury or Illness

{{% tip %}}
Click the minus [ - ] button to remove any message type, or click the plus [ + ] button or *Add message types* link to add back message types.
{{% /tip %}}

{{% info %}}
To fully add a new message type to the list, it is necessary to first add the appropriate document type to the system. Next, add an the appropriate order item–enter the order name, set the order type to *questionnaires,* select the correct document type, and set the Insert As field to Pending. Add the order item to the Portal Messages orders picklist, and finally, add a flowsheet (named the same as the order item). More than likely, observations will need to be created prior to building and utilizing this flowsheet.  
{{% /info %}}

{{% only sys="wc" %}}

Portal messages are sent to WebChart in the form of a task. WebChart clients will need to setup Fast Tasks and Tasklist Events in order to view incoming portal messages.

    1. First, create a Fast Task to review and to respond to the incoming portal messages. The Fast Task can be assigned to an individual or a group (department).
    2. Next, users will need to create the Tasklist Event. When doing so, select the Fast Task that was created for reviewing and responding to the incoming portal messages and add a WHERE clause (e.g., d.doc_type IN ('CLINICALQ')) that will include the document type(s) being used for portal messages that are sent from the portal to WebChart.


When replying to portal messages, users will navigate to the forms library via the Add Document link and select the appropriate Text document to send the reply for portal messages.  If no portal reply text documents exist, one or more will need to be created.  The text document(s) will need to be added to the Message Center chart tab so that portal replies can be viewed within the patient portal.

{{% /only %}}

#### Questionnaires

Adding Questionnaire modules will allow users to add custom questionnaires to the portal, as needed. Questionnaires 1, 2, and 3 can all be used to allow portal users to view or update their medical information (e.g., medications, allergies, immunizations), as appropriate. By default, systems will have a flowsheet created: My Medical Information. This flowsheet contains three layouts–one for medications, one for allergies, and one for immunizations. These flowsheets can be modified, if necessary. The My Medical Information flowsheet will allow portal users to update their medications, allergies, and immunizations within the portal. These changes will update the patient's chart in real-time.

Databases on RC202009 and newer now have the ability to allow demographic information completed from a questionnaire to populate Enterprise Health or WebChart directly.  The observations used in the questionnaire should be the ‘p.demo observations' or ‘pev. demo observations'.   For discrete data that is not free texted (such as Sex, Race, Ethnicity) the values entered into the discrete fields in the observation screen need to match what is being stored in WebChart.  For example, to proper transfer Sex from a portal questionnaire to WebChart or Enterprise Health, the values that need to be entered into the discrete data fields in the observation screen must be F, M and UNK.

If users should only be allowed to view but not edit their medical information (i.e., allergies, medications and immunizations), a new flowsheet will need to be created. Users can create a new flowsheet or simply copy the My Medical Information flowsheet and edit it, where necessary. For example, the *view only* flowsheet could contain four (4) layouts labeled Demographics, Allergies View Only, Medications View Only, and Immunizations View Only.

#### Other Health Resources

The *Other Health Resources* module allows for additional resources to be added to the portal, as needed. These resources can be internet or intranet resources, and there is no limit to the number of resources that can be added.

* <strong>Custom Module Name</strong>: The name defaults to <em>Other Health Resources</em>. Customize up to 60 characters.
* <strong>Add additional health resources</strong>: To add additional health resources, simply click the <strong>Add Health Resource</strong> button. This will place a templated NoMoreClipboard health resource panel at the bottom of the list of resources.
* To update/edit a health resource, click on any area within the resource panel:
1. <strong>Title</strong> (NOMORECLIPBOARD): This is a free-text field. Click on the title and update with the preferred title of the health resource.
2. <strong>Summary</strong>: This is a free-text field. Click anywhere in the NoMoreClipboard summary and update the text with a preferred description/summary of the health resource.
3. <strong>Link</strong> (NMC HOME): Clicking on the provided link will open an <strong>Edit Link</strong> window. Determine the link type (i.e., a normal link, a form, or a pre-built questionnaire), the link title, and the URL of the webpage. Click <strong>Submit</strong>, when finished. The Health Resource panel can only accommodate up to six links, and the link is not removable from the Health Resource panel.
4. <strong>Arrows</strong>: Use the arrows in the bottom-left corner to move the health resource panel to an alternative location on the page.
5. <strong>Add Link</strong>: Click this button to add additional links to the health resource.
6. <strong>Delete</strong>: Click this button to remove the health resource from displaying on the portal. The button changes to <strong>Undelete</strong>, so the panel can be replaced prior to submitting, if necessary.

* When all edits have been completed, click the <strong>Submit</strong> button.

## Helpful Tips/Information

Below is information pertaining to a few aspects of portal management and utilization (e.g., toggling between portals, editing layouts, or customizing help bubbles), which is intended to help with improving understanding and overall use of the portal functionality.

#### Portal Access

Certain relationships need to exist before a patient can access the patient portal. For example, a patient chart must have a relationship to the applicable provider organization (the portal). This can be done manually from the Summary chart tab of a patient's chart, by using the Contacts patient portlet and adding the Provider Organization relationship. Automation of setting the provider organization relationship will occur if the NMC, Portal, Default Portal system setting has been configured to include the Pat ID of the portal, which can be found at the end of the portal website URL. Once a patient uses their activation code to create their portal account, a user account (found under the Access chart tab of the Control Panel) will also be created. This creates a link between the patient chart and the user account. A relationship of portal user will automatically be set.

{{% info %}}
The same relationships (as outlined above) need to exist for a WebChart user to access the portal from the Portals portlet of the Quick View screen. The user account will need to be linked to a test patient chart and the test patient chart will need to have the Provider Organization relationship set. Linking a user account to a test patient chart can be done either from the Contacts portlet of the Summary chart tab, on the test patient's chart, or from the Edit User Screen in Access Control. In the Edit User Screen, select the *Edit patients linked to user* link to join the user account to the test patient chart. Either way, ensure that the link between the user account and test patient chart is set to a role of Portal User.
{{% /info %}}

### Layouts

Layouts are simply HTML pages that have been developed and used in {{% system-name %}} for several things, such as print definitions, chart tabs, system reports, email notifications, etc. The following layouts can be modified when first building a portal, so that the verbiage can be customized per client/portal.

{{% note %}}
Any layouts that list the MIE helpdesk number for portal assistance must be changed to the client's preferred contact support number, unless specific contracting between the client and MIE has been finalized, where MIE will provide portal support and/or password reset support.
{{% /note %}}

#### Portal Activation Code Instruction Layout

When an activation code is generated from the Portal portlet from the patient summary screen, a layout is triggered with an available link designed to create a Portal Activation Code Instructions document. Once the Portal Activation Code Instruction document is generated from the patient summary screen, it will store in the Document Summary chart tab by default. The document can also be mapped to additional chart tabs if desired.  A ticket may be opened with MIE to edit and modify this layout, as appropriate, per the client's business needs.

![](../patient-portal-first-time-setup-and-configuration.assets/4bc8ea2d5ba0d0bddfa5df790c7bb660.png)

#### Welcome to the Portal Email Layout

When a patient/employee signs up for the portal successfully, the following layout will be triggered, sending out the email below. A ticket may be opened with MIE to edit and modify this layout, as appropriate, per the client's business needs.

![](../patient-portal-first-time-setup-and-configuration.assets/fb2e8e453d660f5226053c6d78dc29b7.png)

#### Password Reset Email Notification Layout

To enable automation of resetting portal passwords, the system setting of ‘Reset PinCode Call URL' should be set as follows: https://asterisk.med-web.com/password_reset_caller.php?greeting=mie&short=true

Whenever a portal user attempts to reset their portal password, an email notification will be sent to the portal user. This email is sent as soon as the portal user clicks the Forget Password link and enters their username and security question.  The verbiage in this screen is C code and the phone number listed pulls from the value in the system setting of System>Tech Support>Phone Number

![](../patient-portal-first-time-setup-and-configuration.assets/6ca78e460bbc731d865ebbff0a965848.png)

#### Resetting Portal Password via Email Layout

When portal users want to reset their password using the email option, versus other options, such as cell or home phone, this is the email users will receive. This screen is layout driven and may need to be added if it doesn't exist in the database.  The layout name is ‘Password Reset PinCode Email'. A ticket may be opened with MIE to edit and modify this layout, as appropriate, per the client's business needs.

![](../patient-portal-first-time-setup-and-configuration.assets/0821f4b1b4b1e42345f9f2035ef58da6.png)

#### Identity Verification Layout

When users click the Forget Password link and provide their username and security question answer, the following dialogue box displays. Users will be asked how they wish to reset their password (i.e., email, cell phone, home phone, work phone). The MIE technical support number should be replaced with the client's phone number and that is controlled from the value entered in the System>Tech Support>Phone Number system setting.

![](../patient-portal-first-time-setup-and-configuration.assets/7173443336ac2697d6e40a6533f6a42b.png)

### Help Bubble Icons

Every page or screen of a portal can have a help bubble available in the top bar of the portal page. Each help bubble on every page can point to different help documentation, as needed. The following portal pages can support customized help documentation:

**Main screen**: Every portal comes with pre-loaded help documentation and verbiage on the main portal screen, which can be customized as needed.

**Other Health Resources**: Every portal comes with pre-loaded help documentation and verbiage for the Other Health Resources screen, which can also be customized as needed.

**My Medical Information & Message Center**: Every portal comes with pre-loaded help documentation and verbiage for the My Medical Information and Message Center modules. These two modules use the same layout and currently cannot be separated; however, they can be customized, as needed.

#### Layout Manager

All of the portal help bubbles and help documentation and verbiage is managed from the {{% syslink "Layout Manager" "f=admin&subfunc=layout_manager&t=Layout+Manager" %}} of the {{% syslink "Control Panel" "f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin" %}} . To see a list of existing help bubble layouts, simply search for MIEHELP.

![](../patient-portal-first-time-setup-and-configuration.assets/239857ccbce689cf1d890668f9e36350.png)

To make edits to any of the existing layouts:

1. Click the <strong>Edit</strong> link next to the respective module, and modify the verbiage, where needed.

To add a new MIEHELP module layout:

1. Click {{% syslink "Add Layout" "f=admin&subfunc=layout_manager&opp=add" %}} .
2. Enter <strong>MIEHELP</strong> for the Module Name.
3. Enter <strong>NMC:UPortal Settings</strong> in the Name field
4. Enter <strong>==Settings==</strong> in line 1, and hit Enter to add the new help documentation verbiage.

To add a new layout for the Message Center/My Medical Information screen:

1. Click {{% syslink "Add Layout" "f=admin&subfunc=layout_manager&opp=add" %}} .
2. Enter <strong>MIEHELP</strong> for the Module Name.
3. Enter <strong>NMC:UPortal Message Center</strong> in the Name field
4. Enter <strong>==Message Center/My Medical Information==</strong> in line 1, and hit Enter to add the new help documentation verbiage.

![](../patient-portal-first-time-setup-and-configuration.assets/fca0151db137919dc87535fb98c09d9d.png)

### Toggle Between Multiple Portals

In some cases, portal users may have access to more than one portal that has been setup/configured in the same WebChart database. In such cases, users who have access to more than one portal will see **Portal Selection** from the menu options. Once the user has established their username and password for one portal, that same username and password can be used to gain access to any of the additional portals that are set up in the database. There is no need to generate a new activation code for each additional portal a portal user accesses.

![](../patient-portal-first-time-setup-and-configuration.assets/8d168f72cd3be66d15d81af9b1463d9e.png)

### Portal Activation Code Report

The Portal Activation Code report will display the date an activation code was generated for a patient chart along with the date (if applicable) that the activation code was used to create a portal account. The users listed on this report are only those users who have actually created their portal account. The report columns include MRN, patient name, DOB, Sex, Code Creation Date, Activation Date, Portal Name (i.e., the name of the provider organization). This report can be found by going to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} side menu tab and then selecting the {{% syslink "Utilization" "f=layout&module=reports&name=Utilization&tabmodule=reports&tabmodule=reports&t=Utilization&tabselect=Utilization" %}} chart tab. This report can be filtered by a date range, partition, and provider organization (portal).

![](../patient-portal-first-time-setup-and-configuration.assets/0f5aef5dcb513d20cb907a240bff2129.png)

{{% only sys="wc" %}}

### WebChart Database Gaps/Punchlist

WebChart databases may or may not have all the needed chart types, chart tabs, or necessary components to configure a patient portal. The following is a list of potential gaps that need to be checked and rectified in order to complete the patient portal configuration as outlined in this patient portal setup guide.

1. Add or enable the <strong>Provider Management</strong> menu item.
2. Add <strong>Chart Types</strong> chart tab, if missing.
    1. Ensure that <strong>Portal</strong> chart type exists.
    2. Ensure there is a <strong>Provider Organization</strong> chart type.

{{% info %}}
A provider Organization partition needs added if it does not already exist, using the Partition Manager.

![](../patient-portal-first-time-setup-and-configuration.assets/a5ca45226e1064f1ac5edad2048f3e61.png)
{{% /info %}}

3. Ensure that there is a <strong>Portal Setup</strong> and <strong>Patient Portal</strong> chart tab.
    3. Verify that the Portal Setup and Patient Portal chart tabs are set to the <em>Portal</em> chart type.
4. Ensure that there is an <strong>Overview (PO)</strong> chart tab and that it is set to <em>Active</em>.
    1. Verify that the Overview (PO) chart tab is set to a <em>Provider Organization</em> chart type.
5. Ensure the <strong>Pat Portal Invite Email</strong> layout exists. If it does not exist, please reach out to Application Support, so a ticket can be assigned to a portal developer to have it created.
    1. Verify the content in the layout is edited with the correct portal name if this email layout is copied from another database.
6. Add a new security role of <strong>Patients</strong> and a new department called <strong>Patients</strong> (these names must match EXACTLY). Set the following security settings for the Patients security role:
    1. <strong>Limited Access</strong> = Yes
    2. <strong>Limit to Portal</strong> = Yes
    3. <strong>Limited to Default Tab</strong> = No
    4. <strong>Manage Observations</strong> = Edit
    5. <strong>Document Permissions</strong> = Edit
    6. <strong>Conditions</strong> = Edit
    7. <strong>Demographics</strong> = Edit
    8. <strong>Manage Settings</strong> = Manage Own Settings
    9. <strong>View Encounters</strong> = Yes
    10. <strong>Sign Document</strong> = Yes
    11. <strong>View Preliminary Documents</strong> = Yes
    12. <strong>Manage Users</strong> = Self
    13. <strong>Manage User Patients</strong> = Yes
    14. <strong>Rx Manager</strong> = Edit (This is only set if patients need to enter their preferred pharmacy in the Settings of the portal.)
7. Set the <strong>NMC, Signup, New User Realm</strong> system setting to <em>Patients</em>.
8. Enable or add <strong>WebChart, NMC, NMC System</strong> system setting by setting the value to <em>1</em> (one).
9. If clients are not going to utilize both NMC and the patient portal, complete the following:
    1. Disable the <strong>E-Chart, Encounters, Show NMC link in view</strong> system setting (i.e., set value to 0).
    2. Set <strong>WebChart, Encounters, Send clinical summary to NMC</strong> system setting to <em>-1</em>.
        1. Verify that the WCPATED doc type (Clinical Summary/Patient Education) does not contain the NMC information located at the bottom of the document.

{{% /only %}}
