---
id: '1Q8_sOdW4INet_JyBXaaBHn6ilTvpzvljAb11wgo6XR8'
title: 'Rapid Deployment Project Outline'
date: '2020-02-27T21:24:04.139Z'
version: 24
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'rapid-deployment-agenda.md'
  - 'review-sessions/review-session-system-configuration.md'
  - '../functions/system-configuration/system-files-management.md'
  - '../functions/system-configuration/locations-management.md'
  - '../functions/system-configuration/managing-departments.md'
  - '../functions/system-administration/system-controls/setting-up-e-prescribers.md'
  - '../functions/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md'
  - '../functions/system-configuration/document-type-tab.md'
  - '../functions/system-configuration/chart-types-editor.md'
  - '../functions/system-configuration/chart-tabs.md'
  - 'https://drive.google.com/open?id=17lF5jX7q3_oBclS7j9Y5bnpEScivaFnrSwrgQT-0yj8'
  - '../functions/system-configuration/fee-schedules.md'
  - 'review-sessions/review-session-patient-registration.md'
  - '../functions/e-chart/demographics-tab-summary.md'
  - '../functions/document-management/documents-and-forms/picture-photo-documents.md'
  - '../functions/system-administration/system-controls/partition-manager.md'
  - 'review-sessions/review-session-document-management.md'
  - '../functions/document-management/scanning-and-indexing/scanning.md'
  - '../functions/document-management/documents-and-forms/form-documents.md'
  - '../functions/document-management/printing-and-print-definitions/print-definitions.md'
  - 'review-sessions/review-session-checkin.md'
  - 'review-sessions/review-session-scheduler.md'
  - '../functions/scheduling/appt-types-tab.md'
  - '../functions/system-configuration/colors.md'
  - '../functions/scheduling/cancel-no-show-edit-appointments.md'
  - '../functions/system-administration/system-controls/resource-restrictions.md'
  - '../functions/scheduling/schedules-tab.md'
  - '../functions/scheduling/waiting-list-tab.md'
  - 'review-sessions/review-session-portal-management.md'
  - 'review-sessions/review-session-encounter-workflow.md'
  - '../functions/order-and-result-management/observation-flowsheets.md'
  - '../functions/encounters/encounter-protocols.md'
  - '../functions/system-configuration/encounters-protocol-configuration-and-programming.md'
  - 'review-sessions/review-session-injury-care.md'
  - '../functions/injury-care/editing-restriction-types.md'
  - '../functions/injury-care/work-status.md'
  - 'review-sessions/review-session-case-management.md'
  - 'review-sessions/review-session-work-related-exams.md'
  - 'review-sessions/review-session-health-surveillance.md'
  - '../functions/health-surveillance/introduction-to-health-surveillance-panels.md'
  - '../functions/health-surveillance/panel-action-evaluator.md'
  - '../functions/system-configuration/work-locations-tab-work-regions.md'
  - 'review-sessions/review-session-order-and-result-management.md'
  - '../functions/order-and-result-management/e-orders-chart-tab.md'
  - 'review-sessions/review-session-medication-management-electronic-prescribing.md'
  - '../functions/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md'
  - '../functions/medication-management-and-e-prescribing/travel-kits.md'
  - 'review-sessions/review-session-injection-immunization-management.md'
  - '../functions/injection-immunization-management/injection-editor.md'
  - '../functions/injection-immunization-management/injection-program-tab-recording-mass-injections.md'
  - 'review-sessions/review-session-tasking.md'
  - '../functions/task-management/fast-task-templates.md'
  - '../functions/task-management/task-list.md'
  - 'review-sessions/review-session-e-sign.md'
  - 'review-sessions/review-session-fax-manager.md'
  - '../functions/system-administration/system-controls/inbound-fax-queue-setting-user-access-permissions.md'
  - '../functions/fax-manager/fax-manager-tab-outbound-faxing.md'
  - 'review-sessions/review-session-reports.md'
  - '../functions/reports/to-restrict-report-access.md'
  - 'review-sessions/review-session-system-administration.md'
  - '../functions/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md'
  - '../functions/system-administration/system-controls/document-queue-merging-imported-documents.md'
  - '../functions/system-administration/system-controls/multilingual-feature.md'
  - '../functions/system-administration/security/my-settings.md'
  - '../functions/system-administration/security/security-role-settings.md'
  - '../functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md'
source: 'https://drive.google.com/open?id=1Q8_sOdW4INet_JyBXaaBHn6ilTvpzvljAb11wgo6XR8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Project Initiation

* <strong>Account Management</strong>
    * Forward Executed Agreement and SOW to Accounting
    * Confirm PO/Invoice with Accounting
