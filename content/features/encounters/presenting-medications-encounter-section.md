---
id: '1s8b1SrZRNd6xpIBtG1uApNHjTaAMRQXV8cYnPgPIhwQ'
title: 'Presenting Medications Encounter Section'
date: '2025-11-25T17:53:47.769Z'
version: 176
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1s8b1SrZRNd6xpIBtG1uApNHjTaAMRQXV8cYnPgPIhwQ'
wikigdrive: 'v2.16.0'
---
The Presenting Medications encounter section is located in the Visit Encounter Subjective. The left side of the encounter displays a listing of currently known and previously entered medications. The right side of the section contains Quick Links to help the user quickly add medications to the presenting medication list.

Note: Beginning RC202309 an "EXPIRED" alert will display in Red next to any expired medications in the Presenting Medications encounter section. Additionally, users will see "Expired" text in the Past Meds and Current Meds Quick Lists in the Encounter Presenting Medications, Medication Order and Smart Plan encounter sections, as well as the Prescribe Medication and Quick Prescribe in the encounter and/or Medications chart tab. Medications are automatically flagged as expired based on the duration and number of refills that were entered on the original prescription.

![](./presenting-medications-encounter-section.assets/f1c3fe4bfc886869f888d5a51ff6eeed.png)

## Presenting Medications Section Header

The Presenting Medications section contains tools to assist the user.

![](./presenting-medications-encounter-section.assets/be6e0109112680453424a9a9240d3f18.png)

![](./presenting-medications-encounter-section.assets/a0a8e8c59949d238ce238b25e6bf589d.png)
 Select the help bubble icon to open online help.

![](./presenting-medications-encounter-section.assets/b73330f84c320b042075353ee47b2c4b.png)

![](./presenting-medications-encounter-section.assets/61eb36acf3f6518ed4e15e7b1afe746c.png)
 Select the ribbon icon to hide/show the Quick List. A *My Setting* preference is also available to set all encounter sections to display Quick Lists for all encounter sections by default.

![](./presenting-medications-encounter-section.assets/0da4961daf05860fc8fabf50749be493.png)
 Select the book icon to set a library. The Default library will be set for all users unless changed by the end user.

![](./presenting-medications-encounter-section.assets/1bab4c70735c9fc738bddb2bcbc71e2b.png)

![](./presenting-medications-encounter-section.assets/1edb5c62f4020eb448fa6c8e31dba9b6.png)
 Select the microphone icon to dictate plain text to populate the section rather than entering discrete data. If dictation is added, the microphone icon will change to a green check mark after upload.

![](./presenting-medications-encounter-section.assets/1bc4f95305310d39462d6605e09b7d13.png)

![](./presenting-medications-encounter-section.assets/81126ae8f7015b161ef8c63a320ee8ca.png)
 Select the pencil icon to open the legacy List Edit tool. Users may use an autocomplete to search for medications and click the **Add** button to update the list edit. Once all medications have been added to the list, click the **save** or **advance** button to save the medication to the presenting medications list. Users may click the **Edit** button on the medication line item to edit a medication. As of RC202309, users will no longer be able to delete from the legacy list edit. Users must use the 
![](./presenting-medications-encounter-section.assets/c347ef7a0e85a3a6be84b0a14d4cc572.png)
 icon on the presenting medication list and designate if the medication being deleted is being discontinued or deleted due to an entry error.

![](./presenting-medications-encounter-section.assets/fbf6dbac5413b4e206d84a4dc027f7fc.png)

![](./presenting-medications-encounter-section.assets/2f8eb0d8b68911fdf9094f432ba7cb54.png)
Select the X icon to remove the section from the Visit encounter. The section can be re-added by clicking the gears icon 
![](./presenting-medications-encounter-section.assets/be10ec9dde7205e1736c75cdd219a2b0.png)
 in the encounter header.

## Managing Presenting Medications

Manage existing presenting medications by hovering over the medication name. Additional tools to manage the medications will display to the right of the medication. The **My Setting** for *Show Dynamic List Options* defaults to the recommended option of "On hover". Users may force the Dynamic List Options to always display by changing this setting to "Always".

![](./presenting-medications-encounter-section.assets/537c8ac426ccd99e1380cb97d4dc289e.png)

![](./presenting-medications-encounter-section.assets/8674d2b033cc421cc5a5db5aaef67e3f.png)
Select the open in new window icon to view the drug guide for this medication.

![](./presenting-medications-encounter-section.assets/7a1751707fadb1e5d39456216b2580b8.png)

