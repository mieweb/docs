---
title: "Autocomplete Editor"
date: 2020-03-05T17:46:48.962Z
url: "autocomplete-editor.md"
author: Jeremia Ploor
id: 1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8
source: https://drive.google.com/open?id=1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8
menu:
    main:
        name: "Autocomplete Editor"
        identifier: "1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8"
        parent: "1g_frQrmRQNVXiUxZbiFQazraiJ-RFioG49ZunOCSejw"
        weight: 300
---
You must have security role access to Manage Autocompletes. This allows users (based on level) to access the AC Editor tab found in the Control sidemenu tab.

![](external_files/f42f2220f7b2a9179e894c71766f80fe.png)

## AC Editor

Autocomplete fields are both learned and pre-loaded in {{% system-name %}} . The AC Editor tab found in Control sidemenu allows users to access and/or edit, add or delete auto-complete field choices that appear in modules throughout {{% system-name %}} .

![](external_files/e0428535575e3b9f48881901f945939b.png)

When you are in the AC Editor tab it will default to show all. You can narrow down your search by using the drop-down on the top right side of the AC Editor tab to select a specific module to look at autocomplete field choices.

Based on the module you have selected, you will see any corresponding autocomplete field names (this is the name of the field in {{% system-name %}} that is an auto-complete) along with how many times it's been used (use count), and the contents is the auto-complete choices that appear that someone can select in that auto-complete field (what is learned or pre-populated as a choice, etc).

{{% warning %}}

The **E-Chart** module in the drop-down please avoid changing items in this section. Many types of cron-jobs, layouts, reports, etc., depend on specific field contents stored here in the auto-complete.

{{% /warning %}}


If you have permission, you can edit an auto-complete field and save it.

If you have permission, you can delete an auto-complete field and confirm the deletion.

To *add* an autocomplete selection to a field, you would go to that field in {{% system-name %}} and type the information into the available field, so the system can *learn* the auto-complete. One example of adding autocomplete text which is not in the system is below in the *dismiss warnings* *reason field* when dismissing a warning and this field is an auto-complete.

![](external_files/393dbd67f6d010ae4cfbbc4f22a83adc.png)

After it is typed in the field, the system "learns" it and then it can be edited or deleted using the AC Editor tab.

![](external_files/011e93a42b25788e2e55a539443e7909.png)

