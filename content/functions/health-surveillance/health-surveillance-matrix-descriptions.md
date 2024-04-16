---
id: '1uE3JqvyP8KAbK2mO0sIrGUZa32BhgHULC3NdSyakf4M'
title: 'Health Surveillance Matrix Descriptions'
date: '2023-06-26T19:24:00.229Z'
version: 85
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/spreadsheets/d/1tOwhUxErru3-fsHKGUES0lVE8tr_p_RaWX8bEruCghQ/edit#gid=516694809'
source: 'https://drive.google.com/open?id=1uE3JqvyP8KAbK2mO0sIrGUZa32BhgHULC3NdSyakf4M'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Please review and download the [Health Surveillance Matrix](https://docs.google.com/spreadsheets/d/1tOwhUxErru3-fsHKGUES0lVE8tr_p_RaWX8bEruCghQ/edit#gid=516694809). Utilize the descriptions below to address any questions that may arise while assessing the organization's needs and requirements of health surveillance panels.

## Panels

<table>
<tr>
<td>Column</td>
<td>Description</td>
</tr>
<tr>
<td>Panel Full Name</td>
<td>The full name of the panel. The name should always be descriptive and clear.</td>
</tr>
<tr>
<td>Panel Description</td>
<td>The description of the panel. The description outlines what the panel is for, what population is included, and any helpful information useful for understanding the need for the panel.</td>
</tr>
<tr>
<td>Source</td>
<td>This field is used to document the regulatory source of the required action(s)/protocol needed to construct the panel. The regulatory source is the group or governing body that has issued a requirement for the necessary action(s) (e.g., OSHA, DOT, Company Policy, etc.). This is a free-text field; however, the system will remember prior sources entered.</td>
</tr>
<tr>
<td>Reference</td>
<td>The reference number or identification code associated with the panel and its source. This field can be left blank or contain any relevant reference identifier (e.g., OSHA Policy #).</td>
</tr>
<tr>
<td>Status</td>
<td>The status of the regulation (e.g., Active, Adopted, Inactive, etc.). This is a free-text field; however, the system will remember prior status entries.</td>
</tr>
<tr>
<td>Open Membership</td>
<td>This determines whether the supervisor can add/remove employees from panels from the portal. Select Open Membership if the panel is to allow any employee to be added by their supervisor as a member of the panel. From the portal, there is a Supervisor Review link. This link only displays for supervisors. The supervisor screen shows only the employees with a reference key for color coding. Also, any Open Membership panels will display here, as well.</td>
</tr>
<tr>
<td>Restricted</td>
<td>Utilize this field to restrict access to the panel.</td>
</tr>
<tr>
<td>Representative Event</td>
<td>A Representative Event is an encounter or procedure that represents the panel as a whole, whenever applicable. From the drop-down, select Encounter or Procedure. Unless the panel is expected to open an encounter when the orders populate the Due List, then the representative event will always be a procedure. Once the event type has been selected, use the next drop-down to select the Encounter Type (encounter) or Order Item (procedure) to be the representative event. The Order Item used for procedure representative events usually bear the same name as the panel it represents.</td>
</tr>
<tr>
<td>Owner</td>
<td>The name of the user that manages the panel. This user is responsible for overseeing and maintaining all the memberships within the panel.</td>
</tr>
<tr>
<td>Adjustment Range Early Days</td>
<td>Systems with Forecasting and Due Date Adjustment enabled can use this field to override the default number of Early Days or Late Days for the panel. Leave this field blank to use the default; otherwise, specify a positive number of days to override the default. Specifying zero (0) will disallow shifting.</td>
</tr>
<tr>
<td>Adjustment Range Late Days</td>
<td>Systems with Forecasting and Due Date Adjustment enabled can use this field to override the default number of Early Days or Late Days for the panel. Leave this field blank to use the default; otherwise, specify a positive number of days to override the default. Specifying zero (0) will disallow shifting.</td>
</tr>
<tr>
<td>Exit Alert</td>
<td>This provides an alert to notify panel members that there is an exit requirement when exiting the panel (e.g., OSHA Noise, the individual should be offered an exit exam when they no longer fit the criteria for inclusion).</td>
</tr>
</table>

## Actions

<table>
<tr>
<td>Column</td>
<td>Description</td>
</tr>
<tr>
<td>Action/Procedure Name</td>
<td>Required field. The name of the order item or encounter of the panel. Identify each encounter/procedure/test required for all members of the panel (e.g., CBC, Hearing Test, Chest Xray, etc.). Each action will be a new row.</td>
</tr>
<tr>
<td>Panel Name</td>
<td>The name of the panel containing the listed Action/Procedure Name; the panel being configured.</td>
</tr>
<tr>
<td>Action/Procedure Description</td>
<td>Optional. This field can be used to give supporting details or information about the Action/Procedure Name.</td>
</tr>
<tr>
<td>EE Gender</td>
<td>Select the employee gender for which the action/procedure of the panel would apply (i.e., M, F, All).</td>
</tr>
<tr>
<td>EE Start Age</td>
<td>Select the specific age (in years) required in order for the action/procedure to apply, or leave blank to indicate no specific starting age is required.</td>
</tr>
<tr>
<td>EE End Age</td>
<td>Select the specific age (in years) required in order for the action/procedure to no longer apply, or leave blank to indicate no specific end age is required.</td>
</tr>
<tr>
<td>Lead Time</td>
<td>Define how many days before the Trigger Date the panel should populate the Due List. An email notification can be configured to alert the supervisor with a list of employees that will be due. The supervisor has the time from the email notification to the Trigger Date to notify Health Services of any issues or mistakes with the employee list. Emails to employees will not be sent until the actual Trigger Date. (Email notifications may not apply to all clients. They are separately configured on a per client basis.)</td>
</tr>
<tr>
<td>Req for Certification</td>
<td>Y or N. Select if the panel action is voluntary, or not required.</td>
</tr>
<tr>
<td>Trigger Type: Entry</td>
<td>Defines at what point (upon entry) in the employee's current job status the company or other regulating agency requires the action to be completed.</td>
</tr>
<tr>
<td>Trigger Type: Routine</td>
<td>Defines at what point (routinely) in the employee's current job status the company or other regulating agency requires the action to be completed.</td>
</tr>
<tr>
<td>Trigger Type: Exit</td>
<td>Defines at what point (upon exit) in the employee's current job status the company or other regulating agency requires the action to be completed.</td>
</tr>
<tr>
<td>Trigger Date</td>
<td>Define a specific event/date that triggers the completion of the action.<br />
<ul><li><strong>Date of Birth</strong>: Completion of the action triggers on the date of birth, on a schedule determined by the starting age and frequency.</li><li><strong>Last Event</strong>: Completion of the action triggers on a specified time after the last time the action was performed</li><li><strong>Last Event - On Date of Birth</strong>: Completion of the action triggers on the date of birth, on a schedule determined by the last time the action was performed and the frequency.</li><li><strong>Last Event - On Date of Hire</strong>: Triggers on the date of hire, on a schedule determined by the member's start date.</li><li><strong>Last Event - On Medical Anniversary</strong>: Due on the member's medical anniversary date, on a schedule determined by the last time the action was performed and the frequency.</li><li><strong>Other Action (Triggered)</strong>: Triggers at the same time as the specified action/event of the panel.</li><li><strong>Point in Time</strong>: Triggers on the same day and month, each year.</li><li><strong>Prior Action (Completed)</strong>: Triggers on the given amount of time specified in the Frequency field, once the specified action/procedure has been completed.</li><li><strong>Panel Expiration</strong>: Triggers on the expiration of the respective panel.</li></ul></td>
</tr>
<tr>
<td>Trigger Others</td>
<td>Y or N. When selected, this action will trigger other actions. This field must be selected in order for the action to display in the Related Action list. The Related Action list displays when the Trigger Date field is set to Other Action (Triggered) or Prior Action (Completed).</td>
</tr>
<tr>
<td>Frequency</td>
<td>Defines how often the action/procedure should be completed. Drop-down options include Day, Weeks, Months, or Years.</td>
</tr>
<tr>
<td>Valid For?</td>
<td>Defines the acceptable time period in which the panel action may be performed prior to the action Due Date and still count as acceptable by the employer.</td>
</tr>
<tr>
<td>Current Panel Only</td>
<td>If checked, this action will still be triggered, even if the same encounter or procedure was completed, but for a different panel.</td>
</tr>
<tr>
<td>Grace Period</td>
<td>Defines how much time the employee is allowed (once it becomes visible to the employee) to complete the panel action before it's considered overdue.</td>
</tr>
<tr>
<td>Event Type</td>
<td>Choose the specific procedure or encounter that this panel action will create when it is triggered.</td>
</tr>
<tr>
<td>Instructions</td>
<td>Instructions shown to a provider for orders triggered by this action.</td>
</tr>
</table>

## Membership

<table>
<tr>
<td>Column</td>
<td>Description</td>
</tr>
<tr>
<td>Panel Name</td>
<td>The name of the panel needing a type of membership rule established; the panel being configured.</td>
</tr>
<tr>
<td>Business Rule Narrative</td>
<td>The description of the membership rule, detailing how individuals are to be identified for the panel.</td>
</tr>
<tr>
<td>Include</td>
<td>Establishes the criteria for including members in the respective panel (i.e., location, building, cost center, employee class, or other custom criteria).</td>
</tr>
<tr>
<td>Exclude</td>
<td>Establishes the criteria for excluding members from the respective panel (i.e., location, building, cost center, employee class, or other custom criteria).</td>
</tr>
<tr>
<td>Start Date</td>
<td>This date is when the system begins automating rules and placing employees into panels. Some implementations will set this to the go-live date, whereas others will set this prior to go-live for lead time or the like. Once started, employees will receive emails and Due List items will begin populating.</td>
</tr>
<tr>
<td>End Date</td>
<td>Can leave blank. Only specify an End Date if the panel is not going to be offered anymore, as of the specified date. The system will auto-remove all members on the date specified and no longer automate rules, Due List items, etc.</td>
</tr>
</table>
