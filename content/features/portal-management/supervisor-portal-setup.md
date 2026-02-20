---
id: '1FEbsPBy4cewT-M-3sUVazzJyqgUV6XfXTMY9xoKNezs'
title: 'Supervisor Portal Setup'
date: '2026-02-11T15:07:36.204Z'
version: 588
lastAuthor: 'squarterman'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1FEbsPBy4cewT-M-3sUVazzJyqgUV6XfXTMY9xoKNezs'
wikigdrive: 'v2.16.0'
---
{{% system-name %}} offers various portal options, depending on the needs of the client. The **Supervisor Portal**, often referred to as the **Supervisor Portal**, **Agency Portal**, or **Leadership Portal**, streamlines employee engagement and tracking, offering easy access to due lists, employee work statuses, as well as health surveillance. Supervisors can not only view their personal information, but they can also view their employees' restrictions, lost time, work status, schedule appointments, submit questionnaires on the employee's behalf, or any additional information custom to the business needs.

## Supervisor Portal

To begin configuring the Supervisor Portal, it first needs to be enabled from the **General Configuration** section of the Portal Setup tab. Navigate to the Employer Organization that this Supervisor Portal needs configured on. Then select the Portal Management tab, the Portal Setup tab will display beneath it.

### Initial Setup

Again, before configuring the Supervisor Portal, it must be enabled within the system. To do this, perform the following:

1. Navigate to the <em>Control Panel->Employer Organizations</em>
2. Type the name of the EO, and click the <strong>Search</strong> button.
3. Locate the EO Name, and click the hyperlink. In this example, we will be using <em>Better Corp.</em>
4. Locate and select the <em>Portal Setup</em> tab.
5. Click on the <strong>General Configuration</strong> section header to open and select the appropriate features to enable all portals that are necessary.

![](./supervisor-portal-setup.assets/1944d98e352760503335666f8275eb27.png)

6. Click the <strong>Next</strong> button, or close the section by simply clicking the section header, to save the changes.
7. With the Supervisor Portal setup completed, navigate to the <em>Supervisor Portal</em> tab of the EO, to begin work on that portal's configurations. In most systems, this tab is a subtab under the <em>Portal Management</em> tab.


![](./supervisor-portal-setup.assets/9bd7dd812d2246dd843404a5617e1a0d.png)

8. Any permissions or settings that need to be addressed can be found under the Security Requirements section near the top of the page, and the configuration and modules can be adjusted, using the remaining sections, as needed.

![](./supervisor-portal-setup.assets/2c0a5dafb3b0047cd8e1d88e1916da63.png)

9. To begin the customization, click the <strong>Configuration</strong> section header to open and begin editing.


![](./supervisor-portal-setup.assets/07e395c554d7eba9264c011cbbc31e76.png)

### Configuration

Features

* <strong>Single function portal</strong>: When this option is selected, the portal will not default to the Message Center, but rather automatically forward to the first module in the Module List. Unless the Message Center is the desired function, Disable Message Center must be selected, below.
* <strong>Disable Message Center</strong>: By default, the Message Center will be displayed if the chart tab is configured; however, check this option to force the Message Center to be hidden for this portal.
* <strong>Enable Prefill From Context</strong>: Allows supervisors to prefill previous questionnaire answers for configured flowsheets, based on existing contexts like Documents, Encounters, or Cases, created by the selected patient.

Miscellaneous

* <strong>Replacement text for supervisor</strong>: The text placed in this field will update and replace any instance of "supervisor" found within the portal. Limit 40 characters.
* <strong>Custom color</strong>: Use the color picker, or provide a hex color code, to customize the portal color, if desired.

Home Page

* <strong>View Sample</strong> (
    ![](./supervisor-portal-setup.assets/e90ca94852bca1255ff5a0074613a42c.png)
    ): For a sample of the portal welcome screen, click the View Sample button, at any time. Clicking this button will provide a Portal Sample that displays how editing specific features will be seen from an end-user perspective. To exit the Portal Sample, click the red ‘x' in the upper-right corner.

![](./supervisor-portal-setup.assets/67b5ef8147665c28980e597991cfdc80.png)

