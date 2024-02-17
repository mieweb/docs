---
id: '1pU-zPBkTbVV3TguLxs3JphdGkgUUx2hqlb5hv7tIRTM'
title: 'Inbound Fax Queue - Setting User Access Permissions'
date: '2021-06-22T13:11:30.338Z'
version: 78
lastAuthor: 'ssmith'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1pU-zPBkTbVV3TguLxs3JphdGkgUUx2hqlb5hv7tIRTM'
wikigdrive: '028c9969b6de1b1821f0b338eb112d2421a13029'
---


## Providing Access to Inbound Fax Queue

Adding a new user to access Inbound Fax Queue is a two step process.  
The practice must give user(s) security permission to access the incoming file queue (inbound faxes).  
This is done in *Access Control* then *Customize User Security.*  
In Access Control, search and find the user you wish to set security privileges for Incoming Fax Queue.  
When you find the user, click edit so you can get into the edit user ( ) screen. Once there, click *Customize User Security* link to set security for this specific user only.
![](../inbound-fax-queue-setting-user-access-permissions.assets/69694e4c420117bf433d9322ecdefd34.png)
Next, you need to customize user security by setting the security permission for the user to have access to the **Incoming File Queue**. The security settings to change for a user are *Incoming File Queue and Permission Editor.*  
Set these 2 security permissions for that user:
![](../inbound-fax-queue-setting-user-access-permissions.assets/9a833ed1f4a2ad411adf69b9ad342811.jpg)

* <strong>Incoming File Queue:</strong>


   * <strong>No Access:</strong> Users cannot access the side-menu tab named Fax Q (cannot access Inbound Fax Queue)
   * <strong>View:</strong> Users can access the side-menu tab FaxQ, and can only view and print. Cannot do any other functions to batch/index, or delete, or distribute faxes in the queue. Users being tasked or emailed faxes also need to be set to at least View.
   * <strong>Manage:</strong> Users have full access to the FaxQ and all functions. Can view, delete, batch/index, and distribute faxes using categories in the queue.


* <strong>Permission Editor:</strong> Yes should only be for super-users of the practice. This setting allows these super-users to add and permit users to access each fax number. For other users, this should be set to No, so they cannot add other users to fax permissions in the Fax Q module.


## Add/Set Phone Number Permissions

The super-user must now give permission to that user to access each fax number where faxes come in for their practice. This is done in the Fax/file Q module side-menu tab.  
From the Fax/file Q side-menu tab (or whatever your practice has this tab named as), you will need to setup *Phone Number Permissions* for the user.  
Once in the Fax Q side-menu tab, click the Recipient Permissions button.
![](../inbound-fax-queue-setting-user-access-permissions.assets/a1af3687034a259b300d3bd565eaf12f.png)
This displays all the users with phone number permissions.  
To add a user to an incoming fax#, click Add link at the top right corner.
![](../inbound-fax-queue-setting-user-access-permissions.assets/0c02525bfd3013354ebebe0649ae2f8a.png)
The IFQ (Incoming File Queue) Permission screen will display. The super-user will fill out this section to allow a user to a practice's fax number so they can process faxes coming into that specific fax # for their practice. Users need to be set there to even be able to see the file if they are emailed or tasked.
![](../inbound-fax-queue-setting-user-access-permissions.assets/45b13b245241f5ae5c73ed70188cc20f.png)

* <strong>Recipient:</strong> Select the fax number for your practice that you want this new user to have access to. It should display in the drop-down. If the fax number does not show in the drop-down, then you need to manually type the entire 10-digit fax number in the field to the right of the drop-down.
* <strong>User:</strong> Begin to type in the user's <strong>last name</strong> and it will auto-complete to give you choices. You must select the user from the auto-complete.
* <strong>Send Email:</strong> Most practice's do not check-mark this. If you check-mark this for the user, make sure there is an email typed in for the user in their username screen (back in Control tab). When/if this is check-marked, that user will then receive an email each and every time a fax comes in at this fax number.

Click SAVE button when done and that user is permitted to that incoming fax number now.  
If the user needs access to multiple fax numbers that your practice has, then you need to do the above steps multiple times for each specific recipient fax number. Click SAVE each time.

{{% note %}}
If you get a duplicate error here, this means that user is already set to permission to that recipient fax number. You may want to search and see what fax numbers that user has permission to then (see additional help instructions below in the Search to See User(s) Fax Number Permissions.)
{{% /note %}}

## Delete a User from Incoming Fax Queue

If you need to delete a user from being able to see and work on faxes from a fax number(s) for your practice, you can do so by the following steps. Deleting a user from the IFQ Permissions will restrict them from seeing faxes coming in for that specific fax number(s) you delete them from. You may want to change their customized user security permissions also.

{{% warning %}}
If a user terminates from the practice, you must delete that user from this Incoming File Queue permission also. Deleting or inactivating a user from the username screen doesn't carry over to this module (see additional help instructions below in the **Delete a User from IFQ Permissions**).
{{% /warning %}}

From the Fax Q side-menu tab (or whatever your practice has this tab named as), you will need to delete *Phone Number Permissions* for the user you want to delete/restrict now.
Once in the Fax/file Q side-menu tab, click the Recipient Permissions button.
![](../inbound-fax-queue-setting-user-access-permissions.assets/a1af3687034a259b300d3bd565eaf12f.png)
This displays all the users with phone number permissions.
To find out which fax numbers the user you need to delete has access to, click on the **Last Name** column title. This will sort the list alphabetically by last name. Find your user in that list and see which fax numbers they are tied to.
![](../inbound-fax-queue-setting-user-access-permissions.assets/b4203570072c17a7f533551df19401ab.png)
Click the Delete link in the options column to delete that user from that recipient fax number. You must delete each one at a time if the user is tied to multiple fax recipient numbers.
Once you click delete, it will ask you if you are sure you want to delete that user from the recipient fax number.
![](../inbound-fax-queue-setting-user-access-permissions.assets/a4cfebec1d9e111c9eea2aa322cbefd9.png)
Click the SAVE button to delete that user from that fax recipient number you selected. It will delete the user from being permitted to that incoming fax number. If the user is permitted on another fax number you have at your practice, you must delete each one at a time. Search again by last name and delete that user when found on the next one.

## Search User Fax Number Permissions

If you need to see which fax number a user has access to see and work on faxes for your practice, you can do so by the following steps.
OR
If you need to see which users have access to a specific incoming fax number for your practice, you can do so by the following steps.
From the Fax Q side-menu tab (or whatever your practice has this tab named as), you will need to delete *Phone Number Permissions* for the user you want to delete/restrict now.
Once in the Fax/file Q side-menu tab, click the Recipient Permissions button.
![](../inbound-fax-queue-setting-user-access-permissions.assets/a1af3687034a259b300d3bd565eaf12f.png)
This displays all the users with phone number permissions to all recipient fax numbers.
To search by user and see which fax numbers the user has access to, click on the **Last Name** column title. This will sort the list alphabetically by last name. Find your user in that list and see which fax numbers they are tied to.
![](../inbound-fax-queue-setting-user-access-permissions.assets/b4203570072c17a7f533551df19401ab.png)
To search by specific fax number and see all users that have access to that specific fax number, use the drop-down at the top left. Select the specific fax number from the drop-down. This will sort the list of users tied to that specific recipient fax number only. See how many and which users are permitted to that fax number.
![](../inbound-fax-queue-setting-user-access-permissions.assets/74a705db74c814c4e47448bef1ee876d.png)
