---
id: '16TKb3I7wceQPbaYvEIGeYMgsnpGsjOuEN29IU7jqhF4'
title: 'Auto Routes'
date: '2025-06-23T20:09:54.838Z'
version: 89
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=16TKb3I7wceQPbaYvEIGeYMgsnpGsjOuEN29IU7jqhF4'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Auto Routes contain information regarding interfaces that are configured in {{% system-name %}}. Auto Routes define each interface, what information is sent out of the system via that interface, how information is sent and when information is sent from {{% system-name %}}. Typically, Auto Routes are configured by the {{% system-name %}} EDI team when an interface is configured with an outside vendor. Only users with advanced training and responsible for interface configuration should make changes to rules defined in this editor.

## Add Auto Route

Auto routes can be accessed from the Control Panel tab. Each entry represents an auto route. Select the** +Add Auto Route** button to add new routes. For clients on older releases and still prefer to use the legacy version of this editor, select the **Legacy Auto Routes Editor** link on the right hand side of the module.

![](../auto-routes.assets/3382c9cc2f7f2ab3e88e57394fc6fb6d.png)

Use the Add Auto Route dialogue box to enter the Trigger Type, Route Description, Custom Joins, Where Clause statements, Recipient Types, Recipient, Method, Send On and resend criteria, then click the **Save** button.

![](../auto-routes.assets/67de54f9d16cdd793278c2021500171d.png)

## Controls

Users can select single entries in the table to access the controls at the bottom to interact with the auto route. Edit, Duplicate and Show query options are only available when one item has been selected. The Delete option is the only option that is allowed when multiple items are selected.

![](../auto-routes.assets/791b853f38b30da9beb0d16d66d00c2d.png)

### Editing

Selecting the **Edit** option will open the **Edit Auto Route** dialogue box in a new window instead of a separate page, as it did in the legacy editor. However no functionality changed within this box. Administrators can edit the Trigger Type, Route Description, modify Custom Joins, Where Clause statements, Recipient Types, Recipient, Method, Interface, and Send On and Resend criteria.

![](../auto-routes.assets/f916a99a1e232852c6181a335e9f35a5.png)

Note: The original "Help Me" text doesn't exist in the new editing screen.

### Duplicating

Selecting the **Duplicate** button that will bring up a similar menu. Upon saving the **Duplicate Auto Route** dialogue box, the route will duplicate and display twice in the Auto Route list. Make sure when duplicating that the **Route Description** field is updated so you can tell the duplicated item from the prior version.

![](../auto-routes.assets/b72137a70faa5a7fbb30c233eb7712ba.png)

![](../auto-routes.assets/4c5f4674ba2c66d400ec76f78e5f093a.png)

### Show Query

Select the interface and then the **Show Query** button to view the query itself. The hover over feature is no longer available in the new datavis version.

![](../auto-routes.assets/0fe2d9ac3a0165b8d4d2361e9147a3a6.png)

### Delete

Users may also delete auto routes. If multiple items are selected in the datavis at once, the user is prompted with an alert box that reads "Are you sure you want to delete this auto route?" with yes/no option buttons. Select **Yes**, to delete all selected auto routes. Select **No** to cancel and return the module. It is not recommended that an autoroute is deleted without consulting with the {{% system-name %}} EDI team.

![](../auto-routes.assets/46242925a09ef3086336cebea8f41502.png)
