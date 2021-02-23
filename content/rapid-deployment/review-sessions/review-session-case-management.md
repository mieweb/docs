---
title: "Review Session - Case Management"
date: 2020-02-27T21:25:11.802Z
url: "rapid-deployment/review-sessions/review-session-case-management.html"
author: aquandt
version: 15
id: 1YXZ9rf9jBA0dD6XvgN-hSXOV8ObwzjAUj4gwrYi4adw
source: https://drive.google.com/open?id=1YXZ9rf9jBA0dD6XvgN-hSXOV8ObwzjAUj4gwrYi4adw
menu:
    main:
        name: "Review Session - Case Management"
        identifier: "1YXZ9rf9jBA0dD6XvgN-hSXOV8ObwzjAUj4gwrYi4adw"
        parent: "1Ws2Vhysc7vAiQXeVws2C92oE2Y10i-BYITqCos59cWM"
        weight: 6070
---
## Agenda

* <strong>WR (Work-Related) Case Management Demonstration</strong>
* <strong>Overview</strong>
* <strong>WR Case Management Encounter</strong>
* <strong>WR Case Management Worklist</strong>
* <strong>Security Role Permissions</strong>
* <strong>System Configuration</strong>
    * <strong>WR Case Management Encounter Stages</strong>
    * <strong>Follow-up Date</strong>
    * <strong>Tasks</strong>
    * <strong>Restriction Type Editor</strong>
    * <strong>Chart Tab Restrictions</strong>
    * <strong>Report Restrictions</strong>
    * <strong>Restriction Providers</strong>
    * <strong>Legacy System Case Management</strong>
    * <strong>Preloaded Forms and Templates</strong>
* <strong>Reporting</strong>
* <strong>Resources</strong>

## Overview

Case managers often coordinate the proactive efforts of health care teams in order to facilitate an individual's health care services from the onset of an injury or illness, through to the safe return of the individual back to work. Case Management calls for the proper documentation and tracking of incidents, or injuries and illnesses, so that individuals can be treated and returned to work, as appropriate. The {{% system-name %}} system allows administrators and case managers to document workplace incidents through the use of designated encounters, where case notes can be captured, and information related to the case/incident, accommodation(s), and associated lost time can be tracked, stored, and reported on, as needed. {{% system-name %}} effectively streamlines all of the necessary case management processes by providing one platform where staff can record and track conditions, injuries, and/or illnesses through to their resolution.

Standard functionality includes:

* A Work-Related (WR) Case Management encounter designed to capture the assigned Case Manager, case management note, RTW documentation, accommodations/restrictions, as well as additional supporting documentation relevant to the status of the individual.
* WR Case Management Worklist portlet for tracking and managing cases.
* Case Management Reports

## WR Case Management Encounter

A WR Case Management encounter is often opened for tracking all relevant data and applicable items (e.g., case notes, additional documentation, restrictions, accommodations, lost time, etc.) needed during the lifetime of a case/incident (i.e., injury or illness). WR Case Management encounters differ and are separate from reported cases, as well as from other visit encounters with case details provided.

Typically, a reported injury/illness will warrant opening a case for the respective chart, whereas a WR Case Management encounter is usually created and assigned to a Case Manager, who then documents and tracks the ongoing case information. Throughout the lifetime of the work-related case/incident, one WR Case Management encounter is used. The WR Case Management encounter remains open until the case/incident is considered resolved, at which point the case/incident, itself, would be closed. The WR Case Management encounter would be closed and archived, separately. Using the WR Case Management encounter is optional and may be utilized according to the client's established workflows.

{{% info %}}

To assist with managing WR Case Management encounters, {{% system-name %}} can have staging options configured into the encounter, which can signal what stage an encounter is in, thus reducing time spent on managing ongoing cases.

{{% /info %}}


Overall, a new WR Case Management encounter should be created for a case/incident if one does not already exist, as noted on the worklist. The WR Case Management encounter offers the following sections Case Managers or staff may use to document information throughout the duration of the reported case/incident:

**Case Manager**: The *Case Manager* field is used to notate the case manager(s) or staff responsible for managing the case.

**Case**: The *Case* section can be used to create and document a new case, or select and link an existing case/incident.

**Presenting Restrictions**: The *Presenting Restrictions* section is used to display any restrictions currently in effect, as a result of the incident.

