---
id: '1K1uiAnm1Wdda2zGIs1VIpS5Awq7QEheM5H1b6jMWM-k'
title: 'Orders - View Recent'
date: '2025-08-08T17:42:28.533Z'
version: 206
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1K1uiAnm1Wdda2zGIs1VIpS5Awq7QEheM5H1b6jMWM-k'
wikigdrive: 'v2.15.30'
---
To view recent orders (existing orders) that the patient has had created/ordered for them, click View Recent at the top right of the OrderRequestLegacy tab.

![](./orders-view-recent.assets/0a5cbe76c82e91151bf2e653f2b248b2.png)

This will then show below any completed orders, standing orders, pending orders and incomplete orders for the patient in various buckets. There is also a search tool to search orders on this patient to render limited results.

From this summary screen of incomplete, standing, pending orders, you can edit, print, or complete an existing order.

If the screen says NO ORDERS TO DISPLAY, then the patient has no existing orders, but make sure your search filters aren't set to not show something.

![](./orders-view-recent.assets/e721cdf3bd05e7fc73de61c0cb57bfd3.png)

The Incomplete Orders and Standing Orders lists are ordered by "Requested" beginning with the most recent. Additionally, all Orders lists now use the list view remember capability so that when a user makes a change to the order in that listview, that preferred order will be stored for that user and will be consulted next time that listview is rendered

To search for a specific existing order, you can use the search engine at the top. These fields help to narrow down your search. You don't have to select in each search field, unless you know the specific information/fields you are looking/narrowing to. Clicking CLEAR underneath the search fields will clear the search fields for you to start over.

Once you have found your order that you are either searching for, or see on the Incomplete , Standing, Pending or Completed Orders sections, you can Edit, Print an existing order, or you can Complete an incomplete order.

## Edit Orders

You must have security permission to edit orders.

Click Edit next to an existing order to edit it.

![](./orders-view-recent.assets/4bf8e889cb2c555160d9cfbce7c8ebd2.png)

Change/edit what you need to. If you need to change/edit/delete an order item (test), it will show all ‘current' tests ordered at the top, then you can click the [-] button to delete an order item, or check-mark an order item you need to add to this order, etc.

If you edit it, you would then need to click the SUBMIT button at the top of the screen after any changes, then if you need to re-print it you can do so at that time. It will save the latest/edited version of this order.

![](./orders-view-recent.assets/1f58beae43bf444827408d5110416065.png)

## Print Orders

Click Print next to an existing order to print it.

It will take you to the print module and then X out of the print view/screen when done.

![](./orders-view-recent.assets/ecb8bd0139293fde483ed4f3ba4eeb1a.png)

There is a system setting that can be enabled (Orders/Settings/Print Order Requests Without Headers) that can be enabled which will automatically have the *print without headers* checkbox checked by default (a user can always override the checkmark) when printing order requests from this Recent Orders screen.

## View Orders

Click *View* next to an existing order to view it on the screen.

![](./orders-view-recent.assets/bc79b0047ddf4a81bf5fc9509ac81a86.png)

It will take you to the document summary to view the stored order document on the screen. You can print/fax from here using the top right toolbar options. There are also hyperlinks to edit order or add result. **Edit Order** will allow you to edit an order directly from this document view. You will be taken to the edit order screen and can make edits and click ‘request orders' to save. **Add Result** will allow you to result the order items within this order document. It will create and open a Results encounter where the order items will be applied as in progress. Expand the order item sections in the Results encounter to checkmark as ‘completed' and document data/results to capture. Close & Archive the Results encounter when done. Note: The main order request would still need to be marked entirely as ‘completed' via the Order Requests chart tab.

![](./orders-view-recent.assets/bea65f51124a6f7cd7e5bc7e6bfdc7b0.png)

There is also an option to complete when viewing the order document. The complete link will take you to the *Complete Order* screen where you can mark the entire order as ‘complete. Follow steps on the subsequent page of this help document regarding Complete.

A Print ABN hyperlink can be programmed to display, reminding users that an Advance Beneficiary Notice (ABN) form may be needed for a patient. An ABN form is required for all patients who have Medicare Part B insurance, for certain Lab Orders, or not at all. There is a system setting (Orders,Settings,Show ABN Link for all patients) that is off by default. However, if the system setting is enabled, a Print ABN link will appear on stored order documents on all orders for Medicare B patients (As defined by the PQRS system setting) and no link is shown for all other patients.

![](./orders-view-recent.assets/1c6c101e1f4c2bee0115a15b543d009d.png)

If the value of this system setting is set to 2 for the system you are working in, the Print ABN link will be shown on the stored order documents for all patients regardless of Medicare B status or CPT requirements.

