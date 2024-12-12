---
id: '1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8'
title: 'Autocomplete Editor'
date: '2024-07-22T16:29:08.963Z'
version: 105
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ZEGDNHRK'
source: 'https://drive.google.com/open?id=1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
You must have security role access to Manage Autocompletes. This allows users (based on level) to access the AC Editor tab found in the Control sidemenu tab.

![](../autocomplete-editor.assets/0451eb3bf312f6305419e609b832bf6d.png)

## AC Editor

Autocomplete fields are both learned and pre-loaded in {{% system-name %}} . The AC Editor is found in the Control Panel sidemenu option under the System tab and it allows users to access and/or edit, add or delete auto-complete field choices that appear in modules throughout {{% system-name %}} .

![](../autocomplete-editor.assets/19545eca59bec6fb9080aa1be16cb5a6.png)

When you are in the AC Editor it will default to show all. You can narrow down your search by using the drop-down on the top right side of the AC Editor tab to select a specific module to look at autocomplete field choices.

Based on the module you have selected, you will see any corresponding autocomplete field names (this is the name of the field in {{% system-name %}} that is an auto-complete) along with how many times it's been used (use count), and the contents is the auto-complete choices that appear that someone can select in that auto-complete field (what is learned or pre-populated as a choice, etc).

{{% warning %}}
The **E-Chart** module in the drop-down please avoid changing items in this section. Many types of cron-jobs, layouts, reports, etc., depend on specific field contents stored here in the auto-complete.
{{% /warning %}}

If you have permission, you can edit an auto-complete field and save it.

If you have permission, you can delete an auto-complete field and confirm the deletion.

To *add* an autocomplete selection to a field, you would go to that field in {{% system-name %}} and type the information into the available field, so the system can *learn* the auto-complete. One example of adding autocomplete text which is not in the system is below in the *dismiss warnings* *reason field* when dismissing a warning and this field is an auto-complete.

![](../autocomplete-editor.assets/b02e2e097e9b0ff7e97fd11ca0400f0a.png)

After it is typed in the field, the system "learns" it and then it can be edited or deleted using the AC Editor tab.

![](../autocomplete-editor.assets/722c05a91f99fe779e33639a9a268ba8.png)

## Learning Management System

To learn more about the Autocomplete Editor, follow the link below to the Learning Management System course:

* [Autocomplete Editor](https://mie.talentlms.com/shared/start/key:ZEGDNHRK)
