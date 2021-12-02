---
title: "Receiving HL7 Messages from System"
date: "2021-09-24T19:55:36.541Z"
url: "functions/system-administration/interfaces/receiving-hl7-messages-from-system.html"
author: Nick Wallace
version: 20
id: "1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs"
source: "https://drive.google.com/open?id=1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs"
---
The following document describes how to interface with MIE via an HL7 interface. Whereas the purpose of this interface is to send Hl7 messages real-time to system using TCP/IP protocol, TCP/IP protocol over SSL/TLS, or a restful web service post.

{{% anchor sys="assumptions" %}}

#### Assumptions

The following assumptions have been made concerning the implementation of the interface:

* It is assumed that the reader of this document is familiar with HL7 v 2.X. This document is not intended to standalone but should be used in conjunction with the HL7 Specification Version 2.3 and Higher.
* The reader is familiar with the HL7 MLLP (Minimal Lower Level Protocol).
* The HL7 interface is real-time using TCP/IP protocol, TCP/IP protocol over SSL/TLS, HTTPS restful web service post.
* The Hl7 Messages sent through the interface will have codes/descriptions/identifiers in the HL7 message foreign to the {{% system-name %}} system and that translations of this data will be handled within {{% system-name %}} (when required).

### Interface Overview

In order to process the data successfully, the following items must be supplied/completed:

* External system(s) must furnish IP address(s) that will be used for connectivity.
* Interface system parameters must be setup in order to direct the interface on how to format the data for the external system.

#### How it Works

The following describes the process as it occurs:

* A message is sent from MIE's HL7 {{% system-name %}} Interface. The message is then processed accordingly and an acknowledgment of success or error is sent back to {{% system-name %}} HL7 interface.
* If success then MIE's HL7 {{% system-name %}} Interface will send the next message.
* If error, then MIE's HL7 {{% system-name %}} Interface will continue to send the message until a successful acknowledgment has been sent back from the receiving systems HL7 Interface.

### Communication Flow

Communications control characters will be used for all messages sent between MIE's {{% system-name %}} system and the receiving system. The Minimal Lower Level Protocol (MLLP) is used by the TCP/IP connection, as specified by HL7 standard.

The control characters will consist of: 1. A single vertical tab character to indicate the start of block (Hex), 0x0B, at the beginning of the message; 2. Every segment in the HL7 message will be terminated by the termination character (hex) - 0x0D (carriage return). 3. The characters (Hex) 0x1C (FS) to indicate end of block, and termination character (hex) - 0x0D (carriage return) at the end of the message.

For more information, refer to appendix C, section 1, of the HL7 Implementation Support Guide.

When the HL7 Interface sends an outbound message, it expects back an acknowledgment indicating the message was received successfully (accept - AA) or unsuccessfully (failure - AR and AE). MIE's HL7 SYSTEM Interface will use this information to know when to send the next message or so it can automatically retry on a failure.

#### HL7 Standard Acknowledgments

MIE will be using the following MSA acknowledgment codes, the following codes are to be treated as such:

* AA (Application Accepted) - the message was accepted and successfully processed.
* AR (Application Rejected) - the only time a message should not be automatically retried, an AR acknowledgment code indicates that the message is not formatted properly.
* AE (Application Error) - a notice of failure on the receiving side and does not indicate that the message is bad and must be resent.

These acknowledgments conform to the HL7 standard. The interface determines the acknowledgment mode to use based on the values sent in MSH.15 and MSH.16, sending back the acknowledgment in the manner requested by the message sender. For more information, refer to chapter two of the HL7 standard documentation.

{{% anchor sys="accepted" %}}

## Supported HL7 Message types

legend - < > = 0 to many, [ ] = 0 to 1, { } means 1 to many.

### Scheduling (SIU)

