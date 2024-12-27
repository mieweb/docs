---
id: '1Lt21m84aiIU-XrGla23WxJDEqtnSk4WH5fRcCHuO3Nk'
title: 'User/Provider & Department Management'
date: '2024-07-17T12:36:41.034Z'
version: 139
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'http://docs.enterprisehealth.com/latest/documentation/components/system_admin/user-provider_management.html'
  - 'https://drive.google.com/open?id=1edAwEslsoESrM2RH9GDOQvb_iAjb-kFdUOkH6FpNNqQ'
  - '../../portal-management/linking-users-for-portal-access.md'
  - 'https://mie.talentlms.com/shared/start/key:LAQIDNHR'
source: 'https://drive.google.com/open?id=1Lt21m84aiIU-XrGla23WxJDEqtnSk4WH5fRcCHuO3Nk'
wikigdrive: '14369108b4618bce79d4c23f4d172a439fb63721'
---
With the proper security permissions, adding, editing, and removing users can be easily managed from within the  {{% system-name %}} solution's Access Control editor. Following is a detailed outline of the processes of managing users, providers, referring physicians, and departments. There are varying types of user access to consider, in addition to methods by which users can be added to the  {{% system-name %}} solution. Therefore, consider the organization's needs and follow the guided workflows, below, as appropriate.

## Access Control

The Access Control editor provides methods for searching users, editing users/departments, and managing user/department access. Navigating the editor is as simple as using a basic search, clicking intuitive links, and filling text fields.

At the top of the Access Control default landing page are navigation links and a Search field with filters. Below, a table list of built departments are displayed, alphabetically.

### Navigation Links

Above the Search field and filters are two navigation links:

1. View Departments: This link navigates to the default landing page–the Departments view.
    * Departments are listed alphabetically, with options to edit or delete, by default.
    * This page can be returned to at any point during the user/department editing by simply clicking the View Departments link.
    * Additional links are available, at the top of the table, which allow filtering to Show User Counts (displays the number of users within each department) and to Show Inactive (lists all inactive departments).
2. View User Access: This link navigates to the User Access view.
    * This page displays all usernames, their security exceptions and statuses, as well as their associated security roles.
    * Options are available to review previous revisions to security exceptions and by whom they were made.
    * A Show CSV link is available to download a CSV of the user list.

In the upper-right corner of the Access Control default landing page are three additional links:

1. <strong>Add Department</strong>: Clicking this link provides the workspace to add a new department. See the <em>How to Create a Department</em> section for additional information.
2. <strong>Add User</strong>: Using this link will provide the New User form and workspace to create a new user. See the How to <em>Add a User/Provider</em> section for further details.
3. <strong>Quick Add Users</strong>: If multiple providers, physicians, or users need added, clicking this link will provide the workspace to effectively add several users, at once. See the <em>How to Add Multiple Active Users</em> section for more instructions on this functionality.

#### Search

Search in the Access Control editor is a simple, yet powerful tool. Combined with the navigation links available with each page view (Departments and User Access), the search provides a means to maintain standardized users for efficient onboarding processes.

* <strong>Criteria</strong>: A filter to limit searches by <strong>Exact</strong> wording, or by a result that <strong>Begins With</strong> the specified text.
* <strong>Search</strong>: A free-form text box that allows a single line of text to be searched against all users and departments in the database.
* <strong>By</strong>: A dropdown filter used to limit the specified search text against an element of the user profile. Available options are:
    1. Username
    2. User PIN
    3. Name
    4. Alias
    5. E-Mail
    6. Organization
    7. Department
    8. User ID
    9. NPI
* <strong>Show</strong>: This field allows the results to be filtered by <strong>Active</strong>, <strong>Inactive</strong>, and/or <strong>Deleted</strong> status.
* <strong>Go</strong>: Once filters and text have been entered, click this button to search the database.

## Adding a User/Department

To begin adding users, the TL;DR simply requires the privileged user to:

