---
id: '1l50g_U5m-hU-hGjQ9Rm_xNeSY8ak62UNcqWRSTpvCbg'
title: 'DICOM Setup Tab'
date: '2024-05-17T15:21:41.942Z'
version: 52
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=dicom&dcfunc=aeedit'
  - 'https://system/?f=dicom&s=app_entities'
  - 'https://system/?f=dicom&dcfunc=aeedit&tabmodule=admin&tabselect=Dicom+Setup'
  - 'https://system/?f=dicom&s=app_entities&opp=add'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager'
source: 'https://drive.google.com/open?id=1l50g_U5m-hU-hGjQ9Rm_xNeSY8ak62UNcqWRSTpvCbg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Digital Imaging and Communications in Medicine (DICOM) is a standard for handling, storing, printing, and exchanging image information in and between medical imaging software.

## DICOM Setup Tab

Access to the [Dicom Setup tab](https://system/?f=dicom&dcfunc=aeedit) requires the DICOM Queue security permission.  DICOM Queue security permission allows access to the DICOM Image Queue and all the settings that go with it.

The [DICOM Setup tab](https://system/?f=dicom&dcfunc=aeedit) is both a dashboard with search functionality, as well as a link to add or edit the Application Entities information. There is also a "basic" or "advanced" search capability at the top left corner of this screen to search for DICOM routes in the categories of the dashboard.

![](../dicom-setup-tab.assets/3a9929a7b2969bf21b78ea458e99a58a.png)

## Application Entities Editor

Access to view and manage Application Entities requires the Application Entities Editor security permission.  The Application Entities Editor security permission allows access to add, edit, or delete DICOM Application Entities, however this editor is mainly for MIE programming staff.

To view application entities, simply click the [View Application Entities](https://system/?f=dicom&s=app_entities) hyperlink in the [DICOM Setup](https://system/?f=dicom&dcfunc=aeedit&tabmodule=admin&tabselect=Dicom+Setup) tab found within the **Control Panel** sidemenu.

![](../dicom-setup-tab.assets/f81a935d569d0fc54de08d08675b6c17.png)

To add an Application Entity, once in the Application Entities, simply select the [Add Entity](https://system/?f=dicom&s=app_entities&opp=add) link.

![](../dicom-setup-tab.assets/c33f7e26d651e164cb8ed64ee9efd635.png)

The following information is displayed on the application entities screen:

* <strong>Title</strong>: Commonly referred to as "AE Title" or "Application Entity Title" - this is given to a superuser by the client or technical engineer who services the imaging device. This is a name assigned to that device and will be given to a superuser to input in this box. The AE title is required in order for a remote device to send images to the  {{% system-name %}} application.
* <strong>Node</strong>: Commonly referred to as "IP Address" - this number sequence given to the superuser by the client or technical engineer who services the imaging device. This is a number assigned to an imaging device and the superuser will input this number in this box. The IP address is required in order for a remote device to send images to the  {{% system-name %}} application.
* <strong>Port</strong>: This number will be either added by MIE or given to the superuser to complete this field from MIE. Port 104 is the standard port for DICOM communications. (Clients may need administrator access to use port 104.) This port field is required for configuration in order for successful transmission of images into  {{% system-name %}} . Additional port number detail is listed below:
    * 104 port for DICOM over TCP or UDP. Since 104 is in the reserved subset, many operating systems require special privileges to use it.
    * 2761 registered port for DICOM using Integrated Secure Communication Layer (ISCL) over TCP or UDP.
    * 2762 registered port for DICOM using Transport Layer Security (TLS) over TCP or UDP.
    * 11112 registered port for DICOM using standard, open communication over TCP or UDP.
* <strong>Location Code</strong>: Select the appropriate location from where the device is located. A new location code may need to be set up in the [Locations Manager chart tab](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager).
* <strong>Patient Partition</strong>: If  {{% system-name %}} is partitioned by location/group, then select the appropriate partition from where the imaging device is located. If there is only one partition (e.g., MR), then use this partition.
* <strong>Document Type</strong>: By default, incoming studies will be stored with a Document Type determined by that modality (i.e., an Ultrasound Device would have a document type of "US"). This setting allows you to override that document type.
* <strong>Route Level</strong>: MIE or the Superuser will select the type of routing level they want to transmit the images to the  {{% system-name %}}  system.
    * None (N)
    * Study (S)
    * Series (E)
        * Image (I)

{{% info %}}
Most devices are set up to transmit at the **Study** level.
{{% /info %}}

* <strong>Max Connections</strong>: Sets the maximum number of threads 0 how many studies can be pushed at once.
* <strong>Comment</strong>: This is a freetext field where you can identify in simplistic terms what the device is.
* <strong>AE Ability</strong>: Push or Print are the options. You would only use "Print" if the device is a DICOM printer. If Push is selected, additional fields will branch open to program, if needed:
    * <strong>Reconcile Patient Data on Push</strong>: Overwrites the DICOM elements of the demographics to match  {{% system-name %}} . This is the opposite of <em>Update DB from DICOM data</em>. You can choose to do with just the MR only or NAME and MR.
    * <strong>Reconcile Accession Number on Push</strong>: Uses the encounter ID or document ID - overwrites accession number.
    * <strong>Priority</strong>: Depending on how quickly you want to push, you can bump a study to the top. If there are 50 studies in the queue, assign a higher level here to move study up to be read sooner.
    * <strong>Compression</strong>: Three choices–None, Lossless (compress as much as possible without losing data), and Lossy + # (will lose data). Example: Lossy 90 means "only lose 10% of the quality". This is an Image Quality setting. (Comparison to when you use a slider in JPG images for quality.) Compression affects the size of the file.
* <strong>Update DB from DICOM data</strong>: Takes DICOM data and updates the patient info demographics info. MR#
* <strong>Allow MWL Query</strong>: Check this box if the Modality Worklist integration is being set up between  {{% system-name %}} and the device.
