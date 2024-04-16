---
id: '1eZ2ZZycljJvLk2qkfmQGRo0cQ4RzeY_kMXIzDr8TgNU'
title: 'Review Session - Injury Care'
date: '2022-11-07T21:28:20.698Z'
version: 55
lastAuthor: 'wreiske'
mimeType: 'text/x-markdown'
links:
  - 'https://www.osha.gov/injuryreporting/osha_ita_api_documentation.pdf'
  - 'http://www.mieweb.com/wiki/Lost_Time_CSV_Import'
  - 'https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=0'
  - 'http://www.mieweb.com/wiki/Data_Import_Standards#Data_Import_User_Instructions'
  - '../../functions/injury-care/case-management/adding-absence-management-case.md'
  - '../../functions/injury-care/case-management/adding-hospital-case.md'
  - '../../functions/injury-care/case-management/adding-msea-case.md'
  - '../../functions/injury-care/case-management/adding-non-osha-case.md'
  - '../../functions/injury-care/case-management/adding-osha-case.md'
  - '../../functions/injury-care/case-management/closing-an-existing-case.md'
  - '../../functions/injury-care/case-management/deleting-an-existing-case.md'
  - '../../functions/injury-care/case-management/viewing-cases.md'
  - '../../functions/reports/common-case-search-report.md'
  - '../../functions/system-administration/data-migration/lost-time-import-tool.md'
  - '../../functions/reports/osha-300-log-report.md'
  - '../../functions/reports/incidents-report.md'
source: 'https://drive.google.com/open?id=1eZ2ZZycljJvLk2qkfmQGRo0cQ4RzeY_kMXIzDr8TgNU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Injury Care Demonstration</strong>
* <strong>Overview</strong>
* <strong>Security Permissions</strong>
* <strong>Insurance Interface</strong>
* <strong>System configuration</strong>
    * <strong>Import Tools</strong>
    * <strong>Cases</strong>
        * <strong>Incident On-site Locations</strong>
        * <strong>Nature of Illness/Injury and Body Parts</strong>
        * <strong>Restrictions (Types) & Accommodations</strong>
            * <strong>Restriction Providers</strong>
        * <strong>Event and Source</strong>
    * <strong>State-Specific Forms/Print Definitions</strong>
* <strong>Reporting</strong>
    * <strong>Work Status Report Document</strong>
    * <strong>OSHA 300/300A Import for partial year (spec)</strong>
    * <strong>Portal</strong>
* <strong>E-file with OSHA</strong>
* <strong>Resources</strong>

## Overview

{{% system-name %}} can be used for treating, documenting, managing, *and* reporting injuries and illnesses, which can be initiated from a visit to the clinic, or in advance, via an employee portal. This allows incidents to be reported anytime, day or night. And regardless of how the information is captured, {{% system-name %}} can compile the recorded data into form overlays, minimizing the need for redundant data entry, while also easing reporting burdens.

Overall, {{% system-name %}} not only incorporates streamlined processes for recording and treating injuries and illnesses, but it also provides tools for easy tracking and follow-up through the use of its integrated worklists and tasking module.

Standard functionality includes:

* Several possible case types and applicable data fields – Injury (OSHA Standard), Injury (Non-OSHA Standard), Hospital, Absence management, MSEA, and Medical Surveillance.
* Integrated workflows allowing employees to self-report via an employee/patient portal, with task notifications designed to alert staff of new cases/incidents needing reviewed and validated.
* Pre-loaded forms with data overlay:
    * OSHA Form 301, configured with an overlay of employee incident data
    * State-specific Doctor's First Report of Injury
    * State-specific Employer's First Report of Injury
* Restrictions and Accommodations

It is valuable to recognize the following considerations, concepts, and terminology in {{% system-name %}} :

**Case/Incident** - A **case** is created in an initial visit (encounter), and is then linked to subsequent visits, as needed. A case links all follow-up visits (encounters), conditions, nature of injury information, restrictions, and accommodations. All of the documents pertaining to the case are grouped together within the chart, for reporting purposes. The term **incident** typically refers to the workplace injury that initiates a case note for an employee; however, the terms **case** and **incident** may be used interchangeably in {{% system-name %}} systems. In {{% sys-name %}} , an incident leads to a case being created. The database table in which information on an injury is recorded is known as the Incidents table, and programmatically, when an incident date is entered into the Incidents table, a case is created.

**Case Types** - Case types present specific incident questions and forms, as well as designate different required fields, as appropriate to a given case, or incident. There are several case types to choose from in the {{% system-name %}} system:

* <strong>Injury</strong> (<strong>OSHA Standard</strong>) - Comprises a full report of a workplace injury, or incident, for an individual. An injury or illness is OSHA recordable if it involves a significant incident or illness diagnosed by a physician or other licensed healthcare professional, even when it does not result in any of the following OSHA-recordable criteria:
    * Death
    * Days away from work
    * Restricted work
    * Transfer to another job
    * Medical treatment beyond first aid
    * Loss of consciousness
