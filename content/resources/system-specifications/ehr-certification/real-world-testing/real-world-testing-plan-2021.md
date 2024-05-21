---
id: '1JOipshX_JQAcd0HqbvE1rtXw_eTahntxdGjyJNrygjI'
title: 'Real World Testing Plan 2021'
date: '2024-05-21T17:38:17.451Z'
version: 264
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/open?id=1UH8ZmWU4RKQxPK48naxE60OfrYjB0CO1sOPYXD-GlSI'
  - 'https://www.healthit.gov/test-method/transitions-care#cures_tp'
  - 'https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#test_procedure'
  - 'https://www.healthit.gov/test-method/electronic-prescribing#cures_tp'
  - 'https://www.healthit.gov/test-method/data-export#test_procedure'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#test_procedure'
  - 'https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp'
  - 'https://www.healthit.gov/test-method/direct-project#test_procedure'
  - 'https://www.healthit.gov/topic/standards-version-advancement-process-svap'
  - 'https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2020-CMS-IG-v1.1-508.pdf'
  - 'https://ecqi.healthit.gov/sites/default/files/2020-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-v1.2.1-508.pdf'
  - 'https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/#level-AA'
  - 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=385'
  - 'https://www.hl7.org/documentcenter/private/standards/cda/CDAR2_IG_CCDA_CLINNOTES_R1_DSTU2.1_2015AUG_2019JUNwith_errata.zip'
  - 'https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2021-CMS-IG-508.pdf'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#cures_tp'
  - 'https://ecqi.healthit.gov/sites/default/files/2021-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-508.pdf'
  - 'https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html'
  - 'https://github.com/mieweb/wcexport'
source: 'https://drive.google.com/open?id=1JOipshX_JQAcd0HqbvE1rtXw_eTahntxdGjyJNrygjI'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## [General Information](https://drive.google.com/open?id=1UH8ZmWU4RKQxPK48naxE60OfrYjB0CO1sOPYXD-GlSI)

<table>
<tr>
<td><strong>Plan Report ID Number</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Developer Name</strong></td>
<td>Medical Informatics Engineering</td>
</tr>
<tr>
<td><strong>Product Name(s)</strong></td>
<td>WebChart EHR</td>
</tr>
<tr>
<td><strong>Version Number(s)</strong></td>
<td>7.4</td>
</tr>
<tr>
<td><strong>Certified Health IT Product List ID(s)</strong></td>
<td>15.04.04.1932.WebC.74.00.0.181219</td>
</tr>
<tr>
<td><strong>Developer Real World Testing Page URL</strong></td>
<td>https://docs.webchartnow.com/programs/ehr-certification/real-world-testing-plan-2021.html</td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>11/15/2021</td>
</tr>
</table>

## Certification Criteria to be Tested

* ‘‘Transitions of care" (§ 170.315(b)(1) Cures Update);
* "Clinical information reconciliation and incorporation" (§ 170.315(b)(2));
* "Electronic prescribing" (§ 170.315(b)(3) Cures Update);
* "Data export" (§ 170.315(b)(6));
* "CQMs – record and export" (§ 170.315(c)(1));
* "CQMs – import and calculate" (§ 170.315(c)(2));
* "CQMs – report" (§ 170.315(c)(3));
* "View, download, and transmit to 3rd party" (§ 170.315(e)(1));
* "Transmission to immunization registries" (§ 170.315(f)(1));
* "Application access – patient selection" (§ 170.315(g)(7));
* "Application access – data category request" (§ 170.315(g)(8));
* "Application access—all data request" (§ 170.315(g)(9) Cures Update);
* "Direct Project" (§ 170.315(h)(1))

