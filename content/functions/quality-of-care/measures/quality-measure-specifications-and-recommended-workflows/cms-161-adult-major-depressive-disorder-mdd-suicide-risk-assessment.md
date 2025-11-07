---
id: '1XwNvJ7ebSrbOOgbbpqhpcV18eyKUCssMCmpdZPFCwzk'
title: 'CMS 161 - Adult Major Depressive Disorder (MDD): Suicide Risk Assessment'
date: '2022-04-29T13:15:02.884Z'
version: 24
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms161v10'
source: 'https://drive.google.com/open?id=1XwNvJ7ebSrbOOgbbpqhpcV18eyKUCssMCmpdZPFCwzk'
wikigdrive: 'v2.15.27'
---
## Overview

[CMS161v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v8&showresulttype=Measure) (2020)

[CMS161v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v9&showresulttype=Measure) (2021)

[CMS161v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS161v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS161v10</td>
<td>0104e</td>
<td>–</td>
<td>107</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>All patient visits during which a new diagnosis of MDD or a new diagnosis of recurrent MDD was identified for patients aged 18 years and older with a suicide risk assessment completed during the visit</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patient visits during which a new diagnosis of MDD, single or recurrent episode, was identified</td>
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
<td>Patient visits during which a new diagnosis of MDD, single or recurrent episode, was identified and a suicide risk assessment was completed during the visit</td>
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
<td>Episode of MDD</td>
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
<td>Diagnosis: Major Depressive Disorder-Active</td>
<td>2.16.840.1.113883.3.526.3.1491</td>
</tr>
<tr>
<td>Encounter, Performed: Emergency Department Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Diagnostic Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1492</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Psychotherapy</td>
<td>2.16.840.1.113883.3.526.3.1496</td>
</tr>
<tr>
<td>Encounter, Performed: Psychoanalysis</td>
<td>2.16.840.1.113883.3.526.3.1141</td>
</tr>
<tr>
<td>Encounter, Performed: Telehealth Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1031</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Intervention, Performed: Suicide risk assessment (procedure)</td>
<td>SNOMEDCT Code 225337009</td>
</tr>
</table>

## Source(s)

[eCQI CMS161](https://ecqi.healthit.gov/ecqm/ep/2022/cms161v10)