* <strong>Project Kick-Off</strong>
    * Establish Project Core Teams - Roles and Responsibilities
    * Set up Project Kick-Off Meeting and Meetings Calendar
    * Project Charter
    * [Project Schedule](rapid-deployment-agenda.md)
    * Vendor Governance

## System Integration

* <strong>Build and Sync EHS Environments</strong>
* <strong>Connectivity</strong> (<em>if applicable</em>)
    * Site-to-Site VPN
    * Secure Mail Connection
    * SFTP Server Configuration
* <strong>Single Sign-On</strong> (<strong>SSO</strong>)
    * Exchange SAML Metadata (<em>if applicable</em>)
    * Configuration
    * Testing
* <strong>Lab Interfaces</strong> (add-on)
    * Data Mapping
    * Build Interface(s)
* <strong>Device Interfaces</strong> (add-on)
    * Data Mapping
    * Build Interface(s)
* <strong>Immunization Registry Interface</strong> (add-on)
    * Data Mapping
    * Build Interface
* <strong>HR Interface/Employee Data Import</strong>
    * Data Mapping
    * Build Interface

## Data Migration

* <strong>Kick-Off</strong>
    * Scope Agreement
* <strong>System Preparations</strong>
    * Data Exchange Logistics
    * Data Transfer
    * Data Encryption (<em>optional</em>)
* <strong>Mapping</strong>
    * Initial Testing
        * Validation
        * Issue Remediation
    * Final Testing
        * Validation
        * Acceptance of Data Migration Results
* <strong>Cutover</strong>
    * Schedule Cutover Date

## Deployment & Configuration

