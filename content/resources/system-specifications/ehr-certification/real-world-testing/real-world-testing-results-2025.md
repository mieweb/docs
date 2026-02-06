---
id: '1UstZ5I7jZD2YaWOuqEGCC82EY6D489KJw4yYQvJARo8'
title: 'Real World Testing Results 2025'
date: '2026-02-06T20:14:34.158Z'
version: 410
lastAuthor: 'nwelsh'
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
  - 'https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0'
  - 'https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/'
source: 'https://drive.google.com/open?id=1UstZ5I7jZD2YaWOuqEGCC82EY6D489KJw4yYQvJARo8'
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
<td><strong>2025CGJ1F3L7D47</strong><br />
<strong>15.04.04.1932.WebC.84.01.0.221117</strong></td>
</tr>
<tr>
<td><strong>Developer Real World Testing Page URL</strong></td>
<td><a href="https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/">https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/</a></td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>10/31/2024</td>
</tr>
<tr>
<td><strong>Results Version</strong></td>
<td>2025 Annual Results</td>
</tr>
<tr>
<td><strong>Results Submission Date</strong></td>
<td>02/06/2025</td>
</tr>
</table>

## Changes to the Original Plan

No changes were made to the 2025 plan.

## Certification Criteria to be Tested

* Care Coordination
    * § 170.315(b)(1) Transitions of care
    * § 170.315(b)(2) Clinical information reconciliation and incorporation
    * § 170.315(b)(3) Electronic prescribing
    * § 170.315(b)(7) Security tags - summary of care - send
    * § 170.315(b)(8) Security tags - summary of care - receive
    * § 170.315(b)(9) Care plan
    * § 170.315(b)(10) Electronic Health Information export
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

## Summary of Testing Methods and Key Findings

WebChart EHR is a cloud-based, fully-inclusive EHR solution.  All certified functionality is delivered in all instances of the product regardless of the care setting, size of practice, or required use cases for a given practice.  Each production client is maintained in a separate database; however, the implementation of the environment is identical with the exception of optional increased security protocols that a client may choose to add for enhanced data protection. Additionally, the only differences between the client-facing portion of each system are a result of configuration settings that can be selected at go-live or updated at any time during a client's contract.  Due to this philosophy of product delivery, all certified capabilities may not be actively used in all marketed care settings or may not be actively used in any current client production system.  To address the Real World Testing requirements, MIE will be using a hybrid approach.  Testing will primarily be conducted using de-identified real patient data from production systems as recorded in database tables and log files.  For those criteria for which this live production recording is not available or minimal due to lack of client usage, client reported issues will be tracked and reported in addition to enacting automated tests of the certified functionality in a test system in a production environment.  The automated tests will be run daily or weekly as appropriate in a system that is identical in substance and delivery to a client production system with the only exception being live real patient data.  This blended approach will allow MIE to prove ongoing maintenance of WebChart EHR's certified technology regardless of the level of implementation by current clients.

Throughout 2025, we generally found a reduction of errors and misuse of modules when compared to 2024.  The testing of e-Prescribing functionality, CCDA creation, data export, and documentation availability were particularly successful in production environments with real patient data.  Conversely, many of WebChart EHR's certified capabilities are still heavily underutilized by clients, especially use of the FHIR API, Direct Messaging, and special use of CDAs (care plan, security tags).  These APIs present challenges for real world testing since test patients and environments, despite mirroring production systems, do not truly represent the end-user interoperability experience.
## Measures Used in Overall Approach

The following measures outline and justify how each requirement of all criteria to which WebChart EHR is certified will be tested during the 2025 Real World Testing year.  Please review the Criteria-Measure Matrix above to review which measure(s) will cover a specific requirement.

### Measure 1: Clinical Quality Measures Outgoing

#### Description

This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress 7+ test system.

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

