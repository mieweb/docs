---
id: '121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc'
title: 'Alerts, Errors, Failures - Interactive Tab'
date: '2020-02-27T21:12:37.185Z'
version: 60
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'patient-summary-interactive-chart-tab.md'
  - '../fax-manager/fax-manager-tab-outbound-faxing.md'
source: 'https://drive.google.com/open?id=121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc'
wikigdrive: '762e46ee0b866c028283dd665b3a8ee950fb436c'
menu:
  main:
    name: 'Alerts, Errors, Failures - Interactive Tab'
    identifier: '121JgKUXHUMyTIsyEzGjPSDLkXQ6f0MDpYmONZYjiJYc'
    parent: '1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU'
    weight: 1000
---
An Alerts link and counter is shown at the top summary toolbar. It gives a count of the errors from the Print, Fax, Dicom and DataSend modules for the logged in user or for users in the entire system. The alert count link in this top toolbar disappears when the count is zero and reappears when the count is greater than zero. Two user preferences manage this error alert feature.
An alert shows at the top when there is a print, fax, data-send (auto-routes) or Dicom failure/error based on your preferences.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000038B00000103CC3E85EB28E63220.png)

The Alert errors link and view are managed by two MY SETTINGS preference which apply only to you, the logged in user. By default, the alerts top toolbar link is turned **on** (*Show Alerts* is set to SHOW). You can turn this off by changing the MY SETTINGS preference for *Show Alerts* to ‘hide'.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000000E30000001B250244D686E8EAC0.png)

The other MY SETTINGS preference for this feature is whether to show the alert errors for your jobs that errored out (SELF) or to show the jobs that errored out for the entire system (SYSTEM) which is all other users that may have had a job error out. If set to show alerts for only SELF, any print jobs, fax jobs, auto-routes, etc that *you* performed and they errored out, the alert errors will show the count for jobs that errored out done by you only. If you have the *Show Alerts For* set to SYSTEM, then you will be alerted and shown the alert count and all alert errors for jobs that errored out done by any and all users in your practice's {{% system-name %}} system. This preference sets the alerts to display only the current logged in user's alert errors or show alert errors for the whole system. By default, this preference is set to **SYSTEM**, but you can change it to SELF to just alert you of your own alert errored jobs.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000011100000020D2D7AE726E401FE6.png)

Some practices use email alerts to alert themselves of a failed fax, etc. This alert error count feature notifies you visibly in the top summary toolbar of any failed faxes, failed print jobs, failed DICOM jobs, failed DataSend (auto-routes) without having to have an email account to be able to alert you. The alerts show up in {{% system-name %}} and are easily accessed for viewing and working any failed jobs that need attention.
The Alert feature can also be found and accessed in the Quick View sidemenu tab page. However, your {{% system-name %}} system may not have this sidemenu tab named Quick View. Contact your MIE Implementer if you wish to have that sidemenu tab programmed onto your system. Otherwise, the only way to access Alert/Errors is by the alerts link at the top toolbar.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000003E2000001708C235905DB47F6BC.png)

The Alerts summary module from the Quick View tab shows a summary of each failed module name (what type of job failed) and also shows a column of who the failed jobs are designated to. **Me** means the failed job was something you had rendered to send. **Everyone** means the failed job was something someone else rendered to send (if you preference is set to show alerts for ‘system').

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000003D6000000F95911C89247F9C029.png)

If you do not see the ALERTS module in the Quick View tab, simply click Select Modules from this tab and checkmark the section named *Alerts*, then save your Quick View tab modules. The modules you have check-marked will display on your Quick View screen and you can move them around in the order you wish to display for your view. This is similar to the Interactive Patient Summary tab. (See additional help on how to move modules around, set columns and collapse these modules on your screen view in our [Interactive Summary Patient Chart Tab](patient-summary-interactive-chart-tab.md) online help documentation).

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000015500000103F2FC6D9B8FF3C855.png)

If you click the *Manage Information* icon from the alerts module in the Quick View, you will be taken to the Alerts/Errors tab to view and work any failed jobs.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000001D20000007495678D92DB49C05F.png)

If you click the *Alerts* link at the top summary toolbar, you will also be taken to this Alerts/Errors screen to view and work any failed jobs. Which ever method you use, the Alerts/Errors screen is where you can view the specific failed job details and work any failed jobs. This screenshot shows the failed categories in a 2 column format, however we recommend you keep in a one column format so you can see the entire section and options and work them from this summary screen.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000003DE000001FD4C25FC767F4DA70C.png)

Once you are in the Alerts/Errors screen, the alerts will show specific to the preference you have set. If you are set to only show your own alerts/errors, then that is all that will display.
You can make the Alerts/Errors screen look how you want it and arrange in the order you wish. Simply click the Select Portlets link found at the top right of the Alerts/Errors screen and checkmark the alert/error modules you wish to show on your screen. You can also set the number of columns you wish them to display on the screen.
{{% tip %}}

We recommend keeping the ‘alerts' module in 1 column view because if you set it to 2 columns or more, the alert summary for each failed print job, each fax failed job, etc is wider than the columns allow and you won't be able to see the quick links to work on a failed job right there from the summary screen. When done, click the SAVE button and when refreshed back to the Alerts/Errors screen, you can move your modules around on your screen to your liking. You can still move the modules around to your specific order even in one column viewing.
{{% /tip %}}

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000000FF0000009BF6FFB16AB598BB56.png)

When you are in the Alerts/Errors screen, you can click on the *Manage Information* link in any specific alert category you want to work. The *Manage Information* icon is the pencil/paper icon at the top right of each category. You can also use the other icons to collapse the category, move them around to a different display order, or delete the category from your view.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000384000001FE8C05EFA602B76001.jpg)

