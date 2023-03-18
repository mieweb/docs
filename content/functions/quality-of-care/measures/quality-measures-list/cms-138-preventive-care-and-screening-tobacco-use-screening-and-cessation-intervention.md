---
id: '1H4Ws_OMCIM-x7QICksd0M1RbYz9CVRKgvNUb05tJhKA'
title: 'CMS 138 - Preventive Care and Screening: Tobacco Use: Screening and Cessation Intervention'
date: '2022-04-22T14:53:39.158Z'
version: 33
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS138&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet'
source: 'https://drive.google.com/open?id=1H4Ws_OMCIM-x7QICksd0M1RbYz9CVRKgvNUb05tJhKA'
wikigdrive: '2170bf47fa5a6c78b65673f5062de64818a1f71c'
menu:
  main:
    name: 'CMS 138 - Preventive Care and Screening: Tobacco Use: Screening and Cessation Intervention'
    identifier: '1H4Ws_OMCIM-x7QICksd0M1RbYz9CVRKgvNUb05tJhKA'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3950
---
## Overview  
  
CMS138v8 (2020)  
CMS138v9 (2021)  
CMS138v10 (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS138v10</td>
<td>0028e</td>
<td>0028</td>
<td>226</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older who were screened for tobacco use one or more times during the measurement period AND who received tobacco cessation intervention if identified as a tobacco user</td>
</tr>
<tr>
<td>Percentage of patients aged 18 years and older who were screened for tobacco use one or more times during the measurement period</td>
<td>Percentage of patients aged 18 years and older who were identified as a tobacco user who received tobacco cessation intervention</td>
<td>Percentage of patients aged 18 years and older who were screened for tobacco use one or more times during the measurement period AND who received tobacco cessation intervention if identified as a tobacco user</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 18 years and older seen for at least two visits or at least one preventive visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
<td>Equals Initial Population who were screened for tobacco use and identified as a tobacco user</td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who were screened for tobacco use at least once during the measurement period</td>
<td>Patients who received tobacco cessation intervention</td>
<td>Patients who were screened for tobacco use at least once during the measurement period AND who received tobacco cessation intervention if identified as a tobacco user</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>Documentation of medical reason(s) for not screening for tobacco use (e.g., limited life expectancy, other medical reason)</td>
<td>Documentation of medical reason(s) for not providing tobacco cessation intervention (e.g., limited life expectancy, other medical reason)</td>
<td>Documentation of medical reason(s) for not screening for tobacco use OR for not providing tobacco cessation intervention for patients identified as tobacco users (e.g., limited life expectancy, other medical reason)</td>
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
  
Using the Social History section of the encounter, ensure smoking status is documented and additional details are noted with the respective status (i.e., current smoker, former smoker, etc.). Cessation counseling or medications should be noted, when applicable, in order to populate the numerator appropriately.
1. While documenting the Visit Encounter, open the Social History section.
2. Assess Smoking Status: (select one)
   1. Current every day smoker
   2. Current some day smoker
   3. Former smoker
   4. Never smoker
   5. Heavy tobacco smoker
   6. Light tobacco smoker
   7. Smoker, current status unknown
   8. Unknown if ever smoked
1. Based on the selected smoking status, additional fields/choices may need addressed (e.g., Age Started, Age Quit, Cessation Counseling, etc.). Answer accordingly.
{{% note %}}
   When marking the radio button for Cessation Counseling, the date MUST be entered as well. Selecting only the radio button or providing only a date of counseling will not satisfy the measure.
{{% /note %}}
     
2. Continue documenting the encounter as appropriate
3. When complete, Close and Archive the encounter
  
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
<td>Encounter, Performed: Health behavior assessment, or re-assessment (ie, health-focused clinical interview, behavioral observations, clinical decision making)</td>
<td>CPT Code 96156</td>
</tr>
<tr>
<td>Encounter, Performed: Health behavior intervention, individual, face-to-face; initial 30 minutes</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Occupational Therapy Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1011</td>
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
<td>Encounter, Performed: Ophthalmological Services</td>
<td>2.16.840.1.113883.3.526.3.1285</td>
</tr>
<tr>
<td>Encounter, Performed: Physical Therapy Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1022</td>
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
<td>Encounter, Performed: Preventive Care Services-Individual Counseling</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1026</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Diagnostic Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1492</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Psychotherapy</td>
<td>2.16.840.1.113883.3.526.3.1496</td>
</tr>
<tr>
<td>Encounter, Performed: Psychoanalysis</td>
<td>2.16.840.1.113883.3.526.3.1141</td>
</tr>
<tr>
<td>Encounter, Performed: Speech and Hearing Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1530</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
</tr>

</table>

  
### Denominator  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Tobacco Use Screening</td>
<td>2.16.840.1.113883.3.526.3.1278</td>
</tr>

</table>

  
### Numerator  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Intervention, Performed: Tobacco Use Cessation Counseling</td>
<td>2.16.840.1.113883.3.526.3.509</td>
</tr>
<tr>
<td>Medication, Active: Tobacco Use Cessation Pharmacotherapy</td>
<td>2.16.840.1.113883.3.526.3.1190</td>
</tr>
<tr>
<td>Medication, Order: Tobacco Use Cessation Pharmacotherapy</td>
<td>2.16.840.1.113883.3.526.3.1190</td>
</tr>

</table>

  
### Denominator Exceptions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Not Performed: Tobacco Use Screening</td>
<td>2.16.840.1.113883.3.526.3.1278</td>
</tr>
<tr>
<td>Diagnosis: Limited Life Expectancy</td>
<td>2.16.840.1.113883.3.526.3.1259</td>
</tr>

</table>

  
## Source(s)  
  
[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS138&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

