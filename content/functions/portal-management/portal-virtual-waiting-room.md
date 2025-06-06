---
id: '1Fd2U9H2oVYLZTFlV-O14M0Do4xnMGP9rufSET8OhIZo'
title: 'Portal Virtual Waiting Room'
date: '2025-05-14T20:06:45.377Z'
version: 63
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Fd2U9H2oVYLZTFlV-O14M0Do4xnMGP9rufSET8OhIZo'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
The Portal Virtual Waiting Room feature can be configured on db's on RC202509 or newer. The Portal Virtual Waiting Room allows clients to mitigate the risk of high login usage by portal users. The virtual waiting room utilizes a queue that tracks login attempts in order received. The portal will display a message to end users letting them know they are in queue and how many people are in line ahead of them.

![](../portal-virtual-waiting-room.assets/9cb7e721f4bb1626e7a09d08afdc521f.png)

Once the user is allowed to login, the page will refresh and the user may now select their portal and log in (for SSO) or login in with login/password credentials (for non-SSO).  If the user does not login (claim their login token in the waiting room queue) within the time defined in the "Active Time" system setting, then that user will lose their place in the queue (lose their login in token) and the next user in the queue will be allowed to log in.

![](../portal-virtual-waiting-room.assets/e88208fa5d32530a46893162290830f6.png)

## System Settings

Three system settings are used to configure the virtual waiting room. The system virtual waiting room url, Active Time and Portal Max Active Logings.

**Virtual Waiting Room URL:** This is the URL to a virtual waiting room where portal users can park when there are too many active sessions in the system. This setting is used in conjunction with the settings 'Active Time' and 'Portal Max Active Logins'.

**Active Time:** This setting is used in a new layout based waiting room. The value entered in this setting defines the number of minutes of inactivity until the application considers a login no longer active.

**Portal Max Active Logins:** This setting is used in a new layout based waiting room. The value entered defines the number of active users allowed before the portal users will be sent to a virtual waiting room to wait for room on the server. 'Active' is determined by another setting: System, Virtual Waiting Room, Active Time.

![](../portal-virtual-waiting-room.assets/0dc956bee9d62d7dc54a307d89dde286.png)

## Monitoring

The Virtual Waiting Room Portlet can be turned on to view additional information regarding logins and users in the queue.

![](../portal-virtual-waiting-room.assets/6692a6b5740215e9e5eea8c319bd2d11.png)

![](../portal-virtual-waiting-room.assets/eb8855e351423cd7d59cb9ccc8d208e2.png)

**Active Logins:** The number of users logged in the db.

**Allowed Active Logins:** This is the max number of active portal logins (as defined in the System Setting).

**Users In Queue:** This item displays the number of active users in the queue. A bulleted list also displays a brief list of the next users in line and the date/time stamp of the user was admitted into the queue. The next person in line will display at the top of the bulleted list. Once the user successfully logs in, they will fall off the portlet list.

When the user completes their business on the portal and either logs out or closes their browser, the portal they give up their login to the next person in the queue.

Any new users attempting to login the portal when the max logins have been reached will always fall at the end of the waiting queue list. They are not able to skip the front of the queue.
