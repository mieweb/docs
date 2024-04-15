---
id: '1cQ6E7ZtZO3gwdq3EZAJTkQNSLOGgnuyUPaXz_voXwb8'
title: 'CMS 133 - Cataracts: 20/40 or Better Visual Acuity within 90 Days Following Cataract Surgery'
date: '2022-04-22T20:16:32.623Z'
version: 26
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms133v10'
source: 'https://drive.google.com/open?id=1cQ6E7ZtZO3gwdq3EZAJTkQNSLOGgnuyUPaXz_voXwb8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

[CMS133v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v8&showresulttype=Measure) (2020)

[CMS133v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v9&showresulttype=Measure) (2021)

[CMS133v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS133v10&showresulttype=Measure) (2022)

### Identifiers

<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS133v10</td>
<td>0565e</td>
<td>0565</td>
<td>191</td>
</tr>
</table>

*MIE only supports data collection and reporting using eCQM specifications

### Definitions

<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of cataract surgeries for patients aged 18 and older with a diagnosis of uncomplicated cataract and no significant ocular conditions impacting the visual outcome of surgery and had best-corrected visual acuity of 20/40 or better (distance or near) achieved in the operative eye within 90 days following the cataract surgery</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All cataract surgeries for patients aged 18 years and older who did not meet any exclusion criteria</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>Cataract surgeries in patients with significant ocular conditions impacting the visual outcome of surgery</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Cataract surgeries with best-corrected visual acuity of 20/40 or better (distance or near) achieved in the operative eye within 90 days following cataract surgery</td>
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
<td>Episode</td>
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
<td>Procedure, Performed: Cataract Surgery</td>
<td>2.16.840.1.113883.3.526.3.1411</td>
</tr>
</table>

