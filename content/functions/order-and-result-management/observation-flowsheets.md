---
id: '15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY'
title: 'Observation Flowsheets'
date: '2025-06-09T16:17:00.974Z'
version: 612
lastAuthor: 'jwagoner'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/order-and-result-management/flowsheets-editor/'
  - 'https://mie.talentlms.com/shared/start/key:ALOHRKMF'
  - 'https://mie.talentlms.com/shared/start/key:ZSTDNHRK'
source: 'https://drive.google.com/open?id=15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Observation flowsheets are used throughout {{% system-name %}} . They are methods of entering in results and values to stored observations in a quick flowsheet manner. This could be used for specific lab panels that have a lot of individual lab test results that make up that one panel or even patient questionnaires as a way to get the data in quickly in a flowsheet type method. Observation flowsheets are used in the observation chart tab, flowsheets are used in encounters and applied in dynamic encounters from the tests/procedures section, flowsheets are used with *complete with results* or *complete with encounter* functionality and various other {{% system-name %}} modules.

Data collected by means of an Observation Flowsheet can be accessed via the patient's chart tab named *Observations/Flowsheets*. Users with the appropriate permissions, may also link to the Flowsheet editor from the patient chart.

![](../observation-flowsheets.assets/1a4f9e71b266e793b41a7088da9a7001.png)

## Accessing Flowsheets

Managing Observation Flowsheets requires the appropriate security permission in order to add, edit or delete flowsheet configuration.

The Flowsheet Editor may be accessed via the Control Panel->Chart->Flowsheets tab.

![](../observation-flowsheets.assets/62fd91829f40772fe691949f866e730b.png)

Users may also navigate to the Flowsheet Editor from the *Observation Codes* Tab (Control Panel->Observation Codes).

![](../observation-flowsheets.assets/d9c15fcf5a4da6966a4c7da7a78a6231.png)

The Flowsheet tab displays the current existing active flowsheets and have the # count displayed. Users may also display inactive observation flowsheets by clicking the *Show Inactive* hyperlink. Observation Flowsheets cannot be deleted. They are only marked as inactive if not being utilized anymore.

![](../observation-flowsheets.assets/9bbcb1bee0d51395f64e606e52721d37.png)

Along with the active, existing named flowsheets displaying by default, users can hover their mouse over the *observation codes* column of a built flowsheet to see the components (individual observations) of that flowsheet quickly.

![](../observation-flowsheets.assets/f71a77c987a5cde97adb0d630c0f833d.png)

## Add a New Flowsheet

1. Verify all observations needed for the new flowsheet are already created and available within the {{% system-name %}} system.

![](../observation-flowsheets.assets/a8108faf5f21ae178dc78eb98949af76.png)

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
    * <strong>Mark All Recommended:</strong>  This button allows users to set questions as recommended, but not required to be answered by end users. If a flowsheet is submitted where recommended items are not answered, a pop up will be displayed. The message states <em>Some recommended items have been left blank. Do you want to continue?</em> Select <strong>Save Anyway</strong> to continue, select <strong>Cancel</strong> to return to the flowsheet to answer additional questions.

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
5. Beginning with the 202409 software release, a blue cursor bar will display at the bottom of the editor when creating a new flowsheet or when editing an existing flowsheet. The cursor bar can be moved anywhere within the flowsheet to easily insert a new observation/question.  Click once to move the blue cursor bar, scroll to the desired location to add an observation, then click a second time to drop the blue cursor bar into the desired location. Add the new observation/question using the Observation autocomplete at the top of the flowsheet editor.
6. Once finished, click the <strong>Submit</strong> button to save all of the information.

