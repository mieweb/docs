---
id: '1FRJl6rXtMAnjU9IXbFrWRxcvho07gnV6qMypq1E421Q'
title: 'Printing Documents'
date: '2020-03-24T15:02:35.364Z'
version: 45
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
source: 'https://drive.google.com/open?id=1FRJl6rXtMAnjU9IXbFrWRxcvho07gnV6qMypq1E421Q'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Printing documents from the {{% system-name %}} system is a simple process. The intent of this help documentation is to go over the steps for printing individual documents and full-size scanned documents, as well as some additional details, as they relate to the printing processes.

## Print an Individual Document

While in the appropriate chart, locate and open the document needing printed. Click the **Print** link, found in the upper-right corner of the document header.

![](../printing-documents.assets/9ebee05891b9e75c4a66e281ad6af394.png)

Once clicked, the Print Dialog window will open, with **Send To** *Printer* marked, by default.

![](../printing-documents.assets/48cf39f44fef0b120d4955c6345c6941.png)

Users may choose to **Print without headers** or **Use legacy print formatting**, if preferred.

**Print without headers**: This option allows users to print the contents of the document, only. No header information will be included on the printout, meaning the Doc ID, Author, Revised By, Document Type, DOS, Location, Revised Date, and Signed By information will not be displayed on the printed document. This option is only available to users with the Allow Printing Without Headers security permission set to Yes. This option is particularly useful when printing Word documents, forms, sketches, or the like.

* <strong>Print only without headers</strong>: When the <em>Print without headers</em> option is selected, another option will be made available. Selecting the Print Only Without Headers option will override the document type settings, removing <em>all</em> headers, when printing. This option is most useful for exporting PDFs for interface use.

**Use legacy print formatting**: Legacy print formatting removes most formating, leaving the document with no indentations, bullets, or the like. Selecting this option will override the Rendering Engine system setting (E-Chart, HTML Printing, Rendering Engine).

{{% tip %}}
Though users may choose to override the Rendering Engine system setting, it is important to understand the available options for the system setting (i.e., value = **0**, **1**, or **-1**). Providing the value **zero** (0) will trigger legacy printing from the rendering engine, unless a layout within the printed document calls for Webkit printing. Providing a value of **one** (1), on the other hand, will trigger Webkit printing from the rendering engine, which will print the document with formatting such as indentations, bullets, and the like. A **negative one** (-1) value will set the rendering engine to auto-detect the document layout, triggering whichever type of printing is appropriate for the document being printed. If the layout does not specify a type of printing, legacy printing will default.
{{% /tip %}}

**Printer Name**: Use this dropdown to specify the correct printer. The primary workstation printer will display, by default. However, if an alternative printer needs selected, simply use the dropdown selector to choose the correct printer.

**Priority**: The status field defaults to Normal. Users may use this field to change the order of the queued print jobs. Urgent print jobs will be printed ahead of all Normal and Low print jobs, just as any Low print jobs will be printed after all pending Urgent and Normal print jobs.

Once all of the necessary fields are addressed, click the **Print** button. Once clicked, users will be prompted to click **Print**, again, from the local print dialog window.

{{% tip %}}
Users may set the format of print documents to either PDF or TIFF, by way of the Document View Format [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) preference.
{{% /tip %}}

## Setup for Printing Full-Size Scanned Documents

Printing full-size scanned documents requires a simple adjustment in the default printing settings. To begin, locate and open the specific scanned document needing printed.

![](../printing-documents.assets/f7b776194c27e97a3dec66acd6704166.png)

Depending on the web browser used, when the document is opened, the scanned image will either appear within an AlternaTIFF workspace (e.g., IE), or when clicked, the image will appear in a viewer of a new tab/window (e.g., Chrome). The focus here is on Internet Explorer web browsers, using the AlternaTIFF control.

Right-click the grey toolbar area, just above the scanned image. Select **More Settings**.

![](../printing-documents.assets/8cb30ac3ae60bc0c004966263c6f704e.png)

Once clicked, the AltneraTIFF: More Settings dialog window will open. Ensure the **Always print full page** option is selected, and click the **OK** button.

![](../printing-documents.assets/3729042e8f57b6b6c755dcce0f4f626b.png)

{{% note %}}
This setting only needs to be done one time for each workstation, and only needs performed on workstations intending to print insurance cards, driver's licenses, or other scanned documents.
{{% /note %}}
