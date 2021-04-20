---
title: "Create Employees File for Import"
date: "2020-03-17T02:34:35.428Z"
url: "functions/system-administration/data-migration/create-employees-file-for-import.html"
version: 35
id: "1EeSZUgogLCUZD4CFQgP3qTtmhXuvTUbD9TY7toefUAQ"
source: "https://drive.google.com/open?id=1EeSZUgogLCUZD4CFQgP3qTtmhXuvTUbD9TY7toefUAQ"
menu:
    main:
        name: "Create Employees File for Import"
        identifier: "1EeSZUgogLCUZD4CFQgP3qTtmhXuvTUbD9TY7toefUAQ"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4720
---
This document explains how to import your existing employees into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Employees CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Employees CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>**Field Name**</td>
    <td>**Description**</td>
    <td>**Requirement**</td>
  </tr>
  <tr>
    <td>Employee ID</td>
    <td>This field will be used for looking up the chart to insert or update.</td>
    <td>**Required**</td>
  </tr>
  <tr>
    <td>Birth Date</td>
    <td>Employee Date of Birth. Date format should be YYYYMMDD or MM/DD/YYYY.</td>
    <td>**Required**</td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td>Employee Last Name</td>
    <td>**Required**</td>
  </tr>
  <tr>
    <td>First Name</td>
    <td>Employee First Name</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Email Address</td>
    <td>Employee Email Address</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Position Title</td>
    <td>Employee Job Title</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Employee Work Status</td>
    <td>Employee Status (See Specification for Valid Codes)</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>SSO ID / Username</td>
    <td>Username used for Patient Portal / Single Sign-on (SSO)</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Badge ID</td>
    <td>The ID used at Check-In kiosks. This is typically the number from an ID card or RFID chip, used at the Check-In kiosk, in a clinic waiting room. **If Check-In kiosks are part of the **{{% sys-name %}}** deployment, this field is required**. Otherwise, this field should be skipped.</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Supervisor ID</td>
    <td>Supervisor Employee ID</td>
    <td>Best Practice</td>
  </tr>
</table>

 

{{% tip %}} *For a more comprehensive list of supported fields, please refer to the* [Human Resources Feed Fields Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/). {{% /tip %}}


2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Employees CSV File Example for guidance.



![](create-employees-file-for-import.images/image5.png)



3. Save the file as CSV format.

## Upload Employees CSV File

1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.



![](create-employees-file-for-import.images/image4.png)



3. Select the Data Import tab.



![](create-employees-file-for-import.images/image1.png)



4. Select Chart Data CSV API from the drop-down menu and click Go.



![](create-employees-file-for-import.images/image2.png)



5. Select the Employees CSV File and click Upload.



![](create-employees-file-for-import.images/image3.png) 

{{% tip %}}

*For extra information on what happens during the import, click the ***_Verbose_*** checkbox.*

{{% /tip %}}


## Resources

* [Human Resources Feed Fields Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/)
* [Employees CSV File Example](https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864)
* [Validation script for Employee demographics](https://drive.google.com/open?id=19oAQh3I8q7d0CHwpY5HKRCj-mKP_izNF82906OleF7A)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

