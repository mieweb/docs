---
id: '1NHVGEeKbx_wGt0Y8K3WXwos-rv3dRUg4Ev6n7tdTD1Y'
title: 'Due List in a Dynamic Encounter'
date: '2020-02-27T20:00:48.718Z'
version: 54
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1NHVGEeKbx_wGt0Y8K3WXwos-rv3dRUg4Ev6n7tdTD1Y'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Plan Orders can be entered using encounters and allows a user to enter in a due date (order should be status *pending)* which will stay on the patient's Due List until it's marked as completed (this would be for tests not included in the Health Surveillance panels if an {{% sys-name %}} practice).

![](../due-list-in-a-dynamic-encounter.assets/5e3fa0601b88664e97fc54c20a990a68.png)

Items (tests or procedures) that are "due" (pending) are then displayed as a section in encounters so when a patient comes in, the clinician has visibility of those tests and they are also visible from the Due List chart tab. The Tests & Procedures section in a dynamic encounter is for viewing and working the current due list of items. To add additional items (orders for other tests or procedures to have done) to a pending due list, the user must order those in the Visit Orders section in the plan of the encounter.

## Due List

The Due List is viewable in an encounter exam section/stage named *Tests & Procedures*.

If the HS Panel (that any pending due list items are tied to) has any comments (on the panel level), those will display in the *Health Surveillance Comments* section of the encounter above the Tests & Procedures section. These are panel level comments. These comments pertain to the entire HS Panel (if applicable) that pending due list items are related to. Superusers can update HS Panel comments by going to Health Surveillance tab, editing the panel and updating/setting the comments field on the HS Panel level.

![](../due-list-in-a-dynamic-encounter.assets/9706590f8a103649976c829ff46b080f.png)

A Due List is a list of *pending* orders with due dates for a patient. These "due list items" may show in the exam or post exam stage of some encounters. The list serves as a reminder for what is due or what is coming due or what is past due during an office visit. The New Due List appears as a tab in a patient's chart as a tabular, sortable list.

![](../due-list-in-a-dynamic-encounter.assets/404e45926b6a7452ec666b14da8d5281.png)

Click on the Tests & Procedures title bar to expand open the encounter section. The Due list will display in a grid format. Each column on the Due List table can be used to sort or filter items in the table.

![](../due-list-in-a-dynamic-encounter.assets/3ba37f0ec017e24877cad865ea8d2973.png)

Find the ? icon on each column to sort and/or filter by specific criteria in a pop-up screen. When you set the sort and/or filters, the system will remember this. Therefore, future encounters, due lists, patient's that you work in; the due list will be shown that way (along with filters). Remember: if you filter out rows, those will be filtered out on future sessions/patients you work in.

![](../due-list-in-a-dynamic-encounter.assets/5b0dd59596c1d7082305c22240390e25.png)

Drag and drop a column name to change the order of columns.

![](../due-list-in-a-dynamic-encounter.assets/c288fe6a51893b2f82496727898e8c40.jpg)

You can also drag and drop a column name and place it into the table header to group items in the table by that column. In this example, I drug the "order name" and "type" column up into the table header and now my list sorts and arranges by that.

![](../due-list-in-a-dynamic-encounter.assets/365c030ab87d1e0f45e83a508da5e4fb.png)

When you drag & drop to arrange, the system will remember this. Therefore, future encounters, due lists, patient's that you work in; the due list will be displayed in that arrangement.

Select orders to process using the checkbox, then click the appropriate button below the table. See below help documentation on what each checkbox process does.

![](../due-list-in-a-dynamic-encounter.assets/44c9505ac13ee28ca9252d23ef2af2e7.png)

### Set Completed

While working within an encounter, there may be a test or procedure on the patient's Due List that was completed elsewhere (outside your office) and perhaps they bring results with them. Or if you just need to mark it completed without keying in any results or data during the encounter visit. Checkmarking the specific test/procedure item in the patient's due list and clicking the *Set Complete* button will take that *pending* order (due list item) and mark it complete.

