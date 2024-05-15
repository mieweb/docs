---
id: '1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU'
title: 'Form Documents'
date: '2024-05-15T14:46:29.587Z'
version: 214
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../printing-and-print-definitions/print-chart.md'
  - '../printing-and-print-definitions/print-definitions.md'
  - 'https://system/?f=chart'
  - 'https://system/?func=scheduler#Now'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - '../scanning-and-indexing/scanning.md'
  - '../scanning-and-indexing/indexing.md'
source: 'https://drive.google.com/open?id=1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Forms are found in the Forms Library of the {{% system-name %}} system. The Forms Library is a centralized repository for businesses and offices to organize and store commonly used forms, such as HIPAA forms, registration forms, lab order forms, Superbills, H&P forms, etc. Additionally, any forms or documents received or used outside of the organization can easily be incorporated into {{% system-name %}} using WebScan. Forms are loaded into the forms library and programmatically configured by the Deployment Consultant, and once forms are loaded, they can be printed from the {{% system-name %}} system. Forms are embedded with a barcode that auto-indexes the date of service, patient name/MR number, document type name, provider, and location when scanned back into {{% system-name %}} using WebScan. The form can also be overlaid with any discrete data that are part of the permanent record including items such as allergies, medications, a problem list, patient demographics, etc.

## Add Document

There are various places from within {{% system-name %}} to print an *individual* form. To print a form document from the respective chart, find the **Add Document** link. This is found in various places, such as the chart Summary tab, the Scheduler, or within an encounter, among other places. Users can also use the **Print Chart** link to print packets of forms, depending on the established Print Definitions and/or appointment definitions. See the [Print Chart](../printing-and-print-definitions/print-chart.md) and [Print Definition](../printing-and-print-definitions/print-definitions.md) documentation for more detailed information.

Additionally, forms can be programmed to print specific information, automatically. This can improve speed and efficiency. Contact the Helpdesk for information and assistance with uploading forms and programming form variables.

