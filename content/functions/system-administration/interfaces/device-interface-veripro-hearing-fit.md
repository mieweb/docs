---
id: '1HqpJEWK2WrRidkl5PKrpMid0yKcpm0tmXROdW5jZ0HQ'
title: 'Device Interface - VeriPRO Hearing Fit'
date: '2024-10-29T16:41:11.835Z'
version: 52
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1HqpJEWK2WrRidkl5PKrpMid0yKcpm0tmXROdW5jZ0HQ'
wikigdrive: '09e37def9271cd982804f575ee70401ad07a0a3f'
---
This interface uses the VeriPRO database export functionality to save the results to a CSV file that is uploaded to {{% system-name %}}

# Import Instructions

* Perform the test in the VeriPRO software.
* Use the Export Data feature in the VeriPRO software.
    * Select the start and end date ranges.
    * Select the Export a CSV file radio button
    * Click the Export button

![](../device-interface-veripro-hearing-fit.assets/13a397fb6476f79b653eaf64d33e412a.png)

* In {{% system-name %}} navigate to the VeriPRO upload screen

![](../device-interface-veripro-hearing-fit.assets/9f8df0726739874a5d221306a57b6442.png)

* Select the file from the Export

![](../device-interface-veripro-hearing-fit.assets/04cd91cb973b3c108186ebee702dc636.png)

* Click the Upload button

![](../device-interface-veripro-hearing-fit.assets/2cb0603d9c32b6759b77d78ced6d9fca.png)

* A uploaded file confirmation will display, as well as the number of records saved from that file

![](../device-interface-veripro-hearing-fit.assets/6a7beed45da683b7613de83f575b5a4f.png)

* Results will display as a Lab Results document in the patient's chart.

![](../device-interface-veripro-hearing-fit.assets/8cf29dde3cd89f5f507dbf2969197779.png)

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

![](../device-interface-veripro-hearing-fit.assets/5e62feac90a584fe4d592c47c6c358be.png)
