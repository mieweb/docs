---
id: '1JxQAWY4nwYAQJwq4NQ5DYvP3RYMml3wz_KejI5gb4dQ'
title: 'Carbon Copy'
date: '2025-02-04T15:00:10.256Z'
version: 79
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'contributing-providers.md'
  - '../../system-administration/system-controls/auto-routes.md'
source: 'https://drive.google.com/open?id=1JxQAWY4nwYAQJwq4NQ5DYvP3RYMml3wz_KejI5gb4dQ'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
Within an encounter, there is an optional Carbon Copy **CC** encounter section that can be utilized.

![](../carbon-copy.assets/d2ed7e474352e60e0b484e0400ac0858.png)

The CC (carbon copy) section on an encounter is used to document who you would like to receive a copy of the encounter document. The document can then be tasked to someone in your practice to send out or you can have MIE program automatic faxing out to anyone listed in this carbon copy section (contact your MIE Consultant for setup).

To utilize the CC encounter section, simply click anywhere on the CC encounter section grey title bar.

![](../carbon-copy.assets/86242814e284b977930d815e69e0367c.png)

In the User Name field, you can begin typing in the name of a physician you wish to tie to this Carbon Copy section and it will auto-complete choices. The *Role* column can be changed to be a drop-down to other roles (family, carbon copy user, oncologist, etc). If need to document other "roles" drop-down choices here, please contact your MIE Consultant.

![](../carbon-copy.assets/e999be12ce3b2fdd4b6c147441c07b37.png)

By default the carbon copy user, co-signing provider, family physician, and/or referring physician roles are accessible from the drop-down. Link to Patient can be removed if you use a PM system where you maintain the physicians tagged to a patient. Otherwise the* link to patient* (if checkmarked) will set that provider onto the patient's demographics tab and overwrite anything already there.

![](../carbon-copy.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)

There is a user preference in *My Settings* that you can set to yes and have the referring & family physician(s) and any other patient physicians (roles) that are already set to the patient's demographics screen to pre-populate here in the Carbon Copy section of an encounter that is created. That way you don't have to look up who their referring and/or family physician, etc is or manually re-key in the name(s). You can also remove it from the section even if it pre-populates and you don't want to send it to that physician. In order to bring in the patient's physicians listed on their record into this CC section, make sure your *my settings* preference is set to "yes" for Link Patient Doctors New Enc.

By default, the encounters only bring in the referring physician, family physician, carbon copy, and/or co-signer roles. You may document other physician roles on patient records (ex: oncologist or psychotherapist, etc) and can contact your MIE Consultant. The MIE Consultant will need to have the programmers make a custom change to your CC section to allow those other "roles" to show in the drop-down, then will configure the system setting to set all the user role id numbers that are to be brought automatically into the CC section of the encounter.

## Contributing Providers Listed in CC Encounter Section

Contributing Providers (a separate encounter section) will also be listed in the encounter plan's CC (carbon copy) encounter section. The Contributing Provider and CC providers will also display on the encounter view & archived/stored document if both sections are used in the encounter.

![](../carbon-copy.assets/d2784d34b6339f722dd558ab26bf6fe2.png)

NOTE: if you edit or delete any CC entries that are also contributing providers on the encounter, it will reflect that also up in the Contributing Providers separate section of the encounter.

Please see separate guide regarding [Contributing Providers encounter section](contributing-providers.md) for more information.

## Add New Provider to System via CC Encounter Section

If one cannot find a provider user in the system to utilize in the CC section, the Add New Provider button allows one to quickly add a P (Provider) chart to the system with a first & last name and can tie to an EO organization that is configured in the system.  The P (Provider) chart being added to the system from here, can also be marked as a Referable Entity which then allows that Provider to be searched & utilized within the Orders module.

![](../carbon-copy.assets/74888d62d9b3cb95909c075a9f7dcc21.png)

## Generate Referral Note

The *Generate Referral Note* checkbox is checked by default.  This is a system wide system setting (enabled by default) that can be disabled.

![](../carbon-copy.assets/36b8435f65ce26a040ebdf9f73d6103f.png)

A Referral Note separate document will store into the chart only if a *Referring Physician* has been noted in this CC encounter section.

