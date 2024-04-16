---
id: '1586jAN5cRvb8QkKeCqlJXpTOuNYTxl5-W2wDl242mg0'
title: 'Review Session - Patient Registration'
date: '2020-02-27T21:24:28.695Z'
version: 38
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/Chart_Data_CSV_Import_Interface'
  - 'https://www.google.com/url?q=https://miewiki.med-web.com/wiki/index.php/Enterprise_Health_Human_Resources_Interface'
  - 'https://system/?f=layout&module=MASTER&name=CommonRegistrationPage&chart_type_value=Patient&relation_type_value=Employee&use_pat_id=-1&tabmodule=patsearch&tabmodule=patsearch&tabselect=Patient+Registration'
  - 'https://system/?f=admin&s=partmanager&tabmodule=admin&tabselect=Partition+Mgr'
  - '../../functions/patient-registration/patient-registration-tab-manual-patient-entry.md'
  - '../../functions/e-chart/editing-demographics.md'
  - '../../functions/e-chart/demographics-tab-summary.md'
  - '../../functions/document-management/documents-and-forms/picture-photo-documents.md'
  - '../../functions/system-administration/system-controls/partition-manager.md'
  - '../../functions/e-chart/insurance-summary-in-demographics-tab.md'
  - '../../functions/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md'
  - '../../functions/patient-registration/medical-record-numbers.md'
  - '../../functions/system-administration/system-controls/merging-accounts-charts-in-system.md'
source: 'https://drive.google.com/open?id=1586jAN5cRvb8QkKeCqlJXpTOuNYTxl5-W2wDl242mg0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Patient Registration Demonstration</strong>
* <strong>E-Chart Overview</strong>
* <strong>E-Chart</strong>
    * <strong>Patient Registration (Manual)</strong>
        * <strong>Demographics</strong>
        * <strong>E-Chart Photos</strong>
    * <strong>Relationships/User Roles</strong>
* <strong>System Configuration</strong>
    * <strong>Partitions and Partition Restrictions</strong>
* <strong>Resources</strong>

## Overview

Managing patient flow is vital to the effectiveness of any practice. Because of this, the {{% system-name %}} system provides fast and easily-navigated functionality for searching current charts and documents, as well as for registering all new patients.

{{% system-name %}} allows users to manually register individuals directly into the EHR by simply adding their demographic and insurance information into the system. Depending on the established processes, registration documents can be provided either before the appointment or during the check-in process, and a patient registrar can then review the submitted documentation, as needed.

As an additional benefit, {{% system-name %}} automatically detects potential duplicate records and allows merging by authorized users. Not to mention, custom configuration of demographic fields and integration with outside vendors is available as an add-on service, if necessary.

## E-Chart

