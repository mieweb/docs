---
id: '1dd1jmIH4Xu8nWG80UinTqZluoTtf4RuswpJ69hMb49M'
title: 'CMS 2 - Preventive Care and Screening: Screening for Depression and Follow-up Plan Configuration'
date: '2024-07-25T01:51:48.866Z'
version: 75
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v13&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v12&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v11&showresulttype=Measure&module=&tabmodule=&searchterm=cms2'
  - '../quality-measure-specifications-and-recommended-workflows/cms-2-preventive-care-and-screening-screening-for-depression-and-follow-up-plan-workflow.md'
  - 'https://ecqi.healthit.gov/ecqm/ec/2024/cms0002v13?qt-tabs_measure=measure-information'
source: 'https://drive.google.com/open?id=1dd1jmIH4Xu8nWG80UinTqZluoTtf4RuswpJ69hMb49M'
wikigdrive: 'a0e5118c84846ce2ee58cf93cd6d3b61cb6112d4'
---
## Overview

[CMS2v13](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v13&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2024)

[CMS2v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v12&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2023)

[CMS2v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS2v11&showresulttype=Measure&module=&tabmodule=&searchterm=cms2) (2022)

## Clinical Instructions

Ensure all 12+ year-old patients are screened for depression during or within the 14 days prior to an eligible encounter during the measurement period.  Encounter eligibility is determined based on the billing codes linked to the encounter in WebChart EHR.  Use the preferred Test and Procedures section or the alternate Preventive Care section of the Visit encounter to order and perform an age appropriate depression screening.  Any patient with a positive screening requires a follow-up plan documented during the current encounter.  Perform the following steps to document a depression screening.

For detailed information on the recommended workflow please [click here](../quality-measure-specifications-and-recommended-workflows/cms-2-preventive-care-and-screening-screening-for-depression-and-follow-up-plan-workflow.md#overview).

## Compliance Configuration

Four observations are required to comply with the recommended workflow for CMS2v13.  These observations can be added to the included PHQ2 and PHQ9 flowsheets, added to a custom flowsheet, or entered individually.  If you are interested in a custom flowsheet containing only the four observations as described below, please contact MIE for a configuration file.

<table>
<tr>
<td><strong>Observation Name</strong></td>
<td><strong>LOINC code</strong></td>
<td><strong>Custom Discrete Values</strong></td>
</tr>
<tr>
<td><strong>Display</strong></td>
<td><strong>Value and SNOMED Concept ID</strong></td>
</tr>
<tr>
<td>Adult Depression Screening Assessment</td>
<td>73832-8</td>
<td>Positive for depression</td>
<td>428181000124104</td>
</tr>
<tr>
<td>Negative for depression</td>
<td>428171000124102</td>
</tr>
<tr>
<td>Adolescent Depression Screening Assessment</td>
<td>73831-0</td>
<td>Positive for depression</td>
<td>428181000124104</td>
</tr>
<tr>
<td>Negative for depression</td>
<td>428171000124102</td>
</tr>
<tr>
<td>Follow-up for Adult Depression</td>
<td></td>
<td>Psychotherapy</td>
<td>75516001</td>
</tr>
<tr>
<td>Psychiatric follow-up</td>
<td>88848003</td>
</tr>
<tr>
<td>Mental Health Care Assessment</td>
<td>410223002</td>
</tr>
<tr>
<td>Follow-up for Adolescent Depression</td>
<td></td>
<td>Psychotherapy</td>
<td>75516001</td>
</tr>
<tr>
<td>Psychiatric follow-up</td>
<td>88848003</td>
</tr>
<tr>
<td>Mental Health Care Assessment</td>
<td>410223002</td>
</tr>
</table>

The observation LOINC code and custom discrete value SNOMED Concept IDs for the depression screening assessments are direct codes required by the measure.  These two observations cannot be customized.  The follow-up observations (for those practices ordering non-medication based follow-up) do not require a LOINC code, and the custom discrete values can be customized to fit your practice's needs.  Follow-up for Adult Depression can include any custom discrete values from the 2.16.840.1.113883.3.526.3.1568 value set while Follow-up for Adolescent Depression can include any values from the 2.16.840.1.113883.3.526.3.1569 value set.

## Source(s)

[eCQI CMS2](https://ecqi.healthit.gov/ecqm/ec/2024/cms0002v13?qt-tabs_measure=measure-information)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>07/24/2024</td>
<td>Initial document creation</td>
</tr>
</table>
