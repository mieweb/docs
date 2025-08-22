---
id: '1hsKVxA92VxeRYJn89EtUIV7ipS3NfIqM3CsDJRsDUEY'
title: 'Visit Orders'
date: '2025-06-02T19:10:08.728Z'
version: 229
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../system-administration/system-controls/encounter-types.md'
  - '../order-and-result-management/order-requests-grid.md'
  - 'make-order-feature-encounter-plan-section.md'
  - 'encounters-open-order-request-section.md'
  - '../../rapid-deployment/review-sessions/review-session-order-and-result-management.md'
  - 'https://mie.talentlms.com/unit/view/id:2280'
source: 'https://drive.google.com/open?id=1hsKVxA92VxeRYJn89EtUIV7ipS3NfIqM3CsDJRsDUEY'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
The Visit Orders encounter section provides the necessary tools for ordering, customizing, delivering, and tracking orders and order requests. Through computerized provider order entry (CPOE), the system streamlines the processes involved in order management. In general, order requests can be created from the encounter via various encounter sections (Visit Orders section being one of them) or from the chart.

![](../visit-orders.assets/4e99ac98b7401670b8685f344bc13b06.png)

### Visit Orders Right Side Quick List Method

A banner or bookmark icon is located on the right side of the Visit Orders encounter section.  This can be clicked to expand open to utilize the right side quick list functionality for the Visit Orders section.

![](../visit-orders.assets/d2cebef3ca386275768818c82b33691d.png)

#### Search field and + of Right Side Quick List Method

A test or procedure item, or even a Health Surveillance Panel can be added to the encounter and due list as a pending order item (or whatever status you determine).  You can simply search for an order item (test/procedure etc) using the search field or click the + icon to search for a specific order item.

![](../visit-orders.assets/cafbb8cafe7b42c3c8a359226b6d23b1.png)

![](../visit-orders.assets/a7cb2e89a0a3456bd4e61154d3f77dff.png)

The search and + (add encounter order) screen essentially acts like adding an order item to the due list.  It simply allows you to get an order item (test/procedure etc) onto the Visit Orders section (and applies it to the due list module also) with specifications you determine (ex: due date, comments, etc).   The search and + is essentially an area to add items to the due list, without having to go back up to the encounter Tests & Procedures section to do it.

![](../visit-orders.assets/094102a69904243a2c3be5c7e115c91e.png)

Then within the Visit Order section (after your selected order items are applied there upon saving), you can do further things to it using the function icons on each row.  Such as create an order requisition of it, or evaluate it if it is a health surveillance panel order item, or add a task regarding it, etc.

![](../visit-orders.assets/9bae73ada4b29b1afc412672b2c56f6c.png)

NOTE: This method inserts the order item(s) as individual order items within the Visit Orders encounter section.  Therefore, those individual orders would be their own individual order requisition(s) when/if made into an order requisition to be referred out.  Using this method does not allow order items to be combined into one order requisition.  If need to make an order requisition for multiple items on one requisition form, please scroll back up to the Tests & Procedures encounter section to generate from there.

#### Protocol Orders

The Visit Orders section can have specific protocol orders available that store specific orderable items in a Protocol Orders picklist (with its own section in the Protocol Orders picklist) named what the protocol is. Once a protocol is selected in Chief Complaint, any matching Protocol Orders will display here in Visit Orders in section expanded view or in right side quicklist view.

![](../visit-orders.assets/ce7cf2679afb5a827ab01ff23c74aff1.png)

The Protocol Order picklist contents of items are configured within the Order-Pick Builder within the Control Panel of the system.

![](../visit-orders.assets/d76246fa52de4d2373ade30e0753531e.png)

#### Add Referral of Right Side Quick List Method

The *Add Referral* right side quick list method allows you to select a preconfigured Order Picklist category to immediately create an order requisition for specific order tests/procedure items preconfigured within a specific categorized order picklists of that category selected.

![](../visit-orders.assets/2204881cfaceae2ad63d1f6046e05484.png)

The Order Picklist categories and its contents of items are configured within the Order-Pick Builder within the Control Panel of the system.

![](../visit-orders.assets/151192b79cd8aa4bf8a0e72bf9d64e4e.png)

NOTE: The preconfigured Order Picklist categories that display as an ‘Add Referral' option selection are managed within the Encounter Types editor (within the control panel) for the specific encounter type configured for your system.  Therefore, various Order Picklists could show or be hidden based on what encounter type you are working in.  For more information on how Encounter Types are configured, please refer to the [Encounter Types](../system-administration/system-controls/encounter-types.md) guide.

Once you select a referral category (ex: Imaging), a pop-up window to Create Requisition will display where you can select specific items to order in one requisition and fill out order details.  Upon save, this will create an order requisition document that can be shared (printed, faxed, etc) and tracked to completion of results being received back. Please visit guide [Order Requests Grid](../order-and-result-management/order-requests-grid.md) for more information on how to manage Order Requisitions.

![](../visit-orders.assets/dd36a314f8ebe1a872d80b45811d46a8.png)

For more detailed information on how to utilize the Create Requisition pop-up screen of Visit Orders encounter section, please visit guide [Make Order Feature - Encounter Plan Section](make-order-feature-encounter-plan-section.md).

Any Order Requisitions created, from the *Add Referral* right side quick list method, will display in the Open Order Requests separate encounter section.

![](../visit-orders.assets/1b4ab9905c054593855afb8b81dd45ec.png)

