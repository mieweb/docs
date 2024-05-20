---
id: '1hjjHvWq5vUEm0hyKXwjoSIMQetroCJIq1WeesFBT-CY'
title: 'Flowsheets Editor'
date: '2024-05-20T13:50:36.587Z'
version: 425
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'observations-tab.md'
  - 'observation-codes-editor.md'
  - 'observation-code-merging.md'
source: 'https://drive.google.com/open?id=1hjjHvWq5vUEm0hyKXwjoSIMQetroCJIq1WeesFBT-CY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The following information provides details on how to add and configure flowsheets and questionnaires in the  {{% system-name %}} system. For information on accessing and utilizing flowsheets from *within* a patient chart, see our [Observations Tab](observations-tab.md) help documentation. Additionally, to fully utilize flowsheets, the requisite observations will need to be active in the system. For a recap of how to add and maintain observation codes, see the [Observation Codes Editor](observation-codes-editor.md) and [Observation Code Merging](observation-code-merging.md) documentation.

## Overview

1. Navigate to the <strong>Control Panel</strong> using the link on the side menu.
2. Locate and select the <strong>Flowsheets</strong> tab.
3. After the page loads, all active flowsheets will appear in list form. Click the <strong>Next</strong> link or <strong>Show All</strong> link, found at the bottom of the page, to see additional flowsheets.
4. To see inactive flowsheets, click the <strong>Show Inactive</strong> link, found near the top of the page, just above the Name column. Click again to toggle.
5. Click a column header to sort the list by ascending/descending order.
6. Hover the cursor over the value in the <strong>Items</strong> column to see a list of all observations associated with the respective flowsheet.
7. When making flowsheets users may copy an existing flowsheet by using the <strong>Copy</strong> link, to save time. Otherwise, they can simply edit a flowsheet by clicking the <strong>Edit</strong> link.

## Add a New Flowsheet

1. Verify all observations needed for the new flowsheet are already created and available within the {{% system-name %}} system.

![](../flowsheets-editor.assets/26a63b831e54d04606592569ff47fb53.png)

{{% note %}}
Any custom discrete values will not be interoperable when communicating with other systems.
{{% /note %}}

2. To begin, click the <em>Add Flowsheet</em> hyperlink in the upper-right corner of the page.
3. Begin filling in the fields and building the flowsheet, accordingly:

* <strong>Flowsheet Name</strong>: This field is used to name the new Flowsheet. If the Flowsheet will be used within encounters, this field should match the order item name, exactly.
* <strong>Active</strong>: Select or deselect to set the Flowsheet as active or inactive, respectively. Flowsheets cannot be deleted.
* <strong>Observation</strong>: This autocomplete field is used to populate any necessary observations being captured for the Flowsheet in context. Users cannot text freely within this field. The observation must be a stored observation within the Observation Codes library.
    * <strong>Search By Name</strong>: Begin typing any observation name to locate the preferred observation to be included in the Flowsheet. Once selected, the observation will automatically populate in the list view at the bottom of the page.
    * <strong>Search By LOINC</strong>: To search by LOINC code, rather than name, begin the search with a question mark . For example, entering <strong>?2339-0</strong> will populate the observation associated with that LOINC code, to be added to the Flowsheet.
* <strong>Order</strong>: In addition to adding observations for data capture, users may build Flowsheets with orders, as well. This autocomplete field allows users to populate any necessary orders being recorded within a Flowsheet.
* <strong>All Flowsheets</strong>: All Flowsheets can have the included items (i.e., observations and orders) separated, grouped, and required, using the following buttons, as appropriate.
    * <strong>Add Line Break/Header</strong>: This button inserts a break, which can be used as a header or simply a line break. As a line break, end users will see items following the line break on a separate line when inputting data. To use the line break as a header, simply click the <strong>Edit</strong> (pencil) icon in the <em>Actions</em> column, and update the <strong>Description</strong> field. The text will display as a title for the line break, thus formatting it as a header in the Flowsheet.
    * <strong>Mark All Required</strong>: This button allows users to set all included observations as required. After all items have been added to the Flowsheet, clicking this button will display a verification: <em>All observations with empty required fields will be set to required</em>. Click <strong>Yes</strong> or <strong>No</strong>. Clicking Yes will set all empty required fields to <em>true</em>, making data entry required for those entry items.

