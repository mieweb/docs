---
id: '14u88iIQ9MPABiJ1Yb_8gk0JYuSNf9m1GD0FPs1MQlp0'
title: 'Encounters Labs Results Section'
date: '2026-03-27T14:12:21.888Z'
version: 153
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../order-and-result-management/observations-tab.md'
source: 'https://drive.google.com/open?id=14u88iIQ9MPABiJ1Yb_8gk0JYuSNf9m1GD0FPs1MQlp0'
wikigdrive: 'v2.16.0'
---
The Lab Results - Set 1 and Lab Results - Set 2 area of the encounter is where you can key in results of labs and will be stored as discrete reportable data. You may utilize this section if a patient hands you some lab results from an outside facility/provider or if you do in-house labs and want to quickly document the results in the patient's chart and track.

![](./encounters-labs-results-section.assets/a99411442b8c0aed7b887634832fb872.png)

By default,  {{% system-name %}} shows these specific lab fields to key in results in the Lab Results - Set 1 or Lab Results - Set 2 sections. We hope these are the most common lab results that practices would want to key results into. However the practice has the ability to alter their Lab Results sections because different specialties may have different Labs they want to key in and track.

When working in encounters, the Lab Results - Set 1 and Lab Results - Set 2 sections also show the last most recent Lab Results entered in this section. That gives the user the ability to see the flow of results for a specific lab quickly while working in an encounter and not have to go out to the patient's chart to look elsewhere.

![](./encounters-labs-results-section.assets/03eb874e30bf6786577e2e6d4c23db5d.png)

The actual lab result value is a hyperlink and you can click that to get into that specific result to see any specific detailed information (date entered, who entered it, ranges, etc). You can also hover your mouse over the hyperlink value and see any alternate results if applicable for that result entered.

![](./encounters-labs-results-section.assets/ee0119296044853a0bf7cad03f4c1ef3.png)

## Add Lab Results

To key in any Lab Result into this section of the encounter, simply click the gray bar to set the observed date/time as now, or type in a date and/or time for the result you are keying in. For example, if this were an in-house lab that was just done, you may want to select the clock  button to quickly populate today's date/time that the lab was resulted, then key in the result of the specific lab in the appropriate field. If this were say a paper lab result a patient brought in that they had done 3 months ago, then you would want to put the observation date/time as that 3 month old date and key in the results. When done keying in results, click the save button and it will add all lab results entered.

![](./encounters-labs-results-section.assets/91d336f564c53d80644cb16a22464435.png)

Continue working in the encounter.

## Changing Lab Results Section Fields

The Lab Results - Set 1 and the Lab Results - Set 2 sections point to 2 observation flowsheets that are accessible from the patient's observations/flowsheets separate chart tab also.

Super users can maintain this Lab Results section without help from MIE. Meaning a practice super user can remove the "Potassium" field in this Lab Results section of their encounters and instead insert "Creatinine". Users can make edits to these flowsheets and it will reflect/update in the encounter Labs Results section for all users to utilize.

{{% note %}}
If the name of the actual flowsheets are changed - the encounter will not reflect that and this section of the encounter becomes disabled. If you need to rename these flowsheets that the Lab Results sections of the encounter point to (currently named WC Results Set 1 which is Lab Results - Set 1 section in encounter and WC Results Set 2 which is Lab Results - Set 2 section in encounter) you will need to contact your MIE Implementer and they will have to have a developer do the name change and reflect that on the encounter layout programming. The encounter "Lab Results - Set 1 and Lab Results - Set 2" sections are pointed to the flowsheets named WC Results Set 1 and WC Results Set 2. If those get renamed, then it will cause your encounter Lab Results section to be disabled.
{{% /note %}}

To edit the Lab names that show in the encounters Lab Results section, go into any patient and go to their Observations/Flowsheets Chart tab.

![](./encounters-labs-results-section.assets/5a0ab15ce190b451fed867d4f1943287.png)

If you have security permission to Manage Observation Flowsheets and are trained on this feature, you can edit these observation flowsheets named WC Results Set 1 and WC Results Set 2.

The **Labs Result - Set 1** section that has FBS, HgbA1C fields, etc is pointing to flowsheet named **WC** **Results Set 1**

The **Lab Results - Set 2** section that has AST, ALT fields etc is pointing to flowsheet named **WC** **Results Set 2**

![](./encounters-labs-results-section.assets/f2883ec05fcbe9d4950b1b0562f3d78b.png)

![](./encounters-labs-results-section.assets/d1fc04d21cf3de3dfc71f530d58e8820.png)

Go to the **Flowsheet** field found in this observations/flowsheets chart tab module and use the drop-down to select which flowsheet you need to edit.

![](./encounters-labs-results-section.assets/3393671f787f1b80eb942d44ca0c9ea5.png)

Once you have the specific flowsheet selected from that drop-down, click the result you wish to edit. If you do not have security permission, you will **not** be able to edit the observation.

![](./encounters-labs-results-section.assets/2348ca644fbc671f2e4d0081f57bed77.png)

Once you are in edit mode, you can update the result. Click the *Submit* button when done to save your work.

![](./encounters-labs-results-section.assets/6f5afc52a26087fde89c653051976993.png)

See separate help documentation named [Observations Tab](../order-and-result-management/observations-tab.md), for more specific details on how to edit flowsheets and ordering.
