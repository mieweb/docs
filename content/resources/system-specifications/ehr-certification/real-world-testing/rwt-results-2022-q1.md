---
id: '1RSYz8E5xgXRhFy92EamMI501C7vV0mSHrqtTB51vwY0'
title: 'RWT Results 2022 Q1'
date: '2022-10-04T14:50:50.410Z'
version: 463
lastAuthor: 'Nicole Richardson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/'
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
  - 'https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html'
source: 'https://drive.google.com/open?id=1RSYz8E5xgXRhFy92EamMI501C7vV0mSHrqtTB51vwY0'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
---
# General Information  



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
<td><a href="https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/">https://docs.webchartnow.com/resources/system-specifications/ehr-certification/real-world-testing/</a></td>
</tr>
<tr>
<td><strong>Plan Submission Date</strong></td>
<td>11/15/2021</td>
</tr>
<tr>
<td><strong>Results Version</strong></td>
<td>Q1, completed 04/15/2022</td>
</tr>

</table>

  
# Certification Criteria to be Tested  

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
  
# Criteria-Measure Matrix  



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


  
# Justification for Real World Testing Approach  
  
WebChart EHR is a cloud-based, fully-inclusive EHR solution.  All certified functionality is delivered in all instances of the product regardless of the care setting, size of practice, or required use cases for a given practice.  Each production client is maintained in a separate database; however, the implementation of the environment is identical with the exception of optional increased security protocols that a client may choose to add for enhanced data protection. Additionally, the only differences between the client-facing portion of each system are a result of configuration settings that can be selected at go-live or updated at any time during a client's contract.  Due to this philosophy of product delivery, all certified capabilities may not be actively used in all marketed care settings or may not be actively used in any current client production system.  To address the Real World Testing requirements, MIE will be using a hybrid approach.  Testing will primarily be conducted using de-identified real patient data from production systems as recorded in database tables and log files.  For those criteria for which this live production recording is not available or minimal due to lack of client usage, client reported issues will be tracked and reported in addition to enacting automated tests of the certified functionality in a test system in a production environment.  The automated tests will be run daily or weekly as appropriate in a system that is identical in substance and delivery to a client production system with the only exception being live real patient data.  This blended approach will allow MIE to prove ongoing maintenance of WebChart EHR's certified technology regardless of the level of implementation by current clients.
  
# Measures Used in Overall Approach  
  
The following measures outline and justify how each requirement of all criteria to which WebChart EHR is certified will be tested during the 2022 Real World Testing year.  Please review the Criteria-Measure Matrix above to review which measure(s) will cover a specific requirement.

  
## Measure 1: Clinical Quality Measures Outgoing  

  
### Description  
  
This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress CUV+ test system.
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
First, MIE will install an instance of Cypress 6+ on our production servers following all of our protocols for maintaining the security of PHI.  Cypress CUV+ supports the validation of QRDA reports containing PHI and will be used monthly to validate a random selection of QRDAs from the care settings identified.  Any errors identified by Cypress CUV+ will be tracked, reported, and addressed, then followed with testing of a larger sample of files.  
Additionally, WebChart EHR has two customers that participate in quarterly attestations using both QRDA I and QRDA III reports.  These customers regularly inspect their CQM compliance numbers and will alert MIE to any perceived errors.  MIE will then collect and track the attestation results from the reporting bodies including any errors so as to report a success/failure rate.

  
### Results  


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
<td>0</td>
<td>1 warning, 0 errors</td>
</tr>
<tr>
<td><strong>Submitted Files</strong></td>
<td>N/A</td>
<td>2720</td>
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
<td>687</td>
<td>12</td>
</tr>
<tr>
<td><strong>Testing Errors</strong></td>
<td>N/A</td>
<td>0</td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
As expected, no errors were found in formatting or coding of the certified measures.  One warning was reported by a client where a provider NPI was included in the QRDA III file, but the provider had been removed from the client reported roster.  The provider producing the warning departed the practice mid-year causing data to be tracked in WebChart EHR for encounters that the provider performed prior to their departure.  This warning was determined to be of no impact to the eCQM certified functionality. 

  
## Measure 2: Clinical Quality Measures Incoming  

  
### Description  
  
