---
id: "1JYGKWOt98LpnXr20Rr4VDkhfgb1cYX7-72aWGkB0JMM"
title: "Respirator Fit Data CSV API Import Tool"
date: "2025-11-13T21:39:22.003Z"
version: 89
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "data-import-tab.md"
  - "https://docs.google.com/spreadsheets/d/1gRbT7ksHUvDXqjHijTF4ipHbyyRDruMgjjx8zbcHqWI/view?gid=0"
source: "https://drive.google.com/open?id=1JYGKWOt98LpnXr20Rr4VDkhfgb1cYX7-72aWGkB0JMM"
wikigdrive: "v2.15.30"
---

This document explains how to import Respirator Fit Test data into {{% system-name %}} , using the Data Import tab. See our [Data Import Tab](data-import-tab.md) help documentation for more information regarding its many uses.

## Respirator Fit Test CSV API Import Tool

The Respirator Fit Test CSV API Import Tool uses partitions and medical record numbers (MRNs) to match patients' Respirator Fit Test data to their charts. Therefore, work with your MIE Implementer, as needed, to import Respirator Fit Test data, so that all data and columns are captured correctly, before importing via this tool.

### Respirator Fit Test Data Column Definitions

The following defines data and fields that may be imported using the Respirator Fit CSV API import tool. It is valuable to recognize the following terminology as it pertains to {{% system-name %}} systems:

- <strong>Partition</strong>: Partitions are used to organize groups of charts and with an MRN (medical record number) they uniquely identify the chart the data should go to. We recommend using this Partition column with the MRN column as the chart unique identifier; then the first name, middle name, last name, SSN, and DOB columns can be omitted from the spreadsheet.
- <strong>Test Date (this is a required field):</strong> MM/DD/YYYY format of the date of the performed Respirator Fit Test.
- <strong>Mask Type (this is a required field)</strong>: For reporting to be consistent, please identify a mask type that is already configured within your system.
- <strong>Mask Size:</strong> This is optional for the data import tool, but required if manually keying in Resp Fit data into a chart. Must identify a mask size name that is already configured within your system.
- <strong>Pass/Fail (this is a required field):</strong> Enter in if they passed or failed this fit testing.
- <strong>Retest Date:</strong> This is an optional column. This is the <em>Last Fit Expires</em> date, which is to be a future date signifying when this current fit test expires. If utilizing this column, the date must be a future date.
- <strong>Comments:</strong> is an optional column. Populate with any comments if needed.
- <strong>Fit Test Type:</strong> is an optional column but only accepts 2 choices of either: <strong>Quantitative</strong> or <strong>Qualitative. </strong> If this data is needed, you must have the full word <em>Quantitative</em> or the full word <em>Qualitative</em> for the import to be successful for this column.
- <strong>Encounter Order ID:</strong> is an optional column. Each system has a unique encounter order id code number in the system for a Respirator Fit Test order. If utilizing this column to also insert a completed order item in the system for a Respirator Fit Test, please find the specific order item code ID for what a Respirator Fit Test stores as in your system (your MIE Implementer can help you). By populating your system's unique encounter order ID for Resp Fit Test in this column, the system will import the respirator fit data into the chart, and it will also import a completed Respirator Fit Test order item in the chart. If the chart happened to have a pending or in progress Respirator Fit Test on their due list (regardless of its due date), this import (utilizing this column) would also mark the pending Respirator Fit due list item as ‘completed' status with a completed date being the same as the Test Date column. Therefore, use this column wisely and only if the resp fit data is current for health surveillance to complete.
- <strong>External ID (this is a required field):</strong> Must have a unique identifier in this column for the import to be successful. Recommend just using the same unique identifier (MRnumber) that you have in Column B for each row. Meaning, the data in column B and this external id column would be the same unique identifier per row.

### Respirator Fit Test Data Specifications

- {{% system-name %}} end user with administrative privileges
- Spreadsheet software for formatting the data file (e.g., Microsoft Excel or Google Sheets); data files must be formatted in Comma Separated Values (CSV)
- The first row of the file must contain column header information
- Each subsequent row represents an encounter order

## Create Respirator Fit Test Data CSV File

