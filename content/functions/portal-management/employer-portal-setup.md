---
id: '1FEbsPBy4cewT-M-3sUVazzJyqgUV6XfXTMY9xoKNezs'
title: 'Employer Portal Setup'
date: '2024-05-15T16:24:52.378Z'
version: 250
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1FEbsPBy4cewT-M-3sUVazzJyqgUV6XfXTMY9xoKNezs'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} offers various portal options, depending on the needs of the client. The **Employer Portal**, often referred to as the **Supervisor Portal**, **Agency Portal**, or **Leadership Portal**, streamlines employee engagement and tracking, offering easy access to due lists, employee work statuses, as well as health surveillance. Supervisors can not only view their personal information, but they can also view their employees' restrictions, lost time, work status, or any additional information custom to the business needs. To more fully address preferred configurations and review available options and features, utilize the {{% syslink "Provider Management" "f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+" %}} side menu to access and edit the {{% syslink "Employer Portal" "f=chart&s=pat&t=Employer+Portal&v=dashboard&pat_id=43" %}} , as needed.

## Employer Portal

To begin configuring the Employer Portal, it first needs to be enabled from the **General Configuration** section of the {{% syslink "Portal Setup" "f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=43" %}} tab. Utilize the Provider Management search to locate the Provider Organization (PO) *chart* that will house the portal configurations.

### Initial Setup

Again, before configuring the Employer Portal, it must be enabled within the system. To do this, perform the following:

1. Navigate to the {{% syslink "Provider Management" "f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+" %}} side menu.
2. Type the name of the PO, and click the <strong>Search</strong> button.
3. Locate the PO Name, and click the hyperlink. In this example, we will be using {{% syslink "Better Corp" "f=chart&s=pat&pat_id=43" %}} .
4. Locate and select the {{% syslink "Portal Setup" "f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=43" %}}  tab.
5. Click on the <strong>General Configuration</strong> section header to open and select the appropriate features to enable all portals that are necessary.

    ![](../employer-portal-setup.assets/1944d98e352760503335666f8275eb27.png)

6. Click the <strong>Next</strong> button, or close the section by simply clicking the section header, to save the changes.
7. With the portal setup completed, locate the {{% syslink "Employer Portal" "f=chart&s=pat&t=Employer+Portal&v=dashboard&pat_id=43" %}} tab of the PO, to begin work on that portal's configurations.

    ![](../employer-portal-setup.assets/912806c78f3c4942295109fde265a732.png)

8. Any permissions or settings that need to be addressed can be found under the Security Requirements section near the top of the page, and the configuration and modules can be adjusted, using the remaining sections, as needed.

![](../employer-portal-setup.assets/b9bd061944738fc2da43103f05cdc6cf.png)

9. To begin the customization, click the <strong>Configuration</strong> section header to open and begin editing.

### Configuration

Features

* <strong>Single function portal</strong>: When this option is selected, the portal will not default to the Message Center, but rather automatically forward to the first module in the Module List. Unless the Message Center is the desired function, Disable Message Center must be selected, below.
* <strong>Disable Message Center</strong>: By default, the Message Center will be displayed if the chart tab is configured; however, check this option to force the Message Center to be hidden for this portal.
* <strong>Enable Prefill From Context</strong>: Allows supervisors to prefill previous questionnaire answers for configured flowsheets, based on existing contexts like Documents, Encounters, or Cases, created by the selected patient.

Miscellaneous

* <strong>Replacement text for employer</strong>: The text placed in this field will update and replace any instance of "employer" found within the portal. Limit 40 characters.
* <strong>Custom color</strong>: Use the color picker, or provide a hex color code, to customize the portal color, if desired.

Home Page

* <strong>View Sample</strong> (
    ![](../employer-portal-setup.assets/e90ca94852bca1255ff5a0074613a42c.png)
    ): For a sample of the portal welcome screen, click the View Sample button, at any time. Clicking this button will provide a Portal Sample that displays how editing specific features will be seen from an end-user perspective. To exit the Portal Sample, click the red ‘x' in the upper-right corner.

![](../employer-portal-setup.assets/67b5ef8147665c28980e597991cfdc80.png)

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
* <strong>Employer Response Instructions</strong>: Use this field to provide any ad hoc instructions necessary for employer responses.
* <strong>Supervisor Questionnaire Tasks</strong>: This option allows users to configure tasks to order questionnaires for supervisors, based on questionnaires completed by employees.
* <strong>Custom Message Center title</strong>: The text placed in this field will update and replace the Message Center title. Limit 60 characters.
* <strong>Custom Message Center header</strong>: The text placed in this field will update and replace the Message Center header. Limit 60 characters.

When finished configuring the portal, click the **Next** button to save and close the section, and proceed to the **Select Modules** section.

### Select Modules

The expanded Select Module section allows for configuration of each module, if necessary, and deactivation of specific modules, if preferred.

1. Clicking on the <strong>Select Modules</strong> header will open a window with all of the default-enabled modules of the Employer Portal checked. Add or remove modules, as needed, and click the <strong>Save</strong> button.

![](../employer-portal-setup.assets/2cb219d178f197f5e72c2b5e5ab15c8b.png)

2. There are ten (10) modules that can be selected within the Employer Portal, as well as the ability to link to questionnaires/forms, as needed:
    1. <strong>Case Review Status</strong>
    2. <strong>EJTA</strong>
    3. <strong>Health Surveillance</strong>
    4. <strong>Order Status</strong>
    5. <strong>Orders</strong>
    6. <strong>Reports</strong>
    7. <strong>Send a Message</strong>
    8. <strong>Supervisor Scheduling</strong>
    9. <strong>Support</strong>
    10. <strong>Work Status</strong>
    11. <strong>Questionnaires/Forms</strong>
