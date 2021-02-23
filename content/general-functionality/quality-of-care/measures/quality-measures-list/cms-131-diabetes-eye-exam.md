---
title: "CMS 131 - Diabetes: Eye Exam"
date: 2020-02-27T21:30:11.746Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-131-diabetes-eye-exam.html"
author: aquandt
version: 15
id: 1rW73q4RgXZMILmaSdbqGoQqQVkl9eXloJVe_ef-n_Sg
source: https://drive.google.com/open?id=1rW73q4RgXZMILmaSdbqGoQqQVkl9eXloJVe_ef-n_Sg
menu:
    main:
        name: "CMS 131 - Diabetes: Eye Exam"
        identifier: "1rW73q4RgXZMILmaSdbqGoQqQVkl9eXloJVe_ef-n_Sg"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3920
---
[CMS131v5 ](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS131&showresult=CMS131v5&showresulttype=Measure)(2017)

[CMS131v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS131&showresult=CMS131v6&showresulttype=Measure) (2018)

[CMS131v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS131&showresult=CMS131v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients 18-75 years of age with diabetes who had a retinal or dilated eye exam by an eye care professional during the measurement period or a negative retinal exam (no evidence of retinopathy) in the 12 months prior to the measurement period.

**Initial Patient Population**:  Patients 18-75 years of age with diabetes with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Patients with an eye screening for diabetic retinal disease. This includes diabetics who had one of the following:

* a retinal or dilated eye exam by an eye care professional in the measurement period, or 
* a negative retinal exam (no evidence of retinopathy) by an eye care professional in the year prior to the measurement period

**Inverse Measure**:  No

## Clinical Instructions

* Ensure all diabetic patients aged 18-75 have been screened for diabetic retinal disease. Use the Past Procedures section of the encounter to record a previous dilated or negative retinal exam, or use the Preventive Care section of the encounter to document the last Retinal Screening; otherwise, document a recognized eye exam by scanning and indexing an established document type (e.g., RETINAL) configured with the appropriate Concept ID.
    * <strong>Option 1: Document in the Past Procedures section</strong>
        * Open the Past Procedures section
        * Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Dilated Fundus Evaluation, Retinal Screening, etc.) with the appropriate Concept ID (e.g., LOINC).
        * Add the Date and any relevant Notes.
        * Click the Next button, or close the section
    * <strong>Option 2: Document in the Preventive Care section</strong>
        * Open the Preventive Care section
        * Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2020). This date is the Last Reported Date
        * Click the Next button, or close the section
    * <strong>Option 3: Scan/Index or Upload an accepted Document</strong> 
        * Using [WebScan](../../../document-management/scanning-and-indexing.html), scan and index the appropriate document type configured with the necessary LOINC.

## Evidence

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Diagnosis</td>
    <td>2.16.840.1.113883.3.464.1003.103.12.1001</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.526.3.1240</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.666.5.307</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.526.3.1285</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
  </tr>
  <tr>
    <td>Encounter, Performed</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
  </tr>
  <tr>
    <td>Intervention, Order</td>
    <td>2.16.840.1.113762.1.4.1108.15</td>
  </tr>
  <tr>
    <td>Intervention, Performed</td>
    <td>2.16.840.1.113762.1.4.1108.15</td>
  </tr>
  <tr>
    <td>Patient Characteristic Ethnicity</td>
    <td>2.16.840.1.114222.4.11.837</td>
  </tr>
  <tr>
    <td>Patient Characteristic Payer</td>
    <td>2.16.840.1.114222.4.11.3591</td>
  </tr>
  <tr>
    <td>Patient Characteristic Race</td>
    <td>2.16.840.1.114222.4.11.836</td>
  </tr>
  <tr>
    <td>Patient Characteristic Sex</td>
    <td>2.16.840.1.113762.1.4.1</td>
  </tr>
  <tr>
    <td>Physical Exam, Performed</td>
    <td>2.16.840.1.113883.3.464.1003.115.12.1088</td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS131&Submit=Search&icd9search=1&icd10search=1&icd10pcssearch=1&snomedsearch=1&loincsearch=1&labcorpsearch=1&questsearch=1&rxnormsearch=1&hcpcssearch=1&ndcsearch=1&cvxsearch=1&vissearch=1&vssearch=1&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

