---
id: '1kJrBWrFd8Hd7ECcmDi0hRkIDo01RPj_bRNxinQd17Rs'
title: 'Editing Demographics'
date: '2024-12-02T18:37:46.968Z'
version: 119
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=docq'
source: 'https://drive.google.com/open?id=1kJrBWrFd8Hd7ECcmDi0hRkIDo01RPj_bRNxinQd17Rs'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
To edit demographics in a chart, the user must have the appropriate security permissions.

{{% note %}}
If your practice has an interface from your practice management (PM) system or an HR system into {{% system-name %}} , you will have to always edit demographic information in the other source system.  That way any updates/edits will automatically come over (via the interface) into {{% system-name %}} for the respective charts.
{{% /note %}}

From the **Demographics** portlet of the Summary dashboard tab, one can click on the **Manage Info** icon that looks like a pencil.

![](../editing-demographics.assets/7cbcc8fb7aa18a6c581260a72926a1fc.png)

That will take the user to the **Demographics** chart tab page. To manually update any demographics, simply click anywhere on the grey *Demographic Information* title bar area.

![](../editing-demographics.assets/70173554d95c6ae72cbc5ba1a99b969e.png)

The Demographic Information screen is a layout that can be altered to collect the specific data fields needed for the business workflows or reporting needs. Contact your MIE Implementer if you need to add additional fields to capture specific data on this screen.

![](../editing-demographics.assets/0f3c57edb6569c24cadd76fe01a10a8d.png)

Following is additional information regarding specific fields found on the demographics screen:

* <strong>Death Date</strong>:  You can enter a specific date of death if you have one or simply select Yes to the <em>Is Deceased</em> field.  The system will put a red Death Date in the dark grey patient header to clearly indicate (when working in a chart) that they are deceased. Marking a chart as deceased not only documents it in the chart demographics, but it also prevents those types of charts from showing in certain places in {{% system-name %}}.  For example, if the chart is deceased then the chart won't display in the auto-complete for Patient Name when transcribing; or if a patient is marked as deceased, the patient's name won't display in the auto-complete patient field for making an appointment using the Wizard in the <strong>Scheduler</strong>.
* <strong>Phone Numbers</strong>:  You can enter phone numbers in international format, if needed.  To enter an international number, first type the plus sign (+) in the field and then continue to type in the international phone or fax number. If you type the plus sign first, there will not be any automatic formatting done to the entry. Otherwise, standard US formatting will still be applied if the plus sign is not entered first.
* <strong>Country</strong>:<strong></strong> This field is shown above the Postal Code field. The Country field is set to the United States, by default, when a user's Default Location preference has not been set by the logged-in user. The Default Country can also be set system-wide, via a system setting.
* <strong>Exclude from Quality Care:</strong> This typically gets set to Yes if the chart is a test type chart and you don't want it to be included in reporting or automated jobs, etc.
* <strong>Temporary Chart</strong>: Default is No and indicates this is a permanent medical record.  This radio button section should be used cautiously. Selecting Yes, indicates the chart is temporary and applies a red banner across the top (once the section is saved) of <em>Warning: Temporary Chart</em>. Some workflows (for example: applicants) may need their chart to be ‘temporary' until permanently hired.
* <strong>Active Chart</strong>: Default is Yes and indicates this is an active chart.  Active charts can be searched for in various areas of the system. If the chart needs to be marked inactive, simply set it to No. Inactive charts are not searchable from E-Chart in Simple mode but can be searched in the Detailed E-Chart mode. A chart can also automatically be marked inactive by the system if someone chooses to ignore an incoming document in the [Document Queue](https://system/?f=chart&s=docq).

After all edits are done click the **Save** button at the bottom of the section.

Subsequent sections are available for manually editing other information besides just chart demographics.  Such as Employment Information, Marital/Emergency Contact Information, and Other Data.

![](../editing-demographics.assets/ac24c4559d78e4d4cbafa4b67bce327b.png)

## Viewing All Revisions to the Demographics Tab

If you have security permission, you can view all revisions in a list format that were done to that chart's demographics.  When in the Demographics chart tab, click the **Patient**** Revisions** hyperlink found just above the chart's demographic information.

![](../editing-demographics.assets/29843962a40e8a3df036c0906e1ddf61.png)

### Demographics Data revisions

The system will display a **Demographics Data** datavis section which displays the count of revisions on demographics information on the chart.  The Demographics Data revision section is a datavis that you can put in a column order as you wish, hide/show columns, create perspective(s) for your viewing needs, and group or pivot or filter revision history as needed.

The chart's most current demographics is the last known revision on this listing (highest revision number listed), but as you scroll down you will see all prior revision history listed, the details of each revision (within columns), be able to compare between revisions, as well as revision dates/times and who revised.

![](../editing-demographics.assets/dfa3bf7886de4b6e854048ce02cf4d62.png)

### Employment Data revisions

The system will display an **Employment Data** datavis section which displays the count of revisions on employment information on the chart if your system is enabled to use employment type workflows.  The Employment Data revision section is a datavis that you can put in a column order as you wish, hide/show columns, create perspective(s) for your viewing needs, and group or pivot or filter revision history as needed.

The chart's most current employment data/information is the last known revision on this listing (highest revision number listed), but as you scroll down you will see all prior revision history listed, the details of each revision (within columns), be able to compare between revisions, as well as revision dates/times and who revised.

![](../editing-demographics.assets/988c10e6a0884fef23e06f1eaed38187.png)

Click **Back to Patient Demographics** hyperlink to get back to the general demographics tab summary in order to exit out of patient revision mode.

![](../editing-demographics.assets/c0ac3d67f0b00c3bbfaddfe371dda25d.png)
