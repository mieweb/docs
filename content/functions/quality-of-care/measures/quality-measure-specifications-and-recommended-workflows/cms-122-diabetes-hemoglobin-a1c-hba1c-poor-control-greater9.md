---
id: '1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4'
title: 'CMS 122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (>9%)'
date: '2024-09-05T21:09:31.182Z'
version: 122
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v10&showresulttype=Measure'
  - '../../../order-and-result-management/observation-code-merging.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms122v12'
source: 'https://drive.google.com/open?id=1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4'
wikigdrive: 'a089f188505e78981d76f5d8cf7827afb7a63200'
markup: 'pandoc'
---
## Overview

[CMS122v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v12&showresulttype=Measure) (2024)

[CMS122v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v11&showresulttype=Measure) (2023)

[CMS122v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS122v12</td>
<td>–</td>
<td>0059</td>
<td>001</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18-75 years of age with diabetes who had hemoglobin A1c > 9.0% during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18-75 years of age by the end of the measurement period, with diabetes with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Exclude patients who are in hospice care for any part of the measurement period.</li><li>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</li><li>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:<br />
<ul><li>Advanced illness with two outpatient encounters during the measurement period or the year prior</li><li>Advanced illness with one inpatient encounter during the measurement period or the year prior</li><li>Taking dementia medications during the measurement period or the year prior</li></ul></li><li>Exclude patients receiving palliative care during the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients whose most recent HbA1c level (performed during the measurement period) is >9.0% or is missing, or was not performed during the measurement period.</td>
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
<td>Lower score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Effective Clinical Care</td>
</tr>
</table>

## Clinical Instructions

Track the HbA1c of all diabetic patients between the ages of 18-75.  The most recently performed HbA1c during the measurement period should be <=9.0%.  Laboratory screening tests will be recorded as observations with results either manually entered or received from a laboratory interface.  Any patients with an HbA1c >9% will be included in the numerator and count against quality.  This is an inverse measure.  The goal is to NOT have patients in the numerator

Regardless of how the HbA1c observation is added to the chart, clients will need to ensure that the appropriate observation is configured with one of the following LOINC codes: 4548-4, 4549-2, or 17856-6.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the Hemoglobin A1c observation to determine if multiple HbA1c [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).

### Numerator Compliance

#### Workflow A

1. To document a known test and result while documenting the Visit encounter, open the Tests and Procedures section
2. Search for the appropriate screening test (2.16.840.1.113883.3.464.1003.198.12.1013)
3. Click Add to Exam
4. Open the newly added test section and record the test result
5. Complete the test and close the section
6. Continue documenting the encounter, as appropriate
7. When completed, Close and Archive the encounter

#### Workflow B

1. To order a future test while documenting the Visit encounter, open the Visit Orders section
2. Search for the appropriate screening test (2.16.840.1.113883.3.464.1003.198.12.1013)
3. Click Add
4. Close the Visit Orders section
5. Continue documenting the encounter, as appropriate
6. When completed, Close and Archive the encounter
7. The order added during the encounter MUST be resulted and completed with an appropriately coded observation in order to meet numerator compliance

### Denominator Exclusion Compliance

#### Workflow A

1. Use the Long-Term, Chronic, and End of Life Care instructions to document one or more of the following
    a.  Palliative Care
    b.  Hospice Care
    c.  Frailty Device Use

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Diabetes</td>
<td>2.16.840.1.113883.3.464.1003.103.12.1001</td>
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
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
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
<td>2.16.840.1.113762.1.4.1108.15</td>
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
<td>Laboratory Test, Performed: HbA1c Laboratory Test</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1013</td>
</tr>
</table>

### Source(s)

[eCQI CMS122](https://ecqi.healthit.gov/ecqm/ep/2024/cms122v12)
