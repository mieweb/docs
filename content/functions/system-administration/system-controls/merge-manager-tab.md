---
id: '1c6lN_cYM8X_X726MjhBb57B_NzKZSz-NEeNngYld0tk'
title: 'Merge Manager Tab'
date: '2023-08-18T15:45:58.845Z'
version: 203
lastAuthor: 'Angie Nichols'
mimeType: 'text/x-markdown'
links:
  - '../../document-management/documents-and-forms/document-properties.md'
  - 'merging-accounts-charts-in-system.md'
source: 'https://drive.google.com/open?id=1c6lN_cYM8X_X726MjhBb57B_NzKZSz-NEeNngYld0tk'
wikigdrive: 'b79298d5e22adad5600e11ad6116c5fb4c39eb66'
---
The Merge Manager tab is found in the sidemenu tab named *Control Panel*. The Merge Manager tab is where you can see a listing of charts that have been merged in  {{% system-name %}}  along with any details and who performed the merge, when, etc. If you have security to do so, you can also perform an un-merge to un-merge those charts.

## Security Permission

The Merge Manager tab can be viewed if you have user security permission to do so. MANAGE PATIENT MERGE LOG.

![](../merge-manager-tab.assets/23cf84c87703a000b27465784ac62976.png)

* Security permission <strong>No</strong> will not allow that user to access the Merge Manager Log tab. The default for all users is currently set to No.
* Security permission <strong>View</strong> will allow users to view the Merge Manager Log along with the charts that have been merged and allow users to perform searches, view details, etc in the Merge Manager tab.
* Security permission <strong>Edit</strong> will allow users to do all of the above along with having an UnMerge link in the options column and those users are allowed to unmerge charts.


## Merge Manager

The Merge Manager Log tab is found in the sidemenu tab named CONTROL PANEL. 

![](../merge-manager-tab.assets/288e535433eaeec6488739e5d4cf113b.png)


## Patient Merge Log Search

Once you are in the Merge Manager Log tab, it will show the search criteria filter fields at the top.

**Search criteria fields to help narrow down your search for a specific Patient Merge Log:**
* <strong>Merged To Chart:</strong> Begin typing the last name of the patient you want to search a merge log for. The system will auto-complete to give you matching patient names to select from.
* <strong>Merged By User:</strong> Begin typing the last or first name of the  {{% system-name %}} user you want to search for merges done by that specific user. The system will auto-complete to give you matching usernames to select from.
* <strong>Merge From Chart ID:</strong> This field allows the ability to search for a chart that was merged "From" the old into the new chart.  Chart ID is the pat_id of the original chart, which was merged into a different chart.  You must know the specific old pat_id (chart_id) to key in here to perform a search.

![](../merge-manager-tab.assets/8ee2eb9b6952fd8fd348dd3e4535d60a.png)

* <strong>Merge Date/Time Range:</strong> Can type in a start and end date and/or time range to search for merges done within a specific date and/or time range. If no end date is entered, it is assumed today's date.
* <strong>Merge Type:</strong> Can select to search for merged charts based on a specific merge option type.  The drop-down list coincides with the radio button options when the user performed the merge.

![](../merge-manager-tab.assets/9ce72827cfadcec8cf240c6768066a3b.png)

* <strong>Merge Status:</strong> Select All, Merged or Un-Merged as the status you wish to show results for. Merged means you are just searching Merge Logs of merged patient accounts. Un-Merged means you are searching Merge Logs for patient accounts that were un-merged by a user. All means your results will show both merged and unmerged logs.
* <strong>Show Details:</strong> Checkmark this if you wish it to break the details down into line by line details of each specific merge or unmerge in the Merge Log results. 
* <strong>Show Queries:</strong> Checkmark this if you wish to show the SQL Query column in the Merge Log results. This shows the specific SQL query of the merge or unmerge.

![](../merge-manager-tab.assets/401443c569f8bff9b0b2948b9fc9fbea.png)

Click the SEARCH button to render your results.  
You will see the various columns (Status, Merged From, Merged, To, Merge Type, Details, Merged By and Merge Date) and specific line details and queries if you check-marked to display those in your search results.
   
