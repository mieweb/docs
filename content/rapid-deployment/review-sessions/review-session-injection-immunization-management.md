---
id: '1inIJ-tD48TCRv9DBn0G6AHdoB-qXCbr3aqEYq-yQayo'
title: 'Review Session - Injection/Immunization Management'
date: '2020-02-27T21:25:46.347Z'
version: 25
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../functions/injection-immunization-management/injection-tab.md'
  - '../../functions/injection-immunization-management/injection-tab-vials.md'
  - '../../functions/injection-immunization-management.md'
  - '../../functions/injection-immunization-management/injection-program-tab-recording-mass-injections.md'
  - '../../functions/injection-immunization-management/injection-editor.md'
  - '../../functions/injection-immunization-management/edit-delete-injections-immunizations.md'
  - '../../functions/injection-immunization-management/injection-tab-with-chirp-interface.md'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=8148df7241d9f68085708c4ca4bc6c45'
source: 'https://drive.google.com/open?id=1inIJ-tD48TCRv9DBn0G6AHdoB-qXCbr3aqEYq-yQayo'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Injection/Immunization Module Demonstration</strong>
* <strong>Overview</strong>
* <strong>MAR/Injections Chart Tab</strong>
    * <strong>Documenting Links</strong>
    * <strong>Summary List Categories</strong>
    * <strong>Visit Encounter</strong>
    * <strong>VIS Handouts</strong>
    * <strong>Mass Injection Program</strong>
* <strong>System Configuration</strong>
    * <strong>Injection Editor</strong>
    * <strong>System Settings</strong>
    * <strong>Mass Injection Program</strong>
    * <strong>Interface to Registry</strong>
    * <strong>Security Permissions</strong>
* <strong>Resources</strong>

## Overview

The Injection/Immunization module is a tool that helps clinicians forecast, track, and manage historical or current immunizations, therapeutic injections or allergy injections/vials, as well as document injection administrations. Automated email notifications remind patients of future immunizations, where they can then access the portal to self-schedule any needed appointments. Patients may also access their immunization records from the portal.

Additionally, the {{% system-name %}} system allows for administering large quantities of immunizations for high-volume vaccination programs, or events, such as flu vaccine promotion events. This mass injection program features a means to easily document injections for large groups of people, seamless integration with an optional Inventory module, as well as access to Vaccine Information Handouts through the integrated CDC VIS Website.

Standard functionality includes:

* Track and manage historical/current immunizations.
* Seamless integration with inventory functionality, including autocomplete information from inventory tracking, such as lot and manufacturer.
* Easy access to multilingual VIS handouts.
* Pre-loaded, automated email notifications and reminders.
* Pre-loaded Clinical Decision Support rules, designed to trigger alerts for concerns such as egg allergies or history of Guillain-Barre Syndrome (GBS), or to prevent the administration of an expired vaccine.
* Injections Report
* Immunization Totals Report

## MAR/Injections Chart Tab

The **MAR/Injections** chart tab is also known, simply, as the Injection tab. This tab is designed to provide easy access to review and maintain individuals' immunizations and injections. This provides a single, structured point of access for a summary of all routine injections, medication administrations, immunizations and vials.

### Documenting Links

A common feature found throughout the {{% system-name %}} system are the quick links, typically seen at the top of a page. The Injection/Immunization module is no exception. At the top of the module, there are a series of links that offer the ability to add new or historical injections/immunizations, to add vials, from which injections can be administered, or even a means to quickly review the recorded injection/immunization information.

![](../review-session-injection-immunization-management.assets/057a3dbcc03fb03399eb6dfbf9e66e80.png)

#### Add Inj/Imm

The **Add Inj/Imm** link allows users to add injections/immunizations, upon administration. The Injection/Immunization screen will load, where all necessary fields can be filled out according to the medication or vaccine being provided.

#### Quick Add

**Quick Add** allows for fast input of historical injections or immunizations. After clicking the Quick Add link, the page will load, where multiple (up to 10 at a time) injection records can be recorded for the specific chart. Using Quick Add only allows users to add *historical* injections (i.e., injections that a patient has previously received).

#### Add Vials

The **Add Vials** link is a feature designed to allow vials to be added to the system and administered from. This is often used for allergy injections. After clicking the Add Vials link, the page will load, where multiple vials can be added by simply providing the name, vial contents, strength, and necessary dates. Simply enter the information, and click the **Add** button.

Once the vials have been entered, the user will be taken back to the immunization/injection summary screen. Here, users can then start administering injections from the vials entered.

#### Inj/Imm List

Clicking the **Inj/Imm List** link will load the same screen as when the MAR/Injections chart tab is accessed. This screen provides a complete, active summary list of injections and immunizations for the chart in context. By default the screen loads twenty (20) items per section. There is a System Setting (E-Chart, Injections, Listview limit per page) that triggers more or less entries to populate and show, based on the specified setting. This can be set to any specific number, to show how many entries will display at a time. Setting it to zero (0) will cause the lists to show all entries and not be limited.

For more information about injections, adding vials, and the injection tab, generally, review the [Injection Tab](../../functions/injection-immunization-management/injection-tab.md) and [Vials](../../functions/injection-immunization-management/injection-tab-vials.md) documentation.

### Summary List Categories

The Injection/Immunization chart tab allows clinicians to review and maintain any immunization records, recorded injections/immunizations, as well as any active vials or ongoing medication administrations. To easily navigate the information, when in the Injection/Immunization chart tab, the summary list displays three categories: Medication Administration, Immunizations, and Vials. Each of these categories allow for specific functionality and behaviors, to foster improved efficiency and better patient care.

For additional information regarding the Injection/Immunization module, its various categories, and its general features, see the [Injection/Immunization Management](../../functions/injection-immunization-management.md) index.

