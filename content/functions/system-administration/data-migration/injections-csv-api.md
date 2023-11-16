---
id: '1aHRZ8aidsnDJ4vg1Diu1ktw9jMC_R1Q6JrPghbuckuE'
title: 'Injections CSV API'
date: '2020-03-17T15:04:17.378Z'
version: 46
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit?usp=sharing'
  - 'data-import-standards.md'
  - 'http://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx'
  - 'https://miewiki.med-web.com/wiki/index.php/Injections_CSV_API#CDC_Injection_Codes%7C'
  - 'https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/pub?gid=1934551280&single=true'
  - 'https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/pub?gid=1934551280&single=true&output=csv'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List'
source: 'https://drive.google.com/open?id=1aHRZ8aidsnDJ4vg1Diu1ktw9jMC_R1Q6JrPghbuckuE'
wikigdrive: '18ac9a8be49637c0d2bea8d32c40badbcda9a0ca'
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) for injections using the Injections CSV API.


### **Audience**

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Injections CSV API. Technical details are provided in the remaining sections.


### **Abstract**

Enterprise Health stores discrete data for injections/immunizations, which can be displayed in multiple ways.  
It is valuable to recognize the following terminology as it pertains to MIE systems:
* A <strong>chart</strong> is an employee's (patient's) electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual. Audio tests are linked to a chart through a document.
* A <strong>document</strong> in EH is a way of storing non-discrete information in patient charts. This includes patient photographs, insurance cards, physician or nurse notes, imaging studies, past medical histories, CCDs and CDAs, email correspondence about a patient, injections, and many other forms of data.
* An <strong>encounter</strong> documents a visit with a employee, and is also known as a patient visit. An encounter is a template of specific items to be addressed, in part or completely, during an appointment including the subjective, objective, assessment and plan. This is a tool used for recording information collected during an appointment and, in turn, the data collected will be stored and also incorporated in the final desired outcome: the visit report/note, which is a document stored in EH.
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.


### **Screenshots**


![](../injections-csv-api.assets/0b15a44cac015f048e0d015cfbbfc1cb.png)


Injections data is stored as a document, and will display within the appropriate tab of a chart.


![](../injections-csv-api.assets/60f75e0734bfd1b35a511b1b78936ecd.png)


In addition, injections display within the Injections flowsheet chart tab as discrete data.


![](../injections-csv-api.assets/9a398cd883f4db34b2abb12159938e56.png)


## **Specifications**

The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[Specifications for the Injections CSV API are available here.](https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/edit?usp=sharing)

{{% tip %}}
The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.
Additionally, user instructions are available for importing data in EH.
{{% /tip %}}


### **Column Definitions and Specific Coded Values**

Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.


#### **CDC Injection Codes**

