---
title: "Alerts, Errors, Failures - Interactive Tab"
date: 2020-02-27T21:12:37.185Z
url: "general-functionality/e-chart/alerts-errors-failures-interactive-tab.html"
author: aquandt
version: 51
id: 121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc
source: https://drive.google.com/open?id=121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc
menu:
    main:
        name: "Alerts, Errors, Failures - Interactive Tab"
        identifier: "121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc"
        parent: "1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU"
        weight: 1000
---
An Alerts link and counter is shown at the top summary toolbar. It gives a count of the errors from the Print, Fax, Dicom and DataSend modules for the logged in user or for users in the entire system. The alert count link in this top toolbar disappears when the count is zero and reappears when the count is greater than zero. Two user preferences manage this error alert feature.

An alert shows at the top when there is a print, fax, data-send (auto-routes) or Dicom failure/error based on your preferences.

![](../../external_files/ea58b33cde8807838000f8129c4e70e1.png)

The Alert errors link and view are managed by two MY SETTINGS preference which apply only to you, the logged in user. By default, the alerts top toolbar link is turned **on** (*Show Alerts* is set to SHOW). You can turn this off by changing the MY SETTINGS preference for *Show Alerts* to ‘hide'.

![](../../external_files/c52291491f725fb73ac9d19d5ad7a36c.png)

The other MY SETTINGS preference for this feature is whether to show the alert errors for your jobs that errored out (SELF) or to show the jobs that errored out for the entire system (SYSTEM) which is all other users that may have had a job error out. If set to show alerts for only SELF, any print jobs, fax jobs, auto-routes, etc that *you* performed and they errored out, the alert errors will show the count for jobs that errored out done by you only. If you have the *Show Alerts For* set to SYSTEM, then you will be alerted and shown the alert count and all alert errors for jobs that errored out done by any and all users in your practice's {{% system-name %}} system. This preference sets the alerts to display only the current logged in user's alert errors or show alert errors for the whole system. By default, this preference is set to **SYSTEM**, but you can change it to SELF to just alert you of your own alert errored jobs.

![](../../external_files/a4e7550d952716ecd2150fa1878ca310.png)

Some practices use email alerts to alert themselves of a failed fax, etc. This alert error count feature notifies you visibly in the top summary toolbar of any failed faxes, failed print jobs, failed DICOM jobs, failed DataSend (auto-routes) without having to have an email account to be able to alert you. The alerts show up in {{% system-name %}} and are easily accessed for viewing and working any failed jobs that need attention.

The Alert feature can also be found and accessed in the Quick View sidemenu tab page. However, your {{% system-name %}} system may not have this sidemenu tab named Quick View. Contact your MIE Implementer if you wish to have that sidemenu tab programmed onto your system. Otherwise, the only way to access Alert/Errors is by the alerts link at the top toolbar.

![](../../external_files/d404b808a9a300c9a6b6b720681e6b19.png)

