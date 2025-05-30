---
id: '1OT1DksCGhaN10pyrC0PsDh5DAj7IDhSAFsgANe0Ru54'
title: 'Health Surveillance Panels - Actions'
date: '2025-04-08T19:45:07.066Z'
version: 256
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'adding-editing-health-surveillance-panels.md'
  - 'health-surveillance-panels-action-rules.md'
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=1OT1DksCGhaN10pyrC0PsDh5DAj7IDhSAFsgANe0Ru54'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
Within the Health Surveillance tab, lists existing Health Surveillance Panels configured for the system, and is where user(s) can manage them or add Health Surveillance (HS) Panels to the system from this editor. A panel defines a group of events or actions that will take place on certain profiles of charts on a regular schedule in the Health Surveillance module.

To manage or configure Health Surveillance Panels and actions/components for your overall system, users must have security permission to the Health Surveillance Management tab, which is found within the Control Panel. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs.

![](../health-surveillance-panels-actions.assets/5b8ab10f00cdd2af73ab9edfa0de5526.png)

The Health Surveillance tab of the system lists the various configured Health Surveillance Panels (HSPanels) for your overall system.

## Panel Actions/Action Items

Health Surveillance Panels (HSPanels) are configured and comprise a bundle of individual Panel Actions.  A Panel Action is a specific voluntary or required test/component of an overall Health Surveillance Panel.  These individual tests/components we call *Panel Actions*.

Panel Actions on an HSPanel tells {{% system-name %}} what tests/components should trigger for each HSPanel and when the Patient/Employee should be notified that it is time to schedule or have the tests performed by a specific due date.

### Viewing Panel Actions of a HSPanel

To view existing configured Panel Actions on a specific HSPanel, simply find the specific HSPanel and click the + plus icon to branch open the configuration of that HSPanel.

![](../health-surveillance-panels-actions.assets/7fecb9e1e795f697b77ac316f5d1bcc4.png)

The individual Panel Actions configured on a specific HSPanel will then be displayed as a branched list below the overall HSPanel name.

![](../health-surveillance-panels-actions.assets/068993b1041a54df4d498ce5fb4a2656.png)

The individual Panel Actions can also then be branched open to display some limited configuration of the Panel Action related to Timing and Criteria.  This can be branched open to display by clicking on the + icon of the individual Panel Action item.

![](../health-surveillance-panels-actions.assets/6d74cefd88f9dc420fba4354ebe82d53.png)

To view more details of the specific Panel Action item configured, simply click the eyeball icon on a specific Panel Action item.

![](../health-surveillance-panels-actions.assets/07afd4d44b5e20098a7e47246c66f32b.png)

That will pop-up the *View Panel Action* window that displays all the configuration on the specific Panel Action item, without being in edit mode for it.  This pop-up shows all the additional configuration details for the Panel Action item.

Once the + icon is clicked, the View Panel Action pop-up window will display all configuration entry details for the specific Panel Action item selected.

![](../health-surveillance-panels-actions.assets/adbbc0836e1565b8eef8b88ec070f27a.png)

### Add a Panel Action to an HSPanel

It is best to use a matrix (your MIE Deployment Consultant can provide one) to collect details and panel actions (individual tests/components) of panels your company needs configured.

Panel Actions for Entry, Routine and Exit (if applicable) should be configured. These should be identified on the matrix collected.

In the HSPanel list within the Health Surveillance control panel tab, view the HSPanel and its existing configured Panel Actions to ensure the Panel Action doesn't already exist within the HSPanel.  Use the above *Viewing Panel Actions of a HSPanel* steps (explained above in this guide) to view the existing configured Panel Actions on an HSPanel.  It's important to check first.

In the HSPanel list, find the specific HSPanel you want to add a Panel Action to.  Click on the + icon next to the overall HSPanel name needing to add a Panel Action item to.

![](../health-surveillance-panels-actions.assets/15e74ce20bb3e95665c50fe2732bcfc6.png)

Once the + icon is clicked, the *Add Panel Action* pop-up window will display for configuration options.

![](../health-surveillance-panels-actions.assets/def23465955219b956f618e32bec8bb0.png)

It is recommended to add the representative event panel action item to the HSPanel first for entry, routine (if applicable), and then for exit (if applicable).

Each *Add Panel Action* field has a (?) help bubble next to it, but please see below for a more detailed definition of each Panel Action configuration field offered:

