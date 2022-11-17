---
id: '1pnpaUXzHf6UilobVMr2RTHB0j2NJAafIXI5IYmfhMkY'
title: 'MIE File Import'
date: '2020-03-17T02:05:30.422Z'
version: 64
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'data-migration-file-format-standard.md'
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager'
  - 'https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit?usp=sharing'
  - 'https://www.ietf.org/rfc/rfc4180.txt'
source: 'https://drive.google.com/open?id=1pnpaUXzHf6UilobVMr2RTHB0j2NJAafIXI5IYmfhMkY'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'MIE File Import'
    identifier: '1pnpaUXzHf6UilobVMr2RTHB0j2NJAafIXI5IYmfhMkY'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4720
---




MIE File Import is a tool for importing and storing a set of files (an archive) in an MIE system (i.e., Enterprise Health or WebChart) as a document. A document is then associated with a chart in an MIE system. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient.  
The MIE File Import tool imports and stores a variety of files types in the MIE File System, including:
* Images
* Word
* Excel
* PDF
* XML
* HTML
* Plain text
* Rich text formatted (RTF)
* Unspecified binary
The imported files could contain data about a chart, as well. Examples of imported data include:
* Images of insurance cards
* Patient photos
* Physician or nurse notes
* Past medical histories
* Continuity of Care Documents (CCDs)
* Clinical Document Architecture documents (CDAs)
* Email correspondence pertaining to a patient
Along with the files that are imported into the MIE File System, a discrete document record is created, in order to associate the file with the correct chart in the MIE system. Some of the discrete data that is stored for the files as a document include:
* Service date
* Service location
* Author
* Document type (i.e., what kind of data does the document have)
  
## **Overview of the Process**  
  
Due to the typical size of these types of archives, this import is not currently available to clients without assistance from MIE. The general process is as follows:
1. Client generates a CSV file containing a single row of metadata for each file to be imported.
2. Client creates an archive of files corresponding to the CSV metadata. For some legacy systems like Medgate, BLOBs may be stored in a database that will need to be extracted to disk as individual files and added to an archive.
3. Client sends MIE the CSV file and an archive of the files to be uploaded.
4. MIE runs the import process. This is a command-line script that runs on the same system where the data is located, and it needs access to the client's DB.
5. MIE informs client when the import process is completed; a status (success or error) of each row of the CSV is available via a system report in the client's MIE system.
  
## **CSV File Format**  
  
