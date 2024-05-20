---
id: '19b7c8803bKvIhulmLIHQnmOG8v8sQsWfj-jLEN4jgOY'
title: 'Encounters Protocol Configuration & Programming'
date: '2024-05-20T16:16:25.636Z'
version: 184
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../order-and-result-management/observation-flowsheets.md'
source: 'https://drive.google.com/open?id=19b7c8803bKvIhulmLIHQnmOG8v8sQsWfj-jLEN4jgOY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
*This help guide goes through the configuring/programming steps to make protocols appear in the Visit encounter for use. Please see other help guide named Encounters-Protocols.pdf to read on workflow usage of Protocols within a Visit Encounter.*

Protocols are clinical workflows that are condition specific, such as headaches, burns, falls and bites. To better guide the clinician through a patient visit based on a specific condition, ‘protocols' can be configured using observations, flowsheets, .macros and orders in the standard dynamic 'Visit' encounter.

Creating protocols in a system for the ‘Visit' encounter consists of adding the protocol selector in the Chief Complaint section of the encounter. This will drive the protocol components for the other sections of the encounter; History of Present Illness ( HPI), Review of Systems (ROS), Physical Exam (PE), Tests and Procedures, Quality, Plan Narrative, Patient Education and Depart Instructions. Of course, {{% system-name %}} system's default encounter sections can still be used if no specific protocol selection is made to affect those dynamic sections.

![](../encounters-protocol-configuration-and-programming.assets/d66d764ad8ff1bdfbd209eac07166dc2.png)

## Create and Display Visit Protocols in the Visit Encounter

To program protocol selections for your system's Visit encounter, one must have security permission to manage observations and manage observation flowsheets.

![](../encounters-protocol-configuration-and-programming.assets/c5db7ba72cac5604dce7b7ea4fcbfc03.png)

For protocols to show as selections in the Chief Complaint section of the dynamic Visit Encounter, the system needs to have an observation named: **Visit Protocol** This is done via the sidemenu tab Control, then to Observation Codes tab, then search to make sure one doesn't exist already. If it does exist already, you will skip to just add protocol selection choices to this existing observation in the *discrete values* section of the Visit Protocol observation.

Observation name = Visit Protocol

Observation Type=Custom Discrete Values

![](../encounters-protocol-configuration-and-programming.assets/fccf8aa1a5e6db8d13763cd281d2837b.png)

In the *Discrete Values* section of the Visit Protocol observation, you will key in all the names of the needed protocols, such as ‘Fall', ‘Burn' or ‘Chest Pain', etc and set the order in which they should appear in a drop-down view. **Value field:** The names keyed in this section will be the names of the protocols the end user will see as a selection choice in the chief complaint of the Visit dynamic encounter. **Display field:** can leave blank. **Sort Order:** this is the order in which they will appear to an end user in the protocol autocomplete of the chief complaint section if they use their ↓ down arrow key on a keyboard to see a list of all selections available. Most key these in alphabetical order so the end user sees them alphabetized.

![](../encounters-protocol-configuration-and-programming.assets/4fde68aab5b3d1e1d0adc65fbe1637bc.png)

Click the SAVE button when done either adding the Visit Protocol observation with discrete value selections, or editing the existing Visit Protocol observation and adding discrete value selections.

Once this has been done the Protocol autocomplete field (along with the selection choices) will show in the dynamic Visit encounter in the Chief Complaint section. This is an autocomplete box so by using the ‘down arrow' in this field the list of the protocols will reveal. Otherwise begin typing in the desired protocol to activate the autocomplete selection.

![](../encounters-protocol-configuration-and-programming.assets/f9dc41d5f96419338f8fbc731da7ab32.png)

## Create Observations for Use of Protocols

The Visit encounter comes with default predefined HPI, ROS, PE, Tests & Procedures and Quality sections with default data entry items that get stored. However, if a protocol being set up needs specific data entry items (not found in our default sections) according to a protocol, one can set up unique encounter sections (using flowsheets) to trigger and display specific data entry items for end users to follow and key in according to a specific protocol selected.

