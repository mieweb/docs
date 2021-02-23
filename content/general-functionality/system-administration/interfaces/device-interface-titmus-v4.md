---
title: "Device Interface - Titmus V4"
date: 2020-02-27T21:33:11.490Z
url: "general-functionality/system-administration/interfaces/device-interface-titmus-v4.html"
author: aquandt
version: 26
id: 1MqVltFMwAvH2R5x6vhUqekj8fdzyW6dWcLseooVtdCo
source: https://drive.google.com/open?id=1MqVltFMwAvH2R5x6vhUqekj8fdzyW6dWcLseooVtdCo
menu:
    main:
        name: "Device Interface - Titmus V4"
        identifier: "1MqVltFMwAvH2R5x6vhUqekj8fdzyW6dWcLseooVtdCo"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5600
---
This page provides instructions for interfacing the Titmus V4 Vision Screener with the {{% system-name %}} system. Lists of the fields and results the interface retrieves are provided, and instructions for installing required applications for functionality are linked, where applicable. 

{{% note %}}

Be sure to install the required applications for optimal functionality. The device interface uses the [MIE Device App](installing-mie-device-app.html) to communicate with {{% system-name %}} .

{{% /note %}}


## Setup & Installation

The Titmus V4 Screener device interface uses the Titmus Software, which will need to be configured to save a file upon completion of each vision test. To configure the software, perform the following:

* Open the Titmus Software.   
* Click the Config icon.   
* Click <strong>Integration</strong>.  ![](../../../external_files/0b604b00c890dbb515416af417accd92.png)   
* Select <strong>Vision (out)</strong> by placing a check in the corresponding box.  ![](../../../external_files/f5fd57e8845622a28b8cf0b78b4f1980.png)   
* Expand the list under Integration and select <strong>File</strong>.  ![](../../../external_files/4fca17b9ba63b601b180a2da3a335d8d.png)   
* Provide the location where the vision export files will be saved (e.g., C:/Users/Public/Test/vision-.csv). This location will also need to be configured in the [MIE Device App](installing-mie-device-app.html).  ![](../../../external_files/b634e7eb1b4e0163e431470e52735e15.png)   
* Click <strong>Apply</strong>.   
* Click <strong>Close</strong>.

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
    <td colspan="2">Peripheral</td>
  </tr>
  <tr>
    <td>Peripheral Vision (L Degree) - Nasal</td>
    <td>Peripheral Vision (R Degree) - Nasal</td>
  </tr>
</table>

## Using the Device Interface

* While in a chart, add a <strong>Vision Screening</strong> order to the Due List.  ![](../../../external_files/bd458f5bee089fcc102e4697ce9673d1.png)   
* While in the encounter, add the <strong>Vision Screening</strong> order to the exam from the Tests & Procedures section.  ![](../../../external_files/34122fe028ef7f79b279360300d68f25.png)   
* In the Vision Screening section, click the <strong>Automatic</strong> link.  ![](../../../external_files/54fc17a60bfe31fdcb908a7c1b282ee6.png)   
* Click the <strong>Titmus V4</strong> button.   
* Perform test in the Titmus Software as instructed in the device operation manual.   
* After completed, the results will be automatically uploaded to {{% system-name %}} and the Vision Screening section will update with the results.  ![](../../../external_files/d4204100c9460f0d20322b3a837628f5.png)
