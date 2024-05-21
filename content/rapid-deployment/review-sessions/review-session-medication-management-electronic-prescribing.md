---
id: '1kZu9kGFhNMnnQ5p3t__nuU5O-ahq96DygXSRPqH41ZU'
title: 'Review Session - Medication Management/Electronic Prescribing'
date: '2024-05-21T16:18:05.338Z'
version: 61
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=admin&s=medsmanage&tabmodule=admin&tabselect=Meds+Manager'
  - 'https://system/?f=admin&subfunc=rxlibraryeditor&t=Library&tabmodule=admin&tabselect=Library'
  - 'https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control'
  - 'https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings'
  - 'https://system/?f'
  - 'https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control&opp=auser&realm'
  - '../../functions/system-administration/system-controls/user-provider-and-department-management.md'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - '../../functions/medication-management-and-e-prescribing/surescripts-advanced-prescription-and-insurance-eligibility-requests.md'
  - '../../functions/system-administration/security/security-role-settings.md'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/encounters/encounter-plan-section-medications.md'
  - '../../functions/medication-management-and-e-prescribing/allergies-and-intolerances.md'
  - '../../functions/medication-management-and-e-prescribing/discontinue-medications.md'
  - '../../functions/medication-management-and-e-prescribing/drug-guide-search.md'
  - '../../functions/medication-management-and-e-prescribing/drug-interaction-allergy-warnings.md'
  - '../../functions/medication-management-and-e-prescribing/drug-plan-and-formularies.md'
  - '../../functions/medication-management-and-e-prescribing/e-refills-all-e-refills-tab.md'
  - '../../functions/medication-management-and-e-prescribing/e-refills-e-scripts-tab.md'
  - '../../functions/medication-management-and-e-prescribing/e-refills-my-e-rx-errors-tab.md'
  - '../../functions/medication-management-and-e-prescribing/e-refills-my-pending-refills-tab.md'
  - '../../functions/medication-management-and-e-prescribing/edit-change-medications.md'
  - '../../functions/medication-management-and-e-prescribing/allergy-medication-tab-quick-links.md'
  - '../../functions/medication-management-and-e-prescribing/surescripts-advanced-formulary-and-dosing.md'
  - '../../functions/medication-management-and-e-prescribing/surescripts-advanced-medication-history-reconciliation.md'
  - '../../functions/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md'
  - '../../functions/medication-management-and-e-prescribing/allergies-medications-tab-summary-view.md'
  - '../../functions/medication-management-and-e-prescribing/setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.md'
  - '../../functions/medication-management-and-e-prescribing/prescribing-adding-medications.md'
  - '../../functions/medication-management-and-e-prescribing/print-fax-transmit-prescriptions.md'
  - '../../functions/medication-management-and-e-prescribing/refill-all.md'
  - '../../functions/system-administration/system-controls/setting-up-e-prescribers.md'
  - '../../functions/medication-management-and-e-prescribing/unknown-allergy-medication-email-notifications.md'
  - '../../functions/reports/e-meds-report.md'
  - '../../functions/reports/medication-report.md'
  - '../../functions/reports/uncoded-medications-report.md'
  - 'https://drive.google.com/open?id=1Hh-Up6MnYTqvnc2vEx38lXyRG5rbm4ln3jnd8Qy_G7Q'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=b79e8477f8cdb0cabd019dcd7f998b16'
source: 'https://drive.google.com/open?id=1kZu9kGFhNMnnQ5p3t__nuU5O-ahq96DygXSRPqH41ZU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Medication Management/Electronic Prescribing Demonstration</strong>
* <strong>Overview</strong>
* <strong>Medication Management</strong>
    * <strong>First DataBank Integration</strong>
    * <strong>Meds Manager</strong>
    * <strong>Medication Libraries & Remembered Entries</strong>
