---
id: '1OtPnt5NR98PeeONo8zG0IQGrG7_VTz0GG05zk7UPNic'
title: 'CMS 146 - Appropriate Testing for Children with Pharyngitis'
date: '2022-04-20T20:09:18.918Z'
version: 43
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v10&showresulttype=Measure'
  - '../../../order-and-result-management/observation-code-merging.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms146v10'
source: 'https://drive.google.com/open?id=1OtPnt5NR98PeeONo8zG0IQGrG7_VTz0GG05zk7UPNic'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
## Overview

[CMS146v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v8&showresulttype=Measure) (2020)

[CMS146v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v9&showresulttype=Measure) (2021)

[CMS146v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS146v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS146v10</td>
<td>–</td>
<td>–</td>
<td>066</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>The percentage of episodes for patients 3 years and older with a diagnosis of pharyngitis that resulted in an antibiotic dispensing event and a group A streptococcus (strep) test</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Outpatient, telephone, online assessment (i.e. e-visit or virtual check-in), observation, or emergency department (ED) visits with a diagnosis of pharyngitis and an antibiotic dispensing event on or within 3 days after the episode date among patients 3 years or older</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Exclude episodes where the patient is taking antibiotics in the 30 days prior to the episode date, or had an active prescription on the episode date.</li><li>Exclude episodes where the patient had a comorbid condition during the 12 months prior to or on the episode date.</li><li>Exclude episodes when the patient had hospice care for any part of the measurement period.</li><li>Exclude episodes where the patient had a competing diagnosis on or within three days after the episode date.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>A group A streptococcus test in the seven-day period from three days prior to the episode date through three days after the episode date</td>
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
<td><ul><li>3-17 years</li><li>18-64 years</li><li>65 years and older</li></ul></td>
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

Track all children ages 3-18 who had an outpatient or ED visit with a diagnosis of pharyngitis and an antibiotic ordered on or three (3) days after the visit. Compliance requires a group A streptococcus (strep) test be administered within the 7-day period from 3 days prior through 3 days after the initial diagnosis. Use either the Test and Procedures section of the encounter, or add the Lab Results - Set 2 to the encounter template; otherwise, enter the appropriate observation to the chart using the Observations chart tab.

{{% tip %}}
Regardless of how the strep test observation is added to the chart, clients will need to ensure that the appropriate observation is configured with LOINC 6559-9.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the *Strep* observations to determine if multiple [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).
{{% /tip %}}

* While documenting the Visit encounter, document the results of a Strep test one of two ways:
    1. <strong>Option 1: Tests and Procedures Section</strong>
        1. Open the Tests and Procedures section.
        2. Using the autocomplete, begin typing Strep A Qual Throat Swab.
        3. Click the Add to Exam button.
        4. After adding the new section, open the Strep A Qual Throat Swab section and add the result.
        5. Click the Next button, or close the section.
    2. <strong>Option 2: Add Lab Results - Set 2 to Encounter</strong>
        1. Click the Tools icon in the upper-right corner of the encounter.
        2. Click the Lab Results - Set 2 header to add the section to the encounter template. Close the Tools window.
        3. Click the Lab Results - Set 2 header to open the section and add the Rapid Strep result.
        4. Click the Next button, or close the section.
    3. Continue documenting the encounter, as needed.
    4. When completed, Close and Archive the encounter
* <strong>Option 3: Add Observation using Observations Chart Tab</strong>
    1. Navigate to the patient chart.
    2. Open the Observations tab of the Medical Records chart tab.
    3. Click the Add Observation link in the upper-right corner.
    4. Enter the Date the Rapid Strep was observed, its Result, and any relevant Comments.
    5. Click the Submit button.

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Acute Pharyngitis</td>
<td>2.16.840.1.113883.3.464.1003.102.12.1011</td>
</tr>
<tr>
<td>Diagnosis: Acute Tonsillitis</td>
<td>2.16.840.1.113883.3.464.1003.102.12.1012</td>
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
<tr>
<td>Medication, Order: Antibiotic Medications for Pharyngitis</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1001</td>
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
<tr>
<td>Medication, Active: Antibiotic Medications for Pharyngitis</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1001</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Laboratory Test, Performed: Group A Streptococcus Test</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1012</td>
</tr>
</table>

## Source(s)

[eCQI CMS146](https://ecqi.healthit.gov/ecqm/ep/2022/cms146v10)
