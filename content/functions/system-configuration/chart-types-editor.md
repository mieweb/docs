---
id: '1QZKVqleCbfau8qypHvxece9sleS3_E2WJcQTQRCuLgE'
title: 'Chart Types Editor'
date: '2024-01-16T18:31:51.236Z'
version: 158
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1QZKVqleCbfau8qypHvxece9sleS3_E2WJcQTQRCuLgE'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Overview

Chart "Types" is a concept used to show different/separate chart tabs for whichever "type" of patient record you are in. This wouldn't be used for different types of patients; it's essentially used for different types of "records" like patients being registered and organizations or providers being registered or EOBs. The user only sees chart tabs that are relevant for that patient/type of record, without knowing anything about that patient/record other than his pat_id (and/or the partition(s) the patient is in).

An example is if you want to store information of a person (or perhaps equipment) who isn't a patient and the type of data isn't regular patient data.  Example: storing information on physicians that have a "chart" in {{% system-name %}} or storing information on "machines" that have a "chart" in the asset management module of {{% system-name %}} .

For {{% system-name %}} systems that do use this, chart tabs will be separated into sets by chart type as well as document types and chart records. When the user goes to a record/chart, {{% system-name %}} will look at the patient's chart type(s) and only show those tabs that correspond to those chart "types" the record/chart partition is tagged to. If there are other restrictions on chart tabs (only show this tab if the patient is female, etc) those restrictions will be honored as well. All chart tabs start out with the ‘default chart type', which is really no chart type at all. If a user is in the chart of a record with no chart type, the user will see only those chart tabs with this default chart type.

## How to Use the Chart Types Editor

Before any changes are made to chart tabs or patient/records/charts, or patient partitions, each chart tab has the default chart type (the blank option in the chart tab editor).

The Chart Types Editor tab is available in the Control Panel. Your MIE Implementer will add this if your practice will need to utilize this functionality.

![](../chart-types-editor.assets/1f684c0e24fc76f37987c0278e3c8940.png)

In order to access the Chart Types Editor tab, the user have the permission (‘Control', ‘Manage Chart Types') set to ‘Yes'.

![](../chart-types-editor.assets/d04701bc8ead6167010a8b8f182f4340.png)

Each {{% system-name %}} system starts with 0 chart types, so the first step is to follow the ‘Add Chart Types' link.

![](../chart-types-editor.assets/c7806cd265b6c17454889ea09d6f7154.png)

That takes the user to another page that displays a listedit allowing the user to add as many chart types as desired. Type in the name(s) of the Chart Types you need to create for your system, click *add button* to add multiple and when done click *SAVE* button.

![](../chart-types-editor.assets/8e32e4cb200512635aac79f22e4c2ce0.png)

Once you have saved (at least one chart type has been created) the chart types editor displays a listview with options.

![](../chart-types-editor.assets/bba99931389341143cbe6a6228cf547d.png)

## Options/Functions for Chart Types

![](../chart-types-editor.assets/d1201a369d9772424b0eeeed8767d4a3.png)

### Edit

The editing option displays a listedit that allows the user to quickly associate the chart type to multiple chart tabs. These are the tabs that a user will see when accessing a record/chart tied to this specific chart type. This *Edit* screen allows the user to edit the description of a chart type and link chart tabs, document types, appointment types, visit types, and relation types to a chart *type*.

![](../chart-types-editor.assets/eaeab53794c79a2db667983e0784b91c.png)

OR

You can also set the chart tabs to a specific chart types in the above edit screen **or** you can go to the Chart Tabs control and set chart *types* within the individual *chart tab* properties also.

![](../chart-types-editor.assets/9a4de0dca972808782708cf6b342e65e.png)

### Edit Partitions

The Edit Partitions option displays a listview that allows the user to quickly associate the chart type to a specific partition or multiple partitions. Each active partition is displayed along with the number of patients. The number of patients (records/charts) is split up into a column showing the number who have that chart type set to their records currently vs the total number of patients who are in that entire partition.

![](../chart-types-editor.assets/3e6e640a119b7adda0fdd52bf11c5841.png)

If the user has security permission (‘E-Chart', ‘Allow Unrestricted Pat Search') set to ‘Yes', these numbers will be displayed as links to listviews of these patients.

![](../chart-types-editor.assets/1f18e19cdec4761e6f0fd79a764b2122.png)

You can tag ALL patients or remove ALL patients in a partition to/from specific chart type via these links.

* <strong>Add ALL patients</strong>: this is a link that will refresh the page and every patient/chart record in that partition you selected will get tied to that chart type you are in, regardless of that patient's membership in other partitions, and regardless of the other chart types that patient may have.
* <strong>Remove ALL patients</strong>: this is a link that will refresh the page and every patient/chart record in that partition you selected will no longer be associated with that chart type you are in, regardless of that patient's membership in other partitions, and regardless of the other chart types that patient may have.

You can tag specific individual patients via the patient's record instead of the above "all in mass" links. See below pages on that tab within the patient's chart (Set Chart Type).

### Change Description

This link allows the user to quickly change the description of the chart type (the name of the chart type).

### Delete

Delete takes the user to a confirmation page that shows all chart tabs and patient/chart records that are associated with this chart type.

![](../chart-types-editor.assets/dc76bb3ce48f0c80f621ee11d322aced.png)

If the user confirms this decision, three things will happen:

1. All chart tabs that have this chart type will revert to the ‘default chart type'.
2. No patients/chart records will have that chart type any longer and <strong>no</strong> other chart types will be added to these patients to compensate for this. Any patient/chart record who no longer has any chart types will only have chart tabs of the ‘default chart type' displayed in his/her chart.
3. The chart type itself will be deleted. This operation cannot be reversed (but the type can be re-added, tabs reassociated, <em>etc</em>. by re-adding/creating a new chart type).

You can tag specific individual patients via the patient's record instead of the above "all in mass" links in the editor method. This is done via the Demographics portlet under the Chart Types section. This section allows users to "see" which chart type a specific patient/record is tagged to while in that patient/chart record.

![](../chart-types-editor.assets/0d9b6623370327e94a6536f40aa23b05.png)

Once you have Chart Types set up, you can have specific Document Types set to chart type(s). The list of doc.types that may be set to "chart types" would then be available in an indexing screen.

In this example, I may need to scan and house a service agreement document for an Audio machine. My {{% system-name %}} system uses the asset management module and could have chart named "Audio machine". So for regular patient charts I would never need to store a ‘service agreement' to them, but I do need to for my Audio machine chart that is in {{% system-name %}} .

The doc.type editor allows now for a doc.type to be set to chart type(s) if necessary.

![](../chart-types-editor.assets/6199cf8181719eff704e4be112207e44.png)

Chart Types is also a filter in the indexing module. Depending on the type of images/documents to index, you can set the Chart Type in the indexing field to help filter for document types and medical record charts to index to. If I had a batch of documents to index that were for the Audio Machine, I would set the chart type to *asset management* here in the indexing screen and the list of doc.types in the auto-complete would only show me doc.types to index to that are tied to asset management chart type. Same for the *chart* field, I would get an auto-complete of MR#'s for charts (medical records) tied to that chart type of asset management so I can find and index the document to the Audio Machine chart MR# and not a patient's chart.

![](../chart-types-editor.assets/3651149234cdc25ac22ef78ef03b4b90.png)

Note: Charts with the "Patient" chart type will see chart tabs and visit types that do not have a chart type specified. No chart type is treated as "Patient" chart type.
