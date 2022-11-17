---
id: '1kGherkQEZsAMDqFYdzHWmlePSKnIhjiReBA8p635AgY'
title: 'Activity Log Report'
date: '2020-02-27T20:12:05.387Z'
version: 33
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1kGherkQEZsAMDqFYdzHWmlePSKnIhjiReBA8p635AgY'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'Activity Log Report'
    identifier: '1kGherkQEZsAMDqFYdzHWmlePSKnIhjiReBA8p635AgY'
    parent: '1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY'
    weight: 4080
---
Must have security permission to access the Activity Log in the Control tab.
  
## Activity Log  
  
Click on the side menu tab named *Control.*  
Click on the top tab named *Activity Log* (or can access it from the Reports tab).
  
![](../activity-log-report.assets/10000201000003BC000001297918FD9114646B0C.png)  

The Activity Log Search Criteria fields will appear on the screen. You can narrow down your search results by entering any information in the following fields:  
Please click the help icons for explanations on each field also.
* <strong>Date:</strong> must enter a date range to show results for.
* <strong>User:</strong> Can type in first or last name of a user to view results by. When typing, the system will attempt to auto-complete and give you choices of users to select from. If looking for a particular employee's activity, you'd enter their name here in the User field.
* <strong>Patient:</strong> Can type in a specific patient to see activity on that specific patient selected. The system will auto-complete the patient you are typing and give you choices.
* <strong>IP Address:</strong> Enter any part of the users IP address.
* <strong>Function:</strong> This is the main area of {{% system-name %}} that was accessed. (i.e.) admin, chart, orders, ….
* <strong>Sub Function:</strong> This is for when there was a specific area of the function area in {{% system-name %}} that was accessed. | (i.e.) for function=admin, sub-function could be activity_log, layout_manager, system_report, ….
* <strong>Opp:</strong> This is if there was a specific "operation performed". (i.e.) add, edit, delete, ….
* <strong>Cgi Method:</strong> Can select Get or Post option. GET means the user was viewing something (clicked or searched) and POST means that the user was saving/uploading data.
* <strong>Cgi Data:</strong> This is where you can search for any detail contained in the cgi data string. The function, sub-function, and opp can be searched here as well in addition to things like pat_id and doc_id for example.
Click SEARCH to show the search results according to the fields you entered data for.  
If the user supplies either a session_id or BOTH the start and end dates, they can view the activity log, regardless of any other search criteria they have supplied.  
The Activity Log search results will display below the search criteria fields you filled out.
  
![](../activity-log-report.assets/100000000000038D000000F0ADE76962C204A21D.png)  

There is a lot of audit information given and takes time to understand and read the results. {{% system-name %}} records every click. Please call our helpdesk with any assistance needed.  
Continue to search by modifying the search fields, or by clicking CLEAR ALL to start another search.  
If you wish to view a specific activity from the results, click **View CGI Data** link in the CGI Data column. When you click View CGI Data it will open the CGI data window on your screen.
  
![](../activity-log-report.assets/1000000000000357000000C44EBA2C1EB2644F7D.png)  

This shows the CGI Data. F is for Function, S is for Subfunction, then it proceeds to state which module and additional details.  
The **Hide/Show CGI Query String** link the top will open the cgi query string. You can highlight this string and right click to copy this with your mouse.
  
![](../activity-log-report.assets/100000000000034A000000C7388D549ACB60272B.png)  

After you copy the entire string with your mouse, click CONTROL and N keys on your keyboard to open a *new window* on your computer screen. At the top of the new window that opened up on your computer, type in a question mark **?** at the **end** of the url that shows there. Then after the **?** question mark, right click and *paste* in the cgi query string you copied.
  
![](../activity-log-report.assets/10000000000002BE00000039696357E10E50FCE7.png)  

When the cgi string is pasted in the url (don't forget the ? question mark) then hit ENTER on your keyboard.  
That new window will then take you to that exact activity, that exact screen that the user was in.  
When you copy/paste that CGI data into the other new browser window url, you can see exactly what the screen (that the user was on) looked like.  
Click the red X at the top right corner to get out of this new opened window and return to your activity log.
  
### Failed Logins  
  
You can view failed logins from the Activity Log module.  
Simply click View Failed Logins link from the top right corner of the Activity Log Search Criteria screen.
  
![](../activity-log-report.assets/10000201000004A50000013745012E1F35C70EA9.png)  

The Failed Logins Search Criteria fields will display on the screen and below that is all the failed logins.  
To narrow down the search, simply enter in information into any of the search criteria fields.
  
![](../activity-log-report.assets/1000020100000476000000C1D28D43CF243C6498.png)  

* <strong>Date:</strong> Must enter a date range to show results for.
* <strong>IP Address:</strong> Can enter any part of the users IP address by specifying the method from the drop-down.
* <strong>Login Username:</strong> Can enter any part of a username by any specifying the method from the drop-down.
* <strong>SSL:</strong> Yes limits to login attempts using the https url for your practice. No limits to login attempts using http url for your practice.
Click SEARCH to show the specific search results according to the fields you entered data for.  
The Failed Logins will display below the search criteria fields.  
Continue to search by modifying the search fields, or by clicking CLEAR ALL to start another search.
  
## User Watch  
  
User Watch tab is found in Control sidemenu. Users (with security privilege) can view the activity log with a session_id (e.g. via the ‘View Click Log' link on the user watch page).
  
![](../activity-log-report.assets/1000020100000540000000ADE5218FD413CB3331.png)  

