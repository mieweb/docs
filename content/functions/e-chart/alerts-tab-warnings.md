---
id: '1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0'
title: 'Alerts Tab - Warnings'
date: '2025-07-11T17:58:13.627Z'
version: 177
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
Warnings & Guideline Alerts for certain criteria as it pertains to a chart are in the product.  However, utilizing Scripted Rules, additional custom warnings & alert criteria can be configured system wide.  Warnings & Alerts are visible in various areas of the chart, but can only be dismissed by users with specific security permission.

### Summary Dashboard Portlet

In the patient's ‘Summary' chart tab is a portlet named *Warnings/Alerts* where you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, guidelines (scripted rules) etc. for the patient. From this portlet, a user (with security permission) can Dismiss any if needed.

![](../alerts-tab-warnings.assets/c63294744854a1d52a1d2bfd7b77d745.png)

### Chart Tab

As a separate chart tab in the patient's chart, is a chart tab named ‘Warnings', you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, contraindications, guideline alerts etc. as it relates to the chart.  From this chart tab, a user (with security permission) can Dismiss any if needed.

![](../alerts-tab-warnings.assets/52311932133a870ea078352d14711751.png)

### Encounter Section

When working in any encounter, there is a *Warnings and Guidelines* encounter section available.  By default, this lists all presenting warnings and guidelines for the specific chart in a summary format. The presenting warnings & guidelines alerts are valid as of today's logged in date.  This section is for visibility purposes to quickly see any warnings or guideline alerts a chart has when working in an encounter exam. Warnings or Guideline alerts cannot be dismissed from the Warnings and Guidelines encounter section.

![](../alerts-tab-warnings.assets/a272a961ba366e85f1e4286a2b92c374.png)

### Encounter View

In the View of the encounter (before or upon Archive & Close), you will see any warnings or guideline alerts as it relates to the chart.  From the encounter view, a user (with security permission) can Dismiss any if needed, or hide the entire section from the view.

![](../alerts-tab-warnings.assets/cda863eb5d3874afe0ee211139455c86.png)

### How Warnings & Alerts Display

Warnings & Guideline alerts automatically sort and default to order by Severity. Guideline alerts are scripted rules that MIE can program for you based on specific things you want to be alerted for on your patients based on different criteria and conditions system wide.

Drug interaction warnings and Allergy warnings will also appear that generate a warning stating contraindications and duplicate therapies, so we encourage entering allergies for charts and current meds the patient is taking, using the coded choices of allergy and medication names.

### First DataBank

{{% system-name %}} currently imports the First DataBank (FDB) updated files on a weekly basis every Saturday morning at 2am. MIE then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on each of the client servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

You can always check when your system was last updated with First Databank by going to any chart and into the Warnings chart tab. Scroll to the bottom of that chart tab page.

![](../alerts-tab-warnings.assets/06d4219626ad8bdd8edf25345e300fd1.png)

That area of the page shows the last time we have updated the Drug database (not the rxdb as a whole, it looks specifically only for updates called ‘FDB Update') on the server box the system is looking at. This mainly gives MIE information to make sure the system is getting the updates we are putting out in our "home" base version. If there is a problem with the home base version for some reason (even if this is up to date), this will have an issue, but MIE would be alerted internally that there is an issue with the mainline not getting updated properly.

### Drug Interactions / Contraindications

Hovering your mouse over the (?) help icon on any Drug Interaction or Contraindication warning & alerts will pop-up more detailed information about that specific warning/alert.

![](../alerts-tab-warnings.assets/c1159510b61f548b3d2baaee1be35dba.png)

### Dismiss Warnings or Guideline Alerts

Being able to dismiss any warnings or guideline alerts is driven by security permission.

![](../alerts-tab-warnings.assets/c74e05759f9cbfc64227bb2091c06777.png)

Dismiss Warnings:  This sets the level of permission for dismissing any warnings in the Meds tab program and other programs where warnings/alerts your system may be set up for.

* No:  will not allow users in the security role to dismiss warnings at any level.
* Yes: will allow users in the security role to dismiss warnings for your viewing only and for that patient only.
* Dismiss for all Patients:  Usually only the Physician has security rights to dismiss at this level. The physician can dismiss the warning for that specific patient only or also has the option to dismiss the specific warning for all patients for the physician's view.   If the physician dismisses a warning for "all patients' they would only have to dismiss once and never see it generated again.  We discourage this because it really defeats the purpose of showing warnings and affects all other patients and the warning won't pop-up again for any patient.
* Dismiss for All Users:  Usually only the Physician has security rights to dismiss at this level.  The physician can dismiss the warning for that specific patient or all patients and dismiss it from view for all users.

Most practices give the nurses/MA's the right to dismiss for ‘this patient' and give the providers/physicians the higher security to dismiss ‘for all patients'.

NOTE: MIE cannot hide or remove the medication or allergy warnings.  To be an e-prescribe system and per the guidelines, etc we are to generate these interactions and warnings.  These warnings are required. The system is telling you a warning, contraindication, interaction or duplicate therapy as it relates to medications, allergies, or conditions noted in the chart.

If a user has security permission to dismiss, simply click the Dismiss hyperlink next to the specific warning or alert.

![](../alerts-tab-warnings.assets/354577a609394a46bee746eb05c9130f.png)

A popup window will appear for the Warning/Guideline alert.  This window shows the warning info, any (?), the warning type, the dismissal options, the field to document reason for dismissing, and ability to set a ‘resume warning' date if applicable (like a snooze).

![](../alerts-tab-warnings.assets/56eba5375322a251e511493d401af880.png)

If a warning or alert is dismissed as "all patients' the user would only have to dismiss once and never see it generated again on charts for their logged in user viewing OR for all users viewing in the system.  We discourage this because it really defeats the purpose of showing warnings and affects all other patient charts and the warning won't pop-up again for any chart.

The *Reason for Dismissing* field should be filled out for why you are dismissing the warning. It will accept free text, but it will also auto-complete and give you choices of previous entries of reasons why warnings were dismissed (it saves previous reasons for dismissing entries if a dismissing reason was typed in twice exactly the same).

Resume Warning: Enter a date you want the Warning to reappear on the patient's chart. This warning will reappear on the day selected/entered. The date is when you want the alert dismissed until.  So the alert will not display again until the date that is entered. Blank means never. Leaving this date blank and submitting the dismissal will mean the warning will never reappear for this patient.

Click the SUBMIT button to save your work.
