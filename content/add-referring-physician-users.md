---
title: "Add Referring Physician Users"
date: 2020-02-27T20:18:08.784Z
url: "add-referring-physician-users.md"
author: Alan Quandt
id: 1yKC2c9EtO3QjCF8EoLF52NjXzXSlSOxQv9_d4cmU7Tc
source: https://drive.google.com/open?id=1yKC2c9EtO3QjCF8EoLF52NjXzXSlSOxQv9_d4cmU7Tc
menu:
    main:
        name: "Add Referring Physician Users"
        identifier: "1yKC2c9EtO3QjCF8EoLF52NjXzXSlSOxQv9_d4cmU7Tc"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4460
---
Must have security permissions to be able to add/edit/delete users

## Search if the Referring Physician is in the System

First, please do a search in your {{% system-name %}} system to confirm that this referring physician has not already been added in your system.

Click *Control* tab on the left sidebar menu.

Click *Access Control* tab at the top

It will pop-up the list of departments your system has.

You can search for a referring physician by typing in the last name portion of the referring physician's last name and make sure you are searching by **name** filter, or you can click the specific department name to view all the referring physicians listed in the Ref (referring) Physicians department.

![](external_files/25deb033047e4d1339f3d3127c7d7b18.png)

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

Click the [ Add User ] link on the far right side.

![](external_files/891e99407cf23ee665dcc7220179a783.png)

When adding a Referring Physician, please fill out only the below fields. These are all that are needed/required.

![](external_files/3ab67e390c6f002023d26a6f9b7d6d8f.png)

* <strong>Username:</strong> Can leave this blank. They are not a ‘user' accessing your system, they do not need a username.

Fill out only the fields below…

* <strong>Primary Dept:</strong> Must select Referring Physician department here (or Ref Physicians).
* <strong>Current Status:</strong> Must change to be Login Disabled.
* <strong>Def. User Role:</strong> This is the default user role. Must set this to Referring Physician. Many modules (ex: scheduler) pull referring physicians from this field, so it is important this is set.

![](external_files/ad70ff7c95eac474cafeb0a0e0c28640.png)

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

![](external_files/263977624b27befec551c1795e218de8.png)

Click **Submit Insert** at the bottom.

At the very top will say in blue "username successfully added". Or, it will give you an error and tell you what it is and you can go back in and edit fields to the user you just created.

You can quickly tag multiple users (in mass) to a specific department by going to "View Department" and using the listedit & autocomplete feature there. See help documentation titled *Adding A Department.pdf* for more information.

![](external_files/bf8f5bcfc945dfec54a79ab2ff3d681d.png)

