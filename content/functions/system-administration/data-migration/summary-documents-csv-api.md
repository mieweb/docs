---
id: '1ldetcPu_lIhcsvJ_o50EZMbG_O5VN717UAv0IrPzzC4'
title: 'Summary Documents CSV API'
date: '2020-03-17T15:37:53.190Z'
version: 64
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/Import_Overview'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1Z2HbO8vuW4wiId1PS_Fk39xGbDJC5el-xBmBvvnLzNY/edit?usp=sharing'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List'
source: 'https://drive.google.com/open?id=1ldetcPu_lIhcsvJ_o50EZMbG_O5VN717UAv0IrPzzC4'
wikigdrive: 'd3e22db37cfdd4a4e5d0d1fe46fc320e82e79136'
menu:
  main:
    name: 'Summary Documents CSV API'
    identifier: '1ldetcPu_lIhcsvJ_o50EZMbG_O5VN717UAv0IrPzzC4'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4930
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) to create structured text (HTML) summary documents using the Summary Documents CSV API.

  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Summary Documents CSV API. Technical details are provided in the remaining sections.

  
### **Abstract**  
  
The Summary Documents CSV API imports non-discrete text data as an HTML document.  
It is valuable to recognize the following terminology as it pertains to MIE systems:
* A <strong>document</strong> in EH is a way of storing information in patient charts. This includes patient photographs, insurance cards, physician or nurse notes, imaging studies, past medical histories, physician tasks for a patient, CCDs and CDAs, email correspondence about a patient, injections, and many other forms of data.
* A <strong>chart</strong> is a patient's electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient.
* <strong>Free text</strong> refers to text that is entered free-form into a system and is not subject to any type of formatting or standards.
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](https://miewiki.med-web.com/wiki/index.php/Import_Overview) page for a more detailed explanation of terminology.

  
#### **Screenshots**  
  
The following screenshots show a simple CSV file, and the resulting summary document in an EH system. Example data is available on the tab "DB_Example" in the specification (see link in Specification section of this page).  
The first several columns in the example CSV dictate some discrete metadata for the document, such as the *Chart ID*, (documents.pat_id) and *External ID* (documents.ext_doc_id).

  
![](../summary-documents-csv-api.assets/288bd57ecf884552d143c3599983ad29.png)  


Following the discrete fields, a *Section Header* (section_header) several *Name Value Pairs* (name_value.NAME), and a *Narrative with Prefix*(narrative.PREFIX) follow to create the body of a case summary.


  
![](../summary-documents-csv-api.assets/d41dcac076f7937e4736107d80c01d11.png)  

  
![](../summary-documents-csv-api.assets/16bbd7794b3a28cd5526541c86aafbd2.png)  


Each column in the CSV above corresponds to a line of text in the resulting summary document. In this example, there are two section headers centered at the top of the document, several field name and value pairs, and at least one narrative block of text under each section header. These fields are all optional, repeatable, and may be ordered in any way to create a custom document to fit the needs of the client's data. Keep in mind that any of the data in the body of the document composed of the section headers, field name and value pairs, and narratives are not discrete and not searchable.

  
![](../summary-documents-csv-api.assets/1e50342c1e7a212cffe9936eef3cf23d.png)  


The last screenshot displays a list of the Document Summary in EH. This is a listing of all of the documents in a patient's (employee's) chart. This view allows a user to see at a glance service dates, locations, document types, and the document title or subject of all of the documents on a chart.

  
![](../summary-documents-csv-api.assets/570a4b0acc99c1d3e88d518abf1cc597.png)  

  
## **Workflow Considerations**  
  
The following subsections outline situations in which summary documents are useful, and when they are not.

  
### **When to use Summary Documents**  
  
Summary documents are stored in EH as formatted text documents. They are most useful for storing notes (physician or nurse notes, emails regarding an individual, contact notes, etc.), or two-column structured content that is not used for reporting, such as lists of medications or injections.

  
#### **Advantages of Summary Documents**  
  
Summary documents can be used to store any type of information relatively quickly. There is no mapping of discrete fields to MIE's API or converting internal codes to MIE's specifications, which is tedious in some applications. Use summary documents for quick conversions to create reference documents for use in the clinic.

  
#### **Disadvantages of Summary Documents**  
  
