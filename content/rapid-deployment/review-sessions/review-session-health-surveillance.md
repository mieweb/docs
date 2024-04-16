---
id: '1T16_8p-6mg-K4LsNEn0kCKOUhMv0ujQ7jRfi40BNrqQ'
title: 'Review Session - Health Surveillance'
date: '2020-02-27T21:25:22.522Z'
version: 35
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../functions/health-surveillance/health-surveillance-panels-actions.md'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
  - 'review-session-portal-management.md'
  - '../../functions/e-chart/quick-view-due-list-portlet.md'
  - '../../functions/health-surveillance/due-list.md'
  - '../../functions/health-surveillance/due-list-in-a-dynamic-encounter.md'
  - 'https://system/?f=layout&module=reports&name=HealthSurveillance&tabmodule=reports&t=Health+Surveillance&tabmodule=reports&tabselect=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=BerylliumHealthSurveillance&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=HSDueListCount&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=HSDueListStatus&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=Forecast&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=NonCompliantEmployees&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=PanelActionDefinition&tabmodule=reports&t=Health+Surveillance&panel=pa.name+AS+''Action+Name''&panel=GROUP_CONCAT(DISTINCT+pr.reg_source)+AS+''Reg.+Source''&panel=pa.description+AS+''Description''&panel=CASE+pa.trigger_type+WHEN+''E''+THEN+''Entry''+WHEN+''X''+THEN+''Exit''+WHEN+''R''+THEN+''Routine''+ELSE+''Unknown''+END+AS+''Trigger+Type''&panel=CASE+pa.trigger_type+WHEN+''R''+THEN+CASE+pa.trigger_date_type+WHEN+''DOB''+THEN+''Date+of+Birth''+WHEN+''event''+THEN+''Last+Event''+WHEN+''EDOB''+THEN+''Last+Event+-+On+Date+of+Birth''+WHEN+''DOH''+THEN+''Last+Event+-+On+Date+of+Hire''+WHEN+''CAM''+THEN+''Last+Event+-+On+Campaign+Date''+WHEN+''pit''+THEN+''Point+in+Time''+WHEN+''oact''+THEN++''Prior+Action+(Completed)''+WHEN+''tact''+THEN+''Other+Action+(Triggered)''+WHEN+''PE''+THEN+''Panel+Expiration''+WHEN+''MA''+THEN+''Medical+Anniversary''+ELSE+''Unknown''+END+ELSE+''''+END+AS+''Trigger+Date''&panel=IF+(pa.event_type%3D''P'',ol.name,pa.event_data)+AS+''Event+Name'''
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=PanelAudit&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=PanelMetrics&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=PanelStatus&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=PerformanceMetrics&tabmodule=reports&t=Health+Surveillance'
  - 'https://system/?f=layout&s=pat&module=SystemReport&name=RespiratorRoster&tabmodule=reports&t=Health+Surveillance'
  - 'https://drive.google.com/file/d/0B5Hsu0mf2-tkZGJSOEE2TkJYUkE/view'
  - 'https://system/?f=orders&s=list_editor&t=List+Editor&tabmodule=admin&tabselect=Orders-List+Editor'
  - 'https://system/?f=layout&module=HSP&name=PanelActionList&tabmodule=admin&tabselect=Health+Surveillance'
  - 'https://system/?f=panelactiontest&tabmodule=admin&tabselect=Health+Surveillance'
  - '../../functions/system-administration/security/security-role-settings.md'
  - '../../functions/health-surveillance/health-surveillance-panels-action-rules.md'
  - '../../functions/health-surveillance/health-surveillance-panels-add-memberships-manually.md'
  - '../../functions/health-surveillance/adding-editing-health-surveillance-panels.md'
  - '../../functions/health-surveillance/health-surveillance-panels-automated-membership.md'
  - '../../functions/system-administration/data-migration/completed-orders-import-tool.md'
  - '../../functions/system-administration/data-migration/export-import-health-surveillance-panels.md'
  - '../../functions/health-surveillance/introduction-to-health-surveillance-panels.md'
  - '../../functions/reports/panel-definition-report.md'
  - '../../functions/system-administration/data-migration/panel-membership-import-tool.md'
  - '../../functions/health-surveillance/viewing-health-surveillance-panels-and-membership.md'
  - '../../functions/health-surveillance/panel-action-evaluator.md'
  - '../../functions/health-surveillance/respirator-info-chart-tab.md'
  - '../../functions/system-configuration/locations-management.md'
