---
id: '1SDR5daHWmREcZqJvyE0s38wz9N3iIUZb3YiOd9oiS2c'
title: 'Locations Hierarchy CSV API'
date: '2025-12-08T16:48:12.306Z'
version: 73
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1SDR5daHWmREcZqJvyE0s38wz9N3iIUZb3YiOd9oiS2c'
wikigdrive: 'v2.15.30'
---
The following page defines data and fields that may be imported into MIE systems (WebChart, Enterprise Health) using the Locations Hierarchy CSV API.

The Locations Hierarchy is defined as a hierarchy that structures locations, such as establishment, clinical locations, outside locations, and work locations, in parent-child relationships. This CSV API is intended for populating locations for usage of workflows or features involving OSHA reporting, incident/case management, and/or for a client's locations interface.

## Audience

The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Locations Hierarchy CSV API. Technical details are provided in the remaining sections.

## Abstract

Locations hierarchy is typically used in the context of OSHA reporting, incident/case management, and locations interface. The Locations Hierarchy CSV API is used to import information related to a specific location and/or the relationships between said location. Locations can be differentiated by type, such as establishment, outside location, clinic location, and work location.

Use cases for different locations include the following:

* Establishment - the top-level organization.
* Clinic location - specific clinical facility (e.g. primary care clinic, testing clinic).
* Work location - place of employment.
* Outside location - non-clinical external location where services are provided.

## Workflow Considerations

**What columns do I need to populate to define specific locations (establishment, clinic, outside, and/or work location)?**

In the file, the following criteria is used to define specific types of locations:

* Establishment locations - `establishment_flag` should be set to 1, else 0
* Clinic locations - `clinical_location_flag` should be set to 1, else 0
* Outside locations - `outside_location_flag` should be set to 1, else 0
* Work locations - `work_location_flag` should be set to 1, else 0

**How can I create parent-child relationships for different hierarchies in the file?**

If there is either an existing location code or a code that exists in the file concurrently with their child location, the `locations_hierarchy_parent_code` column is used to populate the location's code.

## Column Definition

The locations hierarchy column definition shall contain all columns listed below regardless of whether there is a value or not:

* <strong>R</strong> = required
* O = optional

<table>
<tr>
<td><strong>Column Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr>
<td>locations_code</td>
<td>varchar(10)</td>
<td><strong>R</strong></td>
<td></td>
</tr>
<tr>
<td>locations_description</td>
<td>varchar(60)</td>
<td><strong>R</strong></td>
<td></td>
</tr>
<tr>
<td>locations_acronym</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_place_of_service_code</td>
<td>varchar(8)</td>
<td>O</td>
<td>Default is 11</td>
</tr>
<tr>
<td>locations_alias</td>
<td>varchar(255)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_address1</td>
<td>varchar(50)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_address2</td>
<td>varchar(50)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_address3</td>
<td>varchar(50)</td>
<td>O</td>
<td>Locations will include address3 with address2,<br />
patients will have a separate address3 field</td>
</tr>
<tr>
<td>locations_city</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_county</td>
<td>varchar(50)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_state</td>
<td>varchar(4)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_postal_code</td>
<td>varchar(11)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_country</td>
<td>varchar(50)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_tz_name</td>
<td>varchar(64)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_phone_number</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_fax_number</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_account_number</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>pev_naics_description</td>
<td>varchar(100)</td>
<td>O</td>
<td>Conditionally required if there is</td>
</tr>
<tr>
<td>pev_location_naics</td>
<td>int(10)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>pev_location_sic</td>
<td>int(10)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>pev_total_employees</td>
<td>int(10)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>pev_total_hours</td>
<td>int(10)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>locations_active</td>
<td>tinyint(3)</td>
<td>O</td>
<td>Default is 1</td>
</tr>
<tr>
<td>establishment_flag</td>
<td>tinyint(3)</td>
<td><strong>R</strong></td>
<td></td>
</tr>
<tr>
<td>clinical_location_flag</td>
<td>tinyint(3)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>work_location_flag</td>
<td>tinyint(3)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>outside_location_flag</td>
<td>tinyint(3)</td>
<td>O</td>
<td>Default is 0</td>
</tr>
<tr>
<td>org_level</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_act_date</td>
<td>datetime</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>locations_deact_date</td>
<td>datetime</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>site_safety_rep</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>site_safety_rep_type</td>
<td>varchar(20)</td>
<td>O</td>
<td>Default is `part:MR`</td>
</tr>
<tr>
<td>locations_hierarchy_parent_code</td>
<td>varchar(30)</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>related_to_pat_id</td>
<td>int(10)</td>
<td>O</td>
<td></td>
</tr>
</table>

.
