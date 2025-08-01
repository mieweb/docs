---
id: '1K5UaYbMQfk8hO8SLpWlUDIEsm3-u6zYdENSWRY2Usdg'
title: 'Due List'
date: '2025-05-12T17:06:26.121Z'
version: 215
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../e-chart/patient-summary-interactive-chart-tab.md'
  - '../reports/using-datavis-grids-data-tools.md'
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=1K5UaYbMQfk8hO8SLpWlUDIEsm3-u6zYdENSWRY2Usdg'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Tests or Procedures items that are "due" (pending) are displayed in encounters, as a portlet from the Summary chart tab, and from its own specific chart tab named Due List.  This allows clinicians visibility of those tests that are pending as ‘due' for the chart.

## Due List Portlet

When viewing the Summary chart tab, there is a portlet available for display named Due List.  This portlet displays any pending due list items for the chart.  These are not "orders" that were referred out to have performed, but these are pending due list items (tests/procedures) that need to either be ordered and referred out to an outside facility, or items that need performed in office and marked as completed, or marked declined/waived, etc. This list is managed in the Due List chart tab and/or from within encounters.  For more information on how portlets work in this chart tab, please see help guide named [Patient Summary-Interactive Chart Tab](../e-chart/patient-summary-interactive-chart-tab.md).

![](../due-list.assets/bbccded8da79791dc3c2631a6457cc66.png)

Clicking on the pencil icon (manage info icon) from the Due List portlet will take you directly into the Due List chart tab where you can manage due list items.  This portlet on the Summary chart tab simply offers a quick overview of any pending due list items for the chart.

## Due List Chart Tab

If a Health Surveillance Panel, the chart is a member of, has any comments (on the panel level), those will display in the Health Surveillance Comments section of the Due List chart tab at the top.  These are panel level comments. These comments pertain display if the chart is a member of that corresponding health surveillance panel that pending due list items are related to.  Superusers can update Health Surveillance Panel comments by going to Health Surveillance tab, editing the panel and updating the comments field on the specific Health Surveillance Panel level.

![](../due-list.assets/50fae488da49ea1310424fa562be717e.png)

A Due List is a list of pending orders with due dates for a chart.  These can be managed in encounters, but also from the Due List chart tab. The list serves as a reminder for what is due or what is coming due or what is past due when working in the chart.  The Due List is separated into 3 different sections that are sortable, filterable lists in grid format. For more details on how to work the DataVis grid (Data Tool), please refer to the [DataVis Grids-Data Tool](../reports/using-datavis-grids-data-tools.md) documentation.

![](../due-list.assets/df04c91451da3544a6ca22f12cd58ca7.png)

The Due List chart tab is comprised of 3 sections.  Pending Items, In Progress Items, and Past Items.

### Pending Items Section

Due List items in this section are pending tests or procedures on the chart that are pending to be done/completed.  Items could have been placed on here manually or the system could have automatically generated them based on Health Surveillance membership and automation to indicate what they are due for.  Managing Due List items along with Due Dates and Completed Dates are important as future Health Surveillance triggers off of those.

The datavis listing of Pending Due List items show columns of information.

* Options: The View Details hyperlink provides detailed revision information about the specific due list item
* OrderName: is the name of the order item.  Order items are configured in the Order List Editor as well as applicable Health Surveillance Panels
* Type: is the Order Item type that is configured to in the Order List Editor.  Type is ‘grouping' specific items into a general category ‘type'
* Instructions: Instructions shown to a provider for orders triggered by this action.
* Encounter: will populate the encounter visit type (and encounter ID number) if the due list item is in-progress or completed in any specific encounter
* Panel: is the name of the Health Surveillance panel that the order item triggered from.  A Panel name here will show <strong>Req.</strong> in bold if that Health Surveillance Panel has any action item configured as Required for Certification.  If Panel column contents is blank, then the pending order item was not triggered as any part of Health Surveillance Panel needs and was placed on-demand or automated by other needs
* Comments: will display any comments on the due list item when/if the item itself is edited
* Due Date: is the date this pending order item is set to being due (typically configured at Health Surveillance Panel component level, but can be manually edited)
* Visible Date: is the date this pending order item is set to being visible (typically configured at Health Surveillance Panel component level, but can be manually edited)
* Create Date: is the date this pending order item was created on the chart
* Appt Type: will display the waitlist appointment type that the pending order item (if triggered from Health Surveillance Panel needs) is set to in configuration
* Scheduled: is the scheduled date of the associated waitlist Appt Type when/if scheduled (if triggered from Health Surveillance Panel needs)
* Required: This will display <em>Yes, No, or Yes(</em><em>✹</em><em>)</em>.  Yes if all of the order items/action items of the panel are configured as required for certification, No when none of the action items/Order items for the panel are required for certification, and Yes(<em>✹</em>) when at least one order item/action item of the panel is configured as required for certification, but not all.
* Passed: will display Pass, Fail, Permanent Fail, or Review for any due list item that is configured as Required for Certification, and where the due list item's pass/fail criteria has been indicated

