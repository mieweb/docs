---
title: "Common Case Search Report"
date: "2020-02-27T20:12:56.822Z"
url: "functions/reports/common-case-search-report.html"
version: 76
id: "1qJ77x6h2bKHr-1OAJ9qGOMRhuv2D5WKtevsdQ22z1RU"
source: "https://drive.google.com/open?id=1qJ77x6h2bKHr-1OAJ9qGOMRhuv2D5WKtevsdQ22z1RU"
menu:
    main:
        name: "Common Case Search Report"
        identifier: "1qJ77x6h2bKHr-1OAJ9qGOMRhuv2D5WKtevsdQ22z1RU"
        parent: "1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY"
        weight: 4100
---
Capturing case (incident) detail on a patient or employee is done through encounters using the dynamic *Case* section.

![](common-case-search-report.images/image38.png)

Incidents are cases. We use the terminology interchangeably, so you may have encounters that have this section named Case or it may be named Incident Details, etc.

## Common Case/Incident Search Report

From the Reports sidemenu, there is a reports parent tab named *Safety.* Also from the reports sidemenu, there is also a reports parent tab named *Health Surveillance.* If you don't have either of these tabs, your MIE Implementer can program them for you.

![](common-case-search-report.images/image40.png) ![](common-case-search-report.images/image39.png)

Within either of those parent report tabs, there is a report hyperlink named *Incident Report* or named *Case Report*. Clicking on that takes you to a report named *Common Case (or Incident) Search*. The report *Common Case Search* is a report based on our hard-coded Incident report, but this *common case search* layout (report) is customizable to include fields that you may want added to report.

![](common-case-search-report.images/image42.png)

{{% info %}}

Please do not confuse the Common Case / Incident Search report with our hard-coded report named Incidents which is found in its own specific report tab named Incidents. Our hard-coded report named Incident Search tab tab takes you to is not customizable.

{{% /info %}}


![](common-case-search-report.images/image41.png) ![](common-case-search-report.images/image44.png)

### Filters

When you access the Incident Report from the Safety or Health Surveillance reports tab, you will be taken to the *Common Case/Incident Search* report. In the Common Case/Incident Search there are several search filter fields available to narrow down your search. If you don't wish to filter, you can just scroll down to click SEARCH button and it will result any and every case (incident) for your system in a report summary. Again, this report is a layout that is customizable to your needs. If you wish additional search filter fields to be available in this Common Case/Incident Search report, please contact your MIE Implementer. Below we have defined each search filter field and where that field can be found in the encounter *Case* or *Incident Details* section when you are capturing case/incident details on a patient/employee.

![](common-case-search-report.images/image43.png)

* <strong>Patient:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific patients or employees.

![](common-case-search-report.images/image46.png)

* <strong>Department:</strong> This is an example of a custom field filter that could be configured on this report for you. In this example, we have a demographics field in the patient/employee's chart that captures their department (or that data comes in via an interface into their demographics). In this example, we have had that data field added to this customizable common case/ incident search report so we can run case/incident reports and possibly filter by department(s) if needed. This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific departments.

![](common-case-search-report.images/image45.png)

* <strong>Case Type:</strong> This is a drop-down search filter field. Our different case types available are listed here to run a report to filter by case type if needed. If a patient/employee has a case (incident), then it is stored as a specific type.

![](common-case-search-report.images/image49.png)

* This pulls from the field named <em>Select Case Type</em> that was captured in the case/incident section of an encounter.

![](common-case-search-report.images/image47.png)

* <strong>Case Number:</strong> This is a free-text search filter field to run the report by a specific known case number that {{% system-name %}} either assigned automatically or your interface assigned to the case/incident or what case number you brought in for cases if used the Lost Time import tool. If you know the case number assigned to the case/incident that was captured in the case/incident section of an encounter, you can type it in here and filter the report by that specific case number known. This search filter is an ‘exact search', meaning you have to key in the entire specific case number assigned to that case/incident otherwise it will not result. It is not a ‘contains as' or ‘starts with' type of search filter field.

![](common-case-search-report.images/image48.png)

