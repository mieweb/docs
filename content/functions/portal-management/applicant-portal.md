---
id: '14-E0o7EriOWL5ckmsBlBJ3TBeGgNAyV5k--2L_lPDSU'
title: 'Applicant Portal'
date: '2021-03-31T21:08:57.956Z'
version: 208
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://confluence.mieweb.com/display/DOCS10/Applicant+Portal#ApplicantPortal-#SYSLINK?f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+'
  - 'https://confluence.mieweb.com/display/DOCS10/Applicant+Portal#ApplicantPortal-#SYSLINK?f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=43'
source: 'https://drive.google.com/open?id=14-E0o7EriOWL5ckmsBlBJ3TBeGgNAyV5k--2L_lPDSU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
With the web-based **Applicant Portal**, all prospective employees can be directed to the portal URL for completing forms and/or questionnaires, according to any hiring and pre-employment needs of the business. The portal design is relatively simplistic in that candidates initiate a portal session by simply entering their first and last name. Once the applicant has completed the necessary forms/questionnaires, all of the information is submitted from the portal to the employer electronically, through a login-disabled user account drafted and linked to the Applicant department. Therefore, if candidates are hired, the information submitted electronically can easily be merged into the new employee user account.

In order to effectively implement the Applicant Portal, clients will need to work with the Deployment Consultant(s) to determine any preferred configurations and needs required for pre-employment, hiring, and onboarding processes. Once the portal has been configured, the URL will be made available for marketing purposes.

{{% info %}}
Permitted users will have the ability to edit the title, color scheme, instructions, and available questionnaires from the Provider Management sidemenu, as needed. These configurations will then be visible within the portal accessed by the candidates.
{{% /info %}}

## Portal Setup

The following items are considerations to be discussed with the Deployment Consultant(s) in order to ensure a smooth implementation of the Applicant Portal:

**Questionnaire(s) for Applicants**: Clients will determine what types of information and number of forms/questionnaires the applicants will be expected to complete. Discussions with the Deployment Consultant(s) will help establish any necessary configurations and workflow (e.g., link necessary questionnaire(s) to corresponding order items; indicate what document type each questionnaire will be saved as; confirm the preferred chart tab to which each document type will be mapped).

**Questionnaire(s) Data Fields**: Additional discussions will be needed to determine what specific information is necessary from each questionnaire being presented to applicants, as well as in what way the information will be recorded. The Deployment Consultant(s) will assist with configuring observations and observation flowsheets, to align with the appropriate free text data fields and pre-templated options needed on each questionnaire.

**Order Picklist**: Any questionnaires being used for the Applicant Portal must fall within an order picklist. Work with the Deployment Consultant(s) to ensure an order picklist is configured, listing each questionnaire needed for the Applicant Portal.

**Applicant Portal PO Chart Tab**: Customizations to the Applicant Portal can be done through the Applicant Portal chart tab of the Provider Organization (PO), as needed. It is through the Applicant Portal chart tab that users with the appropriate permissions may configure the portal components. The portal URL suffix will be provided from this tab, as well, which will be appended to the production database base URL and distributed for use.

**Tasking**: It is important to discuss and determine any tasklist events needing triggered whenever applicants register and submit information via the Applicant Portal.

**Merging**: Once an applicant is hired, it is important to merge the *applicant* chart with the *employee* chart. Applicant charts are created from the transmission of completed forms/questionnaires from the portal, and new employee charts are typically generated through an HR interface feed. Determine the best workflow for merging these charts, and ensure users who will be working merges have the necessary security permissions.

The following steps will ensure the Applicant Portal is configured and functions properly.

## Update/Add System Settings

Following the instructions below, *add* these system settings:

* NMC, Partition, Default on Signup
* NMC, Signup, Limited User Realm

1. Navigate to <strong>System Settings</strong> in the Control Panel.
2. Click the <strong>Add System Setting</strong> link in the upper-right corner of the page.
3. Begin typing the name of the setting in the <strong>System Settings</strong> autocomplete.
4. Select the correct system setting from the autocomplete options, and type the appropriate value in the <strong>Value</strong> field.
    1. NMC, Partition, Default on Signup = APP
        1. Users will need to be assigned to the APP partition.
    2. NMC, Signup, Limited User Realm = Applicant
        1. <em>Applicant</em> is the name of the department to which users will be assigned.
5. Click the <strong>Add</strong> button, when finished.

Following the instructions below, *update* these system settings:

* NMC, Registrations, Set New Patient at Temporary
* NMC, User Security, Force Security Role
    * The security role must match the security role of the value set in the Limited User Realm setting.
* NMC, Pages, Client
* NMC, Signup, Custom Site Realm
    * The Value must match the Limited User Realm setting.
* Webchart, Login, New Signups
    * Allows new WebChart sign-ups.

1. Navigate to <strong>System Settings</strong> in the Control Panel.
2. Search for the appropriate system setting to be updated.
3. Once located, click the <strong>Edit</strong> link in the Options column.
4. Update the security setting by typing the appropriate value in the <strong>Value</strong> field.
    1. NMC, Registrations, Set New Patient at Temporary = 1
    2. NMC, User Security, Force Security Role = 1
    3. NMC, Pages, Client = Applicant
        1. Assigns <em>Applicant</em> as the layout module.
    4. NMC, Signup, Custom Site Realm = Applicant
    5. Webchart, Login, New Signups = 1
