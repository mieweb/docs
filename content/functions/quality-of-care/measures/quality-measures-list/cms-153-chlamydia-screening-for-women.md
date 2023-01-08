---
id: '1d5dB2sKPtEjM_K06wTghV8MN4HR1rpmu9yfIvqgoEIs'
title: 'CMS 153 - Chlamydia Screening for Women'
date: '2022-04-21T20:18:56.392Z'
version: 41
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v10&showresulttype=Measure'
  - '../../../order-and-result-management/observation-code-merging.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms153v10'
source: 'https://drive.google.com/open?id=1d5dB2sKPtEjM_K06wTghV8MN4HR1rpmu9yfIvqgoEIs'
wikigdrive: '75ce6caac9758dd5c192aa0655418de357318c8a'
menu:
  main:
    name: 'CMS 153 - Chlamydia Screening for Women'
    identifier: '1d5dB2sKPtEjM_K06wTghV8MN4HR1rpmu9yfIvqgoEIs'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 4010
---
## Overview  
  
[CMS153v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v8&showresulttype=Measure) (2020)  
[CMS153v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v9&showresulttype=Measure) (2021)  
[CMS153v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS153v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS153v10</td>
<td>–</td>
<td>–</td>
<td>310</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of women 16-24 years of age who were identified as sexually active and who had at least one test for chlamydia during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Women 16 to 24 years of age who are sexually active and who had a visit in the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Women who are only eligible for the initial population due to a pregnancy test and who had an order for an x-ray or for a specified medication within 7 days of the pregnancy test.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Women with at least one chlamydia test during the measurement period</td>
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
<td>Stratum 1: Patients age 16-20 
Stratum 2: Patients age 21-24</td>
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
  
Ensure all sexually active women aged 16-24 are screened for chlamydia at least once within the measurement period. Use either the Test and Procedures section of the encounter, or enter the appropriate observation to the chart using the Observations chart tab.  
{{% tip %}}

Regardless of how the chlamydia screening observation is added to the chart, clients will need to ensure the appropriate observation is configured with the required LOINC. Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the *chlamydia* observations to determine if multiple [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).
{{% /tip %}}
1. While documenting the Visit encounter, document the results of a chlamydia screening one of two ways:
2. <strong>Option 1: Tests and Procedures Section</strong>
   1. Open the Tests and Procedures section.
   2. Using the autocomplete, begin typing Chlamydia, and select the appropriate screening.
   3. Click the Add to Exam button.
   4. After adding the new section, open the screening section and enter the results.
   5. Click the Next button, or close the section.
1. <strong>Option 2: Add Observation using Observations Chart Tab</strong>
   1. Navigate to the patient chart.
   2. Open the Observations tab of the Medical Records chart tab.
   3. Click the Add Observation link in the upper-right corner.
   4. Begin typing the name of the observation and select the appropriate one.
   5. Enter the Date the screening was performed, its Result, and any relevant Comments.
   6. Click the Submit button.
1. Continue documenting the encounter, as needed.
2. When completed, Close and Archive the encounter
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Sexually Active</td>
<td>2.16.840.1.113883.3.464.1003.121.12.1040</td>
</tr>
<tr>
<td>Diagnosis: Complications of Pregnancy, Childbirth and the Puerperium</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1012</td>
</tr>
<tr>
<td>Diagnosis: Diagnoses Used to Indicate Sexual Activity</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1018</td>
</tr>
<tr>
<td>Diagnosis: HIV</td>
<td>2.16.840.1.113883.3.464.1003.120.12.1003</td>
</tr>
<tr>
<td>Diagnostic Study, Order: Diagnostic Studies During Pregnancy</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1008</td>
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
<td>Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
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
<td>Laboratory Test, Order: Lab Tests During Pregnancy</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1007</td>
</tr>
<tr>
<td>Laboratory Test, Order: Lab Tests for Sexually Transmitted Infections</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1051</td>
</tr>
<tr>
<td>Laboratory Test, Order: Pap Test</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1017</td>
</tr>
<tr>
<td>Laboratory Test, Order: Pregnancy Test</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1011</td>
</tr>
<tr>
<td>Medication, Active: Contraceptive Medications</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1080</td>
</tr>
<tr>
<td>Medication, Order: Contraceptive Medications</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1080)</td>
</tr>
<tr>
<td>Medication, Order: Isotretinoin</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1143</td>
</tr>
<tr>
<td>Procedure, Performed: Procedures Used to Indicate Sexual Activity</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1017</td>
</tr>

</table>

  
### Denominator Exclusions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Order: X-Ray Study (all inclusive)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1034</td>
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
<td>Laboratory Test, Performed: Chlamydia Screening</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1052</td>
</tr>

</table>

  
## **Source(s)**  

[eCQI CMS153](https://ecqi.healthit.gov/ecqm/ep/2022/cms153v10)
