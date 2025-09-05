---
id: '1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8'
title: 'Data Migration Overview'
date: '2020-03-17T16:06:56.394Z'
version: 55
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'data-migration-file-format-standard.md'
  - 'http://www.mysql.com/products/workbench/migrate/'
  - 'https://csvkit.readthedocs.io/'
  - 'https://docs.google.com/a/mieweb.com/document/d/1Gi7Fv7P9de_CoRfDoZT85hrg89PAk65zQKGyBjS-DLQ/edit?usp=sharing'
  - 'https://confluence.mieweb.com/display/DOCS10/Medgate+Conversion+Queries'
  - 'data-import-master-list.md'
  - 'https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion'
  - 'mie-file-import.md'
source: 'https://drive.google.com/open?id=1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
Data migration is the process of transferring data between different storage types, formats, or systems, and is an important consideration for clients replacing an existing EHR. At {{% system-name %}} , we have imported data from a number of different systems, including Medgate, OHM, Sentry, Flow Gemini, and many other custom databases and countless proprietary spreadsheets. All of these imports involve a similar process, as described in this document.

{{% note %}}
Although much of any system's data can be stored discretely in the {{% sys-name %}} solution, that process is often time consuming and costly. Clients should consider migrating only essential discrete historical data into the {{% sys-name %}} fields. Non-essential discrete data can often be stored more easily as documents for historical purposes.
{{% /note %}}

The client should weigh the cost of users or clinicians manually adding discrete values of the data after reviewing historical summary documents with the patient. The approach of converting discrete data into documents is more cost-effective for medications, injections, and other types of discrete data that may have limited quality and are routinely reviewed/entered in the course of patient visits.

### Process Stages

#### Data Acquisition and Analysis

The client must provide a backup or snapshot of their legacy database (DB). Including a mysqldump database backup is ideal. MS Access Database files, CSV, or other delimited text (UTF-8) backup files are also acceptable. Text files of legacy data must follow MIE's [data requirements](data-migration-file-format-standard.md) for formatting.

{{% note %}}
Data acquisition must be completed correctly and must be repeatable for "final dress rehearsal" testing and at go-live. Timing is critical for the go-live process, as we have found that both clients and {{% system-name %}} are typically trying to expedite the export, acquisition, conversion, and validation of the legacy data to determine a "go" or "no-go" for the conversion.
{{% /note %}}

{{% system-name %}} may optionally add the legacy DB tables to the client's  {{% sys-name %}} system DB as custom tables, which may be accessed and queried later by built-in reporting and querying capabilities in the system. This allows errors or omissions to be corrected even after go-live.

{{% sys-name %}} takes the table and column data provided by the backup or snapshot of the legacy DB and loads the schema into a data migration map in a spreadsheet. The data migration map documents all tables and columns from the DB along with usage statistics and (optionally) sample data from the backup for each column.

**Tools for Data Acquisition**

The following tools may be useful in exporting data to something we can consume.

