---
id: '1gtz7AgyPA2bPOoQd57LL_BZ80VQjJpGjUHaVLHdxLNE'
title: 'Recommendations'
date: '2025-11-11T14:09:29.812Z'
version: 79
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/injury-care/work-status/'
  - '../injury-care/work-status.md'
source: 'https://drive.google.com/open?id=1gtz7AgyPA2bPOoQd57LL_BZ80VQjJpGjUHaVLHdxLNE'
wikigdrive: 'v2.15.30'
---
Recommendations are written opinion panel action items that are programmed as unique representative events within a health surveillance panel.  Recommendations are the final determination of the overall panel status for the patient/employee. When a health surveillance panel ‘evaluates' to trigger all tests/procedures that need completed for a specific panel, the pending written opinion/recommendation will display as such in the Due List portlet, Due List chart tab, and in the Recommendations section of an encounter.

![](./recommendations.assets/ebac6ba1b3cb14bdaaafe5d1f52c278b.png)

## Recommendations Section

While working in an encounter, you may see the Recommendations section found in the Plan section.  Typically, a recommendation aka: written opinion is done by a provider who can make a determination as to the employee's status and determine whether the employee is fit to perform his/her duties.  In most Health Surveillance panels, the recommendation/written opinion action item is the representative event of the Health Surveillance panel.  A representative event must be on every programmed Health Surveillance panel in Enterprise Health.  A representative event on the panel is a single order (action item) whose completion is used to represent completion of the overall panel.  All panels need a single, unique, representative order (action item) as a component.  Health Surveillance panels need to use a written opinion order as its representative event.

The recommendations section displays only RE order types (recommendation/written opinion) action item associated with the employee's panel (its representative event).  Note: RE order types (recommendations) are not able to be added or applied in the encounter tests/procedures encounter section.  Only RE order types (recommendations) can be added or applied in the Recommendations section of an encounter.

![](./recommendations.assets/3fc365ffa8778416b0cd985f812842e2.png)

Note: When data is keyed into the recommendation/written opinion section, it fills in the Work Status report.  Work Status reports are found in an encounter additional view, the Work Status chart tab, patient portlet, portal employee page, and portal supervisor page.  The Work Status is a summary of an employee's status, and can be used by an employer to determine eligibility as to whether the employee is fit to perform his/her duties.

## Applying a Pending Recommendation to be Performed

Recommendation action items triggered from the panel will display in the Recommendations section of the encounter.  These are ‘pending' recommendations.  Just like there are pending due list items related to the health surveillance panel, there can be pending recommendation item(s) related to the panel.

Performing a recommendation (written opinion) and performing a test/procedure from a due list are the same.  On the pending written opinion (recommendation) displayed in the Recommendations encounter section, simply click the lightning bolt icon next to it to ‘add to exam'.

![](./recommendations.assets/db2315b679d182d48c83d856b3d6b565.png)

Another method to apply a pending recommendation to the encounter section is by expanding the Recommendation grey title bar encounter section, checkmarking which recommendation pending item to perform and clicking the *Add to Exam* button on the grid.

![](./recommendations.assets/7ae1ce99051f76e691c84216f35403d9.png)

Using either method, the section will refresh to show you the written opinion (recommendation) section with the specific name of the written opinion that has been added to the exam/encounter. The written opinion (recommendation) applied is now a grey title bar section.

![](./recommendations.assets/7e9f042d1470982512a7ea09b69c9dbd.png)

## Adding a Recommendation to be Performed That is Not Pending Already on Chart's Due List

If there is an additional recommendation (written opinion) you'd like to perform on a patient/employee encounter or need to perform a written opinion/recommendation that isn't already pending on the chart, you can simply use the Quick List method on the right. When the Quick List is expanded to utilize, simply find the written opinion recommendation from the list that you want to add on-demand, and click the lightning bolt on it to ‘add to exam'.

![](./recommendations.assets/d6c4962c7b8101a2d785f36b59b9ae63.png)

Another way is to expand open the Recommendations encounter section by clicking anywhere in the grey title section bar, then click the Add Recommendations hyperlink found within the expanded Recommendations section.

![](./recommendations.assets/ccc5e3239e0df3409292547e2ae3c185.png)

This displays an order picklist titled Recommendations.  The order picklist is programmed in the system and displays selectable recommendation/written opinion order items that are specifically programmed as RE order type.  If the picklist named ‘Recommendations' does not appear, then that picklist has not been programmed into your system.  To select one, simply checkmark the desired recommendation (medical opinion) to apply to the encounter, then click the Add Procedures button on the picklist at the top or bottom of the pop-up screen.

![](./recommendations.assets/a81dad1ef72d02e42f485e6e7f8a8bc9.png)

The screen will refresh to close that pop-up and it will apply the selected recommendation/medical opinion(s) to the encounter in the Recommendations section as its own grey titled encounter section.