![](./orders-view-recent.assets/428b35b1d7761a5594662cc311989db3.png)

X out of the view screen when done to get back to {{% system-name %}} .

## View Results

If you see an option link named View Results it means a document has been linked to this order. So, there could be the lab report with the patient's lab results linked to this specific lab e-order. You can link documents to orders from the indexing module or while in this e-orders module marking an order complete. When any document is linked to a specific order item(s) you can view the result directly here or go to the document and see what orders it's linked to via its properties.

![](./orders-view-recent.assets/b64c4b2eeb1f550a17c48e1baf0cb938.png)

## Complete Orders

To complete an order individually, click Complete and it will show the items/order. The Complete Order screen will then appear.

![](./orders-view-recent.assets/eb749eeb40d46b5e20eb2c19cbb7dc32.png)

You must type in the date the orders were done, or pending or cancelled, comments, etc. Checkmark or un-checkmark any additional order items. You can set the entire order STATUS to the appropriate status or you can set specific order items status individually. You can also link a document in the patient's chart to the specific order item by filling out the Doc Id field. When you link a document (doc.id) to an order here, that linked document will show in View Results on the order. Linking a result document to the order is a quick way to see results on an order instead of hunting through the chart.

![](./orders-view-recent.assets/103431cba1e0c07eadc8efbd474bcab2.png)

Then click the SUBMIT button. It will then put this order in the completed section of the view.

Then in the view of the closed order, it would show the items/orders and next to it the dates and times they were completed.

![](./orders-view-recent.assets/ffdeb010f4af2e00055f85e3f64336cf.png)

If you mark to complete a *standing order*, it doesn't remove the standing order.  It creates a completed version of that order.  To remove the standing order, you have to edit it and take out the order frequency, then complete it.

## Check Boxes in Options Column

The check-mark boxes next to any order in the View Recent screen is a way to set the category of multiple orders at a time.

![](./orders-view-recent.assets/84b980999b8c9073524f70afc9696bee.png)

Simply check-mark the box of the order(s) that you want to select, and then scroll to the bottom and click *Complete Orders* button. You can complete the entire order or mark certain order items as complete.

![](./orders-view-recent.assets/81c73a9fbb237309f1f033c8e9468c33.png)

You can view the category a specific order is set to by viewing the category column.

![](./orders-view-recent.assets/79e9e3f85b0b74e11e4111285cfc7269.png)

You can also complete all (multiple in mass) with encounter using the button *Complete with Encounter*. See section *Complete with Encounter* in this help guide.

## Complete with Results

Orders show the ability to *complete with results* hyperlink functionality. In order for the hyperlink functionality to show, your system must have the system setting "Show Complete with Results Link" set on.

![](./orders-view-recent.assets/8b0fecc10eb80f86715e661d7585d7ae.png)

To complete a lab order individually but also key in discrete data results regarding an order, click Complete with Results and it will show the items/order. Doing this functionality will mark the order as "complete" but also allows you to key in lab results as discrete data that is stored in the patient's chart related to the lab order.

![](./orders-view-recent.assets/41c6c719d752c30ee970fd339a266143.png)

You then are prompted to a screen to enter in information (the result data) that will store as discrete reportable data.

{{% note %}}
The Request Name field will display as the ‘subject' on the stored document Results encounter doc.id.
{{% /note %}}

![](./orders-view-recent.assets/e64674abea84eb6698c23f383e416b06.png)

You can also key in lab results for panels or a lab, etc that has several components.  You will see in the auto-complete not only individual lab tests to key in individually one at a time, but can now see and select any "flowsheets" you have built in your {{% system-name %}} system.  Flowsheets are multiple observations (lab tests) that make up a flowsheet.  Ex: Chem Panel is the flowsheet name, but it's made up of many individual lab tests.  You can now select the flowsheet (contact your MIE Implementer to set up flowsheets in your system.

![](./orders-view-recent.assets/b5311ed0df60cefb14b9f757ee5d0655.png)

When you select a specific flowsheet you have set up in your {{% system-name %}} system, you will see all the individual components specified within that flowsheet. You can quickly key in all the individual results on one screen using the flowsheet selection, instead of individual results.  Obviously you will individually key in a lab result if what you ordered was an individual test, but this is for panels or lab tests that are comprised of many individual tests within it.

![](./orders-view-recent.assets/d9cfd0fc3190eea9cd8381b003bed297.png)

Once you click the "submit" button, the order is marked complete, the lab results are stored as discrete data in the patient's chart, a Lab Results document is created in the patient's chart along with the result data and that discrete data document is linked to the order you clicked *complete with results* functionality on. *Note: The field Request Name will be shown as the ‘subject' on the stored Results document.*

![](./orders-view-recent.assets/5b0ef30b8e6924e7d4eb590e6c827503.png)

