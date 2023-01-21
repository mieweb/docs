---
id: '1nfiZ9Ext0hYvOXTu4_62icSfxRg680q9pkZyrGBZwUY'
title: 'Provider Organization Setup'
date: '2020-03-16T22:35:38.380Z'
version: 75
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'about:blank'
source: 'https://drive.google.com/open?id=1nfiZ9Ext0hYvOXTu4_62icSfxRg680q9pkZyrGBZwUY'
wikigdrive: '75ce6caac9758dd5c192aa0655418de357318c8a'
menu:
  main:
    name: 'Provider Organization Setup'
    identifier: '1nfiZ9Ext0hYvOXTu4_62icSfxRg680q9pkZyrGBZwUY'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4480
---
## Add the Provider Organization (PO) Contact Layout  
  
In the Control sidemenu tab is a tab called Layout Manager. You will need to add a layout by selecting Add Layout link from the top right corner.
  
![](../provider-organization-setup.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)  

It will open to the Layout Add screen:  
Set the properties:
  
![](../provider-organization-setup.assets/45a4f465e5599178a8efefe029c19a98.png)  

* <strong>Module:</strong> E-Chart.
* <strong>Name:</strong> PO Contacts
* <strong>Document Type:</strong> None.
* <strong>Change Comments:</strong> Leave Blank.
* <strong>HTML Layout:</strong> Copy the HTML contents from an existing system such as WYTHR:
  
![](../provider-organization-setup.assets/d603ce4a70fa197b582397e49ee3c2c7.png)  
.
* <strong>Save & Close:</strong> Completes the process and saves your work.
  
### Add the PO Contacts Chart Tab  
  
In the Control sidemenu tab is a tab called Chart Tabs. You will need to add a Chart Tab by selecting Add Tab link from the top right corner.
  
![](../provider-organization-setup.assets/2ddd116be8deea51712b65a32b163128.png)  

It will open to the Chart Tab Add screen:  
Set the Chart Tab Properties:
  
![](../provider-organization-setup.assets/1bf91ac32c21df295a41bf8ec587036f.png)  

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
  
![](../provider-organization-setup.assets/f77bfcc640e58c6462e51631e42b3f20.png)  

* <strong>Save:</strong> Completes the process and saves your work.
Add Conditional Where Clause to the PO Contacts Chart Tab to prevent the chart tab from displaying in patient's charts. Edit the PO Contacts Chart Tab and select Advanced Editor. Under Advanced Features, in the Conditional Clause field, Enter the following clause:  
SELECT COUNT(*) FROM patient_mrns WHERE [pat_id=@pat_id](about:blank) AND partition='PO'
  
![](../provider-organization-setup.assets/e298151cd36acbbd79c673405eb7c88c.png)  

* <strong>Save:</strong> Completes the process and saves your work.
  
### Add the PO Partition  
  
In the Control sidemenu tab is a tab called Partition Manager.  
You can add a partition by selecting Add Partition link from the top right corner.
  
![](../provider-organization-setup.assets/34390016708c2d3e3e803d6cc7dfd9db.png)  

It will open to the Partition Add screen:
  
![](../provider-organization-setup.assets/44a6e263919afc400b92867af60772df.png)  

* <strong>Partition:</strong> Enter PO for the abbreviation for the partition. <strong>Must</strong> be in uppercase letters.
* <strong>WC GUID:</strong> This is the Global Identifier
* <strong>Name:</strong> Type in the same thing you did in Partition field (All uppercase letters).
* <strong>Description:</strong> Can type the full description of this partition.
* <strong>MR Sequence:</strong> You can edit within the particular partition, but if the client has a PM system we are interfacing w/ than they would want to make the edit in that system so the edit will come across the feed and update {{% system-name %}} .
* <strong>Partition View:</strong> For PO set View to Auto Increment
  
![](../provider-organization-setup.assets/2536558e95f84854b6403b0ce34bd024.png)  

* <strong>Active Types:</strong>
   * Non Active:
   * Active: This is an active partition. Active partitions also show up in E-orders to select from.
   * Active with Doc Queue: This allows this partition to show up in the dropdown in the Document Queue for Merging. This partition type doesn't show up in E-Orders to select from.
      * If you select <em>Active with Doc Queue Merging</em>, then another field named <em>Auto Merge Type</em> will open up. This is to set the merge chart options.
  
![](../provider-organization-setup.assets/d2e4f09b43bdc775f6f64142216a9787.png)  

* <strong>Part Order:</strong> The display order of how you want the partitions to be displayed/show for a patient. Order = 1, 2 rank them. Zero's go first though.  Make sure everything is ordered (set to a #) (affects e-chart & scheduler views etc on how the MR#'s list in order).
* <strong>Restrict Access:</strong> Select Yes or No to restrict access to this partition. (For PO Partition, recommended setting a restriction to allow ONLY admin or superusers to have access to this partition)
* <strong>Identifier:</strong> Select Medical Record Number.
* <strong>Save:</strong> Completes the process and saves your work.
  
### Provider Organization User Role  
  
Verify System has Provider Organization User Role  
In the Control sidemenu tab is a tab called User Role Editor.  
Click the User Role Editor Tab and confirm that the system has the Provider Organization role. If it does not exist, it must be added. (Contact David Cornewell to have the User Role Added to the system)
  
![](../provider-organization-setup.assets/e37ba59fe67ccc3deb0ac535cde11853.png)  

  
### Enable the System Setting for PO  
  
{{% note %}}

Before enabling this system setting, verify that all users have been added to the PO Contact lists as needed. If you enable this setting prior to adding the users, your users will not be able to choose providers or users in ANY dropdown menu or autocomplete.
{{% /note %}}
In the Control sidemenu tab is a tab called System Settings. Search for the setting Limit users to Provider Organization:
  
![](../provider-organization-setup.assets/712982f4dc63da55542083036a7e7aa5.png)  

Edit the setting
Enter a "value" of 1 (as shown)
Enter a "reason" for the setting change (ie: "Initial PO set up process")
Click "Change to save the setting
  
![](../provider-organization-setup.assets/c668a5f6ab0de4ae61bb3aa30a5fd074.png)  

This completes the set-up process for Provider Organizations.
See "Adding Users to Provider Organizations" for instructions to build the Provider Organizations.
