---
id: '1NXuzy5Hqh0rQYLV1ldqUyIGNbiLMjiN-sYTjt2fUcYs'
title: 'Locations Management'
date: '2024-05-20T15:54:02.235Z'
version: 181
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=leditor'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager&opp=Edit&oldcode=OFFICE'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager&opp=Add'
  - 'https://system/?f=admin&s=work_locations&tabmodule=admin&tabselect=Work+Locations&tabmodule=admin&tabselect=Work+Locations'
  - 'https://system/?f=admin&s=work_locations&opp=work_regions&tabmodule=admin&tabselect=Work+Locations'
  - 'https://system/?f=admin&s=work_locations&opp=work_sites&tabmodule=admin&tabselect=Work+Locations'
  - 'https://system/?f=admin&s=work_locations&opp=work_locations&tabmodule=admin&tabselect=Work+Locations'
  - 'https://system/?f=admin&s=work_locations&opp=work_regions&work_regions_show_active=1'
  - 'https://system/?f=admin&s=work_locations&opp=work_sites&work_sites_show_active=1'
source: 'https://drive.google.com/open?id=1NXuzy5Hqh0rQYLV1ldqUyIGNbiLMjiN-sYTjt2fUcYs'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The {{% system-name %}} solution allows varying degrees of customization with regard to locations, namely office-specific types or work sites, regions, and locations. There is also the corporate, or managing, location which is used and can be updated, as needed.

## Locations Manager

With the necessary security permissions to manage locations, the [Locations Manager](https://system/?f=chart&s=leditor) chart tab, found within the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin), allows adding, editing, and deactivating of locations. The locations found here are the areas the practices utilize for any and all aspects of the delivery of care. Some examples of locations are any facilities or sites an appointment needs scheduled for, any locality needing associated with created documents, or any places at which services are provided. Locations should also be entered for any sites at which physicians may practice, perform surgeries, or round. Another type of location to consider is an affiliated or referring site, such as locations that provide results (e.g., labs and lab interfaces) or receive referrals (e.g., x-ray, lab draw, consult, etc.).

![](../locations-management.assets/1645e10ab03d729def7a41db0b37cb4b.png)

### Utilization & Initial Use

In order to use the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager) chart tab, a user must have either the **Add** or **Edit** security setting for the **E-Chart: Manage Locations** security option. With this setting appropriately enabled, clicking the tab will display all active locations set up within the system. Some locations may have been entered by an an Implementer; however, any and all locations, can be manually added, edited, or deactivated from this screen.

![](../locations-management.assets/130b1aed634e07d8adef7410d872c79d.png)

Upon accessing a new {{% system-name %}} database with no locations previously added, a default location will always display, with the code **OFFICE** and the description of **Corporate Office** or **Office**. Use this entry as the primary location for the organization. To view and update:

1. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin), from the left sidemenu.
2. Click the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager) tab.
3. Select the location
4. Click the [Edit](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager&opp=Edit&oldcode=OFFICE) button to change the details of this location.
5. Update the appropriate fields to reflect the organization's primary office description, address, and phone/fax information.
6. Click the <strong>Save</strong> button to submit the changes.
7. A confirmation message will display at the top of the page.

![](../locations-management.assets/263c95463307d05f1118966054fcd0e3.png)

Additional locations can be added after the primary location has been edited and updated to reflect the appropriate location information.

#### Add/Edit/Deactivate Locations

To **add** a new location to the  {{% system-name %}}  solution:

