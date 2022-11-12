---
id: '15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
title: 'Device Interface - PFT System'
date: '2020-02-27T20:28:23.442Z'
version: 53
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
wikigdrive: '64fa77a2dd4586094b6074a78ed6769886b60894'
menu:
  main:
    name: 'Device Interface - PFT System'
    identifier: '15btk566skDwu1noTPXgMijYeYiXtYMKUYVBDC-UGfTA'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5510
---
The following is referring to a pulmonary OMI Sensormedics model number 922 system. Contact your MIE Implementer to see if your pulmonary system model can be interfaced or quoted
  
## Pulmonary Function Test  

1. Open {{% system-name %}} .
2. Pull up correct patient.
3. Go to PFT Tool chart tab or add encounter for patient and make sure there is a PFT on the due list for your patient.
   1. If there is not, you will need to add the procedure.
  
## Doing the PFT Calibration  

1. Select OMI Icon on desktop to open OMI database.
  
![](../device-interface-pft-system.assets/100000000000004E00000036E66698D4D7FAF45D.png)  

1. If a calibration has not been completed for the day you will receive the following pop up box.
  
![](../device-interface-pft-system.assets/100000000000010B0000008A762E3242B1C80558.png)  

1. Select OK
2. OMI Software will ask for user initials (Note: Initials are not required to proceed)
  
![](../device-interface-pft-system.assets/1000000000000156000000C3940BF4DB146060FA.png)  

  
![](../device-interface-pft-system.assets/10000000000000DE000000787F0A8BBF02E8FFE4.png)  

1. If you put your initials in and select ok you may see the error above. If so, select cancel to get past the error.
2. You can also select "Cancel" on the Operator screen without putting in initials and proceed.
1. Performing Calibration:
  
      Select the "Perform Cal/Leak Check" button. <img src="../device-interface-pft-system.assets/10000000000000AC0000001CEE55A890DCBF447C.png" />  

   2. The following screen will appear
  
![](../device-interface-pft-system.assets/10000000000002C900000102D6A42D5F4675F5D7.png)  

1. Verify that the Volume is set to 0 ml and the Temperature is appropriate.
2. Click OK and the following screen will appear:
  
![](../device-interface-pft-system.assets/10000000000003220000024372446DAE304F848B.png)  

1. Click OK in the Syringe connected box and the following screen will appear. Once you begin emptying the syringe the calibration will begin immediately.
  
![](../device-interface-pft-system.assets/100000000000032300000243618606E98D02E4F9.png)  

1. The following screen will appear when Calibration is completed.
  
![](../device-interface-pft-system.assets/10000000000002C800000142EB83EB0DDF52470E.png)  

1. Select "Save" and your Calibration is completed.
  
## Doing the PFT  

  
   Choose Select/Add Client <img src="../device-interface-pft-system.assets/1000000000000087000000164A4378532EF7B4E8.png" />  

   1. Select correct patient and select use selected match
  
![](../device-interface-pft-system.assets/100002010000029E0000009EAEDA3E32D8E76C87.png)  

1. Make sure patient information page is correct.
  
![](../device-interface-pft-system.assets/10000201000002A00000021D4871284F991B08CA.png)  

1. Select ok
2. Select yes
1. If this patient is not in the list select New Client
   1. Fill out correct information for current client
  
![](../device-interface-pft-system.assets/1000000000000268000001EFDA40A92720EA9CB9.png)  

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
  
![](../device-interface-pft-system.assets/100002010000031000000239180BAEFB4A83FD1C.png)  

1. Select the file type (OMI, Easy On, or Cardio Perfect – whichever your device type is using).
  
![](../device-interface-pft-system.assets/100002010000029500000103452E52B83423EEA8.png)  

1. Select Load from Device
  
![](../device-interface-pft-system.assets/100002010000032400000131F4FB9F2EEDB14B53.png)  

1. Select the reason for test using the drop-down, enter in any observation (height/weight) data above that.
2. Scroll to Load Data/file box
  
![](../device-interface-pft-system.assets/100002010000024C00000147777A07E5B30677FF.png)  

1. Change the smartcard to point to the correct folder.
   1. Changing smartcard:
      1. Right click on filebox/data box
      2. Choose set smartcard folder
  
![](../device-interface-pft-system.assets/10000000000000B600000104C4F84B3EB8F0AEB1.png)  

1. Choose the correct location of the PFT files and select ok
  
![](../device-interface-pft-system.assets/1000000000000141000000B761B4E7476F1250FA.png)  

1. PFT files will populate in the filebox
  
![](../device-interface-pft-system.assets/1000000000000195000000AC27F0BC32FED61A3E.png)  

1. Choose the correct PFT file for the correct patient
2. Click <em>upload file</em> button
  
![](../device-interface-pft-system.assets/100002010000024C00000147F3A856AAD3C7FF5C.png)  

1. Some pop-ups will show if you didn't select the reason for the test or enter any comments, etc. You can go back to fix or you can click "ok" to get thru the message to proceed.
  
![](../device-interface-pft-system.assets/1000020100000166000000A50C32F7905802CF08.png)  

1. PFT results will upload to encounter or PFT tool chart tab depending where you are working from.
2. If prompted select YES to delete the record as the folder should remain empty and only the current results should be showing.
3. If in an encounter, click SAVE button to ensure PFT results are saved to encounter.
4. Most systems have a "Test Results" chart tab and a sub-tab named "PFT" that these stored/uploaded documents get placed in, along with the DocSum chart tab.
PFT documents from devices can now have the graphs on a separate page from the results. This should produce better resolution when printing.  
Can now view and edit PFT results in liters instead of milliliters. This is done through a new system setting "E-Chart:PFT:Display Liters" to turn this functionality on or off. Previously if you manually entered PFT results, you had to convert the values from mL to L. Only interfaces results seem to send in mL. But physicians generally interpret results from L. {{% sys-name %}} still store the values in mL, the setting just allows the display to be in L.
  
![](../device-interface-pft-system.assets/10000201000002CB0000005836972B738E391811.png)  

Example:  
Paper report generated by PFT
  
![](../device-interface-pft-system.assets/10000201000001BB0000006F6D9ED1373F8ED17C.png)  

Old entry method (you had to manually convert from L to mL)
  
![](../device-interface-pft-system.assets/1000020100000205000000A86AE9B986735E93BF.png)  

New entry and display in {{% sys-name %}} w/ system setting on: (now you can enter what is on the report exactly)
  
![](../device-interface-pft-system.assets/10000201000001B2000000CD9382A927A9B86552.png)  

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).  
Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it. *Note: contact your MIE Implementer if you wish the PFT Interpretation field to populate an encounter "view". This is an optional setting that can be placed on encounter views to show PFT Interpretation.*
  
![](../device-interface-pft-system.assets/10000201000003770000019FC13B827CD357A830.png)  

