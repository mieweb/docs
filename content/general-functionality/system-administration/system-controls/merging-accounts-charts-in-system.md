---
title: "Merging Accounts/Charts in System"
date: 2020-02-27T20:22:07.557Z
url: "general-functionality/system-administration/system-controls/merging-accounts-charts-in-system.html"
version: 42
id: 1c8cCEVXofjXUudcZMlnClVF1Ocn4JL3jIHFRSujRDoY
source: https://drive.google.com/open?id=1c8cCEVXofjXUudcZMlnClVF1Ocn4JL3jIHFRSujRDoY
menu:
    main:
        name: "Merging Accounts/Charts in System"
        identifier: "1c8cCEVXofjXUudcZMlnClVF1Ocn4JL3jIHFRSujRDoY"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4660
---
*You must have specific security permissions set to merge inside or outside or all MR#'s. If you do not have these permissions set, you will not be able to access and merge accounts in {{% system-name %}} .*

Click *E-Chart* on the left sidebar menu.

Search and select the patient's chart that you will merge information **into**. This needs to be the patient's main account that you are going to *keep* and MR# that will continue to be active.

Get into the patient's chart. Click *Demographics* chart tab at the top in the patient's chart.

![](../../../external_files/0f31200aa2262ee5d73167f7be898569.png)

While in the *Demographics* chart tab, use your mouse to scroll all the way down to the bottom of this screen. If any matches in your system already exist that closely match the patient that you are in, there will be a header that says **Matching Patients in patients partition(s)** or **Matching Patients NOT in patients partition(s).** It will then list the partition MR# of other patients that are a close match to the patient you are in, their full name, birth date, and a *rating* number. Follow then the directions below for merging a duplicate account to this patient's account in the same or other partition.

If no matches in your system exist that closely match the patient you are in, there will not be any header. You would then click *Manual Search* down at the bottom of the screen and follow the directions below to search for the duplicate account you want to merge to this patient.

![](../../../external_files/a834ba85ee1868a5f925e5ca6222b7c2.png)

## Merging Matching Patients

If the duplicate patient is listed in the *Matching Patients in patients partition(s)* or *Matching Patients NOT in patients partition(s)* then you would first make sure the patient(s) you select from here are definitely the same as who you want to merge into.

![](../../../external_files/771d3693887fa1d13a0db96c89ef31a2.png)

You can click the underlined Partition MR# or patient's name to view the information in those accounts to verify that it indeed is a duplicate account that needs merged into the patient's chart you are in.

### Rating

The rating column gives a number. Ratings range from 0 to 9. Ratings with a 9 are the best, meaning that the core information in that account matches the patient you are in and wanting to merge to. If a rating is below 9, that is a flag to really make sure to research the account to verify it is indeed a duplicate match to the patient you are in. Rating of 8 or lower would mean that something is definitely different in that account vs the account you are in. For example: birthdate, any part of the patient's name, etc.

When you have verified the Partition MR#/duplicate patient accounts that you want to merge into the current patient's chart that you are in, you have to checkmark the **select** box for which accounts you want to merge into the one you are in.

Click the *SELECT* box to checkmark the patient(s) from the *Matching Patients in patients partition(s)* or *Matching Patients NOT in patients partition(s)* that you want to merge into the patient's chart that you are currently in.

![](../../../external_files/771d3693887fa1d13a0db96c89ef31a2.png)

After you have selected the patient(s) that match, click the *PREVIEW MERGE* button at the bottom of the screen. It will then open to the *Merge Preview for Patient:* screen. There are essentially 3 sections to the *Merge Preview* screen.

The first section (at the top) will be the demographics information of the patient that you are currently **in** and want to merge the information/account(s) **to.** Verify that you are still in the correct patient's chart that you are merging information into.

![](../../../external_files/c9e4ab36ba0d69c525883b4fa7602046.png)

Scrolling down, to the middle of this preview merge screen, you will see the second section. When you scroll to the middle of this preview merge screen, it will display the **Merge Options**. These are radio buttons (choices) to perform your merge. Click the circle (radio button) of the Merge Option you wish to perform. You must make a selection here for the merge to be performed.

