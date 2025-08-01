---
id: '1Bt6c-VYustMe1qKSLapSrA9jDJ7z1TUAWamcS9sPzdU'
title: 'Partition Manager'
date: '2025-01-06T13:45:09.900Z'
version: 261
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Bt6c-VYustMe1qKSLapSrA9jDJ7z1TUAWamcS9sPzdU'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
The Partition Manager is a function of {{% system-name %}} that allows users the ability to create, update, and delete patient partitions used to assign MR numbers to patients. This powerful tool affects several areas of {{% system-name %}} including: Patient Registration, Document Queue, and Interfaces using Data send auto routes.

There may be a need to create a new partition in the {{% system-name %}} system. An example could be a separate company or provider wanting to keep records in the {{% system-name %}} system. If it is a totally separate company, and the provider is completely independent and just using office space, then we would recommend to create a new partition and new set of charts, especially if all his/her billing is done separately.

If he/she is contracted to work on behalf of the {{% system-name %}} client, and billing under their TIN, then the {{% system-name %}} client should own the record and they can use the same current partition(s) already set up and same patient chart.  We recommend the provider sign a confidentiality statement, etc.

Usually the billing TIN drives how the chart is sectioned off.  Whoever is billing for the service most likely owns the record.

In the Control sidemenu tab is a tab called Partition Manager.

You can add a partition by selecting *Add Partition* link from the top right corner.

![](../partition-manager.assets/09d97b5a5354b541cd7a82106ef4c16a.png)

It will open to the Partition Add screen:

![](../partition-manager.assets/221bdd23d0cadd0b6c2a39b3562eb88e.png)

* <strong>Partition:</strong> Enter the abbreviation for the partition. <strong>Must</strong> be in uppercase letters. This is a coded name for the partition. This is what will be stored in the DB. Preferred format is no spaces and in all CAPS. Maximum 15 characters.
* <strong>WC GUID:</strong> This is a Globally Unique IDentifier. This is only needed if patients in this partition will be sent out of the system via Data Send Interface. Data send interface requires a unique identifier for each partition so that it's easy to understand which system it comes from. Technically, this field just has to be unique; but for sending data between {{% system-name %}} or NMC systems, this field needs to be the system OID (Object Identifier) followed by the next numeric value. For example: System OID = 1.2.840.114398.1.710; WC GUID (partition 1) = 1.2.840.114398.1.710.1; WC GUID (partition 2) = 1.2.840.114398.1.710.2
* <strong>Name:</strong> This is the display name of the partition. This is what will be viewable on the chart and inside of {{% system-name %}} partition selections. This name is the human readable format of the partition name.
* <strong>Description:</strong> This is a human readable short sentence describing what the partition is used for. This is displayed on the Patient Registration and Edit Demographic screens when assigning MRNs. It is also used in the partition list of the Document Queue within parenthesis next to the Partition name. Maximum 50 characters.
* <strong>MR Sequence:</strong> This is used for Auto Assigned MR Numbers to set where the numbers will begin numerically. See View Type below on how to make a partition Auto Assigned. You can edit within the particular partition, but if the client has a PM system we are interfacing w/ than they would want to make the edit in that system so the edit will come across the feed and update {{% system-name %}} .  For example: MR Sequence = 10000 - Next patient registered into that partition will have the MRN=10001 The next patient after that registered into that partition will have the MRN=10002, the next 10003, etc…
* <strong>Partition View:</strong> This determines how the MRNs in this partition will be assigned. There are several options in an attempt to meet all client needs. How a user will be able to see, view or search for a partition. View Types:

![](../partition-manager.assets/f28fa8400b4c5121b99d3481cf3fc00a.png)

