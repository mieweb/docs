---
id: '1OMZEtOiKag63xhZX7gZ60Kp8E_9MHAiDpI_9Epz-rK4'
title: 'CMS 137 - Initiation and Engagement of Alcohol and Other Drug Dependence Treatment'
date: '2022-04-28T13:40:33.445Z'
version: 24
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms137v10'
source: 'https://drive.google.com/open?id=1OMZEtOiKag63xhZX7gZ60Kp8E_9MHAiDpI_9Epz-rK4'
wikigdrive: '09e37def9271cd982804f575ee70401ad07a0a3f'
---
## Overview

[CMS137v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v8&showresulttype=Measure) (2020)

[CMS137v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v9&showresulttype=Measure) (2021)

[CMS137v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS137v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS137v10</td>
<td>–</td>
<td>–</td>
<td>305</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 13 years of age and older with a new episode of alcohol or other drug abuse or (AOD) dependence who received the following.</td>
</tr>
<tr>
<td>Percentage of patients who initiated treatment including either an intervention or medication for the treatment of AOD abuse or dependence within 14 days of the diagnosis</td>
<td>Percentage of patients who engaged in ongoing treatment including two additional interventions or a medication for the treatment of AOD abuse or dependence within 34 days of the initiation visit. For patients who initiated treatment with a medication, at least one of the two engagement events must be a treatment intervention.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients age 13 years of age and older who were diagnosed with a new episode of alcohol, opioid, or other drug abuse or dependency during a visit between January 1 and November 14 of the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Exclude patients with a negative diagnosis history, defined as an encounter or medication treatment for a diagnosis of alcohol, opioid or other drug abuse or dependence in the 60 days prior to the first episode of alcohol or drug dependence.</li><li>Exclude patients who are in hospice care for any part of the measurement period.</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Initiation of treatment includes either an intervention or medication for the treatment of AOD abuse or dependence within 14 days of the diagnosis.</td>
<td>Engagement in ongoing treatment within 34 days of initiation includes:<br />
<ul><li>Patients that initiated treatment with a psychosocial visit, and whose engagement criteria was fulfilled by a dispensed medication.</li><li>Patients that initiated treatment with a psychosocial visit, and whose engagement criteria was fulfilled by two further psychosocial visits.</li><li>Patients that initiated treatment with a dispensed medication, and whose engagement criteria was fulfilled by both a further medication dispense and a psychosocial visit.</li><li>Patients that initiated treatment with a dispensed medication, and whose engagement criteria was fulfilled by two psychosocial visits.</li></ul></td>
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
<td><ul><li>13-17 years</li><li>18 or greater years</li></ul></td>
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
<td>Diagnosis: Alcohol and Drug Dependence</td>
<td>2.16.840.1.113883.3.464.1003.106.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Hospital Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1007</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Hospital Inpatient Same Day Discharge</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1006</td>
</tr>
<tr>
<td>Encounter, Performed: Emergency Department Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Hospital Inpatient Visit - Initial</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1004</td>
</tr>
<tr>
<td>Encounter, Performed: Hospital Observation Care - Initial</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1002</td>
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
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Encounter, Performed: Detoxification Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1059</td>
</tr>
<tr>
<td>Intervention, Performed: Alcohol and Drug Dependence Treatment</td>
<td>2.16.840.1.113883.3.464.1003.106.12.1005</td>
</tr>
<tr>
<td>Intervention, Performed: Psych Visit - Psychotherapy</td>
<td>2.16.840.1.113883.3.526.3.1496</td>
</tr>
<tr>
<td>Medication, Order: Opiate Antagonists</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1132</td>
</tr>
</table>

## Source(s)

[eCQI CMS137](https://ecqi.healthit.gov/ecqm/ep/2022/cms137v10)
