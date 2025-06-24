---
id: '1lNl-P7EYEJTn7iH37TRc29k0_WeJRDk_A1_VIUkMUYE'
title: 'Real World Testing Results 2024'
date: '2025-02-03T14:46:32.306Z'
version: 587
lastAuthor: 'nwelsh'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/'
  - 'https://www.healthit.gov/test-method/transitions-care'
  - 'https://www.healthit.gov/test-method/clinical-information-reconciliation-and-incorporation'
  - 'https://www.healthit.gov/test-method/electronic-prescribing'
  - 'https://www.healthit.gov/test-method/data-export'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-send'
  - 'https://www.healthit.gov/test-method/data-segmentation-privacy-receive'
  - 'https://www.healthit.gov/test-method/care-plan'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-record-and-export'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-import-and-calculate'
  - 'https://www.healthit.gov/test-method/clinical-quality-measures-cqms-report'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party'
  - 'https://www.healthit.gov/test-method/transmission-immunization-registries'
  - 'https://www.healthit.gov/test-method/transmission-public-health-agencies-syndromic-surveillance'
  - 'https://www.healthit.gov/test-method/application-access-patient-selection'
  - 'https://www.healthit.gov/test-method/application-access-all-data-request'
  - 'https://www.healthit.gov/test-method/standardized-api-patient-and-population-services'
  - 'https://www.healthit.gov/test-method/direct-project'
  - 'https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html'
  - 'https://www.healthit.gov/test-method/view-download-and-transmit-3rd-party-0'
  - 'https://github.com/mieweb/wcexport'
  - 'https://docs.webchartnow.com/resources/system-specifications/fhir-application-programming-interface-api/'
source: 'https://drive.google.com/open?id=1lNl-P7EYEJTn7iH37TRc29k0_WeJRDk_A1_VIUkMUYE'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
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
<td><strong>0015E8UJ8KHX8QL</strong><br />
<strong>15.04.04.1932.WebC.84.01.0.221117</strong></td>
</tr>
<tr>
<td><strong>Developer Real World Testing Page URL</strong></td>
<td><a href="https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/">https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/</a></td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>10/31/2023, resubmitted 12/01/2023</td>
</tr>
<tr>
<td><strong>Results Version</strong></td>
<td>2024 Annual Results</td>
</tr>
<tr>
<td><strong>Results Submission Date</strong></td>
<td>01/31/2025</td>
</tr>
</table>

## Changes to the Original Plan

<table>
<tr>
<td><strong>Summary of Change</strong></td>
<td><strong>Reason</strong></td>
<td><strong>Impact</strong></td>
</tr>
<tr>
<td>CDA, FHIR, and USCDI SVAP was not completed during 2024</td>
<td>Business needs prevented development from finalizing code to meet the new standards.  This will now be completed in 2025.</td>
<td>There was no impact on RWT activities as testing measures did not need to be updated to the newer standard.</td>
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
    * § 170.315(f)(2) Transmission to public health agencies — syndromic surveillance
* Application Programming Interfaces
    * § 170.315(g)(7) Application access— patient selection
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
<td><a href="https://www.healthit.gov/test-method/transmission-public-health-agencies-syndromic-surveillance#test_procedure">§170.315(f)(2): Transmission to public health agencies — syndromic surveillance</a></td>
<td>(f)(2) - Create Content</td>
<td>32</td>
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

Throughout 2024, we generally found a reduction of errors and misuse of modules when compared to 2023.  The testing of e-Prescribing functionality, CCDA creation, data export, and documentation availability were particularly successful in production environments with real patient data.  Conversely, many of WebChart EHR's certified capabilities are still heavily underutilized by clients, especially use of the FHIR API, Direct Messaging, and special use of CDAs (care plan, security tags).  These APIs present challenges for real world testing since test patients and environments, despite mirroring production systems, do not truly represent the end-user interoperability experience.  Due to the development priority of supporting (b)(11) and certifying additional eCQMs, improving the robustness of the testing infrastructure did not receive the development attention as planned; however, MIE remains dedicated to both improving the testing infrastructure as well as continuing to educate clients regarding these features that are available and valuable to their practice.

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

