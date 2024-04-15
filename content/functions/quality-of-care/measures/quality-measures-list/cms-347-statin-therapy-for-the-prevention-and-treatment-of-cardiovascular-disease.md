---
id: '1frOmVEMtMqMmrc_ztH4hM1mlEYzvgyrNU4qZZjuW9LU'
title: 'CMS 347 - Statin Therapy for the Prevention and Treatment of Cardiovascular Disease'
date: '2022-04-29T19:25:20.405Z'
version: 52
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v3&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v4&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v5&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms347v5'
source: 'https://drive.google.com/open?id=1frOmVEMtMqMmrc_ztH4hM1mlEYzvgyrNU4qZZjuW9LU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

[CMS347v3](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v3&showresulttype=Measure) (2020)

[CMS347v4](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v4&showresulttype=Measure) (2021)

[CMS347v5](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS347v5&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS347v5</td>
<td>–</td>
<td>–</td>
<td>438</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of the following patients - all considered at high risk of cardiovascular events - who were prescribed or were on statin therapy during the measurement period</td>
</tr>
<tr>
<td>All patients who were previously diagnosed with or currently have an active diagnosis of clinical atherosclerotic cardiovascular disease (ASCVD), including an ASCVD procedure</td>
<td>Patients aged >= 20 years who have ever had a low-density lipoprotein cholesterol (LDL-C) level >= 190 mg/dL or were previously diagnosed with or currently have an active diagnosis of familial hypercholesterolemia</td>
<td>Patients aged 40-75 years with a diagnosis of diabetes</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients who were previously diagnosed with or currently have an active diagnosis of clinical ASCVD, including an ASCVD procedure</td>
<td>Patients aged >= 20 years at the beginning of the measurement period who have ever had a laboratory result of LDL-C >=190 mg/dL or were previously diagnosed with or currently have an active diagnosis of familial hypercholesterolemia</td>
<td>Patients aged 40 to 75 years at the beginning of the measurement period with Type 1 or Type 2 diabetes</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Patients who have a diagnosis of pregnancy at any time during the measurement period</li><li>Patients who are breastfeeding at any time during the measurement period</li><li>Patients who have a diagnosis of rhabdomyolysis at any time during the measurement period</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who are actively using or who receive an order (prescription) for statin therapy at any time during the measurement period</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li>Patients with statin-associated muscle symptoms or an allergy to statin medication</li><li>Patients who are receiving palliative or hospice care</li><li>Patients with active liver disease or hepatic disease or insufficiency</li><li>Patients with end-stage renal disease (ESRD)</li></ul></td>
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
<td><strong>Rate Aggregation</strong></td>
<td>Performance Rate = (Numerator 1 + Numerator 2 +Numerator 3)/ [(Denominator 1 - Denominator Exclusions 1- Denominator Exceptions 1) + (Denominator 2 - Denominator Exclusions 2 - Denominator Exceptions 2) +(Denominator 3 - Denominator Exclusions 3 - Denominator Exceptions 3)]</td>
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

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Atherosclerosis and Peripheral Arterial Disease</td>
<td>2.16.840.1.113762.1.4.1047.21</td>
</tr>
<tr>
<td>Diagnosis: Cerebrovascular Disease, Stroke, TIA</td>
<td>2.16.840.1.113762.1.4.1047.44</td>
</tr>
<tr>
<td>Diagnosis: Diabetes</td>
<td>2.16.840.1.113883.3.464.1003.103.12.1001</td>
</tr>
<tr>
<td>Diagnosis: Familial Hypercholesterolemia</td>
<td>2.16.840.1.113762.1.4.1047.100</td>
</tr>
<tr>
<td>Diagnosis: Ischemic Heart Disease or Other Related Diagnoses</td>
<td>2.16.840.1.113762.1.4.1047.46</td>
</tr>
<tr>
<td>Diagnosis: Myocardial Infarction</td>
<td>2.16.840.1.113883.3.526.3.403</td>
</tr>
<tr>
<td>Diagnosis: Stable and Unstable Angina</td>
<td>2.16.840.1.113762.1.4.1047.47</td>
</tr>
<tr>
<td>Encounter, Performed: Annual Wellness Visit</td>
<td>2.16.840.1.113883.3.526.3.1240</td>
</tr>
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient Encounters for Preventive Care</td>
<td>2.16.840.1.113883.3.526.3.1576</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Other</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1030</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Individual Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1026</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Breastfeeding</td>
<td>2.16.840.1.113762.1.4.1047.73</td>
</tr>
<tr>
<td>Diagnosis: Pregnancy or Other Related Diagnoses</td>
<td>2.16.840.1.113883.3.600.1.1623</td>
</tr>
<tr>
<td>Diagnosis: Rhabdomyolysis</td>
<td>2.16.840.1.113762.1.4.1047.102</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>

### Denominator Exceptions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Adverse Event: Statin Allergen</td>
<td>2.16.840.1.113762.1.4.1110.42</td>
</tr>
<tr>
<td>Allergy/Intolerance: Statin Allergen</td>
<td>2.16.840.1.113762.1.4.1110.42</td>
</tr>
<tr>
<td>Diagnosis: End Stage Renal Disease</td>
<td>2.16.840.1.113883.3.526.3.353</td>
</tr>
<tr>
<td>Diagnosis: Hepatitis A</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1024</td>
</tr>
<tr>
<td>Diagnosis: Hepatitis B</td>
<td>2.16.840.1.113883.3.67.1.101.1.269</td>
</tr>
<tr>
<td>Diagnosis: Liver Disease</td>
<td>2.16.840.1.113762.1.4.1047.42</td>
</tr>
<tr>
<td>Diagnosis: Statin Associated Muscle Symptoms</td>
<td>2.16.840.1.113762.1.4.1108.85</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter for palliative care</td>
<td>ICD10CM Code Z51.5</td>
</tr>
<tr>
<td>Intervention, Order: Hospice Care Ambulatory</td>
<td>2.16.840.1.113883.3.526.3.1584</td>
</tr>
<tr>
<td>Intervention, Order: Palliative or Hospice Care</td>
<td>2.16.840.1.113883.3.600.1.1579</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice Care Ambulatory</td>
<td>2.16.840.1.113883.3.526.3.1584</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>

## Source(s)

[eCQI CMS347](https://ecqi.healthit.gov/ecqm/ep/2022/cms347v5)
