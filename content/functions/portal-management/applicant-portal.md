---
id: '14-E0o7EriOWL5ckmsBlBJ3TBeGgNAyV5k--2L_lPDSU'
title: 'Applicant Portal'
date: '2025-05-30T17:49:05.652Z'
version: 379
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:LGSIDNHR'
source: 'https://drive.google.com/open?id=14-E0o7EriOWL5ckmsBlBJ3TBeGgNAyV5k--2L_lPDSU'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
markup: 'pandoc'
---
With the web-based **Applicant Portal**, all prospective employees can be directed to the portal URL for completing forms and/or questionnaires, according to any hiring and pre-employment needs of the business. The portal design is relatively simplistic in that candidates initiate a portal session by simply entering their first and last name. Once the applicant has completed the necessary forms/questionnaires, all of the information is submitted from the portal to the employer electronically, through a login-disabled user account drafted and linked to the Applicant department. Therefore, if candidates are hired, the information submitted electronically can easily be merged into the new employee user account.

In order to effectively implement the Applicant Portal, clients will need to work with the Deployment Consultant(s) to determine any preferred configurations and needs required for pre-employment, hiring, and onboarding processes. Once the portal has been configured, the URL will be made available for marketing purposes.

{{% info %}}
Permitted users will have the ability to edit the title, color scheme, instructions, and available questionnaires from the Employer Organization sidemenu, as needed. These configurations will then be visible within the portal accessed by the candidates.
{{% /info %}}

## Portal Setup

The following items are considerations to be discussed with the Deployment Consultant(s) in order to ensure a smooth implementation of the Applicant Portal:

**Questionnaire(s) for Applicants**: Clients will determine what types of information and number of forms/questionnaires the applicants will be expected to complete. Discussions with the Deployment Consultant(s) will help establish any necessary configurations and workflow (e.g., link necessary questionnaire(s) to corresponding order items; indicate what document type each questionnaire will be saved as; confirm the preferred chart tab to which each document type will be mapped).

**Questionnaire(s) Data Fields**: Additional discussions will be needed to determine what specific information is necessary from each questionnaire being presented to applicants, as well as in what way the information will be recorded. The Deployment Consultant(s) will assist with configuring observations and observation flowsheets, to align with the appropriate free text data fields and pre-templated options needed on each questionnaire.

**Order Picklist**: Any questionnaires being used for the Applicant Portal must fall within an order picklist. Work with the Deployment Consultant(s) to ensure an order picklist is configured, listing each questionnaire needed for the Applicant Portal.

**Applicant Portal EO Chart Tab**: Customizations to the Applicant Portal can be done through the Applicant Portal chart tab of the Employer Organization (EO), as needed. It is through the Applicant Portal chart tab that users with the appropriate permissions may configure the portal components. The portal URL suffix will be provided from this tab, as well, which will be appended to the production database base URL and distributed for use.

**Tasking**: It is important to discuss and determine any tasklist events needing triggered whenever applicants register and submit information via the Applicant Portal.

**Merging**: Once an applicant is hired, it is important to merge the *applicant* chart with the *employee* chart. Applicant charts are created from the transmission of completed forms/questionnaires from the portal, and new employee charts are typically generated through an HR interface feed. Determine the best workflow for merging these charts, and ensure users who will be working merges have the necessary security permissions.

The following steps will ensure the Applicant Portal is configured and functions properly.

## Update System Settings

Following the instructions below, *update* these system settings, if you are on a legacy database system. If you are on a current release, these items will already be configured out of the box:

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
    a.  NMC, Registrations, Set New Patient at Temporary = 1
    b.  NMC, User Security, Force Security Role = 1
    c.  NMC, Pages, Client = Applicant
        i. Assigns <em>Applicant</em> as the layout module.
    d.  NMC, Signup, Custom Site Realm = Applicant
    e.  Webchart, Login, New Signups = 1
5. Click the <strong>Change</strong> button, when finished.

## Create APP Partition

This partition will only need to be configured if you are on a legacy database build. The current out of the box configuration includes the APP Partition.

1. Navigate to the <strong>Partition Mgr</strong> tab of the Control Panel.
2. If it is not already created, the APP partition needs added, accordingly:
    a.  <strong>Partition</strong>:  APP
        i. The partition must match the <em>Default on Signup</em> system setting.
    b.  <strong>WC GUID</strong>:  Blank
    c.  <strong>Name</strong>:  APP
    d.  <strong>Description</strong>:  Applicant
    e.  <strong>MR Sequence</strong>:  Blank
    f.  <strong>Partition View</strong>:  Auto Increment
    g.  <strong>Required</strong>:  No
    h.  <strong>Active Types</strong>:  Active with Doc Queue
    i.  <strong>Part Order</strong>:  0
    j.  <strong>Allow Access to Restricted Users</strong>:  Unchecked
    k.  <strong>Identifier</strong>:  Medical Record Number

## Create Applicant Department

Only create the Applicant Department if you are on a legacy database build. The current out of the box configuration includes an Applicant Department.

1. Navigate to the <strong>Access Control</strong> tab of the Control Panel.
2. Click the <strong>Add Department</strong> link in the upper-right corner of the page.
3. Enter <em>Applicant</em> into the <strong>Name</strong> field.
4. Click the <strong>Submit Dept.</strong> button.

## Create Applicant Security Role

Only create an Applicant Security Role if you are on a legacy database build. The current out of the box configuration includes an Applicant Security Role.

1. Navigate to the <strong>Security Roles</strong> tab of the Control Panel.
2. Click the <strong>Add Role</strong> link in the upper-right corner of the page.
3. Enter <em>Applicant</em> into the <strong>Security Role Name</strong> field.
4. Click the <strong>Add Role</strong> button.

