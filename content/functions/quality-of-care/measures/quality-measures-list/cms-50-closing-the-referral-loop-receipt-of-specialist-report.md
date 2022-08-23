---
id: '1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM'
title: 'CMS 50 - Closing the Referral Loop: Receipt of Specialist Report'
date: '2022-05-24T13:52:38.737Z'
version: 108
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms050v10'
source: 'https://drive.google.com/open?id=1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM'
wikigdrive: 'eb4f9f8e82d104274f4630740771c9319ef63af0'
menu:
  main:
    name: 'CMS 50 - Closing the Referral Loop: Receipt of Specialist Report'
    identifier: '1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 3810
---
## Overview

[CMS50v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v8&showresulttype=Measure) (2020)
[CMS50v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v9&showresulttype=Measure) (2021)
[CMS50v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&name=RXDBmain&showresult=CMS50v10&showresulttype=Measure) (2022)

### Identifiers


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS50v10</td>
<td>–</td>
<td>–</td>
<td>374</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications

### Definitions


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients with referrals, regardless of age, for which the referring provider receives a report from the provider to whom the patient was referred.</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Number of patients, regardless of age, who had a visit during the measurement period and were referred by one provider to another provider.</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td>–</td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Number of patients with a referral, for which the referring provider received a report from the provider to whom the patient was referred</td>
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

Ensure the system is configured to order, track, and archive referrals appropriately creating documents with allowable SNOMED Concept IDs. This includes configuration for scanning and indexing functionality, so that reports, consultations, referral letters, or the like can be scanned into and indexed within the system and be tracked appropriately. With configurations in place, use the encounter visit orders to refer a patient out, and when the receipt of the appropriate report/consultation is received, link to the referral order and complete.

### Workflow

In an encounter
Open Visit orders section
Make referral order
Refer to outside provider


1. While documenting the Visit Encounter, use the Visit Orders to create a Referral.
   {{% note %}}
    * The out-of-the-box referral order document type (ORDREF) needs to be saved with LOINC 47045-0.
    * The Ordering Provider field must be the performing provider (i.e., not the nurse, MA, or staff) in order for the performing provider to satisfy the measure.  
    * All referral orders created for a patient during the reporting period must be Completed in order for the patient to count in the numerator.
{{% /note %}}
1. When entering the fields of the referral order, ensure the Refer To field is specified.
2. Add any additional comments to the referral order, as needed.
3. Click Submit.
4. Continue documenting the encounter as needed.
5. When completed, Close and Archive the encounter.
6. <strong>When the Referral Report is returned to the office</strong>, ensure the document is scanned and indexed into the system correctly, and complete the referral order.
   {{% note %}}
    * The referral order and the received consult note will need to be linked in order to satisfy the measure. This can be done during indexing; otherwise, linking can be done manually, from the Open Orders screen, when completing orders.
        * Order request chart tab click complete in options column of the pending referral order, complete order with linked doc_id
    * The consult note document type (e.g., CONSNOTE) needs to be saved with LOINC 34140-4.
    * The consult note needs to be received after the referral order is created.
    * The consult report cannot be from the same provider that sent the referral order.
{{% /note %}}

## Evidence


### Initial Patient Population


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
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
<td>Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1025</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1022</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1023</td>
</tr>
<tr>
<td>Encounter, Performed: Preventive Care, Established Office Visit, 0 to 17</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1024</td>
</tr>
<tr>
<td>Intervention, Order: Referral</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1046</td>
</tr>
<tr>
<td>Intervention, Performed: Referral</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1046</td>
</tr>

</table>


### Numerator


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Communication, Performed: Consultant Report</td>
<td>2.16.840.1.113883.3.464.1003.121.12.1006</td>
</tr>

</table>


## Source(s)

[eCQI CMS50](https://ecqi.healthit.gov/ecqm/ep/2022/cms050v10)
