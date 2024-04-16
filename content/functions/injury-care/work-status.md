---
id: '1EuB61nCaNeWo6leAxOJQb9kK8Vqqhba95SNwjTa-6_0'
title: 'Work Status'
date: '2023-10-16T17:47:07.508Z'
version: 108
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1EuB61nCaNeWo6leAxOJQb9kK8Vqqhba95SNwjTa-6_0'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
When written opinion data is keyed into the recommendation section of an encounter, it fills in the Work Status report. Work Status information/documents are found in an encounter additional view, the Work Status chart tab, patient portlet, portal employee page, and portal supervisor page. The Work Status is a summary of an employee's health surveillance status, and can be used by an employer to determine eligibility as to whether the employee is fit to perform his/her duties. It is designed to show current restrictions, off-work status, return to work date(s), and medical clearance determination in real-time.

The Work Status document is made up of several key parts: Demographics information, current restrictions/accommodations, health surveillance status, open claims, provider info, and whom to contact.

## Recommendations Section of Encounter

To work a health surveillance recommendation and generate a work status document, expand the Recommendations section of an encounter.

![](../work-status.assets/e22dbb07ee3a59081def3e8f0088580b.png)

Under the grid showing any recommendations (medical opinions) that are on the patient's pending due list, there is a checkbox to *Generate Work Status Report*. When checkmarking this, it will create an additional view when the encounter is closed/archived and it will create a separate Work Status document. Note: A Work Status document can always be created via the Work Status Chart Tab instead, but this is ability to do it while working in an encounter and is optional here.

![](../work-status.assets/189e784163d07c7fbbcc550856a8b531.png)

The free text box for *Work Status Introductions* is an optional area to free type an introduction if this work status document is going to go to someone specific (ie: shared to a supervisor) and you want to type in some free text for an introduction making it more personal or offering expanded content.

Then apply the specific recommendation to the encounter exam that an opinion will be generated on. See separate help documentation titled *Encounters-Recommendations Section.*

When done working in the Recommendations section of the encounter, when you go to the encounter ‘view', the Recommendations section is shown along with any work status report generated introduction verbiage.

![](../work-status.assets/efaf94016f2b25c804c74e0c9a88d972.png)

If the *generate a work status* checkbox was checkmarked in the Recommendations section of the encounter, upon close/archive of the encounter, it will produce a separate (additional view) document stored to the patients' chart named *Work Status Report* which you can see on the encounter ‘view' of all documents archived from the encounter.  The additional encounter view *Work Status Report* document is created if the encounter exam has an additional layout view programmed on it to support Work Status Report.

![](../work-status.assets/ceb296a3a46040ea528b6b00899a2ae0.png)

The additional view on the encounter if *generate work status report* was checkmarked:

![](../work-status.assets/a2005892795aaafbac943b335cc522dd.png)

Work Status reports are stored in the Work Status chart tab and document summary chart tab.

{{% note %}}
The Work Status Report and the recommendation (medical/written opinion) store as separate documents but collectively comprise information together.
{{% /note %}}

![](../work-status.assets/9af3831a401e2db68019379aac19f15b.png)

## Work Status Chart Tab

The Work Status chart tab in a patient/employee chart houses all Work Status information. The top portion of the screen displays the last most recent recommendations (health surveillance) status data. This information displayed here is the most recent, current, real-time status information done from encounters recommendations section.

![](../work-status.assets/a1ee6609182cd9d009b688d630d8ae2d.png)

At the bottom of the Work Status chart tab is a listview of previous stored Work Status report documents.

![](../work-status.assets/43bc1612cec36f786a28da889c28fed9.png)

Not always does one *generate a work status report* when working in an encounter. Once can do it quickly for more up to date information here from the Work Status chart tab. Simply click the *Create Work Status Report* button found here in the tab under the current work status information displayed.

![](../work-status.assets/c71025b98407497d613391f3a8180fee.png)

Once that button is clicked, the system will create a work status report document to store in the patient's chart of the information that was displayed within the Work Status tab that was displayed at the time of the button click. The stored document is accessible from the listview at the bottom of the tab. It can be shared via print, fax, batch, etc.

![](../work-status.assets/727356553cb055427a4aa1764722be18.png)

Work status stored documents are also accessible from within the patient's chart Summary chart tab within the portlet *Documents*.

