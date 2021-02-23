---
title: "CMS 125 - Breast Cancer Screening"
date: 2020-02-27T21:30:06.501Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-125-breast-cancer-screening.html"
author: aquandt
version: 15
id: 1zRb6sMWOXB4U1PqYWAwJhixvIaeGsAPINYdcvedUPHk
source: https://drive.google.com/open?id=1zRb6sMWOXB4U1PqYWAwJhixvIaeGsAPINYdcvedUPHk
menu:
    main:
        name: "CMS 125 - Breast Cancer Screening"
        identifier: "1zRb6sMWOXB4U1PqYWAwJhixvIaeGsAPINYdcvedUPHk"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3890
---
[CMS125v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms125&showresult=CMS125v5&showresulttype=Measure) (2017)

[CMS125v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms125&showresult=CMS125v6&showresulttype=Measure) (2018)

[CMS125v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=cms125&showresult=CMS125v7&showresulttype=Measure) (2019)



**Description**:  Percentage of women 50-74 years of age who had a mammogram to screen for breast cancer.

**Initial Patient Population**:  Women 51-74 years of age with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Women with one or more mammograms during the measurement period or the 15 months prior to the measurement period.

**Inverse Measure**:  No

## Clinical Instructions

Use the Past Procedures section of the encounter to record a previous mammogram, in order to track all 50-74 year-old women with one or more mammograms recorded (15 months prior to or during the measurement period). Otherwise, the procedure can be recorded in the Preventive Care section of the encounter, or a mammogram can be scanned and indexed, to record the screening was completed.

* While documenting the Visit encounter, either record the previous procedure or the receipt of the mammogram, or scan and index the mammogram, as appropriate:
    * <strong>Option 1:</strong> <strong>Document in Past Procedures section</strong>
        * Open the Past Procedures section.
        * Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Mammogram) with the appropriate concept ID.
        * Add the Date and any relevant Notes.
        * Click the Next button, or close the section.
    * <strong>Option 2: Document in the Preventive Care section of Visit encounter</strong>
        * Open the Preventive Care section.
        * Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-21-2018). This date is the Last Reported Date.
        * Click the Next button, or close the section. 
* Continue documenting the encounter, as needed.
* When completed, Close and Archive the encounter.
* <strong>Option 3: Scan/Index or Upload a Mammogram document</strong>
    * Using [WebScan](../../../document-management/scanning-and-indexing.html), scan and index the MAMMO document type configured with the necessary LOIN-C (24606-6).

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
    <td>Diagnostic Study, Performed: Mammography</td>
    <td>2.16.840.1.113883.3.464.1003.108.12.1018</td>
  </tr>
</table>

### Denominator Exclusion

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
  <tr>
    <td>Diagnosis: History of bilateral mastectomy</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1068</td>
  </tr>
  <tr>
    <td>Diagnosis: Status Post Left Mastectomy</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1069</td>
  </tr>
  <tr>
    <td>Diagnosis: Status Post Right Mastectomy</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1070</td>
  </tr>
  <tr>
    <td>Diagnosis: Unilateral Mastectomy, Unspecified Laterality</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1071</td>
  </tr>
  <tr>
    <td>Procedure, Performed: Bilateral Mastectomy</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1005</td>
  </tr>
  <tr>
    <td>Procedure, Performed: Unilateral Mastectomy</td>
    <td>2.16.840.1.113883.3.464.1003.198.12.1020</td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=cms125&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

