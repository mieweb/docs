---
id: '1FM-Bx8fVSojYtqK0VN_VG1R69EAzJFO05_M4uSCLGCA'
title: 'Document Queue - Merging Imported Documents'
date: '2023-04-24T13:17:40.799Z'
version: 175
lastAuthor: 'jmatzke'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1FM-Bx8fVSojYtqK0VN_VG1R69EAzJFO05_M4uSCLGCA'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
Click *E-Chart* on the left sidebar menu.

Click *Document Queue* tab at the top.

The Document Queue only shows patients that are marked as temporary. In the QUEUE drop-down it will list each partition and will show the count to the right of how many patients are marked as temporary.

![](../document-queue-merging-imported-documents.assets/27612d02ebacbcf8dcde9027ed4bb1b1.png)

The definition of temporary is a patient that comes across an interface that does not match in any existing partitions.  The criteria for the match is MR#, name, & dob.

So if just one of these stated criteria are met/matched it won't put the unmatched patient in the document queue it will just drop into E-Chart. It won't automatically merge to the existing account it will just go into E-Chart with its partition/mr#.  Please make sure you have a tasklist event setup to catch all incoming documents so they will be viewed.

It's best to merge the 9 ratings first.

* Queue: Use the drop-down arrow box to select the partition you want to merge a document from.
* Min Rating: Change this to <strong>9</strong>. The higher the number, the more specific/closer the match.

Then click the SEARCH box off to the right.

![](../document-queue-merging-imported-documents.assets/17b7b5ce7ee8b700abdd96aa42b12b84.png)

## Merge Ratings

Match ratings range from 0 through 9 with the higher rating being more certain it is the same person.
<table>
<tr>
<td><strong>DOB matches and the following criteria apply:</strong><br />
<ul><li>Rating 9: Last Name, First Name matches</li><li>Rating 8: SSN matches</li><li>Rating 8: Last Name, First Name sound similar (<em>e.g.,</em> Bob and Rob)</li><li>Rating 7: First Name and Last Name are swapped</li><li>Rating 6: Last Name, First Name Initial matches</li><li>Rating 5: Only Last Name matches</li><li>Rating 4: Only First Name matches</li><li>Rating 3: Only First Name sounds similar (<em>e.g.,</em> Bob and Rob)</li></ul></td>
<td><strong>DOB does not match and the following criteria apply:</strong><br />
<ul><li>Rating 6: SSN matches</li><li>Rating 5: Last Name, First Name matches</li><li>Rating 4: Last Name, First Name sound similar (<em>e.g.,</em> Bob and Rob)</li><li>Rating 3: First Name sounds similar (<em>e.g.,</em> Bob and Rob)</li><li>Rating 2: First Name and Last Name are swapped</li><li>Rating 1: First Name Initial matches</li></ul></td>
</tr>
</table>

## Individual Patient Merges

In the left box, it brings up a list of all the imported documents need to be merged for the patients. Click on the underlined MR# on the left side to work these individually and merge the document coming in, to a {{% system-name %}} account in your system (the right side).

The left side is the documents that came in. The right side is the {{% system-name %}} accounts side that you will merge them to.

The big box at the **bottom** is the actual document that is imported. Can look at this to determine which account to merge this to. The box on the **right** is the choices of accounts you can merge to that are automatically found as close matches. It shows the rating of the match also. The higher the rating (9) means most of the patient fields match and it's likely this is indeed the same patient to merge the document to.

The system may not automatically find good choices of matches. In that case, you should always do a manual search just to make sure that patient doesn't exist in your system to merge to. You can also use the fields at the top of that right side to search for your own match (search by MR#, Name, SSN, DOB, Phone, Doc id) and do a manual search.

![](../document-queue-merging-imported-documents.assets/5840cbe96296b0e56b4b94e8d9723ee1.png)

The system will try to find matching accounts for you to merge to on the right side. If you verify this is indeed the patient you want to merge the document to, you would click the **select** radio button to select that account to merge into. If you see Q-Merge that means *Quick Merge*. Instead of selecting the radio button for this patient, you can click Q-Merge to skip some merging steps. If wish to go thru all the merging steps, then select the radio button.

Scroll down then click **Merge To Selected Patient** box. Then scroll down and click the MERGE TO SELECTED PATIENT button.

![](../document-queue-merging-imported-documents.assets/169eb5980865f2967fb55bcf3b469cca.png)

Then scroll and click the PREVIEW MERGE button.

![](../document-queue-merging-imported-documents.assets/7b6751c559fdcc7279c19bdcc579e927.png)

{{% note %}}
If you did a manual search and found the patient account you want to merge to, you need to click the patient's MR# account you found on the right side during your search.
{{% /note %}}