* <strong>Injury</strong> (<strong>Non-OSHA Standard</strong>) - An Injury Non-OSHA case type also serves as a full report of a workplace injury, or incident, for an individual; however they are typically only used by clients outside of the US, who are not held to standard OSHA guidelines and regulations. It is best practice for US-based clients to always use the Injury (OSHA Standard) case type, even when the incident may not be deemed OSHA recordable.
* <strong>Hospital</strong> - The Hospital case type provides a means for hospital clients to track and group hospital care encounter visits.
* <strong>Absence Management</strong> - Used for tracking specific types of encounters for medical leave and/or long-term absences, whereby requests for medical leave or obligations under the FMLA can be grouped together and stored.
* <strong>MSEA</strong> - MSEA (Medical Suitability for Expatriate Assignment) case types track and group encounter visits of individuals assigned to live outside of their native country.
* <strong>Medical Surveillance</strong> - A case type for specific medical surveillance must be tracked and grouped by respective medical surveillance visits.

**Condition** - A condition is a documenting of a patient's health/medical problem, recorded using the appropriate medical coding (ICD9/10, SNOMED, LOINC, etc.).

**Encounter** - An encounter documents all of the necessary components of a visit and is also referred to as a patient visit. All aspects of the visit are covered in the encounter, such as the history of present illness, review of systems, past medical history, medications, allergies, vitals, physical exam, tests/procedures, case/incident information, assessment, restrictions/accommodations, and any plan and follow-up information.

**Lost Time** - The period of time that an individual is away from work, due to an injury or illness.

**Nature of injury codes** and **body part codes** are combined in a case to create the incident nature of injury body part ID (nibp_id).

**Restrictions** - Descriptions of limitations or allowances made by a doctor of the work that regulate what the worker can and cannot do while recovering from a work-related injury or illness. Work restrictions may either be temporary or permanent.

