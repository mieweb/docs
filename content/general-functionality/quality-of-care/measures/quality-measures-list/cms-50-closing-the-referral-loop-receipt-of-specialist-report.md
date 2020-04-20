---
title: "CMS 50 - Closing the Referral Loop: Receipt of Specialist Report"
date: 2020-02-27T20:57:03.081Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-50-closing-the-referral-loop-receipt-of-specialist-report.html"
version: 7
id: 1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM
source: https://drive.google.com/open?id=1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM
menu:
    main:
        name: "CMS 50 - Closing the Referral Loop: Receipt of Specialist Report"
        identifier: "1rjJ9MuDD0dyuQq-Ql6QH6iN5BE0WjSOBKJS3ZLIWGvM"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 3810
---
[CMS50v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS50&showresult=CMS50v5&showresulttype=Measure) (2017)

[CMS50v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS50&showresult=CMS50v6&showresulttype=Measure) (2018)

[CMS50v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS50&showresult=CMS50v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients with referrals, regardless of age, for which the referring provider receives a report from the provider to whom the patient was referred.

**Initial Patient Population**:  Number of patients, regardless of age, who were referred by one provider to another provider, and who had a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: Number of patients with a referral, for which the referring provider received a report from the provider to whom the patient was referred.

**Inverse Measure**:  No

## Clinical Instructions

Ensure the system is configured to order, track, and archive referrals appropriately. This includes configuration for scanning and indexing functionality, so that reports, consultations, referral letters, or the like can be scanned into and indexed within the system and be tracked appropriately. With configurations in place, use the encounter visit orders to refer a patient out, and when the receipt of the appropriate report/consultation is received, link to the referral order and complete.

* While documenting the Visit Encounter, use the Visit Orders to create a Referral. {{% note %}}
    * The out-of-the-box referral order document type (ORDREF) needs to be saved with LOINC 47045-0.
    * The Ordering Provider field must be the performing provider (i.e., not the nurse, MA, or staff) in order for the performing provider to satisfy the measure.  
    * All referral orders created for a patient during the reporting period must be Completed in order for the patient to count in the numerator.

{{% /note %}}


* When entering the fields of the referral order, ensure the Refer To field is specified.
* Add any additional comments to the referral order, as needed.
* Click Submit.
* Continue documenting the encounter as needed.
* When completed, Close and Archive the encounter.
* <strong>When the Referral Report is returned to the office</strong>, ensure the document is scanned and indexed into the system correctly, and complete the referral order. {{% note %}}
    * The referral order and the received consult note will need to be linked in order to satisfy the measure. This can be done during indexing; otherwise, linking can be done manually, from the Open Orders screen, when completing orders.
    * The consult note document type (e.g., CONSNOTE) needs to be saved with LOINC 34140-4.
    * The consult note needs to be received after the referral order is created.
    * The consult report cannot be from the same provider that sent the referral order.

{{% /note %}}


## Evidence

### Initial Patient Population

<table>
  <tr>
    <td>
Name

    </td>
    <td>
Value Set

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Ophthalmological Services

    </td>
    <td>
2.16.840.1.113883.3.526.3.1285

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Office Visit

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1001

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care Services - Established Office Visit, 18 and Up

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1025

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care Services-Initial Office Visit, 18 and Up

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1023

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care Services, Initial Office Visit, 0 to 17

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1022

    </td>
  </tr>
  <tr>
    <td>
Encounter, Performed: Preventive Care, Established Office Visit, 0 to 17

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1024

    </td>
  </tr>
  <tr>
    <td>
Intervention, Performed: Referral

    </td>
    <td>
2.16.840.1.113883.3.464.1003.101.12.1046

    </td>
  </tr>
</table>

### Denominator

Equals Initial Population

### Numerator

<table>
  <tr>
    <td>
Name

    </td>
    <td>
Value Set

    </td>
  </tr>
  <tr>
    <td>
Communication: From Provider To Provider: Consultant Report

    </td>
    <td>
2.16.840.1.113883.3.464.1003.121.12.1006

    </td>
  </tr>
</table>

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS50&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)

