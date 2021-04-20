---
title: "Alerts, Errors, Failures - Interactive Tab"
date: "2020-02-27T21:12:37.185Z"
url: "functions/e-chart/alerts-errors-failures-interactive-tab.html"
author: aquandt
version: 52
id: "121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc"
source: "https://drive.google.com/open?id=121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc"
menu:
    main:
        name: "Alerts, Errors, Failures - Interactive Tab"
        identifier: "121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc"
        parent: "1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU"
        weight: 990
---
An Alerts link and counter is shown at the top summary toolbar. It gives a count of the errors from the Print, Fax, Dicom and DataSend modules for the logged in user or for users in the entire system. The alert count link in this top toolbar disappears when the count is zero and reappears when the count is greater than zero. Two user preferences manage this error alert feature.

An alert shows at the top when there is a print, fax, data-send (auto-routes) or Dicom failure/error based on your preferences.

![](alerts-errors-failures-interactive-tab.images/image10.png)

The Alert errors link and view are managed by two MY SETTINGS preference which apply only to you, the logged in user. By default, the alerts top toolbar link is turned **on** (*Show Alerts* is set to SHOW). You can turn this off by changing the MY SETTINGS preference for *Show Alerts* to ‘hide'.

![](alerts-errors-failures-interactive-tab.images/image12.png)

The other MY SETTINGS preference for this feature is whether to show the alert errors for your jobs that errored out (SELF) or to show the jobs that errored out for the entire system (SYSTEM) which is all other users that may have had a job error out. If set to show alerts for only SELF, any print jobs, fax jobs, auto-routes, etc that *you* performed and they errored out, the alert errors will show the count for jobs that errored out done by you only. If you have the *Show Alerts For* set to SYSTEM, then you will be alerted and shown the alert count and all alert errors for jobs that errored out done by any and all users in your practice's {{% system-name %}} system. This preference sets the alerts to display only the current logged in user's alert errors or show alert errors for the whole system. By default, this preference is set to **SYSTEM**, but you can change it to SELF to just alert you of your own alert errored jobs.

![](alerts-errors-failures-interactive-tab.images/image11.png)

Some practices use email alerts to alert themselves of a failed fax, etc. This alert error count feature notifies you visibly in the top summary toolbar of any failed faxes, failed print jobs, failed DICOM jobs, failed DataSend (auto-routes) without having to have an email account to be able to alert you. The alerts show up in {{% system-name %}} and are easily accessed for viewing and working any failed jobs that need attention.

The Alert feature can also be found and accessed in the Quick View sidemenu tab page. However, your {{% system-name %}} system may not have this sidemenu tab named Quick View. Contact your MIE Implementer if you wish to have that sidemenu tab programmed onto your system. Otherwise, the only way to access Alert/Errors is by the alerts link at the top toolbar.

![](alerts-errors-failures-interactive-tab.images/image14.png)

