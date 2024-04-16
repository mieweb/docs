---
id: '1JqNA5VF59NNFfR1yoDYA-woQj0Ovw7XkHh_BazY4cK8'
title: 'Linking Users for Portal Access'
date: '2020-03-25T18:42:13.576Z'
version: 78
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1JqNA5VF59NNFfR1yoDYA-woQj0Ovw7XkHh_BazY4cK8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Each user intending to access a web-based portal must be granted access by way of the {{% system-name %}} system. This can be done by linking the appropriate user accounts with their corresponding charts, manually, via the {{% system-name %}} Access Control editor; otherwise, this can be automated through the import of an HR file. By linking the user account with the appropriate charts and establishing the role of the user, portal access can be configured for all users, accordingly. In addition to ensuring that the appropriate user accounts are linked to their corresponding charts and the roles are established, a chart must also have the appropriate Provider Organization relationship established. To begin linking users, manually, perform the following:

{{% note %}}
All users needing access to the portal will need an email listed in their account profile (which can be added when the portal user is first creating their portal account), and the **Def. User Role** field must be set to **User-Limited Access**.
{{% /note %}}

{{% info %}}
It is important to note that this documentation is geared towards those systems in which a user account exists in addition to its corresponding chart. The user accounts are typically created automatically via an HR feed or an upload of an eligibility file. In cases where a portal is being set up for a database, where the user accounts have not been created, development would need to be involved to get user accounts created and mapped to each corresponding chart, all the while ensuring the appropriate user roles are set in each user account, and the appropriate provider organization relationship is set in the chart.
{{% /info %}}

## Manually Link Users to Access Portal

1. Navigate to the {{% syslink "Control Panel" "f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin" %}}  on the side menu.
2. Click the  {{% syslink "Access Control" "f=admin&t=security&tabmodule=admin&tabselect=Access&ts_caption=Access+Control" %}} tab.
3. To locate the user being granted access to the portal, use the search field and filters as needed, and click the <strong>Go</strong> button.
4. Click the <strong>Edit</strong> link in the <em>Options</em> column of the appropriate user.
5. Locate and click the <strong>Edit Patients Linked to User</strong> link in the upper-right of the screen.

{{% note %}}

Once the page loads, ensure the user has two roles listed in their user account:

* The user should be listed with the role of <strong>Self</strong>; and
* He/She should be listed with the role of <strong>Portal/NoMoreClibboard User</strong>.

{{% /note %}}

6. If the user does not have two roles listed in their user account:
    1. Begin typing the user's last name into the <strong>Patient Name</strong> field. Using the autocomplete, select the user.
    2. Using the dropdown, set the user's role to <strong>Self</strong> and/or <strong>Portal/NoMoreClipboard User</strong>, depending on current configurations.
    3. Click the <strong>Add</strong> button for each role added.
7. After all changes have been made, click the <strong>Submit</strong> button.

{{% tip %}}
To remove a role from the table, utilize the minus [ - ] button. After all changes are made, click the **Submit** button.
{{% /tip %}}

8. To add the appropriate provider organization relationship to the chart, navigate to the <strong>Contacts</strong> portlet on the <em>Patient Summary</em> screen. Click the <strong>Manage Information</strong> icon, and add the appropriate Provider Organization relationship to the chart.

## Linking Users to a Supervisor

Linking users to their supervisor allows the supervisor to log into the Supervisor Portal and see employee restrictions, lost time, and work status; this is in addition to seeing their own personal information. To begin linking users to a supervisor, perform the following:

1. Navigate to the <strong>Control Panel</strong> on the side menu.
2. Click the <strong>Access Control</strong> tab.
3. To locate the supervisor, use the search field and filters as needed, and click the <strong>Go</strong> button.
4. Click the <strong>Edit</strong> link in the <em>Options</em> column of the appropriate user.
5. Locate and click the <strong>Edit Patients Linked to User</strong> link in the upper-right of the screen.

{{% note %}}

Once the page loads, ensure the user is listed in the table twice:

* The supervisor should be listed with the role of <strong>Self</strong>; and
* He/She should be listed with the role of <strong>Portal/NoMoreClipboard User</strong>.

{{% /note %}}

6. Begin typing the last name of a subordinate into the <strong>Patient Name</strong> field. Using the autocomplete, select the user profile.
7. Using the dropdown, select the <strong>Portal/NoMoreClipboard User</strong> role.
8. Click the <strong>Add</strong> button.
9. Repeat step 6, and select the <em>same</em> user.
10. Using the dropdown again, this time select the <strong>Supervisor</strong> role.
11. Click the <strong>Add</strong> button.
12. Repeating steps 6-12, add the remaining subordinates.
13. When finished, click the <strong>Submit</strong> button.
