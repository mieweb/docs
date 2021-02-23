---
title: "Create Audiometric Data File for Import"
date: 2020-03-17T02:43:45.578Z
url: "general-functionality/system-administration/data-migration/create-audiometric-data-file-for-import.html"
version: 37
id: 1pqlmPPQPZeiKt_N7XDccPfdFT5zLskxOKriIx-Nc8W4
source: https://drive.google.com/open?id=1pqlmPPQPZeiKt_N7XDccPfdFT5zLskxOKriIx-Nc8W4
menu:
    main:
        name: "Create Audiometric Data File for Import"
        identifier: "1pqlmPPQPZeiKt_N7XDccPfdFT5zLskxOKriIx-Nc8W4"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4760
---
This document explains how to import your historical audiometric testing data into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Audiometric Data CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Audiometric Data CSV File

* The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>**Field Name**</td>
    <td>**Description**</td>
    <td>**Requirement**</td>
    <td>Data File Column Header</td>
  </tr>
  <tr>
    <td>Employee ID</td>
    <td>This identifier will be used for looking up the chart in {{% system-name %}} , to insert or update, and must match an Employee ID from the Employee Demographic Import specification.</td>
    <td>**Required**</td>
    <td>documents.pat_id</td>
  </tr>
  <tr>
    <td>External ID</td>
    <td>This is used for {{% system-name %}} systems. Typically this is the auto incrementing column from the legacy DB or populated by third-party interfaces.</td>
    <td>**Required**</td>
    <td>documents.ext_doc_id</td>
  </tr>
  <tr>
    <td>Test Datetime</td>
    <td>When the test was conducted (datetime), in YYYY-MM-DD HH:MM:SS format.</td>
    <td>**Required**</td>
    <td>audio.test_datetime</td>
  </tr>
  <tr>
    <td>Left 500 Hz</td>
    <td>Result for the left ear 500 Hz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left05</td>
  </tr>
  <tr>
    <td>Left 1 kHz</td>
    <td>Result for the left ear 1 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left1</td>
  </tr>
  <tr>
    <td>Left 2 kHz</td>
    <td>Result for the left ear 2 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left2</td>
  </tr>
  <tr>
    <td>Left 3 kHz</td>
    <td>Result for the left ear 3 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left3</td>
  </tr>
  <tr>
    <td>Left 4 kHz</td>
    <td>Result for the left ear 4 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left4</td>
  </tr>
  <tr>
    <td>Left 6 kHz</td>
    <td>Result for the left ear 6 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left6</td>
  </tr>
  <tr>
    <td>Left 8 kHz</td>
    <td>Result for the left ear 8 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.left8</td>
  </tr>
  <tr>
    <td>Right 500 Hz</td>
    <td>Result for the right ear 500 Hz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right05</td>
  </tr>
  <tr>
    <td>Right 1 kHz</td>
    <td>Result for the right ear 1 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right1</td>
  </tr>
  <tr>
    <td>Right 2 kHz</td>
    <td>Result for the right ear 2 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right2</td>
  </tr>
  <tr>
    <td>Right 3 kHz</td>
    <td>Result for the right ear 3 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right3</td>
  </tr>
  <tr>
    <td>Right 4 kHz</td>
    <td>Result for the right ear 4 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right4</td>
  </tr>
  <tr>
    <td>Right 6 kHz</td>
    <td>Result for the right ear 6 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right6</td>
  </tr>
  <tr>
    <td>Right 8 kHz</td>
    <td>Result for the right ear 8 kHz test in dB.</td>
    <td>Best Practice</td>
    <td>audio.right8</td>
  </tr>
  <tr>
    <td>Left STS</td>
    <td>Standard threshold shift from last baseline test for the left ear. Options include: **Yes** or **No**.</td>
    <td>Best Practice</td>
    <td>audio.left_sts</td>
  </tr>
  <tr>
    <td>Right STS</td>
    <td>Standard threshold shift from last baseline test for the right ear. Options include: **Yes** or **No**.</td>
    <td>Best Practice</td>
    <td>audio.right_sts</td>
  </tr>
  <tr>
    <td>Left Baseline</td>
    <td>Flags the test as a baseline for the left ear. Options include: **Yes** or **No**.</td>
    <td>Best Practice</td>
    <td>audio.left_baseline</td>
  </tr>
  <tr>
    <td>Right Baseline</td>
    <td>Flags the test as a baseline for the right ear. Options include: **Yes** or **No**.</td>
    <td>Best Practice</td>
    <td>audio.right_baseline</td>
  </tr>
  <tr>
    <td>Calibration Date</td>
    <td>Records the last date (datetime) the audiometer was calibrated, YYYY-MM-DD HH:MM:SS format.</td>
    <td>Best Practice</td>
    <td>audio.calibration_date</td>
  </tr>
  <tr>
    <td>Comment</td>
    <td>Free text comment regarding the test. Multiple comments may be specified. They will be separated by newlines in the comments section of the audiogram.</td>
    <td>Optional</td>
    <td>audio.comment</td>
  </tr>
</table>

 

{{% tip %}} *For a more comprehensive list of supported fields, please refer to the *[Audiometric Data CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/). {{% /tip %}}


* Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents an audiometric testing record. Below is a screenshot of the Audiometric Data CSV File Example for guidance.



![](../../../external_files/f53960a55f921a0d22c3bf62afc73c4c.png)  ![](../../../external_files/d047d52a405895f5837b79dcae4a8ee2.png)

* Save the file as CSV format.

## Upload Audiometric Data CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.



![](../../../external_files/f7321acaa475d389413c8960f680181a.png)



3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.



![](../../../external_files/6ad90004bcde1af68316b8ca0dc908ba.png)



4. Select <strong>Audiometric Data CSV API</strong> from the drop-down menu and click <strong>Go</strong>.



![](../../../external_files/5b68d1dd8a646804df3053bc2c5f1253.png)



5. Select the Audiometric Data CSV File and click <strong>Upload</strong>.    ![](../../../external_files/6f91603a0b84f1a6ee2779cac26e1049.png)



{{% tip %}}

*For extra information on what happens during the import, click the ***_Verbose_*** checkbox.*

{{% /tip %}}


## Resources

* [Audiometric Data CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/)
* [Audiometric Data CSV File Example](https://docs.google.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/export?format=csv&id=12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4&gid=876799365)
* [Validation Script for Audiometric Data](https://drive.google.com/open?id=1eUZciZBJx6E4HZ61k9sBS1T1WKU9-6DT2O0mch4K6DU)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

