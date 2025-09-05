---
id: '1BQ8R70m6Y-4btQLjdwkRyQXfjh3i3BoGIKd5wV_a0TM'
title: 'Libraries'
date: '2024-12-17T17:47:26.394Z'
version: 103
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/encounters/copy-from-previous-exam/'
source: 'https://drive.google.com/open?id=1BQ8R70m6Y-4btQLjdwkRyQXfjh3i3BoGIKd5wV_a0TM'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
Libraries can be created to build Quick Lists for providers or quick prescribing lists. Libraries do not come preconfigured, but can be configured and maintained by System Administrator and authorized users. Libraries can be configured and edited in the **Reference** tab under the **Control Panel**.

## Create a Library

To create a new library, click the **Add Library** link in the upper right hand corner of the module.

![](../libraries.assets/e1a68955e491a054ce94b3d25e72aeab.png)

Enter the **Name** for the library, then click the **Add New** button. The library can be named whatever the user likes. Typically, the library is named after the user (ex: Butler), group of users the library will be utilized by (ex: Internal Medicine), or even something more specific like a type of visit (ex: Injury/Illness). It is recommended to enter an * at the beginning of each library name to make it searchable.

![](../libraries.assets/18e6c353cc470cdbf5de4668a31388d3.png)

After adding the library name, a Library Chart and encounter will open. All Library charts will have the last name of "**Library**" and be issued a MRN with **LIB** partition chart number. The Demographics encounter section will display the library name. If the user forgets to add the * prior to the library name, the Demographics encounter section can be opened and the ***** added here. Use the Library chart to enter a Smart Plan and/or add items to any encounter Quick List.

![](../libraries.assets/6315dc03bf3041cc219eaf16febeaf2f.png)

For example, a Smart Plan has been entered in the Butler - Diabetic library. The Smart Plan orders a HgbA1C today, a Diabetic eye exam and starts an order for Humalog KwikPens.

![](../libraries.assets/dd0fcf0148556bf95a4e81d45511b577.png)

## Use in Encounters

### Set Library

Click the Set Library icon in the encounter header to open the Set Library dialog box. All systems come with a Default Library. Click the drop down box to view and select a different library. Users may also click the Edit Library link after selecting a library to go directly to the library chart and make any changes or updates.

![](../libraries.assets/3567379eca645ef63a78be40a54a5ade.png)

### Copy Library Templates

When in an encounter, select the encounter **Copy** icon located in the encounter header to view a list of Libraries and Existing Visit information.  For more information on using Existing Visit lists, see [Copy from Previous Exam](https://docs.enterprisehealth.com/functions/encounters/copy-from-previous-exam/). Users do not need to set their library to copy templates.

![](../libraries.assets/23961f715c8f540d040eb4f205ad7118.png)

As Library lists can become quite long, use the Search Libraries box to search for a library. Click the **COPY** link to copy data from the library to the current encounter. Click the **box with arrow** icon to open the library chart to make edits or updates to the Library itself.

![](../libraries.assets/120520d92e02fa18cca3037560d33c79.png)

Once the library has been copied to the encounter, the library data will populate the current patient's chart.

**Note**: Encounter sections are not automatically added to the encounter when using the copy libraries feature. For example, if the Smart Plan encounter section is configured in the Library, but the section is not present in the encounter at the time the library is copied, the Smart Plan section is not automatically added to the encounter. The section must be added manually. The Smart Plan data will be copied to the encounter even though the section is not present, but the data isn't viewable until the section has been added.

![](../libraries.assets/33c24696338afe288d1c501e087b1a3c.png)

## Create an Rx Library

Click the **Add Rx Library** link on the right hand side of the Libraries module.

Enter the name of the Rx Library in the **Library Name** field. Select the **Copy Default** check box to copy the system default as the basis for library content, then click **Save** to save the Library name.

The Library Name is free text and can be named anything the user would like.

![](../libraries.assets/f17ba1e682c5ce8b8258f8706bb1667d.png)

## Library Options

Users can Edit the library name, copy the library to create another or Delete a Library from the Libraries Module.

### Edit

Click the **Edit** link in the** Options** column to edit the **Library Name** and **Save**.

![](../libraries.assets/11b763d1e3e7ae33be69d5c088557c0c.png)

### Copy

Click the **Copy** link in the **Options** column to copy the existing library and create a new library. Enter the new library name in the **Library Name** field, then **Save**.

![](../libraries.assets/ab432f77168bcea98674953b2abe8e39.png)

### Delete

Click the **Delete** link in the **Options** column to delete a library. Users will be asked to click the **Confirm** button before the library will actually be deleted.

![](../libraries.assets/a99f32c2b221da8e74c48e939b857257.png)
