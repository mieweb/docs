---
id: '1tDd1K4pAJM2OWgJtSob3r4xrSI-Fz8JQ3FeduEGjEHM'
title: 'Orders List Editor'
date: '2025-04-23T18:27:53.509Z'
version: 277
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'ask-at-order-entry-aoe-editor.md'
source: 'https://drive.google.com/open?id=1tDd1K4pAJM2OWgJtSob3r4xrSI-Fz8JQ3FeduEGjEHM'
wikigdrive: '4877557a92bc296ec58d6bfc335c6143133d522b'
---
The Orders List Editor, found in the Control Panel sidemenu tab, within the Orders parent tab is an editor and where you will find a list of all orders in the database, along with the ability to add new, edit existing orders, or deactivate orders. In addition, this is where you will find any Questions associated with these orders. These questions are commonly referred to as "AOE" or Ask at Order Entry. AOE's provide additional details for specific tests/orders, such as is contrast needed, is fasting needed, or to gather pregnancy information for specific order items being ordered. A single test may have multiple questions tied to it. Not all order items have questions associated with them. For more information on Order item questions/AOE entry, please see separate guide [Ask at Order Entry AOE Editor.](ask-at-order-entry-aoe-editor.md#overview)

## Orders-List Editor

From the Control Panel sidemenu, advance to the Orders-List Editor tab.  The Orders List Editor screen will list all active order items for the system, within a DataVis output.  The Orders-List Editor shows all orders available in the system and is also where you can see which orders have Questions associated with them. Use this editor to add or edit orders, and to change the status (active/inactive) of Orders.

### Terminology: DataVis Columns

![](../orders-list-editor.assets/ab4721dcc1fe3bfdd551f86106381661.png)

* <strong>DataVis</strong>: An interactive spreadsheet-like grid showing data in columns and rows, which allows for filtering, sorting, and pivoting to obtain the view of the data desired.
* <strong>Type:</strong> The order type is used to describe or categorize data into similar groupings. This allows the user to apply a filter to refine the search. Common types include "Labs (L)", "Health Surveillance (HS)", "Recommendations (RE)", etc.
* <strong>Question Count</strong>: Displays the number of AOE Questions associated with each row.
* <strong>Order ID</strong>: This is an internal, assigned number in the database and differs between systems.
* <strong>Name:</strong> The Name column shows the order name or description.
* <strong>Code:</strong> The Code is typically used within an interface transmission to clearly identify the order to the receiving Lab/interface engine, etc.
* <strong>Billing Code:</strong> CPT or external code used for billing purposes.
* <strong>LOINC Code:</strong>  Logical Observation Identifiers Names and Codes (LOINC) are used primarily for results coming into the system, to match "apples to apples". Medical Codify (Control Panel->Reference->Medical Codify) may be used to search for or reference LOINC codes, as well as other online resources.
* <strong>Layout:</strong> Some orders have specific Exam Order Layouts assigned to them so they display consistently when results are manually entered, typically in the Tests and procedures section of an encounter.
* <strong>Doc Type:</strong> A specific document type can be assigned to an order code within this editor, so that when these orders are resulted, a separate document is created.
* <strong>Appt. Type:</strong> An appointment type can be tied to order codes within this editor so that when an order is on the due list and needs scheduled for an appointment, the system automatically selects the correct appointment type, with the proper amount of time allocated.

### Orders-List Editor DataVis Columns and/or Filters

### Navigation Tips

![](../orders-list-editor.assets/4a48f54ee82a0b8f4b96bf7a22053e04.png)

* Use the columns to filter or sort based on what you are looking for.
* Move the columns around to a view that suits you by clicking on the COLUMNS button and using the tools to pin/hide/drag columns.
* Use the tools/gear icon to group by / pivot the data.
* To download a CSV of the selection, use the paper icon then click the Download icon.

{{% info %}}
By default, the system will hide the following columns: Modifiers, Quantity, Price, Procedure Code, Department, Sent Separately to Lab, Hide Comment Field, Provider Guideline, Patient Instruction, Description, and Injection. Users can control which columns display and the order of items by selecting the *Columns* button and saving a new perspective.

![](../orders-list-editor.assets/b720575b9f2db751be03b45f79225293.png)
{{% /info %}}

### Add a new order item to the editor for the system

First, search to see if the order already exists. Click the filter icon in the Name column, then in the upper FILTERS section, start typing part of the order name you are looking for. Any order with the name you enter will appear in the list, but it may not be the first word in the order.

![](../orders-list-editor.assets/8ef59cd717a2c2278bb52e94e3775e75.png)

If the order does not exist with the TYPE you need, select the **+Add Order** button in the upper left of the screen.

![](../orders-list-editor.assets/7167f6c0d4b5749582fe5214aad6fa9d.png)

The *Add Order* pop-up entry window will appear.

![](../orders-list-editor.assets/a95f548c8421c290062881f3c4014274.png)

Fill in as many fields as applicable. **Note: Order Type and Order Name fields are required**.

* Department field is used to designate what department (in your system) should always handle this order item (lab, radiology etc)

Click** Save** if you are finished adding new orders, or **Add Another** to add additional orders. (Click **Cancel** if you do not want to save the order.)

### Edit an existing order item for the system

Search for the existing order using one of the columns. Click the filter icon of the column or columns you want to search by.

![](../orders-list-editor.assets/d6bd8464c648d27c325b78d71981a659.png)

Checkmark the first column then select one of the buttons in order to make the edit.

![](../orders-list-editor.assets/9010f838d041f05d8a772fd85dabec5f.png)

**Edit** displays the same input screen as Adding an order does. **Status** allows the user to change the order to *Active*** or** *Inactive***.** The **Revisions** button displays who and when and what changes were made to the order. Use the **Show Questions** button to display or edit the Ask at Order Entry Questions (AOE).