source: 'https://drive.google.com/open?id=1T16_8p-6mg-K4LsNEn0kCKOUhMv0ujQ7jRfi40BNrqQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Health Surveillance Demonstration</strong>
* <strong>Overview</strong>
* <strong>Health Surveillance Panels</strong>
    * <strong>Panel Actions</strong>
    * <strong>Representative Events</strong>
* <strong>Panel Memberships</strong>
* <strong>Email Notifications</strong>
* <strong>Scheduling</strong>
* <strong>Portal</strong>
    * <strong>Employee Portal</strong>
    * <strong>Employer Portal</strong>
* <strong>Managing the Due List</strong>
* <strong>Reporting</strong>
* <strong>System Configuration</strong>
* <strong>Security & System Settings</strong>
* <strong>Resources</strong>

## Overview

Our health surveillance program makes it easy to track and manage occupational health, safety, and compliance. Required tests for audiometry, pulmonary function, vision, respirator fit, and other surveillance exams do not rely on manual tracking and human intervention. Managing individual and mass immunizations are the same way. Electronic toolsets drive the process, significantly decreasing risk of tracking and compliance failures.

### Benefits

* Setting up required surveillance tests and exams is not dependent upon manual processes. Electronic toolsets drive activity, documentation, tracking, and reporting, consequently decreasing the risk of compliance failures and increasing confidence surrounding compliance requirements.
* All phone calls to schedule, confirm, reschedule, and remind are dramatically reduced – as many as three per clinic visit.
* Improves overall employee tracking, enabling supervisor intervention, in advance.
* Notifications and proofs of completion are easily generated and produced, as needed.

### Reasons to Track Health Surveillance

* Improves the bottom line.
* Healthy workers mean increased productivity, less time/days away, and reduced insurance costs.
* Safety and Regulatory Compliance reduces injuries/illnesses, helps with early identification of issues (medical visit/early intervention vs. OSHA recordable), and provides a path to increased ergonomics.

## Health Surveillance Panels

A health surveillance panel defines a group of events or services, known as *Panel Actions*. [Panel Actions](../../functions/health-surveillance/health-surveillance-panels-actions.md) may be a one-time requirement for a given individual, or they may be one or more events/services set on a recurring schedule. Panels also contain at least one *Representative Event*, which triggers the completion of the panel, as well as possible *action rules*, which set specific criteria on established Panel Actions. Health surveillance panels are sometimes associated with exposure groups, because the panels can be used for surveying groups exposed to certain hazards encountered while on the job, for example.

Panels can be found, tracked, and displayed in the Health Surveillance module of the chart. This allows for easy tracking and follow-up. Panels can also be used to document regularly scheduled voluntary health screenings, or checkups, and can be configured according to location, if necessary.

### Panel Actions

A panel consists of a list of tests, procedures, or other services expected to be performed per exam. As stated, these items are known as [Panel Actions](../../functions/health-surveillance/health-surveillance-panels-actions.md), and they can be configured with specifications, or parameters, which are known as *action rules*. Action rules determine when the actions should be triggered, or considered due; or they may trigger a notification of the panel needing to be completed via a portal, tasking, or email, depending on the system configuration. Rules may also require the presence of certain things (e.g., only trigger if the individual is male, perform only as a vaccine series), or include a multitude of various other complexities, not to mention whether the action(s) is/are being performed as an entry panel, routine panel, or exit panel.

### Representative Events

Health surveillance panels typically consist of many various Panel Actions to be performed. Some of these actions may be required, others may be denied, and even more may be omitted (e.g., a test for males only with a female participant). Some services/events may not even be completed the same day (e.g., labs are needing drawn, a physical exam is needed, or a respirator fit test is performed, all on different days). This is why every panel must have a Representative Event.

