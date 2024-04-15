---
id: '1ZGPm7WlJ13C8JXrlWdsWtqWnCt-cmbpsfooTKbEwQoo'
title: 'Archiving/Closing/Re-archiving Encounters'
date: '2020-03-13T14:41:23.189Z'
version: 60
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'working-in-a-visit-encounter.md'
  - 'working-in-a-legacy-encounter.md'
  - '../../resources/intro-to-the-system.md'
  - '../../resources/intro-to-the-system/system-anatomy.md'
source: 'https://drive.google.com/open?id=1ZGPm7WlJ13C8JXrlWdsWtqWnCt-cmbpsfooTKbEwQoo'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In order to archive, close, or re-archive an encounter, users must be familiar with the security settings, buttons, toolbars, and links associated with the encounter. The buttons found in the encounter are customizable and may have different functions per practice, or per encounter, depending on the preferred workflows. Contact an Implementation Specialist to have the buttons renamed or functionality reconfigured, as needed.

To archive or re-archive encounters, users must have the necessary security permissions set. Customize the user security by updating the following settings, accordingly:

**Document Permissions**: Set to *Edit*. This allows the user edit all encounters and/or archive and re-archive them, as appropriate.

**Document Signature Override**: Set to *Yes.* Users within a security role may override a signature or request another signature if a document is already signed.

**Sign Document**: Set to *Yes*.** This allows users within a security role the ability to sign documents.

## Standard Toolbars and Buttons

Layered toolbars appear at the top of the [dynamic encounter](working-in-a-visit-encounter.md) to assist with navigation, as well as to provide patient and [encounter](working-in-a-legacy-encounter.md) details. The toolbar display is responsive and changes with scrolling and movement on the page, collapsing as users navigate the encounter. For a basic [introduction to the system](../../resources/intro-to-the-system.md) or a more detailed description of working in a chart and an encounter, be sure to check out the [System Anatomy](../../resources/intro-to-the-system/system-anatomy.md); however, here are some of the more important tools and functions that are *specific to the encounter*:

**Encounter Info Toolbar** - Provides quick links to the current encounter, allowing users quick access to the encounter while working from within an E-chart or another encounter.

![](../archiving-closing-re-archiving-encounters.assets/2fec98df1e637eec53d7de30184d73b3.png)

**Encounter Navigation Toolbar** - Provides navigation tabs which allow users to jump to different sections of the encounter. Hovering over any tab will display the sections that are available from within that portion of the encounter.

![](../archiving-closing-re-archiving-encounters.assets/3b9280bc6e4a35b32d4e5503eb4ed9b7.png)

**Standard Encounter Buttons** - Buttons related to an open encounter:

![](../archiving-closing-re-archiving-encounters.assets/d1f38ff929e82fcf75d3363245f3c9bf.png)

![](../archiving-closing-re-archiving-encounters.assets/1be662cfed89c36a1456f6982a2a0392.png)

**Release** - This button will not only save the current progress of the encounter, but it will simply discharge, or release the current active editor from the encounter, allowing other users to modify the encounter without risk of overwriting each other's documentation.

**Save Incomplete & View** - Saves current progress in the encounter but does not archive or close it. A copy of the encounter will open for users to view (preview), prior to them preliminarily archiving or closing it.

**Note Complete** - In addition to saving any progress in the encounter, this button also releases any transcriptions pending from sections within the encounter that have been dictated. These are sent to a Pending queue in the Dictation module. The encounter remains open until archived and closed.

{{% note %}}
If any transcription is pending on an encounter, users will not have the option to Archive & Close the encounter. Only a preliminary archive can be made, until the encounter can be closed and archived.
{{% /note %}}

**Archive & Close** - Saves the progress of the encounter, releases all dictation performed within the encounter, closes (finalizes), and then archives it with a designated document ID.

{{% info %}}
Clicking the encounter section header or the![](../archiving-closing-re-archiving-encounters.assets/fa0325139c383d1d04c4602a1ae696f5.png)button, at the bottom of each section, will also save the user's current progress in the encounter.
{{% /info %}}

**Encounter Stage buttons** - To assist users in pushing the encounter through the established workflow, these buttons can be configured with any necessary stages and be placed at the top and bottom of the encounter for ease of access. These buttons simply change the *stage* of the open encounter, indicating it is ready for the next user.