For detailed instructions on configuring flowsheets, please view the online help titled [Flowsheet Editor](https://docs.enterprisehealth.com/functions/order-and-result-management/flowsheets-editor/).

## Copy Flowsheets

Users may also copy an existing flowsheet and add/delete/edit it to make another unique flowsheet but without starting from scratch. From the Flowsheets tab, click the **Copy** link to copy the existing flowsheet and to create a new one that contains all the data from the source flowsheet.

![](../observation-flowsheets.assets/a46305c366c7a2e43a951889b30801b8.png)

At the top of the screen, the system will tell you which flowsheet you are copying. Then you are required to put in a unique flowsheet name for this new flowsheet you are building from a copy. You type this in the **Flowsheet Name** field.

![](../observation-flowsheets.assets/7159d5297a8a966a2318ba24f9b43c3a.png)

Make sure to name the new flowsheet with a unique name. The copy feature is a quick feature to copy an existing flowsheet, but to name the new flowsheet something unique and make any other edits/tweaks to that flowsheet, along with the observations to make up that new flowsheet, to make it unique but have a lot of the components that an existing flowsheet may already have.

Make any changes to add different observations or remove or ordering the contents of this new flowsheet that is built from a copy. Make sure to name the new flowsheet something unique and click the submit button to save and create this new flowsheet based on a copy of an existing flowsheet.

## Edit an Existing Flowsheet

You can edit an existing flowsheet from the Flowsheet Editor. Editing a flowsheet will edit that flowsheet for the entire system.

![](../observation-flowsheets.assets/79b87355afc4d39794090d082253b622.png)

Upon clicking **Edit**, the *Edit Flowsheet* screen will open.

![](../observation-flowsheets.assets/8608dc928a9a5f7ebc58d9075428612a.png)

Here you can add new observations or edit existing or change ordering to the flowsheet. To add new observations to the flowsheet type the name of the observation to add in the Observation Search field, this is an auto-complete.

The included observation names listed in the flowsheet are hyperlinks which will open up a new window taking you to that specific observation's details view. Simply click on the observation name on the left and it will take you to the specific observation details view.

![](../observation-flowsheets.assets/64f9e9885a45435b6c97657c1a9519f0.png)

## Inactivate a Flowsheet

Users with the appropriate security permissions may Inactivate Flowsheets

Simply uncheck-mark the *Active* checkbox. This will then mark the flowsheet as ‘inactive' then scroll down and click the SUBMIT button.

![](../observation-flowsheets.assets/e3e5de0118988eda97bab47c90a44aee.png)

The ‘inactive' flowsheet(s) will then not be shown in the drop-down selections of Flowsheets to run. However, a user can click the show inactive link to display and show inactive flowsheets and still run them if they wish from the patient's chart tab.

![](../observation-flowsheets.assets/c674306e3e17921d1bae0b9ddc62b047.png)

## Order Items and Flowsheets

Observation flowsheets automatically display in the Observation chart tab while in a patient's chart and/or while in the *complete with results* or *complete with encounter* functionality. However, to have a flowsheet appear/applied to a dynamic encounter, you must have an order item (via the Orders-List Editor tab found in Control) set up with the exact same name as the flowsheet name created. Flowsheets are necessarily lab tests. Your system may have a flowsheet for the Physical Exam, or Review of Systems or Vitals sections.

This is an example of a test/procedure order item applied to the encounter where a user can key in results for the test/procedure using the flowsheet method. The order item name is INR/PT and the flowsheet name is INR/PT.

![](../observation-flowsheets.assets/e2d26a626e1e25053206ab122de35008.png)

A test/procedure order item that renders in the encounter as a flowsheet (meaning it has a matching name of an observation flowsheet set up), can be stored as a specific document type. This gets set in the test/procedures order item in the *document type* field. If nothing is set here, the doc.type of {{% sys-name %}} LAB will be the default that it stores as.

![](../observation-flowsheets.assets/3333fae560a1a27063d0d2949b8ac5f5.png)

The order item (named same as the flowsheet) must have a Layout field set. In the previous pages of this help document, it was shown how to set specific observations to specific input types and looks. Along with that, you can set the flowsheet to appear (as a whole) a specific way when applied & utilized in a dynamic encounter by selecting one of the Obs layout choices. The choices are *Obs Procedure, Obs Series* or *Obs Test.* See explanation and example of each layout type on next page.

![](../observation-flowsheets.assets/5876158022119b1092a82cf55329d188.png)

* <strong>Obs Procedure:</strong> This is used for a series of observations made in a specific order where each will be date/time stamped for the result. Each observation that composes the flowsheet will be its own row. Each observation row will also have its own observed date/time in the ‘completed' column. This is the date/time to denote a date/time for when that observation value was resulted/observed. Using the <em>Obs Procedure</em> layout on a flowsheet allows different date/time stamps on observed values. Each observation row has its own observed date/time that can be set. Use cases: surgical procedure documentation; anesthesia record, etc. The "All Normals" checkbox in flowsheets only appears if an observation(s) contains a target set on the specific observation

![](../observation-flowsheets.assets/1d8d11d5dd6c547be3d5e755a7c7424f.png)

* <strong>Obs Series:</strong> This is used for keying in results in a rapid fire method and has only one date/time stamp that gets applied to all resulted observations in the flowsheet. The date/time stamp noted is the observed date/time that will be applied to all the multiple observations in that flowsheet. The observations value fields are also listed in a quick sequence (left to right) for a user to quickly key in values. Other details (such as range, flag, units, comments, etc) are stripped off to allow a user to quickly key in results only. Upon ‘save' of the flowsheet section, the list view would show the details such as range, flag, units, etc). Use cases: notes type flowsheet; collecting a series of vitals (multiple BP's), etc.