1. Navigate to the Control Panel from the sidebar menu.
2. Click the Access Control tab.
3. Verify the user is unique and is not going to be a duplication.
4. Click the Add User link in the upper-right corner. (To add multiple, active users en masse, refer to the [Quick Add](http://docs.enterprisehealth.com/latest/documentation/components/system_admin/user-provider_management.html#quick-add) section.)
5. Fill in all necessary and relevant fields.
6. Click the <strong>Submit Insert</strong> button.

However, when adding a user, filling out all the fields is not the only important consideration; avoiding duplicates and understanding what each field represents and its relevance to the user role and creation process are equally important.

### Creating a User/Provider

Best practices warrant a two-fold process for adding users to the  {{% system-name %}} solution:

1. Verify the user is unique, not already built, and the username and profile are not being duplicated.
2. Add the user to the system.

#### Verify Unique User/Provider

Before any new user is created or added to the system, perform a search to confirm that the individual has not been added, previously.

1. Navigate to the Control Panel from the sidebar menu.
2. Click the Access Control tab.
3. Enter search criteria for the new user.
4. Click the <strong>Go</strong> button.
5. Review the results, ensuring none of the matches correspond to the new user.

If no results match, continue adding the new user to the  {{% system-name %}} solution.

#### Create User

Creating new users within the  {{% system-name %}} solution can be executed and maintained from the Access Control editor:

1. Click the Add User link in the upper-right corner.
2. When adding users, consider their role, and fill all fields as thoroughly as possible. Fields marked with a red asterisk are <strong>required</strong>. All fields available are as follows:

Username

This is the user login credential. Common conventions for usernames tend to be lowercase characters, first initial with last name, and no spaces.

Alias

The Alias field offers an alternative to a user's Full Name being used for any Authored By fields within the  {{% system-name %}} solution. Text in this field will show in the Authored By field of all documents (i.e., that are created, uploaded, printed, faxed, etc.). Authored By fields pull the Alias first; however, if nothing is entered in the Alias field, the Full Name will be pulled for authoring purposes.

{{% tip %}}
Some clients prefer an Alias such as: First Name and Last Initial; Last Name, First Initial; only initials; or Username. This provides a level of privacy for clinical staff, if preferred.
{{% /tip %}}

Primary Dept

Using the dropdown, choose the **Primary** Department the user will be associated with. If the appropriate Department is not listed, create a New Department.

Organization

Type the name of the facility, practice, or company, as appropriate.

Current Status

When adding new users, this field defaults to *Active*. Choices are **Active**, **Login Disabled**, or **Deleted**.

{{% note %}}
*Active* users require a Username and Password to be provided. Users and entities that will not access the system directly (e.g., pharmacies), the Login Disabled status will be selected, and no password will be required.
{{% /note %}}

Security Role

A Security Role must be selected, otherwise an error will populate at the top of the page upon submission. This field dictates the level of access a user is permitted. The default message is **WARNING: No Security Role for User!**. Use the dropdown to select the appropriate Security Role for the user in context.

Def. User Role

Default User Role. The default message is **WARNING: No Default User Role for User!**. If this field is skipped, the system automatically defaults and saves the role as **User-Limited Access**.

{{% note %}}
This field must be set for any Referring Physician being added to the  {{% system-name %}} solution. If creating a referring physician, set to **Referring Physician**.
{{% /note %}}

Electronic Prescriber

These fields are intended for physicians or users legally allowed to prescribe medications. Refer to [E-Prescribe Management](https://drive.google.com/open?id=1edAwEslsoESrM2RH9GDOQvb_iAjb-kFdUOkH6FpNNqQ) before making any selections.

Meaningful Use

This field notes the Meaningful Use status of the user. Upon adding a new user, this field will show the status as **Inactive**. To opt-in for Meaningful Use reporting and incentives from CMS, refer to the Meaningful Use Documentation.

Title

Honorifics or preferred titles (e.g., Mr., Ms., Mrs., Dr., etc.) may be entered in this field. This is an optional field.

First Name

Enter the user's full legal first name. This is a required field, therefore a new user cannot be created without an entry.

Middle Name

Enter the user's full middle name or initial.

Last Name

Enter the user's full legal last name. This is a required field, therefore a new user cannot be created without an entry.

Suffix

If the user has a suffix (e.g., Jr., Sr., IV, etc.), this field must be used. Do not place suffixes in the Last Name field.

Degree

This field is reserved for degree titles (e.g., MD, NP, FACS, RN, LLM, MSc, etc.).

Address1

The main element of the address for the location (i.e., street address, P.O. Box, company name, or c/o).

Address2

The secondary element of the location address (e.g., suite, unit, building, floor, etc.).

City

The full city name of the location.

State/Province

A dropdown of possible states/provinces of locations. A system setting is available to allow international options versus US-only locations.

Country

Field defaults to **United States**; however, other countries are available for selection.

Postal Code

Enter the full postal code for the specified location. A system setting is available to accommodate international postal codes, leaving entries as they are entered, without auto-formatting.

Preferred Route

This field records the default method the user prefers to send information, as it relates to the the  {{% system-name %}} solution's DataSend functionality. DataSend allows the communication between systems and/or clients.

{{% note %}}
If the user will be faxing encounters to referring physicians or the like, this field must be set to **Fax** on the referring physician's profile.
{{% /note %}}

Route Comments

This is a text field used as a comment, or note, about why the specific Preferred Route was chosen.

Work Number

Enter the full work number, including any international access code, country calling code, area code, or exit code.

{{% tip %}}
To enter an international number, precede the number with a plus sign (+) before continuing to type the number. This prevents any automatic formatting done to entries.
{{% /tip %}}

Pager Number

Enter the full pager number.

Phone Number

Enter the full phone number, including any international access code, country calling code, area code, or exit code.

Cell Number

Enter the full mobile number, including any international access code, country calling code, area code, or exit code.

Cell Number Carrier

Select the appropriate cell phone service provider from the dropdown.

Fax Number

Enter full fax number, including any international access code, country calling code, area code, or exit code.

E-Mail

Enter the user's E-Mail address. An entry in this field allows for tasking and/or e-signing requests to be sent as E-Mail notifications, if the corresponding preference is set in **My Settings**.

Preferred Alert Method

The preferred method of receiving alerts. Select either **Email** or **Text Message**.

PIN

{{% system-name %}}  will provide a PIN for any physician using phone dictation.

Universal ID

Intended for the Unique Physician Identification Number (UPIN), an identifier used by Medicare to identify clinicians. Do not use for the National Provider Identifier (NPI).

DEA Number

Enter the user's 9-character DEA Registration number.

National Provider Id (NPI)

Enter the user's 10-character NPI number.

License Number

Enter the user's State License number.

Tax Identification Number

This field is reserved for a Tax Identification Number (TIN), provided for tax purposes, by either the Social Security Administration or Internal Revenue Service.

Password Expire Date

For new users, set this date to **Today** by clicking the clock icon. This will cause the new user to be prompted upon login to create a unique password. Otherwise, passwords expire every 30 days from the date of last change/reset, and the user will be prompted to change their password upon login.

{{% warning %}}
Never set a *generic* password without setting the Password Expire Date to **Today**.
{{% /warning %}}

Login Expire Date

This field is intended for organizations using temporary user logins for users needing access to the  {{% system-name %}} solution for a limited amount of time. A Login Expire Date can be set, which will automatically (on the specified date) expire the user's login credentials.

Password

For new users, enter a generic password. You must give this password to the new user, so they can perform their initial login. As long as the **Password Expire Date** is set to *Today*, the user will be prompted to change the password upon login. Any active users must have a password to access the system. Review the Password documentation for more specific information regarding password configurations, restrictions, and expirations.

{{% info %}}
Passwords may have any configuration of up to 50 alphanumeric characters, with numbers, uppercase/lowercase letters, or other characters. They are stored using a one-way encryption to prevent from being decrypted.
{{% /info %}}

Verify Password

Re-enter and confirm the password.

Your New PIN Vericode

This field is for a PIN used in practices that have their E-Orders module locked. A PIN is required to create orders for patients. Enter a PIN.

Verify New PIN Vericode

Re-enter and confirm your PIN.

Security Question

Type a question the user wishes to refer to if he/she needs access to their profile or their password reset. This is used to verify the individual's identify.

Security Answer

Type the answer to the Security Question that the user must provide to verify authority to access/change personal settings.

1. Place a checkmark in each box that corresponds to a department the user is expected to be associated with, if more than one, and be sure to include the department listed in the Primary Department field, above.
2. When completed, click the <strong>Submit Insert</strong> button.

#### View/Edit User

To view or edit a user, navigate to the Access Control manager tab:

1. Search for the user needing reviewed or modified, (See the <strong>Search</strong> section for a review of how to utilize the Access Control search feature.) and click on the hyperlinked username to load the <strong>View User</strong> page.

{{% tip %}}
The *View User* page is helpful for viewing the user's restrictions, security exceptions, department associations, as well as last login and number of failed login attempts.
{{% /tip %}}

2. To modify, click the <strong>Edit User</strong> link, found in the upper-right of the page.

{{% tip %}}
After searching for a user, the *Edit User* page can be accessed by clicking the **Edit** link in the *Options* column.
{{% /tip %}}

{{% info %}}

If editing the user's Security Role, review the Security Role documentation.

**Customize User Security and Edit Patients Linked to User**

Depending on security permissions, when navigating the **Edit User** page, two links will be available in the upper-right of the page:

* <strong>Customize User Security</strong>
* <strong>Edit Patients Linked to User</strong>

**Customize User Security** is used to change security options and role permissions for the user in context, *only*. Modifying a user's Security Role, here, will not impact the Security Role, as it is used by the organization. Review the Security Role Documentation, for further instructions on this feature and its uses.

**Edit Patients Linked to User** is most often used with regard to Portal management and use. For further instructions on how to use this feature, review the [Linking Users portal documentation](../../portal-management/linking-users-for-portal-access.md).

{{% /info %}}

3. After all modifications have been made, click <strong>Submit Edit</strong> at the bottom of the page.

Delete User

To disable/inactivate or delete a user, navigate to the Access Control manager tab:

1. Search for the user needing reviewed or modified. (See the Search section for a review of how to utilize the Access Control search feature.)
2. To delete the user, simply click <strong>Delete</strong> from the <em>Options</em> column, or the <strong>Delete User</strong> link found on the <em>View User</em> page.

{{% warning %}}
When a user is *deleted*, it is not deleted permanently. The user is marked as **Deleted** in the Current Status field. This means if a deleted user is needing reactivated or reviewed, there are options available. To reactivate, click **Activate** in the *Options* column.
{{% /warning %}}

3. When a user is deleted, a warning displays, confirming deletion. Click <strong>Yes</strong> to confirm and complete.

{{% note %}}
If a prescriber is being deleted, see [E-Prescribe Management](https://drive.google.com/open?id=1edAwEslsoESrM2RH9GDOQvb_iAjb-kFdUOkH6FpNNqQ) documentation for the correct steps on how to disable.
{{% /note %}}

#### Create Provider

Creating a provider or physician follows the same steps as adding a user; however, if the provider/physician intends to prescribe medication, review the required fields and necessary information for SureScripts verification in the [E-Prescribe Management](https://drive.google.com/open?id=1edAwEslsoESrM2RH9GDOQvb_iAjb-kFdUOkH6FpNNqQ) documentation, or the **Set Up E-Prescriber** section, specifically.

Add a Referring Physician User

Just as if adding a user or provider, adding a referring physician requires the same two-step process:

1. Verify the user is a not already built in the system.
2. Add referring physician.

After searching, if the referring physician is not in the system, continue with adding as many as are needed by repeating the following:

1. Navigate to the Control Panel on the left sidebar menu.
2. Click the Access Control tab.
3. Click the Add User link.
4. When adding a Referring Physician, ensure all of the fields, below, are addressed:
* <strong>Primary Dept</strong>: Must select the referring physician's primary department (otherwise, select <em>Referring Physicians</em>).
* <strong>Current Status</strong>: Select <em>Login Disabled</em>.
* <strong>Def. User Role</strong>: This field must be set to <em>Referring Physician</em>, because many components of the system know which entities are referring physicians, based on this field. If this field is skipped, the system automatically defaults and saves the role as <em>User-Limited Access</em>.
* <strong>First Name</strong>: Enter the referring physician's full legal first name.
* <strong>Last Name</strong>: Enter the referring physician's full legal last name.
* <strong>Degree</strong>: This field is reserved for degree titles (e.g., MD, NP, FACS, RN, LLM, MSc, etc.).
* <strong>Address1</strong>: The main element of the address for the location (i.e., street address, P.O. Box, company name, or c/o).
* <strong>Address2</strong>: The secondary element of the location address (e.g., suite, unit, building, floor, etc.).
* <strong>City</strong>: The full city name of the referring physician's location.
* <strong>State</strong>: A dropdown of possible states/provinces of locations. A system setting is available to allow international options versus US-only locations.
* <strong>Postal Code</strong>: Enter the full postal code for the specified location. A system setting is available to accommodate international postal codes, leaving entries as they are entered, without auto-formatting.
* <strong>Preferred Route</strong>: If the office uses encounters and faxes documents to referring physicians, select <em>Fax</em> from the dropdown. If the office uses Direct Messaging to send direct email messages (as part of an EHR Incentive Program) select <em>Direct Email</em> from the dropdown.

{{% note %}}
If **Direct Email** is being used, be sure to collect the referring physician's Direct email address, and record the address in the Email field.
{{% /note %}}

* <strong>Work Number</strong>: Enter the full work number, including any international access code, country calling code, area code, or exit code.
* <strong>Fax Number</strong>: This field is required if encounters are used and documents are faxed to referring physicians. Enter full fax number, including any international access code, country calling code, area code, or exit code.
* <strong>Email</strong>: If the Preferred Route is set to <em>Direct Email</em>, enter the referring physician's Direct email address in this field. Otherwise, the Preferred Route is set to <em>Fax</em>, and the referring physician's general email address can be entered in this field.

{{% note %}}
**Username** can be left blank. They are not a *user* accessing the system, therefore, they do not need a username provided.
{{% /note %}}

5. Scroll to the bottom and select all of the departments associated with the referring physician, including <strong>Referring Physicians</strong>.
6. When completed, click the <strong>Submit Insert</strong> bottom.

Upon submission, a confirmation of a successful addition will appear at the top of the screen; otherwise, an error will prompt what field(s) to update/correct.

You can quickly tag multiple users (in mass) to a specific department by going to "View Department" and using the listedit & autocomplete feature there. See help documentation titled Adding A Department.pdf for more information.

### Departments

There are several available departments included with the base product, that assist users in differentiating responsibilities and users, based on role. The following will address how to add/edit a department, delete or reactivate a department, how to view departments, and how to link users to multiple departments.

#### Add/Edit a Department

Adding a Department

Adding a department is a quick, simple process. From the [Access Control](http://docs.enterprisehealth.com/latest/documentation/components/system_admin/user-provider_management.html) tab:

1. Click the Add Department link.
2. Type in the full name of the department needing to be created.
3. Select the viewable department(s). Choose <em>any or all</em> departments that are expected to be viewable from the users of the new department. To provide access to the new department, select the <strong>Give users in this department access to see other users in this department</strong> option.

{{% tip %}}
Use the **Check All Depts** button to select all of the departments, with one click; however, consider that the **Give users in this department access to see other users in this department** option does not auto-select with this button.
{{% /tip %}}

4. If there is a need to add specific <strong>Users in New Department</strong>, begin typing the last name in the autocomplete field, select the user, and click the <strong>Add</strong> button.
5. Once completed, click the <strong>Submit Dept.</strong> button.

Editing a Department

If a previously added department needs to be edited, perhaps to have additional entities associated with it, simply navigate to the Access Control tab:

1. Click the <strong>Edit</strong> link in the <em>Options</em> column, of the Department needing updated.
2. Perform all necessary edits (see the <strong>Adding a Department</strong> section for information on the available options).
3. Upon completion, click the <strong>Submit Dept.</strong> button.

#### Delete/Reactivate a Department

Deleting an unnecessary department, or reactivating an old department, or department deleted by mistake, is an effortless process. From the Access Control tab:

Delete a Department

1. Locate the department that needs deleted.
2. Click the <strong>Delete</strong> link in the <em>Options</em> column.
3. A Delete Department confirmation will load.
4. Click the <strong>Delete</strong> button to inactivate, or <strong>Cancel</strong> to return to the Departments view.

Reactivate a Department

1. Locate the department that needs reactivated by clicking the Show Inactive link.
2. Once found, click the <strong>Activate</strong> link.
3. The department will be immediately reactivated.

## Quick-Add Multiple Active Users

In order to add several new, active users/providers, a quick-add feature has been made available to users with the appropriate security permissions. This screen is not used to manage *existing* users. Users cannot be edited, deleted or deactivated from the Quick Add Users page. This page is designed for quickly adding multiple users, for quick access into the  {{% system-name %}} system.

{{% note %}}
Adding users from this screen will set these users as active and will also set the user's login and password to what is specified; however, the passwords entered will expire immediately, so users will be prompted to create a unique password, upon initial login.
{{% /note %}}

### Mass Add Active Users

To quickly add multiple, new users, navigate to the Access Control manager tab:

1. Click the Quick Add Users link, in the upper-right corner of the page.
2. The <strong>Add Users</strong> page will load.
3. Using either the <strong>Add Physicians</strong> or the <strong>Add Users</strong> (<strong>Non-Physicians</strong>) sections, supply:
* <strong>First Name</strong>: Enter the referring physician's full legal first name.
* <strong>Last Name</strong>: Enter the referring physician's full legal last name.
* <strong>User Role/Department</strong>: This is the Default User Role (of the physician) or the Primary Department (of the non-physician). Choose from the provided dropdown.
* <strong>Security Role</strong>: This field dictates the level of access a user is permitted. Use the dropdown to select the appropriate Security Role for the user in context.
* <strong>Username</strong>: Enter a unique username.
* <strong>Password</strong>: Enter a password.
4. When adding users in either section, click the <strong>Add</strong> button to store that user for submission. Click the minus (-) button, if a user needs to be removed or an error was made.
5. Continue adding users, as needed.
6. When all users have been added, click either <strong>Submit</strong> button.

{{% note %}}
Users are not active and available to log in until the entries have been submitted.
{{% /note %}}

{{% tip %}}
To add more details to the users that were added (e.g., address, phone, fax, email, credentials, other departments, pin, security questions, etc.), go to the Access Control tab, search and find the specific user(s), then edit user(s), entering the other detail fields, as needed.
{{% /tip %}}

Upon confirmation of the successful submission, users are immediately able to log in. Upon initial login, users will be prompted to create a unique password. Any errors with creating users will be noted with a message explaining what failed or needs addressed. Review and resubmit, if necessary.

## Manage User Access

Aside from the standard *Add/Edit User* and *Delete User* functionality, the Access Control manager tab has options for reviewing user access. From the **View User** page, there are links provided to allow superusers to:

* <strong>View Audit Log</strong>
* <strong>View Lock Records by User</strong>
* <strong>View User Revisions</strong>

### View Audit Log

With the appropriate security role or permissions, the **View Audit Log** link will appear in the upper-right of the *View User* page. Clicking this will reveal a means to search and view the charts the user has viewed/edited.

#### Audit Log Search

Navigate to the Access Control manager tab, and search for the user needing audited:

1. After the search (See the <strong>Search</strong> section for a review of how to utilize the Access Control search feature.), click on the hyperlinked username to load the <strong>View User</strong> page.
2. When the <em>View User</em> page loads, click the <strong>View Audit Log</strong> link.
3. The <strong>Audit Log Search Criteria</strong> page will open in a new tab.
4. Narrow the audit search using the provided fields:
* <strong>Date</strong>: This is a required field. Use the Now, Clear, or Calendar icons, as needed.
* <strong>Patient</strong>: This is an autocomplete field that helps limit an audit log to a specified chart. Use the Help Bubble for assistance on how to search various types of charts.
* <strong>Reference ID</strong>: Enter a specific Reference ID to be searched against the user's activity.
* <strong>Event Type</strong>: The type of events to be searched can be selected individually, or in multiples.
* <strong>Event Action</strong>: This is the event that occurred (e.g., Stream, View, Edit, Add, etc.).
* <strong>Event Description</strong>: A description of the specific aspects of the event; usually contains the document type description.
* <strong>Outcome</strong>: Whether the event was a <em>Success</em>, <em>Failure</em>, or <em>All</em>.
5. Once the preferred filters are entered, click the <strong>Search</strong> button. The results are specific to the user in context.
6. For further details, click the <strong>View Click Logs</strong> link in the <em>Activity Details</em> column and view the exact activity of the user.

Searching can be continued by modifying the search fields, or by clicking the **Clear All** button, to begin another search. Otherwise, to exit the Audit Log Search, click the **Close Window** link in the upper-right of the *Audit Log* screen.

### View Lock Records by User

With the appropriate security role permission, clicking the **View Lock Records by User** link from the *View User* page, a listing of all current record locks on documents for the user in context will be provided.

### View User Revisions

With the appropriate security role permission, when looking at the user summary from the *View User* page, the **View User Revisions** link will be available in the upper-right of the page. Clicking this will provide a view of sections and fields with associated revision dates, if any.

## Learning Management System

To learn more about the User/Provider & Department Management, follow the link below to the Learning Management System course:

* [Provider Management](https://mie.talentlms.com/shared/start/key:LAQIDNHR)