**Linked Documents**: The *Linked Documents* section displays all relevant documents linked to the WR Case Management encounter.

**Tests & Procedures**: Displays active, pending Due List items (i.e., tests and/or procedures) that may be performed and completed within the encounter.

**Symptoms/Diagnosis**: The *Symptoms/Diagnosis* section is used to document the diagnosis/assessment of the WR Case Management encounter.

**Incident Summary**: The *Incident Summary* section will display if the WR Case Management encounter is linked to an Injury OSHA case type. When linked, this section provides fields for updating case information, as needed.

**Notes/Tracking**: The *Notes/Tracking* section can be used to document all ongoing notes regarding the case, allowing staff to easily track progress over time by way of notes, associated timestamps, and recorded follow-up dates. Follow-up dates are great for ensuring individuals are continuing to be monitored, particularly if an outside provider is overseeing the case. The Follow-up Date will appear on the WR Case Management Worklist portlet, providing visibility to any ongoing management needs of an open case.

**Visit Orders**: Any referral orders needing created may be done using the *Visit Orders* section.

**Restrictions & Accommodations**: *Restrictions & Accommodations* can be added or maintained from within this section. Add, edit, or end any necessary restrictions, as appropriate.

{{% info %}}

Lost Time should be entered as a Lost Time restriction type, and one of the provided Lost Time accommodation options should be selected, in order to ensure the OSHA log calculates correctly.

{{% /info %}}


**Restrictions Pending Accommodations**: The *Restrictions Pending Accommodations* section displays all active restrictions that do not have any associated accommodations. This section allows users to associate accommodations to restrictions, as needed.

## WR Case Management Worklist

