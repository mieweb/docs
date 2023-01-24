---
id: '13Oulcj0nZoB3rk_Fc-Fd4FxrUr5Di_UXZM45NP3tde4'
title: 'Import/Export JSON Files'
date: '2021-08-26T12:03:20.282Z'
version: 54
lastAuthor: 'sriecke'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=13Oulcj0nZoB3rk_Fc-Fd4FxrUr5Di_UXZM45NP3tde4'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Import/Export JSON Files'
    identifier: '13Oulcj0nZoB3rk_Fc-Fd4FxrUr5Di_UXZM45NP3tde4'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4870
---
                                                                The {{% system-name %}} system allows users to create, import, and export JSON files from one database to another. Users with the appropriate permissions can create JSON files from the system, using the **System Configuration** tab of the Control Panel. This allows administrators to easily review, approve, and export a JSON file from one {{% system-name %}} system (e.g., DEV, QA, etc.) and easily import into another  {{% system-name %}} system (e.g, PROD), avoiding duplicative work and ensuring consistency. For example, if a client needs several document types created (e.g., 2 Forms, 2 Word templates, 1 Consent doctype, and 1 HIPAA doctype) for an interface, these documents can be created and tested in a Development or QA environment and then easily migrated into a Production database using the JSON export/import tool, also known as the *System Configurator*.  
Users with proper permissions can create JSON files of the following sections/modules:

<table>
<tr>
<td>Abbreviations</td>
<td>Document Types</td>
<td>Health Surveillance</td>
<td>Observation Flowsheets</td>
<td>Scripted Logic & Scripted Rules</td>
</tr>
<tr>
<td>Apt Types</td>
<td>Drug Aliases</td>
<td>Kits</td>
<td>Order List</td>
<td>Security Roles</td>
</tr>
<tr>
<td>AutoComplete Fields</td>
<td>Drug Indications</td>
<td>Language Translations</td>
<td>Order Pick List</td>
<td>Stations</td>
</tr>
<tr>
<td>Chart Tabs</td>
<td>Drug Reactions</td>
<td>Layouts</td>
<td>Partitions</td>
<td>System Files</td>
</tr>
<tr>
<td>Chart Types</td>
<td>Encounter Exams</td>
<td>Libraries</td>
<td>Print Definitions</td>
<td>System Reports</td>
</tr>
<tr>
<td>Common Scripts</td>
<td>Encounter Types</td>
<td>Locations</td>
<td>Refer to Systems</td>
<td>System Settings</td>
</tr>
<tr>
<td>Common Sigs</td>
<td>Esign Rules</td>
<td>Menu Editor</td>
<td>Restriction Types</td>
<td>Tasklist Events</td>
</tr>
<tr>
<td>Custom Allergies</td>
<td>Fast Tasks</td>
<td>My Settings</td>
<td>Scheduled Jobs</td>
<td>Term Replacement</td>
</tr>
<tr>
<td>Departments</td>
<td>Frequencies</td>
<td>Observation Codes</td>
<td>Schedules</td>
<td>User Portlets</td>
</tr>

</table>
  
## Creating a JSON File for Export  
  
In order to create a JSON file for export, the logged-in user must have the appropriate permissions to access and utilize the System Configuration tab of the Control Panel. Once access has been granted, the user may perform the following:
1. From the export database (i.e., the database from which the JSON file is being exported), navigate to the <strong>Control Panel</strong>.
2. Go to the <strong>System Configuration</strong> tab.

  
![](../import-export-json-files.assets/72de864bf45d16752d5c88a211c69e9b.png)  


3. Select the module(s) needed for export from the database. It is permissible to select multiple modules for one JSON file.

  
![](../import-export-json-files.assets/681264a7ff99f76d3b48f579d7e93448.png)  


4. After selecting the module(s), click the <strong>Search</strong> button.
5. A ListView will display for each of the modules selected. Users may choose to scroll through the page, marking each individual item for export, as needed; otherwise, there are two quick links available to <strong>Jump to Bottom</strong> of each ListView, or jump to the <strong>Bottom of Page</strong>.

  
![](../import-export-json-files.assets/15b6d0b5a2b83f7c0a1c69963588a558.png)  


6. Unless all items within each module need to be exported, be sure to click the <strong>Uncheck All </strong><strong><em>[Module Name]</em></strong><em> </em>button and select all of the items to be exported, individually.

  
![](../import-export-json-files.assets/6e90b9b037b7845686f9ff41a0c5fba9.png)  
  
{{% tip %}}  
For larger lists, use Ctrl + F to find specific words/phrases/spellings in the page.  
{{% /tip %}}

7. When finished selecting all of the items for export, go to the bottom of the page and provide a meaningful name for the export file and click the <strong>Export</strong> button.

  
![](../import-export-json-files.assets/c077c5f8c00205851092ad14b51a42e1.png)  


8. A message will display at the bottom of the screen, prompting the user to Save the file, or Cancel. Select <strong>Save</strong> to create the file for export. 

If the file has been saved, another message will display at the bottom of the screen allowing the user to open the file, or containing folder, once the file finishes saving.

{{% note %}}

The user who creates the file for export must test the file in another system to ensure the correct data is contained therein. Testing the import file should always be done prior to adding the file to the work ticket.
{{% /note %}}
  
## Import a JSON File  

Once the necessary JSON file has been created and exported from the {{% system-name %}} system, any user with the proper security permissions may import the file to the new, or alternative, system. The JSON file should be copied to the computer; however, the file does not have to be created on the computer. For this reason, the file may be delivered via a Redmine ticket, sent via email, available on a share drive, etc.
{{% warning %}}

There can be issues if exporting and importing to different database versions. Always check with the Subject Matter Expert, if unsure.
{{% /warning %}}
1. From the import database (i.e., the database into which the JSON file is being imported), navigate to the <strong>Control Panel</strong>.
2. Go to the <strong>System Configuration</strong> tab.
3. Click the <strong>Import</strong> link in the upper-right corner of the page.



   <img src="../import-export-json-files.assets/aacadf762f1adf65587827014ca27b7b.png" />  


There are several import options available. The following instructions will focus on the process for importing a saved file.
1. After navigating to the Import screen, click the <strong>Choose File</strong> button and browse to the JSON file.

  
![](../import-export-json-files.assets/4f3aefff1c00ee603451c52b95139c86.png)  


2. Select and Open the JSON file. A status window will appear, briefly.

  
![](../import-export-json-files.assets/049757e8577996a7ad348c485b3193b3.png)  


3. Once the file has loaded, users will want to select the link to <strong>Jump to Bottom</strong>.
4. With all of the necessary files selected, click the <strong>Import Selected</strong> button at the bottom of the page.
5. A status window will appear, displaying the progress of the importing of the JSON file. When all columns are green, the import is complete.

  
![](../import-export-json-files.assets/23791b9ad2de0db3262362011bf7565e.png)  


6. <strong>Test the import, immediately upon completion, to ensure proper functionality.</strong>
