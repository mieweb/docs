---
id: '157hLx-Jk2bIid_Syd0tFtFafekE515hD3diDbCUJWzg'
title: 'Med Queue and Fill Requests'
date: '2022-08-09T17:52:16.862Z'
version: 76
lastAuthor: 'Doug Horner'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=157hLx-Jk2bIid_Syd0tFtFafekE515hD3diDbCUJWzg'
wikigdrive: 'd3e22db37cfdd4a4e5d0d1fe46fc320e82e79136'
menu:
  main:
    name: 'Med Queue and Fill Requests'
    identifier: '157hLx-Jk2bIid_Syd0tFtFafekE515hD3diDbCUJWzg'
    parent: '1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek'
    weight: 5720
---
A prescription in {{% system-name %}} must be ‘signified' to be filled in-house (via medication inventory) in order for the Fill Request to be triggered to staff. A Fill Request is triggered via a task and into the Med Queue worklist. To trigger a Fill Request from the patient's Medications/Allergies chart tab or via the Prescribe link or Refill link, the Prescriber must put a date in the Fill Script date field and then note patient is ‘in office' or ‘phone' for the Fill Request. The prescriber would enter the date to fill this script on and then select the radio button if the patient is in the office and waiting on the medications, or if the patient called in and needs medications filled but was on the phone (lower priority than patient's waiting in office for fills).
  
![](../med-queue-and-fill-requests.assets/f4b2d3a28be1065face28a1f19ff5e70.png)  

The fill script date can be today, meaning staff at your practice needs to complete this medication fill today, or it can be a future date when the patient isn't going to be in until next week to pick up the medication. That gives the staff more time to complete the medication fill request.  
From the Allergies/Medications chart tab specific to the patient, there is also the available hyperlink of Add Fill Request to quickly submit a refill request for a medication to be dispensed through the in-house inventory (turn on system setting E-Chart: Meds: Use Fill Requests)
  
![](../med-queue-and-fill-requests.assets/9b68f1d5817434ffc256d9afe28fd2c6.png)  

From an encounter, the prescriber would be prescribing the medication in the Meds Plan section of the encounter and to signify an in-house Fill Request for the medication to be dispensed and filled from inventory, the prescriber needs to checkmark the **Fill** checkbox.
  
![](../med-queue-and-fill-requests.assets/3ac89c60915ff7da928750a94477497b.png)  

An encounter is a face to face visit, so when the prescriber checkmarks the "fill" checkbox and saves the encounter, the Fill Request will be triggered and land as an "in-office" fill request.  
When a *fill script on* date is entered (via prescribe/meds chart tab) or the "fill" checkbox has been marked (via encounter) the prescribe screen's "print/transmit" checkbox will go unchecked (because there is no need to print/fax or transmit this prescription) because you are indicating to fill it in-house via your inventory module.  
Also upon "fill" being check-marked, a task will be created to notify the specified departments that a Fill Request needs done and the request has been submitted to the Med Queue. Your MIE Implementer will ensure the task rules for Office and Phone Fill requests are set up.
  
  
## ![](../med-queue-and-fill-requests.assets/4b7c218ca1d2ed60a76b50938a3ffa51.png)  
  

The fill request task will show up in your top summary taskbar also so you can see how many requests are out there to be completed more easily and can be separated by phone or in office requests.
  
![](../med-queue-and-fill-requests.assets/20ae06f7f5fb3519a4fac35f157a76e8.png)  

Your Med Queue may be a sidemenu tab or it may be a tab in the Inventory tab module itself.
  
![](../med-queue-and-fill-requests.assets/9a8035f8e54f89af3ef3e7e28ddeee49.png)  

The Med Queue shows a worklist of the outstanding Phone Fill Requests and any pending In Office Fill Requests. Tasks are linked to the Med Queue as well as the patient's pending fill requests in the chart tab named "Dispense".
  
## Grab Fill Request(s) via Med Queue  
  
The Med Queue is really showing a list of patients whom have a Fill Request task pending to do. So if you grab a Med Queue request to work or grab the fill request via this tab, it's all linked together and will all complete the same fill request. To work on a fill request, simply click on the patient's name from the Med Queue worklist tab.  
.
  
![](../med-queue-and-fill-requests.assets/af6e3c98bfc88833e21d3c936370693c.png)  

{{% info %}}

If someone already is working on a Fill Request, it will show that Fill Request here in the Med Queue as *In Progress* and will show the user's name next to it who is working on it. It also moves that Fill Request ‘task' into your User Tasks making you the owner of that task. Essentially you are working a task, even though you are working the Med Queue worklist.
{{% /info %}}
  
![](../med-queue-and-fill-requests.assets/9c761d8fc621316902685b15bac4f56d.png)  

When you click on the patient's name in the Med Queue to fill a request, it takes you to the patient's *Dispense* chart tab. That's where you go to perform the Fill Request by dispensing the medication.
  
## Grab Fill Request(s) via Task Module  

To work on a fill request, simply click on the group of pending Office Fills tasks or Phone Fills tasks at the top in alert toolbar or from the sidmenu tab named Tasks. The patients listed in the Med Queue are these same patients. Tasks are the same as the Med Queue worklist. So when you grab a task to work on or grab a Med Queue request to work on, it's all linked together and will all complete the same fill request. Grab a task by clicking the Grab link.
  
![](../med-queue-and-fill-requests.assets/9ab24ef9e06fb511eeecaa0c119d24bb.png)  

{{% info %}}

If someone already is working on a Fill Request task, they are the owner of that task and it moves that task from the bucket of department fill tasks for someone else to grab. It will also show that grabbed Fill Request task in the Med Queue as *In Progress* and will show the user's name next to it who is working on it. Essentially you are working a task, even though you are working the Med Queue worklist.
{{% /info %}}
Once you've grabbed the task, click on the Perform link in the task to perform the fill request dispensing.
  
![](../med-queue-and-fill-requests.assets/5c5bb61848713efb7bf727cd62885bf8.png)  

  
## Working a Fill Request  

Whether you grab a task and click perform, or whether you click on a patient's name in the Med Queue to grab the Fill Request via that worklist queue, you are taken to the patient's chart. You will land on the patient's *Dispense* chart tab.
  
![](../med-queue-and-fill-requests.assets/7797efd5dde25ef906595bf446ab17b9.png)  

The first section is what you will work. That section named *Requests For (Patient Name)* will show you the pending Fill Requests for that patient.
  
![](../med-queue-and-fill-requests.assets/b7f9346417554b2abbeb877d6bbe4140.png)  

The next step is to click on any of those hyperlinks on a Fill Request line (click on due date or request time or the medication fill request name).
  
![](../med-queue-and-fill-requests.assets/173504c90559e2f4bb35a19b90765e76.png)  

{{% tip %}}

In the options column you can Edit the Request or Cancel this Request.
{{% /tip %}}
  
![](../med-queue-and-fill-requests.assets/f7cb836dfe97388de93d11de1b638168.png)  

Editing the Request is editing the task. Cancel the Request is canceling the task with a note.
Once you've clicked to work a pending request for that patient, you will be taken to the "Fill" screen. You will be filling from the medication, using your in-house pharmacy inventory and decrementing inventory. You will be filling form General Inventory.
{{% info %}}

If your practice utilizes Patient Assistance program and need to fill from that inventory, please see other help documentation in later pages.
{{% /info %}}
At the top left of the Fill screen you will see the prescriber's drug prescription (Prescription Information section). You will work the fields to fill using general inventory. Use your tab key to advance from field to field.
  
![](../med-queue-and-fill-requests.assets/678d9bf05251c38262c63abad9d2d9ed.png)  

* <strong>Site:</strong> Select the site (and stockpile if that is applicable) you will be filling/pulling the medication from (inventory location).
* <strong>Medication:</strong> When you use the tab key to advance to this field, it should give you auto-complete choices of that specific medication inventory item you have in-house along with the QTY that is available dependent on the "site" you had selected.
  
![](../med-queue-and-fill-requests.assets/d4af2f20a10cdfe9b039e16ec2395238.png)  

* <strong>Quantity:</strong> Using the tab key, advance to this field to put in the quantity that you will be dispensing based on the prescription and the sig and what strength is available from inventory.
* <strong>Lot Number:</strong> Using the tab key, advance to this field to see an auto-complete of Lot choices this drug is available to pull from in your inventory.
* <strong>Manufacturer & Expiration:</strong> Using the tab key, based on the Lot number chosen, these fields should pre-populate for you based on what is in inventory. Otherwise, you can key them in.
* <strong>Practitioner Sig/ Patient Sig:</strong> These will pre-populate for you based on the prescriber's prescription. You can override/change here. An example of this would be if the prescription was for 10mg of something, but you only have 5mg in stock, so you would be filling the prescription but using 5mg tablets, so the sig would need changed based on the strength of med, quantity, etc.
* <strong>Equivalent Quantity</strong>: is the same if you are prescribing the same strength as the original prescription. However in the example above, if you only had 5mg tablets available and the prescription read to take one 10mg pill every day, then the general inventory quantity would be more than the equivalent quantity.
* <strong>Fill Date</strong>: This is prepopulated with today's date, but you can override if you need to signify a different fill date.
* <strong>Filled Until</strong>: This is also pre-populated based on the prescription information from the prescriber but you can override if you need to signify a different filled until date.
* <strong>Print</strong> (<strong>Label/Patient Ed</strong>): Printing a label is the default to attach to the dispensed med. You can select to print patient education material for the medication drug provided from First Databank.
* <strong>Given To:</strong> Signify via radio button who you will give the dispensed fill to.
  
![](../med-queue-and-fill-requests.assets/7ccfe6a7bfe0aab7f8241d48ea9c2c0f.png)  

* <strong>Username/Password</strong>: If your practice utilizes the double authentication (System setting: E-Chart, Dispense, Confirm User on Transactions is enabled) these fields will be here to fill out. You will be required to enter your {{% system-name %}} username & password to complete the Fill a Request.
Click the FILL RX button to complete the fill request and dispense the medication as complete. You will be taken to the *Labels/Select Warnings to Print* portion of the fill request. This is where you checkmark to apply what warnings you want to print on the label that you will be adhering to the medication packaging. You can uncheckmark warnings you do not want applied. If there are any available AKAs for that drug, you can opt to print that also. Click the PRINT LABEL button to generate the label. This is configured for Dymo label writers.
  
![](../med-queue-and-fill-requests.assets/0f3d77b5cabf826396537eb517e685bb.png)  

You will get a confirmation that the logging of the medication fill was successful and you can continue on to work another fill request if there are any for this patient, or go back to queue or tasks to work another.
  
![](../med-queue-and-fill-requests.assets/8750e1621420ef88b3d8fbc195790427.png)  

The completed fill request now is removed from the "pending" section of the patient's dispense tab, it's removed from the Med Queue worklist tab, and the task is marked completed and removed from the task list.
The completed Fill Request is then shown as ‘Dispensed' in the Dispensed Meds bucket/section of the patient's Dispense chart tab.
  
![](../med-queue-and-fill-requests.assets/33a91df13f53fd4a0bb7d1a20402f819.png)  

  
## Dispensed Meds Options  

This section shows all dispensed meds given to the patient (completed Fill Requests). If you needed to return the dispensed quantity back into inventory for any reason, you can click the Un-Dispense link available.
  
![](../med-queue-and-fill-requests.assets/b4e1668d61541c61b569770662268622.png)  

After completing the un-dispense, it then gives you a confirmation at the top that the un-dispensed was successful. It puts that quantity back into inventory and records it as a return in the transaction report.
  
![](../med-queue-and-fill-requests.assets/099e7e6d0016c2c098b1a1050db0c2d2.png)  

Undispensing does not put the Fill Request back into the Med Queue or back into the patient's pending fill requests. It will show in the "Fill Requests" portion that the Fill Request has *Not Yet Been Filled*. To redispense correctly, you would work the link at the right named Fill from General to re-dispense correctly using inventory (or Fill from Pat Asst if your system utilizes the Patient Assistance specific inventory).
  
![](../med-queue-and-fill-requests.assets/a45105ad03dff2290b649ec0613ca64a.png)  

The Show Fill History link will branch open to show the history of each time this med has been filled, returned, comments, etc. To go back to the other screen, click the Hide Fill History link.
The Show Refill History link will branch open to the E-Meds module refill screen and shows the Rx and all the refill history below it.
  
## Verification Feature and Sections  

If the system setting E-Chart, Inventory, Verify Fills is enabled, your practice will be required to have verification completed after fill requests are worked. Once a fill request is worked (as in steps above), it then puts it in the VERIFICATION NEEDED bucket/section of the patient's *Dispense* chart tab. The "Verification Needed Fills" section is found in the patient's Dispense chart tab. The staff then verify and dispense from a verification queue/worklist.
  
![](../med-queue-and-fill-requests.assets/f7959a27aa5e18af1966d7334b16ae74.png)  

Staff that verifies fills would click the Verify link for fills needing verification. There is an option to do multiple verifications for the patient in mass if there is more than one verification needed (same for printing the labels for them).
  
![](../med-queue-and-fill-requests.assets/d9b778e183b238324d1a3d2c8169136c.png)  

Once Verify or Verify All is clicked, it will take you to the Verify Fill screen. First you must select the drop-down to verify the dispense or not (select yes or no).
  
![](../med-queue-and-fill-requests.assets/e91c341bbdca4d520e6cfa484abf81e7.png)  

If you are the one to "Dispense" this verified fill request, you can continue and would checkmark the box *Verify and Dispense*. Once you do that, the *Dispense Date* and *Time* fields will appear to document/set the date/time you are verifying and now dispensing the medication.
  
![](../med-queue-and-fill-requests.assets/d4650ff5115b999fa04994ab0e114da8.png)  

If you are just "verifying" the fill request and someone else will dispense it, then you would not checkmark the "verify and dispense" checkmark and just click VERIFY button.
{{% info %}}

If your practice has double authentication on, you will be required to enter in your {{% system-name %}} username and password. Click then the VERIFY button.
{{% /info %}}
If you only verified it and didn't mark to dispense it, the Verified Fill request will now show in the bucket/section **Verified Fills.** The staff needs to work those to Dispense the verified fill request.
  
![](../med-queue-and-fill-requests.assets/6eb67326ddd4cc4fbbfde73463384499.png)  

If you were to verify **and** dispense using the checkbox method above, or are now dispensing a verified fill from that other bucket and work that Dispense, once done it will display, at the very top of the screen, that your Fill has been successfully verified.
  
![](../med-queue-and-fill-requests.assets/50b63168e918d858329c6b02b1f826f8.png)  

It now considers that fill request completed and shows that in the "Dispensed Meds" bucket/section of the patient's Dispense chart tab.
  
![](../med-queue-and-fill-requests.assets/ca2be79bfb497e5a9df635504f1d015f.png)  

  
## Patient Assistance Program (PAP)  

If your practice uses Patient Assistance Programs to receive meds for patients, you may have the PAP column and button in this feature.
  
![](../med-queue-and-fill-requests.assets/b40bf399a0b92031150c5e5e3659cfa8.png)  

If the patient has applied for the Patient Assistance program for the medication prescribed, you can check-mark the PAP column for that med and then click the UPDATE PAP APPLICATIONS button at the bottom of that section. The check-mark stays there for any user to see that the patient has updated/filled out/submitted their PAP application for that med.
It's just an informational feature letting you know that the patient has submitted a PAP application for that specific medication.
