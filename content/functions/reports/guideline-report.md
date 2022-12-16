---
id: '1RWPdiF4m082Uy3ENvU-4lRS_edV78dltrktYW6cA70s'
title: 'Guideline Report'
date: '2021-12-03T16:46:47.430Z'
version: 32
lastAuthor: 'Bridget Hamm'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1RWPdiF4m082Uy3ENvU-4lRS_edV78dltrktYW6cA70s'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Guideline Report'
    identifier: '1RWPdiF4m082Uy3ENvU-4lRS_edV78dltrktYW6cA70s'
    parent: '1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY'
    weight: 4210
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.  
Guideline Report displays results/list showing all patients that are past due (non compliant) for a clinical guideline, which the criteria for being considered "past due" or "non-compliant" is programmed as a Scripted Rule in {{% system-name %}} . If the patient is "past due" or "non compliant" with the criteria you've asked MIE to program for a specific guideline, those will appear as "Guideline Alerts" in the patient's chart wherever *Warnings* are shown. Ex: diabetic patient past due for a foot exam, pregnancy patient past due for a Glucose test, patient's doe for a DTaP Injection, etc.
  
![](../guideline-report.assets/10000201000004CF000000E6E3DFBEF6A0DDC274.png)  

Click *Reports* tab on the left sidebar menu, and then within the Visits parent tab you should see the Guideline Report link.  
The Guideline Report search screen will open. This is a search showing compliant vs non-compliant statistics and patients according to the rules (guidelines) in the criteria you enter and other search filters. The more search filters you enter, the quicker the report will run. This report will be looking through your entire population for patients to result that have that specific "guideline alert" currently on their chart according to other search filter criteria you enter in, which helps narrow down the results.
  
![](../guideline-report.assets/1000000000000243000001113C5EE0B376A9B8F3.png)  

* <strong>Rule:</strong> Select the Scripted Rule that is currently programmed in your system. This is a rule (guideline) you are searching results for from the drop-down arrow to show patients who currently have this "alert" on their chart (that they are past due or non-compliant, etc). You must specify a rule to run a report on. This field is not optional
  
## Additional Search Criteria  
  
These fields are optional, but using them will help the report run faster.
* <strong>Age:</strong> Can enter in an age range to run this report by. Will result patients only within that age range (in their demographics info) that have the selected Guideline Rule/Alert currently on their chart.
* <strong>Communication Preference:</strong> Can enter in communication preference to run this report by. Will result patients only with that communication preference (in their demographics info) whom have the selected Guideline Rule/Alert currently on their chart. <em>Note: clicking the ↓down arrow key on keyboard will show you auto-complete choices.</em>
* <strong>Performing Provider:</strong> Can enter in encounter performing provider(s) to run this report by. Will result patients that have had encounters (with that specific performing provider(s) whom have the selected Guideline Rule/Alert currently on their chart. <em>Note: clicking the ↓down arrow key on keyboard will show you auto-complete choices.</em>
* <strong>Insurance:</strong> Can enter in specific insurance(s) to filter the results under a specific insurance plan(s).
* <strong>Location:</strong> Can enter in encounter location(s) to run this report by. Will result patients that have had encounters (with that specific location) whom have the selected Guideline Rule/Alert currently on their chart. <em>Note: clicking the ↓down arrow key on keyboard will show you auto-complete choices.</em>
* <strong>Visit Type:</strong> Can enter in encounter visit type(s) to run this report by. Will result patients that have had encounters (of that specific visit type(s) whom have the selected Guideline Rule/Alert currently on their chart. <em>Note: clicking the ↓down arrow key on keyboard will show you auto-complete choices.</em>
* <strong>Service Date:</strong> Can enter in encounter service date range to run this report by. Will result patients that have had encounters (in that specific encounter service date range) whom have the selected Guideline Rule/Alert currently on their chart.
Click SEARCH to show search results.
  
## Results  
  
The patients that have the Guideline Rule/Alert currently on their chart (the Guideline Rule/Alert that was selected to run the report) will result below the search filters as *Non-Compliant Patients*. This is a listing of all patients (according to the search filter criteria entered) that have that Guideline Alert/Rule on their chart currently. These are patients who are non-compliant with the Guideline Rule (Scripted Rule) that is programmed in your system. This report does not result patients marked as deceased in their demographics information.
  
![](../guideline-report.assets/100002010000053000000225DD5D70DABF60E742.png)  

  
### Options  

* <strong>CSV:</strong> Downloading the results to an excel file is available. By clicking the Show CSV link available, you can export the results and columns into an excel spreadsheet that you can further manipulate, sort columns, or save file for use.
* <strong>E-mail Selected:</strong> In the patient listing results, there is a Select checkbox option. You can individually checkmark or use the <em>Select All</em> button to checkmark (select) patients. After checkmarking (selecting) the specific patients in the results, you can use the <em>Email Selected</em> button. This will open the Email screen where you can select the email template to render (Guideline Reminder or other custom email layouts you may have programmed in your system) and send an email regarding the past-due or non-compliant guideline alert/rule. Fill out the Email screen as appropriate (see other help documentation regarding Emailing). Patients will receive an email (you can click <em>preview</em>) if they have an email noted in their demographics information.
* <strong>Print Selected Charts:</strong> In the patient listing results, there is a •Select checkbox option. You can individually checkmark or use the <em>Select All</em> button to checkmark (select) patients. After checkmarking (selecting) the specific patients in the results, you can use the <em>Print Selected Charts</em> button. This will open the Print Chart/Print Definition screen where you can select the print definition to render (Guideline Reminder or other custom print definition forms you may have programmed in your system) and print that form letter regarding the past-due or non-compliant guideline alert/rule. The form(s) tied to the print definition selected will print and you can mail them out to the patients.
