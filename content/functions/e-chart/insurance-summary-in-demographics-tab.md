---
id: '1UlAQuxlBzy3lugt2itSsy3xWHmQi032BXXEMbO5_FpU'
title: 'Insurance Summary in Demographics Tab'
date: '2020-03-25T16:48:24.618Z'
version: 81
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../system-administration/security/security-role-settings.md'
source: 'https://drive.google.com/open?id=1UlAQuxlBzy3lugt2itSsy3xWHmQi032BXXEMbO5_FpU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Once in a chart, the demographics chart tab is found within the Admin tab.  There is also a portlet named Insurance that is available to display on the chart Summary tab that can display for your view.

When in demographics tab or if click manage information within the insurance portlet, you can review patient demographics.  However, down towards the bottom of the demographics summary is the section named** Insurance Summary**.

![](../insurance-summary-in-demographics-tab.assets/3e794d98630c1b3d8ba0518db0645043.png)

{{% tip %}}
The Insurance Summary section does not display when in Edit Demographics mode.  Must be in the demographics summary tab or access this via the Insurance portlet by clicking the ‘manage info' icon in the portlet.
{{% /tip %}}

Insurances current for the chart display here, as well as the ability to add, edit or delete insurances for the chart can be done here.  Access, viewing, adding, editing and deleting insurance policies in the Insurance Summary of a chart are security permission driven. Contact your MIE Implementer or administrative superuser to obtain specific security permission level for** Patient Insurance Policies** in {{% system-name %}} or refer to [Security Role Settings](../system-administration/security/security-role-settings.md) documentation for more information.

## Add an Insurance Policy to a Chart

To add an insurance for the chart, when in the Insurance Summary area, click the **Add Insurance** link at the top right.

![](../insurance-summary-in-demographics-tab.assets/cedb25fb7c2ab216731566b946f5627b.png)

The **Add Insurance Policy** screen and fields display.  The fields are described below:

![](../insurance-summary-in-demographics-tab.assets/82c59a53b1937c808d86c3a7230552e1.png)

* <strong>Insurance Plan</strong>: Begin typing the name of the insurance.  The system will auto-complete choices from a master list of insurances.  Select the one you want and use the tab key to go to the next field. If you type in an unrecognized plan (free-text in something) you will receive a pop-up warning that it is an unknown plan (not found in the master listing) and if you still want to continue to add this plan as you named it.
* <strong>Priority</strong>: Primary Insurance would be 1st, a patient's secondary would be selected as priority 2nd, tertiary insurance would be selected as 3rd and so on.
* <strong>Active</strong>:  This will default to be check-marked meaning this is an active and valid insurance for the patient.  If the patient ever drops the insurance or no longer has the insurance anymore, you simply uncheck-mark this to deactivate the insurance.  There is no way to delete an insurance once entered. Insurances can only be inactivated.
* <strong>Policy Number</strong>: Enter the policy # for this insurance being entered.
* <strong>Group Number</strong>: Enter the group # for this insurance being entered.
* <strong>Policy Start/End Dates</strong>: You can enter the insurance policy start and/or end dates if you wish.  This is optional. Not all cards state this information nor do the patient's remember the start date of their insurance, etc.  An end date would only be entered if the patient didn't have the insurance any longer, etc.
* <strong>Relation to Insured</strong>: Enter the patient's relationship to the policy holder of this insurance you are entering.
* <strong>Holder Name</strong>: There are 3 options for getting a policy holder's name entered here.
    * <strong>Patient is holder</strong>: Checkmark the Patient is holder box if the patient is the policyholder for the insurance you are entering.  You must uncheckmark it if the patient is not the holder of the insurance for the other 2 options to appear for entry:
    * <strong>Enter Holder</strong>: When the box is not checkmarked, the Enter Holder: field will appear.  This is where you can type the last name of the person who holds the insurance.  The system will attempt to auto-complete by last name and search your system for that policyholder you are typing in.  The policyholder must be a patient in your system for it to auto-complete and find that person here.  If the policyholder is not a patient in your system, you would continue to type that person's first and last name as free-text in that field. You would then click the Non-Patient Holder Details button to enter the remaining policyholder information manually.  Example: insurance is held by the husband but he has never been seen at this practice because it's an OBGYN practice.  He would not be found as a patient in the system, so you continue to type out his name in the Enter Holder: field and then would click Non-Patient Holder Details to continue to enter his detailed information.
    * <strong>Non-Patient Holder Details</strong>: Enter the policy holder's information if that policy holder is not an existing patient in your system.