* <strong>Questionnaires Only</strong>: Flowsheets are often used as questionnaires. These questionnaires are available from the portal and may be configured as needed. The following buttons are only compatible with Flowsheets being used as questionnaires. To preview the style and format of the questionnaire, simply click the Questionnaires Only link at any time.
    * <strong>Add Page Break</strong>: This button will add a page break to the questionnaire, causing the content following the placement of the page break to continue on to a new page.
    * <strong>Add Section Break</strong>: Adding a section break will simply provide a segmented section for the contained content. These can be edited and titled, as needed.
    * <strong>Add Group Break</strong>: This button will break content into groups, which can be labeled, as needed. Section breaks can be used within group breaks.
    * <strong>Add Layout</strong>: Adding a layout can be done by MIE, whenever a layout is necessary for the questionnaire (e.g., Medications layout). This button can also be used when a 2-column layout is needed for a questionnaire.
4. Once all observations, orders, and components have been added, users can begin rearranging and configuring the observations, sections, and details, as needed. To do this, users must use the icons available under the <em>Actions</em> column. The available options are <strong>Edit</strong> (pencil), <strong>Move</strong> (vertical arrows), and <strong>Remove</strong> (trash). Additionally, the columns and options available within the list view are as follows:

* <strong>Name</strong>: This field displays the observation name selected, which is coded in the Observation Codes Manager. This will appear as a hyperlink and can be clicked to see a view of the observation details.
* <strong>Description</strong>: The Description field can be edited by clicking the Edit (pencil) icon in the <em>Actions</em> column. This field, when provided, will display to end users when using the Flowsheet. There is no limit to the number of characters allowed. Providing a description is not necessary and does not alter the coded observation or name. It is only used for simplified identification, whenever necessary.

{{% note %}}
Descriptions are not interoperable fields and will not carry over to devices or systems set up for interoperability.
{{% /note %}}

* <strong>Input Type</strong>: Every observation requires an input type. This drives how each datum, or observation value, will be captured while using the Flowsheet.
    * <strong>Text</strong>: This input allows users to key in any free text for the observation in context. The .macro functionality will work within text input types.
    * <strong>Text (large)</strong>: This input allows users to key in any free text for the observation in context using a larger text entry field. This does not affect the size of the display output.
    * <strong>AutoComplete</strong>: A free-text learning autocomplete that is designed as an autocomplete entry field with the ability to free text or use the available choices. Autocomplete choices are learned by frequency of free-text entries and can be managed using the in the Control Panel.
    * <strong>AutoComplete (large)</strong>: An autocomplete entry field that behaves the same way as the standard AutoComplete input type. However, AutoComplete (large) displays a larger (wider) entry field when inputting data. This does not affect the size of the display output.
    * <strong>AutoComplete (Discrete List)</strong>: This is an autocomplete entry field that pulls only the discrete values that were programmed into the observation code <em>Custom Discrete Values</em> section. This will limit users to selecting only those choices provided for the observation in context. Clicking the down arrow on the keyboard will display the available choices, if the user is unsure or the options are unknown.
    * <strong>Measurement</strong>: This input is designed to track measurements and will convert to specific preset units, whenever possible. For instance, when using a Measurement input type, an observation that is preset to a specific unit will be converted to the default unit when entering a value in a Flowsheet with a differing unit from the observation preset, so long as a conversion is available (e.g., lbs to g, cm to mm, etc.). Measurements will also be rounded to the nearest hundredth decimal place.
    * <strong>Date</strong>: A Date field will only allow users to key in a date as the value for the observation.
    * <strong>Datetime</strong>: A Datetime field will only allow users to key in date and time values for the observation.
    * <strong>Yes/No Answer List</strong>: A Yes/No input will allow users to select either a Yes or No radio button as the value for the observation.
    * <strong>Vertical Structured Answer List</strong>: For observations specifying custom discrete values, this input type will display the options as vertical radio buttons.
    * <strong>Horizontal Structured Answer List</strong>: For observations specifying custom discrete values, this input type will display the options as horizontal radio buttons.
    * <strong>Drop Down Structured Answer List</strong>: For observations specifying custom discrete values, this input type will display the options in a dropdown selector.
