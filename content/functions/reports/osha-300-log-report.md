---
id: '1H7WtbjdWRFk16DZx2HZK1GANzpRJH4FQiDhAuFAY4zE'
title: 'OSHA 300 Log Report'
date: '2020-02-27T20:15:26.983Z'
version: 56
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1H7WtbjdWRFk16DZx2HZK1GANzpRJH4FQiDhAuFAY4zE'
wikigdrive: '8934ab392b82c3a1d5a8ae9fb7795d99e93c12ca'
menu:
  main:
    name: 'OSHA 300 Log Report'
    identifier: '1H7WtbjdWRFk16DZx2HZK1GANzpRJH4FQiDhAuFAY4zE'
    parent: '1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY'
    weight: 4280
---
Capturing case (incident) detail on a patient or employee is done through encounters using the dynamic *Case* section.
  
![](../osha-300-log-report.assets/10000201000004A80000011A9E987434F7DC6B73.png)  

Incidents are cases. We use the terminology interchangeably, so you may have encounters that have this section named Case or it may be named Incident Details, etc.
  
## OSHA 300 Log Report  
  
The OSHA 300 Log Report will show a summary of OSHA reportable cases. If a case/incident is OSHA recordable, the field *Date determined recordable* needs to be populated in the Injury-OSHA case type in a dynamic encounter the case is linked to. Having a date in the field *Date determined recordable* signifies this is an OSHA 300 reportable case. The OSHA 300 LOG report looks at any/all cases (based on your filter criteria) that have a date populated in this *date determined recordable* field.
  
![](../osha-300-log-report.assets/100002010000028D000000E3AE2A15D9D2CEE2D0.png)  

You can also tell if the case (linked to the encounter you are working in) is OSHA recordable by seeing it displayed in the light grey bar in the header.
  
![](../osha-300-log-report.assets/10000201000004A500000062EAFD0EE0B40E9F0F.png)  

From the Reports sidemenu, there is a reports parent tab named *Safety.* Then there is a report available named *OSHA 300 Log*.
  
![](../osha-300-log-report.assets/1000020100000242000000A33B64336E0E412DAA.png)  

Clicking on that takes you to the OSHA 300 Log report but at the top you will see a search criteria field section named *Common Incident Search*. See other help documentation titled *Common Incident Search.pdf* for specifics on each filter criteria field. Most OSHA 300 Logs are run staff using incident date range filter.
  
![](../osha-300-log-report.assets/100002010000029B00000173B9E755F8037F3A59.png)  

  
## OSHA 300 Log Results  
  
You do not have to enter in any search filters. You can scroll down and click SEARCH to get a full complete OSHA 300 Log listing for any case deemed OSHA recordable for the list of the database.  
However, most staff run OSHA 300 Log by incident date range filter. After any search filter criteria fields are keyed in, click the SEARCH button at the bottom of the Common Incident Search report while in the OSHA 300 Log report. Below it will result all the matching criteria cases/incidents in a list view that were deemed/noted as OSHA Recordable and it's titled *OSHA 300 Log*.
  
![](../osha-300-log-report.assets/10000201000004EA00000061339089EBB1282041.png)  

  
## Columns of Cases Results in OSHA 300 Log Report  

* <strong>Case Number:</strong> This displays the specific assigned number to the case/incident.
* <strong>Name:</strong> This displays the last name,first name of the patient/employee on the OSHA recordable case/incident. If the case/incident were marked as a <em>privacy case</em> in that checkbox field, then the OSHA 300 Log will result the name as <em>Privacy Case</em>.
  
![](../osha-300-log-report.assets/10000201000001320000004219B462B6920DC63B.png)  

  
![](../osha-300-log-report.assets/100002010000010D0000005594251F0A66D87651.png)  

* <strong>Job Title:</strong> This pulls the data that is stored in the Job Code Description field of the employee demographics tab.
* <strong>Onset Date:</strong> This pulls the <em>date and time of injury or onset of illness</em> from the OSHA recordable case/incident.
  
![](../osha-300-log-report.assets/10000201000002A2000000344E74644CD6D5BE2D.png)  

* <strong>Location:</strong> This pulls the <em>where the event occurred</em> field from the OSHA recordable case/incident.
  
![](../osha-300-log-report.assets/100002010000023600000068A5418660B0BD3734.png)  

* <strong>Description:</strong> This pulls the <em>Nature of Injury or Illness, Body part, and what object or substance directly harmed the employee</em> fields from the OSHA recordable case/incident.
  
![](../osha-300-log-report.assets/10000201000003120000017BD76119C6B193299D.png)  

* <strong>Death Case:</strong> This column displays N (for No) if the <em>patient died</em> checkbox field in the OSHA recordable case/incident isn't marked. The column displays Y (for Yes) if the checkbox is checked on the OSHA recordable case/incident.
  
![](../osha-300-log-report.assets/1000020100000132000000428544560A739E2129.png)  