<table>
<tr>
<td></td>
<td><strong>Calculations</strong></td>
<td><strong>QRDA I</strong></td>
<td><strong>QRDA III</strong></td>
</tr>
<tr>
<td><strong>Client Reported Issues</strong></td>
<td>0</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td><strong>Submitted Files</strong></td>
<td>N/A</td>
<td>2624</td>
<td>5</td>
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
<td>19</td>
<td>0</td>
</tr>
</table>

#### Discussion

As expected, no errors were found in formatting or coding of the certified measures in production systems.  A very small number of files were reported by a single client.  In all cases, the encounters were not properly coded in the EHR and therefore were missing necessary codes in the resulting QRDA-I file.  Additionally, the upgrade to Cypress 7.3.1 introduced a few errors to our QRDA-I testing; however, all of these errors were resolved before reaching production systems.

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
<td>19</td>
<td>0</td>
</tr>
</table>

#### Discussion

The upgrade to Cypress 7.3.1 introduced a few errors to our QRDA-I testing; however, all of these errors were resolved before reaching production systems.

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
<td>37518</td>
<td>128003</td>
<td>31501</td>
<td>37518</td>
<td>9159</td>
<td>243699</td>
</tr>
<tr>
<td>RxChangeRequest</td>
<td>2</td>
<td>3529</td>
<td>1004</td>
<td>2</td>
<td>0</td>
<td>4537</td>
</tr>
<tr>
<td>RxChangeResponse</td>
<td>0</td>
<td>3392</td>
<td>1012</td>
<td>0</td>
<td>0</td>
<td>4404</td>
</tr>
<tr>
<td>CancelRx</td>
<td>29</td>
<td>85</td>
<td>6</td>
<td>29</td>
<td>3</td>
<td>152</td>
</tr>
<tr>
<td>CancelRxReponse</td>
<td>23</td>
<td>76</td>
<td>6</td>
<td>23</td>
<td>3</td>
<td>131</td>
</tr>
<tr>
<td>RxRenewalRequest</td>
<td>12610</td>
<td>50034</td>
<td>6488</td>
<td>12610</td>
<td>0</td>
<td>81742</td>
</tr>
<tr>
<td>RxRenewalResponse</td>
<td>12642</td>
<td>52920</td>
<td>6486</td>
<td>12642</td>
<td>0</td>
<td>84690</td>
</tr>
<tr>
<td>RxFill</td>
<td>0</td>
<td>3</td>
<td>1931</td>
<td>0</td>
<td>0</td>
<td>1934</td>
</tr>
<tr>
<td>RxHistoryRequest</td>
<td>3</td>
<td>0</td>
<td>4</td>
<td>3</td>
<td>0</td>
<td>10</td>
</tr>
<tr>
<td>RxHistoryResponse</td>
<td>3</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>0</td>
<td>8</td>
</tr>
<tr>
<td>Status</td>
<td>102068</td>
<td>386966</td>
<td>80410</td>
<td>102068</td>
<td>16950</td>
<td>688462</td>
</tr>
<tr>
<td>Error</td>
<td>465</td>
<td>5455</td>
<td>322</td>
<td>465</td>
<td>30</td>
<td>6737</td>
</tr>
<tr>
<td>Verify</td>
<td>39604</td>
<td>147987</td>
<td>32112</td>
<td>39604</td>
<td>7818</td>
<td>267125</td>
</tr>
</table>

Total error rate: 6737 / 1383631 * 100 = 0.487%

#### Discussion

As expected, all supported message types have a greater than zero total message count, and the total number of messages far exceeds the number of errored messages with a total error rate of 0.487%.  This is a marked increase in error rate from 0.22% in 2023 to 0.487% in 2024.  Additionally, the number of NewRx messages is significantly greater than the number of RxChangeResponse, CancelRx, and RxRenewalResponse messages.

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
<td>37518+128003+31501+37518+9159 = 243699</td>
<td>1094+110148+23115+1094+8831 = 144282</td>
</tr>
</table>

