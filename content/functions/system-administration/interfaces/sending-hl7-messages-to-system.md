---
id: '1jpIQjF4ooKVdbKEOHWluB2PZ81GDk1Hi6mL4GTU1yMw'
title: 'Sending HL7 Messages to System'
date: '2022-03-10T19:03:36.783Z'
version: 130
lastAuthor: 'Angie Nichols'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1cTfexHAjqrATjQBWLjf1QyHgX8r0DXDHCuEjVuazhAg'
  - 'gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg'
  - 'gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80'
  - 'https://docs.enterprisehealth.com/functions/system-administration/interfaces/hl7-segment-definitions.html'
source: 'https://drive.google.com/open?id=1jpIQjF4ooKVdbKEOHWluB2PZ81GDk1Hi6mL4GTU1yMw'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Sending HL7 Messages to System'
    identifier: '1jpIQjF4ooKVdbKEOHWluB2PZ81GDk1Hi6mL4GTU1yMw'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5380
---
The following document describes how to interface with MIE via an HL7 interface. Whereas the purpose of this interface is to send Hl7 messages real-time to system using TCP/IP protocol, TCP/IP protocol over SSL/TLS, or a restful web service post.  
{{% anchor sys="assumptions" %}}

  
#### Assumptions
___
   

The following assumptions have been made concerning the implementation of the interface:
* It is assumed that the reader of this document is familiar with HL7 v 2.X. This document is not intended to standalone but should be used in conjunction with the HL7 Specification Version 2.3 and Higher.
* The reader is familiar with the HL7 MLLP (Minimal Lower Level Protocol).
* The HL7 interface is real-time using TCP/IP protocol, TCP/IP protocol over SSL/TLS, HTTPS restful web service post.
* The Hl7 Messages sent through the interface will have codes/descriptions/identifiers in the HL7 message foreign to the {{% system-name %}} system and that translations of this data will be handled within {{% system-name %}} (when required).
  
### **Interface Overview**  


___
 In order to process the data successfully, the following items must be supplied/completed:
* External system(s) must furnish IP address(s) that will be used for connectivity.
* Interface system parameters must be setup in order to direct the interface on how to format the data for the external system.
* Translation files (if the practice is using translations) must be setup that will convert Master File Values (Physician, Location, Insurance Company, Appointment Codes, Document Types and Observation Result Codes) into {{% system-name %}} values.
  
#### **How it Works**  

The following describes the process as it occurs:
* A message is sent to MIE's Hl7 {{% system-name %}} Interface. The message is then processed accordingly and an acknowledgment of success or error is sent back to sending systems Hl7 interface.
* If success then the sending system is free to send the next result.
* If error, then the sending system should continue to send the message until a successful acknowledgment has been sent back from the receiving systems HL7 Interface.
  
### **Communication Flow**  


___
 Communications control characters will be used for all messages sent between MIE's {{% system-name %}} system and the receiving system. The Minimal Lower Level Protocol (MLLP) is used by the TCP/IP connection, as specified by HL7 standard.
The control characters will consist of: 1. A single vertical tab character to indicate the start of block (Hex), 0x0B, at the beginning of the message; 2. Every segment in the HL7 message will be terminated by the termination character (hex) - 0x0D (carriage return). 3. The characters (Hex) 0x1C (FS) to indicate end of block, and termination character (hex) - 0x0D (carriage return) at the end of the message.
For more information, refer to appendix C, section 1, of the HL7 Implementation Support Guide.
When the HL7 Interface processes an inbound message, it sends back an acknowledgment indicating the message was received successfully (accept - AA) or unsuccessfully (failure - AR and AE). A sending system should use this information to know when to send the next message or so it can automatically retry on a failure.
  
#### **HL7 RESTful POST**  

It is possible to send HL7 messages over a restful web service post using HTTPS. It is recommended to use a multi-part/form POST content type to properly encode the variables and the message itself. The webservice requires specific variables to exist within the POST, included are unique login credentials provided at the start of the interface project.
[HL7 - RESTful](gdoc:1cTfexHAjqrATjQBWLjf1QyHgX8r0DXDHCuEjVuazhAg)
  