* <strong>System Configuration</strong>
    * <strong>Paper Prescriptions</strong>
    * <strong>SureScripts Prescriber Verification Process</strong>
    * <strong>Enrolling Providers in Surescripts</strong>
        * <strong>Electronically Prescribe Controlled Substances (ECPS) Option</strong>
    * <strong>Receive E-Refill Requests</strong>
    * <strong>Terminated E-Prescriber</strong>
    * <strong>Surescripts Advanced/Drug Eligibility Option</strong>
    * <strong>First DataBank Quarterly Report</strong>
    * <strong>System Settings</strong>
    * <strong>Security Role Permissions</strong>
    * <strong>My Settings Preferences</strong>

## Overview

Medication management is a simple process for the provider and support staff when using {{% system-name %}} . Medications can be entered quickly and easily using an autocomplete feature, which provides coded data input that is standardized and accurate. Furthermore, when the medication dosing and form information is entered, any potential contraindications can be set up to trigger alerts, prior to the prescribing, to assist clinicians in always providing safe, quality care.

Also intended to assist in better patient care, the {{% system-name %}} system offers *electronic prescribing* (E-Prescribing) of medications. E-Prescribing is a necessity in today's connected world. By submitting electronic prescriptions, it is not only less likely that prescriptions will be lost en route, but significant time is saved during the dispense process, thanks to the fast transmission of easily-readable information to and from pharmacies.

Standard {{% sys-name %}} functionality includes:

* <strong>First DataBank Integration</strong>
    * {{% sys-name %}} partners with First Databank, a comprehensive U.S. FDA-approved drug database and drug decision report tool, to check for drug?drug and drug?food interactions, as well as drug allergies, at the time a prescription is written or filled. The database is updated every 7 days.
* <strong>SureScripts e-Prescribing Integration</strong>
    * Through the SureScripts network, providers can securely transmit prescriptions to, and receive refill requests from, pharmacies across the nation, eliminating the need for paper scripts, faxing, and phone calls. The SureScripts network includes all of the nation's leading chain pharmacies, many of the nation's leading payers and pharmacy benefit managers, as well as over 10,000 independent pharmacies, nationwide. The {{% sys-name %}} system allows for sending prescriptions to pharmacies that are not part of the SureScripts network, as well.
* <strong>Electronic Prescribing of Controlled Substances</strong> (<strong>EPCS</strong>)
    * Custom configuration of EPCS and SureScripts Advanced functionality is available as an add-on service. This will be scoped and billed separately, as needed.
* <strong>Eligibility and Medicare Formulary</strong>
    * SureScripts-certified electronic prescription management provides real-time access to eligibility and drug formulary information of a patient's Medicare insurance and/or pharmacy benefit plan, if available.
* <strong>Reporting</strong>
    * Several reports are available within the {{% system-name %}} system, designed to assist with providing quality care and tracking of managing prescriptions, medications, and drug utilization reviews. Some of these reports include:
        * Allergy Report
        * Controlled Substances Report
        * EPCS Incidents Report
        * Meds Report
        * Meds Report - Custom Report
        * Meds Report - Duplicates Report
        * Prescriptions Report
        * Prescriptions Printed / Faxed / E-Sent Report
        * Unsent Prescriptions Report
        * Uncoded Meds Report
        * Unrecognized Patient Allergies Report

## Medication Management

Within the {{% sys-name %}} system, any medication may be entered as discrete coded data, using First Databank to ensure accuracy. This provides an accurate historical record of the medications a patient presents with, as well as those being prescribed. Overall, features include viewing a patient's complete medication summary and history, adding or deleting patient drug plans, adding preferred pharmacy information, using medication order templates, providing refill alerts when a prescription is about to expire, and refilling all prescriptions at one time, instead of individually.

### First DataBank Integration

