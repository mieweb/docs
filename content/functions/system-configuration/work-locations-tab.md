---
id: '15E6hML4fxFd1XvQEpRfClxdjy4YQ97I3KB89XBc_Rfc'
title: 'Work Locations Tab'
date: '2025-07-31T13:40:26.966Z'
version: 162
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=15E6hML4fxFd1XvQEpRfClxdjy4YQ97I3KB89XBc_Rfc'
wikigdrive: 'v2.15.27'
---
## Work Locations Tab

The *Work Locations* tab is found in the Control Panel sidemenu tab.

![](../work-locations-tab.assets/d4e737fd55751016e64a3b665ac333b9.png)

When you click Work Locations from the Control Panel sidemenu tab, the search screen displays. If you click the Search button, all active Work Locations will be displayed. To add a new Work Location, click on the Add New Work Location hyperlink.

![](../work-locations-tab.assets/921f92487df4af342cf432298a17dd82.png)

An Employer Organization can also be a Work Location. To create a Work Location from an Employer Organization, click on the Employer Organization tab from the Control Panel. Search for the Employer Organization and click on it. Click on the gray bar for the Chart Types section of the Summary tab. Select Work Location from the dropdown of Chart Types and Save. This will create the Work Location.

![](../work-locations-tab.assets/143526d0d370cfafbbc7d557ecd88f5f.png)

## Locations Hierarchy

The Location Hierarchy is located under the System Editor within the Control Panel. The Locations Hierarchy datavis list displays (by default) **active** onsite location choices but also includes Checkin Stations (in the list) that are used in the Checkin module.  This datavis list is a cross-reference table in the system.  Do not alter any known Checkin stations for your system here.  You would use the Station Manager instead. Any line item listed here that has **Type** of **0**, indicates it is a Checkin module location, not an injury onsite location for the system. You can also create a perspective to weed out locations with Type 0 in the list. *Note: To view inactive locations in the hierarchy screen, choose the perspective available, or clear the datavis filter.*

Locations used in this hierarchy give your system superusers the ability to add or update locations that indicate where an injury/incident is reported as having occurred for system wide use and reporting.  This onsite location hierarchy is used on OSHA reportable cases & reporting.

![](../work-locations-tab.assets/67d84728acd2edbfcebf73c383b46c3b.png)

Specific work locations are part of an overall Group or Main Work Location.  Meaning, specific work locations are part of location groups.  Locations are part of location groups (for instance one Hospital ie: Indiana Hospital with 5 separate areas for work/business establishments would be one group with 5 locations).

The Locations Hierarchy provides a way to configure onsite injury locations (used in Injury cases/incidents and reporting) as well as be able to indicate a hierarchy of the onside injury location choices.

**Name:** This is a required field and would need to be an overall Group Name/Work Location (example: Indiana Hospital) and/or can be a specific location/establishment where employees perform work and/or could be injured at (ex: Emergency Room or Ambulatory Surgery Center).  Make sure you enter the name correctly, as you cannot edit this NAME after you save. You would have to delete the entry and rekey in.

![](../work-locations-tab.assets/38737458e74ddba02631fe60613cc6af.png)

Entries into the Locations Hierarchy (name field) depend on how granular the client wants to get for onsite injury reporting.   Names (from this location hierarchy) are reflected then in the case/incident onsite location ‘please select location' auto-complete as choices (and the auto-complete reflects the hierarchy noted in this editor separated by a comma).

![](../work-locations-tab.assets/eb72edf43434d5505a07d6b9e34f92a4.png)

**Site ID:** This is a required field and would need to be a unique Site ID code to give to this Group Name/Work Location and/or specific location/establishment.

![](../work-locations-tab.assets/6639957a65b3d5ce90022ce2eaf2becb.png)

**Parent ID:** This is an optional field.  If you indicate a Parent ID here in this field, it will indicate that the specific location/establishment/location group etc is a child (sub)-injury location or child (sub)-site (where an injury could occur) of the Parent site indicated.  In order to set a Parent ID to a specific location, the Parent must exist in the Locations Hierarchy list (the Parent is also a site in the list with its own specific Site ID).

If a Parent ID code is set here for a specific group name/work location and/or specific location/establishment, it signifies that the specific listed group/work location and/or specific location/establishment is a sub (child)-location of the parent indicated.

To set a Parent ID code here, the Parent location (group name/work location, etc) itself must exist in this Locations Hierarchy with its own unique Site ID code.  The Parent field is an auto-complete field to indicate which other Location (from this editor) is its parent.  You would begin typing in the exact location **name** (not site code abbreviation) and then select its Parent using the auto-complete.