A Representative Event is configured in the panel itself as the one and only unique action, that when it (the Event) is marked as Completed, the entire health surveillance panel is considered complete. The Representative Event must be unique to the panel (i.e., it cannot be used in any other health surveillance panel). What's more, is if the panel is set to recur, the next time it is evaluated and triggered will be based on the date the panel Representative Event was set Completed.

## Panel Memberships

Once a chart exists in {{% system-name %}} and any/all health surveillance panels are configured, there are a few ways to get charts into panel membership(s). Panel membership consists of manual or automated determinations that trigger an individual chart for inclusion in a health surveillance panel. These can be included through manual assignments or automated by using membership rules (typically from an HR interface), or a combination of both, as needed. Membership can also be imported via the [Data Import tab](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) of the **Control Panel**.

## Email Notifications

We understand that automated emails and notifications can improve productivity. Therefore, {{% system-name %}} can automatically send email notifications, to indicate when an appointment is needed, according to the panel intervals (e.g., 45 days prior, 30 days prior to due date, etc.). The notification invites the individual to schedule and/or navigate to the portal, where additional documentation or questionnaires related to the testing may be filled out. Appointment confirmations, missed appointments, and cancelled appointments can all trigger email notifications, as needed. Additionally, clinic managers or supervisors can be set to receive email notifications of staff/employees who are due for vaccines, testing, or the like. These notifications can also notify when appointments or testing are missed, or whether or not staff is overdue or out of compliance. Email notifications can be configured with various criteria for automation, as needed.

## Scheduling

Since health surveillance panels require understanding scheduling and appointments, it is important to note a few terms relating to scheduling. First, the **Created Date**, which is the date on which a Panel Action is entered, or triggered, in a chart. Next, the **Visible Date**, identifies the date when the Panel Action will become visible to the patient, generally through a portal. The **Due Date** is the date by which the Panel Action needs to be performed. Understanding these three terms will better assist with the scheduling of panel appointments. What's more is that clients using a portal can take advantage of an additional option that allows users to self-schedule their appointments. And to provide a means to more efficient practices, users can be set to receive automatic email notifications when scheduling is needed. If using a portal, the user can be offered the ability to self-schedule their testing appointment, if preferred.

## Portal

The {{% system-name %}} system emphasizes employee engagement and tracking, offering easy access to due lists, employee work status, and health surveillance through its certified portal. Employees can schedule appointments, provide information, and complete questionnaires, easily maintaining work certifications and overall wellness. Though discussed briefly, here, available portals and their management will be touched on in detail during the [Portal Management Review Session](review-session-portal-management.md).

### Employee Portal

The Employee Portal is designed to prompt engagement with user-friendly, intuitive pre-exam questionnaires. Responses captured will then automatically populate the appropriate fields and documents in the clinical application, minimizing data entry and management for clinic staff. The time savings is significant – no more endless phone calls to collect information or schedule/reschedule. It is all done through the Employee Portal.

### Employer Portal

Our Employer Portal offers an "anytime" look at overall staff health surveillance and their associated panels. This allows for better planning around illnesses, absences, vaccine requirements, and general certifications. This may include the coordination of orders and results, driver fitness determination, or case management or work certification. Upon completion of a questionnaire, the captured data automatically updates the status, providing all parties the information they need to track and manage quality and compliance.

## Managing the Due List

When there is a member of a health surveillance panel, the panel will need to be *evaluated* in order to trigger all the Panel Actions that are due. There are several areas within {{% system-name %}} to view and manage these triggered actions, or **Due List** items. The Due List can be populated on the portlet, available on the chart Summary tab, the Due List chart tab, the Tests & Procedures section or Recommendations section of a dynamic encounter, as well as the various reports available on health surveillance forecasting. For more information regarding the viewing and managing of Due List items, or health surveillance panels, see the [Quick View - Due List Portlet](../../functions/e-chart/quick-view-due-list-portlet.md), [Due List](../../functions/health-surveillance/due-list.md), and [Due List in a Dynamic Encounter](../../functions/health-surveillance/due-list-in-a-dynamic-encounter.md) documentation.

## Reporting

