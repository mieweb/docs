---
id: '16MSfEVz-mIPYXPO6WmJLb4YaaK3wDrD3cQ3qYkZ0N6A'
title: 'CMS 155 - Weight Assessment and Counseling for Nutrition and Physical Activity for Children and Adolescents'
date: '2022-04-21T21:07:00.893Z'
version: 33
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms155v10'
source: 'https://drive.google.com/open?id=16MSfEVz-mIPYXPO6WmJLb4YaaK3wDrD3cQ3qYkZ0N6A'
wikigdrive: 'b491a582da59717ee958da4919ee86a43fce25fb'
menu:
  main:
    name: 'CMS 155 - Weight Assessment and Counseling for Nutrition and Physical Activity for Children and Adolescents'
    identifier: '16MSfEVz-mIPYXPO6WmJLb4YaaK3wDrD3cQ3qYkZ0N6A'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 4030
---
## Overview  
  
[CMS155v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v8&showresulttype=Measure) (2020)  
[CMS155v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v9&showresulttype=Measure) (2021)  
[CMS155v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS155v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS155v10</td>
<td>–</td>
<td>–</td>
<td>239</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 3-17 years of age who had an outpatient visit with a Primary Care Physician (PCP) or Obstetrician/Gynecologist (OB/GYN) and who had evidence of the following during the measurement period. Three rates are reported.</td>
</tr>
<tr>
<td>Percentage of patients with height, weight, and body mass index (BMI) percentile documentation</td>
<td>Percentage of patients with counseling for nutrition</td>
<td>Percentage of patients with counseling for physical activity</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 3-17 years of age with at least one outpatient visit with a primary care physician (PCP) or an obstetrician/gynecologist (OB/GYN) during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Patients who have a diagnosis of pregnancy during the measurement period.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who had a height, weight and body mass index (BMI) percentile recorded during the measurement period</td>
<td>Patients who had counseling for nutrition during the measurement period</td>
<td>Patients who had counseling for physical activity during the measurement period</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td><strong>–</strong></td>
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
<td><ul><li><p>3-11 years</p></li><li><p>12-17 years</p></li></ul></td>
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
<td>Community/Population Health</td>
</tr>

</table>


  
## Clinical Instructions  

  
### New UI Visit Encounter (valid RC202109+)  


  
### Original Visit Encounter  

2.  Height, weight and BMI observations will need to be documented for the patient within the Visit encounter.  If the patient's BMI is out of range, a warning message will display asking if a dietary consult order should be created.  User should click Ok to have the Dietary Consult order ordered within the Plan section of the Visit encounter.  An order item of Physical Activity consult should also be ordered as well.
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Encounter, Performed: Preventive Care Services - Group Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1027</td>
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
<td>Diagnosis: Pregnancy</td>
<td>2.16.840.1.113883.3.526.3.378</td>
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
<td>Intervention, Performed: Counseling for Nutrition</td>
<td>2.16.840.1.113883.3.464.1003.195.12.1003</td>
</tr>
<tr>
<td>Intervention, Performed: Counseling for Physical Activity</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1035</td>
</tr>
<tr>
<td>Physical Exam, Performed: BMI percentile</td>
<td>2.16.840.1.113883.3.464.1003.121.12.1012</td>
</tr>
<tr>
<td>Physical Exam, Performed: Height</td>
<td>2.16.840.1.113883.3.464.1003.121.12.1014</td>
</tr>
<tr>
<td>Physical Exam, Performed: Weight</td>
<td>2.16.840.1.113883.3.464.1003.121.12.1015</td>
</tr>

</table>

  
## **Source(s)**  
  
[eCQI CMS155](https://ecqi.healthit.gov/ecqm/ep/2022/cms155v10)