![](../carbon-copy.assets/a74844b8c491d86076b33fe69b34c8dc.png)

When Generate Referral Note is checked, a free text box to type (or dictate) any narrative notes to that CC'd provider is available.These narrative notes in the CC section will be included in the separate Referral Note document that can be sent out.

Below the narrative notes box is a var-tree driven field of "other narrative notes" that you can build pretemplated choices or add more free text.

The Referral Note separate document is an abbreviated/condensed additional view of the encounter, in a letter format, and includes your narrative notes from the CC encounter section. Being in a letter format, it pulls patient identifiers at the top, along with the Narrative Notes & other narrative notes you typed in the "generate referral note" section. It will also pull the Symptoms/Diagnosis encounter section & notes from the encounter along with the entire Plan section from the encounter. If you need any letterhead or request different formatting or changes to what this default additional view/document shows, please contact your MIE Consultant for customizations.

![](../carbon-copy.assets/a52c1f87edc3febcd61421add6a1db84.png)

You can use this stored document (once the encounter has been closed & archived) to print, fax, or have your MIE Consultant set up datasend auto routes to send to other CC users.  But, the Referral Note view/document will only be created if a Referring Physician has been noted in the CC encounter section.

NOTE: If you did not put in a referring physician into the CC encounter section,  this additional view/document of Referral Note will not trigger/generate on the view of the encounter nor would it be stored in the chart as a Referral Note document.

![](../carbon-copy.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)

## System Setting prerequisite to using CC

Link Patient Doctors New Enc is a system setting available to set the specific User Role ID numbers to automatically pull into the CC section if a user has their preference (My Settings preference) to Link Patient Doctors New Enc.

![](../carbon-copy.assets/666cacd2fed301ec4622fc981bff14b5.png)

## My Setting Preferences to using CC

Link Patient Doctors New Encounter preference is where a user can set this to yes and then any referring, family physicians or any other roles (set within the above system setting) on the patient's demographics tab will show automatically in the CC (carbon copy) section of the encounter automatically instead of manually typing in users into the CC section of the encounter.

![](../carbon-copy.assets/881e970280c997835458b3cd738db9c1.png)

Co-Signing Provider preference, within My Settings, can be set to a specific user and if that same co-signing provider  user is listed as the Provider at the time the encounter is opened, then the Co-Signing Provider name will display in the CC encounter section by default. If the encounter is opened where the specific individual provider is not known (for example, opening an encounter from the  "Nurse 1" or "Provider 2" schedule) the co-signing provider will be unknown and not automatically populated. Users may however manually use the autocomplete in the CC encounter section to manually search and add the Co-signing Provider to the current encounter note.

![](../carbon-copy.assets/1b3bc90be7b6353cc69052aadcc01040.png)

## Show/Hide CC Encounter Section

The CC encounter section is not typically hidden in most default Visit encounter templates/outlines.  However, users may add the CC encounter section encounter visit outlines manually by adding it from the encounter **Tools**.

![](../carbon-copy.assets/b4b02a61d83cf31835a260ecd76e5b80.png)

Once added, the CC encounter section will display within the Plan encounter sections.

![](../carbon-copy.assets/d2ed7e474352e60e0b484e0400ac0858.png)

## Encounter View

The view of the encounter will display the CC section and any providers/roles documented.

![](../carbon-copy.assets/37c66ab7073b23eb236acd7799c5b299.png)

## Archived/Stored Encounter Document

Once the encounter is closed & archived, the stored encounter document will also reflect the CC section and its contents.

## Datasend Auto Routes

Your MIE Consultant can help set up Carbon Copy ( CC ) in Encounters to auto fax encounter users.  Carbon copy is typically thought of as faxing the referral note document (once e-signed as final) but you can CC or send information several different ways.

Inside of user accounts of the identified users, you can set up the Preferred Route of communication (for that specific user) to be faxed, send out data, send Direct emails, etc.

![](../carbon-copy.assets/8db3f13671502b1f5eac33562ec204ae.png)

Then your MIE Consultant would work with development to create datasend auto routes within the system.  See help guide regarding [Auto Routes](../../system-administration/system-controls/auto-routes.md).

## Reports

At this time, CC'd providers are not incorporated into any out of the box reporting.
