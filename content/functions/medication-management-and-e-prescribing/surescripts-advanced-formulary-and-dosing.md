---
id: '1gT7EBIu-7OE1aAdVGs5iI01pV8flTBqMVvxV1a8Ui-8'
title: 'SureScripts Advanced - Formulary and Dosing'
date: '2020-02-27T20:07:27.795Z'
version: 61
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1gT7EBIu-7OE1aAdVGs5iI01pV8flTBqMVvxV1a8Ui-8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The SureScripts advanced functionality includes access to Prescription Benefits (insurance eligibility and prescription benefit information of both formulary and eligibility), access to patient's Medication History and the ability to do Prescription Routing to Mail Order Pharmacies using the formulary selected. {{% system-name %}} will maintain a record of whether the patient was eligible for coverage in the patient benefit table for future reference and a request can‘t be sent more than once every 72 hours. This help document discusses the Formulary & Dosing functionality in the steps below.

## Formulary & Dosing from E-Meds Tab

Being able to access a patient's prescription benefit information (both formulary & eligibility) electronically allows prescribers to choose medications that are on formulary and are covered by the patient's drug benefit. Prescribers can also choose lower-cost alternatives such as generic drugs. Dispensing pharmacies are less likely to receive prescriptions that require changes based on the patient's drug benefit, which, in turn, reduces unnecessary phone calls from pharmacy staff to practices regarding drug coverage.

You must run eligibility before you can utilize the formulary features in the prescribe module. See other help documentation titled *Prescription and Insurance Eligibility Requests –SureScripts Advanced.pdf* Once eligibility was run and obtained (and an eligibility request cannot be sent more than once every 72 hours for a patient), then the Formulary(s) from the eligibility is loaded into the patient's chart. This shows in the patient's E-Meds tab and in the encounter Meds Plan section. The last eligibility run (date/time) also shows here.

{{% info %}}
If you have not run any insurance eligibility, there will be no notification here of last eligibility date/time or Formulary loaded for the patient. When you prescribe for a patient like that, you will only see the *dosing* information and no formulary information.
{{% /info %}}

The system setting named *Dose Range Calculator* must also be turned on to see SureScripts Dosing & Formulary for the patient and the medications when you prescribe.

![](../surescripts-advanced-formulary-and-dosing.assets/0906f0ca1131940568dba5aa07e96452.png)

That system setting in turn displays the *Dose/Formulary* button in the prescribing module of E-Meds tab. You can click that button to see the Dose/Formulary for that medication related to the patient's formulary that is loaded from the insurance eligibility request when you are prescribing.

![](../surescripts-advanced-formulary-and-dosing.assets/da85f65f09f8be0ca3a8f7b8fb8144a4.png)

However, SureScripts requires the Dose & Formulary to automatically appear when you are prescribing without having to click our *Dose/Formulary* button that is provided. But the button is provided in case you close the dose/formulary pop-up window and want to get back in at any time when documenting the prescription.

When you begin prescribing and select the medication to prescribe, when you get to the next field (*form* field) the Dose & Formulary pop-up window will appear. This is a requirement of SureScripts to make the Dosing & Formulary pop-up window appear automatically. Per SureScripts: *If eligibility has been run on the patient, on the prescription writing screen the application shall display, at a minimum, formulary status, all co-pay data for all pharmacy types provided, and an indication that a coverage restriction applies without user action.* Therefore when you prescribe, you will always see this Dose & Formulary pop-up screen appear. This is a requirement of SureScripts and we have to make it appear automatically.

Begin prescribing a med, select the *form* of the medication and see the Dosing/Formulary screen in its entirety on the screen.

![](../surescripts-advanced-formulary-and-dosing.assets/44e9e2ec2c3e1dea5a005bd43d49f7d0.png)

You will see the Dosing & Formulary for that in the pop-up window. If it's lengthy (which some are) use the side scroll bars in that pop-up window. To close this Dosing & Formulary window when you are done, simply click the X at the top right corner of this pop-up.

![](../surescripts-advanced-formulary-and-dosing.assets/caf03d9682a6d84643ede27d7c9b5417.png)

Some Dosing & Formulary screens have several different plan formularies you can choose from and some show many alternate details which makes the popup screen very lengthy and the scroll bar on the right is provided.

![](../surescripts-advanced-formulary-and-dosing.assets/6b686774a5eea03b5a8cb52fe73e6bcc.png)

If the patient has multiple formularies available under their benefits, you will see all of them listed in the patient's E-Meds tab or encounter Med Plan section. This is an indication of the # of plan formulary choices you will see when you get to the Dose/Formulary pop-up screen. There is a system setting to *show only best formulary* which can be turned on and it will only show best matching formulary for their drug/insurance eligibility coverage.

If the patient has several Formulary Detail sections for different plans, that means there are different plan formulary options available that you can look thru and click the [USE] button on the one you want to use (for mail-order pharmacy only). Formulary results list in descending order of formulary status. Thus, the best ones will be at the top.

There is a *My Settings* preference that can be turned on to only show the best formulary that SureScripts has ranked. If turned on (set to **yes**), it controls whether to display **only** the ones with the top status and the others are not shown. This will narrow down your choices and only show you the best formulary for that.

![](../surescripts-advanced-formulary-and-dosing.assets/9a03c7d5e824593486c0f33282d8c1f5.png)