No results will render below it in the *Patient Merge Log listing* until a search has been rendered using any search criteria fields at the top.  **Note:** clicking the SEARCH button without any search criteria, will display a listing of all charts that have been merged in the system.


## Patient Merge Log

This is a listing of any and all charts that have been merged in {{% system-name %}} . Using the search criteria fields at the top, the results will show here in the Patient Merge Log listed section after you click the SEARCH button.

![](../merge-manager-tab.assets/bb18a7ff22c58bbb08b783c3ec5693e0.png)



## Unmerging Accounts

You will need the security setting of *Manage Patient Merge Log* set to **Edit** to actually perform an unmerge.

![](../merge-manager-tab.assets/23cf84c87703a000b27465784ac62976.png)

If you have security permission *Manage Patient Merge Log* set to Edit, then you will see the **options column** that has the UnMerge hyperlink available.

If your security is set to No, you will not be able to access this Merge Manager tab at all. If your security is set to View, you can view the merges that have been done and/or do search filter, but you cannot unmerge.

![](../merge-manager-tab.assets/e8d6ce0be5a7b3e18204e713b52caec5.png)


If charts were merged and then documentation was added in the patient's chart after the merge, then that documentation will stay with the "to" patient. Unmerging accounts should be used with care. Charts should be audited after an unmerge to make sure everything is where it should be.


To Unmerge, simply click the UnMerge hyperlink provided in the specific chart's merge log record you wish to unmerge. At the top of the screen it will ask you to confirm that you want to unmerge all chart items from the previously merged patient you selected. Click UN-MERGE button to continue if so.

![](../merge-manager-tab.assets/a93ad0cf629c872fc09399e8febd13b5.png)



### Successful Unmerge

The un-merge request will be performed. The screen will show a *successfully unmerged* message at the top of the screen.

![](../merge-manager-tab.assets/409c048d64c13437d963fbd889510efa.png)



### Documents, Appointments, etc Alert

Sometimes the unmerge will be successful, but will alert you to documents, or appointments, or encounters, etc that were added to the chart after its initial merge.  And now that it is being unmerged, those documents (added to the chart since its initial merge) have not been moved.  You would need to audit the two charts to ensure the documents are in the correct chart.  Moving documents is done via the document properties and is found in separate help documentation [Document Properties](../../document-management/documents-and-forms/document-properties.md)

If it is an encounter then you have to copy the contents of the encounter to the other chart. Once that is done you have to delete all the data such as conditions, medications, allergies, etc that were added via the encounter. Then you can delete the encounter. You cannot move encounters and their contents to another chart.

![](../merge-manager-tab.assets/7ae8668c2c35d57a9a1ffbb42da6d6b0.png)



### Failure Alert

Another alert that may display when trying to unmerge charts is a failure alert.

![](../merge-manager-tab.assets/b3756072c96ff8f5483b08f5cb8d27bf.png)

If you get this alert, please call our helpdesk for further assistance.  Typically the failure has to do with the contact relationships on the chart not allowing it to unmerge.  Typically this error is due to there still being relationships for the chart. To unmerge successfully, you may need screenshot/remember the relationships on the chart, then remove all the relationships, do the unmerge chart step, and then replace the relationships on each chart after unmerge.

Our helpdesk can assist you on where to fix contact relationships on the chart that's being attempted to unmerge from another, then to unmerge successfully, then to fix contact relationships on both unmerged charts.  Make sure to add all the relationships back to both charts. Typically (but please check with our help desk when getting this failure) you would have 1 Portal User relationship, 1 Self relationship, Supervisor relationship(s), and EO/Company relationship, however not all systems are set up the same for relationship needs.  Please contact our helpdesk if receive this failure message when trying to unmerge.

![](../merge-manager-tab.assets/b3756072c96ff8f5483b08f5cb8d27bf.png)



## Status

When performing another search in the Merge Manager Log screen, the unmerged chart will remain in the Log, but have a status of **Previously unmerged**. This chart was unmerged. The options column will remove the *unmerge* hyperlink option since it is unavailable because you successfully unmerged the charts already.

![](../merge-manager-tab.assets/6976fabf196c2a561d79bd623bc14879.png)



## How to Merge Charts

Additional information on how to merge charts together may be found under separate help documentation named [Merging Accounts-Charts](merging-accounts-charts-in-system.md)*.*
