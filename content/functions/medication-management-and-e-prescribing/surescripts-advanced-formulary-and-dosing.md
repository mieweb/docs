---
id: '1gT7EBIu-7OE1aAdVGs5iI01pV8flTBqMVvxV1a8Ui-8'
title: 'SureScripts Advanced - Formulary and Dosing'
date: '2020-02-27T20:07:27.795Z'
version: 57
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1gT7EBIu-7OE1aAdVGs5iI01pV8flTBqMVvxV1a8Ui-8'
wikigdrive: 'cabd81c2148adf2f2b82ccf2d7cca8fcca5deb78'
menu:
  main:
    name: 'SureScripts Advanced - Formulary and Dosing'
    identifier: '1gT7EBIu-7OE1aAdVGs5iI01pV8flTBqMVvxV1a8Ui-8'
    parent: '1BT9iwpUSk65PGOkXhOqxTjwNvG-JzY6aKqNw1elTkKA'
    weight: 2210
---
The SureScripts advanced functionality includes access to Prescription Benefits (insurance eligibility and prescription benefit information of both formulary and eligibility), access to patient's Medication History and the ability to do Prescription Routing to Mail Order Pharmacies using the formulary selected. {{% system-name %}} will maintain a record of whether the patient was eligible for coverage in the patient benefit table for future reference and a request can‘t be sent more than once every 72 hours. This help document discusses the Formulary & Dosing functionality in the steps below.
  
## Formulary & Dosing from E-Meds Tab  
  
Being able to access a patient's prescription benefit information (both formulary & eligibility) electronically allows prescribers to choose medications that are on formulary and are covered by the patient's drug benefit. Prescribers can also choose lower-cost alternatives such as generic drugs. Dispensing pharmacies are less likely to receive prescriptions that require changes based on the patient's drug benefit, which, in turn, reduces unnecessary phone calls from pharmacy staff to practices regarding drug coverage.  
You must run eligibility before you can utilize the formulary features in the prescribe module. See other help documentation titled *Prescription and Insurance Eligibility Requests –SureScripts Advanced.pdf* Once eligibility was run and obtained (and an eligibility request cannot be sent more than once every 72 hours for a patient), then the Formulary(s) from the eligibility is loaded into the patient's chart. This shows in the patient's E-Meds tab and in the encounter Meds Plan section. The last eligibility run (date/time) also shows here.  
{{% info %}}

If you have not run any insurance eligibility, there will be no notification here of last eligibility date/time or Formulary loaded for the patient. When you prescribe for a patient like that, you will only see the *dosing* information and no formulary information.
{{% /info %}}
The system setting named *Dose Range Calculator* must also be turned on to see SureScripts Dosing & Formulary for the patient and the medications when you prescribe.
  
![](../surescripts-advanced-formulary-and-dosing.assets/1000000000000135000000490381432195ACDC54.png)  

That system setting in turn displays the *Dose/Formulary* button in the prescribing module of E-Meds tab. You can click that button to see the Dose/Formulary for that medication related to the patient's formulary that is loaded from the insurance eligibility request when you are prescribing.
  
![](../surescripts-advanced-formulary-and-dosing.assets/100000000000029400000116A7B0272C8FD0709E.png)  

However, SureScripts requires the Dose & Formulary to automatically appear when you are prescribing without having to click our *Dose/Formulary* button that is provided. But the button is provided in case you close the dose/formulary pop-up window and want to get back in at any time when documenting the prescription.
When you begin prescribing and select the medication to prescribe, when you get to the next field (*form* field) the Dose & Formulary pop-up window will appear. This is a requirement of SureScripts to make the Dosing & Formulary pop-up window appear automatically. Per SureScripts: *If eligibility has been run on the patient, on the prescription writing screen the application shall display, at a minimum, formulary status, all co-pay data for all pharmacy types provided, and an indication that a coverage restriction applies without user action.* Therefore when you prescribe, you will always see this Dose & Formulary pop-up screen appear. This is a requirement of SureScripts and we have to make it appear automatically.
Begin prescribing a med, select the *form* of the medication and see the Dosing/Formulary screen in its entirety on the screen.
  
![](../surescripts-advanced-formulary-and-dosing.assets/1000000000000328000001D7608C8A12E72478C2.png)  

You will see the Dosing & Formulary for that in the pop-up window. If it's lengthy (which some are) use the side scroll bars in that pop-up window. To close this Dosing & Formulary window when you are done, simply click the X at the top right corner of this pop-up.
  
![](../surescripts-advanced-formulary-and-dosing.assets/1000000000000268000001EB8DF6B74ADF5E8E95.png)  

Some Dosing & Formulary screens have several different plan formularies you can choose from and some show many alternate details which makes the popup screen very lengthy and the scroll bar on the right is provided.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000000000002DD000001E8E2AB73F2C2909610.png)  

If the patient has multiple formularies available under their benefits, you will see all of them listed in the patient's E-Meds tab or encounter Med Plan section. This is an indication of the # of plan formulary choices you will see when you get to the Dose/Formulary pop-up screen. There is a system setting to *show only best formulary* which can be turned on and it will only show best matching formulary for their drug/insurance eligibility coverage.
If the patient has several Formulary Detail sections for different plans, that means there are different plan formulary options available that you can look thru and click the [USE] button on the one you want to use (for mail-order pharmacy only). Formulary results list in descending order of formulary status. Thus, the best ones will be at the top.
There is a *My Settings* preference that can be turned on to only show the best formulary that SureScripts has ranked. If turned on (set to **yes**), it controls whether to display **only** the ones with the top status and the others are not shown. This will narrow down your choices and only show you the best formulary for that.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000201000001170000005BBC350B9F7BD51835.png)  