A Case Management Worklist portlet is available on the [Quick View page](https://system/?func=omniscope), available from the sidemenu. The worklist displays a grid of open WR Case Management encounters, giving users ample filtering options, grouping options, and searching tools, to review and manage case management encounters effectively. Users may filter the worklist by Case Manager, Owner, Provider, or any of the available columns. Once a case is considered closed, case managers or staff close the case/incident, in addition to closing and archiving the WR Case Management encounter. Once the WR Case Management encounter is closed and archived, the worklist will no longer display it in the grid.

{{% tip %}}

All case management staff should have the WR Case Management portlet set to display on the Quick View landing page.

{{% /tip %}}


## Security Role Permissions

In order to effectively utilize the {{% system-name %}} case management tools, ensure the proper security permissions are provided to all applicable users, to the extent necessary.

**Statistics**: Allows users to access reports from the Reports sidemenu. When set to **Yes**, users may access reports, as needed.

**EMR Encounter Permissions**: Because tracking and managing cases is done via encounters, it is important to review all encounter security permissions in the EMR section of a user's individual security controls. Ensure proper security permissions are provided for **View Encounters**, **Delete Encounters**, **Link Documents to Encounters**, **Reopen Closed Encounters**, and **Remove Encounter Sections**.

**Injury and Illness Delete Permission**: Under the Injury and Illness section of a user's individual security controls is the **Delete** permission. When enabled, users may delete cases/incidents, as needed. If a user has permission to delete cases, a **Delete** link will appear for cases listed in an incident report, as well as on any case view within a chart. To enable, set the security permission to **Yes**.

**Injury and Illness Case Manager Permission**: Newer {{% system-name %}} systems, using the new layouts and worklist portlet, do not need to consider this security permission. It is no longer used.

{{% tip %}}

It is important to consider what information case managers and staff need to access. In some cases, certain users may only need limited security permissions in order to perform their job function. Review roles and responsibilities, as needed.

{{% /tip %}}


## System Configuration

### WR Case Management Encounter Stages

{{% system-name %}} has the ability to create stages for open WR Case Management encounters, so that case management staff can easily determine what stage the encounter is in, when working them. If interested in encounter stages, review what each stage should be named and determine when each is to be used.

In order to set up and establish the preferred stage(s), the Encounter Types Editor must be used, whereby the existing encounter type can have any stages and ordering specified and saved. Once created, staging will be available within the WR Case Management encounter, and the worklist will have the option of filtering by stage(s), as well.

### Follow-Up Date

In the *Notes/Tracking* section of the WR Case Management encounter, there is the option to notate a **Follow-up Date**. Follow-up dates are great for ensuring individuals are continuing to be monitored, because they provide a quick reference of when the individual is expected to be seen again. This date can reference a follow-up with either an in-house or external provider. The Follow-up Date will appear on the WR Case Management Worklist portlet, providing visibility to any ongoing management needs of an open case. Additionally, the Follow-up Date can be configured by MIE to display on the grey patient header, if preferred.

### Tasks

Depending on system setup, {{% system-name %}} has the ability to automate tasking based on specific triggering events. Configuring tasklist events can establish triggers that task individuals or departments, as appropriate. For example, initial reports of injuries/illnesses may trigger a task to the Case Management department; or any updated case may trigger a task to the assigned Case Manager; or even a client set up with varying portal workflows may establish tasklist events to trigger tasking from a reported injury/illness entered into the portal. The automated task would be assigned to the Case Management department, where the staff could work all of the tasks, reviewing the reported cases and types, and determining whether a WR Case Management encounter is warranted.

Clients may wish to review default tasklist events for case management, and depending on the needs of the business and overall workflows, all tasklist events may be configured and updated, as needed.

### Restriction Type Editor

All clinical restriction types are listed under the [Restriction Types tab](https://system/?f=admin&subfunc=crteditor&tabmodule=admin&tabselect=Restriction+Types) of the **Control Panel**. This is known as the **Restriction Type Editor**. Review all of the standard restriction types, and determine if any additional restriction types need to be considered or added, to accommodate the case management workflows.

### Chart Tab Restrictions

Specific users or departments can be restricted from viewing certain chart tabs, if necessary. Depending on workflow and processes, certain chart tabs may need restricted from Case Managers, or case management staff. It is important to discuss any potential needs for restrictions early on.

### Report Restrictions

Depending on the needs of the client, specific reports may be restricted from Case Managers, or case management staff. In some cases, certain reports may need to be restricted to case management staff, exclusively. Likewise, specific reports may need to be restricted so that other office staff does not utilize reports unrelated to their role and responsibilities. Be sure to consider and discuss any report restriction needs, so that proper configuration can be performed.

### Restriction Providers

When documenting a restriction in the *Restrictions and Accommodations* section of an encounter, there is an optional field allowing users to notate the name of the provider assigning the restriction. By default, the **Provider** field is mapped to the *Physicians* department. This means that all available selections are *internal* providers, with active login credentials.

There is the ability to map an alternative department that would allow for selecting both internal *and* external providers, if preferred. To do so requires a new *Restriction Provider* department to be created and used, in place of the *Physicians* department. This provides a department that external providers can be created in, and any internal providers can be tied to.

External provider names can be full physician names, location names, or something more generic, such as XYZ Urgent Care, or Outside Provider. Determine the best options according to the tracking and reporting needs of the organization. Once the new department is created and provider(s) added, MIE will change the realm in the layout, so that the new department will be mapped to the Provider field, as needed.

{{% tip %}}

The Provider field will autofill with the name of the logged-in user when documenting a restriction, if the user is a member of the department/realm mapped in the layout. This saves time for physicians who document restrictions in the shared Restrictions and Accommodations section of the encounter.

{{% /tip %}}


### Legacy System Case Management

It is important to consider how any current or existing case management data, or open cases/incidents, will be addressed and imported from the legacy system. As a means to assist clients with the transition to the {{% system-name %}} system, various import options are available for all relevant data. Determining the best option will require an understanding of the data being imported, the intended use of the imported data, as well as the status of the legacy system, at the time of import (e.g., Read/Write, Read Only).

For clients interested in generating OSHA 300 logs, and who would like to import encounters, restrictions, accommodations, conditions, and natures of injury, the [Case Management CSV API](http://www.mieweb.com/wiki/Lost_Time_CSV_Import) is the best tool to consider. It is important to determine if any additional data fields from the existing/legacy system will need to be imported for Lost Time tracking, for example, or for any data requirements that are not supported with the Case Management CSV API (e.g., dates, free-text notes/comments regarding cases, etc.).

{{% info %}}

Because importing historical/closed cases produces only *summary* documents and not discrete data entries, custom configuration is available for importing any historical Lost Time data from current/open cases as an add-on service, scoped and billed separately.

{{% /info %}}


Alternatively, clients may choose to manually open cases and encounters in order to document anew all case/incident data, where then any historical documents brought in may be linked, accordingly. This is essentially creating each case/encounter from scratch.

{{% tip %}}

If cases are being created to link and document historical data, it is best practice to review cases from the legacy system, beforehand. This allows for a validation of the case(s), before creating the new ones.

{{% /tip %}}


### Preloaded Forms and Templates

As a standard, {{% system-name %}} includes various templates and preloaded forms designed to assist clients in their case management workflows and processes. Clients should review existing email and document templates, as well as any preloaded forms, for verbiage and content. Determine if any additional email templates, forms, or document templates (e.g., text, sketch, MS Word, etc.) are needed for the established case management workflow(s).

## Reporting

Case Managers utilizing the WR Case Management encounter will find that {{% system-name %}} offers various reports driven by the WR Case Management encounter data. These reports can be found in the **Reports** sidemenu, under the [WR Case Mgmt tab](https://system/?f=layout&module=reports&name=CaseManagement&tabmodule=reports&t=Case+Management&tabmodule=reports&tabselect=WR+Case+Mgmt). Reports include *Case Management Encounters*, *Daily Activity Report*, and *Health Care Provider Report*. A *Liberty Mutual Cases Sent* report is also available for those clients using a bi-directional interface with the third-party insurance administrator Liberty Mutual. Another report to utilize for WR Case Management encounters is the *Encounter Search Custom Report* found in the [Visits](https://system/?f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits&tabmodule=reports&tabselect=Visits) section of the Reports sidemenu. This report may be helpful if the WR Case Management encounter is set to archive as a specific document type.

Other work-related cases reports can be found in the [Safety](https://system/?f=layout&module=reports&name=Safety&tabmodule=reports&tabmodule=reports&tabselect=Safety) section of the Reports sidemenu. These reports include the *OSHA 300 Log*, *OSHA 300A Report*, and *Sharps Log*. Another popular report from the Safety section is the *Incident Report*, which tracks all cases (incidents) that were reported. Even though a chart may have a case/incident reported, it does not necessarily warrant a WR Case Management encounter being created. Because of this, the Incident Report helps users search for all cases reported throughout the {{% system-name %}} system, looking for cases only; not encounters.

All clients should review the available reports in order to determine if any additional reports are needed for case management.

## Resources

### CSV Import Tools & OSHA E-file Info

* [Public Case Management CSV API](http://www.mieweb.com/wiki/Lost_Time_CSV_Import)
* [Public Case Management CSV API Specification Spreadsheet](https://docs.google.com/spreadsheets/d/1sLE0ZxfpH27FOIiEUo2YrNfmmI7L-6MWS1aTJu7sVHM/edit#gid=0)
* [Public User Instructions for Importing Data (Data Standards)](http://www.mieweb.com/wiki/Data_Import_Standards#Data_Import_User_Instructions)
* [OSHA.gov Injury Tracking Application API Documentation](https://www.osha.gov/injuryreporting/osha_ita_api_documentation.pdf)

### Help Documentation

* [Cases-Adding Absence Management Case](../../general-functionality/injury-care/case-management/adding-absence-management-case.html)
* [Cases-Adding Hospital Case](../../general-functionality/injury-care/case-management/adding-hospital-case.html)
* [Cases-Adding MSEA Case](../../general-functionality/injury-care/case-management/adding-msea-case.html)
* [Cases-Adding Non-OSHA Case](../../general-functionality/injury-care/case-management/adding-non-osha-case.html)
* [Cases-Adding OSHA Case](../../general-functionality/injury-care/case-management/adding-osha-case.html)
* [Cases-Closing An Existing Case](../../general-functionality/injury-care/case-management/closing-an-existing-case.html)
* [Cases-Deleting An Existing Case](../../general-functionality/injury-care/case-management/deleting-an-existing-case.html)
* [Cases-Viewing](../../general-functionality/injury-care/case-management/viewing-cases.html)
* [Common Case Search Report](../../general-functionality/reports/common-case-search-report.html)
* [Data Import-Lost Time Import Tool](../../general-functionality/system-administration/data-migration/lost-time-import-tool.html)
* [OSHA 300 Log Report](../../general-functionality/reports/osha-300-log-report.html)
* [Patient Incident Reports](../../general-functionality/reports/incidents-report.html)
