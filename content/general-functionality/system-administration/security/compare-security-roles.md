---
title: "Compare Security Roles"
date: 2020-02-27T20:25:20.019Z
url: "general-functionality/system-administration/security/compare-security-roles.html"
version: 20
id: 1DFDthKvl-iaNZmubDGL_exlWTRn_hHElIjEOUqWKoQo
source: https://drive.google.com/open?id=1DFDthKvl-iaNZmubDGL_exlWTRn_hHElIjEOUqWKoQo
menu:
    main:
        name: "Compare Security Roles"
        identifier: "1DFDthKvl-iaNZmubDGL_exlWTRn_hHElIjEOUqWKoQo"
        parent: "15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY"
        weight: 5250
---
Click *Control* tab from left sidebar menu.

Click *Security Role Editor* tab from top menu.

Click the Compare Roles link found at the top right corner. This allows you to compare security roles and each individual security setting that each may have. If you need to audit security or configure a new security role, you can work on all your roles at the same time while you compare them.

![](../../../external_files/cd78fe3793e8f0f65d3db1e0935cd7e1.png)

It displays (reports) on the security settings, values and security roles along with the # of users that are tied to each specific security role.

* <strong>Module</strong> is the module in {{% system-name %}} that the security setting affects.
* <strong>Security</strong> is the specific security setting name (description).
* <strong>Values</strong> are the complete list of all possible settings that security option (permission) offers.

The next columns are each of the security roles you have in your {{% system-name %}} system along with the user count for the security roles. Below each security role column, it shows the value that the security role is set to for a specific security.

It shows the first 20 securities/modules by default.

![](../../../external_files/1610e4e15a7a159928b98b29c178a9c0.png)

If you see blank security and values, those are old security settings. They are still stored in the database, but not used anymore in {{% system-name %}} . If you clicked on one of these, you would see an error message.

![](../../../external_files/057619e87623f2a047795d3378b7efc1.png)

## Compare/Show Specific Security Roles

You can choose what roles to display on your screen for a side by side comparison.

By default, the screen automatically opens and displays *all* security roles in their own column. This can be quite large.

So, to narrow down and compare specific security roles, click the **Roles to Display** button in the fields at the top.

![](../../../external_files/28d641b76f0daf63a4ffcffd289c86c9.png)

A box will open where you can check-mark the specific security roles you want to display. You can un-select all to start fresh, or you can select all security roles to display, or individually check-mark which specific security roles you want to display and compare settings of.

![](../../../external_files/6328e03706c9e751b362cbe7f8640b6d.png)

Once done with your selections, click the SEARCH button to the right.

This will now display your search results for only those selected specific security roles you check-marked.

When a security role has been created, but not configured (has no settings saved) it will be omitted from the security role compare report since it will have nothing to report.

## Search for Specific Security

You can search for a specific security setting name or module by typing in a keyword or partial characters in the search field provided at the top.

Type in a keyword of the security setting name (description) or module you are looking for. The below example shows I am searching for any security settings to do with *fax*. After typing in a keyword or partial word, click the SEARCH button.

It will display only those security settings with that in the security name (description) and/or module if it finds any matches.

![](../../../external_files/1411ec4348d3ed77a3a332ec507a5563.png)

## Edit/Change Security Settings for Security Role

You can choose what security roles to display as a side by side comparison on your screen by check-marking specific roles to display. You can also search for specific security names/permissions to show using the search field.

In the example below, I searched for keyword of fax. It then displays the 4 security permissions {{% system-name %}} has regarding ‘fax' that it found as a match.

![](../../../external_files/1411ec4348d3ed77a3a332ec507a5563.png)

Upon looking at what that security role is set to, I can edit the security permission from here easily and in mass for every user in a specific security role.

If you have security permission, you can change the value for a security role.

Once you click on a value, it turns into a drop-down where you can choose a new value (new security option). It updates instantly.

In the example below, we decide to deny the nurse's ability to stop faxes anymore in {{% system-name %}} . I click the *yes* value in their Nursing column for that specific stop fax security (because that is what they are currently set to—Yes they can Stop Faxes) and then that drop-down opens to show a No or Yes drop-down. I change it to No.

When you use the drop-down to change the value for a security role in the drop-down is saved/changed immediately.

See other help documentation named *Security Role Settings.pdf* for detailed information on what each security setting and value means and affects.

![](../../../external_files/6e33b31b6484c9bfba3689a9fd176050.png)

When you change a value for a security role, it does not input a comment for each change.

The Show CSV link will download what you are showing/viewing/comparing on your screen and put it into an excel spreadsheet that you can view, print, save, sort, etc.

![](../../../external_files/a5c09d89afa7fd446e64c93ef7a595ea.png)

![](../../../external_files/8288b5a1c30c4c6a6fe03ff00efe6e5a.png)

