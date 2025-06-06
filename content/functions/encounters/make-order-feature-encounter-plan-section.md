---
id: '1kEF-RWvZOJqe2pD7lr3XpwNbP73D0X8SXsRjGm4T-SA'
title: 'Make Order Feature - Encounter Plan Section'
date: '2025-04-01T18:52:32.787Z'
version: 315
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - '../system-administration/system-controls/encounter-types.md'
  - 'encounters-open-order-request-section.md'
  - '../document-management/documents-and-forms/link-documents-to-encounters.md'
  - '../order-and-result-management/order-requests-grid.md'
source: 'https://drive.google.com/open?id=1kEF-RWvZOJqe2pD7lr3XpwNbP73D0X8SXsRjGm4T-SA'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
The ‘plan' area of an encounter allows a Provider to create orders for the chart. The below explains how a Provider enters items into the plan area by using Make Order link or Create Order link in the plan area and how it renders a complete order to print/fax right from the encounters view. This allows the Provider to create & generate the order requisition right from the encounter and eliminates having to go to unordered orders or the patient's chart to render the order requisition that the Provider created in the encounter.

## Visit Orders - Add Referral of Right Side Quick List Method

The *Add Referral* right side quick list method allows you to select a preconfigured Order Picklist category to immediately create an order requisition for specific order tests/procedure items preconfigured within a specific categorized order picklists of that category selected.

![](../make-order-feature-encounter-plan-section.assets/2204881cfaceae2ad63d1f6046e05484.png)

The Order Picklist categories and its contents of items are configured within the Order-Pick Builder within the Control Panel of the system.

![](../make-order-feature-encounter-plan-section.assets/151192b79cd8aa4bf8a0e72bf9d64e4e.png)

NOTE: The preconfigured Order Picklist categories that display as an ‘Add Referral' right side option selection are managed within the Encounter Types editor (within the control panel) for the specific encounter type configured for your system.  Therefore, various Order Picklists could show or be hidden based on what encounter type you are working in.  For more information on how Encounter Types are configured, please refer to the [Encounter Types](../system-administration/system-controls/encounter-types.md) guide.

Once you select a referral category (ex: Imaging), a pop-up window to Create Requisition will display where you can select specific items to order in one requisition and fill out order details.  Upon save, this will create an order requisition document that can be shared (printed, faxed, etc) and tracked to completion of results being received back.

![](../make-order-feature-encounter-plan-section.assets/dd36a314f8ebe1a872d80b45811d46a8.png)

### Required Fields - System Settings

Out of the box, we require an ordering provider and location to be signified on an Order Requisition before being able to save/generate the order.  Your system may be set up with additional required fields on the Order Requisition screen, depending on the system settings enabled for the Orders module. There are several system settings offered for the Orders module, but these are the system settings in regards to which fields can be set to required or not.

![](../make-order-feature-encounter-plan-section.assets/b58857edc09d7c5fae91f1791fb82ba7.png)

### My Setting Preferences

Depending on what you have set as preferences for Encounter Orders (in My Settings), the Order Requisition screen may prepopulate fields such as Ordering Provider, Location, Performing Facility, and Bill Type.  Even though fields may prepopulate from these preferences, you can still change or override them in the Order Requisitions screen before saving/generating the order request.

![](../make-order-feature-encounter-plan-section.assets/8bd106f7d358ce1c3b2ae27f463a4f8b.png)
## Create Requisition

In the *Create Order Requisition* pop-up, you must select and enter the fields appropriate for your order needs.

### Ordering Provider section

![](../make-order-feature-encounter-plan-section.assets/69b80bda69414ee5a3a0227900311cf7.png)

* <strong>Provider:</strong> This is a <strong>required field</strong>.  Select the Ordering Provider by using the drop-down arrow to select the provider that is ordering this. The ordering provider field for the order prepopulates the same name as the performing provider on the encounter. If no performing provider has been set on the encounter, the ordering provider field defaults to the user's MY SETTINGS preference of ‘Ordering Physician' if that has been set.
* <strong>Location:</strong> This is a <strong>required field</strong>.  Select the order provider's location that this order is being requested from.  The layout can be modified by MIE so that the location of this Order Requisition screen offers all locations in your system, or perhaps to only show outside locations or display no outside location choices. The setting is -1 for all, 1 for just outside, 0 for no outside. Please contact your MIE support contact for this change.This field also prepopulates the order location default you have set for yourself in MY SETTINGS.
* <strong>Status:</strong> Defaults to pending, signifying this is an open pending order request to have performed and resulted. However, you can change the status (example if editing an order request and now need to cancel it etc.)
* <strong>Save As:</strong> The document name the order requisition should store as in the chart once saved/generated.

