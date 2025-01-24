---
id: '1ciYNrQdDiP0yQ9oC8t_LQ3zLCsydAEMRKODVSFdHfzQ'
title: 'Panel Membership Portlet'
date: '2024-11-26T21:11:01.822Z'
version: 98
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../e-chart/patient-summary-interactive-chart-tab.md'
  - 'viewing-health-surveillance-panels-and-membership.md'
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=1ciYNrQdDiP0yQ9oC8t_LQ3zLCsydAEMRKODVSFdHfzQ'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
Charts may be members of health surveillance panels that are "overall due" by a specific date.  The Summary dashboard chart tab can be set up to display the *Panel Membership* portlet.  This allows clinicians visibility of those health surveillance panels that a chart is a member of.  The subsequent *Due List* portlet also relates to panel memberships, as it shows the items (tests & procedures) that are pending as ‘due' for the chart, including those items related to their health surveillance panel memberships.

## Panel Membership Portlet

From within the Summary dashboard chart tab, there is a portlet available for display named *Panel Membership*.  This portlet displays any current health surveillance memberships for the chart.  Below that portlet is a *Due List* portlet that should be utilized.  The Due List portlet lists pending due list items (tests/procedures) that need to either be ordered and referred out to an outside facility, or items that need performed in office and marked as completed, or marked declined/waived, etc that may relate to the health surveillance panel(s) the chart is a member of and currently due for.  For more information on how portlets display in the Summary dashboard, please see the help guide named [Patient Summary-Interactive Chart Tab](../e-chart/patient-summary-interactive-chart-tab.md).

![](../panel-membership-portlet.assets/c9ecb3fea26543d685089ed29cc8c43b.png)

### Contents in the Panel Membership Portlet

Any current health surveillance panel memberships (for the chart) are listed in **bold** in a bullet point.

The overall Panel Due Date is within the parenthesis next to the panel membership name.

![](../panel-membership-portlet.assets/d98718694510b3bcbadcf533497e0d78.png)

If the person had health surveillance testing completed, the health surveillance Panel Status will also display a value that pertains to the specific health surveillance panel.  Ex: Fit, Not Fit, Complete, Pending, Fit, etc.

![](../panel-membership-portlet.assets/af49f6537fa9c1681f04d5310ac8e105.png)

#### Overdue panel membership

If the overall due date for the panel membership has passed (meaning the panel's representative event hasn't been completed) the portlet will show in **red** an Overdue of its due date.  This helps clinicians easily tell what health surveillance panel (and testing) that the person is overdue for.  Overdue panel memberships also relate to separate reporting available in the product.

![](../panel-membership-portlet.assets/e8f85f647edc4dc712807199c1350387.png)

#### Linked items with different due dates

If the member's health surveillance panel has panel components/action items (tests & procedures) that have a different due date on the individual items (compared to the overall panel due date) a subsequent bullet point will display *Linked items with different due dates*.  It will then list the specific action items (tests & procedures) related to that health surveillance panel membership that have individual due dates that are different from the overall panel status due date.

Action items (tests & procedures) within a health surveillance panel may be configured to be due at a different point of time versus the overall panel due date.  This simply helps give visibility to such action item(s) that may be due before (or after) its overall panel due date.

![](../panel-membership-portlet.assets/119bedc9fe3ea470861a260732df7804.png)

Once can utilize the *Due List* portlet to visibly see those action item(s) and look at the specific different due dates for the individual tests/procedures that are related to the chart's health surveillance panel testing, and their different due dates compared to the overall panel due date.

![](../panel-membership-portlet.assets/a2cc9aa6cf4e1e62ecc1c3396be4e954.png)

#### Pending Decertification or Decertified

Health Surveillance Panels in membership will show as ‘decertified' for it, based on being overdue or having failed required testing. The panel membership portlet and panel membership overview chart chart tab display desertification status, as well as display the last failed required order.

Decertified status in Panel Membership portlet:

![](../panel-membership-portlet.assets/77e6c5f41a6cc92fc28b6d60c5556dfd.png)

Decertified status in Panel Membership Overview (via the red color/color key):

![](../panel-membership-portlet.assets/05686ef997c06581ed04ac9d11722fb2.png)

Health surveillance panels comprise of various action items (tests & procedures) which are individually listed in the chart's Due List when triggered pending to be due.  If a related action item (test or procedure) is configured on the health surveillance panel level as *required for certification*, that means an action item (test or procedure) is required to have done (versus voluntary).

![](../panel-membership-portlet.assets/3c7790731e513b554542a85c781dcfd4.png)

For a panel membership that has an action item(s) set to *required for certification*, a panel member failing it or becoming overdue for it (the action item/test or procedure) will subsequently become *decertified* for the panel.

Health Surveillance Panels (that a chart is a member of) will automatically decertify charts based on being overdue for required testing or having failed required testing. The system will visibly alert the end user in the Panel Membership portlet to this via the red message of *Decertified* upon the daily health surveillance evaluator run, which sets the decertification record on the chart.

The panel membership portlet and panel membership overview displays decertification status also via red color/color key.

![](../panel-membership-portlet.assets/05686ef997c06581ed04ac9d11722fb2.png)

## Pencil Icon in Panel Membership Portlet

Clicking on the pencil icon (manage info icon) from the Panel Membership portlet will take you directly into the *Panel Membership Overview* chart tab where you can manage Panel Memberships for the chart manually (explicitly).

See additional information about the Panel Membership Overview tab in the document [Viewing Health Surveillance Panels & Membership](viewing-health-surveillance-panels-and-membership.md).

## Learning Management System

To learn more about the Panel Membership, follow the link below to the Learning Management System course:

* [Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
