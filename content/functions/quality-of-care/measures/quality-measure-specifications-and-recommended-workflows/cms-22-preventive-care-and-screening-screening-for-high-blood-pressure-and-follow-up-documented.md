---
id: '1ePGYBX1dZP8WII9Ti84hz9yv5tuz6ruiUlwSSfoot8Y'
title: 'CMS 22 - Preventive Care and Screening: Screening for High Blood Pressure and Follow-up Documented'
date: '2024-05-20T18:06:54.533Z'
version: 123
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms022v10'
source: 'https://drive.google.com/open?id=1ePGYBX1dZP8WII9Ti84hz9yv5tuz6ruiUlwSSfoot8Y'
wikigdrive: 'dev'
---
## Overview

[CMS22v8 ](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v8&showresulttype=Measure)(2020)

[CMS22v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v9&showresulttype=Measure) (2021)

[CMS22v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS22v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS22v10</td>
<td>–</td>
<td>–</td>
<td>317</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patient visits for patients aged 18 years and older seen during the measurement period who were screened for high blood pressure AND a recommended follow-up plan is documented, as indicated, if blood pressure is elevated or hypertensive.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patient visits for patients aged 18 years and older at the beginning of the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population.</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Patient has an active diagnosis of hypertension.</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patient visits where patients were screened for high blood pressure AND have a recommended follow-up plan documented, as indicated, if the blood pressure is elevated or hypertensive.</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li>Documentation of medical reason(s) for not screening for high blood pressure (e.g., patient is in an urgent or emergent medical situation where time is of the essence and to delay treatment would jeopardize the patient's health status).</li><li>Documentation of patient reason(s) for not screening for blood pressure measurements or for not ordering an appropriate follow-up intervention if patient BP is elevated or hypertensive (e.g., patient refuses).</li></ul></td>
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
<td>Encounter</td>
</tr>
<tr>
<td><strong>Improvement Notation</strong></td>
<td>Higher score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Community/Population Health</td>
</tr>
</table>

## Clinical Instructions

Track all 18+ year-old patients screened for high blood pressure, and ensure those with a pre-hypertensive or hypertensive blood pressure reading have a follow-up plan recommended and documented. Pre-hypertension is defined by blood pressure readings with a systolic pressure from 120 to 139 mm/Hg or a diastolic pressure from 80 to 89 mm/Hg. Hypertension is defined by readings greater than or equal to 140/90 mm/Hg.

### Preferred Workflow

1. While documenting the Visit encounter, record the blood pressure, as appropriate
2. Open the Vitals section and enter the systolic and diastolic pressures
3. If the blood pressure is high and the patient is assessed prehypertensive or hypertensive, recommend a follow-up plan and document, accordingly
* Open the Preventive Care section
* Open the Hypertension Interventions picklist
* Order the appropriate follow-up items(s) for the patient

OR

* E-prescribe an appropriate hypertension medication
4. Continue documenting the encounter, as needed
5. When completed, Close and Archive the encounter

### Alternate Workflow

1. While documenting the Visit encounter, record the blood pressure, as appropriate
2. Open the Vitals section and enter the systolic and diastolic pressures
3. If the blood pressure is high and the patient is assessed prehypertensive or hypertensive, recommend a follow-up plan and document, accordingly
4. Complete and provide the follow-up plan, as appropriate
5. Continue documenting the encounter, as needed
6. When completed, Close and Archive the encounter

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Encounter to Screen for Blood Pressure</td>
<td>2.16.840.1.113883.3.600.1920</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Diagnosis of Hypertension</td>
<td>2.16.840.1.113883.3.600.263</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Order: EKG 12 channel panel</td>
<td>LOINC Code 34534-8</td>
</tr>
<tr>
<td>Diagnostic Study, Order: EKG study</td>
<td>LOINC Code 11524-6</td>
</tr>
<tr>
<td>Intervention, Order: Dietary Recommendations</td>
<td>2.16.840.1.113883.3.600.1515</td>
</tr>
<tr>
<td>Intervention, Order: Follow Up Within 4 Weeks</td>
<td>2.16.840.1.113883.3.526.3.1578</td>
</tr>
<tr>
<td>Intervention, Order: Follow-up 2-3 months (finding)</td>
<td>SNOMEDCT Code 183624006</td>
</tr>
<tr>
<td>Intervention, Order: Follow-up 4-6 months (finding)</td>
<td>SNOMEDCT Code 183625007</td>
</tr>
<tr>
<td>Intervention, Order: Lifestyle Recommendation</td>
<td>2.16.840.1.113883.3.526.3.1581</td>
</tr>
<tr>
<td>Intervention, Order: Recommendation to Increase Physical Activity</td>
<td>2.16.840.1.113883.3.600.1518</td>
</tr>
<tr>
<td>Intervention, Order: Referral or Counseling for Alcohol Consumption</td>
<td>2.16.840.1.113883.3.526.3.1583</td>
</tr>
<tr>
<td>Intervention, Order: Referral to Primary Care or Alternate Provider</td>
<td>2.16.840.1.113883.3.526.3.1580</td>
</tr>
<tr>
<td>Intervention, Order: Weight Reduction Recommended</td>
<td>2.16.840.1.113883.3.600.1510</td>
</tr>
<tr>
<td>Laboratory Test, Order: Laboratory Tests for Hypertension</td>
<td>2.16.840.1.113883.3.600.1482</td>
</tr>
<tr>
<td>Medication, Order: Pharmacologic Therapy for Hypertension</td>
<td>2.16.840.1.113883.3.526.1577</td>
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

[eCQI CMS22](https://ecqi.healthit.gov/ecqm/ep/2022/cms022v10)