WebChart EHR should accommodate the full range of §170.315(c)(1), §170.315(c)(2), and §170.315(c)(3) to support providers participating in MIPS and other quality measures.  Most data supporting these measures for existing clients will come from data generated internally by their standard clinical workflows of seeing patients or incorporating the CCDA of transitioning patients.  Numerical compliance calculations and reporting will be monitored by MIE and the practices selected for testing.  The export and report QRDA formats will be validated by reporting partners and Cypress 7+ to ensure data collected and calculated in WebChart EHR remains interoperable.
#### Test Methodology

First, MIE will install an instance of Cypress 7+ on our production servers following all of our protocols for maintaining the security of PHI.  Cypress 7+ supports the validation of QRDA reports containing PHI and will be used monthly to validate a random selection of QRDAs from the care settings identified.  Any errors identified by Cypress 7+ will be tracked, reported, and addressed, then followed with testing of a larger sample of files.

Additionally, WebChart EHR has two customers that participate in quarterly attestations using both QRDA I and QRDA III reports.  These customers regularly inspect their CQM compliance numbers and will alert MIE to any perceived errors.  MIE will then collect and track the attestation results from the reporting bodies including any errors so as to report a success/failure rate.

#### Results

<table>
<tr>
<td></td>
<td><strong>Calculations</strong></td>
<td><strong>QRDA I</strong></td>
<td><strong>QRDA III</strong></td>
</tr>
<tr>
<td><strong>Client Reported Issues</strong></td>
<td>2</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td><strong>Submitted Files</strong></td>
<td>N/A</td>
<td>25998</td>
<td>3</td>
</tr>
<tr>
<td><strong>Submission Errors</strong></td>
<td>N/A</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td><strong>Tested Files</strong></td>
<td>N/A</td>
<td>4992</td>
<td>156</td>
</tr>
<tr>
<td><strong>Testing Errors</strong></td>
<td>N/A</td>
<td>0</td>
<td>0</td>
</tr>
</table>

#### Discussion

In 2025, we partnered with a new vendor for client QRDA I ingestion.  During the review, 5 minor issues in document coding format were discovered making the QRDA I files.  While these files were successfully tested in Cypress, the format was inconsistent with what the vendor's reconciliation program was expecting.   Corrections were made to the file format, and QRDA I files are successfully reconciled by the vendor while also passing Cypress testing.  Additionally, 2 errors were reported regarding client measure calculations.  In both cases, this was determined to be due to errors in the client workflow preventing their data from properly calculating.  This was corrected through client education.
### Measure 2: Clinical Quality Measures Incoming

#### Description

This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress 7+ test system.

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

<table>
<tr>
<td></td>
<td><strong>QRDA I</strong></td>
<td><strong>QRDA III</strong></td>
</tr>
<tr>
<td><strong>Tested Files</strong></td>
<td>4992</td>
<td>156</td>
</tr>
<tr>
<td><strong>Testing Errors</strong></td>
<td>0</td>
<td>0</td>
</tr>
</table>

#### Discussion

No errors were encountered while testing incoming QRDA I and QRDA III files with Cypress.

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

