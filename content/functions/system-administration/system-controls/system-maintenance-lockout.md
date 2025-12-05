---
id: '1_wsrlxxeNCZJC_c-ZUajGFEEsgiZ8bpGuIo5JRwXU60'
title: 'System Maintenance Lockout'
date: '2025-12-02T16:08:15.827Z'
version: 81
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1_wsrlxxeNCZJC_c-ZUajGFEEsgiZ8bpGuIo5JRwXU60'
wikigdrive: 'v2.15.30'
---
Identified System Administrators have the ability to enable/disable a system wide lock for specific needs such as maintenance or while something is being configured.  Enabling a system wide lock will display a system wide message informing all other users that the system is currently undergoing maintenance and will not allow users to log into the system until the maintenance lock is disabled.  Any identified System Admins that have security permission to System Maintenance=Yes, will still be able to log into the system normally and manage any maintenance lock. The feature is available to customers on version RC202403 and newer.

## System Maintenance Lock - User Experience

If a system is locked for maintenance by a System Admin with permission to lock the system, users will immediately be displayed a message that the *system is currently undergoing maintenance. Please wait while we complete the updates*.  Users are not able to login nor access the system until the maintenance lock is disabled.

![](./system-maintenance-lockout.assets/ebb46efc1531e115dfdcd8d6eff19b72.png)

Once the system maintenance lock is disabled by a permitted system admin, users will immediately be displayed a message that the *maintenance is complete.  The system is now available*. Users can refresh the page or click the *Refresh Page* button and will be able to log back into the system for use.

![](./system-maintenance-lockout.assets/710847c02533c24faf698faf1d316346.png)

NOTE: System Admins with security permission to System Maintenance (Yes permission) will still be able to log into the system normally even if the system is in maintenance lock mode.  This allows those permitted system admins to manage any system maintenance locks.

## Managing System Maintenance Lock - System Admins with Permission

To enable or disable a system maintenance lock, System Admin(s) must have the security role permission for *System Maintenance* set to ‘Yes' (default is No).

![](./system-maintenance-lockout.assets/676617a6747b208c39456b1798256c94.png)

### Enable a System Maintenance Lock

To enable a system wide maintenance lock, the permitted System Admin can go to the Quick View sidemenu tab, then to Select Portlets.  Select the *System Maintenance* portlet to be shown on the dashboard and save.

![](./system-maintenance-lockout.assets/29dd4e6dbb53ca1883c891175593721e.png)

The Quick View sidemenu dashboard will refresh to display the *System Maintenance* portlet for the permitted System Admin.  Click the *Enable Maintenance Mode* button to immediately lock the system into maintenance mode for all users.

![](./system-maintenance-lockout.assets/5c747782b5936b658b51aa27c44b204a.png)

Once the permitted System Admin clicks the *Enable Maintenance Mode*, the system admin will see a Success pop-up message stating that the *System maintenance mode is enabled*.  The permitted system admin can simply click the OK button and continue to work where needed in the system.

![](./system-maintenance-lockout.assets/7e79b5f22cf49f8342df936a8dc498c7.png)

The system is now in locked maintenance mode and other users will get the message that *the system is currently undergoing maintenance.  Please wait while we complete the updates*.

![](./system-maintenance-lockout.assets/ebb46efc1531e115dfdcd8d6eff19b72.png)

NOTE: the permitted system admin is not locked out of the system.  The permitted system admin can continue to work in the system where needed, while other users (who are not permitted to system maintenance security role permission) are locked out of the system.

### Disable a System Maintenance Lock

To disable a system wide maintenance lock, the permitted System Admin can go to the Quick View sidemenu tab, then to Select Portlets.  Select the *System Maintenance* portlet to be shown on the dashboard and save.

![](./system-maintenance-lockout.assets/29dd4e6dbb53ca1883c891175593721e.png)

The Quick View sidemenu dashboard will refresh to display the *System Maintenance* portlet for the permitted System Admin.  Click the *Disable Maintenance Mode* button to immediately unlock the system from maintenance mode for all users.

![](./system-maintenance-lockout.assets/0cd20d91e5d976992470cee986937493.png)

Once the permitted System Admin clicks the *Disable Maintenance Mode*, the system admin will see a Success pop-up message stating that the *System maintenance mode is disabled*.  The permitted system admin can simply click the OK button and continue to work where needed in the system.

![](./system-maintenance-lockout.assets/87ac080c366888d349ce249685e33199.png)

The system is now unlocked from maintenance mode and other users will get the message that *the maintenance is complete. The system is now available.*  The users can refresh the page or click the Refresh Page button and be able to access the system to continue working.

![](./system-maintenance-lockout.assets/710847c02533c24faf698faf1d316346.png)

## System Setting - System / Maintenance / Lock

The enabling and disabling of a system maintenance lock is tracked via a system setting *System / Maintenance / Lock*.  When a system admin enables and disables a system maintenance lock via the portlet, the associated system setting enables or disables and tracks the user who did it along with the modified date and time. System settings for a system are only permissible by superusers with specific security access.

### Associated System Setting Lock - Enabled

![](./system-maintenance-lockout.assets/75d283e100beb808464572ac633d7ee3.png)

### Associated System Setting Lock - Disabled

![](./system-maintenance-lockout.assets/e0470f63f81d754f825965883994fc69.png)

## System Maintenance Communication Wording

The wording for the *System Maintenance* screens that users see is default verbiage.

![](./system-maintenance-lockout.assets/8f69a84f99d7092139104dba9cce5d8c.png)

However, your system can be configured to display different customized verbiage if needed.  The system layout for *Maintenance Notice* is where the verbiage for those system wide messages is managed.

![](./system-maintenance-lockout.assets/a2bf812271ecdf4b02e8ce137e93302b.png)
