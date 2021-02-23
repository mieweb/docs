---
title: "Completed Orders Import Tool"
date: 2020-03-17T02:25:23.687Z
url: "general-functionality/system-administration/data-migration/completed-orders-import-tool.html"
version: 32
id: 1kGK2cFMtPN8GSfO9bTam5OR7Kzc26nnEnAh1LKT2uVI
source: https://drive.google.com/open?id=1kGK2cFMtPN8GSfO9bTam5OR7Kzc26nnEnAh1LKT2uVI
menu:
    main:
        name: "Completed Orders Import Tool"
        identifier: "1kGK2cFMtPN8GSfO9bTam5OR7Kzc26nnEnAh1LKT2uVI"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4730
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) to create completed order records using the Completed Orders CSV API.

## Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Completed Orders CSV API. Technical details are provided in the remaining sections.

## Abstract

The Completed Orders CSV API imports patient order records.

It is valuable to recognize the following terminology as it pertains to MIE systems:

* A <strong>chart</strong> is a patient's electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient.
* A <strong>panel</strong> is a group of one-time or recurring testing items to performed for a person.
* An <strong>order</strong> is a specific procedure that has been completed for a patient, such as an EKG.

CSV refers to the type of file and format of data needed to import information into the {{% sys-name %}} system. API refers to how the data interacts with the system. See the [Import Overview](data-import-overview.html) page for a more detailed explanation of terminology.

## Workflow Considerations

If you have panels with action items set to trigger on *prior action (completed)* (see other help documentation named *Health Surveillance Panels-Actions.pdf*) then it's important to have specific order items in the employee's history to have the ‘last completed' date so the system knows when the last specific order item was marked complete in order to trigger other action items dependent on it. The *last completed date* is imported during the migration process to ensure that surveillance actions trigger with the appropriate due date.  This is needed for manual and/or {{% system-name %}} automated panel membership needs before the HR feed is turned on and before panel membership automation (if there is any) gets turned on and processes via the scheduled job.

Access the Data Import tab found in Control. See the [Data Import Tab](data-import-tab.html) help documentation.

Make sure all order items are listed in the import template tool that are part of the panel w/ a completion date, along w/ the representative event order item. Work with your MIE Implementer to import completed orders for Health Surveillance Panel needs.

![](../../../external_files/321cd15604fd57cfe699db7340e8d915.png)

Importing prior order id's as ‘completed' will show them as completed along w/ the date in the Due List View along w/ the comment from the import tool spreadsheet.

![](../../../external_files/d4630a0fb29386f116f5370fb51492e4.png)

## Specifications

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in {{% system-name %}} .

[Specifications for the Completed Orders CSV API are available here.](https://docs.google.com/spreadsheets/d/1OyCm9CuBEdQIlkXb7OtLIbnXB47UIFgnDzmR7J8j2Cw/edit#gid=0)

{{% tip %}}

The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.

{{% /tip %}}


Additionally, user instructions are available for importing data in {{% sys-name %}} .

### Column Definitions and Specific Coded Values

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.html) page.

### Field Requirements

The following fields (indicated in the Data Name column) are noted as required (R), recommended as best practice (BP), or optional (O) in the Completed Orders CSV API specification. Additional details and considerations are provided here.

#### Required

The following fields are required:

* <em>Chart ID</em> (encounter_orders.pat_id) and <em>Chart ID Type</em> encounter_orders.pat_id_type) are used to to correctly identify a chart.
* <em>Completed Date</em> (encounter_orders.completed_dt) is the date the order was completed.

#### Best Practice

Although this information is not required, it is considered a best practice to use them:

* <em>Due Date</em> (encounter_orders.due_date) is the date that the order(s) is due.

#### Optional Fields

These fields are optional:

* <em>Modified Date</em> (encounter_orders.modified_dt) is the date that the order was last modified.
* <em>Comments</em> (encounter_orders.comments) list any comments associated with the order.
* <em>Panel ID</em> (panel.panel_id) specifies the ID of the panel that this order is associated with.

## Examples of CSV

### Single Row Import

This example imports two completed orders due to there being two order_ids (this is useful when multiple orders have been completed at the same time):
`  encounter_orders.pat_id, encounter_orders.pat_id_type, encounter_orders.completed_dt, encounter_orders.modified_dt, encounter_orders.due_date, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.comments  10019, part:MIE, 12/23/2009, 12/24/2009, 12/25/2009, 4341, 4165, Two orders will be imported both with the dates provided 
`
### Multiple Row Examples

This first example shows how even though there may be one row utilizing multiple order_id columns, subsequent rows need not:`  encounter_orders.pat_id, encounter_orders.pat_id_type, encounter_orders.completed_dt, encounter_orders.modified_dt, encounter_orders.due_date, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.comments 10019, part:MIE, 12/23/2009, 12/12/2009, 12/25/2009, 4341, 4165, This row will create two orders which will share the date values given 01337, part:MIE, 09/20/2008, 09/22/2008, , 2314, , This row will only create one order without a due_date since it is blank  
`
This next example illustrates having six encounter_order.order_id columns:

`  encounter_orders.pat_id, encounter_orders.pat_id_type, encounter_orders.completed_dt, encounter_orders.modified_dt, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.order_id, encounter_orders.comments 10019, part:MIE, 12/23/2009, 12/12/2009, 4341, 4165, 5132, 4578, 2234, 8874, Six orders here 01337, part:MIE, 09/20/2008, 09/22/2008, 4875, 6628, 2348, , , , Only three orders in this row  
`
## Sample CSV Files

Example file with multiple order_id columns for four patients. Two of the patients will have their orders linked to the panel specified by the given panel_id [File:EncOrdCom Example.csv](https://miewiki.med-web.com/wiki/index.php/File:EncOrdCom_Example.csv)

## Related Pages

* [Data Import Master List](data-import-master-list.html)



