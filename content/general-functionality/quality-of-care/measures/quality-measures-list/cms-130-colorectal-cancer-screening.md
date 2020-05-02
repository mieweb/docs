---
title: "CMS 130 - Colorectal Cancer Screening"
date: 2020-02-27T21:30:09.388Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-130-colorectal-cancer-screening.html"
author: Alan Quandt
version: 10
id: 17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8
source: https://drive.google.com/open?id=17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8
menu:
    main:
        name: "CMS 130 - Colorectal Cancer Screening"
        identifier: "17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3910
---
[CMS130v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS130&showresult=CMS130v5&showresulttype=Measure) (2017)

[CMS130v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS130&showresult=CMS130v6&showresulttype=Measure) (2018)

[CMS130v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS130&showresult=CMS130v7&showresulttype=Measure) (2019)



**Description**:  Percentage of adults 50-75 years of age who had appropriate screening for colorectal cancer.

**Initial Patient Population**:  Patients 50-75 years of age with a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Patients with one or more screenings for colorectal cancer. Appropriate screenings are defined by any one of the following criteria:

* Fecal occult blood test (FOBT) during the measurement period
* Flexible sigmoidoscopy during the measurement period or the four years prior to the measurement period
* Colonoscopy during the measurement period or the nine years prior to the measurement period
* FIT-DNA during the measurement period or the two years prior to the measurement period
* CT Colonography during the measurement period or the four years prior to the measurement period

**Inverse Measure**:  No

## Clinical Instructions

Ensure patients aged 50-75 are screened for colorectal cancer. Use the Past Procedures section of the encounter to record a previous Fecal Occult Blood Test (FOBT), Flexible Sigmoidoscopy, Colonoscopy Screening, FIT-DNA, or CT Colonography; otherwise, use the Visit Orders section of the encounter to order/perform one of the recognized procedures at the time of the encounter.

* While documenting the Visit encounter, either record the previous procedure or the receipt of the colorectal screening, or order and perform the screening, as appropriate: 
    * <strong>Option 1: Document in the Past Procedures section</strong>
        * Open the Past Procedures section.
        * Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Colonoscopy) with the appropriate Concept ID.
        * Add the Date and any relevant Notes.
        * Click the Next button, or close the section.
    * <strong>Option 2: Document in the Preventive Care section </strong>
        * Open the Preventive Care section.
        * Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2019). This date is the Last Reported Date.
        * Click the Next button, or close the section.
    * <strong>Option 3: Document in the Tests and Procedures section IF performing the screening in-house</strong> 
        * Open the Tests and Procedures section.
        * Using the autocomplete, begin typing the appropriate procedure name.
        * Click the Add to Exam button.
        * After adding the new section, open the procedure section and add any results or findings.
        * Click the Next button, or close the section.
* Continue documenting the encounter, as needed.
* When completed, Close and Archive the encounter.
* <strong>Option 4: Scan/Index or Upload an accepted screening document</strong>
    * Using [WebScan](../../../document-management/scanning-and-indexing.html), scan and index the appropriate document type configured with the necessary LOIN-C.
        * Scan/Index or Upload the Colonoscopy Screening document type (COLON) configured with the necessary Concept ID (73761001).
        * Scan/Index or Upload the Fecal Occult Blood Test document type (FOBT) configured with the necessary LOIN-C (2335-8); otherwise, add the FOBT observation and ensure it is configured with the 2335-8 LOIN-C.
        * Scan/Index or Upload the Flexible Sigmoidoscopy document type (FLEXSIG) configured with the necessary Concept ID (44441009).
        * Scan/Index or Upload the Computed Tomographic Colongraphy document type (CTC) configured with the necessary Concept ID (418714002).
        * Add the Fit DNA observation to the chart either manually, or via an established interface, and ensure the observation is configured with the 77354-9 LOIN-C.

## Evidence

### Initial Patient Population

<table>
  <tr>
    <td>
Name    </td>
    <td>
Value Set    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Annual Wellness Visit    </td>
    <td>
2.16.840.1.113883.3.526.3.1240    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Home Healthcare Services    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1016    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Office Visit    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1001    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1025    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1023    </td>
  </tr>
</table>

### Denominator

Equals Initial Population

### Numerator

<table>
  <tr>
    <td>
Name    </td>
    <td>
Value Set    </td>
  </tr>
  <tr>
    <td>
Colonoscopy    </td>
    <td>
2.16.840.1.113883.3.464.1003.108.12.1020    </td>
  </tr>
  <tr>
    <td>
CT Colonography    </td>
    <td>
2.16.840.1.113883.3.464.1003.108.12.1038    </td>
  </tr>
  <tr>
    <td>
Fecal Occult Blood Test (FOBT)    </td>
    <td>
2.16.840.1.113883.3.464.1003.198.12.1011    </td>
  </tr>
  <tr>
    <td>
FIT DNA    </td>
    <td>
2.16.840.1.113883.3.464.1003.108.12.1039    </td>
  </tr>
  <tr>
    <td>
Flexible Sigmoidoscopy    </td>
    <td>
2.16.840.1.113883.3.464.1003.198.12.1010    </td>
  </tr>
</table>

### Denominator Exclusion

<table>
  <tr>
    <td>
Name    </td>
    <td>
Value Set    </td>
  </tr>
  <tr>
    <td>
Intervention, Order: Hospice care ambulatory    </td>
    <td>
2.16.840.1.113762.1.4.1108.15    </td>
  </tr>
  <tr>
    <td>
Intervention, Performed: Hospice care ambulatory    </td>
    <td>
2.16.840.1.113762.1.4.1108.15    </td>
  </tr>
  <tr>
    <td>
Malignant Neoplasm of Colon    </td>
    <td>
2.16.840.1.113883.3.464.1003.108.12.1001    </td>
  </tr>
  <tr>
    <td>
Total Colectomy    </td>
    <td>
2.16.840.1.113883.3.464.1003.198.12.1019    </td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS130&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

