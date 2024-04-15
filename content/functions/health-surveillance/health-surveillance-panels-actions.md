---
id: '1OT1DksCGhaN10pyrC0PsDh5DAj7IDhSAFsgANe0Ru54'
title: 'Health Surveillance Panels - Actions'
date: '2020-03-13T15:11:36.505Z'
version: 64
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1OT1DksCGhaN10pyrC0PsDh5DAj7IDhSAFsgANe0Ru54'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance).

## Panel Actions/Action Items

"Panel Actions" are a list of all required tests/components for each panel. This is to add the components (actions) of each panel.  Adding actions to a panel tells {{% system-name %}} what tests are required for each panel (based on the details) and when the Employee/Employer should be notified that it is time to schedule or have the tests.

1. Control->Health Surveillance tab – Actions (Options column), Add Actions to each panel per data collected in the matrix your MIE Implementer provided.
2. Add actions for Entry, Routine and Exit into same panel when applicable. This should be identified on the matrix collected from the client back in step 1 in previous pages.
3. In the panel list, find the specific panel you want to add actions to.  Click the Actions hyperlink at the far right.

![](../health-surveillance-panels-actions.assets/ef0a162242ff80bebf23cef1e5503aba.png)

The screen will display the list of any existing panel actions already in that panel (if there are any). Make sure the panel action item you want to add does not already exist in the panel itself.

To add a new panel action item to the panel, click the Add Action hyperlink at the top right corner of the screen.

![](../health-surveillance-panels-actions.assets/00ae9d1b402af3d1a2b667673987d9ce.png)

Confirm you are in the Panel Action adding screen and the name of the panel you are going to add an action to is also listed in the title.

![](../health-surveillance-panels-actions.assets/154f3317a8f64f620681435e4bf01d33.png)

You usually add the representative event action to the panel first.  Fill out the fields needed according to the matrix, details of what gets done to what type of employee, and SUBMIT to save that one panel action to the panel.

* <strong>Action Name:</strong> Required field. This is usually the name of a test that is a component of the panel. This name will be displayed for this panel action in listings and dialogs to employee's and supervisors.
* <strong>Description:</strong> Optional. Can give supporting details or information about the Action Name.
* <strong>Employee Gender:</strong> Options drop down: All, Male, Female.  Select employee gender the procedure (action) for this panel would be applicable for.
* <strong>Employee Start Age (in years):</strong> Specify a specific start age requirement to be used for this action or leave blank to signify no specific starting age is required.
* <strong>Employee End Age (in years):</strong> Specify a specific end age requirement to be used for this action or leave blank to signify no specific end age is required.
* <strong>Lead Time:</strong> Translates to the number of days prior to the Trigger Date that this panel action becomes visible when it is created in the system.  Defines how many days before the Trigger Date that the panel/orders should populate the Due list. Keep lead times consistent if setting multiple action items in a panel, otherwise each component of the panel will have different due dates if have different lead times on each. Emails can then be configured to email the supervisor, etc a list of his/her employees that will be due. The supervisor has the time between his email and the actual trigger date to notify Health Services if there are any issues or mistakes with his employee list. Emails to the Employee will not be sent until the actual Trigger Date. (Email reminders are separately configured on a per client basis. Email notification may not apply to all clients).

{{% note %}}
If your panel action item is for an exposure type of panel, you wouldn't want to set any lead Time days for an exposure type action item.
{{% /note %}}

![](../health-surveillance-panels-actions.assets/655b6f76f1264b5dd0506337f04e1517.png)

* <strong>Required for Certification:</strong> Select this to indicate this specific panel action is required. Leave unchecked if panel action is voluntary by the employee. If checkmarked, a panel member (employee) failing or becoming overdue for this action will become decertified for the panel.
* <strong>Indication Rule:</strong> Can select from the drop-down any action rule found in ‘Action Rules' hyperlink module which must evaluate to be ‘true' in order for this specific panel action (that you are adding to the panel) to trigger for an employee. ‘Action Rules' are configured by an MIE Developer and MIE Implementer needs to get the data details for the configuration.  An example of an action rule is to only trigger this action item (procedure) on an employee if they are part of department xxx or another example is an action rule configured in the system that can be applied to this specific action (procedure) in this panel that only would trigger a Hep 3^rd injection action (procedure) on an employee in this panel if they've had their 2^nd Hepatitis injection given with a date in last 8 weeks.  See other help documentation titled <em>Health Surveillance Tab-Action Rules.pdf</em>

