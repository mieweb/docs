---
id: '184cEFR0ZGXqOKRMfcjRH0NFDEQg5mJ9SWlnOiPPOnUs'
title: 'Injection Editor'
date: '2020-03-16T14:47:58.197Z'
version: 55
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=184cEFR0ZGXqOKRMfcjRH0NFDEQg5mJ9SWlnOiPPOnUs'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
If you have security to manage injection codes, you will be able to access the Injections Editor tab.

The Injections Editor tab is located in the sidemenu tab named Control.

This is where you see a master set of CDC injection names that, for example, the injection/immunization module points to when doing searches/auto-completes for injections/immunizations.  The CDC provides a mapping from their CVX injection codes to CPT codes. Some practice are concerned about certain injections in their injection auto-completes, so this editor can be used to either hide some of these or rename them to suit the practice.

Users with security access can 'rename' injections as they wish for their practice and those injections they renamed  will show up with that new name in the auto-complete of, for example, the injections module. In the background, {{% system-name %}} always keeps the original CDC injection name even when the injection has been renamed. Individual clients can manage what shows up in their injection auto-completes by using this Injection Editor.  A user with security can also 'hide' an injection name in this editor. Users with security cannot delete injections from the editor, but you can mark the ones the practice wants hidden. If you hide an injection name, that injection name will not show up in the injection module auto-completes.

Any changes done in the Injection Editor affect an injection auto-complete such as the add injection module in a patient's chart.  Any injection marked as ‘hidden' in the injection editor will not show up in these types of auto-completes.  Any injection ‘renamed' in the injection editor will show/display as that in these types of auto-completes during a search or display.

![](../injection-editor.assets/567383a493643ccf20369454e22bdb40.png)

INJECTION EDITOR tab is accessible if you have security rights to it. It lists any injection names that have edits or are marked hidden once you open this tab.  It always shows what injections have been modified in this summary.

![](../injection-editor.assets/de4cdf01f5376458b164769b119768a6.png)

## Hide an Injection Name

The "hidden" option is a way to prevent a particular injection code from being shown in the auto-complete.  To hide an injection name from showing up in any injection autocomplete elsewhere in the practice's {{% system-name %}} , simply begin to type the name of the CDC injection name that you want to hide.  It will auto-complete and give you choices that match what you typed. These matches are all injections that we have stored in the CDC injection table.

Once you have the injection name in that field that you want to hide, simply check-mark the box Hidden.  Then click the ADD button at the right.

![](../injection-editor.assets/55622555799c01d7c339362f05434d82.png)

Once you have clicked the ADD button, it puts that edit up in the summary list above.  Continue to hide more or rename others. When you are all done with your changes, click the SUBMIT CHANGES button at the bottom.

![](../injection-editor.assets/b451c04986db03ad7524de2447b807f4.png)

It will submit those changes in the system and will be saved.  When you go into, for instance, the injections module in a patient's chart and you try to add that injection that is now hidden, it will not show up as an auto-complete choice to document since it is now hidden in the practice's {{% system-name %}} system.

You can reverse a hidden injection.  If the injection name is hidden, but now you want it shown, in the Injections Editor find that hidden injection listed in the top summary of injections that have been modified.  Click the EDIT button next to it.

![](../injection-editor.assets/9b7fea9e4a6c9d608da907e21925018f.png)

It will open that injection detail box.  Simply uncheck-mark the Hidden box and click the OK button.  Click the SUBMIT CHANGES button and it will now be reversed.  It still remains up in the summary list because it had been edited.

If you click the minus [-] button for an injection listed in the editor, it will remove the entire edit and any edits done to it.  It will show the item as a strikeout, but you must still click SUBMIT CHANGES to save your edits/deletions.  The injection reverts back to ‘shown' status and regular ‘CDC name' display because it's been removed from the list of injections that have edits regarding them.

## Change/Rename Injection

The "display name" option is a way to change a particular injection code CDC name to something different and displays that ‘display name' in the auto-complete instead of the official CDC injection name.  You can rename an injection and the new description name will show up in the auto-complete of the injections module and keeps the CDC name in the background. To rename an injection name to display a different ‘name' in any injection autocomplete elsewhere in the practice's system, simply begin to type the name of the CDC injection name that you want to rename.  It will auto-complete and give you choices that match what you typed. These matches are all injections that we have stored in the CDC injection table.

![](../injection-editor.assets/47a2d53d31c4ed0b947a9351c0bd947d.png)

Once you have the injection name in that field that you want to ‘rename', simply begin typing the display name.  They display name is what will be seen by users in any injection autocomplete within modules of {{% system-name %}} .  Then click the ADD button at the right.

![](../injection-editor.assets/adb0d082a7719786b538e311e5ad81c6.png)

![](../injection-editor.assets/b94606d5b3297b7a10be038a09b0b864.png)

The original CDC description will not be seen to any user when in any injection autocomplete modules if you have renamed a CDC injection name.  Whatever the CDC injection name has as a display name is what will be seen.

After you have clicked the ADD button, that renamed injection will display above in the list summary of changed/hidden injections in the editor.

![](../injection-editor.assets/9608bf1cdaddb1d1983f32a06bdc02e9.png)

You can continue to rename others by doing the same previous steps. Once done, click the SUBMIT CHANGES button at the bottom of the editor screen. It will submit those changes in the system and will now be saved.  When you go into, for instance, the injections module in a patient's chart and you try to add that injection that is now renamed, it will not show up in an auto-complete choice as the ‘display name' in the practice's {{% system-name %}} system.

You can edit an already changed injection name.  If the injection name is hidden, but now you want it shown, in the Injections Editor find that hidden injection listed in the top summary of injections that have been modified.  Click the EDIT button next to it.

![](../injection-editor.assets/17c94477659970432f05589249d9cd3d.png)

It will open that injection detail box.  Simply change/edit/correct the display name and click the OK button.  Click the SUBMIT CHANGES button and that renamed injection will store any additional changes you made.  It remains up in the summary list because it had been edited. If you click the minus [-] button for an injection listed in the editor, it will remove the entire edit and any edits done to it.  It will show the item as a strikeout, but you must still click SUBMIT CHANGES to save your edits/deletions.  The injection reverts back to ‘shown' status and regular ‘CDC name' display because it's been removed from the list of injections that have edits regarding them.

We suggest not renaming injections to ‘brand names'.  Example: Boostrix is just a brand name for Tdap.  {{% system-name %}} has Tdap in the list.  We advise against renaming injections in this way to suit the individual practice's pattern of injecting because it makes it impossible to add a historical record with the brand name NOT specified (ex: just Tdap).  What this means is, just because a practice always injects for Tdap is Boostrix, that doesn't mean that every patient they see has only had Boostrix for their Tdap (from other records/other practices).  In some cases, it may be that there is currently only one brand name, but that doesn't mean it will be that way forever.  We suggest to keep referring to injections generically.
