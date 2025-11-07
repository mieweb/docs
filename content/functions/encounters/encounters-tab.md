---
id: '1M5Z8Y1w7SMPYZtQQ5EKbNqev5zTXSUfDu47E1Xt2I9A'
title: 'Encounters Tab'
date: '2025-06-10T14:56:21.589Z'
version: 132
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1M5Z8Y1w7SMPYZtQQ5EKbNqev5zTXSUfDu47E1Xt2I9A'
wikigdrive: 'v2.15.27'
---
When you are in the patient's chart, you can click the MEDICAL RECORD chart tab and then get into the ENCOUNTERS sub-tab.

### Encounters Tab

Under the Encounters tab, it shows the full encounters datavis for this patient. You can click the List All Encounters link at the top of this tab to get back to the full listing of encounters for the patient.

![](../encounters-tab.assets/547ea977dd94b79bbce0b877ff618963.png)

Encounters are listed by Service Date order (most recent DOS at the top of the list) regardless of creation date or encounter ID. It lists all encounters that this patient has had and the one you just added will be at the top (first on the list).

The list of encounters for the patient also shows who the Provider is that is set on the encounter and the date the encounter was created. The Open/Closed column shows if the encounter is still in open status or if it's been closed.

![](../encounters-tab.assets/58618769e15a49d389fada415aa96d92.png)

{{% note %}}
If there is no Performing Provider documented within the encounter, the listview will display **N/A** in that column.

![](../encounters-tab.assets/e20d6902fd7b0985dff99d526195a7e8.png)
{{% /note %}}

If the encounters for your practice incorporate different "stages" of the encounter (like one screen for intake/nurses, another screen/stage for physicians documenting, another screen/stage for post exam) and there is workflow in place to move those encounters to various worklist buckets, then the "stage" that the encounter is currently in will be shown in a **Stage** column.

![](../encounters-tab.assets/f2e88d1acefe868a944ea781fcc75035.png)

In the options column you will see various links that perform functions or take you to specific views of the encounter.

![](../encounters-tab.assets/831d9b2e6581819e65adfaba3becae16.png)

Depending on what your practice has set up and what security privileges you are set to, there will be various links here in the options column.

![](../encounters-tab.assets/23d72db811485cf491790594f4c5b85a.png)

![](../encounters-tab.assets/824f0e67dffe6c986243911e6bebd53f.png)

**Set Current**: If you click this, it will set this specific encounter as ‘current' for you. It then shows it as Current in this column and shows that current encounter up in your top encounters summary toolbar. You can set open or closed encounters to ‘current'.

**Current**: This means this specific encounter is the current encounter you have set/shown in the top summary encounter toolbar. You can set open or closed encounters to be ‘current' on your screen. If your practice utilizes a ‘worklist', then it will show your name as having this encounter set as ‘current' for the patient. (see other help documentation named Encounter-Worklist.pdf)

![](../encounters-tab.assets/5e4e6d20f94a0915cb5719bd42a6b9b7.png)

