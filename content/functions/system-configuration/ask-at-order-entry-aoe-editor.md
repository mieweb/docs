---
id: '1IHfW0DrfMPy4xX-pNIsYZ4LVV8CNNoBf373Hbo_i__c'
title: 'Ask at Order Entry AOE Editor'
date: '2024-05-20T16:52:42.890Z'
version: 72
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1IHfW0DrfMPy4xX-pNIsYZ4LVV8CNNoBf373Hbo_i__c'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

The Orders List Editor, found in the Control Panel > Orders > Orders-List Editor, is where you will find a list of all orders in the database, plus any Questions associated with these orders. These questions are commonly referred to as "AOE" or Ask at Order Entry, and pop up automatically when a user adds a test/order to a requisition. These AOEs provide additional details for specific tests/orders, such as Fasting or Pregnancy information. A single test may have multiple questions tied to it. Not all orders have questions associated with them.

## Terminology: DataVis Columns

![](../ask-at-order-entry-aoe-editor.assets/dad08343e74b63bbeca288226b0a46af.png)

**DataVis**: An interactive spreadsheet-like grid showing data in columns and rows, which allows for filtering, sorting, and pivoting to obtain the view of the data desired.

**Type:** The order type is used to describe or categorize data into similar groupings. This allows the user to apply a filter to refine the search.

**Question Count**: Displays the number of AOE Questions associated with each row

**Order ID**: This is an internal, assigned number in the database and differs between systems

**Name:** The Name column shows the order name or description

**Code:** The Code is typically used within an interface transmission to clearly identify the order to the receiving Lab/interface engine, etc.

**Billing Code:** CPT or external code used for billing purposes

**LOINC Code:**  Logical Observation Identifiers Names and Codes (LOINC) are used primarily for results coming into the system, to match "apples to apples". Enterprise Health's Medical Codify may be used to search for or reference LOINC codes, as well as other online resources.

**Layout:** Some orders have specific Exam Order Layouts assigned to them so they display consistently when results are manually entered, typically in the Tests and procedures section of an encounter.

**Doc Type:** A specific document type can be assigned to an order code within this editor, so that when these orders are resulted, a separate document is created.

**Appt. Type:** An appointment type can be tied to order codes within this editor so that when an order is on the due list and needs scheduled for an appointment, the system automatically selects the correct appointment type, with the proper amount of time allocated.

## Orders-List Editor

The Orders-List Editor shows all of the orders available in the system, and is also where you can see which orders have Questions associated with them. This is where you will add or edit AOE questions.

* Use the columns to filter or sort based on what you are looking for.
* Move the columns around to a view that suits you by clicking on the COLUMNS button and using the tools to pin/hide/drag columns.
* Use the tools/gear icon to group by / pivot the data.
* To download a CSV of the selection, use the paper icon then click the Download icon.

## AOE Questions Editor within the Orders-List Editor

The AOE Editor is now available with each order code in the Orders-List Editor DataVis view.

If searching for a specific order, use a filter to locate that order by name or code, LOINC, etc. If there are questions already associated with the order, there will be a numeric representation in the "Question Count" column.

![](../ask-at-order-entry-aoe-editor.assets/980d6b1d79fa863710d4a07cdfd1c101.png)

To View the Questions, checkmark the associated row and click the **?Show Questions** button at the bottom of the screen.

![](../ask-at-order-entry-aoe-editor.assets/f0ecd8aadd108df98cf2a7198e825385.png)

![](../ask-at-order-entry-aoe-editor.assets/ee3deef278150024c1704a88348b441c.png)

![](../ask-at-order-entry-aoe-editor.assets/62919b9d99d21d06cdfbd35e6a5f4643.png)

## Adding New Questions to Orders

With proper permission, a user may add the AOE questions to existing orders.

1. Locate the order to add questions to
2. Checkmark the order in the far left column
3. Click the <strong>? Show Questions</strong> button

