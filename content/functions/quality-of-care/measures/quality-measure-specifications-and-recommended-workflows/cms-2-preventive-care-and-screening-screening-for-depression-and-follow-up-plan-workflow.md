---
id: '1SaJKu9Mehk1e5lJ_qiV0TMPqdkT9C_nyvPw27Kv-L8c'
title: 'CMS 2 - Preventive Care and Screening: Screening for Depression and Follow-up Plan Workflow'
date: '2024-07-25T01:21:37.198Z'
version: 294
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v13&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v12&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v11&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://ecqi.healthit.gov/ecqm/ec/2024/cms0002v13?qt-tabs_measure=measure-information'
source: 'https://drive.google.com/open?id=1SaJKu9Mehk1e5lJ_qiV0TMPqdkT9C_nyvPw27Kv-L8c'
wikigdrive: '14369108b4618bce79d4c23f4d172a439fb63721'
---
## Overview

[CMS2v13](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v13&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2024)

[CMS2v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v12&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2023)

[CMS2v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v11&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS2v13</td>
<td>–</td>
<td>–</td>
<td>134</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 12 years and older screened for depression on the date of the encounter or up to 14 days prior to the date of the encounter using an age-appropriate standardized depression screening tool AND if positive, a follow-up plan is documented on the date of or up to two days after the date of the qualifying encounter</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 12 years and older at the beginning of the measurement period with at least one qualifying encounter during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population.</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Patients who have ever been diagnosed with bipolar disorder at any time prior to the qualifying encounter</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients screened for depression on the date of the encounter or up to 14 days prior to the date of the encounter using an age-appropriate standardized tool AND if positive, a follow-up plan is documented on the date of or up to two days after the date of the qualifying encounter</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>Patient Reason(s)<br />
<ul><li>Patient refuses to participate in or complete the depression screening</li></ul>OR<br />
Medical Reason(s)<br />
<ul><li>Documentation of medical reason for not screening patient for depression (e.g., cognitive, functional, or motivational limitations that may impact accuracy of results</li><li>Patient is in an urgent or emergent situation where time is of the essence and to delay treatment would jeopardize the patient's health status)</li></ul></td>
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
<td>Community/Population Health</td>
</tr>
<tr>
<td><strong>Telehealth Eligible</strong></td>
<td>Yes</td>
</tr>
</table>

## Clinical Instructions

Ensure all 12+ year-old patients are screened for depression during or within the 14 days prior to an eligible encounter during the measurement period.  Encounter eligibility is determined based on the billing codes linked to the encounter in WebChart EHR.  Use the preferred Test and Procedures section or the alternate Preventive Care section of the Visit encounter to order and perform an age appropriate depression screening.  Any patient with a positive screening requires a follow-up plan documented during the current encounter.  Perform the following steps to document a depression screening.

### Numerator Compliance

#### Preferred Workflow

1. While documenting the Visit encounter, open the Tests and Procedures section
2. Search for Depression Screening in the autocomplete
* For patients under 18, use the Adolescent Depression Screening LOINC 73831-0
* For patients 18+, use the Adult Depression Screening LOINC 73832-8
3. Click Add to Exam
4. Open the Depression Screening section
5. Complete the questions
    1. Select either Positive for Depression (SNOMEDCT: 428181000124104) or Negative for Depression (SNOMEDCT: 428171000124102)
    2. If selecting Positive for Depression, select an appropriate Adult or Adolescent Depression Follow-up Item
6. Close the section
7. If the Depression Screening indicates the patient is positive for depression, the appropriate follow-up should be recorded
* Order the appropriate follow-up items(s) for the patient as selected in the Depression Screening

OR

* E-prescribe an antidepressant medication
8. Continue documenting the encounter, as appropriate
9. When completed, Close and Archive the encounter

#### Alternate Workflow

1. While documenting the Visit encounter, open the Preventive Care section
2. Add the Depression Screening to the exam
* For patients under 18, use the Adolescent Depression Screening LOINC 73831-0
* For patients 18+, use the Adult Depression Screening LOINC 73832-8
3. Click Add to Exam
4. Open the Depression Screening section
5. Complete the questions
    1. Select either Positive for Depression (SNOMEDCT: 428181000124104) or Negative for Depression (SNOMEDCT: 428171000124102)
    2. If selecting Positive for Depression, select an appropriate Adult or Adolescent Depression Follow-up Item
6. Close the section
7. If the Depression Screening indicates the patient is positive for depression, the appropriate follow-up should be recorded

* Open the Preventive Care section
* Open the Depression Follow-up picklist
* Order the appropriate follow-up items(s) for the patient

OR

* E-prescribe an antidepressant medication
8. Continue documenting the encounter, as appropriate
9. When completed, Close and Archive the encounter

### Denominator Exclusion Compliance

#### Preferred Workflow

1. While documenting the encounter, record an active Bipolar diagnosis
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
<td>Name</td>
<td>Value Set</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter to Screen for Depression</td>
<td>2.16.840.1.113883.3.600.1916</td>
</tr>
<tr>
<td>Encounter, Performed: Physical Therapy Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1022</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td>Name</td>
<td>Value Set</td>
</tr>
<tr>
<td>Diagnosis: Bipolar Diagnosis</td>
<td>2.16.840.1.113883.3.600.450</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td>Name</td>
<td>Value Set</td>
</tr>
<tr>
<td>Assessment, Performed: Adolescent depression screening assessment</td>
<td>LOINC Code 73831-0</td>
</tr>
<tr>
<td>Assessment, Performed: Adult depression screening assessment</td>
<td>LOINC Code 73832-8</td>
</tr>
<tr>
<td>Depression screening positive (finding)</td>
<td>SNOMEDCT Code 428181000124104</td>
</tr>
<tr>
<td>Depression screening negative (finding)</td>
<td>SNOMEDCT Code 428171000124102</td>
</tr>
<tr>
<td>Intervention, Order: Referral for Adolescent Depression</td>
<td>2.16.840.1.113883.3.526.3.1570</td>
</tr>
<tr>
<td>Intervention, Order: Referral for Adult Depression</td>
<td>2.16.840.1.113883.3.526.3.1571</td>
</tr>
<tr>
<td>Intervention, Performed: Follow Up for Adolescent Depression</td>
<td>2.16.840.1.113883.3.526.3.1569</td>
</tr>
<tr>
<td>Intervention, Performed: Follow Up for Adult Depression</td>
<td>2.16.840.1.113883.3.526.3.1568</td>
</tr>
<tr>
<td>Medication, Order: Adolescent Depression Medications</td>
<td>2.16.840.1.113883.3.526.3.1567</td>
</tr>
<tr>
<td>Medication, Order: Adult Depression Medications</td>
<td>2.16.840.1.113883.3.526.3.1566</td>
</tr>
</table>

### Denominator Exceptions

<table>
<tr>
<td>Name</td>
<td>Value Set</td>
</tr>
<tr>
<td>Assessment, Not Performed: Adolescent depression screening assessment</td>
<td>LOINC Code 73831-0</td>
</tr>
<tr>
<td>Assessment, Not Performed: Adult depression screening assessment</td>
<td>LOINC Code 73832-8</td>
</tr>
<tr>
<td>Depression screening declined (situation)</td>
<td>SNOMEDCT Code 720834000</td>
</tr>
</table>

## Source(s)

[eCQI CMS2](https://ecqi.healthit.gov/ecqm/ec/2024/cms0002v13?qt-tabs_measure=measure-information)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>07/24/2024</td>
<td>Updated for the 2024 reporting period</td>
</tr>
<tr>
<td>05/11/2022</td>
<td>Updated for the 2022 reporting period</td>
</tr>
<tr>
<td>06/18/2021</td>
<td>Updated for the 2021 reporting period</td>
</tr>
<tr>
<td>02/27/2020</td>
<td>Initial document creation</td>
</tr>
</table>