The following characters are used to generate a CSV for data import:
* Delimiter - In order of preference, a comma (,) or pipe (|) is acceptable.
* Quote Character - Use a quote (") to surround fields that contain the delimiter or contain newlines.
* Escape Character - Use a quote (") to escape a quote within quoted fields. E.g. <strong>"This quoted field ""contains"" quotes"</strong>
See also: [Data Migration File Format Standard](data-migration-file-format-standard.md)
  
### Required Fields  

* <strong>Patient ID</strong> - Specifies the patient's chart in which the document will be stored.
* <strong>Patient ID Type</strong> - See the [Patient ID Types section](#gjdgxs).
* <strong>Document Type</strong> - The document type code is required and must be uppercase. Maximum 10 characters length. Document types label and group documents, and they may be customized for each MIE system, so the code required in the CSV is system-dependent. Document types are managed in the [Document Types editor](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types) of the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin). Chart tabs in the MIE system display only associated/specified document types.
* <strong>Interface Name</strong> - A unique identifier from a foreign system (such as an interface) that the document came from. Maximum 100 characters length.
* <strong>External ID</strong> - An external identifier for this document. Maximum 128 characters length.
* <strong>File Name</strong> - The relative path of the file.
  
### Optional Fields  

* <strong>Storage Type</strong> - See the Supported Storage Types section. It is highly recommended to include this data. Without this field, the tool will do its best to determine the contents.
* <strong>Encounter ID</strong> - Links a specific encounter (patient visit) to the document.
* <strong>Encounter ID Type</strong> - See the Encounter ID Types section.
* <strong>User ID</strong> - Identifies the MIE system user who entered the document into the system.
* <strong>User ID Type</strong> - See the User ID Types section.
* <strong>Origin ID</strong> - The author of the document.
* <strong>Origin ID Type</strong> - See the User ID Types section.
* <strong>Service Location</strong> - The location code for the document's service location. These are stored in the [Locations Manager](https://system/?f=chart&s=leditor&tabmodule=admin&tabselect=Locations+Manager) of the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin).
* <strong>Origin Date</strong> - Date the document initially created. Defaults to an empty date if none is provided.
* <strong>Enter Date</strong> - Date the document was entered into the MIE system. Defaults to the current date if none is provided.
* <strong>Revision Date</strong> - Date the document was revised. Defaults to the current date if none is provided.
* <strong>Service Date</strong> - Date service related to the document was performed. Defaults to an empty date if none is provided.
* <strong>Subject</strong> - The document subject that appears on the document header in the MIE system. Maximum 255 characters length.
* <strong>Comments</strong> - The complete text narrative for the corresponding document.
* <strong>File Extension</strong> - Suffix from the file name that indicates file type.
  
## Supported Storage Types  
  
Listed below are the file/storage types that are supported by this tool. Use the values from the Storage Type column.

<table>
<tr>
<td><strong>Storage Type</strong></td>
<td><strong>Description</strong></td>
<td><strong>File Extension</strong></td>
</tr>
<tr>
<td>1</td>
<td>Plain text file</td>
<td>txt</td>
</tr>
<tr>
<td>2</td>
<td>Rich Text Format document</td>
<td>rtf</td>
</tr>
<tr>
<td>3</td>
<td>PNG Image</td>
<td>png</td>
</tr>
<tr>
<td>4</td>
<td>HyperText Markup Language document</td>
<td>html or htm</td>
</tr>
<tr>
<td>6</td>
<td>Microsoft Word document</td>
<td>doc or docx</td>
</tr>
<tr>
<td>7</td>
<td>Tagged Image File Format (TIFF)</td>
<td>tif or tiff</td>
</tr>
<tr>
<td>8</td>
<td>JPEG Image</td>
<td>jpg or jpeg</td>
</tr>
<tr>
<td>9</td>
<td>Generic binary file. Used for unrecognized or unsupported file types.</td>
<td>bin</td>
</tr>
<tr>
<td>14</td>
<td>Preformatted text file (displays text as-is with newlines)</td>
<td>txt</td>
</tr>
<tr>
<td>17</td>
<td>Portable Document Format (PDF)</td>
<td>pdf</td>
</tr>
<tr>
<td>18</td>
<td>Microsoft Excel spreadsheet</td>
<td>xls or xlsx</td>
</tr>
<tr>
<td>22</td>
<td>Email</td>
<td>eml</td>
</tr>
<tr>
<td>27</td>
<td>Extensible Markup Language document</td>
<td>xml</td>
</tr>

</table>


  
## Patient ID Types  
  
Patient ID types specify the patient chart. Although more patient ID types are planned, there is only one currently available.
* <strong>part:</strong> - Set this to the partition name of the patient. Enter the MR# into Patient ID.

  
## Encounter ID Types  
  
Encounter ID types specify the linked encounter.
* <strong>id:encounter_id</strong> - Encounter ID points directly to the encounter's ID.
* <strong>id:encounter_ext_id</strong> - Encounter ID is the encounter's external ID.

  
## User ID Types  
  
User ID types specify the user.
* <strong>id:username</strong> - Look up a user ID by username.
* <strong>id:email</strong> - Look up a user ID by email.
* <strong>part:</strong> - Look up a user ID with a self-relation to the patient specified. Set this to the partition name of the patient. Enter the MR# into Author/Origin ID.
  
## **CSV File Template**  
  
Here are a couple of files containing both the required and optional fields defined above. A few example rows are pre-populated to give an idea of what is expected.  
[MIE File Import CSV Specification & Template](https://docs.google.com/spreadsheets/d/10HNRDfXJte-CVXUE1ZN6p2ZQ86dcOdDxKvHy3UhwBpQ/edit?usp=sharing)  
[File Import Upload Template](https://www.ietf.org/rfc/rfc4180.txt)
  
## **Troubleshooting**  
  
Use the system report to see the results of the import. Records from the CSV file are displayed along with a status and description for each. If a document was created, the last columns will contain links to the document and chart. Totals for each status are displayed at the bottom of the page.
  
### **Document Rendering Issues**  
  
There are a couple problems that could cause files and images not to display properly in the chart. Here are some possible solutions that may be checked:
1. Find the file in the archive that was provided to MIE and try to open it with a viewer on your computer. It is possible that a legacy image, Word document, or whatever the file is may have been corrupt in the legacy system and no one noticed. If you either cannot extract the file from the archive sent to MIE or cannot view it on your computer, then the file is bad and will not display in {{% sys-name %}} .
2. If the file is not corrupt, double-check what kind of file it is and make sure the Storage Type provided in the CSV matches the file type on disk. We have seen several Rich Text Files (RTFs) labelled as Word Documents (DOCs) (and vice versa) and various images being mislabeled, as well. Many times Word or Image viewers will actually scan the first few bytes of the file to see what kind of file type it is before rendering it.  {{% sys-name %}} relies on the Storage Type provided in the CSV to specify the file type. If the Storage Type provided in the CSV is not correct, the file will not render properly in {{% sys-name %}} . To try to determine the file type, open the file with a text editor and view the raw contents of the file. A text editor will help determine plain-text ASCII files (like RTF, HTML, XML, and a few others). If the file contents are binary, then you may need to use a special tool to determine the file type. 
  
### **Errors**  
  
A description is stored for each error that occurs. Check the following sections for tips on how to address each individual error.
  
#### **no patient**  
  
No patient was found in the system. Without an existing chart, there is no place to store a document. If the chart exists but is not being found, check the contents of Patient ID and Patient ID Type and make the needed corrections. See [Patient ID Types](#gjdgxs).
  
#### **no file**  
  
This error means that the program was unable to locate the file on disk. This could mean a few things:
1. The path containing the files provided to the program was incorrect. Double-check that the correct path was provided and used.
2. The contents of the CSV file for the File Name field may be incorrect. Ensure that Unicode characters in File Name have been extracted correctly.
3. The filenames on disk may not match the contents of File Name in the CSV file. Ensure that files with Unicode characters are named appropriately.
  
#### **File was empty or name/type did not match specified storage type**  
  
Empty files, or files with zero (0) bytes, contain no data and will automatically be rejected without creating a document. Check the directory listing for file sizes. If the file appears to have a file size greater than zero bytes, double-check the Storage Type provided for the record. If an image is uploaded, but the CSV file specifies a PDF Storage Type, the system will reject the file without creating a document.
  
## Related Pages  

* [Data Migration File Format Standard](data-migration-file-format-standard.md)