#### Visit Orders of Right Side Quick List Method

The *Visit Orders* right side quick list method allows you to select tests/procedures (order items) that are preconfigured on the Library chart you are currently set to on the encounter or are set to within this specific Visit Orders section.

![](../visit-orders.assets/e2a16b0f2b27b2a5dcbda5f9b73e0803.png)

The encounter in its entirety can be set to a specific chosen Library, or the Visit Orders encounter section can be set to a specific library.  The Library chart that is set for the Visit Orders encounter section to respect, those specific remembered library order items (tests or procedures) will be listed in the Visit Orders right side quick list method section that can be utilized.

![](../visit-orders.assets/4c9d0a1c7a94063fa7fb51e68ecefc17.png)

Any test or procedures selected from the Visit Orders right side quick list method can quickly be clicked to either Add To Exam (lightning bolt icon) or Add To Due List (+ icon).

![](../visit-orders.assets/f4f297c45a2228ea8a2afd10d90d70bb.png)

* The Add To Exam (lightning bolt icon) will place that item in a separate encounter section as an In Progress status and expecting a result to be entered and the item then to be marked completed.  Add To Exam signifies you intended to order that and result it in-house during the encounter workflow.

* The Add To Due List (+ icon) will place that item (test/procedure etc) onto the Visit Orders section (and applies it to the due list module also)  without having to go back up to the encounter Tests & Procedures section to do it.  Then within the Visit Order section, you can do further things to the applied item (test/procedure) using the function icons on each row.  Such as create an order requisition of it, or evaluate it if it is a health surveillance panel order item, or add a task regarding it, etc.

#### Quick Visit Orders of Right Side Quick List Method

The *Quick Visit Orders* right side quick list method allows you to select tests/procedures (order items) that are preconfigured within a Quick Visit order picklist for the system.

![](../visit-orders.assets/1f02df9f79916e0a252516340b4a327b.png)

The Order Picklist categories and its contents of items are configured within the Order-Pick Builder within the Control Panel of the system.

![](../visit-orders.assets/54bd9c46830a5effd3d1555f1f5ad345.png)

Any test or procedures selected from the Quick Visit Orders right side quick list method can quickly be clicked to either Add To Exam (lightning bolt icon) or Add To Due List (+ icon).

![](../visit-orders.assets/0b2d5beb56c61dd056555f7196c03795.png)

* The Add To Exam (lightning bolt icon) will place that item in a separate encounter section as an In Progress status and expecting a result to be entered and the item then to be marked completed.  Add To Exam signifies you intended to order that and result it in-house during the encounter workflow.

* The Add To Due List (+ icon) will place that item (test/procedure etc) onto the Visit Orders section (and applies it to the due list module also)  without having to go back up to the encounter Tests & Procedures section to do it.  Then within the Visit Order section, you can do further things to the applied item (test/procedure) using the function icons on each row.  Such as create an order requisition of it, or evaluate it if it is a health surveillance panel order item, or add a task regarding it, etc.

#### Blue icon

A checkmark blue circle icon next to an order item on the Visit Orders right side quick list method signifies that selection has been applied to the encounter.

![](../visit-orders.assets/a312eb41215b7f13a7e3ba455d8d955a.png)

If the selected item was added to the due list (+ icon), then the item will display as pending within the Visit Orders encounter section.

![](../visit-orders.assets/a7b67839885d9823b0ce3e9fd059f9a5.png)

And the selected item(s) will display as pending within the Tests & Procedures encounter section (Due List).

![](../visit-orders.assets/d34db1a9863655cb7a24f307e5d6b3cf.png)

If the selected item was added to the exam (lightning bolt icon), then the item will display as its own separate applied encounter section as an In Progress item to document results in and mark to completion.

![](../visit-orders.assets/01eb5c9b1dfc7e7ea00bf60a3ccaeb46.png)

#### Updating

Any test/procedure or item applied to the Visit Orders section (done via using the + add to due list icon) can be updated using the icons to the right of the applied item.  These icons allow you to create/make an order requisition of it or even edit the item to change its status or due date or other things.  The applied item can also be removed (deleted), or you can create a task regarding this item, or change the order of how it displays within the encounter and the encounter view.

![](../visit-orders.assets/60e42abc49e6d708192bb397dbde97ec.png)

These same function icons can also be used in the Tests & Procedures encounter section where the item reflects also.

![](../visit-orders.assets/2f5dc5f9a6e186ad025518ec8f1ca587.png)

An Order Requisition, listed in the Open Order Requests encounter section, can be cloned, edited, printed, etc using the icons to the right of the created order request.  For more detailed information on how the Open Order Requests section can be utilized, please refer to [Encounters Open Order Request Section](encounters-open-order-request-section.md) guide.

![](../visit-orders.assets/6018fda707dd61e4682e3d3f9a196785.png)

### Clinical Visit Summary

The clinical visit summary (if produced upon close & archive of the encounter) will list any order items and order requisitions that were documented during the visit.

![](../visit-orders.assets/96c03bc79a07b37e93c5309f0cf34e22.png)

### Other Product Documentation

For more information on system settings and reporting that relate to Orders Management, please see guide [Review Session - Order and Result Management](../../rapid-deployment/review-sessions/review-session-order-and-result-management.md)
<table>
<tr>
<td><a href="https://mie.talentlms.com/unit/view/id:2280">Order and Result Management</a> (LMS Course - 35 min)</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>