This measure will review WebChart EHR's ability to measure clinical quality and export the required information.  Compliance will be tested both manually by developers and clients as well as automatically by reporting bodies and the Cypress CUV+ test system.
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
MIE will install an instance of Cypress 6+ on our production servers following all of our protocols for maintaining the security of PHI.  Automated testing will download QRDA I files from Cypress for each certified CQM, import the files to WebChart EHR, calculate the CQMs, and export the QRDA files for Cypress validation of both the content and calculations to verify that the import was successful.  Any errors identified by Cypress will be tracked, reported, and addressed.
  
### Results  



<table>
<tr>
<td></td>
<td><strong>QRDA I</strong></td>
<td><strong>QRDA III</strong></td>
</tr>
<tr>
<td><strong>Tested Files</strong></td>
<td>702</td>
<td>12</td>
</tr>
<tr>
<td><strong>Testing Errors</strong></td>
<td>0</td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
As expected, no errors were found in formatting or coding of the certified measures.

  
## Measure 3: E-Prescribing Messages Sent and Received  

  
### Description  
  
This measure will verify that all supported e-prescribing message types are in use in WebChart EHR, including inbound and outbound message types.
  
### Associated Certification Criteria  


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


  
### Test Methodology  
  
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
  
### Results  


<table>
<tr>
<td><strong>Message Type</strong></td>
<td><strong>Client Message Counts</strong></td>
<td><strong>Total Count</strong></td>
</tr>
<tr>
<td>NewRx</td>
<td>12982</td>
<td>55289</td>
<td>29506</td>
<td>8720</td>
<td>2329</td>
<td>108826</td>
</tr>
<tr>
<td>RxChangeRequest</td>
<td>0</td>
<td>96</td>
<td>682</td>
<td>275</td>
<td>0</td>
<td>1053</td>
</tr>
<tr>
<td>RxChangeResponse</td>
<td>0</td>
<td>98</td>
<td>562</td>
<td>276</td>
<td>0</td>
<td>936</td>
</tr>
<tr>
<td>CancelRx</td>
<td>15</td>
<td>112</td>
<td>0</td>
<td>0</td>
<td>2</td>
<td>129</td>
</tr>
<tr>
<td>CancelRxReponse</td>
<td>15</td>
<td>97</td>
<td>0</td>
<td>0</td>
<td>2</td>
<td>114</td>
</tr>
<tr>
<td>RxRenewalRequest</td>
<td>2594</td>
<td>2809</td>
<td>14523</td>
<td>1503</td>
<td>0</td>
<td>21429</td>
</tr>
<tr>
<td>RxRenewalResponse</td>
<td>2614</td>
<td>2893</td>
<td>14293</td>
<td>1497</td>
<td>0</td>
<td>21297</td>
</tr>
<tr>
<td>RxFill</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>227</td>
<td>0</td>
<td>227</td>
</tr>
<tr>
<td>RxHistoryRequest</td>
<td>4</td>
<td>0</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>9</td>
</tr>
<tr>
<td>RxHistoryResponse</td>
<td>3</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>4</td>
</tr>
<tr>
<td>Status</td>
<td>31117</td>
<td>106855</td>
<td>95683</td>
<td>21307</td>
<td>4304</td>
<td>259266</td>
</tr>
<tr>
<td>Error</td>
<td>110</td>
<td>205</td>
<td>991</td>
<td>37</td>
<td>10</td>
<td>1353</td>
</tr>
<tr>
<td>Verify</td>
<td>13004</td>
<td>45722</td>
<td>35796</td>
<td>8864</td>
<td>1988</td>
<td>105374</td>
</tr>

</table>