The Alerts summary module from the Quick View tab shows a summary of each failed module name (what type of job failed) and also shows a column of who the failed jobs are designated to. **Me** means the failed job was something you had rendered to send. **Everyone** means the failed job was something someone else rendered to send (if you preference is set to show alerts for ‘system').

![](alerts-errors-failures-interactive-tab.images/image13.png)

If you do not see the ALERTS module in the Quick View tab, simply click Select Modules from this tab and checkmark the section named *Alerts*, then save your Quick View tab modules. The modules you have check-marked will display on your Quick View screen and you can move them around in the order you wish to display for your view. This is similar to the Interactive Patient Summary tab. (See additional help on how to move modules around, set columns and collapse these modules on your screen view in our [Interactive Summary Patient Chart Tab](patient-summary-interactive-chart-tab.html) online help documentation).

![](alerts-errors-failures-interactive-tab.images/image16.png)

If you click the *Manage Information* icon from the alerts module in the Quick View, you will be taken to the Alerts/Errors tab to view and work any failed jobs.

![](alerts-errors-failures-interactive-tab.images/image15.png)

If you click the *Alerts* link at the top summary toolbar, you will also be taken to this Alerts/Errors screen to view and work any failed jobs. Which ever method you use, the Alerts/Errors screen is where you can view the specific failed job details and work any failed jobs. This screenshot shows the failed categories in a 2 column format, however we recommend you keep in a one column format so you can see the entire section and options and work them from this summary screen.

![](alerts-errors-failures-interactive-tab.images/image18.png)

Once you are in the Alerts/Errors screen, the alerts will show specific to the preference you have set. If you are set to only show your own alerts/errors, then that is all that will display.

You can make the Alerts/Errors screen look how you want it and arrange in the order you wish. Simply click the Select Portlets link found at the top right of the Alerts/Errors screen and checkmark the alert/error modules you wish to show on your screen. You can also set the number of columns you wish them to display on the screen.

{{% tip %}}

We recommend keeping the ‘alerts' module in 1 column view because if you set it to 2 columns or more, the alert summary for each failed print job, each fax failed job, etc is wider than the columns allow and you won't be able to see the quick links to work on a failed job right there from the summary screen. When done, click the SAVE button and when refreshed back to the Alerts/Errors screen, you can move your modules around on your screen to your liking. You can still move the modules around to your specific order even in one column viewing.

{{% /tip %}}


![](alerts-errors-failures-interactive-tab.images/image17.png)
When you are in the Alerts/Errors screen, you can click on the *Manage Information* link in any specific alert category you want to work. The *Manage Information* icon is the pencil/paper icon at the top right of each category. You can also use the other icons to collapse the category, move them around to a different display order, or delete the category from your view.

![](https://lh4.googleusercontent.com/0P6CU8oQNpv1JCi3vmyoJksjYNyKA_TrBjq1nvcmcsgdIrhtQ5PIXqdQqNQB9GI0ijvCZYUknAy2PgiE_kvG8HOU47GIMrToGXwxb2bZZyeXo1aEpCauYqSMOxm4rwVeDmuIw8bgkWNPEvFddw)

To change your alert/errors preferences, there is a link provided from the screen that you can click and change your preferences quickly from this page. Click the Preferences link found at the top right corner of the Alerts/Errors screen.

![](alerts-errors-failures-interactive-tab.images/image19.png)

Once you click the preferences link, some {{% system-name %}} preference settings will display and you can change your selections and click the SAVE button. The two preferences that are tied to this Alerts/Errors screen are the *Show Alerts* and the *Show Alerts For* preferences.

![](alerts-errors-failures-interactive-tab.images/image20.png)

## Fax Alerts

The fax alerts portlet shows any failed faxes, based on your preference that rendered from {{% system-name %}} . You can re-send the fax. acknowledge or stop fax from this screen. You can also click the *Manage Information* icon from the top right of this Fax Alert portlet.

![](alerts-errors-failures-interactive-tab.images/image22.png)

If you click the *Manage Information* icon, it will take you to the Fax Manager tab. This is where you can then see the ERROR FAX SPOOL category and listing in full and other specific options to work the failed fax. For more information on this screen and how to work failed faxes, see our [Fax Manager Tab-Outbound Faxing](../fax-manager/fax-manager-tab-outbound-faxing.html) help documentation.

![](alerts-errors-failures-interactive-tab.images/image23.png)

If you click the Failed Fax Jobs link from the Quick View tab, it will also take you to the Fax Manager tab (above screenshot).

![](alerts-errors-failures-interactive-tab.images/image24.png)

## Print Alerts

The print alerts portlet shows any print jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed print jobs from this screen and click the *job id* to see the specific print job. And you can delete the print job from here. You can also click the *Manage Information* icon from the top right of this Print Alert portlet.

![](alerts-errors-failures-interactive-tab.images/image25.png)

If you click the *Manage Information* icon, it will take you to the Print Manager tab. This is where you can then see the ERROR PRINT SPOOL category and listing in full and can click on the job id to see the specific print job and reprint or use the delete option to delete the failed print job.

![](alerts-errors-failures-interactive-tab.images/image26.png)

If you click the Failed Print Jobs link from the Quick View tab, it will also take you to the Print Manager tab (above screenshot).

![](alerts-errors-failures-interactive-tab.images/image27.png)

## DICOM Alerts

The dicom alerts portlet shows any dicom jobs, based on your preference that rendered from {{% system-name %}} and failed. You can see the specific failed dicom jobs from this screen. You can also click the *Manage Information* icon from the top right of this Dicom Alert portlet. Cancelled DICOM routes are omitted from Alerts portlet.

![](alerts-errors-failures-interactive-tab.images/image28.png)

If you click the *Manage Information* icon, it will take you to the Dicom Setup tab. This is where you can then see the FAILED/ERROR dicom category and listing in full to work any failed dicom send job by the resend/cancel links.

![](alerts-errors-failures-interactive-tab.images/image29.png)

If you click the Failed DICOM Items link from the Quick View tab, it will also take you to the Dicom Setup tab (above screenshot).

![](alerts-errors-failures-interactive-tab.images/image1.png)

## Auto-Send Items Alerts

The sent items alerts portlet shows any data-send/auto-route jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed alert jobs from this screen and use the quick link and drop-down to perform an acknowledgement, resend, or deactivate in mass for the failed send jobs. Or you can individually work those failed items. You can also click the *Manage Information* icon from the top right of this Sent Items Alert portlet.

**Acknowledge:** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes then the information will be resent.

**Deactivate:** means that you no longer want the error to be sent and to never try again.

![](alerts-errors-failures-interactive-tab.images/image2.png)

If you wish to work the data-send/auto-route failures right there, you can use the *Select Error Routes* All or None option link and set the desired drop-down function and perform that selection to all the items in the failed sent items queue.

![](alerts-errors-failures-interactive-tab.images/image3.png)

If you click the *Manage Information* icon, it will take you to the Data Send Queue tab. This is where you can then see the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](alerts-errors-failures-interactive-tab.images/image4.png)

When you click the ‘Manage Information' icon from the Auto-Send Item Alerts portlet, you will be taken to the Data Send Queue tab.

This is where you can then see routes in progress, pending routes, completed routes, and the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](alerts-errors-failures-interactive-tab.images/image5.png)

