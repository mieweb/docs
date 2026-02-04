---
id: '1Q8_sOdW4INet_JyBXaaBHn6ilTvpzvljAb11wgo6XR8'
title: 'Rapid Deployment Project Outline'
date: '2025-04-07T17:28:12.020Z'
version: 40
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'rapid-deployment-agenda.md'
  - 'review-sessions/review-session-system-configuration.md'
  - '../features/system-configuration/system-files-management.md'
  - '../features/system-configuration/locations-management.md'
  - '../features/system-configuration/managing-departments.md'
  - '../features/system-administration/system-controls/setting-up-e-prescribers.md'
  - '../features/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md'
  - '../features/system-configuration/document-type-tab.md'
  - '../features/system-configuration/chart-types-editor.md'
  - '../features/system-configuration/chart-tabs.md'
  - 'https://drive.google.com/open?id=17lF5jX7q3_oBclS7j9Y5bnpEScivaFnrSwrgQT-0yj8'
  - '../features/system-configuration/fee-schedules.md'
  - 'review-sessions/review-session-patient-registration.md'
  - '../features/e-chart/demographics-tab-summary.md'
  - '../features/document-management/documents-and-forms/picture-photo-documents.md'
  - '../features/system-administration/system-controls/partition-manager.md'
  - 'review-sessions/review-session-document-management.md'
  - '../features/document-management/scanning-and-indexing/scanning.md'
  - '../features/document-management/documents-and-forms/form-documents.md'
  - '../features/document-management/printing-and-print-definitions/print-definitions.md'
  - 'review-sessions/review-session-checkin.md'
  - 'review-sessions/review-session-scheduler.md'
  - '../features/scheduling/appt-types-tab.md'
  - '../features/system-configuration/colors.md'
  - '../features/scheduling/cancel-no-show-edit-appointments.md'
  - '../features/system-administration/system-controls/resource-restrictions.md'
  - '../features/scheduling/schedules-tab.md'
  - '../features/scheduling/waiting-list-tab.md'
  - 'review-sessions/review-session-portal-management.md'
  - 'review-sessions/review-session-encounter-workflow.md'
  - '../features/order-and-result-management/observation-flowsheets.md'
  - '../features/encounters/encounter-protocols.md'
  - '../features/system-configuration/encounters-protocol-configuration-and-programming.md'
  - 'review-sessions/review-session-injury-care.md'
  - '../features/injury-care/editing-restriction-types.md'
  - '../features/injury-care/work-status.md'
  - 'review-sessions/review-session-case-management.md'
  - 'review-sessions/review-session-work-related-exams.md'
  - 'review-sessions/review-session-health-surveillance.md'
  - '../features/health-surveillance/introduction-to-health-surveillance-panels.md'
  - '../features/health-surveillance/panel-action-evaluator.md'
  - '../features/system-configuration/work-locations-tab.md'
  - 'review-sessions/review-session-order-and-result-management.md'
  - '../features/order-and-result-management/e-orders-chart-tab.md'
  - 'review-sessions/review-session-medication-management-electronic-prescribing.md'
  - '../features/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md'
  - '../features/medication-management-and-e-prescribing/travel-kits.md'
  - 'review-sessions/review-session-injection-immunization-management.md'
  - '../features/injection-immunization-management/injection-editor.md'
  - '../features/injection-immunization-management/injection-program-tab-recording-mass-injections.md'
  - 'review-sessions/review-session-tasking.md'
  - '../features/task-management/fast-task-templates.md'
  - '../features/task-management/task-list.md'
  - 'review-sessions/review-session-e-sign.md'
  - 'review-sessions/review-session-fax-manager.md'
  - '../features/system-administration/system-controls/inbound-fax-queue-setting-user-access-permissions.md'
  - '../features/fax-manager/fax-manager-tab-outbound-faxing.md'
  - 'review-sessions/review-session-reports.md'
  - '../features/reports/to-restrict-report-access.md'
  - 'review-sessions/review-session-system-administration.md'
  - '../features/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md'
  - '../features/system-administration/system-controls/document-queue-merging-imported-documents.md'
  - '../features/system-administration/system-controls/multilingual-feature.md'
  - '../features/system-administration/security/my-settings.md'
  - '../features/system-administration/security/security-role-settings.md'
  - '../features/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md'
