---
id: '1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y'
title: 'Data Import Tab'
date: '2025-06-26T13:45:05.822Z'
version: 151
lastAuthor: 'fandreacchi'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ZOBDNHRK'
source: 'https://drive.google.com/open?id=1BrKs6e4cOvDJiao6uAJib7mYJ1sROSQds2wEI6SS35Y'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Must have security access to access the DATA IMPORT tab found in Control Panel sidemenu tab. The security needed is *Allow .csv Data Import* set to Yes. The default security is currently set to No for users.

![](../data-import-tab.assets/99290c0ea77278f28baacc397e311269.png)

If user(s) have security permission to allow .csv data import, then the user(s) can access the DATA IMPORT tab, this feature allows the user access to download a .csv template file and fill in patient demographic data using a spreadsheet application. If you have it set to NO, you can't view or access the Data Import tab at all.

![](../data-import-tab.assets/62d283a832787b647c120b8a96a55f7b.jpg)

If your system does not have a Data Import tab, please contact your MIE Implementer to have the tab programmed on your system.

![](../data-import-tab.assets/36a741ea142b701dc8f711b5500701f8.jpg)

Once in the Data Import tab, use the drop down to select the {{% system-name %}} data import type and click the GO button.

![](../data-import-tab.assets/86fdf52e63c3ed1ea5aadc877c1c34ce.png)

Once you've made the drop-down selection and clicked the GO button, it will open up download instructions to download your .csv template file. User(s) are able to download a .csv template file and fill in patient demographic data using a spreadsheet application.

{{% note %}}
Make sure your file you will be importing is set up to mirror the columns EXACTLY how they are listed (in same order) as each module shows.
{{% /note %}}

## Patient Demographics Import

To include Patient Extended Values (PEV) in the import, column headers must include the prefix "#pev." or "@pev." The PEV columns must be included after all of the Patient Demographics columns. There can be up to 25 PEV columns. The file will not be accepted if empty fields are between column headers.

![](../data-import-tab.assets/c39da07b6188ab2d88677911666a317b.png)

{{% tip %}}
This demographics import also allows Patient Extended Values to be imported with Patient Demographics.
{{% /tip %}}

* <strong>Interface</strong>: allows you to specify which interface to store to find the patient.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

Hover your mouse over any of the column titles to show a full description of each element.

![](../data-import-tab.assets/8dd67c0448ab093b0f87a69d86944fed.png)

Patient lookup is now based on MRN, last name, firstname, and DOB. If 1 match is found, then that patient is updated, otherwise the patient is inserted. No longer inserting patients as temporary; patients will be created as active non-temp charts. Import will create/update an ‘IIC' encounter for every admission in the data file, but will distinguish different types using stages: Historic Admit, Import Update, & Current Admit.

## Schedule (Appointments) Import

![](../data-import-tab.assets/40e728c4b2a87a29c8af8ecb42f5b4bd.png)

* <strong>Interface</strong>: allows you to specify which interface to store to find the appointments.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

{{% tip %}}
The start/end appointment dates & time format is YYYYMMDD HHMMSS



For example, 02 April 2014 at 3:16 pm would look like 10140402 151600


{{% /tip %}}

## Observations Import

![](../data-import-tab.assets/adf83551d73f4683ef830220911c3ee1.png)

* <strong>Interface</strong> & <strong>Partition</strong>: allow you to specify which interface to store and which partition to use to find the patient.
* <strong>Link to Encounter</strong>: allows the ability for the observation import to link observations to encounters. Select the visit type from the drop-down in this file upload screen for observations. The drop-down has a blank value for the first value. If that blank is used, the observations will not be linked to any encounters. If a visit type is selected, then the observations will be linked. It links encounters that have the same service date as the observation's observed date and the same pat_id and the visit type selected. The linking happens on observation insert only.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

{{% tip %}}
First and Last name are optional fields when importing observations. If names are given, they will be validated.
{{% /tip %}}

## Lab Result Import

![](../data-import-tab.assets/ee4552dde3b3f8b12b9601effddc2d74.png)

* <strong>Interface</strong> & <strong>Partition</strong>: allow you to specify which interface to store and which partition to use to find the patient.
* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Fee Schedule Import

Fee schedule import will create/update fee schedules and Billing codes in {{% system-name %}} . If the file contains duplicate Billing codes, then subsequent duplicate Billing codes are inserted with comma and count, ie A123,2 and the fee that is associated to them. The tool will check the Billing Manager to ensure the code exists in your {{% system-name %}} database. If the code exists, then it will insert the code and fee into the fee schedule. If it does not exist, a Billing will be added to the Billing Manager with the description on the Import tool, then it will insert the code and fee schedule.

![](../data-import-tab.assets/471d0b2341881978eaa13662fbb05d44.png)

* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Asset Import

Asset import will create/update assets (usually in separate partition) with specific field contents in {{% system-name %}} when utilizing the Asset Management module.

![](../data-import-tab.assets/d58b8becf4bac495ba96d38fb3c4750d.png)

* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Encounter Order Completion Import

This data import is for importing Completed Encounter Orders. The import tool takes in a CSV file of MR numbers, completion & modified dates with associated order ids and sets their status to complete if they exist or creates them and completes them if they do not exist. For each row in the data file, it would identify the person based on the partition and MR#, then for each order_id column, it would look for a pending order of that type for that person (and if multiple are found, only the most recently created would be modified). If a pending order is found, it would be completed. Otherwise, a completed order would be added. The *comment* in the CSV import file would be applied to all modified or created orders.

![](../data-import-tab.assets/d8a65119d5e01c4e73a652871c86af90.png)

* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file

## Order List and Order Questions Imports

These data import modules are for importing Order list catalogs and Order questions and this will allow for upload of compendiums, order sets, and ask any order entry questions.

![](../data-import-tab.assets/e72e65500f24f148088df65ebd9d114c.png)

* <strong>Verbose</strong>: mode will print out what the import is doing to the screen and the log file.

## Clinical Encounter Import

This import tool allows the adding of encounters from a spreadsheet that also imports lost time (incident/cases) data which may be needed when converting data from a separate system into {{% system-name %}} for work related incidents/encounters. See other help documentation titled *Data Import-Lost Time Import Tool.pdf*

![](../data-import-tab.assets/68237b1e42add0557c7dc77e196f333c.png)

## Panel Membership Import

This import tool allows the adding of patients from a spreadsheet to specified Health Surveillance Panels as members.

![](../data-import-tab.assets/04209323fa3a8dbfcc514492e99deefa.png)

For a list of your systems active panel membership options, please utilize the 
![](../data-import-tab.assets/bfbd8ddf9c846e1f985e44f63eaa3e57.png)
 help bubble in this import for correct panel id mapping.

![](../data-import-tab.assets/e92710369a29d1c31b3b7fbfc50b1b27.png)

## Download Export

Not only can you import data using the Data Import tool, but you can export specific data that exists in your current {{% system-name %}} system (from those same category options) out into an excel file. Clicking the *Download xxx export* button (dependent on which import "type" you selected) will generate and pull that data from {{% system-name %}} and export it to an excel/csv file. Not all import type options offer a *download export* though.

![](../data-import-tab.assets/0204e58ec27953076cdd54cf103e683e.png)

## Learning Management System

To learn more about the Data Import Tab, follow the link below to the Learning Management System course:

* [Data Import Tab](https://mie.talentlms.com/shared/start/key:ZOBDNHRK)