* <strong>|sys| Claim Number:</strong> This is a free-text search filter field to run the report by a specific work comp claim number documented on a case/incident. You can type in a work comp claim number here to filter the report by that specific work comp claim number if known. This search filter is an ‘exact search', meaning you have to key in the entire specific case number assigned to that case/incident otherwise it will not result. It is not a ‘contains as' or ‘starts with' type of search filter field.

![](common-case-search-report.images/image50.png)

* This pulls from the field named <em>Claim Number</em> that was captured in the case/incident summary section of an encounter. The <em>Incident Summary</em> section is separate from the case section and the worker's compensation inputs expand/open for data input if <em>workers' comp related</em> is documented as ‘yes' in the patient's/employee's case/incident. This is an additional section found in the dynamic encounter (sometimes it's found in the Assessment parent jump tab section or elsewhere). If you do not have this section named Incident Summary and need to capture such workers' compensation inputs, please contact your MIE Implementer so it can be configured.

![](common-case-search-report.images/image51.png)

* You can type in a work comp claim number here to filter the report by that specific work comp claim number if known. This search filter is an ‘exact search', meaning you have to key in the entire specific case number assigned to that case/incident otherwise it will not result. It is not a ‘contains as' or ‘starts with' type of search filter field.
* <strong>Case Management:</strong> This is a drop-down search filter field. It looks to see if a Case Management encounter (visit type CMWR) is linked to a case/incident. If it is, it's considered "assigned".

![](common-case-search-report.images/image52.png)

* <strong>Case Manager:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific case manager users that are listed as case managers on an encounter.

![](common-case-search-report.images/image53.png)

* Case managers in {{% system-name %}} are stored as user role id #39 which is Case Manager which is stored an encounter user relationship on encounters that have this section to capture Case Manager on an encounter. You can then filter and run incident/case reports by a specific case manager(s) documented on the patient's/employee's encounters that get case managers assigned to them.

![](common-case-search-report.images/image54.png)

* <strong>Condition:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you case/incident results filtered by one or more specific active conditions the patient/employee has documented in their chart that is linked to a case/incident.

![](common-case-search-report.images/image55.png)

* When working in an encounter, if that encounter is linked to a specific case/incident, if any assessment (diagnosis/conditions) are entered into the same encounter, it will link the condition to the case/incident. The conditions linked can be seen in the encounter itself, or in the cases summary screen of the Incidents/Cases chart tab in a patient/employee's chart.

![](common-case-search-report.images/image56.png)

* <strong>OSHA Work Related:</strong> This is a drop-down search filter field. Our different OSHA work related determination choices available are listed here to run a report to filter by determination if needed.

![](common-case-search-report.images/image57.png)

* This pulls from the field named <em>Work Related</em> that was captured in the case/incident section of an encounter. This is a required field when documenting a case/incident for a patient/employee.

![](common-case-search-report.images/image28.png)

* <strong>Worker's Comp related</strong>: This is a drop-down search filter field. Our different Workers' comp related determination choices are listed here to run a report to filter by determination if needed.

![](common-case-search-report.images/image29.png)

* This pulls from the field named <em>Workers' Comp Related</em> that was captured in the case/incident section of an encounter.

![](common-case-search-report.images/image30.png)

* <strong>Date Filters:</strong> There are multiple date range filter fields available in the Common Case/Incident Search report. Start and end dates are not required, but they help you filter results based on a date range if entered. You can hand key in a date MM-DD-YYYY fields in that format or there are icons that operate as quick click buttons to insert or clear out a date entry in any field. The clock ![](common-case-search-report.images/image31.png) icon (if clicked) will insert today's date. The x ![](common-case-search-report.images/image32.png) icon (if clicked) will clear/cancel out the date field input in order to start over, or to signify no start or end date to filter the report by. The calendar ![](common-case-search-report.images/image33.png) icon (if clicked) will open up a calendar date picker where you can get to a calendar with tools to select a specific date to insert into the field.

![](common-case-search-report.images/image34.png)

* <strong>Incident Datetime:</strong> These start/end date range search filter fields will result only cases/incidents that fall in that date range for injury or onset of illness. The incident date/time is captured in the case/incident section of an encounter in the field named <em>Date and time of injury or onset of illness</em> from an injury type case.

