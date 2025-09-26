---
id: '1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg'
title: 'Encounter Protocols'
date: '2025-08-21T16:24:22.686Z'
version: 224
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-configuration/encounters-protocol-configuration-and-programming/'
  - 'https://mie.talentlms.com/shared/start/key:SOTRKMFP'
source: 'https://drive.google.com/open?id=1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg'
wikigdrive: '6734a553a9b9ad6d6322fa22a9088c47069cc5a0'
---
Protocols are clinical workflows that are condition specific, such as headaches, burns, falls and bites. To better guide the clinician through a patient visit based on a specific condition, ‘protocols' can be configured using observations, flowsheets, .macros and orders in the standard dynamic 'Visit' encounter.

Creating protocols in a system for the ‘Visit' encounter consists of adding the protocol selector in the Chief Complaint section of the encounter. This will drive any programmed protocol components for the other sections of the dynamic visit encounter; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions. Contact your MIE Implementer to have other protocol selections displayed in the chief complaint section.

## Protocol Selection Choices in Chief Complaint

When the chief complaint section is expanded, right under the free text field (where you type the chief complaint) is an auto-complete field named *Protocol*.

![](../encounter-protocols.assets/b95ad64fcbfcfa296ac7ef24cb8a606a.png)

You can click the ↓ down arrow key on your keyboard to see the protocol preprogrammed selections or can begin typing in the auto-complete field to make your selection. This field does not accept any free text. The selection *Occupational Injury* is also a protocol choice.

![](../encounter-protocols.assets/8d3d6e4f8e1e1db447868c5c74b65f10.png)