![](../work-locations-tab.assets/f8ec282dcc7375441802ff67d6f1ce79.png)

Once a Parent is selected (for the specific location) and the work is saved, the Parent is set and the Site ID code for that parent is what is visible in the datavis list view.  The Parent ID (shown on the Location Hierarchy list view of any sub/child locations) is the unique site ID code of the parent this sub-location is tied to.

![](../work-locations-tab.assets/dba7a1fd1dae7a1bbad59f2c9b704188.png)

*Using the above example, Indiana Hospital (site code IHL) has 5 sub (child)-locations where injuries (at Indiana Hospital) could occur.  The configuration of the Location Hierarchy (with sites & parents) signifies that this system offers 5 sub (child)-location levels as onsite injury locations for OSHA reporting wrapped up to the parent of Indiana Hospital.*

![](../work-locations-tab.assets/1a109985385152c06315a617d1dca666.png)

Parent/child location hierarchy is reflected then as such in the case/incident onsite location choices (sub (child)-locations followed by **,** comma and its indicated Parent) as well as in reporting to be able to filter a report based on injury happening at a sub(child)-location and/or its Parent:

![](../work-locations-tab.assets/eb72edf43434d5505a07d6b9e34f92a4.png)

**Chart ID:** This is an optional field.  If you indicate an EO (Employer Org) type Chart or a Work Location type Chart here in this Chart ID field, it signifies the EO or Work Location chart that this location (usually a parent location) would have reporting reflected for OSHA.   You can also set this for any sub (child)-locations if needed.

![](../work-locations-tab.assets/1caf7826925926958a8b5ba42256e754.png)

![](../work-locations-tab.assets/ff7104618ab0c1f03643c4d0d1c9df5c.png)

The Chart ID is an auto-complete giving you selections of charts (configured in the system) that have a chart type of EO/Employer Organization on them or have a chart type of Work Location on them.

![](../work-locations-tab.assets/77c84849b54948fe7a0b96576bdbb1fc.png)

**Type:** When adding a location to this hierarchy editor, it will automatically assign a Type of 1.  This datavis list is a cross-reference table in the system. Any line item listed here that has **Type** of **0**, indicates it is a Checkin module location, not an injury onsite location for the system and you would use the Station Manager editor for those instead. You can also create a perspective to weed out locations with Type 0 in the list.

**Active:** If the location listed in the hierarchy is active, the Active column will indicate a 1.  Inactive locations would be signified with a 0 in this column. When adding or editing locations in the hierarchy, the Active status can be set using the appropriate radio button indications.

![](../work-locations-tab.assets/a3d99b57f236972bc8e3f0990f6f0e9e.png)

### Add

To add a new location to the Location Hierarchy editor, simply click the Add Location Hierarchy hyperlink found at the top right corner of the Location Hierarchy editor.

![](../work-locations-tab.assets/685aaaaac6ba298e2b9add4c8128b878.png)

An Add screen will appear as a pop-up, where you key in the required fields and any optional fields as needed.  For detailed information on each field, please see above in prior pages of this document that give explanation of each field.  Save your entry to the hierarchy editor by clicking the Save button.

![](../work-locations-tab.assets/60b86e37ce3bf3e83c1b84483b241be3.png)

### Edit

To edit an existing location in the Location Hierarchy editor, simply checkmark which location you need to edit, and then click the Edit button at the bottom of the datavis.  Only certain fields can be edited.

![](../work-locations-tab.assets/ab414491da88431fdcb34538d65f0362.png)

### Delete

Deleting a location entry from the hierarchy should be done cautiously.  If you just entered a new location into the hierarchy and need to delete it (perhaps you spelled it wrong etc), that's understandable.  But if you delete an existing entry that may have already been used as an onsite location for cases/incidents of charts, you should take warning that it will remove that data from any cases/incidents also.  If it's a location (in the hierarchy) that is no longer a location where injuries would occur (but has been in the past with existing cases/incidents on charts), then you would want to instead EDIT it and mark it as *inactive*, instead of deleting it entirely (historical and future use) from the system.

![](../work-locations-tab.assets/72c8e6a8bc4b72584e2dfe1d6091b058.png)

Will ask you to confirm the deletion through a pop-up.  Click Yes if you wish to permanently delete the location entry from the hierarchy.

![](../work-locations-tab.assets/7cc09a030edea7b2a81765717e258c59.png)

It will tell you it has successfully processed the deletion. The location is permanently deleted from the locations hierarchy and cannot be brought back.

![](../work-locations-tab.assets/c1be4f5f4c44064895180f91e7678f45.png)
