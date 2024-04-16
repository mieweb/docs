---
id: '1GYFmbEH6_WAX9FHm6nAfTpxTCeVvx5NVvpAh1ZNdkUg'
title: 'To Restrict Report Access'
date: '2024-04-12T11:24:19.543Z'
version: 151
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1GYFmbEH6_WAX9FHm6nAfTpxTCeVvx5NVvpAh1ZNdkUg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
System Reports can be accessed, restricted to only allowed users or allowed departments, and managed by admins who have security permission to Manage System Reports (Add/Edit).

![](../to-restrict-report-access.assets/230f6ab5afe758343ecb4f893786d6d9.png)

Menu Items can be accessed, restricted to only allowed users or allowed departments, and managed by admins who have security permission to Manage Menu (Yes).

![](../to-restrict-report-access.assets/d09bc9c84cf849ffb19f654b9744f894.png)

If a report is restricted, it is configured to permit only allowed users and/or allowed departments of users the permission to run/access restricted reports.

## How to Restrict System Reports

Layouts and system reports are managed by the MIE Developers.  However, an admin (with appropriate security permission) can restrict or allow system reports to users and/or departments.

The name of the system report, that the general report points to, will be needed.  Please ask application support or your deployment consultant for additional help in finding the system report related to the report you wish to be restricted.

Admins with security permission to add/edit Manage System Reports, can go in the Control Panel, navigate to the **System Report** hyperlink in the list, or click on the **System** tab to select **System Report** sub-tab.

![](../to-restrict-report-access.assets/bebf033443fd7798331f1f433f36a564.png)

Begin typing the name of the system report and click **Search**. There may or may not be spaces in the name, but if you need any help, contact application support or your deployment consultant for additional help in finding the system report related to the report you wish to be restricted.  HINT: There is also an Advanced search method to find a specific system report.

In this guide, we will be restricting down the Sharps Log to be only allowed to be run by 2 specific end users.

![](../to-restrict-report-access.assets/0509c979f18f63e6c7419a19d680935c.png)

Once the system report has been located, click the **Edit** link found to the right, under the Options column. If the option is not available, ensure the admin has Add/Edit permission to Manage System Reports security.

![](../to-restrict-report-access.assets/45e5bad96f33cdcd4fc70bf2d4bd1aaa.png)

Once in edit mode on the system report, the system report SQL/HTML coding will display in black area, and you need to scroll down to the bottom/end of the system report.

The edit mode of the System Report will default to the *Report Info* view of the system report.

{{% warning %}}
It is very important not to manipulate, add, or make edits to the SQL/HTML of the report itself. Any programming changes can cause the system report to break. Only utilize this page to restrict the report and designate allowed users and/or realms.
{{% /warning %}}

To restrict a system report, locate and checkmark the **Restricted** checkbox and then utilize the **Allowed Users** and/or **Allowed Realms** (aka: departments) to set any allowed user(s) and/or realm(s)/department(s) to be able to run the report, thus does not allow anyone else to utilize/run the report.

![](../to-restrict-report-access.assets/75b0e0c124ae5b97c94dcef72986daad.png)

With the Restricted box checked, begin typing any *allowed* users and/or departments in the appropriate field and select. The allowed user and realm fields are auto-complete fields or drop-downs and you can only make selections from the choices, you cannot free-text. A restricted report can be allowed for entire realms/department or individual users as appropriate.  Populate as many as necessary. Any users or realms **not** listed as *allowed* will be restricted from this report.

![](../to-restrict-report-access.assets/b911125607573c391c8da19521e0128f.png)

{{% tip %}}
To remove an allowed user and/or department realm, simply highlight the name of the user/realm and click the **Remove** button, then save your work.

![](../to-restrict-report-access.assets/b2639be5145e7fd71c9dae3a5efcca97.png)
{{% /tip %}}

When all Allowed Users/Realms are added, simply click the **Save** button to save your work of restricting the report.  The SAVE button is found at the top of the system report screen.

