---
id: '1l0ydyWzazhlWSBsaaS0P5LPYpI6VLb8xkNO2pZvX3q0'
title: 'Custom Documents CSV API'
date: '2023-01-11T15:14:40.654Z'
version: 45
lastAuthor: 'Doug Horner'
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/images/3/32/Storage_Type_13.txt'
  - 'https://miewiki.med-web.com/wiki/images/a/ad/Lab_Request_supplemental_layout.pdf'
  - 'https://miewiki.med-web.com/wiki/images/6/69/Storage_Type_Header_13.txt'
  - 'https://miewiki.med-web.com/wiki/images/c/c3/Storage_type_1001_example.pdf'
source: 'https://drive.google.com/open?id=1l0ydyWzazhlWSBsaaS0P5LPYpI6VLb8xkNO2pZvX3q0'
wikigdrive: 'c35d35a9fcc46b2c2392b52072ee14a218f1010a'
---
Custom documents can be designed at the storage type level. When a layout is present in the system with module=Storage Type and name=<storage type>, this layout will be used to render the document.


## Existing Storage Types

A layout with module=Storage Type and name=<existing storage type> (<=27 as of 03/11/2015) will supersede the default document rendering for that storage type.


### Process

1) Determine the number of the storage type for which you want to create a custom layout. This can be done by looking either in the MySQL database or at the stg_DetailView[MAX_STGTYPES] array in storage.c (approx. line 1950).  
To view the storage types in MySQL run the following query:

{{% pre %}}
```

SELECT * FROM storage_types;
{{% /pre %}}

```

<table>
<tr>
<td>STORAGE_TYPE</td>
<td>FILE_EXT</td>
<td>CONTENT_TYPE</td>
<td>DESCRIPTION</td>
</tr>
<tr>
<td>0</td>
<td>txt</td>
<td>text/plain</td>
<td>Delete doc</td>
</tr>
<tr>
<td>1</td>
<td>txt</td>
<td>text/plain</td>
<td>Plain Text Document</td>
</tr>
<tr>
<td>2</td>
<td>rtf</td>
<td>text/richtext</td>
<td>RTF Document</td>
</tr>
<tr>
<td>3</td>
<td>png</td>
<td>image/png</td>
<td>PNG file</td>
</tr>
<tr>
<td>4</td>
<td>html</td>
<td>text/html</td>
<td>HTML file</td>
</tr>
<tr>
<td>5</td>
<td>html</td>
<td>text/html</td>
<td>IMG & TEXT/HTML file</td>
</tr>
<tr>
<td>6</td>
<td>doc</td>
<td>application/msword</td>
<td>WORD Document</td>
</tr>
<tr>
<td>7</td>
<td>tif</td>
<td>image/tiff</td>
<td>TIFF Documents</td>
</tr>
<tr>
<td>8</td>
<td>jpg</td>
<td>image/jpeg</td>
<td>JPEG Documents</td>
</tr>
<tr>
<td>9</td>
<td>bin</td>
<td>application/octet-stream</td>
<td>Binary Documents</td>
</tr>
<tr>
<td>10</td>
<td>dcm</td>
<td>application/dicom</td>
<td>DICOM Documents</td>
</tr>
<tr>
<td>11</td>
<td>htm</td>
<td>text/html</td>
<td>TASK</td>
</tr>
<tr>
<td>12</td>
<td>htm</td>
<td>text/html</td>
<td>Injection</td>
</tr>
<tr>
<td>13</td>
<td>htm</td>
<td>text/html</td>
<td>Lab Request</td>
</tr>
<tr>
<td>14</td>
<td>txt</td>
<td>text/plain</td>
<td>Pre-Formated Text</td>
</tr>
<tr>
<td>15</td>
<td>htm</td>
<td>text/html</td>
<td>Orders</td>
</tr>
<tr>
<td>16</td>
<td>htm</td>
<td>text/html</td>
<td>Mammo Tracking</td>
</tr>
<tr>
<td>17</td>
<td>pdf</td>
<td>application/pdf</td>
<td>PDF file</td>
</tr>
<tr>
<td>18</td>
<td>xls</td>
<td>application/vnd.ms-excel</td>
<td>MS Excel</td>
</tr>
<tr>
<td>19</td>
<td>cda</td>
<td>application/x-hl7-cda</td>
<td>CDA Document</td>
</tr>
<tr>
<td>20</td>
<td>avi</td>
<td>video/x-msvideo</td>
<td>AVI Video Document</td>
</tr>
<tr>
<td>21</td>
<td>ccr</td>
<td>text/xml</td>
<td>CCR Document</td>
</tr>
<tr>
<td>22</td>
<td>mime</td>
<td>multipart/mixed</td>
<td>Email</td>
</tr>
<tr>
<td>23</td>
<td>htm</td>
<td>text/html</td>
<td>OCP Audio</td>
</tr>
<tr>
<td>24</td>
<td>htm</td>
<td>text/html</td>
<td>Pulmonary Function Test</td>
</tr>
<tr>
<td>25</td>
<td>bmp</td>
<td>image/x-bmp</td>
<td>BMP</td>
</tr>
<tr>
<td>26</td>
<td>x12</td>
<td>application/edi-x12</td>
<td>X12 Messages</td>
</tr>
<tr>
<td>27</td>
<td>xml</td>
<td>text/xml</td>
<td>XML</td>
</tr>