With a First DataBank integration, drug interactions can easily be checked and monitored during the charting process. Physicians are warned of potential drug interactions, and are prompted for drug therapies and/or tests that are indicated by diagnoses, and can note intolerances or other adverse reactions to complete the documentation required, supporting adherence to standard guidelines. Along these same lines, drug interaction checking will alert staff to preventable adverse medication events that may be caused from an allergy. If a user tries to add an allergy that is not recognized by the database, a warning will appear to alert the user that this is an unrecognized allergy. If a user adds a new allergy, and the patient is currently on medication that would cause an adverse reaction, a warning will display in the chart. The user can choose to override these warnings, but it may prevent automated alerts (such as drug interaction or contraindication alerts) from triggering.

{{% info %}}
If a user enters an unrecognized medication, an email is automatically sent to the system administrator with details of the entry, by whom it was entered, and on which patient the system administrator will need to correct the error.
{{% /info %}}

Additionally, duplicate therapies can be easily detected and avoided with the First DataBank integration. {{% sys-name %}} checks the current prescription(s) against the prescription history (both filled and prescribed), and a duplicate therapy alert will be sent out if the newest drug being prescribed is within the same therapeutic class of those medications already filled or prescribed.

### Meds Manager

To view and manage all saved or common prescriptions, utilize the [Meds Manager menu](https://system/?f=admin&s=medsmanage&tabmodule=admin&tabselect=Meds+Manager), found in the **Control Panel**. This menu allows users to view, edit, or delete remembered prescriptions.

The Meds Manager allows searching of specific (or all) libraries, and once the prescription has been located, it can be edited or deleted, if necessary.

To find a saved prescription, verify the Current Library, in the upper-left corner. Set this to the library the remembered prescription was saved to. The full list of saved prescriptions for that library will display. Use the search and available filters to narrow down the results of the library's saved prescriptions, if necessary.

### Medication Libraries & Remembered Entries

Thanks to the expertise and weekly updates from the First Databank database of medications, the {{% system-name %}} solution has an extensive library of medications, set to autocomplete where appropriate and trigger drug/allergy interactions/warnings, as needed. To edit or manage the number of libraries being maintained in the {{% sys-name %}} system, see the [Library tab](https://system/?f=admin&subfunc=rxlibraryeditor&t=Library&tabmodule=admin&tabselect=Library) of the **Control Panel**.

One excellent feature associated with the medication libraries is the ability to save common prescriptions. To help save time for clinical staff and physicians, {{% system-name %}} has made it possible to remember common, or regularly occurring prescriptions, which are saved in non-default libraries.

#### Create a Remembered Prescription

When creating or accessing remembered prescriptions, the correct medication library needs to be set as the *Current Library* in the chart's **Allergies/Medications** chart tab.

{{% warning %}}
Do not use Default library.
{{% /warning %}}

To change the library from *Default*, click the **Current Library** hyperlink, and select the preferred library from the dropdown options. Once the selection has been made, click the **Set** button to save the setting.

![](../review-session-medication-management-electronic-prescribing.assets/6bc868075fb05ac911f25153bf48115b.png)

{{% tip %}}
Most libraries are differentiated by provider (name), office (location), or specialty (taxonomy).
{{% /tip %}}

To create a remembered prescription:

1. First, set the <strong>Current Library</strong> to the appropriate alternative that will be the library the prescription will be associated with and remembered under.
2. Click the <strong>Prescribe</strong> link, to begin adding a prescription.
3. In the <strong>Medication</strong> autocomplete field, begin typing and select the medication name. It is important not to overwrite a saved or remembered prescription. To avoid overwriting a saved prescription, use medications notated with <strong>(New)</strong>. Selecting a (New) choice will prompt users to fill out each field.
4. Fill out all of the remaining fields, as appropriate. The next field, <strong>Form</strong>, will display the most common option, with a list of alternatives below it. The Form will save with the remembered prescription, if an autocomplete option is chosen; however, if the Form is free-texted, it will not be remembered.
5. Use the <strong>Remember As</strong> field to enter the keyword being used to recall the remembered prescription. Generally, a physician last name, medical condition abbreviation, or what the medication is being used for, are all types of keywords often used. Enter the keyword in this field.

![](../review-session-medication-management-electronic-prescribing.assets/1077ec858d2a1c8e5d09f3545a2944db.png)

6. Once all fields have been entered, click the <strong>Prescribe</strong> button to submit the prescription. When the medication is finished being prescribed, that medication will be available for reuse. It will populate all of the same data entered, originally.

#### Use a Remembered Prescription

To prescribe that same medication with all of the associated details, navigate back to the Prescription Details page by clicking the **Prescribe** link in the patient's chart. As long as the library the medication was saved to is set as the Current Library, the medication and its remembered name and associated details will populate when selected from the Medication autocomplete.

![](../review-session-medication-management-electronic-prescribing.assets/f9680e36133c4c671496cf3a23d6c584.png)

{{% tip %}}
The Medication autocomplete choices are not alphabetical, but rather based on frequency of use. Type more characters to limit the list choices.
{{% /tip %}}

#### Update a Remembered Prescription

Updating or changing a remembered prescription is just as easy, if not easier. To begin, load the remembered prescription, as shown above. Once all of the fields populate as expected, make any and all changes necessary. With the changes made, ensure the **Remember As** keyword is set accordingly, and click the **Update** button. This is used to change previously saved scripts anytime after the initial save.

![](../review-session-medication-management-electronic-prescribing.assets/d1d117c6eea6e024c6fcd189a1f4aefa.png)

## System Configuration

Before beginning any enrollments or system configurations, consider the following:

* Ensure proper permissions have been granted for the <strong>Manage Settings</strong> setting, <strong>View Users</strong> setting, and <strong>Manage Users</strong> setting. Control settings must be set to allow modifications to system users. Verify the [Access Control](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control) settings of the user account being used for enrolling the provider(s).
* The prescribing user(s) being enrolled must be in the appropriate department. Verify the name of the Prescriber Department by navigating to the <strong>Control Panel</strong> and selecting the [System Settings tab](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings). Perform a Contains search for <strong>Prescribers Department</strong>. The listed <strong>Value</strong> is the department needed for prescribing users.
* SureScripts E-Prescribing must be enabled for the functionality to work. To verify, perform a Contains search for <strong>E-Prescribing</strong> in the <strong>System Settings</strong> tab of the Control Panel. The setting with <strong>Enable</strong> in the <em>Item</em> column will need to be turned on, or set to 1, in order for the module to be enabled.
* System Setting <em>E-Chart | Meds | SureScripts Staging</em> must be disabled (value <strong>0</strong>) when e-prescribing is live on the production database.

### Paper Prescriptions

{{% system-name %}} comes configured with two versions of paper prescriptions, *Script* and *Script-with Supervisor*, which can be printed or faxed, as needed. These prescription options are programmed to pull in the appropriate prescriber and medication details.

### SureScripts Prescriber Verification Process

As a means to maintain best practices, prior to submitting any requests to SureScripts, an internal verification must be performed for each prescribing clinician. The Deployment Consultant will initiate the internal validation by following these steps:

1. Navigate to the DMS, locate the client, and Add Task of <strong>New Prescriber Verified</strong>.

![](../review-session-medication-management-electronic-prescribing.assets/f8196fa51f53e2c309a59c8e8c393026.png)

1. Once the request is processed, a reply to the task will be provided, and a SureScripts Prescriber ID (SPI) will be assigned to the provider. Always check the provider prior to notifying the client. 
    ![](../review-session-medication-management-electronic-prescribing.assets/1035ccdacc8e6a8023f33d2ac9ea7e68.png)

### Enroll Providers in SureScripts

The first step in being able to fully utilize the medication management and SureScripts features is to have the prescribing users properly set up in the {{% system-name %}} system. Security rights must be enabled to allow the editing or setting up of users in {{% system-name %}} . Once the prescribing clinician is set to become an electronic prescriber, SureScripts goes through a verification process. After verification, prescriptions will be eligible for electronic transmission.

Assuming the user has already been created in the system and the initial setup and verifications have been completed, begin enrolling the prescriber, as follows:

1. Navigate to the [Access Control tab](https://system/?f) of the <strong>Control Panel</strong>.
2. Search for and find the prescribing clinician needing e-prescribing privileges.
3. Simply click the <strong>Edit</strong> link in the <em>Options</em> column.

{{% info %}}
If the prescribing clinician is new to {{% system-name %}} , click the [Add User link](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control&opp=auser&realm), to add the user/provider to the {{% system-name %}} solution. See [User/Provider & Department Management](../../functions/system-administration/system-controls/user-provider-and-department-management.md) for more information on adding users/providers.
{{% /info %}}

4. Ensure these required fields are completed for SureScripts' verification:
    * <strong>First Name</strong>: Full, legal first name.
    * <strong>Last Name</strong>: Full, legal last name.
    * <strong>Suffix</strong>: If the prescriber has a suffix (e.g., Jr., Sr., IV, etc.), this field must be used. Do not place suffixes in the Last Name field. The verification will be cancelled by SureScripts.
    * <strong>Address1</strong>: The main element of the address for the location (i.e., street address, P.O. Box, company name, or c/o).
    * <strong>Address2</strong>: The secondary elements of the location address, if any (e.g., suite, unit, building, floor, etc.).
    * <strong>Work Phone</strong>: Enter full work number, including area code.
    * <strong>Fax Number</strong>: Enter full fax number, including area code.
    * <strong>DEA Number</strong>: Enter a valid, 9-character DEA Registration number.
    * <strong>National Provider Id</strong> (<strong>NPI</strong>): Enter a valid, 10-character NPI number.

{{% info %}}
Nurse Practitioners (NPs) and Physician Assistants (PAs) may be signed up to use SureScripts; however, a blank space must be entered into the DEA Number field using the space bar key. Upon submission, a reminder will be triggered about the required field. Simply acknowledge the reminder and continue to submit the page. **A valid NPI Number is still required for NPs and PAs to be certified with SureScripts**.
{{% /info %}}

5. Locate the <strong>Electronic Prescriber</strong> checkboxes. These selections are intended for prescribers, only (i.e., users holding a National Provider Identifier (NPI) number, and/or DEA Registration number, and are legally allowed to prescribe). Place a check mark in the appropriate checkboxes:
    * <strong>Send New Scripts</strong>: All prescribers must check this box to become certified with SureScripts, to electronically transmit prescriptions from the  {{% system-name %}} . If this box is not checked, prescriptions will be sent as individual faxes, rather than e-transmitted via SureScripts.
    * <strong>Receive Refill Requests</strong>: Prescribers wanting to receive e-refill requests electronically should check this box. This enables applicable pharmacies to send electronic requests for refills, which appear on the E-Refills Alert Taskbar in  {{% system-name %}} . If refill requests are preferred via manual fax and/or phone calls (i.e., not electronically), leave this checkbox unchecked.
6. Verify the prescriber is a member of the Prescribers Department, as described above.
7. When all required fields are entered and the appropriate electronic prescriber boxes checked, click the <strong>Submit Edit</strong> button (or <em>Submit Insert</em> button, if a new user is being created).

#### Electronically Prescribe Controlled Substances (EPCS) Option

The {{% system-name %}} solution is certified through SureScripts to allow qualified providers to electronically prescribe controlled substances (EPCS). An additional expense will be incurred for the permit and Identrist fob, which are exclusive to only licensed providers with a DEA number.

Additional steps are required for both setting up the provider, as well as prescribing the medication.

* The EPCS option must be selected in the user setup. Only System Administrators have access to this option.
* The E-Token Signature App needs installed on the workstation(s) being used by the provider.
* Two-factor authentication, with a token (e.g., USB thumb drive) and token password, is needed in order to prescribe medications.

![](../review-session-medication-management-electronic-prescribing.assets/d6ab34900a8148c1753496f50c860b6f.png)

An EPCS Prescription will not transmit without a Prescriber's Token **AND** Passcode. Failure to provide both will place the medication(s) in an unsigned prescription queue.

![](../review-session-medication-management-electronic-prescribing.assets/171b2ccb50c539709834c4cf657e79d4.png)

{{% info %}}
Even though providers are capable of electronically prescribing controlled substances, not all pharmacies are capable of receiving these electronic requests. {{% system-name %}} displays which pharmacies are EPCS-enabled when a pharmacy is selected for a patient.

![](../review-session-medication-management-electronic-prescribing.assets/a51079a0ee86a362d06554219f0c4442.png)
{{% /info %}}

Prescriptions that CANNOT be Transmitted Electronically

{{% system-name %}} limits or does not allow EPCS transmission for the following Medication Classifications:

* Detoxification/Maintenance Treatment
* Schedule II - Prescription cannot exceed a 90-day supply, in a single session, for a medication with the same Name, Form, and Strength.
* Schedule III & IV – Prescription refills cannot exceed five (5) refills. Refill requests older than 6 months cannot be processed. Prescription Start Date must be Today, therefore cannot be written for future dispense.

### Receive E-Refill Requests

SureScripts allows authorization for refill requests to be handled electronically. There is a SureScripts **requirement** when using the Receive Refill Requests feature. When a refill request is received electronically, SureScripts requires a timely response, or that the request be worked within 48 hours. If responses continue to go unaddressed across a 48-hour timeframe, and there is a regular delinquency with processing/working the refill requests, SureScripts will disable the e-refill request functionality.

{{% info %}}
If a physician is ill or goes on vacation, there is a security setting (i.e., **Manage E-Rx Refills for Others**) the SuperUser can grant to physicians or staff members credentialed accordingly, to work those e-refill requests that come in during that time.
{{% /info %}}

If SureScripts disables the e-refill request functionality, e-prescribing will remain available; only electronic refill requests will be unsupported. If SureScripts disables the e-refill request functionality, the E-Prescriber will no longer see new e-refill requests in the E-Refills alert taskbar. The E-Prescriber will receive refill requests via fax or phone, as was done prior to this feature availability. SureScripts will inform and alert an E-Prescriber if there are delinquent refill requests or the prescriber is scheduled for a disabling of their e-refill request functionality.

{{% tip %}}
It may be beneficial to appoint user(s), with the Manage E-Rx Refills for Others security permission, to supervise the queue to ensure all requests remain current. Therefore, all requests will be addressed within the 48-hour timeframe, even though the specific prescriber may be absent from the practice.
{{% /tip %}}

### Terminated E-Prescriber

When a SureScripts-verified prescribing physician terminates from a practice, there are a series of steps that a SuperUser needs to follow to ensure prescribing and refilling capabilities are effectively discontinued.

{{% warning %}}
**Please do not delete or inactivate the physician in Access Control without doing the appropriate steps**.
{{% /warning %}}

1. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin).
2. Click the [Access Control](https://system/?f=admin&t=security&tabmodule=admin&tabselect=Access+Control) tab.
3. Set the physician/user to <strong>Login Disabled</strong>.
4. Deselect, or un-checkmark, <em>both</em> <strong>Electronic Prescriber</strong> checkboxes.
    * Send New Scripts
    * Receive Refill Requests
5. At the very bottom, click the <strong>Submit Edit</strong> button.

Performing these steps will send an edit message and a disable status message to SureScripts, informing them the physician's status changed, disabling the e-prescribing functionality. Consequently, pharmacies will no longer accept new prescriptions from the disabled prescriber from that specific {{% system-name %}} system.

### Surescripts Advanced/Drug Eligibility Option

The Surescripts Advanced functionality includes access to Prescription Benefits (i.e., insurance eligibility and prescription formulary benefit information), as well as access to an individual's Medication History and the ability to perform Prescription Routing to Mail Order Pharmacies using specified formularies. The System Setting (i.e., "Drug Lookup", "Formulary", "Show Surescripts") must be enabled (Value = 1) in order to use these features.

![](../review-session-medication-management-electronic-prescribing.assets/5b1f95f6b3cfe03dc9860929c4343235.png)

#### Prescription Benefits

Accessing an individual's Prescription Benefits (both eligibility and formulary) allows prescribers to choose medications that are on formulary and covered by the patient's drug benefit plan. Prescribers can also choose lower-cost alternatives such as generic drugs. An added benefit comes in the way of dispensing pharmacies, which are less likely to receive prescriptions that require changes based on drug benefit plans, which, in turn, reduces unnecessary phone calls from pharmacy staff to practices regarding drug coverage.

Dose/Formulary

In order to use the Dose/Formulary functionality and see the in-system button, the **Dose Range Calculator** system setting must be enabled. The button will be available when prescribing medications.

![](../review-session-medication-management-electronic-prescribing.assets/2d78526d9e5ffdd80cd6583ed148cd0b.png)

To see the Dosing and Formulary screen in its entirety when prescribing a med, the Form of the medication must be selected.

Before selecting the appropriate formulary, an eligibility check must be run. An eligibility check cannot be run more than once every 72 hours, per individual. Once it has been run and obtained, then the available formularies associated with the individual's drug benefit plan are loaded into the chart. The {{% system-name %}} solution will maintain records of coverage eligibility in the Patient Benefit table. This eligibility status shows in the Allergies/Medications tab and the encounter Meds Plan section. Here, the last date/time an eligibility check was run will also display; however, if there is no listed date/time, no eligibility check has been run, meaning only dosing information will be available, with no formulary information. For more information on eligibility checking, see the [Prescription and Insurance Eligibility Requests – Surescripts Advanced](../../functions/medication-management-and-e-prescribing/surescripts-advanced-prescription-and-insurance-eligibility-requests.md) documentation.

{{% tip %}}
There is a My Settings preference that can be toggled to **Show Only Best Formulary**. Based on rankings from Surescripts, if this option is set to Yes, an eligibility check will display only the formularies with top status. This will narrow down choices and only show the best formulary options.
{{% /tip %}}

### First DataBank Quarterly Report

First DataBank is a national drug database that is integrated within the {{% system-name %}} solution. This interface allows for searching medications by brand name, as well as generic and over-the-counter medication names. First Databank also provides drug formulary information, drug guides, dosage guidelines, drug interaction alerts, contraindication alerts, and drug diagnosis alerts. Client should note that all providers with either a DO or MD degree who prescribe medications out of {{% system-name %}} , and send those medications electronically to pharmacies, will incur First Databank fees. These fees will be reflected in the annual license fee for Enterprise Health customers, or for WebChart customers, these fees may be included in either the monthly invoice statement or bundled into the system fee.

### System Settings

There are a large number of system settings available regarding the Medications module. In the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) of the **Control Panel**, permitted users can search for any settings pertaining to the *E-Chart* Module and *Meds* Section. These settings may need enabled, disabled, edited or set, to align with business needs and prescribed workflows. It is important to also search for the keyword *Surescripts*, so systems enabled for SureScripts functionality have the necessary settings established, as appropriate.

### Security Role Permissions

In additional to system settings, it is important to review the security settings for each user or security role needing access to the medication management functions. Review the settings and give permission, as appropriate. There is also information available within the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) online help documentation.

### My Settings Preferences

Review the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) preferences of security roles and individuals, and ensure access and restrictions are established, as needed. Set each restriction or permission, accordingly. This information is also detailed within the [My Settings](../../functions/system-administration/security/my-settings.md) online help documentation.

