---
id: '10wzj2vwOYF-Oqv8Nnx1jfbeitSsZ5Zlx-mhrMfgA_oA'
title: 'Heading Levels in Encounters'
date: '2025-12-01T14:57:04.699Z'
version: 41
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'rename-a-heading.md'
  - 'working-in-a-visit-encounter.md'
source: 'https://drive.google.com/open?id=10wzj2vwOYF-Oqv8Nnx1jfbeitSsZ5Zlx-mhrMfgA_oA'
wikigdrive: 'v2.15.30'
---
By default, encounter section groupings and subsection groupings use specific header levels.  In {{% system-name %}} encounters, header levels are used to structure content hierarchically, with H2s being as major sections, H3s as subsections within an H2, and H4s as minor-subsections within an H3.

Using header levels helps end-users by creating a clear, hierarchical structure that improves readability and navigability for both human readers and assistive technologies like screen readers. This structured format allows users to quickly scan and jump to specific sections, like patient history, diagnosis, or follow-up care plans, without having to read the entire document, making it easier to find critical information.  Upon an encounter being closed and archived, the view and its stored sharable document reflects header levels to make the content of the document more searchable and includes better visual clarity.

Heading level changes can only be done one encounter section at a time for the one encounter being worked in.  If a user changes a heading level within an encounter, the heading level change(s) will only affect that specific chart's encounter, but reflects the change for any/all users that work in that specific chart's encounter.  The change is also reflected in the encounter view and stored document for any/all users.

## Use Heading Level Change - User Preference

Encounter sections titles can be changed to use different heading levels.  To accomplish this, a new preference setting is available under the Experiments section of My Settings.

![](./heading-levels-in-encounters.assets/26aa00c6a4b19154d722b77fe1ac8c78.png)

## Encounter - Other Tools - Change Heading Level button

If a user's *Use Heading Level Change* preference setting is enabled, when working in an encounter, there will be an option to change Heading Level under Tools.

![](./heading-levels-in-encounters.assets/7c6b6e3fb6a77fa028dba152ccf0cd5d.png)

### Changing an encounter section level

After clicking the button to *Change Heading Level* in the tools window, the encounter will refresh to emphasize the section names for you to easily select which specific encounter section you would like to change its heading level.  NOTE: you can only change one encounter section heading level at a time individually.

![](./heading-levels-in-encounters.assets/d0775d43955c49a4600fe626285fe44b.png)

Click on the specific encounter section title you wish to change the heading level for.  In this example, the Past Medical History encounter section title grey bar was clicked.  Then the *Change Heading Level* pop-up window will display what heading level it currently is and will allow you to change the heading level using the drop-down.

![](./heading-levels-in-encounters.assets/e25d7082303cb24fec2be7d19d0f9a6a.png)

In this example, I have changed the Past Medical History encounter section (for this individual chart's specific encounter) to be an H2 Major Section level instead of what it was as an H3 subsection level.  Upon a drop-down level selection change, click the OK button.

![](./heading-levels-in-encounters.assets/7d8213d22a0f7997d0ff4aa0886396aa.png)

Upon clicking the OK button, the encounter will display the contents and allow you to continue working.  Based on the heading level you changed a section to, you will see it as a major section (blue jump button), or as a subsection within a major section (subsections show when hovering over a blue jump button).

In this example, since we made the Past Medical History encounter section (for this chart's encounter) an H2 major section, it has made that section also a blue jump button and any encounter sections after that (until the next H2 major section) are now considered subsections of Past Medical History.

![](./heading-levels-in-encounters.assets/8527a8ff4f32f92d5be60af400980970.png)

### View & Stored Document

The encounter view and its stored/archived document will also reflect any heading level changes visually and when shared.

![](./heading-levels-in-encounters.assets/73b5aab4cb8dd3d600962b5b0650eacb.png)

Changes only for the specific encounter you are working in. And for all users of that encounter????????

## Encounter Templates

Changes to the Heading Levels can also be saved when utilizing templates.  The *Tools* icon button (within an encounter) gives the ability to enter a template name that you want to save or key in existing name to load. When a user loads a stored/existing template by name, the specific sections will only show that pertain to that template being used.

![](./heading-levels-in-encounters.assets/8d3a2e572991caec6497c8b163a28868.png)

Type in a Template Name and click "save". This will store that as a template and includes any heading level changes.

## Additional Information

* [Rename a Heading](rename-a-heading.md)
* [Encounter Templates](working-in-a-visit-encounter.md)
