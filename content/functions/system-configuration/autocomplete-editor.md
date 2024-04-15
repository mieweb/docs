---
id: '1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8'
title: 'Autocomplete Editor'
date: '2020-03-05T17:46:48.962Z'
version: 71
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1gf_5k9tQYpPKSQ0upiD07Sjk76Kulne3EvseAf6VOe8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
You must have security role access to Manage Autocompletes. This allows users (based on level) to access the AC Editor tab found in the Control sidemenu tab.

![](../autocomplete-editor.assets/0451eb3bf312f6305419e609b832bf6d.png)

## AC Editor

Autocomplete fields are both learned and pre-loaded in {{% system-name %}} . The AC Editor tab found in Control sidemenu allows users to access and/or edit, add or delete auto-complete field choices that appear in modules throughout {{% system-name %}} .

![](../autocomplete-editor.assets/eddf1bc674d685d461a661f68c30d93b.png)

When you are in the AC Editor tab it will default to show all. You can narrow down your search by using the drop-down on the top right side of the AC Editor tab to select a specific module to look at autocomplete field choices.

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
