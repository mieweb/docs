---
id: '1hZk611fsSe3YlJaMUWzYn0T3aaNCB8FVMkykoD2uKxA'
title: 'CMS 142 - Diabetic Retinopathy: Communication with the Physician Managing Ongoing Diabetes Care'
date: '2022-04-28T13:53:43.464Z'
version: 15
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms142v10'
source: 'https://drive.google.com/open?id=1hZk611fsSe3YlJaMUWzYn0T3aaNCB8FVMkykoD2uKxA'
wikigdrive: '18ac9a8be49637c0d2bea8d32c40badbcda9a0ca'
---
## Overview

[CMS142v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v8&showresulttype=Measure) (2020)  
[CMS142v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v9&showresulttype=Measure) (2021)  
[CMS142v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS142v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS142v10</td>
<td>–</td>
<td>–</td>
<td>019</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients aged 18 years and older with a diagnosis of diabetic retinopathy who had a dilated macular or fundus exam performed with documented communication to the physician who manages the ongoing care of the patient with diabetes mellitus regarding the findings of the macular or fundus exam at least once within 12 months</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients aged 18 years and older with a diagnosis of diabetic retinopathy</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population who had a dilated macular or fundus exam performed</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with documentation, at least once within 12 months, of the findings of the dilated macular or fundus exam via communication to the physician who manages the patient's diabetic care</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td><ul><li><p>Documentation of medical reason(s) for not communicating the findings of the dilated macular or fundus exam to the physician who manages the ongoing care of the patient with diabetes.</p></li><li><p>Documentation of patient reason(s) for not communicating the findings of the dilated macular or fundus exam to the physician who manages the ongoing care of the patient with diabetes.</p></li></ul></td>
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
<td>Communication and Care Coordination</td>
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
<td>Diagnosis: Diabetic Retinopathy</td>
<td>2.16.840.1.113883.3.526.3.327</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Ophthalmological Services</td>
<td>2.16.840.1.113883.3.526.3.1285</td>
</tr>
<tr>
<td>Encounter, Performed: Outpatient Consultation</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1008</td>
</tr>

</table>


### Denominator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Performed: Macular Exam</td>
<td>2.16.840.1.113883.3.526.3.1251</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Communication, Performed: Level of Severity of Retinopathy Findings</td>
<td>2.16.840.1.113883.3.526.3.1283</td>
</tr>
<tr>
<td>Communication, Performed: Macular edema absent (situation)</td>
<td>SNOMEDCT Code 428341000124108</td>
</tr>
<tr>
<td>Communication, Performed: Macular Edema Findings Present</td>
<td>2.16.840.1.113883.3.526.3.1320</td>
</tr>

</table>


### Denominator Exceptions


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Communication, Not Performed: Level of Severity of Retinopathy Findings</td>
<td>2.16.840.1.113883.3.526.3.1283</td>
</tr>
<tr>
<td>Communication, Not Performed: Macular edema absent (situation)</td>
<td>SNOMEDCT Code 428341000124108</td>
</tr>
<tr>
<td>Communication, Not Performed: Macular Edema Findings Present</td>
<td>2.16.840.1.113883.3.526.3.1320</td>
</tr>

</table>


## Source(s)

[eCQI CMS142](https://ecqi.healthit.gov/ecqm/ep/2022/cms142v10)
