---
id: '1iUHC57VH5eIkqBnQz1sPngMkcFR9V4ZD0bbdhTT8ETk'
title: 'Fax Manager Tab - Outbound Faxing'
date: '2024-02-21T18:27:34.850Z'
version: 89
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1iUHC57VH5eIkqBnQz1sPngMkcFR9V4ZD0bbdhTT8ETk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Click *Fax Manager* tab from the left sidebar menu. The screen opens with a header that says **Outgoing Fax Search** with a search tool. You will be defaulted to the "General" search filter method unless you had previously rendered a detail fax id search. (It will remember which mode you were in last and default you to that.)

Below that you will see other categories: Pending Fax Spool, Error Fax Spool, Completed Fax Spool and Previewed/Canceled Fax Spool.

![](../fax-manager-tab-outbound-faxing.assets/384798a0464c29071607c7f19a0e25a9.png)

The 4 categories at the bottom of this Fax Manager tab: Pending Fax Spool, Error Fax Spool, Completed Fax Spool and Previewed/Canceled Fax Spool are where you can see any faxes categorized with those statuses. You can hide/show the categories by clicking the hide or show link in the category title.

![](../fax-manager-tab-outbound-faxing.assets/447db71c1c5e8db4619efbc334eec879.png)

The fax jobs that display for you *and* the fax jobs that you can search for to see are all driven by what security you are set to. If your security is to only view your *own* fax jobs, than any search you render or jobs you see here in the queue will only be your own jobs. If your security is set to *all users* then you will be able to search and view all fax jobs regardless of user who rendered them.

![](../fax-manager-tab-outbound-faxing.assets/be05d70bd4e7b114ab98558537ef19df.png)

## Fax Categories and Options

In the category of spools (Pending Fax Spool, Error Fax Spool and Completed Fax Spool), they all have options that can be performed on them. The fax jobs in each column are the fax jobs you sent. These only show the summary of fax jobs that are tied to your username (your username as the sender). To search for any other faxes, you will need to use the Outgoing Fax Search fields.

* <strong>Pending Fax Spool</strong>: These are faxes that are pending in the system tied to your username (you are the sender). They are waiting to be sent out. Or they have been dialed and either the recipient's fax # is busy and it will attempt to resend again. Or these faxes are set to a lower priority and others are ahead of them in the spool.
    * Options: On the right side under OPTIONS it will say Ack. ACK means acknowledge. If you click this, it is only to acknowledge that your fax failed. It will not delete the job and the fax will still try to go through 12 times. It does move it to the Completed Spool, but only acknowledges that there was a problem. It states ‘acknowledged' as the message of the progress column.

* <strong>Error Fax Spool</strong>: These are faxes that were rejected, stopped or errored out and the reason (progress message) why. These shown here are tied to your username (you are the sender). You can sort by clicking on the specific headers. If you see the word ack in the <em>Options</em> column (far right) then click on this to acknowledge that the fax did <strong>not</strong> go thru and it will put it in the <em>Completed Fax Spool</em> you can then go to that Complete Spool and resend. Or you can click Re-Send link from the job in the error spool to try to re-send the fax job.

![](../fax-manager-tab-outbound-faxing.assets/2be669b07a26d38738f33ecafd64bc53.png)

* <strong>Options:</strong> On the right side under OPTIONS it will say Ack. ACK means acknowledge. If you click this, it is only to acknowledge that your fax failed (did not go through) or you are acknowledging any other reason this fax failed. It will not delete the job and the fax will still try to go through 12 times. It does move it to the Completed Spool, but only acknowledges that there was a problem. It states ‘acknowledged' as the message of the progress column.
    * Re-Send: You can re-send the fax job if you wish. Simply click Re-Send link in the FAX ID column.

{{% tip %}}
A system setting gives ability to control a fax's timeout via a system setting named *System*, *Fax*, *Timeout*. This allows systems to be able to set the default timeout for a fax to live in the queue before it is cancelled. The default value is 6 meaning that a fax will be in the queue for 6 hours before it is timed out and cancelled.
{{% /tip %}}

* <strong>Completed Fax Spool</strong>: This lists what faxes are complete, how many pages, date it was faxed, how many attempts, etc. You can sort by clicking on the specific headers, but by default it's ordered by faxed date/time descending, then by fax_id descending. These fax jobs shown here are tied to your username (you are the sender).
    * Progress column: This is where it states the progress of the completed fax. Example: if the fax were canceled, if it were resent, or if sent successfully then it will say how many pages were sent and how many attempts it took.

![](../fax-manager-tab-outbound-faxing.assets/bbb5e140c00a9c88a9134e421ac7716c.png)