* [SIU^S12](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [SCH](hl7-segment-definitions.html) [ [PID](hl7-segment-definitions.html) ] [ [NTE](hl7-segment-definitions.html) ] [ [PV1](hl7-segment-definitions.html) ] [ [DG1](hl7-segment-definitions.html) ] [ [RGS](hl7-segment-definitions.html) ] [ [AIG](hl7-segment-definitions.html) ] [AIL](hl7-segment-definitions.html) [ [AIP](hl7-segment-definitions.html) ]
* [SIU^S14](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [SCH](hl7-segment-definitions.html) [ [PID](hl7-segment-definitions.html) ] [ [NTE](hl7-segment-definitions.html) ] [ [PV1](hl7-segment-definitions.html) ] [ [DG1](hl7-segment-definitions.html) ] [ [RGS](hl7-segment-definitions.html) ] [ [AIG](hl7-segment-definitions.html) ] [AIL](hl7-segment-definitions.html) [ [AIP](hl7-segment-definitions.html) ]
* [SIU^S15](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [SCH](hl7-segment-definitions.html) [ [PID](hl7-segment-definitions.html) ] [ [NTE](hl7-segment-definitions.html) ] [ [PV1](hl7-segment-definitions.html) ] [ [DG1](hl7-segment-definitions.html) ] [ [RGS](hl7-segment-definitions.html) ] [ [AIG](hl7-segment-definitions.html) ] [ [AIL](hl7-segment-definitions.html) ] [ [AIP](hl7-segment-definitions.html) ]

{{% anchor sys="patient_registration" %}}

### Patient Registration (ADT)

* [ADT^A04](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [ [EVN](hl7-segment-definitions.html) ] [PID](hl7-segment-definitions.html) [ [PV1](hl7-segment-definitions.html) ] [ [DG1](hl7-segment-definitions.html) ] [ [GT1](hl7-segment-definitions.html) ] < [IN1](hl7-segment-definitions.html) < [IN2](hl7-segment-definitions.html) > >
* [ADT^A08](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [ [EVN](hl7-segment-definitions.html) ] [PID](hl7-segment-definitions.html) [ [PV1](hl7-segment-definitions.html) ] [ [DG1](hl7-segment-definitions.html) ] [ [GT1](hl7-segment-definitions.html) ] < [IN1](hl7-segment-definitions.html) < [IN2](hl7-segment-definitions.html) > >

{{% anchor sys="lab_results" %}}

### Lab Results (ORU)

* [ORU^R01](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [PID](hl7-segment-definitions.html) [ [PV1](hl7-segment-definitions.html) ] {[ORC](hl7-segment-definitions.html) { [OBR](hl7-segment-definitions.html) { [OBX](hl7-segment-definitions.html) < [NTE](hl7-segment-definitions.html) > } }}

{{% anchor sys="lab_orders" %}}

### Lab Orders (ORM)

* [ORM^O01](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [PID](hl7-segment-definitions.html) <[NTE](hl7-segment-definitions.html)> [ [PV1](hl7-segment-definitions.html) ] [ [PV2](hl7-segment-definitions.html) ] <[IN1](hl7-segment-definitions.html)> [ [GT1](hl7-segment-definitions.html) ] { [ORC](hl7-segment-definitions.html) { [OBR](hl7-segment-definitions.html) <[NTE](hl7-segment-definitions.html)> <[DG1](hl7-segment-definitions.html)> <[OBX](hl7-segment-definitions.html)> } } [ [ZPA](hl7-segment-definitions.html) ] [ [ZIL](hl7-segment-definitions.html) ]

### Documents (MDM)

* [MDM^T02](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [ [EVN](hl7-segment-definitions.html) ] [PID](hl7-segment-definitions.html) [ [PV1](hl7-segment-definitions.html) ] [TXA](hl7-segment-definitions.html) { [OBX](hl7-segment-definitions.html) }

{{% anchor sys="financial_transactions" %}}

### Financial Transactions (DFT)

* [DFT^P03](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [ [EVN](hl7-segment-definitions.html) ] [PID](hl7-segment-definitions.html) [ [PV1](hl7-segment-definitions.html) ] <[OBX](hl7-segment-definitions.html)> { [FT1](hl7-segment-definitions.html) < [PR1](hl7-segment-definitions.html) >} < [DG1](hl7-segment-definitions.html) > [ [GT1](hl7-segment-definitions.html) ] < [IN1](hl7-segment-definitions.html) < [IN2](hl7-segment-definitions.html) > >



### Immunization (VXU)

* [VXU^V04](outbound-sample-hl7-messages.html) : [MSH](hl7-segment-definitions.html) [PID](hl7-segment-definitions.html) [ [PD1](hl7-segment-definitions.html) ] <[NK1](hl7-segment-definitions.html)> [ [PV1](hl7-segment-definitions.html) [ [PV2](hl7-segment-definitions.html) ] ] < [IN1](hl7-segment-definitions.html) [ [IN2](hl7-segment-definitions.html) ] > <[ [ORC](hl7-segment-definitions.html) ] [RXA](hl7-segment-definitions.html) [ [RXR](hl7-segment-definitions.html) ] <[OBX](hl7-segment-definitions.html) <[NTE](hl7-segment-definitions.html)>>>