The data in the body of a summary documents is not discrete. Only information in the document header (*Chart ID* (documents.pat_id), *Service Date* (documents.service_date), *Location* (documents.location), etc.) is stored as discrete data. The contents of the document body is not stored discretely and may not be searched or reported in EH.  
Additionally, only text may be stored by this API. While documents in EH may be anything from images, PDFs, Word and Excel documents, or many other storage types, this API is only for structured text documents stored as HTML.

  
#### **Discrete and Non-Discrete Data**  
  
The prior section on Disadvantages of Summary Documents gives an overview of the main drawback of using this import: the data in the body of the document is not discrete data. Some data is stored discretely on each document. Typically this data is useful for categorizing and quickly finding a summary document. As discussed later in this document, many of these fields are considered best practice to specify data.
* <em>Chart ID</em> (documents.user_id): A discrete identifier is used to connect the summary document to a specific chart.
* <em>External ID</em> (documents.ext_doc_id) and <em>Interface</em>: The interface name entered at the time of data import as well as the <em>External ID</em>(documents.ext_doc_id) (typically the autoincrementing or unique key from the source database or spreadsheet) is stored discretely, although it cannot be viewed from the front end of EH.
* <em>Author (Originator) ID</em> (documents.origin_id) and <em>Entering User ID</em> (documents.user_id): Both the creator of the content and the one who enters the data are stored discretely.
* <em>Service Date</em> (documents.service_date), <em>Origin Date</em> (documents.origin_date, and <em>Enter Date</em> (documents.enter_date) : These dates are all stored discretely for each document.
* <em>Location</em> (documents.location): The service location may be used to specify either a clinic location or the system from which the data came (EG: Medgate, OHM, and so on). If a clinical or service location readily available to map to a location in EH, that is typically preferred.
* <em>Document Type</em> (documents.doc_type): The document type classifies the contents of a document. This helps to quickly understand at a glance what kind of data may be found in the document. Additionally, classifying documents with document types creates the ability to search for and report on documents in the system. Examples of document types include insurance cards, patient photos, nurse notes, and so on.
* <em>Document Title</em> (documents_txt.subject): The title or subject of the document is short text field that is unindexed in the database, but it is stored separately from the body of the document. It is used for quick reference to specify the contents of the document from an EH list without actually opening the document. Thus, it is included as key piece of discrete data to quickly provide a preview of the document.
The CSV Summary Document headers *Section Header* (section_header), *Name Value Pair* (name_value.NAME), *Narrative* (narrative), and *Narrative with Prefix* (narrative.PREFIX) are all used to build content for the body of the document. Any data included in the CSV under these headers is not discrete, searchable, or reportable.

**Examples of Discrete and Non-Discrete Data**  
The first screenshot shows a list (listview) in EH. This can be seen by selecting the Document Summary tab from a chart. A list of documents is displayed showing dates, location, doc type, and title.

  
![](../summary-documents-csv-api.assets/1bd31b9c7c2f08f9db2d0c03fc2c0399.png)  


The second screenshot shows a document's header, which contains much of the discrete data discussed above.

  
![](../summary-documents-csv-api.assets/f2702d4b192dca30ff7cb979279f76f1.png)  


Document properties display discrete information about a document that is not available in the document header.

  
![](../summary-documents-csv-api.assets/67805c3dc9585f35d6cd8716e7496006.png)  


Documents may be searched using the following criteria in EH: patient name, entering user, authoring user, interface name, location, service date, creation date, revision date, subject, storage type (this API always creates HTML files), and Doc ID, which is an internally assigned identifier.

  
![](../summary-documents-csv-api.assets/05c2570b017b944ea1d669c59364f927.png)  

  
### **Creating Discrete Data from a Summary Document**  
  
Many clients have opted to create summary documents for their medications, injections, or other data that is discretely coded in EH. In the legacy systems that are converting to EH (Medgate, OHM, spreadsheets, etc.) data is often entered as free text, including typos, without a coding system, or with incomplete data. Clients may not want to take the time to map free text or incomplete data from the legacy system to MIE's coding standards at the time of conversion. In those instances, the client creates summary documents for the data, since creating summary documents may be much quicker to create with EH's API. Then the data is reviewed with the patient/employee during the first clinic visit after EH is in use. At that time, a clinician can go through the legacy summary document and quickly add the relevant data discretely using EH's fast autocompleting fields and drop-down menus, ensuring proper coding, and facilitating reporting on the data.

  
### **Creating a Summary Questionnaire with Non-Discrete Data**  
  
It is sometimes valuable to import questionnaire data as a summary document. In this example, the *Name Value Pairs* (name_value.NAME) columns function as questions from a questionnaire with the responses listed in the corresponding column.

  
![](../summary-documents-csv-api.assets/cd1b224b46529a0f9b19fe5d515f223d.png)  

  
![](../summary-documents-csv-api.assets/a0b85ac880b25687c4632520a973d5b4.png)  

The questionnaire document is listed for the specified patient (Dolly Bacon).

  
![](../summary-documents-csv-api.assets/dbd79660c95068284dc38a6635d313dc.png)  


Questions and corresponding responses are listed in the questionnaire summary document.

  
![](../summary-documents-csv-api.assets/00d64a0641ee6b443861ed5f7c8786bd.png)  


  
## **Specifications**  
  
The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[The Summary Documents CSV API specifications are available here.](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing)  
{{% tip %}}

The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.
{{% /tip %}}
Additionally, user instructions are available for importing data in EH.

  
### **Column Definitions and Specific Coded Values**  

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards) page.

  
### **Field Requirements**  

