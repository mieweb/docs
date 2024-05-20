---
id: '1PpdjD2K4mv1ohcdofTrXyN_wGzQUGF2QuHfgGTnaYFk'
title: 'OSHA 300A Report'
date: '2024-05-20T19:10:45.796Z'
version: 93
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1PpdjD2K4mv1ohcdofTrXyN_wGzQUGF2QuHfgGTnaYFk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The OSHA 300A report is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../osha-300a-report.assets/a58a0c478ddfed44e76fa48c4dc094f2.png)

The OSHA 300A report will display 1 line of data with several columns of total counts.

![](../osha-300a-report.assets/bb9419fa300b49ff9a976492f29aa6ed.png)

### OSHA 300A Report Criteria

The OSHA 300A report interoperates with our Case/Incident encounter section.  To utilize the OSHA 300A report, your system must:

* Utilize the Case section on specific encounter types deemed appropriate
* Utilize OSHA Recordable (date determined recordable) within the case when applicable
* Utilize Restrictions and Accommodation sections on specific encounter types deemed appropriate

Capturing case (incident) detail on a patient or employee is done through encounters using the *Case* encounter section.

![](../osha-300a-report.assets/d5415669225aa8aff61582f608e4fb0a.png)

Incidents **are** cases and that terminology is interchangeable in our product.

If a case/incident is OSHA recordable, the field *Date determined recordable* needs to be populated in the case encounter section.  Again, only cases/incidents that are marked as OSHA Recordable (using the Date determined recordable field), would display on the OSHA 300A report.  Having a date in the field *Date determined recordable* signifies this is an OSHA reportable case.

![](../osha-300a-report.assets/eef974964e588aabb5ad355286db873f.png)

You can also tell if the case (linked to the encounter you are working in) is OSHA recordable by seeing it displayed in the light grey bar in the header.

![](../osha-300a-report.assets/b8777e234f04a6aa23f45aa35d5aedae.png)

### OSHA 300A Report Search Filters

When you access the OSHA 300A Report from the Safety reports tab, you will see a *Common Case Search* filter criteria at the top.  In the Common Case Search filters at the top of this report, there are several search filter fields available to narrow down your search.  However, the OSHA 300A Report only outputs total counts of cases that are OSHA recordable, according to any search filter criteria entered.

If you don't wish to filter, you can just scroll down to click the SEARCH button and it will result any and every OSHA Recordable case (incident) for your entire system in a report summary.

![](../osha-300a-report.assets/b97e2eb83976acb2cf181e1f5ff9698c.png)

See other help documentation titled *Common Incident Search Report.pdf* for detailed information on each search criteria field.

### OSHA 300A Report Output

The OSHA 300A Report are columns of identified counts.

![](../osha-300a-report.assets/846ecfddf0f11d7da34959a5417f9592.png)

The following describes each column of the report:

* <strong>Deaths:</strong> This gives the total number of recordable cases (according to search criteria entered) where the <em>Employee died</em> checkbox field in the OSHA recordable case/incident is marked.

![](../osha-300a-report.assets/60dac98c0d870b04606b1345b34f8b2f.png)

* <strong>Incidents w/ Days Away:</strong> This gives the total number of recordable cases (according to search criteria entered) that have any Lost Time accommodations linked to the OSHA recordable case/incident.
    * Lost Time accommodation types are any of the 5<strong> Lost Time</strong> accommodation options.

![](../osha-300a-report.assets/f8f6f5f8706d5750c4ec2c11b7592406.png)

* The accommodation drop-down choices deemed <em>lost time</em> are looked at in the system setting <em>Lost Time Type</em>.  By default the 5 Lost Time accommodation choices are counted for this, but the system setting controls that.

![](../osha-300a-report.assets/500c0eeded3e6676744c04238b6813c1.png)

* <strong>Incidents w/ Days Restricted:</strong> This gives the total number of recordable cases (according to search criteria entered) that have any restrictions linked to the OSHA recordable case/incident. Note: if the same recordable case had Lost Time accommodations, then it counts as a Lost Time case, not also a restriction case.

![](../osha-300a-report.assets/57d05bc039766755fafcb0f463ff46d2.png)

* <strong>Other Reportable Incidents:</strong>  This gives the total number of recordable cases (according to search criteria entered) where the recordable case didn't fit any of the other criteria of Death, Lost Time (days away), or Restrictions (days restricted).   In the prior columns, only ONE of these categories is to apply to the recordable case and is classified by the OSHA recordable case having the most serious outcome with Death being the most serious and Other reportable incidents being the least serious.
* <strong>Total Days Away:</strong> If any recordable cases (according to search criteria entered) had any Lost Time documented in the Accommodations encounter section and the accommodation is linked to the OSHA recordable case, the total number of Lost Time days will be calculated here and displays a total number.
    * If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case even for a partial day, it counts as a full day in this calculated column.
    * If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
    * The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day.  Day of incident/case does not count as a lost time day, if the lost time started that same day.
* <strong>Total Days Restricted:</strong> If any recordable cases (according to search criteria entered) had any Restrictions documented in the restrictions section of the encounter that is linked to the OSHA recordable case, the total number of Restricted days will be calculated here and displays as a total number.
    * Overlapping restriction days are only counted once.
    * The calculation in this column does not include future days.
    * The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column.  A full day is counted as a start day and the end day being a day apart.
* <strong>Injuries/Skin Disorders/Respiratory Conditions/Poisonings/Hearing Loss/All Other Illnesses:</strong> The counts for each injury/illness type (Injury, Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses) column will populate with a total count in the appropriate column based on which <em>injury/illness type</em> was selected on the OSHA recordable cases (according to search criteria entered).

![](../osha-300a-report.assets/ed1a302d706d1a3fc4588d118b4572b0.png)

### Print/Save/Store Output

The OSHA 300A Report can be printed and/or imported into a CSV/excel spreadsheet or into a Datavis Grid, using the hyperlinks available near the report title for saving, storage or printing needs.

![](../osha-300a-report.assets/3ab686cba9e41a0d34eefe7d2e17d63d.png)
