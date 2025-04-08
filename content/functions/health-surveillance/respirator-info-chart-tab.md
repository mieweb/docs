---
id: '1hC2eNGlT7-hlJL8e0UtDCtFdjzHuswjFqxryMOzc8zU'
title: 'Respirator Info Chart Tab'
date: '2024-11-13T16:21:01.795Z'
version: 170
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'mass-manual-entry-of-respirator-fit-data.md'
  - 'https://mie.talentlms.com/shared/start/key:ZOGDNHRK'
source: 'https://drive.google.com/open?id=1hC2eNGlT7-hlJL8e0UtDCtFdjzHuswjFqxryMOzc8zU'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
The stand-alone Respirator Info is a chart tab found in the employee's chart within the Health Surveillance chart tab and is also summarized in a Fit Test Data portlet within the Summary dashboard.  The stand-alone Respirator Info chart tab lists only the specific respirator panel memberships the employee belongs to as well as historical respirator fit testing discrete date.  This chart tab can also be used to manually add respirator fit test data outside of an encounter.

![](../respirator-info-chart-tab.assets/1e591704af387e8a1579ddd130ce9461.png)

## Fit Test Results portlet

The Fit Test Results portlet (found in the chart's Summary dashboard) also lists prior Fit Test data entries. The pencil (edit) icon of the portlet will also take you right to the stand-alone Respirator Info chart tab.

## ![](../respirator-info-chart-tab.assets/f69d15cc411b8225c3c72dcfc3e48c00.png)

## Respirator Info chart tab sections

### Respiratory Panel Membership section

This first section **Respirator Panel Membership** shows health surveillance panels that are strictly related to respirator panels only and doesn't show any other system health surveillance panels.  If any Respirator Panel Memberships are check-marked, that means the employee is a current member of that specific respirator health surveillance panel.

![](../respirator-info-chart-tab.assets/2de94ec4ce05f9d260908c4bef957f97.png)

The *View Key* guide helps you manage the panel information displayed.

![](../respirator-info-chart-tab.assets/0a5f07bc26406640993216f26b9a1011.png)

You cannot add or remove someone manually from a respirator panel type membership on this chart tab.  You would need to go to the Panel Membership Overview chart tab to manage memberships to health surveillance panels manually.

### Respirator Fit section

This second section shows (on the left side) any prior captured historical respirator fit testing data. This is a flowsheet of the respirator fit testing the employee has had done. It shows the history of previous respirator fits the employee has had in a flowsheet form.

![](../respirator-info-chart-tab.assets/55f00290f532c2987e6ebd57b039ee3e.png)

#### Delete an existing historical respirator fit

You can delete any prior respirator fit entries using the trash can (delete) image icon next to any entry.

![](../respirator-info-chart-tab.assets/eeef9814f7169399b77d693eab2b655a.png)

It will ask you to confirm you wish to delete the fit test record.

![](../respirator-info-chart-tab.assets/08c7740e60b9e27f2bd406b355f7002c.png)

If you confirm to delete, it will delete that respirator fit data and will not be able to un-delete it.  **Note:** deleting a respirator fit data entry also deleted the stored document related to the entry beginning in *09-2024RC*.

If you get an MIEAPI error when deleting a record, your security role does not have permission to ‘delete' respiratordetails via the JSON security for the role you are a part of.

![](../respirator-info-chart-tab.assets/af32900e6b9ec3a84839d67080de8386.png)

Contact our helpdesk so they can confirm that security role is to have delete permissions for respirator fit data, and they can update the JSON security for the role(s) needed.

![](../respirator-info-chart-tab.assets/ae718858002c3445d1901f5708cd9547.png)

#### Edit an existing historical respirator fit

You can edit any prior respirator fit entries using the pencil (edit) image icon next to any entry.
![](../respirator-info-chart-tab.assets/bb08558aedcd18b9b20f00dfc6be2d02.png)

Editing a respirator fit data record will pop-up the Edit Respirator Fit window.  The existing data will be populated, but you can change what is needed and save your work.
![](../respirator-info-chart-tab.assets/823850716644249bcf7ace8b22fd1853.png)

Any historical revision history will also display at the bottom of the Edit pop-up window

![](../respirator-info-chart-tab.assets/2a55b09f4abd106b435b6baea18d6946.png)

**Note:** Editing a respirator fit data entry also edit and place a revision on the stored document related to the entry.

![](../respirator-info-chart-tab.assets/9aa1c3365717a3e7084c2980b9e06b08.png)

The related stored document to the respirator fit data record can also be accessed using the northeast arrow icon on the data line (effective 09-2024RC).

![](../respirator-info-chart-tab.assets/08cdde85151248b8d6bead84854e4170.png)

#### Add respirator fit data entry

Any prior fit tests on record, will display on the left side of the applied Respirator Fit encounter section.  To key in a new respirator fit test data results, click the **+** plus icon at the right of this section

![](../respirator-info-chart-tab.assets/b5ed45b8ddf514320a4b5033232f9b03.png)

Proceed to use the pop-up data entry fields to document the fit test

![](../respirator-info-chart-tab.assets/03776996d2d81acd61294e98560c5eda.png)

**Mask (this is a required field)**: This is an auto-complete list of choices in your system that is maintained in our auto-complete editor. You can also free text here via the auto-complete field, but if you want reporting to be consistent, please give your pre-defined mask choices to your MIE Implementer for insertion into this auto-complete choice to pop up by default for your users to select. Simply begin to type in the name of the mask type manufacturer and it will attempt to auto-complete your typing and give you valid choices. You can also hit your ↓ down arrow key on your keyboard to open up the list of choices to select from in this field. When done, use your tab key to advance to the next field.

**NOTE:** your system can be programmed to offer a drop-down of mask choices instead of an auto-complete/free text method. Contact our helpdesk or Deployment Consultant for that configuration change.

**Size (this is a required field):** Choose the size of the mask using the drop-down of choices. The ‘Universal' selection means one size fits all.

**Type:** Qualitative or Quantitative if wish to collect that

**Last Fit Test:** Enter in the date of this fit test (typically is today's date as it automatically prefills)

**Last Fit Expires:** will automatically calculate to be 1 year from today's date, but you can change

**Pass/Fail (this is a required field):** Enter in if the employee passed or failed this fit testing

**Final Fit Factor:** Key in if wish to collect that

**Comments:** Add any free-text comments needed

When done with that entry, click the SAVE button. You can add another fit test entry if you wish by repeating the above steps (clicking the **+** icon in the section).

**NOTE:** once you save/add a respirator fit data record to the chart, a separate document will also be stored and a completed Resp Fit Test order item will be inserted into the chart's due list (effective 09-2024RC).  If the chart had a pending Resp Fit Test due on their due list, the system would mark/insert that one as completed.

The related stored document to the respirator fit data record can also be accessed using the northeast arrow icon on the data line (effective 09-2024RC).

![](../respirator-info-chart-tab.assets/08cdde85151248b8d6bead84854e4170.png)

#### Revision history of existing historical respirator fit

Revision history of any prior respirator fit entries can be viewed by using the pencil (edit) image icon next to any entry.  Click on the pencil/edit icon.
![](../respirator-info-chart-tab.assets/bb08558aedcd18b9b20f00dfc6be2d02.png)

Within the Edit Respirator Fit pop-up window, at the bottom is any Revision History information.  If you don't see the revision history, simply click the dark gray REVISIONS button to expand it open in the pop-up window.  You can X close out of the pop-up without editing any data.

![](../respirator-info-chart-tab.assets/1b7c4c6e39bbb6dd1823901634a205fb.png)

## Mass Manual Entry of Respirator Fit Data

There is a separate help guide on the ability to manually enter respirator fit data in mass to individual charts using the Resp Fit Program mass data entry screen found in E-Chart.  Please see separate guide titled: [Mass Manual Entry of Respirator Fit Data](mass-manual-entry-of-respirator-fit-data.md) and also a separate chapter on the below LMS (Learning Management System) course.

## Learning Management System

To learn more about the Respirator Info Chart Tab with manual entry method, Mass Manual Entry of Respirator Fit Data, any standard reporting around Respirator Fit test data, and how to enter in Respirator Fit test data using an encounter due list item, or how to import respirator fit test data, follow the link below to the Learning Management System course:

* [Respirator Fit Testing](https://mie.talentlms.com/shared/start/key:ZOGDNHRK)
