---
id: '1LvVHFC0nuX0iQKEVkfAnWdP0kBNnMjwig09V7JTCurc'
title: 'Depart Instructions'
date: '2025-06-02T13:49:17.235Z'
version: 87
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../system-configuration/macros.md'
  - 'encounter-protocols.md'
source: 'https://drive.google.com/open?id=1LvVHFC0nuX0iQKEVkfAnWdP0kBNnMjwig09V7JTCurc'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
Depart Instructions encounter section is available to document depart instructions to the patient within an encounter.  Depart Instructions encounter section utilizes flowsheet configuration functionality.

![](../depart-instructions.assets/c7639ef9663bbc1ab0452b2c26f288f9.png)

The default flowsheet that Depart Instructions points to is named *Depart Instruction* in the flowsheet editor. Altering this flowsheet allows your system to capture unique or custom information for your practice to document in an encounter within the Depart Instructions encounter section.

![](../depart-instructions.assets/5578ef5278bbd720f5dff02fdc4cf88d.png)

## Macros

Macros offered in the Depart Summary encounter section are a way to quickly insert predefined text with minimal user input.

![](../depart-instructions.assets/4dc65dc384b5f7ea406311fcf41f0859.png)

For additional information on configuring and utilizing macros that can be utilized within the Depart Instructions encounter section, please see separate guide [Macros](../system-configuration/macros.md#properties-of-a-macro).

## Chief Complaint Protocol

The Depart Instructions encounter section can also change to reflect specific questions/fields/contents to prompt a clinician to document, being related to a chief complaint protocol selected within the chief complaint encounter area.

![](../depart-instructions.assets/021f9539b47a2524260a87b6a7e102b2.png)

For additional information on configuring and utilizing Chief Complaint protocols that can be utilized within the Depart Instructions encounter section, please see separate guide [Encounter Protocols](encounter-protocols.md).

## Visit Summary

If the encounter is configured to generate a Patient Clinical Visit Summary upon close & archive, depart instructions encounter section contents will be included in that Patient Clinical Visit Summary document.

![](../depart-instructions.assets/0ff06ef3dcbd26a0d19ed0e8197f58cc.png)

The Clinical/Visit Summary is a standard additional view that is generated on encounters upon close & archive. This additional view for the Clinical (Visit) Summary is configured in the Encounter Exams editor.

![](../depart-instructions.assets/49e4805a68b7a8755f51dd0c83b47f01.png)

The Patient Clinical Visit Summary has been updated to make it more uniform, compact, and easier to read as a handout given to the patient (or shared to the portal) on the conclusion of their visit. The updated Visit Summary uses 3 main layouts of: Clinical Summary, Vitals, & Vitals_list to populate the contents and includes the Depart Instructions encounter section.