It's been reported that most prescriber's will always want to choose the best formulary for the patient. Therefore, {{% system-name %}} provides this *my settings preference* that you can have turned on to only display and show *only* the best formulary(s) on every patient in this screen with top status. You will then not see other possible formulary choices in a lower status if there are any. This setting will only show the formularies noted as top status (*best formulary)* based on that formulary status from SureScripts Advanced on your screen and that [USE] button. Since this is a *my settings* preference, the users can choose to use it while others do not.

### Alternates

You may decide to use an alternate medication from this Dosing & Formulary window. If you want to prescribe the alternate instead, simply click on the medication alternate name in the Formulary window. It will then change the original medication name in {{% system-name %}} to be this alternate medication now and form.

Here is an example where I prescribed Daytrana, but when looking at the Dosing & Formulary window I decided to prescribe instead the alternate of Adderall XR 10mg instead. I click on the Adderall XR 10mg link and it changed my prescription in the background in the E-Meds prescribing field to be that now and then the Dosing & Formulary screen refreshed to now show that Adderall dosing & formulary info.

![](../surescripts-advanced-formulary-and-dosing.assets/851eaea04175e10fdc38856ab806ca3b.png)

### Use Formulary - Prescription Routing to Mail Order Pharmacies

In the Dosing & Formulary window, you will see a [USE] button. You may see several [USE] buttons if a patient has multiple formulary plans to choose from.

![](../surescripts-advanced-formulary-and-dosing.assets/82f62e54dfb72b34d13ddeb58ec42ceb.png)

The [USE] button is only to be clicked if you intend to send to a mail-order pharmacy. If you will be sending this to a mail-in pharmacy, you would click the USE button for the formulary you wish to use. Do not click the [USE] button if you will be transmitting to a retail pharmacy. It won't hurt anything if you do click the USE button and then send to a retail pharmacy, but the Mail-Order pharmacies need the eligibility information and assigned plan in the transmitted message and this is what the [USE] button is for. It sets that in the prescription electronic message so the mail-order pharmacy receives that and can process the prescription.

**OPTION:** If the patient has several [USE] button selections, that means there are different plan formulary options available that you can look thru and click the [USE] button on the one you want to use (for mail-order pharmacy only). Formulary results list in descending order of formulary status. Thus, the best ones will be at the top.

This system setting (if turned on) controls whether to display **only** the ones with the top status and the others are not shown.

![](../surescripts-advanced-formulary-and-dosing.assets/a53585de5a4548ec562d26f412ee2f41.png)

It's been reported that most prescriber's will always want to choose the best formulary for the patient. Therefore, {{% system-name %}} provides this system setting you can have turned on to only display and show *only* the best formulary(s) on every patient in this screen with top status. You will then not see other possible formulary choices in a lower status if there are any. This setting will only show the formularies noted as top status (*best formulary)* based on that formulary status from SureScripts Advanced on your screen and that [USE] button.

When you click the [USE] button on the specific formulary you wish to use (for mail-order pharmacy only), it will close that Dosing & Formulary window and show the **Assigned Plan:** in the prescription screen. You can *clear* that if you wish if the prescription will not be utilized for a mail-order pharmacy.

![](../surescripts-advanced-formulary-and-dosing.assets/7ed4bf55012fdf49a94243a7b7018bae.png)

Also when you go to transmit the prescription to the mail-order pharmacy, it will show the *Assigned Plan* that is set there in the summary screen.

![](../surescripts-advanced-formulary-and-dosing.assets/2b3e467f3b4ae55991ce7b22d68c16d9.png)

## Formulary & Dosing from Encounters

You should prescribe from any encounters you are working in for the patient. You will see the same Dosing & Formulary features when prescribing from here if insurance eligibility was run on the patient prior. Once eligibility was run and obtained (and an eligibility request cannot be sent more than once every 72 hours for a patient), then the Formulary from the Eligibility is loaded into the patient's chart. This shows in the patient's E-Meds tab and also shows here in the encounter Meds Plan section where you prescribe from the encounter.

{{% info %}}
If you have not run any insurance eligibility, there will be no notification here of last eligibility date/time or Formulary loaded for the patient. When you prescribe for a patient like that, you will only see the *dosing* information and no formulary information.
{{% /info %}}

![](../surescripts-advanced-formulary-and-dosing.assets/76afcf713710288d8a88aaf7c32703f6.png)

The same Dose & Formulary screen will pop-up once you've selected the *form* of the medication. You can select an alternate if you wish and it will apply the alternate as the medication name instead of the original you chose to prescribe. If you click the [USE] button for mail-order pharmacies, it will display the Assigned Plan here in the encounter Meds plan section also.

At any time, you can click the *Dose* button to open up the Dosing & Formulary screen again before submitting the prescription to the encounter plan.

![](../surescripts-advanced-formulary-and-dosing.assets/a82ae3bfb63572d923b4f86b9686047d.png)

If there are any dosing guidelines recommended for that medication you are prescribing and you prescribe it in a different manner than the dosing guidelines set, you will see a *Dose Calculation Alert* pop-up and explaining something. You can click the X to get out and edit/change the prescription or ignore and continue.

![](../surescripts-advanced-formulary-and-dosing.assets/bd0ef26909db397ae208605fce719a82.png)
