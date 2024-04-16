---
id: '15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY'
title: 'Observation Flowsheets'
date: '2024-03-21T14:24:39.005Z'
version: 442
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://developer.mozilla.org/en-US/docs/Glossary/Truthy'
  - 'https://developer.mozilla.org/en-US/docs/Glossary/Falsy'
source: 'https://drive.google.com/open?id=15JYECf24zEJLUoOZ9IeFZmQI2nc5yl8_dwpKAKGbIyY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Observation flowsheets are used throughout {{% system-name %}} . They are methods of entering in results and values to stored observations in a quick flowsheet manner. This could be used for specific lab panels that have a lot of individual lab test results that make up that one panel or even patient questionnaires as a way to get the data in quickly in a flowsheet type method. Observation flowsheets are used in the observation chart tab, flowsheets are used in encounters and applied in dynamic encounters from the tests/procedures section, flowsheets are used with *complete with results* or *complete with encounter* functionality and various other {{% system-name %}} modules.

Observation Flowsheets can be accessed via the patient's chart tab named *Observations* or via the Control sidemenu tab and by getting into the *Observation Codes* manager tab. Observation Flowsheets require security permission to access. Please see additional help documentation titled *Observations Tab.pdf*

![](../observation-flowsheets.assets/97c10fb784a3f7accf9b75b657a36d58.png)

Once in the Observation Codes manager tab (via the sidemenu Control tab), you will see a hyperlink to *Display Flowsheets*. Click that to access observation flowsheets for your {{% system-name %}} system.

![](../observation-flowsheets.assets/301a6abf0fed789f5d4d05a1ca147f67.png)

The screen will display the current existing active flowsheets and have the # count displayed. You can also display inactive built observation flowsheets by clicking the *show inactive* hyperlink. Observation Flowsheets cannot be deleted. They are only marked as inactive if not being utilized anymore.

![](../observation-flowsheets.assets/9bbcb1bee0d51395f64e606e52721d37.png)

Along with the active, existing named flowsheets displaying by default, you can hover your mouse over the *observation codes* column of a built flowsheet to see the components of that flowsheet quickly.

![](../observation-flowsheets.assets/f71a77c987a5cde97adb0d630c0f833d.png)

## Add/Build New Observation Flowsheets

To add or build a new observation flowsheet to your system, simply click on the Add Flowsheet hyperlink.

![](../observation-flowsheets.assets/c5dfed788eaa700769345173974c4d58.png)

The *New Flowsheet* screen will open.

* <strong>Flowsheet Name:</strong> Type in the name of the new flowsheet you want to add. If this flowsheet should render on an encounter as a test/procedure item, make sure this is named exactly to match the order item.
    * You can click <em>Show Entry Details</em> button if you wish to display the input types, show date/comments/alt. units columns. See additional help further down in this help document.

![](../observation-flowsheets.assets/9ed3ea92ab8521171c5c38c2c2f91aa8.png)

* <strong>Active:</strong> Flowsheets cannot be deleted, but can inactivate them from future use.
* <strong>Observation Search:</strong> This is where you find and select each observation name (using the auto-complete) that will be a part of this flowsheet. Once selected the observation will populate in the <em>Observations Added</em> section on the screen. If the observation name does not show up as an auto-complete choice for you, please contact your MIE Implementer or administrator for the observation to be added to the Obs Codes. You <strong>cannot</strong> free text in this field. The observation has to be a stored observation in the main library of the observation codes tab.
* <strong>Observation Search by Name:</strong> Here you can add the observations to the flowsheet using the Observation Search field, which is an auto-complete. Or you can check the boxes beside the observations listed in the scrollable area below that. It will not allow free-text. You must select something from the list or auto-complete. Contact your administrator or MIE Implementer for any observation names not entered into your system. As soon as you select something from the auto-complete or check-mark a box, it adds it down as a summary list in the <em>Observations Added</em> section below.
* <strong>Observation Search by LOINC code:</strong> Searching will be done by observation name by default. To search by LOINC code, begin your search with a question mark <strong>Example:</strong> ‘?123' It will give you auto-complete choices that match and will display the LOINC code, units, and range after the name of the observation. Each is shown in separate brackets.

![](../observation-flowsheets.assets/d5df8c9121e20aa904518a8b6856657c.png)

* As soon as you select something from the auto-complete or check-mark a box, it adds it down as a summary list view.

![](../observation-flowsheets.assets/ad89c313a99adfe2981a792353031443.png)

* <strong>Name:</strong> This is the observation name you selected that is coded in the Observation Codes manager tab for your system.
* <strong>Description:</strong> You can edit the description which is what the users will see when they utilize a flowsheet and key in results. Editing the description field does not alter the coded observation in the system, it's simply renaming it to be something your users will identify with. The number of text characters that can be used is unlimited.

