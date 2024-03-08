---
id: '1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM'
title: 'Security Role Settings'
date: '2020-03-10T14:14:41.266Z'
version: 175
lastAuthor: 'Alan Quandt'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/latest/documentation/components/system_admin/compare_security_roles.html'
source: 'https://drive.google.com/open?id=1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM'
wikigdrive: '028c9969b6de1b1821f0b338eb112d2421a13029'
---
The {{% system-name %}} system is HIPAA compliant and the role based access control security determines who can access the EHR system, and which features of the system the staff member may use. The {{% system-name %}} administrator can allow or limit staff access to patient information, lab results and {{% system-name %}} modification features. Security roles can be defined for an entire department such as physicians, reception, outside guests such as hospitals, or roles can be customized individually.  
Review user security settings for individual users or role based needing access to the various functionality, and give permission, as appropriate. The feature on how to compare security role based permissions is available in the[ ](https://docs.enterprisehealth.com/latest/documentation/components/system_admin/compare_security_roles.html)[Compare Security Roles](https://docs.enterprisehealth.com/latest/documentation/components/system_admin/compare_security_roles.html) online help.

## Editing Security Settings


### For All Users in a specific Security Role

Click Control Panel tab from left sidebar menu.  
Click Security Role Editor tab from top menu.  
Select the security role that you wish to change security settings for by clicking edit to the right of the department security role name.

![](../security-role-settings.assets/6bfc3187734d1b54d9b6aa5f15f78d88.png)

At the top it will display which security role you are in for editing.  It also states the number of current users in this role. Click the view revision history for … to view revisions previously done to this security role.  This opens up a new window and you can search for revision details.  This is also the same link named Revisions that is provided in the prior listing of security roles options column.  
Change any security settings by using the drop-down arrow in the field(s).   

{{% note %}}
Security setting changes being made to the security role here, affect every user that is tied to the security role being edited.
{{% /note %}}

![](../security-role-settings.assets/c3daeb2c995b4eacd325ac0900578547.png)

When finished changing any security settings for the entire role, scroll down to the bottom of this security role edit screen.  At the very bottom there is a text field where you are required to type in the reason for the security permission change(s).  You have to type something in here or it will not save your edits.  Then, click the Update Individual Security button below that.  It then saves these security settings for this individual user only.  These changes do not affect the entire security role, just this individual user.

![](../security-role-settings.assets/3a5209e5d779022c2ae4960ac2d8302e.png)

You will then get a confirmation message that you successfully edited/updated that entire security role.   You can select another security role department to change or continue to work in {{% system-name %}} .

### For Individual Users

Individual users can be configured to have specific levels of security settings edited without affecting all users in an entire security role.  This would be for individuals who need permission or restricted from certain things, whereas the rest of the users in the same security role do not.  The user has the default security settings for their security role department, but editing security permissions for individual users allows you to select exceptions to some security fields just for this individual user only.
Select Control on left sidebar menu.
Select Access Control from the top tab menu.
Search for the specific user from Access Control using various search methods available.

![](../security-role-settings.assets/f3aa24efd3eefa9cd6d7bc77e9b247e4.png)

Once the specific user has been located, click Edit on their user line at the far right.

![](../security-role-settings.assets/766da06dab398158c1c096a6fc8cb2ef.png)

After clicking Edit, the system takes you to the edit screen of their user details. Click Customize User Security hyperlink at the top right of the edit user screen.

![](../security-role-settings.assets/361efb21f1135b23231d68a3d18402e7.png)

The Individual Security settings screen for that user will open. Select any security settings to change (for this specific user) by using the drop-downs in any security permission setting. When finished changing any security settings for the specific user, scroll down to the bottom of the individual security edit screen.  At the very bottom there is a text box field where you are required to type in the reason for the security permission change(s). You have to type something in here or it will not save your edits. Then, click the Update Individual Security button below that. System will then save these security settings for this individual user only.  The changes done here for individual user do not affect the entire security role, just this individual user.

![](../security-role-settings.assets/91e57b02035129efd83b5b41e61aea48.png)


## Summary of Security Role Settings


### WebChart


* Revoke PHI Access:  This permission controls access for a user to view or edit any tabs that display patient or personal health information (PHI), including E-chart, Appointments, Orders, and Documents. The following settings are available:


   * Yes: The user cannot view or edit tabs with PHI.
   * No: The user has access to view and edit tabs with PHI, and can access all patients based on their remaining user restrictions.


* Statistics: Allows users in a security role to access reports from the Reports Tab and System Reports.
* View Transcription Stats: In Control, in Statistics, Tran Reports. Yes to this setting allows users in a security role to view transcription statistics report.
* Limited to NMC area:  No or Yes if users should only be restricted to NoMoreClipboard area.
* Update Logo:  If user has permission, they can edit/upload/change the logo that appears in the top left corner of the practice's {{% system-name %}} system.  
* Asterisk Auto-Dial From: When viewing a user, if you have permission and system is set up, their work,home,cell will be links to call them. You must have a number on your user account or permission to specify a from number.  From MY NUMBERS or ANY NUMBER.
* Save Portlets:  'Own' allows user to set their own set of portlets on any facesheet type page or patient summary portets. 'Default' allows users to set defaults for security roles.
* Appliance Synchronization: Select Yes to enable appliance synchronization. Appliance synchronization allows a designated user to download patient data and other information (including configuration like reports, layouts, and settings) from a WebChart database from a primary server in order to transport and upload the data to a mobile server. This setting is often used for clients who operate clinics in remote, mobile facilities, such as cruise ships.
* Use Macros: Yes allows users to use dot.macros functionality through the magic wand icon.
* Macro Add/Edit: Yes allows users to access the macro dialog through the magic wand icon. This dialog allows creating, editing, searching, and enabling/disabling .macros system wide or to specific libraries.
* Manage Ledger: Yes allows user access to the Ledger and transactions.
* Manage Encounter Charges: This controls user access, view or to edit charges on an encounter. This is a specific charges section that is unique to ledgers, etc.
* Set Grid Defaults: Yes allows user to set default grid preferences for all other users in the system.


### E-Chart


* Limited Access: This permission controls user access to specific patients. A user has access to a patient either through a direct relationship (such as provider to patient or supervisor to employee), or through the department they belong to (such as the nursing department to a patient). The following settings are available:


   * Yes: The user can access only the specific patients they have a direct relationship with. Relationships are defined in the setting Edit Patients Linked to User under Access Control > Edit User. If the Limited Access field is set to "Yes," it overrides the Restrict Access By Partition setting, and partition restrictions are ignored.
   * No: The user is not restricted to the relationships defined in Edit Patients Linked to User under Access Control > Edit User.


* Restrict Access by Partition:  Partitions are created in the Partition Manager to group information in {{% system-name %}} (patients, documents, etc.). Restricted partitions are hidden from certain users. This field determines whether or not a user can see patients in restricted partitions. The following settings are available:


   * Yes: The user can only access patients in unrestricted partitions or in restricted partitions to which their user or their department has access. Patients in hidden partitions do not display in search results and are not accessible. If the Limited Access field is set to "Yes," the Limited Access setting overrides the Restrict Access By Partition setting, so partition restrictions are ignored.
   * No: The user is not limited in the patients that they can see based on any partition restrictions.


* Allow Emergency Access to Charts: In emergency situations, a user may need access to patient information that is normally restricted. This field determines if a user can access a patient that they do not normally have access to for a limited time (the amount of time is configurable under System Settings). If either of the fields Limited Access or Restrict Access by Partition are set to "Yes," the Allow Emergency Access to Charts setting is used to search and access patients that are normally restricted to a user or department. Audit logs are stored for all patients accessed through this setting. Options:


   * Yes: The user can view a restricted chart for a limited time after confirming that access is required for each patient that is requested.
   * No: The user cannot access restricted patients.


* Limited to Default Tab:  This restricts users in a security role to only be able to view the tab/module that is set as the ‘selecting folder' in My Settings for each user.  A user will not be able to access any other tabs/modules.
* Patient Relationships: If set to View, users can only view patient relationships. If set to Edit, users can edit and end relationships. If set to Delete, users can do all the aforementioned and also delete patient relationships.
* Limited to Restricted Items: Setting to ‘No' allows the user to access everything unless they (or dept) are specified to be restricted from a specific doc.type, document, chart tab, or encounter type. This also applies to adding documents, and Print definitions now.That is the default. Setting to ‘Yes' limits the user from accessing no doc.types, documents, chart tabs, or encounter types.  They (or dept) must be specifically "allowed" to a doc.type, chart tab, or encounter type in order to see it. This setting allows a user to be marked ‘restricted' and only enable the certain things they should be able to see (doc.type, chart tab or encounter type, visit types).
* Limit DOB: Restricts the user from viewing a patient's DOB/Age Restricts in listviews and autocompletes, Document Queue, pocket mode, headers, etc.
* Demographics: The Demo screen (1st tab) on a patient's E-chart shows summary info of that patient, address, etc.


   * No Access: No access to the demo screen when a patient's chart is open.
   * View: Can view demo screen on patient's chart, but can't modify it.
   * Add: Can add/manually add a patient into the {{% system-name %}} system (if your system does not interface w/ {{% system-name %}} , or you manually add each patient)  Refers to patient registration. Can add only, not edit demo. info.
   * Edit: Can manually add/edit/change information on demo screen on a patient's chart. Can edit/add alerts, etc.


* Patient Insurance Policies:  This insurance screen shows on the patient demographics screen.


   * No Access: No access to the patient insurance. Nothing insurance related to the patient shows on the demo. screen at all.  Keeps insurance info private.
   * View: The demographics screen shows insurances and allows a scan of the card.  No editing, no adding options allowed.
   * Add: Same as view but also gives you the add insurance option. Users can add Insurances, scan, view existing, but not change existing ones or delete, etc.
   * Edit: Allows users to add insurances, view existing and new, edit existing, scan cards, delete etc. All options available.


* Checkin: Allows a role access to checkin patients if your practice is set up for this. You can checkin a patient from the scheduler or from the demographic tab. Also allows access to the Checkin tab on the left sidebar menu.
* Station Manager:  If set to Yes, users can access the Station Manager tab in Checkin. This gives the permission for these users to add, edit, & delete check-in stations.

* Chart Online: This is whether or not users in a role can mark a chart as online in {{% system-name %}} . This is how you can manually mark charts online full, partial or none with comments outside of the scanning software.
* Patient Merge inside Partition: Users can merge patients together inside of the partition that they are working in, such as MR or other partition that they are set to.
* Patient Merge outside Partition: Users can merge patients together over multiple partitions, but not inside the partition they are in (unless above option is marked).  This is crucial for some clients who have patients from multiple billing systems.
* Patient Merge All MR#'s: Users can merge patients anywhere in the {{% system-name %}} system.
* Delete Patient From Doc Queue: Allows role to delete a patient from the Document Queue tab in {{% system-name %}} .
* Patient Merge Match Rating Sync: Allows users to update the patient matches (ratings) through the doc.queue
* Delete Patient MRNs: Allows users to delete MR#'s associated with a patient's medical record.
* Document Signature Override: Allow users within a security role to request another signature if a document is already signed or override a signature, or other things after a document has been signed.
* Document Lock: Allows users to lock a document so that no one can view the document or make changes to the document if they do not have permission to use the document lock system.
* Manage Document Records:  If another user is editing a document and you want to get into that document also at the same time, it will lock the document from your access since one user is already in it.  This permission allows the users in the role to remove those locks.
* Document Move: Allows users to ‘move' documents into another patient's E-chart. Example: if they were indexed to the wrong acct, etc.
* Document Delete: Allows users to ‘delete' documents from a patient's chart.  It will take document away, but will still show up as a deleted document in that patient's file/chart.
* Document Undelete:  Allows users to ‘undelete' document from a patient's chart.  It will reactivate the document.
* View Preliminary Documents: If set to YES, the users have the permission to view all preliminary documents and can un-request any preliminary e-sign request.  If it is set to NO, then only the owner or the transcriber of the document is able to view the preliminary document and un-request the preliminary e-sign request.
* Author Documents: If set to No, this permission will restrict a user from being the authored by user on a document. The user will still have access to upload a document but the "Authored By" will be set to zero.
* Document Permissions:


   * No Access: No access/ no view to any type of document in a patient's chart.
   * View: Can view the documents in a patient's chart tabs only.  Cannot have access to add documents link or edit existing documents.
   * Add: Can add a document by scanning, word, text, or the add document link, etc. Also this setting allows the user to edit their own documents without having the ‘edit' permission set here.
   * Append:  Can append a text document only if they are not the owner/creator of the original document. They cannot edit the original document; they can only make an appendage to the text document if they were not the creator (author) of the original document.
   * Edit: Can append or edit any and all documents in a chart regardless if the user was the creator (author) of the original document or not.


* Create Document Rights for All Patients: In the {{% system-name %}} environment, this will be set to None.  This setting is only used currently for NoMoreClipboard and isn't applicable to {{% system-name %}} at this time.  For NoMoreClipboard users, the security level this is set to allows the user to view, add, edit, or delete a document for ANY patient, regardless of if they technically have "rights" to the patient by other means we check.  It doesn't allow them to do anything else with documents or anything else on patients they don't have rights to, just being able to upload a document to any patient's chart.

* Restrict by Document Send:  If set to Yes, this permission restricts the users viewable documents to those that have been sent to them.

* Transcribe for others: A person can enter/add documents into the system for someone else such as a doctor, etc.   When creating a document, the AUTHORED BY: will allow you to choose the physician, etc for the document if this is set to YES.  If NO, your name will always be in the AUTHORED BY field and you cannot create/add documents for others as their name. Also, make sure this is set to YES if indexer or transcriptionist.  

* Sign Document: If set to Yes, this allows users within a security role the ability to sign documents.  You can sign ‘any' document in any patient's chart and also can sign documents from E-Sign tab.   If set to No, this limits users within a security role to only being able to sign their own documents sent to their specific username in the E-Sign tab. They can only sign their own E-sign requests.  The users would not be able to sign just any document in any patient's chart or for any other user's pending e-sign requests.
* Manage Doc Types:


   * None: No access to document types tab from a patient's E-Chart at all.
   * View: Can only view the document types from that tab. Cannot edit, add types or inactivate.
   * Add: Can view and add document types from that tab.  Cannot change/edit existing types or inactivate/delete types.
   * Edit: Can view, add, and edit existing document types from that tab.  Cannot delete/inactivate a doc.type.
   * Delete: Can view, add, edit and delete document types from that tab.


* Manage Doc Type Text Templates:


   * None: Only allows users to view/select a text template doc.types in that tab.
   * Add: Allows users to add text & view a text template in doc. types tab.
   * Edit: Allows users to view and edit/change an existing text template in doc. types tab.
   * Delete: Allows users to add, view, edit, and delete/inactivate an existing text template in doc. types tab.


* Manage Doc Type Word Templates:


   * None: Only allows users to view/select a word template doc. type in that tab.
   * Add: Allows users to add a word template & view to a doc.type in that tab.
   * Edit: Allows users to view and edit/change an existing word template in doc. types tab.
   * Delete: Allows users to add, view, edit, and delete/inactivate an existing word template in doc. types tab.


* Manage Master Word Template: Allows or denies access to the master Word Template in the Doc Type Editor tab. It is commonly used for storing global AutoText that all the transcriptionists need.
* Manage Doc Type Form Templates:  Allows or denies access to the Add and Edit feature of changing and adding forms to the forms library in the Doc Type Editor tab.
* Manage Doc Type Restrictions: In the Document Type tab, and  select a doc. type, YES will allow users to checkmark the box to Restricted Viewing to only allow certain users/roles to access that doc. type information when adding/editing a doc. type. NO does not make this check-mark box available to users when they edit/add a doc. type.
* Manage Doc Type Purge Rules:  If set to Yes, users will see a link in the Document Types editor tab to ‘View Purge Rules'. From that link, users can view/edit/delete existing purge rules that are set up for documents or create new. If set to No, the user will not even see this link or have access.
* Allow Doc.Type Declaration:  If set to Yes, users can specify the doc.type abbreviation when creating or editing a doc.type to the system. If set to No, users cannot name a doc.type.  The system will automatically assign a doc.type number to the doc.type created.
* Manage User Roles:  Allows access to the User Role Editor tab in Control. This is mainly for MIE use/programming.
* Manage Locations: Refers to the Loc Editor tab in E-Chart


   * No Access: Click Loc Editor tab and have no access
   * Add: Click Loc Editor tab and can add a location of your company/site. This affects indexing.
   * Edit: Click Loc Editor tab and can add or edit or delete a location in your system.
   * View: Click Loc Editor tab and can view the locations only. No changes can be made.


* Manage Chart Tabs: YES allows users full access to the Chart Tab. Meaning can view, edit, add, delete chart tab types.  NO does not allow users any access to this tab entirely.
* Manage Chart Tab Restrictions:  If set to Yes, users are permitted to restrict chart tabs and maintain user access to those restricted chart tabs.  The link restrictions option in the chart tab column appears for these users that are allowed to manage the chart tabs that are restricted. They can also un-restrict Chart tabs that have been set to be Restricted Access. If this permission is set to No, the users will not be able to un-restrict chart tabs or edit (manage) any allowed users for a restricted tab. The restrictions option in the chart tab column will not be available to these users.
* Manage Print Defs: YES allows users full access to the Print Definition Editor tab. Meaning can view, edit, add, delete print definitions.  NO keeps a role from accessing this tab entirely.
* Manage Print Def Restrictions:  If set to NO, when creating or editing a print definition, the user is not allowed to restrict the print definition.  If set to Yes, the users can restrict a print definition and set the Allowed Users list for that print definition.
* Allow Print Def Declaration:  If set to Yes, users can name print definitions.  If set to No, users cannot name a print definition or edit the name.  The system will automatically assign the name as PD# to the print definition.
* Manage Encounter Types:  Yes allows users in the role full access to the Encounter Visit Types tab in the control tab.  Meaning users can view, edit, add, delete encounter visit types.  No keeps a role from accessing this tab entirely.
* Manage Encounter Exams:  Yes allows a role full access to the Enc Exam Editor tab in the control tab.  Users can access & change in the editor for encounter exams for the system (this is mainly for MIE use).  No keeps a role from accessing this tab entirely.
* Manage Observations:  Levels are No, View, Add, Edit, Delete.  Delete level gives a user full permission to edit, delete, add observations in a patient's chart.  No will not allow the user to access the patient's observations tab. These levels are related to the observations chart tab in a patient's chart. Anyone with encounter rights should also have rights to this setting.
* Manage Observation Flowsheets:  If set to Yes, users can create new or edit existing flowsheets from any observations tab located in the patient's chart.  If set to No, the function button for create/edit flowsheets will not even display for the user to access.
* Print Only Non-printed Documents: This setting places a check-box on the Print window that allows users to print only the documents that have not been printed.  
* Allow Printing of Locked Documents:  If permission is Yes, it allows users to print a document that is locked.
* Allow Re-Printing/Faxing of Print Jobs: Choose Yes or No. This will allow these users to have the resend option in the Fax Manager in the spools.
* Allow Batch Printing: Choose Yes or No. Users can append print/fax jobs into a batch which allows for picking and choosing specific documents within a chart, or even between different patients. Also allow a user to create a batch if running a Document Report search found in the reports module.
* Allow Print Without Headers:  Choose Yes or No. Users with yes permission will be given the checkmark box in the Print mode whether they want to print/fax the document with a patient summary header at the top of the document or not. The No permission will make the printing/faxing of any document for that user always have the patient summary header at the top of the document.  They do not have an option.
* Document Queue: This queue is for documents that come from an outside source such as Parkview, that need to be manually linked to a patient in {{% system-name %}} .  Users can then look at the documents and send them to the correct patient if {{% system-name %}} could not figure it out (couldn't merge).


   * View: Can view the document queue tab to see what's out there that needs to be merged.  If have right set to view, the users will also see the # of Doc Queue documents pending & the link at the top left of the screen.
   * No Access: Cannot view the document queue tab to see what's out there to be merged. Users will not see the # of Doc Queue documents pending nor the link.


* Print Chart:  


   * None:  Users in the security role will not be able to print or fax any documents.  Can only view.
   * Print: Users in the security role will have the option to print documents only.  No faxing option available.
   * Fax: Users in the security role will have options available to fax and/or print documents.  Full access.


* Print Dicom:  Allows or denies access for users to print Dicom documents between systems. Also allows or denies users the ability to burn DICOM images to a CD.
* Securely Email Documents: Allows or denies access for users to setup and create auto routes and manual data routes for sending documents via routing. This must be set to 'yes' in order to use Send by AutoRoute security setting.
* Send Patient Data:  Allows or denies access for users to setup and create auto routes and manual data routes for sending documents via routing.  This must be set to ‘yes' in order to use Send by AutoRoute security setting.
* Send by AutoRoute:  Select either No, Matching Only or All.
* Unlock Sending Routes:  This is mainly for MIE/Techsupport use and specific admins allowed to this function. In some cases of a coding error, routes can become ‘stuck' in the ‘In Progress' status as ‘sending' status. This security allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool. This feature allows the unlocking of any 'stuck' route which has been stuck for more than an hour.
* Chart Define Fax Number: Allows or denies access for users to setup fax numbers for faxing from {{% system-name %}} .
* RX Manager: Allows users in a security role to access levels of the Meds Tab for any patient.  


   * View: Can only view information in the Meds tab for a patient.  Can't edit/add or delete anything.
   * Add/Append: Can add or append to drugs/prescriptions in the Meds tab, but cannot change or delete anything.
   * Edit: Full access to the Meds tab. Can add, change, delete, etc.  
   * No Access: Totally blocked from the Meds tab screen of a patient's chart, also blocked from the meds/allergies summary header in any tab of the patient's chart.


* RX Remember Freq:  Allows a role to save changed frequency values on meds.
* RX Library Edit: Allows a user to edit the names of the Libraries in the system.
* RX Search: Allows a user access to the Meds under the Reports tab, which gives a quick summary of all the meds on the system.
* RX Change Therapy: Changing therapy permission of YES will allow the user to be able to change scripts and will set the script to be in the print/fax queue. Changing therapy automatically puts the med on the list to be printed/transmitted.  If your permission is set to NO, you can still edit it to fix mistakes, but you cannot cause it to be printed without the physician's approval.  
* DICOM Push: This is to allow users to send DICOM images in the {{% system-name %}} system.
* Conditions:  This allows users to manipulate the conditions seen in the Conditions Tab of a patient.  This could be existing conditions that the patient has or new conditions that you want to add.  Each condition is recognized by an ICD-9 code.


   * No Access: No access to the patient's conditions tab;
   * View:  Can view the patient's conditions tab only;
   * Add: Can view and add patient & family conditions to the tab;
   * Edit: Can view/add/and edit/delete to the patient's conditions tab.


* E-sign Template Editor: This allows users within a security role to access the tab in E-Sign called Esign Editor.  This is the tab that shows the e-signs set up to request automatically and can add a template from here.  
* Storage Report Display:  Allows users in a role the ability to run the storage report or not.
* Simple Add: Allows users in a security role to access Simple Add module/procedure in the Meds tab for each patient.
* Prescribe: Allows users in a security role to access Prescribe module/procedure in the Meds tab for each patient.In Control category:
* Manage E-Rx Refills for Others:  Allows user to be able to see all pending e-refill requests in the e-refills queue pending for all prescribers.  They can then work those e-refill requests for the prescriber (ex: physician goes on vacation and allows another physician to work his incoming requests because all requests need to be worked within the mandated 48 hour timeframe from SureScripts).
* Drug Interaction Alerts:  Sets the severity of drug-drug interaction warnings shown to the user.


   * Show All: All severity levels of warnings will be shown;
   * Moderate: Moderate severity and higher warnings will be shown;
   * Severe: Only severe, contraindicated and higher warnings will be shown;
   * Hide All: No drug-drug interaction warnings will be shown.


* Dismiss Warnings:  This sets the level of permission for dismissing any warnings in the Meds tab program and other programs where warnings/alerts your system may be set up for.


   * No:  will not allow users in the security role to dismiss warnings at any level.
   * Yes: will allow users in the security role to dismiss warnings for your viewing only and for that patient only.
   * Dismiss for all Patients:  Usually only the Physician has security rights to dismiss at this level. The physician can dismiss the warning for that specific patient only or also has the option to dismiss the specific warning for all patients for the physician's view.   If the physician dismisses a warning for "all patients' they would only have to dismiss once and never see it generated again.  We discourage this because it really defeats the purpose of showing warnings and affects all other patients and the warning won't pop-up again for any patient.
   * Dismiss for All Users:  Usually only the Physician has security rights to dismiss at this level.  The physician can dismiss the warning for that specific patient or all patients and dismiss it from view for all users.  


* MIEWebScan:  Sets the level of permission of access to MIE WebScan program.


   * No Access: will not allow users in the security role to access MIE WebScan left sidebar menu tab program.
   * View: will allow users in the security role to view batches in MIE WebScan left sidebar menu tab program only.  Cannot open or complete a batch in MIE WebScan.
   * Edit: will allow users in the security role full access to MIE WebScan left sidebar menu tab program.  Users can view, open batches, index batches and upload batches.


* Add Document to Locked Charts: If user has security as YES, the indexer can index documents into locked charts, but because the chart is locked, clicking on the links that normal indexing allows will not allow them to see the patient's chart. Therefore, they must simply click the Upload to Chart button.
* Manage Baselines: It allows users to add and edit Audiogram baseline data.
* Send Email to Patient: Yes allows users to utilize the email link and feature in {{% system-name %}} to email patients or email appointment reminders to patients from {{% system-name %}} .
* Manage VarTree Entries:  Yes allows users to utilize the add new link to add new var-tree selection entries when in encounters and using the var-tree data entry method.  If set to No, users will not see the add new link in a var-tree selection in encounters.
* Allow setting of FAX From:  If set to Yes (default is No) the user can choose the CSI value of a fax. The CSI value is the Call Station Identifier that is part of the FAX header - it is essentially the caller id of the FAX. If user is set to Yes permission, in the print chart module (fax mode) a drop-down field named From: will show and user can select from a drop-down of fax #'s to set the fax ‘from' on the header that the recipient receives.
* Allow Unrestricted Pat Search: This permission enables a user to search for (but not necessarily access) any patient, regardless of Limited Access or Partition Restriction settings. The following settings are available:


   * Yes: The user can search for any patient, regardless of Limited Access or Partition Restriction settings.
   * No: The user can only search for patients that are accessible based on Limited Access or Partition Restriction settings.


* Manage Saved Templates: Default is set to Self meaning the user can only delete their own saved templates in encounters, etc.  If set to ALL, the user can delete their own or anyone else's saved templates.
* Allow Auto reconcile of XML Uploads: If set to Yes it allows user to import data from CCR/CDA documents without having a user-patient relationship.


### Control


* Manage Settings:NONE: In the Control tab on the left sidebar menu, in My Settings, it denies user(s) access to view their settings/preferences in My Settings.


   * Manage Own Settings: In My Settings, it allows the user(s) to view and edit/manage their own preferences/settings when they are logged in as that username.  Cannot view or change other user's settings/preferences.
   * Manage Other Users Settings: In My Settings, it allows user(s) to view/edit their own settings/preferences and user can select other user(s) and manage/view/change the other user(s) preferences.
   * Manage Default Settings: In My Settings, it allows user(s) to manage their own and other users settings for My Settings preferences.  This also allows user(s) to manage/edit/change/view system default settings and security role default preference settings.


* View Users:


   * None: Denies access to users to the view departments in View Users Security. Also this level only shows minimal username information in the dictation module.
   * View All Users: Allows access to the view departments in View Users Security for all depts.
   * View Users in Realm: Allows access to the view departments in View Users Security for that department you are tied to only.


* AJAX User Add:  Allows users to use the Add New Physician link that displays in the demo header, or options to add users when faxing or setting a preferred pharmacy.  Also allows users to add pharmacies to the Add New Pharmacy link in e-meds fax/transmit mode. These are considered AJAX type modules. The Layouts need programmed by MIE Implementer.
* Manage Users: Allows users different levels within "Access Control" tab.


   * None: Users can get to Access Control and do searches on users only and view only.
   * Edit Selt: Can only edit your own user information and own security if you have that right. Can't  edit or add or delete other users in the system. View only to others.
   * Manage Realm: Can only manage (edit) users in your assigned department.
   * Manage All: Can manage (edit/add/delete) all users in Access Control


* Manage User Signatures:  Allows users to view, add, edit signatures for other users when you view a specific username screen.


   * None:  Can view the signatures of users on their username screen only.  Cannot edit/add signatures for any user.
   * Edit Self: Can edit/add signature for your username only.  Can view the signatures of other users on their username screen only.
   * Manage Realm: Can edit/add signatures for users in your specific primary department only.  Can view the signatures of other department users on their username screen only.
   * Manage All:  Can edit/add signatures for all users in the system in the username screen.


* Manage User Photographs:  Allows users to view, add, edit photographs for other users when you view a specific username screen.


   * None:  Can view the photo of users on their username screen only.  Cannot edit/add photo for any user.
   * Edit Self: Can edit/add photo for your username only.  Can view the photo of other users on their username screen only.
   * Manage Realm: Can edit/add photos for users in your specific primary department only.  Can view the photos of other department users on their username screen only.
   * Manage All:  Can edit/add photos for all users in the system in the username screen.


* Manage Access: Allows users to change the settings for other users in Security Role Settings (Control).


   * None: Users have no access to Security Role Settings.
   * Manage Realm Access: Users can access Security Role Settings and only change settings for their specified department users.
   * Manage All Access: Users have access to Security Role Settings and can edit all users settings for departments.


* View User Watch:


   * Yes: Allows users access to the User Watch tab in Control.
   * No: Denies access to the User Watch tab in Control.


* Close Active Logins: If YES, can go to the User Watch tab in Control and delete a person's login.  Can close their active session so that they have to login again.
* View Print Manager:


   * No: Denies access to the Print Manager tab in Control.
   * Yes: Allows users to access the Print Manager tab in Control.


* View Outgoing Faxes:


   * Own: Restricts users to only seeing their own outgoing fax jobs that were sent.  
   * All Users: Allows users to see all outgoing fax jobs sent by anyone.


* Manage Printers: Allows you to set up printers and change settings in the printer options of the Print Manager tab in Control.
* View Translations: YES allows users to access the Tran Manager tab in Control to view only.
* Add Translations: YES allows users to access the Tran Manager tab in Control to view and add only.
* Edit Translations: YES allows users to access the Tran Manager tab in Control to view, add, and edit only.
* Delete Translations: YES allows users to access the Tran Manager tab in Control to view, add, edit & delete.
* View Menu Options: Allows users to access the Menu Editor tab in Control.
* Manage Menu: YES allows users to access the Menu Editor tab in Control to add, edit, delete, etc.
* View Security Roles: YES allows users access to the Security Role tab in Control to view only.
* Add Security Roles: YES allows users access to the Security Role tab in Control to view and add roles.
* Edit Security Roles: YES allows users access to the Security Role tab in Control to view, add and edit/change, delete roles and settings for a Security Role.

* View Color Picker: Access to Colors tab in Control.  Can change the colors of the company/sites {{% system-name %}} database.
* DICOM Queue: Allows access to the DICOM Image Queue and all the settings that go with it.
* Application Entities Editor: Allows a user to add/edit/delete DICOM Application Entities.
* System Settings Editor: Allows a user to manage/add/edit/delete common system settings in this tab in Control. If user has access, can also see the link in the (?) online help box that will display system settings used on page.
* Manage Partitions: Allows a user to manage/add/edit/delete partitions in this tab for their {{% system-name %}} system in Control.
* Meds Manage: Allows a user to access the Meds Manager Tab in control.
* Observation Manager: Allows a user to access the Observation Codes tab in Control that allows you to add/edit or delete observation codes for the observation module.
* Manage Layouts: Yes allows a role to access the Layout Manager tab in Control. This is mainly for MIE use to edit/create html for how a tab/module/document layout/view looks like.
* Manage System Layouts:  Yes allows a role to access the System Layout Manager tab in Control.  This is mainly for MIE use to edit/create html for system layouts. The edit-layout icon at upper left hand corner of a rendered layout also displayed so can quickly access the layout from the page currently viewing.
* View Activity Logs: Allows a role to access the Activity Log tab in Control. Log of specific information that displays users that have accessed your system and their actions. Can choose partial Cgi Data View or Full Cgi Data View. Also can view failed logins.
* Manage Record Locks: Allows a role to manage record locks in patient documents.
* Manage External Interfaces: Allows a role to manage external interfaces with their {{% system-name %}} system.  MIE uses.
* Manage System Reports:  No, Run Only, Add/Edit. The level of permission selected is the level of which users in the security role will be able to run or work on system reports.
* Manage Autocompletes:  No, View, Add, Edit, Delete  The level of permission selected is the level of which users in the security role will be able to access AC Manager tab in Control.
* Manage ICD9s:  No, View, Add, Edit, Delete. The level of permission selected is the level of which users in the security role will be able to access ICD9 Code Manager tab in Control.
* Manage Patient Access: Allows a role to edit the allowed patient list for restricted access users. Without this permission users cannot access and change user patients list.
* Restrict Viewing by Department:  This is for NoMoreClipboard use. You can setup that a user can only see things that the specific dept has access to. So, if you are in the physician role for a patient you can see things that the physician dept has access to. If you have rights you can click Access control and click edit on a specific dept, you will see viewable depts.  For instance, if you click edit on administrator you can then select what depts. the administrator users have access to.  So if you give a certain department access to the control module, you could select what depts. they have access to view. This is mainly for NMC use.
* Manage User Patients:  In order to be able to update the user patients table you need to have this role set to Yes. For now this affects the list edits for the user_patients table:  WCPATUSERSLE and WCUSERPATLE.  They both update the same table, but the first adds/deletes users to a patient and the other one adds/deletes patients to a user.
* Refer to Systems Editor:  Yes will allow users to set up server systems that {{% system-name %}} sends information to through this table. This setting allows us to set up without having to go into the database ourselves and add it in manually. This is mainly for MIE use.
* Manage Insurance Plans:  This level allows users to manage the insurance plans in the master list of Insurance Plans tab of Control. 'View','Add','Edit', and 'Delete' are the options to access this tab.
* Manage Clinical Restriction Types: None, View, Add, Edit, Delete.  The level the user is set to allows them that function in the clinical restrictions module. The function level lets them into the editor where they could manage the types of restrictions that are allowed.
* Manage Fee Schedule:  Yes will allow users access to the Fee Schedule tab in Control.  This is where you can add/edit/delete fee schedules to profiles for the system.
* Manage Injection Codes:  Yes will allow users access to the Injections Codes tab in Control.  This is where you see a master set of codes. Some practice are concerned about certain codes in their injection auto-completes, so this editor can be used to either hide some of these or rename them to suit the practice.
* Manage Custom Pharmacies:  Set as no unless your practice system has a special medication dispensing machine that can receive messages in the same format as those that we usually send thru SureScripts.  This dispensing machine sends the messages to a different URL than SureScripts so that it goes to the machine instead. There is a new editor for setting up a machine like this so that it looks like a regular pharmacy that can be e-sent to and set as a patient's preferred pharmacy. This security setting set to Yes would allow setting up those custom pharmacies for the dispensing machine.
* Allow .csv data import: Yes allows users access to the tab DATA IMPORT tab found in Control Panel sidemenu tab. If set to NO, users can't view this tab at all. YES security allows the user access to the tab and is able to download a .csv template file to import data and fill in patient demographic data using a spreadsheet application.
* Manage Patient Merge Log: Allows users to view the Merge Manager tab in Control.  Can view and search patient accounts that have been merged in {{% system-name %}} .  Users with EDIT security to this setting have access to the UnMerge link and can unmerge patient accounts using caution.
* Manage Languages:  This is for a system that has a specially configured multilingual system to need this security permission. You would need to contact MIE Implementer if the practice needed their system to be multilingual (when MIE releases this feature-currently still in beta testing) and then this security setting would be applicable. User can see translate bubbles also if this is on for the user.
* Allow connections to foreign systems interfaces: This security setting allows a user to access Web Services (or other types of interfaces) that MIE has built into {{% system-name %}} .  There is a new module called wc_connector. The connector works by posting or browsing to a URI in {{% system-name %}} .  {{% system-name %}} will then talk to the foreign systems through their interface. Therefore, we specifically have to give certain user accounts access to it, because not everyone will need to or should be able to access the web services (or other type of interface).   
* Add Help Text: In Beta testing still—contact MIE first. If that setting is set to yes, the user will see the page context and the normal help question mark that when clicked will create a popup for them to enter the help text.
* Upgrade WebChart: Users with security and run their {{% system-name %}} upgrade at any time for any RC versions available.  For more information, contact your MIE implementer. If permission to this, one can also reload stored procedures, triggers, and views from the wcversion page.
* Manage Messenger: Access to the {{% system-name %}} Messenger control
* Manage CPT Codes: Access to the CPT Codes editor in Control to manage picklists & modifier picklists.
* Organization Administrator (EO/PO Unrestricted User Search): Allows users to see all users when "Limit Users To Provider Organization" system setting is enabled. Allows access to view all users regardless of PO.
* Manage Chart Types: Allows users access to Chart Types Editor. This editor is mainly for clients that have two different types of patients -- regular patients and provider/employer organizations.  Chart type is an attribute that to be applied to chart tabs to determine whether or not a chart tab will be displayed.  For a "patient" that is a provider/employer organization, tabs that don't make any sense (like E-orders) would not be displayed.
* Manage Spell Check: Allows users to add words to the {{% system-name %}} spell check library and access the Spell Check tab in Control to edit, delete, manage saved entries.
* Manage Scripted Rules: Allows users to no access, view only access, or full access (edit/add) to the Scripted Rules tab found in Control tab.
* Manage Scripted Rule Restrictions: Allows users to be able (or not) to set Scripted Rules (Guideline alerts) to show up for certain users in specific departments when working in patient's chart. Scripted Rules can be set up to only show/trigger for users tied to specific departments and restricted from showing up for others.
* Manage Shared Files:  Allows viewing of the system's Shared Files.
* Access DB Records via JSON API: Allows access to the /json/ API. This is mainly for MIE use.
* Manage Inv Trans Settings: Choose the departments that are allowed to manage inventory transactions
* Manage Accounts: Allows users to add new accounts to the system and manage the information
* Manage Contacts: Allows users to add new contacts to the system and manage the information


### Scheduler


* View Schedule: Yes allows users in this security role to view schedules.
* Add Schedules: Yes allows users in this security role to add schedules.
* Edit Schedules: Yes allows users in this security role to edit schedules.
* View Appointments:


   * No: Users in this security role cannot view appointments in the scheduler tab.
   * Yes: Users in this security role can view appointments in the scheduler tab.  ONLY OWNED: Users in this security role are only able to view appointments that he/she has created, no one else's. "Owning" an appointment also consists of being the resource of an appt.


* Add Appointments: Yes allows users in this security role to add appointments.  Shows add apt option in {{% system-name %}} .
* Edit Appointments: Yes allows users in this security role to edit existing appointments.
* Add Apt Historically: Yes allows users in this security role to add appointments before the current day.
* Edit Apt Historically: Yes allows users in this security role to edit the existing appointments before the current day.
* Add Apt Outside Schedule: Yes allows users in this security role to add an appointment outside of a physician's/person's set schedule (if a schedule currently exists for that physician/person). Override feature.
* Overbook Appointments: Yes allows users in this security role to overbook/overlap appointments to a schedule.
* View Apt Types: Yes allows users in this security role to view the type of appointment patient is being seen for in the scheduler/appt. slot.
* Manage Apt Types: Yes allows users in this security role to create/delete/edit appointment types and templates.
* Manage Cancel Codes:  Yes allows users in this security role to create/edit/delete cancel/no show codes.
* Schedule Resource at Multiple Locations: If yes, the user can schedule resources at multiple locations.
* Manage Resource Restrictions: If yes, the user is allowed to add/delete users from a restricted resource's access.


### Dictation


* Dictation Access:


   * None: The users will not have access to the left sidebar menu tab called Dictation.  
   * Play: The users will have access to the left sidebar tab called Dictation and play any dictation. Cannot edit dictation, cannot grab or complete a dictation job, etc.  Only play dictation.
   * Edit Own: Gives the users access to their own dictations for editing, completion, etc.
   * Edit All:  Allows users to change/edit any dictation in the queue.


* All Pending Tab Access: Yes allows this role to have a tab called ALL PENDING and can view all dictation that is pending.
* In Progress Tab Access: Yes allows this role to have a tab called IN PROGRESS and can view all dictation that is in progress.
* Completed Tab Access: Yes allows this role to have a tab called COMPLETED and can view all dictation that is completed.
* Incomplete Tab Access: Yes allows this role to have access to the INCOMPLETE tab in the dictation module. Currently the incomplete tab is only used for Point & Click Exam dictations.
* Deleted Tab Access: Yes allows this role to have a tab called DELETED and can view all dictation that has been deleted.
* All Tab Access: Yes allows this role to display the ALL PENDING tab in the dictation module.  Depending on what security Show All/Unassigned is set to, this All Pending tab may only show the users assigned dictation only, or allow the user to view all dictation regardless of assignment.
* Stats Tab Access: Yes allows this role to have a tab called STATS and can view statistics and time durations for each status of pending, completed, deleted, all, etc.
* Routing Tab Access: Yes allows this role to have a tab called ROUTING and can view the route the dictation takes to the correct person.  To change or add to this field, you would have to call MIE. Certain clients have several transcriptionists and can route to a specific transcriptionist or company to be done, etc.
* Job Type Tab Access: Yes allows this role to have a tab called JOB TYPE and can view the different job types that are set up for dictating to. Can add or delete job types from here.
* Add Dictation: Yes allows this role to have access to add dictation from e-chart, scheduler, patient header, and the add dictation links in encounter exam sections, var-trees, etc.
* Move Dictation:  Yes allows this role to transfer a dictation between patients on the dictation edit dialog.  Can move from the patient's e-chart or from the dictation side menu tab.
* Assign Dictation: Yes to allow a role to assign dictation to specific users.  No doesn't allow specific assignment.
* Grab Unassigned: Access to [Unassigned] in the Dictation menu.  If access, then can work on these that aren't assigned to a user, etc.
* Search Dictation: Access to [Search] in Dictation menu.  If access, then can click on this to search for a specific dictation by using the parameters it asks for.
* Held Tab Access: Yes allows this role to have access to the HELD tab in the dictation module.
* Show/All Unassigned Jobs: Yes allows the users to see ALL pending dictation jobs in the system regardless if it's assigned or not. If set to No, the users can only see their assigned dictation and would be forced to click grab next job to get another dictation job to do. Some clients set their users to No so they cannot pick & choose which dictation jobs to complete.


### Esign


* View Access:  Allows users to get into the Esign left sidebar menu tab.
* Esign Editor Access: Allows users within a security role to access the Esign Editor top tab in Esign. This is for MIE use. MIE can set up automatic e-sign tasks to happen in many situations/documents/functions, etc.
* All Pending Access:  None, View or Delete.  


   * None: Does not allow users to access the All Pending E-Sign tab.
   * View: Allows users to the All Pending E-Sign tab to see who and how many e-signs are pending and can also preliminary sign others e-sign requests from here.
   * Delete: Allows users to the All Pending E-sign tab with all the same permissions as view has, but also this level allows a user to clear e-sign queues for other users.


* Proxy Signing:  Yes allows users security to the proxy sign link in the all pending e-sign tab. Another physician/user can replace that person's signature with his/her own (so that documents can be sent out without having to wait for that person to return to e-sign.) When that link is clicked, the multi-review queue will open and the user with rights will be able to choose the documents he/she wants to sign. His/her signature is added to the document(s) and the other person's signature/e-sign request for their signature is removed. This will remove that document from the person's document queue.


### TaskList


* View Access:  This allows users to view the TaskList tab and tasks. Users who have View Access set to NO for tasklist will not appear in the user drop down when adding a task.  Those users set to NO view access will not be available in the drop-down for other users to select to task to. Those users will not be able to be tasked since their security is NO for View Access in tasking. Also, they will not be tasked when All Must Acknowledge is selected as the user for any department/practice wide, etc.
* Add Tasks: This allows users within a security role to add/send/create tasks. Shows the add task option in {{% system-name %}} . You must also have access to this if you choose the E-sign options of Sign and Add Task, Reject and Add Task, or Add Task W/O Signing.  If you do not have this access and you click one of those options, you will get an error message and a task will not be sent.
* Manage Tasks:


   * OWN: Allows your tasks to be viewed and worked on, edited only.  Task would have to be specified to your username.
   * REALM: Allows your department tasks to be viewed and worked on, edited.  Task would have to be specified to your department or department(s) if you belong to more than 1 dept.  
   * ALL: Allows you to view, work on, edit all tasks that are assigned.


* Manage Fast Tasks: Allows you to create/delete/edit fast-task templates.
* View All Pending: Choose Yes or No. This will allow you to see the tab called ALL PENDING tab in the Task List tab.  This shows all the tasks that are still pending by users and by departments.
* View All Completed: Choose Yes or No. A user can always view the Completed tab. It will only show their specific username completed tasks though if this is set to NO. It will not allow a user to see any other person's completed tasks or search for them. If this is set to YES, a user will be able to view their own username completed tasks in the Completed tab, and a search box will appear at the top. This allows users within a security role to search for another person's completed tasks, another department's completed tasks, specific owner or sender, and also allows a date range.
* Task Search:  Choose Yes or No.


   * Yes: Allows access to the Task Search tab found in the Task List sidemenu module.
   * No: Will restrict a user from accessing the Task Search tab.


* Edit Tasklist Events: Allows a user to view/edit/delete in the TaskList Events tab. Tasklist Events are how a task is triggered when a document is added/edited/signed if a TaskList Events is set up for that document.
* Clear All Tasks:  Allows a user to see the Clear All Tasks option link in the All Pending Tasklist tab.  The user can then clear all tasks from a user's queue quickly and in mass if needed.


### EMR


* View Encounters: This allows access to view the side menu tab named Encounters. Some systems have this tab, others do not.  This is a worklist of encounters open. Some clients keep that worklist in Omniscope instead.
* Delete Encounters:  Allows users in a role to delete a patient's encounters. The delete link will appear on a list of patient's encounters if they are allowed to have this permission.
* Link Documents to Encounters: Allows users in a role to link stored documents to a specific encounter.
* Reopen Closed Encounters:  Allows users in a role to reopen closed encounters.  If the encounter is closed and this permission is set to No, the user will not be able to view or edit any closed encounters.  They would have to edit the archived document of the encounter. An e-sign rule can be set up to notify physicians to sign again if an edit is done that way.  If this setting is set to Yes, the user will be able to reopen a closed encounter by clicking the set open link in the patient's list of encounters. If using this security setting (by restricting users to No for reopen closed encounters) then you must have the system setting turned on for Show Set Open Link by MIE so the allowed users can see the set open link.
* Remove Encounter Sections: This setting allows users to remove sections from dynamic encounters.  Users need to have this set to "Any except locked" or "Any" to be able to hide or remove encounter sections in new encounter design. An encounter section can be defined as "locked" in the outline layout, and in that case, the user needs the higher "Any" privilege to be able to remove it.


### Orders


* View Access:  Allows access to add an order in the Orders tab or from any add order link.
* Edit Order Pick Lists: No permission denies a user access to the Picklist tab in the Orders module. View Only allows users to view the Orders Picklist tab contents only.  Edit allows users to manage and edit the Orders Picklist tab.
* Edit Orders: Pending Only allows users to edit pending only status orders. Partially Completed allows users to edit pending only & partially completed status orders. Fully Completed allows users to edit all types of order statuses.
* Manage CPT Requirements: Allows access to the CPT Requirements tab in Orders. It's a listing of CPT codes that tie/required for certain diagnosis or insurances for Orders.  List of diagnosis good for CPT codes. Allows edit/view/delete/add.
* Manage Order Panels: Allows access to the Order Panels tab in Orders.  A named panel can include many individual tests/orders and this tab provides the listing of them and allows edit/view/delete.
* Manage Order Locations:  Allows role to access the Order Code Locations tab in Orders. CPT codes for Orders can be tagged to specific location(s). This tab provides the listing of them and allows edit/view/add/delete of this procedure.


### Inventory


* View Inventory: Allows users access to the Inventory tab and modality on the left sidebar menu.
* Receive Inventory: Allows users to access and use the Add Inventory and Add Donated tabs to add/receive meds into Inventory.
* Transfer Inventory: Allows users to move and transfer inventory items to other sites, stockpiles  (or specific patients if using that modality) via the Transfer Med hyperlink option found in Show Inventory tab.
* Expire Inventory: Allows users to expire inventory items and quantities via the Expire Med hyperlink option in Show Inventory tab.
* Edit Inventory: Allows users to be able to edit general inventory in the Show Inventory tab of current quantity and comment fields.
* Fill Prescriptions: Allows users access to fill prescription orders from inventory for patients in Med Queue tab or from Dispense tab in a specific patient.
* Verify Fills: Allows users access to verify prescription fills in Med Queue tab for a patient or from Dispense tab in a specific patient. Verify Fills is an optional feature and is controlled by a system setting, but this is the security setting to perform that feature if it's turned on.
* Dispense Inventory: Allows users access to dispense and undispense meds for a patient in the patient's Dispense chart tab.
* Return Fills to Inventory: Allows users access to return a fill to inventory in Dispense chart tab for a patient.
* View Transactions: Allows users access to view inventory via Transaction Reports tab of Inventory module.
* Edit Transactions: Allows users access to the Edit Transaction hyperlink option in Transaction Reports tab of Inventory module.
* Edit Inventory Mappings: Allows users to map inventory items to orders, meds, injections and allows users ability to edit those mappings of inventory items in the Mappings tab of Inventory module.
* Edit Master Inventory List: Allows users to add items to allowed general inventory and ability to edit names and aliases of allowed general inventory items to the system via the Control tab of Inventory module.
* Merge Inventory Items: Allows users to merge two or more general inventory items into a single inventory item via the Control tab or Mappings tab of Inventory module.
* Manage Stockpiles: Allows users to add and edit inventory stockpile sub-locations for main inventory locations via the Stockpiles tab of Inventory module.  MIE has to delete a stockpile if needed.
* Manage Stock Warning Levels: Allows users to manage inventory warning levels via Par Levels tab of Inventory module.  Par Level minimums and maximums for general inventory items can be set or edited if users have this access.


### Mammogram Tracking


* Delete Mammogram: Allows role access to delete option in Mammogram left side bar tab or MamTrac tab in a patient's e-chart.
* Mammogram Permissions: Allows role access to update, edit, delete options in Mammogram tab of left side bar or MamTrac tab in a patient's e-chart.
* Copy Followup Forms to Other Users:  In the mammogram module, there is a ‘Set Preferences' link which allows the user to associate a birad/location with a form from the forms library. This association creates the rules for the default follow up forms selected for each patient.  This security item determines whether the user is allowed to copy their form default rules to another user's default rules.


### Explanation of Benefits


* EOB Permissions:  This is access to the EOB left sidebar tab.


   * No Access:  No access to EOB left sidebar tab.
   * View Access: Allows role to access EOB left sidebar tab.  Can search, print EOB's, print index pages, etc, but cannot edit an existing EOB batch.
   * Add Access:  This is the same security level as View Access.  View Access and Add Access are the same thing for this permission.
   * Edit Access: Allows role to access EOB left sidebar tab.  Can search, print EOB's, print index pages, etc and can also edit descriptions an existing EOB batch (Document type, Date, and Description).



### Incoming File Queue


* Incoming File Queue:  This is access to the FaxQ left sidebar tab (these are incoming/received faxes.)


   * No Access:  No access to FaxQ left sidebar tab.
   * View: Allows role to access FaxQ left sidebar tab.  Can search, preview, print faxes but cannot edit, move, delete or categorize received faxes.
   * Manage: Allows role to access FaxQ left sidebar tab.  Can search, preview, print, manage, move, categorize, batch, index received faxes.
   * Permission Editor:  Yes allows users to access the FaxQ Perms tab found in control and access to the phone number permissions function button in the Fax Queue itself.  This is where incoming file queue phone number permissions are set. If set to no, the phone number permissions function button will not display in the Fax Queue itself and the user will also not have access to the FaxQ Perms tab from control.



### Health Surveillance


* Panels:  Access users to add/edit Health Surveillance panels in the Health Surveillance tab found in Control.
* Membership: Access to add/edit membership roles.  Also Individual include & exclusive.
* Membership Addt'l Criteria:  Allows users to view or edit Additional Criteria field (Panel>Membership role>Additional Criteria).
* Approve Panel Membership:  Allows users to approve a patient/employee in a panel. "Approve Panel Membership" button appears for appropriate roles to approve membership.
* Actions: Allows users to view or edit action items within panels in the Health Surveillance tab
* Manage Action Rules: Allows users to add action rules that can be referenced by panel actions.
* Manage Panel Permissions: Allows users to view or edit panels on the Health Surveillance tab .
* Panel Membership Evaluator: Allows users to use the HS Test tab to run new health surveillance membership after changes are made.
* Panel Action Evaluator: Allows users to use the HS Test tab to run new health surveillance actions after changes are made.
* Decertify:  Yes gives users the ability to manually decertify an employee for a given panel.  This privilege only needs to be given to the system user that effectively runs the automated health surveillance processes, as there is no user interface currently for creating a de-certification record.  
* Manage Work Regions:  Yes gives users the ability to add and modify work regions.  Work regions can be associated with a panel for easy geographic differentiation of panels.


### Injury and Illness


* Case Manager:  In systems that use a legacy layout, Yes allows users to create Case Management Encounters.  These are the encounters that are used to manage an incident as it progresses.  When it's set to "Yes" on the legacy Incident report, there will be a new link that says "Create Case" that will create the encounter.  ‘Yes' allows user to have access to the case management module using legacy layouts.  The case manager user will only have access to view cases to which they are assigned. If newer system on newer layouts, this security permission is not used for any functionality and is being retired.
* Delete:  Yes allows users to delete incidents.  When set to "Yes", a new "Delete" link will appear under the options column on the incident report as well as on any incident list views on a patient's chart. ‘Yes' allows user ability to delete an incident from the Incidents sidemenu tab in the injury/illness module.


### Time Tracking


* Log Time:  Yes allows users to key in hours within the Time Tracking portlet of Quick View and within their provider chart.  
* Delete Time: Yes allows users to delete a Time Tracking entry from their provider chart or any time tracking entries from a provider org (PO) chart via the Location Time Tracking tab.
* Manage Others Time: Yes allows users to key in hours for other providers in the other providers chart.  It will also allow users to key in time for other providers in a provider org (PO) chart via the Location Time Tracking tab.
* Bill Time: Yes allows users to visibly see the Bill Time button and perform that function from the provider org (PO) chart in the Location Time Tracking tab.

When done making changes to security permissions, you must type in a reason for the change.  You cannot update or save the changes without typing in the reason.

![](../security-role-settings.assets/759808c68d4974e4c2eba66c7da30ab9.png)

To save the settings, click Update Role at bottom of the screen if editing settings for entire security role.
Or click Update Individual Security at the bottom of the screen if editing settings for a specific individual user.

