---
id: '1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI'
title: 'CMS 124 - Cervical Cancer Screening'
date: '2024-09-05T19:53:07.912Z'
version: 144
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms124v12'
source: 'https://drive.google.com/open?id=1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI'
wikigdrive: '09e37def9271cd982804f575ee70401ad07a0a3f'
---
## Overview

[CMS124v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v12&showresulttype=Measure) (2024)

[CMS124v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v11&showresulttype=Measure) (2023)

[CMS124v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms124&showresult=CMS124v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS124v12</td>
<td>–</td>
<td>–</td>
<td>309</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of women 21-64 years of age who were screened for cervical cancer using either of the following criteria:<br />
<ul><li>Women age 21-64 who had cervical cytology performed within the last 3 years</li><li>Women age 30-64 who had cervical human papillomavirus (HPV) testing performed within the last 5 years</li></ul></td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Women 24-64 years of age with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Women who had a hysterectomy with no residual cervix or a congenital absence of cervix.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li><li>Exclude patients receiving palliative care during the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Women with one or more screenings for cervical cancer. Appropriate screenings are defined by any one of the following criteria:<br />
<ul><li>Cervical cytology performed during the measurement period or the two years prior to the measurement period for women who are 24-64 years of age by the end of the measurement period</li><li>Cervical human papillomavirus (HPV) testing performed during the measurement period or the four years prior to the measurement period for women who are 30 years or older at the time of the test</li></ul></td>
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

Ensure all women aged 24-64 are screened for cervical cancer on the following schedule.  Beginning at age 21, women should be screened using a Pap Test at least once every 3 years.  Alternatively, beginning at age 30, women can be screened using an HPV Test at least once every 5 years. Laboratory screening tests will be recorded as observations with results either manually entered or received from a laboratory interface.

### Numerator Compliance

#### Workflow A

1. To document a known test and result while documenting the Visit encounter, open the Tests and Procedures section
2. Search for the appropriate screening test
* For patients under 30, use a Pap Test (2.16.840.1.113883.3.464.1003.108.12.1017)
* For patients 30+, use either a Pap Test or HPV Test (2.16.840.1.113883.3.464.1003.110.12.1059)
3. Click Add to Exam
4. Open the newly added test section and record the test result
5. Complete the test and close the section
6. Continue documenting the encounter, as appropriate
7. When completed, Close and Archive the encounter

#### Workflow B

1. To order a future test while documenting the Visit encounter, open the Visit Orders section
2. Search for the appropriate screening test
* For patients under 30, use a Pap Test (2.16.840.1.113883.3.464.1003.108.12.1017)
* For patients 30+, use either a Pap Test or HPV Test (2.16.840.1.113883.3.464.1003.110.12.1059)
3. Click Add
4. Close the Visit Orders section
5. Continue documenting the encounter, as appropriate
6. When completed, Close and Archive the encounter
7. The order added during the encounter MUST be resulted and completed with an appropriately coded observation in order to meet numerator compliance

### Denominator Exclusion Compliance

#### Workflow A

1. While documenting the encounter, record an active diagnosis of Congenital or Acquired Absence of Cervix (2.16.840.1.113883.3.464.1003.111.12.1016)
* Use the Smart Plan section quick lists to record the condition

OR

* Use the Past Medical History section quick lists to record the condition

OR

* Use the Symptoms/Diagnosis section quick lists to record the condition
2. Continue documenting the encounter, as appropriate
3. When completed, Close and Archive the encounter
4. This can also be documented outside of an encounter

#### Workflow B

1. While documenting the encounter, record a procedure of Hysterectomy with No Residual Cervix (2.16.840.1.113883.3.464.1003.198.12.1014)
* Use the Smart Plan section quick lists to record the procedure

OR

* Use the Past Procedures section quick lists to record the procedure
2. Continue documenting the encounter, as appropriate
3. When completed, Close and Archive the encounter
4. This can also be documented outside of an encounter

#### Workflow C

1. Use the Long-Term, Chronic, and End of Life Care instructions to document one or more of the following
    1. Palliative Care
    2. Hospice Care

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
<td>Diagnosis: Congenital or Acquired Absence of Cervix</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
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
<td>Procedure, Performed: Hysterectomy with No Residual Cervix</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1014</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Laboratory Test, Performed: HPV Test</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1059</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Pap Test</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1017</td>
</tr>
</table>

## Source(s)

[eCQI CMS124](https://ecqi.healthit.gov/ecqm/ep/2024/cms124v12)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>09/05/2024</td>
<td>Updated for the 2024 reporting period</td>
</tr>
<tr>
<td>04/19/2022</td>
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
