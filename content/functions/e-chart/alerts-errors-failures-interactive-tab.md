---
id: '121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc'
title: 'Alerts, Errors, Failures - Interactive Tab'
date: '2020-02-27T21:12:37.185Z'
version: 65
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'patient-summary-interactive-chart-tab.md'
  - '../fax-manager/fax-manager-tab-outbound-faxing.md'
source: 'https://drive.google.com/open?id=121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
An Alerts link and counter is shown at the top summary toolbar. It gives a count of the errors from the Print, Fax, Dicom and DataSend modules for the logged in user or for users in the entire system. The alert count link in this top toolbar disappears when the count is zero and reappears when the count is greater than zero. Two user preferences manage this error alert feature.

An alert shows at the top when there is a print, fax, data-send (auto-routes) or Dicom failure/error based on your preferences.

![](../alerts-errors-failures-interactive-tab.assets/7349a2d34fbd1a7489402f541c0d2697.png)

The Alert errors link and view are managed by two MY SETTINGS preference which apply only to you, the logged in user. By default, the alerts top toolbar link is turned **on** (*Show Alerts* is set to SHOW). You can turn this off by changing the MY SETTINGS preference for *Show Alerts* to ‘hide'.

![](../alerts-errors-failures-interactive-tab.assets/f58110790d1620f9b9867e7d249d2df1.png)

The other MY SETTINGS preference for this feature is whether to show the alert errors for your jobs that errored out (SELF) or to show the jobs that errored out for the entire system (SYSTEM) which is all other users that may have had a job error out. If set to show alerts for only SELF, any print jobs, fax jobs, auto-routes, etc that *you* performed and they errored out, the alert errors will show the count for jobs that errored out done by you only. If you have the *Show Alerts For* set to SYSTEM, then you will be alerted and shown the alert count and all alert errors for jobs that errored out done by any and all users in your practice's {{% system-name %}} system. This preference sets the alerts to display only the current logged in user's alert errors or show alert errors for the whole system. By default, this preference is set to **SYSTEM**, but you can change it to SELF to just alert you of your own alert errored jobs.

![](../alerts-errors-failures-interactive-tab.assets/cabd63c297c5f2ae20f5f60e3da7a8e0.png)

Some practices use email alerts to alert themselves of a failed fax, etc. This alert error count feature notifies you visibly in the top summary toolbar of any failed faxes, failed print jobs, failed DICOM jobs, failed DataSend (auto-routes) without having to have an email account to be able to alert you. The alerts show up in {{% system-name %}} and are easily accessed for viewing and working any failed jobs that need attention.

The Alert feature can also be found and accessed in the Quick View sidemenu tab page. However, your {{% system-name %}} system may not have this sidemenu tab named Quick View. Contact your MIE Implementer if you wish to have that sidemenu tab programmed onto your system. Otherwise, the only way to access Alert/Errors is by the alerts link at the top toolbar.

![](../alerts-errors-failures-interactive-tab.assets/5bf4d1eb546d9a89cc4216dc67c2cf6b.png)