### Regarding section

![](../make-order-feature-encounter-plan-section.assets/c6f51682681c417878961a2d2f35cf7f.png)

* <strong>Chart Name/DOB/MR#:</strong> Displays legal name, preferred name, DOB and chart MR#
    * If the chart has more than one MR#, a drop-down for MR# will display, where you can select the specific MR# to signify on the order requisition
* <strong>Schedule In:</strong> You can use the drop-down to select a general timeframe to have this order schedule in.
    * <strong>Standing Order Frequency:</strong> This field will display if you selected ‘Standing Order' as the Schedule In value above.  For standing order frequency, type in how often to do the order, example: to do this standing order every 3 days or every 1 month, etc. If it isn't a standing order, leave as 0 (zero) days.
* <strong>Schedule Date:</strong> Depending on the ‘Schedule In' choice selected, this date will change, but can be overridden by the user as needed.
* <strong>Priority:</strong> Use the dropdown to select the priority of the order request.  The default is routine.
* <strong>Collection Date:</strong> If you collected the specimen etc, you can signify the date of collection in this field.

### TO section

![](../make-order-feature-encounter-plan-section.assets/a7a82c3d9f9faa52cd668f290a7c4a18.png)

* <strong>To (search for providers):</strong> This is the field to document whom you are referring this patient's order to be done/resulted/processed by/referred to.  This <em>To</em> field is a user autocomplete that pulls from the referrable entity provider organizations or provider charts.  One can also utilize the right hand side <em>Quick List</em> to select a <em>To Provider</em> quickly to insert into this field.
    * <strong>Add New Provider:</strong> You can add a new P (provider) chart to the system here, which will create the person as a P (provider) chart in the system and sets the provider chart as a referrable entity, so it can be utilized here in the <em>To Providers</em> autocomplete or advanced search.
    * <strong>Performing Facility:</strong> This is where the order will be sent if you have a lab or other interface set up where your order requests electronically get sent to a facility via interface (ex: LabCorp, Quest etc). The <em>My Settings</em> preference selected "Preferred Facility" will default here, but can always select a specific performing facility in the drop-down. Otherwise, leave this blank and skip this field if you don't have any directional interface to lab/imaging facilities set up.
* <strong>External ID:</strong> External ID is in HL7 lab results typically in a bi-directional interface. This field is regularly used to display the sending lab's or other EMR's MRN or identifier. It is useful when tracking down a missing or perceived missing result document/message, as the Lab uses this number to identify who the order/result is for. This info is shown on the stored order document in the TO area.

### Items section

![](../make-order-feature-encounter-plan-section.assets/2df93cc04e6ff294303b18d5df4fac05.png)

* <strong>Search for items:</strong> This section is where you specify and select the specific tests, procedures, items, etc of what the order requisition should contain to have collected, performed, resulted, etc.
    * <strong>Autocomplete:</strong> can use the autocomplete field to begin typing the specific order item name(s) that you want the order requisition to contain
    * <strong>Radio buttons on far right side:</strong> One can utilize the right hand side <em>Quick List</em> to select order items configured within the order picklist you selected within the encounter.  The radio buttons allow you to quickly scroll and click to find specific order items configured within the selected picklist.
    * <strong>Picklist icon:</strong> The picklist icon (next to the autocomplete field) can be clicked to pop-open the <em>Choose orders</em> screen that lists all order items configured within the selected picklist. You can also change picklist selections in this pop-up too.  Select the items you wish to order by checkmarking them and then clicking the ADD button.

![](../make-order-feature-encounter-plan-section.assets/88388878e1516fb75def7612a6d3efd7.png)

Regardless of what method is used, once you have selected and added specific order items to the Order Requisition, the items will be listed in the Items section and 2 additional fields will be available.

* <strong>Auth:</strong> this is an optional free-text field to key in any authorization information for each individual order item. This field does not display on the stored order document.
* <strong>Comments:</strong> this is an optional free-text field to key in any comments for any individual item.  Item comments typically include the ‘side' of the body to xray, etc if the order item isn't specific enough. These are shown on the stored order document and the Order Requests tracking datavis tab.

