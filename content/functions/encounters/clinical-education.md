---
id: '1BMQbUu4dtP5zu3RrRMyg-MVFiH0acXyiEX0_n3zZnRg'
title: 'Clinical Education'
date: '2025-06-16T16:13:53.389Z'
version: 85
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'libraries.md'
  - 'encounter-protocols.md'
  - 'copy-from-previous-exam.md'
  - '../system-administration/interfaces/patient-education-interface.md'
source: 'https://drive.google.com/open?id=1BMQbUu4dtP5zu3RrRMyg-MVFiH0acXyiEX0_n3zZnRg'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
The Patient Education encounter section name has changed to Clinical Education and is found within the Plan area of an encounter.

To document clinical education, simply click on the grey section title to expand open the Clinical Education encounter section. The Clinical Education section provides the ability to Generate Clinical Education from your forms library if custom configured to batch forms and allows users to acknowledge clinical education material given to the patient and document what was given.

![](../clinical-education.assets/60e31fbb67bd10ad8055a8422134fba9.png)

## Summary Generation/Sending

Several quick selection options are available within the Clinical Education section.

![](../clinical-education.assets/1c89f9d11fa0acfe4f0f1cb5f657f4bf.png)

* <strong>Generate Clinical Education:</strong> Can be manually checkmarked on demand as needed or a system setting (Generate Clinical Summary) can be enabled to always have this checkmarked here.

![](../clinical-education.assets/de19abf64e1d296a405b5f21a77c7d2c.png)

* If the <em>Generate Clinical Education</em> box gets checkmarked, the Patient Clinical Visit Summary has been updated to make it more uniform, compact, and easier to read as a handout given to the patient (or shared to the portal) on the conclusion of their visit. The updated Visit Summary uses 3 main layouts of: Clinical Summary, Vitals, & Vitals_list to populate the contents.
    * The Clinical/Visit Summary is a standard additional view that is generated.  An additional view for the Clinical (Visit) Summary is configured in the Encounter Exams editor.

![](../clinical-education.assets/7942fa2ec186e446e6d61b950f956f39.png)

![](../clinical-education.assets/b9afe047a4eb6cc49c710affdbd3d417.png)

* <strong>Send Copy to NoMoreClipboard.com:</strong> Can be manually checkmarked on demand as needed or a system setting (Send clinical summary to NMC) can be enabled to always have this checkmarked here or be set to hide it from use.

![](../clinical-education.assets/4f7755904cf756855591aebc69c12ff2.png)

* <strong>Clinical Education Material Given:</strong>  Checkmarking is a quick reportable way for the user to acknowledge clinical education material given to the patient.

## Clinical Education Comments

Within the expanded Clinical Education section, there is a free text option to type in comments.  Use the free text field, speech to text dictation icon, or use the previous values or library macros on the far right to quickly get the Clinical Education documented.   For more information on library macros refer to [Libraries](libraries.md).

![](../clinical-education.assets/924687d427d082689df56ba93a3bb988.png)

NOTE: Clinical Education fields (when in expanded mode) reflect any chief complaint protocol(s) selected.  Otherwise, if no chief complaint protocol is designated on the encounter, the Clinical Education section will default to offering our standard free text comment field. For more information on chief complaint protocols, please see separate guide [Encounter Protocols](encounter-protocols.md).

## Copy from Previous Exam

Within the Clinical Education encounter section, there is an icon that offers *Copy from Previous Exam* functionality.

![](../clinical-education.assets/cfeda8d666b2a719f781d7274bd625c3.png)

The *Copy from Previous Exam* icon pops up a window to allow you to select Clinical Education data that you wish to copy from the chart's prior encounter(s) to this current encounter.

![](../clinical-education.assets/0e7c87befe56c513e30c5e327443ec07.png)

For more detailed information, please refer to guide [Copy from Previous Exam](copy-from-previous-exam.md#copy-existing-visits).

## Patient Education Interface

{{% system-name %}}  has an optional ability to interface with Patient Education resources such as WebMD Ignite (formerly Healthwise). This is a billable add-on along with monthly costs that can be quoted out by your MIE Implementer. WebMD Ignite patient instructions integration then must be turned on and configured to your system. See guide [Patient Education Interface](../system-administration/interfaces/patient-education-interface.md#patient-education-interface).
