---
id: '1zRb6sMWOXB4U1PqYWAwJhixvIaeGsAPINYdcvedUPHk'
title: 'CMS 125 - Breast Cancer Screening'
date: '2024-08-09T15:56:40.397Z'
version: 55
lastAuthor: 'tjuillerat'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v10&showresulttype=Measure'
  - '../../../document-management/scanning-and-indexing.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms125v10'
source: 'https://drive.google.com/open?id=1zRb6sMWOXB4U1PqYWAwJhixvIaeGsAPINYdcvedUPHk'
wikigdrive: 'v2.15.30'
---
## Overview

[CMS125v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v8&showresulttype=Measure) (2020)

[CMS125v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v9&showresulttype=Measure) (2021)

[CMS125v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS125v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS125v10</td>
<td>–</td>
<td>2372</td>
<td>112</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of women 50-74 years of age who had a mammogram to screen for breast cancer in the 27 months prior to the end of the Measurement Period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Women 51-74 years of age with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Women who had a bilateral mastectomy or who have a history of a bilateral mastectomy or for whom there is evidence of a right and a left unilateral mastectomy.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li><li>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</li><li>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:<br />
<ul><li>Advanced illness with two outpatient encounters during the measurement period or the year prior</li><li>Advanced illness with one inpatient encounter during the measurement period or the year prior</li><li>Taking dementia medications during the measurement period or the year prior</li></ul></li><li>Exclude patients receiving palliative care during the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Women with one or more mammograms during the 27 months prior to the end of the measurement period</td>
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

Use the Past Procedures section of the encounter to record a previous mammogram, in order to track all 50-74 year-old women with one or more mammograms recorded (15 months prior to or during the measurement period). Otherwise, the procedure can be recorded in the Preventive Care section of the encounter, or a mammogram can be scanned and indexed, to record the screening was completed.

1. While documenting the Visit encounter, either record the previous procedure or the receipt of the mammogram, or scan and index the mammogram, as appropriate:
    1. <strong>Option 1:</strong> <strong>Document in Past Procedures section</strong>
        1. Open the Past Procedures section.
        2. Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Mammogram) with the appropriate concept ID.
        3. Add the Date and any relevant Notes.
        4. Click the Next button, or close the section.
    2. <strong>Option 2: Document in the Preventive Care section of Visit encounter</strong>
        1. Open the Preventive Care section.
        2. Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-21-2018). This date is the Last Reported Date.
        3. Click the Next button, or close the section.
2. Continue documenting the encounter, as needed.
3. When completed, Close and Archive the encounter.

* <strong>Option 3: Scan/Index or Upload a Mammogram document</strong>
    * Using [WebScan](../../../document-management/scanning-and-indexing.md), scan and index the MAMMO document type configured with the necessary LOIN-C (24606-6).

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
</tr>
<tr>
<td>Diagnosis: History of bilateral mastectomy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1068</td>
</tr>
<tr>
<td>Diagnosis: Status Post Left Mastectomy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1069</td>
</tr>
<tr>
<td>Diagnosis: Status Post Right Mastectomy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1070</td>
</tr>
<tr>
<td>Diagnosis: Unilateral Mastectomy, Unspecified Laterality</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1071</td>
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
<td>Procedure, Performed: Bilateral Mastectomy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1005</td>
</tr>
<tr>
<td>Procedure, Performed: Unilateral Mastectomy Left</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1133</td>
</tr>
<tr>
<td>Procedure, Performed: Unilateral Mastectomy Right</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1134</td>
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
<td>Diagnostic Study, Performed: Mammography</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1018</td>
</tr>
</table>

## Source(s)

[eCQI CMS125](https://ecqi.healthit.gov/ecqm/ep/2022/cms125v10)
