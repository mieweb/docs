---
id: '1Is5FLQOhjm41qI_Epg9Ki6wnUfxh897DBx1zbwwO8fw'
title: 'Document Validation Test Script'
date: '2020-02-27T21:33:01.890Z'
version: 37
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/open?id=1-bEhVXIw7-K_Z06pJshMYYHg3JCGm32l'
  - '../../e-chart/basic-initial-system-information.md'
  - '../../e-chart/detailed-searching-in-e-chart.md'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0'
  - 'https://drive.google.com/open?id=1-fpn_MQL5MYKpUbfbrykYBL3WsnWHQt7'
  - '../../reports/documents-report-super-document-type-search.md'
source: 'https://drive.google.com/open?id=1Is5FLQOhjm41qI_Epg9Ki6wnUfxh897DBx1zbwwO8fw'
wikigdrive: '8934ab392b82c3a1d5a8ae9fb7795d99e93c12ca'
menu:
  main:
    name: 'Document Validation Test Script'
    identifier: '1Is5FLQOhjm41qI_Epg9Ki6wnUfxh897DBx1zbwwO8fw'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5190
---
This document describes the process to validate migrated data formatted to display as a document in the {{% system-name %}} system. These documents typically contain data that is either not required to be discreet, or to be reported on, needs to be available from specifically-named documents.  
{{% note %}}

Validation may also be performed on imported scanned documents.
{{% /note %}}
  
## Requirements  

* Compile a list of 8-10 different charts containing questionnaire data from the legacy/existing system. Ensure the examples include varied complexity and multiple years of data, to address potential import discrepancies that could arise.
* Multiple monitors are recommended to assist with comparing legacy data to the data imported to {{% system-name %}} .
  
## Explanation of Data   

The {{% system-name %}} system can display another system's data as documents. These documents typically contain data that is either not required to be discreet, or to be reported on, must be retrievable from specifically-named documents. All of these documents will be found under the **Documents** chart tab; however, document types (e.g., Legacy (or historic) Medications, Consents, Clinic Visits, Injury & Illness Cases, etc.) can be configured to display under specific chart tabs, as needed.
  
## Validation Instructions ([**video**](https://drive.google.com/open?id=1-bEhVXIw7-K_Z06pJshMYYHg3JCGm32l))  

1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

   <img src="../document-validation-test-script.assets/10000201000000E90000008428F41BCA52594CC8.png" />

{{% tip %}}
   1. Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
   2. Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.md) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.md).)
{{% /tip %}}
1. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

   <img src="../document-validation-test-script.assets/10000201000003EE0000005E5A4755F56EC0CF16.png" />



2. As noted, the Documents chart tab displays <strong>all</strong> documents related to the chart. The documents in this tab may also appear in other, more specific tabs, such as Labs or Encounters chart tabs. Change the view of the results using the drop-down in the upper-right corner of the page. 

   <img src="../document-validation-test-script.assets/1000020100000547000001C5DFC74BBD81AC313B.png" />



{{% tip %}}
   <strong>Detail View</strong>  
    may be better suited for validating documents. Changing views does not change views across chart tabs, but will change the respective view across different charts. Using the drop-down makes it easy to change between views and can be updated, as needed. <img src="../document-validation-test-script.assets/100002010000009400000079E384A1EEDFED951F.png" />
{{% /tip %}}
3. Select the document being validated from the list. 

   <img src="../document-validation-test-script.assets/1000020100000545000001BF886C8D9B5F93EE9F.png" />

{{% tip %}}
   To return to the list of documents, click the Documents chart tab.
{{% /tip %}}
4. With the documents displayed, begin comparing the data. Toggle between the legacy system and the {{% system-name %}} system to validate the data. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import. 
   1. Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
   2. Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
   3. Contact {{% system-name %}} with the findings.
  
## Reports ([**video**](https://drive.google.com/open?id=1-fpn_MQL5MYKpUbfbrykYBL3WsnWHQt7))  

The [Super Document Search and Document Reports](../../reports/documents-report-super-document-type-search.md) are particularly helpful in validating documents. 
  
### Super Document Search Report  

1. Using the Chart Search Quick View portlet, or navigating to {{% syslink "E-Chart" "f=chart" %}} , click the <strong>Documents</strong> link to open the Super Document Search Report.

   <img src="../document-validation-test-script.assets/10000201000000F20000005549B3DD99F1997160.png" />



2. Select criteria to search by. Typically <strong>Doc Type</strong> and <strong>Service Date</strong> ranges are used to limit results. Use the Detail View and Modify Search links to manipulate the search results, as needed.

   <img src="../document-validation-test-script.assets/1000020100000543000002558E4D6EAEB0E0C340.png" />

See the online help documentation for more information on the [Super Document Search](../../reports/documents-report-super-document-type-search.md).
  
### Document Reports   

1. Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
2. Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list and select the {{% syslink "Document Reports" "f=reports&s=docrp&tabmodule=reports&t=Visits" %}} .

   <img src="../document-validation-test-script.assets/10000201000000CC000000C9B2CF56CE6DAB6AD3.png" />

3. Similar to the Super Document Search Report, the Document Report performs a document search based on provided criteria. This report has less criteria available for searching.

   <img src="../document-validation-test-script.assets/1000020100000145000000E5D3D474E0D196AAC0.png" />  

See the online help documentation for more information on using the [Documents Report](../../reports/documents-report-super-document-type-search.md).
  
## FAQs  

**Q:** Some documents show Deleted, yet still are in the list. Why is this?
**A:** In the {{% system-name %}} system, showing/hiding deleted documents is controlled by chart tab configuration. Clients may wish to hide deleted documents and may change this setting, as preferred. 
**Q:** Why do some documents show as Restricted or Locked, and I am unable to open them?
**A:** Documents may be restricted or locked, depending on the nature of the document or the chart being accessed. For instance, HIV results may be restricted or locked from some uses. Contact the SuperUser if restrictions from documents need to be lifted.
