---
id: '1bktV0BYSKkWBzLv0AMyxNlGX_3BH4lXBMzqSjQk7WQ8'
title: 'CMS 147 - Preventive Care and Screening: Influenza Immunization'
date: '2022-04-21T14:44:56.733Z'
version: 40
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms147v11'
source: 'https://drive.google.com/open?id=1bktV0BYSKkWBzLv0AMyxNlGX_3BH4lXBMzqSjQk7WQ8'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
## Overview

[CMS147v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v9&showresulttype=Measure) (2020)

[CMS147v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v10&showresulttype=Measure) (2021)

[CMS147v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS147v11&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS147v11</td>
<td>0041e</td>
<td>0041</td>
<td>110</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 6 months and older seen for a visit between October 1 and March 31 who received an influenza immunization OR who reported previous receipt of an influenza immunization</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 6 months and older seen for a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population and seen for a visit between October 1 and March 31</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who received an influenza immunization OR who reported previous receipt of an influenza immunization</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li>Documentation of medical reason(s) for not receiving influenza immunization (e.g., patient allergy, other medical reasons).</li><li>Documentation of patient reason(s) for not receiving influenza immunization (e.g., patient declined, other patient reasons).</li><li>Documentation of system reason(s) for not receiving influenza immunization (e.g., vaccine not available, other system reasons).</li></ul></td>
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

Ensure all patients that are 6 months old or older have received a flu vaccination or reports having received a flu vaccine. Recording the receipt of the flu immunization or the administration of the vaccine can be done within or outside of the encounter:

1. <strong>Option 1: Record the Receipt of Flu Immunization (Historical)</strong>
    * <strong>Within Encounter</strong>
        1. Open the Immunizations/Injections section of the encounter
        2. Using the Description autocomplete, begin typing the name of the immunization
        3. Add the Date and any Reactions/Comments
        4. Click the Add button
        5. Click the Next button, or close the section
        6. Continue documenting the encounter as needed
        7. When completed, Close and Archive the encounter
    * <strong>Outside Encounter</strong>
        1. While in the chart, navigate to MAR/Injections from the Medical Record chart tab
        2. Click the Quick Add link in the upper-right of the page
        3. Record any historical injections
        4. Click the Submit button
2. <strong>Option 2: Document the Administration of Flu Vaccine</strong>
    * <strong>Within Encounter</strong>
        1. Open the Tests and Procedures section of the encounter
        2. Using the autocomplete, begin typing the name of the vaccination being administered
        3. Click the Add to Exam button
        4. After adding the new section, open the section and fill in all required fields
        5. Click the Next button, or close the section
        6. Continue documenting the encounter as needed
        7. When completed, Close and Archive the encounter
    * <strong>Outside Encounter</strong>
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
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Nursing Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1013</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter-Influenza</td>
<td>2.16.840.1.113883.3.526.3.1252</td>
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
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Patient Provider Interaction</td>
<td>2.16.840.1.113883.3.526.3.1012</td>
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
<td>Procedure, Performed: Hemodialysis</td>
<td>2.16.840.1.113883.3.526.3.1083</td>
</tr>
<tr>
<td>Procedure, Performed: Peritoneal Dialysis</td>
<td>2.16.840.1.113883.3.526.3.1084</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Immunization, Administered: Influenza Vaccine</td>
<td>2.16.840.1.113883.3.526.3.1254</td>
</tr>
<tr>
<td>Procedure, Performed: Influenza Vaccination</td>
<td>2.16.840.1.113883.3.526.3.402</td>
</tr>
</table>

### Denominator Exceptions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Allergy/Intolerance: Egg Substance</td>
<td>2.16.840.1.113883.3.526.3.1537</td>
</tr>
<tr>
<td>Allergy/Intolerance: Influenza Vaccination</td>
<td>2.16.840.1.113883.3.526.3.402</td>
</tr>
<tr>
<td>Allergy/Intolerance: Influenza Vaccine</td>
<td>2.16.840.1.113883.3.526.3.1254</td>
</tr>
<tr>
<td>Diagnosis: Allergy to Eggs</td>
<td>2.16.840.1.113883.3.526.3.1253</td>
</tr>
<tr>
<td>Diagnosis: Allergy to Influenza Vaccine</td>
<td>2.16.840.1.113883.3.526.3.1256</td>
</tr>
<tr>
<td>Diagnosis: Intolerance to Influenza Vaccine</td>
<td>2.16.840.1.113883.3.526.3.1257</td>
</tr>
</table>

## Source(s)

[eCQI CMS147](https://ecqi.healthit.gov/ecqm/ep/2022/cms147v11)
