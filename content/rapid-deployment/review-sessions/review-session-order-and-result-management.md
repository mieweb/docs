---
id: '1FudJugExyRigdADyiv5Wo8TbTUWo5of7YmQdUM_atuU'
title: 'Review Session - Order and Result Management'
date: '2024-02-14T23:47:45.773Z'
version: 49
lastAuthor: 'squarterman'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=orders&s=list_editor&t=List+Editor&tabmodule=admin&tabselect=Orders-List+Editor'
  - 'https://system/?f=orders&s=order_panels&t=Order+Panels&tabmodule=admin&tabselect=Orders-Panels'
  - 'https://system/?f=layout&module=PicklistOrders&name=PicklistEditor&tabmodule=admin&tabselect=Orders-Pick+Builder&tabmodule=admin&tabselect=Orders-Pick+Builder'
  - 'https://system/?f=admin&subfunc=obscodes_manager&t=Observation+Codes&tabmodule=admin&tabselect=Observation+Codes'
  - 'https://system/?f=admin&subfunc=obscodes_manager&view=flowsheet'
  - '../../functions/order-and-result-management/observation-flowsheets.md'
  - '../../functions/system-configuration/document-type-tab.md'
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - '../../functions/e-chart/patient-summary-interactive-chart-tab.md'
  - '../../functions/document-management/printing-and-print-definitions/label-printing-feature.md'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager'
  - '../../functions/system-configuration/locations-management.md'
  - 'https://system/?f=layout&module=reports&name=reports&tabmodule=reports'
  - 'https://system/?f=layout&module=reports&name=Utilization&tabmodule=reports&t=Utilization&tabmodule=reports&tabselect=Utilization'
  - 'https://system/?f=layout&module=reports&name=Orders&tabmodule=reports&t=Orders&tabmodule=reports&tabselect=Orders'
  - '../../functions/order-and-result-management/e-orders-refer-to-advanced-search.md'
  - '../../functions/order-and-result-management/e-orders-add-order-requests.md'
  - '../../functions/order-and-result-management/order-requests-grid.md'
  - '../../functions/order-and-result-management/e-orders-chart-tab.md'
  - '../../functions/order-and-result-management/orders-view-recent.md'
  - '../../functions/document-management/documents-and-forms/link-documents-to-order-requests.md'
  - '../../functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting.md'
  - '../../functions/encounters/tests-and-procedures-section-remove-delete-edit.md'
  - '../../functions/health-surveillance/due-list.md'
  - 'https://www.mieweb.com/wiki/Orders_(ORM%5EO01)_Inbound_and_Outbound'
  - 'https://www.mieweb.com/wiki/Lab_Result_CSV_API'
  - 'https://www.mieweb.com/wiki/Sending_HL7_Messages_To_WebChart'
  - '../../functions/reports/orders-due-report.md'
  - '../../functions/reports/orders-usage-report.md'
  - '../../functions/order-and-result-management/observation-codes-editor.md'
  - '../../functions/order-and-result-management/observation-code-merging.md'
  - '../../functions/order-and-result-management/observations-tab.md'
source: 'https://drive.google.com/open?id=1FudJugExyRigdADyiv5Wo8TbTUWo5of7YmQdUM_atuU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Order and Result Management Demonstration</strong>
* <strong>Overview</strong>
* <strong>System Configuration</strong>
    * <strong>Orderable Items</strong>
    * <strong>Order Panels</strong>
    * <strong>Order Picklists</strong>
        * <strong>Restricted Sets</strong>
    * <strong>Observation Flowsheets</strong>
    * <strong>Document Types</strong>
    * <strong>Results Encounter</strong>
    * <strong>Order Request Document</strong>
    * <strong>Order Quick Links Portlet</strong>
    * <strong>Refer To Field of Order Requests</strong>
    * <strong>PIN Authentication</strong>
    * <strong>Order Request Routing and Tracking</strong>
    * <strong>Order Request Label</strong>
    * <strong>HL7 Lab Interface</strong>
    * <strong>System Settings</strong>
* <strong>Reporting</strong>
* <strong>Resources</strong>

## Overview

The {{% system-name %}} Order and Result Management module provides the necessary tools for ordering, customizing, delivering, and tracking orders and order requests. Through computerized provider order entry (CPOE), {{% system-name %}} streamlines the processes involved in order and result management. In general, order requests can be created from the visit encounter or from the chart. Once an order request is generated, it can easily be printed, faxed, or electronically transmitted, as needed.

