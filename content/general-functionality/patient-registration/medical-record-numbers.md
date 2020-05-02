---
title: "Medical Record Numbers"
date: 2020-02-27T19:35:30.353Z
url: "general-functionality/patient-registration/medical-record-numbers.html"
version: 22
id: 1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg
source: https://drive.google.com/open?id=1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg
menu:
    main:
        name: "Medical Record Numbers"
        identifier: "1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg"
        parent: "1F5UITI13Xe991RVRXssmOWGPyAvgUbgXHk--KfZILV0"
        weight: 350
---
## Deleting Medical Record Numbers (MRNs)

If you have security to *Delete Patient MRNs* set to Yes, then you can delete Medical Record #'s from patient charts/records. This security is usually only given to certain Administrators who are authorized to perform this function.

![](../../external_files/05abc2ba6de2a9698a7f163fd5184404.png)

You can delete MRNs from the edit demo screen of {{% system-name %}} . When you click edit demo and scroll down to the Medical Record Numbers section, you will see a list of active MR#s for the patient. Click Show Hidden to see hidden medical record numbers the patient is attached to also. It is **important** to click show hidden to expose all potential partitions that the patient is attached to. Some partitions may be intentionally set up to not display unless you click the show hidden link.

![](../../external_files/18e29389212879d384574072c151c3dc.png)

Uncheck all partitions with a **blue** check. If any are checked and you cannot uncheck them, please contact your MIE Implementer before going any further. If you cannot uncheck a box, then the partition has been specifically configured this way. The MIE Implementer may need to temporarily modify the partition for you to delete MRN's.

![](../../external_files/9f1b837d5c4c205b8cb115a85a95baac.png)

If you wish to delete a specific undesired MRN# that is linked to the patient's chart, simply click the X to the left of the MRN# you wish to delete.

![](../../external_files/6e8c2ec8f99fca93c8e321b2ed9cb1b6.png)

The user will be prompted with a pop-up message asking you to confirm that you wish to delete the MR number. Click OK to proceed with deleting the MRNs you selected to delete or click cancel.

![](../../external_files/fd7374ad5384afa1c4ad0329dc3b65a4.png)

When you click OK on that pop-up message, the partition name will appear with a strike through it.

If you did not mean to delete the MRN for the patient, you can click undo link to restore it. Nothing happens until you click the SAVE button. So you can undo still at that point. Once the SAVE button is clicked, whatever MR# is selected to be deleted will be *removed permanently*.

![](../../external_files/8dc3decb6b63d1c45bbb207e41609256.png)

A patient's record has to have at least one MR# associated to it (hidden or viewable). It will not allow you to delete an MR# if only one MR# is associated to the patient. You'll get a warning *Patient required at least 1 MRN, will not delete* if you attempt to delete the last MR# associated with the patient whether hidden or viewable.

