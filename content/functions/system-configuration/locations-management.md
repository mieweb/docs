---
id: '1NXuzy5Hqh0rQYLV1ldqUyIGNbiLMjiN-sYTjt2fUcYs'
title: 'Locations Management'
date: '2025-07-31T17:27:56.056Z'
version: 241
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ZGZDNHRK'
source: 'https://drive.google.com/open?id=1NXuzy5Hqh0rQYLV1ldqUyIGNbiLMjiN-sYTjt2fUcYs'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
The {{% system-name %}} solution allows varying degrees of customization with regard to locations, namely office-specific types or work sites, regions, and locations. There is also the corporate, or managing, location which is used and can be updated, as needed.

## Locations Manager

With the necessary security permissions to manage locations, the Locations Manager chart tab, found within the Control Panel, allows adding, editing, and deactivating of locations. The locations found here are the areas the practices utilize for any and all aspects of the delivery of care. Some examples of locations are any facilities or sites an appointment needs scheduled for, any locality needing associated with created documents, or any places at which services are provided. Locations should also be entered for any sites at which physicians may practice, perform surgeries, or round. Another type of location to consider is an affiliated or referring site, such as locations that provide results (e.g., labs and lab interfaces) or receive referrals (e.g., x-ray, lab draw, consult, etc.).

![](../locations-management.assets/1645e10ab03d729def7a41db0b37cb4b.png)

### Utilization & Initial Use

In order to use the Locations Manager chart tab, a user must have either the **Add** or **Edit** security setting for the **E-Chart: Manage Locations** security option. With this setting appropriately enabled, clicking the tab will display all active locations set up within the system. Some locations may have been entered by an Implementer; however, any and all locations, can be manually added, edited, or deactivated from this screen.

![](../locations-management.assets/130b1aed634e07d8adef7410d872c79d.png)

Upon accessing a new {{% system-name %}} database with no locations previously added, a default location will always display, with the code **OFFICE** and the description of **Corporate Office** or **Office**. Use this entry as the primary location for the organization. To view and update:

1. Navigate to the Control Panel, from the left sidemenu.
2. Click the Locations Manager tab.
3. Select the location
4. Click the Edit button to change the details of this location.
5. Update the appropriate fields to reflect the organization's primary office description, address, and phone/fax information.
6. Click the <strong>Save</strong> button to submit the changes.
7. A confirmation message will display at the top of the page.

![](../locations-management.assets/263c95463307d05f1118966054fcd0e3.png)

Additional locations can be added after the primary location has been edited and updated to reflect the appropriate location information.

#### Add/Edit/Deactivate Locations

To **add** a new location to the  {{% system-name %}}  solution:

* While under the Locations Manager tab, click the Add Location link in the upper-right of the screen. The Add Location screen will open and all of the fields can be updated, accordingly.
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

1. Click the <strong>Edit</strong> link in the Options column of the Locations Manager.
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

The *Work Locations* tab is found in the Control Panel sidemenu tab.

![](../locations-management.assets/d4e737fd55751016e64a3b665ac333b9.png)

When you click Work Locations from the Control Panel sidemenu tab, the search screen displays. If you click the Search button, all active Work Locations will be displayed. To add a new Work Location, click on the Add New Work Location hyperlink.

![](../locations-management.assets/921f92487df4af342cf432298a17dd82.png)

An Employer Organization can also be a Work Location. To create a Work Location from an Employer Organization, click on the Employer Organization tab from the Control Panel. Search for the Employer Organization and click on it. Click on the gray bar for the Chart Types section of the Summary tab. Select Work Location from the dropdown of Chart Types and Save. This will create the Work Location.

![](../locations-management.assets/143526d0d370cfafbbc7d557ecd88f5f.png)

## Learning Management System

To learn more about Locations Management, follow the link below to the Learning Management System course:

* [Locations Manager](https://mie.talentlms.com/shared/start/key:ZGZDNHRK)