![](./recommendations.assets/42a84888d127ff71ca0bd314035bd988.png)

## Performing a Recommendation/Written Opinion

Click to expand the written opinion section that was applied. Simply click the grey title bar of the specific named written opinion to perform.

![](./recommendations.assets/7e9f042d1470982512a7ea09b69c9dbd.png)

Upon expanding the specific written opinion title section, you will see a grid named Procedures/Documents to Review.  This lists all panel action items that were triggered to have done in relation to that health surveillance panel that the written opinion/recommendation is a part of.  It is recommended that all the tests & procedures related to a health surveillance panel be performed & results documented in an encounter prior to a recommendation being completed.  The Procedures/Documents to Review grid provides visibility to what tests/procedures are a part of that panel that triggered for the patient, and visibility to other information (ie: their results) to easily be able to render an overall opinion.

![](./recommendations.assets/b23b55c629fdf35c15c510666b976274.png)

## Columns of the Procedures/Documents to Review Grid

Columns of the Procedures/Documents to Review:

**Type:** is the order item type programmed for that specific panel action item (order/test/procedure)

**Order Name:** is each individual panel action item (component aka: test/procedure) that comprise (make up) the health surveillance panel to have been completed for that patient/employee

**Instructions:** these are any instructions on an individual panel action item (test/procedure) that may be identified to follow (ex: specific lab test that needs done for a panel may indicate what color of tube to use and what time of day to draw it or a specific policy per agency for a certain action item within their panels).

**Status:** the current status of the specific panel action item (test/procedure)

**On:** date of when the specific panel action item (test/procedure) received its current status

**Results:** hyperlinks to stored documents are available to view the results stored in the patient's chart for this specific tests/procedure once completed.  This allows visibility to individual document results of tests/procedures for the panel without having to browse out of the encounter.  Note: There is also a hyperlink Completed Documents accessible from the top left corner of the grid.  When that is clicked, it will open a new window which is scrollable to see all the results on one window/page view instead of individually clicking on these individual documented results on a per action item (test/procedure) level

![](./recommendations.assets/eb37624b8a30be6bb219f134f20b197f.png)

**Criteria:** if a panel action item within a panel is signified as ‘required' for the panel, then there are other procedure inputs that staff would signify such as pass, fail, review or permanent fail. That then is shown in the ‘criteria' column of the procedures/documents to review when performing a determination/opinion.

Following the Procedures/Documents to review grid is the determination/opinion data capture portion.  Written Opinions (recommendations) can utilize a host of different layout options.

This example shows a written opinion layout that displays several discrete data items to capture along with the overall determination of no significant findings, significant findings, or further testing is required:

![](./recommendations.assets/46bd7fcc7c8b22457ab47ffdbaf56f92.png)

This example shows a written opinion layout that displays the overall determination of radio buttons only.

![](./recommendations.assets/664bc343914dc281ba3b4e4b7be7ae25.png)

Typically, written opinion layouts will have an overall determination radio button choices of:

![](./recommendations.assets/6a41542d6a4350d882ce3c8bdf265ac7.png)

It is important to make sure to document the overall determination in a radio button selection displayed.  This is the determination that is also shared on Work Status areas & documents within the patient/employee chart.  See other help documentation titled [Work Status](https://docs.enterprisehealth.com/functions/injury-care/work-status/).

![](./recommendations.assets/111b4009f1298b926774535ffed8d08b.png)

Below the overall determination displays restrictions & accommodations applicable on the patient/employee chart along with several date fields.

**Due Date:** Current due date of this recommendation/written opinion representative event

**Effective date:** When the current status of this recommendation/written opinion went into effect.  Typically the day of the encounter.

**Next Due Date:** When the panel should be completed again.  This due date is normally automatically calculated based on the frequency specified in the programmed health surveillance panel, added to the effective date.

**Reviewed Date:** When review was completed. Typically the day of the encounter.

The system will prefill the date fields based on the above, but a provider can override if deemed necessary.

It is important to select the Provider of who is rendering the opinion/determination/recommendation using the auto-complete found in the Provider field.

## Work Status

Within the expanded Recommendations encounter section, there is a *Generate Work Status Report* option.  The checkbox (whether checked or not by default) is driven by a system setting.  When the Generate Work Status Report is checked, it will create an additional view when the encounter is closed and archived.  It will thus create a separate Work Status document. Note: A Work Status document can always be created via the Work Status Chart Tab instead, but this is ability to do it while working in an encounter and is optional here.

![](./recommendations.assets/b1369da466f63b22c9bc6092a025eed5.png)

For more detailed information, please refer to the [Work Status](../injury-care/work-status.md) guide.

## Encounter View

The encounter view and stored encounter document displays the health surveillance panel recommendations data that was captured.

![](./recommendations.assets/364e7e516b2e7cc120abad802eb33ff4.png)
