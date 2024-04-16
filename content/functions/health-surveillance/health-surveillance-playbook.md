---
id: '1NCyrhUd_Qk586gaah_GvEGedpBOkizQteEtPsldw4C4'
title: 'Health Surveillance Playbook'
date: '2023-06-26T19:23:46.066Z'
version: 399
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'health-surveillance-matrix-descriptions.md'
  - '../system-administration/data-migration/completed-orders-import-tool.md'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-tab/'
  - 'viewing-health-surveillance-panels-and-membership.md'
  - 'health-surveillance-panels-automated-membership.md'
  - '../system-administration/data-migration/panel-membership-import-tool.md'
  - 'health-surveillance-panels-add-memberships-manually.md'
  - 'panel-action-evaluator.md'
  - '../system-configuration/work-locations-tab-work-regions.md'
  - 'health-surveillance-panels-action-rules.md'
  - '../health-surveillance.md'
source: 'https://drive.google.com/open?id=1NCyrhUd_Qk586gaah_GvEGedpBOkizQteEtPsldw4C4'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} offers much in the way of tracking and monitoring individual health and wellness. One key feature is our Health Surveillance module, which allows users to easily track and manage overall health for risk groups and various patient populations. Electronic tool-sets drive the process to significantly decrease risk of compliance failure.

The way {{% system-name %}} does it is through highly configurable, easily manageable health surveillance (HS) panels. HS panels are simply groups of tests that need to be done on a periodic basis, or when starting or ending a position with exposure to a particular environmental or other risk, such as noise, lead, etc. To assist with initial configurations, several HS panels are set up by default in each {{% system-name %}} system. All clients will work with a deployment consultant to identify and assist with the setup of additional panels, as well as the configuration of the existing panels.

![](../health-surveillance-playbook.assets/375044a308922ef05cd46ed79e6166d5.png)

## Overview

It is important to remember that the order in which health surveillance panels are configured matters, and what is done first, before other portions, will affect overall functionality. With that in mind, the following provides a very basic overview of health surveillance considerations and configuration, as seen in 10 steps.

### [Step One: Utilize Matrix to Identify Panels and Needed Contents](health-surveillance-matrix-descriptions.md)

Identify all necessary panels and what will be necessary for configuration. HS panels can be configured for tracking and managing the health and wellness of specific patient populations, exposure groups, etc. A panel defines a group of events or actions that will take place on specific charts on a regular/recurring schedule. A panel action can refer to a procedure that is completed for a chart, as part of a panel, for example. Utilize the matrix provided by the MIE Implementer to gather all necessary panel criteria. The Health Surveillance module is also used to document regularly scheduled voluntary health screenings or checkups using panels.

{{% info %}}
Panels are sometimes referred to as exposure groups, as panels are used for groups exposed to certain hazards due to specific job roles.
{{% /info %}}

### Step Two: Appointment Types for Panels

Add all necessary appointment types to the {{% system-name %}} system, so that they can be associated to each of the Health Surveillance panels, as needed. Simply navigate to the **Scheduler** and utilize the **Appt Types** tab to add and edit, accordingly.

### Step Three: Add Order Items for Panel Contents

All panel action items being entered in the following steps must have corresponding orders in the {{% system-name %}} system. Navigate to the **Orders-List Editor** of the Control Panel, and ensure all necessary order items are available and configured, as needed.

### Step Four: Panels

Add all of the necessary HS panels by navigating to the Control Panel and utilizing the **Health Surveillance** menu, found under the **HSP** tab.

### Step Five: Panel Actions/Action Items/Action Rules

Add all panel actions, as well as any necessary action rules. Panel actions are simply any and all required tests for a given panel. Adding panel actions and configuring them accordingly will add the necessary components to the HS panel, indicating to the {{% system-name %}} system when to notify the appropriate recipient(s) for scheduling or testing requirements of the panel.

### [Step Six: ](../system-administration/data-migration/completed-orders-import-tool.md)[Completed Orders Import Tool](../system-administration/data-migration/completed-orders-import-tool.md)

Action items that are configured with a Trigger Date of **Prior Action (Completed)** will require an order item be specified, in order for there to be an available record in the chart history with a Last Completed Date. This is necessary, so that any additional triggered actions dependent upon the Last Completed Date of the specified order item will be triggered. It is important to have the Last Completed Date imported during the data migration process, prior to enabling any membership automated scheduled jobs, or enabling the HR interface (where applicable), to ensure that surveillance action items trigger with the appropriate Due Dates. This is needed for manual and/or automated panel membership requirements.

Action items configured with a trigger of **Panel Expiration** require that a panel status due date be set or the employee will be considered immediately due upon enrollment into the panel. The panel status date can be manually entered on charts via the Panel Membership tab. Other options include migrating data from another system or manually imported with the [Data Import Tool](https://docs.enterprisehealth.com/functions/system-administration/data-migration/data-import-tab/). 

### [Step Seven: ](viewing-health-surveillance-panels-and-membership.md)[Panel Memberships](viewing-health-surveillance-panels-and-membership.md)

Determine how charts will become members, or be included in HS panels. To establish membership criteria, navigate to the Control Panel and use the **Health Surveillance** menu, found under the **HSP** tab. Locate the panel needing membership criteria from the list and click the **Membership** hyperlink, found to the right, under the Options column. Out of the box, panel memberships will be maintained by staff, manually, unless there are panel membership rules programmed using these fields: Location, Building, Cost Center, or Job Class.

* [Automated (Implicit) Memberships](health-surveillance-panels-automated-membership.md)

    {{% system-name %}} has the ability to automate panel memberships, placing charts into their respective panels, automatically, depending on fields such as Location, Building, Cost Center or Job Class. It is important to have the necessary system settings configured appropriately in order to have functional automated membership. Because the membership is automated from location, building, cost center, or job class, the membership is understood to be implicit. Additional automated membership programming clauses can be programmed and customized by MIE, if necessary.

* [Panel Membership Import Tool](../system-administration/data-migration/panel-membership-import-tool.md)

    When utilizing the Panel Membership Import Tool in {{% system-name %}} , every membership is inserted as explicit. The same is true when entering memberships manually. The Panel Membership Import Tool simply allows a large number of memberships to be added manually, quickly and easily, by way of a template and import tool.

* [Manually Add (Explicit) Memberships](health-surveillance-panels-add-memberships-manually.md)

    Users may add individual charts to specific memberships, as needed.  This will insert the membership as explicit.

* [Viewing Current Members of Panels](viewing-health-surveillance-panels-and-membership.md)

    Users may need to view current members of panels, as well as any current automated {{% system-name %}} panel membership rules that may be set up for a specific panel. Review and maintain regularly, to always ensure proper tracking and management.

### Step Eight: Scheduled Jobs--Panel Evaluator and Membership

It is important to determine what will need to be considered for any automated, or scheduled, jobs. For instance, the Panel Evaluator and Membership scheduled jobs will need to have established setup times in the cut-over plan when ready for go-live, if automation will be needed in the {{% system-name %}} system.

### Step Nine: Email Notifications Driven by Scheduled Job

Determine any necessary information needed for email notifications generated and driven by scheduled jobs, and be sure to configure these, accordingly.

### [Step ](panel-action-evaluator.md)[Ten: ](panel-action-evaluator.md)[Panel Action Evaluator](panel-action-evaluator.md)

Clicking the **Panel Action Evaluator** link (found under the Health Surveillance menu of the HSP tab in the Control Panel) allows users to manually run the evaluator, so that configured HS panels can be tested, or in some cases triggered, as needed. It does evaluate and will trigger any action items (if applicable) on the chart(s) being evaluated. Clicking the Panel Action Evaluator link, providing any necessary criteria, and clicking the Evaluate button will run and evaluate the panel(s) selected, on all members (or individual charts selected), and will trigger any action items applicable. Make sure to use this functionality on test patients before a scheduled go-live. Most clients have a nightly panel evaluator scheduled job, but the manual method described above is also available for real-time use, or for testing purposes.

## Configuring Health Surveillance Panels

Again, the **initial** steps to consider prior to configuring HS panels are as follows:

1. <strong>Utilize the</strong> [<strong>Health Surveillance Matrix</strong>](health-surveillance-matrix-descriptions.md)<strong> to identify all necessary panels and their respective configurations.</strong>
2. <strong>Add any necessary Appointment Types to the</strong> <strong><em>{{% system-name %}}</em></strong>'<strong> system for the HS panels.</strong>
3. <strong>Add any necessary order items for the respective panel actions of the HS panels.</strong>

Once all of the preliminary scoping and determinations have been finalized, ensure all necessary users are established with the appropriate security. In order for users to be able to configure health surveillance panels, they must be provided access to the Health Surveillance menu of the Control Panel, which is found under the HSP tab. It is important to review the security settings for all users needing access to the Health Surveillance and/or Case Management modules.

![](../health-surveillance-playbook.assets/cd0a6135a48f421a9fe778ad84529190.png)

When access has been provided, designated users may utilize the Health Surveillance menu to peruse, configure, and maintain HS panels, panel actions, and action rules. Navigate to the Health Surveillance menu, and the listing of current active panels will display automatically on the screen, below the Panel Search criteria fields.

![](../health-surveillance-playbook.assets/e71d998fba8033dda4b142b3918d6bdf.png)

The current active panels, or the search results, will display below the following columns:

**Panel**: Displays the abbreviated name of the panel.

**Name**: Displays the full name/description of the panel.

**Description**: Displays any length of text providing any helpful information to explain the panel, what the panel is for, who is to be included in it, etc.

**Cert**: If Yes, at least one associated action on the panel is marked Required for Certification; if No, no actions are marked Required for Certification.

**Modified**: Displays the username, along with the date and time, of when the panel was last modified.

**Status**: Active or Inactive. Displays either Active or Inactive panels, depending on the search criteria set.

### Add HS Panels

Looking at the 10 steps outlined at the beginning, users should now be able to begin adding panels, since all appointment types and order items have been added.

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. <strong>Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel. However, if a panel has a Representative Event and needs configured accordingly, see the instructions, below</strong>.

Utilizing the information acquired with the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md), begin adding the specific HS panels needed. When adding HS panels for the first time, administrators have the option of utilizing the [Completed Orders Import Tool](../system-administration/data-migration/completed-orders-import-tool.md), to ease the burden of initial setup and configuration. This allows users to export from other systems and import to the {{% system-name %}} system, requiring just minimal review and potential tweaking to ensure all imported components still fit the triggers and action rules. When using this tool, order items will be created on the fly, rather than putting the burden of creating the orders on the user.

