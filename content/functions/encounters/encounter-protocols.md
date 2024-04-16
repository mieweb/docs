---
id: '1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg'
title: 'Encounter Protocols'
date: '2022-02-14T18:53:42.540Z'
version: 90
lastAuthor: 'dcase'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1hL-XtOsIVpllUcBoxAozZ3wHjQVhKU_Zz2oYxf92Zgg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Protocols are clinical workflows that are condition specific, such as headaches, burns, falls and bites. To better guide the clinician through a patient visit based on a specific condition, ‘protocols' can be configured using observations, flowsheets, .macros and orders in the standard dynamic 'Visit' encounter.

Creating protocols in a system for the ‘Visit' encounter consists of adding the protocol selector in the Chief Complaint section of the encounter. This will drive any programmed protocol components for the other sections of the dynamic visit encounter; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions. Contact your MIE Implementer to have other protocol selections displayed in the chief complaint section.

## Protocol Selection Choices in Chief Complaint

When the chief complaint section is expanded, right under the free text field (where you type the chief complaint) is an auto-complete field named *Protocol*.

![](../encounter-protocols.assets/85ec4e426db7046839c722906ac38ae7.png)

You can click the ↓ down arrow key on your keyboard to see the protocol preprogrammed selections or can begin typing in the auto-complete field to make your selection. This field does not accept any free text. The selection *Occupational Injury* is also a protocol choice.

![](../encounter-protocols.assets/a56bb6b74b44e1a6cb86b5770339ea6b.png)