<table>
<tr>
<td><strong>Error Text</strong></td>
<td><strong>Total Count</strong></td>
</tr>
<tr>
<td>(Error Code: 601) (Desc. Code: 008)</td>
<td>458</td>
</tr>
<tr>
<td>(Error Code: 602)</td>
<td>3</td>
</tr>
<tr>
<td>(Error Code: 900)</td>
<td>16</td>
</tr>
<tr>
<td>1 errors validating against transport.xsd </td>
<td>102</td>
</tr>
<tr>
<td>Controlled Substance Cannot Be Faxed (Error Code: 900)</td>
<td>2</td>
</tr>
<tr>
<td>Controlled substance must have a DEASchedule populated in Medication Prescribed (Error Code: 900)</td>
<td>11</td>
</tr>
<tr>
<td>DEA or SSN not found in the message (Error Code: 900)</td>
<td>17</td>
</tr>
<tr>
<td>Fax receipt could not be confirmed (Error Code: 600)</td>
<td>10</td>
</tr>
<tr>
<td>Intermediary system error. (Error Code: 900) (Desc. Code: 4020)</td>
<td>21</td>
</tr>
<tr>
<td>Internal error.Contact pharmacy by other means. (Error Code: 600) (Desc. Code: 008)</td>
<td>7</td>
</tr>
<tr>
<td>Internal Processing Error Occurred (Error Code: 602)</td>
<td>31</td>
</tr>
<tr>
<td>Invalid MedicationPrescribed WrittenDate (Error Code: 900)</td>
<td>1</td>
</tr>
<tr>
<td>Mailboxed message could not be confirmed after three tries (Error Code: 602)</td>
<td>1</td>
</tr>
<tr>
<td>Message is a duplicate.</td>
<td>47</td>
</tr>
<tr>
<td>NewRx MedicationPrescribed Quantity must be a non-zero value (Error Code: 900)</td>
<td>19</td>
</tr>
<tr>
<td>No NDC or compound or supply code in message for MedicationPrescribed (Error Code: 900)</td>
<td>6</td>
</tr>
<tr>
<td>NON PARTICIPATING PHARMACY for C19 ANTIVIRAL REFER TO STATE HEALTH DEPT FOR PARTICIPATING PHARMACY (Error Code: 900)</td>
<td>4</td>
</tr>
<tr>
<td>Not able to connect to Backend[DMZ Error] (Error Code: 900)</td>
<td>7</td>
</tr>
<tr>
<td>Partner rejected transaction with an error (Error Code: 900) (Desc. Code: 220)</td>
<td>208</td>
</tr>
<tr>
<td>Patient address required for controlled substance (Error Code: 900)</td>
<td>1</td>
</tr>
<tr>
<td>Pharmacy is temporarily down. Please retry. (Error Code: 900) (Desc. Code: 2000)</td>
<td>1</td>
</tr>
<tr>
<td>Pharmacy is Temporarily Unavailable (Error Code: 900)</td>
<td>1</td>
</tr>
<tr>
<td>Pharmacy record inactive, may have new active location (Error Code: 900)</td>
<td>62</td>
</tr>
<tr>
<td>Prescriber address required for controlled substance (Error Code: 900)</td>
<td>1</td>
</tr>
<tr>
<td>Prescription no longer active (Error Code: 601)</td>
<td>127</td>
</tr>
<tr>
<td>Receiving partner does not support this type of message (Error Code: 900)</td>
<td>23</td>
</tr>
<tr>
<td>Refill request has been canceled (Error Code: 900) (Desc. Code: 4020)</td>
<td>5</td>
</tr>
<tr>
<td>Request has been canceled prior to response. Response not processed. (Error Code: 601) (Desc. Code: 008)</td>
<td>125</td>
</tr>
<tr>
<td>Rx Outreach pharmacy does not currently offer this product. (Error Code: 900)</td>
<td>1</td>
</tr>
<tr>
<td>Transaction is a duplicate. (Error Code: 601) (Desc. Code: 220)</td>
<td>1</td>
</tr>

</table>

Total error rate: 1319/520017*100 = 0.25%
  
### Discussion  
  
As expected, all supported message types have a greater than zero total message count, and the total number of messages far exceeds the number of errored messages with a total error rate of 0.25%.  Additionally, the number of NewRx messages is significantly greater than the number of RxChangeResponse, CancelRx, and RxRenewalResponse messages.


  
## Measure 4: E-Prescribing Diagnosis Codes  

  
### Description  
  
This measure will verify that all diagnosis elements are present in some e-prescribing messages as required by §170.315(b)(3), including inbound and outbound message types.
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
MIE will report the contents of each stored message in a client's local database table of stored messages, and counts the inbound and outbound messages that include Diagnosis elements. MIE will run the report for each client under consideration and aggregate the results.
  