<table>
<tr>
<td><strong>Message Type</strong></td>
<td><strong>Client Message Counts</strong></td>
<td><strong>Total Count</strong></td>
</tr>
<tr>
<td>NewRx</td>
<td>2570</td>
<td>126523</td>
<td>70201</td>
<td>31814</td>
<td>10604</td>
<td>241712</td>
</tr>
<tr>
<td>RxChangeRequest</td>
<td>0</td>
<td>4286</td>
<td>5</td>
<td>926</td>
<td>42</td>
<td>5259</td>
</tr>
<tr>
<td>RxChangeResponse</td>
<td>0</td>
<td>5627</td>
<td>1</td>
<td>944</td>
<td>43</td>
<td>6615</td>
</tr>
<tr>
<td>CancelRx</td>
<td>0</td>
<td>179</td>
<td>113</td>
<td>0</td>
<td>1</td>
<td>293</td>
</tr>
<tr>
<td>CancelRxReponse</td>
<td>0</td>
<td>149</td>
<td>99</td>
<td>1</td>
<td>1</td>
<td>250</td>
</tr>
<tr>
<td>RxRenewalRequest</td>
<td>1077</td>
<td>50803</td>
<td>4218</td>
<td>6651</td>
<td>54</td>
<td>62803</td>
</tr>
<tr>
<td>RxRenewalResponse</td>
<td>667</td>
<td>50847</td>
<td>4181</td>
<td>6657</td>
<td>48</td>
<td>62400</td>
</tr>
<tr>
<td>RxFill</td>
<td>0</td>
<td>77</td>
<td>0</td>
<td>1882</td>
<td>344</td>
<td>2303</td>
</tr>
<tr>
<td>RxHistoryRequest</td>
<td>229</td>
<td>3</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>234</td>
</tr>
<tr>
<td>RxHistoryResponse</td>
<td>213</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>217</td>
</tr>
<tr>
<td>Status</td>
<td>6912</td>
<td>383349</td>
<td>135918</td>
<td>81251</td>
<td>19747</td>
<td>627177</td>
</tr>
<tr>
<td>Error</td>
<td>22</td>
<td>5290</td>
<td>208</td>
<td>257</td>
<td>109</td>
<td>5886</td>
</tr>
<tr>
<td>Verify</td>
<td>2443</td>
<td>144658</td>
<td>57331</td>
<td>32544</td>
<td>8716</td>
<td>245692</td>
</tr>
</table>

Total error rate: 5886 / 1,260,841 * 100 = 0.467%

#### Discussion

As expected, all supported message types have a greater than zero total message count, and the total number of messages far exceeds the number of errored messages with a total error rate of 0.467%.  This is a slight decrease in error rate from 0.487% in 2024 to 0.467% in 2025.  Additionally, the number of NewRx messages is significantly greater than the number of RxChangeResponse, CancelRx, and RxRenewalResponse messages.

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

<table>
<tr>
<td><strong>Total NewRx Messages</strong></td>
<td><strong>NewRx Messages with Diagnosis Included</strong></td>
</tr>
<tr>
<td>243699</td>
<td>147036</td>
</tr>
</table>

Total rate of diagnosis use: 147036 / 243699 * 100 = 60.34%

#### Discussion

Since the Diagnosis elements are not a required component of a NewRx message, as anticipated, only a subset (60.34%) of the NewRx messages included a diagnosis. The rate of NewRx messages with a diagnosis included increased from 59.2% in 2024 to 60.34% in 2025 showing an increasing rate of using the diagnosis element.  Most clients appear to heavily use the diagnosis element; however, two clients rarely included a diagnosis and therefore reduced the overall usage rate.  Additional client education will again be provided in 2026 to further increase usage.

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

<table>
<tr>
<td><strong>Unit Code</strong></td>
<td><strong>Unit Description</strong></td>
<td><strong>Quantity</strong></td>
</tr>
<tr>
<td>C28254</td>
<td>Milliliter (ml)</td>
<td>11991</td>
</tr>
<tr>
<td>C48155</td>
<td>Gram (g)</td>
<td>0</td>
</tr>
<tr>
<td>C48477</td>
<td>Bottle</td>
<td>0</td>
</tr>
<tr>
<td>C48480</td>
<td>Capsule</td>
<td>0</td>
</tr>
<tr>
<td>C48521</td>
<td>Packet</td>
<td>1</td>
</tr>
<tr>
<td>C48542</td>
<td>Tablet</td>
<td>5</td>
</tr>
<tr>
<td>C64933</td>
<td>Each</td>
<td>0</td>
</tr>
<tr>
<td>C48504</td>
<td>Kit</td>
<td>0</td>
</tr>
</table>

Total rate of incorrect units: 6 / 11997 * 100 = 0.05%

