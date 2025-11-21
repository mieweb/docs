---
id: '1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI'
title: 'Preventive Care Portlet'
date: '2025-02-17T18:46:07.012Z'
version: 81
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI'
wikigdrive: 'v2.15.30'
---
You can select the *Preventive Care* portlet for your view on the Patient Summary chart tab view.

![](./preventive-care-portlet.assets/ea212d5ed2da00c69fb988a796edd8b1.png)

This shows procedures and can be customized to show screenings/procedures you manage and also specific screenings only show here based on possible age and gender criteria (ex: male patients you wouldn't see Pap Smear or Mammogram Screening procedures to manage).

Clicking on the *manage info* icon will take you to the chart tab where the Preventive Care editor is housed in your system.

![](./preventive-care-portlet.assets/89a42c74e9cb1ba3483aba68057c0f93.png)

{{% system-name %}} systems have this as part of the *Past Medical History* chart tab.

![](./preventive-care-portlet.assets/76b429af93c56f4837367e2d0e563cef.png)

You can manage (update) and enter in dates for these Preventive Care screenings there.

* <strong>Procedure:</strong> This is the name of the screening procedure. Click the Lightning Bolt icon to Add to an Exam or the Plus icon to Add.

![](./preventive-care-portlet.assets/d44120c25f811c3cffbe93b8aee4356c.png)

* <strong>Past:</strong> Represents a previously completed order or procedure.<strong></strong> An order with a <em>Completed</em> status with a <em>Completed Date</em> will add the item to the <em>Past</em> column
* <strong>Last Documented:</strong> Represents any documents that are created in the system because of past procedures at other facilities, or just documented as such. This column will also display the last completed procedure (past procedures list).
* <strong>Pending</strong>: Represents the next due date of pending orders. An order with a <em>Pending</em> status with a <em>Due Date</em> will add the item to the <em>Pending</em> column

![](./preventive-care-portlet.assets/e2f2f575b5f6566242f53bbdcaaf36dc.png)

The patient could have an office visit and you ask when their last mammogram was and they say 1989, so you enter that. Then you order a mammogram and the mammogram report comes into your system thru some method and is stored as doc.type MAMMO so, the *last documented in patient record* of an actual mammogram report document you have is shown with the date of service of the document. Then when the patient comes back in, you can update the ‘completed date'.

This Preventive Care portlet can also be added as a section in your encounters for documenting there also and help with meaningful use measures.

## Doc.Types for Last Documented in Patient Record Column

* Cholesterol Screening doc.type CHOLSCREEN
* Colorectal Cancer Screening shows last most recent date of these doc.types COLON, FLEXSIG, FOBT, DCBE, CTC
* Depression Screening doc.type DEPRESS
* Mammogram Screening doc.type MAMMO
* Osteoporosis Screening shows last most recent date of either of these doc.types OSTEO, DEXA
* PAP Smear doc.type PAP
* Prostate Exam doc.type PROSTATE
* Retinal Screening shows last most recent date of either these doc.types RETINAL, EYECAM
* Diabetic Foot Exam doc.type DIAB-FOOT