### Add Order Type for Grouping Types of Order Items

The **+Add Order Type** button is used to add new order types or *descriptions* of the order itself. For example, you may want all of your In-House labs to have a special type. This aids the user in locating a subset of the orders. *(Note: the Add Order Type option may not be used often or ever post go-live.)*

![](../orders-list-editor.assets/ea3c82d8a4903986c648c2860f467dfa.png)

Click the Add Order Type button in the upper left and fill in the fields.

* <strong>Type Name</strong> should be an abbreviation for this new order type and is usually in all capital letters.
* <strong>Description</strong> should be a name to help describe what or how the order type..
* <strong>Where?</strong> is the position in the Order Types list that it should be displayed in
* <strong>Relative to…</strong> is dependent on what you selected in the "Where?" field. You can place this new Order type <em>"Last", "First",</em> or <em>"Before Type"</em> in the existing list.
* <strong>Exclude this type from the due list?</strong> Prevents this order type from displaying on the due list.

![](../orders-list-editor.assets/90a1e620cdc30c3c5140bcf1a5568c7d.png)

**_TIP! The new order type will not display until it is used for the first time._**

### Change the Order Status (active vs inactive for use in the system)

By default Enterprise Health displays the Active Orders. Changing the filter in the datavis tools gives the user the option to view only active, or only inactive, or all orders.

To change the status of an existing order:

Locate the order(s) you want to edit, then check the box(es) in the left column for specific order items to edit status for.  Then, click the **Status** button

![](../orders-list-editor.assets/434e21b21932aa60c08d46c43c488f09.png)

Select either Active or Inactive and click Save

![](../orders-list-editor.assets/e43050f1c29cc7e6a72718a90ae19834.png)

### Download/Export the Orders List into CSV output

If a listing of orders is needed in a CSV type spreadsheet output, Datavis provides an easy way to produce one.

In the Datavis toolbar, click the bent edge paper icon to *Generate CSV* file.

![](../orders-list-editor.assets/212fd737625bd161693b289601a9bc2b.png)

Once the file is created, the toolbar icon changes to a download icon. Click that *Download CSV* icon. Depending on your browser, you may be prompted to select a destination folder to save this file in. The filename will begin with "Order List".

![](../orders-list-editor.assets/30caee562f4d423668920f94afe6c44b.png)

Open the CSV file with a spreadsheet application (Excel, Google Sheets, etc).

**_TIP! Use the filters to create a subset of the full order list if needed._**

## Replace Text in Orders

An optional system setting *Allow Replace Command* exists that can be enabled for the system.

![](../orders-list-editor.assets/fa6ab480b1479984c6e426fd1d283380.png)

If enabled, the Orders List Editor will display a ‘Replace Text In Orders' hyperlink that can be utilized. The 'Replace Text in Orders' allows one to Enter Text To Replace with any New Text. Can replace orders with specific text to be a new text (name), replace orders with a specific order code to be a new/updated order code, or an order with a specific billing code to be a new/updated billing code in mass instead of individually per order item.

![](../orders-list-editor.assets/5707a171b06b9b08a03f15e42e0e87b7.png)

Once in the *Replace Text In Orders* screen, you will see some fields at the top.

![](../orders-list-editor.assets/2e92bae6a5890b160c54c6dbcbb5c348.png)

If you need to replace existing order name(s) with a different description/portion of a name, you can simply keep the radio button selected to **text**.  If you need to replace existing order item(s) code to something new/updated, you would want to have the radio button **code** selected.  If you need to replace order item(s) billing code to something else/updated, you would want to have the radio button **billing code** selected.

![](../orders-list-editor.assets/3b7ef4fe31e33e42744a1bf5d6cf35e0.png)

In this example, we will be having the system replace any order items that have CBC in the name, to instead be new text/new portion of the order name to be Complete Blood Count instead of using an acronym of CBC.

BEFORE: This screenshot shows existing order items in our system that have CBC in the name.

![](../orders-list-editor.assets/b5ef62e5679417f9d5b50fc0b9521523.png)

Using the *Replace Text in Orders* editor allows me to tell the system to look for any existing order item name that has CBC in it, and replace it with the wording of Complete Blood Count.  Using the *Replace Text in Orders* will do the update (that I specify) in mass and saves me time individually editing individual orders to change its name.

In this screen shot example, in the **Enter Text to Replace** field, I've typed the exact acronym I want the system to find in order items and in the **Enter New Text** field, I've typed in the exact wording I want the system to replace it with.  I've left the **Text** radio button selected since the changes are for the order item name/description/text and not anything to do with order item codes being replaced.

Click the **Replace** button to perform the action of having the system analyze and search for your criteria you specified.  It will not actually perform the replacement yet until a next step.

![](../orders-list-editor.assets/18082d7b36115ef95955d378aaeaf794.png)

Once the **Replace** button is clicked, the system will search and analyze the order items configured in your system and alert you to **Confirm** the replacement.  Within the confirm area, the system will let you know how many order items it has found with what you are asking it to replace with. The system will also let you know how many Order picklists any of those order items may be in.

Click the **Confirm** button to perform the action of the replacement to the order items in the system.

![](../orders-list-editor.assets/bdea4037204f41dff30ef78a8fe3f33b.png)

Once the system has completed the replacement, it will alert you at the top that it has replaced xx number of order items in your system.

![](../orders-list-editor.assets/8ca3aa2ef1a899ca6f6645547e610e1c.png)

AFTER:  This screenshot shows existing order items in our system that used to have CBC in them but have now been replaced with the wording of Complete Blood Count.

![](../orders-list-editor.assets/c372fe4b66632202c45962713fdcd8a9.png)