</table>

```


```
2) Create a new layout. Set the module=Storage Type. Set the name to be the value from the storage_type column of the storage_types table or the number shown in comments in storage.c. For example, a Lab Request is storage type 13. To create a layout for lab requests, name=13.
3) Add the desired HTML to the layout. To replicate the information in the default document, follow the code in the appropriate function from the stg_DetailView array. For lab requests, this function is stg_DetailViewLabReq().

{{% info %}}
These documents will only be rendered with a header if a custom header layout is created with module=Storage Type Header and name is the same as the storage type layout. Additionally, these layouts will override the default rendering for all documents in the system with that storage type.
{{% /info %}}


### Example Files

Example files are not fully functional copies of the default document rendering.
[Lab Request custom layout](https://miewiki.med-web.com/wiki/images/3/32/Storage_Type_13.txt) (module=Storage Type, name=13)
[Lab Request supplemental layout](https://miewiki.med-web.com/wiki/images/a/ad/Lab_Request_supplemental_layout.pdf) (module=wcquery, name=13 display)
[Lab Request custom header layout](https://miewiki.med-web.com/wiki/images/6/69/Storage_Type_Header_13.txt) (module=Storage Type Header, name=13)


## Custom Storage Types

Storage types >= 1001 can be added to create a custom document rendered with a layout.


### Process

1) Insert a new storage type into the storage_types table.

{{% pre %}}
```


<1001+>,,,);INSERT INTO storage_types (storage_type, file_ext, content_type, description) VALUES (
{{% /pre %}}


```
For example,

{{% pre %}}
```


INSERT INTO storage_types (storage_type, file_ext, content_type, description) VALUES (1001,'html','text/html','Test new storage type');
{{% /pre %}}


```
2) Add a new document with the new storage type you just created. This can be done by navigating to a patient's chart and clicking the Add Document link. Add a text document and copy the id. Then manually update the document with that id to have your new storage type.

{{% pre %}}
```


 WHERE doc_id=;UPDATE documents SET storage_type=
{{% /pre %}}


```
You can also perform a manual insert into the documents table.
3) Create a new layout. Set the module=Storage Type. Set the name to be the new storage type >= 1001.
4) Add the desired HTML to the layout.

{{% info %}}
These documents will only be rendered with a header if a custom header layout is created with module=Storage Type Header and name is the same as the storage type layout.
{{% /info %}}


### Example Files

[Custom Storage type example](https://miewiki.med-web.com/wiki/images/c/c3/Storage_type_1001_example.pdf)
