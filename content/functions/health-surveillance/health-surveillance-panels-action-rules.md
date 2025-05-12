---
id: '10wTqIF8gtUDBbJmbk_LjlUeNmtU_vvbVFoVWTZnuMqc'
title: 'Health Surveillance Panels - Action Rules'
date: '2025-05-12T15:55:17.405Z'
version: 142
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:LQSIDNHR'
source: 'https://drive.google.com/open?id=10wTqIF8gtUDBbJmbk_LjlUeNmtU_vvbVFoVWTZnuMqc'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
Users must have security access to be in Health Surveillance Management control tab.

On the sidemenu tab, click the CONTROL PANEL tab. Once in the Control Panel tab, click the HSP tab and then click the HEALTH SURVEILLANCE tab listed below.

![](../health-surveillance-panels-action-rules.assets/7fd697db4f15437a787391a079bbb627.png)

The listing of current Panels will display on the screen under the Panel Search fields.

## Action Rules

Within the Health Surveillance tab, there is an option Action Rules available on the top right corner as a hyperlink.

![](../health-surveillance-panels-action-rules.assets/d41533864b12985b1be2378b1864196b.png)

Upon clicking into Action Rules, it will list any current, existing indication or contraindication rules (aka Action Rules) programmed in your system towards the top. There is also a link to *show inactive* indication and contraindication rules in your system. You can edit contraindication or indication rules here also via the Edit button provided.

In Panel Actions of a panel, there is an option to select an **Indication Rule** where it can have a drop-down set to any action rule found in ‘Action Rules' hyperlink module which must evaluate to be ‘true' in order for this specific panel action (that you are adding to the panel) to trigger for an employee. ‘Action Rules' are configured by an MIE Developer and you would contact your MIE Implementer with the action rule criteria you need for your system panel(s).  An example of an action rule is to only trigger this action item (procedure) on an employee if they are part of department xxx or another example is an action rule configured in the system that can be applied to this specific action (procedure) in this panel that only would trigger a Hep 3^rd injection action (procedure) on an employee in this panel if they've had their 2^nd Hepatitis injection given with a date in last 8 weeks. Or another scenario example is to only trigger a panel action item if the patient is female gender.

![](../health-surveillance-panels-action-rules.assets/cc8a2cc349a89f4a48da3136c6a611d5.png)

In Panel Actions of a panel, there is an option to select a **Contraindication Rule** where it can have a drop-[down set to any action rule found in ‘Action Rules' hyperlink module which must evaluate to be ‘false' in order for this specific panel action (that you are adding to the panel) to trigger for an employee.

![](../health-surveillance-panels-action-rules.assets/3d0e655e685d8a8386c579408d8f14b1.png)

Action rules that are added/programmed here in the Action Rules editor by giving the action (indication or contraindication rule) a name in that field and programming the script in that field. MIE programs these as html and is required in the *script* field.

![](../health-surveillance-panels-action-rules.assets/01561b879611527ca23a0199175f0211.png)

Once an action rule is programmed, they display as selections while setting up a panel action. An action rule is linked to an applicable panel action as either an *indication rule* or a *contraindication rule* found here in the initial panel action setup.

![](../health-surveillance-panels-action-rules.assets/3f37d2f2366a87e95e1daf857e97fb49.png)

### Test an Action Rule

Here within the Action Panels screen, you can test action rules (indication and contraindication rules) when setting up Health Surveillance panels. You can test action rules against an individual to verify indication or contraindication rules to ensure they trigger as desired when implemented in the panel setup.

![](../health-surveillance-panels-action-rules.assets/cdf833c0832f3cd65e1c458d529e29d5.png)

A simple example: Criteria for an action rule is the panel member must be Female. *Note: Typically Actions Rules would be used to trigger more complex rules outside of gender or age, since we already include age and gender in the panel action definition. Actions rules help define specific sets or sub-sets of panel members, like triggering certain rules for only those panel members who live in another country or perhaps for those have an observation of (for example) HGBA1C.*

In the action rules screen, you can click "edit" to test on an existing action rule already programmed in the system, or while adding/programming an action rule, you can utilize the TEST feature to test before adding or editing further scripts.

You must have the action rule pulled up or programmed in if getting ready to add a new action rule. Then click on the TEST button for the field option of an auto-complete to display to choose a patient/employee to test the rule against.

![](../health-surveillance-panels-action-rules.assets/31903d4ef0018361c592d48b309f466c.png)

The test rule result will return a **result** of True or False and will further result more information on how the action will behave if used as an indication or contraindication rule using this specific patient/employee as an example.

Example of true result (patient is a female in our simple example):

![](../health-surveillance-panels-action-rules.assets/adcee30e053850ac5843b0c954b7a642.png)

Example of a false result (patient is not a female in our simple example):

![](../health-surveillance-panels-action-rules.assets/40e10032a771e2622e5b8c2698455292.png)

### Add an Action Rule

If you wish to add the action rule you entered in and tested, simply click the ADD button and you can continue to add another action rule to the system. It is different programming language, so Action Rules' are configured by an MIE Developer and you would provide your MIE Implementer the criteria. After being added, it will list that newly added action rule on the screen listedit above.

When you are done entering in Action Rules for your system (which show up as contraindication or indication rule choices in panel action setup), click the SUBMIT button. If you do not click the submit button, it will not save your work to the system.

![](../health-surveillance-panels-action-rules.assets/3be06999f587e2d62c081f4401095845.png)

### Edit Action Rule

If you wish to edit an action rule you entered in and tested, or edit an existing rule, simply click the EDIT button next to the specific existing action rule you wish to edit. Action Rules' are configured and edited by an MIE Developer and contact your MIE Implementer with any criteria changes that need done.

{{% note %}}
You can click *edit* to get to the "test" feature of an existing action rule also. Edit is also where you would go to make an action rule "inactive".
{{% /note %}}

![](../health-surveillance-panels-action-rules.assets/9d7884097a6dbcb3031ab8eeaac3631a.png)

When you are done editing an Action Rule for your system (which show up as contraindication or indication rule choices in panel action setup), click the OK button.

![](../health-surveillance-panels-action-rules.assets/de381521982b9b9f730c78a70e171aa9.png)

It will show the edited action rule in the listedit above. However you need to click the SUBMIT button. If you do not click the submit button, it will not save your work/edits to the system.

![](../health-surveillance-panels-action-rules.assets/e8d82a3c767be844412cfff2846a1e4c.png)

## Learning Management System

To learn more about Health Surveillance Panels - Action Rules, follow the link below to the Learning Management System course:

* [Health Surveillance Program](https://mie.talentlms.com/shared/start/key:LQSIDNHR)