![](../make-order-feature-encounter-plan-section.assets/7512a55b10d0b84fffe8824f6a1c4fd3.png)

### Reason section

![](../make-order-feature-encounter-plan-section.assets/313482927a62ffecf48af4c2574e879a.png)

* <strong>Reason:</strong> Use the autocomplete to signify a diagnosis reason for this order.  Otherwise can use the far right side quick list area to select a diagnosis reason for the order based off the patient's current problem list, other problems, or quick pick of stored library options.

### CC/Comments/Terms/Payment/Instructions section

![](../make-order-feature-encounter-plan-section.assets/165ffd861ad9debddf5062b5be61d7a6.png)

* <strong>CC:</strong> Can signify a provider to be CC'd.  The autocomplete field results any users in the system who are tied to the Referring Physician department in the system's access control.  This info is shown on the stored order document in the CC Physicians section.
* <strong>Comments:</strong> Free type any comments regarding the entire order if applicable. These are shown on the stored order document below the Reason area and are shown on the Order Requests tracking datavis tab.
* <strong>Bill Type:</strong> Can specify a bill type. If system setting <em>Require Bill Type</em> is enabled, this field will appear. There are four options: The default is None (unspecified), Self, Client, and Third Party. The system setting (Orders, Settings, Require Bill Type) will control whether this field is required or not on the order. If this setting is on (value set to 1), and ‘None' is chosen in the bill type dropdown, the user will be asked to choose a different option. This info is shown on the stored order document in the Terms/Payment area.
* <strong>Payer:</strong> Can specify a Payer.  This info is shown on the stored order document in the Terms/Payment area.
* <strong>Instructions:</strong> Free type any patient instructions for the patient regarding this order. These patient  instructions will display on the order requisition document at the top of the Items section.

### Save

Click the SAVE button in the bottom right corner of the Create Requisition screen once all applicable data has been entered and are ready to create the Order Requisition.

## Order Requisition Document

The Order Requisition (upon Save) will store as its own document and will store within the Open Orders encounter section

![](../make-order-feature-encounter-plan-section.assets/8534bc965937388f85e3e4fa5785dfba.png)

## Open Order Requests visibility in encounter

After clicking the REQUEST ORDERS button, this will close that orders screen and then it will list your items you selected under the *Order Requests* category of the encounter.

![](../make-order-feature-encounter-plan-section.assets/35f5f4172e52038064cff7628a041731.png)

### Open Order Requests Options

On any Open Order Requests within the encounter, there are *option* icons available at the far right of each order requisition.  Please refer to the [Encounters Open Order Request Section](encounters-open-order-request-section.md) guide for more detailed information.

![](../make-order-feature-encounter-plan-section.assets/d68afb793e9349eb12e225c05aece5f8.png)

### Linked Documents

Any order requisitions that were saved/generated during the encounter save as its own Order document in the chart and is linked to the encounter.  The linked Order document will also be found within the encounter Linked Documents section.  There are option icons available from that linked document also.    For more information on the Linked Documents encounter section, please refer to [Link Documents To Encounters](../document-management/documents-and-forms/link-documents-to-encounters.md) guide.

![](../make-order-feature-encounter-plan-section.assets/5147eadb8af51ccf59a98b5a207d5042.png)

### Smart Plan

Any order requisitions that were saved/generated during the encounter save as its own Order document in the chart and is linked to the encounter.  The linked Order document will also be found within the encounter Smart Plan section.  There are option icons available from that order requisition document area also.

![](../make-order-feature-encounter-plan-section.assets/1624e9bb0fba569ccbecf547e624471d.png)

### Symptoms/Diagnosis

Any order requisitions that were saved/generated during the encounter save as its own Order document in the chart and is linked to the encounter.  The linked Order document will also be found within the encounter Symptoms/Diagnosis section.  There are option icons available from that order requisition document area also.

![](../make-order-feature-encounter-plan-section.assets/406089ad4b75db468f3fc52ef81cee43.png)

### Encounter View

If there were any order requests made by the provider, those open pending order requests show on the encounter "view". The order requisitions are listed in the *plan* area of the encounter document.

![](../make-order-feature-encounter-plan-section.assets/53437710e6fff2eacb6b8d6f0c917529.png)

### Visit Summary