Select the specific pending tests/procedures to work using the checkbox on the far left. Due Lists items can be managed individually or in mass utilizing the checkbox option.

![](../due-list.assets/2f2ae2a7eb9d1a7bd113d46761a340a4.png)

After selecting the specific pending items to work, click the appropriate button below the grid to indicate how you want to process the selected pending due list items.

![](../due-list.assets/e305788f9aa2cce46ab0df5ecdebff10.png)

### Edit Items

The Edit Items button is where you can set or change the status of due list items regardless of status or what section the items are listed in when viewing the due list.  It is important to use statuses correctly for tracking and revision auditing. Descriptions of status selections and fields in the Edit pop-up window are as follows:

![](../due-list.assets/534d53fe21ac9dcca01ae3540aff065f.png)

#### No Change

This allows for editing the due date and/or comments in one step. To edit a due date and/or a comment on a pending due list item, check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, leave the status as No Change.  Then key in or edit the due date field, and or comment field.  Click the Done button and the updates will be displayed on the due list item.  The specified due list items remain as pending status since the status was No Change.

#### Completed

There may be a pending item on the chart's Due List that was completed elsewhere (outside your office) and perhaps they bring results with them. Or if you just need to mark it completed without keying in any results or data during the encounter visit.  Check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of Completed.  Then key in a Completed Date in the field provided.

{{% info %}}
When the screen refreshes, the completed item is moved from the Pending Items section to now be in the Past Items section but with the status of completed.
{{% /info %}}

#### Declined

Any non-mandatory tests can be marked as declined.  If the employee/patient declines having a specific test/procedure item performed, check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of Declined. No date needs entered before saving because the declined date will assume today's date.

{{% info %}}
When the screen refreshes, the declined item is moved from the Pending Items section to now be in the Past Items section but with the status of declined.
{{% /info %}}

Typically if declining a pending due list item, most workflows call for the patient to sign something or document something noting that they declined to have the test/procedure done.  In the Due List chart tab, a default form in the library is tied to the Decline Form link above the Pending Items section.  That form can be updated to a specific declination form the client uses.  Use this link to quickly access a decline form to capture documentation for the chart if needed.

![](../due-list.assets/9ae96c13ff32a03f43625fb88453ae37.png)

#### Deleted

Pending due list items should only be deleted if an item on the due list was an error, otherwise declined or waived should be utilized. If need to delete a specific test/procedure item, check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of Deleted.  No date needs entered before saving because the deleted date will assume today's date.

{{% info %}}
When the screen refreshes, the deleted item is moved from the Pending Items section to now be in the Past Items section but with the status as deleted.
{{% /info %}}

#### In Progress

Pending due list items can be changed to be an in-progress status if a known pending item is known to be in-progress.  When working and performing pending due list items in an encounter, the status gets changed to in progress automatically.  However, if needed, one can manually update the status for a pending due list item to be in progress. Check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of In Progress.  No date needs entered before saving because the in progress date will assume today's date.

{{% info %}}
When the screen refreshes, the deleted item is moved from the Pending Items section to now be in the In Progress section.
{{% /info %}}

#### Ordered

Pending due list items can be changed to be an ordered status.  When working and performing pending due list items in an encounter, or from this grid, typically the item that needs referred out as an order will be done using the Create Order button which then creates an order request document.  Using that correct workflow will automatically set the status to Ordered. However, if needed, one can manually update the status for a pending due list item to be ordered, but it will not create an order request document. Check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of Ordered.  No date needs entered before saving because the ordered date will assume today's date.

{{% info %}}
When the screen refreshes, the deleted item is moved from the Pending Items section to now be in the Past Items section but with the status of ordered.
{{% /info %}}

#### Pending

