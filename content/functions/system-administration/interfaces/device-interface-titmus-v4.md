---
id: '1MqVltFMwAvH2R5x6vhUqekj8fdzyW6dWcLseooVtdCo'
title: 'Device Interface - Titmus V4'
date: '2020-02-27T21:33:11.490Z'
version: 37
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'installing-mie-device-app.md'
source: 'https://drive.google.com/open?id=1MqVltFMwAvH2R5x6vhUqekj8fdzyW6dWcLseooVtdCo'
wikigdrive: '37774c813cb40b3c0329e2e7ebc29deda8058d16'
---
This page provides instructions for interfacing the Titmus V4 Vision Screener with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable.

{{% note %}}
Be sure to install the required applications for optimal functionality. The device interface uses the [MIE Device App](installing-mie-device-app.md) to communicate with {{% system-name %}} .
{{% /note %}}

## Setup & Installation

The Titmus V4 Screener device interface uses the Titmus Software, which will need to be configured to save a file upon completion of each vision test. To configure the software, perform the following:

1. Open the Titmus Software.
2. Click the Config icon.
3. Click <strong>Integration</strong>.

    ![](../device-interface-titmus-v4.assets/8a758c8584409246dba9adbddffe4871.png)
4. Select <strong>Vision (out)</strong> by placing a check in the corresponding box.

    ![](../device-interface-titmus-v4.assets/a75837f5c3012c29cbfdfee849b239e3.png)
5. Expand the list under Integration and select <strong>File</strong>.

    ![](../device-interface-titmus-v4.assets/115d882247d17291e2fdd6d240c6b133.png)
6. Provide the location where the vision export files will be saved (e.g., C:/Users/Public/Test/vision-.csv). This location will also need to be configured in the [MIE Device App](installing-mie-device-app.md).

    ![](../device-interface-titmus-v4.assets/0f43ae8d7fe3415c3db5d4df68d8f1d6.png)
7. Click <strong>Apply</strong>.
8. Click <strong>Close</strong>.

## Collected Data Fields

The following data fields are collected in {{% system-name %}} using the Titmus V4 Vision Screener:
<table>
<tr>
<td>Corrected</td>
<td>Uncorrected</td>
</tr>
<tr>
<td>Binocularity (far)</td>
<td>Binocularity (far)</td>
</tr>
<tr>
<td>Acuity/B (far)</td>
<td>Acuity/B (far)</td>
</tr>
<tr>
<td>Acuity/L (far)</td>
<td>Acuity/L (far)</td>
</tr>
<tr>
<td>Acuity/R (far)</td>
<td>Acuity/R (far)</td>
</tr>
<tr>
<td>Depth (far)</td>
<td>Depth (far)</td>
</tr>
<tr>
<td>Color (far)</td>
<td>Color (far)</td>
</tr>
<tr>
<td>Phoria Lateral (far)</td>
<td>Phoria Lateral (far)</td>
</tr>
<tr>
<td>Phoria Vertical (far)</td>
<td>Phoria Vertical (far)</td>
</tr>
<tr>
<td>Binocularity (near)</td>
<td>Binocularity (near)</td>
</tr>
<tr>
<td>Acuity/B (near)</td>
<td>Acuity/B (near)</td>
</tr>
<tr>
<td>Acuity/L (near)</td>
<td>Acuity/L (near)</td>
</tr>
<tr>
<td>Acuity/R (near)</td>
<td>Acuity/B (near)</td>
</tr>
<tr>
<td>Phoria Lateral (near)</td>
<td>Phoria Lateral (near)</td>
</tr>
<tr>
<td>Phoria Vertical (near)</td>
<td>Phoria Lateral (near)</td>
</tr>
<tr>
<td>Peripheral</td>
</tr>
<tr>
<td>Peripheral Vision (L Degree) - Nasal</td>
<td>Peripheral Vision (R Degree) - Nasal</td>
</tr>
</table>

## Using the Device Interface

1. While in a chart, add a <strong>Vision Screening</strong> order to the Due List.

    ![](../device-interface-titmus-v4.assets/117b52c34295a675575015f074bf254b.png)
2. While in the encounter, add the <strong>Vision Screening</strong> order to the exam from the Tests & Procedures section.

    ![](../device-interface-titmus-v4.assets/cfbb0bdd7b358c3623ab484c11503764.png)
3. In the Vision Screening section, click the <strong>Automatic</strong> link.

    ![](../device-interface-titmus-v4.assets/083fe93049f76fead26ea21eea4bf8d4.png)
4. Click the <strong>Titmus V4</strong> button.
5. Perform test in the Titmus Software as instructed in the device operation manual.
6. After completed, the results will be automatically uploaded to {{% system-name %}} and the Vision Screening section will update with the results.

    ![](../device-interface-titmus-v4.assets/171deb438bf9d92651ffd14d8369021f.png)