### Results  


<table>
<tr>
<td><strong>Total NewRx Messages</strong></td>
<td><strong>NewRx Messages with Diagnosis Included</strong></td>
</tr>
<tr>
<td>108826</td>
<td>28867</td>
</tr>

</table>

  
### Discussion  
  
Since the Diagnosis elements are not a required component of a NewRx message, as anticipated, only a subset (26.53%) of the NewRx messages included a diagnosis.

  
## Measure 5: E-Prescribing Oral Liquid Units  

  
### Description  
  
This measure will verify that prescriptions for medications with an oral liquid form will have a quantity unit of measurement of mL, not cc or English units as outlined in §170.315(b)(3).
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, limiting to oral liquid medications, and provides a count of each distinct quantity unit of measure used. MIE will run the report for each client under consideration and aggregate the results.
  
### Results  


<table>
<tr>
<td><strong>Unit Code</strong></td>
<td><strong>Unit Description</strong></td>
<td><strong>Quantity</strong></td>
</tr>
<tr>
<td>C28254</td>
<td>Milliliter (ml)</td>
<td>2901</td>
</tr>
<tr>
<td>C48155</td>
<td>Gram (g)</td>
<td>4</td>
</tr>
<tr>
<td>C48480</td>
<td>Capsule</td>
<td>1</td>
</tr>
<tr>
<td>C64933</td>
<td>Each</td>
<td>11</td>
</tr>

</table>

  
### Discussion  
  
As expected, C28254 (milliliters) is the most commonly sent unit of measure for oral liquid medications.  Non-C28254 units were only sent in 0.55% of oral liquid medication messages.

  
## Measure 6: E-Prescribing Decimal Format  

  
### Description  
  
This measure will verify that numeric amounts in prescriptions include leading zeros before decimal points and do not allow trailing zeros after a decimal point.
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
MIE will create a system report that examines the contents of each stored NewRx message in a client's local database table of stored messages, and provides a count of prescription messages that include inappropriate trailing zeros, and a count of those missing leading zeros. MIE will run the report for each client under consideration and aggregate the results.
  
### Results  


<table>
<tr>
<td><strong>Total NewRx Messages</strong></td>
<td><strong>NewRx Messages with Improper Decimal Format</strong></td>
</tr>
<tr>
<td>108826</td>
<td>382</td>
</tr>

</table>

  
### Discussion  
  
As expected, the number of NewRx messages sent with inappropriate trailing zeros, or missing leading zeros, occurs rarely in only 0.35% of messages.

  
## Measure 7: CDA Download  

  
### Description  
  
This measure will verify that the system can accept a CDA document uploaded into the system, assign it to the appropriate chart in the system as appropriate, and display the document with a standard stylesheet with all sections being accepted and visible.
  
### Associated Certification Criteria  


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
<td>(b)(1)(ii) - All paragraphs </td>
</tr>
<tr>
<td>(b)(1)(iii) - All paragraphs</td>
</tr>

</table>
  
### Test Methodology  
  
MIE will report on the number of CDA formatted documents uploaded into tracked Webchart systems and the number of upload attempts that failed as stored in client databases and error log files.  
MIE will report on the number of requests to view a CDA document within the system, and the number of times it displayed correctly, and when there were errors in display.  
Any errors reported by customers or the recipients of their quarterly attestations will be tracked and reported as a baseline.  These test assumptions for customer reporting align with the "visual inspection" aspects of the test lab tests.

  
### Results  


<table>
<tr>
<td><strong>Total CDA Documents Uploaded</strong></td>
<td>3918</td>
</tr>
<tr>
<td><strong>Total CDA Document Upload Failures</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Total CDA Document Views</strong></td>
<td>215</td>
</tr>
<tr>
<td><strong>Total CDA Document View Reported Errors</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Total Successful CDA Views </strong></td>
<td>215</td>
</tr>

</table>
  
### Discussion  
  
As anticipated, there were no errors in being able to upload and view valid CCDA documents.  Currently, client systems generating CCDA documents have a low incidence of viewing the CCDA documents (215/3918 = 5.4%).


  
## Measure 8: Application Access Documentation  

  
### Description  
  
