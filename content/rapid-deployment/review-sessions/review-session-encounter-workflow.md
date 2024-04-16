---
id: '14j4skFXt80HB7anmc8pmCGxVTOpmE_bbAYRElsISI0c'
title: 'Review Session - Encounter Workflow'
date: '2022-11-02T11:35:05.491Z'
version: 412
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/unit/view/id:2703'
  - 'https://mie.talentlms.com/learner/courseinfo/id:148'
  - 'https://drive.google.com/open?id=1vIUkrnk45wKAgO5_k_shVp7N3OtDcn62EeSsVt9tAnw'
  - 'https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types'
  - 'https://system/?f=admin&s=fee_schedule&tabmodule=admin&tabselect=Fee+Schedule'
  - 'https://system/?f=admin&s=fee_schedule&profile_id=0'
  - 'https://system/?func=scheduler&s=apttypes'
  - 'https://system/?f=admin&subfunc=obscodes_manager&view=flowsheet&tabmodule=admin&tabselect=Flowsheets'
  - 'https://system/?f=chart&s=cteditor&tabmodule=admin&tabselect=Chart+Tabs'
  - 'https://system/?func=omniscope'
  - 'https://drive.google.com/file/d/0B5Hsu0mf2-tkaWFCZGFxMUVrMFU/view?usp=sharing'
  - 'https://system/?f=esign&s=dbe&tabmodule=esign&tabselect=Esign+Editor'
  - 'https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events'
  - 'https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings'
  - '../../functions/system-administration/security/security-role-settings.md'
  - '../../functions/system-administration/security/my-settings.md'
  - 'https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits'
  - '../../functions/encounters/creating-or-adding-encounters.md'
  - '../../functions/encounters/working-in-a-visit-encounter.md'
  - '../../functions/encounters/working-in-a-legacy-encounter.md'
  - '../../functions/encounters/archiving-closing-re-archiving-encounters.md'
  - '../../functions/encounters/dictation-and-transcription/closing-encounters-from-the-dictation-module.md'
  - '../../functions/encounters/dictation-and-transcription/editing-encounter-dictations.md'
  - '../../functions/encounters/encounters-impression-section.md'
  - '../../functions/encounters/encounters-labs-results-section.md'
  - '../../functions/system-configuration/encounters-protocol-configuration-and-programming.md'
  - '../../functions/encounters/encounter-protocols.md'
  - '../../functions/encounters/dictation-and-transcription/transcribing-dictation.md'
  - '../../functions/encounters/encounter-worklists.md'
  - '../../functions/encounters/make-order-feature-encounter-plan-section.md'
  - '../../functions/encounters/encounter-plan-section-medications.md'
  - '../../functions/encounters/encounters-tab-search-and-list-view.md'
  - '../../functions/document-management/documents-and-forms/link-documents-to-encounters.md'
  - '../../functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting.md'
  - '../../functions/encounters/tests-and-procedures-section-remove-delete-edit.md'
  - '../../functions/health-surveillance/due-list-in-a-dynamic-encounter.md'
  - '../../functions/reports/encounter-report.md'
  - '../../functions/reports/open-encounters-report.md'
  - '../../functions/encounters/e-m-calculator.md'
  - '../../functions/encounters/encounter-summary-toolbar.md'
  - '../../functions/encounters/encounter-checkout-chart-tab.md'
  - 'https://mie.talentlms.com/shared/start/key:LABIDNHR'
source: 'https://drive.google.com/open?id=14j4skFXt80HB7anmc8pmCGxVTOpmE_bbAYRElsISI0c'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Pre-Requisites</strong>
* <strong>Overview</strong>
* <strong>Encounter Workflow Demonstration</strong>
* <strong>System Configuration</strong>
    * <strong>Encounter Types</strong>
    * <strong>Appointment Type Default Encounter Type</strong>
    * <strong>Protocols</strong>
    * <strong>Encounter Templates</strong>
    * <strong>Encounter Info Section</strong>
        * <strong>Performing Provider</strong>
        * <strong>Archive As</strong>
    * <strong>Encounter Checkout Tab</strong>
    * <strong>Macros</strong>
    * <strong>Worklists</strong>
    * <strong>Clinical Decision Support / Scripted Rules</strong>
    * <strong>Esign / Tasking</strong>

