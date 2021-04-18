---
title: "Conditions"
date: "2020-02-27T19:45:25.898Z"
url: "general-functionality/e-chart/conditions.html"
version: 51
id: "1xWR8UvNro2Aic07QeoMCZ36-vWg81dasBtovoe9FLg0"
source: "https://drive.google.com/open?id=1xWR8UvNro2Aic07QeoMCZ36-vWg81dasBtovoe9FLg0"
menu:
    main:
        name: "Conditions"
        identifier: "1xWR8UvNro2Aic07QeoMCZ36-vWg81dasBtovoe9FLg0"
        parent: "1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU"
        weight: 970
---
## Viewing a Patient's Conditions

Conditions can show in the top summary portion of the patient's information in most chart tabs *if* you have the My Settings preference for *Show Conditions in Med Header* set to Yes.

![](conditions.images/image1.png)

This is the Med Header:

![](conditions.images/image2.png)

The patient's current active conditions show in the Past Medical History portlet and/or Medical History portlet of the Patient Summary tab.

![](conditions.images/image3.png)

They also show in the Patient's/Family Conditions chart tab or patient's E-history tab (E-History program must be set up by MIE). And from here can enter in patient conditions (or enter them in the Impression Section of point & click encounters)

![](conditions.images/image4.png)

## Viewing List of Conditions

When you are working in a patient's E-Chart, you can simply click the hyperlink Conditions: word from the patient's summary (RX header) at the top of the tab you are working in. It will automatically take you then to the Conditions module where you then can document the patient's conditions or family conditions.

OR you can click the patient's chart tab at the top most likely named Patient/Family Conditions and it will take you to the patient's condition history also where you can document conditions or family conditions for the patient.

![](conditions.images/image5.png)

Once you are in the Conditions module, you will see the patient's summary of *Active Conditions, Concluded Conditions, Inactive, Deleted Conditions and Family Conditions.* You can hide any of these categories from your screen by clicking the Hide link in the category to hide.

![](conditions.images/image6.png)

* <strong>Active Conditions</strong> are patient conditions as active; patient has this condition presently.
* <strong>Concluded Conditions</strong> are patient conditions they once had but are now concluded. This also stores a conclusion date and/or any notes if user wishes to document that condition – meaning the patient no longer has this condition but did at one point.
* <strong>Inactive Conditions</strong> are patient conditions that is sort of like concluded, but, has possibility of returning.
* <strong>Deleted Conditions</strong> are patient conditions that were entered in error and are now deleted from the patient's history.

Providers can alter the condition "status" and therefore falls into these above buckets via the Impression section of encounters also.

![](conditions.images/image7.png)

## Documenting a Condition for a Patient

From the Conditions screen, click the Add Condition hyperlink at the top right of the screen.

![](conditions.images/image9.png)

After you click Add Condition link, you will see the *Condition Details* fields.

![](conditions.images/image10.png)

* <strong>Condition:</strong> There are common conditions with radio buttons listed at the top that have been most frequently listed for your practice and then a general radio button for your own name/icd9 code condition if not on the most common list. You can only select one radio button in the Condition section. You are entering one condition at a time. Simply click the radio button of the condition you want to enter for the patient, or click the radio button for <em>Name or ICD9</em> and free-text type the condition name or ICD9 code. It will auto-complete your text to give you choices and you can highlight a choice or you can continue to free-text in a condition. Conditions shown <em>in italics as light grey</em> are non-billable ICD codes from the ICD tables we integrate with. This is a system setting that can be set to different settings to totally hide any conditions they state are non-billable or to leave all conditions as shown.
* <strong>Onset Date:</strong> This is optional. Enter the date this condition began for the patient. If you only type in a year (not month or day ex: 1969) then the month/day will default to 01-01. If you enter a month and year (no day ex: 04-1969) then the day will default to 01. If no date is entered, it will save as 00-00-0000 onset date.
* <strong>Date of conclusion (if any):</strong> This is optional. Enter the date this condition concluded for the patient. Month/Day/Year apply as above in Onset Date.
* <strong>Managed by:</strong> This is optional to be filled out. It is an auto-complete pointed to the users whom are part of the department set in the system setting <em>Webchart/Settings/Physician Realm</em>. The users in this realm show up as choices for this field. The users need not have this as their <em>primary</em> department. Simply a user being part of the specified realm will allow them to display as choices. This field does not accept free type.

![](conditions.images/image11.png)