This measure will verify that WebChart EHR's API documentation is publicly and perpetually available.  Compliance will be recorded by an external uptime monitor and reported quarterly.  Upon request, or in the event of downtime, data can additionally be reported in daily, weekly, or monthly increments.
  
### Associated Certification Criteria  


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


  
### Test Methodology  
  
An external uptime monitor will check the availability of all documentation available at [https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html](https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api.html).  Both up- and downtime will be logged to be reported quarterly.  The cause of any downtime and the duration will also be logged   In the event of any downtime, the amount of downtime can be reported at daily, weekly, or monthly intervals in addition to the quarterly reports, and the cause of each downtime occurrence will be reported.
  
### Results  
  
The MIE API documentation was available 99.997% of Q1.  There was a 3 minute down period on March 17, 2022 due to a connection timeout.
  
### Discussion  
  
As expected, the documentation maintained an uptime of greater than 99.9% at 99.997% for the quarter.  The longest downtime period of 3 minutes was less than the acceptable 10 minute duration and was due to a minor issue.

  
## Measure 9: Clinical Information Reconciliation and Incorporation  

  
### Description  
  
This measure will verify that the system can take a CCDA transition of care/referral summary formatted according to the standards adopted §170.205(a)(3) and §170.205(a)(4) and read the data for medications, allergies, and conditions from the document, reconcile those into the chart, and that the data is fully incorporated into the chart.
  
### Associated Certification Criteria  


<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Clinical information reconciliation and incorporation" (§ 170.315(b)(2))</td>
<td>(b)(2)(iii)(A), (B), (C), (D) </td>
</tr>
<tr>
<td>(b)(2)(iv) - System Verification</td>
</tr>

</table>

  
### Test Methodology  
  
MIE will report on the number of CDA formatted documents reconciled via the "Froozhie" tool.  
Following each reconcile, a temporary CDA for the chart will be created and validated to ensure the reconciled data can be incorporated into a CDA created free of schematic errors (the CDA document will *NOT* be kept, only the result of the validation).  Additionally, any client complaints that data is not being imported correctly from the tool will be tracked, investigated, and reported
  
### Results  


<table>
<tr>
<td><strong>CDA Documents Reconciled</strong></td>
<td>321</td>
</tr>
<tr>
<td><strong>CDA Documents Generated on a Chart  after a Reconcile that had an invalid Validation</strong></td>
<td>2</td>
</tr>
<tr>
<td><strong>Client reported Issues with CDA reconciliation</strong></td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
The use of CDA reconciliation in systems was relatively low, and no issues with the reconciliation of the documents were reported.

The two invalid validations were determined to be a byproduct of client workflow issues discussed in more detail in the Discussion section of Measure 19, not because of any issue with the document reconciliation process.
  
## Measure 10: Transmission to Immunization Registry: Create Content  

  
### Description  
  
This measure will verify that the system can generate a VXU conforming to the HL7 v2.5.1 standard, CDC guidance for communication to Immunization Registries and state/local guidance. The VXU messages shall contain information related to the demographics and vaccination administration record. 
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report from the database the number of successfully sent VXU messages acknowledged as received by the state immunization registry. MIE will also report from the database on the number of records rejected by the state registry due to error, whether the failure was due to registry internal errors, clinical data entry issues or a not well-formed message. Finally, MIE will report from the database the number of messages which declined to be generated due to data entry issues failing message pre-validation.
  
### Results  


<table>
<tr>
<td><strong>Successful transmission to registry</strong></td>
<td>988</td>
</tr>
<tr>
<td><strong>Rejected by the registry</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Declined to generate</strong></td>
<td>30</td>
</tr>

</table>

  
### Discussion  
  
As expected, very few messages were rejected by the state registry. There is a small portion of the entered injections which were not able to be transmitted to the state registry due to user data entry issues.

  
## Measure 11: Transmission to Immunization Registries: Query Records  

  
### Description  
  
