---
id: '16TKb3I7wceQPbaYvEIGeYMgsnpGsjOuEN29IU7jqhF4'
title: 'Auto Routes'
date: '2025-08-27T18:02:13.608Z'
version: 127
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=16TKb3I7wceQPbaYvEIGeYMgsnpGsjOuEN29IU7jqhF4'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
Auto Routes contain information regarding interfaces that are configured in {{% system-name %}}. Auto Routes define each interface, what information is sent out of the system via that interface, how information is sent and when information is sent from {{% system-name %}}. Typically, Auto Routes are configured by the {{% system-name %}} EDI team when an interface is configured with an outside vendor. Only users with advanced training and Superuser access who are responsible for interface configuration should make changes to rules defined in this editor. Without superuser system admin access, only the  {{% system-name %}} EDI team will be able to access.

![](../auto-routes.assets/248558f7758d9058be435692ad368231.png)

## DataVis vs Legacy Editor

Auto routes can be accessed from the Control Panel sidemenu tab. Each entry represents an auto route.  By default, any auto routes configured for the system will be displayed in a DataVis editor mode.  There is the ability to get to the Legacy Auto Routes Editor mode if you prefer working in that mode.  This guide will be describing the DataVis Auto Route editor mode and functionality.

![](../auto-routes.assets/97c8cee45daa392e7b5fe630c78579ab.png)

By default, enabled auto routes will display in the datavis listing.  To access disabled auto route triggers, simply use the perspective drop-down to select *All Routes* perspective.  The *Route Status* column in the datavis output listing will indicate which Auto Route listings are enabled vs disabled.

![](../auto-routes.assets/2cb7a11587c3ba898ccf613464624af3.png)

### Add Auto Route

Select the** +Add Auto Route** button to add a new Auto Route.

![](../auto-routes.assets/ce212c8ca69697a4f6f4e3fcc7dd6df6.png)

Use the Add Auto Route pop-up box to enter the Trigger Type, Route Description, Custom Joins, Where Clause statements, Recipient Types, Recipient, Method, Send On and resend criteria, then click the **Save** button.

![](../auto-routes.assets/55b5d035011e335a0a77344ccc8b0fd2.png)

## Action Control Buttons

Once an auto route entry has been selected from the DataVis output listing, the action control buttons will appear for use.

Edit, Duplicate, and Show Query options are only available when 1 auto route has been selected, meaning a route can only be edited, duplicated or shown the query individually per route. The Delete and Enable/Disable options are available if multiple auto routes are selected.

![](../auto-routes.assets/2303bde335f2325abec0866574f596f7.png)

### Edit

Users can edit an auto route entry by checkmarking the auto route and then selecting the Edit action button below the list of auto routes.

![](../auto-routes.assets/8d8792603e8901b8533ba6bf8e71c301.png)

Selecting the **Edit** option will open the **Edit Auto Route** dialogue box in a pop-up. System Administrators can edit the Trigger Type, Route Description, modify Custom Joins, Where Clause statements, Recipient Types, Recipient, Method, Interface, and Send On and Resend criteria.

![](../auto-routes.assets/6d54df382988e3945da89bfd8c94eb04.png)
Click the Save button to save edits, or click Cancel to exit out without saving any edits.

Note: The original "Help Me" functionality for the Where Clause field doesn't exist in the new datavis method, only in the Legacy Auto Routes Editor edit mode.

![](../auto-routes.assets/97c8cee45daa392e7b5fe630c78579ab.png)

### Duplicate

Selecting the **Duplicate** button that will bring up a similar menu. Upon saving the **Duplicate Auto Route** dialogue box, the route will duplicate and display twice in the Auto Route list. Make sure when duplicating that the **Route Description** field is updated so you can tell the duplicated item from the prior version.

![](../auto-routes.assets/b72137a70faa5a7fbb30c233eb7712ba.png)

![](../auto-routes.assets/4c5f4674ba2c66d400ec76f78e5f093a.png)

### Delete

An Auto Route can be deleted individually or in mass by checkmarking the auto route(s) and then selecting the Delete button below the list of auto routes.

![](../auto-routes.assets/64ff0742fa59d03417ec30586ca96c6d.png)

The user is prompted with a pop-up window that reads "Are you sure you want to delete this auto route?" with yes/no option buttons, to confirm selection. Select **Yes**, to delete all selected auto route(s). Select **No** to cancel and return the list. It is not recommended that an auto route be deleted without consulting with the {{% system-name %}} EDI team.

![](../auto-routes.assets/e50c51a8662607853baa85c7a88b1451.png)

### Enable/Disable

An Auto Route can be enabled or disabled individually or in mass by checkmarking the auto route(s) and then selecting the Enable/Disable button below the list of auto routes.

### ![](../auto-routes.assets/fda159c51844c41faf11dc51c1c3ceb6.png)

The user is prompted with a pop-up window to set the selected auto route(s) as enabled or disabled. It is not recommended that an auto route be disabled without consulting with the {{% system-name %}} EDI team.

![](../auto-routes.assets/10daf06c89ee2e51c566b6aa01ae40ee.png)

Clicking the Update button will save your work indicating to enable or disable the selected auto route(s).

NOTE: Disabled auto routes will have a Route Status of disabled, and the Where Clause will automatically be set to begin with *0 AND* so that tells the system (using code) that the auto route is disabled.

![](../auto-routes.assets/03a799fd58addfe0769029e0dc5a83f6.png)

Once a disabled auto route is set as Enabled, then the Route Status will change to Enabled and the *0 AND* prefix on the Where Clause will be automatically removed so that tells the system (using code) that the auto route is enabled.

### Show Query

Select the interface and then the **Show Query** button to view theWhere Clause and Common Join query itself. A hover over feature for this is in the Legacy Editor.

![](../auto-routes.assets/0fe2d9ac3a0165b8d4d2361e9147a3a6.png)
