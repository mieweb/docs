---
id: '1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU'
title: 'Form Documents'
date: '2020-03-23T16:56:28.858Z'
version: 90
lastAuthor: ''
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
wikigdrive: '8934ab392b82c3a1d5a8ae9fb7795d99e93c12ca'
menu:
  main:
    name: 'Form Documents'
    identifier: '1STg1IboQXC3rewUndw-9JrXgCW9svnyvZcdBbkrFBNU'
    parent: '1F21zNiYq703LscR9rtGl8pZLjtxvozONvXhkaZFefEI'
    weight: 460
---
Forms are found in the Forms Library of the {{% system-name %}} system. The Forms Library is a centralized repository for businesses and offices to organize and store commonly used forms, such as HIPAA forms, registration forms, lab order forms, Superbills, H&P forms, etc. Additionally, any forms or documents received or used outside of the organization can easily be incorporated into {{% system-name %}} using WebScan. Forms are loaded into the forms library and programmatically configured by the Deployment Consultant, and once forms are loaded, they can be printed from the {{% system-name %}} system. Forms are embedded with a barcode that auto-indexes the date of service, patient name/MR number, document type name, provider, and location when scanned back into {{% system-name %}} using WebScan. The form can also be overlaid with any discrete data that are part of the permanent record including items such as allergies, medications, a problem list, patient demographics, etc.
  
## Add Document  
  
There are various places from within {{% system-name %}} to print an *individual* form. To print a form document from the respective chart, find the **Add Document** link. This is found in various places, such as the chart Summary tab, the Scheduler, or within an encounter, among other places. Users can also use the **Print Chart** link to print packets of forms, depending on the established Print Definitions and/or appointment definitions. See the [Print Chart](../printing-and-print-definitions/print-chart.md) and [Print Definition](../printing-and-print-definitions/print-definitions.md) documentation for more detailed information.  
Additionally, forms can be programmed to print specific information, automatically. This can improve speed and efficiency. Contact the Helpdesk for information and assistance with uploading forms and programming form variables.  
To access a form from a chart, click the [E-Chart sidemenu](https://system/?f=chart), navigate to the necessary chart, and when the *Summary* tab loads, click the **Add Document** link.
  
![](../form-documents.assets/10000201000004A7000001483F829FEECC15DE35.png)  

As noted, users can also access and print forms from the [Scheduler](https://system/?func=scheduler#Now). Locate the appropriate appointment, and click the **Add Document** link from the appointment view.
  
![](../form-documents.assets/10000201000004BE0000017D09169E0FC42A71CA.png)  

To access and print a form from the *Appointments* chart tab, simply navigate to the respective chart and locate the Appointments option from the *Admin* chart tab. Users can click the **Add Document** link found in the *Options* column.
  
![](../form-documents.assets/100002010000049F00000117CD7DFE38D44290D1.png)  

  
### Forms Library  
  
When the Add Document link is clicked, the Forms Library will load. Users can choose from the list of **All Types**, or for filtering options, users may click any of the document type links, and the list will reduce to only the selected document type. A **Doc Type Search** is also available, if preferred.
  
![](../form-documents.assets/1000020100000494000000FE85AAFA0AE8C4E3C7.png)  

To open a document/form, simply click the associated hyperlink (e.g., Form, Text, HTML, New, etc.), following the specific document being accessed.
  
![](../form-documents.assets/1000020100000494000000FEA7F0ABC9DB7103C4.png)  

{{% note %}}

The document will open a new window/tab, in either a PDF or TIFF format. Forms can render as TIFF images in Internet Explorer browsers only; however, for all other web browsers, the form image will automatically render as PDF, regardless of the Document View Format preference setting. Please contact Helpdesk if there are issues with viewing TIFF images.
{{% /note %}}
  
![](../form-documents.assets/10000201000005320000016EE9D90D027F39BC4E.png)  

{{% tip %}}

The Document View Format rendering (in PDF or TIFF) is a setting found in the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) tab of the Control Panel. This can be changed at the user level, if desired.
{{% /tip %}}
  
### Print Form from Chart  

Once the appropriate form document has been rendered, simply click the printer icon near the top of the screen, to print the form document in context. Once the icon is clicked, the print dialog screen will open. Confirm the correct printer is selected, and ensure the printer is setup to print the correct number of pages. Once finished, the window can be closed and working can continue as before.
  
![](../form-documents.assets/10000201000004040000014A2A2C96008A266777.png)  

{{% note %}}

Users should always scan and index printed forms back into {{% system-name %}} to ensure the documents are included in the respective charts. See the [Scanning](../scanning-and-indexing/scanning.md) and [Indexing](../scanning-and-indexing/indexing.md) documents for assistance with scanning and indexing in {{% system-name %}} .
{{% /note %}}
  
## Automatic Upload and Pen Feature  

AlternaTIFF is a web browser add-on designed to display most of the common types of TIFF image files. This plug-in is a standard when using {{% system-name %}} . One of its features is to allow the use of the computer mouse for signing documents, allowing a signature to be captured right on the screen, with the document uploading directly into {{% system-name %}} . Rather than printing the form and asking for a signature, to then reindex the document, {{% system-name %}} incorporates a more efficient and timely workflow, all thanks to a simple feature of AlternaTIFF.
Simply launch a form from the Forms Library and click the pen icon or button from the AlternaTIFF toolbar. Once the user signs the appropriate section on the form using the mouse or touchscreen, click the Upload button, also found on the toolbar. If necessary, users can click the Eraser icon or button to remove the signature and retry. If interested, clients may use a signature pad device for consent forms, prescription pick-up, records pick-up, and the like, as well.
  
![](../form-documents.assets/10000201000004040000014AF108513A49796B8D.png)  

When presented with the confirmation prompt, users must click the **OK** button to continue uploading the document into the respective chart. Otherwise, clicking **Cancel** will bypass this step.
  
![](../form-documents.assets/10000201000001D6000000D57344E4F36A7192AF.png)  

The form is stored in the respective chart and given a unique document ID number. The form is housed in the chart tab(s) according to the configuration of the system.
  
![](../form-documents.assets/100002010000049E00000166551F2B913B4C604A.png)  

