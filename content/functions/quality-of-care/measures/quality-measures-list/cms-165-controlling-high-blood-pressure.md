---
id: '1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc'
title: 'CMS 165 - Controlling High Blood Pressure'
date: '2022-04-22T14:37:14.358Z'
version: 31
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms165v10'
source: 'https://drive.google.com/open?id=1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc'
wikigdrive: '64fa77a2dd4586094b6074a78ed6769886b60894'
menu:
  main:
    name: 'CMS 165 - Controlling High Blood Pressure'
    identifier: '1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 4050
---
## Overview  
  
[CMS165v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v8&showresulttype=Measure) (2020)  
[CMS165v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v9&showresulttype=Measure) (2021)  
[CMS165v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS165v10</td>
<td>–</td>
<td>–</td>
<td>236</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18-85 years of age who had a diagnosis of essential hypertension starting before and continuing into, or starting during the first six months of the measurement period, and whose most recent blood pressure was adequately controlled (<140/90mmHg) during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18-85 years of age who had a visit and diagnosis of essential hypertension starting before and continuing into, or starting during the first six months of the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Patients with evidence of end stage renal disease (ESRD), dialysis or renal transplant before or during the measurement period. Also exclude patients with a diagnosis of pregnancy during the measurement period.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li><li><p>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</p></li><li><p>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:</p><ul><li><p>Advanced illness with two outpatient encounters during the measurement period or the year prior</p></li><li><p>Advanced illness with one inpatient encounter during the measurement period or the year prior</p></li><li><p>Taking dementia medications during the measurement period or the year prior</p></li></ul></li><li><p>Exclude patients 81 and older with an indication of frailty for any part of the measurement period.</p></li><li><p>Exclude patients receiving palliative care during the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients whose most recent blood pressure is adequately controlled (systolic blood pressure < 140 mmHg and diastolic blood pressure < 90 mmHg) during the measurement period</td>
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
  
Using the Vitals section of the encounter, ensure blood pressure is recorded correctly and the systolic and diastolic observations are coded with the appropriate LOINC (i.e., 8480-6 and 8462-4). The patient also needs a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter, within the first six months or more of the measurement period in order to populate the denominator.
1. While documenting the encounter, ensure the blood pressure is recorded under the Vitals section of the encounter.
2. Patient must have a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter.
3. Continue documenting the encounter as appropriate.
4. When complete, Close and Archive the encounter.
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Essential Hypertension</td>
<td>2.16.840.1.113883.3.464.1003.104.12.1011</td>
</tr>
<tr>
<td>Encounter, Performed: Annual Wellness Visit</td>
<td>2.16.840.1.113883.3.526.3.1240</td>
</tr>
<tr>
<td>Encounter, Performed: ESRD Monthly Outpatient Services</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1014</td>
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
<td>Diagnosis: Chronic Kidney Disease, Stage 5</td>
<td>2.16.840.1.113883.3.526.3.1002</td>
</tr>
<tr>
<td>Diagnosis: End Stage Renal Disease</td>
<td>2.16.840.1.113883.3.526.3.353</td>
</tr>
<tr>
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
</tr>
<tr>
<td>Diagnosis: Kidney Transplant Recipient</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1029</td>
</tr>
<tr>
<td>Diagnosis: Pregnancy</td>
<td>2.16.840.1.113883.3.526.3.378</td>
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
<td>Procedure, Performed: Dialysis Services</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1013</td>
</tr>
<tr>
<td>Procedure, Performed: Kidney Transplant</td>
<td>2.16.840.1.113883.3.464.1003.109.12.1012</td>
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
<td>Physical Exam, Performed: Diastolic blood pressure</td>
<td>LOINC Code 8462-4</td>
</tr>
<tr>
<td>Physical Exam, Performed: Systolic blood pressure</td>
<td>LOINC Code 8480-6</td>
</tr>

</table>

  
## Source(s)  
  
[eCQI CMS165](https://ecqi.healthit.gov/ecqm/ep/2022/cms165v10)
