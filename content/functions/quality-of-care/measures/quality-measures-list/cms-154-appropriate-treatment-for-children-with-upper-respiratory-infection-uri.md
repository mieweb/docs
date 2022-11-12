---
id: '1W0FANlgAIXUMqpKPJK6j0CUcGtHkY_-tbJsNQ_RkkcQ'
title: 'CMS 154 - Appropriate Treatment for Children with Upper Respiratory Infection (URI)'
date: '2022-04-21T20:40:56.624Z'
version: 33
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms154v10'
source: 'https://drive.google.com/open?id=1W0FANlgAIXUMqpKPJK6j0CUcGtHkY_-tbJsNQ_RkkcQ'
wikigdrive: '157919b64f9a467c6d0b4a7a3b2d494ae2131526'
menu:
  main:
    name: 'CMS 154 - Appropriate Treatment for Children with Upper Respiratory Infection (URI)'
    identifier: '1W0FANlgAIXUMqpKPJK6j0CUcGtHkY_-tbJsNQ_RkkcQ'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 4020
---
## Overview  
  
[CMS154v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v8&showresulttype=Measure) (2020)  
[CMS154v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v9&showresulttype=Measure) (2021)  
[CMS154v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS154v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS154v10</td>
<td>–</td>
<td>0069</td>
<td>065</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of episodes for patients 3 months of age and older with a diagnosis of upper respiratory infection (URI) that did not result in an antibiotic dispensing event.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Outpatient visits, telephone visits, online assessments (i.e. e-visit or virtual check-in), observation stays or emergency department visits with a diagnosis of URI during the measurement period among patients 3 months of age and older.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude URI episodes when the patient had a comorbid condition during the 12 months prior to or on the episode date.</p></li><li><p>Exclude URI episodes when the patient had an active prescription of antibiotics in the 30 days prior to the episode date, including the episode date up until the time of the encounter.</p></li><li><p>Exclude URI episodes when the patient had competing diagnosis on or three days after the episode date.</p></li><li><p>Exclude URI episodes when the patient had hospice care for any part of the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>URI episodes without a prescription for antibiotic medication on or 3 days after the outpatient visit, telephone visit, online assessment, observation stay or emergency department visit for an upper respiratory infection</td>
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
<td><strong>Stratification</strong></td>
<td><ul><li><p>3 months-17 years</p></li><li><p>18-64 years</p></li><li><p>65 years and older</p></li></ul></td>
</tr>
<tr>
<td><strong>Granularity</strong></td>
<td>Encounter</td>
</tr>
<tr>
<td><strong>Improvement Notation</strong></td>
<td>Higher score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Efficiency and Cost Reduction</td>
</tr>

</table>


  
## Clinical Instructions  

  
### New UI Visit Encounter (valid RC202109+)  


  
### Original Visit Encounter  

  
## Clinical Instructions  
  
Tracks children aged 13 months to 18 years who have been diagnosed with an upper respiratory infection, and were not dispensed an antibiotic on or 3 days after the visit for the infection.
1. Ensure patient has a diagnosis of Upper Respiratory Infection.
2. For individuals who have been diagnosed, review medications and ensure an antibiotic was not dispensed on or 3 days after the visit for the infection.
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Upper Respiratory Infection</td>
<td>2.16.840.1.113883.3.464.1003.102.12.1022</td>
</tr>
<tr>
<td>Encounter, Performed: Emergency Department Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Hospital Observation Care - Initial</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1002</td>
</tr>
<tr>
<td>Encounter, Performed: Medical Disability Exam</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1073</td>
</tr>
<tr>
<td>Encounter, Performed: Observation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1086</td>
</tr>
<tr>
<td>Encounter, Performed: Observation care discharge day management (This code is to be utilized to report all services provided to a patient on discharge from outpatient hospital observation status if the discharge is on other than the initial date of observation status. To report services to a patient designated as observation status or inpatient status and discharged on the same date, use the codes for Observation or Inpatient Care Services [including Admission and Discharge Services, 99234-99236 as appropriate.])</td>
<td>CPT Code 99217</td>
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
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Group Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1027</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Other</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1030</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
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
<td>Encounter, Performed: Preventive Care, Established Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1024</td>
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
<td>Diagnosis: Comorbid Conditions for Respiratory Conditions</td>
<td>2.16.840.1.113883.3.464.1003.102.12.1025</td>
</tr>
<tr>
<td>Diagnosis: Competing Conditions for Respiratory Conditions</td>
<td>2.16.840.1.113883.3.464.1003.102.12.1017</td>
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
<td>Medication, Active: Antibiotic Medications for Pharyngitis</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1001</td>
</tr>
<tr>
<td>Medication, Order: Antibiotic Medications for Pharyngitis</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1001</td>
</tr>

</table>

  
## **Source(s)**  
  
[eCQI CMS154](https://ecqi.healthit.gov/ecqm/ep/2022/cms154v10)
