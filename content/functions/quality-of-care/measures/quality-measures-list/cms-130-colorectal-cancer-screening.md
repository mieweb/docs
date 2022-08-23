---
id: '17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8'
title: 'CMS 130 - Colorectal Cancer Screening'
date: '2022-04-20T13:02:58.416Z'
version: 42
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v10&showresulttype=Measure'
  - '../../../document-management/scanning-and-indexing.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms130v10'
source: 'https://drive.google.com/open?id=17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8'
wikigdrive: 'eb4f9f8e82d104274f4630740771c9319ef63af0'
menu:
  main:
    name: 'CMS 130 - Colorectal Cancer Screening'
    identifier: '17IjektAahpRJJV0qxTAHsDbyBSFNm0t6uBift_Ro_J8'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3910
---
## Overview

[CMS130v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v8&showresulttype=Measure) (2020)
[CMS130v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v9&showresulttype=Measure) (2021)
[CMS130v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS130v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS130v10</td>
<td>–</td>
<td>0034</td>
<td>113</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of adults 50-75 years of age who had appropriate screening for colorectal cancer</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 50-75 years of age with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li><li><p>Exclude patients with a diagnosis or past history of total colectomy or colorectal cancer.</p></li><li><p>Exclude patients 66 and older who are living long term in an institution for more than 90 consecutive days during the measurement period.</p></li><li><p>Exclude patients 66 and older with an indication of frailty for any part of the measurement period who meet any of the following criteria:</p><ul><li><p>Advanced illness with two outpatient encounters during the measurement period or the year prior</p></li><li><p>Advanced illness with one inpatient encounter during the measurement period or the year prior</p></li><li><p>Taking dementia medications during the measurement period or the year prior</p></li></ul></li><li><p>Exclude patients receiving palliative care during the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with one or more screenings for colorectal cancer. Appropriate screenings are defined by any one of the following criteria:<ul><li><p>Fecal occult blood test (FOBT) during the measurement period</p></li><li><p>Flexible sigmoidoscopy during the measurement period or the four years prior to the measurement period</p></li><li><p>Colonoscopy during the measurement period or the nine years prior to the measurement period</p></li><li><p>FIT-DNA during the measurement period or the two years prior to the measurement period</p></li><li><p>CT Colonography during the measurement period or the four years prior to the measurement period</p></li></ul></td>
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
<td>Effective Clinical Care</td>
</tr>

</table>



## Clinical Instructions


### New UI Visit Encounter (valid RC202109+)



### Original Visit Encounter

Ensure patients aged 50-75 are screened for colorectal cancer. Use the Past Procedures section of the encounter to record a previous Fecal Occult Blood Test (FOBT), Flexible Sigmoidoscopy, Colonoscopy Screening, FIT-DNA, or CT Colonography; otherwise, use the Visit Orders section of the encounter to order/perform one of the recognized procedures at the time of the encounter.
1. While documenting the Visit encounter, either record the previous procedure or the receipt of the colorectal screening, or order and perform the screening, as appropriate:

    1. <strong>Option 1: Document in the Past Procedures section</strong>
        1. Open the Past Procedures section.
        2. Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., Colonoscopy) with the appropriate Concept ID.
        3. Add the Date and any relevant Notes.
        4. Click the Next button, or close the section.
    1. <strong>Option 2: Document in the Preventive Care section </strong>
        1. Open the Preventive Care section.
        2. Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2019). This date is the Last Reported Date.
        3. Click the Next button, or close the section.
    1. <strong>Option 3: Document in the Tests and Procedures section IF performing the screening in-house</strong>

        1. Open the Tests and Procedures section.
        2. Using the autocomplete, begin typing the appropriate procedure name.
        3. Click the Add to Exam button.
        4. After adding the new section, open the procedure section and add any results or findings.
        5. Click the Next button, or close the section.
1. Continue documenting the encounter, as needed.
2. When completed, Close and Archive the encounter.
* <strong>Option 4: Scan/Index or Upload an accepted screening document</strong>
    * Using [WebScan](../../../document-management/scanning-and-indexing.md), scan and index the appropriate document type configured with the necessary LOIN-C.
        * Scan/Index or Upload the Colonoscopy Screening document type (COLON) configured with the necessary Concept ID (73761001).
        * Scan/Index or Upload the Fecal Occult Blood Test document type (FOBT) configured with the necessary LOIN-C (2335-8); otherwise, add the FOBT observation and ensure it is configured with the 2335-8 LOIN-C.
        * Scan/Index or Upload the Flexible Sigmoidoscopy document type (FLEXSIG) configured with the necessary Concept ID (44441009).
        * Scan/Index or Upload the Computed Tomographic Colongraphy document type (CTC) configured with the necessary Concept ID (418714002).
        * Add the Fit DNA observation to the chart either manually, or via an established interface, and ensure the observation is configured with the 77354-9 LOIN-C.

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
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
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
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
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
<td>Assessment, Performed: Functional Assessment of Chronic Illness Therapy - Palliative Care Questionnaire (FACIT-Pal)</td>
<td>LOINC Code 71007-9</td>
</tr>
<tr>
<td>Device, Applied: Frailty Device</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1300</td>
</tr>
<tr>
<td>Device, Order: Frailty Device</td>
<td>2.16.840.1.113883.3.464.1003.118.12.1300</td>
</tr>
<tr>
<td>Diagnosis: Frailty Diagnosis</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1074</td>
</tr>
<tr>
<td>Diagnosis: Malignant Neoplasm of Colon</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Acute Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1083</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Emergency Department Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Encounter, Performed: Frailty Encounter</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1088</td>
</tr>
<tr>
<td>Encounter, Performed: Nonacute Inpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1084</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Observation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1086</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1087</td>
</tr>
<tr>
<td>Encounter, Performed: Palliative Care Encounter</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1090</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15)</td>
</tr>
<tr>
<td>Intervention, Performed: Palliative Care Intervention</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1135</td>
</tr>
<tr>
<td>Medication, Active: Dementia Medications</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1510</td>
</tr>
<tr>
<td>Procedure, Performed: Total Colectomy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1019</td>
</tr>
<tr>
<td>Symptom: Frailty Symptom</td>
<td>2.16.840.1.113883.3.464.1003.113.12.1075</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Performed: CT Colonography</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1038</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Fecal Occult Blood Test (FOBT)</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1011</td>
</tr>
<tr>
<td>Laboratory Test, Performed: FIT DNA</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1039</td>
</tr>
<tr>
<td>Procedure, Performed: Colonoscopy</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1020</td>
</tr>
<tr>
<td>Procedure, Performed: Flexible Sigmoidoscopy</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1010</td>
</tr>

</table>


## Source(s)

[eCQI CMS130](https://ecqi.healthit.gov/ecqm/ep/2022/cms130v10)
