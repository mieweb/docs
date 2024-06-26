---
id: '1SaJKu9Mehk1e5lJ_qiV0TMPqdkT9C_nyvPw27Kv-L8c'
title: 'CMS 2 - Preventive Care and Screening: Screening for Depression and Follow-up Plan'
date: '2024-05-20T18:20:39.840Z'
version: 180
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/webchart.cgi?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v9&showresulttype=Measure&module=&tabmodule='
  - 'https://medicalcodify.com/eh/webchart.cgi?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v10&showresulttype=Measure&module=&tabmodule=&searchterm=CMS2'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v11&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms002v11'
source: 'https://drive.google.com/open?id=1SaJKu9Mehk1e5lJ_qiV0TMPqdkT9C_nyvPw27Kv-L8c'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

[CMS2v9](https://medicalcodify.com/eh/webchart.cgi?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v9&showresulttype=Measure&module=&tabmodule=) (2020)

[CMS2v10](https://medicalcodify.com/eh/webchart.cgi?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v10&showresulttype=Measure&module=&tabmodule=&searchterm=CMS2) (2021)

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
<td>CMS2v11</td>
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
<td>Percentage of patients aged 12 years and older screened for depression on the date of the encounter or up to 14 days prior to the date of the encounter using an age-appropriate standardized depression screening tool AND if positive, a follow-up plan is documented on the date of the eligible encounter.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 12 years and older at the beginning of the measurement period with at least one eligible encounter during the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population.</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Patients who have been diagnosed with depression or with bipolar disorder.</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients screened for depression on the date of the encounter or up to 14 days prior to the date of the encounter using an age-appropriate standardized tool AND if positive, a follow-up plan is documented on the date of the eligible encounter.</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>Patient Reason(s)<br />
<ul><li>Patient refuses to participate</li></ul>OR<br />
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
</table>

## Clinical Instructions

Ensure all 12+ year-old patients are screened for depression during or within the 14 days prior to an eligible encounter during the measurement period. Use the preferred Preventive Care section or the alternate Test and Procedures section of the Visit encounter to order and perform the age appropriate depression screening. Any patient with a positive screening requires a follow-up plan documented during the current encounter.  Additionally, an adult or adolescent depression screening document with an appropriate LOINC code will also be counted.  Perform the following steps to document a depression screening.

### Preferred Workflow

1. While documenting the Visit encounter, record the procedure, as appropriate
2. Open the Preventive Care section
3. Add the Depression Screening to the exam
* For patients under 18, use the Adolescent Depression Screening
* For patients 18+, use the Adult Depression Screening
4. Click Add to Exam
5. Open the Depression Screening section
6. Complete the questions
7. Close the section
8. If the PHQ9 Calculation in the Depression Screening indicates the patient is positive for depression, order depression follow-up

* Open the Preventive Care section
* Open the Depression Follow-up picklist
* Order the appropriate follow-up items(s) for the patient

OR

* E-prescribe an antidepressant medication
9. Continue documenting the encounter, as appropriate
10. When completed, Close and Archive the encounter

### Alternate Workflow

1. While documenting the Visit encounter, record the procedure, as appropriate
2. Open the Tests and Procedures section
3. Search for Depression Screening in the autocomplete
* For patients under 18, use the Adolescent Depression Screening
* For patients 18+, use the Adult Depression Screening
4. Click Add to Exam
5. Open the Depression Screening section
6. Complete the questions
7. Close the section
8. If the PHQ9 Calculation in the Depression Screening indicates the patient is positive for depression, order depression follow-up
* Order the appropriate follow-up items(s) for the patient

OR

* E-prescribe an antidepressant medication
9. Continue documenting the encounter, as appropriate
10. When completed, Close and Archive the encounter

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
<tr>
<td>Diagnosis: Depression Diagnosis</td>
<td>2.16.840.1.113883.3.600.145</td>
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
</table>

## Source(s)

[eCQI CMS2](https://ecqi.healthit.gov/ecqm/ep/2022/cms002v11)
