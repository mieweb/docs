---
id: '1KfyrlzPYLJ6uPSz-YQlVG15nEQyn6URH5izKL20GRJ0'
title: 'Documents Report / Super Document Type Search'
date: '2024-03-13T13:41:40.840Z'
version: 110
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1KfyrlzPYLJ6uPSz-YQlVG15nEQyn6URH5izKL20GRJ0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.

Use this report if you wish to locate a specific document with some information you have, or wish to locate specific documents in general, etc.

Click *Reports* tab on the left side-bar menu.

Click *Document Reports* tab from the top tab menu.

You do not have to fill out every single field. These fields are different ways to find a document and each field gets more specific and narrows your search down.

![](../documents-report-super-document-type-search.assets/80523576d36cfefc7e02c688ed3a6671.png)

* <strong>Doc ID:</strong> Enter the specific document ID number. Each document that is indexed, uploaded, etc into a patient's chart has a specific document ID number. You would use this field if you had a doc.id number and had no idea which patient it belonged to or if it was in the system, etc.

![](../documents-report-super-document-type-search.assets/fe0659cf238ff17659bc09def1dab1ad.png)

* <strong>Doc Type:</strong> Click on this field and the doc.type selection will open up. You can check-mark any document type you wish to search by. You can choose one or multiple. Check-mark as many as you wish to show results for. You can also use the Select All or Un-Select All which will perform those check-marks in mass.
* <strong>Storage Type:</strong> Click on this field and check-mark as many storage types to narrow down your results by if looking for a document with those qualifications.
* <strong>Patient Name:</strong> You can run the report to filter the found documents by a specific patient. Simply enter the patient's <em>last</em> name and it will give you auto-complete choices. You can also click the icon for help to enter a different method of searching for a specific patient to enter into this field using MR#, DOB, etc.
* <strong>Entering User</strong>: Begin typing in the first or last name of the {{% system-name %}} user, if you are looking for documents uploaded, entered or indexed in by a specific user. The username of who entered the document, not who authored it. Once you begin typing first or last name, it will give you auto-complete choices to select from (this includes deleted users).
* <strong>Authoring User:</strong> Begin typing in the first or last name of the {{% system-name %}} user the document(s) you are looking for was authored by. The username the document is stored as <em>authored by</em>. Once you begin typing first or last name, it will give you auto-complete choices to select from (this includes deleted users).
* <strong>Location:</strong> Click on this field to check-mark a specific location or multiple locations for these documents you are searching for. If you skip this field, it will search all locations.
* <strong>Interface</strong>: Type in the correct interface path (abbreviation) if looking for documents from an interface (Parkview, Lutheran, FW Med Lab, etc)
* <strong>Dates & Date ranges:</strong>
    * Origin Date Range is the date the originator ‘wrote' the document.  Example: When the doctor made the dictation.
    * Create Date Range is the date the {{% system-name %}} version of the document was created.  Example: When the dictation was transcribed.
    * Revision Date Range is the date of the latest revision date of the {{% system-name %}} document.
    * Service Date Range is the date of the service that the document refers to.

{{% tip %}}
The left date will act as a lower bound and the right date will act as an upper bound.  So if the date of 00/00/0000 is desired to be included in the search, leave the lower bound empty as 00/00/0000 will be less than any known date for upper bound.  Do NOT try to enter 00/00/0000.  If you only want unknown ones, put in a very old date like 01/01/1900 for the upper bound.  Then the only documents that will be older than that will be the unknown ones.


{{% /tip %}}

* <strong>Subject:</strong> Type in some text of a "subject" you are looking for that documents have. Subject is a field & column when working with a specific document and you can "label" a document with a "subject" which helps decipher what the document is about when looking in list view. This report allows user to result this report by looking for keywords in a subject using this field.
* <strong>Optional Columns:</strong> There are optional columns you can select. That means when the report results, it will show any optional columns that you have selected (ex: SSN, subject line, etc). One optional column is E-Sign and when you checkmark that, another field will branch open to checkmark which esign status you'd like to result by. Not having any checkmarked will result in any and all documents from your filter selections and will show an esign status in that column. If you want to limit your report to find only specific e-sign statuses, then you would checkmark which statuses you are looking for. Once the report results, you can also request a signature and unrequest signature right from the report that results.
* <strong>View Unprinted Only:</strong> Can make your search results show documents that are currently unprinted only for the criteria you specify. It will not show any documents in your criteria that have already ever been printed or faxed for a patient.

Click *Search* to run the report to find documents.

It will then run and show all your document(s) results with specific categories of information.

![](../documents-report-super-document-type-search.assets/ab8d9fe874302b973437bf9d8595019a.png)

If you wish to only view a document(s) you searched for, then click on the underlined Doc ID.

If you wish to view the patient demographics screen for that document(s) then click on the underlined MR number.

If you wish to print/fax a document or multiple documents, click the word Batch in the first column titled Print. It will then put that document in a ‘batch' to print or fax. If you do not want to print/fax it from a batch, click Remove where you just clicked Batch.