![](../observation-flowsheets.assets/f3616a483f7dae742327ce95d0a0720f.png)

### Edit Observation Items

* Simply click the edit (pencil) icon on the specific observation item within the flowsheet to edit the description. The edit fields for <em>section, conditional and calculation</em> are mainly used by MIE to program specific custom criteria. Click the <em>save</em> button when done editing the description. The ‘description' is what end users will see in the field to key data in when working in an encounter, so use terminology that is recognized to them & your practice.

![](../observation-flowsheets.assets/9ed1b666c0659eb3c09b9490fc5f93c9.png)

#### Section

Items that share the same section label will be grouped together.

#### Conditional

Javascript that determines whether or not the item should be shown.

* true  (or [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)) - If the script returns "true" the item will be stored.
* false (or [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)) - The item will not be stored and in fact wiped out if it had been answered but then changed.
* hidden - If the script returns the string "hidden" the item will not be shown but will be calculated and stored.  If the script is just the word hidden, you don't need the quotes.

####   
Calculation

JavaScript that determines the value of the item/observation. Items that should be shown to the user would be set to conditional:true.  If items should not be shown, but used and stored should be set to conditional: "hidden"

* <strong>Input Type:</strong> Each observation has an input type. This is the method of how the "data" can be keyed in (for that specific observation item) when this flowsheet is used/applied in a dynamic encounter.

![](../observation-flowsheets.assets/e938f3e5634cafc5e59ad80a0aaffd85.png)

![](../observation-flowsheets.assets/e2cd5ae9333af3a8e81b78645401ae67.png)

* <strong>Text:</strong> This input type allows a user to key in any free text value for the specific observation. The .macro functionality in {{% system-name %}} will work within observation text fields.
* <strong>Text (large):</strong> This input type allows a larger free text entry point in the observation chart tab entry method only. It does not affect size of the text field in flowsheets displayed in dynamic encounters for entry.
* <strong>AutoComplete:</strong> This input type allows a free text learning auto-complete. This displays auto-complete list of choices for the specific observation as value(s) but the user can still free text a value. Auto-complete choices are learned by frequency of use and can be managed in the AC Editor of the control tab.
* <strong>AutoComplete (large):</strong> This behaves the same way as input type "AutoComplete" above it, but allows a longer (in width) auto-complete field which is only seen in the Observation chart tab for entry. It does not affect size of the field in flowsheets displayed in dynamic encounters for entry.
* <strong>AutoComplete (Discrete list):</strong> This input type allows a user to only select from a specific discrete list of values from an auto-complete method of entry for the observation. Clicking the ↓ down arrow key on the keyboard in this field will display the choices if they are not known. Superusers or your MIE Implementer can program the discrete values in the observation editor for the specific observation. The auto-complete choices shown to an end user are the specific discrete choices programmed in the specific observation's discrete value section. It limits the user to only key in available choices from the auto-complete list.

![](../observation-flowsheets.assets/50c20b8594dfebcb6f821f62afe93e62.png)

![](../observation-flowsheets.assets/fb65ccb0126b500f2504cf2c261c4820.png)

* <strong>Measurement:</strong> This input type allows a user to key in a value for the observation but will also automatically convert a possible known keyed in value of a different unit to the specific observations set unit. In this test example, we have the PT observation set to the unit of grams (g) as the value units.

![](../observation-flowsheets.assets/4a717b60d1e5559cc4a4d26842684641.png)

* Then we key in the value for this patient's PT result as 12 lb (pounds) instead of grams

![](../observation-flowsheets.assets/98e384fb40ca0e2c8a64897bb7043496.png)

* Since there is a known conversion between pounds to grams, the system automatically converts the 12 lbs into grams after the entry since this observation within the flowsheet is set to measurement. In other instances of some measurement units that are set on the observation, it may round a long decimal value to the nearest hundreth, etc.

![](../observation-flowsheets.assets/4b786ec9c27f4d73d1b49ae01628baa9.png)

* <strong>Date:</strong> This input type allows a user to only key in a date as the value for the observation.

![](../observation-flowsheets.assets/b5d7f861e8794a6544bb231da0a5b000.png)

* <strong>Datetime:</strong> This input type allows a user to only key in a date along with a time as the value for the observation.

![](../observation-flowsheets.assets/4229929fccba1afd340950859c185b64.png)

* <strong>Yes/No Answer List:</strong> This input type allows a user to only select Yes or No (radio button) as the value for the observation.

![](../observation-flowsheets.assets/f39022d51cd58003d4fa6a8c7152dc32.png)

