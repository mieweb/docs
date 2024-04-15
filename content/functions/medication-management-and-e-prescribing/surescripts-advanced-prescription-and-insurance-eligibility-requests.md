---
id: '10pV3eacY-IWnPxewGE1uRdoQBkTCYF7Wj424cQrr6zg'
title: 'SureScripts Advanced - Prescription and Insurance Eligibility Requests'
date: '2020-02-27T20:07:44.004Z'
version: 73
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=10pV3eacY-IWnPxewGE1uRdoQBkTCYF7Wj424cQrr6zg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The SureScripts advanced functionality includes access to Prescription Benefits (insurance eligibility and prescription drug benefit information of both formulary and eligibility), access to patient's Medication History and the ability to do Prescription Routing to Mail Order Pharmacies using the formulary selected. {{% system-name %}} will maintain a record of whether the patient was eligible for coverage in the patient benefit table for future reference and a request can‘t be sent more than once every 72 hours per patient.

## Prescription/Insurance Benefit Eligibility/Formulary Requests

Accessing a patient's prescription benefit information (both formulary and eligibility) allows prescribers to choose medications that are on formulary and are covered by the patient's drug benefit. Prescribers can also choose lower-cost alternatives such as generic drugs. Dispensing pharmacies are less likely to receive prescriptions that require changes based on the patient's drug benefit, which, in turn, reduces unnecessary phone calls from pharmacy staff to practices regarding drug coverage.

You can run individual patient eligibility request or you can run eligibility requests in mass from the day's scheduler in {{% system-name %}} . SureScripts has mandated that an eligibility request cannot be sent more than once every 72 hours. You will get a message if you attempt to run eligibility on a patient within the 72 hour time frame of a previous eligibility request and your request will not render. You must run eligibility before you can utilize the dosing & formulary features in the prescribe module. When drug eligibility has been run on a patient, the formulary for the patient's benefits is loaded into their chart and will show when you prescribe from the e-meds tab or from the encounter. Below goes thru these steps to obtain drug eligibility for patients.

### Individual Eligibility Checking from Chart

Any user can perform an eligibility check when in the patient's chart.

When in the patient's chart, find the chart tab named *Drug Eligibility.* You must have security permission *[E-Chart: Patient Insurance Policies]* set to at least "view" level to run the individual eligibility inquiries.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/4f325022b98f0b4c691cb8aba20c2053.png)

When in the *Drug Eligibility* tab of the patient's chart, it will show you the **Drug Eligibility Request** screen.

The patient information pre-populates since you are in the patient's chart. This includes last/first name, date of birth, and any insurance policy number on file in the patient's demographics tab in the insurance section. You can key in a policy number if you don't have one pre-populating.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/6f343288edc25d2f40b51d82e0a48bce.png)

The Service Provider field pre-populates to be the physician who is set as the **attending physician** on the patient's demographics tab of {{% system-name %}} . If this field is blank, that means there is no attending physician linked to the patient and you can still type in the last name of the provider for your practice and use the auto-complete to select. Even if the attending physician pre-populates this field, you can change that and auto-complete the service provider for this eligibility check. The specific Service Provider that you have in this field will have their correlating NPI number in the next field. *The Medication History and the daily eligibility report have a default physician that will be used if the logged in user does not have a national provider id and no attending physician for the patient has been set. Contact your MIE Implementer to make sure that default system setting is set (E-Prescribing, SureScripts, Default Physician [the value should be the user_id of the physician]).*

The Payer field will say RXHUB which is the SureScripts database the feature is pointed to that retrieves eligibility information.

Click the SEND REQUEST button when you are ready to send a request to retrieve the patient's benefits eligibility.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/6f343288edc25d2f40b51d82e0a48bce.png)

You will receive a message if the patient has already had an eligibility check run within the last 72 hours. The message will also note which doc.id it is currently in the patient's chart and you can click that hyperlink to get to it directly.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/87dc80b85fd2185f027469e9d95ec69a.png)

Otherwise, when you click SEND REQUEST button and it's not within 72 hours of the last eligibility request for that patient, it will instantly show the Eligibility Information on your screen.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/9066342fb2660ac5ad325ec3e71fae5a.png)

Not only is the Drug Eligibility shown on your screen, this Drug Eligibility documentation was automatically stored into the patient's record with a doc.id (doc.type INS_ELIG) in the patient's doc.sum tab. So at any time, you can find that stored document now in the patient's chart to refer to or print off, etc.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/aba5807546feb2b1c3603b2348c420b8.png)

If you have the patient's information as something different from the database the eligibility came from, it will state this message: *Information different from current patient demographics is shown in bold.* This just alerts you that the database has different information stored for that patient's demographics than your system does and how you have it entered in the patient's demographics chart tab. You can use this information to update the patient's record or confirm with the patient.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/ccd623a214113686b8f65595a20842cc.png)