* <strong>Notes:</strong> This is optional. Type any notes you wish.
* <strong>Severity:</strong> This is optional. You will only get a drop-down for this severity field if you enter a condition that a severity can be applied to. Example: Bronchitis. You could then select a severity of Acute, Chronic, or Self-Limiting from the drop-down. This is optional. Again, this field will only turn on if you enter a valid condition that is tied to these 3 types of severity categories.

Click **Submit** and it will automatically put it in the appropriate conditions category according to what date fields you entered. Meaning, if you entered a condition and entered a conclusion date, it will automatically know that the condition is concluded and put it in the concluded conditions section for that patient. If you chose a condition and only entered an onset date, then it will put it in the active conditions section for that patient.

Click **Submit and Conclude** and it will automatically put the condition in the Concluded conditions category for the patient. You may want to use this if the patient no longer has the condition but could not tell you the date the condition concluded. Therefore, the conclusion date would be empty, but you can submit and conclude that condition by clicking this option.

### Pregnancy Condition

After you enter and save a condition of pregnancy for the patient, if you go in an edit or click on the pregnancy condition link in the listing, it will open *pregnancy detail* fields where you can document specifics of the pregnancy condition.

![](conditions.images/image12.png)

If you click to *conclude* the pregnancy condition, it will take you to the conclude pregnancy screen to enter in specifics related to the pregnancy/delivery also. Users cannot see/use the "Delete" button on a pregnancy condition listing if users do not have Edit access for conditions.

![](conditions.images/image13.png)

### Add Family Condition

If you wish to enter a family medication condition for the patient, click Add Family Condition link from the top right of the conditions screen. Anything entered here is considered a family member condition and will be placed in the Family Conditions section for this patient's conditions summary.

![](conditions.images/image14.png)

After you click *Add Family Condition* link, you will see the *Family Condition Details* fields.

![](conditions.images/image15.png)

* <strong>Condition:</strong> You are entering one family condition at a time. Simply click the radio button for <em>Name or ICD9</em> and free-text type the family condition name or ICD9 code. It will auto-complete your text to give you choices and you can highlight a choice or you can continue to free-text in a condition.
* <strong>Relation:</strong> This is a required field. Even though you are entering only one condition, you can check-mark as many family members that have this specific medical condition. If you do not enter a relation selection, you will get an error stating a relation must be selected (required field).

![](conditions.images/image16.png)

When entering family conditions in the dynamic encounter, you will see in the drop-down of relation choices the choice of NKH. NKH means the condition you are adding and set to NKH is documenting the patient has no known family history of that disease/condition. Instead of specifying a specific condition a family member has, you are doing the opposite and documenting that the patient has no known family history of that specific condition you are entering.

![](conditions.images/image17.png)

When working in the encounter and you leave the relationship field *blank*, it will still document the family condition to the patient's history and will assume and mark it ‘unknown' as the relationship.

* <strong>Onset Date:</strong> This is optional. Enter the date this condition began for the family member(s). If you only type in a year (not month or day ex: 1969) then the month/day will default to 01-01. If you enter a month and year (no day ex: 04-1969) then the day will default to 01. If no date is entered, it will save as 00-00-0000 onset date.
* <strong>Date of conclusion (if any):</strong> This is optional. Enter the date this condition concluded for the family member(s). Month/Day/Year apply as above in Onset Date.
* <strong>Notes:</strong> This is optional. Type any notes you wish.

Click *Submit* and it will automatically list it in the Family Conditions section of the conditions summary screen.

![](conditions.images/image18.png)

### Editing/Deleting a Patient Condition

