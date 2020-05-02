---
title: "CMS 146 - Appropriate Testing for Children with Pharyngitis"
date: 2020-02-27T21:30:18.404Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-146-appropriate-testing-for-children-with-pharyngitis.html"
author: Alan Quandt
version: 10
id: 1OtPnt5NR98PeeONo8zG0IQGrG7_VTz0GG05zk7UPNic
source: https://drive.google.com/open?id=1OtPnt5NR98PeeONo8zG0IQGrG7_VTz0GG05zk7UPNic
menu:
    main:
        name: "CMS 146 - Appropriate Testing for Children with Pharyngitis"
        identifier: "1OtPnt5NR98PeeONo8zG0IQGrG7_VTz0GG05zk7UPNic"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3990
---
[CMS146v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS146&showresult=CMS146v5&showresulttype=Measure) (2017)

[CMS146v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS146&showresult=CMS146v6&showresulttype=Measure) (2018)

[CMS146v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS146&showresult=CMS146v7&showresulttype=Measure) (2019)



**Description**:  Percentage of children 3-18 years of age who were diagnosed with pharyngitis, ordered an antibiotic and received a group A streptococcus (strep) test for the episode.

**Initial Patient Population**:  Children 3-18 years of age who had an outpatient or emergency department (ED) visit with a diagnosis of pharyngitis during the measurement period and an antibiotic ordered on or three days after the visit.

**Denominator**:  Equals Initial Population

**Numerator**: Children with a group A streptococcus test in the 7-day period from 3 days prior through 3 days after the diagnosis of pharyngitis.

**Inverse Measure**:  No

## Clinical Instructions

Track all children ages 3-18 who had an outpatient or ED visit with a diagnosis of pharyngitis and an antibiotic ordered on or three (3) days after the visit. Compliance requires a group A streptococcus (strep) test be administered within the 7-day period from 3 days prior through 3 days after the initial diagnosis. Use either the Test and Procedures section of the encounter, or add the Lab Results - Set 2 to the encounter template; otherwise, enter the appropriate observation to the chart using the Observations chart tab.

{{% tip %}}

Regardless of how the strep test observation is added to the chart, clients will need to ensure that the appropriate observation is configured with LOINC 6559-9.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the *Strep* observations to determine if multiple [observations need to be merged](../../../order-and-result-management/observation-code-merging.html).

{{% /tip %}}


* While documenting the Visit encounter, document the results of a Strep test one of two ways:
    * <strong>Option 1: Tests and Procedures Section</strong>
        * Open the Tests and Procedures section.
        * Using the autocomplete, begin typing Strep A Qual Throat Swab.
        * Click the Add to Exam button.
        * After adding the new section, open the Strep A Qual Throat Swab section and add the result.
        * Click the Next button, or close the section.
    * <strong>Option 2: Add Lab Results - Set 2 to Encounter</strong>
        * Click the Tools icon in the upper-right corner of the encounter.
        * Click the Lab Results - Set 2 header to add the section to the encounter template. Close the Tools window.
        * Click the Lab Results - Set 2 header to open the section and add the Rapid Strep result.
        * Click the Next button, or close the section.
    * Continue documenting the encounter, as needed.
    * When completed, Close and Archive the encounter
* <strong>Option 3: Add Observation using Observations Chart Tab</strong>
    * Navigate to the patient chart.
    * Open the Observations tab of the Medical Records chart tab.
    * Click the Add Observation link in the upper-right corner.
    * Enter the Date the Rapid Strep was observed, its Result, and any relevant Comments.
    * Click the Submit button.

## Evidence

<table>
  <tr>
    <td>
Name    </td>
    <td>
Value Set    </td>
  </tr>
  <tr>
    <td>
Diagnosis    </td>
    <td>
2.16.840.1.113883.3.464.1003.102.12.1011    </td>
  </tr>
  <tr>
    <td>
Diagnosis    </td>
    <td>
2.16.840.1.113883.3.464.1003.102.12.1012    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1061    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.666.5.307    </td>
  </tr>
  <tr>
    <td>
Intervention, Order    </td>
    <td>
2.16.840.1.113762.1.4.1108.15    </td>
  </tr>
  <tr>
    <td>
Intervention, Performed    </td>
    <td>
2.16.840.1.113762.1.4.1108.15    </td>
  </tr>
  <tr>
    <td>
Laboratory Test, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.198.12.1012    </td>
  </tr>
  <tr>
    <td>
Medication, Active    </td>
    <td>
2.16.840.1.113883.3.464.1003.196.12.1001    </td>
  </tr>
  <tr>
    <td>
Medication, Order    </td>
    <td>
2.16.840.1.113883.3.464.1003.196.12.1001    </td>
  </tr>
  <tr>
    <td>
Patient Characteristic Ethnicity    </td>
    <td>
2.16.840.1.114222.4.11.837    </td>
  </tr>
  <tr>
    <td>
Patient Characteristic Payer    </td>
    <td>
2.16.840.1.114222.4.11.3591    </td>
  </tr>
  <tr>
    <td>
Patient Characteristic Race    </td>
    <td>
2.16.840.1.114222.4.11.836    </td>
  </tr>
  <tr>
    <td>
Patient Characteristic Sex    </td>
    <td>
2.16.840.1.113762.1.4.1    </td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS146&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

