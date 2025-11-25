---
id: '1cty4Ad6aB1dD-jT6ToDSxPtwxwM6LZt8PizcAGtrWXQ'
title: 'Symptoms/Diagnosis Encounter Section'
date: '2025-11-25T18:24:23.355Z'
version: 230
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/rapid-deployment/review-sessions/review-session-order-and-result-management/'
  - 'https://docs.enterprisehealth.com/functions/encounters/goals/'
  - 'https://docs.enterprisehealth.com/functions/task-management/task-list/'
source: 'https://drive.google.com/open?id=1cty4Ad6aB1dD-jT6ToDSxPtwxwM6LZt8PizcAGtrWXQ'
wikigdrive: 'v2.15.30'
markup: 'pandoc'
---
The Symptoms/Diagnosis is an optional encounter section that is displayed in the Assessment grouping of the Visit Encounter. The Symptoms/Diagnosis section is similar to the Smart Plan encounter section, however, Smart Plan is located at the top of the encounter and it is intended to be a combination of both the Assessment and Plan sections.

![](./symptoms-diagnosis-encounter-section.assets/be3e2b2387a46b241afc64fba503aa52.png)

Providers will use the Quick List (right side of the blue vertical bar) to populate the Symptoms/Diagnosis section with conditions and orders for today's visit (left side of the blue vertical bar). Providers can leverage a combination of features, such as pre-configured libraries, pre-populated data based on existing data in the patient chart and/or database, organize conditions, as well as quickly order and perform tests, add procedures, and manage medications from the Symptoms/Diagnosis.

## Navigating the Symptoms/Diagnosis Quick Lists

![](./symptoms-diagnosis-encounter-section.assets/617f7e893b68dce778d593392f7c8c31.png)

a.  Set Library for entire encounter
b.  Hide/Show Quick Links for this encounter section
c.  Set Library for this encounter section only

## Quick List

### Search

Begin to type the condition in the Search field. This is NOT an autocomplete. However, if you begin to type a condition in the search and click the "+" icon next to the Search field

![](./symptoms-diagnosis-encounter-section.assets/713f8f507961f6f03dc1bcb2e235c23d.png)

The **Add Assessment** pop-up window will appear and locate possible conditions that match what you typed in the Condition Name search field.

![](./symptoms-diagnosis-encounter-section.assets/60dcf555bb8144e4c27e07ee0c2afcea.png)

Or simply click the "+" icon and begin typing the condition in the Add Assessment "name" field. Click the "double arrow up or down" icons to open/close all Quick List items in the Symptoms/Diagnosis all at once.

The Add Assessment screen allows users to add assessments to Libraries.

## Problem List Quick List