* While under the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager) tab, click the [Add Location](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager&opp=Add) link in the upper-right of the screen. The Add Location screen will open and all of the fields can be updated, accordingly.
    * <strong>Code</strong> - This is a required field used for a brief or abbreviated code for specific locations. The code can be up to 10 characters long and must be unique.
    * <strong>Description</strong> - Full name of location.
    * <strong>Place of Service</strong> - Autocomplete field which provides the type of location being referenced. Begin typing or press the down arrow key to access entry options. Tab to the next field or click the preferred choice to accept the selection.
    * <strong>Address1</strong> - The main element of the address for the location (i.e., street address, P.O. Box, company name, or c/o).
    * <strong>Address2</strong> - The secondary elements of the location address (e.g., suite, unit, building, floor, etc.).
    * <strong>City</strong> - The full city name of the location.
    * <strong>State/Province</strong> - A drop-down of possible states/provinces of locations. A system setting is available to allow international options versus US-only locations.
    * <strong>Postal Code</strong> - Enter the full postal code for the specified location. A system setting is available to accommodate international postal codes, leaving entries as they are entered, without auto-formatting.
    * <strong>Country</strong> - Field defaults to <em>United States</em>; however, other countries are available for selection.
    * <strong>Time Zone</strong> - Field defaults to <em>Use System Time Zone</em>; however, if different, the appropriate specific time zone can be selected from the drop-down.
    * <strong>Phone Number</strong> - Enter the full phone number, including any international access code, country calling code, area code, or exit code.
    * <strong>Fax Number</strong> - Enter full fax number, including any international access code, country calling code, area code, or exit code.
        * <strong>Use in FAX header</strong> - By default, it is set to <em>No</em>. Select <strong>Yes</strong> or <strong>No</strong>. Set this option to Yes, if the location has a specified fax number and all outgoing faxes from users using this default location are to display the location's fax number (versus the  {{% system-name %}} solution's primary fax number) as <em>Sent From</em> on all outgoing faxes. This will display the location's fax number in the header of the outgoing faxes sent by users who are set to this default location. Set this option to No, if the location does not have a fax number, or if faxes from users who are set to this default location are not to show the location's specified fax number (but rather the  {{% system-name %}} solution's primary fax number) on all outgoing faxes. This setting will display the  {{% system-name %}} solution's primary fax number on all faxes sent by users using this location.
    * <strong>Account Number</strong> -  {{% sys-name %}} will provide this field, if necessary. For example, orders interfaces often require an account number associated with all transactions, to effectively send and/or receive results. If a practice is set up with an orders interface with a specific facility (e.g., LabCorp, Quest, etc.), the facility account number associated with that location must be entered in the location's details. When sending the order electronically the account number for the location will send with it.
    * <strong>Outside Location</strong> - Field defaults to <em>No</em>, meaning the location being created/edited is internal, that is not an outside, or external, location. Setting this field to <em>Yes</em> will, however, treat the entry as an external location. Internal, or inside, locations are places at which resources perform services, or for which the organization schedules appointments and creates documents. Conversely, an external, or outside, location is one that a resource may send a patient to or receive results from.
    * <strong>Active</strong> - Field defaults to <em>Yes</em>, meaning the location being entered is an active location. Only locations no longer being used should ever be marked as <em>No</em>, or as inactive. An alternative method for deactivating a location is by way of the <strong>De-Activate</strong> link in the Options column on the Locations Manager main screen. Deactivated locations will not appear in any  {{% system-name %}} module requiring a location selection.

Once all fields have been provided for, as necessary, click the **Save** button to submit the location to the system. A confirmation message will display at the top of the page.

![](../locations-management.assets/8070f1f44280522ec7b2e7ca8ca9e78e.png)

**Edit Locations**

{{% note %}}

**Programs and Modules Using Internal Locations**

The required location must be set to **Active = Yes** and **Outside = No** to display within these programs/modules as a location selection:

* Scheduler/Appointments
* Appointment Reports
* Appt Type Templates
* Schedules
* Moving Appointments
* Waiting List
* Injections Tab
* Add Document screen
* Injections Module

**Programs and Modules Using Both Internal & External Locations**

The required location must be set to **Active = Yes** and *either* **Outside = Yes** *or* **Outiside = No** to display within these programs/modules as a location selection:

* E-Orders
* Encounters
* Mammogram Module
* Scan Indexing

{{% /note %}}

**Editing** a location, for any reason, is a simple process:

1. Click the <strong>Edit</strong> link in the Options column of the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager).
2. The Modify Location screen will load, where all necessary changes can be made.
3. When finished editing, click the <strong>Modify</strong> button to save and submit the changes.
4. A confirmation message will display at the top of the page.

Deactivate Locations

Only locations no longer being used should ever be deactivated. To **deactivate** a location:

1. Select the location that needs to be deactivated.
2. Click on the STATUS button.
3. Click No for the Active status.

![](../locations-management.assets/567c8da1bed5ad9882f0632316b6b76d.png)

4. Click the SAVE button.

{{% info %}}
Deactivated locations will not display in any {{% system-name %}} program/module to be chosen as a location selection. Locations must be set as **Active** in order to be available for selection. If a location is deactivated in error, click the Clear Filter link in Location Manager DataVis. Then, select the location to activate. Next, click the Set Status button. Then, click Yes for the Active option. Lastly, click the Save button to Activate.
{{% /info %}}

#### View Outside/Deactivated Locations

Deactivated and locations do not display in the table on the Locations Manager, by default.

If a location was deactivated or set as outside, or external, use the filters provided in the DataVis within Location Manager:

![](../locations-management.assets/4c477861099e1860b08b548144e76d3d.png)

