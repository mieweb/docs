---
id: '1ohx3g_a0w1go9E2uDq5w7nr6-AZ-VrTZhFfiHgfdkwU'
title: 'Observation Codes Editor'
date: '2020-03-13T20:07:29.409Z'
version: 77
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'flowsheets-editor.md'
  - 'https://confluence.mieweb.com/display/DOCS10/Flowsheets+Manager'
source: 'https://drive.google.com/open?id=1ohx3g_a0w1go9E2uDq5w7nr6-AZ-VrTZhFfiHgfdkwU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The Observation Codes Manager is a useful tool for adding, editing, viewing, merging, and deleting observation codes used within the {{% system-name %}} system. Out of the box, {{% system-name %}} is equipped with an extensive list of standard observation codes relevant to varying care settings, and these codes can be updated and defined, as needed.

Additionally, because observation codes are often viewed for trend analysis, or in a graphical format, the Observation Codes Manager is also designed to allow easy access to the Flowsheet Manager for adding, editing, and viewing observation flowsheets. For more information on creating, using, and maintaining observation flowsheets, see the [Flowsheets Editor](flowsheets-editor.md) online help documentation.

## Observation Codes

Observation codes are used for tracking various data within individual charts, and can be used across device and system interfaces, as well as within observation flowsheets and questionnaires. Because of this, it is important that observation codes remain up-to-date and current.

To view the current observation codes available within the {{% system-name %}} system, navigate to the tab of the . Here, a list view of all the available observation codes will populate. Users may click on the column header hyperlinks to sort in ascending/descending order, or all observation codes may be searched against using the available filters at the top of the page.

{{% note %}}
In order to access the Observation Codes Manager, users must have the **Observation Manager** security setting set to *Yes*.
{{% /note %}}

## Adding Observation Codes

If an observation code is not available, or a new observation needs to be added, users with the appropriate security permission may add new ones, as follows:

1. From the Observation Codes Manager, click the link in the upper-right corner of the page.
2. Once the page loads, begin filling in all of the appropriate fields, as needed:
    1. <strong>Observation Name</strong>: This field is reserved for the name of the observation, which will be displayed within the system charts.
    2. <strong>Observation Type</strong>: Use this field to set what type of data the observation represents. Choices include: <em>Decimal</em>, <em>Text</em>, <em>Date/Time</em>, <em>Custom Discrete Values</em>, and <em>Coded Values</em>. (When Coded Values is selected, an additional field will populate, where the Observation Group will need to be specified.)
        1. Decimal: Any numerical data.
        2. Text: Any non-numerical data, not classified under the alternative choices.
        3. Date/Time: Any date/time observations.
        4. Custom Discrete Values: User-defined data, or options.
        5. Coded Values: Any interoperable coded values (e.g., LOINC type, hierarchical codes, unique IDs, etc.)
    3. <strong>LOINC Code</strong> (optional): This field is used for an associated LOINC code, matching the observation in context.
    4. <strong>Template ID</strong> (optional): The Template ID field is an autocomplete
    5. <strong>Display Units per unit system</strong>: Specify the units to be used when displaying results. The system will attempt to convert results into the specified units; however, if the system is unable to convert the result, the data will display exactly as it was entered.
    6. <strong>Default Add Unit</strong>: This field is intended for specifying the unit to be used when adding new observations of this type, namely in instances where no unit input is displayed. The specified unit also applies to the Observation Range, as well.
    7. <strong>Observation Range</strong>: If the Target Type dropdown is set to <em>Range</em> or <em>Abnormal Range</em>, this field can be used to specify the appropriate range (e.g., 25-50, <17, >=100, etc.), and the Target input field will be ignored. Remember, the units specified in the Default Add Unit field will be considered for the specified Observation Range.
    8. <strong>Target</strong>: If the Target Type dropdown is set to <em>Target</em>, users may specify the desired target in the input field (e.g., neg, pos, positive, negative, immune, etc.).
    9. <strong>Conditional</strong>: This field is used for conditionally displaying specific observations. To use conditional logic, the appropriate script must be added to the Conditional field of the observation/question.
    10. <strong>Calculation</strong>: Calculations can be compiled based on provided observation values and programmed pre-established criteria. Editing the Calculation field with the appropriate script and criteria will trigger a calculation, whenever values are entered for the observation(s) specified in the script.