When you run drug eligibility, it will also automatically update the patient's insurance in {{% system-name %}} demographics insurance section.

When eligibility is run for a patient, you can see the date/time it was run from several modules.

When you are working in the patient's chart and in the E-Meds tab prescribing or documenting allergies or medications, etc. you will see it displays the *Last Eligibility* with date/time that was run for that patient at the top right corner of the screen. Click the hyperlink on the date/time of the Last Eligibility that displays to open that specific eligibility document stored in the patient's chart. It opens the stored document in a new window on your screen. To get out, simply X out of the window.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/2634e7b1138ee58069994eea1f674689.png)

If you have the MY SETTINGS scheduler preference for SHOW LAST ELIGIBILITY set to *yes*, on the scheduler view you will then see when the **Last Eligibility** was run and at what time for that patient in their appointment slot. Click the hyperlink on the date/time of the Last Eligibility that displays to open that specific eligibility document stored in the patient's chart.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/d137ff094ae6f4f03922652150f48fe9.png)

It opens the stored document in a new window on your screen. To get out, simply X out of the window.

If the patient did not have eligibility ever run yet, it will not show *last eligibility* in the scheduler view for the patient's appointment.

### Eligibility Checking from the Scheduler

Any user can perform an eligibility check in mass for the entire patient's on today's schedule in {{% system-name %}} . This will run drug eligibility checks on all patient's at all locations for all resources scheduled for today's date. The report queries any and all patient's on any schedule in {{% system-name %}} (regardless of physician/location, etc). You must have security permission *[Control: Manage System Reports]* set to at least "Run Only" level in order to run Drug Eligibility's in mass from the scheduler.

From the Scheduler/Appointments view, click the link *Run All Drug Eligibility*.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/be13978420dd0bcc9163ee158b464191.png)

This will bring up a screen that is titled *Check eligibility for everyone on the schedule for today*. The query function will automatically start in a new opened window on your screen. If you have a lot of patients on the schedule for the day, this will take up to 1-2 minutes depending on your schedule load. Please wait until the query function is complete. You will see a message at the top that it has performed action when it is complete.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/9a5f4c50c1b1565afd8307dcfe1027d7.png)

It will also show many column titles and it isn't essential to understand what each column is or for. This is simply the way to get to the query that will run all patients scheduled for appointments in {{% system-name %}} for today's date and the service provider is pointed to the appointment resource the appt is scheduled with.

{{% info %}}
If this screen shows empty (no patient's listed) then there are no patient's scheduled for appointments today.
{{% /info %}}

If there were no patient's scheduled for appointments with today's date, the screen listing would be empty and if you clicked the Perform link anyhow (with no patient's listed to query eligibility for), you would see this message:

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/428eba1fa4d9f0324429988a914d1eb6.png)

After successful drug eligibility, retrieval for all patient's scheduled for appointments for today's date. You can now get out of this report (X out of this opened window) and work elsewhere in {{% system-name %}} . The Drug Eligibility document you queried is now in the patient's chart automatically saved as doc.type INS_ELIG (named Insurance/Prescription Eligibility) and defaulted to chart tab named Doc.Sum but you can have the doc.type placed in whichever chart tab you wish system wide.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/95023d3a6cbc06fce855371a3e71757b.png)

When you run drug eligibility, the system saves the policy and formulary information from these eligibility inquiries and the insurance policies are inserted as inactive by default in the insurance section of the patient's demographics.

When eligibility is run either individually per patient or in mass using this method for today's appointments, you can see the date/time it was run from several modules in the patient's chart.

When you are working in the patient's chart and in the E-Meds tab prescribing or documenting allergies or medications, etc. you will see it displays the *Last Eligibility* with date/time that was run for that patient at the top right corner of the screen. Click the hyperlink on the date/time of the Last Eligibility that displays to open that specific eligibility document stored in the patient's chart. It opens the stored document in a new window on your screen. To get out, simply X out of the window.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/2634e7b1138ee58069994eea1f674689.png)

If you have the MY SETTINGS scheduler preference for SHOW LAST ELIGIBILITY set to *yes*, on the scheduler view you will then see when the **Last Eligibility** was run and at what time for that patient in their appointment slot. Click the hyperlink on the date/time of the Last Eligibility that displays to open that specific eligibility document stored in the patient's chart.

![](../surescripts-advanced-prescription-and-insurance-eligibility-requests.assets/d137ff094ae6f4f03922652150f48fe9.png)

It opens the stored document in a new window on your screen. To get out, simply X out of the window.

If the patient did not have eligibility ever run yet, it will not show *last eligibility* in the scheduler view for the patient's appointment.
