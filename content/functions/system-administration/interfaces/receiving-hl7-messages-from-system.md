---
id: '1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs'
title: 'Receiving HL7 Messages from System'
date: '2021-09-24T19:55:36.541Z'
version: 67
lastAuthor: 'Nick Wallace'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco'
  - 'gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80'
source: 'https://drive.google.com/open?id=1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
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
  
#### **How it Works**  

The following describes the process as it occurs:
* A message is sent from MIE's HL7 {{% system-name %}} Interface. The message is then processed accordingly and an acknowledgment of success or error is sent back to {{% system-name %}} HL7 interface.
* If success then MIE's HL7 {{% system-name %}} Interface will send the next message.
* If error, then MIE's HL7 {{% system-name %}} Interface will continue to send the message until a successful acknowledgment has been sent back from the receiving systems HL7 Interface.
  
### **Communication Flow**  


___
 Communications control characters will be used for all messages sent between MIE's {{% system-name %}} system and the receiving system. The Minimal Lower Level Protocol (MLLP) is used by the TCP/IP connection, as specified by HL7 standard.
The control characters will consist of: 1. A single vertical tab character to indicate the start of block (Hex), 0x0B, at the beginning of the message; 2. Every segment in the HL7 message will be terminated by the termination character (hex) - 0x0D (carriage return). 3. The characters (Hex) 0x1C (FS) to indicate end of block, and termination character (hex) - 0x0D (carriage return) at the end of the message.
For more information, refer to appendix C, section 1, of the HL7 Implementation Support Guide.
When the HL7 Interface sends an outbound message, it expects back an acknowledgment indicating the message was received successfully (accept - AA) or unsuccessfully (failure - AR and AE). MIE's HL7 SYSTEM Interface will use this information to know when to send the next message or so it can automatically retry on a failure.
  
#### **HL7 Standard Acknowledgments**  

MIE will be using the following MSA acknowledgment codes, the following codes are to be treated as such:
* AA (Application Accepted) - the message was accepted and successfully processed.
* AR (Application Rejected) - the only time a message should not be automatically retried, an AR acknowledgment code indicates that the message is not formatted properly.
* AE (Application Error) - a notice of failure on the receiving side and does not indicate that the message is bad and must be resent.
These acknowledgments conform to the HL7 standard. The interface determines the acknowledgment mode to use based on the values sent in MSH.15 and MSH.16, sending back the acknowledgment in the manner requested by the message sender. For more information, refer to chapter two of the HL7 standard documentation.
{{% anchor sys="accepted" %}}

  
## Supported HL7 Message types  

legend - < > = 0 to many, [ ] = 0 to 1, { } means 1 to many.
  
### **Scheduling (SIU)**  

* [SIU^S12](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
* [SIU^S14](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
* [SIU^S15](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [SCH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [RGS](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIG](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [AIP](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
{{% anchor sys="patient_registration" %}}

  
### Patient Registration (ADT)  

* [ADT^A04](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >
* [ADT^A08](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >
{{% anchor sys="lab_results" %}}

  
### Lab Results (ORU)  

* [ORU^R01](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] {[ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > } }}
{{% anchor sys="lab_orders" %}}

  
### Lab Orders (ORM)  

* [ORM^O01](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) <[NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [PV2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] { [ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) <[NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> <[DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> <[OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> } } [ [ZPA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [ [ZIL](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ]
  
### **Documents (MDM)**  

* [MDM^T02](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [TXA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) { [OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) }
{{% anchor sys="financial_transactions" %}}

  
### Financial Transactions (DFT)  

* [DFT^P03](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [EVN](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> { [FT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [PR1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) >} < [DG1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > [ [GT1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) < [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) > >

  
### Immunization (VXU)  

* [VXU^V04](gdoc:1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco) : [MSH](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [PID](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PD1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[NK1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)> [ [PV1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [PV2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] ] < [IN1](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [IN2](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] > <[ [ORC](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] [RXA](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) [ [RXR](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) ] <[OBX](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80) <[NTE](gdoc:1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80)>>>