3. Once all of the appropriate fields have been updated, click the <strong>Save</strong> button to submit all new information.

## Viewing/Editing Observation Codes

As noted, when users navigate to the , the page loads a summary list view of all available observation codes. If additional details are needed for a specific observation, users may click the **View** link from the *Options* column of the respective observation code. Clicking the **Obs Code** or **Obs Name** values will open the Observation Code View, as well.

![](../observation-codes-editor.assets/1c06defe5766a2c403df92b4881ce734.png)

Viewing an observation code will provide additional details, such as HL7 Translations, Flowsheets containing the observation, specified ranges, custom discrete values, and charts matching a specified target.

![](../observation-codes-editor.assets/08a9272c43a1de33bbdb23070043e9e4.png)

The number of times the respective observation code has been used within charts throughout the system is also available, listed as the **Observation Count**. This is particularly useful when merging or maintaining observation codes.

![](../observation-codes-editor.assets/00bb67ae17ea3ef22ad9ec6fbc3698ef.png)

The Observation Count value is a hyperlink. When clicked, a detailed list of all associated charts with the respective observation code will display, along with the result, observation data/time, etc.

![](../observation-codes-editor.assets/08efea25cd79bb1b316a645d57d2dc15.png)

### Edit

To edit an existing observation code, users with the necessary security permission may click the **Edit** link from the *Options* column of the respective observation code. This will open the Observation Code Editor. Make any and all necessary changes, and click the **Save** button to submit the edits.

![](../observation-codes-editor.assets/b61b1a5a51b14159a22e93043f4271cf.png)

## Delete/Merge

When maintaining observation codes, there will be times when observation codes are either obsolete, or no longer used, because other, more applicable options are available. In these instances, users may opt to delete an observation code, or in some cases, merge it with another more common observation code.

To delete an existing observation code, simply click the **Delete** link from the *Options* column of the respective observation code. This will present a confirmation of the deletion. Click the **Delete** button to continue with the removal.

![](../observation-codes-editor.assets/90881575de3a975a3553212da0202236.png)

### Merge

Whenever merging observation codes, it is important to understand that the code from which merging is occurring is the code that will be removed, or overwritten, in the {{% system-name %}} system. For instance, if the Urine(Glu) 9 observation code was being merged with Urinalysis Glucose 129, users would merge from Urine(Glu) 9, thus overwriting it with Urinalysis Glucose 129.

To merge an observation code, locate the observation being removed and click the **Merge** link from the *Options* column.

![](../observation-codes-editor.assets/512ce94ca5014498c2a8809898ac6266.png)

When the Observation Code Merge page loads, **Enter Observation Code** will be the stored observation code retained within the system. Click the **Continue** button to save.

![](../observation-codes-editor.assets/6afe70381a50458b7223d94edd20628c.png)

{{% warning %}}
Once an observation code has been merged, it cannot be *unmerged*.
{{% /warning %}}

After continuing, users will be prompted with a verification page. Before the Merge button is available, the verification must be checked. After the box has been checked, click the **Merge** button.

![](../observation-codes-editor.assets/cc4d55a9f205b3e8ddb1c04e4147e312.png)

## Display Flowsheets

Because observations are used to populate Flowsheets, {{% system-name %}} has provided a quick link for accessing the Flowsheet Manager directly from the Observation Codes Manager. Simply click the link in the upper-right corner of the page, and the will load.

For details regarding how to add, edit, and maintain Observation Flowsheets, see our [Flowsheet Manager](https://confluence.mieweb.com/display/DOCS10/Flowsheets+Manager) online help documentation.
