---
title: "CMS 139 - Falls: Screening for Future Fall Risk"
date: 2020-02-27T21:30:15.182Z
url: "cms-139-falls-screening-for-future-fall-risk.md"
author: Alan Quandt
id: 1DHzhLkbGFoWJEFq1lv1Ox2i0Zu4T0f6_vstSxKFg0rA
source: https://drive.google.com/open?id=1DHzhLkbGFoWJEFq1lv1Ox2i0Zu4T0f6_vstSxKFg0rA
menu:
    main:
        name: "CMS 139 - Falls: Screening for Future Fall Risk"
        identifier: "1DHzhLkbGFoWJEFq1lv1Ox2i0Zu4T0f6_vstSxKFg0rA"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3960
---
[CMS139v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms139&showresult=CMS139v5&showresulttype=Measure) (2017)

[CMS139v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms139&showresult=CMS139v6&showresulttype=Measure) (2018)

[CMS139v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms139&showresult=CMS139v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients 65 years of age and older who were screened for future fall risk during the measurement period.

**Initial Patient Population**:  Patients aged 65 years and older with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Patients who were screened for future fall risk at least once within the measurement period.

**Inverse Measure**:  No

## Clinical Instructions

Ensure all 65+ year-old patients are screened for future fall risk, at least once within the measurement period. Use the Test and Procedures section of the encounter to order and perform the Fall Risk Screening. 

{{% note %}}

Each system/database will need a [Fall Risk Screening order and flowsheet created](flowsheets-editor.md), in order to result the findings in the Tests and Procedures section of the encounter. The flowsheet must be configured with the Fall Risk Performed LOIN-C 73830-2.

{{% /note %}}


While documenting the Visit encounter, record the Fall Risk Screening procedure in the Tests and Procedures section of the Visit encounter.

* Open the Tests and Procedures section.
* Using the autocomplete, begin typing Fall Risk Screening.
* Click the Add to Exam button.
* After adding the new section, open the Fall Risk Screening and document the findings and complete the questionnaire.
* Click the Next button, or close the section.
* Continue documenting the encounter, as needed.
* When completed, Close and Archive the encounter.

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
    <td>Encounter, Performed: Audiology Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1066</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Face-to-Face Interaction</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1048</td>
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
    <td>Encounter, Performed: Office Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Ophthalmological Services</td>
    <td>2.16.840.1.113883.3.526.3.1285</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Preventive Care Services-Individual Counseling</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1026</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
  </tr>
</table>

### Denominator

Equal to Initial Patient Population

### Numerator

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Assessment, Performed: Falls Screening</td>
    <td>2.16.840.1.113883.3.464.1003.118.12.1028</td>
  </tr>
</table>

### Denominator Exclusion

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
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
    <td>Assessment, Performed: Patient not ambulatory</td>
    <td>2.16.840.1.113883.3.464.1003.118.12.1009</td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=cms139&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

[Fall Risk Checklist](https://www.cdc.gov/steadi/pdf/STEADI-Form-RiskFactorsCk-508.pdf)

[Fall Risk Algorithm](https://www.cdc.gov/steadi/pdf/STEADI-Algorithm-508.pdf)