* MySQL Workbench can export MSSQL databases to MySQL backup files: http://www.mysql.com/products/workbench/migrate/
* MSSQL Tools: Export to Access, and we'll run MDB Tools to load the Access backups to MySQL
* CSV KIT can also read DBs to create properly formatted CSV files: [https://csvkit.readthedocs.io](https://csvkit.readthedocs.io/)

See [this document](https://docs.google.com/a/mieweb.com/document/d/1Gi7Fv7P9de_CoRfDoZT85hrg89PAk65zQKGyBjS-DLQ/edit?usp=sharing) for notes on building Python RPMs and packages for csvkit, wc-map-database, and MIE File Import.

#### Migration Mapping

The Onboarding Coordinators and Electronic Data Interchange (EDI) team review the data migration map with the client's legacy DB subject matter experts (SMEs) to assist in the data mapping. It is imperative that the client understands the legacy DB and specifies which tables and columns should be extracted either as historical summary documents or discrete data where necessary.

For discrete data conversion requests that are not part of the standard migration,  {{% sys-name %}} references a library of migration code to search for existing modules and data previously encountered.

Discrete data that is not supported by the standard legacy data import tools require custom interfaces that are scoped separately from the standard legacy data conversion.

The contract or statement of work may also dictate what is or is not considered in scope for a data migration project. These issues are fleshed out during discovery.

#### Development, Testing, and Validation

Once the scope is understood, {{% sys-name %}} loads the legacy data into the client's development (dev) system or a separate sandbox for legacy data conversion testing. The EDI team uses the in-house library of migration code and/or the data migration map to pull data from the legacy tables into historical summary documents, encounters, and discrete data.

During this phase, rapid development and testing occurs in the following manner:

1. Screenshots from the legacy system are captured and deidentified to use for internal verification of migrated data for each migration module.
2. Modules are tested internally after they are converted using the standard legacy data conversion tools or custom interfaces as needed.
3. Modules are tested by the client in a testing sandbox or their dev system with migrated data.
4. Modules in the data migration map are verified as complete as they are approved by the client.
5. Modules that require bug fixes that are the responsibility of {{% sys-name %}} are fixed.
6. Modules that the client finds incomplete or were not mapped correctly during the data migration mapping phase are subject to the {{% sys-name %}} change control process.
7. Repeat these steps until all modules are verified by the client.

#### Final Dress Rehearsal

After the client has verified the migration modules, {{% sys-name %}} and the client complete a timed final dress rehearsal. The following process is completed for the timed dress rehearsal:

1. {{% sys-name %}} creates a clean configured environment where the data may be loaded for testing. Typically, this is a clone of the configured production system before go-live.
2. The client provides a new snapshot/backup of the data.
3. {{% sys-name %}} obtains the data.
4. {{% sys-name %}} optionally converts the data to the client's {{% sys-name %}} DB as custom tables in the newly created target environment.
5. {{% sys-name %}} performs the data migration along with any custom interfaces to convert the data to documents and discrete data. Each step is timed. A data migration checklist is used to document the steps and timing for all steps.
6. {{% sys-name %}} onboarding specialists perform internal verification as data is loaded in the system.
7. {{% sys-name %}} onboarding specialists perform any post-process configuration that is required after data is migrated. Again--all steps are documented on the data migration checklist.
8. The client validates that the data in the dev system or sandbox is correct. Validation is also timed and documented.
9. A "go" or "no-go" is provided by the client to {{% sys-name %}} to signal the end of timing.

If a "no-go" is provided, a discussion is scheduled to discuss the issues that prevented a successful conversion. Changes are made as needed, adhering to the change control process if applicable. The data is converted in the dev system or sandbox if possible or the system is cleaned and reloaded if necessary, and the client validates again.

#### Go-Live

The go-live procedure is similar to the dress rehearsal. The data migration checklist created during the dress rehearsal is used to migrate the data step-by-step. The following is a sample procedure for the go-live of a migrated system:

1. The client stops using their historical product and puts it in a read-only state. Depending on the size of the database and timing of the migration, this is often done on a Friday after the end of normal business hours while data is migrated over a weekend. If more time is needed to load the data and allow for validation, then the schedule is adjusted to allow for extra time. Note that while the historical product is in a read-only state and the {{% sys-name %}} system is not yet loaded with data, clinics will only be able to reference the legacy system. Any new data will have to be logged on paper charts and entered into the  {{% sys-name %}} system after go-live.
2. The client exports the data.
3. {{% sys-name %}} obtains the data via a secure connection established from the sample data that was provided.
4. {{% sys-name %}} converts the data if necessary and imports the data to the client's production DB.
5. {{% sys-name %}} disables all cron jobs (HR Feed Import, Health Surveillance Evaluations/Enrollments, etc.).
6. {{% sys-name %}} runs the migration into the client's dev or production system, following the data migration checklist.
7. {{% sys-name %}} onboarding specialists perform internal verification as data is loaded in the system.
8. {{% sys-name %}} onboarding specialists perform any post-process configuration that is required after data is migrated. Again--all steps are documented on the data migration checklist.
9. The client validates final production run on the following day(s) and signs off.
10. {{% sys-name %}} enables all cron jobs disabled before the import.
11. The client turns off their old system and goes live with the  {{% sys-name %}} system.

## Pre-developed Custom Modules from Specific Legacy Systems

### OHM

* appointments
* audio
* caseimage
* cholesterol
* cholinesterase
* docnote
* drug
* elog
* employeelosttime
* employeememo
* employeerestrictions
* fitness_center
* fittest
* glucose
* hepatitis
* immunization
* incidenteventsource
* incidentlogdemographics
* logdoc
* logevents
* mannote
* mapping_dept
* mapping_personnel
* medagy
* pft
* rabies
* rnnote
* treatplan
* tuber_lead
* tuber
* vitals
* xray

### Medgate

* audiometry (discrete data)
* caseclinichistory (summary documents linked to incidents)
* casemaster (summary documents plus discrete incidents)
* clinicaltest (summary documents)
* clinicvisit (discrete encounters)
* clinicvisitreferrals (summary documents with discrete orders)
* contraindications (discrete observations)
* employeedocuments (documents)
* employeeexposuregroup (summary documents)
* employeelosttime (discrete data)
* employeerestrictions (discrete data)
* immunizations (discrete vaccines, observations and orders for tests, plus summary documents)
* medications (summary documents)
* pft (discrete data)
* questionnaireresponses (summary documents plus discrete observations)
* respiratorfittesting (discrete data)
* visiontests (summary documents plus discrete observations and lab requests)

*Our experience with Medgate has been converting versions 6.0 SP4c - rev 79885 and 6.0 SP3a - rev 46384.*

See [Medgate Conversion Queries](https://confluence.mieweb.com/display/DOCS10/Medgate+Conversion+Queries) for example queries used.

### Flow Gemini

* Vision Health
* Biometrics
* Audio
* PFT
* Demographics
* ECG
* Xray
* Immunizations
* Past Work History
* Scheduling
* Questionnaire
* Blood Chemistry
* Hematology
* Micro Urinalysis
* Urinalysis
* Labs
* Absenteeism
* Ultrasound

### Related Pages

* [Data Import Master List](data-import-master-list.md)
* [Data Requirements](data-migration-file-format-standard.md)
* [WebChart Conversion](https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion)
* [WebChart Filesystem Import](mie-file-import.md)
* [Medgate Conversion Queries](https://confluence.mieweb.com/display/DOCS10/Medgate+Conversion+Queries)