Implementing the established standards of CPOE allows {{% system-name %}} to provide intuitive methods of order entry, distribution, completion, and tracking. With the Order and Result Management module, orders can be entered from the point-of-care, checked for utilization and duplication errors, communicated electronically to the appropriate staff/department, and made actionable by way of the provided information and prompt delivery. This serves to reduce wait times, errors, and possible duplicates, all with just a few clicks.

Additional functionality includes built-in flexibility, so that clients may address specific workflows or create automated processes, as needed. For example, clients participating in varying types of surveillance may be interested in establishing panel business rules that automatically populate surveillance order requests on the Due List. Also, an optional HL7 bidirectional interface is available for purchase, which can be configured to electronically submit orders, receive results, and track statuses. {{% system-name %}} has the ability to integrate with most national (and many regional) labs and health information exchanges (HIEs) for discrete HL7 order submissions and results. Taking advantage of a bidirectional HL7 interface is incredibly beneficial, not just for its provided interoperability, but also for its improvements to efficiency and tracking, and the ability to automatically complete orders sent and resulted electronically.

Standard functionality includes:

* Order creation from chart or visit encounter
* Print/fax/electronically transmit orders and results
* Health Surveillance Membership Due List
* Specimen label printing
* Order tracking
* Flowsheet templates

## System Configuration

The following system configurations help define the functions and overall performance of the Order and Result Management module. Any customizations needed for accommodating specific workflows, desired outcomes, reporting interests, or general business needs will be discussed, below.

### Orderable Items

