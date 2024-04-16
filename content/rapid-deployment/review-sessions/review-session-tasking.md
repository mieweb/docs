---
id: '1wn-EDEazDlPH2aGw3GtSSqu7Y8FIOWHNXSr1KK0fOUA'
title: 'Review Session - Tasking'
date: '2020-02-27T21:25:50.587Z'
version: 31
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?func=tlist'
  - '../../functions/task-management/task-list.md'
  - 'https://system/?f=tlist&t=Your+Task+List&tabmodule=tasklist&tabselect=Your+Task+List'
  - 'https://system/?f=tlist&tab=Delegated&tabmodule=tasklist&tabselect=Delegated'
  - 'https://system/?f=tlist&s=template&tabmodule=tasklist&tabselect=Fast+Tasks'
  - 'https://system/?f=tlist&s=task_search&t=Task+Search&tabmodule=tasklist&tabselect=Task+Search'
  - 'https://system/?f=layout&module=reports&name=reports&tabmodule=reports'
  - 'https://system/?f=tlist&s=all_pending&tabmodule=tasklist&tabselect=All+Pending'
  - 'https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events'
  - '../../functions/system-administration/security/security-role-settings.md'
  - '../../functions/system-administration/security/my-settings.md'
  - '../../functions/task-management/fast-task-templates.md'
  - '../../functions/task-management/task-search.md'
  - '../../functions/task-management/adding-tasks.md'
  - '../../functions/reports/task-report.md'
  - 'https://mieweb.webex.com/mieweb/ldr.php?RCID=7cae93a5fb5435af1677ba54618fcc37'
source: 'https://drive.google.com/open?id=1wn-EDEazDlPH2aGw3GtSSqu7Y8FIOWHNXSr1KK0fOUA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Agenda

* <strong>Task List Module Demonstration</strong>
* <strong>Tasking Overview</strong>
* <strong>Task List Module</strong>
    * <strong>Your Task List</strong>
    * <strong>Delegated</strong>
    * <strong>Fast Tasks</strong>
        * <strong>Phone Notes</strong>
    * <strong>Tasklist Events</strong>
    * <strong>Task Search</strong>
* <strong>Reporting</strong>
* <strong>System Configuration</strong>
    * <strong>Fast Task Templates</strong>
    * <strong>Tasklist Event Rules</strong>
* <strong>Resources</strong>

## Overview

Tasking creates electronic to-do lists to streamline everyday tasks. The Task List module promotes workflow efficiency and timely task completion through the use of priority ratings on tasks, along with overdue notices and reminder dates, which flag tasks requiring attention. There are two types of tasks–**Generic** and **Fast Tasks**. *Generic* tasks are not templated and are not classified in a specific category or type of task. *Fast Tasks*, on the other hand, are categorized tasks that are usually pre-templated and assigned to a specific individual or department for completion. Fast tasks save users from having to regularly key in the same information for repetitive tasks. Configuration of Fast Task templates and automated task business rules is available as an add-on configuration, if interested.

Standard functionality of the Task List module includes:

* Pre-loaded, standard task templates
* Task alerts and reminders, including high-priority distinction
* Tasks stored as documents in the medical record

## Task List Module

