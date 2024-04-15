---
id: '1IPkv7nQyNjg2KisIdIAJUuoJfUF6Le7iK5-HHq6ssik'
title: 'Introduction to Health Surveillance Panels'
date: '2020-03-13T15:08:54.014Z'
version: 45
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1IPkv7nQyNjg2KisIdIAJUuoJfUF6Le7iK5-HHq6ssik'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance)

![](../introduction-to-health-surveillance-panels.assets/8559017c3985006ba5394aa58ece891b.png)

## Security & Settings

Review Security Settings for users who need access to Health Surveillance (and Case Management). Review Settings and give rights as needed by client.  This information is also available within the online help.

![](../introduction-to-health-surveillance-panels.assets/2522bf10e1e37270f5c52a6343c771ec.png)

## Health Surveillance Panels

‘Order' matters when configuring health surveillance panels for clients in {{% system-name %}} .  This document briefly describes the steps in that order. It matters what is done first before other portions when configuring Health Surveillance panels and all the functionality.

### Configure Health Surveillance Panels

**Step 1 - Identify Matrix/Panels & Contents Needed**

* Identify what panels are needed (may be one-off's may be surveillance/tracked ones, etc) A panel defines a group of events or actions that will take place on certain profiles of people on a regular schedule in the Health Surveillance module. Panels are sometimes referred to as exposure groups, as panels are used for groups exposed to certain hazards due to their job roles. The Health Surveillance module is also used to document regularly scheduled voluntary health screenings or checkups using panels. A panel action refers to a procedure that is completed for an employee as part of a panel. MIE Implementer has a matrix that can be used with gathering panel criteria.

**Step 2 - Appointment Types for Panels**

* Add the appointment type in the system that is to be associated to each of the Health Surveillance panels.

**Step 3 - Order Items for Panel Contents**

* Search existing panel order items in Orders-List Editor then add panel order items if necessary in the Orders-List Editor. Every panel action item (that you will be inserting later in next steps) must have a corresponding order in {{% system-name %}} .

**Step 4 - Panels**

* Add the specific Health Surveillance Panels. Control->Health Surveillance tab – Add Panel

**Step 5 - Panel Actions/Action Items/Action Rules**

* Add Actions. "Panel Actions" are a list of all required tests for each panel. This is to add the components (actions) of each panel.  Adding actions to a panel tells {{% system-name %}} what tests are required for each panel (based on the details) and when the Employee/Employer should be notified that it is time to schedule or have the tests.

**Step 6 - Completed Orders Import Tool**

* If you have panels with action items set to trigger on <em>prior action (completed)</em> then it's important to have specific order items in the employee's history to have the ‘last completed' date so the system knows when the last specific order item was marked complete in order to trigger other action items dependent on it.   The <em>last completed date</em> is imported during the migration process to ensure that surveillance actions trigger with the appropriate due date.  This is needed for manual and/or {{% system-name %}} automated panel membership needs before the HR feed is turned on and before panel membership automation (if there is any) gets turned on and processes via the cronjob/scheduled job.

**Step 7 - Panel Memberships**

* Determine how employees will become "members" of a panel(s). Control tab→Health Surveillance tab. Find the specific panel and click Membership hyperlink from the main panel listing.  Out of the box the panel memberships will be manually maintained by staff unless there are panel membership rules programmed via the 4 fields based on: location, building, cost center, or job class.
    * <strong>Automated Implicit Memberships</strong>
        * {{% system-name %}} can automatically put charts into and out of panel memberships (as implicit members) depending on fields such as Location, Building, Cost Center or Job Class. Additional automated membership programming clauses can be programmed by MIE and customized. A couple system settings are important to have set up for automated panel memberships.
    * <strong>Panel Membership Import Tool</strong>
        * If you utilize the Panel Membership Import Tool in {{% system-name %}} , every membership gets inserted as "explicit" using this tool. It's essentially the same as manual membership add, just doing it in mass via the import tool template. Use this import tool cautiously.
    * <strong>Add Memberships Individually and Manually</strong>
        * You can add individual employee's to specific memberships if needed.  Again, this puts them in as "explicit" memberships into the panel(s).
    * <strong>Viewing Current Members of Panels</strong>
        * You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel.

**Step 8 - Scheduled Jobs: Panel Evaluator and Membership**

* When ready for go-live, determine when these will be set up in the cut-over plan.

**Step 9 - Email Notifications Driven by Cron Job/Scheduled Job**

* Set up any email notifications and scheduled jobs. Also set up the scheduled jobs for panel evaluation and membership evaluation if automation will be needed by {{% system-name %}} . When ready for go-live, determine when these will be enabled in the cut-over plan.

**Step 10 - Panel Action Evaluator**

* There is a <em>Panel Action Evaluator</em> hyperlink found in the Health Surveillance tab in Control.  Using the <em>Panel Action Evaluator</em> is a manual way to run the evaluator for the panels and test them before going "live" or after go-live.  If run (by clicking evaluate) then it runs and evaluates the panel(s) selected on all members (or individual employee selected) and will trigger any action items applicable. So, make sure to do on test patients if before go-live. Most clients have panel evaluator enabled as a nightly cron job/scheduled job, but this manual method is also available for real-time use or for testing purposes, but it does evaluate and will trigger any action items (if applicable) on the chart(s) being evaluated.