This measure will verify that the system can generate a QBP conforming to the HL7 v2.5.1 standard, CDC guidance for communication to Immunization Registries and state/local guidance. Furthermore, the system shall be able to retrieve, consume and display to the end user the results of any such query.
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report the number of successful retrievals of evaluated history and forecasting operations from the database. MIE will report the number of failed retrievals, including those resulting from an internal error in the registry resulting in an inability to consume a response from the database. MIE will manually track, resolve and report issues resulting from WebChart EHR application errors as reported by end users.
  
### Results  



<table>
<tr>
<td><strong>Successful retrievals</strong></td>
<td>6570</td>
</tr>
<tr>
<td><strong>Failed retrievals</strong></td>
<td>277</td>
</tr>

</table>

  
### Discussion  
  
The errors encountered are less than 5% of the total message retrievals attempted. Of those errors, 36% were due to invalid responses from the state registry. This leaves only about 2.5% of the attempted messages potentially due to an EHR error.

  
## Measure 12: Direct Project: Send  

  
### Description  
  
This measure will verify that the system can transmit a Direct project conforming S/MIME to a HISP. The measure will also verify the receipt of those transmissions by verifying the status of the resultant MDN messages.
  
### Associated Certification Criteria  


<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Direct Project" (§ 170.315(h)(1)) </td>
<td>(h)(1)(i) - Send</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Processed</td>
</tr>
<tr>
<td>(h)(1)(ii) - Message Disposition Notification: Failed</td>
</tr>

</table>

  
### Test Methodology  
  
MIE will report from log files the number of messages transmitted. MIE will report from logs the number of messages which failed to be transmitted whether due to internal error, external failures or inability to verify trust of the recipient. MIE will report from logs the number of Processed MDN messages received. MIE will report from logs the number of Failed MDN messages received.
  
### Results  


<table>
<tr>
<td><strong>Messages Transmitted</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Failed to transmit</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Failed MDNs received</strong></td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
In this time frame, no outgoing messages were processed.  Additional testing as well as client education will be investigated to provide more robust data in future quarters.

  
## Measure 13: Direct Project: Receive  

  
### Description  
  
This measure will verify that the system conforms to Direct Project message receipt requirements for validation.
  
### Associated Certification Criteria  


<table>
<tr>
<td><strong>Certification Criteria</strong></td>
<td><strong>Requirement(s)</strong></td>
</tr>
<tr>
<td>"Direct Project" (§ 170.315(h)(1)) </td>
<td>(h)(1)(i) - Receive</td>
</tr>

</table>
  
### Test Methodology  
  
MIE will report from logs the number of messages transmitted to the HISP.  MIE will report from logs the number of messages failing to conform to Direct Project specifications.  MIE will report from logs the number of messages which are successfully delivered to recipients. 
  
### Results  


<table>
<tr>
<td><strong>Messages received by HISP</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Messages failing to conform</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Messages successfully delivered</strong></td>
<td>1</td>
</tr>

</table>

  
### Discussion  
  
As expected, the received messages were successfully processed and delivered.

  
## Measure 14: Patient Portal View  

  
### Description  
  
This measure will verify that a patient can view various document types within the patient portal. 

Associated Certification Criteria

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
  
### Test Methodology  
  
MIE will report a number of measurements surrounding documents, including:
* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents read by patients in the patient portal 
* Number of failures in the ability to read messages in the patient portal 
Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files as well as any client reported issues tracked during the testing period.
  
### Results  


<table>
<tr>
<td><strong>CDA Documents Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Unsuccessfully Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Read by Patients in the Patient Portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Failed to be read in the Patient Portal</strong></td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
During the first quarter, no clients were sending CDA documents into the patient portal.  Additional testing as well as client education will be investigated to provide more robust data in future quarters.


  
## Measure 15: Patient Portal Download  

  
### Description  
  
This measure will verify that a patient can download various document types within the patient portal. 
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report a number of measurements surrounding documents, including:
* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents successfully downloaded from the patient portal 
* Number of documents unsuccessful in being downloaded from the patient portal. 
Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.
  
### Results  


<table>
<tr>
<td><strong>CDA Documents Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Unsuccessfully Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Downloaded by Patients in the Patient Portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Failed to be downloaded in the Patient Portal</strong></td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
During the first quarter, no clients were sending CDA documents into the patient portal.  Additional testing as well as client education will be investigated to provide more robust data in future quarters.
  