#### Discussion

As expected, C28254 (milliliters) is the most commonly sent unit of measure for oral liquid medications.  Non-C28254 units were only sent in 0.05% of oral liquid medication messages in 2025 which is a significant improvement over 0.24% of messages in 2024.

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

<table>
<tr>
<td><strong>Total NewRx Messages</strong></td>
<td><strong>NewRx Messages with Improper Decimal Format</strong></td>
</tr>
<tr>
<td>243699</td>
<td>2094</td>
</tr>
</table>

Total rate of improper decimals: 2094/ 243699 * 100 = 0.86%

#### Discussion

As expected, the number of NewRx messages sent with inappropriate trailing zeros, or missing leading zeros, occurs rarely in only 0.86% of messages; however, this is again an increase from previous years.  Both technical and training options will be investigated to reduce the incidence of improper decimal formats in 2026.

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

MIE will report on the number of CDA formatted documents uploaded into tracked Webchart systems and the number of upload attempts that failed as stored in client databases and error log files.  MIE will report on the number of requests to view a CDA document within the system, and the number of times it displayed correctly, and when there were errors in display.  
Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  These test assumptions for customer reporting align with the "visual inspection" aspects of the test lab tests.

#### Results

<table>
<tr>
<td><strong>Documents</strong></td>
<td><strong>Views</strong></td>
</tr>
<tr>
<td>106,716</td>
<td>40,515</td>
</tr>
</table>

#### Discussion

These numbers demonstrate the ability for WebChart EHR to generate and display with a stylesheet CCDA documents within the system.  While significantly more documents were uploaded into WebChart EHR than were viewed, all 40,515 document views that did occur were successful.  No errors were reported by clients.

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

An external uptime monitor will check the availability of all documentation available at https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html.  Both up- and downtime will be logged to be reported quarterly.  The cause of any downtime and the duration will also be logged   In the event of any downtime, the amount of downtime can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be reported.

#### Results

The MIE API documentation was available with a total uptime of 99.963% in 2025.

#### Discussion

As expected, the documentation maintained an uptime of greater than 99.9% at 99.963% for the year.  All reported downtime was due to connection timeouts which are monitored.  The appropriate alerts were acted upon to bring the documentation back up as quickly as possible.  Data regarding the usage of the API can be viewed in Measure 20.

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

MIE will report on the number of CDA formatted documents reconciled via our reconciliation process.  Following each reconciliation, if a temporary CDA for the chart is created as part of the process, it will be validated to ensure the reconciled data can be incorporated into a CDA created free of errors causing inability to incorporate.  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported.

#### Results

<table>
<tr>
<td><strong>Total Reconciled Documents</strong></td>
<td><strong>Valid</strong></td>
</tr>
<tr>
<td>5</td>
<td>5</td>
</tr>
</table>

#### Discussion

HTML output files and CCDA files single document was not made a priority by clients in 2025, so the number of CCDAs reconciled was low among live systems.

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

<table>
<tr>
<td><strong>Successful transmission to registry</strong></td>
<td>7494</td>
</tr>
<tr>
<td><strong>Rejected by the registry</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Declined to generate</strong></td>
<td>3</td>
</tr>
</table>

#### Discussion

Nearly all (99%) of VXU messages were generated and transmitted successfully to the registry. The 3 VXU messages that did not generate were caused by data entry issues by the end user.  The single rejected message was rejected by the registry due to invalid data entered by the end user.

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

<table>
<tr>
<td><strong>Successful retrievals</strong></td>
<td>11597</td>
</tr>
<tr>
<td><strong>Failed retrievals</strong></td>
<td>29550</td>
</tr>
</table>

#### Discussion

While there were a large number of failures early in the year, the final 2 months of the year yielded a 98% success rate.

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