![](../to-restrict-report-access.assets/1f791801c32d665afbbc71db22eddab8.png)

When an end user is restricted from this system report, they will be presented with the following message that they lack permission to run this report.  
![](../to-restrict-report-access.assets/36b74511bb107c07c705ffca18cf52b8.png)

Or the lack of permission to run the report may appear as a System Report Error message at the top right corner when they try to access/run a report, with a message that they are restricted from viewing the report.

![](../to-restrict-report-access.assets/5a4ca2acef0aaac93d76f6ff17c5979b.png)

{{% note %}}
If an end user has a security permission level of **Limit to Restricted Items** set to **Yes**, then the end user will not have access to even any other reports that are not restricted down (i.e., reports that do not have the Restricted box checked in the System Report editor).
{{% /note %}}

## How to Restrict Menu Items

Some reports are configured to appear as Menu Item tabs within the product.

Thus, the menu item tab can be restricted, instead of the actual system report itself.

![](../to-restrict-report-access.assets/d09bc9c84cf849ffb19f654b9744f894.png)

Admins with security permission to Manage Menu, can go in the Control Panel, navigate to the **Menu Editor** hyperlink in the list, or click on the **System** tab to select **Menu Editor** sub-tab.

![](../to-restrict-report-access.assets/e86623b483bf8ad1cdd307fbeef2efe5.png)

Begin typing the name of the report that is a menu item tab and click **Go**. HINT: utilize the criteria to be Contains or Begins With, etc.

In this guide, we will be restricting down the Account Details report to be only allowed to be run by 2 specific end users.

![](../to-restrict-report-access.assets/d1acc4c34881e4750c97da9c5ee00f11.png)

Once the menu item has been located, click the **Edit** link found to the right, under the Options column. If the option is not available, ensure the admin has Add/Edit permission to Manage System Reports security.

![](../to-restrict-report-access.assets/271eb55ee71602a34c69b7b1bc96a02d.png)

Once in edit mode, to restrict a menu item report, locate and checkmark the **Allow Access to Restricted Users** checkbox and then utilize the **Allowed Users** and/or **Allowed Departments** to set any allowed user(s) and/or realm(s)/department(s) to be able to access the report, thus does not allow anyone else to utilize/run the report.

![](../to-restrict-report-access.assets/375a04d5e83c1faf57534ba8ffbaeb98.png)

With the Restricted box checked, begin typing any *allowed* users and/or departments in the appropriate field and select. The allowed user and realm fields are auto-complete fields or drop-downs and you can only make selections from the choices, you cannot free-text.  A restricted report/menu item can be allowed for entire realms/department or individual users as appropriate.  Populate as many as necessary. Any users or departments **not** listed as *allowed* will be restricted from this report.

![](../to-restrict-report-access.assets/57b82c6f7596979c2f517e2da6d8ffe9.png)

{{% tip %}}
To remove an allowed user and/or department realm, simply click the [-] minut button next to the specific listed user/realm, then save your work.

![](../to-restrict-report-access.assets/8c4ea16257d3f3b5d00a3885f38efa21.png)
{{% /tip %}}

When all Allowed Users/Department realms are added to be allowed to the restricted menu item report, simply click the **Change** button to save your work of restricting the menu item report.

![](../to-restrict-report-access.assets/698218cb213e6e130997ee0b3f019540.png)

When an end user is restricted from a menu item tab, the tab will be hidden from their view since they are not allowed to it.  End users who do have allowed permission to the menu item tab, will be able to access the tab.  
![](../to-restrict-report-access.assets/845a54a4407e8a832bf7fb230ab1541e.png)

Or the lack of permission to run the report may appear as a System Report Error message at the top right corner when they try to access/run a report if the report (menu item tab) is still listed in the catch-all list of available reports, with a message that they are restricted from viewing the report.

![](../to-restrict-report-access.assets/3b83f0ba47074e40f7fe12e4eea8d7bc.png)
