---
id: '1pLP-8271fYi3d0yBZp8dKaZbvqpMs-aIpwLzjhC5L6g'
title: 'Panel Action Evaluator'
date: '2020-03-13T15:20:58.197Z'
version: 67
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1pLP-8271fYi3d0yBZp8dKaZbvqpMs-aIpwLzjhC5L6g'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The Health Surveillance tab is found in the Control sidemenu tab. To access the Panel Action Evaluator, click the hyperlink named as such at the top right corner of the Health Surveillance tab.

![](../panel-action-evaluator.assets/a89c14d122435040cec883cef1ad4768.png)

The Panel Action Evaluator can be used to test any rules/actions/panels after any actions and panels are set up. If you are testing, it's best to do on a test patient. Because when you run this evaluator or force actions, any orders that trigger will be inserted into the chart/patient you specified in the evaluator.

This *Panel Action Evaluator* is where you can ‘test' health surveillance rules that you have set up and check anything they are due for. This is a ‘testing' evaluator tool/screen to test to be sure your actions/panels/rules etc are set up correctly (you may want to test occasionally, or may want to test a new rule/action you just set up and had added). However, the only way to test using this tab will in fact do real things (create orders, encounters, appointments) for real people (or test charts) in the system. This was developed as a way to test the Health Surveillance functions, and the only way to test these things/rules/actions set up is to make them actually happen. If you were using this feature just for testing, you'd want to choose a fake patient record (in the *employee* field) to evaluate.

![](../panel-action-evaluator.assets/fdd47802fd456e3810887d2918c611be.png)

* <strong>Create Waitlist Appointments checkbox:</strong> This checkbox controls whether waitlist appointments are created along with orders when this panel action evaluator is run. This checkbox is checked by default.
* <strong>Remove Due Dates for Forced checkbox:</strong> If system setting <em>System</em>, <em>Health Surveillance</em>, <em>Allow Force No Due Date</em> is enabled, you will see an additional checkbox option. This allows option to not assign due dates to orders or encounters when using the force routine or force entry modes. It will remove (not assign) due dates to any orders which are forced when this is checkmarked.

![](../panel-action-evaluator.assets/3df60e2578adafb6dca8df7e8e133f22.png)

Set the specific panel, campaign, and if you need force options that you wish and click the EVALUATE button. It will then show on your screen a listing of actions according to the test criteria you entered. Those action items (order items) will then be shown on the patient's due list that you selected to evaluate. Click the *Testing Menu* link to get back to the Panel Action Evaluator.

![](../panel-action-evaluator.assets/76c52c7d8ae7e29631ee78ce36d5bad5.png)

OR you can click on the patient's name hyperlink to get directly into their chart to get to the due list to see what triggered, etc for validation.

![](../panel-action-evaluator.assets/eb5fa4c138fda69ca4d78ec6a2da96be.png)

{{% warning %}}
The Panel Action Evaluator removes any pending exit orders (if applicable) if the employee re-enters the panel. The Panel Action Evaluator also creates waitlist appointments when Force Routine or Force Entry are used. Also, whenever the Panel Action Evaluator runs, any pending orders for patients with explicit panel memberships will be deleted if that patient fails the Active Patient Clause criteria.
{{% /warning %}}

## Reset Anniversaries

For purposes of efficiency, we keep a record of when each employee's next birthday will be. Under normal operation this is not a problem, but if you use either of the time-travel features built into {{% system-name %}} (Demo Date system setting or Personal Time Machine feature from this HS Test), it is possible for those stored birth dates to get out of sync. You could do that by traveling to the future, evaluating some employees, then travel back to the present date. The *Reset Anniversaries* link clears out the stored next birth dates and allows them to be recalculated with the current date as a point of reference.

![](../panel-action-evaluator.assets/1f59f75dcebb03da9931352433ebda59.png)

## Time Machine

By clicking on the *Time Machine* link, you can change the date to a date in the future for that login session only and then proceed to do the testing of the rules/panels etc in the previous top criteria sections.

![](../panel-action-evaluator.assets/0e100bd1600638f81f530df1587f109b.png)

Using the Time Machine link is like switching the date on your computer to be a date (and/or specific time) in the ‘future' and it is only for this login session only and it changes the effective date of all actions and evaluations.

![](../panel-action-evaluator.assets/e52fdec7cbf61904be8eeb7215f38e2e.png)

When you are done, you can click the *Time Machine* link again and clear the date (and/or time) out and *submit* in order to get back to today's date and time, or you can set a different date/time.

![](../panel-action-evaluator.assets/939112817912fcc61062ddb0e0a4ebec.png)

When you are working in {{% system-name %}} (with Personal Time Machine date enabled), you will see a red banner at the top of every {{% system-name %}} page.  The date that you traveled to (in the personal time machine module) shown in the banner is a hyperlink that takes you to the screen for changing or clearing the date. Quickly click that date in the banner to access back to the Personal Time machine setting screen.

![](../panel-action-evaluator.assets/70fb316c9bdb41cf2f9714b714376eb3.png)

## Active Patient Check

By clicking on the *Active Patient Check* link, you can use this to determine if the system considers a particular patient/employee **active** for Health Surveillance purposes.

![](../panel-action-evaluator.assets/41ad69a71c76e325147b9a9cd9be0dcb.png)

The *Active Patient Check* evaluate system setting named *System*, *Health Surveillance*, *Active Patients Clause* for the chosen patient you key in the auto-complete. This system setting can be set with specific criteria (by an MIE Developer) with clause programming criteria you wish "active" Health Surveillance patients/employees to be considered as and is dependant on what your HR Interface may send in as status and what you want the system to consider as "active" patients.

![](../panel-action-evaluator.assets/2a1d8f96ab464d50ce7b190205264a4e.png)

Once you click the hyperlink, you can select a patient via the auto-complete field.

![](../panel-action-evaluator.assets/7f182911de0e5871b9d70f0ffc601c3d.png)

Once you click the SUBMIT button, it will tell you if the patient/employee is considered Active or not for the specific Health Surveillance purposes according to the criteria programming of that system setting.

![](../panel-action-evaluator.assets/0af9d9de474916a79da2a26b084a2aa0.png)
