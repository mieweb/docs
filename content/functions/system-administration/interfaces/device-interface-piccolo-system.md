---
title: "Device Interface - Piccolo System"
date: "2020-02-27T20:28:32.748Z"
url: "functions/system-administration/interfaces/device-interface-piccolo-system.html"
version: 19
id: "1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4"
source: "https://drive.google.com/open?id=1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4"
menu:
    main:
        name: "Device Interface - Piccolo System"
        identifier: "1EhjxQZdTTqyFVXuZuYXic44oWHuZd0cI7auW2GUUme4"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5490
---
The following is referring to a blood chemistry analyzer Abaxis Piccolo Xpress system. Contact your MIE Implementer to see if your piccolo system model can be interfaced or quoted.

## Piccolo Blood Chemistry Analyzer

* When working in an encounter and in the In-House Tests and Procedures section, add the test/procedure for the Blood Chem-Piccolo

![](device-interface-piccolo-system.images/image1.png)

* The screen to connect to the Abaxis Piccolo Xpress will open on your screen.

![](device-interface-piccolo-system.images/image2.png)

* Have the Piccolo machine hooked up to the computer that is running {{% system-name %}} . Usually they are just a serial connection to the machine and usb connection on the other end to the computer/laptop.
* Select the Connect to Abaxis Piccolo Xpress (choose port) link in your {{% system-name %}} encounter.

![](device-interface-piccolo-system.images/image3.png)

* Verify the port information in the pop-up and select the "Open Port" button

![](device-interface-piccolo-system.images/image4.png)

* Click the confirm option you wish to do (yes, this time or Yes, always)

![](device-interface-piccolo-system.images/image5.png)

* Transmit the information from the equipment.
* The {{% system-name %}} screen displays "Receiving data" here on the encounters/test & procedures section you are in.
* When done, the screen displays "<strong>Data Received"</strong> and a <strong>"Document Successfully Created"</strong> pop-up window displays.
* Select OK
* To view the data, navigate to the chart tab this document is stored in (DocSum tab or a separate chart tab that you have set up to house this blood chemistry document) and select the docid to view the result.