![](../../../external_files/8e7f9f097a1bcec426b430ddeb10ee66.png)

* <strong>Choice 1:</strong> <strong>Merge Chart only & ignore this patient's demographics</strong>. What this means is that if selected, it will merge and only keep MR number of the chart the documents are being merged to (regardless of partitions being merged).
* <strong>Choice 2:</strong> <strong>Merge Chart & Demographics & ignore this patient's duplicate MR Numbers.</strong> What this means is that if selected, it will merge and keep both MR numbers when merging MR's from two different partitions. If merging two MR numbers from the <em>same</em>partition, only the MR number of the chart that the documents are being merged to will be kept. (This is the most common selection used).
* <strong>Choice 3:</strong> <strong>Merge this patient's chart & keep all MR#'s</strong>. What this means is that if selected, it will merge together the patient's entire chart and keep all MR numbers regardless of partitions.
* <strong>Choice 4:</strong> <strong>Merge this patient's documents and MR Numbers Only.</strong> What this means is that if selected, it ONLY merges the documents in the "from" patient and the MR numbers on that patient to the merged "into" patient. No other data (demographics, meds, conditions, etc) would be merged.

The third and last section of this *Merge Patient* screen (scroll down past the Merge Options) is the demographic information of the patient(s) you are going to merge information **from** and put into the current patient's chart you are in. Verify that this is still the patient(s) account that you are going to merge from. You will be merging this patient(s) information and chart into the current (top portion) patient's chart.

![](../../../external_files/c70d270b3e6f17be7e9202729245a7b1.png)

After you have verified and made your Merge Option selection, click the button at the very bottom that says **Merge Using Selected Options.** Once you click *Merge Using Selected Options*, your merge will automatically begin. If you click this box and forgot to select a Merge Option, it will give you an error message and you would click *Go to Patient* to start all over again.

![](../../../external_files/c70d270b3e6f17be7e9202729245a7b1.png)

After you click *Merge Using Selected Options*, it will open a screen that says **Merge Preview for Patient:**

Then it has a summary list of everything it merged. Your merge is completed.

![](../../../external_files/048055ad36585090fc6b8ac0dff6c6ae.png)

![](../../../external_files/0860f2760abf823bc3eca4508a637972.png)

You can click the button at the bottom that says *Go to Patient* to return to the main patient's chart, or you can also click *E-chart* on the left sidebar menu to get out and work on another patient chart, etc.

## Manual Search to Merge

If you know there is a duplicate  {{% system-name %}} account in the system, but it doesn't show up in the *Matching Patients in patients partition(s)* or *Matching Patients NOT in patients partition(s)* summary, you can manually search for the  {{% system-name %}} account and merge it to the patient you are in.

Click *E-Chart* on the left sidebar menu. Search and select the patient's chart that you will merge information **into**. This needs to be the patient's main account that you are going to *keep* and MR# that will continue to be active.

Get into the patient's chart. Click *Demographics* chart tab at the top in the patient's chart.

![](../../../external_files/fe4bd2a4b751caac5189e06792884bfa.png)

While in the *Demographics* chart tab, use your mouse to scroll all the way down to the bottom of the patient demographics screen.

If the system finds no matches that closely match the patient you are in, there will not be any header. You would then click *Manual Search* down at the bottom of the screen after the insurance section. This is the MANUAL SEARCH link to access a manual search to find a chart and perform a merge.

![](../../../external_files/662d721581284846c169176fe078455b.png)

After you click the *Manual Search* link, a new screen will **not** pop-up. It will instead, pop-up a **Search for "Merge From" patient not found below:** box right where you had just clicked Manual Search. If you don't see it, just use your mouse to scroll down on the screen you are on.

![](../../../external_files/0985ad5573d4393bb5223836710b4d5d.png)

### Search for "Merge From" Patient Not Found Below