Currently, these sections can be programmed to reflect a unique selected protocol flowsheet instead of the default sections:

* HPI (History of Present Illness)
* ROS (Review of Systems)
* PE (Physical Exam)
* Quality
* Plan Narrative
* Patient Education
* Depart Instructions

Observations need first to be created for each of the specific questions or data points to be collected throughout the encounter protocol sections. Once these observations are created, you will group them together in flowsheets per section that is applicable. Meaning, one flowsheet for each encounters section that follows the protocol.

{{% note %}}
Protocols for the Test & Procedures section and Treatments section require different steps using orders instead of observations. There is a separate section regarding how to program Test & Procedures or Treatments sections in this help document in subsequent pages.
{{% /note %}}

When creating the needed observations, use the following naming convention that also indicates which encounter section they will show in. This format is also needed for the .macro functionality.

### HPI Section

Add observations that need to display in the HPI section:

Observation Name field:

* Begin every observation name with <strong>HPI</strong>
* After the word <strong>HPI</strong> then type the rest of the observation name needing to be stored to capture the data
    * Examples:
        * HPI Associated symptoms
        * HPI Quality of pain

Observation Type field:

* Does not need set

![](../encounters-protocol-configuration-and-programming.assets/00c7469bb023ffed88f6f8d61deceb82.png)

Click the *Save* button to save the observation. Repeat to add each individual HPI data entry point that needs collected for the HPI of each specific protocol. Here is an example of various specific HPI data collection entry points that various protocols could use in the HPI section:

![](../encounters-protocol-configuration-and-programming.assets/12fe1a320f5ded0d6cdab8d55e62e294.png)

### ROS Section

Add observations that need to display in the ROS section:

Observation Name field:

* Begin every observation name with <strong>ROS</strong>
* After the word <strong>ROS</strong> then type the rest of the observation name needing to be stored to capture the data
    * Examples:
        * ROS ENT
        * ROS Endocrine

Observation Type field:

* Does not need set

Click the *Save* button to save the observation. Repeat to add each individual ROS data entry point that needs collected for the ROS of each specific protocol. Here is an example of various specific ROS data collection entry points that various protocols could use in the ROS section:

![](../encounters-protocol-configuration-and-programming.assets/cef90c90c8f3a7624d5b2138606c8712.png)

### Physical Exam (PE) Section

Add observations that need to display in the PE (physical exam) section:

Observation Name field:

* Begin every observation name with <strong>PE</strong>
* After the word <strong>PE</strong> then type the rest of the observation name needing to be stored to capture the data
    * Examples:
        * PE Level of consciousness
        * PE General Appearance and Level of Distress

Observation Type field:

* Does not need set

Click the *Save* button to save the observation. Repeat to add each individual PE data entry point that needs collected for the PE of each specific protocol. Here is an example of various specific PE data collection entry points that various protocols could use in the PE section:

![](../encounters-protocol-configuration-and-programming.assets/77ff4c752a93fd8385fe72e69791ceaa.png)

### Quality Section

Add observations that need to display in the Quality section:

Observation Name field:

* Begin every observation name with <strong>QUALITY</strong>
* After the word <strong>QUALITY</strong> then type the rest of the observation name needing to be stored to capture the data
    * Examples:
        * QUALITY Assess client's potential for understanding the health information provided
        * QUALITY Provide client education consistent with the assessment of the condition

Observation Type field:

* Does not need set

Click the *Save* button to save the observation. Repeat to add each individual QUALITY data entry point that needs collected for the QUALITY of each specific protocol. Here is an example of various specific QUALITY data collection entry points that various protocols could use in the QUALITY section:

![](../encounters-protocol-configuration-and-programming.assets/57c84e020dca7782f805f3d0c9c8ea0d.png)

## Create Flowsheets for Protocol Encounter Section

Flowsheets for each specific unique protocol section need to be created and the flowsheets will be comprised of the observations needed for each encounter section that is unique to the protocol. If flowsheets are not created or correctly matching, the system will default to its default HPI, ROS, PE, Quality, etc sections in the Visit encounter.

