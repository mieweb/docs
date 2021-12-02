---
title: "Device Interface - PFT System"
date: "2020-02-27T20:28:23.442Z"
url: "functions/system-administration/interfaces/device-interface-pft-system.html"
version: 42
id: "15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA"
source: "https://drive.google.com/open?id=15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA"
menu:
    main:
        name: "Device Interface - PFT System"
        identifier: "15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5490
---
The following is referring to a pulmonary OMI Sensormedics model number 922 system. Contact your MIE Implementer to see if your pulmonary system model can be interfaced or quoted

## Pulmonary Function Test

* Open {{% system-name %}} .
* Pull up correct patient.
* Go to PFT Tool chart tab or add encounter for patient and make sure there is a PFT on the due list for your patient.
    * If there is not, you will need to add the procedure.

## Doing the PFT Calibration

* Select OMI Icon on desktop to open OMI database.

![](device-interface-pft-system.images/image8.png)

* If a calibration has not been completed for the day you will receive the following pop up box.

![](device-interface-pft-system.images/image10.png)

* Select OK
* OMI Software will ask for user initials (Note: Initials are not required to proceed)

![](device-interface-pft-system.images/image9.png)

![](device-interface-pft-system.images/image12.png)

* If you put your initials in and select ok you may see the error above. If so, select cancel to get past the error.
* You can also select "Cancel" on the Operator screen without putting in initials and proceed.
* Performing Calibration:
    * Select the "Perform Cal/Leak Check" button. ![](device-interface-pft-system.images/image11.png)
    * The following screen will appear

![](device-interface-pft-system.images/image14.png)

* Verify that the Volume is set to 0 ml and the Temperature is appropriate.
* Click OK and the following screen will appear:

![](device-interface-pft-system.images/image13.png)

* Click OK in the Syringe connected box and the following screen will appear. Once you begin emptying the syringe the calibration will begin immediately.

![](device-interface-pft-system.images/image16.png)

* The following screen will appear when Calibration is completed.

![](device-interface-pft-system.images/image15.png)

* Select "Save" and your Calibration is completed.

## Doing the PFT

* Choose Select/Add Client ![](device-interface-pft-system.images/image19.png)
    * Select correct patient and select use selected match

![](device-interface-pft-system.images/image17.png)

* Make sure patient information page is correct.

![](device-interface-pft-system.images/image18.png)

* Select ok
* Select yes
* If this patient is not in the list select New Client
    * Fill out correct information for current client

![](device-interface-pft-system.images/image20.png)

* Select ok
* Select yes
* Select Perform FVC test
    * If a calibration has not been done on the machine that day, it will pop up a box asking if you want to continue with the test or do a calibration. See instructions above.
    * If you want to continue, select yes.
* Select Proceed with testing
* Check yes for any pre-test questions
* Select ok
* Make sure your PFT machine is set up correctly and do any patient teaching at this point.
* Select ok to start test
* Machine will make you wait 60 seconds before giving interpretation and between blows.
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
        * Once marking select calculate curve
* Next select do another trial
* Select ok
* Wait 60 seconds for interpretation
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
        * Once marking select calculate curve
* Next select do another trial
* Select ok
* Wait 60 seconds for interpretation
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
        * Once marking select calculate curve
* Select done
* Fill out post test Q & A.
* Select ok

## Exporting PFT Results

* Choose the Copy File link at the top of the page in OMI
* Choose Create ERS/ATS PFTVALS.Txt All Curves
* Choose current date for selected date range
    * Mark copy all dates
    * Mark Selected client
* Select show number
* Select Ok
* Add patients MR number to file when saving and select save

## Importing PFT Results

* Go to {{% system-name %}}
* Scroll down to PFT section in encounter or the "In House Tests/Procedures" section and mark to do a PFT procedure. Or you can go to the patient's chart tab named "PFT" and do an import from there outside of being in an encounter.

![](device-interface-pft-system.images/image21.png)

* Select the file type (OMI, Easy On, or Cardio Perfect – whichever your device type is using).

![](device-interface-pft-system.images/image22.png)

* Select Load from Device

![](device-interface-pft-system.images/image23.png)

* Select the reason for test using the drop-down, enter in any observation (height/weight) data above that.
* Scroll to Load Data/file box

![](device-interface-pft-system.images/image24.png)

* Change the smartcard to point to the correct folder.
    * Changing smartcard:
        * Right click on filebox/data box
        * Choose set smartcard folder

![](device-interface-pft-system.images/image25.png)

* Choose the correct location of the PFT files and select ok

![](device-interface-pft-system.images/image26.png)

* PFT files will populate in the filebox

![](device-interface-pft-system.images/image27.png)

* Choose the correct PFT file for the correct patient
* Click <em>upload file</em> button

![](device-interface-pft-system.images/image1.png)

* Some pop-ups will show if you didn't select the reason for the test or enter any comments, etc. You can go back to fix or you can click "ok" to get thru the message to proceed.

![](device-interface-pft-system.images/image2.png)

* PFT results will upload to encounter or PFT tool chart tab depending where you are working from.
* If prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
* If in an encounter, click SAVE button to ensure PFT results are saved to encounter.
* Most systems have a "Test Results" chart tab and a sub-tab named "PFT" that these stored/uploaded documents get placed in, along with the DocSum chart tab.

PFT documents from devices can now have the graphs on a separate page from the results. This should produce better resolution when printing.

Can now view and edit PFT results in liters instead of milliliters. This is done through a new system setting "E-Chart:PFT:Display Liters" to turn this functionality on or off. Previously if you manually entered PFT results, you had to convert the values from mL to L. Only interfaces results seem to send in mL. But physicians generally interpret results from L. {{% sys-name %}} still store the values in mL, the setting just allows the display to be in L.

![](device-interface-pft-system.images/image3.png)

Example:

Paper report generated by PFT

![](device-interface-pft-system.images/image4.png)

Old entry method (you had to manually convert from L to mL)

![](device-interface-pft-system.images/image5.png)

New entry and display in {{% sys-name %}} w/ system setting on: (now you can enter what is on the report exactly)

![](device-interface-pft-system.images/image6.png)

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).

Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it. *Note: contact your MIE Implementer if you wish the PFT Interpretation field to populate an encounter "view". This is an optional setting that can be placed on encounter views to show PFT Interpretation.*

![](device-interface-pft-system.images/image7.png)
