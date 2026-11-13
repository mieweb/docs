---
id: '1Ji_KYu9v24zRAmyvZfFB2xKSJPLBp_G2EBzle_vvWic'
title: 'Orders - Pick Builder'
date: '2026-11-13T18:44:52.262Z'
version: 114
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-configuration/orders-list-editor'
source: 'https://drive.google.com/open?id=1Ji_KYu9v24zRAmyvZfFB2xKSJPLBp_G2EBzle_vvWic'
wikigdrive: 'v2.16.0'
---
The {{% system-name %}} system is designed for users to configure their own picklists. The Orders-Pick Builder allows users to create order picklists for specific protocols, visits and quick lists.

A picklist can only hold order items that already exist in the system, so set up your order items first.

* <strong>Order items:</strong> Add and configure tests, procedures and other orderable items in <strong>Control Panel > Orders > Orders-List Editor</strong>. See[](https://docs.enterprisehealth.com/functions/system-configuration/orders-list-editor)[Orders List Editor](https://docs.enterprisehealth.com/functions/system-configuration/orders-list-editor).
* <strong>Permissions:</strong> You need access to the Control Panel. Deleting, restoring and viewing history in the Orders-Pick Builder also requires the <strong>Manage Order Configuration</strong> security permission.
* <strong>Picklists vs. Order Panels:</strong> A picklist is a list of items users pick from as needed. An Order Panel bundles several items that are always ordered together, and is built separately in the <strong>Orders-Panel</strong> tab.

## Creating and Editing Picklists

The standard product ships with predefined picklists that can be updated to fit an organization's needs. New picklists can also be created. Each picklist (also called a set) is made up of **groups**, and each group holds **order items**. You build all three in the Orders-Pick Builder.

**Open the Orders-Pick Builder**

1. Open the <strong>Control Panel</strong> sidemenu.
2. Select the <strong>Orders-Pick Builder</strong> tab.
3. Use the <strong>Set Filter</strong> dropdown to view each picklist and its order items.

**Create a New Picklist**

1. In the Orders-Pick Builder, add a new picklist by clicking the Add New Set button.

![](./orders-pick-builder.assets/63bc167de6e63873ac5959b45cec473e.png)

2. Name the picklist by typing the name in the New Set field. Choose the name with care, because the system matches on it (see the naming rules below).

![](./orders-pick-builder.assets/d846b53cf9647e544841086c9518da7c.png)

3. Name the group by typing the group name in the New Group field.
4. Add the Orders by using the autocomplete. Select each order for the picklist using the down arrow as they appear and using the tab button to add.
5. Save the picklist.

**Add Groups to an Existing Picklist**

1. Select the picklist in the <strong>Set Filter</strong> dropdown.
2. Click the Plus icon to create a new group

![](./orders-pick-builder.assets/8619c4e082ae589c503039d4f42ee0ec.png)

3. Name the group by typing the group name in the New Group field.

![](./orders-pick-builder.assets/dbba3f2154d3d8f308664b2a3fe54e41.png)

4. Add the Orders by using the Order Content autocomplete. Select each order for the picklist using the down arrow as they appear and using the tab button to add.
6. Repeat for each group, then save.

**Edit a Picklist**

Select it in the **Set Filter** dropdown and add, change or remove its groups and items.

![](./orders-pick-builder.assets/167e0a0fb51f8c16917ee9645cd2bfb2.png)

* <strong>Plus Sign Icon:</strong> When selected at the picklist level, this opens an Add New Group window. When selected at the group level, this opens an Add Item window to add additional orders to the group.
* <strong>Pencil Icon:</strong> When selected at the picklist level, an Edit Set window opens to rename the picklist. When selected at the group level, an Edit Group window opens to rename the group.
* <strong>Trash Can:</strong> Used to remove a picklist, group or order. The trash can icon deactivates it rather than deleting it permanently.
* <strong>Arrows Icon:</strong> Used to move the groups up, down or to the other side.

## Deactivating and Reactivating Picklists

Deleting a picklist, group or order item no longer removes it permanently. It is marked **Deactivated** and can be restored, so an accidental deletion does not mean lost data or a call to the helpdesk.

All deactivate, restore and history actions require the **Manage Order Configuration** security permission. Confirmation messages now also show more clearly what a deletion will affect.

**Deactivate and Reactivate a Picklist (Set)**

1. To deactivate a picklist, click on the trash can icon.
2. To find it later, select <strong>Show Deactivated Picklists hyperlink</strong>.

![](./orders-pick-builder.assets/5d3461c8bcf41d52f04729f9dc8c241c.png)

3. Reactivate the picklist by clicking on the <strong>Lightning Bolt</strong> icon. An Alert window opens to confirm this action by clicking the Yes button. The picklists associated groups and order items are restored with it.

![](./orders-pick-builder.assets/d97ff199178699ca43b5bfc27546bec4.png)

**Deactivate and Restore a Group or Order**

1. Within a picklist, click the <strong>Trash Can</strong> icon next to the group or order item. It is marked Deactivated rather than removed.
2. In the active picklist, click the <strong>Eyeball</strong> icon to View Inactive Items to show deactivated groups and items.

![](./orders-pick-builder.assets/e75166d8203c265c59da03a2c07b79fc.png)

3. Click the <strong>Lightning Bolt</strong> icon to reactivate the group or item.

## Restricting picklists by department

You can limit who sees and uses specific order picklists with the system setting **E-Chart > Order Picklists > Restrict Sets**. Restricting sets is disabled by default.

![](./orders-pick-builder.assets/91a4d7cf60e35aa5216d2902aa12b053.png)

**Restrict Picklist to Certain Departments**

1. Enable the <strong>E-Chart > Order Picklists > Restrict Sets</strong> setting. Its value names the order picklists to restrict.
2. In <strong>Access Control</strong>, create a department whose name starts with the exact picklist name. Other words may follow it.
3. Tag the users who need the picklist to that department.

Only users in the matching department can see and use the restricted picklist. It is hidden from everyone else.

On the **Order Request** screen, the selectable order items under the **Set Name** field are the ones in the picklist (set) you are working in.

## Using Picklists in an Encounter

Once a picklist is built, it appears in the encounter in the places below, depending on its purpose.

### Protocol Picklists

There are several picklists that can be created in conjunction with the Protocol functionality.

**Protocol Orders**

Protocol Orders picklists group the orderable items for a specific protocol, and each picklist is named after its protocol. When a matching protocol is selected in Chief Complaint, its orders appear in the Visit Orders section.

**How it Works in the Encounter**

1. Select a protocol in the <strong>Chief Complaint</strong> section of the encounter.
2. Go to the <strong>Visit Orders</strong> section.

![](./orders-pick-builder.assets/a1b16c939871472ec1e755d738b724f4.png)

3. Any matching Protocol Orders display there, in either the expanded section view or the right side quick list view.

**Where it is Configured**

The items in each Protocol Orders picklist are set up in the **Orders-Pick Builder** in the Control Panel.

**Protocol Procedures**

Protocol Procedures group the orderable items for a specific protocol, and each picklist is named after its protocol. When a matching protocol is selected in Chief Complaint, its orders appear in the Tests & Procedures section.

**How it Works in the Encounter**

1. Select a protocol in the <strong>Chief Complaint</strong> section of the encounter.
2. Go to the <strong>Tests & Procedures</strong> section.
3. Any matching Protocol Procedures display there, in the right side quick list.

**Where it is Configured**

The items in each Protocol Procedures picklist are set up in the **Orders-Pick Builder** in the Control Panel. The Protocol Procedures set may need to be created in the Pick Builder.

**Protocol Treatments**

Protocol Treatments group the orderable items for a specific protocol, and each picklist is named after its protocol. When a matching protocol is selected in Chief Complaint, its orders appear in the Treatment section.

**How it Works in the Encounter**

1. Select a protocol in the <strong>Chief Complaint</strong> section of the encounter.
2. Go to the <strong>Treatments</strong> section.

![](./orders-pick-builder.assets/20e48347fbdaaeb903ad22613d32bbe9.png)

3. Any matching Protocol Treatments display there, in a list to be selected to add to the exam.

**Where it is Configured**

The items in each Protocol Treatments picklist are set up in the **Orders-Pick Builder** in the Control Panel.

### Add Referral (right side quick list)

**Add Referral** lets you pick a preconfigured Order Picklist category and immediately create an order requisition for the tests or procedures in that category.

**Create a Requisition with Add Referral**

1. In the encounter, open the right side quick list within the Visit Orders section.

![](./orders-pick-builder.assets/04c135facde0dbc52152dfadac6565ce.png)

2. Select a referral category, for example <strong>Imaging</strong>.
3. In the <strong>Create Requisition</strong> pop-up, select the items to include in the requisition.
4. Fill out the order details.
5. Click <strong>Save</strong>.

Saving creates an order requisition document. You can share it (print, fax and so on) and track it until results are received. Requisitions created this way appear in the separate **Open Order Requests** encounter section.

**Where it is Configured**

The categories and their items are built in the **Orders-Pick Builder** in the Control Panel. Which categories show as Add Referral options is controlled in the **Encounter Types** editor in the Control Panel. Picklists may show or be hidden depending on the encounter type you are working in.

### Quick Visit Orders (right side quick list)

**Quick Visit Orders** lets you pick from a preconfigured Quick Visit order picklist. After an item is in Visit Orders, use the function icons on its row to take further action. For example, create an order requisition, evaluate a health surveillance panel order item, or add a task.

**Create a Quick Visit Order**

1. In the encounter, open the right side quick list within the Visit Orders section.

![](./orders-pick-builder.assets/92133732868f9246282010e02efd330b.png)

2. Select an item from the Quick Visit Orders list by clicking the Lightning Bolt icon (Add to Exam) or the Plus Sign Icon (Add to Due List).

**Where it is Configured**

The Quick Visit Orders picklist categories and their items are built in the **Orders-Pick Builder** in the Control Panel.
