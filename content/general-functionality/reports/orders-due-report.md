---
title: "Orders Due Report"
date: 2020-02-27T20:15:40.621Z
url: "general-functionality/reports/orders-due-report.html"
version: 45
id: 1G-25sbfgVrQHV_SoUmaYiyLGbwE2GkqCnWPRHl0q4lQ
source: https://drive.google.com/open?id=1G-25sbfgVrQHV_SoUmaYiyLGbwE2GkqCnWPRHl0q4lQ
menu:
    main:
        name: "Orders Due Report"
        identifier: "1G-25sbfgVrQHV_SoUmaYiyLGbwE2GkqCnWPRHl0q4lQ"
        parent: "1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY"
        weight: 4290
---
This report is a grid like the Due List chart tab. By default it lists any and all charts and MR#'s that have something as ‘pending' status in their Due List. There are other columns of information and function buttons at the bottom to work pending due list items in mass for the system. This grid can be sorted and arranged as you prefer without affecting other users.

![](../../external_files/21f887c123ef200ca51c75385f791b2d.png)

A Due List is a list of *pending* orders with due dates for a chart. These can be managed in dynamic encounters, but also from the Due List chart tab or from this report. The Due List serves as a reminder for what is due or what is coming due or what is past due during an office visit. The Due List appears as a chart tab in a chart as a sortable list in grid format per individual chart. Otherwise this report in grid format is the viewable list of any/all charts with pending Due List order items and due list items can be managed in mass using this report.

Each column on the Due List sections can be used to sort or filter items in the table.

![](../../external_files/cde713aa6abda261f5b2bf07e3bad54d.png)

Find the ? icon on each column to sort and/or filter by specific criteria in a pop-up screen. When you set the sort and/or filters, the system will remember this. Therefore, a future encounter, due lists chart tab, patient's that you work in; the due list will be shown that way (along with filters). Remember: if you filter out rows, those will be filtered out on future sessions/charts you work in.

![](../../external_files/68eaf1feba6bab1a24c12ffe216144e6.png)

Drag and drop a column name to change the order of columns.

![](../../external_files/7ec0e683e7f294180e8cd9e6b7ba5f7d.png)

You can also drag and drop a column name and place it into the table header to group items in the table by that column. In this example, I drug the "order name" and "type" column up into the table header and now my list sorts and arranges by that.

![](../../external_files/4f1093876519b3e5f34e4c87b5865469.png)

When you drag & drop to arrange, the system will remember this. Therefore, future encounters, due lists, patient's that you work in; the due list will be displayed in that arrangement.

## Due List Pending

Due List items in this section of the report are pending tests/procedures on charts that are pending to be done/completed. Items could have been placed on here manually or the system could have automatically generated them based on Health Surveillance membership and automation to indicate what they are due for. Managing Due List items along with Due Dates and Completed Dates are important as future Health Surveillance triggers off of those. Select the specific pending tests/procedures to process using the checkbox on the far left. Due Lists items can be managed in "mass" more than one at a time using these checkmarks or the "checkall" box above that column.

![](../../external_files/7f2a5c8324fe7e99ae904d385e4bcc41.png)

Then click the appropriate button below the table of how you want to process those order. See below help documentation on what each checkbox process does.

![](../../external_files/578eb57cc10e6ed7be7d7163aec5707a.png)

### Set Completed

There may be a pending test or procedure(s) on the Due List Pending report List that was completed elsewhere (outside your office) and perhaps they bring results with them. Or if you just need to mark it completed without keying in any results or data during the encounter visit. Check-marking the specific pending test/procedure item(s) in the pending due list report and clicking the *Set Complete* button will take that *pending* due list item and mark it complete.

![](../../external_files/9f1bbc5c816f98b4c51c1ff91d9ebb7f.png)

You will be prompted to key in a date/time that the pending due list item was completed. It could be today's date or a specific date the patient had the due list item completed in the past. Set the date/time and click the *done* button.

