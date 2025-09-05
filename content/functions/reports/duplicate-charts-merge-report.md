---
id: '1Embn-V1yfRwxpjqDUayuM5WIVw-kY3esY4YEPwARrco'
title: 'Duplicate Charts-Merge Report'
date: '2025-06-26T16:07:14.086Z'
version: 155
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Embn-V1yfRwxpjqDUayuM5WIVw-kY3esY4YEPwARrco'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
Within the Reports sidemenu, is a performable report has been created named **Duplicate Charts-Merge.**

![](../duplicate-charts-merge-report.assets/7f3033db7ca187878509c107f2f2cb90.png)

This performable report displays a list of charts that may have a duplicate chart(s) in the system based on search criteria entered. The results output in a datavis format and a chart merge can then be performed from this report. This new report can be found in the Utilization grouping of the Reports sidemenu.

Various scenarios can lead to possible duplicate charts in the system. One example could be from where a chart was created via an interface then a duplicate chart was created manually. Another example could be where a patient had duplicate charts with a different last name or first name. In any case, the new **Duplicate Chart-Merge** report makes it easy to search and output possible charts that may have duplicates (based on a rating). The Duplicate Chart-Merge report also easily allows a user to validate possible duplicate charts and merge a "from" chart into a "to" chart.

![](../duplicate-charts-merge-report.assets/24b077c99b27627d9877d15ddfa5f892.png)

Being able to merge charts requires security permissions.  Also, the various merge options available, depend on security permissions.

![](../duplicate-charts-merge-report.assets/e089dcff9557a4a8a4311b8b5df3699a.png)

## Search Criteria

The Duplicate Charts-Merge report offers various search criteria filters to narrow down your output results if needed. Both active and non-active charts will result on the report output, according to any search criteria set.

![](../duplicate-charts-merge-report.assets/ce705d900e4ae6d298f59585077b6ec7.png)

* <strong>Minimum Rating:</strong> <strong>Is a required field</strong>.  Select a Match rating range from 1 through 9 with the higher rating being more certain it is the same person.
    * If DOB matches and the following criteria apply:
        * Rating 9: Last Name, First Name matches
        * Rating 8: SSN matches
        * Rating 8: Last Name, First Name sound similar (e.g., Bob and Rob)
        * Rating 7: First Name and Last Name are swapped
        * Rating 6: Last Name, First Name Initial matches
        * Rating 5: Only Last Name matches
        * Rating 4: Only First Name matches
        * Rating 3: Only First Name sounds similar (e.g., Bob and Rob)
    * If DOB does not match and the following criteria apply:
        * Rating 6: SSN matches
        * Rating 5: Last Name, First Name matches
        * Rating 4: Last Name, First Name sound similar (e.g., Bob and Rob)
        * Rating 3: First Name sounds similar (e.g., Bob and Rob)
        * Rating 2: First Name and Last Name are swapped
        * Rating 1: First Name Initial matches
* <strong>Include Deactivated Partitions:</strong> This option determines whether deactivated partitions are included in the search.
    * If enabled as search criteria: The search results will include matches from all partitions, including those marked as inactive.
    * If disabled from search criteria: Only matches from active partitions are considered.
* <strong>Include No-Part MR Charts:</strong> This option determines whether No-Part MR charts are included in the search. All charts should be assigned a partition and MRNumber, but sometimes charts get inserted without those identifiers and are considered No-Part MR charts.
    * If enabled in search criteria: The search results will include matches, including those with no medical record number/MRN (No Part-MR).
    * If disabled from search criteria: Only matches with medical record numbers/MRN are considered.
* <strong>Merge "From" Temporary:</strong> This option determines whether to limit the results output to display only Temporary charts as the "From".
    * If enabled in search criteria: The search results will be limited to matches of "From" charts that are specifically marked as Temporary charts (is_tmp=1)
    * If disabled from search criteria: All charts (including temporary charts) are included in the search results of "From" charts.
* <strong>"From" Chart Type(s):</strong> This option allows you to filter results based on a specific "From" chart type(s). Note: a chart without a chart type specified on it (chart type is blank), is automatically assumed a Patient chart type by default.
    * If selection(s) in search criteria: Only results from the chosen chart type are included in the search.
    * If nothing specific selected in search criteria: Results from all applicable chart types are included, based on other criteria.