#### **HL7 Standard Acknowledgments**  

MIE will be using the following MSA acknowledgment codes, the following codes are to be treated as such:
* AA (Application Accepted) - the message was accepted and successfully processed.
* AR (Application Rejected) - the only time a message should not be automatically retried, an AR acknowledgment code indicates that the message is not formatted properly.
* AE (Application Error) - a notice of failure on the receiving side and does not indicate that the message is bad and must be resent.
These acknowledgments conform to the HL7 standard. The interface determines the acknowledgment mode to use based on the values sent in MSH.15 and MSH.16, sending back the acknowledgment in the manner requested by the message sender. For more information, refer to chapter two of the HL7 standard documentation.
{{% anchor sys="accepted" %}}

Accepted HL7 Message types
legend - < > = 0 to many, [ ] = 0 to 1, { } means 1 to many.
  
### **Scheduling (SIU)**  

* [SIU^S12](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
* [SIU^S14](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
* [SIU^S15](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
{{% anchor sys="patient_registration" %}}

  
### Patient Registration (ADT)  

* [ADT^A01](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [PV2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) >
* [ADT^A04](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >
* [ADT^A08](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >
* [ADT^A40](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PD1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [MRG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] }
{{% anchor sys="lab_results" %}}

  
### Lab Results (ORU)  

* [ORU^R01](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg): [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] {[ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > } }}
* [ORU^R03](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg): [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] {[ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > } }}
{{% anchor sys="lab_orders" %}}

  
### Lab Orders (ORM)  

* [ORM^O01](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg): [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) <[NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] { [ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) <[NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> <[DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> <[OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> } } [ [ZPA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [ZIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
  
### **Documents (MDM)**  

* [MDM^T02](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [TXA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) }
{{% anchor sys="financial_transactions" %}}

  
### Financial Transactions (DFT)  

* [DFT^P03](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> { [FT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [PR1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) >} < [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >
  
### Immunizations (VXU)  

* [VXU^V04](https://docs.enterprisehealth.com/functions/system-administration/interfaces/hl7-segment-definitions.html) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [RXA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [RXR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)
  
### **Acknowledgement (ACK) message**  

* [ACK](gdoc:1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [MSA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [ERR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [ZTN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > < [ZDG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) >
  
## **Field Definitions**  

{{% anchor sys="responsible-observer" %}}

  
### Responsible Observer  

Logic when processing Responsible Observer for hl7 v2.3 messages:
OBX 16 (responsible observer) is used to set the performing lab facility, which is stored as a user in {{% system-name %}} . The obx 16.1 value can auto create a user or it can be mapped to a user in {{% system-name %}}  depending on the user setting for OBX user in the hl7 configuration. If auto creating the user is configured, the other XCN sub component values in OBX 16 are used to create the lab facility user. If we are translating the values in OBX 16.1 the user in {{% system-name %}} will be manually created with the correct lab contact name, address, etc... Even if the user is Auto created, the User's information can be corrected or amended by editing the user account in {{% system-name %}} .


```
  
  
{{% pre title="OBX Segment with OBX 16 Example" %}}  
  
  
OBX|1|NM|wbc^Wbc^Local^6690-2^Wbc^LN||7.0|/nl|3.8-11.0||||F|||20120410160227|lab|12^XYZ LAB|  
  
  
  
{{% /pre %}}  
  
  

```
The identifier 12 will then link to a system user. This user can then can modified if needed to include any other required information.** 
{{% note %}}

If the hl7 version is 2.5.1 or higher, the OBX 24 (performing organization address) and 25 (performing organization medical director) are used, instead of OBX 16.
{{% /note %}}
When displaying the laboratory results in {{% system-name %}} the system polls all of the observations stored together at the Result level (OBR) it will then display the common lab between the observations at the end of the result. Any observation that has a differing lab facility, that facility is then printed in line with the observation.
