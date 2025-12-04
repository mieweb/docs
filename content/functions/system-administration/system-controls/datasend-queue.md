---
id: '13GXjR09biGA7EmWMg7Ny8GEVtJ3HW7b3VB74K6p0YVY'
title: 'Datasend Queue'
date: '2025-12-04T14:08:06.824Z'
version: 1015
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://www2.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx'
  - 'https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=mvx'
source: 'https://drive.google.com/open?id=13GXjR09biGA7EmWMg7Ny8GEVtJ3HW7b3VB74K6p0YVY'
wikigdrive: 'v2.15.30'
---
## Datasend Queue (Outbound messages)

### Overview

The Datasend queue is in the Control panel, part of the interface tab, which enables the user to view the status of outbound data being sent through interfaces. It is used to view outbound messages, see their status, and acknowledge, resend, or deactivate. It can be useful to troubleshoot and review missed records and/or unexpected data elements. It is also where the HL7 message is viewed, which is helpful when troubleshooting specific fields or segments within.

At a glance, the user can see if there are patterns of errored routes, or if there are connection failures (socket errors, HTTP or SFTP authentication or connectivity).

### Location: Control Panel > Interface > Datasend Queue

{{% system-name %}} includes this tab where the user can monitor the routed items sent electronically, such as lab orders, appointments/cancellations, immunizations, and billing transactions. This is called the Datasend Queue or Send Queue, and it shows which routes are**_ In Progress_**, which routes are **_Pending_**, any that are in the**_ Error _**status, as well as the **_Completed/Acknowledged_** routes.

A route is how {%system%} sends an order, appointment, demographic update, immunization, etc. through the interface. Routes are initially created by the Auto Route, with the editor typically found under the Interface (parent) tab. The Auto Route includes rules on when and how to send information through an interface.

When a message/document/appointment, etc. matches the rules created in the auto route editor, then a route is created and displayed in the Datasend queue.

Let's examine each of the sections in the DataSend queue.

## Search criteria

#### ![](./datasend-queue.assets/b9007677f266fe2f1a2055346f338e59.png)

### Route ID – *use if you know the route ID number of the message. Each route has a unique identifier.*

### Item Type – *make a selection if you know what type of data you're searching for.*

* Document
* Encounter
* Patient Encounter
* Dictation
* Patient
* Patient Merge
* Appointment
* Procedure (Billing)
* Patient Encounter Closed
* Incident

### Item ID - use if you know the exact ID of the item record

### Auto Route - use to allow limiting the queue results to items which were routed by a specific rule.

### Recipient – *this is an autocomplete of users**** in the system, but also allows for free-text. It is not recommended to be the only field to search by.*

#### Method (type of message being sent)

* <em>Blank (when left blank, all methods/types are shown)</em>
* Print
* Fax
* HL7 Send
* HL7 Outbound Interface
* Text Export
* Dictaphone HL7
* NMC - Med Access
* NMC – Cannot send (per physician)
* Word2TIFF FTP
* ORDER RESULTS HL7
* Work Comp
* Webchart Post
* Esign Request
* Remove IFQ Batch
* Scripted Export
* MDM Reports HL7
* Immunization Export
* Kareo Billing
* Incident
* Direct Email
* Syndromic Surveillance
* 837 Professional Claims

### Method Detail - The endpoint, typically stored in a Refer to Systems record (displays for certain selections based on the method selected)

### Date – enter a From & To date to narrow the search on when the item was sent

### Progress – Free text input to search for route progresses that begin with the text

## Route Status Categories

![](./datasend-queue.assets/52d1a752180e5e5641f5030085a6b574.png)

### Routes in Progress:

This section displays any routes that are being sent to the endpoint. Routes begin in the Pending Routes section, then move to Routes in Progress as they are being sent. Most routes do not remain in the In Progress queue for very long.

Sometimes a route cannot send and shows up with an "Error" progress, such as a Socket Error, which means the {{% system-name %}} cannot connect to the endpoint for some reason. These routes will drop back into the Pending Routes queue and retry as many times as the interface is configured for.

### Pending:

This section displays any routes that are in the queue, ready to or trying to process. Most routes will try indefinitely until the record is successfully sent or a user marks the route errored. Some routes have a maximum number of tries configured at which point they fall into the Error Routes queue.

Some Pending progress statuses include:

* Error: could not get account number for location (MR:200000) from translation mapping (quest-account_numbers)! - Will Retry
* <em>Blank progress</em> - typically means datasend is not running. Report this to edi-support.

### Error Routes:

These are routes that have either timed out, reached the maximum number of tries to send, or have been marked as an error by a user.  The routes in this section may be marked as "Acknowledge", which will place them in the Completed/Acknowledged queue with the Progress "Acknowledged". The route may also be marked as "Resend", which will place it into the Pending routes queue, sending to the Routes in Progress queue when available.  Marking a route as "Deactivate" will stop sending, unless a user manually reactivates the item.