There is a security option for MIE/Tech support named "Break Sending Lock" option for Routes marked as ‘Sending' in the DataSend Queue. This feature allows the unlocking of any ‘stuck' route which has been stuck for more than an hour. Users wishing to have this ability will need the new E-Chart permission: "Unlock Sending Routes". In the case of a coding error, routes can become ‘stuck' in the ‘In Progress' status. This new option allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool.

![](https://lh6.googleusercontent.com/4Ns9jQVwSYJy0l7T8KPe5dUNF6lTtafkJpuuc29WqrToPTS-h-gD-q9ZmC4Kc1LTKBc02tY4y3Fs2xDgb-XGHzxZKDjqUqJMniN6_YOfnonj2st9ZLHzWw0G-XTc1MZoFkOb9uQ1xRlKIb6wAg)

If you click the Failed Auto-Send Items link from the Quick View tab, it will also take you to the Data Send Queue.

![](alerts-errors-failures-interactive-tab.images/image7.png)

## No Pending Alerts

If you have no pending alerts for yourself or system wide (depending on your preference setting), then the category will show the message NO PENDING ALERTS for that category on your screen view in the alerts/errors page.

![](https://lh5.googleusercontent.com/8LNjxKrQZo0oqh6l92vyojFw9S-W6mx_4sjB8U7dOdeLqQcLKpqet9AME6Lbq_YcKEUZSGuNR0-hRNuXLGB8jwC1G37ybcGI1PcGujKFrDHGEmJQlTZEaGt5-VhZ1hmbeXX3Bg86GogvUtiJQw)

However the Quick View alerts section will not show the category or link if there are no pending failed items to work on in that category. It will only display the failed job type category link and the number count if there are any pending errors for that failed alert category according to your preference setting.

![](alerts-errors-failures-interactive-tab.images/image9.png)

