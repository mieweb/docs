---
id: '1kyoIAZ_NN1bCSho6fz2m91OzDZH4lAI1Ps80HpVxcTk'
title: 'CMS 165 - Controlling High Blood Pressure Configuration'
date: '2024-09-19T20:35:48.649Z'
version: 20
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure'
  - '../quality-measure-specifications-and-recommended-workflows/cms-165-controlling-high-blood-pressure.md'
  - 'https://ecqi.healthit.gov/ecqm/ec/2024/cms0165v12?qt-tabs_measure=measure-information'
source: 'https://drive.google.com/open?id=1kyoIAZ_NN1bCSho6fz2m91OzDZH4lAI1Ps80HpVxcTk'
wikigdrive: '8cb7d1655146bef4a73c283dab1861495e6fce27'
---
## Overview

[CMS165v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v12&showresulttype=Measure) (2024)

[CMS165v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms165&showresult=CMS165v11&showresulttype=Measure) (2023)

[CMS165v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS165v10&showresulttype=Measure) (2022)

## Clinical Instructions

Using the Vitals section of the encounter, ensure blood pressure is recorded correctly and the systolic and diastolic observations are coded with the appropriate LOINC (i.e., 8480-6 and 8462-4). The patient also needs a diagnosis of hypertension under the Symptoms/Diagnosis section of the encounter, active within the first 6 months of the measurement period in order to populate the denominator.

For detailed information on the recommended workflow please [click here](../quality-measure-specifications-and-recommended-workflows/cms-165-controlling-high-blood-pressure.md).

## Compliance Configuration

No configuration is necessary for an out of the box standard system.  The following codes should be configured by default in the Vitals section.

* Systolic Blood Pressure: 8480-6
* Diastolic Blood Pressure: 8462-4

Additionally, patients require a diagnosis of Hypertension to be included in the denominator.  Most coded diagnoses available in the conditions autocomplete in both the Symptoms/Diagnosis and Smart Plan sections will contribute; however, condition codes can be confirmed using 2.16.840.1.113883.3.464.1003.104.12.1011.  This diagnosis must start before the measurement period or during the first 6 months of the measurement period, and must be active for some portion of the measurement period.

## Source(s)

[eCQI CMS165](https://ecqi.healthit.gov/ecqm/ec/2024/cms0165v12?qt-tabs_measure=measure-information)

## Revision History

<table>
<tr>
<td><strong>Date</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>09/19/2024</td>
<td>Initial document creation</td>
</tr>
</table>
