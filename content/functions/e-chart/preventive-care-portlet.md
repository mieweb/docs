---
id: '1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI'
title: 'Preventive Care Portlet'
date: '2020-02-27T19:45:32.923Z'
version: 24
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'Preventive Care Portlet'
    identifier: '1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI'
    parent: '1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU'
    weight: 990
---
You can select the *Preventative Care* portlet for your view on the Patient Summary chart tab view.
  
![](../preventive-care-portlet.assets/10000201000002880000011196BBA827B33515A9.png)  

This shows procedures and can be customized to show screenings/procedures you manage and also specific screenings only show here based on possible age and gender criteria (ex: male patients you wouldn't see Pap Smear or Mammogram Screening procedures to manage).  
Clicking on the *manage info* icon will take you to the chart tab where the Preventive Care editor is housed in your system.
  
![](../preventive-care-portlet.assets/100002010000026B000000E09FD42A0E51141838.png)  

{{% system-name %}} systems have this as part of the *Past Medical History* chart tab.
  
![](../preventive-care-portlet.assets/1000020100000499000001BDFC88018B4A26FB3F.png)  

You can manage (update) and enter in dates for these Preventive Care screenings there.
* <strong>Procedure:</strong> This is the name of the screening procedure. Click the help bubbles to see the procedure description and recommendations.
  
![](../preventive-care-portlet.assets/10000201000004B70000010233250874D16239F7.png)  

* <strong>Enter New Date:</strong> Enter in the date that specific screening was done. You'll enter in this field when entering in a new date for the screening that was done. You can use the date picker or simply type in a year or date format in the field.
* <strong>Last Reported Date:</strong> This shows the last most recent date someone had documented for the procedure.
* <strong>Last Documented in Patient Record:</strong> This shows the last date of of an actual stored <em>document</em> of this procedure in the patient's chart. Example: if you scanned & indexed Mammogram reports that come in under doc.type MAMMO, then we would point this field to look at doc.type MAMMO and display the last most recent date of service of doc.type MAMMO that patient has. The date that is shown here is a hyperlink so you can click the date and it will open to that specific stored document in a separate window on your screen so you can view that document. See below for the list of doc.types this column is pointed to by default. <em>Contact your MIE Implementer if you need them pointed to a different doc.type or if you need the doc.type installed in your document types tab.</em>
  
![](../preventive-care-portlet.assets/100002010000049F000001044F89B825D3BA013D.png)  

The patient could have an office visit and you ask when their last mammogram was and they say 1989, so you enter that. Then you order a mammogram and the mammogram report comes into your system thru some method and is stored as doc.type MAMMO so, the *last documented in patient record* of an actual mammogram report document you have is shown with the date of service of the document. Then when the patient comes back in, you can update the ‘reported date' using the *enter new date* field available. "Reported Date" is essentially the patient's reporting of when they had a screening procedure done and the "Last Documented in Patient Record" is the date of service of the most recent stored document of that screening type you store & keep in the patient's chart.  
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
