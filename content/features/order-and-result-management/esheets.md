---
title: "eSheets"
---

eSheets provide a form-based way to collect questionnaire and flowsheet responses in an encounter. An eSheet can be generated from an existing Observation Flowsheet, adjusted in the eSheet Layout Editor, completed from an order section in a Visit encounter, and reopened with its saved responses.

For information about creating the source observations and flowsheet, see [Observation Flowsheets](observation-flowsheets.md). For more information about adding orders to an encounter, see [Visit Orders](../encounters/visit-orders.md).

## Permissions and Prerequisites

Clinicians need their normal permissions for charts, encounters, and orders to complete an eSheet. Administrators who configure eSheets need the appropriate permissions to manage orders, Observation Flowsheets, and layouts.

Before configuring an order to use eSheet, verify the following:

- The order item is active.
- An active Observation Flowsheet exists with the exact same name as the order item.
- The Observation Flowsheet contains the questions, sections, required fields, choices, and supported conditional rules that should appear in the initial eSheet.

{{% note %}}
The generated eSheet becomes a separate form definition. Editing an eSheet does not update its source Observation Flowsheet, and later changes to the Observation Flowsheet do not automatically update an existing eSheet.
{{% /note %}}

## Configure an Order to Use eSheet

1. Open **Control Panel**.
2. Select **Orders**, then select **Orders-List Editor**.
3. Use the **Order List** grid to locate the order item. Make sure you select the order whose name exactly matches the source Observation Flowsheet.
4. Edit the order item.
5. Set **Exam Type** to **eSheet**.
6. Save the order item.

The order can now open as an eSheet when it is added to a supported encounter exam.

## Generate an eSheet from an Observation Flowsheet

The first time an eSheet-configured order is opened in an encounter, the system can generate its eSheet layout from the matching Observation Flowsheet. This process also adds the generated definition to the eSheet Layout Editor for later maintenance.

1. Open the patient's Visit encounter.
2. In **Visit Orders**, add the configured order to the encounter or due list.
3. Select the lightning-bolt **Add to Exam** action for the order. Adding an order to the due list and adding it to the exam are separate actions.
4. Locate the new encounter section named for the order.
5. Select the section header's **Edit** action.
6. Wait for the eSheet fields to display. On first use, the system converts and saves the matching Observation Flowsheet before opening the form.

If the eSheet does not open, verify that the order and Observation Flowsheet names match exactly and that **Exam Type** is set to **eSheet** on the order item.

## Complete an eSheet in an Encounter

1. Open the eSheet order section in the encounter.
2. Enter the requested responses. Required fields must be completed before submission.
3. Select **Submit**.
4. Reload or reopen the encounter to view the saved responses in the read-only section summary.
5. Select the section header's **Edit** action to reopen the form and continue editing the saved responses.

eSheet responses are saved with the encounter and restored when the section is reopened. They are not currently written as individual classic observation results in the patient's **Observations/Flowsheets** chart tab.

## Open the eSheet Layout Editor

Administrators can maintain generated eSheet definitions from the Control Panel.

1. Open **Control Panel**.
2. Select **Interface**, then select **eSheets**.
3. In **Available eSheet Layouts**, locate the eSheet name.
4. Select **Edit**.

Only eSheet layouts that have already been generated or saved appear in the list. If an expected eSheet is missing, open its configured order in an encounter once to generate it from the matching Observation Flowsheet.

## Edit an eSheet Layout

The eSheet Layout Editor provides three editing modes:

- **Build**: Add and organize sections, text fields, selection fields, ratings, matrices, rich content, and additional sheets. Select a field in the form to edit its properties.
- **Code**: Edit the definition as YAML or JSON. Code changes are applied to the builder when switching modes, but they are not stored in WebChart until **Save Layout** is selected.
- **Preview**: Review how the eSheet will appear to a user before saving it.

The editor also provides **Import** and **Export** actions for moving a definition between files.

To save layout changes:

1. Make the required changes in **Build** or **Code** mode.
2. Select **Preview** and review the form.
3. Select **Save Layout**.
4. Wait for the save confirmation before leaving the page.
5. Select **Open Renderer** to open the saved eSheet as users will see it.

{{% warning %}}
Layout changes affect every future use of that named eSheet. Review the form before saving, especially when changing field identifiers, choices, required settings, or conditional rules.
{{% /warning %}}

## Troubleshooting

### The eSheet is not listed in the editor

The editor lists saved eSheet definitions, not every Observation Flowsheet. Configure the matching order for eSheet and open its encounter section once to generate the definition.

### The encounter does not show an eSheet section

Confirm that the order was added to the exam, not only to the due list. Also confirm that the order is active, its **Exam Type** is **eSheet**, and its name exactly matches an active Observation Flowsheet.

### Changes to the Observation Flowsheet do not appear

After the initial conversion, the eSheet and Observation Flowsheet are maintained separately. Make the corresponding change in the eSheet Layout Editor. Contact an administrator or MIE support if the eSheet must be regenerated from its source flowsheet.

### A legacy field behaves differently after conversion

Most text, measurement, date, time, yes/no, radio, dropdown, section, required, choice, and supported conditional fields are converted. Legacy calculation fields and unsupported custom behavior may require manual adjustment in the eSheet Layout Editor.
