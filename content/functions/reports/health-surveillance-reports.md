---
id: '16XgocUDbGRvTr8qroJOXucpx0JFi7zBud5e2fsv9jmM'
title: 'Health Surveillance Reports'
date: '2024-02-21T12:30:05.116Z'
version: 295
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=16XgocUDbGRvTr8qroJOXucpx0JFi7zBud5e2fsv9jmM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Health Surveillance Reports

You must have security permission to the Reports module/tab within {{% system-name %}}. This permission is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users to access the Reports left sidemenu tab module.

![](../health-surveillance-reports.assets/09ec61d9ee49b68f313c43d40f34ad2e.png)

This guide will go through the most common out of the box Health Surveillance Reports available in {{% system-name %}}.

![](../health-surveillance-reports.assets/73800936deffc88206bda48183950e6f.png)

## Accommodations Report

Accommodations can be documented using the Accommodations section of an encounter, or the stand alone Restrictions/Lost Time chart tab. The Accommodations Report then displays the results of any accommodations that are/were active within the date range filtered by. A date range (past, present or future) is required to run the report.  Other filtering options are available in the Accommodations Report.  Once the results display in the datavis output, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/4a847f6dad5e62b50947e7c327853b78.png)

{{% note %}}
Permanent vs Temporary accommodations is how an accommodation is categorized upon its end date.  If an accommodation does not have an end date, then it is considered Permanent.  If an accommodation has an end date, then it is considered Temporary.
{{% /note %}}

## Beryllium Health Surveillance

This report displays the Be-LPT standard blood test lab result for individuals who are current members of the Beryllium health surveillance panel. The date range filter option is the date of a Be-LPT lab result observation stored in the chart. If a date range is used, it will result the Be-LPT lab value that is found within that date range. If more than one Be-LPT lab result is found within the date range (or if no date range is used at all), then the last most recent value will display on this report.

The **Result** filter option is to filter to display listings of only those with a Positive or Negative value for the Be-LPT test within that date range.

Only individuals and results display on this report if they are a current member of the Beryllium health surveillance panel.  All results displayed are only those with the specific result value for the Be-LPT test (i.e., obs code 3099).

![](../health-surveillance-reports.assets/0b6deaa22a47be401d9b94e9fbd849e5.png)

## Due List Count

On the Due List Count report, **Start Date** and **End Date** are required fields. These dates filter the report results a list of current charts and counts with pending or in progress due list items according to panel Due Dates, and all charts part of a panel with a Due Date falling within the specified date range will display all Health Surveillance Due List Details. The Health Surveillance Due List Count section will list a count of all charts with due list items (pending or in progress) that are still due, according to the month groupings. These sections can also be exported to excel/csv for more sorting or filtering, as needed. This report does not include charts marked as ‘Exclude Patient from Quality Care'. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/a858c8b3c772ab461e1358a8ba451f65.png)

## Due List Status

The Due List Status report displays a listing of charts with any due list items that had/have a due date within the Due Date range filter running the report by. The Due Date range filter is **required** to run the report, which is a range of due list items that have a ‘due date' on them that fall between that range indicated.

The Due Date range finds any due list items that had/have a due date between that range. The report displays results of what tests & procedures (due list items) that were/are "due" within that specific due date range, as well as its current *status*.  Additional search result filters can be done by specific health surveillance panel(s), specific order/test name(s), status and/or requirement.  Once the results display in the datavis output, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/895c2e6738ddd284b3271964df74f406.png)

## EKG Report

The EKG report displays a listing of charts having any specific stored ECG observation data in it.  ECG/EKG data can be entered using tests & procedures item typically named ECG or EKG and data manually keyed into that applied encounter section.  The ECG or EKG order item section utilizes an ECG layout preconfigured in the product, to display specific data items to capture regarding the EKG/ECG being performed.  The data captured for an EKG/ECG from that layout is stored as observations.

![](../health-surveillance-reports.assets/37d98f14cce953ab31df6fac4dbd4067.png)

The data/results for EKG/ECG then displays on this report according to the date range of entered data. Optional filter criteria is available to limit output results. Once the results display in the datavis output, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/f39bdb1af33c777c4466d82f67e091ad.png)

## Flu Waiving

The performable Flu Waiving Report displays all charts that still have overdue pending order items that were triggered by their membership to the Flu Program health surveillance panel.

After reviewing the report listing output, this report can be performed to in mass, waive some or all of the identified pending overdue order items.

Marking any overdue pending flu order items for charts who missed having their flu orders completed in previous years, will then allow them to be able to have new orders for flu triggered and reminders generated this year. Using this Flu Waiving Report, on existing overdue pending Flu order items, need to be waived and marked with the identified waived date sufficiently far in advance of the next annual Flu Program year, to not be considered complete for the new upcoming Flu program year.

Once this report is run with a Waived date, the indicated pending overdue order items will be marked with the Waived status, marked with the Date indicated, and marked with comments of: Performed Flu Waiving Report on the order items.

