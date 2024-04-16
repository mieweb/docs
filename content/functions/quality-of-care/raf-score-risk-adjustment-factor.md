---
id: '1oa6cDVnwyM1DcdhGwQG26CgadBfOnlGn7iMHjG-WY3k'
title: 'RAF Score - Risk Adjustment Factor'
date: '2024-01-25T12:39:08.928Z'
version: 238
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1oa6cDVnwyM1DcdhGwQG26CgadBfOnlGn7iMHjG-WY3k'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## What is a Risk Adjustment Factor?

A risk adjustment factor (RAF) is a calculation of an individual's health status as a number, or risk score, that helps predict costs for healthcare services. Health plans adjust the risk incurred from insuring members with expected higher healthcare costs by insuring members with expected lower healthcare costs.

## How is RAF calculated in the software?

* The RAF is calculated based on only assessed conditions (conditions moved to the Smart Plan or Assessment sections during encounters) in the calendar year for a particular RAF score.
* The RAF calculation includes the following coefficients:
    * Age/sex based on patient information.
    * Assessed conditions grouped into HCC (Hierarchical Condition Category) groups. Multiple conditions within an HCC assessed during the calendar year do not increase the score.
    * Some HCCs are excluded from the RAF score if other HCCs were also assessed in the calendar year. Those will be marked as excluded, and won't be included in the final number.

## Display the RAF Score

By default, RAF scores are turned off on all new system builds. To display RAF scores, set the *My Setting,* **Risk Adjustment Factor** to **_Yes_***.*

![](../raf-score-risk-adjustment-factor.assets/e6f200c6882141590e58a7a297617117.png)

## RAF Score Alert

Patient RAF Scores are automatically calculated by the system and will display in the top right hand corner of the chart tab header. An interpretation flag to the right of the RAF score will indicate *High, Medium* or *Low*. If a chart does not have a RAF score calculated for the current calendar year, the RAF value will display as *Unknown*.

![](../raf-score-risk-adjustment-factor.assets/cf151c72412d07955bb593a89f9e086f.png)

## Viewing RAF Scores for the current calendar year

Hover over the RAF Score value located in the chart header and click to view RAF Score Summary for the patient. When clicked, the RAF Score Summary for the current year will display in a new browser tab.

![](../raf-score-risk-adjustment-factor.assets/edc8f1b74c3769a1db62c854e7613881.png)

## RAF Score Summary

The first line of the RAF Score Summary for the current year will display the total RAF Value and the RAF flag, indicating *High, Medium*, *Low or Unknown.*

Beneath the RAF Score Summary Total, each HCC (Hierarchical Condition Category) group, applicable to the patient, will display.

The last line of the RAF Score Summary will display the age criteria with associated RAF Value for the patient's age.

![](../raf-score-risk-adjustment-factor.assets/6a389fb2789e538443193fac3625cfed.png)

Use the *Toggle Show/Hide icon* or click the *Open All* link to open each HCC line item.

![](../raf-score-risk-adjustment-factor.assets/229f36e5f54da91fc95bf11a6e6f69de.png)

Beneath each HCC, is a bulleted list of conditions that meet that specific HCC criteria. As mentioned previously, multiple conditions may be assessed during the calendar year and may display under each HCC, however, this does not increase the overall RAF score.

Each bulleted item contains the condition description, ICD10 code and date assessed on the patient chart. The RAF value for each HCC will display to the far right. The system will add all HCC RAF Values to determine the Total RAF Value/Score.

![](../raf-score-risk-adjustment-factor.assets/a2421a0603f4fd36fb7c90dd2174aa5c.png)

## RAF Calculation History

Beneath the RAF Score Summary is the RAF calculation history for the current year. The Date and time the RAF was calculated will display in the left hand column and total RAF Value calculated on that date will display in the column to the right.

![](../raf-score-risk-adjustment-factor.assets/481d1ebc1c9a92d025771d46ae416b38.png)

## Conditions Chart Tab

The Conditions chart tab will display individual conditions and their RAF values. These display in the Problem List, Past Medical History, and Other Problems sections of the Conditions chart tab.

