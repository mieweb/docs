---
id: '1MS8jTf3adxq7sEVlOQ5mcv7Km_IBdNbGUXt01iRMB3I'
title: 'CMS139 - Falls: Screening for Future Fall Risk Configuration'
date: '2024-09-05T21:12:04.151Z'
version: 21
lastAuthor: 'nrichardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v12&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v11&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v10&showresulttype=Measure'
  - '../quality-measure-specifications-and-recommended-workflows/cms-124-cervical-cancer-screening.md'
  - 'https://ecqi.healthit.gov/ecqm/ep/2024/cms124v12'
source: 'https://drive.google.com/open?id=1MS8jTf3adxq7sEVlOQ5mcv7Km_IBdNbGUXt01iRMB3I'
wikigdrive: '14369108b4618bce79d4c23f4d172a439fb63721'
---
## Overview

[CMS139v12](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v12&showresulttype=Measure) (2024)

[CMS139v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v11&showresulttype=Measure) (2023)

[CMS139v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms139&showresult=CMS139v10&showresulttype=Measure) (2022)

## Clinical Instructions

Ensure all women aged 24-64 are screened for cervical cancer on the following schedule.  Beginning at age 21, women should be screened using a Pap Test at least once every 3 years.  Alternatively, beginning at age 30, women can be screened using an HPV Test at least once every 5 years. Laboratory screening tests will be recorded as observations with results either manually entered or received from a laboratory interface.

For detailed information on the recommended workflow please [click here](../quality-measure-specifications-and-recommended-workflows/cms-124-cervical-cancer-screening.md).

## Compliance Configuration

Numerator compliance requires either an appropriately coded Pap Test observation or an appropriately coded HPV Test observation.  The observation name is not important for compliance, the only requirement is that the LOINC code on the observation code is in one of the following value sets.

### Pap Test (2.16.840.1.113883.3.464.1003.108.12.1017)

<table>
<tr>
<td><strong>LOINC</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>10524-7</td>
<td>Microscopic observation [Identifier] in Cervix by Cyto stain</td>
</tr>
<tr>
<td>18500-9</td>
<td>Microscopic observation [Identifier] in Cervix by Cyto stain.thin prep</td>
</tr>
<tr>
<td>19762-4</td>
<td>General categories [Interpretation] of Cervical or vaginal smear or scraping by Cyto stain</td>
</tr>
<tr>
<td>19764-0</td>
<td>Statement of adequacy [Interpretation] of Cervical or vaginal smear or scraping by Cyto stain</td>
</tr>
<tr>
<td>19765-7</td>
<td>Microscopic observation [Identifier] in Cervical or vaginal smear or scraping by Cyto stain</td>
</tr>
<tr>
<td>19766-5</td>
<td>Microscopic observation [Identifier] in Cervical or vaginal smear or scraping by Cyto stain Narrative</td>
</tr>
<tr>
<td>19774-9</td>
<td>Cytology study comment Cervical or vaginal smear or scraping Cyto stain</td>
</tr>
<tr>
<td>33717-0</td>
<td>Cervical AndOr vaginal cytology study</td>
</tr>
<tr>
<td>47527-7</td>
<td>Cytology report of Cervical or vaginal smear or scraping Cyto stain.thin prep</td>
</tr>
<tr>
<td>47528-5</td>
<td>Cytology report of Cervical or vaginal smear or scraping Cyto stain</td>
</tr>
</table>

### HPV Test (2.16.840.1.113883.3.464.1003.110.12.1059)

<table>
<tr>
<td><strong>LOINC</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>21440-3</td>
<td>Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe</td>
</tr>
<tr>
<td>30167-1</td>
<td>Human papilloma virus 16+18+31+33+35+39+45+51+52+56+58+59+68 DNA [Presence] in Cervix by Probe with signal amplification</td>
</tr>
<tr>
<td>38372-9</td>
<td>Human papilloma virus 6+11+16+18+31+33+35+39+42+43+44+45+51+52+56+58+59+68 DNA [Presence] in Cervix by Probe with signal amplification</td>
</tr>
<tr>
<td>59263-4</td>
<td>Human papilloma virus 16 DNA [Presence] in Cervix by Probe with signal amplification</td>
</tr>
<tr>
<td>59264-2</td>
<td>Human papilloma virus 18 DNA [Presence] in Cervix by Probe with signal amplification</td>
</tr>
<tr>
<td>59420-0</td>
<td>Human papilloma virus 16+18+31+33+35+39+45+51+52+56+58+59+66+68 DNA [Presence] in Cervix by Probe with signal amplification</td>
</tr>
<tr>
<td>69002-4</td>
<td>Human papilloma virus E6+E7 mRNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>71431-1</td>
<td>Human papilloma virus 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>75694-0</td>
<td>Human papilloma virus 18+45 E6+E7 mRNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>77379-6</td>
<td>Human papilloma virus 16 and 18 and 31+33+35+39+45+51+52+56+58+59+66+68 DNA [Interpretation] in Cervix</td>
</tr>
<tr>
<td>77399-4</td>
<td>Human papilloma virus 16 DNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>77400-0</td>
<td>Human papilloma virus 18 DNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>82354-2</td>
<td>Human papilloma virus 16 and 18+45 E6+E7 mRNA [Identifier] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>82456-5</td>
<td>Human papilloma virus 16 E6+E7 mRNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>82675-0</td>
<td>Human papilloma virus 16+18+31+33+35+39+45+51+52+56+58+59+66+68 DNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
<tr>
<td>95539-3</td>
<td>Human papilloma virus 31 DNA [Presence] in Cervix by NAA with probe detection</td>
</tr>
</table>

## Source(s)

[eCQI CMS124](https://ecqi.healthit.gov/ecqm/ep/2024/cms124v12)

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
