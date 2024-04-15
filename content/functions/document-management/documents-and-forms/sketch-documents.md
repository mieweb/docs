---
id: '1S1X4Rn0y1DMGsQ1gFUmS7yLY4Tz8URodJsou-PVZxXM'
title: 'Sketch Documents'
date: '2020-03-23T16:46:51.864Z'
version: 73
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'word-documents-cc-physicians-feature.md'
source: 'https://drive.google.com/open?id=1S1X4Rn0y1DMGsQ1gFUmS7yLY4Tz8URodJsou-PVZxXM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The  {{% system-name %}} system is designed to allow sketches to be uploaded as documents into charts, as needed. A user can sketch on a blank background or over a templated background image, and then immediately upload the image to the chart. This is particularly useful when documenting an area of an injury and a visual representation provides added context to the documentation.

## Draw a Sketch in a Chart

To create a sketch document in a chart, first navigate to the Document Library by clicking any of the **Add Document** links, found throughout the chart. Once clicked, the library will load, and the **Sketch** filter link can be selected to reduce the available documents. Selecting the Sketch filter link will show only document types that can be drawn on and uploaded as a sketch files.

![](../sketch-documents.assets/69ff24483ba3307c961733b0174e955c.png)

{{% note %}}
If a specific document type is not listed, contact the system administrator to set up the necessary document types with Sketch capabilities, from the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types).
{{% /note %}}

Select the document type needing attached and uploaded to the chart by simply clicking the Sketch link following the appropriate document name.

![](../sketch-documents.assets/c746bccf44af7baebf1c8da54deb9495.png)

Once clicked, the Add Document Properties window will open. Fill in the available fields, as appropriate.

![](../sketch-documents.assets/adcbb429ab9e043d2e8dfa3192d20993.png)

**Authored By**: Given the proper security permission, use this field to select for whom this document is being authored, or click the **Me** button if the logged-in user is the author. The logged-in user uploading the file document to the chart is considered the *Creator* and will be recorded as such in the document properties. The Authored By field is for who authored the document being uploaded.

{{% note %}}
In order to author documents for others, the user must have the Access Control **Transcribe for Others** setting set to **Yes**. If this setting is not enabled for the user, the Authored By field will not be an option.
{{% /note %}}

**Document Type**: Select the document type being uploaded and stored in the chart.

**Date of Service**: Provide the date of service for the document.

**Service Location**: Select the service location of the document.

**Subject**: Provide a free-text subject for the document. Subjects can be searched against using the Document Search report, and document subjects will always display on List View summary pages where the documents are displayed.

**Encounter**:  {{% system-name %}} allows documents to be linked to encounters, as needed. Specifying an encounter ID will link the uploaded document to the specified encounter. If the document does not need to be linked to an encounter, simply leave the field blank.

