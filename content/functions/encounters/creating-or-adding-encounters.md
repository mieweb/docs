---
id: '1NUHcLxI6hYr5WaTyXHkQMxpA8UGjp2QsDnCnY5XgDvY'
title: 'Creating or Adding Encounters'
date: '2020-03-13T15:01:30.440Z'
version: 91
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'encounter-summary-toolbar.md'
  - 'working-in-a-visit-encounter.md'
  - 'archiving-closing-re-archiving-encounters.md'
source: 'https://drive.google.com/open?id=1NUHcLxI6hYr5WaTyXHkQMxpA8UGjp2QsDnCnY5XgDvY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Creating or Adding Encounters

Encounters are defined as any interaction between a patient and healthcare provider encompassing anything from a phone call to a full physical. Typically, the nurse adds these encounters and enters any documentation into the encounter as necessary (depending on the workflow of the practice and user security roles). Physicians then usually review, document and sign the encounter as described in the steps below.

The encounter can be created several different ways, depending on the workflow of the practice. Users can easily add (create) a new encounter for a patient in the patient's electronic chart from the *Summary* tab, by using the Quick Links portlet, by navigating to *Encounters* of the Medical Record chart tab, or else from the scheduler, or even from the Esign module.

### Creating/Adding Encounters from the Quick Links Portlet

To add an encounter from the Summary chart tab, users will need to access the Quick Links portlet. This portlet displays hyperlinks intended to create specific types of encounters, as needed.

![](../creating-or-adding-encounters.assets/9703615f72993ce737b571afe1909612.png)

Clicking one of the Add Encounter hyperlinks from the Quick Links portlet will automatically create and open the encounter in the chart. The new encounter will automatically populate today's date/time, the location (populated from the Preferred Location set in My Settings), and the Performing Provider will populate based upon the user opening the encounter.

Users have the ability to create an encounter from saved/stored templates, as well. Clicking the Templates icon will provide a list of available templates to select from and that can be applied to the encounter being opened. Simply click the hyperlink of the named template you wish to apply and {{% system-name %}} will create, open and apply that template to the visit type indicated.

![](../creating-or-adding-encounters.assets/a692a03e58533e5381d13d9e7d465fe9.png)

With the encounter open, capturing data can begin immediately. Any changes to date of service, visit type, location, provider, and the like can all be managed from the Encounter section of the dynamic encounter, if necessary.

![](../creating-or-adding-encounters.assets/cbb19065dd12289e276d1bad429891ea.png)

{{% info %}}
The opened encounter is automatically set to **Current** after being created.

![](../creating-or-adding-encounters.assets/d7731bbca2f1151b995cb276b344e7df.png)

For more information on accessing encounters, see our [Encounter Summary Toolbar](encounter-summary-toolbar.md) documentation.
{{% /info %}}

### Creating/Adding Encounters from E-Chart

From *Encounters* of the Medical Records chart tab, users may click the **Add Encounter** link in the upper-right corner, to create a new encounter, as needed.

![](../creating-or-adding-encounters.assets/e5bdff1766b659645648097bcccf93c4.png)

Using this method *will not* automatically populate the encounter info, meaning the user will be taken to the Add Encounter screen, where the encounter details will need to be entered *manually*, prior to creating the encounter.

![](../creating-or-adding-encounters.assets/0426d8d98c4ae6fd55d29ca5b58f8b4f.png)

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

![](../creating-or-adding-encounters.assets/cbb19065dd12289e276d1bad429891ea.png)

With the encounter open, capturing data can begin immediately.

#### Linked Appointments and Encounters

To view appointments linked to encounters in a patient chart, users can navigate to Appointments of the Admin chart tab. By clicking the Show Encounters link from the appointments page, users can view any encounters linked to the respective appointment.

![](../creating-or-adding-encounters.assets/74aca3218d61edfc56395b02d6f80416.png)

Once clicked, another window will open Encounters of the Medical Record chart tab. This will show any encounter(s) linked to the appointment. If there are no encounters linked to the appointment, the display will be blank.

![](../creating-or-adding-encounters.assets/19ff5e96ddbace9ef2659cec52a74e41.png)

### Creating/Adding Encounters from Scheduler

As noted, encounters can be created from the *Scheduler*, as well. This is controlled by the **Show Add Encounter** user preference (My Settings). To have the Add Encounter link display on the scheduler, the Show Add Encounter setting must be set accordingly.

The Show Add Encounter user preference has three possible options:

![](../creating-or-adding-encounters.assets/908c0e9bef91fb4f85a09dfa556df991.png)

**No:** Select No to avoid displaying the Add Encounter link on the scheduler view.

**Yes:** Select Yes to display the Add Encounter link on the scheduler view.

**Use One Click:** Select Use One Click to bypass the Add Encounter confirmation screen (from the Multi View and List View scheduler screens) when using the Add Encounter link in the scheduler. When set, the user can click the Add Encounter link, and the encounter will automatically create and open, based on the preset Default Visit Type of the appointment type.

{{% note %}}
If there is no Default Visit Type set on the appointment type, then the Add Encounter confirmation screen will display, requiring a selection for Visit Type, in order for the encounter to open. Using one-step check-in also creates the encounter automatically, if the appointment type has a Default Visit Type preset. If using one-step check-in, users may not want to also utilize the one click encounter. This will avoid creating duplicate open encounters.
{{% /note %}}

With the Show Add Encounter setting enabled, users can simply click the Add Encounter link from the scheduled appointment to begin creating an encounter.

![](../creating-or-adding-encounters.assets/16b8ab102e6f6a74b3f0d96b4a7eed38.png)

{{% tip %}}
If there is an asterisk ( * ) next to the Add Encounter link, there is already an encounter open and linked to that appointment.

![](../creating-or-adding-encounters.assets/33ab1826e3f04dc07ed4f18bbb1a2982.png)


{{% /tip %}}

When adding an encounter from the Scheduler, the appointment information will automatically populate the respective fields. The date, time, location, and resource all pull in from the appointment information.

![](../creating-or-adding-encounters.assets/e7643fea9b499ced9cfe3e30c089cc98.png)

### Creating/Adding Encounters from E-Sign

Users have the ability to create encounters from the List View or Multi-Review of the E-Sign module, as well. In order for an encounter type to be available for creation from the E-Sign module, the encounter type must be configured with Quick Add enabled. In the Encounter Type editor, the visit type can be set up as a Quick Add encounter, which will display a quick link in the E-Sign module.

![](../creating-or-adding-encounters.assets/077f963aa05657dddb384916744fac64.png)

Simply click the Quick Add Encounter Link. This is any link displayed after the Open Chart quick link, uniquely named according to the encounter type. Clicking any of these from the E-Sign module will allow clinicians to quickly sign the document and link it to an encounter.

![](../creating-or-adding-encounters.assets/2cc238514740f4f2fb008bdf5d9a1075.png)

Only adding a new encounter will sign the document and link the document to the encounter. When the Quick Add Encounter Link is clicked, the user will be taken to the encounter, and when the encounter is closed and archived, the user will be taken back to the E-Sign module.

For information on using and navigating the encounter, be sure to check out [Working in a Visit Encounter](working-in-a-visit-encounter.md). And to learn more about closing, archiving, or rearchiving encounters, be sure to review our [Archiving/Closing/Rearchiving Encounters](archiving-closing-re-archiving-encounters.md) help documentation.
