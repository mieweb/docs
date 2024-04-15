---
id: '1XuuEIvktT5TkE9GYEBduTnXgH40mjGyyCy_j7ElMAB0'
title: 'Bubble Forms'
date: '2020-03-06T20:04:39.113Z'
version: 58
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../printing-and-print-definitions/print-definitions.md'
  - 'form-documents.md'
  - '../scanning-and-indexing/indexing-bubble-forms.md'
  - '../scanning-and-indexing/indexing.md'
  - 'vision-data-entry.md'
  - 'audiogram-data-entry.md'
  - 'biometric-data-entry.md'
  - 'ekg-data-entry.md'
  - 'pft-data-entry.md'
  - 'x-ray-results-data-entry.md'
  - '../../system-administration/interfaces/device-interface-audio-system.md'
  - '../../system-administration/interfaces/device-interface-audio-tremetrics-maico.md'
  - '../../system-administration/interfaces/device-interface-ekg-system.md'
  - '../../system-administration/interfaces/device-interface-pft-system.md'
  - '../../system-administration/interfaces/device-interface-cholestech-ldx.md'
  - '../../system-administration/interfaces/device-interface-piccolo-system.md'
  - '../../system-administration/interfaces/device-interface-vision-system.md'
  - '../../system-administration/interfaces/device-interface-vital-signs.md'
  - '../../system-administration/interfaces/device-interface-welch-allyn-spirometry.md'
  - '../../encounters/working-in-a-legacy-encounter.md'
  - '../../encounters/working-in-a-visit-encounter.md'
source: 'https://drive.google.com/open?id=1XuuEIvktT5TkE9GYEBduTnXgH40mjGyyCy_j7ElMAB0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Bubble forms are document type templates with special formatting (i.e., optical marks) allowing for documented data to be collected and stored discretely, as observations, within {{% system-name %}} . This is achieved through standard optical mark recognition (OMR), which is most well known through scantron use and standardized testing. When a bubble form is filled out, scanned, and indexed into the {{% system-name %}} system, the optical marks are detected and coded as observations.

Bubble forms are versatile, as well. Bubble forms can be developed so that a stack of them can be printed and taken onsite, where they can be filled out and scanned/indexed, accordingly. Bubble forms also work well added to Print Definitions, particularly for providers that do not use interfaced equipment. For more information on [Print Definitions](../printing-and-print-definitions/print-definitions.md), see the help documentation of the same name.

In general, when entering procedure/observation data into the {{% system-name %}} system, there are three methods to consider:

1. Data entry from a bubble form, via scanning and indexing
2. Semi-manual entry through a device interface, when applicable
3. Manual entry in an encounter

Once the data is entered, it will be stored as discrete data and reflected in a respective flowsheet and/or report.

## Bubble Form

All of the available, individual bubble forms are accessible from the Forms Library. Bubble forms can be chart-specific or unassociated/generic. For more information about using forms and their programmability, check out the [Form Documents](form-documents.md) documentation.

To utilize a bubble form to record information and index it into a chart, simply navigate to the **Forms Library** and print the preferred form. After the form has been completed, just scan the form into the system and index it, accordingly. If any of the indexed information needs edited immediately after scanning, use the confirmation window to verify the values were read correctly, prior to validating. Once the scan and values are confirmed, the data will index into the chart in context, as appropriate. To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../scanning-and-indexing/indexing.md) documentation.

### Available Bubble Forms

Currently, there are several bubble forms to choose from within the {{% system-name %}} system. Below is a list of currently developed bubble forms, labeled with the associated test/procedure/observation intended to be collected.

* [Vision](vision-data-entry.md)
* [Audiogram](audiogram-data-entry.md)
* [Biometric](biometric-data-entry.md)
* [EKG](ekg-data-entry.md)
* [PFT](pft-data-entry.md)
* [X-ray Results](x-ray-results-data-entry.md)

## Manual Entry

There are alternative, manual processes outside of using and scanning in bubble forms. These options include using an interfaced device and importing data into the system, which can be edited and/or updated, manually; or by using the appropriate encounter or adding and imputing the results as test/procedure results within an encounter. Both of these methods are also highly effective.

### Load From Device

Loading data into the system from an interfaced device is going to vary slightly, based on the information being acquired, the device being used, and the device model. We currently support device interfaces and have documentation on the following devices and types of interfaces:

* [OMI Audiometric Data Management Software](../../system-administration/interfaces/device-interface-audio-system.md)
* [Tremetric and Maico Audiogram Systems](../../system-administration/interfaces/device-interface-audio-tremetrics-maico.md)
* [Welch-Allyn CardioPerfect EKG System](../../system-administration/interfaces/device-interface-ekg-system.md)
* [OMI Sensormedics PFT System](../../system-administration/interfaces/device-interface-pft-system.md)
* [Cholestech LDX System](../../system-administration/interfaces/device-interface-cholestech-ldx.md)
* [Abaxis Piccolo Xpress System](../../system-administration/interfaces/device-interface-piccolo-system.md)
* [Titmus i500 System](../../system-administration/interfaces/device-interface-vision-system.md)
* [Welch-Allyn Spot Vital Signs System](../../system-administration/interfaces/device-interface-vital-signs.md)
* [Welch-Allyn CardioPerfect Spirometry System](../../system-administration/interfaces/device-interface-welch-allyn-spirometry.md)

If a device or interface type is not represented, above, please reach out to our Help Desk. We will gladly work with clients to develop an interface that best suits the business needs.

### Add to Encounter

If preferred, adding result data into the system can be performed manually by entering the information directly into an encounter. This option can be performed in various ways, particularly from the Tests & Procedures section of the encounter.

Once in the **Tests & Procedures** section of the encounter, a search can be performed using the autocomplete field and adding the necessary test/procedure to the exam visit. Otherwise, the test/procedure can be selected from the **Due List** and added to the exam visit; or what is more, the test/procedure can be added by using the **Picklist** option, where it can be selected from a predefined list of choices. For more information, see the [General Encounter](../../encounters/working-in-a-legacy-encounter.md) and [Dynamic Encounter](../../encounters/working-in-a-visit-encounter.md) documentation.

## Reporting

The {{% system-name %}} system has extensive reporting capabilities. Indexed bubble form data is not excluded from the available options. To view the current reports available within {{% system-name %}} , navigate to the **Reports** sidemenu. All reports are organized by topic, where most bubble form data is captured under the **Visits** reports. If there is not a report option for an established interface, specific group data, or another business need, please do not hesitate to contact the Help Desk. We are happy to work with clients to determine what information is needed and the level of effort required, so we can then establish new, useful reports in our system. Additional information regarding using and viewing reports can be found in the Reports documentation.