* Base [System Configuration](review-sessions/review-session-system-configuration.md)
    * Review Session Demonstration
    * [Corporate Branding](../functions/system-configuration/system-files-management.md)
    * [Update Locations](../functions/system-configuration/locations-management.md)
    * Department and User Configuration
        * Add Users
        * [Add Departments](../functions/system-configuration/managing-departments.md)
        * [Prescriber Setup](../functions/system-administration/system-controls/setting-up-e-prescribers.md)
        * [User/Patient Relationship Setup](../functions/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md)
    * Chart Configuration
        * [Document Types](../functions/system-configuration/document-type-tab.md)
        * [Chart Types](../functions/system-configuration/chart-types-editor.md)
        * [Chart Tabs](../functions/system-configuration/chart-tabs.md)
        * [CPT Codes](https://drive.google.com/open?id=17lF5jX7q3_oBclS7j9Y5bnpEScivaFnrSwrgQT-0yj8)
        * Billing
            * [Fee Schedules](../functions/system-configuration/fee-schedules.md)
            * Insurance Plans
* [Patient Registration](review-sessions/review-session-patient-registration.md)
    * Review Session Demonstration
    * Manual Registration - [Demographics](../functions/e-chart/demographics-tab-summary.md)
    * [Chart Photos](../functions/document-management/documents-and-forms/picture-photo-documents.md)
    * [User Roles/Relationships](../functions/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md)
    * [Partition Restrictions](../functions/system-administration/system-controls/partition-manager.md)
* [Document Management](review-sessions/review-session-document-management.md)
    * Review Session Demonstration
    * [WebScan](../functions/document-management/scanning-and-indexing/scanning.md)
    * [Forms Library](../functions/document-management/documents-and-forms/form-documents.md)
    * Adding Documents
    * Insurance Card Scanning
    * [Print Definitions](../functions/document-management/printing-and-print-definitions/print-definitions.md)
* [Check-in](review-sessions/review-session-checkin.md)
    * Review Session Demonstration
    * Check-in Stations
    * Check-in Portal (add-on)
* [Scheduling](review-sessions/review-session-scheduler.md)
    * Review Session Demonstration
    * [Appointment Types](../functions/scheduling/appt-types-tab.md)
        * Durations
        * [Colors](../functions/system-configuration/colors.md)
        * Default Encounter Types
        * Appointment Type Print Definitions
    * [Cancellation Codes](../functions/scheduling/cancel-no-show-edit-appointments.md)
    * [Scheduling Resources](../functions/system-administration/system-controls/resource-restrictions.md)
    * [Schedules](../functions/scheduling/schedules-tab.md)
    * [Waiting List](../functions/scheduling/waiting-list-tab.md)
* [Portal Management](review-sessions/review-session-portal-management.md)
    * Review Session Demonstration
    * Employee Portal
    * Supervisor Portal
* [Encounters](review-sessions/review-session-encounter-workflow.md)
    * Review Session Demonstration
    * Encounter Types
    * Encounter Templates
    * [Observation Flowsheets](../functions/order-and-result-management/observation-flowsheets.md)
    * Macros
    * [Protocol Templates](../functions/encounters/encounter-protocols.md) & [Configuration](../functions/system-configuration/encounters-protocol-configuration-and-programming.md)
* [Injury Care](review-sessions/review-session-injury-care.md)
    * Review Session Demonstration
    * Scope Agreement
    * Nature of Injury
    * OSHA Reports for E-file (manual)
    * [Restriction Types](../functions/injury-care/editing-restriction-types.md)
    * State-specific Reports of Injury
    * [Work Status Report](../functions/injury-care/work-status.md)
* [Case Management](review-sessions/review-session-case-management.md)
    * Review Session Demonstration
    * Configuration
* [Work-Related Exams](review-sessions/review-session-work-related-exams.md)
    * Review Session Demonstration
    * Driver Fitness Determination (DOT)
    * Pre-Employment
    * Return-to-Work
    * Travel Management
* [Health Surveillance](review-sessions/review-session-health-surveillance.md)
    * Review Session Demonstration
    * Scope Agreement
    * [Panels](../functions/health-surveillance/introduction-to-health-surveillance-panels.md)
    * [Panel Actions](../functions/health-surveillance/panel-action-evaluator.md)
    * Representative Events
    * Membership
    * Scheduling
    * Questionnaires
    * Email Templates/Notifications
    * [Work Locations/Work Sites/Regions](../functions/system-configuration/work-locations-tab-work-regions.md)
* [Order and Result Management](review-sessions/review-session-order-and-result-management.md)
    * Review Session Demonstration
    * [Order Items](../functions/order-and-result-management/e-orders-chart-tab.md)
    * Order Panels
    * [Order Picklists](../functions/order-and-result-management/e-orders-chart-tab.md) (e.g., lab orders, radiology orders, referrals, PT, etc.)
    * [Observation Flowsheets](../functions/order-and-result-management/observation-flowsheets.md)
    * Test Results
* [Electronic Prescribing/Medication Management](review-sessions/review-session-medication-management-electronic-prescribing.md)
    * Review Session Demonstration
    * Drug Eligibility/SureScripts Advanced (add-on)
    * Electronic Prescribing Controlled Substances (EPCS) Enrollment (add-on)
    * Update First DataBank Provider List
    * [Medication Library](../functions/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md)
    * [Travel Kits](../functions/medication-management-and-e-prescribing/travel-kits.md)
* [Injection/Immunization Management](review-sessions/review-session-injection-immunization-management.md)
    * Review Session Demonstration
    * [Injection Descriptions](../functions/injection-immunization-management/injection-editor.md)
    * [Mass Flu Program Business Rules](../functions/injection-immunization-management/injection-program-tab-recording-mass-injections.md)
* [Tasking](review-sessions/review-session-tasking.md)
    * Review Session Demonstration
    * [Fast Task Templates](../functions/task-management/fast-task-templates.md)
    * [Tasklist Event Rules](../functions/task-management/task-list.md)
* [E-Sign](review-sessions/review-session-e-sign.md)
    * Review Session Demonstration
    * E-Sign Editor Rules
* [Fax Manager](review-sessions/review-session-fax-manager.md)
    * Review Session Demonstration
    * Load Fax Coversheet(s)
    * [Inbound Fax Queue](../functions/system-administration/system-controls/inbound-fax-queue-setting-user-access-permissions.md) (add-on)
    * [Outbound Faxing](../functions/fax-manager/fax-manager-tab-outbound-faxing.md)
    * Preferences/Permissions/Security Settings
* [Reports](review-sessions/review-session-reports.md)
    * Review Session Demonstration
    * Report Requirements and Gap Analysis
    * Configure Reports
    * [Report Restrictions](../functions/reports/to-restrict-report-access.md)
    * Pivot Access
* [System Administrator](review-sessions/review-session-system-administration.md)
    * Review Session Demonstration
    * [ActiveX Controls](../functions/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md)
    * [Document Queue](../functions/system-administration/system-controls/document-queue-merging-imported-documents.md)
    * [Language Translations](../functions/system-administration/system-controls/multilingual-feature.md)
    * Scheduled Jobs
    * [User Preferences](../functions/system-administration/security/my-settings.md)
    * [Security Role Settings](../functions/system-administration/security/security-role-settings.md)
    * System Settings
    * [Secure Email Setup](../functions/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md)

## Formal User Acceptance Testing (UAT)

* Approve Test Plan
* Load Data
* Update Test Scripts
* Formal System Testing
* Data Migration Verification Report

## Training

* Approve Training Plan
* Conduct Training
* Follow-up Q&A Session

## Deployment Planning

* Validation Report
* Security Admin Standard Operating Procedures (SOP)
* Support Matrix
* Business Continuity Plan (BCP)
* Vendor Management Plan

## Go-Live/Rollout

* Conversion
* Data Load
* Go-Live
* Stabilization
