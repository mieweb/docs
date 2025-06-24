---
id: '1_4xApJNxtTyXvxJAumKbqXz1TNGxvewZ1RpdRnydrsM'
title: 'Macros'
date: '2024-11-12T21:48:33.857Z'
version: 89
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1_4xApJNxtTyXvxJAumKbqXz1TNGxvewZ1RpdRnydrsM'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
## Properties of a Macro

* Language: Two letter code representing the language the macro's full text is in.
* Library: Used to organize macros, corresponds to Rx libraries and library charts.
* Context: Tells what the macro applies to, typically an observation name.
* Name: Short form used when expanding a macro by typing. For example, macros representing the normal value by convention have the name "nl."
* Full Text: The expansion of the macro, i.e. what gets inserted after you type a macro or insert one via the macro menu.

The fully-qualified macro name (FQN) has the following form:

[library]:.[context].[name]

[library]:.[name]

The FQN can be used to access macros in libraries and contexts outside the default for whatever input you're in. The latter form is used for "global" macros, i.e. those without a context.

## Using in Flowsheets

Observations in flowsheets can use macros either by typing or by the menu. When expanding by typing, the default library is that set in the section, and the default context is the observation name, so typically it's only necessary to type ".[name]" (followed by a space) to get the macro you want. The menu appears to the right of the text input.

![](../macros.assets/ef64e71d6f6800a0b063be30279d7fe7.png)

You can also set flowsheet observations to normal. This can be done on individual observations, or all at once.

![](../macros.assets/234871be3821c3619283fa5f1d8cc5b1.png)

When setting as normal, the following options are tried in order:

1. The observation code's target.
2. The ".nl" macro in the currently selected library.
3. The ".n" macro in the currently selected library.

When setting as normal for a single observation, if none of the above exist, and you have permission to save macros in the current library, you'll have the opportunity to save a new ".nl" macro and use it immediately.

## Using Outside Flowsheets

Macros can be used in any text input, by typing (i.e. typing period, then the name of the macro, then a space). In this case, there is no context, so only "global" macros are available. The library used is whatever Rx library is set as your default in your preferences.

You can also use any macro's FQN to get exactly the macro you want, regardless of your library preference or the global context.

## Adding Macros

Enter the text you want into the input. Then, with the text selected, click the "magic wand" icon in the top right corner of the page.

![](../macros.assets/d14933a5884cbf5ddd6f4da95eafd4e4.png)

Enter the "quick text" (i.e. the name) of the macro and make sure the library is correct. The context is set automatically based on the input, and the full text is taken from what you selected before clicking the magic wand. Click the save button to save. You'll receive a notification and the form will clear, allowing you to quickly enter another macro.

![](../macros.assets/166158e7c20e408be27905f71ce801c7.png)

You may need to close & reopen the section to see the new macro appear. You can now select it from the menu, or — in this example — type ".new" into the input to expand it.

![](../macros.assets/25682ee09dc0db820c3fc66aad6e6707.png)

## Search/Edit/Delete

### Option 1

For users with the proper security, macros can be edited and deleted from the flowsheet within the encounter. Hover over the item to display the edit or delete icons.

![](../macros.assets/2d10e3d254066e0a12fc18f697e5a4b5.png)

### Option 2

Click the magic wand, enter something into the search bar and press enter (or click the magnifying glass) to see matching macros in any library. **Edit** and **Delete** options display at the bottom of the screen in the **Options** column.

![](../macros.assets/eee8bc81954f7391d61f82954ba79c59.png)

### Option 3

Users can also click the **Show Macros** link to view all macros in the system at once in DataVis.

![](../macros.assets/4ddb24cbd618ec3b3118c97579cba050.png)

From here users can filter, sort, and group from the datavis grid controls.

![](../macros.assets/31a812296577d3dad991002e3c6dea22.png)

For example, search and locate the oral exam macros. Select the item to edit/delete and the **Edit** and **Delete** icons at the bottom of the datavis. Selecting Edit will display the edit macro box and Delete will display a message asking the user to confirm that they wish to delete the macro.

![](../macros.assets/cbfd78e6714f5380842c3d435169ed21.png)

#### Edit

Select the **Pencil icon/edit link** and the Edit Macros dialogue box will display. Make changes to the text and click the Edit button at the bottom of the box to save the changes.

![](../macros.assets/8c90faaa59eff31ee983046ded230a95.png)

#### Delete

Select the **Trash can icon/delete link** to delete the macro. A confirmation deletion message will display asking the user to confirm that they wish to delete the marco. Click **Yes** to proceed and delete the macro and return to the encounter or click **No** to cancel and return back to the encounter.

![](../macros.assets/8d165b9c546f382fedd5ec1742822f04.png)

## Security Role Settings

To utilize macros, users must have the security setting **Use Macros** set to Yes. If set to No, users will not be able to utilize macros.

The **Macro Add/Edit** security role must be updated for administrators that need add/edit access. The option of **Library** allows administrative users to add/edit/delete library macros. The option of **All** allows users to add/edit library and system level macros. The option of **No** limits the user from adding/editing macros.