### Denominator Exclusions

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Acute and Subacute Iridocyclitis</td>
<td>2.16.840.1.113883.3.526.3.1241</td>
</tr>
<tr>
<td>Diagnosis: Amblyopia</td>
<td>2.16.840.1.113883.3.526.3.1448</td>
</tr>
<tr>
<td>Diagnosis: Burn Confined to Eye and Adnexa</td>
<td>2.16.840.1.113883.3.526.3.1409</td>
</tr>
<tr>
<td>Diagnosis: Cataract Secondary to Ocular Disorders</td>
<td>2.16.840.1.113883.3.526.3.1410</td>
</tr>
<tr>
<td>Diagnosis: Cataract, Congenital</td>
<td>2.16.840.1.113883.3.526.3.1412</td>
</tr>
<tr>
<td>Diagnosis: Cataract, Mature or Hypermature</td>
<td>2.16.840.1.113883.3.526.3.1413</td>
</tr>
<tr>
<td>Diagnosis: Cataract, Posterior Polar</td>
<td>2.16.840.1.113883.3.526.3.1414</td>
</tr>
<tr>
<td>Diagnosis: Central Corneal Ulcer</td>
<td>2.16.840.1.113883.3.526.3.1428</td>
</tr>
<tr>
<td>Diagnosis: Certain Types of Iridocyclitis</td>
<td>2.16.840.1.113883.3.526.3.1415</td>
</tr>
<tr>
<td>Diagnosis: Choroidal Degenerations</td>
<td>2.16.840.1.113883.3.526.3.1450</td>
</tr>
<tr>
<td>Diagnosis: Choroidal Detachment</td>
<td>2.16.840.1.113883.3.526.3.1451</td>
</tr>
<tr>
<td>Diagnosis: Choroidal Hemorrhage and Rupture</td>
<td>2.16.840.1.113883.3.526.3.1452</td>
</tr>
<tr>
<td>Diagnosis: Chronic Iridocyclitis</td>
<td>2.16.840.1.113883.3.526.3.1416</td>
</tr>
<tr>
<td>Diagnosis: Cloudy Cornea</td>
<td>2.16.840.1.113883.3.526.3.1417</td>
</tr>
<tr>
<td>Diagnosis: Corneal Edema</td>
<td>2.16.840.1.113883.3.526.3.1418</td>
</tr>
<tr>
<td>Diagnosis: Corneal Opacity and Other Disorders of Cornea</td>
<td>2.16.840.1.113883.3.526.3.1419</td>
</tr>
<tr>
<td>Diagnosis: Degeneration of Macula and Posterior Pole</td>
<td>2.16.840.1.113883.3.526.3.1453</td>
</tr>
<tr>
<td>Diagnosis: Degenerative Disorders of Globe</td>
<td>2.16.840.1.113883.3.526.3.1454</td>
</tr>
<tr>
<td>Diagnosis: Diabetic Macular Edema</td>
<td>2.16.840.1.113883.3.526.3.1455</td>
</tr>
<tr>
<td>Diagnosis: Diabetic Retinopathy</td>
<td>2.16.840.1.113883.3.526.3.327</td>
</tr>
<tr>
<td>Diagnosis: Disorders of Optic Chiasm</td>
<td>2.16.840.1.113883.3.526.3.1457</td>
</tr>
<tr>
<td>Diagnosis: Disorders of Visual Cortex</td>
<td>2.16.840.1.113883.3.526.3.1458</td>
</tr>
<tr>
<td>Diagnosis: Disseminated Chorioretinitis and Disseminated Retinochoroiditis</td>
<td>2.16.840.1.113883.3.526.3.1459</td>
</tr>
<tr>
<td>Diagnosis: Focal Chorioretinitis and Focal Retinochoroiditis</td>
<td>2.16.840.1.113883.3.526.3.1460</td>
</tr>
<tr>
<td>Diagnosis: Glaucoma</td>
<td>2.16.840.1.113883.3.526.3.1423</td>
</tr>
<tr>
<td>Diagnosis: Glaucoma Associated with Congenital Anomalies, Dystrophies, and Systemic Syndromes</td>
<td>2.16.840.1.113883.3.526.3.1461</td>
</tr>
<tr>
<td>Diagnosis: Hereditary Choroidal Dystrophies</td>
<td>2.16.840.1.113883.3.526.3.1462</td>
</tr>
<tr>
<td>Diagnosis: Hereditary Corneal Dystrophies</td>
<td>2.16.840.1.113883.3.526.3.1424</td>
</tr>
<tr>
<td>Diagnosis: Hereditary Retinal Dystrophies</td>
<td>2.16.840.1.113883.3.526.3.1463</td>
</tr>
<tr>
<td>Diagnosis: Hypotony of Eye</td>
<td>2.16.840.1.113883.3.526.3.1426</td>
</tr>
<tr>
<td>Diagnosis: Injury to Optic Nerve and Pathways</td>
<td>2.16.840.1.113883.3.526.3.1427</td>
</tr>
<tr>
<td>Diagnosis: Macular Scar of Posterior Polar</td>
<td>2.16.840.1.113883.3.526.3.1559</td>
</tr>
<tr>
<td>Diagnosis: Morgagnian Cataract</td>
<td>2.16.840.1.113883.3.526.3.1558</td>
</tr>
<tr>
<td>Diagnosis: Nystagmus and Other Irregular Eye Movements</td>
<td>2.16.840.1.113883.3.526.3.1465</td>
</tr>
<tr>
<td>Diagnosis: Open Wound of Eyeball</td>
<td>2.16.840.1.113883.3.526.3.1430</td>
</tr>
<tr>
<td>Diagnosis: Optic Atrophy</td>
<td>2.16.840.1.113883.3.526.3.1466</td>
</tr>
<tr>
<td>Diagnosis: Optic Neuritis</td>
<td>2.16.840.1.113883.3.526.3.1467</td>
</tr>
<tr>
<td>Diagnosis: Other and Unspecified Forms of Chorioretinitis and Retinochoroiditis</td>
<td>2.16.840.1.113883.3.526.3.1468</td>
</tr>
<tr>
<td>Diagnosis: Other Background Retinopathy and Retinal Vascular Changes</td>
<td>2.16.840.1.113883.3.526.3.1469</td>
</tr>
<tr>
<td>Diagnosis: Other Disorders of Optic Nerve</td>
<td>2.16.840.1.113883.3.526.3.1471</td>
</tr>
<tr>
<td>Diagnosis: Other Endophthalmitis</td>
<td>2.16.840.1.113883.3.526.3.1473</td>
</tr>
<tr>
<td>Diagnosis: Other Proliferative Retinopathy</td>
<td>2.16.840.1.113883.3.526.3.1480</td>
</tr>
<tr>
<td>Diagnosis: Pathologic Myopia</td>
<td>2.16.840.1.113883.3.526.3.1432</td>
</tr>
<tr>
<td>Diagnosis: Posterior Lenticonus</td>
<td>2.16.840.1.113883.3.526.3.1433</td>
</tr>
<tr>
<td>Diagnosis: Prior Penetrating Keratoplasty</td>
<td>2.16.840.1.113883.3.526.3.1475</td>
</tr>
<tr>
<td>Diagnosis: Purulent Endophthalmitis</td>
<td>2.16.840.1.113883.3.526.3.1477</td>
</tr>
<tr>
<td>Diagnosis: Retinal Detachment with Retinal Defect</td>
<td>2.16.840.1.113883.3.526.3.1478</td>
</tr>
<tr>
<td>Diagnosis: Retinal Vascular Occlusion</td>
<td>2.16.840.1.113883.3.526.3.1479</td>
</tr>
<tr>
<td>Diagnosis: Retrolental Fibroplasias</td>
<td>2.16.840.1.113883.3.526.3.1438</td>
</tr>
<tr>
<td>Diagnosis: Scleritis</td>
<td>2.16.840.1.113762.1.4.1226.1</td>
</tr>
<tr>
<td>Diagnosis: Separation of Retinal Layers</td>
<td>2.16.840.1.113883.3.526.3.1482</td>
</tr>
<tr>
<td>Diagnosis: Traumatic Cataract</td>
<td>2.16.840.1.113883.3.526.3.1443</td>
</tr>
<tr>
<td>Diagnosis: Uveitis</td>
<td>2.16.840.1.113883.3.526.3.1444</td>
</tr>
<tr>
<td>Diagnosis: Vascular Disorders of Iris and Ciliary Body</td>
<td>2.16.840.1.113883.3.526.3.1445</td>
</tr>
<tr>
<td>Diagnosis: Visual Field Defects</td>
<td>2.16.840.1.113883.3.526.3.1446</td>
</tr>
</table>

### Numerator

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Physical Exam, Performed: Best corrected visual acuity (observable entity)</td>
<td>SNOMEDCT Code 419775003</td>
</tr>
<tr>
<td>Physical Exam, Performed: Best Corrected Visual Acuity Exam Using Snellen Chart</td>
<td>2.16.840.1.113883.3.526.3.1560</td>
</tr>
</table>

## Source(s)

[eCQI CMS133](https://ecqi.healthit.gov/ecqm/ep/2022/cms133v10)
