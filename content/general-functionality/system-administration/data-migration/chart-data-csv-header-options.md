---
title: "Chart Data CSV Header Options"
date: 2020-02-28T15:24:56.361Z
url: "general-functionality/system-administration/data-migration/chart-data-csv-header-options.html"
author: aquandt
version: 22
id: 1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho
source: https://drive.google.com/open?id=1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho
menu:
    main:
        name: "Chart Data CSV Header Options"
        identifier: "1dVS4ah3VUay6OaQIpuyb7wwbErgLn4ko4U-MnPbQUho"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5050
---
The following page was created for technical staff involved in importing data to an Enterprise Health (EH) system. It outlines the process for importing specific fields with processing options using the [Chart Data CSV API](chart-data-csv-api.html). These options give the import the ability to process the field in a number of ways. This is especially useful for systems where the values may change or need to be removed entirely. Although the default process works in most situations, the options that follow allow a user to fine tune how the data is processed.

The processes discussed on this page should only be performed with the guidance of an MIE subject matter expert. Mistakes in this process could have detrimental effects on an EH system.



### Definitions

* An <strong>insertion</strong> occurs when new record is created, without affecting any data that are already in the database.
* An <strong>update</strong> occurs when a record is replaced with the new information.
* A <strong>deletion</strong> occurs when a record is removed from the database.

Related terminology is discussed on the [Chart Data CSV API](chart-data-csv-api.html) page.



## Processing Fields with Options

To use these options, the values described below as 'INSERT Options', 'Blank Handling Options', and 'Distinct Options' need to be within the header row of the data file. The options can be linked together to allow for both types of options. When linking them together, the options need to be separated by a 'space'. Regardless, when using options, a space must always follow the option. Not all options are available for all fields. Please refer to specific pages for what is supported for each field, under the Related Pages section.

Example:



` `{{% pre %}}

`  ...,DELETE_BLANK UPDATE @patient_mrns.MR,... 
`
` `{{% /pre %}}


`  
`
`
`
### Insert Options

* INSERT - Always insert a new record.
* REVISE - There's only 1 entry in whatever you're adding to. If there's a value there, and it's the same, ignore/skip the update. If it's different, add a revision for the old value (if applicable) and change the value of the old result to the new value.
* UPDATE - For cases in which more than one entry is allowed. Update the current record, if different. Revisions do not apply.
* DELETE_THEN_INSERT - Delete all existing entries on a table for the current record and then reload them with whatever is provided in the data file. This is a permanent deletion.
* DEACTIVATE_THEN_REACTIVATE - Deactivate all existing entries on a table for the current record and then reactivate them with what is provided in the data file.



### Blank Handling Options

* ALLOW_BLANK - Allow a blank value to replace the existing value in an update/revision
* IGNORE_BLANK - Ignore a blank value so that it does not affect existing entries
* DELETE_BLANK - If the value is blank, delete the existing entry
* DEACTIVATE_BLANK - If the value is blank, deactivate the existing entry



### Distinct Options

* ALLOW_DUPLICATE - Allow duplicate entries regardless.
* DISTINCT - Require distinct values entries per record.



## Translations

If it is undesired to add the options directly into the file header, it is possible to configure the options thru translations; mapping the original column header name to the desired column header name.

A translation entry needs a translation name, something to translate from, and something to translate to. In this case, reverse translations are used. This means that translate from and translate to are switched.



### Name

There are two parts to the name: interface name and the category. The interface name should match whatever is used for the interface when the file is loaded; "WC_DATA_IMPORT" is the default interface. "column_alias" is the category.

When using the translation manager, the interface is entered into the "Interface Name" field, and "column_alias" is entered into the "Other Category" field if it is not found in the category drop-down list.

When loading the translation directly into the database, the name field is the the interface and the category separated by a hyphen. (e.g. "WC_DATA_IMPORT-column_alias")



### Trans From

The Trans From field is what will replace the header column in the file. This will have the options listed before the header field. (e.g. "UPDATE DELETE_BLANK @patient_mrns.CCHIT)



### Trans To

The Trans To field is the alias for the column; this is what is in the file. (e.g. "EmpID")



### Translation Manager

Here is an example of using the Translation Manager to add a translation.





{{% anchor sys="related-pages" %}}

Related Pages

* [Data Import Master List](data-import-master-list.html)
* [Chart Data CSV API](chart-data-csv-api.html)
* [Chart MRNumber Import Options](chart-medical-record-number-mrn-import-op.html)
* [Chart Observations Import Options](chart-observations-import-options.html)
* [Chart PUR Import Options](https://confluence.mieweb.com/display/DOCS10/Chart+PUR+Import+Options)
