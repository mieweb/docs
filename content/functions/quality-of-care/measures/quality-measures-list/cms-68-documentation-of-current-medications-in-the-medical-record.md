---
id: '1NgXF1EQs63upqMjbpmVqzwq_0wDmhVAXEjKXUZKTtC0'
title: 'CMS 68 - Documentation of Current Medications in the Medical Record'
date: '2022-05-23T12:15:40.249Z'
version: 68
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/glossary/eligible-clinician'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms068v11'
source: 'https://drive.google.com/open?id=1NgXF1EQs63upqMjbpmVqzwq_0wDmhVAXEjKXUZKTtC0'
wikigdrive: 'dev'
---
## Overview

[CMS68v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v9&showresulttype=Measure) (2020)  
[CMS68v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v10&showresulttype=Measure) (2021)  
[CMS68v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS68v11&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS68v11</td>
<td>–</td>
<td>–</td>
<td>130</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of visits for patients aged 18 years and older for which the eligible professional or <a href="https://ecqi.healthit.gov/glossary/eligible-clinician"></a> attests to documenting a list of current medications using all immediate resources available on the date of the encounter</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All visits occurring during the 12-month measurement period for patients aged 18 years and older</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Eligible professional or <a href="https://ecqi.healthit.gov/glossary/eligible-clinician"></a> attests to documenting, updating, or reviewing the patient's current medications using all immediate resources available on the date of the encounter</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>Documentation of a medical reason(s) for not documenting, updating, or reviewing the patient's current medications list (e.g., patient is in an urgent or emergent medical situation where time is of the essence and to delay treatment would jeopardize the patient's health status)</td>
</tr>

</table>


### Additional Information


<table>
<tr>
<td><strong>Measure Type</strong></td>
<td>Process Measure</td>
</tr>
<tr>
<td><strong>Measure Scoring</strong></td>
<td>Proportion measure</td>
</tr>
<tr>
<td><strong>Granularity</strong></td>
<td>Encounter</td>
</tr>
<tr>
<td><strong>Improvement Notation</strong></td>
<td>Higher score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Patient Safety</td>
</tr>

</table>



## Clinical Instructions

Ensure the list of current medications is always up-to-date for all patients.

### Preferred Workflow

Review and update the medications in the Presenting Medications section of the encounter, as appropriate, including ALL current prescriptions, over-the-counters, herbals, and vitamin/mineral/dietary supplements, with name(s), dosage(s), frequency, and route(s) of administration.

If the Presenting Medications section is part of the encounter outline at time of archive and close, the appropriate SNOMED Concept ID will be documented for the encounter to achieve numerator credit.

## Evidence


### Initial Patient Population


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Encounter to Document Medications</td>
<td>2.16.840.1.113883.3.600.1.1834</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Intervention, Performed: Documentation of current medications (procedure)</td>
<td>SNOMEDCT Code 428191000124101</td>
</tr>
<tr>
<td>Procedure, Performed: Documentation of current medications (procedure)</td>
<td>SNOMEDCT Code 428191000124101</td>
</tr>

</table>


## Source(s)

[eCQI CMS68](https://ecqi.healthit.gov/ecqm/ep/2022/cms068v11)
