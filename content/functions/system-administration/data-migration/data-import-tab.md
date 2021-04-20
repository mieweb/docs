---
title: "Data Import Tab"
date: "2020-03-17T03:04:04.539Z"
url: "functions/system-administration/data-migration/data-import-tab.html"
version: 50
id: "1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y"
source: "https://drive.google.com/open?id=1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y"
menu:
    main:
        name: "Data Import Tab"
        identifier: "1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4790
---
Must have security access to access the DATA IMPORT tab found in Control Panel sidemenu tab. The security needed is *Allow .csv Data Import* set to Yes. The default security is currently set to No for users.



![](data-import-tab.images/image2.png)



If user(s) have security permission to allow .csv data import, then the user(s) can access the DATA IMPORT tab, this feature allows the user access to download a .csv template file and fill in patient demographic data using a spreadsheet application. If you have it set to NO, you can't view or access the Data Import tab at all.



![](https://lh3.googleusercontent.com/POZhPnjGzyzUVeHC2erXGvk5ASi0RqfwKPkQmAWQm6Jpl_e9omd0SAnYMF4q2cZh6qQIqvRk3_YEm-3h_ME3g7e1uyL7na7dkAzfGZB6YtcRjyOfZj3bwmLy0XX9lRSaXOdn_LRwPxdhOM-GXw)



If your system does not have a Data Import tab, please contact your MIE Implementer to have the tab programmed on your system.



![](https://lh6.googleusercontent.com/-TPnVJ2Led5TCZjQT69tDg2OKCNv4cBbjz7YA8N33oCNLCasem_swi4sEWxDdcg0c4gHmiLVj7GZNt-I5pDXERNvDMMglYmX9vDZmc4JjmyEalbqNxnJUNjELQekMZIEUKjMROpwt56p0vExKw)



Once in the Data Import tab, use the drop down to select the {{% system-name %}} data import type and click the GO button.



![](data-import-tab.images/image6.png)



Once you've made the drop-down selection and clicked the GO button, it will open up download instructions to download your .csv template file. User(s) are able to download a .csv template file and fill in patient demographic data using a spreadsheet application.



{{% note %}}

Make sure your file you will be importing is set up to mirror the columns EXACTLY how they are listed (in same order) as each module shows.

{{% /note %}}


## Patient Demographics Import



To include Patient Extended Values (PEV) in the import, column headers must include the prefix "#pev." or "@pev." The PEV columns must be included after all of the Patient Demographics columns. There can be up to 25 PEV columns. The file will not be accepted if empty fields are between column headers.



![](data-import-tab.images/image5.png)



{{% tip %}}

This demographics import also allows Patient Extended Values to be imported with Patient Demographics.

{{% /tip %}}


* <strong>Interface</strong>: allows you to specify which interface to store to find the patient.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.



Hover your mouse over any of the column titles to show a full description of each element.



![](data-import-tab.images/image8.png)



Patient lookup is now based on MRN, last name, firstname, and DOB. If 1 match is found, then that patient is updated, otherwise the patient is inserted. No longer inserting patients as temporary; patients will be created as active non-temp charts. Import will create/update an ‘IIC' encounter for every admission in the data file, but will distinguish different types using stages: Historic Admit, Import Update, & Current Admit.



## Schedule (Appointments) Import



![](data-import-tab.images/image7.png)



* <strong>Interface</strong>: allows you to specify which interface to store to find the appointments.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.



{{% tip %}}

The start/end appointment dates & time format is YYYYMMDD HHMMSS



For example, 02 April 2014 at 3:16 pm would look like 10140402 151600



{{% /tip %}}






## Observations Import



![](data-import-tab.images/image10.png)



* <strong>Interface</strong> & <strong>Partition</strong>: allow you to specify which interface to store and which partition to use to find the patient.
* <strong>Link to Encounter</strong>: allows the ability for the observation import to link observations to encounters. Select the visit type from the drop-down in this file upload screen for observations. The drop-down has a blank value for the first value. If that blank is used, the observations will not be linked to any encounters. If a visit type is selected, then the observations will be linked. It links encounters that have the same service date as the observation's observed date and the same pat_id and the visit type selected. The linking happens on observation insert only.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.



{{% tip %}}

First and Last name are optional fields when importing observations. If names are given, they will be validated.

{{% /tip %}}


## Lab Result Import



![](data-import-tab.images/image9.png)



* <strong>Interface</strong> & <strong>Partition</strong>: allow you to specify which interface to store and which partition to use to find the patient.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Fee Schedule Import



Fee schedule import will create/update fee schedules and CPT codes in {{% system-name %}} . If the file contains duplicate CPT codes, then subsequent duplicate CPT codes are inserted with comma and count, ie A123,2 and the fee that is associated to them. The tool will check the CPT Manager to ensure the code exists in your {{% system-name %}} database. If the code exists, then it will insert the code and fee into the fee schedule. If it does not exist, a CPT will be added to the CPT Manager with the description on the Import tool, then it will insert the code and fee schedule.



![](data-import-tab.images/image13.png)



* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Asset Import



Asset import will create/update assets (usually in separate partition) with specific field contents in {{% system-name %}} when utilizing the Asset Management module.



![](data-import-tab.images/image11.png)



* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Encounter Order Completion Import



This data import is for importing Completed Encounter Orders. The import tool takes in a CSV file of MR numbers, completion & modified dates with associated order ids and sets their status to complete if they exist or creates them and completes them if they do not exist. For each row in the data file, it would identify the person based on the partition and MR#, then for each order_id column, it would look for a pending order of that type for that person (and if multiple are found, only the most recently created would be modified). If a pending order is found, it would be completed. Otherwise, a completed order would be added. The *comment* in the CSV import file would be applied to all modified or created orders.



![](data-import-tab.images/image12.png)



* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file

## Order List and Order Questions Imports



These data import modules are for importing Order list catalogs and Order questions and this will allow for upload of compendiums, order sets, and ask any order entry questions.



![](data-import-tab.images/image14.png)



* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Clinical Encounter Import



This import tool allows the adding of encounters from a spreadsheet that also imports lost time (incident/cases) data which may be needed when converting data from a separate system into {{% system-name %}} for work related incidents/encounters. See other help documentation titled *Data Import-Lost Time Import Tool.pdf*

![](data-import-tab.images/image15.png)
## Panel Membership Import



This import tool allows the adding of patients from a spreadsheet to specified Health Surveillance Panels as members.



![](data-import-tab.images/image16.png)



For a list of your systems active panel membership options, please utilize the  help bubble in this import for correct panel id mapping.



![](data-import-tab.images/image1.png)



## Download Export

Not only can you import data using the Data Import tool, but you can export specific data that exists in your current {{% system-name %}} system (from those same category options) out into an excel file. Clicking the *Download xxx export* button (dependent on which import "type" you selected) will generate and pull that data from {{% system-name %}} and export it to an excel/csv file. Not all import type options offer a *download export* though.



![](data-import-tab.images/image17.png)
