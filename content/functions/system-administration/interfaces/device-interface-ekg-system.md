---
id: '1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs'
title: 'Device Interface - EKG System'
date: '2020-02-27T20:28:15.111Z'
version: 44
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs'
wikigdrive: '762e46ee0b866c028283dd665b3a8ee950fb436c'
menu:
  main:
    name: 'Device Interface - EKG System'
    identifier: '1TyHq09M2LU6b0O4sts-A4JykKIs-O_zv5X3K4gAvhEs'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5490
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

1. Open {{% system-name %}} .
2. Pull up correct patient.
3. Choose correct encounter (or chart tab tool) and make sure there is an Electrocardiogram on the Due List; or you may need add an encounter and check the Due List for the procedure. If there is not one, you will need to add it to the Due List.

### Doing the EKG

1. Welch Allyn CardioPerfect program will open automatically if there is an EKG on the due list.
{{% info %}}


Do not open the Welch Allyn CardioPerfect software by double clicking the icon on the desktop. You will first see a login in screen then it will immediately change to the screen below. If you have tried to login to the Welch Aylln software bypassing this automatic login. See Step 5.![](../device-interface-ekg-system.assets/10000201000002A2000001F580C2A81B1E85E6D8.png)

{{% /info %}}
1. This is the screen that you will see if you attempt to login to Welch Allyn software manually. If you attempted to login this way you will not be successful. You will receive and "Access Denied" pop-up.

![](../device-interface-ekg-system.assets/1000020100000196000001467FDD4D5EB89118B4.png)


![](../device-interface-ekg-system.assets/10000000000000BB0000007965FC0998984C3929.png)

1. If this happens you need to change the Username to "Admin" and the password to "Admin" and select login. There may also be another login screen behind the scenes that you will need to input the same Username and Password….Admin, Admin.
2. Refresh your screen in {{% system-name %}} and your Welch Allyn software will open automatically and this screen will appear. Note that the employee information also pulls in automatically. You do not need to enter this information.

![](../device-interface-ekg-system.assets/10000201000002A2000001F580C2A81B1E85E6D8.png)


   Select the <img src="../device-interface-ekg-system.assets/100000000000003C0000001DCF1FE4EBC8C019DF.png" />
    button at the top of the screen to begin your test.
2. EKG should start and show on screen.

![](../device-interface-ekg-system.assets/10000201000002A3000001EA779FBA8AB49E391D.png)


   Observe the screen and Select Record <img src="../device-interface-ekg-system.assets/10000000000000340000002D06DBB534461947A9.png" />
    when you are ready.
2. Once done recording (10 Seconds) the interpretation should be automatically done. If not, select Tools>Interpretation.

![](../device-interface-ekg-system.assets/10000000000000BF0000008721B0017215F1383B.png)

1. Enter the information and select Confirm.

![](../device-interface-ekg-system.assets/1000000000000190000000CA60A59AF6E90E9B11.png)

1. The files will transfer/export automatically to a designated folder on your computer.

### Importing the EKG

1. Scroll to the EKG section of the encounter (or EKG chart tab tool) in {{% system-name %}}

![](../device-interface-ekg-system.assets/10000201000004A10000020B8E4A51265D796E6E.png)

1. Scroll to the "filebox"
2. Change the smartcard to point to the correct folder.
    1. Changing smartcard:
        1. Right click on filebox

![](../device-interface-ekg-system.assets/10000000000000B600000104C4F84B3EB8F0AEB1.png)

1. Choose set smartcard folder

![](../device-interface-ekg-system.assets/1000000000000140000001484533436908AD048D.png)

1. Choose the correct location of the for files (-LCC EKG Results) and select ok
    1. File should populate the filebox
1. Choose the EKG file.
!Images^components_system_configuration_interfaces_device_device_interfaces_ekg_system_media_27.png!
.

1. Select the Get Interpretation button
    1. Interpretation should populate the textbox.
1. Select the upload button

![](../device-interface-ekg-system.assets/100000000000029C000000EB1F20D5BFCDFB84C0.png)

1. EKG will upload to the Encounter (or EKG chart tab tool)

![](../device-interface-ekg-system.assets/100002010000029A000001F47B2D2F9AB28FE033.png)

1. When prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
2. Scroll to bottom of encounter page and choose save to ensure the EKG is saved to that encounter.
3. Close out Welch Allyn Cardioperfect
4. Done.
You can also capture results doing it from the patient's chart tab (manual vs. device upload), doing it from within an encounter exam (when you ‘Add to Exam' the order and it opens up that section within the encounter to do it either manual vs. device upload) and doing a mass import from the sidemenu tab.  The data can also be captured using a bubble form from forms library and indexing by processing bubbles.
