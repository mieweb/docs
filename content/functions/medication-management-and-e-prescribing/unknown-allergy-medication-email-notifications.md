---
id: '1uPwVGcsvmIAnKx3-a0wKVekf6dHuls2_mbR8WE7_zD8'
title: 'Unknown Allergy/Medication Email Notifications'
date: '2020-02-27T20:05:47.758Z'
version: 32
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1uPwVGcsvmIAnKx3-a0wKVekf6dHuls2_mbR8WE7_zD8'
wikigdrive: 'a3f05807f0c9b9af2c79d6ec32e61b6933caadae'
menu:
  main:
    name: 'Unknown Allergy/Medication Email Notifications'
    identifier: '1uPwVGcsvmIAnKx3-a0wKVekf6dHuls2_mbR8WE7_zD8'
    parent: '1BT9iwpUSk65PGOkXhOqxTjwNvG-JzY6aKqNw1elTkKA'
    weight: 2190
---
As a superuser for your practice, your email may be programmed into a system setting to notify you of any one in your system that adds an unrecognized allergy or unrecognized medication/prescription. This email notification feature *can* be turned off entirely. Contact your MIE Implementer.
  
## Unknown Allergies/Intolerances  
  
When an unknown allergy has been added to a patient's chart, it warns the user that they are entering an unknown allergy. It gives them the option to cancel out and redo it (by selecting No), or click Yes to continue to add this unknown allergy to the patient's chart.
  
![](../unknown-allergy-medication-email-notifications.assets/100000000000021F0000006B915841AF704061DF.png)  

If the user selects ‘yes' to add the unknown allergy to the patient's chart, it does add it to the patient's chart and the superuser will get an email notification of this unknown allergy add. It is up to the superuser who is receiving these email notifications to examine the medication/allergy record that was added and determine if it should be corrected.  
Uncoded/unrecognized medication and/or allergy records are not able to be considered when doing drug to drug interaction checking, duplicate therapy warnings, or allergy interaction warnings and other patient safety or quality of care measures.  
The system doesn't recognized abbreviations. The allergy should be entered as full recognized name and selected from the auto-complete of First Databank choices as a recognized, coded allergy.  
If a user enters in an unknown/unrecognized an allergy in a patient's record (instead of the full recognized allergy selection), you will receive an email notification such as the below.
  
![](../unknown-allergy-medication-email-notifications.assets/10000000000001A6000000B012123B9917FB1FB6.png)  

The **From:** will most likely be from **noreplywebchart@med-web.com** but it will populate whatever value is entered in this system setting. That's what the *From* email line will pull.
  
![](../unknown-allergy-medication-email-notifications.assets/10000201000001A10000002D2A6265EFBD44F000.png)  

The **Subject:** will be **|System|*-*Unknown Allergy/Intolerance Added**.  
In the email notification you can click the underlined unknown allergy link in blue (ex: **Pcn** ) and it will take you to the specific patient and open that specific entered allergy on your screen (you may be prompted to login first). Here you can view or edit to make any changes to that entered allergy if you have security rights.  
Of course, an entered *unknown* allergy may be correct. It may not always need to be fixed or modified for the patient's chart. However, unrecognized allergies and/or medications are not able to be considered when doing drug-drug interaction checking and other patient safety or quality of care measures.  
For example, if the patient is allergic to ‘leaves' and touching leaves causes hives on the patient, the user would enter ‘leaves' as their allergy. ‘Leaves' is not a recognized allergy in the First Databank database. Therefore, when the user adds this allergy to the patient's chart, they will get the warning that they are adding an unknown (unrecognized) allergy to the chart. They would click Yes. The superuser then gets an emailed notification of an unknown allergy of ‘leaves' being added. In this case, the superuser feels this is an appropriate allergy after conferring with the physician and doesn't need to edit or correct this allergy entry. They will keep it in the patient's allergy history, yet the system just notified you of the unknown allergy add to make sure you determine it as correct.
  
![](../unknown-allergy-medication-email-notifications.assets/1000000000000183000000A45639D5A1EE8AD5AE.png)  

  
## Unknown Medications  
  
When an unknown medication has been added to a patient's chart either through quick add or through quick prescribe, it marks that medication with an *asterisk* in the medication list for the patient.  
The superuser then will receive an email notification such as the below.
  
![](../unknown-allergy-medication-email-notifications.assets/1000000000000187000000B3E679E0A023C56B2D.png)  

A possible unrecognized (unknown) medication entered by a user may be *Vitamins*. The system doesn't recognize Vitamins, but the system choices from First Databank do provide recognized specific vitamins. Perhaps this medication entered for the patient or this medication prescribed for the patient should be more specific so it can be selected from the auto-complete of First Databank choices as a recognized, coded medication/drug.  
If a user enters an unrecognized drug/medication in a patient's e-chart via quick add or through prescribing you will receive an email notification such as the above.  
The **From:** will most likely be from **noreplywebchart@med-web.com** but it will populate whatever value is entered in this system setting. That's what the *From* email line will pull.
  
![](../unknown-allergy-medication-email-notifications.assets/10000201000001A10000002D2A6265EFBD44F000.png)  

The **Subject:** will be **|System|*-*Unknown Allergy/Intolerance Added**.  
When a superuser gets an email notifying of an unknown medication add, the superuser should examine the medication record that was added and determine if it should be corrected.  
Uncoded medication records are not able to be considered when doing drug-drug interaction checking and other patient safety or quality of care measures such as allergy warnings, etc.  
In the email notification you can click the underlined unknown drug added link in blue (ex: **Vitamins** ) and it will take you to the specific patient and open that specific entered medication/prescription on your screen (you may be prompted to login first). Here you can view or edit to make any changes to that entered drug if you have security rights.  
For this Vitamin example, you may want to correct it to be more specific such as ‘Prenatal Vitamins' or ‘Multi-Vitamins' etc which may be recognized auto-complete choices that the First Databank database offers when in quick add or prescribing mode.  
Of course, the medication/drug entered may be correct and is what the physician wants entered. The superuser gets an emailed notification of an unknown medication/drug being added to a patient's chart, but in this case, the superuser determines it is an appropriate drug/medication after conferring with the physician and doesn't need to edit or correct this patient's entry. They decide to keep it in the patient's medication history, yet the system's feature notified you of the unknown medication/drug add to make sure you determine it as correct. The drug/medication may not always need to be fixed or modified for the patient's chart and can be left as is. However, unrecognized allergies and/or medications are not able to be considered when doing drug-drug interaction checking and other patient safety or quality of care measures.  
Unknown Allergies, Intolerance and Medications are noted in the patient's list with *asterisks* next to them.  
This asterisk means that the entered allergy/intolerance and/or mediation is an unrecognized entry and wasn't selected from the auto-complete choices provided from First Databank database.
  
![](../unknown-allergy-medication-email-notifications.assets/100000000000042F000001166491D466B1483469.png)  

