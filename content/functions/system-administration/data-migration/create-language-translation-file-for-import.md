---
id: '1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A'
title: 'Create Language Translation File for Import'
date: '2020-03-17T03:19:40.137Z'
version: 33
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry'
source: 'https://drive.google.com/open?id=1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Create Language Translation File for Import'
    identifier: '1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4860
---
This document explains how to import your language translation data into  {{% system-name %}} .  
What you will need:
* Spreadsheet software (Microsoft Excel or Google Sheets)
{{% system-name %}}*   end user with administrative rights
  
## Create Language Translation Text File  
  
The following table provides optional or required **Field Names** and **Descriptions**, as indicated by the **Requirement** column. The order of the remaining fields does not matter.


<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
<td><strong>Column Header Name</strong></td>
</tr>
<tr>
<td>LANGUAGE CODE</td>
<td>Code that identifies the language. Examples: sp = Spanish, zh-hans = Simplified Chinese
See: <a href="https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry">https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry</a></td>
<td><strong>Required</strong></td>
<td>LANGUAGE CODE</td>
</tr>
<tr>
<td>CONTEXT</td>
<td>Used to disambiguate phrases that may need to be translated differently depending on product area.</td>
<td><strong>Optional</strong></td>
<td>CONTEXT</td>
</tr>
<tr>
<td>ENGLISH</td>
<td>The original English text</td>
<td><strong>Required</strong></td>
<td>ENGLISH</td>
</tr>
<tr>
<td>TRANSLATION</td>
<td>Translated text</td>
<td><strong>Required</strong></td>
<td>TRANSLATION</td>
</tr>

</table>

In Excel, save the sheet as Unicode Text.  This is important because **saving as CSV will NOT work** for many languages.
  
![](../create-language-translation-file-for-import.assets/25dc2afd0528e1c7a27167edd30ed8d1.png)  

  
## Upload Language Translation Text File  

1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.

  
![](../create-language-translation-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)  


3. Select the Data Import tab.

  
![](../create-language-translation-file-for-import.assets/197af282190b350e97494ffba0636d29.png)  


4. Select the Language Translation CSV API from the drop-down menu and click Go.

  
![](../create-language-translation-file-for-import.assets/54cd31630e4b044a2caeb7278c721a22.png)  


5. Choose Delimiter: (tab), select the Language Translation Text File and click Upload.
  
![](../create-language-translation-file-for-import.assets/a20e7b30d9fd81f1bcb85dc70d3b93ec.png)  


  
## Example Files  

* - UTF-8 encoded (preferred format for manually constructed files)
* - UTF-16LE encoded (accepted format for export from Excel)
  
## Resources  

* [Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
  
## Troubleshooting  
  
Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a Unicode Text formatted, tab delimited file. In case of any errors, contact Technical Support.
