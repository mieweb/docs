---
id: '15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
title: 'Device Interface - PFT System'
date: '2020-02-27T20:28:23.442Z'
version: 54
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
wikigdrive: '18ac9a8be49637c0d2bea8d32c40badbcda9a0ca'
---
The following is referring to a pulmonary OMI Sensormedics model number 922 system. Contact your MIE Implementer to see if your pulmonary system model can be interfaced or quoted

## Pulmonary Function Test

1. Open {{% system-name %}} .
2. Pull up correct patient.
3. Go to PFT Tool chart tab or add encounter for patient and make sure there is a PFT on the due list for your patient.
   1. If there is not, you will need to add the procedure.

## Doing the PFT Calibration

1. Select OMI Icon on desktop to open OMI database.

![](../device-interface-pft-system.assets/50acdcd96b6bd115648d7bede4457e53.png)

1. If a calibration has not been completed for the day you will receive the following pop up box.

![](../device-interface-pft-system.assets/494c2ae796be3d4a0b424e9c0c05ffef.png)

1. Select OK
2. OMI Software will ask for user initials (Note: Initials are not required to proceed)

![](../device-interface-pft-system.assets/c921b70eb3e92105f47c136392b1ff55.png)


![](../device-interface-pft-system.assets/4362b2cefa129252f8e517aa8f783413.png)

1. If you put your initials in and select ok you may see the error above. If so, select cancel to get past the error.
2. You can also select "Cancel" on the Operator screen without putting in initials and proceed.
1. Performing Calibration:

      Select the "Perform Cal/Leak Check" button. <img src="../device-interface-pft-system.assets/12f73aaf7f9de8bd835aeeeb6a9c0c2a.png" />

   2. The following screen will appear

![](../device-interface-pft-system.assets/692c63c94b60b1e590914d1f91362f59.png)

1. Verify that the Volume is set to 0 ml and the Temperature is appropriate.
2. Click OK and the following screen will appear:

![](../device-interface-pft-system.assets/456a3a04eeac914b9bd6c975c25c76a2.png)

1. Click OK in the Syringe connected box and the following screen will appear. Once you begin emptying the syringe the calibration will begin immediately.

![](../device-interface-pft-system.assets/6b4eb8c23f2accad9a2dffbcee38812a.png)

1. The following screen will appear when Calibration is completed.

![](../device-interface-pft-system.assets/7cb1c28343a7ce35d3df640ca0a36a85.png)

1. Select "Save" and your Calibration is completed.

## Doing the PFT


   Choose Select/Add Client <img src="../device-interface-pft-system.assets/e48ffca15620882b12024a718cd014c5.png" />

   1. Select correct patient and select use selected match

![](../device-interface-pft-system.assets/0a567ec25328740844f757d7560634fb.png)

1. Make sure patient information page is correct.

![](../device-interface-pft-system.assets/a895be464bf0534663878a1667abe477.png)

1. Select ok
2. Select yes
1. If this patient is not in the list select New Client
   1. Fill out correct information for current client

![](../device-interface-pft-system.assets/a6a4ec6a1806267e0caa6d910dd75bbc.png)

1. Select ok
2. Select yes
1. Select Perform FVC test
   1. If a calibration has not been done on the machine that day, it will pop up a box asking if you want to continue with the test or do a calibration. See instructions above.
   2. If you want to continue, select yes.
1. Select Proceed with testing
2. Check yes for any pre-test questions
3. Select ok
4. Make sure your PFT machine is set up correctly and do any patient teaching at this point.
5. Select ok to start test
6. Machine will make you wait 60 seconds before giving interpretation and between blows.
   1. Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
      1. Once marking select calculate curve
1. Next select do another trial
2. Select ok
3. Wait 60 seconds for interpretation
   1. Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
      1. Once marking select calculate curve
1. Next select do another trial
2. Select ok
3. Wait 60 seconds for interpretation
   1. Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
      1. Once marking select calculate curve
1. Select done
2. Fill out post test Q & A.
3. Select ok

