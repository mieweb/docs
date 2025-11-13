---
id: '15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
title: 'Device Interface - PFT System'
date: '2025-11-13T15:04:08.360Z'
version: 252
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
wikigdrive: 'v2.15.27'
---
The following is referring to a pulmonary OMI Sensormedics model number 922 system. Contact your MIE Implementer to see if your pulmonary system model can be interfaced or quoted

## Pulmonary Function Test

1. Open {{% system-name %}} .
2. Pull up correct patient.
3. Go to PFT Tool chart tab or add encounter for patient and make sure there is a PFT on the due list for your patient.
    * If there is not, you will need to add the procedure.

## Doing the PFT Calibration

1. Select OMI Icon on desktop to open OMI database.

![](../device-interface-pft-system.assets/50acdcd96b6bd115648d7bede4457e53.png)

2. If a calibration has not been completed for the day you will receive the following pop up box.

![](../device-interface-pft-system.assets/494c2ae796be3d4a0b424e9c0c05ffef.png)

3. Select OK
4. OMI Software will ask for user initials (Note: Initials are not required to proceed)

![](../device-interface-pft-system.assets/c921b70eb3e92105f47c136392b1ff55.png)

![](../device-interface-pft-system.assets/4362b2cefa129252f8e517aa8f783413.png)

5. If you put your initials in and select ok you may see the error above. If so, select cancel to get past the error.
6. You can also select "Cancel" on the Operator screen without putting in initials and proceed.
7. Performing Calibration:
    * Select the "Perform Cal/Leak Check" button. 
        ![](../device-interface-pft-system.assets/12f73aaf7f9de8bd835aeeeb6a9c0c2a.png)
    * The following screen will appear

![](../device-interface-pft-system.assets/692c63c94b60b1e590914d1f91362f59.png)

8. Verify that the Volume is set to 0 ml and the Temperature is appropriate.
9. Click OK and the following screen will appear:

![](../device-interface-pft-system.assets/456a3a04eeac914b9bd6c975c25c76a2.png)

10. Click OK in the Syringe connected box and the following screen will appear. Once you begin emptying the syringe the calibration will begin immediately.

![](../device-interface-pft-system.assets/6b4eb8c23f2accad9a2dffbcee38812a.png)

11. The following screen will appear when Calibration is completed.

![](../device-interface-pft-system.assets/7cb1c28343a7ce35d3df640ca0a36a85.png)

12. Select "Save" and your Calibration is completed.

## Doing the PFT

1. Choose Select/Add Client 
    ![](../device-interface-pft-system.assets/e48ffca15620882b12024a718cd014c5.png)
    * Select correct patient and select use selected match

![](../device-interface-pft-system.assets/0a567ec25328740844f757d7560634fb.png)

2. Make sure patient information page is correct.

![](../device-interface-pft-system.assets/a895be464bf0534663878a1667abe477.png)

3. Select ok
4. Select yes
5. If this patient is not in the list select New Client
    * Fill out correct information for current client

![](../device-interface-pft-system.assets/a6a4ec6a1806267e0caa6d910dd75bbc.png)

6. Select ok
7. Select yes
8. Select Perform FVC test
    * If a calibration has not been done on the machine that day, it will pop up a box asking if you want to continue with the test or do a calibration. See instructions above.
    * If you want to continue, select yes.
9. Select Proceed with testing
10. Check yes for any pre-test questions
11. Select ok
12. Make sure your PFT machine is set up correctly and do any patient teaching at this point.
13. Select ok to start test
14. Machine will make you wait 60 seconds before giving interpretation and between blows.
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
    * Once marking select calculate curve
15. Next select do another trial
16. Select ok
17. Wait 60 seconds for interpretation
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
    * Once marking select calculate curve
18. Next select do another trial
19. Select ok
20. Wait 60 seconds for interpretation
    * Once machine is done it will read plateau achieved and you will need to mark sitting or standing and acceptable or reject.
    * Once marking select calculate curve
21. Select done
22. Fill out post test Q & A.
23. Select ok

## Exporting PFT Results

1. Choose the Copy File link at the top of the page in OMI
2. Choose Create ERS/ATS PFTVALS.Txt All Curves
3. Choose current date for selected date range
    * Mark copy all dates
    * Mark Selected client
4. Select show number
5. Select Ok
6. Add patients MR number to file when saving and select save
7. Users on release 202503 and newer will be required to have the MIE Device App installed on their PC. Users will save the exported file to the MIE Device App directory.

## Importing PFT Results

1. Go to {{% system-name %}} and navigate to an encounter visit.
2. In the <strong>Tests & procedures section</strong>, select the <strong>Add to Exam</strong> icon for an existing PFT order.

![](../device-interface-pft-system.assets/f0d4fe4b0061964f7bac24e20217c771.png)

If an existing order for a PFT does not exist, select the PFT order from the *In House Testing Pick List* and add the procedure to the exam.

