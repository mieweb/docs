---
id: '1_wsrlxxeNCZJC_c-ZUajGFEEsgiZ8bpGuIo5JRwXU60'
title: 'System Maintenance Lockout'
date: '2025-08-27T13:47:28.218Z'
version: 36
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1_wsrlxxeNCZJC_c-ZUajGFEEsgiZ8bpGuIo5JRwXU60'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
System Administrators now have the ability to enable/disable a system lock that locks out system users and displays a system wide message informing the user that the system is currently undergoing maintenance. The feature is available to customers on version RC202403 and newer.

The system must have the System/Maintenance/Lock system setting enabled (disabled by default).

![](../system-maintenance-lockout.assets/53d681617b5777a234876e4d4c38b1cf.png)

In conjunction with the system setting, the administrator must have the security setting to manage *System Maintenance* set to ‘Yes' (default is set to No).

![](../system-maintenance-lockout.assets/93b3814b55de347b23171504e120b6f8.png)

Once both the system setting and security setting are configured, the administrator may enable/disable the system maintenance lock out message from the System Maintenance portlet (Quick View). Click the Enable Maintenance Mode button to enable the lock out feature.

![](../system-maintenance-lockout.assets/e4ced277de60a8539444745024eb5d8e.png)

A Success message will display confirming that the system maintenance mode has been enabled.

![](../system-maintenance-lockout.assets/afe82eeee58b3c6cc4ae7db77efae0f5.png)

End users that attempt to log in when enabled will see the following message. This message is also translatable.

![](../system-maintenance-lockout.assets/5ae08bcd19f53761ee07bb380faabb53.png)

To disable the message, return to the System Maintenance portlet (Quickview) and click the Disable Maintenance Mode button.

![](../system-maintenance-lockout.assets/1696f6b34126f71ab8d20229fb165557.png)

A Success message will display confirming that the system maintenance mode has been disabled.

![](../system-maintenance-lockout.assets/5e03d771dae159827af523a36896385a.png)

End User Experience:  
If users are still viewing the System Maintenance page when the setting has been disabled, the user will be notified that the maintenance is complete and provided a button to refresh their browser and either login or return to their previous logged in session.

![](../system-maintenance-lockout.assets/c3c0ae9bb40b2ac9b80f82a6cceafba7.png)
