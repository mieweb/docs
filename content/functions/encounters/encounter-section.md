---
id: '12C8MgZZu8_VPjTORvDnkQX9xo322BsszxsyWjTAuemY'
title: 'Encounter Section'
date: '2025-05-08T16:13:57.092Z'
version: 106
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=12C8MgZZu8_VPjTORvDnkQX9xo322BsszxsyWjTAuemY'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
The Encounter section is the first section in every visit encounter. This information contained in the section includes patient/employee identifiers, performing provider, location and billing information.

## Encounter View Mode

View mode is the entry/edit mode collapsed. The view mode displays a condensed summary of data entered in edit mode. The section displays patient/employee identifiers, performing provider, service location, employer, the document name for which this encounter will create upon archive and close, and billing/payer information.

![](../encounter-section.assets/3b5b3f1bb2ccf6176662c4f20341d6fd.png)

## Encounter Edit Mode

Use the Edit icon or simply click on the gray header bar for the Encounter section to open the section in entry/edit mode.

![](../encounter-section.assets/ae016977aad07112a0eb242d3b89a9dd.png)

### Employee/Patient Identifiers

**Employee name/Patient name:** Enterprise Health clients will see the label **Employee name**, while Webchart clients will see the label **Patient name**. This data is prepopulated with data and can not be changed.

**Employee ID:** Enterprise Health clients will see the label **Employee ID**, while Webchart clients will see the label** Patient ID**. This data is prepopulated with data and can not be changed.

**Date of birth:** Displays the patient's date of birth. This data is prepopulated with data and can not be changed.

**Age:** Displays the patient's age at the time of service. This data is prepopulated with data and can not be changed.

**Date:** The date field should capture the date/time of the service. When the encounter is opened manually, the current date/time prepopulates this field, however, users can overwrite this and change this information. If the patient is checked in from the scheduler or scheduling portlet and an encounter is programmed to open automatically, the date/time of the scheduled appointment will default as the date/time of service in the encounter.

**Visit type:** The **Visit Type** is the visit/encounter type used to create this encounter.

**Location:** The location is the location for which the encounter visit is taking place. The provider and location are selected together using the **Provider** autocomplete. Once the appropriate provider/location combination has been selected, the location information will populate. The only way to change the location is to select a different provider location combination.

**Provider:** Select the performing provider at the appropriate location from the **Provider** autocomplete. Search using last name, first. Locations pull from *Provider Organization* charts and Providers pull from *Provider* charts. Providers linked to Provider Organization creates the link between provider and location. All newer databases will default to using the Provider autocomplete. Clients who have not transitioned to the autocomplete may still see drop down options for provider and location. Clients should consider transitioning to the autocomplete controlled by the *Use Charts* system setting.

**Employer:** If an employer is listed in the patient's contact relationships table, then the Employer will default in the **Employer** field. If more than one employer relationship is defined, then the user may select the appropriate employer from the drop down. If no employer is defined the user will see *No employer found! Click here to add one!*

![](../encounter-section.assets/47d04da09b81e900355c348ad6649b75.png)

**Self Pay/Commercial Pay:** The **Self Pay** and **Commercial Pay** buttons are only viewable for clients who have a billing interface installed that supports sending of payor information. These buttons display if an *Employer Organization* has been created for *Self Pay* and/or for *Commercial Pay*. These are typically configured for clients at the time the interface is installed.

![](../encounter-section.assets/87619c7638438672c73169908666b4b5.png)

**Payer:** The **Payer** is an *Account* chart that is linked to the **Employer Organization** chart. Payers will only display for the Employer selected in the Employer field.

**Archive as:** **Archive as** will default to the default document type for the Visit Type selected or as predefined in a template. Users can manually change the **Archive as** from a drop down if the default document type is not desired. The **Archive as** option drop down is defined in the *Encounter Type* configuration.

**Patient was transitioned into my care for this visit:** Select this box if the provider needs to document that the patient is being transitioned into the provider's care. This is typically only utilized by Webchart clients that report this in Quality Measures.
