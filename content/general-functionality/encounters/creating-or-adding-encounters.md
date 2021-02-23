---
title: "Creating or Adding Encounters"
date: 2020-03-13T15:01:30.440Z
url: "general-functionality/encounters/creating-or-adding-encounters.html"
version: 48
id: 1NUHcLxI6hYr5WaTyXHkQMxpA8UGjp2QsDnCnY5XgDvY
source: https://drive.google.com/open?id=1NUHcLxI6hYr5WaTyXHkQMxpA8UGjp2QsDnCnY5XgDvY
menu:
    main:
        name: "Creating or Adding Encounters"
        identifier: "1NUHcLxI6hYr5WaTyXHkQMxpA8UGjp2QsDnCnY5XgDvY"
        parent: "199AEByNU97uYKqzI8RuvTDuojNy0KQvIe8uBmaL0-xo"
        weight: 1600
---
## Creating or Adding Encounters

Encounters are defined as any interaction between a patient and healthcare provider encompassing anything from a phone call to a full physical. Typically, the nurse adds these encounters and enters any documentation into the encounter as necessary (depending on the workflow of the practice and user security roles). Physicians then usually review, document and sign the encounter as described in the steps below.

The encounter can be created several different ways, depending on the workflow of the practice. Users can easily add (create) a new encounter for a patient in the patient's electronic chart from the *Summary* tab, by using the Quick Links portlet, by navigating to *Encounters* of the Medical Record chart tab, or else from the scheduler, or even from the Esign module.

### Creating/Adding Encounters from the Quick Links Portlet

To add an encounter from the Summary chart tab, users will need to access the Quick Links portlet. This portlet displays hyperlinks intended to create specific types of encounters, as needed.

![](../../external_files/49714d4c912281493c891bd3b3939474.png)

Clicking one of the Add Encounter hyperlinks from the Quick Links portlet will automatically create and open the encounter in the chart. The new encounter will automatically populate today's date/time, the location (populated from the Preferred Location set in My Settings), and the Performing Provider will populate based upon the user opening the encounter.

Users have the ability to create an encounter from saved/stored templates, as well. Clicking the Templates icon will provide a list of available templates to select from and that can be applied to the encounter being opened. Simply click the hyperlink of the named template you wish to apply and {{% system-name %}} will create, open and apply that template to the visit type indicated.

![](../../external_files/1ee2873eb083236a47d896a649417435.png)

With the encounter open, capturing data can begin immediately. Any changes to date of service, visit type, location, provider, and the like can all be managed from the Encounter section of the dynamic encounter, if necessary.

![](../../external_files/8849c1882287d6ae585ec983a24e4ae6.png)

{{% info %}}

The opened encounter is automatically set to **Current** after being created. 

![](../../external_files/18c20ee2b20c5b1e2b68f9447c0de4f4.png)

For more information on accessing encounters, see our [Encounter Summary Toolbar](encounter-summary-toolbar.html) documentation.

{{% /info %}}


### Creating/Adding Encounters from E-Chart

From *Encounters* of the Medical Records chart tab, users may click the **Add Encounter** link in the upper-right corner, to create a new encounter, as needed.

![](../../external_files/07418f157b9241b991a1a53b271d56f1.png)

Using this method *will not* automatically populate the encounter info, meaning the user will be taken to the Add Encounter screen, where the encounter details will need to be entered *manually*, prior to creating the encounter.

![](../../external_files/9eff5bdd5be2fcfa558281f88791d705.png)

**Service Date:** Date of service/encounter/exam. Manually enter the date, or utilize the icons to quickly input the relevant date.

**Location:** Location of service/encounter/exam. Choose the appropriate location from the drop-down. These options populate from the Locations Manager of the Control Panel. 

**Visit Type:** Name or type of encounter/exam. Choose the appropriate Visit Type from the drop-down. If it is not available, it may be restricted. Visit Types populate from the Encounter Types editor of the Control Panel. Contact an Implementation Specialist with any questions or issues regarding encounters.

**Performing Provider:** Name of the performing clinician. Select the performing provider from the drop-down list. If  an encounter is being created from the scheduler, this field will automatically populate with the appointment provider/physician. A **Me** button will appear if the logged-in user is a provider. This button only works for physicians. When editing an encounter, if the logged-in user is *not* a provider, the Me button will not display.

{{% note %}}

The list of Performing Providers populates and varies based on configuration and the system being used. The Value established in the Physician Realm system setting will determine the department used for populating the clinician list. For RC201302 and older, the Primary Department set in the Edit User screen, must be the same department the Physician Realm system setting is programmed to use. For RC201302 and newer, regardless of what the Primary Department is set to in the Edit User screen, the Performing Provider drop-down list will populate the users who have been set up as members of the department of the same name used for the Physician Realm system setting.