![](../device-interface-pft-system.assets/471ef7b74b8a96cd3d927c05c28a978e.png)

3. <strong><em>For client</em></strong>'<em></em> <strong><em>databases on release 202409 and older</em></strong>', select the file type (OMI, Easy On, or Cardio Perfect – whichever your device type is using). <strong><em>For client databases on release 202503 and newer</em></strong>', these steps are not needed and not available so proceed to step 17.

![](../device-interface-pft-system.assets/ee692de8db9e7cfc644041b5b0c3c230.png)

4. Select Load from Device. <strong><em>For client</em></strong>'<em></em> <strong><em>databases on release 202409 and older</em></strong>', proceed to step 6.

![](../device-interface-pft-system.assets/85b32fcd3a7dc489abcbc862ce067f25.png)

5. <strong><em>For clients on database release 202503 and newer</em></strong>', users will no longer have the option to <strong>Load from Device</strong>. As of RC202503, users must update import controls to use the <em>MIE Device App</em>. Users will save PFT results to the <em>MIE Device App</em> and the device app will automatically import results to the patient chart and insert results as a separate document.

6. Select the reason for the test using the drop-down, enter in any observation (height/weight) data above that.
7. Scroll to Load Data/file box

![](../device-interface-pft-system.assets/d3606a75d388e86ec3dc28d3a821b693.png)

8. Change the smartcard to point to the correct folder.
    * Changing smartcard:
    * Right click on filebox/data box
    * Choose set smartcard folder

![](../device-interface-pft-system.assets/2b683f2a7d8ec60a6ff787c8fada7df3.png)

9. Choose the correct location of the PFT files and select ok

![](../device-interface-pft-system.assets/4bc7901d012c61eef9466b8b0444198d.png)

10. PFT files will populate in the filebox

![](../device-interface-pft-system.assets/424899e3156031c9f76ead939786a1cd.png)

11. Choose the correct PFT file for the correct patient
12. Click <em>upload file</em> button

![](../device-interface-pft-system.assets/5fbac47dfd832ee83c272d943ae3d18a.png)

13. Pop-up warnings will display to warn users of missing information. For example, if the reason for the test was not selected or if no comments were entered, a warning will display. Users can select the cancel button to go back to the data entry screen and fix the issue and/or then click "ok" to pass through the warning message and to proceed to Step 14.

![](../device-interface-pft-system.assets/018786b7e8d969d96d8f8e65b69c4e2d.png)

14. Upon uploading the file, PFT results will display in the PFT section of the encounter.
15. If prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
16. If in an encounter, click the SAVE button to ensure PFT results are saved to the encounter before proceeding to the next encounter section.
17. Most systems have a "Test Results" chart tab and a sub-tab named "PFT" that these stored/uploaded documents get placed in, along with the DocSum chart tab.
18. <strong><em>For client databases on release 202503 and newer</em></strong>',<strong><em> </em></strong>'all ActiveX controls have been deprecated from PFT device interfaces and replaced with the MIE Device App, thus users will no longer be required to select the <strong>File Type</strong>,<strong> Load From Device</strong> or <strong>Upload File</strong>. Users will save their export file to the MIE Device App. When the MIE Device App detects a new result, the PFT will automatically create a document and display it in the patient chart.

## PFT Graphs

PFT documents from devices display the PFT graph on a separate page from the results. This should produce better resolution when printing.

By Default the system will store and display results in Milliliters. Users may also view and edit PFT results in Liters. This is done through a system setting: "E-Chart/PFT/Display Liters". Most PFT device interfaces are only capable of sending results to {{% sys-name %}} in mL. However, {{% sys-name %}} recognizes providers generally interpret results from Liters. {{% sys-name %}} will therefore store the values in mL, but allow users to view results in L with the use of this system setting.

![](../device-interface-pft-system.assets/aa7c52208b2f7745d19e2dca15e5612f.png)

Example:

Paper report generated by PFT

![](../device-interface-pft-system.assets/a9d6871a0272e93972d6953c14e31758.png)

Legacy entry method (users had to manually convert from L to mL)

![](../device-interface-pft-system.assets/e850360e871fbd4a8cf30ff93bf5b0d2.png)

New entry and display in {{% sys-name %}} with system setting enabled: (Users may enter what is on the report exactly)

![](../device-interface-pft-system.assets/091bb607380f6ea4046cb2ccf7465634.png)

## Use in Encounters

When adding a PFT in-office procedure, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If this behavior is not wanted and the users prefer to always have a blank value, this can be done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver) but can be modified with the help of the {{% sys-name %}} Support Team.

Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it. *Note: contact your MIE Implementer if you wish the PFT Interpretation field to populate an encounter "view". This is an optional setting that can be placed on encounter views to show PFT Interpretation.*

![](../device-interface-pft-system.assets/24613d4e362c92556f3cf852287d69d0.png)
