---
id: '12E408bIFpcvsI5Nk2OXefON2y6qx5G9suTzn6ZASkXw'
title: 'Setting Up E-Prescribers'
date: '2025-11-24T18:49:37.132Z'
version: 202
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/access-control-adding-deleting-editing-users/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/new-provider-configuration-recommendations/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/terminated-provider-configuration-recommendations/'
source: 'https://drive.google.com/open?id=12E408bIFpcvsI5Nk2OXefON2y6qx5G9suTzn6ZASkXw'
wikigdrive: 'v2.15.30'
---
The first step to being able to electronically transmit prescriptions from {{% system-name %}} to a pharmacy using the SureScripts feature is to properly have that prescribing user set up in {{% system-name %}} . You must have security rights to edit or set up users in {{% system-name %}} . Once you set up the Prescriber to become an electronic prescriber, SureScripts goes through a verification process. Once verified, your prescriptions will be e-sent via electronic transmission.

Click the *Control Panel* sidemenu tab then click the *Access Control* tab at the top. Search and find the physician that needs to have rights to e-prescribe. If the user/physician exists as a user in {{% system-name %}} already, simply click the *edit* link next to their username line. If the user/physician is new to {{% system-name %}}, you would click the *add user* link to add the user/physician to have access to {{% system-name %}} . (see other help documentation named [Access Control - Adding, Deleting, Editing Users](https://docs.enterprisehealth.com/functions/system-administration/system-controls/access-control-adding-deleting-editing-users/)*).*

Per Medical Informatics Engineering, Inc. policy, all new providers should be created with a new, unique user chart and account. Provider accounts should NEVER be reused or recycled for any reason. For more information on setting up new providers, please review the [New Provider Configuration Recommendations](https://docs.enterprisehealth.com/functions/system-administration/system-controls/new-provider-configuration-recommendations/).

![](./setting-up-e-prescribers.assets/888dd7b07f9cebe2411743db7f6b22d3.png)

The *Receive Refill Requests* check-box is optional for Prescribers. If you (the prescriber) want to receive electronic refill requests from pharmacies, then you need to have this check-marked. If you wish to continue to receive refill requests via manual fax and/or phone calls and not receive refill requests electronically in {{% system-name %}} using our e-refills queue, then you would not check-mark this box. What you check-mark here in this Electronic Prescriber section is sent to SureScripts for the verification process. You must be verified by SureScripts in order to send prescriptions by electronic transmission and/or receive electronic refill requests.

Continue making sure all the other required fields in the username screen are filled out.

There are other **required** fields in the username screen of {{% system-name %}} that need to be filled out for Prescribers. If you do not have anything entered in these required fields, your edits will not save and you will receive a warning pop-up of what is missing.

Required fields for SureScripts verification: **First & Last Name, *all* address fields, Work Phone, Fax Number, DEA number & NPI number.** If the physician has a ‘suffix' (example: Jr, Sr, III, etc) that must be placed in the *suffix* field, **not** in the last name field. SureScripts will reject if the last name isn't in the correct field and if the suffix isn't in its own field.

![](./setting-up-e-prescribers.assets/ae07d949511ee8f46b5a0c23f83fceac.png)

You can only enter the valid DEA & NPI numbers. No other labels or other text can be entered in those fields. Those must be valid prescriber numbers for SureScripts to verify. You can sign up NP's and PA's to use SureScripts.  You have to put a "space" in the DEA field. A warning will be triggered telling you that the field is required, but you just have to acknowledge the warning and submit the page anyway. NP's and PA's however must still have a valid NPI entered in order to be certified with SureScripts. NPI and DEA numbers both have specific numbers of numerals and alpha characters which we call a ‘checksum'. If a DEA or NPI number entered doesn't have that amount of numerals or characters, it will give you an error message to check that number you entered.

![](./setting-up-e-prescribers.assets/29881c4ea9d41d10747eae9c5177f66c.jpg)

When you have all the required fields entered and the appropriate electronic prescriber boxes checked, click the SUBMIT EDIT button for that user's information or SUBMIT INSERT button if it's a new user you are setting up.

Upon the SUBMIT EDIT or SUBMIT INSERT button being clicked, if any of the electronic prescriber buttons were check-marked, it will send a background message to a department in MIE. MIE will verify/acknowledge those specific users/e-Prescribers through a verification process during normal business hours. MIE verifies the e-prescriber user information that comes in when a {{% system-name %}} user edits or creates an e-prescriber in their {{% system-name %}} system. After MIE verifies the e-prescriber, another background message is then sent to SureScripts nightly with the e-prescriber information that MIE verified.

![](./setting-up-e-prescribers.assets/58adfe7a129742b680f0dfb12067ce96.png)

SureScripts then receives the messages of the e-Prescribers that need permission/certified to electronically transmit. SureScripts then verifies the user/prescriber along with checking valid DEA & NPI and other required field information. Upon SureScripts verification, they will then certify and permit that user to e-transmit. We are told this is about a 48 hour turnaround.

A user/physician can still use the E-Meds tab/prescribing feature in {{% system-name %}} while waiting to be verified by MIE and/or SureScripts. However their prescriptions will be sent as a manual fax until the MIE acknowledgement and the SureScripts verification/permission to e-transmit process is completed. We are told that SureScripts will send the user/prescriber a fax upon their verification approval, but you can also check the username screen in {{% system-name %}} to see the verification stage the user is at (see instructions on next page of this help document).

## Verification Stage

You can check the stage the verification process is in by going into control and searching for the user. Click on the user to ‘view' their summary username information. The field titled **E-Prescriber** will show the specific check-box(es) that are marked for that prescriber and also will show the stage of certification that the prescriber/user is in.

![](./setting-up-e-prescribers.assets/4bed3003a6dd99dffb86b4ea4f6378e1.png)

![](./setting-up-e-prescribers.assets/0cfc9e293f8a184c964625931ee54cca.png)

You can get into the user and see status from the edit user link/screen also. Hover your computer mouse over the help icon to get a description of the verification stage they are in. If the status says ‘e-prescriber has not yet been verified by MIE' for more than 2 days, please contact your MIE Implementer or our help desk.

![](./setting-up-e-prescribers.assets/0da42361f45a9f8045a24016fb89ac50.png)

If the user has been verified by SureScripts as an e-prescriber and now can send prescriptions to pharmacies via e-send (electronic transmission), you will see the **verified** status for that user along with their SureScripts SPI number.

![](./setting-up-e-prescribers.assets/62d2050994284a04da832aac985a4de7.png)

## Receive Refill Requests

If you have the box check-marked to *Receive Refill Requests*, it means you are a Prescriber who wants to receive e-refill requests from pharmacies electronically via SureScripts.

![](./setting-up-e-prescribers.assets/7ffa54aaf478a3522b3f6d3b6aee898c.png)

This will enable the pharmacies (who are capable) to send you electronic requests for refills via the E-Refills alert taskbar in {{% system-name %}} .

![](./setting-up-e-prescribers.assets/e07f73db629eb4776fa02d1b7bf6b738.png)

There is a SureScripts **requirement** to use this feature. When you receive a refill request electronically, SureScripts has a requirement that you must respond and work that request within 48 hours. If you don't respond within the 48 hour timeframe and you become delinquent in processing/working those refill requests, SureScripts will disable your ability to receive future e-refill requests through the e-refill queue (see other help documentation named *E-Refill Queue.pdf*).

If SureScripts disables your ability to receive refill requests, you can still e-prescribe, however you just won't receive refill requests from SureScripts via the e-refills queue in {{% system-name %}} . We are told that SureScripts will inform/alert the e-Prescriber if there are refill requests that have not been responded to within a period of 48 hours. We are told they will also alert/inform the e-Prescriber if they will ‘disconnect' the e-Prescriber from receiving requests electronically due to being consistently late or absent from responding to electronic refill requests.

If SureScripts disconnects or disables an e-Prescriber from receiving e-refill (electronic refill) requests, the e-Prescriber will not see any new e-refill requests coming in through their E-Refills alert taskbar in {{% system-name %}} . The e-Prescriber will receive refill requests via fax or phone calls as was done prior to this available feature.

![](./setting-up-e-prescribers.assets/e07f73db629eb4776fa02d1b7bf6b738.png)

You *can* turn back on the ability to receive e-refill requests from pharmacies again after you have been disconnected/disabled by SureScripts. Simply have your superuser go into the e-Prescriber's {{% system-name %}} username screen. You will see that the *[] Receive Refill Requests* box is un-check marked because SureScripts disabled that feature due to delinquency. If you wish to turn that feature back on, simply checkmark the box **[] Receive Refill Requests** in the user's {{% system-name %}} username screen again. Click the SUBMIT EDIT button at the bottom of the username screen. That electronic prescriber selection & e-Prescribers information/details will again be sent to the department at MIE to verify, then once upon verification, MIE will send a message to SureScripts for certification/verification. Once SureScripts re-verifies, they will reinstate the e-refills feature and you should be back to receiving e-refill (electronic refill) requests from pharmacies via the E-Refills alert taskbar queue in {{% system-name %}} .

If a physician goes on vacation or calls in sick, there is a security setting that the superuser at your practice or your MIE Implementer can grant to another physician(s) or staff member(s) to work those e-refill requests that come in at any time. That way, you have someone still working within the 48 hour timeframe for those requests even though the specific prescriber from your practice is gone or out. You may want user(s) also with this security permission to supervise the queue to make sure all are kept current.

The security setting for being able to work on incoming e-refill requests across the board is named *Manage E-Rx Refills for Others.*

![](./setting-up-e-prescribers.assets/e32e08a06f5f04ca6e16eb4ee041d24e.png)

## Terminated E-Prescriber/Disenrolled Provider

When a physician/prescriber terminates from your practice, these are the steps that need done in your {{% system-name %}} database. This is *only* for terminated physicians/prescribers that were set up previously in {{% system-name %}} using the previous page steps and those who were verified by SureScripts in your {{% system-name %}} system.

Please **do not delete** or inactivate the physician/prescriber in the Access Control without doing these steps first.

1. Set that physician/prescriber/user to login disabled in the Control/Access Control module.
2. Uncheck-mark their Electronic Prescriber checkboxes (both should be uncheck-marked).
3. Click the SUBMIT EDIT button at the very bottom.

![](./setting-up-e-prescribers.assets/173cf98a8ccfcd06f74888179f4ff1e7.png)

Doing these steps will send this edit message and disabled status message to SureScripts so they know that the terminated prescriber should not be sent electronic refill requests, and pharmacies will not be able to accept new scripts from the terminated prescriber from this {{% system-name %}} system. The next day (24 hours later) you can delete the physician from your system (inactive their username, etc).

For more information on terminated providers, review the [Terminated Provider Configuration Recommendations](https://docs.enterprisehealth.com/functions/system-administration/system-controls/terminated-provider-configuration-recommendations/).

## E-Prescriber Works Other Practices

A physician/prescriber may work at multiple practices. An example is a physician/prescriber who works at their main practice who uses a {{% system-name %}} system, but volunteers at a separate practice/clinic on weekends who also uses their own {{% system-name %}} system. A single prescriber can have multiple locations and should be set to be SureScripts verified on both those {{% system-name %}} systems to *Send New Scripts*.  However, SureScripts strongly recommends that a physician only set themselves up to *Receive Refill Requests* at a single location ( {{% system-name %}} system) only.

If {{% system-name %}} tries to enroll them to be SureScripts certified at practice "B", our software should detect that they have the same last name and DEA as their original prescriber record that was added from practice "A", and add this as a new location for the same prescriber.  Each prescriber location has a unique identifier, and our interface with SureScripts routes refill requests to the correct {{% system-name %}} system based on that identifier.

SureScripts strongly recommends that a physician only set themselves up to receive E-Refill Requests at a single location ( {{% system-name %}} system), because pharmacy systems often fail to differentiate the locations for their users in a helpful way or at all.  They might just see the same prescriber's name 3 times without anything to say which location those names go to.  The prescriber can send new scripts from the multiple locations electronically using {{% system-name %}} , but to avoid confusion, they should just set up e-refill requests at the location where it will be most advantageous.

## Surescripts Inactivates

MIE has made the process of reactivating e-prescribers work without Implementer intervention. Each month, Surescripts automatically disables prescribers that haven't had any activity for the last 180 days. This deactivation will now be reflected in {{% system-name %}} , with the "Send New Scripts" and "Receive Refill Requests" checkbox becoming unchecked. In order to become reactivated, the appropriate boxes need to be rechecked, and within an hour, the prescriber should be reactivated with Surescripts. If that fails, the checkboxes will once again become unchecked.
