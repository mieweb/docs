---
id: "1U__PxyFngT3WIb7xckii8CbTT6jK_sK79vdIg9LpUt4"
title: "CMS 149 - Dementia: Cognitive Assessment"
date: "2022-04-28T14:16:34.772Z"
version: 17
lastAuthor: "nwelsh"
mimeType: "text/x-markdown"
links:
  - "https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v8&showresulttype=Measure"
  - "https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v9&showresulttype=Measure"
  - "https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v10&showresulttype=Measure"
  - "https://ecqi.healthit.gov/ecqm/ep/2022/cms149v10"
source: "https://drive.google.com/open?id=1U__PxyFngT3WIb7xckii8CbTT6jK_sK79vdIg9LpUt4"
wikigdrive: "v2.15.30"
---

## Overview

[CMS149v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v8&showresulttype=Measure) (2020)

[CMS149v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v9&showresulttype=Measure) (2021)

[CMS149v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS149v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS149v10</td>
<td>2872e</td>
<td>–</td>
<td>281</td>
</tr>
</table>

\*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients, regardless of age, with a diagnosis of dementia for whom an assessment of cognition is performed and the results reviewed at least once within a 12-month period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients, regardless of age, with a diagnosis of dementia</td>
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
<td>Patients for whom an assessment of cognition is performed and the results reviewed at least once within a 12-month period</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>Documentation of patient reason(s) for not assessing cognition</td>
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
<td>Diagnosis: Dementia & Mental Degenerations</td>
<td>2.16.840.1.113883.3.526.3.1005</td>
</tr>
<tr>
<td>Encounter, Performed: Behavioral/Neuropsych Assessment</td>
<td>2.16.840.1.113883.3.526.3.1023</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Occupational Therapy Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1011</td>
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
<td>Encounter, Performed: Patient Provider Interaction</td>
<td>2.16.840.1.113883.3.526.3.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Diagnostic Evaluation</td>
<td>2.16.840.1.113883.3.526.3.1492</td>
</tr>
<tr>
<td>Encounter, Performed: Psych Visit - Psychotherapy</td>
<td>2.16.840.1.113883.3.526.3.1496</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Standardized Tools for Assessment of Cognition</td>
<td>2.16.840.1.113883.3.526.3.1006</td>
</tr>
<tr>
<td>Intervention, Performed: Cognitive Assessment</td>
<td>2.16.840.1.113883.3.526.3.1332</td>
</tr>
</table>

### Denominator Exceptions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Not Performed: Standardized Tools for Assessment of Cognition</td>
<td>2.16.840.1.113883.3.526.3.1006</td>
</tr>
<tr>
<td>Intervention, Not Performed: Cognitive Assessment</td>
<td>2.16.840.1.113883.3.526.3.1332</td>
</tr>
</table>

## Source(s)

[eCQI CMS149](https://ecqi.healthit.gov/ecqm/ep/2022/cms149v10)