**Accommodation** - An adaptation or adjustment that allows an employee to continue working, or lost time (worker's comp plan) available for an employee who cannot work after an incident.

## Security Permissions

In order to effectively utilize the {{% system-name %}} injury management tools, ensure the proper security permissions are granted for the necessary users.

Within the security settings, under the *Injury and Illness* category, the following security permissions must be considered in order for users to have access and the ability to utilize the available functionality:

**Delete**: Allows users to delete cases/incidents. When set to **Yes**, a *Delete* link will appear in the Options column of case/incident reports, as well as on any case ListView, within a patient/employee chart. Setting to Yes allows users to delete items from the Injury Care module.

Also, in order for users to have access to the reports of the Reports sidemenu, ensure the Statistics security setting is enabled.

**Statistics**: Allows users to access reports from the Reports sidemenu. Set to **Yes** to enable access.

## Insurance Interface

{{% system-name %}} is interoperable and may be used to interface with workers' compensation insurance administrators, if preferred. If the injury is verified as work-related, all information regarding the injury will be organized under the case ID, and managed from the Case Management module throughout the duration of the case. Uni- or bi-directional interfaces are available, which allow for incident information to be forwarded to the third-party administrator for claim handling and investigation processing. With a bi-directional interface, the insurance entity may send back relevant data to populate in the respective chart(s), sometimes being configured with an automated closing function for resolved cases/incidents.

## System Configuration

As with any interoperable platform, system configuration is sometimes required in order for the solution to most effectively address the business needs. Below, several important considerations and concepts are highlighted and discussed. Please refer to any of the provided or relevant documentation for additional details.

### Import Tools

First, it is important to consider how any current or existing case management data, or open cases/incidents, will be addressed and imported from the legacy system. As a means to assist clients with the transition to the {{% system-name %}} system, various import options are available for all relevant data. Determining the best option will require an understanding of the data being imported, the intended use of the imported data, as well as the status of the legacy system, at the time of import (e.g., Read/Write, Read Only).

For clients interested in generating OSHA 300 logs, and who would like to import encounters, restrictions, accommodations, conditions, and natures of injury, the Case Management CSV API is the best tool to consider. Clients who do not need OSHA 300 logs generated may find the Clinical Encounter CSV API a more appropriate tool. It is important to determine if any additional data fields from the existing/legacy system will need to be imported for Lost Time tracking, for example, or for any data requirements that are not supported with the Case Management CSV API (e.g., dates, free-text notes/comments regarding cases, etc.).

{{% info %}}
Because importing historical/closed cases produces only *summary* documents and not discrete data entries, custom configuration is available for importing any historical Lost Time data from current/open cases as an add-on service, scoped and billed separately.
{{% /info %}}

Alternatively, clients may choose to manually open cases and encounters in order to document anew all case/incident data, where then any historical documents brought in may be linked, accordingly. This is essentially creating each case/encounter from scratch.

{{% tip %}}
If cases are being created to link and document historical data, it is best practice to review cases from the legacy system, beforehand. This allows for a validation of the case(s), before creating the new ones.
{{% /tip %}}

### Cases

{{% system-name %}} has the ability to track cases and incidents according to clients' business needs. Depending on the client, and whether or not OSHA tracking is necessary, the {{% system-name %}} system can be configured to display the necessary case type(s). By default, {{% system-name %}} displays both OSHA and non-OSHA reportable case types.

After determining whether or not non-OSHA case types are needed, MIE can enable the appropriate system setting (i.e., "I&I", "Case Type", "US Only"), eliminating all non-OSHA case types and replacing the *Injury (OSHA standard)* case type with an *Injury/Illness* case type, configured to retain all of the same OSHA-recordable data. This setting will remove all OSHA and non-OSHA verbiage, eliminating potential confusion.

#### Incident On-site Locations

When recording the location where an injury/illness occurred, users will select whether the event happened *onsite* or *offsite*. All options available as *onsite locations* can be customized, as needed. Currently, there is not an established editor for these configurations, so MIE will import the list of onsite locations, if necessary. These locations can be general (e.g., Loading Dock, Garage, Break Room, etc.) or specific (e.g., Entrance 1, Loading Dock 3, Office 232, etc.). Once all on-site location names have been provided, MIE will perform the import.

#### Nature of Illness/Injury and Body Part(s)

When documenting injuries and illnesses, every case contains **Nature of Injury or Illness** and **Body Part** dropdowns. These are built into the system and are preloaded with various options. Though there is no established editor to change the listed choices, MIE can add/delete options, as needed.

#### Restrictions (Types) & Accommodations

Within the **Restrictions & Accommodations** section of the encounter, there is a *Restriction Type* autocomplete field. This field is used to establish what type of restriction and limitations the individual needs to consider to get back to full health. When a restriction type is chosen, more specific criteria may be presented and available for documenting. For instance, if a *Carrying* restriction is selected, an additional dropdown will appear with multiple choices to qualify to what extent the restriction type may need followed (e.g., No carrying, No carrying more than # lbs., No carrying more than # hours/day, etc.). Restriction Types, as well as any associated options, may be customized using the from the **Control Panel**.

Also within the Restrictions & Accommodations section of the encounter is the **Accommodation** dropdown field. Similarly, this dropdown is prepopulated with the default options established by OSHA. It is not recommended to change the Accommodation choices, as they are tracked according to OSHA standards and appear on the OSHA log.

Restriction Providers

One other field, from the Restrictions & Accommodations section of the encounter, to consider for configuration is the **Provider** field. When entering a restriction, users are able to list the provider by whom the restriction is being given. This is an autocomplete field, so free-text entries are not accepted. By default, the Provider field is mapped to the Physicians Department. This means only active system users in the Physicians Department will appear as choices for the Provider field. What is more is if the logged-in user is a member of that department, the Provider field will auto-fill with the physician's name.

As helpful as the default setup may be, there is the option to map the Provider field in such a way that outside providers and non-physician restrictions can be recorded. This can be done by creating a *Restricting Providers* department. The new department would need any applicable users/physicians tied to it, along with any outside providers, or users designated as login-disabled.

Restriction Notification Email

For clients set up with a scheduled job configured by MIE to automatically email newly added or changed restrictions and accommodations on patients/employees and documented supervisors, there is an integrated functionality for the Restriction & Accommodations encounter section. If such a scheduled job is configured in the system, then the email notification will respect the *Exclude from Notification Email* checkbox, thus preventing email notifications from being sent out when adding, editing, or updating a restriction/accommodation on a chart.

#### Event and Source

The **Event** and **Source** data fields are currently found in *Injury non-OSHA* case types, only. The available input options for the Event and Source fields are established within separate layouts, meaning they can be customized, if needed.

### State-Specific Forms/Print Definitions

There are sometimes state-specific reports and forms that need considered and preloaded into the {{% system-name %}} system, depending on local requirements. For instance, California requires a Doctor's First Report of Injury as well as an Employer's First Report of Injury. To assist our California clients, {{% system-name %}} preloads the forms into the system and configures the relevant demographics and recordable data to overlay the form, eliminating unnecessary or redundant data entry when reporting. If there are any First Report forms that need to be configured, or if there are any state-specific documents needing to be considered, please speak with the Deployment Consultant, so we can ensure all of the business needs are addressed.

## Reporting

As part of the system standard, {{% system-name %}} provides various reports regarding injury care and OSHA reporting. Under the of the sidemenu, the reports are as follows:

* <strong>Incident</strong> (<strong>Case</strong>) <strong>Report</strong> - A detailed listing of all cases/incidents documented in {{% system-name %}} .
* <strong>OSHA 300 Log</strong> - A summary of OSHA-reportable cases. The OSHA 300 Log looks at any/all cases (depending on search filters) that have a date recorded in the <em>Date Determined Recordable</em> field. Having a date in this field signifies the case is an OSHA 300 reportable case.
* <strong>OSHA 300A Report</strong> - A summary (totals) of Work-related Injuries and Illnesses, which can easily be transposed onto the OSHA 300A paper form.
* <strong>Sharps Log</strong> - A regulatory report for tracking needlestick injuries.

### Work Status Report Document

Generating a Work Status Report can be done through an encounter, or from the **Work Status** chart tab, allowing it to be printed, faxed, and/or emailed, as needed. The Work Status Report is a shareable document that pulls in several data elements, as well as some basic demographic information, as it pertains to the employee and the reported incident. Current restrictions, off-work status, return-to-work date(s), and medical clearance information are all available from a Work Status Report. Data is provided in real time, directly from any linked or relevant encounter(s). Once created, the Work Status Report can be viewed and retrieved from the portal, as well.

### OSHA 300/300A Partial-Year Import

Any necessary reports (e.g., Open Cases, OSHA Tracking, Sharps, etc.) will need to be run from the legacy system, when switching from the previous system to {{% system-name %}} . These reports will be used for the transition year, when the cut-over to {{% system-name %}} will take effect. Because there will only be a partial year of information from the legacy system, and the remainder of the year will be reportable from the {{% system-name %}} system, all necessary reports will need run from the legacy system and merged with the reports of {{% system-name %}} . Ensure all reports needed at the time of cut-over are run and available for merging.

### Portal

For clients that purchase the patient/employee portal, {{% system-name %}} offers the ability for injury/illness information recorded through the portal to come into the system, triggering any respective task, and notifying the respective users. The Case Management department is assigned from the tasks, by default. As a document, the information reported through the portal does not populate as discrete data. A future enhancement to convert all of the data from the REPIIQ document type into a new case as discrete data is slated for the development roadmap.

## E-file with OSHA

Beginning in 2018, clients with over 250 employees are required to upload OSHA 301 data directly to the OSHA site. {{% system-name %}} provides various reports, as well as exports of OSHA 300, 300A, and 301 data in CSV format, which can then be uploaded to the OSHA website. These reports also include search and filtering features to allow clients the opportunity to drill down to the data they need. OSHA has not implemented an automatic e-file capability, therefore, Enterprise Health creates a standardized CSV file that the customer may submit to the OSHA website.

Once direct transmission is available, clients will need to enroll/sign up on the OSHA website, where they will be assigned a unique key. The client will need to provide that key to MIE in order to send data on their behalf. A system setting will be added to allow input of the unique key directly into the {{% system-name %}} database. Once the interface development is completed clients will receive the established interface as part of the standard product. [OSHA.gov Injury Tracking Application API Documentation](https://www.osha.gov/injuryreporting/osha_ita_api_documentation.pdf)

## Resources

### CSV Import Tools & OSHA E-file Info

* [Public Case Management CSV API](http://www.mieweb.com/wiki/Lost_Time_CSV_Import)
* [Public Case Management CSV API Specification Spreadsheet](https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=0)
* [Public User Instructions for Importing Data (Data Standards)](http://www.mieweb.com/wiki/Data_Import_Standards#Data_Import_User_Instructions)
* [OSHA.gov Injury Tracking Application API Documentation](https://www.osha.gov/injuryreporting/osha_ita_api_documentation.pdf)

### Help Documentation

* [Cases-Adding Absence Management Case](../../functions/injury-care/case-management/adding-absence-management-case.md)
* [Cases-Adding Hospital Case](../../functions/injury-care/case-management/adding-hospital-case.md)
* [Cases-Adding MSEA Case](../../functions/injury-care/case-management/adding-msea-case.md)
* [Cases-Adding Non-OSHA Case](../../functions/injury-care/case-management/adding-non-osha-case.md)
* [Cases-Adding OSHA Case](../../functions/injury-care/case-management/adding-osha-case.md)
* [Cases-Closing An Existing Case](../../functions/injury-care/case-management/closing-an-existing-case.md)
* [Cases-Deleting An Existing Case](../../functions/injury-care/case-management/deleting-an-existing-case.md)
* [Cases-Viewing](../../functions/injury-care/case-management/viewing-cases.md)
* [Common Case Search Report](../../functions/reports/common-case-search-report.md)
* [Data Import-Lost Time Import Tool](../../functions/system-administration/data-migration/lost-time-import-tool.md)
* [OSHA 300 Log Report](../../functions/reports/osha-300-log-report.md)
* [Patient Incident Reports](../../functions/reports/incidents-report.md)
