---
id: '1OzDs__SEnsAFmh1GuwxLwWJLq64KIdpXDe_bG5b1OPE'
title: 'CMS 135 - Heart Failure (HF): Angiotensin-Converting Enzyme (ACE) Inhibitor or Angiotensin Receptor Blocker (ARB) Therapy for Left Ventricular Systolic Dysfunction (LVSD)'
date: '2022-04-20T13:53:16.615Z'
version: 39
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms135v10'
source: 'https://drive.google.com/open?id=1OzDs__SEnsAFmh1GuwxLwWJLq64KIdpXDe_bG5b1OPE'
wikigdrive: '64fa77a2dd4586094b6074a78ed6769886b60894'
menu:
  main:
    name: 'CMS 135 - Heart Failure (HF): Angiotensin-Converting Enzyme (ACE) Inhibitor or Angiotensin Receptor Blocker (ARB) Therapy for Left Ventricular Systolic Dysfunction (LVSD)'
    identifier: '1OzDs__SEnsAFmh1GuwxLwWJLq64KIdpXDe_bG5b1OPE'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3930
---
## Overview  
  
[CMS135v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v8&showresulttype=Measure) (2020)  
[CMS135v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v9&showresulttype=Measure) (2021)  
[CMS135v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS135v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS135v10</td>
<td>0081e</td>
<td>0081</td>
<td>005</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older with a diagnosis of heart failure (HF) with a current or prior left ventricular ejection fraction (LVEF) < 40% who were prescribed ACE inhibitor or ARB or ARNI therapy either within a 12-month period when seen in the outpatient setting OR at each hospital discharge</td>
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
<td>Patients who were prescribed ACE inhibitor or ARB or ARNI therapy either within a 12-month period when seen in the outpatient setting OR at each hospital discharge</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li><p>Documentation of medical reason(s) for not prescribing ACE inhibitor or ARB or ARNI therapy (e.g., hypotensive patients who are at immediate risk of cardiogenic shock, hospitalized patients who have experienced marked azotemia, allergy, intolerance, other medical reasons).</p></li><li><p>Documentation of patient reason(s) for not prescribing ACE inhibitor or ARB or ARNI therapy (e.g., patient declined, other patient reasons).</p></li><li><p>Documentation of system reason(s) for not prescribing ACE inhibitor or ARB or ARNI therapy (e.g., other system reasons).</p></li></ul></td>
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
<td>Population 1: Patients who were prescribed ACE inhibitor or ARB or ARNI therapy within a 12-month period when seen in the outpatient setting 
Population 2: Patients who were prescribed ACE inhibitor or ARB or ARNI therapy at each hospital discharge

Performance Rate = (Numerator 1 + Numerator 2)/ [(Denominator 1 - Denominator Exceptions 1) + (Denominator 2 - Denominator Exceptions 2)]</td>
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
  
Track all patients aged 18+ prescribed an ACE inhibitor or ARB therapy within a 12-month period of the diagnosis of heart failure with a current or prior left ventricular ejection fraction (LVEF) < 40%.
1. Ensure patient has one of the following diagnoses:
   1. Moderate left ventricular systolic dysfunction (disorder) - SNOMED 981000124106
   2. Severe left ventricular systolic dysfunction (disorder) - SNOMED 991000124109 
1. Numerator will be populated with patients prescribed an ACE inhibitor or ARB therapy within the measurement period.  
  
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
<td>Medication, Active: ACE Inhibitor or ARB or ARNI</td>
<td>2.16.840.1.113883.3.526.3.1139</td>
</tr>

</table>

  
### Denominator Exceptions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Allergy/Intolerance: ACE Inhibitor or ARB Ingredient</td>
<td>2.16.840.1.113883.3.526.3.1489</td>
</tr>
<tr>
<td>Allergy/Intolerance: sacubitril</td>
<td>RXNORM Code 1656328</td>
</tr>
<tr>
<td>Allergy/Intolerance: Substance with angiotensin II receptor antagonist mechanism of action (substance)</td>
<td>SNOMEDCT Code 372913009</td>
</tr>
<tr>
<td>Allergy/Intolerance: Substance with angiotensin-converting enzyme inhibitor mechanism of action (substance)</td>
<td>SNOMEDCT Code 372733002</td>
</tr>
<tr>
<td>Allergy/Intolerance: Substance with neprilysin inhibitor mechanism of action (substance)</td>
<td>SNOMEDCT Code 786886009</td>
</tr>
<tr>
<td>Diagnosis: Allergy to ACE Inhibitor or ARB</td>
<td>2.16.840.1.113883.3.526.3.1211</td>
</tr>
<tr>
<td>Diagnosis: Intolerance to ACE Inhibitor or ARB</td>
<td>2.16.840.1.113883.3.526.3.1212</td>
</tr>
<tr>
<td>Diagnosis: Pregnancy</td>
<td>2.16.840.1.113883.3.526.3.378</td>
</tr>
<tr>
<td>Diagnosis: Renal Failure Due to ACE Inhibitor</td>
<td>2.16.840.1.113883.3.526.3.1151</td>
</tr>

</table>

  
## **Source(s)**  
  
[eCQI CMS135](https://ecqi.healthit.gov/ecqm/ep/2022/cms135v10)
