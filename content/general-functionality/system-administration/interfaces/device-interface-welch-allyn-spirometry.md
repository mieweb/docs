---
title: "Device Interface - Welch Allyn Spirometry"
date: 2020-02-27T20:28:56.204Z
url: "general-functionality/system-administration/interfaces/device-interface-welch-allyn-spirometry.html"
version: 28
id: 1ERuxHIyjMqRHm98pmeU7xyvq_t7sRKZJMBGh3Fj-Jd0
source: https://drive.google.com/open?id=1ERuxHIyjMqRHm98pmeU7xyvq_t7sRKZJMBGh3Fj-Jd0
menu:
    main:
        name: "Device Interface - Welch Allyn Spirometry"
        identifier: "1ERuxHIyjMqRHm98pmeU7xyvq_t7sRKZJMBGh3Fj-Jd0"
        parent: "1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q"
        weight: 5540
---
The following is referring to a Welch Allyn CardioPerfect spirometry system. Contact your MIE Implementer to see if your audio system model can be interfaced or quoted.

From the chart tab named *PFT* or while working inside an encounter in the PFT section of fields that opens up, make sure the "file type" is correctly defaulted/selected for your spirometry device (CardioPerfect is what these instructions are for).

![](../../../external_files/eb813f54e47cb5890c40ee40c1c5c5c5.png)

Click the "Load From Device" button.

![](../../../external_files/a4bb4d538608e77b2112bcc9676bf136.png)

The Welch Allyn CardioPerfect window will display as a pop-up window.

![](../../../external_files/c498dc674cbab6261a22d003f09df157.png)

Select the **Spirometry** button on the Welch Allyn CardioPerfect screen.

![](../../../external_files/929d3202321d747b5818b271f46f9fd7.png)

It should populate the patient's information in the fields on the screen titled *New Spirometry Test*. If not, you will need to manually input the data then click the *next* button.

![](../../../external_files/7901bdc85114d1bfebdf04b6a3e042bf.png)

The **Recording/Test** screen will display while the test is being performed.

![](../../../external_files/f020251c8afa768d233241905b5701fd.png)

The Welch Allyn CardioPerfect screen displays as the study is created. Once the study is created, press the **Alt Tab** keys on your computer keyboard to go back to the {{% system-name %}} screen.

![](../../../external_files/d264f62c85448ab577f0da0209e1de6f.png)

The PFT data results will automatically import into the patient chart in {{% system-name %}} and fill in the appropriate fields with results.

![](../../../external_files/42601ae2503ff792b4f336f79f50239e.png)

Encounters: When adding an in-office procedure of a PFT, there is a new option to not automatically populate the PFT Tool with the most recent maneuver. Example: a PFT was done 3 days ago and a new encounter is created/opened and an in-office procedure of PFT is selected to be done today, the PFT screen by default will pull the last maneuver & results/date. If want that off and clean screen to type in results, this is done with an attribute to the new tag WCPFTTOOL "populate_last_maneuver". By default it is on (to pull the most recent maneuver).

Manual Entry: In the PFT manual entry screen, there is ability to enter an interpretation and mark a maneuver as the best maneuver. Views of the interpretation of a maneuver in the list of all maneuvers will show the first 25 characters and the rest is available when hovering over it.

![](../../../external_files/dba7479b144d71d07cdab198e4c47d49.png)

You can scroll down to the **Comments** section on the PFT {{% system-name %}} screen and document any comments from the test.

The **Load Data** section will be highlighted (both lines/files). Click the **Upload File** button to upload the data into the patient's chart to be stored and saved.

![](../../../external_files/c3d568dc85b7b975679cfbf15b9e429d.png)

If you did not select a *Reason for Test* in the PFT screen in {{% system-name %}} , it will now alert you of that. You can continue through and click OK through the alert telling you no reason for test was selected.

![](../../../external_files/f9d1af39496ad1c1667b69947315a5e2.png) ![](../../../external_files/b392ce1f93cb1e0b5bb570daba7abbf2.png)

If you did not type in any *comments* in the PFT screen in {{% system-name %}} , it will now alert you of that also. You can continue through and click OK through the alert telling you no comment has been entered.

![](../../../external_files/8bb39cc6f38d2eeec0bae2d24792e178.png) ![](../../../external_files/96930160299d45d43a7d933f96f21a75.png)

An **Upload Successful** pop-up window will display. You need to click **Yes** to delete the images you uploaded in order to clear the PFT data out of the device. It is already stored in {{% system-name %}} in the patient's chart so you are not deleting the information from the patient's chart in {{% system-name %}} . It simply deletes the files from the device interfaced to.

![](../../../external_files/7b893ee9fac37b879c99d80f300fdfc8.png)