* A <strong>Search</strong> button is provided to allow for searching of specific encounter IDs for linking. Most users do not know the encounter ID number, so the search is a convenient option for searching encounter details of the chart in context.
* Click the <strong>Search</strong> button to open the <em>Select Encounter</em> window. By default, the system will search the last 3 days of encounters. If the encounter to link is found, simply click the <strong>Select</strong> link next to the specific encounter, and this will place the encounter ID and details into the <em>Encounter</em> field.
* Click the <em>Search Within [#] days</em> link to search for and display encounters occurring in increments further out, if necessary. If an encounter does not need to be linked, simply leave the encounter field blank.

    ![](../sketch-documents.assets/007d38b6bf7c9fdd8a5eb390be1c04da.png)

{{% info %}}
If the user has a current encounter set in the chart, the *Encounter* field will autofill with the current encounter ID, by default. This can be edited. If an encounter does not need to be linked, simply remove any encounter ID and details from the encounter field.
{{% /info %}}

**Link to Orders**: Like linking to encounters, Text documents can be linked to pending orders, as needed. To see pending orders, use the down arrow key (↓) on the keyboard when the cursor is in the *Link to Orders* field. Select any of the orders needing linked to the file document, and once the file is uploaded, the order(s) will automatically be marked as Complete.

**Case**: Use this field to link the document to a case. To see and select any cases/incidents associated with the chart, press the down arrow key (↓) on the keyboard when the cursor is in the *Case* field.

**CC** (**Physicians**): Using this field allows users to attach any relevant clinicians/physicians for carbon copying, which will then immediately fax or route the information to them, depending on the system setup. This feature works with an ActiveX Word control and can be read about in the [Word Documents - CC Physicians Feature](word-documents-cc-physicians-feature.md) help documentation.

**Textbox** and **Sketch**: For Sketch documents, a textbox will be available for entering relevant comments or notes as they relate to the sketch. Below the textbox is the sketch field, where either a blank background or templated background image can be seen, for sketching and notating details, according to the selected document type. When hovering over the sketch area, the cursor will turn into and function as a black pen, by default. Using the mouse, left-click and hold, to begin marking the area. Release the left-click to stop drawing, or to move to another area.

{{% note %}}
The MIE Sketch Control plugin will need to be installed for first-time use. This control allows the user to utilize the computer for sketching and uploading images.
{{% /note %}}

### Sketch Toolbar

The sketch control comes equipped with a toolbar for providing additional features designed to help with detailing sketches, as needed. The left toolbar, for instance, allows users to draw with various shapes, easily annotate, erase specific areas, as well as change the color of the pen. There are also undo and redo buttons available, a zoom feature, and an option to clear all. The toolbar across the top, on the other hand, is available for changing the pen width, as needed.

![](../sketch-documents.assets/86c6839d102b3b916f5429d290f53b98.png)

#### Pen Color

As noted, the default pen color for sketches is black, but can be changed, as needed. It is important to note that regardless of the color used, the  {{% system-name %}} system will upload and save sketch documents so the preferred colors are displayed when viewed. As for printing sketches, however, only if the printer and  {{% system-name %}} system setting is enabled to allow color printing, will the sketch actually print in color. Otherwise, with color printing disabled in the system and on the printer, the sketch will print in black/white/grayscale format, regardless of the colors used on the sketch.

To change the color of the pen, simply click the **stroke** button on the left toolbar, and a grid of color options will display. Click the preferred color on the grid and mouse over the sketch area to allow the color grid to collapse. Sketching can be performed, as needed.

![](../sketch-documents.assets/d8e44c34a21a7921080f64f9f134b33c.png)

#### Annotate

An additional feature on the left toolbar is the ability to add text annotations. This feature is often used to add a reference point (e.g., number, letter, asterisk) for detailing additional comments or notes in the textbox, above the sketch image. To add, simply click the text button (**Aa**) from the toolbar, and select the area of the sketch where the annotation needs to be placed. The system will create a text box that can be used to add text, as needed.

The text will display in the selected pen color.

![](../sketch-documents.assets/3009977190c073233f8c9e34e72f6c08.png)

#### Upload

When sketching is completed, simply click the **Upload** button found below the sketch area. This will automatically upload the sketch document into the specified chart as the selected document type. Once the page refreshes, the sketch document will be shown on screen, and users will be able to add another sketch (click the Add Document link, again) or continue working in the system, as needed.

{{% info %}}
Sketching is also available from within the encounter. Contact your Deployment Consultant to have sketch functionality configured in encounters, as needed.
{{% /info %}}

## Draw a Sketch from Encounter

The sketch control functionality can be made available in the Tests & Procedures section of an encounter, if preferred. Configuration of the necessary sketch image document type must be completed, and MIE can configure an order item sharing the same name as the document type description. When a sketch order item is configured, it utilizes a special layout to pull in the sketch image of the matching document type of the forms library.

![](../sketch-documents.assets/619cb2e5d49e4137419cd4fb8c0946eb.png)

Once the sketch is configured in the system as an order item, users can quickly select the sketch image to drop into the encounter for documenting. From the Tests & Procedures encounter section, select the appropriate sketch order item and click the **Add To Exam** button.

![](../sketch-documents.assets/2f864cdc1f5ef2c8b0feddbabc384b6a.png)

The sketch will be inserted into the encounter for drawing on as its own section.

{{% tip %}}
Mark the sketch order item as Completed, so the order does not stay on the Due List as Pending.
{{% /tip %}}

![](../sketch-documents.assets/92fd2eca4c4e45651d96e99d81e712e9.png)

## Edit/Delete a Sketch Document

Users cannot edit or erase sketch markings once the sketch has been uploaded to the chart. However, provided the proper user security permissions, users may edit the document properties fields, or even move or delete the sketch document, if necessary.