![](../due-list-in-a-dynamic-encounter.assets/b93937753faa50c15bc95a47468cb788.png)

You will be prompted to key in a date/time that the pending order (due list item) was completed. It could be today's date or a specific date the patient had the order done in the past. Set the date/time and click the *done* button.

![](../due-list-in-a-dynamic-encounter.assets/babaa8cea9756e5c8f70dced31baa4d0.png)

The encounter screen will refresh and the order will be marked as "completed" and will be removed from the *pending* due list items table. Any remaining *pending* orders/due list items will continue to display.

### Add to Exam

At the end of any visit, any pending items on the Due List that were performed at today's visit must have results documented on the encounter and marked completed. This is especially important for Surveillance tests as some actions are triggered off the last test date. Any tests completed should be marked off as "completed".

You can easily click the *plus* icon to apply a pending due list item to the visit encounter to mark completed & result.

![](../due-list-in-a-dynamic-encounter.assets/02c294d72f90815d74a942411d3023cc.png)

You can also apply a pending due list item to the visit encounter to mark completed & result by expanding the Tests & Procedures section and checkmarking the order item in the grid look and "add to exam" button.

![](../due-list-in-a-dynamic-encounter.assets/e3e46356359f44459f28ff1bac76fda9.png)

Below the Due List section you are working in, you will now see individual title sections named the specific order items/procedure items you marked to be added to this exam to be performed and resulted on the patient/employee today during today's visit.

In this screen shot example, I clicked the *add to exam* link for the Chest w/Contrast MRI order item. I am performing (performed) the Chest MRI in-house during the patient's visit. So you will see that order item has been taken off the tests/procedures due list of pending items that is due and has placed it as its own section in the encounter and is marked as status *in progress*. By clicking *Add to Exam* on those, I indicated I will be performing those on the patient/employee at today's encounter (or resulting these today) and applied those procedures to be part of the encounter for documenting, completing and resulting.

![](../due-list-in-a-dynamic-encounter.assets/2056102c0001924ac2e3ad5684e7f354.png)

You may also notice that since those procedures are now *applied* to the encounter as their own section, you can jump to them also using the jump section encounter tab *Objective.*

![](../due-list-in-a-dynamic-encounter.assets/ae1dd92c327ff98d7d946625cec62988.png)

To complete a procedure and result it within the encounter, simply click the specific procedure's title bar in the encounter that is in progress.

![](../due-list-in-a-dynamic-encounter.assets/0fbfb1e10f4b0368b3e2688bedc3f6ca.png)

Once you click on the one you performed, it will expand the section to allow you to complete and type in the results. *Note: these are order items that can be programmed to open specific layouts and entry fields. Please contact your MIE Implementer if you need specific order items to expand to open specific data entry fields or device interface links or injectible data fields.* *Each procedure item can be set to it's own unique data entry layout fields to capture the data needed for resulting*. *When uploading a PFT or Audio test on a dynamic encounter the results will show up immediately instead of after the section is closed. PFT and Audio procedures will be marked as completed when a test is uploaded on an encounter.*

Here is a screenshot example of where I clicked to expand to open the *Urine Dip* procedure item to key in my results and mark the order as complete. The layout this *Urine Dip* procedure item is linked to also allows for connection to a device where I could import results electronically also if desired.

![](../due-list-in-a-dynamic-encounter.assets/9bd391f28f0d16961bf52c83d8204106.png)

Once you've entered in the data entry fields (or free text result) to result the specific Test & Procedure on the patient/employee, please click the **[] Completed** checkbox. This will mark the order/procedure as "completed" and removes it from status of "pending" and/or "In Progress". Any pending order marked as "completed" using this flow will be documented with a completed date of today's date.

![](../due-list-in-a-dynamic-encounter.assets/3ed05b4e6f780ce86e22c3a52f523a05.png)

### Set Declined