* <strong>Policy Comments</strong>: Type any comments related to the insurance policy here.
* <strong>Insurance Pre-Certifications</strong>: When insurances are entered in the patient's demographics tab, there are fields to enter any pre-certification details.  Example would be a patient coming in for physical therapy is pre-certified for 10 visits from Oct 2007 through Dec 2007. You can detail that when adding or editing the insurance from the patient's demographics tab.  If there are any pre-certification details entered in for a patient's insurance, this precert information will appear in the checkin module also when you checkin the patient. This information also shows if you hover your mouse over the patient's insurance name(s) in the scheduler view in the appointment detail. If you have insurance messages coming in from your interface/PM system, you can still enter Pre-certification information here in {{% system-name %}} and it will save.

    ![](../insurance-summary-in-demographics-tab.assets/fbb6df845e73612a029b8aa69fd212a1.png)

* <strong>Certification Number</strong>: Enter the certification number for the pre-certification.
* <strong>Begin/End Dates</strong>: Enter begin and end dates for this pre-certification.
* <strong>Remaining Uses</strong>: Enter the # of uses the pre-certification is for.
* <strong>Description</strong>: Enter any comments/descriptions for the pre-certification
* <strong>Add</strong>: Click the ADD button to add this certification to that insurance you are entering. You can enter more pre-certifications if the patient is seen for multiple physical therapy modules, etc.  Click CLEAR to start over.

At the bottom, click the **Save** button to add this insurance to the chart.  If you want to save and add another ex: secondary insurance, click **Save & Add Another**.  Clicking Cancel will get out completely and the option **Reset** will not save the insurance data and will clear the fields to start over.

After you have entered the insurances, you will be taken back to the Demographics Information summary tab of the chart.  You can scroll back down to see the insurances entered in the Insurance Summary section.

## Editing an Insurance Policy in a Chart

Insurance policy details can be edited in a chart by clicking the Edit link on the specific listed active insurance.  Inactive insurances can also be edited, but to access inactive insurances in a chart one must click the show inactive link provided.

![](../insurance-summary-in-demographics-tab.assets/db058b9e05920e932aa248089bb2f02c.png)

After clicking edit on a specific insurance listed, the **Edit Insurance Policy** screen will expand where edits to any of the detailed fields can be made.  Click the Save button to save any modifications. Any existing insurance card image/document that is linked to the policy you are editing will also show in detail at the bottom of the edit screen after the policy details.

![](../insurance-summary-in-demographics-tab.assets/2874e38153379fe514c2db85359e5d71.png)

![](../insurance-summary-in-demographics-tab.assets/944774add1cbd504c6163c8af1fbdf8d.png)

## Inactivate an Insurance Policy in a Chart

An insurance cannot be deleted from the chart, but it can be marked **inactive** if the patient/chart no longer has that insurance.  To inactivate, get into the insurance policy via the **edit** link.  Once in the Edit Insurance Policy fields, simply uncheckmark the insurance as active.  After clicking the Save button, the insurance will be saved in the chart as an inactive insurance policy.

![](../insurance-summary-in-demographics-tab.assets/47167e9ae81a58c38b721b6937d12ead.png)

## Card Options

Depending on your security permissions, when looking at the Insurance Summary section of demographics, you will see the **Card-Options** link in the options column next to each specific insurance policy.

![](../insurance-summary-in-demographics-tab.assets/6272121bab450f9faf9af24204b7abee.png)

Clicking on **Card-Options** will to allow you to view card images linked to the specific insurance policy, scan in new images of an insurance card, and also link/unlink card images to a specific policy. Please contact your MIE Implementer or the MIE help desk if you need help regarding any security privileges to perform actions within this feature, but more detail is below.

If you only have ‘view' security level for patient insurance policies, you can still click Card-Options to view any linked card on a policy, but cannot scan to add insurance card images nor link/unlink card images to a listed insurance policy.

### Linking an Insurance Card (Scanned Image)

If an insurance card has already been scanned in as an image/document into the chart, you can link the stored document image (already in the chart) to a specific insurance policy listed in the chart's demographics tab here in the Insurance Summary section.  Simply click the **Card-Options** on the specific insurance policy and then select **Link Existing Insurance Card**.

![](../insurance-summary-in-demographics-tab.assets/e66e90478642a0e33acb007d5167fb6c.png)

A pop-up window will display to indicate which stored insurance card document/image you wish to link to that specific patient's insurance policy.  In the **Choose an Insurance Card to Link to Policy** pop-up window, the Doc IDs listed in the pop-up look at any document that was previously scanned in/stored as an e-scan document (which will include photo's, etc).  It is recommended to have separate document types for insurance card-primary, insurance card-secondary and insurance card-tertiary to help distinguish them. Stored chart e-scan documents already linked to an insurance policy will not show up to be chosen.  Once a document (insurance card) has been linked, it will not be available to link to any other policy.  Each policy should have its own insurance card image linked to it.

