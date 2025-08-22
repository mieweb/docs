---
id: '1CuNALp11tyFSx3IKXsJNA7IO-lGT-ZA2PQi8AOKKfxM'
title: 'Viewing Health Surveillance Panels & Membership'
date: '2025-08-18T13:50:35.726Z'
version: 175
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'panel-membership-portlet.md'
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=1CuNALp11tyFSx3IKXsJNA7IO-lGT-ZA2PQi8AOKKfxM'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Various security permissions apply to the Health Surveillance editor for the system within the Control Panel.

![](../viewing-health-surveillance-panels-and-membership.assets/9a0c611f7367b5384ad5c7d6db51117f.png)

If you have security permission(s), click the *Control Panel* sidemenu tab. Once in the Control Panel tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance)

![](../viewing-health-surveillance-panels-and-membership.assets/e753ad76d91a6e05f19bc6bf278166af.png)

The listing of current active configured Health Surveillance Panels will display on the screen within an updated editor that utilizes a datavis grid.

## Updated Editor

An updated Health Surveillance editor (that utilizes a datavis grid method) is accessible from the Health Surveillance control tab upon landing.  The list of active configured health surveillance panels is predefined as a perspective and grouped by Panel Name.

![](../viewing-health-surveillance-panels-and-membership.assets/a27b5b6cc86c5bd47aafd315d5feef9f.png)

### Viewing Memberships from Updated Datavis Editor

You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel from the Health Surveillance tab found in Control using the updated editor (which is what you land on when advancing to the Health Surveillance tab) that utilizes a datavis grid method.

To view existing memberships & membership rules on existing panels from the Health Surveillance updated datavis editor, simply click the person icon to the right of any listed Health Surveillance Panel (the icons to the right of the Panel name should display upon hover).

![](../viewing-health-surveillance-panels-and-membership.assets/4bb69cd3a55955d8536aa85268603992.png)

### Viewing Memberships from Legacy Editor

The Legacy Health Surveillance editor is accessible from the updated datavis Health Surveillance editor by clicking the Legacy Editor hyperlink near the upper right.

![](../viewing-health-surveillance-panels-and-membership.assets/ba0f4348eec8588ba2042d5d9617c3cd.png)

You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel from the Health Surveillance tab found in Control using the updated editor (which is what you land on when advancing to the Health Surveillance tab) that utilizes a datavis grid method.

To view existing memberships & membership rules on existing panels from the Health Surveillance legacy editor, simply click the Membership hyperlink to the right of any listed Health Surveillance Panel.

![](../viewing-health-surveillance-panels-and-membership.assets/a71c02d4bfc158c58c8885541b93abe6.png)

## Panel Membership

From either method (updated datavis editor or legacy editor), you gain access to the *Panel Membership* screen which shows 3 sections on that screen.  At the top centered in bold are the words *Panel Membership* and then the specific panel you accessed membership on in parenthesis.

![](../viewing-health-surveillance-panels-and-membership.assets/984ec4742904d6104b7bd84259db914c.png)

* <strong>Membership Rule section</strong>:  is any {{% system-name %}} automated configuration rule(s) to get employee/patient charts into this panel based on specific criteria determined. Automated {{% system-name %}} panel membership rules make employees/patients members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.
    * Existing automated Membership Rule(s) listed on a panel can be edited or deleted from here if have security permission.  New automated membership rule(s) on a panel can be added from here also using the hyperlinks top right of the screen
* <strong>Individual Include/Exclude section</strong>: lists all current employees/patients that are members of this specific panel and if they are included or excluded at the panel level explicitly.
    * An explicit membership (included or excluded) can be edited or expired from this membership listing on a specific individual. Clicking the Edit/Expire hyperlink in the options column will open up a screen to make any edits, or expire an individual's membership to this panel.
        * <strong>EXPIRE button:</strong> When a chart's membership is marked using the Expire button, at a later time this Panel's membership rule could have the chart re-enter the panel (in the future) if the chart fits its membership rule criteria.  Expire does not explicitly remove the chart from being looked at in its membership rule.
        * <strong>EDIT button:</strong> When a chart's membership is marked using the Edit button, and if the type is changed to <strong>Exclude</strong>, the chart will not ever re-enter the panel automatically via membership in the future.  The chart has explicitly been removed from the panel. Explicit membership removal is "sticky" meaning the membership removal from a panel does not automatically get re-evaluated when the employee changes jobs, work locations, departments, etc. if automated membership rules are in place.

![](../viewing-health-surveillance-panels-and-membership.assets/5de8aba28940b9cc717bea67e6f75c0e.png)

* <strong>Membership Approval section:</strong> at the very bottom is a <em>Membership Approval</em> <em>area</em> and reflects information if this panel's membership has ever been marked as approved or not.

![](../viewing-health-surveillance-panels-and-membership.assets/e4044cc86a8281d693ee3427b7ecccd7.png)

    * You can click the <em>Approve Membership Now</em> button (if you have security permission) and it essentially marks the last time a user (with a date/time stamp) approved & validated this membership screen for the specific selected panel.

![](../viewing-health-surveillance-panels-and-membership.assets/1fa55c1f71260ec533ca43af1666f87e.png)

## Viewing Memberships from within an Employee/Patient Chart

