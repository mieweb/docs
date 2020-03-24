---
title: "Panel Action Evaluator"
date: 2020-03-13T15:20:58.197Z
url: "panel-action-evaluator.md"
author: Jeremia Ploor
id: 1pLP-8271fYi3d0yBZp8dKaZbvqpMs-aIpwLzjhC5L6g
source: https://drive.google.com/open?id=1pLP-8271fYi3d0yBZp8dKaZbvqpMs-aIpwLzjhC5L6g
menu:
    main:
        name: "Panel Action Evaluator"
        identifier: "1pLP-8271fYi3d0yBZp8dKaZbvqpMs-aIpwLzjhC5L6g"
        parent: "13d8ccdFH7JxUSmcuuvP6MbeYsXaR-GYMpSLZpwYvERg"
        weight: 1820
---
The Health Surveillance tab is found in the Control sidemenu tab. To access the Panel Action Evaluator, click the hyperlink named as such at the top right corner of the Health Surveillance tab.

![](external_files/b211d9bcc80d217dd2d701df433cc93b.png)

The Panel Action Evaluator can be used to test any rules/actions/panels after any actions and panels are set up. If you are testing, it's best to do on a test patient. Because when you run this evaluator or force actions, any orders that trigger will be inserted into the chart/patient you specified in the evaluator.

This *Panel Action Evaluator* is where you can ‘test' health surveillance rules that you have set up and check anything they are due for. This is a ‘testing' evaluator tool/screen to test to be sure your actions/panels/rules etc are set up correctly (you may want to test occasionally, or may want to test a new rule/action you just set up and had added). However, the only way to test using this tab will in fact do real things (create orders, encounters, appointments) for real people (or test charts) in the system. This was developed as a way to test the Health Surveillance functions, and the only way to test these things/rules/actions set up is to make them actually happen. If you were using this feature just for testing, you'd want to choose a fake patient record (in the *employee* field) to evaluate.

![](external_files/552cb89c1abaa3f30d6620cf715fd88a.png)

* <strong>Create Waitlist Appointments checkbox:</strong> This checkbox controls whether waitlist appointments are created along with orders when this panel action evaluator is run. This checkbox is checked by default.
* <strong>Remove Due Dates for Forced checkbox:</strong> If system setting <em>System</em>, <em>Health Surveillance</em>, <em>Allow Force No Due Date</em> is enabled, you will see an additional checkbox option. This allows option to not assign due dates to orders or encounters when using the force routine or force entry modes. It will remove (not assign) due dates to any orders which are forced when this is checkmarked.

![](external_files/de94add888a11d7aa7ca1ac24a05992f.png)

Set the specific panel, campaign, and if you need force options that you wish and click the EVALUATE button. It will then show on your screen a listing of actions according to the test criteria you entered. Those action items (order items) will then be shown on the patient's due list that you selected to evaluate. Click the *Testing Menu* link to get back to the Panel Action Evaluator.

![](external_files/78dfc3cbde7a54d8575a161a491285f8.png)

OR you can click on the patient's name hyperlink to get directly into their chart to get to the due list to see what triggered, etc for validation.

![](external_files/64e86e1567de3d03143ec559d29d8b98.png)

{{% warning %}}

The Panel Action Evaluator removes any pending exit orders (if applicable) if the employee re-enters the panel. The Panel Action Evaluator also creates waitlist appointments when Force Routine or Force Entry are used. Also, whenever the Panel Action Evaluator runs, any pending orders for patients with explicit panel memberships will be deleted if that patient fails the Active Patient Clause criteria.

{{% /warning %}}


## Reset Anniversaries

For purposes of efficiency, we keep a record of when each employee's next birthday will be. Under normal operation this is not a problem, but if you use either of the time-travel features built into {{% system-name %}} (Demo Date system setting or Personal Time Machine feature from this HS Test), it is possible for those stored birth dates to get out of sync. You could do that by traveling to the future, evaluating some employees, then travel back to the present date. The *Reset Anniversaries* link clears out the stored next birth dates and allows them to be recalculated with the current date as a point of reference.

![](external_files/27a79f7f511b614b7d431293402fb261.png)

## Time Machine

By clicking on the *Time Machine* link, you can change the date to a date in the future for that login session only and then proceed to do the testing of the rules/panels etc in the previous top criteria sections.

![](external_files/b88ee32bc0503916a2ad501ff5f7651f.png)

Using the Time Machine link is like switching the date on your computer to be a date (and/or specific time) in the ‘future' and it is only for this login session only and it changes the effective date of all actions and evaluations.

![](external_files/8bfeadb3ea3e0c555070d2cb9b360799.png)

When you are done, you can click the *Time Machine* link again and clear the date (and/or time) out and *submit* in order to get back to today's date and time, or you can set a different date/time.

![](external_files/e842c3a2904b4804a5446e8630b9ebba.png)

When you are working in {{% system-name %}} (with Personal Time Machine date enabled), you will see a red banner at the top of every {{% system-name %}} page.  The date that you traveled to (in the personal time machine module) shown in the banner is a hyperlink that takes you to the screen for changing or clearing the date. Quickly click that date in the banner to access back to the Personal Time machine setting screen.

![](external_files/0135b7103c94d8be7f94cec1620bd44d.png)

## Active Patient Check

By clicking on the *Active Patient Check* link, you can use this to determine if the system considers a particular patient/employee **active** for Health Surveillance purposes.

![](external_files/3b5ac51ef68eb4e3c7b474e0ea89825f.png)

The *Active Patient Check* evaluate system setting named *System*, *Health Surveillance*, *Active Patients Clause* for the chosen patient you key in the auto-complete. This system setting can be set with specific criteria (by an MIE Developer) with clause programming criteria you wish "active" Health Surveillance patients/employees to be considered as and is dependant on what your HR Interface may send in as status and what you want the system to consider as "active" patients.

![](external_files/12965959252d71d6bf679bf12b4551b2.png)

Once you click the hyperlink, you can select a patient via the auto-complete field.

![](external_files/44de79b916dc827873ffd7f583f5a6f1.png)

Once you click the SUBMIT button, it will tell you if the patient/employee is considered Active or not for the specific Health Surveillance purposes according to the criteria programming of that system setting.

![](external_files/07cd7c23ffe4438503a5b557acac9ace.png)

