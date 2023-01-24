---
id: '1c6lN_cYM8X_X726MjhBb57B_NzKZSz-NEeNngYld0tk'
title: 'Merge Manager Tab'
date: '2020-02-27T21:21:33.247Z'
version: 42
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'merging-accounts-charts-in-system.md'
source: 'https://drive.google.com/open?id=1c6lN_cYM8X_X726MjhBb57B_NzKZSz-NEeNngYld0tk'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Merge Manager Tab'
    identifier: '1c6lN_cYM8X_X726MjhBb57B_NzKZSz-NEeNngYld0tk'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4670
---
The Merge Manager tab is found in the sidemenu tab named *Control Panel*. The Merge Manager tab is where you can see a listing of patients accounts/charts who have been merged in  {{% system-name %}}  along with any details and who performed the merge, when, etc. If you have security to do so, you can also perform an un-merge to un-merge those accounts.  
The Merge Manager tab can be viewed if you have user security permission to do so. MANAGE PATIENT MERGE LOG.
* Security set to <strong>No</strong> will not allow that user to access the Merge Manager tab. The default for all users is currently set to No.
* Security set to <strong>View</strong> will allow users to view that tab along with the patients' accounts that have been merged and allow users to perform searches, view details, etc in the Merge Manager tab.
* Security set to <strong>Edit</strong> will allow users to do all of the above along with having an UnMerge link in the options column and those users are allowed to unmerge accounts.
  
![](../merge-manager-tab.assets/66813afda417232e2154ab702ad35aa3.png)  

The Merge Manager tab is found in the sidemenu tab named CONTROL PANEL. Once you are in the Merge Manager tab, it will show the search criteria filter fields at the top. No patient results will render below it in the *Patient Merge Log listing* until a search has been rendered using any criteria fields at the top.
  
![](../merge-manager-tab.assets/7ad06d6c6d1e6780cb0a7f31e9580b46.png)  

  
## Patient Merge Log  
  
This is a listing of any and all patient accounts that have been merged in {{% system-name %}} . Using the search criteria fields at the top, the results will show here in the Patient Merge Log section after you click the SEARCH button.
  
![](../merge-manager-tab.assets/8607f501f6b214e14dfa614523fd2246.png)  

  
### Search Criteria Fields  
  
In the Merge Manager Tab, the top portion is the search criteria fields. This is where you can enter field specifics to narrow down your Patient Merge Log results. The section below these search criteria fields defaults to show any and all patients who have been merged in your system. You can narrow down these results by using the search criteria fields and rendering a search to get more specific log results or narrow down your search to find the merge log you need to.
  
![](../merge-manager-tab.assets/0167ce505c5391957f3e5298f0e97e44.png)  

**Optional search criteria fields to help narrow down your search for a specific Patient Merge Log:**
* <strong>Merged To Patient:</strong> Begin typing the last name of the patient you want to search a merge log for. The system will auto-complete to give you matching patient names to select from.
* <strong>Merged By User:</strong> Begin typing the last or first name of the  {{% system-name %}} user you want to search for merges done by that specific user. The system will auto-complete to give you matching user names to select from.
* <strong>Merge Date/Time Range:</strong> Can type in a start and end date and/or time range to search for merges done within a specific date and/or time range. If no end date is entered, it is assumed today's date.
* <strong>Merge Status:</strong> Select All, Merged or Un-Merged as the status you wish to show results for. Merged means you are just searching Merge Logs of merged patient accounts. Un-Merged means you are searching Merge Logs for patient accounts that were un-merged by a user. All means your results will show both merged and un-merged logs.
* <strong>Show Details:</strong> Checkmark this if you wish it to break the details down into line by line details of each specific merge or unmerge in the Merge Log results.
* <strong>Show Queries:</strong> Checkmark this if you wish to show the SQL Query column in the Merge Log results. This shows the specific SQL query of the merge or unmerges.
Click SEARCH button to render your results.  
You will see the various columns (Status, Merged From, Merged, To, Merge Type, Details, Merged By and Merge Date) and specific line details and queries if you check-marked to display those in your search results.
  
![](../merge-manager-tab.assets/a82006d2a25fde85a3f67bc94d6f67b2.png)  

  
## Unmerging Accounts  
  
You will need the security setting of *Manage Patient Merge Log* set to **Edit** to actually perform unmerges.  
If you have security permission *Manage Patient Merge Log* set to Edit, then you will see the **options column** that has the UnMerge link.  
If your security is set to No, you will not be able to access this Merge Manager tab at all. If you security is set to View, you can view the merges that have been done and/or do search filter, but you cannot unmerge.
  
![](../merge-manager-tab.assets/888b8e937d8621e4bd7299af53427c2e.png)  

If a patient's chart were merged and then documentation was added in the patient's chart after the merge, then that documentation will stay with the "to" patient. Un-merging accounts should be used with care. Charts/accounts should be audited after an un-merge to make sure everything is where it should be.  
To Un-merge, simply click the UnMerge link provided in the specific patient's merge log record you wish to unmerge. At the top of the screen it will ask you to confirm that you want to unmerge all chart items from the previously merged patient you selected. Click UNMERGE button to continue if so.
  
![](../merge-manager-tab.assets/07fc7577d62c0103a468cf040c777d3c.png)  

The un-merge request will be performed. The screen will show a *successfully unmerged* message at the top of the screen.
  
![](../merge-manager-tab.assets/305607b1019c0a8d692d61450c081146.png)  

Then in the Patient Merge Log listing below the search criteria fields, it shows the patient listing you unmerged and will have switched to be status **Previously unmerged**. This means you unmerged it and it will display this status for other users viewing the log. This patient was unmerged. The options column will remove the *unmerge* option since it is unavailable because you successfully unmerged the patient's chart/account already.
  
![](../merge-manager-tab.assets/d780d65e94cdf09aafa23439028b1445.png)  

To merge patient accounts, please see other help documentation named [Merging Accounts-Charts](merging-accounts-charts-in-system.md)*.*
