---
id: '1Uk4ZHLX68xzYUxKdfF2RyJm2wURwuTz18RhBo71CgLA'
title: 'CCDA, CCD and CCR Compatibility'
date: '2024-02-06T19:54:07.241Z'
version: 68
lastAuthor: 'dcarlson'
mimeType: 'text/x-markdown'
links:
  - 'http://www.hl7.org/v3ballot/html/infrastructure/vocabulary/ReligiousAffiliation.htm'
  - 'http://www.iana.org/assignments/language-subtag-registry'
  - 'https://miewiki.med-web.com/wiki/index.php/Social_History_Storage_and_Formatting'
  - 'https://miewiki.med-web.com/wiki/index.php/IHE_CDA_Information'
  - 'http://xreg2.nist.gov/cda-validation/index.html'
  - 'http://hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=83'
  - 'http://wiki.hitsp.org/docs/C83/C83-1.html'
  - 'http://hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=32'
  - 'http://wiki.hitsp.org/docs/C32/C32-1.html'
  - 'https://miewiki.med-web.com/wiki/index.php/HL7/ASTM_Implementation_Guide_for_CDA_Release_2_-_Continuity_of_Care_Document_(CCD)_Release_1'
  - 'https://miewiki.med-web.com/wiki/index.php/Quick_Start_Guide_to_the_HL7_Implementation_Guide:_CDA_Release_2_%E2%80%93_Continuity_of_Care_Document_(CCD)'
  - 'http://unitsofmeasure.org/'
  - 'http://aurora.regenstrief.org/~ucum/ucum.html'
  - 'https://miewiki.med-web.com/wiki/index.php/CCR_Specifications'
  - 'https://miewiki.med-web.com/wiki/index.php/C-CDA_Specifications'
  - 'http://www.cdapro.com/'
  - 'https://sitenv.org/ccda-smart-scorecard/'
  - 'https://oncprojectracking.healthit.gov/wiki/display/TechLabTU/ONC+One+Click+Scorecard'
  - 'https://ttpedge.sitenv.org/ttp/#/validators'
source: 'https://drive.google.com/open?id=1Uk4ZHLX68xzYUxKdfF2RyJm2wURwuTz18RhBo71CgLA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Comparison Grid