![](../observation-flowsheets.assets/d3c1112d98f611ea4cb769bcce7f3925.png)

* <strong>Obs Series No Encounter:</strong> This allows users to add data in a flowsheet without limiting to the encounter. Tests/procedures order items that are set up with this flowsheet Obs Series No Encounter layout and matching flowsheet name, it will display the past 5 values on a given flowsheet into an encounter. This will look similar to the vitals section, without all of the graphics on the flowsheets. Also, the previous 5 values (as well as any documented on today's visit) will archive on the encounter view.

![](../observation-flowsheets.assets/fd9d2dea392d62cd4b9a9138847e3edc.png)

It allows users to insert new values as well. Simply click on the section title of the test/procedure flowsheet to expand that section open and you will have the option to add more observation data to the flowsheet along with marking the test/procedure as completed, declined, waived, etc. The values you enter will also all archive on the encounter view.

![](../observation-flowsheets.assets/7012eb63d9b431a28578b9ae6f19d02f.png)

* <strong>Obs Survey:</strong> This type of entry will only show 3 entry columns. It will show the item, the value field and a comments field (if you have <em>comments</em> field checkmarked on the flowsheet item). The date of the result/value will be stored as today's date that you enter in a value.

![](../observation-flowsheets.assets/dcea8c83f5d37366f9e154e3924a1e3e.png)

* <strong>Obs Test:</strong> The date/time set in this type of layout applies the one date/time to <strong>all</strong> observations that make up the flowsheet. Use cases: individual result (ex: CBC); drug test; Physical Exam section; Review of Systems section; Provider Organization Other Data section in Provider Management module; Questionnaires, etc. This is similar to Obs Procedure layout (showing details like range, units, flag, etc), but this Obs Test layout displays only one observed date/time field to be applied to all, instead of a date/time field being on each individual observation row. The "All Normals" checkbox in flowsheets only appears if an observation(s) contains a target set on the specific observation. If an observation is marked as required and a user attempts to skip, the system to pop-up a warning message. The section will not save or allow the user to proceed to the next encounter section until all required items are completed. <em>Note: if using the Obs Test layout for questionnaire(s) flowsheets, your MIE Implementer can put in a layout tag request to hide the range/units column(s) in the backend as those details aren't usually used in questionnaire type entries.</em>

![](../observation-flowsheets.assets/186289ab66345031ba67d9afe2623800.png)

![](../observation-flowsheets.assets/8606ef3b0aff74cdc02769693f203f1e.png)

Result date/time fields can be removed entirely for a specific flowsheet(s) if needed. A flowsheet can have the ability to be displayed without a date visible to the user. If such a flowsheet has that programming, then **all** observations in that type of flowsheet will have the date observed set to when the flowsheet values are submitted (saved). Your MIE Implementer can put in a layout tag request to hide the observed date/time field(s) in the backend.

## Learning Management System

To learn more about Observation Flowsheets, follow the link below to the Learning Management System course:

* [Flowsheets](https://mie.talentlms.com/shared/start/key:ALOHRKMF)
* [Questionnaires Programming](https://mie.talentlms.com/shared/start/key:ZSTDNHRK)
