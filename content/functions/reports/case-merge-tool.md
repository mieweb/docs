---
id: '1EXGZK3LY8tfnJ5AiPLCAsGSInA2sqSTESlQECm76pUY'
title: 'Case Merge Tool'
date: '2024-09-06T19:44:37.425Z'
version: 78
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ALTHRKMF'
source: 'https://drive.google.com/open?id=1EXGZK3LY8tfnJ5AiPLCAsGSInA2sqSTESlQECm76pUY'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
The Case Merge Tool is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../case-merge-tool.assets/e4436613833d19fbc14d272be4516beb.png)

## CASE MERGE TOOL

The Case Merge Tool lists any cases/incidents (closed or open) for a chart that have the same Date of Injury or same Onset of Illness case date.  This merge tool allows merging of a duplicate case(s) to a specific one, so there is one source of truth case instead of duplicates.  Any duplicate cases merged, using this tool, will have the source of truth case tied to the encounter and/or document(s) then.

![](../case-merge-tool.assets/454798bb77c08c20fbffc39e99f4db47.png)

### Case Merge Tool Output

The output on the Case Merge Tool will omit charts that are excluded from quality care.  The output on the Case Merge Tool also does not list any deleted cases/incidents.

#### Columns of Output

* <strong>Chart:</strong> is the name of the chart where the system has found more than 1 case/incident (closed or open) that have the same Date of Injury or same Onset of Illness date.  The chart's name listed is also a hyperlink that will advance you directly to that chart (if clicked) to peruse in for triaging/determining if these duplicate cases are indeed duplicate or not.
* <strong>Cases:</strong> are the case numbers in radio button format, for the chart, that are open or closed, where the chart's case/incidents have the same Incident Date (date of injury or onset of illness).  The cases listed here are also a hyperlink that will advance you directly to each case's/incident's Case Report screen (if clicked) to view more detailed information regarding the case in order to help triage/determine if these duplicate cases are indeed duplicate or not.
* <strong>Skip:</strong> N/A radio button is available to signify you do not want to work that line item or want to skip it.  One might also click a radio button by accident in the Cases area, but then find they do not want to merge cases.  So the N/A skip radio button can be used to toggle.
* <strong>Questionnaire Status:</strong> An encounter order status.
* <strong>Incident Status:</strong> 1 signifies the case is open in the chart, 2 signifies the case is closed in the chart respective to the cases listed in the Cases column of the row.
* <strong>Incident Date:</strong> the Date of Injury or Onset of Illness date that the system found more than 1 case/incident for on the chart.
* <strong>Count:</strong> the number of cases, in the chart, that have the same incident date

![](../case-merge-tool.assets/f725c05e32ef149e4aaecbe143e28bfd.png)

### Triage/Determine if Indeed Duplicates

It is recommended to advance into the chart and/or specific cases and view the Case Reports.  This will help you see all the contents, specific data captured on each case, etc, to determine if indeed these are duplicate cases and could be merged or ignored.

The Chart and Cases are hyperlinks to advance you right into the chart or the specific case, in a separate tab, where you can see granular information to make your determination.

![](../case-merge-tool.assets/eaa48ef6c1c6feb67e389b13c970b841.png)

When in the chart, you can advance to the *Cases* stand alone chart tab to see the cases (open or closed) on this person.  The Case Number is also a hyperlink to advance you directly to the Case Report details of that case.

![](../case-merge-tool.assets/4c5af0122df5104648d61fc3df7e0711.png)

### Merging Duplicate Cases

In the Case Merge Tool datavis listing, the checkmark boxes to the left do not do anything.  These are there because that's a core look of datavis grids.

![](../case-merge-tool.assets/0f2b857075372cd861b71e21fa684375.png)

To merge duplicate cases, you must click on the radio button for the Case number you wish to keep as the source of truth for the chart.  Any other cases listed for the chart (in that row) will then be merged and any documents or encounters linked to the other cases, would be then linked to the case of the radio button you signify to keep as the source of truth.

![](../case-merge-tool.assets/3924cc53ae5dcc656c71ba4129dbd4ac.png)

Once you have a radio button selected for the rows you want to work from this tool and have the radio button of the case you wish to be the source of truth for the incident/case date indicated, you then can click the MERGE button.

![](../case-merge-tool.assets/5c81bde33dff85a090d5ec21fa4f53a9.png)

The MERGE button will instantly merge the duplicate cases to be the source of truth case indicated with the radio button.  The screen shows it has merged the rows indicated and lists the unique incident ID numbers that the system houses in the tables.

![](../case-merge-tool.assets/5f9b0fdf29f19f9c1d65dc8baa56009f.png)

The chart's Cases stand-alone chart tab will show only that source of truth case/incident for that specific case date.  Also, any documents or encounters that were linked to the other duplicate cases will now be linked to the source of truth case/incident that was signified in the merge tool.

![](../case-merge-tool.assets/4d678918b7dbe601e0160123b08769f6.png)

The Case Merge Tool report will remove the row of duplicate cases for the chart for that specific incident date since it's now been worked.

![](../case-merge-tool.assets/cc5d4dbde734aebb56f30110beda0334.png)

#### Skip N/A radio button

The N/A button is there to indicate you do not wish to merge any duplicate cases listed for that row.  It will not remove the chart from being listed on the tool again though.  It does not act as a ‘dismiss' button or function.

![](../case-merge-tool.assets/ff4b5b51b58472a75de1cf0b6e3f9688.png)

## Learning Management System

To learn more about the Case Merge Tool, follow the link below to the Learning Management System course:

* [Workers' Compensation Management](https://mie.talentlms.com/shared/start/key:ALTHRKMF)
