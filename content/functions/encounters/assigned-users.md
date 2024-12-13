---
id: '1R93vjLpsr5E2ca9p6vbRU-8C2i-lcK62KAWizcMQQ4c'
title: 'Assigned Users'
date: '2024-10-31T19:42:35.938Z'
version: 138
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/encounters/working-in-a-visit-encounter/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/encounter-types/'
source: 'https://drive.google.com/open?id=1R93vjLpsr5E2ca9p6vbRU-8C2i-lcK62KAWizcMQQ4c'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
Some workflows may benefit from using the *Assigned Users* feature rather than using [Staging](https://docs.enterprisehealth.com/functions/encounters/working-in-a-visit-encounter/#stage-buttons) buttons from within the encounter. *Assigned Users* allow users to assign encounters to **one** individual at a time. However, assigning the encounter to a user does not prevent others from viewing or working in the encounter.

## Enable Assigned Users

*Assigned Users* is an attribute on the [Encounter Type](https://docs.enterprisehealth.com/functions/system-administration/system-controls/encounter-types/). Select the *Assign User* option on the encounter type to enable the *Assigned User* feature. Keep in mind that the *Assigned User* will apply to every encounter [Template](https://docs.enterprisehealth.com/functions/encounters/working-in-a-visit-encounter/#storing-a-template-in-the-system) utilized by the encounter type. This may not be ideal for all workflows, in which case utilizing stages within an encounter may be a better configuration option.

![](../assigned-users.assets/fd0e4ac9ddcae4efa9da2e874c957b46.png)

## Assign User

When the encounter has been opened, the *Assign* button will display in the Current Encounter notification bar. Click the *Assign* button to assign the encounter.

![](../assigned-users.assets/b39a354f13092a16cf9b65b33654212a.png)

The *Assign* dialogue box will display. Use the autocomplete search option in the *Assign User* field to search for the user to assign this encounter. A *Priority* option will display with a *Normal* priority by default. The *Priority* options are Normal and High. Once a User has been selected and the priority is set, simply click the *Submit* button to assign the encounter.

![](../assigned-users.assets/1f0924938f30f2ff7e52348ddbefc586.png)

## Quick Assign

At the bottom of the Assign dialogue box are quick assign buttons. At a minimum, users will see a quick button for "Creator:". This button will show the name of the individual who created the encounter.

![](../assigned-users.assets/a8df49c4f4fc129edff65c3ea96c174d.png)

Additional quick assign buttons will display based on Active Clinical User contacts identified on the patient chart. In this example, William Hart has a Cardiology, Orthopedic Surgeon and Family Medicine provider listed as contacts on his chart. These providers are also active clinical system users, therefore, they display with a quick add button when assigning encounters. Clicking a quick assign button only requires one click to assign the encounter and the page will refresh.

Note: Supervisor contacts do not display as a quick assign button.

![](../assigned-users.assets/f31efed93045ce3c0ee5dfb42acd7fab.png)

## Assigned Users

Once the *Assigned User* has been set, the Current Encounter notification bar will display the current assigned user to the left of the *Assign* button. This alerts all users as to who has been assigned this encounter. Assigning an encounter does not prevent other staff from accessing or contributing to the encounter.

![](../assigned-users.assets/1839143ace8978dd2621b6367dc99c82.png)

When a user has been assigned an encounter, the user will see an *Assigned* alert in the alerts bar. The number in red parentheses indicates the number of assigned encounters.

![](../assigned-users.assets/c0b786d03e9ce859a2cb0780cc03cca5.png)

Click on the encounter name in the *Options* column to navigate directly to the encounter.

![](../assigned-users.assets/426bf494771fc68fd752c624085ff14c.png)

The user autocomplete at the top of the *Assigned* page defaults to the logged in user. Users can change the user name in the autocomplete and change/view other users assigned encounters.

![](../assigned-users.assets/23364f4e69f79ec17b69d1c4ae25f4af.png)

## Assign User Autocomplete

By default, the *Assign User* autocomplete will allow searching for any user with clinical access to the chart.

![](../assigned-users.assets/98929428774cc4b08639c8141f8043c5.png)

The *Assigned User* autocomplete can be limited to search and display results for **a** specific department. This system setting supports limiting to ONE department. Enter the department name in the *Current Value* field to limit the autocomplete to search a specific department.

Note: The *Assigned Users Department* system setting applies to all encounter types that utilize the *Assign User* feature.

![](../assigned-users.assets/7196ccd303580f266e93f030daf091db.png)

## Revision Tracking

A column for Assigned Users has been added to the encounter revisions table. This table is located in the Encounter Properties.

![](../assigned-users.assets/0da7ab9e52d81ff221ca8d49142380e5.png)
