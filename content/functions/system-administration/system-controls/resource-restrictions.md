---
id: '1nnCVxIGqtmtRT3b6tppaIYa3e7iKEVVyz73HYdLR6cY'
title: 'Resource Restrictions'
date: '2024-05-21T16:45:19.958Z'
version: 151
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1nnCVxIGqtmtRT3b6tppaIYa3e7iKEVVyz73HYdLR6cY'
wikigdrive: '374e2f95757c2b9977f9b36d40698a54d4b4c0a4'
---
The **Resource Restrictions** tab in the Control Panel allows configuration and does **not** restrict user(s) and/or department(s) from scheduling appointments to any resources that are restricted.  The restricted resource configuration only stops unallowed user(s) and/or unallowed department(s) from viewing the appointment details (appt types, reasons, comments etc) for scheduled appointments that they themselves did not schedule under that resource.

A restricted resource's viewable scheduled appointments can be limited to individual users and/or to departments. The restrictions apply only to the configured resource, and resources that are not configured to be restricted, in the Resource Restriction tab, are not restricted from any users.

Resource Restrictions can be used to prohibit users from viewing sensitive scheduled appointments and details.

## Configuring Resource Restrictions

To start, access the **Resource Restrictions** tab in the control panel.

![](../resource-restrictions.assets/8785ad9f674f91053e62cacc27b6132b.png)

The *Resource Restrictions* tab contains an auto-complete field that is directed to list resources tied to the department specified in the Scheduling Realm system setting.

![](../resource-restrictions.assets/03b9479abc373813e6e4b58e57a0f9a5.png)

Unless customized, typically the system setting is pointing to the Scheduling Resources department of users.

![](../resource-restrictions.assets/9551ce73676a72ff3296925abf087fcf.png)

One can hit the down arrow key, on the keyboard, to see a list of all resources tied to the Scheduling Realm department for selection.

![](../resource-restrictions.assets/39fa1628ec7113b1c02e977595771305.png)

To configure a resource to be restricted, begin typing in the last name of the Resource.  The field is an autocomplete. Select the name of the user profile in the Scheduling Realm. If a user name does NOT auto-complete any choices, check the Access Control tab to ensure that the desired resource's user profile is a member of the department that the Scheduling Realm system setting is pointed to.

![](../resource-restrictions.assets/ee29abb852f74acbcaf4f597ca7bb515.png)

Once the Resource populates, select it, and click the "Search" button. This will refresh the page to show the configuration fields.

![](../resource-restrictions.assets/a96c0b2ec0b40ea413ec6adf8cfcab5e.png)

The page then displays 4 sections:

* <strong>Allowed Users</strong>  - Can key in individual users that are allowed access to view appointments and details on the restricted resource. Allowed users will have access to view appointment details for that restricted resource.  Click the Add button to save selections.
* <strong>Allowed Departments</strong> – Can key in entire departments that are allowed access to view appointments and details on the restricted resource. Any user that is a member of that department will have access to view appointment details for that restricted resource. Click the Add button to save selections.
* <strong>Reason for Change</strong> – This is a required field to document the reason for the restriction or restriction change. This information will be saved in the Revision History of the restriction for future reference.
* <strong>Revision History</strong> – Can see a history of revisions to the selected resource restriction.

When all needed fields are complete, click the **Submit Changes** button to create the restriction.

![](../resource-restrictions.assets/f47b290f59f221f29e721772b2269357.png)

Once the restriction is submitted, the screen will refresh and the list of allowed users will now display the user who added them, as well as the date and time of addition. The same information will also be displayed in the Revision History section.

![](../resource-restrictions.assets/3faa5ca34133595e10d1f2b0cfa69c52.png)

## Editing Existing Restrictions

From Resource Restrictions found in the Control Panel, search for the resource that needs editing. Type in their last name by using the autocomplete to select the specific resource. Click "Search" to refresh the screen and displays the existing listings of *allowed* users and *allowed* departments for that specific restricted resource.

![](../resource-restrictions.assets/19ce858e35303d60d6ea7c6c9b30cfa2.png)

Utilize the - buttons to remove users or departments that should no longer have access. Add new allowed users or allowed departments with the "Add" buttons that *should* have permission to view appointment details for the restricted resource. Record the reason for the change, then click the Submit button to save your work.

![](../resource-restrictions.assets/6589f9ca45f875a0d5dc41a38240327e.png)

Example of what a user would see if *allowed* to a restricted resource:

![](../resource-restrictions.assets/ec92af0b01776b228e0ba378d85c3cb1.png)

Example of what a user would see if restricted from (not allowed to) a resource:

Note: scheduled appointments and details for a restricted resource show as *unavailable* on the scheduled appointment slot.

![](../resource-restrictions.assets/99f60af051e0dcbd3a5fcaff26661a68.png)

Example of what a user would see if restricted form (not allowed to) a resource, but also the user has scheduled an appointment under that restricted resource (can see the details of an appointment they themselves scheduled on a restricted resource):

![](../resource-restrictions.assets/48d58a623d545e78e7fbc78f6747967a.png)
