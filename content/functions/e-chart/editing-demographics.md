---
id: '1kJrBWrFd8Hd7ECcmDi0hRkIDo01RPj_bRNxinQd17Rs'
title: 'Editing Demographics'
date: '2020-03-25T16:40:50.153Z'
version: 69
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=scheduler&s=appt_wizard&location&startdateDAY=4&startdateMONTH=12&startdateYEAR=2018&startdateTIME=05:08pm'
  - 'https://system/?f=chart&s=docq'
source: 'https://drive.google.com/open?id=1kJrBWrFd8Hd7ECcmDi0hRkIDo01RPj_bRNxinQd17Rs'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
To edit demographics in a chart, the user must have the appropriate security permissions.

{{% note %}}
If your practice has an interface from your practice management (PM) system or an HR system into {{% system-name %}} , you will have to always edit demographic information in the other system.  That way any updates/edits will automatically come over (via the interface) into {{% system-name %}} for the respective charts.
{{% /note %}}

There are two ways to edit demographics in a chart. One is to find the **Demographics** chart tab in the chart. This can be found as a subtab of the **Admin** chart tab. Once there, users will see an **Edit Demo** link, which allows for editing the chart demographics.

![](../editing-demographics.assets/432fa8066f4a948b857acf83336383ed.png)

The alternative method for editing chart demographics is from the **Demographics** chart portlet, found on the patient's **Summary** tab. Here, users can simply click the **Manage Info** icon that looks like a pencil, and this will take the user to the **Demographic Information** page.

![](../editing-demographics.assets/fd7e1152f23eb97036dce60e60e41ff7.png)

The Demographic Information screen is a layout that can be altered to collect the specific data fields needed for the business workflows or reporting needs. Contact your MIE Implementer if you need to add additional fields to capture specific data on this screen.

{{% note %}}
Red fields are required fields that must contain data in order to create, save, or edit a chart.



![](../editing-demographics.assets/ad6b8cbf0e372e5003bbefaa2f389ad2.png)


{{% /note %}}

Following is additional information regarding specific fields found on the demographics screen:

* <strong>Death Date</strong>:  You can checkmark the box if the patient is deceased.  You can also enter a specific date of death if you have one.  The system can also be programmed to display the death date, if there is one, in red in the DemoHeader for patients.  Marking a patient as deceased documents it for the patient, but it also prevents those types of patients from showing in certain places in {{% system-name %}} .  For example, if the patient is deceased then the patient's name won't display in the auto-complete for Patient Name when transcribing; or if a patient is marked as deceased, the patient's name won't display in the auto-complete patient field for making an appointment using the [Wizard](https://system/?f=scheduler&s=appt_wizard&location&startdateDAY=4&startdateMONTH=12&startdateYEAR=2018&startdateTIME=05:08pm) in the <strong>Scheduler</strong>.
* <strong>Phone Numbers</strong>:  You can enter phone numbers in international format, if needed.  To enter an international number, first type the plus sign (+) in the field and then continue to type in the international phone or fax number. If you type the plus sign first, there will not be any automatic formatting done to the entry. Otherwise, standard US formatting will still be applied if the plus sign is not entered first.
* <strong>Country</strong>:<strong></strong> This field is shown above the Postal Code field. The Country field is set to United States, by default, when a user's Default Location preference has not been set by the logged-in user. The Default Country can also be set system-wide, via the system setting.
* <strong>Temporary Chart</strong>: This checkbox in this section should be used cautiously. Checking this box indicates and controls the temporary or permanent status of the chart. This allows a temporary chart received over an interface or portal to be set as permanent. Most workflows needing this functionality are looking for a quick means to make permanent, or active, any temporary charts coming over an established interface. Unchecking a temporary chart (to make it active) would then auto-assign a medical record number in the next section (or a medical record number may need to be manually selected, depending on the partition setup), since it would be marked as a permanent (active) chart, instead of a temporary one.
* <strong>Active Chart</strong>: This checkbox should be selected by default, indicating the chart is active and can be searched for in various areas of the system. If the chart needs to be marked inactive, simply uncheck the box and save the edit. Inactive charts are not searchable from E-Chart in Simple mode but can be searched in the Detailed E-Chart mode. A chart can also automatically be marked inactive by the system if someone chooses to ignore an incoming document in the [Document Queue](https://system/?f=chart&s=docq).

After all edits are done click the **Save** button at the bottom of the screen.

## Viewing All Revisions to the Demographics Tab

If you have security permission, you can view all revisions in a list format that were done to that chart's demographics.  When in the Demographics chart tab, click **Patient Revisions** link found just above the chart's demographic information.

![](../editing-demographics.assets/5a68afd91ecf98f47236025af1f24dfb.png)

The system will display the count of revisions done for demographics on the chart. The system always displays the information from the chart for the last known revision.

![](../editing-demographics.assets/e63e7916ebbeb1405e15b90375942c5c.png)

The chart's most current demographics display on the screen (the last known revision), but as you scroll down you will see the **Revisions** list view section. All revision history is listed, the detail of each revision, such as revision date/time and who revised it.

You can click on any **Revision Number (#)** link on the specific demographics revision you wish to display on the screen.

![](../editing-demographics.assets/c0f99623005d00697b00447bf627703d.png)

In this example, revision # 2 was clicked.  The system refreshed and displays all the demographic info on the screen for revision 2. It also identifies that I am viewing revision #2 at the top.

![](../editing-demographics.assets/e5f9fe5627c0532b84ed2ff53dfceb25.png)

Click **Back to Patient Demographics** hyperlink to get back to the general demographics tab summary in order to exit out of patient revision mode.

![](../editing-demographics.assets/c675d2615454bfff2dfe0457e0d263bb.png)