Total rate of diagnosis use: 144282 / 243699 * 100 = 59.20%

#### Discussion

Since the Diagnosis elements are not a required component of a NewRx message, as anticipated, only a subset (59.2%) of the NewRx messages included a diagnosis. The rate of NewRx messages with a diagnosis included increased dramatically from 32.6% in 2023 to 59.2% in 2024 showing an increasing rate of using the diagnosis element.  Most clients appear to heavily use the diagnosis element, with only one tested client rarely including a diagnosis and therefore reducing the overall usage rate.  Additional client education will be provided in 2025 to further increase usage.

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
<td>13102</td>
</tr>
<tr>
<td>C48155</td>
<td>Gram (g)</td>
<td>7</td>
</tr>
<tr>
<td>C48477</td>
<td>Bottle</td>
<td>0</td>
</tr>
<tr>
<td>C48480</td>
<td>Capsule</td>
<td>2</td>
</tr>
<tr>
<td>C48521</td>
<td>Packet</td>
<td>0</td>
</tr>
<tr>
<td>C48542</td>
<td>Tablet</td>
<td>14</td>
</tr>
<tr>
<td>C64933</td>
<td>Each</td>
<td>9</td>
</tr>
<tr>
<td>C48504</td>
<td>Kit</td>
<td>0</td>
</tr>
</table>

Total rate of incorrect units: 32 / 13134 * 100 = 0.24%

#### Discussion

As expected, C28254 (milliliters) is the most commonly sent unit of measure for oral liquid medications.  Non-C28254 units were only sent in 0.24% of oral liquid medication messages in 2024 which is holding steady with rates seen in previous years.

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
<td>37518+128003+31501+37518+9159 = 243699</td>
<td>16+1402+13+16+55 = 1502</td>
</tr>
</table>

Total rate of improper decimals: 1502 / 243699 * 100 = 0.62%

#### Discussion

As expected, the number of NewRx messages sent with inappropriate trailing zeros, or missing leading zeros, occurs rarely in only 0.62% of messages; however, this is again an increase from previous years.  Both technical and training options will be investigated to reduce the incidence of improper decimal formats in 2025.

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

<table>
<tr>
<td><strong>Documents</strong></td>
<td><strong>Views</strong></td>
</tr>
<tr>
<td>119,445</td>
<td>51,841</td>
</tr>
</table>
#### Discussion

These numbers demonstrate the ability for Webchart to generate and display with a stylesheet CCDA documents within the system.  While significantly more documents were uploaded into WebChart EHR than were viewed, all 51,841 document views that did occur were successful.  No errors were reported by clients.

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

The MIE API documentation was available 100% of Q1 and Q2, 99.997% of Q3, and 99.791% of Q4 for a total uptime of 99.947%.

#### Discussion

As expected, the documentation maintained an uptime of greater than 99.9% at 99.947% for the year.  All reported downtime was due to connection timeouts which are monitored.  The appropriate alerts were acted upon to bring the documentation back up as quickly as possible.  Data regarding the usage of the API can be viewed in Measure 20.
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

MIE will report on the number of CDA formatted documents reconciled via our reconciliation process.  Following each reconcile, if a temporary CDA for the chart is created as part of the process, it will be validated to ensure the reconciled data can be incorporated into a CDA created free of schematic errors (the CDA document will *NOT* be kept, only the result of the validation).  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported.

#### Results

<table>
<tr>
<td><strong>Total Reconciled Documents</strong></td>
<td><strong>Schematically Valid</strong></td>
<td><strong>Schematically Invalid</strong></td>
</tr>
<tr>
<td>35</td>
<td>6</td>
<td>29</td>
</tr>
</table>

#### Discussion