The [Task List module](https://system/?func=tlist) allows clinicians to review lab results, authorize prescriptions and orders, and e-sign encounters or dictation, quickly and easily. It provides a single, structured point of access to routine work activities. Another way to think of the Task List module is as a type of messaging service between physicians, as well as clinical and administrative staff. These messages can be part of a specific chart, or they can be set as personal reminders. Communication and efficiency within the office improves dramatically when staff can easily determine exactly what is next on their list of assigned tasks needing completed.

{{% tip %}}
Limit how often tasks are created and assign to **All must acknowledge**. Only send a task for all to acknowledge on infrequent occasions and events, such as meeting announcements, down-time announcements, etc.
{{% /tip %}}

As an added feature for easier usability, {{% system-name %}} has an application toolbar, where quick buttons are available, allowing users to easily navigate to the home page, to queues or task lists, or even {{% system-name %}} help documentation.

{{% info %}}
Only users with the **View Access** security permission set to *Yes* will be able to assign or receive tasks.
{{% /info %}}

For additional information regarding the Task List module and the various tabs, categories, and options available for managing tasks, see the [Task List](../../functions/task-management/task-list.md) documentation.

### Your Task List

The [Your Task List tab](https://system/?f=tlist&t=Your+Task+List&tabmodule=tasklist&tabselect=Your+Task+List) shows any tasks expected to be addressed or completed by the user in context, or logged-in user (i.e., you). The Your Task List tab displays various categories of tasks associated to the user in context, such as *Reminders*, *Overdue Tasks*, *User Tasks*, and *Tasks: [Department Name]*, where any tasks would populate that have been created with a specified applicable department tied to the user in context.

#### Reminders

The *Reminders* category will populate any tasks sent to the user in context that have been created with a **Remind Date**. Reminder tasks cannot be hidden. A task will remain in this *Reminders* category until completed or set to snooze. If necessary, a Reminder can be set to Snooze by simply using the option on the right of the screen. Once the original task is completed, the Reminder (task) will automatically drop off of the list.

#### Overdue Tasks

This category tracks all overdue tasks. When creating a new task, a **Due Date** can be established. Any tasks created and assigned to the user in context, which have not been completed or marked Done by the set Due Date, will populate on the Overdue Tasks list.

#### User Tasks

*User Tasks* are tasks specific to the user in context, or logged-in user. These tasks are pending and waiting to be completed. These tasks consist of any individually-assigned (i.e., meant for you, only) tasks, any assigned to a department with you specified, or any current and/or overdue tasks.

{{% info %}}
If a task is entered with a Remind Date only (i.e., without a Due Date), the task with the Remind Date will show in the *User Tasks*, only–until the Remind Date/Time lapses.
{{% /info %}}

#### Tasks: [Department]

This category displays all tasks as they relate to the user's assigned department(s). The populated list displays all tasks assigned to the department(s) and *not* a specific individual. A user assigned to the department(s) will see all of the department tasks and be able to *grab* a task and work or complete it, as needed. Regardless of the number of departments associated with the user, all applicable tasks will populate on this list. Whenever **Show Assigned** is clicked, all tasks of the associated department(s) that are tied to an owner/username will be displayed. If the Owner is the user in context (i.e., you) the task will also appear in the *User Tasks* category, above.

### Delegated

When managing and working assigned tasks, it is important to be able to track assigned, or delegated tasks, as well. The [Delegated tab](https://system/?f=tlist&tab=Delegated&tabmodule=tasklist&tabselect=Delegated) provides a list of all pending tasks that have been delegated by the logged-in user to someone else for completion.

### Fast Tasks

{{% system-name %}} administrators can create one-click tasks, or **Fast Tasks**, to task colleagues or set up reminders by way of pre-configured templates. Fast task templates are good for tasks that are repeated frequently throughout a business day or week. To access the [Fast Tasks tab](https://system/?f=tlist&s=template&tabmodule=tasklist&tabselect=Fast+Tasks) in order to add and configure fast task templates, users must have the **Manage Fast Tasks** security setting set to *Yes*.

#### Phone Notes

Phone notes are a type of fast task that allow the immediate capturing of incoming telephone messages. These can be particularly helpful, because they can be used to manually route phone notes to appropriate staff for timely follow-up.

Phone note messages are created and saved as text documents within the {{% system-name %}} system. They are stored in chronological order, and spellcheck is included on all text notes, to ensure easy access and readability. Templates can be added to text documents, which allow users, for example, to record specific details of telephone messages, quickly and efficiently. These templates can easily be configured by the customer to capture a variety of information/fields, as needed.

### Task Search

In order to access the [Task Search tab](https://system/?f=tlist&s=task_search&t=Task+Search&tabmodule=tasklist&tabselect=Task+Search), users must have the individual security setting **Task Search** set to *Yes*. The Task Search contains fields for entering information such as Sender, Owner, Department, or Task ID, to search for the specific task(s) according to the entered criteria. To effectively run a search and generate the report, at least one search criteria needs to be specified. The more fields entered, the more narrow the search results will be.

## Reporting

The {{% system-name %}} [Reports module](https://system/?f=layout&module=reports&name=reports&tabmodule=reports) allows administrators access to utilization reports designed for tracking timely task completions and overall productivity. These reports may be utilized for tracking all outstanding tasks for the practice/organization, as well as for auditing completion times and productivity of offices, departments, or individual users. Reports can be generated to show tasks that are overdue, pending, delegated, or completed. Users may also view patients with tasks associated to them that are either in pending or completed status, so if a user goes on vacation, the administrator may reassign the tasks, as necessary. In addition to the Task Search tab, discussed above, there are two useful reports available:

* <strong>Task Reports</strong>
* <strong>Tasks Completed by User</strong>

## System Configuration

As noted, the Task List module streamlines everyday tasks into an electronic to-do list, and provides a single, structured point of access to routine work activities. To gain the most benefit from tasking within the {{% system-name %}} system, it is important to review the available options and configurations early on. With the appropriate configurations, necessary workflow processes can be easily expedited and simplified.

{{% info %}}
Any system configurations or editing of templates, tasklist event rules, or the like, all require specific security permissions.
{{% /info %}}

### Fast Task Templates

Because there is a standard list of available Fast Tasks, it is important to review the standard templates available in {{% system-name %}} . Ensure any pre-configured fast task templates not conducive to the business needs are removed, and any existing fast task templates being kept are edited to reflect the appropriate workflow and needs of the client. Otherwise, create new templates, if necessary.

{{% info %}}
Because fast task templates can be configured to be visible to an end user, as a type of *prompt* or one-click triggering function, or even configured to be *hidden* and tied to Tasklist Event Rules, triggering specific events automatically, it is imperative to pay close attention to Prompt fast tasks versus Hidden ones, linked to Tasklist Events, when auditing the standard list of pre-configured tasks.
{{% /info %}}

Additional setup may need considered so that the tasks, when stored, are set to save as the appropriate document type, rather than the default task note. Also, it is important to audit the [All Pending tab](https://system/?f=tlist&s=all_pending&tabmodule=tasklist&tabselect=All+Pending) to remove any unnecessary tasks.

### Tasklist Events

The [Tasklist Event tab](https://system/?f=tlist&s=tl_events&tabmodule=tasklist&tabselect=Tasklist+Events) is utilized by MIE to create and manage tasklist event rules, which allow for a type of automated behavior, or trigger for a specific event. The Tasklist Event tab requires SuperUser access.

All available Tasklist Events will be audited with the client, in order to assess, configure, and add, as needed, any tasklist event rules conducive to the client's needs, workflows, or business processes. This may include events triggered by incoming data/documents via a portal or interface.

### Security & Settings

Review user security settings for users needing access to Tasking, and give permission, as appropriate. There is also information available within the [Security Role Settings](../../functions/system-administration/security/security-role-settings.md) online help.

![](../review-session-tasking.assets/ea38ab5861f813c9a41e0bed507444bb.png)

### My Settings Preferences

Review security roles and individual My Settings preferences of those needing access to the Task List module. Review permissions and set, as appropriate. This information is also available within the [My Settings](../../functions/system-administration/security/my-settings.md) online help.

![](../review-session-tasking.assets/1862f2bcec4387e1d4533a514c481962.png)

![](../review-session-tasking.assets/0ca506dc81f836108273a3a65ae1280c.png)

## Resources

### Help Documentation

* [Fast Task Template](../../functions/task-management/fast-task-templates.md)
* [Task List](../../functions/task-management/task-list.md)
* [Task Search](../../functions/task-management/task-search.md)
* [Adding Tasks](../../functions/task-management/adding-tasks.md)
* [Task Report](../../functions/reports/task-report.md)

### Training Videos

* [Tasking](https://mieweb.webex.com/mieweb/ldr.php?RCID=7cae93a5fb5435af1677ba54618fcc37) (00:22:00)
