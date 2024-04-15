---
id: '10iTI1XYCr4psVflBlwJHnxnPKKcb3I64Yrq6LviXvD8'
title: 'Print Chart'
date: '2020-03-09T17:46:39.608Z'
version: 53
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions'
  - 'print-definitions.md'
  - 'https://system/?f=chart'
  - 'printing-documents.md'
  - '../../fax-manager/faxing-documents.md'
  - 'https://system/?func=scheduler&s=apttypes'
  - 'https://system/?func=scheduler#Now'
source: 'https://drive.google.com/open?id=10iTI1XYCr4psVflBlwJHnxnPKKcb3I64Yrq6LviXvD8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Within every chart, there are several quick links available. One of these quick links is the **Print Chart** link, which allows users to fax or print pre-established or configured print definitions from the Scheduler, the Appointments chart tab, or from within the individual's E-Chart. In other words, using the Print Chart link provides users a way to print or fax predefined groupings of documents, forms, layouts, or the like, so that any specific packets of information, or stored documents, may easily be provided via fax, or else printed and provided to a performing facility or a patient, as needed. Print definitions can include individual documents or certain forms, multiple-page packets, or even chart information, such as a medication summary or a list of immunizations.

The print definitions used for the Print Chart functionality can be set up using the [Print Definition editor](https://system/?f=chart&s=printdefedit&tabmodule=admin&tabselect=Print+Definitions) of the **Control Panel**. Here, users with the appropriate security permissions may define the necessary print definitions and group the various types of documents, forms, and/or chart information needed for intake workflows, scheduled appointments, specific procedures, etc. These print definitions, can then be used to reduce costs and streamline workflows and communication, all by way of reducing unnecessary printing and simplifying the processes involved with potentially necessary printing.

For more information on how print definitions can be configured, see the [Print Definitions](print-definitions.md) help documentation.

## Print Chart from E-Chart

After navigating to a specific chart from the [E-Chart module](https://system/?f=chart), users will find various places with the **Print Chart** link available. Clicking any of these Print Chart links will allow users to select and render a specific print definition, as needed.

![](../print-chart.assets/06dfc2003ca76c88b7bd5e687df9a34e.png)

Once clicked, the Print Chart dialog window will open. There are three sections to consider, with various fields and options available in each. Review the information below, and use the Print Chart dialog window, accordingly.

![](../print-chart.assets/78a68c7140b52bdae847c8f3a696f9e5.png)

**Print Definition**: The Print Definition drop-down lists the print definitions programmed from the Print Definition editor of the Control Panel. Any print definitions restricted from the user will not be displayed in the drop-down selector. The appropriate print definition must be selected when printing or faxing.

**Definition Alert**: This field will appear when a selected print definition has been configured with an alert. Be sure to review any alerts that may appear when selecting a print definition.

**Comment**: The Comment field can be used to add a comment to a fax coversheet, or when printing, the comment will be stored with the history of the print job details. However, when using a Records Release print definition, the Comment field must be used to provide a reason for the Records Release.

**Range Start Date**: This is an optional field. Users may provide a start date/time range filter of the documents included in the selected print definitions.

**Range End Date**: This is an optional field. Users may provide an end date/time range filter of the documents included in the selected print definitions.

![](../print-chart.assets/b31aa3ed76aab46d6ad6ca72bd104730.png)

**Print without headers**: This option is particularly useful when printing Word documents, forms, sketches, and the like, and it is only available to users with the Allow Printing Without Headers security permission set to Yes. When selected, no header information will be included on the printout, meaning the Doc ID, Author, Revised By, Document Type, DOS, Location, Revised Date, and Signed By information will not be displayed on the printed document. Users lacking the security permission will not see the *Print without headers*option, and all printed/faxed documents will include the patient summary header.

![](../print-chart.assets/e276118b383c570e22d8bf84ca7abce3.png)

{{% note %}}
When the **Print without headers** option is selected, another option will be made available–**Print Only Without Headers**. Selecting the Print Only Without Headers option will override the document type settings, removing *all* headers, when printing. This option is most useful for exporting PDFs for interface use.
{{% /note %}}

**Print one document per page**: This option allows users to print each document of the print definition on a separate page. This is particularly helpful when printing text entry notes, which tend to run together on a page.

**Print documents that have been Locked**: Some print definitions may have locked documents associated with them. When the user has the necessary security permission and this option is selected, the print definition will include the locked document(s) when printing/faxing.

**Print only documents that have NOT been printed**: Selecting this option will ensure only those documents not included previously will be rendered from the print definition when used again. This will reduce waste by printing only those things that have not been printed or rendered before.

**Use legacy print formatting**: By default, the Enterprise Health system prints documents using WebKit formatting, which is to say formatting designed with indentations, bulletting, and specific parsing for the document structure. Alternatively, legacy print formatting simply renders a generic html document (no indentations, bullets, etc.) for printing.

![](../print-chart.assets/100000000000027000000158A53F33EA6C6A6370.gif)

Legacy printing is possible when the *Use legacy print formatting* option is available (i.e., the Use Webkit system setting is enabled) and selected.

![](../print-chart.assets/769cf984773937ed992e22011719a7ee.png)

{{% tip %}}
When the Use WebKit system setting is enabled, printed html documents will have a cleaner, formatted appearance. If the *Use legacy print formatting* option is left unchecked, html documents will print using WebKit formatting, by default.
{{% /tip %}}

**Send To/Create New Batch**: The Send To section of the Print Chart dialog window allows users to choose how the selected print definition is to be handled. In other words, users may use the same dialog window to send the print definition to the printer, to the fax machine, through secure email, or if the documents being rendered are not being added to an existing batch, a new batch can be created. If an existing batch is being added to, simply select the **Add To** radio button and proceed. This will add the document(s) of the print definition into the pending batch selected. Otherwise, select the *Printer*, *Fax*, *Secure Email*, or *Create New Batch* radio button to proceed. If a new batch is needed for the print definition, for example, simply select the *Create New Batch* radio button and proceed by adding any necessary batch comment at the top of the dialog window and clicking the **Create Batch** button at the bottom. The print definition will then be housed in a batch until faxed/printed. When simply printing or faxing a print definition outside of a batch, users may skip this section and continue by clicking either the **Print** or **Fax** button, accordingly.

For more detailed information on general faxing and printing, see our [Printing Documents](printing-documents.md) or [Faxing Documents](../../fax-manager/faxing-documents.md) help documentation.

### Print Chart from Appointments Chart Tab

As noted, the Print Chart functionality is available from various locations within the Enterprise Health system. In addition to the Summary chart tab quick links and the portlet sharing the same name, the Print Chart link can be found in the **Appointments** chart tab, found under the **Admin** parent chart tab, when in an individual's chart.

![](../print-chart.assets/edf7a35dee7b3d6fe2d3efadb3a949b8.png)

Once in the Appointments chart tab, locate the appointment for which documents need printed, and click the **Print Chart** link found in the *Options* column.

![](../print-chart.assets/46ac9a0cbd8dcca37e43dbc7fc17859e.png)

Once clicked, the Print Chart dialog window will open. Following the same instructions outlined in the  section of this document, users will notice only one difference when accessing the Print Chart functionality from the Appointments chart tab–the **Use Appointment Type Print Definition If Exists** option.

![](../print-chart.assets/42b251134baca7210efeb983e57d6dd3.png)

**Use Appointment Type Print Definition If Exists**: This option, when selected, will render the print definition specific to the selected appointment type. In other words, print definitions associated in the configuration of a specific appointment type will be rendered when this option is selected. When an appointment type is configured with a print definition and this option is checked, any selection made in the Print Definition dropdown will be overridden. On the other hand, if the appointment type *does not* have an associated print definition, yet this option is selected, the print definition specified in the dropdown field will be respected and rendered.

{{% tip %}}
Appointment Type Print Definitions are configured in the [Appointment Types editor](https://system/?func=scheduler&s=apttypes) (i.e., Appt Types tab) of the **Scheduler** module. Here, users with the necessary permissions may configure appointment types with print definitions, as needed.
{{% /tip %}}

Print Chart from Scheduler

In addition to the various locations users can access the Print Chart functionality within the chart,  {{% system-name %}} includes this same functionality from the [Scheduler](https://system/?func=scheduler#Now) module. When viewing scheduled appointments from the Scheduler, simply click the **Print Chart** link *within* the specific scheduled appointment block, and any printing or faxing needing to be done according to the scheduled appointment can be addressed.

![](../print-chart.assets/b92a285b251a8b907a4a27c338ee9a19.png)

Additionally, users have the ability to utilize the **Print Charts** link, found at the top of the Scheduler module. This allows users to print charts or any print definitions for all of the scheduled appointments, rather than each appointment, individually.

![](../print-chart.assets/5355824210737682bb42a7cf4a2f17d7.png)

Once either of these links are clicked, the Print Chart dialog window will open, allowing the user to print/fax, accordingly. The available options and workflow follow those explained in the preceding sections (i.e., [Print Chart from E-Chart](#gjdgxs) and [Print Chart from Appointments Chart Tab](#30j0zll)).
