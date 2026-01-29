---
id: "1SLeZ_LCVcb4a6OpiLizIa-zwY9jFzjLQLtSuS2Iq14s"
title: "Vitals Tracking & Management"
date: "2025-11-11T15:02:18.803Z"
version: 234
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "../encounters/vitals-system-wide-defaults.md"
  - "https://mie.talentlms.com/shared/start/key:AOQHRKMF"
source: "https://drive.google.com/open?id=1SLeZ_LCVcb4a6OpiLizIa-zwY9jFzjLQLtSuS2Iq14s"
wikigdrive: "v2.15.30"
---

Vital signs not only assist in early detection of potential problems, they aid in the monitoring and maintenance of ongoing medical conditions. The Vital Signs layout allows {{% system-name %}} users to view and add measurements of a patient's essential body functions. Whether it is from within the Vitals chart tab or within the patient's encounter, the body's most basic functions can be measured and recorded, quickly and easily.

## Adding Vitals via Encounter Section

To add vitals to a patient's encounter, navigate to the **Objective** section of the encounter. By default, the last 5 most recent sets of dated vitals will display as a visual in the section.

To add a set of vitals, simply open the **Vitals** subsection by clicking anywhere in the Vitals grey section title or by clicking the pencil
![](./vitals-tracking-and-management.assets/208e44c784d7d7e1fd81d8d02416c996.png)
icon, located on the right of the section title. The Vitals section will expand open. Again, the 5 last most recent set of dated vitals display but now at the bottom of the expanded Vitals section.

![](./vitals-tracking-and-management.assets/79ddb5a7da8b131f29eb9db1ba4853d9.png)

With the Vitals section expanded, simply fill in the appropriate fields and use the dropdowns, adding comments, if necessary.

The observation **Date/Time** will automatically populate today's date. If the information needs changed or made current, utilize the appropriate buttons, located to the right of the entry fields or free text.

Use your keyboard **tab key** to advance through the vitals fields to enter in data.