This is a search engine to find the patient's account you want to manually search and find to merge the information from. You can select a search by MR#, Name (type last name first followed by a comma and first part of name), SSN (Social Security Number), Date of Birth in MM-DD-YYYY format. You can also search by Home Phone (currently you **must** have full area code and full phone number typed all together **no dashes** are accepted) or specific Doc. ID. You would select the radio button and then type in the search information in the blank search field/box. Then click the *Search* button.

The search results will show up underneath the search field you typed in.

You can only select *one* patient at a time from these results to merge information from. (Unlike the matching partitions above where you can select check-boxes to merge more than one at a time.)

![](../../../external_files/63c4192c2af6b4ab1381c46e2e9c467c.png)

If you manually searched and found the patient's account you wish to merge into the current patient's account you are in, then click the underlined **MR#** to start a preview merge. If you click any other underlined results (name, ssn, dob, age) then it will open that patient's chart to verify contents, etc. You would then have to start over to merge.

![](../../../external_files/63c4192c2af6b4ab1381c46e2e9c467c.png)

This manual search does **not** give ratings, so please be sure to verify you indeed have the correct patient to merge from.

After you click the MR# of that patient you manually searched for and found, it will then open to the *Merge Preview for Patient:* screen. There are essentially 3 sections to the *Merge Preview* screen.

The first section (at the top) will be the demographics information of the patient that you are currently **in** and want to merge the information/account(s) **to.** Verify that you are still in the correct patient's chart that you are merging information into.

![](../../../external_files/24ed1ae9f013d60b3626d5d0e94a5561.png)

Scrolling down, to the middle of this preview merge screen, you will see the second section. When you scroll to the middle of this preview merge screen, it will display the **Merge Options**. These are radio buttons (choices) to perform your merge.

Click the circle (radio button) of the Merge Option you wish to perform. You must make a selection here for the merge to be performed.

![](../../../external_files/1215b739a2e43c283cfed6b8c2c7fa37.png)

* <strong>Choice 1:</strong> <strong>Merge Chart only & ignore this patient's demographics</strong>. What this means is that if selected, it will merge and only keep MR number of the chart the documents are being merged to (regardless of partitions being merged).
* <strong>Choice 2:</strong> <strong>Merge Chart & Demographics & ignore this patient's duplicate MR Numbers.</strong> What this means is that if selected, it will merge and keep both MR numbers when merging MR's from two different partitions. If merging two MR numbers from the <em>same</em>partition, only the MR number of the chart that the documents are being merged to will be kept. (This is the most common selection used).
* <strong>Choice 3:</strong> <strong>Merge this patient's chart & keep all MR#'s</strong>. What this means is that if selected, it will merge together the patient's entire chart and keep all MR numbers regardless of partitions.
* <strong>Choice 4:</strong> <strong>Merge this patient's documents and MR Numbers Only.</strong> What this means is that if selected, it ONLY merges the documents in the "from" patient and the MR numbers on that patient to the merged "into" patient. No other data (demographics, meds, conditions, etc) would be merged.

The third and last section of this *Merge Patient* screen (scroll down past the Merge Options) is the demographic information of the patient(s) you are going to merge information **from** and put into the current patient's chart you are in. Verify that this is still the patient(s) account that you are going to merge from. You will be merging this patient(s) information and chart into the current (top portion) patient's chart.

![](../../../external_files/4d8a0839ee30fdd18fcee66aed6c7b95.png)

After you have verified and made your Merge Option selection, click the button at the very bottom that says **Merge Using Selected Options.** Once you click *Merge Using Selected Options*, your merge will automatically begin. If you click this box and forgot to select a Merge Option, it will give you an error message and you would click *Go to Patient* to start all over again.

![](../../../external_files/8463f4c525f9643267fdc85f896063da.png)

After you click *Merge Using Selected Options*, it will open a screen that says **Merge Preview for Patient:**

Then it has a summary list of everything it merged. Your merge is completed.

![](../../../external_files/048055ad36585090fc6b8ac0dff6c6ae.png)

![](../../../external_files/0860f2760abf823bc3eca4508a637972.png)