<table>
<tr>
<td><strong>Messages Transmitted</strong></td>
<td>44286</td>
</tr>
<tr>
<td><strong>Failed to transmit</strong></td>
<td>131</td>
</tr>
<tr>
<td><strong>Failed MDNs received</strong></td>
<td>0</td>
</tr>
</table>

#### Discussion

Transmissions were largely successful with only a 0.3% failure rate. No transmitted messages were rejected by the recipient.

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

<table>
<tr>
<td><strong>Messages received by HISP</strong></td>
<td>2460</td>
</tr>
<tr>
<td><strong>Messages failing to conform</strong></td>
<td>460</td>
</tr>
<tr>
<td><strong>Messages successfully delivered</strong></td>
<td>2000</td>
</tr>
</table>

#### Discussion

Direct Project messages received by our HISP were successfully delivered to the recipients in 81% of cases.
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

163,284 document views were performed on 106,663 documents in the patient portals of tracked systems.

#### Discussion

The numbers shown demonstrate the ability for Webchart patient portal users to effectively view documents in their accounts.
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

7,527 document downloads were performed on 5,802 documents in the patient portals of tracked systems.

#### Discussion

The numbers shown demonstrate the ability for Webchart patient portal users to effectively download documents to their personal devices from their accounts.  Much like patient portal views, this demonstrates an increase in patient downloads of their data.

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

3 email sends were performed on 2 documents.

#### Discussion

Patient emailing from accounts is not nearly as active as viewing and downloading documents.
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

<table>
<tr>
<td><strong>Messages submitted to HISP via SMTP</strong></td>
<td>2000</td>
</tr>
<tr>
<td><strong>Number of XDM packages processed</strong></td>
<td>200</td>
</tr>
</table>

#### Discussion

The overall increase in Direct Project traffic this year led to a decline in the percentage of XDM packages processed, despite the absolute number of packages received remaining relatively stable. This indicates that a segment of our partner HISPs continues to consistently utilize XDM packages, even as newer partners have not adopted them.

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

When a user requests data to be exported, if the response fails, an automatic error message will be generated and stored in a searchable database.  Total number of attempts will be tracked based on activity logs in the EHR.  Additionally, an example patient will be tested nightly to make sure that all expected data is returned and new errors are not introduced.

#### Results

5,916 charts exported with CCDA tools.

#### Discussion

CDA Data export was used by one live client during the year to move EHR chart data from one Webchart install to another webchart install.  The mass export of CDA documents is a rarely used feature; however, as expected, all documents were successfully generated and successfully imported into the new system.
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

All CDAs stored within a Webchart EHR will be run through schema validation regardless of the document's origin.  Documents may originate within the WebChart EHR system or be imported from a third party application of manual upload.  The schema validator will be installed within the MIE production environment to ensure the security of all PHI contained in the documents.  Only results of the validation will be made available, document content will not be revealed to developers during testing.

The number of valid vs. invalid CDAs and their sources will be reported.

#### Results

<table>
<tr>
<td><strong>Tracked and validated CDAs</strong></td>
<td>937</td>
</tr>
<tr>
<td><strong>Valid documents</strong></td>
<td>256</td>
</tr>
<tr>
<td><strong>Invalid documents</strong></td>
<td>681</td>
</tr>
</table>

#### Discussion

The invalid documents were mostly due to issues in CCDAs from 3rd parties being validated and shown to have some XML causing errors in validation. 

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

All API requests made in production systems are recorded in log files.  The number of requests logged will be reported against the number of issues with API functionality that are reported.

#### Results

<table>
<tr>
<td><strong>Production Exports</strong></td>
<td>5</td>
</tr>
<tr>
<td><strong>Total Charts Exported</strong></td>
<td>481,258</td>
</tr>
<tr>
<td><strong>Total Export Errors</strong></td>
<td>0</td>
</tr>
</table>

#### Discussion

Five total production API exports occurred in 2025.  Three of these exports produced CSV files and two produced PDF files for patient charts. All exports had an initial failure rate of <1%. These initial export errors were rerun error-free and 100% of data was delivered as expected.

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

