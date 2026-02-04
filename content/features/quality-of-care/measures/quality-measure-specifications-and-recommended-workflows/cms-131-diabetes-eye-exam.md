---
id: '1rW73q4RgXZMILmaSdbqGoQqQVkl9eXloJVe_ef-n_Sg'
title: 'CMS 131 - Diabetes: Eye Exam'
date: '2022-04-20T13:17:07.932Z'
version: 35
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - '../../../document-management/scanning-and-indexing.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms131v10'
source: 'https://drive.google.com/open?id=1rW73q4RgXZMILmaSdbqGoQqQVkl9eXloJVe_ef-n_Sg'
wikigdrive: 'v2.15.30'
---
## Overview

CMS131v8 (2020)

CMS131v9 (2021)

CMS131v10 (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS131v10</td>
<td>–</td>
<td>0055</td>
<td>117</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18-75 years of age with diabetes and an active diagnosis of retinopathy in any part of the measurement period who had a retinal or dilated eye exam by an eye care professional during the measurement period or diabetics with no diagnosis of retinopathy in any part of the measurement period who had a retinal or dilated eye exam by an eye care professional during the measurement period or in the 12 months prior to the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18-75 years of age with diabetes with a visit during the measurement period</td>
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
<td>Patients with an eye screening for diabetic retinal disease. This includes diabetics who had one of the following:<br />
<ul><li>Diabetic with a diagnosis of retinopathy in any part of the measurement period and a retinal or dilated eye exam by an eye care professional in the measurement period</li><li>Diabetic with no diagnosis of retinopathy in any part of the measurement period and a retinal or dilated eye exam by an eye care professional in the measurement period or the year prior to the measurement period</li></ul></td>
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

2. Ensure all diabetic patients aged 18-75 have been screened for diabetic retinal disease. Use the Past Procedures section of the encounter to record a previous dilated or negative retinal exam, or use the Preventive Care section of the encounter to document the last Retinal Screening; otherwise, document a recognized eye exam by scanning and indexing an established document type (e.g., RETINAL) configured with the appropriate Concept ID.
    1. <strong>Option 1: Document in the Past Procedures section</strong>
        1. Open the Past Procedures section
        2. Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Dilated Fundus Evaluation, Retinal Screening, etc.) with the appropriate Concept ID (e.g., LOINC).
        3. Add the Date and any relevant Notes.
        4. Click the Next button, or close the section
    2. <strong>Option 2: Document in the Preventive Care section</strong>
        1. Open the Preventive Care section
        2. Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2020). This date is the Last Reported Date
        3. Click the Next button, or close the section
    * <strong>Option 3: Scan/Index or Upload an accepted Document</strong>
        1. Using [WebScan](../../../document-management/scanning-and-indexing.md), scan and index the appropriate document type configured with the necessary LOINC.

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
<td>Encounter, Performed: Ophthalmological Services</td>
<td>2.16.840.1.113883.3.526.3.1285</td>
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
<td>Diagnosis: Diabetic Retinopathy</td>
<td>2.16.840.1.113883.3.526.3.327</td>
</tr>
<tr>
<td>Physical Exam, Performed: Retinal or Dilated Eye Exam</td>
<td>2.16.840.1.113883.3.464.1003.115.12.1088</td>
</tr>
</table>

## Source(s)

[eCQI CMS131](https://ecqi.healthit.gov/ecqm/ep/2022/cms131v10)
