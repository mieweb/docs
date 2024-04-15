---
id: '17GYvErZHrcvNE8193h9Mdi8c3XqT4Xuva_F07Zj_ECU'
title: 'Review Session - Work-Related Exams'
date: '2021-08-27T17:37:27.880Z'
version: 41
lastAuthor: 'sriecke'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?func=omniscope'
  - 'https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types'
  - 'https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events'
  - 'https://system/?f=admin&s=medsmanage&tabmodule=admin&tabselect=Meds+Manager'
  - '../../functions/medication-management-and-e-prescribing/travel-kits.md'
  - '../../functions/system-administration/interfaces/signature-pad-device.md'
source: 'https://drive.google.com/open?id=17GYvErZHrcvNE8193h9Mdi8c3XqT4Xuva_F07Zj_ECU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Work-Related Exams Demonstration</strong>
* <strong>Overview</strong>
    * <strong>Driver Fitness Determination (DOT)</strong>
    * <strong>Pre-Placement Management</strong>
    * <strong>Travel Management</strong>
* <strong>Security Role Permissions</strong>
* <strong>System Configuration</strong>
    * <strong>DOT Appointment Type</strong>
    * <strong>DOT Health Surveillance Panel</strong>
    * <strong>Pre-Placement Chart Registration/Partition</strong>
    * <strong>Pre-Placement Appointment Type</strong>
    * <strong>Pre-Placement Health Surveillance Panel</strong>
    * <strong>Travel Consult Appointment Type</strong>
    * <strong>Encounter Stages</strong>
    * <strong>Open Encounter Worklists</strong>
    * <strong>Print Definitions</strong>
    * <strong>Travel Questionnaire</strong>
    * <strong>Employee Portal</strong>
    * <strong>Travel Kits</strong>
    * <strong>Pre-Placement/Applicant Portal</strong>
    * <strong>Electronic Signature Pad Integration</strong>
* <strong>Resources</strong>

## Overview

### Driver Fitness Determination

{{% system-name %}} offers a **Driver Fitness Determination** encounter, often referred to as a DOT encounter, which is modeled off of the Medical Examination Report for Commercial Driver Fitness Determination, FMCSA Form 649-F. The {{% system-name %}} Driver Fitness Determination (DOT) encounter allows clinicians to document electronically and discretely the various components needed to complete a standard paper Form 649-F. Using the {{% system-name %}} DOT encounter provides electronic data capturing using predefined and structured text, which is coded for easier data retrieval, meaning the captured data can be programmed to overlay forms in order to print, fax, submit, and/or provide copies to drivers. The ability to print with data captured overlaid upon the necessary DOT forms saves clinicians valuable time by reducing duplicative work, such as handwriting the same observations on a paper form, which were just previously recorded, electronically.

