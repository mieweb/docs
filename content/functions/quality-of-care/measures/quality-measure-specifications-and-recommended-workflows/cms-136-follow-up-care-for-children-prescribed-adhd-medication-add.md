---
id: '1adBT1dRtmsoOGBoLGp9KkhbDRgQEbZWmbt-iFuo8Vhc'
title: 'CMS 136 - Follow-Up Care for Children Prescribed ADHD Medication (ADD)'
date: '2022-04-20T14:20:57.043Z'
version: 43
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms136v11'
source: 'https://drive.google.com/open?id=1adBT1dRtmsoOGBoLGp9KkhbDRgQEbZWmbt-iFuo8Vhc'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
## Overview

[CMS136v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v9&showresulttype=Measure) (2020)

[CMS136v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v10&showresulttype=Measure) (2021)

[CMS136v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS136v11&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS136v11</td>
<td>–</td>
<td>–</td>
<td>366</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of children 6-12 years of age and newly dispensed a medication for attention-deficit/hyperactivity disorder (ADHD) who had appropriate follow-up care. Two rates are reported.</td>
</tr>
<tr>
<td>Percentage of children who had one follow-up visit with a practitioner with prescribing authority during the 30-Day Initiation Phase.</td>
<td>Percentage of children who remained on ADHD medication for at least 210 days and who, in addition to the visit in the Initiation Phase, had at least two additional follow-up visits with a practitioner within 270 days (9 months) after the Initiation Phase ended.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Children 6-12 years of age who were dispensed an ADHD medication during the Intake Period and who had a visit during the measurement period.</td>
<td>Children 6-12 years of age who were dispensed an ADHD medication during the Intake Period and who remained on the medication for at least 210 days out of the 300 days following the IPSD, and who had a visit during the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Exclude patients diagnosed with narcolepsy at any point in their history or during the measurement period.</li><li>Exclude patients who had an acute inpatient stay with a principal diagnosis of mental health or substance abuse during the 30 days after the IPSD.</li><li>Exclude patients who were actively on an ADHD medication in the 120 days prior to the Index Prescription Start Date.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li></ul></td>
<td><ul><li>Exclude patients diagnosed with narcolepsy at any point in their history or during the measurement period.</li><li>Exclude patients who had an acute inpatient stay with a principal diagnosis of mental health or substance abuse during the 300 days after the IPSD.</li><li>Exclude patients who were actively on an ADHD medication in the 120 days prior to the Index Prescription Start Date.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who had at least one visit with a practitioner with prescribing authority within 30 days after the IPSD.</td>
<td>Patients who had at least one visit with a practitioner with prescribing authority during the Initiation Phase, and at least two follow-up visits during the Continuation and Maintenance Phase.</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>–</td>
</tr>
</table>

### Additional Information

<table>
<tr>
<td><strong>Measure Type</strong></td>
<td>Process measure</td>
</tr>
<tr>
<td><strong>Measure Scoring</strong></td>
<td>Proportion measure</td>
</tr>
<tr>
<td><strong>Granularity</strong></td>
<td>Patient</td>
</tr>
<tr>
<td><strong>Improvement Notation</strong></td>
<td>Higher score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Effective Clinical Care</td>
</tr>
</table>

## Clinical Instructions

### New UI Visit Encounter (valid RC202109+)


### Original Visit Encounter

Track children ages 6-12 that have been newly dispensed a medication for ADHD and ensure they receive appropriate follow-up care.

1. Provide a follow-up with children prescribed ADHD medication during the 30-Day Initiation Phase
2. For children remaining on the medication for 7+ months, provide two additional follow-up visits and ensure these are completed within 9 months of the Initiation Phase ending.

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care, Established Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1024</td>
</tr>
<tr>
<td>Medication, Active: ADHD Medications</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1171</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Narcolepsy</td>
<td>2.16.840.1.113883.3.464.1003.114.12.1011</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Behavioral Health Follow-up Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1054</td>
</tr>
<tr>
<td>Encounter, Performed: Hospital Observation Care - Initial</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1002</td>
</tr>
<tr>
<td>Encounter, Performed: Observation care discharge day management (This code is to be utilized to report all services provided to a patient on discharge from outpatient hospital observation status if the discharge is on other than the initial date of observation status. To report services to a patient designated as observation status or inpatient status and discharged on the same date, use the codes for Observation or Inpatient Care Services [including Admission and Discharge Services, 99234-99236 as appropriate.])</td>
<td>CPT Code 99217</td>
</tr>
<tr>
<td>Encounter, Performed: Online Assessments</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1089</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Group Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1027</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Individual Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1026</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Diagnostic Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1492</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Psychotherapy</td>
<td>2.16.840.1.113883.3.526.3.1496</td>
</tr>
<tr>
<td>ncounter, Performed: Psychotherapy and Pharmacologic Management</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1055</td>
</tr>
<tr>
<td>Encounter, Performed: Telehealth Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1031</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>
</table>

## Source(s)

[eCQI CMS136](https://ecqi.healthit.gov/ecqm/ep/2022/cms136v11)
