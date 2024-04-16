---
id: '1x3z6Xp7GZNw4cMJfxdhhMP4kLcj4bVEJ6w0PLZ4aEqw'
title: 'Fast Task Templates'
date: '2023-01-31T15:04:33.300Z'
version: 137
lastAuthor: 'sklerner'
mimeType: 'text/x-markdown'
links:
  - 'http://doc.id/'
source: 'https://drive.google.com/open?id=1x3z6Xp7GZNw4cMJfxdhhMP4kLcj4bVEJ6w0PLZ4aEqw'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
To access the Fast Tasks Template tab within the Task List sidemenu module, users must have security for Manage Fast Tasks.

Fast Tasks are templated tasks and are ‘labeled or categorized'.  Fast Task Templates are created for tasks that need generated routinely or commonly (example: precerts, nursing calls, etc). If you see fast task options when using the Add Task functionality, then templated task(s) have been configured in the system by creating fast task templates.

Before adding a fast task template, check the existing fast task listing to make sure one does not already exist. Verify that a fast task does not already exist that will perform the same function and assign to same user(s) and/or departments.

## Add Fast Task Template

When in the Task List sidemenu tab, the Fast Tasks tab at the top displays a list of all existing ‘Fast Tasks' that are already set up in the system.

![](../fast-task-templates.assets/4752b033f85fb899a7ec5a593bc94508.png)

To configure and add a new Fast Task template selection to the system, click the Add link found on the right side of the Fast Tasks screen.

![](../fast-task-templates.assets/30f06c204c4ff2333e1656ac6ccf60e5.png)

The Task Template (NEW) screen opens.  Enter information into any applicable fields to create the new fast task selection for the system.

![](../fast-task-templates.assets/73ad81f88ad9ad389e4349e80b39a1ed.png)

* Name: Name of the fast task link that will show for users to utilize.
* Due Date: Optional field.  Type in the amount of time from the creation of the fast task, to the time the task is considered due to complete.  Example: If you want to give users 1d 4h = 1 day 4 hours from the day the task was created, until it's due, then type 1d 4h  (putting spaces between increments do not matter). When the fast task is saved to the system, the system will then convert 1d 4h into minutes.  Due Dates (when creating fast task templates) are stored in minutes. Therefore, 1d 4h will be converted to 1680 minutes when the Save button is clicked.  Either the due date or a remind date field is required when adding a fast task template to the system.
* Remind Date: Optional field.  If want to automate reminders to appear about this fast task when utilized, a remind date value here must be prior to the due date/time value entered in the Due Date field above.  Entering a remind date will ‘remind' the user this task still needs to be done, places the task in the Reminders category of the task list for that user/dept, and will allow them to snooze this reminder.
* Description: Usually type the same as the Name field has, but can be a bit more descriptive if needed.
* Priority: Select a priority for this category for this fast task to be inserted as when utilized.
* Prompt: When users select this fast task to use, if ‘prompt' (here in the template) is set to Yes, users will see the ‘add task' screen which provides the fast task template as configured, but also allows them to add/edit information in all the task fields (ex: due date, remind, notes, assign, etc) then requires them to manually click the ‘Add Task' button to generate the task.  If prompt is set to No, the fast task template should have all information needed in the template itself as it will automatically generate and send the task as it is templated. If the "Assign To" section on the fast task template is not set with any owners or departments, the user will be prompted when utilizing the fast task, because the system needs to know who to assign the task to.
* Hidden:  If set to Yes, users will not see this fast task as an option to click on when they go to ‘Add Fast Task'.  Usually fast task templates are only set to be hidden if the task only needs to run in the background automatically for a specific workflow and these are configured as tasklist events.  Tasklist events can be programmed to trigger fast tasks, in an automated manner, on upon an event, function, or other method. For example: upon a specific document being indexed, the system can trigger a task (programmed via a tasklist event which uses fast task templates) and the fast task template being used for that automation doesn't need to be shown as a choice to a {{% system-name %}} user to utilize manually when working in {{% system-name %}} .
* Reply to Dept: If this option set to Yes then replying/forwarding this fast task will be sent to the sender's department, and not individual sender.  This allows any user then to grab and work the reply or forwarded task, instead of waiting on one specific indivdual.
* URL: leave blank.  MIE would program special setup here if needed and is mainly used for dictation if needed.
* Doc Type: When tasks are created, they store as doc.type WCTASK (Task Note) in the system.  However, it may be necessary and need (for reporting, audits, or just for better visibility) to store a fast task as its own doc.type when it's created.  Specify the name of the doc.type the fast task should store as here. If nothing is selected, the system will save the fast task (when used) as WCTASK (Task Note) in the system.
* Type: Select where the fast task template is to show up in the system to be accessible and used by setting the type here.  The default will be All, meaning the fast task template will be accessible to select throughout the system wherever users can Add Tasks. The Type should be what the task is regarding: All/Select One, Patient, Patient's Document, or a patient's Appointment, non-patient, fill request, Dictation, Incoming File Queue, Encounter, etc.  The Add Task link at the top of a chart is considered type "patient."  There is an Add Task link in the detail view of a document that is considered type "document", and there is an Add Task link in the scheduler that is considered type "appointment".  There is an Add Task link in the Task List sidemenu that is considered type "non-patient". There is also an Add Task link in the Meds/Prescribe/Refill chart tab of a chart considered type "fill request" because fill requests are regarding a prescription.  There is an Add Task link within the Incoming File Queue that is considered type "Incoming File Queue".
* Layout:  Leave as None/Std Comment.  However, MIE can program a specific layout to allow users to input task details that displays in the Notes section when creating a text.  Layouts allow a different look instead of just a plain text-box if needed. It can also pull other {{% system-name %}} information into the task automatically (ex: patient's conditions, patient's allergies, etc).  Layouts are billable time done by MIE and the layout type/name would show here as a choice after it's developed.
* Notes: Fast Tasks can show pretemplated text here in the notes field.  This may help prompt other users to remember what to key in or do or specific information that is standard for this fast task.  Whatever is typed here in the template will display in the ‘notes' field of the fast task when users create this fast task or when system automatically sends the fast task if based on a tasklist event rule.  This notes field can be left blank to indicate a free-text notes field. If a Layout is programmed by MIE (see layout field above), then the layout would display in the Note field when users create the fast task. This is an example of a layout being used for the Notes section.  This layout is designed to have the user document specific things to be entered in the task of this type.