## Measure 16: Patient Portal CCDA Transmit  

  
### Description  
  
This measure will verify that a patient can transmit various document types within the patient portal to other entities.
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report a number of measurements surrounding documents, including:
* Number of documents sent successfully to patients in the patient portal
* Number of documents unsuccessfully sent to the patient portal
* Number of documents successfully transmitted from the patient portal 
* Number of documents unsuccessful in being transmitted from the patient portal. 
Results will be retrieved from database tables and aggregated for reporting.  Any failures will be reported from the information found in log files and third party reports as well as any client reported issues tracked during the testing period.
  
### Results  


<table>
<tr>
<td><strong>CDA Documents Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Unsuccessfully Sent to the patient portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Sent by Patients in the Patient Portal</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>CDA Documents Failed to be sent in the Patient Portal</strong></td>
<td>0</td>
</tr>

</table>

  
### Discussion  
  
During the first quarter, no clients were sending CDA documents into the patient portal.  Additional testing as well as client education will be investigated to provide more robust data in future quarters.
  
## Measure 17: Send Using Edge Protocol for SMTP / XDM  

  
### Description  
  
This measure will verify that the system is able to utilize a SMTP edge protocol for sending and receiving Direct Project messages. As part of receiving messages, XDM shall be handled when applicable.
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report from logs the number of messages transmitted to the HISP by SMTP.  MIE will report from logs the number of messages received from the HISP by SMTP.  MIE will report from logs the number of XDM packages processed.  In the case where insufficient real-world data is available, data resulting from regular testing with DirectTrust shall be included in the reporting.
  
### Results  



<table>
<tr>
<td><strong>Messages submitted to HISP via SMTP</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Number of XDM packages processed</strong></td>
<td>63</td>
</tr>

</table>

  
### Discussion  
  
As expected, there was very low usage.  XDM packages that were processed included packages from standard regular testing.
  
## Measure 18: Data Export  

  
### Description  
  
This measure will verify that a user can use WebChart EHR's Data Export Tool to pull down groups of patient data from a Webchart EHR system.
  
### Associated Certification Criteria  


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

  
### Test Methodology  
  
MIE will report from the event log database tables a series of occurrences that indicates use of the WebChart EHR Data Export Tool:
* Event logs of the report to find all patients for Document Export being called.
* Event logs of CDA documents being generated within a certain short time period following the report. 
MIE will track customer reports of data expected to be in mass data export downloads that did not download as failures.
  
### Results  
  
Number of times EHR Data Export Tool was used: 0
  
### Discussion  
  
During the first quarter, no clients used the EHR Data Export Tool.  Additional testing will be investigated to provide more robust data in future quarters.


  
## Measure 19: CDA Validation  

  
### Description  
  
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
  
### Test Methodology  
  
All CDAs stored within a Webchart EHR will be run through schema validation regardless of the document's origin.  Documents may originate within the WebChart EHR system or be imported from a third party application of manual upload.  The schema validator will be installed within the MIE production environment to ensure the security of all PHI contained in the documents.  Only results of the validation will be made available, document content will not be revealed to developers during testing.

The number of valid vs. invalid CDAs and their sources will be reported.
  
### Results  


<table>
<tr>
<td><strong>CDA Documents Marked Valid in Period</strong></td>
<td>2087</td>
</tr>
<tr>
<td><strong>CDA Documents Marked Invalid in Period</strong></td>
<td>147</td>
</tr>
<tr>
<td><strong>% Marked Invalid In Period</strong></td>
<td>6.5%</td>
</tr>

</table>

All of the documents were created by client systems.  There were no external CDAs sent into these systems.
  
### Discussion  
  
The number of invalid CDAs generated were higher than anticipated.  These invalid CDA documents were primarily caused by erroneous workflows that generated documents with empty/missing location data.  Since these workflows were not anticipated, the proper nullFlavor was not implemented in the output.  The nullFlavors have since been implemented and patched to prevent future invalid documents from this cause.
  
## Measure 20: Patient Data requests VIA API  

  
### Description  
  
