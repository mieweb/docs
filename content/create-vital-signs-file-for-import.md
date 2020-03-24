---
title: "Create Vital Signs File for Import"
date: 2020-03-17T02:50:33.797Z
url: "create-vital-signs-file-for-import.md"
author: Jeremia Ploor
id: 1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU
source: https://drive.google.com/open?id=1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU
menu:
    main:
        name: "Create Vital Signs File for Import"
        identifier: "1SsFJhFp4cUoRKLIULnvccNLyYB7TpnevOHj4EJMwSJU"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4780
---
This document explains how to import historical vital signs for employees into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Vital Signs CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Vital Signs CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>Field Name</td>
    <td>Description</td>
    <td>Requirement</td>
    <td>Data File Header</td>
  </tr>
  <tr>
    <td>Employee ID</td>
    <td>Employee Identifier. This field will be used for looking up the chart in ,{{% system-name %}}, , to insert or update.</td>
    <td>Required</td>
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
,F, = Fahrenheit
,C, = Celsius</td>
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
,in, = Inches
,cm, = Centimeters</td>
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
,lbs, = Pounds
,kg, = Kilograms</td>
    <td>Optional</td>
    <td>@obs.BODY HEIGHT.obs_units</td>
  </tr>
  <tr>
    <td>BMI</td>
    <td>Provide a numeric value for Body Mass Index (e.g., 22.45). ,

{{% warning %}}, This is not automatically calculated during an import. ,{{% /warning %}}
</td>
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
,Left Arm
,Right Arm
,Left Leg
,Right Leg</td>
    <td>Best Practice</td>
    <td>@obs.BP Site.obs_result</td>
  </tr>
  <tr>
    <td>Position</td>
    <td>The position of the patient when the BP was collected. Valid choices are:
,Sitting
,Standing
,Supine</td>
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
,Regular
,Irregular</td>
    <td>Best Practice</td>
    <td>@obs.Pulse Regularity.obs_result</td>
  </tr>
  <tr>
    <td>Pulse Site</td>
    <td>Location where pulse was taken. Valid choices are:
,Radial
,Apical
,Brachial
,Carotid
,Femoral
,Pedal</td>
    <td>Best Practice</td>
    <td>@obs.Pulse Site.obs_result</td>
  </tr>
  <tr>
    <td>O2 Saturation</td>
    <td>Provide a numeric value for Oxygen Saturation percentage (e.g., 96 or 98.5). ,

{{% note %}}, Do not provide the percentage sign (%). ,{{% /note %}}
</td>
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
,Resting
,Immediately after exertion
,1 minute after exertion
,2 minute after exertion
,3 minute after exertion
,Sleeping</td>
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

*For a more comprehensive list of supported fields, please refer to the *[Vital Signs CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/)*.*

{{% /tip %}}


2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an employee record. Below is a screenshot of the Vital Signs CSV File Example for guidance.



![](external_files/c38a3b1a90978270fae4e78f9541a92b.png)



3. Save the file as CSV format.

## Upload Vital Signs CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.



![](external_files/f7321acaa475d389413c8960f680181a.png)



3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.



![](external_files/6ad90004bcde1af68316b8ca0dc908ba.png)



4. Select <strong>Chart Data CSV API</strong> from the drop-down menu and click <strong>Go</strong>.



![](external_files/c2dae99efdec3e52fd697f3eea7e3abe.png)



5. Select the Vital Signs CSV File and click <strong>Upload</strong>.  ![](external_files/9a0563b4e22b891467a5929bf13ae6e6.png) 

{{% tip %}}

*For extra information on what happens during the import, click the ***_Verbose_*** checkbox.*

{{% /tip %}}


## Resources

* [Vital Signs CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/)
* [Vital Signs CSV File Example](https://docs.google.com/spreadsheets/d/1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io/export?format=csv&id=1KrmKIr6O7vjd3hfCXfvQKqWRKZ_kR0D1YgueuNTu9io&gid=1493638641)
* [Validation script for Vital Signs data](https://docs.google.com/document/d/1UA53nQOJPu142NGkHcT3HL0OS7swlXeitivY7sV2rPo)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

