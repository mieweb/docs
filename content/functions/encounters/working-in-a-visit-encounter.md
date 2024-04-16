---
id: '1lwIDrrDgkH3DGp6mHtl2HZdncjuCa-V4J31uanjRO4M'
title: 'Working in a Visit Encounter'
date: '2024-04-02T14:53:46.684Z'
version: 267
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'working-in-a-legacy-encounter.md'
source: 'https://drive.google.com/open?id=1lwIDrrDgkH3DGp6mHtl2HZdncjuCa-V4J31uanjRO4M'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The separate help documentation named [Working in a Legacy Encounter](working-in-a-legacy-encounter.md) and other separate help documentation guides regarding specific sections are also part of a dynamic encounter and covers many sections and functionalities of even a dynamic encounter. This help document will be going over features specific only to the dynamic encounter.

## Chart Tabs

When working in a dynamic encounter, you will notice the tabs are the very top. Those are the patient chart tabs (chart tabs in the patient record). Browsing out to other chart tabs and  documents within the patient's chart while working in an encounter is easy by accessing those tabs. The dynamic encounter auto-saves your work in real-time so there is no need to click the "save" button to save your work on an encounter before browsing out unless so desired on demand.

When you scroll up in the encounter, these chart tabs will collapse and hide to help with real-estate on your screen. To access the chart tabs, simply scroll up just a bit with your mouse or finger (if using a touchscreen device). The chart tabs will reappear for accessibility.

![](../working-in-a-visit-encounter.assets/dfb6f94991446d215c00a61fe9fdafb5.png)

## Patient Info Toolbar

When working in a dynamic encounter, you will notice a grey patient information bar. This grey bar is patient header information. Your system may have patient header information custom to your practice or show the default information. At all times you are shown what patients record you are working in.

When you scroll up in the encounter, the second line of the patient information will collapse and hide to help with real-estate on your screen. To access the full patient header information, simply scroll up just a bit with your mouse or finger (if using a touchscreen device). The full patient information header bar will reappear for viewing.

![](../working-in-a-visit-encounter.assets/276261527fc892ecdbb9cf76bdd641cf.png)

## Encounter Section Jump Tabs

When working in a dynamic encounter, you will notice blue tabs. The blue tabs are sections within the specific encounter you are working in. You can click on a blue tab and "jump" to that section automatically without scrolling. Several of the blue tabs house sub-section tabs that can also be clicked to "jump" you right to that sub-section of the encounter.

![](../working-in-a-visit-encounter.assets/1a283a045425d461eb2d6a44ca856bda.png)

## Stage Buttons

When working in a dynamic encounter, you will see ‘stage' buttons on the right side across from the blue jump tabs. These buttons will appear if your encounter is ‘staged'. Staged means that you have an encounter that goes through different ‘stages' (for example: an intake person works some portion, then a nurse works another portion, then the provider works the rest of the encounter). Stages also allow  {{% system-name %}} to convey which ‘stage' the encounter is currently in when users view it in a worklist. Moving an encounter from stage to stage allows for better workflow and enabling users to see what ‘stage' the encounter is in.

The out-of-the-box dynamic encounter has stages of Intake, Nurse, Provider and Depart.

The ‘stage' buttons are also available at the very bottom of the encounter.

![](../working-in-a-visit-encounter.assets/3862bc1bfa56c393082f6e221b8df2ed.png)

## Function Buttons

When working in a dynamic encounter, you will see function buttons on the far right top side. These are the same function buttons found at the bottom of the encounter, just presented in an image icon form. If you do not have security permission to *add dictation*, then you will not see the *Note Complete* function button since it's only related to dictation.

![](../working-in-a-visit-encounter.assets/09e1cd13a8beaf529926f3117f780a59.png)

### Release

The release icon is available at the top or a button at the bottom of the dynamic encounter. When you have gotten into an encounter from the worklist, it's essentially marking you as the owner of the encounter at this time, and marks the encounter in the worklist as "in progress" unless you release it.

![](../working-in-a-visit-encounter.assets/da4838931682aad90df0e878ab83fcfe.png)

