---
id: '1Is5FLQOhjm41qI_Epg9Ki6wnUfxh897DBx1zbwwO8fw'
title: 'Document Validation Test Script'
date: '2024-05-21T16:57:00.565Z'
version: 58
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/open?id=1-bEhVXIw7-K_Z06pJshMYYHg3JCGm32l'
  - '../../e-chart/basic-initial-system-information.md'
  - '../../e-chart/detailed-searching-in-e-chart.md'
  - 'https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit'
  - 'https://drive.google.com/open?id=1-fpn_MQL5MYKpUbfbrykYBL3WsnWHQt7'
  - '../../reports/documents-report-super-document-type-search.md'
source: 'https://drive.google.com/open?id=1Is5FLQOhjm41qI_Epg9Ki6wnUfxh897DBx1zbwwO8fw'
wikigdrive: '2df6deac680edf3f4e35063b01adf72716ae114f'
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

## [Validation Instructions](https://drive.google.com/open?id=1-bEhVXIw7-K_Z06pJshMYYHg3JCGm32l)

1. Log into the {{% system-name %}} system.
2. Navigate to the {{% syslink "Quick View" "func=omniscope" %}} , and using the portlet, perform a <strong>Chart Search</strong> for a record from the list of 8-10 charts.

    ![](../document-validation-test-script.assets/52f73ae40dc37122cc526f2bbb6020ab.png)

{{% tip %}}

* Select the preferred search criteria, such as <strong>D.O.B.</strong>, <strong>Name</strong>, or <strong>EMP #</strong> (sometimes referred to as Medical Record Number, or MR#).
* Type in the appropriate value and click <strong>Search,</strong> or press enter. (For more information and instructions on searching, see [Basic Initial System Information](../../e-chart/basic-initial-system-information.md) or [Detailed Searching in E-Chart](../../e-chart/detailed-searching-in-e-chart.md).)

{{% /tip %}}

3. Verify the chart. Demographic data (e.g., Name, Status, MR#) is displayed on the Patient Header.

    ![](../document-validation-test-script.assets/3b6e81d53b6a76b60742edeec867658b.png)
4. As noted, the Documents chart tab displays <strong>all</strong> documents related to the chart. The documents in this tab may also appear in other, more specific tabs, such as Labs or Encounters chart tabs. Change the view of the results using the drop-down in the upper-right corner of the page. 

    ![](../document-validation-test-script.assets/674c73ec2444bbd1a0f365ba02a10a0a.png)

{{% tip %}}
**Detail View** may be better suited for validating documents. Changing views does not change views across chart tabs, but will change the respective view across different charts. Using the drop-down makes it easy to change between views and can be updated, as needed. ![](../document-validation-test-script.assets/9ec7ddee5878fb47b312fa81e02ae275.png)
{{% /tip %}}

5. Select the document being validated from the list. 

    ![](../document-validation-test-script.assets/f8cf83dfe7a8f3f5f2e778418daaf3eb.png)

{{% tip %}}
To return to the list of documents, click the Documents chart tab.
{{% /tip %}}

6. With the documents displayed, begin comparing the data. Toggle between the legacy system and the {{% system-name %}} system to validate the data. If access to the legacy system is unavailable, users may use the CSV file presented to {{% system-name %}} for initial import.
    1. Using the [Validation Tracking Template](https://docs.google.com/spreadsheets/d/1FRV_L_J38dhBDi13elXHVJddMuIZy6Sq5P3Viv9IXxE/edit#gid=0), record any discrepancies or differences.
    2. Take screenshots of each system, highlighting the differences found. <strong>(Remember: DO NOT email PHI)</strong>
    3. Contact {{% system-name %}} with the findings.

## [Reports](https://drive.google.com/open?id=1-fpn_MQL5MYKpUbfbrykYBL3WsnWHQt7)

The [Super Document Search and Document Reports](../../reports/documents-report-super-document-type-search.md) are particularly helpful in validating documents.

### Super Document Search Report

1. Using the Chart Search Quick View portlet, or navigating to {{% syslink "E-Chart" "f=chart" %}} , click the <strong>Documents</strong> link to open the Super Document Search Report.

    ![](../document-validation-test-script.assets/34d4d957441993d4f8584e03b93e945a.png)
2. Select criteria to search by. Typically <strong>Doc Type</strong> and <strong>Service Date</strong> ranges are used to limit results. Use the Detail View and Modify Search links to manipulate the search results, as needed.

    ![](../document-validation-test-script.assets/52d59b62e08cbb0734d74572d2068ad6.png)

See the online help documentation for more information on the [Super Document Search](../../reports/documents-report-super-document-type-search.md).

### Document Reports

1. Navigate to the {{% syslink "Reports" "f=layout&module=reports&name=reports&tabmodule=reports" %}} sidemenu.
2. Select the {{% syslink "Visits" "f=layout&module=reports&name=Visits&tabmodule=reports&t=Visits" %}} report list and select the {{% syslink "Document Reports" "f=reports&s=docrp&tabmodule=reports&t=Visits" %}} .

    ![](../document-validation-test-script.assets/2ed1e077f8f83a0c2a6135ab5c232ce7.png)
3. Similar to the Super Document Search Report, the Document Report performs a document search based on provided criteria. This report has less criteria available for searching.

    ![](../document-validation-test-script.assets/3ba190c6d0373106a29edd225fec11b7.png)

See the online help documentation for more information on using the [Documents Report](../../reports/documents-report-super-document-type-search.md).

## FAQs

**Q:** Some documents show Deleted, yet still are in the list. Why is this?

**A:** In the {{% system-name %}} system, showing/hiding deleted documents is controlled by chart tab configuration. Clients may wish to hide deleted documents and may change this setting, as preferred.

**Q:** Why do some documents show as Restricted or Locked, and I am unable to open them?

**A:** Documents may be restricted or locked, depending on the nature of the document or the chart being accessed. For instance, HIV results may be restricted or locked from some uses. Contact the SuperUser if restrictions from documents need to be lifted.
