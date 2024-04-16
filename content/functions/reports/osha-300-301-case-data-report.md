---
id: '1E7Lf_NoNa1IhlPGO1jWwqUfYDiXE3IRzLrGZUa1IIFg'
title: 'OSHA 300/301 Case Data Report'
date: '2024-03-15T16:37:15.955Z'
version: 310
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://www.osha.gov/injuryreporting'
  - 'https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.46#:~:text=The%20definitions%20contained%20in%20section,or%20industrial%20operations%20are%20performed.'
  - 'http://osha.gov/injuryreporting'
source: 'https://drive.google.com/open?id=1E7Lf_NoNa1IhlPGO1jWwqUfYDiXE3IRzLrGZUa1IIFg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The OSHA 300/301 Case Data report is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../osha-300-301-case-data-report.assets/e50f2058d66f9a203696ab65cc800db9.png)

The Department of Labor (DOL) Occupational Safety and Health Administration (OSHA) Injury Tracking Application (ITA) provides a system to securely access and submit information related to workplace injuries. The application is being enhanced to begin collecting details on individual injury and illness cases. Our OSHA 300/301 Case Data Report is a method to produce a large data output to bulk upload larger data sets using API endpoints. This report provides the fields that make up the body of most of the Request API calls involving the Case Data form.

This OSHA 300/301 Case Data Report will pull OSHA recordable cases/incidents for the PRIOR year of this current logged in session. Meaning, it will look for any OSHA recordable cases/incidents that have an onsite injury/illness date of the *PRIOR YEAR* to today's logged in date, will result here with related case/incident details.  Charts marked as 'Exclude from Quality Care' are omitted from report output. This report is easily downloadable into a CSV format to help with self electronic reporting needs.

More information from OSHA is at https://www.osha.gov/injuryreporting

![](../osha-300-301-case-data-report.assets/1287e1fd34e8705bec0fe3f21c2d9d5b.png)

### OSHA 300/301 Case Data Report Criteria

The OSHA 300/301 Case Data report has the following logic criteria/logic built in order to be listed on the output of this report:

* Onsite Injury/Illness locations to be configured as EO charts must have:
    * the EO onsite injury/illness work location/site chart must be configured as an onsite injury location within the Locations Hierarchy system editor
        * <strong>and</strong> its Chart ID entry (in Locations Hierarchy) must be linked to its own EO or PO chart
        * <strong>and</strong> its Status entry (in Locations Hierarchy) must active or inactive (deleted locations hierarchy locations are omitted from the system, the case/incident and from the OSHA 300/301 Case Data Report)
* Your case/incident workflows must utilize the Case encounter section on specific encounter types deemed appropriate for your business
* The case/incident would be documented as <em>OSHA Recordable</em> to appear on this report (date determined recordable field)
* The OSHA recordable case/incident <em>Injury or Illness onset date</em> field must have any date in the <em>year prior</em> to today's logged in date when generating this OSHA 300/301 Case Data report
* The OSHA recordable case/incident must have been documented as an <em>onsite location</em> (and the onsite location is configured as stated in first bullet above)
* Your case/incident workflows must utilize the Restrictions and Accommodation sections on specific encounter types when deemed appropriate

{{% tip %}}
Screenshot examples that describe the above criteria:



Locations Hierarchy example:

![](../osha-300-301-case-data-report.assets/919cd464ac60bc9a4dfb8c38a16382e5.png)



Case encounter section for an OSHA recordable injury/illness example:

![](../osha-300-301-case-data-report.assets/233027c364977def799d5a760a365b9c.png)
{{% /tip %}}

### OSHA 300/301 Case Data Report Datavis Columns

The OSHA 300/301 Case Data report generates a list of results upon navigating to that report.  As stated above, the {{% system-name %}} OSHA 300/301 Case Data report displays OSHA recordable cases/incidents for the *PRIOR year* of this current logged in session. Meaning, it will look for and display information and counts that involve OSHA recordable cases/incidents that have an injury/illness onset date of the *prior* year to today's logged in date, will result here and be easily downloadable into a CSV file that can be used for your electronic reporting submission needs.

A complete report requirements description and columns that the report output is to gather and produce is found in the OSHA Injury Tracking Application API Document found at https://www.osha.gov/injuryreporting

The below list of columns from the OSHA 300/301 Case Data report, will describe where the data comes from within {{% system-name %}} to populate our OSHA 300/301 Case Data report, which can then be used to download and submit to help provide a method for injury and illness data submissions required by OSHA.