![](common-case-search-report.images/image35.png)

* <strong>Reported Datetime:</strong> These start/end date range search filter fields for reported date. {{% system-name %}} assumes current date/time as the "reported date" whenever a new case is added to the system. If using the Lost Time import tool, this ‘reported date' on the case will be blank unless specify that column with date data when importing.
* <strong>Modified Datetime:</strong> The start/end date range search filter fields will result only cases/incidents that fall in that date range for being modified. The modified date (revision history) is captured and tracked by {{% system-name %}} whenever someone makes an edit to the case/incident section of an encounter. This search filter can be used to search for cases with a last known modification date range.
* <strong>Concluded Datetime:</strong> These start/end date range search filter fields will result only cases/incidents that fall in that date range as being closed (concluded). Cases/incidents can be closed via the patient's/employee's Incidents chart tab, or when the Case section in an encounter is expanded.

![](common-case-search-report.images/image36.png)

* When a user closes a case/incident, the date field they key in will be the date the case/incident is considered closed/concluded and this date range search filter in the report pulls from that.

![](common-case-search-report.images/image37.png)

* <strong>Verified:</strong> This is a drop-down search filter field. Our different verified determination choices available are listed here to run a report to filter by verification if needed.

![](common-case-search-report.images/image10.png)

* This pulls internally from the case/incident on a patient/employee. Whenever a user manually created/enters in a case/incident into a patient's/employee's chart via the encounter, it is automatically marked as <em>verified</em> (meaning value Yes) on the case/incident.

![](common-case-search-report.images/image11.png)

* If an employee is allowed to report an incident from the company's portal, then the case/incident will be made in {{% system-name %}} but will be automatically marked as <em>unverified</em> (meaning value No) and would show as highlighted in {{% system-name %}} . A staff member working the case/incident then at some point would need to get that case ‘verified'.

![](common-case-search-report.images/image12.png)

* <strong>PPI:</strong> This is a drop-down search filter field. Our different PPI choices available are listed here to run a report to filter by PPI if needed. PPI and/or MMI is not enabled by default in any system. Contact your MIE Implementer if you need to capture PPI and/or MMI details on cases/incidents.

![](common-case-search-report.images/image13.png)

* <strong>MMI:</strong> This is a drop-down search filter field. Our different MMI choices available are listed here to run a report to filter by MMI if needed. PPI and/or MMI is not enabled by default in any system. Contact your MIE Implementer if you need to capture PPI and/or MMI details on cases/incidents.

![](common-case-search-report.images/image14.png)

* If your system does have PPI and MMI enabled on your system, you will see those data input fields in the encounter in a section named <em>Incident Summary</em>. This section is usually found down in the Assessment jump tab section of the encounter. When that section is expanded, input for MMI date along with PPI and MMI data input fields to capture the data which the Common Case/Incident Search report can be filtered by.

![](common-case-search-report.images/image15.png)

* <strong>Injury/Illness Type:</strong> This is a drop-down search filter field. Our different Injury/Illness type choices are listed here to run a report to filter by that type if needed.

![](common-case-search-report.images/image16.png)

* If a case/incident has radio button "undetermined" or "yes" selected for <em>Work Related</em> input required field, then another required input field named <em>Injury/Illness type</em> will expand to select the injury/illness type. The data documented here is what is available via that drop-down filter choice in this report.

![](common-case-search-report.images/image17.png)

* <strong>OnSite Location:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific onsite locations that a case/incident has documented as it's onsite location if the case/incident happened at an onsite location.

![](common-case-search-report.images/image18.png)

* This pulls from the auto-complete field named <em>Please Select</em> that was entered on the case/incident section of an encounter when the injury/illness is marked as having occurred onsite. These auto-complete onsite location choices custom and specific to your company's onsite locations you have on premises and would have been configured by your MIE Implementer.

![](common-case-search-report.images/image19.png)

* <strong>Nature of Injury or Illness:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific natures of the injury or illness.

![](common-case-search-report.images/image1.png)

* This pulls from the field named <em>Nature of Injury or Illness</em> that was captured in an injury case/incident section of an encounter.

