---
title: "Encounter Protocols"
date: 2020-03-30T16:02:13.354Z
url: "general-functionality/encounters/encounter-protocols.html"
author: Jeremia Ploor
version: 46
id: 1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg
source: https://drive.google.com/open?id=1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg
---
Protocols are clinical workflows that are condition specific, such as headaches, burns, falls and bites. To better guide the clinician through a patient visit based on a specific condition, ‘protocols' can be configured using observations, flowsheets, .macros and orders in the standard dynamic 'Visit' encounter.

Creating protocols in a system for the ‘Visit' encounter consists of adding the protocol selector in the Chief Complaint section of the encounter. This will drive any programmed protocol components for the other sections of the dynamic visit encounter; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions. Contact your MIE Implementer to have other protocol selections displayed in the chief complaint section.

## Protocol Selection Choices in Chief Complaint

When the chief complaint section is expanded, right under the free text field (where you type the chief complaint) is an auto-complete field named *Protocol*.

![](../../external_files/8acae8f0a40f6cccebd071dfb44e8f57.png)

You can click the ↓ down arrow key on your keyboard to see the protocol preprogrammed selections or can begin typing in the auto-complete field to make your selection. This field does not accept any free text. The selection *Occupational Injury* is also a protocol choice.

![](../../external_files/b9767ba04caf605059bde30598f1c734.png)

