---
id: '14wvlim1AnRhduRaQX-kIxULCZh7jbdP7WufRbDfQ5vc'
title: 'CMS 127 - Pneumococcal Vaccination Status for Older Adults'
date: '2022-04-19T20:15:17.026Z'
version: 32
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ec/2022/cms127v10'
source: 'https://drive.google.com/open?id=14wvlim1AnRhduRaQX-kIxULCZh7jbdP7WufRbDfQ5vc'
wikigdrive: 'a3f05807f0c9b9af2c79d6ec32e61b6933caadae'
menu:
  main:
    name: 'CMS 127 - Pneumococcal Vaccination Status for Older Adults'
    identifier: '14wvlim1AnRhduRaQX-kIxULCZh7jbdP7WufRbDfQ5vc'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3900
---
## Overview  
  
[CMS127v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v8&showresulttype=Measure) (2020)  
[CMS127v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v9&showresulttype=Measure) (2021)  
[CMS127v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS127v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS127v10</td>
<td>–</td>
<td>–</td>
<td>111</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 66 years of age and older who have ever received a pneumococcal vaccine</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 66 years of age and older with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Exclude patients who are in hospice care for any part of the measurement period.</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who received a pneumococcal vaccination on or after their 60th birthday and before the end of the measurement period; or ever had an adverse reaction to the vaccine before the end of the measurement period</td>
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

  
## Clinical Instructions  
  
Ensure all patients that are 65 years of age or older have received a pneumococcal vaccine or report having received a vaccine. Recording the receipt of the immunization or the administration of the vaccine can be done within or outside of the encounter:
1. <strong>Option 1: Record the Receipt of Pneumococcal Vaccination (Historical)</strong>
   1. <strong>Within Encounter</strong>
      1. Open the Immunizations/Injections section of the encounter
      2. Using the Description autocomplete, begin typing the name of the immunization
      3. Add the Date and any Reactions/Comments
      4. Click the Add button
      5. Click the Next button, or close the section
      6. Continue documenting the encounter as needed
      7. When completed, Close and Archive the encounter
   1. <strong>Outside Encounter</strong>
      1. While in the chart, navigate to MAR/Injections from the Medical Record chart tab
      2. Click the Quick Add link in the upper-right of the page
      3. Record any historical injections
      4. Click the Submit button
1. <strong>Option 2: Document the Administration of Pneumococcal Vaccination</strong>
   1. <strong>Within Encounter</strong>
      1. Open the Tests and Procedures section of the encounter
      2. Using the autocomplete, begin typing the name of the vaccination being administered
      3. Click the Add to Exam button
      4. After adding the new section, open the section, fill in all required fields, record the findings, and set to Result.
      5. Click the Next button, or close the section
      6. Continue documenting the encounter as needed
      7. When completed, Close and Archive the encounter
   1. <strong>Outside Encounter</strong>
      1. While in the chart, navigate to MAR/Injections from the Medical Record chart tab
      2. Click the Add Imm/Inj link in the upper-right of the page
      3. Fill in all required fields
      4. Click the Submit button
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Encounter, Performed: Office or other outpatient visit for the evaluation and management of an established patient, that may not require the presence of a physician or other qualified health care professional. Usually, the presenting problem(s) are minimal.</td>
<td>CPT Code 99211</td>
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
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Nursing Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.11.1065</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
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
<td>Diagnosis: Adverse reaction to vaccine product containing Streptococcus pneumoniae antigen (disorder)</td>
<td>SNOMEDCT Code 293116002</td>
</tr>
<tr>
<td>Immunization, Administered: Pneumococcal Polysaccharide 23 Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1089</td>
</tr>
<tr>
<td>rocedure, Performed: Pneumococcal polysaccharide vaccine, 23-valent (PPSV23), adult or immunosuppressed patient dosage, when administered to individuals 2 years or older, for subcutaneous or intramuscular use</td>
<td>CPT Code 90732</td>
</tr>

</table>

  
## **Source(s)**  
  
[eCQI CMS127](https://ecqi.healthit.gov/ecqm/ec/2022/cms127v10)
