---
id: "157hLx-Jk2bIid_Syd0tFtFafekE515hD3diDbCUJWzg"
title: "Med Queue and Fill Requests"
date: "2026-01-20T14:40:32.753Z"
version: 343
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=157hLx-Jk2bIid_Syd0tFtFafekE515hD3diDbCUJWzg"
wikigdrive: "v2.15.30"
---

A prescription in {{% system-name %}} must be ‘signified' to be filled in-house (via medication inventory) in order for the Fill Request to be triggered to staff. A Fill Request is triggered via a task and into the Med Queue worklist. To trigger a Fill Request from the patient's Medications/Allergies chart tab or via the Prescribe link or Refill link, the Prescriber must put a date in the Fill Script date field and then note patient is ‘in office' or ‘phone' for the Fill Request. The prescriber would enter the date to fill this script on and then select the radio button if the patient is in the office and waiting on the medications, or if the patient called in and needs medications filled but was on the phone (lower priority than patient's waiting in office for fills).

![](./med-queue-and-fill-requests.assets/9cdf4b78d7f08f7764c897fab1e12065.png)

The fill script date can be today, meaning the prescription is prioritized for medication needed to be processed and filled today, or it can be a future date when the patient isn't going to be in until next week to pick up the medication. That gives the staff more time to complete the medication fill request.

From the Allergies/Medications chart tab specific to the patient, there is also the available hyperlink of Add Fill Request to quickly submit a refill request for a medication to be dispensed through the in-house inventory (turn on system setting E-Chart: Meds: Use Fill Requests

![](./med-queue-and-fill-requests.assets/f907c992e11e11a0900e367e4dc086c2.png)

From an encounter, the prescriber would be prescribing the medication in the Meds Plan section of the encounter and to signify an in-house Fill Request for the medication to be dispensed and filled from inventory, the prescriber needs to checkmark the **Fill** checkbox.

![](./med-queue-and-fill-requests.assets/8759df16b09b654d80387cb497f6b9b3.png)

An encounter is a face to face visit, so when the prescriber check marks the "fill" checkbox and saves the encounter, the Fill Request will be triggered and land as an "in-office" fill request.

When a _fill script on_ date is entered (via prescribe/meds chart tab) or the "fill" checkbox has been marked (via encounter) the prescribe screen's "print/transmit" checkbox will go unchecked (There is no need to print/fax or transmit this prescription) as the prescriber has requested to fill it in-house via the inventory module.

Also upon "fill" being check-marked, a task will be created to notify the specified departments that a Fill Request needs done and the request has been submitted to the Med Queue. Your MIE Implementer will ensure the task rules for Office and Phone Fill requests are set up.

![](./med-queue-and-fill-requests.assets/c0e9ac9b1c110230ac863aace5c13ded.png)

The fill request task will show up on the top summary taskbar to track the number of requests waiting to be completed and are separated by phone or in office requests.

![](./med-queue-and-fill-requests.assets/4ecd150e949666b4060c3f2407fde464.png)

The Med Queue may be a tab in the Inventory module or it may be added as a sidemenu tab.

![](./med-queue-and-fill-requests.assets/78422830bb20fd2593ff09dc18bd5f45.png)

The Med Queue shows a worklist of the outstanding Phone Fill Requests and any pending In Office Fill Requests. Tasks are linked to the Med Queue as well as the patient's pending fill requests in the chart tab named "Dispense".

## Grab Fill Request(s) via Med Queue

The Med Queue shows a list of charts that have a Fill Request task pending. Selecting a Med Queue request to work or grabbing the fill request via this tab, it's all linked together and will all complete the same fill request. To work on a fill request, click on the patient's name from the Med Queue worklist tab.

![](./med-queue-and-fill-requests.assets/74805ace587ba136394463e103f55402.png)

{{% info %}}
Fill Requests currently being worked on by others, will show in the Med Queue as _In Progress_ and will show the user's name next to it who is actively working on it. It also moves that Fill Request ‘task' into the User's Tasks and assigns the user as the owner of that task. The workflow is identical to working a task, even though the fill request is being completed through the Med Queue worklist.
{{% /info %}}

![](./med-queue-and-fill-requests.assets/d1d31ca466682c487ca5f44da841b7b7.png)

Click on the chart name in the Med Queue to fill a request, the application navigates the user to the chart's _Dispense_ chart tab. That tab will display the functions necessary to perform the Fill Request by dispensing the medication.

## Grab Fill Request(s) via Task Module

To work on a fill request, click on the group of pending Office Fills tasks or Phone Fills tasks at the top of the alert toolbar or from the sidmenu tab named Tasks. The requests listed in the Med Queue are the same requests. Tasks are the same as the Med Queue worklist. Selecting a fill request task or grabbing a fill request from the Med Queue, it's all linked together and will complete the same fill request. Grab a task by clicking the Grab link.

![](./med-queue-and-fill-requests.assets/3f9fff8b80665a870a62ea55cb66ffb4.png)

{{% info %}}
If someone already is working on a Fill Request task, they are the owner of that task and it moves that task from the bucket of department fill tasks for someone else to grab. It will also show that grabbed Fill Request task in the Med Queue as _In Progress_ and will show the user's name next to it who is working on it. Essentially you are working a task, even though you are working the Med Queue worklist.
{{% /info %}}

Once you've grabbed the task, click on the Perform link in the task to perform the fill request dispensing.

![](./med-queue-and-fill-requests.assets/519e64f289462dce968c401e8206ac58.png)

## Working a Fill Request

Whether you grab a task and click perform, or whether you click on a patient's name in the Med Queue to grab the Fill Request via that worklist queue, you are taken to the patient's chart. You will land on the patient's _Dispense_ chart tab.

![](./med-queue-and-fill-requests.assets/44d1e2caab4706fb4a3448cd76899cfb.png)

The first section shown, the user can work on each item. The section labeled _Requests For (Patient Name)_ will show pending Fill Requests for that patient.

![](./med-queue-and-fill-requests.assets/445f155803853638a420814bc3d2fc77.png)

Click on any of those hyperlinks on a Fill Request line (click on due date or request time or the medication fill request name).

![](./med-queue-and-fill-requests.assets/2a593ab5c9605cbf7ceaada78b2da8c7.png)

{{% tip %}}
In the options column the user can Edit the Request or Cancel this Request.
{{% /tip %}}

![](./med-queue-and-fill-requests.assets/bd0bfc17d74090bbc5705594305e67c8.png)

Editing the Request is editing the task. Cancel the Request is canceling the task with a note.

Click to work a pending request for that chart, to be taken to the "Fill" screen. The medication will be filled from in-house pharmacy inventory and decrementing inventory. The medication will be filled from the General Inventory.

{{% info %}}
If using a Patient Assistance program and there is a need to fill from that inventory, please see other help documentation in later pages.
{{% /info %}}

To fill multiple prescriptions at once, click the Dispense All link.

![](./med-queue-and-fill-requests.assets/20defbd05691d476290feb1177482af1.png)

This will open a new screen and display the pending prescriptions. The screen will contain the prescriber's drug prescription (Prescription Information section). Work through the fields on each prescription to fill using general inventory. Navigate using the tab key to advance from field to field.

![](./med-queue-and-fill-requests.assets/becbd7b23ea96649ad4866a518f8311e.png)

- <strong>Site:</strong> Select the site (and stockpile if that is applicable) you will be filling/pulling the medication from (inventory location).
- <strong>Medication:</strong> When you use the tab key to advance to this field, it should give you auto-complete choices of that specific medication inventory item you have in-house along with the QTY that is available depending on the "site" you had selected.

![](./med-queue-and-fill-requests.assets/16349d271004b25ff1d89526ccb85fac.png)

{{% info %}}
If Dispense All is chosen, the Medication prescribed will be prefilled into the fields, as shown in the previous figure.

{{% /info %}}

- <strong>Quantity:</strong> Using the tab key, advance to this field to put in the quantity that you will be dispensing based on the prescription and the sig and what strength is available from inventory.
- <strong>Lot Number:</strong> Using the tab key, advance to this field to see an auto-complete of Lot choices this drug is available to pull from in your inventory.
- <strong>Manufacturer & Expiration:</strong> Using the tab key, based on the Lot number chosen, these fields should pre-populate for you based on what is in inventory. Otherwise, you can key them in.
- <strong>Practitioner Sig/ Patient Sig:</strong> These will pre-populate for you based on the prescriber's prescription. You can override/change here. An example of this would be if the prescription was for 10mg of something, but you only have 5mg in stock, so you would be filling the prescription but using 5mg tablets, so the sig would need changed based on the strength of med, quantity, etc.
- <strong>Equivalent Quantity</strong>: is the same if you are prescribing the same strength as the original prescription. However in the example above, if you only had 5mg tablets available and the prescription read to take one 10mg pill every day, then the general inventory quantity would be more than the equivalent quantity.
- <strong>Fill Date</strong>: This is prepopulated with today's date, but you can override if you need to signify a different fill date.
- <strong>Filled Until</strong>: This is also pre-populated based on the prescription information from the prescriber but you can override if you need to signify a different filled until date.
- <strong>Print</strong> (<strong>Label/Patient Ed</strong>): Printing a label is the default to attach to the dispensed med. You can select to print patient education material for the medication drug provided from First Databank.
- <strong>Given To:</strong> Signify via radio button who you will give the dispensed fill to.

![](./med-queue-and-fill-requests.assets/42b10b00002d539c6d9ef136830c347d.png)

- <strong>Username/Password</strong>: If your practice utilizes the double authentication (System setting: E-Chart, Dispense, Confirm User on Transactions is enabled) these fields will be here to fill out. You will be required to enter your {{% system-name %}} username & password to complete the Fill a Request.

Click the FILL RX button to complete the fill request and dispense the medication as complete. You will be taken to the _Labels/Select Warnings to Print_ portion of the fill request. This is where you checkmark to apply what warnings you want to print on the label that you will be adhering to the medication packaging. You can uncheckmark warnings you do not want applied. If there are any available AKAs for that drug, you can opt to print that also. Click the PRINT LABEL button to generate the label. This is configured for Dymo label writers.

![](./med-queue-and-fill-requests.assets/bc91db3a28f7ddae50afaa74cc6a74ed.png)

You will get a confirmation that the logging of the medication fill was successful and you can continue on to work another fill request if there are any for this patient, or go back to queue or tasks to work another.

![](./med-queue-and-fill-requests.assets/77b08022cd3c50818ef5d92cc4007f27.png)

The completed fill request now is removed from the "pending" section of the patient's dispense tab, it's removed from the Med Queue worklist tab, and the task is marked completed and removed from the task list.

The completed Fill Request is then shown as ‘Dispensed' in the Dispensed Meds bucket/section of the patient's Dispense chart tab.

![](./med-queue-and-fill-requests.assets/a7ed67b418e13772ff851729d75495ea.png)

## Dispensed Meds Options

This section shows all dispensed meds given to the patient (completed Fill Requests). If you needed to return the dispensed quantity back into inventory for any reason, you can click the Un-Dispense link available.

![](./med-queue-and-fill-requests.assets/9744d791d8074595627f4a7bb7f243e9.png)

After completing the un-dispense, it then gives you a confirmation at the top that the un-dispensed was successful. It puts that quantity back into inventory and records it as a return in the transaction report.

![](./med-queue-and-fill-requests.assets/2fdcdb87c9d573188b41aea379130ad4.png)

Undispensing does not put the Fill Request back into the Med Queue or back into the patient's pending fill requests. It will show in the "Fill Requests" portion that the Fill Request has _Not Yet Been Filled_. To redispense correctly, you would work the link at the right named Fill from General to re-dispense correctly using inventory (or Fill from Pat Asst if your system utilizes the Patient Assistance specific inventory).

![](./med-queue-and-fill-requests.assets/8c62c078144704f77e8f5819081d2953.png)

The Show Fill History link will branch open to show the history of each time this med has been filled, returned, comments, etc. To go back to the other screen, click the Hide Fill History link.

The Show Refill History link will branch open to the E-Meds module refill screen and shows the Rx and all the refill history below it.

## Verification Feature and Sections

If the system setting E-Chart, Inventory, Verify Fills is enabled, your practice will be required to have verification completed after fill requests are worked. Once a fill request is worked (as in steps above), it then puts it in the VERIFICATION NEEDED bucket/section of the patient's _Dispense_ chart tab. The "Verification Needed Fills" section is found in the patient's Dispense chart tab. The staff then verify and dispense from a verification queue/worklist.

![](./med-queue-and-fill-requests.assets/a112e427ce2d45e293fcf6260fd677b6.png)

Staff that verifies fills would click the Verify link for fills needing verification. There is an option to do multiple verifications for the patient in mass if there is more than one verification needed (same for printing the labels for them).

![](./med-queue-and-fill-requests.assets/2ce05d8161cd696741681234d19de75b.png)

Once Verify or Verify All is clicked, it will take you to the Verify Fill screen. First you must select the drop-down to verify the dispense or not (select yes or no).

![](./med-queue-and-fill-requests.assets/5126c66b746746b8de1e8ebedea081b9.png)

If you are the one to "Dispense" this verified fill request, you can continue and would checkmark the box _Verify and Dispense_. Once you do that, the _Dispense Date_ and _Time_ fields will appear to document/set the date/time you are verifying and now dispensing the medication.

![](./med-queue-and-fill-requests.assets/b93b1667b2af7ffc40172eac2c944b8b.png)

If you are just "verifying" the fill request and someone else will dispense it, then you would not checkmark the "verify and dispense" checkmark and just click VERIFY button.

{{% info %}}
If your practice has double authentication on, you will be required to enter in your {{% system-name %}} username and password. Click then the VERIFY button.
{{% /info %}}

If you only verified it and didn't mark to dispense it, the Verified Fill request will now show in the bucket/section **Verified Fills.** The staff needs to work those to Dispense the verified fill request.

![](./med-queue-and-fill-requests.assets/ffaa543a3c0e5e85608557b420e253c0.png)

If you were to verify **and** dispense using the checkbox method above, or are now dispensing a verified fill from that other bucket and work that Dispense, once done it will display, at the very top of the screen, that your Fill has been successfully verified.

![](./med-queue-and-fill-requests.assets/34c44187859843d718af93420c41b589.png)

It now considers that fill request completed and shows that in the "Dispensed Meds" bucket/section of the patient's Dispense chart tab.

![](./med-queue-and-fill-requests.assets/ff90bfca8fc196d030e925319422564d.png)

## Patient Assistance Program (PAP)

If your practice uses Patient Assistance Programs to receive meds for patients, you may have the PAP column and button in this feature.

![](./med-queue-and-fill-requests.assets/133e149ad7eaefcbf32a2aa89f8bbf13.png)

If the patient has applied for the Patient Assistance program for the medication prescribed, you can check-mark the PAP column for that med and then click the UPDATE PAP APPLICATIONS button at the bottom of that section. The check-mark stays there for any user to see that the patient has updated/filled out/submitted their PAP application for that med.

It's just an informational feature letting you know that the patient has submitted a PAP application for that specific medication.