Otherwise, users may add panels manually, completing the following fields, accordingly:

* <strong>Panel</strong>: Required. This is the abbreviated, unique name of the panel. This field cannot be modified once saved.
* <strong>Full name</strong>: Required. This is the full name/description of the panel; usually the same as the Panel field, but it may be different. The full name will be displayed for this panel in listings and dialogues throughout the system.
* <strong>Work Regions</strong>: This field is used to set one or more work regions to which the panel is to be limited. This field will only show if the Use Work Regions system setting is enabled and the Work Regions manager tab is configured in the system. Setting work regions would be for clients who have different panels for charts in other regions of the world. This functionality assists with searching for other users within the system, as well as limiting the visibility of panel choices in panel membership. See the [Work Regions-Work Locations Tab](../system-configuration/work-locations-tab-work-regions.md) documentation for more information.
* <strong>Description</strong>: Free text field. This field may be as descriptive as necessary. Displays any length of text providing any helpful information to explain the panel, what the panel is for, who is to be included in it, etc.
* <strong>Regulatory Source</strong>: Use this field to add the regulatory source/group that has issued a requirement for these actions to be done. This is a free text field; however  will remember prior sources entered in the system.
* <strong>Regulatory Reference</strong>: Use this field to provide an identifier, or number that identified the regulation or rule being tracked (e.g., the OSHA code used to support the order items required for surveillance); otherwise, this field may be left blank/no data.
* <strong>Regulatory Status</strong>:  Add the status of the regulation (e.g., proposed, accepted, active, adopted, etc.). This is a free text field; howeverwill remember prior statuses entered in the system.
* <strong>Open Membership</strong>: Selecting this causes the panel to display on the HS membership matrix even if the respective chart is not a member.
* <strong>Active</strong>: Select this to mark the panel as active. If unchecked, the panel still saves in, but is marked as inactive.
* <strong>Restricted</strong>: Selecting this indicates that managing this panel's membership will be limited, or restricted to specific users and/or departments. Only permitted/allowed users/departments are able to add charts to the panel and create membership rules.
* <strong>Representative Event Type</strong>: Choose Procedure or Encounter. A representative event type is either a procedure or encounter that represents the panel as a whole, if applicable. Unless the HS panel is expected to open an encounter when the orders populate the Due List, then the event type will always be Procedure. Otherwise, the encounter would be opened when the patient checks in for their appointment.
* <strong>Representative Event</strong>: Utilize the drop-down to the right of the chosen Event Type to select the order item that was added to the system and intended to be the representative event. Usually the order and the panel will share the same name. Remember, this is how to manually add panels. More information regarding [representative events](#2et92p0) can be found below.

![](../health-surveillance-playbook.assets/4b7dd451cc8c43b77b35bbf9c3d4dddd.png)

* <strong>Comments</strong>: This field is for providing comments on the panel. These comments may include instructions on the panel level that may be useful for staff. The comments display as health surveillance comments in a section of the Due List, as well as in the Tests and Procedures section of dynamic encounters.
* <strong>Owner</strong>:  This is an optional entry. The auto-complete field looks for any user within the system, and the individual selected denotes the point of contact for managing this panel.
* <strong>Adjustment Range</strong>:  There are two system settings that will need to be enabled in order to use these fields (i.e., Adjust Early and Adjust Late system settings). These fields are used for systems with forecasting and due date adjustment enabled; the default number of days early or late can be overridden here. This allows for an adjustment of how <em>early</em> or <em>late</em> the panel can be, in order to synchronize with other panels.
    * Leave blank to use the default
    * Specify a positive number of days to override the default
    * Set to 0 to disallow shifting
* <strong>Exit Alert</strong>:  Utilize this field to customize an alert message to display whenever a member is to be removed from the panel, manually.

![](../health-surveillance-playbook.assets/aef461f042eea2b0afe0d23d13c928d8.png)

* <strong>Created/Modified/Change Reason</strong>: When a panel is created, {{% system-name %}} displays the initials of the user who created the panel and the date the panel was created. If a panel is edited/modified, the system stores the initials of the user who last modified the panel and the date the panel was modified. When a panel is edited, the user must provide a reason for the change, and it will display here.

Once all of the fields have been completed, as necessary, click the **Submit** button to add the panel. These instructions simply provide the manual means for creating the panel "shell". It is simply a panel with no components or panel actions, at this time.

### Edit HS Panels

Users may edit an existing panel by clicking the **Edit** link from the Options column of the Health Surveillance menu Panels list.

![](../health-surveillance-playbook.assets/8f1421e6787756ae0f61d56d01c7891d.png)

Once clicked, the Panel Editor will load with all available fields open for editing. Toward the bottom of the editor there are two fields showing; when the panel was Created and last Modified.

![](../health-surveillance-playbook.assets/89a5139e4df0ff831984064a1a2b62cf.png)

Prior to submitting any changes, a **Change Reason** must be provided. After typing the reason, click the **Submit** button.

![](../health-surveillance-playbook.assets/22e49dfdd4cae7765ec734a8d57fc9ef.png)

### Panel Actions/Action Items

Remembering the 10 steps outlined at the beginning, users should be able to begin working on step 5:

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel.
5. <strong>Similarly, action items/representative events, as well as possible action rules need to be added to the panels to complete configuration.</strong>

Once all panels have been created, users will want to begin creating any necessary Panel Actions, Representative Events, and/or Action Rules, as appropriate. **Panel Actions** are simply any of the required tests/components of a HS panel. In other words, adding actions to a panel tells {{% system-name %}} what tests are required for each panel, as well as provides notifications, as needed, based on configuration and setup. It is also important to have the Last Completed Date imported during the data migration process, prior to enabling any automated membership scheduled jobs, or enabling the HR interface (where applicable), to ensure that surveillance action items trigger with the appropriate Due Dates. This is needed for manual and/or automated panel membership requirements, as well. The following information walks through how to add any necessary components (actions) to a panel.

{{% warning title="Remember" %}}
Action items that are configured with a Trigger Date of **Prior Action (Completed)** will require an order item be specified, in order for there to be an available record in the chart history with a Last Completed Date. This is necessary, so that any additional triggered actions dependent upon the Last Completed Date of the specified order item will be triggered.
{{% /warning %}}

1. If not already there, navigate to the <strong>Health Surveillance</strong> menu of the Control Panel.
2. To begin adding actions to the respective panels, simply click the <strong>Actions</strong> link in the Options column of the panel being configured. A list of any existing panel actions already in the panel will display onscreen. Ensure the panel action being added does not already exist in the panel.

![](../health-surveillance-playbook.assets/1cf3cc6bde6ae73115e7ddab92d9bb0f.png)

3. Using the information acquired in the Health Surveillance Matrix, begin entering the appropriate actions to each of the respective panels, as needed, clicking <strong>Add Panel</strong>. Otherwise, click <strong>Edit</strong> on an existing panel action to make any necessary changes.

![](../health-surveillance-playbook.assets/343d745c1cda4ff6008caf518e29818b.png)

4. Confirm you are in the Panel Action editor and ensure the name of the panel being updated is listed in the header (e.g., FLU).

![](../health-surveillance-playbook.assets/e6c8781a08fdea85adeff104ca6188b9.png)

5. When adding action items to panels, the [Representative Event panel action](#tyjcwt) is usually added to the panel first. Fill out all of the necessary fields according to the information acquired in the Health Surveillance matrix, and click <strong>Submit</strong> to save the panel action to the panel.
    1. <strong>Action Name</strong>: Required field. The Action Name is usually the name of a test/procedure that is the component/action of the panel. The name will be displayed listings and dialogues throughout the system.
    2. <strong>Description</strong>: Optional. The Description may provide supporting details or information about the Action Name.
    3. <strong>Employee Sex</strong>: All, Male, Female. Select the appropriate sex from the drop-down for which the procedure (action) of the panel would be applicable.
    4. <strong>Employee Start Age (in years)</strong>: Specify a specific start age requirement to be used for this action, or leave blank to signify no specific starting age is required.
    5. <strong>Employee End Age (in years)</strong>: Specify a specific end age requirement to be used for this action, or leave blank to signify no specific end age is required.
    6. <strong>Lead Time</strong>: The Lead Time translates to the number of days prior to the Trigger Date the panel action becomes visible and is created within the system. This defines how many days before the Trigger Date that the panel/orders will populate on the Due List. Keep Lead Times consistent when setting multiple action items in a panel; otherwise, each component of the panel will have different Due Dates if there are different Lead Times on each. Emails can be configured to send email notifications, as needed, with a list of associated charts/employees that will be due. The recipient has the time between receiving the email and the panel action Trigger Date to notify Health Services of any issues or mistakes with the list. Emails to the member/chart will not be sent until the actual Trigger Date. (Email reminders are separately configured on a per client basis. Email notification may not apply to all clients).

{{% tip %}}
If the panel action is for a type of exposure, users will not want to set any Lead Time days. Lead Time is not needed for an exposure type panel action.
![](../health-surveillance-playbook.assets/51346842ae3ed5bbc3af6ca74f53daaa.png)
{{% /tip %}}

    7. <strong>Required for Certification</strong>: Select this to indicate the panel action is required for members of the panel. Leave unchecked if the panel action is voluntary. If checked, a panel member failing or becoming overdue for the action will become de-certified from the panel.
    8. <strong>Indication Rule</strong>: Users can select any action rule found in the Action Rules editor, using the drop-down. For more information on the Action Rules, see the [Health Surveillance Action Rules](health-surveillance-panels-action-rules.md) documentation. The action rule must evaluate to <strong>True</strong> in order for this panel action to trigger for a panel member. [Action Rules](#1fob9te) are usually configured by an MIE Developer after an MIE Implementer has collected all of the necessary details for the configuration.
        1. Indication Rules can be used to only trigger the panel action for a member of the panel, if they are part of a specific department, for example. Or another more complex example would be a panel action configured to trigger a Hep3rd injection, only if the member of the panel had the second Hepatitis injection given within the last 8 weeks.
    9. <strong>Contraindication Rule</strong>: Users can select any action rule found in the Action Rules editor, using the drop-down. The action rule must evaluate to <strong>False</strong> in order for this panel action to trigger for a panel member. For more information on the Action Rules, see the [Health Surveillance Action Rules](health-surveillance-panels-action-rules.md) documentation.
    10. <strong>Trigger Type</strong>: Entry, Routine, Exit. Select the type of trigger, to define at what point in the panel member's current role/job status, the regulating agency or company requires the panel action to be completed. Entry will trigger when a panel member is first put in the panel. The Panel Evaluator scheduled job will run every day, triggering panels as appropriate, based on the the configured panel actions and the trigger type selected.
    11. <strong>Trigger Date</strong>: On what date should the panel action trigger? Use the drop-down to select one of the following Trigger Dates:
        1. <strong>Date of Birth</strong>: Triggers the panel action on the panel member's date of birth, on a schedule determined by the starting age and frequency. Assumes the panel member's DOB has been captured in the chart demographics.
        2. <strong>Last Event</strong>: The Last Event trigger date assumes the last event/panel action Complete Date has been entered in the panel member's chart, so {{% system-name %}} can calculate when the next action item is due. This can be configured to trigger a specified amount of time after the last time the action was performed, if necessary.
        3. <strong>Last Event – On Campaign Date</strong>: The On Campaign Date Last Event trigger date is a custom option for clients. Due on the Campaign's birth date, per se, on a schedule determined by the last time the action was performed and the frequency. This option is not utilized by any other client.
        4. <strong>Last Event – On Date of Birth</strong>: The On Date of Birth Last Event trigger date takes the date of birth of the panel member and triggers based on specified frequency of an action item (e.g., a test is indicated to be completed specifically at age 19, 22, 25, 28, etc.).
        5. <strong>Last Event- On Date of Hire</strong>: The On Date of Hire Last Event triggers the action item on the Date of Hire captured in the panel member's chart demographics. Hire Date should show in the demographics header (grey bar). For example, a test is indicated to be completed at specific intervals, based on the date of hire (e.g.,1999, 2002, 2005, 2008).
        6. <strong>Other Action (Triggered)</strong>: The Other Action (Triggered) trigger date allows users to trigger a panel action at the same time as another action item, indicated in this panel action. For example, an action to trigger an Audiogram may be for Entry, Routine, or Exit actions; if checked, other actions may use this panel action as a trigger. This option must be selected for the action to display in the Related Action list. The Related Action list displays when then Trigger Date is set to Other Action (Triggered) or Prior Action (Completed). Additionally, action items can be configured to trigger with the Representative Events, as needed, if that programming is utilized. This allows all action items to trigger together for a panel. Triggers with all the same date are usually tied to representative event.

![](../health-surveillance-playbook.assets/f9fb610cceb0e770e1ad194097c69a96.png)

        7. <strong>Point in Time</strong>: The Point in Time trigger date allows users to trigger an action item on the same day and month, each year (must be MM/DD format).
        8. <strong>Prior Action (Completed)</strong>: The Prior Action (Completed) trigger date works similarly to Other Action (Triggered). Utilize this option to trigger off of action items needing to be completed, prior to this action item being triggered. This triggers the action item at a given amount of time, specified by the time value/unit entered for Frequency, after another prior action in this panel has been performed. For example, in order for the second in the series for a Hep B injection to trigger, the first injection would need to be marked Complete in the panel member's chart.
        9. <strong>Medical Anniversary Date</strong>: This option triggers on the panel member's medical anniversary date, assuming the date has been captured in the chart demographics. Triggers on the panel member's medical anniversary date, on a schedule determined by the last time the action was performed and the frequency.
        10. <strong>Panel Expiration</strong>: Triggers on the expiration date specified in the panel status. Most panels will be configured with a representative event as the medical/written opinion, which then has a Next Due Date to key in the medical/written opinion recommendation.
    12. <strong>Trigger Others</strong>: If checked, other panel actions may use this action item as a trigger. This must be set for the action to display in the Related Action list.
        1. <strong>Auto-Waive (this action item) if none (no other actions) Triggered</strong>: In instances where a Representative Event may be added after the completion of all other panel actions, this selection will automatically waive creating the orders or re-triggering the previously completed panel actions, just because the representative event is being completed. Since the previous action items were completed within their Valid For window, nothing will be triggered, therefore, auto-waived.
    13. <strong>Frequency</strong>: Day, Weeks, Months, Years. Use the drop-down to define the time period of how often the panel action should be triggered. Actions with zero (0) frequency values will trigger whenever the parent action is set to trigger.
    14. <strong>Valid For</strong>: Day, Weeks, Months, Years. Use the drop-down to define the acceptable time period for which the panel action may be performed, <em>prior to the action Due Date</em>, and still count as acceptable by the regulating body or company. For example, a panel action for an audiogram can be configured to be needed every year, on September 1st AND Valid For 3 Months. The system will check for audiograms completed 3 months prior to September 1st, and if one was completed within that time frame, {{% system-name %}} will not generate the panel action. By defining 3 months in the Valid For field, the user is stating that an audiogram within 3 months of the due date is within the regulating agency/company threshold.
        1. <strong>Current Panel Only</strong>: This is a checkbox that is associated with the Valid For field. If checked, this panel action will be triggered, regardless of whether the same encounter or procedure was completed for a different panel. For example, if a panel member is included in both the Asbestos panel and Benzene panel, and both require a Chest Xray, then {{% system-name %}} would (by default) only populate Chest Xray once on the Due List. With the Current Panel Only option selected, in this example, the Chest Xray will display twice, once for each panel.
    15. <strong>Grace Period</strong>: Day, Weeks, Months, Years. Use the drop-down to define how much time the panel member is allotted to complete the panel action, from the time it is visible till the time it is considered overdue. Periodic email notifications can be set up with scheduled jobs, if preferred. The Grace Period is <strong>before</strong> the Due Date, meaning the Grace Period is the amount of time before the Due Date that the invitations, emails, and questionnaire become available. The panel member gets notified at the point of the Grace Period plus Lead Time.
    16. <strong>Event Type</strong>: Procedure or Encounter. Choose the specific procedure or encounter that this panel action will create when the action item is triggered for the panel member. Typically, Procedure is selected. If procedure is selected, then choose the procedure/order that is to be associated to the panel action, from the drop-down to the right of the Event Type. Usually order items are named similarly, if not the same as, the panel action being added. If the appropriate order item cannot be found, the item was not added to the Orders-List Editor. If Encounter is selected, then select the encounter that should be opened automatically when the panel triggers the panel actions to create the orders on the Due List. Selecting an encounter may not be applicable to all actions or even desired functionality by the client. The workflow should be defined clearly if Encounter is selected.

{{% note %}}
Health Questionnaires (if being done electronically and via portal) would be an Encounter event type and the specific electronic encounter order item would need selected (the order item that points to the electronic health questionnaire layout). For every questionnaire that users want documented electronically, via an encounter, two (2) order items and panel actions are needed; that's one (1) for the Health Questionnaire electronic encounter and the other (1) for the Due List item, in order to mark Complete.
{{% /note %}}

    17. <strong>Instructions</strong>: Free text instructions for a provider to perform this action item, if necessary. Could be instructions or pass/fail criteria, etc.
    18. <strong>Active</strong>: Select to indicate panel action is active. Uncheck to deactivate this panel action within the panel.
    19. <strong>Created Date</strong>: Automatically generated by system and displays the date/time and initials of the user who created this individual action item.
    20. <strong>Modified Date</strong>: Automatically generated and tracked by system, and displays the last modified date/time and initials of the user who last modified this individual action item.
    21. <strong>Change Reason</strong>: Any time a panel action is modified/edited, a reason for change must be typed by the user who is modifying. This is required before the user may submit and save changes to the panel action item.

#### Panels with Representative Events

Representative Events are simply panel action items that serve as entry, routine, and/or exit representative events, meaning they are intended to trigger subsequent actions. When setting up panels with representative events, it is suggested that users create the representative panel action item for each trigger type (i.e., entry, routine, and exit).

The representative panel action and panel name are usually the same. In this example, there is an Entry panel action and Routine panel action, which serve as the representative event.

![](../health-surveillance-playbook.assets/1c413b530b3b4bbfdb77c8f7e11beefd.png)

More information is provided below, outlining how to set up panels with representative events; however, for now, simply note that representative events are panel actions and can be entered similarly, with a few minor adjustments to the configuration in order to trigger the additional events more efficiently.

Think of representative events as a way to trigger multiple actions, across the various event types (i.e., entry, routine, exit), without having to enter the additional action items multiple times in the panel configuration. For example, users only have to enter all other action items that are not the representative event once, because they will trigger from the representative event, as explained in the instructions below.

When the representative event has already been created for the appropriate trigger times, as seen above, adding other action items is as simple as adding a panel action item.

1. Create the action item.
2. Set Trigger Type to <strong>Routine</strong>.
3. Using the Trigger Date drop-down, select <strong>Other Action (Triggered)</strong>.
4. Next, select the action item(s) with the respective trigger type(s), to be triggered by the representative event.

{{% note %}}
Action items to be used for the Trigger Date must be entered into the panel, first, before being available for selection from the drop-down.
{{% /note %}}

![](../health-surveillance-playbook.assets/9668dad349f0c9103de43ec3ef3dfc93.png)

### Action Rules

Looking back to the 10-step process in order to stay on track, users should *still* be on Step 5:

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel.
5. <strong>With the action items/representative events completed, action rules will need to be added to the panels to complete configuration, as appropriate.</strong>

Action Rules can be very important for some health surveillance needs. The {{% system-name %}} system offers the ability to configure and apply **Indication** and **Contraindication** **Rules** that are then applied to panel actions. These rules need to evaluate as either true (Indication Rule) or false (Contraindication Rule), in order for the panel action to trigger, as needed. For a brief explanation of each rule, see the [Indication Rule](#3dy6vkm) and [Contraindication Rule](#1t3h5sf), above. To access Action Rules navigate to the Health Surveillance tab in the {{% system-name %}} system, where there is a link to the **Action Rules** editor in the top-right corner of the page.

![](../health-surveillance-playbook.assets/659377282c516c0149c81ee3064a4574.png)

Upon clicking into the Action Rules editor, a list of all existing indication and contraindication rules will display. Inactive indication/contraindication rules can be viewed by clicking the **Show Inactive** link, in the upper-left corner of the page. And to begin editing an existing rule, simply click the Edit button to the right of the rule needing changed.

![](../health-surveillance-playbook.assets/6d34c53a615f33fb77950814267fef06.png)

Action rules can be added to the system using the Action Rules editor, by simply providing a Name, the Script, and clicking the Add button; however, indication/contraindication rules are usually configured by an MIE developer. Clients would contact the MIE implementer to provide all of the action rule criteria needed for the system panel(s), and that information would then be considered for any necessary script(s).

![](../health-surveillance-playbook.assets/4e0f6a8c5358d97a10262ae3bb7e257f.png)

{{% note %}}
Once any action rules are programmed into the {{% system-name %}} system, they should be tested, to ensure all indication and contraindication rules are triggering, as expected.
{{% /note %}}

With the action rules configured and tested, they can be selected from the Panel Action editor, as drop-down options in the Indication Rule and Contraindication Rule fields. These action rules can be linked to panel actions, as needed.

![](../health-surveillance-playbook.assets/bc4b606d5641d3da282487e7585c9198.png)

#### Test the Action Rule

Once action rules have been created, it is important to test each one, to ensure indication or contraindication rules trigger as desired. Testing can be done from within the Action Rule editor. The example, below, shows the criteria for an action rule that the panel member must be female. It should be noted that action rules typically use more complex criteria than gender or age, since those are already included in the panel action definition. However, this example is to simply show how testing action rules works.

From the Action Rules editor, users may click the Test button, once all criteria has been entered. This allows for testing existing action rules, as well as rules being added or edited. With the action rule being edited or being added, click the **Test** button.

![](../health-surveillance-playbook.assets/0329f44a4d8afdbe941351d6fbecfeaf.png)

A Test Rule pop-up will display, where a chart can be selected to test the action rule against. In this example, the selection will be Harris, Christine (DOB: 03/11/1975).

![](../health-surveillance-playbook.assets/e2325c70e55d681ae71c9fc6a3dc8021.png)

After selecting the chart, the test rule result will display as True or False, and additional information will be provided directly below that. This information tells users if an action rule is an Indication Rule or Contraindication Rule.

![](../health-surveillance-playbook.assets/8b810077324b73d904ca2db741d6ffb0.png)

For more information on Action Rules, be sure to check out our [Health Surveillance Action Rules](health-surveillance-panels-action-rules.md) documentation.

### Completed Order Import Tool

Looking back on the 10 steps outlined at the beginning, users should be considering step 6:

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel.
5. Similarly, action items/representative events, as well as possible action rules need to be added to the panels to complete configuration.
6. When adding HS panels for the first time, administrators have the option of utilizing the [Completed Orders Import Tool](../system-administration/data-migration/completed-orders-import-tool.md).

Action items that are configured with a Trigger Date of **Prior Action (Completed)** will require an order item be specified, in order for there to be an available record in the chart history with a Last Completed Date. This is necessary, so that any additional triggered actions dependent upon the Last Completed Date of the specified order item will be triggered. It is important to have the Last Completed Date imported during the data migration process, prior to enabling any membership automated scheduled jobs, or enabling the HR interface (where applicable), to ensure that surveillance action items trigger with the appropriate Due Dates. This is needed for manual and/or automated panel membership requirements.

### Panel Membership

Next in the 10-step process, is panel membership. Out of the box, panel memberships will be maintained by staff, manually, unless there are panel membership rules programmed using the default fields (i.e., Location, Building, Cost Center, or Job Class).

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel.
5. Similarly, action items/representative events, as well as possible action rules need to be added to the panels to complete configuration.
6. When adding HS panels for the first time, administrators have the option of utilizing the [Completed Orders Import Tool](../system-administration/data-migration/completed-orders-import-tool.md).
7. <strong>Determine how charts will become members, or be included in HS panels.</strong>

When reviewing panel membership, it is important to understand the different types of membership available in the {{% system-name %}} system, as well as how membership can be configured and maintained. The most basic breakdown looks at automated membership ([Implicit](#4d34og8)) versus manual membership ([Explicit](#2s8eyo1)). More on that below.

In order to review, configure, and maintain panel membership, users will need to navigate to the **Health Surveillance** menu of the **Control Panel**. Clicking the Membership link from a specific panel on the panel list will take users with the appropriate permissions to the Panel Membership editor.

![](../health-surveillance-playbook.assets/102aa223716f6f34e1e817959b083e35.png)

In the above example, the Animal Hand panel membership is being edited. When the page loads, the panel name will display in parenthesis, with the title, at the top of the page, as well as a listing of any associated membership rules and any established individual includes/excludes.

![](../health-surveillance-playbook.assets/54052f450743dcb42ea0799a9bf20ff0.png)

The **Membership Rules** section shows all membership rules that are automated, intended to place charts into a panel as members, based on specified criteria, automatically. Automated panel membership rules are *implicit*.

The **Individual Include/Exclude** section shows all charts that are included/excluded at the panel level of the selected panel.

**Membership Approval** offers administrators the ability to notate the last time membership was validated and approved. Simply click the **Approve Membership Now** button, and a timestamp with the user's profile will be linked.

#### Implicit (Automated) Membership

Implicit, or automated, membership rules allow for charts to be placed into panels according to established criteria, automatically. Membership can include and/or exclude charts based on location, building, cost center, job class, or some other custom query. MIE developers will help write this query and can also write custom queries, if there is a need for automated membership based off of any other type of field besides the 4 default fields.

If any automated membership rules exist for the specific panel being viewed, they will be listed under the **Membership Rule** section. Rules will be listed as Included or Excluded, displaying the location (**Loc**), building (**Bld**), cost center (**CC**), or **job class** being used to limit the membership rule. If custom queries (additional criteria) are also or instead looked at to determine which employee charts are considered members of a panel automatically, then it would be listed in the *additional criteria* field, which is only displayed if users edit the membership rule. The start date for the membership rule is also indicated.

{{% note %}}
Automating membership rules can only be done once the HR interface has been established and is functioning. Automated membership rules also look at what charts are considered *active*, so it is important to work with the MIE Implementer on what an active chart is considered in the system, based on the HR interface fields being received.

![](../health-surveillance-playbook.assets/da1675830a03fdbfb585387a87f5d283.png)

Also, whenever the Panel Action Evaluator runs, any pending orders for patients with explicit panel memberships will be deleted if that patient fails the Active Patients Clause criteria.
{{% /note %}}

**Add Automated Membership Rule**

MIE developers are likely going to program automated membership rules on any panels needed, but to add an automatic implicit membership rule to a specific panel, click the **Add Membership Rule** hyperlink from the membership screen.

![](../health-surveillance-playbook.assets/01e08dfb4769ae5d27183d2c5ba2de58.png)

Once the Panel Membership editor loads, users may add inclusion rules and/or exclusion rules, as needed, based on the default four options. Otherwise, additional scripting can be utilized in the Additional Criteria field, as needed.

![](../health-surveillance-playbook.assets/7d11d768c59192ca4ee9e8eba467e039.png)

It is recommended that configuring and testing surveillance panels be done in a DEV/QA system, first. Simply [export/import the panels to the system](#17dp8vu), set up the necessary rules, and test to validate. Utilize the [Panel Action Evaluator](panel-action-evaluator.md) to perform a spot-check.

{{% note %}}
It is important for the MIE implementer to have the scheduled job enabled for the panel membership evaluator, as well as the panel action items evaluator, to run each night if automated membership rules are set in place. These scheduled jobs are what make the panel action evaluator run, and the automated membership rules run nightly.
{{% /note %}}

![](../health-surveillance-playbook.assets/99315d925b8db2969a4d762532552fa6.png)

#### Explicit (Manual) Membership

Explicit, or manual, membership rules allow for charts to be placed into panels individually via panel or chart, as needed. In other words, membership can be managed by adding any explicit rules calling to include and/or exclude charts. This can be done directly from within the panel editor, or from within the chart's **Panel Overview**.

If any manual membership rules exist for the specific panel being viewed from the Health Surveillance menu of the Control Panel, they will be listed under the **Individual Include/Exclude** section. The explicit memberships display the chart that is being included or excluded, as well as when the rule was added and started.

![](../health-surveillance-playbook.assets/be53905b9a8c4c7ecef9acfdc4b85e74.png)

Add Memberships Individually and Manually via Panel

Users may add individual charts to specific panels for membership, as needed. To add an automatic implicit membership rule to a specific panel, from the Health Surveillance menu of the Control Panel, click the **Add Explicit Membership** hyperlink from the Membership editor.

![](../health-surveillance-playbook.assets/cf2f8d6c52dc99aa5d422f433a8e0518.png)

Once the Panel Membership editor loads, users may select charts to be added as inclusion or exclusion rules, as needed. Simply select the chart name, type in a reason for adding this chart to the panel explicitly, and select what type of membership is required (i.e., include or exclude). Usually the Trigger Entry/Exit Actions option will remain selected as to ensure the chart will be triggered for inclusion/exclusion upon submission. Any panel action items will then trigger on the Due List.

![](../health-surveillance-playbook.assets/b0cb849e738aa710d5f7aea4c5374378.png)

{{% tip %}}
Users can add multiple charts using the Employee autocomplete to build a list of charts and do more than one at a time, *for the same panel, reason, and type*.

![](../health-surveillance-playbook.assets/56e223c565054cc9ed86db25ebcc714e.png)
{{% /tip %}}

Placing employees as members into a specific panel from this screen is the same as going into the chart's Panel Membership Overview chart tab and manually addressing membership needs there. Users may put employees, individually into panel(s), using either method.

Add Memberships Individually and Manually via Chart

While in a chart, users may add the employee/patient to a specific panel, as needed. Adding charts to panels in this way is manually adding the employee/patient as an explicit membership of the specified panel, therefore requiring manual maintenance for upkeep, going forward. Navigate to the **Panel Membership Overview**.

![](../health-surveillance-playbook.assets/a113bdaf92a0da0d396360116437f339.png)

Once the Panel Membership Overview loads, users will see an assortment of options available for adding, tracking, and maintaining surveillance panels. Users can Add Panels, view and manage Current Panel Membership, and view Panel Membership and Employer Organization History.

![](../health-surveillance-playbook.assets/9da40c31b958be891e88f723fab951e0.png)

When manually adding charts to a panel, it is important to verify the chart is not already a member of the panel. Review the listed panels under the Current Panel Membership section. To add the chart to a panel, use the drop-down available under the **Add Panel** section. Select the appropriate panel and click the **Submit** button.

![](../health-surveillance-playbook.assets/cd8823faf9a1298092cbb8e9d0cc895f.png)

After clicking Submit, the page will refresh and display the panels alphabetically, as individual columns. Additional panels can be added, as needed; however, this is not saving, and further steps are needed to complete enrolling charts into the necessary panels.

![](../health-surveillance-playbook.assets/f4ba13ac2952ca5a4261ba225b8837ac.png)

Once all necessary panels have been submitted, users will need to select each panel the chart should belong to by check-marking the appropriate boxes. This will indicate manual (explicit) membership. When indicating a chart is a member of a panel, using the selection boxes will open a Change Reason field, which can be configured to be required before submission. Provide a reason for changing or adding a chart to the panel(s).

![](../health-surveillance-playbook.assets/a6749ba8a9378ccdb72b1d3683109032.png)

Once all of the necessary panels have been selected and the change reasons have been provided, users may click the **Submit** button at the bottom of the page to save all changes. Nothing is saved until the Submit button at the bottom of the page is selected. The panel action items are evaluated on the chart, once this Submit button is selected. In other words, the Submit button serves as a force/evaluate of the panel(s).

![](../health-surveillance-playbook.assets/3b8a3e0cc9a216fc8890492f9d3213ed.png)

The panel action items will also trigger on the chart **Due List**, as soon as the chart is updated with panel membership.

![](../health-surveillance-playbook.assets/53080d1e62a1dc2a09139c03e502d759.png)

Administrators needing additional information on checking or viewing panel membership, please see our [Health Surveillance](../health-surveillance.md) documentation for the relevant pages.

### Scheduled Jobs, Notifications, and Panel Action Evaluator

With the HS panels configured and ready for final testing and implementation, the last few steps of the process involve automation, notification, and ongoing maintenance needs:

1. Utilize the [Health Surveillance Matrix](health-surveillance-matrix-descriptions.md) to identify all necessary panels and their respective configurations.
2. Add any necessary Appointment Types to the {{% system-name %}} system for the HS panels.
3. Add any necessary order items for the respective panel actions of the HS panels.
4. Once initial configurations are completed, add all necessary panels via the Health Surveillance menu of the Control Panel.
5. Similarly, action items/representative events, as well as possible action rules need to be added to the panels to complete configuration.
6. When adding HS panels for the first time, administrators have the option of utilizing the [Completed Orders Import Tool](../system-administration/data-migration/completed-orders-import-tool.md).
7. Determine how charts will become members, or be included in HS panels.
8. <strong>Scheduled Jobs: Panel Evaluator and Membership</strong>
    1. It is important to determine what will need to be considered for any automated, or scheduled, jobs. For instance, the Panel Evaluator and Membership scheduled jobs will need to have established setup times in the cut-over plan when ready for go-live, if automation will be needed in the {{% system-name %}} system.
9. <strong>Email Notifications Driven by Scheduled Job</strong>
    1. Determine any necessary information needed for email notifications generated and driven by scheduled jobs, and be sure to configure these, accordingly.
10. [<strong>Panel Action Evaluator</strong>](panel-action-evaluator.md)
    1. Clicking the <strong>Panel Action Evaluator</strong> link (found under the Health Surveillance menu of the HSP tab in the Control Panel) allows users to manually run the evaluator, so that configured HS panels can be tested, or in some cases triggered, as needed. It does evaluate and will trigger any action items (if applicable) on the chart(s) being evaluated. Clicking the Panel Action Evaluator link, providing any necessary criteria, and clicking the Evaluate button will run and evaluate the panel(s) selected, on all members (or individual charts selected), and will trigger any action items applicable. Make sure to use this functionality on test patients before a scheduled go-live. Most clients have a nightly panel evaluator scheduled job, but the manual method described above is also available for real-time use, or for testing purposes.

## Data Migration Workflow Considerations

As we may recall, the Health Surveillance module allows users to easily track and manage overall health for risk groups and patient populations. Electronic toolsets drive the process to significantly decrease risk of compliance failure. The way {{% system-name %}} does this is through highly configurable, easily manageable health surveillance (HS) panels. HS panels are simply groups of tests that need to be done on a periodic basis, or when starting or ending a position with exposure to a particular environmental or other risk, such as noise, lead, etc. To assist with initial configurations, several HS panels are set up by default in each {{% system-name %}} system. All clients will work with a deployment consultant to identify and assist with the setup of additional panels, as well as the configuration of the existing panels; however, there are some things that need to be considered when having to migrate legacy surveillance data, which is what we want to cover more in-depth below. Following that is information on how to utilize the import/export tools available with every {{% system-name %}} system.

### Strategies for Migrating Legacy Health Surveillance Data

Health Surveillance (HS) Data is typically broken down into 4 parts during the data migration process:

1. Active HS Memberships and Next Due Dates
2. Historical HS Memberships
3. Open Orders
4. Historical Orders

#### Active HS Memberships and Next Due Dates

Nearly every {{% sys-name %}} data migration involves the migration of active HS memberships and Next Due Dates. Membership inclusions and exclusions may be explicit or implicit depending on the configuration of each panel, and those decisions will all weigh into the scoping of the data migration.

**Historical HS Memberships**

Some clients require the migration of historical, or non-active HS memberships. There are two possible migration tactics that should be considered in these cases:

1. Discrete data migration of Historical HS Memberships involves migrating memberships with a Begin and End Date for each employee's expired panel. Discrete migrations such as these require mapping each legacy panel membership to {{% sys-name %}} panels, which will then allow for the reporting of historical panel memberships and dates, per employee.
2. Non-Discrete summary documents of historical HS memberships provide a single document showing the legacy name of the panel for each chart with HS memberships, along with the start- and end-dates where that data is available. These documents are significantly less effort than discrete data migrations of historical HS memberships, and allow clinicians to reference the historical entry and exit data of an employee's memberships.

#### Open Orders

In some cases, open or pending orders are required for migration for employees with overdue but active panel memberships. This use case is discussed further in the section on [How to determine the Next Due Date on a HS Panel](#3rdcrjn).

#### Historical Orders

In some cases, migration of completed orders are required to show that tests or tasks were completed on a particular date. Like any other data migration, discrete migration of historical orders involves more mapping and more effort than creating a summary document of historical orders. The following use cases are most common where the migration of historical orders are needed:

1. Some companies have legal requirements requiring documentation that a procedure, task, or lab was performed. If the migration of the related areas of data is not sufficient, then a summary document may be a good option to show when those items were performed in the legacy system.
2. Some reporting requirements dictate the tracking of historical orders. If reports on discrete tests and tasks are performed, then a discrete migration of historical orders may be needed.
3. If employees are enrolled implicitly into Health Surveillance panels based on their job, location, or other demographic information, then a discrete migration of the representative events for each HS panel configured using implicit inclusion rules may be needed. More information on Representative Events can be found in the section on [How to determine the Next Due Date on a HS Panel](#3rdcrjn).

### UL/OHM-Specific Overview for Migrating Legacy Health Surveillance Data

Over the years {{% system-name %}} has completed many data migrations from OHM. Through this process our team has built a series of tools to allow us to convert this data quickly and easily. The following outlines the types of data, modules, and storage we consider for the migration. Consider the storage type needed for the data being migrated, as well as the mapping that may be required when pursuing efforts of discrete data, specifically. Note the table names in parentheses utilized for each module.

{{% note %}}
{{% system-name %}} will map the legacy data based on a repository of existing queries used in previous migrations. **Discrete data** mapping is data inserted in such a way to be captured both in the chart, as well as in the standard {{% sys-name %}} reports. **Summary data**, on the other hand, is available for reference within the chart. Some discrete data is also available for reporting, such as document type, service date, and service location, using the Detail Document search. The contents of the document, however, will not be included in any {{% sys-name %}} reports, such as OSHA logs, utilization reporting, etc.
{{% /note %}}

<table>
<tr>
<td>Module</td>
<td>Discrete</td>
<td>Summary</td>
</tr>
<tr>
<td>Employee charts and demographics (OHM table Employee)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Users and providers (EXAM/USER)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Vitals (VITALS)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Health surveillance enrollment and next due dates (EXPHIST)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Audiometric exams (AUDIO)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Pulmonary function tests (PFT)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Laboratory results (LABRESULT/LABPANEL)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Vaccines and immunizations (IMMUNE)</td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>Encounters/Incidents (LOG/ELOG/LOG_MEMO/ELOG_MEMO)</td>
<td></td>
<td>x</td>
</tr>
<tr>
<td>Scanned documents</td>
<td></td>
<td>x</td>
</tr>
</table>

In other words, a typical data migration for OHM will consist of the modules listed above, and the respective tables will be queried in order to retrieve all of the necessary data. Additionally, exposure history is stored in the EXPHIST table, with the Exposure Types defined in EXPOSURE. These are migrated as either current or historical panel memberships, skipping the entry triggers. And by skipping the entry triggers, the orders created by the Panel Action Evaluator will respect the panel status Next Due Date. Additionally, OHM generates Next Due Dates for each exam on a nightly basis. This process (similar to the {{% sys-name %}} Panel Action Evaluator) stores the data in a table named Required Exam (REQEXAM). The unique key for this data is the Employee, Exposure (or panel), and Exam (or order).

{{% note %}}
The {{% system-name %}} system also has a unique chart tab that resides within the Health Surveillance module. This chart tab displays all respirator-like panels, as well as the results of fit testing, so be sure to consider this when scoping data migration needs.



![](../health-surveillance-playbook.assets/0056a5262bad2745cae1b5813b2c9d49.png)


{{% /note %}}

Migrating completed orders from exams is one strategy, but that requires mapping hundreds of orders, and adds additional complexity, fees, and timeline. A slightly quicker strategy is to identify the legacy representative event for the exposure panel, and use the Next Due Date for the panel status Next Due. This screenshot shows the audio test (92551) as the representative event for the Hearing Protection (HCP) exposure panel.

![](../health-surveillance-playbook.assets/16e4dc9ff55106aec5249061929732a6.png)

{{% note %}}
The {{% sys-name %}} panel evaluator does not create orders for a panel when the panel status Next Due Date is in the past. For this reason, panel statuses that are overdue should be migrated with a Next Due Date of tomorrow; the day after the migration.
{{% /note %}}

#### How to Determine the Next Due Date on a HS Panel

Next Due Dates are a critical piece in migrating legacy Health Surveillance membership information to {{% sys-name %}} . Given the variability of data migrations, {{% sys-name %}} offers a few options when considering the optimal method for a successful data migration:

#### Medical Anniversary Date

The {{% sys-name %}} system supports a Medical Anniversary Date concept. This option triggers on the panel member's medical anniversary date, assuming the date has been captured in the chart demographics. If all charts are expected to be due at the same time, each year, on a specific date (e.g., anniversary, hire, rehire, birthday, etc.), this option would be good to consider.

#### Next Due Date

Some legacy systems track Next Due Dates with HS membership. In these cases, {{% sys-name %}} can use that date, directly, when the mapping from legacy panels to the  {{% sys-name %}} panels. If some legacy panels are merged into a single {{% sys-name %}} panel, then direction will be required to decide which Next Due Date is required for the migration. Where possible, identifying the Next Due Date for each HS membership is the preferred method for migrating legacy health surveillance data.

#### Representative Event

If a Next Due Date is not explicitly available in the legacy system, then a Representative Event is the next preferred option for determining Next Due Dates in the {{% sys-name %}} system. In day-to-day operations of {{% system-name %}} , the system will base the HS panel completion on Representative Events. In other words, though HS panels may consist of many individual orders with varying rates of testing frequency, each panel is assigned an order to serve as the Representative Event. When that order is completed, then the HS panel is considered complete, until the Next Due Date, which is typically calculated based on the representative event Completion Date plus the frequency of the panel.

When migrating surveillance memberships from legacy systems to {{% system-name %}} , a Representative Event may be identified in the legacy system. This could simply be the date of a particular or most recent laboratory result, a completed order, or the most recent date of a particular document type in the legacy system. If this type of migration is used, then a mapping will need to be established between the legacy HS membership, the new {{% sys-name %}} panel ID, the location of the legacy date in the legacy system, and the frequency of the panel. Depending on the complexity of this request and the number of memberships being required, this mapping effort could exceed the number of hours typically set aside for this work, and additional fees may apply in this case.

#### Minimum Date of Events

If a single Representative Event is not available in the legacy system, a similar method would be to use the Minimum Date from a set of related labs or orders. In the legacy system, there may be several labs or orders as a part of a HS panel. If a single Representative Event is not identifiable, then it may make sense to use the most Minimum Date among the set of labs/orders. In this way, the next health surveillance event would trigger at the earliest date of all components, and clinicians can waive or apply new due dates for new orders on components of the panel that are not due during the first surveillance event. Depending on the complexity of this request, the number of memberships being required, and the potential number of labs or orders to be considered, this mapping effort could exceed the number of hours typically set aside for this work, and additional fees may apply in this case.

#### Migrate Orders

If completed orders are being mapped and migrated for each of the tests and tasks associated to every health surveillance membership, then completed orders can be used to determine the Next Due Date, based on each panel's Next Due Date. This type of migration is useful when there are certain testing requirements based on age, or other demographic components, and a Next Due Date is not explicitly available in the legacy system. It is also useful if there are reporting needs that are tied to the completion of tasks and/or laboratory testing, or if the clinical staff cannot or does not want to review each chart's list of tests to be performed during the first scheduled HS review, where orders are reviewed and waived due to recent testing.

{{% note %}}
Migrating orders is its own set of data migrations scoped separately from Health Surveillance memberships, cases, or other areas of data.
{{% /note %}}

### Charts/Employees with Overdue HS Status

Whenever a member is added to a panel as a Current/Active but has a Next Due Date in the past, the chart is considered Overdue for the HS Status. When doing a data migration, there may be a few reasons this may occur:

* The member is in fact in the panel, and they are overdue for the surveillance.
* The member is no longer active in the panel, but the legacy system does not reflect the correct status (i.e., Active).
* The member's Next Due Date has not been updated correctly.

Whether the legacy data is bad or if the overdue employees are actually out of compliance, the following options are available for migration:

* The Next Due Date on the panel for historical dates can be set to tomorrow's date. When this happens, the Panel Action Evaluator will see the employee is compliant (today), and it will trigger new orders when the employee comes due tomorrow. This option is recommended if the customer has a high degree of confidence in the accuracy of the legacy data being migrated to the {{% sys-name %}} system.
* The Panel Status system report can provide a list of Active/Overdue charts. The legacy panels can be imported with past-due dates and an Overdue status, and when the Panel Status system report is run, the results can be reviewed to address any overdue employees on a case-by-case basis. This option is recommended when the data being migrated is questionable.
* Open historical orders can be created with past-due dates for employees who are out of compliance. This option is recommended when the legacy dates are critical to a workflow, and there is a high degree of confidence in the accuracy of the legacy data being migrated to the {{% sys-name %}} system. This option requires custom mapping and custom scripts to be developed during the migration process, and additional fees and time to deployment may apply. Please discuss with your Onboarding Technical Consultant for additional information.

## Export/Import Health Surveillance Panels

In order to review and export/import HS panels, users will need to navigate to the Health Surveillance menu of the Control Panel. Scroll to the bottom of the list of panels, and clicking the appropriate link, **Export Panels** or **Import Panels**. Because action items that are configured with a Trigger Date of Prior Action (Completed), these links allow users to migrate information between {{% sys-name %}} systems, quickly and easily.

![](../health-surveillance-playbook.assets/f8a1beba19aefa30eb579f735ec9b24a.png)

An MIE Implementer will most likely be utilizing this functionality the most; however, clients with a Development (DEV) or Test (QA) system may utilize this functionality to export/import panels into the respective systems, as needed. For more information on how to export and import panels, see the instructions below.

### Export Panels

Similar to a copy/paste function, users will want to be in the system from which panels will be exported, or copied.

Navigate to the Health Surveillance tab of the Control Panel, and click the **Export Panels** link, found at the bottom of the page below the listed panels. Select all panels needing to be exported by placing a check in the box of each needed panel

![](../health-surveillance-playbook.assets/2f67b541ef325a857aa1255d6fddea65.png)

With the panel(s) selected, click the **Show Data** button. This renders the HTML necessary for importing the panel(s) into the other system.

![](../health-surveillance-playbook.assets/f7c1a0f25c51f8f3b2a62b20da5f4f9c.png)

{{% tip %}}

Because the Export Panels link only pulls panels that are displayed on the screen for selection, systems with large numbers of panels may want to perform a search for the necessary panel(s), first; prior to clicking the Export Panels link. For example, the user of a very robust system only wants to export a TB Surveillance panel from the system. They will,

1. Want to perform a panel search by keyword, clicking Search when ready.
2. Click the Export Panels link.
3. Make sure only the desired panel to be exported is selected. This ensures all other panels do not copy, avoiding the extra work of having to de-select any unwanted panels. 
    ![](../health-surveillance-playbook.assets/55eec80228b6a0a266a36eab7055df62.png)

{{% /tip %}}

After clicking the Show Data button, click the mouse within the HTML programming text box. This places the cursor in the text box. Using the keyboard, press Control + A key. This will highlight all of the text. Right click and select copy, or using the keyboard, press Control + C key. When finished copying, close the window. Users may use this to import the panel(s), now.

![](../health-surveillance-playbook.assets/1e314089c7db163bf92e1f80c184d2cd.png)

### Import Panels

In order to import panels into another system, users must have already completed the Export process, [described above](#26in1rg).

To import a panel, take the data that was copied from the Export process, then go to the system into which the panels are being imported. Navigate to the Health Surveillance tab of the Control Panel, and click the **Import Panels** link, found at the bottom of the page below the listed panels. A blank text field will appear with the title *Import Panels*.

![](../health-surveillance-playbook.assets/1ea780baf9000b08ac8feabdf62106f4.png)

Click the mouse within the text field. Right click and select **Paste**, or simply click the Control + V on the keyboard.

![](../health-surveillance-playbook.assets/90c1f14b412b53c0242ee3f2849c3ab2.png)

After pasting the export data into the text field, click the Import Data button, to submit and import the panel(s) previously selected for export.

![](../health-surveillance-playbook.assets/462d6988b3b3860175de24bf7d73dd31.png)

After importing the data, a pop-up will display all statuses.

![](../health-surveillance-playbook.assets/97f3c4c45fc0508f013ce090cf42af10.png)

{{% note %}}
For auditing purposes, it is recommended that users go into the newly imported panel(s) to ensure all action items/rules, order items, contraindications, appt types, visit types, events, etc., are all set and imported, as needed. Of course, users may edit any panels once they are imported. This is simply a quick way to copy/paste panels from one system into another.
{{% /note %}}