Orderable items, such as tests, procedures, and the like, will need added and configured in the [Orders-List Editor](https://system/?f=orders&s=list_editor&t=List+Editor&tabmodule=admin&tabselect=Orders-List+Editor), found in the **Control Panel**.

It is important to review all requisition forms used for ordering, as well as any in-house tests and/or procedures being routinely performed. This information will be compiled and programmed into the Orders-List Editor as orderable items.

{{% info %}}
If an HL7 bidirectional interface has been purchased, it is important that all orderable items are set up according to the interface specifications.
{{% /info %}}

While in the Orders-List Editor, review all order items provided in the {{% system-name %}} standard product, and edit or remove order items according to prescribed workflows and ordering needs. In other words, determine which order items are needed and how results are expected to be captured. Specify which order items need to point to layouts or flowsheets for discrete data and observation capturing, as well as which items simply need a free-text field for resulting. The method by which results are captured (i.e., discrete data fields, discrete values, or free-text results) affects reporting.

### Order Panels

Order Panels are specific groupings of orderable items, not to be confused with Health Surveillance Panels. Order Panels consist of multiple orderable items, which tend to be routinely ordered together, or as a bundle. This allows users to order routine tests/procedures by way of one panel, rather than multiple, individual orders.

For instance, a practice may regularly order the Drug Screen Panel 5, which tests for Amphetamines, Cocaine Metabolite, Marijuana, Opiates, and PCP (Phencyclidine). However, the practice may have a new client (e.g., Better Corp) that regularly requests Barbiturates be included for their drug screening requirements. Rather than individually order each screening, the practice can create a new Order Panel, which they maybe call *Better Corp Drug Screen*, including all six (6) of the necessary screenings. This can, then, be ordered for each patient, making ordering multiple routine tests and/or procedures fast and easy, saving time and improving efficiency.

Using the [Orders-Panel tab](https://system/?f=orders&s=order_panels&t=Order+Panels&tabmodule=admin&tabselect=Orders-Panels) of the **Control Panel**, create all Order Panels relevant to the prescribed workflows and needs of the business. Once the necessary Order Panels are created, it is important to review the layout of the generated order requisition when using Order Panels. This requisition will display the components of the Order Panel, along with the relevant information needed for processing.

### Order Picklists

Order Picklists provide another method for expediting the ordering process in {{% system-name %}} . Picklists differ from Order Panels in that the Picklists are lists of orderable items to be selected, as needed, and Order Panels are orderable items consisting of multiple orders. To review the predefined picklists that come with the standard product, navigate to the **Control Panel** sidemenu, and select the [Orders-Pick Builder tab](https://system/?f=layout&module=PicklistOrders&name=PicklistEditor&tabmodule=admin&tabselect=Orders-Pick+Builder&tabmodule=admin&tabselect=Orders-Pick+Builder).

While in the Orders-Pick Builder, use the **Set Filter** dropdown to view each of the categories and associated orderable items. Viewing the various sets available, it can be seen that Picklists simply allow users to more easily find orderable items by common categories, or groupings. New picklists can be added, or the available picklists can be edited as needed, to align with any prescribed workflows and business needs. For instance, create order picklists to simplify the ordering needs associated with lab orders, radiology orders, PT/OT, referrals, etc. Or at the very least, build order picklists according to any order forms or requisitions currently in place.

Similarly, any possible in-house testing can include those orderable items performed in-house to be added to the *In House Testing* picklist. This means that clients should review and edit the orderable items in the *In House Testing* picklist to reflect all testing performed and resulted in-house. This is also important, because the Tests & Procedures encounter section defaults to this picklist when ordering a test or procedure during a visit, and therefore should remain in the system.

Like the *In House Testing* picklist, the *Recommendations* picklist should remain in the system, as well. The contents of the picklist can be edited according to workflow needs and client requirements. The Recommendations encounter section defaults to this picklist when ordering a recommendation to document during the visit.

{{% info %}}
There are three picklists used for employee and employer portals: *Bulk Orders*, *Portal Messages*, and *Supervisor Messages*. These picklists can be tweaked to meet workflow needs and client requirements, but they should remain in the system, as well.
{{% /info %}}

#### Restricted Sets

If necessary, picklists can be created and customized per department. Utilizing the **Restricted Sets** system setting limits a specified picklist to a specific department, as needed. Enabling this system setting will restrict departments from viewing and using the picklists of other departments.

When enabled, the system setting value indicates which picklist to restrict. For a picklist to be available to only a specific department, a department needs to be created with the same name as the picklist being restricted. Ensure the necessary users are linked to the department, so they have access to the picklist, as needed. The order picklist is then restricted to only the users that are linked to the department of the same name as the picklist.

### Observation Flowsheets

In {{% system-name %}} , observation flowsheets are used for adding and tracking stored observations. They can be used as graphic summaries of recorded or stored observations (e.g., vitals, weight, medications, lab results, etc.); they can be used for varying things, such as entering extensive lab panels with several resultable values, or for recording questionnaire responses, which may utilize the flowsheet functionality for entering all of the data quickly, providing an easy-to-digest graphic summary for review.

To result orders via flowsheets requires a little configuration, but at the same time, provides a convenient way to quickly result and record clinical data. Orders can be created to match a flowsheet, and through establishing the specific layout for the order, can be pulled in and used within encounters to result, record, and update stored observations. However, resulting orders does not always have to be done via a flowsheet. When creating the relevant order item in the Orders-List Editor, rather than mapping the order to a specific flowsheet and layout, select **None**. This will not link a specific layout to the order item, meaning a generic free-text field will be available whenever resulting that specific order item.

{{% info %}}
Observation flowsheet names must match order names *exactly*, in order for the flowsheet to appear to users for data entry, or when resulting orders in encounters.
{{% /info %}}

Consider what orders will need to be built according to flowsheet layouts, and ensure existing configurations are suitable for the needs of the practice, and create new order items and flowsheets, as needed. To review or begin creating and configuring new flowsheets, navigate to the [Observation Codes tab](https://system/?f=admin&subfunc=obscodes_manager&t=Observation+Codes&tabmodule=admin&tabselect=Observation+Codes) of the **Control Panel**. Once there, click the [Display Flowsheets link](https://system/?f=admin&subfunc=obscodes_manager&view=flowsheet) in the upper-right corner. Click **Edit** on any flowsheet to view the contents and make any necessary changes. For additional information on setup and configuration, check out the [Observation Flowsheets](../../functions/order-and-result-management/observation-flowsheets.md) help documentation.

### Document Types

It is important to consider the types of results being stored and indexed in charts. When scanning, indexing, or uploading result documents, the {{% system-name %}} system needs to know the type of document being stored, so that it can be indexed correctly. Review the types of results that will be uploaded and recorded in the system, so that the appropriate [Document Types](../../functions/system-configuration/document-type-tab.md) can be added to the system, using the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types) of the **Control Panel**.

{{% tip %}}
Document types can be as general or specific as needed, meaning a document type can be as simple as **Xray Result**; or for those looking for specificity in their reporting, a precise document type such as **Chest Xray Result**, may better serve the business needs.
{{% /tip %}}

### Results Encounter

The Results encounter is used whenever an order is sent out to be performed by an outside facility (via an Order Request), and the results are received back at the practice. Users can complete the Order Request and document the results of the order electronically, capturing the results discretely by way of the Results encounter. Review the default sections of the Results encounter, and be sure all sections needed to meet any prescribed workflows or business needs are considered.

### Order Request Document

As noted, Order Requests are generated when sending off an order to be performed by an outside entity. Orders can be established with specific document types, if necessary. This means whenever an Order Request is generated from a picklist, it can be saved and stored according to its designated document type. This can be helpful for tracking, routing, reporting, and auditing. Be sure to review what Order Requests, if any, will need saved as unique document types.

{{% info %}}
If a document type is not specified, an Order Request will default to the document type WCORDER, which simply displays **Order** as the document description.
{{% /info %}}

### Order Quick Links Portlet

When working within a chart, users have access to a **Summary** chart tab, where portlets are available for quickly viewing and adding information pertaining to the chart. Think of the Summary chart tab as a type of face sheet, where all of the information and functionality can be acquired through available portlets–a portlet being a type of widget, which can be added or removed from the Summary chart tab, as needed.

The **Order Quick Links** portlet is a particularly useful portlet designed to provide quick access to in-house testing/procedures via quick links. All of the order items displayed in this portlet are determined by the order items placed in the **Quick Visit Orders** picklist. Consider what links need to be available when using the Order Quick Links portlet, and ensure the necessary configuration goes into associating the appropriate orders to the Quick Visit Orders picklist.

{{% tip %}}
These same picklist order items are also visible in the Visit Orders section of the Visit encounter, also designed for quick ordering.
{{% /tip %}}

A system setting determines which order picklist the Order Quick Links portlet will display. By default, the *Orders Portlet Picklist* system setting is set to Quick Visit Orders, by default. This indicates to the system that the Order Quick Links portlet of the Summary chart tab will offer quick order selections designated by the Quick Visit Orders picklist. The system setting value can be changed to an alternative order picklist, if necessary. Whichever picklist is specified as the value of the system setting is the picklist that will generate the options in Order Quick Links portlet of the Summary chart tab.

For more information, check out the [Patient Summary](../../functions/e-chart/patient-summary-interactive-chart-tab.md) documentation.

### Refer To Field of Order Requests

On the Order Request entry screen, the **Refer To** field is where users specify what facility, entity, organization, or outside provider the order is being sent to, so that the Order Request may be completed. The Refer To field can be set up two different ways, depending on the type of system and practice. When reviewing and analyzing prescribed workflows and business needs, so that the default setup can assuredly be attuned to the choices needed when referring out for tests/procedures, consider the following:

One method of configuration for the **Refer To** field provides the names of individuals tied to a specified {{% system-name %}} department. What this means is that any individuals linked to the specified department would be available for selection for the Refer To field. The department would need to be set up in the Access Control menu if it does not already exist. Additionally, the *Refer To Departments* system setting would need the department name set as its limiting value. By default, this system setting value is blank, meaning no specific department has been mapped to provide selections for the Refer To field, but rather *all* users can be selected as an option for this field. With the value set to the appropriate department name, the Refer To field will limit the available selections to only those individuals linked to the specified department.

{{% tip %}}
The *Refer To Departments* system setting can have multiple departments listed for its value.
{{% /tip %}}

An alternative method for mapping Refer To options is by way of the Provider Management module, where provider charts, or provider organization charts, can be flagged as **Referrable Entity**. Clients utilizing this method would need to enable the *Use Charts* system setting, as well.

{{% info %}}
If the *Use Charts* system setting is enabled, the *Refer To Departments* system setting is not respected. Whenever *Use Charts* is enabled, the appropriate provider and provider organization charts need to be set to Referrable Entity = Yes, so that each flagged chart displays as a Refer To option for selection in Order Requests.
{{% /info %}}

### PIN Authentication

As an optional security feature, {{% system-name %}} provides a means to authenticate users entering orders by way of a required PIN (personal identification number). If this security feature is enabled, users must enter their unique PIN when accessing, editing, or adding orders to charts. Additionally, the *Authenticate Order with PIN* system setting must be enabled for full functionality. Any user with ordering permissions must then have a unique PIN entered in the **PIN** field of their user account creation screen.

### Order Request Routing and Tracking

Users can easily fax, print, and track orders with {{% system-name %}} . For instance, the Tasking module can be utilized in processes involving order creation and completion, notifying specific users/departments whenever a specific order is generated or completed. Likewise, for those clients using an HL7 lab interface, or any order interfaces, they may be interested in configuring e-sign or tasking rules to trigger a Review Request to specific users/departments for all incoming results. Because of this, be sure to consider what types of tasking automation may benefit the business needs and order workflows.

### Order Request Label

Though not available in the standard product by default, labels can be programmed and customized to print specific chart information. This allows them to be used for specific purposes, such as affixing to orders being sent out, or when sending a vial with an order. The label can be printed with all of the relevant data and affixed to the vial, prior to sending.

The *Order Label* layout must be established within {{% system-name %}} , with configuration done by MIE. Once the layout is available, the **Label** link will display in the Orders module. To view the Label link and print any custom configured labels, ensure the **Auto Print on Summary** system setting is enabled. Then, to print a label associated with an Order Request, simply click the **Label** link *after* successfully creating the Order Request.

For additional details, check out the help documentation on the [Label Printing Feature](../../functions/document-management/printing-and-print-definitions/label-printing-feature.md).

### HL7 Lab Interface

(Only if purchased)

{{% system-name %}} uses the standard HL7 formatting when interfacing with local, regional, and national laboratories. When an interface is established between a lab and an {{% system-name %}} system, lab results coming into the system will automatically populate result values on the system Lab Report, as well as any mapped observation flowsheets, appropriate to the specific order item(s) and respective of the specific chart(s).

With a bidirectional lab interface, {{% system-name %}} can be configured more dynamically, so that lab processes may be streamlined, allowing users to submit orders, track order statuses, and receive results back into the system, all electronically. Lab results can trigger automatic tasking for review or electronic signature requests, and abnormal results will be flagged automatically and set to high priority. Additionally, by way of Logical Observation Identifiers Names and Codes (LOINC), information from multiple reference labs is easily standardized and displayed in electronic flowsheets, via the HL7 interface.

One thing to note is that results are displayed using lab-supplied reference ranges; however, {{% system-name %}} gives clinicians the ability to edit reference ranges in the observation flowsheets. Another feature is the ability to graphically display discrete lab data in order to identify or determine trends over time, and analyze trends in light of intervention points.

{{% info %}}
If set up with an orders interface with a lab vendor (e.g., LabCorp), the account number for that specific location must be entered in the [Locations Manager tab](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager) of the **Control Panel** for that location. When {{% system-name %}} sends the order electronically to the lab via the interface, that lab account number is sent with it. For more information, see the [Locations Management](../../functions/system-configuration/locations-management.md) documentation.
{{% /info %}}

### System Settings

When making an Order Request, there are several fields available to fill in, which can be designated as required or optional via system settings, as needed. Review the following system settings to ensure all workflow needs are considered, as they relate to order accuracy and order tracking:

**Require Bill Type** - Disabled, by default. If enabled (value **1**), the *Bill Type* field would be required before progressing on to generate and upload the Order Request.

**Require Collection Date** - Disabled, by default. If enabled (value **1**), the *Collection Date* field would be required before progressing on to generate and upload the Order Request.

**Require Diagnosis** - Disabled, by default. If enabled (value **1**), the *Diagnosis* field would be required for each order item in the Order Request. Users would select and confirm which diagnosis pertains to each order item.

**Require Location** - Enabled, by default. The *Location* field is required before being able to generate and upload the Order Request. Can be disabled (value **0**) if the location does not need specified.

**Require Ordering Physician** - Enabled, by default. The *Ordering Physician* field is required before being able to generate and upload the Order Request. Can be disabled (value **0**) if the ordering physician does not need specified.

**Require Scheduled Date** - Disabled, by default. If enabled (value **1**), the *Scheduled Date* field would be required before progressing on to generate and upload the Order Request.

**Number of Patient Conditions** - Default value is **4**, indicating that the most recent four (4) active conditions of the patient will pull in as possible diagnoses for the Order Request. Changing this setting to a value of zero (0) will prevent any diagnoses from displaying in the *Diagnosis* field of the Order Request.

**Save Diagnosis to Patient Conditions** - Enabled, by default. Order Requests may need a diagnosis indicated as a supporting reason to order a test/procedure. Since enabled, any diagnosis manually entered into the *Diagnosis* field will automatically save to the patient's active condition list. When disabled (value **0**), users may manually key in diagnoses, with no effect on the patient's active condition list.

**Number Order Autocompletes** - Enabled, by default. An *Additional Orders* autocomplete field is available, when enabled. This field offers users the ability to key in any additional order(s) that do not appear as quick items on the selected picklist. The *Additional Orders* field does not allow free text. If this system setting is disabled (value **0**), the system omits the *Additional Orders* autocomplete field from Order Request screens.

**Show ABN Link for All Patients** - Disabled, by default. If enabled (value **1**), the system will show a *Print ABN* hyperlink on all Order Requests for Medicare B patients (as defined by the PQRS system setting), but no hyperlink would display for any other patient charts. If value is set to a 2, the system will show a *Print ABN* hyperlink for all Order Requests for all patient charts, regardless of Medicare B status or CPT requirements.

## Reporting

The {{% system-name %}} [Reports module](https://system/?f=layout&module=reports&name=reports&tabmodule=reports) allows administrators to access all the [utilization reports](https://system/?f=layout&module=reports&name=Utilization&tabmodule=reports&t=Utilization&tabmodule=reports&tabselect=Utilization) designed for order tracking and auditing. These reports are helpful, because they can be used for reviewing pending due list order items, outstanding order requests, as well as for reviewing overall orders usage. These are the standard [orders reports](https://system/?f=layout&module=reports&name=Orders&tabmodule=reports&t=Orders&tabmodule=reports&tabselect=Orders) available in the Reports module:

* <strong>Orders - Count</strong>
* <strong>Orders - Count by Physician</strong>
* <strong>Orders - Created</strong>
* <strong>Orders Due</strong>
* <strong>Orders Pending</strong>
* <strong>Orders - Un-Ordered</strong>
* <strong>Orders - Usage</strong>

{{% info %}}
A *Referred Orders* grid report is available in the referrable entity's Provider Organization chart, only if the Order Request entry screen is set up to refer to charts.
{{% /info %}}

## Resources

### Help Documentation

* [Advanced Search-Refer To of E-Orders](../../functions/order-and-result-management/e-orders-refer-to-advanced-search.md)
* [E-Orders-Add Order Request](../../functions/order-and-result-management/e-orders-add-order-requests.md)
* [E-Orders-Order Requests Chart Tab-Grid](../../functions/order-and-result-management/order-requests-grid.md)
* [E-Orders Chart Tab](../../functions/order-and-result-management/e-orders-chart-tab.md)
* [E-Orders View Recent](../../functions/order-and-result-management/orders-view-recent.md)
* [Link Document to E-Order](../../functions/document-management/documents-and-forms/link-documents-to-order-requests.md)
* [Tests and Procedures-Adding-Applying-Completing-Resulting](../../functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting.md)
* [Tests and Procedures-Edit-Delete-Remove](../../functions/encounters/tests-and-procedures-section-remove-delete-edit.md)
* [Due List Chart Tab](../../functions/health-surveillance/due-list.md)
* [Public - Orders Inbound and Outbound Interface Specs](https://www.mieweb.com/wiki/Orders_(ORM%5EO01)_Inbound_and_Outbound)
* [Public - Lab Result CSV API](https://www.mieweb.com/wiki/Lab_Result_CSV_API)
* [Public - Sending HL7 Messages into System](https://www.mieweb.com/wiki/Sending_HL7_Messages_To_WebChart)
* [Orders Due Report](../../functions/reports/orders-due-report.md)
* [Orders Usage Report](../../functions/reports/orders-usage-report.md)
* [Observation Code Editor](../../functions/order-and-result-management/observation-codes-editor.md)
* [Observation Code Merging](../../functions/order-and-result-management/observation-code-merging.md)
* [Observation Flowsheets](../../functions/order-and-result-management/observation-flowsheets.md)
* [Observations Tab](../../functions/order-and-result-management/observations-tab.md)