The CDC Immunization Information Systems CVX Codes are available here: [http://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx](http://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx)


#### **Injections Site Codes**


<table>
<tr>
<td>Enterprise Health Site Codes</td>
<td>Enterprise Health Site Descriptions</td>
</tr>
<tr>
<td>AB</td>
<td>Abdomin</td>
</tr>
<tr>
<td>RG</td>
<td>Right Glute</td>
</tr>
<tr>
<td>LG</td>
<td>Left Glute</td>
</tr>
<tr>
<td>LD</td>
<td>Left Deltoid</td>
</tr>
<tr>
<td>RD</td>
<td>Right Deltoid</td>
</tr>
<tr>
<td>LAF</td>
<td>Left Arm Forearm</td>
</tr>
<tr>
<td>RAF</td>
<td>Right Arm Forearm</td>
</tr>
<tr>
<td>LT</td>
<td>Left Thigh</td>
</tr>
<tr>
<td>RT</td>
<td>Right Thigh</td>
</tr>
<tr>
<td>RA</td>
<td>Right Arm</td>
</tr>
<tr>
<td>RAL</td>
<td>Right Arm Lower Site</td>
</tr>
<tr>
<td>RAU</td>
<td>Right Arm Upper Site</td>
</tr>
<tr>
<td>RD</td>
<td>Right Deltoid</td>
</tr>
<tr>
<td>RT</td>
<td>Right Thigh</td>
</tr>
<tr>
<td>RG</td>
<td>Right Gluteus</td>
</tr>
<tr>
<td>RVL</td>
<td>Right Vastus Lateralis</td>
</tr>
<tr>
<td>LA</td>
<td>Left Arm</td>
</tr>
<tr>
<td>LAL</td>
<td>Left Arm Lower Site</td>
</tr>
<tr>
<td>LAU</td>
<td>Left Arm Upper Site</td>
</tr>
<tr>
<td>LD</td>
<td>Left Deltoid</td>
</tr>
<tr>
<td>LT</td>
<td>Left Thigh</td>
</tr>
<tr>
<td>LG</td>
<td>Left Gluteus</td>
</tr>
<tr>
<td>LVL</td>
<td>Left Vastus Lateralis</td>
</tr>
<tr>
<td>AB</td>
<td>Abdomen</td>
</tr>
<tr>
<td>O</td>
<td>Oral</td>
</tr>
<tr>
<td>BN</td>
<td>Both Nares</td>
</tr>
<tr>
<td>OTHER</td>
<td>Other</td>
</tr>

</table>


#### **Injections Route Codes**


<table>
<tr>
<td>Enterprise Health Route Codes</td>
<td>Enterprise Health Route Descriptions</td>
</tr>
<tr>
<td>ID</td>
<td>Intradermal</td>
</tr>
<tr>
<td>IM</td>
<td>Intramuscular</td>
</tr>
<tr>
<td>IV</td>
<td>Intravenous</td>
</tr>
<tr>
<td>PO</td>
<td>Oral</td>
</tr>
<tr>
<td>SC</td>
<td>Subcutaneous</td>
</tr>
<tr>
<td>OTH</td>
<td>Other</td>
</tr>
<tr>
<td>IN</td>
<td>Intranasal</td>
</tr>
<tr>
<td>IA</td>
<td>Intraarticular</td>
</tr>
<tr>
<td>TD</td>
<td>Transdermal</td>
</tr>

</table>


### **Field Requirements**

The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the Injections CSV API specification. Additional details and considerations are provided here.

**Required**
The following fields are required:
* <em>Chart ID</em> (documents.pat_id) and <em>Chart ID Type</em> (documents.pat_id_type) are used to to correctly identify a chart.
* <em>External ID</em> (documents.ext_doc_id) identifies a record in the original data source (i.e., this is often the primary or unique key on the table of the legacy database that is being migrated to the MIE system).
* <em>Test Date/Time</em> (documents.service_date) is used to indicate when the test was conducted, and must be in SQL format. YYYY-MM-DD HH:MM:SS (2015-09-28 15:42:24).
* <em>Injection Description</em> (injections.description) is the text description of the injection given.

**Best Practice**
The following fields are optional, but provide useful details for record keeping purposes:
* <em>CDC Injection Code</em> (injections.inject_code) documents the CDC Immunization Information Systems CVX Codes. See [CDC Injection Codes](https://miewiki.med-web.com/wiki/index.php/Injections_CSV_API#CDC_Injection_Codes%7C).

**Optional fields**
The following optional fields are needed to link the document to a patient encounter:
* <em>Encounter External Identifier</em> (encounters.ext_id)
* <em>Encounter Interface</em> (encounters.interface)
Including the field encounter order_id will also create an encounter order of the identified in the field.


## **Examples**

Examples using sample data are provided on
* [Google spreadsheet](https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/pub?gid=1934551280&single=true)
* [Downloadable CSV](https://docs.google.com/spreadsheets/d/1LQYIL7YlYG0nwlKs_hUN_wCP_pPNSiJ5we8IbJxCExA/pub?gid=1934551280&single=true&output=csv)


## **Validation**

Unless otherwise specified, validation between the previous system and the new EH system requires the client to provide a number of test patients. This data can be compared in the previous system and EH using the validation test script.


## **Related Pages**

* [Data Import Master List](https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List)
