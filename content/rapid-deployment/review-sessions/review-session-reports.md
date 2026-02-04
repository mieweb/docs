---
id: '1HBDLPvHAyvO8K1g2gk8mlzBn76G84bBxUUiFlgbFzbQ'
title: 'Review Session - Reports'
date: '2020-02-27T21:26:07.051Z'
version: 44
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/0B5Hsu0mf2-tkQ2Rqak5lZGNhRXc/view'
  - 'https://system/?func=admin&subfunc=roleeditor&t=Security+Role+Editor&tabmodule=admin&tabselect=Security+Roles'
  - '../../features/system-administration/security/security-role-settings.md'
  - 'https://system/?f=layout&module=reports&name=reports&tabmodule=reports'
  - 'https://system/?f=admin&s=system_report&tabmodule=admin&tabselect=System+Report'
  - '../../features/reports/using-datavis-grids-data-tools.md'
  - '../../features/reports/appointment-report.md'
  - '../../features/reports/checkin-reports.md'
  - '../../features/reports/conditions-report.md'
  - 'https://drive.google.com/open?id=0B5Hsu0mf2-tkS2NLYzZVTzdNdHM'
  - '../../features/reports/demographics-report.md'
  - '../../features/reports/dictation-without-transcription-report.md'
  - '../../features/reports/documents-report-super-document-type-search.md'
  - '../../features/reports/e-meds-report.md'
  - 'https://drive.google.com/open?id=0B5Hsu0mf2-tkNWJVMjlqNWdUTDQ'
  - '../../features/reports/encounter-report.md'
  - '../../features/reports/open-encounters-report.md'
  - '../../features/reports/exporting-report-data.md'
  - '../../features/reports/guideline-report.md'
  - '../../features/reports/meaningful-use-reports.md'
  - '../../features/reports/medication-report.md'
  - '../../functions/reports/non-compliant-report.md'
  - '../../functions/reports/orders-due-report.md'
  - '../../features/reports/orders-usage-report.md'
  - '../../features/reports/additional-appointment-related-reports.md'
  - '../../features/reports/incidents-report.md'
  - '../../features/reports/observations-report.md'
  - '../../features/reports/storage-report.md'
  - '../../features/reports/task-report.md'
  - '../../features/reports/transcription-report.md'
  - '../../features/reports/uncoded-medications-report.md'
  - '../../features/reports/webscan-report.md'
  - '../../features/reports/common-case-search-report.md'
  - '../../features/reports/osha-300-log-report.md'
  - '../../features/reports/to-restrict-report-access.md'
  - '../../features/reports/panel-definition-report.md'
source: 'https://drive.google.com/open?id=1HBDLPvHAyvO8K1g2gk8mlzBn76G84bBxUUiFlgbFzbQ'
wikigdrive: 'v2.15.30'
---
## Agenda

* <strong>Reports Demonstration</strong>
* <strong>Overview</strong>
* <strong>System Configuration</strong>
    * <strong>Configure Reports</strong>
    * <strong>Pivot Report Access</strong>
    * <strong>Report Restrictions</strong>
    * <strong>Open Database Connectivity (ODBC)</strong>

## Overview

{{% system-name %}} offers an extensive list of detailed and summary reports, ranging from the standard clinical reports to occupational health and safety reports; all of which allow leadership to accurately report electronic data to medical and administrative staff, as well as to compliance officers and entities. All reports have the ability to export to CSV format, and custom configuration can also be done, to automate reminders to users regarding individual outcomes, quality care, or compliance needs, such as TB testing or immunizations.

Add-on services are available with the Reports module, including the ability to build custom reports, integrate with State immunization registries or third-party applications. These efforts would need to be scoped and billed separately, if interested.

Standard functionality includes pre-loaded standard reports for:

* Appointments
* Dictation/Transcription
* Health Surveillance
* Medications/Allergies/Scripts
* Orders
* Safety
* Utilization
* Visits
* Work-Related Case Management
* Industrial Hygiene

## System Configuration

### Configure Reports

There are many reports available out-of-the box that do not require any configuration or additional formatting. If there is a reporting need that is not met with the standard reports included in the product, a request should be sent to the Deployment Specialist or Account Manager, to better determine the customizations and overall scope for the enhancement project. Requirements for the report request should include a description of the report, as well as filter fields and columns that should display in the results.

