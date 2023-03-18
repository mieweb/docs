---
id: '1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4'
title: 'CMS 122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (>9%)'
date: '2022-06-07T13:50:51.845Z'
version: 86
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v10&showresulttype=Measure'
  - '../../../order-and-result-management/observation-code-merging.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms122v10'
source: 'https://drive.google.com/open?id=1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4'
wikigdrive: '2170bf47fa5a6c78b65673f5062de64818a1f71c'
menu:
  main:
    name: 'CMS 122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (>9%)'
    identifier: '1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3870
---
## Overview  
  
[CMS122v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v8&showresulttype=Measure) (2020)  
[CMS122v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v9&showresulttype=Measure) (2021)  
[CMS122v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS122v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS122v10</td>
<td>–</td>
<td>0059</td>
<td>001</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 18-75 years of age with diabetes who had hemoglobin A1c > 9.0% during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 18-75 years of age with diabetes with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li><li><p>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</p></li><li><p>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:</p><ul><li><p>Advanced illness with two outpatient encounters during the measurement period or the year prior</p></li><li><p>Advanced illness with one inpatient encounter during the measurement period or the year prior</p></li><li><p>Taking dementia medications during the measurement period or the year prior</p></li></ul></li><li><p>Exclude patients receiving palliative care during the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients whose most recent HbA1c level (performed during the measurement period) is >9.0% or is missing, or was not performed during the measurement period.</td>
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
<td>Lower score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Effective Clinical Care</td>
</tr>

</table>


  
## Clinical Instructions  
  
Track the HbA1c of all diabetic patients between the ages of 18-75.  The most recently performed HbA1c during the measurement period should be <=9.0%.  Any patients with an HbA1c >9% will be included in the numerator and count against quality. Use either the preferred Preventive Care section or the alternate Test and Procedures or Lab Results - Set 1 sections of the encounter. 

Regardless of how the HbA1c observation is added to the chart, clients will need to ensure that the appropriate observation is configured with one of the following LOINC codes: 4548-4, 4549-2, or 17856-6.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the Hemoglobin A1c observation to determine if multiple HbA1c [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).
  
### Preferred Workflow  

1. Preventive Care
2. Order A1c
   1. Add to exam - enter result
   2. Interfaced result completes the order
   3. Manually result
      1. Ordering doc->Add result->complete results encounter
  
### Alternate Workflow  

1. While documenting the Visit encounter, document the results of the HbA1c one of two ways:
   1. <strong>Option 1: Test and Procedures Section</strong>
      1. Open the Tests and Procedures section.
      2. Using the autocomplete, begin typing Hemoglobin A1c.
      3. Click the Add to Exam button.
      4. After adding the new section, open the Hemoglobin A1c section and add the result.
      5. Click the Next button, or close the section.
   1. <strong>Option 2: Add Lab Results - Set 1 to Encounter</strong>
      1. Click the Tools icon in the upper-right corner of the encounter.
      2. Click the Lab Results - Set 1 header to add the section to the encounter template. Close the Tools window.
      3. Click the Lab Results - Set 1 header to open the section and add the result.
      4. Click the Next button, or close the section.
1. Continue documenting the encounter, as needed.
2. When completed, Close and Archive the encounter.
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Diabetes</td>
<td>2.16.840.1.113883.3.464.1003.103.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Annual Wellness Visit</td>
<td>2.16.840.1.113883.3.526.3.1240</td>
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
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
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
<td>2.16.840.1.113762.1.4.1108.15</td>
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
<td>Laboratory Test, Performed: HbA1c Laboratory Test</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1013</td>
</tr>

</table>

  
### Source(s)  
  
[eCQI CMS122](https://ecqi.healthit.gov/ecqm/ep/2022/cms122v10)
