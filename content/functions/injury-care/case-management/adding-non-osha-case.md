---
id: '1aHT2IQB4BXVs4aZm1tYvWp8t3PvqPdSI-dJJ0w-nfqs'
title: 'Adding Non-OSHA Case'
date: '2020-03-13T13:16:54.123Z'
version: 50
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../adding-restrictions-and-accommodations.md'
source: 'https://drive.google.com/open?id=1aHT2IQB4BXVs4aZm1tYvWp8t3PvqPdSI-dJJ0w-nfqs'
wikigdrive: 'cabd81c2148adf2f2b82ccf2d7cca8fcca5deb78'
menu:
  main:
    name: 'Adding Non-OSHA Case'
    identifier: '1aHT2IQB4BXVs4aZm1tYvWp8t3PvqPdSI-dJJ0w-nfqs'
    parent: '16-7poNmo_A35wJg_Sxb-bc-fbNHrEfSfMrlJjzpvmq8'
    weight: 1660
---
A case is a full report of a workplace injury or an incident involving an employee (patient). The case is usually created in an initial visit (encounter) with the patient, and is then linked to subsequent visits. A case links all follow-up visits (encounters), restrictions, accommodations, conditions, and nature of injury information. All of the documents pertaining to the case are grouped together within the chart for reporting purposes.  
{{% info %}}

The terms *case* and *incident* may be used interchangeably throughout the system.
{{% /info %}}

  
## **Create a New Injury Non-OSHA Case**  

This help documentation will describe the steps for creating and documenting an Injury Non-OSHA Standard case type.   Injury (OSHA Standard) case types would be your most common selected case type, even if the injury isn't OSHA reportable.  Injury Non-OSHA case types are typically used by clients who aren't in the US and need a way to document cases/incidents but aren't under US OSHA regulations.  
{{% note %}}

Your MIE Implementer can also turn on a feature that will automatically also generate a ‘Case Management' encounter when a case is created for a visit encounter.
{{% /note %}}

By default, the Case section in encounters will display the following case types: Injury (OSHA Standard), Injury (Non-OSHA Standard), Hospital, Absence Management, MSEA, and Medical Surveillance.

  
![](../adding-non-osha-case.assets/1000020100000485000000ACD6A654510ED8911B.png)  


If you wish to document a new case, expand to open the Case section in the dynamic encounter.

  
![](../adding-non-osha-case.assets/10000201000004A400000102E5623BD7A1337E27.png)  


Once the Case section is expanded, indicate which type of case to create on the chart by selecting the appropriate radio button. Depending on the type of case radio button selected will determine other fields or radio button data to complete. Once you open/create a case, any documentation, encounter visit documentations, etc can be linked to a specific case/incident the chart has had.

  
![](../adding-non-osha-case.assets/1000020100000485000000AC0B7F88A2824C21A4.png)  


  
## **Injury Non-OSHA Standard Case Details**  

After selecting to create an Injury Non-OSHA Standard case, data fields will branch open to document the injury details.
  
### **Dates/Times of Injury or Illness**  

Upon documenting the radio button selection, the case section will branch open to document the details of the case.  The first section is to key in the date/time of onset, and other date/times to note for specific work information. Fields noted with a red asterisk are required fields.  A case cannot be saved to a chart without all required fields being filled out.

  
![](../adding-non-osha-case.assets/10000201000002DD00000074B56E7068754116BD.png)  


  
### **Return to Work (RTW)**  

The return to work (RTW) dates may be entered now or in later during the case management process if applicable.   

  
![](../adding-non-osha-case.assets/100002010000021F00000062D4B696F8C4A8D22E.png)  

  
### **Location**  

The location section displays to document where the injury occurred specifically.  If selecting Onsite Location as to where the injury/illness occurred, you can then (optionally) fill out where specifically the injury/illness occurred onsite using an auto-complete of choices.  The choices displayed in the auto-complete are a sample default list and you would need to give a complete list of location areas to your MIE Implementer in an excel spreadsheet for an MIE developer to import.  It can be a general list or a very granular hierarchical location of choices. The auto-complete field is optional just to provide more granular reporting needs if client desires. Otherwise, one must just free-type in where the the event occured in the field noted by a red asterisk.

  
![](../adding-non-osha-case.assets/100002010000032D0000008C5B042DFD20F96368.png)  


If selecting Offsite Location, then the fields that branch open are required free text fields to note the offsite location details.

  
![](../adding-non-osha-case.assets/10000201000002DC00000126F512EFA34C758892.png)  


  
### **Incident Details**  

In the incident details section is where answers to 3 required questions on how the injury occurred, what happened, and what harmed need documented.  Along with required fields to document the Event and the Source of the incident.

  
![](../adding-non-osha-case.assets/10000201000004720000016DA257D9C0272666AA.png)  


The Event and Source drop-downs are pre-configured, but can can be customized.
  
### **Nature of Injury/Body Parts**  

Here you can document the nature of injury or illness using a drop-down selection list.  The fields  Nature of Injury and Body Part are drop-downs of choices.  Contact your MIE Implementer if need additional choices added to these drop-downs.

  
![](../adding-non-osha-case.assets/10000201000004710000006C25EAEE846F0D5DA2.png)  


{{% info %}}

Selecting Contaminated Sharp as the nature of injury will expand 3 additional fields for you to document.  These additional fields of data pull on Sharps Log reports.
{{% /info %}}

  
![](../adding-non-osha-case.assets/100002010000048C0000006350D77CF3D2BE5579.png)  


  
### **Work Status (or Lost Time) Section**  

Lost time would be documented using the Restrictions and Accommodations section.  Refer to the [Restrictions and Accommodations](../adding-restrictions-and-accommodations.md) help documentation for more information.
  
### **Restrictions and Accommodations**  

Refer to help documentation named [Restrictions and Accommodations](../adding-restrictions-and-accommodations.md).
  
### **Incident Summary**  

Some dynamic encounters offer an Incident Summary section.  This is an expandable section to review or edit specific case data while a provider works their portion of the encounter.  Usually the nurse creates a case and documents the case details from the employee's/patient's statements, but while the provider is seeing the patient/employee, the provider may deem to change high priority fields/data of the case and this section offers that ability, instead of scrolling back up to the case section to expand and edit all the details.

  
![](../adding-non-osha-case.assets/10000201000004AD00000117F36500A8EA4C0E57.png)  


{{% info %}}

Various forms, in forms library, can be programmed to pull in case data details that were documented.  Contact your MIE Implementer if have specific forms that need generated routinely that may need case (incident) data overlaid.
{{% /info %}}


**Linking Documents to Cases**
Documents can be linked to cases.  This can be done when in Add Document mode, via the Edit Properties of an existing stored document.  Documents can also be linked to cases when indexing a document from WebScan. Scheduled appointments can also be linked to cases when in the Add Appointment wizard.