* <strong>"To" Chart Type(s):</strong> This option allows you to filter results based on a specific "To" chart type(s). Note: a chart without a chart type specified on it (chart type is blank), is automatically assumed a Patient chart type by default.
    * If selection(s) in search criteria: Only results from the chosen chart type are included in the search.
    * If no selection(s) in search criteria: Results from all applicable chart types are included, based on other criteria.
* <strong>"From" Partition(s):</strong> This option allows you to filter results based on a specific "FROM" partition(s). All partitions are included, even deactivated ones.
    * If selection(s) in search criteria: Only results from the chosen partition are included in the search.
    * If no selection(s) in search criteria: Results from all applicable partitions are included, based on other criteria.
* <strong>"To" Partition(s):</strong> This option allows you to filter results based on a specific "TO" partition(s). All partitions are included, even deactivated ones.
    * If selection(s) in search criteria: Only results from the chosen partition are included in the search.
    * If no selection(s) in search criteria: Results from all applicable partitions are included, based on other criteria.
* <strong>Order By "To" Interface:</strong> Some systems have interfaces that create charts into your system.  The ‘To" interface identifies a specific interface that creates a chart in your system.  This option allows you to order your results by a specific "TO" interface which then the result output will be prioritized/ordered with the "To" interface being at the top of the list. Useful if you know a certain interface should be the source of truth (like an HR feed interface).

## Datavis Output Columns

* <strong>Options: </strong>
    * The Additional Details hyperlink pops-up a separate window. The pop-up window shows various Types of data in a list and next to each is the count of that data type that is  in the "From" chart and what the count of that same data type has  in the "To" chart (for the specific line item you selected).
    * The checkbox option means you are selecting that line item(s) of a "From" chart to merge into the "To" chart on the line item(s) you selected.  When a line item is checkmarked, the <em>Action: Merge</em> button functionality will activate for performable use.

## ![](../duplicate-charts-merge-report.assets/1b4c37b71f206f2964d358c3ab14dcd6.png)

* <strong>Rating:</strong> Is the rating that the system gives when analyzing the "From" chart to the "To" chart.  The higher the rating, the more likely this is the same person with duplicate chart(s).
    * Remember, a possible duplicate chart will be listed 2 ways on the output of this report, because the chart that is duplicate may need to be the "From" chart or may need to be the "To" chart.  The "To" chart is the chart a "From" chart will merge into.  The "To" chart will be kept in the system.  So the listing output will list it each way and you would select <strong>one</strong> way to merge it.

![](../duplicate-charts-merge-report.assets/95914c9291e30d72d23413191897cae1.png)

