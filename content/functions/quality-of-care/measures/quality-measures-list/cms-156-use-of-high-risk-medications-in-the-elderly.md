---
id: '1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M'
title: 'CMS 156 - Use of High-Risk Medications in the Elderly'
date: '2022-04-22T14:21:28.814Z'
version: 60
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v8&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v9&showresulttype=Measure'
  - 'https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v10&showresulttype=Measure'
  - 'https://ecqi.healthit.gov/glossary/denominator'
  - 'https://ecqi.healthit.gov/ecqm/ep/2022/cms156v10'
source: 'https://drive.google.com/open?id=1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M'
wikigdrive: '2170bf47fa5a6c78b65673f5062de64818a1f71c'
menu:
  main:
    name: 'CMS 156 - Use of High-Risk Medications in the Elderly'
    identifier: '1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M'
    parent: '14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y'
    weight: 4040
---
## Overview  
  
[CMS156v8](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v8&showresulttype=Measure) (2020)  
[CMS156v9](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v9&showresulttype=Measure) (2021)  
[CMS156v10](https://medicalcodify.com/eh/?f=layoutnouser&func=&module=&tabmodule=&name=RXDBmain&searchterm=cms2&showresult=CMS156v10&showresulttype=Measure) (2022)
  
### Identifiers  


<table>
<tr>
<td><strong>CMS eCQM ID</strong></td>
<td><strong>NQF eCQM ID</strong></td>
<td><strong>NQF</strong></td>
<td><strong>MIPS Quality ID</strong></td>
</tr>
<tr>
<td>CMS156v10</td>
<td>–</td>
<td>0022</td>
<td>238</td>
</tr>

</table>
*MIE only supports data collection and reporting using eCQM specifications
  
### Definitions  


<table>
<tr>
<td><strong>Description</strong></td>
<td>Percentage of patients 65 years of age and older who were ordered at least two high-risk medications from the same drug class.</td>
</tr>
<tr>
<td>Percentage of patients 65 years of age and older who were ordered at least two high-risk medications from the same drug class.</td>
<td>Percentage of patients 65 years of age and older who were ordered at least two high-risk medications from the same drug class, except for appropriate diagnoses.</td>
<td>Total rate (the sum of the two numerators divided by the <a href="https://ecqi.healthit.gov/glossary/denominator"></a>, deduplicating for patients in both numerators).</td>
</tr>
<tr>
<td><strong>Initial Patient Population</strong></td>
<td>Patients 65 years and older who had a visit during the measurement period</td>
</tr>
<tr>
<td><strong>Denominator</strong></td>
<td>Equals Initial Population</td>
</tr>
<tr>
<td><strong>Denominator Exclusions</strong></td>
<td><ul><li><p>Exclude patients who are in hospice care for any part of the measurement period.</p></li><li><p>Exclude patients receiving palliative care during the measurement period.</p></li></ul></td>
</tr>
<tr>
<td><strong>Numerator</strong></td>
<td>Patients with at least two orders of high-risk medications from the same drug class.</td>
<td>Patients with at least two orders of high-risk medications from the same drug class.</td>
<td>Total rate (the sum of the two previous numerators, deduplicated).</td>
</tr>
<tr>
<td><strong>Numerator Exclusions</strong></td>
<td>–</td>
<td>For patients with two or more antipsychotic prescriptions ordered, exclude patients who have a diagnosis of schizophrenia, schizoaffective disorder, or bipolar disorder on or between January 1 of the year prior to the measurement period and the Index Prescription Start Date (IPSD) for antipsychotics.
For patients with two or more benzodiazepine prescriptions ordered, exclude patients who have a diagnosis of seizure disorders, rapid eye movement sleep behavior disorder, benzodiazepine withdrawal, ethanol withdrawal, or severe generalized anxiety disorder on or between January 1 of the year prior to the measurement period and the IPSD for benzodiazepines.</td>
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
<td>Lower score indicates better quality</td>
</tr>
<tr>
<td><strong>Domain</strong></td>
<td>Patient Safety</td>
</tr>

</table>


  
## Clinical Instructions  

  
### New UI Visit Encounter (valid RC202109+)  


  
### Original Visit Encounter  
  
{{% note %}}

This is an inverse measure. The goal is to have a 0 in the numerator.  When e-prescribing, avoid prescribing any of the medications listed below, to the specified population, whenever possible.
{{% /note %}}
Track all patients that are 65+ and prescribed high-risk medications. Two rates are reported, so be aware that patients with at least one high-risk medication, as well as patients with at least two orders for the same high-risk medication, will be reported for the measurement period.
1. While documenting the encounter, use the Presenting Medications section and Medication Orders section to prescribe and reconcile medications, as usual.
2. Prescribe medications, as needed.
3. Continue documenting the encounter, as appropriate.
4. When complete, Close and Archive the encounter.
  
## Evidence  

  
### Initial Patient Population  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Encounter, Performed: Annual Wellness Visit</td>
<td>2.16.840.1.113883.3.526.3.1240</td>
</tr>
<tr>
<td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
</tr>
<tr>
<td>Encounter, Performed: Discharge Services - Nursing Facility</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1013</td>
</tr>
<tr>
<td>Encounter, Performed: Home Healthcare Services</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
</tr>
<tr>
<td>Encounter, Performed: Nursing Facility Visit</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
</tr>
<tr>
<td>Encounter, Performed: Office or other outpatient visit for the evaluation and management of an established patient, that may not require the presence of a physician or other qualified health care professional. Usually, the presenting problem(s) are minimal.</td>
<td>CPT Code 99211</td>
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
<td>Encounter, Performed: Ophthalmologic Services</td>
<td>2.16.840.1.113883.3.464.1003.101.11.1206</td>
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
<td>Assessment, Performed: Functional Assessment of Chronic Illness Therapy - Palliative Care Questionnaire (FACIT-Pal)</td>
<td>LOINC Code 71007-9</td>
</tr>
<tr>
<td>Encounter, Performed: Encounter Inpatient</td>
<td>2.16.840.1.113883.3.666.5.307</td>
</tr>
<tr>
<td>Encounter, Performed: Palliative Care Encounter</td>
<td>2.16.840.1.113883.3.464.1003.101.12.1090</td>
</tr>
<tr>
<td>Intervention, Order: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Hospice care ambulatory</td>
<td>2.16.840.1.113762.1.4.1108.15</td>
</tr>
<tr>
<td>Intervention, Performed: Palliative Care Intervention</td>
<td>2.16.840.1.113883.3.464.1003.198.12.1135</td>
</tr>

</table>

  
### Numerator  



<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Medication, Order: Amitriptyline Hydrochloride</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1373</td>
</tr>
<tr>
<td>Medication, Order: Amoxapine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1273</td>
</tr>
<tr>
<td>Medication, Order: Anti Infectives, other</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1481</td>
</tr>
<tr>
<td>Medication, Order: Antipsychotic</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1523</td>
</tr>
<tr>
<td>Medication, Order: Atropine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1274</td>
</tr>
<tr>
<td>Medication, Order: Benzodiazepine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1522</td>
</tr>
<tr>
<td>Medication, Order: Benztropine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1361</td>
</tr>
<tr>
<td>Medication, Order: Brompheniramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1427</td>
</tr>
<tr>
<td>Medication, Order: Butabarbital</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1402</td>
</tr>
<tr>
<td>Medication, Order: Butalbital</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1514</td>
</tr>
<tr>
<td>Medication, Order: Carbinoxamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1306</td>
</tr>
<tr>
<td>Medication, Order: Carisoprodol</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1369</td>
</tr>
<tr>
<td>Medication, Order: Chlorpheniramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1352</td>
</tr>
<tr>
<td>Medication, Order: Chlorpropamide</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1303</td>
</tr>
<tr>
<td>Medication, Order: Chlorzoxazone</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1362</td>
</tr>
<tr>
<td>Medication, Order: Clemastine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1308</td>
</tr>
<tr>
<td>Medication, Order: Clomipramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1336</td>
</tr>
<tr>
<td>Medication, Order: Conjugated Estrogens</td>
<td>2.16.840.1.113883.3.464.1003.196.12.135</td>
</tr>
<tr>
<td>Medication, Order: Cyclobenzaprine Hydrochloride</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1372</td>
</tr>
<tr>
<td>Medication, Order: Cyproheptadine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1277</td>
</tr>
<tr>
<td>Medication, Order: Desiccated Thyroid</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1354</td>
</tr>
<tr>
<td>Medication, Order: Desipramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1278</td>
</tr>
<tr>
<td>Medication, Order: Dexbrompheniramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1375</td>
</tr>
<tr>
<td>Medication, Order: Dexchlorpheniramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1300</td>
</tr>
<tr>
<td>Medication, Order: Dicyclomine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1279</td>
</tr>
<tr>
<td>Medication, Order: Dimenhydrinate</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1500</td>
</tr>
<tr>
<td>Medication, Order: Diphenhydramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1293</td>
</tr>
<tr>
<td>Medication, Order: Dipyridamole</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1349</td>
</tr>
<tr>
<td>Medication, Order: Disopyramide</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1311</td>
</tr>
<tr>
<td>Medication, Order: Doxylamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1515</td>
</tr>
<tr>
<td>Medication, Order: Esterified Estrogens</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1419</td>
</tr>
<tr>
<td>Medication, Order: Estradiol</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1365</td>
</tr>
<tr>
<td>Medication, Order: Estropipate</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1319</td>
</tr>
<tr>
<td>Medication, Order: Glyburide</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1368</td>
</tr>
<tr>
<td>Medication, Order: Guanfacine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1341</td>
</tr>
<tr>
<td>Medication, Order: Hydroxyzine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1374</td>
</tr>
<tr>
<td>Medication, Order: Hyoscyamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1501</td>
</tr>
<tr>
<td>Medication, Order: Imipramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1359</td>
</tr>
<tr>
<td>Medication, Order: Indomethacin</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1366</td>
</tr>
<tr>
<td>Medication, Order: Isoxsuprine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1422</td>
</tr>
<tr>
<td>Medication, Order: Ketorolac Tromethamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1364</td>
</tr>
<tr>
<td>Medication, Order: List of Single RxNorm Code Concepts for High Risk Drugs for the Elderly</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1272</td>
</tr>
<tr>
<td>Medication, Order: Meclizine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1506</td>
</tr>
<tr>
<td>Medication, Order: Megestrol</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1342</td>
</tr>
<tr>
<td>Medication, Order: Meperidine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1351</td>
</tr>
<tr>
<td>Medication, Order: Meprobamate</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1284</td>
</tr>
<tr>
<td>Medication, Order: Metaxalone</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1358</td>
</tr>
<tr>
<td>Medication, Order: Methocarbamol</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1370</td>
</tr>
<tr>
<td>Medication, Order: Methscopolamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1525</td>
</tr>
<tr>
<td>Medication, Order: Methyldopa</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1331</td>
</tr>
<tr>
<td>Medication, Order: Nifedipine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1353</td>
</tr>
<tr>
<td>Medication, Order: Nonbenzodiazepine hypnotics</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1480</td>
</tr>
<tr>
<td>Medication, Order: Nortriptyline</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1507</td>
</tr>
<tr>
<td>Medication, Order: Orphenadrine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1302</td>
</tr>
<tr>
<td>Medication, Order: Paroxetine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1508</td>
</tr>
<tr>
<td>Medication, Order: Pentobarbital</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1518</td>
</tr>
<tr>
<td>Medication, Order: Phenobarbital</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1348</td>
</tr>
<tr>
<td>Medication, Order: Promethazine Hydrochloride</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1367</td>
</tr>
<tr>
<td>Medication, Order: Propantheline</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1519</td>
</tr>
<tr>
<td>Medication, Order: Protriptyline</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1509</td>
</tr>
<tr>
<td>Medication, Order: Pyrilamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1524</td>
</tr>
<tr>
<td>Medication, Order: Scopolamine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1520</td>
</tr>
<tr>
<td>Medication, Order: Secobarbital</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1521</td>
</tr>
<tr>
<td>Medication, Order: Trihexyphenidyl</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1334</td>
</tr>
<tr>
<td>Medication, Order: Trimipramine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1285</td>
</tr>
<tr>
<td>Medication, Order: Triprolidine</td>
<td>2.16.840.1.113883.3.464.1003.196.12.1408</td>
</tr>

</table>

  
### Numerator Exclusions  


<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Value Set</strong></td>
</tr>
<tr>
<td>Diagnosis: Alcohol Withdrawal</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1209</td>
</tr>
<tr>
<td>Diagnosis: Benzodiazepine Withdrawal</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1208</td>
</tr>
<tr>
<td>Diagnosis: Bipolar Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1157</td>
</tr>
<tr>
<td>Diagnosis: Generalized Anxiety Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1210</td>
</tr>
<tr>
<td>Diagnosis: Other Bipolar Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1204</td>
</tr>
<tr>
<td>Diagnosis: REM Sleep Behavior Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1207</td>
</tr>
<tr>
<td>Diagnosis: Schizophrenia</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1205</td>
</tr>
<tr>
<td>Diagnosis: Seizure Disorder</td>
<td>2.16.840.1.113883.3.464.1003.105.12.1206</td>
</tr>

</table>

  
## Source(s)  

[eCQI CMS156](https://ecqi.healthit.gov/ecqm/ep/2022/cms156v10)