This measure will verify that the API as outlined in WebChart EHR's documentation is functional. A valid request for patient information must provide that information.
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
To address the overall automated testing, the following test requests will be made daily against a test system in a production environment.
* Issue a request in the browser to search for a patient (patient selection)
* Issue a request in the browser to request demographics of a patient (data category request)
* Issue a request using the export tool described in the documentation.
All API requests made in production systems are recorded in log files.  The number of requests logged will be reported against the number of issues with API functionality that are reported.

  
### Results  


<table>
<tr>
<td><strong>Production Exports</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Total Charts Exported</strong></td>
<td>80397</td>
</tr>
<tr>
<td><strong>Total Export Errors</strong></td>
<td>20</td>
</tr>

</table>
  
### Discussion  
  
As expected, the production use of the API was rare, but the total number of export errors was minimal.  Patient chart exports were successful in 99.98% of cases.
  
## Measure 21: Web Content Accessibility  

  
### Description  
  
This measure will verify that all certified content in the patient portal will maintain accessibility conformance as outlined in the Web Content Accessibility Guidelines (WCAG) 2.0.
  
### Associated Certification Criteria  


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
  
### Test Methodology  
  
MIE will conduct monthly third-party production accessibility scanning as well as automated nightly internal accessibility scanning of a test system in a production environment.
  
### Results  
  
The internal accessibility scanning of a pre-production test system identified 0 urgent and 0 secondary non-conformance issues in 98.76% of nightly and ad-hoc scans.  In the remaining 1.24% of scans only secondary issues were uncovered all of which were eliminated prior to code changes reaching production systems.  Production accessibility scanning identified 0 urgent and 0 secondary non-conformance issues for the entire quarter.
  
### Discussion  
  
As expected no urgent non-conformance issues were identified in either live production or pre-production test systems.  In the rare occurrence that a secondary non-conformance issue was identified in testing, it was addressed and eliminated prior to reaching live production systems.
  
# Schedule of Key Milestones  



<table>
<tr>
<td><strong>Key Milestone</strong></td>
<td><strong>Care Setting</strong></td>
<td><strong>Date/Timeframe</strong></td>
<td><strong>Status</strong></td>
</tr>
<tr>
<td>Release of documentation for the Real World Testing to be provided to ACB and providers</td>
<td>All settings</td>
<td>Nov 15, 2021</td>
<td>Complete</td>
</tr>
<tr>
<td>Begin collection of information as laid out by the plan</td>
<td>All settings</td>
<td>Jan 1, 2022</td>
<td>Complete and ongoing</td>
</tr>
<tr>
<td>New certification of b.7, b.8, b.9</td>
<td>All settings</td>
<td>Q1, 2022</td>
<td>Delayed to Q2</td>
</tr>
<tr>
<td>Certification of additional CQMs to c.1, c.2, c.3 and QRDA SVAP</td>
<td>All settings</td>
<td>Q1, 2022</td>
<td>Delayed to Q2</td>
</tr>
<tr>
<td>Attest to Cures update version of b.2, e.1</td>
<td>All settings</td>
<td>Q1, 2022</td>
<td>Delayed to Q2</td>
</tr>
<tr>
<td>Follow-up with providers and authorized representatives to understand any issues arising with the data collection.</td>
<td>All settings</td>
<td>Quarterly, 2022</td>
<td>Q1 complete</td>
</tr>
<tr>
<td>Data collection and review.</td>
<td>All settings</td>
<td>Quarterly, 2022</td>
<td>Q1 complete</td>
</tr>
<tr>
<td>New certification of b.10, g.10</td>
<td>All settings</td>
<td>Q3, 2022</td>
<td>Development in progress</td>
</tr>
<tr>
<td>End of Real World Testing period/final collection of all data for analysis</td>
<td>All settings</td>
<td>Dec 31, 2022</td>
<td></td>
</tr>
<tr>
<td>Data analysis and report creation</td>
<td>All settings</td>
<td>January, 2023</td>
<td></td>
</tr>
<tr>
<td>Submission of Real World Testing Results to ACB</td>
<td>All settings</td>
<td>Per ACB instructions</td>
<td></td>
</tr>

</table>


  
# Attestation  
  
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
<td>04/15/2022</td>
</tr>

</table>



