---
title: "Create Language Translation File for Import"
date: 2020-03-17T03:19:40.137Z
url: "general-functionality/system-administration/data-migration/create-language-translation-file-for-import.html"
author: Jeremia Ploor
version: 22
id: 1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A
source: https://drive.google.com/open?id=1gw2TaukmbchitBFj-iiALpqsD2Xhj4zDCqoZi0iJT2A
---
This document explains how to import your language translation data into  {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* {{% system-name %}}  end user with administrative rights

## Create Language Translation Text File

The following table provides optional or required **Field Names** and **Descriptions**, as indicated by the **Requirement** column. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>
**Field Name**

    </td>
    <td>
**Description**

    </td>
    <td>
**Requirement**

    </td>
    <td>
**Column Header Name**

    </td>
  </tr>
  <tr>
    <td>
LANGUAGE CODE

    </td>
    <td>
Code that identifies the language. Examples: sp = Spanish, zh-hans = Simplified Chinese

See: [https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

    </td>
    <td>
**Required**

    </td>
    <td>
LANGUAGE CODE

    </td>
  </tr>
  <tr>
    <td>
CONTEXT

    </td>
    <td>
Used to disambiguate phrases that may need to be translated differently depending on product area.

    </td>
    <td>
**Optional**

    </td>
    <td>
CONTEXT

    </td>
  </tr>
  <tr>
    <td>
ENGLISH

    </td>
    <td>
The original English text

    </td>
    <td>
**Required**

    </td>
    <td>
ENGLISH

    </td>
  </tr>
  <tr>
    <td>
TRANSLATION

    </td>
    <td>
Translated text

    </td>
    <td>
**Required**

    </td>
    <td>
TRANSLATION

    </td>
  </tr>
</table>



In Excel, save the sheet as Unicode Text.  This is important because **saving as CSV will NOT work** for many languages.

![](../../../external_files/a706ec6de243883cadce1f6fa6e8851c.png)

## Upload Language Translation Text File

1. Login as a user with administrator rights.
2. Navigate to the Control Panel from the side menu.



![](../../../external_files/7bd529d305026a46c3f1fd15a4b2b073.png)



3. Select the Data Import tab.



![](../../../external_files/6ad90004bcde1af68316b8ca0dc908ba.png)



4. Select the Language Translation CSV API from the drop-down menu and click Go.



![](../../../external_files/4bd0a5209d4737a6e41b314a8d4ab323.png)



5. Choose Delimiter: (tab), select the Language Translation Text File and click Upload.

![](../../../external_files/56e491cf5c23c688422a7d5d2e833c12.png)



## Example Files

* - UTF-8 encoded (preferred format for manually constructed files)
* - UTF-16LE encoded (accepted format for export from Excel)

## Resources

* [Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a Unicode Text formatted, tab delimited file. In case of any errors, contact Technical Support.