The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Summary Documents CSV API specification. Additional details and considerations are provided here.

**Required**
The following fields are required:
* <em>Chart ID</em> (documents.pat_id) and <em>Chart ID Type</em> documents.pat_id_type) are used to to correctly identify a chart.
* <em>External ID</em> (documents.ext_doc_id): Identifies a record in the original data source (i.e., this is often the primary or unique key on the table of the legacy database that is being migrated to the MIE system).
* <em>Document Types</em> (documents.ext_doc_id): Used to categorize documents, as mentioned above. All documents in EH have a document type. Note that the document type listed in the CSV must exist in the EH system (in EH, go to Control Panel > Document Types) or that line will be rejected. For further reading on document types, refer to the Enterprise Health online help titled Document Type Tab.

**Best Practice**
Although this information is not required, it is considered a best practice to use at least some of these fields to populate information in the header of a document for identification and organizational purposes:
* <em>Service Date</em> (documents.service_date): Shows the pertinent date for the summary document, and it is displayed in the document list view.
* <em>Location</em> (documents.location): Shows where the service took place. This piece of metadata may be used in reporting.
* <em>Document Title</em> (documents_txt.subject): Displays in the listing of documents in EH and helps identify a document quickly.
* <em>Section header</em> (section_header), <em>Name Value Pair</em> (name_value.NAME), and <em>Narrative</em> (narrative) are used to structure the contents of the document.

**Optional Fields**
The following optional fields are needed to link the document to a patient encounter:
* <em>Encounter External Identifier</em> (encounters.ext_id)
* <em>Encounter Interface</em> (encounters.interface)
Including the field encounter order_id will also create an encounter order of the identified in the field.

**Multi-Line Documents**
For complex queries (one-to-many) that generate CSV content, you may concatenate multiple rows into a single document in EH.
Documents are grouped by required fields. The screenshots below show an example that creates two documents.

  
![](../summary-documents-csv-api.assets/9764a5889fcce434dd402393d0999ef6.png)  

  
![](../summary-documents-csv-api.assets/bda63f8520bf3a2a1be0e9bc3ba729ed.png)  


The combined summary documents display on the patient's chart.

  
![](../summary-documents-csv-api.assets/772fc5d035f7b21b41521a8676d4198e.png)  


  
## **Examples**  

Examples using sample data are provided on [separate tabs in the specification.](https://docs.google.com/a/mieweb.com/spreadsheets/d/1VzQzM4TGo4CRmfbh6wTUy8NSNA-X-a3AFAYvLaWvZcQ/edit?usp=sharing)

  
## **Validation**  

Unless otherwise specified, validation between the previous system and the new EH system requires the client to provide a number of test patients. This data can be compared in the previous system and EH using the validation test script.
[Summary Documents CSV API Validation Test Script](https://docs.google.com/a/mieweb.com/spreadsheets/d/1Z2HbO8vuW4wiId1PS_Fk39xGbDJC5el-xBmBvvnLzNY/edit?usp=sharing)

  
## **Related Pages**  

* [Data Import Master List](https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List)
