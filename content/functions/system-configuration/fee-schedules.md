---
id: '1UN8pMffETbIAzX3R9mA86EeIp_XG0joWzFDs0tC9eto'
title: 'Fee Schedules'
date: '2020-02-27T19:34:17.779Z'
version: 69
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1UN8pMffETbIAzX3R9mA86EeIp_XG0joWzFDs0tC9eto'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In order to change or add any Fee Schedules, you must have security permission to Manage Fee Schedules. In order to change or add fee schedules to Insurance Plans, you must have security permission to Manage Insurance Plans. In order to utilize Fee Schedules, you must have CPT codes and picklists entered via the CPT codes module & tab. See other help instructions named *CPT Codes tab.pdf*

## Search for Existing Profile and See Details

Log into {{% system-name %}} . Click the CONTROL side menu tab, then click the FEE SCHEDULE tab at the top. This opens the *Fee Schedule Profile Search*.

![](../fee-schedules.assets/ae17d7fe942ec9a65500a8b9f209edc5.png)

Start to type in the first few characters of the **profile name** you wish to search for then click the *search* button. It will also attempt to auto-complete and give you drop-down choices of the profiles that match your typing.

If you want to see an entire list of existing profiles, simply put your cursor (mouse) in the field and hit the *down arrow* button on your keyboard ↓. This will show the drop-down of all fee schedule profiles that exist. You may enter your Profile Fee schedules by codes or numeric or names. You may not want to enter any other fee schedules and only will work off the *default* profile.

![](../fee-schedules.assets/7b327655735957a19d4cfc67a8b3240d.png)

The **Edit Default Profile** link is to change anything in the master/across the board/standard fee schedule. When you click this, it may take a few minutes to open on your screen depending on how many codes you have entered in your system. This is the huge master/across the board/standard fee schedule for your system. Any other individual profiles would be searched for and edited using the profile name search described above.

![](../fee-schedules.assets/b74df296be8dc872e44417f457792a04.png)

## Adding a New Profile

If you searched and didn't find an existing profile and needed to add a new fee schedule profile, simply type in the name of the profile, click the *search* button and it will pop up a warning that it doesn't find that profile and asks if you want to add a profile with that name you typed.

![](../fee-schedules.assets/ae08afdf5722bf166c9aea7a2156ddd7.png)

Link any CPT codes & amounts to the new profile you added, simply use the CPT Code & Amount fields provided at the end of the listed profile.

You must enter a CPT code, then an amount, then click the ADD button to link cpt codes & amounts to a fee schedule profile. Then you can continue to add many more cpt codes & corresponding amounts to that fee schedule profile.

![](../fee-schedules.assets/8dc3cca0d94bb4f7e30f57e758d88166.png)

When you are all done adding cpt codes/amounts to that profile, you **must click the SUBMIT CHANGES** button at the very end. This is a final submission/save. It will not save anything you added if you do not perform this at the end.

## Editing Existing CPT Codes or Amounts from Existing Profiles

Type in the profile name you need to edit something in.

Click the SEARCH button. It will then show the entire profile details for that profile you need to edit something in. It may take a minute or two to open the profile details. If there are a lot of cpt codes/charges attached to a profile, it takes longer to open.

![](../fee-schedules.assets/ac30246a629a14a3e33903836b3bba6a.png)

**Code:** Could be CPT code or other inventory codes supported for pricing fee schedules

**Code Type:** Choose if it's CPT Code or Inventory ID code.

* To edit an amount attached to that profile, simply click the <strong>edit</strong> button in the options column to the right of the specific CPT code/amount listed. Code Types &Codes are not editable since code_type participates in the primary key for the fee_schedules table. You would have to remove that line and re-enter correctly if needed to make an edit to the Code or Code Type. It will then open up that CPT code/amount line. You can change the amount. <strong>The amount must be typed with 4 dollar digits, period, and then 2 cent digits.</strong> To make a specific dollar amount, the dollar amount must have 4 digits, then the period/decimal point, and then cents is 2 digits. Do not enter any dollar signs or anything else but numeric and a decimal point.

![](../fee-schedules.assets/6af6ddc3a4a35bdc5414fad837be107e.png)

* Click OK when done. When you are done editing ANY AND ALL CPT codes, you <strong>must click the SUBMIT CHANGES</strong> button at the very bottom to submit the final edits/changes, etc or nothing will be changed/saved/stored.

## Delete a CPT Code & Amount

Simply click the [ - ] minus button to the right of the cpt code/amount you wish to totally delete. It will put a strike-out line through it. Again, you **must click the SUBMIT CHANGES** button at the very bottom of the profile details listing to submit the final edits/changes/deletions you did or nothing will be changed/saved/stored for the profile you are in.

![](../fee-schedules.assets/d87e0ba8bde7d314ee54f4edfed43520.png)

![](../fee-schedules.assets/ca53aa89572fac41fc125bc15aefd110.png)

If you made a mistake, you can reverse and click the [ + ] plus sign (in the options column) to reverse the deletion (remove the strike-out). You can reverse whatever you like if you haven't clicked the SUBMIT CHANGES button yet.

## Attach a Specific Fee Schedule to Insurance Plans

In order to change or add any Fee Schedules, you must have security permission to Manage Fee Schedules. In order to change or add fee schedules to Insurance Plans, you must have security permission to Manage Insurance Plans.

Log into {{% system-name %}} . Click the CONTROL side menu tab. Then click the INSURANCE PLANS tab at the top.

![](../fee-schedules.assets/23444438958a56ced6f4494f49c65e9d.png)

Find the insurance plan you wish to tag to a Fee Schedule Profile. After you find the insurance plan, you click edit to the right of that specific insurance plan you want.

![](../fee-schedules.assets/36170fd4d3550ae9f9e5de81f9149dec.png)

After you click edit on the insurance plan, the *Edit Insurance Plan* screen will open. You can see the details and then set or change the *Fee Schedule Profile* field.

![](../fee-schedules.assets/7081f93a93f81467dcfb787b950cf512.png)

In the **Fee Schedule Profile** field, begin typing the name of the profile you want this insurance plan attached to. It will auto-complete you choices of fee schedule profiles that exist.

After you've selected a fee schedule profile and have it entered in that field, click the SAVE button at the bottom. It will give you a confirmation at the top that the insurance plan was updated successfully.

If you need to change/edit a profile an insurance plan has on it, just edit the insurance plan and select/type in the profile you wish to change it to. Then click the SAVE button at the bottom.

To **remove** a specific Fee Schedule Profile from a specific insurance plan entirely, edit the insurance plan and simply clear out (delete out) the profile name from that field. When the Fee Schedule Profile field is all blank, click the SAVE button at the bottom. That insurance plan then will not have that specific profile attached to it anymore. It uses the standard/default profile.

The prices you enter into the default fee schedule or any specific fee schedule can be shown on the encounter ‘view'/document or any other additional view the encounter creates. Contact your MIE Implementer to have this attribute added to the layout.

![](../fee-schedules.assets/a81e2564e124f3fd1c6a4777acc7ed51.png)

## Import Fee Schedules

You can use the *Data Import* tool in {{% system-name %}} to download your fee schedules and corresponding CPT codes into {{% system-name %}} quickly in mass. See other help documentation named *Data Import.pdf*.

![](../fee-schedules.assets/806907ca2e4721e8d45ae694ae19f7c0.png)