The Pending status would not be utilized when working items in the Pending Items section of a due list.  However, this status option may be utilized in the other due list sections of In Progress Items or Past Items.  If an in progress or past item on the due list needs put back as a pending item on the due list, this status selection is applicable for selection.  Any due list items with a status of Pending will display in the Pending Items section of the due list tab.

#### Repeat

The Repeat status would not be utilized when working items in the Pending Items section of a due list.  However, this status option may be utilized in the other sections of In Progress or Past Items. If an in progress or past item on the due list needs repeated, this status selection is applicable for selection.  Using the repeat status would be used when you can't mark the item as ‘completed' because it needs to be performed again due to perhaps an issue or machine error, etc.

{{% info %}}
Any due list items with a status of Repeat will display in the Past Items section to indicate it was performed but is marked as a repeat status instead of completed, but the due list item also displays in the Pending Items section because the item needs repeated (performed again) before it's considered completed.
{{% /info %}}

#### Waived

Pending due list items should only be waived if an item on the due list is optional (not a required/mandatory item that needs performed) and determined not needed for some the person's job role or provider determines the item is not needed or warranted.  Otherwise declined should be utilized if patient declines having an item done, or deleted should be used if the item is on the due list in error. If need to waive a specific test/procedure item, check-mark the specific pending due list item and click the Edit Item button.  Once in the Edit Encounter Orders pop-up window, select status of Waived.  No date needs entered before saving because the waived date will assume today's date.

{{% info %}}
When the screen refreshes, the waived item is moved from the Pending Items section to now be in the Past Items section but with the status of waived.
{{% /info %}}

#### Add to Waitlist

This is an easy way for a user to generate waitlist appointments from the chart's due list.  These pending due list items will remain on the pending items section, but a waitlist appointment is generated to indicate that the due list item test/procedure needs to be scheduled.  To do so, check-mark the specific pending due list item and click the Add to Waitlist button.

![](../due-list.assets/befde66a97d48f23d6dc22646305f8e4.png)

The pending due list item (order item) must have a corresponding appt type set to it in the orders list editor for the system to be able to add a Waitlist appointment for the chart.  Appointment Types are set in the order item list editor by an administrator or MIE. The order item's appointment type must also exist in the Scheduler Appt Types tab and must then be set in the specific order item list editor for the individual type of test/procedure that can be ordered.

![](../due-list.assets/94d4c759e2dd811921c598167fbb703e.png)

If a pending due list item does not have an appointment type linked to the main order item name, it will display a Nothing Added message.

![](../due-list.assets/ad3acf4317679fce98e95563cc761525.png)

If the system does find an appt type linked to the specific order item that is on the chart's pending due list, then it will add a waitlist appointment and will display a successful message such as this:

![](../due-list.assets/1f6853f9904eca558745174a06ee5310.png)

The pending due list item will remain on the due list as pending, but when in the chart record, you will see Waitlist appointments in the Appointments tab.

![](../due-list.assets/26c497b49b4ab13b34b747053ae0b660.png)

The viewable details of the waitlist appointment will display the various appointment types the due list order items are linked to, and will be placed on a waitlist for the Scheduler Waiting List resource.  You can select more than one pending due list item (in mass) and it will combine all of those into one waitlist appointment.

![](../due-list.assets/4a089972959b15078f450f55ce47ec08.png)

### Evaluate

Some order items on a due list are Health Surveillance Panels that have many order item components (action items) that need to be done.  A user can use the Add New Orders button to order, for example, the OSHA Noise health surveillance membership panel order.  The health surveillance order item gets placed on the due list, but doesn't display or indicate to others what tests & procedures comprise that panel.  One should check-mark the specific health surveillance panel order from the pending due list, then click the Evaluate button.

{{% tip %}}
Automatic nightly scheduled jobs can also be configured to always ‘evaluate' any pending health surveillance panel due list items on charts nightly instead of manually.



![](../due-list.assets/7bc0676d7e6338ed357690a675cbdd57.png)


{{% /tip %}}

The system will evaluate the health surveillance panel that was checkmarked.  After the system evaluates the panel, you will see a confirmation message that it was successfully evaluated.  Click the X to close that pop-up.

![](../due-list.assets/08a47263d8ec6391c9177280ee394cb0.png)

Back on the due list, the system now shows each and every order item that is part of the health surveillance panel you evaluated on the chart.  These are the order item components that need to be done for that health surveillance panel for the chart.

![](../due-list.assets/b957c337b3858a65b50c797c6f0a7d57.png)

### Create Order

