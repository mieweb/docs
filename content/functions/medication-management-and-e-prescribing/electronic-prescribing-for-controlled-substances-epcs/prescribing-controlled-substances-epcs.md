---
id: '1Xe_qYKQFJp-dMf0cBQT9DyK_nWa18DyBCeEbXEnZiW0'
title: 'Prescribing Controlled Substances (EPCS)'
date: '2025-08-19T17:26:21.016Z'
version: 161
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Xe_qYKQFJp-dMf0cBQT9DyK_nWa18DyBCeEbXEnZiW0'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
Providers enrolled in electronic prescribing of controlled substances (EPCS) are required to sign controlled substance prescriptions electronically via two-factor authentication (IdenTrust). Beginning with RC202503, prescribing controlled substances as Ashish Patel, MD will simulate prescribing as though the two-factor authentication process has taken place and the prescription has been sent to a pharmacy. Please note that **no** controlled substance prescriptions written by Ashish Patel, MD will be sent electronically out of the system and this test provider is configured for testing, demo and training purposes only.

## Prescribing Controlled Substances via the Visit Encounter

Providers may write prescriptions for controlled substances in {{% system-name %}} just as they would any other medication. One method for prescribing medications is via the **Medication Orders** section of the **Visit Encounter**.

![](../prescribing-controlled-substances-epcs.assets/301b1b8634e41c9289678d8f601192f6.png)

If the logged in provider, for example Ashish Patel MD, writes a prescription Xanax, and transmits the prescription, the provider is immediately directed to the **Unsigned Prescriptions** review box, where he is required to select the **Ready to Sign** box and then **Sign** the prescriptions in conjunction with two-factor authorization with their mobile device or USB.

![](../prescribing-controlled-substances-epcs.assets/899077eb6663488f7aa489fe8aea8380.png)

In the real world, providers must complete the two-factor authentication process to proceed or they may select the **Quit** button to cancel and stop the two-factor authentication request.

![](../prescribing-controlled-substances-epcs.assets/8862aa512524d65043bd23fc090312b6.png)

Once the two-factor authentication process is complete, the prescription will be sent to the selected pharmacy and the **Transmist Prescription** message will display to let the provider know that the prescription was successfully sent.

![](../prescribing-controlled-substances-epcs.assets/2bb03d40153d06016b5155b44476dedd.png)

The medication will also display as a prescribed medication in the patient's **Medication History.**

![](../prescribing-controlled-substances-epcs.assets/6f1dbd435447eb18f8a531764af20f78.png)

## Prescribing Controlled Substances via the Medications Tab

Providers may also prescribe medications from the **Allergies/Medications** chart tab. Providers may use the legacy prescribing tool or the Quick Prescribe option, depending on their user preference.

![](../prescribing-controlled-substances-epcs.assets/3255dbc86cbf523b4e0f75ada5e00b77.png)

![](../prescribing-controlled-substances-epcs.assets/fc7d5ae51cbc7c50f267ee7c81b4c130.png)

Upon entering the prescription information, the provider must then complete the two-factor authentication process. This can be done by selecting the provider's name under the **Unsent Controlled Substance Prescriptions**.

![](../prescribing-controlled-substances-epcs.assets/c1964bc26a92923f46cb048de06707d2.png)

The provider is immediately directed to the **Unsigned Prescriptions** review**** box, where he is required to select the **Ready to Sign** box and then **Sign** the prescriptions in conjunction with two-factor authorization with their mobile device or USB.

![](../prescribing-controlled-substances-epcs.assets/2c574baba22ca5f349761bf3c5e4f99e.png)

In the real world, providers must complete the two-factor authentication process to proceed or they may select the **Quit** button to cancel and stop the two-factor authentication request.

![](../prescribing-controlled-substances-epcs.assets/1e1d3952717395d069eb62ea4c832e54.png)

Once the two-factor authentication is complete, the provider may select the Pharmacy information and select the **Fax/Transmit** button.

