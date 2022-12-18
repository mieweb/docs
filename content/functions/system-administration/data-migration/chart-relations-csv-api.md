---
id: '1FeHqSQOLwrYVUNALv6-FE9glcnBAUgFSbJxwzpiba_k'
title: 'Chart Relations CSV API'
date: '2020-02-28T15:25:48.497Z'
version: 34
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'data-import-overview.md'
  - 'data-import-standards.md'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Chart_rel_ex1.csv'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Chart_rel_ex2.csv'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1FeHqSQOLwrYVUNALv6-FE9glcnBAUgFSbJxwzpiba_k'
wikigdrive: '9aa22efbf239d13b6bed97b4271001468ab4aa59'
menu:
  main:
    name: 'Chart Relations CSV API'
    identifier: '1FeHqSQOLwrYVUNALv6-FE9glcnBAUgFSbJxwzpiba_k'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4980
---
The purpose of this page is to define data and fields that may be imported into MIE systems (i.e., WebChart, Enterprise Health) using the Chart Relations Import.
  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Chart Relations CSV API. Technical details are provided in the remaining sections.
  
### **Abstract**  
  
The Chart Relations CSV API is used to import various relationships between charts; between patients, users, organizations, or other entities.  
A **chart** is a patient's electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual patient. A chart can represent a person, organization, or other entity. Chart-to-chart relationships are used by {{% system-name %}} systems to connect a patient (employee) to another patient (employee), patient population (employee group), or non-employees.

A **relation type** is used to define the type of connection between two charts. See the [Relation Types section](#gjdgxs) for more information. CSV refers to the type of file and format of data needed to import information into the {{% sys-name %}} system. API refers to how the data interacts with the  {{% sys-name %}} system. See the [Import Overview](data-import-overview.md) page for a more detailed explanation of terminology.
  
## **Specifications**  
  
The following detailed specifications are available for the Chart Relations CSV API:
* [User instructions for importing data](#30j0zll).
  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification information below. Commonly used specific coded values appear on the [Data Import Standards](data-import-standards.md) page.  
High Level: Patient 2 is related to Patient 1 with Relation Type.
* R = Required
* O = Optional

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Required</td>
<td>Comments</td>
</tr>
<tr>
<td>PAT1_PARTITION</td>
<td>char</td>
<td>R</td>
<td>Partition of first patient</td>
</tr>
<tr>
<td>PAT1_MRN</td>
<td>integer</td>
<td>R</td>
<td>MR Number of first patient</td>
</tr>
<tr>
<td>PAT2_PARTITION</td>
<td>char</td>
<td>R</td>
<td>Partition of second patient</td>
</tr>
<tr>
<td>PAT2_MRN</td>
<td>integer</td>
<td>R</td>
<td>MR Number of second patient</td>
</tr>
<tr>
<td>RELATION_TYPE_ID</td>
<td>integer</td>
<td>R</td>
<td>Relation type between both patients</td>
</tr>

</table>
{{% anchor sys="relation-types" %}}
Relation Types
The following table outlines default relation types.

<table>
<tr>
<td>Relation Type</td>
<td>Relation ID</td>
</tr>
<tr>
<td>Self</td>
<td>1</td>
</tr>
<tr>
<td>Spouse</td>
<td>2</td>
</tr>
<tr>
<td>Parent</td>
<td>3</td>
</tr>
<tr>
<td>Grandparent</td>
<td>4</td>
</tr>
<tr>
<td>Child</td>
<td>5</td>
</tr>
<tr>
<td>Sibling</td>
<td>6</td>
</tr>
<tr>
<td>Aunt/Uncle</td>
<td>7</td>
</tr>
<tr>
<td>Cousin</td>
<td>8</td>
</tr>
<tr>
<td>Mother</td>
<td>9</td>
</tr>
<tr>
<td>Father</td>
<td>10</td>
</tr>
<tr>
<td>Unknown</td>
<td>11</td>
</tr>
<tr>
<td>Grandchild</td>
<td>12</td>
</tr>
<tr>
<td>Niece/Nephew</td>
<td>13</td>
</tr>
<tr>
<td>Provider</td>
<td>14</td>
</tr>
<tr>
<td>Provider Organization</td>
<td>15</td>
</tr>
<tr>
<td>Contact</td>
<td>16</td>
</tr>
<tr>
<td></td>
<td>[[Relation Type ID]]</td>
</tr>

</table>
These ID numbers vary from system to system, and because of this, a help bubble in the import tool describes the available relation types.

  
## **Example**  

In this example we are using William Hart's chart to establish a sibling relationship with Jane Doe.

  
### **Examples of CSV**  

Adding a Credentialing Contact (RELATION_TYPE_ID: 20) relationship between two patients (MIE 10019 & MIE 10006)
MIE 10006 is a Credentialing Contact for MIE 10019.


```
  
  
{{% pre %}}  
  
  
PAT1_PARTITION,PAT1_MRN,PAT2_PARTITION,PAT2_MRN,RELATION_TYPE_ID  
MIE,10019,MIE,10006,20  
  
  
  
{{% /pre %}}  
  
  

```
[Example file 1](https://miewiki.med-web.com/wiki/index.php/File:Chart_rel_ex1.csv)
Adding multiple relations between patients:


```
  
  
{{% pre %}}  
  
  
PAT1_PARTITION,PAT1_MRN,PAT2_PARTITION,PAT2_MRN,RELATION_TYPE_ID  
MIE,10019,MIE,10006,20  
MIE,10021,MIE,10020,3  
CCHIT,41205325,MIE,10019,8  
  
  
  
{{% /pre %}}  
  
  

```
[Example file 2](https://miewiki.med-web.com/wiki/index.php/File:Chart_rel_ex2.csv)
  
## **Related Pages**  

[Data Import Master List](data-import-master-list.md)
