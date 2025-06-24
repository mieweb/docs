---
id: '1e_bKkEQX8mrCMXpTNQR8QddEBfMVgEUgQVv-x6d49Ds'
title: 'Viewing Cases'
date: '2025-06-05T12:33:06.922Z'
version: 105
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../../system-configuration/side-chart-configuration.md'
  - 'deleting-an-existing-case.md'
  - 'closing-an-existing-case.md'
source: 'https://drive.google.com/open?id=1e_bKkEQX8mrCMXpTNQR8QddEBfMVgEUgQVv-x6d49Ds'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
A Case is a full report of a workplace injury, or incident, for an employee (patient). The case is created in an initial visit (encounter), and is then linked to subsequent visits. A case links all follow up visits (encounters), restrictions, accommodations, conditions, and nature of injury information. All of the documents pertaining to the case are grouped together within the chart for reporting purposes. There are several case types, which designate different required fields as well as state specific incident questions and forms. The terms case and incident may be used interchangeably in a system.

## Case Encounter Section

The dynamic encounters offer a Case section.  To see the listing of cases/incidents a chart has while working in an encounter, you must expand the Case section in the encounter.

![](../viewing-cases.assets/9cf42d08726b8e906cdb9a0308673c64.png)

When expanded, the Case section datavis lists any open case types the chart has existing so the encounter can be linked to an existing case, or offers the ability to create a new case if needed.  This is the summary to track cases (incidents), injuries, specific types (like MSEA or absence management) etc on the patient.

Case details display the date of the incident/case,  date created, the condition, case managers, and the last note and last plan. OSHA Work Related is for Work Related which means if it's been determined if the case/incident was work related or not. It will always say undetermined until a case manager determines and marks as such.

![](../viewing-cases.assets/c112a3f20c7d5bb2a4b36abe66322bcc.png)

Clicking on the Arrow icon in the Info column will display the Nature of Injury list for the specific case selected.

![](../viewing-cases.assets/36261cd9dcc71fb99555f6c7f96febc3.png)

## Case Side Chart Section

Open existing cases on a chart will be displayed on the side chart feature.  To display the side chart, simply click the icon found at the right of the chart's MR (medical record) number.  Side chart displays listing specific sections as a summary view. Find the case type in the side chart and click on the + on a specific listed case in order to expand to view case details.

![](../viewing-cases.assets/b49f7d0d058a9c2ecb514b02f2fe9fa0.png)

Refer to [Side Chart Configuration](../../system-configuration/side-chart-configuration.md) documentation for more detailed help regarding the side chart feature.

## Case Chart Tab

When working in a chart, there is a chart tab named Cases that is accessible.  In the Cases chart tab, one can have visibility to all cases the chart has. This chart tab will list any and all open and closed cases.  It does not display deleted cases.

{{% tip %}}
There is a Hide Closed or Show Closed button at the top right of the list of cases in the chart, that will show or hide closed cases from your view when working in the chart tab.
{{% /tip %}}

Closed cases have a conclusion date indicated in bold and when viewing closed cases in the summary listing, a closed case will not have a close hyperlink available because it's already closed.

![](../viewing-cases.assets/73f52bb13cf235f8b7f93114ff9580b5.png)

A case cannot be added to a chart or edited from the Case chart tab.  You must always do that when in the Case section of an encounter.

Clicking on the Case number (that is a hyperlink) will take you to a summary view where you can see the viewable details of that specific case on your screen and even batch print/fax linked incident documents that are linked to that case.

![](../viewing-cases.assets/a39b86be35f5bd89b9fc5fd8b9602b28.png)

### Existing Patient Cases/Incidents via Encounter

To see the listing of cases/incidents a patient/employee has, you must expand the Case section in the dynamic encounter.  There you will have the ability to create a new case/incident, or scroll down a bit further to link to an existing case or see the list of existing cases.

![](../viewing-cases.assets/9cf42d08726b8e906cdb9a0308673c64.png)

It shows the date of the incident, date created, the condition, case managers, and the last note and last plan.  OSHA Work Related is for Work Related which means if it's been determined if the case/incident was work related or not. It will always say undetermined until a case manager determines and marks as such.

## Managing Cases

### Delete

To delete a Case you can do it from the Case chart tab via the Delete hyperlink. Only users with security permission can delete cases from charts.  Refer to [Deleting an Existing Case](deleting-an-existing-case.md) help documentation for more detail.

![](../viewing-cases.assets/0fca2229c2413c2cb0e1490a52ae7383.png)

### Edit

If you needed to edit data in an existing case, you would need to link your encounter to it, or find the encounter that is already linked to it (may need to reopen the encounter if it's closed) and then expand the Case section in the dynamic encounter and then edit the fields needed.

### Add Task

A Task option is available on existing cases.  When clicked, a separate task window will open showing you an Incident Case Note task that would be sent to Case Management department users regarding this case if your MIE Implementer has set this up for use. Complete the task entry fields and click Add Task to submit a task regarding the specific case.

![](../viewing-cases.assets/64999d360f66763dbee669817ee85f94.png)

### Link/Unlink

When working in an encounter, clicking Link on a specific existing case will automatically link that case to the encounter.  Meaning, the encounter is related to the existing case type linked to. This allows documentation, encounters, etc to be linked to a case to group information.  If you wish to unlink it, simply click unlink to encounter. When unlinking a case from the encounter, the Case details section will reload so that a new case can be entered.

![](../viewing-cases.assets/e3cb3f2992ec4f0005084bc9efac843d.png)

Case details appear in the grey encounter info bar area if your current encounter (for the chart) is related to a case.

![](../viewing-cases.assets/15c510011c98f982f981c421158b54e8.png)

### Close

A case (incident) would be closed if the case is entirely completed and considered closed by your work comp carrier or TPA.  If you have a bidirectional interface to your carrier, they may send a flag in the message that automatically closes the case on the {{% system-name %}} side if a carrier is involved in that case type.  Otherwise, it is a manual process.

Closing a case is separate/different than closing & archiving an encounter.  A Case can be open for weeks to months to years.  It's the one case/incident that multiple documents and encounters may be linked to.

To close a Case, you can do it from the Case chart tab via the Close hyperlink found in the options column.  Please refer to [Closing an Existing Case](closing-an-existing-case.md) help documentation for detail.

![](../viewing-cases.assets/dcbbb246d6927a0f17112b3413c935d0.png)

#### 301

The 301 hyperlink provides the ability to print the OSHA 301 form regarding the chart and case.  The 301 form will be overlaid with data that was captured from the case specified.

.

![](../viewing-cases.assets/31159d45f42b93201e375d1a55b5fc08.png)

![](../viewing-cases.assets/39a0e233e58fd543f13ae00777575be0.png)

### Incident Links

The Case section in encounters offers an Incident Links button.  Clicking on the + icon in the Incident Links area below the list of existing cases to expand and display all encounters and documents linked to the specific case that is linked to the encounter you are working in.

![](../viewing-cases.assets/7133c1b2d1dc8a297520fbf85e9c41de.png)

The documents and encounters linked to that specific linked case will expand on your screen for viewing.  This gives visibility and accessibility to documents that are linked to the case, without having to get out of the encounter to look elsewhere for the information.  You can click on any document via it's hyperlink and it will open that in a separate window. When archiving an encounter that is linked to a case, the archived encounter document is automatically linked to the case as well.

![](../viewing-cases.assets/b4ee820710deb1671aab5c6c0bba2339.png)
