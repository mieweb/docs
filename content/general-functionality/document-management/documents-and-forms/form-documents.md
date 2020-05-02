---
title: "Form Documents"
date: 2020-03-23T16:56:28.858Z
url: "general-functionality/document-management/documents-and-forms/form-documents.html"
author: Jeremia Ploor
version: 39
id: 1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU
source: https://drive.google.com/open?id=1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU
menu:
    main:
        name: "Form Documents"
        identifier: "1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU"
        parent: "1F21zNiYq703LscR9rtGl8pZLjtxvozONvXhkaZFefEI"
        weight: 460
---
Forms are found in the Forms Library of the {{% system-name %}} system. The Forms Library is a centralized repository for businesses and offices to organize and store commonly used forms, such as HIPAA forms, registration forms, lab order forms, Superbills, H&P forms, etc. Additionally, any forms or documents received or used outside of the organization can easily be incorporated into {{% system-name %}} using WebScan. Forms are loaded into the forms library and programmatically configured by the Deployment Consultant, and once forms are loaded, they can be printed from the {{% system-name %}} system. Forms are embedded with a barcode that auto-indexes the date of service, patient name/MR number, document type name, provider, and location when scanned back into {{% system-name %}} using WebScan. The form can also be overlaid with any discrete data that are part of the permanent record including items such as allergies, medications, a problem list, patient demographics, etc.

## Add Document

There are various places from within {{% system-name %}} to print an *individual* form. To print a form document from the respective chart, find the **Add Document** link. This is found in various places, such as the chart Summary tab, the Scheduler, or within an encounter, among other places. Users can also use the **Print Chart** link to print packets of forms, depending on the established Print Definitions and/or appointment definitions. See the [Print Chart](../printing-and-print-definitions/print-chart.html) and [Print Definition](../printing-and-print-definitions/print-definitions.html) documentation for more detailed information.

Additionally, forms can be programmed to print specific information, automatically. This can improve speed and efficiency. Contact the Helpdesk for information and assistance with uploading forms and programming form variables.

To access a form from a chart, click the [E-Chart sidemenu](https://system/?f=chart), navigate to the necessary chart, and when the *Summary* tab loads, click the **Add Document** link.

![](../../../external_files/f972b9f819ef5087af49dbbbc2aa6e33.png)

As noted, users can also access and print forms from the [Scheduler](https://system/?func=scheduler#Now). Locate the appropriate appointment, and click the **Add Document** link from the appointment view.

![](../../../external_files/77c32ec01c6520bdddae41484d423982.png)

To access and print a form from the *Appointments* chart tab, simply navigate to the respective chart and locate the Appointments option from the *Admin* chart tab. Users can click the **Add Document** link found in the *Options* column.

![](../../../external_files/aa1865c36d74e0f09ac972e349cfd6b0.png)

### Forms Library

When the Add Document link is clicked, the Forms Library will load. Users can choose from the list of **All Types**, or for filtering options, users may click any of the document type links, and the list will reduce to only the selected document type. A **Doc Type Search** is also available, if preferred.

![](../../../external_files/a0f5d61235e67e9bf1d3b605b7db3fda.png)

To open a document/form, simply click the associated hyperlink (e.g., Form, Text, HTML, New, etc.), following the specific document being accessed.

![](../../../external_files/f1537d999cbd2f375e733dd5857a615b.png)

{{% note %}}

The document will open a new window/tab, in either a PDF or TIFF format. Forms can render as TIFF images in Internet Explorer browsers only; however, for all other web browsers, the form image will automatically render as PDF, regardless of the Document View Format preference setting. Please contact Helpdesk if there are issues with viewing TIFF images.

{{% /note %}}


![](../../../external_files/dec6425b46ae6d641d88de4d0038c61e.png)
{{% tip %}}

The Document View Format rendering (in PDF or TIFF) is a setting found in the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) tab of the Control Panel. This can be changed at the user level, if desired.

{{% /tip %}}


### Print Form from Chart

Once the appropriate form document has been rendered, simply click the printer icon near the top of the screen, to print the form document in context. Once the icon is clicked, the print dialog screen will open. Confirm the correct printer is selected, and ensure the printer is setup to print the correct number of pages. Once finished, the window can be closed and working can continue as before.

![](../../../external_files/d106a7acc3ee936a3c2c06f2fe48fe6f.png)

{{% note %}}

Users should always scan and index printed forms back into {{% system-name %}} to ensure the documents are included in the respective charts. See the [Scanning](../scanning-and-indexing/scanning.html) and [Indexing](../scanning-and-indexing/indexing.html) documents for assistance with scanning and indexing in {{% system-name %}} .

{{% /note %}}


## Automatic Upload and Pen Feature

AlternaTIFF is a web browser add-on designed to display most of the common types of TIFF image files. This plug-in is a standard when using {{% system-name %}} . One of its features is to allow the use of the computer mouse for signing documents, allowing a signature to be captured right on the screen, with the document uploading directly into {{% system-name %}} . Rather than printing the form and asking for a signature, to then reindex the document, {{% system-name %}} incorporates a more efficient and timely workflow, all thanks to a simple feature of AlternaTIFF.

Simply launch a form from the Forms Library and click the pen icon or button from the AlternaTIFF toolbar. Once the user signs the appropriate section on the form using the mouse or touchscreen, click the Upload button, also found on the toolbar. If necessary, users can click the Eraser icon or button to remove the signature and retry. If interested, clients may use a signature pad device for consent forms, prescription pick-up, records pick-up, and the like, as well.

![](../../../external_files/7c773431235334b1aadd4ea6ff80226f.png)

When presented with the confirmation prompt, users must click the **OK** button to continue uploading the document into the respective chart. Otherwise, clicking **Cancel** will bypass this step.

![](../../../external_files/7245f14393a6289e29765e13c9b821a4.png)

The form is stored in the respective chart and given a unique document ID number. The form is housed in the chart tab(s) according to the configuration of the system.

![](../../../external_files/5c61923b789cb50eed7449beba2faa92.png)