* <strong>View Only</strong>: This partition has no way of assignment inside of the system. The partition is likely populated by an interface and the value of the MRN should not be editable or removed.
* <strong>Auto Increment</strong>: All MRNs in this partition are sequential starting at the value in MR Sequence. The assignment of a MRN in this partition is optional via checkbox inside of the system's patient registration and edit demographic screens by default.
* <strong>Hidden From View But Searchable</strong>: This is the same as ‘View Only' but the partition is not displayed by default. The MRN is not editable, However, it is searchable inside the system. If this is the ONLY MRN on the chart, it will display in the system as the MRN.
* <strong>Hidden From View But Searchable (Auto Increment)</strong>: This is the same as ‘Auto Increment' but the partition is not displayed by default. If selected, it will auto assign the next number in sequence based on the MR Sequence. It is not selected by default. It is searchable inside of the {{% system-name %}} system. If this is the ONLY MRN on the chart, it will display in {{% system-name %}} as the MRN. View this partition on the patient registration and edit demographic screens by selecting ‘Show Hidden' in the MRNs dialog.
* <strong>Hidden From View But Searchable (Auto Increment Optional)</strong>: This is the same as ‘Hidden From View But Searchable (Auto Increment)' but the partition <strong>is</strong> selected by default. This means that the MRN will be auto assigned unless manually unchecked during registration or edit. If this is the ONLY MRN on the chart, it will display in {{% system-name %}} as the MRN. View this partition on the patient registration and edit demographic screens by selecting ‘Show Hidden' in the MRNs dialogue.
* <strong>Hidden From View But Searchable (Randomly Generated)</strong>: This is a hidden partition where the MR number is not a sequential assigned number, but rather a unique random 16 digit number. It is not editable. It is searchable inside of {{% system-name %}} . If this is the ONLY MRN on the chart, it will display in the system as the MRN.
* <strong>Hidden From View</strong>: This MRN is not searchable, not editable and mostly not viewable inside of the system. If a chart only has a partition of this type, then that chart will not be viewable. If the chart has a MRN of this type and another MRN, then viewing the chart and viewing the hidden MRNs on the demographics screen will show this MRN. Main use for this type is when there is a need to have a partition display as if it has been removed from the chart, but not actually remove it. Only an interface or manual DB insertion will populate a MRN in a partition using this type. If the partition is hidden from view then it can't be used in the doc queue. You would need it as ‘hidden from view but searchable'. The query to pull up the patients there is the same one E-Chart uses so if they don't show up there, then they won't show up in the doc queue. If an interface is populating the partition, set it to ‘View' instead of ‘Auto'. ‘Auto' should only be used for registration inside of {{% system-name %}} .
* <strong>Allow Edit (Optional)</strong>: This partition allows for manual entering of the MRN. The MRN will be evaluated to make sure it does not already exist on another chart. If it already exists, the MRN will turn Red and not allow submission. If it is available, then the MRN will be green and assigned on submission. It is searchable and optional.
* <strong>Allow Edit (Required)</strong>: This partition allows for manual entering of the MRN. The MRN will be evaluated to make sure it does not already exist on another chart. If it does, the MRN will turn Red and not allow submission. If it does not, then the MRN will be green and assigned on submission. It is searchable and required. The submit will fail if not correctly populated. This option is only available for Auto Assigned partitions (hidden or viewable). When set to ‘Yes', the Auto Assigned partition becomes required. The checkbox for this partition will be selected and cannot be unchecked on EVERY patient registration and edit demographic screen. Note that if a partition changes from Auto Assigned to another type, and the ‘Required' flag is set to ‘Yes', then the partition stays ‘Required'. If that is not desired, then before changing the type of the partition from ‘Auto Assigned', change the Required flag to ‘No'.

{{% info %}}
*If a partition is "Hidden From View" or non-active, it will not be shown in the Partition Membership section in the View User(name) screen.*
{{% /info %}}

* <strong>Active Types:</strong>
    * <strong>Non Active:</strong> The partition is deactivated. It can no longer be assigned new MRNs. It is no longer viewable on charts that had MRNs in this partition. MRNs are no longer searchable. If a chart only has a Non Active partition MRN, the chart will display with a ‘No-part MR' as the MRN.
    * <strong>Active:</strong> This is an active partition. The partition can be assigned new MRNs. It is viewable and searchable. Active partitions also show up in E-orders to select from.
    * <strong>Active with Doc Queue</strong>: This allows this partition to show up in the dropdown in the Document Queue for Merging. This is important to select if this partition will be sending in documents into the {{% system-name %}} system via an interface (ex: NoMoreClipboard or lab partitions or hospital document partitions). This partition type doesn't show up in E-Orders to select from. This option is the same as ‘Active', but also includes the ability to place temporary charts into the Document Queue. This is needed for any inbound interface that does not maintain patient demographics inside {{% system-name %}} . Common: Lab results, Encounter orders, Reports. If you select <em>Active with Doc Queue Merging</em>, then another field named <em>Auto Merge Type</em> will open up. This is to set the merge chart options.

