---
id: '1MosXCU17hw2eoNS708Ma5_Jj1tNJsfKnSX-OHUG9mIQ'
title: 'Executive Dashboard Report'
date: '2023-03-01T19:25:28.680Z'
version: 71
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1MosXCU17hw2eoNS708Ma5_Jj1tNJsfKnSX-OHUG9mIQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
**Executive Dashboard Report**

The Executive Dashboard is a one screen summary intended to be used by client executives as a high level overview of clinic and employee outcomes.  The report is divided into multiple sections: Clinic Visit Activity, Visit Types, Top 10 Services/Tests Provided, Work Related Injury or Illness Cases/Incidents, Health Surveillance, Disability/Case Management, and Portal Activity.

The top of the dashboard contains a search engine that can limit information that displays in the portlets based on time frame, location (PO) and Employer Organization (EO).

![](../executive-dashboard-report.assets/22a841ee9c43ce76d92642fa09ea0073.png)

# Clinic Visit Activity

The Clinic Visit Activity section provides analytics on appointments and visits. If a date range is used, it will look at the date on the appointment and/or checkin. If a location is used in the search filter, it coincides with the appointment location, except for walk-ins which will use encounter location because there is not typically an appointment used for walk-ins. If the Employer Organization search filter is used, it looks at the Employer relationship in the chart relationships.

**Scheduled**: Count of any checked-in encounter appointments linked to a patient chart. Counts do not include holiday blocking, meeting blocks, or charts marked as excluded from quality care.

**Rescheduled**: Count of non-cancelled appointments that have a revision history greater than zero and the revision is for a different date, time, provider, or location than revision zero.

**Walk-Ins**: Count of charts that were checked-in, that do not have an appointment in chart with same date as being checked-in, as well as a closed/archived (non-deleted) encounter visit type of: ACE, BHSVISIT, BRIEFVISIT, DISCHARGE, NEWDOT, DSCBAT, BIOMETRIC, OBFLOW, PEDS2, PREPLACE, RESULTS, TRAVEL, VISIT. To count, the chart must have been checked-in, then a manually generated encounter (of any listed here) that is closed and archived for the same date.

**Total Appointments**: Grand total count of Scheduled, Rescheduled and Walk-Ins counts.

**Average Visit Time (min)**: Average time between check-in and check-out.

**Wait Time**: Average Waiting Room station time.

**% Occ Health**: Percentage of scheduled occupational health related appointment types. Occ health related visits are defined as Appointment type of BASELINE, OHN, OHFU, OHI, DS, BBI, DOT, NOISE, FIT, RESPMAB, RTW, TB, TRAVEL, BBPE, ANIMAL, TBMONITOR, RESPFIT, CRIM1811, COVID, MINIRPP.

![](../executive-dashboard-report.assets/71d704c5ac133f104dcc82432af5d086.png)

# Visit Types

Visit Types section will display the count of specific stored encounter documents (identified by doc.types) that are created by/linked to its closed/archived encounters according to date of service found within the search criteria. Deleted encounters, deleted encounter documents, and charts marked as excluded from quality care are not included in the counts.

Search filtering can be done by Location, being the selected PO location of a performing provider on an encounter document. Additional search filtering can be done by Employer Organization, being the employer relationship a patient/employee chart has within its demographic relationships.

**Surveillance** count is count of encounter document types: Surveillance Visit (SURV),Health Surveillance Exam (HSEXAM), Surveillance Testing (HSTEST), DOT New Driver Fitness Determination (NEWDFD)

**Workers' Comp** is count of encounter document types: Work Related Visit (WREXAM), Occ Health - Initial Exam (OHIE), Occ Health - Follow Up Exam (OHFU), Occ Health - Nurse Exam (OCCVISNURS)

**PrePlacement** is count of encounter document types: Pre-Employment Exam (PEP)

**Other** is count of encounter document types: Injection Only Visit (INJV), Brief Note Visit (BRIEFNOTE), Drug & Alcohol Visit (DA), Wellness Visit (WELLNESS), Travel Consult (TRAVEL), Non-Occ Health - Initial Exam (NOHI), Non-Occ Health - Follow Up Exam (NOHFU), Results (RESULTS), Return to Work Visit (RTW), Visit (VISIT)

![](../executive-dashboard-report.assets/17f721b7e76c73aec5e792436f5a3d92.png)

# Top 10 Services/Tests Provided

Top 10 Services/Tests Provided section will display the count of encounter order items in completed status, according to volume completed. Deleted encounter order items and patient/employee charts marked as excluded from quality care (with completed encounter order items) are not included in the counts.

Search filtering can be done by Location, being the selected PO location of a performing provider on an encounter document. Additional search filtering can be done by Employer Organization, being the employer relationship a patient/employee chart has within its demographic relationship

The highest volume completed encounter order will appear at the top, descending to the 10th lowest volume Test/Service marked as completed within an encounter workflow. The Test/Service needs to be in a **completed** status (and not deleted), using an encounter workflow, to be counted.

![](../executive-dashboard-report.assets/34bc7c07a9db50db4d9b304b4c012531.png)

# Work Related Injury or Illness Cases/Incidents

The Work Related Injury or Illness Cases/Incidents section provides analytics on work related cases/incidents. If a date range is used, it will look at the Case Date. Location search filter is not applicable to this section. If the Employer Organization search filter is used, it looks at the Employer relationship in the chart relationships. Deleted cases/incidents and charts marked as Exclude from Quality Care are ommited from the counts.

