---
id: '1IDuyacdPCdTfT5pYmQkyf1icZqYTFngDpJzykC1evvg'
title: 'Data Migration Questionnaire'
date: '2020-03-17T00:54:23.101Z'
version: 53
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1IDuyacdPCdTfT5pYmQkyf1icZqYTFngDpJzykC1evvg'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
markup: 'pandoc'
---
## Abstract

This document is intended for those requesting data migration (DM) into  {{% system-name %}}  ( {{% sys-name %}} ), and should be used for surveying any and all requirements for that purpose. Data migration is defined as the movement, or transference of data from one system to another. For example, the moving of data from a legacy application (i.e. Medgate, UL/OHM, etc.) or spreadsheet, to a solution such as {{% system-name %}} , is understood as data migration.

## I. Data Sources and Storage

This section is intended to provide an overview of the current state of data, its storage, and potential restrictions.

1. Where do you store legacy data that is being considered for data migration?
    a.  List and describe the purpose of all legacy EMRs or commercial applications in use.
    b.  List and describe the purpose of all custom applications storing data that may need migrated to {{% sys-name %}} .
    c.  List and describe the purpose of all spreadsheets storing data intended for migration.
    d.  Are there any data shares of files outside of the legacy applications or data sources that should be considered? For example, scanned images, results, opinion letters, and so on may be stored outside of an application but requested for migration.
2. For each of the legacy data sources, are the data or applications hosted locally or off-site? Specifically, do you perform your own data backups and extractions, or will a request need to be made from a third party that supports the application or data storage?
3. If the legacy data above is in a database, what database version is used for each data application or source (e.g. Oracle 12c, MSSQL 13.0, MySQL 5.7.17, etc.)?
4. How will the data be delivered? For example, previous clients have performed their own backup or data extraction, and via SFTP, the data is then uploaded to our secure data center or, if applicable, to standalone hardware provided by {{% sys-name %}} .
5. Are there any restrictive permissions with sharing your data? Most clients provide full database backups of the legacy system(s) requested for migration; however, we have had instances where the client was severely restricted in what could be released. Please verify what data restrictions, if any, may be present for each data source or application, prior to the data migration kickoff call.

## II. Who's Who?

We'd like to know everyone that has a voice in this project. Everyone with decision-making ability needs to be trained in our product. This will help them in decision-making when we have questions about what data is required and how it will be migrated.

1. Identify key stakeholders in the data migration project and describe their role(s) in the project.
2. Identify any relevant Subject Matter Experts (SMEs) and/or any key personnel and their titles/roles, if not already listed as a key stakeholder. Examples include:
    a.  Medical Director
    b.  Clinical SMEs
    c.  Report Writers (for each data source)
    d.  Interface Engineers (for each data source)
    e.  Any other SMEs requiring engagement for non-clinical workflows or data migrations
3. Please provide an organizational chart, if possible. This allows for a better understanding of the parties involved, while reducing planning time and determining resource availability.
4. Identify the individuals responsible for data validation.
    a.  Is there a user-acceptance process?
5. Identify the SME for each data source, or the individual(s) best suited to address questions regarding the location and function of specific records or fields during the data migration.
    a.  What is their availability for potential questions or concerns?

## III. Client & Workflow-Specific Requirements

1. {{% system-name %}} typically encounters the following common data migrations from legacy data source(s). Which of the following data will your migration require? Also briefly describe any relevant reports for the legacy data, including the frequency of use and whether or not you analyze trends in historical data. When considering reports, please consider those used by not only clinical teams, but also caseworkers, medical directors, executives, and anyone else who may be accessing this data.

<table>
<tr>
<td>DATA TYPES</td>
<td>REQUIRED (Y/N)</td>
<td>METHOD (DISCRETE/SUMMARY/BOTH)</td>
<td>RELATED REPORTS</td>
<td>NOTES OR COMMENTS</td>
</tr>
<tr>
<td>Employee Demographics</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Users/Providers</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Service Locations</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Case Management (wellness visits or injury- and illness-related cases)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Health Surveillance (membership and due dates)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Audiometric Testing</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Pulmonary Function Testing</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Vitals</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Lab Results</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Respirator Fit Testing</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Scanned images or flat files (e.g. ECGs, Word, Excel, or PDF documents), scanned charts, or employee photos</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Questionnaires</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Immunizations</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Medications</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Allergies</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Absence Management (Work Restrictions & Accommodations)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Diagnoses/ Conditions</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Appointments</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Medical Suitability for Expatriate Assignment evaluations</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

