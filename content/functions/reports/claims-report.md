---
id: '1HjxLTED_HSHduFkL4z3w2Pe71mS3C37CwBLcpKaxZhk'
title: 'Claims Report'
date: '2024-01-25T20:55:57.738Z'
version: 88
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1HjxLTED_HSHduFkL4z3w2Pe71mS3C37CwBLcpKaxZhk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The Claims report is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../claims-report.assets/4554a07697ccf0f894de8df00bcadb95.png)

## CLAIMS REPORT

Some workflows require to document and identify what TPA (Third Party Administrator) a case/incident should be sent to.  This optional field can be configured for your system to be available in the case/incident encounter section to identify which TPA to send claim to.  The TPA choices can be customized for your system also.

![](../claims-report.assets/0641731d50d326ee87b9fe01fc0b139f.png)

The *Send Claim To* field in the above encounter case/incident section interoperates with the Claims Report.

![](../claims-report.assets/2fde2fc15500c171c0da4097e7087f2d.png)

Some systems have a work comp interface for this automatic sending of case/incident data based on TPA selection, but this Claims Report gives a system the ability to report out the same data that a work comp interface would.  The report can be downloaded as a CSV format to be able to send to the identified TPA(s) manually.

### Claims Report Criteria

The Claims Report has the following logic criteria/logic built in order to run this report:

* An observation named <strong>Send claim to TPA</strong> must be configured in the system
    * Result Type must be set to <strong>Custom Discrete Values</strong>
    * Value & Sort Order must be keyed in to allow your TPA selections for your system
    * Note: <em>Don't send the claim</em> choice will automatically be a selection in the case/incident section if your system is configured to use Send claim to TPA.  Do <strong>not</strong> manually configure a <em>Don't send the claim</em> as a custom discrete value for the observation configuration, only your TPA company name selections need configured as values.

![](../claims-report.assets/8848ea30f3de1876e0b5d82e4406a7b6.png)

* Your case/incident workflows must utilize the Case encounter section on specific encounter types deemed appropriate for your business
* Your case/incident workflows use the Case Management encounter with Notes/Tracking encounter section
* The case/incident does <strong>not</strong> need to be documented as <em>OSHA Recordable</em> to appear on this report (date determined recordable field)

### Claims Report output

The Claims Report output displays in a datavis format with several columns of data pulled from the encounter case/incident and from the chart's demographics and employment information.

![](../claims-report.assets/16bb367d283e4b4d0fa1e7ba388b4956.png)

The output of the report may cause you to scroll left and right to see all the columns that are rendering on the output.
![](../claims-report.assets/d34da375f0f784e71de49cd22fcdf24b.png)

### Download Claims Report to a CSV format

The Claims Report is easily downloadable into a CSV format.  Simply click the *Generate CSV* icon (looks like a corner fold paper icon), which will then turn into a *Download CSV* icon to click (looks like an in-box tray icon) to generate the report's output into a CSV downloadable file.  Store to your folder location of choice.

![](../claims-report.assets/7c661563333a8741a9d0ea8353fcef59.png)