If the encounter is configured to generate a Patient Clinical Visit Summary upon close & archive, depart instructions encounter section contents will be included in that Patient Clinical Visit Summary document.

![](../make-order-feature-encounter-plan-section.assets/a862336b91eda465238da91d6e10c3e1.png)

The Clinical/Visit Summary is a standard additional view that is generated on encounters upon close & archive. This additional view for the Clinical (Visit) Summary is configured in the Encounter Exams editor.

![](../make-order-feature-encounter-plan-section.assets/49e4805a68b7a8755f51dd0c83b47f01.png)

The Patient Clinical Visit Summary has been updated to make it more uniform, compact, and easier to read as a handout given to the patient (or shared to the portal) on the conclusion of their visit. The updated Visit Summary uses 3 main layouts of: Clinical Summary, Vitals, & Vitals_list to populate the contents and includes the Depart Instructions encounter section.

### Order Requests Chart Tab

The generated pending Order Requisition will also be visible in the Order Requests stand-alone chart tab. The Order Req jelly bean counter also displays the number of pending order requests on the chart and can click on that to access the same Order Requests stand-alone chart tab.

For more information on the Order Requests chart tab, please refer to [Order Requests Grid](../order-and-result-management/order-requests-grid.md) guide.

![](../make-order-feature-encounter-plan-section.assets/d236217af0221641d22e157f1baf1d68.png)

## Print/Fax/Send Order Requisition

The order requisition itself (the order document) will be pending to batch/print/fax in the encounters "view" to print and hand to the patient or fax out to a facility. There are several other places in {{% system-name %}} that you can print/fax/batch the order request document. But, in the "view" of the encounter, look for the *Encounter Options* area at the very bottom of the screen.

![](../make-order-feature-encounter-plan-section.assets/1ac56ae00ba7b593e7007ca6187c227b.png)

You can batch and print all orders including any prescriptions, drug guides, etc created from the encounter view. You can also see the last time it was printed or faxed so you know if someone already rendered it.

You can also individually batch or individually print/fax by clicking the batch link next to each order request that is pending in the queue to print/fax.

{{% tip %}}
If the user's preference for (‘Orders', ‘Encounter Orders', ‘Filter Pick List By Insurance') is set to ‘YES', the order pick list link in the plan section will first show the insurance choice window. The user will then be shown only picklists which have at least one order for the chosen insurance (or at least one order for the default insurance, if no insurance has been chosen). When no insurance is chosen for an order picklist in encounter orders (for instance, those chosen via the Labs or Imaging links in the Plan section) only those order items that do not have an insurance plan attached to them are displayed. This preference is mainly used by occupational health clients.
{{% /tip %}}

## Managing Order Requisitions to Completion

Please visit guide [Order Requests Grid](../order-and-result-management/order-requests-grid.md) for more information on how to manage Order Requisitions.

## Order Requisitions Reporting

The reports sidemenu module offers some reports based on Order Requests.

![](../make-order-feature-encounter-plan-section.assets/fa5b857ed624bb94bd2b4cc74edcb082.png)

* <strong>Order Requests - Completed</strong>: Searchable report that lists all order requests/requisitions and details that have been marked as a category of ‘Completed'. This report also offers a performable Options column for each listed order request/requisition
* <strong>Order Requests - Count by Location</strong>: Searchable report that lists all created order requests/requisitions and document details by ordering location for a specific date range entered.
* <strong>Order Requests - Count by Order Item</strong>: Searchable report that lists all created order requests/requisitions by Order Picklist (set name). Details include the number of times an individual order item (in that specific Order Picklist/set name) has been ordered for a specific date range entered.
* <strong>Order Requests - Count by Provider</strong>: Searchable report that lists a total count of order request/requisition documents grouped by ordering provider for a specific date range entered.
* <strong>Order Requests - Pending</strong>: Searchable report that lists all Pending order requests/requisitions and details. Pending orders are not in completed status. This report also offers a performable Options column for each listed Pending order request/requisition.
* <strong>Order Requests - Standing</strong>: Searchable report that lists all Standing order requests/requisitions and details. Standing orders have entries in the Standing Order Frequency field of the order request/requisition. This report also offers a performable Options column for each listed Standing order request/requisition.
* <strong>Orders - Usage:</strong> Searchable report that consists of 3 buckets displaying order requests/requisitions according to order status. This report also offers a performable Options column for each listed order request/requisition.