**Clinical Decision Support/Scripted Rules**

    * <strong>System Settings</strong>
    * <strong>Security Role Permissions</strong>
    * <strong>My Settings Preferences</strong>
* <strong>Smart Plan</strong>
* <strong>Reporting</strong>
* <strong>Key Decision Points</strong>
* <strong>Action Items / Timelines</strong>

* <strong>Resources</strong>
    * <strong>Documentation</strong>
    * <strong>LMS Courses / Videos</strong>

## Pre-Requisites

Prior to the review session, please provide corresponding documentation:

1. Listing of current appointment types/services offered/exams
2. List of Providers
3. List of servicing locations
4. LMS Course: [Encounters](https://mie.talentlms.com/unit/view/id:2703) and [Encounter Templates and Visit Notes](https://mie.talentlms.com/learner/courseinfo/id:148)

## Overview

Encounters are important for many reasons. They are critical to any clinical workflow. {{% system-name %}} defines an encounter as an event at which a clinician assesses an individual, providing services and treatments, as needed.

Aside from the more obvious reasons, encounters offer many advantages that streamline work processes and aid in transitional care. One such advantage is the ability to save and store data discretely; or what's more, the speed and ease with which encounters make documents available for sharing. For instance, because observations, findings, notes, and the like are all documented within an encounter, upon completion, the visit document becomes an excellent resource for viewing, printing, faxing, and sharing to an outside provider. Also, electronic point-and-click encounters not only eliminate the challenges of illegible handwriting, they remove the need for various forms that ultimately get scanned into the system, thus eliminating waste and saving on time and resources.

With {{% system-name %}} , clinical data is captured electronically, throughout the duration of the encounter. Data can be captured at the time of the visit, by the patient (e.g., registration and history information entered through the employee portal or imported from the PHR), or by the staff (e.g., vital signs, current medications, etc.). And of course, clinical data is also captured by the clinicians (e.g., history, physical findings, orders, diagnosis, etc.).

Clinicians and staff will work through each stage of the encounter as the patient progresses through the visit, with patient information pulling forward from stage to stage. Generally, users are encouraged to use predefined, structured text in encounters, which is coded and retrievable data used for outcomes analysis. {{% system-name %}} encounters can capture any unique encounter workflows and accommodate individual clinicians' charting styles. The standard encounter templates not only allow for documenting each stage of the patient visit accurately and efficiently, they are highly configurable and customizable to the needs of the practice. Additionally, the {{% system-name %}} platform makes all demographic and clinical data easily accessible from the point-of-care, by way of the Side Chart feature, facilitating more comprehensive encounter documentation. While working in the dynamic encounter, the Side Chart feature provides an additional view with specific details from the chart in context, eliminating the need to open additional windows or tabs to reference the chart while documenting.

Generally speaking, {{% system-name %}} offers dynamic encounters, which allow users to input necessary details of a patient visit (encounter). As its name suggests, the dynamic encounter is highly customizable. The dynamic encounter is divided into major categories, with varying sections available under each category. These various sections can be removed or added as needed, using the **Tools** button, in the upper-right corner of the encounter. Clicking this button will open the *Show Hidden Items* window, where all hidden items are displayed and can be added, as needed. Sections can also be removed by users with the appropriate security permissions.

An added usability feature to note are the information toolbars that appear both throughout the system and in the dynamic encounter. These toolbars provide an easy method of navigation, as well as a quick reference for patient details. The layered toolbars at the top of the dynamic encounter are designed to provide navigation, patient details, and encounter details. However, the number of visible toolbars will vary depending on the page. And as a means of maximizing space, toolbars will also collapse and expand as users navigate the encounter.

{{% info %}}
Multiple users can be in a dynamic encounter at the same time. A message will display at the top of the dynamic encounter notifying the users. Though various users can continue to work in the same encounter, whenever data is entered or updated, the encounter will automatically refresh and alert users of the specific section(s) updated and by whom, so all current data is available to all users in real time.
{{% /info %}}

Once all documentation is finalized, it is important to always remember to close and archive encounters. Not only will this produce a chart document, but closing and archiving encounters ensures all worklist items are current and accurate. {{% system-name %}} provides worklists for tracking open encounters, open encounters assigned to specific providers, as well as for open encounters in specific stages. Ensuring completed encounters are archived and closed helps keep clinical documentation organized and well-maintained.

Standard visit encounters vary by system type, but may include:

* Checkin
* Biometric Exam
* Brief Note
* Case Management – Work-related
* Driver Fitness Determination
* Travel Consult
* OB Flow
* Pediatric Exam
* Pre-placement Exam
* Results
* Visit

Standard protocols may vary by system type, but may include:

* Occupational Injury
* Absence Management
* Cardiovascular
* Case Management
* COVID
* Endocrine
* EENTD
* Exposure
* Gastrointestinal
* General Assessment
* Gynecological
* Low Back Pain
* Musculoskeletal
* Neurological
* Psychiatric
* Respiratory
* Skin
* BHS

Custom configuration of encounter templates by MIE is available, along with protocol-driven Chief Complaint templates, if necessary.

**Encounter Workflow Review Session Demonstration**

* [Encounter Demonstration](https://drive.google.com/open?id=1vIUkrnk45wKAgO5_k_shVp7N3OtDcn62EeSsVt9tAnw)

## System Configuration

### Encounter Types

The standard {{% system-name %}} system comes with several preconfigured encounter types that are easily managed from the [Encounter Types tab](https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types) of the **Control Panel**. Review each encounter type, and inactivate any that will not be used. Thoroughly consider all workflows, so any additional encounter types or configuration may be addressed, as needed.

Determine what users or departments will open/create specific encounters, as well as who is responsible for closing and archiving each encounter. Consider how documenting an encounter occurs, noting how staff may use tablets/laptops in the exam rooms, or how certain providers require a paper form for notating the exam. It is important all aspects of necessary workflows are considered, so all details of any necessary encounter types can be provided. What stages are necessary when documenting each encounter type? What document type is expected to be stored for each specific encounter type? What chart tabs should the stored document type be mapped to? Are there specific encounter types that require restrictions from specific users and/or departments? Ultimately, be sure to review each section of each encounter type, noting the type of data being captured or the need for any additional views, sections, or flowsheets required, as they relate to all prescribed workflows and associated documentation.

Additionally, if any encounter type is used fairly regularly, {{% system-name %}} allows for easy access from the Quick Links portlet. To enable this feature, always remember to flag the Quick Add option when configuring the encounter types being used most frequently.

One last thing to consider when configuring encounter types is the business need for charge capture. Are chargeable services currently being tracked? To consider how {{% system-name %}} can streamline cost tracking and fee schedules, simply navigate to the [Fee Schedule tab](https://system/?f=admin&s=fee_schedule&tabmodule=admin&tabselect=Fee+Schedule) of the Control Panel and begin [editing the Default Profile](https://system/?f=admin&s=fee_schedule&profile_id=0). Here, users with the necessary permissions may review the default CPT codes and their associated costs, adding, editing, or removing any/all entries, as needed.

### Appointment Type Default Encounter Type

Appointment types are created and maintained from the [Appt Types tab](https://system/?func=scheduler&s=apttypes), found in the **Scheduler** sidemenu. This is important, because any appointment type can have a Default Encounter Type specified as part of its configuration, which means whenever a specific appointment type is scheduled and that appointment is checked in, the specified encounter type will be automatically created and opened for encounter documentation.

{{% tip %}}
If using the Checkin module, it is suggested to always set the Default Encounter Type field to Checkin. If an alternative encounter type is preferred, the Default Encounter Type field can be updated in the specific appointment type.
{{% /tip %}}

### Protocols

Depending upon the nature of the encounter or the condition being assessed, protocols are designed to automate configurations meant to guide clinician documentation of visits based on specific issues or conditions (e.g, headache, burn, fall, bite, etc.). Protocols can be configured to use various encounter sections, as well as observations, flowsheets, macros, and orders.

Several protocols come preloaded as part of the the standard {{% system-name %}} system. To review each protocol and the associated configurations, navigate to the Chief Complaint section of a dynamic encounter. Begin by selecting a protocol from the autocomplete field. After clicking the **Next** button, or collapsing the section, the encounter will refresh with the necessary encounter components defined by the protocol (i.e., History of Present Illness [HPI], Review of Systems [ROS], Physical Exam [PE], Tests and Procedures, Symptoms/Diagnosis, Quality, Plan Narrative, Patient Education, and Depart Instructions).

Be sure to review all protocols, and edit, remove, or add specific protocol section flowsheets from the [Flowsheets editor](https://system/?f=admin&subfunc=obscodes_manager&view=flowsheet&tabmodule=admin&tabselect=Flowsheets), as needed.

### Encounter Templates

In addition to protocols, {{% system-name %}} offers the ability to create encounter templates in a dynamic encounter. These are different from protocols in that encounter templates only specify the sections needed, according to the predefined template format. Protocols, on the other hand, incorporate the use or need of observations, flowsheets, macros, and orders. Because encounters are divided into major categories, with sections falling under each major category, templates are used to simply configure encounters to load only those sections needed for documentation, based on the type of visit being documented.

For instance, the {{% system-name %}} Visit encounter offers over 50 different sections, many of which are hidden by default, but can be brought in manually, if necessary. Likewise, any sections displayed by default can be manually removed. However, what this means is that specific encounters requiring minimal or specific documentation can be established as a template, or sections not needed for certain encounter types can be removed or hidden.

Consider an example of an allergy injection visit. First, let it be assumed that Practice A is interested in using the standard Visit encounter to document all allergy injection visits. After several uses of the Visit encounter, the practice has come to realize that only a few of the sections (i.e., Encounter Info, Tests and Procedures, and Notes) are needed when documenting their allergy injection visits. Because of this, it would be beneficial for the practice to create an encounter template with only the few sections necessary for documenting the visit. The template, then, can be named accordingly (e.g., Allergy Inj Visit). Once created, any time the Allergy Inj Visit template is applied to the visit, the system will refresh the encounter, removing all non-templated sections from view.

With this in mind, be sure to discuss any encounter templates potentially needed for clinicians or any common encounter types. For each possible template, determine which sections need to be visible, as well as any expected template name, or naming convention. Remember, the system will only display specific sections of the dynamic encounter noted in the applied saved template.

To view, configure, and save encounter templates, click the **Tools** button in the upper-right corner of the encounter.

{{% info %}}
Encounter templates will also set the **Archive As** field if it was previously set in the encounter type being used. When using an encounter template, the encounter will save as the specified document type once the encounter is closed and archived.
{{% /info %}}

### Encounter Info Section

#### Performing Provider

Within the Encounter Info section of a dynamic encounter, the performing provider can be noted in the **Provider** field. This field is mapped to the *Physicians* department and is a dropdown, by default. However, this field can be mapped to an alternative department by using the *Physician Realm* security setting, if necessary.

{{% info %}}
If the *Use Charts* system setting is enabled, the Provider dropdown field will be replaced with an autocomplete field of provider or provider organization charts.
{{% /info %}}

Discuss how providers access the system and how they should be considered. It is important to have a clear idea of what drives the provider choices available in the {{% system-name %}} system, because upon closing and archiving encounters, {{% system-name %}} will automatically apply the performing provider's signature to the end of the document.

{{% info %}}
If there is no signature image available in the performing provider's User Details, then the encounter view and stored documents will display text noting who the performing provider was for the encounter visit, but will not pull in a signature image.
{{% /info %}}

#### Archive As

Also within the Encounter Info section is the **Archive as** dropdown. This field allows users to select the specific type of document the encounter should be saved as within the system. For example, when the Visit encounter type is closed and archived, it will save as the Visit document type. Though preloaded encounter types are programmed to save as specific document types upon close and archive, there may be a need to save specific encounters as particular document types, in order to more easily locate chart documentation for referencing, or for reporting needs.

{{% tip %}}
The encounter is always stored in the Encounters chart tab. However, the document created upon close and archive is saved as the specified document type of the **Archive as** field. This document may be mapped to various chart tabs.
{{% /tip %}}

Be sure to speak with the Deployment Specialist to add or edit any of the selections available in the Archive As dropdown. These choices are determined in a layout that can be updated according to any business needs.

### Encounter Checkout Tab

The **Encounter Checkout** tab (found under the **Admin** chart tab) is a place where any staff responsible for things such as providing clinical summaries, or for providing referrals, or for transmitting medications prescribed during an encounter, may go to execute any of their responsibilities. Those familiar with the {{% system-name %}} system may notice that the Encounter Checkout tab reflects the same options found at the bottom of the encounter View–the Encounter Options. Though this is the case, the Encounter Checkout tab is particularly useful for larger practices who may have specific workflows dictating specific staff to handle specific checkout processes. The Encounter Checkout tab simply provides easier access to the same information and options found at the bottom of the encounter View.

{{% info %}}
The encounter must be open for staff to be able to successfully utilize the Encounter Checkout tab or see Encounter Options. When an encounter is closed and archived, the Encounter Options will no longer be available from the Encounter Checkout tab.
{{% /info %}}

Any encounter that is *set current* for the logged-in user will populate the Encounter Options associated with that encounter. Any additional open encounters can be seen in the list view found below the Encounter Options. Clicking the **Set Current** link on any of the open encounters will set that encounter as current for viewing and working, as needed. Click the **Release** link on the encounter, to release the encounter and stop displaying the available Encounter Options.

Determine whether the Encounter Checkout tab will provide value according to the business needs. Consider encounter and checkout workflows, keeping in mind the staff responsible for providing patient, or clinical, summaries, as well as workflows involving the closing, archiving, and overall management of the encounters. If there is no need for the Encounter Checkout tab, the Deployment Specialist can simply remove it from the [Chart Tabs editor](https://system/?f=chart&s=cteditor&tabmodule=admin&tabselect=Chart+Tabs).

### Macros

Macros are pre-programmed inputs available within varying sections of the dynamic encounter. These inputs can be used to populate the necessary verbiage into the corresponding data fields of the encounter. This can improve facetime with patients and drastically reduce time spent documenting exams and encounters. Macros increase efficiency and simplify documentation burdens by allowing users to quickly insert large amounts of data with minimal effort. They can also be programmed in encounter protocols, ensuring necessary and relevant macros are available according to encounter workflows and applicable sections, thus improving overall efficiency.

Whenever customized macros are programmed, they are stored as layouts within the module. To utilize any customized macros, users with the proper security permission can simply type in the quick text and press the spacebar. This will automatically insert the programmed input.

Those roles or users with the ability to add/edit macros may have the ability to manage all macros system-wide, or only those in the established Current Library. Macros are cataloged in the Rx Library the user is set to use. This allows separate, or private, macros to be created, as needed. Because macros require specific security permissions, it is important, then, to determine which roles or users are expected to have add/edit abilities for library macros (*Macro Add/Edit* = **Library**), or system-wide macros (*Macro Add/Edit* = **All**) , and which roles or users are expected to only have access to utilize the macros (*Use Macros* = **Yes**), in general.

### Worklists

In {{% system-name %}} systems, worklists tend to come in the form of portlets. Worklist portlets are simply lists of action items or tasks needing worked or completed. Worklists are designed to help streamline communication between clinicians and support staff, as well as to provide visibility to open or outstanding action items, encounters, orders, or the like. This, in turn, improves efficiency and increases productivity by not only improving communication, but also by providing a central location for quick auditing of encounter staging and documentation.

By default, several worklists are immediately available from the [Quick View page](https://system/?func=omniscope). Some examples include: Clinic Worklist, Clinic Worklist by Stage, Due List, Health Surveillance Worklist, My Open Encounters, Pre-Placement Exam Worklist, Travel Consult Worklist, WR Case Management Worklist, and various EPM worklists.

It is important to remember to check the *Display Stage Column* system setting when using stages within encounters. If stages are used and have been configured in the Encounter Types editor, the system setting must be enabled (value = **1**). This simply ensures the Stage column is available in worklists and list views.

### Clinical Decision Support/Scripted Rules

{{% system-name %}} can be set up with scripted rules, or clinical decision support, to assist clinicians, staff, and users, in general, with making informed decisions at the point of care. These scripted rules can be used to suggest pathways to care, making all relevant information easily accessible and specific to the patient's/employee's given circumstances. Scripted rules can be used to specify message types, as well as the severity level at which warnings should be triggered. An added usability feature allows clinicians the ability to dismiss messages for individual patients, for all of their patients, or for all patients within the practice, given the appropriate security level. A set of default pre-configured [Scripted Rules](https://drive.google.com/file/d/0B5Hsu0mf2-tkaWFCZGFxMUVrMFU/view?usp=sharing) are available in the standard {{% system-name %}} deployment. Review with the Deployment Consultant, and determine which scripted rules will need disabled and/or configured for the overall business needs.

### Esign/Tasking Rules

Another usability feature designed to improve efficiency and productivity comes in the form of automated business rules. {{% system-name %}} has the ability to establish rules, or automated triggers, that automatically request electronic signatures, as well as create tasks to users or departments, as needed. For instance, after an encounter is closed and archived, various documents may be produced, depending on the circumstances of the visit. Some of these documents may need signed by the clinician, and others may need to be handled by various departments or users in the system. With [Esign Rules](https://system/?f=esign&s=dbe&tabmodule=esign&tabselect=Esign+Editor) and [Tasklist Events](https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events), electronic signature requests can be automated, and tasking users and departments can be triggered from outcomes and/or specific workflows.

Consider encounter workflows and any documentation produced for encounters, as well as any tasks needed from the outcomes and product of the encounters (e.g., clinician sign-off of mid-level documentation).

### System Settings

There are several system settings available for the Encounters module. It is recommended that a review of all of the relevant system settings occur with the Deployment Specialist, so any questions pertaining to workflows and system configuration can be addressed. To begin viewing all of the system settings pertaining to encounters, simply perform a keyword search for **Encounter** from the [System Settings tab](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) of the **Control Panel**.

### Security Role Permissions

In addition to the various system settings, it is important to review the security role permissions for users needing access to the Encounters module.

* <strong>View Encounters</strong>: Allows users to view the contents of the Encounters chart tab.
* <strong>Delete Encounters</strong>: Allows users to delete encounters within a chart.
* <strong>Link Documents to Encounters</strong>: Allows users to link stored documents to encounters within a chart.
* <strong>Reopen Closed Encounters</strong>: Allows users to reopen closed encounters for editing or updating data captured within the encounter.
* <strong>Remove Encounter Sections</strong>: Allows users to remove sections from dynamic encounters. Some sections can be locked within the encounter layout, meaning the section is to stay in the encounter and not be removed. For this reason, the permission level may be set to No, Any, or Any except locked.

For more detail on user security role setting, see our [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) online help documentation.

### My Settings Preferences

My Settings preferences also need considered when providing access to the Encounters module. Review each of the preferences and set, as appropriate.

* <strong>Default Visit Type</strong>: This setting determines the default visit type when manually adding encounters. However, it is recommended to set to Checkin if the Scheduler is using the One-Click Checkin feature.
* <strong>Link Patient Doctors New Enc</strong>: When enabled, any associated referring/family physicians or other physicians (set via system setting) will automatically populate in the CC (carbon copy) section of the encounter.
* <strong>Impressions Linked As Active</strong>: This setting has various options available. It is important to note that the user on which this setting preference is set must be the user opening/creating encounters. In other words, the impressions found under the Symptoms/Diagnosis encounter section will behave according to the setting of the user that opens/creates the encounter.
    * <strong>None</strong>: No conditions will be linked. All listed conditions for the visit will be displayed with a strikethrough and status of <strong>N/A</strong>. User must individually update the status of relevant conditions, and they may be ranked, accordingly.
    * <strong>Last Enc Visit Type (No match –none)</strong>: Only conditions linked to the previous encounter of the same visit type will be pulled forward and linked to the current encounter. Status and rank is respected. If no match is found of the same encounter visit type, no conditions will be linked (i.e., all listed conditions will be set N/A with strikethrough). This setting is particularly useful for those practices that prefer no linked conditions on first instances of visit types, even if subsequent visits copy forward previous conditions.
    * <strong>Last Enc Visit Type (No match – all)</strong>: Conditions linked to the previous encounter of the same visit type will be pulled forward and linked to the current encounter. Status and rank is respected. If no match is found of the same encounter visit type, all conditions will be linked (i.e., all conditions will be pulled forward and set as Active).
    * <strong>Last Enc (No Match – none)</strong>: Conditions linked on the last known encounter will be pulled forward and linked to the current encounter. Status and rank is respected. If no previous encounter exists, or no last encounter is found, no conditions will be linked (i.e., all listed conditions will be set N/A with strikethrough). This setting is particularly useful for those practices that prefer no linked conditions on the first encounter, even though subsequent visits are expected to copy forward previous conditions.
    * <strong>Last Enc (No match – all)</strong>: Conditions linked on the last known encounter will be pulled forward and linked to the current encounter. Status and rank is respected. If no previous encounter exists, or no last encounter is found, all conditions will be linked (i.e., all conditions will be pulled forward and set as Active).
    * <strong>All Active Conditions</strong>: All conditions set as Active, regardless of encounters, will be pulled forward and linked as Active. Any conditions not applicable to the visit will need set to N/A when using this setting.
    * will need set to N/A when using this setting.
* PMH Linked as Active: This setting will determine if Past Medical History is linked as active from the Encounter.
    * If yes is selected, then it will include the items as active medical conditions.
    * If yes (incl. concluded) is selected, concluded past medical items will be considered active
    * If no is selected, no past medical history items will be considered active
    * If problem list only is selected, only the problem list will be considered active.
* Audiogram STS display: This setting will determine if the age corrected, non age corrected or both audiogram results will be displayed.
* Assessment Entry in Orders: This setting will determine if the assessment entry will be available in the Order
* Remember provider and location: This setting will remember the provider and location in future encounters.

Any additional details can be found in the [My Settings](../../functions/system-administration/security/my-settings.md) online help documentation, if necessary.

**Smart Plan**

The Smart Plan is an optional section that displays at the top of the Visit Encounter. The Smart Plan is similar to the Assessment, however it is located at the top of the encounter and it is intended to be a combination of both the Assessment and Plan sections. This section is ideal for providers who prefer to drive the encounter based on patient conditions.

Providers will use the Smart Plan quicklist (right side of the blue vertical bar) to populate a Smart Plan for today's visit (left side of the blue vertical bar). The provider can leverage a combination of features, such pre configured libraries, pre-populated data based on existing data in the patient chart, organize conditions, as well as quickly order and perform tests, procedures and medications from the Smart Plan.

## Reporting

Encounters are the basis on which all visits hinge, and because of this, there are various downstream implications of documentation, as well as many aspects of the chart and EHR to consider. Data collected within encounters are available from a plethora of reporting tools in {{% system-name %}} . To see the available encounter reports, navigate to the **Reports** sidemenu and select the [Visits](https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits) group of reports.

**System Configuration/Key Decision Points**

1. What encounter types need to be configured?
    1. What is important for reporting purposes (ex: initial vs follow up) on a document/encounter level (not appointment level)
    2. Which encounter types need to be tied to the appointment types?
    3. What should the encounter be archived as?
2. What encounter templates need to be configured?
3. What protocols need to be configured?
4. What flowsheets need to be configured?
    1. Which protocols will drive the flowsheets?
    2. What area within the encounter will that flowsheet belong to?
5. What in-house testing can be performed?
6. What types of things are referred out to be performed (besides labs) that need to be tracked? Physical Therapy? Imaging? Specialists?  Decision on what to track or not
7. Need list/address of vendors commonly refer to
8. What macros will need to be configured?
9. What encounters need e-sign rules set up for signature?
10. What reports need to be configured for encounters?
11. What libraries will need to be configured?
12. Will the Smart Plan be utilized?

**Action Items/Timelines**

## Resources

### Help Documentation

* [Encounters-Adding-Creating Encounters](../../functions/encounters/creating-or-adding-encounters.md)
* [Working in a Visit Encounter](../../functions/encounters/working-in-a-visit-encounter.md)
* [Working in a Legacy Encounter](../../functions/encounters/working-in-a-legacy-encounter.md)
* [Encounters-Archiving-Closing-ReArchiving](../../functions/encounters/archiving-closing-re-archiving-encounters.md)
* [Encounters-Closing Dictation](../../functions/encounters/dictation-and-transcription/closing-encounters-from-the-dictation-module.md)
* [Encounters-Editing Dictation](../../functions/encounters/dictation-and-transcription/editing-encounter-dictations.md)
* [Encounters-Impression Section](../../functions/encounters/encounters-impression-section.md)
* [Encounters-Labs Results Section](../../functions/encounters/encounters-labs-results-section.md)
* [Encounters-Protocol Configuration-Programming](../../functions/system-configuration/encounters-protocol-configuration-and-programming.md)
* [Encounters-Protocols](../../functions/encounters/encounter-protocols.md)
* [Encounters-Transcribing Dictation](../../functions/encounters/dictation-and-transcription/transcribing-dictation.md)
* [Encounters-Worklist-Open Encounters](../../functions/encounters/encounter-worklists.md)
* [Encounters Plan Section-Make Order Feature](../../functions/encounters/make-order-feature-encounter-plan-section.md)
* [Encounters Plan Section-Meds](../../functions/encounters/encounter-plan-section-medications.md)
* [Encounters Tab-Search and ListView](../../functions/encounters/encounters-tab-search-and-list-view.md)
* [Link Documents to Encounters](../../functions/document-management/documents-and-forms/link-documents-to-encounters.md)
* [Tests and Procedures-Adding-Applying-Completing-Resulting](../../functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting.md)
* [Tests and Procedures-Edit-Delete-Remove](../../functions/encounters/tests-and-procedures-section-remove-delete-edit.md)
* [Due List-Dynamic Encounter](../../functions/health-surveillance/due-list-in-a-dynamic-encounter.md)
* [Encounter Report](../../functions/reports/encounter-report.md)
* [Encounters Open Exam Report](../../functions/reports/open-encounters-report.md)
* [Encounter-EM Calculator](../../functions/encounters/e-m-calculator.md)
* [Encounter-Summary Toolbar](../../functions/encounters/encounter-summary-toolbar.md)
* [Encounter Checkout Chart Tab](../../functions/encounters/encounter-checkout-chart-tab.md)
* [Scripted Rules](https://drive.google.com/file/d/0B5Hsu0mf2-tkaWFCZGFxMUVrMFU/view?usp=sharing)

**LMS Courses/Videos**

* [Encounters](https://mie.talentlms.com/unit/view/id:2703)
* [Encounter Templates/Visit Notes](https://mie.talentlms.com/shared/start/key:LABIDNHR)