![](../../external_files/6326de42b6a518dae0dc1cefb8ae9c80.png)

The screen will refresh and the due list item will be marked as "completed" and will be removed from the *pending* due list items table. Any remaining *pending* due list items will continue to display.

### Set Due Date

There may be a pending test or procedure on the Due List Pending report that needs a due date set, edited, or changed. Check-marking the specific pending test/procedure item in the Due List Pending report and clicking the *Set Due Date* button will take that *pending* due list item and allow you to change the due date for it.

![](../../external_files/43e8db094c9e4a5660586ddbb5c943ff.png)

You will be prompted to key in a date/time that the pending due list item is due. It could be today's date or a specific date. Set the date/time and click the *done* button.

![](../../external_files/ea23a6f779c046ce4c7ffacdb6a5d509.png)

The screen will refresh and the due list item will be updated with the new due date.

### Set Declined

Any non-mandatory tests can be marked as declined. Doing so will automatically document the pending due list item as "declined" with today's date once clicked. If the employee/patient declines a specific test/procedure item, checkmark the specific due list item then click the *Set Declined* button.

![](../../external_files/836be3f47d0d64f699888a3eecabfa30.png)

The declined due list item will then be removed from the ‘Due List Pending' items section and the screen will refresh. Upon refresh, that declined item is now removed from the view of pending due list items on the report.

If you needed to reverse one you declined, you would need to go to that individual's chart and into their Due List chart tab and find that declined due list item in the *past items* section where you can edit and reverse the status if needed.

### Set Deleted

Pending due list items (tests/procedures) may also be marked as deleted. You may use this for perhaps an item that should be deleted (something on the list that isn't/weren't offered for example) or if it was an error. Deleting pending orders/tests/procedures marks it as today's date automatically as soon as the button is clicked.

![](../../external_files/97ceb5f6e440ab6e4aa0c7239e3f5e1a.png)

The deleted due list item will then be removed from the ‘Due List Pending' items section and the screen will refresh. Upon refresh, that deleted item is now removed from the view of pending due list items on the report.

If you needed to reverse one you deleted, you would need to go to that individual's chart and into their Due List chart tab and find that deleted due list item in the *past items* section where you can edit and reverse the status if needed.

### Set Comments

There may be a pending test or procedure(s) on the Due List Pending report that needs a comment added, edited or removed. Check-marking the specific pending test/procedure item(s) in the pending due list and clicking the *Set Comments* button will take that *pending* due list item and allow you to change the comments for it.

![](../../external_files/36e235f3df02d4603caf5834017a8f22.png)

You will be prompted to key in a different comment. It could be today's date or a specific date. Type in any comments and click the *done* button.

![](../../external_files/f4dfd9df510199a47a2bafab05fce415.png)

The screen will refresh and the due list item will be updated to show the new comments with that specific pending item.

### Edit and Leave Pending

This allows for editing the due date and comments in one step. To edit a due date *and* a comment on pending due list item(s), check-mark the specific pending test/procedure item in the pending due list report and click the *Edit and Leave Pending* button.

![](../../external_files/1f66e4945a18f818643d38c7eedf350d.png)

You will be prompted to key in (or edit) a due date and/or comment for the specific pending due list item. Click the *done* button and the updates will be displayed on the due list item. The due list item remains as pending status.

![](../../external_files/25594a0572fb511280a9bf5b9ac8d635.png)

### Edit and Complete

This allows for editing the due date, complete date, and comments in one step. To edit a due date *and* a comment on a pending due list item but also get it marked as complete, check-mark the specific pending test/procedure item(s) in the pending due list report and click the *Edit and Complete* button.

![](../../external_files/7d6b4de8fe3c81bca0cd4c5b1f99141a.png)

You will be prompted to key in (or edit) a due date and/or comment for the specific pending due list item. The pending due list item will be marked as completed and it defaults with today's date/time as completed date. That can be edited though to reflect a different date of completion. Click the *done* button and the updates will be displayed on the due list item. The due list item (since marked complete) will be shown in the *past items* section instead of pending items section.

