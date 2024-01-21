---
id: '1PORLZX1Ild3LyNw0O7YZ97r4Ybf0ybND0TA5r5f3KCE'
title: 'Sharps Log Report'
date: '2024-01-12T16:24:24.830Z'
version: 40
lastAuthor: 'Angie Nichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1PORLZX1Ild3LyNw0O7YZ97r4Ybf0ybND0TA5r5f3KCE'
wikigdrive: 'latest'
---
## Sharps Log Report  CURRENTLY BEING WRITTEN/ANGIE

You must have security permission to the Reports module/tab within {{% system-name %}}. This permission is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users to access the Reports left sidemenu tab module. 

![](../sharps-log-report.assets/09ec61d9ee49b68f313c43d40f34ad2e.png)


This guide will go through the most common out of the box Safety Reports available in {{% system-name %}}, but more detailed information on each individual report is found in its own separate guide.

The report requires an Incident Start and End date at a minimum to run the report. There are other filters to help when searching for a specific encounter date range, patient, condition, type of device or location.

A regulatory report to track needlestick injuries for cases/incidents having a Nature of Body Part documented as Contaminated Sharp. Charts marked as 'Exclude from Quality Care' are omitted from report output.



![](../sharps-log-report.assets/1eeedfe4dd8657f2eccb824900f54830.png)


The following data needs populated in the Case and Encounter to populate the report


## Case Section


### Date

The Date and time of injury or onset of illness case field will populate the Sharps Lob.

![](../sharps-log-report.assets/b3d8856656746f3ecec96fa5062ae846.png)



### Case Number


Enterprise Health will assign a unique case number automatically once the Case data has been entered and saved. The case number is visible From the Case section (in the encounter) in edit mode, it will display in the encounter header when the encounter is set current and a case is linked to that encounter and it is also viewable on the Cases chart tab


### ICD10/ICD9 & Condition


These values are populated by the Symptoms/Diagnosis section of the encounter where the case was originally created.

![](../sharps-log-report.assets/a11bb5f06490ebc8369c65bb516e43b0.png)




### Type of Device/Brand/Laceration/Puncture


When the Nature of Injury and Illness is completed as a "Contaminated Sharp", the nature of injury and illness section will dynamically add fields to free text in a response for Type of device, Manufacture and indicate if the wound was a Laceration or Puncture. These fields will populate the Sharps Log report.


![](../sharps-log-report.assets/9654f73b79f7a034c75fa0f2d20c372f.png)



### Where Occurred

Text from the "Where the event occurred" case field will populate the report.

![](../sharps-log-report.assets/e961090e830c22780c17d4c2daa767f4.png)



### How Occurred

Text from the "What happened?" case field will populate the report.

![](../sharps-log-report.assets/28f4e91e91fdbae9be751bd7aa687920.png)



### Location


The location indicated on the case will populate the Sharps Log.

![](../sharps-log-report.assets/ff40ebe618714daf2b5865e66a28476b.png)


### Initial date of visit


The date of the initial visit where the case/incident was entered will display as the "Initial Visit Date" column on the Sharps log report.

### Sharps Exposure Details


Northwell has added additional columns to the case as pictured below. This data is collected and ONLY displays on the original initial reported case. This data does not pull forward to future visits where as all other (out of the box fields) will continue to pull forward. 

![](../sharps-log-report.assets/1635ebe060d49d3fa5d3834997905d75.png)


## Show CSV


This will export/download the report. The user may then save in Excel or other spreadsheet applications. If a column indicates "", this means the field was not populated in the case/encounter and it is blank/null.


![](../sharps-log-report.assets/970491cdc79b752d90f2e1005f4490e0.png)



## Print


The data displays in a browser tab. The user may use the browser print function to print the information.


![](../sharps-log-report.assets/67d452e4cff2d944ffb340da44c93a48.png)


![](../sharps-log-report.assets/1296bf464c0310195ffb149324552cef.png)


