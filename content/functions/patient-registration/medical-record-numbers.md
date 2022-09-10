---
id: '1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
title: 'Medical Record Numbers'
date: '2020-02-27T19:35:30.353Z'
version: 42
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
wikigdrive: 'b7222904e37143b515987f6e0f083f595990e37a'
menu:
  main:
    name: 'Medical Record Numbers'
    identifier: '1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
    parent: '1F5UITI13Xe991RVRXssmOWGPyAvgUbgXHk--KfZILV0'
    weight: 350
---
## Deleting Medical Record Numbers (MRNs)

If you have security to *Delete Patient MRNs* set to Yes, then you can delete Medical Record #'s from patient charts/records. This security is usually only given to certain Administrators who are authorized to perform this function.

![](../medical-record-numbers.assets/10000201000000E300000026192A0CB407BDA58B.png)

You can delete MRNs from the edit demo screen of {{% system-name %}} . When you click edit demo and scroll down to the Medical Record Numbers section, you will see a list of active MR#s for the patient. Click Show Hidden to see hidden medical record numbers the patient is attached to also. It is **important** to click show hidden to expose all potential partitions that the patient is attached to. Some partitions may be intentionally set up to not display unless you click the show hidden link.

![](../medical-record-numbers.assets/10000201000001ED00000081F612CA99812F4CD6.png)

Uncheck all partitions with a **blue** check. If any are checked and you cannot uncheck them, please contact your MIE Implementer before going any further. If you cannot uncheck a box, then the partition has been specifically configured this way. The MIE Implementer may need to temporarily modify the partition for you to delete MRN's.

![](../medical-record-numbers.assets/10000201000002AC000000503C7FB16A7035980F.png)

If you wish to delete a specific undesired MRN# that is linked to the patient's chart, simply click the X to the left of the MRN# you wish to delete.

![](../medical-record-numbers.assets/10000201000002520000008B3942DC7856576774.png)

The user will be prompted with a pop-up message asking you to confirm that you wish to delete the MR number. Click OK to proceed with deleting the MRNs you selected to delete or click cancel.

![](../medical-record-numbers.assets/1000020100000134000000771EC5596E09CDFE25.png)

When you click OK on that pop-up message, the partition name will appear with a strike through it.
If you did not mean to delete the MRN for the patient, you can click undo link to restore it. Nothing happens until you click the SAVE button. So you can undo still at that point. Once the SAVE button is clicked, whatever MR# is selected to be deleted will be *removed permanently*.

![](../medical-record-numbers.assets/100000000000023400000094F449C0BB77F0BFC5.png)

A patient's record has to have at least one MR# associated to it (hidden or viewable). It will not allow you to delete an MR# if only one MR# is associated to the patient. You'll get a warning *Patient required at least 1 MRN, will not delete* if you attempt to delete the last MR# associated with the patient whether hidden or viewable.