You may see Progress statuses like:

* Invalid job_id in HTTP Response
    * Datasend was unable to print the document, most likely due to an invalid user configured to the client's DataSend
* From Address not specified
    * Add the FROM address and resend
* To Address not specified
    * Add a valid TO address and resend
* Error: could not get account number …
    * Determine if an account number should be mapped and if so, map then resend. If not, ACK the route.
* Error: could not get account number for location (ABC:OFFICE) from translation mapping (labcorp-account_numbers)! - Will Retry
    * Determine if an account number should be mapped and if so, map then resend. If not, ACK the route.
* Invalid WC User Specified (). Check DataSend's Local WC Configuration
    * Caused if the username is empty or not in the system
* Print Failed: Unknown Printer - (null)
    * Happens when an invalid printer is selected
* SMTP HISP Not Configured
    * If the client communicates with SMTP, and not HTTP, but does not have a SMTP location
* Receiving Application said: XXX not found for vaccine code: 104
    * Find the appropriate [CDC CVX](https://www2.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx) code and add it to the translation
* Error: None of the supplied Patient Identifiers were recognized. Check the available Partitions for this patient.
    * The partition(s) that the patient is in do not have a Global ID (GUID) assigned. This needs to be assigned to at least one of the partitions on the chart in order to send via HL7.  Datasend constructs HL7 v2.5 style HL7 messages and sends the partition and it's GUID in subcomponents of the ID sent in PID.3.

## Completed/Acknowledged Routes:

This queue shows routes that have completed, either successfully or have been manually Acknowledged. If the receiving system provides a message in the response it is displayed in the Progress field. Some common "Progress" statuses include:

### SUCCESSFUL ROUTES

* Complete
* Complete: Request Was Successful
* Complete: ORDER SENT SUCCESSFULLY
* Document (1234567) Uploaded Successfully!
* Complete: Success
* Complete: Received as local Document...
* Complete: Received as local Document 12345678

### MESSAGE WAS NOT SUCCESSFUL

* Acknowledged - Message Rejected by Remote System
* Acknowledged - could not get account number for location (EID:OFFICE) from translation mapping (labcorp-account_numbers)! - Will Retry
* Acknowledged - HL7 Message Create Failed
* Print Failed: Unknown Printer - (null)
* No Destination Specified
* No message to send per settings. Skipping
* From Address not specified
* To Address not specified
* SMTP HISP Not Configured
* Required Parent/Guardian Information not Found

Progress - expand to see the full text by clicking on the double-headed arrow < -- >. This is a toggle, so click again to condense the message

![](./datasend-queue.assets/e7fea45330f804833c6c064e1c040e7a.png)

![](./datasend-queue.assets/0d5209f7693fd29af721b74c18912d05.png)

## Resending Routes

Depending on the error, the user may be able to fix the issue and resend the route. Some routes will resend upon editing the document/demographics/appointment, etc.

Common fixable errors include:

* <strong>‘Patient (pat_id,last_name,first_name)(11111,Brown,Charlie) Does Not have globally Exposed MR #'</strong>
    * This means the partition is not set up to send out. This may be due to divisions that the customer does not want routes sent. or it may be the partition of the Lab itself, which is needed for unsolicited results and the doc queue.
        * If the partition is set up correctly, it is best to set this route as Errored then Acknowledged.
        * If the partition needs set up, the next Global identifier needs to be assigned in Partition Manager. Engage Team EDI if unsure.
* If the error is<strong> ‘Invalid Administration Date (0000-00-00 00:00:00)'</strong> or <strong>‘Receiving Application said: vaccination date is after lot expiration date - Message Rejected'</strong>, once the date is corrected, you may resend the route.
* <strong>‘Lab Request For Document 31724338 Not Found'</strong>  Check to see if the document was deleted and Deactivate the route
* <strong>‘Error: None of the supplied Patient Identifiers were recognized. Check the available Partitions for this patient.'</strong> - Determine if the chart should have sent info by reviewing the Auto Route, consider adding a partition OID if needed. Engage Team EDI if unsure.
* <strong>‘ERROR: Unknown Manufacturer (Sandofi)'</strong> Many times this is a typo, but if it appears to be a valid manufacturer, go to the [CDC MVX codes](https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=mvx) and do an F5 search. If found, use the MVX code in the Trans Manager for the registry's manufacturer.
* <strong>‘Error: could not get account number for location (SOURCE:ANYMED) from translation mapping (quest-account_numbers)! - Will Retry'</strong> This means that there is a missing translation for quest-account_numbers. In this case, "SOURCE" = the partition and "ANYMED" = the location. Check tickets and/or with the customer to see if the SOURCE partition at ANYMED location should be sending an order thru the interface, and if so, what account number should be sent?  Then add the translation in Control Panel > Interface > Trans Mgr (quest-account_numbers).

## Security Settings

## Restricted Tab

Typically the Datasend Queue is not restricted from view, though it could be.

To restrict this tab, go to Control Panel > System > Menu Editor. Edit this and check/uncheck the "Allow Access to Restricted Users" option.

![](./datasend-queue.assets/f154570ffd52b57f6281921f16400ae0.png)

If the Allow Access to Restricted Users is checked, then there needs to be individual users or departments selected for who may access this tab. Always include MIE department for these tabs.

The **_User_** field is an autocomplete of the user's name. The **_Department_** is a drop-down list of all departments that have users in them.

## Viewing the Raw HL7

The security setting **_View Sent Messages _**allows the user to be able to view the raw HL7. This is off by default, as a HIPAA precaution. Once this setting is enabled, the user can see PHI contained within the HL7 message (PHI highlighted below).
![](./datasend-queue.assets/5b3d242b3bbeadf6c74fac4362f6aeb3.png)

MSH|^~\&|WCDataSend|mauidev|wc_hl7d|recv_facil|20240617040007||ORM^O01^ORM_O01|DSD1718632807482597|P|2.5|||||||||||||

PID|1|1018106172024|1018106172024^^^OPENPM&1.2.840.114398.1.5881.2&ISO^MR||**Testchart^Tester**^^^^^L||19801010000000|F||Other Race|1905 Scenic Hwy 2^^Lahaina^HI^96761^US^^^Maui||8775551212^PRN^PH^kbarton@enterprisehealth.com~8085551212^CP^PH|||L||||||Declined|||||||||||||||||

PV1|1||^^^mauidev|||||||||||||||||||||||||||||||||||||||||||||||^^^^^1.2.840.114398.1.6108||

ORC|NW|415697^MIE1|||Pending||1^once^^20240616000000^^0||20240617095447|30058^Medical Informatics Engineering^MIE||9009^Kopp^Keely^E.^^^PA-C|^^^^M1^^^^^Maui Hospital OP||20240616000000||922229-10^IHE-RAD^IHE-CODE-231||||Maui Hospital OP|221 Mahalani ^^Wailuku^HI^96793-2526^US||2180 Main Street^^Wailuku^HI^96793-1625|||||||

OBR|1|415697^MIE1||EXAS1000^Cologuard-Exact Sciences^IHEDEMO||20240617095447|20240616095300|||||||||9009^Kopp^Keely^E.^^^PA-C|||||||||||1^once^^20240616000000^^0|12636^Exact Sciences Laboratories||WALK|testing interface||||||||||A|||||||||

## Other Datasend Tips

### Encapsulated Servers

First, not all encapsulated servers are set up the same. You may need to refer to Redmine tickets or consult with a Team EDI member to determine how their messages are routed. However, you will still be able to view the progress of routes in the Datasend Queue.

### Datasend Route Status Outside of the Datasend Queue

Some WebChart systems have the Datasend Queue on the left side menu.

Some systems call the Datasend Queue "Send Queue" or "SendQueue" (not to be confused with the Fax queue or IFQ)

Individual document properties will also show the routes and status, but will not have the overall view and extra categories and tools as the Datasend Queue has.

![](./datasend-queue.assets/9c71bdf52ded788f395d4bae5067f557.png)

![](./datasend-queue.assets/a31e49197d1e59854fa24dda1c7972dc.png)

## LMS Quiz

1. Is it possible to restrict the Datasend Queue tab in Control Panel to specific security roles? (Y/N)  <strong>NO</strong>.
2. All routes in the Completed/Acknowledged queue were sent successfully. (True/False)  <strong>FALSE</strong>
3. Why would a user use the Datasend Queue? (pick all that apply) (<strong>b, c, d, f)</strong>
    * To check for print jobs
    * Check to see if datasend is running
    * Determine if an interface is working
    * To view the HL7 message
    * Check the log file
    * Deactivate a route
    * All of the above
4. Abby at the Lab calls and says she hasn't received any orders from the Client in two weeks. How can you troubleshoot this? <strong>(c, d)</strong>
    * Call the Help Desk
    * Have the Lab call the Client
    * Check the Pending and Error Routes in the Datasend Queue to see if there is any helpful information
    * Check specific doc ids > properties for the route information and troubleshoot based on your findings
    * None of the above
5. What needs to be enabled to view the raw HL7 message in the Datasend Queue? <strong>(d)</strong>
    * Change the default to View All
    * Change the security setting ‘View HL7' for only the individuals who need access
    * Change the My Setting ‘Document View Format' to PDF
    * None of the above
6. How does a Datasend route primarily get created? <strong>(a)</strong>
    * By an Auto Route trigger
    * From an inbound interface
    * By clicking the 'Add Route' link in Datasend Queue
    * Magic
