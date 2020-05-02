---
title: "Medical Contacts - Contacts, Relationships, and User-Patient Relationships"
date: 2020-03-20T21:13:39.925Z
url: "general-functionality/patient-registration/medical-contacts-contacts-relationships-and-user-patient-relationships.html"
author: Jeremia Ploor
version: 45
id: 1_S9E96qZpixBS4IVXO2ZLdEppl1vfUFG0jYFhbNpyf8
source: https://drive.google.com/open?id=1_S9E96qZpixBS4IVXO2ZLdEppl1vfUFG0jYFhbNpyf8
menu:
    main:
        name: "Medical Contacts - Contacts, Relationships, and User-Patient Relationships"
        identifier: "1_S9E96qZpixBS4IVXO2ZLdEppl1vfUFG0jYFhbNpyf8"
        parent: "1F5UITI13Xe991RVRXssmOWGPyAvgUbgXHk--KfZILV0"
        weight: 340
---
In the chart tab named "Patient Summary" there is a portal called *Medical Contacts* that one can select to have shown on your view.  This is a quick reference to see what the patient's physicians are that they have noted in their chart if staff has set. You can quickly see whom the patient's family physician noted is or their referring physician, etc.

MIE can add different "roles" to show here, but by default we only show Family, Referring, and Attending here. The patients preferred hospital and pharmacy are also shown here if also set on the patient's chart. Contact your MIE Implementer if you wish other *roles* to be shown here for quick reference.

![](../../external_files/bfe716c885dfcc8738e0268ebd1a1b3c.png)

But to see more possible physicians tied to a patient's chart (that are other roles than the ones we display by default for quick reference), you simply click the "manage information" icon and get to the full list of the patient's doctors (or again, MIE can add more to show here in this summary view.  For an example, this screen show has added "pulmonary" role to show any pulmonary noted physicians in the patient's chart).

![](../../external_files/f63f191aacddb17e7d2962711fe6a4a6.png)

{{% tip %}}

If the *manage info* icon in Medical Contacts takes you to a tab/screen that just says *Patient Doctors*, then please contact your MIE Implementer to have the new Relationships tab installed with functionality. The below instructions refer to the new robust *Relationships* screen and functionality, not the Patient Doctors tab/screen.

{{% /tip %}}


![](../../external_files/18c1f2f731e671572de349c2fee262f3.png)
In the chart tab named *Relationships* it shows a list of all current Contacts and their roles associated with the patient's record. You can access this screen by the *manage info* icon from Medical Contacts or from this separate chart tab in the patient's chart.

## Contacts Section

This is a list of all providers (contacts) and their role to the patient that are set in the patient's chart. User's name is the contact name (provider) that pulls from {{% system-name %}} access control module (the contact must be listed in {{% system-name %}} as a user) and the role is a drop-down to select what "role" that user/contact is in relation to the patient. The *role* drop down selections can be changed to be able to show whatever role selections your staff is allowed/wants to set & capture. Any family, referring or attending noted here will show on the Medical Contacts portlet. You can contact your MIE Implementer to have the Medical Contacts portlet show other specific roles.

![](../../external_files/41fb378d68216121c1ef1f97f3c281fe.png)

You can add a "role/physician" to a patient either via the encounter CC section, Medical Contacts portlet of Patient Summary chart tab or this separate Relationships chart tab. Same way to delete/remove a provider from a patient.

Users with security permission can go to *Control* sidetab and click User Role Editor to add more roles (newer systems should have all roles available) and still access/link/show the same ways as above.  If you add more roles you will need to use a number higher than 100.  0-100 is protected for our use and coding we have in place for things.

![](../../external_files/418486730cb393b9d29fe7579dc2e6a4.png)

When you set a provider and "role" to a patient using the CC section of an encounter, if you want that physician to show in the "Relationships" chart tab or "Medical Contacts" portlet you would need to click the "link" to patient checkbox.  If your attending/family/ referring comes in by an interface you wouldn't link those since the other system is system of record on those, but any other roles you want to track or assign to a patient you would ‘link'.  If you don't "link" in the CC section – the physician is just noted on the encounter document; it doesn't link or set that provider contact & role to the patient record unless you checkmark "link".

![](../../external_files/9bca70f65db3f7342946c1cc0980624e.png)

### Contacts (Providers) Tied to Patients

{{% system-name %}} tracks what contacts/user's (providers) are linked to which patients. You can look up a provider/contact in Access Control to see a list of which patients are tied to which physician ( {{% system-name %}} user).  You simply go to Access Control and search for that provider's/contact's name.

Just click on their username on the far left column when you find who you want to see (don't click to edit the user or anything).

![](../../external_files/b197eff4ad1d9a887be595b14c0dd297.png)

You are taken to view the user's details. Then scroll down and you'll see what "roles" that physician/user is linked to and you'll see a hyperlink **Show Patients Linked to User**.

![](../../external_files/f82dfb4cc165adeb4d50057cb73eaa6f.png)

Click on that hyperlink *Show Patients Linked to User* and it opens up (right below that hyperlink) a list of patients that have that provider linked/set to them as contacts.  You can click on the Patient's Name to get into the patient's chart directly.

![](../../external_files/027ed7ef168640bd33c93c977f05adeb.png)

### Add/Delete Patients Linked to Contacts/Providers en Masse

To unlink patient's from contacts/providers, you can do it individually through each patient's chart, or you can do in mass by clicking the Edit User hyperlink on the provider/contacts view user screen (you must have security permission to edit users).

![](../../external_files/f2557cd6f6272c6303a63d0603ed3a44.png)

Then click the provided Edit Patients Linked to User hyperlink.

![](../../external_files/3c8d5fc71c9af73aa13df04ca644f761.png)

You can then in mass click the [-] delete button to delete any patient's linked to that provider/contact. Or you can add (in mass) other patients to be linked to this provider/contact and set the role this provider/contact is for each patient you are linking.

![](../../external_files/c9856c4fbd0b6da576a7a5d63311dec3.png)

Once done deleting or adding other patients from/to this provider/user, click the SUBMIT button to save. Then you can click the Back to User View hyperlink at the top right to get back to the View User details page.

## Relationships Section

In the *Relationships* chart tab (that the Medical Contacts portlet takes you to) there is a section on the right named *relationships*. You can set any other {{% system-name %}} patient records to this patient. For example, if this patient's daughter is also a patient of yours, you can set that relationship here. The relatives must have a {{% system-name %}} record in your system to be able to link/set relationships to.

![](../../external_files/1249b2d364f26252b6ce16ffd87f1917.png)

Once you set a relationship to another patient's chart, that other patient's chart will automatically get the appropriate reciprocating relationship set (along with the appropriate relation type set). This example shows above that I was working in George David's chart and set George David's chart to have a relationship with Aaryka Lewis' chart and set Aaryka Lewis's {{% system-name %}} record noted as his child.

So when I go work in Aaryka Lewis' chart, I will automatically see a relationship set that shows George David's {{% system-name %}} record is her parent. These relationships between patient charts are shown here in this tab and in the edit demographics tab of a child record if the relationship has a parent chart tied.

![](../../external_files/ccae23b3ceeb1ffc26785bbfb145447e.png)

## Interface Pharmacies Section

In the *Relationships* chart tab (that the Medical Contacts portlet takes you to) there is a section on the lower left named *Interface Pharmacies.* You can set the patient's preferred pharmacy and mail-in pharmacy here (just like you can via the Medications chart tab). Anything set here will show in the portlet for Medical Contacts for quick viewing.

![](../../external_files/0735e40026f41bef2e6e4553b8160651.png)