* <strong>From MRN/Partition:</strong> This is the MRNumber(s) and partition(s) of a possible duplicate chart being identified in a line as a "From", meaning if selected, all the "From" chart data would merge into this "To" chart listed on a specific row.
* <strong>To MRN/Partition:</strong> This is the MRNumber(s) and partition(s) of a possible duplicate chart being identified in a row as a "To" chart, meaning if selected, all the "From" chart data would merge into this "To" chart.
* <strong>From Chart:</strong>  This is the chart that will be merged into the "To" chart (on the row) if selected to merge.
* <strong>To Chart:</strong> This is the chart that the "From" chart (on the row) will be merged into and kept, if selected to merge.
* <strong>From Pref Name:</strong> This is the preferred first & last name (in demographics) of the "From" chart (on the row).
* <strong>To Pref Name:</strong> This is the preferred first & last name (in demographics) of the "To" chart (on the row).
* <strong>From DOB:</strong> This is the chart date of birth identifier of the "From" chart.  This helps give another identifier to ensure merging from and to a specific chart.
* <strong>To DOB:</strong> This is the chart date of birth identifier of the "To" chart.  This helps give another identifier to ensure merging from and to a specific chart.
* <strong>From Created:</strong> This is the date & time stamp the "From" chart was created in the system. Again, helps give more identifiers to help determine which row to merge from & to of older chart vs newer chart, etc.
* <strong>To Created:</strong> This is the date & time stamp the "To" chart was created in the system. Again, helps give more identifiers to help determine which row to merge from & to of older chart vs newer chart, etc.
* <strong>From Interface:</strong> Identifies the interface name of which the "From" chart was created.  If it says Unknown, then the "From" chart was created manually.
* <strong>To Interface:</strong> Identifies the interface name of which the "To" chart was created.  If it says Unknown, then the "From" chart was created manually.
* <strong>From Chart Type(s):</strong> Lists the specific chart type(s) the "From" chart has on it. "From" charts without a chart type specified on it (chart type is blank), is automatically assumed a Patient chart type by default.
* <strong>To Chart Type(s):</strong> Lists the specific chart type(s) the "To" chart has on it.  "To" charts without a chart type specified on it (chart type is blank), is automatically assumed a Patient chart type by default.
* <strong>From Temp:</strong> No indicates the "From" chart is not marked as a temporary chart in demographics. Yes indicates the "From" chart is marked as a temporary chart in demographics. This helps give another identifier to ensure merging from and to a specific chart.
* <strong>To Temp:</strong> No indicates the "To" chart is not marked as a temporary chart in demographics. Yes indicates the "To" chart is marked as a temporary chart in demographics. This helps give another identifier to ensure merging from and to a specific chart.
* <strong>From Active:</strong> Non-active charts are not excluded from the report output, but are identified in this column.  Yes indicates the "From" chart is marked as an active chart in demographics. No indicates the "From" chart is marked as a non-active chart in demographics. This helps give another identifier to ensure merging from and to a specific chart.
* <strong>To Active:</strong> Non-active charts are not excluded from the report output, but are identified in this column.  Yes indicates the "To" chart is marked as an active chart in demographics. No indicates the "To" chart is marked as a non-active chart in demographics. This helps give another identifier to ensure merging from and to a specific chart.

## Perform a Chart Merge

To perform a chart merge from this report, simply checkmark the specific "From" and "To" chart merge you would like to perform.  Once the line is checkmarked, the **_Merge_** action button will be available.  Next, click the **_Merge_** action button.

![](../duplicate-charts-merge-report.assets/448f60ca01cc4a8ed07b49de687e07c3.png)

### Merge Options

There are 4 available options to merge a chart.  One must be selected to perform a chart merge.

![](../duplicate-charts-merge-report.assets/0e93206ae5d3c1d529decb4ffdf869cf.png)

* <strong>Merge Chart and Demographics and ignore this employee's duplicate MR Numbers:</strong> (This is the most common selection used)  This option will merge the entire chart and keep both MR numbers when merging MRs from two different partitions. If merging two MR numbers from the same partition, only the MR number of the chart that the documents are being merged to will be kept.
* <strong>Merge this employee's chart and keep all MR:</strong> This option will merge the entire chart and keep all MR numbers regardless of partitions.
* <strong>Merge Chart only and ignore this employee's demographics:</strong> (This option should rarely be used)  This option will merge and only keep the MR number of the chart the documents & chart are being merged to (regardless of partitions being merged).
* <strong>Merge this chart's documents and MR Numbers Only:</strong> (This option should rarely be used)  This option ONLY merges the documents in the "from" patient and the MR numbers on that patient to the merged "into" patient. No other data (demographics, meds, conditions, etc) would be merged.

NOTE: Depending on what your security permission(s) are set to, you may not see all 4 options.

![](../duplicate-charts-merge-report.assets/1b4f1fb8fa1466ae86d93178df66fdee.png)

On this Merge Options pop-up screen, indicate the merge option to be applied to all chart line item you had selected initially.  You must click the **_Select_** blue button to indicate your specific merge option choice.

![](../duplicate-charts-merge-report.assets/c572307727c37407d3f2ae261695935d.png)

You will be asked to confirm your merge option.

![](../duplicate-charts-merge-report.assets/d2188b104290b44e271495f87445f2ec.png)

Once it's confirmed, the duplicate chart merge will process.

![](../duplicate-charts-merge-report.assets/418174aeebb0e1fe38a85622c072257b.png)

