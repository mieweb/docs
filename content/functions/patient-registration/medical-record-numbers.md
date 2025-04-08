---
id: '1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
title: 'Medical Record Numbers'
date: '2024-11-19T17:04:09.079Z'
version: 60
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
wikigdrive: '860e59f919b06774886561eebaacd677071ab78c'
---
## Deleting Medical Record Numbers (MRNs)

If you have security to *Delete Patient MRNs* set to Yes, then you can delete Medical Record #'s from patient charts/records. This security is usually only given to certain Administrators who are authorized to perform this function.

![](../medical-record-numbers.assets/564b6420f932fe006da24d6ab622451f.png)

You can delete MRNs from the edit demo screen of {{% system-name %}} . When you click edit demo and scroll down to the Employee Numbers section, you will see a list of active MR#s for the patient. Click Show Hidden to see hidden medical record numbers the patient is attached to also. It is **important** to click show hidden to expose all potential partitions that the patient is attached to. Some partitions may be intentionally set up to not display unless you click the show hidden link.

![](../medical-record-numbers.assets/4e9c0571a17875fa0288c79460c4f0b1.png)

Uncheck all partitions with a **blue** check. If any are checked and you cannot uncheck them, please contact your MIE Implementer before going any further. If you cannot uncheck a box, then the partition has been specifically configured this way. The MIE Implementer may need to temporarily modify the partition for you to delete MRN's.

![](../medical-record-numbers.assets/e2845e7716046cdd65ba5dafee8b607a.png)

If you wish to delete a specific undesired MRN# that is linked to the patient's chart, simply click the X to the left of the MRN# you wish to delete.

![](../medical-record-numbers.assets/9036caba42cb5d38cd0d496649fadc27.png)

The user will be prompted with a pop-up message asking you to confirm that you wish to delete the MR number. Click OK to proceed with deleting the MRNs you selected to delete or click cancel.

![](../medical-record-numbers.assets/4de18179cabcb7d5cd89ab073ba6d44e.png)

When you click OK on that pop-up message, the partition name will appear with a strike through it.

If you did not mean to delete the MRN for the patient, you can click undo link to restore it. Nothing happens until you click the SAVE button. So you can undo still at that point. Once the SAVE button is clicked, whatever MR# is selected to be deleted will be *removed permanently*.

![](../medical-record-numbers.assets/581ea5a25dd4c3e93191ff9d3be9eb81.png)

A patient's record has to have at least one MR# associated to it (hidden or viewable). It will not allow you to delete an MR# if only one MR# is associated to the patient. You'll get a warning *Patient required at least 1 MRN, will not delete* if you attempt to delete the last MR# associated with the patient whether hidden or viewable.