To create flowsheets, it's important to use the following naming conventions so the system will know which section to insert them within the dynamic Visit encounter. Flowsheets can be created after all the unique observations have been created. To create a flowsheet, one must have security permission to *Manage Observation Flowsheets*.

![](../encounters-protocol-configuration-and-programming.assets/58342eba7161906db5170130c7cb879c.png)

From the *Control* sidemenu tab, go to *Observation Codes* tab and click the Display Flowsheets hyperlink found at the top right corner of the screen.

![](../encounters-protocol-configuration-and-programming.assets/49c9ab614f67658a4315ae6a42e0c462.png)

A list of all existing flowsheets for the system will display. To add a flowsheet for a protocol section to be used in the dynamic encounter (that doesn't exist already), simply click the Add Flowsheet hyperlink found at the top right corner of the screen.

![](../encounters-protocol-configuration-and-programming.assets/c1f22e3abc09e2ef2454c61bf8375ba1.png)

**Flowsheet Name:** The name of the flowsheet needs to start with the **prefix** of the specific encounter section this will populate, followed by a hyphen character – then the specific protocol discrete value name that was entered in the Visit Protocol observation as a discrete value option for users to be able to select.

{{% note %}}
If the hyphen character is not used, the system will not pull in the specific protocol flowsheet into that section that you specify. Therefore, those sections of the encounter will expand to open our default HOS, ROS, PE, Quality, etc sections instead.
{{% /note %}}

Create flowsheets using the following naming conventions so the system will know where to insert them within the encounter: ‘Section'-‘Visit Protocol Discrete Value'

**Examples**:

* HPI-Cardiovascular-Chest Pain
* ROS-Cardiovascular-Chest Pain
* PE-Skin-Rash
* QUALITY-Neurological-Headache
* Plan-Eye Complaints
* PatEd-Ear Complaints
* Depart-Clean wound daily

In the following example, the system has a visit protocol named Cardiovascular and we have created HPI observations to be used in the HPI section for the Cardiovascular protocol and am now creating the flowsheet for the HPI section which the system will pull these data entry field questions into the HPI section instead of the default normal HPI section.

![](../encounters-protocol-configuration-and-programming.assets/526d63963f3f2c6bb0735e07ce46b063.png)

**Observation:** Begin typing in the name of the observation(s) you created to populate the encounter section flowsheet you are programming.

![](../encounters-protocol-configuration-and-programming.assets/bd3553c00142d9a702d634e183c6e918.png)

When you select an existing observation from that auto-complete field, it will automatically then populate in the listview below the flowsheet you are working in. Continue to find and add more observations to complete the flowsheet you need to appear.

![](../encounters-protocol-configuration-and-programming.assets/73bf41d0564fe7891709fc055e6a288b.png)

Once done selecting the observations (data entry points) to display in the encounter section flowsheet, go into each individual observation listed in the bottom portion and select the specific input type needed for each observation entry that will display in the flowsheet to users. There is more help regarding specifics and details of flowsheet module programming is found in *Observation Flowsheets.pdf* help guide in the {{% system-name %}} online help.

![](../encounters-protocol-configuration-and-programming.assets/16febdc86bb8b7ef85125824b9631ab9.png)

Then click the pencil icon (edit) to edit the flowsheet observation entry description field.

![](../encounters-protocol-configuration-and-programming.assets/58c8c7c24da9bface07f73605c930929.png)

The **description** field is what users will see when entering/keying in data. The **name** field is what the observation is uniquely named and stored in the system as and will result on discrete data reporting, etc. Edit the description to be grammatically correct. In most cases you will remove the prefix (ex: HPI) and make the entry item into a statement or question with the correct punctuality so it makes sense to the user who will be seeing this to enter in information and also so it makes sense on a document view that gets printed or faxed.

In this example I removed the prefix HPI and added a question mark to the verbiage on the description field of the observation. The description is what a user will see in the encounter and what will appear on a stored document. Discrete reporting will render the observation name field that needs to be unique for discrete reporting.

![](../encounters-protocol-configuration-and-programming.assets/3e09d3700592f3532990d478dca3b217.png)

Once the save button is clicked in the edit of that individual flowsheet observation component, the input type selected and the description the users will see in the encounter & document is reflected in the listview of the flowsheet screen.

![](../encounters-protocol-configuration-and-programming.assets/b057b2605996023ec8d1cd60d652a6f2.png)

Once the flowsheet is compiled and each is set to a specific input type and description edited, click the *SUBMIT* button to save all work.

{{% info %}}
More help regarding other details of flowsheet module programming is found in [Observation Flowsheets](../order-and-result-management/observation-flowsheets.md) help guide in the {{% system-name %}} online help.
{{% /info %}}

Continue to create separate flowsheet and set input type and edit description entries (using previous steps above) for Review of Systems (ROS) encounter section if needed for the protocol. Here is an example of an ROS FLOWSHEET to be used in the Cardiovascular protocol example:

![](../encounters-protocol-configuration-and-programming.assets/7a7f8dd5c701debebbb08a6f3326108a.png)

Continue to create separate flowsheet and set input type and edit description entries (using previous steps above) for Physical Exam (PE) encounter section if needed for the protocol. Here is an example of a PE FLOWSHEET to be used in the Cardiovascular protocol example:

![](../encounters-protocol-configuration-and-programming.assets/92d8b684e9bdde01acaab8c03ff1e591.png)

Continue to create separate flowsheet and set input type and edit description entries (using previous steps above) for Quality encounter section if needed for the protocol. Here is an example of a QUALITY FLOWSHEET to be used in the Cardiovascular protocol example:

![](../encounters-protocol-configuration-and-programming.assets/2a03c1b3872d79034bcf88f392da1d2c.png)

Once all flowsheets for any needed specific encounter sections are programmed, go into a test patient and select the Visit encounter. Go into Chief Complaint and select the specific protocol to test. Once the protocol is selected and the Chief Complaint section is collapsed, any corresponding programmed protocol flowsheet sections will display the unique flowsheets you programmed to show up. If not, make sure the flowsheet has the hyphen character and that the flowsheet name has the correct section prefix needed. Here are screenshot examples of the protocol and flowsheet examples of cardiovascular protocol needed for HPI, ROS, PE, Pat Ed, Plan, Depart Instructions and Quality sections that was described in this help guide in previous steps:

Example of an HPI section flowsheet unique to the protocol selected that displays instead of the default HPI section items:

![](../encounters-protocol-configuration-and-programming.assets/83c2d7e898db5248d5e96e733196a1eb.png)

Example of an ROS section flowsheet unique to the protocol selected instead of the default ROS section items:

![](../encounters-protocol-configuration-and-programming.assets/a6ac5ae3b0bf5d649a9d1a1534249bbb.png)

Example of a PE section flowsheet unique to the protocol selected instead of the default PE section items:

![](../encounters-protocol-configuration-and-programming.assets/9367d65972e7d333c27e1340bd448c11.png)

Example of a QUALITY section flowsheet unique to the protocol selected instead of the default Quality section items:

![](../encounters-protocol-configuration-and-programming.assets/b6fd4d4e9f0a1da58102a227f0f07349.png)

When working in a chart, if the encounter is set as ‘current' for yourself, you will also see the *protocol* that the encounter was selected as in the encounter summary toolbar line.

![](../encounters-protocol-configuration-and-programming.assets/2374ca0797c23fc890ff7ba0d0c9ad7c.png)

When on the encounter ‘view' or stored document, this example reflects the observation ‘description' that users see and why it's important to change the description of the observation in the flowsheet editor to use grammar that makes sense for a user and someone receiving the document without altering the stored discrete unique observation name in the system.

![](../encounters-protocol-configuration-and-programming.assets/ae38488b8175246047d2a6f002e4ad43.png)

## Tests & Procedures Section

The Test & Procedures section of the dynamic Visit encounter is configured differently than the other sections. Tests & Procedures section utilizes an ‘order item' and an ‘order picklist' for each specific tests & procedures section per protocol needed.

### Observations & Flowsheet

First, add all individual observations to the system that you want the data stored as that needs to appear in each Test & Procedure flowsheet. This is by doing the same steps done in previous pages of this help document to add observations. You can use a prefix naming convention for this section if wish (like was done for HPI, ROS, PE, etc).

Once all observations have been created in the system, you need to create a flowsheet. The **flowsheet name** must match exactly to the name of the visit protocol observation selection the users can choose. So, the other flowsheets for HPI, PE, ROS and Quality all are named with that as the prefix for its flowsheet name. Tests & Procedures section is different. The flowsheet name for a Tests & Procedures protocol section should match the name of the exact protocol selection discrete value choice from the observation *Visit Protocol*

Here is an example of a protocol named *Skin-Burns*. The system is programmed to have a specific HPI, PE and Quality section appear to follow that protocol selection, thus the flowsheets have the prefix for those sections followed by a hyphen – and then the name of the visit protocol. However you will notice that the flowsheet for the Tests & Procedures section to populate for Skin-Burns is simply named *Skin-Burns* for its flowsheet name. No prefix is needed, only the exact match to the visit protocol name.

![](../encounters-protocol-configuration-and-programming.assets/66661c941f26b70152684f9826a410e5.png)

### Order Item & Picklist

Once each Tests & Procedures protocol(s) observations and flowsheet(s) are created, make an order for it. One must have security permission to orders.

![](../encounters-protocol-configuration-and-programming.assets/d39ced67193ca6e8e748498c1d2fc09d.png)

This is done by going to the Control sidemenu tab, then to Orders-List Editor tab, and then click the Add An Order hyperlink

![](../encounters-protocol-configuration-and-programming.assets/0580626b1ac6db3af7e889009447d774.png)

![](../encounters-protocol-configuration-and-programming.assets/bfddedc2c11785f8ff42c72b6ccddb08.png)

* <strong>Order Type:</strong> set to be Protocol
* <strong>Order Name:</strong> must be the exact matching name of the Visit Protocol which should be the same exact matching name as the Tests & Procedures flowsheet name created in above steps. This is the specific protocol tests & procedures flowsheet that will appear in when selected in an encounter.
* <strong>Layout:</strong> set to be Obs Survey

Click the *Save* button to save your order item.

Next the order item must be tied to the Protocol Procedures order picklist. Go to Control sidemenu tab, then to Orders-Pick Builder tab. The screen will display all existing picklists. Use the drop-down in the *set filter* to see if a picklist named **Protocol Procedures** exists already or not. If it exists already, click the plus + icon at the top right corner of the title bar of the picklist to add another group & order item set to it (see below instructions).

![](../encounters-protocol-configuration-and-programming.assets/2cec93146e1e7da36f7319936430b216.png)

If there is not an existing picklist named *Protocol Procedures*, then one needs created. Click the *Add New Set* button

![](../encounters-protocol-configuration-and-programming.assets/8586244cba2a90654b73847c3ede46d9.png)

![](../encounters-protocol-configuration-and-programming.assets/98d81be7b2e1d916799d75b35b73602d.png)

Create an orders picklist named ‘Protocol Procedures'.

* <strong>New Set:</strong> name it Protocol Procedures
* <strong>New Group:</strong> name it the specific visit protocol name. This needs to be the exact name of the matching Visit Protocol
* <strong>Column Select:</strong> this should default to 1, but if it doesn't then click <em>new column</em> button so that it inserts a 1 in this field
* <strong>Selected:</strong> keep as no
* <strong>Order Content:</strong> begin typing the order item of the protocol which would be the exact matching protocol name created for the protocol flowsheet.
* <strong>Condition:</strong> leave blank
* <strong>Display After:</strong> leave as first item

Click *SAVE* button.

To add another Tests & Procedures group & order item protocol selection to the main Protocol Procedures picklist, click the plus + icon at the top right of the main Protocol Procedures picklist title bar. The picklist *Protocol Procedures* needs to house all Tests & Procedures order items that need to generate for any visit protocol that could be selected.

![](../encounters-protocol-configuration-and-programming.assets/3fc240ca877832337450f01354057cee.png)

Once the observations, flowsheet(s), order item(s), and Protocol Procedure order picklist has all protocol components, go to a test patient and select the Visit encounter. Go into Chief Complaint and select the specific protocol to test. Once the protocol is selected and the Chief Complaint section is collapsed

![](../encounters-protocol-configuration-and-programming.assets/cee719f8c164f9c76a05bed3a2ae5645.png)

Then jump down to the Tests & Procedures section of the Visit encounter. You should see a hyperlink with that matching protocol name in that section. Add (protocol name) to Exam displays here because you created the picklist, the order item and components in above steps. Click on that hyperlink to have that protocol tests & procedures flowsheet applied to that section of the encounter.

![](../encounters-protocol-configuration-and-programming.assets/01cb3c38d3916a9e2637ea7e469962e1.png)

It will apply the matching protocol flowsheet order item into the Tests & Procedures section. Click the title bar of that applied section to expand the encounter section to key in data. Since this is programmed as an order item, it must be checkmarked ‘completed'.

![](../encounters-protocol-configuration-and-programming.assets/d896393116a2c1b3e827d36f44608e8c.png)

## Visit Orders Section Using Protocols

### Quick Pick Medication Orders

Within the Visit Orders section, there may be specific preprogrammed medications listed as a guidance to quick pick/prescribe based on the protocol selected in the chief complaint. Not every medication is listed here (only those that were pre-programmed with the protocol so far), so you do still have the flexibility to order/prescribe from within the Medications Orders section.

![](../encounters-protocol-configuration-and-programming.assets/ea588ad4005f9f2fb4c6390f9ec9f750.png)

To program quick pick medications to appear in the Visit Orders expanded section library as checkboxes on a specific protocol, go into any test patient and select the protocol in chief complaint. Then go to the Medication Orders section and prescribe the med on a test patient filling out all the details and make sure to key in a **remembered as** name. Put the name and strength detail in it and add/submit the prescription on the test patient. Then on real patient charts whom have that protocol specifically selected in the chief complaint of the encounter, the corresponding Visit Orders quick pick med section will display those saved to the meds library with a *remembered as* name. So essentially, a medication library (remembered as field) is saved to the protocol if selected and can be built that way for future use.

Here is an example of what the Visit Orders quick pick medication list would show once programmed for a protocol and why it's important to use the remembered as field to note the strength/name etc):

![](../encounters-protocol-configuration-and-programming.assets/cad6cdc4fd64f1114c0d29cf6530ca98.png)

### Specific Protocol Visit Orders Picklist

Specific order items to select from can also be programmed in a picklist titled the same as the protocol name choices. When a protocol is selected up in chief complaint, in the Visit Orders section, a specific picklist of orderable items can be found (if previously programmed to that protocol) and you can select the hyperlink Make (protocol name) Order.

![](../encounters-protocol-configuration-and-programming.assets/acb27248d5e07884c90cd357cf3ac485.png)

This will open up the Order Request screen and displays the selectable order items according to that protocol picklist that was programmed. You can create an order to sent out using this method and also you only see specific order items that are related to the protocol you selected on the encounter for easiness.

![](../encounters-protocol-configuration-and-programming.assets/2afb1be62557d41ec714e17ba485dc7f.png)

## Treatments Section

There is a treatments section in the Visit dynamic encounter. It may be hidden by default and have to click the ‘tools/gear' icon to see what sections are hidden to make appear.

This section uses ‘order picklists' and can be programmed to display specific selected protocol order items designated as what you did as treatment today.

First an order-picklist must exist named Protocol Treatments.

Then create a ‘group' titled/named exactly the same as the protocol needed.

Then program any order item contents in that group.

![](../encounters-protocol-configuration-and-programming.assets/8245ce39e1ac847098d48a6fa76524cd.png)

Then each order item in the picklist named the protocol name (that matches the encounter selected protocol) will display as an **add xxx to exam** hyperlink in the Treatments section (treatments is found in the Plan section) which you can click.

![](../encounters-protocol-configuration-and-programming.assets/49848db96de558d42ffea2ef3dd526aa.png)