![](../ask-at-order-entry-aoe-editor.assets/0f4303106e5e935e7897e8c613937821.png)

4. If there are no existing questions for this order, you may create a new question, specific for this test, or use an existing question.

![](../ask-at-order-entry-aoe-editor.assets/8d83a7d5297ca5a60a6416024b0d1820.png)

* <strong>ADD EXISTING QUESTION</strong>: Use the autocomplete field to enter the <em>description</em> (often the abbreviation or code). Select by clicking on the selection or pressing the tab key on your keyboard, then click the <strong>Submit</strong> button.

![](../ask-at-order-entry-aoe-editor.assets/faa3694e34c716b9eeed62dfcd60f01b.png)

* <strong>CREATE A NEW QUESTION</strong>: Enter information into each of the fields shown below:

![](../ask-at-order-entry-aoe-editor.assets/b5fa159c1b7d11975842791a92e2b3d3.png)

* <strong>Description</strong>: Typically an abbreviated version of the full question. Something like: SMOKER instead of "Does the patient smoke?
* <strong>Type</strong>: What type of question/response does this question need to be? The choices are "Multiple Choice", "Yes or No", "Text Answer". (See section below for specifics.)

![](../ask-at-order-entry-aoe-editor.assets/dfa50e4509a32f0f19e003171e11cc9c.png)

* <strong>Priority Order</strong>: This is the sequence the questions will appear - first, second, etc. Enter a numeric value 1, 2, 3 etc. You do not need to enter these in the correct order. The system will reorder them once you click submit.  If there is only a single question, no numbering sequence is necessary.
* <strong>Question Code</strong>: This field is typically supplied to you by the Lab or facility that will be receiving the order. It is not a mandatory field when using this editor, but is required when utilizing Data Import, and must be unique.
* <strong>Internal Question</strong>: This question prints on the order requisition but does not transmit via the interface.
* <strong>Question</strong>
    * Yes/No:  This option displays a Yes and No radio button on the order requisition

![](../ask-at-order-entry-aoe-editor.assets/ec7d0933cddc4aa5b88e745b111acc72.png)

* Text: Text allows the user to type in a response. This is limited to 255 characters.

![](../ask-at-order-entry-aoe-editor.assets/6ec818f229b86fac46105682bfafe76a.png)

* Multiple Choice: The user will see the responses allowed for the question in a drop-down field.

![](../ask-at-order-entry-aoe-editor.assets/2dbacd9ef5b38d5bec8e13ad1880dcd4.png)

Below is a representation of how the AOE configuration displays to the end user when creating an order.

![](../ask-at-order-entry-aoe-editor.assets/48bab94a51876ad2cf02cc9a84f11363.png)

Additionally, the AOE questions and responses will display on the Order Requisition document.

![](../ask-at-order-entry-aoe-editor.assets/a3cb6f204a19819bb11678d07ce14a6b.png)

## Editing Existing Questions

Similar to adding a new question, users must have the proper permission to modify existing questions.

1. Locate the order to add questions to
2. Checkmark the order in the far left column
3. Click the <strong>?Show Questions</strong> button
4. Locate the question to update and click on the row.

![](../ask-at-order-entry-aoe-editor.assets/b530241c941f9e8289829b8e0a8f8e0f.png)

5. From here, you may update the Description, the process order, the question code, or the response.

* You may not change this from one "type" of response (like Text) to another type (like Yes/No).  For this type of change, create a new question.
* Be sure to click the Submit button at the bottom to save your changes.
    ![](../ask-at-order-entry-aoe-editor.assets/ecaf0e06e80e72208eb7743266d642e6.png)

## Deleting Questions

With the proper security, a user may delete some or all of each order's questions.

1. To delete, click on the trash can icon located on the right side of the row.
* Be very sure you want to delete the question, as there is no "second chance" or warning associated with deleting.

![](../ask-at-order-entry-aoe-editor.assets/47b3918a214acca9b14fbe799faf465b.png)