The order request automatically now moves to the "completed orders" bucket and you would see the *view results* hyperlink which would show you the linked discrete lab results document.

![](./orders-view-recent.assets/fc895eb223cbce7094badc64a7e44eaa.png)

## Complete with Encounter

The system will display a hyperlink Complete with Encounter in the options column, if the encounter visit type "Results" is set as active in the {{% system-name %}} system. If the encounter visit type "Results" is inactive, the *complete with encounter* functionality is disabled and not visible.

![](./orders-view-recent.assets/e37746f4dc0dfb69da35ccfc5ffbd56c.png)

This ability to complete an order request and document the results within an encounter. It will also generate/create a new "Results" encounter in the chart if system setting *Reuse Encounter when Completing Order* is disabled (value 0) which is the default behavior. The "Results" encounter is a dynamic encounter that has the following sections:

* Encounter Info
* Case (so that the encounter can be linked to a specific case/incident)
* Results
    * one section for each pending order_item from the pending order request
    * Incomplete orders & completed orders sections

The contents of these sections are determined by the layout name field in each order item.

* If the name of the order is the same as the name of a flowsheet and the layout is  "Obs Procedure", that flowsheet will be displayed
* if the name of the order does NOT match the name of a flowsheet, the order's layout will be displayed if the order has a layout, otherwise the "Generic Order" layout will be used
* The Generic Order layout is essentially a place to enter an observation.  The observation will have the same name as the order it came from.

After clicking the "Add Results" link, you will be taken directly into the "Results" encounter (that was created upon your click) with 5 sections, all of which begin collapsed.

![](./orders-view-recent.assets/29cafa34d1d0e4c97183e27f37343df4.png)

Click on the title section of an order item you wish to result to expand the section for data entry. In this example I clicked on the BUN section to expand it and enter a result  – this is an example of the Generic Order layout

![](./orders-view-recent.assets/70f80531336b665e2d711a6a8188bd8c.png)

First, make sure to click the Check icon if this order is complete (or any other specific checkbox). The *complete* status check marks the order as complete in the system in various places.

Key in/enter a result for the order item, and click the *NEXT* button. If you had more order item sections on the "results" encounter, the next order item section would expand open.

In this example, I have an order whose name is the same as a flow sheet, and the layout is Obs Procedure, so we display this flowsheet that is linked/named the same as the order item.

![](./orders-view-recent.assets/0a5e8a2eb7b9a430b8037789c1e437c5.png)

Enter results, and click the *NEXT* button, and this order item will be marked as completed (whether or not you check the completed box).

![](./orders-view-recent.assets/208295d8eaf2bb854c022acc6afeae3a.png)

In this example, I have a PFT which is an order item tied to a specific layout, but that layout name is NOT Obs Procedure, nor does the name match any flowsheet in this system, so we display the specific layout in the system.

![](./orders-view-recent.assets/3d05087a0081bca890a321a2f3f411ef.png)

Deleting an encounter order section from a Results encounter marks the corresponding order item on the order request as "pending", unlinks the encounter order from it, and revises the order_request.

Archive & close the encounter when done resulting. The Results encounter will then store a document as the doc.type "Results" in the chart. It also stores a separate document named "Lab Results" in the chart based on the order item results you keyed in. This is an example of the "view" of the encounter document:

![](./orders-view-recent.assets/4cbfc46769e80bb91bcc3fca3e19ecb3.png)

At this point, if you go back to view recent in E-Orders chart tab, all the items on the order request that you marked as *completed* will show status of ‘completed' and the order items within the order request itself also get marked "Completed".

Deleting an encounter order section from a Results encounter marks the corresponding order item on the order request as "pending", unlinks the encounter order from it, and revisions the order_request.

Clicking on the View Results hyperlink, in the options column of the completed order(s), you will open up to the Lab Results document this encounter created.

![](./orders-view-recent.assets/b89b610004d4fc86389099d81c987319.png)

{{% note %}}
Completing order requests with an encounter will attach the order request(s) **can** be set to open the most recent encounter IF they are all linked to the same dynamic encounter (meaning the order was generated from a specific dynamic encounter), and that encounter is either not closed or the use has permission to reopen a closed encounter, instead of it generating/creating a new "Results" encounter in the chart. The system setting *Orders*, *Settings*, *Reuse Encounter When Completing Order* sets this behavior if system setting value is set to enabled (value 1).
{{% /note %}}

## Orders History

If any of you use unordered orders or Due list, we recommend also having the chart tab named ORDERS HISTORY. Your MIE Implementer can set this up. It is a nice summary of the patient's order history. Some systems may already have a tab with all pending orders and this history combined, but this *Orders History* chart tab shows history only if you are interested in it.