Any non-mandatory tests can be marked as declined. Doing so will document the pending order as "declined" with today's date once clicked.

![](../due-list-in-a-dynamic-encounter.assets/4fff863ccdaecc4b1313db0ff19c0363.png)

If the employee/patient declines a specific test, checkmark the Decline checkbox for any declined. You can click the Add Document link in the upper right hand corner of the encounter, locate the specific refusal form in the forms library and click to generate and print for the patient to sign. Your forms would need to be loaded by MIE into the forms library.

### Set Deleted

Pending orders, tests/procedures may also be marked as deleted. You may use this for perhaps orders/procedures that should be deleted (something on the list that isn't/weren't offered for example). Deleting pending orders/tests/procedures marks it as today's date.

![](../due-list-in-a-dynamic-encounter.assets/f314c6150dd1da006127effa72ed9307.png)

### Create Order

If you need to create an order to have the patient take to an outside facility to have performed (or have a lab order interface), you may select the "Make Order" checkboxes then click the function button **New Order** and follow the prompts to add and print out an order.

![](../due-list-in-a-dynamic-encounter.assets/5e44d996bfb1763eb3df4f613291b9dc.png)

It will open up the E-Orders screen in a separate window. Here you will request the order and key in other required information for the order and print/fax the order requisition. Close out that separate window to get back to your encounter visit screen. The Tests/Procedures encounter section will refresh and that pending order will be removed. It is marked as "ordered" in the patient's chart.

## Add Additional Tests/Procedures to Result at Visit

Additional tests/procedures can be added on the fly by expanding the Tests & Procedures encounter section. Using the auto-complete, one can key in additional test(s) to be added to the exam visit to be completed & resulted. After the test(s) have been keyed in using the auto-complete, click "Add to Exam" button and the encounter will display new sections that include those test(s) to mark completed & result within the encounter.

One can also use the icon to access an order picklist named "In House Procedures" to select from and simply checkmark additional tests/procedures to apply to this encounter (then click ‘add procedures' button from that screen) to be performed & resulted.

![](../due-list-in-a-dynamic-encounter.assets/3acb8e7946075dac04cc0d6445dc0835.png)

## Reports

Here are some samples of reports available

### Patient Due List

This report has search criteria at the top for created date ranges and due date ranges. By default it lists all patients and MR#'s that have something as ‘pending' status in their Due List.

![](../due-list-in-a-dynamic-encounter.assets/879c028db1bebc9307a87a08bff1ab5f.png)

### Due List Status

This report has search criteria at the top for due date ranges, panel names, status of the due list item, requirement, etc. This is used by an {{% sys-name %}} client that uses Employee Panels for their automated Due List items. This report could replace panel filter to just display order types instead of panels or modify to only show those w/ a pending status to help a non- {{% sys-name %}} practice using the Due List.

![](../due-list-in-a-dynamic-encounter.assets/b367481c79bad4959199ad5f50d1ba0a.png)

### Due List Count

This report has search criteria at the top for date ranges, panels, campaigns, clinic locations. This is used by an {{% sys-name %}} client that uses Employee Campaigns & Panels for their automated Due List items.

![](../due-list-in-a-dynamic-encounter.assets/f1db2c49c3fefb30ecfa1744ec7616ec.png)

This report can be altered if don't use Panels or Campaigns:

![](../due-list-in-a-dynamic-encounter.assets/b684e276f596c04b17bedefc1fd761c3.png)

### Orders Due - Based on Panel

This report has drop-downs to report orders that are due based on panel and location selected.

![](../due-list-in-a-dynamic-encounter.assets/3dccb52c877daac62c01047a6de9b497.png)

## Future Development

{{% system-name %}} WebScan hopes to add the ability to index documents to a Due List item to mark it "complete" when in indexing mode to index in a result document for the procedure ordered, like we currently can to link an indexed document to an incomplete order(s).

![](../due-list-in-a-dynamic-encounter.assets/7825efecda709f5fdbc3acb7e10a77c1.png)
