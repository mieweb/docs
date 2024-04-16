---
id: '1HH51yWDkXoPUk0RatGef0PoNQzQU1HMPsbgxJroHGIk'
title: 'RWT Results 2023 Q1Q2'
date: '2024-01-23T14:51:54.801Z'
version: 300
lastAuthor: 'dcornewell'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/'
  - 'https://www.healthit.gov/test-method/transitions-care#cures_tp'
  - 'https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation#cures_tp'
  - 'https://www.healthit.gov/test-method/electronic-prescribing#cures_tp'
  - 'https://www.healthit.gov/test-method/data-export'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-send#cures_tp'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-receive#cures_tp'
  - 'https://www.healthit.gov/test-method/care-plan#cures_tp'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate#test_procedure'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report#test_procedure'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party#cures_tp'
  - 'https://www.healthit.gov/test-method/transmission-immunization-registries#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-patient-selection#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure'
  - 'https://www.healthit.gov/test-method/application-access-all-data-request#cures_tp'
  - 'https://www.healthit.gov/test-method/standardized-api-patient-and-population-services#test_procedure'
  - 'https://www.healthit.gov/test-method/direct-project#test_procedure'
  - 'https://www.healthit.gov/topic/standards-version-advancement-process-svap'
  - 'https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2020-CMS-IG-v1.1-508.pdf'
  - 'https://ecqi.healthit.gov/sites/default/files/2020-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-v1.2.1-508.pdf'
  - 'https://www.w3.org/WAI/WCAG2-Conformance#level-AA'
  - 'https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0'
  - 'https://github.com/mieweb/wcexport'
  - 'https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party'
  - 'https://fhir.org/implementations/registry/'
source: 'https://drive.google.com/open?id=1HH51yWDkXoPUk0RatGef0PoNQzQU1HMPsbgxJroHGIk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
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
<td><strong>0015E8UJ8KHX8QL</strong></td>
</tr>
<tr>
<td><strong>Developer Real World Testing Page URL</strong></td>
<td><a href="https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/">https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/</a></td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>11/01/2022</td>
</tr>
<tr>
<td><strong>Results Version</strong></td>
<td>Q1Q2, completed 08/XX/2023</td>
</tr>
</table>

## Certification Criteria to be Tested

* Care Coordination
    * § 170.315(b)(1) Transitions of care (Cures Update)
    * § 170.315(b)(2) Clinical information reconciliation and incorporation (Cures Update)
    * § 170.315(b)(3) Electronic prescribing (Cures Update)
    * § 170.315(b)(6) Data export
    * § 170.315(b)(7) Security tags - summary of care - send (Cures Update)
    * § 170.315(b)(8) Security tags - summary of care - receive (Cures Update)
    * § 170.315(b)(9) Care plan (Cures Update)
* Clinical Quality Measures
    * § 170.315(c)(1)—record and export
    * § 170.315(c)(2)—import and calculate
    * § 170.315(c)(3)—report (Cures Update)
* Patient Engagement
    * § 170.315(e)(1) View, download, and transmit to 3rd party (Cures Update)
* Public Health
    * § 170.315(f)(1) Transmission to immunization registries
* Application Programming Interfaces
    * § 170.315(g)(7) Application access— patient selection
    * § 170.315(g)(8) Application access— data category request
    * § 170.315(g)(9) Application access— all data request (Cures Update)
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
<td><a href="https://www.healthit.gov/test-method/data-export">§170.315(b)(6): Data Export</a></td>
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
<td><a href="https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure">§170.315(g)(8): Application access – data category request</a></td>
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

## Standards Updates ([SVAP](https://www.healthit.gov/topic/standards-version-advancement-process-svap) and USCDI)

All certified criteria in WebChart EHR use the current standard or implementation specification version, and will continue conformance to that version throughout the 2023 Real World Testing period unless stated in the table below. Key current versions include the following:

* [](https://ecqi.healthit.gov/sites/default/files/QRDA-HQR-2020-CMS-IG-v1.1-508.pdf)
* [](https://ecqi.healthit.gov/sites/default/files/2020-CMS-QRDA-III-Eligible-Clinicians-and-EP-IG-v1.2.1-508.pdf)
* [](https://www.w3.org/WAI/WCAG2-Conformance#level-AA)
* HL7® CDA R2 Implementation Guide: C-CDA Templates for Clinical Notes R2.1 Companion Guide, Release 2-US Realm, October 2019
* United States Core Data for Interoperability (USCDI), Version 1, July 2020 Errata
* HL7® FHIR® US Core Implementation Guide STU 3.1.1, August 8, 2020
* HL7® FHIR® SMART Application Launch Framework Implementation Guide Release 1.0.0, November 13, 2018
* HL7® FHIR® Bulk Data Access (Flat FHIR®) (v1.0.0: STU 1), August 22, 2019

### WCAG SVAP - Planned

<table>
<tr>
<td><strong>Standard and version</strong></td>
<td>Web Content Accessibility Guidelines (WCAG) 2.1, June 05, 2018 (Available 3/12/2021)</td>
</tr>
<tr>
<td><strong>Updated certification criteria</strong></td>
<td>§170.315(e)(1): View, download, and transmit to 3rd party</td>
</tr>
<tr>
<td><strong>Associated product</strong></td>
<td>WebChart EHR v8.4</td>
</tr>
<tr>
<td><strong>Health IT Module CHPL ID</strong></td>
<td><strong>0015E8UJ8KHX8QL</strong></td>
</tr>
<tr>
<td><strong>Method used for standard update</strong></td>
<td>SVAP</td>
</tr>
<tr>
<td><strong>Date of ONC ACB notification</strong></td>
<td>TBD 2023, through quarterly attestation</td>
</tr>
<tr>
<td><strong>Date of customer notification (SVAP only)</strong></td>
<td>TBD 2023</td>
</tr>
</table>

### USCDI SVAP - Planned

<table>
<tr>
<td><strong>Updated product</strong></td>
<td>WebChart EHR v8.4</td>
</tr>
<tr>
<td><strong>Health IT Module CHPL ID</strong></td>
<td><strong>0015E8UJ8KHX8QL</strong></td>
</tr>
<tr>
<td><strong>Method used for standard update</strong></td>
<td>Cures Update Attestation and ONC ACB testing</td>
</tr>
<tr>
<td><strong>Date of ONC ACB notification</strong></td>
<td>10/26/2022</td>
</tr>
<tr>
<td><strong>USCDI updated certification criteria (and USCDI version)</strong></td>
<td><ul><li>Transitions of Care §170.315(b)(1) USCDI v1</li><li>Clinical information reconciliation and incorporation §170.315(b)(2) USCDI v1</li><li>Care plan §170.315(b)(9) USCDI v1</li><li>View, download, and transmit to 3rd party §170.315(e)(1) USCDI v1</li><li>Consolidated CDA creation performance §170.315(g)(6) USCDI v1</li><li>Application access - all data request §170.315(g)(9) USCDI v1</li></ul></td>
</tr>
<tr>
<td><strong>Planned SVAP version</strong></td>
<td>USCDI v2</td>
</tr>
<tr>
<td><strong>Planned SVAP date</strong></td>
<td>TBD 2023</td>
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
<td><a href="https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export#test_procedure">§170.315(c)(1): CQMs – record and export</a></td>
<td>(c )(1)(i) - Record</td>
</tr>
<tr>
<td></td>
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

#### Results

#### Discussion

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

MIE will install an instance of Cypress 7+ on our production servers following all of our protocols for maintaining the security of PHI.  Automated testing will download QRDA I files from Cypress for each certified CQM, import the files to WebChart EHR, calculate the CQMs, and export the QRDA files for Cypress validation of both the content and calculations to verify that the import was successful.  Any errors identified by Cypress will be tracked, reported, and addressed.

#### Results

#### Discussion

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

The report will also include a count of outbound messages unable to be transmitted due to connectivity issues or other errors, for each message type. This report will be based on the contents of each client's local database table of stored messages. MIE will run the report for each client under consideration and aggregate the results.

#### Results

#### Discussion

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

MIE will report the contents of each stored message in a client's local database table of stored messages, and counts the inbound and outbound messages that include Diagnosis elements. MIE will run the report for each client under consideration and aggregate the results.

#### Results

#### Discussion

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

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, limiting to oral liquid medications, and provides a count of each distinct quantity unit of measure used. MIE will run the report for each client under consideration and aggregate the results.

#### Results

#### Discussion

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

MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, and provides a count of prescription messages that include inappropriate trailing zeros, and a count of those missing leading zeros. MIE will run the report for each client under consideration and aggregate the results.

#### Results

#### Discussion

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

MIE will report on the number of CDA formatted documents uploaded into tracked Webchart systems and the number of upload attempts that failed as stored in client databases and error log files.

MIE will report on the number of requests to view a CDA document within the system, and the number of times it displayed correctly, and when there were errors in display.  
Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  These test assumptions for customer reporting align with the "visual inspection" aspects of the test lab tests.

#### Results

System		Documents		Views

**TOTAL			61465			16738**

#### Discussion

We are showing creation and storage of CDA documents and ability to view documents on demand within the WebChart software.

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
<td><a href="https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure">§170.315(g)(8): Application access – data category request</a></td>
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

WebChart EHR should provide public access to all API documentation, implementation requirements, and terms of use as outlined in 170.315(g)(7), 170.315(g)(8), and 170.315(g)(9).  This documentation should be available at all times throughout the year.

#### Test Methodology

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html.  Both up- and downtime will be logged to be reported quarterly.  The cause of any downtime and the duration will also be logged   In the event of any downtime, the amount of downtime can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be reported.

#### Results

#### Discussion

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

Following each reconcile, if a temporary CDA for the chart is created as part of the process, it will be validated to ensure the reconciled data can be incorporated into a CDA created free of schematic errors (the CDA document will *NOT* be kept, only the result of the validation).  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported.

#### Results

CDA Documents:

CDA Documents - 324

CDA Documents Reconciled marked schematically Valid: 44

CDA Documents Reconciled marked schematically Invalid: 58

#### Discussion

The documents marked invalid were from a 3rd party interface sent into the system.   No issues with CDA data imports were reported.

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

MIE will report from the database the number of successfully sent VXU messages acknowledged as received by the state immunization registry. MIE will also report from the database on the number of records rejected by the state registry due to error, whether the failure was due to registry internal errors, clinical data entry issues or a not well-formed message. Finally, MIE will report from the database the number of messages which declined to be generated due to data entry issues failing message pre-validation.

#### Results

Successful: 1677

Failures: 3

Data Entry Validation Issue: 0

#### Discussion

All 3 of the Failures were related to user data entry. In two of the cases, the user entered an administration location which was then changed to an outside location. The outside location is not a valid reporting location, so errored. In the third error, the date of administration is prior to the birthdate of the patient and was rejected by the registry.

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

MIE will report the number of successful retrievals of evaluated history and forecasting operations from the database. MIE will report the number of failed retrievals, including those resulting from an internal error in the registry resulting in an inability to consume a response from the database. MIE will manually track, resolve and report issues resulting from WebChart EHR application errors as reported by end users.

#### Results

Successful: 12112

Failure: 198

#### Discussion

The failure rate is very low with most timestamps clustered around points in time. This is to be expected due to network, server or other technology related issues.

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

MIE will report from log files the number of messages transmitted. MIE will report from logs the number of messages which failed to be transmitted whether due to internal error, external failures or inability to verify trust of the recipient. MIE will report from logs the number of Processed MDN messages received. MIE will report from logs the number of Failed MDN messages received.

#### Results

Transmitted: 3

Failed: 0

Processed MDNs: 3

Failed MDNs: 0

#### Discussion

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

MIE will report from logs the number of messages transmitted to the HISP.  MIE will report from logs the number of messages failing to conform to Direct Project specifications.  MIE will report from logs the number of messages which are successfully delivered to recipients.

#### Results

Received: 244

Failed specifications: 0

Delivered messages: 244

#### Discussion

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

#### Results

There were 5 distinct views of CDA documents in Q1 & Q2 on a client system.

#### Discussion

This is currently a low amount of usage.  We plan on doing at least more forced testing of the functionality within live client systems in Q3 and Q4.

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

#### Results

There was 1 stream of  CDA documents in Q1 & Q2 on a client system.

#### Discussion

This is currently a low amount of usage.  We plan on doing at least more forced testing of the functionality within live client systems in Q3 and Q4.

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

#### Results

No exports of CDA documents were reported in Q1 & Q2 on a client system.

#### Discussion

We plan on doing at least more forced testing of the functionality within live client systems in Q3 and Q4.

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

MIE will report from logs the number of messages transmitted to the HISP by SMTP.  MIE will report from logs the number of messages received from the HISP by SMTP.  MIE will report from logs the number of XDM packages processed.  In the case where insufficient real-world data is available, data resulting from regular testing with DirectTrust shall be included in the reporting.

#### Results

Transmitted to HISP via SMTP: 244

Transmitted by HISP: 7

XDM packages processed: 124

#### Discussion

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
<td><a href="https://www.healthit.gov/test-method/data-export">§170.315(b)(6): Data Export</a></td>
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

#### Results

No usage occurred in Q1/Q2.

#### Discussion

A manual test is planned during Q3.

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
<tr>
<td><a href="https://www.healthit.gov/test-method/data-export">§170.315(b)(6): Data Export</a></td>
<td>(b)(6)(ii), (A)-(F)</td>
</tr>
</table>

#### Justification

Webchart EHR should be able to validate that CDAs that are stored within webchart either do or do not conform to basic CDA schema requirements.

#### Test Methodology

All CDAs stored within a Webchart EHR will be run through schema validation regardless of the document's origin.  Documents may originate within the WebChart EHR system or be imported from a third party application of manual upload.  The schema validator will be installed within the MIE production environment to ensure the security of all PHI contained in the documents.  Only results of the validation will be made available, document content will not be revealed to developers during testing.

The number of valid vs. invalid CDAs and their sources will be reported.

#### Results

**All Documents:**

Valid CDAs: 501

Invalid CDAs: 1308

#### Discussion

The bulk of these results are from 3rd party uploaded documents.  For the webchart generated documents, we are analyzing the reason for failure, and updating the script generation to account for those issues.

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
<td><a href="https://www.healthit.gov/test-method/application-access-data-category-request#test_procedure">§170.315(g)(8): Application access – data category request</a></td>
<td>(g)(8)(i)(A) - Return CCDS data</td>
</tr>
<tr>
<td>(g)(8)(i)(B) - Request response</td>
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

All API requests made in production systems are recorded in log files.  The number of requests logged will be reported against the number of issues with API functionality that are reported.

#### Results

<table>
<tr>
<td><strong>Production Exports</strong></td>
<td>3</td>
</tr>
<tr>
<td><strong>Total Charts Exported</strong></td>
<td>383463</td>
</tr>
<tr>
<td><strong>Total Export Errors</strong></td>
<td>0</td>
</tr>
</table>

#### Discussion

Two exports were CSV and one was PDF. The exports had a failure rate <1%. Those were of course addressed and data was delivered.

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

MIE will conduct monthly third-party production accessibility scanning as well as automated nightly internal accessibility scanning of a test system in a production environment.

#### Results

#### Discussion

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

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/ and the linked subpages.  Both up- and downtime will be logged to be reported quarterly.  The cause of any downtime and the duration will also be logged   In the event of any downtime, the amount of downtime can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be reported.

#### Results

#### Discussion

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

We will have weekly automated tests that will choose a certain number of random patient CCDAs in specific live systems and test for the given sections to exist in the documents.

#### Results

We haven't had any customer complaints about missing USCDI content in CCDA documents.

#### Discussion

In Q3/Q4 we should be adding checks to test charts in live systems to make sure all sections are listed.

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

#### Results

We witnessed the ability to enter CDA Care Plan information in the appropriate sections in a live system with proper configuration.

#### Discussion

Currently no live clients are using the Care Plan fields in their workflows.

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

We will report on the number of encounters with Care Plan information, and the number of Care Plan CCDAs generated.

#### Results

We witnessed the ability to generate a CDA Care Plan document based on  information in the appropriate sections of an encounter in a live system with proper configuration.

#### Discussion

Currently no live clients are generating Care Plan fields in their workflows.

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

We will report on:

    * the number of Care Plan CCDAs received from outside sources.
    * Pass or fail count on the Care Plan CCDAs received.

#### Results

0 Care Plan documents received

#### Discussion

Currently no clients are set up to receive Care Plan CCDA documents as part of their workflow.  In Q3/Q4 we will generate test documents.

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

We will have automated tests that run at minimum weekly to test that the software is still able to generate CCDAs with Security Tags.

If we determine that we are seeing usage of the security tagging within Production systems, we will report:

    * the number of CCDAs generated during the RWT period.
    * The number of CCDAs with security tags generated during the RWT period.

#### Results

We witnessed the ability to generate a CDA document based on information in the appropriate sections of an encounter in a live system with the security set on the encounter.

#### Discussion

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

We will have automated tests that run at minimum weekly to test that the software is still able to generate CCDAs with Security Tags.

From discussions with others around the industry who interact with large usage of CDA creation and transmission, there is little to no usage of DS4P within documents created by systems currently. If we determine that we are seeing usage of the security tagging within Production systems, we will report:

    * the number of CCDAs received during the RWT period.
    * The number of CCDAs with security tags received during the RWT period.

#### Results

We witnessed the ability to view a CDA document based on information in the appropriate sections of an encounter in a live system with the security set in the document, although not from ones sent into the system, although this distinction is likely of little merit.

#### Discussion

We will set up further tests to take an external document with security tags and see that they can be displayed.

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

WebChart EHR's FHIR API is still newly available to clients and has no adoption as of writing this plan.  Therefore to cover testing prior to live clients actively using the API, a publicly available production sandbox will be tested using Inferno.  FHIR adoption is expected to be slow, but increasing, throughout 2023 leading to improved app support in WebChart EHR as well as increased real world data being available, at which time, Measures 30 and 31 will provide a more complete view of the production FHIR capabilities.

#### Test Methodology

MIE will run nightly automated testing on the public FHIR R4 sandbox system using Inferno, and using log files stored in a QA database, MIE will report the success rate of the full (g)(10) test suite.  Any errors will be tracked, reported, and addressed.

#### Results

We've had multiple green tests for the Inferno test hitting the Sandbox in the first half of 2023.

#### Discussion

We are currently working on getting the FHIR G10 Sandbox running regularly and having the results in the certification tests section of the MIEGrid.  As part of that, we'll have past results saved for at least 1 year for audit/reporting purposes.

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

WebChart EHR's FHIR API is still newly available to clients, and has no adoption as of writing this plan.  FHIR adoption is expected to be slow, but increasing, throughout 2023 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a patient app recommended to our clients.  As clients continue adoption of the FHIR API, real patient use of the patient app will be reported.

#### Test Methodology

MIE will report from de-identified log files an analysis of authentication and data searches using a patient app.  Specific rates can be reported from the sandbox system as the automated testing setup will indicate what actions should yield successful authentication or data return.  An overall analysis will be reported for the real world patient data since we cannot estimate failures due to patients correctly being denied access.

#### Results

No systems have generated connections yet, other than successful Sandbox connections to our Inferno testing tool.

#### Discussion

We are in active discussions with the CommonHealth app (effectively "Apple Health" for Android) to get at first connectivity to our FHIR Sandbox, and then next step would be to get a live client (likely Maui) operational to have the option for portal members to use the app to obtain their health data.   We also have plans on getting Apple Health Kit connectivity in Q3 or Q4.

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

WebChart EHR's FHIR API is still newly available to clients, and has no adoption as of writing this plan.  FHIR adoption is expected to be slow, but increasing, throughout 2023 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a provider app recommended to our clients.  As clients continue adoption of the FHIR API, real provider use of the provider app will be reported.

#### Test Methodology

MIE will report from de-identified log files an analysis of authentication and data searches using a patient app.  Specific rates can be reported from the sandbox system as the automated testing setup will indicate what actions should yield successful authentication or data return.  An overall analysis will be reported for the real world provider data since we cannot estimate failures due to providers correctly being denied access.

#### Results

No systems have generated connections yet, other than successful Sandbox connections to our Inferno testing tool.

#### Discussion

We do not have a clear path on a specific app yet that would be suitable for the Provider scope.

Some apps that might be of interest in this list:  https://fhir.org/implementations/registry/

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
<td>November 1, 2022</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>January 1, 2023</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2023</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2023</td>
</tr>
<tr>
<td>New certification of b.10</td>
<td>All settings</td>
<td>Q3, 2023</td>
</tr>
<tr>
<td>Additional CQM or criteria certification as determined by the developer</td>
<td>All settings</td>
<td>Q3, 2023</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>December 31, 2023</td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2024</td>
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
<td>08/XX/2023</td>
</tr>
</table>