![](../health-surveillance-panels-actions.assets/cad621c00165433a3fffca5a29f341b4.png)

* <strong>Contraindication Rule:</strong> Can select from the drop-down any action rule found in ‘Action Rules' hyperlink module which must evaluate to be ‘false' in order for this specific panel action (that you are adding to the panel) to trigger for an employee.  See other help documentation titled <em>Health Surveillance Tab-Action Rules.pdf</em>
* <strong>Trigger Type:</strong> Drop down options: Entry, Exit, and Routine. Select to define at what point in the employee's current job status, the company or other regulating agency requires this action item (procedure) to be completed.  Entry will kick off when employee is put in as a member of that panel.  Evaluator (scheduled cron job) will run every day and trigger routine ones based on details and if they exit – then those action items will trigger when evaluator runs to find that.  Not many companies have exits.
* <strong>Trigger Date:</strong> What should trigger this action item on the panel? Uses Drop down options of when to trigger this action item:
* <strong>Date of Birth</strong>: Triggers the action item on the Date of Birth, on a schedule determined by the starting age and frequency.  Assumes the employee's DOB has been captured data into their demographics.
* <strong>Last Event</strong>: Assumes this last event/action item complete date has been entered in the employee's chart, so {{% system-name %}} can calculate when this next action item is due. Triggered a given amount of time after the last time the action was performed.
* <strong>Last Event – On Campaign Date</strong>: This is a custom specific option for a client.  Due on the Campaign's birth date, on a schedule determined by the last time the action was performed and the frequency. This option isn't utilized by any other client.
* <strong>Last Event – On Date of Birth</strong>: Triggers the action item on the Date of Birth (that is captured in the employee's demographics), on a schedule determined by the last time the action was performed and the frequency.  Example, a test is indicated to be completed specifically at age 19, 22, 25, 28 etc.
* <strong>Last Event- On Date of Hire</strong>: Triggers the action item on the Date of Hire (that is captured in the employee's demographics and employee's Hire Date should show up in demo header/grey bar in {{% system-name %}} ) on a schedule determined by the last time the action was performed and the frequency.  Example, a test is indicated to be completed specifically at certain intervals based on the date of hire. 1999, 2002, 2005, 2008.
* <strong>Other Action (Triggered)</strong>: Triggers the action item at the same time as another action item (that you indicate) from this panel. Example, An action for an Audiogram may be triggered by the Entry, Routine, Exit Action.  If checked, other actions may use this Action as a trigger. This must be selected for the action to display in the "Related Action" List. The "Related Action" list displays when then "Trigger Date field" is set to "Other Action (Triggered)" or "Prior Action (Completed)".  Another example is for action items to trigger with the representative event if you utilize that type of Representative Event programming.  Then all the action items get triggered together for the panel. Triggers all with same date usually tied to rep event.

![](../health-surveillance-panels-actions.assets/18f36980377af641c1403fce28d0c2a7.png)

* <strong>Point in Time:</strong> The action item will be triggered on the same day and month each year (must key in MM/DD you want for point in time).
* <strong>Prior Action (Completed):</strong> Use when there's an "other action item" that has to have been marked as completed before this action item will trigger. This triggers the action item at a given amount of time, specified by the time value/unit entered for Frequency, <em>after</em> another prior action in this panel was performed (then you must checkmark the prior action item(s) that must have been marked as completed before this action item will trigger).  An example of this would be a Hep B 2^nd series injection.  The 1^st injection would need to be marked complete first before you'd want Hep #2 to trigger as due on the employee.
* <strong>Medical Anniversary Date</strong>: Assumes Medical Anniversary date has been captured into the patient demographics.  Due on the employee's medical anniversary date, on a schedule determined by the last time the action was performed and the frequency.  Medical anniversary is like a birth date – triggers on a point of time, so their med anniv day may be years ago ex: 2/28/2002 even though it's 2015 now.  Year of med anniv date doesn't matter. Typically the Medical Anniversary date would be set on employee's charts to be the last date of the "month" they are due – not the first of the month. Ex: due month is September, you put in 9/30/2015 in medical anniversary date field and they have the month of September (according to other panel action item details set) to get it done and receive notifications in that due month also, instead of the month before their med anniversary date.
* <strong>Panel Expiration:</strong> Due on the expiration date specified in the panel status. Most panels will be configured with a representative event as the medical/written opinion, which then has a ‘next due date' to key in the medical/written opinion recommendation.
* <strong>Trigger Others</strong>: If checked, other panel actions may use this one as a trigger. This must be set for this action to display in the "Related Action" list.
* <strong>Auto-Waive (this action item) if No other actions (none) Triggered:</strong> Let's say you have a panel with 10 "real" things to do, then you add one more action that's a representative action.  Patient has no history of the representative action's order, but last week they completed all of the "real" things.  Now the evaluator runs and says they need to do the representative action.  That attempts to create all of the orders for all of the child actions, but they all come up as not needing to be done, since the other actions were completed within the "valid for" window.  At that point, this "auto-waive if none triggered" checkbox comes into play.  If checked, then we set the representative action's order to "auto-waived", meaning, there's nothing to do here, don't make the patient come in to the clinic just to complete the representative action.  But then take a panel that has two actions, say an audiogram and a questionnaire.  The audiogram is the representative line, and the questionnaire is the child action.  Just because they finished a questionnaire last week doesn't mean they don't need to do the audiogram if it comes up due soon, so for that kind of action, we wouldn't check this auto-waive box.
* <strong>Frequency:</strong> Drop down options to set in Day, Weeks, Months, and Years. Defines the time period on how often the action item (procedure) should be triggered. Actions with ‘0' frequency values will trigger whenever the parent action is triggered.
* <strong>Valid For:</strong> Drop down options to set in Day, Weeks, Months, and Years. Defines the acceptable time period in which the panel action (procedure) may be performed prior to the action due date and still count as acceptable by the employer. For example, assume the employee needs an audiogram that is required yearly on September 1^st AND it has a "Valid for" definition of 3 months.  The system will check for audiograms completed (on the due list) within 3 months prior to September 1^st. If one was completed within that time frame, {{% system-name %}} will not generate this panel action (procedure order) on the due list for the employee to have another audiogram. By defining 3 months in the <em>Valid For</em> field, the employer is stating that an audiogram within 3 months of the due date is within the company/regulating agency threshold as acceptable and therefore the same testing is not required.
* <strong>Current Panel Only:</strong> (This is a checkbox next to the <em>"Valid for"</em> field.) If checked, this action item (procedure) will still be triggered even if the same encounter or procedure was completed, but for a different panel.  For example, if an employee is a member of both the Asbestos panel and Benzene panel, and both those panels require a Chest Xray, then {{% system-name %}} would (by default) only populate Chest Xray once on the due list. If the "current panel only" is selected, then the Chest Xray will display twice, once for each panel since it includes the same action item in the panel contents.
* <strong>Grace Period:</strong> Drop down options to set in Day, Weeks, Months, and Years. Defines how much time the employee is allowed (once it becomes visible to the employee) to complete the panel action item (procedure) before it's considered overdue. (Periodic email notifications can be set up separately with cron/scheduled jobs.) Grace period is BEFORE the due date: Amount of time before the due date that the invitations, emails & questionnaire is available. The employee gets notified in grace period plus lead time.
* <strong>Event Type:</strong> Drop down Options: Procedure or Encounter. Choose the specific procedure or encounter that this panel action will create when this action item is triggered for the employee.  Typically, Procedure is selected.  If procedure is selected, than choose the procedure/order it is associated to in the drop down to the right of the event type (this is the order item you would've added or searched if existed back in previous steps in this help guide).  Usually order item names you select here would be named the same as the panel action you are adding.  If you don't see the order item, it wasn't added to or doesn't currently exist in the Orders List Editor.   If Encounter is selected, then select the encounter that should be opened automatically when the panel triggers the actions to create orders on the due list. Selecting an encounter may not be applicable to all actions or even desired functionality by the client. The workflow should be defined clearly if Encounter is selected.  Health Questionnaires (if want done electronically and via portal) would be an encounter event type and the specific electronic encounter order item would need selected (the order item that points to the electronic health questionnaire layout).  For every questionnaire that you want documented electronically via an encounter, you would have 2 order items & panel actions.  1 for the Health Questionnaire electronic encounter and the other for the due list item to mark complete.
* <strong>Instructions:</strong> Free text instructions which are shown to a provider for this action item. Could be instructions or pass/fail criteria, etc
* <strong>Active:</strong> Checkmark to indicate it is an active panel action item within this panel. Uncheck to deactivate (marks inactive) the specific panel action item within the panel.
* <strong>Created Date:</strong> Automatically generated by system and displays the date/time and initials of the user who created this individual action item.
* <strong>Modified Date:</strong> Automatically generated and tracked by system and displays the last modified date/time and initials of the user who last modified this individual action item.
* <strong>Change Reason:</strong> Any time a panel action is modified/edited, a reason for change must be typed by the user who is modifying. This is required before the user may submit and save changes to the panel action item.

When setting up panels with Representative Events, it is suggested that you: create your action items for each panel for entry, routine and exit (as applicable – some clients only have entry or entry & routine, or just routine or all 3 for a specific panel). The Representative Event action item is generally named the same name as the panel.

![](../health-surveillance-panels-actions.assets/659abb8f9671c187f58df2340df813a1.png)

And then when you add the other action items (procedure) to the panel (for example: a Physical Exam that needs done for entry and routine and exit for the panel), you can add that (ex: Physical Exam) panel action item once and set it to be trigger type: *routine*, then set Trigger Date to be *Other Action Triggered*  then in the next drop-down simply checkmark the entry, routine and/or exit action items from the list.  If you do not see them in the list, that means you haven't made them action items yet.   You need to add those action items first, then they will be displayed in that drop-down list to select from.  Therefore, you only have to enter the other action items (procedures) once per Health Surveillance panel even if the panel is entry and routine and exit and calls for the same action item (procedure) to be in the entry/routine/exit type trigger. Suggested to do that instead of adding action items for each type individually. For example wouldn't want to add: Chest Xray-Entry, then add another action item named Check Xray-Exit, etc and make the panel action items list lengthy.  Can all be encompassed by making the representative entry/routine/exit events first (depending on the matrix details) in the panel as action items, then add the individual panel items that also comprise the panel and set them as routine/other action triggered and checkmark the entry and/or routine and/or exit from there if that action item applies to more than one type of trigger.

![](../health-surveillance-panels-actions.assets/81a03e4c57e07d9aad1af943a7505455.png)

## Diagramed Examples

Below are timeline images for the 3 most common trigger dates for panel action items. These diagrams illustrate the concepts of lead time, visible date, grace period, and due date.

This timeline diagram shows an example of a panel action item that is set for **Date of Birth** as the trigger date type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/0a2783e29e98b5528b85721fce2d4b8d.png)

This timeline diagram shows an example of a panel action item that is set for **Last Event** as the trigger date type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/cfc27a29c68a017093bea4f88651be97.png)

This timeline diagram shows an example of a panel action item that is set for **Medical Anniversary Date** as the trigger date type.  You can visually see how the programming of all fields (ex: frequency, grace period,etc) in the panel action item relate in this graphic.

![](../health-surveillance-panels-actions.assets/65bb3f15bc1b57b92d30600c48d06300.png)