* <strong>Days Away from Work Case:</strong> If the employee had any Lost Time documented for the OSHA recordable case in the Restrictions section and the accommodation. Lost time should be documented as the restriction type, and a Lost Time accommodation choice to it should be documented. The accommodation drop-down choices deemed <em>lost time</em> are looked at in system setting <em>Lost Time Type</em>. By default the 5 Lost Time accommodation choices are counted for this, but the system setting controls that. If there is Lost Time accommodation documented on an encounter linked to an OSHA recordable case, then this column displays Y (for Yes). If the employee didn't have any Lost Time types documented in any restrictions & accommodations, then this column displays N (for No). If there was no Lost Time, but there were other restriction(s), this column would still display N (for No) and the next column for restriction case would be displayed as Y.
  
![](../osha-300-log-report.assets/10000201000003AC000000F0003BEC7F7CE009FF.png)  
  
 ![](../osha-300-log-report.assets/10000201000000C80000008D5D467BF25AE36E61.png)  

  
![](../osha-300-log-report.assets/10000201000001930000003B9B0B09975167ADBD.png)  

* <strong>Job Transfer or Restriction Case:</strong> If the employee did <strong>not</strong> have any lost time documented in the restrictions and accommodations section for the OSHA reportable case, but <strong>does</strong> only have restrictions, then the column will display Y (for Yes). If the employee had lost time and restrictions, then they will show Y in the Days Away from Work Case column instead.
  
![](../osha-300-log-report.assets/1000020100000381000000F45ED062D439C7EB72.png)  

* <strong>Other Recordable Cases:</strong> If the employee had other cases/incidents in their chart record that were OSHA recordable, then this column will display Y (for Yes). If the employee had no other OSHA recordable cases/incidents in their record, then this column will display N (for No). Again, a case/incident is deemed OSHA recordable if the field <em>date determined recordable</em> is populated with a date.
* <strong>Days Away from Work:</strong> If the employee had any Lost Time documented in the restrictions & accommodations section of the encounter that is linked to the OSHA recordable case, the number of days of Lost Time will be calculated here and displays a total number.
   * If Lost time is documented in the Restrictions & Accommodations section of an encounter that is linked to an OSHA reportable case even for partial day, it counts as a full day in this calculated column.
   * If Lost time is documented in the Restrictions & Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
   * The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day. Day of incident/case does not count as a lost time day, if the lost time started that same day.
* <strong>Days Restricted:</strong> If the employee had any Restrictions documented in the restrictions & accommodations section of the encounter that is linked to the OSHA recordable case, the number of days Restricted will be calculated here and displays as a total number.
   * 180 days will be the max number it shows in this column. Anything more than 180 days will still only display as 180 days here in the column and is considered then a permanent restriction.
   * If the employee had Lost Time documented at any time for this OSHA recordable case, no days will display as calculations here in this Days Restricted column. Instead, the Days Away from Work column would be populated with the Lost Days count. The case is either Days Away from Work or Days Restricted, one or the other, even though the employee may have both lost time & restrictions on the OSHA recordable case.
   * If the employee only had Lost Time and no restrictions for the OSHA recordable case, nothing would display here in this column.
   * Overlapping restriction days are only counted once. For example; if an employee had a Bending restriction for 5 days, and had another separate type of restriction for No Lifting also but for only 3 days. If those dates on those restrictions are any overlapping days, the count in this column will not count overlapping days. So the column would display 5 as the calculation.
   * The calculation in this column does not include future days. For example; if the employee had a restriction from 1/1/2015 thru 1/31/2015 and you ran this OSHA 300 log on 1/15/2015, it would only show 14 as the calculation, not 30. It would show 30 if you ran the report on 1/31/2015.
   * The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column. A full day is counted as a start day and the end day being a day apart.
  
### Remaining Columns of the OSHA 300 Log  

  
![](../osha-300-log-report.assets/100002010000022A00000047CDF8433C7CCFD0DF.png)  

The columns for Injury, Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses will populate with a Y (for Yes) or an N (for No) based on which *injury/illness type* was selected on the OSHA recordable case.
  
![](../osha-300-log-report.assets/100002010000037400000045B46CB1CE32FB6F07.png)  

  
## Print Options  
  
The OSHA 300 Log can be printed and/or imported into a CSV/excel spreadsheet for further sorting using the hyperlinks available near the report title.
  
![](../osha-300-log-report.assets/100002010000022F00000067D6C285E8080DA318.png)  

  
## Filter Fields for Common Incident Search Report  
  
When you access the OSHA 300 Log from the Safety reports tab, you will be taken to the *Common Incident Search* report search criteria filters. In the Common Incident Search there are several search filter fields available to narrow down your search, but the OSHA 300 Log results any cases that are OSHA recordable, according to any search filter criteria entered.  
If you don't wish to filter, you can just scroll down to click SEARCH button and it will result any and every OSHA Recordable case (incident) for your system in a report summary. Again, this report is a layout that is customizable to your needs. If you wish additional search filter fields to be available in this Common Incident Search report, please contact your MIE Implementer.
  
![](../osha-300-log-report.assets/100002010000021C0000023761E4BB5C7CC0BFAA.png)  

See other help documentation titled *Common Incident Search Report.pdf* for detailed information on each search criteria field.
