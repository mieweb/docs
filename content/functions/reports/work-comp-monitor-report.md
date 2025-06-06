---
id: '1LHkaV4HiAFPWKnKnOzRcFO76OCqe48TRZdKkrglX6Pc'
title: 'Work Comp Monitor Report'
date: '2025-04-30T14:33:10.108Z'
version: 57
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1LHkaV4HiAFPWKnKnOzRcFO76OCqe48TRZdKkrglX6Pc'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
The Work Comp Monitor Report is for monitoring work comps claims that are sent to TPAs (Third Party Administrators). Examples of TPA's include Sedwick, Origami, LIberty Mutual, CARS, Corvel, Brentwood, Broadspire, Risx-Facs (Gallagher Bassett), Vigilanz, and PMA. This report is used to make sure all work comp claims are successfully processed and sent to the TPA. The report will display any claims pending, errored, processed and sent.

![](../work-comp-monitor-report.assets/bdf8597cbd64e7c4da63959b89793666.png)

## Filter Criteria

![](../work-comp-monitor-report.assets/866a81935cbf33635f7322ac3ba2479c.png)

**Third-Party Administrator (TPA)**

This field is required to be selected to run the report.  In almost all cases *All* will always be used because it's rare for any one system to have multiple TPAs. If additional options are available, they are populated by an observation code with the name *Send Claim to TPA* in conjunction with the interface installation.

**Start Date**

The start date field is also required. The start date will begin searching for claims that match the *Date Sent (to the TPA)*.

**End Date**

The end date field will stop searching for claims that match the *Date Sent (to the TPA)*. If no date is entered, the search will continue up to "today".

**Incident Number**

The incident number is a system generated db id number for the case.

**Case Number**

The case number is the system generated number and helps to identify or describe the incident.

## Results

![](../work-comp-monitor-report.assets/50dfe08b4c1a6c5650a1b3bcbb8d3e54.png)

**TPA**

The name of the Third-Party Administrator in which the claim was sent to.

**Incident #**

This is the Enterprise Health auto incremented incident number.

**Employee #**

This is the employee/patient's main medical record number or identifier.

**Chart**

This is the employee/patient's last name, first name.

**Case #**

This is the Enterprise Health issued case number.

**Claim #**

This is the claim number issued by the Third-Party Administrator. This is returned by the TPA after processing the claim.

**Create Date**

**Date of Injury**

This is the date and time of injury as entered on the case.

**Date Sent**

This date will display the last date in which the claim was sent to the TPA.

**Modified Date**

This date is the date the case information was last updated in Enterprise Health.

**Status**

Report statuses are: Pending, Sent, Processed, Error, Resend This Case. When the status is Error or Resend This Case, there will be value in the Status Description explaining the error or issue.

**Status Description**

This column displays additional information regarding an error status or issue.

**Options**

Under the *Options* column will be a *Resend Case* link that will queue the case to be sent again to the TPA on the chance there was an error in initial transmission or there was an error that is now correct.

**Raw Data**

The *Raw Data* link that shows you, table formatted, exactly what was sent over to the TPA for the fields per their spec.