![](../raf-score-risk-adjustment-factor.assets/5570c12a3926241d91e8e6ba7a76c8cb.png)

![](../raf-score-risk-adjustment-factor.assets/a5a30ea9f04b9b5eca92c52a0bf75f69.png)

## Adding Conditions - Chart Tab

Use the Quick Lists to add a condition from previously saved Quick List conditions or search for a new condition using the "+" button.

To the left of each condition found in the autocomplete a green or red bubble will display.

* A green bubble with a number indicates the condition's RAF Value.
* A red bubble with an <em>n/a</em> indicates that the condition does not have a RAF Value.
* A red bubble with an <em>n/a</em> and is italicized indicates that the condition is not billable. Providers are encouraged to select a more specific condition/ICD10 code.

![](../raf-score-risk-adjustment-factor.assets/44c2eec86d6435935f03b385fcb738dc.png)

## Encounter Visits

### Smart Plan

For clients using the Smart Plan, use the Quick List to add an Assessment condition for today's visit or use the "+" button to add a new condition. The condition description, ICD10 and RAF Value will display on the left side of the Smart Plan.

![](../raf-score-risk-adjustment-factor.assets/df5456528fd567e6a73f1fb1bd07ae56.png)

### Past Medical History

Use the Past Medical History Quick List to add PMH conditions or add a new PMH condition. The PMH condition description will display on the left side of the chart, followed by the RAF Value for that condition. Any conditions without a RAF value will display as *n/a.*

![](../raf-score-risk-adjustment-factor.assets/3edfdbf630c2097387f9d61be6613846.png)

### Symptoms/Diagnosis

For clients that may not use the Smart Plan, use the Quick List to add conditions to the Assessment section. When a condition is added to the Assessment, the condition name, ICD10 code and RAF Value will display on the right side of the encounter section.

![](../raf-score-risk-adjustment-factor.assets/8e2cb78633df561f3562874085535c7b.png)

### Recalculating/Archive & Close

RAF Scores are only calculated/recalculated when an encounter is Archived & Closed. Note: even if conditions are added via the Conditions chart tab, an encounter must be opened, and then Archived and Closed for the recalculation to occur.

![](../raf-score-risk-adjustment-factor.assets/79df383e7f24cba6ca7119372c4fd0e5.png)

## Quick List RAF Value Alerts

To visualize the status of conditions in Quick Lists that have been evaluated for RAF scoring in the current year, the system setting "Alert if Diagnosis has not been assessed in the past year", must be enabled. By default this is Disabled in all systems.

![](../raf-score-risk-adjustment-factor.assets/d256e10633d365adffcf0fc37c3b3dda.png)

If a condition has not been reviewed in the last year, then either a yellow or red alert icon will display next to the condition.

* ![](../raf-score-risk-adjustment-factor.assets/e18532205abfeb51d53bf7880d2caaf2.png)
    - A red triangle will display if the condition has not been evaluated for the current calendar year, but does have a RAF score previously calculated.

* ![](../raf-score-risk-adjustment-factor.assets/63f9e5c0e5fb3e257127176324afc1d9.png)
     - A yellow triangle will display if the condition has not been evaluated for the current calendar year, but does NOT have a RAF score calculated.
* No warning - the condition has been assessed and has a calculated RAF score for the current calendar year.

![](../raf-score-risk-adjustment-factor.assets/648f00a41d541e410bf89ba45a8ae4ed.png)

## Risk Adjustment Factor Report

The Risk Adjustment Factor Report is located in the Reports module. Navigate to Reports->Quality of Care->Risk Adjustment Factor Report. The report will automatically run a report of all patients in the MIE and MR partitions and their calculated RAF Scores. If the RAF Score is blank, then a RAF score has not been calculated for that patient.

The system report that defines the partitions can be modified by clicking the *Edit* link located in the upper right hand corner of the report. Those with security access to modify system reports may update this system report to define which partitions should be included in the search criteria.

![](../raf-score-risk-adjustment-factor.assets/6302eacefd72b4861ce8f00184dd2875.png)
