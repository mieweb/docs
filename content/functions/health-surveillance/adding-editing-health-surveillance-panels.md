---
id: '1YPGoGXS1qbrFdUO-FfDCLr0ln_li24Xw8Zdx0u53BnM'
title: 'Adding/Editing Health Surveillance Panels'
date: '2025-04-10T17:48:53.806Z'
version: 109
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'health-surveillance-panels-actions.md'
  - '../system-configuration/work-locations-tab.md'
  - 'health-surveillance-matrix-descriptions.md'
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=1YPGoGXS1qbrFdUO-FfDCLr0ln_li24Xw8Zdx0u53BnM'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Users must have security access to be in the Health Surveillance Panel editor. On the sidemenu tab, click the CONTROL PANEL tab. Once in the Control Panel tab, find (in the listing) *Health Surveillance* **or** click the HSP tab at the top menu of tabs.

![](../adding-editing-health-surveillance-panels.assets/6c77b977b4a93fd18bba1a84efbaf711.png)

The listing of current active Panels will display automatically on the screen, in a grouped datavis perspective format. This Health Surveillance tab of the system lists the various configured Health Surveillance Panels (HSPanels) for your overall system.

If you wish to see any panels that are *inactive*, simply click the Show Inactive link in the title Panels at the top.

![](../adding-editing-health-surveillance-panels.assets/491065e442fd5ab71a4387c21dbe05aa.png)

## Health Surveillance Panel Search

To search for an existing configured health surveillance active panel, scroll on the screen to find the name of the panel.  There are buttons at the bottom to ‘Load All Rows' of the output to see the entire listing of active HSPanels.

![](../adding-editing-health-surveillance-panels.assets/e166445dc3b85e708c2f8a5869c5beb8.png)

## Panel Actions/Action Items

Health Surveillance Panels (HSPanels) are configured and comprise a bundle of individual Panel Actions.  A Panel Action is a specific voluntary or required test/component of an overall Health Surveillance Panel.  These individual tests/components we call *Panel Actions*.

Panel Actions on an HSPanel tells {{% system-name %}} what tests/components should trigger for each HSPanel and when the Patient/Employee should be notified that it is time to schedule or have the tests performed by a specific due date.

### Viewing Panel Actions of a HSPanel

To view existing configured Panel Actions on a specific HSPanel, simply find the specific HSPanel and click the + plus icon to branch open the configuration of that HSPanel.

![](../adding-editing-health-surveillance-panels.assets/7fecb9e1e795f697b77ac316f5d1bcc4.png)

The individual Panel Actions configured on a specific HSPanel will then be displayed as a branched list below the overall HSPanel name.

![](../adding-editing-health-surveillance-panels.assets/068993b1041a54df4d498ce5fb4a2656.png)

The individual Panel Actions can also then be branched open to display some limited configuration of the Panel Action related to Timing and Criteria.  This can be branched open to display by clicking on the + icon of the individual Panel Action item.

![](../adding-editing-health-surveillance-panels.assets/6d74cefd88f9dc420fba4354ebe82d53.png)

To view more details of the specific Panel Action item configured, simply click the eyeball icon on a specific Panel Action item.

![](../adding-editing-health-surveillance-panels.assets/07afd4d44b5e20098a7e47246c66f32b.png)

That will pop-up the *View Panel Action* window that displays all the configuration on the specific Panel Action item, without being in edit mode for it.  This pop-up shows all the additional configuration details for the Panel Action item.

Once the + icon is clicked, the View Panel Action pop-up window will display all configuration entry details for the specific Panel Action item selected.

![](../adding-editing-health-surveillance-panels.assets/adbbc0836e1565b8eef8b88ec070f27a.png)

## Add a New Health Surveillance Panel

To add a new Health Surveillance Panel to the system, simply click the ADD PANEL button.  You must have security permissions to configure HSPanels to the system.

![](../adding-editing-health-surveillance-panels.assets/2329877afaf35a32e3223083c4c6495a.png)

The *Add Panel* pop-up window will display to configure details of the overall Health Surveillance Panel. This is not where individual components/action items are configured though.  That is done separately and is detailed out in a separate guide [Health Surveillance Panels - Actions](health-surveillance-panels-actions.md).

Fill out the necessary fields for the overall HSPanel to be added to the system.

![](../adding-editing-health-surveillance-panels.assets/34df7090052236a203a1417375f65187.png)

Complete the following fields to add Panels one at a time into the system:

The search results will display below columns on the screen for each panel:

* <strong>Panel:</strong> Required.  Is the unique abbreviated acronym or name of the panel and a required field. This field cannot be modified once saved. We recommend no special characters and no spaces.
* <strong>Full Name:</strong> Required.  Is the full name/description of the panel. Is the full name/description of the panel (this is a required field). This full name will be displayed for this panel in listings and dialogs and reports.
* <strong>Description:</strong> Free text field. Can be descriptive as needed.  Is any length of text describing what this panel is for, who is to be included in it, etc. Any helpful information to explain this panel.
* <strong>Representative Event</strong><strong>)</strong><strong>:</strong>  Drop down options are: Procedure or Encounter. Choose the specific procedure or encounter that this panel action will create when this action item is triggered for the employee.  Typically, the choice of Procedure is selected (hence the default to it).
    * <strong>Procedure:</strong> If the event type of <strong>Procedure</strong> is selected, then use the auto-complete field below it to search and select the specific procedure/test/order item (configured in the system) that this Panel Action procedure is to be associated with.  The Procedure will be displayed for this panel action in listings, reports, emails, due list items, etc patient/employees, clinicians and/or supervisors.
        * If you don't see the procedure/test/order item selectable in the auto-complete field, then it wasn't added to the system and doesn't currently exist in the Orders-List Editor.
    * <strong>Encounter:</strong> If the event type of <strong>Encounter</strong> is selected (albeit rarely used), then use the drop-down field below it to select the specific encounter type that should be created and opened automatically when the HSPanel triggers as the specific panel action.
        * Selecting an encounter event type may not be applicable to a Panel Action or even desired functionality by the client. The workflow should be defined clearly if Encounter is selected.
* <strong>Work Regions:</strong> This field is where you set one or more work regions to limit this panel to. This field will only show if you have system setting "Use Work Regions" enabled and have work regions manager tab configured in your system set up.  Setting work regions would be for clients who have different panels for employees in other regions of the world.  It helps you limit the visibility of panel choices in the panel membership and the panels search for other users in the system. See other help documentation titled [Work Locations Tab-Work Regions](../system-configuration/work-locations-tab.md).
* <strong>Open Membership:</strong> Selecting this causes this panel to display on the Panel Membership Overview of a chart, whether the chart is a current member or not of that panel.
* <strong>Restricted:</strong> Selecting this indicates managing this HSPanel's membership will be limited to specific users and/or departments. Only permitted/allowed users/ departments are the ones allowed to add employees/charts to be members of the panel and create membership rules for it.
* <strong>Comments:</strong> These are comments for/on the main panel level. These are displayed as <em>Health Surveillance Comments</em> in a section of the Due List chart tab and in Tests/Procedures section of dynamic encounters. These comments may include instructions on the ‘panel level' that may be useful for staff to see.
* <strong>Owner:</strong> Optional entry that notes the point of contact for managing this panel. This auto-complete field looks for any user in the system to select.  This is an optional entry field that denotes the point of contact (that has to be entered as some type of user in {{% system-name %}} ) for managing this panel.
* <strong>Adjustment Range:</strong>  This field will not display unless 2 system settings are enabled for workflow needs by your MIE Deployment Consultant.  Adjust Early and Adjust Late are the names of the system settings to make this adjustment range field appear on the HSPanel configuration screen.   Adjustment Early & Late fields on the HSPanel are used for systems with forecasting and due date adjustment enabled; the default number of days early or late can be overridden here for this panel. This allows how far "early" or "late" the panel can be adjusted to to mesh up with other panels.
    * Leave blank to use the default
    * Specify a positive number of days to override the default
    * Set to 0 to disallow shifting
* <strong>Exit Alert:</strong> An alert message to display when a member is explicitly removed from this panel.  An alert message to display when a member is about to be removed from this panel manually.

![](../adding-editing-health-surveillance-panels.assets/429de09bebae4fced27dc53841099a05.png)

* <strong>Triggering Orders:</strong> Checkmark options of Entry, Exit, Routine and On Demand to define at what point in the person's chart, the company or other regulating agency requires this HSPanel to be completed (when they enter the HSPanel, or when they Exit (are removed) the HSPanel, or Routinely etc.  Note: On Demand is only currently used for random drug screen HSPanel configuration.
    * Choose ways (with or without membership) that users should be able to manually order/evaluate this HSPanel for a chart. <strong></strong>
* <strong>Active:</strong> If checkmarked, the HSPanel is active for the system.  If uncheckmarked, it signifies the HSPanel is not active for the system.

Click the SAVE button to save your work.  For more information see [Health Surveillance Matrix Descriptions](health-surveillance-matrix-descriptions.md).

## Edit an Existing Panel

You can edit an existing overall HSPanel by clicking the pencil icon on the name of the specific HSPanel.

![](../adding-editing-health-surveillance-panels.assets/18c4e99a516a4a2518bb72dd6a3ef2e3.png)

It will pop-up a window to the *Edit Panel* with the fields you can edit.

![](../adding-editing-health-surveillance-panels.assets/a5b54b94b8c8e2535f15d27b0e89fb85.png)

Click the SUBMIT button to save your edits.

## Learning Management System

To learn more about Adding/Editing Health Surveillance Panels, follow the link below to the Learning Management System course:

* [Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