* <strong>Brand for portal welcome message</strong>: The name or brand to be used in the Welcome Message. By default, the word NoMoreClipboard will be populated, but this field can be updated with up to 25 characters. Click Show Sample to see where this occurs.
* <strong>Description for portal welcome message</strong>: The description provided for the Portal Welcome Message. Click Show Sample to see where this occurs.
* <strong>Welcome image ID</strong>: Using the link to the {{% syslink "System Files Manager" "f=admin&s=system_files&tabmodule=admin&tabselect=System+Files" %}} , upload an image to be seen on the portal Welcome screen. Click <strong>Add System File</strong>, select the preferred image, storing it as a <em>JPEG image file</em>, and set the alias as <strong>supervisor-landing-43</strong>. The desired dimensions are 650 x 412.
* <strong>Message ticker</strong>: Use the message ticker to display important information, or messages, at the bottom of the portal Welcome page. The ticker will rotate through each message and scroll right to left, for long messages. Additional messages can be added, updated, or edited using the <strong>Add/Edit Messages</strong> links. A SuperUser security permission is required for adding or editing messages

{{% tip %}}
Messages are constructed using a limited markup that allows bold, italic, and linking. For help with the markup, click the help icon in the top-right of the page. Click **Provide Help**, and then click the **Get Editing Help** link.
{{% /tip %}}

Message Center

* <strong>Configuration</strong>: Clicking the <strong>Add messages types</strong> link will take users to the currently selected chart tab. The <strong>View Preliminary Documents</strong> security setting must be set to <strong>Yes</strong> for users to view documents.
* <strong>Questionnaires for Supervisors' Review</strong>: This option allows users to set exactly which questionnaires need reviewed and responded to by supervisors, when completed.
* <strong>Employer Response Instructions</strong>: Use this field to provide any ad hoc instructions necessary for supervisor responses.
* <strong>Supervisor Questionnaire Tasks</strong>: This option allows users to configure tasks to order questionnaires for supervisors, based on questionnaires completed by employees.
* <strong>Custom Message Center title</strong>: The text placed in this field will update and replace the Message Center title. Limit 60 characters.
* <strong>Custom Message Center header</strong>: The text placed in this field will update and replace the Message Center header. Limit 60 characters.

When finished configuring the portal, click the **Next** button to save and close the section, and proceed to the **Select Modules** section.

### Select Modules

The expanded Select Module section allows for configuration of each module, if necessary, and deactivation of specific modules, if preferred.

1. Clicking on the <strong>Select Modules</strong> header will open a window with all of the default-enabled modules of the Supervisor Portal checked. Add or remove modules, as needed, and click the <strong>Save</strong> button.

![](./supervisor-portal-setup.assets/86e2f7eeb4c04afdb176c19e6f1601a8.png)

2. There are twenty-one (21) modules that can be selected within the Supervisor Portal.
    * <strong>Case Review Status</strong>
    * <strong>EJTA</strong>
    * <strong>Form Link 1</strong>
    * <strong>Form Link 2</strong>
    * <strong>Form Link 3</strong>
    * <strong>Health Surveillance</strong>
    * <strong>Layout Link 1</strong>
    * <strong>Layout Link 2</strong>
    * <strong>Layout Link 3</strong>
    * <strong>Order Status</strong>
    * <strong>Orders</strong>
    * <strong>Questionnaire Link 1</strong>
    * <strong>Questionnaire Link 2</strong>
    * <strong>Questionnaire Link 3</strong>
    * <strong>Reports</strong>
    * <strong>Schedule Appointments</strong>
    * <strong>Send a Message</strong>
    * <strong>Supervisor Other Health Resources</strong>
    * <strong>Supervisor Scheduling</strong>
    * <strong>Support</strong>
    * <strong>Work Status</strong>
3. All of the module names can be edited or renamed using the <strong>Custom Module Name</strong> field, under each section heading.

{{% info %}}
Below is a list of all of the modules *which allow more than simply a module name change*, along with their available configurations (i.e., EJTA, Reports, and Send a Message.)
{{% /info %}}

#### Employee Job Task Analysis (EJTA)

The EJTA module can be updated with a more specific name, as well as any employee-approved task template needed for EJTA.

1. <strong>Custom Module Name</strong>: The name defaults to <em>EJTA</em>. Customize up to 60 characters.
2. <strong>Specify EJTA document type</strong>: Specify the document type to be used for EJTA.
3. <strong>Specify EJTA employee approved task template name</strong>: Use the drop-down to select the appropriate employee-approved task template to be associated with the module.

#### Questionnaire Link 1

It is not recommended for use in databases on RC202503. Opt to use the Message Center - Send a Message feature instead. If utilized in databases on RC202503, the questionnaires utilized should be non-patient/non-employee specific.

#### Questionnaire Link 2

It is not recommended for use in databases on RC202503. Opt to use the Message Center - Send a Message feature instead. If utilized in databases on RC202503, the questionnaires utilized should be non-patient/non-employee specific.