Once the Chief Complaint section header is collapsed (or you click the ‘next' button to proceed to next section of encounter), the protocol selection is displayed at the top in the light grey encounter info bar to help you know what encounter and what protocol you are working in. It is also displayed in the chief complaint section of the encounter and view/stored document.

![](../../external_files/588c853f1f7eb559c644164224a650f3.png)

## Encounter Sections that Change with Protocol

Depending on the protocol selected in the chief complaint, the corresponding protocol data field components will populate in other sections of the dynamic visit encounter such as; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions.

This screenshot shows an example of an HPI section that displays data fields to capture regarding HPI for a Cardiovascular-Chest Pain protocol.

![](../../external_files/f6aad3e7c0dbde6e31b0636de43aad21.png)

Versus this default HPI section data fields to capture in regarding HPI if no protocol was selected.

![](../../external_files/f319f10eeb52a315784fd0ffbff3b5df.png)

Depending on the protocol selected, various sections of the dynamic encounter (History of Present Illness (HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions) will reflect possible different data fields to capture to go through and document on the visit.

### MACROs

MACROs labeled throughout the encounter. MACROs are a pre-programmed statement selection that has been added in certain areas of the Visit encounter. You can choose to ‘hide' or ‘show' the MACROs at all times or search for those MACROs you do not see listed.

![](../../external_files/790d200b84db04c4e47f0ffba4e50842.png)

Specific MACRO choices can be programmed to protocol flowsheet sections in prior protocol setup. By clicking on a specific preprogrammed MACRO item that displays as a selection, it will populate an entire verbiage statement into the data field it corresponds to. This is to help save you typing, allow for more efficient time in documenting data, and provides you quick list to pick from that most applies to this data field element. MACROs can be programmed by any end user with security.

![](../../external_files/db434c4dcc390efdbb9b7e3112dc7ceb.png)

### Tests & Procedures Section Using Protocols

Tests and procedures are pending due list items and also where staff can add ‘in-house' items to the exam encounter that can be performed and resulted at this time of visit without sending the patient to another facility.

Within the Tests & Procedures section, there may be specific tests & procedures listed as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Cardiovascular Chest Pain as a protocol to follow and now in the Tests & Procedures section we see some specific tests & procedures listed that follow that protocol that we may want to ‘add to exam' to perform at today's visit regarding his/her chest pain visit.

![](../../external_files/9d58ecfc25aeccd25e0ebf7fbeffc73c.png)

Clicking on the specific hyperlink of the test/procedure component (add xxxx to exam) listed will apply that specific order item (test/procedure) to the visit encounter to be performed today. It applies the order item as its own sub-section here.

In this screen shot example, we selected Add "Electrocardiogram" to Exam link that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the Electrocardiogram order item into the Tests & Procedures section. It applies it as ‘in progress'.

![](../../external_files/39e973b645cfa351e4539d84bd7a7dc1.png)

Click to expand the specific order item section (ex: Electrocardiogram) to key in the data of the test/procedure you performed and result the test/procedure. Make sure to mark the item as ‘completed' when done.

![](../../external_files/92da5325c94902ad51c64eb1bd5f3186.png)

### Treatments Section Using Protocols

The treatments section is meant to document any test or procedure (stored as order items) that were done at this visit as a treatment. It's similar to the Tests & Procedures section, but this is meant to be the place to document things given as a treatment at today's visit. If a protocol is selected and the protocol has a preprogrammed *Protocol Treatments* orders picklist programmed, those specific items will display in this section as a hyperlink to select. These may be specific listed items as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Cardiovascular Chest Pain as a protocol to follow and now in the *Treatments* section we see some specific items listed that follow that protocol that we may want to ‘add to exam' to perform and document that we did as a treatment at today's visit regarding his/her chest pain visit.

![](../../external_files/3dd4a8c92979ac2adff31ce507c18742.png)

Clicking on the specific hyperlink of the treatment item quick pick (add xxxx to exam) listed will apply that specific item to the visit encounter to indicate it was performed and needs documented as a treatment today. It applies the order item as its own sub-section here.

In this screen shot example, we selected Add "Administer oxygen by face mask" to Exam link that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the oxygen by face mask order item into the *Treatments* section. It applies it as ‘in progress'.

Click to expand the specific order item section (ex: Administer oxygen by face mask) to key in the data of the item you performed as a treatment and result it. Make sure to mark the item as ‘completed' when done.

![](../../external_files/5a0cae7a49fc49a37c57d33ddbc63994.png)

{{% note %}}

Any treatments noted here that refer to medications or OTC medications administered in real-time as a treatment (listed here as a treatment order item) etc would not automatically go into the patient's medication record, nor do any drug or allergy contraindication checks.

{{% /note %}}


### Visit Orders Section Using Protocols

#### Quick Pick Medication Orders

Within the Visit Orders section, there may be specific preprogrammed medications listed as a guidance to quick pick/prescribe based on the protocol selected in the chief complaint. Not every medication is listed here (only those that were pre-programmed with the protocol so far), so you do still have the flexibility to order/prescribe from within the Medications Orders section.

![](../../external_files/8f1c2b5e0f5900401d3539ac8498db6c.png)

You can utilize a quick pick med to prescribe found in the specific protocol list in the Visit Orders section. Simply checkmark a suggested protocol medication to prescribe and click the *evaluate* button.

![](../../external_files/9da696af9f41548b9b84f0a0b2c12ba4.png)

You will see a pop-up box that states the system has successfully added that quick pick prescription and shows the details. Evaluating a medication order from this protocol quick pick method creates a medication record, a prescription and the medication order in the plan *Medication Orders* section.

![](../../external_files/d5671084155b164c490f548f95247599.png)

The quick pick medication prescription will then be auto-rendered in the above *Medication Orders* section, a prescription has been auto-created and a medication record in the chart. If you need to make edits or delete the quick pick medication, simply expand open the *Medication Orders* section of the encounter and make edits or delete. You can also manually prescribe more here in this section as usual.

![](../../external_files/b8d5f84a79cfee9f0629276f575e8d67.png)

#### Specific Protocol Visit Orders Picklist

Specific order items to select from can also be programmed in a picklist titled the same as the protocol name choices. When a protocol is selected up in chief complaint, in the Visit Orders section, a specific picklist of orderable items can be found (if previously programmed to that protocol) and you can select the hyperlink Make (protocol name) Order.

![](../../external_files/548baec7348e76cc6e0715a13d453f57.png)

This will open up the Order Request screen and displays the selectable order items according to that protocol picklist that was programmed. You can create an order to sent out using this method and also you only see specific order items that are related to the protocol you selected on the encounter for easiness.

![](../../external_files/415e48fa904007c2191378d721d4e5ae.png)

## Programming Protocol Specific Sections

HPI, ROS, PE, Quality, Plan Narrative, Patient Education and Depart Instruction sections can be programmed to display specific protocol data entry fields using observation flowsheets configured by MIE Implementer or superusers.

Tests & Procedures, Treatments, and Visit Orders sections can be programmed to display specific protocol orderable items using order picklists configured by MIE Implementer or superusers.

See other help documentation titled *Encounters - Protocol Configuration Programming.pdf*