To change your alert/errors preferences, there is a link provided from the screen that you can click and change your preferences quickly from this page. Click the Preferences link found at the top right corner of the Alerts/Errors screen.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000003E40000009B3FF5C38D248C6258.png)

Once you click the preferences link, some {{% system-name %}} preference settings will display and you can change your selections and click the SAVE button. The two preferences that are tied to this Alerts/Errors screen are the *Show Alerts* and the *Show Alerts For* preferences.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000003720000019566EECCBF6E9C7DAB.png)


## Fax Alerts

The fax alerts portlet shows any failed faxes, based on your preference that rendered from {{% system-name %}} . You can re-send the fax. acknowledge or stop fax from this screen. You can also click the *Manage Information* icon from the top right of this Fax Alert portlet.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000038A000001DA59B5B92AECC184AA.png)

If you click the *Manage Information* icon, it will take you to the Fax Manager tab. This is where you can then see the ERROR FAX SPOOL category and listing in full and other specific options to work the failed fax. For more information on this screen and how to work failed faxes, see our [Fax Manager Tab-Outbound Faxing](../fax-manager/fax-manager-tab-outbound-faxing.md) help documentation.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000037A0000019BC08A762F20AD89A8.png)

If you click the Failed Fax Jobs link from the Quick View tab, it will also take you to the Fax Manager tab (above screenshot).

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000223000001150654A872DC502037.png)


## Print Alerts

The print alerts portlet shows any print jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed print jobs from this screen and click the *job id* to see the specific print job. And you can delete the print job from here. You can also click the *Manage Information* icon from the top right of this Print Alert portlet.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000376000001C9015E62E1845431F2.png)

If you click the *Manage Information* icon, it will take you to the Print Manager tab. This is where you can then see the ERROR PRINT SPOOL category and listing in full and can click on the job id to see the specific print job and reprint or use the delete option to delete the failed print job.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000366000001871157BD92F30542F6.png)

If you click the Failed Print Jobs link from the Quick View tab, it will also take you to the Print Manager tab (above screenshot).

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000001B8000000A29C61817DD2112EAE.png)


## DICOM Alerts

The dicom alerts portlet shows any dicom jobs, based on your preference that rendered from {{% system-name %}} and failed. You can see the specific failed dicom jobs from this screen. You can also click the *Manage Information* icon from the top right of this Dicom Alert portlet. Cancelled DICOM routes are omitted from Alerts portlet.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000037C000001E260A9C295123E1CAF.png)

If you click the *Manage Information* icon, it will take you to the Dicom Setup tab. This is where you can then see the FAILED/ERROR dicom category and listing in full to work any failed dicom send job by the resend/cancel links.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000376000001A06EACD693D6C70BF9.png)

If you click the Failed DICOM Items link from the Quick View tab, it will also take you to the Dicom Setup tab (above screenshot).

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000224000000C48B1421CA577189EE.png)


## Auto-Send Items Alerts

The sent items alerts portlet shows any data-send/auto-route jobs, based on your preference that rendered from {{% system-name %}} and failed. You can view the specific failed alert jobs from this screen and use the quick link and drop-down to perform an acknowledgement, resend, or deactivate in mass for the failed send jobs. Or you can individually work those failed items. You can also click the *Manage Information* icon from the top right of this Sent Items Alert portlet.
**Acknowledge:** means that you know there was an error, you no longer want to see it on the send queue but if the information, document, patient info ever changes then the information will be resent.
**Deactivate:** means that you no longer want the error to be sent and to never try again.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000037C000001A337DBFC9AC398AF0C.png)

If you wish to work the data-send/auto-route failures right there, you can use the *Select Error Routes* All or None option link and set the desired drop-down function and perform that selection to all the items in the failed sent items queue.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000373000000D8ED97149521021F29.png)

If you click the *Manage Information* icon, it will take you to the Data Send Queue tab. This is where you can then see the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000027F000000568A0585B3700AC3AC.png)

When you click the ‘Manage Information' icon from the Auto-Send Item Alerts portlet, you will be taken to the Data Send Queue tab.
This is where you can then see routes in progress, pending routes, completed routes, and the ERROR ROUTES category and listing in full and can use the same drop-down method to perform the desired selection to all the routes in that category, or can individually perform an acknowledgement, resend, or deactivation to the individual failed route.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000356000001D5B4C615F5CDE2E065.png)

There is a security option for MIE/Tech support named "Break Sending Lock" option for Routes marked as ‘Sending' in the DataSend Queue. This feature allows the unlocking of any ‘stuck' route which has been stuck for more than an hour. Users wishing to have this ability will need the new E-Chart permission: "Unlock Sending Routes". In the case of a coding error, routes can become ‘stuck' in the ‘In Progress' status. This new option allows MIE/Tech support (intended audience) to retry these stuck routes without reverting to a backend tool.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000446000000A9ED0443FC0B19EBB5.jpg)

If you click the Failed Auto-Send Items link from the Quick View tab, it will also take you to the Data Send Queue.

![](../alerts,-errors,-failures-interactive-tab.assets/1000000000000229000000B633AB44E323303D1C.png)


## No Pending Alerts

If you have no pending alerts for yourself or system wide (depending on your preference setting), then the category will show the message NO PENDING ALERTS for that category on your screen view in the alerts/errors page.

![](../alerts,-errors,-failures-interactive-tab.assets/100000000000037D000001EF2215B0984CB8E6EE.jpg)

However the Quick View alerts section will not show the category or link if there are no pending failed items to work on in that category. It will only display the failed job type category link and the number count if there are any pending errors for that failed alert category according to your preference setting.

![](../alerts,-errors,-failures-interactive-tab.assets/10000000000002230000009B118153D0033906FD.png)

