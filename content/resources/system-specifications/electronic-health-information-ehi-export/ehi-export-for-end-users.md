---
id: '1-ZghkeZW86JVJ5pTNjqtJqz2uOD6imwgA8EGma-Hiv4'
title: 'EHI Export for End Users'
date: '2023-11-16T15:47:40.506Z'
version: 97
lastAuthor: 'horner'
mimeType: 'text/x-markdown'
links:
  - 'https://www.ecfr.gov/current/title-45/part-164/section-164.501#p-164.501(Designated%20record%20set)'
  - 'https://www.healthit.gov/test-method/electronic-health-information-export'
  - 'ehi-export-technical-details.md'
source: 'https://drive.google.com/open?id=1-ZghkeZW86JVJ5pTNjqtJqz2uOD6imwgA8EGma-Hiv4'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Introduction

The Electronic Health Information (EHI) Export provides authorized users with the ability to download the designated record set (DRS) as defined by [45 CFR 164.501](https://www.ecfr.gov/current/title-45/part-164/section-164.501#p-164.501(Designated%20record%20set)) in a computable format for one or multiple patients as defined by [§170.315(b)(10)](https://www.healthit.gov/test-method/electronic-health-information-export).  The export from {{% system-name %}} provides DRS data in JSON format.  For further details regarding the technical content of the export, please see the [Technical Details](ehi-export-technical-details.md) page.

## Export for Administrators and Superusers

System administrators and superusers have access to perform an EHI Export for a single patient, a set of patients for a single provider, or all patients in their system.

To perform an export, a user should navigate to Control Panel->Interfaces->EHI Export.  As shown below, three export options will be available.

* If exporting a single patient, select the patient from the autocomplete and click the Single Export button.
* If exporting all patients in the system, click the Export All button.
* If exporting patients for a single provider, select the provider from the dropdown menu and click the Provider Export button.

![](../ehi-export-for-end-users.assets/5d50c74dda022b94cfb22a0732f2f721.png)

## Export for Clinical Users

Clinical users have access to perform an EHI Export for any single patient to whom they have access.

To perform an export, a user should navigate to Control Panel->Interfaces->EHI Export.  A user can then select the patient from the autocomplete and click the Single Export button.

![](../ehi-export-for-end-users.assets/525081618ca33295b2ef8cd9c4533db3.png)
