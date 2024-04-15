---
id: '14u88iIQ9MPABiJ1Yb_8gk0JYuSNf9m1GD0FPs1MQlp0'
title: 'Encounters Labs Results Section'
date: '2020-03-26T17:39:27.991Z'
version: 71
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../order-and-result-management/observations-tab.md'
source: 'https://drive.google.com/open?id=14u88iIQ9MPABiJ1Yb_8gk0JYuSNf9m1GD0FPs1MQlp0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The Labs Results area of the encounter is where you can key in results of labs and will be stored as discrete reportable data. You may utilize this section if a patient hands you some lab results from an outside facility/provider or if you do in-house labs and want to quickly document the results in the patient's chart and track.

![](../encounters-labs-results-section.assets/b730d979b9d5ecd049958269bd554777.png)

By default,  {{% system-name %}} shows these specific lab fields to key in results in the Labs Results section. We hope these are the most common that practices would perhaps want to key results into. However the practice has the ability to alter their Labs Results section because different specialities may have different Labs they want to key in and track. (See steps on subsequent pages on how to edit this section in your encounters).

When working in encounters, this Labs Results section also shows the last most recent 10 of any Lab Results entered in this section. That gives the user the ability to see the flow of results for a specific lab quickly while working in an encounter and not have to go out to the patient's chart to look elsewhere.

![](../encounters-labs-results-section.assets/de948b16bc5de30d9d221411e36158c2.png)

The actual lab result value is a hyperlink and you can click that to get into that specific result to see any specific detailed information (date entered, who entered it, ranges, etc). You can also hover your mouse over the hyperlink value and see any alternate results if applicable for that result entered.

![](../encounters-labs-results-section.assets/7a562a4d92a7c3e78f18fe8818a77cbc.png)

## Add Lab Results

To key in any Lab Result into this section of the encounter, simply click the *NOW* button to set the observed date/time as now, or type in a date and/or time for the result you are keying in. For example, if this were an in-house lab that was just done, you may want to select "Now" button to quickly populate today's date/time that the lab was resulted, then key in the result of the specific lab in the appropriate field. If this were say a paper lab result a patient brought in that they had done 3 months ago, then you would want to put the observation date/time as that 3 month old date and key in the results. When done keying in results, click the ADD button and it will add all lab results entered.

![](../encounters-labs-results-section.assets/5a8aed42ace26d74ec6c7d1aeec6450b.png)

It is important to click the ADD button on each Lab Results section since they are separate.

![](../encounters-labs-results-section.assets/b6818cf423bebcfa508c575a0128a955.png)

Continue working in the encounter.

## Changing Labs Results Section Fields

The Labs Results and the Labs Results (cont'd.) sections point to 2 observation flowsheets that are accessible from the patient's observations/flowsheets separate chart tab also.

Super users can maintain this Labs Results section without help from MIE. Meaning a practice super user can remove "Potassium" field in this Labs Results section of their encounters and instead insert "Creatinine".

Users can make edits to these flowsheets and it will reflect/update in the encounter Labs Results section for all users to utilize.

{{% note %}}
If the name of the actual flowsheets are changed - the encounter will not reflect that and this section of the encounter becomes disabled. If need to rename these flowsheets that the Labs Results sections of the encounter point to (currently named  {{% sys-name %}}  Results Set 1 which is Labs Results section in encounter and  {{% sys-name %}}  Results Set 2 which is Labs Results (cont'd) section in encounter) you will need to contact your MIE Implementer and they will have to have a developer do the name change and reflect that on the encounter layout programming. The encounter "Labs Results and Labs Results (cont'd)" sections are pointed to the flowsheets named  {{% sys-name %}}  Results Set 1 and  {{% sys-name %}}  Results Set 2. If those get renamed, then it will cause your encounter Labs Results section to be disabled.
{{% /note %}}

To edit the Lab names that show in the encounters Labs Results section, go into any patient and go to their Observations/Flowsheets Chart tab.

![](../encounters-labs-results-section.assets/58d6127694947644e551905c0cda7596.png)

If you have security permission to Manage Observation Flowsheets and are trained on this feature, you can edit these observation flowsheets named EH Results Set 1 and EH Results Set 2.

The **Labs Results** section that has FBS, HgbA1C fields, etc is pointing to flowsheet named** Results Set 1**

The **Labs Results (cont'd)** section that has AST, ALT fields etc is pointing to flowsheet named** Results Set 2**

![](../encounters-labs-results-section.assets/5aab51aea0db346d2abc60bf4bdb142a.png)

Go to the **Flowsheet** field found in this observations/flowsheets chart tab module and use the drop-down to select which flowsheet you need to edit.

![](../encounters-labs-results-section.assets/518e9c90d1e64c7d20fdf77e874ff49b.png)

Once you have the specific flowsheet selected from that drop-down, click the *Edit* button. If you do not have security permission, you will **not** see any edit or new buttons next to flowsheet line.

![](../encounters-labs-results-section.assets/76a3f4a477100ea3e1f1dce1dff0ebf9.png)

Once you are in the edit mode, you can remove the fields you don't want shown in the encounters to document and can add lab observations to document instead and be shown on the encounters. Click *Submit* button when done to save your work.

![](../encounters-labs-results-section.assets/604b853ee7621a802857793b80e07a0c.png)

See separate help documentation named [Observations Tab](../order-and-result-management/observations-tab.md), page 11 for more specific detail on how to edit flowsheets and ordering.