While CCDA validation was low in 2024, we expect validation and document creation to increase in 2025, as we plan to migrate HTML output files and CCDA files into a single document. The CCDAs that were marked invalid have been investigated.  Most were because of missing data within the system at the time of creation, but in all cases, we have improved generation of CCDAs no matter if data exists or not in certain sections, so they can pass in all situations.

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
<td>7464</td>
</tr>
<tr>
<td><strong>Rejected by the registry</strong></td>
<td>20</td>
</tr>
<tr>
<td><strong>Declined to generate</strong></td>
<td>92</td>
</tr>
</table>

#### Discussion

Nearly all (98.6%) of VXU messages were generated and transmitted successfully to the registry. Temporary network issues caused the error in 82/92 messages that declined to generate. The remaining 10 VXU messages that did not generate were caused by data entry issues by the end user.  A large portion of the transmissions rejected by the registry (8/20) were due to registry down time. The remaining 16 messages were rejected by the registry due to invalid data entered by the end user.

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
<td>30701</td>
</tr>
<tr>
<td><strong>Failed retrievals</strong></td>
<td>634</td>
</tr>
</table>

#### Discussion

The rate of successful retrievals is high with only a 2% failure rate.

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
<td>30309</td>
</tr>
<tr>
<td><strong>Failed to transmit</strong></td>
<td>160</td>
</tr>
<tr>
<td><strong>Failed MDNs received</strong></td>
<td>0</td>
</tr>
</table>

#### Discussion

Transmissions were largely successful with only a 0.5% failure rate. No transmitted messages were rejected by the recipient.

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
<td>5587</td>
</tr>
<tr>
<td><strong>Messages failing to conform</strong></td>
<td>7</td>
</tr>
<tr>
<td><strong>Messages successfully delivered</strong></td>
<td>5580</td>
</tr>
</table>

#### Discussion

Direct Project messages received by our HISP were successfully delivered to the recipients in 99.8% of cases.
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

193,685 document views were performed on 124,555 documents in the patient portals of tracked systems.

#### Discussion

The numbers shown demonstrate the ability for Webchart patient portal users to effectively view documents in their accounts.  This also demonstrates an exponential increase in patient portal views over 2023 indicating significant progress in provider and patient engagement.

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

8,428 document downloads were performed on 6,317 documents in the patient portals of tracked systems.

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

Patient emailing from accounts is not nearly as active as viewing and downloading documents.  Promoting the usage of sending documents from a portal account will be enhanced in 2025.

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
<td>5587</td>
</tr>
<tr>
<td><strong>Number of XDM packages processed</strong></td>
<td>555</td>
</tr>
</table>

#### Discussion

The overall increase in Direct Project traffic this year led to a decline in the percentage of XDM packages processed, despite the absolute number of packages received remaining relatively stable. This indicates that a segment of our partner HISPs continues to consistently utilize XDM packages, even as newer partners have not adopted them.

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

CDA Document export was used to export 69,478 charts.

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

<table>
<tr>
<td><strong>Tracked and validated CDAs</strong></td>
<td>1906</td>
</tr>
<tr>
<td><strong>Valid documents</strong></td>
<td>667</td>
</tr>
<tr>
<td><strong>Invalid documents</strong></td>
<td>1239</td>
</tr>
</table>

#### Discussion

The invalid documents were mostly due to issues with missing data causing "invalid" empty elements in CDA documents.  These have been rectified to use nullFlavor throughout the year and the CDA output improved to generate valid CCDAs more often.  Also, all "invalid" documents were still reported as readable by other systems when sent to outside parties, not causing any issues for machine readability of sections.

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

Five total production API exports occurred in 2024.  Three of these exports produced CSV files and two produced PDF files for patient charts. All exports had an initial failure rate of <1%. These initial export errors were rerun error-free and 100% of data was delivered as expected.
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

The internal accessibility scanning of a pre-production test system identified 0 urgent and 0 secondary non-conformance issues in 98.84% of nightly and ad-hoc scans throughout the year.  In the remaining 1.16% of scans only secondary issues were uncovered, all of which were eliminated prior to code changes reaching production systems.  Production accessibility scanning identified 0 urgent and 0 secondary non-conformance issues for the entire year.