Depending on the needs of the organization, entering and loading demographics can be accomplished manually, through a [one-time import](https://miewiki.med-web.com/wiki/index.php/Chart_Data_CSV_Import_Interface), or through HR interface automation. The more efficient and preferred method is importing demographics through an automated import process, or established [HR interface](https://www.google.com/url?q=https://miewiki.med-web.com/wiki/index.php/Enterprise_Health_Human_Resources_Interface). However, the information below will discuss the manual processes to consider when registering charts with the organization.

### Patient Registration

As noted, a standard chart is typically created through an established HR interface; however, the customer may manually register new patients by navigating to the **E-Chart** sidemenu and selecting the [Patient Registration tab](https://system/?f=layout&module=MASTER&name=CommonRegistrationPage&chart_type_value=Patient&relation_type_value=Employee&use_pat_id=-1&tabmodule=patsearch&tabmodule=patsearch&tabselect=Patient+Registration) at the top of the page.

![](../review-session-patient-registration.assets/ab1beee22b2e7404f4e4999814dc85f8.png)

Begin by entering some of the individual's information:

* Last Name (required)
* First Name (required)
* Date of Birth (required)
* SSN (optional)

Clicking the **Search** button searches existing charts for any matching records, avoiding the creation of potential duplicate charts. If any of the entered fields match existing information, a match rating will be assigned, and potential matches will display on-screen. Whenever registering new charts, it is important to verify a duplicate chart is not being created.

If the new chart does not retrieve any possible matches, the full registration screen will load. If matches were found, but the chart is unique, simply click the link to continue adding the chart. This will load the registration screen. All of the information that is added upon registration will populate the Demographics of the Admin chart tab. Fill out the registration fields, as appropriate.

When a field is set as a required entry, the field will display with red highlighting. As a default, Last Name, First Name, and Date of Birth are required fields. Required fields can be configured, as needed, and will be scoped and quoted separately, accordingly to the level of effort required.

{{% tip %}}
The Postal Code field will accommodate international postal codes and will display without autoformatting.
{{% /tip %}}

#### Demographics

To view any of the demographic information entered upon registration, navigate to the **Admin** chart tab of the individual's chart. The **Demographics** menu option is available from the Admin chart tab. When Demographics is selected, the page will load all of the information captured upon registration. Quick links are available for modifying or updating this information, as needed.

![](../review-session-patient-registration.assets/94ae9e6d26b6be8e1a1fbceb548ae4c4.png)

#### E-Chart Photos

Once a chart has been registered in the system, a photo of the patient can be manually uploaded, as needed. The Chart Photo function can also be disabled for the system. Simply click the **Add Photo** link available from either the **Summary** chart tab or the **Demographics** chart tab. Browse to the photo needing uploaded. As an option, automating the process of adding photos to charts can be scoped and quoted separately, according to the level of effort required.

### Relationships/User Roles

An additional feature of the {{% system-name %}} system allows for establishing relationships between charts, as needed. Generally, relationships are automatically established when using an HR interface; however, to set a relationship manually, navigate to the **Demographics** chart tab (or search for the specific user to edit, in Access Control). Establishing a relationship between two charts simply links the charts, designating one as a specified user role (e.g., supervisor) and the other as another type of user role (e.g., employee).

Relationships between other charts (such as EO's, PO's, etc) can also be established to a patient/employee chart. This is maintained in the Contacts portlet of Summary chart tab or via edit demographics screen.

## System Configuration

Overall, there is minimal setup required for registering new charts within {{% system-name %}} . One tool, however, is worth consideration when setting up how data is expected to be partitioned in the {{% system-name %}} system. The [Partition Manager](https://system/?f=admin&s=partmanager&tabmodule=admin&tabselect=Partition+Mgr) is a powerful tool that not only helps determine the best approach for medical record numbers (MRNs) and how data is to be grouped; it also affects several areas of {{% system-name %}} , including registration, the Document Queue, and interfaces using DataSend Auto Routes.

If having an [HR Interface import](https://www.google.com/url?q=https://miewiki.med-web.com/wiki/index.php/Enterprise_Health_Human_Resources_Interface) for demographics, review the edit demographics & demographics/registration screens and see what additional layout fields need captured either manually or inserted and stored from the HR interface. HR Data Mapping will need to be performed by the MIE EDI team.

The Patient Demographic Header and/or grey patient info bar in {{% system-name %}} can be customized to show specific demographic fields (ex: Medical Anniversary Date or ‘supervisor' name field or hire date, etc). Identify what demographic data is important for staff to see quickly when working in a chart, vs demographic data that is only visible in other areas such as Demographics tab or Summary tab or grey bar header.

### Partition Restrictions

The [Partition Manager](https://system/?f=admin&s=partmanager&tabmodule=admin&tabselect=Partition+Mgr) is used by Deployment Consultants to create, update, and delete partitions, which are used to assign MRNs to charts, among other things. The Partition Manager can be used to set restrictions based on users, departments, or chart types, as needed. For example, a separate partition can be established for a separate entity, or for data from a location in another country, or even perhaps EAP data, industrial hygiene data, or data captured by providers interested in separating out sensitive records.

## Resources

### Help Documentation

* [Patient Registration Tab - Manual Patient Entry](../../functions/patient-registration/patient-registration-tab-manual-patient-entry.md)
* [Editing Patient Demographics](../../functions/e-chart/editing-demographics.md)
* [Demographics Tab Summary](../../functions/e-chart/demographics-tab-summary.md)
* [Picture-Photo Documents](../../functions/document-management/documents-and-forms/picture-photo-documents.md)
* [Partition Manager](../../functions/system-administration/system-controls/partition-manager.md)
* [Insurance Summary-Demographics Tab](../../functions/e-chart/insurance-summary-in-demographics-tab.md)
* [Medical Contacts-Relationships and User-Patient Relationships](../../functions/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.md)
* [Medical Record Numbers](../../functions/patient-registration/medical-record-numbers.md)
* [Merging Charts in System](../../functions/system-administration/system-controls/merging-accounts-charts-in-system.md)
