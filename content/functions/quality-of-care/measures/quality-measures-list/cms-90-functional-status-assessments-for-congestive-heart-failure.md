---
id: '18ODwYniLaezyp988LrTKkeoQAfvC6uQL4qiT8zCs2sg'
title: 'CMS 90 - Functional Status Assessments for Congestive Heart Failure'
date: '2022-05-23T12:20:29.883Z'
version: 73
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/glossary/pro'
  - 'https://ecqi.healthit.gov/glossary/ehr'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms090v11'
source: 'https://drive.google.com/open?id=18ODwYniLaezyp988LrTKkeoQAfvC6uQL4qiT8zCs2sg'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'CMS 90 - Functional Status Assessments for Congestive Heart Failure'
    identifier: '18ODwYniLaezyp988LrTKkeoQAfvC6uQL4qiT8zCs2sg'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3850
---
## Overview  
  
[CMS90v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v9&showresulttype=Measure) (2020)  
[CMS90v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v10&showresulttype=Measure) (2021)  
[CMS90v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS90v11&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS90v11</td>
<td>–</td>
<td>–</td>
<td>377</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18 years of age and older with heart failure who completed initial and follow-up patient-reported functional status assessments</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18 years of age and older who had two outpatient encounters during the measurement period and a diagnosis of heart failure that starts before and continues into the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude patients with severe cognitive impairment in any part of the measurement period.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with patient-reported functional status assessment results (i.e., Veterans RAND 12-item health survey [VR-12]; VR-36; Kansas City Cardiomyopathy Questionnaire [KCCQ]; KCCQ-12; Minnesota Living with Heart Failure Questionnaire [MLHFQ]; <a href="https://ecqi.healthit.gov/glossary/pro"></a> Measurement Information System [PROMIS]-10 Global Health, PROMIS-29) present in the <a href="https://ecqi.healthit.gov/glossary/ehr"></a> two weeks before or during the initial FSA encounter and results for the follow-up FSA at least 30 days but no more than 180 days after the initial FSA</td>
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
  
Ensure all 18+ year-old patients with heart failure beginning  prior to and continuing into the measurement period have a functional status assessment during the measurement period. 
  
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
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>
<tr>
<td>Diagnosis: Heart Failure</td>
<td>2.16.840.1.113883.3.526.3.376</td>
</tr>

</table>

  
### Denominator Exclusions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Severe dementia (disorder)</td>
<td>SNOMEDCT Code 428351000124105</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15)</td>
</tr>

</table>

  
### Numerator  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Emotional score [MLHFQ]</td>
<td>LOINC Code 85609-6</td>
</tr>
<tr>
<td>Assessment, Performed: Kansas City Cardiomyopathy Questionnaire - 12 item [KCCQ-12]</td>
<td>LOINC Code 86923-0</td>
</tr>
<tr>
<td>Assessment, Performed: Overall summary score [KCCQ-12]</td>
<td>LOINC Code 86924-8</td>
</tr>
<tr>
<td>Assessment, Performed: Overall summary score [KCCQ]</td>
<td>LOINC Code 71940-1</td>
</tr>
<tr>
<td>Assessment, Performed: Physical limitation score [KCCQ]</td>
<td>LOINC Code 72195-1</td>
</tr>
<tr>
<td>Assessment, Performed: Physical score [MLHFQ]</td>
<td>LOINC Code 85618-7</td>
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
<td>Assessment, Performed: PROMIS-29 Anxiety score T-score</td>
<td>LOINC Code 71967-4</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Depression score T-score</td>
<td>LOINC Code 71965-8</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Fatigue score T-score</td>
<td>LOINC Code 71963-3</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Pain interference score T-score</td>
<td>LOINC Code 71961-7</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Physical function score T-score</td>
<td>LOINC Code 71959-1</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Satisfaction with participation in social roles score T-score</td>
<td>LOINC Code 71957-5</td>
</tr>
<tr>
<td>Assessment, Performed: PROMIS-29 Sleep disturbance score T-score</td>
<td>LOINC Code 71955-9</td>
</tr>
<tr>
<td>Assessment, Performed: Quality of life score [KCCQ]</td>
<td>LOINC Code 72189-4</td>
</tr>
<tr>
<td>Assessment, Performed: Self-efficacy score [KCCQ]</td>
<td>LOINC Code 72190-2</td>
</tr>
<tr>
<td>Assessment, Performed: Social limitation score [KCCQ]</td>
<td>LOINC Code 72196-9</td>
</tr>
<tr>
<td>Assessment, Performed: Symptom stability score [KCCQ]</td>
<td>LOINC Code 72194-4</td>
</tr>
<tr>
<td>Assessment, Performed: Total symptom score [KCCQ]</td>
<td>LOINC Code 72191-0</td>
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
<tr>
<td>Assessment, Performed: VR-36 Mental component summary (MCS) score - oblique method T-score</td>
<td>LOINC Code 71990-6</td>
</tr>
<tr>
<td>Assessment, Performed: VR-36 Mental component summary (MCS) score - orthogonal method T-score</td>
<td>LOINC Code 72008-6</td>
</tr>
<tr>
<td>Assessment, Performed: VR-36 Physical component summary (PCS) score - oblique method T-score</td>
<td>LOINC Code 71989-8</td>
</tr>
<tr>
<td>Assessment, Performed: VR-36 Physical component summary (PCS) score - orthogonal method T-score</td>
<td>LOINC Code 72007-8</td>
</tr>

</table>

  
## **Source(s)**  
  
[eCQI CMS90](https://ecqi.healthit.gov/ecqm/ep/2022/cms090v11)