Once the Chief Complaint section header is collapsed (or you click the ‘next' button to proceed to next section of encounter), the protocol selection is displayed at the top in the light grey encounter info bar to help you know what encounter and what protocol you are working in. It is also displayed in the chief complaint section of the encounter and view/stored document.

![](../encounter-protocols.assets/c3988ecc7db6365cbc4ba4225cc235c6.png)

## Encounter Sections that Change with Protocol

Depending on the protocol selected in the chief complaint, the corresponding protocol data field components will populate in other sections of the dynamic visit encounter such as; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions.

This screenshot shows an example of an HPI section that displays data fields to capture regarding HPI for a Cardiovascular-Chest Pain protocol.

![](../encounter-protocols.assets/032e2221b13743f780ea54560ec1eb4b.png)

Versus this default HPI section data fields to capture in regarding HPI if no protocol was selected.

![](../encounter-protocols.assets/4ba6a6258dd7750499e30a9beb42fcac.png)

Depending on the protocol selected, various sections of the dynamic encounter (History of Present Illness (HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Visit Orders, Treatments, Patient Education and Depart Instructions) will reflect possible different data fields to capture to go through and document on the visit.

### MACROs

MACROs labeled throughout the encounter. MACROs are a pre-programmed statement selection that has been added in certain areas of the Visit encounter. You can choose to ‘hide' or ‘show' the MACROs at all times or search for those MACROs you do not see listed.

![](../encounter-protocols.assets/0947c4c37783280ff651b937bbaf42e4.png)

Specific MACRO choices can be programmed to protocol flowsheet sections in prior protocol setup. By clicking on a specific preprogrammed MACRO item that displays as a selection, it will populate an entire verbiage statement into the data field it corresponds to. This is to help save you typing, allow for more efficient time in documenting data, and provides you quick list to pick from that most applies to this data field element. MACROs can be programmed by any end user with security.

![](../encounter-protocols.assets/a2ba56cb2eaa34d3bb078169937884e2.png)

### Tests & Procedures Section Using Protocols

Tests and procedures are pending due list items and also where staff can add ‘in-house' items to the exam encounter that can be performed and resulted at this time of visit without sending the patient to another facility.

Within the Tests & Procedures section, there may be specific tests & procedures listed as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Cardiovascular Chest Pain as a protocol to follow and now in the Tests & Procedures section we see some specific tests & procedures listed that follow that protocol that we may want to ‘add to exam' to perform at today's visit regarding his/her chest pain visit.

![](../encounter-protocols.assets/9c8eaac43e4c069c444af843d33b9664.png)

Clicking on the specific hyperlink of the test/procedure component (add xxxx to exam) listed will apply that specific order item (test/procedure) to the visit encounter to be performed today. It applies the order item as its own sub-section here.

In this screen shot example, we selected Add "Electrocardiogram" to Exam link that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the Electrocardiogram order item into the Tests & Procedures section. It applies it as ‘in progress'.

![](../encounter-protocols.assets/3350e48573f6fa0e4282d6f664ea0537.png)

Click to expand the specific order item section (ex: Electrocardiogram) to key in the data of the test/procedure you performed and result the test/procedure. Make sure to mark the item as ‘completed' when done.

![](../encounter-protocols.assets/d45c61937d76ce8c7c79f828ad6c60c6.png)

### Treatments Section Using Protocols

The treatments section is meant to document any test or procedure (stored as order items) that were done at this visit as a treatment. It's similar to the Tests & Procedures section, but this is meant to be the place to document things given as a treatment at today's visit. If a protocol is selected and the protocol has a preprogrammed *Protocol Treatments* orders picklist programmed, those specific items will display in this section as a hyperlink to select. These may be specific listed items as a guidance to ‘add' to the exam based on the protocol selected in the chief complaint. In this screen shot example, we had selected Cardiovascular Chest Pain as a protocol to follow and now in the *Treatments* section we see some specific items listed that follow that protocol that we may want to ‘add to exam' to perform and document that we did as a treatment at today's visit regarding his/her chest pain visit.

![](../encounter-protocols.assets/2b6cff5e2e11f55d89c61146279f7ea8.png)

Clicking on the specific hyperlink of the treatment item quick pick (add xxxx to exam) listed will apply that specific item to the visit encounter to indicate it was performed and needs documented as a treatment today. It applies the order item as its own sub-section here.

In this screen shot example, we selected Add "Administer oxygen by face mask" to Exam link that was displayed (it appeared as a choice based on the protocol we had previously selected to use for this visit encounter) and then it applied the oxygen by face mask order item into the *Treatments* section. It applies it as ‘in progress'.

Click to expand the specific order item section (ex: Administer oxygen by face mask) to key in the data of the item you performed as a treatment and result it. Make sure to mark the item as ‘completed' when done.

![](../encounter-protocols.assets/a2e777d8c69428222bb9ee1fdc85caec.png)

{{% note %}}
Any treatments noted here that refer to medications or OTC medications administered in real-time as a treatment (listed here as a treatment order item) etc would not automatically go into the patient's medication record, nor do any drug or allergy contraindication checks.
{{% /note %}}

### Visit Orders Section Using Protocols

#### Quick Pick Medication Orders

Within the Visit Orders section, there may be specific preprogrammed medications listed as a guidance to quick pick/prescribe based on the protocol selected in the chief complaint. Not every medication is listed here (only those that were pre-programmed with the protocol so far), so you do still have the flexibility to order/prescribe from within the Medications Orders section.

![](../encounter-protocols.assets/ea588ad4005f9f2fb4c6390f9ec9f750.png)

You can utilize a quick pick med to prescribe found in the specific protocol list in the Visit Orders section. Simply checkmark a suggested protocol medication to prescribe and click the *evaluate* button.

![](../encounter-protocols.assets/f0c26d648d8ebdab699b0d18d1465f2d.png)

You will see a pop-up box that states the system has successfully added that quick pick prescription and shows the details. Evaluating a medication order from this protocol quick pick method creates a medication record, a prescription and the medication order in the plan *Medication Orders* section.

![](../encounter-protocols.assets/5c372b8063acf33ff730580e9ee1d23a.png)

The quick pick medication prescription will then be auto-rendered in the above *Medication Orders* section, a prescription has been auto-created and a medication record in the chart. If you need to make edits or delete the quick pick medication, simply expand open the *Medication Orders* section of the encounter and make edits or delete. You can also manually prescribe more here in this section as usual.

![](../encounter-protocols.assets/62537f7c4b310cf4643577a888435c94.png)

#### Specific Protocol Visit Orders Picklist

Specific order items to select from can also be programmed in a picklist titled the same as the protocol name choices. When a protocol is selected up in chief complaint, in the Visit Orders section, a specific picklist of orderable items can be found (if previously programmed to that protocol) and you can select the hyperlink Make (protocol name) Order.

![](../encounter-protocols.assets/acb27248d5e07884c90cd357cf3ac485.png)

This will open up the Order Request screen and displays the selectable order items according to that protocol picklist that was programmed. You can create an order to sent out using this method and also you only see specific order items that are related to the protocol you selected on the encounter for easiness.

![](../encounter-protocols.assets/2afb1be62557d41ec714e17ba485dc7f.png)

## Programming Protocol Specific Sections

HPI, ROS, PE, Quality, Plan Narrative, Patient Education and Depart Instruction sections can be programmed to display specific protocol data entry fields using observation flowsheets configured by MIE Implementer or superusers.

Tests & Procedures, Treatments, and Visit Orders sections can be programmed to display specific protocol orderable items using order picklists configured by MIE Implementer or superusers.

See other help documentation titled *Encounters - Protocol Configuration Programming.pdf*
