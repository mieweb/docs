---
id: '1tDd1K4pAJM2OWgJtSob3r4xrSI-Fz8JQ3FeduEGjEHM'
title: 'Orders List Editor'
date: '2024-05-20T16:35:47.255Z'
version: 197
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1tDd1K4pAJM2OWgJtSob3r4xrSI-Fz8JQ3FeduEGjEHM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

The Orders List Editor, found in the Control Panel > Orders > Orders-List Editor, is where you will find a list of all orders in the database, along with the ability to add new, edit existing orders, or deactivate orders. In addition, this is where you will find any Questions associated with these orders. These questions are commonly referred to as "AOE" or Ask at Order Entry. AOE's provide additional details for specific tests/orders, such as Fasting or Pregnancy information. A single test may have multiple questions tied to it. Not all orders have questions associated with them.

## Terminology: DataVis Columns

![](../orders-list-editor.assets/dad08343e74b63bbeca288226b0a46af.png)

**DataVis**: An interactive spreadsheet-like grid showing data in columns and rows, which allows for filtering, sorting, and pivoting to obtain the view of the data desired.

**Type:** The order type is used to describe or categorize data into similar groupings. This allows the user to apply a filter to refine the search. Common types include "Labs (L)", "Health Surveillance (HS)", "Recommendations (RE)", etc.

**Question Count**: Displays the number of AOE Questions associated with each row.

**Order ID**: This is an internal, assigned number in the database and differs between systems.

**Name:** The Name column shows the order name or description.

**Code:** The Code is typically used within an interface transmission to clearly identify the order to the receiving Lab/interface engine, etc.

**Billing Code:** CPT or external code used for billing purposes.

**LOINC Code:**  Logical Observation Identifiers Names and Codes (LOINC) are used primarily for results coming into the system, to match "apples to apples". Medical Codify (Control Panel->Reference->Medical Codify) may be used to search for or reference LOINC codes, as well as other online resources.

**Layout:** Some orders have specific Exam Order Layouts assigned to them so they display consistently when results are manually entered, typically in the Tests and procedures section of an encounter.

**Doc Type:** A specific document type can be assigned to an order code within this editor, so that when these orders are resulted, a separate document is created.

**Appt. Type:** An appointment type can be tied to order codes within this editor so that when an order is on the due list and needs scheduled for an appointment, the system automatically selects the correct appointment type, with the proper amount of time allocated.

## Orders-List Editor

The Orders-List Editor shows all orders available in the system and is also where you can see which orders have Questions associated with them. Use this editor to add or edit orders, and to change the status (active/inactive) of Orders.

### Navigation Tips

![](../orders-list-editor.assets/4a48f54ee82a0b8f4b96bf7a22053e04.png)

* Use the columns to filter or sort based on what you are looking for.
* Move the columns around to a view that suits you by clicking on the COLUMNS button and using the tools to pin/hide/drag columns.
* Use the tools/gear icon to group by / pivot the data.
* To download a CSV of the selection, use the paper icon then click the Download icon.

### Add a new order

1. First, search to see if the order already exists. Click the filter icon in the Name column, then in the upper FILTERS section, start typing part of the order name you are looking for. Any order with the name you enter will appear in the list - it may not be the first word in the order.

![](../orders-list-editor.assets/8ef59cd717a2c2278bb52e94e3775e75.png)

2. If the order does not exist with the TYPE you need, select the <strong>+Add Order</strong> button in the upper left of the screen.

![](../orders-list-editor.assets/c8ebd4f45bd05c995059225bc7ceabe6.png)

3. Fill in as many fields as applicable. <strong>Order Type and Order Name are required</strong>.

* Department field is used to designate what department (in your system) should always handle this order item (lab, radiology etc)
4. Click<strong> Save</strong> if you are finished adding new orders, or <strong>Add Another</strong> to add additional orders. (Click <strong>Cancel</strong> if you do not want to save the order.)

![](../orders-list-editor.assets/a95f548c8421c290062881f3c4014274.png)

### Edit an existing order item

1. Search for the existing order using one of the columns. Click the filter icon of the column or columns you want to search by.

![](../orders-list-editor.assets/d6bd8464c648d27c325b78d71981a659.png)

2. Checkmark the first column then select one of the buttons in order to make the edit.

![](../orders-list-editor.assets/9010f838d041f05d8a772fd85dabec5f.png)

3. <strong>Edit</strong> displays the same input screen as Adding an order does. <strong>Status</strong> allows the user to change the order to <em>Active</em><strong> or</strong> <em>Inactive</em><strong>.</strong> The <strong>Revisions</strong> button displays who and when and what changes were made to the order. Use the <strong>Show Questions</strong> button to display or edit the Ask at Order Entry Questions (AOE).

### Add Order Type for Grouping Types of Order Items

1. The <strong>+Add Order Type</strong> button is used to add new order types or <em>descriptions</em> of the order itself. For example, you may want all of your In-House labs to have a special type. This aids the user in locating a subset of the orders. <em>(Note: the Add Order Type option may not be used often or ever post go-live.)</em>

![](../orders-list-editor.assets/ea3c82d8a4903986c648c2860f467dfa.png)

2. Click the Add Order Type button in the upper left and fill in the fields.

* <strong>Type Name</strong> should be an abbreviation for this new order type and is usually in all capital letters.
* <strong>Description</strong> should be a name to help describe what or how the order type..
* <strong>Where?</strong> is the position in the Order Types list that it should be displayed in
* <strong>Relative to…</strong> is dependent on what you selected in the "Where?" field. You can place this new Order type <em>"Last", "First",</em> or <em>"Before Type"</em> in the existing list.
* <strong>Exclude this type from the due list?</strong> Prevents this order type from displaying on the due list.

![](../orders-list-editor.assets/90a1e620cdc30c3c5140bcf1a5568c7d.png)

**_TIP! The new order type will not display until it is used for the first time._**

### Change the Order Status

By default Enterprise Health displays the Active Orders. Changing the filter in the datavis tools gives the user the option to view only active, or only inactive, or all orders.

To change the status of an existing order:

1. Locate the order(s) you want to edit.
2. Check the box(es) in the left column.
3. Click the <strong>Status</strong> button

![](../orders-list-editor.assets/434e21b21932aa60c08d46c43c488f09.png)

4. Select either Active or Inactive and click Save

![](../orders-list-editor.assets/e43050f1c29cc7e6a72718a90ae19834.png)

### Download the Orders List

If a listing of orders is needed, Datavis provides an easy way to produce one.

1. In the Datavis toolbar, click the paper icon to create the file.

![](../orders-list-editor.assets/6831182f0b0f8484054baf5331272f05.png)

2. Once the file is created, the toolbar icon changes to a download icon. Click this to download the CSV file.  Depending on your browser, you may be prompted to select a destination folder to save this file in. The filename will begin with "Order List".

![](../orders-list-editor.assets/841c2468ea8d9d5de82aa004ae297af9.png)

3. Open the CSV file with a spreadsheet application (Excel, Google Sheets, etc).

**_TIP! Use the filters to create a subset of the full order list if needed._**
