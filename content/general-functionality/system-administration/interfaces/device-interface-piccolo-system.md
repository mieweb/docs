---
title: "Device Interface - Piccolo System"
date: 2020-02-27T20:28:32.748Z
url: "general-functionality/system-administration/interfaces/device-interface-piccolo-system.html"
version: 13
id: 1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4
source: https://drive.google.com/open?id=1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4
menu:
    main:
        name: "Device Interface - Piccolo System"
        identifier: "1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5510
---
The following is referring to a blood chemistry analyzer Abaxis Piccolo Xpress system. Contact your MIE Implementer to see if your piccolo system model can be interfaced or quoted.

## Piccolo Blood Chemistry Analyzer

* When working in an encounter and in the In-House Tests and Procedures section, add the test/procedure for the Blood Chem-Piccolo

![](../../../external_files/b65ac058f2e9770a56cb740db77e6afa.png)

* The screen to connect to the Abaxis Piccolo Xpress will open on your screen.

![](../../../external_files/47dd2947f97cd97601198761e19e2816.png)

* Have the Piccolo machine hooked up to the computer that is running {{% system-name %}} . Usually they are just a serial connection to the machine and usb connection on the other end to the computer/laptop.
* Select the Connect to Abaxis Piccolo Xpress (choose port) link in your {{% system-name %}} encounter.

![](../../../external_files/74c5a4997bb7392e4c9ec850510d867a.png)

* Verify the port information in the pop-up and select the "Open Port" button

![](../../../external_files/c7308ab08e0fe9c77f754f2aac755632.png)

* Click the confirm option you wish to do (yes, this time or Yes, always)

![](../../../external_files/77817c64e4bef65f6dd0b1776c39ec47.png)

* Transmit the information from the equipment.
* The {{% system-name %}} screen displays "Receiving data" here on the encounters/test & procedures section you are in.
* When done, the screen displays "<strong>Data Received"</strong> and a <strong>"Document Successfully Created"</strong> pop-up window displays.
* Select OK
* To view the data, navigate to the chart tab this document is stored in (DocSum tab or a separate chart tab that you have set up to house this blood chemistry document) and select the docid to view the result.
