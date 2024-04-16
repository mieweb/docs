---
id: '1CM3OyxW1NUjWXeNgZdgsqOEkEyZV_S0D_Y9NC3O2LrQ'
title: 'Review Session - Document Management'
date: '2020-02-27T21:24:36.161Z'
version: 36
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - '../../functions/document-management/printing-and-print-definitions/print-definitions.md'
  - '../../functions/document-management/scanning-and-indexing/scanning.md'
  - '../../functions/document-management/scanning-and-indexing/indexing.md'
  - '../../functions/document-management/scanning-and-indexing/batch-search-in-webscan.md'
  - '../../functions/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md'
  - '../../functions/document-management/documents-and-forms/e-chart-scan-documents.md'
  - '../../functions/document-management/documents-and-forms/text-documents.md'
  - '../../functions/document-management/documents-and-forms/word-documents.md'
  - '../../functions/document-management/documents-and-forms/pdf-documents.md'
  - '../../functions/document-management/documents-and-forms/picture-photo-documents.md'
  - '../../functions/document-management/documents-and-forms/sketch-documents.md'
  - '../../functions/document-management/documents-and-forms/delete-move-lock-documents.md'
  - '../../functions/document-management/documents-and-forms/form-documents.md'
  - '../../functions/document-management/documents-and-forms/audiogram-data-entry.md'
  - '../../functions/document-management/documents-and-forms/biometric-data-entry.md'
  - '../../functions/document-management/documents-and-forms/ekg-data-entry.md'
  - '../../functions/document-management/documents-and-forms/pft-data-entry.md'
  - '../../functions/document-management/documents-and-forms/x-ray-results-data-entry.md'
  - '../../functions/document-management/scanning-and-indexing/indexing-bubble-forms.md'
  - '../../functions/e-chart/insurance-summary-in-demographics-tab.md'
source: 'https://drive.google.com/open?id=1CM3OyxW1NUjWXeNgZdgsqOEkEyZV_S0D_Y9NC3O2LrQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Document Management Demonstration</strong>
* <strong>Overview</strong>
    * <strong>WebScan - Scanning/Indexing</strong>
    * <strong>Insurance Card/Driver's License Scanning</strong>
    * <strong>Forms Library</strong>
    * <strong>Print Definitions</strong>
* <strong>System Configuration</strong>
    * <strong>Configure Scanners</strong>
    * <strong>Add Document Types to Forms Library</strong>
    * <strong>Setup Print Definitions</strong>
    * <strong>Side Chart View</strong>
    * <strong>Cut-Over Plan</strong>
    * <strong>System Settings</strong>
    * <strong>Security Role Permissions</strong>
    * <strong>My Settings Preferences</strong>

## Overview

WebScan offers unsurpassed scanning and indexing flexibility for any practice or medical records department. Transitioning from a paper-based system to an electronic system is easier with high-speed scanning. The most efficient method of converting all past medical records to an electronic format is through a high-speed scanning system that captures images, and fully incorporates them into the new electronic patient chart. {{% system-name %}} supports both web-based remote scanning and high-speed scanning for items such as insurance cards or entire charts. WebScan allows front desk staff to scan information directly into a patient's record at the point of encounter, and is designed to automatically index the scanned document using barcode technology.

Time-saving features include:

* Easy and efficient data entry
* Automated blank-image removal
* Barcode detection and interpretation, for fast indexing
* Optical mark recognition
* Duplicate checking
* Automatic cropping

### WebScan - Scanning and Indexing

The {{% system-name %}} WebScan feature allows users to scan either one page or multiple pages to index into patient charts. This feature not only assists in the needs of day-to-day operations, but also streamlines the process of going electronic, eliminating paper charts, while storing all documents digitally. The WebScan module allows users to manipulate documents, as needed. Deleting, cropping, page repositioning, and rotating pages are all options when using the WebScan module. And for the highly productive person, Hot Keys are available, providing keyboard shortcuts to perform functions with ease and efficiency.

### Insurance Card/Driver's License Scanning

Often times, desktop scanning is used to scan insurance and photo identification (ID) cards, so that electronic images can be stored and accessed in {{% sys-name %}} . Uploading images is as simple as accessing the **Forms Library** and selecting the appropriate document type (e.g., insurance card, photo ID, etc..), using the filter links to ease the selection process. For example click the **E-Chart Scan** filter link, and the results will limit to only scan document type options. Users will be prompted to scan the insurance card or photo ID once the **Scan** link next to the document type name is clicked.

### Forms Library

The Forms Library is a collection of different document types that are used throughout {{% system-name %}} and can be accessed by clicking the **Add Document** link found in any patient chart. The Forms Library consists of the following commonly used document types:

* Text
* Word
* Form
* Picture
* Sketch
* HTML

### Print Definitions

Print definitions provide ways to group many documents, forms, layouts, or the like into a defined print or fax job. Print definitions can be accessed from either the Scheduler module or any patient chart by clicking the **Print Chart** link. Users are then given the ability to select the desired print definition and set a date range and printing options, such as printing without headers and printing one document per page. In addition, users can not only print and fax, but can send the print definition as a secure email, or even create a batch so that the print definition can be printed or faxed at a later time.