## Criteria-Measure Matrix

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Requirement</strong></td>
<td><strong>Measure</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transitions-care#cures_tp">"Transitions of care" (§170.315(b)(1))</a></td>
<td>(b)(1)(i)(A)(Alternative) - Send Using Edge Protocol for SMTP/IXE XDR</td>
<td>17</td>
</tr>
<tr>
<td>(b)(1)(i)(B)(Alternative) - Receive Using Edge Protocol for SMTP/IXE XDR</td>
<td>17</td>
</tr>
<tr>
<td>(b)(1)(i)(C)(Conditional) - XDM Processing</td>
<td>17</td>
</tr>
<tr>
<td>(b)(1)(ii)(A) - Receive, Parse, and Process</td>
<td>7, 19</td>
</tr>
<tr>
<td>(b)(1)(ii)(B) - View</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(ii)(C) - Section Display</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii) - Create</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(A) - Assessment, Plan, Goals, Health Concerns</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(B) - Diagnoses</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(C) - Cognitive Status</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(D) - Functional Status</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(E) - Ambulatory Referral Summary</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(F) - Inpatient Discharge Instructions</td>
<td>7</td>
</tr>
<tr>
<td>(b)(1)(iii)(G) - Patient Matching</td>
<td>7</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#test_procedure">"Clinical information reconciliation and incorporation" (§170.315(b)(2))</a></td>
<td>(b)(2)(ii) - Correct Patient</td>
<td>7</td>
</tr>
<tr>
<td>(b)(2)(iii)(A) - Simultaneous Display</td>
<td>9</td>
</tr>
<tr>
<td>(b)(2)(iii)(B) - Reconciled List</td>
<td>9</td>
</tr>
<tr>
<td>(b)(2)(iii)(C) - User Review</td>
<td>9</td>
</tr>
<tr>
<td>(b)(2)(iii)(D) - List Acceptance</td>
<td>9</td>
</tr>
<tr>
<td>(b)(2)(iv) - CCD Creation</td>
<td>9</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">"Electronic prescribing" (§170.315(b)(3))</a></td>
<td>(b)(3)(ii)(A)(1) - NewRx</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(2) - RxChangeRequest, RxChangeResponse</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(3) - CancelRx, CancelRxResponse</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(4) - RxRenewalRequest, RxRenewalResponse</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(5) - RxFill</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(6) - RxHistoryRequest, RxHistoryResponse</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(7) - Status</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(8) - Error</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(9) - Verify</td>
<td>3</td>
</tr>
<tr>
<td>(b)(3)(ii)(C)(1) - Primary/Secondary Diagnosis</td>
<td>4</td>
</tr>
<tr>
<td>(b)(3)(ii)(E) - Metric Units</td>
<td>5</td>
</tr>
<tr>
<td>(b)(3)(ii)(F) - Decimal Format</td>
<td>6</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/data-export#test_procedure">"Data export" (§170.315(b)(6))</a></td>
<td>(b)(6)(i) - Configure and export</td>
<td>18</td>
</tr>
<tr>
<td>(b)(6)(ii) - Set Export</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(A) - CCDS</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(B) - Diagnoses</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(C) - Cognitive Status</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(D) - Functional Status</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(E) - Ambulatory Reason for Referral</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(ii)(F) - Inpatient Discharge Instructions</td>
<td>18, 19</td>
</tr>
<tr>
<td>(b)(6)(iii)(A) - Timeframe configuration</td>
<td>18</td>
</tr>
<tr>
<td>(b)(6)(iii)(B) - Export summary</td>
<td>18</td>
</tr>
<tr>
<td>(b)(6)(iv) - Save location</td>
<td>18</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure">"CQMs – record and export" (§170.315(c)(1))</a></td>
<td>(c )(1)(i) - Report</td>
<td>1</td>
</tr>
<tr>
<td>(c )(1)(ii) - Export</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure">"CQMs – import and calculate" (§170.315(c)(2))</a></td>
<td>(c )(2)(i) - Import</td>
<td>2</td>
</tr>
<tr>
<td>(c )(2)(ii) - Calculate</td>
<td>1, 2</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure">"CQMs – report" (§170.315(c)(3))</a></td>
<td>(c )(3)(i) - Report</td>
<td>1, 2</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#test_procedure">"View, download, and transmit to 3rd party" (§170.315(e)(1))</a></td>
<td>(e)(1)(i) - Web Content Accessibility</td>
<td>21</td>
</tr>
<tr>
<td>(e)(1)(i)(A) - View</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(1) - CCDS</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(2) - Ambulatory Contact Info</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(3) - Inpatient Discharge Instructions</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(4) - Lab Report</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(5) - Diagnostic Imaging Report</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(B)(1)(i) - Download Human Readable</td>
<td>15</td>
</tr>
<tr>
<td>(e)(1)(i)(B)(1)(ii) - Download CCD</td>
<td>15</td>
</tr>
<tr>
<td>(e)(1)(i)(B)(2) - CCD Human Readable</td>
<td>15</td>
</tr>
<tr>
<td>(e)(1)(i)(B)(3) - Inpatient Summary</td>
<td>15</td>
</tr>
<tr>
<td>(e)(1)(i)(C)(1)(i) - Email</td>
<td>16</td>
</tr>
<tr>
<td>(e)(1)(i)(C)(1)(ii) - Encrypted Transmission</td>
<td>16</td>
</tr>
<tr>
<td>(e)(1)(i)(C)(2) - Inpatient Email</td>
<td>16</td>
</tr>
<tr>
<td>(e)(1)(i)(D)(1) - Specific Date</td>
<td>14, 15, 16</td>
</tr>
<tr>
<td>(e)(1)(i)(D)(2) - Date Range</td>
<td>14, 15, 16</td>
</tr>
<tr>
<td>(e)(1)(ii)(A) - Activity Log</td>
<td>14, 15, 16</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure">"Transmission to immunization registries" (§170.315(f)(1))</a></td>
<td>(f)(1)(i) - Create Content</td>
<td>10</td>
</tr>
<tr>
<td>(f)(1)(ii) - Query Records</td>
<td>11</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure">"Application access – patient selection" (§170.315(g)(7))</a></td>
<td>(g)(7)(i) - Query processing and response</td>
<td>20</td>
</tr>
<tr>
<td>(g)(7)(ii)(A)(1) - Functional Documentation</td>
<td>8</td>
</tr>
<tr>
<td>(g)(7)(ii)(A)(2) - Implementation Requirements</td>
<td>8</td>
</tr>
<tr>
<td>(g)(7)(ii)(A)(3) - Terms of Use</td>
<td>8</td>
</tr>
<tr>
<td>(g)(7)(ii)(B) - Public Link</td>
<td>8</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure">"Application access – data category request" (§170.315(g)(8))</a></td>
<td>(g)(8)(i)(A) - Return CCDS data</td>
<td>20</td>
</tr>
<tr>
<td>(g)(8)(i)(B) - Request response</td>
<td>20</td>
</tr>
<tr>
<td>(g)(8)(ii)(A)(1) - Documentation</td>
<td>8</td>
</tr>
<tr>
<td>(g)(8)(ii)(A)(2) - Implementation Requirements</td>
<td>8</td>
</tr>
<tr>
<td>(g)(8)(ii)(A)(3) - Terms of Use</td>
<td>8</td>
</tr>
<tr>
<td>(g)(8)(ii)(B) - Public URL</td>
<td>8</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp">"Application access—all data request" (§170.315(g)(9))</a></td>
<td>(g)(9)(i)(A)(1) - Demonstrate API</td>
<td>20</td>
</tr>
<tr>
<td>(g)(9)(i)(A)(3) - Data Classes</td>
<td>20</td>
</tr>
<tr>
<td>(g)(9)(i)(B) - Data Return</td>
<td>20</td>
</tr>
<tr>
<td>(g)(9)(ii)(A)(i) - Documentation</td>
<td>8</td>
</tr>
<tr>
<td>(g)(9)(ii)(A)(ii) - Implementation Requirements</td>
<td>8</td>
</tr>
<tr>
<td>(g)(9)(ii)(B) - Public URL</td>
<td>8</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/direct-project#test_procedure">"Direct Project" (§170.315(h)(1))</a></td>
<td>(h)(1)(i) - Send</td>
<td>12</td>
</tr>
<tr>
<td>(h)(1)(i) - Receive</td>
<td>13</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Processed</td>
<td>12</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Failed</td>
<td>12</td>
</tr>
</table>

