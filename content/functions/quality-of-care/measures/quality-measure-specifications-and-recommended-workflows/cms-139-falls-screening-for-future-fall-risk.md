---
id: '1DHzhLkbGFoWJEFq1lv1Ox2i0Zu4T0f6_vstSxKFg0rA'
title: 'CMS 139 - Falls: Screening for Future Fall Risk'
date: '2024-09-06T13:09:08.946Z'
version: 91
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v10&showresulttype=Measure'
  - '../../../order-and-result-management/flowsheets-editor.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms139v12'
  - 'https://www.cdc.gov/steadi/pdf/STEADI-Form-RiskFactorsCk-508.pdf'
  - 'https://www.cdc.gov/steadi/pdf/STEADI-Algorithm-508.pdf'
source: 'https://drive.google.com/open?id=1DHzhLkbGFoWJEFq1lv1Ox2i0Zu4T0f6_vstSxKFg0rA'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
## Overview

[CMS139v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v12&showresulttype=Measure) (2024)

[CMS139v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v11&showresulttype=Measure) (2023)

[CMS139v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS139v12</td>
<td>–</td>
<td>0101</td>
<td>318</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 65 years of age and older who were screened for future fall risk during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients aged 65 years and older at the start of the measurement period with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Exclude patients who are in hospice care for any part of the measurement period.</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who were screened for future fall risk at least once within the measurement period</td>
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
<td>Patient Safety</td>
</tr>
</table>

## Clinical Instructions

Ensure all 65+ year-old patients are screened for future fall risk, at least once within the measurement period. Use the Test and Procedures section of the encounter to order and perform the Fall Risk Screening.

{{% note %}}
Each system/database will need a [Fall Risk Screening order and flowsheet created](../../../order-and-result-management/flowsheets-editor.md), in order to result the findings in the Tests and Procedures section of the encounter. The flowsheet must be configured with the Fall Risk Performed LOINC 73830-2.
{{% /note %}}

### Numerator Compliance

#### Preferred Workflow

1. To document a known test and result or perform the screening in-house while documenting the Visit encounter, open the Tests and Procedures section
2. Using the autocomplete, begin typing Fall Risk Screening.
3. Click Add to Exam
4. Open the newly added test section and record the test results
5. Complete the test and close the section
6. Continue documenting the encounter, as appropriate
7. When completed, Close and Archive the encounter

While documenting the Visit encounter, record the Fall Risk Screening procedure in the Tests and Procedures section of the Visit encounter.

1. Open the Tests and Procedures section.
2. Using the autocomplete, begin typing Fall Risk Screening.
3. Click the Add to Exam button.
4. After adding the new section, open the Fall Risk Screening and document the findings and complete the questionnaire.
5. Click the Next button, or close the section.
6. Continue documenting the encounter, as needed.
7. When completed, Close and Archive the encounter.

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
<td>Encounter, Performed: Audiology Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1066</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Nursing Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1013</td>
</tr>
<tr>
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
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
<td>Encounter, Performed: Ophthalmological Services</td>
<td>2.16.840.1.113883.3.526.3.1285</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Individual Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1026</td>
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
<td>Assessment, Performed: Falls Screening</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1028</td>
</tr>
</table>

## Source(s)

[eCQI CMS139](https://ecqi.healthit.gov/ecqm/ep/2024/cms139v12)

[Fall Risk Checklist](https://www.cdc.gov/steadi/pdf/STEADI-Form-RiskFactorsCk-508.pdf)

[Fall Risk Algorithm](https://www.cdc.gov/steadi/pdf/STEADI-Algorithm-508.pdf)