{{% /note %}}


**Link Appointment**: Link the encounter to a specific appointment. When adding or editing an encounter through the Medical Records tab, the Link Appointment drop-down lists the appointments and the visit types available for the patient. If the appointment date/time changes, the encounter service date/time will update (i.e., as long as the encounter is Open). If an appointment is canceled, the linked encounter will be deleted, as well.

**Insurance Pre-Certification**: Using the radio button, select the appropriate insurance pre-certification, if any, for the encounter.

Once all of the relevant fields have been reviewed and populated, click the **Save** button. This will create and open the encounter in the chart. The new encounter will populate the provided date/time, location, and the performing provider. Any changes to the date of service, visit type, location, provider, and the like can all be managed from the Encounter section of the dynamic encounter, if necessary.

![](../../external_files/8849c1882287d6ae585ec983a24e4ae6.png)



With the encounter open, capturing data can begin immediately.  

#### Linked Appointments and Encounters

To view appointments linked to encounters in a patient chart, users can navigate to Appointments of the Admin chart tab. By clicking the Show Encounters link from the appointments page, users can view any encounters linked to the respective appointment.

![](../../external_files/fea744b7481f829f639d269e57867bbf.png)

Once clicked, another window will open Encounters of the Medical Record chart tab. This will show any encounter(s) linked to the appointment. If there are no encounters linked to the appointment, the display will be blank. 

![](../../external_files/fe6d0cef70770fd530f3555b8ea1f487.png)

### Creating/Adding Encounters from Scheduler

As noted, encounters can be created from the *Scheduler*, as well. This is controlled by the **Show Add Encounter** user preference (My Settings). To have the Add Encounter link display on the scheduler, the Show Add Encounter setting must be set accordingly.

The Show Add Encounter user preference has three possible options:

![](../../external_files/aa78445ff391ce4342c0bc5f6a5675c4.png)

**No:** Select No to avoid displaying the Add Encounter link on the scheduler view.

**Yes:** Select Yes to display the Add Encounter link on the scheduler view.

**Use One Click:** Select Use One Click to bypass the Add Encounter confirmation screen (from the Multi View and List View scheduler screens) when using the Add Encounter link in the scheduler. When set, the user can click the Add Encounter link, and the encounter will automatically create and open, based on the preset Default Visit Type of the appointment type.

{{% note %}}

If there is no Default Visit Type set on the appointment type, then the Add Encounter confirmation screen will display, requiring a selection for Visit Type, in order for the encounter to open. Using one-step check-in also creates the encounter automatically, if the appointment type has a Default Visit Type preset. If using one-step check-in, users may not want to also utilize the one click encounter. This will avoid creating duplicate open encounters.

{{% /note %}}


With the Show Add Encounter setting enabled, users can simply click the Add Encounter link from the scheduled appointment to begin creating an encounter.

![](../../external_files/5ba7278c68fae880df40c0e512f40520.png)

{{% tip %}}

If there is an asterisk ( * ) next to the Add Encounter link, there is already an encounter open and linked to that appointment.

![](../../external_files/d99cdc480f0c06694a2e1c05b404c44d.png)



{{% /tip %}}


When adding an encounter from the Scheduler, the appointment information will automatically populate the respective fields. The date, time, location, and resource all pull in from the appointment information. 

![](../../external_files/37d4a2ba8d08252de84b9f80874375c2.png)

### Creating/Adding Encounters from E-Sign

Users have the ability to create encounters from the List View or Multi-Review of the E-Sign module, as well. In order for an encounter type to be available for creation from the E-Sign module, the encounter type must be configured with Quick Add enabled. In the Encounter Type editor, the visit type can be set up as a Quick Add encounter, which will display a quick link in the E-Sign module.

![](../../external_files/e74071d9e3ba408de9b7391aa670f110.png)

Simply click the Quick Add Encounter Link. This is any link displayed after the Open Chart quick link, uniquely named according to the encounter type. Clicking any of these from the E-Sign module will allow clinicians to quickly sign the document and link it to an encounter.

![](../../external_files/5e1285f12dc51646af4ed70b190cd78a.png)

Only adding a new encounter will sign the document and link the document to the encounter. When the Quick Add Encounter Link is clicked, the user will be taken to the encounter, and when the encounter is closed and archived, the user will be taken back to the E-Sign module. 

For information on using and navigating the encounter, be sure to check out [Working in a Visit Encounter](working-in-a-visit-encounter.html). And to learn more about closing, archiving, or rearchiving encounters, be sure to review our [Archiving/Closing/Rearchiving Encounters](archiving-closing-re-archiving-encounters.html) help documentation.







