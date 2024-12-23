---
id: '10Ed-C3AniSwIiqbe_FDqBIm5JTId6oZGVCvKHifAplg'
title: 'Device Interface - Depisteo VT1'
date: '2024-10-01T14:04:10.624Z'
version: 84
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'http://confluence.mieweb.com/display/MIEDeviceApp/Installing+MIE+Device+App'
source: 'https://drive.google.com/open?id=10Ed-C3AniSwIiqbe_FDqBIm5JTId6oZGVCvKHifAplg'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
This page provides instructions for interfacing the Depisteo VT1 with the {{% system-name%}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable.

{{% note %}}
Be sure to install the required applications for optimal functionality. The device interface uses the[](http://confluence.mieweb.com/display/MIEDeviceApp/Installing+MIE+Device+App)[MIE Device App](http://confluence.mieweb.com/display/MIEDeviceApp/Installing+MIE+Device+App) to communicate with {{% system-name %}}.
{{% /note %}}

## Collected Data Fields

The following data fields are collected in {{% system-name %}} using the Depisteo VT1:
<table>
<tr>
<td>Acuity/B (far)</td>
<td>Acuity/B (near)</td>
</tr>
<tr>
<td>Acuity/L (far)</td>
<td>Acuity/L (near)</td>
</tr>
<tr>
<td>Acuity/R (far)</td>
<td>Acuity/R (near)</td>
</tr>
<tr>
<td>Depth (far)</td>
<td>Fusion</td>
</tr>
<tr>
<td>Acuity/B (Mesopic)</td>
<td>Depth Perception</td>
</tr>
<tr>
<td>Acuity/B (Hypemetropia)</td>
<td>Decreasing Contrast</td>
</tr>
<tr>
<td>Acuity/L (Hypemetropia)</td>
<td>Amsler/R</td>
</tr>
<tr>
<td>Acuity/R (Hypemetropia)</td>
<td>Amsler/L</td>
</tr>
<tr>
<td>Color/B</td>
<td>Astigmatism/L</td>
</tr>
<tr>
<td>Color/L</td>
<td>Astigmatism/R</td>
</tr>
<tr>
<td>Color/R</td>
<td>Peripheral Vision</td>
</tr>
</table>

For clients on RC202309 and newer, the Depisteo Vision Screener interface will also report failed results in addition to the normal correct results. In addition, results will be mapped with an observation of corrected or uncorrected values. Also, if a device translation does not exist for the device user, the author of the document will be saved as the logged in user. Additional information regarding the patient's eye history will be saved in the request comments and Color vision test results will now show if the patient failed a specific color.

## Using the Device Interface

1. A Vision Screening can be added to the chart from the Due List chart tab. Simply use the autocomplete to select it and click the <strong>Add</strong> button.

![](../device-interface-depisteo-vt1.assets/6aafadc277b3dcdb866bcf2f1e1a0b7f.png)

2. From the encounter, add the Vision Screening to the exam using the Tests & Procedures section. Select the test/procedure and click the <strong>Add to Exam</strong> button.

![](../device-interface-depisteo-vt1.assets/07562c6dab067023daff72a673c76248.png)

3. After adding it to the exam, open the Vision Screening section and click the <strong>Automatic</strong> link.

![](../device-interface-depisteo-vt1.assets/08467d1ea70de1dc0d7e96b15eefb4b7.png)

4. To initiate interfacing, click the <strong>Depisteo VT1</strong> button.
5. Perform testing with the Depisteo Software as instructed in the device's operation manual.
6. Save the test in Depisteo, and the results will automatically be uploaded into {{% system-name %}}.