The internal accessibility scanning of a pre-production test system identified 0 urgent and 0 secondary non-conformance issues in 98.65% of nightly and ad-hoc scans throughout the year.  In the remaining 1.35% of scans only secondary issues were uncovered, all of which were eliminated prior to code changes reaching production systems.  Production accessibility scanning identified 0 urgent and 0 secondary non-conformance issues for the entire year.

#### Discussion

As expected no urgent non-conformance issues were identified in either live production or pre-production test systems.  In the rare occurrence that a secondary non-conformance issue was identified in testing, it was addressed and eliminated prior to reaching live production systems.  This incidence rate is congruent with that from 2024.

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

The MIE API documentation was available with a total uptime of 99.963% in 2025.

#### Discussion

As expected, the documentation maintained an uptime of greater than 99.9% at 99.963% for the year.  All reported downtime was due to connection timeouts which are monitored.  The appropriate alerts were acted upon to bring the documentation back up as quickly as possible.   During any down time the FHIR API documentation would not have been available, but no effect on end user requests for the information was reported.

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

We will test that CCDAs in specific live systems have the USCI data and sections existing in the documents.

#### Results

One set of USCDI data elements have been entered on testing charts in live WebChart EHR systems.  All tested CCDA documents contained all USCDI data elements.

Additionally, the CCDA documents viewed in participating WebChart EHR systems and all schematically valid reconciled CCDA documents were compared to the patients' charts.  In all cases, all USCDI data available in the chart was displayed in the documents; however, not all USCDI data elements were available in these charts to be included in the CCDAs.

#### Discussion

All testing completed with test patients in live systems was successful, demonstrating that all USCDI elements can be included in CCDAs.  All live patient data examined was also successful; however, not all patient charts contained all USCDI data elements.

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

The following is the number of records of each element in the live systems tested:
<table>
<tr>
<td><strong>Element</strong></td>
<td><strong>Number of Charts with Element Entered</strong></td>
</tr>
<tr>
<td>Care Plan Goals</td>
<td>2</td>
</tr>
<tr>
<td>Health Concerns</td>
<td>2</td>
</tr>
<tr>
<td>Health Status</td>
<td>2</td>
</tr>
<tr>
<td>Interventions</td>
<td>2</td>
</tr>
</table>

#### Discussion

Webchart demonstrated in live systems that Care Plan data can be collected during the calendar year for a care plan.  More education is needed with providers on using a care plan format in encounters and collecting data to the Care Plan document elements in 2026.

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

CCDA documents were generated on test patients within a live system. Additionally, 206 CCDA Care Plan documents were created for live patients; however, these documents did not include all four care plan sections.

<table>
<tr>
<td><strong>Element</strong></td>
<td><strong>Number of Test Charts with Element Entered</strong></td>
<td><strong>Number of Test CCDAs with Element Present</strong></td>
<td><strong>Total Successful Tests</strong></td>
</tr>
<tr>
<td>Care Plan Goals</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Health Concerns</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Health Status</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Interventions</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
</table>

#### Discussion

While we were able to demonstrate when all four sections of the Care Plan were completed that a valid Care Plan CCDA could be generated in live systems, current clients were not requesting workflows that put in place data entry to facilitate all of the sections completely.

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

2 CCDA documents with Care Plan information were imported to test patients in live WebChart EHR systems.  All CCDA documents with Care Plan information were viewable from the charts uploaded to in the live WebChart systems.

#### Discussion

Current client workflows do not include regularly receiving CCDA Care Plan documents. 

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

CDA documents were generated on test patients with security set on the encounter in live WebChart EHR systems.  2 documents with security tags were generated.  Both documents were reviewed and contained the appropriate security tags based on the encounter settings.  Additionally, the documents were confirmed as valid CCDAs.

#### Discussion

This functionality is not currently used by any workflows in Webchart EHR by customers, or requested to do so.

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

