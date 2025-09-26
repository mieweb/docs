---
id: '1pU-zPBkTbVV3TguLxs3JphdGkgUUx2hqlb5hv7tIRTM'
title: 'Inbound Fax Queue - Setting User Access Permissions'
date: '2025-06-20T14:09:43.766Z'
version: 147
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1pU-zPBkTbVV3TguLxs3JphdGkgUUx2hqlb5hv7tIRTM'
wikigdrive: '0fcf231afc718eb196d7e9411fc515dfca8afcb6'
---
## Providing Access to Inbound Fax Queue

Adding a new user to access Inbound Fax Queue is a two step process.

The practice must give user(s) security permission to access the incoming file queue (inbound faxes).

This is done in *Access Control* then *Customize User Security.*

In Access Control, search and find the user you wish to set security privileges for Incoming Fax Queue.

When you find the user, click edit so you can get into the edit user ( ) screen. Once there, click *Customize User Security* link to set security for this specific user only.

![](../inbound-fax-queue-setting-user-access-permissions.assets/495aff1ea2229a10c3ba33c6e8cf07fb.png)

Next, you need to customize user security by setting the security permission for the user to have access to the **Incoming File Queue**. The security settings to change for a user are *Incoming File Queue and Permission Editor.*

Set these 2 security permissions for that user:

![](../inbound-fax-queue-setting-user-access-permissions.assets/64e60e32decb1da101c02a4ff6bdb851.png)

* <strong>Incoming File Queue:</strong>
    * <strong>No Access:</strong> Users cannot access the side-menu tab named Fax Q (cannot access Inbound Fax Queue)
    * <strong>View:</strong> Users can access the side-menu tab FaxQ, and can only view and print. Cannot do any other functions to batch/index, or delete, or distribute faxes in the queue. Users being tasked or emailed faxes also need to be set to at least View.
    * <strong>Manage:</strong> Users have full access to the FaxQ and all functions. Can view, delete, batch/index, and distribute faxes using categories in the queue.
* <strong>Permission Editor:</strong> Yes should only be for super-users of the practice. This setting allows these super-users to add and permit users to access each fax number. For other users, this should be set to No, so they cannot add other users to fax permissions in the Fax Q module.

## Add/Set Phone Number Permissions

The super-user must now give permission to that user to access each fax number where faxes come in for their practice. This is done in the Fax/file Q module side-menu tab.

From the Fax/file Q side-menu tab (or whatever your practice has this tab named as), you will need to setup *Phone Number Permissions* for the user.

Once in the Fax Q side-menu tab, click the Mappings link.

![](../inbound-fax-queue-setting-user-access-permissions.assets/ab18548d825c41a6ab4d2c5104e53831.png)

This displays all the users with phone number permissions.

To add a user to an incoming fax#, click Mapping link at the top right corner.

![](../inbound-fax-queue-setting-user-access-permissions.assets/691105e17c9d440c2b1072c405c64dab.png)

The Add Recipient window will display. The super-user will fill out this section to allow a user to a practice's fax number so they can process faxes coming into that specific fax # for their practice. Users need to be set there to even be able to see the file if they are emailed or tasked.

![](../inbound-fax-queue-setting-user-access-permissions.assets/908c8f28339e23bccc32c8184d6d2c1c.png)

* <strong>Recipient:</strong> Select the fax number for your practice that you want this new user to have access to. It should display in the drop-down. If the fax number does not show in the drop-down, then you need to manually type the entire 10-digit fax number in the field below.
* <strong>Or add recipient:</strong> If no recipient exists, use this box to add a new one.
* <strong>Department:</strong> Select the department to map this recipient to from the dropdown list.

Click SAVE button when done and that user is permitted to that incoming fax number now.

If the user needs access to multiple fax numbers that your practice has, then you need to do the above steps multiple times for each specific recipient fax number. Click SAVE each time.

{{% note %}}
If you get a duplicate error here, this means that the user is already set to permission to that recipient fax number. You may want to search and see what fax numbers that user has permission to then (see additional help instructions below in the Search to See User(s) Fax Number Permissions.)
{{% /note %}}

## Inactivate a Mapping from Incoming Fax Queue

If you need to inactivate a mapping, you can do so by the following steps. Inactivating a mapping from the IFQ will restrict them from seeing faxes coming in for that specific fax number(s) you inactivate them from. You may want to change their customized user security permissions also.

Once in the Fax/file Q side-menu tab, click the Mappings link.

![](../inbound-fax-queue-setting-user-access-permissions.assets/ab18548d825c41a6ab4d2c5104e53831.png)

This displays all the mappings.

Click on the checkbox next to the recipient you wish to inactivate.

![](../inbound-fax-queue-setting-user-access-permissions.assets/ed6abf430459194aeb882a4c31bf6731.png)

Click on the **Set Status** button to display the Set Status window. Click the *No* radio button in the **Active** field to Inactivate the status. Click the **Save** button. Once saved the Recipient is now Inactive.

![](../inbound-fax-queue-setting-user-access-permissions.assets/5a25e718aff3ff3b9b26119bf2b86441.png)

## Search Recipient Fax Numbers

From the Fax Q side-menu tab (or whatever your practice has this tab named as), click the Mappings link.

![](../inbound-fax-queue-setting-user-access-permissions.assets/ab18548d825c41a6ab4d2c5104e53831.png)

This displays all the recipient mappings.

To search by recipient, select the dropdown list and click on the recipient fax number and then click the **Search** button.

![](../inbound-fax-queue-setting-user-access-permissions.assets/0c0afbbbf3c8da7d6c8a189c1d2f65e8.png)

This will display the specific recipient that was selected below.

![](../inbound-fax-queue-setting-user-access-permissions.assets/1e11c68210b92bd763dd2910261bca10.png)
