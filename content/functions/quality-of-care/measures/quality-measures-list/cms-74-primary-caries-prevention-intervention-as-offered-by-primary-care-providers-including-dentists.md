---
id: '1vbEyU6QkNEsdf3r7hkJs9i7pQWoUK9a6T1zKkU5cXL4'
title: 'CMS 74 - Primary Caries Prevention Intervention as Offered by Primary Care Providers, including Dentists'
date: '2022-05-16T15:47:08.770Z'
version: 40
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v10&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v11&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms074v11'
source: 'https://drive.google.com/open?id=1vbEyU6QkNEsdf3r7hkJs9i7pQWoUK9a6T1zKkU5cXL4'
wikigdrive: 'd3e22db37cfdd4a4e5d0d1fe46fc320e82e79136'
---
## Overview  
  
[CMS74v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v9&showresulttype=Measure) (2020)  
[CMS74v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v10&showresulttype=Measure) (2021)  
[CMS74v11](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&showresult=CMS74v11&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS74v11</td>
<td>–</td>
<td>–</td>
<td>379</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of children, 6 months - 20 years of age, who received a fluoride varnish application during the measurement period</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Children, 6 months - 20 years of age, with a visit during the measurement period</td>
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
<td>Children who receive a fluoride varnish application during the measurement period</td>
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
<td><strong>Stratification</strong></td>
<td><ul><li><p>6 months-5 years</p></li><li><p>6-12 years</p></li><li><p>13-20 years</p></li></ul></td>
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
  
Track reports of dental fluoride application for all patients 6 months to 20 years of age.
  
### Workflow  

1. While documenting the Visit encounter, record the procedure, as appropriate
2. Open the Preventive Care section
3. Add Fluoride Application
4. Enter the nearest completed date and save the order as completed
5. Continue documenting the encounter, as appropriate
6. When completed, Close and Archive the encounter
  
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
<tr>
<td>Encounter, Performed: Office Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
</tr>
<tr>
<td>Encounter, Performed: Online Assessments</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1089</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care - Established Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1024</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care- Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
</tr>
<tr>
<td>Encounter, Performed: Telephone Visits</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1080</td>
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
<td>Procedure, Performed: Fluoride Varnish Application for Children</td>
<td>2.16.840.1.113883.3.464.1003.125.12.1002</td>
</tr>

</table>

  
## Source(s)  
  
[eCQI CMS74](https://ecqi.healthit.gov/ecqm/ep/2022/cms074v11)