### Visit Encounter

Historical injections can also be documented when working in a visit encounter by utilizing the Immunizations/Injections section. Injections/immunizations needing to be administered during a visit encounter should be documented utilizing the Tests & Procedures section in the encounter. Everything that transpired during the visit is captured electronically in the encounter without having to exit out to different areas or chart tabs to document.

### Vaccine Information Statement (VIS) Handouts

As a means to streamline providing injections and educating patients accordingly, {{% system-name %}} has incorporated a direct link to the CDC VIS website. This allows the informational materials to be readily available at the time of the injection. Additionally, not only can multiple VIS handouts be provided at once, but once the handout has been given to the patient, this can be recorded and retained within the chart.

When an injection is administered and while documenting the data, when the VIS Handouts link is clicked, the Immunization Action Coalition's website will load, with the option to select alternative languages. There is an extensive index of both vaccinations and languages, to easily address many patient needs. For those clients using multilingual systems, {{% system-name %}} checks against the language preference system setting and opens the corresponding page, as appropriate.

### Mass Injection Program

The Mass Injection Program, as noted, allows for documenting the administration of immunizations for high-volume vaccination programs, or events. It not only provides a means to easily document injections for large groups of people, but it also streamlines HIPAA compliance.

The Mass Injection Program is equipped with a feature that checks for HIPAA Consent Forms on file, for each patient participating in the program. If no form is found, {{% system-name %}} allows the patient to sign one electronically, using a tablet or iPad device. Additionally, clinicians only need to enter injection/immunization information once, because {{% system-name %}} pulls the information forward from patient to patient, enabling the clinician to move quickly without re-entering information for each individual. Not to mention, prior to injection, the {{% system-name %}} system checks every chart for allergies to influenza shots, eggs, potential contraindications, and notable problems, such as Guillain-Barre Syndrome.

To access and begin using the Mass Injection Program:

1. Navigate to the E-Chart sidemenu.
2. Click the Injection Program tab at the top.
3. Begin typing the name into the <em>Patient</em> autocomplete field.
4. Continue entering all necessary information.
5. When finished, click <strong>Add Injection</strong>.
6. Repeat for next patient to document an immunization being administered for.

{{% tip %}}
There is integrated Clinical Decision Support, so pop-ups may appear to alert for contraindications, allergies, or even a lack of HIPAA compliance. This can be configured, as needed.
{{% /tip %}}

For more information on the Mass Injection Program, review our [Injection Program Tab](../../functions/injection-immunization-management/injection-program-tab-recording-mass-injections.md) documentation.

## System Configuration

There are some optional, and in some cases, necessary configurations to be performed when considering workflows and expected outcomes from the Injection/Immunization module. The following will address these types of considerations, briefly.

### Injection Editor

The Injection Editor is found in the Control Panel for users who have security permission. This is where users can find the master list of approved injection names from the Centers for Disease Control and Prevention (CDC). Additionally, the CDC provides a mapping from the CVX injection codes to CPT codes. As an example, these entries drive the results for searches, or when keying entries into autocomplete fields, while using the Injection/Immunization module.

Some practices are concerned with specific injections, so they may utilize the editor to either hide, or in some cases rename entries to suit the practice. Though users with proper security access can rename injections, as needed for the practice, those renamed injections will retain the original CDC attributes, in the background. Similarly, users with proper security access can also hide injection names, using the editor. This is helpful if the scope of the practice is limited to only a few injection types. When an injection is hidden, that injection name will not show up in the {{% system-name %}} searches or autocompletes.

### System Settings

There are several system settings that drive the fields and available choices found in the Injection/Immunization module. With the appropriate security permissions, users can navigate to the System Settings tab, found in the Control Panel, and edit/update with the appropriate information or values. The available system settings are multitudinous, but they are intended to control functions ranging from autocompletes and dropdowns to defaults and alerts. Be sure to use caution whenever editing system settings.

![](../review-session-injection-immunization-management.assets/8275b7d80a791b1fe2a10e35e7f274bc.png)

#### &implement

An alternative, and more user-friendly method for accessing and updating system settings for injections and immunizations is by simply adding &implement to the end of the URL. Here, just like in the {{% system-name %}} System Settings, the available fields and choices can be edited and updated, as needed. Setting anything here will also link/update the specific individual system settings.

To take advantage of this, simply right click on the MAR/Injections chart tab and open the page in a new window or browser tab. After the page loads, simply click on the URL, adding &implement to the end. Once finished, hit the **Enter** key on the keyboard, and configurations can be addressed, as needed.

### Registry Interface

{{% system-name %}} can interface with the varying state vaccine registries in order to electronically submit and/or receive data, complying with applicable state laws. As an optional add-on, registry interfacing can be scoped and configured, as needed.

### Security Permissions

Manage Injection Codes: If permission is set to Yes, it allows users access to the Injection Editor tab found in the Control Panel tab.

## Resources

### Help Documentation

* [Injection Editor](../../functions/injection-immunization-management/injection-editor.md)
* [Injection Program Tab-Recording Mass Injections](../../functions/injection-immunization-management/injection-program-tab-recording-mass-injections.md)
* [Injection Tab-Edit-Delete](../../functions/injection-immunization-management/edit-delete-injections-immunizations.md)
* [Injection Tab-Vials](../../functions/injection-immunization-management/injection-tab-vials.md)
* [Injection Tab](../../functions/injection-immunization-management/injection-tab.md)
* [Injection Tab with CHIRP Interface](../../functions/injection-immunization-management/injection-tab-with-chirp-interface.md)

### Training Videos

* [Injections](https://mieweb.webex.com/mieweb/ldr.php?RCID=8148df7241d9f68085708c4ca4bc6c45) (00:09:14)