{{% tip %}}
To preview what the insurance card image/document looks like before selecting it's radio button to link it to the policy, simply click the underlined Doc ID and it will open the image in another window.
{{% /tip %}}

Select the radio button for the document (insurance card) you wish to link to the patient's specified insurance policy.  When you've selected the document to link to the policy by selecting the appropriate radio button, click the **Link** button to link the selected stored document to the specified insurance policy for the chart.

![](../insurance-summary-in-demographics-tab.assets/51b3405c2b9266225fadb1410699e51d.png)

Once you click the Link button to link an existing insurance card scanned document to the policy, you will see a Linked Successfully message and this message will disappear off screen after a few seconds.

![](../insurance-summary-in-demographics-tab.assets/3adc136821011404ffb7bc9675481229.png)

If there are no existing e-scan documents (insurance card documents, etc) in the chart, or insurance card e-scan document images have already been linked to a policy, you will see the message in the window stating there are No Documents Available to link to this specific insurance policy. That means either stored insurance card documents are already linked to an existing policy, or there is not a stored insurance card document image in the chart yet.

![](../insurance-summary-in-demographics-tab.assets/955a530ddeea2f8aac9dfafb89af29b2.png)

### Unlinking an Insurance Card (Scanned Image)

If an insurance card document image is already linked to the chart's specified insurance policy, you can unlink it. Unlinking an existing insurance card would be done if perhaps the insurance card changed and you needed to unlink the existing card from the policy and scan in a new card.  Or perhaps unlinking needs performs because an existing insurance card document was scanned and stored into the wrong chart. If that were the case, one would unlink it, then either delete the insurance card scanned document image, or move it to the correct chart.

To unlink a stored document image from a specific insurance policy in the chart, simply click the** Card-Options** link, and then click** Unlink Existing Insurance Card**.    If you instead need to simply view the insurance card that is linked to this policy, you can click **View Linked Insurance Card** instead to view it or preview it before you unlink it.

![](../insurance-summary-in-demographics-tab.assets/865a65f1674e3071e841652bd44cf906.png)

Once you select **Unlink Existing Insurance Card** from a specific listed insurance policy, the system will display a pop-up to confirm you wish to unlink the current insurance card image from the selected insurance policy.  Click **OK** to proceed to unlink.

![](../insurance-summary-in-demographics-tab.assets/483f1ed2ff1358beb4dfafa394ea6314.png)

Once you have confirmed and unlinked the document from the insurance policy, the system will display an unlined successfully message and this message will disappear off screen after a few seconds.

![](../insurance-summary-in-demographics-tab.assets/cb3c67e6984b1927729c4fd1cb7b9461.png)

### Scanning an Insurance Card from Insurance Summary

It is recommended to have separate document types for insurance card-primary, insurance card-secondary and insurance card-tertiary to distinguish them.  Then chart tabs can be set up with rules to show the most recent, and another tab to display all of the older copies or your MIE implementer can set up the insurance card chart tab to only show the most recent insurance card(s) according to date scanned in.

{{% note %}}
For the **Scan Insurance Card** link to function when you click Card-Options from a listed policy in the Insurance Summary section, you must have **WCINS** as a doc.type in your system as **Insurance Card** (or distinguish it as primary).  If WCINS is not in your system as a doc.type, this link will not function.
{{% /note %}}

You can scan in an insurance card via **Add Document** method and select the filter E-Chart Scan to upload/scan in an insurance card to the insurance card document(s) that way.  The other option is to click** Card-Options** next to the specific policy listed in the Insurance Summary of demographics, then select **Scan New Insurance Card**.

![](../insurance-summary-in-demographics-tab.assets/af3161ff9ac605a14d565760c866ed49.png)

When **Scan New Insurance Card** is clicked, the document properties & scan control screen will open.  Most likely your scanner may automatically start scanning.  If not, click the **SCAN IMAGE** button to make it start scanning. Make sure the correct scanner (flatbed or shell scanner, etc) is selected as your source scanner.  Your scanner will now scan the insurance card.

The document you scanned will appear in the document scan control box now. If you have another side (back side) of the document to scan, flip the document over, click **Scan Image** button again and it will scan the backside while you remain in this specific document.  It will not upload anything until you click the **Upload** button.  You can scan in as many sides/pages as you want for this single document.

![](../insurance-summary-in-demographics-tab.assets/2de03c2cc72132a0dfa8f3f4297ac2d5.png)

{{% note %}}
There are also additional system settings that your MIE Implementer can set for auto-crop, sizing, resolution, show the UI, set to color, etc. for the insurance card scanning control in {{% system-name %}} .
{{% /note %}}

You can now select and complete some additional options to the document properties.

