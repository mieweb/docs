---
id: '1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs'
title: 'Receiving HL7 Messages from System'
date: '2023-12-03T03:46:45.417Z'
version: 119
lastAuthor: 'horner'
mimeType: 'text/x-markdown'
links:
  - 'outbound-interface-install-instructions.md'
  - 'outbound-sample-hl7-messages.md'
  - 'hl7-segment-definitions.md'
source: 'https://drive.google.com/open?id=1okg_cpxA66iv9EFk3VfuW8tvV8F8ST7Lqcr2Ygnv4hs'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
The following document describes how to interface with MIE via an HL7 interface. Whereas the purpose of this interface is to send Hl7 messages real-time to system using TCP/IP protocol, TCP/IP protocol over SSL/TLS, or a restful web service post.

{{% anchor sys="assumptions" %}}

#### Assumptions___

The following assumptions have been made concerning the implementation of the interface:

* It is assumed that the reader of this document is familiar with HL7 v 2.X. This document is not intended to standalone but should be used in conjunction with the HL7 Specification Version 2.3 and Higher.
* The reader is familiar with the HL7 MLLP (Minimal Lower Level Protocol).
* The HL7 interface is real-time using TCP/IP protocol, TCP/IP protocol over SSL/TLS, HTTPS restful web service post.
* The Hl7 Messages sent through the interface will have codes/descriptions/identifiers in the HL7 message foreign to the {{% system-name %}} system and that translations of this data will be handled within {{% system-name %}} (when required).

### Interface Overview

___In order to process the data successfully, the following items must be supplied/completed:

* External system(s) must furnish IP address(s) that will be used for connectivity.
* Interface system parameters must be setup in order to direct the interface on how to format the data for the external system.

