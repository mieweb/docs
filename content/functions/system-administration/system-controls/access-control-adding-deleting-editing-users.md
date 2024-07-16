---
id: '1LTusqsZZWBwb5luysWoX59iHdj6vpnDi3hwYnu6ikPo'
title: 'Access Control - Adding, Deleting, Editing Users'
date: '2024-07-16T19:42:01.881Z'
version: 204
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'access-control-quick-add-multiple-active-users.md'
  - 'setting-up-e-prescribers.md'
  - 'https://mie.talentlms.com/shared/start/key:LTZIDNHR'
source: 'https://drive.google.com/open?id=1LTusqsZZWBwb5luysWoX59iHdj6vpnDi3hwYnu6ikPo'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Must have security permissions to be able to add/edit/delete users

## Search if a User Exists in the System

First, please do a search in your  {{% system-name %}} system to confirm that this person has not already been added as a user.

Click *Control* tab on the left sidebar menu.

Click *Access Control* tab at the top

It will show the list of departments your system has entered.

You can search for a user if you know what department(s) they are attached to and view that way. Click the underlined department name and you will see all users tied to that department.

![](../access-control-adding-deleting-editing-users.assets/bbfcd4a6ea0d5f94b4954a72a17b6729.png)

However, it is much easier to search by a user's last name.

In the Search box at the top of the Access Control tab you are in:

* <strong>Criteria:</strong> leave as ‘Begins With'
* <strong>Search:</strong> If you are searching for a specific person's name, start typing in the last name and then the <strong>BY:</strong> field would be selected to ‘name'. If you are searching for a specific username, start typing the username and make the <strong>BY:</strong> field username. Most search for a user by last name. In this situation you would then type part of the last name and make sure the <strong>BY:</strong> field is on Name.
* <strong>By:</strong> Use the drop-down arrow and select the category of what you typed in the Search field. You can search by different categories such as username, user PIN, name, E-mail, etc.

Click the GO box to the right.

The system will then show your search results below the search fields on the screen. It will display any matches to the specific search and by category you selected.

If you do not find the user already entered into the system, continue to add them as a new user.

Per Medical Informatics Engineering, Inc. policy, all *new* *providers* should be created with a new, unique user chart and account. Provider user accounts should NEVER be reused or recycled for any reason.

## Adding a User

Click *Control* on the left sidebar menu.

Click *Access Control* tab at the top

Click the Add Chart link on the far right side. (To add multiple active users quickly at a time, see other help documentation named [Access Control-Quick Add Multiple Users](access-control-quick-add-multiple-active-users.md))

![](../access-control-adding-deleting-editing-users.assets/5c9c5405541d242a15f002d8be0273fd.png)

Enter last name, first name, birthdate, email, SSN, and select an organization, then click ADD NEW at the bottom.

![](../access-control-adding-deleting-editing-users.assets/917c37217a129db85b868788bdd05c25.png)

From the chart, click on the pencil icon next to User Information from the Demographics portlet.

![](../access-control-adding-deleting-editing-users.assets/85fad84649e208bec73ccc322cd049a5.png)

When adding a user, fill out all the fields you can:

![](../access-control-adding-deleting-editing-users.assets/ec30b3ed212cb9454e0f94deaa335eb9.png)

### Edit User Screen

* <strong>Username</strong> (first initial and last name all together and in lowercase) This will be their login name.
* <strong>Alias:</strong> Anything typed here will be shown in the authored by field of any document created/uploaded and printed/faxed etc. Sometimes a client or user doesn't want their full name to show in document headers or in stored documents, etc so they enter either only their first name here, or initials here, etc. The Authored By field looks and pulls the alias field first. If nothing is entered in the alias field, it will pull the user's full legal name. The below screenshot is an example. Example: Albert Aorta does not have anything entered into his alias field, so any document he creates, indexes, uploads, etc is stored by his full name. Example: alex someone who entered <em>alex</em> in for their alias field and  {{% system-name %}} stores documents created by this person, uploaded, indexed, etc by his/her alias name/field since something is entered into that field.

![](../access-control-adding-deleting-editing-users.assets/7fa4377cee3cabd84c47c3f6974ea0cc.png)