This release button will take you to the "view" of the encounter and release you from this encounter. The encounter is no longer marked "current" for you and on a worklist would remove your name from being shown actively in or working in the encounter as "in progress". *Note Complete* and *Archive & Close* function buttons also release the encounter from the current user. You can also "release" from the List Encounters screen.

If you have not released the encounter, when a user navigates to an encounter that has already been grabbed or the encounter is marked as "current" for another user, a red alert displays on top of the encounter stating another user owns this encounter. It doesn't prevent that other user from working in the encounter, but it notifies to them that someone else has this same encounter marked as "current" or is currently working in it and has not released it as "current" for themselves. System setting *Use Grab* must be enabled to utilize this feature. *Note: If this system setting is disabled (value 0) then you will not see nor need to utilize the "release" button in the dynamic encounter.*

![](../working-in-a-visit-encounter.assets/ff3c02578ecca011d066b760df975ee5.png)

## Multiple Users in Encounter

Seeing the *Other Users InThis Encounter* yellow alert bar means another userI(s) has this specific encounter id marked as "current" for themselves. They may be in the encounter working also, or they may just still have that patient's encounter still set as "current" for themselves and never clicked "release". Any user who has the same encounter marked as "current" for themselves will show that alert to other users who also get into the encounter to work. You can force to release the encounter from another user as current. Simply click the *release* hyperlink in the options column next to the specific user(s). If no other user has this same encounter ‘current' for themselves, you will not see any of this.

![](../working-in-a-visit-encounter.assets/65b3a9b43328e41ed511c3687b267cc2.png)

Others **can** continue to work in the same encounter while you are working in the encounter. If data is keyed in by either user, the encounter is updated automatically, you are alerted that specific section(s) were updated and by what user (while you are working in the same encounter) and this allows you to see the up-to-date data.

![](../working-in-a-visit-encounter.assets/199fc0206515d75d3fc957d065099a86.png)

## Side Chart Access

When working in a dynamic encounter, you will see the ability to open a side chart while working in the encounter.

Clicking this icon near the patient's MR# will expand and display a side chart on the right side. Demographic information is in the blue section followed by a section named *Notes, Medical Records and Summary Tests*. This offers the ability to browse and look at documents housed in these 3 sections without getting out of the encounter or going to the other chart tabs outside the encounter. The red *Comments* section expands to display any alert documents the chart may have on it.

![](../working-in-a-visit-encounter.assets/a9d31a355f725fb9ca91a5e15c6c728f.png)

To browse documents that may be housed in the *Notes, Medical Records or Summary Tests* sections, simply click on the section itself to expand the document contents. The sections expand to show a list view of the documents sorted with most recent at the top. To open and get into a specific document, simply click the date of service hyperlink.

![](../working-in-a-visit-encounter.assets/f871bddc9435f24e3e1fb8e6f384cf6d.png)

By default, the side chart access defaults to chart tabs named Notes, Medical Record and Test Results. However your MIE Implementer can set up any chart tabs to be seen/accessed here in the side chart feature. A chart tab named "Side Chart" simply needs to be programmed (as a hidden chart tab) with the sub-tabs that are to be in the Side Chart tab and that will immediately reflect in this Side Chart functionality feature.

To collapse the side chart access, simply click on the icon image near the patient's MR# to collapse it.

![](../working-in-a-visit-encounter.assets/366f7a86aa2b2b890424825e1e5058a2.png)

## Typing/Capturing Data

When working in the encounter, the encounter sections are collapsed to provide you a quick summary reference to read and see what is currently captured. To enter in data, simply click on the section itself (section title name bar) and the section will expand to show you the data entry fields. Here is an example where I clicked on the *chief complaint* title bar and it expanded to show me the free text field, radio button selections, add dictation functionality and spell check.

![](../working-in-a-visit-encounter.assets/0811e50f1d807f73cc02e43a7ed7e565.png)

To get out of the chief complaint section and advance to the next section (in chronological order) simply click the button labeled ?Next. The system will close that section and then expand the next section (in chronological order) for you to key in data for the next section. As a reminder, the new dynamic encounter auto-saves so your work is always saved in real-time regardless if you close that section out and advance to a new section.

## Navigating and Using Encounter Sections

### Summary View