The Document Scan Control box and the scanned image is followed by the **Add Document Properties** section of the screen.  The fields are described below:

![](../insurance-summary-in-demographics-tab.assets/960e45f6bd1e2a184af713804a4c22b2.png)

* <strong>Authored By</strong>:  You must have security permission for ‘Transcribe For Others' in order to change this field.  Select who is creating this text document. If you are creating this scanned document for a physician or someone else, choose their name.  You can start typing the last name in the first blank field and click SEARCH to pull up a list of users that match and select from there.  If you want to select a physician within your practice, use the drop-down arrow in the next field and select from there (this is helpful to narrow down the search).  If you are creating this scanned document yourself (not for anyone else) then choose ME box here. The document will reflect your name as created by: and also within the template if it asks for the dictator name.  The name you choose/select, will then appear at the top of these fields. Confirm and make a change if need to. If you do not have security permission to create documents for other users, this field will not be an option.  It will automatically put your name on the document you are about to create.
* <strong>Document Type</strong>:  This pops-up the name of the document you clicked on WCINS doc.type. If you need to change the document (ex: need to scan in Insurance card-secondary and it defaults to WCINS which is insurance card primary), you can use the drop-down arrow here and select the correct document type.
* <strong>Date of Service</strong>:   Choose the date of service for this document you are scanning in.
* <strong>Service Location</strong>:  Choose your location.  It will not allow you to ‘choose' a location if your facility only has one location set up in the {{% system-name %}} system.  It will then automatically be filled out.
* <strong>Encounter</strong>: You can choose to attach this new document to an encounter for the patient.  This will auto-fill with the current encounter number by default, but you can also click the search button and it will pop a select & search patient encounter window to show you all encounters for this patient.  If you click the Search within xx days it will search for encounters out in 3 day increments.  Once you've found the encounter you wish to attach this new document to, click the Select Encounter link & it will place the encounter data information in the encounter field.  If you do not want to link this to an encounter, simply delete any encounter number in the encounter field.
* <strong>Comments/Notes</strong>: In the blank box below cc physicians, you can type any comments/notes, etc to be with the document you scanned.  A spell check button is provided to check spelling for this field.

{{% tip %}}
Add a Backside of the Card. If you have another side (back side) of the document to scan, flip the document over, click **Scan Image** button again and it will scan the backside while you remain in this specific document.  It will not upload anything until you click the **Upload** button.  You can scan in as many sides/pages as you want for this single document.
{{% /tip %}}

When done scanning the card, making any edits or cropping, added the backside of the card, etc and have completed the add document properties click the Upload button at the bottom or the top.

It will upload the scanned image directly into the chart according to the document properties specified.  The scanned document is also automatically linked to that policy. No additional linking is then necessary when scanning in an insurance card using the Card-Options link from the specified insurance policy listed.

## Scan Control Options

* <strong>Crop</strong>: on the image, place your mouse (which will appear as a cross + ) at the point where you want to start cropping, click and hold the mouse down and drag to highlight in BLACK over the image part that you want to keep. Release your mouse.  If you want to re-do the crop, just click the mouse and do this again. When you have what you want to save/keep highlighted in BLACK, click the <strong>CROP</strong> button. It will refresh and show your cropped document in the upper left corner.  This is what will be uploaded & stored into the chart. If you wish to crop more, repeat the steps.

    ![](../insurance-summary-in-demographics-tab.assets/9600102aa92d5b647258601c6eec75a7.png)

* <strong>Select Scanner</strong>: Click this to select a certain scanner, if more than one is hooked up to your computer.
* <strong>Scan Image</strong>: Click this to scan another image for this same document you are in.  Example: the backside of an insurance card or another scan for the document.  It will keep these images together as one document. ONLY click the UPLOAD button when completely done with all scans for this specific patient's document.  So, for example, you would click Scan Image for insurance card front side, crop it, then turn the insurance card over and click Scan Image button and scan in the back side of the insurance card, crop it, then when done, click UPLOAD and it will store the front & the back side (2 pages of scanned images) as one document.
* <strong>Delete</strong>: This will delete the scanned image for that page you are viewing.  It will not ask you to confirm your deletion.  If you click the delete button, the image will disappear immediately.  You would have to click the scan image button and rescan your image.
* <strong>Move Left</strong> & <strong>Move Right</strong>: If you have a multi-page document (ex: front & back of insurance cards), you can move pages around (the ordering) by clicking on these buttons.
* <strong>Prev/Next  #/#</strong>: The buttons toggle you between pages of the scanned image (if there is more than one page scanned at a time).  The #/# box represents what page number is being viewed and out of how many total pages there are scanned in so far for this specific scan.

![](../insurance-summary-in-demographics-tab.assets/881e53cf4cb6725b450e6636f9523da8.png)