The Alerts summary module from the Quick View tab shows a summary of each failed module name (what type of job failed) and also shows a column of who the failed jobs are designated to. **Me** means the failed job was something you had rendered to send. **Everyone** means the failed job was something someone else rendered to send (if you preference is set to show alerts for ‘system').

![](../../external_files/c01768d9535c7a68f92efb8c6d6f103c.png)

If you do not see the ALERTS module in the Quick View tab, simply click Select Modules from this tab and checkmark the section named *Alerts*, then save your Quick View tab modules. The modules you have check-marked will display on your Quick View screen and you can move them around in the order you wish to display for your view. This is similar to the Interactive Patient Summary tab. (See additional help on how to move modules around, set columns and collapse these modules on your screen view in our [Interactive Summary Patient Chart Tab](patient-summary-interactive-chart-tab.html) online help documentation).

![](../../external_files/7062e45248e34a5f10275b151660d492.png)

If you click the *Manage Information* icon from the alerts module in the Quick View, you will be taken to the Alerts/Errors tab to view and work any failed jobs.

![](../../external_files/285ea2c915fb2c7cdf98baabca9fe071.png)

If you click the *Alerts* link at the top summary toolbar, you will also be taken to this Alerts/Errors screen to view and work any failed jobs. Which ever method you use, the Alerts/Errors screen is where you can view the specific failed job details and work any failed jobs. This screenshot shows the failed categories in a 2 column format, however we recommend you keep in a one column format so you can see the entire section and options and work them from this summary screen.

![](../../external_files/ddb6d49a2e0738ec6f42b7d5f8805cf4.png)

Once you are in the Alerts/Errors screen, the alerts will show specific to the preference you have set. If you are set to only show your own alerts/errors, then that is all that will display.

You can make the Alerts/Errors screen look how you want it and arrange in the order you wish. Simply click the Select Portlets link found at the top right of the Alerts/Errors screen and checkmark the alert/error modules you wish to show on your screen. You can also set the number of columns you wish them to display on the screen.

{{% tip %}}

We recommend keeping the ‘alerts' module in 1 column view because if you set it to 2 columns or more, the alert summary for each failed print job, each fax failed job, etc is wider than the columns allow and you won't be able to see the quick links to work on a failed job right there from the summary screen. When done, click the SAVE button and when refreshed back to the Alerts/Errors screen, you can move your modules around on your screen to your liking. You can still move the modules around to your specific order even in one column viewing.

{{% /tip %}}


![](../../external_files/add387762c25cbb3a00b484dceaa4289.png)
When you are in the Alerts/Errors screen, you can click on the *Manage Information* link in any specific alert category you want to work. The *Manage Information* icon is the pencil/paper icon at the top right of each category. You can also use the other icons to collapse the category, move them around to a different display order, or delete the category from your view.

![](../../external_files/82a8b9733ab0fe91a086ad0bcc82cdc2.png)

To change your alert/errors preferences, there is a link provided from the screen that you can click and change your preferences quickly from this page. Click the Preferences link found at the top right corner of the Alerts/Errors screen.

![](../../external_files/a5e186aa88ce1bab60ca450e66bf72f8.png)

Once you click the preferences link, some {{% system-name %}} preference settings will display and you can change your selections and click the SAVE button. The two preferences that are tied to this Alerts/Errors screen are the *Show Alerts* and the *Show Alerts For* preferences.

![](../../external_files/43792d9925034a19d0330a02fd8dc806.png)

## Fax Alerts

The fax alerts portlet shows any failed faxes, based on your preference that rendered from {{% system-name %}} . You can re-send the fax. acknowledge or stop fax from this screen. You can also click the *Manage Information* icon from the top right of this Fax Alert portlet.

![](../../external_files/f94b20e951066cf884d4ec185e0e1c75.png)

If you click the *Manage Information* icon, it will take you to the Fax Manager tab. This is where you can then see the ERROR FAX SPOOL category and listing in full and other specific options to work the failed fax. For more information on this screen and how to work failed faxes, see our [Fax Manager Tab-Outbound Faxing](../fax-manager/fax-manager-tab-outbound-faxing.html) help documentation.

![](../../external_files/bf0ddd59f25c16f59114008260607be1.png)

If you click the Failed Fax Jobs link from the Quick View tab, it will also take you to the Fax Manager tab (above screenshot).

![](../../external_files/3fea5c2b2d025a789488305cf7ca629e.png)

## Print Alerts

The print alerts portlet shows any print jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed print jobs from this screen and click the *job id* to see the specific print job. And you can delete the print job from here. You can also click the *Manage Information* icon from the top right of this Print Alert portlet.

![](../../external_files/fd13f476c9d50c37d95cddeafc707616.png)

If you click the *Manage Information* icon, it will take you to the Print Manager tab. This is where you can then see the ERROR PRINT SPOOL category and listing in full and can click on the job id to see the specific print job and reprint or use the delete option to delete the failed print job.

![](../../external_files/b7ca0e7a44d8203899e0abcdc0f740d3.png)

If you click the Failed Print Jobs link from the Quick View tab, it will also take you to the Print Manager tab (above screenshot).

![](../../external_files/56798e93c7642d59003ddef21addee65.png)

## DICOM Alerts

The dicom alerts portlet shows any dicom jobs, based on your preference that rendered from {{% system-name %}} and failed. You can see the specific failed dicom jobs from this screen. You can also click the *Manage Information* icon from the top right of this Dicom Alert portlet. Cancelled DICOM routes are omitted from Alerts portlet.

![](../../external_files/3a052bf66e79d247829b8fec6c29049b.png)

If you click the *Manage Information* icon, it will take you to the Dicom Setup tab. This is where you can then see the FAILED/ERROR dicom category and listing in full to work any failed dicom send job by the resend/cancel links.

![](../../external_files/b015fd4a384e8b6941b8973061b6bbb4.png)

If you click the Failed DICOM Items link from the Quick View tab, it will also take you to the Dicom Setup tab (above screenshot).

![](../../external_files/f1a4b8d790d17711c9256a464c4539c6.png)

## Auto-Send Items Alerts

The sent items alerts portlet shows any data-send/auto-route jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed alert jobs from this screen and use the quick link and drop-down to perform an acknowledgement, resend, or deactivate in mass for the failed send jobs. Or you can individually work those failed items. You can also click the *Manage Information* icon from the top right of this Sent Items Alert portlet.

**Acknowledge:** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes then the information will be resent.

**Deactivate:** means that you no longer want the error to be sent and to never try again.

![](../../external_files/0b9ed525a7dd19eb38fbc660ee86eb51.png)

If you wish to work the data-send/auto-route failures right there, you can use the *Select Error Routes* All or None option link and set the desired drop-down function and perform that selection to all the items in the failed sent items queue.

![](../../external_files/c15498658f6dbd2d3f8e75ebac26a355.png)

If you click the *Manage Information* icon, it will take you to the Data Send Queue tab. This is where you can then see the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../../external_files/e1c9781c8e3db722b1f8456ed007d149.png)

When you click the ‘Manage Information' icon from the Auto-Send Item Alerts portlet, you will be taken to the Data Send Queue tab.

This is where you can then see routes in progress, pending routes, completed routes, and the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../../external_files/1d4380bf454ce674609e0d117592cde9.png)

There is a security option for MIE/Tech support named "Break Sending Lock" option for Routes marked as ‘Sending' in the DataSend Queue. This feature allows the unlocking of any ‘stuck' route which has been stuck for more than an hour. Users wishing to have this ability will need the new E-Chart permission: "Unlock Sending Routes". In the case of a coding error, routes can become ‘stuck' in the ‘In Progress' status. This new option allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool.

![](../../external_files/fd5a5ead19060e83b7c4e256473aea06.png)

If you click the Failed Auto-Send Items link from the Quick View tab, it will also take you to the Data Send Queue.

![](../../external_files/8ef98e61efc7f31dd7847a2ba35c52d2.png)

## No Pending Alerts

If you have no pending alerts for yourself or system wide (depending on your preference setting), then the category will show the message NO PENDING ALERTS for that category on your screen view in the alerts/errors page.

![](../../external_files/e4a654fe10f7b06d517645098ea150da.png)

However the Quick View alerts section will not show the category or link if there are no pending failed items to work on in that category. It will only display the failed job type category link and the number count if there are any pending errors for that failed alert category according to your preference setting.

![](../../external_files/15315f24147f104a5cb18deb36cc6755.png)

