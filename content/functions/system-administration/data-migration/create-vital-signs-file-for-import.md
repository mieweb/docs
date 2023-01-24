---
id: '1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU'
title: 'Create Vital Signs File for Import'
date: '2020-03-17T02:50:33.797Z'
version: 35
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
  - 'https://docs.google.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/export?format=csv&id=1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io&gid=1493638641'
  - 'https://drive.google.com/open?id=1UA53nQOJPu142NGkHcT3HL0OS7swlXeitivY7sV2rPo'
source: 'https://drive.google.com/open?id=1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Create Vital Signs File for Import'
    identifier: '1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4780
---
This document explains how to import historical vital signs for employees into {{% system-name %}} .  
What you will need:
* Spreadsheet software (Microsoft Excel or Google Sheets)
* Vital Signs CSV File Example
{{% system-name %}}*  end user with administrative rights
  
## Create Vital Signs CSV File  

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.


<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
<td>Data File Header</td>
</tr>
<tr>
<td>Employee ID</td>
<td>Employee Identifier. This field will be used for looking up the chart in {{% system-name %}} , to insert or update.</td>
<td><strong>Required</strong></td>
<td>patients.id</td>
</tr>
<tr>
<td>Test Datetime</td>
<td>Datetime vital signs were recorded. Must be in YYYY-MM-DD HH:MM:SS format.</td>
<td>Best Practice</td>
<td>@obs.*.observed_datetime</td>
</tr>
<tr>
<td>Temperature</td>
<td>Degree of hotness or coldness of the body. Provide a numeric value (e.g., 98.6 or 101).</td>
<td>Best Practice</td>
<td>@obs.BODY TEMPERATURE.obs_result</td>
</tr>
<tr>
<td>Temperature Units</td>
<td>Default units are determined by the Preferred Unit System user setting, or they can be overridden. Choices are:
<ul><li><ul><li><p><strong>F</strong> = Fahrenheit</p></li><li><p><strong>C</strong> = Celsius</p></li></ul></li></ul></td>
<td>Optional</td>
<td>@obs.BODY TEMPERATURE.obs_units</td>
</tr>
<tr>
<td>Height</td>
<td>Measurement from head to foot of a standing person. Provide a numeric value (e.g., 72).</td>
<td>Best Practice</td>
<td>@obs.BODY HEIGHT.obs_result</td>
</tr>
<tr>
<td>Height Units</td>
<td>Default units are determined by the Preferred Unite System user setting, or they can be overridden. Choices are:
<ul><li><ul><li><p><strong>in</strong> = Inches</p></li><li><p><strong>cm</strong> = Centimeters</p></li></ul></li></ul></td>
<td>Optional</td>
<td>@obs.BODY HEIGHT.obs_units</td>
</tr>
<tr>
<td>Weight</td>
<td>The heaviness of a person. Provide a numeric value (e.g., 150).</td>
<td>Best Practice</td>
<td>@obs.BODY WEIGHT.obs_result</td>
</tr>
<tr>
<td>Weight Units</td>
<td>Default units are determined by the Preferred Unite System user setting, or they can be overridden. Choices are:
<ul><li><ul><li><p><strong>lbs</strong> = Pounds</p></li><li><p><strong>kg</strong> = Kilograms</p></li></ul></li></ul></td>
<td>Optional</td>
<td>@obs.BODY HEIGHT.obs_units</td>
</tr>
<tr>
<td>BMI</td>
<td>Provide a numeric value for Body Mass Index (e.g., 22.45).
{{% warning %}}
This is not automatically calculated during an import.
{{% /warning %}}</td>
<td>Best Practice</td>
<td>@obs.BMI.obs_result</td>
</tr>
<tr>
<td>Systolic BP</td>
<td>Supply a numeric value for Systolic Blood Pressure.</td>
<td>Best Practice</td>
<td>@obs.Systolic BP.obs_result</td>
</tr>
<tr>
<td>Diastolic BP</td>
<td>Supply a numeric value for Diastolic Blood Pressure.</td>
<td>Best Practice</td>
<td>@obs.Diastolic BP.obs_result</td>
</tr>
<tr>
<td>BP Site</td>
<td>Body part from which blood pressure was taken. Valid choices are:
<ul><li><ul><li><p>Left Arm</p></li><li><p>Right Arm</p></li><li><p>Left Leg</p></li><li><p>Right Leg</p></li></ul></li></ul></td>
<td>Best Practice</td>
<td>@obs.BP Site.obs_result</td>
</tr>
<tr>
<td>Position</td>
<td>The position of the patient when the BP was collected. Valid choices are:
<ul><li><ul><li><p>Sitting</p></li><li><p>Standing</p></li><li><p>Supine</p></li></ul></li></ul></td>
<td>Best Practice</td>
<td>@obs.Position.obs_result</td>
</tr>
<tr>
<td>Heart Rate</td>
<td>Provide a numeric value for Heart Rate as beats per minute (bpm).</td>
<td>Best Practice</td>
<td>@obs.HEART RATE.obs_result</td>
</tr>
<tr>
<td>Pulse Regularity</td>
<td>Pulse regularity choices:
<ul><li><ul><li><p>Regular</p></li><li><p>Irregular</p></li></ul></li></ul></td>
<td>Best Practice</td>
<td>@obs.Pulse Regularity.obs_result</td>
</tr>
<tr>
<td>Pulse Site</td>
<td>Location where pulse was taken. Valid choices are:
<ul><li><ul><li><p>Radial</p></li><li><p>Apical</p></li><li><p>Brachial</p></li><li><p>Carotid</p></li><li><p>Femoral</p></li><li><p>Pedal</p></li></ul></li></ul></td>
<td>Best Practice</td>
<td>@obs.Pulse Site.obs_result</td>
</tr>
<tr>
<td>O2 Saturation</td>
<td>Provide a numeric value for Oxygen Saturation percentage (e.g., 96 or 98.5).
{{% note %}}
Do not provide the percentage sign (%).
{{% /note %}}</td>
<td>Best Practice</td>
<td>@obs.O2 Saturation.obs_result</td>
</tr>
<tr>
<td>Respiration Rate</td>
<td>Provide a numeric value for Respiration Rate as breaths per minute.</td>
<td>Best Practice</td>
<td>@obs.RESPIRATION RATE.obs_result</td>
</tr>
<tr>
<td>Exertion</td>
<td>Specific exertion, as it relates to the respiration rate. Valid choices are:
<ul><li><ul><li><p>Resting</p></li><li><p>Immediately after exertion</p></li><li><p>1 minute after exertion</p></li><li><p>2 minute after exertion</p></li><li><p>3 minute after exertion</p></li><li><p>Sleeping</p></li></ul></li></ul></td>
<td>Best Practice</td>
<td>@obs.Exertion.obs_result</td>
</tr>
<tr>
<td>Pain Severity</td>
<td>Provide a whole number from 0-10. 0 is no pain, and 10 is extreme pain.</td>
<td>Best Practice</td>
<td>@obs.Pain Severity.obs_result</td>
</tr>