* <strong>Re-Send</strong>: You can re-send the fax job if you wish. Simply click Re-Send link in the FAX ID column.
* <strong>Attempts</strong>: fax attempts go up to 20, however, in {{% system-name %}} it may ‘show' more than 20 on occasion because the count doesn't actually report the times that hylafax tried to send it, but rather it reports the number of times the status was updated in {{% system-name %}} for that fax.
* <strong>Previewed/Cancelled Fax Spool</strong>: This lists what faxes that are only previewed/cancelled but not sent.

## Outgoing Fax Search

When in the Fax Manager Tab, you can perform a search to search for specific out-going faxes.

To get to the Outgoing Fax Search, click the Fax Mgr tab from the left sidebar menu.

Fax Manager search has two modes of operation: General & Fax ID. The detailed **Fax ID** mode is only used when the fax id is known, which makes the other search criteria fields not relevant since the fax id uniquely identifies a fax. **Fax ID** field*:* If you know the fax job ID number that the system gave to the fax job, you can enter it here to find that one specific fax job.

![](../fax-manager-tab-outbound-faxing.assets/a768a4a5c4f5305b4c59196bead99840.png)

**General** is used when want to search for fax jobs by details like number sent to, date sent, etc.

![](../fax-manager-tab-outbound-faxing.assets/2a50d418a1e8166bab08ed2365dda39c.png)

To search for outgoing faxes, you can fill in as many fields as you wish. The more fields you enter, the more narrowed you search. Any fax results will show below in the appropriate categories it is in.

* <strong>Patient Name:</strong> If you would like to search for faxes related to a specific patient, begin typing the patient's last name. It will try to auto-complete your typing and give you choices of patient's that match. Highlight and select the patient you want and tab to any other fields you wish to enter.

![](../fax-manager-tab-outbound-faxing.assets/e98b60c78ae8143c50a9896bbe7717bc.png)

* You can also search for a patient by mr# or dob or ssn. Simply hover your mouse over the help icon (next to the name field) to perform that search method. Tab to any other fields you wish to enter.
* <strong>Fax Number Contains:</strong> You can type in as many numbers here to search for faxes with that as part of the outgoing fax number. Tab to any other fields you wish to enter.
* <strong>Recipient:</strong> Recipient is considered who the fax was being sent to. The column ‘Fax To' shows who the fax was sent to (recipient). You can type part of a first name or a last name or any other partial text or characters to render a search to list faxes to a recipient that contain what you specified.Tab to any other fields you wish to enter.
* <strong>Sender:</strong> This field will only appear if you have the security permission for View Outgoing Faxes set to ‘All Users'. If you are only permitted to see your own faxes, this field will not appear on this search screen.

You can search for faxes that were sent from other departments or other users. You can only select one sender method. If you do *not* select any sender method here, it will simply default the search as your username faxes only. Meaning, the search results will show the faxes you are searching for that were sent by you as the sender.

* <strong>All Departments</strong>: If you check-mark this, it will override any specific department entered or any specific user entered.
* <strong>Department</strong>: If you select a specific department, it will override anything entered in the User field. To select a specific department, begin typing the name of the department and the system will try to auto-complete your typing and give you choices that match. Highlight and select the dept you want and tab to any other fields you wish to enter.
* <strong>User</strong>: If you wish to enter a specific User, you must type in their last name first. The system will try to auto-complete your typing and give you choices that match. Highlight and select the user you want and tab to any other fields you wish to enter.
* <strong>Date Range:</strong> You can enter a date range to filter and search for faxes. This is the date the document was rendered to be faxed (queued) or the date the completed fax was successfully sent, or the date the fax job was stopped or acknowledged.  If you enter in a date range to filter your search by, all the categories (Pending Fax Spool, Error Fax Spool, Completed Fax Spool, and Previewed/Canceled Fax Spool) will respect the date range you entered.

If neither a start date or end date range is entered, it will default to show only one week's worth of fax results for the Completed Fax Spool.  (One prior week's worth from today's date).  All the other categories (Pending Fax Spool, Error Fax Spool, and Previewed/Canceled Fax Spool) will show all history and not be limited to the past week's worth.  This is to alert users checking this queue that some may need attention.  Thus, the user can force the fax to be acknowledged or stopped to move them from those spool categories to the Completed Spool.

Click *Search* to perform your search or *Clear* to clear the fields and start over.

Your search results will display in the appropriate pending or error or completed fax spool beneath these search fields.

### Sent/Failed Fax Email Notifications

You can have {{% system-name %}} send you an email upon each successful sent fax and/or each failed (unsuccessful) fax that was sent by you via {{% system-name %}} . This is a user preference and only affects you, the logged in user.

Please make sure you have your email entered in your username screen (a superuser/administrator may need to verify this or add this for you within your practice). You can always view the Fax Manager tab to view failed and successful faxes, but the email notification sends you an email instantly to you when the fax has been sent or has a problem being sent.

Please see other help documentation named *Email Notifications of Sent or Failed Faxes-Outbound Faxing.pdf* for further instructions and help with this feature.