It's been reported that most prescriber's will always want to choose the best formulary for the patient. Therefore, {{% system-name %}} provides this *my settings preference* that you can have turned on to only display and show *only* the best formulary(s) on every patient in this screen with top status. You will then not see other possible formulary choices in a lower status if there are any. This setting will only show the formularies noted as top status (*best formulary)* based on that formulary status from SureScripts Advanced on your screen and that [USE] button. Since this is a *my settings* preference, the users can choose to use it while others do not.
  
### Alternates  

You may decide to use an alternate medication from this Dosing & Formulary window. If you want to prescribe the alternate instead, simply click on the medication alternate name in the Formulary window. It will then change the original medication name in {{% system-name %}} to be this alternate medication now and form.
Here is an example where I prescribed Daytrana, but when looking at the Dosing & Formulary window I decided to prescribe instead the alternate of Adderall XR 10mg instead. I click on the Adderall XR 10mg link and it changed my prescription in the background in the E-Meds prescribing field to be that now and then the Dosing & Formulary screen refreshed to now show that Adderall dosing & formulary info.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000000000002E4000001A5024112D41685DDC3.png)  

  
### Use Formulary - Prescription Routing to Mail Order Pharmacies  

In the Dosing & Formulary window, you will see a [USE] button. You may see several [USE] buttons if a patient has multiple formulary plans to choose from.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000000000002DD000001E82C9AF0BF7603541F.png)  

The [USE] button is only to be clicked if you intend to send to a mail-order pharmacy. If you will be sending this to a mail-in pharmacy, you would click the USE button for the formulary you wish to use. Do not click the [USE] button if you will be transmitting to a retail pharmacy. It won't hurt anything if you do click the USE button and then send to a retail pharmacy, but the Mail-Order pharmacies need the eligibility information and assigned plan in the transmitted message and this is what the [USE] button is for. It sets that in the prescription electronic message so the mail-order pharmacy receives that and can process the prescription.
**OPTION:** If the patient has several [USE] button selections, that means there are different plan formulary options available that you can look thru and click the [USE] button on the one you want to use (for mail-order pharmacy only). Formulary results list in descending order of formulary status. Thus, the best ones will be at the top.
This system setting (if turned on) controls whether to display **only** the ones with the top status and the others are not shown.
  
![](../surescripts-advanced-formulary-and-dosing.assets/100000000000013500000045C1E75551DFE60F05.png)  

It's been reported that most prescriber's will always want to choose the best formulary for the patient. Therefore, {{% system-name %}} provides this system setting you can have turned on to only display and show *only* the best formulary(s) on every patient in this screen with top status. You will then not see other possible formulary choices in a lower status if there are any. This setting will only show the formularies noted as top status (*best formulary)* based on that formulary status from SureScripts Advanced on your screen and that [USE] button.
When you click the [USE] button on the specific formulary you wish to use (for mail-order pharmacy only), it will close that Dosing & Formulary window and show the **Assigned Plan:** in the prescription screen. You can *clear* that if you wish if the prescription will not be utilized for a mail-order pharmacy.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000000000002A2000000ACF6D07F7E0DD57C80.png)  

Also when you go to transmit the prescription to the mail-order pharmacy, it will show the *Assigned Plan* that is set there in the summary screen.
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000000000003240000010EE452FB3A73FC7A62.png)  

  
## Formulary & Dosing from Encounters  

You should prescribe from any encounters you are working in for the patient. You will see the same Dosing & Formulary features when prescribing from here if insurance eligibility was run on the patient prior. Once eligibility was run and obtained (and an eligibility request cannot be sent more than once every 72 hours for a patient), then the Formulary from the Eligibility is loaded into the patient's chart. This shows in the patient's E-Meds tab and also shows here in the encounter Meds Plan section where you prescribe from the encounter.
{{% info %}}

If you have not run any insurance eligibility, there will be no notification here of last eligibility date/time or Formulary loaded for the patient. When you prescribe for a patient like that, you will only see the *dosing* information and no formulary information.
{{% /info %}}
  
![](../surescripts-advanced-formulary-and-dosing.assets/10000201000001CF000000841F66E2CBDAC00974.png)  

The same Dose & Formulary screen will pop-up once you've selected the *form* of the medication. You can select an alternate if you wish and it will apply the alternate as the medication name instead of the original you chose to prescribe. If you click the [USE] button for mail-order pharmacies, it will display the Assigned Plan here in the encounter Meds plan section also.
At any time, you can click the *Dose* button to open up the Dosing & Formulary screen again before submitting the prescription to the encounter plan.
  
![](../surescripts-advanced-formulary-and-dosing.assets/1000020100000237000000BDE73A01E6AABF257F.png)  

If there are any dosing guidelines recommended for that medication you are prescribing and you prescribe it in a different manner than the dosing guidelines set, you will see a *Dose Calculation Alert* pop-up and explaining something. You can click the X to get out and edit/change the prescription or ignore and continue.
  
![](../surescripts-advanced-formulary-and-dosing.assets/100000000000026E000000622874DAD36BB7AA5B.png)  

