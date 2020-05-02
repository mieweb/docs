---
title: "Preventive Care Portlet"
date: 2020-02-27T19:45:32.923Z
url: "general-functionality/e-chart/preventive-care-portlet.html"
version: 14
id: 1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI
source: https://drive.google.com/open?id=1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI
menu:
    main:
        name: "Preventive Care Portlet"
        identifier: "1BgYYBVmzixW46iKX9fjTfkvdPDy8cW0HnhrShpgMiQI"
        parent: "1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU"
        weight: 990
---
You can select the *Preventative Care* portlet for your view on the Patient Summary chart tab view.

![](../../external_files/a86a4d1ce02999848aea2a7181492987.png)

This shows procedures and can be customized to show screenings/procedures you manage and also specific screenings only show here based on possible age and gender criteria (ex: male patients you wouldn't see Pap Smear or Mammogram Screening procedures to manage).

Clicking on the *manage info* icon will take you to the chart tab where the Preventive Care editor is housed in your system.

![](../../external_files/c7db7574453b4f09a89c6213c05e1dc5.png)

{{% system-name %}} systems have this as part of the *Past Medical History* chart tab.

![](../../external_files/fda86bfd9d6431886f4b228d80191ef0.png)

You can manage (update) and enter in dates for these Preventive Care screenings there.

* <strong>Procedure:</strong> This is the name of the screening procedure. Click the help bubbles to see the procedure description and recommendations.

![](../../external_files/f64bf74211f73842a4231675a5867f46.png)

* <strong>Enter New Date:</strong> Enter in the date that specific screening was done. You'll enter in this field when entering in a new date for the screening that was done. You can use the date picker or simply type in a year or date format in the field.
* <strong>Last Reported Date:</strong> This shows the last most recent date someone had documented for the procedure.
* <strong>Last Documented in Patient Record:</strong> This shows the last date of of an actual stored <em>document</em> of this procedure in the patient's chart. Example: if you scanned & indexed Mammogram reports that come in under doc.type MAMMO, then we would point this field to look at doc.type MAMMO and display the last most recent date of service of doc.type MAMMO that patient has. The date that is shown here is a hyperlink so you can click the date and it will open to that specific stored document in a separate window on your screen so you can view that document. See below for the list of doc.types this column is pointed to by default. <em>Contact your MIE Implementer if you need them pointed to a different doc.type or if you need the doc.type installed in your document types tab.</em>

![](../../external_files/8e902690ae15b648610648320ba95746.png)
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