2. To ensure a full scope of the project is at hand, are there any additional migrations needing considered?
3. Some followup questions regarding the above items:
    * If you track cases, such as injuries, illnesses, or visits, and discrete data is intended to be moved, is there an established method for differentiating open and closed cases? For example, some workflows dictate that data is not entered into the system until a resolution is determined; whereas some workflows will begin a case as soon as the employee walks into a clinic.
    * If you track Health Surveillance (HS) membership and due dates, please list and briefly discuss the HS programs you track.
    * If you track HS membership and due dates, what determines the next due date? For example, previous clients have chosen a medical anniversary date corresponding to the employee's date of birth, date of hire, Cost Center, or Organizational Unit. Most clients, however, use the last test date, and then schedule the next due date at the time of the last exam.
4. Is there a need to store sensitive data, and if so, are there any controls that need considered in its migration? Examples may be, but are not limited to: Employee Assistance Program (EAP) information, Fit For Duty evaluations, Psychological notes, or data related to highly placed executives/officials.
    * With regard to sensitive information, is there a need for relationship mapping, or security rules, intended to limit access to specific data?
5. Identify and describe any custom reports or tools used to extract data for workflows.
6. What interfaces (electronic or manual) interact with your legacy data source(s)? Are they inbound, outbound, or bidirectional? Briefly describe each interface. If there are any forms or requirements associated with these interfaces, please include examples.
7. Will there be a Human Resources (HR) interface? If so, will there be any demographic information that will be required beyond what comes over the HR interface? Please consider dependents, applicants, contractors, and other non-employees that may be seen in a clinic, but not included on the HR feed.
    * If the answer is Yes above, please consider the following questions around your HR Interface:
        * What is your source system and version number?
        * Do you host your HR application?
        * Will you be providing the periodic data extraction? Or will there be a 3rd party?
8. Data Format: CSV
    * Confirm delimiter (comma, tab, and vertical bar are most common). Choose something not present within any of the data fields for the HR data file.
    * What population will be included in each file? Everyone or only people who have had demographic updates since the last extraction (deltas)?
    * Frequency of the data file: daily, weekly, etc.
9. Standard connectivity for HR interfaces include MIE hosting FTPS (preferred) or SFTP.
    * What IP Address or Range(s) will be used to connect to MIE's interface server to deliver the data file?
10. Please discuss any items from the Workflow Considerations section of the informational document provided with this questionnaire.
    * Confirm that the Employee ID passed as the first Medical Record number is 100% populated, never changes, and is never reused.
    * Termination procedure
    * Applicant procedure
11. File name convention
    * <client handle>_<hr system>_<system type>_YYYYMMDDHHMMSS.csv
    * EG: eh_workday_dev_20170628095942.csv or eh_sap_prod_20170420000000.csv
12. Are there any workflows that may be unique to your situation? Or do you have special input screens to facilitate a workflow in your legacy data systems?
13. Will different employee/patient populations need to be restricted from certain clinical personnel? For example, would you want to restrict clinicians to work only with employees and personnel by country, person type (i.e. employee, applicant, contractor, etc), or employer organization (e.g. company, subsidiary, contractor, agency, prime, etc)?

## IV. Next Steps

1. What documentation exists for the legacy data sources? Please provide any documentation available (e.g. diagrams, schemas, videos, tutorials, screenshots, specifications, third-party interface requirements, etc.).
2. If Crystal Reports or similar database connections are used to extract or mine data, or the database has a custom front-end (e.g. MSSQL or Access often have these), please provide the queries for common reports and key screens on the front end. These queries are used to identify key discrete data in your systems and understand workflow.
3. Can you supply de-identified data of 15-20 complex or "interesting" patient/employee charts/histories/data, which can provide a good representation of all the different types of data intended for migration? This is crucial for understanding data early on as well as for validating data during the migration.
4. Though this will be detailed outside of this questionnaire, it is important to understand that workflow discovery is critical to configuration <em>and</em> data migration. Please provide any available workflow diagrams or documentation, to allow for immediate review and preparation. Be sure to consider the workflows of all users of the system including clinicians, caseworkers, report writers, directors, and executives.
5. What details/criteria may be needed to configure the employer organizations (e.g., companies, subsidiaries, contractors, agencies, primes, etc)?
6. Please discuss, generally, not only what data will be extracted from your legacy source(s), but how much? For example, consider data retention rules around retirees, applicants who never became employees, test charts, etc., which may be unnecessary data to migrate.
