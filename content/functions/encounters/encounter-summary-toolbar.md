---
id: '1clySsAxaHtCaH6Fbu2DkPG8tYBjFYeFj32WIa9oi3wI'
title: 'Encounter Summary Toolbar'
date: '2020-02-27T19:55:26.253Z'
version: 37
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1clySsAxaHtCaH6Fbu2DkPG8tYBjFYeFj32WIa9oi3wI'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
At the top of the patient's chart is a VIS.TYPE: summary line. VIS.TYPE stands for the encounter visit type that is set as current on your view.

This is a summary line of the current encounter opened / closed or set as current for the patient.

From this summary toolbar are the links that you use to document the exam for the patient. Usually the physician and/or nursing staff work from these links after an encounter has been created/added for the patient. (See other help documentation named *Encounters-Adding_or_Creating_Encounter_for_patient.pdf*)

![](../encounter-summary-toolbar.assets/1e0bfc8c99a30a20ad96bc83f5efcca7.png)

Using this screen shot example above:

This encounter open for this patient uses ‘stages'. Stages means there is more than one entry screen for the encounter. In the example above, this encounter has a stage named NURSE ASSESSMENT and a stage named GYN EXAM. The nurse works in her portion of the encounter exam named ‘nurse assessment' stage. Then the physician works in his/her stage of the encounter exam named ‘Gyn Exam'.

Again, using the screenshot example above:

* <strong>Nurse Assessment</strong> link will take you to the point and click encounter stage with the portions/sections/fields that the nurse is to document regarding this visit. Remember to save your work when working in the encounter.
* <strong>GYN Exam</strong> link will take you to the point and click encounter stage with the portions/sections/exam that the physician is to document regarding this visit. This is considered ‘The Exam' which is done by the physician. Remember to save your work when working in the encounter. From this stage, the physician can also close & archive the encounter or release to transcription. (see other help documentation named <em>Encounters-Archiving-Closing-ReArchiving.pdf</em>)
* <strong>View GYN Exam (Current)</strong> link will take you to what the current draft of the formal letter or documentation that was created as a result of the exam. This is considered ‘the View'. It's like a ‘preview' of what the document and stored version will look like.
* <strong>View Archived Document</strong> link means the provider either created a preliminary archive document or archived and closed the encounter which will store this document with a doc.id in the patient's chart and any esign or tasking rules set up for the encounter would be triggered. This is considered ‘The Archived Document'. An archived document is the encounter exam uploaded & stored as a document in the patient's chart. It has a doc.id and can be retrieved for printing/faxing, etc.

The links are named after the type of encounter itself. So, the links shown in the top encounter summary toolbar will be named specific to the encounter type that was added/created for the patient.

A patient could have several encounter exams open. In order to edit or access the exam, it must be set as *current*. The current exam will always display links above the chart tabs in this encounter summary toolbar. To set an encounter as current, either click the "set current" link in the encounters tab and it will default as the current encounter.

![](../encounter-summary-toolbar.assets/c6d3c038f3df2b3064126b962ba0e04e.png)

## Filtering

In the encounter summary toolbar, you may see a link named Remove Encounter Filter. This means the encounter and the patient's chart is currently set to show and access only documents (chart tabs, etc) related to that specific current encounter displaying in your top summary toolbar. You are filtering documents by current encounter. This link allows you to then ‘remove' that filter that you are set to, if you wish.

![](../encounter-summary-toolbar.assets/3435bc7cd2ba58a91dd42b19fb97f5a4.png)

If you click *remove encounter filter*, then you will see and access everything (all patient's documents, chart tabs, etc) in the patient's record. You aren't limiting you view to only see other documents related to this specific encounter.

If you see the link in the encounter exam summary line named Filter By Current Encounter, that means you are currently not filtering documents by the current encounter. You can see any and all documents in the patient's chart and not be limited/filtered to the current encounter only. If you wish to filter and only see documents in the patient's chart related to this current encounter, you can click this Filter by Current Encounter link. It will then only show the patient's documents in their chart & chart tabs that are specifically related to this current encounter. You are limited to only view and see other documents related to this specific encounter only. You are hiding the rest of the patient's documents.

![](../encounter-summary-toolbar.assets/5a9243aba2411d6d2c60d13a93bb044d.png)

Your MIE Implementer can turn off the filtering feature. Your {{% system-name %}} system can have this filter feature on or off. Most practices do not want to filter by encounter. This is the system setting to change to zero to turn it off (is on by default). Then the users will not ever see the filter links in any encounter summary toolbar.

![](../encounter-summary-toolbar.assets/8bec1acb63d0ac6d987f1ecaec847ec0.png)
