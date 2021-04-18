---
title: "Alerts Tab - Warnings"
date: "2020-02-27T21:12:42.458Z"
url: "general-functionality/e-chart/alerts-tab-warnings.html"
author: aquandt
version: 28
id: "1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0"
source: "https://drive.google.com/open?id=1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0"
menu:
    main:
        name: "Alerts Tab - Warnings"
        identifier: "1vUPZD7Lf494oA4mQAaydY64sXCaKu28_IaHkc6Jg_Z0"
        parent: "1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU"
        weight: 1000
---
In the patient's ‘Summary' chart tab is a portlet named *Warnings/Alerts* where you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, guidelines (scripted rules) etc. for the patient.

![](alerts-tab-warnings.images/image1.png)

Also, as a separate chart tab in the patient's chart, is a chart tab named ‘Warnings', you will see drug interaction warnings, allergy warnings, duplicate therapy alerts, etc. for the patient.

![](alerts-tab-warnings.images/image3.png)

The warnings section also shows in the encounter (point & click) exam. Contact your MIE Implementer if you want it programmed on any encounter.

![](alerts-tab-warnings.images/image4.png)

Drug interaction warnings and Allergy warnings will also appear in E-Meds module when adding an allergy/intolerance or prescribing a med, or in the patient's medication history. {{% system-name %}} can generate a warning stating contraindications and duplicate therapies, so we encourage entering allergies for patients and current meds the patient is taking.

{{% system-name %}} currently imports the First DataBank (FDB) update files on a weekly basis on Saturday mornings at 2 am. MIE then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on each of the client servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

We do not "message" after updates these updates. However, we do have a message on the Drug Guide that you can see what the version is. The Drug Guide Search feature is usually found in the sidemenu tab named References, however in your particular {{% system-name %}} system, it could be found in the Omniscope side tab or in the E-Chart tab. The Drug Guide Search program is also found while prescribing in the e-meds module. Wherever your particular Drug Guide Search program is, when you get to that program you will see under the Drug Guide search field bar for example: **Drug database version: 2.400, last updated 2010-06-12 02:16:17**

