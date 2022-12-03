---
id: '1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho'
title: 'Chart Data CSV Header Options'
date: '2022-06-15T16:48:55.681Z'
version: 594
lastAuthor: 'Bridget Hamm'
mimeType: 'text/x-markdown'
links:
  - 'chart-data-csv-api.md'
  - 'data-import-master-list.md'
  - 'chart-medical-record-number-mrn-import-options.md'
  - 'chart-observations-import-options.md'
  - 'https://confluence.mieweb.com/display/DOCS10/Chart+PUR+Import+Options'
source: 'https://drive.google.com/open?id=1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Chart Data CSV Header Options'
    identifier: '1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5050
---
The following page was created for technical staff involved in importing data to an Enterprise Health (EH) system. It outlines the process for importing specific fields with processing options using the [Chart Data CSV API](chart-data-csv-api.md). These options give the import the ability to process the field in a number of ways. This is especially useful for systems where the values may change or need to be removed entirely. Although the default process works in most situations, the options that follow allow a user to fine tune how the data is processed.  
The processes discussed on this page should only be performed with the guidance of an MIE subject matter expert. Mistakes in this process could have detrimental effects on an EH system.

  
### **Definitions**  

* An <strong>insertion</strong> occurs when new record is created, without affecting any data that are already in the database.
* An <strong>update</strong> occurs when a record is replaced with the new information.
* A <strong>deletion</strong> occurs when a record is removed from the database.
Related terminology is discussed on the [Chart Data CSV API](chart-data-csv-api.md) page.

  
## **Processing Fields with Options**  
  
To use these options, the values described below as 'INSERT Options', 'Blank Handling Options', and 'Distinct Options' need to be within the header row of the data file for them to take effect on a per-column basis. You can also utilize the checkboxes and dropdown lists in the CSV API user interface to enable for all columns in the CSV file. The options can be linked together to allow for both types of options. When linking them together, the options need to be separated by a 'space' if you're submitting them in the header row of the CSV file. If you're using the interface you need only select the desired options before submission of the file. Regardless, when using options, a space must always follow the option. Not all options are available for all fields. Please refer to specific pages for what is supported for each field, under the [Related Pages](chart-data-csv-api.md) section. If using the controls within the user interface the system will apply the options to all applicable columns automatically.  
Example:


```
  
  
{{% pre %}}  
  
  
...,DELETE_BLANK UPDATE @patient_mrns.MR,...  
  
  
  
{{% /pre %}}  
  
  
  

```
  
### **Insert Options**  

You can insert these values in the header row for each column you wish to apply them to, or select a value from the ‘Insert Options' dropdown menu from within the CSV API.

* INSERT - Always insert a new record. ‘Default' or ‘Insert' option in the user interface.
* REVISE - There's only 1 entry in whatever you're adding to. If there's a value there, and it's the same, ignore/skip the update. If it's different, add a revision for the old value (if applicable) and change the value of the old result to the new value. ‘Revise' option in the user interface.UPDATE - For cases in which more than one entry is allowed. Update the current record, if different. Revisions do not apply. DELETE_THEN_INSERT - Delete all existing entries on a table for the current record and then reload them with whatever is provided in the data file. This is a permanent deletion. ‘Delete Then Insert' option in the user interface.
* DEACTIVATE_THEN_REACTIVATE - Deactivate all existing entries on a table for the current record and then reactivate them with what is provided in the data file. 

  
### **Blank Handling Options**  

You can insert these values in the header row for each column you wish to apply them to, or select a value from the ‘Blank Options' dropdown menu from within the CSV API.

* ALLOW_BLANK - Allow a blank value to replace the existing value in an update/revision. ‘Default' or ‘Auto Assign' option in the user interface.
* IGNORE_BLANK - Ignore a blank value so that it does not affect existing entries. ‘Ignore Blank' option in the user interface.
* DELETE_BLANK - If the value is blank, delete the existing entry. ‘Delete Blank' option in the user interface.
* DEACTIVATE_BLANK - If the value is blank, deactivate the existing entry

  
### **Distinct Options**  

You can insert these values in the header row for each column you wish to apply them to, or select a value from the Distinct Options' dropdown menu from within the CSV API.

* ALLOW_DUPLICATE - Allow duplicate entries regardless. ‘Default' option in the user interface.
* DISTINCT - Require distinct values entries per record. ‘Distinct' option in the user interface.

  
### Location Options  

You can insert these values in the header row for each column you wish to apply them to, or select a value from the Location Options' dropdown menu from within the CSV API.

* INSIDE_LOCATION - Sets the clinic location to inside. ‘Default' or ‘Inside' option in the user interface.
* OUTSIDE_LOCATION - Sets the clinic location to outside. ‘Outside' option in the user interface.
* EO_LOCATION -  Create an Employer Organization and link it to the current chart with a Employer/Employee relationship. ‘Employer Organization' option in the user interface.

  
## **Translations**  

If it is undesired to add the options directly into the file header, it is possible to configure the options thru translations; mapping the original column header name to the desired column header name.

A translation entry needs a translation name, something to translate from, and something to translate to. In this case, reverse translations are used. This means that translate from and translate to are switched.

  
### **Name**  

There are two parts to the name: interface name and the category. The interface name should match whatever is used for the interface when the file is loaded; "WC_DATA_IMPORT" is the default interface. "column_alias" is the category.
When using the translation manager, the interface is entered into the "Interface Name" field, and "column_alias" is entered into the "Other Category" field if it is not found in the category drop-down list.

When loading the translation directly into the database, the name field is the the interface and the category separated by a hyphen. (e.g. "WC_DATA_IMPORT-column_alias")

  
### **Trans From**  

The Trans From field is what will replace the header column in the file. This will have the options listed before the header field. (e.g. "UPDATE DELETE_BLANK @patient_mrns.CCHIT)

  
### **Trans To**  

The Trans To field is the alias for the column; this is what is in the file. (e.g. "EmpID")

  
### **Translation Manager**  

Here is an example of using the Translation Manager to add a translation.


{{% anchor sys="related-pages" %}}
Related Pages
* [Data Import Master List](data-import-master-list.md)
* [Chart Data CSV API](chart-data-csv-api.md)
* [Chart MRNumber Import Options](chart-medical-record-number-mrn-import-options.md)
* [Chart Observations Import Options](chart-observations-import-options.md)
* [Chart PUR Import Options](https://confluence.mieweb.com/display/DOCS10/Chart+PUR+Import+Options)