As the pop-up screen states, once the merge process is completed, the pop-up window will close and the Duplicate Chart Merge datavis report will refresh automatically and will have removed any duplicate charts that were merged according to the search criteria you are set to.

### Merge Multiple Charts in Mass

The report can be used to select/checkmark multiple lines of charts to merge at the same time.  Merging does not have to be done individually from this report output.

From the report, simply checkmark which "From" chart into "To" chart lines you wish to merge.  Then, click the **_Merge_** action button.

![](../duplicate-charts-merge-report.assets/fb900ebd42fa7be568fcfe9eae9f0eea.png)

On the next pop-up screen, indicate the merge option to be applied to all chart line items you had selected initially.  You must click the **_Select_** blue button to indicate your specific merge option choice.

![](../duplicate-charts-merge-report.assets/c572307727c37407d3f2ae261695935d.png)

The system will ask you to confirm the merge option you selected.  Upon confirmation, the duplicate chart merge will be processed.  The merge process will be executed top down. So the first checkbox row will execute first, then the second, then third, and so on.

![](../duplicate-charts-merge-report.assets/418174aeebb0e1fe38a85622c072257b.png)

As the pop-up screen states, once the merge process is completed, the pop-up window will close and the Duplicate Chart Merge datavis report will refresh automatically and will have removed any duplicate charts that were merged according to the search criteria you are set to.

## Search Filter Templates

You can "save" a duplicate chart merge report's search criteria to be used again in the future. You may run the same report filter criteria fields often and instead of putting in the report search criteria fields individually every time, you can "save" the report filters to run again at a future time without having to manually key everything in again. You can save and access previous saved filter reports using the link options at the top: Save Filter Template and Show Saved Filters.

![](../duplicate-charts-merge-report.assets/ee18e20b4f566d2786991bfa59f0e703.png)

### Save Filter Template

To "save" a new report filter template, you need to enter in all the search criteria fields for the report from the Duplicate Charts-Merge report. When you are done, you can click SEARCH to run the report and still access the save filter templates link even after you run a report.

![](../duplicate-charts-merge-report.assets/c83f6d1649437004932bc57dfdf699b1.png)

All the search criteria you entered in for the report can be stored as a "saved template" to run that same report again without having to rekey in each field manually. All search criteria fields are able to be stored in a filter template.

When you click the save filter template all search criteria fields can be "saved" to this template to run the report again in the future quickly. You can "uncheckmark" any search criteria line items that you don't want to be included in this future "filter template", but by default it assumes you want to save all and it places a checkmark beside each. You must type a "Name" to name this saved report filter template.

![](../duplicate-charts-merge-report.assets/ee75aaca7917c75b128f94942f904819.png)

Click the SAVE button to save your template. You and others can now access the saved report filter template by clicking show saved filters link and quickly run the same report in the future without having to manually key in each filter criteria field individually.

### Show Saved Filters

If you wish to access a previously saved template and want to run the same report again, click the Show Saved Filters link. You will see a list of the choices and what the report is named. If you have security privilege, you can delete any saved filter reports from here too so it cannot be utilized anymore.

Click the saved duplicate chart merge report template name you wish to run, from the list.

* <em>Personal Templates</em> are saved Duplicate Charts Merge report templates you (the logged in user) have saved & created to be in the library.
* <em>Global Templates</em> are saved Duplicate Charts Merge report templates that other users have saved & created in this library and you can access them also.

![](../duplicate-charts-merge-report.assets/a3fec42ce99dd5286a3734bbbef542e9.png)

It will open a pop-up with a list of fields that are attached to this saved template (to run the report by) and all will be checkmarked by default. If you wish to run the same report that the saved template states, simply click the **APPLY** button.  If you wish to not include a previously saved filter item, then uncheckmark it and then run the report by clicking the **APPLY** button and it populates the Duplicate Charts Merge Report search filter fields based on what you have checkmarked from the saved template.

![](../duplicate-charts-merge-report.assets/0754dbf5b7a835474f5deffed95ff6eb.png)

The search field fields are populated with the saved template contents you selected, so next, click the SEARCH button (on the report) to run the report.

![](../duplicate-charts-merge-report.assets/69d3d26b2f89692e4adedf9a3c77c943.png)
