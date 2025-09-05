---
id: '1MR0uCXDGLsP0rlSwgFdVRKCohi_d5Sfy_55wV1xV7nc'
title: 'CMS 117 - Childhood Immunization Status'
date: '2022-05-23T12:27:08.410Z'
version: 66
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms117v10'
source: 'https://drive.google.com/open?id=1MR0uCXDGLsP0rlSwgFdVRKCohi_d5Sfy_55wV1xV7nc'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
## Overview

[CMS117v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v8&showresulttype=Measure) (2020)

[CMS117v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v9&showresulttype=Measure) (2021)

[CMS117v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS117v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS117v10</td>
<td>–</td>
<td>–</td>
<td>240</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of children 2 years of age who had four diphtheria, tetanus and acellular pertussis (DTaP); three polio (IPV), one measles, mumps and rubella (MMR); three or four H influenza type B (Hib); three hepatitis B (Hep B); one chicken pox (VZV); four pneumococcal conjugate (PCV); one hepatitis A (Hep A); two or three rotavirus (RV); and two influenza (flu) vaccines by their second birthday</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Children who turn 2 years of age during the measurement period and who have a visit during the measurement period</td>
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
<td>Children who have evidence showing they received recommended vaccines, had documented history of the illness, had a seropositive test result, or had an allergic reaction to the vaccine by their second birthday</td>
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

Ensure all children turning 2 years of age during the measurement period have had a visit and received all of the necessary immunizations. Recording the receipt of the immunizations or the administration of the vaccines can be done within or outside of an encounter.

### Workflow

1. <strong>Option 1: Record the Receipt of Immunizations (Historical)</strong>
    1. <strong>Within Encounter</strong>
        1. Open the Immunizations/Injections section of the encounter
        2. Using the Description autocomplete, begin typing the name of the immunizations
        3. Add the Date and any Reactions/Comments
        4. Click the Add button
        5. Click the Next button, or close the section
        6. Continue documenting the encounter as needed
        7. When completed, Close and Archive the encounter.
    2. <strong>Outside Encounter</strong>
        1. While in the chart, navigate to MAR/Injections from the Medical Record chart tab
        2. Click the Quick Add link in the upper-right of the page
        3. Record any historical injections
        4. Click the Submit button
2. <strong>Option 2: Document the Administration of the Vaccines</strong>
    1. <strong>Within Encounter</strong>
        1. Open the Tests and Procedures section of the encounter
        2. Using the autocomplete, begin typing the name of the vaccination being administered
        3. Click the Add to Exam button
        4. After adding the new section, open the section and fill in all required fields
        5. Click the Next button, or close the section
        6. Continue documenting the encounter as needed
        7. When completed, Close and Archive the encounter
    2. <strong>Outside Encounter</strong>
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
<td>Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
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
<td>Diagnosis: Adverse reaction to vaccine product containing Hepatitis A virus antigen (disorder)</td>
<td>SNOMEDCT Code 293126009</td>
</tr>
<tr>
<td>Diagnosis: Adverse reaction to vaccine product containing Human poliovirus antigen (disorder)</td>
<td>SNOMEDCT Code 293117006</td>
</tr>
<tr>
<td>Diagnosis: Adverse reaction to vaccine product containing Influenza virus antigen (disorder)</td>
<td>SNOMEDCT Code 420113004</td>
</tr>
<tr>
<td>Diagnosis: Adverse reaction to vaccine product containing Streptococcus pneumoniae antigen (disorder)</td>
<td>SNOMEDCT Code 293116002</td>
</tr>
<tr>
<td>Diagnosis: Anaphylactic Reaction to Common Baker's Yeast</td>
<td>2.16.840.1.113883.3.464.1003.199.12.1032</td>
</tr>
<tr>
<td>Diagnosis: Anaphylactic Reaction to DTaP Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.199.12.1031</td>
</tr>
<tr>
<td>Diagnosis: Anaphylaxis due to Haemophilus influenzae type b vaccine (disorder)</td>
<td>SNOMEDCT Code 433621000124101</td>
</tr>
<tr>
<td>Diagnosis: Anaphylaxis due to Hepatitis B vaccine (disorder)</td>
<td>SNOMEDCT Code 428321000124101</td>
</tr>
<tr>
<td>Diagnosis: Anaphylaxis due to rotavirus vaccine (disorder)</td>
<td>SNOMEDCT Code 428331000124103</td>
</tr>
<tr>
<td>Diagnosis: Disorders of the Immune System</td>
<td>2.16.840.1.113883.3.464.1003.120.12.1001</td>
</tr>
<tr>
<td>Diagnosis: Encephalopathy due to Childhood Vaccination</td>
<td>2.16.840.1.113883.3.464.1003.114.12.1007</td>
</tr>
<tr>
<td>Diagnosis: Hepatitis A</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1024</td>
</tr>
<tr>
<td>Diagnosis: Hepatitis B</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1025</td>
</tr>
<tr>
<td>Diagnosis: HIV</td>
<td>2.16.840.1.113883.3.464.1003.120.12.1003</td>
</tr>
<tr>
<td>Diagnosis: Intussusception</td>
<td>2.16.840.1.113883.3.464.1003.199.12.1056</td>
</tr>
<tr>
<td>Diagnosis: Malignant Neoplasm of Lymphatic and Hematopoietic Tissue</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1009</td>
</tr>
<tr>
<td>Diagnosis: Measles</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1053</td>
</tr>
<tr>
<td>Diagnosis: Mumps</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1032</td>
</tr>
<tr>
<td>Diagnosis: Neomycin adverse reaction (disorder)</td>
<td>SNOMEDCT Code 292927007</td>
</tr>
<tr>
<td>Diagnosis: Polymyxin B adverse reaction (disorder)</td>
<td>SNOMEDCT Code 292992006</td>
</tr>
<tr>
<td>Diagnosis: Rubella</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1037</td>
</tr>
<tr>
<td>Diagnosis: Severe Combined Immunodeficiency</td>
<td>2.16.840.1.113883.3.464.1003.120.12.1007</td>
</tr>
<tr>
<td>Diagnosis: Streptomycin adverse reaction (disorder)</td>
<td>SNOMEDCT Code 292925004</td>
</tr>
<tr>
<td>Diagnosis: Varicella Zoster</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1039</td>
</tr>
<tr>
<td>Immunization, Administered: DTaP Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1214</td>
</tr>
<tr>
<td>Immunization, Administered: Hepatitis A Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1215</td>
</tr>
<tr>
<td>Immunization, Administered: Hepatitis B Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1216</td>
</tr>
<tr>
<td>Immunization, Administered: Hib Vaccine (3 dose schedule)</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1083</td>
</tr>
<tr>
<td>Immunization, Administered: Hib Vaccine (4 dose schedule)</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1085</td>
</tr>
<tr>
<td>Immunization, Administered: Inactivated Polio Vaccine (IPV)</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1219</td>
</tr>
<tr>
<td>Immunization, Administered: Influenza Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1218</td>
</tr>
<tr>
<td>Immunization, Administered: Influenza Virus LAIV Immunization</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1087</td>
</tr>
<tr>
<td>Immunization, Administered: Measles, Mumps and Rubella (MMR) Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1224</td>
</tr>
<tr>
<td>Immunization, Administered: Pneumococcal Conjugate Vaccine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1221</td>
</tr>
<tr>
<td>Immunization, Administered: Rotavirus Vaccine (3 dose schedule)</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1223</td>
</tr>
<tr>
<td>Immunization, Administered: rotavirus, live, monovalent vaccine</td>
<td>CVX Code 119</td>
</tr>
<tr>
<td>Immunization, Administered: Varicella Zoster Vaccine (VZV)</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1170</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Anti Hepatitis A IgG Antigen Test</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1033</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Anti Hepatitis B Virus Surface Ab</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1073</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Measles Antibody Test (IgG Antibody presence)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1060</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Measles Antibody Test (IgG Antibody Titer)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1059</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Mumps Antibody Test (IgG Antibody presence)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1062</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Mumps Antibody Test (IgG Antibody Titer)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1061</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Rubella Antibody Test (IgG Antibody presence)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1064</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Rubella Antibody Test (IgG Antibody Titer)"</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1063</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Varicella Zoster Antibody Test (IgG Antibody Presence)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1067</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Varicella Zoster Antibody Test (IgG Antibody Titer)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1066</td>
</tr>
<tr>
<td>Procedure, Performed: DTaP Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1022</td>
</tr>
<tr>
<td>Procedure, Performed: Hepatitis A Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1041</td>
</tr>
<tr>
<td>Procedure, Performed: Hepatitis B Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1042</td>
</tr>
<tr>
<td>Procedure, Performed: Hib Vaccine (3 dose schedule) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1084</td>
</tr>
<tr>
<td>Procedure, Performed: Hib Vaccine (4 dose schedule) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1086</td>
</tr>
<tr>
<td>Procedure, Performed: Inactivated Polio Vaccine (IPV) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1045</td>
</tr>
<tr>
<td>Procedure, Performed: Influenza Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1044</td>
</tr>
<tr>
<td>Procedure, Performed: Influenza Virus LAIV Procedure</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1088</td>
</tr>
<tr>
<td>Procedure, Performed: Measles, Mumps and Rubella (MMR) Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1031</td>
</tr>
<tr>
<td>Procedure, Performed: Pneumococcal Conjugate Vaccine Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1046</td>
</tr>
<tr>
<td>Procedure, Performed: Rotavirus Vaccine (2 dose schedule) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1048</td>
</tr>
<tr>
<td>Procedure, Performed: Rotavirus Vaccine (3 dose schedule) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1047</td>
</tr>
<tr>
<td>Procedure, Performed: Varicella Zoster Vaccine (VZV) Administered</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1040</td>
</tr>
</table>

## Source(s)

[eCQI CMS117](https://ecqi.healthit.gov/ecqm/ep/2022/cms117v10)