* <strong>(Release):</strong> Release is user specific.  If the encounter is set to Current for your log in, then the current encounter toolbar at the top will show for that encounter.  You can have one current encounter per patient. If you click <em>(Release)</em> then you are releasing the encounter so it is no longer set as Current.  This means the top encounter toolbar will go away for that encounter.  If you set Current or Release an encounter, it doesn't change other users.
* <strong>Set Open:</strong> You must have security permission to be able to re-open closed encounters. The system must also have a system setting turned on named <em>Show Set Open Link</em> to allow the link to be present. This allows users with this security permission to re-open closed encounters. Re-opening a closed encounter means the encounter is closed and you can click this to ‘re-open' the encounter. It will re-open it and change the encounter status from closed to open. It will also mark it as your <em>current</em> encounter and show it at the top encounter summary toolbar. You can ‘release' it from being your current. The set open link is here to put the encounter back on the performing Dr's worklist.  If your practice doesn't use a worklist, then there is no need to set open.
* <strong>View Details:</strong> If the encounter has been preliminary archived or closed & archived, you will see this link. Clicking the view details link will take you to that specific stored document (doc.id). It essentially is the same as viewing the archived document (doc.id).
* <strong>Edit:</strong> This will take you to the encounter details and properties. You can edit the encounter properties service date, location, etc and also see revisions for the encounter, routes, links, etc. Click the SAVE button when done with your edits.
* <strong>Delete:</strong> If you wish to delete the entire encounter, you would click the delete link. It will prompt you to the encounter properties and it will ask you to type in a reason for why you are deleting this encounter. It only deletes this encounter from the encounter list view. It doesn't delete any stored/archived documents in the patient's chart. It also doesn't delete any data already stored in the encounter such as vitals, observations, plan, meds, etc.
* <strong>Properties</strong>: This will take you to the encounter id and show its properties. You can view details of the encounter properties and see the revision history, current routes, links and other properties/details of this encounter id. Also, this is where you move or remove documents that are linked to the encounter. See other help documentation named <em>Link Documents to Encounters.pdf</em>
* <strong>Send:</strong> If you have security to send patient data, this link function is essentially sending the document via a data-send route. Your practice may already be set up to auto-send (auto-route) encounter documents to recipients (ex: referring physicians). However you can manually send it using this send link.
* <strong>Add Physician:</strong> You can add a physician and select their user role and also can link them to the patient from here. You can add users on the encounter.  What we usually do is have the CC section on the bottom of the encounter exams.  On the encounter exams we usually only allow you 1 role, like referring physicians. But from here you save encounter users by using the "Add Physician" link on the encounter options.
* <strong>Create CCD Document:</strong> If the encounter shows this link, you can create a CCD document (Continuity of Care Document). CCD is a different XML format that is supported by some EMR/PHR systems (instead of CCR).  We are able to communicate between {{% system-name %}} systems as well with CCD, but normally as a default use CCR in those various send methods. If you Create CCD Document from here, it will open up the specially formatted XML version of their medical record in a separate window. The user can then choose to save it or on to a media device for the patient, or whatever they may choose.

![](../encounters-tab.assets/58a365a83b663e84c6cc67bee70309ef.png)

The create ccd document link/feature can be turned off. The system setting to turn this off is:

![](../encounters-tab.assets/76adb0cf089e611c8bdc150b748c3356.png)

* <strong>View Links:</strong> The closed/archived encounter document is shown here along w/ any additional ‘views' the encounter stored as. You can access the stored encounter document and any additional ‘views' it stored as from this view links feature. Can quickly access it to print/fax/task, etc. Also, if the encounter is linked to any other documents in the patient's chart, this ‘view links' option will show. You can click ‘view links' to view what documents this encounter is linked to. E-signs can be linked to an encounter and one can link any document to an encounter. Using the view links will pop-up a box showing you what documents (along with it's date of service) are linked to this encounter. You can click on the underlined document that is linked to open that specific document up on your screen for viewing.

![](../encounters-tab.assets/2ba25775b5941c2cc1158b72114b06d4.png)

There can also be a section that displays called *Documents.* This section contains any documents linked to the encounter.

![](../encounters-tab.assets/4fa41c256dbcdff63be556f046e30828.png)

The remaining links are encounter specific named. Meaning they will show the specific name of the encounter your system uses and any stages the encounter has. Below we will use the encounter example named *Visit*.

![](../encounters-tab.assets/824f0e67dffe6c986243911e6bebd53f.png)

* <strong>Visit:</strong> The specific name of the encounter is shown here so it won't be ‘Visit', but states the specific name of the encounter this patient had created for their chart. If the encounter has ‘stages' in it, those stages are also listed for quick entry access. Clicking the name of the encounter (which is shown as a link here) will take you right to the entry side of the encounter. You can get back into the entry mode for the encounter, make edits, etc. It sets it as your ‘current' encounter and takes you to the entry fields for the encounter exam. You can make edits and save or use the other function buttons (re-archive, close/archive, etc). The proper way to edit is to get into the encounter using this link and edit and then re-archive. This updates all views/documents associated with that encounter. MIE can also set up esign rules then to send an esign request/notify the physician to re-sign if a user edits a final encounter document this way.

Any other stages (screens) the encounter has programmed in them will show as a hyperlink here to access also in this options section.

* <strong>View Visit:</strong> The word VIEW is first, followed by the specific name of the encounter is shown here so it won't be ‘Visit', but states the specific name of the encounter this patient had created for their chart. Clicking VIEW (then the name of the encounter) link here will take you right to the ‘view' of the encounter document. It may already have been preliminary archived or closed & archived or it may not be closed & archived yet. Using this link takes you to the current ‘view' of that encounter document. You can re-archive or close & archive from here also.
* <strong>View Archived Document:</strong> Will take you to the stored (archived) document for this encounter. This is the specific document (doc.id) that is stored in the patient's chart of this encounter. If the encounter hasn't been archived or preliminary archived, this link will not appear.