#### Questionnaire Link 3

It is not recommended for use in databases on RC202503. Opt to use the Message Center - Send a Message feature instead. If utilized in databases on RC202503, the questionnaires utilized should be non-patient/non-employee specific.

#### Reports

The Reports module

1. <strong>Custom Module Name</strong>: The name defaults to <em>Reports</em>. Customize up to 60 characters.
2. <strong>Instruction text</strong>: This field may be used to supply optional instructions for utilizing the Supervisor Reports page.
3. <strong>Available reports</strong>: Use the selector to choose all reports to be displayed on the Reports page. Reports with the Employer Portal Report category will display in the list for selection.

#### Schedule Appointments (supported for databases on release 202503 and newer)

The *Schedule Appointments* module can be updated to allow certain functionality, as well as to display warnings or specified text, as needed.

* <strong>Custom Module Name</strong>: The name defaults to <em>Schedule Appointments</em>. Customize up to 60 characters.
* <strong>Schedule an Appointment</strong>: This selection allows users to schedule appointments from their portal by signing up for an appointment slot, based on appointment types and schedules set up within the system. In order for the schedules to interact with the portal, the location linked to each schedule needs to be added to the <strong>Locations</strong> chart tab of the Employer Organization chart. Appointment types that are available for selection are managed from the appointment <em>Schedules</em> tab in the <em>Scheduling</em> module.
* <strong>Request an Appointment</strong>: This selection allows users to request appointments through their portal by sending an appointment request with their preferences and appointment information to the clinic. Once verified, appointments will display on the user's <em>My Appointments</em> page.

{{% note %}}
System Administrators can select either ‘Schedule an Appointment' or ‘Request an Appointment' for the type of portal scheduling desired. Only one method may be selected.
{{% /note %}}

* <strong>Use Checkin:</strong> When checked, allows employees to check into the Waiting Room station for their existing appointment. The following system settings control when the option will appear on the portal: ‘Minutes Allowed Before Start','Minutes Allowed After Start'.

{{% note %}}
System Administrators should note that Schedule Appointment configuration options selected will apply to both the Employee **and** Supervisor Portal.
{{% /note %}}

* <strong>Disable appointment confirmation/cancellation emails:</strong> When checked, appointment confirmation and cancellation emails will not be sent.
* <strong>Allow scheduling past due appointments</strong>: With this enabled, users will be able to schedule past due appointments.
* <strong>Disable calendar searching:</strong> Hides the calendar when scheduling an appointment, to prevent selecting dates not present in the current drop-down list.
* <strong>Show "First available provider" option when selecting a provider</strong>: If enabled, the option for <em>First available provider</em> will display to users when scheduling appointments.
* <strong>Force any available provider</strong>: This disables the Select Provider field from displaying on the portal, automatically assigning a provider based on the appointment type and availability.
* <strong>Show appointments regardless of visible date:</strong> When checked, appointments will be displayed on the portal regardless of their visible date. When scheduling these appointments the available times will begin from the appointment's visible date.
* <strong>Days to show past appointments</strong>: Use this field to set the number of days of past appointments to display.
* <strong>Days out to search for</strong>: This field can be used to set the number of days being searched, out from the present day.
* <strong>Days out before showing days</strong>: This field determines how many days before having to show additional days, out from the present day.
* <strong>Warning message for past due appointments</strong>: Use this field to free text a warning message that will be displayed next to an appointment past due date.

{{% note %}}
This field will only display if *Allow scheduling past due appointments* IS NOT selected.
{{% /note %}}

* <strong>Alert text to show at top of form</strong>: Use this field to display an alert or memo at the top of the page (e.g., "If this is a medical emergency, please dial 9-1-1.").
* <strong>Appointment types excluded from portal:</strong> Excludes these types of appointments from being displayed in the portal.
* <strong>Disable portal scheduling comments:</strong> Hides the ‘Comments' section on the portal scheduling page.
* <strong>Appointment types that require comments:</strong> Require comments to be entered for these appointment types when scheduled<strong>.</strong>
* <strong>Comments input instructions:</strong> This field will update the placeholder text for the comments input when an appointment type that requires comments is enabled.
* <strong>Schedule a new appointment button text:</strong> This field will replace the button text that is used to schedule a new appointment; displayed at the bottom of the 'My Appointments' module within the portal.

If the Employer Organization has defined specific locations in which this supervisor may schedule appointments and configured the location on the Employer Organization **Locations** tab, then any schedules associated with that location will display at the bottom of the Additional Options section.

