---
id: '1uyzFO8FwjOJb8-ixYtKd94iuVcu4wwwIhvkIO5Fybw4'
title: 'CMS 129 - Prostate Cancer: Avoidance of Overuse of Bone Scan for Staging Low Risk Prostate Cancer Patients'
date: '2022-04-22T18:22:57.037Z'
version: 12
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms129v11'
source: 'https://drive.google.com/open?id=1uyzFO8FwjOJb8-ixYtKd94iuVcu4wwwIhvkIO5Fybw4'
wikigdrive: 'cabd81c2148adf2f2b82ccf2d7cca8fcca5deb78'
---
## Overview  
  
[CMS129v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v9&showresulttype=Measure) (2020)  
[CMS129v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v10&showresulttype=Measure) (2021)  
[CMS129v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS129v11&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS129v11</td>
<td>0389e</td>
<td>0389</td>
<td>102</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients, regardless of age, with a diagnosis of prostate cancer at low (or very low) risk of recurrence receiving interstitial prostate brachytherapy, OR external beam radiotherapy to the prostate, OR radical prostatectomy who did not have a bone scan performed at any time since diagnosis of prostate cancer</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>All patients, regardless of age, with a diagnosis of prostate cancer</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population at low (or very low) risk of recurrence receiving interstitial prostate brachytherapy, OR external beam radiotherapy to the prostate, OR radical prostatectomy</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients who did not have a bone scan performed at any time since diagnosis of prostate cancer</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Denominator Exceptions</strong></td>
<td>Documentation of reason(s) for performing a bone scan (including documented pain, salvage therapy, other medical reasons, or bone scan ordered by someone other than reporting clinician)</td>
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
<td>Efficiency and Cost Reduction</td>
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
<td>Diagnosis: Prostate Cancer</td>
<td>2.16.840.1.113883.3.526.3.319</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Gleason score in Specimen Qualitative</td>
<td>LOINC Code 35266-6</td>
</tr>
<tr>
<td>Laboratory Test, Performed: Prostate Specific Antigen Test</td>
<td>2.16.840.1.113883.3.526.3.401</td>
</tr>
<tr>
<td>Procedure, Performed: Cancer staging (tumor staging)</td>
<td>SNOMEDCT Code 258232002</td>
</tr>

</table>

  
### Denominator Exclusions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Pain Related to Prostate Cancer</td>
<td>2.16.840.1.113883.3.526.3.451</td>
</tr>
<tr>
<td>Procedure, Performed: Prostate Cancer Treatment</td>
<td>2.16.840.1.113883.3.526.3.398</td>
</tr>

</table>

  
### Numerator  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnostic Study, Performed: Bone Scan</td>
<td>2.16.840.1.113883.3.526.3.320</td>
</tr>

</table>

  
## Source(s)  
  
[eCQI CMS129](https://ecqi.healthit.gov/ecqm/ep/2022/cms129v11)