The Alerts summary module from the Quick View tab shows a summary of each failed module name (what type of job failed) and also shows a column of who the failed jobs are designated to. **Me** means the failed job was something you had rendered to send. **Everyone** means the failed job was something someone else rendered to send (if you preference is set to show alerts for ‘system').

![](../alerts-errors-failures-interactive-tab.assets/faf3103744c83bd2bc68167ab47f8612.png)

If you do not see the ALERTS module in the Quick View tab, simply click Select Modules from this tab and checkmark the section named *Alerts*, then save your Quick View tab modules. The modules you have check-marked will display on your Quick View screen and you can move them around in the order you wish to display for your view. This is similar to the Interactive Patient Summary tab. (See additional help on how to move modules around, set columns and collapse these modules on your screen view in our [Interactive Summary Patient Chart Tab](patient-summary-interactive-chart-tab.md) online help documentation).

![](../alerts-errors-failures-interactive-tab.assets/596263e651bcdbcd7ae51cdcd378b06c.png)

If you click the *Manage Information* icon from the alerts module in the Quick View, you will be taken to the Alerts/Errors tab to view and work any failed jobs.

![](../alerts-errors-failures-interactive-tab.assets/259786b2a98931b2b6bb1f5b62c11f85.png)

If you click the *Alerts* link at the top summary toolbar, you will also be taken to this Alerts/Errors screen to view and work any failed jobs. Which ever method you use, the Alerts/Errors screen is where you can view the specific failed job details and work any failed jobs. This screenshot shows the failed categories in a 2 column format, however we recommend you keep in a one column format so you can see the entire section and options and work them from this summary screen.

![](../alerts-errors-failures-interactive-tab.assets/388661d56bbd7643c053e40f24ccde76.png)

Once you are in the Alerts/Errors screen, the alerts will show specific to the preference you have set. If you are set to only show your own alerts/errors, then that is all that will display.

You can make the Alerts/Errors screen look how you want it and arrange in the order you wish. Simply click the Select Portlets link found at the top right of the Alerts/Errors screen and checkmark the alert/error modules you wish to show on your screen. You can also set the number of columns you wish them to display on the screen.

{{% tip %}}
We recommend keeping the ‘alerts' module in 1 column view because if you set it to 2 columns or more, the alert summary for each failed print job, each fax failed job, etc is wider than the columns allow and you won't be able to see the quick links to work on a failed job right there from the summary screen. When done, click the SAVE button and when refreshed back to the Alerts/Errors screen, you can move your modules around on your screen to your liking. You can still move the modules around to your specific order even in one column viewing.
{{% /tip %}}

![](../alerts-errors-failures-interactive-tab.assets/8451fbed9f8dfef0e4a3b68b7519f571.png)

When you are in the Alerts/Errors screen, you can click on the *Manage Information* link in any specific alert category you want to work. The *Manage Information* icon is the pencil/paper icon at the top right of each category. You can also use the other icons to collapse the category, move them around to a different display order, or delete the category from your view.

![](../alerts-errors-failures-interactive-tab.assets/a1f7b62465c574a313eb67cf7eb49757.jpg)

To change your alert/errors preferences, there is a link provided from the screen that you can click and change your preferences quickly from this page. Click the Preferences link found at the top right corner of the Alerts/Errors screen.

![](../alerts-errors-failures-interactive-tab.assets/732d7aea910dd173a8685b0ae0d34b14.png)

Once you click the preferences link, some {{% system-name %}} preference settings will display and you can change your selections and click the SAVE button. The two preferences that are tied to this Alerts/Errors screen are the *Show Alerts* and the *Show Alerts For* preferences.

![](../alerts-errors-failures-interactive-tab.assets/5100e907069d0d90d81a96d01826d3c9.png)

## Fax Alerts

The fax alerts portlet shows any failed faxes, based on your preference that rendered from {{% system-name %}} . You can re-send the fax. acknowledge or stop fax from this screen. You can also click the *Manage Information* icon from the top right of this Fax Alert portlet.

![](../alerts-errors-failures-interactive-tab.assets/873d3eb0cbe6c1ba0e7aadb84b3bcc88.png)

If you click the *Manage Information* icon, it will take you to the Fax Manager tab. This is where you can then see the ERROR FAX SPOOL category and listing in full and other specific options to work the failed fax. For more information on this screen and how to work failed faxes, see our [Fax Manager Tab-Outbound Faxing](../fax-manager/fax-manager-tab-outbound-faxing.md) help documentation.

![](../alerts-errors-failures-interactive-tab.assets/2ca8f8c3f3e15080472b08a23f82b908.png)

If you click the Failed Fax Jobs link from the Quick View tab, it will also take you to the Fax Manager tab (above screenshot).

![](../alerts-errors-failures-interactive-tab.assets/3c0a69ccab7df9f9448f9b983b88a970.png)

## Print Alerts

The print alerts portlet shows any print jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed print jobs from this screen and click the *job id* to see the specific print job. And you can delete the print job from here. You can also click the *Manage Information* icon from the top right of this Print Alert portlet.

![](../alerts-errors-failures-interactive-tab.assets/9c9a53c23f6c044bfaa0f08b2ddc5c55.png)

If you click the *Manage Information* icon, it will take you to the Print Manager tab. This is where you can then see the ERROR PRINT SPOOL category and listing in full and can click on the job id to see the specific print job and reprint or use the delete option to delete the failed print job.

![](../alerts-errors-failures-interactive-tab.assets/02729edcb4deaea0bad8c0d38c0a26b7.png)

If you click the Failed Print Jobs link from the Quick View tab, it will also take you to the Print Manager tab (above screenshot).

![](../alerts-errors-failures-interactive-tab.assets/1190c84ca41cf62aa69dce22a97a646a.png)

## DICOM Alerts

The dicom alerts portlet shows any dicom jobs, based on your preference that rendered from {{% system-name %}} and failed. You can see the specific failed dicom jobs from this screen. You can also click the *Manage Information* icon from the top right of this Dicom Alert portlet. Cancelled DICOM routes are omitted from Alerts portlet.

![](../alerts-errors-failures-interactive-tab.assets/a6cdb4a83da73a5fc9abffed39151890.png)

If you click the *Manage Information* icon, it will take you to the Dicom Setup tab. This is where you can then see the FAILED/ERROR dicom category and listing in full to work any failed dicom send job by the resend/cancel links.

![](../alerts-errors-failures-interactive-tab.assets/3fb4767fe5cc6ebf46a53f4c1ba5d345.png)

If you click the Failed DICOM Items link from the Quick View tab, it will also take you to the Dicom Setup tab (above screenshot).

![](../alerts-errors-failures-interactive-tab.assets/627ddf495a35d703b2c2fd319b1bd347.png)

## Auto-Send Items Alerts

The sent items alerts portlet shows any data-send/auto-route jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed alert jobs from this screen and use the quick link and drop-down to perform an acknowledgement, resend, or deactivate in mass for the failed send jobs. Or you can individually work those failed items. You can also click the *Manage Information* icon from the top right of this Sent Items Alert portlet.

**Acknowledge:** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes then the information will be resent.

**Deactivate:** means that you no longer want the error to be sent and to never try again.

![](../alerts-errors-failures-interactive-tab.assets/41c12677fa2ae69553a17a67cf445c91.png)

If you wish to work the data-send/auto-route failures right there, you can use the *Select Error Routes* All or None option link and set the desired drop-down function and perform that selection to all the items in the failed sent items queue.

![](../alerts-errors-failures-interactive-tab.assets/1a18944c96be4fb4196ca338c5ab0796.png)

If you click the *Manage Information* icon, it will take you to the Data Send Queue tab. This is where you can then see the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../alerts-errors-failures-interactive-tab.assets/bbf296b603d12365bd95fd3182815ce9.png)