In the dynamic encounter, each section shows a quick summary view when looking at the encounter as the default. You can see the data that is currently entered or pulled from historical entries in each section. This is a list of data without details (such as date details, etc). It's meant to be a quick summary listing of data entered for that patient's encounter.

![](../working-in-a-visit-encounter.assets/7f2df9a867291cb8936b7278ebed9f40.png)

### Detailed View

In the dynamic encounter, you can see more detailed information of existing data instead of a quick summary listing look. Simply click on the icon labeled "Detail View" next to the section you wish to view specific details on.

![](../working-in-a-visit-encounter.assets/40515611b50cbff72308bcfa1841e900.png)

The same list of data shows, but expands to show more detail such as dates, reactions, etc for that section.

![](../working-in-a-visit-encounter.assets/0e6fa6c1384cceaa543515cb60ddec5d.png)

If you click a section to be the "detailed" view, the system will remember that. If you were to get out of this encounter and back in at some time, it will keep those section(s) on detailed view. If you go into a the dynamic encounter but for a different patient, those same section(s) will be shown as detailed view. It remembers your preference and what you last set that section to be.

To get back to display as "summary view" simply click the icon labeled "Summary View" in that section.

![](../working-in-a-visit-encounter.assets/6f55a054892491c9692484ede9373f72.png)

### Removing/Hiding Sections

In a dynamic encounter, you can "hide" a section and it will keep it hidden for that encounter if you have security permission to *Remove Encounter Sections* set to *Any* or *Any except locked*. A section can be defined as "locked" in the outline layout.

![](../working-in-a-visit-encounter.assets/9571d6ff5ff2f9bb2c390d07efdde61c.png)

The X icon at the right side of each section is the "hide section" functionality.

In this example, we don't use "Cases/Incidents" for our practice, so I can X/hide the Case section by clicking the X and the section disappears from my encounter I am in.

![](../working-in-a-visit-encounter.assets/526b5df6a3bf80a230dcee434a0c461c.png)

I can bring that section "back" to be shown on the encounter I'm working in if needed to. Simply go to the top and find and click the *Tools* icon. It will popup a window named *Tools*. It lists any hidden items at the top. All you have to do is click on the specific name of the section you want to populate back in. So in this example I would click the word "Case" there in the Tools pop-up window.

![](../working-in-a-visit-encounter.assets/58572102a0f77ffcf198754484d6f0ea.png)

Once I clicked on the word "Case" from that pop-up window, the Case section immediately inserted back into the proper position in my encounter. It also immediately removed that in the list of my Tools *hidden items* section since it's now not hidden anymore and is back populating in the encounter.

![](../working-in-a-visit-encounter.assets/b09a2a2e79db1349726e3fa2a08e116b.png)

You can close the *Tools* pop-up window by clicking cancel or the red X at top right corner.

### Capturing New Data Within Sections

In order to get "into" a section to key in other or more data, you must click on the "section title" bar.

So for example, if I wanted to key in another allergy that the patient states they have, I would click on the title bar named *Allergies/Intolerances.*

![](../working-in-a-visit-encounter.assets/ba48d9ec99fe83d593ff77d505f95eca.png)

When you click on a section title bar, the section will expand open to enable you to key in data. You can also edit existing data that lists in that section if you have security permissions.

![](../working-in-a-visit-encounter.assets/1de8bdf3e80e7672011d78bb8460946d.png)

Clicking the 
![](../working-in-a-visit-encounter.assets/a3d443ace87dc0342cac6046625439a6.png)
 button will save and close that section and expand open the section that is next for you to key in data. The 
![](../working-in-a-visit-encounter.assets/a3d443ace87dc0342cac6046625439a6.png)
 at the top right of the section also performs as a "next" button.

![](../working-in-a-visit-encounter.assets/a64ce62c77cf52d950ddab5ed7181201.png)

If you expanded a section but didn't want or need to key any data into that section, you can click the cancel icon to collapse the section back to summary or detail view.

![](../working-in-a-visit-encounter.assets/4ec460e03a02336cf38b25745225d5eb.png)

### Quick Lists

Quick Lists can optionally display on the right hand side of the encounter section. Quick Lists will display items in the system default library, although providers can create custom Library charts to populate Quick Lists.

