---
id: '1vY5RSvNydLUU9fQTVcjfgdBRsuzLDSlKaNP1cctZvEE'
title: 'CMS122 - Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%) Configuration'
date: '2024-09-05T20:20:54.084Z'
version: 25
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v10&showresulttype=Measure'
  - '../../../order-and-result-management/observation-code-merging.md'
  - '../quality-measure-specifications-and-recommended-workflows/cms-124-cervical-cancer-screening.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms122v12'
source: 'https://drive.google.com/open?id=1vY5RSvNydLUU9fQTVcjfgdBRsuzLDSlKaNP1cctZvEE'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
## Overview

[CMS122v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v12&showresulttype=Measure) (2024)

[CMS122v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v11&showresulttype=Measure) (2023)

[CMS122v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms122&showresult=CMS122v10&showresulttype=Measure) (2022)

## Clinical Instructions

Track the HbA1c of all diabetic patients between the ages of 18-75.  The most recently performed HbA1c during the measurement period should be <=9.0%.  Laboratory screening tests will be recorded as observations with results either manually entered or received from a laboratory interface.  Any patients with an HbA1c >9% will be included in the numerator and count against quality.  This is an inverse measure.  The goal is to NOT have patients in the numerator

Regardless of how the HbA1c observation is added to the chart, clients will need to ensure that the appropriate observation is configured with one of the following LOINC codes: 4548-4, 4549-2, or 17856-6.  Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the Hemoglobin A1c observation to determine if multiple HbA1c [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).

For detailed information on the recommended workflow please [click here](../quality-measure-specifications-and-recommended-workflows/cms-124-cervical-cancer-screening.md).

## Compliance Configuration

As an inverse measure, "numerator compliance" should focus on how to keep patients out of the numerator.  This is done by having an appropriately coded HbA1c observation, with a result <9.0% at the end of the measurement period.  If a patient is missing an HbA1c observation during the measurement period, the observation code does not include one of the allowable LOINC codes, there is no result on the observation, or the result is >=9.0%, the patient will be included in the numerator.

Regardless of how the HbA1c observation is added to the chart, clients will need to ensure that the appropriate observation is configured with one of the following LOINC codes:

* 4548-4
* 4549-2
* 17856-6.

Clients should search the {{% syslink "Observation Codes editor" "f=admin&subfunc=obscodes_manager&t=Observation+Codes" %}} for the Hemoglobin A1c observation to determine if multiple HbA1c [observations need to be merged](../../../order-and-result-management/observation-code-merging.md).

## Source(s)

[eCQI CMS122](https://ecqi.healthit.gov/ecqm/ep/2024/cms122v12)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>09/05/2024</td>
<td>Initial document creation</td>
</tr>
</table>
