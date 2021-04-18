---
title: "Create Cases File for Import"
date: "2020-03-17T02:53:32.574Z"
url: "general-functionality/system-administration/data-migration/create-cases-file-for-import.html"
version: 35
id: "12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc"
source: "https://drive.google.com/open?id=12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc"
menu:
    main:
        name: "Create Cases File for Import"
        identifier: "12tRrL1GGMV0Hp0HQOhS4zdkbS1-fbnKf2kAroBdMqZc"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4770
---
This document explains how to import your cases into {{% system-name %}} .

What you will need:

* Spreadsheet software (Microsoft Excel or Google Sheets)
* Cases CSV File Example
* {{% system-name %}} end user with administrative rights

## Create Cases CSV File

1. The following table provides optional or required <strong>Field Names</strong> and <strong>Descriptions</strong>, as indicated by the <strong>Requirement</strong> column. Items marked as <em>Best Practice</em> or <em>Optional</em> are not required and may be left blank, or omitted entirely. Employee ID must be the first column in the CSV file. The order of the remaining fields does not matter.



<table>
  <tr>
    <td>**Field Name**</td>
    <td>**Description**</td>
    <td>**Requirement**</td>
  </tr>
  <tr>
    <td>Employee ID</td>
    <td>Employee Identifier</td>
    <td>**Required**</td>
  </tr>
  <tr>
    <td>External ID</td>
    <td>This identifier will be used for looking up the chart in {{% system-name %}} , to insert or update, and must match an Employee ID from the Employee Demographic Import specification.</td>
    <td>**Required**</td>
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
    <td>
Case Closed Status specifies whether or not the case is still active (i.e., open), or if the case has concluded (i.e., closed). Providing this field will insert the encounter as opened or closed. Valid options include:

    * 0 = Open
    * 1 = Closed
    </td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Case Datetime</td>
    <td>Date and time of the case or incident. If an injury or illness accompanies the clinical encounter being imported, then a case should be created. Adding a Case Datetime creates a case in {{% system-name %}} and links the case to the clinical encounter. Must be formatted as YYYY-MM-DD HH:MM:SS</td>
    <td>**Required** for OSHA 300A Reporting & Best Practice for Illness / Injury *Only*</td>
  </tr>
  <tr>
    <td>Case Type</td>
    <td>
The type of case the incident refers to. Options include:

    * Injury = OSHA-related Injury cases
    * Hospital = Hospital cases
    * Billing = Billing cases
    * Absence Management = Absence management cases
    * MSEA = Medical Suitability for Expatriate Assignment cases
    * Medical Surveillance = Health Surveillance cases
    </td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Incident Location Description</td>
    <td>Brief description where the incident occurred. For example, if it happened in Plant 4, the location description could be "Back truck dock".</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Work Related</td>
    <td>
Flags injury as OSHA work-related:

    * 0 = No
    * 1 = Yes
    * 2 = Undetermined
    </td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>OSHA Reported Date</td>
    <td>Timestamp when incident was reported to OSHA. Date and time must be formatted as YYYY-MM-DD HH:MM:SS</td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>OSHA Injury/Illness Type</td>
    <td>
Maps to the {{% sys-name %}} Injury/Illness Type incident field. Injury or illness type (OSHA list). Options include:

    * I = Injury
    * S = Skin disorder
    * R = Respiratory condition
    * P = Poisoning
    * H = Hearing loss
    * A = All other illnesses
    </td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Privacy Case</td>
    <td>
Flag if incident is sensitive. Name of employee is hidden on OSHA log.

    * 0 = No
    * 1 = Yes
    </td>
    <td>Best Practice</td>
  </tr>
  <tr>
    <td>Incident Status</td>
    <td>
Populates the case/incident in {{% sys-name %}} as opened or closed. If importing open cases, set this value to 1. Options include:

    * 2 = Closed
    * 1 = Current
    * 0 = Created, but not entered
    </td>
    <td></td>
  </tr>
</table>

{{% tip %}}

*For a more comprehensive list of supported fields, please refer to the *[Simplified Case Management CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1qbDvODxTutpnzS6xBPA5vhRJ__nZiA7y-9fUKgQ5TCc/)*.*

{{% /tip %}}


2. Using the table, above, determine the data to be imported. Starting with the Employee ID field, enter all required and desired data, verifying required data is present. Note that each row represents a case record. Below is a screenshot of the Cases CSV File Example for guidance.



![](create-cases-file-for-import.images/image1.png)



3. Save the file as CSV format.

## Upload Injury Cases CSV File

1. Login as a user with administrator rights.
2. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin) from the side menu.



![](create-cases-file-for-import.images/image2.png)



3. Select the [Data Import](https://system/?f=admin&s=wc_data_import&tabmodule=admin&tabselect=Data+import) tab.



![](create-cases-file-for-import.images/image3.png)



4. Select <strong>Clinical Encounter CSV API</strong> from the drop-down menu and click <strong>Go</strong>.



![](create-cases-file-for-import.images/image4.png)



5. Select the Cases CSV File and click <strong>Upload</strong>.  ![](create-cases-file-for-import.images/image5.png) 

{{% tip %}}

*For extra information on what happens during the import, click the ***_Verbose_*** checkbox.*

{{% /tip %}}


## Resources

* [Simplified Case Management CSV API Specification](https://docs.google.com/a/mieweb.com/spreadsheets/d/1qbDvODxTutpnzS6xBPA5vhRJ__nZiA7y-9fUKgQ5TCc/)
* [Injury Cases CSV File Example](https://docs.google.com/spreadsheets/d/1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE/export?format=csv&id=1VcmZv6tNy4P15XzRkqTABBzdhiSxdiHHS41hXl4c4NE&gid=549963864)
* [Validation Script for Cases](https://drive.google.com/open?id=1Ahh0T91NOyweIuJnUY3bniW53zEVmkkeIQwH5ul-TlI)

## Troubleshooting

Ensure that all of the fields marked as **Required** have valid content. The file uploaded must be saved as a CSV formatted file. In case of any errors, contact Technical Support.