You can click the button at the bottom that says *Go to Patient* to return to the main patient's chart, or you can also click *E-chart* on the left sidebar menu to get out and work on another patient chart, etc.

## Temporary/Inactive Records (Patient Accounts)

If the Record is marked as "Temporary", show this in the record header in the ALERT Background and Font Color in bold. This is simply a notice to the user letting them know they are viewing a record that is considered temporary.

If the Record is marked as "Inactive", show this in the record header in the ALERT Background and Font Color in bold. This is simply a notice to the user letting them know they are viewing a record is not active.

![](../../../external_files/1198eee3cf717684196c1f5f1664cc51.png)

If you merge an MR# chart with another partition, and the user makes the "other" partition the primary account number (which is incorrect to do), you get this warning on the patient charts.

The correct way is to merge the temporary patient into the permanent MR#. Then the warning should go away. If the user merges incorrectly like keeping the temporary account as the primary this warning will always show on the patient account. Soon (In a future upgrade release) a user will have the ability to mark the patient account as inactive from the demographic screen.

### Merging Temp Patient Accounts from Scheduler

There is a MY SETTING preference to show the merge patient link from the appointments listing in the scheduler views. This link *only*displays if you have the preference on to show the link and also only if the patient is a temp (tmp) patient (temporary) account. Some practices receive a lot of tmp patients through an interface that schedule appointments and this link here makes it easy to merge/reconcile them while viewing the appointment schedule.

![](../../../external_files/5d5c097b51e2f5b36c871b5d8c0f38e5.png)

The preference applies to the patient you are currently seeing on the scheduler screen.

There are 3 choices to set this MY SETTINGS preference to for the merge patient link from the appointments listing on the scheduler views.

![](../../../external_files/a0477c7860c6c444b00a764e99dfecba.png)

* <strong>Tmp Only:</strong> if you are set to tmp_only, you will only see the merge link on a patient whose account is marked as temp and has a single possible match.
* <strong>Always:</strong> If you set it to always, that doesn't mean it shows for every patient on the appointment listing, it just means it shows the link on both the tmp patient <strong>and</strong> the non-tmp patient matching account. Shows for patient's who haove a single possible match. No matter which patient you click merge patient on, the merge still works in only one direction, tmp to → non_tmp.
* <strong>No:</strong> The merge patient link is never shown on your view. Merging using the Merge Patient link from the scheduler appointment view is only possible for patient matches where there is single match and <strong>one</strong> of them is a tmp patient and the match has minimum rating of 8.

*You must have specific security permissions set to merge inside or outside or all MR#'s. If you do not have these permissions set, you will not be able to access and merge accounts in {{% system-name %}} . You will still see the Merge Patient link if your preference is set to show it—but you cannot perform the merge past the merge confirmation screen if you don't have security access to even merge patient accounts.*

When you click Merge Patient link, it will always only merge in one direction regardless if you click the Merge Patient link from the patient's tmp account or their active account (when it finds a single match).

Click the Merge Patient link and you will see a confirmation merge window open on your screen. You need to confirm the merge by clicking the MERGE button.

![](../../../external_files/68a76c767a476f12346a0af287f13310.png)

Doing a merge using the Merge Patient option will merge the patient's accounts after you click the MERGE button. It does not keep the patient's temp mr#. It discards the old temp info and merges it with the patient's active account.

You must have specific security permissions set to merge inside or outside or all MR#'s. If you do not have these permissions set, you will not be able to access and merge accounts in {{% system-name %}} . You will still see the Merge Patient link, you will still see the confirmation merge window, but when you click the MERGE button on the confirmation screen, you will see the warning display that you lack permission to actually perform the merge.

![](../../../external_files/e139f6e3981cae81c76c9680e64c2211.png)

{{% info %}}

This same "merging" functions & searches is available in the **Merge portlet** in the patient summary interactive tab if you have that portlet displayed for your view. The same security permissions respect for this portlet also.

![](../../../external_files/94267fe825f17fe5a2d688c511e3f986.png)

{{% /info %}}


