---
id: '1uv5mwow3lT430CsvNRNmaqPdiIVF1OetG4jPTRQbk4Y'
title: 'Real World Testing Plan 2026'
date: '2025-11-18T20:08:08.953Z'
version: 375
lastAuthor: 'dcarlson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/'
  - 'https://www.healthit.gov/test-method/transitions-care'
  - 'https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation'
  - 'https://www.healthit.gov/test-method/electronic-prescribing'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-send'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-receive'
  - 'https://www.healthit.gov/test-method/care-plan'
  - 'https://www.healthit.gov/test-method/electronic-health-information-export'
  - 'https://www.healthit.gov/test-method/decision-support-interventions'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party'
  - 'https://www.healthit.gov/test-method/transmission-immunization-registries'
  - 'https://www.healthit.gov/test-method/transmission-public-health-agencies-syndromic-surveillance'
  - 'https://www.healthit.gov/test-method/transmission-public-health-agencies-electronic-case-reporting'
  - 'https://www.healthit.gov/test-method/application-access-patient-selection'
  - 'https://www.healthit.gov/test-method/application-access-all-data-request'
  - 'https://www.healthit.gov/test-method/standardized-api-patient-and-population-services'
  - 'https://www.healthit.gov/test-method/direct-project'
  - 'https://ecqi.healthit.gov/glossary/standard-trial-use-stu'
  - 'https://www.w3.org/WAI/WCAG2-Conformance'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0'
  - 'https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/?utm_source=bluehive&utm_medium=chat&utm_campaign=bluehive-ai'
  - 'https://ozwell.ai/2025/01/30/introduction-to-bluehive-healths-irm-practices/'
  - 'https://ozwell.ai/2025/05/27/ozwell-pdsi-source-attributes/'
  - 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315'
source: 'https://drive.google.com/open?id=1uv5mwow3lT430CsvNRNmaqPdiIVF1OetG4jPTRQbk4Y'
wikigdrive: 'v2.15.30'
---
## General Information

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
<td>8.4</td>
</tr>
<tr>
<td><strong>Certified Health IT Product List ID(s)</strong></td>
<td>15.04.04.1932.WebC.84.01.0.221117</td>
</tr>
<tr>
<td><strong>Developer Real World Testing Page URL</strong></td>
<td><a href="https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/">https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/</a></td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>10/30/2025</td>
</tr>
</table>

## Certification Criteria to be Tested

* Care Coordination
    * § 170.315(b)(1) Transitions of care
    * § 170.315(b)(2) Clinical information reconciliation and incorporation
    * § 170.315(b)(3) Electronic prescribing
    * § 170.315(b)(7) Security tags - summary of care - send
    * § 170.315(b)(8) Security tags - summary of care - receive
    * § 170.315(b)(9) Care plan
    * § 170.315(b)(10) Electronic Health Information export
    * § 170.315(b)(11) Decision Support Interventions
* Clinical Quality Measures
    * § 170.315(c)(1)—record and export
    * § 170.315(c)(2)—import and calculate
    * § 170.315(c)(3)—report
* Patient Engagement
    * § 170.315(e)(1) View, download, and transmit to 3rd party
* Public Health
    * § 170.315(f)(1) Transmission to immunization registries
    * § 170.315(f)(2) Transmission to public health agencies - syndromic surveillance
    * § 170.315(f)(5) Transmission to public health agencies - electronic case reporting
* Application Programming Interfaces
    * § 170.315(g)(7) Application access - patient selection
    * § 170.315(g)(9) Application access -  all data request
    * § 170.315(g)(10) Standardized API for patient and population services
* Electronic Exchange
    * § 170.315(h)(1) Direct Project

## Criteria-Measure Matrix

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Requirement</strong></td>
<td><strong>Measure</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transitions-care#cures_tp">§170.315(b)(1): Transitions of Care</a></td>
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
<td><a href="https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#cures_tp">§170.315(b)(2): Clinical information reconciliation and incorporation</a></td>
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
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">§170.315(b)(3): Electronic prescribing</a></td>
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
<td><a href="https://www.healthit.gov/test-method/data-segmentation-privacy-send#cures_tp">§170.315(b)(7): Security tags - summary of care - send</a></td>
<td>(b)(7) - CDA Generated with Privacy & Security Markings</td>
<td>27</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/data-segmentation-privacy-receive#cures_tp">§170.315(b)(8): Security tags - summary of care - receive</a></td>
<td>(b)(8)(i) - Security Tags Document</td>
<td>28</td>
</tr>
<tr>
<td>(b)(8)(ii) - Preserve Privacy Markings</td>
<td>28</td>
</tr>
<tr>
<td><br />
<a href="https://www.healthit.gov/test-method/care-plan#cures_tp">§170.315(b)(9):  Care plan</a></td>
<td>(b)(9) - Record</td>
<td>24</td>
</tr>
<tr>
<td>(b)(9) - Change and Access</td>
<td>24</td>
</tr>
<tr>
<td>(b)(9) - Create</td>
<td>25</td>
</tr>
<tr>
<td>(b)(9) - Receive</td>
<td>26</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/electronic-health-information-export#ccg">§170.315(b)(10): Electronic Health Information export</a></td>
<td>(b)(10)(i) - Single patient export</td>
<td>18</td>
</tr>
<tr>
<td>(b)(10)(ii) - Patient population export</td>
<td>18</td>
</tr>
<tr>
<td>(b)(10)(iii) - Documentation</td>
<td>34</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/decision-support-interventions">§ 170.315(b)(11) Decision Support Interventions</a></td>
<td>(b)(11)(i) - Decision support intervention interaction</td>
<td>37</td>
</tr>
<tr>
<td>(b)(11)(ii) - Decision support configuration</td>
<td>37</td>
</tr>
<tr>
<td>(b)(11)(iii) - Decision support intervention selection</td>
<td>37</td>
</tr>
<tr>
<td>(b)(11)(iv) - Source attributes (categories)</td>
<td>35</td>
</tr>
<tr>
<td>(b)(11)(v) - Source attribute access and modification</td>
<td>35, 36</td>
</tr>
<tr>
<td>(b)(11)(vi) - Intervention Risk management</td>
<td>35</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure">§170.315(c)(1): CQMs – record and export</a></td>
<td>(c )(1)(i) - Report</td>
<td>1</td>
</tr>
<tr>
<td>(c )(1)(ii) - Export</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure">§170.315(c)(2): CQMs – import and calculate</a></td>
<td>(c )(2)(i) - Import</td>
<td>2</td>
</tr>
<tr>
<td>(c )(2)(ii) - Calculate</td>
<td>1, 2</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure">§170.315(c)(3): CQMs – report</a></td>
<td>(c )(3)(i) - Report</td>
<td>1, 2</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#cures_tp">§170.315(e)(1): View, download, and transmit to 3rd party</a></td>
<td>(e)(1)(i) - Web Content Accessibility</td>
<td>21</td>
</tr>
<tr>
<td>(e)(1)(i)(A) - View</td>
<td>14</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(1) - USCDI</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(3)(i) - Assessment and Plan of Treatment</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(3)(ii) - Goals</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(3)(iii) - Health Concerns</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(4) - Provider Data</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(6) - Laboratory Test Report</td>
<td>23</td>
</tr>
<tr>
<td>(e)(1)(i)(A)(7) - Diagnostic Imaging Report</td>
<td>23</td>
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
<td>(e)(1)(i)(C)(1)(i) - Email</td>
<td>16</td>
</tr>
<tr>
<td>(e)(1)(i)(C)(1)(ii) - Encrypted Transmission</td>
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
<td><a href="https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure">§170.315(f)(1): Transmission to immunization registries</a></td>
<td>(f)(1)(i) - Create Content</td>
<td>10</td>
</tr>
<tr>
<td>(f)(1)(ii) - Query Records</td>
<td>11</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transmission-public-health-agencies-syndromic-surveillance#test_procedure">§170.315(f)(2): Transmission to public health agencies — syndromic surveillance</a></td>
<td>(f)(2) - Create Content</td>
<td>32</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transmission-public-health-agencies-electronic-case-reporting#test_procedure">§170.315(f)(5): Transmission to public health agencies — electronic case reporting</a></td>
<td>(f)(5)(i) - Consume trigger codes</td>
<td>33</td>
</tr>
<tr>
<td>(f)(2)(ii) - Match encounter to trigger codes</td>
<td>33</td>
</tr>
<tr>
<td>(f)(2)(iii) - Create case report</td>
<td>33</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure">§170.315(g)(7): Application access – patient selection</a></td>
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
<td><a href="https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp">§170.315(g)(9): Application access—all data request</a></td>
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
<td>(g)(9)(ii)(A)(1) - Documentation</td>
<td>8</td>
</tr>
<tr>
<td>(g)(9)(ii)(A)(2) - Implementation Requirements</td>
<td>8</td>
</tr>
<tr>
<td>(g)(9)(ii)(B) - Public URL</td>
<td>8</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure">§170.315(g)(10): Standardized API for patient and population services</a></td>
<td>(g)(10)(i) - Data response: USCDI v1 + US Core STU v3.1.1</td>
<td>29, 30, 31</td>
</tr>
<tr>
<td>(g)(10)(ii) - Supported search operations</td>
<td>29, 30, 31</td>
</tr>
<tr>
<td>(g)(10)(iii) - Application registration</td>
<td>29, 30, 31</td>
</tr>
<tr>
<td>(g)(10)(iv) - Secure connection</td>
<td>29, 30, 31</td>
</tr>
<tr>
<td>(g)(10)(v)(A) - Authentication and authorization for patient and user scopes: SMART 1.0.0</td>
<td>29, 30</td>
</tr>
<tr>
<td>(g)(10)(v)(B) - Authentication and authorization for system scopes</td>
<td>29, 31</td>
</tr>
<tr>
<td>(g)(10)(vi) - Patient authorization revocation</td>
<td>29, 30</td>
</tr>
<tr>
<td>(g)(10)(vii) - Token introspection</td>
<td>30, 31</td>
</tr>
<tr>
<td>(g)(10)(vii) - Documentation</td>
<td>22</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/direct-project#test_procedure">§170.315(h)(1): Direct Project</a></td>
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

