---
id: '13u4axKsgMry3YtUiZRzJVM04yIRBNyHfnhAIZ-p3g9k'
title: 'Contributing Providers'
date: '2025-06-02T13:47:10.282Z'
version: 166
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=13u4axKsgMry3YtUiZRzJVM04yIRBNyHfnhAIZ-p3g9k'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Within an encounter, there is an optional **Contributing Providers** encounter section that can be utilized.

![](../contributing-providers.assets/8c993245fa9758ad9c8145e31e4c4d6c.png)

The Contributing Providers section is the ability to add any providers/other staff members to be listed as having contributed to this note/visit, separate from the overall performing provider on the encounter. This allows you to capture any clinic user that participates in the patient's care. For example, Dr. Butler is the provider seeing the patient, he is listed as the main performing provider in the top Encounter Info section. However, Nurse Betty brought the patient back and took their vitals.  Therefore, Nurse Betty could be listed in the contributing providers section. Then, Technician Mark performed an EKG, therefore Technician Mark could be listed in the contributing providers section. To finish up, Dr. Patel was consulted for a second opinion on the EKG and came in and listened to the patient's chest, therefore Dr Patel could also be listed as a contributing provider.

![](../contributing-providers.assets/c6567687dcc300360f1f3d9e5fa97ef6.png)

## System Setting prerequisite to using Contributing Provider selections

There is current functionality that allows the ‘Contributing Provider' autocomplete to pull "Charts" or "Users" based on the System/External Provider/Use Charts system setting.  By default, new systems will have the *System/External Provider/Use charts* system setting enabled. Since enabled, the system will pull Provider Charts as selections (not users from Access Control) in the autocomplete. If the system setting  is Disabled, then the Contributing Providers autocomplete will pull in Users as selections within the system.

![](../contributing-providers.assets/82e539ecd513e816118002a6e2b43b49.png)

Since the *System/External Provider/Use charts* system setting is enabled, systems must have a separate individual Provider chart for each contributing provider. Typically, individual Provider charts are used for internal providers, as far as for use in the Contributing Providers encounter section. However, external provider charts can be created as well. For example, Internist Butler has a Provider chart (Provider chart number P-6).

![](../contributing-providers.assets/13398e3f8c55f8f9b643baa36ce4a9f9.png)

Each provider chart then should be associated with the Provider Organization/Clinic Location chart for which the provider works at/provides services at. For example, Better Corp is a Provider Organization/Clinic Location in the system. Dr Butler practices at Better Corp PO/Clinic Location and the Provider chart is associated to the Provider Organization chart.

![](../contributing-providers.assets/11d7aca0b35a72f9de5339249f029799.png)

## Encounter Performing Location prerequisite to using Contributing Provider selections

The Contributing Provider Name field is an autocomplete.  You must type at least 3 characters for the autocomplete to render suggested matches.

![](../contributing-providers.assets/70063c9deee3b4197c3eb44178fe416b.png)

When system setting is enabled to Use Charts, the Contributing provider auto-complete selections only provider/clinician charts (for selections) that are linked/related to the same location (Provider Organization) selected in the top encounter info section for the overall performing provider's performing location set on the encounter.

If you do not have a location set up in the top Encounter Info section for a performing provider, you will not get any names to result in the Contributing Providers section.

![](../contributing-providers.assets/07adc7a0c70992e9e4190d65ccec2656.png)

If system setting User Charts is disabled, then the autocomplete will display users as selections, regardless of performing location set on the encounter.

## Show/Hide Contributing Providers Encounter Section

The Contributing Providers encounter section is typically hidden in most default Visit encounter templates/outlines.  However, users may add the Contributing Providers encounter section to the encounter visit outline manually by adding it from the encounter **Tools**.

![](../contributing-providers.assets/80c48a49032926314a929ed09801a27c.png)

Once added, the Contributing Providers encounter section will display above the Chief complaint encounter section.

![](../contributing-providers.assets/952ed22e4f1eee8f96b2152ee75523c4.png)

The Contributing Providers section area must manually be clicked on to expand open the contributing provider data entry fields.

![](../contributing-providers.assets/af649a1fcb9b0dc37cc5d32f26c275a0.png)

### Name autocomplete field

The Contributing Provider Name field is an autocomplete.  You must type at least 3 characters for the autocomplete to render suggested matches.

![](../contributing-providers.assets/70063c9deee3b4197c3eb44178fe416b.png)

When system setting is enabled to Use Charts, the Contributing provider auto-complete selections only provider/clinician charts (for selections) that are linked/related to the same location (Provider Organization) selected in the top encounter info section for the overall performing provider's performing location set on the encounter.

If you do not have a location set up in the top Encounter Info section for a performing provider, you will not get any names to result in the Contributing Providers section.

![](../contributing-providers.assets/07adc7a0c70992e9e4190d65ccec2656.png)

If system setting User Charts is disabled, then the autocomplete will display users as selections, regardless of performing location set on the encounter.

### Role drop-down field

Select (from the drop-down) the role you want the contributing provider to be documented as on this visit/encounter note.

![](../contributing-providers.assets/ad3daa26357e0258e48877a0ca9a4cb6.png)

### Add/Save Contributing Providers listing to the encounter section

Once done adding any contributing providers and their role in the visit, simply either click the save icon in that section, or simply click anywhere on the section title to collapse the section.

![](../contributing-providers.assets/26fc93369113d2f948d6b424e4a3a501.png)

Once the section is saved, the summary (collapsed) view will list the contributing providers and their selected role.

![](../contributing-providers.assets/d7f94b3a46e27bb49882b7dc2c7b7959.png)

## Encounter View

The view of the encounter will display the Contributing Providers section and any providers/roles documented.

![](../contributing-providers.assets/39a3a8bbe31a2c6376a0008f00ba2e3b.png)

## Archived/Stored Encounter Document

Once the encounter is closed & archived, the stored encounter document will also reflect the Contributing Providers section and its contents.

## CC Encounter Section

The same Contributing Providers will also be listed in the encounter plan's CC (carbon copy) encounter section. The Contributing Provider and CC providers will also display on the encounter view & archived/stored document if both sections are used in the encounter.

![](../contributing-providers.assets/d2784d34b6339f722dd558ab26bf6fe2.png)

NOTE: if you edit or delete any CC entries that are also contributing providers on the encounter, it will reflect that also up in the Contributing Providers section of the encounter.

## Signature Images on archived/stored encounter document

If an image of the performing provider's signature exists within the Provider's User account in the system, then their signature image will display at the bottom of the archived/stored encounter document **after** that performing provider has E-signed the document. To request an e-sign from a performing provider, E-sign rules must exist or a manual request of signature must be generated.   If the document has not been e-signed or if has been e-signed but no signature image exists within the Provider's User account in the system, then the image of the signature will not be displayed, but their name & date of when they e-signed will still display in the *Electronically signed by* area of the archived/stored encounter document.

![](../contributing-providers.assets/0f175f74f63bc252451c7e56ee270071.png)

Anyone else that e-signs the archived/stored encounter document will also have their e-signature image (or just name) & e-signed date placed also in the Electronically signed by area of the archived/stored encounter document.

![](../contributing-providers.assets/d4ce14b081a0d6c0383866c30286de87.png)

## Reports

At this time, contributing providers are not incorporated into any out of the box reporting.