![](common-case-search-report.images/image2.png)

* <strong>Body Part:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific body parts from the nature of the injury or illness.

![](common-case-search-report.images/image3.png)

* This pulls from the field named <em>Body Part</em> that was captured in the nature of injury/illness section of an injury case/incident section of an encounter.

![](common-case-search-report.images/image2.png)

* <strong>Event of Exposure</strong>: This is a drop-down search filter field. Our different Event choices available are listed here to run a report to filter by determination if needed.

![](common-case-search-report.images/image4.png)

* This pulls from the field named <em>Event</em> that was captured in the case/incident section of an encounter. This is a field available in the Injury-(Non OSHA) case types by default. If you also wish to have this <em>Event</em> (and Source) data input fields in your Injury-(OSHA) case types, please contact your MIE Implementer to have that configured.

![](common-case-search-report.images/image5.png)

* <strong>Closed Status:</strong> This is a drop-down search filter field. Cases (incidents) for a patient/employee are listed in the dynamic Case section of an encounter or in the chart tab named Incidents. Cases are always marked as ‘open' when a case is created for a patient/employee. Cases can then be marked as closed when the case is entirely closed. Cases can be closed manually, or if there is a workers comp interface, then their insurance may mark them closed and it gets changed to that in {{% system-name %}} automatically. A report can be run by filtering cases/incidents that are open or closed if needed.

![](common-case-search-report.images/image6.png)

* <strong>Partition:</strong> This is an auto-complete search filter field and is buildable, meaning you can run the report to give you results filtered by one or more specific chart partitions.

![](common-case-search-report.images/image7.png)

### Report Results

After any search filter criteria fields are keyed in, click the SEARCH button at the bottom of the Common Case/Incident Search report. Below it will result all the matching criteria cases/incidents in a list view.

![](common-case-search-report.images/image8.png)

#### Columns of the Report

* <strong>Case Number:</strong> This displays the specific assigned number to the case/incident. See <em>Case Number</em> search filter field information in previous pages. {{% system-name %}} automatically assigns case numbers when they are created in {{% system-name %}} .
* <strong>Patient:</strong> This displays the last name,first name of the patient/employee on the case/incident. See <em>patient</em> search filter field information in previous pages.
* <strong>Case Type:</strong> This displays the case type the case/incident is. See <em>Case Type</em> search filter field information in previous pages.
* <strong>Case Date:</strong> This displays the Date/time of injury or onset of illness for the case/incident. See <em>Date Filters</em> search filter field information in previous pages.
* <strong>Reported On:</strong> This displays the reported date and time for the case/incident. See <em>Date Filters</em> search filter field information in previous pages.
* <strong>Created On:</strong> This displays the created date and time for the case/incident. See <em>Date Filters</em> search filter field information in previous pages.
* <strong>Modified On</strong>: This displays the last modified date and time for the case/incident. See <em>Date Filters</em> search filter field information in previous pages.
* <strong>Conclusion Date:</strong> This displays the closed/conclusion date for the case/incident. See <em>Date Filters</em> search filter field information in previous pages.
* <strong>Last Plan</strong>: This displays the last/most recent encounter visit type(s) the case/incident was linked to.
* <strong>WC:</strong> This column will display "<strong>Yes</strong>" or "<strong>No</strong>" depending on what the field <em>Worker's Comp related</em> was marked as in the case/incident. See <em>Workers comp related</em> search filter field information in previous pages.

![](common-case-search-report.images/image9.png)

* <strong>OSHA:</strong> This column will display "<strong>Undetermined</strong>" or "<strong>Yes</strong>" or "<strong>No</strong>" depending on what the field <em>Work related</em> was marked as in the case/incident. See <em>OSHA work related</em> search filter field information in previous pages.

![](common-case-search-report.images/image20.png)

