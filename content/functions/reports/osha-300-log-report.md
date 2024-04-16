---
id: '1H7WtbjdWRFk16DZx2HZK1GANzpRJH4FQiDhAuFAY4zE'
title: 'OSHA 300 Log Report'
date: '2024-01-25T19:22:08.857Z'
version: 175
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://www.osha.gov/sites/default/files/OSHA-RK-Forms-Package.pdf'
source: 'https://drive.google.com/open?id=1H7WtbjdWRFk16DZx2HZK1GANzpRJH4FQiDhAuFAY4zE'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Capturing case (incident) detail on a patient or employee is done through encounters using the *Case* section.

![](../osha-300-log-report.assets/d5415669225aa8aff61582f608e4fb0a.png)

Incidents are cases.The terminology is interchangeable throughout the product.

## OSHA 300 Log Report

The OSHA 300 Log Report will show a summary of OSHA reportable cases. If a case/incident is OSHA recordable, the field *Date determined recordable* needs to be populated in the Injury-OSHA case type in an encounter the case is linked to. Having a date in the field *Date determined recordable* signifies this is an OSHA 300 reportable case. The OSHA 300 LOG report looks at any/all cases (based on your filter criteria) that have a date populated in this *date determined recordable* field.

![](../osha-300-log-report.assets/eef974964e588aabb5ad355286db873f.png)

You can also tell if the case (linked to the encounter you are working in) is OSHA recordable by seeing it displayed in the light grey bar in the header.

![](../osha-300-log-report.assets/b8777e234f04a6aa23f45aa35d5aedae.png)

From the Reports sidemenu, there is a reports parent tab named *Safety.* Then there is a report available named *OSHA 300 Log*.

![](../osha-300-log-report.assets/037309dd4a6730c5dcea1d8453e3d5d4.png)

Clicking on that takes you to the OSHA 300 Log report but at the top you will see a search criteria field section named *Common Incident Search*. See other help documentation titled *Common Incident Search* for specifics on each filter criteria field. Most OSHA 300 Logs are run using the incident date range filter.

![](../osha-300-log-report.assets/16e22c93b89dff530aca01e6024d5b3d.png)

## OSHA 300 Log Results

You do not have to enter any search filters if you want results for the lifetime of the database. You can scroll down and click SEARCH to get a full complete OSHA 300 Log listing for any case deemed OSHA recordable for the lifetime of the database.

However, most need to run the OSHA 300 Log by incident date range filter. After any search filter criteria fields are keyed in, click the SEARCH button at the bottom of the Common Incident Search report while in the OSHA 300 Log report. Below it will result all the matching criteria cases/incidents in a list view that were deemed/noted as OSHA Recordable and it's titled *OSHA 300 Log*.

![](../osha-300-log-report.assets/541a48a74c3839800be4fd1f058e3968.png)

## Columns of Cases Results in OSHA 300 Log Report

Our OSHA 300 Log report form displays data according to the data collected in the case/incident.  Official OSHA explanation of log report & form: https://www.osha.gov/sites/default/files/OSHA-RK-Forms-Package.pdf

* <strong>Case Number:</strong> This is the unique case number identifier that the system assigns
* <strong>Name:</strong> This displays the last name,first name of the Employee's OSHA recordable case/incident.  If the case/incident were marked as a <em>privacy case</em> in that checkbox field, then the OSHA 300 Form log will say <em>Privacy Case</em> as the Employee's name.

![](../osha-300-log-report.assets/1f1a89698a91f530d0a919c121d593ec.png)

![](../osha-300-log-report.assets/81b700b161362ab6067f0035ba6d687e.png)

* <strong>Job Title:</strong> This pulls the data that is stored in the Job Code Description field of the employee's chart demographics tab.
* <strong>Onset Date:</strong>  This pulls the <em>date and time of injury or onset of illness</em> from the OSHA recordable case encounter section.

![](../osha-300-log-report.assets/a4f00943bf48960189aa8ee29b6c0312.png)

* <strong>Location:</strong> This pulls the <em>where the event occurred</em> field from the OSHA recordable case/incident when an onsite location choice is selected.

![](../osha-300-log-report.assets/f1985a1f428e6e48b6090afef1e0dace.png)

* <strong>Description:</strong> This pulls the <em>Nature of Injury or Illness / Body parts</em> section details from the OSHA recordable case/incident and also pulls the <em>What object or substance directly harmed the employee</em> field from the OSHA recordable case/incident.

