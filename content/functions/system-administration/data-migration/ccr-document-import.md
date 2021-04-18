---
title: "CCR Document Import"
date: "2020-03-17T02:55:52.956Z"
url: "functions/system-administration/data-migration/ccr-document-import.html"
version: 34
id: "1WXvPYGq4hqG02LDQYHH7epqUgWwPDfB_1BVYf3121SU"
source: "https://drive.google.com/open?id=1WXvPYGq4hqG02LDQYHH7epqUgWwPDfB_1BVYf3121SU"
menu:
    main:
        name: "CCR Document Import"
        identifier: "1WXvPYGq4hqG02LDQYHH7epqUgWwPDfB_1BVYf3121SU"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4780
---
Continuity of Care Record (CCR) can be imported into {{% system-name %}} . The CCR standard is a patient health summary standard. It is a way to create flexible documents that contain the most relevant and timely core health information about a patient, and to send these electronically from one caregiver to another.

When you receive such a document, insert the CD or flashdrive, etc (with the CCR document on it) into your PC.

Click the left sidebar tab called *E-Chart.* Find and open a specific patient's chart.

Click Add Document near the top right corner in any tab for the patient (or from scheduler).

Click the filter of File. This will open a document properties screen where you can browse for a generic file & upload into the patient's chart.

![](ccr-document-import.images/image1.png)

Once you click the File filter from the Add Document link, the Add Document Properties screen opens.

![](ccr-document-import.images/image2.png)

