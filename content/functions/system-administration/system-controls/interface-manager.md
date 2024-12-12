---
id: '1ixPq1Rc-mqNWYR-v4k0gqx9vq5cVxCGolwWVIjnntZ4'
title: 'Interface Manager'
date: '2024-11-06T17:18:03.882Z'
version: 73
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1ixPq1Rc-mqNWYR-v4k0gqx9vq5cVxCGolwWVIjnntZ4'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
The Interface Manager contains a list of custom demographic or HR interfaces that have been configured. This module is not primarily used for custom Enterprise Health demographic interfaces. The Interface Manager editor gives system administrators the ability to manage specific patient fields that come over interfaces.

## Interface List

Navigate to the *Interface Manager* from the *Control Panel*. Any custom interfaces that have been configured will display in the *Interfaces* list.  All of the current interfaces managed by this tool for the system will be listed under here. The *Interface Name* displays in the first column and will display in Bold. The *Interface Type* displays directly below it. The *Interface Description* will display in the second column. Additional options display on the right side of each interface listed.

*Note:* Users may toggle to the legacy Interface Manager by clicking the *Legacy Interface Manager* link located at the bottom of the Interface List.

![](../interface-manager.assets/0be3993b8d4a68d2d715023409908b38.png)

## Add Interface

To Add a new Interface, click the *Add Interface* button. When clicked, a new window will open prompting the user to enter the *Interface Name* of the new interface and select the type of interface (*Select Template*) from a drop down menu. When both fields are filled, click the *Save* button and a new interface will be added to the list. All interface templates should come with default values, so once selected there should be no need to make any other changes unless there is custom work involved.

![](../interface-manager.assets/aeec520e9427d3ffc51160fa3a4f49ae.png)

## Properties

When the *Properties* button is selected, a new window will appear that will allow the user to insert data based on the type of interface. The properties are individual data points that are used by the interface for various purposes. Each window will be different based on the interface type.

HR Feed Properties:

![](../interface-manager.assets/70d2c88ae677777cf86cd60f5437384c.png)

## Fields

When the *Fields* button is selected, a new window will appear that will allow the user to insert new rows of data that make up the incoming data for the interface. Each window will be different based on the Interface Type.

HR Feed Example:

![](../interface-manager.assets/1216b38fa9e89caa6414d6b3950cbcfb.png)

## Edit Columns

The Properties window for an interface is static. Users can only enter what values exist.

The Fields window will allow users to add and remove items from the list. This will be used to add or remove values that will be later saved into the configuration. For HR Feeds this means you can remove unused column headers from the Fields, or insert new custom column headers for a specific client.

The removal of a row can be accomplished by pressing the delete button on the right hand side of the row you want to remove. 

The addition of a row can be accomplished by pressing the Add Field button at the bottom of the window. This will create a new row with blank controls for you to fill out.

Anytime the user presses the save button for either the Properties or Fields the interface will have its install function called to apply the changes.
## Delete

When the *Delete* button is selected, the row will be marked as inactive and removed from the list. Users will be asked to confirm before deleting the interface.

![](../interface-manager.assets/c05783bb656b4925802c349ab4c7756e.png)
