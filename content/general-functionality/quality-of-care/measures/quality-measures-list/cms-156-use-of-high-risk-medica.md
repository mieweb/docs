---
title: "CMS 156 - Use of High-Risk Medications in the Elderly"
date: 2020-02-27T20:59:26.992Z
url: "general-functionality/quality-of-care/measures/quality-measures-list/cms-156-use-of-high-risk-medica.html"
version: 11
id: 1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M
source: https://drive.google.com/open?id=1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M
menu:
    main:
        name: "CMS 156 - Use of High-Risk Medications in the Elderly"
        identifier: "1iVu3t8PXQJaOCVJxF_QkLFMSP9XKtB28xuuOjt7D0_M"
        parent: "14p6MPjeAHRsJuRApfeZpkbThZCc5BPl5jg_E5qwbG8Y"
        weight: 4040
---
## Medical Codify

[CMS156v5](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS156&showresult=CMS156v5&showresulttype=Measure) (2017)

[CMS156v6](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS156&showresult=CMS156v6&showresulttype=Measure) (2018)

[CMS156v7](https://medicalcodify.com/eh/?f=layoutnouser&func&module&tabmodule&name=RXDBmain&searchterm=CMS156&showresult=CMS156v7&showresulttype=Measure) (2019)



**Description**:  Percentage of patients 65 years of age and older who were ordered high-risk medications. Two rates are reported.

* Percentage of patients who were ordered at least one high-risk medication.
* Percentage of patients who were ordered at least two of the same high-risk medications.

**Initial Patient Population**:  Patients 65 years and older who had a visit during the measurement period.

**Denominator**:  Equals Initial Population

**Numerator**: 

Numerator 1: Patients with an order for at least one high-risk medication during the measurement period

Numerator 2: Patients with at least two orders for the same high-risk medication during the measurement period

**Inverse Measure**:  Yes

## Clinical Instructions

{{% note %}}

This is an inverse measure. The goal is to have a 0 in the numerator.  When e-prescribing, avoid prescribing any of the medications listed below, to the specified population, whenever possible.

{{% /note %}}


Track all patients that are 65+ and prescribed high-risk medications. Two rates are reported, so be aware that patients with at least one high-risk medication, as well as patients with at least two orders for the same high-risk medication, will be reported for the measurement period.

* While documenting the encounter, use the Presenting Medications section and Medication Orders section to prescribe and reconcile medications, as usual.
* Prescribe medications, as needed.
* Continue documenting the encounter, as appropriate.
* When complete, Close and Archive the encounter.

## Evidence

### Initial Patient Population

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Annual Wellness Visit</td>
    <td>2.16.840.1.113883.3.526.3.1240</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Home Healthcare Services</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1016</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Office Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1001</td>
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
    <td>Encounter, Performed: Care Services in Long-Term Residential Facility</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1014</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Discharge Services - Nursing Facility</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1013</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Encounter Inpatient</td>
    <td>2.16.840.1.113883.3.666.5.307</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Nursing Facility Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.12.1012</td>
  </tr>
  <tr>
    <td>Encounter, Performed: Ophthalmologic Outpatient Visit</td>
    <td>2.16.840.1.113883.3.464.1003.101.11.1206</td>
  </tr>
</table>

### Denominator

Equals Initial Population

### Numerator

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
  </tr>
  <tr>
    <td>Acetaminophen / Butalbital / Caffeine / Codeine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1326</td>
  </tr>
  <tr>
    <td>Acetaminophen / Butalbital / Caffeine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1363</td>
  </tr>
  <tr>
    <td>Acetaminophen / Butalbital</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1317</td>
  </tr>
  <tr>
    <td>Acetaminophen / Chlorpheniramine / Dextromethorphan / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1310</td>
  </tr>
  <tr>
    <td>Acetaminophen / Chlorpheniramine / Dextromethorphan / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1321</td>
  </tr>
  <tr>
    <td>Acetaminophen / Chlorpheniramine / Dextromethorphan</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1421</td>
  </tr>
  <tr>
    <td>Acetaminophen / Chlorpheniramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1328</td>
  </tr>
  <tr>
    <td>Acetaminophen / Chlorpheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1316</td>
  </tr>
  <tr>
    <td>Acetaminophen / Dexbrompheniramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1405</td>
  </tr>
  <tr>
    <td>Acetaminophen / Dextromethorphan / Diphenhydramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1399</td>
  </tr>
  <tr>
    <td>Acetaminophen / Dextromethorphan / Doxylamine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1287</td>
  </tr>
  <tr>
    <td>Acetaminophen / Dextromethorphan / Doxylamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1338</td>
  </tr>
  <tr>
    <td>Acetaminophen / Diphenhydramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1318</td>
  </tr>
  <tr>
    <td>Acetaminophen / Diphenhydramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1350</td>
  </tr>
  <tr>
    <td>Amitriptyline / Chlordiazepoxide</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1286</td>
  </tr>
  <tr>
    <td>Amitriptyline / Perphenazine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1428</td>
  </tr>
  <tr>
    <td>Amitriptyline Hydrochloride</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1373</td>
  </tr>
  <tr>
    <td>Amoxapine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1273</td>
  </tr>
  <tr>
    <td>Anti Infectives, other</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1481</td>
  </tr>
  <tr>
    <td>Aspirin / Butalbital / Caffeine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1347</td>
  </tr>
  <tr>
    <td>Aspirin / Caffeine / Orphenadrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1302</td>
  </tr>
  <tr>
    <td>Atropine / Diphenoxylate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1274</td>
  </tr>
  <tr>
    <td>Atropine / Hyoscyamine / Phenobarbital / Scopolamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1355</td>
  </tr>
  <tr>
    <td>Benztropine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1361</td>
  </tr>
  <tr>
    <td>Brompheniramine / Codeine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1409</td>
  </tr>
  <tr>
    <td>Brompheniramine / Codeine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1450</td>
  </tr>
  <tr>
    <td>Brompheniramine / Dextromethorphan / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1325</td>
  </tr>
  <tr>
    <td>Brompheniramine / Dextromethorphan / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1339</td>
  </tr>
  <tr>
    <td>Brompheniramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1327</td>
  </tr>
  <tr>
    <td>Brompheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1332</td>
  </tr>
  <tr>
    <td>Brompheniramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1427</td>
  </tr>
  <tr>
    <td>Butabarbital</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1402</td>
  </tr>
  <tr>
    <td>Carbinoxamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1306</td>
  </tr>
  <tr>
    <td>Carisoprodol</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1369</td>
  </tr>
  <tr>
    <td>Chlophedianol / Chlorpheniramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1412</td>
  </tr>
  <tr>
    <td>Chlophedianol / Dexchlorpheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1447</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Codeine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1301</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Dextromethorphan / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1312</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Dextromethorphan / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1337</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Hydrocodone / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1299</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Hydrocodone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1330</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Phenylephrine / Phenyltoloxamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1453</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Phenylephrine / Pyrilamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1309</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1343</td>
  </tr>
  <tr>
    <td>Chlorpheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1315</td>
  </tr>
  <tr>
    <td>Chlorpheniramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1352</td>
  </tr>
  <tr>
    <td>Chlorpropamide</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1303</td>
  </tr>
  <tr>
    <td>Chlorzoxazone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1362</td>
  </tr>
  <tr>
    <td>Clemastine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1308</td>
  </tr>
  <tr>
    <td>Clomipramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1336</td>
  </tr>
  <tr>
    <td>Conjugated Estrogens / Medroxyprogesterone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1324</td>
  </tr>
  <tr>
    <td>Conjugated Estrogens</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1357</td>
  </tr>
  <tr>
    <td>Cyclobenzaprine Hydrochloride</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1372</td>
  </tr>
  <tr>
    <td>Cyproheptadine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1277</td>
  </tr>
  <tr>
    <td>Desiccated Thyroid</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1354</td>
  </tr>
  <tr>
    <td>Desipramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1278</td>
  </tr>
  <tr>
    <td>Dexbrompheniramine / Dextromethorphan / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1426</td>
  </tr>
  <tr>
    <td>Dexbrompheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1430</td>
  </tr>
  <tr>
    <td>Dexbrompheniramine Maleate / Pseudoephedrine Hydrochloride</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1429</td>
  </tr>
  <tr>
    <td>Dexbrompheniramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1375</td>
  </tr>
  <tr>
    <td>Dexchlorpheniramine / Dextromethorphan / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1300</td>
  </tr>
  <tr>
    <td>Dexchlorpheniramine / Pseudoephedrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1425</td>
  </tr>
  <tr>
    <td>Dextromethorphan / Diphenhydramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1397</td>
  </tr>
  <tr>
    <td>Dextromethorphan / Doxylamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1452</td>
  </tr>
  <tr>
    <td>Dicyclomine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1279</td>
  </tr>
  <tr>
    <td>Dienogest / Estradiol Multiphasic</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1398</td>
  </tr>
  <tr>
    <td>Dimenhydrinate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1500</td>
  </tr>
  <tr>
    <td>Diphenhydramine / Ibuprofen</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1293</td>
  </tr>
  <tr>
    <td>Diphenhydramine / Phenylephrine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1307</td>
  </tr>
  <tr>
    <td>Diphenhydramine Hydrochloride</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1371</td>
  </tr>
  <tr>
    <td>Dipyridamole</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1349</td>
  </tr>
  <tr>
    <td>Disopyramide</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1311</td>
  </tr>
  <tr>
    <td>Drospirenone / Estradiol</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1410</td>
  </tr>
  <tr>
    <td>Esterified Estrogens / Methyltestosterone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1320</td>
  </tr>
  <tr>
    <td>Esterified Estrogens</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1419</td>
  </tr>
  <tr>
    <td>Estradiol / Norethindrone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1323</td>
  </tr>
  <tr>
    <td>Estradiol</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1365</td>
  </tr>
  <tr>
    <td>Estropipate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1319</td>
  </tr>
  <tr>
    <td>Glyburide / Metformin</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1360</td>
  </tr>
  <tr>
    <td>Glyburide</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1368</td>
  </tr>
  <tr>
    <td>Guanfacine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1341</td>
  </tr>
  <tr>
    <td>High Risk Medications for the Elderly</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1253</td>
  </tr>
  <tr>
    <td>High-Risk Medications With Days Supply Criteria</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1254</td>
  </tr>
  <tr>
    <td>Hydrochlorothiazide / Methyldopa</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1414</td>
  </tr>
  <tr>
    <td>Hydroxyzine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1374</td>
  </tr>
  <tr>
    <td>Hyoscyamine / Methenamine / Mblue / Phenyl Salicyl / Sodium Biphosphate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1504</td>
  </tr>
  <tr>
    <td>Hyoscyamine / Methenamine / Mblue / Phenyl Salicyl</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1503</td>
  </tr>
  <tr>
    <td>Hyoscyamine / Methenamine / Mblue / Sodium Biphosphate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1505</td>
  </tr>
  <tr>
    <td>Hyoscyamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1501</td>
  </tr>
  <tr>
    <td>Imipramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1359</td>
  </tr>
  <tr>
    <td>Indomethacin</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1366</td>
  </tr>
  <tr>
    <td>Isoxsuprine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1422</td>
  </tr>
  <tr>
    <td>Ketorolac Tromethamine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1364</td>
  </tr>
  <tr>
    <td>List of Single RxNorm Code Concepts for High Risk Drugs for the Elderly</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1272</td>
  </tr>
  <tr>
    <td>Meclizine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1506</td>
  </tr>
  <tr>
    <td>Megestrol</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1342</td>
  </tr>
  <tr>
    <td>Meperidine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1351</td>
  </tr>
  <tr>
    <td>Meprobamate</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1284</td>
  </tr>
  <tr>
    <td>Metaxalone</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1358</td>
  </tr>
  <tr>
    <td>Methocarbamol</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1370</td>
  </tr>
  <tr>
    <td>Methyldopa</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1331</td>
  </tr>
  <tr>
    <td>Nifedipine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1353</td>
  </tr>
  <tr>
    <td>Nonbenzodiazepine hypnotics</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1480</td>
  </tr>
  <tr>
    <td>Nortriptyline</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1507</td>
  </tr>
  <tr>
    <td>Paroxetine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1508</td>
  </tr>
  <tr>
    <td>Phenobarbital</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1348</td>
  </tr>
  <tr>
    <td>Promethazine Hydrochloride</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1367</td>
  </tr>
  <tr>
    <td>Protriptyline</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1509</td>
  </tr>
  <tr>
    <td>Pseudoephedrine / Triprolidine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1345</td>
  </tr>
  <tr>
    <td>Trihexyphenidyl</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1334</td>
  </tr>
  <tr>
    <td>Trimipramine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1285</td>
  </tr>
  <tr>
    <td>Triprolidine</td>
    <td>2.16.840.1.113883.3.464.1003.196.12.1408</td>
  </tr>
</table>

### Denominator Exclusion

<table>
  <tr>
    <td>Name</td>
    <td>Value Set</td>
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

## Source(s)

[Medical Codify](https://medicalcodify.com/eh/?f=layoutnouser&func&name=RXDBmain&module&tabmodule&searchterm=CMS156&Submit=Search&icd9search=0&icd10search=0&icd10pcssearch=0&snomedsearch=0&loincsearch=0&labcorpsearch=0&questsearch=0&rxnormsearch=0&hcpcssearch=0&ndcsearch=0&cvxsearch=0&vissearch=0&vssearch=0&meassearch=1&pcssearch=1&fdbsearch=1&fdbnamesearch=1&fullsearch&flowsheet)