![](../documents-report-super-document-type-search.assets/1939c9ed9b3848492e2032e6f2b5795a.png)

Your view can be set up to show checkboxes or the link batch in the PRINT column. Simply check-mark which document results you wish to print/fax/or create a batch for (or uncheck-mark ones you don't want to print/fax/batch) or click the word batch if your view is set to that look.

The MY SETTINGS preference controls which look you have (checkboxes or the batch link in that column).

![](../documents-report-super-document-type-search.assets/d9e5a7c1c5c640ec533ecbe13d3bbbf9.png)

Scroll down to the bottom and make your selection to print/fax or create a bulk batch.

![](../documents-report-super-document-type-search.assets/1ecdce441b906df93f3d9fda968b7b1a.png)

Whatever documents you have ‘batched' will be put up in the print/fax batch queue. You will see this at the very top left corner of the screen or any screen you are working in. This summary shows that you have documents in a batch that you need to print, or fax, or remove and the number of items (documents) in the batch.

![](../documents-report-super-document-type-search.assets/8688694b3f40f141813c76722586bed4.png)

When you print or fax multiple documents from this report—they may print a couple documents per page (especially if they are text documents). If you wish for each document to print or fax on their own separate page, then after you click the Print or Fax button, you need to checkmark the box that says *Print One Document Per Page*.

If you wish them to print or fax without the {{% system-name %}} document header, you need to checkmark the box that says *Print documents without |system| document headers.*

Proceed by printing or faxing or remove the documents from the batch remove & cancel.

![](../documents-report-super-document-type-search.assets/4f131c44df2e26bd0774ffa1caf9e750.png)

If wish to view your document search results in detail, click the *Detail View* option on the top right of the screen. Detail view opens/shows each specific document in detail (full document) in your search results report without having to click on the DocID in the other view (List view) to open and view the document.

![](../documents-report-super-document-type-search.assets/c1a5469519d960823cd43a7687874ea1.png)

You can go back to the default *List View* by clicking *List View* at the top right of the screen (where it did say detail view).

You can also export the results to a CSV (spreadsheet). Simply click on the **Show CSV** link in the results.

![](../documents-report-super-document-type-search.assets/c297a0088dfb59578667ec9f4ac3c4a5.png)

This will put all the data into an excel spreadsheet which you can save, sort, etc. in spreadsheet form.

The Modify Search link goes back to your original search that you entered. It keeps the fields filled out that you previously entered and allow you to change any field. This saves you from entering everything over again if you just needed to change a few fields to display another search result.

## Save Report Filter Templates

You can "save" a document report you've run. You may run the same report monthly and instead of putting in the report search criteria fields in individually all the time, you can "save" the report filters to run again at a future time without having to manually key everything in again. You can save and access previous saved filter reports using the link options at the top: Save Filter Template and Show Saved Filters.

![](../documents-report-super-document-type-search.assets/7250c1851fb8d6a6f59214c915050c9d.png)

### Save Filter Template

To "save" a new report filter template, you need to enter in all the search criteria fields for the report from the Document Search Report. When you are done, you can click SEARCH to run the report and still access the save filter templates link even after you run a report.

![](../documents-report-super-document-type-search.assets/a8c46bff09db54a5cea80f01f8bf5bbf.png)

All the search criteria you entered in for the report can be stored as a "saved template" to run that same report again without having to rekey in each field manually. All search criteria fields are able to be stored in a filter template *except doc_id, patient name, entering user and authoring user.*

When you click the save filter template all search criteria fields (except those noted above) can be "saved" to this template to run the report again in the future quickly. You can "uncheckmark" any search criteria line items that you don't want to be included in this future "filter template", but by default it assumes you want to save all and it places a checkmark beside each. You must type a "Name" to name this saved report filter template.

![](../documents-report-super-document-type-search.assets/2bbc9689630b79b0f508f9def7976c79.png)

Click the SAVE button to save your template. You and others can now access the saved report filter template by clicking show saved filters link and quickly run the same report in the future without having to manually key in each filter criteria field individually.

### Show Saved Filters

If you wish to access a previously saved template and want to run the same report again, click the Show Saved Filters link. You will see a list of the choices and what the report is named. If you have security privilege, you can delete any saved filter reports from here too so it cannot be utilized anymore.

Click the saved document report template you wish to run. It will open the fields that are attached to this report and all will be checkmarked by default. If you wish to run the same report, simply click APPLY button and the report will render. If you wish to not include a previously saved filter item (ex: document type), then uncheckmark it and then run the report by clicking the APPLY button and it populate the Document Report search filter fields based and respecting what you have checkmarked from the saved template. Click the SEARCH button to run the report then.

![](../documents-report-super-document-type-search.assets/da9c025c1d3037baa970b14aefd4daee.png)

*Personal Templates* are saved document report templates you (the logged in user) have saved & created to be in the library.

*Global Templates* are saved document report templates that other users have saved & created in this library and you can access them also.