## Update Applicant Security Role Permissions

1. Navigate to the Employer Management side menu.
2. Type the name of the EO, and click the <strong>Search</strong> button. In this example, we will be using Better Corp.
3. Locate the EO Name, and click the hyperlink.
4. Locate and select the Portal Setup tab.
5. Once there, click the <strong>Applicant Portal</strong> header, to expand the section. Click the <strong>Run Setup</strong> button.

![](../applicant-portal.assets/29d4e5695d2713714eff548176adfbd5.png)

6. The Setup Wizard will run.

![](../applicant-portal.assets/8906c3043ebd71669874a941070b0bc7.png)

7. After running the portal setup, review the <strong>Security Requirements</strong> and update, as necessary.

![](../applicant-portal.assets/d5734a4f26ad1e498b4fa3925958040a.png)

{{% note %}}
These Security Requirements should always be followed for ensuring the proper security role settings.
{{% /note %}}

## Applicant Portal Configuration

![](../applicant-portal.assets/040bcb95b6e9afb5b26835e7645ef480.png)

**Features**

* <strong>Print Completed Questionnaires</strong>: Displays a new section on the home page which allows the user to print questionnaires after they have been completed.
* <strong>Auto Start First Questionnaire</strong>: When enabled, this will automatically trigger the first available questionnaire after login. NOTE: This only applies to the first time viewing the home page.
* <strong>Enable Telehealth</strong>: When enabled, a page will show once the user is done with their questionnaires showing instructions on how to join a TeleHealth visit.

**Additional Fields**

* <strong>Field List</strong>: Choose which additional fields display on the applicant portal form.
    * Date of Birth
    * Social Security Number
    * Email Address
    * Mobile Phone
    * Middle Name

**Miscellaneous**

* <strong>Header Text</strong>: Replacement text for the header that displays with the Applicant Portal. This should be used as a general description of the portal. Default is 'Applicant Portal'
* <strong>Custom Color</strong>: Use the color picker to select a custom color for your portal.
* <strong>Inactivity Logout Time</strong> (Minimum: 2 Minutes; Maximum: 30 Minutes): Enter the amount of time (in minutes) to determine when a user will be logged out for inactivity. A popup window will display during the last 60 seconds of the timer to notify the user they are about to be logged out. NOTE: This timer is capped by the system setting: System/Login/Timeout and may be overridden by station manager settings. Default logout time is 2 minutes.
* <strong>Redirect on Logout</strong>: The website that you will be redirected to when logged out.
* <strong>Partition</strong>: Determines which partition new applicants are placed into once their account is created. NOTE: The partitions in this list are filtered to show only those with their 'Partition View' set to 'Auto Increment'.
* <strong>Date Format</strong>: Select which format dates will appear on the sign in page. NOTE: This option only affects browsers that do not support native date inputs

**Sign In Page**

* <strong>Form Title</strong>: Replacement text for applicant form title on the initial login page. Default is 'New Applicant Form'
* <strong>Form Directions</strong>: Replacement text for applicant form directions on the initial login page. Default is 'Welcome! Please complete the fields below to begin.' NOTE: This input is limited to 255 characters. If longer instructions are needed, create a new layout in the 'UPortal Custom' module with the name 'Applicant Portal Form Directions'.

**Home Page**

* <strong>Questionnaire List Directions</strong>: Replacement text for applicant questionnaire directions displayed on the home page after login. Default is 'Once you have completed all of the available questionnaires, please sign out using the button at the top of the page.' NOTE: This input is limited to 255 characters. If longer instructions are needed, create a new layout in the 'UPortal Custom' module with the name 'Applicant Portal Questionnaire Directions'.
* <strong>Available Questionnaires</strong>: This will determine which questionnaires are available for an applicant to complete within the applicant portal.

## Add Applicant Portal Chart Tab

Only add the Applicant Portal Chart Tab if you are on a legacy database build. The current out of the box configuration includes the Applicant Portal Chart Tab.

1. Navigate to the <strong>Chart Tabs</strong> tab of the Control Panel.
2. Click the <strong>Add Chart Tab</strong> link in the upper-right corner of the page.
3. Using the <strong>Basic Editor</strong>, create the Applicant Portal chart tab, accordingly:
    a.  <strong>Tab Name</strong>:  Applicant Portal
    b.  <strong>Description</strong>:  Blank
    c.  <strong>Open in new window?</strong>:  No
    d.  <strong>Default View</strong>:  Dashboard View
    e.  <strong>Tab Order</strong>:  No Change
    f.  <strong>Tab Color</strong>:  No Change
    g.  <strong>Restrict Access</strong>:  Unchecked
    h.  <strong>Show Tab in Pocket</strong>:  Unchecked
    i.  <strong>Show Link Header</strong>:  Checked
    j.  <strong>Chart Type</strong>:  Portal
    k.  <strong>Force Display</strong>:  Yes
    l.  <strong>Layout Name</strong>:  Applicant Portal
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

1. Navigate to the <strong>Employer Organization</strong> side menu.
2. Locate and click the link to the portal with which the Applicant Portal is associated.
3. Click the <strong>Portal Setup</strong> tab.
4. Click the header to open the <strong>Applicant Portal Setup</strong> section.
5. Click the <strong>Run Setup</strong> button.
6. From the <strong>Applicant Portal</strong> tab, configure the portal, as needed.

## Learning Management System

To learn more about the Applicant Portal, follow the link below to the Learning Management System course:

* [Pre-employment Management (and Applicant Portal)](https://mie.talentlms.com/shared/start/key:LGSIDNHR)