* <strong>Primary Dept</strong>: Chose the PRIMARY department for this user using the drop-down arrow.
* <strong>Organization:</strong> Type the name of your facility/practice/company.
* <strong>Current Status:</strong> Should be default to <em>Active</em> when adding a new user. If the user is considered active, then a username and login password must be entered. Users that will not access the system (example: Pharmacy names/fax #'s, etc) would be status of Login Disabled. No password would need to be entered for non-accessing (disabled) users.
* <strong>Security Role:</strong> Message: <em>Warning, No Security Role for User</em> will appear. Select security role by using the drop-down arrow. Highlight and select the security role this user is to be in. You <em>must</em> select a security role for the user. It will give you an error at the top if you try to submit a new user without making a selection in this field.
* <strong>Def. User Role:</strong> Message: <em>Warning, No Default User Role for User!</em> This <strong>must</strong> be set for any <em>Referring Physician</em> user adds. For any other types of users, you can leave this/skip it. If you leave it blank/skip it, it automatically defaults and saves to <em>User-Limited Access</em> role. If adding a Referring Physician user, set this to Referring Physician.
* <strong>Electronic Prescriber:</strong> These fields are <em>only</em> for physicians/users who can legally prescribe medications and what to be a verified/certified SureScripts electronic prescriber. Please make sure to read the other help documentation named [Setting Up E-Prescribers](setting-up-e-prescribers.md) before check-marking any of these selections.
* <strong>Meaningful Use:</strong> checkmark Eligible Provider if the user wishes to opt-in for the Meaningful Use incentive from CMS to track meaningful use criteria for this user/provider. Enter the start date to start tracking. Click the Meaningful Use verbiage link on the left and it will open up the Meaningful Use criteria to checkmark which reporting measures the user wishes to report on.
* <strong>Title:</strong> Usually left blank.
* <strong>First Name:</strong> This is a required field. You cannot add a user without entering a first name here.
* <strong>Middle Name:</strong> Type middle name, but most type just middle initial.
* <strong>Last Name:</strong> This is a required field. You cannot add a user without entering a last name here.
* <strong>Suffix:</strong> Enter in the suffix here and not with the Last Name field. This field is for example: JR, SR, III, etc.
* <strong>Degree</strong>: This is for anyone that has a ‘title' next to their signature. Enter MD, NP, FACS, RN etc.
* <strong>Address, City, State/Province, Zip/Postal Code:</strong> Enter information with work address, etc. Postal Code field will accommodate international postal codes and display as they are entered without auto-formatting.
* <strong>Preferred Route:</strong> This is for the datasend feature (sending documents, etc) between  {{% system-name %}} systems/clients and for point & click exams. This is the default method the user would like to send information (Print, Fax, Electronic). If <em>Electronic</em> is selected, there is a Route Detail that appears. The detail is the destination the documents should be sent to by default. If you will be faxing encounters (point & click exams) to referring physicians, etc—this must be set to FAX for that referring physician user here.
* <strong>Route Comments:</strong> This is a text field that can be used as a comment/note as to why the preferred route was set to what it is, etc.
* <strong>Phone Numbers:</strong> Enter information for work, pager, home, cell, fax numbers. Can also enter phone numbers in international format. To enter an international number, type the plus sign <strong>+</strong> first in the field and then continue to type in the international phone/fax, etc number. If you type the + (plus sign) first, there won't be any automatic formatting done on it. Otherwise, standard US formatting will still be applied if there is no <strong>+</strong> entered first in the phone fields.
* <strong>Cell Number Carrier:</strong> Can select the company carrier of their cell phone.
* <strong>Email:</strong> Enter email address. This is an important field to fill out if wish for tasking and/or e-signing requests to be notified to you via email if you have that preference set in My Settings.
* <strong>Preferred Alert Method:</strong> Choose Email or Text Message.
* <strong>PIN:</strong> MIE will enter a PIN number for any physician that accesses phone dictation. MIE phone dictation line must be utilized for this.
* <strong>Universal ID:</strong> Enter the UPIN number (Unique Physician Identification Number) here for physicians and PA's.
* <strong>DEA Number:</strong> Enter DEA number of user (prescribing physicians)
* <strong>National Provider Id (NPI):</strong> Enter NPI of user (physicians).
* <strong>License Number:</strong> Enter the State License number of the user.
* <strong>Password Expire Date:</strong> Make it today's date. Simply click the TODAY button. That way it prompts the user (when they login) to create their own unique password since the generic one you are setting will expire today. Passwords expire every 30 days and the user is prompted to change their password when logging into  {{% system-name %}} 30 days from when the password is set/changed. However, when creating a new user, you want it to expire ‘today' so they will be prompted immediately upon initial login so they can set their own unique password.
* <strong>Login Expire Date:</strong> Leave blank. If your company sets up a temporary user for a limited amount of time to access their {{% system-name %}} , they can enter a login expire date here and it will automatically (on this date entered) expire their login and they will not be allowed to log back in after the expiration date.
* <strong>Password</strong>: Type in any generic password. You must give this password to the new user so they know what to type in for the first time. It will then prompt them to change the password to their own unique one, which can hold up to 50 characters and can be configured with alpha, capital letters, lowercase, numbers or other characters and are stored using a one way encryption to prevent passwords from being decrypted. Any <em>active</em> users must have a password to access the system. If the user is disabled, no password is necessary as they aren't users who will be accessing the system so you can leave it blank.
* <strong>Verify Password</strong>: Retype in the generic password you have set as the initial password for the user.
* <strong>Your New PIN Vericode:</strong> Enter a PIN number here to access e-orders. If your practice is set up where you have to enter a PIN number to create an e-order for patients, you must have a PIN number entered here. This is a personal identification number so you can enter whatever you like. This PIN number is for some practices that have their e-orders module locked and you have to enter a PIN number to create orders for patients.
* <strong>Verify New PIN Vericode:</strong> Re-enter your PIN code here from the field above. This is just for verification that you entered the correct/same PIN number. This currently is used for the e-orders module if your practice is set up where you have to enter a PIN number to create orders for patients.
* <strong>Security Question:</strong> You can type in a question that the user wishes to refer to if he/she needs their password reset, or other information. This is just to verify that this is the person you are talking to that wants changes made.
* <strong>Security Answer:</strong> Answer to the security question that the user must verify/identify in order to access/change things.
* <strong>Add Photograph:</strong> Click the Add Photo hyperlink to take a patient photo or upload a saved photo.
* <strong>Add Signature:</strong> Click the Add Signature hyperlink to upload a signature image. This signature image will display on documents programmed to display a signature.

### Departments

Check all boxes that this user will be a department of. Make sure you also click the department box that you made this user's Primary Department above. Then click the rest of the departments (if they belong to more than one dept.)

### Refresh with the User Patients Listedit

This hyperlink and list does not get rendered at all if the setting "Webchart", "Settings", "Limit users to Provider Organization" is turned off. This is a feature mainly used by our Corporate Health practices. Clicking on the Refresh with the User Patients List link will query the system to render the list.

![](../access-control-adding-deleting-editing-users.assets/6970edf5b3236ef2fc094cae1f6de86f.png)

At that time the hyperlink will change to say Show patients Linked to User. When you click this link, then the system will render the list of the patients tied to that user.

![](../access-control-adding-deleting-editing-users.assets/e230cf8ae8af588dc1f77a68049e6c4c.png)

However many patient charts are linked to the user will display in a listedit format. You can add or delete user patient relationships here.

![](../access-control-adding-deleting-editing-users.assets/7b8e0a2c1745c0f3517f8314fa0e91cc.png)

Click **Submit Insert or Submit Edit** at the bottom.

At the very top will say in blue "username successfully added". Or, it will give you an error and tell you what it is and you can go back in and edit fields to the user you just created.

It will also check to see if the user exists and if they are active or inactivated. Then you get an option to reactivate the user if it was already in there as inactive (instead of them being added again as a new user).

## Edit/View a User

Click *Control* tab on the left sidebar menu.

Click *Access Control* tab at the top.

You can search for a user if you know what department(s) they are attached to and view that way. Click the underlined department name and you will see all users tied to that department.

However, it is much easier to search by a user's last name. In the Search box at the top of the Access Control tab you are in:

**Criteria**: leave as Begins With

**Search**: Type in the **last name** (or the first few letters of the last name) for the user you are searching for.

**By**: Use the drop-down arrow and select NAME

**Show**: Click the … box to open your choices. Show only Active users, Show only Inactive users, Show only Deleted users. You can check-mark which or as many filters here as you wish to show results for.

This will pop-up any matches to that last name (or first few letters of the last name if you entered).

![](../access-control-adding-deleting-editing-users.assets/264f675e32044af4050ef0167ae12efc.png)

Once your results produce, click on the underlined username (on the left column) that you want to edit or view. This pops up the summary screen of this user's information. You can view all the information for that user. There is also links in the summary to view when the user's last login failed and when the user last logged in.

![](../access-control-adding-deleting-editing-users.assets/1ce80e5076339bfeff818f88094e659a.png)

Below this section of the username screen, it will display what departments the user is a member of, any restrictions, security exceptions, etc.

If you edit an existing user's security role (if you change the security role they are currently set to), when you submit your edit in their username screen, you may see a prompt box. If the user has any existing security role exceptions set, it will prompt if you want to keep their security role exceptions that are set, or if you wish to delete them and set the user to the security role settings that are default to that role you are changing them to.

![](../access-control-adding-deleting-editing-users.assets/f3d5838cc6cac82382a77664d2fe1f0b.png)

You can also select options at the top of this user's summary.

![](../access-control-adding-deleting-editing-users.assets/1ce80e5076339bfeff818f88094e659a.png)

### Options

![](../access-control-adding-deleting-editing-users.assets/672ae9b9d051025a8e63ea3428a0b20a.png)

#### Edit User

If have security role permission to manage users, this link will appear.

Can click this to make changes to the username information screen and then click *Submit Edit* at the bottom.

This is also where you can make a user ‘inactive' in your system by changing the status to Deleted or Login Disabled.

Customize User Security

When you are *within Edit User*, you will see this option. If you have security role permission to change security options for users, this link will appear. Click this to make changes to security role permissions that will be only applied to this specific username only. This does not affect the entire security role.

In order to get to this *Customize User Security* section, you must click Edit User first, then this link/option will appear. Make changes, scroll down to the bottom of the security screen & type the reason why you made changes, then click *Update Individual Security* at the bottom of the screen. (See separate instructions called Security Role Settings)

Change Signature

When you are within the View or Edit User screen, you can update the current signature with a new signature image. To complete, click on the Change Signature hyperlink and upload the new signature. The signature image will coincide with the time frame for which the image was current. Any signed documents from the time frame of the previous signature will still display that previous signature. When the new signature is loaded, any new documents that are signed will display the new signature.

#### Delete a User

When you *delete* a user or a realm, it does not permanently delete it. It marks it as "deleted", but you can reactivate any user. If you need to put them back in as a user, you click on *Show Deleted* and on the username you want to reactivate, click *Activate* to reactivate them in the options column.

When you *delete* a user or a realm (department) you will get a warning that asks you if you really want to delete before actually deleting either of them. Click Yes to confirm and complete.

If you need a user completely deleted, you need to call MIE to have that done. Otherwise, delete them as inactive and they will show up in the users, but under ‘deleted' users.

If you are deleting a physician who was certified by SureScripts as an electronic prescriber in {{% system-name %}} , please see other help documentation named [Setting Up E-Prescribers](setting-up-e-prescribers.md) for the correct steps on how to disable those specific users so SureScripts is notified **before** you can delete them as a user from your  {{% system-name %}} system.

#### View Audit Log

If you have security role permission, this link will appear. You can click this to view the patient's this user has viewed/worked in and view activity using the Audit Log Search fields. See separate instructions titled *Audit Log Search*.

![](../access-control-adding-deleting-editing-users.assets/16ca40bbdb9ad5df8846582179af1708.png)

#### View User Revisions

If you have security role permission, this link will appear. You can click this link to view dates and who revised anything for that user in their user screen.

## Learning Management System

To learn more about Access Control - Adding, Deleting, Editing Users, follow the link below to the Learning Management System course:

* [Access Control](https://mie.talentlms.com/shared/start/key:LTZIDNHR)
