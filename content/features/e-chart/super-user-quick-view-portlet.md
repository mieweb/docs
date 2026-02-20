---
id: '1BmYr0t8bGa-s4VYN7njufXX2PC2W_aiVsKdqtijk9rI'
title: 'Super User Quick View Portlet'
date: '2025-11-07T19:14:25.933Z'
version: 71
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/system-report-writing/'
  - 'https://docs.enterprisehealth.com/functions/e-sign-electronic-signature/pending-e-sign-reviews/'
  - 'https://docs.enterprisehealth.com/functions/task-management/task-list/'
  - 'https://docs.enterprisehealth.com/functions/system-configuration/'
  - 'https://docs.enterprisehealth.com/functions/system-configuration/chart-tabs/'
  - 'https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/'
source: 'https://drive.google.com/open?id=1BmYr0t8bGa-s4VYN7njufXX2PC2W_aiVsKdqtijk9rI'
wikigdrive: 'v2.16.0'
---
If you are a superuser and need access to view or edit the following areas of the Control Panel sidemenu, you will need additional security access to do so.

* Layout Manager
* Refer to Systems editor
* [System Report](https://docs.enterprisehealth.com/functions/system-administration/system-controls/system-report-writing/) manager
* System Settings editor
* Esign Editor ([E-Sign](https://docs.enterprisehealth.com/functions/e-sign-electronic-signature/pending-e-sign-reviews/) sidemenu)
* Tasklist Events ([Task List](https://docs.enterprisehealth.com/functions/task-management/task-list/) sidemenu)
* [System Configuration](https://docs.enterprisehealth.com/functions/system-configuration/)
* Portions of the [Chart Tabs](https://docs.enterprisehealth.com/functions/system-configuration/chart-tabs/) editor

When trying to access any of the areas listed above and you do not have additional SuperUser access, an error message will display.

![](./super-user-quick-view-portlet.assets/a4fba68e4425b66809e3f3e6a6e419b5.png)

{{% note %}}
Any SuperUser that requires a password to access those areas above should consult their MIE Implementer.
{{% /note %}}

To access and activate the SuperUser access required, the user must:

1. Add the<strong> SuperUser portlet</strong> to the [Quick View](https://docs.enterprisehealth.com/functions/e-chart/quick-view-sidemenu/) sidemenu.

![](./super-user-quick-view-portlet.assets/c5610c005797da5a621b3bcdb2fd56a7.png)

2. Next, locate the Super User portlet and click the <strong>Unlock for this Session</strong> button.

![](./super-user-quick-view-portlet.assets/61ad5e0ce1996c4bf2e93b729b75b55e.png)

3. Enter the password provided by your MIE Implementer.

![](./super-user-quick-view-portlet.assets/347c43109f714392da859fdfb80fab96.png)

4. Click the <strong>Enable</strong> button after keying in the password.
5. If successful, the button in the Super User portlet will display <strong>Super user access enabled</strong>. The super user can now go to those areas above, that were previously restricted.

![](./super-user-quick-view-portlet.assets/9e8dd2e78e50370e817a18587c444429.png)

6. If the system did not recognize the correct password, it will alert you to try again.

The password enables the logged-in superuser access to the areas mentioned above. In other words, after the superuser signs out, the superuser must re-enter the password into the portlet, in order to regain access to those areas. The password is not required for normal functionality.