You can view current membership of panels for a specific chart (patient/employee) when working in a chart. Simply find the Health Surveillance chart tab while working in the chart. Go to the *Panel Membership Overview* subtab.

![](../viewing-health-surveillance-panels-and-membership.assets/7fe00f9a258f7858803880d34d343944.png)

### Current Panel Membership

The Panel Membership Overview tab section named **Current Membership** shows a list of all health surveillance panels the employee/patient is currently a member of or have been a member of.  You can hover your mouse over the icon in the panel names to see the description the panel is defined as in the Health Surveillance set up. You can also hover your mouse over the icons next to each panel check-marked for that employee/patient to see the last completed date or decertified information, change reason comments, etc.

![](../viewing-health-surveillance-panels-and-membership.assets/76a2820663fa574eef1198acb85de9e2.png)

#### Add Completion Date button

The Add Completion Date button will allow you to manually key in to change/override a completion date for the panel. It then inserts a completed representative order for that panel with that completion date.

![](../viewing-health-surveillance-panels-and-membership.assets/d533ebdda570fdfdcd56cd2b9c34200a.png)

If there was a pending order to begin with, that doesn't get altered.

![](../viewing-health-surveillance-panels-and-membership.assets/c6a1c96a0cda3b3724c58ec1726b9499.png)

#### Set Due Date button

One can manually change the Next Due Date for the Health Surveillance membership by clicking on the **Set Due Date** button.

![](../viewing-health-surveillance-panels-and-membership.assets/8f6e570dd6dd5f710d2fa1e684597bf7.png)

A pop-up will display where you can manually key in a new **Next Due Date**.

![](../viewing-health-surveillance-panels-and-membership.assets/a878f3c20992690f5258de0f64ad48c2.png)

*Note: clicking the [Calc] button will auto-populate the Next Due Date to be due at the specific frequency date that the Health Surveillance Panel is programmed (system wide) to recur every (ex: annual/yearly) depending on the last date it was completed in the employee's chart. *

Otherwise, you can manually set the Next Due Date here to signify a different due date.

![](../viewing-health-surveillance-panels-and-membership.assets/9b86d197df8edbeae3c86d0f28c7602d.png)

After submitting, the system will display a message that it updated the record and when you look at the Panel Membership Overview screen, you will see the new **Next:** due date is applied.

![](../viewing-health-surveillance-panels-and-membership.assets/51b7079db3263a391f739dc8ca8a37d2.png)

#### Key Guide

There is also a Key guide that helps you manage the panel information. To access this simply click the *Show Key* or *Hide Key* button at the top of this chart tab.

![](../viewing-health-surveillance-panels-and-membership.assets/24a27f5efc0941fa551680ab4fae9ba6.png)

### Panel Membership History

The Panel Membership History section shows the history of current and past panels the employee/patient is/has been a member of.

![](../viewing-health-surveillance-panels-and-membership.assets/0ed29f4a584971afbee42686279c058c.png)

There are several columns of additional information such as:

* <strong>Panel:</strong> This is the name of the specific panel this employee was/is a member of.
* <strong>Start Date:</strong> This is the start date the employee became a member of that specific panel.
* <strong>End Date:</strong> This is the end date the employee was removed from that specific panel.
* <strong>Inc/Exc:</strong> This will signify <em>Inclusion</em> if the employee is currently included in this panel (is a current active member). This will signify <em>Exclusion</em> if the employee is not a member of this specific panel. Exclusion could mean that they are to be a part of the panel, but (for some exclusion programming rules that are in place) the employee doesn't fit the criteria to be a member of the panel. OR could be exclusion if the employee was removed as a member of the panel.
* <strong>Imp/Exp:</strong> This will signify <em>explicit</em> if the membership is explicit. Explicit membership means a user individually (manually) identifies/puts an employee as a member of a panel. <em>Note: The |system| Panel Membership Import Tool (if used) places employee/patient into those panels as an explicit membership also.</em> Explicit membership is "sticky" meaning the membership to a panel does not automatically end when the employee changes jobs, work locations, departments, etc. if automated membership rules are in place. This will signify <em>implicit</em> if the employee/patient membership is created when an automated {{% system-name %}} panel membership rule indicates that an employee should be placed as a member of a panel.
* <strong>User:</strong> The user initials of whom last edited/added/removed membership on the employee to this panel.
* <strong>Reason:</strong> The free text comments that a user types to signify reason for edit/add/removal on the employee to the panel.

### Panel Membership Summary Dashboard Portlet

Within the Summary chart tab dashboard, there is a Panel Membership portlet available when working in an individual chart.  This portlet allows clinicians visibility of any health surveillance panels that a chart is a member of.  The subsequent *Due List* portlet also relates to panel memberships, as it shows the items (tests & procedures) that are pending as ‘due' for the chart, including those items related to their health surveillance panel memberships.

![](../viewing-health-surveillance-panels-and-membership.assets/e75c64c2f0312d5a156b58f290561a38.png)

For more detailed information on the Panel Membership portlet, please refer to the [Panel Membership Portlet guide](panel-membership-portlet.md).

## Learning Management System

To learn more about Viewing Health Surveillance Panels & Membership, follow the link below to the Learning Management System course:

* [Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