![](../review-session-medication-management-electronic-prescribing.assets/2e9af662cf6e3d9ea680a61cf29d4397.png)

## Resources

### Help Documentation

* [Encounters Plan Section-Meds](../../functions/encounters/encounter-plan-section-medications.md)
* [Allergies and Intolerances](../../functions/medication-management-and-e-prescribing/allergies-and-intolerances.md)
* [Discontinue Meds](../../functions/medication-management-and-e-prescribing/discontinue-medications.md)
* [Drug Guide Search](../../functions/medication-management-and-e-prescribing/drug-guide-search.md)
* [Drug Interaction-Allergy Warnings](../../functions/medication-management-and-e-prescribing/drug-interaction-allergy-warnings.md)
* [Drug Plan and Formularies](../../functions/medication-management-and-e-prescribing/drug-plan-and-formularies.md)
* [E-Refills-ALL E-REFILLS tab](../../functions/medication-management-and-e-prescribing/e-refills-all-e-refills-tab.md)
* [E-Refills-E-SCRIPTS tab](../../functions/medication-management-and-e-prescribing/e-refills-e-scripts-tab.md)
* [E-Refills-MY E-RX ERRORS tab](../../functions/medication-management-and-e-prescribing/e-refills-my-e-rx-errors-tab.md)
* [E-Refills-MY PENDING REFILLS tab](../../functions/medication-management-and-e-prescribing/e-refills-my-pending-refills-tab.md)
* [Edit or Change Meds](../../functions/medication-management-and-e-prescribing/edit-change-medications.md)
* [Flow-Pat Ed-Meds Sheets](../../functions/medication-management-and-e-prescribing/allergy-medication-tab-quick-links.md)
* [Formulary and Dosing-SureScripts Advanced](../../functions/medication-management-and-e-prescribing/surescripts-advanced-formulary-and-dosing.md)
* [Medication History Reconciliation-SureScripts Advanced](../../functions/medication-management-and-e-prescribing/surescripts-advanced-medication-history-reconciliation.md)
* [Meds Library-Remembered Scripts](../../functions/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md)
* [Meds Tab Summary View](../../functions/medication-management-and-e-prescribing/allergies-medications-tab-summary-view.md)
* [Preferred Pharmacy-Supply-Verification-Current Library](../../functions/medication-management-and-e-prescribing/setting-preferred-pharmacy-days-supply-and-current-library-and-med-history-verification.md)
* [Prescribing and Adding Meds](../../functions/medication-management-and-e-prescribing/prescribing-adding-medications.md)
* [Prescription and Insurance Eligibility Requests-SureScripts Advanced](../../functions/medication-management-and-e-prescribing/surescripts-advanced-prescription-and-insurance-eligibility-requests.md)
* [Print-Fax-Transmit Prescriptions](../../functions/medication-management-and-e-prescribing/print-fax-transmit-prescriptions.md)
* [Refill All Meds](../../functions/medication-management-and-e-prescribing/refill-all.md)
* [Setting up E-Prescribers](../../functions/system-administration/system-controls/setting-up-e-prescribers.md)
* [Unknown Allergy or Medication Add Email Notifications](../../functions/medication-management-and-e-prescribing/unknown-allergy-medication-email-notifications.md)
* [E-Meds Report of Printed-Faxed-ESent](../../functions/reports/e-meds-report.md)
* [Med Report](../../functions/reports/medication-report.md)
* [Uncoded Meds Report](../../functions/reports/uncoded-medications-report.md)
* [Travel Kits](https://drive.google.com/open?id=1Hh-Up6MnYTqvnc2vEx38lXyRG5rbm4ln3jnd8Qy_G7Q)

### Training Videos

* [Meds and Allergies (00:23:24)](https://mieweb.webex.com/mieweb/ldr.php?RCID=b79e8477f8cdb0cabd019dcd7f998b16)
