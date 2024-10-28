---
id: '1HqpJEWK2WrRidkl5PKrpMid0yKcpm0tmXROdW5jZ0HQ'
title: 'Device Interface - VeriPRO Hearing Fit'
date: '2024-10-28T18:00:23.285Z'
version: 9
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1HqpJEWK2WrRidkl5PKrpMid0yKcpm0tmXROdW5jZ0HQ'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
This interface uses the VeriPRO database export functionality to save the results to a CSV file that is uploaded to {{% system-name %}}

# Import Instructions

* Perform the test in the VeriPRO software.
* Use the Export Data feature in the VeriPRO software.
    * Select the start and end date ranges.
    * Select the Export a CSV file radio button
    * Click the Export button
* In {{% system-name %}} navigate to the VeriPRO upload screen
* Select the file from the Export
* Click the Upload button

# Collected Fields

The following fields are collected

* Test Date/Time
* Test location (Expects description in VeriPRO software to match description of {{% system-name %}} location)
* Test Type
* Published Attenuation
* Retest Reliability
* Earplug Name
* Exposure DBA
* Left Attenuation (250Hz, 500Hz, 1000Hz, 2000Hz, 4000Hz)
* Left PAR
* Right Attenuation (250Hz, 500Hz, 1000Hz, 2000Hz, 4000Hz)
* Right PAR
* PEL
* SEL

# Installation Help

This interface is not accessible in our out of the box system.  To add it, a link to the following layout needs to be added: ?f=layout&module=MIEDevice&name=Veripro%20Upload&tabmodule=+

This could either be a control panel tab, a side menu entry, added to the Devices portlet, or another convenient location for users.
