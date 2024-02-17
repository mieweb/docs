---
id: '1EeSZUgogLCUZD4CFQgP3qTtmhXuvTUbD9TY7toefUAQ'
title: 'Create Employees File for Import'
date: '2020-03-17T02:34:35.428Z'
version: 44
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/'
  - 'https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864'
  - 'https://drive.google.com/open?id=19oAQh3I8q7d0CHwpY5HKRCj-mKP_izNF82906OleF7A'
source: 'https://drive.google.com/open?id=1EeSZUgogLCUZD4CFQgP3qTtmhXuvTUbD9TY7toefUAQ'
wikigdrive: '028c9969b6de1b1821f0b338eb112d2421a13029'
---
This document explains how to import your existing employees into {{% system-name %}} .  
What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Employees CSV File Example
{{% system-name %}}*  end user with administrative rights


## Create Employees CSV File


1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.



<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>Employee ID</td>
<td>This field will be used for looking up the chart to insert or update.</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>Birth Date</td>
<td>Employee Date of Birth. Date format should be YYYYMMDD or MM/DD/YYYY.</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>Last Name</td>
<td>Employee Last Name</td>
<td><strong>Required</strong></td>
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
<td>The ID used at Check-In kiosks. This is typically the number from an ID card or RFID chip, used at the Check-In kiosk, in a clinic waiting room. <strong>If Check-In kiosks are part of the </strong><strong><em>{{% sys-name %}}</em></strong><strong> deployment, this field is required</strong>. Otherwise, this field should be skipped.</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Supervisor ID</td>
<td>Supervisor Employee ID</td>
<td>Best Practice</td>
</tr>

</table>

{{% tip %}}  
*For a more comprehensive list of supported fields, please refer to the* [Human Resources Feed Fields Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/).  
{{% /tip %}}

2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Employees CSV File Example for guidance.


![](../create-employees-file-for-import.assets/2d05f4c44ef780bc0363fc29940928d4.png)


3. Save the file as CSV format.


## Upload Employees CSV File


1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.


![](../create-employees-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)


3. Select the Data Import tab.


![](../create-employees-file-for-import.assets/197af282190b350e97494ffba0636d29.png)


4. Select Chart Data CSV API from the drop-down menu and click Go.


![](../create-employees-file-for-import.assets/184adff065510b3014a3b5f0a44c0f4b.png)


5. Select the Employees CSV File and click Upload.


![](../create-employees-file-for-import.assets/812d200f86320e164fda882c04c16eed.png)

{{% tip %}}
*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}

## Resources


* [Human Resources Feed Fields Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/)
* [Employees CSV File Example](https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864)
* [Validation script for Employee demographics](https://drive.google.com/open?id=19oAQh3I8q7d0CHwpY5HKRCj-mKP_izNF82906OleF7A)


## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