## Justification for Real World Testing Approach

WebChart EHR is a cloud-based, fully-inclusive EHR solution.  All certified functionality is delivered in all instances of the product regardless of the care setting, size of practice, or required use cases for a given practice.  Each production client is maintained in a separate database; however, the implementation of the environment is identical with the exception of optional increased security protocols that a client may choose to add for enhanced data protection. Additionally, the only differences between the client-facing portion of each system are a result of configuration settings that can be selected at go-live or updated at any time during a client's contract.  Due to this philosophy of product delivery, all certified capabilities may not be actively used in all marketed care settings or may not be actively used in any current client production system.  To address the Real World Testing requirements, MIE will be using a hybrid approach.  Testing will primarily be conducted using de-identified real patient data from production systems as recorded in database tables and log files.  For those criteria for which this live production recording is not available or minimal due to lack of client usage, client reported issues will be tracked and reported in addition to enacting automated tests of the certified functionality in a test system in a production environment.  The automated tests will be run daily or weekly as appropriate in a system that is identical in substance and delivery to a client production system with the only exception being live real patient data.  This blended approach will allow MIE to prove ongoing maintenance of WebChart EHR's certified technology regardless of the level of implementation by current clients.

## [Standards Updates - SVAP and USCDI](https://www.healthit.gov/topic/standards-version-advancement-process-svap)

All certified criteria in WebChart EHR use the current standard or implementation specification version, and will continue conformance to that version throughout the 2022 Real World Testing period unless stated in the table below. Key current versions include the following:

