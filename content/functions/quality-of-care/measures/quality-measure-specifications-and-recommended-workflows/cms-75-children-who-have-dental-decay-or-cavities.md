---
id: '1_WNP2ZbGCTMB799wehG2aIhHRJamoz3dsBADmF4pBtM'
title: 'CMS 75 - Children Who Have Dental Decay or Cavities'
date: '2022-05-16T15:48:04.708Z'
version: 69
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms075v10'
source: 'https://drive.google.com/open?id=1_WNP2ZbGCTMB799wehG2aIhHRJamoz3dsBADmF4pBtM'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
## Overview

[CMS75v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v8&showresulttype=Measure) (2020)

[CMS75v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v9&showresulttype=Measure) (2021)

[CMS75v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS75v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS75v10</td>
<td>–</td>
<td>–</td>
<td>378</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of children, 6 months - 20 years of age at the start of the measurement period, who have had tooth decay or cavities during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Children, 6 months - 20 years of age, with a clinical oral evaluation during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Exclude patients who are in hospice care for any part of the measurement period.</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Children who had a diagnosis of cavities or decayed teeth in any part of the measurement period</td>
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
<td><strong>Granularity</strong></td>
<td>Patient</td>
</tr>
<tr>
<td><strong>Improvement Notation</strong></td>
<td>Lower score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Community/Population Health</td>
</tr>
</table>

## Clinical Instructions

Track all patients 6 months to 20 years of age diagnosed with tooth decay or cavities.

### Workflow

1. While documenting the Visit encounter, record the diagnosis, as appropriate
2. Open the Symptoms/Diagnosis section
3. Ensure the patient has a diagnosis of tooth or dental decay, as applicable
4. Continue documenting the encounter, as appropriate
5. When completed, Close and Archive the encounter

## Evidence

### Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Clinical Oral Evaluation</td>
<td>2.16.840.1.113883.3.464.1003.125.12.1003</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Dental Caries</td>
<td>2.16.840.1.113883.3.464.1003.125.12.1004</td>
</tr>
</table>

## Source(s)

[eCQI CMS75](https://ecqi.healthit.gov/ecqm/ep/2022/cms075v10)
