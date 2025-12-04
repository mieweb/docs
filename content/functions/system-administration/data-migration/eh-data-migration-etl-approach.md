---
id: '1SAffT6I3CptjbYDkGjBTE3TifZ0UQFm_E9B7rsl7fsU'
title: ' EH Data Migration ETL Approach'
date: '2025-12-04T14:39:28.402Z'
version: 108
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://www.ietf.org/rfc/rfc4180.txt'
source: 'https://drive.google.com/open?id=1SAffT6I3CptjbYDkGjBTE3TifZ0UQFm_E9B7rsl7fsU'
wikigdrive: 'v2.15.30'
---
## EH Data Migration ETL Approach

Data Migration Additional Documentation

## Overview

In an effort to transition in full or in part off of legacy system(s), Enterprise Health will migrate data modules in discrete and/or in a summary format as identified in the corresponding client-specific Data Migration Requirements Document.

This migration will be performed via the use of data migration scripts which will run against client provided data consisting of:

* legacy database backups
* spreadsheets
* comma-separated values (CSV) files
* data provided from a third party vendor or consultant

This document is set up in 4 parts:

* Project Approach
* ETL
* Expectations for Data Migration Cycles
* Out of Scope

## Project Approach

Data migration shall be done in a system dedicated to the development and validation of data migration, which is referred to as the DM system. The DM system shall be cloned from the system where the configuration of production workflows is being completed (typically this is the system that will eventually become the production system).

The data migration shall be performed in a series of one (or two if needed) cycles plus a dress rehearsal  followed by go-live / cutover. Prior to each cycle, the configuration system shall be cloned and the DM system shall be created without any data migration data in it. A cycle of data migration is defined as the clone of the configuration system and subsequent load of data to the DM system.

### ETL

![](./eh-data-migration-etl-approach.assets/80d3174745af3a733611d915f1a64230.png)

Data Migration follows the steps of Extraction, Transformation, and Loading, commonly referred to as ETL. The ETL strategy for this project is outlined in this section.