![](../../external_files/408e76e81993f3f5b70ab5af81d78cdb.png)

### Add to Waitlist

This is an easy way for a user to generate waitlist appointments from the pending due list report. These pending due list items will remain on the pending items section, but a waitlist appointment can be generated to indicate that due list item test/procedure needs scheduled. To do so, check-mark the specific pending due list item and click the *Add to WaitList* button.

![](../../external_files/73b9fba5fa0d7791050bf4a3a5424f97.png)

The pending due list item (order item) must have a corresponding appt type set to it in the orders list editor for the system to be able to add a Waitlist appointment for the chart. Appt Types are set in the order item list editor by an administrator or MIE. The appointment type must exist in the Scheduler Appt Types tab and must then be set in the specific order item list editor for the individual type of test/procedure that can be ordered.

![](../../external_files/58673f5e15f13abad56fa30a5dbc1095.png)

If a pending due list item does not have an appointment type linked to the main order item name, you will get this type of message:

![](../../external_files/384187ed955a3a122146886f5e9201c4.png)

If the system does find an appt type linked to the specific order item that is on the chart's pending due list, then it will add a waitlist appointment and you will get a successful message such as this:

![](../../external_files/9b6516937698d3c49b75187e26990fdf.png)

The pending due list item will remain on the due list as pending, but when in the chart record, you will see Waitlist appointments in the Appointments tab.

![](../../external_files/ffae7bc0312fa8257416385a7bfb4337.png)

The viewable details of the wait list appointment will display the various appointment types the due list order items are linked to, and will be placed on a waitlist for the Scheduler Waiting List resource. You can select more than one pending due list item (in mass) and it will combine all of those into one waitlist appointment.

![](../../external_files/9b5a33828dfe6ae8c5f1dd3860744afe.png)

## Refresh

The Due List report can be refreshed at any time to provide you the most up to date information. This may be needed because other staff work the due list and update throughout the day for charts. Click the *gear* icon on the right corner of the report. The *refresh* button will appear at the left of the report. The user can click the refresh button instead of having to get out of the report and back in to refresh its contents.

![](../../external_files/48e07b37c38c5622d5939de8bb891fe7.png)

## Details

From any due list item listed, there is a *Details* hyperlink column.

![](../../external_files/6e5d4f09cfbf52a660b402e6ec097f10.png)

Clicking on this for a specific due list item will show details about the specific due list order item (from the order item list editor) along with revision history.

![](../../external_files/f7678971743b672865104b8c5cbd79e3.png)

## Next Appt

The Due List Pending report will display the chart's next scheduled appointment date in the *Next Appt* column, if there is one already scheduled in the future. This is the date/time of the next upcoming scheduled appointment regardless of appointment type. The system will also display the words *On Waitlist* in that column if the chart has any pending waitlist appointment waiting to be scheduled (not necessarily for those due list items though).

![](../../external_files/ac02f780d138550f06d1c0d6991e4958.png)

## Next Waitlist Appt

The Due List Pending report will display the chart's Next Waitlist Appointment date if there is one already scheduled in the future. This is the date/time of the next appointment with the same appointment type of the pending due list order item listed.

![](../../external_files/918cd34eaa512009e0c5f29988412600.png)

## Go To The Waitlist

The Due List report will display a hyperlink to access the waitlist module. Click Go To The Waitlist to quickly access the scheduler module's WaitList.

![](../../external_files/6f22710565b282411eb6cb86030c58bf.png)

Upon clicking Go To The Waitlist, you will be taken to the Waitlist tab module within the Scheduler functionality. This is a list of all existing waitlist appointments in the system. There is filter criteria at the top to limit search results if needed. A waitlist appointment can be "scheduled" with a specific resource, date, time, location, etc by clicking edit next to the specific waitlist appointment line item. See other help documentation named *Waiting List Tab.pdf*

![](../../external_files/18464a5064b13dfb036a92ded1a1600b.png)