![](../health-surveillance-reports.assets/b7a4d99eece569967b04685482d2e9a3.png)

## Non-Compliant Employees

The Non-Compliant Employees Report displays all charts that have EVER been non-compliant, or currently are decertified from health surveillance panels with required testing for compliance.  A health surveillance panel can be configured with various components set as Required for Certification (e.g., action items, testing).  This report does not include charts marked as ‘Exclude Patient from Quality Care'.

Whenever a chart is established as a member of a panel with required testing and the panel member fails to perform the requirements, or the panel becomes overdue, the member will be decertified (non-compliant) from the panel. These results will display on the report with their respective decertification dates.

This report can be filtered by panel name, by date range of when a chart was designated out of compliance, and by limiting to currently decertified employees only.  At least one date in the range is required when not limiting to currently decertified only.

An option to include employees regardless of membership status in the listed panel(s) is also available, as the default behavior is to list only employees who are currently members. There is a checkbox in the filter that (when checked) will include all current and former health surveillance panel members.

The other option to checkmark 'Currently Decertified Only' will limit results to only active decertifications.  To see results, selecting this checkbox or entering a date in the 'Decertification Date Range' interval is required.

![](../health-surveillance-reports.assets/3301ee3a277426f7f4bd282f7438e3b7.png)

## Panel Action Definition

The Panel Action Definition report displays all triggerable action items of any specified active health surveillance panels. This report can be filtered down to specific panels, as needed. The Panel Action Definition report not only displays active health surveillance panels and action items, but can be utilized to export the data to a DataVis grid or CSV file for further filtering, pivoting, as well as printing, if necessary.

When generating the report, it will result the programming contents and programming details of the selected panel in the system and its configured panel action items (components). The Panel Name field is not required. When left blank, the report will run, listing ALL active health surveillance panels programmed in the system with their panel contents and details programming in the system. This is a convenient way to render every active panel and component details into a view or CSV/Excel sheet for further sorting or printing needs.

![](../health-surveillance-reports.assets/86bd5ac5fbba9cea1d9bab032816b662.png)

## Panel Audit

The Panel Audit report will display charts who have Employee Status of ‘Active' in their demographics, and if they are current members to any health surveillance panels.  The report contains details regarding the current panel memberships, status, and relevant dates of the representative events of only those charts with Employee Status set to Active in demographics.  The Panel Audit report can be filtered down to display charts by current memberships in specific health surveillance panels (or by country if your system utilizes work regions configuration workflows). Running the report with no filters will generate a list of active employee status charts with current membership in health surveillance panels.

![](../health-surveillance-reports.assets/7de9ef3df619de34ccda521a9a5a3d24.png)

Note: the Panel Audit report 'Next Due Date' column shows the due date of any current pending or in-progress representative event order item if that exists, otherwise it will display the first upcoming forecasted due date.

## Panel Forecast

The Panel Forecast report can be used to determine when a health surveillance panel is next due for all charts that are members of a given health surveillance panel, regardless of compliance and regardless of employee status. The Panel Forecast report can be filtered by Employer Organization(s), Panel(s), and Start/End Dates. The Start and End Date filters must be provided in order to run the report, and the dates should always be future dates. The report displays a Last Completed Date column, which contains the date the health surveillance panel was last completed for a chart. When considering the Next Due Date, only the representative action on each health surveillance panel is considered in the query.

* Charts excluded from Quality Care are not included in the results of this report.
* Only the representative event of the health surveillance panel is considered for Next Due Date.
* The Panel Forecast report will display <em>anyone</em> who is due for health surveillance regardless of their status (active, terminated, retired, inactive, unknown etc) so can filter by EE status column to help decipher.

Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/0c849891db6e26f6914627756eb7cd27.png)

## Panel Membership by Individual

The Panel Membership by Individual report displays all charts included/excluded for health surveillance panel membership history. Search filters can be used to search for specific employees, locations, panel name, cost center, as well as when an individual was included (Start Date) in or excluded (Stop Date) from a given health surveillance panel membership history. Additional details include whether a panel is required or voluntary, decertification dates if applicable, as well as reasons for changes made to any of the given panel memberships history.  Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/de1a09469029602039f6d19024f292a1.png)

## Panel Metrics

The Panel Metrics report displays charts with health surveillance panel memberships that are due within the specified due date range. This report displays each panel status, as well as other details organized in a variety of available datavis sections:

* Employee Panels:  This section lists the chart(s) and health surveillance panel(s) they are a current member of, the clinic location on the chart's demographics, and due dates, completed dates, decertification/overdue dates and overall panel status (representative event on the panel).
* The other sections display aggregate totals:
    * Total Employee Panels by Month and by Status
    * Total Employee Panels by Month, and Required vs Voluntary
    * Total Employee Panels Month, and Status

![](../health-surveillance-reports.assets/9f60ab9f30e77715aa537558799c3d15.png)

