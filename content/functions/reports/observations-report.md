---
id: '13jOk33Y1SJkreIkd5pt3QzR7QY28FQvZOcLsMSPA1MM'
title: 'Observations Report'
date: '2025-11-11T20:11:27.087Z'
version: 116
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=13jOk33Y1SJkreIkd5pt3QzR7QY28FQvZOcLsMSPA1MM'
wikigdrive: 'v2.15.27'
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control.

## Patient Observations Report

Click the Reports tab on the left sidebar menu.

Find the Patient Observations listed report, or from the Visits grouping of reports, find the Patient Observations report.

The Patient Observations report allows one to search (within a date range) for specific observation(s) needed (discrete observation data stored on a chart).

You do not have to fill out every single field. These fields are different ways to report stats and each field gets more specific and narrows your search down.

This is a report that you can run to show anything stored as an observation (or encounter data if stored as an observation), vitals, etc. for charts.

![](../observations-report.assets/f24a16fdc79bac537446190b0ae512e3.png)

* <strong>Start Date:</strong> This is a required field. You must enter a start date.
* <strong>End Date:</strong> This is a required field. You must have an end date.
* <strong>Observation:</strong> This is a required field. You must enter one observation for the report to run. Observation field is a Begins With search.  Type in the beginning name of the observation you are searching to show results for. The system will attempt to auto-complete and give you a selection of choices. Click on your choice and it will save it in the list. Continue to type and select another observation to add to the search criteria report you want to run.

![](../observations-report.assets/6dafaca80251f66cedc1420e8d2d79c3.png)

![](../observations-report.assets/aaf4a86ecc09f180db6a2a4b0c1cca28.png)

When done, click the SEARCH button.

Your results will render below this field criteria section.

![](../observations-report.assets/96771ab039551b29dcdf39211480ed10.png)

You can rearrange or sort by clicking the column title.

## Additional Search Criteria

These are optional fields.

* <strong>Entered Date Start/End:</strong> You can enter a date range to show patient observations entered on a specific date range. This is different from the observed date.
* <strong>Last Encounter Location:</strong> You can select a specific location of where encounters were performed at, to filter down resulting observations that were keyed in via an encounter that has a performing location set on it.
    * If running the report system wide (no <em>Last Encounter Location</em> filter set), then any observation data will result regardless of where it was keyed in (encounter vs elsewhere in the system).  That is the ‘Location' column that results on the output.  Blank locations mean the observation was keyed in elsewhere in the product.  A specific location identified means the observation was keyed in within an encounter with that performing location set on the encounter.

![](../observations-report.assets/caf51ee15020e7a45a869d338c00c213.png)

    * This example shows limiting the same report by a specific Encounter Location that was set on the encounter as the performing location.  This results only the observation data (that is being filtered by) to a specific performing encounter location.

![](../observations-report.assets/3698181b8dd32392557d1af7a584e751.png)

    * The performing encounter location is set in the Encounter top section when working in an encounter to document visit data.

![](../observations-report.assets/c350d7a08d3f8d2ed4ee3551b95277f6.png)

* <strong>Entered By:</strong> You can begin typing in the first or last name of a user in your {{% system-name %}} system. It will auto-complete to give you choices. Select the user you wish to narrow down this report by. This will show those patient observations that were entered by that user only.

You can click the Show CSV link and download your search results into an excel spreadsheet which you can save, sort, etc in spreadsheet form. There is a view printable link to print your search results in the format shown on your results screen.  You can also throw the results into a datavis grid via Show Grid option, however we do offer a separate Patient Observations-DataVis report on its own in the system for use.

![](../observations-report.assets/187599c9dbe809846c5ccfa1115611d2.png)

## Patient Observations - DataVis Report

The Patient Observations-DataVis report is an additional separate report that mimics the other Patient Observations report, yet provides additional search filter fields and provides an output in DataVis format with added columns of data.

![](../observations-report.assets/7ee1267958ef2cb478ace237fffef9f0.png)
