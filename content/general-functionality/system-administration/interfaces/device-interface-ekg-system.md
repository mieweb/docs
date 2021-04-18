---
title: "Device Interface - EKG System"
date: "2020-02-27T20:28:15.111Z"
url: "general-functionality/system-administration/interfaces/device-interface-ekg-system.html"
version: 30
id: "1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs"
source: "https://drive.google.com/open?id=1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs"
menu:
    main:
        name: "Device Interface - EKG System"
        identifier: "1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5460
---
This document describes the interface between {{% system-name %}} and the Welch Allyn EKG Monitoring system known as CardioPerfect. {{% system-name %}} can interface with other models of devices, so please contact Help Desk for verification and quote for the interface.

## Overview

Within {{% system-name %}} a user navigates to a page in the patient's chart that is configured with MIE's layout for interfacing to CardioPerfect. The tab launches an ActiveX control that interfaces to CardioPerfect. If the patient is not registered in CardioPerfect, {{% system-name %}} will create the patient. It will transfer/update:

* MR number (Which MR number is controlled by configuration in the layout)
* Name
* Address (Addr1, Addr2, City, State, Zip)
* DOB
* most recent height
* most recent weight

Then the end user is presented CardioPerfect to conduct the EKG. After the user completes their session with the patient in CardioPerfect:

* If the FileLink program has been correctly configured to save TIF images after a new test is created, a TIF image will now exist in the user-configured directory.
* The user chooses that TIF image from the VidCap control. The saved EKG's will be stored as TIF image documents with an observation for the interpretation. This does not require the CardioPerfect software to view once stored in {{% system-name %}} (so it can be accessed by any computer).
* The user clicks the "Get Interpretation" button to pull the automatically generated interpretation into a text area.
* The user chooses Normal / Abnormal.
* Note: MIE has ability to hide the "Normal" and "Review" radio buttons for EKG tests. This is using a system setting "E-Chart", "EKG", "Ignore Flag Interpretations". This setting is only checked in javascript and the layout so will need to be manually added by MIE for practices who want to use it.
* The user clicks the Upload button in {{% system-name %}} to create a document from the TIF and an observation from the interpretation. The normal/abnormal value is stored as the flag on the interpretation observation.

### Model Numbers

A list of devices known to work with this interface (but please verify with your MIE Implementer for other models):

* CP100/200
* CP20
* AT-2 Plus

### Technical Details

* CardioPerfect must be installed on the PC from which EKGs will be recorded.
* FileLink must be installed and configured to write TIFF files when a new test is created.
* CardioPerfect runs MSSQL on the PC doing EKGs. Some implementations may be talking to a database remotely and multiple machines sharing the same DB.

Once installed and MIE programmers have system and/or encounters configured, the following steps would apply for utilizing the device interface with {{% system-name %}} .

## Electrocardiogram (ECG or EKG)

* Open {{% system-name %}} .
* Pull up correct patient.
* Choose correct encounter (or chart tab tool) and make sure there is an Electrocardiogram on the Due List; or you may need add an encounter and check the Due List for the procedure. If there is not one, you will need to add it to the Due List.

### Doing the EKG

* Welch Allyn CardioPerfect program will open automatically if there is an EKG on the due list.

{{% info %}}

Do not open the Welch Allyn CardioPerfect software by double clicking the icon on the desktop. You will first see a login in screen then it will immediately change to the screen below. If you have tried to login to the Welch Aylln software bypassing this automatic login. See Step 5.![](device-interface-ekg-system.images/image1.png)

{{% /info %}}


* This is the screen that you will see if you attempt to login to Welch Allyn software manually. If you attempted to login this way you will not be successful. You will receive and "Access Denied" pop-up.

![](device-interface-ekg-system.images/image2.png)

![](device-interface-ekg-system.images/image3.png)

* If this happens you need to change the Username to "Admin" and the password to "Admin" and select login. There may also be another login screen behind the scenes that you will need to input the same Username and Password….Admin, Admin.
* Refresh your screen in {{% system-name %}} and your Welch Allyn software will open automatically and this screen will appear. Note that the employee information also pulls in automatically. You do not need to enter this information.

![](device-interface-ekg-system.images/image4.png)

* Select the ![](device-interface-ekg-system.images/image5.png) button at the top of the screen to begin your test.
* EKG should start and show on screen.

![](device-interface-ekg-system.images/image6.png)

* Observe the screen and Select Record ![](device-interface-ekg-system.images/image7.png) when you are ready.
* Once done recording (10 Seconds) the interpretation should be automatically done. If not, select Tools>Interpretation.

![](device-interface-ekg-system.images/image8.png)

* Enter the information and select Confirm.

![](device-interface-ekg-system.images/image9.png)

* The files will transfer/export automatically to a designated folder on your computer.

### Importing the EKG

* Scroll to the EKG section of the encounter (or EKG chart tab tool) in {{% system-name %}}

![](device-interface-ekg-system.images/image10.png)
* Scroll to the "filebox"
* Change the smartcard to point to the correct folder.
    * Changing smartcard:
        * Right click on filebox

![](device-interface-ekg-system.images/image11.png)

* Choose set smartcard folder

![](device-interface-ekg-system.images/image12.png)

* Choose the correct location of the for files (-LCC EKG Results) and select ok
    * File should populate the filebox
* Choose the EKG file.

!Images^components_system_configuration_interfaces_device_device_interfaces_ekg_system_media_27.png!

.



* Select the Get Interpretation button
    * Interpretation should populate the textbox.
* Select the upload button

![](device-interface-ekg-system.images/image13.png)

* EKG will upload to the Encounter (or EKG chart tab tool)

![](https://lh3.googleusercontent.com/vYR4Tcj9aw-yhlK7GPHSJFY1-pont5g16b_wj31hof97qKQHPtjEI8Ax0eMKGeDjREP0TeQsxdcx0tCSJdEkhKJ_jtSs4hsch4yxd5iE3rvZb063DSc8CPQNNAcA3eXa3S3QELro0ofkSvim9w)

* When prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
* Scroll to bottom of encounter page and choose save to ensure the EKG is saved to that encounter.
* Close out Welch Allyn Cardioperfect
* Done.

You can also capture results doing it from the patient's chart tab (manual vs. device upload), doing it from within an encounter exam (when you ‘Add to Exam' the order and it opens up that section within the encounter to do it either manual vs. device upload) and doing a mass import from the sidemenu tab.  The data can also be captured using a bubble form from forms library and indexing by processing bubbles.

