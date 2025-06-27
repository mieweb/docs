---
id: '1_JdA1GExxNQj06BKXnWLZneP1jd5A8UWun2kLvKsLO4'
title: 'Encounter Types'
date: '2025-04-07T17:25:01.180Z'
version: 204
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1_JdA1GExxNQj06BKXnWLZneP1jd5A8UWun2kLvKsLO4'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
The *Encounter Types* module allows users to view system *Encounter Visit Types* and *Service Types*. *Encounter Visit Types* are typically used in clinical/ in-office workflows to capture data. *Service Types* are used on a limited basis for {{% system-name %}} utilizing custom hospital workflows only. The system comes preloaded with several preconfigured *Encounter Visit Types*. Service Types are typically custom and not preloaded. System Administrators can also add custom encounter and service types.

## Encounter Visit Types

The *Encounter Visit Types* datavis will display a list of all active visit types. Legacy or historical encounter types are hidden by default, but can be viewed by clicking the *Clear Filter* link on the *Encounter Visit Types* Datavis. Select the *Visit Types* link or the *Service Types* link located in the upper right hand corner to toggle between the two lists.

![](../encounter-types.assets/0b10da719d783593299824545e5bc463.png)

## Edit Encounter Types

To edit an encounter type or modify configuration attributes, click the Edit link in the *Options* column. Edit the appropriate information, then select *Save* to save the new encounter type, *Reset* to clear all values entered or *Cancel* to return to the *Encounter Visit Type* datavis.

![](../encounter-types.assets/6d94504505818ec334a92dbd0c087c49.png)

**Visit Type:** This field is the db code used to identify this *Visit Type*. This value is typically in ALL CAPITAL letters and brief. It is not recommended to change or edit the visit type after it has initially been created. This value is highly utilized in reporting, tasking, ensign rules, where clauses, etc. Changing it could have an impact on daily workflow operations.

**Description:** The description is a free text field to help label or describe this visit type.

**Classification:** A method of grouping of encounter visit types. This feature is rarely used. Unless directed by your deployment team/support team member, this field can be left blank.

**CDA Template:** This field defines the coding standard used in the structure, semantics, and encoding of electronic documents. MIE would assist in configuring this field if needed for custom quality reporting or datasend configuration.

**Quick Add:** When selected, this encounter will display a quick link in the Quick Links portlet (patient summary tab).

**Active:** When selected, the encounter type will be active and available for use.

**Assign User:** When selected, the Assign User feature/button will display within the encounter. Users can then assign the encounter to an individual user.

**Dynamic:** When selected, this encounter will utilize the dynamic encounter sections rather than legacy encounter sections.

**Restricted Viewing:** When selected, the user will be prompted to enter a list of users and/or departments that are *allowed* to utilize this visit type.

**Limit Billing Picklists:** Check this box and use the listedit which appears to choose which Billing code picklists are available in an encounter of this visit type. If this box is unchecked or this listedit is empty when this visit type is saved, all Billing code picklists in this system will be available in encounters of this visit type.

**Chart Type:** Select the chart types for which this encounter should be accessible.

**Test & Procedures Picklist:** Select which picklist should be the default list for the Test & Procedures encounter section.

**Order Picklists:** Select which order picklists should display as links in the Orders encounter section.

**Stage Order:** Define the stages that can be utilized within this visit type.

‘Archive As' Options: Defines the document types which can be selected in the Encounter section of encounters. This is the document name in which the archived encounter will be saved as.

## Add Encounter Visit Type

On rare occasions, a custom encounter visit type is needed. When necessary, select the *Add Visit Type* link located in the upper right hand corner of the *Encounter Types* module. Enter the appropriate information to configure this encounter based on the fields as defined in the section above. Select *Save* to save the new encounter type, *Reset* to clear all values entered or *Cancel* to return to the *Encounter Visit Type* datavis.

![](../encounter-types.assets/dae5d2bf3e26de6eed0b98b91017522d.png)

## Service Type

Select the *Service Types* link located in the upper right hand corner of the *Encounter Types* module to display the *Encounter Service Types*. By default, no service types come preloaded in the system.

![](../encounter-types.assets/16d73a3bc63c9401ba24f4a3787f1d16.png)

## Add Service Type

Select the* Add Service Type* link to add a new service type.

![](../encounter-types.assets/5309b6f9af30ab8b53b859a53af37abc.png)

**Service Type:** This field is the db code used to identify this* Service Type*. This value is typically in ALL CAPITAL letters and brief. It is not recommended to change or edit the service type after it has initially been created.

**Description:** The description is a free text field to help label or describe this service type.

**Active:** When selected, the service type will be active and available for use.

**Restricted viewing:** When selected, the user will be prompted to enter a list of users and/or departments that are *allowed* to utilize this service type.

Enter the appropriate information, then select *Save* to save the new service type, *Reset* to clear all values entered or *Cancel* to return to the *Service Type* datavis.

## Edit Service Type

To edit a service type or modify configuration attributes, click the Edit link in the *Options* column.

![](../encounter-types.assets/b5ed8c1961d1d1506fc2717ff0ba1b6d.png)

Edit the appropriate information, then select *Save* to save the new service type, *Reset* to clear all values entered or *Cancel* to return to the *Service Type* datavis.

![](../encounter-types.assets/917fdecb6c4ca5fe4c9ba6499e8b473b.png)
