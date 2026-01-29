---
id: "1WHWf3KtGAsf_86VV1hJkFxguktz8RP_hQejN55HOyIY"
title: "Health Surveillance Panel Action Required for Certification"
date: "2025-11-11T14:53:01.924Z"
version: 85
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=1WHWf3KtGAsf_86VV1hJkFxguktz8RP_hQejN55HOyIY"
wikigdrive: "v2.15.30"
---

Health surveillance panels are composed of various action items (tests & procedures) which are then individually listed in the chart's Due List when triggered pending to be due. If a related action item (test or procedure) is configured on the health surveillance panel level as _required for certification_, that means the action item (test or procedure) is required to have done (versus voluntary).

![](./health-surveillance-panel-action-required-for-certification.assets/3c7790731e513b554542a85c781dcfd4.png)

## Required for Certification

For a health surveillance panel membership that has an action item(s) set to _required for certification_, the panel member failing it or becoming overdue for it (the required for certification action item/test or procedure) will subsequently become _decertified_ for the panel.

- <strong>Required for Certification:</strong> Checkmark to indicate the specific panel action item is required (for panel certification purposes). Leave unchecked if panel action is voluntary/not required for certification purposes to be completed by the employee. If checkmarked, the HSPanel member (employee) failing or becoming overdue for this action will become decertified for the HSPanel.

## Visibility to Required for Certification Action Items

On the chart's health surveillance Due List, there is a column titled **Required** and shows if the action item is required for certification or not.

![](./health-surveillance-panel-action-required-for-certification.assets/b0a12d4afcd875026788e4995f8cb9ea.png)

Within an encounter, in the Tests & Procedures section, when expanded there is a column titled **Required** and shows if the pending action item is required for certification or not.

![](./health-surveillance-panel-action-required-for-certification.assets/878c10ebff790c04f4ccbf851a196d7b.png)

In the Panel Membership by Individual report, there is a column titled **Voluntary/Required** and shows if the health surveillance panel membership has any action item that is required for certification or not.

![](./health-surveillance-panel-action-required-for-certification.assets/19321b3ee7ce0edae41e7c8f99aa1988.png)

## Pending Decertification or Decertified

Health Surveillance Panels (that a chart is a member of) will automatically decertify charts based on being overdue for the required testing or having failed required testing. The system will visibly alert the end user in the Panel Membership portlet to this via the red message of _Decertified_ upon the daily health surveillance evaluator run, which sets the decertification record on the chart. Until then, you may see _Pending Decertification_ as the status.

The panel membership portlet and panel membership overview displays decertification status also via red color/color key.

![](./health-surveillance-panel-action-required-for-certification.assets/05686ef997c06581ed04ac9d11722fb2.png)

If any Health Surveillance Panels in membership (with required for certification action items within the panel) show ‘decertified' for it, that means an action item(s) required for certification is overdue or has failed required testing. The panel membership portlet and panel membership overview chart chart tab display desertification status, as well as display the last failed required order.

Decertified status in Panel Membership portlet:

![](./health-surveillance-panel-action-required-for-certification.assets/77e6c5f41a6cc92fc28b6d60c5556dfd.png)

Decertified status in Panel Membership Overview (via the red color/color key):

![](./health-surveillance-panel-action-required-for-certification.assets/05686ef997c06581ed04ac9d11722fb2.png)

Pending Decertification status in Panel Membership portlet:

![](./health-surveillance-panel-action-required-for-certification.assets/4e7391f90f57f936e3b5639b67d54747.png)

Pending Decertification status in Panel Membership Overview (via the red color/color key):

![](./health-surveillance-panel-action-required-for-certification.assets/05686ef997c06581ed04ac9d11722fb2.png)

## Documenting a Required for Certification Action Item/Test/Procedure

Any action item/test procedure (of a health surveillance panel) that was configured to trigger as _required for certification_, will display a unique icon next to the applied test/procedure/action item when performed in an encounter. The icon is a checkmark box and when hover over it, it displays _pass/fail_ as the help verbiage.

![](./health-surveillance-panel-action-required-for-certification.assets/ad31d11074140985d480b0a73e840d5f.png)

The specific action item/test/procedure can be marked specifically (since it's required for certification) as pass, fail, permanent fail, or review.

![](./health-surveillance-panel-action-required-for-certification.assets/37a34f78276ae8a09b4c8dbc406a08ef.png)

Once you've marked the test/procedure/action item as any of the criteria options, it shows that status.

![](./health-surveillance-panel-action-required-for-certification.assets/f067dc2398a55bc4d52a36c3fc34421a.png)

Note: Any marked as ‘Fail' will reflect that way on the Panel Membership visibility,

![](./health-surveillance-panel-action-required-for-certification.assets/a87b485981b40ca90fd9bce46d5378bd.png)

The individual test/procedure/action item (aka: in this example the Resp Fit test) is to be marked completed using the other icon to mark the item as ‘completed/performed'.

![](./health-surveillance-panel-action-required-for-certification.assets/59aeb12dffda99b6f8f79352796b8468.png)

## Reporting

### Non-Compliant Employees

The Non-Compliant Employees Report displays all charts that have EVER been non-compliant, or currently are decertified from health surveillance panels with required testing for compliance.  A health surveillance panel can be configured with various components set as Required for Certification (e.g., action items, testing). This report does not include charts marked as ‘Exclude Patient from Quality Care'.

Whenever a chart is established as a member of a panel with required testing and the panel member fails to perform the requirements, or the panel becomes overdue, the member will be decertified (non-compliant) from the panel. These results will display on the report with their respective decertification dates.

This report can be filtered by panel name, by date range of when a chart was designated out of compliance, and by limiting to currently decertified employees only.  At least one date in the range is required when not limiting to currently decertified only.

An option to include employees regardless of membership status in the listed panel(s) is also available, as the default behavior is to list only employees who are currently members. There is a checkbox in the filter that (when checked) will include all current and former health surveillance panel members.

The other option to checkmark 'Currently Decertified Only' will limit results to only active decertifications.  To see results, selecting this checkbox or entering a date in the 'Decertification Date Range' interval is required.

![](./health-surveillance-panel-action-required-for-certification.assets/3301ee3a277426f7f4bd282f7438e3b7.png)

### Panel Membership by Individual

The Panel Membership by Individual report displays all charts included/excluded for health surveillance panel membership history. Search filters can be used to search for specific employees, locations, panel name, cost center, as well as when an individual was included (Start Date) in or excluded (Stop Date) from a given health surveillance panel membership history. Additional details include whether a panel is required or voluntary, decertification dates if applicable, as well as reasons for changes made to any of the given panel memberships history. Charts excluded from Quality Care are not included in the results of this report. Once the results display in the datavis outputs, further filtering, grouping, graphing, etc can be done.

![](./health-surveillance-panel-action-required-for-certification.assets/de1a09469029602039f6d19024f292a1.png)

### Panel Metrics

The Panel Metrics report displays charts with health surveillance panel memberships that are due within the specified due date range. This report displays each panel status, as well as other details organized in a variety of available datavis sections:

- Employee Panels:  This section lists the chart(s) and health surveillance panel(s) they are a current member of, the clinic location on the chart's demographics, and due dates, completed dates, decertification/overdue dates and overall panel status (representative event on the panel).
- The other sections display aggregate totals:
  - Total Employee Panels by Month and by Status
  - Total Employee Panels by Month, and Required vs Voluntary
  - Total Employee Panels Month, and Status

![](./health-surveillance-panel-action-required-for-certification.assets/9f60ab9f30e77715aa537558799c3d15.png)
