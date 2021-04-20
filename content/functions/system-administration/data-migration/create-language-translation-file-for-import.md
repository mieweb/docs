---
title: "Create Language Translation File for Import"
date: "2020-03-17T03:19:40.137Z"
url: "functions/system-administration/data-migration/create-language-translation-file-for-import.html"
version: 29
id: "1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A"
source: "https://drive.google.com/open?id=1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A"
menu:
    main:
        name: "Create Language Translation File for Import"
        identifier: "1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4840
---
This document explains how to import your language translation data into  {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* {{% system-name %}}  end user with administrative rights

## Create Language Translation Text File

The following table provides optional or required **Field Names** and **Descriptions**, as indicated by the **Requirement** column. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>**Field Name**</td>
    <td>**Description**</td>
    <td>**Requirement**</td>
    <td>**Column Header Name**</td>
  </tr>
  <tr>
    <td>LANGUAGE CODE</td>
    <td>
Code that identifies the language. Examples: sp = Spanish, zh-hans = Simplified Chinese

See: [https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
    </td>
    <td>**Required**</td>
    <td>LANGUAGE CODE</td>
  </tr>
  <tr>
    <td>CONTEXT</td>
    <td>Used to disambiguate phrases that may need to be translated differently depending on product area.</td>
    <td>**Optional**</td>
    <td>CONTEXT</td>
  </tr>
  <tr>
    <td>ENGLISH</td>
    <td>The original English text</td>
    <td>**Required**</td>
    <td>ENGLISH</td>
  </tr>
  <tr>
    <td>TRANSLATION</td>
    <td>Translated text</td>
    <td>**Required**</td>
    <td>TRANSLATION</td>
  </tr>
</table>



In Excel, save the sheet as Unicode Text.  This is important because **saving as CSV will NOT work** for many languages.

![](create-language-translation-file-for-import.images/image1.png)

## Upload Language Translation Text File

1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.



![](create-language-translation-file-for-import.images/image4.png)



3. Select the Data Import tab.



![](create-language-translation-file-for-import.images/image5.png)



4. Select the Language Translation CSV API from the drop-down menu and click Go.



![](create-language-translation-file-for-import.images/image3.png)



5. Choose Delimiter: (tab), select the Language Translation Text File and click Upload.

![](create-language-translation-file-for-import.images/image2.png)



## Example Files

* - UTF-8 encoded (preferred format for manually constructed files)
* - UTF-16LE encoded (accepted format for export from Excel)

## Resources

* [Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a Unicode Text formatted, tab delimited file. In case of any errors, contact Technical Support.