Once the Chief Complaint section header is collapsed (or you click the ‘next' button to proceed to next section of encounter), the protocol selection is displayed at the top in the light grey encounter info bar to help you know what encounter and what protocol you are working in. It is also displayed in the chief complaint section of the encounter and view/stored document.

![](../encounter-protocols.assets/6251190f2d798737e6f2f56e3be0e20c.png)

## Encounter Sections that Change with Protocol

Depending on the protocol selected in the chief complaint, the corresponding protocol data field components will populate in other sections of the dynamic visit encounter such as; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions.

This screenshot shows an example of an HPI section that displays data fields to capture regarding HPI for a Low Back Pain protocol.

![](../encounter-protocols.assets/cb19cbb3253aff98bc2b2d5397418d0b.png)

Versus this default HPI section data fields to capture in regarding HPI if no protocol was selected.

![](../encounter-protocols.assets/6289b745145331c8d1b1017eb0fdb15d.png)

Depending on the protocol selected, various sections of the dynamic encounter (History of Present Illness (HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions) will reflect possible different data fields to capture to go through and document on the visit.

### MACROs

MACROs labeled throughout the encounter. MACROs are a pre-programmed statement selection that has been added in certain areas of the Visit encounter. You can choose to ‘hide' or ‘show' the MACROs at all times or search for those MACROs you do not see listed.

![](../encounter-protocols.assets/ffe81bcf83cd1727c493cf27e787cc4d.png)

Specific MACRO choices can be programmed to protocol flowsheet sections in prior protocol setup. By clicking on a specific preprogrammed MACRO item that displays as a selection, it will populate an entire verbiage statement into the data field it corresponds to. This is to help save you typing, allow for more efficient time in documenting data, and provides you quick list to pick from that most applies to this data field element. MACROs can be programmed by any end user with security.

![](../encounter-protocols.assets/0ffb193947f5c05371ef048b856196a9.png)

### Tests & Procedures Section Using Protocols

Tests and procedures are pending due list items and also where staff can add ‘in-house' items to the exam encounter that can be performed and resulted at this time of visit without sending the patient to another facility.

Within the Tests & Procedures section, there may be specific tests & procedures listed as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Low Back Pain as a protocol to follow and now in the Tests & Procedures section we see some specific tests & procedures listed that follow that protocol that we may want to ‘add to exam' to perform at today's visit regarding his/her lower back pain.

![](../encounter-protocols.assets/35f88d177c16d3e644d8bd94a95f1f60.png)

Clicking on the lightning bolt button will apply that specific order item (test/procedure) to the visit encounter to be performed today. It applies the order item as its own sub-section here.

In this screen shot example, we selected "Epidural steroid injection" that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the Epidural steroid injection order item into the Tests & Procedures section. It applies it as ‘in progress'.

![](../encounter-protocols.assets/6ee87a787a9dc917c9336711c395fc60.png)

Click to expand the specific order item section (ex: Epidural steroid injection) to key in the data of the test/procedure you performed and result the test/procedure. Make sure to mark the item as ‘completed' when done.

![](../encounter-protocols.assets/d33b01c772a2976f157b65ab5be382e9.png)

### Treatments Section Using Protocols

The treatments section is meant to document any test or procedure (stored as order items) that were done at this visit as a treatment. It's similar to the Tests & Procedures section, but this is meant to be the place to document things given as a treatment at today's visit. If a protocol is selected and the protocol has a preprogrammed *Protocol Treatments* orders picklist programmed, those specific items will display in this section as a hyperlink to select. These may be specific listed items as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Low Back Pain as a protocol to follow and now in the *Treatments* section we see some specific items listed that follow that protocol that we may want to ‘add to exam' to perform and document that we did as a treatment at today's visit regarding his/her lower back pain.

![](../encounter-protocols.assets/55a61df7584b0248ec245b5384f7a82f.png)

Clicking on the specific hyperlink of the treatment will apply that specific item to the visit encounter to indicate it was performed and needs documented as a treatment today. It applies the order item as its own sub-section here.

In this screen shot example, we selected the "Superficial heat" link that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the Superficial heat order item into the *Treatments* section. It applies it as ‘in progress'.

Click to expand the specific order item section (ex: Superficial heat) to key in the data of the item you performed as a treatment and result it. Make sure to mark the item as ‘completed' when done.

![](../encounter-protocols.assets/e8941e4721fd6e327d0e2e669e9cee0b.png)

{{% note %}}
Any treatments noted here that refer to medications or OTC medications administered in real-time as a treatment (listed here as a treatment order item) etc would not automatically go into the patient's medication record, nor do any drug or allergy contraindication checks.
{{% /note %}}

### Visit Orders Section Using Protocols

Specific order items to select from can also be programmed in a picklist titled the same as the protocol name choices. When a protocol is selected in the chief complaint section, in the Visit Orders section, a specific picklist of orderable items can be found (if previously programmed to that protocol) when you select the Visit orders gray bar.

![](../encounter-protocols.assets/b6fb2b7d89732405232028fe9e30be27.png)

You can select the order and click the Add Order Request button to create the order requisition.

If you utilize the quick lists, the protocol orders are available along the right side. Click the paper airplane icon to create the order requisition.

![](../encounter-protocols.assets/01c341f024e8ba3f10172a14f4f79311.png)

Within the Order Requisition, the protocol orders are available too. Click on the plus icon next to the order you wish to add to add any additional items.

![](../encounter-protocols.assets/5130dcb4d3aa37cab1080e8dc88ac0b8.png)

## Programming Protocol Specific Sections

HPI, ROS, PE, Quality, Plan Narrative, Patient Education and Depart Instruction sections can be programmed to display specific protocol data entry fields using observation flowsheets configured by MIE Implementer or superusers.

Tests & Procedures, Treatments, and Visit Orders sections can be programmed to display specific protocol orderable items using order picklists configured by MIE Implementer or superusers.

See other help documentation called [Encounters Protocol Configuration & Programming](https://docs.enterprisehealth.com/functions/system-configuration/encounters-protocol-configuration-and-programming/).

## Learning Management System

To learn more about Encounter Protocols, follow the link below to the Learning Management System course:

* [Protocols](https://mie.talentlms.com/shared/start/key:SOTRKMFP)