See [My Settings](#my-settings) section of this document for related user preferences.

The Problem list should indicate problems being assessed at today's visit. Select the "Yes" radio button in the Add Assessment screen to populate the Problem List Quick List in today's encounter (right side of the blue bar).  This will also add the condition to today's Symptoms/Diagnosis (left side of the blue bar). Items populated in the Past Medical History section of the encounter or Quick List do not automatically populate the Problem List Quick List of the Symptoms/Diagnosis.

![](./symptoms-diagnosis-encounter-section.assets/524973e5b1e3b0ac8bb009e86a029c19.png)

Once the condition has been added to the Problem List Quick List, hover over the condition to see additional options.

![](./symptoms-diagnosis-encounter-section.assets/b96518714746eeb4b9a0a1a72e97aa28.png)

Hover over the condition name in the Problem List and Patient Past Medical history Quick Lists to see any previously entered "Plan/Assessment notes". The system displays 100 characters from the prior dated Condition Plan/Assessment note when hovering over the condition. The system can also display a "comment" as added directly on the condition, utilizing the add/edit condition. In this event, the comment is not dated.

The options are:

### Edit

This will call the Edit Condition screen. This allows the user to edit the condition description and/or attributes of the condition.

![](./symptoms-diagnosis-encounter-section.assets/84d0f5940ee0672d15d35b01e8f2d49a.png)

If a condition is marked as "Yes" to Problem List and "Yes" to Past Medical History, the condition will display in the Problem List Quick List only. Conditions with a Clinic Status of Inactive, Remission or Resolved condition, and/or and Verification Status of Unconfirmed will continue to display on the Problem List Quick List. However, the system will indicate in lighter gray to the right of the condition name that the condition is Inactive, Remission, Resolved or Unconfirmed. Comments added on this screen will display as an undated note in the current and future Symptoms/Diagnosis Quick List. To view, hover over the condition name on the Symptoms/Diagnosis Condition Quick List.

![](./symptoms-diagnosis-encounter-section.assets/2940c902a1e8bd5d68a790e7dfb75ec2.png)

Any condition updated in the Problem List Quick List with a Clinical Status of Refuted will be moved to the Declined Conditions Quick List.

### Remove

This will call the Remove Condition screen. This screen allows users to remove/resolve the condition from the Problem List and Past Medical History Quick Lists. This may be because the condition was concluded or it was an error and shouldn't have been in the medical history at all. Comments added on this screen will display as an undated note in the current and future Symptoms/Diagnosis Quick List. To view, hover over the condition name on the Symptoms/Diagnosis Condition Quick List. Users can also view historical revisions for this condition, notes, tasks and links from the pop-up window.

![](./symptoms-diagnosis-encounter-section.assets/6ec7e5524c101da616fc2871fc187760.png)

### Move to PMH

If the condition was previously set to Problem List, "Yes" and Past Medical History,  "Yes", then when the ‘Move to PMH' button is selected, the condition will move from Problem List Quick List to the Past Medical History Quick List.

![](./symptoms-diagnosis-encounter-section.assets/5d1bd4efa19ba42b3d74049113ef5f77.png)

![](./symptoms-diagnosis-encounter-section.assets/ccab6a5b3f181a4c5f54eb6dd1f62ccc.png)

If the condition was previously set to Problem List, "Yes" and Past Medical History, "No", then when the ‘Move to PMH button' is selected, the condition will move to the Other Problems Quick List.

![](./symptoms-diagnosis-encounter-section.assets/913a6b9cc7da7f1e6c05b7ec89a637d4.png)

![](./symptoms-diagnosis-encounter-section.assets/ea71e795854255eb57389bd3b8a9ff73.png)

### Add to Assessment

Clicking this icon, this will add the condition to the Symptoms/Diagnosis Assessment for today's visit.

![](./symptoms-diagnosis-encounter-section.assets/5b519efab71f3c16ac23d0e5f2bbfa29.png)

## Employee/Patient Past Medical History Quick List

This list will display as Employee Past Medical History in Enterprise Health databases and Patient Past Medical History in Webchart databases. Existing conditions in the Past Medical History encounter section and the Conditions chart tab will pre-populate the Past Medical History Quick List. Hover over the condition name in the Problem List and Patient Past Medical history Quick Lists to see any previously entered "Plan/Assessment notes". The system displays 100 characters from the prior dated Condition Plan/Assessment note when hovering over the condition. The system can also display a "comment" as added directly on the condition, utilizing the add/edit condition. In this event, the comment is not dated. When adding/editing a condition via the Quick List, if a condition is marked as "Yes" to the Problem List, and "Yes" to the Past Medical History, the condition will display in the Problem List Quick List only.

![](./symptoms-diagnosis-encounter-section.assets/5f4f378956935653c77cab65bc95797c.png)

![](./symptoms-diagnosis-encounter-section.assets/ee6d802873a0a68b5d555ce78a0a4028.png)

When adding/editing a condition via the Quick List, if a condition is marked as "No" to the Problem List, and "Yes" to the Past Medical History, the condition will display in the Past Medical History Quick List only.

![](./symptoms-diagnosis-encounter-section.assets/04e5fadc9ac897006cb9d7b647281e55.png)

![](./symptoms-diagnosis-encounter-section.assets/ee6d802873a0a68b5d555ce78a0a4028.png)

Selecting "Yes" to Past Medical History will also display the condition to the chart/encounter Past Medical History section, and to the Past Medical History Quick List for today and all future encounters created. Once the condition has been added to the Past Medical History Quick List, hover over the condition to see additional options.

![](./symptoms-diagnosis-encounter-section.assets/5eee151f98faf8adf2620a74de69ec6f.png)

The options are:

### Edit

This will call the Edit Condition screen. This allows the user to edit the condition description and/or attributes of the condition. If a condition is marked as "Yes" to Problem List and "Yes" to Past Medical History, the condition will display in the Problem List Quick List only. Conditions with a Clinic Status of Inactive, Remission or Resolved, will continue to display in the Past Medical History Quick List. However, the system will indicate in lighter gray to the right of the condition name that the condition is Inactive, Remission, Resolved. Any condition updated in the Past Medical History Quick List to an Unconfirmed Verification status, will move from the Past Medical History Quick List to the Unconfirmed Conditions Quick List. Unconfirmed conditions will not display in the Past Medical History Quick List. Any condition updated in the Past Medical History Quick List with a Clinical Status of Refuted will be moved to the Declined Conditions Quick List.

### Remove

This will call the Remove Condition screen. This allows users to remove/resolve the condition from the Problem List and Past Medical History Quick Lists.

### Move to Problem List

When selected, the condition on the Past Medical History Quick List will move to the Problem List Quick List.

### Add to Assessment

When selected, this will add the condition to the Symptoms/Diagnosis for today's visit.

## Other Problems Quick List

These are conditions that were added and not indicated to be on the Problem List or the Past Medical History Quick Lists. These might include quality care or administrative codes.

![](./symptoms-diagnosis-encounter-section.assets/f3cc16bda9049b4ef1c3454e74120df7.png)

These conditions will NOT display in the Past Medical History Section of the Encounter. These conditions will display on the "Other Problems" section of the Conditions chart tab. Conditions in this list have additional options to Edit, Remove or Add to Assessment, similar as to what has been illustrated in the above screenshots.

![](./symptoms-diagnosis-encounter-section.assets/3d768ba3eec9bfb27c682ea7d369b3ac.png)

## Unconfirmed Conditions Quick List

Conditions listed with an Unconfirmed Verification Status will populate this Quick List. Once the condition has been added to the Unconfirmed Conditions Quick List, hover over the condition to see additional options.

![](./symptoms-diagnosis-encounter-section.assets/fc31928e2e8aa11e2072e9b665b393b4.png)

The options are:

### Approve

Clicking the approved Icon will change the Condition Verification Status to Confirmed and move the condition from the Unconfirmed Quick List to the Problem List, Past Medical History or Other Problems Quick Lists, depending on your Problem List and Past Medical History radio button selection upon original entry of the condition.

![](./symptoms-diagnosis-encounter-section.assets/8d58b542e1fbca438bf871cad852db32.png)

Confirmed conditions are also automatically added to the Symptoms/Diagnosis.

### Decline

Clicking the Decline icon will call the Decline Condition screen. The condition's Verification Status will update to Refuted. Users are required to enter a Reason for declining, then click the Decline button to save the declination. Upon declining a condition, the condition will display in the Declined Conditions Quick List.

![](./symptoms-diagnosis-encounter-section.assets/28d808c019c703cb60ea1ed82f92bb11.png)

### Edit

![](./symptoms-diagnosis-encounter-section.assets/f2e11ca5f52881c61e4526231aabbaf3.png)

This will call the Edit Condition screen. This allows the user to edit the condition description and/or attributes of the condition. Provisional and Differential Verification Status' will also display in the Unconfirmed Conditions Quick List. A Confirmed Verification Status will simply remove the condition from the Unconfirmed Conditions Quick List. The condition will display in the Problem List Quick List, Past Medical History Quick List, or Other Problems Quick List, respectively. Comments added on this screen will display as an undated note in the current and future Symptoms/Diagnosis Quick List. To view, hover over the condition name on the Symptoms/Diagnosis Condition Quick List.

## Declined Conditions Quick List

Conditions listed with a Refuted Verification Status will display in the Declined Conditions Quick List. Comments added on this screen will display as an undated note in the current and future Symptoms/Diagnosis Quick List. To view, hover over the condition name on the Symptoms/Diagnosis Condition Quick List.

![](./symptoms-diagnosis-encounter-section.assets/139b5f8cd0d29dd32e01e9cc6305db4c.png)

## Make New Assessment Quick List

Users may create a Quick List of commonly seen conditions to easily select and add conditions to the Symptoms/Diagnosis for today's visit. 4 sample conditions are configured out of the box. Click the "+" icon to add the conditions to the Symptoms/Diagnosis assessment for today's visit

![](./symptoms-diagnosis-encounter-section.assets/cba87cde77987285feb7b861556174f9.png)

Click the Edit button to call the Edit Condition screen. This allows the user to edit the condition description and/or attributes of the condition.Comments added on this screen will display as an undated note in the current and future Symptoms/Diagnosis Quick List. To view, hover over the condition name on the Symptoms/Diagnosis Condition Quick List.

![](./symptoms-diagnosis-encounter-section.assets/b37c4c899c334e9bdcc10f80e384c3e5.png)

Click the "+" icon next to the Other option to create/add a New Assessment.

![](./symptoms-diagnosis-encounter-section.assets/8522ee9b7d311af587ae88214ca2182e.png)

## Current Meds Quick List

Shows a list of all current medications. These medications also populate the Presenting medications section of the encounter. Click the "+" icon next to the Other option to Prescribe a Medication.

![](./symptoms-diagnosis-encounter-section.assets/c727a28190923f650fd13439c2e32adc.png)

The Prescribe Medication screen allows users to add prescriptions to Libraries.

![](./symptoms-diagnosis-encounter-section.assets/411bc1aab2a519211fde1186ae631166.png)

## Past Meds Quick List

Shows a list of all current and discontinued medications. Click the "+" icon next to the Other option to Prescribe a Medication.

![](./symptoms-diagnosis-encounter-section.assets/7d69b4da923a14b62ada46e952a86d1b.png)

## Meds Quick List

Click the "+" icon next to the Other option to Prescribe a Medication

![](./symptoms-diagnosis-encounter-section.assets/2ee82770370def4dce13fe301927679c.png)

## Due List Quick List

This Quick List displays a list of Pending Due List Order Items. Click the "+" icon next to the Other option to add an order.

![](./symptoms-diagnosis-encounter-section.assets/187f2bb7b9050b581300d164924c22b4.png)

The Add Encounter Order screen allows users to add orders to the due list of the chart.

![](./symptoms-diagnosis-encounter-section.assets/c9b7a0380ddb7a6a6bf10692a2b2cd15.png)

When an order has been added to today's Symptoms/Diagnosis, the order will also display in the Due List Quick List with a blue check next to the order item. Ordered items on today's Symptoms/Diagnosis can only be edited or Deleted from the Due List Quick List. Items on the Due List Quick List, but not added to the Tests & Procedures encounter section or applied as its own test/procedure encounter section if it was inserted as ‘in progress'.

## Tests & Procedures Quick List

This Quick List is used to easily add orders to be performed in the encounter. Click the "+" icon next to the Other option to add an order.

![](./symptoms-diagnosis-encounter-section.assets/b3300449547202e9b0e45c2685bbdc8f.png)

The Add Encounter Order screen will display where you can add a test & procedure to the due list (as pending status) or as an encounter section to perform a test/procedure as in progress, etc.

![](./symptoms-diagnosis-encounter-section.assets/ec003f230fc814e1e86ee48fda877f17.png)

Orders added from the Test & Procedures Quick List will populate an encounter section under the Tests & Procedures to enter results today.

![](./symptoms-diagnosis-encounter-section.assets/e98cc0b3b5666d48bc56cfdff088ca47.png)

## Visit Orders

Click the "+" icon next to the Other option to add an order.

![](./symptoms-diagnosis-encounter-section.assets/bf7039b447ead459c6290a29e30f4eb1.png)

The Visit order list will display a list of the frequency used orders in the system. Hover over the order items to view the Lightning Bolt and "+" icons.

![](./symptoms-diagnosis-encounter-section.assets/d154e01fbe465b4a932c0a87298c669e.png)

Click the Lightning Bolt Icon to Add the order item to the exam. This will add a resulting section in the Objective, under the Tests & Procedures.

![](./symptoms-diagnosis-encounter-section.assets/98ad07f5dbb8f81f0678667e96ec768c.png)

## Quick Visit Orders

This Quick List displays a list of all order items configured in the Quick Visit Order Picklist. (Control->Order-Pick Builder->Quick Visit Orders). See more information in the [Order Picklist online Help Guide](https://docs.enterprisehealth.com/rapid-deployment/review-sessions/review-session-order-and-result-management/#order-picklists). Order items on this list can be quickly added to the encounter to be performed or added to the Due List.

![](./symptoms-diagnosis-encounter-section.assets/5113896fb0abc6dd05b515bab305097d.png)

Users may also Add Membership orders and immediately evaluate the order that will then populate the Due List.

![](./symptoms-diagnosis-encounter-section.assets/53e7206f76f634abdb62e79f9f5e5665.png)

## Recommendations

This Quick List displays a list of all order items in the Recommendations Order Picklist. See more information in the [Order Picklist online Help Guide](https://docs.enterprisehealth.com/rapid-deployment/review-sessions/review-session-order-and-result-management/#order-picklists).

## Goals

Click the "+" icon to Add a goal

![](./symptoms-diagnosis-encounter-section.assets/2282f3ae97d94ea6a80d7c284dfbc6fe.png)

Select a Goal (Observation), Next Date, and Target (Free Text) and save.

![](./symptoms-diagnosis-encounter-section.assets/ce6d643a7bc5f8e15bd510d99194d651.png)

The Add Goal screen allows users to add goals to Libraries. Goals are summarized under a black header labeled "Goals" under today's Symptoms/Diagnosis Assessment. Goals can be Edited, Tasked, Deleted or Moved (re-order goals when multiples are listed) from this section.

![](./symptoms-diagnosis-encounter-section.assets/797d55b10f75fda967e948aa0ca08368.png)

Goals also display in the Goals separate encounter section. For more detailed information, please refer to the [Goals](https://docs.enterprisehealth.com/functions/encounters/goals/) guide.

## RAF Scoring - (risk score)

Systems that wish to utilize RAF Scoring, the system setting for "Alert if Diagnosis has not been assessed in the past year", must be enabled. By default this is Disabled in all systems.

![](./symptoms-diagnosis-encounter-section.assets/6c70016082f2d3b61875a4d31dface6f.png)

If a condition has not been reviewed in the last year, then either a yellow or red alert icon will display next to the condition.

![](./symptoms-diagnosis-encounter-section.assets/e18532205abfeb51d53bf7880d2caaf2.png)
- A red triangle will display if the condition has not been evaluated for the current calendar year, but does have a RAF score previously calculated.

![](./symptoms-diagnosis-encounter-section.assets/63f9e5c0e5fb3e257127176324afc1d9.png)
 - A yellow triangle will display if the condition has not been evaluated for the current calendar year, but does NOT have a RAF score calculated.

No warning - the condition has been assessed and has a calculated RAF score for the current calendar year.

![](./symptoms-diagnosis-encounter-section.assets/506d7fc4982e86325722267f3ee279a5.png)

The RAF Score displays on the Symptoms/Diagnosis assessment.

![](./symptoms-diagnosis-encounter-section.assets/4b35ce335d89a33726b74718cdf5ca97.png)

## Today's Symptoms/Diagnosis Assessment

The first step in using the Symptoms/Diagnosis encounter section is to add a condition to today's visit.

* Click the "+" icon next to any of the conditions in either the Problem List Quick List, Past Medical History Quick List, Other Problems Quick List, Unconfirmed Conditions Quick List, Declined Conditions Quick List or pre-configured New Assessments Quick Lists or search and add a new condition.
* When a condition is added to the Assessment for today's visit, it will display in blue text on the left side of the Symptoms/Diagnosis section.
* Users can also see a checkmark next to the condition name in the Quick List to see that condition has been added to today's assessment.

![](./symptoms-diagnosis-encounter-section.assets/289d081452259310fd6146e3ce0ef713.png)

To the right of each condition in the Symptoms/Diagnosis section, there are 8 options.

![](./symptoms-diagnosis-encounter-section.assets/fa39020f4d8b1db5ef490cefa906f2ce.png)

### Edit

This selection will call the Edit Condition screen. This allows the user to edit the condition description and/or attributes of the condition.

### Remove from Assessment

Selecting this option will remove the condition from today's assessment. The condition will continue to show on the Quick Lists, however the blue/white checkmark in the Quick List will no longer be illuminated.

### Remove

Selecting this option will call the Remove Condition screen. This allows users to remove/resolve the condition from the Problem List and Past Medical History Quick Lists. This may be because the condition was concluded or perhaps previously entered in error.

### Notes

Selecting this option will call the Notes screen. Users may enter a free text note or utilize pre configured macros and submit. Users with the appropriate security setting may also create new macros and/or select an appropriate E&M category for billing purposes. Users may enter multiple notes on a condition. Notes will display under the condition in today's Symptoms/Diagnosis Assessment. Prior Notes are visible to the end user when adding a note for today.

![](./symptoms-diagnosis-encounter-section.assets/21584ca77f08f36929443949221c6dbe.png)

Prior notes do not automatically populate today's Symptoms/Diagnosis, however, users can click the copy note feature to quickly copy prior notes to today's notes.

![](./symptoms-diagnosis-encounter-section.assets/8208885476f9f3b55831777bf502438c.png)

Users may also click directly on a note from today's visit and continue to add more text or edit today's Condition Notes.

![](./symptoms-diagnosis-encounter-section.assets/44cc5de2ba088a7e2b9b36f182331d61.png)

### Add Task

Selecting this option will call the Add Task screen. Since a task is generated from the condition and is not a document, the Regarding field in the task will read "doc ID is zero". A task will be generated and appear on the task list for the appropriate user or department. See our online help for more information on [Tasking](https://docs.enterprisehealth.com/functions/task-management/task-list/).

### Prescribe Med

Selecting this option will call the Prescribe Medication screen. Users with prescription authority and proper security rights, can write a prescription utilizing the left side of the Prescribe Medication Screen. (Left side of the blue bar). To the right of the blue bar, the "By Indication" list will** pre populate a list of medications, if applicable. This list is automatically built by the system based on prescribing frequency for the selected condition in the "Reason for taking" field. Newer databases may not display any data since this list is built based on the clients prescribing frequency. To the right of the blue bar, the "Current Meds"  and "Past Meds" Quick Lists display. Select the "straight right pointing arrow" icon to display drug information.

![](./symptoms-diagnosis-encounter-section.assets/b5ac486ca41887d858067414256fa200.png)

Select the "Edit" icon to call the Change Therapy screen. From this screen, the provider can change, increase, decrease, discontinue, continue or refill a medication.

![](./symptoms-diagnosis-encounter-section.assets/a8899da04cf9009218d380be719dbe35.png)

Select the "bending right arrow" icon to generate the Continue Medication screen. This allows the prescriber to view the medication as it has been previously prescribed and to save to continue the current regimen. Prescribers are not allowed to edit or change therapy from the Continue Medication screen.

![](./symptoms-diagnosis-encounter-section.assets/1b708649a04b66c0dd4593c22d004455.png)

Select the "circle with line through it" icon to display the Discontinue Medication screen. Prescribers are not allowed to edit or change therapy from the Discontinue Medication screen.

![](./symptoms-diagnosis-encounter-section.assets/2fd2989148e376d8a6ae43ca0522c45a.png)

Click the "+" icon or use the medication autocomplete to search and prescribe a new medication, not listed in any of the Medication Quick Lists.

![](./symptoms-diagnosis-encounter-section.assets/9ca947fd1923d6de39e7e9c021b1d424.png)

### Add Order

Selecting this option will call the Add Encounter Order screen. Use the order autocomplete to search any order in the database or, choose the picklist icon to select orders from a preconfigured picklist of order items.

![](./symptoms-diagnosis-encounter-section.assets/6e0a8335dede52a476d03684cd233a74.png)

![](./symptoms-diagnosis-encounter-section.assets/aee30485f700c7352d7c9d8afbd40b17.png)

To the right of the blue bar and in the upper right hand corner of the Add Encounter Order screen, users may also select from a pre-populated list of tests. The "By Reason" Quick List is automatically built by the system based on the most frequently ordered tests for the specified condition. Users may also select existing orders on the Due List Quick List and add them to today's visit. Click on the "+" icon to the right of the test to add it to today's visit. The bottom half of the Add Encounter Order screen allows for the user to change or update the condition for which the orders are being generated.

![](./symptoms-diagnosis-encounter-section.assets/caf0c58fa3a38398bc493f8b21b419dc.png)

### Move

Users can ‘drag and drop' the Move icon to reorder conditions as they display in order in today's Symptoms/Diagnosis Assessment.

![](./symptoms-diagnosis-encounter-section.assets/11eac43e5f49d58de70d2e689694cbc0.png)

### Archive & Close Encounters

The Assessment of Symptoms/Diagnosis section will display on the encounter view & stored encounter document once archived & closed.

![](./symptoms-diagnosis-encounter-section.assets/4bd720550e930babfad6de6850a302fe.png)

## My Settings Preferences

Problem List Default on New: Default is "No".

![](./symptoms-diagnosis-encounter-section.assets/087bbad40927988c737a37d809ceac6b.png)

When set to No, the Problem list and Past Medical History radio button will default to "No" upon adding an assessment.

When set to Yes, the Problem list and Past Medical History radio button will default to "Yes" upon adding an assessment.

![](./symptoms-diagnosis-encounter-section.assets/41d421049046380b59984f6aab9ba2fb.png)

When set to Yes, but the Problem list and/or the Past Medical History radio button is set to "No" and you click one to be "Yes", then BOTH radio button options will change to yes.

Show Dynamic List Options: Default is set to "On hover"

![](./symptoms-diagnosis-encounter-section.assets/8c01f50f5e34eb17ae1e017ad21a2689.png)

If this setting is changed to "Always", then all options in the encounter and/or other areas where icons are dynamic will display. This is typically discouraged and clients should be encouraged to use the hover.