## Exporting PFT Results

1. Choose the Copy File link at the top of the page in OMI
2. Choose Create ERS/ATS PFTVALS.Txt All Curves
3. Choose current date for selected date range
   1. Mark copy all dates
   2. Mark Selected client
1. Select show number
2. Select Ok
3. Add patients MR number to file when saving and select save

## Importing PFT Results

1. Go to {{% system-name %}}
2. Scroll down to PFT section in encounter or the "In House Tests/Procedures" section and mark to do a PFT procedure. Or you can go to the patient's chart tab named "PFT" and do an import from there outside of being in an encounter.

![](../device-interface-pft-system.assets/fdf997dbc6fee7a511d634e131cba78c.png)

1. Select the file type (OMI, Easy On, or Cardio Perfect – whichever your device type is using).

![](../device-interface-pft-system.assets/ee692de8db9e7cfc644041b5b0c3c230.png)

1. Select Load from Device

![](../device-interface-pft-system.assets/9f5715e6b20a2e8550b05c2ff4df3f47.png)

1. Select the reason for test using the drop-down, enter in any observation (height/weight) data above that.
2. Scroll to Load Data/file box

![](../device-interface-pft-system.assets/d3606a75d388e86ec3dc28d3a821b693.png)

1. Change the smartcard to point to the correct folder.
   1. Changing smartcard:
      1. Right click on filebox/data box
      2. Choose set smartcard folder

![](../device-interface-pft-system.assets/2b683f2a7d8ec60a6ff787c8fada7df3.png)

1. Choose the correct location of the PFT files and select ok

![](../device-interface-pft-system.assets/4bc7901d012c61eef9466b8b0444198d.png)

1. PFT files will populate in the filebox

![](../device-interface-pft-system.assets/424899e3156031c9f76ead939786a1cd.png)

1. Choose the correct PFT file for the correct patient
2. Click <em>upload file</em> button

![](../device-interface-pft-system.assets/5fbac47dfd832ee83c272d943ae3d18a.png)

1. Some pop-ups will show if you didn't select the reason for the test or enter any comments, etc. You can go back to fix or you can click "ok" to get thru the message to proceed.

![](../device-interface-pft-system.assets/018786b7e8d969d96d8f8e65b69c4e2d.png)

1. PFT results will upload to encounter or PFT tool chart tab depending where you are working from.
2. If prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
3. If in an encounter, click SAVE button to ensure PFT results are saved to encounter.
4. Most systems have a "Test Results" chart tab and a sub-tab named "PFT" that these stored/uploaded documents get placed in, along with the DocSum chart tab.
PFT documents from devices can now have the graphs on a separate page from the results. This should produce better resolution when printing.  
Can now view and edit PFT results in liters instead of milliliters. This is done through a new system setting "E-Chart:PFT:Display Liters" to turn this functionality on or off. Previously if you manually entered PFT results, you had to convert the values from mL to L. Only interfaces results seem to send in mL. But physicians generally interpret results from L. {{% sys-name %}} still store the values in mL, the setting just allows the display to be in L.

![](../device-interface-pft-system.assets/f628c777bd0a442a7f8660c64ac4847e.png)

Example:  
Paper report generated by PFT

![](../device-interface-pft-system.assets/a9d6871a0272e93972d6953c14e31758.png)

Old entry method (you had to manually convert from L to mL)

![](../device-interface-pft-system.assets/e850360e871fbd4a8cf30ff93bf5b0d2.png)

New entry and display in {{% sys-name %}} w/ system setting on: (now you can enter what is on the report exactly)

![](../device-interface-pft-system.assets/091bb607380f6ea4046cb2ccf7465634.png)

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).  
Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it. *Note: contact your MIE Implementer if you wish the PFT Interpretation field to populate an encounter "view". This is an optional setting that can be placed on encounter views to show PFT Interpretation.*

![](../device-interface-pft-system.assets/24613d4e362c92556f3cf852287d69d0.png)