To specify the IP address to send, read: [Outbound Interface Install Instructions](outbound-interface-install-instructions.md#overview) and make sure [Auto Routes](outbound-interface-install-instructions.md#auto-routes) are setup to send events from within {{% system-name %}}  to the interface.

![](../receiving-hl7-messages-from-system.assets/4646fbdde45da1a81be6ea94849def45.png)

1. Some document or event occurs within the system.
2. Autoroute get evaluated and a message is created and queued for delivery to a "Refer to System"
3. The transport (usually HTTPS REST, but also MLLP over VPN is initiated by DataSend to Refer to System based on the RTS setup
4. The RTS responds with an ACK and DataSend marks the Route complete depending on the results of the ACK.

#### How it Works

The following describes the process as it occurs:

* A message is sent from MIE's HL7 {{% system-name %}} Interface. The message is then processed accordingly and an acknowledgment of success or error is sent back to {{% system-name %}} HL7 interface.
* If success then MIE's HL7 {{% system-name %}} Interface will send the next message.
* If error, then MIE's HL7 {{% system-name %}} Interface will continue to send the message until a successful acknowledgment has been sent back from the receiving systems HL7 Interface.

### Communication Flow

___Communications control characters will be used for all messages sent between MIE's {{% system-name %}} system and the receiving system. The Minimal Lower Level Protocol (MLLP) is used by the TCP/IP connection, as specified by HL7 standard.

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

* [SIU^S12](outbound-sample-hl7-messages.md#sius12) : [MSH](hl7-segment-definitions.md#message-header-msh) [SCH](hl7-segment-definitions.md#scheduling-activity-information-sch) [ [PID](hl7-segment-definitions.md#patient-identification-pid) ] [ [NTE](hl7-segment-definitions.md#notes-and-comments-nte) ] [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [DG1](hl7-segment-definitions.md#diagnosis-dg1) ] [ [RGS](hl7-segment-definitions.md#resource-group-rgs) ] [ [AIG](hl7-segment-definitions.md#appointment-information-general-resource-aig) ] [AIL](hl7-segment-definitions.md#appointment-information-location-resource-ail) [ [AIP](hl7-segment-definitions.md#appointment-information-personnel-resource-aip) ]
* [SIU^S14](outbound-sample-hl7-messages.md#sius14) : [MSH](hl7-segment-definitions.md#message-header-msh) [SCH](hl7-segment-definitions.md#scheduling-activity-information-sch) [ [PID](hl7-segment-definitions.md#patient-identification-pid) ] [ [NTE](hl7-segment-definitions.md#notes-and-comments-nte) ] [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [DG1](hl7-segment-definitions.md#diagnosis-dg1) ] [ [RGS](hl7-segment-definitions.md#resource-group-rgs) ] [ [AIG](hl7-segment-definitions.md#appointment-information-general-resource-aig) ] [AIL](hl7-segment-definitions.md#appointment-information-location-resource-ail) [ [AIP](hl7-segment-definitions.md#appointment-information-personnel-resource-aip) ]
* [SIU^S15](outbound-sample-hl7-messages.md#sius15) : [MSH](hl7-segment-definitions.md#message-header-msh) [SCH](hl7-segment-definitions.md#scheduling-activity-information-sch) [ [PID](hl7-segment-definitions.md#patient-identification-pid) ] [ [NTE](hl7-segment-definitions.md#notes-and-comments-nte) ] [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [DG1](hl7-segment-definitions.md#diagnosis-dg1) ] [ [RGS](hl7-segment-definitions.md#resource-group-rgs) ] [ [AIG](hl7-segment-definitions.md#appointment-information-general-resource-aig) ] [ [AIL](hl7-segment-definitions.md#appointment-information-location-resource-ail) ] [ [AIP](hl7-segment-definitions.md#appointment-information-personnel-resource-aip) ]

{{% anchor sys="patient_registration" %}}

### Patient Registration (ADT)

* [ADT^A04](outbound-sample-hl7-messages.md#adta04) : [MSH](hl7-segment-definitions.md#message-header-msh) [ [EVN](hl7-segment-definitions.md#event-type-evn) ] [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [DG1](hl7-segment-definitions.md#diagnosis-dg1) ] [ [GT1](hl7-segment-definitions.md#guarantor-gt1) ] < [IN1](hl7-segment-definitions.md#insurance-in1) < [IN2](hl7-segment-definitions.md#insurance-additional-information-in2) > >
* [ADT^A08](outbound-sample-hl7-messages.md#adta08) : [MSH](hl7-segment-definitions.md#message-header-msh) [ [EVN](hl7-segment-definitions.md#event-type-evn) ] [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [DG1](hl7-segment-definitions.md#diagnosis-dg1) ] [ [GT1](hl7-segment-definitions.md#guarantor-gt1) ] < [IN1](hl7-segment-definitions.md#insurance-in1) < [IN2](hl7-segment-definitions.md#insurance-additional-information-in2) > >

{{% anchor sys="lab_results" %}}

### Lab Results (ORU)

* [ORU^R01](outbound-sample-hl7-messages.md#orur01) : [MSH](hl7-segment-definitions.md#message-header-msh) [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] {[ORC](hl7-segment-definitions.md#common-order-orc) { [OBR](hl7-segment-definitions.md#observation-request-obr) { [OBX](hl7-segment-definitions.md#observation/result-obx) < [NTE](hl7-segment-definitions.md#notes-and-comments-nte) > } }}

{{% anchor sys="lab_orders" %}}

### Lab Orders (ORM)

* [ORM^O01](outbound-sample-hl7-messages.md#ormo01) : [MSH](hl7-segment-definitions.md#message-header-msh) [PID](hl7-segment-definitions.md#patient-identification-pid) <[NTE](hl7-segment-definitions.md#notes-and-comments-nte)> [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [ [PV2](hl7-segment-definitions.md#patient-visit-additional-information-pv2) ] <[IN1](hl7-segment-definitions.md#insurance-in1)> [ [GT1](hl7-segment-definitions.md#guarantor-gt1) ] { [ORC](hl7-segment-definitions.md#common-order-orc) { [OBR](hl7-segment-definitions.md#observation-request-obr) <[NTE](hl7-segment-definitions.md#notes-and-comments-nte)> <[DG1](hl7-segment-definitions.md#diagnosis-dg1)> <[OBX](hl7-segment-definitions.md#observation/result-obx)> } } [ [ZPA](hl7-segment-definitions.md#zpa) ] [ [ZIL](hl7-segment-definitions.md#zil) ]

### Documents (MDM)

* [MDM^T02](outbound-sample-hl7-messages.md#mdmt02) : [MSH](hl7-segment-definitions.md#message-header-msh) [ [EVN](hl7-segment-definitions.md#event-type-evn) ] [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] [TXA](hl7-segment-definitions.md#transcription-document-header-txa) { [OBX](hl7-segment-definitions.md#observation/result-obx) }

{{% anchor sys="financial_transactions" %}}

### Financial Transactions (DFT)

* [DFT^P03](outbound-sample-hl7-messages.md#dftp03) : [MSH](hl7-segment-definitions.md#message-header-msh) [ [EVN](hl7-segment-definitions.md#event-type-evn) ] [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) ] <[OBX](hl7-segment-definitions.md#observation/result-obx)> { [FT1](hl7-segment-definitions.md#financial-transaction-ft1) < [PR1](hl7-segment-definitions.md#procedures-pr1) >} < [DG1](hl7-segment-definitions.md#diagnosis-dg1) > [ [GT1](hl7-segment-definitions.md#guarantor-gt1) ] < [IN1](hl7-segment-definitions.md#insurance-in1) < [IN2](hl7-segment-definitions.md#insurance-additional-information-in2) > >

### Immunization (VXU)

* [VXU^V04](outbound-sample-hl7-messages.md#vxuv04) : [MSH](hl7-segment-definitions.md#message-header-msh) [PID](hl7-segment-definitions.md#patient-identification-pid) [ [PD1](hl7-segment-definitions.md#patient-additional-demographics-pd1) ] <[NK1](hl7-segment-definitions.md#next-of-kin/associated-parties-nk1)> [ [PV1](hl7-segment-definitions.md#patient-visit-pv1) [ [PV2](hl7-segment-definitions.md#patient-visit-additional-information-pv2) ] ] < [IN1](hl7-segment-definitions.md#insurance-in1) [ [IN2](hl7-segment-definitions.md#insurance-additional-information-in2) ] > <[ [ORC](hl7-segment-definitions.md#common-order-orc) ] [RXA](hl7-segment-definitions.md#pharmacy/treatment-administration-rxa) [ [RXR](hl7-segment-definitions.md#pharmacy/treatment-route-rxr) ] <[OBX](hl7-segment-definitions.md#observation/result-obx) <[NTE](hl7-segment-definitions.md#notes-and-comments-nte)>>>
