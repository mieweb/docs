---
id: '1_S9E96qZpixBS4IVXO2ZLdEppl1vfUFG0jYFhbNpyf8'
title: 'Medical Contacts - Contacts, Relationships, and User-Patient Relationships'
date: '2020-03-20T21:13:39.925Z'
version: 78
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1_S9E96qZpixBS4IVXO2ZLdEppl1vfUFG0jYFhbNpyf8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In the chart tab named "Patient Summary" there is a portal called *Medical Contacts* that one can select to have shown on your view.  This is a quick reference to see what the patient's physicians are that they have noted in their chart if staff has set. You can quickly see whom the patient's family physician noted is or their referring physician, etc.

MIE can add different "roles" to show here, but by default we only show Family, Referring, and Attending here. The patients preferred hospital and pharmacy are also shown here if also set on the patient's chart. Contact your MIE Implementer if you wish other *roles* to be shown here for quick reference.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/e3a0a3c820e278756c08a6f6cc4ef583.png)

But to see more possible physicians tied to a patient's chart (that are other roles than the ones we display by default for quick reference), you simply click the "manage information" icon and get to the full list of the patient's doctors (or again, MIE can add more to show here in this summary view.  For an example, this screen show has added "pulmonary" role to show any pulmonary noted physicians in the patient's chart).

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/682c5af2f3241586fc3cf7ecb640157d.png)

{{% tip %}}
If the *manage info* icon in Medical Contacts takes you to a tab/screen that just says *Patient Doctors*, then please contact your MIE Implementer to have the new Relationships tab installed with functionality. The below instructions refer to the new robust *Relationships* screen and functionality, not the Patient Doctors tab/screen.
{{% /tip %}}

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/4ece8818a3783ab9648817ce50d9ddfa.png)

In the chart tab named *Relationships* it shows a list of all current Contacts and their roles associated with the patient's record. You can access this screen by the *manage info* icon from Medical Contacts or from this separate chart tab in the patient's chart.

## Contacts Section

This is a list of all providers (contacts) and their role to the patient that are set in the patient's chart. User's name is the contact name (provider) that pulls from {{% system-name %}} access control module (the contact must be listed in {{% system-name %}} as a user) and the role is a drop-down to select what "role" that user/contact is in relation to the patient. The *role* drop down selections can be changed to be able to show whatever role selections your staff is allowed/wants to set & capture. Any family, referring or attending noted here will show on the Medical Contacts portlet. You can contact your MIE Implementer to have the Medical Contacts portlet show other specific roles.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/c0a0cd533f7f14ea7283c4ee0d9d3f04.png)

You can add a "role/physician" to a patient either via the encounter CC section, Medical Contacts portlet of Patient Summary chart tab or this separate Relationships chart tab. Same way to delete/remove a provider from a patient.

Users with security permission can go to *Control* sidetab and click User Role Editor to add more roles (newer systems should have all roles available) and still access/link/show the same ways as above.  If you add more roles you will need to use a number higher than 100.  0-100 is protected for our use and coding we have in place for things.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/86616233eeadab0e529021e4e92ba4d7.png)

When you set a provider and "role" to a patient using the CC section of an encounter, if you want that physician to show in the "Relationships" chart tab or "Medical Contacts" portlet you would need to click the "link" to patient checkbox.  If your attending/family/ referring comes in by an interface you wouldn't link those since the other system is system of record on those, but any other roles you want to track or assign to a patient you would ‘link'.  If you don't "link" in the CC section – the physician is just noted on the encounter document; it doesn't link or set that provider contact & role to the patient record unless you checkmark "link".

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/b407309208c9fd0e3d8e8c0a98459e17.png)

### Contacts (Providers) Tied to Patients

{{% system-name %}} tracks what contacts/user's (providers) are linked to which patients. You can look up a provider/contact in Access Control to see a list of which patients are tied to which physician ( {{% system-name %}} user).  You simply go to Access Control and search for that provider's/contact's name.

Just click on their username on the far left column when you find who you want to see (don't click to edit the user or anything).

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/0ce74ddb7c9c63e248721b3e5f8158ed.png)

You are taken to view the user's details. Then scroll down and you'll see what "roles" that physician/user is linked to and you'll see a hyperlink **Show Patients Linked to User**.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/8dec7767b45a61591231aef175d50767.png)

Click on that hyperlink *Show Patients Linked to User* and it opens up (right below that hyperlink) a list of patients that have that provider linked/set to them as contacts.  You can click on the Patient's Name to get into the patient's chart directly.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/7a7fd0d01200ab613f7a1f240dd8a46a.png)

### Add/Delete Patients Linked to Contacts/Providers en Masse

To unlink patient's from contacts/providers, you can do it individually through each patient's chart, or you can do in mass by clicking the Edit User hyperlink on the provider/contacts view user screen (you must have security permission to edit users).

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/1d89d68eb3fbac7e31c46267f27313ff.png)

Then click the provided Edit Patients Linked to User hyperlink.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/b7c5feaa33b420b807bf9a6772afe4d5.png)

You can then in mass click the [-] delete button to delete any patient's linked to that provider/contact. Or you can add (in mass) other patients to be linked to this provider/contact and set the role this provider/contact is for each patient you are linking.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/bbd3a45f2b9489133cd407cecc683144.png)

Once done deleting or adding other patients from/to this provider/user, click the SUBMIT button to save. Then you can click the Back to User View hyperlink at the top right to get back to the View User details page.

## Relationships Section

In the *Relationships* chart tab (that the Medical Contacts portlet takes you to) there is a section on the right named *relationships*. You can set any other {{% system-name %}} patient records to this patient. For example, if this patient's daughter is also a patient of yours, you can set that relationship here. The relatives must have a {{% system-name %}} record in your system to be able to link/set relationships to.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/5a513f293c669dc6fbca575526358d66.png)

Once you set a relationship to another patient's chart, that other patient's chart will automatically get the appropriate reciprocating relationship set (along with the appropriate relation type set). This example shows above that I was working in George David's chart and set George David's chart to have a relationship with Aaryka Lewis' chart and set Aaryka Lewis's {{% system-name %}} record noted as his child.

So when I go work in Aaryka Lewis' chart, I will automatically see a relationship set that shows George David's {{% system-name %}} record is her parent. These relationships between patient charts are shown here in this tab and in the edit demographics tab of a child record if the relationship has a parent chart tied.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/d3a73349f4ab755d6709752578408630.png)

## Interface Pharmacies Section

In the *Relationships* chart tab (that the Medical Contacts portlet takes you to) there is a section on the lower left named *Interface Pharmacies.* You can set the patient's preferred pharmacy and mail-in pharmacy here (just like you can via the Medications chart tab). Anything set here will show in the portlet for Medical Contacts for quick viewing.

![](../medical-contacts-contacts-relationships-and-user-patient-relationships.assets/bc03fa0815fbd8123edd9b2774098ce6.png)