#### Discussion

As expected no urgent non-conformance issues were identified in either live production or pre-production test systems.  In the rare occurrence that a secondary non-conformance issue was identified in testing, it was addressed and eliminated prior to reaching live production systems.  The increase in issues uncovered in 2024 over 2023 is indicative of the rapid development currently occurring, especially with the emergence of AI technologies; however, it is a testament to the robust development and testing practices that none of these issues reached production systems.

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

The FHIR API documentation was available 100% of Q1 and Q2, 99.997% of Q3, and 99.791% of Q4 for a total uptime of 99.947%.

#### Discussion

As expected, the documentation maintained an uptime of greater than 99.9% at 99.947% for the year.  All reported downtime was due to connection timeouts which are monitored.  The appropriate alerts were acted upon to bring the documentation back up as quickly as possible.  During any down time the FHIR API documentation would not have been available, but no effect on end user requests for the information was reported.

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

On a quarterly basis, USCDI data elements have been entered on 2 test patients in live WebChart EHR systems.  Each quarter, 1 CCDA document was generated for each test patient.  All 8 CCDA documents contained all USCDI data elements.

Additionally, the 51,841 CCDA documents viewed in participating WebChart EHR systems and the 667 schematically valid reconciled CCDA documents were compared to the patients' charts.  In all cases, all USCDI data available in the chart was displayed in the documents; however, not all USCDI data elements were available in these charts to be included in the CCDAs.

#### Discussion

All testing completed with test patients in live systems was successful, demonstrating that all USCDI elements can be included in CCDAs.  All live patient data tested was also successful; however, not all patient charts contained all USCDI data elements.  We have plans in 2025 to enhance our USCDI compliance visibility with USCDI compliance documentation and increased full document demonstrative creation.

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
<td><strong>Number of Charts with Element Entered per Quarter</strong></td>
</tr>
<tr>
<td>Care Plan Goals</td>
<td>5</td>
</tr>
<tr>
<td>Health Concerns</td>
<td>5</td>
</tr>
<tr>
<td>Health Status</td>
<td>4</td>
</tr>
<tr>
<td>Interventions</td>
<td>4</td>
</tr>
</table>

#### Discussion

Webchart demonstrated in live systems that Care Plan data can be collected during the calendar year for a care plan.  More education is needed with providers on using a care plan format in encounters and collecting to the Care Plan document elements in 2025.

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

On a quarterly basis, CDA Care Plan information was entered on test patients in properly configured live WebChart EHR systems.  CCDA documents were then generated for those patients. Additionally, 206 CCDA Care Plan documents were created for live patients; however, these documents did not include all four care plan sections.

<table>
<tr>
<td><strong>Element</strong></td>
<td><strong>Number of Test Charts with Element Entered per Quarter</strong></td>
<td><strong>Number of Test CCDAs with Element Present per Quarter</strong></td>
<td><strong>Total Successful Tests</strong></td>
</tr>
<tr>
<td>Care Plan Goals</td>
<td>4</td>
<td>4</td>
<td>16</td>
</tr>
<tr>
<td>Health Concerns</td>
<td>3</td>
<td>3</td>
<td>12</td>
</tr>
<tr>
<td>Health Status</td>
<td>2</td>
<td>2</td>
<td>8</td>
</tr>
<tr>
<td>Interventions</td>
<td>2</td>
<td>2</td>
<td>8</td>
</tr>
</table>

#### Discussion

While we were able to demonstrate when all four sections of the Care Plan were completed that a valid Care Plan CCDA could be generated in live systems, current clients were not requesting workflows that put in place data entry to facilitate all of the sections completely.   We plan to increase workflows that fulfill all 4 sections for the CCDA Care Plan in 2025.

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

On a quarterly basis, CCDA documents with Care Plan information were imported to test patients in live WebChart EHR systems.  CCDA documents with Care Plan information were imported for 4 test patients separate from the test patients used in Measures 24 and 25.