[Health Surveillance](https://system/?f=layout&module=reports&name=HealthSurveillance&tabmodule=reports&t=Health+Surveillance&tabmodule=reports&tabselect=Health+Surveillance) has several helpful reports available in the **Reports** sidemenu.

![](../review-session-health-surveillance.assets/638d71f61f4d243a2dc94c2b5e3d7300.png)

### Beryllium Health Surveillance

The [Beryllium Health Surveillance report](https://system/?f=layout&s=pat&module=SystemReport&name=BerylliumHealthSurveillance&tabmodule=reports&t=Health+Surveillance) displays the results of the Beryllium Lymphocyte Proliferation Test (Be-LPT) of only individuals in the Beryllium health surveillance panel. The date range filter is used to define the date range of when the Be-LPT lab result was stored in the chart. The result filter is used to filter results according to a *Positive* or *Negative* reading. All results displayed are only those with the specific result value for the Be-LPT test (i.e., obs code 3099).

### Due List Count

On the [Due List Count report](https://system/?f=layout&s=pat&module=SystemReport&name=HSDueListCount&tabmodule=reports&t=Health+Surveillance), **Start Date** and **End Date** are required fields. These dates filter the report results according to panel Due Dates, and all charts part of a panel with a Due Date falling within the specified range will display all *Health Surveillance Due List Details*. The *Health Surveillance Due List Count* section will list a count of all charts due, according to the month groupings. These sections can also be exported to excel/csv for more sorting or filtering, as needed.

### Due List Status

The [Due List Status report](https://system/?f=layout&s=pat&module=SystemReport&name=HSDueListStatus&tabmodule=reports&t=Health+Surveillance) displays a listing of employees' statuses by panel, order, and location code, including dates of when the order was created, modified, and its due date. This report is designed to provide a list of what procedures/tests are due within a specific date range, as well as filter down by specific panel(s), specific order/test name(s), status and/or requirement. The Due Date range is required to run the report. This specifies the due date range of any specified procedures.

### Forecast

The [Forecast report](https://system/?f=layout&s=pat&module=SystemReport&name=Forecast&tabmodule=reports&t=Health+Surveillance) is designed to provide a list of all upcoming due dates falling within the specified date range filter (i.e., the Start Date and End Date). This report displays the last completed dates and next due dates for specified panels and/or locations.

### Non-Compliant Employees

The [Non-Compliant Employees report](https://system/?f=layout&s=pat&module=SystemReport&name=NonCompliantEmployees&tabmodule=reports&t=Health+Surveillance) results employees that are decertified for health surveillance panels.

### [**Panel Action Definition**](https://system/?f=layout&s=pat&module=SystemReport&name=PanelActionDefinition&tabmodule=reports&t=Health+Surveillance&panel=pa.name+AS+'Action+Name'&panel=GROUP_CONCAT(DISTINCT+pr.reg_source)+AS+'Reg.+Source'&panel=pa.description+AS+'Description'&panel=CASE+pa.trigger_type+WHEN+'E'+THEN+'Entry'+WHEN+'X'+THEN+'Exit'+WHEN+'R'+THEN+'Routine'+ELSE+'Unknown'+END+AS+'Trigger+Type'&panel=CASE+pa.trigger_type+WHEN+'R'+THEN+CASE+pa.trigger_date_type+WHEN+'DOB'+THEN+'Date+of+Birth'+WHEN+'event'+THEN+'Last+Event'+WHEN+'EDOB'+THEN+'Last+Event+-+On+Date+of+Birth'+WHEN+'DOH'+THEN+'Last+Event+-+On+Date+of+Hire'+WHEN+'CAM'+THEN+'Last+Event+-+On+Campaign+Date'+WHEN+'pit'+THEN+'Point+in+Time'+WHEN+'oact'+THEN++'Prior+Action+(Completed)'+WHEN+'tact'+THEN+'Other+Action+(Triggered)'+WHEN+'PE'+THEN+'Panel+Expiration'+WHEN+'MA'+THEN+'Medical+Anniversary'+ELSE+'Unknown'+END+ELSE+''+END+AS+'Trigger+Date'&panel=IF+(pa.event_type%3D'P',ol.name,pa.event_data)+AS+'Event+Name')

Using the autocomplete, select a Panel Name. Any additional columns can be selected using the Column Options selector. When submitted, the system will result the contents and details of the selected panel. The Panel Name field is not required. When left blank, the report will run, listing ALL active panels with their panel contents and details. This is a convenient way to render every active panel and component details into a view or CSV/Excel sheet for further sorting or printing needs.

### Panel Audit

The [Panel Audit report](https://system/?f=layout&s=pat&module=SystemReport&name=PanelAudit&tabmodule=reports&t=Health+Surveillance) lists all charts that are enrolled or a part of the selected panel, along with additional column details regarding panel membership and status. The report can also be generated by country, if necessary. Panel is not a required field and can be left blank to result an audit of charts in any panel.

### Panel Forecast

The [Panel Forecast report](https://system/?f=layout&s=pat&module=SystemReport&name=Forecast&tabmodule=reports&t=Health+Surveillance) displays current panel membership and next due dates for employees. End Date is a required field that needs a future date specified. The start and end dates need to be future dates, because only future order dates are being considered. This report, when considering the next due date, only looks at the representative action for each panel. Employees excluded from quality care are not included in the results of this report.

### Panel Metrics

The [Panel Metrics report](https://system/?f=layout&s=pat&module=SystemReport&name=PanelMetrics&tabmodule=reports&t=Health+Surveillance) displays health surveillance panels that are due within the specified due date range. This report displays each panel status, as well as other details organized in a variety of available sections:

* <strong>Employee Panels</strong>: This section lists the individual employees and any associated health surveillance panels that are due.
* The other sections display aggregate totals:
    * <strong>Total Employee Panels by Month</strong>
    * <strong>Total Employee Panels by Month, and Required vs Voluntary</strong>
    * <strong>Total Employee Panels Month, and Status</strong>

### Panel Status

The [Panel Status report](https://system/?f=layout&s=pat&module=SystemReport&name=PanelStatus&tabmodule=reports&t=Health+Surveillance) displays panel status details (i.e., current, historical, or deleted), next due dates, and brief summaries. To run the report, no fields are required, but are available for more granular results, if needed. When considering the next due date, only the representative action of each panel is is looked at. If keying in any start and end dates, ensure all dates are in the future. Only future order dates are considered. Also, if users are only interested in the current status of the panels, be sure Record Status is set to **Current**. Otherwise, historical and deleted panels will be represented in the results. Charts excluded from quality care are not included in the results.

### Performance Metrics

The [Performance Metrics report](https://system/?f=layout&s=pat&module=SystemReport&name=PerformanceMetrics&tabmodule=reports&t=Health+Surveillance) can be used to evaluate participation and compliance in health surveillance exams. This report looks at representative event orders and displays the status of those representative events, along with additional panel details. The End Date is a required field. The start/end dates are a filter for specifying the panel order item due date range. When run, representative actions/orders for each health surveillance panel are counted, the status of the exam is listed (i.e., completed, pending, declined), and the exam type (required or voluntary) is tracked for each clinic location and employer organization. This report may be exported to CSV/Excel, where participation percentages may be calculated.

### Respirator Roster

The [Respirator Roster report](https://system/?f=layout&s=pat&module=SystemReport&name=RespiratorRoster&tabmodule=reports&t=Health+Surveillance) will display all charts that are currently included in any active panel memberships where the panel name contains *Respirator* AND the *Last Fit Expires* date has not yet expired. Additionally, the report displays Resp Fit Completed Date (i.e., the completion date for the Resp Fit order, or representative order on the panel) and other information related to masks.

## System Configuration

The key to successful health surveillance is the preliminary work that goes into configuring the panels, as needed. The first, and most important thing, to note is that the order of the steps necessary for configuring panels is detrimental to the intended purposes and outcomes of the panel(s). Though the following summarizes, briefly, the steps needed to configure the health surveillance panels within {{% system-name %}} , Implementers should be available for assistance or additional resources, if necessary:

### Step 1 - Identify Panels & Panel Actions - Use Matrix

A panel defines a group of events or actions that will take place within a chart. Panels are used to document not just regularly scheduled, voluntary health screenings and check-ups; they are also used to order testing, procedures, or vaccines, as needed. Before beginning the configuration, identify what panels and Panel Actions are needed. Keep in mind that some Panel Actions may be one-time occurrences, or they may be regularly tracked testing. Because this is such an important step of the process, {{% system-name %}} specialists have a [matrix](https://drive.google.com/file/d/0B5Hsu0mf2-tkZGJSOEE2TkJYUkE/view) available that may be helpful in gathering the necessary panel criteria.

### Step 2 - Add Appointment Type(s)

Specific appointment types can be associated with Panel Actions, if necessary. When appointment types *are* specified, Print Definitions can then be utilized according to the panel needs, when appropriate. Add the appointment type(s) in the system that may be needed for each of the health surveillance Panel Actions.

### Step 3 - Order Items for Panels

Each Panel Action, including Representative Events, must have a corresponding order in the [Orders-List Editor](https://system/?f=orders&s=list_editor&t=List+Editor&tabmodule=admin&tabselect=Orders-List+Editor). Search all existing order items in the Orders-List Editor, and add order items for the panel(s), as necessary.

### Step 4 - Panels

With a lot of the preliminary work out of the way, add the specific health surveillance panels, as needed. This can be done by navigating to the **Control Panel** sidemenu and selecting the [Health Surveillance tab](https://system/?f=layout&module=HSP&name=PanelActionList&tabmodule=admin&tabselect=Health+Surveillance). Once there, simply click the **Add Panel** button. Fill out the fields accordingly, making sure the Representative Event is unique on every panel.

### Step 5 - Panel Actions/Action Rules

After the panels have been created, Panel Actions can be added, as appropriate. Again, Panel Actions are simply "actions", or services, added to a panel, required to be completed by the individual, or member. Adding Panel Actions to a panel tells {{% system-name %}} what needs completed, as well as when an individual may need notified.

### Step 6 - Completed Orders Import Tool

Panel Actions set up with a *Prior Action (Completed)* **Trigger Date** need a specific order item in the chart history to ensure the Last Completed date is recorded. This tells the system to mark the Panel Action complete, triggering any other action item(s) dependent upon the completion of the initial action.

With that said, it is important to retain the Last Completed date on imported health surveillance data. These dates will ensure that Panel Actions trigger with the appropriate due dates. Be sure the completed orders are recorded in {{% system-name %}} prior to any manual and/or automated memberships are established, before an HR feed is enabled, and before panel membership automation is processed via a cron/scheduled job, if applicable.

### Step 7 - Panel Memberships

Panel memberships refer to the individual charts affiliated with a given health surveillance panel. Determine how individual charts will become "members" of the panel(s). The out-of-the-box product allows panel memberships to be manually maintained by staff, unless Membership Rules are established and programmed. Rules can be programmed according to location, building, cost center, or job class for HR/PM interfaces.

To begin manually managing membership, navigate to the **Control Panel** sidemenu, and select the [Health Surveillance tab](https://system/?f=layout&module=HSP&name=PanelActionList&tabmodule=admin&tabselect=Health+Surveillance). Locate the panel being edited, and click the **Membership** hyperlink in the *Options* column.

#### Automated Memberships

{{% system-name %}} can automatically include/exclude charts in/from panels, based on location, building, cost center, and/or job class. When panel membership is determined by Membership Rules, the membership is considered *implicit*. This means that whenever an individual moves locations, transfers buildings or cost centers, or changes jobs, {{% system-name %}} will automatically update the membership, including or excluding the chart, as needed. Additional automated membership programming clauses can be programmed and customized, if preferred.

#### Manual Membership & Panel Membership Import Tool

When manually adding individual members to panels in {{% system-name %}} , or utilizing the Panel Membership Import tool, every membership added will be inserted as *explicit*. Explicit memberships are often referred to as *sticky*, because when a member changes locations, jobs, or the like, the original membership "sticks" to them, not updating automatically. Therefore, it is important to use caution when using the import tool. Otherwise, an increasing amount of work may be needed to continually maintain all explicit memberships, manually.

#### View Current Memberships

Just like managing memberships, viewing current memberships for a panel can be done by simply clicking the **Membership** link in the *Options* column, found in the [Health Surveillance tab](https://system/?f=layout&module=HSP&name=PanelActionList&tabmodule=admin&tabselect=Health+Surveillance) of the **Control Panel**. Simply view current members of each panel, as well as the current Membership Rule(s) set for each panel.

### Step 8 - Membership & Action Evaluator Cron Jobs

It is important that any necessary scheduled/cron jobs are established and set up, prior to any Go-Live date. Determine whether or not the Panel Action Evaluator and Membership Evaluator cron jobs are required, based on the needs of the organization. If there is a need, be sure to incorporate when the job(s) will be incorporated into the cut-over plan.

### Step 9 - Email Notifications

The {{% system-name %}} system has the ability to automatically trigger the sending out of email notifications. Given this functionality, review the out-of-the-box email layouts, and determine what options best suit the needs of the organization. Once decided, the scheduled jobs will be developed and implemented, accordingly. When ready for Go-Live, be sure to enable any scheduled job in the cut-over plan.

### Step 10 - Panel Action Evaluator

Though most clients have the Panel Action Evaluator run nightly as part of the scheduled jobs, there is an option that has been designed for testing and/or manual needs, as well. In the upper-right corner of the [Health Surveillance tab](https://system/?f=layout&module=HSP&name=PanelActionList&tabmodule=admin&tabselect=Health+Surveillance) of the **Control Panel**, is the [Panel Action Evaluator link](https://system/?f=panelactiontest&tabmodule=admin&tabselect=Health+Surveillance). Using this link provides a manual way to run the Panel Action Evaluator, consequently evaluating and triggering any applicable action(s) for all charts selected for evaluation. This can allow for testing panels prior to Go-Live, or even allow users to manually evaluate one, or many panels, after the cut-over.

### Declination Form

A default declination form is mapped to the **Decline Form** link, found under the **Due List** chart tab within the patient chart. This form should be updated with the client's specific declination form, as appropriate.

## Security & System Settings

Review the security settings for users needing access to Health Surveillance (and Case Management). Review settings and give permissions, enable, or set, as appropriate. These settings can be found under the Health Surveillance section of the Access Control user settings. Additional information can be found within the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) online help documentation, if needed.

![](../review-session-health-surveillance.assets/9ac9db18c8826a9471a86f38c6d5e9b5.png)

## Resources

[Health Surveillance Panel Matrix](https://drive.google.com/file/d/0B5Hsu0mf2-tkZGJSOEE2TkJYUkE/view)

### Help Documentation

* [Due List-Chart Tab](../../functions/health-surveillance/due-list.md)
* [Due List-Dynamic Encounter](../../functions/health-surveillance/due-list-in-a-dynamic-encounter.md)
* [Health Surveillance Panels-Action Rules](../../functions/health-surveillance/health-surveillance-panels-action-rules.md)
* [Health Surveillance Panels-Actions](../../functions/health-surveillance/health-surveillance-panels-actions.md)
* [Health Surveillance Panels-Add Individual Manual Membership](../../functions/health-surveillance/health-surveillance-panels-add-memberships-manually.md)
* [Health Surveillance Panels-Adding and Editing](../../functions/health-surveillance/adding-editing-health-surveillance-panels.md)
* [Health Surveillance Panels-Automated Membership](../../functions/health-surveillance/health-surveillance-panels-automated-membership.md)
* [Health Surveillance Panels-Completed Orders Import Tool](../../functions/system-administration/data-migration/completed-orders-import-tool.md)
* [Health Surveillance Panels-Export-Import Panels](../../functions/system-administration/data-migration/export-import-health-surveillance-panels.md)
* [Health Surveillance Panels-Introduction](../../functions/health-surveillance/introduction-to-health-surveillance-panels.md)
* [Health Surveillance Panels-Panel Definition Report](../../functions/reports/panel-definition-report.md)
* [Health Surveillance Panels-Panel Membership Import Tool](../../functions/system-administration/data-migration/panel-membership-import-tool.md)
* [Health Surveillance Panels-View Membership](../../functions/health-surveillance/viewing-health-surveillance-panels-and-membership.md)
* [Panel Action Evaluator](../../functions/health-surveillance/panel-action-evaluator.md)
* [Respirator Info-Chart Tab](../../functions/health-surveillance/respirator-info-chart-tab.md)
* [Work Regions-Work Location tab](../../functions/system-configuration/locations-management.md)