* <strong>Panel:</strong> Confirm this is indeed the HSPanel code you wish to add a Panel Action item to.  If not, click the X to exit out or the Cancel button at the bottom of the pop-up window.  If need guidance on how to add an HSPanel to the system configuration, please see separate guide [Adding/Editing Health Surveillance Panels](adding-editing-health-surveillance-panels.md).
* <strong>Event</strong> <strong>(required field)</strong><strong>:</strong>  Drop down options are: Procedure or Encounter. Choose the specific procedure or encounter that this panel action will create when this action item is triggered for the employee.  Typically, the choice of Procedure is selected (hence the default to it).
    * <strong>Procedure:</strong> If the event type of <strong>Procedure</strong> is selected, then use the auto-complete field below it to search and select the specific procedure/test/order item (configured in the system) that this Panel Action procedure is to be associated with.  The Procedure will be displayed for this panel action in listings, reports, emails, due list items, etc patient/employees, clinicians and/or supervisors.
        * If you don't see the procedure/test/order item selectable in the auto-complete field, then it wasn't added to the system and doesn't currently exist in the Orders-List Editor.
    * <strong>Encounter:</strong> If the event type of <strong>Encounter</strong> is selected (albeit rarely used), then use the drop-down field below it to select the specific encounter type that should be created and opened automatically when the HSPanel triggers as the specific panel action.
        * Selecting an encounter event type may not be applicable to a Panel Action or even desired functionality by the client. The workflow should be defined clearly if Encounter is selected.
* <strong>Timing</strong><strong> (required field)</strong><strong>:</strong> Radio button options of Entry, Exit, With Other, After Other, Routine and On Demand. Select a radio button to define at what point in the person's chart, the company or other regulating agency requires this specific Panel Action item (procedure) to be completed (when they enter the HSPanel, or when they Exit (are removed) the HSPanel, or With Other panel action items in the HSPanel, or After Other panel action items are completed within the HSPanel, or Routinely.
    * <strong>Entry:</strong> Triggers the Panel Action item when a person enters into the HSPanel either explicitly or implicitly
    * <strong>Exit:</strong> Triggers the Panel Action item when a person exits (is removed from) the HSPanel either explicitly or implicitly
    * <strong>With Other:</strong> Triggers the Panel Action item at the same time as another Panel Action item (that you indicate in the bulleted list) from the configured HSPanel.  Within the same HSPanel, any other configured Panel Action item(s) that are checkmarked to ‘trigger others' will be available in the bulleted ‘with other' list to indicate what other Panel Action item this one should trigger with.
        * <strong>Add Custom Frequency:</strong> There is a button <em>Add Custom Frequency</em> when With Other radio button is selected.  A custom frequency only needs to be set if this action should happen less frequently than other actions in the panel.
            * The Panel Action item can be configured with a unique specific custom frequency than the ‘with other' Panel Action item and/or represent event on the overall panel. Panel Actions with no custom frequency values configured will trigger whenever the parent action item (the selected item(s) from the bulleted ‘with other' list)  is triggered.
    * <strong>After Other:</strong> Signify the frequency (days/weeks/months/years) the Panel Action item should trigger after another prior Panel Action item (that you indicate in the bulleted list) from the configured HSPanel has been marked completed.  Within the same HSPanel, any other configured Panel Action items that are checkmarked to ‘trigger others' will be available in the bulleted ‘with other' list to indicate what other Panel Action item this one should trigger after.
        * Use when there's an "other prior panel action item" that has to have been marked as completed before this action item will trigger. This triggers the action item at a given amount of time, specified by the time value/unit entered for Frequency, <em>after</em> another prior action in this panel was performed.  An example of this could be a Hep B second series injection.  The first injection would need to be marked complete first before you'd want Hep B #2 to trigger as due for the chart.
    * <strong>Routine:</strong> Signify the frequency (days/weeks/months/years) the Panel Action item should trigger routinely then use the drop-down to select a specific routine timing event.
        * <strong>On Panel Expiration:</strong> This is the most typical default used.  The routine Panel Action item will trigger on the current expiration date of the panel status. Most panels will be configured with a representative event as the medical/written opinion, which then has a ‘next due date' field for clinicians (after performing the testing/procedures) will key in the medical/written opinion recommendation expiration date for that round of testing.
        * <strong>At Point in Time:</strong> The action item will be triggered (start MM/DD date) on the same day of a month each year (must key in start MM/DD you want for point in time) and offers an optional End date (MM/DD)
        * <strong>From Last Event</strong>: Assumes this last event/Panel Action item completed date has been entered in the person's chart, so {{% system-name %}} can calculate when this next action item is due. Triggered a given amount of time after the last time the action was performed.
        * <strong>On Date of Birth</strong>: Triggers the Panel Action item on the Date of Birth, on a schedule determined by the starting age and frequency.  Assumes the person's date of birth has been captured data into the chart's demographics.
        * <strong>From Last Event - On Medical Anniversary</strong>: Assumes Medical Anniversary date has been captured in the chart's demographics.  Due on the employee's medical anniversary date, on a schedule determined by the last time the action was performed and the frequency.  Medical anniversary is like a birth date – triggers on a point of time, so their med anniv day may be years ago ex: 2/28/2002 even though it's 2015 now.  Year of med anniv date doesn't matter. Typically the Medical Anniversary date would be set on employee's charts to be the last date of the "month" they are due – not the first of the month. Ex: due month is September, you put in 9/30/2015 in medical anniversary date field and they have the month of September (according to other panel action item details set) to get it done and receive notifications in that due month also, instead of the month before their med anniversary date.
    * <strong>On-Demand:</strong> Note: On Demand is only currently used for random drug screen HSPanel configuration.