We will have automated tests that run at minimum weekly to test that the software is still able to receive and display generated CCDAs with Security Tags.

From discussions with others around the industry who interact with large usage of CDA creation and transmission, there is little to no usage of DS4P within documents created by systems currently. If we determine that we are seeing usage of the security tagging within Production systems, we will report:

    * the number of CCDAs received during the RWT period.
    * The number of CCDAs with security tags received during the RWT period.

#### Results

2 documents were imported into a live system to demonstrate the ability to receive a CCDA document with tags and display the security tag data in a stylesheet.

#### Discussion

This functionality is not currently used by any workflows in Webchart EHR, and no other providers of CCDA we encounter regularly send data with the flag.  There are no indications that the security tags will be broadly used within live workflows.

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

MIE will run weekly automated testing on the public FHIR R4 sandbox system using Inferno, and using log files stored in a QA database, MIE will report the success rate of the full (g)(10) test suite.  Any errors will be tracked, reported, and addressed.

#### Results

Testing of the FHIR Sandbox using Inferno was conducted to keep using FHIR.  17 fully successful tests were run in 2025.  Weekly tests that were not successful were due to internal issues with test server availability.  The FHIR Sandbox environment was always available, but the test system accessing it had unexpected unavailability impacting our ability to test the sandbox.

#### Discussion

When the test server was available for connection to the FHIR Sandbox, FHIR Inferno testing was successful. MIE plans to both continue with weekly testing in 2026 of FHIR 1.0 and then 2.0 capabilities once available.

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

WebChart EHR's FHIR API is still newly available to clients, and has no adoption as of writing this plan.  FHIR adoption is expected to be slow, but increasing, throughout 2024 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a patient app recommended to our clients.  As clients continue adoption of the FHIR API, real patient use of the patient app will be reported.

#### Test Methodology

MIE will report from de-identified log files an analysis of authentication and data searches using a patient app.  Specific rates can be reported from the sandbox system as the automated testing setup will indicate what actions should yield successful authentication or data return.  An overall analysis will be reported for the real world patient data since we cannot estimate failures due to patients correctly being denied access.

#### Results

In 2025, we had 1795 requests for data from 4 systems in the Patient Scope through FHIR via four different test apps.

#### Discussion

We did not have any client requests to implement Patient FHIR apps in 2025, and only had our regular testing elements in specific live systems to demonstrate FHIR connectivity.  6 of the 1795 requests were from a testing 3rd party late in the year vs our internal testing.

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

WebChart EHR's FHIR API is still newly available to clients, and has no adoption as of writing this plan.  FHIR adoption is expected to be slow, but increasing, throughout 2024 leading to improved app support in WebChart EHR as well as increased real world data being available.  Until that time when clients are actively using the FHIR API, MIE will conduct testing using a publicly available production sandbox system and a provider app recommended to our clients.  As clients continue adoption of the FHIR API, real provider use of the provider app will be reported.

#### Test Methodology

MIE will report from de-identified log files an analysis of authentication and data searches using a provider app.  Specific rates can be reported from the sandbox system as the automated testing setup will indicate what actions should yield successful authentication or data return.  An overall analysis will be reported for the real world provider data since we cannot estimate failures due to providers correctly being denied access.

#### Results

In 2025, we had 699 requests for data in the EHR Provider Scope from 2 systems through FHIR via two different test apps.

#### Discussion

We did not have any client requests to implement any Provider FHIR apps in 2025, and only had our regular testing elements in specific live systems to demonstrate FHIR connectivity.
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

We have automated tests that perform the scenarios to register a patient, admit them both for ambulatory and urgent care, make demographic updates, and discharge them. The automated tests validate that the HL7 interface constructs valid ADT messages that conform to the certification specification. RWT in Webchart EHR would include creating 3 separate Refer to Systems end points with interface specific configuration configured and 3 separate Auto Routes to capture the new registrations, demographic updates, admissions, and discharges.  When using Webchart EHR to register a patient, update demographics, admit, or discharge the system will automatically produce the HL7 messages and send them to the configured end point with the HL7 format that meets the requirements of the NIST validation tool to be accepted by the public health agency.
#### Results