**Lost Time Cases**

* Numerator: Displays total number of non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined, and there is a linked restriction of Lost Time.
* Denominator: Displays total number of non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined.

**Cases w/ Work Restrictions**

* Numerator: Displays total number or non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined, and there is any linked restriction type other than Lost Time.
* Denominator: Displays total number of non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined.

**OSHA Recordables**

OSHA defines a recordable injury or illness as any work-related fatality or any work-related injury or illness that results in loss of consciousness, days away from work, restricted work, transfer to another job, or requires medical treatment beyond first aid.

* Numerator: Displays total number of non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined, and the Date Determined Recordable field is populated with a date (Meaning: Recordable is Yes).
* Denominator: Displays total number of non-deleted open and closed cases/incidents, within the date range, where Work Related (on the case/incident) is Yes or Undetermined.

**Injury Sources**

Displays the top 5 types of Nature of Injury/Illness types used in cases/incidents (within the date range selected) with counts.

![](../executive-dashboard-report.assets/3e0b8691bf7765465f016b878b94e6ae.png)

# Health Surveillance

Health Surveillance section will display the current as-of-today counts and percentages of members currently in Health Surveillance Panel Membership (record status=current) in comparison to its Due Date (patient panel status). The Health Surveillance section count and percentages are as of current date. The date range search filter at the top is not applicable to this section nor is the Location search filter applicable to this section. This is a snapshot of Health Surveillance compliance as of today for current health surveillance panel members.

The Employer Organization search filter can be applied to this section and result in current health surveillance panel members who have that Employer Organization, being the employer relationship a patient/employee chart has within its demographic relationships.

**Within Due Date**: looks at current members of Health Surveillance Panel Membership (record status=current) in comparison to its respective health surveillance panel due date (patient panel status). **Numerator** is a unique total count of current health surveillance panel memberships that are not overdue according to its respective due date (patient panel status is not overdue). **Denominator** is a unique grand total count of all current health surveillance panel memberships (whether overdue or not). **In Compliance percentage**: is the overall percentage of all current health surveillance memberships that are compliant (within its due date where patient panel status is not overdue) in comparison to the grand total count of all current health surveillance memberships (whether overdue or not).

**Overdue**: looks at current members of Health Surveillance Panel Membership (record status=current) in comparison to its respective health surveillance panel due date (patient panel status). **Numerator** is a unique total count of current health surveillance panel memberships that are overdue according to its respective due date (patient panel status is overdue). **Denominator** is a unique grand total count of all current health surveillance panel memberships (whether overdue or not). **Out of Compliance percentage**: is the overall percentage of all current health surveillance memberships that are overdue (within its due date where patient panel status is overdue) in comparison to the grand total count of all current health surveillance memberships (whether overdue or not).

**Bar Graph**: The bar graph on the right side of this section shows the top 5 surveillance panels according to current membership count. The top 5 surveillance panel descriptions (names) are listed in order of how many current members there are in the panels. The health surveillance panel with the most current members is listed first, the second most current membered health surveillance panel is listed next, and so on, but will only display the top 5 current membered health surveillance panels in the system as of today. **Green bar**: The green bar graph is the actual number (of that specific top 5 health surveillance panel's current members) who are not overdue (according to patient panel status) as of today. **Red bar**: The red bar graph is the actual number (of that specific top 5 health surveillance panel's current members) who are overdue (according to patient panel status) as of today.

![](../executive-dashboard-report.assets/53b11386dc562df362e52efe1d64b026.png)

# Disability/Case Management

**Lost Time Cases - YTD** Sums the year to date total of open & closed case management encounters with a linked case where a "First Day Missed Work" observation has been indicated.

**Cases w/ Work Restrictions - YTD** Sums the year to date total of open & closed case management encounters with linked restrictions and where a "First Day Missed Work" observation has been indicated.

**Total Numbers Lost Days Before RTW - YTD** Sums the year to date totals for the "Actual Days Away" observation as indicated in open and closed case management encounters.

**Days Saved - YTD** Sums the year to date totals for the "Days Saved" observation as indicated in open and closed case management encounters.

![](../executive-dashboard-report.assets/22749d9283201394c87c0b03a15c50f3.png)

# Portal Activity

Portal Activity section will display the count of specific activity according to date of service found within the search criteria. Search filtering can be done by Location, being the selected PO location of a performing provider on a scheduled appointment. Additional search filtering can be done by Employer Organization, being the employer relationship a patient/employee chart has within its demographic relationships.

**Appointments Made**: Any appointments (on-demand or waitlist appointments) scheduled by the portal user from within the portal.

**Questionnaires Completed**: Any questionnaire order that has been submitted (status of completed and completed by is the portal user) by the portal user from within the portal. Count does not include Portal Consent, Request an Accommodation, Request an Appointment, Request a Leave of Absence, My Medical Information, Ask a Clinical Question.

**Number of Employee Portal Visits**: Any unique one-time logged in portal user visit to the Employee Portal's home page.

**Number of Manager Portal Visits**: Any unique one-time logged in portal user visit to the Manager Portal's home page.

![](../executive-dashboard-report.assets/dd8cbb3907a579ab16dee3dec14ddcf9.png)
