---
title: "CMS 124 - Cervical Cancer Screening"
date: 2020-02-27T21:30:03.988Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-124-cervical-cancer-screening.html"
author: Alan Quandt
version: 10
id: 1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI
source: https://drive.google.com/open?id=1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI
menu:
    main:
        name: "CMS 124 - Cervical Cancer Screening"
        identifier: "1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3880
---
[CMS124v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS124&showresult=CMS124v5&showresulttype=Measure) (2017)

[CMS124v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS124&showresult=CMS124v6&showresulttype=Measure) (2018)

[CMS124v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS124&showresult=CMS124v7&showresulttype=Measure) (2019)



**Description**:  Percentage of women 21-64 years of age who were screened for cervical cancer using either of the following criteria:

* Women age 21-64 who had cervical cytology performed every 3 years
* Women age 30-64 who had cervical cytology/human papillomavirus (HPV) co-testing performed every 5 years

**Initial Patient Population**:  Women 23-64 years of age with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Women with one or more screenings for cervical cancer. Appropriate screenings are defined by any one of the following criteria:

* Cervical cytology performed during the measurement period or the two years prior to the measurement period for women who are at least 21 years old at the time of the test
* Cervical cytology/human papillomavirus (HPV) co-testing performed during the measurement period or the four years prior to the measurement period for women who are at least 30 years old at the time of the test

**Inverse Measure**:  No

## Clinical Instructions

Ensure all women aged 23-64 are screened for cervical cancer, at least once within the measurement period. Use the Past Procedures section of the encounter to record a previous HPV or Pap test; otherwise, use the Visit Orders section of the encounter to order/perform one of the recognized procedures (i.e., HPV Test or Pap Test) at the time of the encounter. While documenting the Visit encounter, either record the previous procedure or the receipt of the recognized procedure, or order and perform the test, as appropriate.

* <strong>Option 1: Document in the Past Procedures section</strong>
    * Open the Past Procedures section
    * Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., PAP Test, HPV DNA Detection, etc.) with the appropriate Concept ID (e.g., LOINC).
    * Add the Date and any relevant Notes.
    * Click the Next button, or close the section
* <strong>Option 2: Document in the Preventive Care section</strong>
    * Open the Preventive Care section
    * Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2020). This date is the Last Reported Date
    * Click the Next button, or close the section
* <strong>Option 3: Document in the Tests and Procedures section IF performing the screening in-house</strong>
    * Open the Tests and Procedures section
    * Using the autocomplete, begin typing the appropriate procedure name
    * Click the Add to Exam button
    * After adding the new section, open the procedure section and add any results or findings
    * Click the Next button, or close the section
* Continue documenting the encounter, as needed
* When completed, Close and Archive the encounter
* <strong>Option 4: Scan/Index or Upload an accepted Document</strong> 
    * Using [WebScan](../../../document-management/scanning-and-indexing.html), scan and index the appropriate document type configured with the necessary LOIN-C (e.g., 33717-0).

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
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.666.5.307    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1016    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1001    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1025    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1023    </td>
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
2.16.840.1.113883.3.464.1003.110.12.1059    </td>
  </tr>
  <tr>
    <td>
Laboratory Test, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.108.12.1017    </td>
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
2.16.840.1.113883.3.560.100.2    </td>
  </tr>
  <tr>
    <td>
Patient Characteristic Sex    </td>
    <td>
2.16.840.1.113762.1.4.1    </td>
  </tr>
  <tr>
    <td>
Procedure, Performed    </td>
    <td>
2.16.840.1.113883.3.464.1003.198.12.1014    </td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS124&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