By default, Quick Lists do not display in the encounter. Click the ribbon icon on individual sections or click the ribbon in the upper right hand corner of the encounter to display Quick Lists for all encounter sections.

![](../working-in-a-visit-encounter.assets/df1f1cdc14d21f7c694760fa7d0b996b.png)

Users may update their user preference in *My Settings*, to always display Quick Lists, rather than manually clicking to display them.

![](../working-in-a-visit-encounter.assets/62dd60b0530c46594ba88e340e3e04be.png)

### Encounter Info

In the dynamic encounter, the section Encounter Info houses the date of visit, what type of encounter visit, encounter visit location, language field and provider of service. The Provider field is a drop-down (by default) of provider users in the Physicians department (Physician Realm system setting default value). If the system setting for "Use Charts" is turned on, the Provider field input in the Encounter Info section will be a provider autocomplete instead of a dropdown. The autocomplete field then points to provider organization charts.

![](../working-in-a-visit-encounter.assets/30ad0cb732005abb8e390e07f75d8ba5.png)

Encounter visit types are usually generic (ex: Visit encounter), but there is a field named *Archive As* within the Encounter Info section of any dynamic encounter. This is where one can set a specific document type to save the specific encounter as. The choices that appear in the drop-down for *Archive As* are programmed in a layout. Contact your MIE Implementer to have selectable document type choices programmed here.

![](../working-in-a-visit-encounter.assets/bf2aeb9e667a8620d7189e919c1ea9de.png)

The encounter remains stored as the visit type you created, but the stored/archived document (that the encounter created) is saved as what you selected in the *Archive As* field (document type name).

### Multi-Dictation

The section Multi-Dictation is to be able to ‘Record' and ‘Play' the dictation.

If no multi-dictation file exists yet on the encounter, this section will appear as such:

![](../working-in-a-visit-encounter.assets/8a967a8df61975eaa2e6ba1c21a50888.png)

Once you expand the section. You will be able to record dictation via the *record multi-dictation* button.

![](../working-in-a-visit-encounter.assets/46c6c9041ff96ecd93a1146e56bb2b36.png)

When you click *record multi-dictation* then the MIE Record Dictation player window will appear on your screen for you to dictate as a multi-field dictation file.

![](../working-in-a-visit-encounter.assets/113b7e790f98c90c3cfe2da2c3924caf.png)

If there is a multi-dictation file that was recorded already on the encounter, you will only see the *Play Dictation* link and ability to play only when this section is collapsed. If you needed to record, you have to expand that section to open.

![](../working-in-a-visit-encounter.assets/8d908261102be79436e2fd87eacd31e7.png)

When the Multi-Dictation section is expanded, you have the ability to record and/or play existing multi-dictation files that are on this encounter.

![](../working-in-a-visit-encounter.assets/6031f95c0055a7d79ceeffb0a6f178e8.png)

Once done with an encounter, clicking the function button "note complete" on a dynamic encounter will release this dictation to a transcriber to type up. Until then, any other save function button keeps the dictation files in "Held by Dictator" status.

### Case

See separate help documentation in the Cases help section. Note: If linking an existing case to the encounter, the assessments from the incident/case will be linked to the encounter. Meaning, a case/incident which already has an assessment/diagnosis(es) linked to it, the same diagnosis(es) will now auto link to the encounter as well in the Assessment section of the encounter.

### Past Medical History

Past medical history section of dynamic encounters include concluded conditions. The Past Medical History section of the dynamic encounter also pulls information from linked incidents.

### Tests & Procedures

See separate help documentation named *Tests and Procedures-Adding,Applying,Completing & Resulting* and *Tests and Procedures-Edit,Delete,Remove*

### Assessment (or Impression)

See separate help documentation named *Encounters-Impression Section*

### Plan

See separate help documentation named *Encounters Plan Section-Meds* and *Encounters Plan Section-Make Order Feature*

### Quick Visit Orders in Plan

In the Visit Orders section of a dynamic encounter, you have the ability to show quick checkoff items that are used frequently. Most likely this is used (and is the default) for follow up documenting. This is easier access than going to "list" or using the auto-complete to document and mark follow up or any else quickly. This does not create an order document, this is a quick (usually for follow-up documenting) access to select some order items. Anything you want to show as quick checkmark items needs to be loaded into an order set named *Quick Visit Orders*. The dynamic encounter also has the ability to display Order Set hyperlinks (Make xxx Order) according to location or other criteria. Contact your MIE Implementer for more information.