<table>
<tr>
<td></td>
<td><strong>Test Messages Generated</strong></td>
<td><strong>Test Message Successes</strong></td>
</tr>
<tr>
<td><strong>Patient Admission</strong></td>
<td>251</td>
<td>251</td>
</tr>
<tr>
<td><strong>Discharge of care</strong></td>
<td>251</td>
<td>251</td>
</tr>
<tr>
<td><strong>New Registration</strong></td>
<td>251</td>
<td>251</td>
</tr>
<tr>
<td><strong>Demographic Updates</strong></td>
<td>251</td>
<td>251</td>
</tr>
</table>

#### Discussion

Automated ADT tests run nightly to generate each of the four HL7 message types.  As expected, these tests were successful in all cases.  Since there are no live clients actively participating in syndromic surveillance, we will focus on client education and adoption in 2026.

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

The number of eCR documents generated in configured systems will be tracked throughout the year using database queries which can be spliced by date to report various trends.  Again using database queries, we will report on which codes trigger the eCR generation.

#### Results

No live clients currently participate in eCR.  To test our capabilities, 2 eCR CCDAs were generated per quarter using Influenza and COVID-19 as the triggering codes.  These CCDAs were then run through a validator.  In all cases, the CCDAs were confirmed as valid eCR CCDAs.

#### Discussion

It is expected that, with evolving MIPS reporting requirements, as well as improving state PHA capabilities, client participation will increase in 2026.  This will allow us to collect data regarding the most common triggering codes, geographical and temporal trends, and any errors that may arise during eCR CCDA creation or transmission.

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

During a standing bi-weekly code review meeting, code changes will be reviewed to determine if any modifications of the EHI export documentation are required.  Reviews of the overall documentation, independent of the software lifecycle, will also be conducted on a quarterly basis.  The number of documentation reviews and modifications will be tracked.  Any required modifications to documentation will be made within 2 weeks of the code change and before the code change is pushed to live client systems.

#### Results

The code review meeting was held 22 times during 2025 after several were skipped due to holidays.  During these 22 meetings, no code changes were identified that required modifications to documentation.

#### Discussion

Documentation changes were expected to be rare in 2025 as we were not expecting to add new data fields throughout the year.  This is expected to increase in 2026 as WebChart EHR moves to support electronic prior authorization and other new functionality.
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
<td>October 31, 2024</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>January 1, 2025</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2025</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2025</td>
</tr>
<tr>
<td>Additional CQM or criteria certification as determined by the developer</td>
<td>All settings</td>
<td>Q4, 2025</td>
</tr>
<tr>
<td>Update standards via SVAP as determined by the developer</td>
<td>All settings</td>
<td>Q4, 2025</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>December 31, 2025</td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2026</td>
</tr>
<tr>
<td>Submission of Real World Testing Results to ACB</td>
<td>All settings</td>
<td>February 6, 2026</td>
</tr>
</table>

## Attestation

This Real World Testing plan is complete with all required elements, including measures that address all certification criteria and care settings. All information in this plan is up to date and fully addresses the health IT developer's Real World Testing requirements.

<table>
<tr>
<td><strong>Authorized Representative Name</strong></td>
<td>Nicole Welsh</td>
</tr>
<tr>
<td><strong>Authorized Representative Email</strong></td>
<td>nwelsh@mieweb.com</td>
</tr>
<tr>
<td><strong>Authorized Representative Phone</strong></td>
<td>260-459-6270</td>
</tr>
<tr>
<td><strong>Authorized Representative Signature</strong></td>
<td>Nicole Welsh</td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>02/06/2026</td>
</tr>
</table>
