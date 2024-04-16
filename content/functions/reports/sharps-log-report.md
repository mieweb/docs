---
id: '1PORLZX1Ild3LyNw0O7YZ97r4Ybf0ybND0TA5r5f3KCE'
title: 'Sharps Log Report'
date: '2024-01-25T19:18:33.576Z'
version: 108
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1PORLZX1Ild3LyNw0O7YZ97r4Ybf0ybND0TA5r5f3KCE'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Sharps Log Report

The Sharps Log report is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../sharps-log-report.assets/46ccf93b18dd7d0c582ed235f1cd1b2c.png)

This is a regulatory report to track needlestick injuries for cases/incidents having a Nature of Body Part documented as Contaminated Sharp.  Charts marked as 'Exclude from Quality Care' are omitted from report output.

{{% tip %}}
The case/incident does **not** have to be OSHA recordable to populate this Sharps Log report.
{{% /tip %}}

The report requires an Incident (Case) Start and End date at a minimum to run the report. There are other filters to help when searching for a specific encounter date range, patient, condition, type of device or onsite location of injury.

![](../sharps-log-report.assets/91ca4f6ca1f303715dfa262e11066266.png)

### Sharps Log Report Criteria

The Sharps Log report has the following logic criteria/logic built in order to be listed on the output of this report:

* Onsite Injury/Illness locations to be configured as EO charts must have:
    * the EO onsite injury/illness work location/site chart must be configured as an onsite injury location within the Locations Hierarchy system editor
        * <strong>and</strong> its Chart ID entry (in Locations Hierarchy) must be linked to its own EO or PO chart
        * <strong>and</strong> its Status entry (in Locations Hierarchy) must active or inactive (deleted locations hierarchy locations are omitted from the system, the case/incident and from the OSHA 300/301 Case Data Report)
* Your case/incident workflows must utilize the Case encounter section on specific encounter types deemed appropriate for your business
* The case/incident does <strong>not</strong> need to be documented as <em>OSHA Recordable</em> to appear on this report (date determined recordable field)
* The case/incident must have been documented as an <em>onsite location</em> (and the onsite location is configured as stated in first bullet above) if want the <em>Location</em> column to populate
* Your case/incident workflows must utilize the Nature of Injury/Illness as <em>Contaminated Sharp</em>

### Report Output

The following will describe where each column of data pulls from, within the encounter that is linked to a case/incident with a Contaminated Sharp nature of injury/illness.

![](../sharps-log-report.assets/4f795c661e75441678e42791419fa157.png)

#### Date column

The Date and time of injury or onset of illness case field will populate the Sharps Log in the *Date* column.

![](../sharps-log-report.assets/e8c4c09e6a5e77f2c76784f497399cc5.png)

#### Case Number column

{{% system-name %}} will assign a unique case number automatically once the Case data has been entered and saved in an encounter. The case number will populate the Sharps Log in the *Case* column.  The Case number is also visible from the Case section (in the encounter) in edit mode, it will display in the encounter header when the encounter is set current and a case is linked to that encounter and it is also viewable on the Cases chart tab.

![](../sharps-log-report.assets/6e8bd0942f5f5857434b95316092b898.png)

#### ICD10/ICD9 column

Using the Symptoms/Diagnosis section of the encounter where the Contaminated Sharp case/incident was originally created, document a diagnosis.  The diagnosis and ICD codes will populate the Sharps Log in the *ICD10/ICD9* column.

![](../sharps-log-report.assets/121a05dc3785e1f745f8c0565c828285.png)

#### Type of Device, Brand, and Laceration/Puncture columns

When the Nature of Injury and Illness is documented as *Contaminated Sharp*, the nature of injury and illness case section will expand on the screen to offer fields to free text in a response for Type of device, Manufacturer and to indicate if the wound was a Laceration or Puncture. These fields will populate the Sharps Log in the *Type of Device, Manufacturer, and Laceration/Puncture* columns.

![](../sharps-log-report.assets/0ef9f336dd93fa5b5f70be2da6e5ab7f.png)

#### Where Occurred column

Text keyed into the required *Where the event occurred* field of the case/incident encounter section will populate the Sharps Log in the *Where Occurred* column.

![](../sharps-log-report.assets/3febc32543e867b826098bb9c6ae4581.png)

#### How Occurred column

Text keyed into the required *What happened? Tell us how the injury occurred* field of the case/incident encounter section will populate the Sharps Log in the *How Occurred* column.

![](../sharps-log-report.assets/5d7a947142f6e8b850c7e5d7fc1bb94d.png)

### Location column

If the contaminated sharp injury occurred onsite, the onsite location needs to be selected in the *Please select location* field of the case/incident.  These onsite location choices are configured for the system using Locations Hierarchy.  The onsite location selected in this field then displays on the Sharps Log in the *Location* column.  If the injury occurred offsite, the Location column will be blank on the Sharps Log.

![](../sharps-log-report.assets/6580dac3b2a62120ed16ca4efc1a445f.png)

#### Initial Visit Date column

Using the Encounter top section of the encounter where the Contaminated Sharp case/incident was originally created, the encounter Date of Service will populate the Sharps Log in the *Initial Visit Date* column.

![](../sharps-log-report.assets/de5e52e12584d3ab34971e2339270315.png)

### Sharps Exposure Details - custom section

Your system can ask for a customized Sharps Exposure Details section to be added.  Please contact your MIE Implementer or Deployment Consultant.  The Sharps Exposure Details custom section has additional fields on the case as pictured below. This data is collected and ONLY displays on the original initial reported case. This data does not pull forward to future visits where all other (out of the box supported case/incident fields above) will continue to pull forward.

![](../sharps-log-report.assets/1635ebe060d49d3fa5d3834997905d75.png)

### Download Sharps Log report to a CSV format

The Sharps Log report is easily downloadable into a CSV format.  Simply click the *Show CSV* button to generate the report's output into a CSV downloadable file.  Store to your folder location of choice.

![](../sharps-log-report.assets/3ca44e4e9f63d5ea6a37b087808df12e.png)

The CSV file will be in the specific column order with column titles labeled as the Sharps Log shows.

![](../sharps-log-report.assets/f8aca1941b4e39eecd2c2ab423c7594a.png)

### Print Sharps Log

The Sharps Log report is easily printable. Simply click the *Print* button to print the report's output.

![](../sharps-log-report.assets/48632aa3d36571ec5f8d3f4d29ce337c.png)

A printable screen will display where the user may use the browser's print function to print the displayed report.

![](../sharps-log-report.assets/1f78605cd704c0d8df2adef2fe953386.png)