* [CMS Implementation Guide for Quality Reporting Document Architecture: Category I; Hospital Quality Reporting; Implementation Guide for 2020](https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2020-CMS-IG-v1.1-508.pdf)
* [CMS Implementation Guide for Quality Reporting Document Architecture: Category III; Eligible Clinicians and Eligible Professionals Programs; Implementation Guide for 2020](https://ecqi.healthit.gov/sites/default/files/2020-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-v1.2.1-508.pdf)
* [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/#level-AA)
* [HL7 Implementation Guide for CDA® Release 2: National Health Care Surveys (NHCS), Release 1 - US Realm, HL7 Draft Standard for Trial Use, Volume 1 - Introductory Material, December 2014](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=385)
* [HL7 Implementation Guide for CDA® Release 2: Consolidated CDA Templates for Clinical Notes (US Realm), Draft Standard for Trial Use, Volume 2 - Templates and Supporting Material, Release 2.1, August 2015](https://www.hl7.org/documentcenter/private/standards/cda/CDAR2_IG_CCDA_CLINNOTES_R1_DSTU2.1_2015AUG_2019JUNwith_errata.zip)

### QRDA I SVAP - Planned

<table>
<tr>
<td><strong>Standard and version</strong></td>
<td><a href="https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2021-CMS-IG-508.pdf"></a></td>
</tr>
<tr>
<td><strong>Updated certification criteria and associated product</strong></td>
<td>WebChart EHR<br />
<a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#cures_tp"></a></td>
</tr>
<tr>
<td><strong>Health IT Module CHPL ID</strong></td>
<td>15.04.04.1932.WebC.74.00.0.181219</td>
</tr>
<tr>
<td><strong>Method used for standard update</strong></td>
<td>SVAP</td>
</tr>
<tr>
<td><strong>Date of ONC ACB notification</strong></td>
<td>TBD 2022</td>
</tr>
<tr>
<td><strong>Date of customer notification (SVAP only)</strong></td>
<td>TBD 2022</td>
</tr>
</table>

### QRDA III SVAP - Planned

<table>
<tr>
<td><strong>Standard and version</strong></td>
<td><a href="https://ecqi.healthit.gov/sites/default/files/2021-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-508.pdf"></a></td>
</tr>
<tr>
<td><strong>Updated certification criteria and associated product</strong></td>
<td>WebChart EHR<br />
<a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#cures_tp"></a></td>
</tr>
<tr>
<td><strong>Health IT Module CHPL ID</strong></td>
<td>15.04.04.1932.WebC.74.00.0.181219</td>
</tr>
<tr>
<td><strong>Method used for standard update</strong></td>
<td>SVAP</td>
</tr>
<tr>
<td><strong>Date of ONC ACB notification</strong></td>
<td>TBD 2022</td>
</tr>
<tr>
<td><strong>Date of customer notification (SVAP only)</strong></td>
<td>TBD 2022</td>
</tr>
</table>

### USCDI

<table>
<tr>
<td><strong>Updated product</strong></td>
<td>WebChart EHR</td>
</tr>
<tr>
<td><strong>Health IT Module CHPL ID</strong></td>
<td>15.04.04.1932.WebC.74.00.0.181219</td>
</tr>
<tr>
<td><strong>Method used for standard update</strong></td>
<td>Cures Update Attestation</td>
</tr>
<tr>
<td><strong>Date of ONC ACB notification</strong></td>
<td>08/31/2021</td>
</tr>
<tr>
<td><strong>USCDI updated certification criteria (and USCDI version)</strong></td>
<td>Transitions of Care § 170.315(b)(1)<br />
USCDI v1</td>
</tr>
</table>

## Care Setting(s)

WebChart EHR is a scalable, web-based system designed for ambulatory practices and clinics.  The same product is distributed to all care settings with many configuration options.  Each practice can use the available configuration to tailor the product to fit their workflows and use requirements.

<table>
<tr>
<td><strong>Care Setting</strong></td>
<td><strong>Justification</strong></td>
</tr>
<tr>
<td>Primary Care</td>
<td>The WebChart EHR clients are divided primarily between primary care and specialty practices.  Testing in a primary care setting will cover a large and important portion of our business.</td>
</tr>
<tr>
<td>Specialty Practice</td>
<td>The WebChart EHR clients are divided primarily between primary care and specialty practices.  Configuration selections are all that differentiate WebChart EHR implementations; however, we will test with several specialty practices to ensure configuration does not impact the functionality of certified capabilities.</td>
</tr>
<tr>
<td>Pediatrics</td>
<td>Pediatric clinics are typically configured differently than adult primary care clinics.  We will test in a pediatric setting in addition to primary care to again ensure that configuration does not impact the functionality of certified capabilities.</td>
</tr>
<tr>
<td>Small/Rural/Underserved Practice</td>
<td>The size and location of a practice can impact their interoperability options.  We will test with both small/rural and large/urban practices to ensure all practices have full interoperability functionality.</td>
</tr>
<tr>
<td>Large Multi-practice Clinic</td>
<td>The size and location of a practice can impact their interoperability options.  We will test with both small/rural and large/urban practices to ensure all practices have full interoperability functionality.</td>
</tr>
</table>

## Measures Used in Overall Approach

The following measures outline and justify how each requirement of all criteria to which WebChart EHR is certified will be tested during the 2022 Real World Testing year.  Please review the Criteria-Measure Matrix above to review which measure(s) will cover a specific requirement.

### Measure 1: Clinical Quality Measures Outgoing

#### Description

This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress CUV+ test system.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"CQMs – record and export" (§170.315(c)(1))</td>
<td>(c )(1)(i) - Record</td>
</tr>
<tr>
<td>(c )(1)(ii) - Export</td>
</tr>
<tr>
<td>"CQMs – import and calculate" (§170.315(c)(2))</td>
<td>(c )(2)(ii) - Calculate</td>
</tr>
<tr>
<td>"CQMs – report" (§170.315(c)(3))</td>
<td>(c )(3)(i) - Report</td>
</tr>
</table>

#### Justification

WebChart EHR should accommodate the full range of §170.315(c)(1), §170.315(c)(2), and §170.315(c)(3) to support providers participating in MIPS and other quality measures.  Most data supporting these measures for existing clients will come from data generated internally by their standard clinical workflows of seeing patients or incorporating the CCDA of transitioning patients.  Numerical compliance calculations and reporting will be monitored by MIE and the practices selected for testing.  The export and report QRDA formats will be validated by reporting partners and Cypress CUV+ to ensure data collected and calculated in WebChart EHR remains interoperable.

#### Test Methodology

First, MIE will install an instance of Cypress 6+ on our production servers following all of our protocols for maintaining the security of PHI.  Cypress CUV+ supports the validation of QRDA reports containing PHI and will be used monthly to validate a random selection of QRDAs from the care settings identified.  Any errors identified by Cypress CUV+ will be tracked, reported, and addressed, then followed with testing of a larger sample of files.

Additionally, WebChart EHR has two customers that participate in quarterly attestations using both QRDA I and QRDA III reports.  These customers regularly inspect their CQM compliance numbers and will alert MIE to any perceived errors.  MIE will then collect and track the attestation results from the reporting bodies including any errors so as to report a success/failure rate.

#### Expected Outcome(s)

It is expected that calculation, reporting, and QRDA format errors will be rare.  Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  Additionally, any formatting or coding errors identified by Cypress CUV+ will be tracked, reported, and resolved.  These errors are also expected to be rare both before and after using SVAP to update the version of QRDA WebChart EHR supports.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 2: Clinical Quality Measures Incoming

#### Description

This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress CUV+ test system.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"CQMs – import and calculate" (§170.315(c)(2))</td>
<td>(c )(2)(i) - Import</td>
</tr>
<tr>
<td>(c )(2)(ii) - Calculate</td>
</tr>
<tr>
<td>"CQMs – report" (§170.315(c)(3))</td>
<td>(c )(3)(i) - Report</td>
</tr>
</table>

#### Justification

WebChart EHR should accommodate the full range of §170.315(c)(1), §170.315(c)(2), and §170.315(c)(3) to support providers participating in MIPS and other quality measures.  It is rare that an active production client will import a QRDA I file for use in their CQM calculations.  To maintain that WebChart EHR is capable of importing and calculating when this does occur, QRDA I files from Cypress will be imported into a test system in a production environment, CQMs will be automatically calculated, and QRDA files will be exported back to Cypress for content and calculation validation.

#### Test Methodology

MIE will install an instance of Cypress 6+ on our production servers following all of our protocols for maintaining the security of PHI.  Automated testing will download QRDA I files from Cypress for each certified CQM, import the files to WebChart EHR, calculate the CQMs, and export the QRDA files for Cypress validation of both the content and calculations to verify that the import was successful.  Any errors identified by Cypress will be tracked, reported, and addressed.

#### Expected Outcome(s)

It is expected that calculation, reporting, and QRDA format errors will be rare.  Any formatting, content, or calculation errors identified by Cypress will be tracked, reported, and resolved.  These errors are expected to be rare both before and after using SVAP to update the version of QRDA WebChart EHR supports.

#### Care Setting(s)

Primary Care, specialties, small, large

### Measure 3: E-Prescribing Messages Sent and Received

#### Description

This measure will verify that all supported e-prescribing message types are in use in WebChart EHR, including inbound and outbound message types.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Electronic prescribing" (§170.315(b)(3))</td>
<td>(b)(3)(ii)(A)(1) - NewRx</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(2) - RxChangeRequest, RxChangeResponse</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(3) - CancelRx, CancelRxResponse</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(4) - RxRenewalRequest, RxRenewalResponse</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(5) - RxFill</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(6) - RxHistoryRequest, RxHistoryResponse</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(7) - Status</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(8) - Error</td>
</tr>
<tr>
<td>(b)(3)(ii)(A)(9) - Verify</td>
</tr>
</table>

#### Justification

WebChart EHR should support all of the required e-prescribing messaging types outlined in §170.315(b)(3). Messages are stored locally in each client system in addition to being transmitted to/from pharmacies via the Surescripts network.

#### Test Methodology

MIE will report a count of messages for each supported message type:

* NewRx
* RxChangeRequest
* RxChangeResponse
* CancelRx
* CancelRxResponse
* RxRenewalRequest
* RxRenewalResponse
* RxFill
* RxHistoryRequest
* RxHistoryResponse
* Status
* Error
* Verify

The report will also include a count of outbound messages unable to be transmitted due to connectivity issues or other errors, for each message type. This report will be based on the contents of each client's local database table of stored messages. MIE will run the report for each client under consideration and aggregate the results.

#### Expected Outcome(s)

Each of the supported message types should have a total greater than zero,and the number of outbound messages with errors should be significantly lower than the total number attempted to be sent. Based on past usage patterns of outbound message types, the number of NewRx messages is anticipated to be greater than RxChangeResponse, CancelRx, or RxRenewalResponse.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 4: E-Prescribing Diagnosis Codes

#### Description

This measure will verify that all diagnosis elements are present in some e-prescribing messages as required by §170.315(b)(3), including inbound and outbound message types.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Electronic prescribing" (§170.315(b)(3))</td>
<td>(b)(3)(ii)(C)(1) - Primary/Secondary Diagnosis</td>
</tr>
</table>

#### Justification

WebChart EHR must be able to send Diagnosis codes in outbound e-prescribing messages, and receive inbound messages that include them.

#### Test Methodology

MIE will report the contents of each stored message in a client's local database table of stored messages, and counts the inbound and outbound messages that include Diagnosis elements. MIE will run the report for each client under consideration and aggregate the results.

#### Expected Outcome(s)

As Diagnosis code is not a required element for transmission, we expect that these elements will be present in some, but not all inbound and outbound messages.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 5: E-Prescribing Oral Liquid Units

#### Description

This measure will verify that prescriptions for medications with an oral liquid form will have a quantity unit of measurement of mL, not cc or English units as outlined in §170.315(b)(3).

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Electronic prescribing" (§170.315(b)(3))</td>
<td>(b)(3)(ii)(E) - Metric Units</td>
</tr>
</table>

#### Justification

WebChart EHR should prevent prescriptions of oral liquid medications from being sent electronically if they have an inappropriate quantity unit of measurement.

#### Test Methodology

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, limiting to oral liquid medications, and provides a count of each distinct quantity unit of measure used. MIE will run the report for each client under consideration and aggregate the results.

#### Expected Outcome(s)

It is expected that code C28254 (milliliters) to be the most commonly sent unit of measure for oral liquid medications. Others should be extremely rare.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 6: E-Prescribing Decimal Format

#### Description

This measure will verify that numeric amounts in prescriptions include leading zeros before decimal points and do not allow trailing zeros after a decimal point.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Electronic prescribing" (§170.315(b)(3))</td>
<td>(b)(3)(ii)(F) - Decimal Format</td>
</tr>
</table>

#### Justification

WebChart EHR should prevent prescriptions from being sent electronically if they have directions or total quantity that are missing leading zeros or include trailing zeros.  This is essential for preventing misunderstanding by pharmacists regarding the amount to dispense and patients regarding the amount of medication to take.

#### Test Methodology

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, and provides a count of prescription messages that include inappropriate trailing zeros, and a count of those missing leading zeros. MIE will run the report for each client under consideration and aggregate the results.

#### Expected Outcome(s)

It is expected that prescriptions sent including inappropriate trailing zeros, or missing needed leading zeros will be very rare.

#### Care Setting(s)

Primary care, specialties, small, large

### Measure 7: CDA Download

#### Description

This measure will verify that the system can accept a CDA document uploaded into the system, assign it to the appropriate chart in the system as appropriate, and display the document with a standard stylesheet with all sections being accepted and visible.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Clinical information reconciliation and incorporation" (§ 170.315(b)(2))</td>
<td>(b)(2)(ii) - <em>Correct patient.</em></td>
</tr>
<tr>
<td>‘‘Transitions of care" (§ 170.315(b)(1))</td>
<td>(b)(1)(ii) - All paragraphs</td>
</tr>
<tr>
<td>(b)(1)(iii) - All paragraphs</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to accept a CDA document and place it into the correct chart based on information within the document.  It should also be able to display the CDA documents with an appropriate stylesheet.

#### Test Methodology

MIE will report on the number of CDA formatted documents uploaded into tracked Webchart systems and the number of upload attempts that failed as stored in client databases and error log files.

MIE will report on the number of requests to view a CDA document within the system, and the number of times it displayed correctly, and when there were errors in display.  
Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  These test assumptions for customer reporting align with the "visual inspection" aspects of the test lab tests.

#### Expected Outcome(s)

It is expected that CDA upload and stylesheet errors will be rare.  Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 8: Application Access Documentation

#### Description

This measure will verify that WebChart EHR's API documentation is publicly and perpetually available.  Compliance will be recorded by an external uptime monitor and reported quarterly.  Upon request, or in the event of downtime, data can additionally be reported in daily, weekly, or monthly increments.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Application access – patient selection" (§ 170.315(g)(7))</td>
<td>(g)(7)(ii)(A)(1) - Functional Documentation</td>
</tr>
<tr>
<td>(g)(7)(ii)(A)(2) - Implementation Requirements</td>
</tr>
<tr>
<td>(g)(7)(ii)(A)(3) - Terms of Use</td>
</tr>
<tr>
<td>(g)(7)(ii)(B) - Public Link</td>
</tr>
<tr>
<td>"Application access – data category request" (§ 170.315(g)(8))</td>
<td>(g)(8)(ii)(A)(1) - Documentation</td>
</tr>
<tr>
<td>(g)(8)(ii)(A)(2) - Implementation Requirements</td>
</tr>
<tr>
<td>(g)(8)(ii)(A)(3) - Terms of Use</td>
</tr>
<tr>
<td>(g)(8)(ii)(B) - Public URL</td>
</tr>
<tr>
<td>"Application access—all data request" (§ 170.315(g)(9))</td>
<td>(g)(9)(ii)(A)(i) - Documentation</td>
</tr>
<tr>
<td>(g)(9)(ii)(A)(ii) - Implementation Requirements</td>
</tr>
<tr>
<td>(g)(9)(ii)(B) - Public URL</td>
</tr>
</table>

#### Justification

WebChart EHR should provide public access to all API documentation, implementation requirements, and terms of use as outlined in 170.315(g)(7), 170.315(g)(8), and 170.315(g)(9).  This documentation should be available at all times throughout the year.

#### Test Methodology

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html.  Both up- and downtime will be logged to be reported quarterly.  The cause of any downtime and the duration will also be logged   In the event of any downtime, the amount of downtime can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be reported.

#### Expected Outcome(s)

It is expected that all documentation will maintain an uptime of greater than 99.9%.  Any downtime is expected to be caused by minor errors, such as a connection timeout or planned maintenance, and last for a duration of 10 minutes or less.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 9: Clinical Information Reconciliation and Incorporation

#### Description

This measure will verify that the system can take a CCDA transition of care/referral summary formatted according to the standards adopted §170.205(a)(3) and §170.205(a)(4) and read the data for medications, allergies, and conditions from the document, reconcile those into the chart, and that the data is fully incorporated into the chart.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Clinical information reconciliation and incorporation" (§ 170.315(b)(2))</td>
<td>(b)(2)(iii)(A), (B), (C), (D)</td>
</tr>
<tr>
<td>(b)(2)(iv) - System Verification</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to reconcile CCDA data for medications, allergies, and conditions into a patient's chart as outlined in § 170.315(b)(2).

#### Test Methodology

MIE will report on the number of CDA formatted documents reconciled via the "Froozhie" tool.

Following each reconcile, a temporary CDA for the chart will be created and validated to ensure the reconciled data can be incorporated into a CDA created free of schematic errors (the CDA document will *NOT* be kept, only the result of the validation).  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported

#### Expected Outcome(s)

It is expected that errored reconciliations and invalid CDA checks should be extremely rare.

#### Care Setting(s)

Primary care, specialties, small, large

### Measure 10: Transmission to Immunization Registry: Create Content

#### Description

This measure will verify that the system can generate a VXU conforming to the HL7 v2.5.1 standard, CDC guidance for communication to Immunization Registries and state/local guidance. The VXU messages shall contain information related to the demographics and vaccination administration record.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Transmission to immunization registries" (§ 170.315(f)(1))</td>
<td>(f)(1)(i) - Create Content</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to generate and send valid VXU messages.

#### Test Methodology

MIE will report from the database the number of successfully sent VXU messages acknowledged as received by the state immunization registry. MIE will also report from the database on the number of records rejected by the state registry due to error, whether the failure was due to registry internal errors, clinical data entry issues or a not well-formed message. Finally, MIE will report from the database the number of messages which declined to be generated due to data entry issues failing message pre-validation.

#### Expected Outcome(s)

It is expected that failures to generate messages will be rare, as will rejections of generated messages by the registry. In all cases of failures, users will be made aware of the failure through a registry status dashboard with information pertaining to how the errors may be resolved and options for attempting a resubmission of the vaccination record to the registry.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 11: Transmission to Immunization Registries: Query Records

#### Description

This measure will verify that the system can generate a QBP conforming to the HL7 v2.5.1 standard, CDC guidance for communication to Immunization Registries and state/local guidance. Furthermore, the system shall be able to retrieve, consume and display to the end user the results of any such query.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Transmission to immunization registries" (§ 170.315(f)(1))</td>
<td>f)(1)(ii) - Query Records</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to request, consume and display an evaluated patient history and forecast.

#### Test Methodology

MIE will report the number of successful retrievals of evaluated history and forecasting operations from the database. MIE will report the number of failed retrievals, including those resulting from an internal error in the registry resulting in an inability to consume a response from the database. MIE will manually track, resolve and report issues resulting from WebChart EHR application errors as reported by end users.

#### Expected Outcome(s)

It is expected that failures will be rare. In the case of reported WebChart applications errors, issues shall be tracked and resolved. In the case of registry internal errors, the registry shall be notified of the issue.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 12: Direct Project: Send

#### Description

This measure will verify that the system can transmit a Direct project conforming S/MIME to a HISP. The measure will also verify the receipt of those transmissions by verifying the status of the resultant MDN messages.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Direct Project" (§ 170.315(h)(1))</td>
<td>(h)(1)(i) - Send</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Processed</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Failed</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to generate valid S/MIME messages, transmit them via Direct Project specifications and consume the resulting MDN from the recipient.

#### Test Methodology

MIE will report from log files the number of messages transmitted. MIE will report from logs the number of messages which failed to be transmitted whether due to internal error, external failures or inability to verify trust of the recipient. MIE will report from logs the number of Processed MDN messages received. MIE will report from logs the number of Failed MDN messages received.

#### Expected Outcome(s)

It is expected that errors will be rare with the most common cause of error being a lack of verified trust with the intended recipient.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 13: Direct Project: Receive

#### Description

This measure will verify that the system conforms to Direct Project message receipt requirements for validation.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Direct Project" (§ 170.315(h)(1))</td>
<td>(h)(1)(i) - Receive</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to receive, validate and deliver Direct Project messages transmitted to its HISP.

#### Test Methodology

MIE will report from logs the number of messages transmitted to the HISP.  MIE will report from logs the number of messages failing to conform to Direct Project specifications.  MIE will report from logs the number of messages which are successfully delivered to recipients.

#### Expected Outcome(s)

It is expected that many messages transmitted to the public facing HISP listener will not meet the requirements for Direct Project messages and will be rejected by the HISP.  It is expected that failures for conforming messages from receipt through delivery will be rare.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 14: Patient Portal View

#### Description

This measure will verify that a patient can view various document types within the patient portal.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"View, download, and transmit to 3rd party" (§ 170.315(e)(1))</td>
<td>(e)(1)(i)(A)(1),(2),(3),(4),(5)</td>
</tr>
<tr>
<td>(e)(1)(i)(D)(1), (2)</td>
</tr>
<tr>
<td>(e)(1)(ii)(A)</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to provide a mechanism for a patient to read documents sent to them within a patient portal as required by § 170.315(e)(1).

#### Test Methodology

MIE will report a number of measurements surrounding documents, including:

* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents read by patients in the patient portal
* Number of failures in the ability to read messages in the patient portal

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files as well as any client reported issues tracked during the testing period.

#### Expected Outcome(s)

There is expected to be an extremely low occurrence of messages unable to be sent to the patient portal.  The percentage of messages read in the portal may be influenced by the engagement of the patients themselves and will be analyzed if it appears to be lower than expected.  In the case of low readership, MIE will encourage clients to investigate methods of increasing patient engagement, or validate sends of documents to patients truly interested in using an online patient portal (i.e., do not send if there is an expectation that the patient will likely not use the portal).

#### Care Setting(s)

Primary, specialties, small, large

### Measure 15: Patient Portal Download

#### Description

This measure will verify that a patient can download various document types within the patient portal.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"View, download, and transmit to 3rd party" (§ 170.315(e)(1))</td>
<td>(e)(1)(i)(B)(1), (2), (3)</td>
</tr>
<tr>
<td>(e)(1)(i)(D)(1), (2)</td>
</tr>
<tr>
<td>(e)(1)(ii)(A)</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to provide a mechanism for a patient to download documents sent to them within a patient portal.

#### Test Methodology

MIE will report a number of measurements surrounding documents, including:

* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents successfully downloaded from the patient portal
* Number of documents unsuccessful in being downloaded from the patient portal.

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.

#### Expected Outcome(s)

There is expected to be an extremely low occurrence of messages unable to be downloaded from the patient portal.

If there is a lack of downloads in a certain timeframe by patients within the workflow, MIE may conduct internal testing of message downloads to maintain measure compliance.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 16: Patient Portal CCDA Transmit

#### Description

This measure will verify that a patient can transmit various document types within the patient portal to other entities.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"View, download, and transmit to 3rd party" (§ 170.315(e)(1))</td>
<td>(e)(1)(i)(C)(1), (2)</td>
</tr>
<tr>
<td>(e)(1)(i)(D)(1), (2)</td>
</tr>
<tr>
<td>(e)(1)(ii)(A)</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to provide a mechanism for a patient to transmit documents sent to them within a patient portal to other entities.

#### Test Methodology

MIE will report a number of measurements surrounding documents, including:

* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents successfully transmitted from the patient portal
* Number of documents unsuccessful in being transmitted from the patient portal.

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.

#### Expected Outcome(s)

There is expected to be an extremely low occurrence of messages unable to be transmitted from the patient portal to third parties.

If there is a lack of transmission attempts in a certain timeframe by patients within the workflow, MIE may conduct internal testing of message transmissions to maintain measure compliance.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 17: Send Using Edge Protocol for SMTP / XDM

#### Description

This measure will verify that the system is able to utilize a SMTP edge protocol for sending and receiving Direct Project messages. As part of receiving messages, XDM shall be handled when applicable.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>‘‘Transitions of care" (§ 170.315(b)(1))</td>
<td>(b)(1)(i)(A)(Alternative) - Send Using Edge Protocol for SMTP/IXE XDR</td>
</tr>
<tr>
<td>(b)(1)(i)(B)(Alternative) - Receive Using Edge Protocol for SMTP/IXE XDR</td>
</tr>
<tr>
<td>(b)(1)(i)(C)(Conditional) - XDM Processing</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to receive and send Direct Project messages to a HISP utilizing a SMTP edge.

#### Test Methodology

MIE will report from logs the number of messages transmitted to the HISP by SMTP.  MIE will report from logs the number of messages received from the HISP by SMTP.  MIE will report from logs the number of XDM packages processed.  In the case where insufficient real-world data is available, data resulting from regular testing with DirectTrust shall be included in the reporting.

#### Expected Outcome(s)

It is expected that the current usage shall be low, with the exception of regular DirectTrust testing.  Any errors resulting from real-world transmission of messages are expected to be rare, but may skew results due to the low volume of transmitted messages.

#### Care Setting(s)

Primary, specialties, pediatrics, small, large

### Measure 18: Data Export

#### Description

This measure will verify that a user can use WebChart EHR's Data Export Tool to pull down groups of patient data from a Webchart EHR system.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Data export" (§ 170.315(b)(6))</td>
<td>(b)(6)(i)</td>
</tr>
<tr>
<td>(b)(6)(ii)(A)-(F)</td>
</tr>
<tr>
<td>(b)(6)(iii)(A)-(B)</td>
</tr>
<tr>
<td>(b)(6)(iv)</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to provide a mechanism for a user to download patient chart information via CDA from a large set of patients within the system as outlined in §170.315(b)(6).  This tool is publicly available (https://github.com/mieweb/wcexport).

#### Test Methodology

MIE will report from the event log database tables a series of occurrences that indicates use of the WebChart EHR Data Export Tool:

* Event logs of the report to find all patients for Document Export being called.
* Event logs of CDA documents being generated within a certain short time period following the report.

MIE will track customer reports of data expected to be in mass data export downloads that did not download as failures.

#### Expected Outcome(s)

It is expected that there will be an extremely low occurrence of data exports unable to be downloaded from a Webchart EHR.

If there is a lack of data exports in a certain timeframe by patients within the workflow, MIE may conduct internal testing of data export to maintain measure compliance.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 19: CDA Validation

#### Description

This measure will verify that CDAs both created by and received by a Webchart EHR system pass basic CDA validation.

### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>‘‘Transitions of care" (§ 170.315(b)(1) Cures Update)</td>
<td>(b)(1)(ii)(A)</td>
</tr>
<tr>
<td>"Data export" (§ 170.315(b)(6))</td>
<td>(b)(6)(ii), (A)-(F)</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to validate that CDAs that are stored within webchart either do or do not conform to basic CDA schema requirements.

#### Test Methodology

All CDAs stored within a Webchart EHR will be run through schema validation regardless of the document's origin.  Documents may originate within the WebChart EHR system or be imported from a third party application of manual upload.  The schema validator will be installed within the MIE production environment to ensure the security of all PHI contained in the documents.  Only results of the validation will be made available, document content will not be revealed to developers during testing.

The number of valid vs. invalid CDAs and their sources will be reported.

#### Expected Outcome(s)

Any formatting or stylesheet errors identified by the CDA validator will be tracked, reported, and resolved.  These errors are expected to be rare for documents created by WebChart EHR.  If CDA documents received from third parties are identified to have schematic errors, those third parties will be notified whenever possible.

#### Care Setting(s)

Primary, specialties, small, large

### Measure 20: Patient Data requests VIA API

#### Description

This measure will verify that the API as outlined in WebChart EHR's documentation is functional. A valid request for patient information must provide that information.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Application access – patient selection" (§ 170.315(g)(7))</td>
<td>(g)(7)(i) - Query processing and response</td>
</tr>
<tr>
<td>"Application access – data category request" (§ 170.315(g)(8))</td>
<td>(g)(8)(i)(A) - Return CCDS data</td>
</tr>
<tr>
<td>(g)(8)(i)(B) - Request response</td>
</tr>
<tr>
<td>"Application access—all data request" (§ 170.315(g)(9))</td>
<td>(g)(9)(i)(A)(1) - Demonstrate API</td>
</tr>
<tr>
<td>(g)(9)(i)(A)(3) - Data Classes</td>
</tr>
<tr>
<td>(g)(9)(i)(B) - Data Return</td>
</tr>
</table>

#### Justification

WebChart EHR should provide patient information to requesters with the proper access to the information. In production environments of WebChart EHR, the use of the documented API is rare; therefore, MIE will conduct dual level testing of the API first, using automated testing of a test system in a production environment and second, manually tracking any client reported issues with the API functionality against the automatically tracked API requests are made.

#### Test Methodology

To address the overall automated testing, the following test requests will be made daily against a test system in a production environment.

* Issue a request in the browser to search for a patient (patient selection)
* Issue a request in the browser to request demographics of a patient (data category request)
* Issue a request using the export tool described in the documentation.

All API requests made in production systems are recorded in log files.  The number of requests logged will be reported against the number of issues with API functionality that are reported.

#### Expected Outcome(s)

It is expected that automated testing will be successful more than 97% of the time.  Any errors will be logged and reported; however, errors are expected to be minimal, such as a lost server connection.  Both production uses of the API and reports of errors are expected to be rare.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 21: Web Content Accessibility

#### Description

This measure will verify that all certified content in the patient portal will maintain accessibility conformance as outlined in the Web Content Accessibility Guidelines (WCAG) 2.0.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#test_procedure"></a></td>
<td>(e)(1)(i) - Web Content Accessibility</td>
</tr>
</table>

#### Justification

The certified content of the patient portal should be accessible to all users regardless of abilities or impairments as outlined in the Web Content Accessibility Guidelines (WCAG) 2.0.

#### Test Methodology

MIE will conduct monthly third-party production accessibility scanning as well as automated nightly internal accessibility scanning of a test system in a production environment.

#### Expected Outcome(s)

It is expected that no urgent non-conformance issues will be identified and that the number of secondary issues will be minimal.  Any non-conformance that reaches a production system will be tracked and reported.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

## Schedule of Key Milestones

<table>
<tr>
<td><strong>Key Milestone</strong></td>
<td><strong>Care Setting</strong></td>
<td><strong>Date/Timeframe</strong></td>
</tr>
<tr>
<td>Release of documentation for the Real World Testing to be provided to ACB and providers</td>
<td>All settings</td>
<td>November 15, 2021</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>January 1, 2022</td>
</tr>
<tr>
<td>New certification of b.7, b.8, b.9</td>
<td>All settings</td>
<td>Q1, 2022</td>
</tr>
<tr>
<td>Certification of additional CQMs to c.1, c.2, c.3 and QRDA SVAP</td>
<td>All settings</td>
<td>Q1, 2022</td>
</tr>
<tr>
<td>Attest to Cures update version of b.2, e.1</td>
<td>All settings</td>
<td>Q1, 2022</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2022</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2022</td>
</tr>
<tr>
<td>New certification of b.10, g.10</td>
<td>All settings</td>
<td>Q3, 2022</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>December 31, 2022</td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2023</td>
</tr>
<tr>
<td>Submission of Real World Testing Results to ACB</td>
<td>All settings</td>
<td>Per ACB instructions</td>
</tr>
</table>

## Attestation

This Real World Testing plan is complete with all required elements, including measures that address all certification criteria and care settings. All information in this plan is up to date and fully addresses the health IT developer's Real World Testing requirements.

<table>
<tr>
<td><strong>Authorized Representative Name</strong></td>
<td>Doug Horner</td>
</tr>
<tr>
<td><strong>Authorized Representative Email</strong></td>
<td>horner@mieweb.com</td>
</tr>
<tr>
<td><strong>Authorized Representative Phone</strong></td>
<td>260-459-6270</td>
</tr>
<tr>
<td><strong>Authorized Representative Signature</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>11/15/2022</td>
</tr>
</table>