![](../osha-300-log-report.assets/be459c4f79380a047a3ec6082e1228ce.png)

* <strong>Death Case:</strong> This column displays N (for No) if the <em>patient died</em> checkbox field in the OSHA recordable case/incident isn't marked. The column displays Y (for Yes) if the checkbox is checked on the OSHA recordable case/incident.

![](../osha-300-log-report.assets/a077c73cc3f0ff37f83f38057b026aa5.png)

* <strong>Days Away from Work Case:</strong> If the employee has any Lost Time accommodations linked to the OSHA recordable case/incident, then the column will display a Y.  If the employee had no restrictions linked nor documented to the OSHA recordable case, then the column will display N on the overlay.<strong></strong>

Lost Time accommodation types are any of the 5** Lost Time** accommodation options.

![](../osha-300-log-report.assets/f8f6f5f8706d5750c4ec2c11b7592406.png)

The accommodation drop-down choices deemed *lost time* are looked at in the system setting *Lost Time Type*.  By default the 5 Lost Time accommodation choices are counted for this, but the system setting controls that.

![](../osha-300-log-report.assets/500c0eeded3e6676744c04238b6813c1.png)

* <strong>Job Transfer or Restriction Case:</strong> If the employee has any restrictions linked to the OSHA recordable case/incident, then the column will display an X.  If the employee had no restrictions linked nor documented to the OSHA recordable case, then the column will be blank on the overlay.

![](../osha-300-log-report.assets/57d05bc039766755fafcb0f463ff46d2.png)

* <strong>Other Recordable Cases:</strong> OSHA form defines 'other recordable cases' as: "<em>Classify the seriousness of the case by recording the most serious outcome associated with the case, with column G (Death) being the most serious and column J (Other recordable cases) being the least serious</em>." Again, a case/incident is deemed OSHA recordable if the field <em>date determined recordable</em> is populated with a date.
* <strong>Days Away from Work:</strong> If the employee had any Lost Time documented in the Accommodations encounter section and the accommodation is linked to the OSHA recordable case, the number of days of Lost Time will be calculated here and displays a total number.
    * If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case even for a partial day, it counts as a full day in this calculated column.
    * If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
    * The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day.  Day of incident/case does not count as a lost time day, if the lost time started that same day.
* <strong>Days Restricted:</strong> If the employee had any Restrictions documented in the restrictions section of the encounter that is linked to the OSHA recordable case, the number of days Restricted will be calculated here and displays as a total number.
    * 180 days will be the max number it shows in this column.  Anything more than 180 days will still only display as 180 days here in the column and is considered then a permanent restriction.
    * If the employee had Lost Time documented at any time for this OSHA recordable case, no days will display as calculations here in this Days Restricted column.  Instead, the Days Away from Work column would be populated with the Lost Days count.  The case is either Days Away from Work or Days Restricted, one or the other, even though the employee may have both lost time & restrictions on the OSHA recordable case.
    * If the employee only had Lost Time and no restrictions for the OSHA recordable case, nothing would display here in this column.
    * Overlapping restriction days are only counted once.  For example; if an employee had a Bending restriction for 5 days, and had another separate type of restriction for No Lifting also but for only 3 days. If those dates on those restrictions are any overlapping days, the count in this column will not count overlapping days.  So the column would display 5 as the calculation.
    * The calculation in this column does not include future days.  For example; if the employee had a restriction from 1/1/2015 thru 1/31/2015 and you ran this OSHA 300 log on 1/15/2015, it would only show 14 as the calculation, not 30.  It would show 30 if you ran the report on 1/31/2015.
    * The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column.  A full day is counted as a start day and the end day being a day apart.

### Remaining Columns of the OSHA 300 Log

![](../osha-300-log-report.assets/ded7ad72a021d51518553da5334ca9ba.png)

The columns for Injury, Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses will populate with an X in the appropriate column based on which *injury/illness type* was selected on the OSHA recordable case.

![](../osha-300-log-report.assets/ed1a302d706d1a3fc4588d118b4572b0.png)

## Print Options

The OSHA 300 Log can be printed and/or imported into a CSV/excel spreadsheet for further sorting using the hyperlinks available near the report title.

![](../osha-300-log-report.assets/f562fd65380b4f52cdb84c90c4d3c185.png)