![](../fast-task-templates.assets/43f1604b4581c61ebc7e2bfee0fbfaa2.png)

* Insert as Completed:  Checkmark this only if the task is to be considered completed automatically when this specific fast task is created and used.
* Assign to: Fast Tasks can be templated to know who to assign it to and then the user doesn't have to always set who to assign this fast task type to.  Typically repetitive tasks or common tasks always go to the same person or department. The Assign To field here is to indicate whom the fast task is to be assigned to when used.  It is ok to leave the Assign To field blank, but when a user goes to use this type of fast task template in the system, the user needs to manually assign the task each time the fast task is used.

{{% note %}}
Users who do not have tasking view security permission will not show up as a user choice to assign to.
{{% /note %}}

* Forward Fast Task: Typically this is left as None, but a different fast task template can be selected here to utilize when forwarding the current fast task to someone.  The other fast task template indicated here, would be sent on a forward. The other task template indicated here, could be set up with different info, notes and different assignees.  For example: Perhaps you have a fast task called Jones Phone and when the nurse sends it to Dr. Jones for him to answer the question, when he hits reply she does not want this fast task Jones Phone to always come back to her, she would rather it come back to the Nurses department so anyone in the Nurses Department can finish it (in case she is gone, etc.)

When done entering the fast task template to the system, click the Save button.  A confirmation message at the top of the screen will say Successfully inserted Fast Task. The Fast Task has now been saved to the system and is now a fast task option to use.

## Edit or Delete a Fast Task Template

To access the Fast Tasks Template tab within the Task List sidemenu module, users must have security for Manage Fast Tasks.

When in the Task List sidemenu tab, the Fast Tasks tab at the top displays a list of all existing ‘Fast Tasks' that are already set up in the system.

![](../fast-task-templates.assets/4752b033f85fb899a7ec5a593bc94508.png)

### Edit

To edit, find the specific fast task template that needs edited and simply click the respective Edit link in the options column.

![](../fast-task-templates.assets/f2ef4ce5656c8312767b852c6e0e3ccd.png)

Change and edit any of the fast task template fields and click Save when done editing.

It will display a confirmation that you have successfully updated the fast task template.

### Delete

To delete, find the specific fast task template and simply click the respective Delete link in the options column.

It will ask you to confirm that you are sure you want to delete the fast task.

![](../fast-task-templates.assets/d8369533c83a7f58b92b536a13b18dfc.png)

Click the Yes button to proceed and delete the fast task template from the system. It will display a message that you successfully deleted the fast task.

{{% warning %}}
Deleting a fast task also deletes any tasklist events that may be linked to it that were setup for automated workflow needs.  Also, if a fast task template is deleted, any other fast tasks that use the deleted fast task as its ‘forward' task template are unlinked from the deleted fast task.
{{% /warning %}}

{{% info %}}
Any automated fast tasks setup based on encounters will trigger for the encounter document if system setting Process Esign/Tasks on Preliminary Archive is set to value 1.  If this is enabled (value 1) once you create even just a preliminary archive of an encounter, it creates the encounter document ([doc.id](http://doc.id/)) and esign/tasks it as a final document even though it's preliminary.  Most clients keep this disabled (value 0) so only final documents of encounters that are closed & archived will trigger esign and tasking rules if any are setup.
{{% /info %}}