Early on, time should be given to discover and review any potential reporting requirements, such as country-specific reports for international clients, for example. Custom reports can have a large impact on timelines, so early discovery and scoping can make for a greater success. Make sure time is spent determining what data needs captured, noting any gaps between the standard reports and specific workflow needs. Note any modules that may need configured or developed, and review the report requirement guidelines and [data collection tool](https://drive.google.com/file/d/0B5Hsu0mf2-tkQ2Rqak5lZGNhRXc/view), to help prepare any report requirements (and pivot models). If any partition search filters are required, be sure to include these in report considerations, as well.

### Pivot Report Access

A pivot table is a visual summary of data in a tabular, easily manipulated format, which allows for sorting and filtering of information by way of specific rows and/or columns. *Pivot* refers to the ability to rotate or move information within the table. As data is added, removed, or changed, the table calculates the results, accordingly. Pivot table reports are included in the standard product; however, for an additional cost, Open Database Connectivity access is also available.

### Report Restrictions

It is recommended that a review of all of the relevant security settings occur, so all users or roles needing report access are granted the necessary permissions. Users can be restricted from accessing and managing the standard system reports by way of the [Security Roles editor](https://system/?func=admin&subfunc=roleeditor&t=Security+Role+Editor&tabmodule=admin&tabselect=Security+Roles); however, limitations can also be imposed by way of a customized report layout, if necessary. For more detailed information, see our [Security Role Settings](../../features/system-administration/security/security-role-settings.md) online help documentation.

The following are some of the more regularly used security settings to consider:

* <strong>Statistics</strong>: Allows users to access reports from the [Reports sidemenu](https://system/?f=layout&module=reports&name=reports&tabmodule=reports) and [System Reports](https://system/?f=admin&s=system_report&tabmodule=admin&tabselect=System+Report). System Reports, however, requires Superuser permissions to access and run these reports.
* <strong>View Transcription Stats</strong>: Allows users to view transcription statistics from the Transcription report.
* <strong>RX Search</strong>: Allows a user access to the Meds Report, which gives a quick summary of all the medications in the system.
* <strong>Manage System Reports</strong>: The level of permission selected determines the level of access users in the security role will be granted for system reports, which also may affect pivot reports.
* <strong>View Transactions</strong>: Allows users access to view inventory Transaction Reports of the Inventory module.

### Open Database Connectivity (ODBC)

Determine if Open Database Connectivity (ODBC) access is necessary. MIE supports Client Database access via a secure ODBC connection. ODBC is basically granting access (specific users) to the MIE network in order to access the servers. Clients interested in accessing the data to create personalized reports using SQL or another third-party software like Crystal Reports, can be granted a limited number of authorized users for accessing replication/backup (never production) data to construct these personalized reports. However, those clients with the database installed on *their* server may already have access to the production and backup data. In such cases, the MIE Development team can assist clients with logging into the root server to access the necessary data for report preparations.

## Resources

### Help Documentation

* [DataVis Grids](../../features/reports/using-datavis-grids-data-tools.md)
* [Appointment Report](../../features/reports/appointment-report.md)
* [Checkin Report](../../features/reports/checkin-reports.md)
* [Conditions-ICD9 Report](../../features/reports/conditions-report.md)
* [CPOE Report](https://drive.google.com/open?id=0B5Hsu0mf2-tkS2NLYzZVTzdNdHM)
* [Demographics Report](../../features/reports/demographics-report.md)
* [Dictation without Transcription Report](../../features/reports/dictation-without-transcription-report.md)
* [Documents Report-Super DocSearch](../../features/reports/documents-report-super-document-type-search.md)
* [E-Meds Report of Printed-Faxed-ESent](../../features/reports/e-meds-report.md)
* [EM Calc Report](https://drive.google.com/open?id=0B5Hsu0mf2-tkNWJVMjlqNWdUTDQ)
* [Encounter Report](../../features/reports/encounter-report.md)
* [Encounters Open Exam Report](../../features/reports/open-encounters-report.md)
* [Export Spreadsheet-Show CSV-Show Spreadsheet](../../features/reports/exporting-report-data.md)
* [Guideline Report](../../features/reports/guideline-report.md)
* [Meaningful Use Incentive Reports](../../features/reports/meaningful-use-reports.md)
* [Med Report](../../features/reports/medication-report.md)
* [Non-Compliant Report](../../functions/reports/non-compliant-report.md)
* [Orders Due Report](../../functions/reports/orders-due-report.md)
* [Orders Usage Report](../../features/reports/orders-usage-report.md)
* [Other Appointment Related Reports](../../features/reports/additional-appointment-related-reports.md)
* [Patient Incident Reports](../../features/reports/incidents-report.md)
* [Patient Observations Report](../../features/reports/observations-report.md)
* [Storage Report](../../features/reports/storage-report.md)
* [Task Report](../../features/reports/task-report.md)
* [Transcription Report](../../features/reports/transcription-report.md)
* [Uncoded Meds Report](../../features/reports/uncoded-medications-report.md)
* [WebScan Report](../../features/reports/webscan-report.md)
* [Common Case Search Report](../../features/reports/common-case-search-report.md)
* [OSHA 300 Log Report](../../features/reports/osha-300-log-report.md)
* [To Restrict Report Access](../../features/reports/to-restrict-report-access.md)
* [Health Surveillance Panels-Panel Definition Report](../../features/reports/panel-definition-report.md)
