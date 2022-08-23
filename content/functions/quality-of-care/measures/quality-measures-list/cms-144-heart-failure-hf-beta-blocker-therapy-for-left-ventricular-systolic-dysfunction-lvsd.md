---
id: '1mjaSrGAH3j_mNUIhsJT4neLhoquPAcUP2VKpHrCaKUI'
title: 'CMS 144 - Heart Failure (HF): Beta-Blocker Therapy for Left Ventricular Systolic Dysfunction (LVSD)'
date: '2022-04-20T15:02:42.844Z'
version: 34
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms144v10'
source: 'https://drive.google.com/open?id=1mjaSrGAH3j_mNUIhsJT4neLhoquPAcUP2VKpHrCaKUI'
wikigdrive: 'eb4f9f8e82d104274f4630740771c9319ef63af0'
menu:
  main:
    name: 'CMS 144 - Heart Failure (HF): Beta-Blocker Therapy for Left Ventricular Systolic Dysfunction (LVSD)'
    identifier: '1mjaSrGAH3j_mNUIhsJT4neLhoquPAcUP2VKpHrCaKUI'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3970
---
## Overview

[CMS144v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v8&showresulttype=Measure) (2020)
[CMS144v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v9&showresulttype=Measure) (2021)
[CMS144v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS144v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS144v10</td>
<td>0083e</td>
<td>0083</td>
<td>008</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older with a diagnosis of heart failure (HF) with a current or prior left ventricular ejection fraction (LVEF) < 40% who were prescribed beta-blocker therapy either within a 12-month period when seen in the outpatient setting OR at each hospital discharge</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 18 years and older with a diagnosis of heart failure</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population with a current or prior LVEF < 40%</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who were prescribed beta-blocker therapy either within a 12-month period when seen in the outpatient setting OR at each hospital discharge</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li><p>Documentation of medical reason(s) for not prescribing beta-blocker therapy (e.g., low blood pressure, fluid overload, asthma, patients recently treated with an intravenous positive inotropic agent, allergy, intolerance, other medical reasons).</p></li><li><p>Documentation of patient reason(s) for not prescribing beta-blocker therapy (e.g., patient declined, other patient reasons).</p></li><li><p>Documentation of system reason(s) for not prescribing beta-blocker therapy (e.g., other reasons attributable to the healthcare system).</p></li></ul></td>
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
<td>Population 1: Patients who were prescribed beta-blocker therapy within a 12-month period when seen in the outpatient setting Population 2: Patients who were prescribed beta-blocker therapy at each hospital dischargePerformance Rate = (Numerator 1 + Numerator 2)/ [(Denominator 1 - Denominator Exceptions 1) + (Denominator 2 - Denominator Exceptions 2)]</td>
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

Track all patients aged 18+ prescribed beta-blocker therapy within a 12-month period of the diagnosis of heart failure with a current or prior left ventricular ejection fraction (LVEF) < 40%.
1. Ensure patient has one of the following diagnoses:
    1. Moderate left ventricular systolic dysfunction (disorder) - SNOMED 981000124106
    2. Severe left ventricular systolic dysfunction (disorder) - SNOMED 991000124109
1. Numerator will be populated with patients prescribed a beta-blocker therapy within the measurement period.

## Evidence


### Initial Patient Population


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Heart Failure</td>
<td>2.16.840.1.113883.3.526.3.376</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Hospital Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1007</td>
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
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Patient Provider Interaction</td>
<td>2.16.840.1.113883.3.526.3.1012</td>
</tr>

</table>


### Denominator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Left ventricular systolic dysfunction (disorder)</td>
<td>SNOMEDCT Code 134401001</td>
</tr>
<tr>
<td>Diagnosis: Moderate or Severe LVSD</td>
<td>2.16.840.1.113883.3.526.3.1090</td>
</tr>
<tr>
<td>Diagnostic Study, Performed: Ejection Fraction</td>
<td>2.16.840.1.113883.3.526.3.1134</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Medication, Active: Beta Blocker Therapy for LVSD"</td>
<td>2.16.840.1.113883.3.526.3.1184</td>
</tr>

</table>


### Denominator Exceptions


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Allergy/Intolerance: Beta Blocker Therapy Ingredient</td>
<td>2.16.840.1.113883.3.526.3.1493</td>
</tr>
<tr>
<td>Allergy/Intolerance: Substance with beta adrenergic receptor antagonist mechanism of action (substance)</td>
<td>SNOMEDCT Code 373254001</td>
</tr>
<tr>
<td>Device, Applied: Cardiac Pacer</td>
<td>2.16.840.1.113883.3.526.3.1193</td>
</tr>
<tr>
<td>Diagnosis: Allergy to Beta Blocker Therapy</td>
<td>2.16.840.1.113883.3.526.3.1177</td>
</tr>
<tr>
<td>Diagnosis: Arrhythmia</td>
<td>2.16.840.1.113883.3.526.3.366</td>
</tr>
<tr>
<td>Diagnosis: Asthma</td>
<td>2.16.840.1.113883.3.526.3.362</td>
</tr>
<tr>
<td>Diagnosis: Atrioventricular Block</td>
<td>2.16.840.1.113883.3.526.3.367</td>
</tr>
<tr>
<td>Diagnosis: Bradycardia</td>
<td>2.16.840.1.113883.3.526.3.412</td>
</tr>
<tr>
<td>Diagnosis: Cardiac Pacer in Situ</td>
<td>2.16.840.1.113883.3.526.3.368</td>
</tr>
<tr>
<td>Diagnosis: Hypotension</td>
<td>2.16.840.1.113883.3.526.3.370</td>
</tr>
<tr>
<td>Diagnosis: Intolerance to Beta Blocker Therapy</td>
<td>2.16.840.1.113883.3.526.3.1178</td>
</tr>
<tr>
<td>Physical Exam, Performed: Heart Rate</td>
<td>2.16.840.1.113883.3.526.3.1176</td>
</tr>

</table>



## **Source(s)**

[eCQI CMS144](https://ecqi.healthit.gov/ecqm/ep/2022/cms144v10)
