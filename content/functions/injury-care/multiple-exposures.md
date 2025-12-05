---
id: '19uUHx3PZhuq7G8sjJtyeDdPeXYhB5pmD-OJ2Ts4u5oQ'
title: 'Multiple Exposures'
date: '2025-11-24T16:25:55.493Z'
version: 637
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=19uUHx3PZhuq7G8sjJtyeDdPeXYhB5pmD-OJ2Ts4u5oQ'
wikigdrive: 'v2.15.30'
---
The Multiple Exposures module is used to collect and store data on source patients. The exposure chart also identifies any individuals that were potentially exposed to the source patient. The purpose of the module is to collect data regarding the exposure case/incident and copy that information to individually exposed patient/employee charts. This module is not used for BBP/BFE (Body Fluid Exposures). Use the BBP/BFE Initial and Follow up encounters for BBP/BFE's type exposures.

## Searching for Existing Multiple Exposures

1. Navigate to and click on the sidemenu item for Multiple Exposures.

![](./multiple-exposures.assets/c33d2a0c82010ee0ebf8b4b1a2984dca.png)

2. To view all existing multiple exposures, simply click the Search button. To search for a specific multiple exposure, type in the last name of the Source Patient and click the Search button.

*Hint: Select the Multiple Exposures to set the Perspective and hide unused fields in this workflow.*

![](./multiple-exposures.assets/d314cae2aa6f34ab2cf0e0e50ef14440.png)

## Adding a New Multiple Exposure

1. Click the Add New button to the far right of the Multiple Exposure Search.

![](./multiple-exposures.assets/4f6eaf71a6e4aad8b610cdbaca0a9b11.png)

2. Enter the Last and First name of the Source Patient.

![](./multiple-exposures.assets/bef6e2e7517a8eaac934a12ffbdcad20.png)

3. Once the Multiple Exposure chart is created, the user is taken to the ‘Overview (MEXP)" chart tab. On the Overview (MEXP) chart tab, enter the Exposure Contacts (Exposed Patients/Employees) in the Contacts section.  Make sure to use the autocomplete (search by last name), enter the Relation type of "Exposure Contact", the start date of exposure, and then click the "add" button. Click the ‘save/continue' button to save.

![](./multiple-exposures.assets/251f3ae69113e996e22769d55fc352a1.png)

4. No other sections need to be completed on Overview (MEXP) at this time. Proceed to entering the exposure details.

## Closing a Multiple Exposure

1. When a multiple exposure case can be closed or is no longer needed the exposure can be deactivated. To deactivate a multiple exposure, navigate to the multiple exposure chart and open the "Multiple Exposure" section on the Overview (MEXP) chart tab.
2. Enter the deactivation date in the "Date Deactivated" field and then save.

![](./multiple-exposures.assets/481204847b9d1d7fb67777f9e98906ea.png)

3. Once the chart is deactivated, it is no longer searchable in the Multiple Exposure module. The chart, however, can still be located using the Detailed Chart Search (E-Chart side menu tab) or the "Demographic Report (EH)" located in the Reports module. If needed, a multiple exposure chart can be reactivated by simply removing the deactivation date.

## Completing the Multiple Exposure

1. Click the "Add Multiple Exposure" link on the right hand side of the screen.

![](./multiple-exposures.assets/674cd4153c21fedd3797137de1c32e1a.png)

2. Enter the provider and clinic location of the person <em>completing</em> the multiple exposure. (not the location of the incident/exposure).

![](./multiple-exposures.assets/0a96e5575b2990bbd466b83ab770b280.png)

3. Enter the Multiple Exposure Source Patient Data Info Section. This data is configurable by the client using a flowsheet. Note this data is collected and only stored on the Multiple Exposure chart. Only Case/Incident data is copied to exposed patient charts.

![](./multiple-exposures.assets/94cd6c7c4f7ab11e2fbbb5c766e7ef4c.png)

4. Add A case as you would as if you were creating an individual case on a patient chart. Click continue/save at the bottom of the case section.

![](./multiple-exposures.assets/c790b6cc0ca4bff7b63ac92ea9263006.png)

![](./multiple-exposures.assets/12743dbd6d907bf117415baf5fe1c522.png)

![](./multiple-exposures.assets/d407ce63f0814877b897f553268d71ce.png)

![](./multiple-exposures.assets/471737c95282423351b1e55af2bfc1d2.png)

5. After entering the case specific information, a list of contacts will display at the bottom of the Multiple Exposure encounter. Select the contacts that you wish to copy the case information to, and then click the "Copy to Contact" button.

**_Note: If a case information has already been copied to a patient chart, a link to the case will display in the Case column. Simply click on the case to navigate to the patient chart._**

![](./multiple-exposures.assets/a7fd72a69bee51044116d6b4867b1543.png)

6. After copying the multiple exposure information to a chart, a message will display in the upper right hand corner of the screen letting you know the number of successfully processed records.

![](./multiple-exposures.assets/b8addb98a4dc1d7331429465f5fd0db3.png)

7. After the cases have been copied to the patient chart(s), a link to the team member/patient's chart with the case number will display in the Case column of the Exposure contacts List.

![](./multiple-exposures.assets/9cc717da1d5fbadf9d2bdbbde7d5bfba.png)

8. Once the multiple exposure has been copied to the individual charts, archive and close the encounter. Users may still select and copy incident data to individual charts. However, if new contacts are added to the Overview MEXP after the encounter is closed, the encounter will need reopened, so the contact list can refresh.

## Administrative Notes

* You can only copy the case to a patient chart once. Any changes made on the Multiple Exposure Case (source patient) can not be re-copied nor auto-updated to the exposed patient chart(s)/contacts. You must make any updates directly in the exposed contact's chart(s) after it has been copied from the Multiple Exposure (source patient) encounter.
* Only one Multiple Exposure encounter should be opened per Multiple Exposure chart. Multiple Exposure charts should be deactivated when no longer in use to prevent using more than once.

## Reports

The Incident Report (Reports module) will no longer display the Multiple Exposure (last plan) data in the Incident report. If this module is manually installed on older legacy systems, then EH will display the Source Patient Multiple Exposures in addition to each chart the multiple exposure was copied to. When running the Incident Report, users may need to filter out multiple exposures, depending on the use case for running the report.

![](./multiple-exposures.assets/88d973d8302a85bf816f6182d0b27fc3.png)