</table>

{{% tip %}}
*For a more comprehensive list of supported fields, please refer to the* [*Vital Signs CSV API Specification*](https://docs.google.com/a/mieweb.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/)*.*
{{% /tip %}}

1. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Vital Signs CSV File Example for guidance.

  
![](../create-vital-signs-file-for-import.assets/220c6cd9fc584a66eedbaa12c67d0238.png)  


2. Save the file as CSV format.
  
## Upload Vital Signs CSV File  

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.

  
![](../create-vital-signs-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)  


3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.

  
![](../create-vital-signs-file-for-import.assets/197af282190b350e97494ffba0636d29.png)  


4. Select <strong>Chart Data CSV API</strong> from the drop-down menu and click <strong>Go</strong>.

  
![](../create-vital-signs-file-for-import.assets/184adff065510b3014a3b5f0a44c0f4b.png)  


5. Select the Vital Signs CSV File and click <strong>Upload</strong>.

   <img src="../create-vital-signs-file-for-import.assets/812d200f86320e164fda882c04c16eed.png" />

{{% tip %}}

*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}
  
## Resources  

* [Vital Signs CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/)
* [Vital Signs CSV File Example](https://docs.google.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/export?format=csv&id=1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io&gid=1493638641)
* [Validation script for Vital Signs data](https://drive.google.com/open?id=1UA53nQOJPu142NGkHcT3HL0OS7swlXeitivY7sV2rPo)
  
## Troubleshooting  

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