* <strong>ESTABLISHMENT NAME</strong> - pulls the <em>Onsite Location</em> chart's name found on the EO chart of that onside work location/site chart with any acronym in parenthesis found in its Overview EO chart tab.  This report <strong>does</strong> respect the Locations Hierarchy <strong><em>Parent</em></strong>' for this column.  Meaning, if an onsite injury/illness work location/site EO chart has a Parent (in the Locations Hierarchy) mapped to another onsite injury/illness work location/site EO chart, then the Parent's name will pull here as Establishment Name.  OSHA defines an Establishment [<strong>HERE</strong>](https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.46#:~:text=The%20definitions%20contained%20in%20section,or%20industrial%20operations%20are%20performed.)<strong>.</strong>
* <strong>YEAR OF FILING</strong> - will always be the prior 4 digit year of today's logged in session when generating this report
* <strong>CASE NUMBER</strong> - This displays the unique assigned number identifier of the OSHA recordable case/incident that the system assigns.  Hence, this is Column A of the OSHA 300 form.
* <strong>JOB TITLE</strong> - This pulls the data that is stored in the Job Code Description field of the employee's chart demographics. Hence, this is Column C of the OSHA 300 form.
* <strong>DATE OF INCIDENT</strong> - This pulls the date from the <em>Date and time of injury or onset of illness</em> field of the OSHA recordable case/incident.  Hence, this is Column D of the OSHA 300 form.
* <strong>INCIDENT LOCATION</strong> - This pulls the <em>Where the event occurred field (e.g. Loading dock north end)</em> field of the OSHA recordable case/incident when an onsite location choice is selected.  Hence, this is Column E of the OSHA 300 form.
* <strong>INCIDENT DESCRIPTION</strong> - This pulls the <em>Nature of Injury or Illness / Body Parts</em> section of the OSHA recordable case/incident.  Hence, this is Column F of the OSHA 300 form.
* <strong>INCIDENT OUTCOME</strong> - This displays a number (as the value) signifying the highest (most serious) outcome of the OSHA recordable case/incident.  Hence, this is Columns G-J of the OSHA 300 form.
    * Death = 1 value means the case/incident has the field <em>Employee died</em> checkmarked
    * Days Away from Work = 2 value means the case/incident has Lost Time accommodations linked to it
    * Job Transfer = 3 value means the case/incident has restrictions linked to it
    * Other = 4 value means the case/incident didn't fit any of the other criteria of Death, Lost Time, or Restrictions
* <strong>DAYS AWAY FROM WORK</strong> - the total number of Lost Time days (days the injured or ill worker was away from work) will be calculated here and displays a total number.  Hence, this is Column K of the OSHA 300 form.
    * If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
    * The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day.  Day of incident/case does not count as a lost time day, if the lost time started that same day.
    * Is to match same count this case calculates from the OSHA 300A or OSHA 300 Log also
* <strong>DAYS JOB TRANSFER OR RESTRICTION</strong> - the total number of Restricted days (days the injured or ill worker was on job transfer or restriction) will be calculated here and displays a total number:  Hence, this is Column L of the OSHA 300 form.
    * Overlapping restriction days are only counted once.
    * The calculation in this column does not include future days.
    * The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column.  A full day is counted as a start day and the end day being a day apart.
    * Is to match same count this case calculates from the OSHA 300A or OSHA 300 Log also
* <strong>TYPE OF INCIDENT</strong> - If the case/incident is work related or undetermined, this displays the injury or illness category as a number (as the value) signifying the Injury/Illness type.  Hence, this is Column M1-M6 of the OSHA 300 form.
    * Injury = 1 value
    * Skin Disorder = 2 value
    * Respiratory Condition = 3 value
    * Poisoning = 4 value
    * Hearing Loss = 5 value
    * All Other Illnesses = 6 value
* <strong>DATE OF BIRTH</strong> - This pulls the data that is stored in the Birth Date field of the employee's chart demographics.  Hence, this is Question 3 on the OSHA 301 form.
* <strong>DATE OF HIRE</strong> - This pulls the data that is stored in the <em>Hire Date</em> field of the employee's chart demographics.  Hence, this is Question 4 on the OSHA 301 form.
* <strong>GENDER</strong> - This pulls the data that is stored in <em>Sex</em> field of the employee's chart demographics.  Hence, this is Question 5 on the OSHA 301 form.  NOTE: Currently OSHA will not reject submissions if this is left blank. This is not a required column for their Injury Reporting API use.
* <strong>TREATMENT FACILITY TYPE</strong> - If the case/incident <em>Was treatment provided by</em> field was selected, this displays a number (as the value) signifying the type of facility where treatment was provided.  Hence, Question 8 on the OSHA 301 form.
    * If was treated in the Hospital/ER/Urgent care facility = 1 value
    * If was treated anywhere besides a Hospital/ER/Urgent care = 0 value
