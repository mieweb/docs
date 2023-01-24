---
id: '12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc'
title: 'Create Cases File for Import'
date: '2020-03-17T02:53:32.574Z'
version: 39
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1qbDvODxTutpnzS6xBPA5vhRJ__nZiA7y-9fUKgQ5TCc/'
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import'
  - 'https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864'
  - 'https://drive.google.com/open?id=1Ahh0T91NOyweIuJnUY3bniW53zEVmkkeIQwH5ul-TlI'
source: 'https://drive.google.com/open?id=12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Create Cases File for Import'
    identifier: '12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4790
---
This document explains how to import your cases into {{% system-name %}} .  
What you will need:
* Spreadsheet software (Microsoft Excel or Google Sheets)
* Cases CSV File Example
{{% system-name %}}*  end user with administrative rights
  
## Create Cases CSV File  

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.


<table>
<tr>
<td><strong>Field Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>Employee ID</td>
<td>Employee Identifier</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>External ID</td>
<td>This identifier will be used for looking up the chart in {{% system-name %}} , to insert or update, and must match an Employee ID from the Employee Demographic Import specification.</td>
<td><strong>Required</strong></td>
</tr>
<tr>
<td>Visit Type</td>
<td>Must be a specific visit type code from the {{% system-name %}} system. This is the visit type associated with the Clinical Encounter import. It is the Visit Type field taken from the Encounter Types manager.</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Date of Service</td>
<td>Associated with encounter visit type, to insert the Date of Service (DOS) for the encounter specified. If a visit type is not indicated using encounters.visit_type field, the encounter will be created without a service date (i.e., it will be blank). DOS must be in YYYY-MM-DD HH:MM:SS format.</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Chief Complaint</td>
<td>Reason for visit, or major complaint of an encounter.</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Service Location</td>
<td>The location code for the document's service location. These are stored in the Locations Manager of the Control Panel.</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Case Closed Status</td>
<td>Case Closed Status specifies whether or not the case is still active (i.e., open), or if the case has concluded (i.e., closed). Providing this field will insert the encounter as opened or closed. Valid options include:
<ul><li><ul><li><p>0 = Open</p></li><li><p>1 = Closed</p></li></ul></li></ul></td>
<td>Best Practice</td>
</tr>
<tr>
<td>Case Datetime</td>
<td>Date and time of the case or incident. If an injury or illness accompanies the clinical encounter being imported, then a case should be created. Adding a Case Datetime creates a case in {{% system-name %}} and links the case to the clinical encounter. Must be formatted as YYYY-MM-DD HH:MM:SS</td>
<td><strong>Required</strong> for OSHA 300A Reporting & Best Practice for Illness / Injury <em>Only</em></td>
</tr>
<tr>
<td>Case Type</td>
<td>The type of case the incident refers to. Options include:
<ul><li><ul><li><p>Injury = OSHA-related Injury cases</p></li><li><p>Hospital = Hospital cases</p></li><li><p>Billing = Billing cases</p></li><li><p>Absence Management = Absence management cases</p></li><li><p>MSEA = Medical Suitability for Expatriate Assignment cases</p></li><li><p>Medical Surveillance = Health Surveillance cases</p></li></ul></li></ul></td>
<td>Best Practice</td>
</tr>
<tr>
<td>Incident Location Description</td>
<td>Brief description where the incident occurred. For example, if it happened in Plant 4, the location description could be "Back truck dock".</td>
<td>Best Practice</td>
</tr>
<tr>
<td>Work Related</td>
<td>Flags injury as OSHA work-related:
<ul><li><ul><li><p>0 = No</p></li><li><p>1 = Yes</p></li><li><p>2 = Undetermined</p></li></ul></li></ul></td>
<td>Best Practice</td>
</tr>
<tr>
<td>OSHA Reported Date</td>
<td>Timestamp when incident was reported to OSHA. Date and time must be formatted as YYYY-MM-DD HH:MM:SS</td>
<td>Best Practice</td>
</tr>
<tr>
<td>OSHA Injury/Illness Type</td>
<td>Maps to the {{% sys-name %}} Injury/Illness Type incident field. Injury or illness type (OSHA list). Options include:
<ul><li><ul><li><p>I = Injury</p></li><li><p>S = Skin disorder</p></li><li><p>R = Respiratory condition</p></li><li><p>P = Poisoning</p></li><li><p>H = Hearing loss</p></li><li><p>A = All other illnesses</p></li></ul></li></ul></td>
<td>Best Practice</td>
</tr>
<tr>
<td>Privacy Case</td>
<td>Flag if incident is sensitive. Name of employee is hidden on OSHA log.
<ul><li><ul><li><p>0 = No</p></li><li><p>1 = Yes</p></li></ul></li></ul></td>
<td>Best Practice</td>
</tr>
<tr>
<td>Incident Status</td>
<td>Populates the case/incident in {{% sys-name %}} as opened or closed. If importing open cases, set this value to 1. Options include:
<ul><li><ul><li><p>2 = Closed</p></li><li><p>1 = Current</p></li><li><p>0 = Created, but not entered</p></li></ul></li></ul></td>
<td>
</td>
</tr>

</table>

{{% tip %}}
*For a more comprehensive list of supported fields, please refer to the* [*Simplified Case Management CSV API Specification*](https://docs.google.com/a/mieweb.com/spreadsheets/d/1qbDvODxTutpnzS6xBPA5vhRJ__nZiA7y-9fUKgQ5TCc/)*.*
{{% /tip %}}

1. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents a case record. Below is a screenshot of the Cases CSV File Example for guidance.

  
![](../create-cases-file-for-import.assets/220c6cd9fc584a66eedbaa12c67d0238.png)  


2. Save the file as CSV format.
  
## Upload Injury Cases CSV File  

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.

  
![](../create-cases-file-for-import.assets/e2ef9d3cd79f5006055f09ee851afb8f.png)  


3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.

  
![](../create-cases-file-for-import.assets/197af282190b350e97494ffba0636d29.png)  


4. Select <strong>Clinical Encounter CSV API</strong> from the drop-down menu and click <strong>Go</strong>.

  
![](../create-cases-file-for-import.assets/1d4d4739ec6ba592652489a56d8dd48f.png)  


5. Select the Cases CSV File and click <strong>Upload</strong>.

   <img src="../create-cases-file-for-import.assets/3e7c9ba795ce233807938a4d203c6d43.png" />

{{% tip %}}

*For extra information on what happens during the import, click the* **_Verbose_*** checkbox.*
{{% /tip %}}
  
## Resources  

* [Simplified Case Management CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1qbDvODxTutpnzS6xBPA5vhRJ__nZiA7y-9fUKgQ5TCc/)
* [Injury Cases CSV File Example](https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864)
* [Validation Script for Cases](https://drive.google.com/open?id=1Ahh0T91NOyweIuJnUY3bniW53zEVmkkeIQwH5ul-TlI)
  
## Troubleshooting  

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.