* <strong>Verified</strong>: This displays if the verification status of the case/incident. See <em>Verified</em> search filter field information in previous pages.
* <strong>PPI:</strong> This displays the PPI status of the case/incident which will display "No" all the time unless your system is set up for this functionality. See <em>PPI</em> search filter field information in previous pages.
* <strong>MMI:</strong> This displays the MMI status of the case/incident which will display "No" all the time unless your system is set up for this functionality. See <em>MMI</em> search filter field information in previous pages.
* <strong>Location:</strong> This displays the onsite location of the case/incident if the case/incident happened onsite. See <em>OnSite Location</em> filter field information in previous pages.
* <strong>Nature Injury:</strong> This displays the nature of injury or illness of the case/incident. See <em>Nature of Injury or Illness</em> filter field information in previous pages.
* <strong>Event of Exposure:</strong> This displays the Event of the case/incident. See <em>Event of Exposure</em> filter field information in previous pages.
* <strong>Injury/Illness Type:</strong> This displays the Injury/Illness type of a work related case/incident. See <em>Injury/Illness Type</em> filter field information in previous pages.
* <strong>Case Managers:</strong> This displays the case manager name from the Case Management encounter the case/incident is linked to. See <em>Case Manager</em> filter field information in previous pages.

#### Customized Columns in Report Results

Since this is the Common Case/Incident Search report, other columns and titles in the results list view section can be added/customized to your company's needs. Contact your MIE Implementer if you need other result columns and data to pull onto the report that results. Below are some examples:

![](common-case-search-report.images/image21.png)

These columns are an example of having customization on this report. This is just for example:

* <strong>OSHA Recordable:</strong> In the screenshot example above, the column "OSHA Recordable" was added as a custom column. The data that pulls forward to populate in this column is an existing input field in {{% system-name %}} . If there is a date entry for the case section field named <em>Date determined recordable</em>, then it shows "Yes" in the column <em>OSHA Recordable</em> in the Common Case/Incident Search report. It will show "No" in that column if there is no date keyed into that field for the case.

![](common-case-search-report.images/image22.png)

* <strong>WC Claim Type:</strong> In the screenshot example above, the column "WC Claim Type" was added as a custom column. The data that it pulls forward to populate in this column is a custom field that was added to the Incident Summary section for their cases because they want to capture additional detail as to what type of workers comp claim type it is from their TPA.

![](common-case-search-report.images/image23.png)

## System Settings

There is a system settings that interact with Case sections and reporting of cases/incidents.

![](common-case-search-report.images/image24.png)

### Case Management / Pre-Case Number Text

{{% system-name %}} automatically assigns an incremental case number to every created case/incident. {{% system-name %}} uses prefixes the case number with whatever is the ‘value' in this system setting. By default, the value in the system setting is **S** which means every case number assigned using {{% system-name %}} will start with the letter S. {{% system-name %}} then follows that pre-text by assigning the case number as the current *year* (ex: 2015) and then follows that prefix with a dash – then the auto-incremental case id#. Final result of an assigned case number to a case/incident (for example) would show as: ![](common-case-search-report.images/image25.png) This system setting allows you to customize what PreCase number text you want your {{% system-name %}} created cases/incidents to start with.

### My Settings Preference

There is a My Settings preference that interacts with cases/incidents.

![](common-case-search-report.images/image26.png)

**Show Closed Incidents**: If set to Yes, closed cases/incidents will appear in the list view when in the Incidents/Cases chart tab in an employee's chart. You can toggle to show/hide closed cases within that tab, or set your preference here.

### Security Role Settings

There are security role permissions that interact with cases/incidents.

![](common-case-search-report.images/image27.png)

* <strong>Case Manager:</strong> This security role setting only applies if you have a custom feature configured on your system. The custom feature configuration option is a hyperlink that says "Create Case" in the far right options column of incident cases reports that will create the encounter specified in the system setting "WR Encounter Visit Type". This security permission of ‘Yes' allows user to have access to the case management module. The case manager user will only have access to view cases to which they are assigned.Yes allows users to create Case Management Encounters. These are the encounters that are used to manage an incident as it progresses. When it's set to "Yes" on the Incident report, there will be a new link that says "Create Case" that will create the encounter. ‘Yes' allows user to have access to the case management module. The case manager user will only have access to view cases to which they are assigned.
* <strong>Delete:</strong> If permission is set to yes, the user is able to delete cases/incidents when working in a dynamic encounter via the case section, or when in the Incidents chart tab of a patient/employee record.
