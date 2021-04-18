---
title: "Custom Documents CSV API"
date: "2020-02-27T21:00:26.519Z"
url: "general-functionality/system-administration/data-migration/custom-documents-csv-api.html"
version: 15
id: "1l0ydyWzazhlWSBsaaS0P5LPYpI6VLb8xkNO2pZvX3q0"
source: "https://drive.google.com/open?id=1l0ydyWzazhlWSBsaaS0P5LPYpI6VLb8xkNO2pZvX3q0"
menu:
    main:
        name: "Custom Documents CSV API"
        identifier: "1l0ydyWzazhlWSBsaaS0P5LPYpI6VLb8xkNO2pZvX3q0"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5140
---
Custom documents can be designed at the storage type level. When a layout is present in the system with module=Storage Type and name=<storage type>, this layout will be used to render the document.



## Existing Storage Types

A layout with module=Storage Type and name=<existing storage type> (<=27 as of 03/11/2015) will supersede the default document rendering for that storage type.



### Process

1) Determine the number of the storage type for which you want to create a custom layout. This can be done by looking either in the MySQL database or at the stg_DetailView[MAX_STGTYPES] array in storage.c (approx. line 1950).

To view the storage types in MySQL run the following query:



{{% pre %}}

` SELECT * FROM storage_types; 
`
{{% /pre %}}


` 
`
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

` <1001+>,,,);INSERT INTO storage_types (storage_type, file_ext, content_type, description) VALUES ( 
`
{{% /pre %}}


` 
`
For example,



{{% pre %}}

` INSERT INTO storage_types (storage_type, file_ext, content_type, description) VALUES (1001,'html','text/html','Test new storage type'); 
`
{{% /pre %}}


` 
`
2) Add a new document with the new storage type you just created. This can be done by navigating to a patient's chart and clicking the Add Document link. Add a text document and copy the id. Then manually update the document with that id to have your new storage type.



{{% pre %}}

`  WHERE doc_id=;UPDATE documents SET storage_type= 
`
{{% /pre %}}


` 
`
You can also perform a manual insert into the documents table.

3) Create a new layout. Set the module=Storage Type. Set the name to be the new storage type >= 1001.

4) Add the desired HTML to the layout.

{{% info %}}

These documents will only be rendered with a header if a custom header layout is created with module=Storage Type Header and name is the same as the storage type layout.

{{% /info %}}


### Example Files

[Custom Storage type example](https://miewiki.med-web.com/wiki/images/c/c3/Storage_type_1001_example.pdf)