When you click the ‘Manage Information' icon from the Auto-Send Item Alerts portlet, you will be taken to the Data Send Queue tab.

This is where you can then see routes in progress, pending routes, completed routes, and the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../alerts-errors-failures-interactive-tab.assets/ba5e14335260700f582495a7b2a26d6a.png)

There is a security option for MIE/Tech support named "Break Sending Lock" option for Routes marked as ‘Sending' in the DataSend Queue. This feature allows the unlocking of any ‘stuck' route which has been stuck for more than an hour. Users wishing to have this ability will need the new E-Chart permission: "Unlock Sending Routes". In the case of a coding error, routes can become ‘stuck' in the ‘In Progress' status. This new option allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool.

![](../alerts-errors-failures-interactive-tab.assets/8869258247937318d3989283ecfc92f6.jpg)

If you click the Failed Auto-Send Items link from the Quick View tab, it will also take you to the Data Send Queue.

![](../alerts-errors-failures-interactive-tab.assets/4c679ee338196eb820cb1abb721ad533.png)

## No Pending Alerts

If you have no pending alerts for yourself or system wide (depending on your preference setting), then the category will show the message NO PENDING ALERTS for that category on your screen view in the alerts/errors page.

![](../alerts-errors-failures-interactive-tab.assets/56bab4df2513245979808198cf5876c4.jpg)

However the Quick View alerts section will not show the category or link if there are no pending failed items to work on in that category. It will only display the failed job type category link and the number count if there are any pending errors for that failed alert category according to your preference setting.

![](../alerts-errors-failures-interactive-tab.assets/bfd952aa490d1e2b2d950d16da0a087b.png)