![](../document-queue-merging-imported-documents.assets/63becca1b8cb90c80d417dd5e0b2afdc.png)

From this point, you need to scroll down on the top right side. Use the scroll bar indicated below for this section. You need to scroll down to see the **Merge Options** to continue the merging process.

![](../document-queue-merging-imported-documents.assets/b006a7797566115d9de45ac40cf79756.png)

It will bring up the patient's demographics screen in the right side column of the screen.

Scroll down a little bit to the 4 **Merge Options** that are radio button choices (right under the demographics info).

![](../document-queue-merging-imported-documents.assets/aff06bb7f1df8d18145414f73b899670.png)

* <strong>Choice 1:</strong> <strong>Merge Chart only & ignore this patient's demographics</strong>. What this means is that if selected, it will merge and only keep MR number of the chart the documents are being merged to (regardless of partitions being merged).
* <strong>Choice 2:</strong> <strong>Merge Chart & Demographics & ignore this patient's duplicate MR Numbers.</strong> What this means is that if selected, it will merge and keep both MR numbers when merging MR's from two different partitions. If merging two MR numbers from the <em>same</em> partition, only the MR number of the chart that the documents are being merged to will be kept. (This is the most common selection used).
* <strong>Choice 3:</strong> <strong>Merge this patient's chart & keep all MR#'s</strong>. What this means is that if selected, it will merge together the patient's entire chart and keep all MR numbers regardless of partitions.
* <strong>Choice 4:</strong> <strong>Merge this patient's documents and MR Numbers Only.</strong> What this means is that if selected, it ONLY merges the documents in the "from" patient and the MR numbers on that patient to the merged "into" patient. No other data (demographics, meds, conditions, etc) would be merged.

Click the radio button of your choice then scroll again down to the bottom of that right side section and click the button that says MERGE PATIENTS. It will then merge the document from the left side to the account on the right side.

![](../document-queue-merging-imported-documents.assets/cca4490f7eb1aeac62d3038c2e07e1e3.png)

It gives you a list of what was merged (on the right side) and what wasn't.

![](../document-queue-merging-imported-documents.assets/6cc4b17ab6fcc8405d6b55ec69fff19b.png)

This patient is now done and is taken out of the left side queue. Continue to work on the next patient document on the left side by doing the above steps.

To go work on another patient document to merge, click the **Document Queue** tab at the top again.

Reset the Min Ratings, etc and begin again.

## AutoMatch (Merging Patients in Bulk)

Click *E-Chart* on the left sidebar menu.

Click *Document Queue* tab at the top.

To Auto Match, select the queue you wish to work. Set the Min Rating field to 9, then click the SEARCH button. It will list only patient documents on the left that have a matching rating of 9.

Click Auto Match link to auto-match these quickly and in mass without having to do individual merges and steps on the previous pages. The system will only *auto-match* ratings that have a 9 because it's indicating a very high match to an account in your system. The ratings of 8 and lower have to be done individually/manually to verify and insure that the patient's account does match an account in your system. You may receive a document that isn't even yours, so you would want to verify the merge instead of doing the ‘auto-match' method.

![](../document-queue-merging-imported-documents.assets/e20bc7cfa14008605fa58dfcb2d68343.png)

The **Auto Merge** screen opens up.

* Merge from Queue: Select the partition your documents are coming from.
* Search in Partition: Change to MR or whatever partition/record #'s you use for {{% system-name %}} . This is the partition you want the documents/accounts to merge to. These partition drop-down selections respect the partitions the logged-in user has access to.

![](../document-queue-merging-imported-documents.assets/3ab5e48cd6187d3d953d0955a9f88f27.png)

Click **NEXT** box.

It will give you a warning message that you are about to merge.

![](../document-queue-merging-imported-documents.assets/b7fe5a32b36233bcd51531212db4306d.png)

You can preview, or merge the accounts by clicking the appropriate box.

After you click Yes to merge all 9 rated patients, it give you another warning. Click YES again if correct.

When done, close out the screen by clicking on the X in the top right corner of that screen. On failure of a merge, merge transaction is rolled back to previous state.

Click Search again and it should only show what needs to be done after the Auto Merge (ratings lesser than 9).

There is a security setting available to allow users to update the patient matches/ratings through the document queue.

![](../document-queue-merging-imported-documents.assets/f7bdd11afdc379b1c44339b8e51fc4af.png)

If user has security permission to this, they can update all patient match ratings through the document queue.

