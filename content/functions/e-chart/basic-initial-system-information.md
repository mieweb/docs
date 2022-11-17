---
id: '1tg6fw6rjGuTilWgo6MTVXqLV--GlqfvOhERuMQl7Ec8'
title: 'Basic Initial System Information'
date: '2022-09-13T18:09:46.268Z'
version: 62
lastAuthor: 'Kelly Volz'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
  - '../system-administration/security/my-settings.md'
  - 'https://system/'
  - 'https://system/?func=omniscope'
  - 'https://system/?func=logout'
source: 'https://drive.google.com/open?id=1tg6fw6rjGuTilWgo6MTVXqLV--GlqfvOhERuMQl7Ec8'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
menu:
  main:
    name: 'Basic Initial System Information'
    identifier: '1tg6fw6rjGuTilWgo6MTVXqLV--GlqfvOhERuMQl7Ec8'
    parent: '1DIVVSjNfv48-LekRsKDHFuHEm1gBYphsCC18iR2WikU'
    weight: 890
---
## **Patient/Employee/Chart Simple Search Screen**  

* When logging into {{% system-name %}} , most users will navigate to the [E-Chart sidemenu](https://system/?f=chart).  The E-Chart side menu tab is the patient/employee search screen. By default, users will be directed to the <strong>Simple</strong> search screen. Users can change their default landing page upon login of the system by accessing [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) in the <strong>Control Panel</strong> and changing the <em>Default Page</em> setting.
  
![](../basic-initial-system-information.assets/100002010000064000000229AE087A27B5F104E2.png)  

* The patient/employee search screen is usually defaulted to search by <strong>Name</strong>.  When searching by name, users should enter the last name followed by a comma and then first name.  Users can enter the full first and last name or a few characters of each to render results.
* Users can also search for patients/employees by Employee/Medical Record Number, Social Security Number (entered with no dashes), DOB, Home Phone number (clicking the Home Phone number hyperlink allows users to search by alternate phone number, cell phone number and work phone number as well) or Doc ID.
* If the search criteria entered is an exact match for only one patient/employee, the user will automatically be taken into that chart.  Otherwise, a list of patients/employees will be generated and the user can click on any of the employee/patient information such as last name, first name, DOB, etc to access the chart.
* If it is an exact match, it will go directly into the patient's chart. Otherwise, it will give you a list of choices that match the search you typed in.  You can select the patient or search again.
* Users can specify their default patient/employee search criteria by accessing the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) in Control Panel and editing the <em>Search By</em> setting.
* If desired, MIE can edit the system setting to turn off the <em>Search by Social Security Number</em> option.  This will remove the search ability from the Simple and Detailed search screens in E-Chart. It will also remove the Social Security column from the Recent Employees/Patients screen.   To turn off the social security search option in other modules or layouts, please contact MIE for assistance.
  
## **Changing System Settings Per User**  

* Users who have security access to [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) of the Control Panel are able to set their own system defaults and preferences as well as change settings for other users, individually or system-wide.  
* The [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) screen will default to the logged-in user's settings.  This can be changed by clicking the dropdown option in the upper-right corner of the screen.
* Users can view the help document named [My Settings](../system-administration/security/my-settings.md) that will explain every setting present on the screen.
* The following are some basic settings that can be changed for each user or could be changed for the entire system default.
   * <strong>Default Location</strong> (found in the WebChart User Interface section)- this is to designate the location that a user is associated with if more than one location is entered in the system. If more than one location exists, users should set the location where they work at most frequently with this setting.
   * <strong>Search By</strong> (found in the E-Chart Patient Search Criteria section) - this is to set the user's preferred patient search method by name, MR number, SSN, birth date, home phone number or document id.  
   * <strong>Starting Folder</strong> (found in the E-Chart Defaults section) - this will designate which chart tab the user will navigate to when accessing a chart.  
   * <strong>Number of Recent Patients</strong> (found in the E-Chart Defaults section) - this will determine the maximum number of employees/patients that will display in the <em>Your Recent Employees</em> section of the [E-Chart](https://system/?f=chart) screen.
* To save changes to the [My Settings](https://system/) screen, users should click on the <strong>Submit Settings</strong> button located at the top or the bottom of this screen. Once the changes have been saved, the user will receive a message to indicate that the setting updates were successful.
  
![](../basic-initial-system-information.assets/100002010000064000000214D29DBCBAD2A71DE6.png)  

  
### **Document Summary Tab**  

* By default, {{% system-name %}}  will include a <strong>Document Summary</strong> (or Documents) chart tab in the chart.  By design, all documents stored in the chart will be mapped to the Document Summary chart tab unless otherwise changed by a user.
* The number in parenthesis next to the title of a chart tab, in this case the Documents tab, indicates how many documents exist in that chart tab. If no number exists, no documents exist in that chart tab.
* When searching for documents in the chart, users can either navigate to the specific chart tab the document is mapped to or search in the Documents chart tab.  The Documents chart tab is intended to house all chart documents, so that users have a centeral location for all documents, if necessary.
* The Documents chart tab will list documents in chronological order, by default.  The documents can also be sorted by Doc ID, Doc Type (lists documents in alpha order), subject, etc.  Resorting the list of documents is done by clicking on the underlined headings such as Doc ID, Serv Date, Doc Type, etc.  
   * If users click the Doc ID heading, the list of documents will display in order of Doc ID with the oldest Doc ID listed first.  Users can click the Doc ID heading a second time to reverse the order and display the most recent Doc ID first. This action of reversing the order can be done with any column heading.
* Users can hover their mouse over the Documents chart tab and it will display the most current document stored in the chart.
* Users can click on the Doc ID to open/display the selected document.
* Users can change the default document view when in any chart tab.  This is done by using the dropdown located in the top-right corner of the Documents chart tab.

  
  ![](../basic-initial-system-information.assets/1000020100000640000001C16DDAD83923BE8CF9.png)  
![](../basic-initial-system-information.assets/10000201000006400000028B7717D74B8B84F757.png)  


  
## **Other Chart Tabs Within a Chart**  
  
Users can click on any chart tab located at the top of the charts to view or enter information, depending on the information needing recorded and the layout of the chart tab. Some chart tabs are made up of sub-tabs.  Clicking on the main parent tab will expand the listing of sub-tabs available to access from that parent. Chart tabs that store documents will display a number in parentheses next to the chart tab name, indicating how many documents exist in that specific chart.  If no number exists, this indicates that no documents are stored in that particular chart tab or the chart tab layout is not setup to store documents, but rather is setup to enter information such as medications/allergies, conditions, demographics, etc.

  
![](../basic-initial-system-information.assets/1000020100000640000001C16DDAD83923BE8CF9.png)  


Clicking the [Home](https://system/?func=omniscope) icon located towards the top-left corner of the screen will navigate the user back to their default landing screen.  The default landing page is defined per user in the [My Settings](https://system/) chart tab of the **Control Panel**. The *Default Page* setting drives this navigation.
  
![](../basic-initial-system-information.assets/1000020100000318000000E472C97DF287166AC7.png)  

  
## **Logging Out**  
  
To log out of the system, click the [Logout](https://system/?func=logout) sidemenu option.

  
![](../basic-initial-system-information.assets/100002010000040700000288654C13080CEB85FD.png)  