![](./presenting-medications-encounter-section.assets/feca64968e00a30fc2bd14b6976be165.png)
 Select the pencil/edit icon to correct an error. Users may also *Show All Details* regarding the medication. If the medication was prescribed from the system, additional information regarding the original prescription will display.

![](./presenting-medications-encounter-section.assets/431b844b713613431a585f6cef30d50c.png)

![](./presenting-medications-encounter-section.assets/5c2962399d602d1bd389cfcbc099ed60.png)
The Refill button is available in databases on RC202309 and newer. Once refilled the medication will continue to display in the presenting meditations list, but it will also display in the Medication Orders encounter section for the user to send/print the prescription at the end of the visit.

![](./presenting-medications-encounter-section.assets/358b5f96b1fb7e6a5bdbe620ac5492ba.png)

![](./presenting-medications-encounter-section.assets/e18189ffd9129d5e4e79d40a34456451.png)
Select this icon to add a task regarding this medication.

![](./presenting-medications-encounter-section.assets/27528ab1339b6d367381fe1acdd5fa22.png)

![](./presenting-medications-encounter-section.assets/c347ef7a0e85a3a6be84b0a14d4cc572.png)
 Select this icon to remove a medication from the presenting medication list. Medications must be marked as **Discontinued** or as an **Entry Error** when removing a medication from the presenting medication list. Users may also *Show All Details* regarding the medication. If the medication was prescribed from the system, additional information regarding the original prescription will display. Beginning on RC202409, when a Presenting Medication is added in the current encounter or on another encounter on the same day it is discontinued, the medication will now visually indicate that the medication was discontinued, but still continue to display on the presenting medication list.

![](./presenting-medications-encounter-section.assets/5ad6ec47fe84cbf5487433f6af2c5262.png)

![](./presenting-medications-encounter-section.assets/fe7a5776fe5cc2b59c28f2d6d6246605.png)

![](./presenting-medications-encounter-section.assets/9dffcd6083676f247619db51d06f769a.png)
 Select the up/down arrow icon to reorder the presenting medication list by drop and drag.

## Medication Reconciliation

A new My Settings user preference called "Use Medication Quick Notes" is available for users on RC202409 and newer. The experimental feature is disabled by default, but can be enabled by users wishing to utilize this feature. When enabled, the encounter presenting medications will display in a reconciled list with the subsections as **Unknown, Taking, Not Taking/PRN or Discontinued**. When a new encounter is opened all presenting medications will display under the Unknown subsection. Users are presented with additional buttons to mark each medication as **Taking, Not Taking/PRN, Unknown**, or **Discontinued**.  As each medication is reconciled, the presenting medication will build out to display applicable subsections.

![](./presenting-medications-encounter-section.assets/1545c4292ff49036a99b2586a44c4e7d.png)

![](./presenting-medications-encounter-section.assets/1a09d646fcbc2942459f86ff489bfa64.png)

Presenting Medications list view after marking a medication as Taking, Not Taking/PRN, Unknown or Discontinued.

![](./presenting-medications-encounter-section.assets/50d4a4de55f7e17d749ee7f1583a5f48.png)

## Using the Presenting Medications Quick List

![](./presenting-medications-encounter-section.assets/ce085e4b6348322f814858d080d7743e.png)

![](./presenting-medications-encounter-section.assets/4112218ea4ba18134c4e5099ebb975c0.png)
Typing in a medication name in the search box will search for matching medication in the Quick List.

![](./presenting-medications-encounter-section.assets/cf7a83bc5f6e97e900c56460b6e0cc6f.png)
 Select the + icon to add a medication that is not readily available in the Quick List. Using an autocomplete, quickly locate a medication and optionally add the medication form and SIG (dosing instructions) and then **Save**. Users may also *Show All Details*, *Add Another*, *Save to Library*.

![](./presenting-medications-encounter-section.assets/a78888af015b2e1180b23ffef1508aa5.png)

Users may also hover on any medication in the Quick List or Past Meds Quick List to quickly add a medication. The Drug Guide is also viewable from the Past Meds Quick List.

![](./presenting-medications-encounter-section.assets/696398904df5b05b906b95e2c963d4a1.png)

![](./presenting-medications-encounter-section.assets/4078310e8267d99279c0a4c8bfbdac0e.png)
 Click the "double arrow up or down" icons to open/close all Quick List items in the Presenting Medications Quick List all at once.

![](./presenting-medications-encounter-section.assets/1790956bf76c405bb09bca4e55db55b2.png)

![](./presenting-medications-encounter-section.assets/a9bdc4b9e482803e229afbe9e39bb2fa.png)
 Click the "single arrow up or down" icons to open/close each individual Quick List section in the Presenting Medications Quick List.