![](../prescribing-controlled-substances-epcs.assets/03761ae91ee85c07d494fe5a4b56637b.png)

The provider will then see a confirmation message when the prescription has been successfully sent.

![](../prescribing-controlled-substances-epcs.assets/0e536e62437d31cbe986ed34c8ae8cbe.png)

The medication will also display as a prescribed medication in the patient's **Medication History.**

![](../prescribing-controlled-substances-epcs.assets/7fa30cb6f37e601fda5643dbf1d16073.png)

## Writing Prescriptions on Behalf of the Provider

If a nurse or other staff member assists the provider by writing prescriptions, the provider must still sign any controlled prescriptions utilizing two-factor authentication. The assistant may write the prescription as normal, either via the **Visit Encounter Medication Orders** or from within the **Allergies/Medications** chart tab, then click the **Transmit** button.

Note: if a pharmacy is not selected at the time the script was written, the **Transmit** button will not display. The assistant will only have the **Save** option. Which upon save, will be sent to the provider's queue to sign as well.

![](../prescribing-controlled-substances-epcs.assets/5a738c5ef86243473d4ce217a2e9fb7b.png)

The user will then be prompted with a message the prescription needs signed by the provider before it can be electronically sent.

![](../prescribing-controlled-substances-epcs.assets/36bf94fc3059fbc4c9ec6e722283e35e.png)

There are two available methods for providers to sign prescriptions written by an assistant. The first method is available via the **Allergies/Medications** chart tab. The provider can click on their name under the Unsent Controlled Substance Prescriptions box and follow the prompts (as previously outlined above).

![](../prescribing-controlled-substances-epcs.assets/0a0097d112328fdd5adc32d9f243ce97.png)

The second method is via the **My Unsigned Prescriptions** portlet on the Quick View. Any prescriptions pending two-factor authentication will display in the portlet. The provider may then sign one prescription at a time by clicking on the patient name and navigating to the patient **Allergies/Medication** tab or they may sign all at once or specific individual scripts by selecting the **Sign All** button.

![](../prescribing-controlled-substances-epcs.assets/ac481e91e3e14cff824f65517d0b64e5.png)

When **Sign All** is selected, the **Unsigned Prescription** box displays, where the provider may click the **Ready to Sign** box to select one, all, or specific prescriptions, and then the **Sign** button to perform the two-factor authentication process.

![](../prescribing-controlled-substances-epcs.assets/c2b86d86aacbf52293ca6618946aecda.png)

In the real world, providers must complete the two-factor authentication process to proceed or they may select the **Quit** button to cancel and stop the two-factor authentication request.

![](../prescribing-controlled-substances-epcs.assets/fab6f2e448e43ca164f67d34d250ed71.png)

Once the provider has signed the prescriptions, the prescriptions will no longer display in the **My Unsigned Prescriptions** portlet. The prescriptions still need to be sent, so they now display in the providers **My Unsent Prescriptions** portlet.

![](../prescribing-controlled-substances-epcs.assets/82e24321f017dbe40e6efb44d788f06f.png)

For any prescriptions not automatically sent to the pharmacy, the provider may then click on each patient name, navigate to the patient chart, select the appropriate pharmacy and then send the prescription. Once sent to the pharmacy, the medication will display as a prescribed medication in the patient's **Medication History.**

Staff may view the status of Unsent prescriptions via the All Unsent Prescriptions, but they will not be able to sign or transmit prescriptions for controlled substances.

![](../prescribing-controlled-substances-epcs.assets/82e24321f017dbe40e6efb44d788f06f.png)

## System Setting Allow Batch Signing

As of RC202509, a new system setting "E-Chart, Meds, Allow Batch Signing" has been added. When enabled this settings allows providers to sign multiple prescriptions for multiple patients at once.

![](../prescribing-controlled-substances-epcs.assets/2f3da29ddb33ef2fe5c6f9086345ab42.png)

![](../prescribing-controlled-substances-epcs.assets/6486755a4d2540c0faa4882456e3b3a5.png)