![](../working-in-a-visit-encounter.assets/89241a38b26fa2aeb686936b0b36cce0.png)

### Restrictions and Accommodations

See separate help documentation regarding Restrictions and Accommodations-Adding and Restrictions and Accommodations-Viewing

### CC

When the Co-Signing Provider is set for a user within My Settings, and that user is listed as the Provider at the time the encounter is opened, then the Co-singing Provider name will display in the CC encounter section by default. If the encounter is opened where the specific individual provider is not known (for example, opening an encounter from the  "Nurse 1" or "Provider 2" schedule) the co-signing provider will be unknown and not automatically populated. Users may however manually use the autocomplete in the CC encounter section to manually search and add the Co-signing Provider to the current encounter note.

![](../working-in-a-visit-encounter.assets/1b3bc90be7b6353cc69052aadcc01040.png)

![](../working-in-a-visit-encounter.assets/401d34f7c905914c6584f75e8612d640.png)

### Clinical Summary/CCDA

A clinical summary to hand to the patient can be generated from the CCDA/Clinical Summary section. The electronic version of the CCDA/Clinical Summary can be sent to the patient's NoMoreClipboard account also. The CCDA/clinical summary section allows a provider to uncheckmark to weed out specific sections of the encounter (ex: allergies, etc) from displaying in the CCDA and/or Clinical Summary. By default, generating the clinical summary and electronically sending to their NMC account is checkmarked and will generate/send upon save/view or close/archive.

![](../working-in-a-visit-encounter.assets/17b77f707f0d03a40648b08f86b29c74.png)

### Patient Education

The dynamic encounter offers a batching mode to document patient education material was given, a free text box to type what was given and also access to batch print patient education handouts that your practice utilizes from the  {{% system-name %}} forms library. Checkmarking the box next to the specific patient education material(s) will document that also on the encounter view/document. Utilizing the Batch link next to each specific patient education material(s) will put them in a ‘batch' which you can then print and hand to the patient. Note: In order for this section & functionality to appear, your MIE Implementer must have loaded your patient education handouts as forms and those doc.types mapped to a chart tab named Patient Education.

![](../working-in-a-visit-encounter.assets/4204686be74ca6ed33cbfa266a2b780c.png)

### Future Appointments

This section will show a list of all future appointments scheduled for the chart you are working in. This provides a quick reference to see when, with who and what for future appointments are already scheduled.

![](../working-in-a-visit-encounter.assets/3b4685a5412aa9ec8ca2fc423b8ffa5e.png)

### Future Case Appointments

If the dynamic encounter is linked to an existing *case* back up in the Cases section, or has a new case added to it, then this section will be titled as *Future Case Appointments*. This displays only future appointments that are directly linked to the specific case the encounter is linked to. Note: The ‘Future appointments' section gets hidden when the above action occurs. So instead of listing any/all future appointments, it only displays future appointments related to that specific case this encounter is also linked to.

![](../working-in-a-visit-encounter.assets/dbcc6162364542917848f53e83d1e59b.png)

### Date Pickers

Any section with a date picker (calendar icon) will expand to open a calendar when clicked. This allows selection of a date (using a calendar) to populate a date field. The dynamic encounter has a hotkey function to close the calendar/date picker when it's open.

![](../working-in-a-visit-encounter.assets/06ad18b89f7aaa745193314a87f37f50.png)

Obviously clicking a date from the calendar will insert the date in the field and close the calendar, but if you opened the date picker and didn't want to use it, you can now simply click your ESC (escape) key on keyboard and it will close the date picker/calendar on the screen. This is easier than trying to position your mouse over the X to close out the date picker.

### Storing a Template in the System

Dynamic encounter templates can be saved and loaded. The *Tools* icon button gives the ability to enter a template name that you want to save or key in existing name to load. If you have security permission to hide/close sections, you can do so and then save the encounter as a "template" to be used for future. When a user loads a stored/existing template by name, the specific sections will only show that pertain to that template being used.

