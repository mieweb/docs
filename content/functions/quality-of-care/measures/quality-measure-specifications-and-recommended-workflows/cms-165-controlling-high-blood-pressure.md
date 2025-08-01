---
id: '1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc'
title: 'CMS 165 - Controlling High Blood Pressure'
date: '2024-09-19T20:27:54.186Z'
version: 65
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms165v12'
source: 'https://drive.google.com/open?id=1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
markup: 'pandoc'
---
## Overview

[CMS165v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v12&showresulttype=Measure) (2024)

[CMS165v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v11&showresulttype=Measure) (2023)

[CMS165v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS165v12</td>
<td>–</td>
<td>–</td>
<td>236</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18-85 years of age who had a diagnosis of essential hypertension starting before and continuing into, or starting during the first six months of the measurement period, and whose most recent blood pressure was adequately controlled (<140/90mmHg) during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18-85 years of age by the end of the measurement period who had a visit during the measurement period and diagnosis of essential hypertension starting before and continuing into, or starting during the first six months of the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Patients with evidence of end stage renal disease (ESRD), dialysis or renal transplant before or during the measurement period. Also exclude patients with a diagnosis of pregnancy during the measurement period.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li><li>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</li><li>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:<br />
<ul><li>Advanced illness with two outpatient encounters during the measurement period or the year prior</li><li>Advanced illness with one inpatient encounter during the measurement period or the year prior</li><li>Taking dementia medications during the measurement period or the year prior</li></ul></li><li>Exclude patients 81 and older with an indication of frailty for any part of the measurement period.</li><li>Exclude patients receiving palliative care during the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients whose most recent blood pressure is adequately controlled (systolic blood pressure < 140 mmHg and diastolic blood pressure < 90 mmHg) during the measurement period</td>
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
<td>Intermediate Outcome measure</td>
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

Using the Vitals section of the encounter, ensure blood pressure is recorded correctly and the systolic and diastolic observations are coded with the appropriate LOINC (i.e., 8480-6 and 8462-4). The patient also needs a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter, active within the first 6 months of the measurement period in order to populate the denominator.

### Numerator Compliance

1. While documenting the encounter, ensure both the systolic and diastolic blood pressure is recorded accurately under the Vitals section of the encounter.  For a patient to be compliant with the numerator, the most recent blood pressure values must be <140/90
2. The patient must have a diagnosis of hypertension under the Symptoms/Diagnosis or Smart Plan sections of the encounter.
3. Continue documenting the encounter as appropriate.
4. When complete, Close and Archive the encounter.

### Denominator Exclusion Compliance

#### Workflow A

1. Use the Long-Term, Chronic, and End of Life Care instructions to document one or more of the following
    a.  Palliative Care
    b.  Hospice Care
    c.  Frailty Device Use

#### Workflow B

1. While documenting the encounter, record an active Pregnancy diagnosis
* Use the Smart Plan section quick lists to record the condition

OR

* Use the Past Medical History section quick lists to record the condition

OR

* Use the Symptoms/Diagnosis section quick lists to record the condition
2. Continue documenting the encounter, as appropriate
3. When completed, Close and Archive the encounter

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Essential Hypertension</td>
<td>2.16.840.1.113883.3.464.1003.104.12.1011</td>
</tr>
<tr>
<td>Encounter, Performed: Annual Wellness Visit</td>
<td>2.16.840.1.113883.3.526.3.1240</td>
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
<td>Encounter, Performed: Online Assessments</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1089</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>
</table>
### Denominator Exclusions

 <table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Functional Assessment of Chronic Illness Therapy - Palliative Care Questionnaire (FACIT-Pal)</td>
<td>LOINC Code 71007-9</td>
</tr>
<tr>
<td>Device, Applied: Frailty Device</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1300</td>
</tr>
<tr>
<td>Device, Order: Frailty Device</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1300</td>
</tr>
<tr>
<td>Diagnosis: Chronic Kidney Disease, Stage 5</td>
<td>2.16.840.1.113883.3.526.3.1002</td>
</tr>
<tr>
<td>Diagnosis: End Stage Renal Disease</td>
<td>2.16.840.1.113883.3.526.3.353</td>
</tr>
<tr>
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
</tr>
<tr>
<td>Diagnosis: Kidney Transplant Recipient</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1029</td>
</tr>
<tr>
<td>Diagnosis: Pregnancy</td>
<td>2.16.840.1.113883.3.526.3.378</td>
</tr>
<tr>
<td>Encounter, Performed: Acute Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1083</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Emergency Department Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Encounter, Performed: ESRD Monthly Outpatient Services</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Frailty Encounter</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1088</td>
</tr>
<tr>
<td>Encounter, Performed: Nonacute Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1084</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Observation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1086</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1087</td>
</tr>
<tr>
<td>Encounter, Performed: Palliative Care Encounter</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1090</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15)</td>
</tr>
<tr>
<td>Intervention, Performed: Palliative Care Intervention</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1135</td>
</tr>
<tr>
<td>Medication, Active: Dementia Medications</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1510</td>
</tr>
<tr>
<td>Procedure, Performed: Dialysis Services</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1013</td>
</tr>
<tr>
<td>Procedure, Performed: Kidney Transplant</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1012</td>
</tr>
<tr>
<td>Symptom: Frailty Symptom</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1075</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Physical Exam, Performed: Diastolic blood pressure</td>
<td>LOINC Code 8462-4</td>
</tr>
<tr>
<td>Physical Exam, Performed: Systolic blood pressure</td>
<td>LOINC Code 8480-6</td>
</tr>
</table>

## Source(s)

[eCQI CMS165](https://ecqi.healthit.gov/ecqm/ep/2024/cms165v12)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>09/19/2024</td>
<td>Updated for the 2024 reporting period</td>
</tr>
<tr>
<td>04/22/2022</td>
<td>Updated for the 2022 reporting period</td>
</tr>
<tr>
<td>02/27/2020</td>
<td>Initial document creation</td>
</tr>
</table>