1. Extraction: The customer is responsible for delivering the following data:
    * If applicable, legacy database backup(s) shall be exported and delivered to Enterprise Health for transformation and loading. New database exports shall be required for each cycle, plus dress rehearsal, plus final cutover.
    * Decrypted scanned documents shall be packaged and delivered to EH.  One initial delivery (Delta) and additional documents for Dress Rehearsal and Go Live
    * Excel or CSV reports
        * Shall be collected as mutually agreed and discussed from one or more sources such as, but not limited to:
            * Report exports from legacy systems
            * Spreadsheets used for data tracking (e.g., GDrive Sheets, MS Teams, OneDrive)
            * Spreadsheets collected from supervisors tracking HS memberships
        * CSV files must conform to [RFC 4180](https://www.ietf.org/rfc/rfc4180.txt). The delimiter may be any single ascii character. Special characters must be escaped properly, and fields with newlines must be quoted.
1. Transformation & Mapping
    * Client shall perform deduplication and any cleanup required where the source is CSV or Spreadsheets
    * Wherever possible, client shall manipulate the Excel/CSV reports to  conform to EH SQL API Specifications
    * EH shall map and transform data from the source databases and tables listed in the client-specific Legacy Data Migration Requirements Document for each kind of data.
        * For areas of data where no migration scripts exist in the EH transformation repository, additional discovery will be required to find data in the legacy systems, or a report may be requested by EH instead of pulling the data directly from the legacy system backup.
    * EH shall map and transform data from the deduplicated CSV and Excel sources to the EH SQL API formats for each kind of data.
2. Loading
    * EH shall load data to client's DM system for validation by client.

### Expectations for Data Migration Cycles

The following strategy is recommended for each cycle.  The project plan shall be followed wherever possible to determine which areas of data shall be completed in each cycle.

#### Cycle 1

Cycle 1 is the longest cycle of the data migration effort. It is essential that all stakeholders and SMEs of this data are allowed access during the validation effort to identify any issues or missing data during the early phase of the project. It is also essential that a thorough and complete validation is done on the system, noting both data that is migrated correctly (signoff for this data) as well as any issues that arise. Cycle 1 will have issues, but a thorough validation of all of the issues must be undertaken to find all issues so they may be fixed at the same time to control costs and stay in the timeline.

* EH shall consult with Client to understand the APIs for each module scoped (1 time per type of data regardless of the number of systems or times that data shall be extracted and loaded).
* EH shall make ready the DM system.
* Client delivers initial data sources to EH.
* EH verifies the files/backups meet expectations for format and required fields.
* EH performs an initial mapping of all modules  that are in scope without regard to linking to cases and encounters (if applicable).
* EH fixes issues during verification if needed.
* EH loads legacy data to EH DM system.
* EH trains Client how to validate the kind of data that has been loaded (1 time per type of data).
* Client validates data and delivers issues to EH team in charge of data extraction. Documentation of data migration issues shall be maintained on a shared Smartsheet or Google Sheet set up by EH and jointly updated collaboratively by both teams.
* EH team corrects any issues with the data processing logic including any linking of test data to encounters and incidents that were skipped in the initial mapping.
* Client extraction team fixes issues and prepares new data extraction for the cycle 2.

#### Cycle 2 (Optional)

Cycle 2 may be included in the client-specific Legacy Data Migration Requirements Document. It typically applies when the database needs to be re-cloned from the configuration system (Prod) to re-load and validate data that did not pass validation in Cycle 1. Typically, any issues with the migration Health Surveillance and/or discrete cases/incidents/encounters data require a new cycle.

Cycle 2 will include fixes for all issues discovered in Cycle 1, and it may also include the first migration of any parts of the data migration that were not performed in Cycle 1 due to omission or configuration being unavailable at the time of Cycle 1.

As in Cycle 1, a thorough validation of all of the issues must be undertaken to find all issues so they may be fixed at the same time to control costs and stay in the timeline. Any remaining issues found in Cycle 2 may be fixed and validated in the Dress Rehearsal. If substantial issues remain, then additional cycles may be required before a Dress Rehearsal may be attempted.

* EH shall make ready the DM system.
* Client delivers new data sources to EH for any system that was not placed in a read-only state prior to the Cycle 1 data extraction.
* EH verifies the files meet expectations for format and required fields, and that the format and extraction of files matches that of Cycle 1.
* EH fixes issues during verification if needed.
* EH loads legacy data to EH DM system.
* Client validates data and delivers issues to EH team in charge of data extraction.
* Client and/or EH team fixes issues as needed.
* Client provides written acceptance of the data migration project.

#### Dress Rehearsal

Before a dress rehearsal may begin, signoff must be provided at the conclusion of the previous cycle. If the DM system needs to be re-cloned to complete validation and achieve signoff, then an additional cycle may be needed, which may require additional funds or time to complete.

During the Dress Rehearsal, for every step of the data migration process on the Client and EH sides, timing metrics should be taken. These metrics shall be used to create a cutover plan, which will have step-by-step details on how long each step shall take and allow planning for the cutover procedure (and how long Client clinics will need to rely on a legacy system set to read-only).

* EH shall make ready the Dress Rehearsal system.
* Client delivers new data file(s) to EH, performing any transformation or cleansing that is required prior to delivery.
* EH transforms (if applicable) and loads data file(s) to the EH Dress Rehearsal system.
* Client validates data.
* Client provides written acceptance of approval to proceed with Go Live.

#### Go Live / Cutover

* Client delivers final data files to EH, performing any transformation or cleansing that is required prior to delivery.
* EH loads data to the EH Production system.
* Client is ready for Go Live.

## Requirements

1. Work described in the Project Deliverables section of the client-specific Legacy Data Migration Requirements Document and supported by the client-provided data migration documentation.
2. SFTP interface(s) where required to facilitate transport for the Integration.
    * EH will host SFTP to accept encrypted files of the backup data.
    * Exchange of SSH public keys to facilitate login where available
3. Exchange of Public PGP keys where required to facilitate encryption for the Integration.
4. Legacy database backups, CSV files, scanned documents along with any other legacy data distribution shall be encrypted using EH's PGP Public Key and transferred to the SFTP hosted by EH.
5. All data provided to Enterprise Health shall be loaded as-is in EH
6. Legacy database backups provided shall be compatible with MSSQL database restore functionality.
7. Legacy documents shall be individually decrypted, though their distribution shall be accomplished  in a zipped, encrypted format using MIE's GPG public encryption key.
8. CSV Processing.
    * EH consulting to help client understand all data elements to include for each type of API.
    * Client will create CSV files conforming as much as possible to EH APIs Specification and deliver them to the SFTP site setup by EH.
    * EH will apply additional transformation and logic to the inbound data to conform to EH APIs Specification processing logic
    * Training on each module to facilitate validation
    * EH will load all data and provide preliminary verification results.
    * EH will remediate any issues with the loading of data found during validation.
    * Client will remediate issues related to mapping, data selection, data transformation, CSV creation, or other data integrity or mapping issues.
    * One to two cycles of data migration/validation and one dress rehearsal (if time allows) will be completed prior to final cutover, although fewer cycles may be required if validation and signoff are completed ahead of the plan in Migration Strategies.
    * All testing will be performed in non-production environments cloned from the EH system being used as the configuration environment.

## Out of Scope

The following kinds of work are excluded project deliverables.

1. Data migration of any kinds of data not specified in the Project Deliverable section of  the client-specific Legacy Data Migration Requirements Document.
2. Any items specifically called out as Out Of Scope in the client-specific Legacy Data Migration Requirements Document.
3. Customization to EH API's to allow for any data that is considered non-standard based on past customer migrations unless Custom R&D is specified as in the following cases:
    * observations in flowsheets
    * medications
    * restricting EAP encounters, documents
    * data scrubbing
4. Data scrubbing (cleaning) to fix data formatting issues or inconsistencies between data extractions between cycles.
    * Correcting faulty data stored in legacy tables or CSV files. For example, incorrect values from prior data migrations or improper data entry.
    * Correcting or removing duplicated data contained in legacy applications. For example, finding duplicate immunizations or diagnoses/conditions in the legacy application.
5. Data transformations using spreadsheets to map values in the legacy system to different values provided in a spreadsheet (unless otherwise described for CVX codes for immunizations, encounter orders or panel memberships for health surveillance, or other explicit callouts on the Legacy Data Migration Requirements Document).
6. Users- No discrete users or providers will be mapped for any module. Instead, a generic user of "Legacy Data" will be used for the authoring user of all discrete data.
7. Additional Data Migration Cycles.

## Assumptions

1. Client shall complete validation to ensure the Integration meets requirements and specifications and shall provide written notification of acceptance of work. Any change requests provided after acceptance shall be subject to change request procedures and related charges.
2. Data fields contain the correct information and are correctly mapped.
3. Client will obtain security approval to transmit data in a timely manner to allow project to begin on schedule.
4. Client is responsible for obtaining and delivering database backups or CSV files for data migration to the EH-hosted SFTP, whichever is specified by the scope document (typically stated in the Overview portion of the Data Migration Scope Document). If EH is required to download data from an external source, additional fees will be charged for the time required to do so using standard billable rates.
5. Client shall adhere to mutually agreed timelines for the project.