This shows the last time we have updated the Drug database (not the rxdb as a whole, it looks specifically only for updates called ‘FDB Update') on the server box the system is looking at. This mainly gives MIE information to make sure the client is getting the updates we are putting out in our "home" base version. If there is a problem with the home base version for some reason (even if this is up to date), this will have an issue, but MIE would be alerted internally that there is an issue with the mainline not getting updated properly.

For more information on how to use the Drug Guide Search, please see our [Drug Guide Search](../medication-management-and-e-prescribing/drug-guide-search.html) help documentation.

![](alerts-tab-warnings.images/image5.png)

The warnings automatically sort and default to order by Severity. Guidelines are scripted rules that MIE can program for you based on specific things you want to be alerted for on your patients based on different criteria and conditions. Contact your MIE Implementer if you wish to have a scripted rule/guideline programmed for your practice/specialty.

![](alerts-tab-warnings.images/image6.png)

Hovering your mouse over the ![](alerts-tab-warnings.images/image7.png) help icon will pop-up a monolog more detailed information about that specific warning/alert.

![](https://lh6.googleusercontent.com/J-ag2duJImf8yMn6Wz8Ufka9LFWn8-DwuRzyGd1moza45VYX1CDLVqq8Mtf8ZiEK-njl_uDONsDfT7vT99nAEeDrYv0IXmwV1GnCCdahqlcSKncgH3v3eNq7frZZDRaow4Mz3zOddqbWyrKtEg)

If a Drug interaction warning or Allergy warning appears in a patient's chart while prescribing or documenting.

## Dismiss Allergy/Medication Warnings

Based on your security permission in {{% system-name %}} , you may be able to dismiss warnings for the patient only or for all patients or not at all.

![](https://lh4.googleusercontent.com/3xtskjmqJ8thsGfa9qBdlJqIPhbql6YmAuZEpg8ZCiRjeG2cLOnD1nZDEmhw8JuzdJ8MFeIB-BALA3TjGxcglIvLwC8_ObYhGCi-J-jy0U9na_hd081nRWllGrsDe9zwrIjLp-ZGXGDyPtPTcw)

Most practices give the nurses/MA's the right to dismiss for ‘this patient' and give the physician's the higher security to dismiss ‘for all patients'.

![](https://lh6.googleusercontent.com/pJ9CNeeyfH9Q5BsFRUi2RSTMq5hF6w7LL7LDUKqtl5ln8SlHjn2PrzUtdLGMu1RYrklhHmPZ6XabI3s__xh8NZfMIoRaTZie_Th3GQmOwtn7SfBpE8Bht71rmzz6nXj2VZdiEO-8mOxMT1T-zg)

MIE cannot hide or remove the warnings.  To be an e-prescribe system and per the guidelines, etc we are to generate these interactions and warnings.  These warnings are required. These warnings also display/print on the Med Sheet. The system is telling you a warning, contraindication, interaction or duplicate therapy.

If you wish to dismiss it, you would do the following steps (if you have security permission to do so).

Usually, the Physician has been set with security rights to dismiss all levels.  The physician can dismiss the warning for that specific patient only.  Or the physician can dismiss the specific warning for all patients via him or all users.

![](https://lh6.googleusercontent.com/68BSEIUODEcQ-JZpNwT33Kq50QIrJ01xJiNbqjPh2kcKi3lB7HPVhLHifWX5NkDM639t_ROnCaFv6NcfaBl-VPE9j5IuvHJpVHtWsUt7wZSX5w0PlLn0esnSb5dj-Nm7bTToSmVRReCjgE2pKA)

Usually, the nurses have been set with security rights to dismiss warnings only for that specific patient only (doesn't affect all other patients).

If the physician does decide to dismiss, there is a security setting to dismiss "this one time for this one patient" or for "all patients".  (Usually nurse's only can dismiss for that specific patient only.  Physician's usually are the only ones with full security rights).

 If the physician dismisses a warning for "all patients' they would only have to dismiss once and never see it generated again.  We discourage this because it really defeats the purpose of showing warnings and affects all other patients and the warning won't pop-up again for any patient.

If you wish to dismiss, go into the specific patient's chart and click the dismiss option link. This is how the physician or the nurse can dismiss the warning.

Warnings should only be dismissed by nurse's or MD's. The *Reason for Dismissing* field should be filled out for why you are dismissing the warning. It will accept free text, but it will also auto-complete and give you choices of previous entries of reasons why warnings were dismissed (it saves previous reasons for dismissing entries if a dismissing reason was typed in twice exactly the same).

![](https://lh3.googleusercontent.com/vS-dNSM0EzTzVoXC2Jh_k5-k1Y_sHZdwU7QGsHznuNtqVt4rZTwwZkHfkm6KtlOVc7SJAoszGAF5V9r2Cyxbf0nw-rynJmmusoHZ86kQgb4_bbF7fMCTtq-hwAqqWqsQ_Xh8qCs0xN7zHcbc9A)

![](https://lh3.googleusercontent.com/_em41_gFbixzIlMIP9cVSzM2iXxx9OWa52sMDiId-KtYjDk8-sAGRifhgtdu2GCR8lMJSQFPPyUmmU5oaIDCxX2fPShLpUCzE_U5napf2ldy_GW-T7P2nEQGI3LYWo2yPL_dzdcVjBSBn6Iqdw)

## Dismiss Guideline Warnings

Based on your security permission in {{% system-name %}} , you may be able to dismiss warnings for the patient only or for all patients or not at all.

![](https://lh4.googleusercontent.com/3xtskjmqJ8thsGfa9qBdlJqIPhbql6YmAuZEpg8ZCiRjeG2cLOnD1nZDEmhw8JuzdJ8MFeIB-BALA3TjGxcglIvLwC8_ObYhGCi-J-jy0U9na_hd081nRWllGrsDe9zwrIjLp-ZGXGDyPtPTcw)

Dismissing Guideline alerts/warnings on a patient's chart are different than dismissing drug/allergy warnings. You can dismiss from the warnings/alerts portlet, warnings chart tab, or warnings section from encounters.

![](https://lh3.googleusercontent.com/vS-dNSM0EzTzVoXC2Jh_k5-k1Y_sHZdwU7QGsHznuNtqVt4rZTwwZkHfkm6KtlOVc7SJAoszGAF5V9r2Cyxbf0nw-rynJmmusoHZ86kQgb4_bbF7fMCTtq-hwAqqWqsQ_Xh8qCs0xN7zHcbc9A)

Click the Dismiss if you wish to dismiss the guideline alert for a patient for any reason.

![](https://lh5.googleusercontent.com/1qvSI2u2Wu5-YEW2wUI01B2ZtLQ2BgLqIQbkBl0T9wsp5iQ3rDNC3AROsLSURZWj7OxNNkJEo3AwvAp_nlzMQmkabn3lKEkzhpUAwT5dVaN7iLW8U4dktVCbw89EsHHiZTELc0_PtlbzJXmuig)

You then have to type in a reason for dismissing (make sure you are dismissing for only that patient and not all patients w/ that guideline warning/alert).

![](https://lh4.googleusercontent.com/NgXdUYe2RGm7t6y1Q0n-2LWBlUKb-3PDX6DHiSGLayrNdCsQzC1d-jtNE9N8Tf-OQyLKAufqbUCdVVyj6EJQ3w6TduCvuTrCLUbrqyBBJf6V6iKSgCubgodudjygdun7EB7s3xGZzpbjR94_mQ)

Resume Warning: Enter a date you want the Warning to reappear on the patient's chart. This warning will reappear on the day selected/entered. The date is when you want the alert dismissed until.  So the alert will not display again until the date that is entered. Blank means never. Leaving this date blank and submitting the dismissal will mean the warning will never reappear for this patient.

