---
title: "Device Interface - PFT System"
date: 2020-02-27T20:28:23.442Z
url: "general-functionality/system-administration/interfaces/device-interface-pft-system.html"
version: 36
id: 15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA
source: https://drive.google.com/open?id=15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA
menu:
    main:
        name: "Device Interface - PFT System"
        identifier: "15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5500
---
The following is referring to a pulmonary OMI Sensormedics model number 922 system. Contact your MIE Implementer to see if your pulmonary system model can be interfaced or quoted

## Pulmonary Function Test

* Open {{% system-name %}} .
* Pull up correct patient.
* Go to PFT Tool chart tab or add encounter for patient and make sure there is a PFT on the due list for your patient.
    * If there is not, you will need to add the procedure.

## Doing the PFT Calibration

* Select OMI Icon on desktop to open OMI database.

![](../../../external_files/9f28e3d4858e39356940d5650054bd37.png)

* If a calibration has not been completed for the day you will receive the following pop up box.

![](../../../external_files/deac14c59cad3dcfabcf39d460e77eac.png)

* Select OK
* OMI Software will ask for user initials (Note: Initials are not required to proceed)

![](../../../external_files/3f70e57e998e79ccd57d47bd3eed646e.png)

![](../../../external_files/855bc86d3d671ca59abc4d4db0ddc426.png)

* If you put your initials in and select ok you may see the error above. If so, select cancel to get past the error.
* You can also select "Cancel" on the Operator screen without putting in initials and proceed.
* Performing Calibration:
    * Select the "Perform Cal/Leak Check" button. ![](../../../external_files/66b04e14effc22cbcef38a3c890ce0a9.png)
    * The following screen will appear

![](../../../external_files/b060fddf0a2e15e8935f6eefa0969ae8.png)

* Verify that the Volume is set to 0 ml and the Temperature is appropriate.
* Click OK and the following screen will appear:

![](../../../external_files/d2a67383b3549be9dbc269bc08b34aef.png)

* Click OK in the Syringe connected box and the following screen will appear. Once you begin emptying the syringe the calibration will begin immediately.

![](../../../external_files/3d7ca26ea2fb267e593343316ce5f522.png)

* The following screen will appear when Calibration is completed.

![](../../../external_files/5454c85f3dfd05100f5f0d2622d30b34.png)

* Select "Save" and your Calibration is completed.

## Doing the PFT

* Choose Select/Add Client ![](../../../external_files/4578bc46bad1ea6878e06629c7aec6b4.png)
    * Select correct patient and select use selected match

![](../../../external_files/1a2c2218174afa01db6c3754303b0364.png)

* Make sure patient information page is correct.

![](../../../external_files/9559aa379040b7cd8062ea588b62f64b.png)

* Select ok
* Select yes
* If this patient is not in the list select New Client
    * Fill out correct information for current client

![](../../../external_files/c71909634f1a1b5653c82aa300412c03.png)

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

![](../../../external_files/d9f1b6601fe55911f74baa1590eb8c32.png)

* Select the file type (OMI, Easy On, or Cardio Perfect – whichever your device type is using).

![](../../../external_files/90e3a4b6b70537699d32bd8a8f3f37a5.png)

* Select Load from Device

![](../../../external_files/32ce85bf80ff15ecbebe5d8538828479.png)

* Select the reason for test using the drop-down, enter in any observation (height/weight) data above that.
* Scroll to Load Data/file box

![](../../../external_files/4924964463def321ec1a9176620b846a.png)

* Change the smartcard to point to the correct folder.
    * Changing smartcard:
        * Right click on filebox/data box
        * Choose set smartcard folder

![](../../../external_files/59abe2c8e01e624902ba7acb8558e81e.png)

* Choose the correct location of the PFT files and select ok

![](../../../external_files/ef2b630f4ff48723f9c46e5bd6a9133a.png)

* PFT files will populate in the filebox

![](../../../external_files/69efbf5423c54e8ac11e3302d8845988.png)

* Choose the correct PFT file for the correct patient
* Click <em>upload file</em> button

![](../../../external_files/4321724fd08eb5ee26c4cb6687ae5977.png)

* Some pop-ups will show if you didn't select the reason for the test or enter any comments, etc. You can go back to fix or you can click "ok" to get thru the message to proceed.

![](../../../external_files/df0d17d750f5199271a9461f97b16308.png)

* PFT results will upload to encounter or PFT tool chart tab depending where you are working from.
* If prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
* If in an encounter, click SAVE button to ensure PFT results are saved to encounter.
* Most systems have a "Test Results" chart tab and a sub-tab named "PFT" that these stored/uploaded documents get placed in, along with the DocSum chart tab.

PFT documents from devices can now have the graphs on a separate page from the results. This should produce better resolution when printing.

Can now view and edit PFT results in liters instead of milliliters. This is done through a new system setting "E-Chart:PFT:Display Liters" to turn this functionality on or off. Previously if you manually entered PFT results, you had to convert the values from mL to L. Only interfaces results seem to send in mL. But physicians generally interpret results from L. {{% sys-name %}} still store the values in mL, the setting just allows the display to be in L.

![](../../../external_files/6c42166d9cc3636601eff27a44f0e8f9.png)

Example:

Paper report generated by PFT

![](../../../external_files/a8ab53c7a84c4ad1f22c87bf94b57fe2.png)

Old entry method (you had to manually convert from L to mL)

![](../../../external_files/f45a142ebf8d6197fe241d3169813d7f.png)

New entry and display in {{% sys-name %}} w/ system setting on: (now you can enter what is on the report exactly)

![](../../../external_files/810f9fa5820db588d1a8189af231e2a4.png)

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).

Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it. *Note: contact your MIE Implementer if you wish the PFT Interpretation field to populate an encounter "view". This is an optional setting that can be placed on encounter views to show PFT Interpretation.*

![](../../../external_files/dba7479b144d71d07cdab198e4c47d49.png)