If a pending due list items needs referred out to have performed, an order should be generated.  Select the pending items that need to be part of the order request, then click Requisition and document the info in the Order Request screen that opens up.

![](../due-list.assets/808ad10dd2b39b3fd3c66d6408f970fc.png)

In the Order Request screen, key in required information for the order requisition.  Once you click Submit button to generate the order, it will create the document at which point you can print/fax the order request out.  Simply close out of that screen to get back to where you were working.

{{% info %}}
When the Due List refreshes, the ordered item is moved from the Pending Items section to the Past Items section, but with the status of *Ordered*. The order request document is housed in the Order Requests chart tab.
{{% /info %}}

### Perform

Some order items on a due list may be performed right then and there via the Due List chart tab.   However, typically pending due list items are performed when working in an encounter. The Due List chart tab offers the ability to perform an item when working in the chart tab if needed.   A user can indicate which pending due list item to perform and/or result quickly from this Due List tab. Doing such will also mark the pending due list order item as completed.

![](../due-list.assets/4d50dab2166f2b0d630d7b798ea1105f.png)

When the pending due list item(s) are selected, click the Perform button.  An encounter named Results is created and applies the selected pending due list item(s) to the Results encounter.  Work the Results encounter from top to bottom. Make sure to capture the data for the selected pending due list items.  It is important to expand each test and procedure section that were selected from the pending due list because the system marks them as in progress since you indicated would perform them. Make sure to check-mark each due list item section as Completed after documenting the results of each when each section gets expanded in the encounter.

![](../due-list.assets/c6e7c7af663f9c6a0a91cbb39bdf4b40.png)

Archive and Close the Results encounter when done.  This links the encounter stored document to the completed due list item.

### Add Orders

A test or procedure item, or a main Health Surveillance Panel can be added to the Due List by clicking the Add Orders button found in the Pending Items section. These can be tests/procedures that need done (inserted as pending) or could be tests/procedures you need to capture but insert them as completed, etc.  Due Dates and Completed Dates are important as future Health Surveillance triggers off of those.

![](../due-list.assets/10f6ff21b56004b5612bee39efd5f7fe.png)

To add a test or procedure to the due list, click the Add New Orders button.  When Add New Orders is clicked, several fields will branch open above it where you can simply key in the order item via auto-complete, and/or panel, key in any comments, set a due date (or set a completed date if it's a test/procedure that was already done but you need to capture it and track it as completed), and select the status it should be inserted as.

![](../due-list.assets/edebafcec9cdda1bdab02c89d095afa5.png)

Click the Add button next to the entry to add another individual test/procedure to the due list.  Once done adding tests/procedures to the Due List, click the Submit button to save all work.

### Details

From any due list item regardless of which section the item is listed in, there is a View Details hyperlink column.

![](../due-list.assets/c1c779c63a7e103ed895a93c9cffda90.png)

Clicking on the View Details link on a specific due list item will show details about the due list order item, along with revision history.

![](../due-list.assets/60d74ab71aa483e2baeb2f718adc5a35.png)

## In Progress Items Section

Due List items that have a status of In Progress will be found in this section.  Due List items get set as In Progress when they are marked to ‘perform' or when working in an encounter to perform and document the results.  This section is an audit tool to make sure in progress items get completed and not missed by being left in the ‘in progress' status. It's important to make sure items get marked as completed because completed dates are important for future Health Surveillance program triggers.

![](../due-list.assets/71008e5504312b66596a5443b22f5014.png)

## Past Items Section

Due List items that have a status other than pending or in progress, will be found in the Past Items section.  This is a historical, viewable section of past due list items that have been managed and worked.

![](../due-list.assets/ed603e84cf2125ee3d8c435f844b6baa.png)

There is a left to right scrollable bar to see additional columns of information for each past due list item.  The section is a sortable, filterable list in grid format. For more details on how to work the DataVis grid (Data Tool), please refer to [DataVis Grids-Data Tool](../reports/using-datavis-grids-data-tools.md) documentation.

### Edit Items

Edit Items is a function button found in both the In Progress and Past Items sections.  This is also found in the Pending Items section and each selection available in the Edit Items button.  Items in the In Progress and Past Items sections can be edited to update their status, change their due dates, add comments, or update as completed with a completion date.  The Edit Items screen and fields are described in above documentation.

![](../due-list.assets/4f39f5eac5b27f31e1ed482238d4000d.png)

## Learning Management System

To learn more about the Due List, follow the link below to the Learning Management System course:

* [Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