3. All of the module names can be edited or renamed using the <strong>Custom Module Name</strong> field, under each section heading.

{{% info %}}
Below is a list of all of the modules *which allow more than simply a module name change*, along with their available configurations (i.e., EJTA, Reports, and Send a Message.
{{% /info %}}

#### Employee Job Task Analysis (EJTA)

The EJTA module can be updated with a more specific name, as well as any employee-approved task template needed for EJTA.

1. <strong>Custom Module Name</strong>: The name defaults to <em>EJTA</em>. Customize up to 60 characters.
2. <strong>Specify EJTA document type</strong>: Specify the document type to be used for EJTA.
3. <strong>Specify EJTA employee approved task template name</strong>: Use the drop-down to select the appropriate employee-approved task template to be associated with the module.

#### Reports

The Reports module

1. <strong>Custom Module Name</strong>: The name defaults to <em>Reports</em>. Customize up to 60 characters.
2. <strong>Instruction text</strong>: This field may be used to supply optional instructions for utilizing the Employer Reports page.
3. <strong>Available reports</strong>: Use the selector to choose all reports to be displayed on the Reports page. Reports with the Employer Portal Report category will display in the list for selection.

#### Send a Message

The Send a Message module can have its name and header customized, the sending instructions modified, or the message types configured, to determine what can/cannot be sent to and from the portal:

1. <strong>Custom Module Name</strong>: The name defaults to <em>Send a Message</em>. Customize up to 60 characters.
2. <strong>Replacement text for header bar</strong>: The header bar on the <em>Send a Message</em> page, in the portal, defaults to "Send a Message". Customize this header bar, if desired.
3. <strong>Instruction text</strong>: Use this field to add any additional, optional instructions for the <em>Send a Message</em> page.
4. <strong>Restrict employee autocomplete by partition</strong>: Use this field to add optional partition restrictions for the employee autocomplete available to Supervisor Contact users.
5. <strong>Allowed message types for sending within portal</strong>: These message types determine what types of messages can/cannot be sent to/from the portal. The defaults are:
    1. Incident Report
    2. Incident Report Supervisor Review

{{% tip %}}
Click the minus button to remove any message type, or click the Add message types link, to add an additional message type, as needed.
{{% /tip %}}

## Adding Users & Linking to Supervisors

Every user intending to use the portal needs to be added by associating the user and their username with the necessary role. To review and edit roles and portal access, perform the following:

### Adding Users

1. Navigate to the {{% syslink "Control Panel" "f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin" %}}  side menu.
2. Click the {{% syslink "Access Control" "f=admin&t=security&tabmodule=admin&tabselect=Access&ts_caption=Access+Control" %}}  tab.
3. Using the <em>Search</em> field and filters, click <strong>Go!</strong> to locate the user needing access to the portal.
4. Click the <strong>Edit</strong> link in the <em>Options</em> column.
5. In the upper-right of the screen, locate and click the <strong>Edit Patients Linked to User</strong> link.
    1. All users needing access to the portal will need an email on their profile, and the <strong>Def. User Role</strong> field set to <strong>User-Limited Access</strong>.
6. Once on the <em>Patients Linked to User</em> screen, ensure the user is listed in the table, twice:
    1. The user should be listed with the role of <strong>Self</strong>; and
    2. He/She should be listed with the role of <strong>No More Clipboard User</strong>.
7. If the user is not listed in the table correctly:
    1. Begin typing the user's last name, and using the autocomplete, select the user.
    2. Use the drop-down to set the user's role to Self and/or No More Clipboard User.
    3. Click the <strong>Add</strong> button, to add each necessary role.
8. After all changes have been made, click the <strong>Submit</strong> button.

{{% tip %}}
To remove a role from the table, simply click the minus button. After all changes are made, click the **Submit** button.
{{% /tip %}}

### Linking to Supervisor

Linking users to a supervisor allows the managing user to log into the portal and see the subordinates' restrictions, lost time, work status, as well as their own information. To link users to a supervisor:

1. Navigate to the {{% syslink "Control Panel" "f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin" %}}  side menu.
2. Click the {{% syslink "Access Control" "f=admin&t=security&tabmodule=admin&tabselect=Access&ts_caption=Access+Control" %}}  tab.
3. Using the <em>Search</em> field and filters, click <strong>Go!</strong> to locate the supervisor or manager.
4. Click the <strong>Edit</strong> link in the <em>Options</em> column.
5. In the upper-right of the screen, locate and click the <strong>Edit Patients Linked to User</strong> link.
6. Once on the <em>Patients Linked to User</em> screen, ensure the user in context is listed in the table, twice:
    1. The user should be listed with the role of <strong>Self</strong>; and
    2. He/She should be listed with the role of <strong>No More Clipboard User</strong>.
7. Using the autocomplete, begin typing the last name of the subordinate, and select the user.
8. Using the drop-down, select <strong>No More Clipboard User</strong> role.
9. Click the <strong>Add</strong> button.
10. Repeating step 7, select the same user.
11. Use the drop-down to select the <strong>Supervisor</strong> role.
12. Click the <strong>Add</strong> button.
13. Repeating steps 7-12, add the remaining subordinates.
14. When finished, click the <strong>Submit</strong> button.