* <strong>TREATMENT IN-PATIENT</strong> - If the case/incident has treatment provided by a Hospital/ER/Urgent care facility signified, then the <em>Hospitalized overnight as an in-patient</em> field will display a value based on the selection for that field.  Hence, Question 9 on the OSHA 301 form.
    * Hospitalized overnight as an in-patient if Yes = 1 value
    * Hospitalized overnight as an in-patient if No = 0 value
* <strong>TIME STARTED WORK</strong> - This pulls the <em>Time employee began work on day of injury/illness</em> field of the OSHA recordable case/incident.  NOTE: Currently, OSHA will not reject submissions if this is left blank. This is not a required column for their Injury Reporting API use if you don't know when someone began work.  Hence, this is Question 12 on the OSHA 301 form.
* <strong>TIME OF INCIDENT</strong> - This pulls the time from the <em>Date and time of injury or onset of illness</em> field of the OSHA recordable case/incident (or no time if it's unknown). Hence, this is Question 13 on the OSHA 301 form.
* <strong>TIME UNKNOWN</strong> - If the time from the <em>Date and time of injury or onset of illness</em> field of the OSHA recordable case/incident is blank or indicated with a specific time, then this field will display a value based on the entry.  Hence, Question 13 on the OSHA 301 form.
    * Blank/no time documented = 1 value
    * Specific Time of incident is documented = 0 value
* <strong>NARRATIVE BEFORE INCIDENT</strong> - This pulls the <em>What as the employee doing just before the incident occurred</em> narrative field of the OSHA recordable case/incident.  Per OSHA: Do not include any personally identifiable information (PII) (e.g., no names, phone numbers, or SSNs) in this field.  Hence, this is Question 14 on the OSHA 301 form.
* <strong>NARRATIVE WHAT HAPPENED</strong> - This pulls the <em>What happened? Tell us how the injury occurred</em> narrative field of the OSHA recordable case/incident.  Per OSHA: Do not include any personally identifiable information (PII) (e.g., no names, phone numbers, or SSNs) in this field.  Hence, this is Question 15 on the OSHA 301 form.
* <strong>NARRATIVE INJURY ILLNESS</strong> - This pulls the first <em>Nature of Injury or Illness / Body Parts</em> section line item entry of the OSHA recordable case/incident.  Hence, this is Question 16 on the OSHA 301 form.
* <strong>NARRATIVE OBJECT SUBSTANCE</strong> - This pulls the <em>What object or substance directly harmed the employee</em> narrative field of the OSHA recordable case/incident.  Per OSHA: Do not include any personally identifiable information (PII) (e.g., no names, phone numbers, or SSNs) in this field.  Hence, this is Question 17 on the OSHA 301 form.
* <strong>DATE OF DEATH -</strong> This displays the date of death field of the OSHA recordable case/incident if there is one indicated if the field <em>Employee died</em> is checkmarked

{{% note %}}
This report **does** respect the Locations Hierarchy **_Parent_** with the data outputs.  Meaning, if an onsite injury/illness work location/site EO chart has a Parent (in the Locations Hierarchy) of another onsite injury/illness work location/site EO chart, then all its child sites plus any recordable injury/illnesses at the parent site will be counted/displayed on the Parent's establishment line of this report.
{{% /note %}}

### Download OSHA 300/301 Case Data report to a CSV format

The OSHA 300/301 Case Data report is easily downloadable into a CSV format.  Simply click the *Show CSV* button to generate the report's output into a CSV downloadable file.  Store to your folder location of choice.

![](../osha-300-301-case-data-report.assets/36af6824cd0950b159566b1702844345.png)

The CSV file will be in the specific column order with column titles labeled as the OSHA injury and illness data submission requires.

![](../osha-300-301-case-data-report.assets/20a6f0ff40a7ee92ff3d2cf39ff67c5b.png)

### Review OSHA 300/301 Case Data report contents in CSV

You will need to review the entire CSV file for content.  [OSHA.gov/injuryreporting](http://osha.gov/injuryreporting) site has a checklist where they want you to not include special characters for certain columns, and also review to exclude any PII for certain columns, before uploading the CSV file to their API.   It is up to the establishment/individuals at the company to review the CSV file and replace or change any content needed according to their business needs, prior to using the file to upload into the OSHA API system.  {{% system-name %}} will not omit or replace data from the CSV output.  {{% system-name %}} will output the CSV with the contents as exactly how it was captured/documented in the system and case/incident.  Your business can use the ‘find and replace' tool in the CSV file and change/replace (according to business needs) any found PII or any found special characters.

![](../osha-300-301-case-data-report.assets/97f5c784ec4e239dc5df76ca9bae7d63.png)
