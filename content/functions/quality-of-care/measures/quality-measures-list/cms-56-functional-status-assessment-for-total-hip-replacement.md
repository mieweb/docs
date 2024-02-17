---
id: '1zsmUhaStIR7e8aV0jUDZy6Jt0bTTxA5apQtrmCHPu4U'
title: 'CMS 56 - Functional Status Assessment for Total Hip Replacement'
date: '2022-05-11T20:12:53.552Z'
version: 62
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/glossary/pro'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms056v10'
source: 'https://drive.google.com/open?id=1zsmUhaStIR7e8aV0jUDZy6Jt0bTTxA5apQtrmCHPu4U'
wikigdrive: '028c9969b6de1b1821f0b338eb112d2421a13029'
---
## Overview

[CMS56v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v8&showresulttype=Measure) (2020)  
[CMS56v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v9&showresulttype=Measure) (2021)  
[CMS56v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS56v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS56v10</td>
<td>–</td>
<td>–</td>
<td>376</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18 years of age and older who received an elective primary total hip arthroplasty (THA) and completed a functional status assessment within 90 days prior to the surgery and in the 270-365 days after the surgery</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 19 years of age and older who had a primary total hip arthroplasty (THA) in the year prior to the measurement period and who had an outpatient encounter during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude patients with two or more fractures indicating trauma at the time of the total hip arthroplasty or patients with severe cognitive impairment that starts before or in any part of the measurement period.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with patient-reported functional status assessment results (i.e., Veterans RAND 12-item health survey [VR-12], <a href="https://ecqi.healthit.gov/glossary/pro"></a> Measurement Information System [PROMIS]-10-Global Health, Hip Disability and Osteoarthritis Outcome Score [HOOS], HOOS Jr.) in the 90 days prior to or on the day of the primary THA procedure, and in the 270 - 365 days after the THA procedure</td>
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
<td>Person and Caregiver-Centered Experience and Outcomes</td>
</tr>

</table>



## Clinical Instructions

Ensure all 18+ year-old patients with a total hip replacement in the year prior to the measurement period have a functional status assessment during the measurement period.   

### Workflow

Coming soon.

## Evidence


### Initial Patient Population


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Postoperative follow-up visit, normally included in the surgical package, to indicate that an evaluation and management service was performed during a postoperative period for a reason(s) related to the original procedure</td>
<td>CPT Code 99024</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>
<tr>
<td>Procedure, Performed: Primary THA Procedure</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1006</td>
</tr>

</table>


### Denominator Exclusions


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Fracture - Lower Body</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1037</td>
</tr>
<tr>
<td>Diagnosis: Severe dementia (disorder)</td>
<td>SNOMEDCT Code 428351000124105</td>
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
<td>Assessment, Performed: Activities of daily living score [HOOS]</td>
<td>LOINC Code 72095-3</td>
</tr>
<tr>
<td>Assessment, Performed: Pain score [HOOS]</td>
<td>LOINC Code 72097-9</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-10 Global Mental Health (GMH) score T-score</td>
<td>LOINC Code 71969-0</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-10 Global Physical Health (GPH) score T-score</td>
<td>LOINC Code 71971-6</td>
</tr>
<tr>
<td>Assessment, Performed: Quality of life score [HOOS]</td>
<td>LOINC Code 72093-8</td>
</tr>
<tr>
<td>Assessment, Performed: Sport-recreation score [HOOS]</td>
<td>LOINC Code 72094-6</td>
</tr>
<tr>
<td>Assessment, Performed: Symptoms score [HOOS]</td>
<td>LOINC Code 72096-1</td>
</tr>
<tr>
<td>Assessment, Performed: Total interval score [HOOSJR]</td>
<td>LOINC Code 82323-7</td>
</tr>
<tr>
<td>Assessment, Performed: VR-12 Mental component summary (MCS) score - oblique method T-score</td>
<td>LOINC Code 72026-8</td>
</tr>
<tr>
<td>Assessment, Performed: VR-12 Mental component summary (MCS) score - orthogonal method T-score</td>
<td>LOINC Code 72028-4</td>
</tr>
<tr>
<td>Assessment, Performed: VR-12 Physical component summary (PCS) score - oblique method T-score</td>
<td>LOINC Code 72025-0</td>
</tr>
<tr>
<td>Assessment, Performed: VR-12 Physical component summary (PCS) score - orthogonal method T-score</td>
<td>LOINC Code 72027-6</td>
</tr>

</table>


## Source(s)

[eCQI CMS56](https://ecqi.healthit.gov/ecqm/ep/2022/cms056v10)
