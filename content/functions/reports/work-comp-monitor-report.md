---
id: '1LHkaV4HiAFPWKnKnOzRcFO76OCqe48TRZdKkrglX6Pc'
title: 'Work Comp Monitor Report'
date: '2025-07-15T17:43:30.164Z'
version: 86
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'using-datavis-grids-data-tools.md'
source: 'https://drive.google.com/open?id=1LHkaV4HiAFPWKnKnOzRcFO76OCqe48TRZdKkrglX6Pc'
wikigdrive: 'v2.15.30'
---
The Work Comp Monitor Report is for monitoring work comps claims that are sent to TPAs (Third Party Administrators). Examples of TPA's include Sedwick, Origami, LIberty Mutual, CARS, Corvel, Brentwood, Broadspire, Risx-Facs (Gallagher Bassett), Vigilanz, and PMA. This report is used to make sure all work comp claims are successfully processed and sent to the TPA. The report will display any claims pending, errored, processed and sent according to search filter criteria entered.

![](./work-comp-monitor-report.assets/bdf8597cbd64e7c4da63959b89793666.png)

## Filter Criteria

![](./work-comp-monitor-report.assets/866a81935cbf33635f7322ac3ba2479c.png)

* <strong>Third-Party Administrator (TPA):</strong> This field is required to be selected to run the report.  In almost all cases <em>All</em> will always be used because it's rare for any one system to have multiple TPAs. If additional options are available, they are populated by an observation code with the name <em>Send Claim to TPA</em> in conjunction with the interface installation.
* <strong>Start Date:</strong> The start date field is also required. The start date will begin searching for claims that match the <em>Date Sent (to the TPA)</em>.
* <strong>End Date:</strong> The end date field will stop searching for claims that match the <em>Date Sent (to the TPA)</em>. If no date is entered, the search will continue up to ‘today'.
* <strong>Incident Number:</strong> The incident number is a system generated db id number for the case.
* <strong>Case Number:</strong> The case number is the system generated number and helps to identify or describe the incident.

## DataVis Report Output

After keying in search criteria and hitting the SEARCH button, the results will be displayed in a DataVis format.  The report will display any claims pending, errored, processed and sent according to search filter criteria entered.  For more information on DataVis, please refer to [Using DataVis Grids](using-datavis-grids-data-tools.md).

![](./work-comp-monitor-report.assets/50dfe08b4c1a6c5650a1b3bcbb8d3e54.png)

### Columns of Data in Output

* <strong>TPA:</strong> The name of the Third-Party Administrator in which the claim was sent to.
* <strong>Incident #:</strong> This is the Enterprise Health auto incremented incident number.
* <strong>Employee #:</strong> This is the chart's medical record number(s) with partition(s).
* <strong>Chart:</strong> This is the chart's last name, first name.
* <strong>Case #:</strong> This is the issued case assigned number for the case/incident in the Enterprise Health system.
* <strong>Claim #:</strong> This is the claim number issued by the Third-Party Administrator. This is returned by the TPA after processing the claim.
* <strong>Create Date:</strong> This is the created date and time of the case/incident.
* <strong>Date of Injury:</strong> This is the date and time of injury as entered on the case.
* <strong>Date Sent:</strong> This date will display the last date in which the claim was sent to the TPA.
* <strong>Modified Date:</strong> This date is the date the case information was last updated in Enterprise Health.
* <strong>Status:</strong> Report statuses are: Pending, Sent, Processed, Error, Resend This Case, or Discarded. When the status is Error or Resend This Case, there will be value in the Status Description explaining the error or issue.
* <strong>Status Description:</strong> This column displays additional information regarding an error status or issue.
* <strong>Options:</strong> Under the <em>Options</em> column will be choices:
    * <em>Resend This Case</em> link that will queue the case to be sent again to the TPA on the chance there was an error in initial transmission or there was an error that is now correct.
    * <em>Discard This Case</em> link will delete the observation "Send Claim to TPA" from encounter_links and update the report status to "Discarded" so it will not be sent again in the future. The ‘Status' column for the listed claim message will change to Discarded and the options will be removed from the listen claim message.

![](./work-comp-monitor-report.assets/2020ba73b8f2d2a22fb045a563ec06c2.png)

* <strong>Raw Data:</strong> The <em>Raw Data</em> link that shows you, table formatted, exactly what was sent over to the TPA for the fields per their spec.