![](../archiving-closing-re-archiving-encounters.assets/1cdb6b4601c9f112899e2c0f3b002257.png)

![](../archiving-closing-re-archiving-encounters.assets/a8e00206ceb430eeae08065a3f13625b.png)

## Archiving and Closing Encounters

As noted, every button EXCEPT Archive & Close will take the user to a view, or preview, of the encounter. When previewing the encounter, users may **Archive and Close Encounter**, or **Create Preliminary Archive**. Both of these options, for all intents and purposes, will *archive the document with a designated doc ID*.

![](../archiving-closing-re-archiving-encounters.assets/9c7ac5e2f617c509d1e1f22bebc0bf67.png)

### Creating a Preliminary Archive

Creating a preliminary archive will save the progress of the encounter and keep it open while creating a document type and archiving the doc ID in the chart, where all updates and modifications of the encounter are tracked. This allows users the ability to return to the encounter and finalize, as needed. In this common workflow, users will mark the encounter *closed* once the encounter is complete. The only difference between a preliminary and archived encounter is the open/closed status

{{% note %}}
Quality Reporting calculations (e.g., MIPS, HEDIS, etc.) are calculated on a per-encounter basis, when encounters are *closed*.
{{% /note %}}

E-sign rules are a common tool used in the {{% system-name %}} system, which should be considered when preliminary archives are being made. Most E-sign rules are set up to trigger the creation of a SIGNED (FINAL) encounter document when the signed-in user is the physician and Create Preliminary Archive OR Archive and Close Encounter is selected. This is important to consider, because the encounter remains open when a preliminary archive is created, and the encounter will not come off of the worklist until it is closed and archived.

{{% info %}}
If an archived version of an encounter is available, this will be noted in the Encounter Info Toolbar, where users may click *View Archived Document*. Clicking this link will open the archived document into a preliminary view. From here, users may re-archive and close the encounter, or revise the preliminary archive,
{{% /info %}}

Additionally, if there is dictation pending for transcription, users can only create a preliminary archive. Users cannot Archive and Close an encounter if there is any transcription pending (Held or Pending status). If transcription is pending, the Archive and Close Encounter link will not be available. The only link available when transcription is pending is Create Preliminary Archive.

{{% info %}}
MIE can configure the system to allow a transcription department to Archive and Close encounters, after transcription is completed. This is optional and not advised for most clients, however, can be configured, if desired.
{{% /info %}}

### Re-archive Encounters

When previewing the Encounter View, users may re-archive the encounter to save any changes made, updating the original encounter document. If users are viewing the preliminary archive document, the Re-Archive and Close Encounter link will display. This will re-archive the encounter and mark it closed, when selected.

## E-Sign/Tasking Rules

As noted, E-sign rules are important tools that should be considered when working with encounters. An Implementation Specialist can set up E-sign rules for clients needing to request signatures or have encounters signed automatically, when the document is closed and archived. Similarly, Fast Tasks can be configured to send closed/archived documents to a designated department, to be faxed or sent out, as needed. Depending on the workflow, this could be used to send encounter documents to referring physicians or other interested parties, as well.

{{% note %}}
The Fast Task configuration is triggered by the signing of the encounter, which means the E-sign, nor Fast Task, will trigger if the encounter is not *archived and closed*.
{{% /note %}}

## Reopen Closed Encounters

To open closed encounters, users must have the **Reopen Closed Encounters** security permission set to *Yes*. The system must also have the **Show Set Open Link** system setting *enabled* (**set to 1**). Users with these security settings will see a link in the Options column of the respective encounters that are closed. If the encounter is closed and these permissions are set to *No*, the user will not be able to view or edit the closed encounter, see the Encounter Properties, nor be able to add physicians using the Add Physician link. Users will only see links to View Details and Delete.

{{% note %}}
Typically, users without the Reopen Closed Encounters security option are not given the option to delete encounters. These users can still view archived documents using the link from the Encounter Info Toolbar. If these users have the ability to edit/delete documents, they can open the archived document and edit it through the document properties.
{{% /note %}}

Clicking the **Set Open** link will allow users to set the status of the closed encounters to *open*. This will allow edits to be made to the encounter, which will update all views/documents associated with the encounter, when it is re-archived.

{{% info %}}
An Implementation Specialist can assist with setting up E-sign rules that can be sent to request/notify the physician to re-sign, if a user edits a final encounter document using this method.
{{% /info %}}
