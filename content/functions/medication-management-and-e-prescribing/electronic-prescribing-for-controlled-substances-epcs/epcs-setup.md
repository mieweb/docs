---
title: "EPCS Setup"
date: "2021-02-23T18:53:46.593Z"
url: "functions/medication-management-and-e-prescribing/electronic-prescribing-for-controlled-substances-epcs/epcs-setup.html"
author: Kyle Kocks
version: 199
id: "1ewJlY45OC5Ckr9fVLGCGGEbQJtDwhEl6-qYNlMGAjgk"
source: "https://drive.google.com/open?id=1ewJlY45OC5Ckr9fVLGCGGEbQJtDwhEl6-qYNlMGAjgk"
menu:
    main:
        name: "EPCS Setup"
        identifier: "1ewJlY45OC5Ckr9fVLGCGGEbQJtDwhEl6-qYNlMGAjgk"
        parent: "1zkK1rl_jKldqym-JOp7lpddt1zs9chV76LmPVcn4UAg"
        weight: 2010
---










[The Office of the National Coordinator for Health Information Technology](https://www.healthit.gov/) (ONC) offers a voluntary Health IT Certification Program, designed with requirements established from the implementation specifications and certification criteria standardized and adopted from the Secretary.  "The Program is run as a third-party product conformity assessment scheme for health information technology (health IT) based on principles of the International Standard Organization (ISO) and International Electrotechnical Commission (IEC) framework" ([About the ONC Health IT Certification Program](https://www.healthit.gov/topic/certification-ehrs/about-onc-health-it-certification-program)).



As a [Certified EHR Technology](https://www.cms.gov/regulations-and-guidance/legislation/ehrincentiveprograms/certification.html) (CEHRT), {{% system-name %}} meets *meaningful use* criteria for either eligible provider or hospital technology. In turn, healthcare providers using the EHR systems of certified vendors are qualified to receive federal stimulus monies upon demonstrating meaningful use of the technology — a key component of the federal government's push to improve clinical care delivery through the adoption and effective use of EHRs by US healthcare providers.



In addition, {{% system-name %}} is EPCS certified — ensuring e-prescribing of controlled substances is within full compliance of DEA requirements. This means, physicians interested in electronically prescribing controlled medications may employ a two-factor authentication to digitally sign and electronically transmit them, as needed. Following, is not only the information on transmission requirements of controlled substances and prescriptions, and the responsibilities expected of prescribers, but also how to set up EPCS in the {{% system-name %}}  system, and how providers and administrators go about acquiring all the required materials and level of identity proofing needed for electronic prescribing of controlled substances.





**Table of Contents**

{{% toc %}}

## 

Before you begin

Physicians who wish to electronically prescribe controlled medications must first obtain the required level of identity proofing and digital certificate token, used for digitally signing and transmitting controlled substances. Before EPCS can be set up within {{% system-name %}} , the following must be completed through IdenTrust, our partner and certification authority (CA) that is cross certified with the Federal Bridge Certification Authority and operates at a Federal Bridge Certification Authority basic assurance level or above ([1311.105](https://www.deadiversion.usdoj.gov/21cfr/cfr/1311/subpart_c100.htm#105)(a)(2)). For detailed instructions and guidance on the registration and certification process, see our [IdenTrust Registration & Certification Help Guide](identrust-certificate-registration-step-by-step.html):

* 59 incomplete Begin the IdenTrust certification selection process by navigating to our customized [IdentTrust Partner Page](https://www.identrust.com/partners/mie-medical-informatics-engineering). 112 incomplete Review the information and click the <strong>Buy Now</strong> button to initiate the Certification Selection Wizard. 113 incomplete Purchase the IdenTrust Global Common (IGC) USB Token. 114 incomplete Create the two (2) required passwords (through the [IdentTrust Partner Page](https://www.identrust.com/partners/mie-medical-informatics-engineering)):
    * Account password
    * Token passcode 

{{% note %}} **Do not forget this passcode**. You may request a replacement certificate from the IdenTrust Certificate Management Center; however, you will need to purchase a new SAFE HID USB token. [Contact IdenTrust](https://www.identrust.com/contact) for assistance with your purchase. For more information see the [IGC FAQs](https://www.identrust.com/support/faq/25). {{% /note %}}

* 60 incomplete Receive the Retrieval Kit from IdenTrust. 
* 61 incomplete Install the ActivClient Authentication Client Software (on ALL workstations being used for EPCS). 
* 62 incomplete Complete certificate retrieval. 
* 63 incomplete Test the certificate (following the instructions included in the retrieval kit). 
* 115 incompleteReview the Prescriber Responsibilities and Transmission Requirements prior to creating, signing, or transmitting controlled substance prescriptions.



{{% warning %}}EPCS prescribers must retain sole possession of the hard token. This hard token and password must not be shared with any other person. The prescriber must not allow any other individual use of the token, or to perform EPCS signing in the {{% system-name %}} system. Failure to secure the two-factor authentication credential may provide a basis for revocation or suspension.{{% /warning %}}


### Access Control

According to the Requirements for Establishing Logical Access Control, the prescriber must designate at least two (2) individuals to manage access control to the prescription application, with one required to be a DEA registrant with a two-factor authentication credential. What this means is there needs to be at least one (1) Designated Administrator and one (1) Designated DEA Registrant, for each location the prescriber is registered.

**Designated Administrator** - This individual is expected to assist the prescriber(s) with establishing access control to the prescription application, as well as verify DEA registration and State authorization(s) to practice and dispense controlled substances are current and in good standing. The Designated Administrator will enter the data to grant permission or revoke authorization for prescribing controlled substances.

{{% note %}}

The Designated Administrator is the ONLY user with the ability to enable/disable EPCS prescribers. This process requires the Designated DEA Registrant to be completed. MIE cannot be involved in the process of enabling EPCS prescribers.

{{% /note %}}


**Designated DEA Registrant** - This can be the only prescriber at a location, or it can simply be a designated DEA registrant with a two-factor authentication credential and the ability to issue controlled substance prescriptions. The Designated DEA Registrant will use the two-factor authentication credential to satisfy the logical access controls.

## User & System Setup 

Before addressing any of the system and user setup, it is important that the designated System Administrator has all of the necessary permissions and security settings updated, as needed. 

1. Navigate to the <strong>Access Control</strong> menu of the Control Panel.
2. Search for and find the user designated as the Administrator.
3. Click the <strong>Edit</strong> link in the <em>Options</em> column.
4. Click the <strong>Customize User Security</strong> link in the upper-right of the page.
5. Locate the <strong>Manage Users</strong> control setting, and select <strong>Manage All</strong> from the drop-down.
6. Scroll to the bottom of the page, enter a reason for the security change, and click the <strong>Update Individual Security</strong> button.

Similarly, before being able to fully utilize the prescription application, the E-Token Signature App will need to be installed to each Windows workstation being used for EPCS digital signing, along with any associated or supporting applications, found under the **Plugins** Control tab.

1. Navigate to the <strong>Plugins</strong> menu of the Control Panel.
2. In the upper-right corner, notice the three options available for EPCS:

![](epcs-setup.images/image1.png)

    1. <strong>Download MIE SSL App</strong> - This application should only be downloaded and installed if using the Cross-Browser E-Token Signature App.
    2. <strong>Download IE-Only E-Token Signature App</strong> - If using an Internet Explorer (IE) browser, download and install the IE-Only signature app. There is no need to install anything else with this.
    3. <strong>Download Cross-Browser E-Token Signature App</strong> - This application should be downloaded and installed if using an alternative web browser to IE (e.g., Chrome, Firefox, etc.). If using the Cross-Browser E-Token Signature App, be sure to also download and install the supporting MIE SSL App.
3. Download and install the application(s) to each Windows workstation being used for EPCS digital signing.

### EPCS Setup

In order to be able to electronically prescribe from the {{% system-name %}} system, MIE must first [enroll and verify providers through SureScripts](https://docs.google.com/document/d/1CofebAnz02InLwE8PxHVRFBfvRbzoSjBajFEk9RjaJ0/edit). To complete the verification process, ensure the prescribing user is created within the {{% system-name %}} system by performing the following:

1. Navigate to the <strong>Access Control</strong> menu of the Control Panel.
2. Search for and find the prescribing clinician needing e-prescribing privileges.
3. Simply click the <strong>Edit</strong> link in the <em>Options</em> column.



{{% tip %}} If the prescribing clinician is new to {{% system-name %}} , click the **Add User** link, to add the user/provider to the {{% system-name %}} solution. See [User/Provider & Department Management](../../system-administration/system-controls/user-provider-and-department-management.html) for more information on adding users/providers. {{% /tip %}}


4. Ensure these required fields are completed and up-to-date for SureScripts' verification:
    1. <strong>First Name</strong>: Full, legal first name.
    2. <strong>Last Name</strong>: Full, legal last name.
    3. <strong>Suffix</strong>: If the prescriber has a suffix (e.g., Jr., Sr., IV, etc.), this field must be used. Do not place suffixes in the Last Name field. The verification will be cancelled by SureScripts.
    4. <strong>Address1</strong>: The main element of the address for the location (i.e., street address, P.O. Box, company name, or c/o).
    5. <strong>Address2</strong>: The secondary elements of the location address, if any (e.g., suite, unit, building, floor, etc.).
    6. <strong>Work Phone</strong>: Enter full work number, including area code.
    7. <strong>Fax Number</strong>: Enter full fax number, including area code.
    8. <strong>DEA Number</strong>: Enter a valid, 9-character DEA Registration number.
    9. <strong>National Provider Id</strong> (<strong>NPI</strong>): Enter a valid, 10-character NPI number.



{{% note %}} Nurse Practitioners (NPs) and Physician Assistants (PAs) may be signed up to use SureScripts; however, a blank space must be entered into the DEA Number field using the space bar key. Upon submission, a reminder will be triggered about the required field. Simply acknowledge the reminder and continue to submit the page. **A valid NPI Number is still required for NPs and PAs to be certified with SureScripts**. {{% /note %}}


5. Locate the <strong>Electronic Prescriber</strong> checkboxes. These selections are intended for prescribers, only (i.e., users holding a National Provider Identifier (NPI) number, and/or DEA Registration number, and are legally allowed to prescribe). Place a check mark in the appropriate checkboxes:
    10. <strong>Send New Scripts</strong>: All prescribers must check this box to become certified with SureScripts, to electronically transmit prescriptions from the {{% system-name %}} system. If this box is not checked, prescriptions will be sent as individual faxes, rather than e-transmitted via SureScripts.
    11. <strong>Receive Refill Requests</strong>: Prescribers wanting to receive e-refill requests electronically should check this box. This enables applicable pharmacies to send electronic requests for refills, which appear on the E-Refills Alert Taskbar in {{% system-name %}} . If refill requests are preferred via manual fax and/or phone calls (i.e., not electronically), leave this checkbox unchecked.
    12. <strong>Send Cancel Rx</strong>: 
    13. <strong>Receive Change Requests</strong>: 
    14. <strong>Receive Fill Notices</strong>: 
    15. <strong>EPCS</strong>: This option must be selected to allow EPCS functionality. Only the System Administrator has access to this option. <strong>Per DEA regulations, two (2) individuals must be involved when setting or revoking EPCS privileges</strong>. Selecting the EPCS option enables the sending of electronic prescriptions for DEA Schedule II-V drugs.



{{% info %}}When the EPCS option is selected by the Designated Administrator, the following pop-up will display, prompting for the insertion of the two-factor authentication credential, followed by the password: ![](epcs-setup.images/image2.png){{% /info %}}


6. Verify the prescriber is a member of the appropriate department.
7. When all required fields are entered and the appropriate electronic prescriber boxes checked, click the <strong>Submit Edit</strong> button (or <em>Submit Insert</em> button, if a new user is being created).

## Prescriptions, Refill Requests, and Transmission Failures

The first thing to understand when prescribing from {{% system-name %}} is that a prescription record can be created and entered by certain clinical staff, office administrators, and prescribers, based on their established permissions and licensing. 

**As Clinical Staff, or Office Administrator** - Can create and enter the prescription record; however, clinical staff and administrators are not permitted to mark controlled prescriptions Ready to Sign, nor are they allowed to digitally sign a controlled prescription, to transmit electronically.

**As a Prescriber** - Can create and enter the prescription record. Required to mark prescriptions Ready to Sign and to digitally sign prior to electronic transmission. An authorized EPCS prescriber is not authorized to use their token to sign a prescription for a different prescribing physician.

Another important aspect of EPCS functionality is understanding the limitations and DEA regulations.

* The {{% system-name %}} system does not support EPCS transmission of detoxification/maintenance treatment.
* Schedule II prescriptions cannot exceed a 90-day supply in one single session for a medication with the same Name, Form, and Strength.
* Schedule III and IV prescription refills cannot exceed 5 refills, cannot process refill requests older than 6 months, and the Start Date must be today. Schedule III and IV prescriptions cannot be written for future dispense.

### Creating Prescriptions

All controlled substance prescriptions are dated and signed on the date they are issued. The prescription must contain:







* Full name of patient
* Address of patient
* Drug name
* Strength
* Form/Dosage
* Quantity
* Directions for use
* Name of EPCS-approved prescriber
* Address of EPCS-approved prescriber
* Registration number of EPCS-approved prescriber



{{% tip %}}

Even though providers are capable of electronically prescribing controlled substances, not all pharmacies are capable of receiving these electronic requests. {{% system-name %}} displays which pharmacies are EPCS-enabled when a pharmacy is selected for a patient. This is why we encourage all staff to review the **Preferred Pharmacy** and the **Mail-In Pharmacy** with the patient PRIOR to creating a prescription. When reviewing with the patient, use the help bubble to see the pharmacy types.

![](epcs-setup.images/image3.png)

{{% /tip %}}


For more detailed information on how to add and prescribe medications, see our [Prescribing/Adding Medications](../prescribing-adding-medications.html) help documentation.

### Marking Prescriptions <strong><em>Ready to Sign</em></strong>/Digitally Signing Prescriptions

As a part of EPCS certification, the CEHRT requires the practitioner to indicate each prescription is ready for signing. Because of this, a prescriber must review the prescriptions and mark each as Ready to Sign by checking the box(es). Digitally sign the prescription by clicking your (the prescriber's) name/link. **Be sure to read the legal statement before marking and signing**. 

![](epcs-setup.images/image4.png)

![](epcs-setup.images/image5.png)

An electronic controlled prescription will not transmit without the prescriber's token AND password. Ensure the token is inserted into the device, and provide the Token Passcode, when prompted. Failure to provide both will result in the medication(s) being placed in Unsigned Prescription Queue.

![](epcs-setup.images/image6.png)

{{% warning %}}

Authorized EPCS prescribers are not authorized to use their tokens to sign a prescription for a different prescribing provider. The prescriber must not allow any other individual use of the token, or to perform EPCS signing in the {{% system-name %}} system.

![](epcs-setup.images/image7.png)

![](epcs-setup.images/image8.png)

{{% /warning %}}


For more information on e-prescribing, see our [Medication Management & E-Prescribing](../../medication-management-and-e-prescribing.html) help documentation.

#### Batching Unsigned Prescriptions

Batching prescriptions is available; however, batching can only be preformed for one (1) single patient, at a time. Batching of multiple patients' prescriptions is prohibited. Furthermore, as a certified EPCS application, it is necessary for prescribers to individually sign EACH prescription. Therefore, we are unable to shortcut the authentication process (signing) of batched prescriptions, due to current DEA regulations.

1. When prescriptions are batched for a patient, the prescriber is able to mark all prescriptions as Ready to Sign. Note they are all for the same patient.



![](epcs-setup.images/image9.png)



2. Upon hitting the <strong>Sign</strong> button, the following Token Logon window will display. The prescriber will see this pop-up once for EACH medication that is batched. 



![](epcs-setup.images/image10.png)



3. Follow the process of signing and clicking <strong>OK</strong>, until all prescriptions have been authenticated.

### Prescription Modifications

Editing or correcting a prescription AFTER a prescription has been signed (but before transmission) clears the Ready to Sign indication. **This will require the prescriber to digitally sign the prescription, again**.

For more detailed information editing medications, see our [Edit/Change Medications](../edit-change-medications.html) help documentation.

### EPCS Refill Requests

{{% note %}}

{{% system-name %}} limits or does not allow EPCS transmission for the following Medication Classifications:

* Detoxification/Maintenance Treatment
* <strong>Schedule II</strong> - Prescription cannot exceed a 90-day supply, in a single session, for a medication with the same Name, Form, and Strength.
* <strong>Schedule III & IV</strong> – Prescription refills cannot exceed five (5) refills. Refill requests older than 6 months cannot be processed. Prescription Start Date must be Today, therefore cannot be written for future dispense.

{{% /note %}}


Approving any of the following EPCS refill requests will require the indication of the prescription Ready to Sign AND the digital signature to allow transmission:

* Refill Request
* Approve w/Edit
* Changing a Refill Request

![](epcs-setup.images/image11.png)

For more information on managing refill requests, see our documentation on the [E-Scripts tab](../e-refills-e-scripts-tab.html), [All E-Refills tab](../e-refills-all-e-refills-tab.html), [Refill All](../refill-all.html), [My E-Rx Errors tab](../e-refills-my-e-rx-errors-tab.html), and [My Pending Refills tab](../e-refills-my-pending-refills-tab.html).

### Printing Controlled Substances

As an EPCS-certified application, {{% system-name %}} cannot allow the transmission of a prescription that has previously been printed.

![](epcs-setup.images/image12.png)

Similarly, any controlled prescription that has previously been electronically transmitted can only be printed as a COPY, not intended for dispensing. The prescription will print with a Note to Pharmacist reading **COPY - not for dispensing. Sent on: (date/time)**.

![](epcs-setup.images/image13.png)

### EPCS Transmission Failures

In the event of a failed electronic transmission of a controlled prescription, {{% system-name %}} allows permitted users to PRINT the prescription (if allowed in your state). The prescription will print with a Note to Pharmacist reading **Failed on: (date/time)**.

![](https://lh5.googleusercontent.com/wJhxQqFIua3L-TlK-Z6erkTFHMGu604FcjeYIYsaH3kkyljCWW8AqSQtvW9vMR-3UGVLEs2SKmhzXce09heaXhLHSoZWB5t0L52FPEMPAIPVcm9dwm1FeHVqNdXF8wohz6D-PrYmjxJ9_nGq3w)

{{% info %}}

Remember to review the [Practitioner Responsibilities](prescriber-responsibilities-and-transmission-requirements.html) for unsuccessfully delivered electronic prescriptions.

{{% /info %}}


## Disabling a Token

It is important to understand the Requirements for Establishing Access Control as an Individual Practitioner, because it is the responsibility of the prescriber to notify IdenTrust AND Medical Informatics Engineering, in the event that the token is compromised in any way, within 1 business day, to be added to the Certificate Revocation List. **The practitioner's ability to prescribe controlled substances will be revoked**. A practitioner whose token has been compromised and used by another individual must also contact the DEA - Office of Diversion Control.



IdenTrust Customer Support

* 888-339-8904 (within the US)
* 801-924-8140 (outside the US)

Medical Informatics Engineering Customer Support

* 888-498-3484, Option 1

U.S. Department of Justice - Drug Enforcement Administration (DEA) — Office of Diversion Control

* [https://www.deadiversion.usdoj.gov/Inside.html#contact_us](https://www.deadiversion.usdoj.gov/Inside.html#contact_us)

### Terminated Practitioners

If a practitioner leaves the practice, IdenTrust does not need to be notified.

The practitioner's EPCS privileges will need to be disabled by the Designated Administrator in the {{% system-name %}} system. The Designated Administrator is responsible for notifying their MIE Implementer, providing the Termination Date to be submitted to Accounting, per standard protocol.

## Reports

There are four reports that are of particular interest when managing and auditing EPCS usage in the {{% system-name %}} system:

**E-Meds Report**

* This report will assist the Administrator in auditing all medications printed, faxed, or electronically transmitted. 
* For more information, refer to our [Print/Fax/Transmit Prescriptions](../print-fax-transmit-prescriptions.html) and [E-Meds Report](../../reports/e-meds-report.html) help documentation. 

**Audit Event Log**

* All EPCS-related activity displays under <strong>EPCS Event Description</strong>.
* For more information, refer to our [View User Audit Log](../../system-administration/system-controls/view-user-audit-log.html) help documentation.

**EPCS Incident System Report**

* Client is responsible to review the EPCS Incident Report on a daily basis. Clients are responsible to report unauthorized incidents to MIE, IdenTrust, and the DEA, within 1 business day.
* This report is designed to assist the Administrator in auditing any <em>unscheduled</em> EPCS activity.

**Controlled Substances Report**