5. Click the <strong>Change</strong> button, when finished.

## Create APP Partition

1. Navigate to the <strong>Partition Mgr</strong> tab of the Control Panel.
2. If it is not already created, the APP partition needs added, accordingly:
    1. <strong>Partition</strong>:  APP
        1. The partition must match the <em>Default on Signup</em> system setting.
    2. <strong>WC GUID</strong>:  Blank
    3. <strong>Name</strong>:  APP
    4. <strong>Description</strong>:  Applicant
    5. <strong>MR Sequence</strong>:  Blank
    6. <strong>Partition View</strong>:  Auto Increment
    7. <strong>Required</strong>:  No
    8. <strong>Active Types</strong>:  Active with Doc Queue
    9. <strong>Part Order</strong>:  0
    10. <strong>Allow Access to Restricted Users</strong>:  Unchecked
    11. <strong>Identifier</strong>:  Medical Record Number

## Create Applicant Department

1. Navigate to the <strong>Access Control</strong> tab of the Control Panel.
2. Click the <strong>Add Department</strong> link in the upper-right corner of the page.
3. Enter <em>Applicant</em> into the <strong>Name</strong> field.
4. Click the <strong>Submit Dept.</strong> button.

## Create Applicant Security Role

1. Navigate to the <strong>Security Roles</strong> tab of the Control Panel.
2. Click the <strong>Add Role</strong> link in the upper-right corner of the page.
3. Enter <em>Applicant</em> into the <strong>Security Role Name</strong> field.
4. Click the <strong>Add Role</strong> button.

## Update Applicant Security Role Permissions

1. Navigate to the [Provider Management](https://confluence.mieweb.com/display/DOCS10/Applicant+Portal#ApplicantPortal-#SYSLINK?f=layout&module=MASTER&name=EPM_Maintenance&tabmodule=+) side menu.
2. Type the name of the PO, and click the <strong>Search</strong> button. In this example, we will be using Better Corp.
3. Locate the PO Name, and click the hyperlink.
4. Locate and select the [Portal Setup](https://confluence.mieweb.com/display/DOCS10/Applicant+Portal#ApplicantPortal-#SYSLINK?f=chart&s=pat&t=Portal+Setup&v=dashboard&pat_id=43) tab.
5. Once there, click the <strong>Applicant Portal</strong> header, to expand the section. Click the <strong>Run Setup</strong> button.

![](../applicant-portal.assets/29d4e5695d2713714eff548176adfbd5.png)

6. The Setup Wizard will run.

![](../applicant-portal.assets/8906c3043ebd71669874a941070b0bc7.png)

7. After running the portal setup, review the <strong>Security Requirements</strong> and update, as necessary.

![](../applicant-portal.assets/d5734a4f26ad1e498b4fa3925958040a.png)

{{% note %}}
These Security Requirements should always be followed for ensuring the proper security role settings.
{{% /note %}}

## Add Applicant Portal Chart Tab

1. Navigate to the <strong>Chart Tabs</strong> tab of the Control Panel.
2. Click the <strong>Add Chart Tab</strong> link in the upper-right corner of the page.
3. Using the <strong>Basic Editor</strong>, create the Applicant Portal chart tab, accordingly:
    1. <strong>Tab Name</strong>:  Applicant Portal
    2. <strong>Description</strong>:  Blank
    3. <strong>Open in new window?</strong>:  No
    4. <strong>Default View</strong>:  Dashboard View
    5. <strong>Tab Order</strong>:  No Change
    6. <strong>Tab Color</strong>:  No Change
    7. <strong>Restrict Access</strong>:  Unchecked
    8. <strong>Show Tab in Pocket</strong>:  Unchecked
    9. <strong>Show Link Header</strong>:  Checked
    10. <strong>Chart Type</strong>:  Portal
    11. <strong>Force Display</strong>:  Yes
    12. <strong>Layout Name</strong>:  Applicant Portal
4. Click the <strong>Save</strong> button, when finished.

## Add Applicant Portal Questionnaires

1. Navigate to the <strong>Orders-Pick Builder</strong> tab of the Control Panel.
2. Click the <strong>Add New Set</strong> button.
3. Type "Applicant Portal" into the <strong>New Set</strong> field.
4. Begin typing the name of a questionnaire to be added, and select it from the autocomplete.
5. Click the <strong>Save</strong> button.
6. To continue adding additional questionnaires, click the plus [ + ] icon in the header of the new group.

    ![](../applicant-portal.assets/175999ab5422e9b434186d6bb9e880e9.png)

## Configure Applicant Portal

1. Navigate to the <strong>Provider Management</strong> side menu.
2. Locate and click the link to the portal with which the Applicant Portal is associated.
3. Click the <strong>Portal Setup</strong> tab.
4. Click the header to open the <strong>Applicant Portal Setup</strong> section.
5. Click the <strong>Run Setup</strong> button.
6. From the <strong>Applicant Portal</strong> tab, configure the portal, as needed.