If you need to edit or delete a condition for a patient simply get into the conditions summary screen (from the conditions tab or by clicking the Conditions link in the patient's RX summary header).

You will see the categories of Active, Concluded, and Deleted Conditions.

To edit or delete a condition, simply click on the underlined condition name in the problem column.

![](conditions.images/image19.png)

The CONDITION DETAILS screen will open up either in the same browser tab (default) or in a separate browser tab depending on the system setting value that is set for the database.

When the *condition details* screen appears, you can change any field you need to for this specific condition you selected or type notes into document a reason for deleting or editing, etc. You will see the date the condition was entered and the date(s) any modifications/edits were done to this condition entry from this screen too.

![](conditions.images/image20.png)

![](conditions.images/image21.png)

Select the submit function you wish to perform:

* <strong>Make Changes:</strong> will save your changes to this condition and put it in the appropriate category of the conditions summary.
* <strong>Change and Conclude:</strong> will save your changes to this condition and then conclude the condition. It will then list it in the patient's concluded conditions category of the conditions summary screen.
* <strong>Delete:</strong> this will delete this condition from the patient's chart. It will keep a record of it in the deleted conditions category of the patient's conditions summary screen. If you click Delete, it will ask you to confirm that you want to delete this condition. Deleting means the condition was entered in error. Concluding means the patient had the condition but no longer has it.

After you have clicked one of the function buttons, it will then take you back to the patient's condition summary screen. You can edit another if you wish or continue working in {{% system-name %}} .

### Concluding an Active Patient Condition

If you need to conclude an active condition for a patient simply get into the conditions summary screen (from the conditions tab or by clicking the Conditions link in the patient's RX summary header).

Look in the Active Conditions category for the condition you want to conclude. Conclude means that the patient had this condition but no longer has it. Deleting a condition means it was put in error.

To conclude a condition, find the specific condition and simply click on the word Conclude in the conclude column.

![](conditions.images/image22.png)

You will then be taken to the Conclude Condition screen.

Type in the date the condition concluded and type in any notes related to this concluded condition.

![](conditions.images/image23.png)

Click *Submit* and it will then list this concluded condition in the Concluded Conditions category of the patient's condition summary screen.

### Edit, Delete, or Activate a Concluded Condition

If you need to edit, delete or reactivate a concluded condition for a patient simply get into the conditions summary screen (from the conditions tab or by clicking the Conditions link in the patient's RX summary header).

Look in the Concluded Conditions category for the condition you want to reactivate. Conclude means that the patient had this condition but no longer has it. Deleting a condition means it was put in error. Reactivating it means the condition came back or you concluded it in error, etc.

To edit, delete or activate a concluded condition, find the specific concluded condition and simply click on the underlined condition in the problem column.

![](conditions.images/image24.png)

You will then be taken to the Condition Details screen.

You can change any field you need to for this specific condition you selected or type notes in to document a reason for deleting, editing, or re-activating.

![](conditions.images/image25.png)

Select the submit function you wish to perform.

* <strong>Make Changes:</strong> will save your changes to this concluded condition and keep it in the appropriate category of the conditions summary.
* <strong>Change and Activate:</strong> will save your changes to this condition and then activate the condition. It will then list it in the patient's active conditions category of the conditions summary screen.
* <strong>Delete:</strong> this will delete this condition from the patient's chart. It will keep a record of it in the deleted conditions category of the patient's conditions summary screen. If you click Delete, it will ask you to confirm that you want to delete this condition. Deleting means the condition was entered in error. Concluding means the patient had the condition but no longer has it.

After you have clicked one of the function buttons, it will then take you back to the patient's condition summary screen. You can edit another if you wish or continue working in {{% system-name %}} .

### Editing/Deleting a Family Condition

If you need to edit or delete a family condition for a patient simply get into the conditions summary screen (from the conditions tab or by clicking the Conditions link in the patient's RX summary header).

You will see the Family Conditions category if you scroll down to the bottom of the screen. It is the last category in the patient's conditions summary screen.

To edit or delete a family condition, simply click on the underlined condition name in the description column.

![](conditions.images/image26.png)

You will then be taken to the Family Condition Details screen.

You can change any field you need to for this specific family condition you selected or type notes in to document a reason for deleting or editing, etc.

![](conditions.images/image27.png)

Select the submit function you wish to perform.

* <strong>Make Changes:</strong> will save your changes to this family condition and put it back in the family conditions category of the patient's conditions summary.
* <strong>Delete:</strong> this will delete this family condition from the patient's chart. It does not keep a record of it. It is completely taken out of the family condition summary. If you click Delete, it will ask you to confirm that you want to delete this condition.

After you have clicked one of the function buttons, it will then take you back to the patient's condition summary screen. You can edit another if you wish or continue working in {{% system-name %}} .

## Condition View Links

You will see a condition link named View Links in each condition category.

![](conditions.images/image28.png)

The Search link will take you out to Healthwise.net in a separate window to take you directly to specific library search of material on the condition you selected "search" for. This is a separate interface your MIE Implementer can set up for you. This can be patient education material you can look up or print out or view in other languages if that website offers additional languages.

If you click View Links for any condition, it will open up display the encounters that the given condition is linked to and all the items/documents that are linked to those encounters (in reverse chronological order). Deleted items will not show up in the list.

![](https://lh4.googleusercontent.com/S3STrNDVtBQEK-Mb9ov9nDReT2pm-rgz1vAwX8KwLQin5D-BxydrigpJb_wTCakIlHEaAlaiX8JuFPIy4B1FK-kvCzVmMufiKJ1VSjzJxlMwUhtsULxTy1Ls4-gmdOLKZwzIPEIz05HkjXM1UA)