* <strong>Lead Time:</strong> Translates to the number of days prior to the Trigger Date that this panel action item becomes visible when it is created in the system.  Defines how many days before the Trigger Date that the panel/orders should populate the Due list. Keep lead times consistent if setting multiple action items in a panel, otherwise each component of the HSPanel will have different due dates if they have different lead times on each.
    * NOTE: If your panel action item is for an acute exposure type of panel, you wouldn't want to set any lead Time days for an exposure type action item.
* <strong>Valid For:</strong> Drop down options to set a specific amount in Days, Weeks, Months, and Years. Defines the acceptable time period in which this specific panel action item (procedure) may be performed prior to the panel action's due date and still count as acceptable by the employer/company. For example, assume the employee needs an audiogram that is required yearly on September 1st <strong>and</strong> the audiogram panel action item has a "Valid for" configured of 3 months.  The system will check for audiograms completed (on the due list) for that chart within 3 months prior to September 1st. If an audiogram was completed within that time frame, {{% system-name %}} will not generate this panel action (procedure order) on the due list for the employee to have another audiogram. By defining 3 months in the <em>Valid For</em> field, the employer is stating that an audiogram within 3 months of the due date is within the company/regulating agency threshold as acceptable and therefore the same testing is not required.
    * <strong>Current Panel Only:</strong> (This is a checkbox next to the <em>"Valid for"</em> field.) If checked, this action item (procedure) will still be triggered even if the same encounter or procedure was completed, but for a different panel.  For example, if an employee is a member of both the Asbestos panel and Benzene panel, and both those panels require a Chest Xray, then {{% system-name %}} would (by default) only populate Chest Xray once on the due list. If the "current panel only" is selected, then the Chest Xray will display twice, once for each panel since it includes the same action item in the panel contents.
* <strong>Grace Period:</strong> Drop down options to set a specific amount in Days, Weeks, Months, and Years. Defines how much time the employee is allowed (once the panel action item becomes visible to the employee) to complete the panel action item (procedure) before it's considered overdue. (Periodic email notifications can be set up separately with scheduled jobs.) Grace period is the amount of time BEFORE the due date that the invitations, emails & questionnaire are available. The employee gets notified in grace period plus lead time.
* <strong>Trigger Others</strong>: If checked, other panel action configurations may use this specific panel action item as a trigger. If Trigger Others is checkmarked, this specific panel action item will display in the ‘with other' or ‘after other' bulleted lists for other panel action items to trigger with or after.
    * <strong>Auto-Waive if None Triggered:</strong> This checkbox option will display if <em>Trigger Others</em> is checkmarked.  Let's say you have a panel with 10 "real" things to do, then you add one more action that's a representative action.  Patient has no history of the representative action's order, but last week they completed all of the "real" things.  Now the evaluator runs and says they need to do the representative action.  That attempts to create all of the orders for all of the child panel actions, but they all come up as not needing to be done, since the other actions were completed within the "valid for" window.  At that point, this "auto-waive if none triggered" checkbox comes into play.  If checked, then we set the representative action's order to "auto-waived", meaning, there's nothing to do here, don't make the patient come into the clinic just to complete the representative action.  But then take a panel that has two actions, say an audiogram and a questionnaire.  The audiogram is the representative line, and the questionnaire is the child action.  Just because they finished a questionnaire last week doesn't mean they don't need to do the audiogram if it comes up due soon, so for that kind of action, we wouldn't check this auto-waive box.
        * Health Surveillance actions will only auto-waive the orders/items created if "trigger others' is selected <strong>and</strong> "auto-waive if none triggered" is selected.
* <strong>Employee Sex:</strong> Options drop down: All, Female, Male.  Select employee sex the procedure (action) for this panel would be applicable for.  Assumes the person's sex has been captured data into the chart's demographics.
* <strong>Employee Start Age (in years):</strong> Specify a specific start age requirement to be used for this action or leave blank to signify no specific starting age is required. Assumes the person's date of birth has been captured data into the chart's demographics.
* <strong>Employee End Age (in years):</strong> Specify a specific end age requirement to be used for this action or leave blank to signify no specific end age is required. Assumes the person's date of birth has been captured data into the chart's demographics.
* <strong>Indication Rule:</strong> Can select from the drop-down any action rule preconfigured in the Action Rules hyperlink editor which must evaluate to be ‘true' in order for this specific panel action (that you are adding to the HSPanel) to trigger. Action Rules are coded and configured by an MIE Developer and MIE Deployment needs the details for an indication rule.  An example of an action rule is to only trigger this action item (procedure) on an employee if they are part of department xxx or another example is an action rule configured in the system that can be applied to this specific action (procedure) in this panel that only would trigger a Hep 3rd injection action (procedure) on an employee in this panel if they've had their 2nd Hepatitis injection given with a date in last 8 weeks.  See other help documentation titled [Health Surveillance Tab-Action Rules.](health-surveillance-panels-action-rules.md)

