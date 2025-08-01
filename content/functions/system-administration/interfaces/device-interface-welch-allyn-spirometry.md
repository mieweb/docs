---
id: '1ERuxHIyjMqRHm98pmeU7xyvq_t7sRKZJMBGh3Fj-Jd0'
title: 'Device Interface - Welch Allyn Spirometry'
date: '2020-02-27T20:28:56.204Z'
version: 39
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1ERuxHIyjMqRHm98pmeU7xyvq_t7sRKZJMBGh3Fj-Jd0'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
The following is referring to a Welch Allyn CardioPerfect spirometry system. Contact your MIE Implementer to see if your audio system model can be interfaced or quoted.

From the chart tab named *PFT* or while working inside an encounter in the PFT section of fields that opens up, make sure the "file type" is correctly defaulted/selected for your spirometry device (CardioPerfect is what these instructions are for).

![](../device-interface-welch-allyn-spirometry.assets/278bd91e8673a0fddf083772fb20031f.png)

Click the "Load From Device" button.

![](../device-interface-welch-allyn-spirometry.assets/9b8e81b29a3dc0c3d8551774ae1e1339.png)

The Welch Allyn CardioPerfect window will display as a pop-up window.

![](../device-interface-welch-allyn-spirometry.assets/dacb0656ea6c39c025d252d5e5932087.png)

Select the **Spirometry** button on the Welch Allyn CardioPerfect screen.

![](../device-interface-welch-allyn-spirometry.assets/e38d11d4eaa80d608699a5663a92d0ca.png)

It should populate the patient's information in the fields on the screen titled *New Spirometry Test*. If not, you will need to manually input the data then click the *next* button.

![](../device-interface-welch-allyn-spirometry.assets/b7f3686854718c2676bc3f0979bfe638.png)

The **Recording/Test** screen will display while the test is being performed.

![](../device-interface-welch-allyn-spirometry.assets/940589d91db1e3104f4860b23fbfecf2.png)

The Welch Allyn CardioPerfect screen displays as the study is created. Once the study is created, press the **Alt Tab** keys on your computer keyboard to go back to the {{% system-name %}} screen.

![](../device-interface-welch-allyn-spirometry.assets/e25b0703a8c73ed82ff966f26f895279.png)

The PFT data results will automatically import into the patient chart in {{% system-name %}} and fill in the appropriate fields with results.

![](../device-interface-welch-allyn-spirometry.assets/3f27cba5b17803920610374922cfcb87.png)

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).

Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it.

![](../device-interface-welch-allyn-spirometry.assets/24613d4e362c92556f3cf852287d69d0.png)

You can scroll down to the **Comments** section on the PFT {{% system-name %}} screen and document any comments from the test.

The **Load Data** section will be highlighted (both lines/files). Click the **Upload File** button to upload the data into the patient's chart to be stored and saved.

![](../device-interface-welch-allyn-spirometry.assets/22f0bf3007795c34afa926cd24d07ff6.png)

If you did not select a *Reason for Test* in the PFT screen in {{% system-name %}} , it will now alert you of that. You can continue through and click OK through the alert telling you no reason for test was selected.

![](../device-interface-welch-allyn-spirometry.assets/c3bf54cde122755049dfe873ed8d355e.png)

![](../device-interface-welch-allyn-spirometry.assets/c3d77a1521043e4c5520e2a25796cb49.png)

If you did not type in any *comments* in the PFT screen in {{% system-name %}} , it will now alert you of that also. You can continue through and click OK through the alert telling you no comment has been entered.

![](../device-interface-welch-allyn-spirometry.assets/acbb3262c14eb8807b1226c72a817524.png)

![](../device-interface-welch-allyn-spirometry.assets/e4ea6dbe0b0dedc64fb6754bad005309.png)

An **Upload Successful** pop-up window will display. You need to click **Yes** to delete the images you uploaded in order to clear the PFT data out of the device. It is already stored in {{% system-name %}} in the patient's chart so you are not deleting the information from the patient's chart in {{% system-name %}} . It simply deletes the files from the device interfaced to.

![](../device-interface-welch-allyn-spirometry.assets/5897e6ffdf4aabd9f276f3b2682dbf3b.png)
