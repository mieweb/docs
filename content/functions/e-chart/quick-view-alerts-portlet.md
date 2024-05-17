---
id: '186D5E2YzP5S2VzWpfh0w1LGZRRTIKXE32MdKPDITglY'
title: 'Quick View - Alerts Portlet'
date: '2024-05-17T14:41:43.441Z'
version: 84
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/'
  - 'https://system'
  - 'quick-view-sidemenu.md'
  - 'https://system/?f=layout&module=Warnings&name=AlertsPage&tabmodule=none'
  - 'https://system/?f=admin&t=faxman'
  - '../fax-manager/fax-manager-tab-outbound-faxing.md'
  - 'https://system/?m=admin&t=printman&tabmodule=admin&tabselect=Print+Mgr'
  - '../system-administration/system-controls/print-manager.md'
  - 'https://system/?m'
  - 'https://system/?func=dicom&dcfunc=queue'
  - '../document-management/imaging/dicom-setup-tab.md'
source: 'https://drive.google.com/open?id=186D5E2YzP5S2VzWpfh0w1LGZRRTIKXE32MdKPDITglY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
There is an interactive [Quick View](https://system/) available to end users. The Quick View offers various summary portlets that are used as quick references for viewing modules and data in {{% system-name %}} .  For example, your pending tasks, the appointment schedule, worklists, dashboards, and the like are types of portlets available for quick access and management. You can select which specific portlets to show on your view. One of the portlets is **Alerts**.

When logged into {{% system-name %}} , click on the [Quick View](https://system) sidemenu option.

![](../quick-view-alerts-portlet.assets/cefccd4aeee20ae3b55f821ead371d35.png)

When in Quick View, default portlets will display, but there is an option to customize the Quick View for yourself if have the appropriate security permissions.

## Alerts Portlet

The **Alerts** portlet of the [Quick View](https://system/) shows a summary of each failed module name (what type of job failed), as well as a column of who the failed jobs are designated to. **Me** means the failed job was something the logged-in user had rendered to send. **Everyone** means the failed job was something another user in the system rendered to send.

![](../quick-view-alerts-portlet.assets/2ff3f71478bc69ad8ee63ae082b39f8b.png)

If you do not see the Alerts portlet in the Quick View tab, simply click the **Select Portlets** and select the **Alerts** portlet, then save. The selected portlets will display on the Quick View screen ,and you can move them around in the order you wish them to display.  Refer to other [Quick View Sidemenu](quick-view-sidemenu.md) help guide for more information regarding the {{% system-name %}} Quick View.

![](../quick-view-alerts-portlet.assets/be8cae33239e369fa98febd6d77f5563.png)

## Alerts Notification Toolbar

An **Alerts** link and a counter are shown on the notification toolbar, so that the logged-in user can quickly see a count of the errors from the Print, Fax, Dicom and DataSend modules, generated for the logged-in user. If the logged-in user's **Show Alerts** [My Settings](https://system/) preference set to system, then the alert in the notification toolbar will also display a count including any errors system-wide, including the logged-in user's print or fax or dicom or failed jobs.

![](../quick-view-alerts-portlet.assets/3311caa15e64d773c6a1f78a272853ed.png)

## Alerts/Errors Dashboard

Clicking the [Manage Information](https://system/?f=layout&module=Warnings&name=AlertsPage&tabmodule=none) icon in the **Alerts** portlet of the Quick View, or clicking the **Alerts** link in the notification toolbar at the top, will take you to the Alerts/Errors dashboard to view and work any failed jobs.

![](../quick-view-alerts-portlet.assets/7afe29ac0a9f26a6208914bb6a79d22f.png)

The Alerts/Errors dashboard is where you can view the specific failed job details and work any failed jobs, if needed.

![](../quick-view-alerts-portlet.assets/1cc24151a8fc0a1045db173c6ca9fca2.png)

Once you are in the Alerts/Errors screen, the alerts will display, based on the preference you have set.  If you are set to only show your own alerts/errors, then that is what will display.

### Select Portlets

The **Alerts** portlet is comprised of 4 individual portlets. The 4 individual portlets are **Print Alerts**, **Fax Alerts**, **AutoSend Item Alerts** and **DICOM Alerts**. Users may arrange the Alerts/Errors dashboard in any order they wish, or remove portlets no longer needed.  Simply click the **Select Portlets** link found in the top-right of the Alerts/Errors dashboard.

![](../quick-view-alerts-portlet.assets/faf5c4f72d859448634f710b47913dd9.png)

{{% tip %}}
Even though you can change the dashboard to display in 2 or more columns, it is recommended you display the dashboard in a one-column format.  This allows users to see the entire sections, along with the options in order to work them from this dashboard.

![](../quick-view-alerts-portlet.assets/ca5c619c4fc5686a6b47a16708b73b53.png)
{{% /tip %}}

When done setting the portlets for the Alerts dashboard, click the **Save** button. When refreshed, users can then move the portlets around on the screen, as needed. You can still move the portlets in a different order, even in one column viewing.

### Preferences

To change the Alert/Errors preferences, click the **Preferences** link on the [Alert/Errors dashboard](https://system/?f=layout&module=Warnings&name=AlertsPage&tabmodule=none).

![](../quick-view-alerts-portlet.assets/0041c01127ab28807d8447bca83b3e1b.png)

From the Preferences pop-up screen, some {{% system-name %}} preference settings will display, so that you can change your selections as needed and click the** Save** button.  The two preferences that are tied to the Alerts/Errors dashboard and notifications are the **Show Alerts** and the **Show Alerts For** preferences.

![](../quick-view-alerts-portlet.assets/a6c166ec6ce84fe6021ea8e3c173ae71.png)

## Fax Alerts

The **Fax Alerts** portlet shows any failed faxes for the logged in user, or system-wide, based on the preference setting. Users can **Resend** the failed fax, **Acknowledge**, or **Stop** the fax from the portlet. Users can also click the **Manage Information** icon within the Fax Alerts portlet.

![](../quick-view-alerts-portlet.assets/78a9ba397d88be78ec88c5b811290a69.png)

Clicking the [Manage Information](https://system/?f=admin&t=faxman) icon will take you to the **Fax Manager** tab of the sidemenu. This is where usres can see the **Error Fax Spool**, with the specific details of the failed fax jobs and all the specific options available for working failed faxes.  For more information on this screen and how to work failed faxes, reference the [Fax Manager Tab](../fax-manager/fax-manager-tab-outbound-faxing.md) documentation.

![](../quick-view-alerts-portlet.assets/3b7140630fdf5efbfe46e63c8c568517.png)

Another way to view details on a failed fax job, or get to the Fax Manager, is to click [Failed Fax Jobs](https://system/?f=admin&t=faxman) when looking at the Alerts portlet of Quick View. The portlet displays a quick summary of the failed jobs, but the failed items on the Alerts portlet provide hyperlinks to take users to the Fax Manager more easily, instead of from the Alerts/Errors main dashboard.

![](../quick-view-alerts-portlet.assets/dfb5c1ad8bff10d7c7618ce5de1f3fb3.png)

## Print Alerts

The **Print Alerts** portlet shows failed print jobs for the logged-in user or system-wide, based on the preference setting. Users can view the failed print jobs from this screen and click the **Job ID** to see the details of the specific print job. And users can delete the print job from here, as well. You can also click the **Manage Information** icon within the Print Alerts portlet, as needed.

![](../quick-view-alerts-portlet.assets/df901ce2d918a2f7a263414473365304.png)

Clicking the [Manage Information](https://system/?m=admin&t=printman&tabmodule=admin&tabselect=Print+Mgr) icon will take you to the **Print Manager** tab of the sidemenu. This is where users can see the **Error Print Spool**, with specific details of the failed print jobs, along with the option to delete the failed print jobs, as needed. When viewing a specific print job from the Job ID, users can reprint so that a view of what was to print will be generated. For more information on this screen and how to work failed print jobs, reference the [Print Manager](../system-administration/system-controls/print-manager.md) documentation.

![](../quick-view-alerts-portlet.assets/19fcd0acd01003b9be8cd0c06159987a.png)

Another way to get to the Print Manager is to click [Failed Print Jobs](https://system/?m) when in the Alerts portlet of Quick View. The portlet displays a summary of failed jobs, but the failed items in the Alerts portlet provide hyperlinks to take users to the Print Manager quick and easily.

![](../quick-view-alerts-portlet.assets/aadd1b3bf64af4d54d208d6d07ab8634.png)

## DICOM Alerts

The **DICOM Alerts** portlet shows failed DICOM jobs for the logged-in user or system-wide, based on the preference setting.  The {{% system-name %}} system must be setup for DICOM functionality for this portlet to be useful. You can view the specific failed DICOM jobs from this portlet.

![](../quick-view-alerts-portlet.assets/d4bea9ea39c8ecd9ba39bdc5d9ee5d69.png)

Clicking the [Manage Information](https://system/?func=dicom&dcfunc=queue) icon will take you to the **DICOM Setup** tab. This is where users can see the **Failed** category, with specific details of the failed DICOM jobs and their respective **Request ID**s. For more information on this screen and how to work failed DICOM jobs, reference the [Dicom Setup Tab](../document-management/imaging/dicom-setup-tab.md) documentation.

![](../quick-view-alerts-portlet.assets/0718aba669933a74195e24648f79e809.png)

Another way to get to the DICOM Setup tab is to click [Failed DICOM Jobs](https://system/?func=dicom&dcfunc=queue) when in the Alerts portlet of Quick View. The portlet displays a summary of failed jobs, but the failed items on the Alerts portlet provide hyperlinks to take users to the DICOM Setup tab quickly and easily.

![](../quick-view-alerts-portlet.assets/841d2b226405105825686768f908a0e7.png)

## Auto-Send Items Alerts

The **Auto-Send Item Alerts** portlet shows failed datasend jobs for the logged-in user or system-wide, based on the preference setting. The {{% system-name %}} system must be set up for auto-routes and auto-send functionality for this portlet to be useful. Options are also available to perform an **Acknowledge**ment, **Resend**, or **Deactivate** en masse, if necessary.

![](../quick-view-alerts-portlet.assets/47bc7bc3ed9076c866488ca71b0e784a.png)

* <strong>Acknowledge</strong>: Clicking this after an autoroute has failed indicates you acknowledge it errored out, removing it from the queue.

{{% note %}}
If information, or document or chart info, ever changes or gets updated, then the auto-send route will be resent.
{{% /note %}}

* <strong>Resend</strong>: Clicking this will attempt to resend the failed route.
* <strong>Deactivate</strong>:  Clicking this means that you no longer want the errored route to be sent and wish it to never try sending again.

If you wish to work the data-send/auto-route failures en masse, select each failed route and use the drop-down **Select Error Routes** to select an option that will be applied to all that were checked.

![](../quick-view-alerts-portlet.assets/41357050c184fc345378258d2521a7c9.png)

Clicking the [Manage Information](https://system/?func=dicom&dcfunc=queue) icon will take you to the **DataSend Queue** tab. This is where you can then see the **Error Routes** category, with specific details of the failed auto-send routes and the specific Route IDs.

![](../quick-view-alerts-portlet.assets/08032f0b5f3f4e3d92c75f936e4efec8.png)

There is a **Break Sending Lock** security option for MIE Help Support. This option is for routes marked as **Sending** in the [DataSend Queue](https://system/?func=dicom&dcfunc=queue). This feature allows the unlocking of any routes which have been stuck for more than an hour. Users wishing to have this ability will need the **Unlock Sending Routes** security permission enabled. In the case of a coding error, routes can become stuck in the **In Progress** status. The Break Sending Lock option allows MIE Help Support, or others with the necessary permissions, to retry these stuck routes without reverting to a backend tool.

![](../quick-view-alerts-portlet.assets/7a79f8c922d4bac4b730414fb034c4e1.png)

Another way to get to the DataSend Queue tab is to click [Failed Auto-Send Items](https://system/?func=dicom&dcfunc=queue) when in the Alerts portlet of Quick View.  The portlet displays a summary of failed sends, but the failed items in the Alerts portlet provide hyperlinks to take users to the DataSend Queue tab quickly and easily.

![](../quick-view-alerts-portlet.assets/098ac46fae5c933b8d4880808dbb67d4.png)

## No Pending Alerts

If there are no failed jobs for any of the 4 categories, then the portlet will display the message **No pending alerts**.

![](../quick-view-alerts-portlet.assets/bd3b5258483d42d58572b08a524a37d0.png)
