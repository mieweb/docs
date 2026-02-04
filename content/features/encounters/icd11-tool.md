---
id: '1VwJxhYJnqELhJy469Infyw4bSkPZJUG9quLyRPEnXQA'
title: 'ICD11 Tool'
date: '2025-11-06T21:19:06.784Z'
version: 91
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://icd.who.int/en/'
  - 'https://icd.who.int/docs/codingtool/en/Searching/'
  - 'https://youtu.be/eU8MvkRjZpA?feature=shared'
  - 'https://icd.who.int/docs/codingtool/en/Postcoordination/'
  - 'https://youtu.be/dcz7MUXeN2M?feature=shared'
  - 'https://icd.who.int/docs/codingtool/en/Coding-note/'
source: 'https://drive.google.com/open?id=1VwJxhYJnqELhJy469Infyw4bSkPZJUG9quLyRPEnXQA'
wikigdrive: 'v2.15.30'
---
RC202509 in {{% system-name %}} supports ICD11 coding alongside the existing ICD10 and SNOMED codes, bringing the latest WHO International classification standards to condition management workflows.

## Show ICD11 on Conditions System Setting

ICD11 coding can be enabled via system setting *Show ICD11 on Conditions*, which then displays an ICD11 Post Coordination Search Tool within the {{% system-name %}} product.

![](./icd11-tool.assets/dd6095115e7e940787c52c2b6d1a95ef.png)

The ICD-11 is the eleventh revision of the International Classification of Diseases (ICD).  ICD11 integration is available in {{% system-name %}} via the system setting *Show ICD11 on Conditions*.  This enables ICD11 on Conditions for system wide use.

## Phase 1 ICD11 Integration within our system

For Phase 1 within {{% system-name %}} , ICD11 will integrate the following into the system:

* Allows access to an ICD11 Tool button within editing or adding an assessment to a chart or encounter.

![](./icd11-tool.assets/8e2a21b2263ffe2417893799a69713fe.png)

* ICD-11 offers an integrated online Browse and Coding Tool for routine use. For cases that require additional detail, ICD-11 supports post-coordination (combining stem and extension codes, or stem and stem codes) through tool-assisted workflows.
* The ICD11 Tool button opens an ICD11 Post-Coordination Tool screen to search for a condition name which then results in an output of various matching condition names with ICD11 codes for selection.
    * The ICD11 Post-Coordination Tool screen also allows other functionality.

![](./icd11-tool.assets/fb7a74f1e403013376795129cd330715.png)

* Allows ICD11 codes for conditions selected using the ICD11 Tool will be visible in these areas of  {{% system-name %}} :
    * Summary Chart Tab → Past Medical History portlet
    * Summary Chart Tab → Medical Summary portlet
    * Summary Chart Tab → Medical History portlet
    * Encounter Smart Plan section & right side Quick List/Problem List
    * Encounter Symptoms/Diagnosis section & right side Quick List/Problem List
    * Add Condition screen
    * Edit Condition screen
    * Remove Condition screen
    * Conditions Chart Tab → DataVis groupings
    * Conditions Chart Tab → Full Conditions View (datavis)

![](./icd11-tool.assets/b9ea898b4350ccb9be1f5fd9f4532dc0.png)

![](./icd11-tool.assets/6d9fdfc6a54095320284e4c07dc1876d.png)

## Additional Video's & Guides by WHO regarding their ICD11 Tool

* ICD11 Home Page by WHO: https://icd.who.int/en/
* Searching & Sorting help guide: https://icd.who.int/docs/codingtool/en/Searching/
* ICD11 Coding Tool How To Video by WHO: https://youtu.be/eU8MvkRjZpA?feature=shared
* Destination Entities help guide: https://icd.who.int/docs/codingtool/en/Searching/#destination-entities
* Post Coordination Tool help guide: https://icd.who.int/docs/codingtool/en/Postcoordination/
* Post Coordination How To Video by WHO: https://youtu.be/dcz7MUXeN2M?feature=shared
* Coding Notes help guide: https://icd.who.int/docs/codingtool/en/Coding-note/

## Phase 2 ICD11 Integration within our system

A future TBD Phase 2 in {{% system-name %}} will include visibility to selected ICD11 code/condition in orders, prescriptions, injections and interfaces that send diagnosis information (ie. billing, radiology orders, lab orders, HIE, etc).

## API Server URL System Setting

An additional system setting in {{% system-name %}} of *API Server URL* can be configured to set the server to use for the ICD11 Tool endpoint for ICD11 services. If this system setting string (value) is not uniquely configured, the API Server used will be one hosted locally by {{% system-name %}} as the default.

![](./icd11-tool.assets/254c6c03eff8cccae854f04f12a21b4b.png)
