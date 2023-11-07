---
id: '1tOaKesGwQOjB8Ap2oYlfMvI2sWfS-ONQuvPyBb5jCbc'
title: 'CMS 143 - Primary Open-Angle Glaucoma (POAG): Optic Nerve Evaluation'
date: '2022-04-28T14:03:19.182Z'
version: 11
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms143v10'
source: 'https://drive.google.com/open?id=1tOaKesGwQOjB8Ap2oYlfMvI2sWfS-ONQuvPyBb5jCbc'
wikigdrive: 'c3f35433d5ee1fae6cf6643ea463cdcb4c67750c'
---
## Overview

[CMS143v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v8&showresulttype=Measure) (2020)  
[CMS143v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v9&showresulttype=Measure) (2021)  
[CMS143v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS143v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS143v10</td>
<td>0086e</td>
<td>–</td>
<td>012</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older with a diagnosis of primary open-angle glaucoma (POAG) who have an optic nerve head evaluation during one or more visits within 12 months</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 18 years and older with a diagnosis of primary open-angle glaucoma</td>
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
<td>Patients who have an optic nerve head evaluation during one or more visits within 12 months</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>Documentation of medical reason(s) for not performing an optic nerve head evaluation</td>
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



## Evidence


### Initial Patient Population


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Primary Open-Angle Glaucoma</td>
<td>2.16.840.1.113883.3.526.3.326)</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
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
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Performed: Cup to Disc Ratio</td>
<td>2.16.840.1.113883.3.526.3.1333</td>
</tr>
<tr>
<td>Diagnostic Study, Performed: Optic Disc Exam for Structural Abnormalities</td>
<td>2.16.840.1.113883.3.526.3.1334</td>
</tr>

</table>


### Denominator Exceptions


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Not Performed: Cup to Disc Ratio</td>
<td>2.16.840.1.113883.3.526.3.1333</td>
</tr>
<tr>
<td>Diagnostic Study, Not Performed: Optic Disc Exam for Structural Abnormalities</td>
<td>2.16.840.1.113883.3.526.3.1334</td>
</tr>

</table>


## Source(s)

[eCQI CMS143](https://ecqi.healthit.gov/ecqm/ep/2022/cms143v10)
