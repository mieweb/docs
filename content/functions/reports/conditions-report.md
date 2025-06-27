---
id: '1khW9jXd8a8psZUg1FhRqHGGIGdvDgSSU9xhzRsT5ofE'
title: 'Conditions Report'
date: '2025-06-10T15:27:13.100Z'
version: 66
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1khW9jXd8a8psZUg1FhRqHGGIGdvDgSSU9xhzRsT5ofE'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side menu tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.

Click the *Reports* sidemenu tab.

Click the *Conditions Report* tab from the top tab menu.

![](../conditions-report.assets/25a4ac8dfc6505280982c0d64b30dfae.png)

The Conditions Report search filter screen will open. This is a searchable report to render documented conditions found within charts based on search criteria.

![](../conditions-report.assets/47e0566ec41c39db272be05743ceb004.png)

These fields are optional. The more fields you enter and fill out, the more narrowed your search will be.

* <strong>Patient, Partition or Employer fields:</strong> This is available to narrow down the set of charts to result.
* <strong>ICD9 or ICD10 Code fields:</strong> You can enter the name of the condition or the specific ICD code(s) here. Begin typing the condition name or ICD cod(s) and it will auto-complete and give you choices to select from. Click the add <strong>+</strong> button to add another condition/ICD code to the search. (Click the <strong>–</strong> to take it off the list).
* <strong>SNOMED Concept Code:</strong> This is to search by a specific Snomed code. To search for a condition/ICD9 code, go to the next field. Type in the specific SNOMED code to search by. Click the add <strong>+</strong> button to add another SNOMED code to the search. (Click the <strong>–</strong> to take it off the list).
* <strong>Onset Date:</strong> You can enter any onset date ranges for conditions for your search. This is the date the condition started/began for the patients.
* <strong>Conclusion Date:</strong> You can enter any conclusion date ranges for your search. This is the date the condition was concluded for the patients.
* <strong>Entered Date:</strong> The Entered Date (if no date range is keyed in here) will default to only render the last 2 weeks of entered conditions.  You can enter any entered date ranges for your search. This is the date the condition was entered into the system for the patients.
* <strong>Managed By:</strong> You can narrow down your search by entering a specific physician/resource from your practice. Begin typing the first <em>or</em> last name of the physician and it will auto-complete and give you choices to select from. This is the physician/resource that is tied to managing the condition entered for the patients. "Deleted" users will also show here in this field for selection.
* <strong>Clinical Status:</strong>  Can limit the search by a specific clinical status if needed. Default will search by any/all clinical statuses the condition is set to in a chart.
* <strong>Verification Status:</strong> Can limit the search by a specific verification status if needed.  Default will search by any/all clinical statuses the condition is set to in a chart.
* <strong>Problem List:</strong> Can limit search by Yes, No, or Any.  The report output will place a 1 in the column if ‘yes' the condition is on their Problem List.
* <strong>PMH (Past Medical History):</strong> Can limit search by Yes, No, or Any.  The report output will place a 1 in the column if ‘yes' the condition is on their Past Medical History list.
* <strong>Deleted:</strong> Can limit the search for conditions marked as deleted, or not as deleted, or any.  The report output will place a 1 in the column if the condition is marked as deleted on their problem list.
* <strong>Optional Columns:</strong> Check any optional demographic information that you want resulted as columns in the output.
* <strong>Current Status:</strong> Default will be at Positive. However, you can change the status to whatever you wish. Hover or click your mouse on the help icon for explanations of each status.

* <strong>Format:</strong> Default will be at ListView. However, you can change the status to whatever you wish. Hover or click your mouse on the help icon for explanations of each status.

Click the SEARCH button to output the Conditions Report based on your search criteria.

Additional report output options:

* Show CSV will convert the output into an excel CSV file in a separate tab.
* Show Grid will convert the output into a DataVis on the same screen, where you can filter, group, pivot, and do any graphing needs.
* View Printable will put the output into a printable format in a separate tab, to use your browser's print method.

![](../conditions-report.assets/b2ccfe87d3c3c1cae58ba81757d641aa.png)