CCD/CCR Sections, and our current Webchart storage capabilities
<table>
<tr>
<td>Information</td>
<td>CCD/C32/IHE Segment(s)</td>
<td>CCR Segment(s)</td>
<td>Webchart Capabilities</td>
</tr>
<tr>
<td>Patient Name</td>
<td>Prefix/Given(s) Family Suffix</td>
<td>Actor Info - Given, Middle, Family, Suffix, Title, NickName</td>
<td>100%</td>
</tr>
<tr>
<td>Address</td>
<td>streetAddressLine, city, state, postalCode, country</td>
<td>Address - type, line1, line2, city, county, state, postalCode, country</td>
<td>100%</td>
</tr>
<tr>
<td>Phone Numbers</td>
<td>telecom use="HP","WP",etc</td>
<td>telephone - value/type</td>
<td>100%</td>
</tr>
<tr>
<td>Email</td>
<td>telecom value='mailto:</td>
<td>Email/URL</td>
<td>100%</td>
</tr>
<tr>
<td>Gender</td>
<td>genderCode</td>
<td>Gender</td>
<td>100%</td>
</tr>
<tr>
<td>Marital Status</td>
<td>maritalStatusCode</td>
<td>Stored in SocialHistory Section</td>
<td>100%</td>
</tr>
<tr>
<td>Race</td>
<td>raceCode</td>
<td>Stored in SocialHistory Section</td>
<td>100% We are storing "R#" codes in the race field. We have functionality that returns the proper XXXX-X code from the rxdb_v1 race/ethnicity table based on that R code.</td>
</tr>
<tr>
<td>Ethnicity</td>
<td>ethnicityCode</td>
<td>Stored in SocialHistory Section</td>
<td>100% We are storing "E#" codes as an observation. We have functionality that returns the proper XXXX-X code from the rxdb_v1 race/ethnicity table based on that E code.</td>
</tr>
<tr>
<td>Religious Affiliation</td>
<td>religiousAffiliationCode (HL7 Religious Affiliation vocabulary. <a href="http://www.hl7.org/v3ballot/html/infrastructure/vocabulary/ReligiousAffiliation.htm">Link</a>)</td>
<td>Stored in SocialHistory Section</td>
<td><strong>No standard way of collecting at the moment</strong></td>
</tr>
<tr>
<td>Languages Spoken</td>
<td>languageCommunication</td>
<td>Nothing specifically defined -- Assumed to also be stored in SocialHistory Section</td>
<td>We are storing as observations, using IANA language codes from <a href="http://www.iana.org/assignments/language-subtag-registry">http://www.iana.org/assignments/language-subtag-registry</a>, and that gets put into the document</td>
</tr>
<tr>
<td>Next of Kin/Caregivers/Support Organizations</td>
<td>patient, guardian</td>
<td>Support</td>
<td><strong>We can store "Guarantor" information this way. We don't collect (AFAIK) any other "Next of Kin" or other care giver/support organization information.</strong></td>
</tr>
<tr>
<td>Healthcare Providers</td>
<td>documentationOf, serviceEvent, performer</td>
<td>HealthCareProviders</td>
<td>We have physician information as User-patient relations</td>
</tr>
<tr>
<td>Pharmacies</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.2.3</td>
<td>N/A</td>
<td>Pharmacy user/patient relations.</td>
</tr>
<tr>
<td>Employer/School contacts</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.2.2 (O)</td>
<td>Stored in SocialHistory Section</td>
<td>Employer field info in patients, fairly static though. Do we store school information in those columns by convention for children?</td>
</tr>
<tr>
<td>Insurance Providers</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.1.5.3.7</td>
<td>Payer</td>
<td>100% Insurance tables</td>
</tr>
<tr>
<td>Allergy/Drug Sensitivity</td>
<td>2.16.840.1.113883.3.88.11.32.6</td>
<td>Alerts</td>
<td>100% Allergy Tables</td>
</tr>
<tr>
<td>Conditions/Problems</td>
<td>2.16.840.1.113883.3.88.11.32.7</td>
<td>Problems</td>
<td>100% Condition Tables</td>
</tr>
<tr>
<td>Medications</td>
<td>2.16.840.1.113883.3.88.11.32.8</td>
<td>Medications</td>
<td>100% Medication/Prescription Tables</td>
</tr>
<tr>
<td>Pregnancy</td>
<td>Section which is basically just marked with SNOMED code if a patient is currently pregnant</td>
<td>N/A - Discussed as "coming soon" in 2006, but, has CCR progressed really since 2006? - Webchart puts pregnancies in CCR Conditions section</td>
<td>Active Pregnancy Condition on Conditions</td>
</tr>
<tr>
<td>History of Pregnancies</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.1.5.3.4</td>
<td>N/A - Discussed as "coming soon" in 2006, but, has CCR progressed really since 2006? - Webchart puts pregnancies in CCR Conditions section</td>
<td>Pregnancies in conditions table</td>
</tr>
<tr>
<td>Advance Directives</td>
<td>2.16.840.1.113883.3.88.11.32.13</td>
<td>AdvanceDirectives</td>
<td>100% In CCD.. if you mark observations as an "Advanced Directive" template ID, they will flow into this section. AFAIK, in both cases, this is NOT designed to actually SHOW the/a document, or give you any real information about it's contents, it is simply there to indicate an Advance Directive of some type (living will, healthcare proxy, resuscitation status, etc) does exist for the patient. It is up to the physician to obtain the correct document. Re: from C32 specs: "This section contains data such as the existence of living wills, healthcare proxies, and CPR and resuscitation status. NOTE: The existence of an Advance Directive of a particular type (e.g., intubation) is a signal to the provider that such a directive exists. When determining how to care for a patient, the provider is advised to review the Advance Directive directly, rather than relying upon summary information contained within the Registration and Medication History". I think right now we actually do try to "show" some information via what we did with IHE, I think if that comes up again with IHE we should raise a red flag with them requiring that, and IMO, be only concerned with marking that documents exist in the patients chart.</td>
</tr>
<tr>
<td>Immunizations</td>
<td>2.16.840.1.113883.3.88.11.32.14</td>
<td>Immunizations</td>
<td>100% Injection table... although, all injections are not technically "immunizations" correct (and not all immunizations are neccesarily injected(?))... seems like this might also be a place, other than observations, where we need to make some clarifications on types of data being stored.</td>
</tr>
<tr>
<td>Vital Signs</td>
<td>2.16.840.1.113883.3.88.11.32.15</td>
<td>VitalSigns</td>
<td>100% <strong>Stored in Observations, but, no good grouping of these</strong>. Per C32: "The differentiation between Vital Signs and Results varies by clinical context. Common examples of vital signs include temperature, height, weight, blood pressure, etc. However, some clinical contexts may alter these common vitals, for example in neonatology "height" may be replaced by "crown-to-rump" measurement."</td>
</tr>
<tr>
<td>Results</td>
<td>2.16.840.1.113883.3.88.11.32.16</td>
<td>Results (Contains the patient's pertinent Results - lab, imaging, interventional)</td>
<td>100% Per C32: "This module contains current and relevant historical result observations for the patient. The scope of "observations" is broad with the exception of "vital signs" which are contained in the Vital Signs sections". In CCD.. if you mark observations as "Lab Results" template ID, they will flow into this section.</td>
</tr>
<tr>
<td>Encounters</td>
<td>2.16.840.1.113883.3.88.11.32.17</td>
<td>Encounters</td>
<td>We do not currently put either CCD or CCR encounters section information into our files.</td>
</tr>
<tr>
<td>Procedures</td>
<td>2.16.840.1.113883.10.20.1.12</td>
<td>Procedures</td>
<td>100% Procedure tables</td>
</tr>
<tr>
<td>Family History</td>
<td>2.16.840.1.113883.10.20.1.22</td>
<td>FamilyHistory</td>
<td>100% Family History Tables</td>
</tr>
<tr>
<td>Social History</td>
<td>2.16.840.1.113883.10.20.1.15</td>
<td>SocialHistory - Defined in CCR to hold these coded description types: (Marital Status, Race, Ethnicity, Religious Preference, Living Situation, Employment, Tobacco Use, Alcohol Use, Recreational Drug Use, Toxic Exposure, Treatment Restrictions.)</td>
<td>100% In CCD.. if you mark observations as "Social History" template ID, they will flow into this section.<br />
<strong>For CCR, we dump everything in "Social History" for the most part.</strong><a href="https://miewiki.med-web.com/wiki/index.php/Social_History_Storage_and_Formatting">Social History Storage and Formatting</a></td>
</tr>
<tr>
<td>Medical Equipment</td>
<td>2.16.840.1.113883.10.20.1.7</td>
<td>MedicalEquipment</td>
<td>No proper place within webchart that these get stored currently. Might get represented as a condition (ie, "Pacemaker"), but, this is probably not the most proper place, and it would not then get listed in Medical Equipment sections of CCD & CCR, would get shoved into conditions instead.</td>
</tr>
<tr>
<td>Plan of Care</td>
<td>2.16.840.1.113883.10.20.1.10</td>
<td>PlanOfCare</td>
<td>Per CCD 2007: "The plan of care section contains data defining pending orders, interventions, encounters, services, and procedures for the patient. It is limited to prospective, unfulfilled, or incomplete orders and requests only.".<strong>Right now, this is somewhat undefined right now, I think we had things specifically put in to "pass" IHE, but, I don't know that that is standardized within Webchart.</strong></td>
</tr>
<tr>
<td>Hazardous Working Conditions</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.1.5.3.1 - IHE - Hazardous working conditions contains a narrative description of the patient's hazardous risks.</td>
<td>Stored in SocialHistory Section</td>
<td><strong>I know we collect a lot of this information for DOW, Lilly, etc. This info would basically be jammed into 'results' right now, instead of a section such as this.</strong></td>
</tr>
<tr>
<td>Functional Status</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.3.17 - IHE - The functional status section shall contain a narrative description of capability of the patient to perform acts of daily living.</td>
<td>FunctionalStatus</td>
<td>We don't specifically collect right now.</td>
</tr>
<tr>
<td>Foreign Travel</td>
<td>1.3.6.1.4.1.19376.1.5.3.1.1.5.3.6 - IHE - The foreign travel section contains only narrative text describing the patient's travel history.</td>
<td>N/A</td>
<td>We don't specifcially collect right now.</td>
</tr>
</table>

## Links to External Documentation

* [IHE_CDA_Information](https://miewiki.med-web.com/wiki/index.php/IHE_CDA_Information)
* The NIST validator is used to test the validity of the CDA documents: http://xreg2.nist.gov/cda-validation/index.html
* [PDF CCD/C83 Specification at HITSP](http://hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=83) In HTML: http://wiki.hitsp.org/docs/C83/C83-1.html
* [PDF CCD/C32 Specification at HITSP](http://hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=32) In HTML: http://wiki.hitsp.org/docs/C32/C32-1.html
* [HL7/ASTM Implementation Guide for CDA Release 2 - Continuity of Care Document (CCD) Release 1](https://miewiki.med-web.com/wiki/index.php/HL7/ASTM_Implementation_Guide_for_CDA_Release_2_-_Continuity_of_Care_Document_(CCD)_Release_1)
    * [Quick Start Guide to the HL7 Implementation Guide: CDA Release 2 – Continuity of Care Document (CCD)](https://miewiki.med-web.com/wiki/index.php/Quick_Start_Guide_to_the_HL7_Implementation_Guide:_CDA_Release_2_%E2%80%93_Continuity_of_Care_Document_(CCD))
* [Unified Code for Units of Measure](http://unitsofmeasure.org/) aka UCUM which is a [standard](http://aurora.regenstrief.org/~ucum/ucum.html) for units on observations.
* [CCR Specifications](https://miewiki.med-web.com/wiki/index.php/CCR_Specifications)
* [C-CDA Specifications](https://miewiki.med-web.com/wiki/index.php/C-CDA_Specifications)
* [cdapro.com](http://www.cdapro.com/)
* [ONC C-CDA Scorecard](https://sitenv.org/ccda-smart-scorecard/)

## CCDA Testing Protocols

* https://oncprojectracking.healthit.gov/wiki/display/TechLabTU/ONC+One+Click+Scorecard
* https://ttpedge.sitenv.org/ttp/#/validators

## DS4P Document Policies

* Webchart will include content when a CCDA document has a "restricted" level of data in the view of the CCDA document, as well as display the re-disclosure text provided in the CCDA document.
* Webchart does not take any other steps in the handling of the DS4P marked documents, the operators of the system with the document can choose how they want to handle the document.

## Template ID Sections in Observation Codes

This is a list of Template ID sections available to put on observation codes in webchart, and where, if anywhere, they would appear in the CDA/CCDA:

Template ID Sections in Observation Codes
<table>
<tr>
<td>WC Code Define</td>
<td>Label</td>
<td>CDA Section Appearing</td>
<td>CDA Document Types Appearing</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_CODED_RESULTS_SECTION</td>
<td>"LAB RESULTS"</td>
<td>Results</td>
<td>All</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_REVIEW_OF_SYSTEMS_SECTION</td>
<td>"REVIEW OF SYSTEMS"</td>
<td>Review of Systems</td>
<td>All</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_SOCIAL_HISTORY_SECTION</td>
<td>"SOCIAL HISTORY"</td>
<td>Social History</td>
<td>All</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_VITAL_SIGNS_SECTION_CODED</td>
<td>"VITAL SIGNS"</td>
<td>Vital Signs</td>
<td>All</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_ADVANCE_DIRECTIVE_SECTION_CODED</td>
<td>"ADVANCED DIRECTIVES"</td>
<td>ADVANCED DIRECTIVES</td>
<td>All</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HISTORY_OF_INFECTION_SECTION</td>
<td>"HISTORY OF INFECTION"</td>
<td>HISTORY OF INFECTION</td>
<td>ANTEPARTUM HISTORY AND PHYSICIAL</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HX_OF_PRESENT_ILLNESS_SECTION</td>
<td>"HISTORY OF PRESENT ILLNESS"</td>
<td>HISTORY OF PRESENT ILLNESS</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_MATERNAL_DISCHARGE_BABY_STATUS</td>
<td>"NEWBORN STATUS AT MATERNAL DISCHARGE"</td>
<td>NEWBORN STATUS AT MATERNAL DISCHARGE</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_NEWBORN_DELIVERY_SECTION</td>
<td>"NEWBORN DELIVERY INFORMATION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_CARE_PLAN_SECTION</td>
<td>"CARE PLAN"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_ANTEPARTUM_EDUCATION_SECTION</td>
<td>"ANTEPARTUM EDUCATION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_REASON_FOR_REFERRAL_SECTION</td>
<td>"REASON FOR REFERRAL"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_MODE_OF_TRANSPORT_SECTION</td>
<td>"MODE OF TRANSPORT"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HOSP_DISCHARGE_MEDS_SECTION</td>
<td>"DISCHARGE MEDS SECTION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HOSPITAL_ADMISSION_DIAG_SECTION</td>
<td>"HOSPITAL ADMISSION DX"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_ASSESSMENTS_SECTION</td>
<td>"ASSESSMENTS SECTION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_PROCEDURES_INTERVENTIONS_SECTION</td>
<td>"PROCEDURES AND INTERVENTIONS"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_MEDICATIONS_ADMINISTERED</td>
<td>"MEDICATIONS ADMINISTERED"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_INTRAVENOUS_FLUID_ADMIN</td>
<td>"INTRAVENOUS FLUIDS ADMINISTERED"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_PREGNANCY_HISTORIES_SECTION</td>
<td>"PREGNANCY HISTORIES"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HISTORY_OF_INFECTION_SECTION_CODED</td>
<td>"CODED HISTORY OF INFECTION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_HX_OF_PAST_ILLNESS_SECTION</td>
<td>"HISTORY OF PAST ILLNESS"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_ED_DISPOSITION_SECTION</td>
<td>"ED DISPOSITION"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_IHE_ALLERGIES_SECTION</td>
<td>"ALERTS"</td>
</tr>
<tr>
<td>OBS_TEMPLATE_ID_PATIENT_DEMOGRAPHICS</td>
<td>"PATIENT DEMOGRAPHICS"</td>
</tr>
<tr>
<td>OBS_TEMPLATE_ID_PATIENT_EXTENDED</td>
<td>"PATIENT EXTENDED DATA"</td>
</tr>
<tr>
<td>OBS_TEMPLATE_ID_PATIENT_ADMIN</td>
<td>"PATIENT ADMIN DATA"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_CCDA_INSTRUCTION_ENTRY</td>
<td>"PATIENT INSTRUCTIONS"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_CCDA_FUNCTIONAL_STATUS</td>
<td>"FUNCTIONAL STATUS"</td>
</tr>
<tr>
<td>CDA_TEMPLATE_ID_CCDA_CONSOLIDATION_ASSESSMENT</td>
<td>"CONSOLIDATION/RISK CATEGORY ASSESSMENT"</td>
</tr>
</table>
