---
title: "CMS 122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (>9%)"
date: 2020-02-27T21:30:01.872Z
url: "cms-122-diabetes-hemoglobin-a1c-hba1c-poor-control-greater9percent.md"
author: Alan Quandt
id: 1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4
source: https://drive.google.com/open?id=1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4
menu:
    main:
        name: "CMS 122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (>9%)"
        identifier: "1ZEhzvsDqZRTPEHkASIixZwonLnAxI1SbYZ2W2KbxJD4"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3870
---
### Medical Codify

[CMS122v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS122&showresult=CMS122v5&showresulttype=Measure) (2017)

[CMS122v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS122&showresult=CMS122v6&showresulttype=Measure) (2018)

[CMS122v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS122&showresult=CMS122v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients 18-75 years of age with diabetes who had hemoglobin A1c > 9.0% during the measurement period.

**Initial Patient Population**:  Patients 18-75 years of age with diabetes with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Patients whose most recent HbA1c level (performed during the measurement period) is >9.0%.

**Inverse Measure**:  Yes

### Clinical Instructions

Track all patients between the ages of 18-75 whose most recent HbA1c level, performed during the measurement period, is >9.0%. Use either the Test and Procedures section of the encounter, or add the Lab Results - Set 1 to the encounter template. 

{{% tip %}}

Regardless of how the HbA1c observation is added to the chart, clients will need to ensure that the appropriate observation is configured with LOINC 17856-6.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the Hemoglobin A1c observation to determine if multiple HbA1c [observations need to be merged](observation-code-merging.md).

{{% /tip %}}


* While documenting the Visit encounter, document the results of the HbA1c one of two ways:
    * <strong>Option 1: Test and Procedures Section</strong>
        * Open the Tests and Procedures section.
        * Using the autocomplete, begin typing Hemoglobin A1c.
        * Click the Add to Exam button.
        * After adding the new section, open the Hemoglobin A1c section and add the result.
        * Click the Next button, or close the section.
    * <strong>Option 2: Add Lab Results - Set 1 to Encounter</strong>
        * Click the Tools icon in the upper-right corner of the encounter.
        * Click the Lab Results - Set 1 header to add the section to the encounter template. Close the Tools window.
        * Click the Lab Results - Set 1 header to open the section and add the result.
        * Click the Next button, or close the section.
* Continue documenting the encounter, as needed.
* When completed, Close and Archive the encounter.

## Evidence

#### Initial Patient Population

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
    <td>Diagnosis: Diabetes</td>
    <td>2.16.840.1.113883.3.464.1003.103.12.1001</td>
  </tr>
</table>

#### Denominator

Equals Initial Population

#### Numerator

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Laboratory Test, Performed: HbA1c Laboratory Test</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1013</td>
  </tr>
</table>

#### Denominator Exclusion

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
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



### Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS122&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