In the Document Queue you will then see a link Update All Patient Match Ratings.You can click that to update all patient match ratings. You may want to do this if the records in the document queue have been sitting there awhile as unmerged and perhaps permanent medical records on the {{% system-name %}} side were created or altered for any of those patient. Then the patient(s) in the document queue would then have a better/higher updated ‘match' rating against something found in {{% system-name %}} as opposed to when it first fell into the document queue.

![](../document-queue-merging-imported-documents.assets/c58443ca5913f437841e6647bb86380f.png)

You will get a pop up when you click update all patient match ratings.

![](../document-queue-merging-imported-documents.assets/4bb42f96fb9bb01a2c641389c0d0abb2.png)

It will display a new window and run the update. At the end you will see *done syncing patient duplicates* and you can simply X out of that window.

![](../document-queue-merging-imported-documents.assets/b38f232565298bc92e6c6ff7286a8496.png)

Then this will update the match ratings the patients have that are sitting in the document queue to be worked.

## Delete & Not Merge

If you've found you received a document for a patient (on the left side) and you do not have that patient in your system, or the document (see the document fully at the very bottom) is not your practice's document, you can delete it from the queue without merging it to an account in your {{% system-name %}} .

Verify the document is indeed not yours by clicking on the MR# of the patient on the left side section.

The document that is coming in will fully display at the bottom so you can verify you wish to delete this.

![](../document-queue-merging-imported-documents.assets/ebedb991a80dab7d004b7932ba0e6e75.png)

To delete an incoming document without merging it to a {{% system-name %}} account, click the *Delete* link in the left side section for the patient's incoming document. On the right side it will open *Verify De-Activation*. It will ask you if you want to deactivate this patient.

![](../document-queue-merging-imported-documents.assets/af4b81d4af1bdbe96aaa72604c0767b8.png)

It will display the confirmation screen. You must type in *yes* in that field then click the YES I'M SURE button to delete.

![](../document-queue-merging-imported-documents.assets/58e892793edbcfec946513c28aa56947.png)

Once you've typed *yes* and clicked you are sure to de-activate, it will show the message that the documents have been de-activated/deleted and the patient has been de-activated. This is that specific patient mr# account from the left side.

![](../document-queue-merging-imported-documents.assets/99ea0642b7cac115f77867b37b538218.png)

It marks those documents as deleted. It doesn't delete the patient, but keeps the chart marked as **temporary record** (if it's not merged to any active {{% system-name %}} account) and marks the chart as an **Inactive Record.**

![](../document-queue-merging-imported-documents.assets/d88f4e5d9d4f8438b76c9d0642cc1f16.png)

If the Record is marked as "Temporary", shows this in the record header in the ALERT Background and Font Color in bold. This is simply a notice to the user letting them know they are viewing a record that is considered temporary.

If the Record is marked as "Inactive", shows this in the record header in the ALERT Background and Font Color in bold. This is simply a notice to the user letting them know they are viewing a record is not active.

![](../document-queue-merging-imported-documents.assets/6147a999b4112351782a30fa7a4dadce.png)

If you merge an MR# chart with another partition, and the user makes the "other" partition the primary account number (which is incorrect to do), you get this warning on the patient charts.

The correct way is to merge the temporary patient into the permanent MR#. Then the warning should go away.

If the user merges incorrectly like keeping the temporary account as the primary this warning will always show on the patient account.

Soon (In a future upgrade release) a user will have the ability to mark the patient account as inactive from the demographic screen.

## Queue

There are differences in the ‘queues' that the record lands in. The top partitions in the queue (normal partitions) if the patient's record lands in there this has to have happened:

* the MRN does not exist in {{% system-name %}}
* the patient name/dob pair doesn't match if vendor provides SSN in message then that is used to lookup as well (name/dob/ssn lookup)

![](../document-queue-merging-imported-documents.assets/38222716225ab3bd653a319ecde2e6ed.png)

For a patient record to be in the doc queue in an NX (Non-Indexed) partition (the bottom queue partition choices), this has to happen:

* The patient exists with the same MRN as the message, but the last name isn't identical (message vs {{% system-name %}} ) This is if the name validation is on, which most interfaces are. If it isn't, then MRN lookup would be enough.
* If using internal & external partitions and a message comes in but each MRN belong to a different patient, new patient will be created in NX partition.
* If MRN is not valid (bad characters, all zero's, etc) and can't find patient by name/DOB

## Partition Restrictions

When the system setting "Filter by PO #" is enabled (value=1), partitions that contain patient charts and documents related to the logged in user via document "send" are shown regardless of the partition restriction setting. This allows users to view documents related to themselves even though the partition is restricted.

![](../document-queue-merging-imported-documents.assets/b94b5e155656fd7cf2b9bbd0cf8aa206.png)
