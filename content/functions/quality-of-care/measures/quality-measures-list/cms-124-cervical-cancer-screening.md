---
id: '1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI'
title: 'CMS 124 - Cervical Cancer Screening'
date: '2022-04-19T19:36:48.515Z'
version: 38
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v10&showresulttype=Measure'
  - '../../../document-management/scanning-and-indexing.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms124v10'
source: 'https://drive.google.com/open?id=1B1ZuKB8d98yDNljhARHj4Ui9kMTNxZ0J3SeNoxRCcbI'
wikigdrive: 'c3f35433d5ee1fae6cf6643ea463cdcb4c67750c'
---
## Overview

[CMS124v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v8&showresulttype=Measure) (2020)  
[CMS124v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v9&showresulttype=Measure) (2021)  
[CMS124v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS124v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS124v10</td>
<td>–</td>
<td>–</td>
<td>309</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of women 21-64 years of age who were screened for cervical cancer using either of the following criteria:
<ul><li><p>Women age 21-64 who had cervical cytology performed within the last 3 years</p></li><li><p>Women age 30-64 who had cervical human papillomavirus (HPV) testing performed within the last 5 years</p></li></ul></td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Women 23-64 years of age with a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Women who had a hysterectomy with no residual cervix or a congenital absence of cervix.</p></li><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li><li><p>Exclude patients receiving palliative care during the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Women with one or more screenings for cervical cancer. Appropriate screenings are defined by any one of the following criteria:
<ul><li><p>Cervical cytology performed during the measurement period or the two years prior to the measurement period for women who are at least 21 years old at the time of the test</p></li><li><p>Cervical human papillomavirus (HPV) testing performed during the measurement period or the four years prior to the measurement period for women who are 30 years or older at the time of the test</p></li></ul></td>
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

Ensure all women aged 23-64 are screened for cervical cancer, at least once within the measurement period. Use the Past Procedures section of the encounter to record a previous HPV or Pap test; otherwise, use the Visit Orders section of the encounter to order/perform one of the recognized procedures (i.e., HPV Test or Pap Test) at the time of the encounter. While documenting the Visit encounter, either record the previous procedure or the receipt of the recognized procedure, or order and perform the test, as appropriate.
1. <strong>Option 1: Document in the Past Procedures section</strong>
   1. Open the Past Procedures section
   2. Using the Procedure autocomplete, begin typing the name of the diagnostic procedure (e.g., PAP Test, HPV DNA Detection, etc.) with the appropriate Concept ID (e.g., LOINC).
   3. Add the Date and any relevant Notes.
   4. Click the Next button, or close the section
1. <strong>Option 2: Document in the Preventive Care section</strong>
   1. Open the Preventive Care section
   2. Provide the date of the last reported procedure in the Enter New Date field (e.g., 01-17-2020). This date is the Last Reported Date
   3. Click the Next button, or close the section
1. <strong>Option 3: Document in the Tests and Procedures section IF performing the screening in-house</strong>
   1. Open the Tests and Procedures section
   2. Using the autocomplete, begin typing the appropriate procedure name
   3. Click the Add to Exam button
   4. After adding the new section, open the procedure section and add any results or findings
   5. Click the Next button, or close the section
1. Continue documenting the encounter, as needed
2. When completed, Close and Archive the encounter
* <strong>Option 4: Scan/Index or Upload an accepted Document</strong>

   1. Using [WebScan](../../../document-management/scanning-and-indexing.md), scan and index the appropriate document type configured with the necessary LOIN-C (e.g., 33717-0).

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
<td>Diagnosis: Congenital or Acquired Absence of Cervix</td>
<td>2.16.840.1.113883.3.464.1003.111.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
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
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Palliative Care Intervention</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1135</td>
</tr>
<tr>
<td>Procedure, Performed: Hysterectomy with No Residual Cervix</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1014</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Laboratory Test, Performed: HPV Test</td>
<td>2.16.840.1.113883.3.464.1003.110.12.1059</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Pap Test</td>
<td>2.16.840.1.113883.3.464.1003.108.12.1017</td>
</tr>

</table>


## Source(s)

[eCQI CMS124](https://ecqi.healthit.gov/ecqm/ep/2022/cms124v10)