## Work Location Management

The  {{% system-name %}} solution provides a means to manage multiple work regions, sites, and locations, if necessary. The [Work Locations](https://system/?f=admin&s=work_locations&tabmodule=admin&tabselect=Work+Locations&tabmodule=admin&tabselect=Work+Locations) manager can be found within the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin); however, the appropriate system setting must be enabled if a client wishes to utilize work regions. When in the Work Locations tab, three (3) Work Location Management selections are available. These are editors for setting up the necessary work regions, sites, and locations, as they relate to specific campaigns and/or panels:

* [Work Region Manager](https://system/?f=admin&s=work_locations&opp=work_regions&tabmodule=admin&tabselect=Work+Locations)
* [Work Site Manager](https://system/?f=admin&s=work_locations&opp=work_sites&tabmodule=admin&tabselect=Work+Locations)
* [Work Location Manager](https://system/?f=admin&s=work_locations&opp=work_locations&tabmodule=admin&tabselect=Work+Locations)

### Panels

Panels can be assigned to work regions to help limit the selection of available panels that may be appropriate for a given region. Panels displayed on the Panel Membership page, for example, are based on work region, therefore panels that are not tied to the user's work region are filtered out of the display.

One or more work regions can be assigned to a panel and this can be used as search criteria from the panel page. {{% system-name %}} filters out the panels not tied to the patient's work region in the Orders Panel picklist.

### Work Region Manager

To add or manage work regions that are understood and used with the organization, use the Work Region Manager:

1. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin).
2. Click the [Work Locations](https://system/?f=admin&s=work_locations&tabmodule=admin&tabselect=Work+Locations&tabmodule=admin&tabselect=Work+Locations) tab.
3. Click the [Work Region Manager](https://system/?f=admin&s=work_locations&opp=work_regions&tabmodule=admin&tabselect=Work+Locations) link, and a listing of current and active work regions will display.
4. To view the inactive work regions, simply click the [Show Inactive](https://system/?f=admin&s=work_locations&opp=work_regions&work_regions_show_active=1) link in the top left of the screen.
5. To add a new work region, type the <strong>Name</strong> of the region needing added.
6. Set as <em>active</em> or <em>inactive</em> by clicking the checkbox, as appropriate.
7. Click the <strong>Add</strong> button.
8. After all edits and additions have been made, click the <strong>Submit</strong> button.

{{% info %}}
Clicking the **Add** button will display the new region in the table above; however, edits and/or adds are only *stored* until clicking the **Submit** button. Once clicked, all changes will be *saved* to the system. Additionally, any edits needing made can be done by simply clicking the **Edit** button, making the necessary changes, and then clicking **OK**. This stores the necessary change(s) and updates the *Modified By* and *Date*.
{{% /info %}}

### Work Site Manager

To add or manage work sites that are understood and used within the organization, use the Work Site Manager:

1. Click the [Work Site Manager](https://system/?f=admin&s=work_locations&opp=work_sites&tabmodule=admin&tabselect=Work+Locations) link, and a listing of current and active work sites will display.
2. To view the inactive work sites, simply click the [Show Inactive](https://system/?f=admin&s=work_locations&opp=work_sites&work_sites_show_active=1) link in the top left of the screen.
3. To add a new work site, provide the following:
* <strong>Name</strong> - The supervising site name, as it is understood by the organization.
* <strong>Work Region</strong> - These drop-down entries pull from the entered work regions. Select the appropriate region from the drop-down.
* <strong>Responsible User</strong> - Begin typing, and select the individual responsible for the work site. This field is optional.
4. Set as <em>active</em> or <em>inactive</em> by clicking the checkbox, as appropriate.
5. Click the <strong>Add</strong> button.
6. After all edits and additions have been made, click the <strong>Submit</strong> button.

### Work Location Manager

To add or manage work locations that are understood and used within the organization, use the Work Location Manager:

1. Click the Work Location Manager link, and a listing of current and active work locations will display.
2. To view the inactive work sites, simply click the Show Inactive link in the top left of the screen.
3. To add a new work location, provide the following:
* <strong>Location</strong> - The location name, as it is understood by the organization.
* <strong>Work Site</strong> - These drop-down entries pull from the entered work sites. Select the appropriate supervising site from the drop-down.
* <strong>Responsible User</strong> - Begin typing, and select the individual responsible for the work site. This field is optional.
4. Set as <em>active</em> or <em>inactive</em> by clicking the checkbox, as appropriate.
5. Click the <strong>Add</strong> button.
6. After all edits and additions have been made, click the <strong>Submit</strong> button.