4 CCDA documents were uploaded each quarter for a total of 16 documents.  All 16 were successful.

#### Discussion

Current client workflows do not include regularly receiving CCDA Care Plan documents.  We will increase test sending of CCDA Care Plan documents into live client charts in 2025. 

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

On a quarterly basis, CDA documents were generated on test patients with security set on the encounter in live WebChart EHR systems.  Across the year, 4 documents with security tags were generated.  All 4 documents were reviewed and contained the appropriate security tags based on the encounter settings.  Additionally, all 4 documents were confirmed as valid CCDAs.  One additional document was imported into the live system and confirmed to have successfully imported the appropriate security.

#### Discussion

This functionality is not currently used by any workflows in Webchart EHR by customers, or requested to do so.  In 2025, there is planned work to roll out the usage of Security Tags in CCDAs to align with support of patient privacy restrictions in Webchart EHR.

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

1 document was imported into a live system to demonstrate the ability to receive a CCDA document with tags and display the security tag data in a stylesheet.

#### Discussion

This functionality is not currently used by any workflows in Webchart EHR, and no other providers of CCDA we encounter regularly send data with the flag.  Since there are no indications that the security tags will be broadly used within live workflows, more robust manual testing will be implemented in 2025 along with client education that this feature is available.

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

WebChart EHR's FHIR API is still newly available to clients and has no adoption as of writing this plan.  Therefore to cover testing prior to live clients actively using the API, a publicly available production sandbox will be tested using Inferno.  FHIR adoption is expected to be slow, but increasing, throughout 2024 leading to improved app support in WebChart EHR as well as increased real world data being available, at which time, Measures 30 and 31 will provide a more complete view of the production FHIR capabilities.

#### Test Methodology

MIE will run weekly automated testing on the public FHIR R4 sandbox system using Inferno, and using log files stored in a QA database, MIE will report the success rate of the full (g)(10) test suite.  Any errors will be tracked, reported, and addressed.

#### Results

Beginning in Q3, weekly testing of the FHIR Sandbox using Inferno was conducted since no live clients are currently using FHIR.  13 of these tests were fully successful.  Weekly tests that were not successful were due to internal issues with test server availability.  The FHIR Sandbox environment was always available, but the test system accessing it had unexpected unavailability impacting our ability to test the sandbox.

#### Discussion

When the test server was available for connection to the FHIR Sandbox, FHIR Inferno testing was successful. MIE plans to both continue with weekly testing beginning from 01/01/2025 and work with clients to robustly test real world scenarios throughout all of 2025.

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

In 2024, we had 424 requests for data from 2 live systems in the Patient Scope through FHIR via two different test apps.

#### Discussion

We did not have any client requests to implement Patient FHIR apps in 2024, and only had our regular testing elements in specific live systems to demonstrate FHIR connectivity.  There are active plans to connect other apps for live client use in 2025, including CommonHealth and several healthcare-partner developed apps.

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

In 2024, we had 144 requests for data in the EHR Provider Scope from 2 live systems through FHIR via two different test apps.

#### Discussion

We did not have any client requests to implement any Provider FHIR apps in 2024, and only had our regular testing elements in specific live systems to demonstrate FHIR connectivity.  There are active plans to connect other apps for live client use in 2025.

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

Automated ADT tests run nightly to generate each of the four HL7 message types.  As expected, these tests were successful in all cases.  Since there are no live clients actively participating in syndromic surveillance, we will focus on client education and adoption in 2025.
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
<td>October 31, 2023</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>January 1, 2024</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2024</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2024</td>
</tr>
<tr>
<td>Additional CQM or criteria certification as determined by the developer</td>
<td>All settings</td>
<td>Q2, 2024</td>
</tr>
<tr>
<td>Update standards via SVAP as determined by the developer</td>
<td>All settings</td>
<td>Q3, 2024</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>December 31, 2024</td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2025</td>
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
<td>Doug Horner</td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>01/31/2025</td>
</tr>
</table>