![](../health-surveillance-panels-actions.assets/317f58f38492cdb14e28f0c8a06ba30f.png)

* <strong>Contraindication Rule:</strong> Can select from the drop-down any action rule preconfigured in the Action Rules hyperlink editor which must evaluate to be ‘false' in order for this specific panel action (that you are adding to the HSPanel) to trigger. Action Rules are coded and configured by an MIE Developer and MIE Deployment needs the details for a contraindication rule.  See other help documentation titled [Health Surveillance Tab-Action Rules.](health-surveillance-panels-action-rules.md)
* <strong>Required for Certification:</strong> Checkmark to indicate this specific panel action item is required (for panel certification purposes). Leave unchecked if panel action is voluntary/not required for certification purposes to be completed by the employee. If checkmarked, the HSPanel member (employee) failing or becoming overdue for this action will become decertified for the HSPanel.
* <strong>Instructions:</strong> Can free text instructions which are shown to a clinician for this specific panel action item when it's visible on the due list or worked in an encounter.
* <strong>Active:</strong> Checkmark to indicate it is an active panel action item within this panel. Uncheck to deactivate (marks inactive) the specific panel action item within the panel.

## Diagramed Examples

Below are timeline images for the 3 most common trigger dates for panel action items. These diagrams illustrate the concepts of lead time, visible date, grace period, and due date.

### Routine: On Date of Birth

This timeline diagram shows an example of a panel action item that is set for **On Date of Birth** as the routine trigger type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/0a2783e29e98b5528b85721fce2d4b8d.png)

### Routine: From Last Event

This timeline diagram shows an example of a panel action item that is set for **From Last Event** as the routine trigger type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/cfc27a29c68a017093bea4f88651be97.png)

### Route: From Last Event-On Medical Anniversary

This timeline diagram shows an example of a panel action item that is set for **From Last Event-On Medical Anniversary** as the routine type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/65bb3f15bc1b57b92d30600c48d06300.png)

## New System Setting: Use Date Range for Entry Actions

A new system setting: WebChart | Health Surveillance | Use Date Range for Entry Actions has been added to databases on RC202503 and newer.

![](../health-surveillance-panels-actions.assets/5a9619c464de91061c4734779a850bfd.png)

The system setting is disabled by default, but when/if enabled, it will allow health surveillance panel action item configuration to be configured with start and end dates *upon Entry*.  When/if enabled and if a start and end date range is entered for upon entry items (or its representative entry event it may trigger with), those entry actions will only trigger during the specified start and end timeframe and be due by the end date.

![](../health-surveillance-panels-actions.assets/ee354039c7217745696a46fccc0147bd.png)

Configuration Options:

1. Set due date - if you make a Routine <em>at Point In Time</em> action with a start and end date and no grace period, then that's your "campaign" period, and the health surveillance panel members are due at the same time, at the end date. In a panel example, for a FLU-like panel, you'll also want a separate Entry action for new additions to the panel after the end of the "campaign" but before the end of the entire flu season. That would have to utilize this new system setting as enabled, and the Entry action item configured to have a regular grace period set, a start date the day after the end of the main "campaign", and an end date of the entire season end.
2. Rolling dates - if you make a single Routine <em>at Point In Time</em> action with a start date for the beginning of the season and end date for the end of the season, with a grace period. People who are members of the health surveillance panel at the beginning of the season have the season start + the grace period amount to get it done, and anyone who joins as a member later, has their entry date + grace period amount to get it done.

The real difference then is for people who join the panel during that initial "campaign" window. With the 1st configuration option, the member is going to be due at the end date of the campaign. With the 2nd configuration option, if the member joins a week before the end of the campaign, but the grace period is 30 days, they aren't going to be due at the end of the campaign, because there really is no campaign, there are just a whole lot of people that happened to be members of the panel when the season started, and then others maybe join along the way.

Therefore, the new system setting *Use Date Range for Entry Items* configuration method allows the panel to logically split up the campaign vs what happens to everybody that joins after that initial main campaign is over, and still have a hard due date at the end of the campaign and end of the entire season.
## Learning Management System

To learn more about Health Surveillance Panels - Actions, follow the link below to the Learning Management System course:

* [202.A Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