![](../working-in-a-visit-encounter.assets/8c779a6bf7ced4d8849f2a599b8166d1.png)

After hiding sections that don't pertain to a specific "template" you want to save to your library, you click the *Tools* icon, type in a Template Name and click "save". This will store that as a template. It's simply storing the sections to display (or not display) if someone wants to use that template in the future.

### Applying a Stored Template for Use

To search and utilize a saved template type that is stored in the library, simply click on the *Tools* icon and in the section "load template" select (by clicking) the named template you wish to apply to your open encounter.

![](../working-in-a-visit-encounter.assets/eac788c406eba84c34803a4ee56f96e5.png)

The encounter screen will entirely refresh and the encounter sections would then display (or hide) depending on the saved library template you applied.

A default stored encounter template can also be applied when setting up appointment types via the scheduler.

One can also apply a template to an encounter at time of creation. From the Quick Links portlet, there is an icon next to each visit type available for quick creation. Clicking on this icon will open up the template choices. Selecting a template choice will then open/create the encounter of the icon you clicked next to, and applies the template you selected.

![](../working-in-a-visit-encounter.assets/8e5a687e6ab66c1ae3f05faf5020cc39.png)

![](../working-in-a-visit-encounter.assets/5cce00aba7e71e1d32f5dc9134b9ca71.png)

Dynamic encounter templates also use the "Archive as" document type if one was set in the template being used and save as that doc.type once encounter is closed/archived.

### Deleting Stored Templates

Stored templates in your system can be deleted in their entirety. Click on the *Tools* icon and in the "load template" section simply click the trash can icon next to the specific system stored template name you wish to delete. A pop-up message that you successfully deleted a stored template will display. You can then X out of the *Tools* screen.

![](../working-in-a-visit-encounter.assets/d8f71d155134a818e359aeb2c786c121.png)

### Deleting Observations Individually/En Masse

Encounter observations can be deleted individually and in multiples from the encounter section. To individually delete observations, click the* Trash Can* icon next to the observation. Click the *Eye* icon to view attributes of the observation.

![](../working-in-a-visit-encounter.assets/a80a034fb31c511ab07dfa8e97399bbb.png)

To delete multiple observations at the same time, highlight the observations to be deleted and then the keyboard shortcuts "s" and "d" to delete the highlighted observations. Use the keyboard shortcut "s" and "u" to undo the selected operation.

![](../working-in-a-visit-encounter.assets/f449e6568585318d6a8e9067b2287de3.png)

![](../working-in-a-visit-encounter.assets/aa39797a8976c591b4b1673c0d3d153b.png)

![](../working-in-a-visit-encounter.assets/9353b2a58e2a1739af7ad9bbbed6bd05.png)

![](../working-in-a-visit-encounter.assets/76931801565d15bcd6ac128689605139.png)

If observations are deleted, they will also show as deleted in the encounter properties.

![](../working-in-a-visit-encounter.assets/e8bc0a23859789adc2eb767652cbe317.png)

### Final Summary

At the end of the encounter entry screen you will see a section named *Summary*. This displays a quick final summary of some sections above that were keyed in. It's yet another way to quickly see your summary of this current encounter data but is not editable. This final Summary also displays on the "view" and final stored document.

![](../working-in-a-visit-encounter.assets/444113140311dc2d001826d33a7fcef5.png)

## Closed Encounters

You can still get into a closed encounter as before, but dynamic encounters will not allow you to edit or key in any more data if the encounter is closed. The encounter info bar shows CLOSED and the encounter screen looks different. Shows you it's locked down and clicking the section title bars will not expand/open them. You cannot add or edit data to a closed encounter. You would have to set the encounter to "open" if you have security permissions to do so and if your system setting for your practice allows closed encounters to be reopened.

![](../working-in-a-visit-encounter.assets/7246d0b054f95f21a0803d59419bf2f0.png)

## Additional Documents

Dynamic encounter sections themselves can store as their own additional document upon the encounter's archive & close. Each dynamic section is a layout and the layout can be set to a specific document type to store as. The section would still be part of the entire stored encounter document, but upon archive & close, the section would store as its own document in the chart if a document type is set on the section layout. Contact your MIE Implementer for any programming needed.
