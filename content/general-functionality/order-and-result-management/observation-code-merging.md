---
title: "Observation Code Merging"
date: 2020-03-13T19:54:16.045Z
url: "general-functionality/order-and-result-management/observation-code-merging.html"
author: Jeremia Ploor
version: 35
id: 17At0A9fBSekiKBKyzhJeCmj9D1qV4PI_pVErgnroP_c
source: https://drive.google.com/open?id=17At0A9fBSekiKBKyzhJeCmj9D1qV4PI_pVErgnroP_c
menu:
    main:
        name: "Observation Code Merging"
        identifier: "17At0A9fBSekiKBKyzhJeCmj9D1qV4PI_pVErgnroP_c"
        parent: "103elDMKyCQlA8uZjycHzAZ90L6BR3FTzxRLYOKrgpo8"
        weight: 1960
---
Must have security permission to access observations code manager and to merge them.

Look to see which is the most commonly used code. Either clicking on the obs code value or ‘View' gives the observation count. Find the one used the most. Summary: whatever you want to merge, you simply click ‘Merge' on the code you're eliminating, and then enter the obs code number that you want it to become in the ‘Destination' box.

Click on the Control sidetab menu.

Click on the Observation Codes tab at the top.

![](../../external_files/57db605e1f0bf419b9720d97257006c1.png)

You can search as you wish, but we recommend that in the Criteria search field, choose the **Contains** option by using the drop-down.

In the Search field, type in the name of the observation that you need to locate. You can type in partial and it will render the search according to the partial text you entered.

In the By field, choose **Observation Name** using the drop-down.

Click on the **Go** button.

![](../../external_files/cf8ccde9f9cd7922e3ac947cc7a687a1.png)

When merging an observation code you will want to merge from the observation code that you want to be *removed/overwritten*. For example, if want to merge observation code 792 Glucose to observation 212 glucose you will merge **from** observation 792 glucose.

Click on the Merge option to the right of the observation you want to be removed and is to merge into the other. Using the above example, you would click merge on 792 because you will be merging it into 212. Then, 212 will be the saved/stored observation and 792 will go away.

![](../../external_files/0ed7351a129bdf6acc7460455ee5c6f5.png)

You will then need to type in the Observation code number that you want to be the primary Observation code. The one you are merging this one into. The observation code typed here will be the one *saved/stored*.

![](../../external_files/430e7b5855594dce3302e3a6f5f4b389.png)

Click on the Continue button.

{{% warning %}}

Once an observation code is merged, there is no way to unmerge it. MIE cannot even unmerge them. Please make sure to follow the merging steps correctly.

{{% /warning %}}


To continue the Observation code merging you must checkmark the Verify box. The Merge button is greyed out until you check-mark the *verify* section. This is just protection to make sure you wish to proceed with merging. Again, once an observation code is merged, there is no way to unmerge it.

Once you have check-marked the verify box, the merge button is no longer greyed out. The Merge button becomes available and you are able to proceed with the merging. Click MERGE button to merge the observation codes. Again, please verify that you have chosen the correct observation code to merge from and into.

![](../../external_files/d98c5406345dc57488edf9f8ae04d0da.png)

![](../../external_files/7318c50285fc371e1ba548574f522939.png)

![](../../external_files/635b22b1a18bdb0b6e63726a5649446d.png)

You will receive confirmation of the observation code merging and you will notice that there is now only one Glucose observation.

![](../../external_files/7b6036ec0f12eebb2decbaaa4b1b47e9.png)

When observation codes are merged, a record of the merge will be stored. The ID of the user performing the merge and the date will be stored, along with the fields of the code being merged away and the number of the new observation code.

