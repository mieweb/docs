---
id: '1g2tVujYONeJ_nu9D91-sH1fwBjiDp22e0ToXFFWyAAo'
title: 'View User Audit Log'
date: '2024-10-16T16:20:44.355Z'
version: 121
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1g2tVujYONeJ_nu9D91-sH1fwBjiDp22e0ToXFFWyAAo'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
Must have security permission to access the username screen found within Access Control.

## Audit Log Search

The Audit Log Search feature provides a powerful tool for meticulous examination of user activities within the system, ensuring transparency and accountability. To initiate the search, users must possess the requisite security permissions. Once granted access, users can pinpoint specific individuals and delve into their actions by navigating through the user interface. The Audit Log Search fields offer a versatile range of criteria, including patient names, document IDs, date ranges, IP addresses, event types, descriptions, and action permissions, facilitating precise investigation. The search results provide a detailed overview of the selected user's interactions, allowing users to further explore specific activities by utilizing links within the results. The Audit Log Search serves as a comprehensive resource for administrators and users alike to monitor, analyze, and respond to system events effectively.

Search for the user you wish to view the audit for.

![](../view-user-audit-log.assets/0a205f7c4a2ab62b9e2dd9037e677f05.png)

Once you've found the user (username) of the person, click their underlined username from the left column titled USERNAME.

![](../view-user-audit-log.assets/1ca7fec58cc20570276b1dde6129901d.png)

The *View User Screen* will appear. At the right side of the screen, click the **View Audit Log** link (if you have security permission).

![](../view-user-audit-log.assets/c64642f80031d7fa7822fa2aafec8fe0.png)

You can click this to view the charts this user has viewed/worked in and view activity using the Audit Log Search fields. See separate instructions titled *Audit Log Search*.

![](../view-user-audit-log.assets/e7aef5e79dcc4bca579ff55f0f9a9b5d.png)

You can narrow down your search results by entering any information in the following fields:

* <strong>Patient:</strong> Can type in a specific patient chart to see if the user has been in. The system will auto-complete the patient you are typing and give you choices. These patient choices are active and/or deceased patients.
* <strong>Doc ID:</strong> Can type in a specific document id number you wish to search activity for in relation to the user.
* <strong>Date Range:</strong> Can enter a date range to show results for.
* <strong>Partition:</strong> Select a partition to search for charts within a specific partition where this user may have had activity in (or leave this filter field blank to search for non-patient/chart events, such as user access, etc)
* <strong>IP Address:</strong> Enter any part of the user's IP address.
* <strong>Event:</strong> This is the specific event that occurred. (i.e.) Stream, View, Edit, etc.
* <strong>(Event) Description:</strong> This is a description of something specific about the event that occurred. It will usually contain the document type description.
* <strong>Granted:</strong> Was the action allowed (Yes) or not (No).

Click SEARCH to show the search results according to the fields you entered data for.

The results are specific to that user you are in.

If you wish to view a specific activity from the results, click **View** link in the Activity Details column. It will take you to the Activity Log report and you can click Submit Query to view that exact activity of the user.

![](../view-user-audit-log.assets/325af7eb3f099d4ac6ebdd320eb314d0.png)

Continue to search by modifying the search fields, or by clicking CLEAR ALL to start another search.

To get out of the Audit Log Search, click the Close Window link at the top right of the Audit Log screen.

## System Settings

There are several system settings that can be turned on/off for various audit logging items throughout {{% system-name %}} . In system settings search for Audit Event section to see all the various audit logging item settings or contact your MIE Implementer.

![](../view-user-audit-log.assets/43fb943f932195fa65a075e9eaf3e9c9.png)