![](../work-status.assets/c089e107a7e6551c835acb9fa1b58e74.png)

And from the Document Summary chart tab within the patient's chart.

![](../work-status.assets/af11ef0ea57010ed7ae4226164d9059c.png)

## Work Status Portlet

The Work Status portlet (in the Summary chart tab) of a patient/employee chart displays real-time Work Status information. This portlet is here for quick viewing. Any recommendation surveillance status that was marked as ‘completed' will display surveillance status info in this portlet. The same information is visible in the Work Status chart tab. Previous stored/generated work status ‘documents' are stored within the Document Summary tab or Work Status tab listview as described in pages above.

![](../work-status.assets/861fbc621892da7df1387607c37566f2.png)

## Work Status Changes

Surveillance Changes section of displayed work status information (or in a generated work status report) will show data if the patient has previous status updates. If the patient had a previous health surveillance panel status and you had to re-enter recommendations on an existing current encounter, you will get the "Changes" section.  If the status changed in any way, this section will display.

![](../work-status.assets/ef0e7f159631fd17e9d2c45fe89928ed.png)

Whereas the "Status" section just lists all current completed surveillance panel statuses.

![](../work-status.assets/3b94410ee5c373207078a2d5d7c00f8e.png)

## Work Status Email

An email template named *Pat Work Status Report* can be utilized to email and share the same real-time work status information displayed in the Work Status chart tab and Work Status portlet from the Summary chart tab. This is available from within the patient's chart via the Email hyperlink.

![](../work-status.assets/09b5990d5060fd98d8a8707949e79ab1.png)

## Portal

The Supervisor Portal can be setup with a Work Status menu.

![](../work-status.assets/01ba8986d0350f8cff3c39fe6b44ff9f.png)

From within the Work Status portal menu in the Supervisor Portal, if a supervisor user has employee charts linked to them, the supervisor can view shared Work Status documents if configured. The Work Status displayed here in the supervisor portal must be a stored document in the patient's chart. Therefore the ‘generate work status report' steps must have been done to generate a stored document in the patient's chart. The last, most recent stored Work Status document is shown here in the Work Status menu of the Supervisor Portal.

![](../work-status.assets/491c8788f8624d53c52af82e88481fea.png)

## Optional System Settings

There are two system settings that can be enabled or disabled that affect the Work Status. If enabled or disabled by a superuser, it will enable or disable for the entire system. These are *Include Open Claims* and *Panel Membership Expiration Day Limit.*

![](../work-status.assets/973a6c7124ec8fa040c9d8a57180304b.png)

* <strong>Panel Membership Expiration Day Limit:</strong> The default value is "0" indicating disabled.  If enabled, key in a number (in the value field) which would then be interpreted as the number of days.  The Work Status pages (portlet, chart tab, encounter views) will display any expired panel memberships based on the value of this system setting if enabled.  Expired means it's past the ‘next due date' on the panel status. This setting is used in the work status pages so that it displays expired panel memberships on a chart only pas a specific set (value) number of days.  By default, the work status pages include any/all panels on a patient where the panel expire date is between this system setting value (0) days ago and today/now.  If this system setting were to have a value of 5 and today's date were 9/14/2017, the work status will show/include all panel memberships for a chart between 9/9/17 and 9/14/17 whether active or expired.
* <strong>Include Open Claims:</strong> The default value is "1" indicating enabled. This displays any/all open cases (whether they be work comp or not) on the Work Status report tab, generated stored document, and elsewhere (ex: portal) where Work Status is viewed. If the system setting <em>Include Open Claims</em> is enabled (is enabled by default), the section <em>All Open Cases</em> will display any case the patient has in their chart on Work Status areas/documents regardless if the encounter (where the surveillance status was generated from) is tied to a specific case or not.

![](../work-status.assets/1131cc70325f2f047927ee02876797ef.png)

{{% note %}}
If the encounter the Surveillance Status was generated from is linked to a specific case, then the linked case information will display in the *Related Case* section anytime viewing a Work Status document or Work Status chart tab, etc. Meaning, *related case* section will always display on any work status area if the specific encounter (where surveillance status/recommendation was completed in) was linked to a case.
{{% /note %}}

![](../work-status.assets/f6adb18d0e68468768d01c2773b926a0.png)