Additional enhanced usability features include the *Health History* and *Physical Examination* encounter sections, which will prefill previous exam information, so clinicians can quickly review previous documentation and determine whether it still applies, or if new findings need recorded at the time of the examination. Similarly, other sections of the encounter, such as qualifications text or determination instructions, can be hidden/shown, as needed, using a convenient toggle feature. And any open DOT encounters can be managed using the **My Open Encounters** [Quick View](https://system/?func=omniscope) portlet, whenever necessary.

Once the examination is completed and all documentation is accounted for, the *Print DOT Forms* section can be used to access and print (with data overlaid) any necessary forms. Options include:

* Driver Fitness Determination-Federal
* Driver Fitness Determination-State
* Driver Fitness Determination-Certificate

### Pre-Placement Management

Another work-related encounter offered by {{% system-name %}} is the **Pre-Placement Exam** encounter, used for documenting pre-placement, applicant, or pre-hire exams. This encounter can be used by clinicians and staff to document and record discretely all of the requirements and data relevant to the placement of new or transferring candidates. The varying encounter sections help guide users through what actions are needed, or what tests/procedures need completed, according to the specific type of Pre-Placement Exam being performed. For instance, the *Tests & Procedures* encounter section shows all pending items needing performed for the exam in context. This list is known as the Due List, which provides visibility to exactly what needs addressed and performed.

Considering common workflows and communication, the {{% system-name %}} Pre-Placement Exam encounter also includes a means for sharing a provider's written opinion to supervisors, whenever necessary. Additionally, for clients requiring specific drug screenings as part of the pre-placement process, {{% system-name %}} allows configuration of not only what requirements and data need captured, but also which users or individuals may have visibility to this data. As for any open Pre-Placement Exam encounters, they can be managed from the **Pre-Placement Exam Worklist** [Quick View](https://system/?func=omniscope) portlet, as needed.

### Travel Management

As a part of the Travel Management module, {{% system-name %}} provides several features designed to streamline the processes involved with work-related travel, including the documentation of any necessary appointments, by way of the **Travel Consult** encounter. To elaborate, {{% system-name %}} supports allowing employees to complete and submit travel questionnaires from a personalized employee portal. Clinical staff can then be notified of the travel request, via an automated task, whereby they may review travel advisory information to initiate immunization and medication orders, according to protocols. Along the same lines, clinicians can prescribe pre-templated **Travel Kits** (a grouping of medications needed for a travel assignment), designed for supplying the necessary medications for an individual on a specific travel assignment, which in turn, documents and tracks the necessary medications and their dispensing.

The Travel Management module allows staff to review and forward on requests for physician review and authorization, as well as track the dispensing of the medications via travel kits. The Travel Consult encounter also provides a means for recording information when appointments are needed, or if the prescribed workflow requires specific appointments, prior to travel authorization. And of course, when used, any open Travel Consult encounters can be managed from the **Travel Consult Worklist** [Quick View](https://system/?func=omniscope) portlet.

## Security Role Permissions

The following security permissions must be reviewed in order to establish which security roles or individual users should have permissions for performing the necessary functions of work-related exams, pre-placement, and travel needs.

* <strong>Meds Manage</strong>: Allows access to the Meds Manager control menu. Select <strong>Yes</strong> to provide administrators the ability to manage travel kits, as needed.
* <strong>Manage Observations</strong>: Depending on the level of permission, this setting will allow users to add observations and data to encounters. A minimum of <strong>Add</strong> permission is required to allow documentation within encounters. <em>Edit</em> and <em>Delete</em> permission is also acceptable; however, understand that <em>Edit</em> permission allows for adding and editing observations, and <em>Delete</em> permission allows for adding, editing, and deleting observations from documentation.
* <strong>Access DB Records via JSON API</strong>: Allows access to the JSON API. Set to <strong>Yes</strong>. This setting is required in order to allow users to document data in work-related encounters.

## System Configuration

### DOT Appointment Type

In addition to the Driver Fitness Determination encounter, the {{% system-name %}} system contains a standard Driver Fitness Determination (DOT) appointment type, which is set to a duration of 30 minutes, by default. This appointment type is configured to generate a Driver Fitness Determination encounter, when using the One-Click Checkin functionality.

If using DOT appointment types and encounters, it is important to review the default configurations, to ensure triggers and general functionality align with the business needs. Additionally, if DOT exams will be performed as walk-ins, or on-demand, it is recommended that the Driver Fitness Determination encounter be set as a Quick Add from the [Encounter Types editor](https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types). This will make adding the encounter from any chart easier, making the link more accessible from the **Quick Links** portlet of the *Summary* chart tab.

### DOT Health Surveillance Panel

The {{% system-name %}} system is set up with a Driver Fitness Determination (DOT) Health Surveillance (HS) Panel, which is configured with all the necessary action items related to a standard DOT examination. Clients interested in using the DOT HS Panel with the DOT encounter will benefit from automated triggering, easy tracking of necessary tests/procedures and orders, as well as automated completion of action items by way of documented encounter data, all through the Due List. This is why it is of utmost importance to audit all triggers and action items, to confirm appropriate setup according to the business needs. Otherwise, the panel can simply be inactivated for those clients uninterested in using it.

### Pre-Placement Chart Registration/Partition

Before taking on any Pre-Placement configurations and utilizing the available functions, it is important to discuss all pre-placement workflows and business needs with the deployment specialist. Understanding the best options available takes communicating all pre-placement requirements, as they relate to current workflows and future-state expectations. For instance, scoping interface needs will require an understanding of the current HR system being used, as well as the current processes enacted when candidates are screened and hired. Types of questions to consider:

* Is there an established interface between the legacy EHR and HR systems? What are the workflows associated with this interfacing?
* Are applicants and/or hired employees only entered into the current HR system?
* Are applicants <em>and</em> employees housed in the HR system, exclusively, or will partitions need to be configured in the EHR for differentiating applicants from hired employees?

Once discussions regarding pre-placement needs conclude, partitions and charts can be scoped and configured according to interface requirements.

### Pre-Placement Appointment Type

The {{% system-name %}} system contains a standard Pre-Placement Exam appointment type, which is set to a duration of 1 hour, by default. This appointment type is configured to generate a Pre-Placement Exam encounter, when using the One-Click Checkin functionality.

If using Pre-Placement appointment types and encounters, it is important to review the default configurations, to ensure triggers and general functionality align with the business needs. Additionally, if Pre-Placement exams will be performed as walk-ins, or on-demand, it is recommended that the Pre-Placement encounter be set as a Quick Add from the [Encounter Types editor](https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types). This will make adding the encounter from any chart easier, making the link more accessible from the **Quick Links** portlet of the *Summary* chart tab.

### Pre-Placement Health Surveillance Panel

Pre-Placement exams can be done on-demand, without being part of a Health Surveillance Panel, or needing to utilize automated triggering or membership tracking. Nevertheless, it is important to discuss what types of pre-placement exams are needed, or are being performed, today. Is there only one general type of exam being used across the board, or are there varying types of pre-placement exams being used?

It is recommended that for clients with pre-placement exams corresponding to rules-based health surveillance programs, configuration of necessary panel(s) and action items be heavily considered.

### Travel Consult Appointment Type

The {{% system-name %}} system also contains a standard Travel Consult appointment type, which is set to a duration of 1 hour, by default. This appointment type is configured to generate a Travel Consult encounter when using the One-Click Checkin functionality.

If using Travel Consult appointment types and encounters, it is important to review the default configurations, to ensure triggers and general functionality align with the business needs. Additionally, if Travel Consult exams will be performed as walk-ins, or on-demand, it is recommended that the Travel Consult encounter be set as a Quick Add from the [Encounter Types editor](https://system/?f=chart&s=encvteditor&t=Encounter+Types&tabmodule=admin&tabselect=Encounter+Types). This will make adding the encounter from any chart easier, making the link more accessible from the **Quick Links** portlet of the *Summary* chart tab.

### Encounter Stages

Depending on prescribed workflows, encounters may need various stages defined in order to signal to collaborators that the encounter is undergoing specific documentation or awaiting additional information, according to the stage the encounter is in, at the time. For example, stages may be essential for the Pre-Placement Exam encounter if a clinic tends to wait to close an encounter until lab work is received, or other test results are reviewed, to allow for completing the written opinion. Stages may be added to any of the work-related encounter types (i.e., Driver Fitness Determination, Pre-Placement Exam, and Travel Consult encounters), so be sure to discuss any workflows or processes that may warrant staging, so collaborators can perform their respective responsibilities, as they relate to each stage of the encounter.

### Open Encounter Worklists

As noted in the Overview, there are varying portlets available to assist users in tracking any open encounters. Thought it is very important to regularly Close & Archive completed encounters, it is understood that work-related encounters will sometimes remain open for various periods of time, requiring additional or supporting documentation. For this reason, the portlets of the Quick View provide users a means to quickly and easily track outstanding encounters. While the *My Open Encounters*, *Pre-Placement Exam Worklist*, and *Travel Consult Worklist* portlets were discussed, there is also the **Clinic Worklist** portlet available. The *Clinic Worklist* portlet can be used to filter down to the appropriate encounter (e.g., Travel Consult, Pre-Placement, Driver Fitness Determination) or stage, as needed.

Review current workflows and determine what users or security roles need any of the listed portlets. Though portlets can be manually added or removed at any time, specific roles can be configured with specific portlets, according to their standard responsibilities.

### Print Definitions

As with standard appointments, work-related exams may require some necessary paperwork be filled out at the time of the visit. This is where Print Definitions come in. Print Definitions provide ways to group many documents, forms, layouts, or the like into defined print or fax jobs. This means any paperwork or forms needing filled out at the time of the visit, or exam, may be printed and provided quickly and easily. Because of this, it is important to review any forms, consents, or documents needed for pre-placement workflows, for example, so that specific print definitions can be configured accordingly, incorporating all of the necessary items to be given to, or filled out by, the applicant or employee.

### Travel Questionnaire

{{% system-name %}} has a standard Travel Questionnaire, which should be reviewed by the appropriate stakeholders. Ensure all of the questions align with the overall business needs and prescribed workflows. Any modifications can be done to the appropriate observations and associated flowsheet, as needed.

### Employee Portal

As noted above, the {{% system-name %}} system supports allowing employees to complete and submit travel questionnaires from a personalized employee portal. This means that clinical staff can be notified of any travel request, via an automated task, triggered by the completion of the Travel Questionnaire on the employee portal (found in the Message Center).

If interested in utilizing the employee portal, particularly with the Travel Questionnaire, configuration must be done for the portal's Message Center, as well as Tasklist Events. This means the **Send a Message** portlet must be enabled, which can be done from the *Employee Portal* tab of the Employer Organization chart. Once enabled, the *Allowed Message Types for Sending Within Portal* needs to include **Travel Questionnaire**. This ensures portal users have the ability to send completed travel questionnaires, as needed. In order to notify the appropriate department of incoming travel requests and questionnaires, the [Tasklist Events](https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events) need updated and configured accordingly, as well.

### Travel Kits

Travel Kits, otherwise known as Medication Kits, are pre-templated groupings of common and/or preventative medications needed for varying types of travel, which can be prescribed from the {{% system-name %}} Travel Management module. These are typically prescribed for travellers frequenting different countries or travelling often, who may need medications without interruption, or such medications that help with motion sickness, diarrhea, or problems sleeping, for example. These kits are configured and available for easy ordering from the {{% system-name %}} system and should not be confused with a pre-travel request for pre-travel requirements.

Clients should be sure to review the current list of existing Travel Kits by navigating to the [Meds Manager menu](https://system/?f=admin&s=medsmanage&tabmodule=admin&tabselect=Meds+Manager) of the Control Panel. Use the **Select Meds Editor** dropdown in the upper-right corner to select *Kits*. The existing kits will populate in the Medication Kits table. Here kit items can be viewed, edited, or kits, in general, can be added, as needed. Using the links in the Options column, view or add kit items by clicking **Items**; otherwise, click the **Edit** link to change the name or description of the kit or to make it active/inactive. To add a new kit, click the **Add Kit** link. For more detailed information on usage or setup, see the [Travel Kits](../../functions/medication-management-and-e-prescribing/travel-kits.md) documentation.

### Pre-Placement/Applicant Portal

(Only if purchased)

If purchased, the {{% system-name %}} system can be configured to allow pre-placement/applicant workflows from an established portal. For example, the portal can be set up with a specific URL that is distributed to applicants, as needed. Once the applicant is at the landing page of the portal, they are prompted to enter their first and last name. The following pages are typically specific health questionnaires, or information relevant to the pre-placement processes, where they can select from a list of possible questionnaires preconfigured and available from an {{% system-name %}} system Order Picklist. Once all of the information has been submitted from the portal, a new chart is registered in the {{% system-name %}} system, in a separate partition, where the information and questionnaires are saved as documents in the applicant's chart.

### Electronic Signature Pad Integration

(Only if purchased)

When using approved Topaz Signature Pad devices, {{% system-name %}} can capture patient/employee signatures for consents, waivers, declinations, and other functions, such as signature confirmation when picking up travel kits. All signatures captured using a Topaz device are added to the appropriate templated form or document and stored in the respective chart. If a Topaz device integration is purchased, it is recommended to configure the Signature sidemenu to display and utilize the signature functionality for Travel Med Kit pickups. If interested, see the [Signature Pad Device](../../functions/system-administration/interfaces/signature-pad-device.md) documentation for further details.

## Resources

### Help Documentation

* [Travel Kits](../../functions/medication-management-and-e-prescribing/travel-kits.md)
* [Signature Pad Device](../../functions/system-administration/interfaces/signature-pad-device.md)