## Panel Status

The Panel Status report displays panel status records for charts.  Panel Statuses are recorded once a representative event is performed and/or if a Panel Status data import CSV were imported with a panel status record.  Charts marked as ‘excluded from quality care' are not included in the results.  The report has a filter for panel membership to allow reporting by current members only, non-members only, or both.  If filtering by Next Due Date range, the representative action for each panel is looked at.  The Next Due Date range needs to be in the future if filtering by that because only future due dates are considered.  In the detailed report results, there is an ‘options' column that includes a link for deleting status records that were created in error. The column Record Status needs to be filtered as ‘Current' if interested in the current status of the panel statuses.  Typically, the report is run using *Record Status: Current* and *Panel Membership: Current Members Only*. Otherwise, historical and deleted panels will be represented in the results.

![](../health-surveillance-reports.assets/948100d9d12081bcc79000e6c3be8985.png)

This is NOT the report to run to see overdue individuals, especially first time implicit/explicit members of HSPanels (since no status record has been recorded as of yet).

![](../health-surveillance-reports.assets/bd7596f628500cf27e5c91f0ce0623cc.png)

At this time implicit/explicit memberships into a HSPanel will show Panel Status as ‘entry' until initial testing/representative event is performed, which is when the first Panel Status record would then be recorded in the system for the chart and take over from there.  So, a person **can** be overdue, yet show Panel Status of ‘entry' because initial testing wasn't performed and no initial Panel Status record is on the chart yet.    
![](../health-surveillance-reports.assets/7f3aabbb3be4ccce8d29457d4eb4dea5.png)

Also, if using Patient Panel Status import to put charts into memberships, the Panel Status record is recorded using the column in the spreadsheet tool.  This will then record an initial Panel Status on the chart and the Panel Status will update as representative events are performed or even if they become overdue, since an initial Panel Status record exists on the chart initially (from data import efforts).

![](../health-surveillance-reports.assets/7964c37fc2a9cd4d567fdf6a46cc8641.png)

The Panel Status report offers a ‘Delete' option, which will immediately delete that specific Panel Status record (includes Record Status & Panel Status etc) off of the health surveillance panel and will be reflected visually after next day evaluators run.  The column ‘Record Status' will say ‘deleted' after performing.

![](../health-surveillance-reports.assets/f91fc175a0804650bbfcda7fde8269b9.png)

## Performance Metrics

The Performance Metrics report can be used to evaluate participation and compliance in current health surveillance panel memberships. This report looks at representative event order on current health surveillance panel memberships and displays the status of the representative events from member's charts, along with additional panel details. The start/end dates are a required field for specifying the panel's representative event due list item and its specific due date. When run, representative events for each current health surveillance panel membership are counted (if the representative event for the health surv panel membership is within the start/end date range indicated), the status of the representative event for the health surveillance panel is listed (i.e., completed, pending, declined), and the representative event type (required or voluntary) is displayed along with other data.  Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/7db33184402c85767628a58f230399eb.png)

## Respirator Roster in Memberships

The Respirator Roster report displays all individual charts that are in active health surveillance panel membership in one of the following panels: SCBA, Resp Fit, Resp Med Approval, and/or Respirator Medical Approval-Voluntary along with latest respiratory fit details IF their 'Last Fit Expires' date has not yet expired. If the active health surveillance member's 'Last Fit Test Expires' date is prior to today's date (meaning it's expired), that chart will not be listed on this report. Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/089a1c8b4b3856f038020fba2e513a88.png)

## Respirator Wearers - Full Report

The Respirator Wearers-Full Report displays all charts with respiratory fit data details found stored in charts, even if their last fit test is expired and even if they are not current members of any respirator related health surveillance panels. Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/da7f4bd393e683c463415353bddd622b.png)

## Restrictions Report

Restrictions can be documented using the Restrictions section of an encounter, or the stand alone Restrictions/Lost Time chart tab. The Restrictions Report then displays the results of any restrictions that are/were active within the date range filtered by. A date range (past, present or future) is required to run the report.  Other filtering options are available in the Restrictions Report.  Once the results display in the datavis output, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/65dd64ff89b6b2aa7ab9eb40cad46273.png)

## Vision Screenings

The Vision Screenings report looks for a Vision Screening due list item triggered from a health surveillance panel component need, on a chart (past, present or future), its status, and displays the Vision Screening results (if applicable) according to the due date of the Vision Screening due list item. This does not result on-demand Vision Screenings applied to a chart.  The Vision Screening item must have been triggered/linked to a health surveillance panel level need. Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/bbe8ffab999e4a5c78a3cc4c92d1d432.png)

## Written Opinions Past Due

The Written Opinions Past Due report displays a list of any Written Opinion due list items that are past due (past the due date on the Written Opinion due list item), its current status, if other corresponding panel action items (testing components) have been worked. Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](../health-surveillance-reports.assets/722f93f45bced4a21b7cc8c14cf211ff.png)
