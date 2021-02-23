---
title: "CMS 165 - Controlling High Blood Pressure"
date: 2020-02-27T20:59:30.619Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-165-controlling-high-blood-.html"
version: 11
id: 1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc
source: https://drive.google.com/open?id=1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc
menu:
    main:
        name: "CMS 165 - Controlling High Blood Pressure"
        identifier: "1w1nSG7trWKy56aGj6P6YIPjsxywmUKlXmAMhL7Fx5rc"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 4050
---
## Medical Codify

[CMS165v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS165&showresult=CMS165v5&showresulttype=Measure) (2017)

[CMS165v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS165&showresult=CMS165v6&showresulttype=Measure) (2018)

[CMS165v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS165&showresult=CMS165v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients 18-85 years of age who had a diagnosis of hypertension and whose blood pressure was adequately controlled (<140/90mmHg) during the measurement period.

**Initial Patient Population**:  Patients 18-85 years of age who had a diagnosis of essential hypertension within the first six months of the measurement period or any time prior to the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Patients whose blood pressure at the most recent visit is adequately controlled (systolic blood pressure < 140 mmHg and diastolic blood pressure < 90 mmHg) during the measurement period.

**Inverse Measure**:  No

## Clinical Instructions

Using the Vitals section of the encounter, ensure blood pressure is recorded correctly and the systolic and diastolic observations are coded with the appropriate LOINC (i.e., 8480-6 and 8462-4). The patient also needs a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter, within the first six months or more of the measurement period in order to populate the denominator.

* While documenting the encounter, ensure the blood pressure is recorded under the Vitals section of the encounter.
* Patient must have a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter.
* Continue documenting the encounter as appropriate.
* When complete, Close and Archive the encounter.

## Evidence

### Initial Patient Population

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
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
    <td>Encounter, Performed: Office Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
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
    <td>Diagnosis: Essential Hypertension</td>
    <td>2.16.840.1.113883.3.464.1003.104.12.1011</td>
  </tr>
</table>

### Denominator

Equals Initial Population

### Numerator

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Physical Exam, Performed: Diastolic blood pressure</td>
    <td>LOINC version 2.63 Code 8462-4</td>
  </tr>
  <tr>
    <td>Physical Exam, Performed: Systolic blood pressure</td>
    <td>LOINC version 2.63 Code 8480-6</td>
  </tr>
</table>

### Denominator Exclusion

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Diagnosis: Chronic Kidney Disease, Stage 5</td>
    <td>2.16.840.1.113883.3.526.3.1002</td>
  </tr>
  <tr>
    <td>Diagnosis: End Stage Renal Disease</td>
    <td>2.16.840.1.113883.3.526.3.353</td>
  </tr>
  <tr>
    <td>Diagnosis: Essential Hypertension</td>
    <td>2.16.840.1.113883.3.464.1003.104.12.1011</td>
  </tr>
  <tr>
    <td>Diagnosis: Kidney Transplant Recipient</td>
    <td>2.16.840.1.113883.3.464.1003.109.12.1029</td>
  </tr>
  <tr>
    <td>Diagnosis: Pregnancy</td>
    <td>2.16.840.1.113883.3.526.3.378</td>
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
    <td>Procedure, Performed: Dialysis Services</td>
    <td>2.16.840.1.113883.3.464.1003.109.12.1013</td>
  </tr>
  <tr>
    <td>Procedure, Performed: Kidney Transplant</td>
    <td>2.16.840.1.113883.3.464.1003.109.12.1012</td>
  </tr>
  <tr>
    <td>Procedure, Performed: Vascular Access for Dialysis</td>
    <td>2.16.840.1.113883.3.464.1003.109.12.1011</td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS165&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