The following table provides optional or required **Field Names** and **Descriptions**, as indicated by the **Required** column. Items marked as O are Optional are not required and may be left blank, or omitted entirely. We recommend using Partition and MRN as the unique chart identifier to match the data to. Then the first name, middle name, last name, SSN, and DOB columns can be omitted from the spreadsheet.

![](./respirator-fit-data-csv-api-import-tool.assets/3505621dc9fb11cbf7857cf36fa5b9c0.png)

Using the table, above, determine the data to be imported. Starting with the PARTITION field, enter all required and desired data, verifying at minimum the required data is present. Note that each row represents a Respirator Fit Test data record. Below is a screenshot of the Respirator Fit Text sample example using Partition & MRN columns as the unique identifier (for helpful guidance):

![](./respirator-fit-data-csv-api-import-tool.assets/2f7c2bfa39efe0a4ee5905548435088d.png)

When done keying in the information into the templated spreadsheet, save it as a CSV file type. The {{% system-name %}} data import tool only supports importing CSV file type. _Note: you can also save as an excel file type to be able to make changes to, but when ready to import, it must be saved and uploaded as a_ **_CSV_** _file type as the only supported type._

## Upload Respirator Fit Test Data CSV File

Accessing the Data Import tool in the system requires security permissions.

Navigate to the Control Panel from the side menu and select the Data Import tab.

![](./respirator-fit-data-csv-api-import-tool.assets/fa5d875628c1142eff9bf1e72600a996.png)

Select **Respirator Fit Test Data CSV API** from the datavis listing and click **Upload Data** button.

![](./respirator-fit-data-csv-api-import-tool.assets/454ba8a34175fe33daeaa44173d18548.png)

Checkmark the **Verbose** item, keep the **Delimiter** as comma, then in the **CVS File** line, click the **Choose File** button, and browse to insert your Respirator Fit Test data CSV file (from earlier steps) and click **Upload File** button.

![](./respirator-fit-data-csv-api-import-tool.assets/fad9a83f0556ab7352f289e46da1b1cf.png)

For more detailed information on using the Data Import Tool options, please see the [Data Import Tab](data-import-tab.md) guide.

## Respirator Fit Test CSV Template Examples

The following examples are available:

[Downloadable CSV with example](https://docs.google.com/spreadsheets/d/1gRbT7ksHUvDXqjHijTF4ipHbyyRDruMgjjx8zbcHqWI/view?gid=0#gid=0)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

## Examples of imported data

Once the data has been imported, you can browse to an employee chart to their Respirator Info chart tab (found in their Health Surveillance chart tab). You will see the imported Respirator Fit Testing data in a list view.

### Example of Respirator Fit Testing that was Imported with ALL columns of the spreadsheet populated:

This is the maximum Respirator Fit Testing data you can import. This example shows data for all fields since we imported data from all columns that were _required_ **_and_\*** optional.\*

![](./respirator-fit-data-csv-api-import-tool.assets/7821f57f88b3f581de65184ceb182296.png)

### Example of Respirator Fit Testing that was Imported with ONLY the REQUIRED columns of the spreadsheet populated:

This is the minimum Respirator Fit Testing data you can import. This example shows data imported for only the _required_ fields using the data import method and without any optional columns of data in the respirator fit templated spreadsheet populated:

![](./respirator-fit-data-csv-api-import-tool.assets/9480aba82d36ed2f8c6183b0f2e7790a.png)

It's up to business decisions on what data to import to upload for Respirator Fit Tests, but there are minimum _required fields_ in the spreadsheet in order to be able to upload a successful file for respirator fit test data.

### Example of Encounter Order inserting a completed Respirator Fit Test order item:

This is utilizing the optional _encounter order id_ column with your system's specific unique order item code for respirator fit tests. This example shows a completed order for Respirator Fit Test being inserted as completed in the due list.

![](./respirator-fit-data-csv-api-import-tool.assets/c5325ae12827e6ec4a5f11503c48f0e1.png)

And this example shows a completed order for Respirator Fit Test being inserted as completed in the due list that completed a pending or in-progress Respirator Fit Test on the chart's due list (regardless of its pending or in-progress due date).

![](./respirator-fit-data-csv-api-import-tool.assets/0f0c975ed025d17b003ecd77e5df29c8.png)
