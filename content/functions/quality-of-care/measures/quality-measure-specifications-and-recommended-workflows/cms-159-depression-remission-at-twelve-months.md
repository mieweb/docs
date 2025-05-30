---
id: '1Jo1ZcIJ0Gs1sWISKJO8secJ2N3RU04thYDjzgnW8ab0'
title: 'CMS 159 - Depression Remission at Twelve Months'
date: '2022-04-29T12:47:04.769Z'
version: 31
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms159v10'
source: 'https://drive.google.com/open?id=1Jo1ZcIJ0Gs1sWISKJO8secJ2N3RU04thYDjzgnW8ab0'
wikigdrive: '4877557a92bc296ec58d6bfc335c6143133d522b'
---
## Overview

[CMS159v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v8&showresulttype=Measure) (2020)

[CMS159v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v9&showresulttype=Measure) (2021)

[CMS159v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS159v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS159v10</td>
<td>0710e</td>
<td>0710</td>
<td>370</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>The percentage of adolescent patients 12 to 17 years of age and adult patients 18 years of age or older with major depression or dysthymia who reached remission 12 months (+/- 60 days) after an index event.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Adolescent patients 12 to 17 years of age and adult patients 18 years of age and older with a diagnosis of major depression or dysthymia and an initial PHQ-9 or PHQ-9M score greater than nine during the index event. Patients may be assessed using PHQ-9 or PHQ-9M on the same date or up to 7 days prior to the encounter (index event).</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Patients who died</li><li>Patients who received hospice or palliative care services</li><li>Patients who were permanent nursing home residents</li><li>Patients with a diagnosis of bipolar disorder</li><li>Patients with a diagnosis of personality disorder emotionally labile</li><li>Patients with a diagnosis of schizophrenia or psychotic disorder</li><li>Patients with a diagnosis of pervasive developmental disorder</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Adolescent patients 12 to 17 years of age and adult patients 18 years of age and older who achieved remission at twelve months as demonstrated by a twelve month (+/- 60 days) PHQ-9 or PHQ-9M score of less than five</td>
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
<td>Outcome measure</td>
</tr>
<tr>
<td><strong>Measure Scoring</strong></td>
<td>Proportion measure</td>
</tr>
<tr>
<td><strong>Stratification</strong></td>
<td><ul><li>12-17 years</li><li>18 years and older</li></ul></td>
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
<td>Assessment, Performed: PHQ 9 and PHQ 9M Tools</td>
<td>2.16.840.1.113883.3.67.1.101.1.263</td>
</tr>
<tr>
<td>Diagnosis: Bipolar Disorder</td>
<td>2.16.840.1.113883.3.67.1.101.1.128</td>
</tr>
<tr>
<td>Diagnosis: Dysthymia</td>
<td>2.16.840.1.113883.3.67.1.101.1.254</td>
</tr>
<tr>
<td>Encounter, Performed: Contact or Office Visit</td>
<td>2.16.840.1.113762.1.4.1080.5</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Personality Disorder Emotionally Labile</td>
<td>2.16.840.1.113883.3.67.1.101.1.246</td>
</tr>
<tr>
<td>Diagnosis: Pervasive Developmental Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1152</td>
</tr>
<tr>
<td>Diagnosis: Schizophrenia or Psychotic Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1104</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Palliative Care Encounter</td>
<td>2.16.840.1.113883.3.600.1.1575</td>
</tr>
<tr>
<td>Intervention, Order: Palliative or Hospice Care</td>
<td>2.16.840.1.113883.3.600.1.1579</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Assessment, Performed: PHQ 9 and PHQ 9M Tools</td>
<td>2.16.840.1.113883.3.67.1.101.1.263</td>
</tr>
</table>

## Source(s)

[eCQI CMS159](https://ecqi.healthit.gov/ecqm/ep/2022/cms159v10)