Additional information can be found in the [Print Definitions](../../functions/document-management/printing-and-print-definitions/print-definitions.md) documentation.

## System Configuration

### Configure Scanners

In order to be compatible with {{% system-name %}} , all scanners must install a TWAIN driver for varying devices. TWAIN drivers should be installed before attempting to scan any items, because the TWAIN driver allows communication between the device and the {{% system-name %}} system. Users should contact MIE Helpdesk for assistance with issues regarding scanner setup and configuration.

### Add Document Types to Forms Library

As noted, {{% system-name %}} comes preloaded with various document types (e.g., Forms, Word, Sketch, Text, etc.). Clients will want to review all preloaded items of the forms library, in order to determine which forms will not be needed. Any items not being utilized from the forms library can be inactivated, or if an alternative version is being used, MIE can replace the forms library item with the appropriate version. It is important that any unique forms, letters, document templates, email templates, fax coversheets, sketches, or even state-specific forms being regularly utilized, are provided as clean copies for loading into the {{% system-name %}} system. Additionally, time will need to be given to considering to which chart tabs documents need mapped, as well as to whether or not new chart tabs are needed for forms and documents regularly being used.

### Setup Print Definitions

New databases are preloaded with a standard set of print definitions. Print definitions provide ways to group many documents, forms, layouts, or the like into a defined print or fax job. Print definitions can also be attached to any appointment type, which allows users to click one button and get a group of forms/documents for use, as it relates to a scheduled appointment. These print definitions can be edited or deleted, as needed, depending on client needs. Allow time for defining and configuring print definitions, as needed.

### Side Chart

The Side Chart offers a view of important or relevant components, used to help categorize documents and navigate key information quickly and easily. It is important to discuss in what ways the varying doc listview sub-chart tabs can be organized and configured into a view that allows for easy accessibility and improved productivity, according to the business needs.

### Cut-Over Plan

Determine if existing records/documents will be scanned and indexed into the {{% system-name %}} system. In other words, ensure a cut-over plan is developed that suits the needs of the business, while taking into account all existing documentation.

### System Settings

There are a large number of system settings available regarding the Document Management module. In the of the Control Panel, permitted users can search for the keyword *Scan*, and view all of the available system settings that may need enabled, disabled, edited or set, according to the business needs and prescribed workflows.

### Security Role Permissions

In addition to system settings, it is important to review the security settings for each user or security role needing access to the document management functions, ensuring permission is given, as needed. There is additional information available within the Security Role Settings online help documentation.

### My Settings Preferences

Review the preferences of security roles and individuals, and ensure document access and restrictions are established, as needed. Set each restriction or permission, accordingly. This information is also detailed within the My Settings online help documentation.

## Resources

### Help Documentation

* [Scanning](../../functions/document-management/scanning-and-indexing/scanning.md)
* [Indexing](../../functions/document-management/scanning-and-indexing/indexing.md)
* [Search for Scanned Batches - WebScan](../../functions/document-management/scanning-and-indexing/batch-search-in-webscan.md)
* [AlternaTIFF ActiveX control for WebScan](../../functions/document-management/scanning-and-indexing/alternatiff-activex-control-for-webscan.md)
* [E-Chart Scan Documents](../../functions/document-management/documents-and-forms/e-chart-scan-documents.md)
* [Text Documents](../../functions/document-management/documents-and-forms/text-documents.md)
* [Word Documents](../../functions/document-management/documents-and-forms/word-documents.md)
* [PDF Documents](../../functions/document-management/documents-and-forms/pdf-documents.md)
* [Picture-Photo Documents](../../functions/document-management/documents-and-forms/picture-photo-documents.md)
* [Sketch Documents](../../functions/document-management/documents-and-forms/sketch-documents.md)
* [Delete-Move-Lock Documents](../../functions/document-management/documents-and-forms/delete-move-lock-documents.md)
* [Form Documents](../../functions/document-management/documents-and-forms/form-documents.md)
* [Bubble Form-Audiogram](../../functions/document-management/documents-and-forms/audiogram-data-entry.md)
* [Bubble Form-Biometric](../../functions/document-management/documents-and-forms/biometric-data-entry.md)
* [Bubble Form-EKG](../../functions/document-management/documents-and-forms/ekg-data-entry.md)
* [Bubble Form-PFT](../../functions/document-management/documents-and-forms/pft-data-entry.md)
* [Bubble Form-Xray_Results](../../functions/document-management/documents-and-forms/x-ray-results-data-entry.md)
* [Bubble Sheets-Indexing](../../functions/document-management/scanning-and-indexing/indexing-bubble-forms.md)
* [Insurance Summary in Demographics Tab](../../functions/e-chart/insurance-summary-in-demographics-tab.md)
* [Print Definitions](../../functions/document-management/printing-and-print-definitions/print-definitions.md)