To access a form from a chart, click the [E-Chart sidemenu](https://system/?f=chart), navigate to the necessary chart, and when the *Summary* tab loads, click the **Add Document** link.

![](../form-documents.assets/04f883e99f3865fd1bdcc8b17b5a3dca.png)

As noted, users can also access and print forms from the [Scheduler](https://system/?func=scheduler#Now). Locate the appropriate appointment, and click the **Add Document** link from the appointment view.

![](../form-documents.assets/60be3b15301a660d7195559d61610288.png)

To access and print a form from the *Appointments* chart tab, simply navigate to the respective chart and locate the Appointments option from the *Admin* chart tab. Users can click the **Add Document** link found in the *Options* column.

![](../form-documents.assets/d3ea60f2ee3fc19774fc437fb9cffb3a.png)

### Forms Library

When the Add Document link is clicked, the Forms Library will load. Users can choose from the list of **All Types**, or for filtering options, users may click any of the document type links, and the list will reduce to only the selected document type. A **Doc Type Search** is also available, if preferred.

![](../form-documents.assets/23071618457714009899e0c4f6fabe75.png)

To open a document/form, simply click the associated hyperlink (e.g., Form, Text, HTML, New, etc.), following the specific document being accessed.

![](../form-documents.assets/fcc15c4ae704ac5b4273893ecafebe0d.png)

{{% note %}}
The document will open a new window/tab, in either a PDF or TIFF format. Forms can render as TIFF images in Internet Explorer browsers only; however, for all other web browsers, the form image will automatically render as PDF, regardless of the Document View Format preference setting. Please contact Helpdesk if there are issues with viewing TIFF images.
{{% /note %}}

![](../form-documents.assets/7d49e6ebcd350f84411e7c4dbd6d1129.png)

{{% tip %}}
The Document View Format rendering (in PDF or TIFF) is a setting found in the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) tab of the Control Panel. This can be changed at the user level, if desired.
{{% /tip %}}

### Print Form from Chart

Once the appropriate form document has been rendered, simply click the printer icon near the top of the screen, to print the form document in context. Once the icon is clicked, the print dialog screen will open. Confirm the correct printer is selected, and ensure the printer is setup to print the correct number of pages. Once finished, the window can be closed and working can continue as before.

![](../form-documents.assets/f38d47fb72df2043dfb47e908168d3a8.png)

{{% note %}}
Users should always scan and index printed forms back into {{% system-name %}} to ensure the documents are included in the respective charts. See the [Scanning](../scanning-and-indexing/scanning.md) and [Indexing](../scanning-and-indexing/indexing.md) documents for assistance with scanning and indexing in {{% system-name %}} .
{{% /note %}}

## Automatic Upload and Pen Feature

AlternaTIFF is a web browser add-on designed to display most of the common types of TIFF image files. This plug-in is a standard when using {{% system-name %}} . One of its features is to allow the use of the computer mouse for signing documents, allowing a signature to be captured right on the screen, with the document uploading directly into {{% system-name %}} . Rather than printing the form and asking for a signature, to then reindex the document, {{% system-name %}} incorporates a more efficient and timely workflow, all thanks to a simple feature of AlternaTIFF.

Simply launch a form from the Forms Library and click the pen icon or button from the AlternaTIFF toolbar. Once the user signs the appropriate section on the form using the mouse or touchscreen, click the Upload button, also found on the toolbar. If necessary, users can click the Eraser icon or button to remove the signature and retry. If interested, clients may use a signature pad device for consent forms, prescription pick-up, records pick-up, and the like, as well.

![](../form-documents.assets/cdb8f8ec673224b783ba63602bd4c51d.png)

When presented with the confirmation prompt, users must click the **OK** button to continue uploading the document into the respective chart. Otherwise, clicking **Cancel** will bypass this step.

![](../form-documents.assets/6fc9d7832a80a33cfed366930f1ab582.png)

The form is stored in the respective chart and given a unique document ID number. The form is housed in the chart tab(s) according to the configuration of the system.

![](../form-documents.assets/1dfb6c8513fce105af8891322997a82b.png)

## On Screen Forms

As many organizations have moved away from Internet Explorer, a new feature was created to sign forms via the mouse or Topaz device. There is a tab available within the patient chart or a tab can be configured for all On Screen Forms. These form documents (PNG, Tiff) when selected, will display to allow the patient or user to sign, write or draw on. The user can then click the Upload button to load the signed document directly in the patient chart.

![](../form-documents.assets/b008ceaf9dec6b764616580b2e3006cf.png)

![](../form-documents.assets/a1f9bd7caccaa5e704e1b8fe1931561d.png)

{{% note %}}
If a mistake is made when signing but prior to uploading, click the Clear button to remove the signature.
{{% /note %}}

### Editing On Screen Forms (Second Signature)

For clients on 202309 and newer, on screen form documents (PNG, TIFF) can now be edited and written/drawn on. This allows for the patient/employee to add a signature and then a provider or other authorized user to "Edit" and add a second on screen form signature or note after the initial upload. The most current version of the document displays in the chart, however, the historical versions of the upload document are available in the document properties under the "Revisions for Document" list.

![](../form-documents.assets/504a3ef9c06ed34dfe7e50934e3dba26.png)

![](../form-documents.assets/fba54537279f91018aa25a677d3b4376.png)

![](../form-documents.assets/21bfc8865522ec14d4e2ebcd71acc5f3.png)

## File Upload

It may be necessary to upload saved files directly to a patient chart. Using the file upload option within the Add Document screen will allow for multiple documents to be loaded to a patient chart. The files can also be dragged and dropped within the upload screen for easier file loading.

To utilize the file upload feature, access the patient chart from the E-Chart side menu option. Click the Add Document link from the Summary screen.

![](../form-documents.assets/a7215fce0e8c87fd5a24f41355927179.png)

Click on the File link to access the File Upload screen

![](../form-documents.assets/b0e78b86c69692a2e4039858ad9f1705.png)

![](../form-documents.assets/c77abb2de3fc6d93b735c0ef5983e43f.png)

The following fields are available to complete for the file upload:

* Authored by: There is an autocomplete option which allows the user to narrow down the options by typing the first few characters of the name and selecting from the list that populates. There is also a dropdown option to choose the author. Or if the user is the author, the Me button will fill in the user's name for the author.
* Document Type: This field is an autocomplete which allows the user to narrow down the options by typing the first few characters of the document type and selecting from the list that populates.
* Date of Service: The date of service can be typed or the calendar option can be selected. There is also a clock icon that will assign today's date, if selected.
* Service Location: The service location is an optional field. The service location can be selected from the drop down list of configured locations.
* Subject: The Subject field is optional. This field allows users to specify what the document is about, contains, or is intended for, as an easy reference when searching for or reviewing documents within a chart.
* Encounter: The Encounter field is optional. This field is designed to link the document to an encounter from the chart. The autocomplete can be used to find the encounter or the Search button. By clicking the Search button, a pop-up window will display existing encounters for the specified chart. This initial search goes back three (3) days, resulting a list of encounters 3 days from the selected Service Date. Clicking the <em>Search within # days</em> hyperlink will perform another 3-day increment search, displaying encounters within 6 days of the Service Date indicated. Continue to click the hyperlink to continue searching further out. To select a specific encounter, click the <em>Select</em> hyperlink next to the specific encounter needing linked. Once selected, the pop-up window will close, and the encounter details will automatically be inserted into the Encounter field.
* Link to Orders: The Link to Orders field is optional. This field is designed to allow users the ability to link pending orders from the chart in context to the item being uploaded. The autocomplete can be used to find the order.
* Case: The Case field is optional. This field is designed to link a case/incident from the chart in context to the item being uploaded.
* CC: The CC field is optional. This field is designed to CC an additional recipient who should receive this document. Click the Add hyperlink to be taken to the CC fields to select the recipient and the method to complete the CC, such as fax.

To add the files, either drag and drop the files into the drag and drop space or click the Choose File button. The Choose File button will open a window to allow for selecting the files. Select the files by clicking on the checkbox for any files that are to be uploaded. Click the Upload Documents button once complete.

![](../form-documents.assets/bf87a0db603b96f2fea261931d0c6350.png)

Items uploaded successfully will display in green and display a link to the document. Clicking on the document id will display the uploaded document in the current browser tab. Clicking the arrow icon to the right of the document id will open the document in a new browser tab.

![](../form-documents.assets/74bddfd9338ea8560247d51c1c791949.png)

Unsuccessfully uploaded documents will display in red and indicate a failure reason.

![](../form-documents.assets/31b1cd787f48a93ec6c16fc7e74379c9.png)
