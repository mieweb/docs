---
id: '1nfiZ9Ext0hYvOXTu4_62icSfxRg680q9pkZyrGBZwUY'
title: 'Provider Organization Setup'
date: '2024-11-04T16:37:14.907Z'
version: 194
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'about:blank'
  - 'https://mie.talentlms.com/shared/start/key:LAQIDNHR'
source: 'https://drive.google.com/open?id=1nfiZ9Ext0hYvOXTu4_62icSfxRg680q9pkZyrGBZwUY'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
## Add the Provider Organization (PO) Contact Layout

In the Control sidemenu tab is a tab called Layout Manager. You will need to add a layout by selecting Add Layout link from the top right corner.

![](../provider-organization-setup.assets/874361530ef8807849cd2b5c400a925e.png)

It will open to the Layout Add screen:

Set the properties:

![](../provider-organization-setup.assets/2ce77c638f531fb64a3408bfd8ea5181.png)

* <strong>Module:</strong> E-Chart.
* <strong>Name:</strong> PO Contacts
* <strong>Document Type:</strong> None.
* <strong>Change Comments:</strong> Leave Blank.
* <strong>HTML Layout:</strong> Copy the HTML contents from an existing system such as WYTHR:

![](../provider-organization-setup.assets/2d47535f334c7353c08dcd8df614ded0.png)
.

* <strong>Save & Close:</strong> Completes the process and saves your work.

### Add the PO Contacts Chart Tab

In the Control sidemenu tab is a tab called Chart Tabs. You will need to add a Chart Tab by selecting Add Tab link from the top right corner.

![](../provider-organization-setup.assets/ac6b39d25f21e33d3da6fda477fb0b8e.png)

It will open to the Chart Tab Add screen:

Set the Chart Tab Properties:

![](../provider-organization-setup.assets/62687b8dcfabdf415df15fcb68399df8.png)

* <strong>Tab Name:</strong> PO Contacts.
* <strong>Open in a new window?:</strong> No or Yes
* <strong>Default View:</strong> Dashboard View.
* <strong>Tab Order:</strong> Select the position you wish the tab display in the chart.
* <strong>Background Color:</strong> Select the background color of the chart tab.
* <strong>Font Color:</strong> Select the font color of the chart tab.
* <strong>Restrict Access:</strong> Checking this box restricts the chart tab.
* <strong>Show Tab in Pocket:</strong> Checking this box displays the chart tab in mobile device mode.
* <strong>Show Link Header:</strong> Checking this box shows the header links when chart tab is selected.
* <strong>Default Document Add Type:</strong> N/A
* <strong>HAP System:</strong> N/A
* <strong>Force Display:</strong> No / Yes / Hidden – determines how the chart tab will show in the chart
* <strong>Add the Layout HTML:</strong> PO Contacts HTML code

![](../provider-organization-setup.assets/22dad32c1926482e18c93f72c42cc085.png)

* <strong>Save:</strong> Completes the process and saves your work.

Add Conditional Where Clause to the PO Contacts Chart Tab to prevent the chart tab from displaying in patient's charts. Edit the PO Contacts Chart Tab and select Advanced Editor. Under Advanced Features, in the Conditional Clause field, Enter the following clause:

SELECT COUNT(*) FROM patient_mrns WHERE [pat_id=@pat_id](about:blank) AND partition='PO'

![](../provider-organization-setup.assets/625337e714d4ec012dd613a11e43cdff.png)

* <strong>Save:</strong> Completes the process and saves your work.

### Add the PO Partition

In the Control sidemenu tab is a tab called Partition Manager.

You can add a partition by selecting Add Partition link from the top right corner.

![](../provider-organization-setup.assets/4b0f4550e155ee22b53f0712c79ce855.png)

It will open to the Partition Add screen:

![](../provider-organization-setup.assets/63853420149796d8ee4401cdf255ca57.png)

* <strong>Partition:</strong> Enter PO for the abbreviation for the partition. <strong>Must</strong> be in uppercase letters.
* <strong>WC GUID:</strong> This is the Global Identifier
* <strong>Name:</strong> Type in the same thing you did in Partition field (All uppercase letters).
* <strong>Description:</strong> Can type the full description of this partition.
* <strong>MR Sequence:</strong> You can edit within the particular partition, but if the client has a PM system we are interfacing w/ than they would want to make the edit in that system so the edit will come across the feed and update {{% system-name %}} .
* <strong>Partition View:</strong> For PO set View to Auto Increment

![](../provider-organization-setup.assets/f28fa8400b4c5121b99d3481cf3fc00a.png)

* <strong>Active Types:</strong>
    * Non Active:
    * Active: This is an active partition. Active partitions also show up in E-orders to select from.
    * Active with Doc Queue: This allows this partition to show up in the dropdown in the Document Queue for Merging. This partition type doesn't show up in E-Orders to select from.
        * If you select <em>Active with Doc Queue Merging</em>, then another field named <em>Auto Merge Type</em> will open up. This is to set the merge chart options.

![](../provider-organization-setup.assets/2736685c1c0a989f298bbebca582d99b.png)

* <strong>Part Order:</strong> The display order of how you want the partitions to be displayed/show for a patient. Order = 1, 2 rank them. Zero's go first though.  Make sure everything is ordered (set to a #) (affects e-chart & scheduler views etc on how the MR#'s list in order).
* <strong>Restrict Access:</strong> Select Yes or No to restrict access to this partition. (For PO Partition, recommended setting a restriction to allow ONLY admin or superusers to have access to this partition)
* <strong>Identifier:</strong> Select Medical Record Number.
* <strong>Save:</strong> Completes the process and saves your work.

### Provider Organization User Role

Verify System has Provider Organization User Role

In the Control sidemenu tab is a tab called User Role Editor.

Click the User Role Editor Tab and confirm that the system has the Provider Organization role. If it does not exist, it must be added. (Contact David Cornewell to have the User Role Added to the system)

![](../provider-organization-setup.assets/15340eaa9fa24c57ab18b5be7a30a056.png)

### Enable the System Setting for PO

{{% note %}}
Before enabling this system setting, verify that all users have been added to the PO Contact lists as needed. If you enable this setting prior to adding the users, your users will not be able to choose providers or users in ANY dropdown menu or autocomplete.
{{% /note %}}

In the Control sidemenu tab is a tab called System Settings. Search for the setting Limit users to Provider Organization:

![](../provider-organization-setup.assets/8cbdafbbd4cc64cfe5d49c00c9c8e604.png)

Edit the setting

Enter a "value" of 1 (as shown)

Enter a "reason" for the setting change (ie: "Initial PO set up process")

Click "Change to save the setting

![](../provider-organization-setup.assets/eab8e3c24e8e0ab4b420e8afe285437c.png)

This completes the set-up process for Provider Organizations.

See "Adding Users to Provider Organizations" for instructions to build the Provider Organizations.

## Learning Management System

To learn more about the Provider Organization Setup, follow the link below to the Learning Management System course:

* [Provider Management](https://mie.talentlms.com/shared/start/key:LAQIDNHR)