* <strong>Stage Prev Value</strong>: Observations can be set to have a previous value automatically staged, depending on the input type. The available options include:
    * <strong>No</strong>: No previous observation value will be staged or pulled forward into the Flowsheet for the observation in context.
    * <strong>Add to Macros</strong>: For any text input types, previous values can be staged using the system macro functionality. Previously recorded answers (values) for the observation will be shown as a macro, capable of being added to the input field by way of the angle bracket ( < ), if the value is the same.
    * <strong>Prefill Input</strong>: This option will automatically prefill the entry field with the most recent value used for the respective observation, for that specific chart.
    * <strong>Prefill Input from Context:</strong> This option will automatically prefill the entry field with the most recent value used for the respective observation, for that specific chart, from the encounter linked to the same case/incident that the current encounter is linked to.
* <strong>Comments</strong>: When checkmarked, users will have a Comments field for providing additional information specific to the observation.
* <strong>Section</strong>: With the proper programming, this field will trigger section groupings for organizing the included observations into a specified arrangement.
* <strong>Required</strong>: Observations can be optional, recommended, or required, as needed. When configuring a flowsheet or questionnaire, simply leave this field blank for any optional entries. Recommended entries, or fields that are encouraged but not required, can be configured by inputting the numeral one (1) in this field. Otherwise, required fields can be checked against using a properly formatted formula. More about this to follow.
* <strong>Conditional</strong>: This field is used for conditionally displaying specific observations. For example, a questionnaire with questions only relevant to a male (conditional) can be programmed to only display when the sex of the respondent is male. More information on this can be found below.
* <strong>Calculation</strong>: Calculations can be compiled based on provided observation values and established criteria. Using this field, a calculation will be triggered, whenever a specific observation is programmed with the appropriate calculation criteria. For example, automating a BMI calculation based on height and weight observations within a flowsheet would require programming a calculation with the BMI observation. Additional details can be found below.
5. Once finished, click the <strong>Submit</strong> button to save all of the information.

## Configuring Flowsheets

The following options allow for greater configuration and require a more advanced understanding of flowsheet programmability. These options can only be edited using the Edit (pencil) link in the *Actions* column of the Flowsheets editor.

### Section

As explained previously, all flowsheets can have line breaks/headers added, as needed. With a line break, end users will see items following the line break on a separate line when inputting data. To use the line break as a header, simply click the **Edit** (pencil) icon in the *Actions* column, and update the **Description** field. The text will display as a title for the line break, thus formatting it as a header in the flowsheet.

{{% note %}}
The line break/header will always display or print, even when no observation data (values) have been entered.
{{% /note %}}

To avoid the default behavior of automatically displaying line breaks/headers, users may perform the following:

1. Click the Edit icon (pencil) to edit the line break/header, and update the <strong>Section</strong> field with a category, label, term, or generic freetext (e.g., lungs, bsa, etc.).
2. Once the line break/header has been updated with a section name, edit each line item or observation belonging to that section with the same section name.

![](../flowsheets-editor.assets/71df30c839339c10d06ab776a1ef5367.png)

3. Click the <strong>Submit</strong> button to save all changes.


Now, any time data has been added to a flowsheet, the headers and/or line breaks configured for sections will not automatically display. The headers/breaks will only display when values have been added.

### Required

The Required field allows users to set certain line items or observations as optional, recommended, or required. By default, all flowsheet and questionnaire entries are optional. However, if certain information is *needed*, flowsheets and questionnaires can be set up with either *soft* requirements or *hard* requirements. When an observation is programmed as a soft requirement, users are recommended and strongly encouraged to provide a value. However, if an observation is programmed as a hard requirement, users are unable to proceed until a value is given.

To establish requirements on an observation, begin by clicking the Edit icon (pencil) to edit the **Required** field, and enter one of the following:

