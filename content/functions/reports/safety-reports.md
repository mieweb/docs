---
id: '1sFH8kq31zcYpQP02bncYToNOhPotamh6fcIu4misxgA'
title: 'Safety Reports'
date: '2024-01-25T20:56:38.114Z'
version: 149
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'claims-report.md'
  - 'common-case-search-report.md'
  - 'osha-300-log-report.md'
  - 'osha-300-form-log-overlay.md'
  - 'osha-300a-report.md'
  - 'osha-300a-form-log-overlay.md'
  - 'https://www.osha.gov/injuryreporting'
  - 'osha-300-301-case-data-report.md'
  - 'osha-statistics-report.md'
  - 'sharps-log-report.md'
source: 'https://drive.google.com/open?id=1sFH8kq31zcYpQP02bncYToNOhPotamh6fcIu4misxgA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
This guide will go through the most common out of the box Safety Reports available in {{% system-name %}}, but more detailed information on each individual report is found in its own separate guide.

![](../safety-reports.assets/bfc733549061f39aa3be076c88d05a66.png)

You must have security permission to the Reports module/tab within {{% system-name %}}. This permission is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users to access the Reports left sidemenu tab module.

![](../safety-reports.assets/09ec61d9ee49b68f313c43d40f34ad2e.png)

## Claims Report

Some workflows require to document and identify what TPA (Third Party Administrator) a case/incident should be sent to.  Some systems have a work comp interface for this automatic sending, but now this Claims Report gives a system the ability to report out the same data that a work comp interface would.  The report can be downloaded as a CSV format to be able to send to the identified TPA(s) manually.

![](../safety-reports.assets/16bb367d283e4b4d0fa1e7ba388b4956.png)

To better understand the Claims Report, review the [Claims Report](claims-report.md) online help documentation.

## Incident Report

In the Common Case/Incident Report, there are several search filter fields available to narrow down your search result for documented cases/incidents in your system. If you don't wish to filter, you can just scroll down to click the Search button and it will result in any and every case (incident) documented in your system as a detailed report summary. This summary report is easily downloadable into a CSV format or available for printing.  A 301 hyperlink is available on each summary line item, to allow you to download/print/save the OSHA 301 form with the case/incident data overlaid onto it from its summary.

![](../safety-reports.assets/7be3e18989214f267f82071bf60c7155.png)

To better understand the Incident Report/Common Case Search Report, review the  [Common Case Search Report](common-case-search-report.md) online help documentation.

## OSHA 300 Log Report

The OSHA 300 Log Report will show a summary of OSHA reportable cases. If a case/incident is OSHA recordable, the field Date determined recordable needs to be populated in the Injury-OSHA case type in an encounter the case is linked to. Having a date in the field Date determined recordable signifies this is an OSHA 300 reportable case. The OSHA 300 LOG report looks at any/all cases (based on your filter criteria) that have a date populated in this date determined recordable field.

![](../safety-reports.assets/cd7b9a1a4ae9cd62b2cdd445e610d8be.png)

To better understand the OSHA 300 Log Report, review the [OSHA 300 Log Report](osha-300-log-report.md) online help documentation.

To review an additional feature of an OSHA 300 overlay onto the form through an Employer Organization chart in {{% system-name %}}, review the [OSHA 300 Form Log Overlay](osha-300-form-log-overlay.md) online help documentation.

To better understand the search filter fields available, review the [Common Case Search Report](common-case-search-report.md) online help documentation.

## OSHA 300A Report

The OSHA 300A Report will show a summary of OSHA reportable cases/incidents within the system, depending on the search filter criteria you have entered.  This report is easily downloadable into a CSV format to help with self electronic reporting needs.

![](../safety-reports.assets/bfd3524edc4e603d8b3911a632ab49ab.png)

To better understand the OSHA 300A Report, review the [OSHA 300A Report](osha-300a-report.md) online help documentation.

To review an additional feature of an OSHA 300A overlay onto the form through an Employer Organization chart in {{% system-name %}}, review the [OSHA 300A Form Log Overlay](osha-300a-form-log-overlay.md) online help documentation.

To better understand the search filter fields available, review the [Common Case Search Report](common-case-search-report.md) online help documentation.

## OSHA 300/301 Case Data Report

The Department of Labor (DOL) Occupational Safety and Health Administration (OSHA) Injury Tracking Application (ITA) provides a system to securely access and submit information related to workplace injuries. The application is being enhanced to begin collecting details on individual injury and illness cases. Our OSHA 300/301 Case Data Report is a method to produce a large data output to bulk upload larger data sets using API endpoints. This report provides the fields that make up the body of most of the Request API calls involving the Case Data form. This OSHA 300/301 Case Data Report will pull OSHA recordable cases/incidents for the PRIOR year of the current logged in session. Meaning, it will look for any OSHA recordable cases/incidents that have an onsite injury/illness date of the prior year to today's logged in date, will result here with related case/incident details. This report is easily downloadable into a CSV format to help with self electronic reporting needs.

More information from OSHA is at https://www.osha.gov/injuryreporting

![](../safety-reports.assets/1287e1fd34e8705bec0fe3f21c2d9d5b.png)

To better understand the OSHA 300/301 Case Data Report, review the [OSHA 300/301 Case Data Report ](osha-300-301-case-data-report.md)online help documentation.

## OSHA Statistics Report

The OSHA Statistics report will display columns of data that mimics the Injury Tracking Application (ITA) published by OSHA.gov website. Our {{% system-name %}} OSHA Statistics report helps provide a method for injury and illness data submissions you may be required to submit by OSHA.  Our OSHA Statistics report displays OSHA recordable cases/incidents for the *PRIOR year* of this current logged in session according to establishments (EO charts) that have that establishment/onsite work location noted as having any recordable injury/illness occurrences there. Meaning, it will look for and display information regarding OSHA recordable cases/incidents that have an injury/illness onset date of the *prior* year to today's logged in date, broken down by where it occurred (work location or site EO establishments) to result here.  This report provides a list

of all Sites or Work Location (chart type charts) and the related OSHA information applicable to the OSHA 300A form.  More information from OSHA is at https://www.osha.gov/injuryreporting

![](../safety-reports.assets/a153bc59d5459adf0bcdaa83bbd20910.png)

To better understand the OSHA Statistics Report, review the [OSHA Statistics Report](osha-statistics-report.md) online help documentation.

## Sharps Log Report

The Sharps Log is a listing of charts who have an open or closed case/incident documented with the Nature of Injury or Illness (NIBP) documented as **Contaminated Sharp**.  It does not matter if the case/incident is OSHA recordable or not either to display on this report.  Other details about the incident also display in this report for that needlestick incident when a case/incident has Contaminated Sharp as the nature of injury.

![](../safety-reports.assets/9dae8f82dfe5a4fe75c1348e81454b17.png)

To better understand the Sharps Log, review the [Sharps Log](sharps-log-report.md) online help documentation.