* <strong>Authored By:</strong> Authored By: (You must have security access to this. The security permission is called ‘Transcribe for Others'.) Select who is uploading this generic file document. If you are uploading this file for a physician or someone else, choose their name. You can start typing the last name or first name in the first blank field and the system will auto-complete your typing and display a list of users that match and you can select from there. If you want to select a physician within your practice, use the drop-down arrow in the next field and select from there (this is helpful to narrow down the search). If you are uploading the file/document yourself (not for anyone else) then choose ME box here. The document will reflect your name as created by. The name you choose/select, will then appear at the top of these fields. Confirm and make a change if need to. If you do not have security permission to create documents for other users, this field will not be an option. It will automatically put your name on the document you are about to create.
* <strong>Document Type:</strong> Use the drop down arrow here to choose the name of the document you are uploading & storing into the patient's chart. Choose <em>Continuity of Care Record</em> or <em>CCR Document</em>, however it is named in your system.
* <strong>Storage Type:</strong> Allows you to select the type of file you are uploading. If you select the wrong storage type, the document will not display correctly and you may get an error when you click the ADD DOCUMENT button. If need help selecting a specific storage type, please contact MIE's help desk. To upload a CCR document, select the storage type <strong>CCR Document.</strong>
* <strong>Date of Service:</strong> Choose the date of service for the file.
* <strong>Service Location:</strong> Choose the location.
* <strong>Encounter:</strong> You can choose to link this new document to an encounter for the patient. This will auto-fill with the current encounter number by default, but you can also click the search button and it will pop a select & search patient encounter window to show you all encounters for this patient.  If you click the <em>Search within xx days</em> it will search for encounters out in 3 day increments. Once you've found the encounter you wish to attach this new document to, click the Select Encounter link & it will place the encounter data information in the encounter field. If you do not want to link this to an encounter, simply delete any encounter number in the encounter field.

![](ccr-document-import.images/image3.png)

* <strong>CC Physicians</strong> Please ignore this field for CCR Documents.
* <strong>File:</strong> Click the <em>Browse</em> button to browse out to your hard-drive & find the CCR document file to upload for the patient. Double click on the file you're searching for. It will then place that file into the File field.

Once you have selected the file that you wish to upload, click the ADD DOCUMENT button.

![](ccr-document-import.images/image4.png)

It will upload the document into the patient's chart. It will state a *Successfully Uploaded* message and should display the document on the screen with the document identification.

*You can then upload & store any type of file into a patient's chart. However, |system| does not support or have the ability to print/fax or even view certain stored file types.*

## Reconcile the Imported CCR Document

After you have imported the CCR document into {{% system-name %}} and removed the media you're your pc, you can reconcile the information into the patient's {{% system-name %}} record.

Find the document in the patient's chart you just uploaded (usually found in Doc.Sum tab).

Click the Doc.ID to get into the CCR Document.

The CCR document will open on your screen as such:

![](ccr-document-import.images/image5.png)

Click on the **Reconcile** link to get into the FroozHIE method to reconcile this data into {{% system-name %}} . (System setting to *reconcile* must be turned on for this link to show).

![](ccr-document-import.images/image6.png)

Once you've clicked *reconcile*, a separate window on your screen which is the FroozHIE module. There are instructions at the top to explain the FroozHIE tool and how to bring data over into {{% system-name %}} .

Whatever you want brought over, click the >> button next to it. The LEFT side is the patient's CCR record you imported. The RIGHT side is what you have in {{% system-name %}} for that patient currently.

{{% note %}}

The CCR shows all the section like Family History, Procedures, Injections, Social History, Illnesses, etc. However, the FroozHIE tool only shows certain sections like Demographics, Meds, Allergies, etc. Even though you do not see the injections, family history, procedures and observation sections in the FroozHIE, they will come over automatically into the patient's {{% system-name %}} as soon as you click the SEND CHANGES button. They are automatic in the background at this point in time. Therefore, it's important to click the SEND CHANGES button even though the left side and right side of the FroozHIE tool may already match from what you've brought in before. The update/change from the patient may be in the other ‘automatic' sections that you don't see on the FroozHIE tool.

{{% /note %}}


![](ccr-document-import.images/image7.png)
If you want to bring over individual line items from the left side to the right side, use the >> button on each line item. If you want to bring over the entire section/category, click the >> button between *incoming* and *destination* towards the top title of each category. This will bring over all items from the left to the right side in mass (instead of clicking individual line items).

When done selecting which items or sections to bring over, click the SEND CHANGES button at the very bottom of the FroozHIE screen.

![](ccr-document-import.images/image8.png)

Once done bringing over the items in the FroozHIE tool, it will refresh that separate screen back to the patient's chart. Simply click the X at the top right to close out that screen.

{{% note %}}

The other sections that are ‘automatic' to come into {{% system-name %}} from the CCR after clicking the FroozHIE SEND CHANGES button are Procedures, Injections, Observations and Family History. Once you click the SEND CHANGES button, these ‘automatic' section items will automatically come into the patient's chart. You can find them in the observations chart tab, injections chart tab, conditions chart tab, Patient Summary chart tab, and encounters. Therefore, it's important to click the SEND CHANGES button even though the left side and right side of the FroozHIE tool may already match from what you've brought in before. The update/edit from the patient may be in the other ‘automatic' sections that you don't see on the FroozHIE tool.

{{% /note %}}


### Manual or Auto-Reconcile Option

In the above steps/pages of this document, it describes the manual method of using reconcile and the Froozhie tool.

The system setting *Reconcile Link* can be set with a value of 2 which means {{% system-name %}} will show an "Auto" option in the Reconcile method of the document you are wanting to reconcile into {{% system-name %}} .

![](ccr-document-import.images/image9.png)

If this system setting is set to "2" as the value, you are turning on the option for Auto-Reconciling. In the document you will see reconcile options for manual or auto and you can select which you want to do. Manual will continue through the same steps as the above pages.

![](ccr-document-import.images/image10.png)

Selecting auto will bypass the froozhie and automatically import/reconcile everything from the document into this patient's electronic chart. You will get a confirmation screen if you are sure you want to auto-reconcile and the message that it will *delete* all existing medications, allergies, conditions & procedures you have currently for the patient and will import this document's information. Once you click OK, the reconciling is automatically done and the page refreshes. All of the information is reconciled into the patient's electronic chart.

![](https://lh3.googleusercontent.com/O__oXlp5ZAc4N4J_orpZVskyFIpwa2WLywheSVOHveSPpwXaL9o5vYtc7ccbAbOZYrRH1f_K_P0u-W77KqmwF2cG6w7zq-pS4-jsKArEN52r6F4Cz8v6oBFFXdPIg0TnHtqout0cgoOb5xoylA)