* For no requirement - <strong><em>leave blank</em></strong>'
* For a soft requirement (recommended) - <strong>True</strong> or <strong>1</strong>
* For hard requirements: There are varying hard requirements that can be configured, depending on the client's needs.
    * Require anything - <strong>(observationValueByName(jQuery(this).data('obsname')) ? 1 : -1)</strong>
    * Number only - TBD
    * Date/Time Ranges - TBD

### Conditional

This field is used for conditionally displaying specific observations. For example, a questionnaire with questions/observations only relevant to a male (condition) can be programmed to only display when the sex of the respondent is male. All question types and layouts support conditional logic, and page breaks are the only type of break that do not currently support this feature.

To use conditional logic, the appropriate script must be added to the **Conditional** field of the observation/question. However, the conditional circumstances will drive the type of script that will be needed, so be sure to consider the various options.

#### Based on Previous Answer

A common use for conditional logic is to display or hide a row, depending on a previous value given. In other words, if a question (observation) has a specific answer (value), the line item programmed with the conditional script will display only if the expected answer is matched. The syntax for accomplishing this is as follows:
```


observationDisplay('OBSERVATION NAME','EXPECTED ANSWER')

```

`  
`For example, if a follow-up question (e.g., Is this a new symptom) is needed, due to a patient's reaction (e.g., rhinitis - runny or stuffy nose) to specified allergens (e.g., animals or their bedding), the follow-up question will be configured as an observation in the  {{% system-name %}}  system, and the conditional logic will be added to its Conditional field. This will cause the follow-up question to display only when the respondent answers with *Yes*.
```


observationDisplay('Since your last exam, have you experienced rhinitis, a runny or stuffy nose?','Yes')



```

![](../flowsheets-editor.assets/1af6f941ed2cbb0128b1b2a0a904708d.png)

#### Based on Patient Sex

Anytime an observation or question is intended for men or women, exclusively, simply enter one of the following in the **Conditional** field of the observation:

* Only women: <strong>dashjs_patient.sex == 'F'abnormal</strong>
* Only men: <strong>dashjs_patient.sex == 'M'</strong>

#### Based on Multiple Conditionals

Conditionals can be stacked and used with multiple observations or conditionals, as needed. For instance, an observation can be set to display only if the respondent answers yes to working on a specific floor of a specified building. To perform AND functions, simply use two ampersand symbols (**&&**) between the conditional statements, as follows:`


observationDisplay('Patient works at MMA building','Yes') && observationDisplay('Patient works on level 3','Yes')

`

#### Based on Either/Or

Similar to performing AND functions, conditionals can be programmed to respect OR functions, as well. For instance, a follow-up may be needed if a respondent notes they *either* have had an abnormal musculoskeletal examination OR they have a history of musculoskeletal disorders. To accomplish this, simply use two pipes (**||**) between the conditional statements, as follows:
```


observationDisplay('PE:Musculoskeletal Examination','Abnormal') || observationDisplay('Did the applicant relate a history of musculoskeletal disorder?','Yes')


```

#### Based on Any Value Except

The last type of conditional to consider is one where an observation/line item will appear only when any value EXCEPT the one specified is entered. For example, if a respondent answers with anything other than a zero for their pain assessment, then an additional question will display. This example is achieved with the following syntax:
```


observationValueByName('HPI Pain Assessment') !==0 && typeof(observationValueByName('HPI Pain Assessment')) !=='undefined'


```

### Calculation

Calculations can be compiled based on provided observation values and programmed pre-established criteria. Editing the Calculation field with the appropriate script and criteria will trigger a calculation, whenever values are entered for the observation(s) specified in the script. For example, automating a BMI calculation based on height and weight observations within a flowsheet would require programming a calculation for the BMI whenever values for height and weight are entered. There is no limit to the number of calculations a script can do, and any of the standard mathematical notations can be used (i.e., **+**, **-**, *****, **/**).
```


observationValueByName('Number of Days') + observationValueByName('Number of Drinks')



```

With the script ready, create a Total or Total Score observation, as needed. Edit the observation and add the calculation script and save.