![](../partition-manager.assets/62efabc5606e4d9bfaaf0479079b80c4.png)

* <strong>Auto Merge Type:</strong> This option is only available when the ‘Active Type' is ‘Active with Doc Queue'. It sets what type of merge to perform when ‘Auto Merging' charts in this partition in the Document Queue. Allows selection for what type of "merging" option will be automatically done if you are mass merging documents in the queue from this partition at a 9 rating. When you do a mass merge based on ratings from the document queue tab/module, that mass merge automation will default to the option you choose on the partition here for Auto Merge Type. Merge Type options:
    * <strong>Merge Chart only and ignore this partition's demographics</strong>: This option will merge and only keep the MR number of the chart the documents & chart are being merged to (regardless of partitions being merged).
    * <strong>Merge Chart and Demographics and ignore this partition's duplicate MR Numbers</strong>: This option will merge entire chart and keep both MR numbers when merging MR's from two different partitions. If merging two MR numbers from the same partition, only the MR number of the chart that the documents are being merged to will be kept. (This is the most common selection used)
    * <strong>Merge this partition's documents, and keep all MR Numbers</strong>: This option will merge entire chart and keep all MR numbers regardless of partitions.
    * <strong>Merge documents and MR Numbers Only</strong>: This option ONLY merges the documents in the "from" patient and the MR numbers on that patient to the merged "into" patient. No other data (demographics, meds, conditions, etc) would be merged.
* <strong>Part Order:</strong> This is the display order of the partition. Lower numbers mean the partition is first, higher numbers put the partition at the end. This is used when determining the order in which the partitions are displayed on the chart, such as in patient registration or edit demographics. Also seen in E-Chart when charts have multiple, viewable MRNs in different partitions. The display order of how you want the partitions to be displayed/show for a patient. Order = 1, 2 rank them. Zero's go first though.  Make sure everything is ordered (set to a #) (affects e-chart & scheduler views etc on how the MR#'s list in order).
* <strong>Allow Access to Restricted Users:</strong> This will provide security around charts with a MRN in this partition. When checked, only users in the ‘Allowed Departments' or ‘Allowed Users' list will be able to view these charts in this partition. This only affects users that have the preference ‘Restrict Access By Partition' set to ‘Yes'. Users where this is set to ‘No' are not affected by these Partition restrictions. Select Yes or No to restrict access to this partition. If you checkmark this, you have to set the "allowed" users or departments to be allowed into this partition of patients. Any user that has security <em>Restrict Access by Partition</em> set to Yes cannot get into partitions of patients unless they (or their department) then is set to be "allowed" to a specific partition(s). Also check security <em>Limited Access</em>. If <em>Limited Access</em> security for a user is set to "yes" then you'll need to make sure those users have "allowed" access to the partitions they need here in this screen and they can only see the patients they have user relationships to. If <em>Limited Access</em> is set to no, then those users are not limited to specific user relationship patients and then the system will check what their security is for <em>Restrict Access by Partition</em> is set to then regarding partitions.

{{% note %}}
If a chart has a MRN in a restricted partition and a MRN in a non-restricted partition, all users will still have access to the chart. The same is true if a chart has multiple partition restricted MRNs and a user only has access to one of the MRNs, they will still have access to the chart.
{{% /note %}}

* <strong>Identifier:</strong> Select Medical Record Number. This identifies what type of patient identifier this partition represents. Most common is ‘Medical Record Number'. Other options include: Account Number, Driver's License Number, NPI, SSN

Click SAVE when done.

Partitions can also be related to "Chart Types". Please see other help documentation titled Chart Types Editor.pdf for information