* <strong>Structured Answer List:</strong> This input type allows a user to only select a radio button value for the observation. The radio button value choices pull from the observation's discrete values programmed on the observation itself in the Observation Code module. This is similar to the "autocomplete (list)" programming in previous page, but instead shows as radio buttons instead of an auto-complete.

![](../observation-flowsheets.assets/4823def061cc01838f045219bdfae61c.png)

* <strong>Stage Previous Value:</strong> Each observation can have a Stage Previous Value set to it if needed.

![](../observation-flowsheets.assets/5899e679f327fae58a04919d28cd0f31.png)

* The choices are No, Add to Macros or Prefill Input and are defined as:
    * <strong>Prefill Input:</strong> This option default the input with the last, most recent value (that a patient's chart has for that matching observation) for that line item observation.

![](../observation-flowsheets.assets/9b24ee3f39b41e647f54614df701445a.png)

* <strong>Add to Macros:</strong> This option is only available on text input types. This will add the patient's previously recorded value (answer) for this observation into the Macro section of the flowsheet. The user can see the patient's last, most recent value (answer) stored in their chart (for that specific observation) when getting ready to enter in a new result using the flowsheet. User could click < on the previous value to insert that same value (answer) into today's result field if the result (value/answer) were the same.

![](../observation-flowsheets.assets/04c71ae6ab1dea0b7c2740a6c5d0dcf9.png)

* <strong>No:</strong> no previous observation values from the patient's chart for that line item observation will be displayed to be able to pull forward into the flowsheet being used.
* <strong>Comments:</strong> If check-marked it displays a "comments" text box on the specific observation.

![](../observation-flowsheets.assets/8ae50535fe2d8e13d88754da53a27e04.png)

* In the below example, INR observation (in the given flowsheet) is check-marked to "Comments" whereas PT observation in the given flowsheet is not. You can see the comments field that displays for users to enter in.

![](../observation-flowsheets.assets/b283976c9b916fac336f8575c6ccfdb3.png)

* <strong>Section:</strong> This would be utilized to group observations of a flowsheet into section groupings. Contact your MIE Implementer if you need section groupings programmed in a compiled flowsheet.
* <strong>Conditional:</strong> This would be utilized for conditionally displaying. For example, if you had a flowsheet set up for a questionnaire and those questions shouldn't show on a flowsheet if the patient is a male. Contact your MIE Implementer if you need conditionals programmed to any observations that compile a flowsheet.
* <strong>Calculation:</strong> This would be utilized for calculating results from other criteria. For example, you have observations in a flowsheet that a user may key in a rating value and then you want a ‘total' at the end where the system calculates and gives a total of other combined observations. Then this ‘total' observation is to be programmed as its own unique observation name in the flowsheet, but the system is calculating and placing the result as its observation value. Example of a calculation looking at height, weight and a formulation to come up with automated calculation of BMI in a flowsheet:

![](../observation-flowsheets.assets/cb30629cfd3aef33a3be2f54d7967bc8.png)

* Programming conditionals, sections and/or calculations is done by MIE using special coding language through the edit (pencil) icon in the Actions column on the specific observation item in the flowsheet.

![](../observation-flowsheets.assets/279f102c475e514efd0d0e0523ffe97d.png)

Continue to use the *observation search* field to apply another observation to the flowsheet. You can use the move up/move down arrow at the far right (Actions column) to drag and drop the flowsheet observation items in the order of how a user would want to see these items in and key results in for a flowsheet. The trash can icon acts as a delete and will remove that observation name from the flowsheet. It will not ask you for a confirmation, so once you click the trash can icon, it will be removed immediately. It will only be permanently deleted if you click the *submit* button to save your work. You can click ‘cancel' button so it doesn't save any edits or deletions you may have done.

![](../observation-flowsheets.assets/38c386a23df0e88cad1b3dc592384fc3.png)

### Items - Flow – All Flowsheets

* <strong>Add Line Break/Header:</strong> Adding a line break will break up the flowsheet to make the items after a line break to be on a separate line for data entry to the end user. You can program a line break anywhere in the flowsheet.

![](../observation-flowsheets.assets/139fa3e2f44e5e600e813da1b7e30fda.png)

You can also "title" the line break and it will show that break title/header to the end user when in the flowsheet. Simply click the edit (pencil) icon in the *actions column* on the line break/header item in the flowsheet. A pop-up will appear where you can type in a description that will be the "header" shown to end users for that portion. Line Breaks/headers provide a ‘header' or label type of row. You can also leave the Line Break description field blank to just have it add a line break without a title.

![](../observation-flowsheets.assets/f7927f506320b6967fe84da21b3a4fe9.png)

After applying a line break/header, you can click ‘edit' on it and set a section or conditional to the line break/header.

### Items - Flow – Questionnaires Only

![](../observation-flowsheets.assets/0d4bdb7e0e7f58d082038a9e62f96ca2.png)

* <strong>Questionnaires Only:</strong>
    * <strong>Add Page Break:</strong> Adding a page break to questionnaire flowsheets will indicate to have the flowsheet continue from that point on, onto a new page on the portal.
    * <strong>Add Section Break:</strong> Adding a section break to questionnaire flowsheets will break up the section to be its own with a title/label on the portal.
    * <strong>Add Group Break:</strong> Adding a group break to questionnaire flowsheets will break up into a group with its own title/label and other section breaks can be utilized within a group on the portal and flowsheet within {{% system-name %}} .
    * <strong>Add Layout:</strong> MIE can program a specific section layout to appear within the questionnaire flowsheet that will be utilized (ex: Medications layout) or this can be used to program the indication that the questionnaire should be in 2 columns.

![](../observation-flowsheets.assets/5821726e7ff021f831e7f1d03d4f765b.png)

Click SUBMIT to submit your new flowsheet into the system, or move the order of observations around by using the UP/DOWN buttons or delete if you selected an observation in error.

{{% note %}}
Nothing is saved until you click the SUBMIT button at the bottom. Click SUBMIT to save!
{{% /note %}}

## Copy an Existing Flowsheet

You can copy an existing flowsheet and add/delete/edit to it to make another unique flowsheet but without starting from scratch. You can get to the copy functionality from Control sidemenu tab → Observation Codes tab → Display Flowsheets hyperlink.

![](../observation-flowsheets.assets/3573df0bf7cf277e2ca7849d0ff8bb95.png)

From here you search and select the specific flowsheet (active or inactive) to copy by clicking the *copy* link in the options column at the far right.

![](../observation-flowsheets.assets/a46305c366c7a2e43a951889b30801b8.png)

At the top it will tell you which flowsheet you are copying. Then you are required to put in a unique flowsheet name for this new flowsheet you are building from a copy. You type this in the **Flowsheet Name** field.

![](../observation-flowsheets.assets/01f82ede08f9ba0e1d4e3d10004f1844.png)

Make sure to name the new flowsheet with a unique name. The copy feature is a quick feature to copy an existing flowsheet, but to name the new flowsheet something unique and make any other edits/tweaks to that flowsheet, along with the observations to make up that new flowsheet, to make it unique but have a lot of the components that an existing flowsheet may already have.

Make any changes to add different observations or remove or ordering the contents of this new flowsheet that is built from a copy. Make sure to name the new flowsheet something unique and click the submit button to save and create this new flowsheet based on a copy of an existing flowsheet.

## Edit an Existing Flowsheet

You can edit an existing flowsheet from a patient's observations chart tab by clicking *manage flowsheets* or by selecting a specific flowsheet while in a patient's observations tab and clicking *edit flowsheet*. Editing a flowsheet will edit that flowsheet for entire system.

![](../observation-flowsheets.assets/6be563fca9a3034444791548e82f70ea.png)

You can also edit flowsheets by going to Control tab → Observation Codes tab → Display Flowsheets hyperlink

![](../observation-flowsheets.assets/79b87355afc4d39794090d082253b622.png)

In whichever method you go to edit a flowsheet, when you click "edit", the *Edit Flowsheet* screen will open.

![](../observation-flowsheets.assets/82b4cada5c70eb069d721579835ed125.png)

Here you can add new observations or edit existing or change ordering to the flowsheet. To add new observations to the flowsheet type the name of the observation to add in the Observation Search field, this is an auto-complete.

The included observation names listed in the flowsheet are hyperlinks which will open up a new window taking you to that specific observation's details view. Simply click on the observation name on the left and it will take you to the specific observation details view.

![](../observation-flowsheets.assets/6df5ed4ab3dce31bf117c4e0c2bbc5e5.png)

## Inactivate a Flowsheet

If you need to **delete** an entire flowsheet, this cannot be done by any user. However you can ‘inactivate' it and can hide inactive flowsheets from the system and won't be shown to users.

To inactivate a flowsheet from use by the entire system, select the Flowsheet from the drop-down and then click the *edit flowsheet* button next to it. Note: You can also manage flowsheets from Control sidemenu tab → Observation Codes tab → and clicking Display Flowsheets

![](../observation-flowsheets.assets/9e0e75b5b8a3fc7159ed34b7eea68932.png)

Simply uncheck-mark the *Active* checkbox. This will then mark the flowsheet as ‘inactive' then scroll down and click the SUBMIT button.

![](../observation-flowsheets.assets/db09dd73989b0c9518c2a34c89861fc9.png)

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