When adding Height values, {{% system-name %}} will automatically convert into inches, when feet and inches are entered with at least a prime mark (5'5 will convert to 65 inches), after tabbing to the next field.

## Range Alerts

When entering measurements, any blood pressure, respiratory, pulse, or temperature values falling out of range will produce an on-screen alert, giving the choice to modify.

![](./vitals-tracking-and-management.assets/14d9efea99a4678b9483a16796a5f51f.png)

Additionally, if BMI falls outside of a healthy range, the system will automatically prompt a need for patient education and a potential Dietary Consultation. Clicking **Yes** to the pop-up alert will allow the system to add the Dietary Consultation order to the visit encounter automatically.

![](./vitals-tracking-and-management.assets/3e8f6709b73e9cd6c155cb19b69e0ed7.png)

After all vitals have been entered and comments added where necessary, simply click the **Next** button or **Save** button.

![](./vitals-tracking-and-management.assets/5b1b43062f0def6f489f81e930bef64b.png)

NOTE: To save another set of vitals, simply save the first set of vitals in the section, then expand open the Vitals section back up and set the date/time to record the second set of vitals.

## Automated Default Vital Field Values

When keying in vitals within the Vitals encounter section, or within the stand alone Vital Signs chart tab, certain fields are configured to automatically default, but can be changed manually by the user when documenting vitals data.

### Default Vitals Fields

The following 5 fields in the vitals section will default to a selection after keying in data for the vital:

- <strong>BP Site:</strong> defaults to Left Arm system wide if a Blood Pressure is keyed in
- <strong>BP Position:</strong> defaults to Sitting system wide if a Blood Pressure is keyed in
- <strong>Pulse Regularity:</strong> defaults to Regular system wide if a Pulse is keyed in
- <strong>Pulse Site:</strong> defaults to Radial system wide if a Pulse is keyed in
- <strong>Exertion:</strong> defaults to Resting system wide if a Pulse is keyed in

Users can always manually change the selection within the field's drop-down when needed.

![](./vitals-tracking-and-management.assets/bf5a7e874d5139989104c5d864901319.png)

### Changing System Wide Vital Field Defaults

The default(s) for the above 5 fields in the vitals section can be configured to default to a different discrete selection system wide. Each default can be configured within the Observation Codes editor of the Control Panel. NOTE: Configuring a different default will also change it system wide. Please refer to the separate guide [Vitals System Wide Defaults](../encounters/vitals-system-wide-defaults.md#changing-system-wide-vital-field-defaults) for configuration help.

## Adding Vitals via Chart Tab

To add vitals to a chart without being in an encounter, utilize the pencil icon from the Vital Signs portlet found within the Summary dashboard chart tab.

![](./vitals-tracking-and-management.assets/914e46783c1c58411e6ea20700f70af4.png)

Then, within the **Vital Signs** chart tab of the chart, Vital Signs entry fields are available, as well as a visual of previous recorded vitals for the chart.

![](./vitals-tracking-and-management.assets/c6850a4d93eabc4b19b19c47772bee4a.png)

Click the SUBMIT button to save the set of vitals data.

## Recorded Vitals with an Asterisk\*

Recorded vitals data that include comments will display with an asterisk ( \* ) next to the recorded value.

![](./vitals-tracking-and-management.assets/b02299f058dea7f960d5833016ae500d.png)

Use your cursor and hover over **any** value (with or without an asterisk) to see more details. If a value has an asterisk, the hover details will display the comment associated with the recorded value.

![](./vitals-tracking-and-management.assets/6b288de755776560c4a0c1ce33ca0b03.png)

Also, when hovering over values, alternative measurement units of the results will display. In this example, inches is converted into centimeters within the hover details of the value.

![](./vitals-tracking-and-management.assets/28e280e672c5d3746391b453873879df.png)

## English vs Metrics Measurement Units

The vital signs unit of measurement will default as English, unless your My Settings preference for preferred unit system has been changed to use metric.

![](./vitals-tracking-and-management.assets/d3bae6c62b91f275f6f1a30146183802.png)

But remember, hovering over any recorded vital sign will also display (in the hover details) the alternate converted unit of measurement.

## Edit or Delete Recorded Vitals

Vital signs store as individual observations in the chart and system. If you need to edit an existing, recorded vital, click on the specific recorded value you wish to edit or alter. Currently, editing or deleting vitals is done individually. In this example, we will click on the weight value recorded on 2/2/2016.

![](./vitals-tracking-and-management.assets/c8782b4ed27d42d55362a359075225da.png)

Once you click on a recorded value within the chart, the _Edit Observation_ screen will display. Here you can edit any data on the existing recorded value for the vital sign. Click the Submit button after editing the record. The system will display a message that it has successfully updated the observation.

You can also _Delete_ the existing recorded value from the vitals of the chart if you have security permission. Simply click the Delete button on the record and the system will ask you to confirm you really wish to delete the observation record.

![](./vitals-tracking-and-management.assets/4dfd3499438b688fd62cb8cf7a208a4c.png)

## Device Interface

{{% system-name %}} has the capability to interface with a vitals device such as Welch Allyn Spot Vital Signs Monitor.

The Vitals data entry section in the stand alone Vital Signs chart tab allows for Device or Manual entry. By default, the Vitals data entry screen defaults to the Manual method. However, with an established interface, simply click the **Device** hyperlink within the **Vitals From:** area.

Then select the device, scan the device and can refresh values using the buttons at the bottom of the Device entry screen method.

![](./vitals-tracking-and-management.assets/76662e523261d3529c5675d731fc6c47.png)

## Learning Management System

To learn more about Vitals Tracking & Management, follow the link below to the Learning Management System course:

- [Vitals](https://mie.talentlms.com/shared/start/key:AOQHRKMF)