source: 'https://drive.google.com/open?id=1Q8_sOdW4INet_JyBXaaBHn6ilTvpzvljAb11wgo6XR8'
wikigdrive: 'v2.15.30'
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
    * [Corporate Branding](../features/system-configuration/system-files-management.md)
    * [Update Locations](../features/system-configuration/locations-management.md)
    * Department and User Configuration
        * Add Users
        * [Add Departments](../features/system-configuration/managing-departments.md)
        * [Prescriber Setup](../features/system-administration/system-controls/setting-up-e-prescribers.md)
        * [User/Patient Relationship Setup](../features/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md)
    * Chart Configuration
        * [Document Types](../features/system-configuration/document-type-tab.md)
        * [Chart Types](../features/system-configuration/chart-types-editor.md)
        * [Chart Tabs](../features/system-configuration/chart-tabs.md)
        * [Billing Codes](https://drive.google.com/open?id=17lF5jX7q3_oBclS7j9Y5bnpEScivaFnrSwrgQT-0yj8)
        * Billing
            * [Fee Schedules](../features/system-configuration/fee-schedules.md)
            * Insurance Plans
* [Patient Registration](review-sessions/review-session-patient-registration.md)
    * Review Session Demonstration
    * Manual Registration - [Demographics](../features/e-chart/demographics-tab-summary.md)
    * [Chart Photos](../features/document-management/documents-and-forms/picture-photo-documents.md)
    * [User Roles/Relationships](../features/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md)
    * [Partition Restrictions](../features/system-administration/system-controls/partition-manager.md)
* [Document Management](review-sessions/review-session-document-management.md)
    * Review Session Demonstration
    * [WebScan](../features/document-management/scanning-and-indexing/scanning.md)
    * [Forms Library](../features/document-management/documents-and-forms/form-documents.md)
    * Adding Documents
    * Insurance Card Scanning
    * [Print Definitions](../features/document-management/printing-and-print-definitions/print-definitions.md)
* [Check-in](review-sessions/review-session-checkin.md)
    * Review Session Demonstration
    * Check-in Stations
    * Check-in Portal (add-on)
* [Scheduling](review-sessions/review-session-scheduler.md)
    * Review Session Demonstration
    * [Appointment Types](../features/scheduling/appt-types-tab.md)
        * Durations
        * [Colors](../features/system-configuration/colors.md)
        * Default Encounter Types
        * Appointment Type Print Definitions
    * [Cancellation Codes](../features/scheduling/cancel-no-show-edit-appointments.md)
    * [Scheduling Resources](../features/system-administration/system-controls/resource-restrictions.md)
    * [Schedules](../features/scheduling/schedules-tab.md)
    * [Waiting List](../features/scheduling/waiting-list-tab.md)
* [Portal Management](review-sessions/review-session-portal-management.md)
    * Review Session Demonstration
    * Employee Portal
    * Supervisor Portal
* [Encounters](review-sessions/review-session-encounter-workflow.md)
    * Review Session Demonstration
    * Encounter Types
    * Encounter Templates
    * [Observation Flowsheets](../features/order-and-result-management/observation-flowsheets.md)
    * Macros
    * [Protocol Templates](../features/encounters/encounter-protocols.md) & [Configuration](../features/system-configuration/encounters-protocol-configuration-and-programming.md)
* [Injury Care](review-sessions/review-session-injury-care.md)
    * Review Session Demonstration
    * Scope Agreement
    * Nature of Injury
    * OSHA Reports for E-file (manual)
    * [Restriction Types](../features/injury-care/editing-restriction-types.md)
    * State-specific Reports of Injury
    * [Work Status Report](../features/injury-care/work-status.md)
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
    * [Panels](../features/health-surveillance/introduction-to-health-surveillance-panels.md)
    * [Panel Actions](../features/health-surveillance/panel-action-evaluator.md)
    * Representative Events
    * Membership
    * Scheduling
    * Questionnaires
    * Email Templates/Notifications
    * [Work Locations/Work Sites/Regions](../features/system-configuration/work-locations-tab.md)
* [Order and Result Management](review-sessions/review-session-order-and-result-management.md)
    * Review Session Demonstration
    * [Order Items](../features/order-and-result-management/e-orders-chart-tab.md)
    * Order Panels
    * [Order Picklists](../features/order-and-result-management/e-orders-chart-tab.md) (e.g., lab orders, radiology orders, referrals, PT, etc.)
    * [Observation Flowsheets](../features/order-and-result-management/observation-flowsheets.md)
    * Test Results
* [Electronic Prescribing/Medication Management](review-sessions/review-session-medication-management-electronic-prescribing.md)
    * Review Session Demonstration
    * Drug Eligibility/SureScripts Advanced (add-on)
    * Electronic Prescribing Controlled Substances (EPCS) Enrollment (add-on)
    * Update First DataBank Provider List
    * [Medication Library](../features/medication-management-and-e-prescribing/remembered-prescriptions-and-meds-library.md)
    * [Travel Kits](../features/medication-management-and-e-prescribing/travel-kits.md)
* [Injection/Immunization Management](review-sessions/review-session-injection-immunization-management.md)
    * Review Session Demonstration
    * [Injection Descriptions](../features/injection-immunization-management/injection-editor.md)
    * [Mass Flu Program Business Rules](../features/injection-immunization-management/injection-program-tab-recording-mass-injections.md)
* [Tasking](review-sessions/review-session-tasking.md)
    * Review Session Demonstration
    * [Fast Task Templates](../features/task-management/fast-task-templates.md)
    * [Tasklist Event Rules](../features/task-management/task-list.md)
* [E-Sign](review-sessions/review-session-e-sign.md)
    * Review Session Demonstration
    * E-Sign Editor Rules
* [Fax Manager](review-sessions/review-session-fax-manager.md)
    * Review Session Demonstration
    * Load Fax Coversheet(s)
    * [Inbound Fax Queue](../features/system-administration/system-controls/inbound-fax-queue-setting-user-access-permissions.md) (add-on)
    * [Outbound Faxing](../features/fax-manager/fax-manager-tab-outbound-faxing.md)
    * Preferences/Permissions/Security Settings
* [Reports](review-sessions/review-session-reports.md)
    * Review Session Demonstration
    * Report Requirements and Gap Analysis
    * Configure Reports
    * [Report Restrictions](../features/reports/to-restrict-report-access.md)
    * Pivot Access
* [System Administrator](review-sessions/review-session-system-administration.md)
    * Review Session Demonstration
    * [ActiveX Controls](../features/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md)
    * [Document Queue](../features/system-administration/system-controls/document-queue-merging-imported-documents.md)
    * [Language Translations](../features/system-administration/system-controls/multilingual-feature.md)
    * Scheduled Jobs
    * [User Preferences](../features/system-administration/security/my-settings.md)
    * [Security Role Settings](../features/system-administration/security/security-role-settings.md)
    * System Settings
    * [Secure Email Setup](../features/system-administration/system-controls/secure-email-to-whitelisted-domain-s.md)

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
