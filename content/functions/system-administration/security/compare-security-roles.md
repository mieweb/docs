---
id: '1DFDthKvl-iaNZmubDGL_exlWTRn_hHElIjEOUqWKoQo'
title: 'Compare Security Roles'
date: '2020-02-27T20:25:20.019Z'
version: 47
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1DFDthKvl-iaNZmubDGL_exlWTRn_hHElIjEOUqWKoQo'
wikigdrive: '028c9969b6de1b1821f0b338eb112d2421a13029'
---
Click *Control* tab from left sidebar menu.  
Click *Security Role Editor* tab from top menu.  
Click the Compare Roles link found at the top right corner. This allows you to compare security roles and each individual security setting that each may have. If you need to audit security or configure a new security role, you can work on all your roles at the same time while you compare them.
![](../compare-security-roles.assets/36301d9734bf19736b90557dac458f44.png)
It displays (reports) on the security settings, values and security roles along with the # of users that are tied to each specific security role.

* <strong>Module</strong> is the module in {{% system-name %}} that the security setting affects.
* <strong>Security</strong> is the specific security setting name (description).
* <strong>Values</strong> are the complete list of all possible settings that security option (permission) offers.

The next columns are each of the security roles you have in your {{% system-name %}} system along with the user count for the security roles. Below each security role column, it shows the value that the security role is set to for a specific security.  
It shows the first 20 securities/modules by default.
![](../compare-security-roles.assets/c11a26aaf9b608fe5c4bbd5f3bbabad5.png)
If you see blank security and values, those are old security settings. They are still stored in the database, but not used anymore in {{% system-name %}} . If you clicked on one of these, you would see an error message.
![](../compare-security-roles.assets/1cadf42787da435897c705f8cef21bf5.png)

## Compare/Show Specific Security Roles

You can choose what roles to display on your screen for a side by side comparison.  
By default, the screen automatically opens and displays *all* security roles in their own column. This can be quite large.  
So, to narrow down and compare specific security roles, click the **Roles to Display** button in the fields at the top.
![](../compare-security-roles.assets/507bfbd595ab8b50085f485eab848b0c.png)
A box will open where you can check-mark the specific security roles you want to display. You can un-select all to start fresh, or you can select all security roles to display, or individually check-mark which specific security roles you want to display and compare settings of.
![](../compare-security-roles.assets/047798c78d3e8cb19e60531ab2c357a6.png)
Once done with your selections, click the SEARCH button to the right.  
This will now display your search results for only those selected specific security roles you check-marked.  
When a security role has been created, but not configured (has no settings saved) it will be omitted from the security role compare report since it will have nothing to report.

## Search for Specific Security

You can search for a specific security setting name or module by typing in a keyword or partial characters in the search field provided at the top.  
Type in a keyword of the security setting name (description) or module you are looking for. The below example shows I am searching for any security settings to do with *fax*. After typing in a keyword or partial word, click the SEARCH button.  
It will display only those security settings with that in the security name (description) and/or module if it finds any matches.
![](../compare-security-roles.assets/eb30adaff2db436fb594eb816b547284.png)

## Edit/Change Security Settings for Security Role

You can choose what security roles to display as a side by side comparison on your screen by check-marking specific roles to display. You can also search for specific security names/permissions to show using the search field.  
In the example below, I searched for keyword of fax. It then displays the 4 security permissions {{% system-name %}} has regarding ‘fax' that it found as a match.
![](../compare-security-roles.assets/eb30adaff2db436fb594eb816b547284.png)
Upon looking at what that security role is set to, I can edit the security permission from here easily and in mass for every user in a specific security role.  
If you have security permission, you can change the value for a security role.  
Once you click on a value, it turns into a drop-down where you can choose a new value (new security option). It updates instantly.  
In the example below, we decide to deny the nurse's ability to stop faxes anymore in {{% system-name %}} . I click the *yes* value in their Nursing column for that specific stop fax security (because that is what they are currently set to—Yes they can Stop Faxes) and then that drop-down opens to show a No or Yes drop-down. I change it to No.  
When you use the drop-down to change the value for a security role in the drop-down is saved/changed immediately.  
See other help documentation named *Security Role Settings.pdf* for detailed information on what each security setting and value means and affects.
![](../compare-security-roles.assets/0c89137502add0031c4f94fdcdb7b058.png)
When you change a value for a security role, it does not input a comment for each change.  
The Show CSV link will download what you are showing/viewing/comparing on your screen and put it into an excel spreadsheet that you can view, print, save, sort, etc.
![](../compare-security-roles.assets/2223f38646eac0b497a2d1f8efe47535.png)
![](../compare-security-roles.assets/5218d8de5e715e29215f59f776389164.png)