## Standards Updates (SVAP and USCDI)

All certified criteria in WebChart EHR use the current standard or implementation specification version, and will continue conformance to that version throughout the 2026 Real World Testing period unless stated in the table below. Key current versions include the following:

* HL7 CDA® Release 2 Implementation Guide for: Quality Reporting Document Architecture – Category I (QRDA I); Release 1, DSTU Release 3 (US Realm), Volume 1
* QRDA Category I, Release 1, [Standard for Trial Use](https://ecqi.healthit.gov/glossary/standard-trial-use-stu) Release 5.3 with errata (published December 2022)
* QRDA Category III, Release 1 (published September 2021)
* [](https://www.w3.org/WAI/WCAG2-Conformance#level-AA)
* HL7® CDA R2 Implementation Guide: C-CDA Templates for Clinical Notes R2.1 Companion Guide, Release 2-US Realm, October 2019
* United States Core Data for Interoperability (USCDI), Version 4, March 2025 Errata
* HL7® FHIR® US Core Implementation Guide STU 7.0.0, May 8, 2024
* HL7® FHIR® SMART Application Launch Framework Implementation Guide Release 2.2.0, March 1, 2023
* HL7® FHIR® Bulk Data Access (Flat FHIR®) (v2.0.0: STU 2), November 26, 2021

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

The following measures outline and justify how each requirement of all criteria to which WebChart EHR is certified will be tested during the 2025 Real World Testing year.  Please review the Criteria-Measure Matrix above to review which measure(s) will cover a specific requirement.

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
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure">§170.315(c)(1): CQMs – record and export</a></td>
<td>(c )(1)(i) - Record</td>
</tr>
<tr>
<td>(c )(1)(ii) - Export</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure">§170.315(c)(2): CQMs – import and calculate</a></td>
<td>(c )(2)(ii) - Calculate</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure">§170.315(c)(3): CQMs – report</a></td>
<td>(c )(3)(i) - Report</td>
</tr>
</table>

#### Justification

WebChart EHR should accommodate the full range of §170.315(c)(1), §170.315(c)(2), and §170.315(c)(3) to support providers participating in MIPS and other quality measures.  Most data supporting these measures for existing clients will come from data generated internally by their standard clinical workflows of seeing patients or incorporating the CCDA of transitioning patients.  Numerical compliance calculations and reporting will be monitored by MIE and the practices selected for testing.  The export and report QRDA formats will be validated by reporting partners and Cypress CUV+ to ensure data collected and calculated in WebChart EHR remains interoperable.

#### Test Methodology

First, MIE will install an instance of Cypress 7+ on our production servers following all of our protocols for maintaining the security of PHI.  Cypress CUV+ supports the validation of QRDA reports containing PHI and will be used monthly to validate a random selection of QRDAs from the care settings identified.  Any errors identified by Cypress CUV+ will be tracked, reported, and addressed, then followed with testing of a larger sample of files.

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
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure">§170.315(c)(2): CQMs – import and calculate</a></td>
<td>(c )(2)(i) - Import</td>
</tr>
<tr>
<td>(c )(2)(ii) - Calculate</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure">§170.315(c)(3): CQMs – report</a></td>
<td>(c )(3)(i) - Report</td>
</tr>
</table>

#### Justification

WebChart EHR should accommodate the full range of §170.315(c)(1), §170.315(c)(2), and §170.315(c)(3) to support providers participating in MIPS and other quality measures.  It is rare that an active production client will import a QRDA I file for use in their CQM calculations.  To maintain that WebChart EHR is capable of importing and calculating when this does occur, QRDA I files from Cypress will be imported into a test system in a production environment, CQMs will be automatically calculated, and QRDA files will be exported back to Cypress for content and calculation validation.

#### Test Methodology

MIE will install an instance of Cypress 7+ on our production servers, following all protocols for maintaining the security of PHI. Automated testing will download QRDA I files from Cypress for each certified CQM, import the files to WebChart EHR, calculate the CQM rates, and export the QRDA files for Cypress validation of both the content and the calculated rates. Each CQM rate is defined as the proportion of patients meeting the measure criteria (numerator) out of the total eligible patient population (denominator) for that measure. Cypress will validate that both the content and the calculated rates (numerator/denominator) are accurate to verify that the import was successful. Any errors in rates or content identified by Cypress will be tracked, reported, and addressed.

#### Expected Outcome(s)

It is expected that errors affecting the calculation or reporting of CQM rates, as well as QRDA format errors, will be rare. Each CQM rate is defined as the number of patients meeting the measure criteria (numerator) divided by the total eligible patient population (denominator) for that measure. Any formatting, content, or rate calculation errors identified by Cypress will be tracked, reported, and resolved. These errors are expected to be rare both before and after using SVAP to update the version of QRDA supported by WebChart EHR.

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
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">§170.315(b)(3): Electronic prescribing</a></td>
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

The report will also include the rate of outbound messages unable to be transmitted due to connectivity issues or other errors, for each message type. This rate will be calculated as the number of failed outbound messages (numerator) divided by the total number of outbound messages attempted (denominator) for each message type. The report will be based on the contents of each client's local database table of stored messages. MIE will run the report for each client under consideration and aggregate the rate results.

#### Expected Outcome(s)

Each supported message type should have a transmission attempt rate greater than zero, and the rate of outbound messages with errors should be significantly lower than the overall transmission attempt rate. Based on past usage patterns, the rate of NewRx messages is anticipated to be higher than that of RxChangeResponse, CancelRx, or RxRenewalResponse.

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
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">§170.315(b)(3): Electronic prescribing</a></td>
<td>(b)(3)(ii)(C)(1) - Primary/Secondary Diagnosis</td>
</tr>
</table>

#### Justification

WebChart EHR must be able to send Diagnosis codes in outbound e-prescribing messages, and receive inbound messages that include them.

#### Test Methodology

MIE will report the contents of each stored message in a client's local database table of stored messages and calculate the rate of inbound and outbound messages that include Diagnosis elements. This rate will be defined as the number of messages containing Diagnosis elements (numerator) divided by the total number of inbound or outbound messages (denominator) for each client. MIE will run the report for each client under consideration and aggregate the rate results.

#### Expected Outcome(s)

As Diagnosis code is not a required element for transmission, it is expected that the rate of messages containing Diagnosis elements will be greater than zero but less than 100% for both inbound and outbound messages. These elements will be present in some, but not all, messages.

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
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">§170.315(b)(3): Electronic prescribing</a></td>
<td>(b)(3)(ii)(E) - Metric Units</td>
</tr>
</table>

#### Justification

WebChart EHR should prevent prescriptions of oral liquid medications from being sent electronically if they have an inappropriate quantity unit of measurement.

#### Test Methodology

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, limited to oral liquid medications, and calculates the rate of use for each distinct quantity unit of measure. This rate will be defined as the number of oral liquid NewRx messages using a specific unit of measure (numerator) divided by the total number of oral liquid NewRx messages (denominator) for each client. MIE will run the report for each client under consideration and aggregate the rate results.

#### Expected Outcome(s)

It is expected that the rate of oral liquid NewRx messages using code C28254 (milliliters) as the unit of measure will be the highest among all units, with the rates for other units of measure being extremely low.

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
<td><a href="https://www.healthit.gov/test-method/electronic-prescribing#cures_tp">§170.315(b)(3): Electronic prescribing</a></td>
<td>(b)(3)(ii)(F) - Decimal Format</td>
</tr>
</table>

#### Justification

WebChart EHR should prevent prescriptions from being sent electronically if they have directions or total quantity that are missing leading zeros or include trailing zeros.  This is essential for preventing misunderstanding by pharmacists regarding the amount to dispense and patients regarding the amount of medication to take.

#### Test Methodology

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages and calculates the rate of prescription messages that include inappropriate trailing zeros, as well as the rate of those missing required leading zeros. Each rate will be defined as the number of NewRx messages with the specific error (numerator) divided by the total number of NewRx messages (denominator) for each client. MIE will run the report for each client under consideration and aggregate the rate results.

#### Expected Outcome(s)

It is expected that the rates of prescriptions sent with inappropriate trailing zeros or missing required leading zeros will be very low.

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
<td><a href="https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#cures_tp">§170.315(b)(2): Clinical information reconciliation and incorporation</a></td>
<td>(b)(2)(ii) - <em>Correct patient.</em></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transitions-care#cures_tp">§170.315(b)(1): Transitions of Care</a></td>
<td>(b)(1)(ii) - All paragraphs</td>
</tr>
<tr>
<td>(b)(1)(iii) - All paragraphs</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to accept a CDA document and place it into the correct chart based on information within the document.  It should also be able to display the CDA documents with an appropriate stylesheet.

#### Test Methodology

MIE will report on the number of CDA formatted documents uploaded into tracked Webchart systems and the number of upload attempts that failed as stored in client databases and error log files. This will be reported as a CDA success rate (successful uploads/uploads attempts).

MIE will report on the number of requests to view a CDA document within the system, and the number of times it displayed correctly, and when there were errors in display.  
Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  These test assumptions for customer reporting align with the "visual inspection" aspects of the test lab tests.  This will be reported as a CDA View success rate (successful CDA views/Attempted CDA views).

#### Expected Outcome(s)

It is expected that CDA upload and stylesheet errors will be rare.  A 99% rate will be expected on both rates listed in test methodology.  Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.

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
<td><a href="https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure">§170.315(g)(7): Application access – patient selection</a></td>
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
<td><a href="https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp">§170.315(g)(9): Application access—all data request</a></td>
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

WebChart EHR should provide public access to all API documentation, implementation requirements, and terms of use as outlined in 170.315(g)(7) and 170.315(g)(9).  This documentation should be available at all times throughout the year.

#### Test Methodology

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html?utm_source=bluehive&utm_medium=chat&utm_campaign=bluehive-ai. Both uptime and downtime rates will be logged and reported quarterly. The uptime rate will be defined as the total time the documentation is available (numerator) divided by the total monitoring period (denominator), while the downtime rate will reflect the proportion of time the documentation is unavailable. The cause and duration of each downtime event will also be logged. In the event of any downtime, the downtime rate can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be included in the report.

#### Expected Outcome(s)

It is expected that all documentation will maintain an uptime rate of greater than 99.9%.  Any downtime is expected to be caused by minor errors, such as a connection timeout or planned maintenance, and last for a duration of 10 minutes or less.

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
<td><a href="https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#cures_tp">§170.315(b)(2): Clinical information reconciliation and incorporation</a></td>
<td>(b)(2)(iii)(A), (B), (C), (D)</td>
</tr>
<tr>
<td>(b)(2)(iv) - System Verification</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to reconcile CCDA data for medications, allergies, and conditions into a patient's chart as outlined in § 170.315(b)(2).

#### Test Methodology

MIE will report on the number of CDA formatted documents reconciled via our reconciliation process.

Following each reconcile, if a temporary CDA for the chart is created as part of the process, it will be validated to ensure the reconciled data can be incorporated into a CDA created free of schematic errors (the CDA document will *NOT* be kept, only the result of the validation).  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported.  This will be reported as a CDA validation rate.

#### Expected Outcome(s)

It is expected that errored reconciliations and invalid CDA checks should be rare.  Our success rate should be at least 90%, and any failures should be in CDA failures only and not XML failures that do not allow processing of the documents.

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
<td><a href="https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure">§170.315(f)(1): Transmission to immunization registries</a></td>
<td>(f)(1)(i) - Create Content</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to generate and send valid VXU messages.

#### Test Methodology

MIE will report from the database the rate of successfully sent VXU messages acknowledged as received by the state immunization registry. This rate will be defined as the number of VXU messages acknowledged by the registry (numerator) divided by the total number of VXU messages attempted (denominator). MIE will also report the rate of records rejected by the state registry due to errors, with separate rates for failures caused by registry internal errors, clinical data entry issues, or not well-formed messages. Additionally, MIE will report the rate of messages that were not generated due to data entry issues failing message pre-validation, calculated as the number of messages declined for generation (numerator) divided by the total number of message attempts (denominator). All rates will be aggregated for each client.

#### Expected Outcome(s)

It is expected that the rates of failures to generate messages and rejections of generated messages by the registry will be very low. In all cases of failure, users will be notified through a registry status dashboard, which will provide information on how to resolve the errors and options for attempting resubmission of the vaccination record to the registry.

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
<td><a href="https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure">§170.315(f)(1): Transmission to immunization registries</a></td>
<td>f)(1)(ii) - Query Records</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to request, consume and display an evaluated patient history and forecast.

#### Test Methodology

MIE will report the rate of successful retrievals of evaluated history and forecasting operations from the database. This rate will be defined as the number of successful retrievals (numerator) divided by the total number of retrieval attempts (denominator). MIE will also report the rate of failed retrievals, including those resulting from internal registry errors that prevent consumption of a response from the database. Additionally, MIE will manually track, resolve, and report the rate of issues resulting from WebChart EHR application errors as reported by end users.

#### Expected Outcome(s)

It is expected that the rates of failures will be very low. In the case of reported WebChart application errors, issues will be tracked and resolved. In the case of registry internal errors, the registry will be notified of the issue.

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
<td><a href="https://www.healthit.gov/test-method/direct-project#test_procedure">§170.315(h)(1): Direct Project</a></td>
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

MIE will report from log files the rate of messages successfully transmitted, defined as the number of messages transmitted (numerator) divided by the total number of transmission attempts (denominator). MIE will also report the rate of messages that failed to be transmitted, whether due to internal errors, external failures, or inability to verify trust of the recipient. Additionally, MIE will report the rate of Processed MDN messages received and the rate of Failed MDN messages received, each calculated as the number of respective MDN messages (numerator) divided by the total number of MDN messages received (denominator).

#### Expected Outcome(s)

It is expected that error rates will be very low, with the most common cause of error being a lack of verified trust with the intended recipient.

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
<td><a href="https://www.healthit.gov/test-method/direct-project#test_procedure">§170.315(h)(1): Direct Project</a></td>
<td>(h)(1)(i) - Receive</td>
</tr>
</table>

#### Justification

WebChart EHR should be able to receive, validate and deliver Direct Project messages transmitted to its HISP.

#### Test Methodology

MIE will report from logs the rate of messages transmitted to the HISP, defined as the number of messages transmitted (numerator) divided by the total number of message attempts (denominator). MIE will also report the rate of messages failing to conform to Direct Project specifications, calculated as the number of non-conforming messages (numerator) divided by the total number of messages transmitted to the HISP (denominator). Additionally, MIE will report the rate of messages successfully delivered to recipients, defined as the number of successfully delivered messages (numerator) divided by the total number of conforming messages (denominator).

#### Expected Outcome(s)

It is expected that a significant rate of messages transmitted to the public-facing HISP listener will not meet the requirements for Direct Project messages and will be rejected by the HISP. Failures for conforming messages from receipt through delivery are expected to be very rare.

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
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0">§170.315(e)(1): View, download, and transmit to 3rd party</a></td>
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

* Number of documents made available to patients in the patient portal
* Number of documents read by patients in the patient portal
* Number of failures in the ability to read messages in the patient portal

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files as well as any client reported issues tracked during the testing period.

The patient "read" rate will be calculated as the number of patient documents read (numerator) divided by the number of patient documents created (denominator). The patient read success rate will be calculated as the number of patient documents successfully viewed (numerator) divided by the number of patient documents attempted to be read (denominator).

#### Expected Outcome(s)

The rate of messages read in the portal may be influenced by patient engagement and will be analyzed if the numerator/denominator ratio is lower than expected. In cases of low viewership, MIE will encourage clients to investigate methods for increasing patient engagement or to validate that documents are being sent to patients who are interested in using the online patient portal. The expected patient read rate (numerator: documents read, denominator: documents created) is at least 50%, and the expected successfully viewed rate (numerator: documents successfully viewed, denominator: documents attempted to be read) is at least 99%.

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
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0">§170.315(e)(1): View, download, and transmit to 3rd party</a></td>
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

* Number of documents made available to patients in the patient portal
* Number of documents successfully downloaded from the patient portal
* Number of documents unsuccessful in being downloaded from the patient portal.

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.

The patient "download" rate will be calculated as the number of patient documents downloaded (numerator) divided by the number of patient documents created (denominator). The patient download success rate will be calculated as the number of patient documents successfully downloaded (numerator) divided by the number of patient documents attempted to be downloaded (denominator).

#### Expected Outcome(s)

It is expected that the rate of messages unable to be downloaded from the patient portal will be extremely low, with the download success rate (numerator: documents successfully downloaded, denominator: documents attempted to be downloaded) at 99%. If there is a lack of downloads within a certain timeframe by patients in the workflow, MIE may conduct internal testing of message downloads to maintain measure compliance. The expected download rate (numerator: documents downloaded, denominator: documents created) is 5%, but this may vary based on patient demand for downloading documents versus only viewing them.

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
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0">§170.315(e)(1): View, download, and transmit to 3rd party</a></td>
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

* Number of documents made available to patients in the patient portal
* Number of documents successfully transmitted from the patient portal
* Number of documents unsuccessful in being transmitted from the patient portal.

Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.

The patient "transmit" rate will be calculated as the number of patient documents transmitted (numerator) divided by the number of patient documents created (denominator). The patient transmit success rate will be calculated as the number of patient documents successfully transmitted (numerator) divided by the number of patient documents attempted to be transmitted (denominator).

#### Expected Outcome(s)

It is expected that the rate of messages unable to be transmitted from the patient portal to third parties will be extremely low, with the transmit success rate (numerator: documents successfully transmitted, denominator: documents attempted to be transmitted) at 99%. MIE may produce test messages to transmit to mieweb.com and ccme.com (our Direct compliant email domain) to validate this functionality if necessary. The goal for the transmit rate (numerator: documents transmitted, denominator: documents created) is 1%, though this will depend on patient engagement with the transmit feature.

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
<td><a href="https://www.healthit.gov/test-method/transitions-care#cures_tp">§170.315(b)(1): Transitions of Care</a></td>
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

MIE will report from logs the rate of messages transmitted to the HISP by SMTP, calculated as the number of messages transmitted by SMTP (numerator) divided by the total number of message transmission attempts by SMTP (denominator). MIE will also report the rate of messages received from the HISP by SMTP, defined as the number of messages received by SMTP (numerator) divided by the total number of message receipt attempts by SMTP (denominator). Additionally, MIE will report the rate of XDM packages processed, calculated as the number of XDM packages processed (numerator) divided by the total number of XDM packages attempted to be processed (denominator). In cases where insufficient real-world data is available, data from regular testing with DirectTrust will be included in the reporting.

#### Expected Outcome(s)

It is expected that the current usage rates will be low, except for regular DirectTrust testing. Any errors resulting from real-world transmission of messages are expected to be rare, but may have a noticeable impact on rates due to the low volume of transmitted messages.

#### Care Setting(s)

Primary, specialties, pediatrics, small, large

### Measure 18: EHI Export

#### Description

This measure will review WebChart EHR's ability to export a designated record set of patient data.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/electronic-health-information-export#ccg">§170.315(b)(10): Electronic Health Information export</a></td>
<td>(b)(10)(i) - Single patient export<br />
(b)(10)(ii) - Patient population export</td>
</tr>
</table>

#### Justification

WebChart EHR should allow a user to export the designated record of a patient in a timely manner without requiring developer assistance.  To ensure that this functionality is available when a user requires it, MIE will monitor requests and perform regular testing on the export.

#### Test Methodology

The data export failure rate will be calculated as the number of failed data export attempts (numerator) divided by the total number of data export attempts (denominator), with failures automatically generating an error message stored in a searchable database. Total number of export attempts will be tracked based on activity logs in the EHR. Additionally, an example patient export will be tested nightly to ensure all expected data is returned and to monitor for new errors.

#### Expected Outcome(s)

It is expected that the failure rate (numerator: failed export attempts, denominator: total export attempts) will be very low, with exports succeeding at least 95% of the time. Potential causes of failure, such as network connectivity issues or system timeouts due to unexpected data size, will be tracked and resolved as they occur.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large
### Measure 19: CDA Validation

#### Description

This measure will verify that CDAs both created by and received by a Webchart EHR system pass basic CDA validation.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transitions-care#cures_tp">§170.315(b)(1): Transitions of Care</a></td>
<td>(b)(1)(ii)(A)</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to validate that CDAs that are stored within webchart either do or do not conform to basic CDA schema requirements.

#### Test Methodology

All CDAs stored within a WebChart EHR will be run through schema validation, regardless of the document's origin. Documents may originate within the WebChart EHR system, be imported from a third-party application, or be manually uploaded. The schema validator will be installed within the MIE production environment to ensure the security of all PHI contained in the documents. Only the results of the validation will be made available; document content will not be revealed to developers during testing.

The CDA validation rate will be calculated as the number of CDAs successfully validated (numerator) divided by the total number of CDAs generated (denominator). The number and rate of valid versus invalid CDAs, along with their sources, will be reported.

#### Expected Outcome(s)

Any formatting or stylesheet errors identified by the CDA validator will be tracked, reported, and resolved. These errors are expected to be rare for documents created by WebChart EHR. If CDA documents received from third parties are identified to have schematic errors, those third parties will be notified whenever possible. The expectation is that 90% of CDAs (numerator: CDAs validated, denominator: CDAs generated) will be validated, with any invalid CDAs only failing the CDA schematron (e.g., due to missing information), and not being invalid XML that cannot be processed.

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
<td><a href="https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure">§170.315(g)(7): Application access – patient selection</a></td>
<td>(g)(7)(i) - Query processing and response</td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp">§170.315(g)(9): Application access—all data request</a></td>
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

All API requests made in production systems are recorded in log files. The API success rate will be calculated as the number of successful API requests (numerator) divided by the total number of API requests logged (denominator). The rate of reported issues with API functionality will be calculated as the number of reported issues (numerator) divided by the total number of API requests logged (denominator).
#### Expected Outcome(s)

It is expected that automated testing will result in a success rate (numerator: successful API requests, denominator: total API requests logged) greater than 97%. Any errors will be logged and reported, but errors are expected to be minimal, such as a lost server connection. Both production uses of the API and reports of errors are expected to be rare.

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
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#cures_tp">§170.315(e)(1): View, download, and transmit to 3rd party</a></td>
<td>(e)(1)(i) - Web Content Accessibility</td>
</tr>
</table>

#### Justification

The certified content of the patient portal should be accessible to all users regardless of abilities or impairments as outlined in the Web Content Accessibility Guidelines (WCAG) 2.0.

#### Test Methodology

MIE will conduct monthly third-party production accessibility scanning, as well as automated nightly internal accessibility scanning of a test system in a production environment. The accessibility non-conformance rate will be calculated as the number of non-conformance issues identified (numerator) divided by the total number of accessibility scans performed (denominator).

#### Expected Outcome(s)

It is expected that the rate of urgent non-conformance issues (numerator: urgent issues identified, denominator: total scans performed) will be zero, and the rate of secondary issues will be minimal. Any non-conformance that reaches a production system will be tracked and reported.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 22: FHIR API Documentation

#### Description

This measure will verify that WebChart EHR's FHIR API documentation is publicly and perpetually available.  Compliance will be recorded by an external uptime monitor and reported quarterly.  Upon request, or in the event of downtime, data can additionally be reported in daily, weekly, or monthly increments.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure">§170.315(g)(10): Standardized API for patient and population services</a></td>
<td>(g)(10)(vii) - Documentation</td>
</tr>
</table>

#### Justification

WebChart EHR should provide public access to all FHIR API documentation, software components, software configurations, registration instructions, and terms of use as outlined in 170.315(g)(10).  This documentation should be available at all times throughout the year.

#### Test Methodology

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/?utm_source=bluehive&utm_medium=chat&utm_campaign=bluehive-ai and the linked subpages. The uptime rate will be calculated as the total time the documentation is available (numerator) divided by the total monitoring period (denominator). The downtime rate will be calculated as the total time the documentation is unavailable (numerator) divided by the total monitoring period (denominator). Both up- and downtime rates, along with the cause and duration of any downtime, will be logged and reported quarterly. In the event of downtime, the downtime rate can also be reported at daily, weekly, or monthly intervals, and the cause of each downtime occurrence will be included in the report.

#### Expected Outcome(s)

It is expected that all documentation will maintain an uptime rate (numerator: total time available, denominator: total monitoring period) greater than 99.9%. Any downtime is expected to be caused by minor errors, such as connection timeouts or planned maintenance, and last for a duration of 10 minutes or less.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 23: CCDA Content

#### Description

This measure will verify that CCDAs generated in webchart systems have all USCDI data and other required data.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party">§170.315(e)(1) View, download, and transmit to 3rd party</a></td>
<td>(e)(1)(i)(A)(1) - (e)(1)(i)(A)(7)</td>
</tr>
</table>

#### Justification

WebChart EHR should generate CCDAs that can generate the sections required by USCDI.

#### Test Methodology

Weekly automated tests will select a random sample of patient CCDAs from specific live systems and test for the presence of required sections in each document. The USCDI measure rate will be calculated for each tracked document as the number of required sections present (numerator) divided by the total number of required sections applicable to that document (denominator).

#### Expected Outcome(s)

All CCDAs tested should include all required sections, if applicable. The expected USCDI measure rate (numerator: required sections present, denominator: required sections applicable) is 99% conformance.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 24: Record and Change Care Plan

#### Description

This measure will track that users can create and change care plan data.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/care-plan#cures_tp">§170.315(b)(9):  Care plan</a></td>
<td>Record, Change and Access</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to provide a way to enter and update Care Plan data.

#### Test Methodology

We will report on the following data elements being created or edited in patient charts:

* Goals
* Health concerns
* Health status evaluations and outcomes
* Interventions

#### Expected Outcome(s)

We expect to see user engagement in editing care plan data.  This is not a "rate" measurement.  We hope to see increasing usage as the year progresses.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 25: Create Care Plan CCDA Documents

#### Description

This measure will track that users can create Care Plan CCDA Documents.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/care-plan#cures_tp">§170.315(b)(9):  Care plan</a></td>
<td>Requirement from matrix</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to generate Care Plan CCDA Documents.

#### Test Methodology

We will report the number of encounters with Care Plan information and the number of Care Plan CCDAs generated. The Care Plan CCDA generation rate will be calculated as the number of Care Plan CCDAs generated (numerator) divided by the number of encounters with Care Plan data (denominator).

#### Expected Outcome(s)

The Care Plan CCDA generation rate (numerator: Care Plan CCDAs generated, denominator: encounters with Care Plan data) should be 100%. Any issues will be reported, including whether they were due to technical coding issues or system setup issues preventing creation.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 26: Receive Care Plan CCDA Documents

#### Description

This measure will track that the system can receive Care Plan CCDA Documents.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/care-plan#cures_tp">§170.315(b)(9):  Care plan</a></td>
<td>Requirement from matrix</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to receive Care Plan CCDA Documents.

#### Test Methodology

We will report the number of Care Plan CCDAs received from outside sources. The Care Plan CCDA success rate will be calculated as the number of Care Plan CCDAs that pass validation (numerator) divided by the total number of Care Plan CCDAs received (denominator). Pass and fail counts will be tracked and reported.

#### Expected Outcome(s)

The number of Care Plan CCDAs received into systems may be low. MIE may produce test Care Plans to send into test systems to validate this functionality. The success rate (numerator: Care Plan CCDAs passing validation, denominator: Care Plan CCDAs received) will depend on the quality of CCDAs sent by external systems, which is outside of MIE's control.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 27: Create CCDA Documents with Security Tags

#### Description

This measure will track that the system can create CCDA Documents with valid security tags.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/data-segmentation-privacy-send#cures_tp">§170.315(b)(7): Security tags - summary of care - send</a></td>
<td>(b)(7)</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to generate CCDA Documents with valid security tags.

#### Test Methodology

Automated tests will run at least weekly to verify that the software continues to generate CCDAs with Security Tags. If usage of security tagging is detected within Production systems, the security tag generation rate will be calculated as the number of CCDAs with security tags generated during the RWT period (numerator) divided by the total number of CCDAs generated during the RWT period (denominator). Both the total number of CCDAs generated and the number with security tags will be reported.

#### Expected Outcome(s)

The software is expected to consistently generate CCDA documents with Security Tags. Based on industry discussions, usage of DS4P within documents created by systems is currently minimal to nonexistent, and client usage of security tags in generated CCDA documents is not anticipated in 2026. If this changes, testing and reporting will be updated to track the security tag generation rate (numerator: CCDAs with security tags, denominator: CCDAs generated) as described above.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 28: Receive and Display CCDA Documents with Security Tags

#### Description

This measure will track that the system can receive CCDA Documents with security tags and properly display them to end users.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/data-segmentation-privacy-receive#cures_tp">§170.315(b)(8): Security tags - summary of care - receive</a></td>
<td>(b)(8)(i) and (ii)</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to receive CCDA Documents with security tags and properly display them to end users.

#### Test Methodology

Automated tests will run at least weekly to verify that the software continues to receive and display CCDAs with Security Tags. If usage of security tagging is detected within Production systems, the security tag receipt rate will be calculated as the number of CCDAs with security tags received during the RWT period (numerator) divided by the total number of CCDAs received during the RWT period (denominator). Both the total number of CCDAs received and the number with security tags will be reported.

#### Expected Outcome(s)

The software is expected to consistently display CCDA documents with Security Tags. Based on industry discussions, usage of DS4P within documents created by systems is currently minimal to nonexistent, and security tags in received CCDA documents are not anticipated for clients in 2026. If this changes, testing and reporting will be updated to track the security tag receipt rate (numerator: CCDAs with security tags received, denominator: CCDAs received) as described above.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 29: FHIR Sandbox Testing

#### Description

This measure will use the Inferno Test suite to validate all types of secure connections and search operations supported by the FHIR API within a publicly available production sandbox system.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure">§170.315(g)(10): Standardized API for patient and population services</a></td>
<td>(g)(10)(i) - Data response: USCDI v1 + US Core STU v3.1.1</td>
</tr>
<tr>
<td>(g)(10)(ii) - Supported search operations</td>
</tr>
<tr>
<td>(g)(10)(iii) - Application registration</td>
</tr>
<tr>
<td>(g)(10)(iv) - Secure connection</td>
</tr>
<tr>
<td>(g)(10)(v)(A) - Authentication and authorization for patient and user scopes: SMART 1.0.0</td>
</tr>
<tr>
<td>(g)(10)(v)(B) - Authentication and authorization for system scopes</td>
</tr>
<tr>
<td>(g)(10)(vi) - Patient authorization revocation</td>
</tr>
</table>

#### Justification

WebChart EHR's FHIR API is still newly available to clients and has no adoption as of writing this plan.  Therefore to cover testing prior to live clients actively using the API, a publicly available production sandbox will be tested using Inferno.  FHIR adoption is expected to be slow, but increasing, throughout 2025 leading to improved app support in WebChart EHR as well as increased real world data being available, at which time, Measures 30 and 31 will provide a more complete view of the production FHIR capabilities.

#### Test Methodology

MIE will run nightly automated testing on the public FHIR R4 sandbox system using Inferno. Using log files stored in a QA database, MIE will report the test suite success rate as the number of successful (g)(10) test suite runs (numerator) divided by the total number of nightly test suite runs (denominator). Any errors will be tracked, reported, and addressed.

#### Expected Outcome(s)

It is expected that test failures will be rare, with the automated tests passing successfully in at least 95% of nightly runs (numerator: successful test suite runs, denominator: total nightly runs). Any failures are expected to be due to issues in the testing infrastructure rather than in the functionality of the API.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 30: FHIR Patient Scope

#### Description

This measure will review WebChart EHR's ability to connect to an app within a patient scope and provide the user with the requested data.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure">§170.315(g)(10): Standardized API for patient and population services</a></td>
<td>(g)(10)(i) - Data response: USCDI v1 + US Core STU v3.1.1</td>
</tr>
<tr>
<td>(g)(10)(ii) - Supported search operations</td>
</tr>
<tr>
<td>(g)(10)(iii) - Application registration</td>
</tr>
<tr>
<td>(g)(10)(iv) - Secure connection</td>
</tr>
<tr>
<td>(g)(10)(v)(A) - Authentication and authorization for patient and user scopes: SMART 1.0.0</td>
</tr>
<tr>
<td>(g)(10)(vi) - Patient authorization revocation</td>
</tr>
</table>

#### Justification

FHIR adoption is expected to be slow, but increasing, throughout 2026 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a patient app recommended to our clients.  As clients continue adoption of the FHIR API, real patient use of the patient app will be reported.
#### Test Methodology

MIE will analyze de-identified log files to assess authentication and data searches using a patient app. In the sandbox system, specific rates will be reported based on automated testing, which will indicate which actions should yield successful authentication or data return. For real-world patient data, an overall analysis will be reported, acknowledging that some failures are expected due to appropriate access denials. The FHIR message creation success rate will be calculated as the number of successful FHIR message creations (numerator) divided by the total number of FHIR message creation attempts (denominator).

#### Expected Outcome(s)

It is expected that WebChart EHR will be conformant to all (g)(10) requirements and that overall error rates will be low (under 1%).

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 31: FHIR EHR Provider Scope

#### Description

This measure will review WebChart EHR's ability to connect to an app within an EHR provider scope and provide the user with the requested data.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure">§170.315(g)(10): Standardized API for patient and population services</a></td>
<td>(g)(10)(i) - Data response: USCDI v1 + US Core STU v3.1.1</td>
</tr>
<tr>
<td>(g)(10)(ii) - Supported search operations</td>
</tr>
<tr>
<td>(g)(10)(iii) - Application registration</td>
</tr>
<tr>
<td>(g)(10)(iv) - Secure connection</td>
</tr>
<tr>
<td>(g)(10)(v)(B) - Authentication and authorization for system scopes</td>
</tr>
</table>
#### Justification

WebChart EHR's FHIR API is still newly available to clients, and has no adoption as of writing this plan.  FHIR adoption is expected to be slow, but increasing, throughout 2025 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a provider app recommended to our clients.  As clients continue adoption of the FHIR API, real provider use of the provider app will be reported.

#### Test Methodology

MIE will analyze de-identified log files to assess authentication and data searches using a provider app. In the sandbox system, specific rates will be reported based on automated testing, which will indicate which actions should yield successful authentication or data return. For real-world provider data, an overall analysis will be reported, recognizing that some failures are expected due to appropriate access denials. The FHIR message creation success rate will be calculated as the number of successful FHIR message creations (numerator) divided by the total number of FHIR message creation attempts (denominator).

#### Expected Outcome(s)

It is expected that WebChart EHR will be conformant to all (g)(10) requirements and that the overall error rate (numerator: failed FHIR message creations, denominator: total FHIR message creation attempts) will be low, under 1%.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large
### Measure 32: Transmission to public health agencies — syndromic surveillance: Create content

#### Description

This measure will validate that Webchart EHR can produce valid HL7 v2 ADT messages, conforming to HL7 V2.5.1 PHIN Messaging Guide Release 2.0 and associated Erratum, per a patient's admission and discharge of care, as well as new registration or demographic updates.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transmission-public-health-agencies-syndromic-surveillance#test_procedure">§170.315(f)(2): Transmission to public health agencies — syndromic surveillance</a></td>
<td>(f)(2) - Create content</td>
</tr>
</table>

#### Justification

WebChart EHR per certification requirements must be able to produce HL7 v2 ADT messages for specific patients. It is appropriate to distinguish between ambulatory settings and emergency department, urgent care and inpatient settings.

#### Test Methodology

Automated tests will perform scenarios to register a patient, admit them for both ambulatory and urgent care, make demographic updates, and discharge them. These tests validate that the HL7 interface constructs valid ADT messages conforming to certification specifications. RWT in WebChart EHR will include creating three separate Refer to Systems endpoints with interface-specific configuration and three separate Auto Routes to capture new registrations, demographic updates, admissions, and discharges. When using WebChart EHR to register a patient, update demographics, admit, or discharge, the system will automatically produce HL7 messages and send them to the configured endpoint in the HL7 format required by the NIST validation tool for acceptance by the public health agency. The HL7 message success rate will be calculated as the number of successful HL7 messages generated and accepted (numerator) divided by the total number of HL7 message generation attempts (denominator).

#### Expected Outcome(s)

It is expected that test failures will be rare, with automated tests passing successfully in at least 95% of nightly runs (numerator: successful HL7 messages, denominator: total HL7 message attempts). Any failures are expected to be due to issues in the testing infrastructure rather than the functionality of the API. In the case of reported WebChart application errors, issues will be tracked and resolved. In the case of public health agency internal errors, the public health agency will be notified of the issue.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 33: eCR Reporting

#### Description

Public health case reporting is required by law in every state and territory. eCR is the automated generation and transmission of case reports that originate from a Healthcare Organization's Electronic Health Record (EHR) system and are sent to state and local public health agencies (PHAs) for review and action.  This measure tests how many eCRs were created based on trigger codes during the period in specific systems.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/transmission-public-health-agencies-electronic-case-reporting#test_procedure">§170.315(f)(5): Transmission to public health agencies — electronic case reporting</a></td>
<td>(f)(5)(i) - Consume trigger codes</td>
</tr>
<tr>
<td>(f)(2)(ii) - Match encounter to trigger codes</td>
</tr>
<tr>
<td>(f)(2)(iii) - Create case report</td>
</tr>
</table>

#### Justification

When a system is configured to report electronic case reports to the appropriate public health agencies for their jurisdiction, we need to verify that eCR CCDAs are being generated based on the consumed trigger codes.  An eCR CCDA should be automatically generated, stored in the patient's chart, and transmitted via Direct to the configured PHA.

#### Test Methodology

The number of eCR documents generated in configured systems will be tracked throughout the year using database queries, which can be filtered by date to report on various trends. Additionally, database queries will be used to report which codes trigger eCR generation. The eCR generation success rate will be calculated as the number of successfully generated eCR documents (numerator) divided by the total number of eCR generation attempts (denominator).

#### Expected Outcome(s)

Failures should be rare, with a success rate (numerator: successfully generated eCR documents, denominator: total eCR generation attempts) of at least 99% expected when systems are properly configured.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 34: EHI Export Documentation

#### Description

EHI export documentation including the specifications of the export format should remain accurate and available at all times to users authorized to perform exports.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/electronic-health-information-export#ccg">§170.315(b)(10): Electronic Health Information export</a></td>
<td>(b)(10)(iii) - Documentation</td>
</tr>
</table>

#### Justification

EHI export is designed to export the designated record set for a single patient or patient population.  Regular code changes are pushed to clients every 2 weeks.  These changes will be reviewed during each 2 week cycle and documentation will be updated if any code change would introduce a change to the designated record set, export process, or export format.  All documentation will be reviewed for accuracy on a quarterly basis.

#### Test Methodology

During a standing bi-weekly code review meeting, code changes will be reviewed to determine if any modifications to the EHI export documentation are required. Independent of the software lifecycle, overall documentation reviews will also be conducted quarterly. The documentation modification rate will be calculated as the number of documentation modifications made (numerator) divided by the total number of documentation reviews conducted (denominator). Any required modifications to documentation will be made within 2 weeks of the code change and before the code change is pushed to live client systems.

#### Expected Outcome(s)

It is expected that the rate of updates to the EHI documentation (numerator: documentation modifications, denominator: documentation reviews) will be low; however, all updates will be made promptly prior to any live EHI functionality changes in client systems.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 35: Source Attributes and IRM Summary View

#### Description

Source Attribute documentation and Intervention Risk Management Summary information should remain current, accurate, and available to users at all times.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/decision-support-interventions">§ 170.315(b)(11) Decision Support Interventions</a></td>
<td>(b)(11)(iv) - Source attributes (categories)</td>
</tr>
<tr>
<td>(b)(11)(v) - Source attribute access and modification</td>
</tr>
<tr>
<td>(b)(11)(vi) - Intervention Risk management</td>
</tr>
</table>

#### Justification

Source Attribute documentation and Intervention Risk Management Summary information should remain current, accurate, and available for users to view at all times.

#### Test Methodology

An external uptime monitor will check the availability of all documentation available at https://ozwell.ai/2025/01/30/introduction-to-bluehive-healths-irm-practices/ and https://ozwell.ai/2025/05/27/ozwell-pdsi-source-attributes/. The uptime rate will be calculated as the total time the documentation is available (numerator) divided by the total monitoring period (denominator). The downtime rate will be calculated as the total time the documentation is unavailable (numerator) divided by the total monitoring period (denominator). Both up- and downtime rates, along with the cause and duration of any downtime, will be logged and reported quarterly. In the event of downtime, the downtime rate can also be reported at daily, weekly, or monthly intervals, and the cause of each downtime occurrence will be included in the report.

#### Expected Outcome(s)

It is expected that all documentation will maintain an uptime rate (numerator: total time available, denominator: total monitoring period) greater than 99.9%. Any downtime is expected to be caused by minor errors, such as connection timeouts or planned maintenance, and last for a duration of 10 minutes or less.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 36: Source Attribute Modify

#### Description

A select group of authorized users should be able to modify and create source attribute information.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/decision-support-interventions">§ 170.315(b)(11) Decision Support Interventions</a></td>
<td>(b)(11)(v) - Source attribute access and modification</td>
</tr>
</table>

#### Justification

A select group of authorized users should be able to modify and create source attribute information.

#### Test Methodology

#### Expected Outcome(s)

It is expected to be a rare occurrence that WebChart EHR users will create new source attributes or modify existing content; however, any attempts should be successful >95% of the time as determined by log files and user feedback.

#### Care Setting(s)

Primary care, specialties, pediatrics, small, large

### Measure 37: Ozwell AI Integration and Access Test

#### Description

Users must be able to select and use Ozwell from within WebChart EHR (WC). Access to Ozwell must be limited to select users based on security role or individual security exception, and users must be able to provide feedback to developers directly from within Ozwell.

#### Associated Certification Criteria

<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td><a href="https://www.healthit.gov/test-method/decision-support-interventions">§ 170.315(b)(11) Decision Support Interventions</a><br />
<br />
<a href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315">https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-C/section-170.315</a></td>
<td>(b)(11)(i)<br />
(b)(11)(ii)<br />
(b)(11)(iii)</td>
</tr>
</table>

#### Justification

Ozwell AI is integrated into WC as an optional feature and is accessible via the AI icon in the header bar on every page. Access is controlled by user security role or individual security exceptions. Only users with the appropriate permissions are presented with the AI icon; users without access do not see the icon and therefore cannot access Ozwell. Users can provide feedback to developers through the "Report Session" link at the top of the Ozwell session page or by creating a support ticket from the menu. These mechanisms ensure only authorized users can access Ozwell and that user feedback is efficiently routed to developers.

#### Test Methodology

Testing will be conducted as follows:

* A user with appropriate security permissions will log in to WC and confirm the presence of the AI icon in the header bar, then access Ozwell.
* A user without the required permissions will log in to WC and confirm the absence of the AI icon, ensuring Ozwell is not accessible.
* A user will submit feedback using both the "Report Session" link and the support ticket option to verify feedback mechanisms are functional and feedback is received by developers.

The access success rate will be calculated as the number of successful access attempts by authorized users (numerator) divided by the total number of access attempts by authorized users (denominator). The unauthorized access prevention rate will be calculated as the number of unsuccessful access attempts by unauthorized users (numerator) divided by the total number of access attempts by unauthorized users (denominator). The feedback submission success rate will be calculated as the number of successful feedback submissions (numerator) divided by the total number of feedback submission attempts (denominator). All rates and counts will be tracked and reviewed.

#### Expected Outcome(s)

Only users with the appropriate security role or exception (numerator: successful authorized accesses, denominator: total authorized access attempts) are presented with the AI icon and can access Ozwell from within WC. Users without access (numerator: unsuccessful unauthorized access attempts, denominator: total unauthorized access attempts) do not see the AI icon and cannot access Ozwell. Users are able to provide feedback to developers using the available in-app mechanisms (numerator: successful feedback submissions, denominator: total feedback submission attempts).

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
<td>October 31, 2025</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>January 1, 2026</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2026</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2026</td>
</tr>
<tr>
<td>Additional CQM or criteria certification as determined by the developer</td>
<td>All settings</td>
<td>Q3, 2026</td>
</tr>
<tr>
<td>Update standards via SVAP as determined by the developer</td>
<td>All settings</td>
<td>Q3, 2026</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>December 31, 2026</td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2027</td>
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
<td>Pleasant Sarha Huq</td>
</tr>
<tr>
<td><strong>Authorized Representative Email</strong></td>
<td>shuq@mieweb.com</td>
</tr>
<tr>
<td><strong>Authorized Representative Phone</strong></td>
<td>2606689601</td>
</tr>
<tr>
<td><strong>Authorized Representative Signature</strong></td>
<td><img src="./real-world-testing-plan-2026.assets/bb103740741f74a0e6d7d5f01ed99d7c.png" /></td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>11/14/2025</td>
</tr>
</table>
