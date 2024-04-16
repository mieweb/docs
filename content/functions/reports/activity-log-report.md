---
id: '1kGherkQEZsAMDqFYdzHWmlePSKnIhjiReBA8p635AgY'
title: 'Activity Log Report'
date: '2023-11-14T06:42:13.396Z'
version: 85
lastAuthor: 'wreiske'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1kGherkQEZsAMDqFYdzHWmlePSKnIhjiReBA8p635AgY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
To access the Activity Log in the Control tab, ensure you have the necessary security permissions.

## Activity Log

{{% system-name %}} boasts robust audit logging capabilities, providing comprehensive oversight of system activities. This feature ensures meticulous recording of user interactions, including details such as date, user identity, accessed functions, and specific operations performed. With a focus on security and accountability, the audit logging functionality allows for efficient tracking, analysis, and monitoring of every action within the system, enhancing transparency and facilitating timely responses to potential issues.

### Navigate to the Activity Log

Click on the Control tab in the side menu.

Select the Activity Log from the top tab (or access it through the Reports tab).

![](../activity-log-report.assets/7474b2e06ee53d375a6caaec2af7da97.png)

### Activity Log Search Criteria

The Activity Log Search Criteria fields will appear on the screen. You can narrow down your search results by entering any information in the following fields:

Please click the help icons for explanations on each field also.

* <strong>Date:</strong> must enter a date range to show results for.
* <strong>User:</strong> Can type in first or last name of a user to view results by. When typing, the system will attempt to auto-complete and give you choices of users to select from. If looking for a particular employee's activity, you'd enter their name here in the User field.
* <strong>Chart:</strong> Can type in a specific chart to see activity on that specific chart selected. The system will auto-complete the chart you are typing and give you choices.
* <strong>IP Address:</strong> Enter any part of the users IP address.
* <strong>Function:</strong> This is the main area of {{% system-name %}} that was accessed. (i.e.) admin, chart, orders, ….
* <strong>Sub Function:</strong> This is for when there was a specific area of the function area in {{% system-name %}} that was accessed. | (i.e.) for function=admin, sub-function could be activity_log, layout_manager, system_report, ….
* <strong>Opp:</strong> This is if there was a specific "operation performed". (i.e.) add, edit, delete, ….
* <strong>Cgi Method:</strong> Can select Get or Post option. GET means the user was viewing something (clicked or searched) and POST means that the user was saving/uploading data.
* <strong>Cgi Data:</strong> This is where you can search for any detail contained in the cgi data string. The function, sub-function, and opp can be searched here as well in addition to things like pat_id and doc_id for example.

### Performing a Search

Click SEARCH to display results based on the entered criteria.

If a session_id or both start and end dates are provided, the activity log will be accessible regardless of additional criteria.

![](../activity-log-report.assets/0414b7210cc22d3abf4033d93d920c11.png)

There is a lot of audit information given and takes time to understand and read the results. {{% system-name %}} records every click. Please call our helpdesk with any assistance needed.

Continue to search by modifying the search fields, or by clicking CLEAR ALL to start another search.

If you wish to view a specific activity from the results, click **View CGI Data** link in the CGI Data column. When you click View CGI Data it will open the CGI data window on your screen.

![](../activity-log-report.assets/41e4d8aeca78fbebd3b30d8631c4b6fb.png)

This shows the CGI Data. F is for Function, S is for Subfunction, then it proceeds to state which module and additional details.

The **Hide/Show CGI Query String** link the top will open the cgi query string. You can highlight this string and right click to copy this with your mouse.

![](../activity-log-report.assets/9425de75c5a85c2186b968c951c97b5e.png)

After you copy the entire string with your mouse, click CONTROL and N keys on your keyboard to open a *new window* on your computer screen. At the top of the new window that opened up on your computer, type in a question mark **?** at the **end** of the url that shows there. Then after the **?** question mark, right click and *paste* in the cgi query string you copied.

![](../activity-log-report.assets/028496aef9da28dec936c9256960c621.png)

When the cgi string is pasted in the url (don't forget the ? question mark) then hit ENTER on your keyboard.

That new window will then take you to that exact activity, that exact screen that the user was in.

When you copy/paste that CGI data into the other new browser window url, you can see exactly what the screen (that the user was on) looked like.

Click the red X at the top right corner to get out of this new opened window and return to your activity log.

### Failed Logins

You can view failed logins from the Activity Log module.

Simply click View Failed Logins link from the top right corner of the Activity Log Search Criteria screen.

![](../activity-log-report.assets/8167bed2baca2dee80e790889f235fa2.png)

The Failed Logins Search Criteria fields will display on the screen and below that is all the failed logins.

To narrow down the search, simply enter in information into any of the search criteria fields.

![](../activity-log-report.assets/d2d34bca7689207b6427a529d37b9346.png)

* <strong>Date:</strong> Must enter a date range to show results for.
* <strong>IP Address:</strong> Can enter any part of the users IP address by specifying the method from the drop-down.
* <strong>Login Username:</strong> Can enter any part of a username by any specifying the method from the drop-down.
* <strong>SSL:</strong> Yes limits to login attempts using the https url for your practice. No limits to login attempts using http url for your practice.

Click SEARCH to show the specific search results according to the fields you entered data for.

The Failed Logins will display below the search criteria fields.

Continue to search by modifying the search fields, or by clicking CLEAR ALL to start another search.

## User Watch

User Watch tab is found in Control sidemenu. Users (with security privilege) can view the activity log with a session_id (e.g. via the ‘View Click Log' link on the user watch page).

![](../activity-log-report.assets/0203665d1d530c372f1e27ed8eb151d2.png)
