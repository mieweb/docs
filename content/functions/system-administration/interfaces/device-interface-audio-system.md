---
title: "Device Interface - Audio System"
date: "2020-03-19T19:31:42.080Z"
url: "functions/system-administration/interfaces/device-interface-audio-system.html"
version: 50
id: "1hu1QV2S1gl-YwbmcZ9ppoJ8LNAaQ7hE5fKQ1OYcKE-c"
source: "https://drive.google.com/open?id=1hu1QV2S1gl-YwbmcZ9ppoJ8LNAaQ7hE5fKQ1OYcKE-c"
menu:
    main:
        name: "Device Interface - Audio System"
        identifier: "1hu1QV2S1gl-YwbmcZ9ppoJ8LNAaQ7hE5fKQ1OYcKE-c"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5430
---
The following is referring to an OMI Audiometric Data Management Software ASW2004 system. Contact your MIE Implementer to see if your audio system model can be interfaced or quoted.

## Audiogram

{{% note %}}

First ensure that a calibration has been performed for the day. If one has not been performed you will receive this pop up box:

![](device-interface-audio-system.images/image1.png)

{{% /note %}}


1. From the audiogram computer select OMI Audio Version 3 or if it has been renamed "Audio" shortcut from the desktop.
2. OMI Software will ask for user initials. Initials are not required to proceed

![](device-interface-audio-system.images/image2.png)

![](device-interface-audio-system.images/image3.png)

* Put your initials in and select ok and then select cancel past the error.
* You can also select "Cancel" on the Operator screen without putting in initials and proceed.
* Performing a Calibration:
    * Run Calibration on the Audiometer using Serial Number of Device
    * When calibration is complete in OMI, select Receive Calibration on the main screen.
    * The following screen will appear:

![](device-interface-audio-system.images/image4.png)

* Please be sure that the <strong>Audiometer Serial # field is set.</strong> This will auto populate but need to confirm.
* Select "Receive Data" results will pull forward. (Note: Sometimes you need to click the receive data button twice.)

![](device-interface-audio-system.images/image5.png)

* Complete the "Listening and Visual Checks OK?" Section (Top Right Hand Corner) Add Calibration MM/DD/YYYY under "Calibration Subject" and select "Save" at the bottom of the screen and then select "Exit".

![](device-interface-audio-system.images/image6.png)

* Performing an Audio Test:
    * Choose Select/Add Client
    * Choose correct patient from list and click the use selected match button; or
    * Choose New Client and enter patient information into the database and select ok.
* Next step is to perform the audiogram on the patient.
    * <strong>Most do not use the social security number</strong>, and instead use the patient's MR# number when entering info into audiometer box.
* Once audiogram is complete choose Receive Audiogram in OMI.
    * Verify that the correct patient is chosen.
    * Select receive data (<strong>occasionally this box may need to be clicked a second time</strong>)
    * You may receive a pop up regarding the ID used to perform the test and it will ask about adding zero's to the ID number. Select YES.
    * The data will upload from the audiometer to OMI (See Example)

![](device-interface-audio-system.images/image7.png)

* Select "Save" and then "Exit"

## Exporting Audio Files

* In OMI choose the Copy Files dropdown and choose Export ASCII data.

![](device-interface-audio-system.images/image8.png)

* Under select date range choose the current day's date on the Starting Date and the Ending Date.

![](device-interface-audio-system.images/image9.png)

* Select "Apply Selections"

![](device-interface-audio-system.images/image10.png)

* Choose the correct patient from the list below and select begin export.
* Box to save will pop up

![](device-interface-audio-system.images/image11.png)

* At the top of this box the folder is currently showing Audiometry 2003. This should be changed to "-LCC Audio Results" to navigate to the correct folder select the drop down arrow, select program files and then select "-LCC Audio Results". This is the folder where the results will be exported.

![](device-interface-audio-system.images/image12.png)

![](device-interface-audio-system.images/image13.png)

* If you would like you can add the patients MR# ID to the filename by clicking in the File name box and renaming the file and select save. (Please note that the file extension must by .txt.) See below for example.

![](device-interface-audio-system.images/image14.png)

* After selecting "Save" you will receive the following pop up. Note that it states the file has been exported to C:Program Files-LCC Audio ResultsAExport1234.txt. Select "Ok"

![](device-interface-audio-system.images/image15.png)

* Close out of OMI software.

## Importing Audio Files

* Open {{% system-name %}} (if not already open) and choose correct patient.
* Choose correct encounter and make sure there is an audiogram procedure on the due list or in office/tests procedures section; or you may need to add an encounter and check the due list for the audiogram procedure. If there is no audiogram procedure, you will need to add it to the due list.

![](device-interface-audio-system.images/image16.png)

* Or go to chart tab named Audio Tool and click add audiogram
* Scroll down the page to the Audio section and click "new" button to import an audio file.

![](device-interface-audio-system.images/image17.png)

* Choose reason for test and enter in any current test comments and/or overall comments. Even if the file you are importing has comments or overall comments, those will be imported there too.
* Scroll down to the "filebox".

![](device-interface-audio-system.images/image18.png)

Make sure the audiogram result files are showing up in the file box.

* If they are not, you may need to change the "smartcard" to point to the audiogram results.
    * Changing smartcard:
        * Right click on "filebox"
        * Choose set smartcard folder

![](device-interface-audio-system.images/image19.png)

* Choose the correct location of the audiogram files (C:Program Files-LCC Audio Results and select ok

![](device-interface-audio-system.images/image20.png)

* Audiogram files should populate the filebox

![](device-interface-audio-system.images/image21.png)

* Choose the correct audiogram file for your patient.
* Click the <em>upload file</em> button
    * If you have no additional comments, Select ok on the first box stating no comment has been entered, upload anyway.
    * Select <strong>YES</strong> on the second box asking if you want to delete as the folder should remain empty and only the current results should be showing. By deleting after each upload this will keep the folder clean and remove any confusion of selecting the incorrect file.
* Audiogram results should populate in the Audio Tool.
* You can answer the additional questions via that button also at any time and they will save when you save the encounter.
* If working in an encounter, click the save button to save audiogram results to patients file.



You will see the audio file results in the encounter and also in the Audio chart tab of the patient's chart. You can view the document, use the

_

compare

_

feature, etc. On the document stored in the patient's chart, the MR# that populates within the file document that you uploaded looks at the user's default starting partition to determine which MR number to display there.



