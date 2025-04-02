---
id: '1a9n5XA6aPjLrwt2fhXl5ZSTSnCOIqQgKNn6sA3btXGA'
title: 'CMS 157 - Oncology: Medical and Radiation - Pain Intensity Quantified'
date: '2022-04-28T14:27:01.338Z'
version: 14
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms157v10'
source: 'https://drive.google.com/open?id=1a9n5XA6aPjLrwt2fhXl5ZSTSnCOIqQgKNn6sA3btXGA'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
---
## Overview

[CMS157v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v8&showresulttype=Measure) (2020)

[CMS157v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v9&showresulttype=Measure) (2021)

[CMS157v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS157v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS157v10</td>
<td>0384e</td>
<td>0384</td>
<td>143</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patient visits, regardless of patient age, with a diagnosis of cancer currently receiving chemotherapy or radiation therapy in which pain intensity is quantified</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patient visits, regardless of patient age, with a diagnosis of cancer currently receiving chemotherapy or radiation therapy</td>
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
<td>Patient visits in which pain intensity is quantified</td>
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
<td><strong>Rate Aggregation</strong></td>
<td>Population 1: Visits for patients with a diagnosis of cancer who are currently receiving chemotherapy<br />
Population 2: Visits for patients with a diagnosis of cancer who are currently receiving radiation therapy<br />
<br />
Performance Rate = (Numerator 1 + Numerator 2)/ (Denominator 1 + Denominator 2)</td>
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
<td>Person and Caregiver-Centered Experience and Outcomes</td>
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
<td>Diagnosis: Cancer</td>
<td>2.16.840.1.113883.3.526.3.1010</td>
</tr>
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Procedure, Performed: Chemotherapy Administration</td>
<td>2.16.840.1.113883.3.526.3.1027</td>
</tr>
<tr>
<td>Procedure, Performed: Radiation Treatment Management</td>
<td>2.16.840.1.113883.3.526.3.1026</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: Standardized Pain Assessment Tool</td>
<td>2.16.840.1.113883.3.526.3.1028</td>
</tr>
</table>

## Source(s)

[eCQI CMS157](https://ecqi.healthit.gov/ecqm/ep/2022/cms157v10)
