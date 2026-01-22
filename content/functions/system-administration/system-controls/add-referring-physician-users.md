---
id: '1yKC2c9EtO3QjCF8EoLF52NjXzXSlSOxQv9_d4cmU7Tc'
title: 'Add Referring Physician Users'
date: '2025-11-11T21:08:37.087Z'
version: 95
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/user-provider-and-department-management/'
source: 'https://drive.google.com/open?id=1yKC2c9EtO3QjCF8EoLF52NjXzXSlSOxQv9_d4cmU7Tc'
wikigdrive: 'v2.15.30'
---
Must have security permissions to be able to add/edit/delete users

## Search if the Referring Physician is in the System

First, please do a search in your {{% system-name %}} system to confirm that this referring physician has not already been added in your system.

Click *Control Panel* tab on the left sidebar menu.

Click *Access Control* tab at the top

It will pop-up the list of departments your system has.

You can search for a referring physician by typing in the last name portion of the referring physician's last name and make sure you are searching by **name** filter, or you can click the specific department name to view all the referring physicians listed in the Ref (referring) Physicians department.

![](./add-referring-physician-users.assets/3e4b8f7abddd1666eed3d6cd6847b74a.png)

In the Search box at the top of the Access Control tab you are in:

* <strong>Criteria:</strong> leave as ‘Begins With'
* <strong>Search:</strong> If you are searching for a specific referring physician's last name, start typing in their last name (first few letters).
* <strong>BY:</strong> field would be selected to <strong>‘name'</strong>.

Click the GO box to the right.

The system will then show your search results below the search fields on the screen. It will display any matches to the specific search and by category you selected.

If you do not find the referring physician already entered into the system, continue to add them as a new user.

## Add a Referring Physician

Click *Control* on the left sidebar menu.

Click *Access Control* tab at the top

Click the [ Add Chart ] link on the far right side.

![](./add-referring-physician-users.assets/fe89a4e6df07732f850782ef8be28c1e.png)

Add the Patient Registration details. Last Name, First Name and Date of Birth are required. Depending on your system settings, Organization may be required as well. Click the Add New button when finished.

![](./add-referring-physician-users.assets/381bdd8d3beef7f82d6a80d928662f1b.png)

From the Summary Tab on the Patient Chart, click the pencil icon on the User Information field.

![](./add-referring-physician-users.assets/b942167e4ba8cc95eb812221a6d3b550.png)

When adding a Referring Physician, please fill out only the below fields. These are all that are needed/required.

![](./add-referring-physician-users.assets/dfc28ddf01dc4cb4c9ced126b327b5ba.png)

* <strong>Username:</strong> Can leave this blank. They are not a ‘user' accessing your system, they do not need a username.

Fill out only the fields below…

* <strong>Primary Dept:</strong> Must select Referring Physician department here (or Ref Physicians).
* <strong>Current Status:</strong> Must change to be Login Disabled.
* <strong>Def. User Role:</strong> This is the default user role. Must set this to Referring Physician. Many modules (ex: scheduler) pull referring physicians from this field, so it is important this is set.

![](./add-referring-physician-users.assets/680477841cb283183ee2cc3f43d90af5.png)

* <strong>First Name:</strong> Type in the referring physician's first name.
* <strong>Last Name:</strong> Type in the referring physician's last name.
* <strong>Degree:</strong> Type in the referring physician's credentials/degree (ex: MD, FACCS, etc)
* <strong>Address1, City, State, Postal Code:</strong> Enter all information for this referring physician if you have it.
* <strong>Preferred Route:</strong> If your practice uses encounters (point & click exams) and faxes documents to referring physicians, you must set this preferred route to be FAX. If your practice/system uses DIRECT sending (due to Meaningful Use requirements) you would set this to <em>Direct Email</em> and make sure you obtain the providers direct email in the <em>Email</em> field.
* <strong>Work Number:</strong> Enter the referring physician's phone number (must include area code) if you have it.
* <strong>Fax Number:</strong> Enter the referring physician's fax number (must include area code) if you have it. If you use encounters (point & click exams) and fax documents to referring physicians, this field must be entered.
* <strong>Email:</strong> Make sure to key in the provider's <em>direct email</em>. DIRECT email is a specific type of email address for meaningful use requirements to exchange documents via "direct" thru an exchange. If the provider has a "direct" email, key it in here and make sure the "preferred route" field is set to <em>Direct email</em>. Otherwise you can key in a general provider's email here and the preferred route would be "fax".

Those are all the fields you enter in the username screen.

Then scroll down to the bottom and checkmark the **matching department** that you set above.

You will have to check-mark Referring Physicians (or Ref Physicians).

![](./add-referring-physician-users.assets/f78ad4264569c033d7262c861002a5e3.png)

Click **Submit Insert** at the bottom.

At the very top will say in blue "user () was updated successfully". Or, it will give you an error and tell you what it is and you can go back in and edit fields to the user you just created.

![](./add-referring-physician-users.assets/dbc9534d89446fc9098577e6ca899bcc.png)

You can quickly tag multiple users (in mass) to a specific department by going to "View Department" and using the listedit & autocomplete feature there. See help documentation titled [Adding A Department](https://docs.enterprisehealth.com/functions/system-administration/system-controls/user-provider-and-department-management/) for more information.

![](./add-referring-physician-users.assets/29353992fc60f3041d7c61bbfcae93b2.png)
