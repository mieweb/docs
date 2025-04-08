---
id: '1j2KoVsPF7AcfcjcZigwmo8jTojtcSMAVY-5Iwg_bK2Q'
title: 'CMS 69 - Preventive Care and Screening: Body Mass Index (BMI) Screening and Follow-up Plan'
date: '2022-05-24T14:01:44.837Z'
version: 89
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms069v10'
source: 'https://drive.google.com/open?id=1j2KoVsPF7AcfcjcZigwmo8jTojtcSMAVY-5Iwg_bK2Q'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
## Overview

[CMS69v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v8&showresulttype=Measure) (2020)

[CMS69v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v9&showresulttype=Measure) (2021)

[CMS69v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS69v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS69v10</td>
<td>–</td>
<td>–</td>
<td>128</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older with a BMI documented during the current encounter or within the previous twelve months AND who had a follow-up plan documented if most recent BMI was outside of normal parameters.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 18 and older on the date of the encounter with at least one eligible encounter during the measurement period.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li>Patients who are pregnant</li><li>Patients receiving palliative or hospice care</li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with a documented BMI during the encounter or during the previous twelve months, AND when the BMI is outside of normal parameters, a follow-up plan is documented during the encounter or during the previous twelve months of the current encounter</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li>Patients with a documented medical reason for not documenting BMI or for not documenting a follow-up plan for a BMI outside normal parameters (e.g., elderly patients 65 years of age or older for whom weight reduction/weight gain would complicate other underlying health conditions such as illness or physical disability, mental illness, dementia, confusion, or nutritional deficiency such as vitamin/mineral deficiency;</li><li>Patients in an urgent or emergent medical situation where time is of the essence and to delay treatment would jeopardize the patient's health status)</li><li>Patients who refuse measurement of height and/or weight</li></ul></td>
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
<td>Community/Population Health</td>
</tr>
</table>

## Clinical Instructions

Track all 18+ year-old patients and ensure their BMI is greater than 18.5 and less than 25kg/m2. Any patient with a BMI outside of normal parameters requires a follow-up plan be documented during the current encounter or during the previous twelve months of the current encounter.

### Preferred Workflow

1. While documenting the Visit encounter, record the BMI, as appropriate
2. Open the Vitals section and enter the Height and Weight (the BMI is auto-calculated)
3. If the BMI is out of range, the system will display a pop-up encouraging weight counseling education.
4. Open the Preventive Care section
5. Select an option from either the Below or Above Normal BMI Follow-up picklists
6. Add to exam or order the follow-up item(s), as appropriate
7. Continue documenting the encounter, as needed
8. When completed, Close and Archive the encounter

### Alternate Workflow

1. While documenting the Visit encounter, record the BMI, as appropriate
2. Open the Vitals section and enter the Height and Weight (the BMI is auto-calculated)
3. If the BMI is out of range, the system will display a pop-up encouraging weight counseling education.
4. Click Yes to add order, as appropriate
5. Continue documenting the encounter, as needed
6. When completed, Close and Archive the encounter

## Evidence

## Initial Patient Population

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Encounter to Evaluate BMI</td>
<td>2.16.840.1.113883.3.600.1.1751</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Pregnancy or Other Related Diagnoses</td>
<td>2.16.840.1.113883.3.600.1.1623</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter for palliative care</td>
<td>ICD10CM Code Z51.5</td>
</tr>
<tr>
<td>Intervention, Order: Hospice Care Ambulatory</td>
<td>2.16.840.1.113883.3.526.3.1584</td>
</tr>
<tr>
<td>Intervention, Order: Palliative or Hospice Care</td>
<td>2.16.840.1.113883.3.600.1.1579</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice Care Ambulatory</td>
<td>2.16.840.1.113883.3.526.3.1584</td>
</tr>
<tr>
<td>Intervention, Performed: Palliative or Hospice Care</td>
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
<td>Intervention, Order: Follow Up for Above Normal BMI</td>
<td>2.16.840.1.113883.3.600.1.1525</td>
</tr>
<tr>
<td>Intervention, Order: Follow Up for Below Normal BMI</td>
<td>2.16.840.1.113883.3.600.1.1528</td>
</tr>
<tr>
<td>Intervention, Order: Referrals Where Weight Assessment May Occur</td>
<td>2.16.840.1.113883.3.600.1.1527</td>
</tr>
<tr>
<td>Intervention, Performed: Follow Up for Above Normal BMI</td>
<td>2.16.840.1.113883.3.600.1.1525</td>
</tr>
<tr>
<td>Intervention, Performed: Follow Up for Below Normal BMI</td>
<td>2.16.840.1.113883.3.600.1.1528</td>
</tr>
<tr>
<td>Medication, Order: Medications for Above Normal BMI</td>
<td>2.16.840.1.113883.3.526.3.1561</td>
</tr>
<tr>
<td>Medication, Order: Medications for Below Normal BMI</td>
<td>2.16.840.1.113883.3.526.3.1562</td>
</tr>
<tr>
<td>Physical Exam, Performed: Body mass index (BMI) [Ratio]</td>
<td>LOINC Code 39156-5</td>
</tr>
</table>

## Source(s)

[eCQI CMS69](https://ecqi.healthit.gov/ecqm/ep/2022/cms069v10)
