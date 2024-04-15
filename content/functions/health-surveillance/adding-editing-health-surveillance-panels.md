---
id: '1YPGoGXS1qbrFdUO-FfDCLr0ln_li24Xw8Zdx0u53BnM'
title: 'Adding/Editing Health Surveillance Panels'
date: '2020-02-27T19:59:26.235Z'
version: 39
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1YPGoGXS1qbrFdUO-FfDCLr0ln_li24Xw8Zdx0u53BnM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab at the top menu of tabs.

![](../adding-editing-health-surveillance-panels.assets/2438e433ac9318b02ac39205c16153c1.png)

The listing of current active Panels will display automatically on the screen under the Panel Search criteria fields.

If you wish to see any panels that are *inactive*, simply click the Show Inactive link in the title Panels at the top.

![](../adding-editing-health-surveillance-panels.assets/bc61a03766643459a53c622ce275194a.png)

## Panel Search

To search for an existing active panel, use the drop-downs and enter information to narrow down your search for a panel. You can search key words of the panel, the name, or the description.

![](../adding-editing-health-surveillance-panels.assets/0f37b1c107689628fbbf69800a121c8a.png)

The search results will display below columns on the screen for each panel:

* <strong>Panel:</strong> Is the abbreviated name of the panel and a required field. This field cannot be modified once saved.
* <strong>Name:</strong> Is the full name/description of the panel.
* <strong>Description:</strong> Is any length of text describing what this panel is for, who is to be included in it, etc. Any helpful information to explain this panel.
* <strong>Cert:</strong> If yes, this means there is at least one associated action that is marked "required for certification".
* <strong>Modified:</strong> Displays the username, date & time this panel was last modified.
* <strong>Status:</strong> Displays Active or Inactive panels depending on your overview search criteria you set.

## Add a New Panel

When adding a new panel, fill out the necessary fields and click the SUBMIT button.

![](../adding-editing-health-surveillance-panels.assets/964f61df2ef8b0ce3cc8923ef2dc01d3.png)

Add the specific Health Surveillance Panels:

* You can export and import from other systems.  See other help documentation titled <em>Health Surveillance Tab-Export-Import Panels.pdf.</em> Then after imported, you can tweak (and double check setup of the imported panels) in the system you imported into so the components fit their needs and rules.  When you use the export/import tool, it should create order items for you on the fly into the system you import them into and that would save you steps in the above pages regarding adding order items.  You still need to go in and tweak order items and panel components after the import.
* Complete the following fields to add Panels one at a time into the system:
    * <strong>Panel:</strong> Required. Is the abbreviated, unique name of the panel (this is a required field). This field cannot be modified once saved.
    * <strong>Full name:</strong> Required. Can be different, but usually the same as the Panel name. Is the full name/description of the panel. This full name will be displayed for this panel in listings and dialogs.
    * <strong>Work Regions:</strong> This field is where you set one or more work regions to limit this panel to. This field will only show if you have system setting "Use Work Regions" enabled and have work regions manager tab configured in your system set up.  Setting work regions would be for clients who have different panels for employees in other regions of the world.  It helps you limit the visibility of panel choices in the panel membership and the panels search for other users in the system. See other help documentation titled <em>Work Regions-Work Locations Tab.pdf</em>
    * <strong>Description:</strong> Free text field. Can be as descriptive as wish.  Is any length of notes or attachments describing what this panel is for, who is to be included in it, determination of EG, reviewed by, etc. Any helpful information to explain this panel.
    * <strong>Regulatory Source:</strong> Add the regulatory source/group that has issued a requirement for these actions to be done. This is a free text field; however {{% system-name %}} will remember prior sources entered in the system.
    * <strong>Regulatory Reference:</strong> A number that identified the regulation or rule (ex: the OSHA code used to support the order items required for surveillance) or can be left blank/no data.
    * <strong>Regulatory Status:</strong>  Add the status of the regulation (proposed, accepted, active, adopted, etc). This is a free text field, however {{% system-name %}} will remember prior statuses entered in the system.
    * <strong>Open Membership:</strong> Selecting this causes this panel to display on the HS Membership matrix even if person is not a member.
    * <strong>Active:</strong> Check to select if this is an active panel.  If unchecked, the panel still saves in {{% system-name %}} , but is marked as inactive.
    * <strong>Restricted:</strong> Selecting this indicates managing this panel's membership will be limited to specific users and/or departments. Only permitted/allowed users/ departments are the ones allowed to add employees to the panel and create membership rules for it.
    * <strong>Representative Event Type:</strong> Choose Procedure or Encounter.   A procedure or encounter that represents the panel as a whole, if applicable  Unless you want the HS panel to open an encounter when the orders populate the due list, then the event type will always be Procedure. The encounter would otherwise be opened when the patient checks in for their appt.
    * <strong>Representative Event:</strong> This is a drop-down field to the right after you select Encounter or Procedure in the first drop-down.  Choose the Order item that was added as the representative event. Usually the order is the same name of the panel.   You would have added the representative action order item for the panel (or searched for existing one) in pages above.

![](../adding-editing-health-surveillance-panels.assets/062954bdb3bcf4ecf964f01adec72180.png)

* <strong>Comments:</strong> These are comments for/on the main panel level. These are displayed as <em>Health Surveillance Comments</em> in a section of the Due List chart tab and in Tests/Procedures section of dynamic encounters. These comments may include instructions on the ‘panel level' that may be useful for staff to see.
* <strong>Owner:</strong>  This auto-complete field looks for any user in the system to select.  This is an optional entry field that denotes the point of contact (that has to be entered in as some type of user in {{% system-name %}} ) for managing this panel.
* <strong>Adjustment Range:</strong>  There are 2 system settings that your MIE Implementer will need to enable if you wish to use these fields (Adjust Early and Adjust Late are the name of the system settings). This is used for systems with forecasting and due date adjustment enabled; the default number of days early or late can be overridden here for this panel. This allows how far "early" or "late" the panel can be adjusted to to mesh up with other panels.
    * Leave blank to use the default
    * Specify a positive number of days to override the default
    * Set to 0 to disallow shifting
* <strong>Exit Alert:</strong>  An alert message to display when a member is about to be removed from this panel manually.

![](../adding-editing-health-surveillance-panels.assets/429de09bebae4fced27dc53841099a05.png)

* <strong>Created/Modified/Change Reason:</strong> When a panel is created, {{% system-name %}} displays the initials of the user of who created this panel and the date this panel was created.  If a panel is edited/modified, we store the initials of the user who last modified this panel and the date this panel was last modified.  When a panel is edited, the user must type in a reason for change and this is displayed here.

Click **SUBMIT** button to add the main panel (without components yet) to save the panel to the system

See additional online help documentation titled *Health Surveillance Tab.pdf*

## Edit an Existing Panel

You can edit an existing panel by clicking the edit link in the options column of a panel.

![](../adding-editing-health-surveillance-panels.assets/4308306ba8e094541381ae02aa424411.png)

It will open the current panel with the fields you can edit. Below that section is a revision history of all revisions that have been done to that panel that you can open and view the previous entry if you wish.

![](../adding-editing-health-surveillance-panels.assets/ee60e7f54a440ee3f6c167c50415f6d2.png)

You can edit any field regarding the panel. When you are done, you **must** type in a reason for your edit/change.

It is a required field. Then click the SUBMIT button and it will save your edits and track you as the user who modified and the date/time of modification.

![](../adding-editing-health-surveillance-panels.assets/b730b905d95f04265800da0bc3d36515.png)