#### Send a Message

The Send a Message module can have its name and header customized, the sending instructions modified, or the message types configured, to determine what can/cannot be sent to and from the portal:

1. <strong>Custom Module Name</strong>: The name defaults to <em>Send a Message</em>. Customize up to 60 characters.
2. <strong>Replacement text for header bar</strong>: The header bar on the <em>Send a Message</em> page, in the portal, defaults to "Send a Message". Customize this header bar, if desired.
3. <strong>Instruction text</strong>: Use this field to add any additional, optional instructions for the <em>Send a Message</em> page.
4. <strong>Restrict employee autocomplete by partition</strong>: Use this field to add optional partition restrictions for the employee autocomplete available to Supervisor Contact users.
5. <strong>Allowed message types for sending within portal</strong>: These message types determine what types of messages can/cannot be sent to/from the portal. The defaults are:
    * Incident Report
    * Incident Report Supervisor Review

{{% tip %}}
Click the minus button to remove any message type, or click the Add message types link, to add an additional message type, as needed.
{{% /tip %}}

![](./supervisor-portal-setup.assets/2ac5c4427f4680b2abbd0d0806354722.png)

{{% note %}}
Supervisor Message Types are Questionnaire ORDERS. The list of available message types are configured in the *Orders-Pick Builder* *Supervisor Messages* picklist. Once the orders picklist has been configured, the orders (message types) will display within the portal configuration **Send a Message** configuration portlet.


{{% /note %}}

![](./supervisor-portal-setup.assets/e29a7ac049a8b078cb0e0812c4bfc429.png)

## Adding Users & Linking to Supervisors (supported for databases on release 202503 and newer)

Every user intending to use the portal needs to be added by associating the user and their username with the necessary role. To review and edit roles and portal access, perform the following:

### Adding Users

1. In most cases employee's charts and user accounts are automatically created via an HR interface. User accounts and passwords are typically configured for Single Sign On (SSO) and managed outside of {{% system-name %}}.
2. Users requiring Supervisor Portal access must have a <strong>Username/Email</strong>, <strong>Primary Department</strong> set to ‘Employees', <strong>Current Status</strong> set to ‘Active', <strong>Security Role</strong> set to ‘Employees', and <strong>Def. User Role</strong> set to ‘User - Limited Access'.

![](./supervisor-portal-setup.assets/55c162e811dcba10068693a145792eda.png)

3. User accounts must also have Contact Relationship types set for ‘Self' and "Portal User' to access the portal. Typically, this is automatically preconfigured by an HR Interface and/or during the manual registration process. The contact relationship types can be added or viewed from the user account by selecting <strong>Edit Patients Linked to User</strong>.

![](./supervisor-portal-setup.assets/03e6792cda58b21710300fd147a05074.png)

* However, it is often easier to manage <strong>Contact</strong> relationship types from the <strong>Contacts</strong> portlet on the patient chart <strong>Summary</strong> tab.

![](./supervisor-portal-setup.assets/d4ecd850a8062de903da1df0a3e2bcf7.png)

![](./supervisor-portal-setup.assets/666ae59974a4d9ceff2e6ee12bf4896e.png)

4. Employees must also have a <strong>Relationship</strong> to the employer's portal, as identified in the <strong>Name</strong> field, with the <strong>Relation Type</strong> set to ‘Employer'. This relationship is also typically managed by an HR feed.

![](./supervisor-portal-setup.assets/58dcb87ee7e970a1e3c56d3f261a0290.png)

{{% tip %}}
To remove a role from the table, simply click the minus button. After all changes are made, click the **Submit** button.
{{% /tip %}}

### Linking to Supervisor

Linking users to a supervisor allows the managing user to log into the portal and see the subordinates' restrictions, lost time, work status, schedule appointments and report an injury/illness.  To link users to a supervisor:

1. Navigate to the employee chart <strong>Summary</strong> tab and manage the information from the <strong>Contacts</strong> portlet.

![](./supervisor-portal-setup.assets/d4ecd850a8062de903da1df0a3e2bcf7.png)

2. Use the autocomplete in the <strong>Contacts</strong> list and search for the supervisor's name (<strong>User Name</strong> field), enter the <strong>Role</strong> of ‘Supervisor' and click the <strong>Add</strong> button. When complete, select the <strong>Submit</strong> button to save any edits. The Supervisor should not be listed multiple times and/or with multiple role types. The supervisor name should display once only with the Role of Supervisor.

![](./supervisor-portal-setup.assets/36e2f8812af3014a2f2780246458f075.png)
