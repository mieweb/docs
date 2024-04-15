---
id: '1CuNALp11tyFSx3IKXsJNA7IO-lGT-ZA2PQi8AOKKfxM'
title: 'Viewing Health Surveillance Panels & Membership'
date: '2020-02-27T20:00:28.475Z'
version: 40
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1CuNALp11tyFSx3IKXsJNA7IO-lGT-ZA2PQi8AOKKfxM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance)

![](../viewing-health-surveillance-panels-and-membership.assets/8559017c3985006ba5394aa58ece891b.png)

The listing of current Panels will display on the screen under the Panel Search fields.

## Viewing Memberships from Health Surveillance Tab

You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel from the Health Surveillance tab found in Control.

To view existing memberships & membership rules on existing panels go to Control tab→Health Surveillance tab→ Find the specific panel and click Membership hyperlink from the main panel listing.

![](../viewing-health-surveillance-panels-and-membership.assets/152a405ed9a290c61e3e0c92d6b0a89b.png)

OR you can instead get to membership when in the "actions" of any specific panel.

![](../viewing-health-surveillance-panels-and-membership.assets/77a42aa6472c44394ac6ccf2b6b16060.png)

Then click membership hyperlink found at the top of the Panel Actions screen for that specific panel.

![](../viewing-health-surveillance-panels-and-membership.assets/c83548f64fa11f29ef66d91e6a07c099.png)

Either method, you gain access to the *Panel Membership* screen which shows 3 sections on that screen.  At the top you should see (in bold) the words *Panel Membership* and then the specific panel you accessed membership on.

The top section shows *Membership Rule* which is any {{% system-name %}} automated configuration rule(s) to get employees into this panel based on specific criteria determined. Automated {{% system-name %}} panel membership rules makes employees members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.

The next section shows *Individual Include/Exclude* which lists all current employees that are members of this specific panel and if they are included or excluded at the panel level.

At the very bottom you see *Membership Approval* where you can click the *Approve Membership Now* button and it essentially marks the last time a user (with a date/time stamp) that approved & validated this membership screen for the specific panel.

![](../viewing-health-surveillance-panels-and-membership.assets/cd68d728f51233aa305b4aaf45636bd0.png)

![](../viewing-health-surveillance-panels-and-membership.assets/1b37f7cfecb3446d1393db006c5dfc0b.png)

![](../viewing-health-surveillance-panels-and-membership.assets/36e7c80710bf2e27c7c2e3f47c5870bd.png)

You can edit/expire from this membership listing on a specific individual. Clicking the Edit/Expire hyperlink in the options column will open up a screen to make any edits, or expire an individual's membership to this panel.

![](../viewing-health-surveillance-panels-and-membership.assets/8114fb1d16052112a34c523b4bc44c73.png)

## Viewing Memberships from Chart

You can view current membership of panels for a specific chart (patient/employee) when working in the chart. Simply find the Health Surveillance tab while working in the chart. Go to the *Panel Membership Overview* subtab.

![](../viewing-health-surveillance-panels-and-membership.assets/85bd227308c74cc13f998a12e7616ade.png)

The Panel Membership Overview tab section named **Current Membership** shows list of all panels they are currently a member of or have applied to their chart. You can hover your mouse over the icon in the panel names to see the description the panel is defined as in the Health Surveillance set up. You can also hover your mouse over the icons next to each panel check-marked for that employee to see the last completed date or decertified information, change reason comments, etc.

![](../viewing-health-surveillance-panels-and-membership.assets/9810266721eae55384813a5e942e1fc8.png)

* <strong>Add Completion Date:</strong> this button will allow you to manually key in a completion date for the panel. It then inserts a completed representative order for that panel with that completion date.

![](../viewing-health-surveillance-panels-and-membership.assets/56ca0bd126e92b0826af0ab7943280db.png)

If there was a pending order to begin with, that doesn't get altered. This button ‘add completed date' can be hidden if don't wish to utilize.

![](../viewing-health-surveillance-panels-and-membership.assets/2f8bdcad5e282b0f1dc4cd28ccbefb95.png)

There is also a Key guide that helps you manage the panel information. To access this simply click the *Show Key* or *Hide Key* button at the top of this chart tab.

![](../viewing-health-surveillance-panels-and-membership.assets/1661f5f792421cd9e4e916e6fd097d47.png)

The **Panel Membership History** section shows the history of current and past panels the employee/patient is/has been a member of.

![](../viewing-health-surveillance-panels-and-membership.assets/12a92bdfb08337233e38a7276fd79e39.png)

There are several columns of additional information such as:

* <strong>Panel:</strong> This is the name of the specific panel this employee was/is a member of.
* <strong>Start Date:</strong> This is the start date the employee became a member of that specific panel.
* <strong>End Date:</strong> This is the end date the employee was removed from that specific panel.
* <strong>Inc/Exc:</strong> This will signify <em>Inclusion</em> if the employee is currently included in this panel (is a current active member). This will signify <em>Exclusion</em> if the employee is not a member of this specific panel. Exclusion could mean that they are to be a part of the panel, but (for some exclusion programming rules that are in place) the employee doesn't fit the criteria to be a member of the panel. OR could be exclusion if the employee was removed as a member of the panel.
* <strong>Imp/Exp:</strong> This will signify <em>explicit</em> if the membership is explicit. Explicit membership means a user individually (manually) identifies/puts an employee as a member of a panel. <em>Note: The |system| Panel Membership Import Tool (if used) places employee's into those panels as an explicit membership also.</em> Explicit membership is "sticky" meaning the membership to a panel does not automatically end when the employee changes jobs, work locations, departments, etc. if automated membership rules are in place. This will signify <em>implicit</em> if the employee membership is created when an automated {{% system-name %}} panel membership rule indicates that an employee should be placed as a member of a panel.
* <strong>User:</strong> The user initials of whom last edited/added/removed membership on the employee to this panel.
* <strong>Reason:</strong> The free text comments that a user types to signify reason for edit/add/removal on the employee to the panel.
