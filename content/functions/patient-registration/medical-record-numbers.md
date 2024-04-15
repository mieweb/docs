---
id: '1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
title: 'Medical Record Numbers'
date: '2020-02-27T19:35:30.353Z'
version: 48
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1D_nQs-HHtwCcd593e2PFQLLEU5S_i2id3LV6H3JlSKg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Deleting Medical Record Numbers (MRNs)

If you have security to *Delete Patient MRNs* set to Yes, then you can delete Medical Record #'s from patient charts/records. This security is usually only given to certain Administrators who are authorized to perform this function.

![](../medical-record-numbers.assets/f17adbd2a81bdf8ababdfc392a4bc606.png)

You can delete MRNs from the edit demo screen of {{% system-name %}} . When you click edit demo and scroll down to the Medical Record Numbers section, you will see a list of active MR#s for the patient. Click Show Hidden to see hidden medical record numbers the patient is attached to also. It is **important** to click show hidden to expose all potential partitions that the patient is attached to. Some partitions may be intentionally set up to not display unless you click the show hidden link.

![](../medical-record-numbers.assets/9b61f1daa3e1fd420e638ccd87784115.png)

Uncheck all partitions with a **blue** check. If any are checked and you cannot uncheck them, please contact your MIE Implementer before going any further. If you cannot uncheck a box, then the partition has been specifically configured this way. The MIE Implementer may need to temporarily modify the partition for you to delete MRN's.

![](../medical-record-numbers.assets/90767b20f9c0af6420bde70268340a6f.png)

If you wish to delete a specific undesired MRN# that is linked to the patient's chart, simply click the X to the left of the MRN# you wish to delete.

![](../medical-record-numbers.assets/ec5fd91b225d2f99fb145987a1010d4f.png)

The user will be prompted with a pop-up message asking you to confirm that you wish to delete the MR number. Click OK to proceed with deleting the MRNs you selected to delete or click cancel.

![](../medical-record-numbers.assets/c35a5af4ad26fe964568e3d81bd7e348.png)

When you click OK on that pop-up message, the partition name will appear with a strike through it.

If you did not mean to delete the MRN for the patient, you can click undo link to restore it. Nothing happens until you click the SAVE button. So you can undo still at that point. Once the SAVE button is clicked, whatever MR# is selected to be deleted will be *removed permanently*.

![](../medical-record-numbers.assets/af15659a1d14e20afb31b263e185f160.png)

A patient's record has to have at least one MR# associated to it (hidden or viewable). It will not allow you to delete an MR# if only one MR# is associated to the patient. You'll get a warning *Patient required at least 1 MRN, will not delete* if you attempt to delete the last MR# associated with the patient whether hidden or viewable.
